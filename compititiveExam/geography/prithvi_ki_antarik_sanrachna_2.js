const questions = [
    {
        topHeading: "पृथ्वी की आंतरिक संरचना पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "महासागरीय भूपर्पटी की औसत मोटाई कितनी होती है?",
        answers: shuffle([
            { text: "30-40 किलोमीटर", correct: false },
            { text: "5-10 किलोमीटर", correct: true },
            { text: "50-70 किलोमीटर", correct: false },
            { text: "1-2 किलोमीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महासागरीय भूपर्पटी, महाद्वीपीय भूपर्पटी की तुलना में बहुत पतली होती है, इसकी औसत मोटाई केवल 5 से 10 किलोमीटर होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी के अंदर जाने पर घनत्व में वृद्धि का मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "तापमान में वृद्धि", correct: false },
            { text: "दबाव में वृद्धि और भारी पदार्थों की उपस्थिति", correct: true },
            { text: "केवल तापमान में कमी", correct: false },
            { text: "गुरुत्वाकर्षण में कमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गहराई के साथ ऊपरी परतों का दबाव बढ़ता है, जो पदार्थों को संकुचित करता है, और साथ ही केंद्र की ओर भारी पदार्थ (जैसे लोहा) केंद्रित हैं, जिससे घनत्व बढ़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "यदि पृथ्वी की सभी परतें एक समान घनत्व की ठोस चट्टान होतीं, तो भूकंपीय तरंगों का पथ कैसा होता?",
        answers: shuffle([
            { text: "वक्राकार", correct: false },
            { text: "सीधी रेखा में", correct: true },
            { text: "अनियमित", correct: false },
            { text: "सर्पिलाकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तरंगों का मार्ग तभी मुड़ता है जब वे विभिन्न घनत्व या अवस्था वाले माध्यमों से गुजरती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> एक समान माध्यम में, वे सीधी रेखा में यात्रा करतीं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'डायनेमो सिद्धांत' (Dynamo Theory) का संबंध किससे है?",
        answers: shuffle([
            { text: "ज्वालामुखी की उत्पत्ति से", correct: false },
            { text: "पर्वतों के निर्माण से", correct: false },
            { text: "पृथ्वी के चुंबकीय क्षेत्र की उत्पत्ति से", correct: true },
            { text: "भूकंपों की उत्पत्ति से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सिद्धांत बताता है कि पृथ्वी के तरल बाह्य क्रोड में चालक द्रव (पिघला लोहा) की गति से विद्युत धाराएं और परिणामी चुंबकीय क्षेत्र उत्पन्न होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी की सबसे ऊपरी परत में कौन सी चट्टानें प्रमुख हैं?",
        answers: shuffle([
            { text: "आग्नेय", correct: false },
            { text: "अवसादी", correct: true },
            { text: "कायांतरित", correct: false },
            { text: " सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि भूपर्पटी का अधिकांश आयतन आग्नेय और कायांतरित चट्टानों से बना है, लेकिन सतह का लगभग 75% हिस्सा अवसादी चट्टानों की एक पतली परत से ढका है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी का क्रोड मुख्य रूप से लोहे का बना है, इसका समर्थन किससे होता है?",
        answers: shuffle([
            { text: "पृथ्वी का उच्च औसत घनत्व", correct: false },
            { text: "S-तरंगों का छाया क्षेत्र", correct: false },
            { text: "पृथ्वी का चुंबकीय क्षेत्र", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी का उच्च घनत्व केंद्र में भारी पदार्थ की मांग करता है, तरल क्रोड (S-तरंगों द्वारा सिद्ध) में चालक पदार्थ चुंबकीय क्षेत्र की व्याख्या करता है, और लोहा इन सभी शर्तों को पूरा करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "स्थलमंडलीय प्लेटें (Lithospheric Plates) किस पर तैरती हैं?",
        answers: shuffle([
            { text: "निचले मैंटल पर", correct: false },
            { text: "दुर्बलतामंडल (Asthenosphere) पर", correct: true },
            { text: "बाह्य क्रोड पर", correct: false },
            { text: "आंतरिक क्रोड पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दुर्बलतामंडल की प्लास्टिक जैसी, अर्ध-पिघली अवस्था स्थलमंडल की कठोर प्लेटों को उस पर धीरे-धीरे सरकने या तैरने की अनुमति देती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मैंटल प्लूम (Mantle Plume) क्या है?",
        answers: shuffle([
            { text: "मैंटल में ठंडे पदार्थ का नीचे जाना", correct: false },
            { text: "क्रोड-मैंटल सीमा से गर्म पदार्थ का ऊपर की ओर उठना", correct: true },
            { text: "भूपर्पटी का एक प्रकार", correct: false },
            { text: "एक प्रकार की भूकंपीय तरंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मैंटल प्लूम अत्यधिक गर्म चट्टान का एक स्तंभ है जो क्रोड-मैंटल सीमा से उठकर स्थलमंडल तक पहुँचता है और 'हॉटस्पॉट' ज्वालामुखी को जन्म देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी के केंद्र की ओर जाने पर गुरुत्वाकर्षण पर क्या प्रभाव पड़ता है?",
        answers: shuffle([
            { text: "बढ़ता है", correct: false },
            { text: "घटता है", correct: false },
            { text: "स्थिर रहता है", correct: false },
            { text: "पहले बढ़ता है, फिर केंद्र में शून्य हो जाता है", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सतह से नीचे जाने पर गुरुत्वाकर्षण पहले थोड़ा बढ़ता है (घनत्व बढ़ने के कारण), लेकिन फिर केंद्र की ओर लगातार घटता है और ठीक केंद्र में शून्य हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "निम्नलिखित में से कौन सी असंबंधता भूपर्पटी और मैंटल को अलग करती है?",
        answers: shuffle([
            { text: "गुटेनबर्ग", correct: false },
            { text: "मोहोरोविसिक", correct: true },
            { text: "लेहमन", correct: false },
            { text: "रेपिटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहो या मोहोरोविसिक असंबंधता भूपर्पटी के नीचे स्थित है और यह मैंटल की शुरुआत का संकेत देती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी की कौन सी परत सिलिकेट युक्त चट्टानों से बनी है?",
        answers: shuffle([
            { text: "केवल भूपर्पटी", correct: false },
            { text: "केवल मैंटल", correct: false },
            { text: "भूपर्पटी और मैंटल दोनों", correct: true },
            { text: "केवल क्रोड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भूपर्पटी और मैंटल दोनों मुख्य रूप से सिलिकेट खनिजों (सिलिकॉन और ऑक्सीजन युक्त) से बने हैं, हालांकि उनका रासायनिक संघटन भिन्न है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस परत को 'निचला मैंटल' (Lower Mantle) भी कहा जाता है?",
        answers: shuffle([
            { text: "स्थलमंडल", correct: false },
            { text: "दुर्बलतामंडल", correct: false },
            { text: "मध्यमंडल (Mesosphere)", correct: true },
            { text: "गुरुमंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भौतिक वर्गीकरण के अनुसार, लगभग 660 किमी से 2900 किमी की गहराई तक फैले ठोस निचले मैंटल को मध्यमंडल कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी के कुल आयतन का कितना प्रतिशत हिस्सा क्रोड (Core) द्वारा घेरा गया है?",
        answers: shuffle([
            { text: "लगभग 1%", correct: false },
            { text: "लगभग 16%", correct: true },
            { text: "लगभग 50%", correct: false },
            { text: "लगभग 83%", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जबकि मैंटल आयतन का 83% हिस्सा घेरता है, क्रोड पृथ्वी के कुल आयतन का लगभग 16% हिस्सा बनाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी की किस परत का घनत्व सबसे कम है?",
        answers: shuffle([
            { text: "आंतरिक क्रोड", correct: false },
            { text: "बाह्य क्रोड", correct: false },
            { text: "मैंटल", correct: false },
            { text: "भूपर्पटी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भूपर्पटी सबसे बाहरी और सबसे हल्के पदार्थों से बनी परत है, इसलिए इसका घनत्व सभी परतों में सबसे कम है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'भूतापीय प्रवणता' (Geothermal Gradient) शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "सतह पर तापमान में परिवर्तन", correct: false },
            { text: "गहराई के साथ तापमान में वृद्धि की दर", correct: true },
            { text: "गहराई के साथ दबाव में वृद्धि की दर", correct: false },
            { text: "समुद्र की गहराई के साथ तापमान में कमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह वह दर है जिस पर पृथ्वी के भीतर गहराई बढ़ने के साथ-साथ तापमान बढ़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी के निर्माण के आरंभ में, यह किस अवस्था में थी?",
        answers: shuffle([
            { text: "ठंडी और ठोस", correct: false },
            { text: "पूर्णतः गैसीय", correct: false },
            { text: "गर्म और तरल", correct: true },
            { text: "बर्फीली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रहों के टकराने और रेडियोधर्मी क्षय के कारण प्रारंभिक पृथ्वी एक गर्म, पिघले हुए गोले के रूप में थी, जो बाद में ठंडी होकर विभेदित हुई।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी की परतों का विभेदन (Differentiation) किस प्रक्रिया के कारण हुआ?",
        answers: shuffle([
            { text: "ज्वालामुखी क्रिया", correct: false },
            { text: "प्लेट विवर्तनिकी", correct: false },
            { text: "गुरुत्वाकर्षण के कारण घनत्व में अंतर", correct: true },
            { text: "सौर पवन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब पृथ्वी तरल अवस्था में थी, तो गुरुत्वाकर्षण के कारण भारी तत्व (जैसे लोहा) केंद्र की ओर डूब गए और हल्के तत्व (जैसे सिलिकेट) सतह की ओर आ गए, जिससे विभिन्न घनत्व वाली परतें बनीं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "महाद्वीपीय भूपर्पटी की प्रकृति कैसी होती है?",
        answers: shuffle([
            { text: "अम्लीय (Acidic)", correct: true },
            { text: "क्षारीय (Basic)", correct: false },
            { text: "उदासीन (Neutral)", correct: false },
            { text: "लवणीय (Saline)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाद्वीपीय भूपर्पटी ग्रेनाइटिक चट्टानों से बनी है जिसमें सिलिका की मात्रा अधिक होती है, इसलिए इसकी प्रकृति अम्लीय होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "महासागरीय भूपर्पटी की प्रकृति कैसी होती है?",
        answers: shuffle([
            { text: "अम्लीय", correct: false },
            { text: "क्षारीय", correct: true },
            { text: "उदासीन", correct: false },
            { text: "लवणीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महासागरीय भूपर्पटी बेसाल्टिक चट्टानों से बनी है जिसमें सिलिका कम और मैग्नीशियम व लोहा अधिक होता है, इसलिए इसकी प्रकृति क्षारीय होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "संपूर्ण पृथ्वी में पाया जाने वाला सबसे प्रचुर तत्व कौन सा है?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: false },
            { text: "सिलिकॉन", correct: false },
            { text: "लोहा", correct: true },
            { text: "एल्युमिनियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि पूरी पृथ्वी (भूपर्पटी, मैंटल, क्रोड) को एक साथ लिया जाए, तो भार के अनुसार सबसे प्रचुर तत्व लोहा (लगभग 35%) है, जिसका अधिकांश भाग क्रोड में केंद्रित है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "निम्नलिखित में से कौन सी भूकंपीय तरंगें सबसे धीमी गति से चलती हैं?",
        answers: shuffle([
            { text: "P-तरंगें", correct: false },
            { text: "S-तरंगें", correct: false },
            { text: "धरातलीय तरंगें (L-तरंगें)", correct: true },
            { text: "सभी की गति समान होती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धरातलीय तरंगें या L-तरंगें सबसे अंत में भूकंपमापी पर दर्ज होती हैं क्योंकि इनकी गति P और S तरंगों से कम होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी के अंदर ऊर्जा का स्थानांतरण किस विधि से होता है?",
        answers: shuffle([
            { text: "चालन (Conduction)", correct: false },
            { text: "संवहन (Convection)", correct: false },
            { text: "विकिरण (Radiation)", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ठोस आंतरिक क्रोड और स्थलमंडल में ऊर्जा का स्थानांतरण मुख्य रूप से चालन द्वारा, जबकि तरल बाह्य क्रोड और प्लास्टिक मैंटल में संवहन द्वारा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'पेरिडोटाइट' (Peridotite) नामक चट्टान किस परत का मुख्य घटक है?",
        answers: shuffle([
            { text: "महाद्वीपीय भूपर्पटी", correct: false },
            { text: "महासागरीय भूपर्पटी", correct: false },
            { text: "ऊपरी मैंटल", correct: true },
            { text: "बाह्य क्रोड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊपरी मैंटल मुख्य रूप से पेरिडोटाइट नामक एक सघन, आग्नेय चट्टान से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "विश्व की सबसे गहरी खान (लगभग 3-4 किमी) किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "अफ्रीका", correct: true },
            { text: "दक्षिण अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोने की सबसे गहरी खानें दक्षिण अफ्रीका में स्थित हैं, जो पृथ्वी के आंतरिक भाग के बारे में प्रत्यक्ष जानकारी का एक सीमित स्रोत हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी की सबसे बाहरी ठोस परत को क्या कहा जाता है?",
        answers: shuffle([
            { text: "स्थलमंडल (Lithosphere)", correct: true },
            { text: "जलमंडल (Hydrosphere)", correct: false },
            { text: "वायुमंडल (Atmosphere)", correct: false },
            { text: "दुर्बलतामंडल (Asthenosphere)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्थलमंडल में भूपर्पटी और मैंटल का ऊपरी कठोर भाग शामिल है, यह पृथ्वी की सबसे बाहरी ठोस परत है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "भूकंप के दौरान कौन सी तरंगें सबसे पहले भूकंपमापी (सिस्मोग्राफ) पर दर्ज की जाती हैं?",
        answers: shuffle([
            { text: "L-तरंगें", correct: false },
            { text: "S-तरंगें", correct: false },
            { text: "P-तरंगें", correct: true },
            { text: "R-तरंगें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> P-तरंगें सबसे तेज गति से यात्रा करती हैं, इसलिए वे किसी भी भूकंपीय स्टेशन पर सबसे पहले पहुंचती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी के क्रोड का आयतन पृथ्वी के कुल आयतन का लगभग 16% है, लेकिन द्रव्यमान का प्रतिशत कितना है?",
        answers: shuffle([
            { text: "लगभग 16%", correct: false },
            { text: "लगभग 25%", correct: false },
            { text: "लगभग 32%", correct: true },
            { text: "लगभग 50%", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रोड अत्यधिक सघन पदार्थों (लोहा, निकल) से बना है, इसलिए आयतन में छोटा होने के बावजूद यह पृथ्वी के कुल द्रव्यमान का लगभग एक-तिहाई (32%) हिस्सा रखता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'D'' परत (D\" layer) कहाँ स्थित है?",
        answers: shuffle([
            { text: "भूपर्पटी के ठीक नीचे", correct: false },
            { text: "मैंटल के मध्य में", correct: false },
            { text: "क्रोड-मैंटल सीमा के ठीक ऊपर", correct: true },
            { text: "आंतरिक क्रोड के केंद्र में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> D\" परत निचले मैंटल का सबसे निचला हिस्सा (लगभग 200 किमी मोटा) है जो सीधे तरल बाह्य क्रोड के ऊपर स्थित है और इसमें जटिल तापीय और रासायनिक विशेषताएं हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "भूपर्पटी और ऊपरी मैंटल के बीच घनत्व में अचानक वृद्धि का कारण क्या है?",
        answers: shuffle([
            { text: "तापमान में परिवर्तन", correct: false },
            { text: "दबाव में परिवर्तन", correct: false },
            { text: "चट्टानों की रासायनिक संरचना में परिवर्तन", correct: true },
            { text: "तरल अवस्था की उपस्थिति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहो असंबंधता पर, भूपर्पटी की कम घनत्व वाली सिलिकेट चट्टानें (ग्रेनाइट/बेसाल्ट) मैंटल की अधिक घनत्व वाली पेरिडोटाइट चट्टानों में बदल जाती हैं, जिससे भूकंपीय तरंगों की गति बढ़ जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी की आंतरिक संरचना में, कौन सी परत पूर्णतः ठोस अवस्था में है?",
        answers: shuffle([
            { text: "बाह्य क्रोड", correct: false },
            { text: "दुर्बलतामंडल", correct: false },
            { text: "आंतरिक क्रोड और स्थलमंडल", correct: true },
            { text: "संपूर्ण मैंटल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्थलमंडल (भूपर्पटी + ऊपरी मैंटल) और आंतरिक क्रोड ठोस हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> बाह्य क्रोड तरल है और दुर्बलतामंडल प्लास्टिक अवस्था में है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "ज्वालामुखी से निकलने वाले मैग्मा का अध्ययन हमें किस परत के बारे में जानकारी देता है?",
        answers: shuffle([
            { text: "ऊपरी मैंटल (दुर्बलतामंडल)", correct: true },
            { text: "निचला मैंटल", correct: false },
            { text: "बाह्य क्रोड", correct: false },
            { text: "आंतरिक क्रोड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिकांश मैग्मा दुर्बलतामंडल के आंशिक रूप से पिघलने से बनता है, इसलिए इसका विश्लेषण हमें ऊपरी मैंटल की संरचना की जानकारी देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी की परतों का तापमान केंद्र की ओर क्यों बढ़ता है?",
        answers: shuffle([
            { text: "निर्माण के समय की अवशिष्ट ऊष्मा", correct: false },
            { text: "रेडियोधर्मी तत्वों का विघटन", correct: false },
            { text: "बढ़ता दबाव", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये तीनों कारक मिलकर पृथ्वी के आंतरिक तापमान को बढ़ाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सियाल और सिमा के बीच सीमा को क्या माना जाता है?",
        answers: shuffle([
            { text: "मोहो असंबंधता", correct: false },
            { text: "कोनराड असंबंधता", correct: true },
            { text: "गुटेनबर्ग असंबंधता", correct: false },
            { text: "लेहमन असंबंधता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोनराड असंबंधता को परंपरागत रूप से महाद्वीपीय भूपर्पटी के ऊपरी ग्रेनाइटिक (सियाल) और निचले बेसाल्टिक (सिमा) परतों के बीच की सीमा माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "यदि पृथ्वी का चुंबकीय क्षेत्र समाप्त हो जाए, तो इसका सबसे बड़ा प्रभाव क्या होगा?",
        answers: shuffle([
            { text: "गुरुत्वाकर्षण समाप्त हो जाएगा", correct: false },
            { text: "पृथ्वी सौर पवनों और ब्रह्मांडीय विकिरण के प्रति असुरक्षित हो जाएगी", correct: true },
            { text: "ज्वालामुखी उद्गार बढ़ जाएंगे", correct: false },
            { text: "दिन-रात की अवधि बदल जाएगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चुंबकीय क्षेत्र एक सुरक्षा कवच की तरह काम करता है जो हानिकारक सौर विकिरण को विक्षेपित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके बिना, जीवन और प्रौद्योगिकी पर गंभीर प्रभाव पड़ेगा।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'निम्न गति का क्षेत्र' (Low Velocity Zone) पृथ्वी की किस परत में स्थित है?",
        answers: shuffle([
            { text: "स्थलमंडल", correct: false },
            { text: "दुर्बलतामंडल", correct: true },
            { text: "निचला मैंटल", correct: false },
            { text: "बाह्य क्रोड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दुर्बलतामंडल आंशिक रूप से पिघला हुआ है, जिससे यह कम कठोर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस कारण यहाँ से गुजरने वाली भूकंपीय तरंगों की गति धीमी हो जाती है, इसलिए इसे 'निम्न गति का क्षेत्र' कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी की आंतरिक संरचना के मॉडल में, तापमान और दबाव में से किसका प्रभाव घनत्व पर अधिक होता है?",
        answers: shuffle([
            { text: "तापमान का", correct: false },
            { text: "दबाव का", correct: true },
            { text: "दोनों का बराबर प्रभाव होता है", correct: false },
            { text: "कोई प्रभाव नहीं होता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हालांकि बढ़ता तापमान पदार्थों को फैलाने की कोशिश करता है (घनत्व कम करता है), लेकिन बढ़ता दबाव पदार्थों को संकुचित करता है (घनत्व बढ़ाता है)।<br><br><i class='fa-solid fa-angles-right icon'></i> पृथ्वी के भीतर, दबाव का प्रभाव अधिक प्रबल होता है, जिससे गहराई के साथ घनत्व बढ़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी का कौन सा भाग आयतन के हिसाब से सबसे छोटा है?",
        answers: shuffle([
            { text: "भूपर्पटी", correct: true },
            { text: "मैंटल", correct: false },
            { text: "बाह्य क्रोड", correct: false },
            { text: "आंतरिक क्रोड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भूपर्पटी पृथ्वी के कुल आयतन का केवल 1% हिस्सा है, जो इसे आयतन के हिसाब से सबसे छोटी परत बनाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी की आंतरिक संरचना का ज्ञान मुख्य रूप से किस पर आधारित है?",
        answers: shuffle([
            { text: "प्रत्यक्ष अवलोकन", correct: false },
            { text: "अप्रत्यक्ष साक्ष्य और अनुमान", correct: true },
            { text: "गणितीय मॉडल", correct: false },
            { text: "धार्मिक ग्रंथ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हम सीधे पृथ्वी के केंद्र तक नहीं पहुँच सकते, इसलिए हमारा ज्ञान भूकंपीय तरंगों, गुरुत्वाकर्षण, चुंबकीय क्षेत्र जैसे अप्रत्यक्ष स्रोतों के विश्लेषण और व्याख्या पर आधारित है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "ऊपरी मैंटल और निचले मैंटल को विभाजित करने वाली रेपिटी असंबंधता लगभग कितनी गहराई पर है?",
        answers: shuffle([
            { text: "410 किमी", correct: false },
            { text: "660 किमी", correct: true },
            { text: "1000 किमी", correct: false },
            { text: "2900 किमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लगभग 660 किमी की गहराई पर खनिजों की क्रिस्टल संरचना में परिवर्तन होता है, जिससे भूकंपीय तरंगों की गति बदल जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी सीमा को रेपिटी असंबंधता कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'ट्रांजिशन जोन' (Transition Zone) पृथ्वी के किस भाग में स्थित है?",
        answers: shuffle([
            { text: "भूपर्पटी में", correct: false },
            { text: "मैंटल में (410 किमी और 660 किमी के बीच)", correct: true },
            { text: "क्रोड में", correct: false },
            { text: "बाह्य और आंतरिक क्रोड के बीच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह ऊपरी और निचले मैंटल के बीच का क्षेत्र है जहाँ बढ़ते दबाव के कारण खनिजों की संरचना में कई महत्वपूर्ण परिवर्तन होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी का औसत व्यास कितना है?",
        answers: shuffle([
            { text: "6371 किमी", correct: false },
            { text: "12742 किमी", correct: true },
            { text: "2900 किमी", correct: false },
            { text: "5150 किमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी की औसत त्रिज्या लगभग 6371 किमी है, इसलिए इसका औसत व्यास (त्रिज्या का दोगुना) लगभग 12742 किमी है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "भूकंपमापी यंत्र (सिस्मोग्राफ) क्या रिकॉर्ड करता है?",
        answers: shuffle([
            { text: "भूकंप की तीव्रता", correct: false },
            { text: "भूकंप का केंद्र", correct: false },
            { text: "भूकंपीय तरंगों की गति और आयाम", correct: true },
            { text: "पृथ्वी का चुंबकीय क्षेत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिस्मोग्राफ जमीन के कंपन को रिकॉर्ड करता है, जिससे विभिन्न प्रकार की भूकंपीय तरंगों के आगमन समय, गति और आकार का पता चलता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सबसे भारी सिलिकेट खनिज किस परत में पाए जाते हैं?",
        answers: shuffle([
            { text: "ऊपरी भूपर्पटी", correct: false },
            { text: "निचली भूपर्पटी", correct: false },
            { text: "ऊपरी मैंटल", correct: false },
            { text: "निचला मैंटल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निचले मैंटल में अत्यधिक दबाव के कारण, सिलिकेट खनिज एक बहुत सघन क्रिस्टल संरचना में पुनर्व्यवस्थित हो जाते हैं, जिसे 'पेरोव्स्काइट' (Perovskite) संरचना कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी के भीतर ऊर्जा उत्पन्न करने वाली मुख्य रेडियोधर्मी प्रक्रिया कौन सी है?",
        answers: shuffle([
            { text: "नाभिकीय संलयन", correct: false },
            { text: "नाभिकीय विखंडन", correct: true },
            { text: "रासायनिक दहन", correct: false },
            { text: "सौर विकिरण का अवशोषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी के भीतर, यूरेनियम, थोरियम और पोटैशियम जैसे भारी तत्वों के अस्थिर समस्थानिकों का प्राकृतिक रूप से विखंडन होता है, जिससे ऊष्मा उत्पन्न होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'सियाल' परत की प्रकृति क्या है?",
        answers: shuffle([
            { text: "यह सिमा से भारी है", correct: false },
            { text: "यह सिमा से हल्की है", correct: true },
            { text: "इसका घनत्व सिमा के बराबर है", correct: false },
            { text: "यह केवल महासागरों के नीचे पाई जाती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सियाल (ग्रेनाइटिक) का घनत्व सिमा (बेसाल्टिक) से कम होता है, यही कारण है कि महाद्वीप, महासागरीय बेसिनों की तुलना में ऊँचे उठे हुए हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी की कौन सी परत प्लास्टिक की तरह व्यवहार करती है?",
        answers: shuffle([
            { text: "स्थलमंडल", correct: false },
            { text: "दुर्बलतामंडल", correct: true },
            { text: "निचला मैंटल", correct: false },
            { text: "आंतरिक क्रोड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दुर्बलतामंडल ठोस होने के बावजूद, लंबे समय के भूवैज्ञानिक काल में एक बहुत ही चिपचिपे तरल या प्लास्टिक की तरह प्रवाहित हो सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी के भीतर गहराई के साथ तापमान वृद्धि की दर...",
        answers: shuffle([
            { text: "हमेशा एक समान रहती है", correct: false },
            { text: "गहराई के साथ घटती जाती है", correct: true },
            { text: "गहराई के साथ बढ़ती जाती है", correct: false },
            { text: "पहले घटती है फिर बढ़ती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तापमान वृद्धि की दर (भूतापीय प्रवणता) सतह के पास सबसे अधिक (लगभग 25-30°C/किमी) होती है और मैंटल व क्रोड में यह दर बहुत कम हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी के क्रोड का व्यास लगभग कितना है?",
        answers: shuffle([
            { text: "लगभग 3500 किमी", correct: false },
            { text: "लगभग 7000 किमी", correct: true },
            { text: "लगभग 1200 किमी", correct: false },
            { text: "लगभग 2900 किमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रोड की त्रिज्या लगभग 3485 किमी (लगभग 3500 किमी) है, इसलिए इसका व्यास लगभग 7000 किमी होगा, जो मंगल ग्रह के व्यास से भी बड़ा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी का कौन सा भाग 'डायनेमो' की तरह कार्य करता है?",
        answers: shuffle([
            { text: "ठोस आंतरिक क्रोड", correct: false },
            { text: "तरल बाह्य क्रोड", correct: true },
            { text: "प्लास्टिक दुर्बलतामंडल", correct: false },
            { text: "कठोर स्थलमंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तरल बाह्य क्रोड में पिघले हुए लोहे की संवहन गतियाँ विद्युत धाराएँ उत्पन्न करती हैं, जो एक विशाल 'जियोडायनेमो' का निर्माण करती हैं और पृथ्वी के चुंबकीय क्षेत्र को बनाए रखती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मोहो असंबंधता की खोज कैसे हुई?",
        answers: shuffle([
            { text: "गहरे खनन द्वारा", correct: false },
            { text: "ज्वालामुखी लावा के विश्लेषण से", correct: false },
            { text: "भूकंपीय तरंगों की गति में अचानक वृद्धि के अवलोकन से", correct: true },
            { text: "उल्कापिंडों के अध्ययन से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1909 में, एंड्रिया मोहोरोविसिक ने देखा कि एक निश्चित गहराई पर भूकंपीय तरंगों की गति अचानक बढ़ जाती है, जिसे उन्होंने एक नई परत की सीमा के रूप में पहचाना।<br><br><i class='fa-solid fa-angles-right icon'></i> "
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