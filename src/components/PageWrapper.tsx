import React, { useState, useEffect } from 'react'
import { Flex } from '@chakra-ui/core'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}

interface Props {
  children: React.ReactNode
}

const PageWrapper = ({ children }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { height, width } = useWindowDimensions()

  return (
    <Flex
      justifyContent="space-between"
      minH={height + 'px'}
      // minH="100vh"
      flexDirection="column"
      pt="75px"
    >
      {children}
    </Flex>
  )
}

export default PageWrapper
