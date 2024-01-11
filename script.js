function cadPessoas(nome, email, celular){
    var tb = document.getElementById("tb-lista");
    var qtdLinhas = tb.ariaRowSpan.length;
    var linha = tb.insertRow(qtdLinhas);

    var cellCodigo = linha.insertCell(0)
    var cellNome = linha.insertCell(1);
    var cellEmail = linha.insertCell(2);
    var cellCelular = linha.insertCell(3);
   
    cellCodigo.innerHTML = qtdLinhas;
    cellNome.innerHTML = nome;
    cellEmail.innerHTML = email;
    cellCelular.innerHTML = celular;

}