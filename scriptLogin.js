/*Navegação entre divs login */

var containerLogin = document.getElementById('container-login');
var containerPa = document.getElementById('container-pa');
var containerRs = document.getElementById('container-rs');

var btnEntrar = document.getElementById('login-btn-entrar');
var btnSemsenhalo = document.getElementById('login-semsenha');

var btnSalvar = document.getElementById('button-salvar');
var btnSemsenhapa = document.getElementById('pa-semsenha');

var btnRs = document.getElementById('recuperar-senha');

btnSemsenhalo.addEventListener('click', function () {
    containerLogin.classList.add('hidden');
    containerPa.classList.add('hidden');
    containerRs.classList.remove('hidden');

});

btnSalvar.addEventListener('click', function () {
    containerLogin.classList.remove('hidden');
    containerPa.classList.add('hidden');
    containerRs.classList.add('hidden');

});

btnSemsenhapa.addEventListener('click', function () {
    containerLogin.classList.add('hidden');
    containerPa.classList.add('hidden');
    containerRs.classList.remove('hidden');

});

btnRs.addEventListener('click', function () {
    containerLogin.classList.remove('hidden');
    containerPa.classList.add('hidden');
    containerRs.classList.add('hidden');

});


class Clientes {
    constructor() {
        this.id = 1;
        this.arrayClientes = [];

    }

    entrar() {
       let clientes = this.lerDados();

       if(this,this.validaCampos(clientes)){
            alert('salvar')
       }

       console.log(clientes);
    }

    validaCampos(clientes) {
        let msg = "";

        if (clientes.login == "") {
            msg += "- Informe seu Nome completo \n"
        }
        if (clientes.senha == "") {
            msg += "- Informe seu E-mail \n"
        }
        if (msg != "") {
            alert(msg)
            return false
        }
        return true;
    }
    adicionar() {

    }
    lerDados() {
        let clientes = {}

        clientes.id = this.id;
        clientes.login = document.getElementById('email').value;
        clientes.senha = document.getElementById('password').value;


        return clientes;
    }

    novaSenha() {

    }
    salvar() {

    }
    validaUser() {

    }
    validaAdm() {

    }
    semSenha() {
        alert('sem senha')
    }
}
var clientes = new Clientes();
