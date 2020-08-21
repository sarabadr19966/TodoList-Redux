import * as actionTypes from './actionTypes';
import * as actionDispatch from './actionsDispatch'

export const addTask =()=>{
    return dispatch=>{
        dispatch(actionDispatch.adding())
        dispatch(actionDispatch.count())
    }
}


export const removeTask =(id)=>{
    return dispatch=>{
        dispatch(actionDispatch.removing(id))
        dispatch(actionDispatch.count())
        dispatch(actionDispatch.completed())
    }
}


export const doneTask =(id)=>{
    return dispatch=>{
        dispatch(actionDispatch.done(id))
        dispatch(actionDispatch.count())
        dispatch(actionDispatch.completed())
    }
}

export const save =(id)=>{
    return{
        type:actionTypes.SAVE,
        id:id
    }
}


export const enter =(event)=>{
    return dispatch=> {
        dispatch(actionDispatch.ent(event))
        dispatch(addTask())
    }
}

