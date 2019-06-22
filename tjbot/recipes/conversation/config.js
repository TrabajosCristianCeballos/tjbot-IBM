/*
 * User-specific configuration
 * IMPORTANT NOTES:
 *  Please ensure you do not interchange your username and password.
 *  Your username is the longer value: 36 digits, including hyphens
 *  Your password is the smaller value: 12 characters
 */

exports.workspaceId = 'd8ec601b-0397-4d97-9d33-15975ea53fea'; // replace with the workspace identifier of your conversation

// Set this to false if your TJBot does not have a camera.
exports.hasCamera = true;

// set up TJBot's configuration
exports.tjConfig = {
    log: {
        level: 'verbose'
    },
    // Changing the robot name will change the attention word
    robot: {
        name: 'tee jay bot'
    }
};

// Create the credentials object for export
exports.credentials = {};

// Watson Assistant
// https://www.ibm.com/watson/services/conversation/
exports.credentials.assistant = {
    // username/password authentication -- if your service uses this method,
    // uncomment these two lines and comment the 'apikey' line below
    // username: 'apikey',
    // password: 'OZwwaiducwv_iNfBwltiZPE4jXzuiu1cscW3MqA5L7Ay',
    // IAM authentication -- fill in your API key below
    apikey: 'OZwwaiducwv_iNfBwltiZPE4jXzuiu1cscW3MqA5L7Ay',
    // service URL -- change this if the URL is different in your authentication credentials
    url: 'https://gateway.watsonplatform.net/assistant/api/'
};

// Watson Speech to Text
// https://www.ibm.com/watson/services/speech-to-text/
exports.credentials.speech_to_text = {
    // username/password authentication -- if your service uses this method,
    // uncomment these two lines and comment the 'apikey' line below
    // username: 'apikey',
    // password: 'OZwwaiducwv_iNfBwltiZPE4jXzuiu1cscW3MqA5L7Ay',
    // IAM authentication -- fill in your API key below
    apikey: 'LR_kijRQE1iBadt0_1yDB9HJtOu_KMQYagjjv2r3n_DC',
    // service URL -- change this if the URL is different in your authentication credentials
    url: 'https://stream.watsonplatform.net/speech-to-text/api/'
};

// Watson Text to Speech
// https://www.ibm.com/watson/services/text-to-speech/
exports.credentials.text_to_speech = {
    // username/password authentication -- if your service uses this method,
    // uncomment these two lines and comment the 'apikey' line below
    // username: 'apikey',
    // password: 'OZwwaiducwv_iNfBwltiZPE4jXzuiu1cscW3MqA5L7Ay',
    // IAM authentication -- fill in your API key below
    apikey: 'FvF1qkwyk8XkBEPGM96gQoApQRF5HJ4qbP6d021iAZxv',
    // service URL -- change this if the URL is different in your authentication credentials
    url: 'https://stream.watsonplatform.net/text-to-speech/api/'
};

// Watson Visual Recognition
// https://www.ibm.com/watson/services/visual-recognition/
exports.credentials.visual_recognition = {
    // username/password authentication -- if your service uses this method,
    // uncomment these two lines and comment the 'apikey' line below
    // username: 'apikey',
    // password: 'OZwwaiducwv_iNfBwltiZPE4jXzuiu1cscW3MqA5L7Ay',
    // IAM authentication -- fill in your API key below
    apikey: 'FILL IN YOUR API KEY HERE',
    // service URL -- change this if the URL is different in your authentication credentials
    url: 'https://gateway.watsonplatform.net/visual-recognition/api'
};