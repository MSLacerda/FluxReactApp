let nextTodoId = 0;

export const addTo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
})