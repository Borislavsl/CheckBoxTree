const dynamicSearchRequest = {
  StartRow: 0,
  EndRow: 10,
  ExcludeCatalogSearch: true,
  ExtensionData: null,
  IsFacetSearchRequired: false,
  IsKeysSearch: false,
  IsNewProductRequired: false,
  IsOnlyItemList: true,
  IsPromoProductRequired: false,
  IsVINSearch: false,
  Search: "*",
  SortBy: "score desc",
  SubSearch: "",
  TAG: null,
  ApplicationFilter: [],
  CatalogFilter: [],
  PriceFilter: [],
  SupplierFilter: [],
};

export const composeDynamicSearchRequest = (
  applicationChecked,
  catalogChecked,
  supplierChecked,
  priceRangeChecked
) => {
  const filters = {
    ApplicationFilter: applicationChecked,
    CatalogFilter: catalogChecked,
    PriceFilter: supplierChecked,
    SupplierFilter: priceRangeChecked,
  };

  return { ...dynamicSearchRequest, ...filters };
};
