
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // guarda a funçao padrao que é recarregar a pagina.

    
    const username = document.getElementById("username").value; // pega os valores que foi colocado do usuario
    const password = document.getElementById("password").value; // pega os valores que foi colocado da senha
    
    
    function selecionarPizza(nomePizza) {
        alert(nomePizza + " foi selecionada!");
        localStorage.setItem('pizzaSelecionada', nomePizza); // essa é a funçao para selecionar a pizza, porem rapazeada como nao tem um "banco de dados", 
        // para guardar as informaçoes, ela n ta sendo usada, nao sei como vou fazer pra habilitar ela dps kskaksak ---Abiny
    }

    
    if (username === "ospatetas" && password === "1234") { // esse código ve se ta certo o usuario e senha
        window.location.href = "menu.html"; // se o nome de usuario e senha tiver certo, ele leva ate a pagina do menu.
    } else {
        
        document.getElementById("error").textContent = "Usuário ou senha incorretos!"; // se der errado a senha ou o usuario vai aparecer isso.
        document.getElementById("error").style.display = "block"; //bom block é block ne, n sei se ta funcionando mas dps eu testo ---Abiny 
    }

    
    document.getElementById("registerButton").addEventListener("click", function() { // cria um evento pra clicar no botao de registro, fora da função de  (q seria enviar), 
        // para evitar a duplicação dos forms rapeize
        window.location.href = "registro.html"; // local onde o usuario vai ser redirecionado
    });
});

document.getElementById("registerButton").addEventListener("click", function() { //funçao de envio xD
    window.location.href = "registro.html"; 
});
