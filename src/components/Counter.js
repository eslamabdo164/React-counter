import React , {Component} from 'react'; 
import './counter.css'

export default class Counter extends Component  {

state = { 
    count : 0 
}    

onAdd = () => {
    this.setState((prevState) => ({count : prevState.count +1}))
}

onSub = () => {
    this.setState((prevState) => ({count : prevState.count - 1}))
}

onRedo = () => {
    this.setState({count : 0 })
}
render() {
    return(
        <div className='wrapper'>
            <div className='display'>{this.state.count}</div>
            <div className='_btnWrapper'>
                <button onClick={this.onAdd}>Add</button>
               <button onClick={this.onRedo}>Redo</button>
                <button onClick={this.onSub}>Sub</button> 
            </div>
        </div>
    )
}
}

