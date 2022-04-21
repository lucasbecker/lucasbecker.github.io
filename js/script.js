const containerMain = document.querySelector('main');
let url      = window.location.href;
let anchorId = url.split("#")[url.split("#").length -1];

function home(){
  window.document.title = 'Lucas Becker'
  containerMain.innerHTML = `
    <div class="home">
      <div class="name">
        <h1>Lucas Becker</h1>
      </div>
      <div class="description">
        <p>
          Desenvolvedor Web Full Stack<br>
          Freelancer
        </p>
      </div>
      <div class="nav">
        <a href="#curriculo" accesskey="h" title="Currículo" onclick="curriculum()">Currículo</a>
        <a href="#portfolio" accesskey="p" title="Portfólio" onclick="portfolio()">Portfólio</a>
        <a href="#contatos" accesskey="c" title="Contatos" onclick="contacts()">Contatos</a>
      </div>
      
    </div>
  `;
}

function curriculum(){
  window.document.title = 'Currículo - Lucas Becker'
  fetch(`data/curriculum.json`)
    .then( response => {
      if(!response.ok) throw new Error(`Deu pau na requisição do currículo! Status: ${response.status}`);
      return response.json();
    })
    .then( data => {

      let workWith = ``;
      let skills = ``;
      let works = ``;
      let academics = ``;
      let courses = ``;
      let workshops = ``;

      for(let tech of data.workWith){
        workWith += `<span class="skill">${tech}</span>`
      }

      for(let skill of data.skills){
        skills += `<span class="skill">${skill}</span>`
      }

      for(let work of data.professionalHistory){
        const workTechnologies = work.technologies.join(", ");
        works += `
          <li>
            <h4>${work.occupation}</h4>
            <p>${work.organization} (${work.date})</p>
            <p class="small">${work.description}</p>
            <p class="small">Tecnologias utilizadas: ${workTechnologies}</p>
          </li>
        `;
      }

      for(let academic of data.academicHistory){
        academics += `
          <li>
            <h4>${academic.name}</h4>
            <p>${academic.institution} (${academic.date})</p>
            <p class="small">${academic.description}</p>
          </li>
        `;
      }

      for(let course of data.courses){
        courses += `
          <li>
            <a href="${course.url}" target="_blank" >
              <strong>${course.name}</strong> - ${course.institution}
            </a>
          </li>
        `;
      }

      for(let workshop of data.workshops){
        workshops += `
          <li>
            <a href="${workshop.url}" target="_blank" >
              <strong>${workshop.name}</strong> - ${workshop.institution}
            </a>
          </li>
        `;
      }

      containerMain.innerHTML = `
        <div class="curriculum">
          <div class="back">
            <a href="#" onclick="home()" accesskey="v" title="Voltar"> <i class='bx bx-arrow-back'></i> Voltar</a>
          </div>
          <h1>Currículo</h1>
          <div class="content">
            <div class="left">
              <div>
                <h2>${data.name}</h2> 
                <p>${data.occupation}</p>
              </div>

              <div class="content-bottom">
                <div class="infos">
                  <h3>RESUMO</h3>
                  <p>${data.abstract}</p>
                </div>

                <div class="infos">
                  <h3>PRINCIPAIS HABILIDADES</h3>
                  <div class="skills">
                    ${workWith}
                  </div>

                  <h4>OUTRAS HABILIDADES</h4>
                  <div class="skills">
                    ${skills}
                  </div>
                </div>

                <div class="infos">
                  
                  <div class="contacts">
                    <h3>CONTATOS</h3>
                    <a href="mailto:${data.contacts.email}" target="_blank" accesskey="e" title="Email"><i class='bx bx-mail-send'></i></a>
                    <a href="${data.contacts.linkedin}" target="_blank" accesskey="l" title="Linkedin"><i class='bx bxl-linkedin-square' ></i></i></a>
                    <a href="${data.contacts.github}" target="_blank" accesskey="g" title="Github"><i class='bx bxl-github' ></i></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="right">
              <div>
                <h3>EXPERIÊNCIA PROFISSIONAL</h3>
                <ul>
                  ${works}
                </ul>
              </div>

              <div>
                <h3>FORMAÇÃO ACADÊMICA</h3>
                <ul>
                  ${academics}
                </ul>
              </div>

              <div>
                <h3>CURSOS</h3>
                <ul>
                  ${courses}
                </ul>
              </div>

              <div>
                <h3>WORKSHOPS</h3>
                <ul>
                  ${workshops}
                </ul>
              </div>
              <div class="download">
                <a href="./assets/curriculum.pdf" accesskey="d" title="Download" download="lucasbecker-curriculo">Download <i class='bx bxs-download' ></i></a>
              </div>
            </div>
          </div>
          
        </div>
      `;
    })
    .catch( error => {
      console.log(error.message);
    });
}

