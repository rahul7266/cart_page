import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import  {fireapp} from './firebase' ;
class App extends React.Component{
   constructor(){
     super();
     this.state={
      products: [
          // {
          //    price:999,
          //    title:'Phone',
          //    qty:1,
          //    img:''
          // },
          // {
          //    price:999,
          //    title:'watch',
          //    qty:10,
          //    img:''
          // },
          // {
          //    price:999,
          //    title:'laptop',
          //    qty:14,
          //    img:''
          // }
      ],
      loading: true 
    }
  }
  db=fireapp.firestore()
 componentDidMount(){
  //  fireapp
  //  .firestore()
  //  .collection('products')
  //  .get()
  //  .then((snapshot)=>{
  //     console.log(snapshot);
  //     snapshot.docs.map((doc)=>{
  //       console.log(doc.data());
  //     })

  //     const products= snapshot.docs.map((doc)=>{
  //       const data=doc.data()
  //       data['id']=doc.id;
  //         return data
  //     })
  //     this.setState({
  //       products,
  //       loading:false
  //     });
  //  })
   this.db
   .collection('products')
   .onSnapshot((snapshot)=>{
     console.log(snapshot) ; 

     const products= snapshot.docs.map((doc)=>{
            const data=doc.data()
            data['id']=doc.id;
              return data
          })
          this.setState({
            products,
            loading:false
          });
   })

 }
 handleIncreaseQuantity=(product)=>{
    console.log(product);
    const {products}=this.state ;
    const index = products.indexOf(product) ;
    // products[index].qty+=1;
    // this.setState({
    //     products:products
    // })

    const docref=this.db.collection('products').doc(products[index].id) ;
    docref
    .update({
      qty: products[index].qty+1
    })
    .then(()=>{
      console.log('updateded');
    })

    .catch((error)=>{
      console.log("error:",error );
    })

 }
 handleDecreaseQuantity=(product)=>{
    console.log(product);
    const {products}=this.state ;
    const index = products.indexOf(product) ;

    // if(products[index].qty)
    // products[index].qty-=1;
    // this.setState({
    //     products:products
    // })
    if(products[index].qty===0) return ;
    const docref=this.db.collection('products').doc(products[index].id) ;
    docref
    .update({
      qty: products[index].qty-1
    })
    .then(()=>{
      console.log('updateded');
    })

    .catch((error)=>{
      console.log("error:",error );
    })
 }
 handleDelete=(product)=>{
    //console.log(product)
    const {products}=this.state ;
    const index = products.indexOf(product) ;
    // delete products[index];
    // this.setState({
    //     products:products
    // })
    
    const docref=this.db.collection('products').doc(products[index].id) ;
    docref
      .delete()
      .then(() => {
        console.log("Deleted sucessfully");
      })
      .catch(err => {
        console.log(err);
      });

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
addProduct=()=>{
  this.db
   .collection('products')
   .add({
     img: 'data:image/jpeg;base64,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',
     price:10234 ,
     qty:3,
     title:'washing machine'
   })
   .then((docRef)=>{
     console.log(docRef);
   })
   .catch((error)=>{
     console.log("error:",error );
   })
}
  render(){
    const {products,loading}=this.state
    return (
     <div className="App">

       <Navbar count={this.getCartCount()}/>
       <button onClick={this.addProduct}  style={ {padding: 10, fontSize: 20} }>Add product</button>
        <Cart
           products = {products}
           onIncreaseQuantity={this.handleIncreaseQuantity}
           onDecreaseQuantity={this.handleDecreaseQuantity}
           onDelete={this.handleDelete}
        />
        {loading && <h1>Loading products</h1>}
         <div style={ {padding: 10, fontSize: 20} }>TOTAL: {this.getCartTotal()} </div>
     </div>
    );
  }
}

export default App;
