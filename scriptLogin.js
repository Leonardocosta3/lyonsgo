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

const adms = [
    {
        loginAdm: 'admin',
        senhaAdm: 'admin'
    },
    {
        loginAdm: 'admin2',
        senhaAdm: 'admin2'
    },
    {
        loginAdm: 'admin3',
        senhaAdm: 'admin4'
    }
];

const users = [
    {
        loginUser: 'user',
        senhaUser: 'user'
    },
    {
        loginUser: 'user2',
        senhaUser: 'user2'
    },
    {
        loginUser: 'user3',
        senhaUser: 'user3'
    }

];

class Clientes {
    constructor() {
        this.id = 1;
        this.arrayClientes = [];

    }

    entrar() {
       let clientes = this.lerDados();

       if(this.validaCampos(clientes)){
           if(this.validaUser() == true){

            containerLogin.classList.add('hidden');
            containerPa.classList.remove('hidden');
            containerRs.classList.add('hidden');

           }else if(this.validaAdm() == true){
            location.href = 'adm.html';
           }
       }

    }
    salvar() {

    }

    validaCampos(clientes) {
        let msg = "";

        if (clientes.login == "") {
            msg += "- Informe seu Email \n"
        }
        if (clientes.senha == "") {
            msg += "- Informe sua Senha \n"
        }
        if (msg != "") {
            alert(msg)
            return false
        }
        return true;
    }
    buscar() {

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
    
    validaUser(){
        var nomeUsuario = document.getElementById('email').value;
        var senhaUsuario = document.getElementById('password').value;
        
        for (let i = 0; i < users.length; i++) {
            const usuarioAtual = users[i];
    
            if (usuarioAtual.loginUser === nomeUsuario &&       usuarioAtual.senhaUser === senhaUsuario) {
                
                return true; 
            }
        }
        return false;
        
    }
    validaAdm() {
        var nomeAdm = document.getElementById('email').value;
        var senhaAdm = document.getElementById('password').value;

        
        for (let i = 0; i < adms.length; i++) {
            const admAtual = adms[i];
    
            if (admAtual.loginAdm === nomeAdm && admAtual.senhaAdm === senhaAdm) {
                
                return true;
            }
        }
        return false;
    }
    semSenha() {
        
    }
}
var clientes = new Clientes();
