const questions = [
    {
        topHeading: "उत्तर वैदिक काल पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. उत्तर वैदिक काल का निर्धारण सामान्यतः कब से कब तक किया जाता है?",
        answers: shuffle([
            { text: "1500 ई.पू. से 1000 ई.पू.", correct: false },
            { text: "1000 ई.पू. से 600 ई.पू.", correct: true },
            { text: "600 ई.पू. से 300 ई.पू.", correct: false },
            { text: "300 ई.पू. से 1 ई.पू.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लौह प्रौद्योगिकी और चित्रित धूसर मृद्भांड संस्कृति के आधार पर <b>उत्तर वैदिक काल</b> की अवधि <b>1000 ई.पू. से 600 ई.पू.</b> के बीच मानी जाती है।"
    },
    {
        question: "प्रश्न 2. उत्तर वैदिक काल की जानकारी का मुख्य स्रोत क्या है?",
        answers: shuffle([
            { text: "केवल ऋग्वेद", correct: false },
            { text: "यजुर्वेद, सामवेद, अथर्ववेद और ब्राह्मण ग्रंथ", correct: true },
            { text: "केवल उपनिषद", correct: false },
            { text: "पुरातात्विक अवशेष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद की रचना पूर्व-वैदिक काल में हुई थी।<br><br><i class='fa-solid fa-angles-right icon'></i> उत्तर वैदिक काल की जानकारी हमें <b>यजुर्वेद, सामवेद, अथर्ववेद, ब्राह्मणों, आरण्यकों और उपनिषदों</b> से मिलती है।"
    },
    {
        question: "प्रश्न 3. उत्तर वैदिक काल में आर्यों के भौगोलिक विस्तार का मुख्य केंद्र कहाँ था?",
        answers: shuffle([
            { text: "सप्त-सिंधु प्रदेश", correct: false },
            { text: "गंगा-यमुना दोआब", correct: true },
            { text: "दक्कन का पठार", correct: false },
            { text: "राजस्थान का मरुस्थल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस काल में आर्य सप्त-सिंधु प्रदेश से पूर्व की ओर बढ़े और <b>गंगा-यमुना दोआब</b> तथा मध्य देश उनके विस्तार का मुख्य केंद्र बन गया।"
    },
    {
        question: "प्रश्न 4. उत्तर वैदिक काल में लोहे को किस नाम से जाना जाता था?",
        answers: shuffle([
            { text: "अयस", correct: false },
            { text: "श्याम अयस या कृष्ण अयस", correct: true },
            { text: "ताम्र अयस", correct: false },
            { text: "लोहित अयस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर वैदिक साहित्य में <b>लोहे</b> के लिए '<b>श्याम अयस</b>' या '<b>कृष्ण अयस</b>' शब्द का प्रयोग हुआ है, जबकि तांबे के लिए 'लोहित अयस' शब्द मिलता है।"
    },
    {
        question: "प्रश्न 5. '<b>गोत्र</b>' व्यवस्था का प्रचलन किस काल में शुरू हुआ?",
        answers: shuffle([
            { text: "ऋग्वैदिक काल", correct: false },
            { text: "उत्तर वैदिक काल", correct: true },
            { text: "महाजनपद काल", correct: false },
            { text: "मौर्य काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>गोत्र</b>' शब्द का अर्थ है 'गौशाला' या वह स्थान जहाँ पूरे कुल के मवेशी रखे जाते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में यह एक ही पूर्वज से उत्पन्न लोगों के समूह का द्योतक हो गया और <b>सगोत्र विवाह वर्जित</b> हो गया।"
    },
    {
        question: "प्रश्न 6. उत्तर वैदिक काल में राजा की शक्ति में वृद्धि का मुख्य कारण क्या था?",
        answers: shuffle([
            { text: "बड़े यज्ञों का आयोजन", correct: false },
            { text: "स्थायी सेना का गठन", correct: false },
            { text: "लोहे के हथियारों का प्रयोग", correct: false },
            { text: "बड़े भू-भाग पर अधिकार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस काल में कबीले मिलकर '<b>जनपद</b>' बनाने लगे और राजा अब किसी कबीले का नहीं बल्कि एक <b>निश्चित भू-भाग का शासक</b> हो गया, जिससे उसकी शक्ति और प्रतिष्ठा में वृद्धि हुई।"
    },
    {
        question: "प्रश्न 7. '<b>राजसूय यज्ञ</b>' किस अवसर पर किया जाता था?",
        answers: shuffle([
            { text: "राजा के राज्याभिषेक के समय", correct: true },
            { text: "साम्राज्य विस्तार के लिए", correct: false },
            { text: "शक्ति प्रदर्शन के लिए", correct: false },
            { text: "पुत्र प्राप्ति के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>राजसूय यज्ञ</b> राजा के <b>राज्याभिषेक</b> से संबंधित एक भव्य अनुष्ठान था, जिसके माध्यम से राजा को दैवीय शक्ति प्राप्त होती थी।"
    },
    {
        question: "प्रश्न 8. '<b>अश्वमेध यज्ञ</b>' का मुख्य उद्देश्य क्या था?",
        answers: shuffle([
            { text: "देवताओं को प्रसन्न करना", correct: false },
            { text: "वर्षा कराना", correct: false },
            { text: "चक्रवर्ती सम्राट बनने के लिए साम्राज्य का विस्तार करना", correct: true },
            { text: "पापों का प्रायश्चित करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस यज्ञ में राजा एक घोड़ा छोड़ता था, जो जिन-जिन क्षेत्रों से निर्विरोध गुजरता था, वे सभी क्षेत्र उस राजा के अधीन मान लिए जाते थे।"
    },
    {
        question: "प्रश्न 9. उत्तर वैदिक कालीन समाज की मुख्य विशेषता क्या थी?",
        answers: shuffle([
            { text: "समतामूलक समाज", correct: false },
            { text: "वर्ण व्यवस्था का कठोर होना", correct: true },
            { text: "महिलाओं की स्थिति में सुधार", correct: false },
            { text: "दास प्रथा का अंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर वैदिक काल में <b>वर्ण व्यवस्था कर्म आधारित न रहकर जन्म आधारित</b> और <b>कठोर</b> हो गई।<br><br><i class='fa-solid fa-angles-right icon'></i> ब्राह्मण, क्षत्रिय, वैश्य और शूद्र के कर्तव्य और अधिकार स्पष्ट रूप से विभाजित हो गए।"
    },
    {
        question: "प्रश्न 10. चार आश्रमों (ब्रह्मचर्य, गृहस्थ, वानप्रस्थ, संन्यास) का उल्लेख सर्वप्रथम किस उपनिषद में मिलता है?",
        answers: shuffle([
            { text: "छांदोग्य उपनिषद", correct: false },
            { text: "मुण्डक उपनिषद", correct: false },
            { text: "कठोपनिषद", correct: false },
            { text: "जाबालोपनिषद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>जाबालोपनिषद</b> में पहली बार स्पष्ट रूप से <b>चारों आश्रमों</b> का एक साथ उल्लेख मिलता है।"
    },
    {
        question: "प्रश्न 11. किस ग्रंथ में कहा गया है कि '<b>युद्ध का प्रारंभ मनुष्यों के मस्तिष्क में होता है</b>'?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "यजुर्वेद", correct: false },
            { text: "अथर्ववेद", correct: true },
            { text: "भगवद्गीता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह प्रसिद्ध कथन <b>अथर्ववेद</b> का है, जो संघर्ष के मनोवैज्ञानिक पहलू पर प्रकाश डालता है।"
    },
    {
        question: "प्रश्न 12. उपनिषदों का मुख्य प्रतिपाद्य विषय क्या है?",
        answers: shuffle([
            { text: "यज्ञ और कर्मकांड", correct: false },
            { text: "सामाजिक आचार-विचार", correct: false },
            { text: "दार्शनिक विवेचन और ब्रह्मज्ञान", correct: true },
            { text: "राजनीतिक सिद्धांत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उपनिषदों को 'वेदांत' भी कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये यज्ञों के स्थान पर ज्ञान मार्ग पर जोर देते हैं और आत्मा, परमात्मा, ब्रह्म और मोक्ष जैसे गूढ़ विषयों की <b>दार्शनिक व्याख्या</b> करते हैं।"
    },
    {
        question: "प्रश्न 13. '<b>सत्यमेव जयते</b>' उक्ति कहाँ से ली गई है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "भगवद्गीता", correct: false },
            { text: "मुण्डक उपनिषद", correct: true },
            { text: "अथर्ववेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत का राष्ट्रीय आदर्श वाक्य '<b>सत्यमेव जयते</b>' (सत्य की ही विजय होती है) <b>मुण्डक उपनिषद</b> से लिया गया है।"
    },
    {
        question: "प्रश्न 14. उत्तर वैदिक काल में कृषि का मुख्य आधार क्या था?",
        answers: shuffle([
            { text: "कांसे का हल", correct: false },
            { text: "लकड़ी का हल", correct: false },
            { text: "लोहे का फाल वाला हल", correct: true },
            { text: "हाथ से की जाने वाली खेती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोहे के आविष्कार ने कृषि में क्रांति लादी।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>लोहे के फाल वाले हल</b> से गहरी जुताई संभव हुई, जिससे उत्पादन में भारी वृद्धि हुई।"
    },
    {
        question: "प्रश्न 15. उत्तर वैदिक साहित्य में '<b>व्रीहि</b>' और '<b>गोधूम</b>' शब्द किसके लिए प्रयुक्त हुए हैं?",
        answers: shuffle([
            { text: "जौ और बाजरा", correct: false },
            { text: "चावल और गेहूं", correct: true },
            { text: "तिल और सरसों", correct: false },
            { text: "मक्का और ज्वार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>व्रीहि</b>' का अर्थ <b>चावल</b> और '<b>गोधूम</b>' का अर्थ <b>गेहूं</b> है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये दोनों उत्तर वैदिक काल की प्रमुख फसलें थीं।"
    },
    {
        question: "प्रश्न 16. '<b>शतपथ ब्राह्मण</b>' किस वेद से संबंधित है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "यजुर्वेद", correct: true },
            { text: "सामवेद", correct: false },
            { text: "अथर्ववेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>शतपथ ब्राह्मण यजुर्वेद</b> का ब्राह्मण ग्रंथ है और यह वैदिक साहित्य में सबसे बड़ा और महत्वपूर्ण ब्राह्मण ग्रंथ माना जाता है।"
    },
    {
        question: "प्रश्न 17. किस वेद में <b>सभा</b> और <b>समिति</b> को '<b>प्रजापति की दो पुत्रियाँ</b>' कहा गया है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "यजुर्वेद", correct: false },
            { text: "सामवेद", correct: false },
            { text: "अथर्ववेद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अथर्ववेद</b> में सभा और समिति को इतना महत्वपूर्ण बताया गया है कि उन्हें <b>प्रजापति की दो पुत्रियों</b> की संज्ञा दी गई है।"
    },
    {
        question: "प्रश्न 18. उत्तर वैदिक काल में कर वसूलने वाले अधिकारी को क्या कहा जाता था?",
        answers: shuffle([
            { text: "संग्रहितृ", correct: false },
            { text: "भागदुघ", correct: true },
            { text: "पालागल", correct: false },
            { text: "अक्षवाप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भाग' का अर्थ कर था और 'दुघ' का अर्थ वसूलने वाला।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रकार '<b>भागदुघ</b>' राजा के लिए <b>कर एकत्र करने वाला अधिकारी</b> था।<br><br><i class='fa-solid fa-angles-right icon'></i> 'संग्रहितृ' कोषाध्यक्ष होता था।"
    },
    {
        question: "प्रश्न 19. '<b>निष्क</b>' और '<b>शतमान</b>' उत्तर वैदिक काल में क्या थे?",
        answers: shuffle([
            { text: "यज्ञ के प्रकार", correct: false },
            { text: "देवताओं के नाम", correct: false },
            { text: "मुद्रा की इकाइयाँ", correct: true },
            { text: "कृषि उपकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि इस काल में नियमित सिक्के प्रचलित नहीं थे, '<b>निष्क</b>' और '<b>शतमान</b>' जैसी स्वर्ण और चांदी की इकाइयों का प्रयोग <b>विनिमय के माध्यम</b> के रूप में होता था।"
    },
    {
        question: "प्रश्न 20. उत्तर वैदिक काल में किस वर्ण को '<b>अन्यस्य बलिकृत</b>' (दूसरों को कर देने वाला) कहा गया है?",
        answers: shuffle([
            { text: "ब्राह्मण", correct: false },
            { text: "क्षत्रिय", correct: false },
            { text: "वैश्य", correct: true },
            { text: "शूद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>वैश्य</b> वर्ग का मुख्य कार्य कृषि, पशुपालन और व्यापार था।<br><br><i class='fa-solid fa-angles-right icon'></i> वे ही <b>कर चुकाते थे</b> जिससे राजा और पुरोहित वर्ग का भरण-पोषण होता था।"
    },
    {
        question: "प्रश्न 21. '<b>ब्रह्मा</b>' नामक पुरोहित का यज्ञ में क्या कार्य था?",
        answers: shuffle([
            { text: "मंत्र गाना", correct: false },
            { text: "आहुति देना", correct: false },
            { text: "मंत्रों का पाठ करना", correct: false },
            { text: "पूरे यज्ञ का निरीक्षण करना", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>ब्रह्मा</b> चारों पुरोहितों में सबसे श्रेष्ठ माना जाता था और उसका कार्य यह देखना था कि यज्ञ अनुष्ठान में कोई त्रुटि न हो।"
    },
    {
        question: "प्रश्न 22. यम और नचिकेता का संवाद किस उपनिषद में मिलता है?",
        answers: shuffle([
            { text: "बृहदारण्यक उपनिषद", correct: false },
            { text: "छांदोग्य उपनिषद", correct: false },
            { text: "कठोपनिषद", correct: true },
            { text: "केनोपनिषद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कठोपनिषद</b> में बालक <b>नचिकेता</b> और मृत्यु के देवता <b>यम</b> के बीच आत्मा और मृत्यु के रहस्य पर हुआ प्रसिद्ध दार्शनिक संवाद वर्णित है।"
    },
    {
        question: "प्रश्न 23. उत्तर वैदिक काल में '<b>विदेह</b>' राज्य किस लिए प्रसिद्ध था?",
        answers: shuffle([
            { text: "सैन्य शक्ति के लिए", correct: false },
            { text: "व्यापार के लिए", correct: false },
            { text: "दार्शनिक राजाओं और विद्वानों के लिए", correct: true },
            { text: "कृषि उत्पादन के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिथिला (विदेह) के राजा <b>जनक</b> एक महान दार्शनिक थे और उनका दरबार <b>याज्ञवल्क्य</b> जैसे विद्वानों और <b>गार्गी</b> जैसी विदुषियों से सुशोभित था।"
    },
    {
        question: "प्रश्न 24. वह कौन सा वेद है जो <b>गद्य और पद्य दोनों</b> में लिखा गया है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "सामवेद", correct: false },
            { text: "यजुर्वेद", correct: true },
            { text: "अथर्ववेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>यजुर्वेद</b> में यज्ञ से संबंधित अनुष्ठानों का वर्णन है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका गद्य भाग 'यजुष' कहलाता है और इसमें मंत्रों के साथ-साथ उनके विनियोग की प्रक्रिया भी दी गई है।"
    },
    {
        question: "प्रश्न 25. भारतीय संगीत का जनक किस वेद को माना जाता है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "सामवेद", correct: true },
            { text: "यजुर्वेद", correct: false },
            { text: "अथर्ववेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सामवेद</b> में अधिकांश मंत्र ऋग्वेद से लिए गए हैं, लेकिन उन्हें यज्ञ के अवसर पर देवताओं की स्तुति में गाने के लिए <b>संगीतमय रूप</b> दिया गया है।"
    },
    {
        question: "प्रश्न 26. किस वेद में <b>जादू-टोना, तंत्र-मंत्र और वशीकरण</b> का उल्लेख है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "सामवेद", correct: false },
            { text: "यजुर्वेद", correct: false },
            { text: "अथर्ववेद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अथर्ववेद</b> में लौकिक जीवन की समस्याओं जैसे रोग निवारण, शत्रु नाश, वशीकरण और विभिन्न अंधविश्वासों से संबंधित मंत्रों का संग्रह है।"
    },
    {
        question: "प्रश्न 27. उत्तर वैदिक काल में '<b>राष्ट्र</b>' शब्द का सर्वप्रथम प्रयोग किस संदर्भ में हुआ?",
        answers: shuffle([
            { text: "कबीले के लिए", correct: false },
            { text: "परिवार के लिए", correct: false },
            { text: "प्रदेश या क्षेत्र के लिए", correct: true },
            { text: "विश्व के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब आर्य एक निश्चित भू-भाग पर स्थायी रूप से बस गए, तब '<b>राष्ट्र</b>' शब्द का प्रयोग उस <b>क्षेत्र या प्रदेश</b> के लिए होने लगा जिस पर राजा का शासन था।"
    },
    {
        question: "प्रश्न 28. '<b>शूद्र</b>' वर्ण का स्पष्ट उल्लेख ऋग्वेद के पुरुष सूक्त के बाद विस्तृत रूप से किस काल में मिलता है?",
        answers: shuffle([
            { text: "उत्तर वैदिक काल", correct: true },
            { text: "हड़प्पा काल", correct: false },
            { text: "मौर्य काल", correct: false },
            { text: "गुप्त काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>उत्तर वैदिक काल</b> में वर्ण व्यवस्था कठोर हो गई और <b>शूद्रों</b> का कार्य अन्य तीन वर्णों की सेवा करना निर्धारित कर दिया गया।<br><br><i class='fa-solid fa-angles-right icon'></i> उनकी स्थिति में भारी गिरावट आई।"
    },
    {
        question: "प्रश्न 29. उत्तर वैदिक काल में परिवार की संरचना कैसी थी?",
        answers: shuffle([
            { text: "मातृसत्तात्मक", correct: false },
            { text: "पितृसत्तात्मक", correct: true },
            { text: "समतामूलक", correct: false },
            { text: "कबीलाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस काल में भी ऋग्वैदिक काल की तरह परिवार <b>पितृसत्तात्मक</b> था, जिसमें पिता या सबसे बड़े पुरुष सदस्य को परिवार का मुखिया (गृहपति) माना जाता था।"
    },
    {
        question: "प्रश्न 30. उत्तर वैदिक काल में महिलाओं की स्थिति में गिरावट का एक प्रमुख संकेतक क्या था?",
        answers: shuffle([
            { text: "संपत्ति के अधिकार का अभाव", correct: false },
            { text: "सभा और समिति में भाग लेने पर रोक", correct: false },
            { text: "शिक्षा के अवसरों में कमी", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस काल में महिलाओं को पैतृक संपत्ति से वंचित कर दिया गया, उन्हें सभा जैसी राजनीतिक संस्थाओं में भाग लेने से रोक दिया गया और उनके लिए शिक्षा के अवसर भी सीमित हो गए।"
    },
    {
        question: "प्रश्न 31. उत्तर वैदिक काल में '<b>ग्रामणी</b>' कौन होता था?",
        answers: shuffle([
            { text: "गाँव का मुखिया", correct: true },
            { text: "सेना का प्रमुख", correct: false },
            { text: "राजा का सलाहकार", correct: false },
            { text: "कर अधिकारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>ग्रामणी</b> गाँव का प्रमुख <b>प्रशासनिक अधिकारी</b> होता था, जो गाँव के मामलों का प्रबंधन करता था।"
    },
    {
        question: "प्रश्न 32. '<b>ब्राह्मण ग्रंथ</b>' क्या हैं?",
        answers: shuffle([
            { text: "वेदों पर लिखी गई टीकाएं (गद्य व्याख्या)", correct: true },
            { text: "दार्शनिक ग्रंथ", correct: false },
            { text: "कानूनी संहिताएं", correct: false },
            { text: "काव्य संग्रह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>ब्राह्मण ग्रंथ</b> वेदों के <b>गद्य भाग</b> हैं जिनमें यज्ञों के कर्मकांडों और अनुष्ठानों की विस्तृत व्याख्या की गई है।"
    },
    {
        question: "प्रश्न 33. '<b>ऐतरेय ब्राह्मण</b>' किस वेद से संबंधित है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: true },
            { text: "यजुर्वेद", correct: false },
            { text: "सामवेद", correct: false },
            { text: "अथर्ववेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>ऐतरेय</b> और कौषीतकि ब्राह्मण, <b>ऋग्वेद</b> के दो प्रमुख ब्राह्मण ग्रंथ हैं।"
    },
    {
        question: "प्रश्न 34. '<b>अरण्यक</b>' ग्रंथों का मुख्य विषय क्या है?",
        answers: shuffle([
            { text: "ग्राम्य जीवन", correct: false },
            { text: "शहरी जीवन", correct: false },
            { text: "यज्ञों के पीछे छिपे दार्शनिक और रहस्यात्मक अर्थ", correct: true },
            { text: "युद्ध कला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अरण्यकों</b> की रचना वनों में ऋषियों द्वारा की गई।<br><br><i class='fa-solid fa-angles-right icon'></i> ये ब्राह्मण ग्रंथों और उपनिषदों के बीच की कड़ी हैं और कर्मकांड से <b>ज्ञान मार्ग</b> की ओर संक्रमण को दर्शाते हैं।"
    },
    {
        question: "प्रश्न 35. उत्तर वैदिक काल में '<b>विदथ</b>' नामक संस्था का क्या हुआ?",
        answers: shuffle([
            { text: "यह और अधिक शक्तिशाली हो गई", correct: false },
            { text: "इसका नाम बदलकर 'समिति' हो गया", correct: false },
            { text: "इसका अस्तित्व लगभग समाप्त हो गया", correct: true },
            { text: "यह केवल महिलाओं की संस्था बन गई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक काल की सबसे प्राचीन संस्था '<b>विदथ</b>' का महत्व उत्तर वैदिक काल में <b>लगभग समाप्त</b> हो गया था।"
    },
    {
        question: "प्रश्न 36. उत्तर वैदिक काल में राजा को दिया जाने वाला '<b>भाग</b>' नामक कर उपज का कितना हिस्सा होता था?",
        answers: shuffle([
            { text: "1/4", correct: false },
            { text: "1/6", correct: true },
            { text: "1/8", correct: false },
            { text: "1/10", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>भाग</b>' एक नियमित कृषि कर था जो सामान्यतः कुल उपज का <b>छठा हिस्सा (1/6)</b> होता था।"
    },
    {
        question: "प्रश्न 37. उत्तर वैदिक काल में '<b>श्रेष्ठिन्</b>' किसे कहा जाता था?",
        answers: shuffle([
            { text: "राजा को", correct: false },
            { text: "पुरोहित को", correct: false },
            { text: "सेनापति को", correct: false },
            { text: "व्यापारी संघ के प्रमुख को", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस काल में व्यापारिक श्रेणियों (guilds) का उदय हुआ और उनके प्रमुख को '<b>श्रेष्ठिन्</b>' कहा जाता था।"
    },
    {
        question: "प्रश्न 38. '<b>कुसीद</b>' शब्द का प्रयोग किसके लिए किया जाता था?",
        answers: shuffle([
            { text: "कृषि", correct: false },
            { text: "ऋण पर ब्याज", correct: true },
            { text: "एक प्रकार का कर", correct: false },
            { text: "एक हथियार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर वैदिक साहित्य में ऋण (कुसीद) और उस पर लगने वाले <b>ब्याज</b> ('कुसीदिन') का उल्लेख मिलता है, जो आर्थिक गतिविधियों की जटिलता को दर्शाता है।"
    },
    {
        question: "प्रश्न 39. '<b>बृहदारण्यक उपनिषद</b>' में <b>याज्ञवल्क्य और गार्गी</b> के बीच हुए संवाद का क्या महत्व है?",
        answers: shuffle([
            { text: "यह महिलाओं की विदुषिता को दर्शाता है", correct: true },
            { text: "यह यज्ञों की महत्ता को बताता है", correct: false },
            { text: "यह राजा की शक्ति को प्रमाणित करता है", correct: false },
            { text: "यह सामाजिक नियमों की व्याख्या करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजा जनक की सभा में <b>गार्गी</b> द्वारा ब्रह्मज्ञानी <b>याज्ञवल्क्य</b> को चुनौती देना यह प्रमाणित करता है कि समाज में गिरावट के बावजूद कुछ विदुषी महिलाएं भी थीं।"
    },
    {
        question: "प्रश्न 40. उत्तर वैदिक काल में शासन का स्वरूप कैसा था?",
        answers: shuffle([
            { text: "लोकतंत्र", correct: false },
            { text: "गणतंत्र", correct: false },
            { text: "राजतंत्र", correct: true },
            { text: "कुलीनतंत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस काल में राजा का पद <b>वंशानुगत</b> हो गया और <b>राजतंत्र</b> शासन का सामान्य स्वरूप बन गया।"
    },
    {
        question: "प्रश्न 41. किस ग्रंथ में सर्वप्रथम <b>महाजनी प्रथा</b> का उल्लेख मिलता है?",
        answers: shuffle([
            { text: "रामायण", correct: false },
            { text: "महाभारत", correct: false },
            { text: "शतपथ ब्राह्मण", correct: true },
            { text: "अथर्ववेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>शतपथ ब्राह्मण</b> में सूदखोर ('कुसीदिन') का उल्लेख मिलता है, जो <b>महाजनी प्रथा</b> के अस्तित्व का प्राचीनतम साहित्यिक साक्ष्य है।"
    },
    {
        question: "प्रश्न 42. किस उत्तर वैदिक ग्रंथ में '<b>विराट पुरुष</b>' की अवधारणा का उल्लेख है, जिससे चारों वर्णों की उत्पत्ति मानी गई?",
        answers: shuffle([
            { text: "शतपथ ब्राह्मण", correct: false },
            { text: "यजुर्वेद का पुरुष सूक्त", correct: true },
            { text: "छांदोग्य उपनिषद", correct: false },
            { text: "ऐतरेय ब्राह्मण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद के दसवें मंडल के पुरुष सूक्त की तरह ही, <b>यजुर्वेद</b> में भी <b>विराट पुरुष</b> की अवधारणा का विस्तार मिलता है, जिसके मुख से ब्राह्मण, भुजाओं से क्षत्रिय, जांघों से वैश्य और पैरों से शूद्र की उत्पत्ति बताई गई है।"
    },
    {
        question: "प्रश्न 43. उत्तर वैदिक काल की मृद्भांड संस्कृति का क्या नाम है?",
        answers: shuffle([
            { text: "गैरिक मृद्भांड (OCP)", correct: false },
            { text: "चित्रित धूसर मृद्भांड (PGW)", correct: true },
            { text: "उत्तरी काले पॉलिशदार मृद्भांड (NBPW)", correct: false },
            { text: "लाल और काले मृद्भांड (BRW)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>चित्रित धूसर मृद्भांड (Painted Grey Ware)</b> इस काल की विशिष्ट पहचान है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये उच्च गुणवत्ता वाले मिट्टी के बर्तन होते थे जिन पर ज्यामितीय आकृतियाँ चित्रित होती थीं।"
    },
    {
        question: "प्रश्न 44. '<b>उद्गाता</b>' का क्या कार्य था?",
        answers: shuffle([
            { text: "यज्ञ का निरीक्षण करना", correct: false },
            { text: "मंत्रों का उच्चारण करना", correct: false },
            { text: "सामवेद के मंत्रों का गायन करना", correct: true },
            { text: "आहुति देना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>उद्गाता</b> वह पुरोहित होता था जो यज्ञ के समय देवताओं को प्रसन्न करने के लिए <b>सामवेद</b> की ऋचाओं का <b>सस्वर गायन</b> करता था।"
    },
    {
        question: "प्रश्न 45. '<b>वाजसनेयि संहिता</b>' किस वेद का दूसरा नाम है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "कृष्ण यजुर्वेद", correct: false },
            { text: "शुक्ल यजुर्वेद", correct: true },
            { text: "अथर्ववेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>शुक्ल यजुर्वेद</b> को <b>वाजसनेयि संहिता</b> भी कहा जाता है क्योंकि इसके दृष्टा ऋषि याज्ञवल्क्य वाजसनेय थे।"
    },
    {
        question: "प्रश्न 46. पुनर्जन्म का सिद्धांत पहली बार किस ग्रंथ में स्पष्ट रूप से दिखाई देता है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "शतपथ ब्राह्मण और बृहदारण्यक उपनिषद", correct: true },
            { text: "अथर्ववेद", correct: false },
            { text: "सामवेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कर्म और <b>पुनर्जन्म</b> के सिद्धांत की सुस्पष्ट व्याख्या पहली बार <b>शतपथ ब्राह्मण और फिर बृहदारण्यक उपनिषद</b> जैसे ग्रंथों में मिलती है।"
    },
    {
        question: "प्रश्न 47. <b>कुरु</b> और <b>पांचाल</b> उत्तर वैदिक काल में क्या थे?",
        answers: shuffle([
            { text: "दो प्रमुख देवता", correct: false },
            { text: "दो प्रमुख यज्ञ", correct: false },
            { text: "दो प्रमुख शक्तिशाली राज्य (जनपद)", correct: true },
            { text: "दो प्रकार के कर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भरत और पुरु कबीले मिलकर '<b>कुरु</b>' बने तथा तुर्वश और क्रिवि मिलकर '<b>पांचाल</b>' बने।<br><br><i class='fa-solid fa-angles-right icon'></i> कुरु-पांचाल क्षेत्र इस काल में आर्य संस्कृति का केंद्र था।"
    },
    {
        question: "प्रश्न 48. राजा की सहायता के लिए बने '<b>रत्निन्</b>' (अधिकारी) की संख्या सामान्यतः कितनी होती थी?",
        answers: shuffle([
            { text: "5", correct: false },
            { text: "8", correct: false },
            { text: "12", correct: true },
            { text: "16", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शतपथ ब्राह्मण में <b>12 प्रकार के रत्निन्</b> का उल्लेख है, जिनमें पुरोहित, सेनानी, युवराज, महिषी (रानी), सूत, ग्रामणी आदि शामिल थे।<br><br><i class='fa-solid fa-angles-right icon'></i> ये राजा के राज्याभिषेक में भी उपस्थित होते थे।"
    },
    {
        question: "प्रश्न 49. '<b>तक्षशिला</b>' किस लिए प्रसिद्ध था?",
        answers: shuffle([
            { text: "व्यापारिक केंद्र के रूप में", correct: false },
            { text: "राजनीतिक राजधानी के रूप में", correct: false },
            { text: "विद्या और शिक्षा के केंद्र के रूप में", correct: true },
            { text: "बंदरगाह के रूप में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि इसका पूर्ण विकास बाद में हुआ, लेकिन उत्तर वैदिक काल के अंत तक <b>तक्षशिला</b> ज्ञान के एक <b>महत्वपूर्ण केंद्र</b> के रूप में उभरने लगा था।"
    },
    {
        question: "प्रश्न 50. '<b>शूल्व सूत्र</b>' किस विषय से संबंधित हैं?",
        answers: shuffle([
            { text: "ज्योतिष", correct: false },
            { text: "व्याकरण", correct: false },
            { text: "ज्यामिति", correct: true },
            { text: "आयुर्वेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>शूल्व सूत्र</b> कल्प वेदांग का भाग हैं और इनमें यज्ञ-वेदियों के निर्माण के लिए विभिन्न प्रकार की माप और <b>ज्यामितीय आकृतियों</b> का वर्णन है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारतीय ज्यामिति का प्राचीनतम स्रोत है।"
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