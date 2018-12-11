import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../config/store';

import { deleteMovie,editMovieData,addMovie,errorsData } from "../../actions";

class Modal extends Component {
    onClose(){
      if(this.props.item.onClose){
        this.props.item.onClose();
        this.props.onClose(this.props.item);
      } else {
        this.props.onClose(this.props.item);
      }
    }
    onConfirm(){
      if(this.props.item.onConfirm){
        this.props.item.onConfirm();
        this.props.onClose(this.props.item);
      }
    }

    handleSubmit = e => {
        
        const {id,title,year,new_movie,errors} = store.getState().formData.fields; 
        
        //// validation
        let errorsArr = {};
  
        if (title === '') errorsArr.title = "Can't be empty";
        if (year === '') errorsArr.year = "Can't be empty";
        if (isNaN(year)) errorsArr.year = "Please fill in number only";

        const isValid = Object.keys(errorsArr).length === 0
        
        if (isValid) {

          let the_title = title.replace(/[^A-Za-z0-9 ]/g, '');
          
          the_title = the_title.toLowerCase()
          .split(' ')
          .map(str => str.charAt(0).toUpperCase() + str.substring(1))
          .join(' ');

          if(new_movie) {
            store.dispatch(addMovie({
              id: id,
              Title: the_title,
              Year: year
            }));
            this.onClose();
          } else {
            store.dispatch(editMovieData({
              id: id,
              title: the_title,
              year: year
            }));
            this.onClose();
          }
        
        } else {
            store.dispatch(errorsData({
              type: 'errorsData',
              payload: {
                  errors: errorsArr
              }
              }));
        }

    }

    handleDelete = (id) => {
      store.dispatch(deleteMovie({
          id: id
      }));

      this.onClose();
    }

    render() {
      const { type } = this.props.item;
      
      if (type === 'confirmation') {
        const { modalTitle,text, id ,btnText } = this.props.item;
        return (
          <div className="modal show" tabIndex="-1" role="dialog">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                      <h5 className="modal-title">{modalTitle}</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                  <div className="modal-body">
                      { text }
                  </div>
                  <div className="modal-footer">
                      <button type="button" className="btn btn-primary" onClick={() => this.handleDelete(id)}>{btnText ? btnText : "Save" }</button>
                      <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => this.onClose()}>Cancel</button>
                  </div>
                </div>
              </div>
          </div>
        )
      } else if (type === 'movieModal') {
        const { content, modalTitle, btnText } = this.props.item;
        
        return (
          <div className="modal show" tabIndex="-1" role="dialog">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                      <h5 className="modal-title">{modalTitle}</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                  <div className="modal-body">
                      { content }
                  </div>
                  <div className="modal-footer">
                      <button type="button" className="btn btn-primary" onClick={() => this.handleSubmit()}>{btnText ? btnText : "Save" }</button>
                      <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => this.onClose()}>Cancel</button>
                  </div>
                </div>
              </div>
          </div>
        )
      }
      return (
          <div>Empty Modal</div>
      );
    }
  }

  export default connect(null)(Modal);