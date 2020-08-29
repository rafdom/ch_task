import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOrdersData } from "../actions/creators";
import "../scss/pages/home.scss";

// Can be converted to React router/route should there be more pages
function Home({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrdersData(process.env.REACT_APP_ORDERS_API));
  }, [dispatch]);

  return <div className="home-container">{children}</div>;
}

export default Home;
