import { defineStore } from "pinia";


export const useTaskStore = defineStore('taskStore',{
            state: () => ({
                tasks : [
                    {id : 1, title: "Php" , isFav : true},
                    {id : 2, title: "Javascript" , isFav : true},
                    {id : 3, title: "Vue Js" , isFav : false},
                    {id : 4, title: "Inertia Js" , isFav : false},
                ],
                Name : 'Md Mujibur Rahman',
            }),

            getters: {
                fav(){
                    return this.tasks.filter(t => t.isFav)
                },
                favCount(){
                    return this.tasks.reduce((p,c) =>{
                        return c.isFav ? p + 1 : p
                    }, 0)
                },
                totalCount: (state) => {
                    return state.tasks.length
                }
            },

            actions: {
                 addTask(task)
                 {
                     this.tasks.push(task);
                 },

                 deleteTask(id)
                 {
                    this.tasks = this.tasks.filter(t =>{
                         return t.id !== id
                     })
                 },

                 ToggleFav(id)
                 {
                    const task = this.tasks.find(t=> t.id === id)
                  return  task.isFav = !task.isFav
                 }
            }
        })