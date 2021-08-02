export const build = (input) => {
  const inputObject = JSON.parse(input);
  let nodes = initNodes(inputObject);
  let flattenNodes = {};
  prepareNodes(nodes, flattenNodes, null);
  return [nodes, flattenNodes];
};

const initNodes = (input) => {
  let nodes = [];
  for (let i of input) {
    let n = {};
    n.label = i.title + (i.count ? " (" + i.count + ")" : "");

    if (i.Children?.length > 0) n.children = initNodes(i.Children);

    nodes.push(n);
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
      value += parents[i].label + "%*";
    }
  }
  value += label;

  return value;
};

export const updateSelectedCounts = (node, checked) => {
  if (node) {
    const parents = node.parents;
    if (parents) {
      const changeCount = checked
        ? node.childCount - node.selectedCount
        : -node.selectedCount;

      for (let parent of parents) parent.selectedCount += changeCount;
    }

    node.selectedCount = checked ? node.childCount : 0;

    updateChildrenChecked(node.children, checked);
  }
};

const updateChildrenChecked = (children, checked) => {
  if (children) {
    for (let child of children) {
      child.selectedCount = checked ? child.childCount : 0;
      updateChildrenChecked(child.children, checked);
    }
  }
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
