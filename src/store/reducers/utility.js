export const tasksCountHandler=(tasks)=>{
    let count =0;
    tasks.forEach(task=>{
        if(!task.done){
            count++;
        }
  })
  return count;
 }

export const tasksCompletedHandler=(tasks)=>{
    let completed =0;
    tasks.forEach(task=>{
        if(task.done){
            completed++;
        }
    })
    return completed;
}

export const updatedObj=(oldObj,updatedValues)=>{
    return {
        ...oldObj,
        ...updatedValues
    }
}

export const findingIndex=(tasks,id)=>{
    const taskIndex=tasks.findIndex(task=>{
        return task.id===id
    })
    return taskIndex
} 




