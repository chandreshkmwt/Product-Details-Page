
import classes from './App.module.css';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductPreview from './ProductPreview/ProductPreview';
import Topbar from './Topbar/Topbar';
import reacr, { Component } from 'react';
import ProductData from './Utils/ProductData';

class App extends Component {
  state = {
    productData: ProductData,
    currentPreviewImagePos: 0,
    currentFeature: 0,
  }

  colorClick = (pos) =>{
    this.setState({currentPreviewImagePos: pos});
  }

  featureClick = (pos) =>{
    this.setState({currentFeature: pos});
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextState.currentPreviewImagePos === this.state.currentPreviewImagePos){
      return false;
    }
    return true;
  }

  render(){
    return (
      <div className="App">
        <Topbar />
        
        <div className={classes.maincontainer}>
            <div className={classes.productpreview}>
                <ProductPreview currentPreviewImage={this.state.productData.colorOptions[
                  this.state.currentPreviewImagePos
                ].imageUrl} currentFeature={this.state.currentFeature} />
            </div>
            <div className={classes.productdata}>
                <ProductDetails data={this.state.productData} colorClick={this.colorClick}
                currentPreviewImagePos={this.state.currentPreviewImagePos}
                currentFeature={this.state.currentFeature}
                featureClick={this.featureClick}/>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
