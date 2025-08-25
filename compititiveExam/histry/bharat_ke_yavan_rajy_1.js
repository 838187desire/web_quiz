const questions = [
    {
        topHeading: "भारत के यवनराज्य पर आधारित बहुविकल्पी प्रश्न part 1 (quiz_no.73)"
    },
    {
        question: "भारत पर आक्रमण करने वाला पहला यवन शासक कौन था?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: true },
            { text: "मिनांडर", correct: false },
            { text: "यूक्रेटाइड्स", correct: false },
            { text: "स्ट्रेटो I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डेमेट्रियस, बैक्ट्रिया का शासक, लगभग 190 ईसा पूर्व में भारत पर आक्रमण करने वाला पहला यवन शासक था, जिसने अफगानिस्तान, पंजाब और सिंध के बड़े हिस्से पर अधिकार कर लिया।"
    },
    {
        question: "'मिलिंद पन्हो' नामक ग्रंथ किसके बीच दार्शनिक संवाद का वर्णन करता है?",
        answers: shuffle([
            { text: "मिनांडर और चाणक्य", correct: false },
            { text: "मिनांडर और नागसेन", correct: true },
            { text: "डेमेट्रियस और नागसेन", correct: false },
            { text: "मिनांडर और पतंजलि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मिलिंद पन्हो' एक पाली भाषा का बौद्ध ग्रंथ है जिसमें यवन शासक मिनांडर और बौद्ध भिक्षु नागसेन के बीच हुए संवाद का संग्रह है।"
    },
    {
        question: "भारत में यूनानी शासन के दौरान, किस शासक ने अपनी राजधानी तक्षशिला में स्थापित की?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: false },
            { text: "मिनांडर", correct: false },
            { text: "यूक्रेटाइड्स", correct: true },
            { text: "हेलिओक्लीज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब डेमेट्रियस भारत में व्यस्त था, तब यूक्रेटाइड्स ने बैक्ट्रिया में विद्रोह करके अपना राज्य स्थापित किया और भारत के कुछ हिस्सों पर विजय प्राप्त कर तक्षशिला को अपनी राजधानी बनाया।"
    },
    {
        question: "भारत में सबसे पहले सोने के सिक्के किसने जारी किए थे?",
        answers: shuffle([
            { text: "कुषाण", correct: false },
            { text: "गुप्त", correct: false },
            { text: "मौर्य", correct: false },
            { text: "हिंद-यवन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में सबसे पहले सोने के सिक्के जारी करने का श्रेय हिंद-यवन शासकों को जाता है, हालांकि कुषाणों ने सबसे शुद्ध सोने के सिक्के जारी किए थे।"
    },
    {
        question: "भारतीय नाट्यकला में 'यवनिका' शब्द का प्रयोग किसके लिए किया जाता है, जो यूनानियों की देन थी?",
        answers: shuffle([
            { text: "वाद्य यंत्र", correct: false },
            { text: "मुखौटा", correct: false },
            { text: "पर्दा", correct: true },
            { text: "वेशभूषा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यवनिका' शब्द का प्रयोग नाट्यकला में पर्दे के लिए होता था, जिसे यूनानी भारत लाए थे।"
    },
    {
        question: "गांधार कला शैली किसका उत्तम उदाहरण है?",
        answers: shuffle([
            { text: "मौर्य कला", correct: false },
            { text: "गुप्त कला", correct: false },
            { text: "हेलेनिस्टिक आर्ट (इंडो-ग्रीक कला)", correct: true },
            { text: "राजपूत कला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गांधार कला शैली, जिसे हेलेनिस्टिक आर्ट भी कहते हैं, भारतीय और यूनानी कला का एक उत्कृष्ट मिश्रण है, जो हिंद-यवन शासन के दौरान विकसित हुई।"
    },
    {
        question: "हिंद-यवन शासकों के बाद भारत में कौन आए?",
        answers: shuffle([
            { text: "शक", correct: true },
            { text: "पहलव", correct: false },
            { text: "कुषाण", correct: false },
            { text: "रोमन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत पर आक्रमण करने वाले विदेशी आक्रमणकारियों का सही क्रम हिंद-यवन → शक → पहलव → कुषाण है।"
    },
    {
        question: "किस शासक ने भारतीय राजा की उपाधि धारण की और यूनानी तथा खरोष्ठी दोनों लिपियों वाले सिक्के चलवाए?",
        answers: shuffle([
            { text: "मिनांडर", correct: false },
            { text: "डेमेट्रियस", correct: true },
            { text: "अपोलोडोटस", correct: false },
            { text: "हेर्मियस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत पर पहला यवन आक्रमण करने वाले डेमेट्रियस ने भारतीय राजा की उपाधि ली और द्विभाषी (यूनानी और खरोष्ठी) सिक्के जारी किए।"
    },
    {
        question: "किस शासक को बौद्ध साहित्य में 'मिलिंद' के नाम से जाना जाता है?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: false },
            { text: "मिनांडर", correct: true },
            { text: "यूथीडेमस", correct: false },
            { text: "अपोलोडोटस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिनांडर, हिंद-यवन शासकों में सबसे प्रसिद्ध, बौद्ध धर्म का अनुयायी था और उसे बौद्ध ग्रंथों में 'मिलिंद' कहा गया है।"
    },
    {
        question: "हिंद-यवन शासकों के सिक्के किस धातु से बने थे?",
        answers: shuffle([
            { text: "केवल सोने", correct: false },
            { text: "केवल चांदी और तांबा", correct: false },
            { text: "सोना, चांदी, तांबा और निकेल", correct: true },
            { text: "केवल तांबा और निकेल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों ने सोने, चांदी, तांबे और निकेल जैसी विभिन्न धातुओं के सिक्के जारी किए, जिन पर शासकों और देवताओं के चित्र अंकित थे।"
    },
    {
        question: "हिंद-यवन शासकों में सबसे अधिक विख्यात कौन था?",
        answers: shuffle([
            { text: "यूथीडेमस", correct: false },
            { text: "डेमेट्रियस", correct: false },
            { text: "मिनांडर", correct: true },
            { text: "स्ट्रेटो II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिनांडर (165-145 ईसा पूर्व) हिंद-यवन शासकों में सबसे प्रसिद्ध और शक्तिशाली शासक था।"
    },
    {
        question: "हिंद-यवन साम्राज्य का अंत किस आक्रमणकारी समूह के कारण हुआ?",
        answers: shuffle([
            { text: "कुषाण", correct: false },
            { text: "पहलव", correct: false },
            { text: "शक", correct: true },
            { text: "हूण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन राज्यों का पतन शक लोगों के आक्रमणों के कारण हुआ, जिन्होंने धीरे-धीरे उनके क्षेत्रों पर अधिकार कर लिया।"
    },
    {
        question: "किस हिंद-यवन शासक ने शीशे के सिक्के जारी किए थे?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: false },
            { text: "मिनांडर", correct: false },
            { text: "स्ट्रेटो II", correct: true },
            { text: "अपोलोडोटस I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्ट्रेटो II को शीशे के सिक्के जारी करने वाला हिंद-यवन शासक माना जाता है।"
    },
    {
        question: "हिंद-यवन शासकों ने भारत के पश्चिमोत्तर सीमा प्रांत में यूनान की प्राचीन कला चलाई, जिसे क्या कहते हैं?",
        answers: shuffle([
            { text: "मथुरा कला", correct: false },
            { text: "गांधार कला", correct: false },
            { text: "हेलेनिस्टिक आर्ट", correct: true },
            { text: "अमरावती कला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों ने भारत में हेलेनिस्टिक आर्ट का परिचय दिया, जिसका गांधार कला पर गहरा प्रभाव पड़ा।"
    },
    {
        question: "बैक्ट्रिया के ग्रीक (यूनानी) को भारतीय इतिहास में क्या कहा गया है?",
        answers: shuffle([
            { text: "शक", correct: false },
            { text: "कुषाण", correct: false },
            { text: "यवन", correct: true },
            { text: "पहलव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैक्ट्रिया के ग्रीक या यूनानी शासकों को भारतीय स्रोतों में 'यवन' कहा गया है।"
    },
    {
        question: "हिंद-यवन शासकों द्वारा जारी किए गए सिक्कों पर प्रायः किन लिपियों का प्रयोग होता था?",
        answers: shuffle([
            { text: "ब्राह्मी और खरोष्ठी", correct: false },
            { text: "यूनानी और ब्राह्मी", correct: false },
            { text: "यूनानी और खरोष्ठी", correct: true },
            { text: "केवल यूनानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों ने द्विभाषी सिक्के जारी किए, जिन पर एक तरफ यूनानी लिपि और दूसरी तरफ खरोष्ठी लिपि का प्रयोग होता था।"
    },
    {
        question: "मिनांडर का शासनकाल कब से कब तक माना जाता है?",
        answers: shuffle([
            { text: "200 ईसा पूर्व से 180 ईसा पूर्व", correct: false },
            { text: "165 ईसा पूर्व से 145 ईसा पूर्व", correct: true },
            { text: "120 ईसा पूर्व से 100 ईसा पूर्व", correct: false },
            { text: "180 ईसा पूर्व से 165 ईसा पूर्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिनांडर का शासनकाल लगभग 165 ईसा पूर्व से 145 ईसा पूर्व तक माना जाता है।"
    },
    {
        question: "यवन शासक मिनांडर ने किस बौद्ध भिक्षु से बौद्ध धर्म की दीक्षा ली थी?",
        answers: shuffle([
            { text: "अश्वघोष", correct: false },
            { text: "उपगुप्त", correct: false },
            { text: "वसुमित्र", correct: false },
            { text: "नागसेन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मिलिंद पन्हो' के अनुसार, मिनांडर ने बौद्ध भिक्षु नागसेन से बौद्ध धर्म की दीक्षा ली थी।"
    },
    {
        question: "भारत में हिंद-यवन शासन का संस्थापक किसे माना जाता है?",
        answers: shuffle([
            { text: "मिनांडर", correct: false },
            { text: "डेमेट्रियस I", correct: true },
            { text: "यूक्रेटाइड्स", correct: false },
            { text: "अपोलोडोटस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डेमेट्रियस I को भारत में हिंद-यवन शासन का संस्थापक माना जाता है, जिसने 180 ईसा पूर्व के आसपास आक्रमण किया था।"
    },
    {
        question: "हिंद-यवन शासन के दौरान, कौन सा शहर शिक्षा का एक प्रमुख केंद्र था?",
        answers: shuffle([
            { text: "मथुरा", correct: false },
            { text: "पाटलिपुत्र", correct: false },
            { text: "तक्षशिला", correct: true },
            { text: "साकेत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों के अधीन तक्षशिला, गांधार कला और शिक्षा का एक महत्वपूर्ण केंद्र बन गया था।"
    },
    {
        question: "'मिलिंद पन्हो' ग्रंथ की भाषा क्या है?",
        answers: shuffle([
            { text: "संस्कृत", correct: false },
            { text: "पाली", correct: true },
            { text: "प्राकृत", correct: false },
            { text: "यूनानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मिलिंद पन्हो' एक पाली भाषा का बौद्ध ग्रंथ है।"
    },
    {
        question: "कौन सा हिंद-यवन शासक अपने सिक्कों पर \"धर्मचक्र प्रवर्तन\" के प्रतीक का उपयोग करता था?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: false },
            { text: "मिनांडर", correct: true },
            { text: "यूक्रेटाइड्स", correct: false },
            { text: "स्ट्रेटो I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध धर्म के अनुयायी होने के कारण मिनांडर ने अपने कुछ सिक्कों पर बौद्ध धर्म के प्रतीक, 'धर्मचक्र' का उपयोग किया था।"
    },
    {
        question: "भारत में हिंद-यवन शासकों की कला और संस्कृति के मिश्रण को क्या कहा जाता है?",
        answers: shuffle([
            { text: "इंडो-इस्लामिक", correct: false },
            { text: "इंडो-रोमन", correct: false },
            { text: "इंडो-हेलेनिस्टिक", correct: true },
            { text: "इंडो-पर्शियन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय और यूनानी (हेलेनिस्टिक) संस्कृति के मिश्रण को इंडो-हेलेनिस्टिक संस्कृति कहा जाता है, जिसका गांधार कला में सबसे अच्छा उदाहरण मिलता है।"
    },
    {
        question: "भारत में यूनानी शासन के दौरान, किस शासक ने अपनी राजधानी तक्षशिला में स्थापित की?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: false },
            { text: "मिनांडर", correct: false },
            { text: "यूक्रेटाइड्स", correct: true },
            { text: "हेलिओक्लीज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब डेमेट्रियस भारत में व्यस्त था, तब यूक्रेटाइड्स ने बैक्ट्रिया में विद्रोह करके अपना राज्य स्थापित किया और भारत के कुछ हिस्सों पर विजय प्राप्त कर तक्षशिला को अपनी राजधानी बनाया।"
    },
    {
        question: "निम्नलिखित में से किस भारतीय ग्रंथ में यवन आक्रमण का उल्लेख मिलता है?",
        answers: shuffle([
            { text: "गार्गी संहिता", correct: false },
            { text: "महाभाष्य", correct: false },
            { text: "मालविकाग्निमित्रम्", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पतंजलि के 'महाभाष्य', कालिदास के 'मालविकाग्निमित्रम्' और 'गार्गी संहिता' जैसे कई भारतीय ग्रंथों में यवनों के आक्रमण का उल्लेख मिलता है।"
    },
    {
        question: "हिंद-यवन शासक मिनांडर ने अपनी राजधानी कहाँ स्थापित की थी?",
        answers: shuffle([
            { text: "तक्षशिला", correct: false },
            { text: "साकल (सियालकोट)", correct: true },
            { text: "पाटलिपुत्र", correct: false },
            { text: "मथुरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों में सबसे प्रसिद्ध शासक मिनांडर ने साकल (आधुनिक सियालकोट) को अपनी राजधानी बनाया था।"
    },
    {
        question: "किस यूनानी शासक ने भारत पर आक्रमण करके अफगानिस्तान और पंजाब के बड़े हिस्से पर अधिकार कर लिया था?",
        answers: shuffle([
            { text: "मिनांडर", correct: false },
            { text: "डेमेट्रियस", correct: true },
            { text: "यूक्रेटाइड्स", correct: false },
            { text: "स्ट्रेटो I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डेमेट्रियस प्रथम ने लगभग 190 ईसा पूर्व में भारत पर आक्रमण किया और अफगानिस्तान, पंजाब और सिंध के बहुत बड़े भाग पर अधिकार कर लिया।"
    },
    {
        question: "'मिलिंद पन्हो' का शाब्दिक अर्थ क्या है?",
        answers: shuffle([
            { text: "मिलिंद का शासन", correct: false },
            { text: "मिलिंद के प्रश्न", correct: true },
            { text: "मिलिंद की जीत", correct: false },
            { text: "मिलिंद की कहानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मिलिंद पन्हो' का शाब्दिक अर्थ 'मिलिंद के प्रश्न' है, क्योंकि इसमें राजा मिनांडर (मिलिंद) और बौद्ध भिक्षु नागसेन के बीच प्रश्न-उत्तर का संवाद है।"
    },
    {
        question: "हिंद-यवन शासकों ने सबसे पहले किस धातु के सिक्के जारी किए थे जिन पर राजाओं का नाम अंकित था?",
        answers: shuffle([
            { text: "चांदी", correct: false },
            { text: "सोना", correct: true },
            { text: "तांबा", correct: false },
            { text: "शीशा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में सबसे पहले सोने के सिक्के हिंद-यवन शासकों ने जारी किए थे, जिन पर राजाओं के नाम और चित्र अंकित होते थे।"
    },
    {
        question: "यूनानियों के बाद भारत में कौन से विदेशी आक्रमणकारी आए?",
        answers: shuffle([
            { text: "कुषाण", correct: false },
            { text: "पहलव", correct: false },
            { text: "शक", correct: true },
            { text: "पार्थियन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत पर आक्रमण करने वाले विदेशी आक्रमणकारियों का सही क्रम हिंद-यवन > शक > पहलव > कुषाण है।"
    },
    {
        question: "हिंद-यवन शासकों ने भारत के किस क्षेत्र पर शासन किया?",
        answers: shuffle([
            { text: "पूर्वी भारत", correct: false },
            { text: "दक्षिणी भारत", correct: false },
            { text: "पश्चिमोत्तर भारत", correct: true },
            { text: "मध्य भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों ने मुख्य रूप से भारतीय उपमहाद्वीप के पश्चिमोत्तर क्षेत्रों में शासन किया, जिसमें अफगानिस्तान, पंजाब और सिंध के कुछ हिस्से शामिल थे।"
    },
    {
        question: "'हेलेनिस्टिक आर्ट' क्या है?",
        answers: shuffle([
            { text: "केवल यूनानी कला", correct: false },
            { text: "केवल भारतीय कला", correct: false },
            { text: "यूनानी और भारतीय कला का मिश्रण", correct: true },
            { text: "फारसी और भारतीय कला का मिश्रण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेलेनिस्टिक आर्ट, हिंद-यवन शासन के दौरान विकसित हुई एक कला शैली थी जो यूनानी और भारतीय कलात्मक तत्वों का एक अद्वितीय मिश्रण थी।"
    },
    {
        question: "किस हिंद-यवन शासक ने बौद्ध धर्म को अपनाया और उसे संरक्षण दिया?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: false },
            { text: "मिनांडर", correct: true },
            { text: "यूथीडेमस", correct: false },
            { text: "अपोलोडोटस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिनांडर ने बौद्ध भिक्षु नागसेन से बौद्ध धर्म की दीक्षा ली और वह इस धर्म का प्रबल संरक्षक बन गया।"
    },
    {
        question: "किस शासक को 'यवन राज्य स्थापनाचार्य' की उपाधि दी गई थी?",
        answers: shuffle([
            { text: "मिनांडर", correct: false },
            { text: "कृष्ण देव राय", correct: true },
            { text: "मुहम्मद गौरी", correct: false },
            { text: "डेमेट्रियस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विजयनगर साम्राज्य के शासक कृष्ण देव राय को 'यवन राज्य स्थापनाचार्य' की उपाधि दी गई थी, क्योंकि उन्होंने मुस्लिम शासकों को हराकर उनके राज्यों को पुनः स्थापित किया था।"
    },
    {
        question: "हिंद-यवन शासन के दौरान भारत में मुद्रा के क्षेत्र में क्या महत्वपूर्ण परिवर्तन हुआ?",
        answers: shuffle([
            { text: "मिट्टी के सिक्के जारी किए गए", correct: false },
            { text: "केवल एक भाषा में सिक्के जारी किए गए", correct: false },
            { text: "शासकों के चित्र वाले द्विभाषी सिक्के जारी किए गए", correct: true },
            { text: "केवल रोमन शैली के सिक्के जारी किए गए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों ने अपने सिक्कों पर शासकों के चित्र के साथ यूनानी और खरोष्ठी लिपि में द्विभाषी लेख अंकित करवाए, जो भारतीय मुद्रा इतिहास में एक महत्वपूर्ण बदलाव था।"
    },
    {
        question: "हिंद-यवन शासकों के पतन के बाद भारत में कौन से शासक आए जिन्होंने हिंद-यवन कला और संस्कृति के तत्वों को अपनाया?",
        answers: shuffle([
            { text: "गुप्त", correct: false },
            { text: "मौर्य", correct: false },
            { text: "कुषाण", correct: true },
            { text: "सातवाहन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाणों ने हिंद-यवन शासकों के पतन के बाद उनके क्षेत्रों पर शासन किया और गांधार कला जैसी उनकी कई सांस्कृतिक और कलात्मक परंपराओं को जारी रखा।"
    },
    {
        question: "किस शासक के सिक्के भड़ोच के बाजारों में खूब चलते थे, जैसा कि 'पेरिप्लस ऑफ द एरिथ्रियन सी' में उल्लेख है?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: false },
            { text: "मिनांडर", correct: true },
            { text: "अपोलोडोटस", correct: false },
            { text: "स्ट्रेटो I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्राचीन रोमन-ग्रीक ग्रंथ 'पेरिप्लस ऑफ द एरिथ्रियन सी' में उल्लेख है कि मिनांडर के सिक्के पश्चिमी भारत के भड़ोच के बंदरगाह पर भी व्यापार में इस्तेमाल होते थे, जिससे उसके साम्राज्य की व्यापकता का पता चलता है।"
    },
    {
        question: "हिंद-यवन शासकों के सिक्के मुख्य रूप से किस प्रकार के थे?",
        answers: shuffle([
            { text: "केवल वृत्ताकार", correct: false },
            { text: "केवल चौकोर", correct: false },
            { text: "वृत्ताकार और चौकोर दोनों", correct: true },
            { text: "केवल आयताकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों ने वृत्ताकार (यूनानी शैली में) और चौकोर (भारतीय शैली में) दोनों प्रकार के सिक्के जारी किए।"
    },
    {
        question: "पतंजलि के 'महाभाष्य' में किस यवन आक्रमण का उल्लेख मिलता है?",
        answers: shuffle([
            { text: "डेमेट्रियस का मथुरा पर आक्रमण", correct: false },
            { text: "यवनों का अयोध्या में साकेत और चित्तौड़ के निकट माध्यमिका पर आक्रमण", correct: true },
            { text: "मिनांडर का पाटलिपुत्र पर आक्रमण", correct: false },
            { text: "यूक्रेटाइड्स का तक्षशिला पर आक्रमण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पतंजलि के महाभाष्य में इस बात का उल्लेख है कि यवनों ने अवध में साकेत और राजस्थान में चित्तौड़ के निकट माध्यमिका पर घेरा डाला था।"
    },
    {
        question: "हिंद-यवन शासकों ने भारतीय नाट्यकला में किस नए तत्व का योगदान दिया?",
        answers: shuffle([
            { text: "संगीत", correct: false },
            { text: "नृत्य", correct: false },
            { text: "मंच पर पर्दा (यवनिका)", correct: true },
            { text: "वेशभूषा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूनानी लोग भारतीय नाट्यकला में पर्दे का प्रचलन लाए, जिसे 'यवनिका' कहा जाता है।"
    },
    {
        question: "बैक्ट्रिया से भारत पर आक्रमण करने वाला पहला शासक कौन था?",
        answers: shuffle([
            { text: "सेल्यूकस निकेटर", correct: false },
            { text: "डेमेट्रियस", correct: true },
            { text: "यूक्रेटाइड्स", correct: false },
            { text: "एंटीओकस III", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैक्ट्रिया के शासक डेमेट्रियस ने लगभग 190 ईसा पूर्व में भारत पर आक्रमण किया था।"
    },
    {
        question: "हिंद-यवन शासकों के सिक्कों पर अक्सर किन भारतीय देवताओं के प्रतीक पाए जाते हैं?",
        answers: shuffle([
            { text: "शिव", correct: false },
            { text: "विष्णु", correct: false },
            { text: "बुद्ध और बौद्ध प्रतीक", correct: true },
            { text: "महावीर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों, विशेषकर मिनांडर, ने बौद्ध धर्म को अपनाया और उनके सिक्कों पर बुद्ध और बौद्ध धर्म के प्रतीकों, जैसे कि धर्मचक्र और कमल, के चित्र अंकित थे।"
    },
    {
        question: "हिंद-यवन शासकों के शासनकाल में भारतीय और यूनानी संस्कृतियों के बीच हुए मिश्रण को क्या कहते हैं?",
        answers: shuffle([
            { text: "संगम", correct: false },
            { text: "समन्वय", correct: false },
            { text: "सम्मिलन", correct: false },
            { text: "हेलेनाइजेशन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय और यूनानी संस्कृतियों के मिश्रण की इस प्रक्रिया को हेलेनाइजेशन कहते हैं।"
    },
    {
        question: "किस शासक ने अपनी राजधानी तक्षशिला में स्थापित की, जबकि डेमेट्रियस ने साकल को अपनी राजधानी बनाया?",
        answers: shuffle([
            { text: "अपोलोडोटस", correct: false },
            { text: "मिनांडर", correct: false },
            { text: "स्ट्रेटो II", correct: false },
            { text: "यूक्रेटाइड्स", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब डेमेट्रियस भारत में आक्रमण कर रहा था, तब यूक्रेटाइड्स ने बैक्ट्रिया में विद्रोह करके अपना स्वतंत्र राज्य स्थापित किया और तक्षशिला को अपनी राजधानी बनाया।"
    },
    {
        question: "'मिलिंद पन्हो' में किस शासक को \"महान और बुद्धिमान\" राजा के रूप में वर्णित किया गया है?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: false },
            { text: "मिनांडर", correct: true },
            { text: "यूथीडेमस", correct: false },
            { text: "अपोलोडोटस I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मिलिंद पन्हो' में राजा मिनांडर को एक बुद्धिमान, विद्वान और योग्य राजा के रूप में वर्णित किया गया है।"
    },
    {
        question: "हिंद-यवन शासकों के शासनकाल में, कौन से दो प्रमुख केंद्र राजनीतिक और सांस्कृतिक गतिविधियों के लिए महत्वपूर्ण थे?",
        answers: shuffle([
            { text: "मथुरा और पाटलिपुत्र", correct: false },
            { text: "शाकल और तक्षशिला", correct: true },
            { text: "अयोध्या और वाराणसी", correct: false },
            { text: "उज्जैन और कन्नौज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शाकल (मिनांडर की राजधानी) और तक्षशिला (यूक्रेटाइड्स की राजधानी) हिंद-यवन काल के दो सबसे महत्वपूर्ण राजनीतिक और सांस्कृतिक केंद्र थे।"
    },
    {
        question: "किस ग्रंथ में यूनानी आक्रमण और शुंग शासक पुष्यमित्र द्वारा उन्हें रोकने का उल्लेख मिलता है?",
        answers: shuffle([
            { text: "गार्गी संहिता", correct: false },
            { text: "महाभाष्य", correct: false },
            { text: "मालविकाग्निमित्रम्", correct: true },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालिदास के नाटक 'मालविकाग्निमित्रम्' में शुंग शासक पुष्यमित्र और यूनानियों के बीच हुए युद्ध का उल्लेख मिलता है।"
    },
    {
        question: "हिंद-यवन शासकों के सिक्कों पर अक्सर किस भाषा में द्विभाषी शिलालेख होते थे?",
        answers: shuffle([
            { text: "यूनानी और ब्राह्मी", correct: false },
            { text: "यूनानी और प्राकृत", correct: false },
            { text: "यूनानी और खरोष्ठी", correct: true },
            { text: "यूनानी और संस्कृत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों ने मुख्य रूप से यूनानी और खरोष्ठी लिपि का प्रयोग अपने द्विभाषी सिक्कों पर किया।"
    },
    {
        question: "हिंद-यवन साम्राज्य में कला का सबसे अच्छा उदाहरण क्या है?",
        answers: shuffle([
            { text: "मथुरा कला", correct: false },
            { text: "गांधार कला", correct: true },
            { text: "अमरावती कला", correct: false },
            { text: "गुप्त कला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गांधार कला, जो भारतीय और यूनानी कला का मिश्रण है, हिंद-यवन शासकों की कला और संस्कृति का सबसे उत्कृष्ट उदाहरण है।"
    },
    {
        question: "हिंद-यवन शासकों ने भारतीय समाज में किस प्रकार का योगदान दिया?",
        answers: shuffle([
            { text: "प्रशासनिक सुधार", correct: false },
            { text: "सैन्य तकनीकें", correct: false },
            { text: "मुद्राशास्त्र", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों ने भारतीय प्रशासन में सुधार किए, नई सैन्य तकनीकें लाईं और मुद्राशास्त्र (सिक्कों) में महत्वपूर्ण बदलाव किए, जिससे भारतीय अर्थव्यवस्था और संस्कृति पर गहरा प्रभाव पड़ा।"
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