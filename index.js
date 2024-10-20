function logar() {
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;
    let nome = ("Davi");
    if (login == "davi" && senha == 2014) {

        alert("Bem vindo " + nome);
        location.href = "exercicio tenis";
    }
}