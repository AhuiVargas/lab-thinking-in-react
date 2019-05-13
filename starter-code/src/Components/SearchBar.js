import React from 'react'
import {MyContext} from '../context'

export default function SearchBar() {
  return (
    <MyContext.Consumer>
      <input>test</input>
    </MyContext.Consumer>
  )
}
