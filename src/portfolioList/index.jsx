import React from 'react'
import './portfolioList.scss'
export default function PortfolioList({id, title, actived ,setSelected}) {
  return (
    <li className={actived === id ? 'portfolioList active' : 'portfolioList'}
    onClick={()=>setSelected(id)}
    >
      {title}
    </li>
  )
}
