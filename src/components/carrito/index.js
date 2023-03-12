import React,{useContext} from "react";
import { Link } from "react-router-dom";
import './style.css';
import { CartContext } from "../../context/carritoContext";
import ItemListCart from "../itemListCart/itemListCart"; 
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'




const Carrito = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()    
    const [cart,setCart] = useContext(CartContext);
    const cantTotal= cart.reduce((cant, item)=>{
        return cant+item.cant;
    },0)

    return (
        <li className="nav-item">
            <button ref={btnRef}  onClick={onOpen} id="btnCarro" className="btn bi-cart-fill" ></button> 
            {cantTotal > 0 && <p id="btnCount" className="btnCount" href="#">{cantTotal>99?"+99":cantTotal}</p>}           
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size="lg"
            >
                <DrawerOverlay />
                <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Carrito de compra</DrawerHeader>
                <DrawerBody>
                    {cantTotal>0?
                            <>
                                <ItemListCart endshop={false}/>
                            </>
                    :"Ups!,el carrito esta vacío"} 
                </DrawerBody>
                <DrawerFooter>
                    <Link to={"checkshop"}><Button colorScheme='blue' isDisabled={cantTotal===0} onClick={onClose}>Finalizar compra</Button></Link>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>            

        </li>
    )
}

export default Carrito