const TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
const fs = require('fs');

const text_to_speech = new TextToSpeechV1({
  username: '219ad0df-5230-44e7-906b-3ba3f8dfc38b',
  password: '5tGWQSIJOKMB'
});

const params = {
  text: 'Hello from IBM Watson',
  voice: 'pt-BR_IsabelaVoice', // Optional voice
  accept: 'audio/wav'
};

// Pipe the synthesized text to a file
text_to_speech.synthesize(params).pipe(fs.createWriteStream('output.wav'));