import React from 'react';

class CartItem extends React.Component {
    //need to call the constructor of the parent class if inheriting
  
    constructor (){
        super();
        this.state ={
            price: 999,
            title:'Phone',
            qty:1,
            img: ''
        }
        this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity(){
        console.log('this',this.state)
    }
    render(){
        const {price,title,qty}=this.state;
        return(
             <div className="cart-item">
                <div className= "left-block">
                    <img style={style.image}/>
                </div>
                <div className= "right-block">
                    <div style={{fontSize:25 } }>{title}</div>
                    <div style={ {color:'#777'} }>Rs {price}</div>
                    <div style={ {color:'#777'} }>Qty: {qty}</div>
                    <div className= "cart-item-actions">
                    {/* buttons */}
                    <img 
                    alt="increase" 
                    className="action-icons" 
                    src="https://image.flaticon.com/icons/svg/1828/1828919.svg"
                    onClick={this.increaseQuantity}
                    />
                    <img 
                    alt="decrease" 
                    className="action-icons" 
                    src="https://image.flaticon.com/icons/svg/1828/1828899.svg"
                    // onClick={this.decreaseQuantity}
                    />
                    <img 
                    alt="delete" 
                    className="action-icons" 
                    src="https://image.flaticon.com/icons/svg/3096/3096687.svg"
                    // onClick={this.deleteQuantity}
                    />
                </div>
                </div>
            </div>
        );
    }
}
// we  cant style like this but can style by using an object 
const style ={
    image: {
        height : 110,
        width: 110,
        borderRadius:4,
        background:'#ccc'

    }
}

export default CartItem;