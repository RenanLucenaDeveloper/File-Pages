import initIndex from "./modules/index.js";
import initPagesCreator from "./modules/pages-creator.js";
import initPresentation from "./modules/presentation.js";

function index(){
  initIndex();

  const initButton = document.querySelector('[data-slide="init"]');

  initButton.addEventListener("click", () => {
    const div = document.querySelectorAll("div");
    const h1 = document.querySelectorAll("h1");
    div.forEach((item) => {
      item.remove();
    });
    h1.forEach((item) => {
      item.remove();
    });
  
    function pagesCreatorAndPresentation(){
      initPagesCreator();
      initPresentation();
    } pagesCreatorAndPresentation();

  });

} index();