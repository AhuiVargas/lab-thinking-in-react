import React from 'react'
//use tablerow
const ProductRow = ({price, name, i}) => {
  return (
    <tr> 
      <td>{i}</td>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  )
}

export default ProductRow