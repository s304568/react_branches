import Image1 from "./assets/funny_pick.jpg";
import Image2 from "./assets/cat.jpg";
import Image3 from "./assets/dino.png";
import {useState} from "react";

const [ImageText,setImageText] = useState ('');

function ImageRow() {
 return( 
 <>
 <div className ="ImageRowDiv">
 <img src={Image1} width="25%"/>
 <img src={Image2} width = "25%"/>
 <img src={Image3} width = "25%"/>
 </div>
 </>
 )

}

export default ImageRow;