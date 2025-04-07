document.getElementById('cadastroForm').addEventListener('submit', function (e) {
   e.preventDefault();
 
   const nome = document.getElementById('nome').value;
   const cpf = document.getElementById('cpf').value;
   const tipo = document.getElementById('tipo').value;
   const orgao = document.getElementById('orgao').value;
   const andar = document.getElementById('andar').value;
   const responsavel = document.getElementById('responsavel').value;
   const entrada = document.getElementById('entrada').value;
   const saida = document.getElementById('saida').value;
 
   const tabela = document.getElementById('relatorioTabela').querySelector('tbody');
   const novaLinha = tabela.insertRow();
 
   novaLinha.innerHTML = `
       <td>${nome}</td>
       <td>${cpf}</td>
       <td>${tipo}</td>
       <td>${orgao}</td>
       <td>${andar}</td>
       <td>${responsavel}</td>
       <td>${entrada}</td>
       <td>${saida}</td>
       <td><button class="excluir-btn">Excluir</button></td>
   `;
 
   // Limpa o formulário
   this.reset();
 
   // Adiciona evento de exclusão ao botão
   novaLinha.querySelector('.excluir-btn').addEventListener('click', function () {
       if (confirm('Tem certeza que deseja excluir este cadastro?')) {
           novaLinha.remove();
       }
   });
 
   // Mensagem de sucesso
   const msg = document.getElementById('responseMessage');
   msg.textContent = 'Cadastro realizado com sucesso!';
   msg.style.color = 'green';
 });