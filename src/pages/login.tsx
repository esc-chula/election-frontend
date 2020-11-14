import React, { useState } from 'react'
import {
  Box,
  Flex,
  Text,
  Checkbox,
  Button,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import Card from 'components/Card'
import { useRedirectPath } from 'util/hooks'
import { APP_HOST, SSO_URL } from 'config/env'
import Container from 'components/Container'

const Login = () => {
  const [checked, setChecked] = useState(false)

  const onCheckBoxChange = () => {
    setChecked(!checked)
  }

  const ssoBar = (
    <Flex
      bg="intaniaRed.600"
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
    <Card width="100%">
      <Text
        color={useColorModeValue('mono.4', 'whiteAlpha.800')}
        fontWeight="light"
        fontSize={['sm', 'md']}
      >
        การเข้าสู่ระบบเลือกตั้งออนไลน์ คณะวิศวกรรมศาสตร์
        <Box as="br" display={['block', 'none']} />
        จำเป็นต้องมีการยืนยันตัวตนผู้ใช้ระบบด้วยรหัส CUNET
        <br />
        โปรดยอมรับข้อตกลงด้านล่างเพื่อเข้าสู่ระบบ
      </Text>
    </Card>
  )

  const tosCheckBox = (
    <Checkbox
      colorScheme="intaniaRed"
      onChange={onCheckBoxChange}
      isChecked={checked}
    >
      <Text
        fontWeight="regular"
        fontSize={['sm', 'md']}
        color={useColorModeValue('mono.6', 'whiteAlpha.900')}
      >
        ข้าพเจ้ายินดีเปิดเผยข้อมูลส่วนตัวในระบบ CUNET เพื่อใช้ในการเข้าสู่ระบบ
      </Text>
    </Checkbox>
  )

  const redirect = useRedirectPath('')
  const redirectURL = `${SSO_URL}?r=${APP_HOST}/callback?r=${redirect}`

  const loginButton = (
    <Button
      as="a"
      href={checked ? redirectURL : undefined}
      size="md"
      variant="solid"
      colorScheme="intaniaRed"
      isDisabled={!checked}
      width={['105px', '130px']}
      fontSize={['lg', 'xl']}
      fontWeight="regular"
    >
      <Text>เข้าสู่ระบบ</Text>
    </Button>
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
          {tosCheckBox}
          {loginButton}
        </Stack>
      </Container>
    </Flex>
  )
}

export default Login
