const questions = [
    {
        topHeading: "ताम्रपाषाण काल पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'ताम्रपाषाण काल' का क्या अर्थ है?",
        answers: shuffle([
            { text: "केवल पत्थर के औजारों का युग", correct: false },
            { text: "केवल तांबे के औजारों का युग", correct: false },
            { text: "पत्थर और तांबे के औजारों के उपयोग का युग", correct: true },
            { text: "लोहे और पत्थर के औजारों का युग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ताम्रपाषाण (चाल्कोलिथिक) शब्द दो शब्दों से मिलकर बना है - <b>'ताम्र' (तांबा) और 'पाषाण' (पत्थर)</b>।<br><br><i class='fa-solid fa-angles-right icon'></i> यह वह काल था जब मनुष्य पत्थर के औजारों के साथ-साथ तांबे के औजारों का भी प्रयोग करने लगा था।"
    },
    {
        question: "प्रश्न 2. मानव द्वारा प्रयोग की गई पहली धातु कौन सी थी?",
        answers: shuffle([
            { text: "लोहा", correct: false },
            { text: "कांसा", correct: false },
            { text: "तांबा", correct: true },
            { text: "सोना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>तांबा</b> मानव द्वारा खोजी और उपयोग की जाने वाली पहली धातु थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी के साथ पाषाण युग का अंत और धातु युग का आरंभ हुआ।"
    },
    {
        question: "प्रश्न 3. भारत में ताम्रपाषाणिक बस्तियों का विस्तार मुख्य रूप से कहाँ था?",
        answers: shuffle([
            { text: "केवल सिंधु घाटी में", correct: false },
            { text: "केवल गंगा के मैदान में", correct: false },
            { text: "दक्षिण-पूर्वी राजस्थान, पश्चिमी मध्य प्रदेश, पश्चिमी महाराष्ट्र और दक्षिण-पूर्वी भारत में", correct: true },
            { text: "केवल हिमालय की तलहटी में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में ताम्रपाषाणिक संस्कृतियाँ मुख्य रूप से इन क्षेत्रों में फली-फूलीं, जहाँ <b>तांबे के अयस्क</b> और <b>उपजाऊ भूमि</b> उपलब्ध थी।"
    },
    {
        question: "प्रश्न 4. 'जोरवे संस्कृति' का संबंध किस भारतीय राज्य से है?",
        answers: shuffle([
            { text: "राजस्थान", correct: false },
            { text: "मध्य प्रदेश", correct: false },
            { text: "महाराष्ट्र", correct: true },
            { text: "गुजरात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>जोरवे संस्कृति</b> एक प्रमुख ग्रामीण ताम्रपाषाणिक संस्कृति थी जो लगभग 1400-700 ईसा पूर्व के दौरान <b>महाराष्ट्र</b> के तापी, गोदावरी और भीमा घाटियों में विकसित हुई।"
    },
    {
        question: "प्रश्न 5. किस ताम्रपाषाणिक स्थल से गैंडे, हाथी, भैंसे और रथ चलाते मनुष्य की प्रसिद्ध कांस्य आकृतियाँ मिली हैं?",
        answers: shuffle([
            { text: "इनामगांव", correct: false },
            { text: "नवदाटोली", correct: false },
            { text: "दैमाबाद", correct: true },
            { text: "गिलुंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाराष्ट्र के <b>दैमाबाद</b> से भारी मात्रा में कांसे की वस्तुएं मिली हैं, जिनमें चार प्रमुख आकृतियाँ (दैमाबाद होर्ड) शामिल हैं, जो इस स्थल के <b>धातु कर्म में उन्नत</b> होने का प्रमाण है।"
    },
    {
        question: "प्रश्न 6. 'आहार संस्कृति' का प्राचीन नाम क्या था?",
        answers: shuffle([
            { text: "कोट दीजी", correct: false },
            { text: "ताम्रवती", correct: true },
            { text: "मालवा", correct: false },
            { text: "कायथा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजस्थान की आहार संस्कृति का प्राचीन नाम <b>'ताम्रवती'</b> था, जिसका अर्थ है <b>'तांबे वाली जगह'</b>।<br><br><i class='fa-solid fa-angles-right icon'></i> यह नाम यहाँ तांबे के प्रचुर मात्रा में उपलब्ध होने और उसके व्यापार का केंद्र होने के कारण पड़ा।"
    },
    {
        question: "प्रश्न 7. किस ताम्रपाषाणिक संस्कृति के मृदभांड उत्कृष्ट माने जाते हैं और उन पर काले रंग से विभिन्न पैटर्न बने होते थे?",
        answers: shuffle([
            { text: "कायथा संस्कृति", correct: false },
            { text: "जोरवे संस्कृति", correct: false },
            { text: "मालवा संस्कृति", correct: true },
            { text: "आहार संस्कृति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मालवा संस्कृति</b> के मृदभांड (बर्तन) अपनी <b>गुणवत्ता</b> के लिए विख्यात थे।<br><br><i class='fa-solid fa-angles-right icon'></i> ये हल्के नारंगी या क्रीम रंग के होते थे और इन पर काले या गहरे भूरे रंग से सुंदर ज्यामितीय और प्राकृतिक डिजाइन बनाए जाते थे।"
    },
    {
        question: "प्रश्न 8. ताम्रपाषाण काल के लोग किस प्रकार की अर्थव्यवस्था पर निर्भर थे?",
        answers: shuffle([
            { text: "केवल शिकार और संग्रहण", correct: false },
            { text: "केवल व्यापार", correct: false },
            { text: "कृषि और पशुपालन आधारित ग्रामीण अर्थव्यवस्था", correct: true },
            { text: "औद्योगिक अर्थव्यवस्था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस काल के लोग जौ, गेहूँ, मसूर, बाजरा जैसी फसलें उगाते थे और गाय, बैल, भेड़, बकरी और सुअर जैसे पशुओं को पालते थे, जो उनकी <b>ग्रामीण अर्थव्यवस्था</b> का मुख्य आधार था।"
    },
    {
        question: "प्रश्न 9. इनामगांव, जो एक बड़ी ताम्रपाषाणिक बस्ती थी, किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "नर्मदा", correct: false },
            { text: "तापी", correct: false },
            { text: "घोड नदी", correct: true },
            { text: "भीमा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इनामगांव, महाराष्ट्र में स्थित एक महत्वपूर्ण जोरवे संस्कृति का स्थल है, जो भीमा नदी की सहायक <b>घोड नदी</b> के दाहिने किनारे पर स्थित है।"
    },
    {
        question: "प्रश्न 10. ताम्रपाषाण काल के लोगों की धार्मिक आस्था में किसकी पूजा प्रमुख थी?",
        answers: shuffle([
            { text: "इंद्र और वरुण", correct: false },
            { text: "मातृदेवी और वृषभ (बैल)", correct: true },
            { text: "विष्णु और लक्ष्मी", correct: false },
            { text: "शिव और पार्वती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कई स्थलों से मिली पकी मिट्टी की नारी मूर्तियों से <b>मातृदेवी की पूजा</b> का अनुमान लगाया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> साथ ही, चित्रित बर्तनों पर बैल का अंकन और मिट्टी की बैल मूर्तियाँ <b>वृषभ (बैल) पूजा</b> का संकेत देती हैं, जो संभवतः कृषि से संबंधित थी।"
    },
    {
        question: "प्रश्न 11. नवदाटोली का उत्खनन किसने किया था?",
        answers: shuffle([
            { text: "बी. बी. लाल", correct: false },
            { text: "एच. डी. सांकलिया", correct: true },
            { text: "आर. डी. बनर्जी", correct: false },
            { text: "एम. एस. वत्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य प्रदेश में नर्मदा नदी के तट पर स्थित नवदाटोली, जो मालवा संस्कृति का एक प्रमुख स्थल है, का उत्खनन डेक्कन कॉलेज, पुणे के प्रोफेसर <b>एच. डी. सांकलिया</b> ने किया था।"
    },
    {
        question: "प्रश्न 12. ताम्रपाषाण काल में बच्चों के शवाधान की एक विशिष्ट प्रथा क्या थी?",
        answers: shuffle([
            { text: "शवों को जलाना", correct: false },
            { text: "शवों को कलश में रखकर घर के फर्श के नीचे दफनाना", correct: true },
            { text: "शवों को नदी में बहाना", correct: false },
            { text: "शवों को खुले में छोड़ देना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विशेषकर जोरवे संस्कृति में, बच्चों की मृत्यु होने पर उनके शव को <b>दो कलशों में मुंह से मुंह जोड़कर रखकर घर के फर्श के नीचे</b> ही दफना दिया जाता था।"
    },
    {
        question: "प्रश्न 13. कौन सा ताम्रपाषाणिक स्थल 'काले और लाल मृदभांड' (Black and Red Ware) के लिए विशेष रूप से जाना जाता है, जहाँ सफेद रंग से चित्रकारी की जाती थी?",
        answers: shuffle([
            { text: "कायथा", correct: false },
            { text: "आहार", correct: true },
            { text: "गिलुंद", correct: false },
            { text: "नवदाटोली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>आहार संस्कृति</b> के लोग काले और लाल रंग के विशिष्ट बर्तन बनाते थे, जिनकी भीतरी और गर्दन की सतह काली और बाहरी सतह लाल होती थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इन पर अक्सर <b>सफेद रंग से रेखाओं और बिंदुओं</b> से डिजाइन बनाए जाते थे।"
    },
    {
        question: "प्रश्न 14. ताम्रपाषाण काल के मकानों का आकार कैसा होता था?",
        answers: shuffle([
            { text: "बहुमंजिला और पक्की ईंटों के", correct: false },
            { text: "गोलाकार या आयताकार और कच्ची मिट्टी के", correct: true },
            { text: "पत्थर के बने विशाल महल", correct: false },
            { text: "भूमिगत घर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस काल के लोग आमतौर पर लकड़ी के खंभों पर टिकी <b>कच्ची मिट्टी की दीवारों</b> और घास-फूस की छतों वाले <b>गोलाकार या आयताकार</b> घरों में रहते थे।"
    },
    {
        question: "प्रश्न 15. 'कायथा संस्कृति' का संबंध किस क्षेत्र से है?",
        answers: shuffle([
            { text: "चंबल नदी घाटी", correct: true },
            { text: "नर्मदा नदी घाटी", correct: false },
            { text: "बनास नदी घाटी", correct: false },
            { text: "गोदावरी नदी घाटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कायथा संस्कृति</b>, जो भारत की सबसे पुरानी ताम्रपाषाणिक संस्कृतियों में से एक है, मध्य प्रदेश में <b>चंबल नदी</b> और उसकी सहायक नदियों की घाटी में विकसित हुई।"
    },
    {
        question: "प्रश्न 16. किस ताम्रपाषाणिक स्थल से किलेबंदी का साक्ष्य मिला है?",
        answers: shuffle([
            { text: "कायथा", correct: false },
            { text: "आहार", correct: false },
            { text: "इनामगांव", correct: false },
            { text: "दैमाबाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इनामगांव</b>, <b>दैमाबाद</b> और <b>नवदाटोली</b> जैसे कई महत्वपूर्ण ताम्रपाषाणिक स्थलों पर बस्तियों को <b>खाई और मिट्टी की दीवारों से घेरने</b> का प्रमाण मिला है, जो सुरक्षा या सामाजिक नियंत्रण का संकेत हो सकता है।"
    },
    {
        question: "प्रश्न 17. ताम्रपाषाण काल के लोग किस फसल से अपरिचित थे?",
        answers: shuffle([
            { text: "जौ", correct: false },
            { text: "गेहूँ", correct: false },
            { text: "कपास", correct: false },
            { text: "गन्ना", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ताम्रपाषाणिक लोग गेहूँ, जौ, चावल, बाजरा, मसूर, मटर और कपास जैसी कई फसलों से परिचित थे, लेकिन <b>गन्ना</b> उगाने का कोई स्पष्ट पुरातात्विक प्रमाण नहीं मिला है।"
    },
    {
        question: "प्रश्न 18. 'गिलुंद' नामक ताम्रपाषाणिक स्थल किस संस्कृति का एक प्रमुख केंद्र था?",
        answers: shuffle([
            { text: "मालवा संस्कृति", correct: false },
            { text: "जोरवे संस्कृति", correct: false },
            { text: "आहार-बनास संस्कृति", correct: true },
            { text: "कायथा संस्कृति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>गिलुंद</b>, राजस्थान में बनास नदी के किनारे स्थित, <b>आहार संस्कृति</b> का एक महत्वपूर्ण स्थल था।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ से पक्की ईंटों के उपयोग का दुर्लभ साक्ष्य भी मिला है।"
    },
    {
        question: "प्रश्न 19. ताम्रपाषाण काल में सामाजिक असमानता का प्रमाण किससे मिलता है?",
        answers: shuffle([
            { text: "घरों के आकार और दफनाने की वस्तुओं में अंतर से", correct: true },
            { text: "लिखित कानूनों से", correct: false },
            { text: "जाति व्यवस्था से", correct: false },
            { text: "सिक्कों के प्रचलन से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इनामगांव जैसे स्थलों पर कुछ <b>घर दूसरों से बड़े</b> हैं और कुछ कब्रों में <b>कीमती वस्तुएं</b> मिली हैं, जबकि अन्य कब्रें साधारण हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह <b>सामाजिक स्तरीकरण</b> को दर्शाता है।"
    },
    {
        question: "प्रश्न 20. भारत में ताम्रपाषाणिक संस्कृतियों का पतन क्यों हुआ?",
        answers: shuffle([
            { text: "आर्यों के आक्रमण से", correct: false },
            { text: "वर्षा की कमी और शुष्कता बढ़ने से", correct: true },
            { text: "बड़ी बाढ़ आने से", correct: false },
            { text: "एक बड़ी महामारी से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिकांश विद्वानों का मानना है कि लगभग 1000 ईसा पूर्व के आसपास <b>जलवायु में परिवर्तन</b>, विशेष रूप से <b>वर्षा की कमी</b>, ने कृषि को प्रभावित किया, जिससे इन ग्रामीण संस्कृतियों का पतन हो गया।"
    },
    {
        question: "प्रश्न 21. कौन सी ताम्रपाषाणिक संस्कृति हड़प्पा संस्कृति की समकालीन मानी जाती है?",
        answers: shuffle([
            { text: "जोरवे संस्कृति", correct: false },
            { text: "मालवा संस्कृति", correct: false },
            { text: "कायथा संस्कृति", correct: true },
            { text: "आहार संस्कृति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कायथा संस्कृति</b> (लगभग 2450-1700 ईसा पूर्व) का कालक्रम विकसित हड़प्पा सभ्यता (लगभग 2600-1900 ईसा पूर्व) के साथ मेल खाता है, और इसके कुछ मृदभांडों पर <b>हड़प्पा प्रभाव</b> भी दिखाई देता है।"
    },
    {
        question: "प्रश्न 22. 'टोटीदार बर्तन' (Spouted Vessel) किस ताम्रपाषाणिक संस्कृति की एक विशिष्ट पहचान है?",
        answers: shuffle([
            { text: "आहार संस्कृति", correct: false },
            { text: "मालवा संस्कृति", correct: false },
            { text: "जोरवे संस्कृति", correct: true },
            { text: "कायथा संस्कृति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>जोरवे संस्कृति</b> के बर्तनों में एक खास प्रकार का <b>टोटीदार पात्र</b> मिलता है, जो इस संस्कृति की एक विशिष्ट पहचान है।"
    },
    {
        question: "प्रश्न 23. ताम्रपाषाण काल के लोग लिखने की कला जानते थे?",
        answers: shuffle([
            { text: "हाँ, वे ब्राह्मी लिपि का प्रयोग करते थे", correct: false },
            { text: "हाँ, वे चित्रलिपि का प्रयोग करते थे", correct: false },
            { text: "नहीं, वे लिखना नहीं जानते थे", correct: true },
            { text: "केवल पुरोहित वर्ग लिखना जानता था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ताम्रपाषाणिक लोग <b>प्रागैतिहासिक काल</b> के थे और उन्होंने <b>लेखन प्रणाली का विकास नहीं किया</b> था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, उनके बारे में हमारी सारी जानकारी पुरातात्विक स्रोतों पर आधारित है।"
    },
    {
        question: "प्रश्न 24. किस ताम्रपाषाणिक स्थल से पांच कमरों वाला एक बड़ा मकान मिला है, जिसे सरदार या मुखिया का घर माना जाता है?",
        answers: shuffle([
            { text: "दैमाबाद", correct: false },
            { text: "नवदाटोली", correct: false },
            { text: "इनामगांव", correct: true },
            { text: "आहार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इनामगांव</b> के केंद्र में एक बड़ा, <b>पांच कमरों वाला आयताकार घर</b> मिला है, जिसके पास एक अन्न भंडार भी था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बस्ती के अन्य छोटे घरों से अलग है और इसे संभवतः समुदाय के <b>मुखिया का निवास स्थान</b> माना जाता है।"
    },
    {
        question: "प्रश्न 25. 'रंगपुर' और 'रोजदी' जैसे स्थल, जो उत्तर-हड़प्पा काल से भी जुड़े हैं, किस ताम्रपाषाणिक संस्कृति का हिस्सा थे?",
        answers: shuffle([
            { text: "मालवा संस्कृति", correct: false },
            { text: "गुजरात की ताम्रपाषाणिक संस्कृति", correct: true },
            { text: "जोरवे संस्कृति", correct: false },
            { text: "आहार संस्कृति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>रंगपुर और रोजदी</b> जैसे स्थल गुजरात में स्थित हैं जहाँ हड़प्पा सभ्यता के पतन के बाद <b>ताम्रपाषाणिक संस्कृति</b> विकसित हुई, जिसे प्रभास संस्कृति या रंगपुर संस्कृति भी कहा जाता है।"
    },
    {
        question: "प्रश्न 26. ताम्रपाषाण काल में तांबे के साथ किस अन्य धातु को मिलाकर 'कांसा' बनाया जाता था?",
        answers: shuffle([
            { text: "लोहा", correct: false },
            { text: "टिन", correct: true },
            { text: "जस्ता", correct: false },
            { text: "सीसा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कांसा, तांबे की तुलना में एक अधिक कठोर और मजबूत मिश्र धातु है, जिसे तांबे में <b>टिन</b> मिलाकर बनाया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, भारत की ताम्रपाषाणिक संस्कृतियों में कांसे का उपयोग सीमित था।"
    },
    {
        question: "प्रश्न 27. पूर्वी भारत (बिहार, पश्चिम बंगाल) में ताम्रपाषाणिक संस्कृति का प्रतिनिधित्व कौन सा स्थल करता है?",
        answers: shuffle([
            { text: "पांडु राजार ढिबि", correct: false },
            { text: "चिरांद", correct: false },
            { text: "सेनूवर", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पश्चिम बंगाल में <b>पांडु राजार ढिबि</b> और बिहार में <b>चिरांद और सेनूवर</b> जैसे स्थल पूर्वी भारत में ताम्रपाषाणिक बस्तियों के प्रमुख उदाहरण हैं, जहाँ चावल की खेती मुख्य थी।"
    },
    {
        question: "प्रश्न 28. ताम्रपाषाणिक लोगों का मुख्य पेशा क्या था?",
        answers: shuffle([
            { text: "योद्धा", correct: false },
            { text: "व्यापारी", correct: false },
            { text: "कृषक और पशुपालक", correct: true },
            { text: "शिल्पकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि वे शिल्प और सीमित व्यापार में भी संलग्न थे, लेकिन उनकी बस्तियों का मूल आधार <b>कृषि और पशुपालन</b> ही था।"
    },
    {
        question: "प्रश्न 29. किस ताम्रपाषाणिक स्थल से सिंचाई के लिए नहर या बांध बनाने का साक्ष्य मिला है?",
        answers: shuffle([
            { text: "आहार", correct: false },
            { text: "दैमाबाद", correct: false },
            { text: "इनामगांव", correct: true },
            { text: "नवदाटोली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इनामगांव</b> में एक <b>नहर</b> खोदे जाने का साक्ष्य मिला है, जो संभवतः बाढ़ के पानी को खेतों की ओर मोड़ने या <b>सिंचाई</b> के लिए बनाई गई थी।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उस काल की एक महत्वपूर्ण इंजीनियरिंग उपलब्धि थी।"
    },
    {
        question: "प्रश्न 30. ताम्रपाषाणिक युग और लौह युग के बीच की कड़ी किस प्रकार के मृदभांडों को माना जाता है?",
        answers: shuffle([
            { text: "गैरिक मृदभांड (OCP)", correct: false },
            { text: "चित्रित धूसर मृदभांड (PGW)", correct: false },
            { text: "उत्तरी कृष्ण मार्जित मृदभांड (NBPW)", correct: false },
            { text: "काले और लाल मृदभांड (BRW)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>काले और लाल मृदभांड (ब्लैक एंड रेड वेयर)</b> ताम्रपाषाण काल में व्यापक रूप से प्रचलित थे और इनका उपयोग <b>प्रारंभिक लौह युग</b> में भी जारी रहा, इस प्रकार ये दोनों युगों को जोड़ते हैं।"
    },
    {
        question: "प्रश्न 31. आहार संस्कृति के लोग किस तकनीक में निपुण थे?",
        answers: shuffle([
            { text: "लोहा पिघलाना", correct: false },
            { text: "तांबा गलाना और धातु कर्म", correct: true },
            { text: "जहाज निर्माण", correct: false },
            { text: "कांच बनाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आहार संस्कृति के स्थल तांबे के स्रोतों के पास स्थित थे और यहाँ से <b>तांबा गलाने की भट्टियों</b> के अवशेष और बड़ी संख्या में तांबे के औजार मिले हैं, जो उनकी <b>धातु कर्म में विशेषज्ञता</b> को दर्शाते हैं।"
    },
    {
        question: "प्रश्न 32. ताम्रपाषाणिक काल में मृतकों को दफनाते समय उनके पैर काट देने का रिवाज किस स्थल पर था?",
        answers: shuffle([
            { text: "दैमाबाद", correct: false },
            { text: "इनामगांव", correct: true },
            { text: "नवदाटोली", correct: false },
            { text: "आहार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इनामगांव</b> में कुछ कब्रों में पाए गए कंकालों के टखने के नीचे के हिस्से गायब हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> माना जाता है कि यह किसी अंधविश्वास के कारण किया जाता था ताकि मृतक भूत बनकर वापस न आ सके।"
    },
    {
        question: "प्रश्न 33. जोरवे संस्कृति के बर्तनों की क्या विशेषता थी?",
        answers: shuffle([
            { text: "वे बहुत मोटे और खुरदरे थे", correct: false },
            { text: "वे धातु की तरह आवाज करते थे और उन पर लाल सतह पर काली चित्रकारी होती थी", correct: true },
            { text: "वे हमेशा बहुरंगी होते थे", correct: false },
            { text: "उन पर कोई चित्रकारी नहीं होती थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जोरवे के बर्तन अच्छी तरह से पकाए जाते थे, जिससे वे पतले लेकिन मजबूत होते थे और ठोकने पर <b>धातु जैसी आवाज</b> करते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> इनकी लाल सतह पर <b>काली स्याही से ज्यामितीय डिजाइन</b> बनाए जाते थे।"
    },
    {
        question: "प्रश्न 34. ताम्रपाषाणिक काल के लोग किस पशु से संभवतः परिचित नहीं थे?",
        answers: shuffle([
            { text: "गाय", correct: false },
            { text: "बकरी", correct: false },
            { text: "घोड़ा", correct: true },
            { text: "सुअर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में <b>घोड़े</b> का प्रचलन बाद में आर्यों के आगमन से जोड़ा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ताम्रपाषाणिक स्थलों से घोड़े के अवशेष या तो नहीं मिले हैं या वे बहुत विवादास्पद हैं।"
    },
    {
        question: "प्रश्न 35. 'ताम्रनिधि संस्कृति' (Copper Hoard Culture) का संबंध किससे है?",
        answers: shuffle([
            { text: "दक्षिण भारत", correct: false },
            { text: "गंगा-यमुना दोआब", correct: true },
            { text: "कश्मीर घाटी", correct: false },
            { text: "पूर्वोत्तर भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>गंगा-यमुना दोआब</b> और आसपास के क्षेत्रों में कई जगहों पर एक साथ बड़ी संख्या में तांबे के उपकरण (जैसे हार्पून, तलवारें, मानवाकृति) मिले हैं, जिन्हें <b>'ताम्रनिधि'</b> कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे अक्सर गैरिक मृदभांड संस्कृति से जोड़ा जाता है।"
    },
    {
        question: "प्रश्न 36. किस स्थल को मालवा संस्कृति का सबसे बड़ा ज्ञात स्थल माना जाता है?",
        answers: shuffle([
            { text: "कायथा", correct: false },
            { text: "एरण", correct: false },
            { text: "नवदाटोली", correct: true },
            { text: "नागदा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>नवदाटोली</b> एक बहुत बड़ी ग्रामीण बस्ती थी और यहाँ से बड़ी मात्रा में अनाज के साक्ष्य मिले हैं, जो इसे मालवा संस्कृति का एक <b>प्रमुख और समृद्ध केंद्र</b> बनाते हैं।"
    },
    {
        question: "प्रश्न 37. ताम्रपाषाणिक लोग पत्थर के औजारों के लिए किस प्रकार के पत्थर का उपयोग करते थे?",
        answers: shuffle([
            { text: "संगमरमर", correct: false },
            { text: "बलुआ पत्थर", correct: false },
            { text: "चर्ट, जैस्पर और कैल्सेडनी", correct: true },
            { text: "ग्रेनाइट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वे छोटे और धारदार उपकरण (माइक्रोलिथ) बनाने के लिए <b>चर्ट, जैस्पर, कैल्सेडनी</b> और अगेट जैसे सिलिका युक्त पत्थरों का उपयोग करते थे।"
    },
    {
        question: "प्रश्न 38. जोरवे संस्कृति का सबसे बड़ा स्थल कौन सा है?",
        answers: shuffle([
            { text: "इनामगांव", correct: false },
            { text: "जोरवे", correct: false },
            { text: "नेवासा", correct: false },
            { text: "दैमाबाद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>दैमाबाद</b>, जो लगभग 20 हेक्टेयर में फैला था, जोरवे संस्कृति का <b>सबसे बड़ा स्थल</b> है और यह एक आद्य-शहरी केंद्र के रूप में विकसित हो रहा था।"
    },
    {
        question: "प्रश्न 39. ताम्रपाषाणिक काल में वयस्क व्यक्ति को किस दिशा में सिर करके दफनाया जाता था?",
        answers: shuffle([
            { text: "पूर्व-पश्चिम", correct: false },
            { text: "उत्तर-दक्षिण", correct: true },
            { text: "किसी भी दिशा में", correct: false },
            { text: "केवल दक्षिण-उत्तर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाराष्ट्र में पाई गई कब्रों से पता चलता है कि वयस्कों को आमतौर पर <b>उत्तर-दक्षिण</b> दिशा में लिटाकर दफनाया जाता था, जिसमें सिर उत्तर की ओर होता था।"
    },
    {
        question: "प्रश्न 40. 'गैरिक मृदभांड संस्कृति' (Ochre Coloured Pottery Culture - OCP) का संबंध किस क्षेत्र से है?",
        answers: shuffle([
            { text: "पश्चिमी भारत", correct: false },
            { text: "ऊपरी गंगा घाटी", correct: true },
            { text: "दक्षिण भारत", correct: false },
            { text: "पूर्वी भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>OCP संस्कृति</b> मुख्य रूप से <b>पश्चिमी उत्तर प्रदेश और हरियाणा</b> के क्षेत्र में पाई गई है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके बर्तन नारंगी-गेरुए रंग के होते हैं और छूने पर रंग हाथ में लग जाता है।"
    },
    {
        question: "प्रश्न 41. ताम्रपाषाणिक काल की बस्तियाँ मुख्य रूप से कैसी थीं?",
        answers: shuffle([
            { text: "शहरी और महानगरीय", correct: false },
            { text: "ग्रामीण और कृषि प्रधान", correct: true },
            { text: "खानाबदोश शिविर", correct: false },
            { text: "बंदरगाह शहर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुछ अपवादों को छोड़कर, अधिकांश ताम्रपाषाणिक बस्तियाँ छोटे गाँवों के रूप में थीं जहाँ का जीवन <b>कृषि और पशुपालन</b> पर आधारित था।"
    },
    {
        question: "प्रश्न 42. कौन सी संस्कृति को 'बनास संस्कृति' भी कहा जाता है?",
        answers: shuffle([
            { text: "मालवा संस्कृति", correct: false },
            { text: "कायथा संस्कृति", correct: false },
            { text: "आहार संस्कृति", correct: true },
            { text: "जोरवे संस्कृति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि इस संस्कृति के प्रमुख स्थल राजस्थान की <b>बनास नदी</b> और उसकी सहायक नदियों की घाटी में स्थित हैं, इसलिए इसे <b>'बनास संस्कृति'</b> के नाम से भी जाना जाता है।"
    },
    {
        question: "प्रश्न 43. इनामगांव में मातृदेवी की मूर्ति किस प्रकार के घर से मिली है?",
        answers: shuffle([
            { text: "मुखिया के घर से", correct: false },
            { text: "एक शिल्पकार के घर से", correct: true },
            { text: "एक साधारण गोलाकार घर से", correct: false },
            { text: "अन्न भंडार से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इनामगांव</b> में एक घर के अंदर अनाज रखने की कोठरी में एक बिना सिर वाली <b>मातृदेवी की मूर्ति</b> मिट्टी के डिब्बे में रखी मिली है, जो संभवतः किसी <b>शिल्पकार का घर</b> था।"
    },
    {
        question: "प्रश्न 44. ताम्रपाषाणिक लोगों के आभूषण किससे बने होते थे?",
        answers: shuffle([
            { text: "केवल सोना", correct: false },
            { text: "केवल हीरा", correct: false },
            { text: "शंख, सीप, हड्डी और अर्ध-कीमती पत्थर", correct: true },
            { text: "लोहा और स्टील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वे कार्नेलियन, अगेट, जैस्पर जैसे पत्थरों, <b>शंख, सीप और हड्डी</b> से बने मनकों की माला और अन्य <b>आभूषण</b> पहनते थे।"
    },
    {
        question: "प्रश्न 45. नवदाटोली से किस अनाज के सबसे अधिक साक्ष्य मिले हैं?",
        answers: shuffle([
            { text: "चावल", correct: false },
            { text: "गेहूँ", correct: false },
            { text: "विभिन्न प्रकार के अनाज", correct: true },
            { text: "मक्का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>नवदाटोली</b> अपने कृषि उत्पादन के लिए प्रसिद्ध है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ से गेहूँ, जौ, मसूर, मटर, खेसारी और चावल सहित लगभग <b>सभी प्रमुख अनाजों और दालों</b> के साक्ष्य मिले हैं।"
    },
    {
        question: "प्रश्न 46. ताम्रपाषाण काल के पतन के बाद दक्कन और पश्चिमी भारत में किस युग का आरंभ हुआ?",
        answers: shuffle([
            { text: "नवपाषाण युग", correct: false },
            { text: "मध्यपाषाण युग", correct: false },
            { text: "प्रारंभिक लौह युग", correct: true },
            { text: "कांस्य युग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ताम्रपाषाणिक संस्कृतियों के अंत के बाद, इन क्षेत्रों में <b>लोहे का उपयोग</b> शुरू हुआ और महापाषाण संस्कृति (विशेषकर दक्षिण में) और <b>प्रारंभिक लौह युग</b> की बस्तियाँ विकसित हुईं।"
    },
    {
        question: "प्रश्न 47. किस स्थल से पक्की ईंटों के उपयोग का साक्ष्य मिला है, जो ताम्रपाषाण काल में एक दुर्लभ बात थी?",
        answers: shuffle([
            { text: "दैमाबाद", correct: false },
            { text: "आहार", correct: false },
            { text: "गिलुंद", correct: true },
            { text: "कायथा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आमतौर पर ताम्रपाषाणिक लोग कच्ची ईंटों या मिट्टी का उपयोग करते थे, लेकिन राजस्थान के <b>गिलुंद</b> में एक दीवार के निर्माण में <b>पक्की ईंटों</b> का उपयोग पाया गया है।"
    },
    {
        question: "प्रश्न 48. ताम्रपाषाण काल में विनिमय का मुख्य माध्यम क्या था?",
        answers: shuffle([
            { text: "सोने के सिक्के", correct: false },
            { text: "चांदी के सिक्के", correct: false },
            { text: "वस्तु विनिमय प्रणाली", correct: true },
            { text: "तांबे के सिक्के", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस काल में मुद्रा का प्रचलन नहीं था।<br><br><i class='fa-solid fa-angles-right icon'></i> व्यापार और आदान-प्रदान एक वस्तु के बदले दूसरी वस्तु देकर (<b>वस्तु विनिमय प्रणाली</b>) किया जाता था।"
    },
    {
        question: "प्रश्न 49. 'एरण' नामक ताम्रपाषाणिक स्थल किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "राजस्थान", correct: false },
            { text: "महाराष्ट्र", correct: false },
            { text: "मध्य प्रदेश", correct: true },
            { text: "गुजरात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>एरण</b>, <b>मध्य प्रदेश</b> में स्थित एक महत्वपूर्ण पुरातात्विक स्थल है, जहाँ कायथा, मालवा और जोरवे संस्कृतियों के अलावा गुप्त काल तक के साक्ष्य मिलते हैं।"
    },
    {
        question: "प्रश्न 50. ताम्रपाषाण काल के औजारों में पत्थर के किस प्रकार के उपकरण शामिल थे?",
        answers: shuffle([
            { text: "केवल बड़े हाथ के कुल्हाड़े", correct: false },
            { text: "लघुपाषाण उपकरण (माइक्रोलिथ ब्लेड)", correct: true },
            { text: "पॉलिशदार पत्थर की कुल्हाड़ियाँ", correct: false },
            { text: " कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ताम्रपाषाणिक लोग तांबे के औजारों के साथ-साथ पत्थर के छोटे और धारदार ब्लेड (<b>लघुपाषाण उपकरण / माइक्रोलिथ ब्लेड</b>) का भी बड़े पैमाने पर उपयोग करते थे, जिन्हें हड्डी या लकड़ी के हत्थों में लगाया जाता था।"
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