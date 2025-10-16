const questions = [
    {
        topHeading: "ऋग्वैदिक काल पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. ऋग्वैदिक काल में '<b>क्षेत्र</b>' शब्द का क्या अर्थ था?",
        answers: shuffle([
            { text: "जोता हुआ खेत", correct: true },
            { text: "राज्य", correct: false },
            { text: "चारागाह", correct: false },
            { text: "निवास स्थान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में जुताई की हुई कृषि योग्य भूमि को '<b>क्षेत्र</b>' और उपजाऊ भूमि को '<b>उर्वरा</b>' कहा गया है।"
    },
    {
        question: "प्रश्न 2. '<b>वैदिक गणित</b>' का सबसे महत्वपूर्ण अंग कौन सा है?",
        answers: shuffle([
            { text: "शतपथ ब्राह्मण", correct: false },
            { text: "अथर्ववेद", correct: false },
            { text: "शुल्व सूत्र", correct: true },
            { text: "छांदोग्य उपनिषद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>शुल्व सूत्र</b> में यज्ञ की वेदियों के निर्माण से संबंधित ज्यामितीय ज्ञान दिया गया है, जो वैदिक गणित का आधार माना जाता है।"
    },
    {
        question: "प्रश्न 3. ऋग्वैदिक आर्यों की शासन प्रणाली में '<b>समिति</b>' का क्या कार्य था?",
        answers: shuffle([
            { text: "राजा को सलाह देना", correct: false },
            { text: "न्याय करना", correct: false },
            { text: "राजा का चुनाव करना", correct: true },
            { text: "कर वसूलना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>समिति</b> एक आम जनसभा थी जिसमें कबीले के सभी लोग भाग लेते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका मुख्य कार्य <b>राजा का चुनाव करना</b> और उस पर नियंत्रण रखना था।"
    },
    {
        question: "प्रश्न 4. ऋग्वेद में '<b>मरुत</b>' किस देवता के सहयोगी थे?",
        answers: shuffle([
            { text: "अग्नि", correct: false },
            { text: "वरुण", correct: false },
            { text: "इंद्र", correct: true },
            { text: "सूर्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>मरुत</b>' आंधी-तूफान के देवता थे और उन्हें <b>इंद्र का सहयोगी</b> माना जाता था, जो युद्ध में उनकी सहायता करते थे।"
    },
    {
        question: "प्रश्न 5. ऋग्वैदिक काल में '<b>उर्वर</b>' शब्द का क्या अर्थ था?",
        answers: shuffle([
            { text: "बंजर भूमि", correct: false },
            { text: "उपजाऊ भूमि", correct: true },
            { text: "चारागाह", correct: false },
            { text: "दलदली भूमि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>उर्वर</b>' शब्द का प्रयोग उस भूमि के लिए किया जाता था जो कृषि के लिए <b>उपजाऊ</b> हो।"
    },
    {
        question: "प्रश्न 6. ऋग्वेद के अनुसार, दशराज्ञ युद्ध में भरतों का पुरोहित कौन था?",
        answers: shuffle([
            { text: "विश्वामित्र", correct: false },
            { text: "वशिष्ठ", correct: true },
            { text: "अत्रि", correct: false },
            { text: "भारद्वाज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दशराज्ञ युद्ध में भरत वंश के राजा सुदास के पुरोहित ऋषि <b>वशिष्ठ</b> थे।"
    },
    {
        question: "प्रश्न 7. ऋग्वैदिक काल में '<b>स्पश</b>' किसे कहा जाता था?",
        answers: shuffle([
            { text: "गुप्तचर को", correct: true },
            { text: "सैनिक को", correct: false },
            { text: "दूत को", correct: false },
            { text: "न्यायाधीश को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजा द्वारा नियुक्त <b>गुप्तचरों</b> को '<b>स्पश</b>' कहा जाता था, जो प्रजा की गतिविधियों पर नजर रखते थे।"
    },
    {
        question: "प्रश्न 8. ऋग्वेद में किस अपराध का सबसे अधिक उल्लेख किया गया है?",
        answers: shuffle([
            { text: "हत्या", correct: false },
            { text: "चोरी", correct: false },
            { text: "पशुओं की चोरी", correct: true },
            { text: "अपहरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक समाज में पशु, विशेषकर <b>गाय</b>, सबसे महत्वपूर्ण संपत्ति थी, इसलिए <b>पशुओं की चोरी</b> सबसे बड़ा और सबसे अधिक उल्लिखित अपराध था।"
    },
    {
        question: "प्रश्न 9. किस वेद में <b>जादुई माया</b> और <b>वशीकरण</b> का वर्णन है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "यजुर्वेद", correct: false },
            { text: "सामवेद", correct: false },
            { text: "अथर्ववेद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अथर्ववेद</b> में तंत्र-मंत्र, जादू-टोना, वशीकरण, रोगों के निवारण आदि से संबंधित मंत्रों का संग्रह है।"
    },
    {
        question: "प्रश्न 10. ऋग्वैदिक काल में <b>निष्क, हिरण्य पिंड</b> और <b>मन</b> का उपयोग किसलिए होता था?",
        answers: shuffle([
            { text: "आभूषण के रूप में", correct: false },
            { text: "विनिमय के माध्यम के रूप में", correct: true },
            { text: "धार्मिक अनुष्ठानों में", correct: false },
            { text: "शाही प्रतीक के रूप में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि ये प्रारंभ में आभूषण थे, लेकिन इनका उपयोग वस्तुओं की खरीद-बिक्री के लिए <b>विनिमय के माध्यम</b> के रूप में भी होता था।"
    },
    {
        question: "प्रश्न 11. ऋग्वेद में '<b>नदी सूक्त</b>' किस मंडल में है?",
        answers: shuffle([
            { text: "प्रथम मंडल", correct: false },
            { text: "तृतीय मंडल", correct: false },
            { text: "सप्तम मंडल", correct: false },
            { text: "दशम मंडल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद के <b>दसवें मंडल</b> के 75वें सूक्त को '<b>नदी सूक्त</b>' कहा जाता है, जिसमें विभिन्न नदियों की स्तुति की गई है।"
    },
    {
        question: "प्रश्न 12. ऋग्वैदिक काल में आर्यों के <b>पंचजनों</b> में कौन शामिल नहीं था?",
        answers: shuffle([
            { text: "यदु", correct: false },
            { text: "पुरु", correct: false },
            { text: "तुर्वसु", correct: false },
            { text: "कीकट", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में पाँच प्रमुख आर्य कबीलों का उल्लेख है - यदु, पुरु, तुर्वसु, अनु और द्रुह्यु, जिन्हें '<b>पंचजन</b>' कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>कीकट</b> एक अनार्य जनजाति थी।"
    },
    {
        question: "प्रश्न 13. किस देवता को '<b>द्यौस-पिता</b>' (आकाश का पिता) भी कहा गया है?",
        answers: shuffle([
            { text: "इंद्र", correct: false },
            { text: "सूर्य", correct: false },
            { text: "द्यौस", correct: true },
            { text: "वरुण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>द्यौस</b> को आकाश का देवता और सबसे प्राचीन देवताओं में से एक माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्हें '<b>द्यौस-पिता</b>' और पृथ्वी को 'पृथ्वी-माता' कहा गया है।"
    },
    {
        question: "प्रश्न 14. ऋग्वैदिक काल में ऋण देकर ब्याज लेने वाले व्यक्ति को क्या कहा जाता था?",
        answers: shuffle([
            { text: "पणि", correct: false },
            { text: "वेकनाट", correct: true },
            { text: "श्रेष्ठिन्", correct: false },
            { text: "वणिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जो व्यक्ति ऋण देकर उस पर ब्याज वसूलता था, उसे ऋग्वेद में '<b>वेकनाट</b>' या 'सूदखोर' कहा गया है।"
    },
    {
        question: "प्रश्न 15. ऋग्वैदिक समाज में '<b>नियोग प्रथा</b>' क्या थी?",
        answers: shuffle([
            { text: "सती प्रथा", correct: false },
            { text: "बाल विवाह", correct: false },
            { text: "विधवा द्वारा संतान प्राप्ति के लिए देवर से संबंध", correct: true },
            { text: "बहुपति विवाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>नियोग प्रथा</b> के अंतर्गत निःसंतान विधवा स्त्री अपने देवर या किसी अन्य निकट संबंधी से संतान उत्पन्न कर सकती थी।"
    },
    {
        question: "प्रश्न 16. ऋग्वैदिक काल में '<b>सीर</b>' शब्द का प्रयोग किसके लिए होता था?",
        answers: shuffle([
            { text: "हल", correct: true },
            { text: "बैल", correct: false },
            { text: "खेत", correct: false },
            { text: "फसल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में कृषि संबंधी गतिविधियों का उल्लेख है, जिसमें <b>हल</b> के लिए '<b>सीर</b>' और '<b>लांगल</b>' शब्दों का प्रयोग हुआ है।"
    },
    {
        question: "प्रश्न 17. ऋग्वेद में '<b>अदिति</b>' को किसकी माता माना गया है?",
        answers: shuffle([
            { text: "देवताओं की", correct: true },
            { text: "दैत्यों की", correct: false },
            { text: "मनुष्यों की", correct: false },
            { text: "पितरों की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अदिति</b> को <b>देवमाता</b> माना गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्हें सूर्य सहित कई आदित्य देवताओं की माँ कहा गया है।"
    },
    {
        question: "प्रश्न 18. ऋग्वेद में उल्लिखित '<b>सप्त सिन्धव</b>' क्षेत्र में कौन सी नदी शामिल नहीं है?",
        answers: shuffle([
            { text: "सिंधु", correct: false },
            { text: "सरस्वती", correct: false },
            { text: "परुष्णी", correct: false },
            { text: "गंगा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>सप्त सिन्धव</b>' (सात नदियों का क्षेत्र) आर्यों का प्रारंभिक निवास स्थान था, जिसमें सिंधु, सरस्वती और पंजाब की पाँच नदियां (वितस्ता, अस्किनी, परुष्णी, विपाशा, शुतुद्री) शामिल थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>गंगा</b> का उल्लेख बहुत बाद में आता है।"
    },
    {
        question: "प्रश्न 19. ऋग्वैदिक काल में '<b>वाजपति</b>' कौन होता था?",
        answers: shuffle([
            { text: "युद्ध में कबीले का नेता", correct: false },
            { text: "चारागाह भूमि का अधिकारी", correct: true },
            { text: "परिवारों का मुखिया", correct: false },
            { text: "गुप्तचर विभाग का प्रमुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>वाजपति</b>' उस अधिकारी को कहा जाता था जो <b>बड़ी चारागाह भूमि</b> या चरागाहों का प्रमुख होता था और युद्ध के समय 'कुलप' और 'ग्रामणी' का नेतृत्व करता था।"
    },
    {
        question: "प्रश्न 20. ऋग्वेद में '<b>त्वाष्ट्र</b>' किसे कहा गया है?",
        answers: shuffle([
            { text: "देवताओं के चिकित्सक", correct: false },
            { text: "देवताओं के वास्तुकार या शिल्पी", correct: true },
            { text: "देवताओं के सारथी", correct: false },
            { text: "देवताओं के दूत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>त्वाष्ट्र</b> (त्वष्टा) को एक महान <b>शिल्पी और कारीगर देवता</b> माना जाता था, जो देवताओं के लिए हथियार और रथ बनाते थे।"
    },
    {
        question: "प्रश्न 21. ऋग्वैदिक विवाह के संदर्भ में '<b>वहतु</b>' क्या था?",
        answers: shuffle([
            { text: "कन्या का पिता", correct: false },
            { text: "वर का पिता", correct: false },
            { text: "विवाह के समय दिया जाने वाला उपहार", correct: true },
            { text: "विवाह का पुरोहित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विवाह के समय कन्या की विदाई पर जो <b>उपहार और दहेज</b> दिया जाता था, उसे '<b>वहतु</b>' कहा जाता था।"
    },
    {
        question: "प्रश्न 22. ऋग्वेद की सबसे महत्वपूर्ण सूक्त कौन सी मानी जाती है?",
        answers: shuffle([
            { text: "नदी सूक्त", correct: false },
            { text: "पुरुष सूक्त", correct: true },
            { text: "नासदीय सूक्त", correct: false },
            { text: "विवाह सूक्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद के दसवें मंडल का <b>पुरुष सूक्त</b> अत्यंत महत्वपूर्ण है क्योंकि इसमें पहली बार <b>चार वर्णों की उत्पत्ति</b> और ब्रह्मांड की रचना का दार्शनिक विवरण मिलता है।"
    },
    {
        question: "प्रश्न 23. ऋग्वैदिक कालीन नदी '<b>शुतुद्री</b>' का आधुनिक नाम क्या है?",
        answers: shuffle([
            { text: "सतलुज", correct: true },
            { text: "सिंधु", correct: false },
            { text: "स्वात", correct: false },
            { text: "सोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक नदी <b>शुतुद्री</b> को वर्तमान में <b>सतलुज</b> नदी के नाम से जाना जाता है।"
    },
    {
        question: "प्रश्न 24. ऋग्वेद में '<b>अर्यमन</b>' किस देवता का प्रतिनिधित्व करते थे?",
        answers: shuffle([
            { text: "विवाह के देवता", correct: true },
            { text: "मृत्यु के देवता", correct: false },
            { text: "वनस्पति के देवता", correct: false },
            { text: "ज्ञान के देवता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अर्यमन</b> को <b>विवाह का संरक्षक देवता</b> माना जाता था, जो सूर्य के एक रूप थे।"
    },
    {
        question: "प्रश्न 25. ऋग्वैदिक काल में किस धातु का प्रयोग मुद्रा के रूप में निश्चित रूप से होने लगा था?",
        answers: shuffle([
            { text: "सोना", correct: false },
            { text: "चाँदी", correct: false },
            { text: "तांबा", correct: false },
            { text: "कोई निश्चित मुद्रा नहीं थी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक काल में <b>वस्तु विनिमय प्रणाली</b> प्रचलित थी।<br><br><i class='fa-solid fa-angles-right icon'></i> यद्यपि 'निष्क' का उल्लेख है, लेकिन यह एक निश्चित मुद्रा के बजाय एक आभूषण या मूल्य की इकाई थी।"
    },
    {
        question: "प्रश्न 26. ऋग्वैदिक काल में '<b>कुसीद</b>' शब्द का प्रयोग किसके लिए होता था?",
        answers: shuffle([
            { text: "कृषि", correct: false },
            { text: "व्यापार", correct: false },
            { text: "ऋण", correct: true },
            { text: "दान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में '<b>कुसीद</b>' शब्द का प्रयोग <b>ऋण या उधार</b> के लिए और ऋणदाता के लिए 'कुसीदिन' शब्द का प्रयोग हुआ है।"
    },
    {
        question: "प्रश्न 27. ऋग्वेद में '<b>गातु</b>' शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "गीत", correct: true },
            { text: "मार्ग", correct: false },
            { text: "घर", correct: false },
            { text: "धन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में '<b>गातु</b>' शब्द का प्रयोग <b>गीत या गान</b> के लिए किया गया है, जिसका संबंध स्तुति और प्रार्थना से है।"
    },
    {
        question: "प्रश्न 28. ऋग्वैदिक काल में '<b>करंभ</b>' क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का पेय", correct: false },
            { text: "एक प्रकार का वस्त्र", correct: false },
            { text: "जौ और दही से बना एक खाद्य पदार्थ", correct: true },
            { text: "एक हथियार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में '<b>करंभ</b>' का उल्लेख <b>जौ के सत्तू को दही में मिलाकर बनाए जाने वाले एक खाद्य पदार्थ</b> के रूप में हुआ है।"
    },
    {
        question: "प्रश्न 29. ऋग्वैदिक काल में '<b>अनस</b>' किसे कहा जाता था?",
        answers: shuffle([
            { text: "चपटी नाक वालों को", correct: true },
            { text: "लम्बे कद वालों को", correct: false },
            { text: "सुंदर मुख वालों को", correct: false },
            { text: "बिना हाथ वालों को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में आर्यों के शत्रुओं (दस्युओं) का वर्णन करते हुए उन्हें '<b>अनस</b>' (<b>चपटी नाक वाला</b>) और 'अकर्मन' (वैदिक कर्मकांड न करने वाला) कहा गया है।"
    },
    {
        question: "प्रश्न 30. ऋग्वेद के अनुसार सृष्टि की रचना किससे हुई है?",
        answers: shuffle([
            { text: "जल से", correct: false },
            { text: "अग्नि से", correct: false },
            { text: "वायु से", correct: false },
            { text: "हिरण्यगर्भ से", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद के नासदीय सूक्त और हिरण्यगर्भ सूक्त में सृष्टि की उत्पत्ति का दार्शनिक विवेचन है, जिसमें <b>हिरण्यगर्भ</b> (स्वर्ण अंडा) को सृष्टि का मूल स्रोत माना गया है।"
    },
    {
        question: "प्रश्न 31. ऋग्वैदिक काल में '<b>उष्णीष</b>' क्या था?",
        answers: shuffle([
            { text: "कमर में पहनने वाला वस्त्र", correct: false },
            { text: "सिर पर पहनी जाने वाली पगड़ी", correct: true },
            { text: "पैर का आभूषण", correct: false },
            { text: "हाथ का कंगन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक आर्य सिर पर जो <b>पगड़ी</b> पहनते थे, उसे '<b>उष्णीष</b>' कहा जाता था।"
    },
    {
        question: "प्रश्न 32. ऋग्वैदिक काल में '<b>लांगल</b>' और '<b>सीर</b>' शब्द किससे संबंधित थे?",
        answers: shuffle([
            { text: "रथ से", correct: false },
            { text: "नाव से", correct: false },
            { text: "हल से", correct: true },
            { text: "धनुष से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये दोनों शब्द ऋग्वैदिक साहित्य में <b>हल</b> के लिए प्रयुक्त हुए हैं, जो कृषि में इसके उपयोग को दर्शाता है।"
    },
    {
        question: "प्रश्न 33. ऋग्वैदिक काल में राजा को '<b>गोपति</b>' क्यों कहा जाता था?",
        answers: shuffle([
            { text: "क्योंकि वह गायों का स्वामी था", correct: false },
            { text: "क्योंकि वह गायों का रक्षक था", correct: false },
            { text: "क्योंकि युद्ध गायों के लिए होते थे", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजा का मुख्य कर्तव्य कबीले और उसकी गायों की रक्षा करना था।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि गाय ही संपत्ति और प्रतिष्ठा का आधार थीं, इसलिए राजा को '<b>गोपति</b>' या 'गोप' कहा जाता था।"
    },
    {
        question: "प्रश्न 34. ऋग्वेद में '<b>देवताओं का पुरोहित</b>' किसे माना गया है?",
        answers: shuffle([
            { text: "बृहस्पति", correct: true },
            { text: "अग्नि", correct: false },
            { text: "वरुण", correct: false },
            { text: "इंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बृहस्पति</b> को देवताओं का <b>गुरु और पुरोहित</b> माना जाता है, जो उन्हें यज्ञों और अनुष्ठानों में मार्गदर्शन करते थे।"
    },
    {
        question: "प्रश्न 35. ऋग्वैदिक आर्यों द्वारा प्रयोग की जाने वाली '<b>सुरा</b>' क्या थी?",
        answers: shuffle([
            { text: "एक पवित्र पेय", correct: false },
            { text: "एक औषधीय रस", correct: false },
            { text: "एक मादक पेय", correct: true },
            { text: "दूध से बना उत्पाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोम एक पवित्र पेय था जिसका प्रयोग यज्ञों में होता था, जबकि <b>सुरा</b> अनाज से बना एक <b>मादक पेय</b> था जिसकी ऋग्वेद में निंदा की गई है।"
    },
    {
        question: "प्रश्न 36. ऋग्वैदिक काल में राजा की कोई <b>स्थायी सेना</b> क्यों नहीं होती थी?",
        answers: shuffle([
            { text: "राजा शक्तिशाली नहीं था", correct: false },
            { text: "अर्थव्यवस्था स्थायी नहीं थी", correct: true },
            { text: "युद्ध कम होते थे", correct: false },
            { text: "लोग शांतिप्रिय थे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक <b>अर्थव्यवस्था मुख्य रूप से पशुचारण पर आधारित</b> थी और स्थायी कृषि तथा नियमित कर प्रणाली का अभाव था, इसलिए राजा एक स्थायी सेना नहीं रख सकता था।<br><br><i class='fa-solid fa-angles-right icon'></i> युद्ध के समय कबीले के लोग ही सेना का काम करते थे।"
    },
    {
        question: "प्रश्न 37. ऋग्वैदिक काल में '<b>दाशराज्ञ युद्ध</b>' में विजयी राजा सुदास किस कबीले से संबंधित थे?",
        answers: shuffle([
            { text: "पुरु", correct: false },
            { text: "यदु", correct: false },
            { text: "भरत", correct: true },
            { text: "अनु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजा <b>सुदास तृत्सु-भरत वंश</b> के शासक थे, जिन्होंने दस राजाओं के संघ को पराजित किया था।"
    },
    {
        question: "प्रश्न 38. ऋग्वेद में '<b>मित्र</b>' देवता किससे संबंधित थे?",
        answers: shuffle([
            { text: "वर्षा से", correct: false },
            { text: "वचन और संधि से", correct: true },
            { text: "मृत्यु से", correct: false },
            { text: "औषधि से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मित्र</b> देवता को <b>वचन, संधि और सत्य का संरक्षक</b> माना जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> वे वरुण के साथ मिलकर नैतिक व्यवस्था की देखरेख करते थे।"
    },
    {
        question: "प्रश्न 39. ऋग्वैदिक धर्म की मुख्य विशेषता क्या थी?",
        answers: shuffle([
            { text: "एकेश्वरवादी", correct: false },
            { text: "बहुदेववादी", correct: true },
            { text: "अद्वैतवादी", correct: false },
            { text: "नास्तिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक आर्य अनेक देवताओं की पूजा करते थे, जिनमें इंद्र, अग्नि, वरुण, सूर्य आदि प्रमुख थे, इसलिए उनका धर्म <b>बहुदेववादी</b> था।"
    },
    {
        question: "प्रश्न 40. ऋग्वेद की अनेक बातें किस प्राचीन ईरानी ग्रंथ से मिलती हैं?",
        answers: shuffle([
            { text: "जिंद अवेस्ता", correct: true },
            { text: "शाहनामा", correct: false },
            { text: "बुंदाहिश्न", correct: false },
            { text: "दिनकर्द", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारसियों के पवित्र ग्रंथ '<b>जिंद अवेस्ता</b>' और ऋग्वेद में कई देवताओं, शब्दों और अवधारणाओं में आश्चर्यजनक समानता है, जो आर्यों के साझा मूल का संकेत देती है।"
    },
    {
        question: "प्रश्न 41. ऋग्वैदिक काल में '<b>ग्राम</b>' का क्या अर्थ था?",
        answers: shuffle([
            { text: "एक शहर", correct: false },
            { text: "एक छोटा गाँव", correct: false },
            { text: "परिवारों का एक समूह", correct: true },
            { text: "एक प्रशासनिक इकाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>ग्राम</b>' मूल रूप से <b>परिवारों या कुलों के एक समूह</b> को संदर्भित करता था जो एक साथ रहते थे और यात्रा करते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक स्थायी गाँव नहीं था।"
    },
    {
        question: "प्रश्न 42. 'अतो देवा अवन्तु नो यतो विष्णुर्विचक्रमे' यह मंत्र किस देवता की स्तुति में है?",
        answers: shuffle([
            { text: "इंद्र", correct: false },
            { text: "अग्नि", correct: false },
            { text: "विष्णु", correct: true },
            { text: "रुद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह ऋग्वेद का एक प्रसिद्ध मंत्र है जो भगवान <b>विष्णु</b> की स्तुति में है, जिसमें उनके <b>तीन पगों</b> का उल्लेख है।"
    },
    {
        question: "प्रश्न 43. ऋग्वैदिक काल में समाज का विभाजन किस आधार पर था?",
        answers: shuffle([
            { text: "जन्म", correct: false },
            { text: "धन", correct: false },
            { text: "व्यवसाय या कर्म", correct: true },
            { text: "भूमि स्वामित्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रारंभिक ऋग्वैदिक काल में वर्ण व्यवस्था <b>कर्म आधारित</b> थी, न कि जन्म आधारित।<br><br><i class='fa-solid fa-angles-right icon'></i> एक ही परिवार के लोग अलग-अलग व्यवसाय अपना सकते थे।"
    },
    {
        question: "प्रश्न 44. ऋग्वेद में '<b>रुद्र</b>' देवता का स्वरूप कैसा है?",
        answers: shuffle([
            { text: "शांत और सौम्य", correct: false },
            { text: "उग्र और विनाशकारी", correct: true },
            { text: "नैतिक व्यवस्था के संरक्षक", correct: false },
            { text: "धन और समृद्धि के दाता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में <b>रुद्र</b> को एक <b>उग्र देवता</b> के रूप में चित्रित किया गया है जो क्रोधित होने पर विनाश कर सकते हैं, लेकिन वे औषधियों के ज्ञाता भी हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में वे शिव के रूप में विकसित हुए।"
    },
    {
        question: "प्रश्न 45. ऋग्वैदिक काल में '<b>दुहिता</b>' शब्द किसके लिए प्रयोग किया जाता था?",
        answers: shuffle([
            { text: "माँ के लिए", correct: false },
            { text: "बहन के लिए", correct: false },
            { text: "पुत्री के लिए", correct: true },
            { text: "पत्नी के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>दुहिता</b>' का शाब्दिक अर्थ है '<b>दूध दुहने वाली</b>'।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि उस समय गायों को दुहने का कार्य लड़कियाँ करती थीं, इसलिए पुत्री को 'दुहिता' कहा गया।"
    },
    {
        question: "प्रश्न 46. ऋग्वेद में किस जानवर का उल्लेख नहीं है?",
        answers: shuffle([
            { text: "घोड़ा", correct: false },
            { text: "गाय", correct: false },
            { text: "हाथी", correct: false },
            { text: "बाघ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में सिंह (शेर) और हाथी का उल्लेख है, लेकिन <b>बाघ</b> का उल्लेख नहीं मिलता है।"
    },
    {
        question: "प्रश्न 47. ऋग्वेद के अनुसार, जीवन का अंतिम लक्ष्य क्या था?",
        answers: shuffle([
            { text: "मोक्ष", correct: false },
            { text: "स्वर्ग", correct: false },
            { text: "धन-संपत्ति", correct: false },
            { text: "एक लंबा और सुखी जीवन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक आर्यों का दृष्टिकोण <b>भौतिकवादी</b> और आशावादी था।<br><br><i class='fa-solid fa-angles-right icon'></i> वे मोक्ष या पुनर्जन्म के चक्र से मुक्ति के बजाय देवताओं से एक <b>लंबा, स्वस्थ और समृद्ध जीवन</b> मांगते थे।"
    },
    {
        question: "प्रश्न 48. ऋग्वेद में '<b>उषा</b>' किस देवी का प्रतिनिधित्व करती है?",
        answers: shuffle([
            { text: "रात्रि की देवी", correct: false },
            { text: "भोर की देवी", correct: true },
            { text: "दोपहर की देवी", correct: false },
            { text: "संध्या की देवी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>उषा</b> को <b>भोर (सुबह) की देवी</b> के रूप में चित्रित किया गया है, जो अंधकार को दूर कर प्रकाश लाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> उनकी स्तुति में कई सुंदर सूक्त हैं।"
    },
    {
        question: "प्रश्न 49. ऋग्वैदिक काल में युद्ध का प्रमुख कारण क्या था?",
        answers: shuffle([
            { text: "भूमि विस्तार", correct: false },
            { text: "जल संसाधन", correct: false },
            { text: "पशु (गायों) का अपहरण", correct: true },
            { text: "राजनीतिक वर्चस्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक काल में अधिकांश युद्ध <b>पशुओं, विशेषकर गायों के लिए</b> लड़े जाते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> इन युद्धों को '<b>गविष्टि</b>' (गायों की खोज) कहा जाता था।"
    },
    {
        question: "प्रश्न 50. ऋग्वेद में '<b>यज्ञ</b>' का मुख्य उद्देश्य क्या था?",
        answers: shuffle([
            { text: "a) देवताओं को प्रसन्न करना", correct: false },
            { text: "b) भौतिक सुख-सुविधाएँ प्राप्त करना", correct: false },
            { text: "c) मोक्ष प्राप्त करना", correct: false },
            { text: "(a) और (b) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक आर्य देवताओं को प्रसन्न करने तथा उनसे पुत्र, पशु, धन, स्वास्थ्य जैसी <b>भौतिक इच्छाओं की पूर्ति</b> के लिए यज्ञ करते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> मोक्ष की अवधारणा बाद में विकसित हुई।"
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