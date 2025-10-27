const questions = [
    {
        topHeading: "न्यूटन के गति के नियम पर आधारित 50 MCQs,part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. लंबी कूद का एक एथलीट कूदने से पहले क्यों दौड़ता है?",
        answers: shuffle([
            { text: "शरीर को गर्म करने के लिए", correct: false },
            { text: "गति का जड़त्व प्राप्त करने के लिए", correct: true },
            { text: "घर्षण को कम करने के लिए", correct: false },
            { text: "गुरुत्वाकर्षण पर काबू पाने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दौड़ने से एथलीट को एक क्षैतिज वेग (गति का जड़त्व) मिलता है, जो कूदने पर उसे अधिक दूरी तक ले जाने में मदद करता है।"
    },
    {
        question: "प्रश्न 2. यदि किसी वस्तु पर कार्यरत सभी बलों का परिणामी शून्य हो, तो वस्तु:",
        answers: shuffle([
            { text: "निश्चित रूप से स्थिर होगी।", correct: false },
            { text: "निश्चित रूप से त्वरित होगी।", correct: false },
            { text: "या तो स्थिर होगी या एकसमान वेग से चलेगी।", correct: true },
            { text: "वृत्तीय गति करेगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह न्यूटन के पहले नियम का एक और कथन है।<br><br><i class='fa-solid fa-angles-right icon'></i> शून्य शुद्ध बल का अर्थ शून्य त्वरण है।"
    },
    {
        question: "प्रश्न 3. किसी वस्तु का भार ________ का एक माप है।",
        answers: shuffle([
            { text: "उसके जड़त्व", correct: false },
            { text: "उसके द्रव्यमान", correct: false },
            { text: "उस पर लगने वाले गुरुत्वाकर्षण बल", correct: true },
            { text: "उसकी घनत्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भार (W) वह बल है जिससे पृथ्वी किसी वस्तु को अपने केंद्र की ओर खींचती है (W=mg)।"
    },
    {
        question: "प्रश्न 4. एक लिफ्ट जो मुक्त रूप से गिर रही है (भारहीनता की स्थिति), उसमें खड़े व्यक्ति का त्वरण क्या होगा?",
        answers: shuffle([
            { text: "शून्य", correct: false },
            { text: "g (गुरुत्वीय त्वरण)", correct: true },
            { text: "g से कम", correct: false },
            { text: "g से अधिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुक्त पतन में, व्यक्ति और लिफ्ट दोनों एक ही त्वरण 'g' से नीचे गिरते हैं।"
    },
    {
        question: "प्रश्न 5. न्यूटन की गति के नियम ________ यांत्रिकी का आधार हैं।",
        answers: shuffle([
            { text: "क्वांटम", correct: false },
            { text: "सापेक्षकीय", correct: false },
            { text: "चिरसम्मत (क्लासिकल)", correct: true },
            { text: "सांख्यिकीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन के नियम उस यांत्रिकी की नींव हैं जो हमारी रोजमर्रा की दुनिया में स्थूल वस्तुओं की गति का वर्णन करती है, जिसे चिरसम्मत यांत्रिकी कहा जाता है।"
    },
    {
        question: "प्रश्न 6. किसी वस्तु के जड़त्व की माप है:",
        answers: shuffle([
            { text: "उसका भार", correct: false },
            { text: "उसका घनत्व", correct: false },
            { text: "उसका द्रव्यमान", correct: true },
            { text: "उसका आयतन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्रव्यमान किसी वस्तु में पदार्थ की मात्रा है और यह सीधे उसके जड़त्व का माप है।"
    },
    {
        question: "प्रश्न 7. जब एक घोड़ा अचानक दौड़ना शुरू करता है, तो घुड़सवार पीछे की ओर गिर जाता है। इसका कारण है:",
        answers: shuffle([
            { text: "गति का जड़त्व", correct: false },
            { text: "विराम का जड़त्व", correct: true },
            { text: "घोड़े द्वारा लगाया गया बल", correct: false },
            { text: "दिशा का जड़त्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घुड़सवार का शरीर अपनी स्थिर अवस्था बनाए रखने की कोशिश करता है, जबकि घोड़ा आगे बढ़ जाता है।"
    },
    {
        question: "प्रश्न 8. एक समान वृत्तीय गति में, वस्तु पर लगने वाला बल हमेशा:",
        answers: shuffle([
            { text: "गति की दिशा में होता है", correct: false },
            { text: "केंद्र की ओर होता है", correct: true },
            { text: "केंद्र से बाहर की ओर होता है", correct: false },
            { text: "शून्य होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक समान वृत्तीय गति बनाए रखने के लिए, एक अभिकेंद्रीय बल की आवश्यकता होती है जो हमेशा केंद्र की ओर कार्य करता है और वस्तु को त्वरित करता है।"
    },
    {
        question: "प्रश्न 9. यदि बल और विस्थापन के बीच का कोण शून्य हो, तो किया गया कार्य होगा:",
        answers: shuffle([
            { text: "शून्य", correct: false },
            { text: "धनात्मक", correct: true },
            { text: "ऋणात्मक", correct: false },
            { text: "अधिकतम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि यह कार्य-ऊर्जा का प्रश्न है, यह बल की अवधारणा से संबंधित है।<br><br><i class='fa-solid fa-angles-right icon'></i> कार्य = बल × विस्थापन × cos(θ)।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि θ=0, तो कार्य धनात्मक होता है।"
    },
    {
        question: "प्रश्न 10. संवेग की दिशा वही होती है जो ________ की दिशा होती है।",
        answers: shuffle([
            { text: "बल", correct: false },
            { text: "त्वरण", correct: false },
            { text: "वेग", correct: true },
            { text: "विस्थापन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संवेग एक सदिश राशि है (p=mv), और इसकी दिशा हमेशा वेग की दिशा में होती है।"
    },
    {
        question: "प्रश्न 11. न्यूटन के दूसरे नियम को ________ के नियम के रूप में भी जाना जाता है।",
        answers: shuffle([
            { text: "जड़त्व", correct: false },
            { text: "बल और त्वरण", correct: true },
            { text: "क्रिया-प्रतिक्रिया", correct: false },
            { text: "संवेग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह नियम बल और उसके द्वारा उत्पन्न त्वरण के बीच एक सीधा संबंध स्थापित करता है।"
    },
    {
        question: "प्रश्न 12. एक वस्तु पर दो बल विपरीत दिशाओं में कार्य कर रहे हैं। वस्तु किस दिशा में गति करेगी?",
        answers: shuffle([
            { text: "बड़े बल की दिशा में", correct: true },
            { text: "छोटे बल की दिशा में", correct: false },
            { text: "दोनों बलों के लंबवत", correct: false },
            { text: "गति नहीं करेगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुद्ध बल बड़े बल में से छोटे बल को घटाकर प्राप्त होता है, और गति की दिशा शुद्ध बल (यानी बड़े बल) की दिशा में होती है।"
    },
    {
        question: "प्रश्न 13. एक लड़का एक पत्थर को धागे से बांधकर घुमा रहा है। यदि धागा टूट जाए, तो पत्थर:",
        answers: shuffle([
            { text: "केंद्र की ओर गिरेगा", correct: false },
            { text: "सीधे बाहर की ओर जाएगा", correct: false },
            { text: "वृत्तीय पथ पर गति करता रहेगा", correct: false },
            { text: "उस बिंदु पर स्पर्शरेखा की दिशा में गति करेगा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह जड़त्व के कारण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> धागा टूटने पर अभिकेंद्रीय बल समाप्त हो जाता है, और पत्थर अपने वेग की दिशा (जो स्पर्शरेखीय होती है) में सीधी रेखा में गति करता है।"
    },
    {
        question: "प्रश्न 14. क्या बिना द्रव्यमान वाली कोई वस्तु बल का अनुभव कर सकती है?",
        answers: shuffle([
            { text: "हाँ", correct: false },
            { text: " ", correct: false },
            { text: " ", correct: false },
            { text: "नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> F=ma के अनुसार, यदि द्रव्यमान (m) शून्य है, तो किसी भी परिमित त्वरण के लिए बल (F) भी शून्य होगा।<br><br><i class='fa-solid fa-angles-right icon'></i> (फोटॉन जैसी द्रव्यमान रहित कणों की स्थिति क्वांटम भौतिकी में भिन्न होती है)।"
    },
    {
        question: "प्रश्न 15. किसी वस्तु की गति की अवस्था में परिवर्तन का विरोध करने की प्रवृत्ति क्या कहलाती है?",
        answers: shuffle([
            { text: "संवेग", correct: false },
            { text: "बल", correct: false },
            { text: "जड़त्व", correct: true },
            { text: "आवेग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह जड़त्व की मूलभूत परिभाषा है।"
    },
    {
        question: "प्रश्न 16. एक जेट इंजन ________ के संरक्षण के सिद्धांत पर काम करता है।",
        answers: shuffle([
            { text: "ऊर्जा", correct: false },
            { text: "द्रव्यमान", correct: false },
            { text: "रैखिक संवेग", correct: true },
            { text: "कोणीय संवेग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंजन गैसों को पीछे की ओर उच्च संवेग से फेंकता है, जिससे इंजन और विमान को आगे की ओर बराबर संवेग प्राप्त होता है।"
    },
    {
        question: "प्रश्न 17. किसी वस्तु का द्रव्यमान उसके ________ का संख्यात्मक माप है।",
        answers: shuffle([
            { text: "भार", correct: false },
            { text: "जड़त्व", correct: true },
            { text: "घनत्व", correct: false },
            { text: "वेग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्रव्यमान जितना अधिक होगा, जड़त्व उतना ही अधिक होगा।"
    },
    {
        question: "प्रश्न 18. न्यूटन के नियमों को सामान्यीकृत करके किसने सापेक्षता का सिद्धांत दिया?",
        answers: shuffle([
            { text: "गैलीलियो", correct: false },
            { text: "केप्लर", correct: false },
            { text: "आइंस्टीन", correct: true },
            { text: "हाइजेनबर्ग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आइंस्टीन ने दिखाया कि न्यूटन के नियम कम वेग पर एक अच्छा सन्निकटन हैं, लेकिन उच्च वेगों के लिए सापेक्षता का सिद्धांत आवश्यक है।"
    },
    {
        question: "प्रश्न 19. एक घर्षण रहित सतह पर, एक वस्तु पर लगाया गया एक छोटा सा बल भी उसे:",
        answers: shuffle([
            { text: "स्थिर रखेगा", correct: false },
            { text: "त्वरित करेगा", correct: true },
            { text: "एकसमान वेग से चलाएगा", correct: false },
            { text: "उसकी स्थिति नहीं बदलेगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि कोई विरोधी बल (घर्षण) नहीं है, कोई भी अशून्य बल (F=ma के अनुसार) एक त्वरण उत्पन्न करेगा।"
    },
    {
        question: "प्रश्न 20. एक स्प्रिंग तुला किसका मापन करती है?",
        answers: shuffle([
            { text: "द्रव्यमान", correct: false },
            { text: "जड़त्व", correct: false },
            { text: "बल या भार", correct: true },
            { text: "त्वरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्प्रिंग तुला स्प्रिंग के खिंचाव को मापती है, जो उस पर लगाए गए बल (या भार) के समानुपाती होता है।"
    },
    {
        question: "प्रश्न 21. एक पक्षी हवा में उड़ता है। यह संभव है:",
        answers: shuffle([
            { text: "न्यूटन के पहले नियम के कारण", correct: false },
            { text: "न्यूटन के दूसरे नियम के कारण", correct: false },
            { text: "न्यूटन के तीसरे नियम के कारण", correct: true },
            { text: "इन सभी के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पक्षी अपने पंखों से हवा को नीचे की ओर धकेलता है (क्रिया), और हवा पक्षी को ऊपर की ओर धकेलती है (प्रतिक्रिया), जिससे वह उड़ पाता है।"
    },
    {
        question: "प्रश्न 22. बल एक ________ राशि है।",
        answers: shuffle([
            { text: "अदिश", correct: false },
            { text: "सदिश", correct: true },
            { text: "विमाहीन", correct: false },
            { text: "मौलिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बल में परिमाण और दिशा दोनों होते हैं, इसलिए यह एक सदिश राशि है।"
    },
    {
        question: "प्रश्न 23. अपकेंद्री बल (Centrifugal force) एक ________ है।",
        answers: shuffle([
            { text: "वास्तविक बल", correct: false },
            { text: "छद्म बल (आभासी बल)", correct: true },
            { text: "प्रतिक्रिया बल", correct: false },
            { text: "नाभिकीय बल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक जड़त्वीय बल है जो केवल एक घूर्णन (त्वरित) निर्देश तंत्र में महसूस होता है।"
    },
    {
        question: "प्रश्न 24. किसी पिंड पर कार्य करने वाला आवेग उसके ________ में परिवर्तन के बराबर होता है।",
        answers: shuffle([
            { text: "बल", correct: false },
            { text: "गतिज ऊर्जा", correct: false },
            { text: "स्थितिज ऊर्जा", correct: false },
            { text: "रैखिक संवेग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह आवेग-संवेग प्रमेय का कथन है।"
    },
    {
        question: "प्रश्न 25. यदि कोई वस्तु संतुलन में है, तो इसका अर्थ है:",
        answers: shuffle([
            { text: "वस्तु स्थिर है।", correct: false },
            { text: "वस्तु एकसमान वेग से चल रही है।", correct: false },
            { text: "वस्तु पर शुद्ध बल शून्य है।", correct: true },
            { text: "वस्तु पर कोई बल नहीं लग रहा है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संतुलन की स्थिति का अर्थ है शून्य त्वरण, जो शून्य शुद्ध बल को इंगित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> वस्तु स्थिर हो भी सकती है और नहीं भी।"
    },
    {
        question: "प्रश्न 26. न्यूटन के नियमों का उपयोग करके किसकी गति का वर्णन नहीं किया जा सकता है?",
        answers: shuffle([
            { text: "एक ग्रह", correct: false },
            { text: "एक कार", correct: false },
            { text: "एक इलेक्ट्रॉन", correct: true },
            { text: "एक गेंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इलेक्ट्रॉन जैसे उप-परमाण्विक कणों की गति का वर्णन क्वांटम यांत्रिकी द्वारा किया जाता है, न कि चिरसम्मत यांत्रिकी द्वारा।"
    },
    {
        question: "प्रश्न 27. एक वस्तु का संवेग किस पर निर्भर नहीं करता है?",
        answers: shuffle([
            { text: "वस्तु के द्रव्यमान पर", correct: false },
            { text: "वस्तु के वेग पर", correct: false },
            { text: "वस्तु के त्वरण पर", correct: true },
            { text: "वस्तु की गति की दिशा पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संवेग केवल द्रव्यमान और वेग (p=mv) का एक फलन है।"
    },
    {
        question: "प्रश्न 28. कारों में सुरक्षा बेल्ट का उपयोग ________ के सिद्धांत पर आधारित है।",
        answers: shuffle([
            { text: "संवेग", correct: false },
            { text: "जड़त्व", correct: true },
            { text: "ऊर्जा", correct: false },
            { text: "बल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टक्कर के दौरान, सुरक्षा बेल्ट गति के जड़त्व के कारण शरीर को आगे बढ़ने से रोकती है, जिससे चोट लगने का खतरा कम हो जाता है।"
    },
    {
        question: "प्रश्न 29. 'द्रव्यमान' और 'भार' के बीच मुख्य अंतर यह है कि:",
        answers: shuffle([
            { text: "द्रव्यमान एक सदिश है, भार एक अदिश है।", correct: false },
            { text: "द्रव्यमान स्थिर रहता है, जबकि भार स्थान के अनुसार बदलता है।", correct: true },
            { text: "भार स्थिर रहता है, जबकि द्रव्यमान बदलता है।", correct: false },
            { text: "दोनों का मतलब एक ही है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्रव्यमान पदार्थ की मात्रा है (स्थिर), जबकि भार गुरुत्वाकर्षण बल (g पर निर्भर) है।"
    },
    {
        question: "प्रश्न 30. यदि किसी वस्तु पर लगाया गया बल शून्य है, तो उसका संवेग:",
        answers: shuffle([
            { text: "शून्य होगा", correct: false },
            { text: "बढ़ेगा", correct: false },
            { text: "घटेगा", correct: false },
            { text: "संरक्षित रहेगा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शून्य बल का अर्थ है संवेग में शून्य परिवर्तन, जिसका अर्थ है कि संवेग स्थिर या संरक्षित रहता है।"
    },
    {
        question: "प्रश्न 31. एक गोलाकार मोड़ पर मुड़ते समय, एक कार को आवश्यक अभिकेंद्रीय बल कहाँ से मिलता है?",
        answers: shuffle([
            { text: "इंजन से", correct: false },
            { text: "स्टीयरिंग व्हील से", correct: false },
            { text: "टायरों और सड़क के बीच घर्षण से", correct: true },
            { text: "हवा के प्रतिरोध से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण बल ही वह बल है जो कार को मोड़ पर बनाए रखने के लिए आवश्यक अभिकेंद्रीय बल प्रदान करता है।"
    },
    {
        question: "प्रश्न 32. न्यूटन का पहला नियम वास्तव में ________ का एक विशेष मामला है।",
        answers: shuffle([
            { text: "दूसरे नियम", correct: true },
            { text: "तीसरे नियम", correct: false },
            { text: "ऊर्जा संरक्षण", correct: false },
            { text: "संवेग संरक्षण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि दूसरे नियम (F=ma) में शुद्ध बल F को शून्य रखा जाए, तो त्वरण a शून्य हो जाता है, जो पहले नियम का कथन है।"
    },
    {
        question: "प्रश्न 33. एक भारी व्यक्ति और एक हल्के व्यक्ति को समान बल से धकेला जाता है। किसका त्वरण अधिक होगा?",
        answers: shuffle([
            { text: "भारी व्यक्ति का", correct: false },
            { text: "हल्के व्यक्ति का", correct: true },
            { text: "दोनों का समान होगा", correct: false },
            { text: "निर्धारित नहीं किया जा सकता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> a = F/m के अनुसार, समान बल के लिए, जिसका द्रव्यमान कम होगा, उसका त्वरण अधिक होगा।"
    },
    {
        question: "प्रश्न 34. जब हम कुएँ से पानी खींचते हैं और रस्सी टूट जाती है, तो हम पीछे की ओर क्यों गिर जाते हैं?",
        answers: shuffle([
            { text: "a) रस्सी के तनाव के अचानक समाप्त हो जाने के कारण", correct: false },
            { text: "b) न्यूटन के तीसरे नियम के कारण", correct: false },
            { text: "c) जड़त्व के कारण", correct: false },
            { text: "(a) और (b) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हम रस्सी पर पीछे की ओर बल लगाते हैं (क्रिया), और रस्सी हम पर आगे की ओर बल लगाती है (प्रतिक्रिया)।<br><br><i class='fa-solid fa-angles-right icon'></i> जब यह प्रतिक्रिया बल (तनाव) अचानक गायब हो जाता है, तो हमारे द्वारा लगाया गया असंतुलित बल हमें पीछे की ओर गिरा देता।"
    },
    {
        question: "प्रश्न 35. किसी पिंड का वह गुण जो उसकी गति की अवस्था में किसी भी परिवर्तन का विरोध करता है, कहलाता है:",
        answers: shuffle([
            { text: "भार", correct: false },
            { text: "संवेग", correct: false },
            { text: "जड़त्व", correct: true },
            { text: "बल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह जड़त्व की सटीक परिभाषा है।"
    },
    {
        question: "प्रश्न 36. एक मेज पर रखी किताब पर, मेज द्वारा लगाया गया अभिलंब बल, किताब के भार के लिए ________ बल है।",
        answers: shuffle([
            { text: "क्रिया", correct: false },
            { text: "प्रतिक्रिया", correct: false },
            { text: "संतुलित", correct: false },
            { text: "यह एक क्रिया-प्रतिक्रिया युग्म नहीं है", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किताब के भार (पृथ्वी द्वारा किताब पर बल) का प्रतिक्रिया बल किताब द्वारा पृथ्वी पर लगाया गया बल है।<br><br><i class='fa-solid fa-angles-right icon'></i> मेज द्वारा लगाया गया अभिलंब बल भार को संतुलित करता है, लेकिन यह उसका प्रतिक्रिया बल नहीं है।"
    },
    {
        question: "प्रश्न 37. यदि किसी वस्तु का वेग समय के साथ एकसमान रूप से बढ़ता है, तो उस पर लगने वाला बल:",
        answers: shuffle([
            { text: "शून्य है", correct: false },
            { text: "स्थिर है", correct: true },
            { text: "बढ़ रहा है", correct: false },
            { text: "घट रहा है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एकसमान रूप से बढ़ते वेग का अर्थ है एकसमान त्वरण।<br><br><i class='fa-solid fa-angles-right icon'></i> F=ma के अनुसार, यदि त्वरण स्थिर है, तो बल भी स्थिर होगा।"
    },
    {
        question: "प्रश्न 38. न्यूटन का गुरुत्वाकर्षण का नियम और गति का तीसरा नियम एक दूसरे से कैसे संबंधित हैं?",
        answers: shuffle([
            { text: "वे एक ही हैं।", correct: false },
            { text: "गुरुत्वाकर्षण बल एक क्रिया-प्रतिक्रिया युग्म बनाते हैं।", correct: true },
            { text: "वे असंबद्ध हैं।", correct: false },
            { text: "गुरुत्वाकर्षण तीसरे नियम का अपवाद है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी चंद्रमा को जिस बल से खींचती है, चंद्रमा भी पृथ्वी को उसी बल से खींचता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह न्यूटन के तीसरे नियम का एक उदाहरण है।"
    },
    {
        question: "प्रश्न 39. एक गेंद फर्श पर उछलती है। इस प्रक्रिया के दौरान, गेंद का संवेग:",
        answers: shuffle([
            { text: "संरक्षित रहता है", correct: false },
            { text: "बदल जाता है", correct: true },
            { text: "शून्य हो जाता है", correct: false },
            { text: "अनंत हो जाता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फर्श से टकराने पर गेंद की दिशा और वेग का परिमाण बदल जाता है, जिससे उसका संवेग भी बदल जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह परिवर्तन फर्श द्वारा लगाए गए आवेगी बल के कारण होता है।"
    },
    {
        question: "प्रश्न 40. किसी वस्तु पर नेट (शुद्ध) बल शून्य होने पर भी उसमें क्या हो सकता है?",
        answers: shuffle([
            { text: "त्वरण", correct: false },
            { text: "वेग", correct: true },
            { text: "संवेग में परिवर्तन", correct: false },
            { text: "आवेग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि शुद्ध बल शून्य है, तो त्वरण शून्य होगा, लेकिन वस्तु एक स्थिर (अशून्य) वेग से गतिमान हो सकती है।"
    },
    {
        question: "प्रश्न 41. \"बल\" की अवधारणा सबसे पहले किसके द्वारा दी गई थी?",
        answers: shuffle([
            { text: "अरस्तू", correct: false },
            { text: "गैलीलियो", correct: false },
            { text: "न्यूटन", correct: true },
            { text: "आर्किमिडीज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हालांकि अरस्तू और गैलीलियो ने गति का अध्ययन किया, लेकिन बल की एक सटीक, गणितीय परिभाषा और गति से उसका संबंध न्यूटन ने अपने तीन नियमों के माध्यम से स्थापित किया।"
    },
    {
        question: "प्रश्न 42. यदि आप एक चलती ट्रेन में एक गेंद को सीधे ऊपर की ओर उछालते हैं, तो गेंद कहाँ गिरेगी (वायु प्रतिरोध को नगण्य मानें)?",
        answers: shuffle([
            { text: "आपके हाथों में", correct: true },
            { text: "आपके पीछे", correct: false },
            { text: "आपके आगे", correct: false },
            { text: "ट्रेन के बाहर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गति के जड़त्व के कारण, गेंद में भी आपके और ट्रेन के समान क्षैतिज वेग होता है, इसलिए वह सीधे नीचे आपके हाथों में आती है।"
    },
    {
        question: "प्रश्न 43. बल की SI इकाई 'न्यूटन' को मूल इकाइयों में कैसे व्यक्त किया जा सकता है?",
        answers: shuffle([
            { text: "kg⋅m/s", correct: false },
            { text: "kg⋅m²/s", correct: false },
            { text: "kg⋅m/s²", correct: true },
            { text: "kg⋅m²/s²", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि F=ma है, 1 न्यूटन = 1 kg × 1 m/s² = 1 kg⋅m/s²।"
    },
    {
        question: "प्रश्न 44. एक लिफ्ट में किसी वस्तु का आभासी भार शून्य कब होता है?",
        answers: shuffle([
            { text: "जब लिफ्ट स्थिर हो", correct: false },
            { text: "जब लिफ्ट एकसमान वेग से चल रही हो", correct: false },
            { text: "जब लिफ्ट मुक्त रूप से गिर रही हो", correct: true },
            { text: "जब लिफ्ट ऊपर की ओर त्वरित हो रही हो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुक्त पतन की स्थिति में, लिफ्ट का त्वरण g के बराबर होता है, और आभासी भार R = m(g-a) = m(g-g) = 0 हो जाता है।"
    },
    {
        question: "प्रश्न 45. न्यूटन के नियम किसके अध्ययन के लिए मौलिक हैं?",
        answers: shuffle([
            { text: "रसायन शास्त्र", correct: false },
            { text: "जीव विज्ञान", correct: false },
            { text: "खगोल विज्ञान", correct: false },
            { text: "यांत्रिकी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन के नियम चिरसम्मत यांत्रिकी की आधारशिला हैं, जो बलों और गति का अध्ययन है।"
    },
    {
        question: "प्रश्न 46. किसी वस्तु पर लगाया गया बल उसके संवेग को बदल देता है। यह कथन न्यूटन के ________ नियम का एक और रूप है।",
        answers: shuffle([
            { text: "पहले", correct: false },
            { text: "दूसरे", correct: true },
            { text: "तीसरे", correct: false },
            { text: "पहले और तीसरे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन का दूसरा नियम मूल रूप से यही बताता है कि बल संवेग में परिवर्तन की दर के बराबर है।"
    },
    {
        question: "प्रश्न 47. एक धावक एक वृत्ताकार पथ पर एकसमान चाल से दौड़ रहा है। उस पर लगने वाला बल:",
        answers: shuffle([
            { text: "शून्य है", correct: false },
            { text: "पथ के केंद्र की ओर है", correct: true },
            { text: "पथ की स्पर्शरेखा के अनुदिश है", correct: false },
            { text: "पथ के केंद्र से दूर है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एकसमान वृत्तीय गति के लिए, एक अभिकेंद्रीय बल आवश्यक है जो उसे लगातार केंद्र की ओर त्वरित करता है।"
    },
    {
        question: "प्रश्न 48. यदि कोई बल किसी वस्तु की गति की दिशा के लंबवत कार्य करता है, तो वस्तु की:",
        answers: shuffle([
            { text: "चाल बदल जाएगी", correct: false },
            { text: "गतिज ऊर्जा बदल जाएगी", correct: false },
            { text: "दिशा बदल जाएगी", correct: true },
            { text: "चाल और दिशा दोनों स्थिर रहेंगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लंबवत बल कोई कार्य नहीं करता है, इसलिए गतिज ऊर्जा (और चाल) नहीं बदलती है, लेकिन यह वेग की दिशा को बदल देता है।"
    },
    {
        question: "प्रश्न 49. एक कीड़ा एक बस की विंडस्क्रीन से टकराता है। टक्कर के दौरान, बल का परिमाण:",
        answers: shuffle([
            { text: "बस द्वारा कीड़े पर अधिक होता है", correct: false },
            { text: "कीड़े द्वारा बस पर अधिक होता है", correct: false },
            { text: "दोनों पर समान होता है", correct: true },
            { text: "शून्य होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन के तीसरे नियम के अनुसार, क्रिया और प्रतिक्रिया बल हमेशा परिमाण में बराबर होते हैं, चाहे वस्तुओं का आकार या द्रव्यमान कुछ भी हो।"
    },
    {
        question: "प्रश्न 50. ऊपर फेंकी गई एक गेंद का त्वरण उच्चतम बिंदु पर:",
        answers: shuffle([
            { text: "शून्य होता है", correct: false },
            { text: "ऊपर की ओर होता है", correct: false },
            { text: "नीचे की ओर होता है", correct: true },
            { text: "दिशा बदलता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उच्चतम बिंदु सहित पूरी उड़ान के दौरान गेंद पर केवल गुरुत्वाकर्षण बल नीचे की ओर कार्य करता है, इसलिए त्वरण भी नीचे की ओर होता है।"
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