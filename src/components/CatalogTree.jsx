import React, { useState, useEffect } from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import {
  build,
  updateSelectedCounts,
  produceRootCheckedArray,
} from "../NodesUtil";

const CatalogTree = ({ input }) => {
  const [[nodes, flattenNodes], setNodes] = useState(build(input));
  const [expanded, setExpanded] = useState([]);
  const [checked, setChecked] = useState([]);

  const onCheck = (checked, targetNode) => {
    setChecked(checked);
    console.log(checked);
    console.log(targetNode);
    updateSelectedCounts(flattenNodes[targetNode.value], targetNode.checked);
    console.log(nodes);
    let rootChecked = produceRootCheckedArray(nodes);
    console.log(rootChecked);
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
