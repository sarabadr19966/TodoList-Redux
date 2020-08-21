import React from 'react'
import Task from './Task/Task'
import classes from './Tasks.module.css'

const tasks=props=>(
    <div className={classes.Tasks}>
 {   props.tasks.map((task,i)=>{

        return <Task content={task.content} done={task.done} key={task.id}  clickedDone={()=>{props.clickedDone(task.id)}}
         clickedRemove={()=>{props.clickedRemove(task.id)} } toggle={()=>{ props.toggle(task.id)}} modal={props.modal}
         save={()=>props.save(task.id)} num={task.id}  tasks={props.tasks}/>
    })}
    </div>

    
)

export default tasks;
