import React from 'react'

export default function Details() {
    //Use Inlince Function and Logical NOT(!) for toggle state
    const [show, setShow]=React.useState(true)
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
      <button onClick={()=>setShow(!show)} className="btn btn-primary mb-5">Show/Hide</button>
    </div>
  )
}
