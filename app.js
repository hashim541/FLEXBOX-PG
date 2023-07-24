
var index=0;
$('textarea')[0].addEventListener('keyup', function(e) {
    
    var styles;
    var mainCSS=[];
  var ids=$(this).attr('id');
  var valuess=this.value;
  console.log(e.key);
  styles=valuess.split('\n');
    for(k=0;k<styles.length;k++){
            mainCSS[k]=(splitUp(styles[k]));
        
    }
  

  for(j=0;j<mainCSS.length;j++){
    $('.'+ids).css(mainCSS[j][0],mainCSS[j][1]);
  }

  
  
  console.log(mainCSS)
});




function cssStyle(val) {

}

function splitUp(v){
    var arr;
    var a='';
    var b='';
    arr=v.split(':');
    a=arr[0];
    b=arr[1].slice(0,-1);
    return [a,b] ;
}