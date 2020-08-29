import React from "react";
import { useSelector } from "react-redux";
import { formatDate } from "../utils";
import "../scss/components/tableColumns.scss";

function Columns() {
  const {
    loading,
    data: { data },
    error,
  } = useSelector((state) => state.orders);

  if (loading) {
    return <div className="columns-loading" />;
  }

  if (error) {
    return <div className="columns-error">500 Internal Server Error</div>;
  }

  return (
    <div className="columns-container">
      {data &&
        data.map((el, ind) => {
          return (
            <div className="columns-table" key={ind}>
              <div
                className={
                  el.orderBuyerStatus === "Paid" ? "paid" : "delivered"
                }
              >
                {el.orderBuyerStatus.toUpperCase()}
              </div>
              <div>{formatDate(el.deliveryDay)}</div>
              <div className="vendor-name">
                <span>{el.vendorName}</span> {!el.isBYOS && <span>Market</span>}
                {el.isPendingVendorOnboarding && <span>1st</span>}
              </div>
              <div>{el.grandTotal !== 0 && `$${el.grandTotal}`}</div>
            </div>
          );
        })}
    </div>
  );
}

export default Columns;
