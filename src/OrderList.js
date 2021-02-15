import React, {Component} from 'react';
import App from './App';

class OrderList extends Component{
constructor (props){
  super(props);
  this.state = {
    nameInput: "",
    order: [],
  }
this.submitOrder = this.submitOrder.bind(this);
this.handleChange = this.handleChange.bind(this);

}

submitOrder(){
  const orders = this.props.order;
  // const orderLog = `${JSON.stringify(orders.name)}, ${JSON.stringify(orders.count)}`
  const nameInput = this.state.nameInput;
  localStorage.clear();
  const orderLog = JSON.stringify(orders);
  localStorage.setItem(nameInput, orderLog);
}

handleChange(event){
  this.setState({[event.target.name]: event.target.value});
}

componentDidMount(){
}



  render(){

    let newItem = this.props.newItem





    const orders = this.props.order
    .map((item, index) => item.count === 1 ? (
            <div key={index} className="card orderItem">
            <p>{item.itemName}</p>
            <p>${item.price}/each</p>
            <p><button className="btn" onClick={()=>this.props.addItem(item, index)}>Add!</button><button className="btn" onClick={() => this.props.deleteItem(item)}>Delete</button></p>
            </div>
)
:           <div key={index} className="card orderItem">
            <p>{item.itemName}</p>
            <p>How many? {item.count}</p>
            <p>${item.price}/each Total: ${item.price * item.count}</p>
            <p><button className="btn" onClick={()=>this.props.addItem(item, index)}>Add!</button><button className="btn" onClick={() => this.props.deleteItem(item)}>Delete</button></p>
            </div>
)



   const nameButton = <form onSubmit={this.submitOrder}>
   <label htmlFor="nameButton"></label>
   <input type="text" placeholder="What's your name?" id="nameButton" name="nameInput" value={this.state.nameInput} onChange={this.handleChange}/>
   <button className="btn genbtn" type="submit">Submit Your Order!</button>
   </form>

   const totalPrice = this.props.totalPrice;

    return(
      <div id="orderList">
      <h5>YOUR ORDER:</h5>
      {orders}
      <div id="orderTotal">Order Total: ${totalPrice}</div>
      <div id="nameButton1">{nameButton}</div>
      </div>
    );
  }
}

export default OrderList
