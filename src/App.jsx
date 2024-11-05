import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Provider } from "react-redux";
import { store } from "./store";
import HomePage from "./components/HomePage";
import NavigationBar from "./components/NavigationBar";
import Exercises from "./components/Exercises";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateExercises from "./components/UpdateExercises";

function App() {

  return (
    <Container className='app-container mx-auto'>
      <Provider store={store}>
        <NavigationBar />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/exercises' element={<Exercises />} />
            <Route path='/edit-exercises' element={<UpdateExercises />} />
        </Routes>
      </Provider>
    </Container>
    
  )
}

export default App
