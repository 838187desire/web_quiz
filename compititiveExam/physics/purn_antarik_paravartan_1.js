const questions = [
    {
        topHeading: "पूर्ण आंतरिक परावर्तन पर आधारित 50 MCQs,part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. पूर्ण आंतरिक परावर्तन की घटना के लिए प्रकाश की किरण को किस माध्यम से किस माध्यम में जाना आवश्यक है?",
        answers: shuffle([
            { text: "विरल माध्यम से सघन माध्यम में", correct: false },
            { text: "सघन माध्यम से विरल माध्यम में", correct: true },
            { text: "किसी भी माध्यम से किसी भी माध्यम में", correct: false },
            { text: "दो समान अपवर्तनांक वाले माध्यमों के बीच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पूर्ण आंतरिक परावर्तन तभी संभव है जब प्रकाश किरण एक सघन प्रकाशिक माध्यम से एक विरल प्रकाशिक माध्यम में प्रवेश करने का प्रयास करती है।"
    },
    {
        question: "प्रश्न 2. पूर्ण आंतरिक परावर्तन के लिए दूसरी आवश्यक शर्त क्या है?",
        answers: shuffle([
            { text: "आपतन कोण, अपवर्तन कोण के बराबर होना चाहिए।", correct: false },
            { text: "आपतन कोण, क्रांतिक कोण से कम होना चाहिए।", correct: false },
            { text: "आपतन कोण, क्रांतिक कोण से अधिक होना चाहिए।", correct: true },
            { text: "आपतन कोण शून्य होना चाहिए।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब सघन माध्यम में आपतन कोण का मान क्रांतिक कोण से अधिक हो जाता है, तब प्रकाश किरण दूसरे माध्यम में अपवर्तित होने के बजाय उसी माध्यम में परावर्तित हो जाती है।"
    },
    {
        question: "प्रश्न 3. क्रांतिक कोण (critical angle) क्या है?",
        answers: shuffle([
            { text: "सघन माध्यम में वह आपतन कोण जिसके लिए विरल माध्यम में अपवर्तन कोण 90 डिग्री हो।", correct: true },
            { text: "विरल माध्यम में वह आपतन कोण जिसके लिए सघन माध्यम में अपवर्तन कोण 90 डिग्री हो।", correct: false },
            { text: "वह कोण जिस पर परावर्तन और अपवर्तन दोनों होते हैं।", correct: false },
            { text: "आपतन कोण और अपवर्तन कोण का योग।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सघन माध्यम में वह आपतन कोण जिसके लिए विरल माध्यम में अपवर्तन कोण 90 डिग्री हो।<br><br><i class='fa-solid fa-angles-right icon'></i> क्रांतिक कोण, पूर्ण आंतरिक परावर्तन की घटना की सीमा को परिभाषित करता है।"
    },
    {
        question: "प्रश्न 4. हीरे के अत्यधिक चमकने का मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "उसका कठोर होना", correct: false },
            { text: "प्रकाश का विक्षेपण", correct: false },
            { text: "प्रकाश का पूर्ण आंतरिक परावर्तन", correct: true },
            { text: "उसका उच्च गलनांक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश का पूर्ण आंतरिक परावर्तन।<br><br><i class='fa-solid fa-angles-right icon'></i> हीरे का अपवर्तनांक बहुत अधिक होता है, जिसके कारण उसका क्रांतिक कोण बहुत छोटा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रकाश एक बार प्रवेश करने पर कई बार पूर्ण आंतरिक परावर्तित होता है, जिससे हीरा चमकता है।"
    },
    {
        question: "प्रश्न 5. रेगिस्तान में मरीचिका (mirage) का बनना किस प्रकाशिक घटना का उदाहरण है?",
        answers: shuffle([
            { text: "केवल प्रकाश का अपवर्तन", correct: false },
            { text: "केवल प्रकाश का परावर्तन", correct: false },
            { text: "प्रकाश का प्रकीर्णन", correct: false },
            { text: "प्रकाश का अपवर्तन और पूर्ण आंतरिक परावर्तन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश का अपवर्तन और पूर्ण आंतरिक परावर्तन।<br><br><i class='fa-solid fa-angles-right icon'></i> मरीचिका गर्म हवा की परतों द्वारा प्रकाश के अपवर्तन और अंततः पूर्ण आंतरिक परावर्तन के कारण बनती है, जिससे दूर की वस्तुओं का उल्टा प्रतिबिंब दिखाई देता है।"
    },
    {
        question: "प्रश्न 6. प्रकाशिक तंतु (optical fiber) किस सिद्धांत पर कार्य करता है?",
        answers: shuffle([
            { text: "प्रकाश का अपवर्तन", correct: false },
            { text: "प्रकाश का पूर्ण आंतरिक परावर्तन", correct: true },
            { text: "प्रकाश का विवर्तन", correct: false },
            { text: "प्रकाश का ध्रुवण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश का पूर्ण आंतरिक परावर्तन।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रकाशिक तंतु में, प्रकाश संकेतों को बिना ऊर्जा क्षय के लंबी दूरी तक भेजने के लिए बार-बार पूर्ण आंतरिक परावर्तन का उपयोग किया जाता है।"
    },
    {
        question: "प्रश्न 7. यदि किसी माध्यम का अपवर्तनांक अधिक है, तो उसका क्रांतिक कोण कैसा होगा?",
        answers: shuffle([
            { text: "अधिक होगा", correct: false },
            { text: "कम होगा", correct: true },
            { text: "अपरिवर्तित रहेगा", correct: false },
            { text: "शून्य होगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कम होगा।<br><br><i class='fa-solid fa-angles-right icon'></i> क्रांतिक कोण और अपवर्तनांक के बीच व्युत्क्रम संबंध होता है (sinC=1/n)।<br><br><i class='fa-solid fa-angles-right icon'></i> उच्च अपवर्तनांक का अर्थ है छोटा क्रांतिक कोण।"
    },
    {
        question: "प्रश्न 8. एंडोस्कोपी में शरीर के आंतरिक अंगों की जांच के लिए किस तकनीक का उपयोग होता है?",
        answers: shuffle([
            { text: "एक्स-किरण", correct: false },
            { text: "ध्वनि तरंगें", correct: false },
            { text: "प्रकाशिक तंतु के माध्यम से पूर्ण आंतरिक परावर्तन", correct: true },
            { text: "चुंबकीय अनुनाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाशिक तंतु के माध्यम से पूर्ण आंतरिक परावर्तन।<br><br><i class='fa-solid fa-angles-right icon'></i> एंडोस्कोप में प्रकाशिक तंतु का उपयोग करके शरीर के अंदर प्रकाश भेजा जाता है और आंतरिक अंगों की छवि को पूर्ण आंतरिक परावर्तन द्वारा बाहर देखा जाता है।"
    },
    {
        question: "प्रश्न 9. पानी में हवा का बुलबुला चमकीला क्यों दिखाई देता है?",
        answers: shuffle([
            { text: "बुलबुले के अपने प्रकाश के कारण", correct: false },
            { text: "प्रकाश के प्रकीर्णन के कारण", correct: false },
            { text: "पूर्ण आंतरिक परावर्तन के कारण", correct: true },
            { text: "प्रकाश के व्यतिकरण के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पूर्ण आंतरिक परावर्तन के कारण।<br><br><i class='fa-solid fa-angles-right icon'></i> जब प्रकाश सघन माध्यम (पानी) से विरल माध्यम (बुलबुले के अंदर की हवा) में जाने का प्रयास करता है, तो बुलबुले की सतह पर पूर्ण आंतरिक परावर्तन होता है, जिससे वह चमकता है।"
    },
    {
        question: "प्रश्न 10. इंद्रधनुष के निर्माण में कौन सी घटना शामिल होती है?",
        answers: shuffle([
            { text: "केवल अपवर्तन और विक्षेपण", correct: false },
            { text: "केवल पूर्ण आंतरिक परावर्तन", correct: false },
            { text: "अपवर्तन, विक्षेपण और पूर्ण आंतरिक परावर्तन", correct: true },
            { text: "केवल प्रकाश का प्रकीर्णन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपवर्तन, विक्षेपण और पूर्ण आंतरिक परावर्तन।<br><br><i class='fa-solid fa-angles-right icon'></i> इंद्रधनुष पानी की बूंदों द्वारा सूर्य के प्रकाश के अपवर्तन, विक्षेपण और एक या दो बार पूर्ण आंतरिक परावर्तन का संयुक्त परिणाम है।"
    },
    {
        question: "प्रश्न 11. कांच की दरार का चमकीला दिखाई देना किस पर आधारित है?",
        answers: shuffle([
            { text: "प्रकाश का अपवर्तन", correct: false },
            { text: "पूर्ण आंतरिक परावर्तन", correct: true },
            { text: "प्रकाश का ध्रुवण", correct: false },
            { text: "प्रकाश का परावर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पूर्ण आंतरिक परावर्तन।<br><br><i class='fa-solid fa-angles-right icon'></i> दरार में हवा भर जाती है, जो कांच की तुलना में विरल माध्यम है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब प्रकाश कांच से हवा में जाने का प्रयास करता है, तो दरार की सतह पर पूर्ण आंतरिक परावर्तन होता है।"
    },
    {
        question: "प्रश्न 12. किस रंग के प्रकाश के लिए क्रांतिक कोण का मान न्यूनतम होता है?",
        answers: shuffle([
            { text: "लाल", correct: false },
            { text: "हरा", correct: false },
            { text: "पीला", correct: false },
            { text: "बैंगनी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैंगनी।<br><br><i class='fa-solid fa-angles-right icon'></i> किसी माध्यम का अपवर्तनांक बैंगनी रंग के लिए अधिकतम होता है, इसलिए क्रांतिक कोण (sinC=1/n) बैंगनी रंग के लिए न्यूनतम होगा।"
    },
    {
        question: "प्रश्न 13. किस रंग के प्रकाश के लिए क्रांतिक कोण का मान अधिकतम होता है?",
        answers: shuffle([
            { text: "लाल", correct: true },
            { text: "नीला", correct: false },
            { text: "नारंगी", correct: false },
            { text: "बैंगनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल।<br><br><i class='fa-solid fa-angles-right icon'></i> किसी माध्यम का अपवर्तनांक लाल रंग के लिए न्यूनतम होता है, इसलिए क्रांतिक कोण का मान लाल रंग के लिए अधिकतम होगा।"
    },
    {
        question: "प्रश्न 14. पूर्ण आंतरिक परावर्तन की घटना में, प्रकाश ऊर्जा का क्या होता है?",
        answers: shuffle([
            { text: "ऊर्जा लगभग पूरी तरह से परावर्तित हो जाती है।", correct: true },
            { text: "ऊर्जा का अधिकांश भाग अवशोषित हो जाता है।", correct: false },
            { text: "ऊर्जा अपवर्तित हो जाती है।", correct: false },
            { text: "ऊर्जा ऊष्मा में बदल जाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊर्जा लगभग पूरी तरह से परावर्तित हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस घटना में ऊर्जा का क्षय नगण्य होता है, जिसके कारण परावर्तित किरण की तीव्रता लगभग आपतित किरण के बराबर होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यही कारण है कि यह उच्च गुणवत्ता वाले परावर्तन के लिए उपयोगी है।"
    },
    {
        question: "प्रश्न 15. यदि आपतन कोण क्रांतिक कोण के बराबर हो, तो अपवर्तन कोण कितना होगा?",
        answers: shuffle([
            { text: "0 डिग्री", correct: false },
            { text: "45 डिग्री", correct: false },
            { text: "90 डिग्री", correct: true },
            { text: "180 डिग्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 90 डिग्री।<br><br><i class='fa-solid fa-angles-right icon'></i> क्रांतिक कोण की परिभाषा के अनुसार, इस आपतन कोण के लिए अपवर्तित किरण दोनों माध्यमों की सतह को छूते हुए (90 डिग्री पर) निकलती है।"
    },
    {
        question: "प्रश्न 16. ठंडे देशों में दिखने वाली मरीचिका (Looming) का कारण क्या है?",
        answers: shuffle([
            { text: "प्रकाश का प्रकीर्णन", correct: false },
            { text: "प्रकाश का अपवर्तन और पूर्ण आंतरिक परावर्तन", correct: true },
            { text: "प्रकाश का विवर्तन", correct: false },
            { text: "प्रकाश का ध्रुवण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश का अपवर्तन और पूर्ण आंतरिक परावर्तन।<br><br><i class='fa-solid fa-angles-right icon'></i> यह रेगिस्तानी मरीचिका के विपरीत होता है, जहाँ समुद्र के पास की ठंडी हवा सघन होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> दूर के जहाजों से आने वाला प्रकाश ऊपर की ओर मुड़कर पूर्ण आंतरिक परावर्तित होता है, जिससे जहाज हवा में तैरते हुए दिखाई देते हैं।"
    },
    {
        question: "प्रश्न 17. एक पोरो प्रिज्म (Porro Prism) का उपयोग द्विनेत्री (binoculars) में क्यों किया जाता है?",
        answers: shuffle([
            { text: "छवि को बड़ा करने के लिए", correct: false },
            { text: "छवि को सीधा करने के लिए पूर्ण आंतरिक परावर्तन का उपयोग करने हेतु", correct: true },
            { text: "रंगों को अलग करने के लिए", correct: false },
            { text: "प्रकाश की तीव्रता बढ़ाने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> छवि को सीधा करने के लिए पूर्ण आंतरिक परावर्तन का उपयोग करने हेतु।<br><br><i class='fa-solid fa-angles-right icon'></i> द्विनेत्री के लेंस उल्टी छवि बनाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> पोरो प्रिज्म पूर्ण आंतरिक परावर्तन का उपयोग करके छवि को बिना ऊर्जा क्षय के सीधा कर देते हैं।"
    },
    {
        question: "प्रश्न 18. निम्नलिखित में से कौन सी घटना पूर्ण आंतरिक परावर्तन पर आधारित नहीं है?",
        answers: shuffle([
            { text: "हीरे का चमकना", correct: false },
            { text: "प्रकाशिक तंतु", correct: false },
            { text: "तारों का टिमटिमाना", correct: true },
            { text: "मरीचिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तारों का टिमटिमाना।<br><br><i class='fa-solid fa-angles-right icon'></i> तारों का टिमटिमाना वायुमंडलीय अपवर्तन के कारण होता है, न कि पूर्ण आंतरिक परावर्तन के कारण।"
    },
    {
        question: "प्रश्न 19. माध्यम का तापमान बढ़ने पर, सामान्यतः उसके क्रांतिक कोण पर क्या प्रभाव पड़ता है?",
        answers: shuffle([
            { text: "क्रांतिक कोण बढ़ जाता है।", correct: true },
            { text: "क्रांतिक कोण घट जाता है।", correct: false },
            { text: "कोई प्रभाव नहीं पड़ता।", correct: false },
            { text: "क्रांतिक कोण पहले बढ़ता है फिर घटता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रांतिक कोण बढ़ जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> तापमान बढ़ने पर माध्यम का अपवर्तनांक कम हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि क्रांतिक कोण अपवर्तनांक के व्युत्क्रमानुपाती होता है, इसलिए अपवर्तनांक घटने पर क्रांतिक कोण बढ़ जाएगा।"
    },
    {
        question: "प्रश्न 20. एक मछली जो पानी के अंदर से बाहर की दुनिया को देखती है, उसे दुनिया कैसी दिखाई देती है?",
        answers: shuffle([
            { text: "एक वर्गाकार खिड़की के माध्यम से", correct: false },
            { text: "एक वृत्ताकार खिड़की के माध्यम से", correct: true },
            { text: "पूरी सतह पर फैली हुई", correct: false },
            { text: "उल्टी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक वृत्ताकार खिड़की के माध्यम से।<br><br><i class='fa-solid fa-angles-right icon'></i> मछली केवल उन्हीं प्रकाश किरणों को देख सकती है जो क्रांतिक कोण से कम कोण पर पानी की सतह पर पड़ती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक शंकु बनाता है जिसका शीर्ष मछली की आंख पर होता है, और सतह पर यह एक वृत्त के रूप में दिखाई देता है, जिसे \"स्नेल की खिड़की\" कहते हैं।"
    },
    {
        question: "प्रश्न 21. पूर्ण आंतरिक परावर्तन के लिए दोनों माध्यमों का कैसा होना आवश्यक है?",
        answers: shuffle([
            { text: "अपारदर्शी", correct: false },
            { text: "पारदर्शी", correct: true },
            { text: "अर्ध-पारदर्शी", correct: false },
            { text: "कोई भी हो सकता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारदर्शी।<br><br><i class='fa-solid fa-angles-right icon'></i> यह घटना प्रकाश के एक माध्यम से दूसरे माध्यम में जाने के प्रयास से संबंधित है, इसलिए दोनों माध्यमों का पारदर्शी होना आवश्यक है।"
    },
    {
        question: "प्रश्न 22. यदि प्रकाश की किरण कांच से पानी में जा रही है, तो क्या पूर्ण आंतरिक परावर्तन संभव है? (कांच का अपवर्तनांक पानी से अधिक है)",
        answers: shuffle([
            { text: "हाँ, संभव है।", correct: true },
            { text: "नहीं, संभव नहीं है।", correct: false },
            { text: "केवल विशेष परिस्थितियों में संभव है।", correct: false },
            { text: "कहा नहीं जा सकता।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाँ, संभव है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि प्रकाश सघन माध्यम (कांच) से विरल माध्यम (पानी) में जा रहा है, इसलिए यदि आपतन कोण क्रांतिक कोण से अधिक हो तो पूर्ण आंतरिक परावर्तन संभव है।"
    },
    {
        question: "प्रश्न 23. यदि प्रकाश की किरण पानी से कांच में जा रही है, तो क्या पूर्ण आंतरिक परावर्तन संभव है?",
        answers: shuffle([
            { text: "हाँ, संभव है।", correct: false },
            { text: "नहीं, संभव नहीं है।", correct: true },
            { text: "केवल यदि आपतन कोण 90 डिग्री हो।", correct: false },
            { text: "केवल यदि पानी गर्म हो।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नहीं, संभव नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस स्थिति में, प्रकाश विरल माध्यम (पानी) से सघन माध्यम (कांच) में जा रहा है, जो पूर्ण आंतरिक परावर्तन की पहली शर्त का उल्लंघन करता है।"
    },
    {
        question: "प्रश्न 24. प्रकाशिक तंतु का कोर (core) जिस पदार्थ से बना होता है, उसका अपवर्तनांक क्लैडिंग (cladding) के अपवर्तनांक से कैसा होता है?",
        answers: shuffle([
            { text: "कम", correct: false },
            { text: "अधिक", correct: true },
            { text: "बराबर", correct: false },
            { text: "बहुत कम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिक।<br><br><i class='fa-solid fa-angles-right icon'></i> पूर्ण आंतरिक परावर्तन के लिए, प्रकाश को सघन माध्यम (कोर) से विरल माध्यम (क्लैडिंग) की ओर जाना चाहिए।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, कोर का अपवर्तनांक क्लैडिंग से अधिक रखा जाता है।"
    },
    {
        question: "प्रश्न 25. दूर संचार में प्रकाशिक तंतु का उपयोग करने का मुख्य लाभ क्या है?",
        answers: shuffle([
            { text: "वे सस्ते होते हैं।", correct: false },
            { text: "एक ही तंतु से बहुत सारे संकेत बिना एक-दूसरे को प्रभावित किए भेजे जा सकते हैं।", correct: true },
            { text: "वे बहुत भारी होते हैं।", correct: false },
            { text: "उन्हें स्थापित करना बहुत आसान है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक ही तंतु से बहुत सारे संकेत बिना एक-दूसरे को प्रभावित किए भेजे जा सकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> पूर्ण आंतरिक परावर्तन के कारण ऊर्जा का क्षय बहुत कम होता है और विद्युत-चुंबकीय हस्तक्षेप नहीं होता, जिससे सिग्नल की गुणवत्ता बनी रहती है और बैंडविड्थ बहुत अधिक होती है।"
    },
    {
        question: "प्रश्न 26. एक समकोणिक समद्विबाहु प्रिज्म प्रकाश किरण को कितने कोण पर मोड़ सकता है?",
        answers: shuffle([
            { text: "a) 45 डिग्री", correct: false },
            { text: "b) 90 डिग्री", correct: false },
            { text: "c) 180 डिग्री", correct: false },
            { text: "(b) और (c) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> (b) और (c) दोनों।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रिज्म के उपयोग के आधार पर, यह पूर्ण आंतरिक परावर्तन का उपयोग करके प्रकाश को 90 डिग्री (पेरिस्कोप में) या 180 डिग्री (द्विनेत्री में) पर मोड़ सकता है।"
    },
    {
        question: "प्रश्न 27. पूर्ण आंतरिक परावर्तन की घटना की खोज का श्रेय किसे दिया जा सकता है?",
        answers: shuffle([
            { text: "न्यूटन", correct: false },
            { text: "केपलर", correct: true },
            { text: "हाइगेंस", correct: false },
            { text: "स्नेल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केपलर।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि स्नेल ने अपवर्तन का नियम दिया, लेकिन जोहान्स केपलर ने पानी में हवा के बुलबुले के अवलोकन के माध्यम से पूर्ण आंतरिक परावर्तन की घटना की खोज और वर्णन किया था।"
    },
    {
        question: "प्रश्न 28. परखनली को पानी में तिरछा डुबोने पर उसका डूबा हुआ भाग चांदी जैसा चमकीला क्यों दिखाई देता है?",
        answers: shuffle([
            { text: "रासायनिक अभिक्रिया के कारण", correct: false },
            { text: "पूर्ण आंतरिक परावर्तन के कारण", correct: true },
            { text: "पृष्ठ तनाव के कारण", correct: false },
            { text: "प्रकाश के प्रकीर्णन के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पूर्ण आंतरिक परावर्तन के कारण।<br><br><i class='fa-solid fa-angles-right icon'></i> परखनली के अंदर की हवा पानी की तुलना में विरल माध्यम है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब प्रकाश पानी से हवा में जाने का प्रयास करता है तो पूर्ण आंतरिक परावर्तन होता है, जिससे सतह चमकदार दिखती है।"
    },
    {
        question: "प्रश्न 29. द्वितीयक इंद्रधनुष प्राथमिक इंद्रधनुष के ऊपर क्यों बनता है?",
        answers: shuffle([
            { text: "क्योंकि उसमें प्रकाश की गति तेज होती है।", correct: false },
            { text: "क्योंकि उसमें दो बार पूर्ण आंतरिक परावर्तन होता है।", correct: true },
            { text: "क्योंकि वह अधिक ऊंचाई पर बनता है।", correct: false },
            { text: "क्योंकि वह अधिक चमकीला होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्योंकि उसमें दो बार पूर्ण आंतरिक परावर्तन होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> पानी की बूंद के अंदर दो बार पूर्ण आंतरिक परावर्तन होने के कारण प्रकाश किरणें अधिक कोण पर बाहर निकलती हैं, जिससे द्वितीयक इंद्रधनुष आकाश में प्राथमिक से अधिक ऊंचाई पर दिखाई देता है।"
    },
    {
        question: "प्रश्न 30. पूर्ण आंतरिक परावर्तन एक...",
        answers: shuffle([
            { text: "परावर्तन की घटना है।", correct: false },
            { text: "अपवर्तन की घटना है।", correct: false },
            { text: "अपवर्तन की एक विशेष स्थिति से उत्पन्न परावर्तन है।", correct: true },
            { text: "विक्षेपण की घटना है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपवर्तन की एक विशेष स्थिति से उत्पन्न परावर्तन है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह घटना अपवर्तन के नियमों का ही एक परिणाम है जो तब घटित होती है जब अपवर्तन संभव नहीं हो पाता (जब sin(r)>1 की स्थिति बनती है)।"
    },
    {
        question: "प्रश्न 31. पूर्ण आंतरिक परावर्तन में परावर्तन के नियमों का क्या होता है?",
        answers: shuffle([
            { text: "नियमों का पालन नहीं होता है।", correct: false },
            { text: "केवल पहला नियम लागू होता है।", correct: false },
            { text: "केवल दूसरा नियम लागू होता है।", correct: false },
            { text: "परावर्तन के दोनों नियमों का पूरी तरह से पालन होता है।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परावर्तन के दोनों नियमों का पूरी तरह से पालन होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब पूर्ण आंतरिक परावर्तन होता है, तो प्रकाश पूरी तरह से परावर्तन के नियमों (आपतन कोण = परावर्तन कोण, आदि) का पालन करता है।"
    },
    {
        question: "प्रश्न 32. किस जानवर की आंखें पूर्ण आंतरिक परावर्तन के सिद्धांत का उपयोग करती हैं ताकि कम रोशनी में बेहतर देख सकें?",
        answers: shuffle([
            { text: "चमगादड़", correct: false },
            { text: "उल्लू", correct: false },
            { text: "बिल्ली", correct: true },
            { text: "मछली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिल्ली।<br><br><i class='fa-solid fa-angles-right icon'></i> बिल्ली और कई अन्य रात्रिचर जानवरों की आंखों में रेटिना के पीछे 'टेपेटम ल्यूसिडम' नामक एक परावर्तक परत होती है, जो प्रकाश को वापस रेटिना पर परावर्तित करती है, जिससे कम रोशनी में देखने की क्षमता बढ़ जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पूर्ण आंतरिक परावर्तन जैसा ही प्रभाव है।"
    },
    {
        question: "प्रश्न 33. यदि पानी और कांच के बीच क्रांतिक कोण 60 डिग्री है, तो प्रकाश किरण को पूर्ण आंतरिक परावर्तित होने के लिए पानी में (कांच के सापेक्ष) कितने कोण पर आपतित होना चाहिए?",
        answers: shuffle([
            { text: "60 डिग्री से कम", correct: false },
            { text: "60 डिग्री के बराबर", correct: false },
            { text: "60 डिग्री से अधिक", correct: false },
            { text: "यह संभव नहीं है क्योंकि पानी विरल माध्यम है।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह संभव नहीं है क्योंकि पानी विरल माध्यम है।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रश्न में प्रकाश किरण पानी में है और कांच की सतह पर पड़ रही है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि पानी कांच की तुलना में विरल माध्यम है, इसलिए पूर्ण आंतरिक परावर्तन संभव ही नहीं है।"
    },
    {
        question: "प्रश्न 34. \"स्नेल की खिड़की\" (Snell's Window) की घटना किससे संबंधित है?",
        answers: shuffle([
            { text: "पूर्ण आंतरिक परावर्तन और क्रांतिक कोण", correct: true },
            { text: "प्रकाश का विवर्तन", correct: false },
            { text: "प्रकाश का ध्रुवण", correct: false },
            { text: "प्रकाश का विक्षेपण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पूर्ण आंतरिक परावर्तन और क्रांतिक कोण।<br><br><i class='fa-solid fa-angles-right icon'></i> पानी के नीचे से देखने पर बाहरी दुनिया एक वृत्ताकार क्षेत्र में दिखाई देती है, जिसकी सीमा क्रांतिक कोण द्वारा निर्धारित होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस वृत्त के बाहर पूर्ण आंतरिक परावर्तन के कारण पानी की सतह का निचला भाग दिखाई देता है।"
    },
    {
        question: "प्रश्न 35. एक बीकर में रखे सिक्के का ऊपर उठा हुआ दिखाई देना अपवर्तन है, लेकिन यदि बीकर को एक निश्चित कोण से देखा जाए तो सिक्के का गायब हो जाना किससे संबंधित है?",
        answers: shuffle([
            { text: "प्रकीर्णन से", correct: false },
            { text: "पूर्ण आंतरिक परावर्तन से", correct: true },
            { text: "विवर्तन से", correct: false },
            { text: "व्यतिकरण से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पूर्ण आंतरिक परावर्तन से।<br><br><i class='fa-solid fa-angles-right icon'></i> जब देखने का कोण ऐसा हो जाता है कि सिक्के से आने वाली प्रकाश किरणें पानी-हवा की सतह पर क्रांतिक कोण से अधिक कोण पर पड़ती हैं, तो वे पूर्ण आंतरिक परावर्तित हो जाती हैं और प्रेक्षक तक नहीं पहुंच पातीं, जिससे सिक्का अदृश्य हो जाता है।"
    },
    {
        question: "प्रश्न 36. कौन सा उपकरण पूर्ण आंतरिक परावर्तन का उपयोग नहीं करता है?",
        answers: shuffle([
            { text: "पेरिस्कोप (प्रिज्म वाला)", correct: false },
            { text: "प्रकाशिक तंतु", correct: false },
            { text: "द्विनेत्री (बिनोक्युलर्स)", correct: false },
            { text: "सरल सूक्ष्मदर्शी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सरल सूक्ष्मदर्शी।<br><br><i class='fa-solid fa-angles-right icon'></i> सरल सूक्ष्मदर्शी (आवर्धक लेंस) प्रकाश के अपवर्तन के सिद्धांत पर काम करता है, न कि पूर्ण आंतरिक परावर्तन पर।"
    },
    {
        question: "प्रश्न 37. गोताखोरों को पानी के अंदर पानी की सतह कभी-कभी चांदी जैसी चमकदार क्यों दिखती है?",
        answers: shuffle([
            { text: "पानी में चांदी के कणों के कारण", correct: false },
            { text: "सूर्य के प्रकाश के सीधे परावर्तन के कारण", correct: false },
            { text: "पूर्ण आंतरिक परावर्तन के कारण", correct: true },
            { text: "पानी के नीले रंग के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पूर्ण आंतरिक परावर्तन के कारण।<br><br><i class='fa-solid fa-angles-right icon'></i> जब गोताखोर ऊपर की ओर एक निश्चित कोण (क्रांतिक कोण से अधिक) पर देखता है, तो ऊपर से आने वाला प्रकाश पूर्ण आंतरिक परावर्तित होकर उसकी आंखों तक पहुंचता है, जिससे सतह दर्पण की तरह चमकदार दिखती है।"
    },
    {
        question: "प्रश्न 38. प्रकाशिक तंतु में, क्लैडिंग का मुख्य उद्देश्य क्या है?",
        answers: shuffle([
            { text: "तंतु को मजबूती प्रदान करना।", correct: false },
            { text: "एक ऐसी सीमा बनाना जिसका अपवर्तनांक कोर से कम हो ताकि पूर्ण आंतरिक परावर्तन हो सके।", correct: true },
            { text: "प्रकाश को अवशोषित करना।", correct: false },
            { text: "तंतु को रंगीन बनाना।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक ऐसी सीमा बनाना जिसका अपवर्तनांक कोर से कम हो ताकि पूर्ण आंतरिक परावर्तन हो सके।<br><br><i class='fa-solid fa-angles-right icon'></i> क्लैडिंग के बिना, कोर से प्रकाश बाहर निकल जाएगा क्योंकि हवा भी विरल माध्यम है, लेकिन क्लैडिंग एक नियंत्रित और संरक्षित विरल माध्यम प्रदान करती है।"
    },
    {
        question: "प्रश्न 39. प्रकाशिक घनत्व का संबंध किससे है?",
        answers: shuffle([
            { text: "माध्यम के द्रव्यमान से", correct: false },
            { text: "माध्यम में प्रकाश की गति से", correct: true },
            { text: "माध्यम के तापमान से", correct: false },
            { text: "माध्यम के दाब से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माध्यम में प्रकाश की गति से।<br><br><i class='fa-solid fa-angles-right icon'></i> जिस माध्यम में प्रकाश की गति जितनी कम होती है, वह प्रकाशिक रूप से उतना ही अधिक सघन माना जाता है।"
    },
    {
        question: "प्रश्न 40. पूर्ण आंतरिक परावर्तन के दौरान आपतित किरण और परावर्तित किरण के बीच का कोण कितना होता है?",
        answers: shuffle([
            { text: "आपतन कोण के बराबर", correct: false },
            { text: "आपतन कोण का दोगुना", correct: true },
            { text: "90 डिग्री", correct: false },
            { text: "180 डिग्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आपतन कोण का दोगुना।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि आपतन कोण (i) और परावर्तन कोण (r) बराबर होते हैं, तो दोनों किरणों के बीच का कुल कोण i + r = i + i = 2i होगा।"
    },
    {
        question: "प्रश्न 41. यदि क्रांतिक कोण C है, तो माध्यम का अपवर्तनांक (n) क्या होगा?",
        answers: shuffle([
            { text: "n = sin(C)", correct: false },
            { text: "n = cos(C)", correct: false },
            { text: "n = 1 / sin(C)", correct: true },
            { text: "n = tan(C)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> n = 1 / sin(C)।<br><br><i class='fa-solid fa-angles-right icon'></i> यह क्रांतिक कोण और अपवर्तनांक के बीच का मानक गणितीय संबंध है।"
    },
    {
        question: "प्रश्न 42. हीरे को इस तरह से क्यों काटा जाता है कि उसमें कई फलक (facets) हों?",
        answers: shuffle([
            { text: "वजन कम करने के लिए", correct: false },
            { text: "उसे और कठोर बनाने के लिए", correct: false },
            { text: "ताकि प्रकाश कई बार पूर्ण आंतरिक परावर्तन से गुजरे और चमक बढ़े", correct: true },
            { text: "यह केवल एक पारंपरिक डिज़ाइन है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ताकि प्रकाश कई बार पूर्ण आंतरिक परावर्तन से गुजरे और चमक बढ़े।<br><br><i class='fa-solid fa-angles-right icon'></i> कुशल कारीगर हीरे को इस तरह तराशते हैं कि प्रकाश एक बार प्रवेश करने पर आसानी से बाहर न निकल पाए और अंदर कई बार पूर्ण आंतरिक परावर्तित हो।"
    },
    {
        question: "प्रश्न 43. एक चमकदार वस्तु और एक दीप्त वस्तु में क्या अंतर है?",
        answers: shuffle([
            { text: "कोई अंतर नहीं है।", correct: false },
            { text: "दीप्त वस्तु स्वयं प्रकाश उत्पन्न करती है, जबकि चमकदार वस्तु दूसरों के प्रकाश को परावर्तित करती है।", correct: true },
            { text: "चमजेदार वस्तुएं हमेशा गर्म होती हैं।", correct: false },
            { text: "दीप्त वस्तुएं हमेशा ठंडी होती हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीप्त वस्तु स्वयं प्रकाश उत्पन्न करती है, जबकि चमकदार वस्तु दूसरों के प्रकाश को परावर्तित करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> पूर्ण आंतरिक परावर्तन के कारण चमकने वाली वस्तुएं (जैसे हीरा) चमकदार होती हैं, दीप्त नहीं, क्योंकि वे सूर्य या बल्ब के प्रकाश को परावर्तित कर रही होती हैं।"
    },
    {
        question: "प्रश्न 44. क्या पूर्ण आंतरिक परावर्तन ध्वनि तरंगों के साथ भी संभव है?",
        answers: shuffle([
            { text: "नहीं, यह केवल प्रकाश के लिए है।", correct: false },
            { text: "हाँ, यदि ध्वनि सघन माध्यम से विरल माध्यम में जाए।", correct: true },
            { text: "केवल पानी के नीचे।", correct: false },
            { text: "केवल निर्वात में।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाँ, यदि ध्वनि सघन माध्यम से विरल माध्यम में जाए।<br><br><i class='fa-solid fa-angles-right icon'></i> पूर्ण आंतरिक परावर्तन एक सामान्य तरंग घटना है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ध्वनि तरंगों के साथ भी हो सकता है, जैसे कि जब ध्वनि पानी से हवा में जाने की कोशिश करती है।"
    },
    {
        question: "प्रश्न 45. प्रकाशिक तंतु में संकेतों का क्षीणन (attenuation) क्यों बहुत कम होता है?",
        answers: shuffle([
            { text: "क्योंकि तंतु बहुत पतले होते हैं।", correct: false },
            { text: "क्योंकि पूर्ण आंतरिक परावर्तन में ऊर्जा हानि लगभग शून्य होती है।", correct: true },
            { text: "क्योंकि उनमें विद्युत धारा प्रवाहित होती है।", correct: false },
            { text: "क्योंकि वे निर्वात में रखे जाते हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्योंकि पूर्ण आंतरिक परावर्तन में ऊर्जा हानि लगभग शून्य होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> तांबे के तारों के विपरीत, जहाँ प्रतिरोध के कारण ऊर्जा ऊष्मा के रूप में नष्ट हो जाती है, यहाँ परावर्तन लगभग 100% कुशल होता है।"
    },
    {
        question: "प्रश्न 46. कौन सा प्रिज्म विशेष रूप से पूर्ण आंतरिक परावर्तन के लिए डिज़ाइन किया गया है?",
        answers: shuffle([
            { text: "विक्षेपण प्रिज्म", correct: false },
            { text: "पोरो प्रिज्म", correct: true },
            { text: "निकोल प्रिज्म", correct: false },
            { text: "क्राउन ग्लास प्रिज्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पोरो प्रिज्म।<br><br><i class='fa-solid fa-angles-right icon'></i> पोरो प्रिज्म एक समकोणिक प्रिज्म है जिसका उपयोग द्विनेत्री और एसएलआर कैमरों में छवि को पलटने या सीधा करने के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 47. यदि कोई प्रकाश किरण किसी माध्यम में बिना मुड़े सीधी निकल जाती है, तो आपतन कोण कितना है?",
        answers: shuffle([
            { text: "90 डिग्री", correct: false },
            { text: "45 डिग्री", correct: false },
            { text: "क्रांतिक कोण के बराबर", correct: false },
            { text: "0 डिग्री", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 0 डिग्री।<br><br><i class='fa-solid fa-angles-right icon'></i> जब किरण सतह पर लंबवत पड़ती है (आपतन कोण = 0), तो वह बिना किसी विचलन के सीधी गुजर जाती है, और इस स्थिति में पूर्ण आंतरिक परावर्तन नहीं होता है।"
    },
    {
        question: "प्रश्न 48. पानी से भरे बीकर में एक खाली, बंद परखनली उलटी रखने पर वह चांदी की तरह क्यों चमकती है?",
        answers: shuffle([
            { text: "परखनली में चांदी की परत के कारण", correct: false },
            { text: "पानी और कांच के बीच रासायनिक प्रतिक्रिया के कारण", correct: false },
            { text: "पानी-हवा अंतराफलक पर प्रकाश के पूर्ण आंतरिक परावर्तन के कारण", correct: true },
            { text: "प्रकाश के विवर्तन के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पानी-हवा अंतराफलक पर प्रकाश के पूर्ण आंतरिक परावर्तन के कारण।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रकाश सघन माध्यम (पानी/कांच) से विरल माध्यम (परखनली के अंदर की हवा) में जाने की कोशिश करता है और पूर्ण आंतरिक परावर्तित हो जाता है।"
    },
    {
        question: "प्रश्न 49. पूर्ण आंतरिक परावर्तन का उपयोग साइकिल के पश्च-परावर्तकों (rear reflectors) में कैसे होता है?",
        answers: shuffle([
            { text: "वे प्रकाश को अवशोषित करते हैं।", correct: false },
            { text: "वे छोटे प्रिज्मों का उपयोग करके प्रकाश को सीधे स्रोत की ओर वापस भेजते हैं।", correct: true },
            { text: "वे बैटरी से चमकते हैं।", correct: false },
            { text: "वे प्रकाश का विक्षेपण करते हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वे छोटे प्रिज्मों का उपयोग करके प्रकाश को सीधे स्रोत की ओर वापस भेजते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> पश्च-परावर्तक कई छोटे-छोटे कोने वाले प्रिज्मों से बने होते हैं जो पूर्ण आंतरिक परावर्तन का उपयोग करके आपतित प्रकाश (जैसे कार की हेडलाइट से) को ठीक उसी दिशा में लौटा देते हैं जहाँ से वह आया था।"
    },
    {
        question: "प्रश्न 50. माध्यम का अपवर्तनांक प्रकाश के तरंगदैर्ध्य पर कैसे निर्भर करता है?",
        answers: shuffle([
            { text: "कोई निर्भरता नहीं होती।", correct: false },
            { text: "तरंगदैर्ध्य बढ़ने पर अपवर्तनांक बढ़ता है।", correct: false },
            { text: "तरंगदैर्ध्य बढ़ने पर अपवर्तनांक घटता है।", correct: true },
            { text: "यह एक रैखिक संबंध है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तरंगदैर्ध्य बढ़ने पर अपवर्तनांक घटता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह विक्षेपण का कारण है।<br><br><i class='fa-solid fa-angles-right icon'></i> लाल प्रकाश (अधिक तरंगदैर्ध्य) के लिए अपवर्तनांक कम और बैंगनी प्रकाश (कम तरंगदैर्ध्य) के लिए अधिक होता है।"
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