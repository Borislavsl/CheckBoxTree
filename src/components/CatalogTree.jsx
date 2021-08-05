import React, { useState, useEffect } from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import {
  build,
  updateSelectedCounts,
  produceRootCheckedArray,
} from "../NodesUtil";

const CatalogTree = ({ input, onFilterChecked }) => {
  const [expanded, setExpanded] = useState([]);
  const [checked, setChecked] = useState([]);
  const [[nodes, flattenNodes], setNodes] = useState([[], []]);

  useEffect(() => {
    setNodes(build(input, checked));
    return () => {};
  }, [input]);

  const onCheck = (checked, targetNode) => {
    setChecked(checked);
    updateSelectedCounts(flattenNodes[targetNode.value], targetNode.checked);
    console.log("Nodes: ", nodes);

    let rootChecked = produceRootCheckedArray(nodes);
    onFilterChecked(rootChecked);
  };

  const onExpand = (expanded) => {
    setExpanded(expanded);
  };

  return (
    <div>
      <CheckboxTree
        checkModel="all"
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
