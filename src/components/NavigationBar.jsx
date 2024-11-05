import { NavLink } from "react-router-dom";
import { Navbar, Nav} from "react-bootstrap";

function NavigationBar(){
    

    return (
        <Navbar bg="light" expand="lg" className="p-2">
            <Navbar.Brand href="/" className="text-info align-items-center">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/exercises" activeclassname="active">
                        Exercise Tracker
                    </Nav.Link>

                    <Nav.Link as={NavLink} to="/edit-exercises" activeclassname="active">
                        Edit Exercises
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar