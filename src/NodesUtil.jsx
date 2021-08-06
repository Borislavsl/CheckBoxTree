export const build = (input, checked) => {
  let nodes = initNodes(input);
  let flattenNodes = {};
  prepareNodes(nodes, flattenNodes, null);

  updateSelectedNodes(flattenNodes, checked);

  return [nodes, flattenNodes];
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
    n.selectedCount = 0;
    n.parents = parents;

    if (n.children) {
      let childParents = [n];
      if (parents) childParents = parents.concat(childParents);

      n.childCount = prepareNodes(n.children, flattenNodes, childParents);
    } else {
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

const updateSelectedNodes = (flattenNodes, checked) => {
  for (let check of checked) {
    const node = flattenNodes[check];
    updateSelectedCounts(node, true, null);
  }
};

export const updateSelectedCounts = (node, checked, checkedLeaves) => {
  if (node) {
    const parents = node.parents;
    if (parents) {
      const changeCount = checked
        ? node.childCount - node.selectedCount
        : -node.selectedCount;

      for (let parent of parents) parent.selectedCount += changeCount;
    }

    node.selectedCount = checked ? node.childCount : 0;

    return updateChildrenChecked(node, checked, checkedLeaves);
  }
};

const updateChildrenChecked = (node, checked, checkedLeaves) => {
  if (node.children) {
    for (let child of node.children) {
      child.selectedCount = checked ? child.childCount : 0;
      checkedLeaves = updateChildrenChecked(child, checked, checkedLeaves);
    }
  } else if (checkedLeaves) {
    if (checked) {
      checkedLeaves.push(node.value);
    } else {
      checkedLeaves = checkedLeaves.filter((item) => item !== node.value);
    }
  }
  return checkedLeaves;
};

export const produceRootCheckedArray = (nodes) => {
  let rootChecked = [];
  if (nodes) {
    for (let n of nodes) {
      if (n.selectedCount == n.childCount) rootChecked.push(n.value);
      else if (n.selectedCount > 0)
        rootChecked = rootChecked.concat(produceRootCheckedArray(n.children));
    }
  }

  return rootChecked;
};
