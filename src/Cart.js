import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor (){
        super();
        this.state = {
            products: [
              {
                price: 99,
                title: 'Watch',
                qty: 1,
                img: '',
                id: 1
              },
              {
                price: 999,
                title: 'Mobile Phone',
                qty: 10,
                img: '',
                id: 2
              },
              {
                price: 999,
                title: 'Laptop',
                qty: 4,
                img: '',
                id: 3
              }
            ]
          }
          // this.increaseQuantity = this.increaseQuantity.bind(this);
          // this.testing();
        }
      
  
        handleIncreaseQuantity=(product) =>{
            console.log('heyy ',product);
            const {products} = this.state;
            const index =products.indexOf(product);
            products[index].qty+=1;

            this.setState({
                products
            })
        }
        handleDecreaseQuantity=(product) =>{
            console.log('heyy you ',product);
            const {products} = this.state;
            const index =products.indexOf(product);
            if(products[index].qty===0){
                return;
            }
            products[index].qty-=1;
            

            this.setState({
                products
            })
        }
        handleDeleteProduct= (id)=>{
          const{products}= this.state;
          const items = products.filter((item) => item.id !== id);// [] whose id is not equal to id that is passed
          this.setState({
            products:items
          })
        }
    render(){
        const { products } = this.state;
        return (
          <div className="cart">
            {products.map((product) => {
              return (
                <CartItem
                  product={product}
                  key={product.id}
                  onIncreaseQuantity={this.handleIncreaseQuantity}
                  onDecreaseQuantity={this.handleDecreaseQuantity}
                  onDeleteProduct={this.handleDeleteProduct}
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
}


export default Cart;