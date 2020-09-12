import React from 'react'
import { Flex, Text } from '@chakra-ui/core'
import { useWindowDimensions } from './PageWrapper'

const Footer = () => {
  const { width } = useWindowDimensions()
  return (
    <Flex
      bg="intaniaRed.700"
      w={width}
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
