var lion = ""
var cat = ""
var dog = ""
var cow = ""

function startidentification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    soundmodel = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/PbvHn7dWf/", modelloaded);
}

function modelloaded() {
    console.log("Model has Loaded");
    soundmodel.classify(gotResults);

}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
    }
}