import React, { useEffect } from 'react'
import { Prompt } from 'react-router'

interface IProps {
  message: string
  when: boolean
}

export function UnloadPrompt({ message, when }: IProps) {
  useEffect(() => {
    if (!when) return
    const listener = (event: BeforeUnloadEvent) => {
      event.returnValue = message
    }
    window.addEventListener('beforeunload', listener)
    return () => window.removeEventListener('beforeunload', listener)
  }, [when])
  return <Prompt message={message} when={when} />
}
