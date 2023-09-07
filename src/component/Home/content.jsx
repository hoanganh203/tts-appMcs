import banner from "../../assets/banner.jpg"
import React from 'react'
import organ from "../../assets/organ.jpg"
import user from "../../assets/user.jpg"
import danhmuc from "../../assets/danhmuc.jpg"
import cauhinh from "../../assets/cauhinh.jpg"
import { ChevronLeft, ChevronRight } from "@styled-icons/fluentui-system-regular"
import danhmuc1 from "../../assets/danhmuc1.jpg"
import cauhinh1 from "../../assets/cauhinh1.jpg"
import cocau from "../../assets/cocau.jpg"
import ItemContent from "./itemContent"
import { Button } from "@fluentui/react-northstar"




const Content = () => {

    return (<div className="relative">
        <div className="my-2 px-2 xl:px-0 md:px-0">
            <img src={banner} className="relative w-[100%] h-[247px] object-fill pr-9 ml-3  md:px-10 2xl:px-10 2xl:ml-0 md:ml-0 flex-shrink-0 ease-in-out duration-300" />
        </div>

        <div className="flex justify-between top-0 left-28 absolute items-center -mx-5 md:mx-10 2xl:mx-10">
            <div className="hidden lg:block md:block pl-32  md:-ml-[100px] ">
                <h2 className="text-[#fff] font-sans text-[32px] font-bold">Nhà quản trị tài ba <p className="text text-[16px] font-light">Chuyển đổi số toàn diện</p></h2>
            </div>
            <div className="flex 2xl:ml-[700px] xl:ml-[400px] md:ml-[30px] w-[260px] items-start content-start gap-[8px] flex-wrap py-4 ease-in-out duration-300">
                <div className="content_iconBoder group flex items-center justify-center w-[126px]  py-[14px] grap-[10px] rounded-[6px] bg-[#151657] hover:bg-[#b2b9ef] ease-in-out duration-300 cursor-pointer">
                    <div className="flex flex-col justify-center items-center group-hover:scale-90 ease-in-out duration-300">
                        <img src={organ} alt="organ" className="rounded-[5px]" />
                        <p className="text-white text-[12px] mt-2">Organizationn</p>
                    </div>
                </div>

                <div className="content_iconBoder group flex items-center justify-center w-[126px] py-[14px] grap-[10px] rounded-[6px] bg-[#151657] hover:bg-[#b2b9ef] ease-in-out duration-300 cursor-pointer">
                    <div className="flex flex-col justify-center items-center group-hover:scale-90 ease-in-out duration-300">
                        <img src={user} alt="organ" className="rounded-[5px]" />
                        <p className="text-white text-[12px] mt-2">UserProfile</p>
                    </div>
                </div>
                <div className="content_iconBoder group flex items-center justify-center w-[126px] py-[14px] grap-[10px] rounded-[6px] bg-[#151657] hover:bg-[#b2b9ef] ease-in-out duration-300 cursor-pointer">
                    <div className="flex flex-col justify-center items-center">
                        <img src={danhmuc} alt="organ" className="rounded-[5px] group-hover:scale-90 ease-in-out duration-300" />
                        <p className="text-white text-[12px] mt-2">Danh mục</p>
                    </div>
                </div>
                <div className="content_iconBoder group flex items-center justify-center w-[126px] py-[14px] grap-[10px] rounded-[6px] bg-[#151657] hover:bg-[#b2b9ef] ease-in-out duration-300 cursor-pointer">
                    <div className="flex flex-col justify-center items-center group-hover:scale-90 ease-in-out duration-300">
                        <img src={cauhinh} alt="organ" className="rounded-[5px]" />
                        <p className="text-white text-[12px] mt-2">Cấu hình</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="mx-10 font-sans ">
            <div className="flex justify-between items-center">
                <h2 className="text-[18px] font-bold mb-2">Hướng dẫn hiện có</h2>
                <div>
                    <Button  ><ChevronLeft className='w-[20px] h-[20px] text-[#5e5c5c] mx-1 md:mx-2 hover:scale-75 ease-in-out duration-300' /></Button >
                    <Button  ><ChevronRight className='w-[20px] h-[20px] text-[#5e5c5c] mx-1 md:mx-2 hover:scale-75 ease-in-out duration-300' /></Button >
                </div>
            </div>

            <div className="flex justify-around items-center flex-wrap">
                <ItemContent img={danhmuc} name={"Danh mục"} text={"Job title"} banner={danhmuc1} content={"Job Title được hiểu là định nghĩa của các chức vụ hiện có tròn doanh nghiệp, tổ chức của bạn"} />
                <ItemContent img={organ} name={"Cơ cấu tổ chức"} text={"Organization"} banner={cocau} content={"Job Title được hiểu là định nghĩa của các chức vụ hiện có tròn doanh nghiệp, tổ chức của bạn"} />
                <ItemContent img={cauhinh} name={"Cấu hình"} text={"Cấu hình bảng"} banner={cauhinh1} content={"Job Title được hiểu là định nghĩa của các chức vụ hiện có tròn doanh nghiệp, tổ chức của bạn"} />
            </div>
        </div>
    </div>
    )
}

export default Content