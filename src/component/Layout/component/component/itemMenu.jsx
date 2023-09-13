import React from 'react'
import { Flex, Segment } from "@fluentui/react-northstar"
import ContentItemMenu from './content-ItemMenu'
import FooterItemMenu from './footer-ItemMenu'
import HeaderItemMenu from './header-Itemmenu'


const ItemMenulayout = () => {
    return (
        <Flex column>
            <Segment content={<HeaderItemMenu />} inverted styles={
                {
                    position: "fixed",
                    top: "48px", zIndex: "50",
                    width: "319px",
                    backgroundColor: "#ECF1F5",
                    borderBottom: "1px solid #E0E0E0!important",
                }
            } />
            <Segment content={<ContentItemMenu />} style={{ width: "325px" }} />
            <Segment content={<FooterItemMenu />} inverted styles={{ position: "fixed", bottom: "0px", width: "320px", backgroundColor: "#ECF1F5", }} />
        </Flex >
    )
}

export default ItemMenulayout