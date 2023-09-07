import React from 'react'
import { Button } from "@fluentui/react-northstar"


const ItemContent = ({ img, name, banner, text, content }) => {
    const textMin = (text) => {
        let dataText = text.substring(0, 90)
        if (text.length > 90) {
            dataText = dataText + "..."
        }
        return dataText
    }
    return (
        <div className="itemApp w-[343px] h-[406px] bg-[#fff] rounded-[4px] px-[23px] py-2 mt-5 2xl:mt-0 xl:mt-0 ">
            <header className="flex items-center gap-[12px] ">
                <div >
                    <img src={img} alt="" className="w-[28px] h-[28px] rounded-[5px]" /></div>
                <div>
                    <h3 className="text-[#252423] text-[14px] font-bold">{name}</h3>
                    <p className="text-[#616161] text-[12px] font-normal">{text}</p>
                </div>
            </header>
            <div className="my-2">
                <img src={banner} alt="" />
            </div>

            <div>
                <h2 className="text-[#252423] text-[18px] font-bold">{name}</h2>
                <h4 className="text-[#616161] text-[12px] font-normal">{text}</h4>
                <p className="text-[#252423] text-[13px] font-normal">{textMin(content)}</p>
            </div>
            <div>
                <Button content="Xem thêm" className="w-[96px] float-right mt-7 h-[32px] border-solid border-2 border-[#D1D1D1] rounded-[4px] hover:bg-[#f5f5f5] " />
            </div>
        </div>
    )
}

export default ItemContent