import React from "react";
import { CardFeaturedImageProps } from "./CardFeaturedImageProps"
import styles from "./CardFeaturedImage.module.css";

const CardFeaturedImage: React.FC<CardFeaturedImageProps> = ({ image }) => {
    if ( image ) {
        return  (
            <div className={styles.CardFeaturedImage}>
                <img
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                />
            </div> 
        )
    } else {
        return (<></>);
    }
}

export default CardFeaturedImage;