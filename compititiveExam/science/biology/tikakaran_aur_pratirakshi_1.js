const questions = [
    {
        topHeading: "टीकाकरण और प्रतिरक्षी पर आधारित 50 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. टीकाकरण का जनक किसे माना जाता है?",
        answers: shuffle([
            { text: "लुई पाश्चर", correct: false },
            { text: "रॉबर्ट कोच", correct: false },
            { text: "एडवर्ड जेनर", correct: true },
            { text: "अलेक्जेंडर फ्लेमिंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एडवर्ड जेनर ने 1796 में चेचक के टीके का आविष्कार किया, जो दुनिया का पहला टीका था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसीलिए उन्हें 'टीकाकरण का जनक' कहा जाता है।"
    },
    {
        question: "प्रश्न 2. टीकाकरण शरीर में किस प्रकार की प्रतिरक्षा को प्रेरित करता है?",
        answers: shuffle([
            { text: "प्राकृतिक सक्रिय प्रतिरक्षा", correct: false },
            { text: "कृत्रिम सक्रिय प्रतिरक्षा", correct: true },
            { text: "प्राकृतिक निष्क्रिय प्रतिरक्षा", correct: false },
            { text: "कृत्रिम निष्क्रिय प्रतिरक्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टीका शरीर में कृत्रिम रूप से कमजोर या मृत रोगाणु को प्रवेश कराता है, जिससे शरीर की प्रतिरक्षा प्रणाली सक्रिय होकर प्रतिरक्षी बनाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे कृत्रिम सक्रिय प्रतिरक्षा कहते हैं।"
    },
    {
        question: "प्रश्न 3. बी.सी.जी. का टीका किस रोग से बचाव के लिए लगाया जाता है?",
        answers: shuffle([
            { text: "पोलियो", correct: false },
            { text: "खसरा", correct: false },
            { text: "तपेदिक (क्षय रोग)", correct: true },
            { text: "टिटनेस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बी.सी.जी. (बैसिलस कैलमेट-गुएरिन) का टीका जन्म के समय बच्चों को तपेदिक की गंभीर अवस्थाओं से बचाने के लिए दिया जाता है।"
    },
    {
        question: "प्रश्न 4. 'प्रतिरक्षी' (एंटीबॉडी) का निर्माण कौन सी कोशिकाएं करती हैं?",
        answers: shuffle([
            { text: "लाल रक्त कोशिकाएं", correct: false },
            { text: "बिम्बाणु (प्लेटलेट्स)", correct: false },
            { text: "बी-लसिकाणु (बी-लिम्फोसाइट्स)", correct: true },
            { text: "श्वेताणु (न्यूट्रोफिल्स)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कोई बाहरी पदार्थ (प्रतिजन) शरीर में प्रवेश करता है, तो बी-लसिकाणु कोशिकाएं सक्रिय होकर प्लाज्मा कोशिकाओं में बदल जाती हैं और प्रतिरक्षी का उत्पादन करती हैं।"
    },
    {
        question: "प्रश्न 5. पोलियो का टीका कितने प्रकार का होता है?",
        answers: shuffle([
            { text: "केवल एक", correct: false },
            { text: "दो", correct: true },
            { text: "तीन", correct: false },
            { text: "चार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पोलियो के दो प्रकार के टीके हैं: मुखीय पोलियो टीका, जो मुँह से दी जाने वाली जीवित-क्षीण वैक्सीन है, और निष्क्रिय पोलियो टीका, जो इंजेक्शन द्वारा दी जाने वाली मृत वैक्सीन है।"
    },
    {
        question: "प्रश्न 6. माँ के दूध (खीस) के माध्यम से शिशु को प्राप्त होने वाली प्रतिरक्षा क्या कहलाती है?",
        answers: shuffle([
            { text: "सक्रिय प्रतिरक्षा", correct: false },
            { text: "निष्क्रिय प्रतिरक्षा", correct: true },
            { text: "सहज प्रतिरक्षा", correct: false },
            { text: "कृत्रिम प्रतिरक्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शिशु को माँ के दूध से बने-बनाए प्रतिरक्षी मिलते हैं, जो उसे तत्काल सुरक्षा प्रदान करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे प्राकृतिक निष्क्रिय प्रतिरक्षा कहा जाता है।"
    },
    {
        question: "प्रश्न 7. डी.पी.टी. टीके में 'पी' का क्या अर्थ है?",
        answers: shuffle([
            { text: "पोलियो", correct: false },
            { text: "परट्यूसिस (काली खांसी)", correct: true },
            { text: "निमोनिया", correct: false },
            { text: "प्लेग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डी.पी.टी. का टीका तीन बीमारियों से बचाता है: डिप्थीरिया (गलघोंटू), परट्यूसिस (काली खांसी), और टिटनेस (धनुस्तंभ)।"
    },
    {
        question: "प्रश्न 8. 'सामूहिक प्रतिरक्षा' का क्या अर्थ है?",
        answers: shuffle([
            { text: "केवल टीकाकृत लोगों की सुरक्षा", correct: false },
            { text: "जब किसी समुदाय में अधिकांश लोग प्रतिरक्षित हों, तो गैर-प्रतिरक्षित लोगों को भी सुरक्षा मिलना", correct: true },
            { text: "एक व्यक्ति की अपनी प्रतिरक्षा", correct: false },
            { text: "जानवरों से प्राप्त प्रतिरक्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब आबादी का एक बड़ा हिस्सा टीकाकृत हो जाता है, तो बीमारी का फैलना मुश्किल हो जाता है, जिससे उन लोगों की भी सुरक्षा होती है जिन्हें टीका नहीं लगाया जा सकता।"
    },
    {
        question: "प्रश्न 9. भारत सरकार द्वारा 'मिशन इन्द्रधनुष' अभियान क्यों शुरू किया गया था?",
        answers: shuffle([
            { text: "पोलियो उन्मूलन के लिए", correct: false },
            { text: "संपूर्ण टीकाकरण कवरेज प्राप्त करने के लिए", correct: true },
            { text: "कोविड-19 से लड़ने के लिए", correct: false },
            { text: "मलेरिया नियंत्रण के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिशन इन्द्रधनुष का लक्ष्य उन सभी बच्चों और गर्भवती महिलाओं तक पहुँचना है जो नियमित टीकाकरण कार्यक्रम से छूट गए हैं, ताकि उन्हें जानलेवा बीमारियों से बचाया जा सके।"
    },
    {
        question: "प्रश्न 10. प्रतिजन (एंटीजन) क्या होते हैं?",
        answers: shuffle([
            { text: "शरीर द्वारा उत्पादित सुरक्षात्मक प्रोटीन", correct: false },
            { text: "वे पदार्थ जो शरीर में प्रतिरक्षा अनुक्रिया को उत्तेजित करते हैं", correct: true },
            { text: "रक्त के थक्के जमाने वाले कारक", correct: false },
            { text: "एक प्रकार का विटामिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिजन बाहरी पदार्थ होते हैं (जैसे जीवाणु, विषाणु की सतह पर प्रोटीन), जिन्हें प्रतिरक्षा प्रणाली पहचानती है और उनके खिलाफ प्रतिरक्षी बनाती है।"
    },
    {
        question: "प्रश्न 11. एम.एम.आर. का टीका किन तीन रोगों से बचाता है?",
        answers: shuffle([
            { text: "मेनिनजाइटिस, मलेरिया, रूबेला", correct: false },
            { text: "खसरा, गलसुआ, रूबेला", correct: true },
            { text: "खसरा, मलेरिया, रेबीज", correct: false },
            { text: "गलसुआ, निमोनिया, रूबेला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एम.एम.आर. एक संयुक्त टीका है जो इन तीन आम बचपन की विषाणु जनित बीमारियों से सुरक्षा प्रदान करता है।"
    },
    {
        question: "प्रश्न 12. कौन सी कोशिकाएं 'स्मृति कोशिकाओं' के रूप में कार्य करती हैं?",
        answers: shuffle([
            { text: "केवल श्वेताणु", correct: false },
            { text: "केवल बिम्बाणु", correct: false },
            { text: "कुछ बी-लसिकाणु और टी-लसिकाणु", correct: true },
            { text: "लाल रक्त कोशिकाएं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पहली बार किसी रोगाणु के संपर्क में आने के बाद, कुछ लसिकाणु स्मृति कोशिकाओं में बदल जाते हैं, जो भविष्य में उसी रोगाणु के हमले को \"याद\" रखते हैं और तेजी से प्रतिक्रिया करते हैं।"
    },
    {
        question: "प्रश्न 13. जीवित-क्षीण टीके का एक उदाहरण है:",
        answers: shuffle([
            { text: "टिटनेस का टीका", correct: false },
            { text: "हेपेटाइटिस-बी का टीका", correct: false },
            { text: "खसरे का टीका", correct: true },
            { text: "रेबीज का टीका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीवित-क्षीण टीकों में रोगाणु का एक कमजोर रूप होता है जो बीमारी पैदा नहीं करता लेकिन एक मजबूत प्रतिरक्षा अनुक्रिया उत्पन्न करता है।"
    },
    {
        question: "प्रश्न 14. 'आविष' (टॉक्सोइड) टीके किस प्रकार काम करते हैं?",
        answers: shuffle([
            { text: "पूरे जीवाणु को शरीर में प्रवेश कराकर", correct: false },
            { text: "जीवाणु द्वारा उत्पन्न विष के एक निष्क्रिय रूप का उपयोग करके", correct: true },
            { text: "केवल जीवाणु के आनुवंशिक पदार्थ का उपयोग करके", correct: false },
            { text: "विषाणु को मारकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये टीके जीवाणु के विषैले प्रभाव से बचाते हैं, न कि स्वयं जीवाणु से।<br><br><i class='fa-solid fa-angles-right icon'></i> टिटनेस और डिप्थीरिया के टीके आविष टीके हैं।"
    },
    {
        question: "प्रश्न 15. टीकों के भंडारण और परिवहन के लिए आवश्यक तापमान श्रृंखला को क्या कहते हैं?",
        answers: shuffle([
            { text: "गर्म श्रृंखला", correct: false },
            { text: "आपूर्ति श्रृंखला", correct: false },
            { text: "शीत श्रृंखला", correct: true },
            { text: "प्रतिरक्षा श्रृंखला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शीत श्रृंखला एक प्रणाली है जो टीके को बनाने की जगह से लेकर लगाने की जगह तक एक निश्चित कम तापमान पर रखती है, ताकि उसकी प्रभावशीलता बनी रहे।"
    },
    {
        question: "प्रश्न 16. शरीर की सहज प्रतिरक्षा की क्या विशेषता है?",
        answers: shuffle([
            { text: "यह विशिष्ट रोगाणुओं के लिए होती है", correct: false },
            { text: "यह अविशिष्ट होती है और तत्काल सुरक्षा प्रदान करती है", correct: true },
            { text: "यह टीकाकरण के बाद विकसित होती है", correct: false },
            { text: "इसमें स्मृति होती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सहज प्रतिरक्षा जन्म से मौजूद होती है और यह किसी भी बाहरी रोगाणु के खिलाफ तुरंत और सामान्य तरीके से काम करती है, जैसे त्वचा एक अवरोधक के रूप में।"
    },
    {
        question: "प्रश्न 17. हेपेटाइटिस-बी का टीका किस प्रकार का टीका है?",
        answers: shuffle([
            { text: "जीवित-क्षीण टीका", correct: false },
            { text: "आविष टीका", correct: false },
            { text: "पुनः संयोजक उपइकाई टीका", correct: true },
            { text: "निष्क्रिय टीका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस टीके में पूरे विषाणु का उपयोग नहीं किया जाता, बल्कि आनुवंशिक अभियांत्रिकी द्वारा बनाए गए विषाणु के केवल एक प्रोटीन (प्रतिजन) का उपयोग किया जाता है।"
    },
    {
        question: "प्रश्न 18. 'सीरम' (रक्तम) में क्या पाया जाता है?",
        answers: shuffle([
            { text: "प्रतिजन", correct: false },
            { text: "प्रतिरक्षी", correct: true },
            { text: "बिम्बाणु", correct: false },
            { text: "लाल रक्त कोशिकाएं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सीरम रक्त प्लाज्मा का वह हिस्सा है जिसमें थक्के जमाने वाले कारक नहीं होते।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें प्रतिरक्षी, हार्मोन और अन्य प्रोटीन पाए जाते हैं।"
    },
    {
        question: "प्रश्न 19. किसी बीमारी के खिलाफ तत्काल सुरक्षा के लिए दिए जाने वाले बने-बनाए प्रतिरक्षी क्या कहलाते हैं?",
        answers: shuffle([
            { text: "टीका", correct: false },
            { text: "प्रतिजैविक (एंटीबायोटिक)", correct: false },
            { text: "प्रतिआविष या इम्युनोग्लोबुलिन", correct: true },
            { text: "पीड़ाहारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह कृत्रिम निष्क्रिय प्रतिरक्षा का एक उदाहरण है, जैसे टिटनेस या सांप के काटने पर दिए जाने वाले इंजेक्शन।"
    },
    {
        question: "प्रश्न 20. भारत का सार्वभौमिक टीकाकरण कार्यक्रम कब शुरू हुआ?",
        answers: shuffle([
            { text: "1975", correct: false },
            { text: "1985", correct: true },
            { text: "1995", correct: false },
            { text: "2005", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत सरकार ने 1985 में चरणबद्ध तरीके से सार्वभौमिक टीकाकरण कार्यक्रम शुरू किया, जो दुनिया के सबसे बड़े सार्वजनिक स्वास्थ्य कार्यक्रमों में से एक है।"
    },
    {
        question: "प्रश्न 21. प्रतिरक्षा प्रणाली की कौन सी कोशिकाएं विषाणु से संक्रमित कोशिकाओं को सीधे मार सकती हैं?",
        answers: shuffle([
            { text: "बी-कोशिकाएं", correct: false },
            { text: "प्लाज्मा कोशिकाएं", correct: false },
            { text: "मारक टी-लसिकाणु", correct: true },
            { text: "महाभक्षकाणु (मैक्रोफेज)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये टी-कोशिकाएं कोशिका-मध्यस्थ प्रतिरक्षा का हिस्सा हैं और शरीर की संक्रमित या कैंसरग्रस्त कोशिकाओं को पहचान कर नष्ट कर देती हैं।"
    },
    {
        question: "प्रश्न 22. पेंटावैलेंट टीके में कौन सी पांच बीमारियों के खिलाफ सुरक्षा शामिल है?",
        answers: shuffle([
            { text: "डिप्थीरिया, परट्यूसिस, टिटनेस, खसरा, रूबेला", correct: false },
            { text: "डिप्थीरिया, परट्यूसिस, टिटनेस, हेपेटाइटिस-बी, हीमोफिलस इन्फ्लुएंजा टाइप बी", correct: true },
            { text: "पोलियो, टीबी, टिटनेस, डिप्थीरिया, परट्यूसिस", correct: false },
            { text: "खसरा, गलसुआ, रूबेला, टीबी, पोलियो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक 5-इन-1 टीका है जो बच्चों को इन पांच गंभीर बीमारियों से बचाता है।"
    },
    {
        question: "प्रश्न 23. रेबीज (अलर्क रोग) का टीका किसने विकसित किया?",
        answers: shuffle([
            { text: "एडवर्ड जेनर", correct: false },
            { text: "लुई पाश्चर", correct: true },
            { text: "जोनास साल्क", correct: false },
            { text: "अल्बर्ट साबिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लुई पाश्चर ने रेबीज और एंथ्रेक्स के लिए टीके विकसित किए और पाश्चुरीकरण की प्रक्रिया का आविष्कार किया।"
    },
    {
        question: "प्रश्न 24. इम्युनोग्लोबुलिन का दूसरा नाम क्या है?",
        answers: shuffle([
            { text: "प्रतिजन", correct: false },
            { text: "प्रतिरक्षी", correct: true },
            { text: "हार्मोन", correct: false },
            { text: "प्रकिण्व (एंजाइम)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इम्युनोग्लोबुलिन 'Y' आकार के प्रोटीन अणु होते हैं जिन्हें प्रतिरक्षी भी कहा जाता है।"
    },
    {
        question: "प्रश्न 25. एलर्जी अनुक्रियाओं के दौरान कौन सा इम्युनोग्लोबुलिन अत्यधिक मात्रा में उत्पन्न होता है?",
        answers: shuffle([
            { text: "आई.जी.जी.", correct: false },
            { text: "आई.जी.एम.", correct: false },
            { text: "आई.जी.ए.", correct: false },
            { text: "आई.जी.ई.", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आई.जी.ई. एलर्जी अनुक्रियाओं और परजीवी संक्रमणों के खिलाफ रक्षा में शामिल होता है।"
    },
    {
        question: "प्रश्न 26. स्वप्रतिरक्षा रोग क्या है?",
        answers: shuffle([
            { text: "जब प्रतिरक्षा प्रणाली बहुत कमजोर हो जाती है", correct: false },
            { text: "जब प्रतिरक्षा प्रणाली शरीर की अपनी कोशिकाओं पर हमला करती है", correct: true },
            { text: "जब शरीर में कोई प्रतिरक्षा नहीं होती", correct: false },
            { text: "एक प्रकार का कैंसर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस स्थिति में, प्रतिरक्षा प्रणाली 'स्व' और 'गैर-स्व' के बीच अंतर करने में विफल हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> आमवातिक संधिशोथ इसका एक उदाहरण है।"
    },
    {
        question: "प्रश्न 27. कोविड-19 के लिए भारत में विकसित 'कोवैक्सीन' किस प्रकार का टीका है?",
        answers: shuffle([
            { text: "एम.आर.एन.ए. टीका", correct: false },
            { text: "निष्क्रिय (संपूर्ण-विषाणु) टीका", correct: true },
            { text: "विषाणु वाहक टीका", correct: false },
            { text: "उपइकाई टीका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोवैक्सीन एक निष्क्रिय टीका है, जिसमें मृत कोरोनावायरस का उपयोग किया गया है ताकि प्रतिरक्षा प्रणाली को सक्रिय किया जा सके।"
    },
    {
        question: "प्रश्न 28. जोनास साल्क किस टीके के विकास से जुड़े हैं?",
        answers: shuffle([
            { text: "मुखीय पोलियो टीका", correct: false },
            { text: "निष्क्रिय पोलियो टीका (इंजेक्शन)", correct: true },
            { text: "चेचक का टीका", correct: false },
            { text: "खसरे का टीका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डॉ. जोनास साल्क ने पहले प्रभावी निष्क्रिय पोलियो टीके का आविष्कार किया, जिसे इंजेक्शन द्वारा दिया जाता है।"
    },
    {
        question: "प्रश्न 29. वह कौन सा इम्युनोग्लोबुलिन है जो अपरा (प्लेसेंटा) को पार कर सकता है और भ्रूण को सुरक्षा प्रदान कर सकता है?",
        answers: shuffle([
            { text: "आई.जी.ए.", correct: false },
            { text: "आई.जी.ई.", correct: false },
            { text: "आई.जी.एम.", correct: false },
            { text: "आई.जी.जी.", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आई.जी.जी. एकमात्र प्रतिरक्षी है जो माँ से अपरा के माध्यम से भ्रूण तक जा सकती है, जिससे नवजात को जीवन के पहले कुछ महीनों के लिए निष्क्रिय प्रतिरक्षा मिलती है।"
    },
    {
        question: "प्रश्न 30. टीके में 'सहायक' (एडजुवेंट) का क्या कार्य है?",
        answers: shuffle([
            { text: "टीके को खराब होने से बचाना", correct: false },
            { text: "टीके के प्रति प्रतिरक्षा अनुक्रिया को बढ़ाना", correct: true },
            { text: "टीके का आयतन बढ़ाना", correct: false },
            { text: "टीके के दर्द को कम करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सहायक ऐसे पदार्थ होते हैं जिन्हें टीके में मिलाया जाता है ताकि शरीर द्वारा उत्पन्न प्रतिरक्षा अनुक्रिया अधिक मजबूत और लंबे समय तक चलने वाली हो।"
    },
    {
        question: "प्रश्न 31. रोटावायरस का टीका किस बीमारी से बचाता है?",
        answers: shuffle([
            { text: "श्वसन संक्रमण", correct: false },
            { text: "अतिसार (दस्त)", correct: true },
            { text: "त्वचा रोग", correct: false },
            { text: "मस्तिष्क ज्वर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रोटावायरस छोटे बच्चों में गंभीर दस्त का एक प्रमुख कारण है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह टीका इस संक्रमण से होने वाले गंभीर अतिसार से बचाता है।"
    },
    {
        question: "प्रश्न 32. प्रथम संपर्क पर उत्पन्न होने वाली प्राथमिक प्रतिरक्षा अनुक्रिया में मुख्य रूप से कौन सा प्रतिरक्षी बनता है?",
        answers: shuffle([
            { text: "आई.जी.जी.", correct: false },
            { text: "आई.जी.एम.", correct: true },
            { text: "आई.जी.ए.", correct: false },
            { text: "आई.जी.ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी प्रतिजन के साथ पहले संपर्क के दौरान आई.जी.एम. सबसे पहले बनने वाला प्रतिरक्षी है।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में आई.जी.जी. का उत्पादन होता है।"
    },
    {
        question: "प्रश्न 33. 'अतिसंवेदनशीलता' का क्या अर्थ है?",
        answers: shuffle([
            { text: "प्रतिरक्षा की कमी", correct: false },
            { text: "प्रतिरक्षा प्रणाली की अत्यधिक या अनुपयुक्त अनुक्रिया", correct: true },
            { text: "जन्मजात प्रतिरक्षा", correct: false },
            { text: "निष्क्रिय प्रतिरक्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एलर्जी अतिसंवेदनशीलता का एक सामान्य उदाहरण है, जहाँ प्रतिरक्षा प्रणाली परागकण जैसे हानिरहित पदार्थों के प्रति अत्यधिक प्रतिक्रिया करती है।"
    },
    {
        question: "प्रश्न 34. सीरम विज्ञान किसका अध्ययन है?",
        answers: shuffle([
            { text: "रक्त कोशिकाओं का", correct: false },
            { text: "सीरम और प्रतिरक्षा अनुक्रियाओं का", correct: true },
            { text: "कैंसर का", correct: false },
            { text: "विषाणु का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सीरम वैज्ञानिक परीक्षणों का उपयोग अक्सर रक्त में किसी विशेष संक्रमण के खिलाफ प्रतिरक्षी की उपस्थिति का पता लगाने के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 35. 'कोविशील्ड' टीका किस तकनीक पर आधारित है?",
        answers: shuffle([
            { text: "निष्क्रिय विषाणु", correct: false },
            { text: "विषाणु वाहक", correct: true },
            { text: "एम.आर.एन.ए.", correct: false },
            { text: "प्रोटीन उपइकाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोविशील्ड में चिंपांज़ी के एक हानिरहित एडेनोविषाणु का उपयोग करके कोरोनावायरस के शूल प्रोटीन के लिए आनुवंशिक कोड को शरीर की कोशिकाओं तक पहुँचाया जाता है।"
    },
    {
        question: "प्रश्न 36. कौन सा अंग प्राथमिक लसिकाभ अंग नहीं है?",
        answers: shuffle([
            { text: "अस्थि मज्जा", correct: false },
            { text: "थाइमस", correct: false },
            { text: "प्लीहा", correct: true },
            { text: "उपरोक्त में से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अस्थि मज्जा और थाइमस प्राथमिक लसिकाभ अंग हैं जहाँ लसिकाणु बनते और परिपक्व होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> प्लीहा और लसीका पर्व द्वितीयक अंग हैं।"
    },
    {
        question: "प्रश्न 37. एक कोशिका जो रोगाणुओं का भक्षण करती है, क्या कहलाती है?",
        answers: shuffle([
            { text: "लसिकाणु", correct: false },
            { text: "बिम्बाणु", correct: false },
            { text: "महाभक्षकाणु", correct: true },
            { text: "प्लाज्मा कोशिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाभक्षकाणु ('बड़ा भक्षक') एक प्रकार की श्वेत रक्त कोशिका है जो जीवाणु, विषाणु और कोशिकीय मलबे को निगलकर नष्ट कर देती है।"
    },
    {
        question: "प्रश्न 38. 'इंटरफेरॉन' क्या हैं?",
        answers: shuffle([
            { text: "एक प्रकार के हार्मोन", correct: false },
            { text: "विषाणु से संक्रमित कोशिकाओं द्वारा स्रावित प्रोटीन जो अन्य कोशिकाओं को संक्रमण से बचाते हैं", correct: true },
            { text: "एक प्रकार के प्रतिजैविक", correct: false },
            { text: "एक प्रकार के प्रतिजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये साइटोकाइन का एक समूह हैं जो आस-पास की कोशिकाओं को विषाणु प्रतिकृति के खिलाफ अपनी सुरक्षा बढ़ाने के लिए संकेत देते हैं।"
    },
    {
        question: "प्रश्न 39. राष्ट्रीय टीकाकरण दिवस भारत में कब मनाया जाता है?",
        answers: shuffle([
            { text: "16 मार्च", correct: true },
            { text: "7 अप्रैल", correct: false },
            { text: "1 दिसंबर", correct: false },
            { text: "24 जनवरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह दिन 1995 में भारत में मुखीय पोलियो टीके की पहली खुराक दिए जाने के उपलक्ष्य में मनाया जाता है और इसका उद्देश्य टीकाकरण के महत्व को उजागर करना है।"
    },
    {
        question: "प्रश्न 40. हिस्टामिन का स्राव कौन सी कोशिकाएं करती हैं?",
        answers: shuffle([
            { text: "श्वेताणु", correct: false },
            { text: "लसिकाणु", correct: false },
            { text: "मास्ट कोशिकाएं और बेसोफिल", correct: true },
            { text: "एकेन्द्रकाणु (मोनोसाइट)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिस्टामिन एक रसायन है जो एलर्जी और सूजन अनुक्रियाओं में शामिल होता है, जिससे रक्त वाहिकाएं फैलती हैं और खुजली होती है।"
    },
    {
        question: "प्रश्न 41. टीका लगाने की प्रक्रिया को क्या कहते हैं?",
        answers: shuffle([
            { text: "प्रतिरक्षण", correct: false },
            { text: "टीकाकरण", correct: false },
            { text: "संरोपण", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन सभी शब्दों का उपयोग अक्सर एक दूसरे के स्थान पर किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> टीकाकरण विशेष रूप से टीके के प्रशासन को संदर्भित करता है, जबकि प्रतिरक्षण प्रतिरक्षा विकसित होने की प्रक्रिया है।"
    },
    {
        question: "प्रश्न 42. जन्म के बाद बच्चे को दिया जाने वाला पहला टीका कौन सा है?",
        answers: shuffle([
            { text: "एम.एम.आर.", correct: false },
            { text: "डी.पी.टी.", correct: false },
            { text: "बी.सी.जी.", correct: true },
            { text: "टिटनेस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय राष्ट्रीय टीकाकरण सारणी के अनुसार, बी.सी.जी., मुखीय पोलियो टीके की शून्य खुराक और हेपेटाइटिस-बी की जन्म खुराक जन्म के समय ही दी जाती है।"
    },
    {
        question: "प्रश्न 43. टिटनेस (धनुस्तंभ) का कारण क्या है?",
        answers: shuffle([
            { text: "विषाणु", correct: false },
            { text: "जीवाणु", correct: true },
            { text: "कवक", correct: false },
            { text: "प्रोटोजोआ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टिटनेस 'क्लोस्ट्रीडियम टेटानी' नामक जीवाणु द्वारा उत्पन्न विष के कारण होता है, जो आमतौर पर मिट्टी में पाया जाता है और घावों के माध्यम से शरीर में प्रवेश करता है।"
    },
    {
        question: "प्रश्न 44. कोशिका-मध्यस्थ प्रतिरक्षा में मुख्य भूमिका किसकी होती है?",
        answers: shuffle([
            { text: "प्रतिरक्षी की", correct: false },
            { text: "बी-लसिकाणु की", correct: false },
            { text: "टी-लसिकाणु की", correct: true },
            { text: "पूरक प्रणाली की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस प्रकार की प्रतिरक्षा में, टी-कोशिकाएं सीधे संक्रमित कोशिकाओं पर हमला करती हैं या अन्य प्रतिरक्षा कोशिकाओं को सक्रिय करती हैं।"
    },
    {
        question: "प्रश्न 45. 'एनाफिलेक्सिस' क्या है?",
        answers: shuffle([
            { text: "एक हल्की एलर्जी अनुक्रिया", correct: false },
            { text: "एक गंभीर, जानलेवा एलर्जी अनुक्रिया", correct: true },
            { text: "एक प्रकार का टीकाकरण", correct: false },
            { text: "एक स्वप्रतिरक्षा रोग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक तीव्र प्रणालीगत एलर्जी अनुक्रिया है जो कुछ ही मिनटों में सांस लेने में कठिनाई और रक्तचाप में गिरावट का कारण बन सकती है।"
    },
    {
        question: "प्रश्न 46. कौन सा टीका जीवाणु से नहीं, बल्कि विषाणु से बचाता है?",
        answers: shuffle([
            { text: "डिप्थीरिया", correct: false },
            { text: "टिटनेस", correct: false },
            { text: "परट्यूसिस", correct: false },
            { text: "खसरा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खसरा एक अत्यधिक संक्रामक विषाणु जनित बीमारी है, जबकि डिप्थीरिया, टिटनेस और परट्यूसिस सभी जीवाणु के कारण होते हैं।"
    },
    {
        question: "प्रश्न 47. 'प्रतिसीरम' (एंटीसेरम) में क्या होता है?",
        answers: shuffle([
            { text: "किसी विशेष प्रतिजन के खिलाफ उच्च सांद्रता में प्रतिरक्षी", correct: true },
            { text: "कमजोर किए गए विषाणु", correct: false },
            { text: "मृत जीवाणु", correct: false },
            { text: "प्रतिजैविक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिसीरम का उपयोग निष्क्रिय टीकाकरण के लिए किया जाता है, जैसे कि सांप के जहर के खिलाफ प्रतिविष।"
    },
    {
        question: "प्रश्न 48. एड्स का विषाणु एच.आई.वी., मुख्य रूप से किन कोशिकाओं को लक्षित करता है?",
        answers: shuffle([
            { text: "बी-कोशिकाएं", correct: false },
            { text: "सहायक टी-कोशिकाएं", correct: true },
            { text: "श्वेताणु", correct: false },
            { text: "बिम्बाणु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एच.आई.वी., सहायक टी-कोशिकाओं को संक्रमित और नष्ट कर देता है, जो प्रतिरक्षा अनुक्रिया को समन्वित करने के लिए महत्वपूर्ण हैं, जिससे प्रतिरक्षा प्रणाली गंभीर रूप से कमजोर हो जाती है।"
    },
    {
        question: "प्रश्न 49. विश्व टीकाकरण सप्ताह कब मनाया जाता है?",
        answers: shuffle([
            { text: "जनवरी के अंतिम सप्ताह में", correct: false },
            { text: "मार्च के अंतिम सप्ताह में", correct: false },
            { text: "अप्रैल के अंतिम सप्ताह में", correct: true },
            { text: "नवंबर के अंतिम सप्ताह में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विश्व स्वास्थ्य संगठन द्वारा हर साल अप्रैल के अंतिम सप्ताह में विश्व टीकाकरण सप्ताह मनाया जाता है ताकि टीकाकरण के महत्व को बढ़ावा दिया जा सके।"
    },
    {
        question: "प्रश्न 50. पहली पीढ़ी के टीके आमतौर पर कैसे बनाए जाते थे?",
        answers: shuffle([
            { text: "आनुवंशिक अभियांत्रिकी द्वारा", correct: false },
            { text: "संपूर्ण जीव (जीवित या मृत) का उपयोग करके", correct: true },
            { text: "केवल प्रोटीन का उपयोग करके", correct: false },
            { text: "एम.आर.एन.ए. का उपयोग करके", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारंपरिक या पहली पीढ़ी के टीकों में पूरे रोगाणु का एक कमजोर या निष्क्रिय रूप शामिल होता है, जैसे चेचक और पोलियो के टीके।"
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