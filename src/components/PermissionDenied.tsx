import React from 'react'
import { Flex, Stack, Text } from '@chakra-ui/react'
import Card from './Card'
import Container from './Container'

const PermissionDenied = () => {
  return (
    <Container>
      <Stack mx="auto" maxW="470px" spacing="40px" direction="column">
        <Card mt="24px">
          <Flex flexDirection="column" alignItems="center">
            <Text fontSize="20px">คุณไม่มีสิทธิ์ในการเลือกตั้งในครั้งนี้</Text>
          </Flex>
        </Card>
      </Stack>
    </Container>
  )
}

export default PermissionDenied
