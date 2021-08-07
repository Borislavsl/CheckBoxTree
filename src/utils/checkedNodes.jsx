export const updateCheckedCountsAndLeaves = (node, checked, checkedLeaves) => {
  if (node) {
    const parents = node.parents;
    if (parents) {
      const changeCount = checked
        ? node.childCount - node.checkedCount
        : -node.checkedCount;

      for (let parent of parents) parent.checkedCount += changeCount;
    }

    node.checkedCount = checked ? node.childCount : 0;

    return updateCheckedChildren(node, checked, checkedLeaves);
  }
};

const updateCheckedChildren = (node, checked, checkedLeaves) => {
  if (node.children) {
    for (let child of node.children) {
      child.checkedCount = checked ? child.childCount : 0;
      checkedLeaves = updateCheckedChildren(child, checked, checkedLeaves);
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
      if (n.checkedCount == n.childCount) rootChecked.push(n.value);
      else if (n.checkedCount > 0)
        rootChecked = rootChecked.concat(produceRootCheckedArray(n.children));
    }
  }

  return rootChecked;
};
