import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import "./styles.css";
import { inputApplication } from "./inputApplication";
import { inputCatalog } from "./inputCatalog";
import { inputSupplier } from "./inputSupplier";
import { inputPriceRange } from "./inputPriceRange";

import CatalogTree from "./components/CatalogTree";

render(<CatalogTree input={inputCatalog} />, document.getElementById("root"));
function App() {
  const [applicationChecked, setApplicationChecked] = useState("");
  const [catalogChecked, setCatalogChecked] = useState("");
  const [supplierChecked, setSupplierChecked] = useState("");
  const [priceRangeChecked, setPriceRangeChecked] = useState("");

  useEffect(() => {
    console.log(applicationChecked);
    console.log(catalogChecked);
    console.log(supplierChecked);
    console.log(priceRangeChecked);
    return () => {};
  }, [applicationChecked, catalogChecked, supplierChecked, priceRangeChecked]);

  const onApplicationChecked = (rootChecked) => {
    setApplicationChecked(rootChecked);
  };

  const onCatalogChecked = (rootChecked) => {
    setCatalogChecked(rootChecked);
  };

  const onSupplierChecked = (rootChecked) => {
    setSupplierChecked(rootChecked);
  };

  const onPriceRangeChecked = (rootChecked) => {
    setPriceRangeChecked(rootChecked);
  };

  return (
    <>
      <h1>Application</h1>
      <CatalogTree
        input={inputApplication}
        onFilterChecked={onApplicationChecked}
      />
      <br />
      <h1>Catalogs</h1>
      <CatalogTree input={inputCatalog} onFilterChecked={onCatalogChecked} />
      <br />
      <h1>Suppliers</h1>

      <CatalogTree input={inputSupplier} onFilterChecked={onSupplierChecked} />
      <br />
      <h1>PriceRange</h1>
      <CatalogTree
        input={inputPriceRange}
        onFilterChecked={onPriceRangeChecked}
      />
      <br />
    </>
  );
}

export default App;
