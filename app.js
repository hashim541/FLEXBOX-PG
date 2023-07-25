const colors=['red','orange','yellow','green','deepskyblue','blue','deeppink','darkmagenta']

var number=4;
var index=3;

const containerDiv=document.querySelector('.container');
const inputCode=document.querySelector('.input-code');



document.querySelector('.append').addEventListener('click',function(){
  if(number <= 8 && number>0){
    appendBox();
  }
})
document.querySelector('.remove').addEventListener('click',function(){
  if(index <= 8 && number>3){
    removeBox();
  }
})

function appendBox(){
  const colorDiv=document.createElement('div');
  const h3=document.createElement('h3');

  h3.innerText=number;

  colorDiv.appendChild(h3);
  colorDiv.classList.add('box');
  colorDiv.style.backgroundColor=colors[index];

  containerDiv.appendChild(colorDiv);

  
  const txtDiv=document.createElement('div');
  const txtArea=document.createElement('textarea');
  const p=document.createElement('p');

  p.innerText='. '+colors[index];
  txtArea.setAttribute('cols','22')
  txtArea.setAttribute('rows','2')
  txtArea.setAttribute('id',colors[index])

  txtDiv.classList.add('txt-area')

  txtDiv.appendChild(p)
  txtDiv.appendChild(txtArea)

  inputCode.appendChild(txtDiv)

  number++;
  index++;
}
function removeBox(){
  inputCode.lastElementChild.remove();
  containerDiv.lastElementChild.remove();
  number--;
  index--;
}


$('textarea').keyup( function(e) {
    
  var styles;
  var mainCSS=[];
  var ids=$(this).attr('id');
  console.log(ids)
  var valuess=this.value;
  styles=valuess.split('\n');
  for(k=0;k<styles.length;k++){
    mainCSS[k]=(splitUp(styles[k])); 
  }
  for(j=0;j<mainCSS.length;j++){
    $('.'+ids).css(mainCSS[j][0],mainCSS[j][1]);
  }
});

function splitUp(v){
  var z='';
  for(i=0;i<v.length;i++){
    if(v[i]!=' '){
      z+=v[i];
    }
  }
    var arr;
    var a='';
    var b='';
    arr=z.split(':');
    a=arr[0];
    b=arr[1].slice(0,-1);
    return [a,b] ;
}