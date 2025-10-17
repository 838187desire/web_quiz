const questions = [
    {
        topHeading: " व्यतिकरण पर आधारित 50 MCQs,part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. व्यतिकरण की घटना के लिए आवश्यक है कि प्रकाश स्रोत बहुत संकीर्ण हों। क्यों?",
        answers: shuffle([
            { text: "ताकि अधिक प्रकाश गुजर सके।", correct: false },
            { text: "ताकि प्रत्येक स्लिट एक एकल, निश्चित स्रोत के रूप में कार्य करे और प्रतिरूप स्पष्ट हो।", correct: true },
            { text: "ताकि वे जल्दी गर्म न हों।", correct: false },
            { text: "यह आवश्यक नहीं है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि स्लिट चौड़ी होती है, तो यह कई स्रोतों के संग्रह की तरह काम करती है, और प्रत्येक स्रोत का अपना व्यतिकरण प्रतिरूप होता है, जो एक-दूसरे पर अध्यारोपित होकर एक धुंधला प्रतिरूप बना देगा।"
    },
    {
        question: "प्रश्न 2. \"कला\" (Phase) किसी तरंग की स्थिति के किस पहलू को संदर्भित करती है?",
        answers: shuffle([
            { text: "उसके आयाम को", correct: false },
            { text: "उसकी आवृत्ति को", correct: false },
            { text: "एक निश्चित बिंदु पर उसके कंपन की स्थिति और दिशा को", correct: true },
            { text: "उसकी गति को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कला यह बताती है कि एक तरंग अपने चक्र के किस बिंदु पर है।<br><br><i class='fa-solid fa-angles-right icon'></i> समान कला का अर्थ है कि दोनों तरंगें अपने चक्र में एक ही बिंदु पर हैं।"
    },
    {
        question: "प्रश्न 3. एक पतली पन्नी पर पड़ने वाले प्रकाश में, परावर्तित और अपवर्तित किरणों के बीच व्यतिकरण क्यों नहीं होता है?",
        answers: shuffle([
            { text: "वे कला-संबद्ध नहीं होती हैं।", correct: false },
            { text: "उनकी दिशाएं अलग-अलग होती हैं।", correct: true },
            { text: "उनकी तीव्रताएं बहुत भिन्न होती हैं।", correct: false },
            { text: "व्यतिकरण होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यतिकरण के लिए, तरंगों को एक ही दिशा में चलना चाहिए ताकि वे एक ही बिंदु पर अध्यारोपित हो सकें।<br><br><i class='fa-solid fa-angles-right icon'></i> परावर्तित किरण और अपवर्तित किरण अलग-अलग दिशाओं में जाती हैं।"
    },
    {
        question: "प्रश्न 4. फ्रिंज चौड़ाई का सूत्र क्या है (प्रतीकों का सामान्य अर्थ है)?",
        answers: shuffle([
            { text: "β=Dd/λ", correct: false },
            { text: "β=λd/D", correct: false },
            { text: "β=λD/d", correct: true },
            { text: "β=λ/Dd", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह यंग के द्वि-स्लिट प्रयोग में फ्रिंज चौड़ाई (β) की गणना के लिए मानक सूत्र है, जहाँ λ तरंगदैर्ध्य है, D पर्दे की दूरी है, और d स्लिटों के बीच की दूरी है।"
    },
    {
        question: "प्रश्न 5. व्यतिकरण की घटना किस प्रकार की तरंगों में देखी जा सकती है?",
        answers: shuffle([
            { text: "केवल प्रकाश तरंगों में", correct: false },
            { text: "केवल ध्वनि तरंगों में", correct: false },
            { text: "केवल जल तरंगों में", correct: false },
            { text: "सभी प्रकार की तरंगों में", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यतिकरण तरंगों का एक सार्वभौमिक गुण है और यह सभी प्रकार की तरंगों के साथ हो सकता है, चाहे वे अनुप्रस्थ हों या अनुदैर्ध्य।"
    },
    {
        question: "प्रश्न 6. यदि हम यंग के प्रयोग में स्लिटों के बीच की दूरी दोगुनी कर दें, तो फ्रिंज चौड़ाई...",
        answers: shuffle([
            { text: "दोगुनी हो जाएगी।", correct: false },
            { text: "चार गुनी हो जाएगी।", correct: false },
            { text: "आधी रह जाएगी।", correct: true },
            { text: "एक चौथाई रह जाएगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फ्रिंज चौड़ाई (β) स्लिटों के बीच की दूरी (d) के व्युत्क्रमानुपाती होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि d को दोगुना किया जाता है, तो β आधा हो जाएगा।"
    },
    {
        question: "प्रश्न 7. ध्वनि तरंगों का व्यतिकरण कहाँ अनुभव किया जा सकता है?",
        answers: shuffle([
            { text: "एक शांत कमरे में", correct: false },
            { text: "एक संगीत कार्यक्रम में कुछ स्थानों पर ध्वनि का तेज या धीमा सुनाई देना", correct: true },
            { text: "प्रतिध्वनि में", correct: false },
            { text: "यह अनुभव नहीं किया जा सकता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कई लाउडस्पीकरों वाले एक हॉल में, विभिन्न वक्ताओं से आने वाली ध्वनि तरंगें व्यतिकरण कर सकती हैं, जिससे कुछ स्थानों पर 'डेड स्पॉट्स' (विनाशी व्यतिकरण) और कुछ पर तेज ध्वनि (संपोषी व्यतिकरण) सुनाई देती है।"
    },
    {
        question: "प्रश्न 8. एक ही स्रोत से उत्पन्न दो कला-संबद्ध स्रोतों के बीच की दूरी को क्या कहते हैं?",
        answers: shuffle([
            { text: "पथान्तर", correct: false },
            { text: "कलान्तर", correct: false },
            { text: "स्लिट पृथक्करण", correct: true },
            { text: "फ्रिंज चौड़ाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यंग के प्रयोग के संदर्भ में, यह दो स्लिटों के बीच की दूरी (d) है।"
    },
    {
        question: "प्रश्न 9. पतली फिल्मों में व्यतिकरण के लिए, फिल्म को...",
        answers: shuffle([
            { text: "अपारदर्शी होना चाहिए।", correct: false },
            { text: "बहुत मोटा होना चाहिए।", correct: false },
            { text: "प्रकाश के तरंगदैर्ध्य की कोटि की मोटाई का होना चाहिए।", correct: true },
            { text: "केवल तरल होना चाहिए।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि फिल्म बहुत मोटी है, तो दोनों सतहों से परावर्तित किरणें कला-संबद्ध नहीं रह जाती हैं और व्यतिकरण प्रतिरूप दिखाई नहीं देता है।"
    },
    {
        question: "प्रश्न 10. एकवर्णी प्रकाश का क्या अर्थ है?",
        answers: shuffle([
            { text: "बहुत तीव्र प्रकाश", correct: false },
            { text: "बहुत मंद प्रकाश", correct: false },
            { text: "केवल एक ही तरंगदैर्ध्य (या रंग) का प्रकाश", correct: true },
            { text: "सफेद प्रकाश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यतिकरण प्रयोगों में स्पष्ट फ्रिंज प्राप्त करने के लिए अक्सर एकवर्णी प्रकाश (जैसे सोडियम लैंप या लेजर से) का उपयोग किया जाता है।"
    },
    {
        question: "प्रश्न 11. तरंगें जब विपरीत कला में मिलती हैं, तो उनके बीच कलान्तर होता है:",
        answers: shuffle([
            { text: "0", correct: false },
            { text: "180 डिग्री (π रेडियन)", correct: true },
            { text: "90 डिग्री (π/2 रेडियन)", correct: false },
            { text: "360 डिग्री (2π रेडियन)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 180 डिग्री का कलान्तर एक तरंग के श्रृंग (crest) को दूसरी के गर्त (trough) के साथ संरेखित करता है, जिससे विनाशी व्यतिकरण होता है।"
    },
    {
        question: "प्रश्न 12. यदि एक स्लिट बहुत चौड़ी हो, तो व्यतिकरण प्रतिरूप...",
        answers: shuffle([
            { text: "बहुत स्पष्ट होगा।", correct: false },
            { text: "अदृश्य हो जाएगा।", correct: true },
            { text: "बहुत चौड़ा होगा।", correct: false },
            { text: "बहुत चमकीला होगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक चौड़ी स्लिट कई स्वतंत्र स्रोतों की तरह काम करती है, जिनके व्यतिकरण प्रतिरूप एक दूसरे को निरस्त कर देते हैं, जिससे एक समान रोशनी दिखाई देती है।"
    },
    {
        question: "प्रश्न 13. स्टोक का नियम (परावर्तन के लिए) क्या कहता है?",
        answers: shuffle([
            { text: "आपतन कोण हमेशा परावर्तन कोण के बराबर होता है।", correct: false },
            { text: "जब प्रकाश किरण विरल माध्यम से सघन माध्यम की सतह पर परावर्तित होती है, तो उसमें π का अतिरिक्त कलान्तर आ जाता है।", correct: true },
            { text: "प्रकाश हमेशा सबसे कम समय वाला पथ चुनता है।", correct: false },
            { text: "प्रकाश की गति निर्वात में अधिकतम होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह नियम पतली फिल्मों और न्यूटन वलय में व्यतिकरण की व्याख्या करने के लिए महत्वपूर्ण है।"
    },
    {
        question: "प्रश्न 14. क्या व्यतिकरण के लिए तरंगों का ध्रुवित होना आवश्यक है?",
        answers: shuffle([
            { text: "हाँ, हमेशा", correct: false },
            { text: "नहीं, अध्रुवित प्रकाश भी व्यतिकरण कर सकता है।", correct: true },
            { text: "केवल यदि स्रोत कला-संबद्ध हों।", correct: false },
            { text: "केवल पतली फिल्मों के लिए।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यतिकरण तरंगों के अध्यारोपण पर निर्भर करता है, न कि उनके कंपन के तल पर।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, व्यतिकरण करने वाली तरंगों का ध्रुवण तल समान होना चाहिए।"
    },
    {
        question: "प्रश्न 15. व्यतिकरण फ्रिंजों की तीव्रता वितरण वक्र का आकार कैसा होता है?",
        answers: shuffle([
            { text: "ज्या वक्र (Sinusoidal)", correct: false },
            { text: "कोज्या-वर्ग वक्र (Cosine-squared)", correct: true },
            { text: "रैखिक", correct: false },
            { text: "परवलयिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दो-स्लिट व्यतिकरण के लिए परिणामी तीव्रता का सूत्र I=4I0cos2(ϕ/2) है, जो एक कोज्या-वर्ग फलन है।"
    },
    {
        question: "प्रश्न 16. \"बीट्स\" (विस्पंद) की घटना किस घटना का ध्वनि एनालॉग है?",
        answers: shuffle([
            { text: "विवर्तन", correct: false },
            { text: "अपवर्तन", correct: false },
            { text: "व्यतिकरण", correct: true },
            { text: "ध्रुवण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब लगभग समान आवृत्ति की दो ध्वनि तरंगें अध्यारोपित होती हैं, तो वे समय के साथ व्यतिकरण करती हैं, जिससे ध्वनि की तीव्रता में आवधिक उतार-चढ़ाव होता है, जिसे बीट्स कहते हैं।"
    },
    {
        question: "प्रश्न 17. यंग के प्रयोग में केंद्रीय दीप्त फ्रिंज को शून्य-क्रम फ्रिंज क्यों कहा जाता है?",
        answers: shuffle([
            { text: "क्योंकि इसकी तीव्रता शून्य होती है।", correct: false },
            { text: "क्योंकि इस बिंदु पर पथान्तर शून्य होता है।", correct: true },
            { text: "क्योंकि यह सबसे छोटी होती है।", correct: false },
            { text: "क्योंकि यह सबसे पहले बनती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फ्रिंजों का क्रम (n) पथान्तर (nλ) में पूर्णांक n द्वारा निर्धारित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> केंद्र में, n=0 होता है।"
    },
    {
        question: "प्रश्न 18. यदि हम यंग के प्रयोग में एक स्लिट को बंद कर दें, तो पर्दे पर क्या दिखाई देगा?",
        answers: shuffle([
            { text: "व्यतिकरण प्रतिरूप और अधिक स्पष्ट हो जाएगा।", correct: false },
            { text: "कोई प्रकाश नहीं दिखाई देगा।", correct: false },
            { text: "व्यतिकरण प्रतिरूप गायब हो जाएगा और केवल एकल-स्लिट विवर्तन प्रतिरूप दिखाई देगा।", correct: true },
            { text: "पर्दा समान रूप से प्रकाशित हो जाएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यतिकरण के लिए दो स्रोतों की आवश्यकता होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> एक स्लिट के साथ, केवल विवर्तन की घटना होगी।"
    },
    {
        question: "प्रश्न 19. पक्षी के पंखों में या मोर के पंखों में दिखाई देने वाले रंग मुख्य रूप से किसके कारण होते हैं?",
        answers: shuffle([
            { text: "वर्णक (pigments) के कारण", correct: false },
            { text: "संरचनात्मक वर्ण (structural coloration) के कारण, जिसमें व्यतिकरण और विवर्तन शामिल हैं।", correct: true },
            { text: "केवल विक्षेपण के कारण", correct: false },
            { text: "केवल प्रकीर्णन के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पंखों की सूक्ष्म संरचना प्रकाश तरंगों के साथ व्यतिकरण करती है, जिससे कुछ रंग प्रबलित होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये रंग वर्णक के कारण नहीं होते।"
    },
    {
        question: "प्रश्न 20. एक तरंगाग्र पर स्थित सभी बिंदु...",
        answers: shuffle([
            { text: "समान आयाम से कंपन करते हैं।", correct: false },
            { text: "समान कला में कंपन करते हैं।", correct: true },
            { text: "समान दिशा में चलते हैं।", correct: false },
            { text: "समान ऊर्जा रखते हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह तरंगाग्र की परिभाषा है।"
    },
    {
        question: "प्रश्न 21. व्यतिकरण की खोज ने किस सिद्धांत को गंभीर चुनौती दी?",
        answers: shuffle([
            { text: "हाइगेन्स का तरंग सिद्धांत", correct: false },
            { text: "न्यूटन का कणिका सिद्धांत", correct: true },
            { text: "मैक्सवेल का विद्युत चुंबकत्व का सिद्धांत", correct: false },
            { text: "प्लैंक का क्वांटम सिद्धांत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कणिका सिद्धांत व्यतिकरण की व्याख्या नहीं कर सकता था, जहाँ दो प्रकाश किरणें मिलकर अंधकार उत्पन्न कर सकती हैं।"
    },
    {
        question: "प्रश्न 22. पतली हवा की कील (air wedge) में व्यतिकरण फ्रिंजें कैसी होती हैं?",
        answers: shuffle([
            { text: "संकेंद्री वृत्त", correct: false },
            { text: "समान दूरी पर स्थित सीधी समानांतर रेखाएं", correct: true },
            { text: "परवलयाकार", correct: false },
            { text: "कोई फ्रिंज नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हवा की कील में, हवा की परत की मोटाई एक दिशा में समान रूप से बढ़ती है, जिससे समान मोटाई के स्थान सीधी रेखाएं बनाते हैं।"
    },
    {
        question: "प्रश्न 23. क्या निर्वात में व्यतिकरण संभव है?",
        answers: shuffle([
            { text: "नहीं, इसके लिए माध्यम आवश्यक है।", correct: false },
            { text: "हाँ, प्रकाश तरंगों को संचरण के लिए माध्यम की आवश्यकता नहीं होती है।", correct: true },
            { text: "केवल यदि स्रोत बहुत शक्तिशाली हों।", correct: false },
            { text: "केवल संपोषी व्यतिकरण।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश विद्युत-चुंबकीय तरंग है, इसलिए दो कला-संबद्ध किरणें निर्वात में भी अध्यारोपित होकर व्यतिकरण कर सकती हैं।"
    },
    {
        question: "प्रश्न 24. एक दीप्त फ्रिंज के केंद्र और अगली दीप्त फ्रिंज के केंद्र के बीच की दूरी को क्या कहते हैं?",
        answers: shuffle([
            { text: "पथान्तर", correct: false },
            { text: "कलान्तर", correct: false },
            { text: "फ्रिंज चौड़ाई", correct: true },
            { text: "स्लिट चौड़ाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह दो क्रमागत दीप्त या दो क्रमागत अदीप्त फ्रिंजों के बीच की दूरी होती है।"
    },
    {
        question: "प्रश्न 25. यंग के प्रयोग में यदि लाल प्रकाश के स्थान पर नीले प्रकाश का उपयोग किया जाए तो फ्रिंज चौड़ाई...",
        answers: shuffle([
            { text: "बढ़ जाएगी।", correct: false },
            { text: "घट जाएगी।", correct: true },
            { text: "अपरिवर्तित रहेगी।", correct: false },
            { text: "गायब हो जाएगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नीले प्रकाश का तरंगदैर्ध्य लाल प्रकाश से कम होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> फ्रिंज चौड़ाई तरंगदैर्ध्य के समानुपाती होती है, इसलिए यह घट जाएगी।"
    },
    {
        question: "प्रश्न 26. जब एक प्रकाश किरण सघन माध्यम की सतह से परावर्तित होती है, तो कलान्तर में कितना परिवर्तन होता है?",
        answers: shuffle([
            { text: "शून्य", correct: false },
            { text: "π/2", correct: false },
            { text: "π", correct: true },
            { text: "2π", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सघन माध्यम से परावर्तन होने पर कला उलट जाती है, जो π रेडियन (180 डिग्री) के कलान्तर परिवर्तन के बराबर है।"
    },
    {
        question: "प्रश्न 27. व्यतिकरण फ्रिंजों की दृश्यता को प्रभावित करने वाला मुख्य कारक क्या है?",
        answers: shuffle([
            { text: "प्रकाश स्रोत का तापमान", correct: false },
            { text: "स्रोतों की कला-संबद्धता", correct: true },
            { text: "कमरे का दबाव", correct: false },
            { text: "पर्दे का रंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि स्रोत कला-संबद्ध नहीं हैं, तो कोई स्थिर व्यतिकरण प्रतिरूप नहीं बनेगा और फ्रिंजें दिखाई नहीं देंगी।"
    },
    {
        question: "प्रश्न 28. दो कला-संबद्ध स्रोतों से समान आयाम A की तरंगें विनाशी व्यतिकरण करती हैं। परिणामी आयाम क्या होगा?",
        answers: shuffle([
            { text: "A", correct: false },
            { text: "2A", correct: false },
            { text: "A/2", correct: false },
            { text: "शून्य", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पूर्ण विनाशी व्यतिकरण में, दोनों तरंगों के आयाम एक-दूसरे को निरस्त कर देते हैं (A - A = 0)।"
    },
    {
        question: "प्रश्न 29. दो कला-संबद्ध स्रोतों से समान आयाम A की तरंगें संपोषी व्यतिकरण करती हैं। परिणामी आयाम क्या होगा?",
        answers: shuffle([
            { text: "A", correct: false },
            { text: "2A", correct: true },
            { text: "A/2", correct: false },
            { text: "शून्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संपोषी व्यतिकरण में, दोनों तरंगों के आयाम जुड़ जाते हैं (A + A = 2A)।"
    },
    {
        question: "प्रश्न 30. जब सीडी को विभिन्न कोणों से देखा जाता है तो उसके रंग बदलते क्यों दिखाई देते हैं?",
        answers: shuffle([
            { text: "क्योंकि सीडी घूमती है।", correct: false },
            { text: "क्योंकि देखने का कोण बदलने पर विभिन्न रंगों के लिए संपोषी व्यतिकरण/विवर्तन की शर्त बदल जाती है।", correct: true },
            { text: "क्योंकि प्रकाश की तीव्रता बदल जाती है।", correct: false },
            { text: "यह एक मनोवैज्ञानिक भ्रम है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सीडी एक विवर्तन ग्रेटिंग की तरह काम करती है, और ग्रेटिंग के लिए संपोषी व्यतिकरण का कोण तरंगदैर्ध्य पर निर्भर करता है।"
    },
    {
        question: "प्रश्न 31. अप्रगामी तरंगें (Standing waves) कैसे बनती हैं?",
        answers: shuffle([
            { text: "विवर्तन द्वारा", correct: false },
            { text: "विपरीत दिशाओं में चलने वाली दो समान तरंगों के व्यतिकरण द्वारा", correct: true },
            { text: "अपवर्तन द्वारा", correct: false },
            { text: "ध्रुवण द्वारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब एक तरंग और उसकी परावर्तित तरंग व्यतिकरण करती हैं, तो अप्रगामी तरंगें बनती हैं, जिनमें निस्पंद (न्यूनतम कंपन) और प्रस्पंद (अधिकतम कंपन) के बिंदु स्थिर रहते हैं।"
    },
    {
        question: "प्रश्न 32. क्या व्यतिकरण केवल अनुप्रस्थ तरंगों में होता है?",
        answers: shuffle([
            { text: "हाँ", correct: false },
            { text: "नहीं, यह अनुदैर्ध्य तरंगों में भी होता है।", correct: true },
            { text: "केवल निर्वात में।", correct: false },
            { text: "केवल माध्यम में।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्वनि तरंगें अनुदैर्ध्य होती हैं, और वे भी व्यतिकरण (जैसे बीट्स) का प्रदर्शन करती हैं।"
    },
    {
        question: "प्रश्न 33. \"कला-संबद्ध लंबाई\" (Coherence length) क्या दर्शाती है?",
        answers: shuffle([
            { text: "एक तरंग की कुल लंबाई।", correct: false },
            { text: "वह दूरी जिस तक एक तरंग कला-संबद्ध बनी रहती है।", correct: true },
            { text: "दो स्लिटों के बीच की दूरी।", correct: false },
            { text: "फ्रिंज की चौड़ाई।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि पथान्तर कला-संबद्ध लंबाई से अधिक हो जाता है, तो व्यतिकरण फ्रिंजें स्पष्ट दिखाई नहीं देती हैं।"
    },
    {
        question: "प्रश्न 34. व्यतिकरण फ्रिंजों का बनना सिद्ध करता है कि प्रकाश...",
        answers: shuffle([
            { text: "में ऊर्जा होती है।", correct: false },
            { text: "तरंगों के रूप में अध्यारोपित हो सकता है।", correct: true },
            { text: "सीधी रेखा में चलता है।", correct: false },
            { text: "कणों से बना है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीप्त और अदीप्त फ्रिंजों का बनना केवल तरंगों के संपोषी और विनाशी अध्यारोपण से ही समझाया जा सकता है।"
    },
    {
        question: "प्रश्न 35. यदि व्यतिकरण करने वाली तरंगों के आयाम बराबर नहीं हैं, तो क्या विनाशी व्यतिकरण पर तीव्रता शून्य होगी?",
        answers: shuffle([
            { text: "हाँ, हमेशा", correct: false },
            { text: "नहीं, यह शून्य नहीं बल्कि न्यूनतम होगी।", correct: true },
            { text: "यह अधिकतम होगी।", correct: false },
            { text: "यह आयामों के योग के बराबर होगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पूर्ण निरस्तीकरण के लिए आयामों का बराबर होना आवश्यक है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि वे बराबर नहीं हैं, तो तीव्रता न्यूनतम होगी लेकिन शून्य नहीं।"
    },
    {
        question: "प्रश्न 36. प्रकाशिक पथ (Optical path) क्या है?",
        answers: shuffle([
            { text: "प्रकाश द्वारा तय की गई ज्यामितीय दूरी।", correct: false },
            { text: "ज्यामितीय दूरी को माध्यम के अपवर्तनांक से गुणा करने पर प्राप्त मान।", correct: true },
            { text: "प्रकाश की गति और समय का गुणनफल।", correct: false },
            { text: "प्रकाश का तरंगदैर्ध्य।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाशिक पथ की अवधारणा का उपयोग यह गणना करने के लिए किया जाता है कि एक माध्यम में चलने से तरंग में कितना कला परिवर्तन होता है, और यह व्यतिकरण के लिए महत्वपूर्ण है।"
    },
    {
        question: "प्रश्न 37. व्यतिकरण की घटना में, दीप्त फ्रिंजों पर...",
        answers: shuffle([
            { text: "केवल एक तरंग पहुंचती है।", correct: false },
            { text: "तरंगें विपरीत कला में पहुंचती हैं।", correct: false },
            { text: "तरंगें समान कला में पहुंचती हैं।", correct: true },
            { text: "कोई तरंग नहीं पहुंचती।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समान कला में पहुंचने से संपोषी व्यतिकरण होता है और तीव्रता अधिकतम हो जाती है।"
    },
    {
        question: "प्रश्न 38. व्यतिकरण की घटना में, अदीप्त फ्रिंजों पर...",
        answers: shuffle([
            { text: "केवल एक तरंग पहुंचती है।", correct: false },
            { text: "तरंगें विपरीत कला में पहुंचती हैं।", correct: true },
            { text: "तरंगें समान कला में पहुंचती हैं।", correct: false },
            { text: "कोई तरंग नहीं पहुंचती।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विपरीत कला में पहुंचने से विनाशी व्यतिकरण होता है और तीव्रता न्यूनतम हो जाती है।"
    },
    {
        question: "प्रश्न 39. पतली फिल्मों से परावर्तित प्रकाश में व्यतिकरण किसके बीच होता है?",
        answers: shuffle([
            { text: "आपतित और परावर्तित किरण", correct: false },
            { text: "फिल्म की ऊपरी और निचली सतहों से परावर्तित किरणों के बीच", correct: true },
            { text: "आपतित और अपवर्तित किरण", correct: false },
            { text: "दो अपवर्तित किरणों के बीच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक आपतित किरण दो भागों में बंटती है - एक ऊपरी सतह से परावर्तित होती है और दूसरी निचली सतह से परावर्तित होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इन्हीं दो किरणों में व्यतिकरण होता है।"
    },
    {
        question: "प्रश्न 40. दो तरंगों के बीच पथान्तर λ/2 है। यह किस प्रकार का व्यतिकरण होगा?",
        answers: shuffle([
            { text: "संपोषी", correct: false },
            { text: "विनाशी", correct: true },
            { text: "कोई व्यतिकरण नहीं", correct: false },
            { text: "यह तरंगों के आयाम पर निर्भर करेगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> λ/2 का पथान्तर, π के कलान्तर के बराबर है, जो विनाशी व्यतिकरण की शर्त है।"
    },
    {
        question: "प्रश्न 41. दो तरंगों के बीच पथान्तर 2λ है। यह किस प्रकार का व्यतिकरण होगा?",
        answers: shuffle([
            { text: "संपोषी", correct: true },
            { text: "विनाशी", correct: false },
            { text: "कोई व्यतिकरण नहीं", correct: false },
            { text: "यह तरंगों की आवृत्ति पर निर्भर करेगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 2λ का पथान्तर, तरंगदैर्ध्य का पूर्ण गुणज है (n=2), जो संपोषी व्यतिकरण की शर्त है।"
    },
    {
        question: "प्रश्न 42. यदि प्रकाश का स्रोत एकवर्णी नहीं है, तो व्यतिकरण फ्रिंजें...",
        answers: shuffle([
            { text: "अधिक स्पष्ट होंगी।", correct: false },
            { text: "कम स्पष्ट और रंगीन होंगी।", correct: true },
            { text: "काली और सफेद होंगी।", correct: false },
            { text: "नहीं बनेंगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्येक रंग अपना स्वयं का व्यतिकरण प्रतिरूप बनाएगा, जो एक-दूसरे पर अध्यारोपित होकर एक धुंधला और रंगीन प्रतिरूप बना देंगे।"
    },
    {
        question: "प्रश्न 43. एक स्थिर व्यतिकरण प्रतिरूप के लिए, स्रोतों को होना चाहिए:",
        answers: shuffle([
            { text: "कला-संबद्ध", correct: false },
            { text: "एकवर्णी", correct: false },
            { text: "समान दिशा में प्रकाश उत्सर्जित करने वाले", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक स्पष्ट और स्थिर व्यतिकरण प्रतिरूप देखने के लिए ये सभी शर्तें महत्वपूर्ण हैं।"
    },
    {
        question: "प्रश्न 44. \"अध्यारोपण\" शब्द का सबसे अच्छा वर्णन क्या है?",
        answers: shuffle([
            { text: "तरंगों का टकराना", correct: false },
            { text: "तरंगों का एक दूसरे से होकर गुजरना और संयुक्त प्रभाव उत्पन्न करना", correct: true },
            { text: "तरंगों का विभाजित होना", correct: false },
            { text: "तरंगों का अवशोषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तरंगों की यह अनूठी क्षमता है कि वे एक ही स्थान पर एक साथ मौजूद हो सकती हैं और उनका संयुक्त विस्थापन उनके अलग-अलग विस्थापनों का योग होता है।"
    },
    {
        question: "प्रश्न 45. व्यतिकरण में, ऊर्जा का पुनर्वितरण किस क्षेत्र से किस क्षेत्र में होता है?",
        answers: shuffle([
            { text: "दीप्त फ्रिंज से अदीप्त फ्रिंज", correct: false },
            { text: "अदीप्त फ्रिंज से दीप्त फ्रिंज", correct: true },
            { text: "कोई पुनर्वितरण नहीं होता", correct: false },
            { text: "ऊर्जा ऊष्मा में बदल जाती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जिन क्षेत्रों में तीव्रता न्यूनतम (अदीप्त) होनी चाहिए, वहाँ से ऊर्जा उन क्षेत्रों में स्थानांतरित हो जाती है जहाँ तीव्रता अधिकतम (दीप्त) होती है।"
    },
    {
        question: "प्रश्न 46. क्या प्रकाश का व्यतिकरण प्रकाश के सीधी रेखा में चलने की अवधारणा का खंडन करता है?",
        answers: shuffle([
            { text: "हाँ, पूरी तरह से।", correct: false },
            { text: "नहीं, यह केवल यह दिखाता है कि सीधी रेखा का मॉडल एक सन्निकटन है।", correct: true },
            { text: "केवल पानी में।", correct: false },
            { text: "केवल हवा में।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यतिकरण और विवर्तन जैसी तरंग घटनाएं दिखाती हैं कि प्रकाश का व्यवहार अधिक जटिल है, लेकिन बड़े पैमाने पर यह लगभग सीधी रेखा में ही चलता है।"
    },
    {
        question: "प्रश्न 47. व्यतिकरण फ्रिंजों को देखने के लिए पर्दे को कहाँ रखा जाना चाहिए?",
        answers: shuffle([
            { text: "स्लिटों के बहुत पास", correct: false },
            { text: "स्लिटों से काफी दूरी पर", correct: true },
            { text: "स्लिटों के ठीक ऊपर", correct: false },
            { text: "कहीं भी रखा जा सकता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पर्दे को पर्याप्त दूरी पर रखने से फ्रिंजें फैल जाती हैं और आसानी से देखी जा सकती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> फ्रिंज चौड़ाई पर्दे की दूरी D के समानुपाती होती है।"
    },
    {
        question: "प्रश्न 48. व्यतिकरण की घटना सबसे पहले किसके द्वारा खोजी और समझाई गई थी?",
        answers: shuffle([
            { text: "न्यूटन, जिन्होंने इसे 'फिट्स' कहा था।", correct: false },
            { text: "थॉमस यंग, जिन्होंने इसकी तरंग के रूप में व्याख्या की।", correct: true },
            { text: "हाइगेन्स, जिन्होंने तरंग सिद्धांत दिया।", correct: false },
            { text: "फ्रेनेल, जिन्होंने गणितीय आधार प्रदान किया।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हालांकि न्यूटन ने न्यूटन वलय देखे थे, लेकिन वे इसे कणिका सिद्धांत से समझाने में विफल रहे।<br><br><i class='fa-solid fa-angles-right icon'></i> यंग ने पहली बार इसकी सही तरंग व्याख्या प्रदान की।"
    },
    {
        question: "प्रश्न 49. व्यतिकरण और विवर्तन दोनों ही... के परिणाम हैं।",
        answers: shuffle([
            { text: "परावर्तन", correct: false },
            { text: "अपवर्तन", correct: false },
            { text: "अध्यारोपण", correct: true },
            { text: "ध्रुवण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दोनों घटनाओं का मूल आधार तरंगों का अध्यारोपण सिद्धांत है।"
    },
    {
        question: "प्रश्न 50. दो दीप्त फ्रिंजों के बीच हमेशा एक... होती है।",
        answers: shuffle([
            { text: "दीप्त फ्रिंज", correct: false },
            { text: "अदीप्त फ्रिंज", correct: true },
            { text: "सफेद फ्रिंज", correct: false },
            { text: "लाल फ्रिंज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यतिकरण प्रतिरूप में दीप्त और अदीप्त फ्रिंजें एकांतर क्रम में होती हैं।"
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