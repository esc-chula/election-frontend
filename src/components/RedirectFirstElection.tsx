import React, { useMemo } from 'react'
import { useElectionContext } from 'providers/electionProvider'
import { Redirect } from 'react-router-dom'
import Container from './Container'
import Card from './Card'
import {
  Divider,
  Flex,
  Text,
  Icon,
  Stack,
  useColorModeValue,
  Image,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { useAuthContext } from 'providers/authProvider'
import { ReactComponent as FacebookLogo } from '../images/facebook.svg'
import { ReactComponent as InstagramLogo } from '../images/instagram.svg'
import { PrimaryButton } from './PrimaryButton'

export default function RedirectFirstElection() {
  const { elections } = useElectionContext()
  const filtered = useMemo(
    () => elections.filter((election) => !election.voted),
    [elections],
  )
  const { logout } = useAuthContext()

  const noElections = elections.length === 0
  const noVotable = filtered.length === 0
  const green = useColorModeValue('green.500', 'green.200')
  const checkColor = useColorModeValue('white', 'gray.800')

  if (noVotable) {
    return (
      <Container>
        <Stack mx="auto" maxW="470px" spacing="40px" direction="column">
          <Card mt="24px">
            <Flex flexDirection="column" alignItems="center">
              {noElections ? (
                <Text fontSize="20px">ไม่มีการเลือกตั้งในขณะนี้</Text>
              ) : (
                <>
                  <Flex
                    backgroundColor={green}
                    boxSize="30px"
                    rounded="100%"
                    alignItems="center"
                    justifyContent="center"
                    my="8px"
                  >
                    <CheckIcon color={checkColor} />
                  </Flex>
                  <Text fontSize="20px">บันทึกการลงคะแนนสำเร็จ</Text>
                  <Divider my="8px" />
                  <Text fontWeight={300} textAlign="center">
                    ระบบได้ทำการบันทึกการลงคะแนน
                    <br />
                    {elections.map((election, idx) => (
                      <Text key={election.id} as="span" fontWeight={500}>
                        {idx ? ', ' : ''}
                        {election.name}
                      </Text>
                    ))}{' '}
                    เรียบร้อยแล้ว
                  </Text>
                  <Text mt="20px" fontWeight={300} textAlign="center">
                    สามารถติดตามผลการเลือกตั้งได้ทาง
                  </Text>
                  <Flex alignItems="flex-start" flexDirection="column">
                    <a
                      href="https://facebook.com/escchula"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Text fontWeight={400} textAlign="center">
                        <Icon
                          as={FacebookLogo}
                          fontSize="16px"
                          color="#4267B2"
                          mr="10px"
                          transform="translateY(-2px)"
                        />
                        กรรมการนิสิตคณะวิศวกรรมศาสตร์ กวศ.
                      </Text>
                    </a>
                    <a
                      href="https://instagram.com/escchula"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Text fontWeight={400} textAlign="center">
                        <Icon
                          as={InstagramLogo}
                          fontSize="16px"
                          color="#4267B2"
                          mr="10px"
                          transform="translateY(-2px)"
                        />
                        @escchula
                      </Text>
                    </a>
                  </Flex>
                  <Text mt="20px" fontWeight={300} textAlign="center">
                    และเว็บไซต์ของกวศ.{' '}
                    <a
                      href="https://esc.eng.chula.ac.th"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        textDecoration: 'underline',
                        fontWeight: 400,
                      }}
                    >
                      https://esc.eng.chula.ac.th
                    </a>
                  </Text>
                </>
              )}
            </Flex>
          </Card>
          <PrimaryButton
            mt="40px"
            maxW="470px"
            mx="auto"
            onClick={logout}
            isFullWidth
          >
            ออกจากระบบ
          </PrimaryButton>
        </Stack>
      </Container>
    )
  }
  return <Redirect to={`/election/${filtered[0].name}`} />
}
