import React from 'react'
import { Filter } from "@styled-icons/fluentui-system-regular"
import { Text, Flex, Button } from "@fluentui/react-northstar"

const HeaderItemMenu = () => {
    return (
        <Flex className="itemHeader" >
            <Text className="itemHeader_text">Setting</Text>
            <Button className='itemHeader_button' icon={<Filter className="itemHeader_icon" />} />
        </Flex>
    )
}

export default HeaderItemMenu