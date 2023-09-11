

import { Text, Header, Flex, Button } from "@fluentui/react-northstar"
import { Filter } from "@styled-icons/fluentui-system-regular"
import { useDispatch, useSelector } from "react-redux"
import { actitAppItemMenu, statusAppItemMenu } from "../../../redux/status"
import { useEffect } from "react"


const HeaderItemMenu = ({ title }) => {
    const dispatch = useDispatch()
    const { statusItemMenu } = useSelector(state => state.appMcs)
    useEffect(() => {
        if (title) {
            dispatch(actitAppItemMenu(title))
        }
    }, [title])

    const onHandleMenu = () => {

        dispatch(statusAppItemMenu(!statusItemMenu))
    }

    return (
        <Header className="flex justify-between items-center h-[60px] px-5 border-b-gray-300 border-2" >
            <Text className="font-sans font-bold text-[18px]">{title}</Text>
            <Button icon={<Filter className="w-[20px] h-[20px]" />} onClick={() => onHandleMenu()} />
        </Header>
    )
}

export default HeaderItemMenu