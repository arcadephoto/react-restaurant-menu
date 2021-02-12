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
  this.setState({order: order, total: [...this.state.total, item.price]});
  console.count(JSON.stringify(item));


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
  console.log(this.state.total);

}

  render() {
 const selection = this.state.selection;

 const reducer = (a, b) => a+b;
 const totalPrice = this.state.total.reduce(reducer, 0);


  return (
    <div className="container">
         <div className="">
         <MenuBar menuBarClick={this.menuBarClick}/>
         </div>
  <div className="row">
         <div className="col-7" id="emptySpace">
          <MenuList items={this.state.items} selection={this.state.selection} menuClick={this.menuClick}/>
          </div>
      <div className="col-1" id="orderCol"></div>
           <div className="col-4">
           <OrderList order={this.state.order} deleteItem={this.deleteItem}/>
          Order Total: {totalPrice}
           </div>
      </div>
      </div>
  );
}
}
export default App;
