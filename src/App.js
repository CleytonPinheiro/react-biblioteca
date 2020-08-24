import React, {Component} from 'react';
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas"
import FormularioCadastro from "./components/FormularioCadastro/formularioCadastro";

import "./assets/App.css";
import './assets/index.css';

class App extends Component {
    render() {
        return (
            <section className="conteudo">

                <FormularioCadastro />
                <ListaDeNotas />

            </section>
        );
    }
}
//react -> lib
//react -> ecossistema
export default App;
