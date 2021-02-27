import React from 'react'
import logo from '../logo.svg'

function Header(){
  const reactLogo = <img src={logo} alt='logo'/> 
  return(
<div className="Header">
    <div className="Logo">
      {reactLogo}
        <h1>Full Stack Dev</h1>
    </div>
</div>
  )
}


export default Header