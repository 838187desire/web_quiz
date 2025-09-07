const questions = [
    {
        topHeading: "क्रिया पर आधारित 25 बहुविकल्पीय प्रश्न part 2 (quiz_no.47)"
    },
    {
        question: "'गरमाना' कौन-सी नामधातु क्रिया है?",
        answers: shuffle([
            { text: "संज्ञा से", correct: false },
            { text: "सर्वनाम से", correct: false },
            { text: "विशेषण से", correct: true },
            { text: "क्रिया से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गर्म' (विशेषण) से 'गरमाना' क्रिया बनी है।"
    },
    {
        question: "'खाना खाकर सो गया।' में कौन-सी क्रिया है?",
        answers: shuffle([
            { text: "संयुक्त", correct: false },
            { text: "प्रेरणार्थक", correct: false },
            { text: "पूर्वकालिक", correct: true },
            { text: "नामधातु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खाकर' क्रिया मुख्य क्रिया 'सो गया' से पहले समाप्त हुई है।"
    },
    {
        question: "'वह गिर पड़ा।' इस वाक्य में कौन-सी क्रिया है?",
        answers: shuffle([
            { text: "अकर्मक", correct: false },
            { text: "सकर्मक", correct: false },
            { text: "संयुक्त", correct: true },
            { text: "पूर्वकालिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गिर' और 'पड़ा' मिलकर संयुक्त क्रिया बना रहे हैं।"
    },
    {
        question: "'उठना' किस प्रकार की क्रिया है?",
        answers: shuffle([
            { text: "अकर्मक", correct: true },
            { text: "सकर्मक", correct: false },
            { text: "प्रेरणार्थक", correct: false },
            { text: "नामधातु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उठना' क्रिया को कर्म की आवश्यकता नहीं होती।"
    },
    {
        question: "'लिखना' से प्रथम प्रेरणार्थक क्रिया क्या बनेगी?",
        answers: shuffle([
            { text: "लिखाना", correct: true },
            { text: "लिखवाना", correct: false },
            { text: "लिखना", correct: false },
            { text: "लिखा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मूल धातु 'लिख' से 'लिखाना' (आना प्रत्यय) प्रथम प्रेरणार्थक क्रिया है।"
    },
    {
        question: "'पढ़वाना' कौन-सी प्रेरणार्थक क्रिया है?",
        answers: shuffle([
            { text: "प्रथम प्रेरणार्थक", correct: false },
            { text: "द्वितीय प्रेरणार्थक", correct: true },
            { text: "संयुक्त", correct: false },
            { text: "नामधातु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पढ़ना' से 'पढ़ाना' (प्रथम) और 'पढ़वाना' (द्वितीय) प्रेरणार्थक क्रिया बनती है।"
    },
    {
        question: "'वह पढ़कर सो गया।' में 'सो गया' कौन-सी क्रिया है?",
        answers: shuffle([
            { text: "मुख्य क्रिया", correct: true },
            { text: "सहायक क्रिया", correct: false },
            { text: "पूर्वकालिक क्रिया", correct: false },
            { text: "नामधातु क्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सो गया' वाक्य की मुख्य क्रिया है, जबकि 'पढ़कर' पूर्वकालिक क्रिया है।"
    },
    {
        question: "'लठियाना' कौन-सी क्रिया है?",
        answers: shuffle([
            { text: "संयुक्त", correct: false },
            { text: "प्रेरणार्थक", correct: false },
            { text: "नामधातु", correct: true },
            { text: "पूर्वकालिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लाठी' (संज्ञा) से 'लठियाना' क्रिया बनी है।"
    },
    {
        question: "'खाना' किस प्रकार की क्रिया है?",
        answers: shuffle([
            { text: "अकर्मक", correct: false },
            { text: "सकर्मक", correct: true },
            { text: "पूर्वकालिक", correct: false },
            { text: "नामधातु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खाना' क्रिया का कर्म हो सकता है, जैसे- 'खाना खाना'।"
    },
    {
        question: "'चुप रहना' कौन-सी क्रिया है?",
        answers: shuffle([
            { text: "अकर्मक", correct: true },
            { text: "सकर्मक", correct: false },
            { text: "संयुक्त", correct: false },
            { text: "प्रेरणार्थक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रहना' क्रिया को कर्म की आवश्यकता नहीं है।"
    },
    {
        question: "'हंसना' किस प्रकार की क्रिया है?",
        answers: shuffle([
            { text: "अकर्मक", correct: true },
            { text: "सकर्मक", correct: false },
            { text: "प्रेरणार्थक", correct: false },
            { text: "पूर्वकालिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हंसना' क्रिया का कोई कर्म नहीं होता।"
    },
    {
        question: "'उठवाना' किस प्रकार की क्रिया है?",
        answers: shuffle([
            { text: "प्रथम प्रेरणार्थक", correct: false },
            { text: "द्वितीय प्रेरणार्थक", correct: true },
            { text: "संयुक्त", correct: false },
            { text: "नामधातु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उठना' से 'उठाना' (प्रथम) और 'उठवाना' (द्वितीय) प्रेरणार्थक क्रिया बनती है।"
    },
    {
        question: "'रोना' किस प्रकार की क्रिया है?",
        answers: shuffle([
            { text: "अकर्मक", correct: true },
            { text: "सकर्मक", correct: false },
            { text: "संयुक्त", correct: false },
            { text: "नामधातु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रोना' क्रिया का कोई कर्म नहीं होता।"
    },
    {
        question: "'वह खा रहा है।' इस वाक्य में 'खा रहा है' क्या है?",
        answers: shuffle([
            { text: "मुख्य क्रिया", correct: false },
            { text: "सहायक क्रिया", correct: false },
            { text: "संयुक्त क्रिया", correct: true },
            { text: "नामधातु क्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खा' मुख्य क्रिया है और 'रहा है' सहायक क्रिया है।"
    },
    {
        question: "'वह खेलकर सो गया।' में 'सो गया' क्या है?",
        answers: shuffle([
            { text: "पूर्वकालिक", correct: false },
            { text: "संयुक्त", correct: false },
            { text: "मुख्य", correct: true },
            { text: "सहायक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सो गया' वाक्य की मुख्य क्रिया है।"
    },
    {
        question: "'गरमाना' कौन-सी क्रिया है?",
        answers: shuffle([
            { text: "संयुक्त", correct: false },
            { text: "प्रेरणार्थक", correct: false },
            { text: "नामधातु", correct: true },
            { text: "पूर्वकालिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गर्म' (विशेषण) से 'गरमाना' क्रिया बनी है।"
    },
    {
        question: "'दौड़ना' किस प्रकार की क्रिया है?",
        answers: shuffle([
            { text: "अकर्मक", correct: true },
            { text: "सकर्मक", correct: false },
            { text: "प्रेरणार्थक", correct: false },
            { text: "नामधातु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दौड़ना' क्रिया का कोई कर्म नहीं होता।"
    },
    {
        question: "'लिखाना' किस प्रकार की क्रिया है?",
        answers: shuffle([
            { text: "प्रथम प्रेरणार्थक", correct: true },
            { text: "द्वितीय प्रेरणार्थक", correct: false },
            { text: "संयुक्त", correct: false },
            { text: "नामधातु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लिखना' से 'लिखाना' प्रथम प्रेरणार्थक क्रिया बनती है।"
    },
    {
        question: "'उठना' से द्वितीय प्रेरणार्थक क्रिया क्या बनेगी?",
        answers: shuffle([
            { text: "उठना", correct: false },
            { text: "उठवाना", correct: true },
            { text: "उठवना", correct: true },
            { text: "उठाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मूल धातु 'उठ' से 'उठवाना' द्वितीय प्रेरणार्थक क्रिया है।"
    },
    {
        question: "'गरजना' किस प्रकार की क्रिया है?",
        answers: shuffle([
            { text: "अकर्मक", correct: true },
            { text: "सकर्मक", correct: false },
            { text: "संयुक्त", correct: false },
            { text: "नामधातु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गरजना' क्रिया को कर्म की आवश्यकता नहीं होती।"
    },
    {
        question: "'हंसवाना' किस प्रकार की क्रिया है?",
        answers: shuffle([
            { text: "प्रथम प्रेरणार्थक", correct: false },
            { text: "द्वितीय प्रेरणार्थक", correct: true },
            { text: "संयुक्त", correct: false },
            { text: "नामधातु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हंसना' से 'हँसाना' (प्रथम) और 'हंसवाना' (द्वितीय) प्रेरणार्थक क्रिया बनती है।"
    },
    {
        question: "'वह रोने लगा।' इस वाक्य में कौन-सी क्रिया है?",
        answers: shuffle([
            { text: "अकर्मक", correct: false },
            { text: "सकर्मक", correct: false },
            { text: "संयुक्त", correct: true },
            { text: "प्रेरणार्थक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रोने' और 'लगा' मिलकर संयुक्त क्रिया बना रहे हैं।"
    },
    {
        question: "'चमकना' कौन-सी क्रिया है?",
        answers: shuffle([
            { text: "अकर्मक", correct: true },
            { text: "सकर्मक", correct: false },
            { text: "नामधातु", correct: false },
            { text: "प्रेरणार्थक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चमकना' क्रिया का कोई कर्म नहीं होता।"
    },
    {
        question: "'दिखाना' किस प्रकार की क्रिया है?",
        answers: shuffle([
            { text: "अकर्मक", correct: false },
            { text: "सकर्मक", correct: false },
            { text: "प्रथम प्रेरणार्थक", correct: true },
            { text: "द्वितीय प्रेरणार्थक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दिखना' से 'दिखाना' प्रथम प्रेरणार्थक क्रिया है।"
    },
    {
        question: "'चलाना' किस प्रकार की क्रिया है?",
        answers: shuffle([
            { text: "अकर्मक", correct: false },
            { text: "सकर्मक", correct: true },
            { text: "नामधातु", correct: false },
            { text: "प्रेरणार्थक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चलाना' क्रिया का कर्म हो सकता है, जैसे- 'गाड़ी चलाना'।"
    }
];

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }