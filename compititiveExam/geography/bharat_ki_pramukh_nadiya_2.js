const questions = [ 
    {
        topHeading: "भारत की प्रमुख नदियों पर आधारित बहुविकल्पीय प्रश्न part 2  (quiz_no. 89)."
    },
    {
        question: "निम्नलिखित में से कौन सी नदी भ्रंश घाटी (Rift Valley) से होकर बहती है?",
        answers: shuffle([
            { text: "गोदावरी", correct: false },
            { text: "ताप्ती", correct: true },
            { text: "कृष्णा", correct: false },
            { text: "महानदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ताप्ती और नर्मदा नदियां भारत में भ्रंश घाटी से होकर बहती हैं, जो विंध्य और सतपुड़ा पर्वतमालाओं के बीच स्थित है।"
    },
    {
        question: "'जोग जलप्रपात' (Jog Falls) किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "शरावती", correct: true },
            { text: "कावेरी", correct: false },
            { text: "गोदावरी", correct: false },
            { text: "कृष्णा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जोग जलप्रपात कर्नाटक में शरावती नदी पर स्थित है और यह भारत के सबसे ऊंचे जलप्रपातों में से एक है।"
    },
    {
        question: "निम्नलिखित में से कौन सी नदी 'अरब सागर' में गिरने से पहले ज्वारनदमुख (estuary) बनाती है?",
        answers: shuffle([
            { text: "नर्मदा", correct: true },
            { text: "गोदावरी", correct: false },
            { text: "महानदी", correct: false },
            { text: "कावेरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नर्मदा नदी पश्चिम की ओर बहती है और अरब सागर में गिरने से पहले डेल्टा के बजाय ज्वारनदमुख (estuary) का निर्माण करती है।"
    },
    {
        question: "'अलकनंदा' और 'धौलीगंगा' का संगम किस स्थान पर होता है?",
        answers: shuffle([
            { text: "देवप्रयाग", correct: false },
            { text: "रुद्रप्रयाग", correct: false },
            { text: "विष्णुप्रयाग", correct: true },
            { text: "कर्णप्रयाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अलकनंदा और धौलीगंगा नदियाँ उत्तराखंड के विष्णुप्रयाग नामक स्थान पर मिलती हैं।"
    },
    {
        question: "निम्नलिखित में से किस नदी के किनारे पर 'कुंभ मेले' का आयोजन नहीं होता है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "गोदावरी", correct: false },
            { text: "यमुना", correct: false },
            { text: "महानदी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुंभ मेले का आयोजन चार स्थानों पर होता है: हरिद्वार (गंगा), प्रयागराज (गंगा और यमुना का संगम), नासिक (गोदावरी) और उज्जैन (क्षिप्रा)।<br><br><i class='fa-solid fa-angles-right icon'></i> महानदी के किनारे कुंभ मेला नहीं होता।"
    },
    {
        question: "'गंगा नदी' की सबसे पूर्वी सहायक नदी कौन सी है?",
        answers: shuffle([
            { text: "रामगंगा", correct: false },
            { text: "गोमती", correct: false },
            { text: "घाघरा", correct: false },
            { text: "महानंदा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महानंदा नदी गंगा के बाएं किनारे पर मिलने वाली सबसे पूर्वी और अंतिम सहायक नदी है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह दार्जिलिंग पहाड़ियों से निकलती है।"
    },
    {
        question: "'अमरकंटक पठार' से कौन सी नदियां निकलती हैं?",
        answers: shuffle([
            { text: "नर्मदा, सोन, महानदी", correct: true },
            { text: "गोदावरी, कृष्णा, कावेरी", correct: false },
            { text: "ताप्ती, चंबल, बेतवा", correct: false },
            { text: "गंगा, यमुना, ब्रह्मपुत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य प्रदेश के अमरकंटक पठार से नर्मदा, सोन और महानदी जैसी महत्वपूर्ण नदियां निकलती हैं।"
    },
    {
        question: "'कोलकाता' किस नदी के तट पर स्थित है?",
        answers: shuffle([
            { text: "हुगली", correct: true },
            { text: "महानदी", correct: false },
            { text: "गंगा", correct: false },
            { text: "दामोदर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पश्चिम बंगाल की राजधानी कोलकाता गंगा की एक वितरिका, हुगली नदी के पूर्वी तट पर स्थित है।"
    },
    {
        question: "'लोहित' नदी किसकी सहायक नदी है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "सिंधु", correct: false },
            { text: "ब्रह्मपुत्र", correct: true },
            { text: "गोदावरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोहित नदी ब्रह्मपुत्र की एक महत्वपूर्ण सहायक नदी है, जो अरुणाचल प्रदेश से होकर बहती है।"
    },
    {
        question: "निम्नलिखित में से कौन सी नदी 'पूर्व की ओर बहने वाली नदी' है?",
        answers: shuffle([
            { text: "नर्मदा", correct: false },
            { text: "माही", correct: false },
            { text: "गोदावरी", correct: true },
            { text: "साबरमती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोदावरी पूर्व की ओर बहते हुए बंगाल की खाड़ी में गिरती है, जबकि नर्मदा, माही और साबरमती पश्चिम की ओर बहती हैं।"
    },
    {
        question: "'नागार्जुन सागर परियोजना' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "गोदावरी", correct: false },
            { text: "कृष्णा", correct: true },
            { text: "कावेरी", correct: false },
            { text: "महानदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नागार्जुन सागर परियोजना आंध्र प्रदेश और तेलंगाना की सीमा पर कृष्णा नदी पर स्थित है।"
    },
    {
        question: "'सतलज' नदी भारत में किस दर्रे से होकर प्रवेश करती है?",
        answers: shuffle([
            { text: "रोहतांग दर्रा", correct: false },
            { text: "नाथु ला दर्रा", correct: false },
            { text: "लिपुलेख दर्रा", correct: false },
            { text: "शिपकी ला दर्रा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सतलज नदी तिब्बत से निकलती है और हिमाचल प्रदेश में शिपकी ला दर्रे से होकर भारत में प्रवेश करती है।"
    },
    {
        question: "'अलकनंदा' और 'पिंडर' का संगम किस स्थान पर होता है?",
        answers: shuffle([
            { text: "विष्णुप्रयाग", correct: false },
            { text: "कर्णप्रयाग", correct: true },
            { text: "देवप्रयाग", correct: false },
            { text: "रुद्रप्रयाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अलकनंदा और पिंडर नदियाँ कर्णप्रयाग में मिलती हैं।"
    },
    {
        question: "'कोयना' नदी किसकी सहायक नदी है?",
        answers: shuffle([
            { text: "गोदावरी", correct: false },
            { text: "कृष्णा", correct: true },
            { text: "कावेरी", correct: false },
            { text: "महानदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोयना नदी महाराष्ट्र की एक महत्वपूर्ण नदी है, जो कृष्णा की एक प्रमुख सहायक नदी है।"
    },
    {
        question: "'माही' नदी किस खाड़ी में गिरती है?",
        answers: shuffle([
            { text: "कच्छ की खाड़ी", correct: false },
            { text: "खंभात की खाड़ी", correct: true },
            { text: "मन्नार की खाड़ी", correct: false },
            { text: "बंगाल की खाड़ी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माही नदी पश्चिम की ओर बहते हुए खंभात की खाड़ी (अरब सागर का हिस्सा) में गिरती है।"
    },
    {
        question: "'चंबल' नदी किसकी सहायक नदी है?",
        answers: shuffle([
            { text: "नर्मदा", correct: false },
            { text: "यमुना", correct: true },
            { text: "गंगा", correct: false },
            { text: "सोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंबल नदी यमुना की एक प्रमुख सहायक नदी है, जो मध्य प्रदेश से निकलकर राजस्थान होते हुए उत्तर प्रदेश में यमुना में मिलती है।"
    },
    {
        question: "'भारत की लवण नदी' के नाम से कौन सी नदी जानी जाती है?",
        answers: shuffle([
            { text: "साबरमती", correct: false },
            { text: "माही", correct: false },
            { text: "लूनी", correct: true },
            { text: "नर्मदा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लूनी नदी का पानी ऊपरी हिस्से में मीठा होता है, लेकिन रेगिस्तानी क्षेत्र से गुजरने के बाद खारा हो जाता है, इसलिए इसे 'भारत की लवण नदी' कहते हैं।"
    },
    {
        question: "'भागीरथी' और 'भिलंगना' का संगम किस स्थान पर होता है?",
        answers: shuffle([
            { text: "देवप्रयाग", correct: false },
            { text: "टिहरी", correct: true },
            { text: "कर्णप्रयाग", correct: false },
            { text: "रुद्रप्रयाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भागीरथी और भिलंगना नदियों के संगम पर टिहरी बांध बनाया गया है।"
    },
    {
        question: "'गोमती' नदी किस राज्य से निकलती है?",
        answers: shuffle([
            { text: "उत्तराखंड", correct: false },
            { text: "उत्तर प्रदेश", correct: true },
            { text: "बिहार", correct: false },
            { text: "झारखंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोमती नदी उत्तर प्रदेश के पीलीभीत जिले में स्थित 'फुलहर झील' (गोमत ताल) से निकलती है।"
    },
    {
        question: "'ब्यास' नदी का उद्गम किस दर्रे से होता है?",
        answers: shuffle([
            { text: "बनिहाल दर्रा", correct: false },
            { text: "बारालाचा ला दर्रा", correct: false },
            { text: "रोहतांग दर्रा", correct: true },
            { text: "शिपकी ला दर्रा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्यास नदी का उद्गम हिमाचल प्रदेश में रोहतांग दर्रे के पास 'ब्यास कुंड' से होता है।"
    },
    {
        question: "'मांडवी' और 'जुआरी' नदियाँ किस राज्य की प्रमुख नदियाँ हैं?",
        answers: shuffle([
            { text: "कर्नाटक", correct: false },
            { text: "गोवा", correct: true },
            { text: "केरल", correct: false },
            { text: "महाराष्ट्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मांडवी और जुआरी गोवा की दो प्रमुख नदियाँ हैं, जो राज्य के जीवन का अभिन्न अंग हैं।"
    },
    {
        question: "'कृष्णा नदी' का उद्गम किस पर्वत श्रृंखला से होता है?",
        answers: shuffle([
            { text: "हिमालय", correct: false },
            { text: "अरावली", correct: false },
            { text: "पूर्वी घाट", correct: false },
            { text: "पश्चिमी घाट", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृष्णा नदी का उद्गम महाराष्ट्र में पश्चिमी घाट की महाबलेश्वर चोटी से होता है।"
    },
    {
        question: "'जमुना' किस नदी का नाम है, जब वह बांग्लादेश में प्रवेश करती है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "ब्रह्मपुत्र", correct: true },
            { text: "महानदी", correct: false },
            { text: "कावेरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बांग्लादेश में ब्रह्मपुत्र नदी को 'जमुना' के नाम से जाना जाता है।"
    },
    {
        question: "'महानदी' और 'गोदावरी' के डेल्टा के बीच कौन सी झील स्थित है?",
        answers: shuffle([
            { text: "वुलर झील", correct: false },
            { text: "चिल्का झील", correct: true },
            { text: "पुलिकट झील", correct: false },
            { text: "कोलेरू झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चिल्का झील, एक खारे पानी की लैगून झील, ओडिशा में महानदी के डेल्टा के दक्षिण में स्थित है।"
    },
    {
        question: "'बेतवा' और 'केन' नदियां किसकी सहायक नदियां हैं?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: true },
            { text: "सोन", correct: false },
            { text: "चंबल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बेतवा और केन नदियां मध्य प्रदेश के पठारी क्षेत्र से निकलकर उत्तर की ओर बहती हैं और यमुना नदी में मिल जाती हैं।"
    },
    {
        question: "'गंगा नदी' के दाहिने तट पर मिलने वाली सबसे बड़ी सहायक नदी कौन सी है?",
        answers: shuffle([
            { text: "यमुना", correct: true },
            { text: "सोन", correct: false },
            { text: "चंबल", correct: false },
            { text: "कोसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यमुना गंगा के दाहिने तट पर प्रयागराज (इलाहाबाद) में मिलती है और यह गंगा की सबसे बड़ी सहायक नदी है।"
    },
    {
        question: "'राप्ती' नदी का उद्गम किस देश में होता है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "नेपाल", correct: true },
            { text: "तिब्बत", correct: false },
            { text: "भूटान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राप्ती नदी का उद्गम नेपाल में होता है और यह भारत में बहते हुए घाघरा नदी में मिलती है।"
    },
    {
        question: "'मांडवी' नदी का उद्गम स्थल कहाँ है?",
        answers: shuffle([
            { text: "महाबलेश्वर", correct: false },
            { text: "पश्चिमी घाट", correct: true },
            { text: "ब्रह्मगिरि पहाड़ियां", correct: false },
            { text: "अमरकंटक पठार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मांडवी नदी कर्नाटक में पश्चिमी घाट से निकलती है और गोवा की ओर बहती है।"
    },
    {
        question: "'बगलीहार जलविद्युत परियोजना' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "सतलज", correct: false },
            { text: "झेलम", correct: false },
            { text: "चिनाब", correct: true },
            { text: "रावी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बगलीहार जलविद्युत परियोजना जम्मू-कश्मीर में चिनाब नदी पर बनाई गई है।"
    },
    {
        question: "'उज्जैन' किस नदी के तट पर स्थित है?",
        answers: shuffle([
            { text: "नर्मदा", correct: false },
            { text: "क्षिप्रा", correct: true },
            { text: "ताप्ती", correct: false },
            { text: "साबरमती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य प्रदेश का धार्मिक शहर उज्जैन, क्षिप्रा नदी के तट पर स्थित है, जहाँ कुंभ मेले का आयोजन होता है।"
    },
    {
        question: "'ब्रह्मपुत्र' नदी को 'अरुणाचल प्रदेश' में किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "दिहांग", correct: true },
            { text: "सांगपो", correct: false },
            { text: "जमुना", correct: false },
            { text: "लोहित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्रह्मपुत्र नदी तिब्बत से 'सांगपो' के रूप में निकलती है और अरुणाचल प्रदेश में 'दिहांग' के नाम से प्रवेश करती है।"
    },
    {
        question: "'महानदी' और 'गोदावरी' के डेल्टाओं के बीच की खाड़ी कौन सी है?",
        answers: shuffle([
            { text: "मन्नार की खाड़ी", correct: false },
            { text: "बंगाल की खाड़ी", correct: true },
            { text: "कच्छ की खाड़ी", correct: false },
            { text: "खंभात की खाड़ी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महानदी और गोदावरी दोनों ही पूर्व की ओर बहकर बंगाल की खाड़ी में डेल्टा बनाती हैं।"
    },
    {
        question: "निम्नलिखित में से कौन सी नदी 'घाघरा' की सहायक नदी है?",
        answers: shuffle([
            { text: "राप्ती", correct: false },
            { text: "शारदा", correct: false },
            { text: "बेतवा", correct: false },
            { text: "A और B दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राप्ती और शारदा (काली) दोनों ही घाघरा नदी की महत्वपूर्ण सहायक नदियां हैं।"
    },
    {
        question: "'कबीनी', 'भवानी' और 'अमरावती' किसकी सहायक नदियाँ हैं?",
        answers: shuffle([
            { text: "कृष्णा", correct: false },
            { text: "कावेरी", correct: true },
            { text: "गोदावरी", correct: false },
            { text: "महानदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कबीनी, भवानी और अमरावती नदियाँ कावेरी नदी की सहायक नदियाँ हैं।"
    },
    {
        question: "'सरयू' नदी किसकी सहायक नदी है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "घाघरा", correct: true },
            { text: "रामगंगा", correct: false },
            { text: "यमुना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सरयू नदी घाघरा की एक प्रमुख सहायक नदी है,<br><br><i class='fa-solid fa-angles-right icon'></i> जिसके तट पर अयोध्या शहर स्थित है।"
    },
    {
        question: "'सोन' नदी का उद्गम स्थल किस पहाड़ी से होता है?",
        answers: shuffle([
            { text: "अमरकंटक", correct: true },
            { text: "सह्याद्रि", correct: false },
            { text: "कुमाऊँ पहाड़ियाँ", correct: false },
            { text: "अरावली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोन नदी अमरकंटक पठार से निकलती है, जो मध्य प्रदेश में स्थित है।"
    },
    {
        question: "'गंगा' नदी की कौन सी सहायक नदी पठारी क्षेत्र से निकलती है और दाहिने तट पर मिलती है?",
        answers: shuffle([
            { text: "यमुना", correct: false },
            { text: "सोन", correct: true },
            { text: "कोसी", correct: false },
            { text: "घाघरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोन नदी गंगा की एक दाहिने तट की सहायक नदी है, जो प्रायद्वीपीय पठारी क्षेत्र (अमरकंटक) से निकलती है।"
    },
    {
        question: "'जबलपुर' शहर किस नदी के तट पर स्थित है?",
        answers: shuffle([
            { text: "चंबल", correct: false },
            { text: "नर्मदा", correct: true },
            { text: "ताप्ती", correct: false },
            { text: "साबरमती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जबलपुर शहर मध्य प्रदेश में नर्मदा नदी के तट पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ प्रसिद्ध 'धुआंधार जलप्रपात' भी है।"
    },
    {
        question: "'लूनी' नदी का उद्गम स्थल कहाँ है?",
        answers: shuffle([
            { text: "नाग पहाड़ियाँ (अरावली)", correct: true },
            { text: "अमरकंटक पठार", correct: false },
            { text: "महाबलेश्वर", correct: false },
            { text: "त्र्यंबकेश्वर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लूनी नदी का उद्गम राजस्थान में अजमेर के पास अरावली पर्वतमाला की नाग पहाड़ियों से होता है।"
    },
    {
        question: "'सरयू' नदी किसकी सहायक नदी है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "घाघरा", correct: true },
            { text: "रामगंगा", correct: false },
            { text: "यमुना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सरयू नदी घाघरा की एक प्रमुख सहायक नदी है, जिसके तट पर अयोध्या शहर स्थित है।"
    },
    {
        question: "'पोंग बांध' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "पंजाब", correct: false },
            { text: "हरियाणा", correct: false },
            { text: "हिमाचल प्रदेश", correct: true },
            { text: "उत्तराखंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पोंग बांध हिमाचल प्रदेश में ब्यास नदी पर स्थित है।"
    },
    {
        question: "'कृष्णा नदी जल विवाद' किन राज्यों के बीच है?",
        answers: shuffle([
            { text: "महाराष्ट्र, कर्नाटक, आंध्र प्रदेश, तेलंगाना", correct: true },
            { text: "कर्नाटक, तमिलनाडु", correct: false },
            { text: "मध्य प्रदेश, गुजरात", correct: false },
            { text: "बिहार, उत्तर प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृष्णा नदी के जल के बंटवारे को लेकर महाराष्ट्र, कर्नाटक, आंध्र प्रदेश और तेलंगाना के बीच विवाद है।"
    },
    {
        question: "'गंगासागर' नामक स्थान किस नदी के मुहाने पर स्थित है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "हुगली", correct: true },
            { text: "महानदी", correct: false },
            { text: "ब्रह्मपुत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गंगासागर पश्चिम बंगाल में हुगली नदी के मुहाने पर स्थित है, जहाँ गंगा नदी बंगाल की खाड़ी में गिरती है।"
    },
    {
        question: "'इंदिरा गांधी नहर' को किस नदी से पानी मिलता है?",
        answers: shuffle([
            { text: "यमुना", correct: false },
            { text: "सतलज और ब्यास", correct: true },
            { text: "रावी और चिनाब", correct: false },
            { text: "झेलम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंदिरा गांधी नहर को सतलज और ब्यास नदियों के संगम पर बने हरिके बैराज से पानी मिलता है।"
    },
    {
        question: "'नर्मदा' नदी का उद्गम किस पर्वत श्रृंखला से होता है?",
        answers: shuffle([
            { text: "विंध्य", correct: false },
            { text: "अरावली", correct: false },
            { text: "सतपुड़ा", correct: false },
            { text: "मैकाल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नर्मदा नदी का उद्गम मध्य प्रदेश में मैकाल पर्वत श्रृंखला की अमरकंटक चोटी से होता है।"
    },
    {
        question: "'राप्ती' नदी का उद्गम किस देश में होता है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "नेपाल", correct: true },
            { text: "तिब्बत", correct: false },
            { text: "भूटान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राप्ती नदी का उद्गम नेपाल में होता है और यह भारत में बहते हुए घाघरा नदी में मिलती है।"
    },
    {
        question: "निम्नलिखित में से कौन सी नदी 'पश्चिमी घाट' से निकलती है और पूर्व की ओर बहती है?",
        answers: shuffle([
            { text: "नर्मदा", correct: false },
            { text: "ताप्ती", correct: false },
            { text: "गोदावरी", correct: true },
            { text: "माही", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोदावरी नदी पश्चिमी घाट के त्र्यंबकेश्वर से निकलती है और पूर्व की ओर बहते हुए बंगाल की खाड़ी में गिरती है।"
    },
    {
        question: "'इंद्रावती' नदी किसकी सहायक नदी है?",
        answers: shuffle([
            { text: "महानदी", correct: false },
            { text: "गोदावरी", correct: true },
            { text: "कृष्णा", correct: false },
            { text: "कावेरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंद्रावती नदी गोदावरी की एक प्रमुख सहायक नदी है, जो ओडिशा और छत्तीसगढ़ से होकर बहती है।"
    },
    {
        question: "'दामोदर' नदी का उद्गम किस पठार से होता है?",
        answers: shuffle([
            { text: "दक्कन का पठार", correct: false },
            { text: "मालवा का पठार", correct: false },
            { text: "छोटानागपुर का पठार", correct: true },
            { text: "मेघालय का पठार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दामोदर नदी का उद्गम झारखंड में छोटानागपुर पठार से होता है।"
    },
    {
        question: "'चिनाब' नदी का दूसरा नाम क्या है?",
        answers: shuffle([
            { text: "अस्कानी", correct: true },
            { text: "वितस्ता", correct: false },
            { text: "परुष्णी", correct: false },
            { text: "विपाशा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चिनाब नदी को वैदिक काल में 'अस्कनी' के नाम से जाना जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> वितस्ता झेलम का, परुष्णी रावी का और विपाशा ब्यास का प्राचीन नाम है।"
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