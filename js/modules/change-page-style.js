export default function initChangePageStyle(styleOptions) {
  const cssnode = document.querySelector('[data-style]');

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

    const applePromise = fetch('../css/index-apple.css');
    const appleText = await (await applePromise).text();
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
    const darkPromise = fetch('../css/index-dark.css');
    const darkText = await (await darkPromise).text();
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