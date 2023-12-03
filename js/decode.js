let decode_img;
const hideText = document.querySelector('.hide_text');
function ReadUrl(input){
    const reader = new FileReader();
    reader.onload = function(e){
        decode_img = e.target.result;
    }
    reader.readAsDataURL(input.files[0])
}

function decode_msg(){
    hideText.innerHTML = steg.decode(decode_img);
    console.log(steg.decode(decode_img));
}