import React from 'react'
import { useSelector } from 'react-redux'
import "./Header.css"
export default function Header() {
  const {name} = useSelector(state => state.user.userData);
  return (
    <div className='header'>
        <h1>Holms</h1>
        <p>Hello {name}</p>
    </div>
  )
}
