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
             <h5 className="itemName">{item.itemName}</h5>
             <p>{item.desc}</p>
             <p>${item.price}</p>
             <button className="btn" onClick={()=> this.props.menuClick(item)}>Add to Order!</button>
             </li>
     )
   )


       return (

         <div>
         {items}
         </div>
       );
     }
     }


export default MenuList
