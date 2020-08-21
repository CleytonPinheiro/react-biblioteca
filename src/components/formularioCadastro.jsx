import React, {Component} from "react"


class FormularioCadastro extends Component {
    render() {
        return(
            <form action="">
                <input type="text" className="text" placeholder="Título"/>
                <textarea name="" id="" cols="30" rows="10" placeholder="Entre com a sua nota" />

                <button>Criar Nota</button>
            </form>
        )
    }
}

export default FormularioCadastro;
