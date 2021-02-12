import React, {Component} from 'react';
import OrderList from './OrderList';
import App from './App';

class MenuList extends Component{

    constructor(props){
        super(props);
    this.state = {
      items: [],
    };
  }



        render(){
         const items = this.props.items
         .filter(item => item.type === this.props.selection)
         .map((item, index) => (
             <li key={index} className="card menuItem">
             <h4 className="itemName" onClick={()=> this.props.menuClick(item)}>{item.itemName}</h4>
             <p>{item.desc}</p>
             <p>${item.price}</p>
             </li>
     ))

       return (

         <div>
         {items}
         </div>
       );
     }
     }


export default MenuList
