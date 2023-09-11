import React from 'react'
import { Tree, Flex, Text, Image, Button } from '@fluentui/react-northstar'
import { TriangleDownIcon, TriangleEndIcon } from '@fluentui/react-icons-northstar'
import home from "../../../assets/home.jpg"
import organ from "../../../assets/organ.jpg"
import user from "../../../assets/user.jpg"
import danhmuc from "../../../assets/danhmuc.jpg"
import cauhinh from "../../../assets/cauhinh.jpg"


const ContentItemMenu = () => {
    const items = [
        {
            id: 'menu-1',
            title: 'Pinned',
            items: [
                {
                    id: 'menu-1-item-1',
                    title: <Flex className='flex items-center h-[44px]'>
                        <Image src={home} className='w-[28px] h-[28px]' />
                        <Text className='mx-4 font-sans'>
                            <h2 className='text-[14px] font-normal'>Home</h2>
                            <p className='text-[12px] font-normal'>Hướng dẫn sử dụng</p>
                        </Text>
                    </Flex>,
                    className: "h-[44px]"

                },
            ],
            className: "h-[28px] "
        },

        {
            id: 'menu-2',
            title: 'Của tôi',
            className: "mt-2",
            items: [
                {
                    id: 'menu-2-item-2',
                    title: <Flex className='flex items-center h-[44px]'>
                        <Image src={danhmuc} className='w-[28px] h-[28px] rounded-[4px]' />
                        <Text className='mx-4 font-sans'>
                            <h2 className='text-[14px] font-medium'>Danh mục</h2>
                        </Text>
                    </Flex>,
                    className: "h-[44px]",
                    items: [
                        {
                            id: 'menu-2-item-2-step-1',
                            title: <Text className='mx-4 font-sans leading-6'>
                                <p className='text-[12px] font-normal'>Job title</p>
                                <p className='text-[12px] font-normal'>Roles Group</p>
                            </Text>,
                            className: "mx-12 -mt-6",
                        },
                    ],
                },
                {
                    id: 'menu-3-item-3',
                    title: <Flex className='flex items-center h-[44px]'>
                        <Image src={organ} className='w-[28px] h-[28px] rounded-[4px]' />
                        <Text className='mx-4 font-sans'>
                            <h2 className='text-[14px] font-normal'>cơ cấu tổ chức</h2>
                        </Text>
                    </Flex>,
                    className: "h-[44px]",
                    items: [
                        {
                            id: 'menu-3-item-3-step-2',
                            title: <Text className='mx-4 font-sans leading-6'>
                                <p className='text-[12px] font-normal'>Job title</p>
                                <p className='text-[12px] font-normal'>Roles Group</p>
                            </Text>,
                            className: "mx-12 -mt-6",
                        },
                    ],

                },
                {
                    id: 'menu-4-item-4',
                    title: <Flex className='flex items-center h-[44px]'>
                        <Image src={user} className='w-[28px] h-[28px] rounded-[4px]' />
                        <Text className='mx-4 font-sans'>
                            <h2 className='text-[14px] font-normal'>User profile</h2>
                        </Text>
                    </Flex>,
                    className: "h-[44px]",
                    items: [
                        {
                            id: 'menu-4-item-4-step-3',
                            title: <Text className='mx-4 font-sans leading-6'>
                                <p className='text-[12px] font-normal'>Job title</p>
                                <p className='text-[12px] font-normal'>Roles Group</p>
                            </Text>,
                            className: "mx-12 -mt-6",
                        },
                    ],

                },
                {
                    id: 'menu-5-item-5',
                    title: <Flex className='flex items-center h-[44px]'>
                        <Image src={cauhinh} className='w-[28px] h-[28px] rounded-[4px]' />
                        <Text className='mx-4 font-sans'>
                            <h2 className='text-[14px] font-normal'>Cấu hình chức năng</h2>
                        </Text>
                    </Flex>,
                    className: "h-[44px]",
                    items: [
                        {
                            id: 'menu-5-item-5-step-4',
                            title: <Text className='mx-4 font-sans leading-6'>
                                <p className='text-[12px] font-normal'>Cấu hình bẳng</p>
                                <p className='text-[12px] font-normal'>Cấu hình trường</p>
                                <p className='text-[12px] font-normal'>loại công việc</p>
                                <p className='text-[12px] font-normal'>Loại dự án</p>
                                <Button className='text-[12px] text-[#5B5FC7] font-normal'>Xem thêm</Button>
                            </Text>,
                            className: "mx-12 -mt-6",
                        },
                    ],
                },
            ],
        },

    ]
    return (
        <Tree aria-label="Custom title" items={items} className='cursor-pointer mx-[20px] overflow-y-auto h-[500px]' />
    )
}

export default ContentItemMenu