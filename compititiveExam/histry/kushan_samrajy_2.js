const questions = [
    {
        topHeading: "कुषाण साम्राज्य पर आधारित बहुविकल्पी प्रश्न part 2 (quiz_no.80)"
    },
    {
        question: "कनिष्क के शासनकाल में आयोजित चतुर्थ बौद्ध संगीति के अध्यक्ष कौन थे?",
        answers: shuffle([
            { text: "अश्वघोष", correct: false },
            { text: "वसुमित्र", correct: true },
            { text: "नागार्जुन", correct: false },
            { text: "पार्श्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चतुर्थ बौद्ध संगीति, जो कश्मीर के कुंडलवन में हुई थी, की अध्यक्षता वसुमित्र ने की थी और अश्वघोष इसके उपाध्यक्ष थे।"
    },
    {
        question: "कुषाण शासकों ने अपने सिक्कों पर किस लिपि का प्रयोग किया?",
        answers: shuffle([
            { text: "केवल खरोष्ठी", correct: false },
            { text: "केवल ब्राह्मी", correct: false },
            { text: "ब्राह्मी और खरोष्ठी", correct: true },
            { text: "केवल यूनानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाण शासकों ने अपने सिक्कों पर दोनों लिपियों का प्रयोग किया, जो उनके साम्राज्य के सांस्कृतिक मिश्रण को दर्शाता है।"
    },
    {
        question: "मथुरा कला शैली में बुद्ध की मूर्तियाँ किस पत्थर से बनाई जाती थीं?",
        answers: shuffle([
            { text: "संगमरमर", correct: false },
            { text: "ग्रेनाइट", correct: false },
            { text: "लाल बलुआ पत्थर", correct: true },
            { text: "काला पत्थर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मथुरा कला शैली की एक प्रमुख विशेषता लाल बलुआ पत्थर का उपयोग था, जो मथुरा के स्थानीय क्षेत्रों में उपलब्ध था।"
    },
    {
        question: "किस कुषाण शासक के सिक्कों पर सबसे अधिक भारतीय देवी-देवताओं का चित्रण मिलता है?",
        answers: shuffle([
            { text: "कुजुल कडफिसेस", correct: false },
            { text: "विम कडफिसेस", correct: false },
            { text: "कनिष्क", correct: false },
            { text: "वासुदेव", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाण साम्राज्य के अंतिम शासक वासुदेव के सिक्कों पर शिव और नंदी जैसे भारतीय देवी-देवताओं का चित्रण सबसे अधिक मिलता है।"
    },
    {
        question: "कुषाण काल में मूर्तिकला की गांधार शैली में बुद्ध की मूर्तियों में किस प्रकार के कपड़े दिखाए गए हैं?",
        answers: shuffle([
            { text: "भारतीय धोती", correct: false },
            { text: "यूनानी शैली का चोगा", correct: true },
            { text: "चीनी पोशाक", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गांधार कला शैली में बनी बुद्ध की मूर्तियों में उन्हें यूनानी शैली के चोगे में दिखाया गया है, जो हेलेनिस्टिक प्रभाव को दर्शाता है।"
    },
    {
        question: "किस चीनी यात्री ने कनिष्क के बौद्ध धर्म को संरक्षण देने का उल्लेख किया है?",
        answers: shuffle([
            { text: "फाह्यान", correct: false },
            { text: "ह्वेन त्सांग", correct: true },
            { text: "इत्सिंग", correct: false },
            { text: "सुंगयुन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग ने अपने यात्रा वृत्तांत में कनिष्क के बौद्ध धर्म के प्रति समर्पण और उसके द्वारा बनाए गए स्मारकों का विस्तृत वर्णन किया है।"
    },
    {
        question: "कुषाण साम्राज्य के किस शासक ने खुद को \"महान तारणहार\" (Soter Megas) कहा था?",
        answers: shuffle([
            { text: "कुजुल कडफिसेस", correct: false },
            { text: "विम कडफिसेस", correct: true },
            { text: "कनिष्क", correct: false },
            { text: "वासुदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विम कडफिसेस ने अपने सिक्कों पर खुद को 'सोतेर मेगस' (महान तारणहार) कहा था, जो उसकी बढ़ती हुई शक्ति का प्रतीक था।"
    },
    {
        question: "कुषाण काल में 'सिल्क रूट' (रेशम मार्ग) पर नियंत्रण क्यों महत्वपूर्ण था?",
        answers: shuffle([
            { text: "सैन्य नियंत्रण के लिए", correct: false },
            { text: "धार्मिक प्रसार के लिए", correct: false },
            { text: "व्यापार से राजस्व कमाने के लिए", correct: true },
            { text: "उपरोक्त में से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेशम मार्ग पर नियंत्रण से कुषाण शासकों को भारी मात्रा में राजस्व प्राप्त होता था, जिससे उनकी आर्थिक स्थिति बहुत मजबूत हुई।"
    },
    {
        question: "किस कुषाण शासक को 'महान राजा' (Great King) भी कहा जाता था?",
        answers: shuffle([
            { text: "कुजुल कडफिसेस", correct: false },
            { text: "विम कडफिसेस", correct: true },
            { text: "कनिष्क", correct: false },
            { text: "वासुदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विम कडफिसेस ने अपने सिक्कों पर 'महाराजाधिराज' और 'सोतेर मेगस' जैसी उपाधियाँ धारण की थी, जो उसे एक महान शासक के रूप में दर्शाती हैं।"
    },
    {
        question: "कुषाण काल में गन्ने की खेती और चीनी उद्योग का विकास किस क्षेत्र में हुआ?",
        answers: shuffle([
            { text: "पंजाब", correct: false },
            { text: "मथुरा", correct: true },
            { text: "बंगाल", correct: false },
            { text: "दक्कन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मथुरा क्षेत्र कुषाण काल में गन्ने की खेती और उससे जुड़े उद्योगों के लिए एक महत्वपूर्ण केंद्र बन गया था।"
    },
    {
        question: "कनिष्क के दरबार में कौन सा बौद्ध भिक्षु था जिसने उसे बौद्ध धर्म अपनाने के लिए प्रेरित किया था?",
        answers: shuffle([
            { text: "अश्वघोष", correct: false },
            { text: "नागार्जुन", correct: false },
            { text: "पार्श्व", correct: true },
            { text: "वसुमित्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पार्श्व नामक बौद्ध भिक्षु ने कनिष्क को बौद्ध धर्म अपनाने के लिए प्रेरित किया था।"
    },
    {
        question: "कुषाणों के शासनकाल में किस कला शैली में यूनानी देवताओं जैसे अपोलो और हेराक्लेस के चित्र मिलते हैं?",
        answers: shuffle([
            { text: "मथुरा कला", correct: false },
            { text: "गांधार कला", correct: true },
            { text: "अमरावती कला", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गांधार कला में भारतीय और यूनानी शैली का मिश्रण है, जिसमें बुद्ध की मूर्तियाँ यूनानी देवताओं की तरह दिखाई देती हैं।"
    },
    {
        question: "कुषाणों द्वारा जारी किए गए सोने के सिक्कों को क्या कहा जाता था?",
        answers: shuffle([
            { text: "दीनार", correct: true },
            { text: "दीनारियस", correct: false },
            { text: "टंका", correct: false },
            { text: "रुपया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाणों के सोने के सिक्के दीनार कहलाते थे, जो रोमन सिक्कों दीनारियस से प्रेरित थे।"
    },
    {
        question: "किस चीनी यात्री के अनुसार, कनिष्क ने बौद्ध धर्म के प्रसार के लिए कई स्तूप और मठ बनवाए थे?",
        answers: shuffle([
            { text: "फाह्यान", correct: false },
            { text: "इत्सिंग", correct: false },
            { text: "ह्वेन त्सांग", correct: true },
            { text: "सुंगयुन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग ने अपने यात्रा वृत्तांत में कनिष्क द्वारा बनाए गए बौद्ध स्मारकों का विस्तृत वर्णन किया है।"
    },
    {
        question: "कुषाणों के शासनकाल में किस फसल की खेती बड़े पैमाने पर होती थी?",
        answers: shuffle([
            { text: "चावल", correct: false },
            { text: "गेहूं", correct: true },
            { text: "कपास", correct: false },
            { text: "गन्ना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाणों के साम्राज्य में, जो उत्तर भारत और मध्य एशिया तक फैला था, गेहूं एक प्रमुख फसल थी।"
    },
    {
        question: "किस शासक के शासनकाल में 'आयुर्वेद' को एक संगठित चिकित्सा पद्धति के रूप में विकसित किया गया?",
        answers: shuffle([
            { text: "अशोक", correct: false },
            { text: "चंद्रगुप्त मौर्य", correct: false },
            { text: "कनिष्क", correct: true },
            { text: "समुद्रगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कनिष्क के दरबार में प्रसिद्ध चिकित्सक चरक थे, जिन्होंने 'चरक संहिता' की रचना की, जिससे आयुर्वेद का विकास हुआ।"
    },
    {
        question: "कुषाणों के शासनकाल में 'पुर' (Pur) शब्द का क्या अर्थ था?",
        answers: shuffle([
            { text: "गांव", correct: false },
            { text: "शहर या नगर", correct: true },
            { text: "प्रांत", correct: false },
            { text: "महल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाण काल में 'पुर' शब्द का प्रयोग अक्सर 'शहर' या 'नगर' के लिए किया जाता था, जैसे 'पुरुषपुर'।"
    },
    {
        question: "कनिष्क ने अपनी राजधानी पुरुषपुर (पेशावर) में कौन सा प्रसिद्ध स्मारक बनवाया था?",
        answers: shuffle([
            { text: "सारनाथ का स्तूप", correct: false },
            { text: "कुषाण स्तूप", correct: true },
            { text: "अशोक स्तूप", correct: false },
            { text: "धमेख स्तूप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कनिष्क ने पुरुषपुर में एक विशाल स्तूप और एक मठ का निर्माण करवाया था, जिसे कुषाण स्तूप भी कहा जाता है।"
    },
    {
        question: "किस शासक को बौद्ध धर्म का 'अशोक' कहा जाता है?",
        answers: shuffle([
            { text: "हर्षवर्धन", correct: false },
            { text: "कनिष्क", correct: true },
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कनिष्क को अशोक के समान ही बौद्ध धर्म का महान संरक्षक और प्रसारक माना जाता है, इसलिए उसे 'दूसरा अशोक' या 'बौद्ध धर्म का अशोक' कहा जाता है।"
    },
    {
        question: "कुषाण साम्राज्य का पतन किस कारण हुआ?",
        answers: shuffle([
            { text: "आंतरिक संघर्ष", correct: false },
            { text: "बाहरी आक्रमण", correct: false },
            { text: "आर्थिक संकट", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाण साम्राज्य का पतन आंतरिक संघर्षों, बाहरी आक्रमणों (जैसे सासानियन) और आर्थिक संकटों के कारण हुआ।"
    },
    {
        question: "किस कुषाण शासक के सिक्कों पर यूनानी, ईरानी और भारतीय देवी-देवताओं के चित्र मिलते हैं?",
        answers: shuffle([
            { text: "कुजुल कडफिसेस", correct: false },
            { text: "विम कडफिसेस", correct: false },
            { text: "कनिष्क", correct: true },
            { text: "वासुदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कनिष्क एक धार्मिक सहिष्णु शासक था, जिसने अपने सिक्कों पर विभिन्न धर्मों के देवी-देवताओं की प्रतिमाएं अंकित करवाई थीं।"
    },
    {
        question: "कुषाण साम्राज्य के किस शासक ने रेशम मार्ग पर नियंत्रण स्थापित किया था?",
        answers: shuffle([
            { text: "कुजुल कडफिसेस", correct: false },
            { text: "विम कडफिसेस", correct: false },
            { text: "कनिष्क", correct: true },
            { text: "वासुदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कनिष्क ने अपने साम्राज्य का विस्तार किया और रेशम मार्ग के प्रमुख हिस्सों पर नियंत्रण स्थापित किया, जिससे व्यापार में भारी लाभ हुआ।"
    },
    {
        question: "कुषाण काल में मथुरा शहर किसके लिए प्रसिद्ध था?",
        answers: shuffle([
            { text: "शिक्षा और धर्म", correct: false },
            { text: "कला और मूर्तिकला", correct: false },
            { text: "व्यापार और वाणिज्य", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मथुरा कुषाण काल में कला (मथुरा कला), शिक्षा (बौद्ध और जैन धर्म), और व्यापार का एक महत्वपूर्ण केंद्र था।"
    },
    {
        question: "कुषाणों के शासनकाल में किस लिपि में बुद्ध की जीवनी लिखी गई थी?",
        answers: shuffle([
            { text: "ब्राह्मी", correct: false },
            { text: "खरोष्ठी", correct: false },
            { text: "संस्कृत", correct: true },
            { text: "यूनानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अश्वघोष ने 'बुद्धचरित' की रचना संस्कृत भाषा में की थी, जो कुषाण काल में एक महत्वपूर्ण साहित्यिक उपलब्धि थी।"
    },
    {
        question: "किस शासक के शासनकाल में कुषाणों का शासन भारत के उत्तर-पश्चिमी हिस्से तक सीमित हो गया था?",
        answers: shuffle([
            { text: "कनिष्क", correct: false },
            { text: "हुविष्क", correct: false },
            { text: "वासुदेव", correct: true },
            { text: "कुजुल कडफिसेस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वासुदेव के शासनकाल तक, कुषाण साम्राज्य का विस्तार घट गया था और उनका शासन मुख्य रूप से उत्तर-पश्चिमी भारत तक ही सीमित रह गया था।"
    },
    {
        question: "कुषाण शासकों ने किस धर्म के प्रतीकों को अपने सिक्कों पर अंकित करवाया था?",
        answers: shuffle([
            { text: "बौद्ध धर्म और शैव धर्म", correct: false },
            { text: "जैन धर्म और वैष्णव धर्म", correct: false },
            { text: "उपरोक्त सभी", correct: true },
            { text: "केवल बौद्ध धर्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाण शासकों, विशेषकर कनिष्क, ने धार्मिक सहिष्णुता की नीति अपनाई थी।<br><br><i class='fa-solid fa-angles-right icon'></i> उनके सिक्कों पर बौद्ध, शैव, वैष्णव और यूनानी-ईरानी देवताओं के चित्र मिलते हैं।"
    },
    {
        question: "'अभिधर्मकोष' नामक ग्रंथ की रचना किसने की थी?",
        answers: shuffle([
            { text: "अश्वघोष", correct: false },
            { text: "वसुबंधु", correct: true },
            { text: "नागार्जुन", correct: false },
            { text: "चरक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वसुबंधु, जो कुषाण काल के बाद के समय में हुए, ने 'अभिधर्मकोष' नामक बौद्ध ग्रंथ की रचना की थी, जो कुषाणों के बौद्ध धर्म के प्रति लगाव को दर्शाता है।"
    },
    {
        question: "कुषाण काल में गन्ने की खेती और चीनी उद्योग का विकास किस क्षेत्र में हुआ?",
        answers: shuffle([
            { text: "पंजाब", correct: false },
            { text: "मथुरा", correct: true },
            { text: "बंगाल", correct: false },
            { text: "दक्कन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मथुरा क्षेत्र कुषाण काल में गन्ने की खेती और उससे जुड़े उद्योगों के लिए एक महत्वपूर्ण केंद्र बन गया था।"
    },
    {
        question: "किस कुषाण शासक के सिक्के, जिन पर बुद्ध की प्रतिमा अंकित थी, कहाँ से प्राप्त हुए हैं?",
        answers: shuffle([
            { text: "अफगानिस्तान", correct: false },
            { text: "पाकिस्तान", correct: false },
            { text: "भारत", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कनिष्क के शासनकाल के सिक्के, जिन पर बुद्ध की प्रतिमा अंकित है, अफगानिस्तान, पाकिस्तान और भारत के कई हिस्सों से प्राप्त हुए हैं, जो उसके विशाल साम्राज्य का प्रमाण है।"
    },
    {
        question: "किस कुषाण शासक ने अपनी मुद्रा पर 'ओशो' नामक देवता की प्रतिमा अंकित करवाई थी?",
        answers: shuffle([
            { text: "कुजुल कडफिसेस", correct: false },
            { text: "विम कडफिसेस", correct: false },
            { text: "कनिष्क", correct: true },
            { text: "वासुदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कनिष्क के सिक्कों पर 'ओशो' नामक एक देवता की प्रतिमा मिलती है, जिसकी पहचान शिव से की जाती है।"
    },
    {
        question: "कुषाणों के शासनकाल में किस लिपि का प्रयोग अधिक हुआ?",
        answers: shuffle([
            { text: "ब्राह्मी", correct: false },
            { text: "खरोष्ठी", correct: false },
            { text: "ग्रीक", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाण शासकों ने अपने अभिलेखों और सिक्कों पर ब्राह्मी, खरोष्ठी और ग्रीक तीनों लिपियों का प्रयोग किया, जो उनके बहुसांस्कृतिक साम्राज्य को दर्शाता है।"
    },
    {
        question: "कुषाण साम्राज्य के पतन के बाद भारत में किस राजवंश का उदय हुआ?",
        answers: shuffle([
            { text: "गुप्त", correct: true },
            { text: "वर्धन", correct: false },
            { text: "पाल", correct: false },
            { text: "प्रतिहार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाणों के पतन के बाद, भारत में छोटे-छोटे राज्यों का उदय हुआ और अंततः चौथी शताब्दी में गुप्त साम्राज्य की स्थापना हुई।"
    },
    {
        question: "किस चीनी यात्री ने कनिष्क के बौद्ध धर्म को संरक्षण देने का उल्लेख किया है?",
        answers: shuffle([
            { text: "फाह्यान", correct: false },
            { text: "ह्वेन त्सांग", correct: true },
            { text: "इत्सिंग", correct: false },
            { text: "सुंग युन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग ने अपने यात्रा वृत्तांत में कनिष्क के बौद्ध धर्म के प्रति समर्पण और उसके द्वारा बनाए गए स्मारकों का विस्तृत वर्णन किया है।"
    },
    {
        question: "कनिष्क के दरबार में कौनसा बौद्ध भिक्षु था जिसने उसे बौद्ध धर्म अपनाने के लिए प्रेरित किया था?",
        answers: shuffle([
            { text: "अश्वघोष", correct: false },
            { text: "नागार्जुन", correct: false },
            { text: "पार्श्व", correct: true },
            { text: "वसुमित्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पार्श्व नामक बौद्ध भिक्षु ने कनिष्क को बौद्ध धर्म अपनाने के लिए प्रेरित किया था।"
    },
    {
        question: "कुषाण काल में गन्ने की खेती और चीनी उद्योग का विकास किस क्षेत्र में हुआ?",
        answers: shuffle([
            { text: "पंजाब", correct: false },
            { text: "मथुरा", correct: true },
            { text: "बंगाल", correct: false },
            { text: "दक्कन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मथुरा क्षेत्र कुषाण काल में गन्ने की खेती और उससे जुड़े उद्योगों के लिए एक महत्वपूर्ण केंद्र बन गया था।"
    },
    {
        question: "कनिष्क ने अपनी राजधानी पुरुषपुर (पेशावर) में कौनसा प्रसिद्ध स्मारक बनवाया था?",
        answers: shuffle([
            { text: "सारनाथ का स्तूप", correct: false },
            { text: "कुषाण स्तूप", correct: true },
            { text: "अशोक स्तूप", correct: false },
            { text: "धमेख स्तूप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कनिष्क ने पुरुषपुर में एक विशाल स्तूप और एक मठ का निर्माण करवाया था, जिसे कुषाण स्तूप भी कहा जाता है।"
    },
    {
        question: "किस शासक को बौद्ध धर्म का 'अशोक' कहा जाता है?",
        answers: shuffle([
            { text: "हर्षवर्धन", correct: false },
            { text: "कनिष्क", correct: true },
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कनिष्क को अशोक के समान ही बौद्ध धर्म का महान संरक्षक और प्रसारक माना जाता है, इसलिए उसे 'दूसरा अशोक' या 'बौद्ध धर्म का अशोक' कहा जाता है।"
    },
    {
        question: "कुषाण साम्राज्य का पतन किस कारण हुआ?",
        answers: shuffle([
            { text: "आंतरिक संघर्ष", correct: false },
            { text: "बाहरी आक्रमण", correct: false },
            { text: "आर्थिक संकट", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाण साम्राज्य का पतन आंतरिक संघर्षों, बाहरी आक्रमणों (जैसे सासानियन) और आर्थिक संकटों के कारण हुआ।"
    },
    {
        question: "किस कुषाण शासक के सिक्कों पर यूनानी, ईरानी और भारतीय देवी-देवताओं के चित्र मिलते हैं?",
        answers: shuffle([
            { text: "कुजुल कडफिसेस", correct: false },
            { text: "विम कडफिसेस", correct: false },
            { text: "कनिष्क", correct: true },
            { text: "वासुदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कनिष्क एक धार्मिक सहिष्णु शासक था, जिसने अपने सिक्कों पर विभिन्न धर्मों के देवी-देवताओं की प्रतिमाएं अंकित करवाई थीं।"
    },
    {
        question: "कुषाण साम्राज्य के किस शासक ने रेशम मार्ग पर नियंत्रण स्थापित किया था?",
        answers: shuffle([
            { text: "कुजुल कडफिसेस", correct: false },
            { text: "विम कडफिसेस", correct: false },
            { text: "कनिष्क", correct: true },
            { text: "वासुदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कनिष्क ने अपने साम्राज्य का विस्तार किया और रेशम मार्ग के प्रमुख हिस्सों पर नियंत्रण स्थापित किया, जिससे व्यापार में भारी लाभ हुआ।"
    },
    {
        question: "कुषाण काल में मथुरा शहर किसके लिए प्रसिद्ध था?",
        answers: shuffle([
            { text: "शिक्षा और धर्म", correct: false },
            { text: "कला और मूर्तिकला", correct: false },
            { text: "व्यापार और वाणिज्य", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मथुरा कुषाण काल में कला (मथुरा कला), शिक्षा (बौद्ध और जैन धर्म), और व्यापार का एक महत्वपूर्ण केंद्र था।"
    },
    {
        question: "कुषाणों के शासनकाल में किस लिपि में बुद्ध की जीवनी लिखी गई थी?",
        answers: shuffle([
            { text: "ब्राह्मी", correct: false },
            { text: "खरोष्ठी", correct: false },
            { text: "संस्कृत", correct: true },
            { text: "यूनानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अश्वघोष ने 'बुद्धचरित' की रचना संस्कृत भाषा में की थी, जो कुषाण काल में एक महत्वपूर्ण साहित्यिक उपलब्धि थी।"
    },
    {
        question: "किस शासक के शासनकाल में कुषाणों का शासन भारत के उत्तर-पश्चिमी हिस्से तक सीमित हो गया था?",
        answers: shuffle([
            { text: "कनिष्क", correct: false },
            { text: "हुविष्क", correct: false },
            { text: "वासुदेव", correct: true },
            { text: "कुजुल कडफिसेस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वासुदेव के शासनकाल तक, कुषाण साम्राज्य का विस्तार घट गया था और उनका शासन मुख्य रूप से उत्तर-पश्चिमी भारत तक ही सीमित रह गया था।"
    },
    {
        question: "कुषाण शासक कुजुल कडफिसेस के सिक्कों पर कौनसे रोमन सम्राट का चित्र मिलता है?",
        answers: shuffle([
            { text: "सीज़र", correct: false },
            { text: "अगस्टस", correct: false },
            { text: "नेरो", correct: false },
            { text: "टायबेरियस", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुजुल कडफिसेस ने रोमन सिक्कों से प्रेरित होकर सिक्के जारी किए थे, जिनमें से कुछ पर रोमन सम्राट टायबेरियस का चित्र मिलता है।"
    },
    {
        question: "कुषाणों के शासनकाल में 'रेशम मार्ग' (Silk Road) का पूर्वी सिरा कहाँ स्थित था?",
        answers: shuffle([
            { text: "चीन", correct: true },
            { text: "भारत", correct: false },
            { text: "ईरान", correct: false },
            { text: "रोमन साम्राज्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेशम मार्ग का पूर्वी सिरा चीन में था, जहाँ से रेशम कुषाण साम्राज्य से होकर पश्चिमी देशों तक पहुँचता था।"
    },
    {
        question: "कुषाण काल में किस धातु का प्रयोग सिक्कों के लिए सबसे अधिक होता था?",
        answers: shuffle([
            { text: "सोना", correct: false },
            { text: "चांदी", correct: false },
            { text: "तांबा", correct: true },
            { text: "शीशा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाणों ने सोने और चांदी के सिक्के भी जारी किए थे, लेकिन सबसे अधिक संख्या में तांबे के सिक्के मिलते हैं, जो आम लोगों के लिए थे।"
    },
    {
        question: "किस कुषाण शासक ने 'महाराजाधिराज' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "कुजुल कडफिसेस", correct: false },
            { text: "विम कडफिसेस", correct: true },
            { text: "कनिष्क", correct: false },
            { text: "वासुदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विम कडफिसेस ने 'महाराजाधिराज' (राजाओं का राजा) की उपाधि धारण की थी, जो उसकी बढ़ती हुई शक्ति का प्रतीक थी।"
    },
    {
        question: "कुषाणों की राजधानी पुरुषपुर (पेशावर) में किसने एक विशाल स्तूप और एक मठ का निर्माण करवाया था?",
        answers: shuffle([
            { text: "अशोक", correct: false },
            { text: "कनिष्क", correct: true },
            { text: "ह्वेन त्सांग", correct: false },
            { text: "फाह्यान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कनिष्क ने अपनी राजधानी पुरुषपुर में बौद्ध धर्म के प्रचार के लिए एक विशाल स्तूप और एक मठ का निर्माण करवाया था।"
    },
    {
        question: "किस कुषाण शासक के सिक्कों पर पहली बार शिव और बुद्ध दोनों की प्रतिमाएं अंकित मिली हैं?",
        answers: shuffle([
            { text: "कुजुल कडफिसेस", correct: false },
            { text: "विम कडफिसेस", correct: false },
            { text: "कनिष्क", correct: true },
            { text: "वासुदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कनिष्क एक धार्मिक रूप से सहिष्णु शासक था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसके सिक्कों पर न केवल बुद्ध की, बल्कि शिव, सूर्य और अन्य ईरानी देवताओं की भी प्रतिमाएं मिलती हैं।"
    },
    {
        question: "कुषाण साम्राज्य का अंतिम महान शासक कौन था?",
        answers: shuffle([
            { text: "कनिष्क", correct: false },
            { text: "हुविष्क", correct: false },
            { text: "वासुदेव", correct: true },
            { text: "विम कडफिसेस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वासुदेव को कुषाण साम्राज्य का अंतिम महान शासक माना जाता है, जिसके बाद साम्राज्य का पतन शुरू हो गया।"
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