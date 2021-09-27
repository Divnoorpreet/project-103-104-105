var prediction="";

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");

function capture_img(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_img' src='"+data_uri+"'>";
    });
}

console.log(ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/4Is8ueTRs/model.json",modelloaded);

function modelloaded(){
    console.log("model is loaded");
}

function speak(){
    if(family=="mother"){
        var synth=window.speechSynthesis;
        speak_data1="The family member is mother";
        var utter_this=new SpeechSynthesisUtterance(speak_data1);
        synth.speak(utter_this);
    }
    if(family=="sister"){
        var synth2=window.speechSynthesis;
        speak_data2="The family member is sister";
        var utter_this2=new SpeechSynthesisUtterance(speak_data2);
        synth2.speak(utter_this2);
    }
     if(family=="brother"){
         var synth3=window.speechSynthesis;
         speak_data3="The family member is brother";
         var utter_this3=new SpeechSynthesisUtterance(speak_data3);
         synth3.speak(utter_this3);
    }
}

function check(){
    var img=document.getElementById("captured_img");
    classifier.classify(img,got_result);
}

function got_result(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_family_name").innerHTML=results[0].label;
        family=results[0].label;
         speak();
    }
       
}