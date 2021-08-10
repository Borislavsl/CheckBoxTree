import React, { useState, useEffect } from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import { build } from "../utils/buildNodes";
import {
  updateCheckedCountsAndLeaves,
  produceRootCheckedArray,
} from "../utils/checkedNodes";

const CatalogTree = ({ input, onFilterChecked, disabled }) => {
  const [expanded, setExpanded] = useState([]);

  // leaves object contains as properties the values of the leaf nodes and their checked status, during the whole session.
  const [leaves, setLeaves] = useState({});

  // checked array of strings contains values of the checked leaf nodes, during the current interaction (between user checks/unchecks).
  const [checked, setChecked] = useState([]);

  // nodes is a tree used as props to the CheckboxTree component, it is constructed after each check/uncheck.
  // flattenNodes contains all nodes in a flatten object having as a property name - a node value, and as property value - the reference to the node itself.
  // It is used to find faster a node in nodes tree for a given target node value after each check/uncheck (to avoid parsing the nodes tree)
  // checkedLeaves array contains the node values of checked leaves.
  const [[nodes, flattenNodes, checkedLeaves], setNodes] = useState([
    [],
    [],
    [],
  ]);

  useEffect(() => {
    const buildResult = build(input, leaves);
    setNodes(buildResult); // Set the nodes props for the CheckboxTree component from the input props, which is the response of the previous request.
    // leaves are passed as a second parameter to update the checkedCount property of nodes.

    setChecked(buildResult[2]); // Set the checked props for the CheckboxTree component from the leaves, which are kept during the whole session

    return () => {};
  }, [input]);

  const onCheck = (checked, targetNode) => {
    setChecked(checked);

    // The checkedCount property of the target node, of its ancestors and successors, should be updated
    // leaves object should be updated after user check/uncheck. leaves will be used after new nodes are build from the request
    const newLeaves = updateCheckedCountsAndLeaves(
      flattenNodes[targetNode.value],
      targetNode.checked,
      leaves
    );
    setLeaves(newLeaves);

    let rootChecked = produceRootCheckedArray(nodes);
    onFilterChecked(rootChecked);
  };

  const onExpand = (expanded) => {
    setExpanded(expanded);
  };

  return (
    <div>
      <CheckboxTree
        disabled={disabled}
        nodes={nodes}
        checked={checked}
        expanded={expanded}
        onCheck={onCheck}
        onExpand={onExpand}
        showNodeIcon={true}
      />
    </div>
  );
};

export default CatalogTree;
