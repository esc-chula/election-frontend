import { Checkbox, Divider, Stack, Text } from '@chakra-ui/core'
import Card from 'components/Card'
import Container from 'components/Container'
import PageProgress from 'components/PageProgress'
import React, { useState } from 'react'
import { ButtonLink } from 'components/ButtonLink'
import { ResponsiveStack } from 'components/ResponsiveStack'

const textStyles = {
  header: {
    fontSize: ['xl', '2xl'],
    fontWeight: 'regular',
    color: 'mono.6',
  },
  normal: {
    fontSize: ['sm', 'md'],
    fontWeight: 'light',
    color: 'mono.4',
  },
}

const PolicyCard = () => {
  const [checked, setChecked] = useState(false)

  return (
    <Stack spacing="20px">
      <Card width={['335px', '335px', '500px']}>
        <Text {...textStyles.header}>กฎและเงื่อนไขการใช้งาน</Text>
        <Divider />
        <Text {...textStyles.normal}>
          เราอาจทำการเปลี่ยนแปลงข้อตกลงตามเหตุอันสมควร เป็นครั้งคราว เช่น
          การปรับปรุงฟังก์ชันหรือคุณลักษณะ
          ที่มีอยู่แล้วหรือเพิ่มฟังก์ชันหรือคุณลักษณะของบริการการนำความก้าวหน้าทางวิทยาศาสตร์และเทคโนโลยีมาปรับใช้
          และการปรับตั้งค่าทางเทคนิคอันมีเหตุสมควรแก่การ ให้บริการ
        </Text>
      </Card>
      <Checkbox
        variantColor="intaniaRed"
        onChange={(e) => setChecked(e.target.checked)}
        alignSelf="flex-start"
        fontSize="md"
        fontWeight="light"
      >
        ข้าพเจ้ายอมรับกฎและเงื่อนไขการใช้งาน
      </Checkbox>
      <Stack
        direction="row"
        alignSelf="flex-end"
        alignItems="center"
        spacing="16px"
      >
        <ButtonLink
          to="/profile"
          variant="link"
          variantColor="intaniaRed"
          fontSize="md"
          fontWeight="regular"
        >
          ย้อนกลับ
        </ButtonLink>
        <ButtonLink
          to="/rules"
          isDisabled={!checked}
          variantColor="intaniaRed"
          bg="intaniaRed.600"
          width="130px"
          fontSize="md"
          fontWeight="regular"
        >
          ขั้นตอนถัดไป
        </ButtonLink>
      </Stack>
    </Stack>
  )
}

const PolicyPage = () => {
  return (
    <Container padding={['20px', '48px']}>
      <ResponsiveStack
        mobileDirection="column"
        desktopDirection="row"
        spacing={['20px', '80px']}
      >
        <PageProgress page="policy" />
        <PolicyCard />
      </ResponsiveStack>
    </Container>
  )
}

export default PolicyPage
