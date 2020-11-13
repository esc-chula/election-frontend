import { Divider, Stack, Text } from '@chakra-ui/react'
import Card from 'components/Card'
import Container from 'components/Container'
import PageProgress from 'components/PageProgress'
import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuthContext, withAuth } from 'providers/authProvider'
import { academicYear } from 'util/constants'
import { ButtonLink } from 'components/ButtonLink'
import { ResponsiveStack } from 'components/ResponsiveStack'

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
    <Stack direction="row" textAlign="start">
      <Text {...textStyles.header} width={['100px', '100px', '125px']}>
        {rowKey}
      </Text>
      <Text {...textStyles.normal}>{rowValue}</Text>
    </Stack>
  )
}

const ProfileCard = () => {
  const { authUser } = useAuthContext()
  const accepted = authUser.policyAccepted && authUser.ruleAccepted

  const year = academicYear - parseInt(authUser.username.substring(0, 2)) + 1

  return (
    <Stack spacing="20px">
      <Card width={['100%', '335px', '500px']}>
        <ProfileRow rowKey="ชื่อ - นามสกุล" rowValue={authUser.name_th} />
        <Divider my="8px" />
        <ProfileRow rowKey="ชั้นปี" rowValue={`${year}`} />
        <Divider my="8px" />
        <ProfileRow rowKey="รหัสนิสิต" rowValue={authUser.username} />
      </Card>
      <ButtonLink
        to={accepted ? '/election/' : '/policy'}
        alignSelf="flex-end"
        colorScheme="intaniaRed"
        bg="intaniaRed.600"
        size="md"
        width="130px"
        fontSize="md"
        fontWeight="regular"
      >
        ขั้นตอนถัดไป
      </ButtonLink>
    </Stack>
  )
}

const ProfilePage = () => {
  return (
    <Container padding={['20px', '48px']}>
      <ResponsiveStack spacing={['20px', '0px']}>
        <PageProgress page="profile" />
        <ProfileCard />
      </ResponsiveStack>
    </Container>
  )
}

export default withAuth(ProfilePage)