function portfolio(){
  window.document.title = 'Portfólio - Lucas Becker'
  fetch(`data/portfolio.json`)
    .then( response => {
      if(!response.ok) throw new Error(`Deu pau na requisição do portfolio! Status: ${response.status}`);
      return response.json();
    }).then(data => {
      let cards = ``;

      for(let project of data.projects){
        let techs = ``;

        for(let tech of project.technologies){
          techs += `<span class="tech">${tech}</span>`;
        }

        cards += `
          <div class="card">
            <img src="${project.cover}" />
            <div class="infos">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <div class="link-external">
              ${project.details
                ? `<a target="_blank" href="${project.details}"><i class='bx bx-plus'></i> Mais detalhes.</a>` 
                : ``
              }
              ${project.url
                ? `<a target="_blank" href="${project.url}"><i class='bx bx-link-external'></i> Veja em execução.</a>` 
                : ``
              }
            </div>
            <div class="techs">
              ${techs}
            </div>
            </div>
          </div>
        `;
      }

      containerMain.innerHTML = `
        <div class="portfolio">
          <div class="back">
            <a href="#" onclick="home()" accesskey="v" title="Voltar"> <i class='bx bx-arrow-back'></i> Voltar</a>
          </div>
          <h1>Portfólio</h1>
          <div class="content">
            <div class="top">
              <h2>Portfólio</h2>
              <p>Filtros em breve!</p>
            </div>
            <div class="bottom">
              <div class="container">
                ${cards}
              </div>
            </div>
          </div>
        </div>
      `;
    })
}

