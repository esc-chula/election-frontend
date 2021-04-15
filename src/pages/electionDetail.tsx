import React, { Dispatch, SetStateAction, useCallback, useState } from 'react'
import Container from 'components/Container'
import { useElectionContext } from 'providers/electionProvider'
import { Redirect, useHistory } from 'react-router-dom'
import NotFound from './404'
import {
  Box,
  Button,
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import CandidateList from 'components/CandidateList'
import { Election, Position } from 'types/election'
import { useHttpContext } from 'providers/httpProvider'
import { SubmitVoteDTO } from 'types/dto'
import { CheckIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { PrimaryButton } from 'components/PrimaryButton'
import { AiFillExclamationCircle } from 'react-icons/ai'
import { PositionSelection } from 'components/PositionSelection'
import Card from 'components/Card'
import { useIntaniaRed } from 'util/hooks'
import { PositionBar } from 'components/PositionBar'
import { UnloadPrompt } from 'components/UnloadPrompt'

export type SelectedMap = Record<number, number>

export default function ElectionDetail({ election }: { election: Election }) {
  const { setVoted } = useElectionContext()
  const [selected, setSelected] = useState<SelectedMap>({})
  const [positionIndex, setPositionIndex] = useState(0)
  const somePositionsSelected = election.positions.some(
    (position) => selected[position.id] !== undefined,
  )
  const allPositionsSelected = election.positions.every(
    (position) => selected[position.id] !== undefined,
  )
  const multiplePosition = election.positions.length !== 1
  const currentPosition = election.positions[positionIndex]
  const selectedCandidates: PositionSelection[] = election.positions.map(
    (position, positionIndex) => ({
      position,
      positionIndex,
      selectedValue: selected[position.id],
      selectedCandidate: position.candidates.find(
        (candidate) => candidate.id === selected[position.id],
      ),
    }),
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
        ballots: election.positions.map((position) => ({
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
    } catch (error) {
      console.log(error)
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

  const goNextPosition = useCallback(() => {
    setPositionIndex((index) => index + 1)
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [])

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
        <ModalHeader>
          <Flex direction="column" alignItems="center">
            <Icon
              as={AiFillExclamationCircle}
              color="yellow.500"
              boxSize="40px"
              mb="8px"
            />
            โปรดตรวจสอบการลงคะแนน
          </Flex>
        </ModalHeader>
        <ModalBody pt={0}>
          <hr />
          <Text py="16px" fontWeight={500} fontSize="18px" textAlign="center">
            {election.name}
          </Text>
          <hr />
          {selectedCandidates.map((selection) => (
            <PositionSelection
              key={selection.position.id}
              multiplePosition={multiplePosition}
              selection={selection}
            />
          ))}
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
      <PositionBar
        positions={election.positions}
        selected={selected}
        positionIndex={positionIndex}
        setPositionIndex={setPositionIndex}
      />
      <Card
        mt="16px"
        fontWeight="300"
        textAlign="center"
        fontSize={['sm', 'md', 'lg']}
      >
        ทำเครื่องหมาย X ลงในช่อง
        <Box
          display="inline-block"
          mx="8px"
          borderWidth="2px"
          borderColor={intaniaRed}
          boxSize="20px"
          rounded="sm"
          transform="translateY(4px)"
        />
        <Box display={['none', 'none']} />
        {currentPosition.candidates[0].members.length === 1 && 'ของเบอร์'}
        ที่คุณต้องการเลือก
        {multiplePosition && (
          <>
            <br />
            หากต้องการกลับไปแก้ไขตำแหน่งก่อนหน้า ให้กดที่ตำแหน่งในแถวด้านบน
          </>
        )}
      </Card>
      <PositionAdapter
        position={currentPosition}
        selected={selected}
        setSelected={setSelected}
        disabled={loading}
      />
      {positionIndex === election.positions.length - 1 ? (
        <Button
          width="100%"
          mt="8px"
          mb="20px"
          colorScheme="green"
          fontWeight={400}
          isDisabled={!allPositionsSelected || loading}
          onClick={onOpen}
        >
          ลงคะแนนเสียง <CheckIcon ml={2} />
        </Button>
      ) : (
        <PrimaryButton
          width="100%"
          mt="8px"
          mb="20px"
          fontWeight={400}
          isDisabled={!selected[currentPosition.id] || loading}
          onClick={goNextPosition}
        >
          เลือกตำแหน่งถัดไป <ChevronRightIcon ml={2} />
        </PrimaryButton>
      )}
      {modal}
      <UnloadPrompt
        when={somePositionsSelected && !election.voted}
        message="ยังไม่ได้บันทึกผลการเลือกตั้ง ต้องการออกจากหน้านี้หรือไม่?"
      />
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
