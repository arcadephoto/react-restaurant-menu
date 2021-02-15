import React, {Component} from 'react';
import backgroundimg from './oktober.png';
import titleimg from './title4.png';
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
        newItem:{},

    };
    this.menuBarClick = this.menuBarClick.bind(this);
    this.menuClick = this.menuClick.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
};

componentDidMount(){
        const items = [{
        itemName: "Chips & 'Kraut",
        desc: "Fresh tortilla chips served with sharp, cabbagy saurkraut",
        price: 7,
        type: "apps",
        count: 0,
      },
      {
        itemName: 'Beer-battered refried beans',
        desc: "Globs of squishy refritos covered in schwartzbier batter and deep-fried until slightly more brown",
        price: 7,
        type: "apps",
        count: 0,
      },
      {
        itemName: 'Squashamole',
        desc: "Our signature dipping sauce - tomatoes, red onions, garlic and lime juice mixed with a wet paste of stewed winter squash. Delicious!",
        price: 6,
        type: "apps",
        count: 0,

      },

      {
      itemName: "Bavarian Nachos",
      desc: "Crispy tortilla chips piled high with avocado and Black Forest ham",
      price: 14,
      type: "entrees",
      count: 0,
      },
      {
      itemName: 'Pork schnitzel fajitas',
      desc: "Battered and fried strips of wild boar served with soft tortillas and der fixins",
      price: 15,
      type: "entrees",
      count: 0,
      },
      {
      itemName: 'Bratwurst Rancheros',
      desc: "Smoky bratwurst links smothered in mole and topped with fried eggs",
      price: 12,
      type: "entrees",
      count: 0,

    },

    {
    itemName: "Tres Leches",
    desc: "Three glasses of milk",
    price: 6,
    type: "desserts",
    count: 0,
    },
    {
    itemName: 'Ham Churros',
    desc: "Sweet pastry dough deep fried, rolled in cinnamon sugar, and topped with chunks of stewed ham",
    price: 7,
    type: "desserts",
    count: 0,
    }
    ];

    this.setState({items});
      }




addItem(item, index){
  const order = [...this.state.order];
  const count = order[index].count ++;
  this.setState({order: order});
}

menuClick(item) {
  const newItem = item;
  const order = [...this.state.order, item];
  this.setState({order: order, total: [...this.state.total, item.price], newItem: item});
  const count = order[order.indexOf(item)].count +=1;



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
 const reducer = (a, b) => a+b;
 const totalPrice = this.state.total.reduce(reducer, 0);
 const newItem = this.state.newItem;


  return (
<div id="outerBody">
    <div className="container">
    <div id="titleCard"><img src={titleimg}/>
    <h3>TEX-MEX WITH A BAVARIAN PRETZEL TWIST</h3></div>
         <div className="">
         <MenuBar menuBarClick={this.menuBarClick}/>
         </div>
  <div className="row">
         <div className="col-7" id="menuSpace">
          <MenuList items={this.state.items} selection={this.state.selection} menuClick={this.menuClick}/>
          </div>
      <div className="col-1" id="emptySpace"></div>
           <div className="col-4" id="orderCol">
           <OrderList addItem={this.addItem} order={this.state.order} deleteItem={this.deleteItem} totalPrice={totalPrice} newItem={this.state.newItem}/>
           </div>
      </div>
      </div>
      </div>
  );
}
}
export default App;