function contacts(){
  window.document.title = 'Contatos - Lucas Becker'
  containerMain.innerHTML = `
    <div class="page-contacts">
      <div class="back">
        <a href="#" onclick="home()" accesskey="v" title="Voltar"> <i class='bx bx-arrow-back'></i> Voltar</a>
      </div>
      <h1>Contatos</h1>
      <div class="content">
        <div class="left">
        
          <div class="links">
            <a href="https://www.linkedin.com/in/lucasbeckerfelisberto" accesskey="l" title="Linkedin" target="_blank">
              <i class='bx bxl-linkedin'></i>
            </a>
            <a href="https://github.com/lucasbecker" accesskey="g" title="GitHub" target="_blank">
              <i class='bx bxl-github' ></i>
            </a>
            <a href="https://codepen.io/lucasbecker" accesskey="c" title="CodePen" target="_blank">
              <i class='bx bxl-codepen' ></i>
            </a>
            <a href="https://twitter.com/lucasbckr" accesskey="t" title="Twitter" target="_blank">
              <i class='bx bxl-twitter' ></i>
            </a>
            <a href="https://www.instagram.com/lucas.bckr" accesskey="i" title="Instagram" target="_blank">
              <i class='bx bxl-instagram' ></i>
            </a>
          </div>

        </div>

        <div class="right">
          <h2>Entre em contato!</h2>
          <div class="form-wrapper">
            <form name="contact">
              <div class="input-block">
                <input type="text" id="name" name="name" autocomplete="off" required />
                <label for="name">Nome</label>
                <span class="error"></span>
              </div>
              <div class="input-block">
                <input type="email" id="email" name="email" autocomplete="off"  required />
                <label for="email">Email</label>
                <span class="error"></span>
              </div>
              <div class="input-block">
                <input type="text" id="subject" name="subject" autocomplete="off" required />
                <label for="subject">Assunto</label>
                <span class="error"></span>
              </div>
              <div class="input-block">
                <textarea type="text" id="message" name="message" autocomplete="off"  rows="5"  required></textarea>
                <label for="message">Mensagem</label>
                <span class="error"></span>
              </div>
              <div class="input-block">
                <button type="submit" id="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;
  
  const form = document.forms.contact;

  function validateField( field ) {
  
    function verifyErrors(){
      let foundError = false;
      for(let error in field.validity) {
        if(!field.validity.valid && field.validity[error])
          foundError = error;      
      }
      return foundError;
    }
  
    function customMessage( typeError ) {
      const messages = {
        email: {
          valueMissing: 'Email obrigatório!',
          typeMismatch: 'Por favor, insira um email válido!',
          
        },
        password: {
          valueMissing: 'Senha obrigatória!',
          tooShort: 'Senha muito curta!',
        },
        text: {
          valueMissing: 'Campo obrigatório!',
          tooShort: 'Faltam caracteres!',
        },
        textarea: {
          valueMissing: 'Campo obrigatório!',
          tooShort: 'Faltam caracteres!',
        }
        // acrescentar aqui os erros e mensagens conforme o necessário
      }
  
      return messages[field.type][typeError];
    }
  
    function setCustomMessage(message) {
      const spanError = field.parentNode.querySelector('span.error');
  
      if(message) {
        spanError.classList.add('active');
        spanError.innerHTML = message;
        form.classList.add('validate-error');
  
        const formError = document.querySelector('.validate-error');
        if(formError) {
          formError.addEventListener('animationend', e => {
            if(e.animationName === 'nono') {
              formError.classList.remove('validate-error');
            }
          })
        }
      } else {
        spanError.classList.remove('active');
        spanError.innerHTML = '';
      }
    }
  
    return function() {
      const error = verifyErrors();
      if (verifyErrors()) {
        const message = customMessage(error)
        field.style.borderColor = 'red';
        setCustomMessage(message);
      } else {
        field.style.borderColor = '#ffb800';
        setCustomMessage();
      }
    }
  }
  
  function customValidation( event ) {
    const field = event.target;
    if(field.value !== ''){
      field.classList.add('active');
    } else{ 
      field.classList.remove('active');
    }
    const validation = validateField(field);
    validation();
  }
  
  // Listeners 
  const fields = [...document.querySelectorAll('[required]')];
  fields.forEach( field => {
    field.addEventListener('invalid', event => {
      event.preventDefault();
      customValidation(event);
    });
    field.addEventListener('blur', customValidation);
  }) 

  form.addEventListener('submit', e => {
    e.preventDefault();
    
    // Executando evento de submit padrão
    // e.send();

    for (let field of form) {
      field.parentNode.style.animationName = 'move2';
      field.parentNode.style.animationDirection = 'reverse';
      field.parentNode.style.animationFillMode = 'forwards';
    }
    
    //ENVIO DO EMAIL
    console.log(`Nome: ${form.name.value} 
Email: ${form.email.value}
Assunto: ${form.subject.value}
Mensagem: ${form.message.value}`)

  const data = {
    name: form.name.value,
    _toreply: form.email.value,
    _subject: form.subject.value,
    message: form.message.value
  };

  function success() {
    const success = document.createElement('div');
    success.classList.add('success');
    success.innerHTML = `
      <h3>Email enviado com sucesso!</h3>
    `;
    form.appendChild(success);
    success.classList.add('success-show');
  }

  function error() {
    const success = document.createElement('div');
    success.classList.add('success');
    success.innerHTML = `
      <h3>Ops! Ocorreu um erro, tente novamente.</h3>
    `;
    form.appendChild(success);
    success.classList.add('success-show');
  }

  fetch('https://formspree.io/f/xpzojawo',{
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data),
  }).then(response => response.ok? success(): error())

  })

}

window.onload = function() { 
  switch(window.location.hash){
    case '#curriculo':
      curriculum();
      break;
    case '#portfolio':
      portfolio();
      break;
    case '#contatos':
      contacts();
      break;
    default:
      home();
  }
}

window.onhashchange = function() { 
  switch(window.location.hash){
    case '#curriculo':
      curriculum();
      break;
    case '#portfolio':
      portfolio();
      break;
    case '#contatos':
      contacts();
      break;
    default:
      home();
  }
}
