import { delimiter } from "./constants";

export const updateCheckedCountsAndTreeLeaves = (node, checked, treeLeaves) => {
  if (node) {
    updateNodeAndParentsCheckedCount(node, checked);

    updateLeavesCheckedStatus(node.value, checked, treeLeaves);
    updateChildrenCheckedCountAndTreeLeaves(node, checked, treeLeaves);

    return treeLeaves;
  }
};

export const updateNodeAndParentsCheckedCount = (node, checked) => {
  if (node.parents) {
    const changeCount = checked
      ? node.childCount - node.checkedCount
      : -node.checkedCount;

    for (let parent of node.parents) {
      parent.checkedCount += changeCount;
    }
  }

  node.checkedCount = checked ? node.childCount : 0;
};

const updateChildrenCheckedCountAndTreeLeaves = (node, checked, treeLeaves) => {
  if (node.children) {
    for (let child of node.children) {
      child.checkedCount = checked ? child.childCount : 0;
      updateChildrenCheckedCountAndTreeLeaves(child, checked, treeLeaves);
    }
  } else {
    updateTreeLeaves(node.value, checked, treeLeaves);
  }
};

const updateTreeLeaves = (path, checked, treeLeaves) => {
  const parts = path.split(delimiter);
  addTreeLeavesPath(parts, 0, checked, treeLeaves);
};

const addTreeLeavesPath = (parts, i, checked, obj) => {
  if (i === parts.length) {
    obj.checked = checked;
  } else {
    if (!obj.children) {
      obj.children = {};
    }
    if (!obj.children[parts[i]]) {
      obj.children[parts[i]] = {};
    }
    addTreeLeavesPath(parts, i + 1, checked, obj.children[parts[i]]);
  }
};

const updateLeavesCheckedStatus = (path, checked, treeLeaves) => {
  const obj = getTreeLeavesNode(path, treeLeaves);
  if (obj) {
    updateChildrenLeaves(obj, checked);
  }
};

export const getTreeLeavesNode = (path, treeLeaves) => {
  const parts = path.split(delimiter);
  let obj = treeLeaves;
  for (let part of parts) {
    if (obj.children && obj.children[part]) {
      obj = obj.children[part];
    } else {
      return null;
    }
  }
  return obj;
};

const updateChildrenLeaves = (obj, checked) => {
  if (obj.children) {
    for (let child in obj.children) {
      updateChildrenLeaves(obj.children[child], checked);
    }
  } else {
    obj.checked = checked;
  }
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
