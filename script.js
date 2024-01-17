/*Navegação entre divs adm */

var containerAdm = document.getElementById('container-adm');
var containerForm = document.getElementById('container-adm-form');
var containerLista = document.getElementById('container-lista');

var btnCadastro = document.getElementById('btn-cadastro');
var btnLista = document.getElementById('btn-lista');

var btnVoltarForm = document.getElementById('form-btn-voltar');
var btnVoltarLista = document.getElementById('lista-btn-voltar');

btnCadastro.addEventListener('click', function () {
    containerAdm.classList.add('hidden');
    containerLista.classList.add('hidden');
    containerForm.classList.remove('hidden');
    localStorage.setItem('visible', 'container-adm-form');

});

btnLista.addEventListener('click', function () {
    containerAdm.classList.add('hidden');
    containerForm.classList.add('hidden');
    containerLista.classList.remove('hidden');
    localStorage.setItem('visible', 'container-lista');
});

btnVoltarForm.addEventListener('click', function () {
    containerAdm.classList.remove('hidden');
    containerForm.classList.add('hidden');
    containerLista.classList.add('hidden');
    localStorage.setItem('visible', 'container-adm');
});

btnVoltarLista.addEventListener('click', function () {
    containerAdm.classList.remove('hidden');
    containerForm.classList.add('hidden');
    containerLista.classList.add('hidden');
    localStorage.setItem('visible', 'container-adm');
});

var visible = localStorage.getItem('visible');

// Se houver um estado armazenado, aplicá-lo
if (visible === 'container-adm-form') {
    containerAdm.classList.add('hidden');
    containerForm.classList.remove('hidden');
    containerLista.classList.add('hidden');
} else if (visible === 'container-lista') {
    containerAdm.classList.add('hidden');
    containerForm.classList.add('hidden');
    containerLista.classList.remove('hidden');
}



/* Área de cadastro de Clientes */
class Cliente {
    constructor() {
        this.arrayClientes = [];

    }

    salvar() {
        let cliente = this.lerDados();

        if (this.validaCampos(cliente)) {
            this.adicionar(cliente);
        }
        this.listaTabela();
        this.limpar();


    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = "";
        for (let i = 0; i < this.arrayClientes.length; i++) {
            let tr = tbody.insertRow();

            let td_nome = tr.insertCell();
            let td_email = tr.insertCell();
            let td_cel = tr.insertCell();
            let td_editar = tr.insertCell();

            td_nome.innerText = this.arrayClientes[i].nomeCliente;
            td_email.innerText = this.arrayClientes[i].emailCliente;
            td_cel.innerText = this.arrayClientes[i].celCliente;

            let imgEdit = document.createElement('img');
            imgEdit.src = 'imagens/icones/editar.png';

            let imgDel = document.createElement('img');
            imgDel.src = 'imagens/icones/lixo.png';
            imgDel.setAttribute("onclick", "cliente.excluir(" + this.arrayClientes[i].nomeCliente + ")");

            td_editar.appendChild(imgEdit);
            td_editar.appendChild(imgDel);

        }
    }

    adicionar(cliente) {
        this.arrayClientes.push(cliente);
    }

    lerDados() {
        let cliente = {}

        cliente.nomeCliente = document.getElementById('txtnome').value;
        cliente.emailCliente = document.getElementById('email').value;
        cliente.celCliente = document.getElementById('txtcel').value;

        return cliente;
    }



    validaCampos(cliente) {
        let msg = "";

        if (cliente.nomeCliente == "") {
            msg += "- Informe seu Nome completo \n"
        }
        if (cliente.emailCliente == "") {
            msg += "- Informe seu E-mail \n"
        }
        if (msg != "") {
            alert(msg)
            return false
        }
        return true;

    }

    limpar() {
        document.getElementById('txtnome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('txtcel').value = '';
    }

    excluir(nomeCliente) {
        let indiceExclusao = this.arrayClientes.findIndex(cliente => cliente.nomeCliente === nomeCliente);

        if (indiceExclusao !== -1) {
            // Remover o cliente do array
            this.arrayClientes.splice(indiceExclusao, 1);
            this.listaTabela();
        } else {
            alert("Cliente não encontrado para exclusão.");
        }
    }
}
var cliente = new Cliente();

