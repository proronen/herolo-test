import { createStore, combineReducers } from 'redux';
import MoviesReducer from '../components/movies/reducer';
import ModalReducer from '../components/modals/reducer';
import FormDataReducer from '../components/forms/reducer';

const rootReducer = combineReducers({
    movies: MoviesReducer,
    modals: ModalReducer,
    formData: FormDataReducer 
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;