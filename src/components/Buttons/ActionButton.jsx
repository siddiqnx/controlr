import React from 'react'
import { Link } from 'react-router-dom'

export const ActionButton = ({
  children,
  link = false,
  to,
  onClick,
  className
}) => {
  return (
    <>
      {link
        ?
        <Link className={className} to={to}>
          {children}
        </Link>
        :
        <button className={className} onClick={onClick}>
          {children}
        </button>
      }
    </>
  )
}
