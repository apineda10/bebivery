import React ,{useContext}from "react";
import { CartContext } from "../../context/carritoContext";
import { Tr, Td,Button} from '@chakra-ui/react'

const Itemshop = ({data,endshop})=>{ 
  const [cart,setCart] = useContext(CartContext);
  const sumaArticulo=()=>{
      setCart((articles)=>{
          if (articles.find((article)=> article.id===data.id)){
              return articles.map((item)=>{
                  if (item.id === data.id){
                      console.log(data.id)
                      return {...item,cant:item.cant+1}
                  }
                  else{
                    return item
                  }
              })
          }
      })
    } 
    const restaArticulo=()=>{
      setCart((articles)=>{
        if (articles.find((article)=> article.id===data.id && article.cant===1)){
          return articles.filter((item)=>item.id!==data.id)
        }else{
          return articles.map((item)=>{
            if (item.id===data.id){
              return {...item, cant:item.cant-1 }    
            }else{
              return item
            }
          })
        }
      })
    }
    return(
    <>
      <Tr>
        <Td>{data.nombre}</Td>
        <Td>
          {!endshop &&
          <Button colorScheme='blackAlpha'  borderRadius={'15px'} size="xs" onClick={()=>{sumaArticulo()}}>+</Button>
          }
          {data.cant}
          {!endshop && 
          <Button colorScheme='blackAlpha' borderRadius={'15px'} size="xs" onClick={()=>{restaArticulo()}}>-</Button>
          }
          </Td>
        <Td isNumeric>$ {data.precio * data.cant}</Td>
      </Tr>
    </>    
    )
}

export default Itemshop