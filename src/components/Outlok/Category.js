import React, { useEffect, useState } from 'react';
import './Category.css';

const Category = ({handleClick}) => {
    
    const[Category,setCategory] = useState([]);
    useEffect(()=>{
       fetch('datata.json')
       .then(res => res.json())
       .then(data => {
        console.log(data,'category')
        setCategory(data)
       })
    },[])
    return (
        <div>
            <p className='category' onClick={()=> handleClick("all")}>All</p>
            {
                Category?.map(u => <p className='category' onClick={()=> handleClick(`${u?.category}`)}>{u?.category}</p>)
            }
        </div>
    );
};

export default Category;