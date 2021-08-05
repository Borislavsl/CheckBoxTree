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
    let n = {};
    n.label = i.label + (i.count ? " (" + i.count + ")" : "");

    if (i.items?.length > 0) n.children = initNodes(i.items);

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
      value += valueLabel(parents[i].label) + "%*";
    }
  }

  value += valueLabel(label);

  return value;
};

const valueLabel = (label) => {
  let leftBracket = label.lastIndexOf(" (");
  if (leftBracket <= 0) {
    leftBracket = label.lastIndexOf("(");
  }
  if (leftBracket <= 0) {
    return label;
  }
  return label.substring(0, leftBracket);
};

export const updateSelectedNodes = (flattenNodes, checked) => {
  for (let check of checked) {
    const node = flattenNodes[check];
    updateSelectedCounts(node, true);
  }
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
