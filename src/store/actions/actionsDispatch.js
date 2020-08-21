import * as actionTypes from './actionTypes';

export const adding =()=>{
    return{
        type:actionTypes.ADDTASK
    }
}

export const removing =(id)=>{
    return{
        type:actionTypes.REMOVETASK,
        id:id
    }
}


export const done =(id)=>{
    return{
        type:actionTypes.DONETASK,
        id:id
    }
}

export const ent =(event)=>{
    return{
        type:actionTypes.Enter,
        event:event
    }
}

export const count =()=>{
    return{
        type:actionTypes.COUNT,
    }
}

export const completed =()=>{
    return{
        type:actionTypes.COMPLETED,
    }
}