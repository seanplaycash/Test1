import React, {useState} from 'react'

export default function Details() {
  let [show, setShow]=useState(true)

  let hsBtn = document.getElementById("hs")

  function change(){
      if (show === false) {
        hsBtn.innerText = 'Hide'
    } else {
        hsBtn.innerText = 'Show'
      }
  }
 
  return (
    <div>
      <h1>Sean's Project</h1>
        {show && (
        <ul class="list-group">
            <li class="list-group-item">Your Details:</li>
            <li class="list-group-item">Full Name: Sean Ernest B. Regala</li>
            <li class="list-group-item">Contact No: 09054412148</li>
            <li class="list-group-item">Email: sean@playcash.finance</li>
        </ul>
        )}
      <button id="hs" onClick={() => {setShow(!show); change();}} className="btn btn-primary mb-5">Hide</button>
    </div>
  )
}
