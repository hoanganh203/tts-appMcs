import React from 'react'
import { Grid, Segment } from "@fluentui/react-northstar"
import HeaderLayout from './component/header'
import { Outlet } from 'react-router-dom'
import MenuLayout from './component/menu'
import ItemMenulayout from './component/component/itemmenu'



const Layout = () => {
    return (
        <Grid columns="repeat(20, 1fr)" rows="48px 100vh" className='layout'>
            <Segment
                content={<HeaderLayout />}
                inverted
                styles={{
                    gridColumn: 'span 20',
                    backgroundColor: "#E5EDF3",
                    height: "48px",
                    margin: "0",
                    padding: "0",
                    zIndex: "50",
                    width: "1440px",
                    position: "fixed",
                }}
            />
            <Segment
                content={<MenuLayout />}
                inverted
                styles={{
                    gridColumn: 'span 1',
                    margin: "0",
                    padding: "0",
                    width: "68px",
                    flex: "1 1 0%",
                    marginLeft: "1px",
                    position: "fixed",
                    top: "48px",
                    zIndex: "50",
                }}
            />
            <Segment
                content={<ItemMenulayout />}
                inverted
                styles={{
                    gridColumn: 'span 4',
                    width: "320px",
                    margin: "0",
                    padding: "0",
                    position: "fixed",
                    height: "100vh",
                    overflowY: "auto",
                    marginLeft: "69.7px",
                    backgroundColor: "#ECF1F5",
                    zIndex: "50",
                    marginTop: "60px"
                }}
            />
            <Segment
                inverted
                content={<Outlet />}
                styles={{
                    gridColumn: 'span 20',
                    marginTop: "48px",
                    marginLeft: "392px",
                    background: "#F5F5F5",
                    width: "1052px",
                    height: "762px",
                }}
            />
        </Grid>
    )
}

export default Layout