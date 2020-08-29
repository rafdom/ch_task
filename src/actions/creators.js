import { FETCH_ORDERS, IS_FETCHING, HAS_ERRORS, FILTER_VENDOR } from "./types";

const _isFetching = (status) => ({
  type: IS_FETCHING,
  payload: {
    loading: status,
  },
});

const _fetchOrders = (orders) => ({
  type: FETCH_ORDERS,
  payload: {
    orders,
  },
});

const _hasErrors = (error) => ({
  type: HAS_ERRORS,
  payload: {
    error,
  },
});

export const filterVendors = (vendorName) => ({
  type: FILTER_VENDOR,
  payload: {
    vendorName,
  },
});

export const getOrdersData = (url) => async (dispatch) => {
  await dispatch(_isFetching(true));
  try {
    const response = await fetch(url);
    const orders = await response.json();
    await dispatch(_fetchOrders(orders));
    await dispatch(_isFetching(false));
  } catch (err) {
    await dispatch(_hasErrors(err));
    await dispatch(_isFetching(false));
  }
};
