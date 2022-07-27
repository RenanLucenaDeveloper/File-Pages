export default function initChangePageStyle(styleOptions) {
  const cssnode = document.querySelector('[data-style="beta"]');

  function disaleStylesheet(node){
    node.disabled = true
  }
  function enableStylesheet(node) {
    node.disabled = false;
  }

  async function handleBeta(){
    const styleElement = document.querySelector('[data-alternative="true"]');
    if(styleElement){
      document.documentElement.removeChild(styleElement);
      enableStylesheet(cssnode);
    }
  }
  styleOptions[0].addEventListener('click', handleBeta);

  async function handleApple(){
    if(document.querySelector('[data-alternative="true"]')){
      document.documentElement.removeChild(document.querySelector('[data-alternative="true"]'));
    }

    const applePromise = fetch('../json/apple-style.json');
    const applejson = await (await applePromise).json();
    const appleText = applejson.style;
    const styleElement = document.createElement('style');
    styleElement.dataset.alternative = "true";

    disaleStylesheet(cssnode);
    styleElement.innerText = appleText;
    document.documentElement.appendChild(styleElement);
  }
  styleOptions[1].addEventListener('click', handleApple);

  async function handleDark(){
    if(document.querySelector('[data-alternative="true"]')){
      document.documentElement.removeChild(document.querySelector('[data-alternative="true"]'));
    }
    const darkPromise = fetch('../json/dark-style.json');
    const darkjson = await (await darkPromise).json();
    const darkText = darkjson.style;

    const styleElement = document.createElement('style');
    styleElement.dataset.alternative = "true";

    if(cssnode.disabled = false){
      disableStylesheet(cssnode);
    }
    styleElement.innerText = darkText;
    document.documentElement.appendChild(styleElement);
  }
  styleOptions[2].addEventListener('click', handleDark);
}