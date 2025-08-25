const questions = [
    {
        topHeading: "वैदिक सभ्यता पर आधारित बहुविकल्पी प्रश्न part 1 (quiz_no.15)"
    },
    {
        question: "'आर्य' शब्द का शाब्दिक अर्थ क्या है?",
        answers: [
            { text: "योद्धा", correct: false },
            { text: "श्रेष्ठ या कुलीन", correct: true },
            { text: "विद्वान", correct: false },
            { text: "पुजारी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आर्य' शब्द का उपयोग संस्कृत भाषा में एक विशेष जाति, भाषा, या संस्कृति को इंगित करने के बजाय एक श्रेष्ठ और कुलीन समूह के लिए किया जाता था।"
    },
    {
        question: "आर्यों की मुख्य भाषा क्या थी?",
        answers: [
            { text: "पाली", correct: false },
            { text: "प्राकृत", correct: false },
            { text: "संस्कृत", correct: true },
            { text: "हिंदी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैदिक काल में आर्यों की प्रमुख भाषा संस्कृत थी।<br><br><i class='fa-solid fa-angles-right icon'></i> सभी वैदिक साहित्य, जैसे वेद, उपनिषद, और ब्राह्मण ग्रंथ, संस्कृत में ही लिखे गए थे।"
    },
    {
        question: "वैदिक काल में 'सप्त सैंधव' क्षेत्र में कौन सी नदियाँ शामिल थीं?",
        answers: [
            { text: "सिंधु, झेलम, रावी, चेनाब, सतलुज, ब्यास, सरस्वती", correct: true },
            { text: "गंगा, यमुना, सरस्वती, गोदावरी, नर्मदा, कावेरी, ब्रह्मपुत्र", correct: false },
            { text: "सिंधु, झेलम, रावी, चेनाब, गंगा, यमुना, सतलुज", correct: false },
            { text: "झेलम, रावी, चेनाब, सतलुज, ब्यास, गोदावरी, नर्मदा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सप्त सैंधव' का अर्थ है 'सात नदियों का प्रदेश', जिसमें सिंधु और उसकी पांच सहायक नदियाँ (झेलम, चेनाब, रावी, ब्यास, सतलुज) और सरस्वती नदी शामिल थीं।"
    },
    {
        question: "ऋग्वेद में सबसे अधिक बार उल्लेखित नदी कौन सी है?",
        answers: [
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: false },
            { text: "सिंधु", correct: true },
            { text: "सरस्वती", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में सिंधु नदी का उल्लेख सबसे अधिक बार (लगभग 50 बार) हुआ है, जो आर्यों के लिए इसका आर्थिक और भौगोलिक महत्व दर्शाता है।"
    },
    {
        question: "ऋग्वैदिक काल में किस नदी को 'नदीतमा' (सबसे पवित्र नदी) कहा गया है?",
        answers: [
            { text: "सिंधु", correct: false },
            { text: "गंगा", correct: false },
            { text: "सरस्वती", correct: true },
            { text: "यमुना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में सरस्वती नदी को 'नदीतमा' या 'अम्बितमा' (सबसे श्रेष्ठ माता) कहकर संबोधित किया गया है, जो इसकी धार्मिक महत्ता को दर्शाता है।"
    },
    {
        question: "ऋग्वैदिक काल में 'गाय' का क्या महत्व था?",
        answers: [
            { text: "यह केवल एक पालतू जानवर था", correct: false },
            { text: "इसे 'अघन्या' (न मारे जाने योग्य) माना जाता था और यह धन का प्रतीक थी", correct: true },
            { text: "इसका उपयोग केवल कृषि कार्य में होता था", correct: false },
            { text: "यह केवल दूध के लिए पाली जाती थी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में गाय को 'अघन्या' (न मारे जाने योग्य) कहा गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह विनिमय का प्रमुख माध्यम और संपत्ति का सबसे महत्वपूर्ण रूप थी।"
    },
    {
        question: "ऋग्वेद में कितने मंडल हैं?",
        answers: [
            { text: "8", correct: false },
            { text: "9", correct: false },
            { text: "10", correct: true },
            { text: "11", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में कुल 10 मंडल हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इनमें से दूसरा से सातवां मंडल सबसे प्राचीन माने जाते हैं, जबकि पहला और दसवां मंडल सबसे बाद में जोड़े गए।"
    },
    {
        question: "प्रसिद्ध 'गायत्री मंत्र' का उल्लेख किस मंडल में है?",
        answers: [
            { text: "पहले मंडल में", correct: false },
            { text: "तीसरे मंडल में", correct: true },
            { text: "नौवें मंडल में", correct: false },
            { text: "दसवें मंडल में", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गायत्री मंत्र का उल्लेख ऋग्वेद के तीसरे मंडल में है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मंत्र सूर्य देवता सावित्री को समर्पित है और इसकी रचना विश्वामित्र ने की थी।"
    },
    {
        question: "वैदिक काल में 'सभा' और 'समिति' क्या थीं?",
        answers: [
            { text: "राजा के मंत्री", correct: false },
            { text: "राजा द्वारा नियुक्त अधिकारी", correct: false },
            { text: "राजा को सलाह देने वाली लोकप्रिय सभाएं", correct: true },
            { text: "धार्मिक अनुष्ठानों के लिए स्थान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सभा और समिति वैदिक काल की दो महत्वपूर्ण राजनीतिक संस्थाएं थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> सभा एक छोटी और अभिजात वर्ग की सभा थी, जबकि समिति एक बड़ी और जनसाधारण की सभा थी।"
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
        question: "उपनिषदों की कुल संख्या कितनी है?",
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
        question: "वैदिक काल में 'दशराज्ञ युद्ध' किस नदी के तट पर लड़ा गया था?",
        answers: [
            { text: "सिंधु", correct: false },
            { text: "सरस्वती", correct: false },
            { text: "परुष्णी (रावी)", correct: true },
            { text: "सतलुज", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दशराज्ञ युद्ध 'पुरु' और 'भरत' नामक आर्यों के कबीलों के बीच परुष्णी (आधुनिक रावी) नदी के तट पर लड़ा गया था।"
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
        question: "उत्तर वैदिक काल में 'हल' को क्या कहा जाता था?",
        answers: [
            { text: "लांगल", correct: true },
            { text: "सीरा", correct: false },
            { text: "वृक", correct: false },
            { text: "करीष", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर वैदिक काल में कृषि का महत्व बढ़ गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> 'हल' को 'लांगल' और 'हल रेखा' को 'सीरा' कहा जाता था।"
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
    },
    {
        question: "ऋग्वैदिक काल में 'पुरोहित' कौन था?",
        answers: shuffle([
            { text: "राजा का सलाहकार", correct: false },
            { text: "धार्मिक अनुष्ठान करने वाला", correct: true },
            { text: "सेना का प्रमुख", correct: false },
            { text: "व्यापारी वर्ग का नेता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरोहित वह व्यक्ति था जो धार्मिक अनुष्ठान और यज्ञ संपन्न कराता था।<br><br><i class='fa-solid fa-angles-right icon'></i> वह राजा के सलाहकार के रूप में भी कार्य करता था।"
    },
    {
        question: "उत्तर वैदिक काल में 'बलि' क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का धार्मिक अनुष्ठान", correct: false },
            { text: "एक प्रकार का कर (टैक्स)", correct: true },
            { text: "राजा का नाम", correct: false },
            { text: "एक प्रकार का यज्ञ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर वैदिक काल में, 'बलि' एक अनिवार्य कर बन गया था, जिसे राजा अपनी प्रजा से वसूल करता था।<br><br><i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक काल में यह एक स्वैच्छिक भेंट थी।"
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
        question: "किस वेद में सभा और समिति को प्रजापति की दो पुत्रियां कहा गया है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "सामवेद", correct: false },
            { text: "यजुर्वेद", correct: false },
            { text: "अथर्ववेद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अथर्ववेद में सभा और समिति को प्रजापति की दो पुत्रियां कहकर संबोधित किया गया है, जो इन संस्थाओं के महत्व को दर्शाता है।"
    },
    {
        question: "'ब्रह्म' शब्द का सर्वप्रथम उल्लेख किस उपनिषद में मिलता है?",
        answers: shuffle([
            { text: "मुण्डक उपनिषद", correct: false },
            { text: "बृहदारण्यक उपनिषद", correct: true },
            { text: "कठ उपनिषद", correct: false },
            { text: "केन उपनिषद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहदारण्यक उपनिषद सबसे प्राचीन उपनिषदों में से एक है और इसमें 'ब्रह्म' और 'आत्मा' की अवधारणा पर विस्तार से चर्चा की गई है।"
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
        question: "ऋग्वैदिक काल के दौरान 'आदिवासी' और 'आर्यों' के बीच मुख्य संघर्ष का कारण क्या था?",
        answers: shuffle([
            { text: "जल", correct: false },
            { text: "भूमि", correct: false },
            { text: "गाय", correct: true },
            { text: "व्यापार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक काल में गायों को संपत्ति का सबसे महत्वपूर्ण रूप माना जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, गायों के लिए युद्ध और संघर्ष होते थे, जिन्हें 'गविष्टि' कहा जाता था।"
    },
    {
        question: "ऋग्वेद में 'उषा' किसे समर्पित है?",
        answers: shuffle([
            { text: "रात्रि की देवी", correct: false },
            { text: "भोर की देवी", correct: true },
            { text: "वर्षा की देवी", correct: false },
            { text: "वनस्पति की देवी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उषा' को ऋग्वेद में भोर की देवी के रूप में वर्णित किया गया है, जो प्रकाश और आशा का प्रतीक है।"
    },
    {
        question: "ऋग्वैदिक काल में 'विश' (Vish) का क्या अर्थ था?",
        answers: shuffle([
            { text: "गाँव", correct: false },
            { text: "परिवार", correct: false },
            { text: "जनपद", correct: false },
            { text: "कबीले का उप-समूह", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक समाज की संरचना 'कुल' (परिवार) से 'ग्राम' (गाँव), 'विश' (कबीले का उप-समूह) और फिर 'जन' (कबीला) में विभाजित थी।"
    },
    {
        question: "किस वेद में बीमारियों के उपचार और औषधियों का वर्णन है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "सामवेद", correct: false },
            { text: "यजुर्वेद", correct: false },
            { text: "अथर्ववेद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अथर्ववेद में कई मंत्र और सूत्र हैं जो बीमारियों के उपचार, औषधियों और जादू-टोना से संबंधित हैं।"
    },
    {
        question: "वैदिक काल में 'यज्ञ' करने वाले ब्राह्मणों को क्या कहा जाता था?",
        answers: shuffle([
            { text: "होता", correct: false },
            { text: "उद्गाता", correct: false },
            { text: "अध्वर्यु", correct: false },
            { text: "पुरोहित", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरोहित वह ब्राह्मण था जो यज्ञों और अनुष्ठानों का संचालन करता था।"
    },
    {
        question: "वैदिक काल के किस देवता को 'विश्व का नियामक' और 'नैतिक व्यवस्था का संरक्षक' माना जाता था?",
        answers: shuffle([
            { text: "इंद्र", correct: false },
            { text: "अग्नि", correct: false },
            { text: "वरुण", correct: true },
            { text: "सूर्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वरुण को ब्रह्मांड की व्यवस्था और 'ऋत' (नैतिक व्यवस्था) का संरक्षक माना जाता था।"
    },
    {
        question: "'गायत्री मंत्र' का उल्लेख किस ग्रंथ में है?",
        answers: shuffle([
            { text: "यजुर्वेद", correct: false },
            { text: "ऋग्वेद", correct: true },
            { text: "सामवेद", correct: false },
            { text: "अथर्ववेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गायत्री मंत्र, सूर्य देवता सावित्री को समर्पित है और इसका उल्लेख ऋग्वेद के तीसरे मंडल में मिलता है।"
    },
    {
        question: "ऋग्वैदिक काल में 'विदुषी' महिलाओं में कौन शामिल नहीं थी?",
        answers: shuffle([
            { text: "लोपामुद्रा", correct: false },
            { text: "घोषा", correct: false },
            { text: "अपाला", correct: false },
            { text: "गार्गी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोपामुद्रा, घोषा और अपाला जैसी महिलाएं ऋग्वैदिक काल की विदुषी थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> गार्गी उत्तर वैदिक काल की एक विदुषी महिला थीं, जिनका उल्लेख बृहदारण्यक उपनिषद में मिलता है।"
    },
    {
        question: "'ऋग्वेद' का उपवेद क्या है?",
        answers: shuffle([
            { text: "धनुर्वेद", correct: false },
            { text: "गंधर्ववेद", correct: false },
            { text: "आयुर्वेद", correct: true },
            { text: "शिल्पवेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद का उपवेद आयुर्वेद (चिकित्सा विज्ञान) है, जो स्वास्थ्य और चिकित्सा से संबंधित है।"
    },
    {
        question: "वैदिक काल में 'अनाज' को क्या कहा जाता था?",
        answers: shuffle([
            { text: "वृक", correct: false },
            { text: "यव", correct: false },
            { text: "धान्य", correct: true },
            { text: "करीष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैदिक ग्रंथों में 'धान्य' शब्द का उपयोग सामान्य रूप से अनाज के लिए किया जाता था, जबकि जौ के लिए 'यव' शब्द का प्रयोग होता था।"
    },
    {
        question: "वैदिक काल में 'राजा' का मुख्य कार्य क्या था?",
        answers: shuffle([
            { text: "युद्ध करना और कबीले की रक्षा करना", correct: true },
            { text: "कर एकत्र करना", correct: false },
            { text: "धार्मिक अनुष्ठान करना", correct: false },
            { text: "कानून बनाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक काल में, राजा का मुख्य कार्य युद्ध में कबीले का नेतृत्व करना और बाहरी खतरों से उसकी रक्षा करना था।"
    },
    {
        question: "'शूद्र' शब्द का सर्वप्रथम उल्लेख किस मंडल में मिलता है?",
        answers: shuffle([
            { text: "7वें मंडल में", correct: false },
            { text: "8वें मंडल में", correct: false },
            { text: "9वें मंडल में", correct: false },
            { text: "10वें मंडल में", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शूद्र' शब्द का उल्लेख ऋग्वेद के 10वें मंडल के 'पुरुष सूक्त' में मिलता है, जहाँ चार वर्णों (ब्राह्मण, क्षत्रिय, वैश्य, शूद्र) की उत्पत्ति का वर्णन है।"
    },
    {
        question: "'सतपंथ ब्राह्मण' किस वेद से संबंधित है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "सामवेद", correct: false },
            { text: "यजुर्वेद", correct: true },
            { text: "अथर्ववेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सतपंथ ब्राह्मण यजुर्वेद का एक महत्वपूर्ण ब्राह्मण ग्रंथ है, जिसमें यज्ञों और अनुष्ठानों की विस्तृत व्याख्या है।"
    },
    {
        question: "वैदिक काल में 'पणि' कौन थे?",
        answers: shuffle([
            { text: "व्यापारी वर्ग", correct: true },
            { text: "पुजारी वर्ग", correct: false },
            { text: "शिल्पी वर्ग", correct: false },
            { text: "योद्धा वर्ग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पणि' एक व्यापारी वर्ग था जो व्यापार और वाणिज्य में संलग्न था।<br><br><i class='fa-solid fa-angles-right icon'></i> वे अपने व्यापारिक कौशल और संभवतः लालच के लिए जाने जाते थे।"
    },
    {
        question: "वैदिक काल में 'विदुषी' महिलाओं का उल्लेख किसमें मिलता है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "उपनिषद", correct: false },
            { text: "दोनों A और B", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में लोपामुद्रा, घोषा जैसी विदुषी महिलाओं का उल्लेख है, जबकि उपनिषदों में गार्गी और मैत्रेयी जैसी विदुषी महिलाओं का उल्लेख मिलता है।"
    },
    {
        question: "उत्तर वैदिक काल में 'राजा' की शक्ति में क्या परिवर्तन आया?",
        answers: shuffle([
            { text: "राजा की शक्ति कम हो गई", correct: false },
            { text: "राजा की शक्ति बढ़ गई और वह निरंकुश होने लगा", correct: true },
            { text: "राजा को चुनाव द्वारा चुना जाने लगा", correct: false },
            { text: "राजा का पद समाप्त हो गया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर वैदिक काल में, राजा की शक्ति में वृद्धि हुई और राजशाही वंशानुगत होने लगी।<br><br><i class='fa-solid fa-angles-right icon'></i> राजा ने बड़े-बड़े यज्ञों जैसे राजसूय और अश्वमेध यज्ञों के माध्यम से अपनी शक्ति और प्रभुत्व को स्थापित किया।"
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