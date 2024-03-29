import React, { useState } from 'react'
import {
  Box,
  Flex,
  Text,
  Stack,
  useColorModeValue,
  Checkbox,
  Divider,
} from '@chakra-ui/react'
import Card from 'components/Card'
import { PrimaryButton } from 'components/PrimaryButton'
import { useRedirectPath } from 'util/hooks'
import { APP_HOST, APP_NAME, SSO_URL } from 'config/env'
import Container from 'components/Container'
import { Header } from 'components/Header'
import { Content } from 'components/Content'
import { branding } from 'config/branding'

const appNameParts = APP_NAME.split(' ')

const Login = () => {
  const [checked, setChecked] = useState(false)

  const onCheckBoxChange = () => {
    setChecked(!checked)
  }

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
          {appNameParts[0]}
          <Box as="br" display={['block', 'none']} /> {appNameParts[1]}
        </Text>
      </Box>
    </Flex>
  )

  const textCard = (
    <Card width={['100%', '600px']}>
      <Text
        color={useColorModeValue('mono.4', 'whiteAlpha.800')}
        fontWeight="light"
        fontSize={['sm', 'md']}
        textAlign="center"
      >
        การเข้าสู่{APP_NAME + ' '}
        จำเป็นต้องมีการยืนยันตัวตนผู้ใช้ระบบด้วยบัญชี CUNET
        โปรดยอมรับนโยบายการจัดเก็บข้อมูลส่วนบุคคลดังกล่าวเพื่อเข้าสู่ระบบ
      </Text>
    </Card>
  )

  const policies = [
    '1. กวศ. จะขอเข้าถึงข้อมูลส่วนตัวของท่านผ่านระบบ Chula SSO ของจุฬาลงกรณ์มหาวิทยาลัย โดยมีการเข้าถึงข้อมูล ได้แก่ ชื่อ นามสกุล รหัสประจำตัวนิสิต และชั้นปีของท่าน รวมถึงคณะที่ท่านสังกัด',
    '2. กวศ. อาจมีการจัดเก็บข้อมูลส่วนตัวของท่านในข้อ 1 ไว้อย่างน้อย 30 (สามสิบ) วัน นับจากการเข้าใช้ระบบครั้งสุดท้าย',
    '3. การเข้าถึงข้อมูลส่วนตัวของท่านในข้อ 1 ใช้เพื่อเป็นข้อมูลประกอบในการตรวจสอบสิทธิในการเลือกตั้งตำแหน่งต่าง ๆ ที่กำหนดในการเลือกตั้งแต่ละครั้งเท่านั้น',
    '4. เมื่อท่านทำการใช้สิทธิเลือกตั้ง กวศ. จะทำการบันทึกการลงคะแนนของท่านไว้ในระบบ เพื่อไม่ให้เกิดการลงคะแนนเสียงซ้ำ แต่จะไม่สามารถตรวจสอบย้อนหลังได้ว่าท่านได้ลงคะแนนให้กับหมายเลขใด',
    '5. ข้อมูลผลคะแนนการเลือกตั้งจะถูกรวบรวมไว้อย่างน้อย 30 (สามสิบ) วัน นับจากการเลือกตั้งเสร็จสิ้น หรือแล้วแต่กรรมการการเลือกตั้งในครั้งนั้นจะเป็นผู้กำหนด',
    '6. กวศ. เป็นผู้ถือครองสิทธิในข้อมูลที่อยู่ในระบบของ กวศ. ซึ่งรวมไปถึง (แต่ไม่จำกัดเพียง) ข้อมูลผลคะแนนการเลือกตั้ง และรายชื่อผู้มาใช้สิทธิเลือกตั้ง โดย กวศ. จะเปิดเผยข้อมูลผลคะแนนการเลือกตั้ง และรายชื่อผู้มีสิทธิเลือกตั้ง แก่คณะกรรมการดำเนินการเลือกตั้งที่ได้รับมอบหมายให้รับผิดชอบในการอำนวยการเลือกตั้งในแต่ละครั้ง',
    '7. กวศ. ยึดถือว่า การยืนยันตัวตนด้วยรหัสประจำตัวนิสิต และรหัสผ่านระบบ Chula SSO ของท่าน ถือได้ว่าเป็นการยืนยันตัวตนที่เกิดจากตัวท่านเอง โดย กวศ. จะถือว่า การลงคะแนน หรือการกระทำอื่นใดในระบบภายหลังจากการยืนยันตัวตน เกิดขึ้นจากการกระทำด้วยตัวท่านเองโดยสมบูรณ์',
    '8. กวศ. อาจจัดเก็บข้อมูลการใช้งานผ่านระบบคอมพิวเตอร์ หรืออุปกรณ์เคลื่อนที่ที่ท่านใช้งานเว็บไซต์ เช่น หมายเลข IP ชนิดของบราวเซอร์ อุปกรณ์ที่ท่านเข้าถึงระบบของ กวศ. คุกกี้ เป็นต้น ทั้งนี้เพื่อความถูกต้องของข้อมูลของท่านในระบบของ กวศ.',
    '9. กวศ. จะพยายามอย่างยิ่งในการออกแบบระบบให้มีความปลอดภัยสูงที่สุด เพื่อไม่ให้ข้อมูลส่วนตัวของท่านที่อยู่ในระบบของ กวศ. เผยแพร่ออกไปสู่สาธารณชนโดยไม่ได้รับอนุญาตจากเจ้าของข้อมูล',
  ]

  const privacyPolicy = (
    <Card width={['100%', '600px', '600px']}>
      <Header textAlign="center">นโยบายการจัดเก็บข้อมูลส่วนบุคคล</Header>
      <Divider my="8px" />
      <Content
        overflowY="scroll"
        height="350px"
        fontSize={['14px', '14px', '16px']}
        style={{
          textIndent: '2rem ',
        }}
      >
        กรรมการนิสิตคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย (ในที่นี้จะใช้แทนว่า
        “กวศ.”) ในนามของเจ้าของระบบ ผู้จัดทำและดูแลระบบการเลือกตั้ง
        จำเป็นต้องใช้ข้อมูลของท่านเพื่อใช้ประกอบใน{`${branding.electionName} `}
        รวมถึงตำแหน่งต่าง ๆ ที่เกี่ยวข้อง
        โดยมีนโยบายการจัดเก็บข้อมูลส่วนบุคคลของท่านดังต่อไปนี้
        {policies.map((policy, index) => (
          <Text pt="16px" key={index}>
            {policy}
          </Text>
        ))}
      </Content>
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
        ข้าพเจ้ายอมรับนโยบายการจัดเก็บข้อมูลส่วนบุคคล
      </Text>
    </Checkbox>
  )

  const redirect = useRedirectPath('')
  const redirectURL = `${SSO_URL}?r=${APP_HOST}/callback?r=${redirect}`

  const loginButton = (
    <PrimaryButton
      as="a"
      isDisabled={!checked}
      href={checked ? redirectURL : undefined}
      size="md"
      variant="solid"
      fontSize={['lg', 'xl']}
      fontWeight="regular"
    >
      เข้าสู่ระบบผ่าน Chula SSO
    </PrimaryButton>
  )

  return (
    <Flex flexDirection="column" alignItems="center">
      {ssoBar}
      <Container>
        <Stack
          spacing={['20px', '28px']}
          alignItems="center"
          marginY={['18px', '20px']}
        >
          {textCard}
          {privacyPolicy}
          {tosCheckBox}
          {loginButton}
        </Stack>
      </Container>
    </Flex>
  )
}

export default Login
