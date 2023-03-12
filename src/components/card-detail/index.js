import React, {useEffect, useState,useContext} from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import { Card,  CardBody, CardFooter, Image, Stack, Heading,Text,ButtonGroup,Button, useToast } from '@chakra-ui/react'
import imagenNoDisponible from '../../img/imagenNoDisponible.jpg'
import {db} from "../../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { CartContext } from '../../context/carritoContext';
const CardDetail=()=>{
    const [product,setProduct] = useState({});
    let {id} = useParams()
   
    useEffect(()=>{
        const getProducto= async () => { 
            const docRef = doc(db, "bebidas", id)
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setProduct( docSnap.data());
            } 
            
        };
        getProducto();
     
    },[id])
    const [cart,setCart] = useContext(CartContext)
    const toast=useToast();
    const addToCart = () =>{
        setCart((articles)=>{
            const artFound=articles.find((article)=> article.id===product.id)
            if (artFound){
                return articles.map((item)=>{
                    if (item.id === product.id){
                        return {...item,id:product.id,cant:item.cant+1};
                    }else{
                        return item
                    }
                })
            }else{
                return [...articles,{id:product.id,cant:1,precio:product.precio,nombre:product.nombre}]
            }
        })
        toast({
            title: 'Articulo agregado al carrito :)',
            status: 'success',
            duration: 1000,
            isClosable: true,
          })
      }       
    return(
        <div> 
            <div  className='card-detail' >
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    align="center"
                    >
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src={product.img === undefined?imagenNoDisponible :product.img}
                        alt='Caffe Latte'
                    />

                    <Stack>
                        <CardBody>
                        <Heading size='md'>{product.nombre}</Heading>
                        <Text color='blue.600' fontSize='2xl'>
                             $ {product.precio}
                        </Text> 
                        <Text py='2'>
                            {product.descripcion}
                        </Text>
                        </CardBody>

                        <CardFooter>
   
                        <ButtonGroup ml='20' spacing='3'>
                            <Button variant='solid' colorScheme='blue' onClick={()=>addToCart()}>
                            Comprar
                            </Button>
                        </ButtonGroup>
                        </CardFooter>
                    </Stack>
                    </Card>
            </div>
        </div>    

    )
}

export default CardDetail;