

import React from 'react'
import { Flex, Image, Input, Button } from "@fluentui/react-northstar"
import { ChevronLeft, ChevronRight, MoreHorizontal, Dismiss, CheckboxUnchecked, LineHorizontal1, Search, List } from "@styled-icons/fluentui-system-regular"
import "../layout.css"
import { SearchIcon } from '@fluentui/react-icons-northstar'
const HeaderLayout = () => {
    return (
        <Flex className='header'>
            <Flex className='header_logo '>
                <Image
                    src="https://spsvn.com/wp-content/uploads/2023/03/logoSPS.png"
                />
            </Flex>
            <Flex className='header_search'>
                <Flex className='header_search--arrow '>
                    <Button icon={<ChevronLeft className='header_search--arrow--item' />} />
                    <Button icon={<ChevronRight className='header_search--arrow--item' />} />
                </Flex>
                <Input icon={<SearchIcon className='header_search--icon' style={{ color: "#616161 !important" }} />} placeholder="Search..." iconPosition="start" className='header_search--input' />
            </Flex>
            <Flex className='header_tool'>
                <Button icon={<MoreHorizontal className='header_tool--icon' />} className='header_tool--item' />
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"
                    className='header_tool--image' />
                <Button icon={<LineHorizontal1 className='header_tool--icon' />} className='header_tool--item' />
                <Button icon={<CheckboxUnchecked className='header_tool--icon' />} className='header_tool--item' />
                <Button icon={<Dismiss className='header_tool--icon' />} className='header_tool--item' />
            </Flex>
        </Flex>
    )
}

export default HeaderLayout