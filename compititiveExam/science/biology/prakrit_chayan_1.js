const questions = [
    {
        topHeading: "प्राकृतिक चयन पर आधारित 30 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. प्राकृतिक चयन का सिद्धांत किसने प्रतिपादित किया था?",
        answers: shuffle([
            { text: "ग्रेगर मेंडल", correct: false },
            { text: "चार्ल्स डार्विन", correct: true },
            { text: "जीन-बैप्टिस्ट लैमार्क", correct: false },
            { text: "लुई पाश्चर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चार्ल्स डार्विन ने अपनी पुस्तक \"ऑन द ओरिजिन ऑफ स्पीशीज\" (1859) में प्राकृतिक चयन द्वारा विकास के सिद्धांत को विस्तार से प्रस्तुत किया।<br><br><i class='fa-solid fa-angles-right icon'></i>  अल्फ्रेड रसेल वॉलेस भी स्वतंत्र रूप से इसी निष्कर्ष पर पहुँचे थे।"
    },
    {
        question: "प्रश्न 2. प्राकृतिक चयन की प्रक्रिया का अंतिम परिणाम क्या है?",
        answers: shuffle([
            { text: "उत्परिवर्तन (Mutation)", correct: false },
            { text: "अनुकूलन (Adaptation)", correct: true },
            { text: "जनन (Reproduction)", correct: false },
            { text: "प्रवास (Migration)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्राकृतिक चयन वह प्रक्रिया है जिसके द्वारा किसी जनसंख्या में वे लक्षण अधिक सामान्य हो जाते हैं जो उत्तरजीविता और प्रजनन के लिए अधिक अनुकूल होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे जीव अपने पर्यावरण के प्रति बेहतर रूप से अनुकूलित हो जाते हैं।"
    },
    {
        question: "प्रश्न 3. \"योग्यतम की उत्तरजीविता\" (Survival of the Fittest) वाक्यांश का क्या अर्थ है?",
        answers: shuffle([
            { text: "जो जीव सबसे मजबूत है, वह जीवित रहता है।", correct: false },
            { text: "जो जीव अपने पर्यावरण के प्रति सबसे अच्छा अनुकूलित है, वह जीवित रहता है और प्रजनन करता है।", correct: true },
            { text: "जो जीव सबसे तेज दौड़ता है, वह जीवित रहता है।", correct: false },
            { text: "जो जीव सबसे बड़ा है, वह जीवित रहता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस संदर्भ में 'फिटनेस' का अर्थ शारीरिक शक्ति नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i>  बल्कि किसी जीव की अपने पर्यावरण में जीवित रहने और सफलतापूर्वक अपनी संतान उत्पन्न करने की क्षमता है।"
    },
    {
        question: "प्रश्न 4. प्राकृतिक चयन किस पर कार्य करता है?",
        answers: shuffle([
            { text: "व्यक्तिगत जीव (Individual Organism)", correct: true },
            { text: "जनसंख्या (Population)", correct: false },
            { text: "प्रजाति (Species)", correct: false },
            { text: "पारिस्थितिकी तंत्र (Ecosystem)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चयन व्यक्तिगत जीवों पर कार्य करता है (अर्थात, कुछ व्यक्ति दूसरों की तुलना में अधिक जीवित रहते हैं और प्रजनन करते हैं)।<br><br><i class='fa-solid fa-angles-right icon'></i>  लेकिन इसका परिणाम जनसंख्या के विकास के रूप में दिखाई देता है।"
    },
    {
        question: "प्रश्न 5. प्राकृतिक चयन के लिए निम्नलिखित में से क्या आवश्यक है?",
        answers: shuffle([
            { text: "जनसंख्या में विभिन्नता (Variation)", correct: true },
            { text: "स्थिर पर्यावरण", correct: false },
            { text: "सभी जीवों का समान रूप से जीवित रहना", correct: false },
            { text: "असीमित संसाधन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि किसी जनसंख्या में सभी जीव आनुवंशिक रूप से समान होंगे, तो पर्यावरण में बदलाव आने पर किसी भी जीव को जीवित रहने का लाभ नहीं मिलेगा।<br><br><i class='fa-solid fa-angles-right icon'></i>  विभिन्नता ही चयन के लिए कच्चा माल प्रदान करती है।"
    },
    {
        question: "प्रश्न 6. इंग्लैंड में औद्योगिक कृष्णता (Industrial Melanism) किस जीव में प्राकृतिक चयन का एक उत्कृष्ट उदाहरण है?",
        answers: shuffle([
            { text: "तितली", correct: false },
            { text: "घरेलू मक्खी", correct: false },
            { text: "पेपरर्ड मॉथ (पतंगा)", correct: true },
            { text: "मच्छर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> औद्योगिक क्रांति के दौरान, प्रदूषण से पेड़ों के तने काले हो गए।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे गहरे रंग के पेपरर्ड मॉथ शिकारियों से बच गए और उनकी संख्या बढ़ गई, जबकि हल्के रंग के पतंगों की संख्या कम हो गई।"
    },
    {
        question: "प्रश्न 7. डार्विन के फिंच (Galapagos Finches) की चोंच के आकार में भिन्नता किसका उदाहरण है?",
        answers: shuffle([
            { text: "कृत्रिम चयन", correct: false },
            { text: "लैंगिक चयन", correct: false },
            { text: "अनुकूली विकिरण (Adaptive Radiation)", correct: true },
            { text: "आनुवंशिक बहाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गैलापागोस द्वीपों पर, एक ही पूर्वज फिंच से विभिन्न प्रजातियां विकसित हुईं, जिनकी चोंच अलग-अलग खाद्य स्रोतों (जैसे बीज, कीड़े) के लिए अनुकूलित हो गई।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह प्राकृतिक चयन के माध्यम से अनुकूली विकिरण का एक प्रमुख उदाहरण है।"
    },
    {
        question: "प्रश्न 8. वह कौन सी प्रक्रिया है जो विकास के लिए आनुवंशिक विभिन्नता का अंतिम स्रोत है?",
        answers: shuffle([
            { text: "प्राकृतिक चयन", correct: false },
            { text: "उत्परिवर्तन (Mutation)", correct: true },
            { text: "प्रवास (Migration)", correct: false },
            { text: "अनुकूलन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्परिवर्तन डीएनए में यादृच्छिक परिवर्तन हैं जो नए एलील और लक्षण उत्पन्न करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  प्राकृतिक चयन इन विविधताओं पर कार्य करता है, लेकिन उन्हें बनाता नहीं है।"
    },
    {
        question: "प्रश्न 9. जब प्राकृतिक चयन एक चरम लक्षण (extreme phenotype) के पक्ष में होता है, तो उसे क्या कहा जाता है?",
        answers: shuffle([
            { text: "स्थिर चयन (Stabilizing Selection)", correct: false },
            { text: "दिशात्मक चयन (Directional Selection)", correct: true },
            { text: "विदारी चयन (Disruptive Selection)", correct: false },
            { text: "लैंगिक चयन (Sexual Selection)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिशात्मक चयन तब होता है जब पर्यावरण में बदलाव के कारण जनसंख्या का औसत लक्षण एक दिशा में स्थानांतरित हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जैसे बैक्टीरिया में एंटीबायोटिक प्रतिरोध का विकास।"
    },
    {
        question: "प्रश्न 10. जब प्राकृतिक चयन मध्यवर्ती लक्षणों (intermediate phenotypes) के पक्ष में होता है और चरम लक्षणों को समाप्त करता है, तो उसे क्या कहा जाता है?",
        answers: shuffle([
            { text: "स्थिर चयन (Stabilizing Selection)", correct: true },
            { text: "दिशात्मक चयन (Directional Selection)", correct: false },
            { text: "विदारी चयन (Disruptive Selection)", correct: false },
            { text: "कृत्रिम चयन (Artificial Selection)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका एक उदाहरण मानव शिशुओं का जन्म के समय वजन है।<br><br><i class='fa-solid fa-angles-right icon'></i>  बहुत कम या बहुत अधिक वजन वाले शिशुओं की उत्तरजीविता दर कम होती है, इसलिए चयन औसत वजन के पक्ष में होता है। इसे स्थिर चयन कहते हैं।"
    },
    {
        question: "प्रश्न 11. जब प्राकृतिक चयन दोनों चरम लक्षणों (both extreme phenotypes) के पक्ष में होता है, तो उसे क्या कहा जाता है?",
        answers: shuffle([
            { text: "स्थिर चयन", correct: false },
            { text: "दिशात्मक चयन", correct: false },
            { text: "विदारी चयन (Disruptive Selection)", correct: true },
            { text: "आवृत्ति-निर्भर चयन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विदारी चयन मध्यवर्ती रूपों के विरुद्ध और दोनों चरम रूपों के पक्ष में कार्य करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह नई प्रजातियों के निर्माण का कारण बन सकता है।"
    },
    {
        question: "प्रश्न 12. मच्छरों में डीडीटी (DDT) प्रतिरोध का विकास किसका उदाहरण है?",
        answers: shuffle([
            { text: "कृत्रिम चयन", correct: false },
            { text: "प्राकृतिक चयन", correct: true },
            { text: "लैमार्कवाद", correct: false },
            { text: "आनुवंशिक बहाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब डीडीटी का छिड़काव किया गया, तो अधिकांश मच्छर मर गए, लेकिन कुछ मच्छर जिनमें डीडीटी के प्रति आनुवंशिक प्रतिरोध था, वे जीवित बच गए और उन्होंने प्रजनन किया।<br><br><i class='fa-solid fa-angles-right icon'></i>  समय के साथ, प्रतिरोधी मच्छरों की पूरी आबादी विकसित हो गई, यह प्राकृतिक चयन है।"
    },
    {
        question: "प्रश्न 13. प्राकृतिक चयन और कृत्रिम चयन में मुख्य अंतर क्या है?",
        answers: shuffle([
            { text: "कृत्रिम चयन तेज होता है।", correct: false },
            { text: "प्राकृतिक चयन में पर्यावरण चयनकर्ता होता है, जबकि कृत्रिम चयन में मनुष्य।", correct: true },
            { text: "प्राकृतिक चयन केवल जानवरों में होता है।", correct: false },
            { text: "कृत्रिम चयन से नई प्रजातियां नहीं बन सकतीं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृत्रिम चयन में, मनुष्य वांछित लक्षणों के आधार पर पौधों या जानवरों का प्रजनन कराते हैं (जैसे कुत्तों की नस्लें)।<br><br><i class='fa-solid fa-angles-right icon'></i>  जबकि प्राकृतिक चयन में, पर्यावरण की परिस्थितियां निर्धारित करती हैं कि कौन से लक्षण लाभप्रद हैं।"
    },
    {
        question: "प्रश्न 14. डार्विन के अनुसार, जीवों में \"जीवन के लिए संघर्ष\" (Struggle for Existence) का मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "शिकारियों की उपस्थिति", correct: false },
            { text: "बीमारियों का फैलना", correct: false },
            { text: "सीमित संसाधन और जीवों द्वारा अपनी क्षमता से अधिक संतान उत्पन्न करना", correct: true },
            { text: "जलवायु परिवर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डार्विन ने देखा कि जीव जितनी संतानें पैदा करते हैं, उनमें से सभी जीवित नहीं रह पातीं।<br><br><i class='fa-solid fa-angles-right icon'></i>  क्योंकि भोजन, स्थान और अन्य संसाधन सीमित होते हैं, जिससे प्रतिस्पर्धा होती है।"
    },
    {
        question: "प्रश्न 15. \"समरूप अंग\" (Analogous Organs) जैसे कीटों और पक्षियों के पंख, किसका परिणाम हैं?",
        answers: shuffle([
            { text: "अभिसारी विकास (Convergent Evolution)", correct: true },
            { text: "अपसारी विकास (Divergent Evolution)", correct: false },
            { text: "सह-विकास (Co-evolution)", correct: false },
            { text: "अनुकूली विकिरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब अलग-अलग वंशों के जीव समान पर्यावरणीय दबावों के कारण समान लक्षण विकसित करते हैं, तो उसे अभिसारी विकास कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  इन अंगों की संरचना भिन्न होती है लेकिन कार्य समान होता है।"
    },
    {
        question: "प्रश्न 16. \"समजात अंग\" (Homologous Organs) जैसे मनुष्य का हाथ और व्हेल का फ्लिपर, किसका प्रमाण देते हैं?",
        answers: shuffle([
            { text: "अभिसारी विकास", correct: false },
            { text: "एक साझा पूर्वज से अपसारी विकास", correct: true },
            { text: "लैमार्कवाद", correct: false },
            { text: "स्वतः जननवाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समजात अंगों की मूल संरचना समान होती है लेकिन कार्य भिन्न-भिन्न होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो यह दर्शाता है कि संबंधित जीव एक सामान्य पूर्वज से विकसित हुए हैं और अलग-अलग वातावरणों के लिए अनुकूलित हुए हैं। इसे अपसारी विकास कहते हैं।"
    },
    {
        question: "प्रश्न 17. प्राकृतिक चयन है:",
        answers: shuffle([
            { text: "एक यादृच्छिक (random) प्रक्रिया", correct: false },
            { text: "एक गैर-यादृच्छिक (non-random) प्रक्रिया", correct: true },
            { text: "एक लक्ष्य-उन्मुख (goal-oriented) प्रक्रिया", correct: false },
            { text: "विकास का एकमात्र तंत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि विभिन्नता (उत्परिवर्तन) यादृच्छिक है।<br><br><i class='fa-solid fa-angles-right icon'></i>  लेकिन प्राकृतिक चयन गैर-यादृच्छिक है क्योंकि यह उन लक्षणों का चयन करता है जो किसी दिए गए वातावरण में उत्तरजीविता और प्रजनन को बढ़ाते हैं।"
    },
    {
        question: "प्रश्न 18. लैंगिक चयन (Sexual Selection) क्या है?",
        answers: shuffle([
            { text: "यह प्राकृतिक चयन का एक रूप है जो संभोग साथी प्राप्त करने की क्षमता पर कार्य करता है।", correct: true },
            { text: "यह मनुष्यों द्वारा किया जाने वाला चयन है।", correct: false },
            { text: "यह केवल नर जीवों में होता है।", correct: false },
            { text: "यह हमेशा अस्तित्व के लिए हानिकारक होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह प्राकृतिक चयन का एक रूप है जो संभोग साथी प्राप्त करने और सफलतापूर्वक प्रजनन करने की क्षमता पर कार्य करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसके कारण ऐसे लक्षण विकसित हो सकते हैं जो प्रजनन की सफलता को बढ़ाते हैं, जैसे मोर की विस्तृत पूंछ।"
    },
    {
        question: "प्रश्न 19. अवशेषी अंग (Vestigial Organs), जैसे मानव में अपेंडिक्स, क्या दर्शाते हैं?",
        answers: shuffle([
            { text: "ये अंग भविष्य में उपयोगी होंगे।", correct: false },
            { text: "ये अंग पूर्वजों में कार्यात्मक थे लेकिन अब नहीं हैं।", correct: true },
            { text: "इनका कोई विकासवादी महत्व नहीं है।", correct: false },
            { text: "ये हाल ही में विकसित हुए हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवशेषी अंग उन संरचनाओं के अवशेष हैं जो किसी जीव के पूर्वजों में एक महत्वपूर्ण कार्य करते थे।<br><br><i class='fa-solid fa-angles-right icon'></i>  लेकिन अब उनका कार्य बहुत कम या समाप्त हो गया है, जो विकास का प्रमाण है।"
    },
    {
        question: "प्रश्न 20. जनसंख्या में एलील आवृत्तियों में संयोगवश होने वाले परिवर्तन को क्या कहा जाता है?",
        answers: shuffle([
            { text: "प्राकृतिक चयन", correct: false },
            { text: "जीन प्रवाह (Gene Flow)", correct: false },
            { text: "आनुवंशिक बहाव (Genetic Drift)", correct: true },
            { text: "उत्परिवर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आनुवंशिक बहाव, विशेष रूप से छोटी आबादी में, संयोग की घटनाओं के कारण एलील आवृत्तियों में परिवर्तन का कारण बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह प्राकृतिक चयन से अलग एक विकासवादी तंत्र है।"
    },
    {
        question: "प्रश्न 21. डार्विन के सिद्धांत का एक कमजोर बिंदु क्या था?",
        answers: shuffle([
            { text: "उन्होंने जीवन के लिए संघर्ष की अवधारणा को नहीं समझा।", correct: false },
            { text: "वह विभिन्नता के स्रोत और वंशानुक्रम के तंत्र की व्याख्या नहीं कर सके।", correct: true },
            { text: "उन्होंने जीवाश्मों के महत्व को नजरअंदाज कर दिया।", correct: false },
            { text: "उन्होंने अत्यधिक संतानोत्पत्ति पर ध्यान नहीं दिया।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डार्विन के समय में, मेंडल के आनुवंशिकी के नियम और उत्परिवर्तन की अवधारणा ज्ञात नहीं थी।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसलिए वह यह नहीं समझा सके कि लक्षण कैसे उत्पन्न होते हैं और अगली पीढ़ी में कैसे पारित होते हैं।"
    },
    {
        question: "प्रश्न 22. सह-विकास (Co-evolution) का एक उदाहरण क्या है?",
        answers: shuffle([
            { text: "एक ही प्रजाति के नरों के बीच प्रतिस्पर्धा", correct: false },
            { text: "एक फूल वाले पौधे और उसके परागणकर्ता कीट का एक साथ विकसित होना", correct: true },
            { text: "शिकार और शिकारी का अलग-अलग विकसित होना", correct: false },
            { text: "कुत्तों का भेड़ियों से विकसित होना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सह-विकास वह प्रक्रिया है जिसमें दो या दो से अधिक प्रजातियां एक-दूसरे पर चयन दबाव डालकर एक-दूसरे के विकास को प्रभावित करती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जैसे किसी फूल की संरचना और उसके परागणकर्ता की चोंच का एक साथ अनुकूलित होना।"
    },
    {
        question: "प्रश्न 23. कौन सा कथन प्राकृतिक चयन के बारे में गलत है?",
        answers: shuffle([
            { text: "यह पूर्णता (perfection) की ओर ले जाता है।", correct: true },
            { text: "यह मौजूदा विभिन्नताओं पर कार्य करता है।", correct: false },
            { text: "यह भविष्य की ज़रूरतों का अनुमान नहीं लगा सकता है।", correct: false },
            { text: "यह पर्यावरण पर निर्भर है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्राकृतिक चयन जीवों को \"पूर्ण\" नहीं बनाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह केवल उन्हें उनके वर्तमान वातावरण के लिए पर्याप्त रूप से अनुकूलित करता है। एक वातावरण में जो अनुकूलन लाभकारी है, वह दूसरे में हानिकारक हो सकता है।"
    },
    {
        question: "प्रश्न 24. लैमार्क के \"उपार्जित लक्षणों की वंशानुगति\" के सिद्धांत और डार्विन के सिद्धांत में क्या अंतर है?",
        answers: shuffle([
            { text: "लैमार्क ने विकास को नहीं माना।", correct: false },
            { text: "लैमार्क का मानना था कि जीव अपने जीवनकाल में प्राप्त लक्षणों को संतान को दे सकते हैं।", correct: true },
            { text: "डार्विन ने विभिन्नता को महत्व नहीं दिया।", correct: false },
            { text: "डार्विन का सिद्धांत केवल पौधों पर लागू होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैमार्क का विचार था कि जिराफ ने अपनी गर्दन ऊँची पत्तियों तक पहुँचने के लिए तानी और यह लंबी गर्दन अगली पीढ़ी को विरासत में मिली।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसके विपरीत, डार्विन का मानना था कि लंबी गर्दन वाले जिराफ प्राकृतिक रूप से मौजूद थे और वे जीवित रहने में अधिक सफल रहे।"
    },
    {
        question: "प्रश्न 25. किसी जनसंख्या की फिटनेस (अनुकूलता) को सबसे अच्छे से कैसे मापा जा सकता है?",
        answers: shuffle([
            { text: "उसके सदस्यों की औसत जीवन प्रत्याशा से", correct: false },
            { text: "उसके सदस्यों की शारीरिक शक्ति से", correct: false },
            { text: "उसके सदस्यों द्वारा छोड़ी गई व्यवहार्य संतानों की संख्या से", correct: true },
            { text: "उसके सदस्यों की बीमारियों से लड़ने की क्षमता से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विकासवादी संदर्भ में, फिटनेस का अंतिम माप प्रजनन सफलता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यानी, अगली पीढ़ी के जीन पूल में एक व्यक्ति कितना योगदान देता है।"
    },
    {
        question: "प्रश्न 26. नई प्रजातियों के निर्माण की प्रक्रिया को क्या कहा जाता है?",
        answers: shuffle([
            { text: "अनुकूलन (Adaptation)", correct: false },
            { text: "प्रजाति उद्भवन (Speciation)", correct: true },
            { text: "सह-विकास (Co-evolution)", correct: false },
            { text: "अभिसरण (Convergence)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रजाति उद्भवन वह विकासवादी प्रक्रिया है जिसके द्वारा भौगोलिक अलगाव या अन्य तंत्रों के माध्यम से नई और विशिष्ट जैविक प्रजातियां बनती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  प्राकृतिक चयन इसमें एक प्रमुख भूमिका निभाता है।"
    },
    {
        question: "प्रश्न 27. यदि किसी ठंडे वातावरण में रहने वाले स्तनधारियों की आबादी में, प्राकृतिक चयन मोटे फर वाले व्यक्तियों के पक्ष में कार्य करता है, तो यह किस प्रकार का चयन है?",
        answers: shuffle([
            { text: "दिशात्मक चयन", correct: true },
            { text: "स्थिर चयन", correct: false },
            { text: "विदारी चयन", correct: false },
            { text: "लैंगिक चयन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चयन आबादी के औसत लक्षण को एक दिशा (मोटे फर की ओर) में स्थानांतरित कर रहा है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो उस विशिष्ट पर्यावरणीय दबाव (ठंड) के लिए एक अनुकूलन है। यह दिशात्मक चयन है।"
    },
    {
        question: "प्रश्न 28. औद्योगिक कृष्णता के उदाहरण में, जब प्रदूषण नियंत्रण कानूनों के बाद पेड़ के तने फिर से हल्के रंग के हो गए, तो क्या हुआ?",
        answers: shuffle([
            { text: "गहरे रंग के पतंगों की संख्या बढ़ती रही।", correct: false },
            { text: "हल्के रंग के पतंगों की संख्या फिर से बढ़ गई।", correct: true },
            { text: "सभी पतंगे विलुप्त हो गए।", correct: false },
            { text: "पतंगों के रंग में कोई बदलाव नहीं हुआ।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह प्राकृतिक चयन की उत्क्रमणीयता (reversibility) को दर्शाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जैसे ही चयन दबाव (काला प्रदूषण) हटा, चयन हल्के रंग के पतंगों के पक्ष में हो गया जो अब बेहतर छिप सकते थे।"
    },
    {
        question: "प्रश्न 29. प्राकृतिक चयन के कार्य करने के लिए सबसे छोटी जैविक इकाई कौन सी है जो विकसित हो सकती है?",
        answers: shuffle([
            { text: "एक कोशिका", correct: false },
            { text: "एक व्यक्तिगत जीव", correct: false },
            { text: "एक जनसंख्या", correct: true },
            { text: "एक समुदाय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यक्ति विकसित नहीं होते हैं; वे केवल चयनित होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  विकास समय के साथ एक जनसंख्या की आनुवंशिक संरचना में परिवर्तन है।"
    },
    {
        question: "प्रश्न 30. डार्विन की किस अवधारणा को थॉमस माल्थस के जनसंख्या पर लिखे गए निबंध से प्रभावित माना जाता है?",
        answers: shuffle([
            { text: "वंशानुक्रम", correct: false },
            { text: "विभिन्नता", correct: false },
            { text: "जीवन के लिए संघर्ष (अत्यधिक संतानोत्पत्ति और सीमित संसाधन)", correct: true },
            { text: "सामान्य पूर्वज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माल्थस ने लिखा था कि मानव आबादी ज्यामितीय रूप से बढ़ती है जबकि खाद्य संसाधन अंकगणितीय रूप से बढ़ते हैं, जिससे संघर्ष होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  डार्विन ने इस विचार को प्रकृति पर लागू किया, जिससे 'जीवन के लिए संघर्ष' की अवधारणा आई।"
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