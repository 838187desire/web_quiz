const questions = [
    {
        topHeading: "कार्य पर आधारित 50 MCQs,part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. भौतिकी में 'कार्य' की परिभाषा के अनुसार, कार्य कब किया हुआ माना जाता है?",
        answers: shuffle([
            { text: "जब ऊर्जा का उपयोग होता है।", correct: false },
            { text: "जब कोई वस्तु विस्थापित होती है।", correct: false },
            { text: "जब किसी वस्तु पर बल लगाया जाता है।", correct: false },
            { text: "जब कोई बल किसी वस्तु को विस्थापित करता है।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्य होने के लिए बल का लगना और उस बल की दिशा में विस्थापन होना, दोनों आवश्यक हैं।"
    },
    {
        question: "प्रश्न 2. कार्य किस प्रकार की राशि है?",
        answers: shuffle([
            { text: "सदिश", correct: false },
            { text: "अदिश", correct: true },
            { text: "प्रदेश (टेंसर)", correct: false },
            { text: "न सदिश और न अदिश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्य, बल और विस्थापन का अदिश गुणनफल है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें केवल परिमाण होता है, दिशा नहीं।"
    },
    {
        question: "प्रश्न 3. कार्य का एस.आई. (SI) मात्रक क्या है?",
        answers: shuffle([
            { text: "वॉट", correct: false },
            { text: "न्यूटन", correct: false },
            { text: "पास्कल", correct: false },
            { text: "जूल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंतर्राष्ट्रीय मात्रक प्रणाली में कार्य और ऊर्जा का मात्रक जूल (J) है।<br><br><i class='fa-solid fa-angles-right icon'></i> 1 जूल = 1 न्यूटन-मीटर।"
    },
    {
        question: "प्रश्न 4. निम्नलिखित में से किस स्थिति में कोई कार्य नहीं किया जाता है?",
        answers: shuffle([
            { text: "एक लड़का एक किताब पढ़ रहा है।", correct: true },
            { text: "एक पवनचक्की कुएँ से पानी उठा रही है।", correct: false },
            { text: "एक इंजन ट्रेन को खींच रहा है।", correct: false },
            { text: "एक व्यक्ति किसी वस्तु को धकेल रहा है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किताब पढ़ने में मानसिक श्रम होता है, लेकिन भौतिकी के अनुसार कोई विस्थापन नहीं होता, इसलिए किया गया कार्य शून्य है।"
    },
    {
        question: "प्रश्न 5. धनात्मक कार्य (Positive Work) कब होता है?",
        answers: shuffle([
            { text: "जब बल और विस्थापन एक दूसरे के लंबवत हों।", correct: false },
            { text: "जब बल और विस्थापन एक ही दिशा में हों।", correct: true },
            { text: "जब बल और विस्थापन विपरीत दिशाओं में हों।", correct: false },
            { text: "जब कोई विस्थापन न हो।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब बल और विस्थापन के बीच का कोण 90 डिग्री से कम होता है, तो किया गया कार्य धनात्मक होता है।"
    },
    {
        question: "प्रश्न 6. ऋणात्मक कार्य (Negative Work) कब होता है?",
        answers: shuffle([
            { text: "जब बल और विस्थापन एक दूसरे के लंबवत हों।", correct: false },
            { text: "जब बल और विस्थापन एक ही दिशा में हों।", correct: false },
            { text: "जब बल और विस्थापन विपरीत दिशाओं में हों।", correct: true },
            { text: "जब बल शून्य हो।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब बल और विस्थापन के बीच का कोण 90 डिग्री से अधिक (और 180 डिग्री तक) होता है, तो किया गया कार्य ऋणात्मक होता है।"
    },
    {
        question: "प्रश्न 7. यदि बल और विस्थापन एक दूसरे के लंबवत हों, तो किया गया कार्य होगा:",
        answers: shuffle([
            { text: "धनात्मक", correct: false },
            { text: "ऋणात्मक", correct: false },
            { text: "शून्य", correct: true },
            { text: "अनंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्य = बल × विस्थापन × cos(θ)।<br><br><i class='fa-solid fa-angles-right icon'></i> जब बल और विस्थापन लंबवत होते हैं, तो θ = 90° और cos(90°) = 0 होता है, इसलिए कार्य शून्य होता है।"
    },
    {
        question: "प्रश्न 8. एक कुली अपने सिर पर बोझ रखकर क्षैतिज प्लेटफॉर्म पर चल रहा है। गुरुत्वाकर्षण बल के विरुद्ध उसके द्वारा किया गया कार्य कितना है?",
        answers: shuffle([
            { text: "अधिकतम", correct: false },
            { text: "न्यूनतम", correct: false },
            { text: "शून्य", correct: true },
            { text: "ऋणात्मक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुत्वाकर्षण बल नीचे की ओर लगता है और विस्थापन क्षैतिज दिशा में है।<br><br><i class='fa-solid fa-angles-right icon'></i> दोनों के बीच का कोण 90 डिग्री है, इसलिए किया गया कार्य शून्य है।"
    },
    {
        question: "प्रश्न 9. घर्षण बल द्वारा किया गया कार्य हमेशा होता है:",
        answers: shuffle([
            { text: "धनात्मक", correct: false },
            { text: "ऋणात्मक", correct: true },
            { text: "शून्य", correct: false },
            { text: "हमेशा एक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण बल हमेशा गति की दिशा के विपरीत कार्य करता है, इसलिए इसके द्वारा किया गया कार्य ऋणात्मक होता है।"
    },
    {
        question: "प्रश्न 10. कार्य का विमीय सूत्र क्या है?",
        answers: shuffle([
            { text: "[MLT⁻²]", correct: false },
            { text: "[ML²T⁻²]", correct: true },
            { text: "[ML²T⁻¹]", correct: false },
            { text: "[MLT⁻¹]", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्य = बल × दूरी = [MLT⁻²] × [L] = [ML²T⁻²]।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ऊर्जा की विमा के समान है।"
    },
    {
        question: "प्रश्न 11. एक व्यक्ति एक दीवार को धकेलता है लेकिन उसे विस्थापित करने में विफल रहता है। उसके द्वारा किया गया कार्य है:",
        answers: shuffle([
            { text: "धनात्मक", correct: false },
            { text: "ऋणात्मक", correct: false },
            { text: "शून्य", correct: true },
            { text: "अधिकतम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि व्यक्ति बल लगा रहा है, लेकिन दीवार में कोई विस्थापन नहीं हो रहा है (d=0), इसलिए भौतिकी के अनुसार किया गया कार्य शून्य है।"
    },
    {
        question: "प्रश्न 12. वृत्तीय गति में अभिकेंद्रीय बल द्वारा किया गया कार्य होता है:",
        answers: shuffle([
            { text: "धनात्मक", correct: false },
            { text: "ऋणात्मक", correct: false },
            { text: "शून्य", correct: true },
            { text: "अनंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अभिकेंद्रीय बल हमेशा केंद्र की ओर (त्रिज्या के अनुदिश) होता है और विस्थापन हमेशा स्पर्शरेखा के अनुदिश होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> दोनों के बीच का कोण 90 डिग्री होने के कारण कार्य शून्य होता है।"
    },
    {
        question: "प्रश्न 13. कार्य-ऊर्जा प्रमेय (Work-Energy Theorem) के अनुसार, किसी वस्तु पर किया गया कुल कार्य किसके बराबर होता है?",
        answers: shuffle([
            { text: "उसकी गतिज ऊर्जा में परिवर्तन के", correct: true },
            { text: "उसकी स्थितिज ऊर्जा में परिवर्तन के", correct: false },
            { text: "उसके संवेग में परिवर्तन के", correct: false },
            { text: "उसके आवेग के", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह प्रमेय बताता है कि किसी वस्तु पर सभी बलों द्वारा किया गया शुद्ध कार्य उसकी गतिज ऊर्जा में हुए परिवर्तन के बराबर होता है।"
    },
    {
        question: "प्रश्न 14. कार्य की CGS इकाई क्या है?",
        answers: shuffle([
            { text: "जूल", correct: false },
            { text: "डाइन", correct: false },
            { text: "अर्ग", correct: true },
            { text: "वॉट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्य की CGS (सेंटीमीटर-ग्राम-सेकंड) प्रणाली में इकाई अर्ग है।<br><br><i class='fa-solid fa-angles-right icon'></i> 1 जूल = 10⁷ अर्ग।"
    },
    {
        question: "प्रश्न 15. जब एक गेंद को ऊपर की ओर फेंका जाता है, तो गुरुत्वाकर्षण बल द्वारा किया गया कार्य होता है:",
        answers: shuffle([
            { text: "धनात्मक", correct: false },
            { text: "ऋणात्मक", correct: true },
            { text: "शून्य", correct: false },
            { text: "पहले धनात्मक फिर ऋणात्मक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गेंद का विस्थापन ऊपर की ओर होता है जबकि गुरुत्वाकर्षण बल नीचे की ओर कार्य करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> दोनों के बीच 180 डिग्री का कोण होने के कारण कार्य ऋणात्मक होता है।"
    },
    {
        question: "प्रश्न 16. जब कोई वस्तु मुक्त रूप से नीचे गिरती है, तो गुरुत्वाकर्षण बल द्वारा किया गया कार्य होता है:",
        answers: shuffle([
            { text: "धनात्मक", correct: true },
            { text: "ऋणात्मक", correct: false },
            { text: "शून्य", correct: false },
            { text: "पहले ऋणात्मक फिर धनात्मक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वस्तु का विस्थापन और गुरुत्वाकर्षण बल दोनों नीचे की ओर होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> दोनों के बीच का कोण 0 डिग्री होने के कारण कार्य धनात्मक होता है।"
    },
    {
        question: "प्रश्न 17. संरक्षी बल (Conservative Force) द्वारा किया गया कार्य किस पर निर्भर करता है?",
        answers: shuffle([
            { text: "केवल वस्तु के पथ पर", correct: false },
            { text: "केवल वस्तु के प्रारंभिक और अंतिम बिंदुओं पर", correct: true },
            { text: "वस्तु के वेग पर", correct: false },
            { text: "लिए गए समय पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संरक्षी बल (जैसे गुरुत्वाकर्षण बल) द्वारा किया गया कार्य पथ से स्वतंत्र होता है।"
    },
    {
        question: "प्रश्न 18. निम्नलिखित में से कौन सा एक संरक्षी बल नहीं है?",
        answers: shuffle([
            { text: "गुरुत्वाकर्षण बल", correct: false },
            { text: "स्थिरविद्युत बल", correct: false },
            { text: "घर्षण बल", correct: true },
            { text: "स्प्रिंग बल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण बल द्वारा किया गया कार्य तय किए गए पथ की लंबाई पर निर्भर करता है, इसलिए यह एक असंरक्षी बल है।"
    },
    {
        question: "प्रश्न 19. एक बंद पथ में एक संरक्षी बल द्वारा किया गया कुल कार्य कितना होता है?",
        answers: shuffle([
            { text: "धनात्मक", correct: false },
            { text: "ऋणात्मक", correct: false },
            { text: "शून्य", correct: true },
            { text: "यह पथ की लंबाई पर निर्भर करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि प्रारंभिक और अंतिम बिंदु समान होते हैं, एक बंद लूप में संरक्षी बल द्वारा किया गया कुल कार्य हमेशा शून्य होता है।"
    },
    {
        question: "प्रश्न 20. बल-विस्थापन ग्राफ के अंतर्गत आने वाला क्षेत्रफल क्या दर्शाता है?",
        answers: shuffle([
            { text: "शक्ति", correct: false },
            { text: "ऊर्जा", correct: false },
            { text: "किया गया कार्य", correct: true },
            { text: "संवेग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बल और विस्थापन का गुणनफल कार्य होता है, इसलिए इस ग्राफ के नीचे का क्षेत्रफल किए गए कार्य को निरूपित करता है।"
    },
    {
        question: "प्रश्न 21. कार्य करने की दर को क्या कहते हैं?",
        answers: shuffle([
            { text: "ऊर्जा", correct: false },
            { text: "शक्ति", correct: true },
            { text: "बल", correct: false },
            { text: "आवेग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक्ति (Power) को प्रति इकाई समय में किए गए कार्य के रूप में परिभाषित किया जाता है।"
    },
    {
        question: "प्रश्न 22. यदि किसी वस्तु की गतिज ऊर्जा बढ़ती है, तो उस पर किया गया कुल कार्य होगा:",
        answers: shuffle([
            { text: "धनात्मक", correct: true },
            { text: "ऋणात्मक", correct: false },
            { text: "शून्य", correct: false },
            { text: "जानकारी अपर्याप्त है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्य-ऊर्जा प्रमेय के अनुसार, धनात्मक कुल कार्य गतिज ऊर्जा में वृद्धि करता है।"
    },
    {
        question: "प्रश्न 23. एक स्प्रिंग को खींचने में किया गया कार्य स्प्रिंग में किस रूप में संग्रहीत होता है?",
        answers: shuffle([
            { text: "गतिज ऊर्जा", correct: false },
            { text: "ऊष्मीय ऊर्जा", correct: false },
            { text: "प्रत्यास्थ स्थितिज ऊर्जा", correct: true },
            { text: "रासायनिक ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्प्रिंग को खींचने या दबाने में किया गया कार्य उसकी प्रत्यास्थ स्थितिज ऊर्जा के रूप में संचित हो जाता है।"
    },
    {
        question: "प्रश्न 24. कार्य होने के लिए आवश्यक शर्त क्या है?",
        answers: shuffle([
            { text: "बल और विस्थापन दोनों का होना।", correct: true },
            { text: "केवल बल का होना।", correct: false },
            { text: "केवल विस्थापन का होना।", correct: false },
            { text: "वस्तु का गर्म होना।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि बल या विस्थापन में से कोई भी शून्य है, तो कोई कार्य नहीं होगा।"
    },
    {
        question: "प्रश्न 25. एक घोड़ा एक गाड़ी को खींच रहा है। घोड़े द्वारा गाड़ी पर किया गया कार्य है:",
        answers: shuffle([
            { text: "धनात्मक", correct: true },
            { text: "ऋणात्मक", correct: false },
            { text: "शून्य", correct: false },
            { text: "निर्धारित नहीं किया जा सकता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घोड़ा गाड़ी पर आगे की दिशा में बल लगाता है और गाड़ी का विस्थापन भी आगे की दिशा में होता है, इसलिए कार्य धनात्मक है।"
    },
    {
        question: "प्रश्न 26. 1 जूल कार्य लगभग कितने अर्ग के बराबर होता है?",
        answers: shuffle([
            { text: "10³ अर्ग", correct: false },
            { text: "10⁵ अर्ग", correct: false },
            { text: "10⁷ अर्ग", correct: true },
            { text: "10⁹ अर्ग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह जूल (SI इकाई) और अर्ग (CGS इकाई) के बीच का मानक रूपांतरण है।"
    },
    {
        question: "प्रश्न 27. असंरक्षी बल (Non-conservative force) द्वारा किया गया कार्य किस पर निर्भर करता है?",
        answers: shuffle([
            { text: "केवल प्रारंभिक और अंतिम स्थिति पर।", correct: false },
            { text: "तय किए गए पथ पर।", correct: true },
            { text: "केवल वस्तु के द्रव्यमान पर।", correct: false },
            { text: "केवल वस्तु के वेग पर।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण या वायु प्रतिरोध जैसे बलों द्वारा किया गया कार्य इस बात पर निर्भर करता है कि वस्तु ने कितनी लंबी दूरी तय की है।"
    },
    {
        question: "प्रश्न 28. यदि किसी वस्तु को उठाने में गुरुत्वाकर्षण के विरुद्ध कार्य किया जाता है, तो वस्तु की कौन सी ऊर्जा बढ़ती है?",
        answers: shuffle([
            { text: "गतिज ऊर्जा", correct: false },
            { text: "स्थितिज ऊर्जा", correct: true },
            { text: "ऊष्मीय ऊर्जा", correct: false },
            { text: "कोई ऊर्जा नहीं बढ़ती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुत्वाकर्षण जैसे संरक्षी बल के विरुद्ध किया गया कार्य वस्तु की स्थितिज ऊर्जा के रूप में संग्रहीत हो जाता है।"
    },
    {
        question: "प्रश्न 29. ब्रेक लगाने पर, कार के ब्रेक द्वारा टायरों पर किया गया कार्य होता है:",
        answers: shuffle([
            { text: "धनात्मक", correct: false },
            { text: "ऋणात्मक", correct: true },
            { text: "शून्य", correct: false },
            { text: "अनंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्रेक का बल गति की दिशा के विपरीत होता है, इसलिए किया गया कार्य ऋणात्मक होता है, जो कार की गतिज ऊर्जा को कम करता है।"
    },
    {
        question: "प्रश्न 30. कार्य, बल और विस्थापन के बीच का संबंध है:",
        answers: shuffle([
            { text: "कार्य = बल / विस्थापन", correct: false },
            { text: "कार्य = बल × विस्थापन", correct: true },
            { text: "कार्य = विस्थापन / बल", correct: false },
            { text: "कार्य = बल + विस्थापन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह कार्य की सबसे सरल परिभाषा है जब बल और विस्थापन एक ही दिशा में हों।"
    },
    {
        question: "प्रश्न 31. यदि कोई व्यक्ति एक सूटकेस उठाकर खड़ा है, तो उसके द्वारा किया गया कार्य है:",
        answers: shuffle([
            { text: "धनात्मक", correct: false },
            { text: "ऋणात्मक", correct: false },
            { text: "शून्य", correct: true },
            { text: "सूटकेस के भार के बराबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि वह बल लगा रहा है, लेकिन सूटकेस में कोई विस्थापन नहीं हो रहा है, इसलिए किया गया कार्य शून्य है।"
    },
    {
        question: "प्रश्न 32. एक मशीन द्वारा किया गया कार्य हमेशा ________ होता है।",
        answers: shuffle([
            { text: "इनपुट ऊर्जा से अधिक", correct: false },
            { text: "इनपुट ऊर्जा से कम", correct: true },
            { text: "इनपुट ऊर्जा के बराबर", correct: false },
            { text: "शून्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण आदि के कारण ऊर्जा की कुछ हानि हमेशा होती है, इसलिए किसी भी वास्तविक मशीन की दक्षता 100% नहीं हो सकती।"
    },
    {
        question: "प्रश्न 33. कार्य की अवधारणा किसने प्रस्तुत की?",
        answers: shuffle([
            { text: "न्यूटन", correct: false },
            { text: "आइंस्टीन", correct: false },
            { text: "गैलीलियो", correct: false },
            { text: "गैस्पार्ड-गुस्ताव कोरिओलिस", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फ्रांसीसी गणितज्ञ कोरिओलिस ने 1820 के दशक में \"कार्य\" शब्द को उसकी वर्तमान वैज्ञानिक परिभाषा दी।"
    },
    {
        question: "प्रश्न 34. कार्य का मान बल और विस्थापन के बीच के कोण पर कैसे निर्भर करता है?",
        answers: shuffle([
            { text: "कोण बढ़ने पर कार्य बढ़ता है।", correct: false },
            { text: "कोण बढ़ने पर कार्य घटता है (0° से 90° तक)।", correct: true },
            { text: "कार्य कोण पर निर्भर नहीं करता है।", correct: false },
            { text: "कोण 45° पर कार्य अधिकतम होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> W = Fdcos(θ) सूत्र के अनुसार, cos(θ) का मान 0° से 90° तक घटता है, इसलिए कार्य भी घटता है।"
    },
    {
        question: "प्रश्न 35. जब एक निकाय पर किया गया कार्य धनात्मक होता है, तो उसकी ________ बढ़ती है।",
        answers: shuffle([
            { text: "स्थितिज ऊर्जा", correct: false },
            { text: "गतिज ऊर्जा", correct: true },
            { text: "कुल ऊर्जा", correct: false },
            { text: "जड़त्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्य-ऊर्जा प्रमेय के अनुसार, धनात्मक कुल कार्य का अर्थ है गतिज ऊर्जा में वृद्धि।"
    },
    {
        question: "प्रश्न 36. श्यान बल (Viscous force) द्वारा किया गया कार्य होता है:",
        answers: shuffle([
            { text: "हमेशा धनात्मक", correct: false },
            { text: "हमेशा ऋणात्मक", correct: true },
            { text: "हमेशा शून्य", correct: false },
            { text: "कभी धनात्मक कभी ऋणात्मक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्यान बल, घर्षण बल की तरह, हमेशा तरल पदार्थ में वस्तु की गति का विरोध करता है, इसलिए इसके द्वारा किया गया कार्य ऋणात्मक होता है।"
    },
    {
        question: "प्रश्न 37. एक आदर्श घर्षण रहित सतह पर एक वस्तु को धकेलने में किया गया कार्य उसे क्या प्रदान करता है?",
        answers: shuffle([
            { text: "स्थितिज ऊर्जा", correct: false },
            { text: "गतिज ऊर्जा", correct: true },
            { text: "ऊष्मा", correct: false },
            { text: "कोई ऊर्जा नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण की अनुपस्थिति में, किया गया सारा कार्य वस्तु की गतिज ऊर्जा में वृद्धि करता है।"
    },
    {
        question: "प्रश्न 38. यदि बल और विस्थापन सदिश रूप में दिए गए हैं, तो कार्य उनका ________ है।",
        answers: shuffle([
            { text: "सदिश गुणनफल (Cross product)", correct: false },
            { text: "अदिश गुणनफल (Dot product)", correct: true },
            { text: "सदिश योग", correct: false },
            { text: "अदिश योग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्य की गणितीय परिभाषा दो सदिशों (बल और विस्थापन) के अदिश गुणनफल के रूप में है, जिसका परिणाम एक अदिश राशि होती है।"
    },
    {
        question: "प्रश्न 39. किसी वस्तु को एक वृत्ताकार पथ पर एक चक्कर पूरा करने में अभिकेंद्रीय बल द्वारा किया गया कार्य है:",
        answers: shuffle([
            { text: "धनात्मक", correct: false },
            { text: "ऋणात्मक", correct: false },
            { text: "शून्य", correct: true },
            { text: "परिधि के बराबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक पूर्ण चक्कर के बाद, कुल विस्थापन शून्य होता है, इसलिए किया गया कार्य भी शून्य है।"
    },
    {
        question: "प्रश्न 40. एक संरक्षी क्षेत्र में, किसी वस्तु को एक बिंदु से दूसरे बिंदु तक ले जाने में किया गया कार्य:",
        answers: shuffle([
            { text: "केवल तय किए गए पथ पर निर्भर करता है।", correct: false },
            { text: "हमेशा शून्य होता है।", correct: false },
            { text: "पथ से स्वतंत्र होता है।", correct: true },
            { text: "हमेशा ऋणात्मक होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह संरक्षी बल और क्षेत्र की परिभाषा है।"
    },
    {
        question: "प्रश्न 41. निम्नलिखित में से कौन सी ऊर्जा की इकाई नहीं है?",
        answers: shuffle([
            { text: "जूल", correct: false },
            { text: "अर्ग", correct: false },
            { text: "कैलोरी", correct: false },
            { text: "वॉट", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वॉट शक्ति (कार्य करने की दर) की इकाई है, कार्य या ऊर्जा की नहीं।"
    },
    {
        question: "प्रश्न 42. यदि किसी वस्तु की गति दोगुनी कर दी जाए, तो उसकी गतिज ऊर्जा:",
        answers: shuffle([
            { text: "दोगुनी हो जाती है।", correct: false },
            { text: "आधी हो जाती है।", correct: false },
            { text: "चार गुनी हो जाती है।", correct: true },
            { text: "अपरिवर्तित रहती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गतिज ऊर्जा वेग के वर्ग (v²) के समानुपाती होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> वेग को दोगुना करने पर ऊर्जा 2² = 4 गुनी हो जाएगी।"
    },
    {
        question: "प्रश्न 43. एक झुके हुए तल पर एक बक्से को ऊपर की ओर धकेलने में, गुरुत्वाकर्षण के विरुद्ध किया गया कार्य किस पर निर्भर करता है?",
        answers: shuffle([
            { text: "तय की गई क्षैतिज दूरी पर।", correct: false },
            { text: "तय की गई ऊर्ध्वाधर ऊँचाई पर।", correct: true },
            { text: "तल की लंबाई पर।", correct: false },
            { text: "तल के कोण पर।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुत्वाकर्षण एक संरक्षी बल है, इसलिए इसके विरुद्ध किया गया कार्य केवल ऊर्ध्वाधर विस्थापन (ऊँचाई) पर निर्भर करता है, पथ पर नहीं।"
    },
    {
        question: "प्रश्न 44. एक ही ऊँचाई तक एक भारी और एक हल्के बक्से को उठाने में, किसमें अधिक कार्य करना होगा?",
        answers: shuffle([
            { text: "हल्के बक्से में", correct: false },
            { text: "भारी बक्से में", correct: true },
            { text: "दोनों में समान कार्य", correct: false },
            { text: "यह लिए गए समय पर निर्भर करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्य = बल × दूरी।<br><br><i class='fa-solid fa-angles-right icon'></i> भारी बक्से को उठाने के लिए अधिक बल (उसके भार के बराबर) की आवश्यकता होती है, इसलिए समान ऊँचाई के लिए कार्य भी अधिक होगा।"
    },
    {
        question: "प्रश्न 45. यदि किया गया कार्य शून्य है, तो यह आवश्यक है कि:",
        answers: shuffle([
            { text: "बल शून्य हो।", correct: false },
            { text: "विस्थापन शून्य हो।", correct: false },
            { text: "बल और विस्थापन लंबवत हों।", correct: false },
            { text: "उपरोक्त में से कोई भी एक।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन तीनों में से किसी भी स्थिति में, किया गया कुल कार्य शून्य होगा।"
    },
    {
        question: "प्रश्न 46. किसी वस्तु को एक स्थान से दूसरे स्थान तक ले जाने में किया गया कार्य वस्तु की ________ ऊर्जा में परिवर्तन के बराबर होता है।",
        answers: shuffle([
            { text: "केवल गतिज", correct: false },
            { text: "केवल स्थितिज", correct: false },
            { text: "गतिज और स्थितिज दोनों", correct: true },
            { text: "ऊष्मीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्य-ऊर्जा प्रमेय के एक अधिक सामान्य रूप के अनुसार, कुल कार्य कुल यांत्रिक ऊर्जा (गतिज + स्थितिज) में परिवर्तन के बराबर होता है, यदि असंरक्षी बल भी मौजूद हों।"
    },
    {
        question: "प्रश्न 47. एक आदमी सीढ़ियों पर चढ़ता है। उसके द्वारा गुरुत्वाकर्षण के विरुद्ध किया गया कार्य है:",
        answers: shuffle([
            { text: "शून्य", correct: false },
            { text: "धनात्मक", correct: true },
            { text: "ऋणात्मक", correct: false },
            { text: "यह सीढ़ियों की संख्या पर निर्भर करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आदमी ऊपर की ओर बल लगा रहा है और उसका ऊर्ध्वाधर विस्थापन भी ऊपर की ओर है, इसलिए कार्य धनात्मक है।"
    },
    {
        question: "प्रश्न 48. एक स्प्रिंग पर किया गया कार्य उसकी लंबाई में परिवर्तन के ________ के समानुपाती होता है।",
        answers: shuffle([
            { text: "सीधे", correct: false },
            { text: "वर्ग", correct: true },
            { text: "घन", correct: false },
            { text: "व्युत्क्रम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्प्रिंग में संग्रहीत ऊर्जा का सूत्र U = ½kx² है, जहाँ x विस्थापन है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए कार्य विस्थापन के वर्ग के समानुपाती होता है।"
    },
    {
        question: "प्रश्न 49. यदि एक गेंद बिना किसी ऊर्जा हानि के फर्श से टकराकर वापस उसी ऊँचाई तक उछलती है, तो गुरुत्वाकर्षण द्वारा पूरे चक्र (नीचे आने और ऊपर जाने) में किया गया कार्य है:",
        answers: shuffle([
            { text: "धनात्मक", correct: false },
            { text: "ऋणात्मक", correct: false },
            { text: "शून्य", correct: true },
            { text: "दोगुना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नीचे आने में किया गया कार्य धनात्मक और ऊपर जाने में किया गया कार्य ऋणात्मक होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि दोनों बराबर और विपरीत हैं, कुल कार्य शून्य है क्योंकि गुरुत्वाकर्षण एक संरक्षी बल है।"
    },
    {
        question: "प्रश्न 50. जब कोई उपग्रह पृथ्वी के चारों ओर एक वृत्ताकार कक्षा में घूमता है, तो गुरुत्वाकर्षण बल द्वारा एक पूर्ण परिक्रमा में किया गया कार्य होता है:",
        answers: shuffle([
            { text: "अधिकतम", correct: false },
            { text: "न्यूनतम", correct: false },
            { text: "शून्य", correct: true },
            { text: "उपग्रह के भार के बराबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृत्तीय गति में, गुरुत्वाकर्षण बल (अभिकेंद्रीय बल) हमेशा विस्थापन की दिशा के लंबवत होता है, इसलिए किया गया कार्य शून्य होता है।"
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