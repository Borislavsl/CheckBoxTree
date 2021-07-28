import React, { useState } from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import { build } from "../privilegeAdmin";
import _ from "lodash";

const Widget = () => {
  const [nodes, setNodes] = useState(build());
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);

  const onCheck = (checked, targetNode) => {
    setChecked(checked);
    console.log(checked);
    console.log(targetNode);
    console.log(nodes);
  };

  const onExpand = (expanded) => {
    setExpanded(expanded);
    console.log(expanded);
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
