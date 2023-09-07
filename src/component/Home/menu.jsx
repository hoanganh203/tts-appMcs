import React, { useState } from 'react'
import { Menu, menuAsToolbarBehavior, Button } from "@fluentui/react-northstar"
import { AlertOn, Chat, ApprovalsApp, CalendarAgenda, Call, LauncherSettings, MoreHorizontal, AddSquare, Notepad, ChevronDoubleLeft } from "@styled-icons/fluentui-system-regular"



const MenuHome = () => {

    const [sider, setSider] = useState()
    const items = [
        {
            icon: <AlertOn className='iconMenu w-[24px] mx-[29px] h-[24px] ' />,
            key: 'Notifications',
            content: !sider && <Button className="text-xs"> Thông báo</Button>,
        },
        {
            icon: <Chat className='iconMenu w-[24px] h-[24px] mx-[29px]' />,
            key: 'Chat',
            content: !sider && <Button className="text-xs">Thảo luận</Button>,
        },
        {
            icon: <ApprovalsApp className='iconMenu w-[24px] h-[24px] mx-[29px]' />,
            key: 'ApprovalsApp',
            content: !sider && <Button className="text-xs ">Quy trình</Button>,

        },
        {
            icon: <CalendarAgenda className='iconMenu w-[24px] h-[24px] mx-[29px]' />,
            key: 'CalendarAgenda',
            content: !sider && <Button className="text-xs ">Công việc</Button>,
        },
        {
            icon: <Call className='iconMenu w-[24px] h-[24px] mx-[29px] ' />,
            key: 'Call',
            content: !sider && <Button className="text-xs ">Gọi</Button>,

        },
        {
            icon: <Notepad className='iconMenu w-[24px] h-[24px] mx-[29px]' />,
            key: 'Booking',
            content: !sider && <Button className="text-xs ">Booking</Button>,

        },
        {
            icon: <LauncherSettings className='iconMenu w-[24px] h-[24px] mx-[29px]' />,
            key: 'Setting',
            content: !sider && <Button className="text-xs ">Cài đặt</Button>,

        },
        {
            icon: (<MoreHorizontal className='iconMenu w-[24px] h-[24px] mx-[29px]' />),
            key: 'MoreHorizontal',
        },
        {
            icon: (<AddSquare className='iconMenu w-[24px] h-[24px] mx-[29px]' />),
            key: 'AddSquare',
        }
    ]
    return (<div className={sider ? "fixed" : ""}>
        <div className='flex  sm:hidden md:relative sm:relative 2xl:relative z-50 md:block xl:block 2xl:block 2xl:left-0 md:left-0 xl:left-0 -left-10 h-screen bg-[#E4EDF3] ease-in-out duration-300'>
            <Menu
                defaultActiveIndex={0}
                items={items}
                iconOnly
                accessibility={menuAsToolbarBehavior}
                aria-label="Compose Editor"
                className={sider ? 'Opcity1 w-20 text-[#616161] text-center ease-in-out duration-300 bg-[#E4EDF3]' : 'Opcity2 w-48 text-[#616161]  ease-in-out duration-300 bg-[#E4EDF3] h-screen'}
            />
            <Button className='w-5 h-5 text-[#616161] z-10 absolute top-0 right-0' onClick={() => setSider(!sider)}><ChevronDoubleLeft className={sider ? 'rotate-180 ease-in-out duration-300' : 'rotate-0 ease-in-out duration-300'} /></Button>
        </div >
    </div>)
}
export default MenuHome