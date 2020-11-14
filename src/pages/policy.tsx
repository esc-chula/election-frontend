import {
  Checkbox,
  Divider,
  LightMode,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import Card from 'components/Card'
import Container from 'components/Container'
import PageProgress from 'components/PageProgress'
import React, { useState } from 'react'
import { ButtonLink } from 'components/ButtonLink'
import { ResponsiveStack } from 'components/ResponsiveStack'
import { withAuth } from 'providers/authProvider'
import { usePatchUser } from 'util/hooks'
import { Header } from 'components/Header'
import { Content } from 'components/Content'
import { PrimaryButton } from 'components/PrimaryButton'

const PolicyCard = () => {
  const [checked, setChecked] = useState(false)

  const [loading, onAcceptPolicy] = usePatchUser(
    'updatepolicy',
    { policyAccepted: true },
    '/rules',
  )

  const colorScheme = useColorModeValue('intaniaRed', 'intaniaRedSecondary')

  return (
    <Stack spacing="20px">
      <Card width={['100%', '335px', '500px']}>
        <Header textAlign="center">กฎและเงื่อนไขการใช้งาน</Header>
        <Divider my="8px" />
        <Content>
          เราอาจทำการเปลี่ยนแปลงข้อตกลงตามเหตุอันสมควร เป็นครั้งคราว เช่น
          การปรับปรุงฟังก์ชันหรือคุณลักษณะ
          ที่มีอยู่แล้วหรือเพิ่มฟังก์ชันหรือคุณลักษณะของบริการการนำความก้าวหน้าทางวิทยาศาสตร์และเทคโนโลยีมาปรับใช้
          และการปรับตั้งค่าทางเทคนิคอันมีเหตุสมควรแก่การ ให้บริการ
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
          ข้าพเจ้ายอมรับกฎและเงื่อนไขการใช้งาน
        </Checkbox>
      </LightMode>
      <Stack
        direction="row"
        alignSelf="flex-end"
        alignItems="center"
        spacing="16px"
      >
        <ButtonLink
          to="/profile"
          variant="link"
          colorScheme="intaniaRed"
          fontSize="md"
          fontWeight="regular"
        >
          ย้อนกลับ
        </ButtonLink>
        <PrimaryButton
          isDisabled={!checked}
          width="130px"
          fontSize="md"
          fontWeight="regular"
          onClick={onAcceptPolicy}
          isLoading={loading}
        >
          ขั้นตอนถัดไป
        </PrimaryButton>
      </Stack>
    </Stack>
  )
}

const PolicyPage = () => {
  return (
    <Container padding={['20px', '48px']}>
      <ResponsiveStack spacing={['20px', '0px']}>
        <PageProgress page="policy" />
        <PolicyCard />
      </ResponsiveStack>
    </Container>
  )
}

export default withAuth(PolicyPage)
