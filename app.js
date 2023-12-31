const colors = ['red', 'orange', 'yellow', 'green', 'deepskyblue', 'deeppink']

var number = 4;
var index = 3;
var maxLvl=17;

const containerDiv = document.querySelector('.container');
const inputCode = document.querySelector('.input-code');

const inputs = document.querySelectorAll('textarea')
for (z = 0; z < inputs.length; z++) {
  setStyle(inputs[z]);
}

document.querySelector('.append').addEventListener('click', function() {
  if (number <= 6 && number > 0) {
    appendBox();
  }
})
document.querySelector('.remove').addEventListener('click', function() {
  if (index <= 6 && number > 3) {
    removeBox();
  }
})

function appendBox() {
  const colorDiv = document.createElement('div');
  const h3 = document.createElement('h3');

  h3.innerText = number;

  colorDiv.appendChild(h3);
  colorDiv.classList.add(colors[index]);
  colorDiv.classList.add('box');

  colorDiv.style.backgroundColor = colors[index];

  containerDiv.appendChild(colorDiv);


  const txtDiv = document.createElement('div');
  const txtArea = document.createElement('textarea');
  const p = document.createElement('p');

  p.innerText = '. ' + colors[index];
  txtArea.setAttribute('cols', '22')
  txtArea.setAttribute('rows', '2')
  txtArea.setAttribute('id', colors[index])

  txtDiv.classList.add('txt-area')

  txtDiv.appendChild(p)
  txtDiv.appendChild(txtArea)

  inputCode.appendChild(txtDiv)

  setStyle(document.querySelector('#' + colors[index]));

  number++;
  index++;
}
function removeBox() {
  inputCode.lastElementChild.remove();
  containerDiv.lastElementChild.remove();
  number--;
  index--;
}

function setStyle(a) {
  a.addEventListener('keyup', function(e) {
    var styles;
    var mainCSS = [];
    var ids = $(this).attr('id');
    console.log(this);
    console.log(ids)
    var valuess = this.value;
    styles = valuess.split('\n');
    for (k = 0; k < styles.length; k++) {
      mainCSS[k] = (splitUp(styles[k]));
    }
    for (j = 0; j < mainCSS.length; j++) {
      $('.' + ids).css(mainCSS[j][0], mainCSS[j][1]);
    }
  });
}
function splitUp(v) {
  var z = '';
  for (i = 0; i < v.length; i++) {
    if (v[i] != ' ') {
      z += v[i];
    }
  }
  var arr;
  var a = '';
  var b = '';
  arr = z.split(':');
  a = arr[0];
  b = arr[1].slice(0, -1);
  return [a, b];
}


var currLvl = 0;

var span = document.querySelector('.s-lvl');
var bkImage=document.querySelector('.under-lay');
document.querySelector('.right-arr').addEventListener('click', function() {
  if(currLvl < maxLvl){
    currLvl++;
  }
  span.innerText = currLvl;

  bkImage.style.backgroundImage='url(./images/level'+currLvl+'.jpg)';
});
document.querySelector('.left-arr').addEventListener('click', function() {
  
  if (currLvl > 0){
    currLvl--;
    if(currLvl <= 0){
      span.innerText = 'PRACTICE';
    }else{
      span.innerText = currLvl;
    }
  }
  bkImage.style.backgroundImage='url(./images/level'+currLvl+'.jpg)';
  console.log(currLvl);

});