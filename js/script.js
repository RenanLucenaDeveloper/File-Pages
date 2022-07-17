import initPagesCreator from "./modules/pages-creator.js";
import initPresentation from "./modules/presentation.js";

function initIndex() {

  const styleButton = document.querySelector("#dropdown-button");
  const initButton = document.querySelector('[data-slide="init"]');
  const acceptCookies = document.querySelector('[data-cookies="accept"]');
  const styleOptions = document.querySelectorAll("#dropdown-content li");
  
  styleButton.addEventListener("click", () => {
    styleButton.parentElement.classList.toggle('ativo');
  });

  initButton.addEventListener("click", () => {
    const div = document.querySelectorAll("div");
    const h1 = document.querySelectorAll("h1");
    div.forEach((item) => {
      item.remove();
    });
    h1.forEach((item) => {
      item.remove();
    });
    
    function initPagesCreatorAndPresentation(){
      initPagesCreator();
      initPresentation();
    } initPagesCreatorAndPresentation();
  });

  function initPrepareOptions() {
    styleOptions[0].classList.add("ativo");

    const correct = document.createElement("img");
    correct.setAttribute("src", "./img/ativo.svg");

    styleOptions[0].appendChild(correct);

    styleOptions[0].__proto__.changePageStyle = function () {
      console.log(styleOptions[0].__proto__);
    }; styleOptions[0].__proto__.changePageStyle();

    styleOptions.forEach((e) => {
      e.addEventListener("click", () => {
        let activeElement = document.querySelector("#dropdown-content .ativo");

        activeElement.classList.remove("ativo");

        activeElement.removeChild(correct);

        e.classList.add("ativo");
        e.appendChild(correct);
      });
    });
  }
  initPrepareOptions();

  acceptCookies.addEventListener("click", () => {
    acceptCookies.innerText = "ACEITO";
    console.log("cookies accepted");
  });
}
initIndex();