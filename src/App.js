import React from 'react';
import ImageDisplay from './ImageDisplay';
import sty from './ImageDisplay.module.css';
import ImageGallery1 from './imageGallery1';
import ImageGallery2 from './imageGallery1';
import ImageGallery3 from './imageGallery1';
import Dropdown from './ddm/ddm';

//--The const below determine the number of files in each folder and send the
//--built/bundled path to components to be rendered.
const pantsFiles= require.context('./images/pants', false, /.*\.jpeg$/ );
const pantsArr= pantsFiles.keys() ;

const shirtsFiles= require.context('./images/shirts', false, /.*\.jpeg$/ );
const shirtsArr= shirtsFiles.keys() ;

const jacketsFiles = require.context('./images/jackets', false, /.*\.jpeg$/ );
const jacketsArr= jacketsFiles.keys() ;

let pantsPath = pantsArr.map(x=>pantsFiles(x));
let shirtsPath = shirtsArr.map(x=>shirtsFiles(x));
let jacketsPath = jacketsArr.map(x=>jacketsFiles(x));

//--The function below takes the array length for each dir of pics and pics a random one.
//--That value is stored in a new array ais passeod to the ImageDisplay component.
const todayGear = () =>{


  let thePics = [];
  let x = Math.floor(Math.random() * pantsArr.length); 
  let y = Math.floor(Math.random() * shirtsArr.length); 
  let z = Math.floor(Math.random() * jacketsArr.length);

  thePics.push(pantsFiles(pantsArr[x]),shirtsFiles(shirtsArr[y]),jacketsFiles(jacketsArr[z]));

  return thePics;  
  
}

class App extends React.Component{
  hc () {
    this.forceUpdate();
  }



  render() {
    return (
    <div className={sty.App}>
      <Dropdown />
      <h1>Leonardo's Best Code</h1>
      <div>
        <button className={sty.button} onClick={this.hc.bind(this)} > New Gear </button>
      </div>
      <div className={sty.mainImageDis}>
        <ImageDisplay imageUrls={todayGear()} />
      </div>
      
      <div className={sty.mainImageDis}>
        <ImageGallery1 imageUrls={pantsPath} />
      </div>
      <div className={sty.mainImageDis}>
        <ImageGallery2 imageUrls={shirtsPath} />
      </div>
      <div className={sty.mainImageDis}>
        <ImageGallery3 imageUrls={jacketsPath} />
      </div>

    </div>
  );
  }
}

export default App;

