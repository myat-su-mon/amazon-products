import React, { Component } from "react";
import "./App.css";
import ProductPreview from "./ProductPreview";
import ProductDetails from "./ProductDetails";
import Topbar from "./Topbar";
import ProductData from "./ProductData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: ProductData,
      currentPreviewImagePos: 0,
      currentSelectedFeature: 0,
    };
    console.log("inside constructor");
  }

  onColorOptionClick = (pos) => {
    this.setState({ currentPreviewImagePos: pos});
  };

  onFeatureItemClick = (pos) => {
    let updatedState = false;
    if (pos === 1) {
      updatedState = true;
    }
    this.setState({ currentSelectedFeature : updatedState});
  }

  shouldComponentUpdate() {
    console.log("Inside Should Component Update")
    return true;
  }

  componentDidMount() {
    console.log("Component did mount")
  }

  componentWillUnmount() {
    console.log("Component Unmounting")
  }

  componentDidUpdate() {
    console.log("Inside Component Did Update")
  }

  render() {
    console.log("Render Called for App")
    return (
      <div className="App">
        <header className="App-header">
          <Topbar />
        </header>
        <div className="MainContainer">
          <ProductPreview
            currentPreviewImage={
              this.state.productData.colorOptions[
                this.state.currentPreviewImagePos
              ].imageUrl
            }
            currentSelectedFeature={this.state.currentSelectedFeature}
          />
          <ProductDetails
            data={this.state.productData}
            onColorOptionClick={this.onColorOptionClick}
            currentPreviewImagePos={this.state.currentPreviewImagePos}
            onFeatureItemClick={this.onFeatureItemClick}
            currentSelectedFeature={this.state.currentSelectedFeature}
          />
        </div>
      </div>
    );
  }
}

export default App;
