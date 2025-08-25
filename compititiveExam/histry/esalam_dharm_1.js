const questions = [
    {
        topHeading: "इस्लाम धर्म पर आधारित बहुविकल्पी प्रश्न part 1 (quiz_no.33)"
    },
    {
        question: "इस्लाम धर्म के संस्थापक कौन थे?",
        answers: [
            { text: "पैगंबर मूसा", correct: false },
            { text: "पैगंबर ईसा", correct: false },
            { text: "पैगंबर मुहम्मद", correct: true },
            { text: "पैगंबर इब्राहीम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पैगंबर मुहम्मद को इस्लाम धर्म का संस्थापक माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उनका जन्म 570 ईस्वी में मक्का में हुआ था।"
    },
    {
        question: "इस्लाम का सबसे पवित्र ग्रंथ कौन-सा है?",
        answers: [
            { text: "बाइबिल", correct: false },
            { text: "वेद", correct: false },
            { text: "कुरान", correct: true },
            { text: "तोराह", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुरान इस्लाम का सबसे पवित्र ग्रंथ है, जिसे मुसलमानों का मानना है कि अल्लाह ने पैगंबर मुहम्मद पर जिब्राइल (Gabriel) नामक फरिश्ते के माध्यम से प्रकट किया था।"
    },
    {
        question: "इस्लाम में 'हिजरा' का क्या अर्थ है?",
        answers: [
            { text: "युद्ध", correct: false },
            { text: "हज यात्रा", correct: false },
            { text: "पैगंबर मुहम्मद का मक्का से मदीना प्रवास", correct: true },
            { text: "रोजा रखना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हिजरा' 622 ईस्वी में पैगंबर मुहम्मद और उनके अनुयायियों के मक्का से मदीना (उस समय याथ्रिब कहा जाता था) के प्रवास को कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी घटना से इस्लामी कैलेंडर की शुरुआत हुई।"
    },
    {
        question: "इस्लाम के पाँच स्तंभों (Five Pillars of Islam) में से कौन-सा पहला स्तंभ है?",
        answers: [
            { text: "हज (Hajj)", correct: false },
            { text: "शहादा (Shahada)", correct: true },
            { text: "सलात (Salat)", correct: false },
            { text: "ज़कात (Zakat)", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शहादा पहला और सबसे महत्वपूर्ण स्तंभ है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह विश्वास की घोषणा है कि \"अल्लाह के सिवा कोई उपास्य नहीं है, और मुहम्मद अल्लाह के रसूल हैं।\""
    },
    {
        question: "पैगंबर मुहम्मद का जन्म कहाँ हुआ था?",
        answers: [
            { text: "मदीना", correct: false },
            { text: "यरूशलम", correct: false },
            { text: "मक्का", correct: true },
            { text: "बगदाद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पैगंबर मुहम्मद का जन्म लगभग 570 ईस्वी में सऊदी अरब के मक्का शहर में हुआ था।"
    },
    {
        question: "'क़िबला' किस दिशा को इंगित करता है?",
        answers: [
            { text: "मदीना", correct: false },
            { text: "मक्का", correct: true },
            { text: "यरूशलम", correct: false },
            { text: "बगदाद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क़िबला' वह दिशा है जिसका सामना करके मुसलमान नमाज पढ़ते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह दिशा मक्का में स्थित काबा की ओर होती है।"
    },
    {
        question: "इस्लाम में 'रमज़ान' के महीने का क्या महत्व है?",
        answers: [
            { text: "हज यात्रा का महीना", correct: false },
            { text: "उपवास (रोजा) रखने का महीना", correct: true },
            { text: "पैगंबर मुहम्मद का जन्म का महीना", correct: false },
            { text: "ज़कात देने का महीना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रमज़ान इस्लामी कैलेंडर का नौवां महीना है, जिसे उपवास और आत्म-नियंत्रण के लिए पवित्र माना जाता है।"
    },
    {
        question: "'इमाम' शब्द का क्या अर्थ है?",
        answers: [
            { text: "शासक", correct: false },
            { text: "पुजारी", correct: false },
            { text: "नमाज का नेतृत्व करने वाला व्यक्ति", correct: true },
            { text: "पैगंबर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस्लाम में 'इमाम' उस व्यक्ति को कहते हैं जो सामूहिक नमाज (प्रार्थना) का नेतृत्व करता है।"
    },
    {
        question: "'काबा' कहाँ स्थित है?",
        answers: [
            { text: "यरूशलम", correct: false },
            { text: "मदीना", correct: false },
            { text: "मक्का", correct: true },
            { text: "बगदाद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काबा, जिसे 'अल्लाह का घर' भी कहा जाता है, एक घनाकार इमारत है जो मक्का में स्थित है और इस्लाम का सबसे पवित्र स्थल है।"
    },
    {
        question: "'हज' किस इस्लामी स्तंभ का हिस्सा है?",
        answers: [
            { text: "विश्वास (Shahada)", correct: false },
            { text: "नमाज (Salat)", correct: false },
            { text: "उपवास (Sawm)", correct: false },
            { text: "तीर्थयात्रा (Hajj)", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हज इस्लाम के पाँच स्तंभों में से एक है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मक्का की तीर्थयात्रा है जो प्रत्येक सक्षम मुसलमान के लिए जीवन में कम से कम एक बार करना अनिवार्य है।"
    },
    {
        question: "कुरान को कितने अध्यायों (सूरह) में विभाजित किया गया है?",
        answers: [
            { text: "100", correct: false },
            { text: "114", correct: true },
            { text: "120", correct: false },
            { text: "150", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुरान में कुल 114 अध्याय हैं, जिन्हें 'सूरह' कहा जाता है।"
    },
    {
        question: "पैगंबर मुहम्मद के बाद इस्लाम के पहले खलीफा कौन थे?",
        answers: [
            { text: "अली इब्न अबी तालिब", correct: false },
            { text: "उस्मान इब्न अफ्फान", correct: false },
            { text: "अबू बक्र", correct: true },
            { text: "उमर इब्न अल-खत्ताब", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पैगंबर मुहम्मद की मृत्यु के बाद, अबू बक्र को इस्लाम का पहला खलीफा (उत्तराधिकारी) चुना गया था।"
    },
    {
        question: "'शिया' और 'सुन्नी' इस्लाम के दो प्रमुख संप्रदाय किस विवाद से उत्पन्न हुए?",
        answers: [
            { text: "कुरान की व्याख्या", correct: false },
            { text: "नमाज की विधि", correct: false },
            { text: "पैगंबर के बाद के उत्तराधिकार का मुद्दा", correct: true },
            { text: "ज़कात का वितरण", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शिया और सुन्नी संप्रदायों के बीच मतभेद पैगंबर मुहम्मद की मृत्यु के बाद नेतृत्व के उत्तराधिकार को लेकर शुरू हुआ।<br><br><i class='fa-solid fa-angles-right icon'></i> सुन्नी अबू बक्र को मानते हैं, जबकि शिया अली को।"
    },
    {
        question: "'ईदुल फितर' का त्योहार किस घटना का प्रतीक है?",
        answers: [
            { text: "हज का समापन", correct: false },
            { text: "रमज़ान के उपवास का समापन", correct: true },
            { text: "पैगंबर मुहम्मद का जन्म", correct: false },
            { text: "नए इस्लामी वर्ष की शुरुआत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ईदुल फितर, जिसे 'मीठी ईद' भी कहते हैं, रमज़ान के पवित्र महीने के उपवास की समाप्ति के बाद मनाया जाता है।"
    },
    {
        question: "इस्लामी वास्तुकला में गुंबद (dome) और मेहराब (arch) की शुरुआत किसने की?",
        answers: [
            { text: "अरबों ने", correct: false },
            { text: "फारसियों ने", correct: true },
            { text: "मुगलों ने", correct: false },
            { text: "तुर्कों ने", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस्लामी वास्तुकला में गुंबद और मेहराब का प्रयोग मुख्य रूप से फारसी और बीजान्टिन वास्तुकला से प्रेरित है।"
    },
    {
        question: "'मस्जिद' शब्द का क्या अर्थ है?",
        answers: [
            { text: "सभा स्थल", correct: false },
            { text: "प्रार्थना स्थल", correct: true },
            { text: "शिक्षण स्थल", correct: false },
            { text: "न्याय का स्थल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मस्जिद' शब्द का शाब्दिक अर्थ है 'सजदा करने का स्थान', यानी वह स्थान जहाँ झुककर अल्लाह की इबादत की जाती है।"
    },
    {
        question: "'हुरमुज' जलडमरूमध्य का क्या महत्व है?",
        answers: [
            { text: "यह फारस की खाड़ी और ओमान की खाड़ी को जोड़ता है।", correct: true },
            { text: "यह दुनिया का सबसे लंबा जलडमरूमध्य है।", correct: false },
            { text: "यह व्यापार के लिए अनुपयोगी है।", correct: false },
            { text: "यह भूमध्य सागर और लाल सागर को जोड़ता है।", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुरमुज जलडमरूमध्य मध्य-पूर्व में एक महत्वपूर्ण समुद्री मार्ग है जो फारस की खाड़ी को ओमान की खाड़ी से जोड़ता है।"
    },
    {
        question: "इस्लाम में 'अस्मा-उल-हुस्ना' का क्या अर्थ है?",
        answers: [
            { text: "पैगंबर मुहम्मद के नाम", correct: false },
            { text: "अल्लाह के 99 नाम", correct: true },
            { text: "कुरान की आयतें", correct: false },
            { text: "फरिश्तों के नाम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अस्मा-उल-हुस्ना' का अर्थ है 'सबसे सुंदर नाम', जो अल्लाह के 99 गुणों और नामों को संदर्भित करता है।"
    },
    {
        question: "'उम्माह' शब्द का क्या अर्थ है?",
        answers: [
            { text: "मुस्लिम समुदाय", correct: true },
            { text: "इस्लामी कानून", correct: false },
            { text: "कुरान का एक भाग", correct: false },
            { text: "प्रार्थना का एक रूप", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उम्माह' का अर्थ है विश्व भर में सभी मुसलमानों का समुदाय।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक वैश्विक मुस्लिम भाईचारे की भावना को दर्शाता है।"
    },
    {
        question: "'मुआविया' किस खलीफा के बाद बने?",
        answers: [
            { text: "अली", correct: true },
            { text: "अबू बक्र", correct: false },
            { text: "उमर", correct: false },
            { text: "उस्मान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुआविया इब्न अबी सुफयान, अली इब्न अबी तालिब के बाद उमय्यद खिलाफत के पहले खलीफा बने, जिसने इस्लामी दुनिया को एक नए राजनीतिक युग में प्रवेश कराया।"
    },
    {
        question: "इस्लामी कैलेंडर का पहला महीना कौन-सा है?",
        answers: [
            { text: "रमज़ान", correct: false },
            { text: "सफर", correct: false },
            { text: "मुहर्रम", correct: true },
            { text: "शाबान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुहर्रम इस्लामी कैलेंडर का पहला महीना है।"
    },
    {
        question: "'शरीयत' का क्या अर्थ है?",
        answers: [
            { text: "प्रार्थना का समय", correct: false },
            { text: "इस्लामी कानून", correct: true },
            { text: "धार्मिक उपदेश", correct: false },
            { text: "हज का अनुष्ठान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शरीयत' इस्लामी कानून और सिद्धांतों का एक समूह है, जो कुरान और हदीस पर आधारित है।"
    },
    {
        question: "'ईदुल अज़हा' का त्योहार किस घटना की याद दिलाता है?",
        answers: [
            { text: "रमज़ान का समापन", correct: false },
            { text: "पैगंबर इब्राहीम द्वारा अपने पुत्र की कुर्बानी", correct: true },
            { text: "पैगंबर मुहम्मद का मक्का से मदीना प्रवास", correct: false },
            { text: "काबा का निर्माण", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ईदुल अज़हा, जिसे 'बकरीद' भी कहते हैं, पैगंबर इब्राहीम की अल्लाह के प्रति अपने पुत्र इस्माइल की कुर्बानी देने की तत्परता का सम्मान करता है।"
    },
    {
        question: "इस्लाम में 'हदीस' का क्या महत्व है?",
        answers: [
            { text: "यह कुरान से भी अधिक पवित्र है।", correct: false },
            { text: "यह पैगंबर मुहम्मद के कथनों और कार्यों का संग्रह है।", correct: true },
            { text: "यह केवल शिया संप्रदाय के लिए महत्वपूर्ण है।", correct: false },
            { text: "इसका इस्लाम में कोई महत्व नहीं है।", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हदीस' पैगंबर मुहम्मद के कथनों, कार्यों और अनुमोदनों का संग्रह है, जो कुरान के बाद इस्लामी कानून और नैतिकता का दूसरा सबसे महत्वपूर्ण स्रोत है।"
    },
    {
        question: "मक्का में स्थित 'काबा' को किस नाम से भी जाना जाता है?",
        answers: [
            { text: "मस्जिदे-नबवी", correct: false },
            { text: "मस्जिदे-अक्सा", correct: false },
            { text: "बैतुल्लाह", correct: true },
            { text: "गुंबद-ए-सहरा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बैतुल्लाह' का अर्थ है 'अल्लाह का घर', जो काबा का एक और नाम है।"
    },
    {
        question: "इस्लाम में 'नमाज' का क्या अर्थ है?",
        answers: [
            { text: "दान देना", correct: false },
            { text: "उपवास करना", correct: false },
            { text: "दिन में पाँच बार की प्रार्थना", correct: true },
            { text: "तीर्थयात्रा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नमाज (या सलात) इस्लाम के पाँच स्तंभों में से एक है, जिसमें मुसलमानों को दिन में पाँच बार एक निर्धारित तरीके से अल्लाह की इबादत करनी होती है।"
    },
    {
        question: "कुरान के अनुसार, अल्लाह ने किस फरिश्ते के माध्यम से पैगंबर मुहम्मद को संदेश भेजे थे?",
        answers: [
            { text: "इज़राइल", correct: false },
            { text: "जिब्राइल", correct: true },
            { text: "मिकाइल", correct: false },
            { text: "इसराफिल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस्लामी मान्यता के अनुसार, जिब्राइल (गैब्रियल) वह फरिश्ता था जिसने अल्लाह के संदेश को पैगंबर मुहम्मद तक पहुँचाया था।"
    },
    {
        question: "'जकात' का क्या अर्थ है?",
        answers: [
            { text: "हज", correct: false },
            { text: "दान", correct: true },
            { text: "उपवास", correct: false },
            { text: "प्रार्थना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जकात इस्लाम के पाँच स्तंभों में से एक है, जिसमें प्रत्येक धनी मुसलमान को अपनी संपत्ति का एक निर्धारित हिस्सा गरीबों और जरूरतमंदों को दान करना होता है।"
    },
    {
        question: "पैगंबर मुहम्मद की पहली पत्नी का क्या नाम था?",
        answers: [
            { text: "आयशा", correct: false },
            { text: "फातिमा", correct: false },
            { text: "खदीजा", correct: true },
            { text: "जैनब", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खदीजा बिन्त खुवाइलिद पैगंबर मुहम्मद की पहली पत्नी थीं और इस्लाम स्वीकार करने वाली पहली महिला भी थीं।"
    },
    {
        question: "'Jihad' शब्द का वास्तविक अर्थ क्या है?",
        answers: [
            { text: "युद्ध", correct: false },
            { text: "आतंकवादी गतिविधि", correct: false },
            { text: "संघर्ष या प्रयास करना", correct: true },
            { text: "धर्म परिवर्तन", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जिहाद' का शाब्दिक अर्थ है 'संघर्ष' या 'प्रयास'।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका उपयोग बाहरी बुराइयों के खिलाफ संघर्ष (छोटा जिहाद) और अपनी आंतरिक बुराइयों के खिलाफ संघर्ष (बड़ा जिहाद) दोनों के लिए किया जाता है।"
    },
    {
        question: "'मस्जिद-ए-अक्सा' (Al-Aqsa Mosque) कहाँ स्थित है?",
        answers: [
            { text: "मक्का", correct: false },
            { text: "मदीना", correct: false },
            { text: "यरूशलम", correct: true },
            { text: "बगदाद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यरूशलम में स्थित 'मस्जिद-ए-अक्सा' इस्लाम के तीन सबसे पवित्र स्थलों में से एक है।"
    },
    {
        question: "'शिया' मुसलमानों का मानना है कि पैगंबर मुहम्मद के वास्तविक उत्तराधिकारी कौन थे?",
        answers: [
            { text: "अबू बक्र", correct: false },
            { text: "उमर", correct: false },
            { text: "उस्मान", correct: false },
            { text: "अली", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शिया मुसलमानों का मानना है कि पैगंबर मुहम्मद के दामाद अली इब्न अबी तालिब उनके वास्तविक और दिव्य उत्तराधिकारी थे।"
    },
    {
        question: "पैगंबर मुहम्मद की पुत्री का क्या नाम था, जिनसे शिया संप्रदाय के इमामों का वंश चला?",
        answers: [
            { text: "आयशा", correct: false },
            { text: "खदीजा", correct: false },
            { text: "फातिमा", correct: true },
            { text: "जैनब", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फातिमा बिन्त मुहम्मद, पैगंबर मुहम्मद की पुत्री थीं, जिनसे शिया संप्रदाय के इमामों हसन और हुसैन का वंश चला।"
    },
    {
        question: "'सूफीवाद' का क्या अर्थ है?",
        answers: [
            { text: "इस्लामी कानून का कड़ाई से पालन", correct: false },
            { text: "ईश्वर की खोज में रहस्यवादी और आध्यात्मिक साधना", correct: true },
            { text: "राजनीतिक सत्ता का विस्तार", correct: false },
            { text: "कुरान का शाब्दिक अर्थ लगाना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूफीवाद इस्लाम का एक रहस्यवादी और आध्यात्मिक पक्ष है जो ईश्वर के साथ सीधे व्यक्तिगत संबंध और प्रेम पर जोर देता है।"
    },
    {
        question: "'मदीना' शहर का पुराना नाम क्या था?",
        answers: [
            { text: "मक्का", correct: false },
            { text: "यथ्रिब", correct: true },
            { text: "बगदाद", correct: false },
            { text: "दमिश्क", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मदीना को पहले 'यथ्रिब' के नाम से जाना जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> 622 ईस्वी में पैगंबर मुहम्मद के वहाँ प्रवास के बाद इसका नाम बदलकर 'मदीना' (जिसका अर्थ है शहर) रखा गया।"
    },
    {
        question: "'ईद' का त्योहार प्रतिवर्ष कितनी बार मनाया जाता है?",
        answers: [
            { text: "एक बार", correct: false },
            { text: "दो बार", correct: true },
            { text: "तीन बार", correct: false },
            { text: "चार बार", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुसलमान प्रतिवर्ष दो मुख्य ईद मनाते हैं: 'ईदुल फितर' (रमज़ान के बाद) और 'ईदुल अज़हा' (हज के बाद)।"
    },
    {
        question: "किस खलीफा के काल में कुरान को एक पुस्तक के रूप में संकलित किया गया था?",
        answers: [
            { text: "अबू बक्र", correct: false },
            { text: "उमर", correct: false },
            { text: "उस्मान", correct: true },
            { text: "अली", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तीसरे खलीफा उस्मान के शासनकाल में, कुरान को प्रामाणिक रूप से एक ही पुस्तक में संकलित किया गया था, ताकि विभिन्न पाठों के बीच मतभेदों को दूर किया जा सके।"
    },
    {
        question: "इस्लामी कैलेंडर को 'हिजरी कैलेंडर' क्यों कहा जाता है?",
        answers: [
            { text: "यह पैगंबर मुहम्मद के जन्म से शुरू हुआ।", correct: false },
            { text: "यह हिजरा (प्रवास) की घटना से शुरू हुआ।", correct: true },
            { text: "इसका आविष्कार हिज्र नामक विद्वान ने किया था।", correct: false },
            { text: "यह मक्का के युद्ध से शुरू हुआ।", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिजरी कैलेंडर 622 ईस्वी में हुई पैगंबर मुहम्मद के मक्का से मदीना प्रवास (हिजरा) की घटना से शुरू होता है।"
    },
    {
        question: "'सूरा' शब्द का क्या अर्थ है?",
        answers: [
            { text: "कुरान का एक छंद", correct: false },
            { text: "कुरान का एक अध्याय", correct: true },
            { text: "नमाज का एक भाग", correct: false },
            { text: "पैगंबर का उपदेश", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सूरा' कुरान के अध्याय को कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> कुरान में कुल 114 सूरा हैं।"
    },
    {
        question: "इस्लाम में 'शरीयत' के मुख्य स्रोत क्या हैं?",
        answers: [
            { text: "केवल कुरान", correct: false },
            { text: "कुरान और हदीस", correct: true },
            { text: "केवल हदीस", correct: false },
            { text: "शासक के आदेश", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शरीयत के दो मुख्य स्रोत कुरान (अल्लाह का प्रत्यक्ष वचन) और हदीस (पैगंबर मुहम्मद के कथन और कार्य) हैं।"
    },
    {
        question: "उमय्यद खिलाफत की राजधानी क्या थी?",
        answers: [
            { text: "मक्का", correct: false },
            { text: "बगदाद", correct: false },
            { text: "दमिश्क", correct: true },
            { text: "काहिरा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुआविया द्वारा स्थापित उमय्यद खिलाफत की राजधानी दमिश्क (सीरिया) थी।"
    },
    {
        question: "इस्लामी इतिहास में 'मुहर्रम' का महीना किस घटना के लिए महत्वपूर्ण है?",
        answers: [
            { text: "पैगंबर मुहम्मद का जन्म", correct: false },
            { text: "हज का समापन", correct: false },
            { text: "इमाम हुसैन की शहादत", correct: true },
            { text: "कुरान का अवतरण", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुहर्रम का महीना शिया मुसलमानों के लिए बहुत महत्वपूर्ण है क्योंकि यह पैगंबर मुहम्मद के नवासे इमाम हुसैन की कर्बला में शहादत की याद दिलाता है।"
    },
    {
        question: "'पैगंबर' शब्द का क्या अर्थ है?",
        answers: [
            { text: "राजा", correct: false },
            { text: "ईश्वर का संदेशवाहक", correct: true },
            { text: "संत", correct: false },
            { text: "विद्वान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पैगंबर' वह व्यक्ति होता है जिसे अल्लाह ने मानवता तक अपना संदेश पहुँचाने के लिए चुना हो।"
    },
    {
        question: "'सजदा' का क्या अर्थ है?",
        answers: [
            { text: "खड़े होकर प्रार्थना करना", correct: false },
            { text: "घुटनों के बल बैठना", correct: false },
            { text: "माथा टेककर प्रणाम करना", correct: true },
            { text: "हाथ उठाकर दुआ करना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सजदा' नमाज का एक हिस्सा है जिसमें मुस्लिम अल्लाह के सामने पूरी तरह से झुककर माथा जमीन पर रखते हैं।"
    },
    {
        question: "'फतह' शब्द का क्या अर्थ है?",
        answers: [
            { text: "इस्लाम का विस्तार", correct: false },
            { text: "प्रार्थना का समय", correct: false },
            { text: "विजय", correct: true },
            { text: "धन", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'फतह' का अर्थ है 'विजय' या 'जीत'।<br><br><i class='fa-solid fa-angles-right icon'></i> 'फतह मक्का' का अर्थ है मक्का की विजय।"
    },
    {
        question: "'खलीफा' शब्द का शाब्दिक अर्थ क्या है?",
        answers: [
            { text: "पैगंबर", correct: false },
            { text: "ईश्वर", correct: false },
            { text: "उत्तराधिकारी", correct: true },
            { text: "शासक", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खलीफा' का अर्थ है 'उत्तराधिकारी' या 'प्रतिनिधि'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पैगंबर मुहम्मद के बाद इस्लामी समुदाय के प्रमुख को दिया गया शीर्षक था।"
    },
    {
        question: "किस खलीफा के शासनकाल में इस्लामी साम्राज्य का सबसे अधिक विस्तार हुआ?",
        answers: [
            { text: "अबू बक्र", correct: false },
            { text: "उमर", correct: true },
            { text: "उस्मान", correct: false },
            { text: "अली", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दूसरे खलीफा उमर इब्न अल-खत्ताब के शासनकाल में, इस्लामी साम्राज्य का सबसे अधिक भौगोलिक विस्तार हुआ, जिसमें फारस और बीजान्टिन साम्राज्य के बड़े हिस्से पर विजय प्राप्त की गई।"
    },
    {
        question: "इस्लाम में 'अकीदा' का क्या अर्थ है?",
        answers: [
            { text: "इस्लामी कानून", correct: false },
            { text: "विश्वास के सिद्धांत", correct: true },
            { text: "प्रार्थना का तरीका", correct: false },
            { text: "दान देने का नियम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अकीदा' का अर्थ है 'पंथ' या 'विश्वास', जो इस्लाम के मूल सिद्धांतों जैसे अल्लाह, पैगंबरों और परलोक में विश्वास को संदर्भित करता है।"
    },
    {
        question: "'हज' किस शहर की तीर्थयात्रा है?",
        answers: [
            { text: "मदीना", correct: false },
            { text: "मक्का", correct: true },
            { text: "यरूशलम", correct: false },
            { text: "बगदाद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हज' इस्लाम के पाँच स्तंभों में से एक है, जो मक्का में काबा की तीर्थयात्रा है।"
    },
    {
        question: "'शरिया' के अनुसार, शराब को किस श्रेणी में रखा गया है?",
        answers: [
            { text: "मुबाह (अनुमेय)", correct: false },
            { text: "हलाल (वैध)", correct: false },
            { text: "मकरूह (अनिच्छुक)", correct: false },
            { text: "हराम (निषिद्ध)", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शरिया' (इस्लामी कानून) में शराब (अल्कोहल) को पूरी तरह से 'हराम' या निषिद्ध माना गया है।"
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