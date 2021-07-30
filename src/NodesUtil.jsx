export const build = () => {
  let nodes = [
    {
      label: "Sol System",
      children: [
        { label: "Mercury" },
        {
          label: "Jupiter",
          children: [
            {
              label: "Io",
              children: [
                {
                  label: "SubIo1",
                },
                {
                  label: "SubIo2",
                },
              ],
            },
            { label: "Europa" },
          ],
        },
      ],
    },
  ];

  let flattenNodes = {};
  initNodes(nodes, flattenNodes, null);
  return [nodes, flattenNodes];
};

const initNodes = (nodes, flattenNodes, parents) => {
  let totalCount = 0;

  for (let n of nodes) {
    n.value = composeValue(parents, n.label);
    n.selectedCount = 0;
    n.parents = parents;

    let childParents = [n];
    if (n.children) {
      if (parents) childParents = parents.concat(childParents);

      n.count = initNodes(n.children, flattenNodes, childParents);
    } else {
      n.count = 1;
    }

    flattenNodes[n.value] = n;
    totalCount += n.count;
  }
  return totalCount;
};

const composeValue = (parents, label) => {
  let value = "";
  if (parents) {
    for (let i = 0; i < parents.length; i++) {
      value += parents[i].label.toLowerCase() + "%*";
    }
  }
  value += label.toLowerCase();

  return value;
};

export const updateSelectedCounts = (node, checked) => {
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
      updateChildrenChecked(child.children, checked);
    }
  }
};

export const produceRootCheckedArray = (nodes) => {
  let rootChecked = [];
  if (nodes) {
    for (let n of nodes) {
      if (n.selectedCount == n.count) rootChecked.push(n.value);
      else if (n.selectedCount > 0)
        rootChecked = rootChecked.concat(produceRootCheckedArray(n.children));
    }
  }
  return rootChecked;
};
