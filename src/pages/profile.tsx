import { Button, Divider, Stack, Text } from '@chakra-ui/core'
import Card from 'components/Card'
import Container from 'components/Container'
import PageProgress from 'components/PageProgress'
import { useWindowDimensions } from 'components/PageWrapper'
import React from 'react'
import { Link } from 'react-router-dom'

const textStyles = {
  header: {
    fontSize: 'md',
    fontWeight: 'regular',
    color: 'mono.6',
  },
  normal: {
    fontSize: 'md',
    fontWeight: 'light',
    color: 'mono.4',
  },
}

interface RowProps {
  rowKey: string
  rowValue: string
}

const ProfileRow = ({ rowKey, rowValue }: RowProps) => {
  return (
    <Stack direction="row">
      <Text {...textStyles.header} width="100px">
        {rowKey}
      </Text>
      <Text {...textStyles.normal}>{rowValue}</Text>
    </Stack>
  )
}

const ProfileCard = () => {
  const { width } = useWindowDimensions()
  return (
    <Stack spacing="20px" alignItems="flex-end">
      <Card padding="12px" width="335px" maxWidth={`${width - 40}px`}>
        <ProfileRow rowKey="ชื่อ - นามสกุล" rowValue="สมชาย จงเจริญ" />
        <Divider />
        <ProfileRow rowKey="ชั้นปี" rowValue="2" />
        <Divider />
        <ProfileRow rowKey="รหัสนิสิต" rowValue="6232008821" />
      </Card>
      <Link to="/policy">
        <Button
          variantColor="intaniaRed"
          bg="intaniaRed.600"
          size="md"
          width="130px"
          fontFamily="Kanit"
          fontSize="md"
          fontWeight="regular"
        >
          ขั้นตอนถัดไป
        </Button>
      </Link>
    </Stack>
  )
}

const ProfilePage = () => {
  const { width } = useWindowDimensions()
  return (
    <Container padding={['20px', '48px']}>
      <Stack
        direction={width >= 768 ? 'row' : 'column'}
        spacing={['20px', '80px']}
      >
        <PageProgress page="profile" />
        <ProfileCard />
      </Stack>
    </Container>
  )
}

export default ProfilePage
