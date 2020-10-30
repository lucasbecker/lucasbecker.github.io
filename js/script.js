const containerMain = document.querySelector('main');

var pathname = window.location.pathname; // Retornar só o path
var url      = window.location.href;     // Retorna a url completa
var anchorId = url.split("#")[url.split("#").length -1];

console.log(pathname);
console.log(url)


function home(){
  containerMain.innerHTML = `
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
      <a href="#portfolio" onclick="portfolio()">Portfolio</a>
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
  `;
}

function curriculum(){
  containerMain.innerHTML = `<a href="#" onclick="home()">Voltar</a><h1>Olá, visitante!</h1> <p>Ainda estamos trabalhando nesta página, desculpe o transtorno.</p>`;
}
function portfolio(){
  containerMain.innerHTML = `<a href="#" onclick="home()">Voltar</a><h1>Olá, visitante!</h1> <p>Ainda estamos trabalhando nesta página, desculpe o transtorno.</p>`;
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