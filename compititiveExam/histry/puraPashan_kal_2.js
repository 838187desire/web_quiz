const questions = [
    {
        topHeading: "पुरापाषाण काल पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. लश्कर घाटी (Laskar Valley) में पुरापाषाणकालीन स्थल किस क्षेत्र में पाए गए हैं?",
        answers: shuffle([
            { text: "कश्मीर", correct: true },
            { text: "राजस्थान", correct: false },
            { text: "मध्य प्रदेश", correct: false },
            { text: "कर्नाटक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कश्मीर घाटी में पुरापाषाणकालीन साक्ष्य सीमित हैं, लेकिन पहलगाम के पास लिद्दर नदी के किनारे और लश्कर घाटी में कुछ निम्न पुरापाषाणकालीन हस्तकुठार उपकरण मिले हैं।"
    },
    {
        question: "प्रश्न 2. 'बेधनी' (Point) उपकरण का प्राथमिक कार्य क्या था?",
        answers: shuffle([
            { text: "काटने के लिए", correct: false },
            { text: "छीलने के लिए", correct: false },
            { text: "भाले या तीर के अग्रभाग के रूप में", correct: true },
            { text: "पीसने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बेधनी एक नुकीला शल्क उपकरण था जिसे संभवतः लकड़ी के डंडे से बांधकर भाले के रूप में शिकार के लिए उपयोग किया जाता था।"
    },
    {
        question: "प्रश्न 3. भीमबेटका को यूनेस्को (UNESCO) द्वारा विश्व धरोहर स्थल कब घोषित किया गया?",
        answers: shuffle([
            { text: "1985", correct: false },
            { text: "1992", correct: false },
            { text: "2003", correct: true },
            { text: "2010", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भीमबेटका के शैलाश्रयों को उनकी असाधारण प्रागैतिहासिक शैल कला के कारण वर्ष 2003 में यूनेस्को द्वारा विश्व धरोहर स्थल का दर्जा दिया गया।"
    },
    {
        question: "प्रश्न 4. पुरापाषाणकालीन जीवनशैली की प्रकृति क्या थी?",
        answers: shuffle([
            { text: "स्थायी और कृषि आधारित", correct: false },
            { text: "अर्ध-स्थायी और पशुपालक", correct: false },
            { text: "पूरी तरह से घुमंतू और शिकारी-संग्राहक", correct: true },
            { text: "शहरी और व्यापारिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भोजन और संसाधनों की तलाश में, पुरापाषाणकालीन मानव छोटे-छोटे समूहों में एक स्थान से दूसरे स्थान पर घूमते रहते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उनकी जीवनशैली पूरी तरह से यायावर (घुमंतू) थी।"
    },
    {
        question: "प्रश्न 5. सिंहावल (Sihawal) और पटपरा (Patpara) जैसे पुरापाषाणकालीन स्थल किस घाटी से संबंधित हैं?",
        answers: shuffle([
            { text: "नर्मदा घाटी", correct: false },
            { text: "सोन घाटी", correct: true },
            { text: "ताप्ती घाटी", correct: false },
            { text: "गोदावरी घाटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंहावल और पटपरा मध्य प्रदेश की मध्य सोन घाटी में स्थित महत्वपूर्ण पुरापाषाणकालीन स्थल हैं, जहाँ से निम्न से लेकर उच्च पुरापाषाण काल तक के उपकरणों का एक स्पष्ट अनुक्रम मिला है।"
    },
    {
        question: "प्रश्न 6. पुरापाषाण काल के अंत में हुए जलवायु परिवर्तन की मुख्य विशेषता क्या थी?",
        answers: shuffle([
            { text: "तापमान अत्यंत ठंडा हो गया", correct: false },
            { text: "तापमान धीरे-धीरे गर्म और आर्द्र होने लगा", correct: true },
            { text: "पूरे ग्रह पर मरुस्थल फैल गया", correct: false },
            { text: "समुद्र का स्तर बहुत नीचे चला गया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्लेइस्टोसीन युग के अंत और होलोसीन युग की शुरुआत के साथ, हिमयुग समाप्त हुआ और जलवायु गर्म होने लगी, जिससे वनस्पतियों और जीवों में परिवर्तन आया और मानव जीवन प्रभावित हुआ।"
    },
    {
        question: "प्रश्न 7. भारत में निएंडरथल मानव के जीवाश्म क्यों नहीं पाए गए हैं?",
        answers: shuffle([
            { text: "वे कभी भारत आए ही नहीं", correct: false },
            { text: "उनके जीवाश्म खोजे नहीं जा सके हैं", correct: false },
            { text: "वे केवल यूरोप और पश्चिम एशिया तक सीमित थे", correct: true },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वर्तमान साक्ष्यों के अनुसार, निएंडरथल मानव का भौगोलिक फैलाव मुख्य रूप से यूरोप और पश्चिम एशिया में था।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत में उनके अस्तित्व का कोई पुष्ट जीवाश्म प्रमाण अभी तक नहीं मिला है।"
    },
    {
        question: "प्रश्न 8. मध्य पुरापाषाण काल में उपकरण बनाने के लिए क्वार्टजाइट के अलावा और किन पत्थरों का उपयोग होने लगा था?",
        answers: shuffle([
            { text: "संगमरमर और ग्रेनाइट", correct: false },
            { text: "चर्ट, जैस्पर और फ्लिंट", correct: true },
            { text: "बलुआ पत्थर और चूना पत्थर", correct: false },
            { text: "नीलम और पन्ना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य पुरापाषाण काल में मानव ने बेहतर शल्क निकालने के लिए चर्ट, जैस्पर और फ्लिंट जैसे महीन कणों वाले पत्थरों का भी उपयोग करना शुरू कर दिया, जो क्वार्टजाइट से अधिक परिष्कृत उपकरण बनाने में सहायक थे।"
    },
    {
        question: "प्रश्न 9. 'विदारणी' (Cleaver) उपकरण की पहचान क्या है?",
        answers: shuffle([
            { text: "एक नुकीला सिरा", correct: false },
            { text: "एक चौड़ा, सीधा या आड़ा काटने वाला किनारा", correct: true },
            { text: "एक गोल आकार", correct: false },
            { text: "एक छिद्रित छेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विदारणी एक भारी कोर उपकरण था जिसमें कुल्हाड़ी की तरह एक चौड़ा और धारदार काटने वाला किनारा होता था, जिसका उपयोग संभवतः पेड़ों को काटने या जानवरों को काटने-फाड़ने के लिए किया जाता था।"
    },
    {
        question: "प्रश्न 10. प्रागैतिहासिक काल के अध्ययन को क्या कहा जाता है?",
        answers: shuffle([
            { text: "पुरालेखशास्त्र", correct: false },
            { text: "मुद्राशास्त्र", correct: false },
            { text: "पुरातत्व", correct: true },
            { text: "मानवशास्त्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरातत्व वह विज्ञान है जो भौतिक अवशेषों (जैसे उपकरण, मिट्टी के बर्तन, वास्तुकला) के अध्ययन के माध्यम से मानव के अतीत का पुनर्निर्माण और विश्लेषण करता है, विशेष रूप से लिखित रिकॉर्ड के अभाव में।"
    },
    {
        question: "प्रश्न 11. बागोर (राजस्थान) का पुरास्थल किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "लूनी", correct: false },
            { text: "बनास", correct: false },
            { text: "कोठारी", correct: true },
            { text: "चंबल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बागोर, जो मुख्य रूप से एक मध्यपाषाणकालीन स्थल है, भीलवाड़ा जिले में कोठारी नदी के किनारे स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ उच्च पुरापाषाण काल के भी कुछ साक्ष्य मिले हैं।"
    },
    {
        question: "प्रश्न 12. पुरापाषाणकालीन आवासीय स्थल सामान्यतः कहाँ पाए जाते थे?",
        answers: shuffle([
            { text: "घने जंगलों के बीच में", correct: false },
            { text: "ऊँचे पहाड़ों की चोटी पर", correct: false },
            { text: "नदियों के पास और गुफाओं में", correct: true },
            { text: "समुद्र तट पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पानी की निरंतर आपूर्ति, शिकार की उपलब्धता और प्राकृतिक आश्रय के कारण पुरापाषाणकालीन मानव नदियों के किनारे और गुफाओं या शैलाश्रयों में बसना पसंद करते थे।"
    },
    {
        question: "प्रश्न 13. आदमगढ़ शैलाश्रय (मध्य प्रदेश) क्यों महत्वपूर्ण है?",
        answers: shuffle([
            { text: "यहाँ से मानव का सबसे पुराना जीवाश्म मिला है।", correct: false },
            { text: "यहाँ से पुरापाषाण और मध्यपाषाण काल के उपकरणों का समृद्ध भंडार मिला है।", correct: true },
            { text: "यह भारत का एकमात्र ताम्रपाषाणकालीन शैलाश्रय है।", correct: false },
            { text: "यहाँ से हड़प्पा सभ्यता की मुहरें मिली हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> होशंगाबाद के पास स्थित आदमगढ़ शैलाश्रय से पुरापाषाण काल के विभिन्न स्तरों के साथ-साथ मध्यपाषाण काल के सूक्ष्मपाषाण और पशुपालन के आरंभिक साक्ष्य भी मिलते हैं।"
    },
    {
        question: "प्रश्न 14. पुरापाषाण काल के लोगों का सामाजिक संगठन कैसा था?",
        answers: shuffle([
            { text: "बड़े राज्यों और साम्राज्यों में संगठित", correct: false },
            { text: "छोटे, पारिवारिक समूहों (बैंड) में संगठित", correct: true },
            { text: "जाति व्यवस्था पर आधारित", correct: false },
            { text: "ग्राम पंचायतों द्वारा शासित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माना जाता है कि पुरापाषाणकालीन लोग 20-30 व्यक्तियों के छोटे-छोटे पारिवारिक समूहों में रहते थे, जिन्हें 'बैंड' कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह संगठन शिकार और संग्रहण के लिए उपयुक्त था।"
    },
    {
        question: "प्रश्न 15. 'खंडक-गंडासा' (Chopper-Chopping) उपकरण परंपरा मुख्य रूप से किससे संबंधित है?",
        answers: shuffle([
            { text: "मद्रासियन संस्कृति", correct: false },
            { text: "सोहन संस्कृति", correct: true },
            { text: "विंध्य संस्कृति", correct: false },
            { text: "अहार संस्कृति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोहन संस्कृति की पहचान गोल-मटोल नदी के पत्थरों से बने एक-धार वाले (खंडक) और द्वि-धार वाले (गंडासा) उपकरणों से होती है।"
    },
    {
        question: "प्रश्न 16. पुरापाषाणकालीन चित्रों में कौन सा दृश्य सबसे आम है?",
        answers: shuffle([
            { text: "खेती", correct: false },
            { text: "युद्ध", correct: false },
            { text: "शिकार", correct: true },
            { text: "विवाह समारोह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन चित्रों का सबसे प्रमुख विषय शिकार है, जिसमें मनुष्यों को अकेले या समूह में जानवरों का पीछा करते और मारते हुए दिखाया गया है, जो उनके जीवन में शिकार के महत्व को दर्शाता है।"
    },
    {
        question: "प्रश्न 17. पुरापाषाण काल के किस चरण में उपकरण आकार में छोटे और अधिक परिष्कृत होने लगे?",
        answers: shuffle([
            { text: "निम्न पुरापाषाण काल", correct: false },
            { text: "मध्य पुरापाषाण काल", correct: false },
            { text: "पुरापाषाण काल के सभी चरणों में उपकरण समान थे", correct: false },
            { text: "उच्च पुरापाषाण काल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उच्च पुरापाषाण काल में ब्लेड तकनीक के विकास के साथ उपकरण हल्के, पतले और अधिक विशिष्ट हो गए।<br><br><i class='fa-solid fa-angles-right icon'></i> हड्डी और सींग जैसे नए पदार्थों का भी उपयोग होने लगा।"
    },
    {
        question: "प्रश्न 18. भारत के किस राज्य में पुरापाषाणकालीन स्थलों की संख्या सबसे अधिक है?",
        answers: shuffle([
            { text: "केरल", correct: false },
            { text: "मध्य प्रदेश", correct: true },
            { text: "पंजाब", correct: false },
            { text: "गोवा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नर्मदा, सोन और बेलन जैसी नदियों की घाटियों तथा भीमबेटका और आदमगढ़ जैसे शैलाश्रयों की उपस्थिति के कारण मध्य प्रदेश में भारत के सबसे समृद्ध और विविध पुरापाषाणकालीन स्थल मौजूद हैं।"
    },
    {
        question: "प्रश्न 19. पल्लवरम, जहाँ रॉबर्ट ब्रूस फुट ने पहला उपकरण खोजा था, वर्तमान में किस शहर के पास है?",
        answers: shuffle([
            { text: "मुंबई", correct: false },
            { text: "दिल्ली", correct: false },
            { text: "कोलकाता", correct: false },
            { text: "चेन्नई", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पल्लवरम, तमिलनाडु राज्य में चेन्नई शहर का एक उपनगर है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहीं पर 1863 में पहली भारतीय पुरापाषाणकालीन कुल्हाड़ी (हस्तकुठार) खोजी गई थी।"
    },
    {
        question: "प्रश्न 20. होलोसीन युग की शुरुआत लगभग कब हुई, जिसने पुरापाषाण काल के अंत को चिह्नित किया?",
        answers: shuffle([
            { text: "50,000 साल पहले", correct: false },
            { text: "25,000 साल पहले", correct: false },
            { text: "10,000 साल पहले", correct: true },
            { text: "5,000 साल पहले", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लगभग 10,000 साल पहले (या 12,000 साल पहले) प्लेइस्टोसीन हिमयुग समाप्त हुआ और गर्म जलवायु वाले होलोसीन युग की शुरुआत हुई, जिससे पुरापाषाणकालीन जीवनशैली समाप्त हो गई और मध्यपाषाण काल का उदय हुआ।"
    },
    {
        question: "प्रश्न 21. पुरापाषाण काल में कला का उद्देश्य क्या माना जाता है?",
        answers: shuffle([
            { text: "केवल सजावट", correct: false },
            { text: "ऐतिहासिक घटनाओं का रिकॉर्ड", correct: false },
            { text: "शिकार में सफलता के लिए अनुष्ठानिक और जादुई उद्देश्य", correct: true },
            { text: "व्यावसायिक बिक्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कई विद्वानों का मानना है कि जानवरों के चित्र बनाना एक प्रकार का जादुई अनुष्ठान था, जिसका उद्देश्य शिकार पर नियंत्रण स्थापित करना और शिकार में सफलता सुनिश्चित करना था।"
    },
    {
        question: "प्रश्न 22. गंगा घाटी में स्थित एकमात्र महत्वपूर्ण उच्च पुरापाषाणकालीन स्थल कौन सा है?",
        answers: shuffle([
            { text: "कालपी", correct: true },
            { text: "चौपानी-मांडो", correct: false },
            { text: "महदहा", correct: false },
            { text: "दमदमा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर प्रदेश के जालौन जिले में यमुना के किनारे स्थित कालपी एक महत्वपूर्ण स्थल है जहाँ से हाथीदांत और जानवरों की हड्डियों के साथ उच्च पुरापाषाणकालीन उपकरण मिले हैं।"
    },
    {
        question: "प्रश्न 23. अत्तिरमपक्कम में हाल के शोधों ने भारतीय निम्न पुरापाषाण काल को कितना पुराना बताया है?",
        answers: shuffle([
            { text: "लगभग 5 लाख वर्ष", correct: false },
            { text: "लगभग 8 लाख वर्ष", correct: false },
            { text: "लगभग 10 लाख वर्ष", correct: false },
            { text: "लगभग 15 लाख वर्ष", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अत्तिरमपक्कम में नवीनतम डेटिंग विधियों से पता चला है कि यहाँ एश्यूलियन संस्कृति लगभग 1.5 मिलियन (15 लाख) वर्ष पुरानी हो सकती है, जो इसे दुनिया के सबसे पुराने स्थलों में से एक बनाती है।"
    },
    {
        question: "प्रश्न 24. पुरापाषाणकालीन औजार बनाने की तकनीक क्या कहलाती है जिसमें एक पत्थर पर दूसरे पत्थर से प्रहार किया जाता है?",
        answers: shuffle([
            { text: "घर्षण तकनीक", correct: false },
            { text: "दबाव शल्कन तकनीक", correct: false },
            { text: "पाषाण-आघात तकनीक (Stone hammer technique)", correct: true },
            { text: "धातु कर्म तकनीक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सबसे आदिम और सीधी तकनीक थी, जिसमें एक हाथ में मूल पत्थर (कोर) और दूसरे हाथ में एक भारी पत्थर (हथौड़ा) लेकर प्रहार करके शल्क उतारे जाते थे।"
    },
    {
        question: "प्रश्न 25. किस पुरापाषाणकालीन स्थल से झोपड़ियों के निर्माण का सबसे पहला साक्ष्य मिला है?",
        answers: shuffle([
            { text: "भीमबेटका (मध्य प्रदेश)", correct: false },
            { text: "हुंस्गी (कर्नाटक)", correct: false },
            { text: "पैसरा (बिहार)", correct: true },
            { text: "डीडवाना (राजस्थान)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिहार के पैसरा में निम्न पुरापाषाणकालीन स्तरों से गोलाकार झोपड़ियों के फर्श और उन्हें बनाने में इस्तेमाल हुए खंभों के गड्ढों के निशान मिले हैं, जो खुले में मानव निर्मित आश्रय का प्रारंभिक प्रमाण है।"
    },
    {
        question: "प्रश्न 26. पुरापाषाणकालीन मानव के आहार में क्या शामिल नहीं था?",
        answers: shuffle([
            { text: "जंगली जानवरों का मांस", correct: false },
            { text: "कंद-मूल और फल", correct: false },
            { text: "अनाज (जैसे गेहूं और चावल)", correct: true },
            { text: "मछली और पक्षी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनाज का उत्पादन कृषि की शुरुआत के साथ नवपाषाण काल में हुआ।<br><br><i class='fa-solid fa-angles-right icon'></i> पुरापाषाणकालीन मानव अपने भोजन के लिए पूरी तरह से शिकार और प्रकृति में उपलब्ध वस्तुओं पर निर्भर थे।"
    },
    {
        question: "प्रश्न 27. पुरापाषाणकालीन समाज में श्रम का विभाजन किस पर आधारित होने की संभावना है?",
        answers: shuffle([
            { text: "धन और संपत्ति पर", correct: false },
            { text: "जाति और वर्ग पर", correct: false },
            { text: "आयु और लिंग पर", correct: true },
            { text: "शिक्षा और कौशल पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह माना जाता है कि पुरुषों ने मुख्य रूप से बड़े जानवरों का शिकार किया होगा, जबकि महिलाओं ने बच्चों की देखभाल के साथ-साथ कंद-मूल, फल और छोटे जानवरों को इकट्ठा करने का काम किया होगा।"
    },
    {
        question: "प्रश्न 28. भारत में शुतुरमुर्ग के अस्तित्व का प्राचीनतम प्रमाण किस काल से मिलता है?",
        answers: shuffle([
            { text: "नवपाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: false },
            { text: "उच्च पुरापाषाण काल", correct: true },
            { text: "हड़प्पा काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजस्थान, मध्य प्रदेश और महाराष्ट्र के कई उच्च पुरापाषाणकालीन स्थलों से शुतुरमुर्ग के अंडे के खोल के टुकड़े मिले हैं, जिन पर कभी-कभी नक्काशी भी की गई है।"
    },
    {
        question: "प्रश्न 29. 'दबाव शल्कन तकनीक' (Pressure Flaking) का उपयोग क्यों किया जाता था?",
        answers: shuffle([
            { text: "बड़े और भारी औजार बनाने के लिए", correct: false },
            { text: "पत्थर को तोड़ने के लिए", correct: false },
            { text: "अधिक नियमित, पतले और तेज धार वाले शल्क उतारने के लिए", correct: true },
            { text: "पत्थर पर चित्र बनाने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक उन्नत तकनीक थी, जिसमें पत्थर पर सीधे प्रहार करने के बजाय हड्डी या सींग के नुकीले सिरे से दबाव डालकर छोटे और नियंत्रित शल्क निकाले जाते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उच्च पुरापाषाण काल में आम थी।"
    },
    {
        question: "प्रश्न 30. बोरी (महाराष्ट्र) नामक स्थल क्यों महत्वपूर्ण माना जाता है?",
        answers: shuffle([
            { text: "यहाँ भारत में मानव उपस्थिति के प्राचीनतम तिथियों में से एक का दावा किया गया है।", correct: true },
            { text: "यहाँ भारत का सबसे बड़ा गुफा परिसर है।", correct: false },
            { text: "यहाँ से एकमात्र होमो हैबिलिस जीवाश्म मिला है।", correct: false },
            { text: "यहाँ से सोने के उपकरण मिले हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बोरी में ज्वालामुखी राख के विश्लेषण के आधार पर कुछ विद्वानों ने यहाँ मानव उपस्थिति को 14 लाख वर्ष पुराना होने का दावा किया है, हालांकि यह तिथि अभी भी बहस का विषय है।"
    },
    {
        question: "प्रश्न 31. निम्न पुरापाषाण काल के उपकरण बनाने की दो प्रमुख परंपराएँ कौन सी थीं?",
        answers: shuffle([
            { text: "ब्लेड और ब्यूरिन परंपरा", correct: false },
            { text: "सूक्ष्मपाषाण और हड्डी उपकरण परंपरा", correct: false },
            { text: "सोहन (खंडक-गंडासा) और एश्यूलियन (हस्तकुठार) परंपरा", correct: true },
            { text: "कुम्हारी और धातु कर्म परंपरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में निम्न पुरापाषाण काल को इन दो प्रमुख सांस्कृतिक परंपराओं में विभाजित किया जा सकता है: उत्तर-पश्चिम में सोहन (खंडक-गंडासा) और प्रायद्वीपीय भारत में एश्यूलियन (हस्तकुठार) या मद्रासियन।"
    },
    {
        question: "प्रश्न 32. गुदियाम गुफा (Gudiyam Cave) एक महत्वपूर्ण पुरापाषाणकालीन स्थल, किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "कर्नाटक", correct: false },
            { text: "आंध्र प्रदेश", correct: false },
            { text: "तमिलनाडु", correct: true },
            { text: "केरल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुदियाम गुफा, चेन्नई के पास स्थित एक महत्वपूर्ण प्रागैतिहासिक स्थल है जहाँ रॉबर्ट ब्रूस फुट ने भी काम किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ निम्न और मध्य पुरापाषाण काल के स्तर पाए गए हैं।"
    },
    {
        question: "प्रश्न 33. पुरापाषाणकालीन कला में मानव आकृतियों को अक्सर किस रूप में दर्शाया गया है?",
        answers: shuffle([
            { text: "बहुत यथार्थवादी और विस्तृत", correct: false },
            { text: "छड़ी जैसी या योजनाबद्ध (schematic)", correct: true },
            { text: "देवताओं के रूप में", correct: false },
            { text: "राजाओं के रूप में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भीमबेटका के चित्रों में जानवरों को अक्सर यथार्थवादी ढंग से चित्रित किया गया है, लेकिन मानव आकृतियों को आमतौर पर सरल, छड़ी जैसी रेखाओं (stick-figures) के रूप में बनाया गया है।"
    },
    {
        question: "प्रश्न 34. बुद्ध पुष्कर (राजस्थान) स्थल किस काल के उपकरणों के लिए जाना जाता है?",
        answers: shuffle([
            { text: "केवल नवपाषाण", correct: false },
            { text: "केवल हड़प्पा", correct: false },
            { text: "पुरापाषाण काल के तीनों चरण", correct: true },
            { text: "केवल उच्च पुरापाषाण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुष्कर झील के पास स्थित यह स्थल पुरापाषाण काल के एक लंबे अनुक्रम को दर्शाता है, जहाँ निम्न, मध्य और उच्च पुरापाषाण काल के उपकरण पाए गए हैं।"
    },
    {
        question: "प्रश्न 35. पुरापाषाण काल में मृत्यु के बाद जीवन की अवधारणा का संकेत किससे मिलता है?",
        answers: shuffle([
            { text: "पिरामिडों के निर्माण से", correct: false },
            { text: "मृतकों के साथ औजार और खाद्य सामग्री दफनाने से", correct: true },
            { text: "पुनर्जन्म के बारे में लिखे ग्रंथों से", correct: false },
            { text: "विस्तृत मंदिरों के निर्माण से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हालांकि भारत में इसके साक्ष्य दुर्लभ हैं, यूरोप में निएंडरथल और होमो सेपियन्स द्वारा मृतकों को औजारों और खाने की चीजों के साथ दफनाने की प्रथा उनके किसी प्रकार के पारलौकिक जीवन में विश्वास को इंगित करती है।"
    },
    {
        question: "प्रश्न 36. जी. आर. शर्मा किस विश्वविद्यालय के पुरातत्ववेत्ता थे जिन्होंने बेलन घाटी में व्यापक शोध किया?",
        answers: shuffle([
            { text: "डेक्कन कॉलेज, पुणे", correct: false },
            { text: "इलाहाबाद विश्वविद्यालय", correct: true },
            { text: "पंजाब विश्वविद्यालय", correct: false },
            { text: "कलकत्ता विश्वविद्यालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोफेसर गोविंद राज शर्मा और उनकी टीम ने इलाहाबाद विश्वविद्यालय की ओर से बेलन और गंगा घाटी में व्यापक सर्वेक्षण और उत्खनन किया, जिससे इस क्षेत्र के प्रागितिहास पर अभूतपूर्व प्रकाश पड़ा।"
    },
    {
        question: "प्रश्न 37. छोटा नागपुर का पठार किस प्रकार के पुरापाषाणकालीन उपकरणों के लिए जाना जाता है?",
        answers: shuffle([
            { text: "केवल ब्लेड उपकरण", correct: false },
            { text: "केवल सूक्ष्मपाषाण", correct: false },
            { text: "हस्तकुठार और शल्क उपकरण", correct: true },
            { text: "हड्डी के उपकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> झारखंड और आसपास के क्षेत्रों में फैला छोटा नागपुर का पठार पुरापाषाणकालीन संस्कृतियों, विशेष रूप से निम्न और मध्य पुरापाषाण काल के हस्तकुठार और शल्क उपकरणों से समृद्ध है।"
    },
    {
        question: "प्रश्न 38. पुरापाषाणकालीन अर्थव्यवस्था को 'निर्वाह अर्थव्यवस्था' क्यों कहा जाता है?",
        answers: shuffle([
            { text: "क्योंकि वे व्यापार और वाणिज्य पर आधारित थे।", correct: false },
            { text: "क्योंकि वे भविष्य के लिए भोजन का बड़े पैमाने पर भंडारण करते थे।", correct: false },
            { text: "क्योंकि वे केवल जीवित रहने के लिए आवश्यक भोजन और संसाधन ही जुटा पाते थे।", correct: true },
            { text: "क्योंकि वे मुद्रा का उपयोग करते थे।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उनकी अर्थव्यवस्था में अधिशेष (surplus) उत्पादन या संचय की कोई अवधारणा नहीं थी।<br><br><i class='fa-solid fa-angles-right icon'></i> वे दैनिक आधार पर भोजन की तलाश करते थे और उनका जीवन केवल अपनी तात्कालिक जरूरतों को पूरा करने पर केंद्रित था।"
    },
    {
        question: "प्रश्न 39. अंतिम हिमयुग की समाप्ति ने किस प्रकार पुरापाषाण काल के अंत में योगदान दिया?",
        answers: shuffle([
            { text: "इसने मानव को पूरी तरह समाप्त कर दिया।", correct: false },
            { text: "इसने बड़े जानवरों (मेगाफौना) के विलुप्त होने और नए छोटे जानवरों के उदय का कारण बना।", correct: true },
            { text: "इसने कृषि को असंभव बना दिया।", correct: false },
            { text: "इसने मनुष्यों को गुफाओं में स्थायी रूप से रहने के लिए मजबूर किया।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जलवायु गर्म होने से विशालकाय हाथी (मैमथ) और गैंडों जैसे बड़े जानवर या तो विलुप्त हो गए या अन्य क्षेत्रों में चले गए।<br><br><i class='fa-solid fa-angles-right icon'></i> उनकी जगह हिरण, खरगोश जैसे तेज और छोटे जानवर आ गए, जिससे शिकार की तकनीक बदल गई और मध्यपाषाण काल का मार्ग प्रशस्त हुआ।"
    },
    {
        question: "प्रश्न 40. पुरापाषाण काल में संचार का मुख्य माध्यम क्या रहा होगा?",
        answers: shuffle([
            { text: "लिखित भाषा", correct: false },
            { text: "सांकेतिक भाषा, हाव-भाव और आदिम ध्वनियाँ", correct: true },
            { text: "टेलीफोन", correct: false },
            { text: "पत्र लेखन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भाषा के पूर्ण विकसित होने से पहले, पुरापाषाणकालीन मानव संभवतः इशारों, शारीरिक हाव-भाव और विभिन्न प्रकार की ध्वनियों का उपयोग करके एक-दूसरे के साथ संवाद करते थे।"
    },
    {
        question: "प्रश्न 41. भारत में किस पुरापाषाणकालीन स्थल को 'भारत का ओल्डुवाई गॉर्ज' कहा जाता है?",
        answers: shuffle([
            { text: "हथनोरा", correct: false },
            { text: "भीमबेटका", correct: false },
            { text: "अत्तिरमपक्कम", correct: true },
            { text: "डीडवाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओल्डुवाई गॉर्ज (तंजानिया) मानव विकास के अध्ययन के लिए विश्व प्रसिद्ध है।<br><br><i class='fa-solid fa-angles-right icon'></i> अत्तिरमपक्कम में मिली अत्यधिक पुरानी तिथियों और समृद्ध पुरातात्विक अनुक्रम के कारण, इसकी तुलना अक्सर 'भारत का ओल्डुवाई गॉर्ज' से की जाती है।"
    },
    {
        question: "प्रश्न 42. 'तक्षणी' (Burin) नामक उपकरण का मुख्य उपयोग क्या था?",
        answers: shuffle([
            { text: "जानवरों का शिकार करना", correct: false },
            { text: "जमीन खोदना", correct: false },
            { text: "हड्डी, सींग या लकड़ी पर नक्काशी या खुदाई करना", correct: true },
            { text: "अनाज पीसना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तक्षणी एक नुकीले, छेनी जैसे सिरे वाला ब्लेड उपकरण था, जिसका उपयोग उच्च पुरापाषाण काल में अन्य सामग्री (जैसे हड्डी, हाथीदांत) से कलाकृतियाँ या उपकरण बनाने के लिए किया जाता था।"
    },
    {
        question: "प्रश्न 43. पुरापाषाणकालीन समाज में संपत्ति की अवधारणा कैसी थी?",
        answers: shuffle([
            { text: "व्यक्तिगत संपत्ति और भूमि स्वामित्व पर आधारित", correct: false },
            { text: "सामुदायिक स्वामित्व और निजी संपत्ति का अभाव", correct: true },
            { text: "केवल मुखिया के पास सारी संपत्ति होती थी", correct: false },
            { text: "मुद्रा पर आधारित संपत्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शिकारी-संग्राहक समाजों में, संसाधन (जैसे शिकार का क्षेत्र, जल स्रोत) पूरे समूह के माने जाते थे और व्यक्तिगत संपत्ति की कोई अवधारणा नहीं थी।<br><br><i class='fa-solid fa-angles-right icon'></i> सब कुछ साझा किया जाता था।"
    },
    {
        question: "प्रश्न 44. भारत में मानव के प्राचीनतम सांस्कृतिक जमाव किस काल के हैं?",
        answers: shuffle([
            { text: "नवपाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: false },
            { text: "निम्न पुरापाषाण काल", correct: true },
            { text: "ताम्रपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में मानव द्वारा छोड़े गए सबसे पुराने सांस्कृतिक अवशेष निम्न पुरापाषाण काल के पत्थर के उपकरण हैं, जो लाखों वर्ष पुराने हैं।"
    },
    {
        question: "प्रश्न 45. पोटवार पठार, जो सोहन संस्कृति का केंद्र था, किन दो नदियों के बीच स्थित है?",
        answers: shuffle([
            { text: "गंगा और यमुना", correct: false },
            { text: "सिंधु और झेलम", correct: true },
            { text: "नर्मदा और ताप्ती", correct: false },
            { text: "कृष्णा और गोदावरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पोटवार का पठार वर्तमान पाकिस्तान में सिंधु और झेलम नदियों के बीच का क्षेत्र है, जो निम्न पुरापाषाणकालीन सोहन संस्कृति के लिए प्रसिद्ध है।"
    },
    {
        question: "प्रश्न 46. भीमबेटका में किस रंग का प्रयोग सबसे अधिक हुआ है?",
        answers: shuffle([
            { text: "नीला", correct: false },
            { text: "लाल", correct: true },
            { text: "हरा", correct: false },
            { text: "पीला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भीमबेटका के अधिकांश चित्र लाल रंग (गेरू) से बने हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके अलावा सफेद रंग का भी व्यापक उपयोग हुआ है, जबकि हरे और पीले जैसे रंग बहुत दुर्लभ हैं।"
    },
    {
        question: "प्रश्न 47. पुरापाषाण युग का अंत और मध्यपाषाण युग की शुरुआत का मुख्य कारण क्या था?",
        answers: shuffle([
            { text: "मानव प्रजाति में परिवर्तन", correct: false },
            { text: "एक बड़े युद्ध का होना", correct: false },
            { text: "जलवायु परिवर्तन (हिम युग का अंत)", correct: true },
            { text: "लोहे की खोज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिम युग की समाप्ति और गर्म, आर्द्र जलवायु की शुरुआत ने पर्यावरण, वनस्पतियों और जीवों को बदल दिया, जिससे मानव को अपनी जीवन शैली और प्रौद्योगिकी में अनुकूलन करने के लिए मजबूर होना पड़ा, और यही मध्यपाषाण काल की शुरुआत थी।"
    },
    {
        question: "प्रश्न 48. ललितपुर जिले (उत्तर प्रदेश) में पुरापाषाणकालीन उपकरण किस नदी घाटी में पाए गए हैं?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: false },
            { text: "देवगढ़ क्षेत्र की नदियों में", correct: true },
            { text: "घाघरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर प्रदेश के ललितपुर जिले के देवगढ़ क्षेत्र की नदियों में कई पुरापाषाणकालीन स्थल मिले हैं, जहाँ से निम्न और मध्य पुरापाषाण काल के उपकरण प्राप्त हुए हैं।"
    },
    {
        question: "प्रश्न 49. किस मानव प्रजाति का मस्तिष्क आयतन आधुनिक मानव के सबसे करीब था?",
        answers: shuffle([
            { text: "होमो हैबिलिस", correct: false },
            { text: "होमो इरेक्टस", correct: false },
            { text: "निएंडरथल", correct: true },
            { text: "ऑस्ट्रेलोपिथेकस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निएंडरथल मानव का औसत मस्तिष्क आयतन लगभग 1400-1500 घन सेंटीमीटर था, जो आधुनिक मानव (होमो सेपियन्स) के औसत के बराबर या उससे थोड़ा अधिक था।"
    },
    {
        question: "प्रश्न 50. 'भारत में प्रागितिहास के पिता' की उपाधि किसे दी जाती है?",
        answers: shuffle([
            { text: "अलेक्जेंडर कनिंघम", correct: false },
            { text: "जॉन मार्शल", correct: false },
            { text: "रॉबर्ट ब्रूस फुट", correct: true },
            { text: "दयाराम साहनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में पहले पुरापाषाणकालीन उपकरण की खोज करने और प्रागैतिहासिक अध्ययन की नींव रखने के कारण, रॉबर्ट ब्रूस फुट को अक्सर 'भारतीय प्रागितिहास का पिता' कहा जाता है।"
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