import React from 'react';
import { connect } from 'react-redux';
import store from '../../config/store';

class MovieForm extends React.Component {

    componentWillMount() {

        if(this.props.type === "new_movie") {
            store.dispatch({
                type: 'formData',
                payload: {
                    fields: {id: store.getState().movies.Search.length+1,
                        Title: "",
                        Year: "",
                        new_movie: true
                    }
                }
            });
        } else {
            store.dispatch({
                type: 'formData',
                payload: {
                    fields: {id: this.props.id,
                        title: this.props.title,
                        year: this.props.year,
                        errors: this.props.errors
                    } 
                }
            });
        }
    }
    
    handleChange = (e) => {
        store.dispatch({
            type: 'formData',
            payload: {
                fields: {...store.getState().formData.fields , [e.target.name]: e.target.value}
            }
        });
    }
    
    render () {        
        const { fields, errors } = store.getState().formData;
        
        return (
            <React.Fragment>
        <form>
            {console.log("errorspage")}
            {console.log(errors)}
            {console.log(fields)}
            {!!errors && <div><p>Please check the data you entered</p></div>}

            <div className="form_inputs">
                <label htmlFor="title">Title</label>
                <input
                    name="title"
                    value={fields.title || ""}
                    onChange={this.handleChange}
                    id="title"
                    placeholder="Movie Title"
                />
                {/* {console.log("formform")}
                {console.log(errors)} */}
                <span>{!!errors && !!errors.title && <div>{errors.title}</div>}</span>
            </div>
            
            <div className="form_inputs">
                <label htmlFor="title">Year</label>
                <input
                    name="year"
                    value={fields.year || ""}
                    onChange={this.handleChange}
                    id="year"
                    placeholder="Movie Year"
                />
                <span>{!!errors && !!errors.year && <div>{errors.year}</div>}</span>
            </div>
        </form>


            </React.Fragment>
        )
    } 
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps)(MovieForm);