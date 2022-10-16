import { defineStore } from "pinia";

export const useTodos = defineStore('todos', {
    state: () => ({
    todos_asc :([]),
    name :(""),
    input_content: ("")
      
    })

})
