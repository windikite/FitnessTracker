import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

    return ( 
        <Container className="mt-5">
            <h1>Welcome to the fitness tracker!</h1>
            <Button variant="primary" onClick={() => navigate('/exercises')}>Exercise Tracker</Button>
        </Container>
     );
}

export default HomePage;