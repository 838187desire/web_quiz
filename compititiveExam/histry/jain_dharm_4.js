const questions = [
    {
        topHeading: "जैन धर्म पर आधारित बहुविकल्पी प्रश्न part 4 (quiz_no.24)"
    },
    {
        question: "जैन दर्शन के अनुसार, 'पुण्य' और 'पाप' दोनों को किस श्रेणी में रखा गया है?",
        answers: shuffle([
            { text: "जीव", correct: false },
            { text: "अजीव", correct: false },
            { text: "कर्म", correct: true },
            { text: "मोक्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म में 'पुण्य' और 'पाप' दोनों को ही कर्म माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> दोनों ही कर्म आत्मा को सांसारिक बंधन में बांधते हैं।"
    },
    {
        question: "'कल्पसूत्र' की रचना किस भाषा में की गई थी?",
        answers: shuffle([
            { text: "पाली", correct: false },
            { text: "संस्कृत", correct: false },
            { text: "प्राकृत", correct: true },
            { text: "अपभ्रंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन तीर्थंकरों की जीवनी 'कल्पसूत्र' नामक ग्रंथ प्राकृत भाषा में लिखा गया था।"
    },
    {
        question: "जैन धर्म के अनुसार, 'सृष्टि' का निर्माण किसने किया?",
        answers: shuffle([
            { text: "ईश्वर", correct: false },
            { text: "आत्मा", correct: false },
            { text: "किसी ने नहीं, यह शाश्वत है", correct: true },
            { text: "ब्रह्मा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म ईश्वर को सृष्टि के निर्माता के रूप में स्वीकार नहीं करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उनका मानना है कि सृष्टि शाश्वत है और इसका कोई आरंभ या अंत नहीं है।"
    },
    {
        question: "'जैन साहित्य' को सामूहिक रूप से क्या कहा जाता है?",
        answers: shuffle([
            { text: "त्रिपिटक", correct: false },
            { text: "आगम सूत्र", correct: true },
            { text: "पुराण", correct: false },
            { text: "वेदांग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म के सभी पवित्र ग्रंथों को सामूहिक रूप से आगम सूत्र कहा जाता है।"
    },
    {
        question: "जैन धर्म में 'अहिंसा' का क्या अर्थ है?",
        answers: shuffle([
            { text: "मन, वचन और कर्म से किसी को नुकसान न पहुँचाना", correct: true },
            { text: "केवल शारीरिक हिंसा से बचना", correct: false },
            { text: "झूठ न बोलना", correct: false },
            { text: "चोरी न करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म में अहिंसा का अर्थ बहुत व्यापक है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें मन, वचन और कर्म से किसी भी प्राणी को पीड़ा न पहुँचाना शामिल है।"
    },
    {
        question: "महावीर के दामाद का नाम क्या था?",
        answers: shuffle([
            { text: "जमालि", correct: true },
            { text: "गोसाल", correct: false },
            { text: "स्थूलभद्र", correct: false },
            { text: "भद्रबाहु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर की पुत्री प्रियदर्शिनी का विवाह उनके दामाद जमालि से हुआ था, जो उनके पहले शिष्य भी थे।"
    },
    {
        question: "'पार्श्वनाथ' को किस स्थान पर ज्ञान प्राप्त हुआ था?",
        answers: shuffle([
            { text: "सम्मेद शिखर", correct: true },
            { text: "गिरनार पर्वत", correct: false },
            { text: "माउंट आबू", correct: false },
            { text: "पावापुरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पार्श्वनाथ को झारखंड में स्थित सम्मेद शिखर (पारसनाथ पहाड़ी) पर ज्ञान (कैवल्य) की प्राप्ति हुई थी।"
    },
    {
        question: "महावीर ने अपना पहला उपदेश किस भाषा में दिया था?",
        answers: shuffle([
            { text: "संस्कृत", correct: false },
            { text: "पाली", correct: false },
            { text: "प्राकृत (अर्ध-मागधी)", correct: true },
            { text: "मगधी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर ने अपने उपदेश प्राकृत भाषा (अर्ध-मागधी) में दिए थे, ताकि आम लोग उनके विचारों को आसानी से समझ सकें।"
    },
    {
        question: "'सल्लेखना' विधि से अपने प्राण त्यागने वाला मौर्य सम्राट कौन था?",
        answers: shuffle([
            { text: "अशोक", correct: false },
            { text: "चंद्रगुप्त मौर्य", correct: true },
            { text: "बिम्बिसार", correct: false },
            { text: "खारवेल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौर्य सम्राट चंद्रगुप्त मौर्य ने अपने जीवन के अंतिम वर्षों में जैन धर्म अपनाया और श्रवणबेलगोला (कर्नाटक) में सल्लेखना विधि से अपने प्राण त्यागे।"
    },
    {
        question: "जैन धर्म के अनुसार, 'अपरिग्रह' का क्या अर्थ है?",
        answers: shuffle([
            { text: "हिंसा न करना", correct: false },
            { text: "झूठ न बोलना", correct: false },
            { text: "चोरी न करना", correct: false },
            { text: "संपत्ति का संग्रह न करना", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपरिग्रह का अर्थ है किसी भी प्रकार की भौतिक संपत्ति या धन का संग्रह न करना।"
    },
    {
        question: "'जैन' शब्द किस संस्कृत शब्द से लिया गया है?",
        answers: shuffle([
            { text: "जन", correct: false },
            { text: "जिन", correct: true },
            { text: "जय", correct: false },
            { text: "जीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जैन' शब्द संस्कृत के जिन शब्द से बना है, जिसका अर्थ है 'विजेता' (जो अपनी इंद्रियों को जीत ले)।"
    },
    {
        question: "'जैन आगम' साहित्य का अंतिम संकलन किस संगीति में हुआ था?",
        answers: shuffle([
            { text: "प्रथम जैन संगीति (पाटलिपुत्र)", correct: false },
            { text: "द्वितीय जैन संगीति (वल्लभी)", correct: true },
            { text: "तृतीय जैन संगीति", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्वितीय जैन संगीति (512 ईस्वी, वल्लभी) में जैन आगमों को अंतिम रूप से संकलित और लिपिबद्ध किया गया था।"
    },
    {
        question: "'दिगंबर' और 'श्वेतांबर' संप्रदायों का विभाजन किस काल में हुआ था?",
        answers: shuffle([
            { text: "महावीर के जीवन काल में", correct: false },
            { text: "मौर्य काल में", correct: true },
            { text: "गुप्त काल में", correct: false },
            { text: "हर्ष के काल में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त मौर्य के समय मगध में पड़े अकाल के कारण दिगंबर और श्वेतांबर संप्रदायों का विभाजन हुआ।"
    },
    {
        question: "जैन धर्म में 'पुद्गल' (Pudgala) का क्या अर्थ है?",
        answers: shuffle([
            { text: "आत्मा", correct: false },
            { text: "कर्म का प्रवाह", correct: false },
            { text: "भौतिक पदार्थ", correct: true },
            { text: "समय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन दर्शन के अनुसार, पुद्गल उस तत्व को कहते हैं जिसमें स्पर्श, रस, गंध और वर्ण हो, यानी कि भौतिक पदार्थ।"
    },
    {
        question: "जैन धर्म में 'केवलिन' (Kaivalin) किसे कहा जाता है?",
        answers: shuffle([
            { text: "जिसने घर छोड़ दिया हो", correct: false },
            { text: "जिसे पूर्ण ज्ञान प्राप्त हो गया हो", correct: true },
            { text: "जिसने तपस्या की हो", correct: false },
            { text: "जिसने उपदेश दिए हों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केवलिन उस व्यक्ति को कहा जाता है जिसे 'कैवल्य' (पूर्ण ज्ञान) की प्राप्ति हो गई हो।"
    },
    {
        question: "'श्रवणबेलगोला' का संबंध किस जैन तीर्थंकर से है?",
        answers: shuffle([
            { text: "बाहुबली (गोमतेश्वर)", correct: true },
            { text: "पार्श्वनाथ", correct: false },
            { text: "ऋषभदेव", correct: false },
            { text: "महावीर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्रवणबेलगोला में स्थापित विशाल प्रतिमा जैन धर्म के पहले तीर्थंकर ऋषभदेव के पुत्र बाहुबली की है, जिन्हें गोमतेश्वर के नाम से भी जाना जाता है।"
    },
    {
        question: "जैन धर्म के अनुसार, 'अस्तेय' का क्या अर्थ है?",
        answers: shuffle([
            { text: "अहिंसा", correct: false },
            { text: "झूठ न बोलना", correct: false },
            { text: "चोरी न करना", correct: true },
            { text: "संपत्ति का संग्रह न करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अस्तेय जैन धर्म के पाँच महाव्रतों में से एक है, जिसका अर्थ है किसी भी रूप में चोरी न करना।"
    },
    {
        question: "'पर्युषण' पर्व के दौरान जैन संप्रदायों द्वारा 'क्षमावाणी' नामक प्रथा का पालन क्यों किया जाता है?",
        answers: shuffle([
            { text: "दान देने के लिए", correct: false },
            { text: "क्षमा मांगने और देने के लिए", correct: true },
            { text: "तीर्थंकरों की पूजा के लिए", correct: false },
            { text: "नए वस्त्र पहनने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्षमावाणी पर्युषण पर्व का अंतिम दिन होता है, जब जैन एक-दूसरे से क्षमा मांगते हैं और देते हैं।"
    },
    {
        question: "जैन धर्म के 19वें तीर्थंकर 'मल्लिनाथ' को दिगंबर संप्रदाय किस लिंग का मानता है?",
        answers: shuffle([
            { text: "पुरुष", correct: true },
            { text: "स्त्री", correct: false },
            { text: "उभयलिंगी", correct: false },
            { text: "लिंग रहित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मल्लिनाथ के लिंग को लेकर दिगंबर और श्वेतांबर संप्रदायों में मतभेद है।<br><br><i class='fa-solid fa-angles-right icon'></i> दिगंबर संप्रदाय उन्हें पुरुष मानता है, जबकि श्वेतांबर संप्रदाय स्त्री।"
    },
    {
        question: "'अहिंसा परमो धर्म:' का नारा किस धर्म से संबंधित है?",
        answers: shuffle([
            { text: "बौद्ध धर्म", correct: false },
            { text: "जैन धर्म", correct: true },
            { text: "हिंदू धर्म", correct: false },
            { text: "सिख धर्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अहिंसा परमो धर्म: जैन धर्म का केंद्रीय और सबसे महत्वपूर्ण सिद्धांत है, जिसका अर्थ है 'अहिंसा सर्वोच्च धर्म है'।"
    },
    {
        question: "'जैन दर्शन' में 'कर्म' को कितने भागों में विभाजित किया गया है?",
        answers: shuffle([
            { text: "4", correct: false },
            { text: "6", correct: false },
            { text: "8", correct: true },
            { text: "10", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन दर्शन के अनुसार, कर्म आठ प्रकार के होते हैं, जो आत्मा को संसार के बंधन में बांधते हैं।"
    },
    {
        question: "'दिलवाड़ा जैन मंदिर' का निर्माण किस शासकों के द्वारा करवाया गया था?",
        answers: shuffle([
            { text: "राष्ट्रकूट", correct: false },
            { text: "सोलंकी", correct: true },
            { text: "चालुक्य", correct: false },
            { text: "चोल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजस्थान के माउंट आबू में स्थित दिलवाड़ा जैन मंदिरों का निर्माण 11वीं और 13वीं शताब्दी के बीच सोलंकी शासकों द्वारा करवाया गया था।"
    },
    {
        question: "'पद्मप्रभ' नामक तीर्थंकर का प्रतीक चिह्न क्या था?",
        answers: shuffle([
            { text: "बैल", correct: false },
            { text: "कमल", correct: true },
            { text: "घोड़ा", correct: false },
            { text: "सिंह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पद्मप्रभ जैन धर्म के छठे तीर्थंकर थे, और उनका प्रतीक चिह्न लाल कमल था।"
    },
    {
        question: "जैन धर्म में 'त्रिरत्न' का पालन करने से किस लक्ष्य की प्राप्ति होती है?",
        answers: shuffle([
            { text: "धन की प्राप्ति", correct: false },
            { text: "यश की प्राप्ति", correct: false },
            { text: "कर्मों से मुक्ति", correct: false },
            { text: "मोक्ष", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म के त्रिरत्न (सम्यक दर्शन, सम्यक ज्ञान, सम्यक आचरण) का पालन करने से व्यक्ति को कर्मों के बंधन से मुक्ति मिलती है और वह अंततः मोक्ष प्राप्त करता है।"
    },
    {
        question: "'लोक' और 'अलोक' क्या हैं?",
        answers: shuffle([
            { text: "संसार और मोक्ष", correct: false },
            { text: "चेतन और अचेतन", correct: false },
            { text: "ज्ञान और अज्ञान", correct: false },
            { text: "ब्रह्मांड और ब्रह्मांड से परे का स्थान", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन ब्रह्मांड विज्ञान के अनुसार, लोक वह स्थान है जहाँ जीव और अजीव मौजूद हैं (ब्रह्मांड), और अलोक वह खाली स्थान है जो ब्रह्मांड से परे है।"
    },
    {
        question: "जैन दर्शन के अनुसार, सृष्टि के दो मूल तत्व 'जीव' और 'अजीव' के बीच के संबंध को क्या कहते हैं?",
        answers: shuffle([
            { text: "बंधन", correct: true },
            { text: "संवर", correct: false },
            { text: "निर्जरा", correct: false },
            { text: "मोक्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन दर्शन के अनुसार, जब आत्मा (जीव) और कर्म (अजीव) के बीच संपर्क होता है, तो आत्मा कर्मों से बंध जाती है, जिसे 'बंधन' कहा जाता है।"
    },
    {
        question: "जैन धर्म के किस तीर्थंकर का प्रतीक चिह्न 'हाथी' था?",
        answers: shuffle([
            { text: "अजितनाथ", correct: true },
            { text: "नेमिनाथ", correct: false },
            { text: "शांतिनाथ", correct: false },
            { text: "पद्मप्रभ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजितनाथ जैन धर्म के दूसरे तीर्थंकर थे और उनका प्रतीक चिह्न हाथी था।"
    },
    {
        question: "'सल्लेखना' व्रत का पालन किस जैन तीर्थंकर ने किया था?",
        answers: shuffle([
            { text: "पार्श्वनाथ", correct: false },
            { text: "महावीर", correct: false },
            { text: "ऋषभदेव", correct: true },
            { text: "किसी ने नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन मान्यता के अनुसार, प्रथम तीर्थंकर ऋषभदेव ने कैलाश पर्वत पर 'सल्लेखना' व्रत का पालन करते हुए मोक्ष प्राप्त किया था।"
    },
    {
        question: "'सप्तभंगी' सिद्धांत का दूसरा नाम क्या है?",
        answers: shuffle([
            { text: "अनेकांतवाद", correct: false },
            { text: "स्याद्वाद", correct: true },
            { text: "अस्तेय", correct: false },
            { text: "अपरिग्रह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्याद्वाद' को ही 'सप्तभंगी नय' कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह सिद्धांत बताता है कि किसी भी सत्य को सात अलग-अलग दृष्टिकोणों से देखा जा सकता है।"
    },
    {
        question: "जैन धर्म के अनुसार, पूर्ण ज्ञान की प्राप्ति के बाद 'महावीर' क्या कहलाए?",
        answers: shuffle([
            { text: "केवलिन", correct: false },
            { text: "जिन", correct: false },
            { text: "अरहंत", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ज्ञान प्राप्ति के बाद महावीर को 'केवलिन' (पूर्ण ज्ञानी), 'जिन' (विजेता), और 'अरहंत' (योग्य) कहा गया।"
    },
    {
        question: "जैन धर्म का सबसे महत्वपूर्ण वार्षिक पर्व कौन सा है, जो आत्मा की शुद्धि और क्षमा के लिए मनाया जाता है?",
        answers: shuffle([
            { text: "महावीर जयंती", correct: false },
            { text: "दीपावली", correct: false },
            { text: "पर्युषण", correct: true },
            { text: "दशलक्षण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पर्युषण जैन धर्म का एक प्रमुख वार्षिक पर्व है, जो आत्मा की शुद्धि और दूसरों से क्षमा मांगने (क्षमावाणी) के लिए मनाया जाता है।"
    },
    {
        question: "किस शासक ने कलिंग में जैन धर्म के लिए गुफाओं का निर्माण करवाया था?",
        answers: shuffle([
            { text: "अशोक", correct: false },
            { text: "चंद्रगुप्त मौर्य", correct: false },
            { text: "खारवेल", correct: true },
            { text: "समुद्रगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कलिंग के शासक खारवेल ने जैन धर्म का संरक्षण किया था और उदयगिरि-खंडगिरि गुफाओं में जैन भिक्षुओं के लिए गुफाओं का निर्माण करवाया था।"
    },
    {
        question: "जैन साहित्य में 'अंग' क्या हैं?",
        answers: shuffle([
            { text: "जैन धर्म के सिद्धांत", correct: false },
            { text: "तीर्थंकरों की जीवनी", correct: false },
            { text: "जैन धर्म के मूल ग्रंथ", correct: true },
            { text: "भिक्षुओं के नियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आगम सूत्र' में कुल 12 'अंग' हैं, जो जैन धर्म के सबसे महत्वपूर्ण और मूल ग्रंथ माने जाते हैं।"
    },
    {
        question: "महावीर के प्रथम शिष्य और दामाद जमालि ने महावीर से किस सिद्धांत को लेकर असहमति व्यक्त की थी?",
        answers: shuffle([
            { text: "अहिंसा", correct: false },
            { text: "अस्तेय", correct: false },
            { text: "क्रियामाणकृत", correct: true },
            { text: "अपरिग्रह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जमालि ने महावीर के इस सिद्धांत का विरोध किया था कि कोई कार्य तभी पूर्ण माना जाता है जब वह समाप्त हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जमालि का मानना था कि कार्य करते समय ही वह पूर्ण हो जाता है।"
    },
    {
        question: "जैन धर्म में 'त्रिरत्न' का पालन करने से किस लक्ष्य की प्राप्ति होती है?",
        answers: shuffle([
            { text: "धन", correct: false },
            { text: "यश", correct: false },
            { text: "कर्मों से मुक्ति", correct: false },
            { text: "मोक्ष", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म के 'त्रिरत्न' (सम्यक दर्शन, सम्यक ज्ञान, सम्यक आचरण) का पालन करने से व्यक्ति को कर्मों के बंधन से मुक्ति मिलती है और वह अंततः मोक्ष प्राप्त करता है।"
    },
    {
        question: "जैन धर्म के अनुसार, 'संवर' का क्या अर्थ है?",
        answers: shuffle([
            { text: "नए कर्मों के प्रवाह को रोकना", correct: true },
            { text: "संचित कर्मों को नष्ट करना", correct: false },
            { text: "ज्ञान प्राप्त करना", correct: false },
            { text: "इंद्रियों पर नियंत्रण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म में 'संवर' वह प्रक्रिया है जिसके द्वारा आत्मा में नए कर्मों के प्रवेश को रोका जाता है।"
    },
    {
        question: "द्वितीय जैन संगीति कहाँ आयोजित की गई थी?",
        answers: shuffle([
            { text: "पाटलिपुत्र", correct: false },
            { text: "वल्लभी (गुजरात)", correct: true },
            { text: "राजगृह", correct: false },
            { text: "मथुरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्वितीय जैन संगीति 512 ईस्वी में वल्लभी में आयोजित हुई थी, जिसकी अध्यक्षता देवर्धिगण क्षमाश्रमण ने की थी।"
    },
    {
        question: "'जैन धर्म' का सबसे बड़ा और महत्वपूर्ण तीर्थस्थल 'श्रवणबेलगोला' किस राज्य में है?",
        answers: shuffle([
            { text: "तमिलनाडु", correct: false },
            { text: "आंध्र प्रदेश", correct: false },
            { text: "कर्नाटक", correct: true },
            { text: "महाराष्ट्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्रवणबेलगोला कर्नाटक में स्थित है, जहाँ गोमतेश्वर की विशालकाय प्रतिमा है और जहाँ चंद्रगुप्त मौर्य ने सल्लेखना विधि से प्राण त्यागे थे।"
    },
    {
        question: "महावीर ने अपना पहला उपदेश किस स्थान पर दिया था?",
        answers: shuffle([
            { text: "वैशाली", correct: false },
            { text: "पावापुरी", correct: false },
            { text: "राजगृह (राजगीर)", correct: true },
            { text: "सारनाथ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर ने अपना पहला उपदेश राजगृह के पास 'विपुलाचल' नामक पर्वत पर दिया था।"
    },
    {
        question: "जैन धर्म में किस तीर्थंकर को 'श्री कृष्ण' का चचेरा भाई माना जाता है?",
        answers: shuffle([
            { text: "नेमिनाथ", correct: false },
            { text: "अरिष्टनेमि", correct: true },
            { text: "संभवनाथ", correct: false },
            { text: "अजितनाथ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म के 22वें तीर्थंकर अरिष्टनेमि को भगवान कृष्ण का समकालीन और चचेरा भाई माना जाता है।"
    },
    {
        question: "महावीर किस गणराज्य से संबंधित थे?",
        answers: shuffle([
            { text: "शाक्य", correct: false },
            { text: "वज्जि", correct: true },
            { text: "लिच्छवि", correct: false },
            { text: "कुरु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर के पिता सिद्धार्थ वज्जि संघ के ज्ञात्रिक कुल के प्रधान थे।<br><br><i class='fa-solid fa-angles-right icon'></i> महावीर का संबंध वज्जि गणराज्य से था।"
    },
    {
        question: "'जैन कल्पसूत्र' की रचना किस भाषा में हुई थी?",
        answers: shuffle([
            { text: "संस्कृत", correct: false },
            { text: "पाली", correct: false },
            { text: "प्राकृत", correct: true },
            { text: "मगधी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भद्रबाहु द्वारा रचित 'कल्पसूत्र', जिसमें जैन तीर्थंकरों की जीवनी है, प्राकृत भाषा में लिखा गया था।"
    },
    {
        question: "'दिगंबर' और 'श्वेतांबर' संप्रदायों का विभाजन किस घटना के बाद हुआ?",
        answers: shuffle([
            { text: "महावीर की मृत्यु", correct: false },
            { text: "प्रथम जैन संगीति", correct: true },
            { text: "द्वितीय जैन संगीति", correct: false },
            { text: "मौर्य वंश का पतन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रथम जैन संगीति के बाद दिगंबर और श्वेतांबर संप्रदायों का विभाजन हुआ।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका मुख्य कारण चंद्रगुप्त मौर्य के समय मगध में पड़ा अकाल था।"
    },
    {
        question: "जैन धर्म के 23वें तीर्थंकर पार्श्वनाथ ने कितने महाव्रतों का प्रतिपादन किया था?",
        answers: shuffle([
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false },
            { text: "6", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पार्श्वनाथ ने चार महाव्रतों (अहिंसा, सत्य, अस्तेय, अपरिग्रह) का प्रतिपादन किया था, जिसमें पाँचवाँ व्रत (ब्रह्मचर्य) महावीर ने जोड़ा।"
    },
    {
        question: "महावीर के बचपन का नाम क्या था?",
        answers: shuffle([
            { text: "सिद्धार्थ", correct: false },
            { text: "वर्धमान", correct: true },
            { text: "गौतम", correct: false },
            { text: "महावीर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर के बचपन का नाम वर्धमान था।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्हें ज्ञान प्राप्ति के बाद 'महावीर' कहा गया।"
    },
    {
        question: "जैन धर्म के 'त्रिरत्न' में से कौन सा सही है?",
        answers: shuffle([
            { text: "सम्यक दर्शन, सम्यक ज्ञान, सम्यक आचरण", correct: true },
            { text: "अहिंसा, सत्य, अस्तेय", correct: false },
            { text: "बुद्ध, धम्म, संघ", correct: false },
            { text: "अपरिग्रह, ब्रह्मचर्य, तपस्या", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म के तीन रत्न हैं: सम्यक दर्शन (सही विश्वास), सम्यक ज्ञान (सही ज्ञान), और सम्यक आचरण (सही कर्म)।"
    },
    {
        question: "'भद्रबाहु' और 'स्थूलभद्र' किस घटना से संबंधित हैं?",
        answers: shuffle([
            { text: "जैन धर्म के दार्शनिक", correct: false },
            { text: "महावीर के शिष्य", correct: false },
            { text: "जैन संगीतियाँ", correct: false },
            { text: "जैन धर्म के दो संप्रदायों का विभाजन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भद्रबाहु के नेतृत्व में दिगंबर संप्रदाय के अनुयायी दक्षिण भारत चले गए, जबकि स्थूलभद्र के नेतृत्व में श्वेतांबर संप्रदाय के अनुयायी मगध में ही रहे।"
    },
    {
        question: "जैन धर्म के अनुसार, 'अहिंसा' का क्या अर्थ है?",
        answers: shuffle([
            { text: "मन, वचन और कर्म से किसी को नुकसान न पहुँचाना", correct: true },
            { text: "केवल शारीरिक हिंसा से बचना", correct: false },
            { text: "झूठ न बोलना", correct: false },
            { text: "चोरी न करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म में अहिंसा का अर्थ बहुत व्यापक है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें मन, वचन और कर्म से किसी भी प्राणी को पीड़ा न पहुँचाना शामिल है।"
    },
    {
        question: "महावीर ने कितने वर्ष की आयु में 'कैवल्य' (पूर्ण ज्ञान) प्राप्त किया था?",
        answers: shuffle([
            { text: "29 वर्ष", correct: false },
            { text: "30 वर्ष", correct: false },
            { text: "42 वर्ष", correct: true },
            { text: "72 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर ने 30 वर्ष की आयु में घर छोड़ा और 12 वर्षों की कठोर तपस्या के बाद 42 वर्ष की आयु में उन्हें 'कैवल्य' प्राप्त हुआ।"
    },
    {
        question: "जैन धर्म के अनुसार, 'मोक्ष' का क्या अर्थ है?",
        answers: shuffle([
            { text: "स्वर्ग की प्राप्ति", correct: false },
            { text: "पुनर्जन्म से मुक्ति", correct: true },
            { text: "ईश्वर का साक्षात्कार", correct: false },
            { text: "धन की प्राप्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म में मोक्ष का अर्थ है आत्मा का कर्मों के बंधन से पूरी तरह मुक्त हो जाना, जिससे व्यक्ति को जन्म और मृत्यु के चक्र से छुटकारा मिल जाता है।"
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