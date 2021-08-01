import React from "react";
import { render } from "react-dom";
import "./styles.css";
import { inputCatalog } from "./inputCatalog";

import CatalogTree from "./components/CatalogTree";

render(<CatalogTree input = {inputCatalog}/>, document.getElementById("root"));
