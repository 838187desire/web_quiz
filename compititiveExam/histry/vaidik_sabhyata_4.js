const questions = [
    {
        topHeading: "वैदिक सभ्यता पर आधारित बहुविकल्पी प्रश्न part 4 (quiz_no.18)"
    },
    {
        question: "'ऋग्वैदिक काल' में मुख्य रूप से किस नदी का उल्लेख हुआ है?",
        answers: [
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: false },
            { text: "सिंधु", correct: true },
            { text: "ब्रह्मपुत्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में सिंधु नदी का उल्लेख सबसे अधिक बार हुआ है, जो आर्यों के लिए इसका आर्थिक और भौगोलिक महत्व दर्शाता है।"
    },
    {
        question: "वैदिक काल में 'विदुषी' महिलाओं के संदर्भ में, किस महिला ने 'दार्शनिक वाद-विवाद' में भाग लिया था?",
        answers: [
            { text: "घोषा", correct: false },
            { text: "लोपामुद्रा", correct: false },
            { text: "गार्गी", correct: true },
            { text: "अपाला", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गार्गी का उल्लेख बृहदारण्यक उपनिषद में मिलता है, जहाँ उन्होंने दार्शनिक याज्ञवल्क्य के साथ वाद-विवाद किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह घटना उत्तर वैदिक काल की है।"
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
        question: "वैदिक काल में 'यव' शब्द का प्रयोग किसके लिए किया गया था?",
        answers: [
            { text: "गेहूँ", correct: false },
            { text: "जौ", correct: true },
            { text: "चावल", correct: false },
            { text: "तिल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैदिक ग्रंथों में 'यव' शब्द का प्रयोग मुख्य रूप से जौ के लिए किया गया है, जो इस काल की एक प्रमुख फसल थी।"
    },
    {
        question: "ऋग्वैदिक काल में 'निष्क' (Nishka) क्या था?",
        answers: [
            { text: "एक प्रकार का कर", correct: false },
            { text: "एक आभूषण", correct: true },
            { text: "भूमि माप की इकाई", correct: false },
            { text: "एक प्रकार का हथियार", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक काल में 'निष्क' एक सोने का हार था, जिसका उपयोग बाद के काल में विनिमय के साधन (सिक्के) के रूप में भी होने लगा था।"
    },
    {
        question: "'अथर्ववेद' किससे संबंधित है?",
        answers: [
            { text: "ईश्वर महिमा", correct: false },
            { text: "बलिदान विधि", correct: false },
            { text: "जादू-टोना और वशीकरण", correct: true },
            { text: "संगीत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अथर्ववेद में मुख्य रूप से जादू-टोना, वशीकरण, बीमारियों के उपचार और औषधियों से संबंधित मंत्र और अनुष्ठानों का संग्रह है।"
    },
    {
        question: "'सामवेद' का संबंध किससे है?",
        answers: [
            { text: "मंत्रों से", correct: false },
            { text: "यज्ञ से", correct: false },
            { text: "संगीत से", correct: true },
            { text: "औषधि से", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामवेद में अधिकांश ऋग्वैदिक मंत्रों का संकलन है, लेकिन इसे विशेष रूप से गायन के लिए तैयार किया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इसे 'भारतीय संगीत का जनक' माना जाता है।"
    },
    {
        question: "'यजुर्वेद' किससे संबंधित है?",
        answers: [
            { text: "मंत्रों से", correct: false },
            { text: "संगीत से", correct: false },
            { text: "बलिदान विधि से", correct: true },
            { text: "जादू-टोना से", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यजुर्वेद में यज्ञों और बलिदानों से संबंधित विधियाँ और मंत्र दिए गए हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एकमात्र ऐसा वेद है जो गद्य और पद्य दोनों में लिखा गया है।"
    },
    {
        question: "वैदिक काल के लोगों का मुख्य व्यवसाय क्या था?",
        answers: [
            { text: "कृषि", correct: false },
            { text: "पशुपालन", correct: true },
            { text: "व्यापार", correct: false },
            { text: "हस्तशिल्प", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक काल में पशुपालन मुख्य व्यवसाय था, खासकर गायों का पालन-पोषण।<br><br><i class='fa-solid fa-angles-right icon'></i> कृषि भी महत्वपूर्ण थी, लेकिन पशुपालन को अधिक प्राथमिकता दी जाती थी।"
    },
    {
        question: "'पुराणों' की संख्या कितनी है?",
        answers: [
            { text: "12", correct: false },
            { text: "18", correct: true },
            { text: "20", correct: false },
            { text: "24", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुराणों की कुल संख्या 18 है।<br><br><i class='fa-solid fa-angles-right icon'></i> इनमें विष्णु पुराण, मत्स्य पुराण, वायु पुराण और भागवत पुराण प्रमुख हैं।"
    },
    {
        question: "'उपनिषदों' की कुल संख्या कितनी है?",
        answers: [
            { text: "108", correct: true },
            { text: "112", correct: false },
            { text: "120", correct: false },
            { text: "125", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उपनिषदों की कुल संख्या 108 है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये भारतीय दर्शन के मूल स्रोत हैं और इन्हें 'वेदांत' भी कहा जाता है।"
    },
    {
        question: "'सत्यमेव जयते' महाकाव्य कहाँ से लिया गया है?",
        answers: [
            { text: "मुण्डक उपनिषद", correct: true },
            { text: "कठ उपनिषद", correct: false },
            { text: "ऐतरेय उपनिषद", correct: false },
            { text: "बृहदारण्यक उपनिषद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सत्यमेव जयते' (सत्य की ही जीत होती है) मुण्डक उपनिषद से लिया गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत का राष्ट्रीय आदर्श वाक्य भी है।"
    },
    {
        question: "ऋग्वैदिक काल के सबसे महत्वपूर्ण देवता कौन थे?",
        answers: [
            { text: "विष्णु", correct: false },
            { text: "शिव", correct: false },
            { text: "इंद्र", correct: true },
            { text: "ब्रह्मा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में इंद्र का उल्लेख सबसे अधिक बार हुआ है।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्हें 'पुरंदर' (किले तोड़ने वाला) और वर्षा का देवता भी कहा गया है।"
    },
    {
        question: "'वेदांग' की संख्या कितनी है?",
        answers: [
            { text: "4", correct: false },
            { text: "6", correct: true },
            { text: "8", correct: false },
            { text: "10", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेदांग छह सहायक ग्रंथ हैं, जो वेदों को समझने में मदद करते हैं: शिक्षा, कल्प, व्याकरण, निरुक्त, छंद और ज्योतिष।"
    },
    {
        question: "ऋग्वैदिक समाज की सबसे छोटी इकाई क्या थी?",
        answers: [
            { text: "ग्राम", correct: false },
            { text: "विश", correct: false },
            { text: "जन", correct: false },
            { text: "कुल (परिवार)", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक समाज की सबसे छोटी इकाई कुल या परिवार थी, जिसका मुखिया 'कुलप' कहलाता था।"
    },
    {
        question: "उत्तर वैदिक काल में 'गोत्र' शब्द का अर्थ क्या था?",
        answers: [
            { text: "राजा का नाम", correct: false },
            { text: "एक ही स्थान पर रहने वाले लोग", correct: false },
            { text: "एक ही वंश या कुल", correct: true },
            { text: "एक प्रकार का कर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर वैदिक काल में 'गोत्र' का अर्थ एक ही वंश या कुल के लोग थे।<br><br><i class='fa-solid fa-angles-right icon'></i> एक ही गोत्र में विवाह वर्जित था।"
    },
    {
        question: "'चार वर्णों' का उल्लेख सर्वप्रथम किस वेद में मिलता है?",
        answers: [
            { text: "ऋग्वेद", correct: true },
            { text: "सामवेद", correct: false },
            { text: "यजुर्वेद", correct: false },
            { text: "अथर्ववेद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चार वर्णों (ब्राह्मण, क्षत्रिय, वैश्य, शूद्र) का उल्लेख ऋग्वेद के 10वें मंडल के पुरुष सूक्त में मिलता है।"
    },
    {
        question: "'ऋग्वेद' का उपवेद क्या है?",
        answers: [
            { text: "धनुर्वेद", correct: false },
            { text: "गंधर्ववेद", correct: false },
            { text: "आयुर्वेद", correct: true },
            { text: "शिल्पवेद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्येक वेद का एक उपवेद है।<br><br><i class='fa-solid fa-angles-right icon'></i> ऋग्वेद का उपवेद आयुर्वेद (चिकित्सा) है, सामवेद का गंधर्ववेद (संगीत), यजुर्वेद का धनुर्वेद (युद्ध कला) और अथर्ववेद का शिल्पवेद (कला) है।"
    },
    {
        question: "उत्तर वैदिक काल में 'मुख्य व्यवसाय' क्या था?",
        answers: [
            { text: "पशुपालन", correct: false },
            { text: "कृषि", correct: true },
            { text: "व्यापार", correct: false },
            { text: "शिकार", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर वैदिक काल में, पशुपालन से हटकर कृषि मुख्य व्यवसाय बन गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इस काल में लोहे के औजारों का उपयोग शुरू हुआ, जिससे कृषि उत्पादन में वृद्धि हुई।"
    },
    {
        question: "वैदिक काल में 'यव' शब्द का प्रयोग किसके लिए किया गया था?",
        answers: [
            { text: "गेहूँ", correct: false },
            { text: "जौ", correct: true },
            { text: "चावल", correct: false },
            { text: "तिल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैदिक ग्रंथों में 'यव' शब्द का प्रयोग मुख्य रूप से जौ के लिए किया गया है, जो इस काल की एक प्रमुख फसल थी।"
    },
    {
        question: "'ऋत' (Rta) का क्या अर्थ था?",
        answers: [
            { text: "राजा का कर्तव्य", correct: false },
            { text: "धार्मिक अनुष्ठान", correct: false },
            { text: "प्राकृतिक और नैतिक व्यवस्था", correct: true },
            { text: "युद्ध का नियम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ऋत' ब्रह्मांड की प्राकृतिक और नैतिक व्यवस्था को संदर्भित करता था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह वह नियम था जिसके अनुसार प्रकृति और समाज कार्य करते थे।"
    },
    {
        question: "ऋग्वैदिक काल में 'निष्क' (Nishka) क्या था?",
        answers: [
            { text: "एक प्रकार का कर", correct: false },
            { text: "एक आभूषण", correct: true },
            { text: "भूमि माप की इकाई", correct: false },
            { text: "एक प्रकार का हथियार", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक काल में 'निष्क' एक सोने का हार था, जिसका उपयोग बाद के काल में विनिमय के साधन (सिक्के) के रूप में भी होने लगा था।"
    },
    {
        question: "ऋग्वैदिक काल में 'पुरोहित' कौन था?",
        answers: [
            { text: "राजा का सलाहकार", correct: false },
            { text: "धार्मिक अनुष्ठान करने वाला", correct: true },
            { text: "सेना का प्रमुख", correct: false },
            { text: "व्यापारी वर्ग का नेता", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरोहित वह व्यक्ति था जो धार्मिक अनुष्ठान और यज्ञ संपन्न कराता था।<br><br><i class='fa-solid fa-angles-right icon'></i> वह राजा के सलाहकार के रूप में भी कार्य करता था।"
    },
    {
        question: "उत्तर वैदिक काल में 'बलि' क्या था?",
        answers: [
            { text: "एक प्रकार का धार्मिक अनुष्ठान", correct: false },
            { text: "एक प्रकार का कर (टैक्स)", correct: true },
            { text: "राजा का नाम", correct: false },
            { text: "एक प्रकार का यज्ञ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर वैदिक काल में, 'बलि' एक अनिवार्य कर बन गया था, जिसे राजा अपनी प्रजा से वसूल करता था।<br><br><i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक काल में यह एक स्वैच्छिक भेंट थी।"
    },
    {
        question: "वैदिक काल में 'जन' (Jana) शब्द का अर्थ क्या था?",
        answers: [
            { text: "परिवार", correct: false },
            { text: "गाँव", correct: false },
            { text: "कबीला या जनजाति", correct: true },
            { text: "राज्य", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैदिक काल में 'जन' एक कबीले या जनजाति को संदर्भित करता था।<br><br><i class='fa-solid fa-angles-right icon'></i> कई 'विश' मिलकर एक 'जन' बनाते थे, जिसका मुखिया 'राजन्' होता था।"
    },
    {
        question: "'ऋग्वैदिक काल' में वर्ण व्यवस्था का आधार क्या था?",
        answers: shuffle([
            { text: "जन्म", correct: false },
            { text: "व्यवसाय (कर्म)", correct: true },
            { text: "निवास स्थान", correct: false },
            { text: "शिक्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक काल में, वर्ण व्यवस्था लचीली थी और इसका आधार व्यक्ति का व्यवसाय था।<br><br><i class='fa-solid fa-angles-right icon'></i> एक ही परिवार के लोग अलग-अलग वर्णों से हो सकते थे, लेकिन उत्तर वैदिक काल में यह जन्म पर आधारित हो गई।"
    },
    {
        question: "वैदिक काल में 'जन' (Jana) शब्द का अर्थ क्या था?",
        answers: shuffle([
            { text: "परिवार", correct: false },
            { text: "गाँव", correct: false },
            { text: "कबीला या जनजाति", correct: true },
            { text: "राज्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैदिक काल में 'जन' एक कबीले या जनजाति को संदर्भित करता था।<br><br><i class='fa-solid fa-angles-right icon'></i> कई 'विश' मिलकर एक 'जन' बनाते थे, जिसका मुखिया 'राजन्' होता था।"
    },
    {
        question: "किस वेद में 'सभा' और 'समिति' को प्रजापति की दो पुत्रियां कहा गया है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "सामवेद", correct: false },
            { text: "यजुर्वेद", correct: false },
            { text: "अथर्ववेद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अथर्ववेद में सभा और समिति को प्रजापति की दो पुत्रियां कहकर संबोधित किया गया है, जो इन संस्थाओं के महत्व को दर्शाता है।"
    },
    {
        question: "'गायत्री मंत्र' का उल्लेख किस मंडल में है?",
        answers: shuffle([
            { text: "पहले मंडल में", correct: false },
            { text: "तीसरे मंडल में", correct: true },
            { text: "नौवें मंडल में", correct: false },
            { text: "दसवें मंडल में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गायत्री मंत्र का उल्लेख ऋग्वेद के तीसरे मंडल में है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मंत्र सूर्य देवता सावित्री को समर्पित है और इसकी रचना विश्वामित्र ने की थी।"
    },
    {
        question: "वैदिक काल में 'निष्क' (Nishka) क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का कर", correct: false },
            { text: "एक आभूषण", correct: true },
            { text: "भूमि माप की इकाई", correct: false },
            { text: "एक प्रकार का हथियार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक काल में 'निष्क' एक सोने का हार था, जिसका उपयोग बाद के काल में विनिमय के साधन (सिक्के) के रूप में भी होने लगा था।"
    },
    {
        question: "'उपनिषद' का शाब्दिक अर्थ क्या है?",
        answers: shuffle([
            { text: "राजा के पास बैठना", correct: false },
            { text: "गुरु के पास बैठना", correct: true },
            { text: "ईश्वर के पास बैठना", correct: false },
            { text: "यज्ञ के पास बैठना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उपनिषद का अर्थ है 'गुरु के समीप बैठना' और ज्ञान प्राप्त करना।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें गुरु-शिष्य परंपरा के माध्यम से प्राप्त दार्शनिक ज्ञान का वर्णन है।"
    },
    {
        question: "ऋग्वैदिक काल में 'पुरंदर' किसे कहा जाता था?",
        answers: shuffle([
            { text: "अग्नि", correct: false },
            { text: "वरुण", correct: false },
            { text: "इंद्र", correct: true },
            { text: "सूर्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में इंद्र को 'पुरंदर' कहा गया है, जिसका अर्थ है 'किले तोड़ने वाला'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उनकी योद्धा और विनाशक प्रकृति को दर्शाता है।"
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
        question: "'अथर्ववेद' किससे संबंधित है?",
        answers: shuffle([
            { text: "ईश्वर महिमा", correct: false },
            { text: "बलिदान विधि", correct: false },
            { text: "जादू-टोना और वशीकरण", correct: true },
            { text: "संगीत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अथर्ववेद में मुख्य रूप से जादू-टोना, वशीकरण, बीमारियों के उपचार और औषधियों से संबंधित मंत्र और अनुष्ठानों का संग्रह है।"
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
    },
    {
        question: "'सप्त सैंधव' क्षेत्र में कौन सी नदियाँ शामिल थीं?",
        answers: shuffle([
            { text: "सिंधु, झेलम, रावी, चेनाब, सतलुज, ब्यास, सरस्वती", correct: true },
            { text: "गंगा, यमुना, सरस्वती, गोदावरी, नर्मदा, कावेरी, ब्रह्मपुत्र", correct: false },
            { text: "सिंधु, झेलम, रावी, चेनाब, गंगा, यमुना, सतलुज", correct: false },
            { text: "झेलम, रावी, चेनाब, सतलुज, ब्यास, गोदावरी, नर्मदा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सप्त सैंधव' का अर्थ है 'सात नदियों का प्रदेश', जिसमें सिंधु और उसकी पांच सहायक नदियाँ (झेलम, चेनाब, रावी, ब्यास, सतलुज) और सरस्वती नदी शामिल थीं।"
    },
    {
        question: "ऋग्वेद में सबसे अधिक बार उल्लेखित नदी कौन सी है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: false },
            { text: "सिंधु", correct: true },
            { text: "सरस्वती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में सिंधु नदी का उल्लेख सबसे अधिक बार (लगभग 50 बार) हुआ है, जो आर्यों के लिए इसका आर्थिक और भौगोलिक महत्व दर्शाता है।"
    },
    {
        question: "ऋग्वैदिक काल में किस नदी को 'नदीतमा' (सबसे पवित्र नदी) कहा गया है?",
        answers: shuffle([
            { text: "सिंधु", correct: false },
            { text: "गंगा", correct: false },
            { text: "सरस्वती", correct: true },
            { text: "यमुना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में सरस्वती नदी को 'नदीतमा' या 'अम्बितमा' (सबसे श्रेष्ठ माता) कहकर संबोधित किया गया है, जो इसकी धार्मिक महत्ता को दर्शाता है।"
    },
    {
        question: "वैदिक काल के लोगों का मुख्य व्यवसाय क्या था?",
        answers: shuffle([
            { text: "कृषि", correct: false },
            { text: "पशुपालन", correct: true },
            { text: "व्यापार", correct: false },
            { text: "हस्तशिल्प", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक काल में पशुपालन मुख्य व्यवसाय था, खासकर गायों का पालन-पोषण।<br><br><i class='fa-solid fa-angles-right icon'></i> कृषि भी महत्वपूर्ण थी, लेकिन पशुपालन को अधिक प्राथमिकता दी जाती थी।"
    },
    {
        question: "'पुराणों' की संख्या कितनी है?",
        answers: shuffle([
            { text: "12", correct: false },
            { text: "18", correct: true },
            { text: "20", correct: false },
            { text: "24", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुराणों की कुल संख्या 18 है।<br><br><i class='fa-solid fa-angles-right icon'></i> इनमें विष्णु पुराण, मत्स्य पुराण, वायु पुराण और भागवत पुराण प्रमुख हैं।"
    },
    {
        question: "'वेदांग' की संख्या कितनी है?",
        answers: shuffle([
            { text: "4", correct: false },
            { text: "6", correct: true },
            { text: "8", correct: false },
            { text: "10", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेदांग छह सहायक ग्रंथ हैं, जो वेदों को समझने में मदद करते हैं: शिक्षा, कल्प, व्याकरण, निरुक्त, छंद और ज्योतिष।"
    },
    {
        question: "ऋग्वैदिक समाज की सबसे छोटी इकाई क्या थी?",
        answers: shuffle([
            { text: "ग्राम", correct: false },
            { text: "विश", correct: false },
            { text: "जन", correct: false },
            { text: "कुल (परिवार)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक समाज की सबसे छोटी इकाई कुल या परिवार थी, जिसका मुखिया 'कुलप' कहलाता था।"
    },
    {
        question: "उत्तर वैदिक काल में 'गोत्र' शब्द का अर्थ क्या था?",
        answers: shuffle([
            { text: "राजा का नाम", correct: false },
            { text: "एक ही स्थान पर रहने वाले लोग", correct: false },
            { text: "एक ही वंश या कुल", correct: true },
            { text: "एक प्रकार का कर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर वैदिक काल में 'गोत्र' का अर्थ एक ही वंश या कुल के लोग थे।<br><br><i class='fa-solid fa-angles-right icon'></i> एक ही गोत्र में विवाह वर्जित था।"
    },
    {
        question: "'चार वर्णों' का उल्लेख सर्वप्रथम किस वेद में मिलता है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: true },
            { text: "सामवेद", correct: false },
            { text: "यजुर्वेद", correct: false },
            { text: "अथर्ववेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चार वर्णों (ब्राह्मण, क्षत्रिय, वैश्य, शूद्र) का उल्लेख ऋग्वेद के 10वें मंडल के पुरुष सूक्त में मिलता है।"
    },
    {
        question: "उत्तर वैदिक काल में 'हल' को क्या कहा जाता था?",
        answers: shuffle([
            { text: "लांगल", correct: true },
            { text: "सीरा", correct: false },
            { text: "वृक", correct: false },
            { text: "करीष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर वैदिक काल में कृषि का महत्व बढ़ गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> 'हल' को 'लांगल' और 'हल रेखा' को 'सीरा' कहा जाता था।"
    },
    {
        question: "'ऋग्वेद' का उपवेद क्या है?",
        answers: shuffle([
            { text: "धनुर्वेद", correct: false },
            { text: "गंधर्ववेद", correct: false },
            { text: "आयुर्वेद", correct: true },
            { text: "शिल्पवेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्येक वेद का एक उपवेद है।<br><br><i class='fa-solid fa-angles-right icon'></i> ऋग्वेद का उपवेद आयुर्वेद (चिकित्सा) है, सामवेद का गंधर्ववेद (संगीत), यजुर्वेद का धनुर्वेद (युद्ध कला) और अथर्ववेद का शिल्पवेद (कला) है।"
    },
    {
        question: "उत्तर वैदिक काल में 'मुख्य व्यवसाय' क्या था?",
        answers: shuffle([
            { text: "पशुपालन", correct: false },
            { text: "कृषि", correct: true },
            { text: "व्यापार", correct: false },
            { text: "शिकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर वैदिक काल में, पशुपालन से हटकर कृषि मुख्य व्यवसाय बन गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इस काल में लोहे के औजारों का उपयोग शुरू हुआ, जिससे कृषि उत्पादन में वृद्धि हुई।"
    },
    {
        question: "वैदिक काल में 'यव' शब्द का प्रयोग किसके लिए किया गया था?",
        answers: shuffle([
            { text: "गेहूँ", correct: false },
            { text: "जौ", correct: true },
            { text: "चावल", correct: false },
            { text: "तिल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैदिक ग्रंथों में 'यव' शब्द का प्रयोग मुख्य रूप से जौ के लिए किया गया है, जो इस काल की एक प्रमुख फसल थी।"
    },
    {
        question: "'ऋत' (Rta) का क्या अर्थ था?",
        answers: shuffle([
            { text: "राजा का कर्तव्य", correct: false },
            { text: "धार्मिक अनुष्ठान", correct: false },
            { text: "प्राकृतिक और नैतिक व्यवस्था", correct: true },
            { text: "युद्ध का नियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ऋत' ब्रह्मांड की प्राकृतिक और नैतिक व्यवस्था को संदर्भित करता था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह वह नियम था जिसके अनुसार प्रकृति और समाज कार्य करते थे।"
    },
    {
        question: "ऋग्वैदिक काल में 'निष्क' (Nishka) क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का कर", correct: false },
            { text: "एक आभूषण", correct: true },
            { text: "भूमि माप की इकाई", correct: false },
            { text: "एक प्रकार का हथियार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक काल में 'निष्क' एक सोने का हार था, जिसका उपयोग बाद के काल में विनिमय के साधन (सिक्के) के रूप में भी होने लगा था।"
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