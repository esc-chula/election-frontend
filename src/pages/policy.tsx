import {
  Checkbox,
  Divider,
  Flex,
  LightMode,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import Card from 'components/Card'
import Container from 'components/Container'
import React, { useState } from 'react'
import { ButtonLink } from 'components/ButtonLink'
import { withAuth } from 'providers/authProvider'
import { useRedirectPath } from 'util/hooks'
import { Header } from 'components/Header'
import { Content } from 'components/Content'
import { PrimaryButton } from 'components/PrimaryButton'
import { APP_HOST, SSO_URL } from 'config/env'

const PolicyCard = () => {
  const [checked, setChecked] = useState(false)

  const colorScheme = useColorModeValue('intaniaRed', 'intaniaRedSecondary')

  const texts = [
    '1.	กวศ. จะขอเข้าถึงข้อมูลส่วนตัวของท่านผ่านระบบ CU NET ของจุฬาลงกรณ์มหาวิทยาลัย โดยมีการเข้าถึงข้อมูล ได้แก่ ชื่อ นามสกุล รหัสประจำตัวนิสิต และชั้นปีของท่าน',
    '2.	กวศ. อาจมีการจัดเก็บข้อมูลส่วนตัวของท่านในข้อ 1 ไว้อย่างน้อย 30 (สามสิบ) วัน นับจากการเข้าใช้ระบบครั้งสุดท้าย',
    '3.	กวศ. อาจทำการขอรหัสประจำตัวนิสิต และรหัสผ่านระบบ CU NET จากท่าน เพื่อใช้เข้าสู่ระบบ เพื่อทำการยืนยันตัวตน และเพื่อทำการเข้าถึงข้อมูลส่วนตัวของท่านในข้อ 1 โดยจะไม่มีการจัดเก็บรหัสผ่านระบบ CU NET ของท่านไว้ในระบบของ กวศ.',
    '4.	การเข้าถึงข้อมูลส่วนตัวของท่านในข้อ 1 ใช้เพื่อเป็นข้อมูลประกอบในการตรวจสอบสิทธิในการเลือกตั้งตำแหน่งต่าง ๆ ที่กำหนดในการเลือกตั้งแต่ละครั้งเท่านั้น',
    '5.	เมื่อท่านทำการใช้สิทธิเลือกตั้ง กวศ. จะทำการบันทึกการลงคะแนนของท่านไว้ในระบบ เพื่อไม่ให้เกิดการลงคะแนนเสียงซ้ำ ทั้งนี้ จะไม่สามารถตรวจสอบย้อนหลังได้ว่าท่านได้ลงคะแนนให้กับหมายเลขใด',
    '6.	ข้อมูลผลคะแนนการเลือกตั้งจะถูกรวบรวมไว้อย่างน้อย 30 (สามสิบ) วัน นับจากการเลือกตั้งเสร็จสิ้น หรือแล้วแต่กรรมการการเลือกตั้งในครั้งนั้นจะเป็นผู้กำหนด',
    '7.	กวศ. ยึดถือว่า การยืนยันตัวตนด้วยรหัสประจำตัวนิสิต และรหัสผ่านระบบ CU NET ของท่าน ถือได้ว่าเป็นยืนยันตัวตนที่เกิดจากตัวท่านเอง โดย กวศ. จะถือว่า การลงคะแนน หรือการกระทำอื่นใดในระบบภายหลังจากการยืนยันตัวตน เกิดขึ้นจากการกระทำด้วยตัวท่านเองโดยสมบูรณ์',
    '8.	กวศ. อาจจัดเก็บข้อมูลการใช้งานผ่านระบบคอมพิวเตอร์ของท่าน เช่น หมายเลข IP ชนิดของบราวเซอร์ อุปกรณ์ที่ท่านเข้าถึงระบบของ กวศ. คุกกี้ เป็นต้น ทั้งนี้เพื่อความถูกต้องของข้อมูลของท่านในระบบของ กวศ.',
    '9.	กวศ. จะพยายามอย่างยิ่งในการออกแบบระบบให้มีความปลอดภัยสูงที่สุด เพื่อไม่ให้ข้อมูลส่วนตัวของท่านที่อยู่ในระบบของ กวศ. เผยแพร่ออกไปสู่สาธารณชนโดยไม่ได้รับอนุญาตจากเจ้าของข้อมูล',
  ]

  const redirect = useRedirectPath('')
  const redirectURL = `${SSO_URL}?r=${APP_HOST}/callback?r=${redirect}`

  return (
    <Stack spacing="20px">
      <Card width={['100%', '335px', '500px']}>
        <Header textAlign="center">นโยบายการจัดเก็บข้อมูลส่วนบุคคล</Header>
        <Divider my="8px" />
        <Content>
          กรรมการนิสิตคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
          (ในที่นี้จะใช้แทนว่า “กวศ.”)
          จำเป็นต้องใช้ข้อมูลของท่านเพื่อใช้ประกอบในการเลือกตั้งกรรมการนิสิตคณะวิศวกรรมศาสตร์
          รวมถึงตำแหน่งต่าง ๆ ที่เกี่ยวข้อง
          โดยมีนโยบายการจัดเก็บข้อมูลส่วนบุคคลของท่านดังต่อไปนี้
          {texts.map((text, index) => (
            <Text pt="16px" key={index}>
              {text}
            </Text>
          ))}
        </Content>
      </Card>
      <LightMode>
        <Checkbox
          colorScheme={colorScheme}
          onChange={(e) => setChecked(e.target.checked)}
          alignSelf="flex-start"
          fontSize="md"
          fontWeight="light"
        >
          ข้าพเจ้ายอมรับนโยบายการจัดเก็บข้อมูลส่วนบุคคล
        </Checkbox>
      </LightMode>
      <Stack
        direction="row"
        alignSelf="flex-end"
        alignItems="center"
        spacing="16px"
      >
        <ButtonLink
          to="/login"
          variant="link"
          colorScheme="intaniaRed"
          fontSize="md"
          fontWeight="regular"
        >
          ย้อนกลับ
        </ButtonLink>
        <PrimaryButton
          as="a"
          isDisabled={!checked}
          href={redirectURL}
          width="110px"
          fontSize={['lg', 'lg']}
          fontWeight="regular"
        >
          เข้าสู่ระบบ
        </PrimaryButton>
      </Stack>
    </Stack>
  )
}

const PolicyPage = () => {
  return (
    <Container padding={['20px', '48px']}>
      <Flex direction="column" alignItems="center">
        <PolicyCard />
      </Flex>
    </Container>
  )
}

// export default withAuth(PolicyPage)
export default PolicyPage
