import React from 'react'
import Akeno from './images/Akeno.jpg'
import Rias from './images/Rias.jpg'
import Albedo from './images/Albedo.jpg'

export default function Test() {
    //Use Inlince Function and Logical NOT(!) for toggle state
    // const [show, setShow]=React.useState(true)
    let [rias, setRias]=React.useState(true)
    let [akeno, setAkeno]=React.useState(true)
    let [albedo, setAlbedo]=React.useState(true)

    let akenoBtn = document.getElementById("akeno")
    // akenoBtn.addEventListener("click", ()=>{React.useState(false)})
    let riasBtn = document.getElementById("rias")
    let albedoBtn = document.getElementById("albedo")
    
    function hsRias() {
        setRias(!rias)
        console.log(rias)
          if (rias === true) {
            rias = false
              riasBtn.innerText = 'Show'
          } else {
              if (rias === false) {
                rias = true
              riasBtn.innerText = 'Hide'
              } else {
              riasBtn.innerText = 'Show'
              }
          }
    }

    function hsAkeno() {
        setAkeno(!akeno)
        if (akeno === true) {
            akeno = false
            akenoBtn.innerText = 'Show'
          } else {
              if (akeno === false) {
                akeno = true
                akenoBtn.innerText = 'Hide'
              } else {
                akenoBtn.innerText = 'Show'
              }
          }
    }

    function hsAlbedo() {
        setAlbedo(!albedo)
        if (albedo === true) {
            albedo = false
            albedoBtn.innerText = 'Show'
          } else {
              if (albedo === false) {
                albedo = true
                albedoBtn.innerText = 'Hide'
              } else {
                albedoBtn.innerText = 'Show'
              }
          }
    }
    
  return (
      <div>
      <h1>Images</h1>
        {akeno && (
            <img src={Akeno} height={300} width={300} />
        )}
        <button id="akeno" onClick={hsAkeno} className="btn btn-primary mb-5">Hide</button>
      {/* <button onClick={()=>setShow(!show)} className="btn btn-primary mb-5">Show/Hide</button> */}
        {rias && (
            <img src={Rias} height={300} width={300} />
        )}
        <button id="rias" onClick={hsRias} className="btn btn-primary mb-5">Hide</button>
        {albedo && (
            <img src={Albedo} height={300} width={300} />
        )}
        <button id="albedo" onClick={hsAlbedo} className="btn btn-primary mb-5">Hide</button>
    </div>
  )
}
