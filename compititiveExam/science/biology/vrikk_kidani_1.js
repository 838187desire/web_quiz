const questions = [
    {
        topHeading: "वृक्क (किडनी) की संरचना और कार्यप्रणाली पर आधारित 50 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. मानव शरीर में वृक्क (किडनी) का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "रक्त का शुद्धिकरण और मूत्र निर्माण", correct: true },
            { text: "भोजन का पाचन", correct: false },
            { text: "हार्मोन का उत्पादन", correct: false },
            { text: "ऑक्सीजन का परिवहन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृक्क का प्राथमिक कार्य रक्त से अपशिष्ट उत्पादों और अतिरिक्त तरल को छानकर मूत्र के रूप में बाहर निकालना है।"
    },
    {
        question: "प्रश्न 2. वृक्क की कार्यात्मक इकाई (Functional Unit) क्या है?",
        answers: shuffle([
            { text: "न्यूरॉन (Neuron)", correct: false },
            { text: "नेफ्रॉन (Nephron)", correct: true },
            { text: "एल्वियोलाई (Alveoli)", correct: false },
            { text: "कोशिका (Cell)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्येक वृक्क में लाखों छोटी निस्यंदन इकाइयाँ होती हैं जिन्हें नेफ्रॉन या वृक्काणु कहा जाता है, जो मूत्र निर्माण का कार्य करती हैं।"
    },
    {
        question: "प्रश्न 3. एक सामान्य वयस्क मनुष्य के वृक्क का वजन लगभग कितना होता है?",
        answers: shuffle([
            { text: "50-70 ग्राम", correct: false },
            { text: "120-170 ग्राम", correct: true },
            { text: "250-300 ग्राम", correct: false },
            { text: "400-500 ग्राम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक स्वस्थ वयस्क में प्रत्येक किडनी का वजन लगभग 120 से 170 ग्राम के बीच होता है।"
    },
    {
        question: "प्रश्न 4. नेफ्रॉन के किस भाग में रक्त का निस्यंदन (filtration) होता है?",
        answers: shuffle([
            { text: "हेनले का लूप (Henle's loop)", correct: false },
            { text: "समीपस्थ कुंडलित नलिका (Proximal Convoluted Tubule)", correct: false },
            { text: "ग्लोमेरुलस (Glomerulus)", correct: true },
            { text: "संग्राहक नलिका (Collecting Duct)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्लोमेरुलस, जो केशिकाओं का एक गुच्छा है, में उच्च दाब के कारण रक्त से जल, लवण, ग्लूकोज और यूरिया जैसे पदार्थ छनकर बोमन कैप्सूल में आ जाते हैं।"
    },
    {
        question: "प्रश्न 5. बोमन कैप्सूल (Bowman's Capsule) किसका भाग है?",
        answers: shuffle([
            { text: "यकृत", correct: false },
            { text: "फेफड़ा", correct: false },
            { text: "हृदय", correct: false },
            { text: "नेफ्रॉन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बोमन कैप्सूल नेफ्रॉन का एक कप के आकार का हिस्सा है जो ग्लोमेरुलस को घेरता है और छने हुए द्रव (filtrate) को एकत्र करता है।"
    },
    {
        question: "प्रश्न 6. मूत्र निर्माण का सही क्रम क्या है?",
        answers: shuffle([
            { text: "स्राव → पुनरवशोषण → निस्यंदन", correct: false },
            { text: "निस्यंदन → पुनरवशोषण → स्राव", correct: true },
            { text: "पुनरवशोषण → निस्यंदन → स्राव", correct: false },
            { text: "निस्यंदन → स्राव → पुनरवशोषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मूत्र निर्माण तीन चरणों में होता है: पहले ग्लोमेरुलस में निस्यंदन, फिर नलिकाओं में आवश्यक पदार्थों का पुनरवशोषण, और अंत में अपशिष्ट पदार्थों का स्राव।"
    },
    {
        question: "प्रश्न 7. मानव मूत्र का पीला रंग किस वर्णक (pigment) के कारण होता है?",
        answers: shuffle([
            { text: "बिलीरुबिन (Bilirubin)", correct: false },
            { text: "हीमोग्लोबिन (Hemoglobin)", correct: false },
            { text: "यूरोक्रोम (Urochrome)", correct: true },
            { text: "मेलेनिन (Melanin)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूरोक्रोम हीमोग्लोबिन के टूटने से बनने वाला एक अपशिष्ट उत्पाद है, जो वृक्क द्वारा उत्सर्जित होता है और मूत्र को उसका पीला रंग प्रदान करता है।"
    },
    {
        question: "प्रश्न 8. कौन सा हार्मोन वृक्क द्वारा जल के पुनरवशोषण को नियंत्रित करता है?",
        answers: shuffle([
            { text: "इंसुलिन (Insulin)", correct: false },
            { text: "एल्डोस्टेरोन (Aldosterone)", correct: false },
            { text: "एंटीडाइयूरेटिक हार्मोन (ADH)", correct: true },
            { text: "थायरोक्सिन (Thyroxine)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ADH (जिसे वैसोप्रेसिन भी कहते हैं) पीयूष ग्रंथि से स्रावित होता है और यह दूरस्थ नलिका और संग्राहक नलिका को पानी के लिए अधिक पारगम्य बनाकर जल के पुनरवशोषण को बढ़ाता है।"
    },
    {
        question: "प्रश्न 9. वृक्क द्वारा स्रावित 'रेनिन' (Renin) एंजाइम का क्या कार्य है?",
        answers: shuffle([
            { text: "रक्त शर्करा को नियंत्रित करना", correct: false },
            { text: "रक्तचाप को नियंत्रित करना", correct: true },
            { text: "कैल्शियम के स्तर को नियंत्रित करना", correct: false },
            { text: "लाल रक्त कोशिकाओं का निर्माण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब रक्तचाप कम होता है, तो वृक्क रेनिन का स्राव करता है, जो रेनिन-एंजियोटेंसिन-एल्डोस्टेरोन प्रणाली को सक्रिय करके रक्तचाप को बढ़ाता है।"
    },
    {
        question: "प्रश्न 10. वृक्क की पथरी (Kidney Stones) मुख्य रूप से किस रासायनिक यौगिक से बनती है?",
        answers: shuffle([
            { text: "सोडियम क्लोराइड", correct: false },
            { text: "कैल्शियम ऑक्सालेट", correct: true },
            { text: "मैग्नीशियम सल्फेट", correct: false },
            { text: "यूरिक एसिड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिकांश वृक्क की पथरियां कैल्शियम ऑक्सालेट के क्रिस्टलों के जमा होने से बनती हैं, हालांकि यूरिक एसिड और अन्य यौगिकों से भी पथरी बन सकती है।"
    },
    {
        question: "प्रश्न 11. हेनले का लूप (Loop of Henle) का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "रक्त का निस्यंदन", correct: false },
            { text: "मूत्र को सांद्र करना (जल और लवणों का पुनरवशोषण)", correct: true },
            { text: "ग्लूकोज का पुनरवशोषण", correct: false },
            { text: "अपशिष्टों का स्राव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेनले का लूप एक प्रतिधारा प्रणाली (countercurrent mechanism) बनाता है जो मेड्यूला में एक प्रवणता स्थापित करता है, जिससे जल का अधिकतम पुनरवशोषण होता है और मूत्र सांद्र होता है।"
    },
    {
        question: "प्रश्न 12. 'डायलिसिस' (Dialysis) की प्रक्रिया का उपयोग कब किया जाता है?",
        answers: shuffle([
            { text: "हृदयघात में", correct: false },
            { text: "यकृत की विफलता में", correct: false },
            { text: "वृक्क की विफलता (Renal Failure) में", correct: true },
            { text: "फेफड़ों के संक्रमण में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब वृक्क रक्त को प्रभावी ढंग से साफ करने में विफल हो जाते हैं, तो डायलिसिस नामक एक कृत्रिम प्रक्रिया का उपयोग रक्त से अपशिष्ट उत्पादों और अतिरिक्त तरल को हटाने के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 13. रक्त में यूरिया का निर्माण कहाँ होता है?",
        answers: shuffle([
            { text: "वृक्क (Kidney)", correct: false },
            { text: "यकृत (Liver)", correct: true },
            { text: "अग्न्याशय (Pancreas)", correct: false },
            { text: "प्लीहा (Spleen)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यकृत में ऑर्निथिन चक्र (यूरिया चक्र) के माध्यम से अमोनिया को कम विषैले यूरिया में परिवर्तित किया जाता है, जिसे बाद में वृक्क द्वारा रक्त से हटाया जाता है।"
    },
    {
        question: "प्रश्न 14. ग्लोमेरुलर फिल्ट्रेशन रेट (GFR) का क्या अर्थ है?",
        answers: shuffle([
            { text: "प्रति मिनट वृक्क द्वारा निस्यंदित रक्त की मात्रा", correct: true },
            { text: "प्रति घंटे बनने वाले मूत्र की मात्रा", correct: false },
            { text: "प्रति दिन पुनरवशोषित जल की मात्रा", correct: false },
            { text: "हृदय द्वारा पंप किए गए रक्त की दर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> GFR यह मापता है कि दोनों वृक्क की सभी ग्लोमेरुली द्वारा प्रति मिनट कितना द्रव निस्यंदित किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह वृक्क के कार्य का एक महत्वपूर्ण संकेतक है।"
    },
    {
        question: "प्रश्न 15. कौन सा पदार्थ सामान्यतः स्वस्थ व्यक्ति के मूत्र में नहीं पाया जाता है?",
        answers: shuffle([
            { text: "यूरिया", correct: false },
            { text: "क्रिएटिनिन", correct: false },
            { text: "ग्लूकोज", correct: true },
            { text: "सोडियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निस्यंदन के बाद, सारा ग्लूकोज समीपस्थ कुंडलित नलिका (PCT) में पूरी तरह से पुनरवशोषित हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> मूत्र में ग्लूकोज की उपस्थिति मधुमेह का संकेत हो सकती है।"
    },
    {
        question: "प्रश्न 16. वृक्क के बाहरी भाग को क्या कहते हैं?",
        answers: shuffle([
            { text: "मेड्यूला (Medulla)", correct: false },
            { text: "कॉर्टेक्स (Cortex)", correct: true },
            { text: "पेल्विस (Pelvis)", correct: false },
            { text: "हाइलम (Hilum)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृक्क का बाहरी दानेदार हिस्सा कॉर्टेक्स (वल्कुट) कहलाता है, जिसमें ग्लोमेरुलस और कुंडलित नलिकाएं स्थित होती हैं।"
    },
    {
        question: "प्रश्न 17. वृक्क के भीतरी भाग को क्या कहते हैं?",
        answers: shuffle([
            { text: "मेड्यूला (Medulla)", correct: true },
            { text: "कॉर्टेक्स (Cortex)", correct: false },
            { text: "पेल्विस (Pelvis)", correct: false },
            { text: "कैप्सूल (Capsule)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृक्क का आंतरिक भाग मेड्यूला (मध्यांश) कहलाता है, जिसमें हेनले के लूप और संग्राहक नलिकाएं होती हैं, जो पिरामिड जैसी संरचनाएं बनाती हैं।"
    },
    {
        question: "प्रश्न 18. मूत्रवाहिनी (Ureter) का क्या कार्य है?",
        answers: shuffle([
            { text: "रक्त को वृक्क तक लाना", correct: false },
            { text: "मूत्र को वृक्क से मूत्राशय तक ले जाना", correct: true },
            { text: "मूत्र को शरीर से बाहर निकालना", correct: false },
            { text: "मूत्र का भंडारण करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्येक वृक्क से एक संकरी नली, जिसे मूत्रवाहिनी कहते हैं, निकलती है जो मूत्र को वृक्कीय पेल्विस से मूत्राशय तक पहुंचाती है।"
    },
    {
        question: "प्रश्न 19. वृक्क द्वारा उत्पादित 'एरिथ्रोपोइटिन' (Erythropoietin) हार्मोन का क्या कार्य है?",
        answers: shuffle([
            { text: "रक्तचाप बढ़ाना", correct: false },
            { text: "जल संतुलन बनाना", correct: false },
            { text: "अस्थि मज्जा में लाल रक्त कोशिकाओं (RBC) के उत्पादन को उत्तेजित करना", correct: true },
            { text: "कैल्शियम का अवशोषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब शरीर में ऑक्सीजन का स्तर कम होता है, तो वृक्क एरिथ्रोपोइटिन का स्राव करता है, जो अस्थि मज्जा को अधिक RBC बनाने के लिए संकेत देता है।"
    },
    {
        question: "प्रश्न 20. शरीर में अम्ल-क्षार संतुलन (pH balance) बनाए रखने में कौन सा अंग महत्वपूर्ण भूमिका निभाता है?",
        answers: shuffle([
            { text: "यकृत", correct: false },
            { text: "हृदय", correct: false },
            { text: "वृक्क", correct: true },
            { text: "अग्न्याशय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृक्क रक्त से हाइड्रोजन आयनों (H⁺) को उत्सर्जित करके और बाइकार्बोनेट आयनों (HCO₃⁻) को पुनरवशोषित करके रक्त के pH को लगभग 7.4 पर स्थिर बनाए रखते हैं।"
    },
    {
        question: "प्रश्न 21. समीपस्थ कुंडलित नलिका (PCT) का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "केवल जल का पुनरवशोषण", correct: false },
            { text: "अधिकांश आवश्यक पोषक तत्वों (ग्लूकोज, अमीनो एसिड), आयनों और जल का पुनरवशोषण", correct: true },
            { text: "यूरिया का स्राव", correct: false },
            { text: "मूत्र को सांद्र करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निस्यंदित द्रव में से लगभग 65-70% जल और लगभग सभी ग्लूकोज और अमीनो एसिड का पुनरवशोषण PCT में ही हो जाता है।"
    },
    {
        question: "प्रश्न 22. अभिवाही धमनिका (Afferent Arteriole) और अपवाही धमनिका (Efferent Arteriole) में क्या अंतर है?",
        answers: shuffle([
            { text: "अभिवाही में शुद्ध और अपवाही में अशुद्ध रक्त होता है", correct: false },
            { text: "अभिवाही रक्त ग्लोमेरुलस में लाती है और अपवाही ले जाती है", correct: true },
            { text: "अपवाही रक्त ग्लोमेरुलस में लाती है और अभिवाही ले जाती है", correct: false },
            { text: "अभिवाही का व्यास अपवाही से छोटा होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अभिवाही (Afferent-Arriving) धमनिका रक्त को ग्लोमेरुलस तक लाती है, जबकि अपवाही (Efferent-Exiting) धमनिका रक्त को ग्लोमेरुलस से दूर ले जाती है।"
    },
    {
        question: "प्रश्न 23. मूत्राशय (Urinary Bladder) का क्या कार्य है?",
        answers: shuffle([
            { text: "मूत्र का निर्माण", correct: false },
            { text: "मूत्र का अस्थायी भंडारण", correct: true },
            { text: "रक्त का निस्यंदन", correct: false },
            { text: "मूत्र को शुद्ध करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मूत्राशय एक पेशीय थैली है जो मूत्रवाहिनी से आने वाले मूत्र को तब तक संग्रहीत करती है जब तक कि उसे मूत्रमार्ग के माध्यम से शरीर से बाहर नहीं निकाल दिया जाता।"
    },
    {
        question: "प्रश्न 24. 'मिक्चरिशन' (Micturition) शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "मूत्र निर्माण की प्रक्रिया", correct: false },
            { text: "रक्त निस्यंदन की प्रक्रिया", correct: false },
            { text: "मूत्र त्यागने की क्रिया", correct: true },
            { text: "जल के पुनरवशोषण की प्रक्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिक्चरिशन या यूरिनेशन वह प्रक्रिया है जिसके द्वारा मूत्राशय से मूत्र को शरीर से बाहर निकाला जाता है।"
    },
    {
        question: "प्रश्न 25. एल्डोस्टेरोन (Aldosterone) हार्मोन का वृक्क पर क्या प्रभाव पड़ता है?",
        answers: shuffle([
            { text: "यह सोडियम (Na⁺) के पुनरवशोषण और पोटेशियम (K⁺) के उत्सर्जन को बढ़ाता है", correct: true },
            { text: "यह कैल्शियम (Ca²⁺) के पुनरवशोषण को बढ़ाता है", correct: false },
            { text: "यह जल के पुनरवशोषण को कम करता है", correct: false },
            { text: "यह ग्लूकोज के पुनरवशोषण को रोकता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एड्रिनल ग्रंथि द्वारा स्रावित एल्डोस्टेरोन दूरस्थ नलिकाओं पर कार्य करता है, जिससे सोडियम और जल का पुनरवशोषण बढ़ता है, जो रक्तचाप को नियंत्रित करने में मदद करता है।"
    },
    {
        question: "प्रश्न 26. जक्स्टाग्लोमेरुलर उपकरण (Juxtaglomerular Apparatus - JGA) का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "यूरिया का उत्पादन", correct: false },
            { text: "रेनिन का स्राव और GFR का नियमन", correct: true },
            { text: "ADH का भंडारण", correct: false },
            { text: "मूत्र का भंडारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> JGA एक विशेष संरचना है जो रक्तचाप और निस्यंदन दर में गिरावट का पता लगाती है और प्रतिक्रिया में रेनिन नामक एंजाइम का स्राव करती है।"
    },
    {
        question: "प्रश्न 27. 'ग्लाइकोसुरिया' (Glycosuria) क्या है?",
        answers: shuffle([
            { text: "मूत्र में रक्त की उपस्थिति", correct: false },
            { text: "मूत्र में प्रोटीन की उपस्थिति", correct: false },
            { text: "मूत्र में ग्लूकोज की उपस्थिति", correct: true },
            { text: "मूत्र में कीटोन बॉडीज की उपस्थिति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह स्थिति आमतौर पर मधुमेह मेलेटस में देखी जाती है, जब रक्त में ग्लूकोज का स्तर इतना अधिक हो जाता है कि वृक्क की नलिकाएं इसे पूरी तरह से पुनरवशोषित नहीं कर पाती हैं, जिससे मूत्र में ग्लूकोज आ जाता है।"
    },
    {
        question: "प्रश्न 28. वृक्क किस विटामिन को उसके सक्रिय रूप में परिवर्तित करने में मदद करता है?",
        answers: shuffle([
            { text: "विटामिन A", correct: false },
            { text: "विटामिन B12", correct: false },
            { text: "विटामिन C", correct: false },
            { text: "विटामिन D", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृक्क विटामिन D को उसके सक्रिय रूप, कैल्सिट्रिऑल (Calcitriol) में परिवर्तित करता है, जो आंतों में कैल्शियम के अवशोषण के लिए आवश्यक है।"
    },
    {
        question: "प्रश्न 29. पोडोसाइट्स (Podocytes) नामक विशेष कोशिकाएं कहाँ पाई जाती हैं?",
        answers: shuffle([
            { text: "हेनले के लूप की दीवार में", correct: false },
            { text: "बोमन कैप्सूल की आंतरिक दीवार में", correct: true },
            { text: "संग्राहक नलिका में", correct: false },
            { text: "मूत्रवाहिनी में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पोडोसाइट्स बोमन कैप्सूल की आंतरिक परत बनाती हैं और ग्लोमेरुलस केशिकाओं को लपेटती हैं, निस्यंदन झिल्ली का एक महत्वपूर्ण हिस्सा बनाती हैं, जो प्रोटीन को छनने से रोकती हैं।"
    },
    {
        question: "प्रश्न 30. 'एन्यूरिया' (Anuria) का क्या अर्थ है?",
        answers: shuffle([
            { text: "मूत्र का अत्यधिक उत्पादन", correct: false },
            { text: "मूत्र का उत्पादन न होना या बहुत कम होना", correct: true },
            { text: "मूत्र में दर्द होना", correct: false },
            { text: "बार-बार मूत्र आना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एन्यूरिया एक गंभीर स्थिति है जिसमें वृक्क मूत्र का उत्पादन करने में विफल रहते हैं, आमतौर पर प्रति दिन 100 मिलीलीटर से कम।"
    },
    {
        question: "प्रश्न 31. वृक्क उदर गुहा में कहाँ स्थित होते हैं?",
        answers: shuffle([
            { text: "सामने की ओर, आंतों के नीचे", correct: false },
            { text: "डायाफ्राम के ठीक ऊपर", correct: false },
            { text: "रीढ़ की हड्डी के दोनों ओर, पिछली पेट की दीवार के पास", correct: true },
            { text: "यकृत के अंदर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृक्क रेट्रोपेरिटोनियल (peritoneum के पीछे) अंग हैं, जो काठ कशेरुकाओं के स्तर पर रीढ़ के दोनों ओर, पिछली पेट की दीवार के पास स्थित होते हैं।"
    },
    {
        question: "प्रश्न 32. ग्लोमेरुलस में उच्च रक्तचाप क्यों बना रहता है?",
        answers: shuffle([
            { text: "हृदय के बहुत पास होने के कारण", correct: false },
            { text: "अपवाही धमनिका का व्यास अभिवाही धमनिका से संकरा होने के कारण", correct: true },
            { text: "गुरुत्वाकर्षण के कारण", correct: false },
            { text: "रेनिन के प्रभाव के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपवाही धमनिका का व्यास अभिवाही धमनिका से संकरा होने के कारण रक्त के बाहर निकलने में प्रतिरोध पैदा होता है, जिससे ग्लोमेरुलर केशिकाओं के अंदर दबाव बढ़ जाता है, जो निस्यंदन के लिए आवश्यक है।"
    },
    {
        question: "प्रश्न 33. 'प्रोटीनुरिया' (Proteinuria) का क्या अर्थ है?",
        answers: shuffle([
            { text: "मूत्र में प्रोटीन की असामान्य मात्रा में उपस्थिति", correct: true },
            { text: "रक्त में प्रोटीन की कमी", correct: false },
            { text: "मूत्र में यूरिया की कमी", correct: false },
            { text: "मूत्र में शर्करा की उपस्थिति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामान्य रूप से, प्रोटीन के अणु इतने बड़े होते हैं कि वे ग्लोमेरुलर झिल्ली से नहीं छन पाते।<br><br><i class='fa-solid fa-angles-right icon'></i> मूत्र में प्रोटीन की उपस्थिति वृक्क क्षति का संकेत हो सकती है।"
    },
    {
        question: "प्रश्न 34. कौनसा जंतु यूरिकोटेलिक (Uricotelic) होता है (यूरिक एसिड का उत्सर्जन करता है)?",
        answers: shuffle([
            { text: "मनुष्य", correct: false },
            { text: "मछली", correct: false },
            { text: "पक्षी", correct: true },
            { text: "मेंढक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पक्षी और सरीसृप पानी के संरक्षण के लिए अपने नाइट्रोजनी अपशिष्ट को यूरिक एसिड के रूप में उत्सर्जित करते हैं, जो बहुत कम पानी में उत्सर्जित हो सकता है।"
    },
    {
        question: "प्रश्न 35. वृक्क के चारों ओर पाई जाने वाली रेशेदार झिल्ली क्या कहलाती है?",
        answers: shuffle([
            { text: "पेरिकार्डियम", correct: false },
            { text: "प्लूरा", correct: false },
            { text: "रीनल कैप्सूल (Renal Capsule)", correct: true },
            { text: "पेरिटोनियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रीनल कैप्सूल एक सख्त, रेशेदार परत है जो वृक्क को चोट और संक्रमण से बचाने में मदद करती है।"
    },
    {
        question: "प्रश्न 36. प्रतिधारा गुणन प्रणाली (Countercurrent Multiplier System) कहाँ कार्य करती है?",
        answers: shuffle([
            { text: "ग्लोमेरुलस", correct: false },
            { text: "समीपस्थ नलिका (PCT)", correct: false },
            { text: "हेनले का लूप", correct: true },
            { text: "दूरस्थ नलिका (DCT)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेनले के लूप की उतरती और चढ़ती भुजाओं में विपरीत दिशा में द्रव का प्रवाह एक सांद्रता प्रवणता बनाता है, जिससे जल का पुनरवशोषण संभव होता है।"
    },
    {
        question: "प्रश्न 37. मूत्र का सामान्य pH मान कितना होता है?",
        answers: shuffle([
            { text: "2.5-3.5", correct: false },
            { text: "4.6-8.0", correct: true },
            { text: "8.5-9.5", correct: false },
            { text: "10.0-11.0", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मूत्र का pH मान आहार के आधार पर भिन्न हो सकता है, लेकिन यह आमतौर पर थोड़ा अम्लीय (औसत 6.0, रेंज 4.6-8.0) होता है।"
    },
    {
        question: "प्रश्न 38. 'हीमैटूरिया' (Hematuria) का क्या अर्थ है?",
        answers: shuffle([
            { text: "मूत्र में रक्त की उपस्थिति", correct: true },
            { text: "मूत्र में मवाद की उपस्थिति", correct: false },
            { text: "मूत्र में शर्करा की उपस्थिति", correct: false },
            { text: "मूत्र में वसा की उपस्थिति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मूत्र में लाल रक्त कोशिकाओं की उपस्थिति को हीमैटूरिया कहा जाता है, जो संक्रमण, पथरी या अन्य मूत्र पथ की समस्याओं का संकेत हो सकता है।"
    },
    {
        question: "प्रश्न 39. वृक्क प्रत्यारोपण (Kidney Transplant) में, दाता का वृक्क कहाँ लगाया जाता है?",
        answers: shuffle([
            { text: "पुराने क्षतिग्रस्त वृक्क के स्थान पर", correct: false },
            { text: "पेट के ऊपरी हिस्से में", correct: false },
            { text: "श्रोणि (Pelvis) में, पेट के निचले हिस्से में", correct: true },
            { text: "छाती की गुहा में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आमतौर पर, असफल वृक्कों को हटाया नहीं जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> दाता वृक्क को रोगी की श्रोणि में, पेट के निचले हिस्से में रखा जाता है और उसकी रक्त वाहिकाओं और मूत्राशय से जोड़ा जाता है।"
    },
    {
        question: "प्रश्न 40. दूरस्थ कुंडलित नलिका (DCT) पर मुख्य रूप से कौन से हार्मोन कार्य करते हैं?",
        answers: shuffle([
            { text: "केवल रेनिन", correct: false },
            { text: "केवल एरिथ्रोपोइटिन", correct: false },
            { text: "ADH और एल्डोस्टेरोन", correct: true },
            { text: "केवल इंसुलिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ADH और एल्डोस्टेरोन शरीर की आवश्यकता के अनुसार जल और आयनों के पुनरवशोषण को अंतिम रूप से समायोजित करने के लिए DCT और संग्राहक नलिका पर कार्य करते हैं।"
    },
    {
        question: "प्रश्न 41. कौन सा नाइट्रोजनयुक्त अपशिष्ट पदार्थ मनुष्यों में मुख्य रूप से उत्सर्जित होता है?",
        answers: shuffle([
            { text: "अमोनिया", correct: false },
            { text: "यूरिक एसिड", correct: false },
            { text: "क्रिएटिनिन", correct: false },
            { text: "यूरिया", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मनुष्य यूरियोटेलिक (Ureotelic) होते हैं, जिसका अर्थ है कि वे अपने प्रोटीन चयापचय के मुख्य अपशिष्ट उत्पाद के रूप में यूरिया का उत्सर्जन करते हैं।"
    },
    {
        question: "प्रश्न 42. वृक्क के अध्ययन को क्या कहा जाता है?",
        answers: shuffle([
            { text: "कार्डियोलॉजी", correct: false },
            { text: "नेफ्रोलॉजी", correct: true },
            { text: "हेपेटोलॉजी", correct: false },
            { text: "न्यूरोलॉजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नेफ्रोलॉजी चिकित्सा की वह शाखा है जो वृक्क के कार्यों, रोगों और उनके उपचार से संबंधित है।"
    },
    {
        question: "प्रश्न 43. संग्राहक नलिका (Collecting Duct) का अंतिम कार्य क्या है?",
        answers: shuffle([
            { text: "रक्त का निस्यंदन", correct: false },
            { text: "मूत्र को वृक्कीय पेल्विस तक ले जाना", correct: true },
            { text: "ग्लूकोज का पुनरवशोषण", correct: false },
            { text: "हार्मोन का उत्पादन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कई नेफ्रॉन की दूरस्थ नलिकाएं एक संग्राहक नलिका में खुलती हैं, जो मूत्र को अंतिम रूप से सांद्र करती है और इसे वृक्कीय पेल्विस तक ले जाती है।"
    },
    {
        question: "प्रश्न 44. वृक्कीय पिरामिड (Renal Pyramids) वृक्क के किस भाग में पाए जाते हैं?",
        answers: shuffle([
            { text: "कॉर्टेक्स", correct: false },
            { text: "मेड्यूला", correct: true },
            { text: "पेल्विस", correct: false },
            { text: "हाइलम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेड्यूला शंकु के आकार की संरचनाओं से बना होता है जिन्हें वृक्कीय पिरामिड कहा जाता है, जिनका नुकीला सिरा (पैपिला) कैलिक्स में खुलता है।"
    },
    {
        question: "प्रश्न 45. यदि रक्त में ADH का स्तर बढ़ जाए, तो मूत्र पर क्या प्रभाव पड़ेगा?",
        answers: shuffle([
            { text: "मूत्र की मात्रा बढ़ जाएगी और वह तनु हो जाएगा", correct: false },
            { text: "मूत्र की मात्रा कम हो जाएगी और वह सांद्र हो जाएगा", correct: true },
            { text: "मूत्र का उत्पादन बंद हो जाएगा", correct: false },
            { text: "मूत्र पर कोई प्रभाव नहीं पड़ेगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ADH जल के पुनरवशोषण को बढ़ाता है, जिससे शरीर में अधिक जल बना रहता है और कम मात्रा में सांद्र मूत्र उत्सर्जित होता है।"
    },
    {
        question: "प्रश्न 46. 'ऑस्मोरेग्यूलेशन' (Osmoregulation) का क्या अर्थ है?",
        answers: shuffle([
            { text: "शरीर के तापमान का नियमन", correct: false },
            { text: "शरीर के द्रव और इलेक्ट्रोलाइट संतुलन का नियमन", correct: true },
            { text: "रक्त शर्करा का नियमन", correct: false },
            { text: "रक्तचाप का नियमन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृक्क शरीर के तरल पदार्थों के परासरणी दबाव (osmotic pressure) को नियंत्रित करके शरीर के द्रव और इलेक्ट्रोलाइट संतुलन का महत्वपूर्ण कार्य करते हैं।"
    },
    {
        question: "प्रश्न 47. ग्लोमेरुलस और बोमन कैप्सूल को मिलाकर क्या कहा जाता है?",
        answers: shuffle([
            { text: "वृक्कीय पिरामिड", correct: false },
            { text: "हेनले का लूप", correct: false },
            { text: "मैल्पीघियन बॉडी या रीनल कॉर्पसल", correct: true },
            { text: "जक्स्टाग्लोमेरुलर उपकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रीनल कॉर्पसल (वृक्कीय कणिका) नेफ्रॉन का प्रारंभिक निस्यंदन घटक है, जिसमें ग्लोमेरुलस और बोमन कैप्सूल शामिल होते हैं।"
    },
    {
        question: "प्रश्न 48. कौन सी रक्त वाहिका वृक्क से रक्त को दूर ले जाती है?",
        answers: shuffle([
            { text: "वृक्कीय धमनी (Renal Artery)", correct: false },
            { text: "वृक्कीय शिरा (Renal Vein)", correct: true },
            { text: "अपवाही धमनिका (Efferent Arteriole)", correct: false },
            { text: "अभिवाही धमनिका (Afferent Arteriole)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृक्कीय धमनी वृक्क में अशुद्ध रक्त (अपशिष्ट युक्त) लाती है, और निस्यंदन के बाद, साफ किया हुआ रक्त वृक्कीय शिरा द्वारा हृदय की ओर वापस ले जाया जाता है।"
    },
    {
        question: "प्रश्न 49. 'पायूरिया' (Pyuria) का क्या अर्थ है?",
        answers: shuffle([
            { text: "मूत्र में कीटोन बॉडीज की उपस्थिति", correct: false },
            { text: "मूत्र में मवाद (श्वेत रक्त कोशिकाओं) की उपस्थिति", correct: true },
            { text: "मूत्र में हवा के बुलबुले की उपस्थिति", correct: false },
            { text: "मूत्र में वसा की उपस्थिति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पायूरिया मूत्र पथ के संक्रमण (UTI) का एक संकेत है, जो मूत्र में श्वेत रक्त कोशिकाओं (मवाद) की उपस्थिति को दर्शाता है।"
    },
    {
        question: "प्रश्न 50. एक दिन में एक स्वस्थ वयस्क द्वारा कितना मूत्र उत्सर्जित किया जाता है?",
        answers: shuffle([
            { text: "0.5 से 1.0 लीटर", correct: false },
            { text: "1.0 से 1.8 लीटर", correct: true },
            { text: "2.5 से 3.0 लीटर", correct: false },
            { text: "4.0 से 5.0 लीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक स्वस्थ व्यक्ति आमतौर पर 24 घंटे में लगभग 1.0 से 1.8 लीटर मूत्र उत्सर्जित करता है, हालांकि यह तरल पदार्थ के सेवन और अन्य कारकों पर निर्भर करता है।"
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