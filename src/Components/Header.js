import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import AboutMe from './AboutMe'
import Projects from './Projects'

class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            pagenum: 1,
            show: <AboutMe/>
        }
    }

    switchNumber(num){
        this.setState({
            pagenum: num
        })
    }
    
    render() {
        return (
            <>
                <Navbar bg="primary" variant="dark">
                    {/* <Button variant="primary" size="lg" onMouseOver={() => this.switchNumber(1)}>About Me</Button> */}
                    <Navbar.Brand onClick={() => this.switchNumber(1)}>About Me</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Button onClick={() => this.switchNumber(2)}>Projects</Button>
                            {/* <Button onClick={() => this.switchNumber(3)}>Mystery</Button> */}
                        </Nav>
                </Navbar>

                {this.state.pagenum == 1 && (
                    <AboutMe/>
                )}
                {this.state.pagenum == 2 && (
                    <Projects/>
                )}
                {/* {this.state.pagenum == 3 && (
                    <h1>Not a Satisfying Mystery</h1>
                )} */}
            </>
        )
    }
}

export default Header
