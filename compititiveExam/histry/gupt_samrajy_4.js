const questions = [
    {
        topHeading: "गुप्त साम्राज्य पर आधारित बहुविकल्पी प्रश्न part 4 (quiz_no.84)"
    },
    {
        question: "गुप्त काल में 'अभिलेखों' को लिखने वाले अधिकारी को क्या कहा जाता था?",
        answers: shuffle([
            { text: "महासंधिविग्रहिक", correct: false },
            { text: "महाअक्षपटलिक", correct: true },
            { text: "महाबलाधिकृत", correct: false },
            { text: "महादंडनायक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त प्रशासन में 'महाअक्षपटलिक' नामक अधिकारी अभिलेखों और दस्तावेजों को लिखने और उनका रखरखाव करने का कार्य करता था।"
    },
    {
        question: "किस गुप्त शासक को 'देवगुप्त' के नाम से भी जाना जाता था?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: true },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "स्कंदगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'देवीचंद्रगुप्तम' नामक नाटक से पता चलता है कि चंद्रगुप्त द्वितीय को 'देवगुप्त' के नाम से भी जाना जाता था।"
    },
    {
        question: "'न्यायावतार' नामक ग्रंथ की रचना किस गुप्तकालीन विद्वान ने की थी?",
        answers: shuffle([
            { text: "आर्यभट्ट", correct: false },
            { text: "सिद्धसेन दिवाकर", correct: true },
            { text: "नागार्जुन", correct: false },
            { text: "वसुबंधु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिद्धसेन दिवाकर ने 'न्यायावतार' नामक ग्रंथ की रचना की थी, जो तर्कशास्त्र पर आधारित एक महत्वपूर्ण जैन ग्रंथ है।"
    },
    {
        question: "गुप्त काल में 'उपारिक' नामक अधिकारी का क्या कार्य था?",
        answers: shuffle([
            { text: "गाँव का प्रमुख", correct: false },
            { text: "प्रांतों का प्रशासक", correct: true },
            { text: "सेनापति", correct: false },
            { text: "न्यायाधीश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त साम्राज्य को 'भुक्ति' (प्रांतों) में विभाजित किया गया था, और 'उपारिक' इन प्रांतों का प्रमुख प्रशासक होता था।"
    },
    {
        question: "गुप्त काल की मूर्तिकला की मुख्य विशेषता क्या थी?",
        answers: shuffle([
            { text: "ग्रीको-रोमन शैली", correct: false },
            { text: "अत्यधिक आभूषण और वस्त्र", correct: false },
            { text: "आध्यात्मिकता और सादगी", correct: true },
            { text: "यथार्थवादी चित्रण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त काल की मूर्तिकला में आध्यात्मिकता, शांति और सादगी पर विशेष ध्यान दिया गया था, जो सारनाथ की बुद्ध मूर्तियों में स्पष्ट रूप से दिखाई देता है।"
    },
    {
        question: "किस चीनी यात्री ने गुप्त साम्राज्य के दौरान मनाए जाने वाले 'महानवमी' उत्सव का वर्णन किया है?",
        answers: shuffle([
            { text: "फाह्यान", correct: true },
            { text: "ह्वेन त्सांग", correct: false },
            { text: "इत्सिंग", correct: false },
            { text: "सुंगयुन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीनी यात्री फाह्यान ने अपने यात्रा वृत्तांत में गुप्त साम्राज्य के दौरान मनाए जाने वाले 'महानवमी' उत्सव का उल्लेख किया है।"
    },
    {
        question: "'दशमलव प्रणाली' का आविष्कार किस काल में हुआ?",
        answers: shuffle([
            { text: "मौर्य काल", correct: false },
            { text: "गुप्त काल", correct: true },
            { text: "कुषाण काल", correct: false },
            { text: "वर्धन काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दशमलव प्रणाली और शून्य का आविष्कार गुप्त काल के दौरान हुआ था, जिसका श्रेय आर्यभट्ट को दिया जाता है।"
    },
    {
        question: "गुप्त काल में 'चांदी' के सिक्के को क्या कहा जाता था?",
        answers: shuffle([
            { text: "दीनार", correct: false },
            { text: "रूपक", correct: true },
            { text: "माषक", correct: false },
            { text: "पण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त द्वितीय ने शकों को पराजित करने के बाद 'रूपक' नामक चांदी के सिक्के जारी किए थे।"
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
        question: "गुप्त काल में 'व्यापारियों के काफिले के प्रमुख' को क्या कहा जाता था?",
        answers: shuffle([
            { text: "सार्थवाह", correct: true },
            { text: "श्रेष्ठी", correct: false },
            { text: "महाजन", correct: false },
            { text: "वणिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त काल में व्यापारी अक्सर काफिलों में यात्रा करते थे, और उनके प्रमुख को 'सार्थवाह' कहा जाता था।"
    },
    {
        question: "'अभिज्ञानशाकुंतलम्' नामक नाटक की रचना किसने की थी?",
        answers: shuffle([
            { text: "विशाखदत्त", correct: false },
            { text: "शूद्रक", correct: false },
            { text: "कालिदास", correct: true },
            { text: "बाणभट्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अभिज्ञानशाकुंतलम्' कालिदास द्वारा रचित एक प्रसिद्ध नाटक है, जो दुष्यंत और शकुंतला की प्रेम कहानी पर आधारित है।"
    },
    {
        question: "किस गुप्त शासक ने हूणों को पराजित किया था, जिसका उल्लेख जूनागढ़ अभिलेख में मिलता है?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "स्कंदगुप्त", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्कंदगुप्त ने हूणों के आक्रमण को सफलतापूर्वक विफल किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> जूनागढ़ अभिलेख में इसका उल्लेख है कि उसने हूणों को हरा कर अपनी प्रजा को सुरक्षित किया था।"
    },
    {
        question: "गुप्त काल में 'सती प्रथा' का पहला प्रमाण किस अभिलेख से मिलता है?",
        answers: shuffle([
            { text: "प्रयाग प्रशस्ति", correct: false },
            { text: "जूनागढ़ अभिलेख", correct: false },
            { text: "मंदसौर अभिलेख", correct: false },
            { text: "एरण अभिलेख", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 510 ईस्वी के एरण अभिलेख में सती प्रथा का पहला अभिलेखीय प्रमाण मिलता है।"
    },
    {
        question: "'बृहत्संहिता' नामक ग्रंथ की रचना किसने की थी?",
        answers: shuffle([
            { text: "आर्यभट्ट", correct: false },
            { text: "वराहमिहिर", correct: true },
            { text: "ब्रह्मगुप्त", correct: false },
            { text: "धनवंतरि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वराहमिहिर ने 'बृहत्संहिता' की रचना की थी, जिसमें खगोलशास्त्र, ज्योतिष, मौसम विज्ञान और वास्तुशास्त्र जैसे विषयों का वर्णन है।"
    },
    {
        question: "गुप्त काल में 'मंदिर' वास्तुकला की नागर शैली की मुख्य विशेषता क्या थी?",
        answers: shuffle([
            { text: "ऊँचे शिखर", correct: false },
            { text: "गर्भगृह", correct: false },
            { text: "मंडप", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नागर शैली के मंदिरों में ऊँचे शिखर, गर्भगृह और मंडप होते थे।"
    },
    {
        question: "गुप्त साम्राज्य के पतन का एक प्रमुख कारण क्या था?",
        answers: shuffle([
            { text: "आंतरिक विद्रोह", correct: false },
            { text: "हूणों का आक्रमण", correct: false },
            { text: "आर्थिक संकट", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त साम्राज्य के पतन के लिए कई कारक जिम्मेदार थे, जिनमें आंतरिक विद्रोह, हूणों के लगातार आक्रमण, और आर्थिक संकट शामिल थे।"
    },
    {
        question: "'मृच्छकटिकम्' नामक नाटक किस विषय पर आधारित है?",
        answers: shuffle([
            { text: "राजाओं की महान विजय", correct: false },
            { text: "धार्मिक सिद्धांत", correct: false },
            { text: "सामान्य जन-जीवन", correct: true },
            { text: "ऐतिहासिक घटनाएँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शूद्रक द्वारा रचित 'मृच्छकटिकम्' एक सामाजिक नाटक है जो गुप्त काल के सामान्य लोगों के जीवन, प्रेम और संघर्षों पर आधारित है।"
    },
    {
        question: "गुप्त काल में 'धन्वन्तरि' किसके लिए प्रसिद्ध थे?",
        answers: shuffle([
            { text: "खगोलशास्त्री", correct: false },
            { text: "गणितज्ञ", correct: false },
            { text: "चिकित्सक", correct: true },
            { text: "कवि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धन्वन्तरि, जो चंद्रगुप्त द्वितीय के नवरत्नों में से एक थे, आयुर्वेद के एक महान विद्वान और चिकित्सक थे।"
    },
    {
        question: "किस गुप्त शासक के सिक्कों पर 'महेंद्रादित्य' की उपाधि अंकित है?",
        answers: shuffle([
            { text: "चंद्रगुप्त प्रथम", correct: false },
            { text: "समुद्रगुप्त", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: true },
            { text: "स्कंदगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुमारगुप्त प्रथम ने 'महेन्द्रादित्य' की उपाधि धारण की थी, जो उसके सिक्कों पर भी अंकित मिलती है।"
    },
    {
        question: "गुप्त काल में 'अग्रहार' क्या था?",
        answers: shuffle([
            { text: "कर-मुक्त भूमि अनुदान", correct: true },
            { text: "एक प्रकार का कर", correct: false },
            { text: "गाँवों का समूह", correct: false },
            { text: "व्यापारियों का संगठन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अग्रहार' ब्राह्मणों और धार्मिक संस्थानों को दिया जाने वाला कर-मुक्त भूमि अनुदान था।"
    },
    {
        question: "गुप्त काल में 'भूमि' कर की दर क्या थी?",
        answers: shuffle([
            { text: "1/4 से 1/6", correct: true },
            { text: "1/2 से 1/4", correct: false },
            { text: "1/6 से 1/8", correct: false },
            { text: "1/8 से 1/10", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त काल में उपज का 1/4 से 1/6 भाग भूमि कर के रूप में लिया जाता था।"
    },
    {
        question: "'मेहरौली का लौह स्तंभ' किस शासक से संबंधित है?",
        answers: shuffle([
            { text: "अशोक", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: true },
            { text: "समुद्रगुप्त", correct: false },
            { text: "हर्षवर्धन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिल्ली में स्थित मेहरौली का लौह स्तंभ, जिस पर 'चंद्र' नामक राजा का उल्लेख है, को चंद्रगुप्त द्वितीय से जोड़ा जाता है।"
    },
    {
        question: "गुप्त काल में 'सार्थवाह' किसे कहा जाता था?",
        answers: shuffle([
            { text: "महाजनों को", correct: false },
            { text: "व्यापारियों के काफिले के प्रमुख को", correct: true },
            { text: "सैनिकों को", correct: false },
            { text: "पुरोहितों को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सार्थवाह' गुप्त काल में व्यापारियों के काफिले के प्रमुख को कहा जाता था।"
    },
    {
        question: "'गुप्त संवत' की शुरुआत किस शासक ने की थी?",
        answers: shuffle([
            { text: "श्रीगुप्त", correct: false },
            { text: "घटोत्कचगुप्त", correct: false },
            { text: "चंद्रगुप्त प्रथम", correct: true },
            { text: "समुद्रगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त प्रथम ने अपने राज्यारोहण के उपलक्ष्य में 319-320 ईस्वी में 'गुप्त संवत' की शुरुआत की थी।"
    },
    {
        question: "किस गुप्त शासक को 'लिच्छवि दौहित्र' कहा जाता था?",
        answers: shuffle([
            { text: "चंद्रगुप्त प्रथम", correct: false },
            { text: "समुद्रगुप्त", correct: true },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समुद्रगुप्त की माता कुमारदेवी लिच्छवि राजकुमारी थीं, इसलिए उसे 'लिच्छवि दौहित्र' कहा जाता था।"
    },
    {
        question: "गुप्त काल में 'सार्थवाह' किसे कहा जाता था?",
        answers: shuffle([
            { text: "सेनापति", correct: false },
            { text: "व्यापारियों के काफिले का प्रमुख", correct: true },
            { text: "न्यायाधीश", correct: false },
            { text: "गाँव का प्रमुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त काल में व्यापारी अक्सर काफिलों में यात्रा करते थे और उनके नेता को 'सार्थवाह' कहा जाता था।"
    },
    {
        question: "'अभिज्ञान शाकुंतलम्' नामक नाटक की रचना किसने की थी?",
        answers: shuffle([
            { text: "विशाखदत्त", correct: false },
            { text: "शूद्रक", correct: false },
            { text: "कालिदास", correct: true },
            { text: "बाणभट्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालिदास, जो चंद्रगुप्त द्वितीय के नवरत्नों में से एक थे, ने 'अभिज्ञान शाकुंतलम्' की रचना की थी, जो दुष्यंत और शकुंतला की प्रेम कहानी पर आधारित है।"
    },
    {
        question: "किस गुप्त शासक ने हूणों को पराजित किया था, जिसका उल्लेख जूनागढ़ अभिलेख में मिलता है?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "स्कंदगुप्त", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हूणों का पहला आक्रमण स्कंदगुप्त के शासनकाल में हुआ था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने हूणों को सफलतापूर्वक पराजित किया था, जिसका उल्लेख जूनागढ़ अभिलेख में मिलता है।"
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
        question: "गुप्त काल में 'अग्रहार' क्या था?",
        answers: shuffle([
            { text: "कर-मुक्त भूमि अनुदान", correct: true },
            { text: "एक प्रकार का कर", correct: false },
            { text: "गाँवों का समूह", correct: false },
            { text: "व्यापारियों का संगठन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अग्रहार' ब्राह्मणों और धार्मिक संस्थानों को दिया जाने वाला भूमि अनुदान था, जो कर से मुक्त होता था।"
    },
    {
        question: "'बृहत्संहिता' नामक ग्रंथ की रचना किसने की थी?",
        answers: shuffle([
            { text: "आर्यभट्ट", correct: false },
            { text: "वराहमिहिर", correct: true },
            { text: "ब्रह्मगुप्त", correct: false },
            { text: "धन्वंतरि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वराहमिहिर, जो चंद्रगुप्त द्वितीय के नवरत्नों में से एक थे, ने 'बृहत्संहिता' नामक ग्रंथ की रचना की थी, जिसमें खगोलशास्त्र, ज्योतिष, मौसम विज्ञान और वास्तुशास्त्र जैसे विषयों का वर्णन है।"
    },
    {
        question: "गुप्त काल में 'मंदिर' वास्तुकला की किस शैली का विकास हुआ?",
        answers: shuffle([
            { text: "द्रविड़ शैली", correct: false },
            { text: "नागर शैली", correct: true },
            { text: "वेसर शैली", correct: false },
            { text: "इंडो-इस्लामिक शैली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त काल में मंदिरों की नागर शैली का विकास हुआ, जिसकी विशेषता ऊँचे शिखर और गर्भगृह थे।"
    },
    {
        question: "गुप्त साम्राज्य के पतन का एक प्रमुख कारण क्या था?",
        answers: shuffle([
            { text: "आंतरिक विद्रोह", correct: false },
            { text: "हूणों का आक्रमण", correct: false },
            { text: "आर्थिक संकट", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त साम्राज्य के पतन के लिए कई कारक जिम्मेदार थे, जिनमें आंतरिक विद्रोह, हूणों के लगातार आक्रमण, और आर्थिक संकट शामिल थे।"
    },
    {
        question: "'मेघदूत' और 'रघुवंशम्' जैसे प्रसिद्ध ग्रंथों की रचना किसने की?",
        answers: shuffle([
            { text: "विशाखदत्त", correct: false },
            { text: "शूद्रक", correct: false },
            { text: "कालिदास", correct: true },
            { text: "आर्यभट्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालिदास चंद्रगुप्त द्वितीय के नवरत्नों में से एक थे और उन्होंने कई प्रसिद्ध महाकाव्य और नाटक लिखे थे, जिनमें 'मेघदूत' और 'रघुवंशम्' प्रमुख हैं।"
    },
    {
        question: "गुप्त काल में 'दशमलव प्रणाली' का आविष्कार किसने किया था?",
        answers: shuffle([
            { text: "वराहमिहिर", correct: false },
            { text: "आर्यभट्ट", correct: true },
            { text: "ब्रह्मगुप्त", correct: false },
            { text: "धन्वंतरि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महान गणितज्ञ और खगोलशास्त्री आर्यभट्ट ने गुप्त काल के दौरान दशमलव प्रणाली और शून्य की अवधारणा का प्रतिपादन किया था।"
    },
    {
        question: "किस चीनी यात्री ने गुप्त साम्राज्य के दौरान भारत की आर्थिक समृद्धि का वर्णन किया है?",
        answers: shuffle([
            { text: "ह्वेन त्सांग", correct: false },
            { text: "फाह्यान", correct: true },
            { text: "इत्सिंग", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीनी यात्री फाह्यान ने अपने यात्रा वृत्तांत में गुप्तकालीन समाज, कानून और व्यवस्था तथा आर्थिक समृद्धि की प्रशंसा की है।"
    },
    {
        question: "गुप्त काल में 'भूमि' कर की दर क्या थी?",
        answers: shuffle([
            { text: "1/4 से 1/6", correct: true },
            { text: "1/2 से 1/4", correct: false },
            { text: "1/6 से 1/8", correct: false },
            { text: "1/8 से 1/10", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त काल में उपज का 1/4 से 1/6 भाग भूमि कर के रूप में लिया जाता था।"
    },
    {
        question: "किस गुप्त शासक ने अंतिम शक शासक रुद्रसिंह तृतीय को पराजित कर 'शकारि' की उपाधि धारण की?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: true },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "स्कंदगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त द्वितीय ने शकों को पराजित किया और पश्चिमी भारत में उनके शासन का अंत किया।<br><br><i class='fa-solid fa-angles-right icon'></i> इस विजय के बाद ही उसने 'शकारि' की उपाधि धारण की थी।"
    },
    {
        question: "गुप्त काल में 'अमरकोश' नामक शब्दकोश की रचना किसने की थी?",
        answers: shuffle([
            { text: "कालिदास", correct: false },
            { text: "शूद्रक", correct: false },
            { text: "अमरसिंह", correct: true },
            { text: "आर्यभट्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमरसिंह, जो चंद्रगुप्त द्वितीय के नवरत्नों में से एक थे, उन्होंने संस्कृत के प्रसिद्ध शब्दकोश 'अमरकोश' की रचना की थी।"
    },
    {
        question: "गुप्त काल में 'धन्वन्तरि' किसके लिए प्रसिद्ध थे?",
        answers: shuffle([
            { text: "खगोलशास्त्री", correct: false },
            { text: "गणितज्ञ", correct: false },
            { text: "चिकित्सक", correct: true },
            { text: "कवि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धन्वन्तरि, जो चंद्रगुप्त द्वितीय के नवरत्नों में से एक थे, आयुर्वेद के एक महान विद्वान और चिकित्सक थे।"
    },
    {
        question: "किस गुप्त शासक को 'महान राजाओं का राजा' (महाराजाधिराज) कहा जाता था?",
        answers: shuffle([
            { text: "श्रीगुप्त", correct: false },
            { text: "घटोत्कच गुप्त", correct: false },
            { text: "चंद्रगुप्त प्रथम", correct: true },
            { text: "समुद्रगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त प्रथम ने लिच्छवि राजकुमारी कुमारदेवी से विवाह करके अपनी राजनीतिक स्थिति मजबूत की और 'महाराजाधिराज' की भव्य उपाधि धारण की।"
    },
    {
        question: "'गुप्त संवत' की शुरुआत किस वर्ष हुई थी?",
        answers: shuffle([
            { text: "319-320 ईस्वी", correct: true },
            { text: "78 ईस्वी", correct: false },
            { text: "58 ईसा पूर्व", correct: false },
            { text: "248 ईस्वी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त प्रथम ने अपने राज्यारोहण के उपलक्ष्य में 319-320 ईस्वी में 'गुप्त संवत' की शुरुआत की थी।"
    },
    {
        question: "गुप्त काल में 'सती प्रथा' का पहला अभिलेखीय प्रमाण किस शासक से संबंधित है?",
        answers: shuffle([
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "स्कंदगुप्त", correct: false },
            { text: "भानुगुप्त", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 510 ईस्वी के एरण अभिलेख में भानुगुप्त के सामंत गोपराज की पत्नी के सती होने का उल्लेख है, जो सती प्रथा का पहला लिखित प्रमाण है।"
    },
    {
        question: "किस गुप्त शासक को 'भारत का नेपोलियन' कहा जाता है?",
        answers: shuffle([
            { text: "चंद्रगुप्त प्रथम", correct: false },
            { text: "समुद्रगुप्त", correct: true },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "स्कंदगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इतिहासकार वी.ए. स्मिथ ने समुद्रगुप्त को उसकी महान सैन्य विजयों और साम्राज्य विस्तार के कारण 'भारत का नेपोलियन' कहा है।"
    },
    {
        question: "गुप्त काल में 'वास्तुशास्त्र' का प्रमुख विद्वान कौन था?",
        answers: shuffle([
            { text: "आर्यभट्ट", correct: false },
            { text: "वराहमिहिर", correct: true },
            { text: "ब्रह्मगुप्त", correct: false },
            { text: "अमरसिंह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वराहमिहिर ने खगोलशास्त्र के साथ-साथ वास्तुशास्त्र पर भी लिखा था, जिसमें 'बृहत्संहिता' नामक ग्रंथ प्रमुख है।"
    },
    {
        question: "गुप्त काल में 'रूपक' किस धातु के सिक्के को कहा जाता था?",
        answers: shuffle([
            { text: "सोना", correct: false },
            { text: "चांदी", correct: true },
            { text: "तांबा", correct: false },
            { text: "लोहा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त द्वितीय ने शकों को पराजित करने के बाद 'रूपक' नामक चांदी के सिक्के जारी किए थे।"
    },
    {
        question: "गुप्त काल में 'महानवमी' नामक उत्सव का वर्णन किस विदेशी यात्री ने किया है?",
        answers: shuffle([
            { text: "फाह्यान", correct: true },
            { text: "ह्वेन त्सांग", correct: false },
            { text: "इत्सिंग", correct: false },
            { text: "सुंग युन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीनी यात्री फाह्यान ने अपने यात्रा वृत्तांत में गुप्त साम्राज्य के दौरान मनाए जाने वाले 'महानवमी' उत्सव का उल्लेख किया है।"
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
        question: "किस गुप्त शासक के शासनकाल में हूणों का आक्रमण शुरू हुआ था?",
        answers: shuffle([
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "स्कंदगुप्त", correct: true },
            { text: "भानुगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हूणों का पहला आक्रमण स्कंदगुप्त के शासनकाल में हुआ था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने हूणों को सफलतापूर्वक पराजित किया था।"
    },
    {
        question: "'दशावतार मंदिर', जो गुप्त काल का एक प्रसिद्ध मंदिर है, कहाँ स्थित है?",
        answers: shuffle([
            { text: "भूमरा", correct: false },
            { text: "देवगढ़", correct: true },
            { text: "भीतरगाँव", correct: false },
            { text: "सांची", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर प्रदेश के देवगढ़ में स्थित दशावतार मंदिर गुप्त काल के मंदिरों में सबसे महत्वपूर्ण है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मंदिर वास्तुकला और मूर्तिकला के लिए प्रसिद्ध है।"
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