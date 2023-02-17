import React from 'react'
import { Flex, Stack, Text } from '@chakra-ui/react'
import Card from './Card'
import Container from './Container'

const PermissionAccept = () => {
  return (
    <Container>
      <Stack mx="auto" maxW="470px" spacing="40px" direction="column">
        <Card mt="24px">
          <Flex flexDirection="column" alignItems="center">
            <Text fontSize="20px">
              คุณมีสิทธิ์ในการเลือกตั้งในการเลือกตั้งกรรมการนิสิตคณะวิศวกรรมศาสตร์
              จุฬาลงกรณ์มหาวิทยาลัย ประจำปีการศึกษา 2566
            </Text>
          </Flex>
        </Card>
      </Stack>
    </Container>
  )
}

export default PermissionAccept
