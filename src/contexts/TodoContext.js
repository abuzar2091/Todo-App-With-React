import { createContext,useContext } from "react";

export const TodoContext= createContext({
    todos:[{id:Date.now(),
    todo:"todo with context api",
   completed:false,
    }
    ],
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    toggleComplete:(id)=>{}
}
       
) 
export const TodoContextProvider=TodoContext.Provider;
export default function useTodo(){
    return useContext(TodoContext)
}