import React, {Component} from 'react';
import ListaDeNotas from "./components/ListaDeNotas"
import FormularioCadastro from "./components/formularioCadastro";

class App extends Component {
    render() {
        return (
            <section>

                <FormularioCadastro />

                <ListaDeNotas />

            </section>
        );
    }
}
//react -> lib
//react -> ecossistema
export default App;
