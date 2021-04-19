Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90,
    
    constraints:{
        facing_mode:"environment"
    }
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img src="+data_uri+" id='snapshot'>";
    })
}

console.log("ml5 version", ml5.version);

classifier=ml5.imageClassifier("MobileNet", modelLoaded);

function modelLoaded(){
    console.log("model loaded");
}

function check(){
 img=document.getElementById("snapshot");
 classifier.classify(img, gotResult);
}

function gotResult(error, results){
if (error){
    console.error(error);

}
else{
    console.log(results);
    document.getElementById("object_name").innerHTML=results[0].label;
}
}