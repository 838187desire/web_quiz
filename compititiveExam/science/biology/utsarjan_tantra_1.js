const questions = [
    {
        topHeading: "उत्सर्जन तंत्र पर आधारित 50 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. मानव शरीर का मुख्य उत्सर्जी अंग कौन सा है?",
        answers: shuffle([
            { text: "त्वचा", correct: false },
            { text: "फेफड़े", correct: false },
            { text: "यकृत", correct: false },
            { text: "वृक्क (गुर्दा)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृक्क (Kidney) रक्त को छानकर मूत्र का निर्माण करता है और शरीर से अधिकांश नाइट्रोजनी अपशिष्टों को बाहर निकालता है,<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए यह मुख्य उत्सर्जी अंग है।"
    },
    {
        question: "प्रश्न 2. वृक्क की कार्यात्मक और संरचनात्मक इकाई क्या है?",
        answers: shuffle([
            { text: "न्यूरॉन", correct: false },
            { text: "नेफ्रॉन (वृक्काणु)", correct: true },
            { text: "एल्वियोली", correct: false },
            { text: "माइटोकॉन्ड्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्येक वृक्क में लाखों सूक्ष्म नलिकाएं होती हैं जिन्हें नेफ्रॉन कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यहीं पर रक्त छनता है और मूत्र का निर्माण होता है।"
    },
    {
        question: "प्रश्न 3. मूत्र निर्माण की प्रक्रिया का पहला चरण क्या है?",
        answers: shuffle([
            { text: "स्रवण (Secretion)", correct: false },
            { text: "पुनरवशोषण (Reabsorption)", correct: false },
            { text: "परानिस्यंदन (Ultrafiltration)", correct: true },
            { text: "उत्सर्जन (Excretion)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परानिस्यंदन ग्लोमेरुलस में होता है, जहाँ उच्च दाब के कारण रक्त से जल, लवण, ग्लूकोज और यूरिया जैसे छोटे अणु छनकर बोमन कैप्सूल में आ जाते हैं।"
    },
    {
        question: "प्रश्न 4. ग्लोमेरुलस (केशिकागुच्छ) कहाँ पाया जाता है?",
        answers: shuffle([
            { text: "हेनले के लूप में", correct: false },
            { text: "संग्रह नलिका में", correct: false },
            { text: "बोमन कैप्सूल में", correct: true },
            { text: "मूत्रवाहिनी में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्लोमेरुलस, जो रक्त केशिकाओं का एक गुच्छा है, नेफ्रॉन के कप के आकार के भाग, बोमन कैप्सूल के अंदर स्थित होता है।"
    },
    {
        question: "प्रश्न 5. मनुष्य मुख्य रूप से किस नाइट्रोजनी अपशिष्ट का उत्सर्जन करता है?",
        answers: shuffle([
            { text: "अमोनिया", correct: false },
            { text: "यूरिक अम्ल", correct: false },
            { text: "यूरिया", correct: true },
            { text: "क्रिएटिनिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मनुष्य यूरियोटेलिक (Ureotelic) होते हैं, अर्थात वे अपने प्रोटीन चयापचय से उत्पन्न अमोनिया को यकृत में यूरिया में परिवर्तित करते हैं, जो कम विषैला होता है और मूत्र के साथ उत्सर्जित होता है।"
    },
    {
        question: "प्रश्न 6. शरीर में यूरिया का निर्माण कहाँ होता है?",
        answers: shuffle([
            { text: "वृक्क में", correct: false },
            { text: "यकृत में", correct: true },
            { text: "अग्न्याशय में", correct: false },
            { text: "प्लीहा में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यकृत (Liver) में 'यूरिया चक्र' या 'ऑर्निथिन चक्र' नामक प्रक्रिया द्वारा अत्यधिक विषैले अमोनिया को कम विषैले यूरिया में बदला जाता है।"
    },
    {
        question: "प्रश्न 7. मूत्र का पीला रंग किस वर्णक (pigment) की उपस्थिति के कारण होता है?",
        answers: shuffle([
            { text: "बिलीरुबिन", correct: false },
            { text: "हीमोग्लोबिन", correct: false },
            { text: "यूरोक्रोम", correct: true },
            { text: "मेलेनिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूरोक्रोम हीमोग्लोबिन के टूटने से बनने वाला एक अपशिष्ट उत्पाद है, जो रक्त द्वारा वृक्क तक पहुंचाया जाता है और मूत्र के माध्यम से उत्सर्जित होता है, जिससे मूत्र को पीला रंग मिलता है।"
    },
    {
        question: "प्रश्न 8. जल के पुनरवशोषण (reabsorption) को नियंत्रित करने वाला हार्मोन कौन सा है?",
        answers: shuffle([
            { text: "इंसुलिन", correct: false },
            { text: "एल्डोस्टेरोन", correct: false },
            { text: "वैसोप्रेसिन (ADH)", correct: true },
            { text: "थायरोक्सिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंटीडाययूरेटिक हार्मोन (ADH) या वैसोप्रेसिन, पीयूष ग्रंथि से स्रावित होता है और यह नेफ्रॉन की दूरस्थ नलिकाओं और संग्रह नलिकाओं की दीवारों को जल के लिए अधिक पारगम्य बनाता है, जिससे जल का पुनरवशोषण बढ़ जाता है।"
    },
    {
        question: "प्रश्न 9. वृक्क की पथरी (Kidney Stone) मुख्य रूप से किस रसायन से बनती है?",
        answers: shuffle([
            { text: "सोडियम क्लोराइड", correct: false },
            { text: "कैल्शियम ऑक्सालेट", correct: true },
            { text: "मैग्नीशियम सल्फेट", correct: false },
            { text: "यूरिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुर्दे की अधिकांश पथरियां कैल्शियम ऑक्सालेट नामक क्रिस्टलीय खनिज के जमाव के कारण बनती हैं।"
    },
    {
        question: "प्रश्न 10. जब वृक्क काम करना बंद कर देते हैं, तो रक्त को कृत्रिम रूप से छानने की प्रक्रिया क्या कहलाती है?",
        answers: shuffle([
            { text: "एंजियोप्लास्टी", correct: false },
            { text: "बाईपास सर्जरी", correct: false },
            { text: "अपोहन (Dialysis)", correct: true },
            { text: "सीटी स्कैन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डायलिसिस एक चिकित्सा प्रक्रिया है जो एक मशीन का उपयोग करके रक्त से अपशिष्ट उत्पादों और अतिरिक्त तरल पदार्थ को हटाती है, जब किसी व्यक्ति के गुर्दे यह कार्य करने में असमर्थ होते हैं।"
    },
    {
        question: "प्रश्न 11. नेफ्रॉन का कौन सा भाग ग्लूकोज और अमीनो एसिड का पूर्ण पुनरवशोषण करता है?",
        answers: shuffle([
            { text: "ग्लोमेरुलस", correct: false },
            { text: "समीपस्थ संवलित नलिका (PCT)", correct: true },
            { text: "हेनले का लूप", correct: false },
            { text: "दूरस्थ संवलित नलिका (DCT)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परानिस्यंदन के बाद, लगभग सभी उपयोगी पदार्थ जैसे ग्लूकोज, अमीनो एसिड, विटामिन और अधिकांश लवणों को समीपस्थ संवलित नलिका (Proximal Convoluted Tubule) में सक्रिय रूप से पुनः अवशोषित कर लिया जाता है।"
    },
    {
        question: "प्रश्न 12. हेनले का लूप (Loop of Henle) का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "रक्त को छानना", correct: false },
            { text: "मूत्र को सांद्र करना", correct: true },
            { text: "यूरिया का निर्माण करना", correct: false },
            { text: "हार्मोन स्रावित करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेनले का लूप मूत्र को सांद्र बनाने में महत्वपूर्ण भूमिका निभाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मेडुला में एक उच्च परासरणी प्रवणता (high osmotic gradient) बनाता है, जो संग्रह नलिका से जल के पुनरवशोषण में मदद करता है।"
    },
    {
        question: "प्रश्न 13. पक्षी और सरीसृप मुख्य रूप से किसके रूप में नाइट्रोजन का उत्सर्जन करते हैं?",
        answers: shuffle([
            { text: "यूरिया", correct: false },
            { text: "अमोनिया", correct: false },
            { text: "यूरिक अम्ल", correct: true },
            { text: "ग्वानिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये जीव यूरिकोटेलिक (Uricotelic) होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> वे यूरिक अम्ल का उत्सर्जन करते हैं जो लगभग अघुलनशील होता है और कम पानी के साथ एक पेस्ट के रूप में उत्सर्जित किया जा सकता है, यह पानी के संरक्षण के लिए एक अनुकूलन है।"
    },
    {
        question: "प्रश्न 14. एक सामान्य वयस्क व्यक्ति 24 घंटे में लगभग कितना मूत्र उत्सर्जित करता है?",
        answers: shuffle([
            { text: "0.5 लीटर", correct: false },
            { text: "1.5 लीटर", correct: true },
            { text: "3.0 लीटर", correct: false },
            { text: "5.0 लीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक स्वस्थ वयस्क प्रतिदिन लगभग 1 से 1.8 लीटर मूत्र का उत्सर्जन करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मात्रा तरल पदार्थ के सेवन, जलवायु और शारीरिक गतिविधि के आधार पर भिन्न हो सकती है।"
    },
    {
        question: "प्रश्न 15. वृक्क द्वारा प्रति मिनट छाने गए रक्त की मात्रा क्या कहलाती है?",
        answers: shuffle([
            { text: "कार्डियक आउटपुट", correct: false },
            { text: "ग्लोमेरुलर फिल्ट्रेशन रेट (GFR)", correct: true },
            { text: "टाइडल वॉल्यूम", correct: false },
            { text: "स्ट्रोक वॉल्यूम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> GFR वह दर है जिस पर ग्लोमेरुली द्वारा रक्त को छाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह वृक्क के कार्य का एक महत्वपूर्ण माप है।<br><br><i class='fa-solid fa-angles-right icon'></i> एक स्वस्थ व्यक्ति में यह लगभग 125 मिली/मिनट होता है।"
    },
    {
        question: "प्रश्न 16. मूत्र की प्रकृति सामान्यतः कैसी होती है?",
        answers: shuffle([
            { text: "अत्यधिक क्षारीय", correct: false },
            { text: "उदासीन", correct: false },
            { text: "हल्का अम्लीय", correct: true },
            { text: "अत्यधिक अम्लीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामान्य मूत्र का pH मान 4.5 से 8.0 के बीच होता है, लेकिन यह औसतन 6.0 के आसपास होता है, जो इसे हल्का अम्लीय बनाता है।"
    },
    {
        question: "प्रश्न 17. कौन सा अंग अमोनिया को यूरिया में परिवर्तित करता है?",
        answers: shuffle([
            { text: "वृक्क", correct: false },
            { text: "फेफड़े", correct: false },
            { text: "यकृत", correct: true },
            { text: "अग्न्याशय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यकृत ऑर्निथिन चक्र के माध्यम से शरीर के लिए हानिकारक अमोनिया को कम हानिकारक यूरिया में परिवर्तित करता है, जिसे बाद में गुर्दे द्वारा उत्सर्जित किया जाता है।"
    },
    {
        question: "प्रश्न 18. त्वचा (Skin) किस पदार्थ का उत्सर्जन करती है?",
        answers: shuffle([
            { text: "केवल जल", correct: false },
            { text: "जल, लवण और यूरिया", correct: true },
            { text: "केवल कार्बन डाइऑक्साइड", correct: false },
            { text: "केवल यूरिक अम्ल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> त्वचा पसीने के माध्यम से जल, कुछ मात्रा में नमक (NaCl) और थोड़ी मात्रा में यूरिया का उत्सर्जन करती है,<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इसे एक सहायक उत्सर्जी अंग भी माना जाता है।"
    },
    {
        question: "प्रश्न 19. फेफड़े (Lungs) मुख्य रूप से किसका उत्सर्जन करते हैं?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: false },
            { text: "यूरिया", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: true },
            { text: "जलवाष्प", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फेफड़े श्वसन प्रक्रिया के दौरान उत्पन्न होने वाले मुख्य गैसीय अपशिष्ट, कार्बन डाइऑक्साइड को शरीर से बाहर निकालते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> वे कुछ मात्रा में जलवाष्प का भी उत्सर्जन करते हैं।"
    },
    {
        question: "प्रश्न 20. वृक्क के बाहरी भाग को क्या कहते हैं?",
        answers: shuffle([
            { text: "मेडुला (Medulla)", correct: false },
            { text: "पेल्विस (Pelvis)", correct: false },
            { text: "कॉर्टेक्स (Cortex)", correct: true },
            { text: "हाइलम (Hilum)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृक्क की अनुप्रस्थ काट में, बाहरी दानेदार भाग को कॉर्टेक्स (वल्कुट) कहा जाता है और भीतरी धारीदार भाग को मेडुला (मध्यांश) कहा जाता है।"
    },
    {
        question: "प्रश्न 21. रक्त में यूरिया की मात्रा का अत्यधिक बढ़ जाना क्या कहलाता है?",
        answers: shuffle([
            { text: "एनीमिया", correct: false },
            { text: "यूरेमिया", correct: true },
            { text: "ग्लाइकोसुरिया", correct: false },
            { text: "कीटोन्यूरिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब गुर्दे ठीक से काम नहीं कर पाते हैं, तो वे रक्त से यूरिया को पूरी तरह से नहीं हटा पाते हैं, जिससे रक्त में यूरिया का स्तर खतरनाक रूप से बढ़ जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस स्थिति को यूरेमिया कहते हैं।"
    },
    {
        question: "प्रश्न 22. मूत्र में शर्करा (ग्लूकोज) की उपस्थिति किस रोग का संकेत है?",
        answers: shuffle([
            { text: "पीलिया (Jaundice)", correct: false },
            { text: "मधुमेह (Diabetes Mellitus)", correct: true },
            { text: "टाइफाइड", correct: false },
            { text: "मलेरिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मधुमेह में, रक्त में ग्लूकोज का स्तर इतना अधिक हो जाता है कि नेफ्रॉन उसे पूरी तरह से पुनः अवशोषित नहीं कर पाते हैं, जिससे ग्लूकोज मूत्र में आने लगता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस स्थिति को ग्लाइकोसुरिया कहते हैं।"
    },
    {
        question: "प्रश्न 23. एल्डोस्टेरोन (Aldosterone) हार्मोन का क्या कार्य है?",
        answers: shuffle([
            { text: "जल का पुनरवशोषण बढ़ाना", correct: false },
            { text: "सोडियम (Na+) का पुनरवशोषण बढ़ाना", correct: true },
            { text: "ग्लूकोज का पुनरवशोषण बढ़ाना", correct: false },
            { text: "रक्तचाप कम करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एल्डोस्टेरोन अधिवृक्क ग्रंथि (Adrenal Gland) से स्रावित होता है और यह दूरस्थ संवलित नलिका (DCT) में सोडियम आयनों के पुनरवशोषण और पोटेशियम आयनों के उत्सर्जन को बढ़ावा देता है, जिससे रक्तचाप नियंत्रित होता है।"
    },
    {
        question: "प्रश्न 24. अभिवाही और अपवाही धमनिकाएं (Afferent and Efferent arterioles) किससे संबंधित हैं?",
        answers: shuffle([
            { text: "हृदय से", correct: false },
            { text: "फेफड़ों से", correct: false },
            { text: "नेफ्रॉन से", correct: true },
            { text: "यकृत से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अभिवाही धमनिका (Afferent arteriole) रक्त को ग्लोमेरुलस में लाती है और अपवाही धमनिका (Efferent arteriole) रक्त को ग्लोमेरुलस से बाहर ले जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये दोनों नेफ्रॉन से संबंधित हैं।"
    },
    {
        question: "प्रश्न 25. जलीय जीव (जैसे मछलियां) मुख्य रूप से किसका उत्सर्जन करते हैं?",
        answers: shuffle([
            { text: "यूरिया", correct: false },
            { text: "यूरिक अम्ल", correct: false },
            { text: "अमोनिया", correct: true },
            { text: "अमीनो अम्ल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये जीव अमोनोटेलिक (Ammonotelic) होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अमोनिया अत्यधिक विषैला होता है लेकिन पानी में आसानी से घुलनशील होता है, इसलिए जलीय जीव इसे सीधे पानी में उत्सर्जित कर देते हैं।"
    },
    {
        question: "प्रश्न 26. बोमन कैप्सूल और ग्लोमेरुलस को मिलाकर क्या कहा जाता है?",
        answers: shuffle([
            { text: "हेनले का लूप", correct: false },
            { text: "वृक्क पेल्विस", correct: false },
            { text: "मैल्पीघियन पिंड (Malpighian body)", correct: true },
            { text: "संग्रह नलिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मैल्पीघियन पिंड या वृक्क कणिका (Renal Corpuscle) नेफ्रॉन का प्रारंभिक रक्त-छानने वाला घटक है, जिसमें ग्लोमेरुलस और बोमन कैप्सूल शामिल होते हैं।"
    },
    {
        question: "प्रश्न 27. अपवाही धमनिका (Efferent arteriole) का व्यास अभिवाही धमनिका (Afferent arteriole) से ______ होता है।",
        answers: shuffle([
            { text: "अधिक", correct: false },
            { text: "कम", correct: true },
            { text: "बराबर", correct: false },
            { text: "बहुत अधिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपवाही धमनिका का संकरा (कम) होना ग्लोमेरुलस के अंदर एक उच्च रक्तचाप बनाता है, जो परानिस्यंदन (ultrafiltration) की प्रक्रिया के लिए आवश्यक है।"
    },
    {
        question: "प्रश्न 28. मूत्र को वृक्क से मूत्राशय तक कौन ले जाता है?",
        answers: shuffle([
            { text: "मूत्रमार्ग (Urethra)", correct: false },
            { text: "मूत्रवाहिनी (Ureter)", correct: true },
            { text: "संग्रह नलिका (Collecting Duct)", correct: false },
            { text: "हेनले का लूप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्येक वृक्क से एक पतली पेशीय नली, जिसे मूत्रवाहिनी कहते हैं, निकलती है जो मूत्र को मूत्राशय तक पहुंचाती है।"
    },
    {
        question: "प्रश्न 29. डायलिसिस की प्रक्रिया किस सिद्धांत पर काम करती है?",
        answers: shuffle([
            { text: "परासरण (Osmosis)", correct: false },
            { text: "विसरण (Diffusion)", correct: true },
            { text: "वाष्पीकरण (Evaporation)", correct: false },
            { text: "अपकेंद्रण (Centrifugation)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डायलिसिस में, एक अर्ध-पारगम्य झिल्ली के पार विसरण के सिद्धांत का उपयोग किया जाता है, जहाँ रक्त से अपशिष्ट पदार्थ (जैसे यूरिया) अपनी उच्च सांद्रता से डायलिसिस द्रव की कम सांद्रता की ओर चले जाते हैं।"
    },
    {
        question: "प्रश्न 30. वह छिद्र क्या कहलाता है जहां से धमनी, शिरा और मूत्रवाहिनी वृक्क में प्रवेश करती या निकलती हैं?",
        answers: shuffle([
            { text: "कॉर्टेक्स", correct: false },
            { text: "पेल्विस", correct: false },
            { text: "हाइलम (Hilum)", correct: true },
            { text: "मेडुला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाइलम वृक्क की अवतल सतह पर एक खांचा होता है, जो इन संरचनाओं के लिए प्रवेश और निकास द्वार के रूप में कार्य करता है।"
    },
    {
        question: "प्रश्न 31. मूत्र में रक्त की उपस्थिति क्या कहलाती है?",
        answers: shuffle([
            { text: "यूरेमिया", correct: false },
            { text: "कीटोन्यूरिया", correct: false },
            { text: "हिमैटूरिया", correct: true },
            { text: "प्रोटीन्यूरिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिमैटूरिया वह चिकित्सा स्थिति है जिसमें मूत्र में लाल रक्त कोशिकाएं मौजूद होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह संक्रमण, पथरी या किसी अन्य वृक्क रोग का संकेत हो सकता है।"
    },
    {
        question: "प्रश्न 32. कौन सा जीव अपने उत्सर्जन के लिए ज्वाला कोशिकाओं (Flame Cells) का उपयोग करता है?",
        answers: shuffle([
            { text: "केंचुआ", correct: false },
            { text: "तिलचट्टा", correct: false },
            { text: "चपटे कृमि (जैसे प्लेनेरिया)", correct: true },
            { text: "हाइड्रा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चपटे कृमियों में उत्सर्जन और परासरण नियमन के लिए ज्वाला कोशिकाएं नामक विशेष कोशिकाएं होती हैं।"
    },
    {
        question: "प्रश्न 33. केंचुए का उत्सर्जी अंग क्या है?",
        answers: shuffle([
            { text: "मैल्पीघियन नलिकाएं", correct: false },
            { text: "ज्वाला कोशिकाएं", correct: false },
            { text: "वृक्क", correct: false },
            { text: "वृक्कक (Nephridia)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केंचुए और अन्य एनेलिडों में उत्सर्जन के लिए खंडों में व्यवस्थित कुंडलित नलिकाएं होती हैं जिन्हें वृक्कक (Nephridia) कहा जाता है।"
    },
    {
        question: "प्रश्न 34. रेनिन-एंजियोटेंसिन प्रणाली (Renin-Angiotensin System) मुख्य रूप से किसे नियंत्रित करती है?",
        answers: shuffle([
            { text: "रक्त शर्करा", correct: false },
            { text: "रक्तचाप और GFR", correct: true },
            { text: "शरीर का तापमान", correct: false },
            { text: "पाचन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब रक्तचाप या GFR कम हो जाता है, तो वृक्क रेनिन स्रावित करते हैं, जो एक ऐसी हार्मोन श्रृंखला को सक्रिय करता है जो अंततः रक्त वाहिकाओं को संकुचित करके और सोडियम पुनरवशोषण को बढ़ाकर रक्तचाप को बढ़ाती है।"
    },
    {
        question: "प्रश्न 35. मूत्र त्याग (Micturition) की प्रक्रिया को कौन नियंत्रित करता है?",
        answers: shuffle([
            { text: "स्वायत्त तंत्रिका तंत्र", correct: false },
            { text: "केंद्रीय तंत्रिका तंत्र", correct: true },
            { text: "परिधीय तंत्रिका तंत्र", correct: false },
            { text: "अनुकंपी तंत्रिका तंत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मूत्राशय के भरने पर खिंचाव रिसेप्टर्स केंद्रीय तंत्रिका तंत्र (CNS) को संकेत भेजते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> CNS मूत्राशय की मांसपेशियों को सिकोड़ने और स्फिंक्टर को शिथिल करने का संकेत देता है, जिससे मूत्र त्याग होता है।"
    },
    {
        question: "प्रश्न 36. डाययूरेसिस (Diuresis) का क्या अर्थ है?",
        answers: shuffle([
            { text: "मूत्र का कम उत्पादन", correct: false },
            { text: "मूत्र का बढ़ा हुआ उत्पादन", correct: true },
            { text: "मूत्र में ग्लूकोज की उपस्थिति", correct: false },
            { text: "मूत्र में प्रोटीन की उपस्थिति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डाययूरेसिस एक ऐसी स्थिति है जिसमें शरीर सामान्य से अधिक मात्रा में मूत्र का उत्पादन करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> चाय और कॉफी जैसे पेय पदार्थ मूत्रवर्धक (diuretic) होते हैं।"
    },
    {
        question: "प्रश्न 37. मूत्राशय (Urinary Bladder) की दीवारें किस प्रकार की पेशी से बनी होती हैं?",
        answers: shuffle([
            { text: "कंकाल पेशी", correct: false },
            { text: "हृदय पेशी", correct: false },
            { text: "चिकनी पेशी", correct: true },
            { text: "ऐच्छिक पेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मूत्राशय की दीवारें चिकनी (अनैच्छिक) पेशियों से बनी होती हैं, जो फैलकर मूत्र का भंडारण करती हैं और सिकुड़कर उसे बाहर निकालती हैं।"
    },
    {
        question: "प्रश्न 38. कीटों (जैसे तिलचट्टा) का मुख्य उत्सर्जी अंग क्या है?",
        answers: shuffle([
            { text: "वृक्कक", correct: false },
            { text: "ज्वाला कोशिकाएं", correct: false },
            { text: "मैल्पीघियन नलिकाएं", correct: true },
            { text: "हरी ग्रंथियां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कीटों में उत्सर्जन के लिए मैल्पीघियन नलिकाएं होती हैं जो हीमोलिम्फ से नाइट्रोजनी अपशिष्टों को अवशोषित करती हैं और उन्हें आंत में डाल देती हैं।"
    },
    {
        question: "प्रश्न 39. ADH की कमी से कौन सा रोग होता है?",
        answers: shuffle([
            { text: "मधुमेह मेलेटस", correct: false },
            { text: "मधुमेह इन्सिपिडस", correct: true },
            { text: "कुशिंग सिंड्रोम", correct: false },
            { text: "एडिसन रोग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ADH की कमी के कारण, वृक्क जल का पुनरवशोषण नहीं कर पाते हैं, जिससे अत्यधिक पतला मूत्र का बार-बार उत्सर्जन होता है और बहुत अधिक प्यास लगती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे मधुमेह इन्सिपिडस कहते हैं।"
    },
    {
        question: "प्रश्न 40. ग्लोमेरुलर निस्यंद (Glomerular filtrate) में क्या अनुपस्थित होता है?",
        answers: shuffle([
            { text: "ग्लूकोज", correct: false },
            { text: "यूरिया", correct: false },
            { text: "रक्त कोशिकाएं और प्रोटीन", correct: true },
            { text: "अमीनो अम्ल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परानिस्यंदन झिल्ली रक्त कोशिकाओं और प्लाज्मा प्रोटीन जैसे बड़े अणुओं को गुजरने से रोकती है, इसलिए वे सामान्य रूप से ग्लोमेरुलर निस्यंद में नहीं पाए जाते हैं।"
    },
    {
        question: "प्रश्न 41. शरीर में जल संतुलन (Water Balance) को बनाए रखने में कौन सा अंग महत्वपूर्ण भूमिका निभाता है?",
        answers: shuffle([
            { text: "यकृत", correct: false },
            { text: "हृदय", correct: false },
            { text: "वृक्क", correct: true },
            { text: "फेफड़े", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृक्क आवश्यकतानुसार मूत्र को सांद्र या तनु करके शरीर के तरल पदार्थ और इलेक्ट्रोलाइट्स के संतुलन (परासरण नियमन) को बनाए रखने के लिए जिम्मेदार होते हैं।"
    },
    {
        question: "प्रश्न 42. उस स्थिति को क्या कहते हैं जब मूत्र में कीटोन बॉडीज (Ketone Bodies) की मात्रा बढ़ जाती है?",
        answers: shuffle([
            { text: "ग्लाइकोसुरिया", correct: false },
            { text: "कीटोन्यूरिया", correct: true },
            { text: "प्रोटीन्यूरिया", correct: false },
            { text: "हिमैटूरिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कीटोन्यूरिया अक्सर अनियंत्रित मधुमेह या लंबे समय तक उपवास की स्थिति में होता है, जब शरीर ऊर्जा के लिए वसा को तोड़ता है, जिससे कीटोन बॉडीज का निर्माण होता है।"
    },
    {
        question: "प्रश्न 43. पसीना आने का मुख्य उद्देश्य क्या है?",
        answers: shuffle([
            { text: "अपशिष्टों का उत्सर्जन", correct: false },
            { text: "शरीर के तापमान का नियमन", correct: true },
            { text: "त्वचा को नम रखना", correct: false },
            { text: "रक्तचाप बढ़ाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि पसीने से कुछ अपशिष्ट उत्सर्जित होते हैं, इसका प्राथमिक कार्य वाष्पीकरण के माध्यम से शरीर को ठंडा करके शरीर के तापमान को नियंत्रित करना है।"
    },
    {
        question: "प्रश्न 44. वृक्क प्रत्यारोपण (Kidney Transplant) में, दाता और प्राप्तकर्ता के बीच क्या मेल खाना महत्वपूर्ण है?",
        answers: shuffle([
            { text: "आयु और लिंग", correct: false },
            { text: "रक्त समूह और ऊतक प्रकार (HLA)", correct: true },
            { text: "वजन और ऊंचाई", correct: false },
            { text: "आहार की आदतें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्यारोपित अंग की अस्वीकृति (rejection) के जोखिम को कम करने के लिए, दाता और प्राप्तकर्ता के बीच रक्त समूह और मानव ल्यूकोसाइट एंटीजन (HLA) का मिलान करना अत्यंत महत्वपूर्ण है।"
    },
    {
        question: "प्रश्न 45. नेफ्रॉन के किस भाग में अधिकांश चयनात्मक पुनरवशोषण होता है?",
        answers: shuffle([
            { text: "बोमन कैप्सूल", correct: false },
            { text: "समीपस्थ संवलित नलिका (PCT)", correct: true },
            { text: "हेनले के लूप की अवरोही भुजा", correct: false },
            { text: "संग्रह नलिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लगभग 65-70% जल, इलेक्ट्रोलाइट्स और सभी कार्बनिक पोषक तत्वों का पुनरवशोषण समीपस्थ संवलित नलिका (PCT) में ही हो जाता है।"
    },
    {
        question: "प्रश्न 46. कौन सा पदार्थ रक्त के परासरणी दाब (osmotic pressure) को बनाए रखने में मदद करता है?",
        answers: shuffle([
            { text: "यूरिया", correct: false },
            { text: "एल्ब्यूमिन (प्रोटीन)", correct: true },
            { text: "ग्लूकोज", correct: false },
            { text: "हीमोग्लोबिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्लाज्मा में मौजूद एल्ब्यूमिन जैसे बड़े प्रोटीन ग्लोमेरुलस में रक्त के कोलॉइडी परासरणी दाब को बनाए रखते हैं, जो परानिस्यंदन का विरोध करता है और रक्त के आयतन को नियंत्रित करता है।"
    },
    {
        question: "प्रश्न 47. ऑर्निथिन चक्र (Ornithine cycle) का अंतिम उत्पाद क्या है?",
        answers: shuffle([
            { text: "अमोनिया", correct: false },
            { text: "अमीनो एसिड", correct: false },
            { text: "यूरिया", correct: true },
            { text: "यूरिक एसिड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑर्निथिन चक्र, जो यकृत में होता है, अमोनिया और कार्बन डाइऑक्साइड को मिलाकर यूरिया का संश्लेषण करता है।"
    },
    {
        question: "प्रश्न 48. यदि किसी व्यक्ति का GFR बहुत कम हो जाए, तो इसका क्या अर्थ है?",
        answers: shuffle([
            { text: "वृक्क ठीक से काम नहीं कर रहे हैं", correct: true },
            { text: "व्यक्ति बहुत अधिक पानी पी रहा है", correct: false },
            { text: "रक्त में शर्करा अधिक है", correct: false },
            { text: "व्यक्ति को उच्च रक्तचाप है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्लोमेरुलर फिल्ट्रेशन रेट (GFR) में कमी इस बात का संकेत है कि गुर्दे रक्त को प्रभावी ढंग से छानने की अपनी क्षमता खो रहे हैं, जो वृक्क रोग का एक लक्षण है।"
    },
    {
        question: "प्रश्न 49. पोडोसाइट्स (Podocytes) नामक विशेष कोशिकाएं कहाँ पाई जाती हैं?",
        answers: shuffle([
            { text: "ग्लोमेरुलस की दीवार में", correct: false },
            { text: "बोमन कैप्सूल की आंतरिक दीवार में", correct: true },
            { text: "हेनले के लूप में", correct: false },
            { text: "संग्रह नलिका में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पोडोसाइट्स बोमन कैप्सूल की आंतरिक परत बनाती हैं और ग्लोमेरुलस केशिकाओं के चारों ओर लिपटकर छोटे-छोटे निस्पंदन स्लिट (filtration slits) बनाती हैं जो परानिस्यंदन में मदद करते हैं।"
    },
    {
        question: "प्रश्न 50. वृक्क द्वारा स्रावित एरिथ्रोपोइटिन (Erythropoietin) हार्मोन का क्या कार्य है?",
        answers: shuffle([
            { text: "रक्तचाप बढ़ाना", correct: false },
            { text: "जल का पुनरवशोषण करना", correct: false },
            { text: "लाल रक्त कोशिकाओं (RBC) के निर्माण को प्रोत्साहित करना", correct: true },
            { text: "कैल्शियम के स्तर को नियंत्रित करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब शरीर में ऑक्सीजन का स्तर कम होता है, तो वृक्क एरिथ्रोपोइटिन स्रावित करते हैं, जो अस्थि मज्जा (Bone Marrow) को अधिक लाल रक्त कोशिकाओं का उत्पादन करने के लिए उत्तेजित करता है।"
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