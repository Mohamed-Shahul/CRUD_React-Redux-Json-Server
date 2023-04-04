import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
    tasksList:[],
    selectedTask:{},
    isLoading:false,
    error:''
}

// GET
export const getTasksFromServer=createAsyncThunk(
    'tasks/getTasksFromServer',
    async (args,{rejectWithValue})=>{
        const res=await fetch('http://localhost:8000/tasks')
        if(res.ok){
            const resData=await res.json()
            return resData
        }
        else{
            return rejectWithValue({error:"No Task's Found"})
        }
    }
)
// POST
export const addTasksToServer=createAsyncThunk(
    'tasks/addTasksToServer',
    async (task,{rejectWithValue})=>{
        const options={
            method:'POST',
            body:JSON.stringify(task),
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            }
        }
        const res=await fetch('http://localhost:8000/tasks',options)
        if(res.ok){
            const resData=await res.json()
            return resData
        }
        else{
            return rejectWithValue({error:"Task Not Added"})
        }
    }
)
// PATCH
export const updateTaskToServer=createAsyncThunk(
    'tasks/updateTaskToServer',
    async (task,{rejectWithValue})=>{
        const options={
            method:'PATCH',
            body:JSON.stringify(task),
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            }
        }
        const res=await fetch('http://localhost:8000/tasks/'+task.id,options)
        if(res.ok){
            const resData=await res.json()
            return resData
        }
        else{
            return rejectWithValue({error:"Task Not Updated"})
        }
    }
)

//DELETE
export const DeleteTaskInServer=createAsyncThunk(
    'tasks/DeleteTaskInServer',
    async (id,{rejectWithValue})=>{
        const options={
            method:'DELETE',
        }
        const res=await fetch('http://localhost:8000/tasks/'+id,options)
        if(res.ok){
            const resData=await res.json()
            return resData
        }
        else{
            return rejectWithValue({error:"Task Not Removed"})
        }
    }
)

// Redux Slice
const tasksSlice=createSlice({
    name:'tasksSlice',
    initialState,
    reducers:{
        removeAllTasks:(state,action)=>{
            state.tasksList=[]
        },
        setSelectedTask:(state,action)=>{
            state.selectedTask=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getTasksFromServer.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getTasksFromServer.fulfilled,(state,action)=>{
            state.isLoading=false
            state.error=''
            state.tasksList=action.payload
        })
        .addCase(getTasksFromServer.rejected,(state,action)=>{
            state.error=action.payload.error
            state.tasksList=[]
            state.isLoading=false
        })
        .addCase(addTasksToServer.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(addTasksToServer.fulfilled,(state,action)=>{
            state.isLoading=false
            state.error=''
            state.tasksList.push(action.payload)
        })
        .addCase(addTasksToServer.rejected,(state,action)=>{
            state.error=action.payload.error
            state.tasksList=[]
            state.isLoading=false
        })
        .addCase(updateTaskToServer.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(updateTaskToServer.fulfilled,(state,action)=>{
            state.isLoading=false
            state.error=''
            state.tasksList=state.tasksList.map((task)=>task.id === action.payload.id ? action.payload :task)
        })
        .addCase(updateTaskToServer.rejected,(state,action)=>{
            state.error=action.payload.error
            state.tasksList=[]
            state.isLoading=false
        })
        .addCase(DeleteTaskInServer.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(DeleteTaskInServer.fulfilled,(state,action)=>{
            state.isLoading=false
            state.error=''
            state.tasksList=state.tasksList.filter((task)=>task.id !== action.payload )
        })
        .addCase(DeleteTaskInServer.rejected,(state,action)=>{
            state.error=action.payload.error
            state.tasksList=[]
            state.isLoading=false
        })
    }
})

export const{setSelectedTask,removeAllTasks}=tasksSlice.actions

export default tasksSlice.reducer