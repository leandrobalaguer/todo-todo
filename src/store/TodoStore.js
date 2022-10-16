import { defineStore } from "pinia";

export const useTodos = defineStore('todos', {
    state: () => ({
      todos: [],
      newTodoContent: ""
    }),
    actions: {
        addTodo () {
            if(newTodoContent.value.trim() === "" ){
               return
             }
               addDoc(todoColeRef , {
             content: newTodoContent.value,
             done: false,
             date: Date.now()
           })
           
              newTodoContent.value=""
           },
          deleteTodo(id){
            deleteDoc(doc(todoColeRef, id));
           } ,
           
           toggleDone(id){
            const index = todos.value.findIndex(todo => todo.id === id)
            console.log(todos.value[index].done)
            updateDoc(doc(todoColeRef, id), {
          done: !todos.value[index].done 
        })
        }
    },
  })
