import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
class App extends React.Component{
   constructor(){
     super();
     this.state={
      products: [
          {
             price:999,
             title:'Phone',
             qty:1,
             img:''
          },
          {
             price:999,
             title:'watch',
             qty:10,
             img:''
          },
          {
             price:999,
             title:'laptop',
             qty:14,
             img:''
          }
      ]
    }
  }
 
 handleIncreaseQuantity=(product)=>{
    console.log(product);
    const {products}=this.state ;
    const index = products.indexOf(product) ;
    products[index].qty+=1;
    this.setState({
        products:products
    })
 }
 handleDecreaseQuantity=(product)=>{
    console.log(product);
    const {products}=this.state ;
    const index = products.indexOf(product) ;
    if(products[index].qty)
    products[index].qty-=1;
    this.setState({
        products:products
    })
 }
 handleDelete=(product)=>{
    console.log(product)
    const {products}=this.state ;
    const index = products.indexOf(product) ;
    delete products[index];
    this.setState({
        products:products
    })
 }
 getCartCount = () => {
  const { products } = this.state;

  let count = 0;

  products.forEach((product) => {
    count += product.qty;
  })

  return count;
}
getCartTotal = () => {
  const { products } = this.state;

  let cartTotal = 0;

  products.map((product) => {
    cartTotal = cartTotal + product.qty * product.price
  })

  return cartTotal;
}
  render(){
    const {products}=this.state
    return (
     <div className="App">
       <Navbar count={this.getCartCount()}/>
        <Cart
           products = {products}
           onIncreaseQuantity={this.handleIncreaseQuantity}
           onDecreaseQuantity={this.handleDecreaseQuantity}
           onDelete={this.handleDelete}
        />
         <div style={ {padding: 10, fontSize: 20} }>TOTAL: {this.getCartTotal()} </div>
     </div>
    );
  }
}

export default App;
