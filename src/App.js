import React, {Component} from 'react';
import './App.css';
import MenuList from './MenuList';
import OrderList from './OrderList';
import MenuBar from './MenuBar';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        items: [],
        order: [],
        selection: "",
        total: [],
        itemCount: [],

    };
    this.menuBarClick = this.menuBarClick.bind(this);
    this.menuClick = this.menuClick.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
};

componentDidMount(){
        const items = [{
        itemName: 'Appetizer 1',
        desc: "A delicious appetizer",
        price: 11,
        type: "Apps",
      },
      {
        itemName: 'Entree 1',
        desc: "The first of many entrees",
        price: 12,
        type: "Entrees",
      },
      {
        itemName: 'Dessert 1',
        desc: "A sweet confection",
        price: 6,
        type: "Desserts",

      }
    ];

    this.setState({items});
      }






menuClick(item) {
  const order = [...this.state.order, item];
  const count = [...this.state.itemCount, item.itemName];
  this.setState({order: order, total: [...this.state.total, item.price], itemCount: [...this.state.itemCount, item.itemName]});



}
menuBarClick(item) {
this.setState({selection: item});
}

deleteItem(item){
  const order = [...this.state.order];
const total = [...this.state.total];
  order.splice(order.indexOf(item), 1);
  total.splice(order.indexOf(item), 1);
  this.setState({order: order, total: total});

}

  render() {
 const selection = this.state.selection;
 const countNo = this.state.itemCount.length;
 const reducer = (a, b) => a+b;
 const totalPrice = this.state.total.reduce(reducer, 0);


  return (
    <div className="container">
         <div className="">
         <MenuBar menuBarClick={this.menuBarClick}/>
         </div>
  <div className="row">
         <div className="col-7" id="menuSpace">
          <MenuList items={this.state.items} selection={this.state.selection} menuClick={this.menuClick}/>
          </div>
      <div className="col-1" id="emptySpace"></div>
           <div className="col-4" id="orderCol">
           <OrderList order={this.state.order} deleteItem={this.deleteItem} countNo={this.state.itemCount}/>
          Order Total: ${totalPrice}
           </div>
      </div>
      </div>
  );
}
}
export default App;
