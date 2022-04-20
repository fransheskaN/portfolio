import React from "react";
import image from "../../img/upright.jpg";

class Gallery extends React.Component {
    render() {
        return (
             <img src={image} alt="Voyageur wine" style={{ width: 500 }} />
        );
    }
}
export default Gallery;