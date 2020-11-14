import React from 'react'
import {
  Divider,
  LightMode,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import Card from 'components/Card'
import Container from 'components/Container'
import PageProgress from 'components/PageProgress'
import { useAuthContext, withAuth } from 'providers/authProvider'
import { academicYear } from 'util/constants'
import { ButtonLink } from 'components/ButtonLink'
import { ResponsiveStack } from 'components/ResponsiveStack'

interface RowProps {
  rowKey: string
  rowValue: string
}

const ProfileRow = ({ rowKey, rowValue }: RowProps) => {
  return (
    <Stack direction="row" textAlign="start">
      <Text
        fontSize={['md', 'md', 'lg']}
        fontWeight="regular"
        color={useColorModeValue('mono.6', 'whiteAlpha.900')}
        width={['100px', '100px', '125px']}
      >
        {rowKey}
      </Text>
      <Text
        fontSize={['md', 'md', 'lg']}
        fontWeight="light"
        color={useColorModeValue('mono.4', 'whiteAlpha.700')}
      >
        {rowValue}
      </Text>
    </Stack>
  )
}

const ProfileCard = () => {
  const { authUser } = useAuthContext()
  const colorScheme = useColorModeValue('intaniaRed', 'intaniaRedSecondary')
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
      <LightMode>
        <ButtonLink
          to={accepted ? '/election/' : '/policy'}
          alignSelf="flex-end"
          colorScheme={colorScheme}
          size="md"
          width="130px"
          fontSize="md"
          fontWeight="regular"
        >
          ขั้นตอนถัดไป
        </ButtonLink>
      </LightMode>
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
