'use strict';

{
 const btn =document.getElementById('btn');
 //クリックした後の動作
 btn.addEventListener('click',() => {
     const n =Math.random();

     if(n<0.3){
         btn.textContent='大吉';
     }else if(n<0.7){
        btn.textContent='中吉';
     }else if(n<0.9){
        btn.textContent='吉';
     }else{
        btn.textContent='凶';
     }
    
 });


}