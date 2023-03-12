import React,{useContext,useState} from "react";
import { Card,  CardBody, CardFooter, Image, Stack, Heading,Text,Divider,ButtonGroup,Button ,useToast,Toast} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import './style.css';
import { CartContext } from "../../context/carritoContext";




const CardItem = ({data}) => {

  const toast = useToast()

  const [cart,setCart] = useContext(CartContext)
  const addToCart = () =>{
      setCart((articles)=>{        
          if (articles.find((article)=> article.id===data.id)){
              return articles.map((item)=>{
                  if (item.id === data.id){
                      return {...item,cant:item.cant+1,id:data.id}
                  }else{
                      return item
                  }
              })
          }else{
              return [...articles,{data,id:data.id,cant:1,precio:data.precio,nombre:data.nombre}]
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
      <>   
        <Card maxW='sm'  className="card" align="center">      
            <CardBody className="card-body"> 
            <Link to={`/Detalle/${data.id}`}>                      
            <Image
              src={`${data.img}`}
              alt='img'
              borderRadius='lg'
              boxSize='25vh'
              className="card-img"/>
            </Link>
           
            <Stack mt='6' spacing='3'>
              <Heading size='md'><Link to={`/Detalle/${data.id}`}>{data.nombre}</Link></Heading>
              <Text color='blue.600' fontSize='2xl'>
              <Link to={`/Detalle/${data.id}`}>
                $ {data.precio}
                </Link>
              </Text>
            </Stack>            
          </CardBody>          
          <Divider /> 
       
          <CardFooter >  
  
          <ButtonGroup ml='2' spacing='3' >
              <Button variant='solid' colorScheme='blue' onClick={()=>addToCart()}>
                Agregar al carrito
              </Button>  
            </ButtonGroup>
          </CardFooter>
        </Card>
    </>
  )
}

export default CardItem