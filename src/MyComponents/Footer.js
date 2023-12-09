
import React from 'react'

const Footer = () => {
  let footerstyle ={
    position: "relative",
    top: "10vh",
    width: "100%" 
  }
  return (
    <div className ="bg-dark text-light py-2" style={footerstyle}>
      <p className="text-center">
        Copyright &copy; MyTodosList.com
      </p>
    </div>
  )
}

export default Footer
