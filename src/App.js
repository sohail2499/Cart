import React from 'react';
// import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';
import { render } from '@testing-library/react';

class App extends React.Component{
  constructor (){
    super();
    this.state = {
        products: [
          {
            price: 99,
            title: 'Watch',
            qty: 1,
            img: 'https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            id: 1
          },
          {
            price: 999,
            title: 'Mobile Phone',
            qty: 10,
            img: 'https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=680&q=80',
            id: 2
          },
          {
            price: 999,
            title: 'Laptop',
            qty: 4,
            img: 'https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
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
    getCartCount =()=>{
      const{products}= this.state;

      let count=0;
      products.forEach((product) =>{
        count +=product.qty;
      })
      return count;
    }
    getCartTotal=()=>{
      const{products} =this.state;
      let cartTotal =0;

      products.forEach((product) =>{
        cartTotal +=product.qty*product.price;
      })
      return cartTotal;
    }
  render() {
    const { products }= this.state;
    return (
      <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart
      products={products}
       onIncreaseQuantity={ this.handleIncreaseQuantity}
       onDecreaseQuantity={this.handleDecreaseQuantity}
       onDeleteProduct={this.handleDeleteProduct}
      />

    <div style={{padding:10,fontSize:20}}> TOTAL : {this.getCartTotal()}</div>
      </div>
    );
  }
}
export default App;
