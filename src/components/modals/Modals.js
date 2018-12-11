import React, { Component } from 'react';
import Modal from "./index";
import MyPortal from "../portal";
import { closeModal } from '../../actions';

class Modals extends Component {
  
  render() {
    
    const modals = (this.props.modals && this.props.modals.modals.length > 0) ? this.props.modals.modals.map((item,i) => <MyPortal key={i} ><Modal item={item} onClose={(item) => this.props.dispatch(closeModal(item))}/></MyPortal>) : ""

    return (
        <div className={modals.length>0 ? "modals" : ""}>
          {modals}
        </div>
      );
    }
  }

  export default Modals;