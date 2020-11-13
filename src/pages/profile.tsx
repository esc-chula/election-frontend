import { Button, Divider, Stack, Text } from '@chakra-ui/core'
import Card from 'components/Card'
import Container from 'components/Container'
import PageProgress from 'components/PageProgress'
import { useWindowDimensions } from 'util/hooks'
import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuthContext, withAuth } from 'providers/authProvider'
import { academicYear } from 'util/constants'

const textStyles = {
  header: {
    fontSize: ['md', 'md', 'lg'],
    fontWeight: 'regular',
    color: 'mono.6',
  },
  normal: {
    fontSize: ['md', 'md', 'lg'],
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
      <Text {...textStyles.header} width={['100px', '100px', '125px']}>
        {rowKey}
      </Text>
      <Text {...textStyles.normal}>{rowValue}</Text>
    </Stack>
  )
}

const ProfileCard = () => {
  const { width } = useWindowDimensions()
  const history = useHistory()
  const { authUser } = useAuthContext()

  const nextPage = useCallback(() => {
    history.push('/policy')
  }, [history])

  const year = academicYear - parseInt(authUser.username.substring(0, 2)) + 1

  return (
    <Stack spacing="20px">
      <Card width={['335px', '335px', '500px']} maxWidth={`${width - 40}px`}>
        <ProfileRow rowKey="ชื่อ - นามสกุล" rowValue="สมชาย จงเจริญ" />
        <Divider />
        <ProfileRow rowKey="ชั้นปี" rowValue={`${year}`} />
        <Divider />
        <ProfileRow rowKey="รหัสนิสิต" rowValue={authUser.username} />
      </Card>
      <Button
        alignSelf="flex-end"
        variantColor="intaniaRed"
        bg="intaniaRed.600"
        size="md"
        width="130px"
        fontSize="md"
        fontWeight="regular"
        onClick={nextPage}
      >
        ขั้นตอนถัดไป
      </Button>
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

export default withAuth(ProfilePage)
