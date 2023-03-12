import React,{useState} from "react";
import { doc, setDoc } from "firebase/firestore";
import {db} from "../../firebase/firebaseConfig";
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Button,
    useToast 
  } from '@chakra-ui/react';
  import './formnewsletter.css';

  const FormNewsletter = () =>{
    const [input, setInput] = useState('')
    const [error,setError]= useState(false)
    const toast = useToast()
    const handleInputChange = (e) => {
        setInput(e.target.value)}

    const postNewslatter=async ()=>{
        await setDoc(doc(db, "postNewslatter", input), {
            email:input,
          });
    }
    const suscribir = ()=>{
        if (!input.includes('@')){
            setError(true)   
        }else{
            setInput('')
            setError(false)
            postNewslatter()
            toast({
                title: 'Suscripto exitosamente',
                status: 'info',
                variant: 'top-accent',
                duration: 1000,
                isClosable: true,
              })
        }       
    }  
  //const isError = input === ''  
    return (
        <div className="container-newslatter">
            <div  className="newslatter">
            <FormControl isInvalid={error}>
                <h2 className="newslatter-tittle">Suscribite y recibí nuestras promociones</h2>
                <FormLabel className="newslatter-label">Email</FormLabel>
                <Input type='email' value={input} onChange={handleInputChange} colorScheme='white' className="newslatter-input" />
                {error && (
                    <FormHelperText>
                    Ingrese un e-mail valido 
                    </FormHelperText>
                ) }
                <Button
                    mt={4}
                    
                    type='submit'
                    onClick={()=>suscribir()}
                >
                    Suscribir
                </Button>    
            </FormControl>
            </div>
        </div>
      )
  }


  export default FormNewsletter