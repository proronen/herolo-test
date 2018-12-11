export const openModal = (obj) => {
    return {
        type: 'OPEN_MODAL',
        obj,
    }
}

export const deleteMovieConfirm = (obj) => {
    return {
        type: 'deleteMovieConfirm',
        obj,
    }
}

export const closeModal = (obj) => {
    return {
        type: 'CLOSE_MODAL',
        obj,
    }
}

export const deleteMovie = (obj) => {
    return {
        type: 'deleteMovie',
        obj,
    }
}

export const editMovieData = (obj) => {
    return {
        type: 'editMovieData',
        obj,
    }
}

export const addMovie = (obj) => {
    return {
        type: 'addMovie',
        obj,
    }
}

export const formData = (obj) => {
    return {
        type: 'formData',
        obj,
    }
}

export const errorsData = (obj) => {
    console.log("obj")
    console.log(obj)
    return {
        type: 'errorsData',
        obj,
    }
}