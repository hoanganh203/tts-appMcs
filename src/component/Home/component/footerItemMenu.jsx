


import { Text, Header, Flex, Button } from "@fluentui/react-northstar"
import { PeopleAdd, LauncherSettings } from "@styled-icons/fluentui-system-regular"


const FooterItemMenu = () => {
    return (
        <Flex className="flex justify-between items-center mx-5 border-t-gray-300 border-2 h-[58px] text-[#616161]">
            <Flex >
                <Button icon={<PeopleAdd className="w-[20px] h-[20px]" />} />
                <Text className="ml-3">Cài đặt hệ thống</Text>
            </Flex>
            <Button icon={<LauncherSettings className="w-[20px] h-[20px]" />} />
        </Flex>
    )
}

export default FooterItemMenu