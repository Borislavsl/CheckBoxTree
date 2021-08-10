import { updateNodeAndParentsCheckedCount } from "./checkedNodes";

var currentLeaves;

export const build = (input, leaves) => {
  let nodes = initNodes(input);

  let flattenNodes = {};
  currentLeaves = {};
  prepareNodes(nodes, flattenNodes, null);

  const checkedLeaves = getCheckedLeavesAndUpdateCheckedCountsUp(leaves);

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

const prepareNodes = (nodes, flattenNodes, parents) => {
  let totalCount = 0;

  for (let n of nodes) {
    n.value = composeValue(parents, n.label);
    n.checkedCount = 0;
    n.parents = parents;

    if (n.children) {
      let childParents = [n];
      if (parents) childParents = parents.concat(childParents);

      n.childCount = prepareNodes(n.children, flattenNodes, childParents);
    } else {
      currentLeaves[n.value] = n;

      n.childCount = 1;
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
      value += valueLabel(parents[i].label) + "%*";
    }
  }

  value += valueLabel(label);

  return value;
};

const valueLabel = (label) => {
  let leftBracket = label.lastIndexOf(" (");

  return label.substring(0, leftBracket);
};

const getCheckedLeavesAndUpdateCheckedCountsUp = (leaves) => {
  let checkedLeaves = [];
  for (let leaf in currentLeaves) {
    if (leaves[leaf] === true) {
      updateNodeAndParentsCheckedCount(currentLeaves[leaf], true);
      checkedLeaves.push(leaf);
    }
  }
  return checkedLeaves;
};
