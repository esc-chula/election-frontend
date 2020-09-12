import { Box, Button, Checkbox, Divider, Stack, Text } from '@chakra-ui/core'
import Card from 'components/Card'
import Container from 'components/Container'
import PageProgress from 'components/PageProgress'
import { useWindowDimensions } from 'components/PageWrapper'
import React, { useCallback, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

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
  const { width } = useWindowDimensions()
  const [checked, setChecked] = useState(false)
  const history = useHistory()

  const nextPage = useCallback(() => {
    history.push('/dashboard')
  }, [history])

  const prevPage = useCallback(() => {
    history.push('/profile')
  }, [history])

  return (
    <Stack spacing="20px">
      <Card
        padding="12px"
        width={['335px', '335px', '500px']}
        maxWidth={`${width - 40}px`}
      >
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
        <Button
          variant="link"
          variantColor="intaniaRed"
          fontSize="md"
          fontWeight="regular"
          onClick={prevPage}
        >
          ย้อนกลับ
        </Button>
        <Button
          isDisabled={!checked}
          variantColor="intaniaRed"
          bg="intaniaRed.600"
          width="130px"
          fontSize="md"
          fontWeight="regular"
          onClick={nextPage}
        >
          ขั้นตอนถัดไป
        </Button>
      </Stack>
    </Stack>
  )
}

const PolicyPage = () => {
  const { width } = useWindowDimensions()
  return (
    <Container padding={['20px', '48px']}>
      <Stack
        direction={width >= 768 ? 'row' : 'column'}
        spacing={['20px', '80px']}
      >
        <PageProgress page="policy" />
        <PolicyCard />
      </Stack>
    </Container>
  )
}

export default PolicyPage
