const questions = [
    {
        topHeading: "गुप्त साम्राज्य पर आधारित बहुविकल्पी प्रश्न part 2 (quiz_no.82)"
    },
    {
        question: "गुप्त काल में 'ग्राम' (गाँव) के प्रशासन का प्रमुख कौन होता था?",
        answers: shuffle([
            { text: "उपारिक", correct: false },
            { text: "ग्रामीक", correct: true },
            { text: "महादंडनायक", correct: false },
            { text: "महाबलाधिकृत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त काल में सबसे छोटी प्रशासनिक इकाई गाँव थी, जिसका प्रमुख 'ग्रामीक' कहलाता था।"
    },
    {
        question: "किस गुप्त शासक को उसके सिक्कों पर 'लिच्छवि दौहित्र' (लिच्छवियों की बेटी का पुत्र) कहा गया है?",
        answers: shuffle([
            { text: "चंद्रगुप्त प्रथम", correct: false },
            { text: "समुद्रगुप्त", correct: true },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समुद्रगुप्त की माता कुमारदेवी लिच्छवि राजकुमारी थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी कारण उसे 'लिच्छवि दौहित्र' कहा जाता था, जिसका उल्लेख उसके प्रयाग प्रशस्ति अभिलेख में भी मिलता है।"
    },
    {
        question: "गुप्त काल में 'मंदिरों को दिया जाने वाला भूमि अनुदान' क्या कहलाता था?",
        answers: shuffle([
            { text: "अग्रहार", correct: true },
            { text: "विष्टि", correct: false },
            { text: "भोग", correct: false },
            { text: "हिरण्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त काल में ब्राह्मणों और मंदिरों को कर-मुक्त भूमि अनुदान दिया जाता था, जिसे 'अग्रहार' कहा जाता था।"
    },
    {
        question: "'अमरकोश' नामक शब्दकोश, जो संस्कृत का एक महत्वपूर्ण ग्रंथ है, के लेखक कौन हैं?",
        answers: shuffle([
            { text: "कालिदास", correct: false },
            { text: "शूद्रक", correct: false },
            { text: "अमरसिंह", correct: true },
            { text: "आर्यभट्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमरसिंह, जो चंद्रगुप्त द्वितीय के नवरत्नों में से एक थे, उन्होंने 'अमरकोश' नामक प्रसिद्ध शब्दकोश की रचना की।"
    },
    {
        question: "गुप्त काल में किस प्रकार की वास्तुकला की शुरुआत हुई थी, जिसमें ऊँचे शिखर और गर्भगृह होते थे?",
        answers: shuffle([
            { text: "द्रविड़ शैली", correct: false },
            { text: "नागर शैली", correct: true },
            { text: "वेसर शैली", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त काल में मंदिरों की नागर शैली का विकास हुआ, जिसमें ऊँचे शिखर और गर्भगृह होते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> इस शैली का सबसे अच्छा उदाहरण देवगढ़ का दशावतार मंदिर है।"
    },
    {
        question: "गुप्त काल में 'अष्टछाप' नामक विद्वानों का समूह किसके दरबार में था?",
        answers: shuffle([
            { text: "चंद्रगुप्त प्रथम", correct: false },
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "अष्टछाप गुप्त काल में नहीं था।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अष्टछाप एक कवि समूह था, जिसकी स्थापना वल्लभाचार्य के पुत्र विट्ठलनाथ ने 16वीं शताब्दी में की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका गुप्त काल से कोई संबंध नहीं है।"
    },
    {
        question: "गुप्त साम्राज्य में सबसे अधिक सोने के सिक्के किस शासक ने जारी किए थे?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: true },
            { text: "स्कंदगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुमारगुप्त प्रथम के शासनकाल में सबसे अधिक संख्या में सोने के सिक्के जारी किए गए थे, जिनसे पता चलता है कि यह साम्राज्य आर्थिक रूप से बहुत समृद्ध था।"
    },
    {
        question: "गुप्त काल में 'हिरण्य' का क्या अर्थ था?",
        answers: shuffle([
            { text: "भूमिकर", correct: false },
            { text: "नकद कर", correct: true },
            { text: "जबरन श्रम", correct: false },
            { text: "धार्मिक कर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हिरण्य' गुप्त काल में एक प्रकार का कर था, जो नकद रूप में लिया जाता था, जबकि 'भोग' कर उपज के हिस्से के रूप में लिया जाता था।"
    },
    {
        question: "किस गुप्त शासक ने शकों को पराजित कर 'शकारि' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: true },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "स्कंदगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त द्वितीय ने पश्चिमी भारत के अंतिम शक शासक रुद्रसिंह तृतीय को पराजित कर 'शकारि' की उपाधि धारण की थी, जिसका अर्थ 'शकों का शत्रु' होता है।"
    },
    {
        question: "'दशावतार मंदिर', जो गुप्त काल का एक प्रसिद्ध मंदिर है, किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: false },
            { text: "बेतवा", correct: true },
            { text: "नर्मदा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर प्रदेश के देवगढ़ में स्थित दशावतार मंदिर, बेतवा नदी के तट पर स्थित है।"
    },
    {
        question: "गुप्त काल में न्याय और दंड का सर्वोच्च अधिकारी कौन होता था?",
        answers: shuffle([
            { text: "उपारिक", correct: false },
            { text: "महाबलाधिकृत", correct: false },
            { text: "राजा स्वयं", correct: true },
            { text: "महादंडनायक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त काल में न्याय का सर्वोच्च अधिकारी राजा स्वयं होता था।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, 'महादंडनायक' जैसे अधिकारी भी थे जो न्यायिक कार्य संभालते थे।"
    },
    {
        question: "गुप्त काल में 'मंदिर' वास्तुकला की किस शैली में पत्थर का प्रयोग अधिक हुआ?",
        answers: shuffle([
            { text: "नागर शैली", correct: true },
            { text: "द्रविड़ शैली", correct: false },
            { text: "वेसर शैली", correct: false },
            { text: "गंधार शैली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त काल की नागर शैली के मंदिरों में पत्थर का व्यापक प्रयोग हुआ था, जैसा कि देवगढ़ के दशावतार मंदिर और भूमरा के शिव मंदिर में देखा जा सकता है।"
    },
    {
        question: "'मृच्छकटिकम्' नामक नाटक की रचना किसने की थी, जो गुप्त काल की एक महत्वपूर्ण साहित्यिक कृति है?",
        answers: shuffle([
            { text: "शूद्रक", correct: true },
            { text: "विशाखदत्त", correct: false },
            { text: "कालिदास", correct: false },
            { text: "बाणभट्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मृच्छकटिकम्' (मिट्टी की खिलौना गाड़ी) नामक नाटक की रचना शूद्रक ने की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक सामाजिक नाटक है, जिसमें समाज के विभिन्न वर्गों का वर्णन है।"
    },
    {
        question: "किस गुप्त शासक के सिक्कों पर गरुड़ के साथ-साथ मयूर का भी चित्रण मिलता है?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: true },
            { text: "स्कंदगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुमारगुप्त प्रथम ने अपने सिक्कों पर कार्तिकेय के वाहन मयूर (मोर) का चित्रण करवाया था, जिससे उसके वैष्णव धर्म के साथ-साथ शैव धर्म के प्रति भी सम्मान का पता चलता है।"
    },
    {
        question: "गुप्त काल में 'सामंत' किसे कहा जाता था?",
        answers: shuffle([
            { text: "राजा के अधीनस्थ शासक", correct: true },
            { text: "सैनिक अधिकारी", correct: false },
            { text: "व्यापारी", correct: false },
            { text: "किसान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त काल में 'सामंतवादी' व्यवस्था की शुरुआत हुई थी, जिसमें राजा के अधीनस्थ शासक या बड़े जमींदार 'सामंत' कहलाते थे।"
    },
    {
        question: "किस गुप्त शासक को 'शक्रादित्य' कहा गया है?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "स्कंदगुप्त", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भीतरी स्तंभलेख में स्कंदगुप्त को 'शक्रादित्य' कहा गया है, जिसका अर्थ 'शक्र (इंद्र) के समान महान' होता है।"
    },
    {
        question: "गुप्त काल में 'सर्वाध्यक्ष' नामक अधिकारी का क्या कार्य था?",
        answers: shuffle([
            { text: "राजस्व संग्रह", correct: false },
            { text: "सैन्य प्रशासन", correct: false },
            { text: "विभिन्न विभागों का प्रमुख", correct: true },
            { text: "न्यायपालिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त प्रशासन में 'सर्वाध्यक्ष' एक उच्च पद था, जो विभिन्न विभागों के प्रमुखों का अध्यक्ष होता था।"
    },
    {
        question: "गुप्त काल में 'पुलकेशिन् द्वितीय' किस वंश का शासक था?",
        answers: shuffle([
            { text: "चालुक्य", correct: false },
            { text: "पल्लव", correct: false },
            { text: "गुप्त", correct: false },
            { text: "इनमें से कोई नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुलकेशिन् द्वितीय चालुक्य वंश का शासक था, लेकिन वह गुप्त काल के बाद (7वीं शताब्दी) का था।"
    },
    {
        question: "किस गुप्त शासक को प्रयाग प्रशस्ति में 'पृथ्वी पर कोई दूसरा नहीं' कहा गया है?",
        answers: shuffle([
            { text: "चंद्रगुप्त प्रथम", correct: false },
            { text: "समुद्रगुप्त", correct: true },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समुद्रगुप्त की महान विजयों के कारण उसके दरबारी कवि हरिषेण ने प्रयाग प्रशस्ति में उसे 'पृथ्वी पर कोई दूसरा नहीं' कहा है।"
    },
    {
        question: "गुप्त काल में कला की सबसे अच्छी मूर्तियाँ कहाँ से मिली हैं?",
        answers: shuffle([
            { text: "सारनाथ", correct: true },
            { text: "मथुरा", correct: false },
            { text: "देवगढ़", correct: false },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त काल में कला का चरमोत्कर्ष देखा गया।<br><br><i class='fa-solid fa-angles-right icon'></i> सारनाथ से मिली बुद्ध की मूर्तियाँ गुप्त कला की उत्कृष्ट कृतियाँ मानी जाती हैं।"
    },
    {
        question: "'सूर्य सिद्धांत' नामक ग्रंथ की रचना किसने की थी?",
        answers: shuffle([
            { text: "आर्यभट्ट", correct: true },
            { text: "वराहमिहिर", correct: false },
            { text: "ब्रह्मगुप्त", correct: false },
            { text: "भास्कराचार्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आर्यभट्ट ने 'आर्यभटीय' के साथ-साथ 'सूर्य सिद्धांत' की भी रचना की थी, जिसमें उन्होंने खगोलशास्त्र और गणित के सिद्धांतों का वर्णन किया।"
    },
    {
        question: "गुप्त काल में 'नकद कर' को क्या कहा जाता था?",
        answers: shuffle([
            { text: "हिरण्य", correct: true },
            { text: "भोग", correct: false },
            { text: "उदक", correct: false },
            { text: "विष्टि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हिरण्य' नकद कर था, जबकि 'भोग' राजा को दी जाने वाली दैनिक उपज थी।"
    },
    {
        question: "किस चीनी यात्री ने गुप्त साम्राज्य के दौरान भारत की आर्थिक समृद्धि का वर्णन किया है?",
        answers: shuffle([
            { text: "ह्वेन त्सांग", correct: false },
            { text: "फाह्यान", correct: true },
            { text: "इत्सिंग", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फाह्यान ने अपने यात्रा वृत्तांत में गुप्तकालीन समाज, कानून और व्यवस्था तथा आर्थिक समृद्धि की प्रशंसा की है।"
    },
    {
        question: "किस गुप्त शासक को शकों के उन्मूलन के लिए जाना जाता है?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: true },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "स्कंदगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त द्वितीय ने शकों को पराजित किया और पश्चिमी भारत में उनके शासन का अंत किया।<br><br><i class='fa-solid fa-angles-right icon'></i> इस विजय के बाद ही उसने चांदी के सिक्के जारी किए थे।"
    },
    {
        question: "गुप्त काल में 'भीतरी स्तंभलेख' किस शासक से संबंधित है?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "स्कंदगुप्त", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भीतरी स्तंभलेख स्कंदगुप्त से संबंधित है, जिसमें हूणों के साथ उसके युद्धों का उल्लेख है।"
    },
    {
        question: "गुप्त काल में 'न्यायपालिका' के प्रमुख को क्या कहा जाता था?",
        answers: shuffle([
            { text: "महादंडनायक", correct: true },
            { text: "महाबलाधिकृत", correct: false },
            { text: "उपारिक", correct: false },
            { text: "राजा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त काल में न्यायपालिका का सर्वोच्च अधिकारी राजा होता था, लेकिन न्यायिक प्रशासन में 'महादंडनायक' नामक एक प्रमुख अधिकारी होता था।"
    },
    {
        question: "'कामसूत्र' नामक ग्रंथ की रचना किसने की थी, जो गुप्त काल में लिखी गई थी?",
        answers: shuffle([
            { text: "कालिदास", correct: false },
            { text: "विशाखदत्त", correct: false },
            { text: "वात्स्यायन", correct: true },
            { text: "विष्णु शर्मा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कामसूत्र' की रचना वात्स्यायन ने गुप्त काल के दौरान की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक प्रसिद्ध ग्रंथ है जो कला, प्रेम और जीवन के विभिन्न पहलुओं पर आधारित है।"
    },
    {
        question: "गुप्त काल में 'महानवमी' नामक उत्सव का वर्णन किस विदेशी यात्री ने किया है?",
        answers: shuffle([
            { text: "फाह्यान", correct: true },
            { text: "ह्वेन त्सांग", correct: false },
            { text: "इत्सिंग", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीनी यात्री फाह्यान ने अपने यात्रा वृत्तांत में गुप्त साम्राज्य के दौरान मनाए जाने वाले 'महानवमी' उत्सव का वर्णन किया है, जो दुर्गा पूजा से संबंधित था।"
    },
    {
        question: "गुप्त काल में 'वैष्णव धर्म' का राजकीय संरक्षण किस शासक के काल में सबसे अधिक था?",
        answers: shuffle([
            { text: "चंद्रगुप्त प्रथम", correct: false },
            { text: "समुद्रगुप्त", correct: true },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समुद्रगुप्त ने वैष्णव धर्म को विशेष संरक्षण दिया था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसके सिक्कों पर गरुड़ (विष्णु का वाहन) का चिह्न अंकित था, जो वैष्णव धर्म का प्रतीक था।"
    },
    {
        question: "किस गुप्त शासक के शासनकाल में हूणों का आक्रमण शुरू हुआ था?",
        answers: shuffle([
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "स्कंदगुप्त", correct: true },
            { text: "भानुगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हूणों का पहला आक्रमण स्कंदगुप्त के शासनकाल में हुआ था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने हूणों को पराजित किया था, जिसका उल्लेख जूनागढ़ अभिलेख में मिलता है।"
    },
    {
        question: "'अमरसिंह' किस गुप्त शासक के दरबार में थे?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: true },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "स्कंदगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमरसिंह चंद्रगुप्त द्वितीय के नवरत्नों में से एक थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने 'अमरकोश' नामक प्रसिद्ध शब्दकोश की रचना की।"
    },
    {
        question: "गुप्त काल में 'रूपक' किस धातु के सिक्के को कहा जाता था?",
        answers: shuffle([
            { text: "सोना", correct: false },
            { text: "चांदी", correct: true },
            { text: "तांबा", correct: false },
            { text: "लोहा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त द्वितीय ने शकों को पराजित करने के बाद चांदी के सिक्के जारी किए थे, जिन्हें 'रूपक' कहा जाता था।"
    },
    {
        question: "गुप्त काल में 'उपारिक' नामक अधिकारी का क्या कार्य था?",
        answers: shuffle([
            { text: "प्रांतों का प्रशासन", correct: true },
            { text: "गाँव का प्रशासन", correct: false },
            { text: "राजस्व संग्रह", correct: false },
            { text: "सैन्य कमांडर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त साम्राज्य को 'भुक्ति' (प्रांतों) में विभाजित किया गया था, और 'उपारिक' इन प्रांतों का प्रमुख प्रशासक होता था।"
    },
    {
        question: "गुप्त काल की मूर्तिकला की मुख्य विशेषता क्या थी?",
        answers: shuffle([
            { text: "यथार्थवादी चित्रण", correct: false },
            { text: "आध्यात्मिकता और सादगी", correct: true },
            { text: "ग्रीको-रोमन शैली", correct: false },
            { text: "अत्यधिक आभूषण और वस्त्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त काल की मूर्तिकला में आध्यात्मिकता, शांति और सादगी पर विशेष ध्यान दिया गया था, जो सारनाथ की बुद्ध मूर्तियों में स्पष्ट रूप से दिखाई देता है।"
    },
    {
        question: "'सती प्रथा' का पहला अभिलेखीय प्रमाण किस गुप्त शासक से संबंधित है?",
        answers: shuffle([
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "स्कंदगुप्त", correct: false },
            { text: "भानुगुप्त", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 510 ईस्वी के 'एरण अभिलेख' में भानुगुप्त के सामंत गोपराज की पत्नी के सती होने का उल्लेख है, जो सती प्रथा का पहला लिखित प्रमाण है।"
    },
    {
        question: "गुप्त काल में 'महान्याय' का क्या अर्थ था?",
        answers: shuffle([
            { text: "सर्वोच्च न्यायालय", correct: false },
            { text: "राजा का न्याय", correct: true },
            { text: "महादंडनायक का निर्णय", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महान्याय' गुप्त काल में राजा द्वारा दिए गए न्याय को संदर्भित करता था।"
    },
    {
        question: "किस गुप्त शासक के सिक्के, जिन पर धनुष-बाण पकड़े हुए राजा की प्रतिमा अंकित है, प्राप्त हुए हैं?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: true },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "स्कंदगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समुद्रगुप्त के कई प्रकार के सिक्के मिले हैं, जिनमें से एक पर उसे धनुष-बाण पकड़े हुए दिखाया गया है, जो उसकी सैन्य शक्ति को दर्शाता है।"
    },
    {
        question: "'विशाखदत्त' की रचना 'देवीचंद्रगुप्तम' किस गुप्त शासक से संबंधित है?",
        answers: shuffle([
            { text: "चंद्रगुप्त प्रथम", correct: false },
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: true },
            { text: "कुमारगुप्त प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'देवीचंद्रगुप्तम' में चंद्रगुप्त द्वितीय द्वारा अपने बड़े भाई रामगुप्त को हटाकर सत्ता हासिल करने और ध्रुवदेवी से विवाह करने की कहानी का वर्णन है।"
    },
    {
        question: "गुप्त काल में 'अग्रहार' क्या था?",
        answers: shuffle([
            { text: "मंदिर", correct: false },
            { text: "कर-मुक्त भूमि अनुदान", correct: true },
            { text: "गाँव", correct: false },
            { text: "बंदरगाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अग्रहार' ब्राह्मणों और धार्मिक संस्थानों को दिया जाने वाला कर-मुक्त भूमि अनुदान था।"
    },
    {
        question: "गुप्त काल में 'सर्वाध्यक्ष' का क्या कार्य था?",
        answers: shuffle([
            { text: "सेना का प्रमुख", correct: false },
            { text: "सभी विभागों का अधीक्षक", correct: true },
            { text: "न्यायाधीश", correct: false },
            { text: "वित्त मंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सर्वाध्यक्ष' गुप्त प्रशासन में एक महत्वपूर्ण पद था, जो विभिन्न सरकारी विभागों का पर्यवेक्षक या अधीक्षक होता था।"
    },
    {
        question: "गुप्त काल में गणित और खगोल विज्ञान का प्रमुख केंद्र कौनसा था?",
        answers: shuffle([
            { text: "पाटलिपुत्र", correct: false },
            { text: "उज्जैन", correct: true },
            { text: "नालंदा", correct: false },
            { text: "मथुरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उज्जैन चंद्रगुप्त द्वितीय की दूसरी राजधानी थी और वराहमिहिर जैसे विद्वानों के कारण यह गणित और खगोल विज्ञान का एक महत्वपूर्ण केंद्र बन गया था।"
    },
    {
        question: "'नालंदा' विश्वविद्यालय को किस गुप्त शासक ने नष्ट करवाया था?",
        answers: shuffle([
            { text: "हूण", correct: false },
            { text: "शशांक", correct: false },
            { text: "बख्तियार खिलजी", correct: false },
            { text: "नालंदा को किसी गुप्त शासक ने नष्ट नहीं करवाया था।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नालंदा विश्वविद्यालय की स्थापना कुमारगुप्त प्रथम ने की थी, जबकि इसे 12वीं शताब्दी में बख्तियार खिलजी ने नष्ट कर दिया था।"
    },
    {
        question: "किस गुप्त शासक ने अंतिम शक शासक रुद्रसिंह तृतीय को पराजित कर 'शकारि' की उपाधि धारण की?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: true },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "स्कंदगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त द्वितीय ने शकों को पराजित कर पश्चिमी भारत में उनके शासन का अंत किया और 'शकारि' की उपाधि धारण की।"
    },
    {
        question: "गुप्त काल में 'मृच्छकटिकम्' नामक नाटक किस विषय पर आधारित है?",
        answers: shuffle([
            { text: "राजाओं की महान विजय", correct: false },
            { text: "धार्मिक सिद्धांत", correct: false },
            { text: "सामान्य जन-जीवन", correct: true },
            { text: "ऐतिहासिक घटनाएँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शूद्रक द्वारा रचित 'मृच्छकटिकम्' एक सामाजिक नाटक है जो गुप्त काल के सामान्य लोगों के जीवन, प्रेम और संघर्षों पर आधारित है।"
    },
    {
        question: "किस गुप्त शासक के सिक्कों पर गरुड़ का चिह्न अंकित था?",
        answers: shuffle([
            { text: "श्रीगुप्त", correct: false },
            { text: "समुद्रगुप्त", correct: true },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "स्कंदगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समुद्रगुप्त, जो वैष्णव धर्म का अनुयायी था, के सिक्कों पर विष्णु के वाहन गरुड़ का चिह्न अंकित था।"
    },
    {
        question: "गुप्त काल में 'नागर शैली' के मंदिरों की मुख्य विशेषता क्या थी?",
        answers: shuffle([
            { text: "ऊंचे शिखर", correct: false },
            { text: "गर्भगृह", correct: false },
            { text: "मंडप", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नागर शैली के मंदिर में ऊंचे शिखर, गर्भगृह (जहाँ देवता की मूर्ति होती थी) और मंडप (प्रवेश द्वार के पास का हॉल) होते थे।"
    },
    {
        question: "'अश्वमेध यज्ञ' का प्रमाण देने वाले सिक्के किस गुप्त शासक से संबंधित हैं?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: true },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "स्कंदगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समुद्रगुप्त ने अपनी विजयों के बाद अश्वमेध यज्ञ करवाया था, जिसके प्रमाण उसके सिक्कों पर अंकित यज्ञ करते हुए घोड़े की प्रतिमा से मिलते हैं।"
    },
    {
        question: "गुप्त काल में 'आर्यभटीय' नामक ग्रंथ की रचना किस विषय पर हुई?",
        answers: shuffle([
            { text: "खगोल विज्ञान", correct: false },
            { text: "गणित", correct: false },
            { text: "ज्योतिष", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आर्यभटीय' में आर्यभट्ट ने गणित, खगोल विज्ञान और ज्योतिष जैसे विषयों पर महत्वपूर्ण सिद्धांतों का प्रतिपादन किया था।"
    },
    {
        question: "गुप्त काल में धातु विज्ञान का उत्कृष्ट नमूना कौनसा है?",
        answers: shuffle([
            { text: "दशावतार मंदिर", correct: false },
            { text: "सारनाथ की बुद्ध मूर्ति", correct: false },
            { text: "महरौली का लौह स्तंभ", correct: true },
            { text: "भीतरगाँव मंदिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिल्ली में स्थित महरौली का लौह स्तंभ, जो लगभग 1600 वर्षों से बिना जंग लगे खड़ा है, गुप्त काल की उन्नत धातु विज्ञान का उत्कृष्ट प्रमाण है।"
    },
    {
        question: "गुप्त वंश का वह कौनसा शासक था जिसने 'अश्वमेध यज्ञ' करवाया था?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "दोनों (A) और (B)", correct: true },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समुद्रगुप्त और कुमारगुप्त प्रथम दोनों ने ही अश्वमेध यज्ञ करवाया था, जिसके प्रमाण उनके सिक्कों से मिलते हैं।"
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