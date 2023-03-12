import React,{useContext} from "react";
import './style.css';
import { CartContext } from "../../context/carritoContext";
import {  
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    TableContainer
  } from '@chakra-ui/react'
import Itemshop from "../itemshop/itemshop";

const ItemListCart = ({endshop}) =>{

    const [cart,setCart] = useContext(CartContext);
    const total =cart.reduce((total, item)=>{
        return total+(item.precio * item.cant);
    },0) 

    const setItems = cart.map((item)=>{
        console.log(item.id)    
        return( 
                
                <Itemshop key={item.id} data={item} endshop={endshop} />
               )                                                
         })
    
    return(
        <>
        <TableContainer overflowX="hidden">
        <Table size='sm'>
            <Thead>
            <Tr>
                <Th>Articulo</Th>
                <Th>Cantidad</Th>
                <Th isNumeric>Subtotal</Th>
                
            </Tr>
            </Thead>
            <Tbody>
                {setItems}
            </Tbody>
            <Tfoot>
            <Tr>
                <Th>Total</Th>
                <Th isNumeric>$ {total}</Th>
            </Tr>
            </Tfoot>
        </Table>
        </TableContainer>
        </>
    )
}

export default ItemListCart