import React from 'react'
import "./App.css";
import ProductData from "./ProductData";

const ProductDetails = (props) => {
    const colorOptions = props.data.colorOptions.map((item, pos) => {
        const classArr = ['ProductImage'];

        if (pos === 0) {
            classArr.push('SelectedProductImage');
        }
        return (
          <img
            className={classArr.join(' ')} key={pos}
            src={item.imageUrl}
            alt={item.styleName} onClick={() => props.onColorOptionClick(pos)}
          />
        );
    })

    const featureList = props.data.featureList.map((item, pos) => {
        const classArr = ["FeaturedItem"];
        if (pos === props.currentSelectedFeature) {
          classArr.push("SelectedFeaturedItem");
        }

        return (
          <button
            onClick={() => props.onFeatureItemClick(pos)}
            key={pos}
            className={classArr.join(' ')}
          >
            {item}
          </button>
        );
    })
  return (
    <div className="ProductData">
      <h1 className="ProductTitle">{props.data.title}</h1>
      <p className="ProductDesc">{props.data.description}</p>
      <h3 className="SectionHeading">Select Color</h3>
      <div>
        {colorOptions}
      </div>
      <h3 className="SectionHeading">Features</h3>
      <div>
        {featureList}
      </div>
      <button className="PrimaryButton">Buy Now</button>
    </div>
  );
}

export default ProductDetails