import React from 'react'
import { Menu, menuAsToolbarBehavior, Text } from '@fluentui/react-northstar'
import { AlertOn, Chat, ApprovalsApp, CalendarAgenda, Call, LauncherSettings, MoreHorizontal, AddSquare, Notepad, ChevronDoubleLeft } from "@styled-icons/fluentui-system-regular"
const items = [
    {
        icon: (
            <AlertOn className='menulayout_icon' />
        ),
        key: 'AlertOn',
        content: <Text>Thông báo</Text>
    },
    {
        icon: (
            <Chat />
        ),
        key: 'Chat',
        content: <Text>Thảo luận</Text>
    },
    {
        icon: (
            <ApprovalsApp />
        ),
        key: 'ApprovalsApp',
        content: <Text>Quy trình</Text>

    },
    {
        icon: (
            <CalendarAgenda />
        ),
        key: 'CalendarAgenda',
        content: <Text>Công việc</Text>

    },
    {
        icon: (
            <Call />
        ),
        key: 'Call',
        content: <Text>Request</Text>

    },
    {
        icon: (
            <Notepad />
        ),
        key: 'Notepad',
        content: <Text>booking</Text>

    },
    {
        icon: (
            <LauncherSettings />
        ),
        key: 'LauncherSettings',
        content: <Text>Setting</Text>

    },
    {
        icon: (
            <MoreHorizontal style={{ marginLeft: "-10px" }} />
        ),
        key: 'menuButton2',
        'aria-label': 'More options',
        indicator: false,
        menu: {
            items: [
                {
                    key: '5',
                    content: 'item1',
                },
                {
                    key: 'divider',
                    kind: 'divider',
                },
                {
                    key: '6',
                    content: 'item2',
                },
                {
                    key: '7',
                    content: 'item3',
                    disabled: true,
                },
                {
                    key: 'divider2',
                    kind: 'divider',
                },
                {
                    key: '8',
                    content: 'item3',
                },
            ],
        },

    },
    ,
    {
        icon: (
            <AddSquare />
        ),
        key: 'AddSquare',
        content: <Text>Apps</Text>

    },
]
const Menulayout = () => (
    <Menu
        defaultActiveIndex={0}
        items={items}
        iconOnly
        accessibility={menuAsToolbarBehavior}
        aria-label="Compose Editor"
        vertical
        className='menulayout'
    />
)
export default Menulayout