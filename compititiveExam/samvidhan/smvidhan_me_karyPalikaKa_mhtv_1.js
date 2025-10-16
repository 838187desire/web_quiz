const questions = [
    {
        topHeading: "संविधान में कार्यपालिका के महत्व पर आधारित 50 बहुविकल्पीय प्रश्न (quiz_no.)"
    },
    {
        question: "प्रश्न 1. भारतीय संघ की कार्यपालिका शक्ति किसमें निहित है?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "मंत्रिपरिषद", correct: false },
            { text: "संसद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के अनुच्छेद 53(1) के अनुसार, संघ की कार्यपालिका शक्ति राष्ट्रपति में निहित होगी और वह इसका प्रयोग संविधान के अनुसार स्वयं या अपने अधीनस्थ अधिकारियों के द्वारा करेगा।"
    },
    {
        question: "प्रश्न 2. भारत में सरकार की संसदीय प्रणाली में वास्तविक कार्यकारी शक्ति का प्रयोग कौन करता है?",
        answers: shuffle([
            { text: "राष्ट्रपति", correct: false },
            { text: "सर्वोच्च न्यायालय", correct: false },
            { text: "प्रधानमंत्री की अध्यक्षता वाली मंत्रिपरिषद", correct: true },
            { text: "संसद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में संसदीय प्रणाली अपनाई गई है, जहाँ राष्ट्रपति केवल नाममात्र (De Jure) के प्रमुख होते हैं, जबकि वास्तविक (De Facto) कार्यकारी शक्तियाँ प्रधानमंत्री और उनकी मंत्रिपरिषद में निहित होती हैं।"
    },
    {
        question: "प्रश्न 3. राष्ट्रपति पद के लिए उम्मीदवार की न्यूनतम आयु कितनी होनी चाहिए?",
        answers: shuffle([
            { text: "25 वर्ष", correct: false },
            { text: "30 वर्ष", correct: false },
            { text: "35 वर्ष", correct: true },
            { text: "40 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 58 के अनुसार, कोई भी व्यक्ति राष्ट्रपति चुने जाने के योग्य तभी होगा जब वह भारत का नागरिक हो, 35 वर्ष की आयु पूरी कर चुका हो, और लोकसभा का सदस्य चुने जाने की योग्यता रखता हो।"
    },
    {
        question: "प्रश्न 4. राष्ट्रपति का चुनाव किस पद्धति से होता है?",
        answers: shuffle([
            { text: "प्रत्यक्ष मतदान", correct: false },
            { text: "आनुपातिक प्रतिनिधित्व प्रणाली के अनुसार एकल संक्रमणीय मत द्वारा", correct: true },
            { text: "केवल लोकसभा सदस्यों द्वारा", correct: false },
            { text: "प्रधानमंत्री द्वारा मनोनयन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 55 के अनुसार, राष्ट्रपति का चुनाव एक निर्वाचक मंडल द्वारा आनुपातिक प्रतिनिधित्व प्रणाली के अनुसार एकल संक्रमणीय मत पद्धति से होता है, जिसमें मतदान गुप्त होता है।"
    },
    {
        question: "प्रश्न 5. भारत के राष्ट्रपति को पद से हटाने की प्रक्रिया (महाभियोग) का उल्लेख किस अनुच्छेद में है?",
        answers: shuffle([
            { text: "अनुच्छेद 59", correct: false },
            { text: "अनुच्छेद 60", correct: false },
            { text: "अनुच्छेद 61", correct: true },
            { text: "अनुच्छेद 62", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रपति पर 'संविधान के अतिक्रमण' के लिए महाभियोग की प्रक्रिया अनुच्छेद 61 में वर्णित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रक्रिया संसद के किसी भी सदन में शुरू की जा सकती है।"
    },
    {
        question: "प्रश्न 6. राष्ट्रपति को शपथ कौन दिलाता है?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "उपराष्ट्रपति", correct: false },
            { text: "भारत के मुख्य न्यायाधीश", correct: true },
            { text: "लोकसभा अध्यक्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 60 के अनुसार, राष्ट्रपति अपना पद ग्रहण करने से पहले भारत के मुख्य न्यायाधीश या उनकी अनुपस्थिति में सर्वोच्च न्यायालय के वरिष्ठतम न्यायाधीश के समक्ष शपथ लेते हैं।"
    },
    {
        question: "प्रश्न 7. भारत के महान्यायवादी (Attorney General) की नियुक्ति कौन करता है?",
        answers: shuffle([
            { text: "भारत के मुख्य न्यायाधीश", correct: false },
            { text: "प्रधानमंत्री", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "विधि मंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 76 के अनुसार, राष्ट्रपति सर्वोच्च न्यायालय का न्यायाधीश नियुक्त होने के योग्य किसी व्यक्ति को भारत का महान्यायवादी नियुक्त करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> वह राष्ट्रपति के प्रसादपर्यंत पद धारण करता है।"
    },
    {
        question: "प्रश्न 8. राष्ट्रपति किस अनुच्छेद के तहत संसद के दोनों सदनों की संयुक्त बैठक बुला सकता है?",
        answers: shuffle([
            { text: "अनुच्छेद 108", correct: true },
            { text: "अनुच्छेद 110", correct: false },
            { text: "अनुच्छेद 123", correct: false },
            { text: "अनुच्छेद 78", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब किसी साधारण विधेयक पर संसद के दोनों सदनों में गतिरोध उत्पन्न हो जाता है, तो राष्ट्रपति अनुच्छेद 108 के तहत संयुक्त बैठक बुला सकता है, जिसकी अध्यक्षता लोकसभा अध्यक्ष करता है।"
    },
    {
        question: "प्रश्न 9. राष्ट्रपति की क्षमादान की शक्ति किस अनुच्छेद में वर्णित है?",
        answers: shuffle([
            { text: "अनुच्छेद 71", correct: false },
            { text: "अनुच्छेद 72", correct: true },
            { text: "अनुच्छेद 74", correct: false },
            { text: "अनुच्छेद 76", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 72 राष्ट्रपति को किसी अपराध के लिए दोषी ठहराए गए व्यक्ति के दंड को क्षमा, उसका प्रविलंबन, विराम या परिहार करने अथवा दंडादेश के निलंबन, परिहार या लघुकरण की शक्ति प्रदान करता है।"
    },
    {
        question: "प्रश्न 10. संघ की कार्यपालिका में कौन-कौन शामिल होते हैं?",
        answers: shuffle([
            { text: "केवल राष्ट्रपति और प्रधानमंत्री", correct: false },
            { text: "राष्ट्रपति, उपराष्ट्रपति और मंत्रिपरिषद", correct: false },
            { text: "राष्ट्रपति, उपराष्ट्रपति, प्रधानमंत्री, मंत्रिपरिषद और महान्यायवादी", correct: true },
            { text: "प्रधानमंत्री, मंत्रिपरिषद और संसद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के भाग V के अनुसार, संघ की कार्यपालिका में राष्ट्रपति, उपराष्ट्रपति, प्रधानमंत्री, प्रधानमंत्री की अध्यक्षता वाली मंत्रिपरिषद और भारत के महान्यायवादी शामिल होते हैं।"
    },
    {
        question: "प्रश्न 11. भारत का उपराष्ट्रपति किसका पदेन सभापति होता है?",
        answers: shuffle([
            { text: "लोकसभा", correct: false },
            { text: "राज्यसभा", correct: true },
            { text: "नीति आयोग", correct: false },
            { text: "राष्ट्रीय विकास परिषद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 64 और अनुच्छेद 89(1) के अनुसार, भारत का उपराष्ट्रपति राज्यसभा का पदेन सभापति होता है।"
    },
    {
        question: "प्रश्न 12. प्रधानमंत्री की नियुक्ति कौन करता है?",
        answers: shuffle([
            { text: "लोकसभा अध्यक्ष", correct: false },
            { text: "भारत के मुख्य न्यायाधीश", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "बहुमत दल का अध्यक्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 75(1) के अनुसार, प्रधानमंत्री की नियुक्ति राष्ट्रपति द्वारा की जाएगी और अन्य मंत्रियों की नियुक्ति राष्ट्रपति, प्रधानमंत्री की सलाह पर करेगा।"
    },
    {
        question: "प्रश्न 13. मंत्रिपरिषद सामूहिक रूप से किसके प्रति उत्तरदायी होती है?",
        answers: shuffle([
            { text: "राष्ट्रपति", correct: false },
            { text: "राज्यसभा", correct: false },
            { text: "लोकसभा", correct: true },
            { text: "प्रधानमंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 75(3) यह स्पष्ट करता है कि मंत्रिपरिषद सामूहिक रूप से लोकसभा (House of the People) के प्रति उत्तरदायी होगी।<br><br><i class='fa-solid fa-angles-right icon'></i> यह संसदीय प्रणाली का आधारभूत सिद्धांत है।"
    },
    {
        question: "प्रश्न 14. किस अनुच्छेद के तहत राष्ट्रपति को जानकारी देने के संबंध में प्रधानमंत्री के कर्तव्य निर्धारित किए गए हैं?",
        answers: shuffle([
            { text: "अनुच्छेद 74", correct: false },
            { text: "अनुच्छेद 75", correct: false },
            { text: "अनुच्छेद 77", correct: false },
            { text: "अनुच्छेद 78", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 78 प्रधानमंत्री का यह कर्तव्य निर्धारित करता है कि वह संघ के प्रशासन और विधान संबंधी जानकारी राष्ट्रपति को दे और राष्ट्रपति द्वारा मांगे जाने पर प्रस्तुत करे।"
    },
    {
        question: "प्रश्न 15. राष्ट्रपति किस अनुच्छेद के तहत अध्यादेश (Ordinance) जारी कर सकता है?",
        answers: shuffle([
            { text: "अनुच्छेद 111", correct: false },
            { text: "अनुच्छेद 123", correct: true },
            { text: "अनुच्छेद 143", correct: false },
            { text: "अनुच्छेद 352", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब संसद का सत्र न चल रहा हो और किसी कानून की तत्काल आवश्यकता हो, तो अनुच्छेद 123 राष्ट्रपति को अध्यादेश जारी करने की शक्ति देता है, जिसका प्रभाव संसद द्वारा बनाए गए कानून के समान होता है।"
    },
    {
        question: "प्रश्न 16. भारत सरकार के सभी कार्यपालक कार्य किसके नाम से किए जाते हैं?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "गृह मंत्री", correct: false },
            { text: "भारत के मुख्य सचिव", correct: false },
            { text: "राष्ट्रपति", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 77(1) के अनुसार, भारत सरकार की समस्त कार्यपालक कार्रवाई राष्ट्रपति के नाम से की हुई कही जाएगी।"
    },
    {
        question: "प्रश्न 17. भारत के तीनों सशस्त्र बलों (सेना, नौसेना और वायु सेना) का सर्वोच्च कमांडर कौन होता है?",
        answers: shuffle([
            { text: "रक्षा मंत्री", correct: false },
            { text: "प्रधानमंत्री", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "चीफ ऑफ डिफेंस स्टाफ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 53(2) के अनुसार, संघ के रक्षा बलों का सर्वोच्च समादेश (Supreme Command) राष्ट्रपति में निहित होता है।"
    },
    {
        question: "प्रश्न 18. राष्ट्रपति राज्यसभा में कितने सदस्यों को मनोनीत कर सकता है?",
        answers: shuffle([
            { text: "2", correct: false },
            { text: "10", correct: false },
            { text: "12", correct: true },
            { text: "15", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 80(3) के तहत राष्ट्रपति, साहित्य, विज्ञान, कला और समाज सेवा में विशेष ज्ञान या व्यावहारिक अनुभव रखने वाले 12 व्यक्तियों को राज्यसभा के लिए मनोनीत कर सकते हैं।"
    },
    {
        question: "प्रश्न 19. \"पॉकेट वीटो\" (Pocket Veto) की शक्ति का प्रयोग करने वाले पहले भारतीय राष्ट्रपति कौन थे?",
        answers: shuffle([
            { text: "डॉ. राजेंद्र प्रसाद", correct: false },
            { text: "डॉ. एस. राधाकृष्णन", correct: false },
            { text: "ज्ञानी जैल सिंह", correct: true },
            { text: "डॉ. ए.पी.जे. अब्दुल कलाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रपति ज्ञानी जैल सिंह ने 1986 में भारतीय डाक (संशोधन) विधेयक पर अपनी कोई सहमति या असहमति दिए बिना उसे अनिश्चित काल के लिए अपने पास रखकर पॉकेट वीटो का प्रयोग किया था।"
    },
    {
        question: "प्रश्न 20. यदि राष्ट्रपति का पद रिक्त हो जाए, तो उपराष्ट्रपति कितने समय तक राष्ट्रपति के रूप में कार्य कर सकता है?",
        answers: shuffle([
            { text: "3 महीने", correct: false },
            { text: "6 महीने", correct: true },
            { text: "1 वर्ष", correct: false },
            { text: "जब तक नया राष्ट्रपति न चुन लिया जाए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 62(2) के अनुसार, राष्ट्रपति की मृत्यु, पदत्याग या पद से हटाए जाने के कारण हुई रिक्ति को भरने के लिए चुनाव रिक्ति होने की तारीख के पश्चात् यथाशीघ्र और प्रत्येक दशा में छह मास बीतने से पहले किया जाएगा।"
    },
    {
        question: "प्रश्न 21. राज्य की कार्यपालिका शक्ति किसमें निहित होती है?",
        answers: shuffle([
            { text: "मुख्यमंत्री", correct: false },
            { text: "राज्यपाल", correct: true },
            { text: "राज्य मंत्रिपरिषद", correct: false },
            { text: "उच्च न्यायालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 154 के अनुसार, राज्य की कार्यपालिका शक्ति राज्यपाल में निहित होगी, जिसका प्रयोग वह स्वयं या अपने अधीनस्थ अधिकारियों के माध्यम से करेगा।"
    },
    {
        question: "प्रश्न 22. राज्यपाल की नियुक्ति कौन करता है?",
        answers: shuffle([
            { text: "मुख्यमंत्री", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "प्रधानमंत्री", correct: false },
            { text: "भारत के मुख्य न्यायाधीश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 155 के अनुसार, राज्य के राज्यपाल को राष्ट्रपति अपने हस्ताक्षर और मुद्रा सहित अधिपत्र द्वारा नियुक्त करेगा।"
    },
    {
        question: "प्रश्न 23. राज्यपाल पद के लिए न्यूनतम आयु क्या है?",
        answers: shuffle([
            { text: "25 वर्ष", correct: false },
            { text: "30 वर्ष", correct: false },
            { text: "35 वर्ष", correct: true },
            { text: "कोई आयु सीमा नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 157 के अनुसार, राज्यपाल नियुक्त होने का पात्र कोई व्यक्ति तभी होगा जब वह भारत का नागरिक हो और 35 वर्ष की आयु पूरी कर चुका हो।"
    },
    {
        question: "प्रश्न 24. राज्य के मुख्यमंत्री की नियुक्ति कौन करता है?",
        answers: shuffle([
            { text: "राष्ट्रपति", correct: false },
            { text: "राज्यपाल", correct: true },
            { text: "उच्च न्यायालय के मुख्य न्यायाधीश", correct: false },
            { text: "विधानसभा अध्यक्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 164(1) के अनुसार, मुख्यमंत्री की नियुक्ति राज्यपाल द्वारा की जाएगी और अन्य मंत्रियों की नियुक्ति राज्यपाल, मुख्यमंत्री की सलाह पर करेगा।"
    },
    {
        question: "प्रश्न 25. राज्य मंत्रिपरिषद सामूहिक रूप से किसके प्रति उत्तरदायी होती है?",
        answers: shuffle([
            { text: "राज्यपाल", correct: false },
            { text: "विधान परिषद", correct: false },
            { text: "विधानसभा", correct: true },
            { text: "मुख्यमंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 164(2) के अनुसार, राज्य की मंत्रिपरिषद राज्य की विधानसभा के प्रति सामूहिक रूप से उत्तरदायी होगी।"
    },
     {
        question: "प्रश्न 26. राज्यपाल को शपथ कौन दिलाता है?",
        answers: shuffle([
            { text: "राष्ट्रपति", correct: false },
            { text: "मुख्यमंत्री", correct: false },
            { text: "संबंधित राज्य के उच्च न्यायालय का मुख्य न्यायाधीश", correct: true },
            { text: "भारत के मुख्य न्यायाधीश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 159 के अनुसार, राज्यपाल अपना पद ग्रहण करने से पहले उस राज्य के उच्च न्यायालय के मुख्य न्यायाधीश या उनकी अनुपस्थिति में वरिष्ठतम न्यायाधीश के समक्ष शपथ लेता है।"
    },
    {
        question: "प्रश्न 27. राज्य के महाधिवक्ता (Advocate General) की नियुक्ति कौन करता है?",
        answers: shuffle([
            { text: "मुख्यमंत्री", correct: false },
            { text: "राष्ट्रपति", correct: false },
            { text: "राज्यपाल", correct: true },
            { text: "राज्य का विधि मंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 165 के अनुसार, राज्यपाल उच्च न्यायालय का न्यायाधीश नियुक्त होने के योग्य किसी व्यक्ति को राज्य का महाधिवक्ता नियुक्त करता है।"
    },
    {
        question: "प्रश्न 28. राज्यपाल किस अनुच्छेद के तहत अध्यादेश जारी कर सकता है?",
        answers: shuffle([
            { text: "अनुच्छेद 123", correct: false },
            { text: "अनुच्छेद 200", correct: false },
            { text: "अनुच्छेद 213", correct: true },
            { text: "अनुच्छेद 167", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब राज्य का विधानमंडल सत्र में न हो, तब अनुच्छेद 213 राज्यपाल को अध्यादेश जारी करने की शक्ति प्रदान करता है।"
    },
    {
        question: "प्रश्न 29. राज्यपाल की क्षमादान की शक्ति किस अनुच्छेद में है?",
        answers: shuffle([
            { text: "अनुच्छेद 72", correct: false },
            { text: "अनुच्छेद 161", correct: true },
            { text: "अनुच्छेद 162", correct: false },
            { text: "अनुच्छेद 163", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 161 राज्यपाल को राज्य की कार्यपालिका विधि के विरुद्ध किसी अपराध के लिए सिद्धदोष ठहराए गए व्यक्ति के दंड को क्षमा, उसका प्रविलंबन, विराम या परिहार करने की शक्ति देता है।"
    },
    {
        question: "प्रश्न 30. राज्य में राष्ट्रपति शासन की सिफारिश राष्ट्रपति से कौन करता है?",
        answers: shuffle([
            { text: "मुख्यमंत्री", correct: false },
            { text: "विधानसभा अध्यक्ष", correct: false },
            { text: "राज्यपाल", correct: true },
            { text: "उच्च न्यायालय का मुख्य न्यायाधीश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 356 के तहत, यदि राज्यपाल को यह समाधान हो जाता है कि राज्य का शासन संवैधानिक उपबंधों के अनुसार नहीं चलाया जा सकता, तो वह राष्ट्रपति को इसकी रिपोर्ट भेज सकता है, जिसके आधार पर राष्ट्रपति शासन लगाया जा सकता है।"
    },
    {
        question: "प्रश्न 31. कार्यपालिका का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "कानून बनाना", correct: false },
            { text: "कानूनों की व्याख्या करना", correct: false },
            { text: "कानूनों को लागू करना", correct: true },
            { text: "संविधान में संशोधन करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सरकार के तीन अंगों में, कार्यपालिका का प्रमुख उत्तरदायित्व विधायिका द्वारा बनाए गए कानूनों को लागू करना और देश का प्रशासन चलाना है।"
    },
    {
        question: "प्रश्न 32. \"नाममात्र\" और \"वास्तविक\" कार्यपालिका के बीच अंतर किस प्रकार की शासन प्रणाली में पाया जाता है?",
        answers: shuffle([
            { text: "अध्यक्षात्मक प्रणाली", correct: false },
            { text: "संसदीय प्रणाली", correct: true },
            { text: "राजतंत्रीय प्रणाली", correct: false },
            { text: "तानाशाही", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत और ब्रिटेन जैसी संसदीय प्रणालियों में, राज्य का प्रमुख (राष्ट्रपति या सम्राट) नाममात्र का कार्यकारी होता है, जबकि सरकार का प्रमुख (प्रधानमंत्री) वास्तविक कार्यकारी होता है।"
    },
    {
        question: "प्रश्न 33. 'स्थायी कार्यपालिका' (Permanent Executive) से क्या तात्पर्य है?",
        answers: shuffle([
            { text: "निर्वाचित मंत्री", correct: false },
            { text: "नौकरशाही या प्रशासनिक अधिकारी", correct: true },
            { text: "राष्ट्रपति और राज्यपाल", correct: false },
            { text: "प्रधानमंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्थायी कार्यपालिका में सिविल सेवक (नौकरशाह) शामिल होते हैं जो अपनी योग्यता के आधार पर नियुक्त होते हैं और सरकार बदलने पर भी अपने पद पर बने रहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> वे नीतियों को लागू करने में मदद करते हैं।"
    },
    {
        question: "प्रश्न 34. 'राजनीतिक कार्यपालिका' (Political Executive) में कौन शामिल होता है?",
        answers: shuffle([
            { text: "सिविल सेवक", correct: false },
            { text: "न्यायाधीश", correct: false },
            { text: "सरकार के मंत्री", correct: true },
            { text: "चुनाव आयुक्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजनीतिक कार्यपालिका में वे मंत्री शामिल होते हैं जो जनता द्वारा एक निश्चित अवधि के लिए चुने जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> वे नीतियां बनाते हैं और सरकार बदलने पर बदल जाते हैं।"
    },
    {
        question: "प्रश्न 35. भारत में मंत्रिपरिषद के सदस्यों को पद की शपथ कौन दिलाता है?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "भारत के मुख्य न्यायाधीश", correct: false },
            { text: "लोकसभा अध्यक्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 75(4) के अनुसार, किसी मंत्री द्वारा अपना पद ग्रहण करने से पहले, राष्ट्रपति उसे पद और गोपनीयता की शपथ दिलाएगा।"
    },
    {
        question: "प्रश्न 36. किस संविधान संशोधन ने यह अनिवार्य कर दिया कि राष्ट्रपति को मंत्रिपरिषद की सलाह के अनुसार कार्य करना होगा?",
        answers: shuffle([
            { text: "40वां संशोधन", correct: false },
            { text: "42वां संशोधन", correct: true },
            { text: "44वां संशोधन", correct: false },
            { text: "52वां संशोधन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 42वें संविधान संशोधन अधिनियम, 1976 ने राष्ट्रपति के लिए मंत्रिपरिषद की सलाह को बाध्यकारी बना दिया।<br><br><i class='fa-solid fa-angles-right icon'></i> 44वें संशोधन ने राष्ट्रपति को एक बार पुनर्विचार के लिए सलाह लौटाने की शक्ति दी।"
    },
    {
        question: "प्रश्न 37. कोई व्यक्ति संसद का सदस्य बने बिना अधिकतम कितने समय तक केंद्रीय मंत्री रह सकता है?",
        answers: shuffle([
            { text: "3 महीने", correct: false },
            { text: "6 महीने", correct: true },
            { text: "1 वर्ष", correct: false },
            { text: "कोई समय सीमा नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 75(5) के अनुसार, यदि कोई मंत्री लगातार छह महीने की अवधि तक संसद के किसी भी सदन का सदस्य नहीं है, तो उस अवधि की समाप्ति पर वह मंत्री नहीं रहेगा।"
    },
    {
        question: "प्रश्न 38. \"सामूहिक उत्तरदायित्व\" के सिद्धांत का क्या अर्थ है?",
        answers: shuffle([
            { text: "प्रत्येक मंत्री अपने विभाग के लिए उत्तरदायी है", correct: false },
            { text: "पूरी मंत्रिपरिषद एक टीम के रूप में कार्य करती है और लोकसभा के प्रति संयुक्त रूप से उत्तरदायी है", correct: true },
            { text: "मंत्री केवल प्रधानमंत्री के प्रति उत्तरदायी हैं", correct: false },
            { text: "सभी मंत्री राष्ट्रपति के प्रति उत्तरदायी हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका अर्थ है कि यदि लोकसभा किसी एक मंत्री के विरुद्ध अविश्वास प्रस्ताव पारित करती है या किसी नीतिगत मुद्दे पर सरकार को हरा देती है, तो पूरी मंत्रिपरिषद को त्यागपत्र देना पड़ता है।"
    },
    {
        question: "प्रश्न 39. भारत की विदेश नीति का निर्धारण और कार्यान्वयन किसकी जिम्मेदारी है?",
        answers: shuffle([
            { text: "न्यायपालिका", correct: false },
            { text: "संसद", correct: false },
            { text: "कार्यपालिका", correct: true },
            { text: "नीति आयोग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विदेश नीति निर्धारित करना, दूसरे देशों के साथ संबंध स्थापित करना, संधियाँ और समझौते करना कार्यपालिका (विशेष रूप से प्रधानमंत्री और विदेश मंत्री) का एक प्रमुख कार्य है।"
    },
    {
        question: "प्रश्न 40. राष्ट्रपति द्वारा जारी अध्यादेश की अधिकतम अवधि कितनी हो सकती है?",
        answers: shuffle([
            { text: "3 महीने", correct: false },
            { text: "6 महीने", correct: false },
            { text: "6 महीने और 6 सप्ताह", correct: true },
            { text: "1 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संसद के दो सत्रों के बीच अधिकतम अंतराल 6 महीने हो सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> सत्र शुरू होने के बाद अध्यादेश को 6 सप्ताह के भीतर अनुमोदित कराना होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः अधिकतम अवधि 6 महीने और 6 सप्ताह है।"
    },
    {
        question: "प्रश्न 41. \"विवेकाधीन शक्तियों\" (Discretionary Powers) का प्रयोग कौन कर सकता है?",
        answers: shuffle([
            { text: "केवल प्रधानमंत्री", correct: false },
            { text: "केवल मुख्यमंत्री", correct: false },
            { text: "राष्ट्रपति और राज्यपाल, कुछ विशेष परिस्थितियों में", correct: true },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब किसी दल को स्पष्ट बहुमत नहीं मिलता तो प्रधानमंत्री/मुख्यमंत्री की नियुक्ति करना, या मंत्रिपरिषद की सलाह को पुनर्विचार के लिए लौटाना जैसी स्थितियों में राष्ट्रपति/राज्यपाल अपनी विवेकाधीन शक्तियों का प्रयोग कर सकते हैं।"
    },
    {
        question: "प्रश्न 42. अविश्वास प्रस्ताव (No-Confidence Motion) किसके विरुद्ध लाया जाता है?",
        answers: shuffle([
            { text: "केवल प्रधानमंत्री", correct: false },
            { text: "किसी एक मंत्री", correct: false },
            { text: "संपूर्ण मंत्रिपरिषद", correct: true },
            { text: "राष्ट्रपति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अविश्वास प्रस्ताव लोकसभा में सरकार के बहुमत का परीक्षण करने के लिए विपक्ष द्वारा लाया जाता है और यह पूरी मंत्रिपरिषद के विरुद्ध होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके पारित होने पर सरकार को इस्तीफा देना पड़ता है।"
    },
    {
        question: "प्रश्न 43. उपराष्ट्रपति को उसके पद से हटाने का प्रस्ताव कहाँ पेश किया जा सकता है?",
        answers: shuffle([
            { text: "केवल लोकसभा में", correct: false },
            { text: "केवल राज्यसभा में", correct: true },
            { text: "संसद के किसी भी सदन में", correct: false },
            { text: "लोकसभा और विधानसभा दोनों में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 67(ख) के अनुसार, उपराष्ट्रपति को हटाने का प्रस्ताव केवल राज्यसभा में ही प्रस्तुत किया जा सकता है, जिसे तत्कालीन समस्त सदस्यों के बहुमत से पारित किया गया हो और जिससे लोकसभा सहमत हो।"
    },
    {
        question: "प्रश्न 44. किस अनुच्छेद के तहत राज्यपाल किसी विधेयक को राष्ट्रपति के विचार के लिए आरक्षित रख सकता है?",
        answers: shuffle([
            { text: "अनुच्छेद 199", correct: false },
            { text: "अनुच्छेद 200", correct: true },
            { text: "अनुच्छेद 201", correct: false },
            { text: "अनुच्छेद 213", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 200 राज्यपाल को यह शक्ति देता है कि वह राज्य विधानमंडल द्वारा पारित किसी विधेयक पर अपनी सहमति दे, रोक ले, या उसे राष्ट्रपति के विचार के लिए आरक्षित कर ले।"
    },
    {
        question: "प्रश्न 45. केंद्रीय मंत्रिपरिषद के आकार को किस संशोधन द्वारा सीमित किया गया है?",
        answers: shuffle([
            { text: "86वां संशोधन", correct: false },
            { text: "91वां संशोधन", correct: true },
            { text: "93वां संशोधन", correct: false },
            { text: "73वां संशोधन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 91वें संविधान संशोधन अधिनियम, 2003 ने यह निर्धारित किया कि केंद्रीय मंत्रिपरिषद में प्रधानमंत्री सहित मंत्रियों की कुल संख्या लोकसभा की कुल सदस्य संख्या के 15 प्रतिशत से अधिक नहीं होगी।"
    },
    {
        question: "प्रश्न 46. राष्ट्रपति के चुनाव में कौन मतदान नहीं करता है?",
        answers: shuffle([
            { text: "लोकसभा के निर्वाचित सदस्य", correct: false },
            { text: "राज्यसभा के निर्वाचित सदस्य", correct: false },
            { text: "राज्य विधानसभाओं के निर्वाचित सदस्य", correct: false },
            { text: "राज्य विधान परिषदों के सदस्य", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रपति के निर्वाचक मंडल में संसद के दोनों सदनों के निर्वाचित सदस्य और राज्यों की विधानसभाओं के निर्वाचित सदस्य शामिल होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> विधान परिषदों के सदस्य इसमें भाग नहीं लेते।"
    },
    {
        question: "प्रश्न 47. \"किचन कैबिनेट\" (Kitchen Cabinet) क्या है?",
        answers: shuffle([
            { text: "मंत्रिमंडल के सभी सदस्य", correct: false },
            { text: "प्रधानमंत्री और उनके कुछ विश्वासपात्र वरिष्ठ मंत्री और सलाहकार", correct: true },
            { text: "केवल कैबिनेट मंत्री", correct: false },
            { text: "विपक्षी दलों के नेता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक अनौपचारिक निकाय है जिसमें प्रधानमंत्री महत्वपूर्ण मुद्दों पर अपने सबसे भरोसेमंद सहयोगियों से सलाह लेते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कैबिनेट से भी छोटा और अधिक प्रभावशाली हो सकता है।"
    },
    {
        question: "प्रश्न 48. कार्यपालिका का विधायिका पर नियंत्रण का एक महत्वपूर्ण साधन क्या है?",
        answers: shuffle([
            { text: "न्यायिक समीक्षा", correct: false },
            { text: "अविश्वास प्रस्ताव", correct: true },
            { text: "महाभियोग", correct: false },
            { text: "चुनाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संसदीय प्रणाली में, विधायिका (विशेषकर लोकसभा) अविश्वास प्रस्ताव, प्रश्नकाल, स्थगन प्रस्ताव आदि के माध्यम से कार्यपालिका (मंत्रिपरिषद) पर नियंत्रण रखती है।"
    },
    {
        question: "प्रश्न 49. अध्यक्षात्मक शासन प्रणाली में कार्यपालिका का प्रमुख कौन होता है?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "राजा या रानी", correct: false },
            { text: "राष्ट्रपति, जो राज्य और सरकार दोनों का प्रमुख होता है", correct: true },
            { text: "संसद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संयुक्त राज्य अमेरिका जैसी अध्यक्षात्मक प्रणाली में, राष्ट्रपति ही राज्य का प्रमुख और सरकार का प्रमुख होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> कार्यपालिका, विधायिका के प्रति सीधे उत्तरदायी नहीं होती है।"
    },
    {
        question: "प्रश्न 50. भारत का राष्ट्रपति अपना त्यागपत्र किसे सौंपता है?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "भारत के मुख्य न्यायाधीश", correct: false },
            { text: "उपराष्ट्रपति", correct: true },
            { text: "लोकसभा अध्यक्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 56(1)(क) के अनुसार, राष्ट्रपति अपना त्यागपत्र उपराष्ट्रपति को संबोधित करके देता है, और उपराष्ट्रपति इसकी सूचना तुरंत लोकसभा अध्यक्ष को देता है।"
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