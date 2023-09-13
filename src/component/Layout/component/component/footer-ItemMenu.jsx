import React from 'react'
import { Text, Header, Flex, Button } from "@fluentui/react-northstar"
import { PeopleAdd, LauncherSettings } from "@styled-icons/fluentui-system-regular"

const FooterItemMenu = () => {
    return (
        <Flex className="footerItem">
            <Flex className='footerItem_button'>
                <Button icon={<PeopleAdd className="footerItem_icon" />} />
                <Text className="footerItem_text">Cài đặt hệ thống</Text>
            </Flex>
            <Button icon={<LauncherSettings className="footerItem_icon" />} />
        </Flex>
    )
}

export default FooterItemMenu