var add = document.querySelector('.add-task');
var del = document.querySelector('.delete-task');
var des = document.querySelector('.todo-description');
var desInput = document.querySelector('#description');
var cat = document.querySelector('.category');
var catInput = document.querySelector('#category');
var datInput = document.querySelector('#due-date');
var dat = document.querySelector('.due-date');
var ent = document.querySelectorAll('.entry');
var chk = document.querySelectorAll('.checkbox');
var cdes = document.querySelectorAll('.cat-des');


add.addEventListener('mouseover', function(){
    add.style.backgroundColor = "#3d3d3d";
});

add.addEventListener('mouseout', function(){
    add.style.backgroundColor = "#5e666d";
});

del.addEventListener('mouseover', function(){
    del.style.backgroundColor = "#c61717";
});

del.addEventListener('mouseout',function(){
    del.style.backgroundColor = "#ff4102";
});

des.addEventListener('mouseover', function(){
    des.style.backgroundColor = "#f2f2f2";
    desInput.style.backgroundColor = "#f2f2f2";
});

des.addEventListener('mouseout', function(){
    des.style.backgroundColor = "white";
    desInput.style.backgroundColor = "white";
});

cat.addEventListener('mouseover', function(){
    cat.style.backgroundColor = "#f2f2f2";
    catInput.style.backgroundColor = "#f2f2f2";
});

cat.addEventListener('mouseout', function(){
    cat.style.backgroundColor = "white";
    catInput.style.backgroundColor = "white";
});

dat.addEventListener('mouseover', function(){
    dat.style.backgroundColor = "#f2f2f2";
    datInput.style.backgroundColor = "#f2f2f2";
});

dat.addEventListener('mouseout', function(){
    dat.style.backgroundColor = "white";
    datInput.style.backgroundColor = "white";
});

for(let i = 0;i<ent.length;i++){
    ent[i].addEventListener('mouseover', function(){
        ent[i].style.backgroundColor = "#f2f2f2";
    });
    
    ent[i].addEventListener('mouseout', function(){
        ent[i].style.backgroundColor = "white";
    });
    
};

function myFunction(){
    for(let i = 0;i<chk.length;i++){
        if(chk[i].checked==true){
            cdes[i].style.textDecoration = "line-through";
            cdes[i].style.textDecorationColor = "darkgrey";
        }
        if(chk[i].checked==false){
            cdes[i].style.textDecoration = "none";
        }
    }

}
