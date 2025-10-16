const questions = [
    {
        topHeading: "लिंग निर्धारण पर आधारित 35 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. मनुष्यों में लिंग का निर्धारण करने वाला शुक्राणु कौन सा होता है?",
        answers: shuffle([
            { text: "A) जिसमें X गुणसूत्र हो", correct: false },
            { text: "B) जिसमें Y गुणसूत्र हो", correct: false },
            { text: "दोनों (A) और (B)", correct: true },
            { text: "जिसमें केवल ऑटोसोम हों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरुष दो प्रकार के शुक्राणु बनाते हैं - आधे में X गुणसूत्र और आधे में Y गुणसूत्र होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यदि Y शुक्राणु अंडे को निषेचित करता है तो लड़का (XY) होता है, और यदि X शुक्राणु निषेचित करता है तो लड़की (XX) होती है। इसलिए, दोनों ही प्रकार के शुक्राणु लिंग निर्धारण में भूमिका निभाते हैं।"
    },
    {
        question: "प्रश्न 2. लिंग गुणसूत्रों की खोज का श्रेय किसे दिया जाता है?",
        answers: shuffle([
            { text: "ग्रेगर मेंडल", correct: false },
            { text: "थॉमस हंट मॉर्गन", correct: false },
            { text: "नेटी स्टीवंस और एडमंड विल्सन", correct: true },
            { text: "वॉटसन और क्रिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 20वीं सदी की शुरुआत में नेटी स्टीवंस और एडमंड विल्सन ने स्वतंत्र रूप से कीड़ों पर काम करते हुए लिंग गुणसूत्रों (X और Y) की खोज की।<br><br><i class='fa-solid fa-angles-right icon'></i>  और लिंग निर्धारण में उनकी भूमिका को स्थापित किया।"
    },
    {
        question: "प्रश्न 3. 'विषमयुग्मकी' (Heterogametic) का क्या अर्थ है?",
        answers: shuffle([
            { text: "ऐसा जीव जो केवल एक प्रकार के युग्मक बनाता है", correct: false },
            { text: "ऐसा जीव जो दो अलग-अलग प्रकार के युग्मक बनाता है", correct: true },
            { text: "ऐसा जीव जिसमें लिंग गुणसूत्र नहीं होते", correct: false },
            { text: "ऐसा जीव जो अलैंगिक रूप से प्रजनन करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विषमयुग्मकी लिंग वह होता है जो लिंग गुणसूत्रों के संबंध में दो भिन्न प्रकार के युग्मक उत्पन्न करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जैसे मानव पुरुष (X और Y शुक्राणु) या मादा पक्षी (Z और W अंडे)।"
    },
    {
        question: "प्रश्न 4. मगरमच्छों में, यदि अंडों को उच्च तापमान पर सेया (incubate) जाए तो कौन सा लिंग विकसित होता है?",
        answers: shuffle([
            { text: "नर", correct: true },
            { text: "मादा", correct: false },
            { text: "नर और मादा दोनों", correct: false },
            { text: "लिंग पर तापमान का कोई प्रभाव नहीं पड़ता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मगरमच्छों और कुछ अन्य सरीसृपों में तापमान-निर्भर लिंग निर्धारण (TSD) होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  आमतौर पर, उच्च तापमान (लगभग 33°C) पर नर और निम्न तापमान (30°C से नीचे) पर मादा विकसित होती है।"
    },
    {
        question: "प्रश्न 5. टर्नर सिंड्रोम (45, XO) से पीड़ित महिला में कितनी बार बॉडी (Barr bodies) पाई जाती हैं?",
        answers: shuffle([
            { text: "एक", correct: false },
            { text: "दो", correct: false },
            { text: "शून्य", correct: true },
            { text: "तीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बार बॉडी एक निष्क्रिय X गुणसूत्र है।<br><br><i class='fa-solid fa-angles-right icon'></i>  चूँकि टर्नर सिंड्रोम वाली महिलाओं में केवल एक ही X गुणसूत्र होता है, कोई भी X गुणसूत्र निष्क्रिय नहीं होता है, इसलिए उनमें कोई बार बॉडी नहीं होती है।"
    },
    {
        question: "प्रश्न 6. भ्रूण के विकास के दौरान कौन सी संरचना पुरुष प्रजनन प्रणाली में विकसित होती है?",
        answers: shuffle([
            { text: "मुलेरियन डक्ट (Mullerian duct)", correct: false },
            { text: "वोल्फियन डक्ट (Wolffian duct)", correct: true },
            { text: "क्लोएका (Cloaca)", correct: false },
            { text: "आर्केंटेरॉन (Archenteron)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> XY भ्रूण में वृषण द्वारा स्रावित टेस्टोस्टेरोन वोल्फियन डक्ट को पुरुष प्रजनन अंगों (जैसे वास डिफरेंस, एपिडीडिमिस) में विकसित होने के लिए प्रेरित करता है।"
    },
    {
        question: "प्रश्न 7. मानव जनसंख्या में किसी भी गर्भावस्था में लड़का होने की प्रायिकता (probability) क्या है?",
        answers: shuffle([
            { text: "75%", correct: false },
            { text: "25%", correct: false },
            { text: "50%", correct: true },
            { text: "100%", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि नर दो प्रकार के शुक्राणु (X और Y) बराबर मात्रा में उत्पन्न करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसलिए किसी भी निषेचन में लड़के (XY) या लड़की (XX) होने की संभावना लगभग 50% होती है।"
    },
    {
        question: "प्रश्न 8. 'गाइनान्ड्रोमॉर्फ' (Gynandromorph) क्या है?",
        answers: shuffle([
            { text: "एक जीव जिसमें नर और मादा दोनों के ऊतक पैच होते हैं", correct: true },
            { text: "एक उभयलिंगी जीव", correct: false },
            { text: "एक लिंग-परिवर्तित जीव", correct: false },
            { text: "एक अलैंगिक जीव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गाइनान्ड्रोमॉर्फ एक ऐसा जीव है जो स्पष्ट रूप से नर और मादा दोनों विशेषताओं को प्रदर्शित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह अक्सर कीड़ों में देखा जाता है और प्रारंभिक विकास के दौरान लिंग गुणसूत्रों की हानि के कारण होता है।"
    },
    {
        question: "प्रश्न 9. मधुमक्खी के नर (ड्रोन) में कितने गुणसूत्र होते हैं?",
        answers: shuffle([
            { text: "32 (द्विगुणित)", correct: false },
            { text: "16 (अगुणित)", correct: true },
            { text: "48 (त्रिगुणित)", correct: false },
            { text: "8 (चतुर्गुणित)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ड्रोन अनिषेचित अंडों से विकसित होते हैं, इसलिए वे अगुणित होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और उनमें रानी या श्रमिक मधुमक्खियों (जिनमें 32 गुणसूत्र होते हैं) से आधे गुणसूत्र (16) होते हैं।"
    },
    {
        question: "प्रश्न 10. स्तनधारियों में डिफ़ॉल्ट विकासात्मक मार्ग (default developmental pathway) कौन सा है?",
        answers: shuffle([
            { text: "नर", correct: false },
            { text: "मादा", correct: true },
            { text: "उभयलिंगी", correct: false },
            { text: "कोई निश्चित मार्ग नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्तनधारियों में, यदि Y गुणसूत्र और उसका SRY जीन अनुपस्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i>  तो भ्रूण स्वतः ही मादा के रूप में विकसित होगा। पुरुष विकास के लिए SRY जीन का सक्रिय होना आवश्यक है।"
    },
    {
        question: "प्रश्न 11. क्लाइनफेल्टर सिंड्रोम (47, XXY) वाले पुरुष में कुल कितने गुणसूत्र होते हैं?",
        answers: shuffle([
            { text: "46", correct: false },
            { text: "45", correct: false },
            { text: "47", correct: true },
            { text: "48", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस सिंड्रोम में एक अतिरिक्त X लिंग गुणसूत्र होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे सामान्य 46 गुणसूत्रों के बजाय कुल 47 गुणसूत्र हो जाते हैं।"
    },
    {
        question: "प्रश्न 12. कौन सा हार्मोन भ्रूण में मुलेरियन डक्ट (मादा संरचना) के पतन का कारण बनता है?",
        answers: shuffle([
            { text: "टेस्टोस्टेरोन", correct: false },
            { text: "एस्ट्रोजन", correct: false },
            { text: "एंटी-मुलेरियन हार्मोन (AMH)", correct: true },
            { text: "प्रोजेस्टेरोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> XY भ्रूण में, वृषण की सर्टोली कोशिकाएं एंटी-मुलेरियन हार्मोन (AMH) का स्राव करती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो मुलेरियन डक्ट को नष्ट कर देता है, जिससे गर्भाशय और फैलोपियन ट्यूब का विकास रुक जाता है।"
    },
    {
        question: "प्रश्न 13. लिंग-निर्धारण की XX-XO प्रणाली में, नर के पास क्या होता है?",
        answers: shuffle([
            { text: "दो X गुणसूत्र", correct: false },
            { text: "एक X और एक Y गुणसूत्र", correct: false },
            { text: "केवल एक X गुणसूत्र और कोई दूसरा लिंग गुणसूत्र नहीं", correct: true },
            { text: "केवल एक Y गुणसूत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> XX-XO प्रणाली में, मादा XX होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जबकि नर के पास केवल एक X गुणसूत्र होता है। 'O' दूसरे लिंग गुणसूत्र की अनुपस्थिति को दर्शाता है।"
    },
    {
        question: "प्रश्न 14. ऑटोसोम (Autosomes) का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "केवल लिंग का निर्धारण करना", correct: false },
            { text: "दैहिक (शारीरिक) लक्षणों का निर्धारण करना", correct: true },
            { text: "केवल प्रजनन में सहायता करना", correct: false },
            { text: "कोशिका विभाजन को रोकना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑटोसोम वे गैर-लिंग गुणसूत्र हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो जीव के अधिकांश शारीरिक लक्षणों, जैसे ऊंचाई, आंखों का रंग और चयापचय को नियंत्रित करते हैं।"
    },
    {
        question: "प्रश्न 15. यदि SRY जीन किसी उत्परिवर्तन के कारण Y गुणसूत्र से X गुणसूत्र पर स्थानांतरित हो जाए, तो XX जीनोटाइप वाले व्यक्ति का फेनोटाइप क्या होगा?",
        answers: shuffle([
            { text: "सामान्य मादा", correct: false },
            { text: "टर्नर सिंड्रोम वाली मादा", correct: false },
            { text: "नर", correct: true },
            { text: "क्लाइनफेल्टर सिंड्रोम वाला नर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> SRY जीन पुरुष विकास के लिए स्विच है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यदि यह XX व्यक्ति के X गुणसूत्र पर मौजूद है, तो यह वृषण के विकास को प्रेरित करेगा और व्यक्ति फेनोटाइपिक रूप से नर होगा (XX male syndrome)।"
    },
    {
        question: "प्रश्न 16. 'लिंग सहलग्नता' (Sex linkage) का क्या अर्थ है?",
        answers: shuffle([
            { text: "जीन का ऑटोसोम पर स्थित होना", correct: false },
            { text: "जीन का लिंग गुणसूत्र (X या Y) पर स्थित होना", correct: true },
            { text: "दो जीनों का एक साथ रहना", correct: false },
            { text: "एक जीन का दूसरे पर प्रभावी होना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब किसी लक्षण का जीन X या Y गुणसूत्र पर स्थित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  तो उसे लिंग सहलग्न लक्षण कहा जाता है, और उसकी वंशागति लिंग के साथ जुड़ी होती है।"
    },
    {
        question: "प्रश्न 17. सुपरफीमेल (47, XXX) में कितनी बार बॉडी होती हैं?",
        answers: shuffle([
            { text: "0", correct: false },
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बार बॉडी की संख्या = (X गुणसूत्रों की संख्या - 1) होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  चूँकि इस स्थिति में तीन X गुणसूत्र होते हैं, तो (3 - 1 = 2) दो बार बॉडी बनेंगी।"
    },
    {
        question: "प्रश्न 18. कुछ मछलियाँ, जैसे क्लाउनफ़िश, अपने जीवनकाल में लिंग बदल सकती हैं। इस घटना को क्या कहते हैं?",
        answers: shuffle([
            { text: "अनिषेकजनन (Parthenogenesis)", correct: false },
            { text: "अनुक्रमिक उभयलिंगिता (Sequential Hermaphroditism)", correct: true },
            { text: "तापमान-निर्भर लिंग निर्धारण", correct: false },
            { text: "गाइनान्ड्रोमॉर्फिज्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक ऐसी प्रक्रिया है जिसमें जीव अपने जीवन में एक लिंग के रूप में शुरू होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और बाद में दूसरे लिंग में बदल जाता है, जो अक्सर सामाजिक संकेतों पर निर्भर करता है।"
    },
    {
        question: "प्रश्न 19. एंड्रोजन असंवेदनशीलता सिंड्रोम (Androgen Insensitivity Syndrome) में व्यक्ति का जीनोटाइप और फेनोटाइप क्या होता है?",
        answers: shuffle([
            { text: "जीनोटाइप XX, फेनोटाइप मादा", correct: false },
            { text: "जीनोटाइप XY, फेनोटाइप मादा", correct: true },
            { text: "जीनोटाइप XX, फेनोटाइप नर", correct: false },
            { text: "जीनोटाइप XY, फेनोटाइप नर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस स्थिति में, व्यक्ति आनुवंशिक रूप से नर (XY) होता है, लेकिन उसकी कोशिकाएं एंड्रोजन (पुरुष हार्मोन) पर प्रतिक्रिया नहीं कर पाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  परिणामस्वरूप, वह बाहरी रूप से मादा के रूप में विकसित होता है।"
    },
    {
        question: "प्रश्न 20. पक्षियों में लिंग निर्धारण के लिए कौन सा युग्मक निर्णायक होता है?",
        answers: shuffle([
            { text: "A) शुक्राणु", correct: false },
            { text: "B) अंडाणु", correct: true },
            { text: "A), B) दोनों समान रूप से", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पक्षियों में मादा ZW और नर ZZ होते हैं। मादा दो प्रकार के अंडे (Z या W) बनाती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसलिए, अंडे का प्रकार (Z या W) चूजे के लिंग को निर्धारित करता है, शुक्राणु का नहीं।"
    },
    {
        question: "प्रश्न 21. मानव शरीर की किस कोशिका में लिंग गुणसूत्र नहीं होते हैं?",
        answers: shuffle([
            { text: "तंत्रिका कोशिका", correct: false },
            { text: "यकृत कोशिका", correct: false },
            { text: "परिपक्व लाल रक्त कोशिका", correct: true },
            { text: "त्वचा कोशिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परिपक्व लाल रक्त कोशिकाओं में केंद्रक (nucleus) और अधिकांश अन्य कोशिकांग नहीं होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसलिए उनमें कोई गुणसूत्र (न तो ऑटोसोम और न ही लिंग गुणसूत्र) नहीं होता है।"
    },
    {
        question: "प्रश्न 22. 'फ्री-मार्टिन' (Freemartin) स्थिति किस जानवर में देखी जाती है?",
        answers: shuffle([
            { text: "मवेशी (Cattle)", correct: true },
            { text: "मुर्गी", correct: false },
            { text: "मधुमक्खी", correct: false },
            { text: "इंसान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फ्री-मार्टिन एक बांझ मादा मवेशी होती है जो एक नर जुड़वां के साथ पैदा होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  गर्भावस्था के दौरान हार्मोन के आदान-प्रदान के कारण उसका प्रजनन तंत्र अविकसित रह जाता है।"
    },
    {
        question: "प्रश्न 23. ड्रोसोफिला (फल मक्खी) में लिंग का निर्धारण कैसे होता है?",
        answers: shuffle([
            { text: "केवल Y गुणसूत्र की उपस्थिति या अनुपस्थिति से", correct: false },
            { text: "X गुणसूत्रों और ऑटोसोम के सेट के अनुपात (X:A ratio) से", correct: true },
            { text: "तापमान से", correct: false },
            { text: "भोजन के प्रकार से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि X:A अनुपात 1.0 या अधिक है, तो मक्खी मादा होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यदि यह 0.5 या कम है, तो यह नर होती है। Y गुणसूत्र केवल नर की उर्वरता के लिए आवश्यक है, लिंग निर्धारण के लिए नहीं।"
    },
    {
        question: "प्रश्न 24. लिंग विभेदन (Sex differentiation) क्या है?",
        answers: shuffle([
            { text: "युग्मकों के निर्माण की प्रक्रिया", correct: false },
            { text: "निषेचन की प्रक्रिया", correct: false },
            { text: "वह प्रक्रिया जिसके द्वारा जननग्रंथि (gonads) और अन्य प्रजनन संरचनाएं विकसित होती हैं", correct: true },
            { text: "गुणसूत्रों के अलग होने की प्रक्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिंग निर्धारण (sex determination) आनुवंशिक स्तर पर लिंग की स्थापना है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जबकि लिंग विभेदन उन घटनाओं की श्रृंखला है जिनसे नर या मादा फेनोटाइप का विकास होता है।"
    },
    {
        question: "प्रश्न 25. मानव Y गुणसूत्र पर अधिकांश जीन किससे संबंधित होते हैं?",
        answers: shuffle([
            { text: "ऊंचाई और वजन से", correct: false },
            { text: "बुद्धिमत्ता से", correct: false },
            { text: "नर प्रजनन क्षमता और विकास से", correct: true },
            { text: "रक्त के थक्के जमने से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> Y गुणसूत्र पर बहुत कम जीन होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और उनमें से अधिकांश, जैसे SRY जीन और शुक्राणुजनन (spermatogenesis) से संबंधित जीन, पुरुष विकास और प्रजनन के लिए विशिष्ट हैं।"
    },
    {
        question: "प्रश्न 26. डाइओशियस (Dioecious) पौधे कौन से होते हैं?",
        answers: shuffle([
            { text: "वे पौधे जिनमें एक ही फूल पर नर और मादा दोनों भाग होते हैं", correct: false },
            { text: "वे पौधे जिनमें नर और मादा फूल अलग-अलग पौधों पर होते हैं", correct: true },
            { text: "वे पौधे जिनमें केवल अलैंगिक प्रजनन होता है", correct: false },
            { text: "वे पौधे जिनमें फूल नहीं होते", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डाइओशियस पौधों में अलग-अलग नर और मादा पौधे होते हैं, जो जानवरों में लिंग के समान है।<br><br><i class='fa-solid fa-angles-right icon'></i>  पपीता और खजूर इसके उदाहरण हैं।"
    },
    {
        question: "प्रश्न 27. कौन सा कथन सत्य है?",
        answers: shuffle([
            { text: "सभी नर विषमयुग्मकी होते हैं", correct: false },
            { text: "सभी मादा समयुग्मकी होती हैं", correct: false },
            { text: "लिंग निर्धारण हमेशा आनुवंशिक होता है", correct: false },
            { text: "नर विषमयुग्मकी (जैसे मनुष्य) या समयुग्मकी (जैसे पक्षी) हो सकते हैं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिंग निर्धारण प्रणाली प्रजातियों के अनुसार भिन्न होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  मानव नर (XY) विषमयुग्मकी हैं, जबकि पक्षी नर (ZZ) समयुग्मकी हैं।"
    },
    {
        question: "प्रश्न 28. एक सामान्य पुरुष के शुक्राणुजनन में, कितने शुक्राणुओं में Y गुणसूत्र होगा?",
        answers: shuffle([
            { text: "25%", correct: false },
            { text: "50%", correct: true },
            { text: "75%", correct: false },
            { text: "100%", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अर्धसूत्रीविभाजन के दौरान, XY गुणसूत्र अलग हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसके परिणामस्वरूप लगभग आधे शुक्राणु X गुणसूत्र वाले और आधे Y गुणसूत्र वाले होते हैं।"
    },
    {
        question: "प्रश्न 29. लिंग-प्रभावित लक्षण (Sex-influenced traits) क्या हैं?",
        answers: shuffle([
            { text: "वे लक्षण जो केवल एक लिंग में दिखाई देते हैं", correct: false },
            { text: "वे लक्षण जो लिंग गुणसूत्रों पर स्थित होते हैं", correct: false },
            { text: "वे लक्षण जो ऑटोसोम पर होते हैं लेकिन लिंग हार्मोन से प्रभावित होते हैं", correct: true },
            { text: "वे लक्षण जो Y गुणसूत्र पर होते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये लक्षण ऑटोसोमल जीन द्वारा नियंत्रित होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  लेकिन उनका प्रकटन (expression) पुरुष या महिला हार्मोन की उपस्थिति से प्रभावित होता है। उदाहरण: पुरुषों में गंजापन।"
    },
    {
        question: "प्रश्न 30. यदि किसी जीव में लिंग का निर्धारण युग्मकों के संलयन से पहले ही हो जाता है, तो इसे क्या कहते हैं?",
        answers: shuffle([
            { text: "प्रोगेमिक (Progamic)", correct: true },
            { text: "सिनगैमिक (Syngamic)", correct: false },
            { text: "एपिगैमिक (Epigamic)", correct: false },
            { text: "मेटागैमिक (Metagamic)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोगेमिक प्रकार का लिंग निर्धारण निषेचन से पहले होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  उदाहरण के लिए, मधुमक्खियों में, अंडे के निषेचित होने या न होने से लिंग का निर्धारण हो जाता है।"
    },
    {
        question: "प्रश्न 31. हीमोफिलिया जैसे X-सहलग्न विकार पुरुषों में अधिक आम क्यों हैं?",
        answers: shuffle([
            { text: "Y गुणसूत्र पर एक सुरक्षात्मक जीन होता है", correct: false },
            { text: "पुरुषों में विकार के लिए केवल एक अप्रभावी एलील की आवश्यकता होती है", correct: true },
            { text: "महिलाएं इस विकार के प्रति प्रतिरक्षित होती हैं", correct: false },
            { text: "हार्मोन इस विकार को रोकते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूंकि पुरुषों (XY) के पास केवल एक X गुणसूत्र होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसलिए उस पर मौजूद एक भी अप्रभावी एलील बीमारी का कारण बन जाएगा। महिलाओं (XX) में, एक सामान्य एलील वाला दूसरा X गुणसूत्र आमतौर पर इसकी भरपाई कर देता है।"
    },
    {
        question: "प्रश्न 32. 'लिंग गुणसूत्रीय विपथन' (Sex chromosomal aberration) का उदाहरण कौन सा है?",
        answers: shuffle([
            { text: "डाउन सिंड्रोम", correct: false },
            { text: "टर्नर सिंड्रोम", correct: true },
            { text: "सिकल सेल एनीमिया", correct: false },
            { text: "थैलेसीमिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टर्नर सिंड्रोम (XO) लिंग गुणसूत्रों की संख्या में असामान्यता के कारण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  डाउन सिंड्रोम एक ऑटोसोमल विपथन है, जबकि सिकल सेल और थैलेसीमिया जीन उत्परिवर्तन हैं।"
    },
    {
        question: "प्रश्न 33. नर मधुमक्खी (ड्रोन) के पिता कौन होते हैं?",
        answers: shuffle([
            { text: "एक अन्य ड्रोन", correct: false },
            { text: "रानी का साथी", correct: false },
            { text: "कोई पिता नहीं होता", correct: true },
            { text: "श्रमिक मधुमक्खी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ड्रोन अनिषेचित अंडों से अनिषेकजनन द्वारा विकसित होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसका मतलब है कि उनकी केवल एक माँ (रानी) होती है और कोई पिता नहीं होता।"
    },
    {
        question: "प्रश्न 34. लिंग गुणसूत्रों को पहली बार किस जीव में देखा गया था?",
        answers: shuffle([
            { text: "मटर का पौधा", correct: false },
            { text: "फल मक्खी", correct: false },
            { text: "कीड़े (Insects)", correct: true },
            { text: "चूहे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1900 के दशक की शुरुआत में वैज्ञानिकों जैसे स्टीवंस और विल्सन ने विभिन्न कीड़ों (जैसे मीलवर्म) में शुक्राणुजनन का अध्ययन करते समय X और Y गुणसूत्रों को पहली बार देखा था।"
    },
    {
        question: "प्रश्न 35. मानव भ्रूण में जननग्रंथि (gonads) शुरू में कैसी होती हैं?",
        answers: shuffle([
            { text: "केवल वृषण के रूप में विभेदित", correct: false },
            { text: "केवल अंडाशय के रूप में विभेदित", correct: false },
            { text: "अविभेदित (Indifferent)", correct: true },
            { text: "पूरी तरह से अनुपस्थित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विकास के शुरुआती चरणों में, भ्रूण की जननग्रंथि अविभेदित होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और उनमें वृषण या अंडाशय दोनों में से किसी में भी विकसित होने की क्षमता होती है। SRY जीन की उपस्थिति या अनुपस्थिति उनके भविष्य के मार्ग को निर्धारित करती है।"
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