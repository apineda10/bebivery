import React, {useEffect, useState} from 'react';
import CardItem from '../card';
import { Link } from 'react-router-dom';
import './style.css';
import { useParams } from 'react-router-dom';
import {db} from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";



const ItemListContainer=()=>{
    let {categoria}=useParams()
    const [productos,setProductos] = useState([]);
    
    
    useEffect(()=>{
        const getBebidas= async () => { 
            const q = query(collection(db, "bebidas"),where("categoria","==",categoria));
            const querySnapshot = await getDocs(q);
            const docs = [];
           // console.log(querySnapshot)
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id:doc.id})
            });
            setProductos(docs)
        };
        getBebidas();
     
    },[categoria])
    return(
        <div className='container'> 
            {productos.map((producto)=>{
                return(
                    
                 <CardItem key={producto.id} data={producto}/>
                )
            })} 
        </div>
    )
}

export default ItemListContainer;