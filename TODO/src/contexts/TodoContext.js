import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Learn React",
            completed: false
        },
    ],
        addTodo: (todo) => {},
        toggleTodo: (id) => {}, // Toggle the completed status of a todo
        deleteTodo: (id) => {},
        updateTodo: (id, todo) => {},
});

export const useTodoContext = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;