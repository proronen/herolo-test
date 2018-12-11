const initialState = {
    movies: []
}

const MoviesReducer = (state = initialState, action ) => {
    switch(action.type) {
        case 'moviesList':
            return {
                ...action.payload
        };
        case 'deleteMovie':
            const filterMovies = state.Search.filter(item => {
                return item.id !== action.obj.id
            });
            state.Search = filterMovies;

            return {
                ...state,
        };
        case 'editMovieData':
            const itemAtIndex = state.Search.map(item => {
                if(item.id === action.obj.id) {
                    item.Title = action.obj.title;
                    item.Year = action.obj.year;
                    //item.errors = action.obj.errors;
                }
                return item; 
            });
           
            state.Search = itemAtIndex;

            return {
                ...state,
        };
        case 'addMovie':
            const obj = action.obj;
            
            const newMovie = {...state.Search}
            let new_arr = [];
            Object.keys(newMovie).map((data, i) => {
                return new_arr.push(newMovie[i]);
            });
            
            new_arr.push(obj)
            
            state.Search = new_arr;

            return {
                ...state
        };
        default: 
            return state; 
    }
}

export default MoviesReducer;