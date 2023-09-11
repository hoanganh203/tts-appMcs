import React from 'react'
import { Outlet } from 'react-router-dom'
import { Grid, Menu, Segment, Flex } from "@fluentui/react-northstar"
import MenuHome from '../Home/menu'
import { useSelector } from 'react-redux'
import HeaderHome from '../Home/headerHome'


const Layout = () => {
    const { statusItemMenu } = useSelector(state => state.appMcs)

    return (
        <Grid className='w-[100%]'>
            <Segment
                content={<HeaderHome />}
                inverted
                className='flex-1 '
            />
            <Flex className='flex'>
                <Segment
                    content={<MenuHome />}
                    inverted
                    className='bg-[#E4EDF3] mt-[44px] h-screen md:relative absolute z-50 hidden sm:hidden md:block xl:block 2xl:block ease-in-out duration-300'
                />

                <Segment
                    color="green"
                    content={<Outlet />}
                    inverted
                    className={statusItemMenu ? 'flex-1 mt-12 z-0 bg-[#F5F5F5] ease-in-out duration-500 xl:ml-[395px]' : 'flex-1 mt-12 z-0 bg-[#F5F5F5] xl:ml-[72px] -ml-[12px] ease-in-out duration-300'}
                />
            </Flex>
        </Grid>

    )
}

export default Layout