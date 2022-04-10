https://teachablemachine.withgoogle.com/models/[...]

Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:100

});


camera = document.getElementById("camera");

Webcam.attach('#camera');



function take_snapshot()
{
   Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id-"captured_img" src="'+data_uri+'"/>';

    });
}


console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/model.jason',modelLoaded);
function modelLoaded()
{
    console.log('ModelLoaded!');
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The predition is " + prediction_1;
   
    var utterThis = new SpeechSynthesisUtterance(speak_dat_1);
    synth.speak(utterThis);
}

function check() 
{ img = document.getElementById('captured_image'); 
classifier.classify(img, gotResult); }



function gotResult(error , results){
if (error) {
console.error(error);

} else {
console.log(results);
document.getElementById("result_gesture_name").innerHTML = result[0].label;
prediction_1 = result[0].label;

speak();
if(results[0].label == "victory"){
    document.getElementById("update_gesture").innerHTML = "&#9996;";

}

if(results[0].label == "amazing"){
    document.getElementById("update_gesture").innerHTML = "&#128076;";

}

if(results[0].label == "best"){
    document.getElementById("update_gesture").innerHTML = "&#128077;";

}
}
}