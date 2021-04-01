import React from 'react'
import { Box } from '@chakra-ui/layout'
import { Position } from 'types/election'
import styled from '@emotion/styled'
import { SelectedMap } from 'pages/electionDetail'
import { PositionButton } from './PositionButton'

interface IProps {
  positions: Position[]
  selected: SelectedMap
  positionIndex: number
  setPositionIndex: (positionIndex: number) => void
}

const NegativeMarginBox = styled(Box)`
  margin: 0 -10px;

  @media screen and (min-width: 350px) {
    margin: 0 -24px;
  }

  margin-top: 16px;
`

const Scroller = styled.div`
  display: flex;
  width: 100%;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`

const Spacer = styled.div`
  flex: 1;
`

const ScrollSpacer = styled.div`
  flex: none;

  @media screen and (min-width: 350px) {
    width: 14px;
  }
`

export function PositionBar({
  positions,
  selected,
  positionIndex,
  setPositionIndex,
}: IProps) {
  if (positions.length === 1) {
    return null
  }
  return (
    <NegativeMarginBox mt="16px">
      <Scroller>
        <Spacer />
        <ScrollSpacer />
        {positions.map((position, index) => (
          <PositionButton
            key={position.id}
            index={index}
            position={position}
            isDone={!!selected[position.id]}
            isActive={positionIndex === index}
            setPositionIndex={setPositionIndex}
          />
        ))}
        <ScrollSpacer />
        <Spacer />
      </Scroller>
    </NegativeMarginBox>
  )
}
