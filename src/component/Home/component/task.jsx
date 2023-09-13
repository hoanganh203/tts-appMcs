
import React from 'react'
import { Flex, Image, Text, Button } from "@fluentui/react-northstar"


const Task = (items) => {
    const { image, name, title, banner, content } = items.items

    const textMin = (text) => {
        let dataText = text.substring(0, 90)
        if (text.length > 90) {
            dataText = dataText + "..."
        }
        return dataText
    }
    return (
        <Flex className="container_task--list">
            <Flex className="container_task--list--header">
                <Image src={image} className="container_task--list--header--image" />
                <Flex className="container_task--list--header--text">
                    <Text className="container_task--list--header--text-1" content={name} />
                    <Text className="container_task--list--header--text-2" content={title} />
                </Flex>

            </Flex>
            <Flex className="container_task--list--banner">
                <Image src={banner} className="container_task--list--banner--image" />
            </Flex>
            <Flex className="container_task--list--content">
                <Text className="container_task--list--content--text-1" content={name} />
                <Text className="container_task--list--content--text-2" content={title} />
                <Text className="container_task--list--content--text-3" content={textMin(content)} />
            </Flex>
            <Flex className="container_task--list--footer">
                <Button className="container_task--list--footer-button">Xem thêm</Button>
            </Flex>
        </Flex>
    )
}

export default Task