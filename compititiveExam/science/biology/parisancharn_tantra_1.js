const questions = [
    {
        topHeading: "परिसंचरण तंत्र पर आधारित 50 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1: मानव हृदय में कितने कक्ष (Chambers) होते हैं?",
        answers: shuffle([
            { text: "दो", correct: false },
            { text: "तीन", correct: false },
            { text: "चार", correct: true },
            { text: "पाँच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मानव हृदय में चार कक्ष होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  दो ऊपरी कक्ष जिन्हें दायां और बायां आलिंद (Atrium) कहते हैं और दो निचले कक्ष जिन्हें दायां और बायां निलय (Ventricle) कहते हैं।"
    },
    {
        question: "प्रश्न 2: रक्त का तरल हिस्सा क्या कहलाता है?",
        answers: shuffle([
            { text: "हीमोग्लोबिन", correct: false },
            { text: "प्लेटलेट्स", correct: false },
            { text: "प्लाज्मा", correct: true },
            { text: "सीरम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रक्त का लगभग 55% हिस्सा प्लाज्मा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो एक पीले रंग का तरल पदार्थ है, इसमें जल, प्रोटीन, हार्मोन और पोषक तत्व होते हैं।"
    },
    {
        question: "प्रश्न 3: कौन सी रक्त वाहिकाएं हृदय से रक्त को शरीर के अन्य भागों तक ले जाती हैं?",
        answers: shuffle([
            { text: "शिराएं (Veins)", correct: false },
            { text: "धमनियां (Arteries)", correct: true },
            { text: "केशिकाएं (Capillaries)", correct: false },
            { text: "लसीका वाहिकाएं (Lymph vessels)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धमनियां मोटी दीवारों वाली रक्त वाहिकाएं होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो ऑक्सीजन युक्त रक्त को हृदय से शरीर के विभिन्न ऊतकों और अंगों तक पहुंचाती हैं (अपवाद: फुफ्फुसीय धमनी)।"
    },
    {
        question: "प्रश्न 4: \"सर्वदाता\" (Universal Donor) रक्त समूह कौन सा है?",
        answers: shuffle([
            { text: "A", correct: false },
            { text: "B", correct: false },
            { text: "AB", correct: false },
            { text: "O", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रक्त समूह O में कोई एंटीजन (A या B) नहीं होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसलिए यह किसी भी रक्त समूह वाले व्यक्ति को दिया जा सकता है। O-negative को वास्तविक सर्वदाता माना जाता है।"
    },
    {
        question: "प्रश्न 5: लाल रक्त कोशिकाओं (RBC) का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "रोगों से लड़ना", correct: false },
            { text: "रक्त का थक्का बनाना", correct: false },
            { text: "ऑक्सीजन का परिवहन करना", correct: true },
            { text: "हार्मोन का उत्पादन करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल रक्त कोशिकाओं में हीमोग्लोबिन नामक प्रोटीन होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो फेफड़ों से ऑक्सीजन को बांधकर शरीर की सभी कोशिकाओं तक पहुंचाता है।"
    },
    {
        question: "प्रश्न 6: हृदय का प्राकृतिक 'पेसमेकर' किसे कहा जाता है?",
        answers: shuffle([
            { text: "एवी नोड (AV node)", correct: false },
            { text: "एसए नोड (SA node)", correct: true },
            { text: "पुरकिंजे फाइबर", correct: false },
            { text: "हिज का बंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> साइनोएट्रियल (SA) नोड दाएं आलिंद में स्थित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और यह विद्युत आवेग उत्पन्न करता है जो हृदय की धड़कन को शुरू और नियंत्रित करता है, इसीलिए इसे हृदय का पेसमेकर कहते हैं।"
    },
    {
        question: "प्रश्न 7: एक सामान्य वयस्क व्यक्ति का रक्तचाप (Blood Pressure) कितना होता है?",
        answers: shuffle([
            { text: "80/120 mm Hg", correct: false },
            { text: "120/80 mm Hg", correct: true },
            { text: "140/90 mm Hg", correct: false },
            { text: "90/60 mm Hg", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामान्य रक्तचाप 120/80 mm Hg होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जहाँ 120 सिस्टोलिक (संकुचन) दाब है और 80 डायस्टोलिक (शिथिलन) दाब है।"
    },
    {
        question: "प्रश्न 8: कौन सी रक्त वाहिकाएं अशुद्ध (ऑक्सीजन रहित) रक्त का वहन करती हैं?",
        answers: shuffle([
            { text: "धमनियां", correct: false },
            { text: "शिराएं", correct: true },
            { text: "महाधमनी", correct: false },
            { text: "फुफ्फुसीय शिरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शिराएं शरीर के विभिन्न भागों से ऑक्सीजन रहित रक्त को वापस हृदय तक लाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  (अपवाद: फुफ्फुसीय शिरा)।"
    },
    {
        question: "प्रश्न 9: रक्त का थक्का बनाने में कौन सी कोशिकाएं मदद करती हैं?",
        answers: shuffle([
            { text: "लाल रक्त कोशिकाएं (RBC)", correct: false },
            { text: "श्वेत रक्त कोशिकाएं (WBC)", correct: false },
            { text: "प्लेटलेट्स (बिम्बाणु)", correct: true },
            { text: "न्यूट्रोफिल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोट लगने पर प्लेटलेट्स क्षतिग्रस्त रक्त वाहिका के स्थान पर एकत्रित होकर एक अस्थायी प्लग बनाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और रक्त का थक्का जमाने की प्रक्रिया शुरू करते हैं।"
    },
    {
        question: "प्रश्न 10: \"सर्वाग्राही\" (Universal Recipient) रक्त समूह कौन सा है?",
        answers: shuffle([
            { text: "A", correct: false },
            { text: "B", correct: false },
            { text: "AB", correct: true },
            { text: "O", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रक्त समूह AB में A और B दोनों एंटीजन होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  लेकिन इसके प्लाज्मा में कोई एंटीबॉडी (anti-A या anti-B) नहीं होती, इसलिए यह किसी भी रक्त समूह से रक्त ले सकता है।"
    },
    {
        question: "प्रश्न 11: हीमोग्लोबिन में कौन सी धातु पाई जाती है?",
        answers: shuffle([
            { text: "कैल्शियम", correct: false },
            { text: "मैग्नीशियम", correct: false },
            { text: "लोहा (Iron)", correct: true },
            { text: "सोडियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीमोग्लोबिन एक लौह युक्त प्रोटीन है।<br><br><i class='fa-solid fa-angles-right icon'></i>  प्रत्येक हीमोग्लोबिन अणु में लोहे के चार परमाणु होते हैं जो ऑक्सीजन के अणुओं को बांधते हैं।"
    },
    {
        question: "प्रश्न 12: हृदय की ध्वनि (Heart Sound) 'लब-डब' किसके कारण होती है?",
        answers: shuffle([
            { text: "हृदय में रक्त भरने से", correct: false },
            { text: "हृदय के वाल्व के खुलने और बंद होने से", correct: true },
            { text: "धमनियों में रक्त के प्रवाह से", correct: false },
            { text: "हृदय की मांसपेशियों के संकुचन से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पहली ध्वनि 'लब' ट्राइकस्पिड और माइट्रल वाल्व के बंद होने से होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और दूसरी ध्वनि 'डब' एओर्टिक और पल्मोनरी वाल्व के बंद होने से होती है।"
    },
    {
        question: "प्रश्न 13: ECG (इलेक्ट्रोकार्डियोग्राम) का उपयोग किसके कार्य का पता लगाने के लिए किया जाता है?",
        answers: shuffle([
            { text: "मस्तिष्क", correct: false },
            { text: "फेफड़े", correct: false },
            { text: "हृदय", correct: true },
            { text: "वृक्क (किडनी)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ECG हृदय के माध्यम से फैलने वाली विद्युत गतिविधि को रिकॉर्ड करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे हृदय की लय और स्वास्थ्य का आकलन किया जा सकता है।"
    },
    {
        question: "प्रश्न 14: मानव शरीर की सबसे बड़ी धमनी कौन सी है?",
        answers: shuffle([
            { text: "फुफ्फुसीय धमनी", correct: false },
            { text: "कैरोटिड धमनी", correct: false },
            { text: "महाधमनी (Aorta)", correct: true },
            { text: "कोरोनरी धमनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाधमनी (Aorta) शरीर की सबसे बड़ी और मुख्य धमनी है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो बाएं निलय से निकलती है और पूरे शरीर में ऑक्सीजन युक्त रक्त वितरित करती है।"
    },
    {
        question: "प्रश्न 15: श्वेत रक्त कोशिकाओं (WBC) का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "ऑक्सीजन का परिवहन", correct: false },
            { text: "रक्त का थक्का बनाना", correct: false },
            { text: "शरीर की प्रतिरक्षा और संक्रमण से बचाव", correct: true },
            { text: "पोषक तत्वों का परिवहन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्वेत रक्त कोशिकाएं, जिन्हें ल्यूकोसाइट्स भी कहते हैं, शरीर की प्रतिरक्षा प्रणाली का एक महत्वपूर्ण हिस्सा हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और बैक्टीरिया, वायरस जैसे रोगजनकों से लड़ती हैं।"
    },
    {
        question: "प्रश्न 16: दोहरा परिसंचरण (Double Circulation) का क्या अर्थ है?",
        answers: shuffle([
            { text: "रक्त का शरीर में दो बार प्रवेश करना", correct: false },
            { text: "रक्त का एक पूरे चक्र में हृदय से दो बार गुजरना", correct: true },
            { text: "दो हृदयों का होना", correct: false },
            { text: "धमनी और शिराओं का अलग होना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मनुष्यों में, रक्त एक चक्र पूरा करने के लिए हृदय से दो बार गुजरता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  एक बार फुफ्फुसीय परिसंचरण (हृदय से फेफड़े) और दूसरी बार दैहिक परिसंचरण (हृदय से शरीर) के लिए।"
    },
    {
        question: "प्रश्न 17: कौन सी शिरा ऑक्सीजन युक्त (शुद्ध) रक्त का वहन करती है?",
        answers: shuffle([
            { text: "महाशिरा (Vena Cava)", correct: false },
            { text: "जुगुलर शिरा (Jugular Vein)", correct: false },
            { text: "फुफ्फुसीय शिरा (Pulmonary Vein)", correct: true },
            { text: "हेपेटिक शिरा (Hepatic Vein)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फुफ्फुसीय शिरा एक अपवाद है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो फेफड़ों से ऑक्सीजन युक्त रक्त को हृदय के बाएं आलिंद में वापस लाती है।"
    },
    {
        question: "प्रश्न 18: रक्तचाप मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "बैरोमीटर", correct: false },
            { text: "थर्मामीटर", correct: false },
            { text: "स्फिग्मोमैनोमीटर", correct: true },
            { text: "लैक्टोमीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्फिग्मोमैनोमीटर, जिसे सामान्य भाषा में बीपी मशीन भी कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसका उपयोग धमनियों में रक्त के दाब को मापने के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 19: लाल रक्त कोशिकाओं (RBC) का जीवन काल लगभग कितना होता है?",
        answers: shuffle([
            { text: "60 दिन", correct: false },
            { text: "120 दिन", correct: true },
            { text: "180 दिन", correct: false },
            { text: "240 दिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक औसत लाल रक्त कोशिका लगभग 120 दिनों तक परिसंचरण में रहती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसके बाद इसे प्लीहा (spleen) और यकृत (liver) में नष्ट कर दिया जाता है।"
    },
    {
        question: "प्रश्न 20: रक्त के अध्ययन को क्या कहा जाता है?",
        answers: shuffle([
            { text: "कार्डियोलॉजी", correct: false },
            { text: "हेमेटोलॉजी", correct: true },
            { text: "ऑन्कोलॉजी", correct: false },
            { text: "नेफ्रोलॉजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेमेटोलॉजी चिकित्सा विज्ञान की वह शाखा है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो रक्त, रक्त बनाने वाले अंगों और रक्त से संबंधित रोगों का अध्ययन करती है।"
    },
    {
        question: "प्रश्न 21: 'Rh फैक्टर' का नाम किस पर आधारित है?",
        answers: shuffle([
            { text: "चूहे पर", correct: false },
            { text: "मनुष्य पर", correct: false },
            { text: "रीसस बंदर पर", correct: true },
            { text: "कुत्ते पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> Rh फैक्टर (एक प्रकार का एंटीजन) की खोज सबसे पहले रीसस बंदर के रक्त में की गई थी।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसीलिए इसका नाम 'Rh' (Rhesus) रखा गया।"
    },
    {
        question: "प्रश्न 22: हृदय को रक्त की आपूर्ति करने वाली रक्त वाहिकाओं को क्या कहते हैं?",
        answers: shuffle([
            { text: "कैरोटिड धमनी", correct: false },
            { text: "हेपेटिक धमनी", correct: false },
            { text: "कोरोनरी धमनी", correct: true },
            { text: "रीनल धमनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोरोनरी धमनियां महाधमनी से निकलती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और हृदय की मांसपेशियों को ऑक्सीजन और पोषक तत्वों से भरपूर रक्त की आपूर्ति करती हैं।"
    },
    {
        question: "प्रश्न 23: रक्त का pH मान कितना होता है?",
        answers: shuffle([
            { text: "6.4 (अम्लीय)", correct: false },
            { text: "7.0 (उदासीन)", correct: false },
            { text: "7.4 (हल्का क्षारीय)", correct: true },
            { text: "8.4 (क्षारीय)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मानव रक्त की प्रकृति थोड़ी क्षारीय होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसका सामान्य pH मान 7.35 से 7.45 के बीच होता है।"
    },
    {
        question: "प्रश्न 24: एनीमिया (रक्ताल्पता) किसकी कमी के कारण होता है?",
        answers: shuffle([
            { text: "प्लेटलेट्स", correct: false },
            { text: "श्वेत रक्त कोशिकाएं", correct: false },
            { text: "हीमोग्लोबिन या लाल रक्त कोशिकाएं", correct: true },
            { text: "प्लाज्मा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एनीमिया वह स्थिति है जब रक्त में ऑक्सीजन ले जाने की क्षमता कम हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसका मुख्य कारण लाल रक्त कोशिकाओं या उनमें मौजूद हीमोग्लोबिन की कमी है।"
    },
    {
        question: "प्रश्न 25: रक्त वाहिकाओं में रक्त को जमने से कौन सा प्रोटीन रोकता है?",
        answers: shuffle([
            { text: "फाइब्रिनोजेन", correct: false },
            { text: "थ्रोम्बिन", correct: false },
            { text: "हेपरिन", correct: true },
            { text: "ग्लोब्युलिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेपरिन एक प्राकृतिक प्रतिस्कंदक (anticoagulant) है जो यकृत और मास्ट कोशिकाओं द्वारा निर्मित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह रक्त वाहिकाओं के अंदर रक्त को थक्का बनने से रोकता है।"
    },
    {
        question: "प्रश्न 26: लसीका (Lymph) का रंग कैसा होता है?",
        answers: shuffle([
            { text: "लाल", correct: false },
            { text: "नीला", correct: false },
            { text: "रंगहीन या हल्का पीला", correct: true },
            { text: "हरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लसीका एक तरल पदार्थ है जो रक्त प्लाज्मा के केशिकाओं से छनने से बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसमें लाल रक्त कोशिकाएं नहीं होतीं, इसलिए यह रंगहीन या हल्का पीला होता है।"
    },
    {
        question: "प्रश्न 27: हृदय के संकुचन (Contraction) को क्या कहा जाता है?",
        answers: shuffle([
            { text: "डायस्टोल", correct: false },
            { text: "सिस्टोल", correct: true },
            { text: "लव", correct: false },
            { text: "डब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिस्टोल वह चरण है जब हृदय की मांसपेशियां (विशेषकर निलय) सिकुड़ती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और रक्त को धमनियों में पंप करती हैं।"
    },
    {
        question: "प्रश्न 28: बाएं आलिंद और बाएं निलय के बीच कौन सा वाल्व होता है?",
        answers: shuffle([
            { text: "ट्राइकस्पिड वाल्व", correct: false },
            { text: "माइट्रल वाल्व (बायकस्पिड वाल्व)", correct: true },
            { text: "पल्मोनरी वाल्व", correct: false },
            { text: "एओर्टिक वाल्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माइट्रल वाल्व, जिसे बायकस्पिड वाल्व भी कहते हैं, हृदय के बाईं ओर स्थित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और यह सुनिश्चित करता है कि रक्त बाएं आलिंद से बाएं निलय में एक ही दिशा में बहे।"
    },
    {
        question: "प्रश्न 29: उच्च रक्तचाप (Hypertension) की स्थिति क्या है?",
        answers: shuffle([
            { text: "जब रक्तचाप 120/80 mm Hg से कम हो", correct: false },
            { text: "जब रक्तचाप 140/90 mm Hg या उससे अधिक हो", correct: true },
            { text: "जब हृदय गति तेज हो", correct: false },
            { text: "जब रक्त में कोलेस्ट्रॉल अधिक हो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब धमनियों में रक्त का दबाव लगातार सामान्य स्तर से बहुत अधिक रहता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  तो उस स्थिति को उच्च रक्तचाप या हाइपरटेंशन कहा जाता है।"
    },
    {
        question: "प्रश्न 30: लाल रक्त कोशिकाओं का निर्माण वयस्कों में कहाँ होता है?",
        answers: shuffle([
            { text: "यकृत", correct: false },
            { text: "प्लीहा (Spleen)", correct: false },
            { text: "हृदय", correct: false },
            { text: "लाल अस्थि मज्जा (Red Bone Marrow)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वयस्कों में, अधिकांश रक्त कोशिकाओं (RBC, WBC, और प्लेटलेट्स) का उत्पादन लंबी हड्डियों, जैसे कि कूल्हे और जांघ की हड्डी के अंदर मौजूद लाल अस्थि मज्जा में होता है।"
    },
    {
        question: "प्रश्न 31: हृदय को घेरने वाली झिल्ली को क्या कहा जाता है?",
        answers: shuffle([
            { text: "प्लूरा", correct: false },
            { text: "पेरिकार्डियम", correct: true },
            { text: "मेनिन्जेस", correct: false },
            { text: "पेरिटोनियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेरिकार्डियम एक दो-परत वाली थैली है जो हृदय को घेरती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  उसे सुरक्षित रखती है और उसे अपनी जगह पर बनाए रखने में मदद करती है।"
    },
    {
        question: "प्रश्न 32: किस रक्त कोशिका में केंद्रक (Nucleus) नहीं होता है?",
        answers: shuffle([
            { text: "श्वेत रक्त कोशिका", correct: false },
            { text: "लाल रक्त कोशिका (स्तनधारियों में)", correct: true },
            { text: "प्लेटलेट्स", correct: false },
            { text: "मोनोसाइट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परिपक्व स्तनधारी लाल रक्त कोशिकाओं में केंद्रक और अन्य कोशिकांग नहीं होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  ताकि वे अधिक से अधिक हीमोग्लोबिन और ऑक्सीजन ले जा सकें।"
    },
    {
        question: "प्रश्न 33: प्लाज्मा में पाया जाने वाला मुख्य प्रोटीन कौन सा है?",
        answers: shuffle([
            { text: "हीमोग्लोबिन", correct: false },
            { text: "एल्ब्यूमिन", correct: true },
            { text: "केराटिन", correct: false },
            { text: "मायोसिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एल्ब्यूमिन प्लाज्मा में सबसे प्रचुर मात्रा में पाया जाने वाला प्रोटीन है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह रक्त के परासरणी दाब को बनाए रखने और विभिन्न पदार्थों के परिवहन में मदद करता है।"
    },
    {
        question: "प्रश्न 34: रक्त परिसंचरण की खोज किसने की थी?",
        answers: shuffle([
            { text: "लुई पाश्चर", correct: false },
            { text: "विलियम हार्वे", correct: true },
            { text: "रॉबर्ट हुक", correct: false },
            { text: "ग्रेगर मेंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंग्रेज चिकित्सक विलियम हार्वे ने 1628 में पहली बार यह बताया।<br><br><i class='fa-solid fa-angles-right icon'></i>  कि रक्त शरीर में एक बंद प्रणाली में लगातार परिचालित होता है और हृदय इसे पंप करता है।"
    },
    {
        question: "प्रश्न 35: हृदय की मांसपेशियों को क्या कहते हैं?",
        answers: shuffle([
            { text: "एपिकार्डियम", correct: false },
            { text: "एंडोकार्डियम", correct: false },
            { text: "मायोकार्डियम", correct: true },
            { text: "पेरिकार्डियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मायोकार्डियम हृदय की दीवार की मध्य और सबसे मोटी परत है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो हृदय के संकुचन और पंपिंग क्रिया के लिए जिम्मेदार कार्डियक मांसपेशियों से बनी होती है।"
    },
    {
        question: "प्रश्न 36: रक्त का कौन सा घटक रक्त वाहिकाओं के बाहर ऊतकों में प्रवेश कर सकता है?",
        answers: shuffle([
            { text: "लाल रक्त कोशिकाएं", correct: false },
            { text: "प्लेटलेट्स", correct: false },
            { text: "श्वेत रक्त कोशिकाएं", correct: true },
            { text: "लगभग सभी बड़े प्रोटीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्वेत रक्त कोशिकाएं अमीबीय गति कर सकती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और संक्रमण स्थल तक पहुंचने के लिए केशिकाओं की दीवारों से बाहर निकलकर ऊतकों में प्रवेश कर सकती हैं। इस प्रक्रिया को डायपेडिसिस (Diapedesis) कहते हैं।"
    },
    {
        question: "प्रश्न 37: हृदय गति को नियंत्रित करने वाले हार्मोन कौन से हैं?",
        answers: shuffle([
            { text: "इंसुलिन और ग्लूकागन", correct: false },
            { text: "एस्ट्रोजन और प्रोजेस्टेरोन", correct: false },
            { text: "एड्रेनालाईन और नॉरएड्रेनालाईन", correct: true },
            { text: "थायरोक्सिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तनाव या उत्तेजना की स्थिति में अधिवृक्क ग्रंथि (Adrenal gland) से निकलने वाले ये हार्मोन।<br><br><i class='fa-solid fa-angles-right icon'></i>  हृदय गति और रक्तचाप को बढ़ाते हैं।"
    },
    {
        question: "प्रश्न 38: केशिकाएं (Capillaries) क्या हैं?",
        answers: shuffle([
            { text: "हृदय से रक्त ले जाने वाली वाहिकाएं", correct: false },
            { text: "हृदय तक रक्त लाने वाली वाहिकाएं", correct: false },
            { text: "सबसे सूक्ष्म रक्त वाहिकाएं जहाँ गैसों का आदान-प्रदान होता है", correct: true },
            { text: "लसीका ले जाने वाली वाहिकाएं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केशिकाएं अत्यंत पतली रक्त वाहिकाएं होती हैं जो धमनियों और शिराओं को जोड़ती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  इनकी पतली दीवारों के माध्यम से ऑक्सीजन, पोषक तत्व और अपशिष्ट पदार्थों का ऊतकों के साथ आदान-प्रदान होता है।"
    },
    {
        question: "प्रश्न 39: 'हृदय घात' (Heart Attack) का क्या कारण है?",
        answers: shuffle([
            { text: "हृदय गति का रुक जाना", correct: false },
            { text: "हृदय की मांसपेशियों में अपर्याप्त रक्त आपूर्ति", correct: true },
            { text: "फेफड़ों में संक्रमण", correct: false },
            { text: "उच्च रक्तचाप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हृदय घात तब होता है जब कोरोनरी धमनियों में रुकावट के कारण हृदय की मांसपेशियों के किसी हिस्से को पर्याप्त ऑक्सीजन युक्त रक्त नहीं मिल पाता।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे वह हिस्सा क्षतिग्रस्त होने लगता है।"
    },
    {
        question: "प्रश्न 40: प्लीहा (Spleen) को अक्सर क्या कहा जाता है?",
        answers: shuffle([
            { text: "शरीर का पावरहाउस", correct: false },
            { text: "लाल रक्त कोशिकाओं का कब्रिस्तान", correct: true },
            { text: "शरीर का रासायनिक कारखाना", correct: false },
            { text: "मास्टर ग्रंथि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्लीहा पुरानी और क्षतिग्रस्त लाल रक्त कोशिकाओं को रक्त प्रवाह से हटाकर नष्ट कर देती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसीलिए इसे 'RBC का कब्रिस्तान' कहा जाता है।"
    },
    {
        question: "प्रश्न 41: हीमोफिलिया (Haemophilia) कैसा रोग है?",
        answers: shuffle([
            { text: "एक जीवाणु संक्रमण", correct: false },
            { text: "एक विषाणु संक्रमण", correct: false },
            { text: "एक आनुवंशिक विकार जिसमें रक्त का थक्का नहीं जमता", correct: true },
            { text: "विटामिन की कमी से होने वाला रोग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीमोफिलिया एक आनुवंशिक रोग है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें शरीर में रक्त का थक्का बनाने के लिए आवश्यक क्लॉटिंग फैक्टर प्रोटीन की कमी होती है, जिससे मामूली चोट लगने पर भी अत्यधिक रक्तस्राव हो सकता है।"
    },
    {
        question: "प्रश्न 42: कौन सी रक्त कोशिकाएं एंटीबॉडी का उत्पादन करती हैं?",
        answers: shuffle([
            { text: "न्यूट्रोफिल", correct: false },
            { text: "इओसिनोफिल", correct: false },
            { text: "मोनोसाइट", correct: false },
            { text: "लिम्फोसाइट्स (B-लिम्फोसाइट्स)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिम्फोसाइट्स श्वेत रक्त कोशिकाओं का एक प्रकार हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  इनमें से B-लिम्फोसाइट्स रोगजनकों की पहचान करके उनके खिलाफ एंटीबॉडी नामक प्रोटीन का उत्पादन करते हैं।"
    },
    {
        question: "प्रश्न 43: 'कार्डियक साइकिल' (Cardiac Cycle) क्या है?",
        answers: shuffle([
            { text: "एक मिनट में हृदय की धड़कन की संख्या", correct: false },
            { text: "एक धड़कन की शुरुआत से अगली धड़कन की शुरुआत तक की पूरी घटना", correct: true },
            { text: "हृदय से रक्त का बाहर निकलना", correct: false },
            { text: "हृदय में रक्त का भरना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक कार्डियक साइकिल में हृदय का संकुचन (सिस्टोल) और शिथिलन (डायस्टोल) दोनों चरण शामिल होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें लगभग 0.8 सेकंड का समय लगता है।"
    },
    {
        question: "प्रश्न 44: 'ब्लू बेबी सिंड्रोम' किस कारण होता है?",
        answers: shuffle([
            { text: "रक्त में हीमोग्लोबिन की अधिकता", correct: false },
            { text: "रक्त में ऑक्सीजन की कमी (मेथेमोग्लोबिनेमिया)", correct: true },
            { text: "रक्त में कैल्शियम की कमी", correct: false },
            { text: "हृदय में जन्मजात दोष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सिंड्रोम तब होता है जब पीने के पानी में नाइट्रेट की अधिकता के कारण रक्त में मेथेमोग्लोबिन का स्तर बढ़ जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो ऑक्सीजन ले जाने में असमर्थ होता है, जिससे त्वचा नीली पड़ जाती है। यह हृदय के जन्मजात दोषों के कारण भी हो सकता है।"
    },
    {
        question: "प्रश्न 45: ल्यूकेमिया (Leukemia) किस प्रकार का कैंसर है?",
        answers: shuffle([
            { text: "त्वचा का कैंसर", correct: false },
            { text: "यकृत का कैंसर", correct: false },
            { text: "फेफड़ों का कैंसर", correct: false },
            { text: "रक्त या अस्थि मज्जा का कैंसर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ल्यूकेमिया में, अस्थि मज्जा में असामान्य श्वेत रक्त कोशिकाओं का अत्यधिक उत्पादन होने लगता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो स्वस्थ रक्त कोशिकाओं को बाहर कर देती हैं।"
    },
    {
        question: "प्रश्न 46: हृदय के निलय (Ventricles) की दीवारें आलिंद (Atria) की तुलना में मोटी क्यों होती हैं?",
        answers: shuffle([
            { text: "वे अधिक रक्त धारण करती हैं", correct: false },
            { text: "उन्हें अधिक दबाव के साथ रक्त पंप करना पड़ता है", correct: true },
            { text: "वे अशुद्ध रक्त पंप करती हैं", correct: false },
            { text: "वे आकार में बड़ी होती हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निलय को रक्त को फेफड़ों (दायां निलय) और पूरे शरीर (बायां निलय) में पंप करना होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसके लिए अधिक बल की आवश्यकता होती है, इसलिए उनकी मांसपेशीय दीवारें मोटी होती हैं।"
    },
    {
        question: "प्रश्न 47: हेपेटिक पोर्टल शिरा (Hepatic portal vein) रक्त को कहाँ से कहाँ तक ले जाती है?",
        answers: shuffle([
            { text: "यकृत से हृदय तक", correct: false },
            { text: "आंत से यकृत तक", correct: true },
            { text: "वृक्क से यकृत तक", correct: false },
            { text: "यकृत से फेफड़ों तक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक अनूठी शिरा है जो पाचन तंत्र (आंत, आमाशय) से पोषक तत्वों से भरपूर रक्त को सीधे यकृत तक ले जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  ताकि यकृत उन पोषक तत्वों को संसाधित कर सके।"
    },
    {
        question: "प्रश्न 48: धमनियों की दीवारें शिराओं की तुलना में अधिक मोटी और लचीली क्यों होती हैं?",
        answers: shuffle([
            { text: "क्योंकि वे सतह के करीब होती हैं", correct: false },
            { text: "क्योंकि उनमें वाल्व होते हैं", correct: false },
            { text: "क्योंकि उन्हें हृदय से आने वाले उच्च दबाव वाले रक्त का सामना करना पड़ता है", correct: true },
            { text: "क्योंकि वे अधिक रक्त ले जाती हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हृदय जब रक्त पंप करता है तो वह बहुत उच्च दाब पर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इस दाब को झेलने के लिए धमनियों की दीवारें मोटी, मजबूत और लचीली होती हैं।"
    },
    {
        question: "प्रश्न 49: रक्त में कोलेस्ट्रॉल का उच्च स्तर किस रोग का खतरा बढ़ाता है?",
        answers: shuffle([
            { text: "मधुमेह", correct: false },
            { text: "एथेरोस्क्लेरोसिस (धमनी काठिन्य)", correct: true },
            { text: "मलेरिया", correct: false },
            { text: "अस्थमा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रक्त में अतिरिक्त कोलेस्ट्रॉल धमनियों की आंतरिक दीवारों पर जमा हो सकता है, जिससे प्लाक बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह धमनियों को संकीर्ण और कठोर बना देता है, जिसे एथेरोस्क्लेरोसिस कहते हैं, और यह हृदय रोग का मुख्य कारण है।"
    },
    {
        question: "प्रश्न 50: एक हृदय चक्र (Cardiac Cycle) में कितना समय लगता है?",
        answers: shuffle([
            { text: "0.5 सेकंड", correct: false },
            { text: "0.8 सेकंड", correct: true },
            { text: "1.0 सेकंड", correct: false },
            { text: "1.2 सेकंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक सामान्य आराम की अवस्था में (72-75 धड़कन प्रति मिनट)।<br><br><i class='fa-solid fa-angles-right icon'></i>  एक हृदय चक्र को पूरा होने में लगभग 0.8 सेकंड लगते हैं।"
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