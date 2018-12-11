const initialState = {
    formData: [],
    errors: []
}

const FormDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'formData':
            return {
                ...action.payload
            }; 
        case 'errorsData':
            console.log("im here");
            console.log(state);
            console.log("action");
            console.log(action);
            return {
                ...state,errors: action.obj.payload.errors
            }; 
        default:
            return state;
    }
};

export default FormDataReducer;