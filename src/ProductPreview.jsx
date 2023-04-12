import React from "react";
import "./App.css";
import { BsFillHeartPulseFill } from "react-icons/bs";

const ProductPreview = (props) => {
  const currentHour =
    new Date().getHours() > 9
      ? new Date().getHours()
      : "0" + new Date().getHours();
  const currentMinute =
    new Date().getMinutes() > 9
      ? new Date().getMinutes()
      : "0" + new Date().getMinutes();
  return (
    <div className="ProductPreview">
      <img src={props.currentPreviewImage} alt="Product Preview" />
      {props.currentSelectedFeature === 1 ? (
        <div className="HeartBeatSection">
          {/* <BsFillHeartPulseFill /> */}
          <p>78</p>
        </div>
      ) : (
        <div className="TimeSection">
          <p>{`${currentHour}:${currentMinute}`}</p>
        </div>
      )}
    </div>
  );
};

export default ProductPreview;
