import React, { useMemo } from 'react'
import { useElectionContext } from 'providers/electionProvider'
import { Redirect } from 'react-router-dom'
import Container from './Container'
import Card from './Card'
import { Button, Divider, Flex, Text } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { useAuthContext } from 'providers/authProvider'

export default function RedirectFirstElection() {
  const { elections } = useElectionContext()
  const filtered = useMemo(
    () => elections.filter((election) => !election.voted),
    [elections],
  )
  const { logout } = useAuthContext()

  const noElections = elections.length === 0
  const noVotable = filtered.length === 0

  if (noVotable) {
    return (
      <Container>
        <Card mt="24px">
          <Flex flexDirection="column" alignItems="center">
            {noElections ? (
              <Text fontSize="20px">ไม่มีการเลือกตั้งในขณะนี้</Text>
            ) : (
              <>
                <Flex
                  backgroundColor="green.500"
                  boxSize="30px"
                  rounded="100%"
                  alignItems="center"
                  justifyContent="center"
                  my="8px"
                >
                  <CheckIcon color="white" />
                </Flex>
                <Text fontSize="20px">บันทึกการลงคะแนนสำเร็จ</Text>
                <Divider my="8px" />
                <Text fontWeight={300} textAlign="center">
                  ระบบได้ทำการบันทึกผลการลงคะแนน
                  <br />
                  {elections.map((election, idx) => (
                    <Text key={election.id} as="span" fontWeight={500}>
                      {idx ? ', ' : ''}
                      {election.name}
                    </Text>
                  ))}{' '}
                  เรียบร้อยแล้ว
                </Text>
              </>
            )}
          </Flex>
        </Card>
        <Button
          colorScheme="intaniaRed"
          mt="40px"
          onClick={logout}
          isFullWidth
          backgroundColor="intaniaRed.500"
          _hover={{ backgroundColor: 'intaniaRed.600' }}
        >
          ออกจากระบบ
        </Button>
      </Container>
    )
  }
  return <Redirect to={`/election/${filtered[0].name}`} />
}
