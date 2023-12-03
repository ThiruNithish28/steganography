let encodeImg;
function ReadUrl(input){
    const reader = new FileReader();
    reader.onload = function(e){
        document.querySelector('.display_img').src = e.target.result;
        encodeImg = e.target.result;
    }
    reader.readAsDataURL(input.files[0])
}

function hideText(){
    console.log('type');
    document.querySelector('#encode_img').src = steg.encode(document.querySelector('#text').value,encodeImg) ;
}
