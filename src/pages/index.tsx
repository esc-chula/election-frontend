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
} from '@chakra-ui/core'
import Card from 'components/Card'
import { useWindowDimensions } from 'components/PageWrapper'

const Landing = () => {
  const [checked, setChecked] = useState(false)
  const { width } = useWindowDimensions()

  const onCheckBoxChange = () => {
    setChecked(!checked)
  }

  const SSOBar = (props: FlexProps) => {
    //TODO: add image
    return (
      <Flex
        bg="intaniaRed.700"
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
            ระบบเลือกตั้งออนไลน์{width < 768 ? <br /> : '  '}คณะวิศวกรรมศาสตร์
          </Text>
        </Box>
      </Flex>
    )
  }

  const TextCard = (props: BoxProps) => {
    return (
      <Card width={['340px', '388px']} {...props}>
        <Text color="mono.4" fontWeight="light" fontSize={['sm', 'md']}>
          การเข้าสู่ระบบเลือกตั้งออนไลน์ คณะวิศวกรรมศาสตร์
          จำเป็นต้องมีการยืนยันตัวตนผู้ใช้ระบบด้วยรหัส CUNET
          โปรดยอมรับข้อตกลงด้านล่างเพื่อเข้าสู่ระบบ
        </Text>
      </Card>
    )
  }

  const TOSCheckBox = (props: CheckboxProps) => {
    return (
      <Checkbox
        variantColor="intaniaRed"
        onChange={onCheckBoxChange}
        defaultIsChecked={checked}
        width={['340px', '388px']}
        {...props}
      >
        <Text fontWeight="regular" fontSize={['sm', 'md']} color="mono.6">
          ข้าพเจ้ายินดีเปิดเผยข้อมูลส่วนตัวในระบบ CUNET เพื่อใช้ในการเข้าสู่ระบบ
        </Text>
      </Checkbox>
    )
  }

  const LoginButton = (props: Partial<ButtonProps>) => {
    return (
      <Button
        size="md"
        variant="solid"
        variantColor="intaniaRed"
        bg="intaniaRed.600"
        isDisabled={!checked}
        width={['105px', '130px']}
        fontSize={['lg', 'xl']}
        fontWeight="regular"
        {...props}
      >
        <Text>เข้าสู่ระบบ</Text>
      </Button>
    )
  }

  return (
    <Flex flexDirection="column" alignItems="center">
      <SSOBar />
      <Stack
        spacing={['20px', '28px']}
        alignItems="center"
        marginTop={['18px', '40px']}
      >
        <TextCard />
        <TOSCheckBox />
        <LoginButton />
      </Stack>
    </Flex>
  )
}

export default Landing
