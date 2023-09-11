import banner from "../../assets/banner.jpg"
import React, { useState } from 'react'
import organ from "../../assets/organ.jpg"
import user from "../../assets/user.jpg"
import danhmuc from "../../assets/danhmuc.jpg"
import cauhinh from "../../assets/cauhinh.jpg"
import { ChevronLeft, ChevronRight } from "@styled-icons/fluentui-system-regular"
import danhmuc1 from "../../assets/danhmuc1.jpg"
import cauhinh1 from "../../assets/cauhinh1.jpg"
import cocau from "../../assets/cocau.jpg"
import { Button } from "@fluentui/react-northstar"
import { Card, Flex, Image, Text } from '@fluentui/react-northstar'
import { useSelector } from "react-redux"
import ItemContent from "./component/itemContent"




const Content = () => {
    const { statusItemMenu } = useSelector(state => state.appMcs)


    const itemCard = (img, text) => (
        <Flex className="content_iconBoder group flex items-center justify-center w-[126px]  py-[14px] grap-[10px] rounded-[6px] bg-[#151657] hover:bg-[#b2b9ef] ease-in-out duration-300 cursor-pointer">
            <Flex className="flex flex-col justify-center items-center group-hover:scale-90 ease-in-out duration-300">
                <Image src={img} alt="organ" className="rounded-[5px]" />
                <Text className="text-white text-[12px] mt-2">{text}</Text>
            </Flex>
        </Flex>
    )
    return (<div className="relative">
        <Flex className="my-2 px-2 xl:px-0 md:px-0">
            <Image src={banner} className="relative w-[100%] h-[247px] object-fill pr-9 ml-3 md:px-5 2xl:px-10 2xl:ml-0 md:ml-0 flex-shrink-0 ease-in-out duration-300" />
        </Flex>
        <Card className="flex justify-between top-0 left-24 absolute items-center -mx-5 md:mx-10 2xl:mx-10">
            <Flex className="hidden lg:block md:block pl-14  md:-ml-[100px] ">
                <Text className="text-[#fff] font-sans text-[32px] font-bold">Nhà quản trị tài ba <br /><p className="runText text-[16px] font-light">Chuyển đổi số toàn diện</p></Text>
            </Flex>
            <Card.Body className={statusItemMenu ? "flex 2xl:ml-[250px] xl:ml-[350px] md:ml-[30px] w-[260px] items-start content-start gap-[8px] flex-wrap py-4 ease-in-out duration-300" : "flex ml-2 2xl:ml-[300px] xl:ml-[700px] md:ml-[30px] w-[260px] items-start content-start gap-[8px] flex-wrap py-4 ease-in-out duration-300"}>
                {itemCard(organ, "Organizationn")}
                {itemCard(user, "UserProfile")}
                {itemCard(danhmuc, "Danh mục")}
                {itemCard(cauhinh, "Cấu hình")}
            </Card.Body>
        </Card>

        <Flex className="ml-5 font-sans ">
            <Flex className="flex justify-between items-center mr-10">
                <h2 className="text-[18px] font-bold mb-2">Hướng dẫn hiện có</h2>
                <Flex>
                    <Button><ChevronLeft className='w-[20px] h-[20px] text-[#5e5c5c] mx-1 md:mx-2 hover:scale-75 ease-in-out duration-300' /></Button >
                    <Button><ChevronRight className='w-[20px] h-[20px] text-[#5e5c5c] mx-1 md:mx-2 hover:scale-75 ease-in-out duration-300' /></Button >
                </Flex>
            </Flex>

            <Flex className="flex justify-around items-center flex-wrap">
                <Flex className="itemApp w-[343px] h-[416px] bg-[#fff] rounded-[4px] px-[23px] py-2 mt-5 2xl:mt-0 xl:mt-0 ease-in-out duration-700"  >
                    <ItemContent img={danhmuc} name={"Danh mục"} text={"Job title"} banner={danhmuc1} content={"Job Title được hiểu là định nghĩa của các chức vụ hiện có tròn doanh nghiệp, tổ chức của bạn,Job Title được hiểu là định nghĩa của các chức vụ hiện có tròn doanh nghiệp, tổ chức của bạn"} />
                    <Button content="Xem thêm" className="w-[96px] float-right mt-3 h-[32px] border-solid border-2 border-[#D1D1D1] rounded-[4px] hover:bg-[#f5f5f5] " />
                </Flex>
                <Flex className="itemApp w-[343px] h-[416px] bg-[#fff] rounded-[4px] px-[23px] py-2 mt-5 2xl:mt-0 xl:mt-0 ease-in-out duration-700" >
                    <ItemContent img={organ} name={"Cơ cấu tổ chức"} text={"Organization"} banner={cocau} content={"Tổng hợp các bộ phận (đơn vị và cá nhân) khác nhau, có mối liên hệ và quan hệ phụ thuộc"} />
                    <Button content="Xem thêm" className="w-[96px] float-right mt-3 h-[32px] border-solid border-2 border-[#D1D1D1] rounded-[4px] hover:bg-[#f5f5f5] " />
                </Flex>
                <Flex className="itemApp w-[343px] h-[416px] bg-[#fff] rounded-[4px] px-[23px] py-2 mt-5 2xl:mt-0 xl:mt-0 ease-in-out duration-700" >
                    <ItemContent img={cauhinh} name={"Cấu hình"} text={"Cấu hình bảng"} banner={cauhinh1} content={"Một hình thức tổ chức, lưu trữ dữ liệu theo hệ thống và thứ tự để có thể sử dụng tài liệu một cách tối ưu ,Một hình thức tổ chức, lưu trữ dữ liệu theo hệ thống và thứ tự để có thể sử dụng tài liệu một cách tối ưu"} />
                    <Button content="Xem thêm" className="w-[96px] float-right mt-3 h-[32px] border-solid border-2 border-[#D1D1D1] rounded-[4px] hover:bg-[#f5f5f5] " />
                </Flex>
            </Flex>
        </Flex>
    </div>
    )
}

export default Content