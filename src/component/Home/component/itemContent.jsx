import React from 'react'
import { Avatar, Card, Flex, Image, Text } from '@fluentui/react-northstar'

const ItemContent = ({ img, name, banner, text, content }) => {
    const textMin = (text) => {
        let dataText = text.substring(0, 90)
        if (text.length > 90) {
            dataText = dataText + "..."
        }
        return dataText
    }
    return (
        <Card>
            <Card.Header className="flex items-center gap-[12px] ">
                <Flex gap="gap.small" className='flex items-center'>
                    <Avatar
                        image={img}
                        label="Copy bandwidth"
                        name="Robert Tolbert"
                        status="unknown"
                        className="w-[28px] h-[28px] rounded-[5px]" />
                    <Flex column className='px-[20px]'>
                        <h3 className="text-[#252423] text-[14px] font-bold">{name}</h3>
                        <p className="text-[#616161] text-[12px] font-normal">{text}</p>
                    </Flex>
                </Flex>
            </Card.Header>
            <Card.Body>
                <Flex column gap="gap.small" className='my-2'>
                    <Image
                        src={banner}
                        fluid
                        className='w-[300px] h-[173px]' />
                    <Flex className='mt-[15px]'>
                        <Flex>
                            <Text content={name} className="text-[#252423] text-[18px] font-bold" />
                        </Flex>
                        <Flex>
                            <Text content={text} className="text-[#616161] text-[12px] font-normal" />
                        </Flex>
                        <Text content={textMin(content)} className="text-[#252423] text-[13px] font-normal " />
                    </Flex>
                </Flex>
            </Card.Body>
        </Card >
    )
}

export default ItemContent