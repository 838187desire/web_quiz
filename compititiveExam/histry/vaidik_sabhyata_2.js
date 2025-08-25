const questions = [
    {
        topHeading: "वैदिक सभ्यता पर आधारित बहुविकल्पी प्रश्न part 2 (quiz_no.16)"
    },
    {
        question: "वैदिक काल में 'गोपथ ब्राह्मण' का संबंध किस वेद से है?",
        answers: [
            { text: "ऋग्वेद", correct: false },
            { text: "सामवेद", correct: false },
            { text: "यजुर्वेद", correct: false },
            { text: "अथर्ववेद", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोपथ ब्राह्मण अथर्ववेद का एकमात्र उपलब्ध ब्राह्मण ग्रंथ है।<br><br><i class='fa-solid fa-angles-right icon'></i> ब्राह्मण ग्रंथ वेदों की व्याख्या करते हैं।"
    },
    {
        question: "'गायत्री मंत्र' की रचना किसने की थी?",
        answers: [
            { text: "वशिष्ठ", correct: false },
            { text: "विश्वामित्र", correct: true },
            { text: "इंद्र", correct: false },
            { text: "परशुराम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रसिद्ध गायत्री मंत्र की रचना महर्षि विश्वामित्र ने की थी और यह ऋग्वेद के तीसरे मंडल में सूर्य देवता सावित्री को समर्पित है।"
    },
    {
        question: "वैदिक काल में 'अग्नि' का क्या महत्व था?",
        answers: [
            { text: "वह केवल एक प्राकृतिक तत्व था।", correct: false },
            { text: "उसे देवताओं और मनुष्यों के बीच मध्यस्थ माना जाता था।", correct: true },
            { text: "उसे युद्ध का देवता माना जाता था।", correct: false },
            { text: "उसे वनस्पति का देवता माना जाता था।", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अग्नि को देवताओं और मनुष्यों के बीच मध्यस्थ (mediator) माना जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह माना जाता था कि यज्ञ की आहुतियाँ अग्नि के माध्यम से देवताओं तक पहुँचती थीं।"
    },
    {
        question: "'ऋग्वेद' के किस मंडल में 'सोम' देवता का उल्लेख है?",
        answers: [
            { text: "7वें", correct: false },
            { text: "8वें", correct: false },
            { text: "9वें", correct: true },
            { text: "10वें", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद का नौवां मंडल पूरी तरह से सोम देवता को समर्पित है, जो एक पौधे से बनाए जाने वाले पवित्र पेय के देवता थे।"
    },
    {
        question: "'वेदों' को किस नाम से जाना जाता है?",
        answers: [
            { text: "स्मृति", correct: false },
            { text: "श्रुति", correct: true },
            { text: "स्मृति और श्रुति दोनों", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेदों को 'श्रुति' कहा जाता है, जिसका अर्थ है 'सुना हुआ'।<br><br><i class='fa-solid fa-angles-right icon'></i> ऐसा माना जाता है कि ये ज्ञान सीधे ऋषियों को सुनाया गया था और मौखिक रूप से एक पीढ़ी से दूसरी पीढ़ी तक पहुँचाया गया।"
    },
    {
        question: "उत्तर वैदिक काल में 'राजसूय यज्ञ' का क्या उद्देश्य था?",
        answers: [
            { text: "राजा को सर्वोच्च शक्ति प्रदान करना", correct: true },
            { text: "राज्य की समृद्धि सुनिश्चित करना", correct: false },
            { text: "राजा को पापों से मुक्त करना", correct: false },
            { text: "राजा के उत्तराधिकारी का अभिषेक करना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजसूय यज्ञ एक राज्याभिषेक समारोह था, जिसका उद्देश्य राजा को सर्वोच्च शक्ति और दैवीय अधिकार प्रदान करना था।"
    },
    {
        question: "ऋग्वैदिक काल में 'विदुषी' महिलाओं में कौन शामिल थी?",
        answers: [
            { text: "लोपामुद्रा और गार्गी", correct: false },
            { text: "लोपामुद्रा और घोषा", correct: true },
            { text: "घोषा और मैत्रेयी", correct: false },
            { text: "गार्गी और मैत्रेयी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोपामुद्रा और घोषा ऋग्वैदिक काल की विदुषी महिलाएं थीं, जिन्होंने ऋग्वेद के कुछ मंत्रों की रचना की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> गार्गी और मैत्रेयी का संबंध उत्तर वैदिक काल से है।"
    },
    {
        question: "'उपनिषद' का शाब्दिक अर्थ क्या है?",
        answers: [
            { text: "राजा के पास बैठना", correct: false },
            { text: "गुरु के पास बैठना", correct: true },
            { text: "ईश्वर के पास बैठना", correct: false },
            { text: "यज्ञ के पास बैठना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उपनिषद का अर्थ है 'गुरु के समीप बैठना' और ज्ञान प्राप्त करना।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें गुरु-शिष्य परंपरा के माध्यम से प्राप्त दार्शनिक ज्ञान का वर्णन है।"
    },
    {
        question: "'अथर्ववेद' का उपवेद क्या है?",
        answers: [
            { text: "आयुर्वेद", correct: false },
            { text: "धनुर्वेद", correct: false },
            { text: "गंधर्ववेद", correct: false },
            { text: "शिल्पवेद", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अथर्ववेद का उपवेद शिल्पवेद है, जो स्थापत्य कला और अन्य कलाओं से संबंधित है।"
    },
    {
        question: "ऋग्वैदिक काल में 'विदुषी' महिलाओं के संदर्भ में, किस महिला ने 'दार्शनिक वाद-विवाद' में भाग लिया था?",
        answers: [
            { text: "घोषा", correct: false },
            { text: "लोपामुद्रा", correct: false },
            { text: "गार्गी", correct: true },
            { text: "अपाला", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गार्गी का उल्लेख बृहदारण्यक उपनिषद में मिलता है, जहाँ उन्होंने दार्शनिक याज्ञवल्क्य के साथ वाद-विवाद किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह घटना उत्तर वैदिक काल की है।"
    },
    {
        question: "वैदिक काल में 'पुर' (Pur) शब्द का क्या अर्थ था?",
        answers: [
            { text: "राजा", correct: false },
            { text: "नगर या किला", correct: true },
            { text: "गाँव", correct: false },
            { text: "नदी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पुर' का अर्थ नगर या किला था।<br><br><i class='fa-solid fa-angles-right icon'></i> इंद्र को 'पुरंदर' (किले तोड़ने वाला) कहा गया है, जो इस शब्द के महत्व को दर्शाता है।"
    },
    {
        question: "'गोत्र' शब्द का सर्वप्रथम उल्लेख कहाँ मिलता है?",
        answers: [
            { text: "ऋग्वेद", correct: true },
            { text: "सामवेद", correct: false },
            { text: "अथर्ववेद", correct: false },
            { text: "यजुर्वेद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गोत्र' शब्द का सर्वप्रथम उल्लेख ऋग्वेद में मिलता है, लेकिन इसका अर्थ उत्तर वैदिक काल में एक ही वंश के लोगों से जुड़ने के बाद अधिक स्पष्ट हो गया।"
    },
    {
        question: "ऋग्वैदिक काल में 'अहं' का क्या अर्थ था?",
        answers: [
            { text: "अनाज", correct: false },
            { text: "पानी", correct: false },
            { text: "लोहा", correct: false },
            { text: "धन (मुख्यतः गाय)", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अहं' शब्द का उपयोग धन के लिए किया गया था, जिसमें गाय सबसे महत्वपूर्ण संपत्ति थी।"
    },
    {
        question: "'ऋग्वेद' के तीसरे मंडल की रचना किसने की थी?",
        answers: [
            { text: "वशिष्ठ", correct: false },
            { text: "विश्वामित्र", correct: true },
            { text: "भरद्वाज", correct: false },
            { text: "वामदेव", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद के तीसरे मंडल की रचना विश्वामित्र ने की थी, जिसमें प्रसिद्ध 'गायत्री मंत्र' भी शामिल है।"
    },
    {
        question: "वैदिक काल में 'निष्क' क्या था?",
        answers: [
            { text: "सोने का सिक्का", correct: false },
            { text: "एक प्रकार का आभूषण", correct: true },
            { text: "भूमि माप की इकाई", correct: false },
            { text: "एक प्रकार का कर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक काल में निष्क एक सोने का आभूषण था, जिसे विनिमय के साधन के रूप में भी प्रयोग किया जाता था।"
    },
    {
        question: "ऋग्वैदिक काल के सबसे प्रमुख देवता कौन थे?",
        answers: [
            { text: "अग्नि", correct: false },
            { text: "वरुण", correct: false },
            { text: "इंद्र", correct: true },
            { text: "सोम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंद्र ऋग्वैदिक काल के सबसे प्रमुख देवता थे, जिन्हें 'पुरंदर' (किले तोड़ने वाला) कहा गया है और ऋग्वेद में उनके लिए 250 से अधिक सूक्त समर्पित हैं।"
    },
    {
        question: "'वेदांग' का क्या कार्य था?",
        answers: [
            { text: "वेदों की व्याख्या करना", correct: false },
            { text: "वेदों का संकलन करना", correct: false },
            { text: "वेदों को समझने में मदद करना", correct: true },
            { text: "यज्ञों का वर्णन करना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेदांग छह सहायक ग्रंथ थे, जो वेदों के सही उच्चारण, अर्थ और अनुष्ठान को समझने में सहायता करते थे।"
    },
    {
        question: "'यज्ञ' का उल्लेख सर्वप्रथम किस वेद में मिलता है?",
        answers: [
            { text: "ऋग्वेद", correct: true },
            { text: "सामवेद", correct: false },
            { text: "यजुर्वेद", correct: false },
            { text: "अथर्ववेद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यज्ञों का सर्वप्रथम उल्लेख ऋग्वेद में मिलता है, लेकिन यजुर्वेद में उनकी विस्तृत विधियाँ दी गई हैं।"
    },
    {
        question: "उत्तर वैदिक काल में 'विशपति' (Vishpati) कौन था?",
        answers: [
            { text: "ग्राम का मुखिया", correct: false },
            { text: "विश (कबीले के उप-समूह) का मुखिया", correct: true },
            { text: "राजा", correct: false },
            { text: "पुरोहित", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर वैदिक काल में, 'विशपति' विश नामक कबीले के उप-समूह का मुखिया होता था।"
    },
    {
        question: "वैदिक काल में 'पणि' किस वर्ग के थे?",
        answers: [
            { text: "पुजारी", correct: false },
            { text: "योद्धा", correct: false },
            { text: "व्यापारी", correct: true },
            { text: "शिल्पी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पणि' एक व्यापारी वर्ग था जो व्यापार और वाणिज्य से जुड़ा था।"
    },
    {
        question: "'आयुर्वेद' किसका उपवेद है?",
        answers: [
            { text: "ऋग्वेद", correct: true },
            { text: "सामवेद", correct: false },
            { text: "यजुर्वेद", correct: false },
            { text: "अथर्ववेद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आयुर्वेद, जो चिकित्सा विज्ञान से संबंधित है, ऋग्वेद का उपवेद है।"
    },
    {
        question: "'ऋग्वेद' के किस मंडल में 'सोम' का उल्लेख है?",
        answers: [
            { text: "7वें", correct: false },
            { text: "8वें", correct: false },
            { text: "9वें", correct: true },
            { text: "10वें", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद का नौवां मंडल 'सोम' को समर्पित है, जो एक पौधे से प्राप्त पवित्र पेय था।"
    },
    {
        question: "वैदिक काल में 'पशुपालन' के बाद दूसरा सबसे महत्वपूर्ण व्यवसाय क्या था?",
        answers: [
            { text: "व्यापार", correct: false },
            { text: "कृषि", correct: true },
            { text: "शिकार", correct: false },
            { text: "हस्तशिल्प", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक काल में पशुपालन मुख्य व्यवसाय था, लेकिन कृषि भी दूसरा सबसे महत्वपूर्ण व्यवसाय था, जिसका महत्व उत्तर वैदिक काल में और बढ़ गया।"
    },
    {
        question: "'दशराज्ञ युद्ध' का उल्लेख ऋग्वेद के किस मंडल में है?",
        answers: [
            { text: "7वें", correct: true },
            { text: "8वें", correct: false },
            { text: "9वें", correct: false },
            { text: "10वें", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दशराज्ञ युद्ध' (दस राजाओं का युद्ध) का वर्णन ऋग्वेद के सातवें मंडल में मिलता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भरत और पुरु कबीलों के बीच लड़ा गया था।"
    },
    {
        question: "वैदिक काल में 'गोत्र' का क्या अर्थ था?",
        answers: [
            { text: "एक ही गाँव के लोग", correct: false },
            { text: "एक ही स्थान पर रहने वाले लोग", correct: false },
            { text: "एक ही कुल या वंश के लोग", correct: true },
            { text: "राजा का परिवार", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गोत्र' का अर्थ एक ही वंश या कुल के लोग थे, जो एक सामान्य पूर्वज से उतरे थे।<br><br><i class='fa-solid fa-angles-right icon'></i> एक ही गोत्र में विवाह वर्जित था।"
    },
    {
        question: "वैदिक काल में 'वर्ण व्यवस्था' का आधार क्या था?",
        answers: shuffle([
            { text: "जन्म", correct: false },
            { text: "कर्म (व्यवसाय)", correct: true },
            { text: "निवास स्थान", correct: false },
            { text: "शिक्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रारंभिक ऋग्वैदिक काल में वर्ण व्यवस्था का आधार कर्म या व्यवसाय था।<br><br><i class='fa-solid fa-angles-right icon'></i> एक ही परिवार के सदस्य अलग-अलग वर्णों से संबंधित हो सकते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उत्तर वैदिक काल में यह व्यवस्था जन्म पर आधारित हो गई।"
    },
    {
        question: "'ऋग्वेद' के किस मंडल में 'गाय' का उल्लेख 176 बार हुआ है?",
        answers: shuffle([
            { text: "पहले मंडल में", correct: false },
            { text: "सातवें मंडल में", correct: false },
            { text: "आठवें मंडल में", correct: false },
            { text: "इनमें से कोई नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक भ्रामक प्रश्न है।<br><br><i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में गाय (गौ) शब्द का उल्लेख लगभग 176 बार हुआ है, लेकिन यह किसी एक विशेष मंडल में नहीं, बल्कि पूरे ऋग्वेद में है।"
    },
    {
        question: "'गायत्री मंत्र' का उल्लेख ऋग्वेद के किस मंडल में है?",
        answers: shuffle([
            { text: "पहले", correct: false },
            { text: "तीसरे", correct: true },
            { text: "नौवें", correct: false },
            { text: "दसवें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गायत्री मंत्र का उल्लेख ऋग्वेद के तीसरे मंडल में है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मंत्र सूर्य देवता सावित्री को समर्पित है और इसकी रचना विश्वामित्र ने की थी।"
    },
    {
        question: "'अथर्ववेद' का उपवेद क्या है?",
        answers: shuffle([
            { text: "आयुर्वेद", correct: false },
            { text: "धनुर्वेद", correct: false },
            { text: "गंधर्ववेद", correct: false },
            { text: "शिल्पवेद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अथर्ववेद का उपवेद शिल्पवेद है, जो वास्तुकला और अन्य कलाओं से संबंधित है।"
    },
    {
        question: "'उपनिषद' किस पर आधारित हैं?",
        answers: shuffle([
            { text: "धार्मिक अनुष्ठानों पर", correct: false },
            { text: "दर्शन पर", correct: true },
            { text: "यज्ञों पर", correct: false },
            { text: "इतिहास पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उपनिषद भारतीय दर्शन के मूल स्रोत हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इनमें आत्मा, ब्रह्म, मोक्ष और जीवन-मृत्यु के चक्र जैसे गूढ़ दार्शनिक विषयों पर चर्चा की गई है।"
    },
    {
        question: "वैदिक काल में 'गोत्र' का क्या अर्थ था?",
        answers: shuffle([
            { text: "एक ही गाँव में रहने वाले लोग", correct: false },
            { text: "एक ही परिवार के लोग", correct: false },
            { text: "एक ही वंश या कुल के लोग", correct: true },
            { text: "राजा के सैनिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गोत्र' एक ही वंश के लोगों को संदर्भित करता था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका अर्थ एक ही गोशाला या 'गो-स्थावर' (गायों का बाड़ा) से संबंधित लोगों से था।"
    },
    {
        question: "'दशराज्ञ युद्ध' का उल्लेख ऋग्वेद के किस मंडल में है?",
        answers: shuffle([
            { text: "सातवें मंडल में", correct: true },
            { text: "आठवें मंडल में", correct: false },
            { text: "नौवें मंडल में", correct: false },
            { text: "दसवें मंडल में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दशराज्ञ युद्ध का वर्णन ऋग्वेद के सातवें मंडल में मिलता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भरत और पुरु कबीलों के बीच परुष्णी (रावी) नदी के तट पर लड़ा गया था।"
    },
    {
        question: "वैदिक काल में 'नदीतमा' (सबसे पवित्र नदी) किसे कहा गया है?",
        answers: shuffle([
            { text: "सिंधु", correct: false },
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: false },
            { text: "सरस्वती", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में सरस्वती नदी को 'नदीतमा' (सबसे पवित्र नदी) और 'अम्बितमा' (सबसे श्रेष्ठ माता) कहा गया है।"
    },
    {
        question: "'सत्यमेव जयते' किस उपनिषद से लिया गया है?",
        answers: shuffle([
            { text: "बृहदारण्यक", correct: false },
            { text: "कठ", correct: false },
            { text: "मुण्डक", correct: true },
            { text: "ऐतरेय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सत्यमेव जयते' (सत्य की ही जीत होती है) मुण्डक उपनिषद से लिया गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत का राष्ट्रीय आदर्श वाक्य भी है।"
    },
    {
        question: "'सप्त सैंधव' क्षेत्र में कौन सी नदियाँ शामिल थीं?",
        answers: shuffle([
            { text: "गंगा, यमुना, सरस्वती", correct: false },
            { text: "सिंधु और उसकी पाँच सहायक नदियाँ", correct: false },
            { text: "सिंधु और उसकी पाँच सहायक नदियाँ और सरस्वती नदी", correct: true },
            { text: "नर्मदा, गोदावरी, कृष्णा, कावेरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सप्त सैंधव' का अर्थ है 'सात नदियों का प्रदेश', जिसमें सिंधु, झेलम, रावी, चेनाब, सतलुज, ब्यास और सरस्वती नदियाँ शामिल थीं।"
    },
    {
        question: "वैदिक काल में 'निष्क' क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का सिक्का", correct: false },
            { text: "एक सोने का आभूषण", correct: true },
            { text: "एक धार्मिक अनुष्ठान", correct: false },
            { text: "भूमि माप की इकाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक काल में 'निष्क' सोने का एक आभूषण था।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में इसे विनिमय के साधन (सिक्के) के रूप में भी प्रयोग किया जाने लगा।"
    },
    {
        question: "'वेदांग' की संख्या कितनी है?",
        answers: shuffle([
            { text: "4", correct: false },
            { text: "6", correct: true },
            { text: "8", correct: false },
            { text: "10", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेदांग छह सहायक ग्रंथ हैं: शिक्षा, कल्प, व्याकरण, निरुक्त, छंद और ज्योतिष।<br><br><i class='fa-solid fa-angles-right icon'></i> ये वेदों को समझने में सहायक होते हैं।"
    },
    {
        question: "वैदिक काल में 'अग्नि' का क्या महत्व था?",
        answers: shuffle([
            { text: "वह केवल एक प्राकृतिक शक्ति थी।", correct: false },
            { text: "वह देवताओं और मनुष्यों के बीच मध्यस्थ थी।", correct: true },
            { text: "वह युद्ध की देवी थी।", correct: false },
            { text: "वह कृषि की देवी थी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अग्नि को देवताओं और मनुष्यों के बीच मध्यस्थ (mediator) माना जाता था, क्योंकि यज्ञ की आहुतियाँ उसके माध्यम से देवताओं तक पहुँचती थीं।"
    },
    {
        question: "ऋग्वैदिक काल के सबसे प्रमुख देवता कौन थे?",
        answers: shuffle([
            { text: "अग्नि", correct: false },
            { text: "वरुण", correct: false },
            { text: "इंद्र", correct: true },
            { text: "सोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंद्र ऋग्वैदिक काल के सबसे महत्वपूर्ण देवता थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्हें 'पुरंदर' (किले तोड़ने वाला) और वर्षा का देवता भी माना जाता था।"
    },
    {
        question: "'यजुर्वेद' किससे संबंधित है?",
        answers: shuffle([
            { text: "मंत्रों से", correct: false },
            { text: "संगीत से", correct: false },
            { text: "बलिदान विधि से", correct: true },
            { text: "जादू-टोना से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यजुर्वेद में यज्ञों और बलिदानों से संबंधित विधियों और मंत्रों का वर्णन है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एकमात्र वेद है जो गद्य और पद्य दोनों में लिखा गया है।"
    },
    {
        question: "'ऋग्वैदिक काल' की शासन प्रणाली कैसी थी?",
        answers: shuffle([
            { text: "राजतंत्रात्मक", correct: true },
            { text: "गणतंत्रात्मक", correct: false },
            { text: "कुलीनतंत्रात्मक", correct: false },
            { text: "वंशानुगत राजतंत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक काल की शासन प्रणाली राजतंत्रात्मक थी, जहाँ राजा (राजन) का पद वंशानुगत नहीं था और वह कबीले के मुखिया के रूप में चुना जाता था।"
    },
    {
        question: "उत्तर वैदिक काल में 'राजा' की शक्ति में क्या बदलाव आया?",
        answers: shuffle([
            { text: "राजा की शक्ति कम हो गई।", correct: false },
            { text: "राजा की शक्ति बढ़ गई और वह निरंकुश होने लगा।", correct: true },
            { text: "राजा का चुनाव बंद हो गया।", correct: false },
            { text: "राजा का पद समाप्त हो गया।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर वैदिक काल में, राजा की शक्ति बढ़ी और राजशाही वंशानुगत होने लगी।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने अपनी शक्ति को बढ़ाने के लिए राजसूय और अश्वमेध जैसे बड़े यज्ञ करवाए।"
    },
    {
        question: "वैदिक काल में 'सभा' और 'समिति' क्या थीं?",
        answers: shuffle([
            { text: "राजा के अधिकारी", correct: false },
            { text: "लोकप्रिय सभाएं", correct: true },
            { text: "कर संग्रह करने वाले", correct: false },
            { text: "धार्मिक अनुष्ठान करने वाले", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सभा और समिति राजा को सलाह देने वाली दो महत्वपूर्ण लोकप्रिय सभाएं थीं।"
    },
    {
        question: "'पुराणों' की संख्या कितनी है?",
        answers: shuffle([
            { text: "12", correct: false },
            { text: "16", correct: false },
            { text: "18", correct: true },
            { text: "20", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुराणों की कुल संख्या 18 है।"
    },
    {
        question: "'उपनिषदों' की संख्या कितनी है?",
        answers: shuffle([
            { text: "100", correct: false },
            { text: "108", correct: true },
            { text: "112", correct: false },
            { text: "120", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उपनिषदों की कुल संख्या 108 है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये वेदांत दर्शन के मूल स्रोत हैं।"
    },
    {
        question: "'ब्रह्म' शब्द का सर्वप्रथम उल्लेख किस उपनिषद में मिलता है?",
        answers: shuffle([
            { text: "मुण्डक", correct: false },
            { text: "बृहदारण्यक", correct: true },
            { text: "कठ", correct: false },
            { text: "केन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहदारण्यक उपनिषद सबसे प्राचीन उपनिषदों में से एक है और इसमें ब्रह्म और आत्मा की अवधारणा पर विस्तार से चर्चा की गई है।"
    },
    {
        question: "'दशराज्ञ युद्ध' का संबंध किस वेद से है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: true },
            { text: "सामवेद", correct: false },
            { text: "यजुर्वेद", correct: false },
            { text: "अथर्ववेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दशराज्ञ युद्ध' का वर्णन ऋग्वेद के सातवें मंडल में मिलता है, जहाँ भरत और पुरु कबीलों के बीच युद्ध का उल्लेख है।"
    },
    {
        question: "वैदिक काल में 'लांगल' शब्द का प्रयोग किसके लिए किया गया था?",
        answers: shuffle([
            { text: "हल", correct: true },
            { text: "अनाज", correct: false },
            { text: "गाँव", correct: false },
            { text: "राजा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर वैदिक काल में कृषि का महत्व बढ़ने के साथ 'लांगल' (हल) का उल्लेख मिलता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'सीरा' हल द्वारा खींची गई रेखा को कहा जाता था।"
    },
    {
        question: "'पुरुष सूक्त' का उल्लेख ऋग्वेद के किस मंडल में है?",
        answers: shuffle([
            { text: "7वें", correct: false },
            { text: "8वें", correct: false },
            { text: "9वें", correct: false },
            { text: "10वें", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद के 10वें मंडल के पुरुष सूक्त में चार वर्णों (ब्राह्मण, क्षत्रिय, वैश्य, शूद्र) की उत्पत्ति का वर्णन है।"
    },
    {
        question: "'वैदिक काल' में सबसे छोटी सामाजिक इकाई क्या थी?",
        answers: shuffle([
            { text: "ग्राम", correct: false },
            { text: "विश", correct: false },
            { text: "जन", correct: false },
            { text: "कुल (परिवार)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैदिक समाज की सबसे छोटी इकाई कुल या परिवार थी, जिसका मुखिया 'कुलप' कहलाता था।"
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