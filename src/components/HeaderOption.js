import { Icon } from '@material-ui/core'

import React from 'react'

const HeaderOption = (Icon) => {
  return (
    <div className='headerOpton'>

        {Icon && <Icon className='headerOption_icon' />}
         <h3 className='headerOptioTitle'>{title}</h3>
    </div>
  )
}

export default HeaderOption
