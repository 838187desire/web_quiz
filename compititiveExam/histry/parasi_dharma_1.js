const questions = [
    {
        topHeading: "पारसी धर्म पर आधारित बहुविकल्पी प्रश्न part 1 (quiz_no.45)"
    },
    {
        question: "पारसी धर्म के संस्थापक कौन थे?",
        answers: [
            { text: "पैगंबर मूसा", correct: false },
            { text: "पैगंबर जरथुस्त्र (Zarathustra)", correct: true },
            { text: "पैगंबर ईसा", correct: false },
            { text: "पैगंबर मुहम्मद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारसी धर्म के संस्थापक पैगंबर जरथुस्त्र थे, जिन्हें ज़ोरोस्टर (Zoroaster) के नाम से भी जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने प्राचीन ईरान में इस धर्म की स्थापना की थी।"
    },
    {
        question: "पारसी धर्म का सबसे पवित्र ग्रंथ कौन-सा है?",
        answers: [
            { text: "बाइबिल", correct: false },
            { text: "कुरान", correct: false },
            { text: "अवेस्ता (Avesta)", correct: true },
            { text: "तोराह", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवेस्ता पारसी धर्म का मुख्य और सबसे पवित्र ग्रंथ है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें जरथुस्त्र के उपदेश, प्रार्थनाएँ और धार्मिक अनुष्ठानों के नियम शामिल हैं।"
    },
    {
        question: "पारसी धर्म में सर्वोच्च देवता कौन हैं?",
        answers: [
            { text: "अहुर मज़्दा (Ahura Mazda)", correct: true },
            { text: "अंग्र मैन्यु (Angra Mainyu)", correct: false },
            { text: "मिथ्रा (Mithra)", correct: false },
            { text: "वायु (Vayu)", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अहुर मज़्दा (जिसका अर्थ है 'बुद्धिमान प्रभु') पारसी धर्म के एकमात्र सर्वोच्च और सर्वशक्तिमान देवता हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> वे प्रकाश, सत्य और अच्छाई का प्रतिनिधित्व करते हैं।"
    },
    {
        question: "पारसी धर्म में बुराई का प्रतीक कौन है, जो अहुर मज़्दा का विरोधी है?",
        answers: [
            { text: "मिथ्रा", correct: false },
            { text: "अंग्र मैन्यु (Angra Mainyu)", correct: true },
            { text: "अहुर मज़्दा", correct: false },
            { text: "वायु", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंग्र मैन्यु (जिसे अहरिमन भी कहते हैं) बुराई, झूठ और अंधकार का प्रतीक है।<br><br><i class='fa-solid fa-angles-right icon'></i> वह अहुर मज़्दा का शाश्वत विरोधी है।"
    },
    {
        question: "'दख्मा' (Dakhma) या 'टॉवर ऑफ साइलेंस' का संबंध पारसी धर्म के किस अनुष्ठान से है?",
        answers: [
            { text: "विवाह", correct: false },
            { text: "अंतिम संस्कार", correct: true },
            { text: "जन्म", correct: false },
            { text: "प्रार्थना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दख्मा पारसी धर्म में अंतिम संस्कार का एक महत्वपूर्ण हिस्सा है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें शवों को ऊँची गोलाकार मीनारों पर रखा जाता है ताकि उन्हें गिद्धों द्वारा खाया जा सके।"
    },
    {
        question: "पारसी धर्म में, अग्नि (Fire) को किसका प्रतीक माना जाता है?",
        answers: [
            { text: "धन", correct: false },
            { text: "शक्ति", correct: false },
            { text: "पवित्रता और ईश्वर का प्रकाश", correct: true },
            { text: "प्रकृति", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारसी धर्म में अग्नि को अहुर मज़्दा की दिव्य पवित्रता और प्रकाश का प्रतीक माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, अग्नि मंदिर (Atash Behram) उनके पूजा स्थल होते हैं।"
    },
    {
        question: "पारसी धर्म के लोग किस देश से पलायन करके भारत आए थे?",
        answers: [
            { text: "सऊदी अरब", correct: false },
            { text: "मिस्र", correct: false },
            { text: "ईरान", correct: true },
            { text: "तुर्की", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस्लामिक आक्रमण के बाद, 8वीं से 10वीं शताब्दी के दौरान पारसी लोग अपनी धार्मिक स्वतंत्रता के लिए ईरान से पलायन करके भारत के पश्चिमी तट पर आए थे।"
    },
    {
        question: "पारसी धर्म के पूजा स्थल को किस नाम से जाना जाता है?",
        answers: [
            { text: "चर्च", correct: false },
            { text: "मस्जिद", correct: false },
            { text: "अग्नि मंदिर (Fire Temple)", correct: true },
            { text: "मंदिर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारसी लोग अग्नि को पवित्र मानते हैं और इसकी पूजा करते हैं, इसलिए उनके पूजा स्थलों को अग्नि मंदिर कहा जाता है।"
    },
    {
        question: "पारसी धर्म में अच्छाई, सत्य और व्यवस्था के सिद्धांत को क्या कहते हैं?",
        answers: [
            { text: "द्रुज (Druj)", correct: false },
            { text: "अशा (Asha)", correct: true },
            { text: "हउर्वातात (Haurvatat)", correct: false },
            { text: "अमेह (Ameh)", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अशा' पारसी धर्म की एक केंद्रीय अवधारणा है, जिसका अर्थ है सत्य, अच्छाई, पवित्रता और ब्रह्मांडीय व्यवस्था।"
    },
    {
        question: "पारसी धर्म में झूठ, बुराई और अराजकता के सिद्धांत को क्या कहते हैं?",
        answers: [
            { text: "अशा (Asha)", correct: false },
            { text: "द्रुज (Druj)", correct: true },
            { text: "अहुर", correct: false },
            { text: "मज़्दा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'द्रुज' पारसी धर्म में एक बुराई की अवधारणा है, जो अशा के बिल्कुल विपरीत है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका अर्थ है झूठ, अराजकता और बुराई।"
    },
    {
        question: "पारसी नव वर्ष को किस नाम से जाना जाता है?",
        answers: [
            { text: "पोंगल", correct: false },
            { text: "लोहड़ी", correct: false },
            { text: "नवरोज (Navroz)", correct: true },
            { text: "दीपावली", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नवरोज' का अर्थ है 'नया दिन'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पारसी नव वर्ष का त्योहार है, जो वसंत विषुव (vernal equinox) के दिन मनाया जाता है।"
    },
    {
        question: "अवेस्ता ग्रंथ किस भाषा में लिखा गया है?",
        answers: [
            { text: "अरबी", correct: false },
            { text: "फारसी", correct: false },
            { text: "अवेस्तान (Avestan)", correct: true },
            { text: "संस्कृत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवेस्ता ग्रंथ अवेस्तान नामक एक प्राचीन ईरानी भाषा में लिखा गया है, जो संस्कृत से काफी मिलती-जुलती है।"
    },
    {
        question: "पारसी धर्म में 'अतिश बहराम' (Atash Behram) क्या है?",
        answers: [
            { text: "एक प्रकार की प्रार्थना", correct: false },
            { text: "सबसे पवित्र अग्नि मंदिर", correct: true },
            { text: "एक त्योहार", correct: false },
            { text: "एक पवित्र पुस्तक का हिस्सा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अतिश बहराम' पारसी धर्म में अग्नि मंदिरों की सर्वोच्च श्रेणी है, जिसमें रखी गई अग्नि को विशेष अनुष्ठानों के बाद 16 विभिन्न स्रोतों से प्रज्वलित किया जाता है।"
    },
    {
        question: "पैगंबर जरथुस्त्र को किस उम्र में दिव्य ज्ञान प्राप्त हुआ था?",
        answers: [
            { text: "20 वर्ष", correct: false },
            { text: "30 वर्ष", correct: true },
            { text: "40 वर्ष", correct: false },
            { text: "50 वर्ष", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जरथुस्त्र को 30 वर्ष की आयु में अहुर मज़्दा से दिव्य ज्ञान प्राप्त हुआ था।"
    },
    {
        question: "पारसी धर्म में, आत्मा की अमरता और अंतिम निर्णय में विश्वास को क्या कहते हैं?",
        answers: [
            { text: "द्वैतवाद", correct: false },
            { text: "एकेश्वरवाद", correct: false },
            { text: "प्रलय", correct: false },
            { text: "पुनरुत्थान", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारसी धर्म में आत्मा की अमरता और एक अंतिम निर्णय (Last Judgment) में विश्वास किया जाता है, जहाँ अच्छे कर्मों का फल मिलता है और बुरे कर्मों का दंड।"
    },
    {
        question: "पारसी धर्म के अनुसार, मानव जीवन का उद्देश्य क्या है?",
        answers: [
            { text: "धन कमाना", correct: false },
            { text: "केवल पूजा करना", correct: false },
            { text: "अशा (सत्य) के मार्ग पर चलना", correct: true },
            { text: "द्रुज (झूठ) का पालन करना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारसी धर्म का मानना है कि मानव जीवन का उद्देश्य अशा (सत्य और अच्छाई) के मार्ग पर चलकर अहुर मज़्दा की सेवा करना है।"
    },
    {
        question: "'फारसी' शब्द का क्या अर्थ है?",
        answers: [
            { text: "अग्नि उपासक", correct: false },
            { text: "ईरान से आया हुआ", correct: true },
            { text: "भारत का मूल निवासी", correct: false },
            { text: "शांतिप्रिय", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'फारसी' शब्द फारस (Persia) से आया है, जो ईरान का पुराना नाम है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका अर्थ है 'ईरान का रहने वाला'।"
    },
    {
        question: "पारसी धर्म की किस धार्मिक प्रथा के तहत शवों को जलाया या दफनाया नहीं जाता है?",
        answers: [
            { text: "अग्नि पूजा", correct: false },
            { text: "दख्मा में शव रखना", correct: true },
            { text: "जल पूजा", correct: false },
            { text: "अंतिम संस्कार जुलूस", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारसी धर्म में अंतिम संस्कार की यह अनूठी प्रथा है, क्योंकि वे मानते हैं कि शव मिट्टी, अग्नि और जल को अपवित्र कर सकते हैं।"
    },
    {
        question: "भारत में पारसी समुदाय मुख्य रूप से किस शहर में बसा हुआ है?",
        answers: [
            { text: "दिल्ली", correct: false },
            { text: "कोलकाता", correct: false },
            { text: "चेन्नई", correct: false },
            { text: "मुंबई", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में पारसी समुदाय मुख्य रूप से मुंबई और गुजरात के कुछ हिस्सों में केंद्रित है।"
    },
    {
        question: "'फरवहर' (Faravahar) किसका प्रतीक है?",
        answers: [
            { text: "मानव आत्मा और धार्मिक यात्रा", correct: true },
            { text: "अग्नि", correct: false },
            { text: "अहुर मज़्दा", correct: false },
            { text: "सूर्य", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'फरवहर' पारसी धर्म का सबसे प्रसिद्ध प्रतीक है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मानव आत्मा और उसकी धार्मिक यात्रा का प्रतिनिधित्व करता है, जिसमें व्यक्ति को अच्छे विचार, अच्छे शब्द और अच्छे कर्म करने का निर्देश दिया जाता है।"
    },
    {
        question: "पारसी धर्म किस प्रकार के द्वैतवाद (Dualism) पर आधारित है?",
        answers: [
            { text: "अच्छे और बुरे का द्वैतवाद", correct: true },
            { text: "आत्मा और शरीर का द्वैतवाद", correct: false },
            { text: "पुरुष और महिला का द्वैतवाद", correct: false },
            { text: "जीवन और मृत्यु का द्वैतवाद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारसी धर्म अच्छे (अहुर मज़्दा) और बुरे (अंग्र मैन्यु) के बीच निरंतर संघर्ष पर आधारित है।"
    },
    {
        question: "जरथुस्त्र का जन्म कहाँ हुआ था?",
        answers: [
            { text: "भारत", correct: false },
            { text: "यूनान", correct: false },
            { text: "प्राचीन ईरान", correct: true },
            { text: "चीन", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पैगंबर जरथुस्त्र का जन्म प्राचीन ईरान में हुआ था, हालांकि उनकी जन्मभूमि को लेकर विद्वानों में मतभेद है।"
    },
    {
        question: "पारसी धर्म की प्रार्थनाओं और गीतों को क्या कहते हैं?",
        answers: [
            { text: "गाथा (Gathas)", correct: true },
            { text: "मंत्र", correct: false },
            { text: "सूक्त", correct: false },
            { text: "श्लोक", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गाथाएँ अवेस्ता का सबसे पुराना और पवित्र हिस्सा हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> माना जाता है कि ये स्वयं जरथुस्त्र द्वारा रचित हैं।"
    },
    {
        question: "'सस्सानियन साम्राज्य' (Sassanian Empire) के दौरान कौन-सा धर्म ईरान का राजकीय धर्म था?",
        answers: [
            { text: "इस्लाम", correct: false },
            { text: "यहूदी धर्म", correct: false },
            { text: "पारसी धर्म", correct: true },
            { text: "ईसाई धर्म", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सस्सानियन साम्राज्य (224-651 ईस्वी) के दौरान पारसी धर्म ईरान का राजकीय धर्म था, और इस समय इसका स्वर्ण युग था।"
    },
    {
        question: "पारसी धर्म में 'अग्नि की पूजा' करने वाले पुजारी को क्या कहते हैं?",
        answers: [
            { text: "इमाम", correct: false },
            { text: "मुअज्जिन", correct: false },
            { text: "मोबेद (Mobeds)", correct: true },
            { text: "पंडित", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मोबेद' पारसी धर्म में एक पुजारी होता है जो अग्नि मंदिर में धार्मिक अनुष्ठान और पूजा करता है।"
    },
    {
        question: "पारसी धर्म के अनुसार, अहुर मज़्दा ने किस आत्मा को अपना रचनात्मक और अच्छा पहलू माना?",
        answers: [
            { text: "अंग्र मैन्यु (Angra Mainyu)", correct: false },
            { text: "स्पेंता मैन्यु (Spenta Mainyu)", correct: true },
            { text: "द्रुज (Druj)", correct: false },
            { text: "अहुर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्पेंता मैन्यु 'पवित्र आत्मा' या अहुर मज़्दा का रचनात्मक और अच्छा पहलू है।<br><br><i class='fa-solid fa-angles-right icon'></i> अंग्र मैन्यु इसका विरोधी है, जो बुराई का प्रतीक है।"
    },
    {
        question: "पारसी धर्म की किस धार्मिक अवधारणा का अर्थ है 'सोचो अच्छा, बोलो अच्छा, करो अच्छा' (Good Thoughts, Good Words, Good Deeds)?",
        answers: [
            { text: "अशा (Asha)", correct: false },
            { text: "हुमाता (Humata), हुख्ता (Hukhta), हुवर्श्ता (Huvarshta)", correct: true },
            { text: "द्रुज (Druj)", correct: false },
            { text: "गाथा (Gathas)", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह पारसी धर्म का केंद्रीय नैतिक सिद्धांत है, जो जीवन जीने के सही तरीके को बताता है।"
    },
    {
        question: "अवेस्ता के सबसे पुराने और सबसे पवित्र भाग को क्या कहते हैं, जिसे जरथुस्त्र ने स्वयं लिखा माना जाता है?",
        answers: [
            { text: "गाथा (Gathas)", correct: true },
            { text: "यस्ना (Yasna)", correct: false },
            { text: "याश्त (Yasht)", correct: false },
            { text: "विदेवदत (Videvdad)", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गाथाएँ अवेस्ता का सबसे प्राचीन हिस्सा हैं, जिसमें जरथुस्त्र के उपदेशों और प्रार्थनाओं का संग्रह है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये पारसी धर्म के मूल सिद्धांतों का स्रोत हैं।"
    },
    {
        question: "पारसी धर्म में 'अमेश स्पेंतास' (Amesha Spentas) कौन हैं?",
        answers: [
            { text: "सात प्रमुख पुजारी", correct: false },
            { text: "सात पवित्र आत्माएँ या दिव्य प्राणी", correct: true },
            { text: "सात पवित्र पर्वत", correct: false },
            { text: "सात पवित्र अग्नि", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमेश स्पेंतास का अर्थ है 'अमर पवित्रता'।<br><br><i class='fa-solid fa-angles-right icon'></i> ये सात दिव्य प्राणी हैं जो अहुर मज़्दा के गुणों का प्रतिनिधित्व करते हैं, जैसे अच्छा मन, सत्य, शक्ति आदि।"
    },
    {
        question: "पारसी धर्म में 'इजाशन' (Izashan) नामक अनुष्ठान का मुख्य उद्देश्य क्या है?",
        answers: [
            { text: "मृतक आत्माओं को शांति देना", correct: false },
            { text: "किसी व्यक्ति को धर्म में दीक्षा देना", correct: false },
            { text: "अहुर मज़्दा और अमेश स्पेंतास की पूजा करना", correct: true },
            { text: "अग्नि मंदिर का उद्घाटन करना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'इजाशन' अवेस्ता का एक महत्वपूर्ण हिस्सा है और यह एक पूजा-पाठ का अनुष्ठान है जिसमें दिव्य प्राणियों (अहुर मज़्दा और अमेश स्पेंतास) की पूजा की जाती है।"
    },
    {
        question: "पारसी धर्म में, पृथ्वी, जल और वायु को अपवित्र होने से बचाने के लिए किस अंतिम संस्कार विधि का पालन किया जाता है?",
        answers: [
            { text: "शवों को जलाना", correct: false },
            { text: "शवों को दफनाना", correct: false },
            { text: "दख्मा में शवों को रखना", correct: true },
            { text: "शवों को नदी में बहाना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारसी मानते हैं कि शव अपवित्र होते हैं, और अगर उन्हें जलाया या दफनाया जाए तो वे अग्नि या पृथ्वी को दूषित कर देंगे।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए वे शवों को दख्मा में रखते हैं।"
    },
    {
        question: "'सस्सानियन साम्राज्य' के बाद ईरान में पारसी धर्म का पतन किस कारण हुआ?",
        answers: [
            { text: "मंगोल आक्रमण", correct: false },
            { text: "आंतरिक विद्रोह", correct: false },
            { text: "इस्लाम का उदय और अरबों का आक्रमण", correct: true },
            { text: "प्राकृतिक आपदाएँ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 7वीं शताब्दी में अरबों के आक्रमण और इस्लाम के उदय के बाद पारसी धर्म का पतन हुआ, और अधिकांश लोगों ने इस्लाम स्वीकार कर लिया या पलायन कर गए।"
    },
    {
        question: "'नवरोज' त्योहार को कौन-सा मुस्लिम समुदाय भी मनाता है?",
        answers: [
            { text: "सुन्नी", correct: false },
            { text: "शिया", correct: false },
            { text: "इस्माइली", correct: true },
            { text: "सूफी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवरोज त्योहार पारसी धर्म से उत्पन्न हुआ है, लेकिन इसे ईरान, मध्य एशिया और भारतीय उपमहाद्वीप के कुछ इस्माइली शिया मुस्लिम समुदाय भी मनाते हैं।"
    },
    {
        question: "पारसी धर्म में 'यस्ना' (Yasna) क्या है?",
        answers: [
            { text: "एक प्रकार का भोजन", correct: false },
            { text: "एक पूजा अनुष्ठान", correct: true },
            { text: "एक त्योहार", correct: false },
            { text: "एक पवित्र पुस्तक का नाम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यस्ना' अवेस्ता का एक हिस्सा है और यह एक केंद्रीय पूजा अनुष्ठान है जिसमें बलिदान और प्रार्थनाएँ शामिल होती हैं।"
    },
    {
        question: "'जेंद अवेस्ता' क्या है?",
        answers: [
            { text: "अवेस्ता का पुराना नाम", correct: false },
            { text: "अवेस्ता का फारसी में अनुवाद और व्याख्या", correct: true },
            { text: "अवेस्ता के अंतिम भाग का नाम", correct: false },
            { text: "अवेस्ता का एक अलग संस्करण", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जेंद अवेस्ता' अवेस्ता ग्रंथ का मूल नहीं है, बल्कि अवेस्ता का एक फारसी अनुवाद और उसकी व्याख्या है।"
    },
    {
        question: "पारसी धर्म के अनुसार, दुनिया के अंत में अच्छाई और बुराई के बीच अंतिम लड़ाई को क्या कहते हैं?",
        answers: [
            { text: "प्रलय", correct: false },
            { text: "फ्रशोकेरेति (Frashokereti)", correct: true },
            { text: "गाथा", correct: false },
            { text: "अशा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'फ्रशोकेरेति' का अर्थ है 'दुनिया का नवीनीकरण'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह वह समय है जब दुनिया को बुराई से मुक्त किया जाएगा और अच्छाई की विजय होगी।"
    },
    {
        question: "भारत में पारसी समुदाय के आगमन के बाद, उन्होंने सबसे पहले कहाँ शरण ली थी?",
        answers: [
            { text: "मुंबई", correct: false },
            { text: "गुजरात के संजान", correct: true },
            { text: "गोवा", correct: false },
            { text: "कोलकाता", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 8वीं शताब्दी में ईरान से पलायन करने के बाद, पारसी समुदाय सबसे पहले गुजरात के संजान नामक स्थान पर पहुँचा और वहाँ के राजा जाडी राणा ने उन्हें शरण दी।"
    },
    {
        question: "पारसी धर्म के अनुसार, 'हौमा' (Haoma) क्या है?",
        answers: [
            { text: "एक प्रकार की रोटी", correct: false },
            { text: "एक पवित्र पौधा और उसका रस", correct: true },
            { text: "एक अग्नि मंदिर", correct: false },
            { text: "एक देवता का नाम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हौमा' अवेस्ता में वर्णित एक पवित्र पौधा और उसका रस है, जिसका उपयोग धार्मिक अनुष्ठानों और पूजा में किया जाता है।"
    },
    {
        question: "'फरवहर' (Faravahar) के प्रतीक में, हाथ में पकड़ी गई अंगूठी किसका प्रतीक है?",
        answers: [
            { text: "विवाह", correct: false },
            { text: "वचन का सम्मान", correct: true },
            { text: "धन", correct: false },
            { text: "शक्ति", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फरवहर में व्यक्ति द्वारा पकड़ी गई अंगूठी वचन के सम्मान और वफादारी का प्रतीक है।"
    },
    {
        question: "पारसी धर्म का पालन करने वाले व्यक्ति को क्या कहते हैं?",
        answers: [
            { text: "ईसाई", correct: false },
            { text: "मुस्लिम", correct: false },
            { text: "पारसी या जोरोस्ट्रियन", correct: true },
            { text: "बौद्ध", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारसी धर्म के अनुयायियों को 'पारसी' कहा जाता है, जो 'फारस' (ईरान) शब्द से आया है, या 'जोरोस्ट्रियन' कहा जाता है, जो उनके पैगंबर जरथुस्त्र के नाम पर है।"
    },
    {
        question: "पारसी धर्म में, 'यज़तस' (Yazatas) कौन हैं?",
        answers: [
            { text: "मानव शिक्षक", correct: false },
            { text: "पूजनीय दिव्य प्राणी", correct: true },
            { text: "बुराई की आत्माएँ", correct: false },
            { text: "पवित्र पर्वत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यज़तस' का अर्थ है 'पूजनीय'।<br><br><i class='fa-solid fa-angles-right icon'></i> ये दिव्य प्राणी हैं जो अहुर मज़्दा के सहायक के रूप में कार्य करते हैं, जैसे मिथ्रा।"
    },
    {
        question: "पारसी धर्म का द्वैतवादी सिद्धांत, जिसमें अच्छा और बुरा हमेशा संघर्षरत रहते हैं, किन दो आत्माओं के बीच है?",
        answers: [
            { text: "अहुर मज़्दा और द्रुज", correct: false },
            { text: "स्पेंता मैन्यु और अंग्र मैन्यु", correct: true },
            { text: "अशा और द्रुज", correct: false },
            { text: "यज़तस और द्रुज", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारसी धर्म में, द्वैतवाद स्पेंता मैन्यु (पवित्र आत्मा) और अंग्र मैन्यु (बुरी आत्मा) के बीच के संघर्ष को संदर्भित करता है।"
    },
    {
        question: "पारसी धर्म में, किस प्राणी को अशुभ माना जाता है?",
        answers: [
            { text: "कुत्ता", correct: false },
            { text: "बिल्ली", correct: false },
            { text: "भेड़िया", correct: false },
            { text: "सूअर", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारसी धर्म में कुछ जानवरों को, जैसे सूअर, को अशुद्ध और अंग्र मैन्यु से जुड़ा हुआ माना जाता है।"
    },
    {
        question: "अवेस्ता के उस भाग का क्या नाम है जिसमें देवताओं और नायकों की प्रशंसा में भजन और प्रार्थनाएँ शामिल हैं?",
        answers: [
            { text: "गाथा", correct: false },
            { text: "यस्ना", correct: false },
            { text: "याश्त (Yasht)", correct: true },
            { text: "विदेवदत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> याश्त में पूजनीय प्राणियों (यज़तस) और नायकों की प्रशंसा में कई भजन और प्रार्थनाएँ शामिल हैं।"
    },
    {
        question: "भारत में पारसी समुदाय के लिए 'गुजरात' का ऐतिहासिक महत्व क्या है?",
        answers: [
            { text: "यह उनकी वर्तमान राजधानी है।", correct: false },
            { text: "यह वह स्थान है जहाँ वे ईरान से पलायन के बाद सबसे पहले पहुँचे।", correct: true },
            { text: "यह वह स्थान है जहाँ उनके सभी अग्नि मंदिर हैं।", correct: false },
            { text: "यह वह स्थान है जहाँ उनके संस्थापक का जन्म हुआ था।", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 8वीं शताब्दी में जब पारसी लोग ईरान से आए, तो उन्होंने गुजरात के संजान तट पर शरण ली।"
    },
    {
        question: "'फरवहर' के प्रतीक में, केंद्र में मानव आकृति किसका प्रतिनिधित्व करती है?",
        answers: [
            { text: "पैगंबर जरथुस्त्र", correct: false },
            { text: "अहुर मज़्दा", correct: false },
            { text: "मानव आत्मा (फरवशी)", correct: true },
            { text: "एक राजा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फरवहर में केंद्र की मानव आकृति मानव आत्मा, जिसे 'फरवशी' कहते हैं, का प्रतिनिधित्व करती है।"
    },
    {
        question: "पारसी धर्म में, 'पुनरुत्थान' और 'अंतिम निर्णय' की अवधारणा का संबंध किससे है?",
        answers: [
            { text: "भौतिक शरीर", correct: false },
            { text: "आत्मा", correct: false },
            { text: "दोनों (आत्मा और शरीर)", correct: true },
            { text: "केवल देवताओं", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारसी धर्म में यह माना जाता है कि अंतिम निर्णय के दिन आत्मा और शरीर दोनों का पुनरुत्थान होगा।"
    },
    {
        question: "पारसी धर्म में, 'नवरोज' त्योहार को कौन-सा प्राचीन ईरानी कैलेंडर का उपयोग करके मनाया जाता है?",
        answers: [
            { text: "सौर कैलेंडर", correct: false },
            { text: "चंद्र कैलेंडर", correct: false },
            { text: "शहेनशाही (Shahenshahi) कैलेंडर", correct: true },
            { text: "जॉर्जियन कैलेंडर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में पारसी समुदाय शहेनशाही कैलेंडर का उपयोग करके नवरोज मनाता है, जो ईरान में मनाए जाने वाले नवरोज से थोड़ा अलग है।"
    },
    {
        question: "'जेंद' (Zend) शब्द का क्या अर्थ है?",
        answers: [
            { text: "पवित्र अग्नि", correct: false },
            { text: "अवेस्ता का अनुवाद", correct: true },
            { text: "पारसी पुजारी", correct: false },
            { text: "पूजा का स्थान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जेंद' का अर्थ है 'व्याख्या' या 'अनुवाद'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अवेस्ता ग्रंथ का नहीं, बल्कि उसके अनुवाद और व्याख्या का संदर्भ देता है।"
    },
    {
        question: "पारसी धर्म में, 'अच्छे विचार, अच्छे शब्द और अच्छे कर्म' के सिद्धांत को क्या कहते हैं?",
        answers: [
            { text: "अशा", correct: false },
            { text: "द्रुज", correct: false },
            { text: "हुमाता, हुख्ता, हुवर्श्ता", correct: true },
            { text: "फ्रशोकेरेति", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह पारसी धर्म का केंद्रीय नैतिक संदेश है, जो एक आदर्श जीवन जीने का तरीका बताता है।"
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
  