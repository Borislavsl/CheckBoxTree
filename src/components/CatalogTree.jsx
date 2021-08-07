import React, { useState, useEffect } from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import { build } from "../utils/buildNodes";
import {
  updateCheckedCountsAndLeaves,
  produceRootCheckedArray,
} from "../utils/checkedNodes";

const CatalogTree = ({ input, onFilterChecked }) => {
  const [expanded, setExpanded] = useState([]);

  // checkedLeaves array of strings contain values of the checked leaf nodes, during the whole session.
  const [checkedLeaves, setCheckedLeaves] = useState([]);

  // checked array of strings contains values of the checked leaf nodes, during the current interaction (between user checks/unchecks).
  const [checked, setChecked] = useState([]);

  // nodes is a tree used as props to the CheckboxTree component, it is constructed after each check/uncheck.
  // flattenNodes contains all nodes in a flatten object having as a property name - a node value, and as property value - the reference to node itself.
  // It is used to find faster a node in nodes tree for a given target node value after each check/uncheck (to avoid parsing the nodes tree)
  const [[nodes, flattenNodes], setNodes] = useState([[], []]);

  useEffect(() => {
    setChecked(checkedLeaves); // Set the checked props for the CheckboxTree component from the checkedLeaves, which are kept during the whole session

    setNodes(build(input, checkedLeaves)); // Set the nodes props for the CheckboxTree component from the input props, which is the response of the previous request.
    // checkedLeaves are passed as a second parameter to update the checkedCount property of nodes.

    return () => {};
  }, [input]);

  const onCheck = (checked, targetNode) => {
    setChecked(checked);
    // checkedLeaves array should be updated after user check/uncheck.
    // The checkedCount property of the target node, its ancestors and successors, should be updated
    const newCheckedLeaves = updateCheckedCountsAndLeaves(
      flattenNodes[targetNode.value],
      targetNode.checked,
      checkedLeaves
    );
    setCheckedLeaves(newCheckedLeaves);

    let rootChecked = produceRootCheckedArray(nodes);
    onFilterChecked(rootChecked);
  };

  const onExpand = (expanded) => {
    setExpanded(expanded);
  };

  return (
    <div>
      <CheckboxTree
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
