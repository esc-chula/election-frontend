import React, { useEffect, useRef } from 'react'
import { Box, Text } from '@chakra-ui/layout'
import { useCallback } from 'react'
import { Position } from 'types/election'
import { useIntaniaRed } from 'util/hooks'
import { useColorModeValue } from '@chakra-ui/color-mode'
import styled from '@emotion/styled'
import { CheckIcon } from '@chakra-ui/icons'

interface IProps {
  index: number
  setPositionIndex: (positionIndex: number) => void
  position: Position
  isDone: boolean
  isActive: boolean
}

const Layout = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: none;
  align-items: center;
  padding: 0 10px;
`

const Circle = styled(Box)`
  display: flex;
  height: 30px;
  width: 30px;
  margin-top: 16px;
  margin-bottom: 8px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
`

export function PositionButton({
  index,
  setPositionIndex,
  position,
  isDone,
  isActive,
}: IProps) {
  const handleClick = useCallback(() => {
    setPositionIndex(index)
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [index])
  const intaniaRed = useIntaniaRed()
  const inactiveColor = useColorModeValue('mono.2', 'gray.500')
  const backgroundColor = useColorModeValue('#fcfcfc', 'gray.800')
  const color = isActive ? intaniaRed : isDone ? 'green.500' : inactiveColor
  const elementRef = useRef(null)
  useEffect(() => {
    if (isActive) {
      const element = elementRef.current as HTMLElement
      const parent = element.parentElement
      const midElement = element.offsetLeft + element.clientWidth / 2
      parent.scrollTo({
        top: 0,
        left: midElement - parent.clientWidth / 2,
        behavior: 'smooth',
      })
    }
  }, [isActive])
  return (
    <Layout
      ref={elementRef}
      cursor={!isActive ? 'pointer' : undefined}
      onClick={!isActive ? handleClick : undefined}
    >
      <Circle backgroundColor={color}>
        {isActive || !isDone ? (
          <Text color={backgroundColor} fontWeight={500} fontSize={20}>
            {index + 1}
          </Text>
        ) : (
          <CheckIcon color={backgroundColor} />
        )}
      </Circle>
      <Text color={color} fontWeight={300}>
        {position.name}
      </Text>
    </Layout>
  )
}
