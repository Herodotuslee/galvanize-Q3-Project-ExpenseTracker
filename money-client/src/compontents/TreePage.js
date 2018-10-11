import React, { Component } from "react";

import Tree from "react-tree-graph";

const data = {
  name: "APP",
  children: [
    {
      name: "MainPage",
      children: [
        {
          name: "AddPage"
        },
        {
          name: "Today expense chart"
        },
        {
          name: "Today Expense List",
          children: [
            {
              name: "Item",
              children: [
                {
                  name: "Edit"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "All Groceries",
      children: [
        {
          name: "Grocery"
        }
      ]
    }
  ]
};

class TreePage extends Component {
  render() {
    return (
      <div>
        <Tree data={data} height={1000} width={1000}>
          <text dy="15" dx="5" stroke="#000000" fill="#000000">
            Custom Title
          </text>
        </Tree>
      </div>
    );
  }
}

export default TreePage;
