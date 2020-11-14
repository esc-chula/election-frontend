import React, { Dispatch, SetStateAction, useCallback, useState } from 'react'
import Container from 'components/Container'
import { useElectionContext } from 'providers/electionProvider'
import { Redirect, useHistory, useRouteMatch } from 'react-router-dom'
import NotFound from './404'
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import CandidateList from 'components/CandidateList'
import { Position } from 'types/election'
import { useHttpContext } from 'providers/httpProvider'
import { SubmitVoteDTO } from 'types/dto'
import { CheckIcon } from '@chakra-ui/icons'
import { useIntaniaRed } from 'util/hooks'
import { PrimaryButton } from 'components/PrimaryButton'

type SelectedMap = Record<number, number>

export default function ElectionDetail() {
  const { electionMap, setVoted } = useElectionContext()
  const match = useRouteMatch<{ electionName: string }>(
    '/election/:electionName',
  )
  const election = electionMap[match?.params.electionName || '']
  const [selected, setSelected] = useState<SelectedMap>({})
  const allPositionsSelected = election.positions.every(
    (position) => selected[position.id] !== undefined,
  )
  const firstPosition = election.positions[0]
  const selectedCandidate = firstPosition.candidates.find(
    (candidate) => candidate.id === selected[firstPosition.id],
  )
  const { isOpen: modalOpen, onOpen, onClose } = useDisclosure()
  const [loading, setLoading] = useState(false)

  const toast = useToast()
  const { push } = useHistory()
  const { client } = useHttpContext()
  const submitVote = useCallback(async () => {
    setLoading(true)
    try {
      const body: SubmitVoteDTO = {
        electionID: election.id,
        positions: election.positions.map((position) => ({
          positionID: position.id,
          candidateID: selected[position.id],
        })),
      }
      await client.post('/vote', body)
      setVoted(election.id)
      toast({
        title: 'ลงคะแนนสำเร็จ',
        status: 'success',
      })
      push('/election')
    } catch (error) {
      if (error.response?.status === 409) {
        toast({
          title: 'ไม่สามารถลงคะแนนได้',
          description: 'ท่านเคยลงคะแนนในการเลือกตั้งนี้ไปแล้ว',
          status: 'error',
        })
        onClose()
      } else {
        toast({
          title: 'การลงคะแนนไม่สำเร็จ',
          status: 'error',
        })
      }
    } finally {
      setLoading(false)
    }
  }, [client, selected, election, push, toast, onClose, setVoted])

  const intaniaRed = useIntaniaRed()
  const selectedCandidateColor = useColorModeValue('mono.4', 'whiteAlpha.800')

  if (!election) {
    return <NotFound />
  }

  if (election.voted) {
    return <Redirect to="/election" />
  }

  const modal = (
    <Modal isOpen={modalOpen} onClose={loading ? undefined : onClose}>
      <ModalOverlay />
      <ModalContent rounded="md">
        <ModalHeader>โปรดตรวจสอบการลงคะแนน</ModalHeader>
        <ModalBody pt={0}>
          <hr />
          <Text py="16px" fontWeight={500} fontSize="18px" textAlign="center">
            {election.name}
          </Text>
          <hr />
          {selectedCandidate ? (
            <Box mt="16px">
              <Text mt="16px" color={intaniaRed}>
                หมายเลข {selectedCandidate.candidateID}
              </Text>
              <Text
                color={selectedCandidateColor}
                fontWeight={300}
                fontSize="14px"
              >
                {selectedCandidate.name}
                <br />
                {selectedCandidate.department} ปี {selectedCandidate.year}
              </Text>
            </Box>
          ) : (
            <Text mt="16px" color={intaniaRed} textAlign="center">
              งดออกเสียง
            </Text>
          )}
          <Flex mt="20px" mb="16px" justifyContent="space-between">
            <Button
              fontWeight={400}
              variant="outline"
              onClick={onClose}
              isDisabled={loading}
            >
              กลับไปแก้ไข
            </Button>
            <PrimaryButton isLoading={loading} onClick={submitVote}>
              ยืนยันการลงคะแนน
            </PrimaryButton>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )

  return (
    <Container>
      <Text pt="16px" fontWeight="medium" fontSize={['xl', '2xl']}>
        {election.name}
      </Text>
      {election.positions.map((position) => (
        <PositionAdapter
          key={position.id}
          position={position}
          selected={selected}
          setSelected={setSelected}
          disabled={loading}
        />
      ))}
      <Button
        width="100%"
        mt="8px"
        mb="20px"
        colorScheme="green"
        fontWeight={400}
        isDisabled={!allPositionsSelected || loading}
        onClick={onOpen}
      >
        ลงคะแนนเสียง <CheckIcon ml="8px" />
      </Button>
      {modal}
    </Container>
  )
}

interface PositionAdapterProps {
  position: Position
  selected: SelectedMap
  setSelected: Dispatch<SetStateAction<SelectedMap>>
  disabled: boolean
}

function PositionAdapter({
  position,
  selected: selectedMap,
  setSelected: setSelectedMap,
  disabled,
}: PositionAdapterProps) {
  const positionId = position.id
  const selected = selectedMap[positionId]
  const setSelected = useCallback(
    (newSelected: number) => {
      setSelectedMap((oldMap: SelectedMap) => ({
        ...oldMap,
        [positionId]: newSelected,
      }))
    },
    [positionId, setSelectedMap],
  )
  return (
    <CandidateList
      position={position}
      selected={selected}
      setSelected={setSelected}
      disabled={disabled}
    />
  )
}
