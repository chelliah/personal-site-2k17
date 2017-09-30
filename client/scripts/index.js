$(document).ready(function(){
    $("#clickable").on("click", (e) => {
        console.log('hiiii');
        console.log('byeeee')
        console.log(e);
        e.preventDefault();
    })
})