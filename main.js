const switches = document.querySelectorAll('input[type="checkbox"]');

for (let i = 0; i < switches.length; i++) {
  switches[i].addEventListener("click", ()=> {
    let r;
    do {
      r = getRandomInt(0,switches.length)
    } while (r === i);
    
    switches[r].checked = !switches[r].checked;
} );
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min))+ 
  min;
}