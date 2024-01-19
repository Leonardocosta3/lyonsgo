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
        
        if (this.validaCampos(clientes)) {
           if(this.comsenha()) {
            location.href = 'editar.html';
           } else if (this.validaUser() === true) {
                this.limparCampos();
                containerLogin.classList.add('hidden');
                containerPa.classList.remove('hidden');
                containerRs.classList.add('hidden');

            } else if (this.validaAdm() === true) {
                location.href = 'adm.html';
            } else{
                alert('Senha Inválida!')
            }
        }
    }
    
    salvar() {
        if(this.validaCampoSenha()){
            if(this.novaSenha()){
               
            }
            containerLogin.classList.remove('hidden');
            containerPa.classList.add('hidden');
            containerRs.classList.add('hidden');
        }
        
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
        const nomeUsuario = document.getElementById("email").value;
        const novaSenha = document.getElementById("newpassword").value;
        const confirmaSenha = document.getElementById("newpassword2").value;

        if (novaSenha !== confirmaSenha) {
            alert("As senhas não coincidem. Por favor, confirme a senha corretamente.");
            return;
        }

        // Encontrar o índice do usuário no array
        const index = users.findIndex(loginUser => loginUser.loginUser === nomeUsuario);

        // Verificar se o usuário foi encontrado
        if (index !== -1) {
            // Atualizar a senha
            users[index].senhaUser = novaSenha;
            alert("Senha atualizada com sucesso!");
        } else {
            alert("Usuário não encontrado!");
        }
    }
    validaCampoSenha(){
        const novaSenha = document.getElementById("newpassword").value;
        const confirmaSenha = document.getElementById("newpassword2").value;

        let msg = "";

        if (novaSenha == "") {
            msg += "- Informe uma nova Senha \n"
        }
        if (confirmaSenha == "") {
            msg += "- Confirme sua nova Senha \n"
        }
        if (msg != "") {
            alert(msg)
            return false
        }
        return true;
    }

    validaUser() {
        var nomeUsuario = document.getElementById('email').value;
        var senhaUsuario = document.getElementById('password').value;

        for (let i = 0; i < users.length; i++) {
            const usuarioAtual = users[i];

            if (usuarioAtual.loginUser === nomeUsuario && usuarioAtual.senhaUser === senhaUsuario) {

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
    comsenha(){
        var novaSenha = document.getElementById("newpassword").value;
        var nomeUsuario = document.getElementById('email').value;
        var confirmaNova = document.getElementById('password').value;
        
        for (let i = 0; i < users.length; i++) {
            const usuarioAtual = users[i];

            if (novaSenha == '') {
                return false;
            }else if (confirmaNova != novaSenha){
                return false;
            }else if (usuarioAtual.loginUser === nomeUsuario && usuarioAtual.senhaUser === novaSenha){
                return true;
            }
        }

    }
    limparCampos(){
        document.getElementById('newpassword').value = '';
        document.getElementById('newpassword2').value = '';
    }
}
var clientes = new Clientes();
