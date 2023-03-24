import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Carusel from './Carusel';



const Check = () => {
    const {id} = useParams();
    const[related,setRelated] = useState([])
    const[single,setSingle] = useState({});
    let firstDe = []
    let secondDe= [];
    let price = single?.price;
   const[quantity,setQuantity] = useState('1')
   
    useEffect(()=>{
       fetch(`https://server-project-eosin.vercel.app/userr/${id}`)
        .then(res => res.json())
        .then(data => {
           
        
          
            setSingle(data)
            if(data){
                fetch(`https://server-project-eosin.vercel.app/category/${data.category}`)
                .then(res => res.json())
                .then(data =>{
                         setRelated(data)
                })
            }
        })
    },[id]);
   
    
const addNow = (id)=>{
    console.log(id)
}
    const minusHandler = ()=>{
        let quantityParse = parseInt(quantity)
        console.log(typeof(quantityParse),quantityParse)
        if(quantityParse > 1){
            quantityParse = quantityParse - 1;
            setQuantity(quantityParse)
        }
    }
    const plusHandler = ()=>{
        let quantityParse = parseInt(quantity)
        let stock = parseInt(single?.stock);
        console.log(stock)
        if(stock > quantityParse){
            quantityParse = quantityParse + 1;
        setQuantity(quantityParse)
        }
    }
    const detailsLength = single.details?.length
    const first = Math.ceil(detailsLength/2)
      
 
    for(let i = 0; i<= first; i++){
        const element = single.details[i]
      
        firstDe.push(element)
    }
   
    for(let i = first; i< single?.details?.length; i++){
        const element = single.details[i]
       
        secondDe.push(element)
    }
   

    
    
    return (
        <Container className='py-5 mt-3'>
           

            <Row>
                <Col md="4" className='border'>
                    <img src={single?.img} className="w-100 h-100"></img>
                </Col>
                
                <Col md="7" className='border px-3 py-3'>
                    <p className=''>Category : {single?.category}</p>
                    <p className=''>Name : {single?.name}</p>
                    <h6 className='text-success'>Price : ${price}</h6>
                    <p className=''>Category : {single?.stock}</p>
                    
                   <Row>
                    <Col md="6">
                        {
                            firstDe.map( u => <li>{u}</li>)
                        }
                    </Col>
                    <Col md="6">
                        {
                            secondDe.map(u =><li>{u}</li>)
                        }
                    </Col>
                   </Row>
                   <Row>
                     <div className='d-flex mt-3'>
                        <button className='button-quantity' onClick={minusHandler}>-</button>
                        <p className='px-5 mt-2 '>{quantity}</p>
                        <button className='button-quantity' onClick={plusHandler}>+</button>
                     </div>
                     <p className='py-3'>Total price : ${quantity*price}</p>
                     <button className='card-btn' onClick={()=> addNow(`${single?.id}`)}>Add now</button>

                   </Row>
                </Col>

            </Row>
            <Row>
                  <Carusel related={related}></Carusel>
            </Row>
        </Container>
    );
};

export default Check;