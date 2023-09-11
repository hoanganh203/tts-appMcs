import { Flex, Segment } from "@fluentui/react-northstar"
import HeaderItemMenu from "./headerItemMenu"
import ContentItemMenu from "./contentItemMenu"
import FooterItemMenu from "./footerItemMenu"
import { useSelector } from "react-redux"

const ItemMenu = ({ content, header }) => {
    const { statusItemMenu } = useSelector(state => state.appMcs)

    return (
        <Flex column className={statusItemMenu ? "text-black fixed bg-[#E4EDF3] ml-[72px] w-[320px] h-screen top-12 ease-in-out duration-300 " : "text-black fixed w-0 h-screen top-12 ease-in-out duration-300"}>
            <Segment content={header} inverted className={statusItemMenu ? "absolute top-0 w-full" : "hidden"} />
            <Segment content={content} className={statusItemMenu ? "mt-[100px]" : "hidden"} />
            <Segment content={<FooterItemMenu />} inverted className={statusItemMenu ? "absolute bottom-[40px] w-full" : "hidden"} />
        </Flex>
    )
}

export default ItemMenu