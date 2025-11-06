function voltar() {
  window.location.href = "index.html";
}

// Parte de cadastro dinâmica
const formCadastro = document.getElementById('formCadastro');
const cadBtns = document.querySelectorAll('.cad-btn');

if (cadBtns) {
  cadBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tipo = btn.dataset.type;
      formCadastro.classList.remove('hidden');
      let html = "";

      if (tipo === "paciente") {
        html = `
          <h3>Cadastro de Paciente</h3>
          <label>Nome:</label><input type="text" placeholder="Nome do paciente">
          <label>Data de Nascimento:</label><input type="date">
          <label>Tipo de Atendimento:</label>
          <select>
            <option>Consulta</option><option>Exame</option><option>Telemedicina</option>
          </select>
          <button type="submit">Salvar</button>
        `;
      } else if (tipo === "profissional") {
        html = `
          <h3>Cadastro de Profissional</h3>
          <label>Nome:</label><input type="text" placeholder="Nome do profissional">
          <label>Cargo:</label>
          <select><option>Médico</option><option>Enfermeiro</option><option>Técnico</option></select>
          <label>CRM/COREN:</label><input type="text">
          <button type="submit">Salvar</button>
        `;
      } else if (tipo === "admin") {
        html = `
          <h3>Administração Hospitalar</h3>
          <label>Número de Leitos:</label><input type="number" min="0">
          <label>Suprimentos Disponíveis:</label><textarea></textarea>
          <label>Relatório Financeiro:</label><input type="file">
          <button type="submit">Salvar</button>
        `;
      } else if (tipo === "tele") {
        html = `
          <h3>Cadastro Telemedicina</h3>
          <label>Tipo de Serviço:</label>
          <select><option>Consulta Online</option><option>Prescrição Digital</option></select>
          <label>Profissional Responsável:</label><input type="text">
          <button type="submit">Salvar</button>
        `;
      }

      formCadastro.innerHTML = html;
    });
  });

  formCadastro?.addEventListener('submit', e => {
    e.preventDefault();
    alert('Cadastro realizado com sucesso!');
    formCadastro.reset();
  });
}
