import React, { ReactElement } from 'react'
import {
  Scale as ChakraScale,
  Modal,
  IScale,
  IModal,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/core'

const Scale: React.FC<IScale> = ChakraScale

type CustomModalProps = Omit<IModal, 'children'> & {
  children: ReactElement[]
}

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  children,
  ...props
}) => {
  return (
    <Scale in={isOpen}>
      {(styles: any) => (
        <Modal isOpen={true} {...props}>
          {children.map((child) => {
            if (child.type === ModalOverlay) {
              return React.cloneElement(child, {
                key: 'overlay',
                opacity: styles.opacity,
              })
            } else if (child.type === ModalContent) {
              return React.cloneElement(child, { key: 'content', ...styles })
            } else {
              throw new Error('unknown modal children type')
            }
          })}
        </Modal>
      )}
    </Scale>
  )
}

export { CustomModal }
