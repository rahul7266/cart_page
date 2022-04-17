import React from 'react';

// class CartItem extends React.Component {
 
    // this.increaseQuantity=this.increaseQuantity.bind(this);
  
  // increaseQuantity =()=>{
  //   console.log('this',this.state);
  //   //setState form 1
  //   // this.setState({
  //   //   qty:this.state.qty++
  //   // })
  //   //setState form2
  //   this.setState((prevState)=>{
  //     return {
  //       qty:prevState.qty+1
  //     }
  //   },()=>{
  //      console.log('this.state',this.state);
  //   });
  // }
  // decreaseQuantity=()=>{
  //   const {qty}=this.state;
  //   if(qty===0){
  //     return;
  //   }
  //   this.setState((prevState)=>{
  //       return {
  //         qty:prevState.qty-1
  //       }
  //     }
  //   )
  // }
  //  render () {
  const CartItem=(props)=>{
    const {price,title,qty,img}=props.product;
    return (
     
      <div className="cart-item">
        <div className="left-block">
           <img src={img} style={styles.image} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price}</div>
          <div style={ { color: '#777' } }>Qty: {qty}</div>
          <div className="cart-item-actions">
            {/* Buttons */}
           <img 
             src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png" 
             alt="increase"  
             className="action-icons"
             onClick={()=>props.onIncreaseQuantity(props.product)}
           />
           <img
             src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png" 
              alt="decrease"  
             className="action-icons"
             onClick={()=>props.onDecreaseQuantity(props.product)}
           /> 
           <img 
             src="https://cdn-icons.flaticon.com/png/512/484/premium/484662.png?token=exp=1650186330~hmac=a58d7fb45e7e7d8249d563aa10892a03"
             alt="delete"  
             className="action-icons"
             onClick={()=>props.onDelete(props.product)}
            /> 
            
          </div>
        </div>
      </div>
    );
  }


const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;