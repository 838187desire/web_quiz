const questions = [
    {
        topHeading: "वैदिक सभ्यता पर आधारित बहुविकल्पी प्रश्न part 3 (quiz_no.17)"
    },
    {
        question: "'गायत्री मंत्र' का उल्लेख किस वेद में है?",
        answers: [
            { text: "सामवेद", correct: false },
            { text: "यजुर्वेद", correct: false },
            { text: "अथर्ववेद", correct: false },
            { text: "ऋग्वेद", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रसिद्ध 'गायत्री मंत्र' ऋग्वेद के तीसरे मंडल में मिलता है, जिसकी रचना विश्वामित्र ने की थी।"
    },
    {
        question: "'ऋग्वेद' में 'अघन्या' शब्द किसके लिए प्रयोग किया गया है?",
        answers: [
            { text: "पुजारी", correct: false },
            { text: "गाय", correct: true },
            { text: "राजा", correct: false },
            { text: "स्त्री", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में गाय को 'अघन्या' कहा गया है, जिसका अर्थ है 'न मारे जाने योग्य'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह गाय के आर्थिक और धार्मिक महत्व को दर्शाता है।"
    },
    {
        question: "वैदिक काल में 'व्याकरण' की रचना किसने की थी?",
        answers: [
            { text: "पतंजलि", correct: false },
            { text: "पाणिनी", correct: true },
            { text: "यास्क", correct: false },
            { text: "गौतम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पाणिनी ने 'अष्टाध्यायी' नामक ग्रंथ की रचना की, जिसे संस्कृत व्याकरण का सबसे महत्वपूर्ण ग्रंथ माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उत्तर वैदिक काल के बाद की रचना है, लेकिन वैदिक भाषा को समझने में महत्वपूर्ण है।"
    },
    {
        question: "'सत्यमेव जयते' किस उपनिषद से लिया गया है?",
        answers: [
            { text: "बृहदारण्यक", correct: false },
            { text: "छांदोग्य", correct: false },
            { text: "मुण्डक", correct: true },
            { text: "कठ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सत्यमेव जयते' (सत्य की ही जीत होती है) भारत का राष्ट्रीय आदर्श वाक्य है, जिसे मुण्डक उपनिषद से लिया गया है।"
    },
    {
        question: "'वैदिक' शब्द किस पर आधारित है?",
        answers: [
            { text: "वेद", correct: true },
            { text: "पुराण", correct: false },
            { text: "उपनिषद", correct: false },
            { text: "स्मृति", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वैदिक' शब्द का सीधा संबंध 'वेद' से है, जो आर्यों के ज्ञान और साहित्य का मुख्य स्रोत हैं।"
    },
    {
        question: "'शूद्र' शब्द का सर्वप्रथम उल्लेख किस वेद में मिलता है?",
        answers: [
            { text: "सामवेद", correct: false },
            { text: "ऋग्वेद", correct: true },
            { text: "अथर्ववेद", correct: false },
            { text: "यजुर्वेद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शूद्र' शब्द का उल्लेख ऋग्वेद के 10वें मंडल के 'पुरुष सूक्त' में मिलता है, जहाँ चार वर्णों (ब्राह्मण, क्षत्रिय, वैश्य, शूद्र) की उत्पत्ति का वर्णन है।"
    },
    {
        question: "'सभा' और 'समिति' को प्रजापति की दो पुत्रियां किस वेद में कहा गया है?",
        answers: [
            { text: "ऋग्वेद", correct: false },
            { text: "यजुर्वेद", correct: false },
            { text: "अथर्ववेद", correct: true },
            { text: "सामवेद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अथर्ववेद में 'सभा' और 'समिति' को प्रजापति की दो पुत्रियां कहा गया है, जो इन राजनीतिक संस्थाओं के महत्व को दर्शाता है।"
    },
    {
        question: "वैदिक काल में 'यज्ञ' करने वाले ब्राह्मणों को क्या कहा जाता था?",
        answers: [
            { text: "होता", correct: false },
            { text: "उद्गाता", correct: false },
            { text: "पुरोहित", correct: true },
            { text: "अध्वर्यु", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पुरोहित' धार्मिक अनुष्ठानों और यज्ञों का संचालन करने वाला प्रमुख ब्राह्मण था।"
    },
    {
        question: "'वैदिक काल' में मुख्य रूप से किस नदी का उल्लेख हुआ है?",
        answers: [
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: false },
            { text: "सिंधु", correct: true },
            { text: "ब्रह्मपुत्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में सिंधु नदी का उल्लेख सबसे अधिक बार हुआ है, जो आर्यों के लिए इसका आर्थिक और भौगोलिक महत्व दर्शाता है।"
    },
    {
        question: "'ऋग्वेद' के किस मंडल में 'सोम' देवता का उल्लेख है?",
        answers: [
            { text: "7वें", correct: false },
            { text: "8वें", correct: false },
            { text: "9वें", correct: true },
            { text: "10वें", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद का नौवां मंडल पूरी तरह से 'सोम' देवता को समर्पित है, जो एक पवित्र पेय के देवता थे।"
    },
    {
        question: "'अथर्ववेद' किससे संबंधित है?",
        answers: [
            { text: "जादू-टोना और वशीकरण", correct: true },
            { text: "संगीत", correct: false },
            { text: "बलिदान विधि", correct: false },
            { text: "ईश्वर महिमा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अथर्ववेद में मुख्य रूप से जादू-टोना, वशीकरण, औषधियों और बीमारियों के उपचार से संबंधित मंत्रों का संकलन है।"
    },
    {
        question: "'सामवेद' का संबंध किससे है?",
        answers: [
            { text: "मंत्रों से", correct: false },
            { text: "यज्ञ से", correct: false },
            { text: "संगीत से", correct: true },
            { text: "औषधि से", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामवेद को 'भारतीय संगीत का जनक' माना जाता है, क्योंकि इसमें मंत्रों को गायन योग्य रूप में संकलित किया गया है।"
    },
    {
        question: "'यजुर्वेद' किससे संबंधित है?",
        answers: [
            { text: "मंत्रों से", correct: false },
            { text: "बलिदान विधि से", correct: true },
            { text: "संगीत से", correct: false },
            { text: "जादू-टोना से", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यजुर्वेद में यज्ञों और धार्मिक अनुष्ठानों की विधियों और नियमों का विस्तृत वर्णन है।"
    },
    {
        question: "वैदिक काल में 'वर्ण व्यवस्था' का आधार क्या था?",
        answers: [
            { text: "जन्म", correct: false },
            { text: "कर्म", correct: true },
            { text: "जाति", correct: false },
            { text: "निवास", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रारंभिक ऋग्वैदिक काल में वर्ण व्यवस्था का आधार कर्म या व्यवसाय था, जबकि उत्तर वैदिक काल में यह जन्म आधारित हो गई।"
    },
    {
        question: "'दशराज्ञ युद्ध' का उल्लेख ऋग्वेद के किस मंडल में है?",
        answers: [
            { text: "3वें", correct: false },
            { text: "7वें", correct: true },
            { text: "9वें", correct: false },
            { text: "10वें", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दशराज्ञ युद्ध' का वर्णन ऋग्वेद के सातवें मंडल में मिलता है, जो भरत और पुरु कबीलों के बीच लड़ा गया था।"
    },
    {
        question: "'वेदांग' की संख्या कितनी है?",
        answers: [
            { text: "4", correct: false },
            { text: "6", correct: true },
            { text: "8", correct: false },
            { text: "10", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेदों को समझने में सहायक छह वेदांग हैं: शिक्षा, कल्प, व्याकरण, निरुक्त, छंद और ज्योतिष।"
    },
    {
        question: "'उपनिषदों' की कुल संख्या कितनी है?",
        answers: [
            { text: "105", correct: false },
            { text: "108", correct: true },
            { text: "110", correct: false },
            { text: "112", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उपनिषदों की कुल संख्या 108 है।"
    },
    {
        question: "'पुराणों' की संख्या कितनी है?",
        answers: [
            { text: "16", correct: false },
            { text: "18", correct: true },
            { text: "20", correct: false },
            { text: "24", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुराणों की कुल संख्या 18 है।"
    },
    {
        question: "ऋग्वैदिक काल में 'विदुषी' महिलाओं में कौन शामिल नहीं थी?",
        answers: [
            { text: "लोपामुद्रा", correct: false },
            { text: "घोषा", correct: false },
            { text: "अपाला", correct: false },
            { text: "गार्गी", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गार्गी का उल्लेख बृहदारण्यक उपनिषद में मिलता है, जो उत्तर वैदिक काल से संबंधित है।<br><br><i class='fa-solid fa-angles-right icon'></i> लोपामुद्रा, घोषा और अपाला ऋग्वैदिक काल की विदुषी महिलाएं थीं।"
    },
    {
        question: "'वैदिक काल' में सबसे छोटी सामाजिक इकाई क्या थी?",
        answers: [
            { text: "जन", correct: false },
            { text: "विश", correct: false },
            { text: "ग्राम", correct: false },
            { text: "कुल", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैदिक समाज की सबसे छोटी इकाई कुल (परिवार) थी, जिसका मुखिया 'कुलप' कहलाता था।"
    },
    {
        question: "'ऋग्वेद' के किस मंडल में 'गायत्री मंत्र' का उल्लेख है?",
        answers: [
            { text: "1", correct: false },
            { text: "3", correct: true },
            { text: "8", correct: false },
            { text: "9", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गायत्री मंत्र की रचना विश्वामित्र ने की थी और इसका उल्लेख ऋग्वेद के तीसरे मंडल में है।"
    },
    {
        question: "वैदिक काल में 'पुरंदर' किसे कहा जाता था?",
        answers: [
            { text: "अग्नि", correct: false },
            { text: "वरुण", correct: false },
            { text: "इंद्र", correct: true },
            { text: "सूर्य", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंद्र को 'पुरंदर' (किले तोड़ने वाला) कहा गया है।"
    },
    {
        question: "'वेदों' को किस नाम से जाना जाता है?",
        answers: [
            { text: "स्मृति", correct: false },
            { text: "श्रुति", correct: true },
            { text: "श्रुति और स्मृति दोनों", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेदों को 'श्रुति' कहा जाता है, जिसका अर्थ है 'सुना हुआ', क्योंकि यह माना जाता है कि ज्ञान ऋषियों को सुनाया गया था।"
    },
    {
        question: "वैदिक काल में 'बलि' क्या था?",
        answers: [
            { text: "एक प्रकार का कर", correct: true },
            { text: "एक प्रकार का धार्मिक अनुष्ठान", correct: false },
            { text: "राजा का नाम", correct: false },
            { text: "एक प्रकार का यज्ञ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक काल में 'बलि' एक स्वैच्छिक भेंट थी, लेकिन उत्तर वैदिक काल में यह एक अनिवार्य कर बन गया था।"
    },
    {
        question: "वैदिक काल में 'गोत्र' का क्या अर्थ था?",
        answers: [
            { text: "गाँव", correct: false },
            { text: "एक ही स्थान पर रहने वाले लोग", correct: false },
            { text: "एक ही वंश या कुल के लोग", correct: true },
            { text: "राजा का परिवार", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गोत्र' का अर्थ एक ही वंश के लोगों से था, जो एक सामान्य पूर्वज से उतरे थे।<br><br><i class='fa-solid fa-angles-right icon'></i> एक ही गोत्र में विवाह वर्जित था।"
    },
    {
        question: "'गायत्री मंत्र' का उल्लेख किस वेद में है?",
        answers: shuffle([
            { text: "सामवेद", correct: false },
            { text: "यजुर्वेद", correct: false },
            { text: "अथर्ववेद", correct: false },
            { text: "ऋग्वेद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रसिद्ध 'गायत्री मंत्र' ऋग्वेद के तीसरे मंडल में मिलता है, जिसकी रचना विश्वामित्र ने की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मंत्र सूर्य देवता सावित्री को समर्पित है।"
    },
    {
        question: "'सत्यमेव जयते' महाकाव्य कहाँ से लिया गया है?",
        answers: shuffle([
            { text: "मुण्डक उपनिषद", correct: true },
            { text: "कठ उपनिषद", correct: false },
            { text: "ऐतरेय उपनिषद", correct: false },
            { text: "बृहदारण्यक उपनिषद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सत्यमेव जयते' (सत्य की ही जीत होती है) मुण्डक उपनिषद से लिया गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत का राष्ट्रीय आदर्श वाक्य भी है।"
    },
    {
        question: "ऋग्वैदिक काल में 'अग्नि' का क्या महत्व था?",
        answers: shuffle([
            { text: "वह केवल एक प्राकृतिक तत्व था।", correct: false },
            { text: "उसे देवताओं और मनुष्यों के बीच मध्यस्थ माना जाता था।", correct: true },
            { text: "उसे युद्ध का देवता माना जाता था।", correct: false },
            { text: "उसे वनस्पति का देवता माना जाता था।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अग्नि को देवताओं और मनुष्यों के बीच मध्यस्थ (mediator) माना जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह माना जाता था कि यज्ञ की आहुतियाँ अग्नि के माध्यम से देवताओं तक पहुँचती थीं।"
    },
    {
        question: "'ऋग्वेद' के किस मंडल में 'सोम' देवता का उल्लेख है?",
        answers: shuffle([
            { text: "7वें", correct: false },
            { text: "8वें", correct: false },
            { text: "9वें", correct: true },
            { text: "10वें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद का नौवां मंडल पूरी तरह से सोम देवता को समर्पित है, जो एक पौधे से बनाए जाने वाले पवित्र पेय के देवता थे।"
    },
    {
        question: "'वेदों' को किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "स्मृति", correct: false },
            { text: "श्रुति", correct: true },
            { text: "स्मृति और श्रुति दोनों", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेदों को 'श्रुति' कहा जाता है, जिसका अर्थ है 'सुना हुआ'।<br><br><i class='fa-solid fa-angles-right icon'></i> ऐसा माना जाता है कि ये ज्ञान सीधे ऋषियों को सुनाया गया था और मौखिक रूप से एक पीढ़ी से दूसरी पीढ़ी तक पहुँचाया गया।"
    },
    {
        question: "उत्तर वैदिक काल में 'राजसूय यज्ञ' का क्या उद्देश्य था?",
        answers: shuffle([
            { text: "राजा को सर्वोच्च शक्ति प्रदान करना", correct: true },
            { text: "राज्य की समृद्धि सुनिश्चित करना", correct: false },
            { text: "राजा को पापों से मुक्त करना", correct: false },
            { text: "राजा के उत्तराधिकारी का अभिषेक करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजसूय यज्ञ एक राज्याभिषेक समारोह था, जिसका उद्देश्य राजा को सर्वोच्च शक्ति और दैवीय अधिकार प्रदान करना था।"
    },
    {
        question: "ऋग्वैदिक काल में 'विदुषी' महिलाओं में कौन शामिल थी?",
        answers: shuffle([
            { text: "लोपामुद्रा और गार्गी", correct: false },
            { text: "लोपामुद्रा और घोषा", correct: true },
            { text: "घोषा और मैत्रेयी", correct: false },
            { text: "गार्गी और मैत्रेयी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोपामुद्रा और घोषा ऋग्वैदिक काल की विदुषी महिलाएं थीं, जिन्होंने ऋग्वेद के कुछ मंत्रों की रचना की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> गार्गी और मैत्रेयी का संबंध उत्तर वैदिक काल से है।"
    },
    {
        question: "'उपनिषद' का शाब्दिक अर्थ क्या है?",
        answers: shuffle([
            { text: "राजा के पास बैठना", correct: false },
            { text: "गुरु के पास बैठना", correct: true },
            { text: "ईश्वर के पास बैठना", correct: false },
            { text: "यज्ञ के पास बैठना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उपनिषद का अर्थ है 'गुरु के समीप बैठकर' ज्ञान प्राप्त करना।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें गुरु-शिष्य परंपरा के माध्यम से प्राप्त दार्शनिक ज्ञान का वर्णन है।"
    },
    {
        question: "'अथर्ववेद' का उपवेद क्या है?",
        answers: shuffle([
            { text: "आयुर्वेद", correct: false },
            { text: "धनुर्वेद", correct: false },
            { text: "गंधर्ववेद", correct: false },
            { text: "शिल्पवेद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अथर्ववेद का उपवेद शिल्पवेद है, जो स्थापत्य कला और अन्य कलाओं से संबंधित है।"
    },
    {
        question: "'पुर' (Pur) शब्द का क्या अर्थ था?",
        answers: shuffle([
            { text: "राजा", correct: false },
            { text: "नगर या किला", correct: true },
            { text: "गाँव", correct: false },
            { text: "नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पुर' का अर्थ नगर या किला था।<br><br><i class='fa-solid fa-angles-right icon'></i> इंद्र को 'पुरंदर' (किले तोड़ने वाला) कहा गया है, जो इस शब्द के महत्व को दर्शाता है।"
    },
    {
        question: "'गोत्र' शब्द का सर्वप्रथम उल्लेख कहाँ मिलता है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: true },
            { text: "सामवेद", correct: false },
            { text: "अथर्ववेद", correct: false },
            { text: "यजुर्वेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गोत्र' शब्द का सर्वप्रथम उल्लेख ऋग्वेद में मिलता है, लेकिन इसका अर्थ उत्तर वैदिक काल में एक ही वंश के लोगों से जुड़ने के बाद अधिक स्पष्ट हो गया।"
    },
    {
        question: "'ऋग्वेद' के तीसरे मंडल की रचना किसने की थी?",
        answers: shuffle([
            { text: "वशिष्ठ", correct: false },
            { text: "विश्वामित्र", correct: true },
            { text: "भरद्वाज", correct: false },
            { text: "वामदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद के तीसरे मंडल की रचना विश्वामित्र ने की थी, जिसमें प्रसिद्ध 'गायत्री मंत्र' भी शामिल है।"
    },
    {
        question: "ऋग्वैदिक काल के सबसे प्रमुख देवता कौन थे?",
        answers: shuffle([
            { text: "अग्नि", correct: false },
            { text: "वरुण", correct: false },
            { text: "इंद्र", correct: true },
            { text: "सोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंद्र ऋग्वैदिक काल के सबसे प्रमुख देवता थे, जिन्हें 'पुरंदर' (किले तोड़ने वाला) कहा गया है और ऋग्वेद में उनके लिए 250 से अधिक सूक्त समर्पित हैं।"
    },
    {
        question: "'वेदांग' का क्या कार्य था?",
        answers: shuffle([
            { text: "वेदों की व्याख्या करना", correct: false },
            { text: "वेदों का संकलन करना", correct: false },
            { text: "वेदों को समझने में मदद करना", correct: true },
            { text: "यज्ञों का वर्णन करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेदांग छह सहायक ग्रंथ थे, जो वेदों के सही उच्चारण, अर्थ और अनुष्ठान को समझने में सहायता करते थे।"
    },
    {
        question: "'यज्ञ' का उल्लेख सर्वप्रथम किस वेद में मिलता है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: true },
            { text: "सामवेद", correct: false },
            { text: "यजुर्वेद", correct: false },
            { text: "अथर्ववेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यज्ञों का सर्वप्रथम उल्लेख ऋग्वेद में मिलता है, लेकिन यजुर्वेद में उनकी विस्तृत विधियाँ दी गई हैं।"
    },
    {
        question: "उत्तर वैदिक काल में 'विशपति' (Vishpati) कौन था?",
        answers: shuffle([
            { text: "ग्राम का मुखिया", correct: false },
            { text: "विश (कबीले के उप-समूह) का मुखिया", correct: true },
            { text: "राजा", correct: false },
            { text: "पुरोहित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर वैदिक काल में, 'विशपति' विश नामक कबीले के उप-समूह का मुखिया होता था।"
    },
    {
        question: "वैदिक काल में 'पणि' किस वर्ग के थे?",
        answers: shuffle([
            { text: "पुजारी", correct: false },
            { text: "योद्धा", correct: false },
            { text: "व्यापारी", correct: true },
            { text: "शिल्पी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पणि' एक व्यापारी वर्ग था जो व्यापार और वाणिज्य से जुड़ा था।"
    },
    {
        question: "'आयुर्वेद' किसका उपवेद है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: true },
            { text: "सामवेद", correct: false },
            { text: "यजुर्वेद", correct: false },
            { text: "अथर्ववेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आयुर्वेद, जो चिकित्सा विज्ञान से संबंधित है, ऋग्वेद का उपवेद है।"
    },
    {
        question: "'ऋग्वेद' के किस मंडल में 'सोम' का उल्लेख है?",
        answers: shuffle([
            { text: "7वें", correct: false },
            { text: "8वें", correct: false },
            { text: "9वें", correct: true },
            { text: "10वें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद का नौवां मंडल 'सोम' को समर्पित है, जो एक पौधे से प्राप्त पवित्र पेय था।"
    },
    {
        question: "वैदिक काल में 'पशुपालन' के बाद दूसरा सबसे महत्वपूर्ण व्यवसाय क्या था?",
        answers: shuffle([
            { text: "व्यापार", correct: false },
            { text: "कृषि", correct: true },
            { text: "शिकार", correct: false },
            { text: "हस्तशिल्प", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक काल में पशुपालन मुख्य व्यवसाय था, लेकिन कृषि भी दूसरा सबसे महत्वपूर्ण व्यवसाय था, जिसका महत्व उत्तर वैदिक काल में और बढ़ गया।"
    },
    {
        question: "'दशराज्ञ युद्ध' का उल्लेख ऋग्वेद के किस मंडल में है?",
        answers: shuffle([
            { text: "7वें", correct: true },
            { text: "8वें", correct: false },
            { text: "9वें", correct: false },
            { text: "10वें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दशराज्ञ युद्ध' (दस राजाओं का युद्ध) का वर्णन ऋग्वेद के सातवें मंडल में मिलता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भरत और पुरु कबीलों के बीच लड़ा गया था।"
    },
    {
        question: "वैदिक काल में 'गोत्र' का क्या अर्थ था?",
        answers: shuffle([
            { text: "एक ही गाँव के लोग", correct: false },
            { text: "एक ही स्थान पर रहने वाले लोग", correct: false },
            { text: "एक ही कुल या वंश के लोग", correct: true },
            { text: "राजा का परिवार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गोत्र' का अर्थ एक ही वंश के लोग थे, जो एक सामान्य पूर्वज से उतरे थे।<br><br><i class='fa-solid fa-angles-right icon'></i> एक ही गोत्र में विवाह वर्जित था।"
    },
    {
        question: "वैदिक काल में 'नदीतमा' (सबसे पवित्र नदी) किसे कहा गया है?",
        answers: shuffle([
            { text: "सिंधु", correct: false },
            { text: "गंगा", correct: false },
            { text: "सरस्वती", correct: true },
            { text: "यमुना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में सरस्वती नदी को 'नदीतमा' (सबसे पवित्र नदी) और 'अम्बितमा' (सबसे श्रेष्ठ माता) कहा गया है।"
    },
    {
        question: "'यजुर्वेद' किससे संबंधित है?",
        answers: shuffle([
            { text: "मंत्रों से", correct: false },
            { text: "बलिदान विधि से", correct: true },
            { text: "संगीत से", correct: false },
            { text: "जादू-टोना से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यजुर्वेद में यज्ञों और धार्मिक अनुष्ठानों की विधियों और नियमों का विस्तृत वर्णन है।"
    },
    {
        question: "'सामवेद' का संबंध किससे है?",
        answers: shuffle([
            { text: "मंत्रों से", correct: false },
            { text: "यज्ञ से", correct: false },
            { text: "संगीत से", correct: true },
            { text: "औषधि से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामवेद में अधिकांश ऋग्वैदिक मंत्रों का संकलन है, लेकिन इसे विशेष रूप से गायन के लिए तैयार किया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इसे 'भारतीय संगीत का जनक' माना जाता है।"
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