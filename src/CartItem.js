import React from 'react';

class CartItem extends React.Component {
    //need to call the constructor of the parent class if inheriting
  
    
//     testing () {
//     const promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('done');
//       }, 5000);
//     })

//     promise.then(() => {
//       // in promise setState acts like a synchronus call and will render 3 times and state will also get updated

//       this.setState({ qty: this.state.qty + 10 });

//       this.setState({ qty: this.state.qty + 10 });

//       this.setState({ qty: this.state.qty + 10 });

//       console.log('state', this.state);
//     });
//   }
  


    increaseQuantity = () =>{
        // this.state.qty+=1;
        // console.log('this',this.state)
        //setState form 1-- object merge with our object by shallow merging wont touch any other
            // this.setState({
            //     qty:this.state.qty+1
            // });
           
        //setState form 2---function-- use this when we require from the previous state
        this.setState((prevState) =>{
            return{
                qty:prevState.qty +1
            }
        // },()=>{// in forme 1 also we can perform the call back
        //     console.log('this.state', this.state);
        // });
    });

    }
    decreaseQuantity = () =>{
       const { qty }= this.state;
       if(qty===0){
           return;
       }
        this.setState((prevState) =>{
            return{
                qty:prevState.qty -1
                
            }
        });

    }
    render(){
        console.log('this.props',this.props);
        const {price,title,qty}=this.props.product;
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
                    onClick={this.decreaseQuantity}
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