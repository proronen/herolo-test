import React,{ Component } from 'react';
import { connect } from 'react-redux';

import { openModal, deleteMovieConfirm } from '../../actions';
import MovieForm from '../forms/MovieForm';

class Movie extends Component {

    render() {
        const { id,Title, Year, Poster } = this.props.movieData;
 
        return (
            <div className="movie" style={{ backgroundImage: `url(${Poster})` }}>
                <div className="hoverBox">
                    <div className="title">{Title}</div>
                    <div className="year">{Year}</div>
                </div>

                <div className="editbox">
                    { <div onClick={() => this.props.dispatch(deleteMovieConfirm({
                            id: id,
                            type: 'confirmation',
                            modalTitle: "Delete movie",
                            text: `are you sure you want to delete ${Title}?`,
                            btnText: `Delete`
                        }))}>
                            <i className="fas fa-trash-alt"></i>
                        </div> 
                    }
                
                    { <div onClick={() => this.props.dispatch(openModal({
                        id: id,
                        type: 'movieModal',
                        modalTitle: Title,
                        content: <MovieForm id={id} year={Year} title={Title} />,
                        btnText: `Save`
                    }))}>
                            <i className="fas fa-edit"></i>
                        </div> 
                    }
                </div> 
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Movie);