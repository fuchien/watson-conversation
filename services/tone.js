const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

const tone_analyzer = null

module.exports = () => {
    if (!tone_analyzer) {

        let tone = new ToneAnalyzerV3({
            username: '33b5e08e-889a-464f-8ada-c7dcd56c3b19',
            password: 'awrZkGLMpIpq',
            version_date: '2017-09-13'
        });
            
        // let tone = new ToneAnalyzerV3({
        //     username: username,
        //     password: password,
        //     version_date: '2017-09-13'
        // });
        
        return tone
    }

    return tone_analyzer
}

// function ToneAnalyzer() {

//     this.pegarDados = (text) => {

//         return new Promise((resolve, reject) => {

//             let tone_analyzer = new ToneAnalyzerV3({
//                 username: '33b5e08e-889a-464f-8ada-c7dcd56c3b19',
//                 password: 'awrZkGLMpIpq',
//                 version_date: '2017-09-13'
//             });
            
//             let params = {
//                 // Get the text from the JSON file.
//                 text: text,
//                 tones: 'emotion'
//             };

//             tone_analyzer.tone(params, function(error, response) {
                
//                 if (error) {
    
//                     console.log('error:', error);
//                     reject(error)
//                 }
//                 else {
    
//                     console.log(JSON.stringify(response, null, 2));
//                     resolve(response)
//                 }
//             });
//         })
//     }
// }

// module.exports = () => {
    
//     return new ToneAnalyzer()
// }