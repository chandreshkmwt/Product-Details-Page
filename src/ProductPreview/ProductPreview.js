import react from 'react';
import classes from './ProductPreview.module.css';

const ProductPreview = (props) => {
    const currHour = new Date().getHours() > 9 ? new Date().getHours() : '0'+new Date().getHours();
    const currMin = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0'+new Date().getMinutes();
    return(
        <div className={classes.productpreview}>
            <img src={props.currentPreviewImage} alt="Product" />

            {
                props.currentFeature ?
                <div className={classes.heart}>
                    <i className="fas fa-heartbeat"></i>
                    <p>78</p>
                </div>
                :
                <div className={classes.time}>
                <p>{`${currHour}:${currMin}`}</p>
                </div>
            }           
        </div>
    );
}

export default ProductPreview;