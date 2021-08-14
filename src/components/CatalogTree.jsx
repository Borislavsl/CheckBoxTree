import React, { useState, useEffect } from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import { build } from "../utils/buildNodes";
import {
  updateCheckedCountsAndTreeLeaves,
  produceRootCheckedArray,
} from "../utils/processNodes";

const CatalogTree = ({ input, onFilterChecked, disabled }) => {
  const [expanded, setExpanded] = useState([]);

  // nodes is a tree used as props to the CheckboxTree component, it is constructed after each check/uncheck.
  // flattenNodes contains all nodes in a flatten object having as a property name - a node value, and as property value - the reference to the node itself.
  // It is used to find faster a node in nodes tree for a given target node value after each check/uncheck (to avoid parsing the nodes tree)
  // checkedLeaves array contains the node values of checked leaves.
  const [[nodes, flattenNodes, checkedLeaves], setNodes] = useState([
    [],
    [],
    [],
  ]);

  // treeLeaves object contains paths to leaves, in order to have fast access to the children leaves of a node in nodes.
  // It accumulates its structure with the paths to new leaves which are checked/unchecked by the user, during the whole session.
  // leaves objects contain as a property the checked status, during the whole session.
  const [treeLeaves, setTreeLeaves] = useState({});

  // checked array of strings contains values of the checked leaf nodes, during the current interaction (between user checks/unchecks).
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    const buildResult = build(input, treeLeaves);
    setNodes(buildResult); // Set the nodes props for the CheckboxTree component from the input props, which is the response of the previous request.

    setChecked(buildResult[2]); // Set the checked props for the CheckboxTree component from the leaves, which are kept during the whole session

    return () => {};
  }, [input]);

  const onCheck = (checked, targetNode) => {
    setChecked(checked);

    // The checkedCount property of the target node, of its ancestors and successors, should be updated
    // treeLeaves object should be updated after user check/uncheck. treeLeaves will be used after new nodes are build from the request
    const newTreeLeaves = updateCheckedCountsAndTreeLeaves(
      flattenNodes[targetNode.value],
      targetNode.checked,
      treeLeaves
    );
    setTreeLeaves(newTreeLeaves);

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
