const questions = [
    {
        topHeading: "क्रिया पर आधारित 25 बहुविकल्पीय प्रश्न part 1 (quiz_no.46)"
    },
    {
        question: "'क्रिया' किसे कहते हैं?",
        answers: shuffle([
            { text: "किसी व्यक्ति, वस्तु या स्थान के नाम को", correct: false },
            { text: "जिस शब्द से किसी काम के करने या होने का बोध हो", correct: true },
            { text: "जो शब्द संज्ञा या सर्वनाम की विशेषता बताए", correct: false },
            { text: "जो शब्द संज्ञा के स्थान पर प्रयोग हो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क्रिया' वह विकारी शब्द है जिससे किसी कार्य के होने या किए जाने का बोध होता है।"
    },
    {
        question: "क्रिया का मूल रूप क्या कहलाता है?",
        answers: shuffle([
            { text: "कारक", correct: false },
            { text: "धातु", correct: true },
            { text: "विशेषण", correct: false },
            { text: "प्रत्यय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रिया के मूल रूप को 'धातु' कहते हैं, जैसे- 'पढ़ना' क्रिया की धातु 'पढ़' है।"
    },
    {
        question: "रचना की दृष्टि से क्रिया के कितने भेद होते हैं?",
        answers: shuffle([
            { text: "दो", correct: true },
            { text: "तीन", correct: false },
            { text: "चार", correct: false },
            { text: "पाँच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रचना की दृष्टि से क्रिया के दो भेद होते हैं: अकर्मक और सकर्मक क्रिया।"
    },
    {
        question: "जिस क्रिया का फल कर्म पर न पड़कर कर्ता पर पड़ता है, उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "सकर्मक क्रिया", correct: false },
            { text: "अकर्मक क्रिया", correct: true },
            { text: "संयुक्त क्रिया", correct: false },
            { text: "पूर्वकालिक क्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अकर्मक' का अर्थ है 'कर्म रहित'।<br><br><i class='fa-solid fa-angles-right icon'></i> जिस क्रिया को कर्म की आवश्यकता नहीं होती, वह अकर्मक क्रिया कहलाती है।"
    },
    {
        question: "'वह पढ़ता है।' इस वाक्य में कौन-सी क्रिया है?",
        answers: shuffle([
            { text: "अकर्मक क्रिया", correct: false },
            { text: "सकर्मक क्रिया", correct: true },
            { text: "प्रेरणार्थक क्रिया", correct: false },
            { text: "नामधातु क्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पढ़ना' एक सकर्मक क्रिया है क्योंकि इसका कर्म (पुस्तक, अखबार आदि) हो सकता है।"
    },
    {
        question: "'पक्षी आकाश में उड़ते हैं।' इस वाक्य में कौन-सी क्रिया है?",
        answers: shuffle([
            { text: "सकर्मक क्रिया", correct: false },
            { text: "अकर्मक क्रिया", correct: true },
            { text: "संयुक्त क्रिया", correct: false },
            { text: "पूर्वकालिक क्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उड़ना' क्रिया का फल सीधे कर्ता (पक्षी) पर पड़ रहा है, इसे किसी कर्म की आवश्यकता नहीं है।"
    },
    {
        question: "जिस क्रिया का फल कर्ता को छोड़कर कर्म पर पड़ता है, उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "अकर्मक क्रिया", correct: false },
            { text: "सकर्मक क्रिया", correct: true },
            { text: "संयुक्त क्रिया", correct: false },
            { text: "नामधातु क्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सकर्मक' का अर्थ है 'कर्म सहित'।<br><br><i class='fa-solid fa-angles-right icon'></i> जिस क्रिया को कर्म की आवश्यकता होती है, वह सकर्मक क्रिया कहलाती है।"
    },
    {
        question: "'मोहन खाना खाता है।' इस वाक्य में कौन-सी क्रिया है?",
        answers: shuffle([
            { text: "अकर्मक क्रिया", correct: false },
            { text: "सकर्मक क्रिया", correct: true },
            { text: "प्रेरणार्थक क्रिया", correct: false },
            { text: "पूर्वकालिक क्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस वाक्य में 'खाना' कर्म है और 'खाता है' क्रिया है, जिसका फल कर्म पर पड़ रहा है।"
    },
    {
        question: "जब कर्ता एक काम समाप्त कर तुरंत दूसरी क्रिया में लग जाता है, तो पहली क्रिया क्या कहलाती है?",
        answers: shuffle([
            { text: "नामधातु क्रिया", correct: false },
            { text: "प्रेरणार्थक क्रिया", correct: false },
            { text: "संयुक्त क्रिया", correct: false },
            { text: "पूर्वकालिक क्रिया", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पूर्वकालिक क्रिया मुख्य क्रिया से पहले समाप्त होती है, जैसे- 'वह पढ़कर सो गया।' यहाँ 'पढ़कर' पूर्वकालिक क्रिया है।"
    },
    {
        question: "'वह नहाकर खाना खाएगा।' इस वाक्य में 'नहाकर' कौन-सी क्रिया है?",
        answers: shuffle([
            { text: "संयुक्त क्रिया", correct: false },
            { text: "प्रेरणार्थक क्रिया", correct: false },
            { text: "पूर्वकालिक क्रिया", correct: true },
            { text: "नामधातु क्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नहाकर' क्रिया 'खाना खाएगा' मुख्य क्रिया से पहले समाप्त हो रही है।"
    },
    {
        question: "जब कर्ता स्वयं काम न करके किसी दूसरे को काम करने की प्रेरणा देता है, तो उस क्रिया को क्या कहते हैं?",
        answers: shuffle([
            { text: "संयुक्त क्रिया", correct: false },
            { text: "नामधातु क्रिया", correct: false },
            { text: "प्रेरणार्थक क्रिया", correct: true },
            { text: "पूर्वकालिक क्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस क्रिया में 'आना' या 'वाना' प्रत्यय लगता है, जैसे- 'लिखना' से 'लिखवाना'।"
    },
    {
        question: "'शिक्षक ने छात्र से पाठ पढ़वाया।' इस वाक्य में कौन-सी क्रिया है?",
        answers: shuffle([
            { text: "अकर्मक", correct: false },
            { text: "सकर्मक", correct: false },
            { text: "प्रेरणार्थक", correct: true },
            { text: "संयुक्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ शिक्षक स्वयं न पढ़कर छात्र को पढ़ने के लिए प्रेरित कर रहा है।"
    },
    {
        question: "जब दो या दो से अधिक क्रियाएँ मिलकर एक पूर्ण क्रिया बनाती हैं, तो उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "नामधातु क्रिया", correct: false },
            { text: "पूर्वकालिक क्रिया", correct: false },
            { text: "संयुक्त क्रिया", correct: true },
            { text: "प्रेरणार्थक क्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संयुक्त क्रिया में एक मुख्य क्रिया और एक सहायक क्रिया होती है, जैसे- 'वह पढ़ सकता है'।"
    },
    {
        question: "'वह पढ़ सकता है।' इस वाक्य में कौन-सी क्रिया है?",
        answers: shuffle([
            { text: "अकर्मक", correct: false },
            { text: "सकर्मक", correct: false },
            { text: "संयुक्त", correct: true },
            { text: "पूर्वकालिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पढ़' मुख्य क्रिया है और 'सकना' सहायक क्रिया है।<br><br><i class='fa-solid fa-angles-right icon'></i> दोनों मिलकर संयुक्त क्रिया बना रही हैं।"
    },
    {
        question: "संज्ञा, सर्वनाम या विशेषण शब्दों से बनने वाली क्रिया को क्या कहते हैं?",
        answers: shuffle([
            { text: "संयुक्त क्रिया", correct: false },
            { text: "प्रेरणार्थक क्रिया", correct: false },
            { text: "नामधातु क्रिया", correct: true },
            { text: "सहायक क्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैसे- 'हाथ' (संज्ञा) से 'हथियाना', 'बात' (संज्ञा) से 'बतियाना'।"
    },
    {
        question: "'लज्जा' से कौन-सी नामधातु क्रिया बनेगी?",
        answers: shuffle([
            { text: "लज्जना", correct: false },
            { text: "लज्जाना", correct: false },
            { text: "लजाना", correct: true },
            { text: "लज्जित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लज्जा' संज्ञा से 'लजाना' क्रिया बनती है।"
    },
    {
        question: "'चूहे बिल में हैं।' इस वाक्य में 'हैं' कौन-सी क्रिया है?",
        answers: shuffle([
            { text: "मुख्य क्रिया", correct: true },
            { text: "सहायक क्रिया", correct: false },
            { text: "संयुक्त क्रिया", correct: false },
            { text: "नामधातु क्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस वाक्य में 'हैं' क्रिया अकेले ही वाक्य का अर्थ पूरा कर रही है और कर्ता (चूहे) की स्थिति या अस्तित्व को बता रही है। जब 'होना' क्रिया (जैसे - है, हैं, था, थी) किसी वाक्य में अकेली आती है और किसी अन्य क्रिया की सहायता नहीं करती, तो वह मुख्य क्रिया कहलाती है।"
    },
    {
        question: "'धातु' में 'ना' प्रत्यय जोड़ने से कौन-सी क्रिया बनती है?",
        answers: shuffle([
            { text: "प्रेरणार्थक", correct: false },
            { text: "सामान्य", correct: true },
            { text: "संयुक्त", correct: false },
            { text: "नामधातु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैसे- 'लिख' + ना = लिखना।"
    },
    {
        question: "'सकर्मक क्रिया' का उदाहरण कौन-सा है?",
        answers: shuffle([
            { text: "बच्चा रोता है।", correct: false },
            { text: "मोहन सोता है।", correct: false },
            { text: "राम गेंद खेलता है।", correct: true },
            { text: "चिड़िया उड़ती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खेलता है' क्रिया का कर्म 'गेंद' है, इसलिए यह सकर्मक क्रिया है।"
    },
    {
        question: "'अकर्मक क्रिया' का उदाहरण कौन-सा है?",
        answers: shuffle([
            { text: "वह पढ़ता है।", correct: false },
            { text: "श्याम लिखता है।", correct: false },
            { text: "पक्षी उड़ते हैं।", correct: true },
            { text: "मोहन खाना खाता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उड़ना' क्रिया को कर्म की आवश्यकता नहीं है।"
    },
    {
        question: "'हँसना' किस प्रकार की क्रिया है?",
        answers: shuffle([
            { text: "सकर्मक", correct: false },
            { text: "अकर्मक", correct: true },
            { text: "प्रेरणार्थक", correct: false },
            { text: "पूर्वकालिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हँसना' क्रिया का कोई कर्म नहीं होता।"
    },
    {
        question: "'पीना' किस प्रकार की क्रिया है?",
        answers: shuffle([
            { text: "अकर्मक", correct: false },
            { text: "सकर्मक", correct: true },
            { text: "नामधातु", correct: false },
            { text: "प्रेरणार्थक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पीना' क्रिया का कर्म हो सकता है, जैसे- 'पानी पीना'।"
    },
    {
        question: "'लिखवाना' कौन-सी क्रिया है?",
        answers: shuffle([
            { text: "प्रथम प्रेरणार्थक", correct: false },
            { text: "द्वितीय प्रेरणार्थक", correct: true },
            { text: "संयुक्त", correct: false },
            { text: "नामधातु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लिखना' से प्रथम प्रेरणार्थक 'लिखाना' और द्वितीय प्रेरणार्थक 'लिखवाना' बनता है।"
    },
    {
        question: "'खाना खिलाना' कौन-सी क्रिया है?",
        answers: shuffle([
            { text: "प्रथम प्रेरणार्थक", correct: true },
            { text: "द्वितीय प्रेरणार्थक", correct: false },
            { text: "संयुक्त", correct: false },
            { text: "नामधातु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खाना' से 'खिलाना' प्रथम प्रेरणार्थक है।"
    },
    {
        question: "'संज्ञा' से बनी नामधातु क्रिया है:",
        answers: shuffle([
            { text: "पढ़ा ना", correct: false },
            { text: "चमकाना", correct: true },
            { text: "गरमाना", correct: false },
            { text: "दोहराना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चमक' (संज्ञा) से 'चमकाना' क्रिया बनी है।"
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