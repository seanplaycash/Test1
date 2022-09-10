import React, {useState} from 'react'
import Akeno from './images/Akeno.jpg'
import Rias from './images/Rias.jpg'
import Albedo from './images/Albedo.jpg'

export default function Test() {
    let [showAlbedo, setShowAlbedo]=useState(true)
    let [showRias, setShowRias]=useState(true)
    let [showAkeno, setShowAkeno]=useState(true)

    let akenoBtn = document.getElementById("akeno")
    let riasBtn = document.getElementById("rias")
    let albedoBtn = document.getElementById("albedo")

    function change(id) {
        if (id === "akeno") {
          if (showAkeno === false) {
            akenoBtn.innerText = 'Hide'
          } else {
            akenoBtn.innerText ='Show'
          }
        } else if (id === "rias") {
          if (showRias === false) {
            riasBtn.innerText = 'Hide'
        } else {
            riasBtn.innerText = 'Show'
        }
        } else if (id === "albedo") {
          if (showAlbedo === false) {
            albedoBtn.innerText = 'Hide'
          } else {
            albedoBtn.innerText = 'Show'
          }
        }
    }
    
  return (
      <div>
      <h1>Images</h1>
        {showAkeno && (
            <img src={Akeno} height={300} width={300} />
        )}
        <button id="akeno" onClick={()=>{setShowAkeno(!showAkeno); change("akeno");}}>Hide</button>
        {showRias && (
            <img src={Rias} height={300} width={300} />
        )}
        <button id="rias" onClick={()=>{setShowRias(!showRias); change("rias");}}>Hide</button>
        {showAlbedo && (
            <img src={Albedo} height={300} width={300} />
        )}
        <button id="albedo" onClick={()=>{setShowAlbedo(!showAlbedo); change("albedo");}}>Hide</button>
    </div>
    
  )
}
