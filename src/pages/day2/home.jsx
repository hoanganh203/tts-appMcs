
import React from 'react'
import { Grid, Menu, Segment } from "@fluentui/react-northstar"
import HeaderHome from '../../component/Home/headerHome'
import MenuHome from '../../component/Home/menu'
import Content from '../../component/Home/content'

const Home = () => {
    return (<>
        <Grid className='w-[100%] h-[3000px]'>
            <Segment
                content={<HeaderHome />}
                inverted
                className='flex-1 '
            />
            <div className='flex'>
                <Segment
                    content={<MenuHome />}
                    inverted
                    className='bg-[#E4EDF3] mt-12 h-screen md:relative absolute z-50 hidden sm:hidden md:block xl:block 2xl:block ease-in-out duration-300'
                />
                <Segment
                    color="green"
                    content={<Content />}
                    inverted
                    className='flex-1 mt-12 z-0 bg-[#F5F5F5]'
                />
            </div>
        </Grid>
    </>
    )
}

export default Home