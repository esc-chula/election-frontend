import React from 'react'
import { Button, ButtonProps } from '@chakra-ui/react'
import { Link, LinkProps } from 'react-router-dom'

export function ButtonLink(props: ButtonProps & LinkProps) {
  const newProps = {
    ...props,
    to: props.isDisabled ? undefined : props.to,
  }
  return <Button as={Link} {...newProps} />
}
