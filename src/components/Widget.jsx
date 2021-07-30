import React, { useState, useEffect } from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import { build, updateSelectedCounts } from "../NodesUtil";

const Widget = () => {
  const [nodes, setNodes] = useState(build());
  const [expanded, setExpanded] = useState([]);
  const [checked, setChecked] = useState([]);
  const [rootChecked, setRootChecked] = useState([]);

  const onCheck = (checked, targetNode) => {
    setChecked(checked);
    console.log(checked);
    console.log(targetNode);
    updateSelectedCounts(nodes, targetNode.value, targetNode.checked);
    console.log(nodes);
    // rootChecked = makeRootChecked(nodes);
    // console.log(rootChecked);
  };

  const onExpand = (expanded) => {
    setExpanded(expanded);
  };

  const getCheckedNodes = (nodes) => {
    const values = [];
    for (let n of nodes) {
      values.push(n.value);
      if (n.children) {
        values.push(...getCheckedNodes(n.children, false));
      }
      return values;
    }
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

export default Widget;
