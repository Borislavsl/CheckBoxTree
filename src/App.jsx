import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";
import { inputAll } from "./inputAll";
import { composeDynamicSearchRequest } from "./requests/dynamicSearch";
import CatalogTree from "./components/CatalogTree";

const override = css`
  display: inline;
  margin: 0;
  border-color: rgb(255, 0, 0);
`;

function App() {
  // For spinner
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ff0000");

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
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const dynamicSearch = async () => {
      setLoading(true);
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
        setTotalItems(dynamicSearchResponse.itemTotalCount);
      } catch (error) {
        console.log(error.response);
      }
      setLoading(false);
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

  function displayHeader() {
    return (
      <div>
        <h1 style={loading ? { color: "red" } : { color: "green" }}>
          {loading
            ? "Please, wait loading new catalog trees ... "
            : "Please, make your choice:"}
        </h1>
        <FadeLoader
          color={color}
          loading={loading}
          css={override}
          height={3}
          margin={0}
          radius={0.5}
        />
        <h1 style={{ marginLeft: 300 }}>
          Total: {loading ? "..." : totalItems} items in response.
        </h1>
      </div>
    );
  }

  return (
    <>
      {displayHeader()}
      <h1 style={{ marginTop: 20 }}>Application</h1>
      <CatalogTree
        input={inputApplication}
        onFilterChecked={onApplicationChecked}
        disabled={loading}
      />
      <br />

      <h1>Catalogs</h1>
      <CatalogTree
        input={inputCatalog}
        onFilterChecked={onCatalogChecked}
        disabled={loading}
      />
      <br />

      <h1>Suppliers</h1>
      <CatalogTree
        input={inputSupplier}
        onFilterChecked={onSupplierChecked}
        disabled={loading}
      />
      <br />

      <h1>PriceRange</h1>
      <CatalogTree
        input={inputPriceRange}
        onFilterChecked={onPriceRangeChecked}
        disabled={loading}
      />
      <br />
    </>
  );
}

export default App;
