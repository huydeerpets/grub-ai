import React from 'react';
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

class Dropdown extends React.Component {
  handleClickOutside(){
    this.setState({
      listOpen: false
    })
  }
  toggleList(){
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  constructor(props){
    super(props)
    this.state = {
      listOpen: false,
      headerTitle: this.props.title
    }
  }

  render(){
    const{list} = this.props
    const{listOpen, headerTitle} = this.state
    return(
      <div className="dd-wrapper">
  <div className="dd-header" onClick={() => this.toggleList()}>
          <div className={listOpen 
                          ? "dd-header-title-open"
                          : "dd-header-title"}>{headerTitle}</div>
          {listOpen
            ? <FaAngleUp className="dd-header-arrow"/>
            : <FaAngleDown className="dd-header-arrow"/>
          }
      </div>
  {listOpen && <ul className="dd-list">
         {list.map((item) => (
           <li className="dd-list-item" key={item.id} >{item.title}</li>
          ))}
        </ul>}
      </div>
    )
  }
}

export default Dropdown;