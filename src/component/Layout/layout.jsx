import React from 'react'
import HeaderLayout from './component/header'
import { Outlet } from 'react-router-dom'
import MenuLayout from './component/menu'
import "./layout.css"
import ItemMenulayout from './component/component/itemMenu'


const Layout = () => {
    return (
        <div className='layout'>
            <div className='layout_header' >
                <HeaderLayout />
            </div>
            <div className="layout_container">
                <div className='layout_menu' >
                    <MenuLayout />
                </div >
                <div className='layout_itemMenu' >
                    <ItemMenulayout />
                </div >
                <div className='layout_content'>
                    <Outlet />
                </div>
            </div>
        </div >
    )
}

export default Layout