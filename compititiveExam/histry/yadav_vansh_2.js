const questions = [
    {
        topHeading: "यादव वंश पर आधारित बहुविकल्पी प्रश्न part 2 (quiz_no.102)"
    },
    {
        question: "यादवों का राज्य किस नदी के तट पर स्थित था?",
        answers: shuffle([
            { text: "कृष्णा", correct: false },
            { text: "तुंगभद्रा", correct: false },
            { text: "गोदावरी", correct: true },
            { text: "भीमा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यादव साम्राज्य का केंद्र मुख्य रूप से गोदावरी नदी की ऊपरी घाटी में था, और उनकी राजधानी देवगिरि इसी क्षेत्र में स्थित थी।"
    },
    {
        question: "किस यादव शासक के शासनकाल को 'यादवों का स्वर्ण युग' कहा जाता है?",
        answers: shuffle([
            { text: "भिल्लम पंचम", correct: false },
            { text: "सिंघण द्वितीय", correct: true },
            { text: "महादेव", correct: false },
            { text: "रामचंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंघण द्वितीय का 47 वर्ष का लंबा शासनकाल (1200-1247 ईस्वी) राजनीतिक स्थिरता, सैन्य विजय और सांस्कृतिक विकास के कारण यादवों के इतिहास का स्वर्ण युग माना जाता है।"
    },
    {
        question: "अलाउद्दीन खिलजी ने देवगिरि पर विजय प्राप्त करने के बाद, वहाँ के शासक रामचंद्र को कौनसी उपाधि दी?",
        answers: shuffle([
            { text: "राय-रायन", correct: true },
            { text: "राय-ए-हिंद", correct: false },
            { text: "चक्रवर्ती", correct: false },
            { text: "राजाधिराज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रामचंद्र ने अलाउद्दीन खिलजी की अधीनता स्वीकार कर ली थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके बदले में अलाउद्दीन ने उसे 'राय-रायन' की उपाधि दी और उसे अपने राज्य का शासक बनाए रखा।"
    },
    {
        question: "यादवों के किस शासक ने 'उदयसागर' नामक एक बड़े तालाब का निर्माण करवाया था?",
        answers: shuffle([
            { text: "सिंघण द्वितीय", correct: false },
            { text: "कृष्ण", correct: false },
            { text: "महादेव", correct: true },
            { text: "रामचंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महादेव (1261-1271 ईस्वी) ने कई सार्वजनिक कार्यों को प्रोत्साहित किया, जिनमें 'उदयसागर' नामक तालाब का निर्माण भी शामिल था।"
    },
    {
        question: "यादवों के पतन का अंतिम कारण क्या था?",
        answers: shuffle([
            { text: "आंतरिक विद्रोह", correct: false },
            { text: "मुस्लिम आक्रमण", correct: true },
            { text: "होयसलों से संघर्ष", correct: false },
            { text: "अकाल और महामारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अलाउद्दीन खिलजी और बाद में मलिक काफूर के लगातार आक्रमणों ने यादव साम्राज्य को कमजोर कर दिया और 1318 ईस्वी में कुतुबुद्दीन मुबारकशाह खिलजी ने इसे पूरी तरह से समाप्त कर दिया।"
    },
    {
        question: "हेमाद्रि द्वारा लिखित 'चतुर्वर्ग चिंतामणि' किस विषय पर आधारित है?",
        answers: shuffle([
            { text: "राजनीति", correct: false },
            { text: "धर्म और कर्मकांड", correct: true },
            { text: "युद्ध", correct: false },
            { text: "खगोल विज्ञान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह ग्रंथ हिंदू धर्म के चार पुरुषार्थों (धर्म, अर्थ, काम, मोक्ष) में से एक 'धर्म' पर केंद्रित है, जिसमें विभिन्न धार्मिक अनुष्ठानों और व्रतों का वर्णन है।"
    },
    {
        question: "यादवों की वास्तुकला में किस शैली का प्रभाव था?",
        answers: shuffle([
            { text: "नागर", correct: false },
            { text: "वेसर", correct: false },
            { text: "द्रविड़", correct: false },
            { text: "चालुक्य", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यादवों ने अपनी वास्तुकला में पश्चिमी चालुक्यों की शैली का अनुसरण किया।<br><br><i class='fa-solid fa-angles-right icon'></i> उनकी मूर्तियों और मंदिरों में चालुक्य कला की झलक दिखाई देती है।"
    },
    {
        question: "यादव शासकों के सिक्के मुख्य रूप से किस धातु के होते थे?",
        answers: shuffle([
            { text: "सोना", correct: true },
            { text: "चांदी", correct: false },
            { text: "तांबा", correct: false },
            { text: "मिश्र धातु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यादवों ने मुख्य रूप से सोने के सिक्के जारी किए, जिन्हें 'गद्याण' या 'पैसा' कहा जाता था।"
    },
    {
        question: "किस यादव शासक के शासनकाल में प्रसिद्ध कवि मराठी संत ज्ञानेश्वर ने 'ज्ञानेश्वरी' की रचना की?",
        answers: shuffle([
            { text: "भिल्लम पंचम", correct: false },
            { text: "कृष्ण", correct: false },
            { text: "महादेव", correct: false },
            { text: "रामचंद्र", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संत ज्ञानेश्वर ने राजा रामचंद्र के शासनकाल के दौरान भगवद गीता पर अपनी प्रसिद्ध मराठी टीका 'ज्ञानेश्वरी' लिखी, जिससे मराठी साहित्य को बहुत बढ़ावा मिला।"
    },
    {
        question: "यादव साम्राज्य के अंत के बाद देवगिरि को दिल्ली सल्तनत का एक प्रांत किसने बनाया?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मलिक काफूर", correct: false },
            { text: "कुतुबुद्दीन मुबारकशाह खिलजी", correct: true },
            { text: "मुहम्मद बिन तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1318 ईस्वी में हरपालदेव को मारने के बाद, कुतुबुद्दीन मुबारकशाह खिलजी ने देवगिरि को सीधे दिल्ली सल्तनत के नियंत्रण में ले लिया।"
    },
    {
        question: "यादवों के शासनकाल में 'पंचप्रधान' का क्या अर्थ था?",
        answers: shuffle([
            { text: "पाँच गाँवों का समूह", correct: false },
            { text: "पाँच प्रमुख अधिकारी", correct: true },
            { text: "पाँच प्रकार के कर", correct: false },
            { text: "पाँच सैन्य टुकड़ियाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पंचप्रधान' यादव प्रशासन में पाँच प्रमुख मंत्रियों या अधिकारियों के समूह को संदर्भित करता था।"
    },
    {
        question: "यादवों के किस शासक ने गोदावरी नदी पर एक पुल का निर्माण करवाया था?",
        answers: shuffle([
            { text: "भिल्लम पंचम", correct: false },
            { text: "कृष्ण", correct: false },
            { text: "महादेव", correct: false },
            { text: "रामचंद्र", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजा रामचंद्र ने अपने शासनकाल के दौरान लोगों की सुविधा के लिए गोदावरी नदी पर पुलों और घाटों का निर्माण करवाया था।"
    },
    {
        question: "यादवों के शासनकाल में 'ग्राम प्रमुख' को क्या कहा जाता था?",
        answers: shuffle([
            { text: "पटेल", correct: true },
            { text: "महाबलाधिकृत", correct: false },
            { text: "नाडगौड़ा", correct: false },
            { text: "अमात्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पटेल' यादव प्रशासन में गाँव के प्रमुख को कहा जाता था, जो स्थानीय प्रशासन और राजस्व संग्रह का काम करता था।"
    },
    {
        question: "यादवों के किस शासक ने अपने पिता के नाम पर 'सिंघणेश्वर' नामक एक मंदिर का निर्माण करवाया था?",
        answers: shuffle([
            { text: "भिल्लम पंचम", correct: false },
            { text: "कृष्ण", correct: true },
            { text: "महादेव", correct: false },
            { text: "रामचंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजा कृष्ण (1247-1260 ईस्वी) ने अपने पिता सिंघण द्वितीय की स्मृति में 'सिंघणेश्वर' नामक एक मंदिर का निर्माण करवाया था।"
    },
    {
        question: "देवगिरि के किस शासक ने तुंगभद्रा नदी के तट पर एक युद्ध में होयसलों को निर्णायक रूप से हराया था?",
        answers: shuffle([
            { text: "भिल्लम पंचम", correct: false },
            { text: "सिंघण द्वितीय", correct: true },
            { text: "महादेव", correct: false },
            { text: "रामचंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंघण द्वितीय ने होयसलों के खिलाफ कई सफल अभियान चलाए और उन्हें तुंगभद्रा नदी के पास निर्णायक रूप से हराया, जिससे साम्राज्य की दक्षिणी सीमा सुरक्षित हो गई।"
    },
    {
        question: "यादवों के शासनकाल में किस धर्म को राजकीय संरक्षण प्राप्त था?",
        answers: shuffle([
            { text: "वैष्णव", correct: false },
            { text: "शैव", correct: true },
            { text: "जैन", correct: false },
            { text: "बौद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यादव शासक मुख्य रूप से शैव धर्म के अनुयायी थे और उन्होंने शिव मंदिरों का निर्माण करवाया और उन्हें संरक्षण दिया।"
    },
    {
        question: "किस यादव शासक के शासनकाल में 'विवेकसिंधु' नामक ग्रंथ लिखा गया?",
        answers: shuffle([
            { text: "भिल्लम पंचम", correct: false },
            { text: "महादेव", correct: false },
            { text: "कृष्ण", correct: false },
            { text: "रामचंद्र", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विवेकसिंधु' नामक ग्रंथ मुकुंदराज द्वारा लिखा गया था, जो यादव शासक रामचंद्र के समकालीन थे।"
    },
    {
        question: "यादवों ने किस क्षेत्र में अपने सिक्के जारी किए थे?",
        answers: shuffle([
            { text: "कोंकण", correct: false },
            { text: "विदर्भ", correct: false },
            { text: "मराठवाड़ा", correct: false },
            { text: "उपर्युक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यादवों के सिक्के उनके पूरे साम्राज्य में पाए गए हैं, जिनमें कोंकण, विदर्भ और मराठवाड़ा जैसे क्षेत्र शामिल थे।"
    },
    {
        question: "अलाउद्दीन खिलजी के बाद मलिक काफूर ने देवगिरि पर कितने आक्रमण किए थे?",
        answers: shuffle([
            { text: "एक बार", correct: false },
            { text: "दो बार", correct: false },
            { text: "तीन बार", correct: true },
            { text: "चार बार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मलिक काफूर ने 1307, 1310 और 1313 ईस्वी में देवगिरि पर आक्रमण किए, जो रामचंद्र और उसके बाद के शासकों के शासनकाल में हुए थे।"
    },
    {
        question: "यादवों के किस शासक ने अहिलवाड़ा (गुजरात) के वाघेला शासकों को पराजित किया था?",
        answers: shuffle([
            { text: "भिल्लम पंचम", correct: false },
            { text: "सिंघण द्वितीय", correct: false },
            { text: "कृष्ण", correct: false },
            { text: "महादेव", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महादेव ने अपने सैन्य अभियानों के दौरान गुजरात के वाघेला शासकों को पराजित किया और उनके राज्य पर कब्जा कर लिया था।"
    },
    {
        question: "यादवों के अंतिम शासक हरपालदेव का वध किसने करवाया था?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मलिक काफूर", correct: false },
            { text: "कुतुबुद्दीन मुबारकशाह खिलजी", correct: true },
            { text: "मुहम्मद बिन तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1318 ईस्वी में हरपालदेव ने विद्रोह किया था, जिसके बाद कुतुबुद्दीन मुबारकशाह खिलजी ने उसे मारकर यादव साम्राज्य का अंत कर दिया।"
    },
    {
        question: "यादवों के शासनकाल में 'अष्टभुजी' कौन होता था?",
        answers: shuffle([
            { text: "न्यायाधीश", correct: true },
            { text: "राजस्व अधिकारी", correct: false },
            { text: "एक प्रकार का कर", correct: false },
            { text: "ग्राम सभा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अष्टभुजी' यादव प्रशासन में एक न्यायाधीश के लिए प्रयुक्त शब्द था।"
    },
    {
        question: "यादवों के किस शासक ने कर्नाटक के क्षेत्रों पर विजय प्राप्त की थी?",
        answers: shuffle([
            { text: "भिल्लम पंचम", correct: false },
            { text: "सिंघण द्वितीय", correct: true },
            { text: "कृष्ण", correct: false },
            { text: "रामचंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंघण द्वितीय ने दक्षिणी अभियानों के माध्यम से उत्तरी कर्नाटक के बड़े हिस्से पर विजय प्राप्त की और होयसलों को हराया।"
    },
    {
        question: "यादवों के शासनकाल में 'महामंडलेश्वर' कौन होता था?",
        answers: shuffle([
            { text: "सर्वोच्च सेनापति", correct: false },
            { text: "प्रांतीय गवर्नर", correct: true },
            { text: "राजस्व अधिकारी", correct: false },
            { text: "मुख्य न्यायाधीश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महामंडलेश्वर' एक प्रांतीय गवर्नर होता था, जिसे यादव राजा द्वारा प्रांतों का प्रशासन चलाने के लिए नियुक्त किया जाता था।"
    },
    {
        question: "देवगिरि के यादवों ने किस नदी को अपनी सीमा बनाया था?",
        answers: shuffle([
            { text: "कृष्णा", correct: false },
            { text: "तुंगभद्रा", correct: true },
            { text: "गोदावरी", correct: false },
            { text: "भीमा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यादवों ने तुंगभद्रा नदी को अपनी दक्षिणी सीमा के रूप में स्थापित किया था, जिसके दक्षिण में होयसलों का राज्य था।"
    },
    {
        question: "यादवों के शासनकाल में 'चतुर्वर्ग चिंतामणि' नामक ग्रंथ की रचना किसने की थी?",
        answers: shuffle([
            { text: "भास्कराचार्य", correct: false },
            { text: "संत ज्ञानेश्वर", correct: false },
            { text: "हेमाद्रि", correct: true },
            { text: "मुकुंदराज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चतुर्वर्ग चिंतामणि' यादव शासक महादेव और रामचंद्र के मंत्री हेमाद्रि द्वारा रचित एक प्रसिद्ध ग्रंथ है, जो धार्मिक अनुष्ठानों पर आधारित है।"
    },
    {
        question: "यादवों के किस शासक ने देवगिरि में एक भव्य किले का निर्माण करवाया, जिसे बाद में दौलताबाद के रूप में जाना गया?",
        answers: shuffle([
            { text: "भिल्लम पंचम", correct: false },
            { text: "सिंघण द्वितीय", correct: true },
            { text: "रामचंद्र", correct: false },
            { text: "हरपालदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंघण द्वितीय ने देवगिरि में एक मजबूत किले का निर्माण करवाया, जो यादवों की राजधानी की रक्षा के लिए महत्वपूर्ण था।"
    },
    {
        question: "यादवों के शासनकाल में 'महाबलाधिकृत' का क्या अर्थ था?",
        answers: shuffle([
            { text: "राजस्व अधिकारी", correct: false },
            { text: "सैन्य प्रमुख", correct: true },
            { text: "न्यायाधीश", correct: false },
            { text: "प्रांतीय गवर्नर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महाबलाधिकृत' यादव प्रशासन में सेना के प्रमुख कमांडर के लिए प्रयुक्त एक पद था।"
    },
    {
        question: "यादवों के किस शासक ने विदर्भ के क्षेत्रों पर विजय प्राप्त की थी?",
        answers: shuffle([
            { text: "भिल्लम पंचम", correct: false },
            { text: "सिंघण द्वितीय", correct: false },
            { text: "कृष्ण", correct: false },
            { text: "महादेव", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महादेव ने अपने शासनकाल में पूर्वी महाराष्ट्र (विदर्भ) के बड़े हिस्से पर विजय प्राप्त कर साम्राज्य का विस्तार किया था।"
    },
    {
        question: "किस यादव शासक के शासनकाल में दिल्ली सल्तनत से अंतिम रूप से संघर्ष हुआ, जिससे यादव वंश का अंत हो गया?",
        answers: shuffle([
            { text: "रामचंद्र", correct: false },
            { text: "महादेव", correct: false },
            { text: "शंकरदेव", correct: false },
            { text: "हरपालदेव", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हरपालदेव ने 1318 ईस्वी में कुतुबुद्दीन मुबारक शाह खिलजी के खिलाफ विद्रोह किया, जिसमें वह मारा गया और यादव वंश का अंत हो गया।"
    },
    {
        question: "यादवों के शासनकाल में प्रचलित सोने के सिक्के को क्या कहा जाता था?",
        answers: shuffle([
            { text: "पैसा", correct: false },
            { text: "गद्याण", correct: true },
            { text: "कासु", correct: false },
            { text: "कलंजु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यादवों ने मुख्य रूप से सोने के सिक्के जारी किए, जिन्हें 'गद्याण' कहा जाता था।"
    },
    {
        question: "यादवों के प्रशासन में 'अमात्य' का क्या पद था?",
        answers: shuffle([
            { text: "मंत्री", correct: true },
            { text: "सेनापति", correct: false },
            { text: "न्यायाधीश", correct: false },
            { text: "राजस्व अधिकारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अमात्य' यादव प्रशासन में एक मंत्री के लिए प्रयुक्त शब्द था।"
    },
    {
        question: "किस यादव शासक ने होयसलों को पराजित कर अपनी दक्षिणी सीमा को तुंगभद्रा नदी तक बढ़ाया था?",
        answers: shuffle([
            { text: "भिल्लम पंचम", correct: false },
            { text: "सिंघण द्वितीय", correct: true },
            { text: "कृष्ण", correct: false },
            { text: "महादेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंघण द्वितीय ने कई अभियानों के माध्यम से होयसलों को हराकर तुंगभद्रा नदी को यादव साम्राज्य की दक्षिणी सीमा बनाया।"
    },
    {
        question: "यादवों के शासनकाल में महानुभाव संप्रदाय का उदय कहाँ हुआ था?",
        answers: shuffle([
            { text: "कर्नाटक", correct: false },
            { text: "गुजरात", correct: false },
            { text: "महाराष्ट्र", correct: true },
            { text: "आंध्र प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महानुभाव संप्रदाय तेरहवीं शताब्दी में महाराष्ट्र में उभरा, जो यादव शासकों के संरक्षण में फला-फूला।"
    },
    {
        question: "किस यादव शासक ने मलिक काफूर को एक बड़ी राशि देकर शांति की संधि की थी?",
        answers: shuffle([
            { text: "महादेव", correct: false },
            { text: "कृष्ण", correct: false },
            { text: "रामचंद्र", correct: true },
            { text: "भिल्लम पंचम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1307 ईस्वी के आक्रमण के बाद रामचंद्र ने मलिक काफूर को अधीनता स्वीकार कर शांति की संधि की थी।"
    },
    {
        question: "यादवों की प्रारंभिक राजधानी सेउणादेश किस नदी के पास स्थित थी?",
        answers: shuffle([
            { text: "गोदावरी", correct: true },
            { text: "भीमा", correct: false },
            { text: "नर्मदा", correct: false },
            { text: "कृष्णा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यादवों की प्रारंभिक राजधानी सेउणादेश (आधुनिक नासिक के पास) गोदावरी नदी के पास स्थित थी।"
    },
    {
        question: "यादवों के शासनकाल में 'पटेल' कौन होता था?",
        answers: shuffle([
            { text: "राजस्व अधिकारी", correct: false },
            { text: "ग्राम प्रमुख", correct: true },
            { text: "सैनिक", correct: false },
            { text: "न्यायाधीश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पटेल' यादव प्रशासन में गाँव के प्रमुख को कहा जाता था।"
    },
    {
        question: "यादव शासक रामचंद्र का उत्तराधिकारी कौन था?",
        answers: shuffle([
            { text: "हरपालदेव", correct: false },
            { text: "कृष्ण", correct: false },
            { text: "शंकरदेव", correct: true },
            { text: "महादेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रामचंद्र की मृत्यु के बाद उसका पुत्र शंकरदेव गद्दी पर बैठा, लेकिन वह दिल्ली सल्तनत के खिलाफ असफल विद्रोह के कारण जल्द ही पराजित हो गया।"
    },
    {
        question: "यादवों के शासनकाल में 'चक्रपाणि' शब्द का क्या अर्थ था?",
        answers: shuffle([
            { text: "एक प्रकार का कर", correct: false },
            { text: "एक सैन्य पद", correct: true },
            { text: "एक धार्मिक उपाधि", correct: false },
            { text: "एक प्रशासनिक इकाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चक्रपाणि' यादव प्रशासन में एक सैन्य अधिकारी के लिए प्रयुक्त पद था।"
    },
    {
        question: "किस यादव शासक ने देवगिरि में एक तालाब का निर्माण करवाया था?",
        answers: shuffle([
            { text: "भिल्लम पंचम", correct: false },
            { text: "सिंघण द्वितीय", correct: false },
            { text: "महादेव", correct: false },
            { text: "रामचंद्र", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजा रामचंद्र ने अपने शासनकाल में सिंचाई और जल प्रबंधन के लिए कई तालाबों और घाटों का निर्माण करवाया था।"
    },
    {
        question: "यादवों के किस शासक ने कल्चुरी शासकों को पराजित कर अपने साम्राज्य का विस्तार किया था?",
        answers: shuffle([
            { text: "भिल्लम पंचम", correct: false },
            { text: "सिंघण द्वितीय", correct: false },
            { text: "कृष्ण", correct: false },
            { text: "महादेव", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महादेव ने कल्चुरी शासकों को हराकर यादव साम्राज्य की पूर्वी सीमाओं का विस्तार किया था।"
    },
    {
        question: "यादवों के किस शासक ने होयसल शासक नरसिंह द्वितीय को पराजित किया था?",
        answers: shuffle([
            { text: "भिल्लम पंचम", correct: false },
            { text: "सिंघण द्वितीय", correct: true },
            { text: "कृष्ण", correct: false },
            { text: "महादेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंघण द्वितीय ने नरसिंह द्वितीय को हराया और तुंगभद्रा नदी के उत्तरी भाग पर अपना अधिकार जमा लिया।"
    },
    {
        question: "यादवों के शासनकाल में 'अष्टभुजी' कौन होता था?",
        answers: shuffle([
            { text: "न्यायाधीश", correct: true },
            { text: "सैन्य प्रमुख", correct: false },
            { text: "मंत्री", correct: false },
            { text: "राजस्व अधिकारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अष्टभुजी' यादव प्रशासन में एक न्यायाधीश के लिए प्रयुक्त शब्द था।"
    },
    {
        question: "यादवों के शासनकाल में 'सभा' का क्या अर्थ था?",
        answers: shuffle([
            { text: "गाँव की सभा", correct: true },
            { text: "राजा की मंत्रिपरिषद", correct: false },
            { text: "व्यापारिक संघ", correct: false },
            { text: "न्यायपालिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सभा' यादव प्रशासन में स्थानीय स्वशासन की एक संस्था थी, जो गाँवों के प्रशासन का काम करती थी।"
    },
    {
        question: "किस यादव शासक के शासनकाल में यादव साम्राज्य अपने चरम पर था?",
        answers: shuffle([
            { text: "भिल्लम पंचम", correct: false },
            { text: "सिंघण द्वितीय", correct: true },
            { text: "रामचंद्र", correct: false },
            { text: "हरपालदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंघण द्वितीय के शासनकाल (1200-1247 ईस्वी) में यादव साम्राज्य अपने राजनीतिक और सांस्कृतिक चरम पर पहुँच गया था।"
    },
    {
        question: "यादवों के किस शासक ने मल्लिकार्जुन मंदिर का निर्माण करवाया था?",
        answers: shuffle([
            { text: "सिंघण द्वितीय", correct: true },
            { text: "कृष्ण", correct: false },
            { text: "महादेव", correct: false },
            { text: "रामचंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंघण द्वितीय ने कई मंदिरों का निर्माण करवाया, जिनमें मल्लिकार्जुन मंदिर प्रमुख था।"
    },
    {
        question: "यादवों के किस शासक ने 'सुल्तान' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "सिंघण द्वितीय", correct: false },
            { text: "कृष्ण", correct: false },
            { text: "महादेव", correct: false },
            { text: "इनमें से कोई नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यादव शासकों ने कभी भी 'सुल्तान' की उपाधि धारण नहीं की थी। यह उपाधि दिल्ली सल्तनत के शासकों की थी।"
    },
    {
        question: "यादवों के शासनकाल में महानुभाव संप्रदाय के संस्थापक कौन थे?",
        answers: shuffle([
            { text: "संत ज्ञानेश्वर", correct: false },
            { text: "चक्रधर स्वामी", correct: true },
            { text: "मुकुंदराज", correct: false },
            { text: "भास्कराचार्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महानुभाव संप्रदाय की स्थापना चक्रधर स्वामी ने की थी, जो यादव शासक महादेव के समकालीन थे।"
    },
    {
        question: "किस यादव शासक ने 'चक्रपाणि' नामक एक सैन्य अधिकारी को नियुक्त किया था?",
        answers: shuffle([
            { text: "भिल्लम पंचम", correct: false },
            { text: "सिंघण द्वितीय", correct: true },
            { text: "कृष्ण", correct: false },
            { text: "रामचंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंघण द्वितीय ने अपनी विशाल सेना को संगठित करने के लिए विभिन्न सैन्य अधिकारियों को नियुक्त किया था, जिनमें 'चक्रपाणि' भी शामिल थे।"
    },
    {
        question: "यादवों के पतन के बाद देवगिरि को दिल्ली सल्तनत की एक नई राजधानी किसने बनाया?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: true },
            { text: "फिरोज शाह तुगलक", correct: false },
            { text: "कुतुबुद्दीन मुबारक शाह खिलजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुहम्मद बिन तुगलक ने 1327 ईस्वी में देवगिरि का नाम बदलकर दौलताबाद रखा और उसे अपनी दूसरी राजधानी बनाया।"
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