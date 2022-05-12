/**
 * This example demonstrates a simple file that no longer works when migrating Devextreme from 21.1.x to 21.2.x.
 */
import React from "react";
import ReactDOM from "react-dom";
import { DataGrid } from "devextreme-react";

export const ExampleDataGrid = () => {
    const parent = document.getElementById("react-root");
    ReactDOM.render(React.createElement(<DataGrid />), parent);
};
