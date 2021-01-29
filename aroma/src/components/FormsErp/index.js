import React, {useState} from 'react';
import { Container } from './styles';
import InputNumber from 'rc-input-number';

function FormsErp() {
    
    
    return (
        <Container>
            <h2>Vendas</h2>
            <form>
                <input type="text" placeholder="Nome da Cliente" className="form-cliente"/>
                <input type="date" placeholder="Data do pedido" className="form-cliente"/>
                <input type="money" placeholder="Preço do Produto" className="form-preco"/>
                <select className="form-preco">
                    <option value="1">produto</option>
                    <option value="1">produto</option>
                    <option value="1">produto</option>
                    <option value="1">produto</option>
                </select>
                <div className="container-quantidade">
                <label className="label-quantidade">Quantidade do Produto</label >
                    <InputNumber type="number" defaultValue={0} id="quantidade-produto"
                    min="00" step="1.0" className="input-quantidade"/>
                </div>

                <textarea placeholder="Observações do Pedido"/>
                <button className="botao-finalizar">Finalizar Pedido</button>

            </form>
        </Container>
    )
}

export default FormsErp;