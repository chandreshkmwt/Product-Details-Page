import react from 'react';

import classes from './ProductDetails.module.css';

const ProductDetails = (props) =>{
    const colorOptions = props.data.colorOptions.map((item, pos) => {
        const classArr = [classes.productimg]
        if(pos === props.currentPreviewImagePos){
            classArr.push(classes.selectedimg);
        }
        return(
            <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName}
            onClick={()=>props.colorClick(pos)}/>
        )
    })

    const featureList = props.data.featureList.map((item, pos) =>{
        const classArr = [classes.featureitem];
        if(pos === props.currentFeature){
            classArr.push(classes.selecteditem);
        }
        
        return(
            <button onClick={()=>props.featureClick(pos)} key={pos} className={classArr.join(' ')}>{item}</button>
        )
    })
    return(
        <div className={classes.productdata}>
            <h1 className={classes.producttitle}>{props.data.title}</h1>
            <p className={classes.productdescription}>{props.data.description}</p>

            <h3 className={classes.sectionheading}>Select Color</h3>
            <div>
                {colorOptions}
                {/* <img className={[classes.productimg, classes.selectedimg].join(' ')} src="https://imgur.com/iOeUBV7.png" alt="black"/>
                <img className={classes.productimg} src="https://imgur.com/PTgQlim.png" alt="red"/>
                <img className={classes.productimg} src="https://imgur.com/Mplj1YR.png" alt="blue"/>
                <img className={classes.productimg} src="https://imgur.com/xSIK4M8.png" alt="pink"/> */}
            </div>
                <h3 className={classes.sectionheading}>Features</h3>
            <div>
                {featureList}
                {/* <button className={[classes.featureitem, classes.selecteditem].join(' ')}>Time</button>
                <button className={classes.featureitem}>Heart Rate</button> */}
            </div>
            <button className={classes.primarybutton}>Buy Now</button>
        </div>
    );
}

export default ProductDetails;