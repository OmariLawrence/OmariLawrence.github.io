import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            pagenum: 1,
            show: <></>
        }
    }

    switchNumber(num){
        this.setState({
            pagenum: num
        })
        this.updatePage();
    }

    updatePage(){
        if(this.state.pagenum == 1){
            this.setState({
                show: <h1>Hi I am Omari Lawrence</h1>
            })
        }else if(this.state.pagenum == 2){
            this.setState({
                show: <h1>What i occasionally do work</h1>
            })
        }else{
            this.setState({
                show: <h1>Not a Satisfying Mystery</h1>
            })
        }
    }
    
    render() {
        return (
            <>
                <Navbar bg="primary" variant="dark">
                    {/* <Button variant="primary" size="lg" onMouseOver={() => this.switchNumber(1)}>About Me</Button> */}
                    <Navbar.Brand onClick={() => this.switchNumber(1)}>About Me</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link onClick={() => this.switchNumber(2)}>Projects</Nav.Link>
                            <Nav.Link onClick={() => this.switchNumber(3)}>Mystery</Nav.Link>
                        </Nav>
                </Navbar>

                {this.state.show}  
            </>
        )
    }
}

export default Header
