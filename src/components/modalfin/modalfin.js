import React from 'react'
import { Link } from "react-router-dom";
import './style.css';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useDisclosure,
    Button
  } from '@chakra-ui/react'

const ModalFin= ({id,open}) => {
    const { onClose } = useDisclosure()
    const finalRef = React.useRef(null)

    return (
    <>
      <Modal finalFocusRef={finalRef} isOpen={open} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Gracias por tu compra!</ModalHeader>
          <ModalBody>
            Tu numero de orden es: {id}
          </ModalBody>

          <ModalFooter>
            <Link to="/">
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Cerrar
            </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    )
} 

export default ModalFin

