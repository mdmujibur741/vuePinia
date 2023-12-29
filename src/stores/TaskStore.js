import { defineStore } from "pinia";


export const useTaskStore = defineStore('taskStore',{
            state: () => ({
                tasks : [
                    {id : 1, title: "Php" , isFav : true},
                    {id : 1, title: "Javascript" , isFav : true},
                    {id : 1, title: "Vue Js" , isFav : false},
                    {id : 1, title: "Inertia Js" , isFav : false},
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
            }
        })