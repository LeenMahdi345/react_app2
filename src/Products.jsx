import React from 'react'
import './Products.css';
import Prod from './Prod.jsx';
export default function Products() {
    const products = [
        {id:1,title:'product one',desc:'this is product one'},
        {id:2,title:'product two',desc:'this is product two'},
        {id:3,title:'product three',desc:'this is product three'},
    ];
  return (
    <>
    <div class="row">
        {products.map((product)=>{   

        return <Prod {...product} ke={product.id}/>
  })}
    </div>
</>
  );
}
