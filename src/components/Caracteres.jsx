import React from 'react'

function Caracteres({caracter}) {
  return (
    <div className='text-center p-3'>
        <h3>{caracter.name}</h3>
        <img className='img-fluid rounded-pill' src={caracter.image} alt={caracter.name} />
        <p>{caracter.origin.name}</p>
    </div>
  )
}

export default Caracteres