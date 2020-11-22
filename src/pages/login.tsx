import React from 'react'
import { Box, Flex, Text, Stack, useColorModeValue } from '@chakra-ui/react'
import Card from 'components/Card'
import Container from 'components/Container'
import { PrimaryButton } from 'components/PrimaryButton'
import { Link } from 'react-router-dom'

const Login = () => {
  const ssoBar = (
    <Flex
      bg={useColorModeValue('intaniaRed.600', 'intaniaRedSecondary.600')}
      w="100%"
      h="130px"
      justifyContent="center"
      align="center"
      opacity={20}
    >
      <Box textAlign="center">
        <Text
          fontSize={['3xl', '3xl', '4xl']}
          fontWeight="regular"
          color="white"
          whiteSpace="break-spaces"
        >
          ระบบเลือกตั้งออนไลน์
          <Box as="br" display={['block', 'none']} /> คณะวิศวกรรมศาสตร์
        </Text>
      </Box>
    </Flex>
  )

  const textCard = (
    <Card>
      <Text
        color={useColorModeValue('mono.4', 'whiteAlpha.800')}
        fontWeight="light"
        fontSize={['sm', 'md']}
        textAlign="center"
      >
        การเข้าสู่ระบบเลือกตั้งออนไลน์ คณะวิศวกรรมศาสตร์{' '}
        <Box as="br" display={['block', 'none']} />
        จำเป็นต้องมีการยืนยันตัวตนผู้ใช้ระบบด้วยรหัส CUNET
        <br />
        โปรดยอมรับข้อตกลงด้านล่างเพื่อเข้าสู่ระบบ
      </Text>
    </Card>
  )

  const loginButton = (
    <Link to="/policy">
      <PrimaryButton
        size="md"
        variant="solid"
        width={['105px', '130px']}
        fontSize={['lg', 'xl']}
        fontWeight="regular"
      >
        <Text>เริ่มต้น</Text>
      </PrimaryButton>
    </Link>
  )

  return (
    <Flex flexDirection="column" alignItems="center">
      {ssoBar}
      <Container>
        <Stack
          spacing={['20px', '28px']}
          alignItems="center"
          marginY={['18px', '40px']}
        >
          {textCard}
          {loginButton}
        </Stack>
      </Container>
    </Flex>
  )
}

export default Login
