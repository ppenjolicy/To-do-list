import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import TodoList from './TodoList';
import { Container, Row, Col } from 'reactstrap';
import './TodoList.css'

export default class Facebook extends Component {

    state = {
        auth: false,
        name: '',
        picture: ''
    };

    responseFacebook = response => {
        console.log(response);
        if (response.status !== 'unknown')
            this.setState({
                auth: true,
                name: response.name,
                picture: response.picture.data.url
            });

    }

    componentClicked = () => {
        console.log('Facebook btn clicked');
    }

    render() {
        let facebookData;

        this.state.auth ?
            facebookData = (
                <div /*style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px',
                    color: '#000'
                }}*/>
                    <Container>
                        <Row>
                            <Col xs="3" style={{ alignContent: 'center', paddingTop: '10%' }} className="todo-list">
                                <img src={this.state.picture} alt={this.state.name}/>
                                <h2 style={{fontSize: '20px'}}>Welcome <br/>{this.state.name}!</h2></Col>
                            <Col>
                                <TodoList />
                            </Col>
                        </Row>
                    </Container>
                </div>
            ) :
            facebookData = (<FacebookLogin
                appId="563016491260314"
                autoLoad={true}
                fields="name,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />);

        return (
            <>
                {facebookData}
            </>
        );
    }
}