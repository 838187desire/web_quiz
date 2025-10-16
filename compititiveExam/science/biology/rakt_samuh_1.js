const questions = [
    {
        topHeading: "रक्त समूह पर आधारित 35 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. मानव रक्त समूहों (ABO system) की खोज किसने की थी?",
        answers: shuffle([
            { text: "विलियम हार्वे", correct: false },
            { text: "रॉबर्ट कोच", correct: false },
            { text: "कार्ल लैंडस्टीनर", correct: true },
            { text: "लुई पाश्चर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑस्ट्रियाई वैज्ञानिक कार्ल लैंडस्टीनर ने वर्ष 1901 में A, B, और O रक्त समूहों की खोज की थी, जिसके लिए उन्हें 1930 में नोबेल पुरस्कार से सम्मानित किया गया।"
    },
    {
        question: "प्रश्न 2. \"सार्वभौमिक दाता\" (Universal Donor) किस रक्त समूह को कहा जाता है?",
        answers: shuffle([
            { text: "A", correct: false },
            { text: "B", correct: false },
            { text: "AB", correct: false },
            { text: "O", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रक्त समूह O की लाल रक्त कोशिकाओं (RBC) पर कोई A या B एंटीजन नहीं होता है, इसलिए यह किसी भी रक्त समूह के व्यक्ति को बिना किसी प्रतिक्रिया के दिया जा सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> विशेष रूप से O-negative को सार्वभौमिक दाता माना जाता है।"
    },
    {
        question: "प्रश्न 3. \"सार्वभौमिक प्राप्तकर्ता\" (Universal Recipient) किस रक्त समूह को कहा जाता है?",
        answers: shuffle([
            { text: "A", correct: false },
            { text: "AB", correct: true },
            { text: "B", correct: false },
            { text: "O", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रक्त समूह AB के प्लाज्मा में कोई anti-A या anti-B एंटीबॉडी नहीं होती है, इसलिए यह किसी भी रक्त समूह से रक्त प्राप्त कर सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> विशेष रूप से AB-positive को सार्वभौमिक प्राप्तकर्ता माना जाता है।"
    },
    {
        question: "प्रश्न 4. रक्त समूह का निर्धारण किसकी उपस्थिति के आधार पर किया जाता है?",
        answers: shuffle([
            { text: "प्लाज्मा में एंटीबॉडी", correct: false },
            { text: "लाल रक्त कोशिकाओं (RBC) पर एंटीजन", correct: true },
            { text: "श्वेत रक्त कोशिकाओं (WBC) की संख्या", correct: false },
            { text: "प्लेटलेट्स की संरचना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी व्यक्ति का रक्त समूह उसकी लाल रक्त कोशिकाओं की सतह पर मौजूद एंटीजन (या प्रतिजन) नामक प्रोटीन या कार्बोहाइड्रेट की उपस्थिति या अनुपस्थिति से निर्धारित होता है।"
    },
    {
        question: "प्रश्न 5. रक्त समूह A वाले व्यक्ति की लाल रक्त कोशिकाओं पर कौन सा एंटीजन होता है?",
        answers: shuffle([
            { text: "एंटीजन B", correct: false },
            { text: "एंटीजन A", correct: true },
            { text: "एंटीजन A और B दोनों", correct: false },
            { text: "कोई एंटीजन नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रक्त समूह A का नाम इसलिए A है क्योंकि इसकी लाल रक्त कोशिकाओं की सतह पर केवल एंटीजन A पाया जाता है।"
    },
    {
        question: "प्रश्न 6. रक्त समूह O वाले व्यक्ति के प्लाज्मा में कौन सी एंटीबॉडी होती है?",
        answers: shuffle([
            { text: "केवल anti-A", correct: false },
            { text: "केवल anti-B", correct: false },
            { text: "anti-A और anti-B दोनों", correct: true },
            { text: "कोई एंटीबॉडी नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रक्त समूह O की RBC पर कोई एंटीजन नहीं होता है, इसलिए इसके प्लाज्मा में सुरक्षा के लिए दोनों एंटीबॉडी (anti-A और anti-B) मौजूद होती हैं।"
    },
    {
        question: "प्रश्न 7. Rh फैक्टर (Rh factor) का संबंध किससे है?",
        answers: shuffle([
            { text: "यकृत से", correct: false },
            { text: "रक्त से", correct: true },
            { text: "मस्तिष्क से", correct: false },
            { text: "हृदय से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> Rh फैक्टर (रीसस फैक्टर) लाल रक्त कोशिकाओं की सतह पर पाया जाने वाला एक अन्य प्रकार का एंटीजन (एंटीजन D) है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी उपस्थिति या अनुपस्थिति के आधार पर रक्त समूह को पॉजिटिव (+) या नेगेटिव (-) कहा जाता है।"
    },
    {
        question: "प्रश्न 8. यदि किसी व्यक्ति का रक्त समूह B-पॉजिटिव (B+) है, तो इसका क्या अर्थ है?",
        answers: shuffle([
            { text: "उसमें एंटीजन B और Rh फैक्टर दोनों मौजूद हैं", correct: true },
            { text: "उसमें केवल एंटीजन B है, Rh फैक्टर नहीं है", correct: false },
            { text: "उसमें केवल Rh फैक्टर है, एंटीजन B नहीं है", correct: false },
            { text: "उसमें एंटीजन A और Rh फैक्टर दोनों हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> B-पॉजिटिव का अर्थ है कि व्यक्ति की लाल रक्त कोशिकाओं पर एंटीजन B और Rh एंटीजन दोनों उपस्थित हैं।"
    },
    {
        question: "प्रश्न 9. 'गर्भ रक्ताणुकोरकता' (Erythroblastosis Fetalis) की समस्या कब उत्पन्न हो सकती है?",
        answers: shuffle([
            { text: "जब माता Rh+ और पिता Rh- हो", correct: false },
            { text: "जब माता Rh- और पिता Rh+ हो", correct: true },
            { text: "जब माता-पिता दोनों Rh+ हों", correct: false },
            { text: "जब माता-पिता दोनों Rh- हों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह स्थिति तब उत्पन्न होती है जब एक Rh-नेगेटिव माँ एक Rh-पॉजिटिव बच्चे को जन्म देती है।<br><br><i class='fa-solid fa-angles-right icon'></i> दूसरे Rh-पॉजिटिव गर्भ के दौरान, माँ के शरीर में बनी Rh एंटीबॉडी भ्रूण की लाल रक्त कोशिकाओं पर हमला कर सकती हैं, जो घातक हो सकता है।"
    },
    {
        question: "प्रश्न 10. रक्त समूह AB वाले व्यक्ति के प्लाज्मा में कौन सी एंटीबॉडी होती है?",
        answers: shuffle([
            { text: "anti-A", correct: false },
            { text: "anti-B", correct: false },
            { text: "anti-A और anti-B दोनों", correct: false },
            { text: "कोई एंटीबॉडी नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रक्त समूह AB की RBC पर A और B दोनों एंटीजन होते हैं, इसलिए इसके प्लाज्मा में कोई भी एंटीबॉडी (anti-A या anti-B) नहीं होती है, अन्यथा वे अपनी ही कोशिकाओं पर हमला कर देतीं।"
    },
    {
        question: "प्रश्न 11. यदि पिता का रक्त समूह A और माता का रक्त समूह B है, तो बच्चे का रक्त समूह क्या नहीं हो सकता?",
        answers: shuffle([
            { text: "A", correct: false },
            { text: "B", correct: false },
            { text: "O", correct: false },
            { text: "बच्चे का रक्त समूह इनमें से कोई भी हो सकता है", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि माता-पिता के जीनोटाइप क्रमशः Iᴬi और Iᴮi हैं, तो उनके बच्चों में A (Iᴬi), B (Iᴮi), AB (IᴬIᴮ), और O (ii) - चारों रक्त समूहों की संभावना होती है।"
    },
    {
        question: "प्रश्न 12. गलत रक्त समूह का आधान (Transfusion) करने पर होने वाली मुख्य प्रतिक्रिया क्या है?",
        answers: shuffle([
            { text: "रक्त का तेजी से बहना", correct: false },
            { text: "रक्त का समूहन (Agglutination)", correct: true },
            { text: "रक्त का पतला हो जाना", correct: false },
            { text: "हीमोग्लोबिन का बढ़ जाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गलत रक्त चढ़ाने पर, प्राप्तकर्ता की एंटीबॉडी दाता की लाल रक्त कोशिकाओं पर मौजूद एंटीजन से चिपक जाती हैं, जिससे कोशिकाओं के गुच्छे बन जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रक्रिया को रक्त समूहन (Agglutination) कहते हैं, जो रक्त वाहिकाओं को अवरुद्ध कर सकता है।"
    },
    {
        question: "प्रश्न 13. Rh फैक्टर की खोज किसने की थी?",
        answers: shuffle([
            { text: "केवल कार्ल लैंडस्टीनर ने", correct: false },
            { text: "लैंडस्टीनर और वीनर ने", correct: true },
            { text: "वाटसन और क्रिक ने", correct: false },
            { text: "मॉर्गन ने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्ल लैंडस्टीनर और अलेक्जेंडर एस. वीनर ने मिलकर 1940 में रीसस बंदर के रक्त में Rh फैक्टर की खोज की थी।"
    },
    {
        question: "प्रश्न 14. एक व्यक्ति जिसका रक्त समूह A है, वह किसे रक्तदान कर सकता है?",
        answers: shuffle([
            { text: "केवल A को", correct: false },
            { text: "A और AB को", correct: true },
            { text: "केवल AB को", correct: false },
            { text: "सभी को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रक्त समूह A वाला व्यक्ति A समूह वाले को रक्त दे सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि AB समूह सार्वभौमिक प्राप्तकर्ता है और उसमें anti-A एंटीबॉडी नहीं होती है, इसलिए वह A समूह से भी रक्त ले सकता है।"
    },
    {
        question: "प्रश्न 15. रक्त समूह O होने के लिए व्यक्ति का जीनोटाइप क्या होना चाहिए?",
        answers: shuffle([
            { text: "IᴬIᴬ", correct: false },
            { text: "Iᴬi", correct: false },
            { text: "IᴬIᴮ", correct: false },
            { text: "ii", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> O एलील (i) एक अप्रभावी (recessive) एलील है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, रक्त समूह O तभी प्रकट होता है जब व्यक्ति को अपने माता-पिता दोनों से 'i' एलील प्राप्त होता है, जिससे उसका जीनोटाइप ii बनता है।"
    },
    {
        question: "प्रश्न 16. \"बॉम्बे रक्त समूह\" (Bombay Blood Group) की क्या विशेषता है?",
        answers: shuffle([
            { text: "इसमें कोई एंटीजन नहीं होता है", correct: false },
            { text: "यह केवल मुंबई में पाया जाता है", correct: false },
            { text: "इसमें H एंटीजन की कमी होती है", correct: true },
            { text: "इसमें A और B दोनों एंटीजन होते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बॉम्बे रक्त समूह एक दुर्लभ रक्त प्रकार है।<br><br><i class='fa-solid fa-angles-right icon'></i> इन व्यक्तियों की RBC पर A, B और H एंटीजन नहीं होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> वे केवल अपने जैसे बॉम्बे रक्त समूह वाले व्यक्ति से ही रक्त ले सकते हैं।"
    },
    {
        question: "प्रश्न 17. रक्त आधान (Blood Transfusion) से पहले क्या मिलाना (Cross-matching) महत्वपूर्ण है?",
        answers: shuffle([
            { text: "दाता और प्राप्तकर्ता की उम्र", correct: false },
            { text: "दाता और प्राप्तकर्ता का लिंग", correct: false },
            { text: "दाता का रक्त और प्राप्तकर्ता का सीरम", correct: true },
            { text: "दाता और प्राप्तकर्ता का वजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रॉस-मैचिंग में, दाता की लाल रक्त कोशिकाओं को प्राप्तकर्ता के सीरम (जिसमें एंटीबॉडी होती हैं) के साथ मिलाया जाता है ताकि यह सुनिश्चित किया जा सके कि कोई समूहन (agglutination) प्रतिक्रिया न हो।"
    },
    {
        question: "प्रश्न 18. यदि दोनों माता-पिता का रक्त समूह O है, तो उनके बच्चे का संभावित रक्त समूह क्या होगा?",
        answers: shuffle([
            { text: "केवल A", correct: false },
            { text: "केवल B", correct: false },
            { text: "केवल O", correct: true },
            { text: "A या B", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि दोनों माता-पिता का जीनोटाइप 'ii' है, तो वे अपने बच्चे को केवल 'i' एलील ही दे सकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, बच्चे का जीनोटाइप 'ii' होगा, जिसका अर्थ है कि उसका रक्त समूह O ही होगा।"
    },
    {
        question: "प्रश्न 19. दुनिया में सबसे आम रक्त समूह कौन सा है?",
        answers: shuffle([
            { text: "AB-negative", correct: false },
            { text: "B-positive", correct: false },
            { text: "O-positive", correct: true },
            { text: "A-negative", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैश्विक स्तर पर, O-पॉजिटिव सबसे अधिक पाया जाने वाला रक्त समूह है।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, विभिन्न जातीय समूहों और भौगोलिक क्षेत्रों में इसकी व्यापकता भिन्न हो सकती है।"
    },
    {
        question: "प्रश्न 20. एंटीजन (Antigen) क्या होते हैं?",
        answers: shuffle([
            { text: "लाल रक्त कोशिकाओं को नष्ट करने वाले पदार्थ", correct: false },
            { text: "शरीर की प्रतिरक्षा प्रणाली को उत्तेजित करने वाले पदार्थ", correct: true },
            { text: "रक्त का थक्का बनाने वाले प्रोटीन", correct: false },
            { text: "शरीर में ऑक्सीजन का परिवहन करने वाले अणु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंटीजन (प्रतिजन) कोई भी बाहरी पदार्थ (जैसे प्रोटीन) हो सकता है जो शरीर में प्रवेश करने पर प्रतिरक्षा प्रणाली को एंटीबॉडी (प्रतिरक्षी) बनाने के लिए प्रेरित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> रक्त समूह के संदर्भ में, ये RBC की सतह पर होते हैं।"
    },
    {
        question: "प्रश्न 21. एंटीबॉडी (Antibody) कहाँ पाई जाती हैं?",
        answers: shuffle([
            { text: "लाल रक्त कोशिकाओं की सतह पर", correct: false },
            { text: "रक्त प्लाज्मा में", correct: true },
            { text: "श्वेत रक्त कोशिकाओं के अंदर", correct: false },
            { text: "प्लेटलेट्स में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंटीबॉडी (या प्रतिरक्षी) 'Y' आकार के प्रोटीन होते हैं जो रक्त के तरल हिस्से, यानी प्लाज्मा में मौजूद होते हैं और विशिष्ट एंटीजन की पहचान कर उन पर हमला करते हैं।"
    },
    {
        question: "प्रश्न 22. एक व्यक्ति जिसका रक्त समूह B है, वह किस समूह से रक्त प्राप्त नहीं कर सकता है?",
        answers: shuffle([
            { text: "B और A", correct: false },
            { text: "O", correct: false },
            { text: "B", correct: false },
            { text: "A और AB", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> B रक्त समूह वाले व्यक्ति के प्लाज्मा में anti-A एंटीबॉडी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि उसे A या AB समूह का रक्त दिया जाता है, तो यह एंटीबॉडी दाता की A एंटीजन वाली RBC पर हमला कर देगी, जिससे गंभीर प्रतिक्रिया होगी।"
    },
    {
        question: "प्रश्न 23. रक्त समूह A-negative वाला व्यक्ति किसे रक्तदान कर सकता है?",
        answers: shuffle([
            { text: "केवल A- और AB- को", correct: false },
            { text: "सभी A और AB रक्त समूहों को (पॉजिटिव और नेगेटिव)", correct: true },
            { text: "केवल A+ और AB+ को", correct: false },
            { text: "केवल O- समूह को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नेगेटिव रक्त समूह वाले व्यक्ति पॉजिटिव रक्त समूह वालों को रक्त दे सकते हैं (लेकिन उनसे ले नहीं सकते)।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, A- वाला व्यक्ति A-, A+, AB- और AB+ सभी को रक्त दे सकता है।"
    },
    {
        question: "प्रश्न 24. कौन सा रक्त समूह सबसे दुर्लभ (rarest) माना जाता है?",
        answers: shuffle([
            { text: "O-positive", correct: false },
            { text: "A-positive", correct: false },
            { text: "AB-negative", correct: true },
            { text: "B-positive", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिकांश आबादी में, AB-नेगेटिव सबसे दुर्लभ रक्त समूह होता है, जो अक्सर 1% से भी कम लोगों में पाया जाता है।"
    },
    {
        question: "प्रश्न 25. मानव में रक्त समूह किस प्रकार की आनुवंशिकता का उदाहरण है?",
        answers: shuffle([
            { text: "अपूर्ण प्रभाविता", correct: false },
            { text: "सह-प्रभाविता और बहुविकल्पी एलील", correct: true },
            { text: "लिंग-सहलग्नता", correct: false },
            { text: "प्रभाविता का नियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ABO रक्त समूह प्रणाली बहुविकल्पी एलील (तीन एलील: Iᴬ, Iᴮ, i) का एक क्लासिक उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> साथ ही, Iᴬ और Iᴮ एलील सह-प्रभावी हैं, क्योंकि जब वे एक साथ मौजूद होते हैं (AB रक्त समूह में), तो दोनों स्वयं को व्यक्त करते हैं।"
    },
    {
        question: "प्रश्न 26. A रक्त समूह के लिए संभावित जीनोटाइप क्या हैं?",
        answers: shuffle([
            { text: "केवल IᴬIᴬ", correct: false },
            { text: "केवल Iᴬi", correct: false },
            { text: "IᴬIᴬ या Iᴬi", correct: true },
            { text: "केवल ii", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि 'A' एलील (Iᴬ) 'i' एलील पर प्रभावी (dominant) है, इसलिए रक्त समूह A के लिए दो संभावित जीनोटाइप हो सकते हैं: समयुग्मजी (IᴬIᴬ) और विषमयुग्मजी (Iᴬi)।"
    },
    {
        question: "प्रश्न 27. यदि किसी रक्त के नमूने में एंटी-A सीरम मिलाने पर समूहन होता है, लेकिन एंटी-B सीरम मिलाने पर नहीं, तो रक्त समूह क्या होगा?",
        answers: shuffle([
            { text: "B", correct: false },
            { text: "A", correct: true },
            { text: "AB", correct: false },
            { text: "O", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंटी-A सीरम में anti-A एंटीबॉडी होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह केवल उन्हीं RBC के साथ समूहन करेंगी जिन पर A एंटीजन हो।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि एंटी-B सीरम से कोई प्रतिक्रिया नहीं हुई, इसका मतलब है कि B एंटीजन अनुपस्थित है। अतः रक्त समूह A है।"
    },
    {
        question: "प्रश्न 28. रक्तदान करने के लिए एक व्यक्ति की न्यूनतम आयु कितनी होनी चाहिए?",
        answers: shuffle([
            { text: "16 वर्ष", correct: false },
            { text: "18 वर्ष", correct: true },
            { text: "21 वर्ष", correct: false },
            { text: "25 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में रक्तदान के लिए दिशानिर्देशों के अनुसार, एक स्वस्थ व्यक्ति की आयु 18 से 65 वर्ष के बीच होनी चाहिए और उसका वजन न्यूनतम 45-50 किलोग्राम होना चाहिए।"
    },
    {
        question: "प्रश्न 29. रक्त बैंक में रक्त को जमने से बचाने के लिए उसमें क्या मिलाया जाता है?",
        answers: shuffle([
            { text: "सोडियम क्लोराइड", correct: false },
            { text: "पोटैशियम", correct: false },
            { text: "सोडियम साइट्रेट", correct: true },
            { text: "कैल्शियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोडियम साइट्रेट जैसे एंटीकोएगुलेंट (प्रतिस्कंदक) रक्त में मिलाए जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह रक्त में मौजूद कैल्शियम आयनों को बांध लेता है, जो थक्का जमने की प्रक्रिया के लिए आवश्यक होते हैं, इस प्रकार रक्त को तरल बनाए रखता है।"
    },
    {
        question: "प्रश्न 30. Rh-नेगेटिव व्यक्ति के शरीर में Rh एंटीबॉडी कब बनती हैं?",
        answers: shuffle([
            { text: "जन्म से ही मौजूद होती हैं", correct: false },
            { text: "Rh-पॉजिटिव रक्त के संपर्क में आने के बाद", correct: true },
            { text: "किसी भी संक्रमण के बाद", correct: false },
            { text: "वे कभी नहीं बनतीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ABO एंटीबॉडी के विपरीत, Rh एंटीबॉडी स्वाभाविक रूप से नहीं बनती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> एक Rh-नेगेटिव व्यक्ति के शरीर में ये केवल तभी विकसित होती हैं जब वह Rh-पॉजिटिव रक्त के संपर्क में आता है, जैसे कि गलत रक्त आधान या Rh-पॉजिटिव गर्भ के दौरान।"
    },
    {
        question: "प्रश्न 31. A, B और O के अलावा, रक्त समूह का एक और प्रमुख प्रकार कौन सा है?",
        answers: shuffle([
            { text: "MNS सिस्टम", correct: false },
            { text: "डफी सिस्टम", correct: false },
            { text: "केल सिस्टम", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ABO और Rh सबसे महत्वपूर्ण रक्त समूह प्रणालियाँ हैं, लेकिन इनके अलावा MNS, डफी, केल, किड जैसी 30 से अधिक अन्य प्रणालियाँ भी मौजूद हैं, जिनका महत्व विशेष चिकित्सा स्थितियों में होता है।"
    },
    {
        question: "प्रश्न 32. किस रक्त समूह में कोई भी एंटीजन लाल रक्त कोशिकाओं पर नहीं पाया जाता है?",
        answers: shuffle([
            { text: "A", correct: false },
            { text: "B", correct: false },
            { text: "AB", correct: false },
            { text: "O", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रक्त समूह O की पहचान ही यह है कि इसकी लाल रक्त कोशिकाओं की सतह पर न तो A एंटीजन होता है और न ही B एंटीजन।"
    },
    {
        question: "प्रश्न 33. रक्त समूह B वाले व्यक्ति के प्लाज्मा में कौन सी एंटीबॉडी होती है?",
        answers: shuffle([
            { text: "A) Anti-A", correct: true },
            { text: "B) Anti-B", correct: false },
            { text: "A), B) दोनों", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रक्त समूह B वाले व्यक्ति की RBC पर B एंटीजन होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उसकी अपनी कोशिकाओं पर हमला रोकने के लिए, उसके प्लाज्मा में केवल Anti-A एंटीबॉडी होती है, जो A एंटीजन वाली कोशिकाओं को विदेशी मानती है।"
    },
    {
        question: "प्रश्न 34. यदि एक बच्चे का रक्त समूह O है, तो उसके माता-पिता का रक्त समूह कौन सा नहीं हो सकता?",
        answers: shuffle([
            { text: "A और B", correct: false },
            { text: "O और O", correct: false },
            { text: "A और O", correct: false },
            { text: "AB और O", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> O रक्त समूह के लिए जीनोटाइप 'ii' होना आवश्यक है, जिसका अर्थ है कि बच्चे को माता और पिता दोनों से 'i' एलील मिलना चाहिए।<br><br><i class='fa-solid fa-angles-right icon'></i> AB रक्त समूह वाले व्यक्ति का जीनोटाइप IᴬIᴮ होता है, उसके पास 'i' एलील नहीं होता है, इसलिए वह O समूह वाले बच्चे का माता या पिता नहीं हो सकता।"
    },
    {
        question: "प्रश्न 35. रक्त समूह की जानकारी का उपयोग किसमें किया जा सकता है?",
        answers: shuffle([
            { text: "रक्त आधान (Blood transfusion)", correct: false },
            { text: "पितृत्व विवादों को सुलझाने में (Paternity disputes)", correct: false },
            { text: "आनुवंशिक रोगों के अध्ययन में", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रक्त समूह की जानकारी रक्त आधान के लिए महत्वपूर्ण है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पितृत्व विवादों में किसी को पिता होने की संभावना से बाहर करने में मदद कर सकती है (साबित नहीं कर सकती), और कुछ रक्त समूहों का कुछ बीमारियों से संबंध भी पाया गया है, जिससे यह आनुवंशिक अध्ययनों में उपयोगी है।"
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