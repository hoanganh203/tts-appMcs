import React from 'react'
import { Flex, Segment } from "@fluentui/react-northstar"
import ContentItemMenu from './content-ItemMenu'
import FooterItemMenu from './footer-ItemMenu'
import HeaderItemMenu from './header-Itemmenu'


const ItemMenulayout = () => {
    return (
        <div column className='itemMenu'>
            <div className='itemMenu_header'>
                <HeaderItemMenu />
            </div>
            <div className='itemMenu_content'>
                <ContentItemMenu />
            </div>
            <div className='itemMenu_footer'>
                <FooterItemMenu />
            </div>
        </div >
    )
}

export default ItemMenulayout