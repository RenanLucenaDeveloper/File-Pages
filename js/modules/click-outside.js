export default function initClickOutside(content, button, callback){
  const html = document.documentElement;
  const outside = 'data-outside';

  if(!content.hasAttribute(outside)){
    setTimeout(() => {html.addEventListener('click', clickOutside)});
    content.setAttribute(outside, '');
  }


  function clickOutside(e){
    if(!content.contains(e.target) || e.target == button){
      console.log('fechou')
      content.removeAttribute(outside, '');
      callback();
      html.removeEventListener('click', clickOutside);
    }
  }
  
}