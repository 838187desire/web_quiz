const questions = [
    {
        topHeading: "व्यतिकरण पर आधारित 50 MCQs,part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. जब समान आवृत्ति की दो प्रकाश तरंगें किसी माध्यम में एक ही दिशा में गमन करती हैं, तो उनके अध्यारोपण के फलस्वरूप प्रकाश की तीव्रता में परिवर्तन होने की घटना क्या कहलाती है?",
        answers: shuffle([
            { text: "प्रकाश का अपवर्तन", correct: false },
            { text: "प्रकाश का विवर्तन", correct: false },
            { text: "प्रकाश का व्यतिकरण", correct: true },
            { text: "प्रकाश का ध्रुवण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यतिकरण वह घटना है जिसमें दो या दो से अधिक तरंगों के अध्यारोपण के कारण कुछ बिंदुओं पर परिणामी तीव्रता अधिकतम और कुछ पर न्यूनतम हो जाती है"
    },
    {
        question: "प्रश्न 2. प्रकाश के व्यतिकरण के लिए किस प्रकार के प्रकाश स्रोतों की आवश्यकता होती है?",
        answers: shuffle([
            { text: "कला-असंबद्ध स्रोत", correct: false },
            { text: "कला-संबद्ध स्रोत", correct: true },
            { text: "श्वेत प्रकाश स्रोत", correct: false },
            { text: "बहुत तीव्र स्रोत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्थायी व्यतिकरण प्रतिरूप प्राप्त करने के लिए, दोनों प्रकाश स्रोतों की आवृत्ति समान होनी चाहिए और उनके बीच एक नियत कलान्तर होना चाहिए, ऐसे स्रोतों को कला-संबद्ध (coherent) स्रोत कहते हैं"
    },
    {
        question: "प्रश्न 3. संपोषी व्यतिकरण (Constructive Interference) में, दो तरंगों के अध्यारोपण से परिणामी तीव्रता कैसी होती है?",
        answers: shuffle([
            { text: "न्यूनतम", correct: false },
            { text: "अधिकतम", correct: true },
            { text: "शून्य", correct: false },
            { text: "अपरिवर्तित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संपोषी व्यतिकरण में, दोनों तरंगें समान कला में मिलती हैं, जिससे उनके आयाम जुड़ जाते हैं और परिणामी तीव्रता अधिकतम हो जाती है"
    },
    {
        question: "प्रश्न 4. विनाशी व्यतिकरण (Destructive Interference) में, दो तरंगों के अध्यारोपण से परिणामी तीव्रता कैसी होती है?",
        answers: shuffle([
            { text: "न्यूनतम", correct: true },
            { text: "अधिकतम", correct: false },
            { text: "अनंत", correct: false },
            { text: "अपरिवर्तित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विनाशी व्यतिकरण में, दोनों तरंगें विपरीत कला में मिलती हैं, जिससे वे एक-दूसरे के प्रभाव को निरस्त कर देती हैं और परिणामी तीव्रता न्यूनतम (या शून्य) हो जाती है"
    },
    {
        question: "प्रश्न 5. यंग के द्वि-स्लिट प्रयोग में पर्दे पर बनने वाली चमकीली पट्टियों को क्या कहते हैं?",
        answers: shuffle([
            { text: "निम्निष्ठ", correct: false },
            { text: "दीप्त फ्रिंजें", correct: true },
            { text: "अदीप्त फ्रिंजें", correct: false },
            { text: "स्पेक्ट्रम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जिन स्थानों पर संपोषी व्यतिकरण होता है, वहाँ प्रकाश की तीव्रता अधिकतम होती है, और इन चमकीली पट्टियों को दीप्त फ्रिंजें (Bright Fringes) कहते हैं"
    },
    {
        question: "प्रश्न 6. यंग के द्वि-स्लिट प्रयोग में पर्दे पर बनने वाली काली पट्टियों को क्या कहते हैं?",
        answers: shuffle([
            { text: "उच्चिष्ठ", correct: false },
            { text: "दीप्त फ्रिंजें", correct: false },
            { text: "अदीप्त फ्रिंजें", correct: true },
            { text: "वर्णक्रम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जिन स्थानों पर विनाशी व्यतिकरण होता है, वहाँ प्रकाश की तीव्रता न्यूनतम होती है, और इन काली पट्टियों को अदीप्त फ्रिंजें (Dark Fringes) कहते हैं"
    },
    {
        question: "प्रश्न 7. पानी की सतह पर फैली तेल की पतली परत सूर्य के प्रकाश में रंगीन क्यों दिखाई देती है?",
        answers: shuffle([
            { text: "प्रकाश के प्रकीर्णन के कारण", correct: false },
            { text: "प्रकाश के विक्षेपण के कारण", correct: false },
            { text: "प्रकाश के व्यतिकरण के कारण", correct: true },
            { text: "प्रकाश के ध्रुवण के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तेल की परत की ऊपरी और निचली सतहों से परावर्तित प्रकाश तरंगों के बीच व्यतिकरण होता है, जिससे कुछ रंग प्रबलित होते हैं और कुछ निरस्त हो जाते हैं, और परत रंगीन दिखाई देती है"
    },
    {
        question: "प्रश्न 8. संपोषी व्यतिकरण के लिए तरंगों के बीच पथान्तर (path difference) कितना होना चाहिए?",
        answers: shuffle([
            { text: "तरंगदैर्ध्य का पूर्ण गुणज", correct: true },
            { text: "तरंगदैर्ध्य का विषम अर्ध-गुणज", correct: false },
            { text: "शून्य", correct: false },
            { text: "अनंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब पथान्तर nλ (जहाँ n=0, 1, 2,...) होता है, तो तरंगें समान कला में मिलती हैं और संपोषी व्यतिकरण होता है"
    },
    {
        question: "प्रश्न 9. विनाशी व्यतिकरण के लिए तरंगों के बीच पथान्तर कितना होना चाहिए?",
        answers: shuffle([
            { text: "तरंगदैर्ध्य का पूर्ण गुणज", correct: false },
            { text: "तरंगदैर्ध्य का विषम अर्ध-गुणज", correct: true },
            { text: "शून्य", correct: false },
            { text: "एक चौथाई तरंगदैर्ध्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब पथान्तर (n+1/2)λ (जहाँ n=0, 1, 2,...) होता है, तो तरंगें विपरीत कला में मिलती हैं और विनाशी व्यतिकरण होता है"
    },
    {
        question: "प्रश्न 10. साबुन का बुलबुला रंगीन क्यों दिखाई देता है?",
        answers: shuffle([
            { text: "साबुन के रंग के कारण", correct: false },
            { text: "प्रकाश के व्यतिकरण के कारण", correct: true },
            { text: "प्रकाश के अपवर्तन के कारण", correct: false },
            { text: "प्रकाश के विवर्तन के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> साबुन की पतली फिल्म की दोनों सतहों से परावर्तित प्रकाश किरणों के बीच होने वाले व्यतिकरण के कारण बुलबुला रंगीन दिखाई देता है"
    },
    {
        question: "प्रश्न 11. यंग के द्वि-स्लिट प्रयोग में, यदि स्लिटों के बीच की दूरी कम कर दी जाए, तो फ्रिंज की चौड़ाई पर क्या प्रभाव पड़ेगा?",
        answers: shuffle([
            { text: "घट जाएगी", correct: false },
            { text: "बढ़ जाएगी", correct: true },
            { text: "अपरिवर्तित रहेगी", correct: false },
            { text: "गायब हो जाएगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फ्रिंज की चौड़ाई स्लिटों के बीच की दूरी के व्युत्क्रमानुपाती होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> दूरी कम करने पर फ्रिंजें अधिक चौड़ी हो जाएंगी"
    },
    {
        question: "प्रश्न 12. यंग के द्वि-स्लिट प्रयोग में, यदि पर्दे को स्लिटों से दूर ले जाया जाए, तो फ्रिंज की चौड़ाई पर क्या प्रभाव पड़ेगा?",
        answers: shuffle([
            { text: "घट जाएगी", correct: false },
            { text: "बढ़ जाएगी", correct: true },
            { text: "अपरिवर्तित रहेगी", correct: false },
            { text: "शून्य हो जाएगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फ्रिंज की चौड़ाई स्लिटों और पर्दे के बीच की दूरी के सीधे समानुपाती होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> पर्दा दूर करने पर फ्रिंजें चौड़ी हो जाएंगी"
    },
    {
        question: "प्रश्न 13. यंग के द्वि-स्लिट प्रयोग में, यदि उपयोग किए गए प्रकाश का तरंगदैर्ध्य बढ़ा दिया जाए, तो फ्रिंज की चौड़ाई पर क्या प्रभाव पड़ेगा?",
        answers: shuffle([
            { text: "घट जाएगी", correct: false },
            { text: "बढ़ जाएगी", correct: true },
            { text: "अपरिवर्तित रहेगी", correct: false },
            { text: "यह तीव्रता पर निर्भर करेगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फ्रिंज की चौड़ाई प्रकाश के तरंगदैर्ध्य के सीधे समानुपाती होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> लंबे तरंगदैर्ध्य (जैसे लाल प्रकाश) से चौड़ी फ्रिंजें बनती हैं"
    },
    {
        question: "प्रश्न 14. \"कला-संबद्ध स्रोत\" वे स्रोत हैं जिनसे उत्पन्न तरंगों में...",
        answers: shuffle([
            { text: "समान आयाम होता है।", correct: false },
            { text: "समान तीव्रता होती है।", correct: false },
            { text: "समय के साथ एक नियत कलान्तर होता है।", correct: true },
            { text: "समान गति होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कला-संबद्ध होने के लिए समान आवृत्ति और नियत कलान्तर (phase difference) दो आवश्यक शर्तें हैं"
    },
    {
        question: "प्रश्न 15. क्या दो स्वतंत्र प्रकाश स्रोतों (जैसे दो बल्ब) से व्यतिकरण प्रतिरूप प्राप्त किया जा सकता है?",
        answers: shuffle([
            { text: "हाँ, आसानी से", correct: false },
            { text: "नहीं, क्योंकि वे कला-संबद्ध नहीं होते हैं।", correct: true },
            { text: "हाँ, यदि वे समान शक्ति के हों।", correct: false },
            { text: "हाँ, यदि वे एक ही रंग के हों।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्वतंत्र स्रोतों से प्रकाश उत्सर्जन परमाण्विक स्तर पर एक यादृच्छिक प्रक्रिया है, इसलिए उनके बीच कलान्तर लगातार बदलता रहता है और स्थायी व्यतिकरण संभव नहीं है"
    },
    {
        question: "प्रश्न 16. यंग के प्रयोग में कला-संबद्ध स्रोत कैसे प्राप्त किए जाते हैं?",
        answers: shuffle([
            { text: "दो अलग-अलग लेजर का उपयोग करके", correct: false },
            { text: "एक ही स्रोत से आने वाले प्रकाश को दो संकीर्ण स्लिटों से गुजारकर", correct: true },
            { text: "प्रकाश को फिल्टर करके", correct: false },
            { text: "प्रकाश को गर्म करके", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब एक ही तरंगाग्र को दो स्लिटों द्वारा विभाजित किया जाता है, तो दोनों स्लिट नए स्रोतों के रूप में कार्य करते हैं जो स्वतः कला-संबद्ध होते हैं"
    },
    {
        question: "प्रश्न 17. प्रकाश के व्यतिकरण की घटना किस सिद्धांत की पुष्टि करती है?",
        answers: shuffle([
            { text: "प्रकाश के कणिका सिद्धांत की", correct: false },
            { text: "प्रकाश के तरंग सिद्धांत की", correct: true },
            { text: "प्रकाश के क्वांटम सिद्धांत की", correct: false },
            { text: "प्रकाश के ऋजुरेखीय संचरण की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यतिकरण तरंगों का एक विशिष्ट गुण है, और यह घटना प्रकाश की तरंग प्रकृति के लिए एक मजबूत प्रमाण है"
    },
    {
        question: "प्रश्न 18. व्यतिकरण में ऊर्जा का क्या होता है?",
        answers: shuffle([
            { text: "ऊर्जा नष्ट हो जाती है।", correct: false },
            { text: "ऊर्जा उत्पन्न होती है।", correct: false },
            { text: "ऊर्जा का केवल पुनर्वितरण होता है।", correct: true },
            { text: "ऊर्जा अपरिवर्तित रहती है और समान रूप से वितरित होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यतिकरण ऊर्जा संरक्षण के नियम का पालन करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ऊर्जा विनाशी व्यतिकरण के क्षेत्रों से हटकर संपोषी व्यतिकरण के क्षेत्रों में केंद्रित हो जाती है, कुल ऊर्जा संरक्षित रहती है"
    },
    {
        question: "प्रश्न 19. यदि यंग का पूरा उपकरण पानी में डुबो दिया जाए, तो फ्रिंज की चौड़ाई...",
        answers: shuffle([
            { text: "बढ़ जाएगी।", correct: false },
            { text: "घट जाएगी।", correct: true },
            { text: "अपरिवर्तित रहेगी।", correct: false },
            { text: "अनंत हो जाएगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पानी में प्रकाश का तरंगदैर्ध्य हवा की तुलना में कम हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि फ्रिंज की चौड़ाई तरंगदैर्ध्य के समानुपाती होती है, इसलिए वह घट जाएगी"
    },
    {
        question: "प्रश्न 20. संपोषी व्यतिकरण के लिए तरंगों के बीच कलान्तर कितना होना चाहिए?",
        answers: shuffle([
            { text: "शून्य या पाई (π) का सम गुणज", correct: true },
            { text: "पाई (π) का विषम गुणज", correct: false },
            { text: "90 डिग्री", correct: false },
            { text: "45 डिग्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कलान्तर 0, 2π, 4π, ... होता है, तो तरंगें समान कला में होती हैं और संपोषी व्यतिकरण होता है"
    },
    {
        question: "प्रश्न 21. विनाशी व्यतिकरण के लिए तरंगों के बीच कलान्तर कितना होना चाहिए?",
        answers: shuffle([
            { text: "शून्य या 2π", correct: false },
            { text: "पाई (π) का विषम गुणज", correct: true },
            { text: "90 डिग्री", correct: false },
            { text: "360 डिग्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कलान्तर π, 3π, 5π, ... होता है, तो तरंगें विपरीत कला में होती हैं और विनाशी व्यतिकरण होता है"
    },
    {
        question: "प्रश्न 22. व्यतिकरण और विवर्तन में क्या समानता है?",
        answers: shuffle([
            { text: "दोनों प्रकाश के कणिका सिद्धांत पर आधारित हैं।", correct: false },
            { text: "दोनों में ऊर्जा का पुनर्वितरण होता है और वे तरंगों के अध्यारोपण पर आधारित हैं।", correct: true },
            { text: "दोनों में फ्रिंज की चौड़ाई हमेशा समान होती है।", correct: false },
            { text: "दोनों केवल ध्वनि तरंगों में होते हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विवर्तन अनिवार्य रूप से एक ही तरंगाग्र के अनंत कला-संबद्ध स्रोतों से आने वाली तरंगों का व्यतिकरण ही है"
    },
    {
        question: "प्रश्न 23. लॉयड का दर्पण प्रयोग किसका प्रदर्शन करने के लिए है?",
        answers: shuffle([
            { text: "प्रकाश का अपवर्तन", correct: false },
            { text: "प्रकाश का व्यतिकरण", correct: true },
            { text: "प्रकाश का ध्रुवण", correct: false },
            { text: "प्रकाश-विद्युत प्रभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस प्रयोग में, एक स्रोत और उसके दर्पण में बने आभासी प्रतिबिंब के बीच व्यतिकरण होता है, जो दो कला-संबद्ध स्रोतों के रूप में कार्य करते हैं"
    },
    {
        question: "प्रश्न 24. न्यूटन वलय (Newton's rings) प्रयोग में वलयों के बनने का क्या कारण है?",
        answers: shuffle([
            { text: "प्रकाश का विवर्तन", correct: false },
            { text: "प्रकाश का विक्षेपण", correct: false },
            { text: "एक समतल कांच की प्लेट और एक उत्तल लेंस के बीच फंसी हवा की फिल्म में व्यतिकरण", correct: true },
            { text: "प्रकाश का ध्रुवण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लेंस और प्लेट के बीच हवा की फिल्म की मोटाई लगातार बदलती रहती है, जिससे परावर्तित प्रकाश में संपोषी और विनाशी व्यतिकरण के कारण संकेंद्री वलय बनते हैं"
    },
    {
        question: "प्रश्न 25. न्यूटन वलय प्रयोग में, केंद्रीय वलय कैसा दिखाई देता है (परावर्तित प्रकाश में)?",
        answers: shuffle([
            { text: "दीप्त (चमकीला)", correct: false },
            { text: "अदीप्त (काला)", correct: true },
            { text: "रंगीन", correct: false },
            { text: "अदृश्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संपर्क बिंदु पर, पथान्तर शून्य होता है, लेकिन सघन माध्यम से परावर्तन के कारण एक अतिरिक्त π का कलान्तर उत्पन्न होता है, जिससे विनाशी व्यतिकरण होता है और केंद्र काला दिखाई देता है"
    },
    {
        question: "प्रश्न 26. यंग के द्वि-स्लिट प्रयोग में यदि एकवर्णी प्रकाश के स्थान पर श्वेत प्रकाश का उपयोग किया जाए, तो केंद्रीय फ्रिंज कैसी होगी?",
        answers: shuffle([
            { text: "काली", correct: false },
            { text: "लाल", correct: false },
            { text: "बैंगनी", correct: false },
            { text: "श्वेत", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केंद्रीय बिंदु पर, सभी रंगों के लिए पथान्तर शून्य होता है, इसलिए सभी रंगों का संपोषी व्यतिकरण होता है और वे मिलकर एक श्वेत फ्रिंज बनाते हैं"
    },
    {
        question: "प्रश्न 27. श्वेत प्रकाश का उपयोग करने पर यंग के प्रयोग में केंद्रीय फ्रिंज के दोनों ओर की फ्रिंजें कैसी होंगी?",
        answers: shuffle([
            { text: "वे भी श्वेत होंगी।", correct: false },
            { text: "वे रंगीन होंगी।", correct: true },
            { text: "वे काली होंगी।", correct: false },
            { text: "वे अदृश्य होंगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केंद्रीय फ्रिंज के अलावा अन्य बिंदुओं पर, विभिन्न रंगों के लिए संपोषी और विनाशी व्यतिकरण की शर्तें अलग-अलग स्थानों पर पूरी होती हैं, जिससे रंगीन फ्रिंजों का एक क्रम बनता है"
    },
    {
        question: "प्रश्न 28. व्यतिकरणमापी (Interferometer) एक उपकरण है जिसका उपयोग...",
        answers: shuffle([
            { text: "प्रकाश की तीव्रता मापने के लिए किया जाता है।", correct: false },
            { text: "प्रकाश का रंग निर्धारित करने के लिए किया जाता है।", correct: false },
            { text: "तरंगदैर्ध्य या छोटी दूरियों के बहुत सटीक मापन के लिए किया जाता है।", correct: true },
            { text: "प्रकाश की गति मापने के लिए किया जाता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माइकल्सन व्यतिकरणमापी जैसे उपकरण व्यतिकरण फ्रिंजों के विस्थापन का उपयोग करके तरंगदैर्ध्य या लंबाई में बहुत छोटे परिवर्तनों को माप सकते हैं"
    },
    {
        question: "प्रश्न 29. गैर-परावर्तक (anti-reflective) कोटिंग किस सिद्धांत पर काम करती है?",
        answers: shuffle([
            { text: "प्रकाश का अवशोषण", correct: false },
            { text: "प्रकाश का प्रकीर्णन", correct: false },
            { text: "विनाशी व्यतिकरण", correct: true },
            { text: "संपोषी व्यतिकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लेंस पर एक पतली फिल्म की कोटिंग की जाती है जिसकी मोटाई इस प्रकार चुनी जाती है कि कोटिंग की ऊपरी और निचली सतह से परावर्तित प्रकाश किरणें विनाशी व्यतिकरण करें, जिससे परावर्तन कम हो जाता है"
    },
    {
        question: "प्रश्न 30. होलोग्राफी में एक त्रि-आयामी (3D) छवि को रिकॉर्ड करने और पुनर्निर्मित करने के लिए किस घटना का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "केवल अपवर्तन", correct: false },
            { text: "केवल परावर्तन", correct: false },
            { text: "व्यतिकरण और विवर्तन", correct: true },
            { text: "केवल ध्रुवण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> होलोग्राम एक वस्तु से आने वाली प्रकाश तरंगों और एक संदर्भ तरंग के बीच के व्यतिकरण प्रतिरूप को रिकॉर्ड करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रतिरूप को फिर से प्रकाशित करने पर विवर्तन द्वारा मूल वस्तु की 3D छवि बनती है"
    },
    {
        question: "प्रश्न 31. व्यतिकरण के लिए तरंगों का आयाम कैसा होना चाहिए?",
        answers: shuffle([
            { text: "बिल्कुल शून्य", correct: false },
            { text: "एक दूसरे से बहुत भिन्न", correct: false },
            { text: "लगभग बराबर", correct: true },
            { text: "आयाम का कोई प्रभाव नहीं पड़ता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि आयाम लगभग बराबर हैं, तो विनाशी व्यतिकरण के दौरान तीव्रता लगभग शून्य हो जाएगी, जिससे फ्रिंजों के बीच कंट्रास्ट अधिकतम होगा और वे स्पष्ट दिखाई देंगी"
    },
    {
        question: "प्रश्न 32. दो कला-संबद्ध स्रोतों से निकलने वाली तरंगों की आवृत्तियाँ...",
        answers: shuffle([
            { text: "भिन्न होनी चाहिए।", correct: false },
            { text: "समान होनी चाहिए।", correct: true },
            { text: "एक दूसरे की दोगुनी होनी चाहिए।", correct: false },
            { text: "आवृत्ति का कोई महत्व नहीं है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि आवृत्तियाँ भिन्न हैं, तो उनके बीच कलान्तर समय के साथ लगातार बदलेगा और एक स्थायी व्यतिकरण प्रतिरूप नहीं बनेगा।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कला-संबद्धता की एक बुनियादी शर्त है"
    },
    {
        question: "प्रश्न 33. फ्रेनेल का द्वि-प्रिज्म प्रयोग किसका एक संशोधन है?",
        answers: shuffle([
            { text: "न्यूटन वलय प्रयोग का", correct: false },
            { text: "माइकल्सन व्यतिकरणमापी का", correct: false },
            { text: "यंग के द्वि-स्लिट प्रयोग का", correct: true },
            { text: "फैब्री-पेरोट व्यतिकरणमापी का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसमें दो स्लिटों के बजाय, एक बहुत कम अपवर्तक कोण वाले प्रिज्म का उपयोग करके एक ही स्रोत से दो आभासी कला-संबद्ध स्रोत बनाए जाते हैं"
    },
    {
        question: "प्रश्न 34. पतली फिल्म के रंग किसकी मोटाई पर निर्भर करते हैं?",
        answers: shuffle([
            { text: "फिल्म की मोटाई पर", correct: false },
            { text: "देखने के कोण पर", correct: false },
            { text: "आपतित प्रकाश के तरंगदैर्ध्य पर", correct: false },
            { text: "ये सभी पर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी विशेष रंग के लिए संपोषी या विनाशी व्यतिकरण की शर्त फिल्म की मोटाई, देखने के कोण और प्रकाश के तरंगदैर्ध्य, इन तीनों कारकों पर निर्भर करती है"
    },
    {
        question: "प्रश्न 35. व्यतिकरण फ्रिंजों का आकार कैसा होता है?",
        answers: shuffle([
            { text: "यह स्रोतों के आकार पर निर्भर करता है।", correct: true },
            { text: "यह हमेशा वृत्ताकार होता है।", correct: false },
            { text: "यह हमेशा सीधी रेखा होता है।", correct: false },
            { text: "यह कभी नहीं बनता।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि स्रोत बिंदु स्रोत हैं (जैसे यंग के प्रयोग में स्लिट), तो फ्रिंजें अतिपरवलयाकार होती हैं (जो पर्दे पर लगभग सीधी रेखाएं दिखती हैं)।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि स्रोत रैखिक है, तो फ्रिंजें सीधी रेखाएं होती हैं"
    },
    {
        question: "प्रश्न 36. यदि व्यतिकरण करने वाली दो तरंगों की तीव्रताएँ बराबर हैं, तो परिणामी अधिकतम तीव्रता कितनी होगी?",
        answers: shuffle([
            { text: "प्रत्येक की तीव्रता के बराबर", correct: false },
            { text: "प्रत्येक की तीव्रता का दोगुना", correct: false },
            { text: "प्रत्येक की तीव्रता का चार गुना", correct: true },
            { text: "शून्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तीव्रता आयाम के वर्ग के समानुपाती होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> संपोषी व्यतिकरण में, आयाम जुड़ जाते हैं (A+A = 2A), इसलिए तीव्रता (2A)² = 4A² हो जाती है, जो मूल तीव्रता (A²) का चार गुना है"
    },
    {
        question: "प्रश्न 37. \"अध्यारोपण का सिद्धांत\" क्या कहता है?",
        answers: shuffle([
            { text: "तरंगें हमेशा सीधी रेखा में चलती हैं।", correct: false },
            { text: "जब दो या दो से अधिक तरंगें एक बिंदु पर मिलती हैं, तो परिणामी विस्थापन प्रत्येक तरंग के व्यक्तिगत विस्थापनों का सदिश योग होता है।", correct: true },
            { text: "प्रत्येक क्रिया की समान और विपरीत प्रतिक्रिया होती है।", correct: false },
            { text: "ऊर्जा को न तो बनाया जा सकता है और न ही नष्ट किया जा सकता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यही सिद्धांत व्यतिकरण और विवर्तन जैसी घटनाओं का आधार है"
    },
    {
        question: "प्रश्न 38. व्यतिकरण की घटना का प्रदर्शन किसने सबसे पहले किया था?",
        answers: shuffle([
            { text: "आइजैक न्यूटन", correct: false },
            { text: "क्रिस्टियान हाइगेन्स", correct: false },
            { text: "थॉमस यंग", correct: true },
            { text: "अल्बर्ट आइंस्टीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थॉमस यंग ने 1801 में अपने प्रसिद्ध द्वि-स्लिट प्रयोग के माध्यम से प्रकाश के व्यतिकरण का निर्णायक रूप से प्रदर्शन किया, जिसने प्रकाश की तरंग प्रकृति को स्थापित किया"
    },
    {
        question: "प्रश्न 39. प्रकाश तरंगें किस प्रकार की तरंगें हैं?",
        answers: shuffle([
            { text: "अनुदैर्ध्य तरंगें", correct: false },
            { text: "अनुप्रस्थ तरंगें", correct: true },
            { text: "यांत्रिक तरंगें", correct: false },
            { text: "दाब तरंगें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश तरंगें विद्युत-चुंबकीय तरंगें हैं जिनमें विद्युत और चुंबकीय क्षेत्र के कंपन तरंग संचरण की दिशा के लंबवत होते हैं"
    },
    {
        question: "प्रश्न 40. यंग के प्रयोग में, यदि एक स्लिट के सामने एक पतली पारदर्शी प्लेट रख दी जाए, तो क्या होगा?",
        answers: shuffle([
            { text: "फ्रिंजें गायब हो जाएंगी।", correct: false },
            { text: "पूरा व्यतिकरण प्रतिरूप उसी दिशा में विस्थापित हो जाएगा।", correct: true },
            { text: "फ्रिंज की चौड़ाई बढ़ जाएगी।", correct: false },
            { text: "फ्रिंज की चौड़ाई घट जाएगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्लेट उस स्लिट से आने वाले प्रकाश के पथ में एक अतिरिक्त पथान्तर उत्पन्न कर देती है, जिससे पूरा फ्रिंज पैटर्न विस्थापित हो जाता है"
    },
    {
        question: "प्रश्न 41. व्यतिकरण में, अदीप्त फ्रिंजों पर प्रकाश ऊर्जा कहाँ चली जाती है?",
        answers: shuffle([
            { text: "वह ऊष्मा में बदल जाती है।", correct: false },
            { text: "वह दीप्त फ्रिंजों पर पुनर्वितरित हो जाती है।", correct: true },
            { text: "वह अवशोषित हो जाती है।", correct: false },
            { text: "वह परावर्तित हो जाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊर्जा संरक्षण के नियम के अनुसार, ऊर्जा नष्ट नहीं होती है, बल्कि उन क्षेत्रों से स्थानांतरित हो जाती है जहाँ विनाशी व्यतिकरण होता है"
    },
    {
        question: "प्रश्न 42. \"स्थानिक कला-संबद्धता\" (Spatial Coherence) का क्या अर्थ है?",
        answers: shuffle([
            { text: "एक ही बिंदु पर समय के साथ कलान्तर का नियत रहना।", correct: false },
            { text: "एक ही समय पर तरंगाग्र के विभिन्न बिंदुओं के बीच एक निश्चित कला संबंध होना।", correct: true },
            { text: "प्रकाश का एकवर्णी होना।", correct: false },
            { text: "प्रकाश का ध्रुवित होना।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह गुण व्यतिकरण के लिए आवश्यक है जहाँ एक तरंगाग्र को विभाजित किया जाता है, जैसे कि यंग के प्रयोग में"
    },
    {
        question: "प्रश्न 43. लेजर प्रकाश अत्यधिक कला-संबद्ध क्यों होता है?",
        answers: shuffle([
            { text: "क्योंकि यह बहुत तीव्र होता है।", correct: false },
            { text: "क्योंकि यह उद्दीप्त उत्सर्जन की प्रक्रिया द्वारा उत्पन्न होता है, जिसमें सभी फोटॉन एक ही कला में होते हैं।", correct: true },
            { text: "क्योंकि यह एकवर्णी होता है।", correct: false },
            { text: "क्योंकि इसकी किरण पुंज संकीर्ण होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लेजर की उच्च कला-संबद्धता ही इसे होलोग्राफी और व्यतिकरणमापी जैसे अनुप्रयोगों के लिए आदर्श बनाती है"
    },
    {
        question: "प्रश्न 44. दो तरंगों का पथान्तर, उनके कलान्तर से किस प्रकार संबंधित है?",
        answers: shuffle([
            { text: "वे सीधे समानुपाती होते हैं।", correct: true },
            { text: "वे व्युत्क्रमानुपाती होते हैं।", correct: false },
            { text: "उनमें कोई संबंध नहीं है।", correct: false },
            { text: "वे हमेशा बराबर होते हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कलान्तर = (2π/λ) × पथान्तर।<br><br><i class='fa-solid fa-angles-right icon'></i> यह संबंध दर्शाता है कि दोनों एक दूसरे के सीधे समानुपाती हैं"
    },
    {
        question: "प्रश्न 45. यंग के द्वि-स्लिट प्रयोग में फ्रिंजों की दृश्यता (visibility) सबसे अच्छी कब होती है?",
        answers: shuffle([
            { text: "जब दोनों स्लिटों से आने वाले प्रकाश की तीव्रताएँ बराबर हों।", correct: true },
            { text: "जब एक स्लिट से तीव्रता दोगुनी हो।", correct: false },
            { text: "जब स्रोत एकवर्णी न हो।", correct: false },
            { text: "जब स्लिटें बहुत चौड़ी हों।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब तीव्रताएँ बराबर होती हैं, तो अदीप्त फ्रिंजों पर तीव्रता लगभग शून्य होती है, जिससे दीप्त और अदीप्त फ्रिंजों के बीच अधिकतम कंट्रास्ट होता है"
    },
    {
        question: "प्रश्न 46. यदि एक पतली फिल्म (जैसे साबुन का बुलबुला) ऊपर से नीचे की ओर मोटी हो रही है, तो व्यतिकरण फ्रिंजें कैसी दिखाई देंगी?",
        answers: shuffle([
            { text: "संकेंद्री वृत्त", correct: false },
            { text: "ऊर्ध्वाधर सीधी रेखाएं", correct: false },
            { text: "क्षैतिज सीधी रेखाएं", correct: true },
            { text: "कोई फ्रिंज नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समान मोटाई के बिंदु क्षैतिज रेखाएं बनाएंगे, इसलिए संपोषी और विनाशी व्यतिकरण की शर्तें भी क्षैतिज पट्टियों के रूप में दिखाई देंगी"
    },
    {
        question: "प्रश्न 47. एक ही तरंग से उत्पन्न दो तरंगों का व्यतिकरण क्या कहलाता है?",
        answers: shuffle([
            { text: "a) तरंगाग्र के विभाजन द्वारा व्यतिकरण", correct: false },
            { text: "b) आयाम के विभाजन द्वारा व्यतिकरण", correct: false },
            { text: "(a) और (b) दोनों", correct: true },
            { text: "यह संभव नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यंग का प्रयोग तरंगाग्र के विभाजन का उदाहरण है, जबकि पतली फिल्मों में व्यतिकरण आयाम के विभाजन (एक हिस्सा परावर्तित, एक हिस्सा अपवर्तित) का उदाहरण है"
    },
    {
        question: "प्रश्न 48. \"तरंगाग्र\" (Wavefront) क्या है?",
        answers: shuffle([
            { text: "एक तरंग का उच्चतम बिंदु", correct: false },
            { text: "एक तरंग का निम्नतम बिंदु", correct: false },
            { text: "समान कला में कंपन करने वाले सभी बिंदुओं का बिंदुपथ", correct: true },
            { text: "तरंग द्वारा तय की गई दूरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक बिंदु स्रोत के लिए तरंगाग्र गोलीय होते हैं, और बहुत दूर स्थित स्रोत के लिए वे समतल होते हैं"
    },
    {
        question: "प्रश्न 49. माइकल्सन व्यतिकरणमापी में फ्रिंजें कैसे उत्पन्न होती हैं?",
        answers: shuffle([
            { text: "एक ही स्रोत से निकली दो किरणों के बीच पथान्तर उत्पन्न करके, जिन्हें दो अलग-अलग दर्पणों से परावर्तित किया जाता है।", correct: true },
            { text: "दो अलग-अलग स्रोतों का उपयोग करके।", correct: false },
            { text: "प्रकाश को प्रिज्म से गुजारकर।", correct: false },
            { text: "प्रकाश को एक स्लिट से गुजारकर।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह आयाम के विभाजन द्वारा व्यतिकरण का एक उत्कृष्ट उदाहरण है और इसका उपयोग बहुत सटीक माप के लिए किया जाता है"
    },
    {
        question: "प्रश्न 50. व्यतिकरण प्रतिरूप में सभी फ्रिंजों की चौड़ाई...",
        answers: shuffle([
            { text: "हमेशा अलग-अलग होती है।", correct: false },
            { text: "समान होती है।", correct: true },
            { text: "केंद्र में अधिकतम होती है।", correct: false },
            { text: "यह प्रकाश के रंग पर निर्भर करता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यंग के द्वि-स्लिट प्रयोग में, दीप्त और अदीप्त सभी फ्रिंजों की रैखिक चौड़ाई समान होती है (विवर्तन के विपरीत)"
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