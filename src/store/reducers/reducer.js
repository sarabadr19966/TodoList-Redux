import * as actionTypes from '../actions/actionTypes'
import {tasksCountHandler,tasksCompletedHandler,updatedObj,findingIndex} from './utility'

var i=0;
const initialState={
    tasks:[
        {content:'read book' ,done:false,id:i},
        {content:'run a mile' ,done:false,id:++i},
    ],
    count:2,
    completed:0    
}


const reducer=(state=initialState,action)=>{
    switch(action.type){

        case actionTypes.ADDTASK:{
            const task=document.getElementById('entertask');
            if(task.value ===' ' || task.value===''){
               return updatedObj(state)
            }
            else{
                const t=task.value;
                task.value='';
               return updatedObj(state,{tasks:state.tasks.concat({content:t,done:false,id:++i})})
            }
        }

        case actionTypes.REMOVETASK:{
            const Arr=state.tasks.filter(task=>action.id !== task.id);
            return updatedObj(state,{tasks:Arr})
        }

        case actionTypes.DONETASK:{
            let tasks=[...state.tasks];
            tasks[findingIndex(tasks,action.id)].done=true;
            return updatedObj(state,{tasks:tasks})
        }



        case actionTypes.SAVE:{
            let task=document.getElementById('d'+action.id);
            if(task.value ===' ' || task.value===''){
             return updatedObj(state)
            }
            else{
                let tasks=[...state.tasks];
                tasks[findingIndex(tasks,action.id)].content=task.value;
               return updatedObj(state,{tasks:tasks})
            }
        } 

        case actionTypes.Enter:{
            action.event.preventDefault();
        }

        case actionTypes.COUNT:{
            let count=tasksCountHandler(state.tasks);
           return updatedObj(state,{count:count})
        }

        case actionTypes.COMPLETED:{
            let completed=tasksCompletedHandler(state.tasks);
           return updatedObj(state,{completed:completed})
        }

    }
    return state;
}
export default reducer;