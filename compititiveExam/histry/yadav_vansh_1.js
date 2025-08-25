const questions = [
    {
        topHeading: "यादव वंश पर आधारित बहुविकल्पी प्रश्न part 1 (quiz_no.101)"
    },
    {
        question: "देवगिरि के यादव वंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "सेउणा", correct: false },
            { text: "भिल्लम पंचम", correct: true },
            { text: "सिंघण द्वितीय", correct: false },
            { text: "रामचंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भिल्लम पंचम ने 1187 ईस्वी में पश्चिमी चालुक्यों की शक्ति के कमजोर होने पर देवगिरि में यादव वंश की स्थापना की और अपनी स्वतंत्रता की घोषणा की।"
    },
    {
        question: "यादवों की राजधानी क्या थी?",
        answers: shuffle([
            { text: "द्वारसमुद्र", correct: false },
            { text: "वारंगल", correct: false },
            { text: "देवगिरि", correct: true },
            { text: "कल्याणी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> देवगिरि (आधुनिक दौलताबाद, महाराष्ट्र) यादवों की राजधानी थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी शहर के नाम पर इस वंश को \"देवगिरि के यादव\" के नाम से भी जाना जाता है।"
    },
    {
        question: "यादव वंश के शासक किस साम्राज्य के सामंत थे, जिन्होंने बाद में अपनी स्वतंत्रता की घोषणा की?",
        answers: shuffle([
            { text: "राष्ट्रकूट", correct: false },
            { text: "पश्चिमी चालुक्य", correct: true },
            { text: "होयसल", correct: false },
            { text: "काकतीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यादव मूल रूप से पश्चिमी चालुक्य साम्राज्य के सामंत थे।<br><br><i class='fa-solid fa-angles-right icon'></i> बारहवीं शताब्दी के अंत में चालुक्य शक्ति के कमजोर होने पर भिल्लम पंचम ने खुद को स्वतंत्र घोषित किया।"
    },
    {
        question: "किस यादव शासक ने यादव साम्राज्य को एक शक्तिशाली और विस्तृत साम्राज्य में बदला?",
        answers: shuffle([
            { text: "भिल्लम पंचम", correct: false },
            { text: "सिंघण द्वितीय", correct: true },
            { text: "कृष्ण", correct: false },
            { text: "महादेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंघण द्वितीय (1200-1247 ईस्वी) यादव वंश का सबसे शक्तिशाली शासक था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने होयसलों, काकतियों और अन्य पड़ोसी राज्यों को हराकर साम्राज्य का विस्तार किया।"
    },
    {
        question: "यादवों का राज्य मुख्य रूप से आधुनिक भारत के किस क्षेत्र में स्थित था?",
        answers: shuffle([
            { text: "उत्तर भारत", correct: false },
            { text: "पूर्वी भारत", correct: false },
            { text: "दक्कन (महाराष्ट्र)", correct: true },
            { text: "सुदूर दक्षिण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यादवों ने मुख्य रूप से आधुनिक महाराष्ट्र और उत्तरी कर्नाटक के क्षेत्रों पर शासन किया, जिसे दक्कन के नाम से जाना जाता था।"
    },
    {
        question: "किस यादव शासक को 'श्रीमत् सिंघणदेव' के नाम से जाना जाता था और उसका शासनकाल यादवों के लिए स्वर्ण युग माना जाता है?",
        answers: shuffle([
            { text: "भिल्लम पंचम", correct: false },
            { text: "कृष्ण", correct: false },
            { text: "महादेव", correct: false },
            { text: "सिंघण द्वितीय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंघण द्वितीय का शासनकाल यादवों की राजनीतिक और सांस्कृतिक उन्नति का चरम काल था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने कई उपाधियाँ धारण की और साम्राज्य का विस्तार किया।"
    },
    {
        question: "देवगिरि के यादवों का सामना दिल्ली सल्तनत के किस शासक से हुआ था?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: true },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोज शाह तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1296 ईस्वी में अलाउद्दीन खिलजी ने देवगिरि पर आक्रमण किया, जो यादवों और दिल्ली सल्तनत के बीच पहला बड़ा संघर्ष था।"
    },
    {
        question: "यादवों के शासनकाल में साहित्य और कला के महान संरक्षक कौन थे?",
        answers: shuffle([
            { text: "भिल्लम पंचम", correct: false },
            { text: "महादेव", correct: false },
            { text: "सिंघण द्वितीय", correct: false },
            { text: "रामचंद्र", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजा रामचंद्र (1271-1311 ईस्वी) साहित्य, कला और धर्म के महान संरक्षक थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उनके दरबार में हेमाद्रि जैसे विद्वान मौजूद थे।"
    },
    {
        question: "यादवों के किस शासक ने 'होयसलों' को पराजित कर उनके राज्य के उत्तरी भाग पर अधिकार कर लिया था?",
        answers: shuffle([
            { text: "भिल्लम पंचम", correct: false },
            { text: "महादेव", correct: false },
            { text: "सिंघण द्वितीय", correct: true },
            { text: "रामचंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंघण द्वितीय ने लगातार अभियानों के माध्यम से होयसलों को पराजित किया और उनके राज्य के उत्तरी हिस्से पर कब्जा कर लिया।"
    },
    {
        question: "यादवों के किस शासक ने अपनी सैन्य सफलताओं के बाद 'यादव चक्रवर्ती' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "भिल्लम पंचम", correct: false },
            { text: "सिंघण द्वितीय", correct: true },
            { text: "कृष्ण", correct: false },
            { text: "रामचंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंघण द्वितीय ने अपनी विजयों के बाद 'यादव चक्रवर्ती' की उपाधि धारण की, जो उसकी सार्वभौमिक संप्रभुता का प्रतीक थी।"
    },
    {
        question: "अलाउद्दीन खिलजी ने देवगिरि पर पहली बार कब आक्रमण किया था?",
        answers: shuffle([
            { text: "1290 ईस्वी", correct: false },
            { text: "1296 ईस्वी", correct: true },
            { text: "1300 ईस्वी", correct: false },
            { text: "1305 ईस्वी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अलाउद्दीन खिलजी ने 1296 ईस्वी में, दिल्ली का सुल्तान बनने से पहले, देवगिरि पर आक्रमण कर वहाँ के शासक रामचंद्र को संधि करने पर मजबूर किया।"
    },
    {
        question: "यादवों के समय में निर्मित प्रसिद्ध मंदिर कहाँ स्थित है?",
        answers: shuffle([
            { text: "हंपी", correct: false },
            { text: "एलोरा", correct: false },
            { text: "बेलूर", correct: false },
            { text: "येलापुर (आधुनिक एलोरा)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यादवों ने एलोरा के कैलाश मंदिर परिसर में कई मंदिरों का निर्माण और जीर्णोद्धार करवाया।<br><br><i class='fa-solid fa-angles-right icon'></i> येलापुर (एलोरा का पुराना नाम) उनके धार्मिक केंद्रों में से एक था।"
    },
    {
        question: "यादव वंश का अंतिम शासक कौन था?",
        answers: shuffle([
            { text: "रामचंद्र", correct: false },
            { text: "महादेव", correct: false },
            { text: "हरपालदेव", correct: true },
            { text: "कृष्ण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हरपालदेव यादव वंश का अंतिम शासक था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसे दिल्ली सल्तनत के शासक कुतुबुद्दीन मुबारकशाह खिलजी ने 1318 ईस्वी में पराजित कर मार डाला, जिससे यादव वंश का अंत हो गया।"
    },
    {
        question: "अलाउद्दीन खिलजी के आक्रमण के समय देवगिरि का शासक कौन था?",
        answers: shuffle([
            { text: "सिंघण द्वितीय", correct: false },
            { text: "महादेव", correct: false },
            { text: "रामचंद्र", correct: true },
            { text: "हरपालदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1296 ईस्वी में जब अलाउद्दीन खिलजी ने देवगिरि पर आक्रमण किया, तब वहाँ का शासक रामचंद्र था।"
    },
    {
        question: "प्रसिद्ध गणितज्ञ भास्कराचार्य किस यादव शासक के दरबार में थे?",
        answers: shuffle([
            { text: "भिल्लम पंचम", correct: false },
            { text: "सिंघण द्वितीय", correct: true },
            { text: "रामचंद्र", correct: false },
            { text: "महादेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महान गणितज्ञ और ज्योतिषी भास्कराचार्य, जिन्होंने 'सिद्धांत शिरोमणि' नामक ग्रंथ लिखा, सिंघण द्वितीय के दरबार में एक प्रमुख विद्वान थे।"
    },
    {
        question: "यादवों का राज्य किस नदी घाटी के आसपास विकसित हुआ?",
        answers: shuffle([
            { text: "कृष्णा", correct: false },
            { text: "गोदावरी", correct: true },
            { text: "कावेरी", correct: false },
            { text: "नर्मदा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यादवों का साम्राज्य मुख्य रूप से गोदावरी नदी की ऊपरी घाटी में विकसित हुआ और बाद में इसका विस्तार हुआ।"
    },
    {
        question: "यादवों के किस शासक को दिल्ली सल्तनत के साथ संघर्ष के बाद कर देने के लिए मजबूर होना पड़ा?",
        answers: shuffle([
            { text: "भिल्लम पंचम", correct: false },
            { text: "महादेव", correct: false },
            { text: "रामचंद्र", correct: true },
            { text: "कृष्ण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अलाउद्दीन खिलजी के आक्रमण के बाद रामचंद्र को संधि करनी पड़ी और वह दिल्ली सल्तनत का सामंत बनकर कर देने लगा।"
    },
    {
        question: "यादवों के शासनकाल में 'महानदंडानायक' कौन होता था?",
        answers: shuffle([
            { text: "सेना का कमांडर", correct: true },
            { text: "प्रांत का प्रशासक", correct: false },
            { text: "राजस्व अधिकारी", correct: false },
            { text: "न्यायाधीश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यादव प्रशासन में 'महानदंडानायक' सेना का सर्वोच्च कमांडर या प्रमुख होता था।"
    },
    {
        question: "किस यादव शासक के शासनकाल में मलिक काफूर ने देवगिरि पर दूसरा आक्रमण किया था?",
        answers: shuffle([
            { text: "भिल्लम पंचम", correct: false },
            { text: "सिंघण द्वितीय", correct: false },
            { text: "रामचंद्र", correct: true },
            { text: "महादेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1307-1308 ईस्वी में मलिक काफूर ने रामचंद्र को फिर से पराजित किया, क्योंकि उसने कर देना बंद कर दिया था।"
    },
    {
        question: "यादवों के किस शासक ने मल्लिकार्जुन नामक एक प्रसिद्ध मंदिर का निर्माण करवाया था?",
        answers: shuffle([
            { text: "भिल्लम पंचम", correct: false },
            { text: "सिंघण द्वितीय", correct: true },
            { text: "कृष्ण", correct: false },
            { text: "महादेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंघण द्वितीय ने कई मंदिरों का निर्माण करवाया, जिनमें एक प्रसिद्ध मल्लिकार्जुन मंदिर भी था।"
    },
    {
        question: "यादवों का कौन सा शासक हेमाद्रि नामक प्रसिद्ध विद्वान का संरक्षक था?",
        answers: shuffle([
            { text: "सिंघण द्वितीय", correct: false },
            { text: "कृष्ण", correct: false },
            { text: "महादेव", correct: false },
            { text: "रामचंद्र", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेमाद्रि, जिन्होंने 'चतुर्वर्ग चिंतामणि' नामक ग्रंथ लिखा, राजा रामचंद्र के दरबार में एक प्रमुख विद्वान और मंत्री थे।"
    },
    {
        question: "देवगिरि के यादवों का अंत किस शासक के हाथों हुआ?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मलिक काफूर", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "कुतुबुद्दीन मुबारकशाह खिलजी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुतुबुद्दीन मुबारकशाह खिलजी ने 1318 ईस्वी में हरपालदेव को मारकर यादव वंश का पूरी तरह से अंत कर दिया।"
    },
    {
        question: "यादवों के शासनकाल में 'महाबलाधिकृत' कौन होता था?",
        answers: shuffle([
            { text: "राजस्व अधिकारी", correct: false },
            { text: "सेना का कमांडर", correct: true },
            { text: "प्रांतीय शासक", correct: false },
            { text: "न्यायधीश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महाबलाधिकृत' सेना का प्रमुख कमांडर होता था, जो 'महानदंडानायक' के समान एक सैन्य पद था।"
    },
    {
        question: "यादवों के किस शासक ने उत्तरी कोंकण पर विजय प्राप्त की थी?",
        answers: shuffle([
            { text: "भिल्लम पंचम", correct: false },
            { text: "सिंघण द्वितीय", correct: false },
            { text: "कृष्ण", correct: true },
            { text: "महादेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजा कृष्ण (1247-1260 ईस्वी) ने अपने शासनकाल के दौरान उत्तरी कोंकण के क्षेत्र पर विजय प्राप्त की थी।"
    },
    {
        question: "यादवों के शासनकाल में भूमि माप की इकाई को क्या कहा जाता था?",
        answers: shuffle([
            { text: "कर", correct: false },
            { text: "कुडंब", correct: true },
            { text: "मापन", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुडंब' यादवों के शासनकाल में भूमि माप की एक प्रमुख इकाई थी।"
    },
    {
        question: "यादवों की पहली राजधानी कहाँ थी, जो बाद में देवगिरि स्थानांतरित हो गई?",
        answers: shuffle([
            { text: "सेउणादेश", correct: true },
            { text: "चंद्रपुर", correct: false },
            { text: "नासिक", correct: false },
            { text: "कल्याणी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यादवों को 'सेउणा' के नाम से भी जाना जाता था, और उनकी प्रारंभिक राजधानी सेउणादेश (आधुनिक नासिक के पास) थी, जिसे बाद में देवगिरि ले जाया गया।"
    },
    {
        question: "यादव शासक रामचंद्र का दिल्ली सल्तनत से संघर्ष क्यों शुरू हुआ?",
        answers: shuffle([
            { text: "रामचंद्र ने अलाउद्दीन खिलजी को हराया था।", correct: false },
            { text: "रामचंद्र ने दिल्ली सल्तनत को कर देना बंद कर दिया था।", correct: true },
            { text: "अलाउद्दीन खिलजी ने देवगिरि पर विजय प्राप्त की।", correct: false },
            { text: "रामचंद्र ने दिल्ली के खिलाफ विद्रोह किया।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1307 ईस्वी में, जब रामचंद्र ने अलाउद्दीन खिलजी को कर देना बंद कर दिया, तब अलाउद्दीन ने मलिक काफूर को देवगिरि पर आक्रमण करने के लिए भेजा।"
    },
    {
        question: "प्रसिद्ध विद्वान हेमाद्रि किस पद पर कार्यरत थे?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: true },
            { text: "सेनापति", correct: false },
            { text: "राजस्व अधिकारी", correct: false },
            { text: "धार्मिक प्रमुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेमाद्रि, जिन्होंने 'चतुर्वर्ग चिंतामणि' नामक ग्रंथ लिखा, यादव शासक महादेव और रामचंद्र के दरबार में प्रधानमंत्री थे।"
    },
    {
        question: "किस यादव शासक ने मलिक काफूर को एक बड़ी राशि देकर देवगिरि को पूर्ण विनाश से बचाया था?",
        answers: shuffle([
            { text: "महादेव", correct: false },
            { text: "कृष्ण", correct: false },
            { text: "रामचंद्र", correct: true },
            { text: "भिल्लम पंचम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1307 ईस्वी में मलिक काफूर के दूसरे आक्रमण के बाद रामचंद्र ने उसे एक बड़ी रकम देकर और अधीनता स्वीकार कर देवगिरि को पूर्ण विनाश से बचाया।"
    },
    {
        question: "यादवों के शासनकाल में 'महानदंडानायक' कौन था?",
        answers: shuffle([
            { text: "वित्त मंत्री", correct: false },
            { text: "मुख्य न्यायाधीश", correct: false },
            { text: "सेना का प्रमुख कमांडर", correct: true },
            { text: "ग्राम प्रमुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महानदंडानायक' यादव प्रशासन में सेना का सर्वोच्च कमांडर या प्रमुख अधिकारी होता था।"
    },
    {
        question: "किस यादव शासक ने हम्पी के तुंगभद्रा नदी के तट पर विजय प्राप्त की थी?",
        answers: shuffle([
            { text: "भिल्लम पंचम", correct: false },
            { text: "सिंघण द्वितीय", correct: true },
            { text: "कृष्ण", correct: false },
            { text: "महादेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंघण द्वितीय ने होयसलों को हराकर तुंगभद्रा नदी के उत्तरी तट पर अपना नियंत्रण स्थापित किया था।"
    },
    {
        question: "यादवों के किस शासक ने 'अपरिमित' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "रामचंद्र", correct: false },
            { text: "महादेव", correct: false },
            { text: "कृष्ण", correct: false },
            { text: "सिंघण द्वितीय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंघण द्वितीय ने अपने विशाल साम्राज्य और असीमित सैन्य शक्ति के कारण 'अपरिमित' की उपाधि धारण की थी।"
    },
    {
        question: "यादव काल में भू-राजस्व का मुख्य स्रोत क्या था?",
        answers: shuffle([
            { text: "व्यापारिक कर", correct: false },
            { text: "भूमि कर", correct: true },
            { text: "सैनिक कर", correct: false },
            { text: "नमक कर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यादव प्रशासन में भूमि कर राजस्व का सबसे महत्वपूर्ण स्रोत था, जो कृषि उत्पादन पर लगाया जाता था।"
    },
    {
        question: "किस यादव शासक के शासनकाल में मुस्लिम आक्रमणों की शुरुआत हुई थी?",
        answers: shuffle([
            { text: "भिल्लम पंचम", correct: false },
            { text: "सिंघण द्वितीय", correct: false },
            { text: "रामचंद्र", correct: true },
            { text: "हरपालदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजा रामचंद्र के शासनकाल में 1296 ईस्वी में अलाउद्दीन खिलजी के नेतृत्व में दिल्ली सल्तनत ने पहला आक्रमण किया था।"
    },
    {
        question: "यादवों के किस शासक ने होयसलों के साथ लगातार संघर्ष किया था?",
        answers: shuffle([
            { text: "भिल्लम पंचम", correct: false },
            { text: "सिंघण द्वितीय", correct: true },
            { text: "रामचंद्र", correct: false },
            { text: "कृष्ण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंघण द्वितीय ने अपनी विस्तारवादी नीतियों के कारण होयसलों के साथ कई वर्षों तक संघर्ष किया था।"
    },
    {
        question: "देवगिरि के यादवों का अंत कब हुआ?",
        answers: shuffle([
            { text: "1296 ईस्वी", correct: false },
            { text: "1307 ईस्वी", correct: false },
            { text: "1318 ईस्वी", correct: true },
            { text: "1320 ईस्वी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1318 ईस्वी में कुतुबुद्दीन मुबारक शाह खिलजी ने यादव शासक हरपालदेव को मारकर यादव साम्राज्य का अंत कर दिया।"
    },
    {
        question: "यादव प्रशासन में 'अमात्य' कौन होता था?",
        answers: shuffle([
            { text: "सेनापति", correct: false },
            { text: "मंत्री", correct: true },
            { text: "न्यायाधीश", correct: false },
            { text: "राजस्व अधिकारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अमात्य' यादव प्रशासन में मंत्रियों के लिए प्रयुक्त एक शब्द था।"
    },
    {
        question: "यादव शासक रामचंद्र का उत्तराधिकारी कौन था?",
        answers: shuffle([
            { text: "कृष्ण", correct: false },
            { text: "महादेव", correct: false },
            { text: "सिंघण द्वितीय", correct: false },
            { text: "शंकरदेव", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रामचंद्र की मृत्यु के बाद उसका पुत्र शंकरदेव यादव साम्राज्य का शासक बना, लेकिन जल्द ही उसे मलिक काफूर ने पराजित कर दिया।"
    },
    {
        question: "किस यादव शासक ने 'कोंकण' पर विजय प्राप्त की थी?",
        answers: shuffle([
            { text: "महादेव", correct: false },
            { text: "कृष्ण", correct: true },
            { text: "सिंघण द्वितीय", correct: false },
            { text: "रामचंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यादव शासक कृष्ण ने अपने शासनकाल के दौरान कोंकण के क्षेत्र पर अधिकार किया था।"
    },
    {
        question: "यादवों के शासनकाल में किस धार्मिक संप्रदाय का उदय हुआ, जिसने समाज में महत्वपूर्ण भूमिका निभाई?",
        answers: shuffle([
            { text: "शैव", correct: false },
            { text: "वैष्णव", correct: false },
            { text: "जैन", correct: false },
            { text: "महानुभाव", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महानुभाव संप्रदाय यादवों के शासनकाल में महाराष्ट्र में उभरा, और इसने मराठी साहित्य के विकास में महत्वपूर्ण योगदान दिया।"
    },
    {
        question: "अलाउद्दीन खिलजी ने यादवों की राजधानी देवगिरि से क्या प्राप्त किया था?",
        answers: shuffle([
            { text: "हाथी और घोड़े", correct: false },
            { text: "सोना, चांदी और कीमती वस्तुएँ", correct: true },
            { text: "सैनिक और हथियार", correct: false },
            { text: "केवल भू-राजस्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1296 ईस्वी के आक्रमण के बाद अलाउद्दीन खिलजी ने देवगिरि से बड़ी मात्रा में सोना, चांदी, हाथी और कीमती वस्तुएँ लूटी थीं।"
    },
    {
        question: "यादवों के किस शासक ने होयसल शासक सोमेश्वर को पराजित किया था?",
        answers: shuffle([
            { text: "कृष्ण", correct: false },
            { text: "महादेव", correct: true },
            { text: "रामचंद्र", correct: false },
            { text: "सिंघण द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महादेव (1261-1271 ईस्वी) ने होयसल शासक सोमेश्वर को पराजित किया और यादव साम्राज्य की शक्ति को और मजबूत किया।"
    },
    {
        question: "यादवों के शासनकाल में कृषि भूमि के माप के लिए किस इकाई का प्रयोग किया जाता था?",
        answers: shuffle([
            { text: "वेली", correct: false },
            { text: "कुडंब", correct: true },
            { text: "गडा", correct: false },
            { text: "मापन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुडंब' यादव प्रशासन में भूमि माप की एक प्रमुख इकाई थी।"
    },
    {
        question: "हेमाद्रि द्वारा रचित प्रसिद्ध ग्रंथ 'चतुर्वर्ग चिंतामणि' का संबंध किससे है?",
        answers: shuffle([
            { text: "युद्ध", correct: false },
            { text: "धर्म और कर्मकांड", correct: true },
            { text: "राजनीति", correct: false },
            { text: "गणित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चतुर्वर्ग चिंतामणि' एक विशाल ग्रंथ है, जिसमें धर्म, दान, व्रत और मोक्ष जैसे विषयों पर विस्तृत जानकारी दी गई है।"
    },
    {
        question: "किस यादव शासक को 'अपरिमित पराक्रमी' की उपाधि मिली थी?",
        answers: shuffle([
            { text: "सिंघण द्वितीय", correct: false },
            { text: "कृष्ण", correct: false },
            { text: "महादेव", correct: true },
            { text: "रामचंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महादेव को उसकी सैन्य सफलताओं और असीमित पराक्रम के कारण यह उपाधि मिली थी।"
    },
    {
        question: "यादवों की वास्तुकला में किस शैली का प्रभाव अधिक था?",
        answers: shuffle([
            { text: "चालुक्य", correct: true },
            { text: "होयसल", correct: false },
            { text: "राष्ट्रकूट", correct: false },
            { text: "काकतीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यादवों ने चालुक्य वास्तुकला शैली का अनुसरण किया, जिसमें मूर्तिकला और जटिल नक्काशी का प्रमुख स्थान था।"
    },
    {
        question: "अलाउद्दीन खिलजी के आक्रमण के बाद रामचंद्र को कौन-सी उपाधि मिली थी?",
        answers: shuffle([
            { text: "राय-रायन", correct: true },
            { text: "राय-ए-सुल्तान", correct: false },
            { text: "राजाधिराज", correct: false },
            { text: "महाराजा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अलाउद्दीन खिलजी ने रामचंद्र की अधीनता स्वीकार करने के बाद उसे 'राय-रायन' की उपाधि दी और उसे अपनी जागीर का शासक बनाए रखा।"
    },
    {
        question: "यादव वंश के किस शासक ने देवगिरि में एक भव्य किले का निर्माण करवाया था?",
        answers: shuffle([
            { text: "भिल्लम पंचम", correct: false },
            { text: "सिंघण द्वितीय", correct: true },
            { text: "रामचंद्र", correct: false },
            { text: "हरपालदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंघण द्वितीय ने देवगिरि में एक मजबूत किले का निर्माण करवाया, जो बाद में तुगलकों द्वारा दौलताबाद के रूप में विकसित किया गया।"
    },
    {
        question: "यादवों के शासनकाल में प्रसिद्ध संत ज्ञानेश्वर किस भाषा के महान कवि थे?",
        answers: shuffle([
            { text: "संस्कृत", correct: false },
            { text: "कन्नड़", correct: false },
            { text: "मराठी", correct: true },
            { text: "तेलुगु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संत ज्ञानेश्वर, जिन्होंने 'ज्ञानेश्वरी' की रचना की, मराठी भाषा के एक महान कवि और दार्शनिक थे, जो यादव काल में ही हुए थे।"
    },
    {
        question: "किस यादव शासक के शासनकाल में अंतिम रूप से गुजरात पर विजय प्राप्त की गई थी?",
        answers: shuffle([
            { text: "भिल्लम पंचम", correct: false },
            { text: "सिंघण द्वितीय", correct: false },
            { text: "रामचंद्र", correct: true },
            { text: "हरपालदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजा रामचंद्र के शासनकाल में यादवों ने गुजरात के वाघेला शासकों को पराजित कर उस पर अंतिम रूप से विजय प्राप्त की थी।"
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