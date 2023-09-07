
import { Input, Image, Button } from "@fluentui/react-northstar"
import { ChevronLeft, ChevronRight, MoreHorizontal, Dismiss, CheckboxUnchecked, LineHorizontal1, Search, List } from "@styled-icons/fluentui-system-regular"
import { useState } from "react"

import MenuHome from "./menu"
import { useDispatch, useSelector } from "react-redux"
import { statusApp } from "../../redux/status"
const HeaderHome = () => {
    const [menuHeader, setMenuHeader] = useState(false)
    const status = useSelector(state => state.appMcs.status)
    console.log(status);
    return (
        <header className="flex justify-around pr-12 2xl:pr-0 xl-pr-0 items-center w-[100%] h-[48px] bg-[#E4EDF3] px-2 md:px-14 sm:justify-between fixed z-50">
            <div className="w-10 sm:hidden md:block xl:block 2xl:block">
                <img src="https://spsvn.com/wp-content/uploads/2023/03/logoSPS.png" alt="" className="w-[100%] h-[35px] object-contain hidden md:block xl:block 2xl:block" />
            </div>
            <div className="w-10 -ml-10 sm:ml-10 sm:block md:hidden xl:hidden 2xl:hidden">
                <Button className="w-[25px] h-[25px]" onClick={() => setMenuHeader(!menuHeader)}>
                    <List className="" />
                    {menuHeader && <MenuHome className="sm:block md:block xl:block 2xl:hidden" />}
                </Button>

            </div>

            <div className="flex justify-center items-center w-auto">
                <Button onClick={() => useDispatch(statusApp(!status))}><ChevronLeft className='w-[20px] h-[20px] text-[#5e5c5c] mx-1 md:mx-2 hover:scale-75 ease-in-out duration-300' /></Button >
                <Button  ><ChevronRight className='w-[20px] h-[20px] text-[#5e5c5c] mx-1 md:mx-2 hover:scale-75 ease-in-out duration-300' /></Button >
                <Input icon={<Search className="absolute top-2 w-4 h-4 ml-2" />} placeholder="Search..." className="relative " />
            </div>
            <div className="flex justify-center items-center w-32">
                <Button className="px-4 py-3 hover:bg-[#f3f6f9] group"><MoreHorizontal className='w-[16px] h-[16px] text-[#5e5c5c] group-hover:scale-90 ease-in-out duration-300 group-hover:text-[#636c6f]' /></Button>
                <Image
                    circular
                    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/RobertTolbert.jpg"
                    className="w-[20%] h-[20%] rounded-full cursor-pointer mx-2" />
                <Button className="px-4 py-3 hover:bg-[#f3f6f9] group "><LineHorizontal1 className='w-[16px] h-[16px] text-[#5e5c5c] group-hover:scale-90 ease-in-out duration-300 group-hover:text-[#636c6f]' /></Button>
                <Button className="px-4 py-3 hover:bg-[#f3f6f9] group"><CheckboxUnchecked className='w-[16px] h-[16px] text-[#5e5c5c] group-hover:scale-90 ease-in-out duration-300 group-hover:text-[#636c6f]' /></Button>
                <Button className="pl-4 pr-8 py-3 hover:bg-[#f3f6f9] group"><Dismiss className='w-[16px] h-[16px] text-[#5e5c5c] -mr-4 group-hover:scale-90 group-hover:rotate-180 ease-in-out duration-300 group-hover:text-[#636c6f] ' /></Button>
            </div>

        </header>)
}

export default HeaderHome