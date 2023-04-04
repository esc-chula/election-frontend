import {
  Box,
  Divider,
  LightMode,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import Card from 'components/Card'
import Container from 'components/Container'
import PageProgress from 'components/PageProgress'
import React from 'react'
import { ButtonLink } from 'components/ButtonLink'
import { ResponsiveStack } from 'components/ResponsiveStack'
import { withAuth } from 'providers/authProvider'
import { Header } from 'components/Header'
import { Content } from 'components/Content'
import { branding } from 'config/branding'
import { useHistory } from 'react-router'

const RulesCard = () => {
  const colorScheme = useColorModeValue('intaniaRed', 'intaniaRedSecondary')
  return (
    <Stack spacing="20px" text>
      <Card width={['100%', '450px', '500px']}>
        <Header textAlign="center">ระเบียบการเลือกตั้ง</Header>
        <Divider my="8px" />
        <Content
          overflowY="scroll"
          height="450px"
          style={{
            textIndent: '2rem',
          }}
        >
          {branding.rules.length !== 0 &&
            branding.rules.map((article, indexHeader) => (
              <Box key={indexHeader}>
                {article.header && (
                  <Text
                    color={useColorModeValue('black', 'white')}
                    fontWeight="regular"
                    style={{
                      textIndent: '0',
                    }}
                    mt="1rem"
                  >
                    {article.header}
                  </Text>
                )}
                {article.contents.map((content, indexContent) => (
                  <Content key={indexContent}>{content}</Content>
                ))}
              </Box>
            ))}
        </Content>
      </Card>
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
        <LightMode>
          <ButtonLink
            to="/election"
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
    </Stack>
  )
}

const RulesPage = () => {
  const history = useHistory()
  const hasRules = branding.rules.length !== 0
  if (!hasRules) {
    history.replace('/election')
  }
  return (
    <Container paddingTop={['20px', '48px']}>
      <ResponsiveStack
        spacing={['20px', '0px']}
        justifyContent={['space-between', 'space-between', 'space-evenly']}
      >
        <PageProgress page="rules" />
        <RulesCard />
      </ResponsiveStack>
    </Container>
  )
}

export default withAuth(RulesPage)
