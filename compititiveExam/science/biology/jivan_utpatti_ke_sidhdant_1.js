const questions = [
    {
        topHeading: "जीवन की उत्पत्ति के सिद्धांतों पर आधारित 30 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. \"जीवन की उत्पत्ति\" के संबंध में सबसे व्यापक रूप से स्वीकृत वैज्ञानिक सिद्धांत कौन सा है?",
        answers: shuffle([
            { text: "स्वतः जननवाद (Spontaneous Generation)", correct: false },
            { text: "ब्रह्मांडीय सिद्धांत (Panspermia)", correct: false },
            { text: "रासायनिक विकास का सिद्धांत (Theory of Chemical Evolution)", correct: true },
            { text: "विशेष सृष्टिवाद (Theory of Special Creation)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सिद्धांत, जिसे ओपेरिन-हाल्डेन परिकल्पना भी कहा जाता है, बताता है कि जीवन की उत्पत्ति आदिम पृथ्वी पर मौजूद अकार्बनिक पदार्थों से जटिल कार्बनिक अणुओं के रासायनिक विकास के माध्यम से हुई।"
    },
    {
        question: "प्रश्न 2. ओपेरिन-हाल्डेन परिकल्पना के अनुसार, जीवन की उत्पत्ति से पहले पृथ्वी का वायुमंडल कैसा था?",
        answers: shuffle([
            { text: "ऑक्सीकारक (Oxidizing)", correct: false },
            { text: "अपचायक (Reducing)", correct: true },
            { text: "उदासीन (Neutral)", correct: false },
            { text: "आज के जैसा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस परिकल्पना के अनुसार, आदिम पृथ्वी का वायुमंडल अपचायक था।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें मीथेन (CH_4), अमोनिया (NH_3), हाइड्रोजन (H_2) और जल वाष्प (H_2O) जैसी गैसें थीं और स्वतंत्र ऑक्सीजन अनुपस्थित थी।"
    },
    {
        question: "प्रश्न 3. मिलर-यूरे प्रयोग (1953) ने किस परिकल्पना का प्रायोगिक समर्थन किया?",
        answers: shuffle([
            { text: "विशेष सृष्टिवाद", correct: false },
            { text: "जीवोत्पत्ति (Biogenesis)", correct: false },
            { text: "रासायनिक विकास", correct: true },
            { text: "ब्रह्मांडीय सिद्धांत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्टेनली मिलर और हेरोल्ड यूरे ने आदिम पृथ्वी की वायुमंडलीय स्थितियों को प्रयोगशाला में 模拟 (simulate) किया।<br><br><i class='fa-solid fa-angles-right icon'></i>  और दिखाया कि अकार्बनिक पदार्थों से अमीनो एसिड जैसे कार्बनिक यौगिक बन सकते हैं, जो रासायनिक विकास का समर्थन करता है।"
    },
    {
        question: "प्रश्न 4. \"स्वतः जननवाद\" (Abiogenesis or Spontaneous Generation) के सिद्धांत का क्या अर्थ है?",
        answers: shuffle([
            { text: "जीवन केवल पहले से मौजूद जीवन से आता है।", correct: false },
            { text: "जीवन निर्जीव पदार्थों से स्वतः उत्पन्न हो सकता है।", correct: true },
            { text: "जीवन पृथ्वी पर कहीं और से आया है।", correct: false },
            { text: "जीवन को एक दिव्य शक्ति ने बनाया है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक प्राचीन सिद्धांत था।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसके अनुसार मेंढक या सड़ते मांस से कीड़े जैसी सजीव वस्तुएँ निर्जीव पदार्थों से अनायास उत्पन्न हो सकती हैं।"
    },
    {
        question: "प्रश्न 5. किस वैज्ञानिक ने हंस-गर्दन फ्लास्क प्रयोग (Swan-neck flask experiment) का उपयोग करके स्वतः जननवाद को निर्णायक रूप से खारिज कर दिया?",
        answers: shuffle([
            { text: "फ्रांसिस्को रेडी", correct: false },
            { text: "लुई पाश्चर", correct: true },
            { text: "लेजारो स्पैलनजानी", correct: false },
            { text: "स्टेनली मिलर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लुई पाश्चर के प्रयोग ने प्रदर्शित किया कि सूक्ष्मजीव हवा में मौजूद होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और वे निर्जीव पदार्थों से स्वतः उत्पन्न नहीं होते हैं, जिससे जीवोत्पत्ति (Biogenesis) का सिद्धांत स्थापित हुआ।"
    },
    {
        question: "प्रश्न 6. जीवोत्पत्ति (Biogenesis) का सिद्धांत क्या कहता है?",
        answers: shuffle([
            { text: "\"ओम्निस विवम एक्स वीवो\" (Omne vivum ex vivo)", correct: true },
            { text: "जीवन निर्जीव पदार्थों से उत्पन्न होता है।", correct: false },
            { text: "पृथ्वी पर जीवन उल्कापिंडों द्वारा लाया गया था।", correct: false },
            { text: "जीवन सरल से जटिल रूपों में विकसित हुआ।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस लैटिन वाक्यांश \"ओम्निस विवम एक्स वीवो\" का अर्थ है \"जीवन केवल पहले से मौजूद जीवन से ही आता है\"।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह स्वतः जननवाद के विपरीत है।"
    },
    {
        question: "प्रश्न 7. \"पैन्सपर्मिया\" या ब्रह्मांडीय सिद्धांत (Panspermia Theory) का प्रस्ताव है कि पृथ्वी पर जीवन कैसे आया?",
        answers: shuffle([
            { text: "यह समुद्र में रासायनिक अभिक्रियाओं से उत्पन्न हुआ।", correct: false },
            { text: "यह पृथ्वी पर ही स्वतः उत्पन्न हुआ।", correct: false },
            { text: "यह बाहरी अंतरिक्ष से सूक्ष्मजीवों (बीजाणुओं) के रूप में आया।", correct: true },
            { text: "इस का निर्माण एक अलौकिक शक्ति द्वारा किया गया था।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस सिद्धांत के अनुसार, जीवन के \"बीज\" (जैसे बीजाणु) ब्रह्मांड में हर जगह मौजूद हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और उल्कापिंडों या धूमकेतुओं के माध्यम से पृथ्वी पर पहुँचे।"
    },
    {
        question: "प्रश्न 8. मिलर-यूरे प्रयोग में ऊर्जा के स्रोत के रूप में किसका उपयोग किया गया था?",
        answers: shuffle([
            { text: "सौर विकिरण", correct: false },
            { text: "ज्वालामुखी विस्फोट", correct: false },
            { text: "विद्युत चिंगारी (Electric sparks)", correct: true },
            { text: "रेडियोधर्मी क्षय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत चिंगारी का उपयोग आदिम पृथ्वी पर बिजली (तड़ित) के प्रभाव को 模拟 (simulate) करने के लिए किया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो रासायनिक अभिक्रियाओं के लिए आवश्यक ऊर्जा प्रदान करती थी।"
    },
    {
        question: "प्रश्न 9. आदिम पृथ्वी पर बने पहले कार्बनिक अणु संभवतः क्या थे?",
        answers: shuffle([
            { text: "प्रोटीन और न्यूक्लिक एसिड", correct: false },
            { text: "अमीनो एसिड और न्यूक्लियोटाइड", correct: true },
            { text: "कार्बोहाइड्रेट और वसा", correct: false },
            { text: "एंजाइम और हार्मोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रासायनिक विकास के अनुसार, सरल अकार्बनिक अणुओं से पहले अमीनो एसिड (प्रोटीन के निर्माण खंड) और न्यूक्लियोटाइड (न्यूक्लिक एसिड के निर्माण खंड) जैसे सरल मोनोमर बने।"
    },
    {
        question: "प्रश्न 10. जीवन के अग्रदूत माने जाने वाले कोलाइडल समुच्चय (colloidal aggregates) को ओपेरिन ने क्या नाम दिया?",
        answers: shuffle([
            { text: "कोएसरवेट्स (Coacervates)", correct: true },
            { text: "माइक्रोस्फीयर्स (Microspheres)", correct: false },
            { text: "प्रोटोसेल (Protocells)", correct: false },
            { text: "वायरस (Viruses)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओपेरिन ने सुझाव दिया कि गर्म जलीय घोल में बड़े कार्बनिक अणुओं के एकत्रीकरण से कोएसरवेट्स नामक संरचनाएं बनीं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिनमें कोशिका जैसी कुछ विशेषताएं थीं।"
    },
    {
        question: "प्रश्न 11. सिडनी फॉक्स द्वारा बनाए गए प्रोटीन जैसे अणुओं से बनी प्रोटोसेल जैसी संरचनाएं क्या कहलाती हैं?",
        answers: shuffle([
            { text: "कोएसरवेट्स", correct: false },
            { text: "माइक्रोस्फीयर्स", correct: true },
            { text: "लाइपोसोम", correct: false },
            { text: "नाभिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिडनी फॉक्स ने दिखाया कि जब अमीनो एसिड के शुष्क मिश्रण को गर्म किया जाता है, तो वे पॉलीमराइज़ होकर प्रोटीनोइड्स बनाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो पानी में ठंडे होने पर माइक्रोस्फीयर्स बनाते हैं।"
    },
    {
        question: "प्रश्न 12. \"RNA World\" परिकल्पना का प्रस्ताव है कि प्रारंभिक जीवन का आनुवंशिक पदार्थ क्या था?",
        answers: shuffle([
            { text: "डीएनए (DNA)", correct: false },
            { text: "आरएनए (RNA)", correct: true },
            { text: "प्रोटीन (Protein)", correct: false },
            { text: "कार्बोहाइड्रेट (Carbohydrate)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह परिकल्पना बताती है कि आरएनए पहले आनुवंशिक पदार्थ के रूप में कार्य करता था।<br><br><i class='fa-solid fa-angles-right icon'></i>  क्योंकि यह डीएनए की तरह आनुवंशिक जानकारी संग्रहीत कर सकता है और प्रोटीन (राइबोजाइम के रूप में) की तरह एंजाइमेटिक प्रतिक्रियाओं को उत्प्रेरित भी कर सकता है।"
    },
    {
        question: "प्रश्न 13. पृथ्वी पर प्रकट होने वाले पहले जीव संभवतः कैसे थे?",
        answers: shuffle([
            { text: "वायवीय और स्वपोषी", correct: false },
            { text: "अवायवीय और रसायन-विषमपोषी", correct: true },
            { text: "वायवीय और प्रकाश-स्वपोषी", correct: false },
            { text: "अवायवीय और प्रकाश-स्वपोषी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि आदिम वायुमंडल में ऑक्सीजन नहीं थी, इसलिए पहले जीव अवायवीय थे।<br><br><i class='fa-solid fa-angles-right icon'></i>  वे ऊर्जा के लिए अपने परिवेश में मौजूद तैयार कार्बनिक अणुओं का उपभोग करते थे, इसलिए वे विषमपोषी थे।"
    },
    {
        question: "प्रश्न 14. पृथ्वी के वायुमंडल में ऑक्सीजन की प्रचुरता के लिए कौन सी प्रक्रिया मुख्य रूप से जिम्मेदार है?",
        answers: shuffle([
            { text: "ज्वालामुखी गतिविधि", correct: false },
            { text: "श्वसन", correct: false },
            { text: "प्रकाश संश्लेषण (Photosynthesis)", correct: true },
            { text: "रासायनिक संश्लेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सायनोबैक्टीरिया जैसे प्रकाश संश्लेषक जीवों के विकास ने उप-उत्पाद के रूप में बड़ी मात्रा में ऑक्सीजन का उत्पादन किया।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसने धीरे-धीरे पृथ्वी के वायुमंडल को बदल दिया।"
    },
    {
        question: "प्रश्न 15. \"गर्म पतला सूप\" (Hot dilute soup) की अवधारणा किसने दी?",
        answers: shuffle([
            { text: "चार्ल्स डार्विन", correct: false },
            { text: "जे. बी. एस. हाल्डेन", correct: true },
            { text: "लुई पाश्चर", correct: false },
            { text: "स्टेनली मिलर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाल्डेन ने सुझाव दिया कि आदिम महासागर एक \"गर्म पतला सूप\" जैसा था।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें सूर्य के प्रकाश की ऊर्जा से बने विभिन्न प्रकार के कार्बनिक अणु जमा हो गए थे, जहाँ जीवन की शुरुआत हुई।"
    },
    {
        question: "प्रश्न 16. जीवन की उत्पत्ति के गहरे समुद्र के हाइड्रोथर्मल वेंट सिद्धांत (Deep-sea hydrothermal vent theory) का प्रस्ताव है कि जीवन कहाँ शुरू हुआ?",
        answers: shuffle([
            { text: "उथले ज्वारीय पूलों में", correct: false },
            { text: "गहरे समुद्र के तल पर गर्म पानी के झरनों के पास", correct: true },
            { text: "जमे हुए धूमकेतुओं के अंदर", correct: false },
            { text: "वायुमंडल में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सिद्धांत प्रस्तावित करता है कि हाइड्रोथर्मल वेंट द्वारा प्रदान की गई रासायनिक ऊर्जा और पोषक तत्वों ने जीवन की उत्पत्ति के लिए आवश्यक स्थितियों का निर्माण किया।"
    },
    {
        question: "प्रश्न 17. फ्रांसिस्को रेडी ने अपने प्रयोग से यह प्रदर्शित करने की कोशिश की कि...",
        answers: shuffle([
            { text: "जीवन बाहरी अंतरिक्ष से आया है।", correct: false },
            { text: "कीड़े (maggots) सड़ते मांस से स्वतः उत्पन्न नहीं होते हैं।", correct: true },
            { text: "अमीनो एसिड का निर्माण अकार्बनिक अणुओं से हो सकता है।", correct: false },
            { text: "सभी जीवित कोशिकाएं पूर्व-मौजूदा कोशिकाओं से उत्पन्न होती हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेडी ने तीन जार का उपयोग किया - एक खुला, एक कसकर बंद, और एक जाली से ढका हुआ।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह दिखाने के लिए कि कीड़े केवल तभी दिखाई देते हैं जब मक्खियाँ मांस पर अंडे दे सकती हैं।"
    },
    {
        question: "प्रश्न 18. प्रोकैरियोटिक कोशिकाओं से यूकैरियोटिक कोशिकाओं के विकास की व्याख्या करने वाला प्रमुख सिद्धांत कौन सा है?",
        answers: shuffle([
            { text: "रासायनिक विकास सिद्धांत", correct: false },
            { text: "अंतःसहजीविता का सिद्धांत (Endosymbiotic Theory)", correct: true },
            { text: "स्वतः जननवाद", correct: false },
            { text: "उत्परिवर्तन सिद्धांत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिन मार्गुलिस द्वारा लोकप्रिय यह सिद्धांत बताता है कि माइटोकॉन्ड्रिया और क्लोरोप्लास्ट जैसे अंगक स्वतंत्र प्रोकैरियोटिक जीवों के रूप में शुरू हुए।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो बड़ी कोशिकाओं द्वारा ग्रहण कर लिए गए और एक सहजीवी संबंध में विकसित हुए।"
    },
    {
        question: "प्रश्न 19. आदिम पृथ्वी पर जीवन की उत्पत्ति के लिए किस तत्व की अनुपस्थिति महत्वपूर्ण थी?",
        answers: shuffle([
            { text: "हाइड्रोजन (Hydrogen)", correct: false },
            { text: "कार्बन (Carbon)", correct: false },
            { text: "नाइट्रोजन (Nitrogen)", correct: false },
            { text: "स्वतंत्र ऑक्सीजन (Free Oxygen)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्वतंत्र ऑक्सीजन एक अत्यधिक प्रतिक्रियाशील, ऑक्सीकारक गैस है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसकी अनुपस्थिति ने जटिल कार्बनिक अणुओं को बनने और ऑक्सीकृत हुए बिना जमा होने दिया।"
    },
    {
        question: "प्रश्न 20. आरएनए (RNA) की एंजाइमेटिक गतिविधि को क्या कहा जाता है?",
        answers: shuffle([
            { text: "पेप्टाइड बंध", correct: false },
            { text: "राइबोजाइम (Ribozyme)", correct: true },
            { text: "पोलीमरेज़", correct: false },
            { text: "हेलिकेज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राइबोजाइम आरएनए अणु होते हैं जो रासायनिक प्रतिक्रियाओं को उत्प्रेरित करने में सक्षम होते हैं, ठीक प्रोटीन एंजाइमों की तरह।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह \"आरएनए वर्ल्ड\" परिकल्पना का एक प्रमुख प्रमाण है।"
    },
    {
        question: "प्रश्न 21. जीवन के तीन डोमेन (Domains) क्या हैं?",
        answers: shuffle([
            { text: "पादप, जंतु, कवक", correct: false },
            { text: "प्रोकैरियोटा, यूकैरियोटा, वायरस", correct: false },
            { text: "आर्किया, बैक्टीरिया, यूकैरिया", correct: true },
            { text: "मोनेरा, प्रोटिस्टा, प्लांटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्ल वूज़ द्वारा प्रस्तावित तीन-डोमेन प्रणाली सभी जीवन को इन तीन मुख्य समूहों में वर्गीकृत करती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो सभी एक अंतिम सार्वभौमिक सामान्य पूर्वज (LUCA) से उत्पन्न हुए हैं।"
    },
    {
        question: "प्रश्न 22. पृथ्वी पर सबसे पुराने माने जाने वाले जीवाश्म कौन से हैं?",
        answers: shuffle([
            { text: "डायनासोर की हड्डियाँ", correct: false },
            { text: "ट्राइलोबाइट्स", correct: false },
            { text: "स्ट्रोमैटोलाइट्स (Stromatolites)", correct: true },
            { text: "मैमथ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्ट्रोमैटोलाइट्स सायनोबैक्टीरिया जैसे सूक्ष्मजीवों द्वारा बनाई गई स्तरित चट्टानी संरचनाएं हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  ये पृथ्वी पर जीवन के सबसे पुराने ज्ञात जीवाश्म प्रमाणों में से हैं, जो लगभग 3.5 अरब साल पुराने हैं।"
    },
    {
        question: "प्रश्न 23. विशेष सृष्टिवाद (Theory of Special Creation) का सिद्धांत क्या मानता है?",
        answers: shuffle([
            { text: "जीवन सरल कार्बनिक अणुओं से विकसित हुआ।", correct: false },
            { text: "जीवन एक अलौकिक या दिव्य शक्ति द्वारा बनाया गया था।", correct: true },
            { text: "जीवन निर्जीव वस्तुओं से उत्पन्न हुआ।", correct: false },
            { text: "जीवन दूसरे ग्रहों से आया है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक धार्मिक विश्वास है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो बताता है कि ब्रह्मांड और सभी जीवन रूपों को एक दिव्य प्राणी द्वारा उनके वर्तमान स्वरूप में बनाया गया था।"
    },
    {
        question: "प्रश्न 24. \"प्रोटोबायोन्ट्स\" (Protobionts) शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "पहले जीवित जीव", correct: false },
            { text: "निर्जीव पदार्थों से बने जीवन के अग्रदूत", correct: true },
            { text: "पहले यूकैरियोटिक कोशिकाएं", correct: false },
            { text: "एक प्रकार का जीवाश्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोटोबायोन्ट्स (जैसे कोएसरवेट्स और माइक्रोस्फीयर्स) झिल्लियों से घिरे अणुओं के समुच्चय हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिनमें जीवित कोशिकाओं के कुछ गुण होते हैं, लेकिन वे वास्तव में जीवित नहीं होते हैं।"
    },
    {
        question: "प्रश्न 25. आदिम पृथ्वी पर बहुलकीकरण (Polymerization) के लिए ऊर्जा कहाँ से आई?",
        answers: shuffle([
            { text: "सूर्य का प्रकाश (पराबैंगनी विकिरण)", correct: false },
            { text: "बिजली (तड़ित)", correct: false },
            { text: "ज्वालामुखी गर्मी", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माना जाता है कि अमीनो एसिड से प्रोटीन और न्यूक्लियोटाइड से न्यूक्लिक एसिड जैसे पॉलिमर बनाने के लिए आवश्यक ऊर्जा।<br><br><i class='fa-solid fa-angles-right icon'></i>  सूर्य के प्रकाश, बिजली और ज्वालामुखी गतिविधि सहित विभिन्न स्रोतों से आई थी।"
    },
    {
        question: "प्रश्न 26. पृथ्वी का अनुमानित आयु क्या है?",
        answers: shuffle([
            { text: "4.5 मिलियन वर्ष", correct: false },
            { text: "4.5 बिलियन वर्ष", correct: true },
            { text: "10 बिलियन वर्ष", correct: false },
            { text: "13.8 बिलियन वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेडियोमेट्रिक डेटिंग के आधार पर, पृथ्वी की आयु लगभग 4.54 बिलियन वर्ष अनुमानित है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसने जीवन की उत्पत्ति और विकास के लिए पर्याप्त समय प्रदान किया।"
    },
    {
        question: "प्रश्न 27. जीवन की उत्पत्ति का अध्ययन करने वाले विज्ञान को क्या कहते हैं?",
        answers: shuffle([
            { text: "जीवाश्म विज्ञान (Paleontology)", correct: false },
            { text: "एबायोजेनेसिस (Abiogenesis)", correct: true },
            { text: "वर्गीकरण (Taxonomy)", correct: false },
            { text: "पारिस्थितिकी (Ecology)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एबायोजेनेसिस वह प्राकृतिक प्रक्रिया है जिसके द्वारा जीवन निर्जीव पदार्थों से उत्पन्न होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह शब्द अब जीवन की उत्पत्ति के वैज्ञानिक अध्ययन के लिए भी प्रयोग किया जाता है।"
    },
    {
        question: "प्रश्न 28. कौन सा अणु \"अणु जो स्वयं की प्रतिकृति बना सकता है\" के रूप में सबसे उपयुक्त है?",
        answers: shuffle([
            { text: "ग्लूकोज", correct: false },
            { text: "एटीपी (ATP)", correct: false },
            { text: "आरएनए (RNA)", correct: true },
            { text: "लिपिड (Lipid)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आरएनए में एक टेम्पलेट के रूप में कार्य करने और अपनी स्वयं की प्रतियों के संश्लेषण को निर्देशित करने की क्षमता होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो आनुवंशिकता और जीवन की शुरुआत के लिए एक महत्वपूर्ण गुण है।"
    },
    {
        question: "प्रश्न 29. मिलर-यूरे प्रयोग में कौन सी गैस अनुपस्थित थी जो आदिम पृथ्वी के वायुमंडल के उनके मॉडल में थी?",
        answers: shuffle([
            { text: "मीथेन (CH_4)", correct: false },
            { text: "अमोनिया (NH_3)", correct: false },
            { text: "ऑक्सीजन (O_2)", correct: true },
            { text: "हाइड्रोजन (H_2)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओपेरिन-हाल्डेन परिकल्पना के अनुसार, आदिम वायुमंडल अपचायक था और उसमें स्वतंत्र ऑक्सीजन नहीं थी।<br><br><i class='fa-solid fa-angles-right icon'></i>  मिलर और यूरे ने अपने प्रयोग में इसी अपचायक वातावरण को बनाया।"
    },
    {
        question: "प्रश्न 30. अंतिम सार्वभौमिक सामान्य पूर्वज (LUCA - Last Universal Common Ancestor) क्या है?",
        answers: shuffle([
            { text: "पृथ्वी पर पहला जीव", correct: false },
            { text: "वह सबसे हालिया जीव जिससे पृथ्वी पर सभी मौजूदा जीवन वंशज हैं", correct: true },
            { text: "एक प्रकार का जीवाश्म", correct: false },
            { text: "एक विलुप्त डायनासोर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> LUCA एक विशिष्ट जीव नहीं है, बल्कि एक काल्पनिक पूर्वज आबादी है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे जीवन के तीनों डोमेन - आर्किया, बैक्टीरिया और यूकैरिया - विकसित हुए।"
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