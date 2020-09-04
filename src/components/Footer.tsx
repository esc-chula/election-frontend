import React from 'react'
import { Flex, Text } from '@chakra-ui/core'

const Footer = () => {
  return (
    <Flex
      bg="intaniaRed.dark"
      w="100%"
      h={['50px', '50px', '70px']}
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize="lg" fontWeight="regular" color="white">
        © 2020, กรรมการนิสิตคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
      </Text>
    </Flex>
  )
}

export default Footer
