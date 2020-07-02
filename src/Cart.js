import React from 'react';
import CartItem from './CartItem';

const Cart  =(props)=> {
    
    
  const { products } = props;
        return (
          <div className="cart">
            {products.map((product) => {
              return (
                <CartItem
                  product={product}
                  key={product.id}
                  onIncreaseQuantity={ props.onIncreaseQuantity}
                  onDecreaseQuantity={props.onDecreaseQuantity}
                  onDeleteProduct={props.onDeleteProduct}
                 
                />
              )
            })}
          </div>
        );
    
    //     // const arr =[1,2,3,4,5]// it can render anything we pass 
    //    return(
    //        <div className="cart">
    //            {/* {arr.map((item)=>{
    //                return item + 5
    //            })} */}
    //            <CartItem qty={1} price={99} title={"watch"} img={''}/>
    //            {/* <CartItem/> */}
    //            {/* <CartItem/> */}

    //        </div>
    //     );    //any jsx expression in an brackets
    
}


export default Cart;