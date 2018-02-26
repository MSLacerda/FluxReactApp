nextTodoId = 0;

export const addTo = text => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}

export const toggleTodo = id => {
    return {
        return {
            type: 'TOGGLE_TODO',
            id
        }
    }
}