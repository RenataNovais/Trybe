<h1>Criando um formulário de currículo.</h1>
<ul>
  <li>Crie um arquivo HTML chamado <i>form.html</i> para o formulário.</li>
  <li>Caso julgue necessário, crie estilos CSS para o seu formulário, de acordo com a sua imaginação. Coloque-os em um arquivo <i>styles.css</i>.</li>
  <li>Crie também um arquivo script.js para seu código JavaScript.</li>
</ul>
<h3>Vamos criar um formulário de cadastro de currículo com base na especificação a seguir:</h3>
<ol>
  <li>Crie um <<b>fieldset</b>> para os seguintes dados pessoais:
    <ul>
      <li>Nome - Texto
        <ul>
          <li>Limite de 40 caracteres</li>
          <li>Campo obrigatório</li>
        </ul>
      </li>
      <li>Email - Texto
        <ul>
          <li>Limite de 50 caracteres</li>
          <li>Campo obrigatório</li>
          <li>Bonus: Utilize regex para validar o campo email.
            <ul>
              <li> Formato esperado: <b>texto@texto.texto.</b></li>
              <li> Dica: Para estudar como o <b>regex</b> funciona, utilize o link.</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>CPF - Texto
        <ul>
          <li>Limite de 11 caracteres</li>
          <li>Campo obrigatório</li>
        </ul>
      </li>
      <li>Endereço - Texto
        <ul>
          <li>Limite de 200 caracteres</li>
          <li>Campo obrigatório</li>
        </ul>
      </li>
      <li>Cidade - Texto
        <ul>
          <li>Limite de 28 caracteres</li>
          <li>Campo obrigatório</li>
        </ul>
      </li>
      <li>Estado - ComboBox
        <ul>
          <li>Todos os estados do Brasil</li>
          <li>Utilize estruturas de repetição via JavaScript para gerar os <<b>option</b>></li>
          <li>Campo obrigatório</li>
        </ul>
      </li>
      <li>Tipo - Radio Button
        <ul>
          <li>Casa, Apartamento</li>
          <li>Campo obrigatório</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>Crie outro <<b>fieldset</b>> para dados do seu último emprego
    <ul>
      <li>Resumo do currículo - TextArea
        <ul>
          <li>Limite de 1000 caracteres</li>
          <li>Campo obrigatório</li>
        </ul>
      </li>
      <li>Cargo - Texto
        <ul>
          <li>Limite de 40 caracteres</li>
          <li>Campo obrigatório</li>
        </ul>
      </li>
      <li>Descrição do cargo - Texto
        <ul>
          <li>Limite de 500 caracteres</li>
          <li>Campo obrigatório</li>
        </ul>
      </li>
      <li>Data de início - Texto
        <ul>
          <li>Verificar o formato da data <b>dd/mm/aaaa</b>.</li>
          <li>O dia deve ser > 0 e <= 31.</li>
          <li>O mês deve ser > 0 e <= 12.</li>
          <li>O ano não pode ser negativo.</li>
          <li>Caso alguma das condições for inválida no momento do envio do formulário, exibir mensagem de erro contextualizada.</li>
          <li>Campo obrigatório</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>Logo abaixo do formulário, crie um botão que:
    <ul>
      <li>Chame uma função JavaScript e interrompa o fluxo automático do form utilizando o <i>preventDefault()</i>.</li>
      <li>Execute as validações que foram pedidas ao longo da montagem do formulário.</li>
      <li>Monte uma <<b>div</b>> com o consolidado dos dados que foram inseridos no formulário.</li>
    </ul>
  </li>
  <li>Crie um botão Limpar que limpa todos os campos do formulário e a <<b>div</b>> com seu currículo também.</li>
</ol>
