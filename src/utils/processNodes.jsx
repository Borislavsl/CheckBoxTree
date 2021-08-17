import { delimiter } from "./constants";

export const updateCheckedCountsAndTreeLeaves = (
  path,
  checked,
  nodes,
  treeLeaves
) => {
  const node = getNode(path, nodes);
  if (node) {
    updateNodeAndParentsCheckedCount(node, checked);

    updateLeavesCheckedStatus(node.value, checked, treeLeaves);
    updateChildrenCheckedCountAndTreeLeaves(node, checked, treeLeaves);

    return treeLeaves;
  }
};

const getNode = (path, nodes) => {
  for (let node of nodes) {
    if (node.value === path) return node;
    if (node.children && path.startsWith(node.value + delimiter))
      return getNode(path, node.children);
  }

  return null;
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
    // this is a leaf, then its path should be added to treeLeaves and the corresponding leaf "checked" property updated
    updateTreeLeaves(node.value, checked, treeLeaves);
  }
};

const updateTreeLeaves = (path, checked, treeLeaves) => {
  const parts = path.split(delimiter);
  addTreeLeavesPath(parts, 0, checked, treeLeaves);
};

const addTreeLeavesPath = (parts, i, checked, obj) => {
  if (i === parts.length) {
    // this the end of path - then the object should have "checked" property with "value" true or "false".
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
  // get the node in treeLeaves, corresponding to path
  const obj = getTreeLeavesNode(path, treeLeaves);
  if (obj) {
    // update "checked" status of all leaves in treeLeaves, which correspond to that node.
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
      // if all children of a node are checked, then at that node the path stops.
      if (n.checkedCount == n.childCount) rootChecked.push(n.value);
      // the node is partially checked, then continue to its children
      else if (n.checkedCount > 0)
        rootChecked = rootChecked.concat(produceRootCheckedArray(n.children));
    }
  }

  return rootChecked;
};
