const questions = [
    {
        topHeading: "शक साम्राज्य पर आधारित बहुविकल्पी प्रश्न part 1 (quiz_no.77)"
    },
    {
        question: "भारत में शक शासकों की कितनी शाखाएं थीं, और वे कहाँ-कहाँ केंद्रित थीं?",
        answers: shuffle([
            { text: "तीन, पूर्वी, पश्चिमी और उत्तरी भारत", correct: false },
            { text: "चार, उत्तरी, पश्चिमी, पूर्वी और दक्षिणी भारत", correct: false },
            { text: "पाँच, अफगानिस्तान, पंजाब, मथुरा, उज्जैन और पश्चिमी भारत", correct: true },
            { text: "दो, उत्तरी और पश्चिमी भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शकों की पाँच शाखाएँ थीं, जिनमें से पहली अफगानिस्तान में, दूसरी पंजाब (तक्षशिला) में, तीसरी मथुरा में, चौथी पश्चिमी भारत में और पाँचवीं उज्जैन में स्थापित हुई।"
    },
    {
        question: "शक साम्राज्य का सबसे प्रतापी शासक कौन था, जिसने 'महाक्षत्रप' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "मोगा (माउस)", correct: false },
            { text: "एजिस", correct: false },
            { text: "रुद्रदामन I", correct: true },
            { text: "नहपान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रुद्रदामन I (130-150 ईस्वी) शक शासकों में सबसे प्रसिद्ध था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने 'महाक्षत्रप' की उपाधि धारण की और उसने जूनागढ़ अभिलेख जारी किया।"
    },
    {
        question: "किस शासक ने 58 ईसा पूर्व में शकों को हराकर 'विक्रमादित्य' की उपाधि धारण की और एक नए संवत की शुरुआत की?",
        answers: shuffle([
            { text: "गौतमीपुत्र सातकर्णी", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "उज्जैन का एक स्थानीय राजा", correct: true },
            { text: "कनिष्क", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 58 ईसा पूर्व में उज्जैन के एक स्थानीय राजा ने शकों को पराजित करके स्वयं को 'विक्रमादित्य' की उपाधि दी और इसी उपलक्ष्य में विक्रम संवत की शुरुआत की।"
    },
    {
        question: "शक किस देश के मूल निवासी थे?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "ईरान", correct: false },
            { text: "मध्य एशिया", correct: true },
            { text: "यूनान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक मूल रूप से मध्य एशिया के खानाबदोश चरवाहे थे, जो यूनानियों के बाद भारत आए थे।"
    },
    {
        question: "शक शासकों को किस भारतीय शासक ने पूर्णतः समाप्त किया था?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: true },
            { text: "स्कंदगुप्त", correct: false },
            { text: "हर्षवर्धन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त द्वितीय ने शकों को पूरी तरह से पराजित कर पश्चिमी भारत से उनके शासन का अंत किया।"
    },
    {
        question: "जूनागढ़ अभिलेख (गिरनार अभिलेख) का संबंध किस शक शासक से है?",
        answers: shuffle([
            { text: "मोगा (माउस)", correct: false },
            { text: "नहपान", correct: false },
            { text: "रुद्रदामन I", correct: true },
            { text: "एजिस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जूनागढ़ अभिलेख रुद्रदामन I द्वारा जारी किया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह संस्कृत का पहला लंबा अभिलेख माना जाता है।"
    },
    {
        question: "किस शक शासक ने सुदर्शन झील का जीर्णोद्धार करवाया था, जिसका निर्माण मौर्य काल में हुआ था?",
        answers: shuffle([
            { text: "नहपान", correct: false },
            { text: "रुद्रदामन I", correct: true },
            { text: "एजिस", correct: false },
            { text: "मोगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जूनागढ़ अभिलेख के अनुसार, रुद्रदामन I ने सुदर्शन झील का जीर्णोद्धार करवाया था।"
    },
    {
        question: "'क्षत्रप' (Kshatrap) शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "राजा", correct: false },
            { text: "प्रांत का शासक या गवर्नर", correct: true },
            { text: "सेनापति", correct: false },
            { text: "मंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक साम्राज्य प्रशासनिक इकाइयों में विभाजित था, और प्रत्येक प्रांत पर शासन करने वाले शासक को 'क्षत्रप' कहा जाता था।"
    },
    {
        question: "भारत में पहला शक राजा कौन था?",
        answers: shuffle([
            { text: "रुद्रदामन I", correct: false },
            { text: "मोगा (माउस)", correct: true },
            { text: "एजिस", correct: false },
            { text: "नहपान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोगा को भारत में पहला शक राजा माना जाता है, जिसने गांधार और पंजाब में शासन स्थापित किया।"
    },
    {
        question: "किस शक शासक को सातवाहन राजा गौतमीपुत्र सातकर्णी ने हराया था?",
        answers: shuffle([
            { text: "मोगा", correct: false },
            { text: "रुद्रदामन I", correct: false },
            { text: "एजिस", correct: false },
            { text: "नहपान", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नासिक अभिलेखों के अनुसार, सातवाहन शासक गौतमीपुत्र सातकर्णी ने पश्चिमी क्षत्रप शासक नहपान को पराजित किया था।"
    },
    {
        question: "भारत में शक आक्रमण के बाद कौन से शासक आए?",
        answers: shuffle([
            { text: "हिंद-यवन", correct: false },
            { text: "पहलव", correct: false },
            { text: "कुषाण", correct: true },
            { text: "गुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में विदेशी आक्रमणकारियों का सही क्रम हिंद-यवन → शक → पहलव → कुषाण है।"
    },
    {
        question: "किस शासक के सिक्कों पर पहली बार संस्कृत भाषा का प्रयोग मिलता है?",
        answers: shuffle([
            { text: "कनिष्क", correct: false },
            { text: "रुद्रदामन I", correct: true },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "समुद्रगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रुद्रदामन I के जूनागढ़ अभिलेख में सबसे पहले विशुद्ध संस्कृत भाषा और ब्राह्मी लिपि का प्रयोग हुआ था।"
    },
    {
        question: "शकों ने भारत में कहाँ से प्रवेश किया था?",
        answers: shuffle([
            { text: "खेबर दर्रा", correct: true },
            { text: "बोलन दर्रा", correct: false },
            { text: "गोमल दर्रा", correct: false },
            { text: "उपरोक्त में से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक आक्रमणकारी खेबर दर्रे के रास्ते भारत में आए और पश्चिमोत्तर भारत में बस गए।"
    },
    {
        question: "किस शक शासक ने भारत-पार्थियन साम्राज्य के शासक गोन्दोफर्नीस को हराया था?",
        answers: shuffle([
            { text: "मोगा", correct: false },
            { text: "रुद्रदामन I", correct: true },
            { text: "एजिस", correct: false },
            { text: "नहपान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रुद्रदामन I ने पहलव शासकों को पराजित करके अपने साम्राज्य का विस्तार किया था।"
    },
    {
        question: "विक्रम संवत की शुरुआत किस उपलक्ष्य में हुई थी?",
        answers: shuffle([
            { text: "शकों की जीत", correct: false },
            { text: "हिंद-यवनों की हार", correct: false },
            { text: "शकों पर विजय", correct: true },
            { text: "चंद्रगुप्त द्वितीय की जीत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 58 ईसा पूर्व में शकों को पराजित करने के बाद उज्जैन के राजा ने विक्रम संवत की शुरुआत की।"
    },
    {
        question: "शक शासक किस धर्म को संरक्षण देते थे?",
        answers: shuffle([
            { text: "केवल बौद्ध धर्म", correct: false },
            { text: "केवल हिंदू धर्म", correct: false },
            { text: "बौद्ध और हिंदू दोनों धर्म", correct: true },
            { text: "जैन धर्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक शासकों ने धार्मिक सहिष्णुता की नीति अपनाई।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने बौद्ध और हिंदू दोनों धर्मों को संरक्षण दिया।"
    },
    {
        question: "'आर्सेनी' (Arsenei) शब्द का प्रयोग किस शासक के सिक्कों के लिए किया जाता था?",
        answers: shuffle([
            { text: "हिंद-यवन शासक", correct: false },
            { text: "शक शासक", correct: true },
            { text: "पहलव शासक", correct: false },
            { text: "कुषाण शासक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आर्सेनी' शब्द शक शासकों द्वारा जारी किए गए सिक्कों के लिए उपयोग किया जाता था।"
    },
    {
        question: "शक किस देश के मूल निवासी थे?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "ईरान", correct: false },
            { text: "मध्य एशिया", correct: true },
            { text: "यूनान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक मूल रूप से मध्य एशिया के खानाबदोश चरवाहे थे, जो यूनानियों के बाद भारत आए थे।"
    },
    {
        question: "शक शासक अपने सिक्कों पर किस लिपि का प्रयोग करते थे?",
        answers: shuffle([
            { text: "केवल ब्राह्मी", correct: false },
            { text: "केवल खरोष्ठी", correct: false },
            { text: "ब्राह्मी और खरोष्ठी", correct: true },
            { text: "केवल यूनानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक शासकों ने अपने सिक्कों पर यूनानी और खरोष्ठी लिपि का उपयोग किया, लेकिन बाद में ब्राह्मी और खरोष्ठी लिपियों का प्रचलन बढ़ गया।"
    },
    {
        question: "शकों का सबसे प्रसिद्ध बंदरगाह कौन सा था?",
        answers: shuffle([
            { text: "सोपारा", correct: false },
            { text: "भड़ोच (ब्यारीगाजा)", correct: true },
            { text: "ताम्रलिप्ति", correct: false },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शकों के शासन के दौरान, पश्चिमी भारत का बंदरगाह भड़ोच (ब्यारीगाजा) एक महत्वपूर्ण व्यापारिक केंद्र बन गया था।"
    },
    {
        question: "शकों के बाद भारत में कौन से शासक आए?",
        answers: shuffle([
            { text: "हिंद-यवन", correct: false },
            { text: "गुप्त", correct: false },
            { text: "कुषाण", correct: false },
            { text: "पहलव", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत पर आक्रमण करने वाले विदेशी शासकों का सही क्रम हिंद-यवन, शक, पहलव और कुषाण है।"
    },
    {
        question: "किस शक शासक ने खुद को \"महाराजाधिराज\" की उपाधि दी थी?",
        answers: shuffle([
            { text: "नहपान", correct: false },
            { text: "रुद्रदामन I", correct: true },
            { text: "मोगा", correct: false },
            { text: "एजिस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रुद्रदामन I ने 'महाक्षत्रप' के साथ-साथ 'महाराजाधिराज' की उपाधि भी धारण की थी, जो उसकी शक्ति का प्रतीक थी।"
    },
    {
        question: "शकों के आक्रमण के समय भारत में कौनसा वंश शासन कर रहा था?",
        answers: shuffle([
            { text: "मौर्य", correct: false },
            { text: "सातवाहन", correct: false },
            { text: "गुप्त", correct: false },
            { text: "शुंग और कण्व", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक आक्रमण मौर्योत्तर काल में हुए, जब भारत में छोटे-छोटे राज्य थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उस समय शुंग और कण्व जैसे राजवंश सत्ता में थे।"
    },
    {
        question: "मथुरा के शक शासकों को किस संप्रदाय का संरक्षक माना जाता है?",
        answers: shuffle([
            { text: "बौद्ध धर्म", correct: false },
            { text: "जैन धर्म", correct: true },
            { text: "वैष्णव धर्म", correct: false },
            { text: "शैव धर्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मथुरा के शक शासकों ने जैन धर्म को संरक्षण दिया था, जिसका उल्लेख कई अभिलेखों में मिलता है।"
    },
    {
        question: "शकों के बाद कौन से शासक भारत में आए, जिन्होंने गांधार कला को और भी अधिक विकसित किया?",
        answers: shuffle([
            { text: "हिंद-यवन", correct: false },
            { text: "कुषाण", correct: true },
            { text: "गुप्त", correct: false },
            { text: "पहलव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवनों और शकों के बाद आए कुषाण शासकों ने गांधार कला को अपनी चरम सीमा तक पहुँचाया।"
    },
    {
        question: "शकों का सबसे प्रसिद्ध शासक रुद्रदामन किस वंश से संबंधित था?",
        answers: shuffle([
            { text: "पार्थियन", correct: false },
            { text: "कुषाण", correct: false },
            { text: "कार्दमक", correct: true },
            { text: "नहपान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक शासकों की एक शाखा को पश्चिमी क्षत्रप कहा जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> इनमें दो प्रमुख राजवंश थे - क्षहरात और कार्दमक।<br><br><i class='fa-solid fa-angles-right icon'></i> रुद्रदामन कार्दमक वंश से संबंधित था।"
    },
    {
        question: "शक शासक किस भारतीय देवता की पूजा करते थे?",
        answers: shuffle([
            { text: "शिव", correct: true },
            { text: "विष्णु", correct: false },
            { text: "गणेश", correct: false },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक शासक, विशेष रूप से पश्चिमी क्षत्रप, शैव धर्म के अनुयायी थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उनके सिक्कों पर अक्सर शिव और उनके प्रतीकों का चित्रण मिलता है।"
    },
    {
        question: "किस शासक को \"महानक्षत्रप\" (महाक्षत्रप) की उपाधि दी गई थी?",
        answers: shuffle([
            { text: "नहपान", correct: false },
            { text: "मोगा", correct: false },
            { text: "रुद्रदामन I", correct: true },
            { text: "एजिस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महाक्षत्रप' की उपाधि शक शासकों में सबसे शक्तिशाली शासकों को दी जाती थी, और रुद्रदामन I ने यह उपाधि धारण की थी।"
    },
    {
        question: "किस शक शासक ने सुदर्शन झील का जीर्णोद्धार बिना किसी से बेगार (बिना वेतन का श्रम) लिए करवाया था?",
        answers: shuffle([
            { text: "मोगा", correct: false },
            { text: "नहपान", correct: false },
            { text: "रुद्रदामन I", correct: true },
            { text: "एजिस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जूनागढ़ अभिलेख के अनुसार, रुद्रदामन I ने सुदर्शन झील का जीर्णोद्धार अपनी व्यक्तिगत संपत्ति से करवाया था और इस कार्य के लिए किसी से बेगार नहीं ली थी।"
    },
    {
        question: "शकों का शासनकाल भारत में किस कालखंड के अंतर्गत आता है?",
        answers: shuffle([
            { text: "वैदिक काल", correct: false },
            { text: "महाजनपद काल", correct: false },
            { text: "मौर्योत्तर काल", correct: true },
            { text: "गुप्त काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक आक्रमण और शासन मौर्य साम्राज्य के पतन के बाद और गुप्त साम्राज्य के उदय से पहले के काल (लगभग 200 ईसा पूर्व से 300 ईस्वी) में हुआ था, जिसे मौर्योत्तर काल कहा जाता है।"
    },
    {
        question: "किस शक शासक के सिक्कों पर \"त्रतारा\" (Tratara) की उपाधि मिलती है, जिसका अर्थ है 'मुक्तिदाता'?",
        answers: shuffle([
            { text: "एजिस", correct: true },
            { text: "नहपान", correct: false },
            { text: "रुद्रदामन I", correct: false },
            { text: "मोगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एजिस, जो पंजाब के शक शासकों में से एक था, उसके सिक्कों पर 'त्रतारा' की उपाधि मिलती है।"
    },
    {
        question: "शक शासक किस जाति समूह से संबंधित थे?",
        answers: shuffle([
            { text: "आर्य", correct: false },
            { text: "मंगोल", correct: false },
            { text: "सीथियन", correct: true },
            { text: "हूण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक मध्य एशिया की एक खानाबदोश जनजाति थी, जिसे यूनानी और रोमन स्रोतों में 'सीथियन' के नाम से जाना जाता था।"
    },
    {
        question: "किस भारतीय शासक ने 'शक' संवत की शुरुआत की थी?",
        answers: shuffle([
            { text: "अशोक", correct: false },
            { text: "कनिष्क", correct: true },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "समुद्रगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शक' संवत की शुरुआत 78 ईस्वी में कुषाण शासक कनिष्क ने की थी, न कि किसी शक शासक ने।"
    },
    {
        question: "किस शक शासक ने सातवाहन शासक गौतमीपुत्र सातकर्णी की माँ गौतमी बलश्री को पराजित किया था?",
        answers: shuffle([
            { text: "नहपान", correct: false },
            { text: "रुद्रदामन I", correct: true },
            { text: "एजिस", correct: false },
            { text: "मोगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रुद्रदामन I ने गौतमीपुत्र सातकर्णी को दो बार पराजित किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उल्लेख नासिक अभिलेखों में मिलता है।"
    },
    {
        question: "शकों के आक्रमण का मुख्य कारण क्या था?",
        answers: shuffle([
            { text: "व्यापारिक मार्ग पर नियंत्रण", correct: false },
            { text: "मध्य एशिया में आंतरिक संघर्ष", correct: false },
            { text: "भारत की धन-संपत्ति", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शकों का भारत में आक्रमण मध्य एशिया में हूणों और अन्य जनजातियों के दबाव, भारत की धन-संपत्ति और व्यापार मार्गों पर नियंत्रण की इच्छा जैसे कई कारणों से हुआ था।"
    },
    {
        question: "किस शक शासक ने सातवाहन शासकों से वैवाहिक संबंध स्थापित करके अपनी शक्ति को मजबूत किया?",
        answers: shuffle([
            { text: "नहपान", correct: false },
            { text: "रुद्रदामन I", correct: true },
            { text: "एजिस", correct: false },
            { text: "मोगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रुद्रदामन I ने सातवाहन राजा वशिष्ठिपुत्र पुलुमावी को हराकर अपनी पुत्री का विवाह उससे करवाया, जिससे दोनों साम्राज्यों के बीच संबंध सुधरे।"
    },
    {
        question: "शकों के शासन के दौरान किस क्षेत्र में रोमन और यूनानी व्यापारिक संबंध मजबूत हुए?",
        answers: shuffle([
            { text: "उत्तरी भारत", correct: false },
            { text: "पश्चिमी भारत", correct: true },
            { text: "पूर्वी भारत", correct: false },
            { text: "दक्षिणी भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पश्चिमी भारत के शक शासकों के शासनकाल में पश्चिमी बंदरगाहों से रोमन साम्राज्य के साथ व्यापार में महत्वपूर्ण वृद्धि हुई थी।"
    },
    {
        question: "किस शक शासक के सिक्कों पर \"क्षत्रप\" और \"महाक्षत्रप\" दोनों उपाधियाँ अंकित थीं?",
        answers: shuffle([
            { text: "नहपान", correct: false },
            { text: "एजिस", correct: false },
            { text: "रुद्रदामन I", correct: true },
            { text: "मोगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रुद्रदामन I पहले 'क्षत्रप' था और बाद में अपनी शक्ति बढ़ाने के बाद उसने 'महाक्षत्रप' की उपाधि धारण की, जो उसके सिक्कों पर मिलती है।"
    },
    {
        question: "शकों द्वारा भारतीय समाज में क्या नया योगदान दिया गया?",
        answers: shuffle([
            { text: "कृषि तकनीकें", correct: false },
            { text: "ज्योतिष और खगोल विज्ञान", correct: true },
            { text: "सैन्य रणनीति", correct: false },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शकों ने यूनानी और भारतीय ज्योतिष को मिलाकर एक नई ज्योतिषीय परंपरा को बढ़ावा दिया, जिसे भारतीय ज्योतिष में एक महत्वपूर्ण योगदान माना जाता है।"
    },
    {
        question: "शकों का मूल निवास स्थान, मध्य एशिया में किस नदी के किनारे था?",
        answers: shuffle([
            { text: "ऑक्सस (अमु दरिया)", correct: true },
            { text: "यांग्त्सी", correct: false },
            { text: "सिंधु", correct: false },
            { text: "गंगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शकों का मूल निवास स्थान ऑक्सस नदी (अमु दरिया) के आसपास का क्षेत्र माना जाता है, जहाँ से वे आगे की ओर बढ़े।"
    },
    {
        question: "किस अभिलेख में रुद्रदामन को \"सुंदर संस्कृत\" का ज्ञान होने का उल्लेख है?",
        answers: shuffle([
            { text: "हाथीगुम्फा अभिलेख", correct: false },
            { text: "नासिक अभिलेख", correct: false },
            { text: "जूनागढ़ अभिलेख", correct: true },
            { text: "भीतरी अभिलेख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जूनागढ़ अभिलेख में रुद्रदामन की कई उपलब्धियों का उल्लेख है, जिसमें यह भी बताया गया है कि वह विशुद्ध संस्कृत गद्य का विद्वान था।"
    },
    {
        question: "शक शासकों की पश्चिमी शाखा को क्या कहा जाता था?",
        answers: shuffle([
            { text: "क्षहरात", correct: true },
            { text: "कार्दमक", correct: false },
            { text: "पार्थियन", correct: false },
            { text: "कुषाण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पश्चिमी भारत के शक शासकों की दो प्रमुख शाखाएँ थीं - क्षहरात और कार्दमक।<br><br><i class='fa-solid fa-angles-right icon'></i> नहपान क्षहरात वंश का था।"
    },
    {
        question: "शकों के सिक्के मुख्य रूप से किस धातु के बने होते थे?",
        answers: shuffle([
            { text: "सोना", correct: false },
            { text: "चांदी और तांबा", correct: true },
            { text: "शीशा", correct: false },
            { text: "निकेल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक शासकों ने हिंद-यवनों की तरह चांदी और तांबे के सिक्के बड़ी संख्या में जारी किए।"
    },
    {
        question: "किस शासक ने 'शक संवत' की शुरुआत की थी, जिसे भारत सरकार द्वारा अपनाया गया है?",
        answers: shuffle([
            { text: "विक्रम", correct: false },
            { text: "शकों का राजा", correct: false },
            { text: "कनिष्क", correct: true },
            { text: "समुद्रगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 78 ईस्वी में कनिष्क ने 'शक संवत' की शुरुआत की थी, जिसे 1957 में भारत सरकार ने राष्ट्रीय पंचांग के रूप में अपनाया।"
    },
    {
        question: "किस शासक को \"द ग्रेट क्षत्रप\" की उपाधि दी गई थी?",
        answers: shuffle([
            { text: "नहपान", correct: false },
            { text: "एजिस", correct: false },
            { text: "रुद्रदामन I", correct: true },
            { text: "मोगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रुद्रदामन I को \"द ग्रेट क्षत्रप\" (महान क्षत्रप) भी कहा जाता था क्योंकि वह सबसे शक्तिशाली और प्रसिद्ध शक शासक था।"
    },
    {
        question: "शकों का मथुरा में शासन स्थापित करने का श्रेय किस शासक को दिया जाता है?",
        answers: shuffle([
            { text: "एजिस", correct: false },
            { text: "मोगा", correct: false },
            { text: "राजुला", correct: true },
            { text: "नहपान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजुला ने मथुरा में शक शासन की नींव रखी और बाद में उसके उत्तराधिकारियों ने इस क्षेत्र पर शासन किया।"
    },
    {
        question: "किस शासक ने अपनी मुद्रा पर यूनानी देवताओं के चित्र अंकित करवाए?",
        answers: shuffle([
            { text: "रुद्रदामन I", correct: false },
            { text: "नहपान", correct: false },
            { text: "एजिस", correct: false },
            { text: "मोगा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोगा ने अपने सिक्कों पर यूनानी देवताओं, जैसे ज़्यूस और हेराक्लेस, के चित्र अंकित करवाए, जिससे हिंद-यवन शासकों की परंपरा जारी रही।"
    },
    {
        question: "किस ग्रंथ में शकों को \"म्लेच्छ\" कहा गया है?",
        answers: shuffle([
            { text: "रामायण", correct: false },
            { text: "महाभारत", correct: false },
            { text: "पुराण", correct: false },
            { text: "मनुस्मृति", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मनुस्मृति में शकों को 'म्लेच्छ' (विदेशी) कहा गया है, जो इस बात को दर्शाता है कि उन्हें भारतीय समाज के बाहर माना जाता था।"
    },
    {
        question: "पश्चिमी क्षत्रपों का अंतिम शासक कौन था?",
        answers: shuffle([
            { text: "नहपान", correct: false },
            { text: "रुद्रसिंह III", correct: true },
            { text: "रुद्रदामन I", correct: false },
            { text: "एजिस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक शासक रुद्रसिंह III को चंद्रगुप्त द्वितीय ने पराजित करके पश्चिमी भारत से शक शासन का अंत किया।"
    },
    {
        question: "शकों ने किस भारतीय राजवंश से संघर्ष किया?",
        answers: shuffle([
            { text: "मौर्य", correct: false },
            { text: "सातवाहन", correct: true },
            { text: "गुप्त", correct: false },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शकों और सातवाहन शासकों के बीच लगातार संघर्ष चलता रहा, जिसमें कभी शक और कभी सातवाहन विजयी होते थे।"
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