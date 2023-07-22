import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import {Skills} from "./layout/sections/skills/Skills";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills title={'My Tech Stack'} paragraph={'Technologies I’ve been working with recently'} />
            <Footer />
        </div>
    );
}

export default App;
