
import { Flex, Image, Text, Button } from "@fluentui/react-northstar"
import Banner from "./component/banner"
import danhmuc from "../../assets/danhmuc.jpg"
import danhmuc1 from "../../assets/danhmuc1.jpg"
import Task from "./component/task"
import cauhinh2 from "../../assets/cauhinh1.jpg"
import cocau from "../../assets/cocau.jpg"
import organ from "../../assets/organ.jpg"
import cauhinh from "../../assets/cauhinh.jpg"
import { ChevronLeft, ChevronRight } from "@styled-icons/fluentui-system-regular"

const Content = () => {

    const taskItems = [
        {
            key: "1",
            image: danhmuc,
            name: "Danh mục",
            title: "Job Title",
            banner: danhmuc1,
            content: "Job Title được hiểu là định nghĩa của các chức vụ hiện có tròn doanh nghiệp, tổ chức của bạn"
        },
        {
            key: "2",
            image: organ,
            name: "Cơ cấu tổ chức",
            title: "Organization",
            banner: cocau,
            content: "Tổng hợp các bộ phận (đơn vị và cá nhân) khác nhau, có mối liên hệ và quan hệ phụ thuộc...."
        },
        {
            key: "3",
            image: cauhinh,
            name: "Cấu hình",
            title: "Cấu hình bảng",
            banner: cauhinh2,
            content: "Một hình thức tổ chức, lưu trữ dữ liệu theo hệ thống và thứ tự để có thể sử dụng tài liệu một cách tối ưu"
        },
    ]

    return (<>
        <Flex className="container">
            <Flex className="container_image">
                <Banner />
            </Flex >
            <Flex className="container_text">
                <h1>Hướng dẫn hiện có</h1>
                <Flex className='container_text--arrow '>
                    <Button icon={<ChevronLeft className='container_text--arrow--item' />} />
                    <Button icon={<ChevronRight className='container_text--arrow--item' />} />
                </Flex>
            </Flex>
            <Flex className="container_task">
                {taskItems.map(item => (
                    <Task items={item} key={item.key} />
                ))}
            </Flex>
        </Flex>
    </>)
}

export default Content