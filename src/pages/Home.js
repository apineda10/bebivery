import React,{useEffect,useState} from "react";
import './style.css';
import CardItem from "../components/card";
import { Link } from "react-router-dom";
import {db} from "../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const Home = () => {
    const [productos,setProductos] = useState([]);
    useEffect(()=>{
        const getBebidas= async () => { 
            const q = query(collection(db, "bebidas"));
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {
                // console.log(doc.id, " => ", doc.data());
                docs.push({ ...doc.data(), id: doc.id });
              });
            setProductos(docs)
            
        };
        getBebidas();

     
    },[])
    return(
        <div className='container'>
            {productos.map((producto)=>{
                return(
                  
                    <CardItem  key={producto.id} data={producto}/>
                )
            })}
        </div>
    )
}

export default Home