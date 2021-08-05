import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import { inputAll } from "./inputAll";
import { composeDynamicSearchRequest } from "./requests/dynamicSearch";
import CatalogTree from "./components/CatalogTree";

function App() {
  const [inputApplication, setInputApplication] = useState(
    inputAll.application
  );
  const [inputCatalog, setInputCatalog] = useState(inputAll.catalogMenu);
  const [inputSupplier, setInputSupplier] = useState(inputAll.supplierList);
  const [inputPriceRange, setInputPriceRange] = useState(
    inputAll.priceRangeList
  );

  const [isPostBack, setIsPostBack] = useState(false);
  const [applicationChecked, setApplicationChecked] = useState([]);
  const [catalogChecked, setCatalogChecked] = useState([]);
  const [supplierChecked, setSupplierChecked] = useState([]);
  const [priceRangeChecked, setPriceRangeChecked] = useState([]);

  useEffect(() => {
    const dynamicSearch = async () => {
      try {
        const dynamicSearchRequest = composeDynamicSearchRequest(
          applicationChecked,
          catalogChecked,
          supplierChecked,
          priceRangeChecked
        );
        console.log(dynamicSearchRequest);
        const response = await axios.post(
          "http://localhost:37481/DynamicSearch/Items",
          dynamicSearchRequest
        );
        const dynamicSearchResponse = response.data;
        console.log(dynamicSearchResponse);

        setInputApplication(dynamicSearchResponse.application);
        setInputCatalog(dynamicSearchResponse.catalogMenu);
        setInputSupplier(dynamicSearchResponse.supplierList);
        setInputPriceRange(dynamicSearchResponse.priceRangeList);
      } catch (error) {
        console.log(error.response);
      }
    };
    if (isPostBack) {
      dynamicSearch();
    } else {
      setIsPostBack(true);
    }
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
