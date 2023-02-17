import React from 'react';
import SearchIcon from '@material-ui/icons/Search';


const Header = () => {
  return (
    <div className='header'>
        <div className='header_left'>

            <img src='' alt=''/>
            <div className='header_search'>
            <SearchIcon />
                <input type='text' />
            </div>
        </div>
      <div className='header_right'>
        <HeaderOption title='Home'/>
        <HeaderOption />
      </div>
    </div>
  )
}

export default Header
