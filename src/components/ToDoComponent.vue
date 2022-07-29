<template>
    <HeaderComponent/>
    <h1>ToDo</h1>
    <button v-on:click="addTask" class="addBtn">{{text}}</button>
    <div class="form" v-if="show">
        <input type="text" placeholder="Enter task" v-model="tasks.name"> 
        <p>{{tasks.name}}</p>
        <button class="saveBtn" v-on:click="saveTask">Save Task</button>
    </div>
    <hr>
    <div class="task-list"  v-if="tasks">
        <h3>List of all tasks</h3>
        <table>
            <tr v-for="task in tasks" v-bind:key="task.id">
                <th>{{task.id}}</th>
                <th style="text-align:start;">{{task.name}}</th>
                <th style="text-align:start;">{{task.status}}</th>
                <th><button v-on:click="deleteTask(task.id)" class="removeTask">X</button>
                    <button v-on:click="completeTask(task.name,task.id)" class="completeTask">✓</button>
                </th>
            </tr>
        </table>
    </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import axios from 'axios';
export default {
    name: "ToDoComponent",
    components: { HeaderComponent },
    data(){
        return{
            show:false,
            text: '+',
            tasks:[{
                name:'',
                status:'',
            }],
        }
    },
    methods:{
        addTask(){
            this.show = !this.show
            if(this.show){
                this.text = 'x';
            } else {
                this.text = '+';
            }
        },
        async saveTask(e){
            e.preventDefault();
            let result = await axios.post('http://localhost:3000/todos',{"name":this.tasks.name,"status":"Pending"});
            console.log(result);
            if(result.status == 201)
            {
                this.getTask();
            }
        },
        async getTask(){
            let result = await axios.get('http://localhost:3000/todos');
            // console.warn(result);
            this.tasks = result.data;
        },
        async deleteTask(id){
            // console.log(id);
            let result = await axios.delete('http://localhost:3000/todos/'+id);
            if(result.status == 200){
                console.log('Task deleted');
                this.getTask();
            }
        },
        async completeTask(name,id)
        {   
            // console.log(name,id);
            let result = await axios.put('http://localhost:3000/todos/'+id,{"name":name,"status":"Completed"});
            if(result.status == 200)
            {
                this.getTask();
            }
        }

    },mounted(){
        this.getTask();
    }
}
</script>
<style>
    .addBtn{
        background-color: #8b0304;
        border: 1px solid #8b0304;
        margin-left: auto;
        border-radius: 50%;
        color: #fff;
        margin-bottom:10px;
    }
    .addBtn:hover{
        background-color: #fff;
        border: 1px solid #8b0304;
        color: #8b0304;
        transform: scale(1.2);
    }
    .form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 25px 40px;
    }
    .form input{
        margin: 10px 0 15px 0;
        padding: 10px;
        width: 100%;
    }
    .saveBtn{
        text-transform: uppercase;
        color: #fff;
        height: 40px;
        background-color: #8b0304;
        border: 1px solid #8b0304;
    }
    .saveBtn:hover{
        background-color: #fff;
        border: 1px solid #8b0304;
        color: #8b0304;
    }
    table tr th.task-name-cell{
        text-align: start;
    }
</style>