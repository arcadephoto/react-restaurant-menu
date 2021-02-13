import React, {Component} from 'react';

class MenuBar extends Component{
  constructor(props){
      super(props);
  this.state = {
    items: [],
  };
  }

  componentDidMount(){
        const items = [
        "Apps", "Entrees", "Desserts"
      ];

    this.setState({items});
      }







  render(){
    const menuBar = this.state.items.map((item, index) => (
        <p key={index} onClick={()=> this.props.menuBarClick(item)}> {item} </p>
    ))



    return(
      <nav id="topNav" className="bg-light">
      {menuBar}</nav>
    );
  }
}

export default MenuBar
