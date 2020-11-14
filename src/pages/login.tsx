import React, { useState } from 'react'
import {
  Box,
  Flex,
  Text,
  Checkbox,
  Button,
  Stack,
  BoxProps,
  CheckboxProps,
  ButtonProps,
  FlexProps,
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

  const SSOBar = (props: FlexProps) => {
    //TODO: add image
    return (
      <Flex
        bg="intaniaRed.600"
        w="100%"
        h="130px"
        justifyContent="center"
        align="center"
        opacity={20}
        {...props}
      >
        <Box textAlign="center">
          <Text
            fontSize={['3xl', '3xl', '4xl']}
            fontWeight="regular"
            color="white"
            whiteSpace="break-spaces"
          >
            ระบบเลือกตั้งออนไลน์
            <Box display={['block', 'none']} /> คณะวิศวกรรมศาสตร์
          </Text>
        </Box>
      </Flex>
    )
  }

  const TextCard = (props: BoxProps) => {
    return (
      <Card {...props} width="100%">
        <Text color="mono.4" fontWeight="light" fontSize={['sm', 'md']}>
          การเข้าสู่ระบบเลือกตั้งออนไลน์ คณะวิศวกรรมศาสตร์
          <Box as="br" display={['block', 'none']} />
          จำเป็นต้องมีการยืนยันตัวตนผู้ใช้ระบบด้วยรหัส CUNET
          <br />
          โปรดยอมรับข้อตกลงด้านล่างเพื่อเข้าสู่ระบบ
        </Text>
      </Card>
    )
  }

  const TOSCheckBox = (props: CheckboxProps) => {
    return (
      <Checkbox
        colorScheme="intaniaRed"
        onChange={onCheckBoxChange}
        defaultIsChecked={checked}
        {...props}
      >
        <Text fontWeight="regular" fontSize={['sm', 'md']} color="mono.6">
          ข้าพเจ้ายินดีเปิดเผยข้อมูลส่วนตัวในระบบ CUNET เพื่อใช้ในการเข้าสู่ระบบ
        </Text>
      </Checkbox>
    )
  }

  const LoginButton = (props: Partial<ButtonProps>) => {
    const redirect = useRedirectPath('')
    const redirectURL = `${SSO_URL}?r=${APP_HOST}/callback?r=${redirect}`

    return (
      <a href={redirectURL}>
        <Button
          size="md"
          variant="solid"
          colorScheme="intaniaRed"
          bg="intaniaRed.500"
          isDisabled={!checked}
          width={['105px', '130px']}
          fontSize={['lg', 'xl']}
          fontWeight="regular"
          {...props}
        >
          <Text>เข้าสู่ระบบ</Text>
        </Button>
      </a>
    )
  }

  return (
    <Flex flexDirection="column" alignItems="center">
      <SSOBar />
      <Container>
        <Stack
          spacing={['20px', '28px']}
          alignItems="center"
          marginY={['18px', '40px']}
        >
          <TextCard />
          <TOSCheckBox />
          <LoginButton />
        </Stack>
      </Container>
    </Flex>
  )
}

export default Login
