import React, { useState, useEffect } from 'react'
import "./CreateProduct.css"

const CreateProduct = () => {
  const [gems, setGems] = useState([]);
  const [metals, setMetals] = useState([]);
  const [links, setLinks] = useState([]);
  const [type, setType] = useState("necklace");
  const [gemId, setGemId] = useState("");
  const [metalId, setMetalId] = useState("");
  const [linkId, setLinkId] = useState("");
  const [linkNum, setLinkNum] = useState("");
  const [neckName, setNeckName] = useState("");
  const [ringName, setRingName] = useState("");
  const [ringSize, setRingSize] = useState("");
  const [ringVolume, setRingVolume] = useState("");

  useEffect(() => {
    setOptions();
  }, []);

  return (
    <div className='page-wrap'>
      <div className='create-page-wrapper'>
        <div className='create-selects'>
          <h2>Customize Jewelry Base</h2>

          <label>
            Type:
            <select className='drop-down' onChange={e => setType(e.target.value)}>
              <option value="necklace">Necklace</option>
              <option value="ring">Ring</option>
            </select>
          </label>
          
          <label>
            Gem:
            <select className='drop-down' onChange={e => setGemId(e.target.value)}>
              {gems}
            </select>
          </label>

          <label>
            Metal:
            <select className='drop-down' onChange={e => setMetalId(e.target.value)}>
              {metals}
            </select>
          </label>
        </div>

        {type == "necklace" && 
        <div className='type-customization'>
          <h2>Cuztomize Necklace</h2>

          <label>
            Link Type:
            <select className='drop-down' onChange={e => setMetalId(e.target.value)}>
              {links}
            </select>
          </label>

          <label>
            Link Amount:
            <input className="drop-down" onKeyDown={event => event.preventDefault()} type='number' min={20} max={100} defaultValue={20} onChange={e => setLinkNum(e.target.value)}></input>
          </label>
          
          <label>
            Name:
            <input type='text' placeholder='...' className='name-input' onChange={e => setNeckName(e.target.value)}></input>
          </label>
          
          <button className='login-button' onClick={createNecklaceOrder}>Create Product</button>
        </div>
        }
        {type == "ring" &&
        <div className='type-customization'>
          <h2>Cuztomize Ring</h2>
          
          <label>
            Size:
            <input className="drop-down" onKeyDown={event => event.preventDefault()} type='number' min={3} max={16} step={0.5} defaultValue={3} onChange={e => setRingSize(e.target.value)}></input>
          </label>
          
          <label>
            Volume {"(mm^3)"}:
            <input className="drop-down" type='number' min={1} max={100} step={0.1} defaultValue={20} onChange={e => setRingVolume(e.target.value)}></input>
          </label>

          <label>
            Name:
            <input type='text' placeholder='...' className='name-input' onChange={e => setRingName(e.target.value)}></input>
          </label>

          <button className='login-button' onClick={createRingOrder}>Create Product</button>
        </div>
        } 
      </div>
    </div>
  )

  function setOptions() {
    //DO API CALLS HERE
    //Load gem and metal list into gems and metals useState and .map to make them into <option> elements
    //Set value of element to id

    //also do for links
  }

  function createNecklaceOrder() {
    if(!localStorage.getItem("username")) {
      //Dont allow creation
    }
    else {
      //Do API Stuff
    }
  }

  function createRingOrder() {
    if(!localStorage.getItem("username")) {
      //Dont allow creation
    }
    else {
      //Do API Stuff
    }
  }
}

export default CreateProduct