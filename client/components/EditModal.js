'use client'

import {
  Button,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'

import { BiEdit } from "react-icons/bi";

const EditModal = ({title, content}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return <>
  <IconButton bgColor={'purple.300'} icon={<BiEdit/>} onClick={onOpen}/>

  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        {content}
      </ModalBody>

    </ModalContent>
  </Modal>
  </>
}

export default EditModal;