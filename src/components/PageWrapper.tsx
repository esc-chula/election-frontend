import React, { useState, useEffect } from 'react'
import { Flex } from '@chakra-ui/core'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

function useWindowDimensions() {
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

const PageWrapper = (props: any) => {
  const { height, width } = useWindowDimensions()

  return (
    <Flex
      justifyContent="space-between"
      minH={height + 'px'}
      // minH="100vh"
      flexDirection="column"
      pt="75px"
    >
      {props.children}
    </Flex>
  )
}

export default PageWrapper
