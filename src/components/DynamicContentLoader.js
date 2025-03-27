import React, { useState } from "react";

const DynamicContentLoader = () => {

    const[content,setContent] = useState([]);

    const loadContent = async (id) =>{
        await new Promise((resolve)=>setTimeout(resolve,1000)); //simulating like an API call
        const loadedContent ={
            id,
            text:`Tab ${id} data`
        }
        setContent(prev => [...prev,loadedContent]);
    }

    const handleButtonClick = (id) =>{
        loadContent(id);
    }

  return (
    <div>
      <h2>Dynamic Content Loader with LRU cache</h2>
      <div className="btns">
        <button onClick={()=>handleButtonClick(1)}>Tab 1</button>
        <button onClick={()=>handleButtonClick(2)}>Tab 2</button>
        <button onClick={()=>handleButtonClick(3)}>Tab 3</button>
        <button onClick={()=>handleButtonClick(4)}>Tab 4</button>
        <button onClick={()=>handleButtonClick(5)}>Tab 5</button>
      </div>
      <div>
        <h3 style={{ fontSize:"24px" }}>Loaded Content</h3>
        <ul className="renderList">
            {
                content.map((item,i)=>{
                    return <li key={`${item.id}${i}`} className="renderItem">{item.text}</li>
                })
            }
        </ul>
      </div>
    </div>
  );
};

export default DynamicContentLoader;
