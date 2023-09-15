import React from 'react'
import { Menu, menuAsToolbarBehavior, Text } from '@fluentui/react-northstar'
import { AlertOn, Chat, ApprovalsApp, CalendarAgenda, Call, Settings, MoreHorizontal, AddSquare, Document, ChevronDoubleLeft } from "@styled-icons/fluentui-system-regular"
const items = [
    {
        icon: (
            <AlertOn className='menulayout_icon' />
        ),
        key: '1',
        content: <Text>Thông báo</Text>
    },
    {
        icon: (
            <Chat />
        ),
        key: '2',
        content: <Text>Thảo luận</Text>
    },
    {
        icon: (
            <ApprovalsApp />
        ),
        key: '3',
        content: <Text>Quy trình</Text>

    },
    {
        icon: (
            <CalendarAgenda />
        ),
        key: '4',
        content: <Text>Công việc</Text>

    },
    {
        icon: (
            <Call />
        ),
        key: '5',
        content: <Text>Request</Text>

    },
    {
        icon: (
            <Document />
        ),
        key: '6',
        content: <Text>booking</Text>

    },
    {
        icon: (
            <Settings />
        ),
        key: '7',
        content: <Text>Setting</Text>

    },
    {
        icon: (
            <MoreHorizontal style={{ marginLeft: "-10px" }} />
        ),
        key: '8',
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
        key: '9',
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
        className='menu'
    />
)
export default Menulayout