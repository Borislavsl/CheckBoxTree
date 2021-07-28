import React from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
//import { build } from "../data";
import { build } from "../privilegeAdmin";
import { Input, Dropdown } from "semantic-ui-react";
import _ from "lodash";

class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: build(),
      checked: [
        "administrators/acme-labs.local/vinay@acme-labs.local",
        "account operators/acme-labs.local/lawrence.priest@acme-labs.local"
      ],
      expanded: [],
      isDropdownExpanded: false,
      keyword: ""
    };
  }

  onCheck = checked => {
    this.setState({ checked }, () => {
      console.log(this.state.checked);
    });
  };

  onExpand = expanded => {
    this.setState({ expanded }, () => {
      console.log(this.state.expanded);
    });
  };

  renderTree = () => {
    this.setState(
      prevState => {
        return {
          ...prevState,
          isDropdownExpanded: !prevState.isDropdownExpanded
        };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  onSearchInputChange = (event, data, searchedNodes) => {
    this.setState(prevState => {
      if (prevState.keyword.trim() && !data.value.trim()) {
        return {
          expanded: [],
          keyword: data.value
        };
      }
      return {
        expanded: this.getAllValuesFromNodes(searchedNodes, true),
        keyword: data.value
      };
    });
  };

  getAllValuesFromNodes = (nodes, firstLevel) => {
    if (firstLevel) {
      const values = [];
      for (let n of nodes) {
        values.push(n.value);
        if (n.children) {
          values.push(...this.getAllValuesFromNodes(n.children, false));
        }
      }
      return values;
    } else {
      const values = [];
      for (let n of nodes) {
        values.push(n.value);
        if (n.children) {
          values.push(...this.getAllValuesFromNodes(n.children, false));
        }
      }
      return values;
    }
  };

  keywordFilter = (nodes, keyword) => {
    let newNodes = [];
    for (let n of nodes) {
      if (n.children) {
        const nextNodes = this.keywordFilter(n.children, keyword);
        if (nextNodes.length > 0) {
          n.children = nextNodes;
        } else if (n.label.toLowerCase().includes(keyword.toLowerCase())) {
          n.children = nextNodes.length > 0 ? nextNodes : [];
        }
        if (
          nextNodes.length > 0 ||
          n.label.toLowerCase().includes(keyword.toLowerCase())
        ) {
          n.label = this.getHighlightText(n.label, keyword);
          newNodes.push(n);
        }
      } else {
        if (n.label.toLowerCase().includes(keyword.toLowerCase())) {
          n.label = this.getHighlightText(n.label, keyword);
          newNodes.push(n);
        }
      }
    }
    return newNodes;
  };

  getHighlightText = (text, keyword) => {
    const startIndex = text.indexOf(keyword);
    return startIndex !== -1 ? (
      <span>
        {text.substring(0, startIndex)}
        <span style={{ color: "red" }}>
          {text.substring(startIndex, startIndex + keyword.length)}
        </span>
        {text.substring(startIndex + keyword.length)}
      </span>
    ) : (
      <span>{text}</span>
    );
  };

  render() {
    const { checked, expanded, nodes, isDropdownExpanded } = this.state;
    let searchedNodes = this.state.keyword.trim()
      ? this.keywordFilter(_.cloneDeep(nodes), this.state.keyword)
      : nodes;
    return (
      <div>
        <Dropdown
          text="Select"
          fluid
          selection
          options={[]}
          onClick={this.renderTree}
        />
        {isDropdownExpanded && (
          <div>
            <Input
              style={{ marginBottom: "20px" }}
              fluid
              icon="search"
              placeholder="Search"
              iconPosition="left"
              onChange={(event, data) => {
                this.onSearchInputChange(event, data, searchedNodes);
              }}
            />
            <CheckboxTree
              nodes={searchedNodes}
              checked={checked}
              expanded={expanded}
              onCheck={this.onCheck}
              onExpand={this.onExpand}
              showNodeIcon={true}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Widget;
