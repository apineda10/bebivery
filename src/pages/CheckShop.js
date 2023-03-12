import React,{useContext,useState} from "react";
import './style.css';
import { addDoc, setDoc,collection } from "firebase/firestore";
import {db} from "../firebase/firebaseConfig";
import { CartContext } from "../context/carritoContext";
import { FormControl, 
        FormLabel, 
        Input,
        FormHelperText,
        ButtonGroup,
        Button,} from '@chakra-ui/react'
import ItemListCart from "../components/itemListCart/itemListCart";
import { Link } from "react-router-dom";
import ModalFin from "../components/modalfin/modalfin";

const initialState = {
    name: "",
    lastName: "",
    direction: "",
    email: "",
    shop: [],
  };

const CheckShop= () =>{
    const [values, setValues] = useState(initialState);
    const [purchaseID, setPurchaseID] = useState("");
    const [openModal,setOpenModal] = useState(false)
    const [cart,setCart] = useContext(CartContext);
    const [error,setError]= useState(false)

    const handleInputChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value, shop:cart });
    };

    const postSendShop=async (e)=>{
        if (e && e.preventDefault) { e.preventDefault(); }
        if (values.direction==='' || 
            values.name==='' || 
            values.lastName ===''||
            values.email ===''){
                setError(true) 
        }else{
            setError(false)
            const docRef = await addDoc(collection(db, "compras"), {
            values,
            });
            setPurchaseID(docRef.id);
            setOpenModal(true)
            setValues(initialState);
            setCart([])
        }
      };

    const cancelShop=()=>{
        setCart([])
    }

    const sendShop = ()=>{
        postSendShop()
     
    }      
    return(
        <div className="contenedor-checkshop">
            <div className="checkshop">
            <h1>Ingrese sus datos para fianlizar la compra</h1>
            <FormControl isRequired>
                <FormLabel>Nombre</FormLabel>
                <Input  name="name" placeholder='Nombre' value={values.name}  onChange={handleInputChange}/>
                <FormLabel>Apellido</FormLabel>
                <Input  name="lastName" placeholder='Apellido' value={values.lastName}  onChange={handleInputChange}/>
                <FormLabel>Direccion</FormLabel>
                <Input name="direction" placeholder='Calle 1234' value={values.direction} onChange={handleInputChange}/>
                <FormLabel className="checkshop-label">Email</FormLabel>
                <Input name="email" type='email' onChange={handleInputChange} value={values.email}   placeholder='Email@email.com' />
                {error && (
                    <FormHelperText>
                    Ingrese un e-mail valido 
                    </FormHelperText>
                ) }             
                
                <ButtonGroup ml='2' spacing='3' >
            
                    <Button
                        mt={4}
                        variant='solid' 
                        colorScheme='blue'
                        type='submit'
                        onClick={()=>sendShop()}
                    >
                        Confirmar compra
                    </Button>
                <ModalFin id={purchaseID} open={openModal}/>
                <Link to="/">
                    <Button
                        mt={4}
                        variant='solid' 
                        colorScheme='blue'
                        type='submit'
                        onClick={()=>cancelShop()}
                    >
                        Cancelar compra
                    </Button>
                </Link>  
                </ButtonGroup>      
            </FormControl>
            </div>
            <div>
                <h1>Resumen de compra</h1>
                <ItemListCart endshop={true} />
            </div>
        </div>
    )
}

export default CheckShop