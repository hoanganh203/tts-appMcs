
import { Flex, Image, Text } from "@fluentui/react-northstar"
import banner from "../../../assets/banner.jpg"
import organ from "../../../assets/organ.jpg"
import user from "../../../assets/user.jpg"
import danhmuc from "../../../assets/danhmuc.jpg"
import cauhinh from "../../../assets/cauhinh.jpg"



const Banner = () => {
    return (<>
        <Image src={banner} alt="banner" style={{ width: "1055px" }} />
        <Flex className="container_banner">
            <Flex className="container_banner--text">
                <h1>Nhà quản trị tài ba <br /> <Text className="container_banner--text--item">Chuyển đổi số toàn diện</Text></h1>
            </Flex>
            <Flex className="container_banner--list">
                <Flex className="container_banner--list--item">
                    <Flex className="container--list--item-child">
                        <Image className="container--list--item-child--image" src={organ} alt="banner" />
                        <Text className="container--list--item-child--text">Organization</Text>
                    </Flex>
                </Flex>
                <Flex className="container_banner--list--item">
                    <Flex className="container--list--item-child">
                        <Image className="container--list--item-child--image" src={user} alt="banner" />
                        <Text className="container--list--item-child--text">UserProfile</Text>
                    </Flex>
                </Flex>
                <Flex className="container_banner--list--item">
                    <Flex className="container--list--item-child">
                        <Image className="container--list--item-child--image" src={danhmuc} alt="banner" />
                        <Text className="container--list--item-child--text">Danh mục</Text>
                    </Flex>
                </Flex>
                <Flex className="container_banner--list--item">
                    <Flex className="container--list--item-child">
                        <Image className="container--list--item-child--image" src={cauhinh} alt="banner" />
                        <Text className="container--list--item-child--text">Cấu hình</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    </>
    )
}

export default Banner