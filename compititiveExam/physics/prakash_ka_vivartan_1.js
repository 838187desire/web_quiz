const questions = [
    {
        topHeading: "प्रकाश के विवर्तन पर आधारित 50 MCQs,part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. प्रकाश का विवर्तन क्या है?",
        answers: shuffle([
            { text: "प्रकाश का एक माध्यम से दूसरे माध्यम में जाना।", correct: false },
            { text: "प्रकाश का किसी सतह से टकराकर वापस लौटना।", correct: false },
            { text: "अवरोध या द्वारक के किनारों से प्रकाश तरंगों का मुड़ना।", correct: true },
            { text: "प्रकाश का सात रंगों में विभाजित होना।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब प्रकाश तरंगें किसी बहुत छोटे अवरोध से टकराती हैं या किसी बहुत संकीर्ण छिद्र से गुजरती हैं, तो वे किनारों पर मुड़ जाती हैं और ज्यामितीय छाया में फैल जाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी घटना को विवर्तन कहते हैं"
    },
    {
        question: "प्रश्न 2. प्रकाश के विवर्तन की घटना के लिए अवरोध या द्वारक का आकार कैसा होना चाहिए?",
        answers: shuffle([
            { text: "प्रकाश के तरंगदैर्ध्य से बहुत बड़ा।", correct: false },
            { text: "प्रकाश के तरंगदैर्ध्य की कोटि का।", correct: true },
            { text: "प्रकाश के तरंगदैर्ध्य से बहुत छोटा।", correct: false },
            { text: "आकार का कोई प्रभाव नहीं पड़ता।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विवर्तन की घटना तभी स्पष्ट रूप से देखी जा सकती है जब अवरोध या द्वारक का आकार प्रकाश के तरंगदैर्ध्य के लगभग बराबर हो"
    },
    {
        question: "प्रश्न 3. प्रकाश की कौन सी प्रकृति विवर्तन की घटना की व्याख्या करती है?",
        answers: shuffle([
            { text: "कण प्रकृति", correct: false },
            { text: "तरंग प्रकृति", correct: true },
            { text: "विद्युत-चुंबकीय प्रकृति", correct: false },
            { text: "क्वांटम प्रकृति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विवर्तन एक विशिष्ट तरंग घटना है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि प्रकाश केवल कणों से बना होता तो वह सीधी रेखा में चलता और किनारों पर नहीं मुड़ता"
    },
    {
        question: "प्रश्न 4. हाइगेन्स के सिद्धांत के अनुसार, तरंगाग्र का प्रत्येक बिंदु किसका स्रोत होता है?",
        answers: shuffle([
            { text: "नई प्रकाश किरणों का", correct: false },
            { text: "द्वितीयक तरंगिकाओं का", correct: true },
            { text: "ऊर्जा का", correct: false },
            { text: "आवेश का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाइगेन्स का सिद्धांत कहता है कि किसी तरंगाग्र का हर बिंदु एक नए विक्षोभ का स्रोत होता है, जो द्वितीयक तरंगिकाओं को जन्म देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इन्हीं तरंगिकाओं के अध्यारोपण से विवर्तन प्रतिरूप बनता है"
    },
    {
        question: "प्रश्न 5. एकल-स्लिट विवर्तन प्रतिरूप में केंद्रीय उच्चिष्ठ (central maximum) की चौड़ाई द्वितीयक उच्चिष्ठों की तुलना में कैसी होती है?",
        answers: shuffle([
            { text: "आधी", correct: false },
            { text: "बराबर", correct: false },
            { text: "दोगुनी", correct: true },
            { text: "चार गुनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एकल-स्लिट विवर्तन में, केंद्रीय चमकीली फ्रिंज की कोणीय चौड़ाई अन्य द्वितीयक चमकीली फ्रिजों की चौड़ाई से दोगुनी होती है"
    },
    {
        question: "प्रश्न 6. एकल-स्लिट विवर्तन प्रतिरूप में, केंद्र से दूर जाने पर उच्चिष्ठों की तीव्रता पर क्या प्रभाव पड़ता है?",
        answers: shuffle([
            { text: "तीव्रता बढ़ती है।", correct: false },
            { text: "तीव्रता घटती है।", correct: true },
            { text: "तीव्रता अपरिवर्तित रहती है।", correct: false },
            { text: "तीव्रता शून्य हो जाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केंद्रीय उच्चिष्ठ सबसे अधिक तीव्र होता है, और जैसे-जैसे हम केंद्र से दूर जाते हैं, द्वितीयक उच्चिष्ठों की तीव्रता तेजी से कम होती जाती है"
    },
    {
        question: "प्रश्न 7. किसी कॉम्पैक्ट डिस्क (सीडी) की सतह पर दिखाई देने वाले इंद्रधनुषी रंग किस घटना का परिणाम हैं?",
        answers: shuffle([
            { text: "प्रकाश का अपवर्तन", correct: false },
            { text: "प्रकाश का परावर्तन", correct: false },
            { text: "प्रकाश का विवर्तन", correct: true },
            { text: "प्रकाश का प्रकीर्णन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सीडी की सतह पर मौजूद बहुत महीन खांचे (pits) एक विवर्तन ग्रेटिंग की तरह काम करते हैं, जो सफेद प्रकाश को उसके घटक रंगों में विवर्तित कर देते हैं"
    },
    {
        question: "प्रश्न 8. किसी वस्तु की छाया के किनारे पूरी तरह से तीक्ष्ण (sharp) क्यों नहीं होते हैं?",
        answers: shuffle([
            { text: "प्रकाश के अपवर्तन के कारण", correct: false },
            { text: "प्रकाश के विवर्तन के कारण", correct: true },
            { text: "प्रकाश स्रोत के बड़े आकार के कारण", correct: false },
            { text: "वायुमंडलीय विक्षोभ के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश वस्तु के किनारों से थोड़ा मुड़ जाता है और ज्यामितीय छाया के क्षेत्र में प्रवेश कर जाता है, जिससे किनारे थोड़े धुंधले हो जाते हैं"
    },
    {
        question: "प्रश्न 9. विवर्तन और व्यतिकरण में मुख्य अंतर क्या है?",
        answers: shuffle([
            { text: "व्यतिकरण में दो कला-संबद्ध स्रोतों से आने वाली तरंगों का अध्यारोपण होता है, जबकि विवर्तन में एक ही तरंगाग्र के विभिन्न बिंदुओं से आने वाली तरंगिकाओं का अध्यारोपण होता है।", correct: true },
            { text: "विवर्तन केवल ध्वनि में होता है, व्यतिकरण केवल प्रकाश में।", correct: false },
            { text: "व्यतिकरण में फ्रिंजें समान चौड़ाई की नहीं होती हैं, विवर्तन में होती हैं।", correct: false },
            { text: "दोनों में कोई मौलिक अंतर नहीं है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यतिकरण दो अलग-अलग स्रोतों का परिणाम है, जबकि विवर्तन एक ही स्रोत के तरंगाग्र के हिस्सों के बीच व्यतिकरण का परिणाम है"
    },
    {
        question: "प्रश्न 10. एक विवर्तन ग्रेटिंग क्या है?",
        answers: shuffle([
            { text: "एक एकल चौड़ी स्लिट।", correct: false },
            { text: "दो समानांतर स्लिटें।", correct: false },
            { text: "एक ऐसी व्यवस्था जिसमें बहुत बड़ी संख्या में समान चौड़ाई की समानांतर स्लिटें होती हैं।", correct: true },
            { text: "एक प्रिज्म।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विवर्तन ग्रेटिंग का उपयोग स्पेक्ट्रा का विश्लेषण करने के लिए किया जाता है क्योंकि यह बहुत तीक्ष्ण और चमकीले उच्चिष्ठ उत्पन्न करती है"
    },
    {
        question: "प्रश्न 11. ध्वनि तरंगों का विवर्तन प्रकाश तरंगों की तुलना में अधिक आसानी से क्यों देखा जा सकता है?",
        answers: shuffle([
            { text: "क्योंकि ध्वनि की गति कम होती है।", correct: false },
            { text: "क्योंकि ध्वनि का तरंगदैर्ध्य दैनिक जीवन में आने वाले अवरोधों के आकार की कोटि का होता है।", correct: true },
            { text: "क्योंकि ध्वनि अनुदैर्ध्य तरंग है।", correct: false },
            { text: "क्योंकि ध्वनि को माध्यम की आवश्यकता होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्वनि का तरंगदैर्ध्य मीटर के क्रम का होता है, जबकि प्रकाश का नैनोमीटर के क्रम का।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, दरवाजों और इमारतों जैसे बड़े अवरोधों से भी ध्वनि आसानी से विवर्तित हो जाती है"
    },
    {
        question: "प्रश्न 12. किसी प्रकाशिक यंत्र की विभेदन क्षमता (resolving power) किससे सीमित होती है?",
        answers: shuffle([
            { text: "लेंस के आकार से", correct: false },
            { text: "प्रकाश के विवर्तन से", correct: true },
            { text: "लेंस के पदार्थ से", correct: false },
            { text: "प्रकाश की तीव्रता से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी भी लेंस का द्वारक एक वृत्ताकार छिद्र की तरह काम करता है, जो प्रकाश को विवर्तित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह विवर्तन दो बहुत पास की वस्तुओं के प्रतिबिंबों को एक दूसरे पर अध्यारोपित कर देता है, जिससे उन्हें अलग-अलग देखना असंभव हो जाता है"
    },
    {
        question: "प्रश्न 13. रैले की कसौटी (Rayleigh's criterion) किससे संबंधित है?",
        answers: shuffle([
            { text: "प्रकाश के ध्रुवण से", correct: false },
            { text: "प्रकाशिक यंत्रों की विभेदन क्षमता से", correct: true },
            { text: "प्रकाश के वेग से", correct: false },
            { text: "प्रकाश के विक्षेपण से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रैले की कसौटी यह परिभाषित करती है कि दो बिंब कब ठीक विभेदित (just resolved) माने जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके अनुसार, एक का केंद्रीय उच्चिष्ठ दूसरे के पहले निम्निष्ठ पर पड़ना चाहिए"
    },
    {
        question: "प्रश्न 14. दूरदर्शी की विभेदन क्षमता कैसे बढ़ाई जा सकती है?",
        answers: shuffle([
            { text: "अभिदृश्यक लेंस का व्यास (द्वारक) बढ़ाकर।", correct: true },
            { text: "अभिदृश्यक लेंस का व्यास घटाकर।", correct: false },
            { text: "नेत्रिका की फोकस दूरी बढ़ाकर।", correct: false },
            { text: "दूरदर्शी की लंबाई बढ़ाकर।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बड़ा द्वारक विवर्तन के प्रभाव को कम करता है, जिससे दूरदर्शी की दो पास-पास की वस्तुओं को अलग-अलग दिखाने की क्षमता बढ़ जाती है"
    },
    {
        question: "प्रश्न 15. सूक्ष्मदर्शी की विभेदन क्षमता कैसे बढ़ाई जा सकती है?",
        answers: shuffle([
            { text: "कम तरंगदैर्ध्य वाले प्रकाश का उपयोग करके।", correct: true },
            { text: "अधिक तरंगदैर्ध्य वाले प्रकाश का उपयोग करके।", correct: false },
            { text: "वस्तु और अभिदृश्यक के बीच हवा रखकर।", correct: false },
            { text: "आवर्धन क्षमता घटाकर।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विभेदन क्षमता प्रकाश के तरंगदैर्ध्य के व्युत्क्रमानुपाती होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> छोटे तरंगदैर्ध्य (जैसे नीला या पराबैंगनी प्रकाश) का उपयोग करने से सूक्ष्मदर्शी की विभेदन क्षमता बढ़ जाती है"
    },
    {
        question: "प्रश्न 16. होलोग्राफी (Holography) की तकनीक किस पर आधारित है?",
        answers: shuffle([
            { text: "केवल परावर्तन", correct: false },
            { text: "केवल अपवर्तन", correct: false },
            { text: "प्रकाश के व्यतिकरण और विवर्तन पर", correct: true },
            { text: "प्रकाश के प्रकीर्णन पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> होलोग्राफी में, किसी वस्तु से विवर्तित प्रकाश और एक संदर्भ किरण के बीच व्यतिकरण प्रतिरूप को रिकॉर्ड किया जाता है, जिससे वस्तु का त्रि-आयामी (3D) प्रतिबिंब बनाया जा सकता है"
    },
    {
        question: "प्रश्न 17. विवर्तन के दो प्रकार कौन से हैं?",
        answers: shuffle([
            { text: "आंतरिक और बाह्य", correct: false },
            { text: "रैखिक और कोणीय", correct: false },
            { text: "फ्रेनेल और फ्रॉनहॉफर", correct: true },
            { text: "यांत्रिक और प्रकाशीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह वर्गीकरण स्रोत और पर्दे की द्वारक से दूरी पर आधारित है।<br><br><i class='fa-solid fa-angles-right icon'></i> फ्रेनेल में दूरी सीमित होती है, जबकि फ्रॉनहॉफर में दूरी अनंत (या लेंस द्वारा अनंत पर बनाई गई) होती है"
    },
    {
        question: "प्रश्न 18. फ्रॉनहॉफर विवर्तन में, आपतित तरंगाग्र कैसा होता है?",
        answers: shuffle([
            { text: "गोलीय", correct: false },
            { text: "बेलनाकार", correct: false },
            { text: "समतल", correct: true },
            { text: "किसी भी आकार का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फ्रॉनहॉफर विवर्तन में, प्रकाश स्रोत और पर्दा विवर्तक वस्तु से प्रभावी रूप से अनंत दूरी पर होते हैं, इसलिए तरंगाग्र समतल होता है"
    },
    {
        question: "प्रश्न 19. एक संकीर्ण स्लिट से प्राप्त विवर्तन प्रतिरूप में निम्निष्ठ (minima) की स्थिति के लिए क्या शर्त है?",
        answers: shuffle([
            { text: "पथ-अंतर तरंगदैर्ध्य का पूर्ण गुणज होता है।", correct: true },
            { text: "पथ-अंतर तरंगदैर्ध्य का विषम अर्ध-गुणज होता है।", correct: false },
            { text: "पथ-अंतर शून्य होता है।", correct: false },
            { text: "पथ-अंतर हमेशा समान रहता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब स्लिट के किनारों से आने वाली तरंगिकाओं के बीच पथ का अंतर nλ (जहाँ n एक पूर्णांक है) होता है, तो वे विनाशी व्यतिकरण करती हैं, जिससे निम्निष्ठ या अदीप्त फ्रिंज बनती है"
    },
    {
        question: "प्रश्न 20. एक्स-किरण विवर्तन का उपयोग किस लिए किया जाता है?",
        answers: shuffle([
            { text: "तारों को देखने के लिए", correct: false },
            { text: "क्रिस्टलों की परमाण्विक संरचना का अध्ययन करने के लिए", correct: true },
            { text: "ध्वनि की गति मापने के लिए", correct: false },
            { text: "मौसम का पूर्वानुमान लगाने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक्स-किरणों का तरंगदैर्ध्य क्रिस्टल में परमाणुओं के बीच की दूरी की कोटि का होता है, इसलिए वे क्रिस्टल जालक द्वारा विवर्तित हो जाती हैं, जिससे उसकी संरचना का पता चलता है"
    },
    {
        question: "प्रश्न 21. यदि प्रकाश के स्थान पर इलेक्ट्रॉनों की एक किरण पुंज को एक बहुत छोटे छिद्र से गुजारा जाए, तो क्या होगा?",
        answers: shuffle([
            { text: "इलेक्ट्रॉन सीधे निकल जाएंगे।", correct: false },
            { text: "इलेक्ट्रॉन छिद्र द्वारा अवशोषित हो जाएंगे।", correct: false },
            { text: "इलेक्ट्रॉन विवर्तन प्रतिरूप बनाएंगे।", correct: true },
            { text: "इलेक्ट्रॉन परावर्तित हो जाएंगे।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डी-ब्रोग्ली परिकल्पना के अनुसार, गतिशील कणों (जैसे इलेक्ट्रॉन) में भी तरंग प्रकृति होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, वे भी प्रकाश की तरह विवर्तन प्रदर्शित कर सकते हैं"
    },
    {
        question: "प्रश्न 22. यदि हम एकल-स्लिट विवर्तन प्रयोग में स्लिट की चौड़ाई को कम कर दें, तो केंद्रीय उच्चिष्ठ की चौड़ाई पर क्या प्रभाव पड़ेगा?",
        answers: shuffle([
            { text: "यह घट जाएगी।", correct: false },
            { text: "यह बढ़ जाएगी।", correct: true },
            { text: "यह अपरिवर्तित रहेगी।", correct: false },
            { text: "यह गायब हो जाएगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केंद्रीय उच्चिष्ठ की चौड़ाई स्लिट की चौड़ाई के व्युत्क्रमानुपाती होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> स्लिट जितनी संकीर्ण होगी, प्रकाश उतना ही अधिक फैलेगा, और केंद्रीय उच्चिष्ठ उतना ही चौड़ा होगा"
    },
    {
        question: "प्रश्न 23. बादलों के किनारों का चमकीला दिखाई देना किस घटना से संबंधित है?",
        answers: shuffle([
            { text: "परावर्तन", correct: false },
            { text: "अपवर्तन", correct: false },
            { text: "विवर्तन", correct: true },
            { text: "अवशोषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब सूर्य बादलों के पीछे होता है, तो प्रकाश की किरणें पानी की छोटी बूंदों या बर्फ के क्रिस्टल से बने बादलों के किनारों से विवर्तित हो जाती हैं, जिससे किनारे चमकीले दिखाई देते हैं"
    },
    {
        question: "प्रश्न 24. इलेक्ट्रॉन सूक्ष्मदर्शी की विभेदन क्षमता प्रकाशिक सूक्ष्मदर्शी से बहुत अधिक क्यों होती है?",
        answers: shuffle([
            { text: "क्योंकि इलेक्ट्रॉन का द्रव्यमान अधिक होता है।", correct: false },
            { text: "क्योंकि तीव्र गति वाले इलेक्ट्रॉनों का डी-ब्रोग्ली तरंगदैर्ध्य प्रकाश के तरंगदैर्ध्य से बहुत छोटा होता है।", correct: true },
            { text: "क्योंकि इलेक्ट्रॉन पर आवेश होता है।", correct: false },
            { text: "क्योंकि इलेक्ट्रॉन निर्वात में यात्रा करते हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विभेदन क्षमता तरंगदैर्ध्य पर निर्भर करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> बहुत छोटे तरंगदैर्ध्य के कारण, इलेक्ट्रॉन सूक्ष्मदर्शी बहुत छोटी वस्तुओं को भी विभेदित कर सकता है"
    },
    {
        question: "प्रश्न 25. प्रकाश का कौन सा गुण यह दर्शाता है कि यह एक अनुप्रस्थ तरंग है?",
        answers: shuffle([
            { text: "विवर्तन", correct: false },
            { text: "व्यतिकरण", correct: false },
            { text: "ध्रुवण", correct: true },
            { text: "अपवर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केवल अनुप्रस्थ तरंगों (जिनमें कंपन तरंग की गति के लंबवत होते हैं) का ही ध्रुवण किया जा सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> विवर्तन अनुप्रस्थ और अनुदैर्ध्य दोनों तरंगों में होता है"
    },
    {
        question: "प्रश्न 26. पोलेरॉइड चश्मे तेज चकाचौंध को कैसे कम करते हैं?",
        answers: shuffle([
            { text: "विवर्तन द्वारा", correct: false },
            { text: "व्यतिकरण द्वारा", correct: false },
            { text: "प्रकाश को अवशोषित करके", correct: false },
            { text: "ध्रुवण द्वारा क्षैतिज रूप से ध्रुवित प्रकाश को रोककर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सतहों (जैसे पानी या सड़क) से परावर्तित होकर आने वाली चकाचौंध मुख्य रूप से क्षैतिज रूप से ध्रुवित होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> पोलेरॉइड इस ध्रुवित प्रकाश को रोक देते हैं"
    },
    {
        question: "प्रश्न 27. विवर्तन ग्रेटिंग द्वारा उत्पन्न स्पेक्ट्रम में, कौन सा रंग सबसे अधिक विचलित होता है?",
        answers: shuffle([
            { text: "लाल", correct: true },
            { text: "नीला", correct: false },
            { text: "बैंगनी", correct: false },
            { text: "पीला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेटिंग में, चूँकि विचलन कोण तरंगदैर्ध्य के समानुपाती होता है, और लाल रंग का तरंगदैर्ध्य सबसे अधिक होता है, इसलिए लाल रंग सबसे अधिक विचलित होता है"
    },
    {
        question: "प्रश्न 28. एक छोटे वृत्ताकार छिद्र से प्राप्त विवर्तन प्रतिरूप को क्या कहते हैं?",
        answers: shuffle([
            { text: "फ्रॉनहॉफर डिस्क", correct: false },
            { text: "न्यूटन के वलय", correct: false },
            { text: "एयरी डिस्क और वलय", correct: true },
            { text: "फैराडे डिस्क", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक वृत्ताकार द्वारक द्वारा उत्पन्न विवर्तन प्रतिरूप में एक केंद्रीय चमकीली डिस्क होती है जिसे एयरी डिस्क कहते हैं, जो संकेंद्री चमकीले और काले वलयों से घिरी होती है"
    },
    {
        question: "प्रश्न 29. एक छोटी वृत्ताकार अपारदर्शी वस्तु की छाया के केंद्र में एक चमकीला धब्बा क्यों दिखाई देता है?",
        answers: shuffle([
            { text: "यह एक भ्रम है।", correct: false },
            { text: "प्रकाश के अपवर्तन के कारण।", correct: false },
            { text: "वस्तु के किनारों से विवर्तित प्रकाश तरंगों के संपोषी व्यतिकरण के कारण।", correct: true },
            { text: "प्रकाश के प्रकीर्णन के कारण।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस चमकीले धब्बे को 'पॉइसन का धब्बा' (Poisson's spot) या 'अरागो का धब्बा' कहा जाता है, और यह प्रकाश की तरंग प्रकृति का एक मजबूत प्रमाण है"
    },
    {
        question: "प्रश्न 30. विवर्तन की घटना को सबसे पहले किसने विस्तार से देखा और वर्णित किया?",
        answers: shuffle([
            { text: "आइजैक न्यूटन", correct: false },
            { text: "क्रिस्टियान हाइगेन्स", correct: false },
            { text: "फ्रांसेस्को ग्रिमाल्डी", correct: true },
            { text: "थॉमस यंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 17वीं शताब्दी में इतालवी वैज्ञानिक फ्रांसेस्को ग्रिमाल्डी ने इस घटना को सबसे पहले व्यवस्थित रूप से देखा और इसे \"विवर्तन\" (diffraction) नाम दिया"
    },
    {
        question: "प्रश्न 31. यदि हम एक ही स्लिट पर सफेद प्रकाश डालते हैं, तो केंद्रीय उच्चिष्ठ कैसा दिखाई देगा?",
        answers: shuffle([
            { text: "सफेद", correct: true },
            { text: "लाल", correct: false },
            { text: "बैंगनी", correct: false },
            { text: "इंद्रधनुषी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केंद्रीय बिंदु पर सभी रंगों के लिए पथ-अंतर शून्य होता है, इसलिए सभी रंग मिलकर एक सफेद केंद्रीय उच्चिष्ठ बनाते हैं"
    },
    {
        question: "प्रश्न 32. सफेद प्रकाश से प्राप्त एकल-स्लिट विवर्तन प्रतिरूप में, द्वितीयक उच्चिष्ठ कैसे दिखाई देंगे?",
        answers: shuffle([
            { text: "वे भी सफेद होंगे।", correct: false },
            { text: "वे इंद्रधनुषी रंग के होंगे, जिनमें बैंगनी अंदर और लाल बाहर की ओर होगा।", correct: true },
            { text: "वे अदृश्य होंगे।", correct: false },
            { text: "वे काले होंगे।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि प्रत्येक रंग के लिए उच्चिष्ठ की स्थिति अलग-अलग होती है (लाल सबसे अधिक फैलता है), इसलिए द्वितीयक उच्चिष्ठ रंगीन स्पेक्ट्रा के रूप में दिखाई देते हैं"
    },
    {
        question: "प्रश्न 33. जोन प्लेट (Zone Plate) किस सिद्धांत पर आधारित एक उपकरण है?",
        answers: shuffle([
            { text: "परावर्तन", correct: false },
            { text: "अपवर्तन और विक्षेपण", correct: false },
            { text: "विवर्तन और हाइगेन्स का सिद्धांत", correct: true },
            { text: "ध्रुवण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जोन प्लेट एक लेंस की तरह काम करती है, लेकिन यह प्रकाश को मोड़ने के लिए अपवर्तन के बजाय विवर्तन का उपयोग करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह संकेंद्री पारदर्शी और अपारदर्शी वलयों से बनी होती है"
    },
    {
        question: "प्रश्न 34. जब प्रकाश की किरणें ब्लेड के तीखे किनारे से गुजरती हैं, तो वे...",
        answers: shuffle([
            { text: "सीधी निकल जाती हैं।", correct: false },
            { text: "परावर्तित हो जाती हैं।", correct: false },
            { text: "अवशोषित हो जाती हैं।", correct: false },
            { text: "विवर्तित हो जाती हैं।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्लेड का तीखा किनारा एक अवरोध की तरह काम करता है, और प्रकाश उसके किनारे से मुड़ जाता है"
    },
    {
        question: "प्रश्न 35. व्यतिकरण में सभी दीप्त फ्रिंजों की तीव्रता...",
        answers: shuffle([
            { text: "घटती जाती है।", correct: false },
            { text: "बढ़ती जाती है।", correct: false },
            { text: "समान होती है।", correct: true },
            { text: "शून्य होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह विवर्तन से एक महत्वपूर्ण अंतर है।<br><br><i class='fa-solid fa-angles-right icon'></i> यंग के द्वि-स्लिट प्रयोग में, सभी चमकीली फ्रिंजें लगभग एक समान तीव्रता की होती हैं"
    },
    {
        question: "प्रश्न 36. टेलीस्कोप का अभिदृश्यक लेंस जितना बड़ा होगा, उसकी विभेदन सीमा (limit of resolution) उतनी ही...",
        answers: shuffle([
            { text: "अधिक होगी।", correct: false },
            { text: "कम (बेहतर) होगी।", correct: true },
            { text: "अपरिवर्तित रहेगी।", correct: false },
            { text: "अनंत हो जाएगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विभेदन सीमा वह न्यूनतम कोणीय पृथक्करण है जिसे यंत्र द्वारा विभेदित किया जा सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह द्वारक के व्यास के व्युत्क्रमानुपाती होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> कम सीमा का मतलब बेहतर विभेदन क्षमता है"
    },
    {
        question: "प्रश्न 37. यदि हम किसी दूर के स्ट्रीट लैंप को अपनी पलकों को लगभग बंद करके देखें, तो हमें प्रकाश की किरणें फैली हुई क्यों दिखाई देती हैं?",
        answers: shuffle([
            { text: "अपवर्तन के कारण", correct: false },
            { text: "हमारी आंखों में पानी के कारण", correct: false },
            { text: "हमारी पलकों के बीच की संकीर्ण स्लिट द्वारा प्रकाश के विवर्तन के कारण।", correct: true },
            { text: "यह एक मनोवैज्ञानिक प्रभाव है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हमारी पलकें एक संकीर्ण स्लिट बनाती हैं, जो प्रकाश को विवर्तित करती है, जिससे हमें प्रकाश का फैलाव दिखाई देता है"
    },
    {
        question: "प्रश्न 38. क्रिस्टलोग्राफी में ब्रैग का नियम किससे संबंधित है?",
        answers: shuffle([
            { text: "प्रकाश का अपवर्तन", correct: false },
            { text: "क्रिस्टल जालक द्वारा एक्स-किरणों का विवर्तन", correct: true },
            { text: "प्रकाश का ध्रुवण", correct: false },
            { text: "प्रकाश-विद्युत प्रभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्रैग का नियम (2dsinθ=nλ) उन कोणों के लिए शर्त देता है जिन पर क्रिस्टल की परतों से एक्स-किरणों का संपोषी व्यतिकरण (विवर्तन) होता है"
    },
    {
        question: "प्रश्न 39. यदि किसी छोटे छेद से आने वाले प्रकाश के मार्ग में एक सिक्का रख दिया जाए, तो सिक्के की छाया के केंद्र में चमकीला धब्बा दिखाई देता है। यह किसकी पुष्टि करता है?",
        answers: shuffle([
            { text: "प्रकाश की कण प्रकृति की", correct: false },
            { text: "प्रकाश की तरंग प्रकृति की", correct: true },
            { text: "प्रकाश की सीधी रेखा में गमन की", correct: false },
            { text: "प्रकाश के क्वांटम सिद्धांत की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पॉइसन का धब्बा केवल तरंग सिद्धांत द्वारा ही समझाया जा सकता है, जहाँ सिक्के के सभी किनारों से विवर्तित तरंगें छाया के केंद्र में संपोषी रूप से व्यतिकरण करती हैं"
    },
    {
        question: "प्रश्न 40. एकल-स्लिट विवर्तन में, यदि आपतित प्रकाश का तरंगदैर्ध्य बढ़ा दिया जाए, तो फ्रिंज की चौड़ाई पर क्या प्रभाव पड़ेगा?",
        answers: shuffle([
            { text: "घट जाएगी।", correct: false },
            { text: "बढ़ जाएगी।", correct: true },
            { text: "अपरिवर्तित रहेगी।", correct: false },
            { text: "शून्य हो जाएगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फ्रिंज की चौड़ाई तरंगदैर्ध्य के सीधे समानुपाती होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> लंबे तरंगदैर्ध्य वाला प्रकाश अधिक फैलता है, जिससे चौड़ी फ्रिंजें बनती हैं"
    },
    {
        question: "प्रश्न 41. प्रकाशिक यंत्रों में विवर्ण विपथन (chromatic aberration) का कारण क्या है?",
        answers: shuffle([
            { text: "विवर्तन", correct: false },
            { text: "विक्षेपण", correct: true },
            { text: "ध्रुवण", correct: false },
            { text: "व्यतिकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लेंस के पदार्थ का अपवर्तनांक अलग-अलग रंगों के लिए अलग-अलग होता है, जिससे सभी रंग एक ही बिंदु पर केंद्रित नहीं हो पाते।<br><br><i class='fa-solid fa-angles-right icon'></i> यह विवर्तन से अलग घटना है"
    },
    {
        question: "प्रश्न 42. गोलीय विपथन (spherical aberration) का कारण क्या है?",
        answers: shuffle([
            { text: "लेंस का पदार्थ", correct: false },
            { text: "लेंस की गोलीय सतह", correct: true },
            { text: "प्रकाश का विवर्तन", correct: false },
            { text: "प्रकाश का विक्षेपण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लेंस की गोलीय सतह के कारण, केंद्र और किनारों से आने वाली किरणें अलग-अलग बिंदुओं पर केंद्रित होती हैं, जिससे प्रतिबिंब धुंधला हो जाता है"
    },
    {
        question: "प्रश्न 43. विवर्तन की घटना सबसे पहले किसके द्वारा खोजी गई?",
        answers: shuffle([
            { text: "यंग", correct: false },
            { text: "न्यूटन", correct: false },
            { text: "हाइगेन्स", correct: false },
            { text: "ग्रिमाल्डी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फ्रांसेस्को ग्रिमाल्डी ने 1665 में इस घटना का अवलोकन और वर्णन किया था"
    },
    {
        question: "प्रश्न 44. \"विवर्तन\" शब्द का शाब्दिक अर्थ क्या है?",
        answers: shuffle([
            { text: "एक साथ मिलना", correct: false },
            { text: "टुकड़ों में टूटना", correct: true },
            { text: "सीधा चलना", correct: false },
            { text: "रंगीन होना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह लैटिन शब्द \"diffringere\" से आया है, जिसका अर्थ है \"टुकड़ों में तोड़ना\", जो तरंगाग्र के टूटने और फैलने की प्रक्रिया को संदर्भित करता है"
    },
    {
        question: "प्रश्न 45. यदि हम एक लेजर बीम को एक बहुत ही संकीर्ण स्लिट से गुजारें, तो पर्दे पर क्या दिखाई देगा?",
        answers: shuffle([
            { text: "एक एकल चमकीला बिंदु।", correct: false },
            { text: "एक चौड़ी केंद्रीय चमकीली पट्टी जिसके दोनों ओर कम तीव्रता वाली पट्टियाँ हों।", correct: true },
            { text: "समान तीव्रता वाली कई चमकीली पट्टियाँ।", correct: false },
            { text: "कुछ भी नहीं दिखाई देगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक क्लासिक एकल-स्लिट विवर्तन प्रतिरूप है"
    },
    {
        question: "प्रश्न 46. कौन सी तरंग घटना दैनिक जीवन में सबसे कम प्रत्यक्ष रूप से अनुभव की जाती है?",
        answers: shuffle([
            { text: "परावर्तन", correct: false },
            { text: "अपवर्तन", correct: false },
            { text: "विवर्तन (प्रकाश का)", correct: true },
            { text: "ध्वनि का परावर्तन (प्रतिध्वनि)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश का तरंगदैर्ध्य बहुत छोटा होने के कारण, इसके विवर्तन के प्रभाव आमतौर पर बहुत छोटे पैमाने पर होते हैं और विशेष व्यवस्था के बिना आसानी से दिखाई नहीं देते हैं"
    },
    {
        question: "प्रश्न 47. एक अच्छे विवर्तन ग्रेटिंग में स्लिटों की संख्या कैसी होनी चाहिए?",
        answers: shuffle([
            { text: "बहुत कम (2 या 3)", correct: false },
            { text: "मध्यम (लगभग 100)", correct: false },
            { text: "बहुत अधिक (हजारों प्रति सेंटीमीटर)", correct: true },
            { text: "केवल एक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्लिटों की संख्या जितनी अधिक होती है, उच्चिष्ठ उतने ही तीक्ष्ण और चमकीले होते हैं, जिससे स्पेक्ट्रम का विभेदन बेहतर होता है"
    },
    {
        question: "प्रश्न 48. क्या विवर्तन के बिना व्यतिकरण संभव है?",
        answers: shuffle([
            { text: "हाँ, हमेशा।", correct: false },
            { text: "नहीं, व्यतिकरण के लिए प्रकाश को स्लिटों से गुजरना पड़ता है, जहाँ विवर्तन होता है।", correct: true },
            { text: "केवल निर्वात में।", correct: false },
            { text: "केवल ध्वनि तरंगों के लिए।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उदाहरण के लिए, यंग के द्वि-स्लिट प्रयोग में, प्रत्येक स्लिट से प्रकाश विवर्तित होता है और फिर ये विवर्तित तरंगें एक-दूसरे के साथ व्यतिकरण करती हैं"
    },
    {
        question: "प्रश्न 49. कौन सा सिद्धांत तरंगाग्र के आगे बढ़ने की व्याख्या करता है?",
        answers: shuffle([
            { text: "न्यूटन का कणिका सिद्धांत", correct: false },
            { text: "स्नेल का नियम", correct: false },
            { text: "हाइगेन्स का सिद्धांत", correct: true },
            { text: "प्लैंक का क्वांटम सिद्धांत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाइगेन्स का सिद्धांत यह बताता है कि द्वितीयक तरंगिकाओं का आवरण (envelope) किसी बाद के समय में नए तरंगाग्र की स्थिति देता है"
    },
    {
        question: "प्रश्न 50. एक वृत्ताकार द्वारक के कारण होने वाला विवर्तन किसकी विभेदन क्षमता को सीमित करता है?",
        answers: shuffle([
            { text: "प्रिज्म", correct: false },
            { text: "मानव नेत्र", correct: true },
            { text: "विवर्तन ग्रेटिंग", correct: false },
            { text: "पोलेरॉइड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मानव नेत्र की पुतली एक वृत्ताकार द्वारक के रूप में कार्य करती है, जो विवर्तन का कारण बनती है और हमारी आंखों की विभेदन क्षमता के लिए एक मौलिक सीमा निर्धारित करती है"
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