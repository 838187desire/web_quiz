const questions = [
    {
        topHeading: "पारसी धर्म पर आधारित बहुविकल्पी प्रश्न part 4 (quiz_no.48)"
    },
    {
        question: "पारसी धर्म में, 'अमेश स्पेंतास' में से 'अमेषा स्पेंता' में 'वोहू मनह' (Vohu Manah) किसका प्रतिनिधित्व करता है?",
        answers: [
            { text: "अच्छा मन", correct: true },
            { text: "सत्य", correct: false },
            { text: "शक्ति", correct: false },
            { text: "भक्ति", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वोहू मनह' का अर्थ 'अच्छा मन' है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अहुर मज़्दा की एक दिव्य शक्ति है, जो अच्छे विचार, ज्ञान और ज्ञानोदय का प्रतीक है।"
    },
    {
        question: "'किस्सा-ए-संजान' (Qissa-i Sanjan) क्या है?",
        answers: [
            { text: "पारसी धर्म का एक पवित्र ग्रंथ", correct: false },
            { text: "भारत में पारसियों के आगमन का ऐतिहासिक दस्तावेज", correct: true },
            { text: "एक पारसी त्योहार", correct: false },
            { text: "एक प्रकार की प्रार्थना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'किस्सा-ए-संजान' एक फारसी कविता है जो 16वीं शताब्दी में लिखी गई थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें ईरान से भारत में पारसियों के प्रवास और गुजरात के संजान में उनके बसने का वर्णन है।"
    },
    {
        question: "पारसी धर्म में, 'अग्नि मंदिर' में अग्नि को किस प्रकार प्रज्वलित किया जाता है?",
        answers: [
            { text: "बिजली से", correct: false },
            { text: "माचिस से", correct: false },
            { text: "सूर्य के प्रकाश और लेंस से", correct: false },
            { text: "केवल पवित्र और प्राकृतिक तरीकों से", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारसी धर्म में अग्नि को अत्यधिक पवित्र माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे बिजली या माचिस से नहीं, बल्कि प्राकृतिक तरीकों से, जैसे कि सूर्य के प्रकाश और विशेष लकड़ियों से प्रज्वलित किया जाता है।"
    },
    {
        question: "'जश्ने' (Jashne) क्या है?",
        answers: [
            { text: "एक सामूहिक धार्मिक समारोह", correct: true },
            { text: "एक प्रकार का भोजन", correct: false },
            { text: "एक प्रकार की प्रार्थना", correct: false },
            { text: "एक पवित्र पुस्तक", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जश्ने' एक पारसी धार्मिक समारोह है जो आमतौर पर समुदाय द्वारा मिलकर एक विशेष अवसर या त्योहार पर मनाया जाता है।"
    },
    {
        question: "पारसी धर्म के अनुसार, 'अहुर मज़्दा' द्वारा बनाई गई सात कृतियों में से 'पशुओं' का संबंध किस अमेश स्पेंता से है?",
        answers: [
            { text: "अशा वहिश्ता", correct: false },
            { text: "वोहू मनह (Vohu Manah)", correct: true },
            { text: "खशथ्रा वैर्या", correct: false },
            { text: "हउर्वातात", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वोहू मनह' (अच्छा मन) का संबंध पशुओं की रचना से है, क्योंकि यह अहुर मज़्दा की देखभाल और संरक्षण का प्रतिनिधित्व करता है।"
    },
    {
        question: "'दख्मा' (Dakhma) या 'टॉवर ऑफ साइलेंस' कहाँ स्थित होते हैं?",
        answers: [
            { text: "शहरों के अंदर", correct: false },
            { text: "शहरों के बाहर, ऊँची जगहों पर", correct: true },
            { text: "नदी के किनारे", correct: false },
            { text: "समुद्र के किनारे", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दख्मा को शहरों से दूर, ऊँची पहाड़ियों पर बनाया जाता है ताकि शवों से होने वाली अशुद्धता शहरों तक न पहुँचे।"
    },
    {
        question: "'फरवहर' प्रतीक में, निचले हिस्से में पूंछ की तीन परतें किसका प्रतिनिधित्व करती हैं?",
        answers: [
            { text: "अच्छे विचार, अच्छे शब्द, अच्छे कर्म", correct: false },
            { text: "बुरे विचार, बुरे शब्द, बुरे कर्म", correct: true },
            { text: "जन्म, जीवन, मृत्यु", correct: false },
            { text: "अतीत, वर्तमान, भविष्य", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फरवहर के निचले हिस्से में तीन परतें उन बुराइयों को दर्शाती हैं जिनसे इंसान को बचना चाहिए।"
    },
    {
        question: "पारसी धर्म में, 'सुद्रेह' (Sudreh) और 'कष्टि' (Kushti) पहनने की प्रथा का क्या अर्थ है?",
        answers: [
            { text: "यह एक फैशन है।", correct: false },
            { text: "यह पहचान और धार्मिकता का प्रतीक है।", correct: true },
            { text: "यह एक प्रकार का ताबीज है।", correct: false },
            { text: "यह एक सजावटी वस्तु है।", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुद्रेह' और 'कष्टि' पारसी धर्म के अनुयायियों की पहचान हैं और यह उनके धार्मिक सिद्धांतों के प्रति उनकी प्रतिबद्धता को दर्शाते हैं।"
    },
    {
        question: "पारसी धर्म में, 'अग्नि मंदिर' में प्रवेश से पहले सिर को क्यों ढँकना अनिवार्य है?",
        answers: [
            { text: "यह एक परंपरा है।", correct: false },
            { text: "यह सम्मान और विनम्रता का प्रतीक है।", correct: false },
            { text: "यह अग्नि को अशुद्धता से बचाता है।", correct: false },
            { text: "ये सभी", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिर को ढँकना पवित्रता, सम्मान और विनम्रता का प्रतीक है और यह पवित्र अग्नि के प्रति सम्मान को दर्शाता है।"
    },
    {
        question: "'साओश्यंत' (Saoshyant) कौन है?",
        answers: [
            { text: "एक राजा", correct: false },
            { text: "एक महान पुजारी", correct: false },
            { text: "अंतिम मुक्तिदाता", correct: true },
            { text: "एक योद्धा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारसी धर्म में, 'साओश्यंत' एक मसीहाई आकृति है जो दुनिया के अंत में अच्छाई की अंतिम विजय सुनिश्चित करने के लिए आएगा।"
    },
    {
        question: "'खुर्दह अवेस्ता' (Khordeh Avesta) में क्या शामिल है?",
        answers: [
            { text: "जरथुस्त्र के उपदेश", correct: false },
            { text: "दैनिक प्रार्थनाएँ और भजन", correct: true },
            { text: "धार्मिक कानून", correct: false },
            { text: "देवताओं के बारे में कहानियाँ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खुर्दह अवेस्ता' का अर्थ 'छोटी अवेस्ता' है और यह पारसी अनुयायियों द्वारा घर पर या अग्नि मंदिर में उपयोग की जाने वाली दैनिक प्रार्थनाओं की एक पुस्तक है।"
    },
    {
        question: "पारसी धर्म में, 'अमेश स्पेंता' में से 'खशथ्रा वैर्या' (Khshathra Vairya) किसका प्रतिनिधित्व करता है?",
        answers: [
            { text: "अच्छा मन", correct: false },
            { text: "सत्य", correct: false },
            { text: "वांछित प्रभुत्व या शक्ति", correct: true },
            { text: "भक्ति", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खशथ्रा वैर्या' का अर्थ है 'वांछित प्रभुत्व'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अहुर मज़्दा की शक्ति और प्रभुत्व का प्रतीक है, और यह आकाश की रचना से जुड़ा है।"
    },
    {
        question: "पारसी धर्म के अनुसार, मानव का प्राथमिक कर्तव्य क्या है?",
        answers: [
            { text: "केवल अग्नि की पूजा करना", correct: false },
            { text: "अच्छा सोचना, अच्छा बोलना और अच्छा करना", correct: true },
            { text: "केवल धार्मिक अनुष्ठान करना", correct: false },
            { text: "धन कमाना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारसी धर्म का केंद्रीय नैतिक सिद्धांत 'हुमाता, हुख्ता, हुवर्श्ता' है, जिसका अर्थ है 'अच्छे विचार, अच्छे शब्द, अच्छे कर्म'।"
    },
    {
        question: "पारसी धर्म में, 'पुनर्जन्म' की अवधारणा है या नहीं?",
        answers: [
            { text: "है", correct: false },
            { text: "नहीं है", correct: true },
            { text: "केवल कुछ संप्रदायों में है", correct: false },
            { text: "यह एक रहस्य है", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारसी धर्म में 'पुनर्जन्म' का सिद्धांत नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> उनका मानना है कि मृत्यु के बाद आत्मा 'अंतिम निर्णय' का सामना करती है।"
    },
    {
        question: "'अहुर मज़्दा' का प्रतीक क्या है?",
        answers: [
            { text: "सूर्य", correct: false },
            { text: "चन्द्रमा", correct: false },
            { text: "अग्नि", correct: false },
            { text: "कोई नहीं, क्योंकि वे निराकार हैं।", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारसी धर्म एकेश्वरवादी है और अहुर मज़्दा को निराकार मानता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अग्नि उनका प्रतीक नहीं, बल्कि उनकी पवित्रता और प्रकाश का प्रतिनिधित्व करती है।"
    },
    {
        question: "पारसी धर्म में 'पवित्र अग्नि' को बनाए रखने की जिम्मेदारी किसकी होती है?",
        answers: [
            { text: "किसी भी पारसी की", correct: false },
            { text: "केवल महिलाएँ", correct: false },
            { text: "केवल पुजारी (मोबेद)", correct: true },
            { text: "किसी भी भक्त की", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अग्नि मंदिर में पवित्र अग्नि को प्रज्वलित रखने और उसकी देखभाल करने का कार्य केवल पुजारी (मोबेद) ही करते हैं।"
    },
    {
        question: "पारसी धर्म के अनुसार, 'अंतिम निर्णय' के बाद अच्छे लोग जहाँ जाते हैं, उस स्थान को क्या कहते हैं?",
        answers: [
            { text: "जन्नत", correct: false },
            { text: "जहन्नुम", correct: false },
            { text: "गरो देमाना (Garodemana)", correct: true },
            { text: "पुनरुत्थान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गरो देमाना' का अर्थ 'गीत का घर' है और यह पारसी धर्म में स्वर्ग को संदर्भित करता है।"
    },
    {
        question: "'शाहनामा' नामक महाकाव्य में किस धर्म के राजाओं और नायकों का वर्णन है?",
        answers: [
            { text: "मुस्लिम", correct: false },
            { text: "पारसी", correct: true },
            { text: "हिन्दू", correct: false },
            { text: "बौद्ध", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शाहनामा' में प्राचीन फारसी राजाओं और नायकों का वर्णन है, जो पारसी धर्म का पालन करते थे।"
    },
    {
        question: "पारसी धर्म में, 'गाथा' का क्या महत्व है?",
        answers: [
            { text: "यह पारसी धर्म की एकमात्र पवित्र पुस्तक है।", correct: false },
            { text: "यह जरथुस्त्र के मूल उपदेशों का सबसे प्रामाणिक स्रोत है।", correct: true },
            { text: "यह बाद के पुजारियों द्वारा लिखी गई है।", correct: false },
            { text: "यह केवल अंतिम संस्कार के लिए प्रयोग होती है।", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गाथाएँ अवेस्ता का सबसे प्राचीन हिस्सा हैं और माना जाता है कि ये स्वयं जरथुस्त्र द्वारा रची गई थीं।"
    },
    {
        question: "पारसी धर्म में 'अंतिम निर्णय' को किस नाम से जाना जाता है?",
        answers: [
            { text: "फ्रशोकेरेति (Frashokereti)", correct: true },
            { text: "अशा", correct: false },
            { text: "द्रुज", correct: false },
            { text: "साओश्यंत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'फ्रशोकेरेति' का अर्थ 'दुनिया का नवीनीकरण' है और यह उस अंतिम समय को संदर्भित करता है जब अच्छाई बुराई पर अंतिम रूप से विजय प्राप्त करेगी।"
    },
    {
        question: "पारसी धर्म के अनुसार, 'अंग्र मैन्यु' का क्या अर्थ है?",
        answers: [
            { text: "बुराई की आत्मा", correct: true },
            { text: "पवित्र आत्मा", correct: false },
            { text: "बुद्धिमान प्रभु", correct: false },
            { text: "अच्छा मन", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अंग्र मैन्यु' का अर्थ 'बुरी आत्मा' है।<br><br><i class='fa-solid fa-angles-right icon'></i> वह पारसी धर्म में अहुर मज़्दा का विरोधी है और बुराई, झूठ और अंधकार का प्रतीक है।"
    },
    {
        question: "पारसी धर्म में, 'चिनवत ब्रिज' (Chinvat Bridge) का क्या अर्थ है?",
        answers: [
            { text: "एक पवित्र नदी", correct: false },
            { text: "एक पुल जो स्वर्ग और नर्क को जोड़ता है", correct: true },
            { text: "एक पर्वत", correct: false },
            { text: "एक पवित्र अग्नि", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चिनवत ब्रिज' को 'निर्णय का पुल' कहा जाता है, जहाँ आत्मा को उसके कर्मों के आधार पर स्वर्ग या नर्क भेजा जाता है।"
    },
    {
        question: "पारसी धर्म में, 'अवेस्ता' के किस भाग में शुद्धता और अशुद्धता से संबंधित कानूनों का वर्णन है?",
        answers: [
            { text: "गाथा", correct: false },
            { text: "यस्ना", correct: false },
            { text: "याश्त", correct: false },
            { text: "विदेवदत (Videvdad)", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विदेवदत' का अर्थ 'दानवों से बचने का कानून' है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस भाग में अनुष्ठानिक शुद्धता और अशुद्धता से संबंधित नियम दिए गए हैं।"
    },
    {
        question: "पारसी धर्म में, 'अग्नि' का उपयोग क्या दर्शाता है?",
        answers: [
            { text: "पूजा", correct: false },
            { text: "शुद्धिकरण", correct: false },
            { text: "दिव्यता", correct: false },
            { text: "ये सभी", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारसी धर्म में अग्नि पवित्रता, शुद्धिकरण और अहुर मज़्दा की दिव्य उपस्थिति का प्रतीक है।"
    },
    {
        question: "पारसी धर्म में, 'विवाह' के दौरान पवित्र अग्नि की उपस्थिति क्या दर्शाती है?",
        answers: [
            { text: "अग्नि की पूजा", correct: false },
            { text: "विवाह की पवित्रता", correct: true },
            { text: "पति-पत्नी के बीच प्यार", correct: false },
            { text: "विवाह की एक रस्म", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारसी विवाह के दौरान पवित्र अग्नि की उपस्थिति विवाह की पवित्रता और इसे अहुर मज़्दा के आशीर्वाद से जोड़ने का प्रतीक है।"
    },
    {
        question: "पारसी धर्म में, 'अमेश स्पेंतास' में से 'अमरतात' (Ameretat) किसका प्रतिनिधित्व करता है?",
        answers: [
            { text: "अमरता और पौधे", correct: true },
            { text: "अच्छा मन", correct: false },
            { text: "शक्ति", correct: false },
            { text: "भक्ति", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अमरतात' का अर्थ 'अमरता' है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अमेश स्पेंता पौधों की रचना और जीवन की अमरता का प्रतीक है।"
    },
    {
        question: "'किस्सा-ए-संजान' (Qissa-i Sanjan) किस भाषा में लिखी गई थी?",
        answers: [
            { text: "हिंदी", correct: false },
            { text: "संस्कृत", correct: false },
            { text: "अवेस्तान", correct: false },
            { text: "फारसी", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'किस्सा-ए-संजान' 16वीं शताब्दी में एक फारसी कविता के रूप में लिखी गई थी।"
    },
    {
        question: "पारसी धर्म के अनुसार, 'अग्नि मंदिर' में अग्नि को किस प्रकार प्रज्वलित किया जाता है?",
        answers: [
            { text: "बिजली से", correct: false },
            { text: "माचिस से", correct: false },
            { text: "सूर्य के प्रकाश और लेंस से", correct: false },
            { text: "केवल पवित्र और प्राकृतिक तरीकों से", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारसी धर्म में अग्नि को अत्यधिक पवित्र माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे बिजली या माचिस से नहीं, बल्कि प्राकृतिक तरीकों से, जैसे कि सूर्य के प्रकाश और विशेष लकड़ियों से प्रज्वलित किया जाता है।"
    },
    {
        question: "'जश्ने' (Jashne) क्या है?",
        answers: [
            { text: "एक सामूहिक धार्मिक समारोह", correct: true },
            { text: "एक प्रकार का भोजन", correct: false },
            { text: "एक प्रकार की प्रार्थना", correct: false },
            { text: "एक पवित्र पुस्तक", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जश्ने' एक पारसी धार्मिक समारोह है जो आमतौर पर समुदाय द्वारा मिलकर एक विशेष अवसर या त्योहार पर मनाया जाता है।"
    },
    {
        question: "पारसी धर्म में, 'अहुर मज़्दा' द्वारा बनाई गई सात कृतियों में से 'धातुओं' का संबंध किस अमेश स्पेंता से है?",
        answers: [
            { text: "अशा वहिश्ता", correct: false },
            { text: "वोहू मनह", correct: false },
            { text: "खशथ्रा वैर्या (Khshathra Vairya)", correct: true },
            { text: "अर्मैती", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खशथ्रा वैर्या' (वांछित प्रभुत्व) का संबंध धातुओं की रचना से है, क्योंकि धातुएँ शक्ति और प्रभुत्व का प्रतीक मानी जाती हैं।"
    },
    {
        question: "'दख्मा' (Dakhma) या 'टॉवर ऑफ साइलेंस' कहाँ स्थित होते हैं?",
        answers: [
            { text: "शहरों के अंदर", correct: false },
            { text: "शहरों के बाहर, ऊँची जगहों पर", correct: true },
            { text: "नदी के किनारे", correct: false },
            { text: "समुद्र के किनारे", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दख्मा को शहरों से दूर, ऊँची पहाड़ियों पर बनाया जाता है ताकि शवों से होने वाली अशुद्धता शहरों तक न पहुँचे।"
    },
    {
        question: "'फरवहर' प्रतीक में, निचले हिस्से में पूंछ की तीन परतें किसका प्रतिनिधित्व करती हैं?",
        answers: [
            { text: "अच्छे विचार, अच्छे शब्द, अच्छे कर्म", correct: false },
            { text: "बुरे विचार, बुरे शब्द, बुरे कर्म", correct: true },
            { text: "जन्म, जीवन, मृत्यु", correct: false },
            { text: "अतीत, वर्तमान, भविष्य", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फरवहर के निचले हिस्से में तीन परतें उन बुराइयों को दर्शाती हैं जिनसे इंसान को बचना चाहिए।"
    },
    {
        question: "पारसी धर्म में, 'सुद्रेह' (Sudreh) और 'कष्टि' (Kushti) पहनने की प्रथा का क्या अर्थ है?",
        answers: [
            { text: "यह एक फैशन है।", correct: false },
            { text: "यह पहचान और धार्मिकता का प्रतीक है।", correct: true },
            { text: "यह एक प्रकार का ताबीज है।", correct: false },
            { text: "यह एक सजावटी वस्तु है।", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुद्रेह' और 'कष्टि' पारसी धर्म के अनुयायियों की पहचान हैं और यह उनके धार्मिक सिद्धांतों के प्रति उनकी प्रतिबद्धता को दर्शाते हैं।"
    },
    {
        question: "पारसी धर्म में, 'अग्नि मंदिर' में प्रवेश से पहले सिर को क्यों ढँकना अनिवार्य है?",
        answers: [
            { text: "यह एक परंपरा है।", correct: false },
            { text: "यह सम्मान और विनम्रता का प्रतीक है।", correct: false },
            { text: "यह अग्नि को अशुद्धता से बचाता है।", correct: false },
            { text: "ये सभी", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिर को ढँकना पवित्रता, सम्मान और विनम्रता का प्रतीक है और यह पवित्र अग्नि के प्रति सम्मान को दर्शाता है।"
    },
    {
        question: "'साओश्यंत' (Saoshyant) कौन है?",
        answers: [
            { text: "एक राजा", correct: false },
            { text: "एक महान पुजारी", correct: false },
            { text: "अंतिम मुक्तिदाता", correct: true },
            { text: "एक योद्धा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारसी धर्म में, 'साओश्यंत' एक मसीहाई आकृति है जो दुनिया के अंत में अच्छाई की अंतिम विजय सुनिश्चित करने के लिए आएगा।"
    },
    {
        question: "'खुर्दह अवेस्ता' (Khordeh Avesta) में क्या शामिल है?",
        answers: [
            { text: "जरथुस्त्र के उपदेश", correct: false },
            { text: "दैनिक प्रार्थनाएँ और भजन", correct: true },
            { text: "धार्मिक कानून", correct: false },
            { text: "देवताओं के बारे में कहानियाँ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खुर्दह अवेस्ता' का अर्थ 'छोटी अवेस्ता' है और यह पारसी अनुयायियों द्वारा घर पर या अग्नि मंदिर में उपयोग की जाने वाली दैनिक प्रार्थनाओं की एक पुस्तक है।"
    },
    {
        question: "पारसी धर्म में, 'अमेश स्पेंता' में से 'हउर्वातात' (Haurvatat) किसका प्रतिनिधित्व करता है?",
        answers: [
            { text: "अमरता", correct: false },
            { text: "स्वास्थ्य", correct: true },
            { text: "शक्ति", correct: false },
            { text: "भक्ति", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हउर्वातात' का अर्थ 'स्वास्थ्य' या 'पूर्णता' है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अमेश स्पेंता जल की रचना से जुड़ा है, जो जीवन और स्वास्थ्य के लिए आवश्यक है।"
    },
    {
        question: "पारसी धर्म के अनुसार, मानव का प्राथमिक कर्तव्य क्या है?",
        answers: [
            { text: "केवल अग्नि की पूजा करना", correct: false },
            { text: "अच्छा सोचना, अच्छा बोलना और अच्छा करना", correct: true },
            { text: "केवल धार्मिक अनुष्ठान करना", correct: false },
            { text: "धन कमाना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारसी धर्म का केंद्रीय नैतिक सिद्धांत 'हुमाता, हुख्ता, हुवर्श्ता' है, जिसका अर्थ है 'अच्छे विचार, अच्छे शब्द, अच्छे कर्म'।"
    },
    {
        question: "'अहुर मज़्दा' का प्रतीक क्या है?",
        answers: [
            { text: "सूर्य", correct: false },
            { text: "चन्द्रमा", correct: false },
            { text: "अग्नि", correct: false },
            { text: "कोई नहीं, क्योंकि वे निराकार हैं।", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारसी धर्म एकेश्वरवादी है और अहुर मज़्दा को निराकार मानता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अग्नि उनका प्रतीक नहीं, बल्कि उनकी पवित्रता और प्रकाश का प्रतिनिधित्व करती है।"
    },
    {
        question: "पारसी धर्म में 'पवित्र अग्नि' को बनाए रखने की जिम्मेदारी किसकी होती है?",
        answers: [
            { text: "किसी भी पारसी की", correct: false },
            { text: "केवल महिलाएँ", correct: false },
            { text: "केवल पुजारी (मोबेद)", correct: true },
            { text: "किसी भी भक्त की", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अग्नि मंदिर में पवित्र अग्नि को प्रज्वलित रखने और उसकी देखभाल करने का कार्य केवल पुजारी (मोबेद) ही करते हैं।"
    },
    {
        question: "'चिनवत ब्रिज' (Chinvat Bridge) का क्या अर्थ है?",
        answers: [
            { text: "एक पवित्र नदी", correct: false },
            { text: "एक पुल जो स्वर्ग और नर्क को जोड़ता है", correct: true },
            { text: "एक पर्वत", correct: false },
            { text: "एक पवित्र अग्नि", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चिनवत ब्रिज' को 'निर्णय का पुल' कहा जाता है, जहाँ आत्मा को उसके कर्मों के आधार पर स्वर्ग या नर्क भेजा जाता है।"
    },
    {
        question: "पारसी धर्म में, 'अवेस्ता' के किस भाग में शुद्धता और अशुद्धता से संबंधित कानूनों का वर्णन है?",
        answers: [
            { text: "गाथा", correct: false },
            { text: "यस्ना", correct: false },
            { text: "याश्त", correct: false },
            { text: "विदेवदत (Videvdad)", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विदेवदत' का अर्थ 'दानवों से बचने का कानून' है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस भाग में अनुष्ठानिक शुद्धता और अशुद्धता से संबंधित नियम दिए गए हैं।"
    },
    {
        question: "पारसी धर्म में, 'अग्नि' का उपयोग क्या दर्शाता है?",
        answers: [
            { text: "पूजा", correct: false },
            { text: "शुद्धिकरण", correct: false },
            { text: "दिव्यता", correct: false },
            { text: "ये सभी", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारसी धर्म में अग्नि पवित्रता, शुद्धिकरण और अहुर मज़्दा की दिव्य उपस्थिति का प्रतीक है।"
    },
    {
        question: "भारत में पारसी समुदाय के लिए 'संजान' का ऐतिहासिक महत्व क्या है?",
        answers: [
            { text: "यह उनकी वर्तमान राजधानी है।", correct: false },
            { text: "यह वह स्थान है जहाँ वे ईरान से पलायन के बाद सबसे पहले पहुँचे।", correct: true },
            { text: "यह वह स्थान है जहाँ उनके सभी अग्नि मंदिर हैं।", correct: false },
            { text: "यह वह स्थान है जहाँ उनके संस्थापक का जन्म हुआ था।", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 8वीं शताब्दी में ईरान से पलायन के बाद, पारसी समुदाय गुजरात के संजान नामक तट पर पहुँचा था।"
    },
    {
        question: "पारसी धर्म में, 'अमेश स्पेंता' में से 'अर्मैती' (Armaiti) किसका प्रतिनिधित्व करता है?",
        answers: [
            { text: "भक्ति", correct: true },
            { text: "स्वास्थ्य", correct: false },
            { text: "अमरता", correct: false },
            { text: "शक्ति", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अर्मैती' का अर्थ 'पवित्र भक्ति' है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अहुर मज़्दा की एक दिव्य शक्ति है, जो भक्ति और पृथ्वी की उर्वरता का प्रतीक है।"
    },
    {
        question: "'अहुर' शब्द का अर्थ क्या है?",
        answers: [
            { text: "बुद्धि", correct: false },
            { text: "प्रभु", correct: true },
            { text: "सत्य", correct: false },
            { text: "प्रकाश", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अहुर मज़्दा' में 'अहुर' का अर्थ 'प्रभु' है।"
    },
    {
        question: "'सुद्रेह' (Sudreh) क्या है?",
        answers: [
            { text: "एक प्रकार की टोपी", correct: false },
            { text: "एक पवित्र कमीज", correct: true },
            { text: "एक प्रकार का पवित्र धागा", correct: false },
            { text: "एक प्रकार का भोजन", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुद्रेह' एक सफेद, सूती कमीज है जिसे पारसी लोग नाभजोट समारोह के बाद पहनते हैं, जो शुद्धता और धार्मिकता का प्रतीक है।"
    },
    {
        question: "'गाथा' में जरथुस्त्र ने किस देवता की प्रशंसा की है?",
        answers: [
            { text: "मिथ्रा", correct: false },
            { text: "वायु", correct: false },
            { text: "अहुर मज़्दा", correct: true },
            { text: "ज़ोरो", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गाथाओं में जरथुस्त्र ने अहुर मज़्दा को एकमात्र सर्वशक्तिमान और सर्वोच्च देवता के रूप में प्रस्तुत किया है।"
    },
    {
        question: "पारसी धर्म में, 'जाहिलिया' काल से पहले के अरबों में कौन-सा धर्म प्रचलित था?",
        answers: [
            { text: "इस्लाम", correct: false },
            { text: "ईसाई धर्म", correct: false },
            { text: "पारसी धर्म", correct: false },
            { text: "मूर्ति पूजा", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस्लाम के उदय से पहले, अरब प्रायद्वीप में विभिन्न कबीलाई देवता और मूर्ति पूजा का प्रचलन था।"
    },
    {
        question: "पारसी धर्म में 'अंतिम निर्णय' के बाद, अच्छे और बुरे के बीच के भेद को क्या कहा जाता है?",
        answers: [
            { text: "अशा", correct: false },
            { text: "द्रुज", correct: false },
            { text: "पुनरुत्थान", correct: false },
            { text: "चिनवत", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चिनवत' पुल का नाम है, जो अंतिम निर्णय का प्रतीक है।"
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