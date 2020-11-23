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

const RulesCard = () => {
  const [checked, setChecked] = useState(false)

  const [loading, onAcceptRules] = usePatchUser(
    'updaterule',
    { ruleAccepted: true },
    '/election',
  )

  const colorScheme = useColorModeValue('intaniaRed', 'intaniaRedSecondary')

  return (
    <Stack spacing="20px">
      <Card width={['100%', '335px', '500px']}>
        <Header textAlign="center">กฎและกติกาการเลือกตั้ง</Header>
        <Divider my="8px" />
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
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
          ข้าพเจ้ายอมรับกฎและกติกาการเลือกตั้ง
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
          onClick={onAcceptRules}
          isLoading={loading}
        >
          ขั้นตอนถัดไป
        </PrimaryButton>
      </Stack>
    </Stack>
  )
}

const RulesPage = () => {
  return (
    <Container padding={['20px', '48px']}>
      <ResponsiveStack spacing={['20px', '0px']}>
        <PageProgress page="rules" />
        <RulesCard />
      </ResponsiveStack>
    </Container>
  )
}

export default withAuth(RulesPage)
