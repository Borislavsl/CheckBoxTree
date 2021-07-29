import React, { useState, useEffect } from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
// import { build } from "../privilegeAdmin";
import { initNodes, updateSelectedCounts } from "../NodesUtil";

const Widget = () => {
  const [nodes, setNodes] = useState([
    {
      value: "sol",
      label: "Sol System",
      children: [
        { value: "mercury", label: "Mercury" },
        {
          value: "jupiter",
          label: "Jupiter",
          children: [
            {
              value: "io",
              label: "Io",
              children: [
                {
                  value: "subio1",
                  label: "SubIo1",
                },
                {
                  value: "subio2",
                  label: "SubIo2",
                },
              ],
            },
            { value: "europa", label: "Europa" },
          ],
        },
      ],
    },
  ]);
  const [expanded, setExpanded] = useState([]);
  const [checked, setChecked] = useState([]);
  const [rootChecked, setRootChecked] = useState([]);

  useEffect(() => {
    initNodes(nodes, null);
    return () => {
      // cleanup
    };
  }, []);

  const onCheck = (checked, targetNode) => {
    setChecked(checked);
    console.log(checked);
    console.log(targetNode);
    updateSelectedCounts(nodes, targetNode.value, targetNode.checked);
    console.log(nodes);
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
