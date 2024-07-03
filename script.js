let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

voiceSelect.addEventListener("change", () =>{
    speech.voice = voices[voiceSelect.value];
})

document.querySelector("button").addEventListener("click", () =>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

// const clearBtn = document.querySelector(".clear")
// const downloadBtn = document.querySelector(".download")
// const textarea = document.querySelector(".result")

// clearBtn.addEventListener("click", () =>{
//     result.innerhtml = "";
//     // downloadBtn.disabled = true;
// });


