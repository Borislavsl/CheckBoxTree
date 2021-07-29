export const initNodes = (nodes, parents) => {
  let totalCount = 0;

  for (let n of nodes) {
    n.parents = parents;
    n.selectedCount = 0;
    let childParents = [n];

    if (n.children) {
      if (parents) childParents = childParents.concat(parents);

      n.count = initNodes(n.children, childParents);
    } else {
      n.count = 1;
    }
    totalCount += n.count;
  }
  return totalCount;
};

export const updateSelectedCounts = (nodes, value, checked) => {
  const node = getNode(nodes, value);
  if (node) {
    const parents = node.parents;
    if (parents) {
      const changeCount = checked
        ? node.count - node.selectedCount
        : -node.selectedCount;

      for (let parent of parents) parent.selectedCount += changeCount;
    }

    node.selectedCount = checked ? node.count : 0;

    updateChildrenChecked(node.children, checked);
  }
};

const updateChildrenChecked = (children, checked) => {
  if (children) {
    for (let child of children) {
      child.selectedCount = checked ? child.count : 0;
      updateChildrenChecked(child.children);
    }
  }
};

const getNode = (nodes, value) => {
  if (nodes) {
    for (let n of nodes) {
      if (n.value === value) return n;

      const node = getNode(n.children, value);
      if (node) return node;
    }
  }

  return null;
};
