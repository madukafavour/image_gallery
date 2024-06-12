import React from 'react';


const ImageCard = ({image}) => {

    return(
        <div className="imagecard">
            <div className="imgcontainer">
                <img src={image.imgSrc} alt="" />
            </div>
            <div className="image-text">
                <h4>Photo Name: {image.name}</h4>
            </div>
        </div>
    )
}

export default ImageCard