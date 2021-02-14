import React, {Component} from 'react';
import App from './App';

class OrderList extends Component{
constructor (props){
  super(props);
  this.state = {
    nameInput: "",
  }
this.submitOrder = this.submitOrder.bind(this);
this.handleChange = this.handleChange.bind(this);

}


componentDidMount(){
    const orders = this.props.order;

this.setState({orders});
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


  render(){

    const orders = this.props.order.map((item, index) => (
        <li key={index} className="card orderItem">
        <p>{item.itemName} - ${item.price}</p>
        <p>{item.count}</p>
        <p><button className="btn">Edit</button><button className="btn" onClick={() => this.props.deleteItem(item)}>Delete</button></p>
        </li>
)
)



   const nameButton = <form onSubmit={this.submitOrder}>
   <label htmlFor="nameButton"></label>
   <input type="text" placeholder="What's your name?" id="nameButton" name="nameInput" value={this.state.nameInput} onChange={this.handleChange}/>
   <button className="btn genbtn" type="submit">Submit Your Order!</button>
   </form>

   const totalPrice = this.props.totalPrice;

    return(
      <div id="orderList">
      YOUR ORDER:
      {orders}
      <div id="orderTotal">Order Total: ${totalPrice}</div>
      <div id="nameButton1">{nameButton}</div>
      </div>
    );
  }
}

export default OrderList
