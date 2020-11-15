import { useColorMode, IconButton, useMediaQuery } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import React, { useCallback, useEffect, useState } from 'react'
import { BsSun, BsMoon } from 'react-icons/bs'
import { useLocalStorageState } from 'util/hooks'

export function DarkModeController() {
  const { colorMode, setColorMode } = useColorMode()
  const [transitioning, setTransitioning] = useState(false)
  const [transitionCount, setTransitionCount] = useState(0)
  const [systemIsDark] = useMediaQuery('(prefers-color-scheme: dark)')
  const [targetColorMode, setTargetColorMode] = useLocalStorageState(
    'colorMode',
  )

  const toggleColorMode = useCallback(() => {
    const systemColorMode = systemIsDark ? 'dark' : 'light'
    const target = colorMode === 'light' ? 'dark' : 'light'
    setTransitionCount((count) => count + 1)
    setTargetColorMode(target !== systemColorMode ? target : '')
  }, [systemIsDark, colorMode])

  useEffect(() => {
    setTransitioning(true)
    const timeout = setTimeout(() => setTransitioning(false), 300)
    return () => clearTimeout(timeout)
  }, [transitionCount])

  useEffect(() => {
    const isDark =
      (systemIsDark && targetColorMode !== 'light') ||
      targetColorMode === 'dark'
    setColorMode(isDark ? 'dark' : 'light')
    localStorage.removeItem('chakra-ui-color-mode')
  }, [setColorMode, systemIsDark, targetColorMode])

  return (
    <>
      <IconButton
        icon={colorMode === 'dark' ? <BsSun /> : <BsMoon />}
        isRound
        onClick={toggleColorMode}
        aria-label="dark mode"
      />
      {transitioning && (
        <Global
          styles={{
            'html, body, *': {
              transition: 'background-color 0.20s',
            },
          }}
        />
      )}
    </>
  )
}
