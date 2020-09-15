import React from 'react'
import { Link } from 'react-router-dom'

export const ActionButton = ({
  children,
  button = false,
  link,
  onClick,
  className,

}) => {
  return (
    <>
      {button
        ?
        <button className={className} onClick={onClick}>
          {children}
        </button>
        :
        <Link className={className} to={link}>
          {children}
        </Link>
      }
    </>
  )
}
