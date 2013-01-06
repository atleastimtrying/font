var loaded = function(){
  var letters = document.getElementsByClassName('font');
  for(i = 0, l = letters.length; i < l; ++i){
    letters[i].innerHTML += '<span></span><span></span><span></span><span></span>';
  }
};
window.addEventListener('load', loaded, false);