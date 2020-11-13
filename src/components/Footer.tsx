import React from 'react'
import { Flex, Text } from '@chakra-ui/core'

const Footer = () => {
  return (
    <Flex
      bg="intaniaRed.700"
      w="100vw"
      h="50px"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize={['xs', 'md']} fontWeight="regular" color="white">
        © 2020, กรรมการนิสิตคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
      </Text>
    </Flex>
  )
}

export default Footer
