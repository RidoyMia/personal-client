import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import bannerimg from '../../../images/slider-2-removebg-preview.png' 
import Category from '../../Outlok/Category';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate()
  const[loading,setLoading] = useState(false)
  const[products,setProducts] = useState([]);
  const[separate,setSeparate] = useState([]);
  useEffect(()=>{
    setLoading(true)
    fetch(`https://server-project-eosin.vercel.app/user`)
    .then(data =>data.json())
    .then(res=>{
      setSeparate(res)
      setLoading(false)
    })
  },[]);
  const handleClick = (it)=>{
    setLoading(true)
    if(it === 'all'){
      setLoading(true)
      fetch(`https://server-project-eosin.vercel.app/user`)
    .then(data =>data.json())
    .then(res=>{
      setSeparate(res)
      setLoading(false)
    })
    }
 
 fetch(`https://server-project-eosin.vercel.app/user/${it}`)
 .then(res =>res.json())
 .then(data =>{
  
  const remaining = data?.filter(u => u?.category === it)
  setSeparate(remaining);
  setLoading(false)
  
 })




  }
  if(loading){
    return <div className='text-center py-5 mt-5'>Loading.......</div>
  }
  const chekcBtn = (id) =>{

     return navigate(`/check/${id}`)
  } 
  return (
    <div className='banner-section'>
       <Container className="py-5 mt-5">
      <Row>
        <Col md="6">
         <Row>
          <Col md="6">
          <Row>
            <Col md="1" sm="1" xs="1">
              <div className='divission-header'><h4></h4></div>
            </Col>
            <Col md="4" sm="4" xs="4">
              <p className='header-left-text'>Best Ear <br></br> Headphone</p>
            </Col>
          </Row>
          </Col>
         </Row>
         <h1 className='Header-title'>Music To <br></br> Fill your Heart</h1>

         <button className='header-btn mt-5 mx-2'>Shop now</button>
        </Col>
        <Col md="6">
          <img src={bannerimg} className="w-100 h-80 w-xs-50"></img>
        </Col>
      </Row>
    </Container>

<Container>
<Row>
  <Col md="2" sticky="top">
  <Category handleClick={handleClick}></Category>
  </Col>
  <Col md="10" className='hidden'>
    <Row >
      {
        separate?.map(u => <Col md="3" className='mt-3'>
         <div>
         <img src={u?.img} className="w-100 h-100 img-thumbnai border-rounded"></img>
          <div className='d-flex justify-content-evenly mt-3'>
          <div>
          <h6> Price : {u?.price}</h6>
          <h6>stock : {u?.stock > 0? u?.stock : "Out of stock"}</h6>
          </div>
          <button className='card-btn' onClick={()=>chekcBtn(`${u?.id}`)}>Order now</button>
          
          </div>

         </div>

        </Col>)
      }
    </Row>
  </Col>
</Row>
</Container>


    </div>
   
  );
};

export default Banner;