const textInput = document.getElementById('text-input');  
const voiceSelect = document.getElementById('voice-select');  
const speakButton = document.getElementById('speak-btn');  

let voices = [];  

const populateVoiceList = () => {  
    voices = window.speechSynthesis.getVoices();  
    voiceSelect.innerHTML = '';  

    voices.forEach((voice) => {  
        const option = document.createElement('option');  
        option.value = voice.name;  
        option.textContent = `${voice.name} (${voice.lang})`;  
        voiceSelect.appendChild(option);  
    });  
};  

const speak = () => {  
    const text = textInput.value;  
    const utterance = new SpeechSynthesisUtterance(text);  
    const selectedVoice = voiceSelect.value;  

    // Set the voice  
    utterance.voice = voices.find((voice) => voice.name === selectedVoice);  
    
    // Speak the text  
    window.speechSynthesis.speak(utterance);  
};  

// Populate the voice list on load  
window.speechSynthesis.onvoiceschanged = populateVoiceList;  

// Event listeners  
speakButton.addEventListener('click', speak);