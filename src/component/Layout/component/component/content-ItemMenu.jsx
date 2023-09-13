import React from 'react'
import { Tree, Image, Flex, Text, Button } from '@fluentui/react-northstar'
import home from "../../../../assets/home.jpg"
import organ from "../../../../assets/organ.jpg"
import user from "../../../../assets/user.jpg"
import danhmuc from "../../../../assets/danhmuc.jpg"
import cauhinh from "../../../../assets/cauhinh.jpg"
const ContentItemMenu = () => {
    const itemComponent = (images, title, text) => (
        <Flex className='item_component'>
            <Image src={images} className='item_component--image' />
            <Text className='item_component--text'>{title}<p className='item_component--p'>{text}</p></Text>
        </Flex>
    )

    const itemtext = (text) => (
        <Text className='itemtext'>{text}</Text>
    )
    const items = [
        {
            id: '1',
            title: <span style={{ color: " #616161" }}>Pinnde</span>,
            items: [
                {
                    id: '2',
                    title: itemComponent(home, "Home", "Hướng dẫn sử dụng"),
                }
            ],

        },
        {
            id: '3',
            title: <span style={{ color: " #616161" }}>Của tôi</span>,
            items: [
                {
                    id: '4',
                    title: itemComponent(danhmuc, "Danh mục", ""),
                    items: [{
                        id: '5',
                        title: itemtext("Job Title"),
                    },
                    {
                        id: '6',
                        title: itemtext("Roles Group"),
                    },
                    ]
                },
                {
                    id: '7',
                    title: itemComponent(organ, "Cơ cấu tổ chúc", ""),
                    items: [{
                        id: '8',
                        title: itemtext("Job Title"),
                    },
                    {
                        id: '9',
                        title: itemtext("Roles Group"),
                    },
                    ]
                },
                {
                    id: '10',
                    title: itemComponent(user, "User Profile", ""),
                    items: [{
                        id: '11',
                        title: itemtext("Job Title"),
                    },
                    {
                        id: '12',
                        title: itemtext("Roles Group"),
                    },
                    ]
                },
                {
                    id: '13',
                    title: itemComponent(cauhinh, "Cấu hình chức năng", ""),
                    items: [
                        {
                            id: '14',
                            title: itemtext("Cấu hình bảng"),
                        },
                        {
                            id: '15',
                            title: itemtext("Cấu hình trường"),
                        },
                        {
                            id: '16',
                            title: itemtext("Loại công việc"),
                        },
                        {
                            id: '17',
                            title: itemtext("Loại dự án"),
                        },
                        {
                            id: '18',
                            title: <Button content={"Xem thêm"} style={{
                                color: "#5D61C8",
                                backgroundColor: "#ECF1F5",
                                border: "none"
                            }} />,
                        }
                    ]
                },
            ],
        },
    ]
    return (
        <Tree aria-label="default" items={items} className='itemMenu' />
    )
}

export default ContentItemMenu