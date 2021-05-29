export function selectProductsLoading(reduxState) {
  return reduxState.all.loading;
}

export function selectProductsFetched(reduxState) {
  return reduxState.all.products;
}
