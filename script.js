/*Navegação entre divs adm */
var btnCadastrar = document.querySelector('#btn-cadastro');

btnCadastrar.addEventListener('click', function(){

    var admContainer = document.getElementById('container-adm');

    admContainer.classList.toggle("hidden");

});

/* Área de cadastro de Clientes */
class Cliente{
    constructor(){
        this.arrayClientes = [];
        
    }

    salvar(){
        let cliente = this.lerDados();

        if(this.validaCampos(cliente)){
           this.adicionar(cliente);
        }
        this.listaTabela();
        this.limpar();
        
        
    }

    listaTabela(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = "";
        for(let i=0; i<this.arrayClientes.length; i++){
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

            td_editar.appendChild(imgEdit);
            td_editar.appendChild(imgDel);
            
        }
    }

    adicionar(cliente){
        this.arrayClientes.push(cliente);
    }

    lerDados(){
        let cliente = {}

        cliente.nomeCliente = document.getElementById('txtnome').value;
        cliente.emailCliente = document.getElementById('email').value;
        cliente.celCliente = document.getElementById('txtcel').value;

        return cliente;
    }

    excluir(){
        alert("Cliente Excluido!")
    }

    validaCampos(cliente){
        let msg = "";

        if(cliente.nomeCliente ==""){
            msg += "- Informe seu Nome completo \n"
        }
        if(cliente.emailCliente ==""){
            msg += "- Informe seu E-mail \n"
        }
        if(msg!=""){
            alert(msg)
            return false
        }
        return true;

    }

    limpar(){
        document.getElementById('txtnome').value ='';
        document.getElementById('email').value ='';
        document.getElementById('txtcel').value = '';
    }
}

var cliente = new Cliente();

