import React from 'react'

const Header = ({player}) => {
  return (
    <div className='header'>
        <p>Turn = {player}</p>
    </div>
  )
}

export default Header