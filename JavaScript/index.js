let txt_area = document.getElementById('text-area');
let total_char = document.getElementById('character-count');
let rem_char = document.getElementById('character-remaining');

txt_area.addEventListener('keyup', ()=>{
    characterupdate();
});

function characterupdate(){
    total_char.innerText = txt_area.value.length;
    rem_char.innerText = txt_area.getAttribute('maxlength')-txt_area.value.length;
}

characterupdate();