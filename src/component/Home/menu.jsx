import React, { useState } from 'react'
import { Menu, menuAsToolbarBehavior, Button, Flex } from "@fluentui/react-northstar"
import { AlertOn, Chat, ApprovalsApp, CalendarAgenda, Call, LauncherSettings, MoreHorizontal, AddSquare, Notepad, ChevronDoubleLeft } from "@styled-icons/fluentui-system-regular"
import { useDispatch, useSelector } from 'react-redux'
import { statusApp, statusAppItemMenu } from '../../redux/status'
import ItemMenu from './component/itemMenu'
import ContentItemMenu from './component/contentItemMenu'
import HeaderItemMenu from './component/headerItemMenu'
import { Link } from 'react-router-dom'



const MenuHome = () => {
    const dispatch = useDispatch()
    const { statusMenu, actitMenu } = useSelector(state => state.appMcs)
    const items = [
        {
            key: 'Notifications',
            content: <Flex className={actitMenu === "Thông báo" ? "actitMenu" : ""} onClick={() => onHandleSumit("", <HeaderItemMenu title={"Thông báo"} />)}><AlertOn className='iconMenu w-[24px] h-[24px] ' /><Button className="text-xs">Thông báo</Button></Flex>,
        },
        {
            key: 'Chat',
            content: <Flex className={actitMenu === "Thảo luận" ? "actitMenu" : ""} onClick={() => onHandleSumit("", <HeaderItemMenu title={"Thảo luận"} />)} ><Chat className='iconMenu w-[24px] h-[24px] ' /><Button className="text-xs">Thảo luận</Button></Flex>,
        },
        {
            key: 'ApprovalsApp',
            content: <Flex className={actitMenu === "Quy trình" ? "actitMenu" : ""} onClick={() => onHandleSumit("", <HeaderItemMenu title={"Quy trình"} />)}><ApprovalsApp className='iconMenu w-[24px] h-[24px] ' /><Button className="text-xs ">Quy trình</Button></Flex>,

        },
        {
            key: 'CalendarAgenda',
            content: <Flex className={actitMenu === "Công việc" ? "actitMenu" : ""} onClick={() => onHandleSumit("", <HeaderItemMenu title={"Công việc"} />)}><CalendarAgenda className='iconMenu w-[24px] h-[24px] ' /><Button className="text-xs ">Công việc</Button></Flex>,
        },
        {
            key: 'Call',
            content: <Flex className={actitMenu === "Gọi" ? "actitMenu" : ""} onClick={() => onHandleSumit("", <HeaderItemMenu title={"Gọi"} />)}><Call className='iconMenu w-[24px] h-[24px] ' /><br /><Button className="text-xs ">Gọi</Button></Flex>,

        },
        {
            key: 'Booking',
            content: <Flex className={actitMenu === "Booking" ? "actitMenu" : ""} onClick={() => onHandleSumit("", <HeaderItemMenu title={"Booking"} />)}><Notepad className='iconMenu w-[24px] h-[24px] ' /><br /><Button className="text-xs ">Booking</Button></Flex>,

        },
        {

            key: 'Setting',
            content: <Flex className={actitMenu === "Setting" ? "actitMenu" : ""} onClick={() => onHandleSumit(<ContentItemMenu />, <HeaderItemMenu title={"Setting"} />)}><LauncherSettings className='iconMenu w-[24px] h-[24px] ' /><br /><Button className="text-xs "> Cài đặt</Button></Flex>,
        },
        {
            icon: (<MoreHorizontal className='iconMenu w-[24px] h-[24px] ' />),
            key: 'MoreHorizontal',
        },
        {
            key: 'AddSquare',
            content: <Link to={"/app-name"} ><AddSquare className='iconMenu w-[24px] h-[24px] ' /><br /><Button className="text-xs ">Apps</Button></Link >,

        }
    ]


    const [content, setContent] = useState(null);
    const [header, setHeader] = useState(null);
    const onHandleSumit = (content, header) => {
        dispatch(statusAppItemMenu(true))
        setContent(content);
        setHeader(header);
    }


    return (<div className={statusMenu ? "fixed border-solid border-[4px] border-r-[#fff] border-t-transparent border-l-transparent border-b-transparent" : "fixed border-solid border-[4px] border-r-[#fff] border-t-transparent border-r-transparent border-l-transparent"}>
        <div className='flex sm:hidden md:relative sm:relative 2xl:relative z-50 md:block xl:block 2xl:block 2xl:left-0 md:left-0 xl:left-0 -left-10 h-screen bg-[#E4EDF3] ease-in-out duration-300'>
            <ItemMenu content={content} header={header} />
            <Menu
                defaultActiveIndex={0}
                items={items}
                iconOnly
                accessibility={menuAsToolbarBehavior}
                aria-label="Compose Editor"
                className='menu w-[68px] text-[#616161] ease-in-out text-center duration-300 bg-[#E4EDF3]'
            />
        </div >

    </div>)
}
export default MenuHome