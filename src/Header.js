import { Icon } from '@iconify/react'
import React from 'react'
import volcanoIcon from "@iconify/icons-mdi/volcano";


const Header = () => {
  return (
    <div className='header'>
        <h1><Icon icon = {volcanoIcon} className="header-icon"/>Geolocation of Volcanos </h1>
    </div>
  )
}

export default Header