import React from 'react';
import { 
   useNavigate } from 'react-router-dom';


const Carusel = ({related}) => {
  const navigate = useNavigate()
  const chekcBtn = (id) =>{

    return navigate(`/check/${id}`)
 } 
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
      };
      console.log(related)
    return (
        <div>
        <h2> Multiple items </h2>
        
          {
            related.map( u => <div className='mx-5 bg-primary'>
              <img src={u?.img} className="w-100 h-50"></img>
              <div className='d-flex justify-content-evenly mt-3'>
          <div>
          <h6> Price : {u?.price}</h6>
          <h6>stock : {u?.stock > 0? u?.stock : '0'}</h6>
          </div>
          <button className='card-btn'onClick={()=>chekcBtn(`${u?.id}`)} >Order now</button>
          
          </div>
            </div>)
          }
        
      </div>
    );
};

export default Carusel;