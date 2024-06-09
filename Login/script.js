function togglePassword(){
    document
    .querySelectorAll(".eye")
    .forEach((eye) => 
        eye.classList.toggle("hide")
    )
    if(senha.getAttribute('type') == 'password'){
        senha.setAttribute('type', 'text')
    }else {
            senha.setAttribute('type', 'password')
    }
}










// Selecione o formulário e os campos de entrada
var form = document.querySelector('form');
var email = document.querySelector('#email');
var senha = document.querySelector('#senha');

// Adicione um ouvinte de evento ao formulário
form.addEventListener('submit', function(event) {
  // Evite o comportamento padrão do formulário
  event.preventDefault();

  // Verifique se o campo de email está vazio
  if (email.value === '') {
    alert('Por favor, preencha o campo de email.');
    return;
  }

  // Verifique se o campo de senha está vazio
  if (senha.value === '') {
    alert('Por favor, preencha o campo de senha.');
    return;
  }

  if (senha.value === '') {
    alert('Por favor, preencha o campo de senha.');
    return;
  }

  // Se os campos de email e senha não estiverem vazios, o formulário pode ser enviado
  form.submit();
});