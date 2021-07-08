Webcam.set({
width:310,
height:300,
image_format:'png',
png_quality:90,

   constraints:{
        facingMode:"environment"  
   }
});    
camera=document.getElementById("camera");
Webcam.attach("#camera");

function SnapLikeCroc() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'">';
    });
}