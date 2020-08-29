import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterNames } from "../utils";
import { filterVendors, getOrdersData } from "../actions/creators";
import "../scss/components/filter.scss";

function Filter() {
  const {
    data: { data },
    filtering,
  } = useSelector((state) => state.orders);
  const defaultValue = "All Vendors";
  const dispatch = useDispatch();

  return (
    <div className="filter-container">
      <div className="select-label">Vendor: </div>
      <select
        value={defaultValue}
        onChange={(e) => {
          dispatch(filterVendors(e.target.value));
        }}
      >
        {!filtering && <option>{defaultValue}</option>}
        {data &&
          filterNames(data).map((el, ind) => {
            return (
              <option val={el} key={ind}>
                {el}
              </option>
            );
          })}
      </select>
      <div
        className={filtering ? "reset-filter" : "reset-filter hidden"}
        onClick={() =>
          dispatch(getOrdersData(process.env.REACT_APP_ORDERS_API))
        }
      >
        <span>×</span>
        <span>Reset Filter</span>
      </div>
    </div>
  );
}

export default Filter;
