import React from "react";
import sty from './ImageDisplay.module.css';

class ImageGallery1 extends React.Component {
  renderImage(imageUrl) {
    return(
      <div className={sty.ScrollDis}>
        <img className={sty.img} src={imageUrl} />
      </div>

    );
  }

  render() {
      return (
        <div className={sty.fullWidth}>
{this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}

        </div>

        );
    }
}

class ImageGallery2 extends React.Component {
  renderImage(imageUrl) {
    return(
      <div className={sty.ScrollDis}>
        <img className={sty.img} src={imageUrl} />
      </div>

    );
  }

  render() {
      return (
        <div className={sty.fullWidth}>
{this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}

        </div>

        );
    }
}

class ImageGallery3 extends React.Component {
  renderImage(imageUrl) {
    return(
      <div className={sty.ScrollDis}>
        <img className={sty.img} src={imageUrl} />
      </div>

    );
  }

  render() {
      return (
        <div className={sty.fullWidth}>
{this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}

        </div>

        );
    }
}


export default ImageGallery1

