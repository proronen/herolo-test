const initialState = {
    modals: []
}

const ModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return {
                ...state,
                modals: state.modals.concat(action.obj)
            };
        case 'deleteMovieConfirm':
            return {
                ...state,
                modals: state.modals.concat(action.obj)
        };
        case 'CLOSE_MODAL':
            return {
                ...state,
                modals: state.modals.filter(item => item.id !== action.obj.id),
            };
        default:
            return state;
    }
};

export default ModalReducer;