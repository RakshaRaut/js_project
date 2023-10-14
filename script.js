// alert('hey')
let circle = document.querySelector('#circle');
window.addEventListener('mousemove',function(details){
   console.log(details.clientX,details.clientY);
    let xValue = details.clientX;
    let yValue = details.clientY;

    setTimeout(function(){
circle.style.top=`${yValue}px`;
circle.style.left=`${xValue}px`;
    },100);

});