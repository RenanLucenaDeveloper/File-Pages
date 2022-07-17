export default function initPagesCreator() {
  function PageCreate(numero) {
    //cria a pagina e o conteudo
    let pageSection = document.createElement("section");
    let pageContent = document.createElement("h1");
    pageContent.innerText = `PAGE ${numero}`;

    //prepara os atributos da pagina
    pageSection.id = `page-${numero}`;
    pageSection.setAttribute("data", `page-${numero}`);

    //adiciona a pagina ao body
    pageSection.appendChild(pageContent);
    document.body.appendChild(pageSection);
  }

  const numberOfPages = 4;

  let i = 1;
  while (i <= numberOfPages) {
    let itemNumber = i;
    new PageCreate(i);
    i++;
  }
}

