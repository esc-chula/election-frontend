import React from 'react'
import Container from 'components/Container'
import Card from 'components/Card'
import { Text } from '@chakra-ui/react'

export default function NotFound() {
  return (
    <Container>
      <Card mt="24px">
        <Text fontSize="2xl" fontWeight={600} textAlign="center">
          404 Not Found
        </Text>
      </Card>
    </Container>
  )
}
