const questions = [
    {
        topHeading: "हृदय की संरचना और कार्यप्रणाली पर आधारित 50 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. मानव हृदय में कुल कितने कक्ष (Chambers) होते हैं?",
        answers: shuffle([
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मानव हृदय में चार कक्ष होते हैं: दो ऊपरी कक्ष जिन्हें अलिंद (Atria) कहते हैं और दो निचले कक्ष जिन्हें निलय (Ventricles) कहते हैं।"
    },
    {
        question: "प्रश्न 2. हृदय की बाहरी परत को क्या कहा जाता है?",
        answers: shuffle([
            { text: "मायोकार्डियम (Myocardium)", correct: false },
            { text: "एंडोकार्डियम (Endocardium)", correct: false },
            { text: "पेरिकार्डियम (Pericardium)", correct: true },
            { text: "एपिकार्डियम (Epicardium)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेरिकार्डियम एक दोहरी दीवार वाली थैली है जो हृदय को घेरती है, इसे सुरक्षा प्रदान करती है और इसे अपनी जगह पर स्थिर रखती है।"
    },
    {
        question: "प्रश्न 3. हृदय की मांसपेशीय परत कौन सी है जो संकुचन के लिए जिम्मेदार है?",
        answers: shuffle([
            { text: "पेरिकार्डियम", correct: false },
            { text: "मायोकार्डियम", correct: true },
            { text: "एंडोकार्डियम", correct: false },
            { text: "एपिकार्डियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मायोकार्डियम हृदय की मध्य और सबसे मोटी परत है, जो हृदय की मांसपेशियों से बनी होती है और हृदय के पंपिंग कार्य (संकुचन) के लिए जिम्मेदार होती है।"
    },
    {
        question: "प्रश्न 4. शरीर से अशुद्ध (विऑक्सीजनित) रक्त हृदय के किस कक्ष में सबसे पहले पहुँचता है?",
        answers: shuffle([
            { text: "बायाँ अलिंद (Left Atrium)", correct: false },
            { text: "दाहिना अलिंद (Right Atrium)", correct: true },
            { text: "बायाँ निलय (Left Ventricle)", correct: false },
            { text: "दाहिना निलय (Right Ventricle)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाशिरा (Vena Cava) के माध्यम से शरीर का सारा अशुद्ध रक्त सबसे पहले दाहिने अलिंद में आता है।"
    },
    {
        question: "प्रश्न 5. फेफड़ों से शुद्ध (ऑक्सीजनित) रक्त हृदय के किस कक्ष में प्रवेश करता है?",
        answers: shuffle([
            { text: "दाहिना अलिंद", correct: false },
            { text: "बायाँ अलिंद", correct: true },
            { text: "दाहिना निलय", correct: false },
            { text: "बायाँ निलय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फुफ्फुसीय शिरा (Pulmonary Vein) फेफड़ों से ऑक्सीजन युक्त शुद्ध रक्त को हृदय के बाएँ अलिंद में लाती है।"
    },
    {
        question: "प्रश्न 6. कौन सी रक्त वाहिका हृदय से फेफड़ों तक अशुद्ध रक्त ले जाती है?",
        answers: shuffle([
            { text: "फुफ्फुसीय धमनी (Pulmonary Artery)", correct: true },
            { text: "फुफ्फुसीय शिरा (Pulmonary Vein)", correct: false },
            { text: "महाधमनी (Aorta)", correct: false },
            { text: "महाशिरा (Vena Cava)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फुफ्फुसीय धमनी एकमात्र धमनी है जो अशुद्ध रक्त का वहन करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह दाहिने निलय से रक्त को ऑक्सीजनेशन के लिए फेफड़ों तक ले जाती है।"
    },
    {
        question: "प्रश्न 7. हृदय के किस कक्ष से शुद्ध रक्त महाधमनी (Aorta) में पंप किया जाता है?",
        answers: shuffle([
            { text: "दाहिना अलिंद", correct: false },
            { text: "बायाँ अलिंद", correct: false },
            { text: "दाहिना निलय", correct: false },
            { text: "बायाँ निलय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बायाँ निलय हृदय का सबसे मजबूत कक्ष है जो ऑक्सीजन युक्त रक्त को महाधमनी के माध्यम से पूरे शरीर में पंप करता है।"
    },
    {
        question: "प्रश्न 8. हृदय का प्राकृतिक पेसमेकर (Pacemaker) किसे कहा जाता है?",
        answers: shuffle([
            { text: "AV नोड", correct: false },
            { text: "SA नोड", correct: true },
            { text: "पुरकिंजे फाइबर", correct: false },
            { text: "हिज का बंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> साइनोएट्रियल (SA) नोड, जो दाहिने अलिंद में स्थित होता है, विद्युत आवेग उत्पन्न करता है जो हृदय की धड़कन को शुरू और नियंत्रित करता है, इसलिए इसे प्राकृतिक पेसमेकर कहते हैं।"
    },
    {
        question: "प्रश्न 9. 'लब' (Lub) और 'डब' (Dub) की ध्वनि किससे संबंधित है?",
        answers: shuffle([
            { text: "फेफड़े", correct: false },
            { text: "यकृत", correct: false },
            { text: "हृदय", correct: true },
            { text: "मस्तिष्क", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये हृदय की ध्वनियाँ हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> 'लब' की ध्वनि वाल्व (ट्राइकसपिड और माइट्रल) के बंद होने से और 'डब' की ध्वनि (एओर्टिक और पल्मोनरी) वाल्व के बंद होने से उत्पन्न होती है।"
    },
    {
        question: "प्रश्न 10. ECG (इलेक्ट्रोकार्डियोग्राम) का उपयोग किस अंग की गतिविधि को मापने के लिए किया जाता है?",
        answers: shuffle([
            { text: "मस्तिष्क", correct: false },
            { text: "हृदय", correct: true },
            { text: "फेफड़े", correct: false },
            { text: "गुर्दे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ECG हृदय की विद्युत गतिविधि को रिकॉर्ड करता है, जिससे हृदय की लय और स्वास्थ्य के बारे में जानकारी मिलती है।"
    },
    {
        question: "प्रश्न 11. एक सामान्य वयस्क व्यक्ति का हृदय एक मिनट में औसतन कितनी बार धड़कता है?",
        answers: shuffle([
            { text: "50-60 बार", correct: false },
            { text: "60-80 बार", correct: true },
            { text: "90-100 बार", correct: false },
            { text: "100-120 बार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आराम की अवस्था में एक स्वस्थ वयस्क की सामान्य हृदय गति 60 से 80 धड़कन प्रति मिनट होती है। (आमतौर पर 72 बार)।"
    },
    {
        question: "प्रश्न 12. हृदय के दाहिने और बाएँ हिस्से को कौन सी संरचना अलग करती है?",
        answers: shuffle([
            { text: "वाल्व", correct: false },
            { text: "सेप्टम", correct: true },
            { text: "कॉर्डे टेंडीने", correct: false },
            { text: "पेरिकार्डियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेप्टम एक मोटी दीवार है जो हृदय को दाहिने और बाएँ हिस्सों में विभाजित करती है, जिससे शुद्ध और अशुद्ध रक्त को मिलने से रोका जा सके।"
    },
    {
        question: "प्रश्न 13. माइट्रल वाल्व (द्विकपर्दी वाल्व) हृदय के किन कक्षों के बीच स्थित होता है?",
        answers: shuffle([
            { text: "दाहिना अलिंद और दाहिना निलय", correct: false },
            { text: "बायाँ अलिंद और बायाँ निलय", correct: true },
            { text: "दाहिना निलय और फुफ्फुसीय धमनी", correct: false },
            { text: "बायाँ निलय और महाधमनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माइट्रल वाल्व या बाइसेप्सिड वाल्व बाएँ अलिंद से बाएँ निलय में रक्त के प्रवाह को नियंत्रित करता है।"
    },
    {
        question: "प्रश्न 14. 'सिस्टोल' (Systole) शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "हृदय का संकुचन", correct: true },
            { text: "हृदय का शिथिलन", correct: false },
            { text: "हृदय की धड़कन का रुक जाना", correct: false },
            { text: "हृदय में रक्त का भरना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हृदय चक्र में, सिस्टोल वह चरण है जब हृदय की मांसपेशियां (विशेषकर निलय) सिकुड़ती हैं और रक्त को धमनियों में पंप करती हैं।"
    },
    {
        question: "प्रश्न 15. 'डायस्टोल' (Diastole) शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "हृदय का संकुचन", correct: false },
            { text: "हृदय का शिथिलन", correct: true },
            { text: "हृदय गति का बढ़ना", correct: false },
            { text: "रक्तचाप का बढ़ना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डायस्टोल वह चरण है जब हृदय की मांसपेशियां शिथिल होती हैं और हृदय के कक्षों में रक्त भरता है।"
    },
    {
        question: "प्रश्न 16. हृदय को रक्त की आपूर्ति करने वाली धमनियों को क्या कहते हैं?",
        answers: shuffle([
            { text: "कैरोटिड धमनियाँ", correct: false },
            { text: "कोरोनरी धमनियाँ", correct: true },
            { text: "वृक्क धमनियाँ", correct: false },
            { text: "यकृत धमनियाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोरोनरी धमनियाँ महाधमनी से निकलती हैं और हृदय की मांसपेशियों को ऑक्सीजन और पोषक तत्वों से भरपूर रक्त की आपूर्ति करती हैं।"
    },
    {
        question: "प्रश्न 17. रक्तचाप (Blood Pressure) मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "थर्मामीटर", correct: false },
            { text: "बैरोमीटर", correct: false },
            { text: "स्फिग्मोमैनोमीटर", correct: true },
            { text: "स्पाइरोमीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्फिग्मोमैनोमीटर एक चिकित्सा उपकरण है जिसका उपयोग धमनियों में रक्तचाप को मापने के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 18. एक सामान्य वयस्क का सिस्टोलिक और डायस्टोलिक रक्तचाप कितना होता है?",
        answers: shuffle([
            { text: "80/120 mmHg", correct: false },
            { text: "120/80 mmHg", correct: true },
            { text: "140/90 mmHg", correct: false },
            { text: "90/60 mmHg", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक स्वस्थ वयस्क का सामान्य रक्तचाप लगभग 120 (सिस्टोलिक) / 80 (डायस्टोलिक) mmHg होता है।"
    },
    {
        question: "प्रश्न 19. 'हार्ट अटैक' (Myocardial Infarction) का मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "हृदय की धड़कन का रुक जाना", correct: false },
            { text: "हृदय की मांसपेशियों में अपर्याप्त रक्त प्रवाह", correct: true },
            { text: "फेफड़ों में संक्रमण", correct: false },
            { text: "मस्तिष्क में रक्तस्राव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हार्ट अटैक तब होता है जब कोरोनरी धमनी में रुकावट के कारण हृदय की मांसपेशियों के एक हिस्से को रक्त की आपूर्ति बंद हो जाती है, जिससे मांसपेशी मरने लगती है।"
    },
    {
        question: "प्रश्न 20. ट्राइकसपिड वाल्व (त्रिकपर्दी वाल्व) किन कक्षों के बीच होता है?",
        answers: shuffle([
            { text: "बायाँ अलिंद और बायाँ निलय", correct: false },
            { text: "दाहिना अलिंद और दाहिना निलय", correct: true },
            { text: "बायाँ निलय और महाधमनी", correct: false },
            { text: "दाहिना निलय और फुफ्फुसीय धमनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ट्राइकसपिड वाल्व दाहिने अलिंद से दाहिने निलय में रक्त के एक-तरफ़ा प्रवाह को नियंत्रित करता है।"
    },
    {
        question: "प्रश्न 21. 'कार्डियक आउटपुट' (Cardiac Output) क्या है?",
        answers: shuffle([
            { text: "एक मिनट में हृदय द्वारा पंप किए गए रक्त की कुल मात्रा", correct: true },
            { text: "एक धड़कन में पंप किए गए रक्त की मात्रा", correct: false },
            { text: "हृदय की कुल क्षमता", correct: false },
            { text: "हृदय द्वारा किया गया कुल कार्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्डियक आउटपुट की गणना हृदय गति (Heart Rate) को स्ट्रोक वॉल्यूम (Stroke Volume) से गुणा करके की जाती है।"
    },
    {
        question: "प्रश्न 22. दोहरा परिसंचरण (Double Circulation) का क्या अर्थ है?",
        answers: shuffle([
            { text: "रक्त का हृदय से दो बार गुजरना", correct: true },
            { text: "रक्त का शरीर में दो बार घूमना", correct: false },
            { text: "हृदय का दो भागों में बंटा होना", correct: false },
            { text: "दो हृदय का होना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मनुष्यों में, एक पूर्ण चक्र के लिए रक्त हृदय से दो बार गुजरता है - एक बार फुफ्फुसीय परिसंचरण (फेफड़ों के लिए) और एक बार प्रणालीगत परिसंचरण (शरीर के लिए)।"
    },
    {
        question: "प्रश्न 23. भ्रूण अवस्था में हृदय में अलिंदों के बीच का छिद्र क्या कहलाता है?",
        answers: shuffle([
            { text: "फोरामेन ओवेल (Foramen Ovale)", correct: true },
            { text: "डक्टस आर्टेरियोसस (Ductus Arteriosus)", correct: false },
            { text: "लिगामेंटम आर्टेरियोसम (Ligamentum Arteriosum)", correct: false },
            { text: "फोसा ओवेलिस (Fossa Ovalis)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फोरामेन ओवेल एक प्राकृतिक छिद्र है जो भ्रूण के हृदय में दाएं और बाएं अलिंदों के बीच होता है, यह जन्म के बाद आमतौर पर बंद हो जाता है।"
    },
    {
        question: "प्रश्न 24. हृदय की ध्वनि सुनने के लिए डॉक्टर किस उपकरण का उपयोग करते हैं?",
        answers: shuffle([
            { text: "टेलीस्कोप", correct: false },
            { text: "माइक्रोस्कोप", correct: false },
            { text: "स्टेथोस्कोप", correct: true },
            { text: "एंडोस्कोप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्टेथोस्कोप का उपयोग शरीर के आंतरिक अंगों, विशेष रूप से हृदय और फेफड़ों से उत्पन्न होने वाली ध्वनियों को सुनने के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 25. ECG में 'P' तरंग क्या दर्शाती है?",
        answers: shuffle([
            { text: "अलिंदों का संकुचन (Atrial Depolarization)", correct: true },
            { text: "निलयों का संकुचन (Ventricular Depolarization)", correct: false },
            { text: "निलयों का शिथिलन (Ventricular Repolarization)", correct: false },
            { text: "अलिंदों का शिथिलन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'P' तरंग SA नोड से उत्पन्न विद्युत आवेग के कारण दोनों अलिंदों के विध्रुवण (संकुचन) को दर्शाती है।"
    },
    {
        question: "प्रश्न 26. ECG में 'QRS कॉम्प्लेक्स' क्या दर्शाता है?",
        answers: shuffle([
            { text: "अलिंदों का संकुचन", correct: false },
            { text: "निलयों का संकुचन (Ventricular Depolarization)", correct: true },
            { text: "निलयों का शिथिलन", correct: false },
            { text: "हृदय का आराम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> QRS कॉम्प्लेक्स निलयों के तेजी से विध्रुवण (संकुचन) को इंगित करता है, जब रक्त फेफड़ों और शरीर में पंप किया जाता है।"
    },
    {
        question: "प्रश्न 27. मछली के हृदय में कितने कक्ष होते हैं?",
        answers: shuffle([
            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "4", correct: false },
            { text: "1", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मछली के हृदय में केवल दो कक्ष होते हैं - एक अलिंद और एक निलय, और इसमें एकल-परिसंचरण प्रणाली होती है।"
    },
    {
        question: "प्रश्न 28. हृदय की धड़कन को कौन सा हार्मोन उत्तेजित कर सकता है?",
        answers: shuffle([
            { text: "इंसुलिन", correct: false },
            { text: "थायरोक्सिन और एड्रेनालाईन", correct: true },
            { text: "एस्ट्रोजन", correct: false },
            { text: "टेस्टोस्टेरोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एड्रेनालाईन (एपिनेफ्रीन) और थायरोक्सिन हार्मोन हृदय गति और संकुचन की शक्ति को बढ़ा सकते हैं, खासकर तनाव या व्यायाम के दौरान।"
    },
    {
        question: "प्रश्न 29. 'एनजाइना पेक्टोरिस' (Angina Pectoris) का दर्द किसकी कमी के कारण होता है?",
        answers: shuffle([
            { text: "हृदय की मांसपेशियों तक रक्त की कमी", correct: false },
            { text: "हृदय की मांसपेशियों तक ऑक्सीजन की कमी", correct: true },
            { text: "मस्तिष्क तक ऑक्सीजन की कमी", correct: false },
            { text: "शरीर में पानी की कमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एनजाइना सीने में होने वाला एक दर्द है जो तब होता है जब हृदय की मांसपेशियों को अस्थायी रूप से पर्याप्त ऑक्सीजन युक्त रक्त नहीं मिल पाता है।"
    },
    {
        question: "प्रश्न 30. मानव शरीर की सबसे बड़ी धमनी कौन सी है?",
        answers: shuffle([
            { text: "फुफ्फुसीय धमनी", correct: false },
            { text: "कोरोनरी धमनी", correct: false },
            { text: "महाधमनी (Aorta)", correct: true },
            { text: "कैरोटिड धमनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाधमनी शरीर की सबसे बड़ी और मुख्य धमनी है जो बाएं निलय से निकलती है और पूरे शरीर में ऑक्सीजन युक्त रक्त वितरित करती है।"
    },
    {
        question: "प्रश्न 31. निलयों की दीवारें अलिंदों की दीवारों से मोटी क्यों होती हैं?",
        answers: shuffle([
            { text: "वे अधिक रक्त रखती हैं", correct: false },
            { text: "उन्हें अधिक बल से रक्त पंप करना होता है", correct: true },
            { text: "वे आकार में बड़ी होती हैं", correct: false },
            { text: "उनमें वाल्व होते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निलयों को रक्त को फेफड़ों (दायां निलय) और पूरे शरीर (बायां निलय) में लंबी दूरी तक पंप करना होता है, जिसके लिए अधिक शक्तिशाली संकुचन की आवश्यकता होती है।"
    },
    {
        question: "प्रश्न 32. 'हृदय मर्मर' (Heart Murmur) की ध्वनि का क्या कारण है?",
        answers: shuffle([
            { text: "हृदय की तेज धड़कन", correct: false },
            { text: "हृदय के वाल्वों में दोष", correct: true },
            { text: "हृदय की मांसपेशियों में दर्द", correct: false },
            { text: "रक्तचाप का बढ़ना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हृदय मर्मर एक असामान्य ध्वनि है जो हृदय के वाल्वों के ठीक से न खुलने या बंद होने के कारण रक्त के अशांत प्रवाह (turbulent flow) के कारण सुनाई देती है।"
    },
    {
        question: "प्रश्न 33. हृदय चक्र (Cardiac Cycle) की अवधि लगभग कितनी होती है?",
        answers: shuffle([
            { text: "0.5 सेकंड", correct: false },
            { text: "0.8 सेकंड", correct: true },
            { text: "1.0 सेकंड", correct: false },
            { text: "1.2 सेकंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक सामान्य हृदय गति (75 बीट प्रति मिनट) पर, एक पूर्ण हृदय चक्र, जिसमें एक सिस्टोल और एक डायस्टोल शामिल है, लगभग 0.8 सेकंड में पूरा होता है।"
    },
    {
        question: "प्रश्न 34. एवी नोड (AV Node) का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "धड़कन शुरू करना", correct: false },
            { text: "अलिंद से निलय तक आवेग में थोड़ी देरी करना", correct: true },
            { text: "रक्त को शुद्ध करना", correct: false },
            { text: "रक्तचाप नियंत्रित करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एवी नोड एसए नोड से आने वाले विद्युत आवेग को थोड़ा धीमा कर देता है ताकि निलय के संकुचन से पहले अलिंद पूरी तरह से खाली हो सकें।"
    },
    {
        question: "प्रश्न 35. 'टैकीकार्डिया' (Tachycardia) क्या है?",
        answers: shuffle([
            { text: "धीमी हृदय गति", correct: false },
            { text: "तीव्र हृदय गति", correct: true },
            { text: "अनियमित हृदय गति", correct: false },
            { text: "हृदय गति का रुक जाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टैकीकार्डिया एक ऐसी स्थिति है जिसमें आराम की अवस्था में हृदय गति 100 बीट प्रति मिनट से अधिक हो जाती है।"
    },
    {
        question: "प्रश्न 36. 'ब्रैडीकार्डिया' (Bradycardia) क्या है?",
        answers: shuffle([
            { text: "धीमी हृदय गति", correct: true },
            { text: "तीव्र हृदय गति", correct: false },
            { text: "अनियमित हृदय गति", correct: false },
            { text: "हृदय गति का रुक जाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्रैडीकार्डिया एक ऐसी स्थिति है जिसमें आराम की अवस्था में हृदय गति 60 बीट प्रति मिनट से कम हो जाती है।"
    },
    {
        question: "प्रश्न 37. किस जानवर के पास तीन-कक्षीय हृदय होता है?",
        answers: shuffle([
            { text: "मछली", correct: false },
            { text: "मेंढक (उभयचर)", correct: true },
            { text: "पक्षी", correct: false },
            { text: "मनुष्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिकांश उभयचरों और सरीसृपों के हृदय में तीन कक्ष होते हैं - दो अलिंद और एक निलय, जिसमें शुद्ध और अशुद्ध रक्त आंशिक रूप से मिल जाता है।"
    },
    {
        question: "प्रश्न 38. 'स्ट्रोक वॉल्यूम' (Stroke Volume) क्या है?",
        answers: shuffle([
            { text: "एक मिनट में पंप किया गया रक्त", correct: false },
            { text: "एक धड़कन में प्रत्येक निलय द्वारा पंप किया गया रक्त", correct: true },
            { text: "हृदय में रक्त की कुल मात्रा", correct: false },
            { text: "धमनियों में रक्त की कुल मात्रा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्ट्रोक वॉल्यूम वह रक्त की मात्रा है जो हृदय के प्रत्येक संकुचन (धड़कन) के साथ बाएं निलय से बाहर पंप की जाती है, यह लगभग 70 मिलीलीटर होती है।"
    },
    {
        question: "प्रश्न 39. कौन सा वाल्व रक्त को बाएं निलय से महाधमनी में जाने देता है, लेकिन वापस नहीं आने देता?",
        answers: shuffle([
            { text: "माइट्रल वाल्व", correct: false },
            { text: "ट्राइकसपिड वाल्व", correct: false },
            { text: "एओर्टिक वाल्व (महाधमनी वाल्व)", correct: true },
            { text: "पल्मोनरी वाल्व (फुफ्फुसीय वाल्व)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एओर्टिक वाल्व बाएं निलय और महाधमनी के बीच स्थित होता है और यह सुनिश्चित करता है कि रक्त केवल एक दिशा में, यानी शरीर की ओर बहे।"
    },
    {
        question: "प्रश्न 40. 'एथेरोस्क्लेरोसिस' (Atherosclerosis) क्या है?",
        answers: shuffle([
            { text: "धमनियों का सख्त और संकीर्ण हो जाना", correct: true },
            { text: "शिराओं का फैल जाना", correct: false },
            { text: "हृदय की मांसपेशियों का कमजोर होना", correct: false },
            { text: "रक्त का थक्का न जमना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक ऐसी स्थिति है जिसमें वसा, कोलेस्ट्रॉल और अन्य पदार्थों (जिन्हें प्लाक कहा जाता है) के जमा होने से धमनियां संकरी और कठोर हो जाती हैं।"
    },
    {
        question: "प्रश्न 41. पहला सफल मानव हृदय प्रत्यारोपण (Heart Transplant) किसने किया था?",
        answers: shuffle([
            { text: "विलियम हार्वे", correct: false },
            { text: "कार्ल लैंडस्टीनर", correct: false },
            { text: "क्रिस्टियान बर्नार्ड", correct: true },
            { text: "रॉबर्ट कोच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्षिण अफ्रीका के सर्जन डॉ. क्रिस्टियान बर्नार्ड ने 1967 में दुनिया का पहला सफल मानव हृदय प्रत्यारोपण किया था।"
    },
    {
        question: "प्रश्न 42. हृदय के संकुचन के लिए कौन सा खनिज आयन आवश्यक है?",
        answers: shuffle([
            { text: "लोहा (Iron)", correct: false },
            { text: "आयोडीन (Iodine)", correct: false },
            { text: "कैल्शियम (Calcium)", correct: true },
            { text: "कोबाल्ट (Cobalt)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैल्शियम आयन हृदय की मांसपेशियों की कोशिकाओं में प्रवेश करके संकुचन की प्रक्रिया शुरू करने और बनाए रखने में एक महत्वपूर्ण भूमिका निभाते हैं।"
    },
    {
        question: "प्रश्न 43. कॉर्डे टेंडीने (Chordae Tendineae) का क्या कार्य है?",
        answers: shuffle([
            { text: "वाल्वों को निलय में उलटने से रोकना", correct: true },
            { text: "हृदय को विद्युत आवेग प्रदान करना", correct: false },
            { text: "हृदय को रक्त की आपूर्ति करना", correct: false },
            { text: "हृदय को अपनी जगह पर रखना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये पतले, मजबूत रेशेदार तार होते हैं जो ट्राइकसपिड और माइट्रल वाल्व को पेपिलरी मांसपेशियों से जोड़ते हैं और निलय के संकुचन के दौरान वाल्वों को पीछे की ओर अलिंद में खुलने से रोकते हैं।"
    },
    {
        question: "प्रश्न 44. प्रणालीगत परिसंचरण (Systemic Circulation) कहाँ से शुरू और समाप्त होता है?",
        answers: shuffle([
            { text: "बायाँ निलय से शुरू, दाहिना अलिंद पर समाप्त", correct: true },
            { text: "दाहिना निलय से शुरू, बायाँ अलिंद पर समाप्त", correct: false },
            { text: "बायाँ अलिंद से शुरू, दाहिना निलय पर समाप्त", correct: false },
            { text: "दाहिना अलिंद से शुरू, बायाँ निलय पर समाप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रणालीगत परिसंचरण बाएं निलय से ऑक्सीजन युक्त रक्त को शरीर में भेजता है और शरीर से ऑक्सीजन रहित रक्त को वापस दाहिने अलिंद में लाता है।"
    },
    {
        question: "प्रश्न 45. हृदय की विद्युत चालन प्रणाली का सही क्रम क्या है?",
        answers: shuffle([
            { text: "AV नोड → SA नोड → पुरकिंजे फाइबर → हिज का बंडल", correct: false },
            { text: "SA नोड → AV नोड → हिज का बंडल → पुरकिंजे फाइबर", correct: true },
            { text: "हिज का बंडल → पुरकिंजे फाइबर → SA नोड → AV नोड", correct: false },
            { text: "SA नोड → हिज का बंडल → AV नोड → पुरकिंजे फाइबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत आवेग इसी क्रम में हृदय में फैलता है, जिससे एक समन्वित धड़कन सुनिश्चित होती है।"
    },
    {
        question: "प्रश्न 46. कौन सी शिरा ऑक्सीजन युक्त (शुद्ध) रक्त का वहन करती है?",
        answers: shuffle([
            { text: "महाशिरा (Vena Cava)", correct: false },
            { text: "यकृत शिरा (Hepatic Vein)", correct: false },
            { text: "फुफ्फुसीय शिरा (Pulmonary Vein)", correct: true },
            { text: "वृक्क शिरा (Renal Vein)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फुफ्फुसीय शिरा एकमात्र शिरा है जो शुद्ध रक्त ले जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह फेफड़ों से ऑक्सीजन युक्त रक्त को बाएं अलिंद में लाती है।"
    },
    {
        question: "प्रश्न 47. 'हाइपरटेंशन' (Hypertension) का क्या अर्थ है?",
        answers: shuffle([
            { text: "निम्न रक्तचाप", correct: false },
            { text: "उच्च रक्तचाप", correct: true },
            { text: "सामान्य रक्तचाप", correct: false },
            { text: "अस्थिर रक्तचाप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाइपरटेंशन वह स्थिति है जब धमनियों में रक्त का दबाव लगातार सामान्य से अधिक (आमतौर पर 140/90 mmHg से ऊपर) बना रहता है।"
    },
    {
        question: "प्रश्न 48. हृदय का कौन सा कक्ष सबसे मोटी दीवार वाला होता है?",
        answers: shuffle([
            { text: "दाहिना अलिंद", correct: false },
            { text: "बायाँ अलिंद", correct: false },
            { text: "दाहिना निलय", correct: false },
            { text: "बायाँ निलय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाएँ निलय की दीवारें सबसे मोटी और मजबूत होती हैं क्योंकि इसे पूरे शरीर में रक्त पंप करने के लिए सबसे अधिक बल उत्पन्न करना पड़ता है।"
    },
    {
        question: "प्रश्न 49. 'कार्डियोमेगाली' (Cardiomegaly) किस स्थिति को संदर्भित करता है?",
        answers: shuffle([
            { text: "हृदय का छोटा होना", correct: false },
            { text: "हृदय का बड़ा होना", correct: true },
            { text: "हृदय की तीव्र धड़कन", correct: false },
            { text: "हृदय में छेद होना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्डियोमेगाली का शाब्दिक अर्थ है \"बढ़ा हुआ हृदय\"।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अपने आप में कोई बीमारी नहीं है, बल्कि उच्च रक्तचाप या कोरोनरी धमनी रोग जैसे अंतर्निहित कारण का एक लक्षण है।"
    },
    {
        question: "प्रश्न 50. निलयों के शिथिलन (Ventricular Repolarization) को ECG की कौन सी तरंग दर्शाती है?",
        answers: shuffle([
            { text: "P तरंग", correct: false },
            { text: "QRS कॉम्प्लेक्स", correct: false },
            { text: "T तरंग", correct: true },
            { text: "U तरंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> T तरंग निलयों के पुन:ध्रुवण या शिथिलन को दर्शाती है, जब वे अगले संकुचन के लिए तैयार हो रहे होते हैं।"
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