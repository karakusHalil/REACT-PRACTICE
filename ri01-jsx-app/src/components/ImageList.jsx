import { useState } from "react";
import CardImage from "./CardImage"


function ImageList() {
    const [imageCount, setImageCount] = useState(1);
    // const imageUrl = "https://picsum.photos/300/200?random=2";
    function handleClick(e){
        if(e.target.id === "add"){
            setImageCount(imageCount+1);
        }else{
            if(imageCount === 0){
                setImageCount(imageCount);
            }else{
                setImageCount(imageCount - 1);
            }
        }
    }
  
    return (
    <>
        <button id="remove2" onClick={(e) => handleClick(e)}>Çıkar</button>
        {/* <button id="remove" onClick={() => setImageCount(imageCount -1)}>Çıkar</button> */}
        <button id="add" onClick={(e) => handleClick(e)}>Ekle</button>
        <br />
        <hr />
        {
            [...Array(imageCount)].map((item, index) => <CardImage key={index} cardPicture={`https://picsum.photos/300/200?random=${index}`} />)
        }
    </>
  )
}

export default ImageList