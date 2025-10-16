const questions = [
    {
        topHeading: "उत्तर वैदिक काल पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. '<b>वेदांग</b>' की संख्या कितनी है?",
        answers: shuffle([
            { text: "4", correct: false },
            { text: "6", correct: true },
            { text: "8", correct: false },
            { text: "10", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेदों को भली-भांति समझने के लिए <b>6 वेदांगों</b> की रचना हुई - <b>शिक्षा, कल्प, व्याकरण, निरुक्त, छंद और ज्योतिष</b>।"
    },
    {
        question: "प्रश्न 2. '<b>ब्रह्मा</b>' नामक पुरोहित का यज्ञ में क्या कार्य था?",
        answers: shuffle([
            { text: "मंत्र गाना", correct: false },
            { text: "आहुति देना", correct: false },
            { text: "मंत्रों का पाठ करना", correct: false },
            { text: "पूरे यज्ञ का निरीक्षण करना", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>ब्रह्मा</b> चारों पुरोहितों में सबसे श्रेष्ठ माना जाता था और उसका कार्य यह देखना था कि यज्ञ अनुष्ठान में कोई त्रुटि न हो।"
    },
    {
        question: "प्रश्न 3. '<b>तैत्तिरीय उपनिषद</b>' में किसे सर्वोच्च माना गया है?",
        answers: shuffle([
            { text: "यज्ञ", correct: false },
            { text: "तप", correct: false },
            { text: "अन्न", correct: true },
            { text: "ज्ञान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तैत्तिरीय उपनिषद में '<b>अन्नं ब्रह्म</b>' कहकर <b>अन्न को ही ब्रह्म</b> अर्थात् सर्वोच्च सत्ता माना गया है और अधिक अन्न उपजाने का आह्वान किया गया है।"
    },
    {
        question: "प्रश्न 4. राजा की उत्पत्ति का सिद्धांत सर्वप्रथम किस ब्राह्मण ग्रंथ में मिलता है?",
        answers: shuffle([
            { text: "शतपथ ब्राह्मण", correct: false },
            { text: "ऐतरेय ब्राह्मण", correct: true },
            { text: "गोपथ ब्राह्मण", correct: false },
            { text: "ताण्ड्य ब्राह्मण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>ऐतरेय ब्राह्मण</b> में देवताओं और असुरों के बीच युद्ध की कहानी के माध्यम से बताया गया है कि कैसे देवताओं ने अपने में से एक को <b>राजा चुना</b>।<br><br><i class='fa-solid fa-angles-right icon'></i> यहीं से राजा की उत्पत्ति का सिद्धांत मिलता है।"
    },
    {
        question: "प्रश्न 5. '<b>अद्वैत</b>' दर्शन का मूल स्रोत क्या है?",
        answers: shuffle([
            { text: "ब्राह्मण ग्रंथ", correct: false },
            { text: "आरण्यक", correct: false },
            { text: "उपनिषद", correct: true },
            { text: "सूत्र साहित्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>उपनिषदों</b> में ही 'अहं ब्रह्मास्मि' और 'तत्त्वमसि' जैसे महावाक्यों के माध्यम से आत्मा और ब्रह्म की एकता (<b>अद्वैत</b>) का सिद्धांत प्रतिपादित किया गया है।"
    },
    {
        question: "प्रश्न 6. उत्तर वैदिक काल में मुद्रा का कौन सा रूप प्रचलित था?",
        answers: shuffle([
            { text: "आहत सिक्के", correct: false },
            { text: "स्वर्ण सिक्के", correct: false },
            { text: "चांदी के सिक्के", correct: false },
            { text: "वस्तु विनिमय और निश्चित मूल्य की इकाइयाँ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस काल में नियमित सिक्के (आहत सिक्के) नहीं थे।<br><br><i class='fa-solid fa-angles-right icon'></i> व्यापार मुख्यतः <b>वस्तु विनिमय</b> से होता था, लेकिन <b>निष्क और शतमान</b> जैसी धातु की इकाइयों का भी प्रयोग होता था।"
    },
    {
        question: "प्रश्न 7. '<b>पांचाल</b>' राज्य किस लिए विख्यात था?",
        answers: shuffle([
            { text: "युद्ध कौशल", correct: false },
            { text: "व्यापार", correct: false },
            { text: "दार्शनिक चिंतन", correct: true },
            { text: "नौसेना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>पांचाल</b> परिषद <b>दार्शनिकों</b> और ब्रह्मज्ञानियों के लिए प्रसिद्ध थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके राजा प्रवाहण जैबलि एक प्रसिद्ध दार्शनिक थे।"
    },
    {
        question: "प्रश्न 8. उत्तर वैदिक काल में '<b>रजत</b>' शब्द का प्रयोग किसके लिए होता था?",
        answers: shuffle([
            { text: "सोना", correct: false },
            { text: "चांदी", correct: true },
            { text: "तांबा", correct: false },
            { text: "कांसा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैदिक साहित्य में सोने के लिए 'हिरण्य' और <b>चांदी</b> के लिए '<b>रजत</b>' शब्द का प्रयोग मिलता है।"
    },
    {
        question: "प्रश्न 9. उत्तर वैदिक काल में पूर्वी और पश्चिमी समुद्र का उल्लेख किस ग्रंथ में मिलता है?",
        answers: shuffle([
            { text: "ऐतरेय ब्राह्मण", correct: false },
            { text: "गोपथ ब्राह्मण", correct: false },
            { text: "शतपथ ब्राह्मण", correct: true },
            { text: "यजुर्वेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>शतपथ ब्राह्मण</b> में पूर्वी (बंगाल की खाड़ी) और पश्चिमी (अरब सागर) दोनों <b>समुद्रों</b> का उल्लेख है, जो आर्यों के भौगोलिक ज्ञान के विस्तार को दर्शाता है।"
    },
    {
        question: "प्रश्न 10. '<b>शिल्प</b>' और '<b>कला</b>' का व्यापक उल्लेख किस वेद में मिलता है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "यजुर्वेद", correct: false },
            { text: "सामवेद", correct: false },
            { text: "अथर्ववेद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अथर्ववेद</b> में विभिन्न व्यवसायों, <b>शिल्पों और कलाओं</b> का विस्तृत वर्णन है, जो उस काल के आर्थिक जीवन पर प्रकाश डालता है।"
    },
    {
        question: "प्रश्न 11. उत्तर वैदिक काल के लोगों का मुख्य व्यवसाय क्या था?",
        answers: shuffle([
            { text: "पशुपालन", correct: false },
            { text: "कृषि", correct: true },
            { text: "व्यापार", correct: false },
            { text: "शिकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जहाँ ऋग्वैदिक आर्यों का मुख्य व्यवसाय पशुपालन था, वहीं उत्तर वैदिक काल में लोहे के प्रयोग और स्थायी जीवन के कारण <b>कृषि मुख्य व्यवसाय</b> बन गया।"
    },
    {
        question: "प्रश्न 12. '<b>बलि</b>' उत्तर वैदिक काल में क्या था?",
        answers: shuffle([
            { text: "पशु बलि", correct: false },
            { text: "एक स्वैच्छिक भेंट", correct: false },
            { text: "एक नियमित कर", correct: true },
            { text: "एक देवता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक काल में 'बलि' राजा को दी जाने वाली एक स्वैच्छिक भेंट थी, लेकिन उत्तर वैदिक काल में यह एक <b>अनिवार्य और नियमित कर</b> बन गया।"
    },
    {
        question: "प्रश्न 13. किस उपनिषद में यज्ञ की तुलना '<b>टूटी हुई नाव</b>' से की गई है?",
        answers: shuffle([
            { text: "छांदोग्य उपनिषद", correct: false },
            { text: "बृहदारण्यक उपनिषद", correct: false },
            { text: "मुण्डक उपनिषद", correct: true },
            { text: "कठोपनिषद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मुण्डक उपनिषद</b> में यज्ञ जैसे कर्मकांडों की आलोचना करते हुए उन्हें एक ऐसी <b>टूटी नाव</b> बताया गया है जिसके सहारे भवसागर पार नहीं किया जा सकता।"
    },
    {
        question: "प्रश्न 14. उत्तर वैदिक काल में '<b>स्थपति</b>' कौन था?",
        answers: shuffle([
            { text: "मुख्य न्यायाधीश", correct: false },
            { text: "सीमांत प्रदेश का प्रशासक", correct: true },
            { text: "गुप्तचर विभाग का प्रमुख", correct: false },
            { text: "राजा का अंगरक्षक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>स्थपति</b> एक उच्च अधिकारी था जिसे <b>सीमांत या अशांत क्षेत्रों की जिम्मेदारी</b> सौंपी जाती थी।"
    },
    {
        question: "प्रश्न 15. '<b>अग्निचयन</b>' यज्ञ किससे संबंधित था?",
        answers: shuffle([
            { text: "वेदी निर्माण से", correct: true },
            { text: "पशु बलि से", correct: false },
            { text: "सोमरस पान से", correct: false },
            { text: "रथ दौड़ से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक बहुत ही जटिल और लंबा यज्ञ था जिसमें एक विशेष प्रकार की विशाल <b>यज्ञ-वेदी का निर्माण</b> किया जाता था।"
    },
    {
        question: "प्रश्न 16. '<b>वैश्य</b>' शब्द का सर्वप्रथम प्रयोग किस संदर्भ में हुआ?",
        answers: shuffle([
            { text: "सामान्य जन या कबीले के लोग", correct: true },
            { text: "व्यापारी वर्ग", correct: false },
            { text: "कृषक वर्ग", correct: false },
            { text: "शासक वर्ग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रारंभ में 'विश्' शब्द का प्रयोग <b>कबीले की आम जनता</b> के लिए होता था।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में उत्तर वैदिक काल में यह वर्ण व्यवस्था के अंतर्गत तीसरे वर्ण (कृषक, पशुपालक, व्यापारी) के लिए प्रयुक्त होने लगा।"
    },
    {
        question: "प्रश्न 17. '<b>शतपथ ब्राह्मण</b>' में राजा <b>विदेघ माधव</b> की कथा क्या दर्शाती है?",
        answers: shuffle([
            { text: "आर्यों का पूर्व की ओर विस्तार", correct: true },
            { text: "राजा की न्यायप्रियता", correct: false },
            { text: "यज्ञों का महत्व", correct: false },
            { text: "सामाजिक पतन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह कथा बताती है कि कैसे राजा विदेघ माधव अपने पुरोहित गौतम राहुगण के साथ सरस्वती नदी के तट से पूर्व में सदानीरा (गंडक) नदी तक गए और वहाँ बस गए, जो आर्यों के <b>गंगा घाटी में विस्तार</b> का प्रतीक है।"
    },
    {
        question: "प्रश्न 18. कौन सा वेदांग <b>व्याकरण</b> से संबंधित है?",
        answers: shuffle([
            { text: "शिक्षा", correct: false },
            { text: "निरुक्त", correct: false },
            { text: "कल्प", correct: false },
            { text: "व्याकरण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पाणिनि का '<b>अष्टाध्यायी</b>' <b>व्याकरण</b> का सबसे प्रसिद्ध ग्रंथ है, जो वेदांग का हिस्सा है।"
    },
    {
        question: "प्रश्न 19. '<b>निरुक्त</b>' का संबंध किससे है?",
        answers: shuffle([
            { text: "शब्दों की व्युत्पत्ति (Etymology)", correct: true },
            { text: "छंद शास्त्र", correct: false },
            { text: "खगोल विज्ञान", correct: false },
            { text: "कर्मकांड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>निरुक्त</b> वेदों में आए कठिन शब्दों के अर्थ और उनकी <b>व्युत्पत्ति</b> बताने वाला शास्त्र है।<br><br><i class='fa-solid fa-angles-right icon'></i> यास्क का निरुक्त सबसे प्रसिद्ध है।"
    },
    {
        question: "प्रश्न 20. उत्तर वैदिक काल में शिक्षा का माध्यम क्या था?",
        answers: shuffle([
            { text: "लिखित", correct: false },
            { text: "मौखिक", correct: true },
            { text: "सांकेतिक", correct: false },
            { text: "चित्रात्मक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लेखन कला का व्यापक प्रचलन न होने के कारण ज्ञान गुरु-शिष्य परंपरा में <b>मौखिक रूप से</b> (सुनकर और कंठस्थ करके) एक पीढ़ी से दूसरी पीढ़ी तक हस्तांतरित होता था।"
    },
    {
        question: "प्रश्न 21. '<b>उपनिषद</b>' शब्द का शाब्दिक अर्थ क्या है?",
        answers: shuffle([
            { text: "दूर बैठना", correct: false },
            { text: "पास बैठना", correct: true },
            { text: "ज्ञान प्राप्त करना", correct: false },
            { text: "रहस्य जानना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>उपनिषद</b>' का अर्थ है '<b>गुरु के समीप निष्ठापूर्वक बैठना</b>' और उस ब्रह्म विद्या को प्राप्त करना जो गुरु द्वारा दी जाती है।"
    },
    {
        question: "प्रश्न 22. किस ग्रंथ को '<b>वेदांत</b>' भी कहा जाता है?",
        answers: shuffle([
            { text: "ब्राह्मण", correct: false },
            { text: "आरण्यक", correct: false },
            { text: "उपनिषद", correct: true },
            { text: "वेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>उपनिषद</b> वैदिक साहित्य के अंतिम भाग हैं और वेदों के अंतिम (सर्वोच्च) दार्शनिक ज्ञान को प्रस्तुत करते हैं, इसीलिए उन्हें '<b>वेदांत</b>' (वेद का अंत) कहा जाता है।"
    },
    {
        question: "प्रश्न 23. '<b>अद्वैतवाद</b>' के सिद्धांत का क्या अर्थ है?",
        answers: shuffle([
            { text: "ईश्वर और आत्मा अलग-अलग हैं", correct: false },
            { text: "आत्मा और ब्रह्म (परमात्मा) एक ही हैं", correct: true },
            { text: "अनेक ईश्वर हैं", correct: false },
            { text: "ईश्वर का अस्तित्व नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अद्वैतवाद</b> उपनिषदों का केंद्रीय दर्शन है, जो मानता है कि जीव की आत्मा और परम सत्ता ब्रह्म में <b>कोई भेद नहीं है, वे एक ही हैं</b>।"
    },
    {
        question: "प्रश्न 24. उत्तर वैदिक काल में ब्याज की दर क्या थी?",
        answers: shuffle([
            { text: "5%", correct: false },
            { text: "10%", correct: false },
            { text: "15%", correct: true },
            { text: "20%", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैदिक ग्रंथों के अनुसार, ऋण पर ब्याज की सामान्य दर <b>15% प्रतिवर्ष</b> थी।"
    },
    {
        question: "प्रश्न 25. '<b>अथर्वन्</b>' का क्या अर्थ है?",
        answers: shuffle([
            { text: "पवित्र जादू", correct: true },
            { text: "स्तुति", correct: false },
            { text: "यज्ञ", correct: false },
            { text: "ज्ञान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अथर्ववेद का नाम अथर्वन् ऋषि के नाम पर पड़ा है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका संबंध <b>पवित्र जादू</b>, टोना और लौकिक जीवन की समस्याओं के समाधान से है।"
    },
    {
        question: "प्रश्न 26. उत्तर वैदिक काल में नगरीकरण की प्रक्रिया शुरू हुई, इसे क्या कहा जाता है?",
        answers: shuffle([
            { text: "पूर्ण नगरीकरण", correct: false },
            { text: "द्वितीय नगरीकरण", correct: false },
            { text: "आद्य-नगरीकरण", correct: true },
            { text: "ग्रामीण-नगरीकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस काल में हस्तिनापुर और कौशाम्बी जैसे कुछ नगरों के प्रारंभिक स्वरूप का उदय हुआ, लेकिन यह पूर्ण नगरीकरण नहीं था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे <b>आद्य-नगरीकरण</b> (Proto-urbanisation) कहा जाता है।"
    },
    {
        question: "प्रश्न 27. '<b>काठक</b>', '<b>कपिष्ठल</b>', '<b>मैत्रायणी</b>' और '<b>तैत्तिरीय</b>' संहिताएँ किस वेद की शाखाएँ हैं?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "सामवेद", correct: false },
            { text: "कृष्ण यजुर्वेद", correct: true },
            { text: "शुक्ल यजुर्वेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यजुर्वेद दो शाखाओं में बँटा है - शुक्ल यजुर्वेद (केवल मंत्र) और <b>कृष्ण यजुर्वेद</b> (मंत्र और गद्य व्याख्या मिश्रित)।<br><br><i class='fa-solid fa-angles-right icon'></i> ये सभी कृष्ण यजुर्वेद की संहिताएँ हैं।"
    },
    {
        question: "प्रश्न 28. '<b>गोपथ ब्राह्मण</b>' किस वेद का एकमात्र ब्राह्मण ग्रंथ है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "यजुर्वेद", correct: false },
            { text: "सामवेद", correct: false },
            { text: "अथर्ववेद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अथर्ववेद</b> का अपना एकमात्र ब्राह्मण ग्रंथ '<b>गोपथ ब्राह्मण</b>' है।"
    },
    {
        question: "प्रश्न 29. उत्तर वैदिक धर्म का मुख्य लक्षण क्या था?",
        answers: shuffle([
            { text: "भक्ति", correct: false },
            { text: "मूर्ति पूजा", correct: false },
            { text: "यज्ञ और कर्मकांड की प्रधानता", correct: true },
            { text: "प्रकृति पूजा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस काल में धर्म का स्वरूप अत्यंत कर्मकांडीय हो गया।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>यज्ञ और कर्मकांड</b> बहुत खर्चीले और जटिल हो गए और पुरोहित वर्ग का महत्व अत्यधिक बढ़ गया।"
    },
    {
        question: "प्रश्न 30. उत्तर वैदिक काल में राजा को दिया जाने वाला '<b>भाग</b>' नामक कर उपज का कितना हिस्सा होता था?",
        answers: shuffle([
            { text: "1/4", correct: false },
            { text: "1/6", correct: true },
            { text: "1/8", correct: false },
            { text: "1/10", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>भाग</b>' एक नियमित कृषि कर था जो सामान्यतः कुल उपज का <b>छठा हिस्सा (1/6)</b> होता था।"
    },
    {
        question: "प्रश्न 31. '<b>कर्म का सिद्धांत</b>' पहली बार किस ग्रंथ में विधिवत प्रतिपादित हुआ?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "बृहदारण्यक उपनिषद", correct: true },
            { text: "अथर्ववेद", correct: false },
            { text: "सामवेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> याज्ञवल्क्य ने <b>बृहदारण्यक उपनिषद</b> में पहली बार <b>कर्म के सिद्धांत</b> की विस्तृत व्याख्या की, जिसके अनुसार व्यक्ति के कर्म ही उसके अगले जन्म का निर्धारण करते हैं।"
    },
    {
        question: "प्रश्न 32. '<b>गार्गी</b>', '<b>मैत्रेयी</b>' और '<b>कात्यायनी</b>' कौन थीं?",
        answers: shuffle([
            { text: "देवियाँ", correct: false },
            { text: "रानियाँ", correct: false },
            { text: "विदुषी महिलाएँ", correct: true },
            { text: "नर्तकियाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये उत्तर वैदिक काल की कुछ प्रसिद्ध <b>ब्रह्मवादिनी (ज्ञानवान) महिलाएँ</b> थीं, जिन्होंने दार्शनिक बहसों में भाग लिया।<br><br><i class='fa-solid fa-angles-right icon'></i> मैत्रेयी और कात्यायनी, याज्ञवल्क्य की पत्नियाँ थीं।"
    },
    {
        question: "प्रश्न 33. '<b>असंगठित जुआरी</b>' का उल्लेख किस वेद में मिलता है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "यजुर्वेद", correct: false },
            { text: "सामवेद", correct: false },
            { text: "अथर्ववेद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अथर्ववेद</b> में तत्कालीन समाज के अंधविश्वासों और समस्याओं का चित्रण है, जिसमें <b>जुए की लत</b> का भी उल्लेख मिलता है।"
    },
    {
        question: "प्रश्न 34. '<b>सोम</b>' जो ऋग्वैदिक काल में एक प्रमुख देवता थे, उत्तर वैदिक काल में किसके साथ तादात्म्य स्थापित कर लिया?",
        answers: shuffle([
            { text: "सूर्य", correct: false },
            { text: "चंद्रमा", correct: true },
            { text: "विष्णु", correct: false },
            { text: "शिव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर वैदिक काल में <b>सोम</b> देवता का महत्व वनस्पति के देवता से बदलकर <b>चंद्रमा</b> के साथ जुड़ गया।"
    },
    {
        question: "प्रश्न 35. '<b>शूद्र</b>' के लिए <b>उपनयन संस्कार</b> का निषेध किस काल में हुआ?",
        answers: shuffle([
            { text: "ऋग्वैदिक काल", correct: false },
            { text: "उत्तर वैदिक काल", correct: true },
            { text: "मौर्य काल", correct: false },
            { text: "गुप्त काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>उत्तर वैदिक काल</b> में शूद्रों को शिक्षा और यज्ञ करने के अधिकार से वंचित कर दिया गया, जिसमें <b>उपनयन संस्कार</b> (शिक्षा आरंभ का संस्कार) का निषेध भी शामिल था।"
    },
    {
        question: "प्रश्न 36. '<b>पुरुषमेध यज्ञ</b>' का उल्लेख किस ग्रंथ में है?",
        answers: shuffle([
            { text: "शतपथ ब्राह्मण", correct: true },
            { text: "ऋग्वेद", correct: false },
            { text: "अथर्ववेद", correct: false },
            { text: "सामवेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>शतपथ ब्राह्मण</b> में <b>पुरुषमेध यज्ञ</b> का उल्लेख मिलता है, जिसमें प्रतीकात्मक रूप से पुरुष की बलि दी जाती थी।"
    },
    {
        question: "प्रश्न 37. किस काल को '<b>महाकाव्य युग</b>' भी कहा जाता है?",
        answers: shuffle([
            { text: "ऋग्वैदिक काल", correct: false },
            { text: "उत्तर वैदिक काल", correct: true },
            { text: "मौर्य काल", correct: false },
            { text: "गुप्त काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माना जाता है कि रामायण और महाभारत की मूल कथा का विकास <b>उत्तर वैदिक काल</b> में ही हुआ, यद्यपि उन्हें अंतिम रूप गुप्त काल में मिला।"
    },
    {
        question: "प्रश्न 38. '<b>अध्वर्यु</b>' कौन होता था?",
        answers: shuffle([
            { text: "ऋग्वेद के मंत्रों का पाठ करने वाला पुरोहित", correct: false },
            { text: "सामवेद के मंत्रों का गान करने वाला पुरोहित", correct: false },
            { text: "यजुर्वेद के मंत्रों का पाठ और यज्ञ संपन्न कराने वाला पुरोहित", correct: true },
            { text: "यज्ञ का निरीक्षण करने वाला मुख्य पुरोहित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यज्ञ में चार मुख्य पुरोहित होते थे: होता (ऋग्वेद), उद्गाता (सामवेद), <b>अध्वर्यु (यजुर्वेद)</b> और ब्रह्मा (निरीक्षक)।"
    },
    {
        question: "प्रश्न 39. '<b>हस्तिनापुर</b>' और '<b>अतरंजीखेड़ा</b>' क्यों महत्वपूर्ण हैं?",
        answers: shuffle([
            { text: "ये व्यापारिक केंद्र थे", correct: false },
            { text: "यहाँ से चित्रित धूसर मृद्भांड और लौह उपकरण मिले हैं", correct: true },
            { text: "ये बंदरगाह नगर थे", correct: false },
            { text: "यहाँ बड़े-बड़े यज्ञों का आयोजन होता था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर प्रदेश में स्थित ये पुरातात्विक स्थल उत्तर वैदिक काल की पहचान (<b>PGW और लोहा</b>) के महत्वपूर्ण साक्ष्य प्रदान करते हैं।"
    },
    {
        question: "प्रश्न 40. '<b>विराट</b>' की अवधारणा का क्या अर्थ है?",
        answers: shuffle([
            { text: "विशाल यज्ञ", correct: false },
            { text: "विशाल साम्राज्य", correct: false },
            { text: "सर्वशक्तिमान ईश्वर", correct: false },
            { text: "ब्रह्मांडीय पुरुष", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>विराट पुरुष</b> की अवधारणा के अनुसार, संपूर्ण ब्रह्मांड एक विशाल मानवरूपी सत्ता का अंग है और समाज के सभी अंग उसी से उत्पन्न हुए हैं।"
    },
    {
        question: "प्रश्न 41. '<b>प्रवाहण जैबलि</b>' कहाँ के राजा थे?",
        answers: shuffle([
            { text: "काशी", correct: false },
            { text: "केकय", correct: false },
            { text: "पांचाल", correct: true },
            { text: "विदेह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजा <b>प्रवाहण जैबलि पांचाल</b> के एक प्रसिद्ध <b>दार्शनिक राजा</b> थे।"
    },
    {
        question: "प्रश्न 42. '<b>तण्डुल</b>' शब्द का प्रयोग किसके लिए होता था?",
        answers: shuffle([
            { text: "गेहूं", correct: false },
            { text: "जौ", correct: false },
            { text: "चावल", correct: true },
            { text: "दाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्रीहि के अलावा <b>चावल</b> के लिए '<b>तण्डुल</b>' शब्द का भी प्रयोग वैदिक साहित्य में मिलता है।"
    },
    {
        question: "प्रश्न 43. उत्तर वैदिक आर्यों का सबसे प्रिय पशु कौन सा था?",
        answers: shuffle([
            { text: "घोड़ा", correct: false },
            { text: "गाय", correct: true },
            { text: "बैल", correct: false },
            { text: "हाथी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि घोड़े का सामरिक महत्व था, लेकिन आर्थिक और धार्मिक दृष्टि से <b>गाय</b> अभी भी सबसे महत्वपूर्ण और पवित्र पशु थी।"
    },
    {
        question: "प्रश्न 44. '<b>शतपथ ब्राह्मण</b>' के अनुसार, पत्नी को पति की क्या माना गया है?",
        answers: shuffle([
            { text: "दासी", correct: false },
            { text: "मित्र", correct: false },
            { text: "अर्धांगिनी", correct: true },
            { text: "संपत्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>शतपथ ब्राह्मण</b> में पत्नी को पति का <b>आधा अंग (अर्धांगिनी)</b> कहा गया है, जो उसके धार्मिक और सामाजिक महत्व को दर्शाता है।"
    },
    {
        question: "प्रश्न 45. '<b>आर्य</b>' शब्द का शाब्दिक अर्थ क्या है?",
        answers: shuffle([
            { text: "योद्धा", correct: false },
            { text: "श्रेष्ठ या कुलीन", correct: true },
            { text: "पशुपालक", correct: false },
            { text: "विद्वान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>आर्य</b>' शब्द किसी जाति का नहीं, बल्कि भाषा और संस्कृति के आधार पर '<b>श्रेष्ठ</b>' या 'उत्तम व्यक्ति' का सूचक है।"
    },
    {
        question: "प्रश्न 46. कौन सा उपनिषद <b>गद्य</b> में लिखा गया है?",
        answers: shuffle([
            { text: "कठ", correct: false },
            { text: "ईश", correct: false },
            { text: "मुण्डक", correct: false },
            { text: "बृहदारण्यक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बृहदारण्यक उपनिषद</b> सबसे बड़े उपनिषदों में से एक है और यह पूरी तरह से <b>गद्य</b> में लिखा गया है।"
    },
    {
        question: "प्रश्न 47. '<b>अजातशत्रु</b>' कहाँ का राजा था, जो दार्शनिक चिंतन के लिए प्रसिद्ध था?",
        answers: shuffle([
            { text: "मगध", correct: false },
            { text: "अंग", correct: false },
            { text: "काशी", correct: true },
            { text: "कोसल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर वैदिक काल में <b>काशी के राजा अजातशत्रु</b> को एक महान ब्रह्मज्ञानी माना जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> (यह मगध के हर्यकवंशी अजातशत्रु से भिन्न हैं।)"
    },
    {
        question: "प्रश्न 48. उत्तर वैदिक काल में ऋण चुकाने में असमर्थ व्यक्ति को क्या बनना पड़ता था?",
        answers: shuffle([
            { text: "देश निकाला", correct: false },
            { text: "मृत्युदंड", correct: false },
            { text: "दास", correct: true },
            { text: "आजीवन कारावास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस काल में ऋण न चुका पाने की स्थिति में व्यक्ति को ऋणदाता का <b>दास</b> बनकर काम करना पड़ता था।"
    },
    {
        question: "प्रश्न 49. '<b>विष</b>' का प्रधान क्या कहलाता था?",
        answers: shuffle([
            { text: "राजन", correct: false },
            { text: "ग्रामणी", correct: false },
            { text: "विषपति", correct: true },
            { text: "गृहपति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैदिक प्रशासन में कुल (परिवार) का प्रमुख 'गृहपति', ग्राम का प्रमुख 'ग्रामणी' और कई ग्रामों के समूह 'विष' का प्रमुख '<b>विषपति</b>' कहलाता था।"
    },
    {
        question: "प्रश्न 50. '<b>अग्न्याधेय</b>' क्या था?",
        answers: shuffle([
            { text: "एक देवता", correct: false },
            { text: "एक यज्ञ", correct: true },
            { text: "एक कर", correct: false },
            { text: "एक शहर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अग्न्याधेय</b> गृहस्थ द्वारा किया जाने वाला एक महत्वपूर्ण <b>यज्ञ</b> था जिसमें पहली बार पवित्र अग्नि की स्थापना की जाती थी।"
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