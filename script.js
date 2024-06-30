
let myBulbLight = document.getElementById('myBulbLight');


let myBulbOnButton = document.getElementById('myBulbOnButton');
let myBulbOffButton = document.getElementById('myBulbOffButton');


myBulbOnButton.addEventListener('click', function() {
    myBulbLight.classList.add('on');
    document.body.style.backgroundColor = '#f0f8ff'; 
});


myBulbOffButton.addEventListener('click', function() {
    myBulbLight.classList.remove('on');
    document.body.style.backgroundColor = '#333'; 
});
