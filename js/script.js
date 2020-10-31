const containerMain = document.querySelector('main');

var url      = window.location.href;     // Retorna a url completa
var anchorId = url.split("#")[url.split("#").length -1];


function home(){
  containerMain.innerHTML = `
    <div class="home">
      <div class="name">
        <h1>Lucas Becker</h1>
      </div>
      <div class="description">
        <p>
          Desenvolvedor Web Fullstack<br>
          Freelancer
        </p>
      </div>
      <div class="nav">
        <a href="#curriculo" onclick="curriculum()">Currículo</a>
        |
        <a href="#portfolio" onclick="portfolio()">Portfólio</a>
      </div>
      <div class="links">
        <a href="https://www.linkedin.com/in/lucasbeckerfelisberto" target="_blank">
          <i class='bx bxl-linkedin'></i>
        </a>
        <a href="https://github.com/lucasbecker" target="_blank">
          <i class='bx bxl-github' ></i>
        </a>
        <a href="https://codepen.io/lucasbecker" target="_blank">
          <i class='bx bxl-codepen' ></i>
        </a>
        <a href="https://twitter.com/lucasbckr" target="_blank">
          <i class='bx bxl-twitter' ></i>
        </a>
        <a href="https://www.instagram.com/lucas.bckr" target="_blank">
          <i class='bx bxl-instagram' ></i>
        </a>
      </div>
    </div>
  `;
}

function curriculum(){
  
  fetch(`assets/data.json`)
    .then( response => {
      if(!response.ok) throw new Error(`Deu pau na requisição! Status: ${response.status}`);
      return response.json();
    })
    .then( data => {

      let skills = ``;
      let works = ``;
      let academics = ``;
      let courses = ``;
      let workshops = ``;

      for(let skill of data.skills){
        skills += `<span class="skill">${skill}</span>`
      }

      for(let work of data.professionalHistory){
        works += `
          <li>
            <h4>${work.occupation}</h4>
            <p>${work.organization} (${work.date})</p>
            <p class="small">${work.description}</p>
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
            <a href="#" onclick="home()"> <i class='bx bx-arrow-back'></i> Voltar</a>
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
                  <h3>HABILIDADES</h3>
                  <div class="skills">
                    ${skills}
                  </div>
                </div>

                <div class="infos">
                  
                  <div class="contacts">
                  <h3>CONTATOS</h3>
                    <a href="mailto:${data.contacts.email}" target="_blank"><i class='bx bx-mail-send'></i></a>
                    <a href="${data.contacts.linkedin}" target="_blank"><i class='bx bxl-linkedin-square' ></i></i></a>
                    <a href="${data.contacts.github}" target="_blank"><i class='bx bxl-github' ></i></i></a>
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
                <a href="./assets/curriculo.pdf" download>Download <i class='bx bxs-download' ></i></a>
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
  containerMain.innerHTML = `
        <div class="portfolio">
          <div class="back">
            <a href="#" onclick="home()"> <i class='bx bx-arrow-back'></i> Voltar</a>
          </div>
          <h1>Portfólio</h1>
          <div class="content">
            <h2>PORTFÓLIO EM BREVE</h2>
            <p>Ainda estamos trabalhando nesta página, desculpe o transtorno.</p>
          </div>
        </div>
      `;
}
switch(anchorId){
  case 'curriculo':
    curriculum();
    break;
  case 'portfolio':
    portfolio();
    break;
  default:
    home();
}