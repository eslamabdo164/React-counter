import React , {Component} from 'react'; 
import './counter.css'
import { Card, Button, CardTitle, CardText, Row, Col,ButtonGroup  } from 'reactstrap';
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
            <Row className='mt-4 ml-auto text-center'>
                <Col sm={{size : 6, order :2, offset :3}}>
                <Card body className=''>
                    <CardTitle>Things</CardTitle>
                    <CardText className='display-1'> {this.state.count} </CardText>
                    <ButtonGroup className='display-3'>
                        <Button color='primary' onClick={this.onAdd}>Add</Button>
                        <Button color='danger' onClick={this.onRedo}>Redo</Button>
                        <Button color='warning'onClick={this.onSub}>Sub</Button> 
                    </ButtonGroup>
            
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
}

