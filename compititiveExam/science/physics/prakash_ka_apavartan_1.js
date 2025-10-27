const questions = [
    {
        topHeading: "प्रकाश के अपवर्तन पर आधारित 50 MCQs,part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. जब प्रकाश की किरण एक पारदर्शी माध्यम से दूसरे पारदर्शी माध्यम में जाती है, तो उसके पथ में होने वाले परिवर्तन को क्या कहते हैं?",
        answers: shuffle([
            { text: "प्रकाश का परावर्तन", correct: false },
            { text: "प्रकाश का अपवर्तन", correct: true },
            { text: "प्रकाश का विवर्तन", correct: false },
            { text: "प्रकाश का प्रकीर्णन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश का अपवर्तन वह घटना है जिसमें प्रकाश की किरण एक माध्यम से दूसरे माध्यम में प्रवेश करने पर अपने मूल पथ से विचलित हो जाती है"
    },
    {
        question: "प्रश्न 2. प्रकाश के अपवर्तन का मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "प्रकाश की आवृत्ति में परिवर्तन", correct: false },
            { text: "विभिन्न माध्यमों में प्रकाश की चाल का भिन्न-भिन्न होना", correct: true },
            { text: "प्रकाश का अवशोषण", correct: false },
            { text: "प्रकाश का सीधा पथ में गमन करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्योंकि प्रकाश अलग-अलग माध्यमों (जैसे हवा, पानी, कांच) में अलग-अलग गति से चलता है, इसलिए एक माध्यम से दूसरे में जाने पर वह मुड़ जाता है"
    },
    {
        question: "प्रश्न 3. जब प्रकाश की किरण विरल माध्यम से सघन माध्यम में प्रवेश करती है, तो वह किधर मुड़ती है?",
        answers: shuffle([
            { text: "अभिलंब की ओर झुक जाती है।", correct: true },
            { text: "अभिलंब से दूर हट जाती है।", correct: false },
            { text: "सीधी निकल जाती है।", correct: false },
            { text: "वापस परावर्तित हो जाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सघन माध्यम में प्रकाश की गति कम हो जाती है, जिसके कारण किरण अभिलंब (सतह पर लंबवत रेखा) की ओर झुक जाती है"
    },
    {
        question: "प्रश्न 4. जब प्रकाश की किरण सघन माध्यम से विरल माध्यम में प्रवेश करती है, तो वह किधर मुड़ती है?",
        answers: shuffle([
            { text: "अभिलंब की ओर झुक जाती है।", correct: false },
            { text: "अभिलंब से दूर हट जाती है।", correct: true },
            { text: "बिना मुड़े सीधी निकल जाती है।", correct: false },
            { text: "पूर्ण आंतरिक परावर्तित हो जाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विरल माध्यम में प्रकाश की गति बढ़ जाती है, जिससे किरण अभिलंब से दूर हट जाती है"
    },
    {
        question: "प्रश्न 5. पानी में डूबी हुई पेंसिल का मुड़ा हुआ दिखाई देना प्रकाश की किस घटना का उदाहरण है?",
        answers: shuffle([
            { text: "परावर्तन", correct: false },
            { text: "पूर्ण आंतरिक परावर्तन", correct: false },
            { text: "अपवर्तन", correct: true },
            { text: "विक्षेपण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेंसिल के डूबे हुए हिस्से से आने वाली प्रकाश किरणें पानी (सघन माध्यम) से हवा (विरल माध्यम) में आती हैं और अभिलंब से दूर मुड़ जाती हैं, जिससे पेंसिल मुड़ी हुई प्रतीत होती है"
    },
    {
        question: "प्रश्न 6. तारों का टिमटिमाना प्रकाश की किस घटना के कारण होता है?",
        answers: shuffle([
            { text: "वायुमंडलीय परावर्तन", correct: false },
            { text: "वायुमंडलीय अपवर्तन", correct: true },
            { text: "प्रकाश का प्रकीर्णन", correct: false },
            { text: "प्रकाश का विवर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तारों से आने वाला प्रकाश पृथ्वी के वायुमंडल की विभिन्न परतों से होकर गुजरता है, जिनका घनत्व और तापमान बदलता रहता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस निरंतर अपवर्तन के कारण तारे टिमटिमाते हुए दिखाई देते हैं"
    },
    {
        question: "प्रश्न 7. किसी माध्यम का अपवर्तनांक (refractive index) किस पर निर्भर करता है?",
        answers: shuffle([
            { text: "माध्यम की प्रकाशिक सघनता पर", correct: true },
            { text: "आपतन कोण पर", correct: false },
            { text: "माध्यम के आकार पर", correct: false },
            { text: "प्रकाश स्रोत की तीव्रता पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपवर्तनांक यह मापता है कि कोई माध्यम प्रकाश को कितना मोड़ता है, जो सीधे तौर पर उसकी प्रकाशिक सघनता से संबंधित है"
    },
    {
        question: "प्रश्न 8. किस नियम को अपवर्तन का नियम भी कहा जाता है?",
        answers: shuffle([
            { text: "न्यूटन का नियम", correct: false },
            { text: "स्नेल का नियम", correct: true },
            { text: "फैराडे का नियम", correct: false },
            { text: "हुक का नियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्नेल का नियम आपतन कोण और अपवर्तन कोण के बीच संबंध स्थापित करता है और बताता है कि उनकी ज्या (sine) का अनुपात दोनों माध्यमों के अपवर्तनांक के अनुपात के बराबर होता है"
    },
    {
        question: "प्रश्न 9. लेंस बनाने के लिए निम्नलिखित में से किस सामग्री का उपयोग नहीं किया जा सकता है?",
        answers: shuffle([
            { text: "पानी", correct: false },
            { text: "कांच", correct: false },
            { text: "प्लास्टिक", correct: false },
            { text: "मिट्टी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लेंस बनाने के लिए पारदर्शी सामग्री की आवश्यकता होती है, जिससे प्रकाश गुजर सके।<br><br><i class='fa-solid fa-angles-right icon'></i> मिट्टी एक अपारदर्शी सामग्री है"
    },
    {
        question: "प्रश्न 10. वह लेंस जो बीच में मोटा और किनारों पर पतला होता है, क्या कहलाता है?",
        answers: shuffle([
            { text: "अवतल लेंस", correct: false },
            { text: "उत्तल लेंस", correct: true },
            { text: "समतल लेंस", correct: false },
            { text: "बेलनाकार लेंस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस प्रकार की संरचना वाले लेंस को उत्तल लेंस (द्वि-उत्तल) कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रकाश किरणों को अभिसरित करता है"
    },
    {
        question: "प्रश्न 11. वह लेंस जो बीच में पतला और किनारों पर मोटा होता है, क्या कहलाता है?",
        answers: shuffle([
            { text: "अवतल लेंस", correct: true },
            { text: "उत्तल लेंस", correct: false },
            { text: "समतल-उत्तल लेंस", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस प्रकार की संरचना वाले लेंस को अवतल लेंस (द्वि-अवतल) कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रकाश किरणों को अपसरित करता है"
    },
    {
        question: "प्रश्न 12. किस लेंस को 'अभिसारी लेंस' भी कहा जाता है?",
        answers: shuffle([
            { text: "अवतल लेंस", correct: false },
            { text: "उत्तल लेंस", correct: true },
            { text: "समतल लेंस", correct: false },
            { text: "कोई भी लेंस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तल लेंस अपने से होकर गुजरने वाली समानांतर प्रकाश किरणों को एक बिंदु (फोकस) पर एकत्रित या अभिसरित करता है"
    },
    {
        question: "प्रश्न 13. किस लेंस को 'अपसारी लेंस' भी कहा जाता है?",
        answers: shuffle([
            { text: "अवतल लेंस", correct: true },
            { text: "उत्तल लेंस", correct: false },
            { text: "परवलयिक लेंस", correct: false },
            { text: "कोई भी लेंस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवतल लेंस अपने से होकर गुजरने वाली समानांतर प्रकाश किरणों को फैला देता है या अपसरित कर देता है"
    },
    {
        question: "प्रश्न 14. लेंस का प्रकाशिक केंद्र कौन सा बिंदु होता है?",
        answers: shuffle([
            { text: "वह बिंदु जहाँ सभी किरणें मिलती हैं।", correct: false },
            { text: "लेंस का ज्यामितीय केंद्र, जिससे गुजरने वाली किरण बिना विचलित हुए सीधी निकल जाती है।", correct: true },
            { text: "लेंस का किनारा।", correct: false },
            { text: "मुख्य फोकस।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाशिक केंद्र (Optical Centre) लेंस के मुख्य अक्ष पर स्थित वह बिंदु है जहाँ से प्रकाश की किरण बिना किसी विचलन के गुजरती है"
    },
    {
        question: "प्रश्न 15. सूर्योदय से कुछ समय पहले और सूर्यास्त के कुछ समय बाद तक सूर्य का दिखाई देना किस घटना का परिणाम है?",
        answers: shuffle([
            { text: "प्रकाश का प्रकीर्णन", correct: false },
            { text: "वायुमंडलीय अपवर्तन", correct: true },
            { text: "प्रकाश का परावर्तन", correct: false },
            { text: "पूर्ण आंतरिक परावर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब सूर्य क्षितिज से नीचे होता है, तब भी उसकी किरणें वायुमंडल में अपवर्तित होकर हमारी आँखों तक पहुँच जाती हैं, जिससे हमें सूर्य क्षितिज के ऊपर दिखाई देता है"
    },
    {
        question: "प्रश्न 16. तालाब की तली का ऊपर उठा हुआ दिखाई देना किस कारण से होता है?",
        answers: shuffle([
            { text: "प्रकाश का अपवर्तन", correct: true },
            { text: "प्रकाश का परावर्तन", correct: false },
            { text: "प्रकाश का विवर्तन", correct: false },
            { text: "प्रकाश का व्यतिकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तालाब की तली से आने वाली प्रकाश किरणें पानी से हवा में प्रवेश करते समय अभिलंब से दूर मुड़ जाती हैं, जिससे हमें तली की आभासी गहराई कम प्रतीत होती है"
    },
    {
        question: "प्रश्न 17. पूर्ण आंतरिक परावर्तन (Total Internal Reflection) के लिए आवश्यक शर्त क्या है?",
        answers: shuffle([
            { text: "प्रकाश को विरल माध्यम से सघन माध्यम में जाना चाहिए।", correct: false },
            { text: "प्रकाश को सघन माध्यम से विरल माध्यम में जाना चाहिए और आपतन कोण क्रांतिक कोण से अधिक होना चाहिए।", correct: true },
            { text: "आपतन कोण हमेशा 45 डिग्री होना चाहिए।", correct: false },
            { text: "प्रकाश को लंबवत आपतित होना चाहिए।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पूर्ण आंतरिक परावर्तन के लिए ये दो शर्तें अनिवार्य हैं: प्रकाश का सघन से विरल माध्यम में जाना और आपतन कोण का मान क्रांतिक कोण से अधिक होना"
    },
    {
        question: "प्रश्न 18. हीरे का चमकना प्रकाश की किस घटना पर आधारित है?",
        answers: shuffle([
            { text: "अपवर्तन", correct: false },
            { text: "प्रकीर्णन", correct: false },
            { text: "पूर्ण आंतरिक परावर्तन", correct: true },
            { text: "व्यतिकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीरे का अपवर्तनांक बहुत अधिक होता है, जिससे उसका क्रांतिक कोण बहुत छोटा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रकाश एक बार हीरे में प्रवेश करने के बाद बाहर निकलने से पहले कई बार पूर्ण आंतरिक परावर्तन से गुजरता है, जिससे वह अत्यधिक चमकता है"
    },
    {
        question: "प्रश्न 19. ऑप्टिकल फाइबर (प्रकाशिक तंतु) किस सिद्धांत पर कार्य करता है?",
        answers: shuffle([
            { text: "अपवर्तन", correct: false },
            { text: "पूर्ण आंतरिक परावर्तन", correct: true },
            { text: "प्रकीर्णन", correct: false },
            { text: "परावर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑप्टिकल फाइबर में, प्रकाश संकेतों को बिना अधिक ऊर्जा हानि के लंबी दूरी तक भेजने के लिए पूर्ण आंतरिक परावर्तन का उपयोग किया जाता है"
    },
    {
        question: "प्रश्न 20. रेगिस्तान में मरीचिका (Mirage) का बनना किस घटना का उदाहरण है?",
        answers: shuffle([
            { text: "केवल अपवर्तन", correct: false },
            { text: "केवल परावर्तन", correct: false },
            { text: "प्रकाश का अपवर्तन और पूर्ण आंतरिक परावर्तन", correct: true },
            { text: "केवल प्रकीर्णन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गर्मियों में जमीन के पास की हवा गर्म होकर विरल हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> दूर की वस्तुओं से आने वाला प्रकाश जब इन परतों से गुजरता है तो अपवर्तित होता है और अंततः पूर्ण आंतरिक परावर्तन के कारण हमें वस्तु का उल्टा प्रतिबिंब दिखाई देता है, जो पानी का भ्रम पैदा करता है"
    },
    {
        question: "प्रश्न 21. लेंस की शक्ति का मात्रक क्या है?",
        answers: shuffle([
            { text: "वाट", correct: false },
            { text: "जूल", correct: false },
            { text: "डायोप्टर", correct: true },
            { text: "मीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लेंस की शक्ति (प्रकाश को मोड़ने की क्षमता) को डायोप्टर (D) में मापा जाता है, जो मीटर में मापी गई फोकस दूरी का व्युत्क्रम होता है"
    },
    {
        question: "प्रश्न 22. उत्तल लेंस की शक्ति कैसी होती है?",
        answers: shuffle([
            { text: "धनात्मक", correct: true },
            { text: "ऋणात्मक", correct: false },
            { text: "शून्य", correct: false },
            { text: "धनात्मक या ऋणात्मक कुछ भी हो सकती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चिह्न परिपाटी के अनुसार, उत्तल लेंस की फोकस दूरी धनात्मक होती है, इसलिए उसकी शक्ति भी धनात्मक होती है"
    },
    {
        question: "प्रश्न 23. अवतल लेंस की शक्ति कैसी होती है?",
        answers: shuffle([
            { text: "धनात्मक", correct: false },
            { text: "ऋणात्मक", correct: true },
            { text: "शून्य", correct: false },
            { text: "हमेशा एक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चिह्न परिपाटी के अनुसार, अवतल लेंस की फोकस दूरी ऋणात्मक होती है, इसलिए उसकी शक्ति भी ऋणात्मक होती है"
    },
    {
        question: "प्रश्न 24. मानव आँख में मौजूद लेंस किस प्रकार का होता है?",
        answers: shuffle([
            { text: "अवतल लेंस", correct: false },
            { text: "उत्तल लेंस", correct: true },
            { text: "समतल लेंस", correct: false },
            { text: "कोई लेंस नहीं होता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आँख का लेंस एक उत्तल लेंस होता है जो प्रकाश को रेटिना पर केंद्रित करता है ताकि एक स्पष्ट प्रतिबिंब बन सके"
    },
    {
        question: "प्रश्न 25. सूक्ष्मदर्शी (माइक्रोस्कोप) में किस प्रकार के लेंस का प्रयोग होता है?",
        answers: shuffle([
            { text: "केवल अवतल लेंस", correct: false },
            { text: "केवल उत्तल लेंस", correct: true },
            { text: "अवतल और उत्तल दोनों", correct: false },
            { text: "समतल दर्पण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सरल और यौगिक दोनों प्रकार के सूक्ष्मदर्शी में छोटी वस्तुओं का बड़ा प्रतिबिंब बनाने के लिए उत्तल लेंस का उपयोग किया जाता है"
    },
    {
        question: "प्रश्न 26. दूर दृष्टि दोष (हाइपरमेट्रोपिया) को ठीक करने के लिए किस लेंस का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "उत्तल लेंस", correct: true },
            { text: "अवतल लेंस", correct: false },
            { text: "बेलनाकार लेंस", correct: false },
            { text: "द्विफोकसी लेंस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दूर दृष्टि दोष में, प्रतिबिंब रेटिना के पीछे बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उत्तल लेंस प्रकाश किरणों को अभिसरित करके प्रतिबिंब को रेटिना पर बनाने में मदद करता है"
    },
    {
        question: "प्रश्न 27. निकट दृष्टि दोष (मायोपिया) को ठीक करने के लिए किस लेंस का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "उत्तल लेंस", correct: false },
            { text: "अवतल लेंस", correct: true },
            { text: "बेलनाकार लेंस", correct: false },
            { text: "समतल-उत्तल लेंस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निकट दृष्टि दोष में, प्रतिबिंब रेटिना से पहले बन जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अवतल लेंस प्रकाश किरणों को अपसरित करके प्रतिबिंब को सही स्थान, यानी रेटिना पर बनाने में मदद करता है"
    },
    {
        question: "प्रश्न 28. जब सफेद प्रकाश एक प्रिज्म से होकर गुजरता है, तो वह अपने घटक रंगों में विभाजित हो जाता है। इस घटना को क्या कहते हैं?",
        answers: shuffle([
            { text: "परावर्तन", correct: false },
            { text: "अपवर्तन", correct: false },
            { text: "विक्षेपण", correct: true },
            { text: "विवर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश का विक्षेपण (Dispersion) वह प्रक्रिया है जिसमें सफेद प्रकाश अपने सात घटक रंगों (VIBGYOR) में बंट जाता है क्योंकि प्रत्येक रंग के लिए प्रिज्म के पदार्थ का अपवर्तनांक थोड़ा भिन्न होता है"
    },
    {
        question: "प्रश्न 29. प्रिज्म द्वारा विक्षेपण में, कौन सा रंग सबसे अधिक मुड़ता है?",
        answers: shuffle([
            { text: "लाल", correct: false },
            { text: "हरा", correct: false },
            { text: "पीला", correct: false },
            { text: "बैंगनी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैंगनी रंग के प्रकाश का तरंगदैर्ध्य सबसे कम होता है, इसलिए कांच में उसकी गति सबसे कम होती है और उसका अपवर्तनांक सबसे अधिक होता है, जिसके कारण वह सबसे अधिक विचलित होता है"
    },
    {
        question: "प्रश्न 30. प्रिज्म द्वारा विक्षेपण में, कौन सा रंग सबसे कम मुड़ता है?",
        answers: shuffle([
            { text: "लाल", correct: true },
            { text: "नीला", correct: false },
            { text: "नारंगी", correct: false },
            { text: "बैंगनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल रंग के प्रकाश का तरंगदैर्ध्य सबसे अधिक होता है, इसलिए कांच में उसकी गति सबसे अधिक होती है और उसका अपवर्तनांक सबसे कम होता है, जिसके कारण वह सबसे कम विचलित होता है"
    },
    {
        question: "प्रश्न 31. इंद्रधनुष का बनना प्रकाश की किन घटनाओं का संयुक्त परिणाम है?",
        answers: shuffle([
            { text: "केवल परावर्तन और अपवर्तन", correct: false },
            { text: "केवल प्रकीर्णन", correct: false },
            { text: "अपवर्तन, विक्षेपण और पूर्ण आंतरिक परावर्तन", correct: true },
            { text: "केवल विवर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब सूर्य का प्रकाश पानी की बूंदों पर पड़ता है, तो पहले अपवर्तन और विक्षेपण होता है, फिर बूंद के अंदर पूर्ण आंतरिक परावर्तन होता है, और अंत में बूंद से बाहर निकलते समय फिर से अपवर्तन होता है, जिससे इंद्रधनुष बनता है"
    },
    {
        question: "प्रश्न 32. क्रांतिक कोण (Critical Angle) वह आपतन कोण है जिसके लिए अपवर्तन कोण का मान कितना होता है?",
        answers: shuffle([
            { text: "0 डिग्री", correct: false },
            { text: "45 डिग्री", correct: false },
            { text: "90 डिग्री", correct: true },
            { text: "180 डिग्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रांतिक कोण सघन माध्यम में बना वह आपतन कोण है, जिसके संगत विरल माध्यम में अपवर्तन कोण 90 डिग्री होता है"
    },
    {
        question: "प्रश्न 33. किस माध्यम का अपवर्तनांक सबसे अधिक होता है?",
        answers: shuffle([
            { text: "हवा", correct: false },
            { text: "पानी", correct: false },
            { text: "कांच", correct: false },
            { text: "हीरा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिए गए विकल्पों में हीरे का अपवर्तनांक (लगभग 2.42) सबसे अधिक होता है, जिसका अर्थ है कि यह प्रकाश को सबसे अधिक मोड़ता है"
    },
    {
        question: "प्रश्न 34. निर्वात का निरपेक्ष अपवर्तनांक कितना माना जाता है?",
        answers: shuffle([
            { text: "शून्य", correct: false },
            { text: "एक", correct: true },
            { text: "अनंत", correct: false },
            { text: "एक से कम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निरपेक्ष अपवर्तनांक की गणना निर्वात के सापेक्ष की जाती है, इसलिए निर्वात का स्वयं के सापेक्ष अपवर्तनांक 1 होता है"
    },
    {
        question: "प्रश्न 35. यदि कोई प्रकाश किरण दो माध्यमों को अलग करने वाली सतह पर लंबवत (90°) पड़ती है, तो अपवर्तन के बाद क्या होगा?",
        answers: shuffle([
            { text: "वह अभिलंब की ओर मुड़ जाएगी।", correct: false },
            { text: "वह अभिलंब से दूर हट जाएगी।", correct: false },
            { text: "वह बिना विचलित हुए सीधी निकल जाएगी।", correct: true },
            { text: "वह परावर्तित हो जाएगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब आपतन कोण शून्य होता है (किरण अभिलंब के अनुदिश होती है), तो किरण बिना किसी विचलन के दूसरे माध्यम में प्रवेश कर जाती है"
    },
    {
        question: "प्रश्न 36. आवर्धक लेंस (Magnifying Glass) के रूप में किस लेंस का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "अवतल लेंस", correct: false },
            { text: "कम फोकस दूरी का उत्तल लेंस", correct: true },
            { text: "अधिक फोकस दूरी का उत्तल लेंस", correct: false },
            { text: "समतल कांच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब किसी वस्तु को उत्तल लेंस के प्रकाशिक केंद्र और फोकस के बीच रखा जाता है, तो उसका सीधा, आभासी और बड़ा प्रतिबिंब बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> कम फोकस दूरी से आवर्धन क्षमता अधिक होती है"
    },
    {
        question: "प्रश्न 37. पानी से भरे गिलास में रखा नींबू अपने वास्तविक आकार से बड़ा क्यों दिखाई देता है?",
        answers: shuffle([
            { text: "प्रकाश के परावर्तन के कारण", correct: false },
            { text: "प्रकाश के अपवर्तन के कारण", correct: true },
            { text: "प्रकाश के प्रकीर्णन के कारण", correct: false },
            { text: "पृष्ठ तनाव के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गिलास की घुमावदार सतह एक उत्तल लेंस की तरह काम करती है, जो नींबू का आवर्धित प्रतिबिंब बनाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अपवर्तन का ही एक प्रभाव है"
    },
    {
        question: "प्रश्न 38. जब प्रकाश की किरण कांच के स्लैब से गुजरती है, तो निर्गत किरण आपतित किरण के सापेक्ष कैसी होती है?",
        answers: shuffle([
            { text: "लंबवत", correct: false },
            { text: "समानांतर, लेकिन पार्श्व रूप से विस्थापित", correct: true },
            { text: "उसी पथ पर", correct: false },
            { text: "विपरीत दिशा में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किरण दो बार अपवर्तित होती है - एक बार हवा से कांच में और फिर कांच से हवा में।<br><br><i class='fa-solid fa-angles-right icon'></i> अंतिम निर्गत किरण मूल आपतित किरण के समानांतर होती है, लेकिन थोड़ी सी बगल में खिसक जाती है, जिसे पार्श्व विस्थापन कहते हैं"
    },
    {
        question: "प्रश्न 39. लेंस की फोकस दूरी किस पर निर्भर नहीं करती है?",
        answers: shuffle([
            { text: "लेंस के पदार्थ के अपवर्तनांक पर", correct: false },
            { text: "लेंस की वक्रता त्रिज्याओं पर", correct: false },
            { text: "लेंस के व्यास (द्वारक) पर", correct: true },
            { text: "आसपास के माध्यम के अपवर्तनांक पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फोकस दूरी लेंस के पदार्थ, उसकी वक्रता और बाहरी माध्यम पर निर्भर करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> द्वारक (Aperture) केवल लेंस में प्रवेश करने वाले प्रकाश की मात्रा को नियंत्रित करता है, फोकस दूरी को नहीं"
    },
    {
        question: "प्रश्न 40. किसी लेंस द्वारा बना प्रतिबिंब यदि हमेशा आभासी, सीधा और वस्तु से छोटा हो, तो वह लेंस कौन सा है?",
        answers: shuffle([
            { text: "उत्तल लेंस", correct: false },
            { text: "अवतल लेंस", correct: true },
            { text: "समतल-उत्तल लेंस", correct: false },
            { text: "यह संभव नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवतल लेंस, वस्तु की किसी भी स्थिति के लिए, हमेशा एक आभासी, सीधा और छोटा प्रतिबिंब बनाता है"
    },
    {
        question: "प्रश्न 41. आकाश का रंग नीला क्यों दिखाई देता है?",
        answers: shuffle([
            { text: "अपवर्तन के कारण", correct: false },
            { text: "परावर्तन के कारण", correct: false },
            { text: "प्रकाश के प्रकीर्णन के कारण", correct: true },
            { text: "विक्षेपण के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य के प्रकाश में मौजूद नीले रंग का तरंगदैर्ध्य कम होता है, इसलिए वायुमंडल के कणों द्वारा उसका प्रकीर्णन (scattering) सबसे अधिक होता है, जिससे आकाश नीला दिखाई देता है"
    },
    {
        question: "प्रश्न 42. जब एक वस्तु को उत्तल लेंस के फोकस पर रखा जाता है, तो उसका प्रतिबिंब कहाँ बनता है?",
        answers: shuffle([
            { text: "फोकस पर", correct: false },
            { text: "प्रकाशिक केंद्र पर", correct: false },
            { text: "वक्रता केंद्र पर", correct: false },
            { text: "अनंत पर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब वस्तु मुख्य फोकस पर होती है, तो अपवर्तन के बाद किरणें समानांतर हो जाती हैं और माना जाता है कि वे अनंत पर मिलती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रतिबिंब अत्यधिक बड़ा और वास्तविक होता है"
    },
    {
        question: "प्रश्न 43. प्रकाश की कौन सी विशेषता एक माध्यम से दूसरे माध्यम में जाने पर अपरिवर्तित रहती है?",
        answers: shuffle([
            { text: "वेग", correct: false },
            { text: "तरंगदैर्ध्य", correct: false },
            { text: "आवृत्ति", correct: true },
            { text: "आयाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपवर्तन के दौरान प्रकाश का वेग और तरंगदैर्ध्य दोनों बदल जाते हैं, लेकिन उसकी आवृत्ति (जो स्रोत का गुण है) स्थिर रहती है"
    },
    {
        question: "प्रश्न 44. गर्म हवा के माध्यम से देखने पर वस्तुएं झिलमिलाती हुई क्यों दिखाई देती हैं?",
        answers: shuffle([
            { text: "वायुमंडलीय परावर्तन", correct: false },
            { text: "वायुमंडलीय अपवर्तन", correct: true },
            { text: "पूर्ण आंतरिक परावर्तन", correct: false },
            { text: "प्रकाश का ध्रुवण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आग या गर्म सतह के ऊपर की हवा का घनत्व लगातार बदलता रहता है, जिससे उससे आने वाले प्रकाश का पथ भी लगातार बदलता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस कारण वस्तुएं अस्थिर या झिलमिलाती हुई दिखती हैं"
    },
    {
        question: "प्रश्न 45. वास्तविक और आभासी गहराई के अनुपात को क्या कहते हैं?",
        answers: shuffle([
            { text: "आवर्धन", correct: false },
            { text: "शक्ति", correct: false },
            { text: "अपवर्तनांक", correct: true },
            { text: "क्रांतिक कोण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी माध्यम का अपवर्तनांक उसकी वास्तविक गहराई और आभासी गहराई के अनुपात के बराबर भी होता है"
    },
    {
        question: "प्रश्न 46. एंडोस्कोपी (चिकित्सीय जांच) में शरीर के आंतरिक अंगों को देखने के लिए किसका उपयोग होता है?",
        answers: shuffle([
            { text: "अवतल लेंस", correct: false },
            { text: "उत्तल लेंस", correct: false },
            { text: "प्रकाशिक तंतु (ऑप्टिकल फाइबर)", correct: true },
            { text: "सूक्ष्मदर्शी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंडोस्कोप में ऑप्टिकल फाइबर का एक बंडल होता है जो पूर्ण आंतरिक परावर्तन के सिद्धांत का उपयोग करके आंतरिक अंगों की छवियों को डॉक्टर तक पहुंचाता है"
    },
    {
        question: "प्रश्न 47. कौन सा लेंस हमेशा एक आभासी प्रतिबिंब बनाता है?",
        answers: shuffle([
            { text: "उत्तल लेंस", correct: false },
            { text: "अवतल लेंस", correct: true },
            { text: "समतल-उत्तल लेंस", correct: false },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवतल लेंस प्रकाश किरणों को अपसरित करता है, इसलिए वे वास्तव में कभी नहीं मिलतीं, जिससे हमेशा एक आभासी प्रतिबिंब ही बनता है"
    },
    {
        question: "प्रश्न 48. जब वस्तु को उत्तल लेंस के सामने 2F (वक्रता केंद्र) पर रखा जाता है, तो प्रतिबिंब कहाँ और कैसा बनता है?",
        answers: shuffle([
            { text: "F पर, छोटा और वास्तविक", correct: false },
            { text: "2F पर, समान आकार का और वास्तविक", correct: true },
            { text: "अनंत पर, बहुत बड़ा और वास्तविक", correct: false },
            { text: "लेंस के पीछे, बड़ा और आभासी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह स्थिति अवतल दर्पण के वक्रता केंद्र पर वस्तु रखने के समान है।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रतिबिंब दूसरी तरफ 2F पर ही बनता है, जो वास्तविक, उल्टा और वस्तु के आकार के बराबर होता है"
    },
    {
        question: "प्रश्न 49. पानी का अपवर्तनांक लगभग कितना होता है?",
        answers: shuffle([
            { text: "1.00", correct: false },
            { text: "1.33", correct: true },
            { text: "1.52", correct: false },
            { text: "2.42", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पानी का निरपेक्ष अपवर्तनांक लगभग 1.33 होता है, जिसका अर्थ है कि निर्वात की तुलना में पानी में प्रकाश की गति 1.33 गुना कम हो जाती है"
    },
    {
        question: "प्रश्न 50. लेंस की क्षमता और उसकी फोकस दूरी में क्या संबंध है?",
        answers: shuffle([
            { text: "वे एक दूसरे के सीधे समानुपाती होते हैं।", correct: false },
            { text: "वे एक दूसरे के व्युत्क्रमानुपाती होते हैं।", correct: true },
            { text: "वे बराबर होते हैं।", correct: false },
            { text: "उनमें कोई संबंध नहीं है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक्ति (P) = 1 / फोकस दूरी (f, मीटर में)।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका मतलब है कि जितनी कम फोकस दूरी होगी, लेंस की क्षमता उतनी ही अधिक होगी"
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