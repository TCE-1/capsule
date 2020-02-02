import React from "react"; 
import sty from './ImageDisplay.module.css';

class ImageDisplay extends React.Component {
  renderImage(imageUrl) {
    return(
      <div className={sty.ImageDis}>
        <img className={sty.imgMain} src={imageUrl} />
      </div>
    );
  }

  render() {
    return (
      <div className={sty.mainImageDis} >
          {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
      </div>
    );
  }
  
}


export default ImageDisplay;
