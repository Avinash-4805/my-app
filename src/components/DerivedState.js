import React, { useState } from 'react'

function DerivedState() {
    const [users] = useState([
        {name:'Avinash', age:37},
        {name:'Vinod', age:27},
        {name:'Akash', age:22},
        {name:'Sagar', age:29}
    ])
  return (
    <>
      <div className='container'>
        <h1>User List</h1>
        <ul>
           {users.map((currElem, index) => {
            return(
                <li key={index}>
                    {currElem.name} - {currElem.age} years old.
                </li>
            )
           })} 
        </ul>
      </div>
    </>
  )
}

export default DerivedState
