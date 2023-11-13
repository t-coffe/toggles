const switches = document.querySelectorAll('input[type="checkbox"]');

for (let i = 0; i < switches.length; i++) {
  switches[i].addEventListener("click", ()=> {
    switches[4].checked = !switches[4].checked

} );
};
