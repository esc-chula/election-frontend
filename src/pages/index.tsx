import React from 'react'
import { Box, Flex, Text, Checkbox, Button } from '@chakra-ui/core'

const SSOBar = () => {
  //TODO: add image
  return (
    <Flex
      bg="intaniaRed.700"
      w="100%"
      h="130px"
      justifyContent="center"
      align="center"
    >
      <Box textAlign="center">
        <Text
          fontSize={['3xl', '3xl', '4xl']}
          fontWeight="regular"
          color="white"
          whiteSpace="break-spaces"
        >
          ระบบเลือกตั้งออนไลน์ คณะวิศวกรรมศาสตร์
        </Text>
      </Box>
    </Flex>
  )
}

const TextCard = () => {
  return (
    <Flex
      w={['100vw', '375px']}
      h="120px"
      justify="center"
      align="center"
      boxShadow="2px 2px 2px rgba(0, 0, 0, 0.15)"
      p="30px"
      textAlign="center"
      my="30px"
    >
      <Text color="black" fontWeight="light" fontSize="md">
        การเข้าสู่ระบบเลือกตั้งออนไลน์ คณะวิศวกรรมศาสตร์
        จำเป็นต้องมีการยืนยันตัวตนผู้ใช้ระบบด้วยรหัส CUNET
        โปรดยอมรับข้อตกลงด้านล่างเพื่อเข้าสู่ระบบ
      </Text>
    </Flex>
  )
}

const TOSCheckBox = () => {
  return (
    //TODO: Change color to intaniaRed.primary
    <Checkbox>
      <Text>
        ข้าพเจ้ายินดีเปิดเผยข้อมูลส่วนตัวในระบบ CUNET เพื่อใช้ในการเข้าสู่ระบบ
      </Text>
    </Checkbox>
  )
}

const LoginButton = () => {
  return (
    <Button size="md" variant="solid" mt="30px">
      <Text>เข้าสู่ระบบ</Text>
    </Button>
  )
}

const Landing = () => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <SSOBar />
      <TextCard />
      <TOSCheckBox />
      <LoginButton />
    </Flex>
  )
}

export default Landing
