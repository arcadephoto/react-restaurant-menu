import React, {Component} from 'react';
import App from './App';

class OrderList extends Component{
constructor (props){
  super(props);
  this.state = {
  }
}


componentDidMount(){
    const orders = this.props.order;

this.setState({orders});
  }



  render(){

    const orders = this.props.order.map((item, index) => (
        <li key={index} className="card orderItem">
        <p>{item.itemName} - ${item.price}</p>
        <p><button>Edit</button><button onClick={() => this.props.deleteItem(item)}>Delete</button></p>
        </li>
))



    return(
      <div id="orderList">
      YOUR ORDER:
      {orders}
      </div>
    );
  }
}

export default OrderList
