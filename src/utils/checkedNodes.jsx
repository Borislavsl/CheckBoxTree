export const updateCheckedCountsAndLeaves = (node, checked, leaves) => {
  if (node) {
    updateNodeAndParentsCheckedCount(node, checked);

    leaves = updateLeavesCheckedStatus(node, checked, leaves);
    return updateChildrenCheckedCountAndLeaves(node, checked, leaves);
  }
};

export const updateNodeAndParentsCheckedCount = (node, checked) => {
  if (!node) return;

  const parents = node.parents;
  if (parents) {
    const changeCount = checked
      ? node.childCount - node.checkedCount
      : -node.checkedCount;

    for (let parent of parents) parent.checkedCount += changeCount;
  }

  node.checkedCount = checked ? node.childCount : 0;
};

const updateChildrenCheckedCountAndLeaves = (node, checked, leaves) => {
  if (node.children) {
    for (let child of node.children) {
      child.checkedCount = checked ? child.childCount : 0;
      leaves = updateChildrenCheckedCountAndLeaves(child, checked, leaves);
    }
  } else {
    leaves[node.value] = checked;
  }

  return leaves;
};

// TODO : make more efficient search
const updateLeavesCheckedStatus = (node, checked, leaves) => {
  if (node.children) {
    for (let leaf in leaves) {
      if (leaves[leaf] !== checked && leaf.startsWith(node.value)) {
        leaves[leaf] = checked;
      }
    }
  }
  return leaves;
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
