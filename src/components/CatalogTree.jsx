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
  // checkedLeaves array contains the node values of checked leaves.
  const [[nodes, checkedLeaves], setNodes] = useState([[], [], []]);

  // Examples of nodes:
  //
  // 1:
  // value: "Lincoln"
  // label: "Lincoln (642)"
  // childCount: 3397
  // checkedCount: 90     The node is partially checked
  // parents: null
  // children: Array(23)
  // 	0:
  // 	value: "Lincoln%*1998"
  // 	label: "1998 (193)"
  // 	childCount: 88
  // 	checkedCount: 88  The node is totally checked
  // 	parents:
  // 		0: {label: "Lincoln (642)", children: Array(23), value: "Lincoln", checkedCount: 90, parents: null, …}
  // 	children: Array(4)
  // 		0:
  // 		value: "Lincoln%*1998%*Continental"
  // 		label: "Continental (79)"
  // 		childCount: 18
  // 		checkedCount: 18 The node is totally checked
  // 		parents:
  // 			0: {label: "Lincoln (642)", children: Array(23), value: "Lincoln", checkedCount: 90, parents: null, …}
  // 			1: {label: "1998 (193)", children: Array(4), value: "Lincoln%*1998", checkedCount: 88, parents: Array(1), …}
  // 		children: Array(18)
  // 			0:
  // 			value: "Lincoln%*1998%*Continental%*Accessory Drive"
  // 			label: "Accessory Drive (3)"
  // 			checkedCount: 1
  // 			childCount: 1   The leaf is checked
  // 			parents:
  // 				0: {label: "Lincoln (642)", children: Array(23), value: "Lincoln", checkedCount: 90, parents: null, …}
  // 				1: {label: "1998 (193)", children: Array(4), value: "Lincoln%*1998", checkedCount: 88, parents: Array(1), …}
  // 				2: {label: "Continental (79)", children: Array(18), value: "Lincoln%*1998%*Continental", checkedCount: 18, parents: Array(2), …}
  // 			...

  // treeLeaves object contains paths to leaves, in order to have fast access to the children leaves of a node in nodes.
  // It accumulates its structure with the paths to new leaves which are checked/unchecked by the user, during the whole session.
  // leaves objects contain as a property the checked status, during the whole session.
  const [treeLeaves, setTreeLeaves] = useState({});

  // Below is a sample of treeLeaves object: It has a "children" property. Its value is an object having two properties: "Lincoln" and "Mercury". "Lincoln" value is an object having "children" property.
  // Its value is an object with "1999" property. Its value is an object with "children" having "Continental" and "Navigator" property. "Navigator" has "children" property which is an object having
  // "AirConditioning" property having as value an object with property "checked" with value "true".
  //
  // children:
  // 	Lincoln: children:
  // 				1999: children:
  // 						Continental: children:
  // 							Air Conditioning: {checked: true}
  // 						Navigator: children:
  // 							Air Conditioning: {checked: true}
  // 							Anti-Lock Control: {checked: true}
  // 							Audio Unit: {checked: true}
  // 							Automatic Transmission - 4R70W: {checked: false}
  //  Mercury: children:
  //       2010: children:
  //           Grand Marquis: children:
  //             Automatic Transaxle/Transmission - 4R70E/4R75E: {checked: true}
  //             Climate Control: {checked: true}
  //             Climate Control System - General Information and Diagnostics: {checked: true}

  // checked array of strings contains values of the checked leaf nodes, during the current interaction (between user checks/unchecks).
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    const buildResult = build(input, treeLeaves);
    setNodes(buildResult); // Set the nodes props for the CheckboxTree component from the input props, which is the response of the previous request.

    setChecked(buildResult[1]); // Set the checked props for the CheckboxTree component from the leaves, which are kept during the whole session

    return () => {};
  }, [input]);

  const onCheck = (checked, targetNode) => {
    setChecked(checked);

    // The checkedCount property of the target node, of its ancestors and successors, should be updated
    // treeLeaves object should be updated after user check/uncheck. treeLeaves will be used after new nodes are build from the request
    const newTreeLeaves = updateCheckedCountsAndTreeLeaves(
      targetNode.value,
      targetNode.checked,
      nodes,
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
