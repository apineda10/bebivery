import React,{useState,useEffect} from 'react'
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

const ModalIni = () => {
    const {onClose } = useDisclosure()
    const [open,setOpen] = useState(true)
    const closeModal = ()=>{
        onClose()
        setOpen(false) 
    }

    return (
    <>
    <Modal isOpen={open} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
        <ModalHeader>Atención</ModalHeader>
        <ModalBody>
            <p>Al ingresar a este sitio usted declara tener la edad legal necesaria para consumir bebidas alcohólicas en su país.</p>
        </ModalBody>
        <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={()=>{closeModal()}}>
            Aceptar
            </Button>
        </ModalFooter>
        </ModalContent>
    </Modal>
    </>
    )
} 

export default ModalIni

