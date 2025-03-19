import React from 'react'
import { Link } from 'react-router-dom'

const List = ({className, to, text}) => {
  return (
    <li>
        <Link className={`${className} font-Roboto font-semibold text-white hover:text-[#5E3BEE] hover:transition-all hover:duration-500`} to={`/${to}`}>{text}</Link>
    </li>
  )
}

export default List