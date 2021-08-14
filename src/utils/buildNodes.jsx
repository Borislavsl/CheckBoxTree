import { delimiter } from "./constants";
import {
  getTreeLeavesNode,
  updateNodeAndParentsCheckedCount,
} from "./processNodes";

export const build = (input, treeLeaves) => {
  let nodes = initNodes(input);

  let flattenNodes = {};
  let checkedLeaves = [];
  prepareNodes(nodes, flattenNodes, checkedLeaves, treeLeaves, null);

  return [nodes, flattenNodes, checkedLeaves];
};

const initNodes = (input) => {
  let nodes = [];
  for (let i of input) {
    if (i.count && i.count > 0) {
      let n = {};
      n.label = i.label + " (" + i.count + ")";

      if (i.items?.length > 0) n.children = initNodes(i.items);

      nodes.push(n);
    }
  }
  return nodes;
};

const prepareNodes = (
  nodes,
  flattenNodes,
  checkedLeaves,
  treeLeaves,
  parents
) => {
  let totalCount = 0;

  for (let n of nodes) {
    n.value = composeValue(parents, n.label);
    n.checkedCount = 0;
    n.parents = parents;

    if (n.children) {
      let childParents = [n];
      if (parents) childParents = parents.concat(childParents);

      n.childCount = prepareNodes(
        n.children,
        flattenNodes,
        checkedLeaves,
        treeLeaves,
        childParents
      );
    } else {
      n.childCount = 1;

      if (getTreeLeavesNode(n.value, treeLeaves)?.checked === true) {
        updateNodeAndParentsCheckedCount(n, true);
        checkedLeaves.push(n.value);
      }
    }

    flattenNodes[n.value] = n;
    totalCount += n.childCount;
  }
  return totalCount;
};

const composeValue = (parents, label) => {
  let value = "";
  if (parents) {
    for (let i = 0; i < parents.length; i++) {
      value += valueLabel(parents[i].label) + delimiter;
    }
  }

  value += valueLabel(label);

  return value;
};

const valueLabel = (label) => {
  let leftBracket = label.lastIndexOf(" (");

  return label.substring(0, leftBracket);
};
