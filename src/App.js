import React from 'react';
import ImageDisplay from './ImageDisplay';
import sty from './ImageDisplay.module.css';
import ImageGallery1 from './imageGallery1';
import ImageGallery2 from './imageGallery1';
import ImageGallery3 from './imageGallery1';


let urls = [
  require("./images/1.jpg"),
  require("./images/2.jpg"),
  require("./images/3.jpg")
]

let pants= [
  require("./images/pants/1.jpeg"),
  require("./images/pants/2.jpeg"),
  require("./images/pants/3.jpeg"),
  require("./images/pants/4.jpeg"),
  require("./images/pants/5.jpeg"),
  require("./images/pants/6.jpeg"),
  require("./images/pants/7.jpeg"),
  require("./images/pants/8.jpeg")
]

let shirts= [
  require("./images/shirts/1.jpeg"),
  require("./images/shirts/2.jpeg"),
  require("./images/shirts/3.jpeg"),
  require("./images/shirts/4.jpeg"),
  require("./images/shirts/5.jpeg"),
  require("./images/shirts/6.jpeg"),
  require("./images/shirts/7.jpeg"),
  require("./images/shirts/8.jpeg")
]

let jackets= [
  require("./images/jackets/1.jpeg"),
  require("./images/jackets/2.jpeg"),
  require("./images/jackets/3.jpeg"),
  require("./images/jackets/4.jpeg"),
  require("./images/jackets/5.jpeg"),
  require("./images/jackets/6.jpeg"),
  require("./images/jackets/7.jpeg")

]

//--The function below takes the array length for each dir of pics and pics a random one.
//--That value is stored in a new array and is passed to the ImageDisplay component.
const todayGear = () =>{
  let thePics = [];
  let x = Math.floor(Math.random() * pants.length); 
  let y = Math.floor(Math.random() * shirts.length); 
  let z = Math.floor(Math.random() * jackets.length);

  thePics.push(pants[x],shirts[y],jackets[z]);
  return thePics  
  
}

class App extends React.Component{
  hc () {
    this.forceUpdate();
  }



  render() {
    return (
    <div className={sty.App}>
      <h1>Today's Gear </h1>
      <div>
        <button className={sty.button} onClick={this.hc.bind(this)} > New Gear </button>
      </div>
      <div className={sty.mainImageDis}>
        <ImageDisplay imageUrls={todayGear()} />
      </div>
      
      <div className={sty.mainImageDis}>
        <ImageGallery1 imageUrls={pants} />
      </div>
      <div className={sty.mainImageDis}>
        <ImageGallery2 imageUrls={shirts} />
      </div>
      <div className={sty.mainImageDis}>
        <ImageGallery3 imageUrls={jackets} />
      </div>

    </div>
  );
  }
}

export default App;

