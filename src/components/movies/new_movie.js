import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions';
import MovieForm from '../forms/MovieForm';

class NewMovie extends Component {
  render() {
    return (
        <div id="new_movie">
            {<div id="new_movie_btn"  onClick={() => this.props.dispatch(openModal({
                    type: 'movieModal',
                    modalTitle: "Add new Movie",
                    content: <MovieForm type="new_movie"/>,
                    btnText: `Save new movie`
            }))}>
                    <i className="fas fa-plus-circle"></i> New
            </div> }
        </div>
    )
  }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(NewMovie);