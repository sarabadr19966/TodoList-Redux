import React ,{Component} from 'react'
import Tasks from '../../Components/Tasks/Tasks'
import classes from './TaskBuilder.module.css'
import Status from '../../Components/Status/Status'
import TaskControls from '../../Components/TaskControls/TaskControls'
import Cockpit from '../../Components/Cockpit/Cockpit'
import * as actionTypes from '../../store/actions/actionCreator'
import {connect} from 'react-redux'
class TaskBuilder extends Component{
    render(){

        return <main className={classes.MainContent}>
            <Cockpit/>
            <Tasks tasks={this.props.tasks} 
             clickedDone={this.props.clickedDone} clickedRemove={this.props.clickedRemove} save={this.props.clickedSave}/>   
            <TaskControls clickedAdd={this.props.clickedAdd} enter={(e)=>{this.props.clickedEnter(e)}} />
            <Status count={this.props.count} completed={this.props.completed}/>
        </main>
        
    }
}


const mapStateToProps=state=>{
    return{
        tasks:state.tasks,
        count:state.count,
        completed:state.completed
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        clickedAdd:()=>dispatch(actionTypes.addTask()),
        clickedRemove:(id)=>dispatch(actionTypes.removeTask(id)),
        clickedDone:(id)=>dispatch(actionTypes.doneTask(id)),
        clickedSave:(id)=>dispatch(actionTypes.save(id)),
        clickedEnter:(event)=>dispatch(actionTypes.enter(event))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskBuilder);