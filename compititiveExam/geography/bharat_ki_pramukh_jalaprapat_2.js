const questions = [ 
    {
        topHeading: "भारत के प्रमुख जलप्रपात पर आधारित बहुविकल्पीय प्रश्न part 2  (quiz_no. 94)."
    },
    {
        question: "'कालिगोंदला जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "ओडिशा", correct: false },
            { text: "आंध्र प्रदेश", correct: true },
            { text: "छत्तीसगढ़", correct: false },
            { text: "तेलंगाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालिगोंदला जलप्रपात आंध्र प्रदेश के विशाखापत्तनम जिले में स्थित है।"
    },
    {
        question: "'बारेहीपानी जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "ओडिशा", correct: true },
            { text: "झारखंड", correct: false },
            { text: "पश्चिम बंगाल", correct: false },
            { text: "छत्तीसगढ़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बारेहीपानी जलप्रपात ओडिशा के मयूरभंज जिले में सिमलीपाल राष्ट्रीय उद्यान में स्थित है।"
    },
    {
        question: "'एलीफेंटा जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "नागालैंड", correct: false },
            { text: "मणिपुर", correct: false },
            { text: "असम", correct: false },
            { text: "मेघालय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एलीफेंटा जलप्रपात मेघालय की राजधानी शिलांग के पास स्थित एक प्रसिद्ध जलप्रपात है।"
    },
    {
        question: "'बरकाना जलप्रपात' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "वराही", correct: false },
            { text: "सीता", correct: true },
            { text: "शरावती", correct: false },
            { text: "गोकक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बरकाना जलप्रपात कर्नाटक में सीता नदी पर स्थित है।"
    },
    {
        question: "'नूरानांग जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "अरुणाचल प्रदेश", correct: true },
            { text: "सिक्किम", correct: false },
            { text: "असम", correct: false },
            { text: "मेघालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नूरानांग जलप्रपात अरुणाचल प्रदेश के पश्चिम कामेंग जिले में स्थित है।"
    },
    {
        question: "'मल्लेला तीर्थम जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "कर्नाटक", correct: false },
            { text: "आंध्र प्रदेश", correct: false },
            { text: "तेलंगाना", correct: true },
            { text: "केरल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मल्लेला तीर्थम जलप्रपात तेलंगाना में नागार्जुन सागर श्रीशैलम टाइगर रिजर्व के भीतर स्थित है।"
    },
    {
        question: "'दुधानोद जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "मध्य प्रदेश", correct: false },
            { text: "छत्तीसगढ़", correct: true },
            { text: "झारखंड", correct: false },
            { text: "ओडिशा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दुधानोद जलप्रपात छत्तीसगढ़ में कांकेर जिले में स्थित है।"
    },
    {
        question: "'अथिरापिल्ली जलप्रपात' को भारत का 'नियाग्रा जलप्रपात' कहा जाता है। यह किस राज्य में है?",
        answers: shuffle([
            { text: "कर्नाटक", correct: false },
            { text: "तमिलनाडु", correct: false },
            { text: "केरल", correct: true },
            { text: "गोवा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अथिरापिल्ली जलप्रपात केरल में चालाकुडी नदी पर स्थित है।"
    },
    {
        question: "'बिशोई जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "झारखंड", correct: false },
            { text: "ओडिशा", correct: true },
            { text: "छत्तीसगढ़", correct: false },
            { text: "मध्य प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिशोई जलप्रपात ओडिशा के मयूरभंज जिले में स्थित है।"
    },
    {
        question: "'कूपर जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "मेघालय", correct: true },
            { text: "असम", correct: false },
            { text: "अरुणाचल प्रदेश", correct: false },
            { text: "मणिपुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कूपर जलप्रपात मेघालय के मासिनराम के पास स्थित है।"
    },
    {
        question: "'पायकारा जलप्रपात' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "कावेरी", correct: false },
            { text: "पेरियार", correct: false },
            { text: "पायकारा", correct: true },
            { text: "कृष्णा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पायकारा जलप्रपात तमिलनाडु के नीलगिरि जिले में पायकारा नदी पर स्थित है।"
    },
    {
        question: "'पुन्नालगुंड जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "आंध्र प्रदेश", correct: false },
            { text: "तेलंगाना", correct: true },
            { text: "तमिलनाडु", correct: false },
            { text: "कर्नाटक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुन्नालगुंड जलप्रपात तेलंगाना के आदिलाबाद जिले में स्थित है।"
    },
    {
        question: "'माहादेई जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "गोवा", correct: true },
            { text: "महाराष्ट्र", correct: false },
            { text: "कर्नाटक", correct: false },
            { text: "केरल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माहादेई जलप्रपात गोवा के सत्तरी तालुक में स्थित है।"
    },
    {
        question: "'एलीफेंटा जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "नागालैंड", correct: false },
            { text: "मणिपुर", correct: false },
            { text: "असम", correct: false },
            { text: "मेघालय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एलीफेंटा जलप्रपात मेघालय की राजधानी शिलांग के पास स्थित एक प्रसिद्ध जलप्रपात है।"
    },
    {
        question: "'कूर्ग जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "कर्नाटक", correct: true },
            { text: "केरल", correct: false },
            { text: "तमिलनाडु", correct: false },
            { text: "आंध्र प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कूर्ग जलप्रपात, जिसे अब्बी जलप्रपात भी कहते हैं, कर्नाटक में कूर्ग के पास स्थित है।"
    },
    {
        question: "'धुआंधार जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "महाराष्ट्र", correct: false },
            { text: "गुजरात", correct: false },
            { text: "मध्य प्रदेश", correct: true },
            { text: "राजस्थान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धुआंधार जलप्रपात मध्य प्रदेश के जबलपुर में नर्मदा नदी पर स्थित है।"
    },
    {
        question: "'तिरुमला जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "केरल", correct: false },
            { text: "तमिलनाडु", correct: false },
            { text: "आंध्र प्रदेश", correct: true },
            { text: "कर्नाटक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तिरुमला जलप्रपात आंध्र प्रदेश के चित्तूर जिले में स्थित है।"
    },
    {
        question: "'अम्बोलि घाट जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "महाराष्ट्र", correct: true },
            { text: "गोवा", correct: false },
            { text: "गुजरात", correct: false },
            { text: "कर्नाटक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंबोली घाट जलप्रपात महाराष्ट्र के सिंधुदुर्ग जिले में स्थित है।"
    },
    {
        question: "'गौतमधारा जलप्रपात' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "दामोदर", correct: false },
            { text: "राडू", correct: true },
            { text: "स्वर्णरेखा", correct: false },
            { text: "भेड़ा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतमधारा जलप्रपात, जिसे जोन्हा जलप्रपात भी कहते हैं, झारखंड में राडू नदी पर स्थित है।"
    },
    {
        question: "'कुमुदवन जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "ओडिशा", correct: false },
            { text: "छत्तीसगढ़", correct: true },
            { text: "झारखंड", correct: false },
            { text: "मध्य प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुमुदवन जलप्रपात छत्तीसगढ़ के बस्तर जिले में स्थित है।"
    },
    {
        question: "'सोमेश्वर जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "महाराष्ट्र", correct: true },
            { text: "गुजरात", correct: false },
            { text: "मध्य प्रदेश", correct: false },
            { text: "राजस्थान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोमेश्वर जलप्रपात महाराष्ट्र के नासिक जिले में गोदावरी नदी पर स्थित है।"
    },
    {
        question: "'मावफ्लांग जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "मेघालय", correct: true },
            { text: "असम", correct: false },
            { text: "अरुणाचल प्रदेश", correct: false },
            { text: "त्रिपुरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मावफ्लांग जलप्रपात मेघालय के पूर्वी खासी हिल्स जिले में स्थित है।"
    },
    {
        question: "'मुथियारा जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "केरल", correct: false },
            { text: "तमिलनाडु", correct: false },
            { text: "कर्नाटक", correct: false },
            { text: "आंध्र प्रदेश", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुथियारा जलप्रपात आंध्र प्रदेश के अनंतपुर जिले में स्थित है।"
    },
    {
        question: "'मडगुट्टी जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "महाराष्ट्र", correct: false },
            { text: "गोवा", correct: false },
            { text: "कर्नाटक", correct: true },
            { text: "केरल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मडगुट्टी जलप्रपात कर्नाटक के उत्तर कन्नड़ जिले में स्थित है।"
    },
    {
        question: "'जमरदा जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "छत्तीसगढ़", correct: false },
            { text: "ओडिशा", correct: true },
            { text: "झारखंड", correct: false },
            { text: "मध्य प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जमरदा जलप्रपात ओडिशा के मयूरभंज जिले में स्थित है।"
    },
    {
        question: "'होगेनक्कल जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "कर्नाटक", correct: false },
            { text: "तमिलनाडु", correct: true },
            { text: "केरल", correct: false },
            { text: "आंध्र प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> होगेनक्कल जलप्रपात तमिलनाडु में कावेरी नदी पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे 'भारत का नियाग्रा' भी कहा जाता है।"
    },
    {
        question: "'दूधमा जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "आंध्र प्रदेश और ओडिशा", correct: true },
            { text: "तेलंगाना और छत्तीसगढ़", correct: false },
            { text: "कर्नाटक और केरल", correct: false },
            { text: "तमिलनाडु और केरल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दूधमा जलप्रपात मचकुंड नदी पर स्थित है, जो आंध्र प्रदेश और ओडिशा की सीमा बनाती है।"
    },
    {
        question: "'कुट्रालम जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "कर्नाटक", correct: false },
            { text: "तमिलनाडु", correct: true },
            { text: "केरल", correct: false },
            { text: "तेलंगाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुट्रालम जलप्रपात तमिलनाडु के तिरुनेलवेली जिले में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे 'दक्षिणी भारत का स्पा' भी कहा जाता है।"
    },
    {
        question: "'गिरा जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "महाराष्ट्र", correct: false },
            { text: "गुजरात", correct: true },
            { text: "मध्य प्रदेश", correct: false },
            { text: "राजस्थान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गिरा जलप्रपात गुजरात के डांग जिले में स्थित है।"
    },
    {
        question: "'चचाई जलप्रपात' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "नर्मदा", correct: false },
            { text: "बीहड़", correct: true },
            { text: "टोंस", correct: false },
            { text: "सोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चचाई जलप्रपात मध्य प्रदेश के रीवा जिले में बीहड़ नदी पर स्थित है।"
    },
    {
        question: "'पर्ल वैली जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "तमिलनाडु", correct: true },
            { text: "केरल", correct: false },
            { text: "आंध्र प्रदेश", correct: false },
            { text: "कर्नाटक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पर्ल वैली जलप्रपात तमिलनाडु के कन्याकुमारी जिले में स्थित है।"
    },
    {
        question: "'खंडधार जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "झारखंड", correct: false },
            { text: "ओडिशा", correct: true },
            { text: "छत्तीसगढ़", correct: false },
            { text: "मध्य प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खंडधार जलप्रपात ओडिशा के सुंदरगढ़ जिले में स्थित है।"
    },
    {
        question: "'पतालपानी जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "महाराष्ट्र", correct: false },
            { text: "गुजरात", correct: false },
            { text: "मध्य प्रदेश", correct: true },
            { text: "राजस्थान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पातालपानी जलप्रपात मध्य प्रदेश के इंदौर जिले में स्थित है।"
    },
    {
        question: "'रजत जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "हिमाचल प्रदेश", correct: false },
            { text: "उत्तराखंड", correct: false },
            { text: "मध्य प्रदेश", correct: true },
            { text: "जम्मू और कश्मीर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रजत जलप्रपात, जिसे 'रजत प्रपात' भी कहते हैं, मध्य प्रदेश के पचमढ़ी में स्थित है।"
    },
    {
        question: "'अथिरापिल्ली जलप्रपात' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "पेरियार", correct: false },
            { text: "चालकुडी", correct: true },
            { text: "पंबा", correct: false },
            { text: "कावेरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अथिरापिल्ली जलप्रपात केरल में चालकुडी नदी पर स्थित है।"
    },
    {
        question: "'वसुधारा जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "हिमाचल प्रदेश", correct: false },
            { text: "उत्तराखंड", correct: true },
            { text: "सिक्किम", correct: false },
            { text: "अरुणाचल प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वसुधारा जलप्रपात उत्तराखंड के बद्रीनाथ के पास स्थित है।"
    },
    {
        question: "'तिरुमला जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "केरल", correct: false },
            { text: "तमिलनाडु", correct: false },
            { text: "आंध्र प्रदेश", correct: true },
            { text: "कर्नाटक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तिरुमला जलप्रपात आंध्र प्रदेश के चित्तूर जिले में स्थित है।"
    },
    {
        question: "'सथोन जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "मेघालय", correct: true },
            { text: "असम", correct: false },
            { text: "त्रिपुरा", correct: false },
            { text: "मिजोरम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सथोन जलप्रपात मेघालय के चेरापूंजी के पास स्थित है।"
    },
    {
        question: "'नोह्संगिथियांग जलप्रपात' जिसे 'सेवन सिस्टर्स फॉल्स' भी कहते हैं, किस राज्य में है?",
        answers: shuffle([
            { text: "असम", correct: false },
            { text: "मेघालय", correct: true },
            { text: "त्रिपुरा", correct: false },
            { text: "मिजोरम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नोह्संगिथियांग जलप्रपात मेघालय के मासिनराम के पास स्थित है।"
    },
    {
        question: "'मंडूर जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "महाराष्ट्र", correct: false },
            { text: "गोवा", correct: false },
            { text: "कर्नाटक", correct: true },
            { text: "केरल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंडूर जलप्रपात कर्नाटक के कोडागु जिले में स्थित है।"
    },
    {
        question: "'नोहकालीकाई जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "असम", correct: false },
            { text: "मेघालय", correct: true },
            { text: "मणिपुर", correct: false },
            { text: "नागालैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नोहकालीकाई जलप्रपात मेघालय में चेरापूंजी के पास स्थित है<br><br><i class='fa-solid fa-angles-right icon'></i> और यह भारत के सबसे ऊंचे जलप्रपातों में से एक है।"
    },
    {
        question: "'तिरुमुरा जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "तमिलनाडु", correct: false },
            { text: "आंध्र प्रदेश", correct: true },
            { text: "कर्नाटक", correct: false },
            { text: "केरल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तिरुमुरा जलप्रपात आंध्र प्रदेश के चित्तूर जिले में स्थित है।"
    },
    {
        question: "'बिशोई जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "ओडिशा", correct: true },
            { text: "झारखंड", correct: false },
            { text: "छत्तीसगढ़", correct: false },
            { text: "पश्चिम बंगाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिशोई जलप्रपात ओडिशा के मयूरभंज जिले में स्थित है।"
    },
    {
        question: "'पुन्नालगुंड जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "आंध्र प्रदेश", correct: false },
            { text: "तेलंगाना", correct: true },
            { text: "तमिलनाडु", correct: false },
            { text: "कर्नाटक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुन्नालगुंड जलप्रपात तेलंगाना के आदिलाबाद जिले में स्थित है।"
    },
    {
        question: "'कपिलधारा जलप्रपात' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "ताप्ती", correct: false },
            { text: "नर्मदा", correct: true },
            { text: "साबरमती", correct: false },
            { text: "पेरियार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कपिलधारा जलप्रपात मध्य प्रदेश के अमरकंटक में नर्मदा नदी पर स्थित है।"
    },
    {
        question: "'खंडधार जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "छत्तीसगढ़", correct: false },
            { text: "ओडिशा", correct: true },
            { text: "झारखंड", correct: false },
            { text: "कर्नाटक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खंडधार जलप्रपात ओडिशा के सुंदरगढ़ जिले में स्थित है।"
    },
    {
        question: "'पायकारा जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "केरल", correct: false },
            { text: "कर्नाटक", correct: false },
            { text: "तमिलनाडु", correct: true },
            { text: "महाराष्ट्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पायकारा जलप्रपात तमिलनाडु के नीलगिरि जिले में स्थित है।"
    },
    {
        question: "'जमरदा जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "छत्तीसगढ़", correct: false },
            { text: "ओडिशा", correct: true },
            { text: "झारखंड", correct: false },
            { text: "मध्य प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जमरदा जलप्रपात ओडिशा के मयूरभंज जिले में स्थित है।"
    },
    {
        question: "'ककोलत जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "बिहार", correct: true },
            { text: "उत्तर प्रदेश", correct: false },
            { text: "झारखंड", correct: false },
            { text: "पश्चिम बंगाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ककोलत जलप्रपात बिहार के नवादा जिले में स्थित है।"
    },
    {
        question: "'लोध जलप्रपात' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "बूढ़ा नदी", correct: true },
            { text: "दामोदर नदी", correct: false },
            { text: "स्वर्णरेखा नदी", correct: false },
            { text: "कोयल नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोध जलप्रपात, जिसे बूढ़ा घाघ जलप्रपात भी कहते हैं, झारखंड में बूढ़ा नदी पर स्थित है।"
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