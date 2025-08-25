const questions = [ 
    {
        topHeading: "भारत की प्रमुख झीलों पर आधारित बहुविकल्पीय प्रश्न part 2  (quiz_no. 92)."
    },
    {
        question: "'सूरजताल झील' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "उत्तराखंड", correct: false },
            { text: "हिमाचल प्रदेश", correct: true },
            { text: "जम्मू और कश्मीर", correct: false },
            { text: "सिक्किम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूरजताल झील हिमाचल प्रदेश के लाहौल और स्पीति जिले में बारालाचा-ला दर्रे के पास स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत की तीसरी सबसे ऊंची झील है।"
    },
    {
        question: "'सांभर झील' किस नदी के बेसिन में स्थित है?",
        answers: shuffle([
            { text: "लूनी", correct: false },
            { text: "मेंथा", correct: false },
            { text: "रूपनगढ़", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सांभर झील राजस्थान में स्थित एक अंतर्देशीय खारे पानी की झील है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक विस्तृत बेसिन में स्थित है जिसमें चार नदियाँ - मेंथा, रूपनगढ़, खारी और खंडेला - गिरती हैं।"
    },
    {
        question: "'कोडेकनाल झील' किस प्रकार की झील है?",
        answers: shuffle([
            { text: "प्राकृतिक हिमनद झील", correct: false },
            { text: "मानव निर्मित झील", correct: true },
            { text: "ज्वालामुखी झील", correct: false },
            { text: "लैगून झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोडेकनाल झील तमिलनाडु में स्थित एक मानव निर्मित झील है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका निर्माण 1863 में तत्कालीन मद्रास प्रेसीडेंसी के तत्कालीन कलेक्टर सर वेरे हेनरी लेविंग ने करवाया था।"
    },
    {
        question: "'पेगोंग त्सो' झील कहाँ स्थित है?",
        answers: shuffle([
            { text: "जम्मू और कश्मीर", correct: false },
            { text: "लद्दाख", correct: true },
            { text: "सिक्किम", correct: false },
            { text: "हिमाचल प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेगोंग त्सो (Pangong Tso) झील लद्दाख में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका लगभग 60% भाग चीन में है और यह अपनी सुंदरता के लिए प्रसिद्ध है।"
    },
    {
        question: "'गुरुडोन्गमार झील' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "अरुणाचल प्रदेश", correct: false },
            { text: "असम", correct: false },
            { text: "सिक्किम", correct: true },
            { text: "मेघालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुडोन्गमार झील सिक्किम में स्थित है और यह भारत और चीन की सीमा के पास स्थित एक पवित्र झील मानी जाती है।"
    },
    {
        question: "'भीमताल झील' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "उत्तराखंड", correct: true },
            { text: "जम्मू और कश्मीर", correct: false },
            { text: "हिमाचल प्रदेश", correct: false },
            { text: "महाराष्ट्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भीमताल झील उत्तराखंड के नैनीताल जिले में स्थित है और यह कुमाऊं क्षेत्र की सबसे बड़ी झील है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक प्राकृतिक झील है।"
    },
    {
        question: "'राजसमंद झील' का निर्माण किस शासक ने करवाया था?",
        answers: shuffle([
            { text: "राणा कुंभा", correct: false },
            { text: "महाराणा राज सिंह प्रथम", correct: true },
            { text: "महाराणा उदय सिंह", correct: false },
            { text: "राणा सांगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजसमंद झील का निर्माण 17वीं शताब्दी में मेवाड़ के महाराणा राज सिंह प्रथम ने करवाया था।"
    },
    {
        question: "'लोनार झील' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "गुजरात", correct: false },
            { text: "महाराष्ट्र", correct: true },
            { text: "कर्नाटक", correct: false },
            { text: "केरल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोनार झील महाराष्ट्र के बुलढाणा जिले में स्थित एक क्रेटर झील है।"
    },
    {
        question: "'जयसमंद झील' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "मध्य प्रदेश", correct: false },
            { text: "राजस्थान", correct: true },
            { text: "गुजरात", correct: false },
            { text: "उत्तर प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जयसमंद झील राजस्थान के उदयपुर में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एशिया की दूसरी सबसे बड़ी मानव निर्मित मीठे पानी की झील है।"
    },
    {
        question: "'सांभर झील' का निर्माण किस प्रकार हुआ है?",
        answers: shuffle([
            { text: "ज्वालामुखी गतिविधि से", correct: false },
            { text: "हिमनदों के पिघलने से", correct: false },
            { text: "विवर्तनिक गतिविधि से", correct: true },
            { text: "इसका उद्गम विवादास्पद है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैज्ञानिकों का मानना ​​है कि सांभर झील का निर्माण विवर्तनिक गतिविधियों के कारण हुआ है, जिससे भू-खंड में एक अवसाद बन गया।"
    },
    {
        question: "'सरदार सरोवर झील' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "गोदावरी", correct: false },
            { text: "कृष्णा", correct: false },
            { text: "नर्मदा", correct: true },
            { text: "कावेरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सरदार सरोवर झील नर्मदा नदी पर सरदार सरोवर बांध के पीछे बनी एक कृत्रिम झील है।"
    },
    {
        question: "'डाल' झील और 'वुलर' झील को क्या कहा जाता है?",
        answers: shuffle([
            { text: "लैगून झील", correct: false },
            { text: "हिमनद झील", correct: false },
            { text: "हिमनद-टेक्टोनिक झीलें", correct: true },
            { text: "ज्वालामुखी झीलें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डल और वुलर झीलें दोनों ही हिमालयी क्षेत्र में स्थित हैं और इनके निर्माण में हिमनदों और विवर्तनिक गतिविधियों दोनों का योगदान माना जाता है।"
    },
    {
        question: "'पुलिकट झील' में स्थित द्वीप का क्या नाम है?",
        answers: shuffle([
            { text: "पंबन द्वीप", correct: false },
            { text: "श्रीहरिकोटा द्वीप", correct: true },
            { text: "अब्दुल कलाम द्वीप", correct: false },
            { text: "दीव द्वीप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्रीहरिकोटा द्वीप बंगाल की खाड़ी से पुलिकट झील को अलग करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी द्वीप पर सतीश धवन अंतरिक्ष केंद्र भी स्थित है।"
    },
    {
        question: "'चोलामू झील' से किस नदी का उद्गम होता है?",
        answers: shuffle([
            { text: "ब्रह्मपुत्र", correct: false },
            { text: "तीस्ता", correct: true },
            { text: "रावी", correct: false },
            { text: "सतलज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोलामू झील सिक्किम में स्थित है और यह तीस्ता नदी का उद्गम स्थल है।"
    },
    {
        question: "'पेरियार झील' किस प्रकार की झील है?",
        answers: shuffle([
            { text: "प्राकृतिक झील", correct: false },
            { text: "कृत्रिम झील", correct: true },
            { text: "हिमनद झील", correct: false },
            { text: "ज्वालामुखी झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेरियार झील एक कृत्रिम झील है, जिसका निर्माण 1895 में मुल्लापेरियार बांध के निर्माण से हुआ था।"
    },
    {
        question: "'लोकटक झील' में पाए जाने वाले 'फुम्दी' क्या हैं?",
        answers: shuffle([
            { text: "एक प्रकार के जीव", correct: false },
            { text: "तैरते हुए द्वीप", correct: true },
            { text: "एक प्रकार का पेड़", correct: false },
            { text: "प्रवासी पक्षी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फुम्दी वनस्पति, मिट्टी और जैविक पदार्थों के तैरते हुए द्वीप हैं जो लोकटक झील की सतह पर पाए जाते हैं।"
    },
    {
        question: "'सोनबिला झील' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "असम", correct: true },
            { text: "मणिपुर", correct: false },
            { text: "त्रिपुरा", correct: false },
            { text: "मेघालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोनबिला झील असम के करीमगंज जिले में स्थित एक प्रसिद्ध ताजे पानी की झील है।"
    },
    {
        question: "'भीमताल झील' किस क्षेत्र में स्थित है?",
        answers: shuffle([
            { text: "गढ़वाल क्षेत्र", correct: false },
            { text: "कुमाऊं क्षेत्र", correct: true },
            { text: "तराई क्षेत्र", correct: false },
            { text: "भाबर क्षेत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भीमताल झील उत्तराखंड के कुमाऊं क्षेत्र में स्थित है।"
    },
    {
        question: "'सूरजकुंड' का शाब्दिक अर्थ क्या है?",
        answers: shuffle([
            { text: "सूर्य का तालाब", correct: true },
            { text: "राजा का तालाब", correct: false },
            { text: "सुंदर तालाब", correct: false },
            { text: "स्वर्ग का तालाब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूरजकुंड का शाब्दिक अर्थ 'सूर्य का तालाब' है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका निर्माण राजा सूरज पाल ने करवाया था।"
    },
    {
        question: "'वेम्बनाड झील' में किस द्वीप पर 'वेलिंगटन द्वीप' स्थित है?",
        answers: shuffle([
            { text: "मुनरो द्वीप", correct: false },
            { text: "पंबन द्वीप", correct: false },
            { text: "वल्लारपदम द्वीप", correct: false },
            { text: "वेलिंगटन द्वीप वेम्बनाड झील का ही हिस्सा है", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेम्बनाड झील में कई छोटे द्वीप हैं, जिनमें से एक वेलिंगटन द्वीप है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कोच्चि बंदरगाह का हिस्सा भी है।"
    },
    {
        question: "'उमियम झील' का निर्माण किस नदी पर बांध बनाकर किया गया है?",
        answers: shuffle([
            { text: "उमियाम नदी", correct: true },
            { text: "ब्रह्मपुत्र नदी", correct: false },
            { text: "लोहित नदी", correct: false },
            { text: "बराक नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उमियम झील, जिसे बारापानी झील भी कहा जाता है, उमियम नदी पर एक बांध बनाकर बनाई गई है।"
    },
    {
        question: "'कोलेरू झील' किस प्रकार की झील है?",
        answers: shuffle([
            { text: "लैगून", correct: false },
            { text: "ताजे पानी की झील", correct: true },
            { text: "खारे पानी की झील", correct: false },
            { text: "क्रेटर झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोलेरू झील कृष्णा और गोदावरी नदियों के डेल्टा के बीच स्थित एक उथली ताजे पानी की झील है।"
    },
    {
        question: "'राणा प्रताप सागर झील' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "नर्मदा", correct: false },
            { text: "चंबल", correct: true },
            { text: "माही", correct: false },
            { text: "ताप्ती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राणा प्रताप सागर झील राजस्थान में चंबल नदी पर स्थित एक कृत्रिम झील है।"
    },
    {
        question: "'चोलामू झील' को एक और किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "गुरुडोन्गमार झील", correct: false },
            { text: "त्सो मोरीरी झील", correct: false },
            { text: "त्सो लामो झील", correct: true },
            { text: "पैंगोंग त्सो झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोलामू झील को त्सो लामो झील के नाम से भी जाना जाता है।"
    },
    {
        question: "'अष्टमुडी झील' किस प्रकार की झील है?",
        answers: shuffle([
            { text: "लैगून", correct: true },
            { text: "ज्वालामुखी", correct: false },
            { text: "हिमनद", correct: false },
            { text: "विवर्तनिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अष्टमुडी झील केरल में स्थित एक लैगून झील है, जिसे कयाल (Kayal) भी कहते हैं।"
    },
    {
        question: "'जयसमंद झील' किस शहर के पास स्थित है?",
        answers: shuffle([
            { text: "जयपुर", correct: false },
            { text: "उदयपुर", correct: true },
            { text: "जोधपुर", correct: false },
            { text: "जैसलमेर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जयसमंद झील, जिसे 'ढेंबर झील' भी कहा जाता है, राजस्थान के उदयपुर शहर में स्थित है<br><br><i class='fa-solid fa-angles-right icon'></i> और यह भारत की दूसरी सबसे बड़ी कृत्रिम झील है।"
    },
    {
        question: "'लोकतक झील' पर स्थित दुनिया के एकमात्र तैरते हुए राष्ट्रीय उद्यान का नाम क्या है?",
        answers: shuffle([
            { text: "केइबुल लामजाओ", correct: true },
            { text: "रणथंभौर", correct: false },
            { text: "सुंदरवन", correct: false },
            { text: "जिम कॉर्बेट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोकतक झील पर 'फुम्दी' नामक तैरते हुए द्वीपों पर स्थित 'केइबुल लामजाओ' राष्ट्रीय उद्यान दुनिया का एकमात्र तैरता हुआ राष्ट्रीय उद्यान है।"
    },
    {
        question: "'डल झील' में पाए जाने वाले तैरते हुए बगीचों को स्थानीय भाषा में क्या कहते हैं?",
        answers: shuffle([
            { text: "फुम्दी", correct: false },
            { text: "राध", correct: true },
            { text: "शिकारा", correct: false },
            { text: "डल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डल झील में पाए जाने वाले तैरते हुए वनस्पति के टुकड़ों को 'राध' कहते हैं, जिनका उपयोग सब्जियाँ उगाने के लिए किया जाता है।"
    },
    {
        question: "'रूपकुंड झील' किस राज्य में स्थित है, जिसे 'रहस्यमयी झील' भी कहते हैं?",
        answers: shuffle([
            { text: "जम्मू और कश्मीर", correct: false },
            { text: "उत्तराखंड", correct: true },
            { text: "हिमाचल प्रदेश", correct: false },
            { text: "सिक्किम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रूपकुंड झील उत्तराखंड में स्थित है, जहाँ सैकड़ों प्राचीन मानव कंकाल पाए गए हैं, जिसके कारण इसे 'रहस्यमयी झील' कहा जाता है।"
    },
    {
        question: "'वेम्बनाड झील' किस प्रकार की झील है और यह किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "लैगून झील, केरल", correct: true },
            { text: "ताजे पानी की झील, तमिलनाडु", correct: false },
            { text: "खारे पानी की झील, आंध्र प्रदेश", correct: false },
            { text: "क्रेटर झील, महाराष्ट्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेम्बनाड झील केरल में स्थित एक लंबी लैगून झील है, जो भारत की सबसे लंबी झील भी है।"
    },
    {
        question: "'सांभर झील' भारत में नमक का सबसे बड़ा स्रोत है। यह किस राज्य में है?",
        answers: shuffle([
            { text: "गुजरात", correct: false },
            { text: "राजस्थान", correct: true },
            { text: "ओडिशा", correct: false },
            { text: "आंध्र प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सांभर झील राजस्थान में स्थित है और यह भारत की सबसे बड़ी अंतर्देशीय खारे पानी की झील है, जहाँ से बड़ी मात्रा में नमक का उत्पादन होता है।"
    },
    {
        question: "'पुलिकट झील' में स्थित 'श्रीहरिकोटा द्वीप' क्यों प्रसिद्ध है?",
        answers: shuffle([
            { text: "यह एक पक्षी अभयारण्य है।", correct: false },
            { text: "यह भारत का सबसे बड़ा द्वीप है।", correct: false },
            { text: "यह इसरो का अंतरिक्ष प्रक्षेपण केंद्र है।", correct: true },
            { text: "यह एक पर्यटन स्थल है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्रीहरिकोटा द्वीप पर ही भारतीय अंतरिक्ष अनुसंधान संगठन (ISRO) का 'सतीश धवन अंतरिक्ष केंद्र' स्थित है।"
    },
    {
        question: "'चिल्का झील' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "आंध्र प्रदेश", correct: false },
            { text: "तमिलनाडु", correct: false },
            { text: "ओडिशा", correct: true },
            { text: "पश्चिम बंगाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चिल्का झील ओडिशा में स्थित है और यह भारत की सबसे बड़ी खारे पानी की लैगून झील है।"
    },
    {
        question: "'कोलेरू झील' किन दो नदियों के डेल्टा के बीच स्थित है?",
        answers: shuffle([
            { text: "महानदी और गोदावरी", correct: false },
            { text: "कृष्णा और कावेरी", correct: false },
            { text: "गोदावरी और कृष्णा", correct: true },
            { text: "नर्मदा और ताप्ती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोलेरू झील आंध्र प्रदेश में गोदावरी और कृष्णा नदियों के डेल्टा के बीच स्थित एक मीठे पानी की झील है।"
    },
    {
        question: "'वुलर झील' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "सिंधु", correct: false },
            { text: "झेलम", correct: true },
            { text: "चिनाब", correct: false },
            { text: "रावी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वुलर झील जम्मू और कश्मीर में झेलम नदी पर स्थित है और यह भारत की सबसे बड़ी ताजे पानी की झील है।"
    },
    {
        question: "'पैंगोंग त्सो' झील किस केंद्र शासित प्रदेश में स्थित है?",
        answers: shuffle([
            { text: "जम्मू और कश्मीर", correct: false },
            { text: "लद्दाख", correct: true },
            { text: "चंडीगढ़", correct: false },
            { text: "दिल्ली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पैंगोंग त्सो झील लद्दाख में स्थित है, जिसका लगभग 60% हिस्सा चीन में है।"
    },
    {
        question: "'हुसैन सागर झील' किस शहर में स्थित है?",
        answers: shuffle([
            { text: "बेंगलुरु", correct: false },
            { text: "चेन्नई", correct: false },
            { text: "हैदराबाद", correct: true },
            { text: "पुणे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुसैन सागर झील तेलंगाना की राजधानी हैदराबाद में स्थित एक कृत्रिम झील है, जो हैदराबाद और सिकंदराबाद को जोड़ती है।"
    },
    {
        question: "'नागिन झील' किस शहर के पास स्थित है?",
        answers: shuffle([
            { text: "जम्मू", correct: false },
            { text: "श्रीनगर", correct: true },
            { text: "पटनीटॉप", correct: false },
            { text: "गुलमर्ग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नागिन झील श्रीनगर में डल झील के पास स्थित है।"
    },
    {
        question: "'लोनार झील' किस राज्य में स्थित एक क्रेटर झील है?",
        answers: shuffle([
            { text: "महाराष्ट्र", correct: true },
            { text: "कर्नाटक", correct: false },
            { text: "मध्य प्रदेश", correct: false },
            { text: "गुजरात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोनार झील महाराष्ट्र के बुलढाणा जिले में एक उल्कापिंड के गिरने से बनी है।"
    },
    {
        question: "'अष्टमुडी झील' किस प्रकार की झील है?",
        answers: shuffle([
            { text: "हिमनदी", correct: false },
            { text: "लैगून", correct: true },
            { text: "विवर्तनिक", correct: false },
            { text: "क्रेटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अष्टमुडी झील केरल में स्थित एक लैगून झील है, जिसे 'कयाल' भी कहा जाता है।"
    },
    {
        question: "'सूरजकुंड झील' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "पंजाब", correct: false },
            { text: "हरियाणा", correct: true },
            { text: "राजस्थान", correct: false },
            { text: "उत्तर प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूरजकुंड झील हरियाणा के फरीदाबाद में स्थित एक मानव निर्मित झील है।"
    },
    {
        question: "'चोलामू झील' कहाँ स्थित है?",
        answers: shuffle([
            { text: "सिक्किम", correct: true },
            { text: "उत्तराखंड", correct: false },
            { text: "अरुणाचल प्रदेश", correct: false },
            { text: "हिमाचल प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोलामू झील सिक्किम में स्थित है और यह भारत की सबसे ऊँचाई पर स्थित झील है।"
    },
    {
        question: "'गोविंद सागर झील' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: false },
            { text: "सतलज", correct: true },
            { text: "नर्मदा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोविंद सागर झील सतलज नदी पर भाखड़ा नांगल बांध के पीछे बनी एक कृत्रिम झील है।"
    },
    {
        question: "'राजसमंद झील' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "गुजरात", correct: false },
            { text: "राजस्थान", correct: true },
            { text: "महाराष्ट्र", correct: false },
            { text: "मध्य प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजसमंद झील राजस्थान में स्थित एक कृत्रिम झील है।"
    },
    {
        question: "'नैनीताल झील' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "हिमाचल प्रदेश", correct: false },
            { text: "उत्तराखंड", correct: true },
            { text: "जम्मू और कश्मीर", correct: false },
            { text: "सिक्किम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नैनीताल झील उत्तराखंड के नैनीताल शहर में स्थित एक प्राकृतिक झील है।"
    },
    {
        question: "'भीमताल झील' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "हिमाचल प्रदेश", correct: false },
            { text: "उत्तराखंड", correct: true },
            { text: "जम्मू और कश्मीर", correct: false },
            { text: "सिक्किम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भीमताल झील उत्तराखंड में नैनीताल के पास स्थित है और यह कुमाऊं क्षेत्र की सबसे बड़ी झील है।"
    },
    {
        question: "'कोडेकनाल झील' किस राज्य में है?",
        answers: shuffle([
            { text: "कर्नाटक", correct: false },
            { text: "केरल", correct: false },
            { text: "तमिलनाडु", correct: true },
            { text: "आंध्र प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोडेकनाल झील तमिलनाडु के डिंडीगुल जिले में स्थित एक मानव निर्मित झील है।"
    },
    {
        question: "'सूरजताल झील' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "उत्तराखंड", correct: false },
            { text: "हिमाचल प्रदेश", correct: true },
            { text: "जम्मू और कश्मीर", correct: false },
            { text: "सिक्किम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूरजताल झील हिमाचल प्रदेश के लाहौल और स्पीति जिले में स्थित एक हिमनदी झील है।"
    },
    {
        question: "'चिल्का झील' किस प्रकार की झील है?",
        answers: shuffle([
            { text: "लैगून", correct: true },
            { text: "हिमनदी", correct: false },
            { text: "विवर्तनिक", correct: false },
            { text: "क्रेटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चिल्का झील एक लैगून है, जो समुद्र से रेत की पट्टी द्वारा अलग हो जाती है।"
    },
    {
        question: "'लोकतक झील' पर स्थित 'केइबुल लामजाओ' राष्ट्रीय उद्यान किस जानवर का प्राकृतिक आवास है?",
        answers: shuffle([
            { text: "सफेद बाघ", correct: false },
            { text: "कश्मीरी हिरण", correct: false },
            { text: "संगाई हिरण", correct: true },
            { text: "गंगा डॉल्फिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केइबुल लामजाओ राष्ट्रीय उद्यान मणिपुर के राज्य पशु, संगाई (मणिपुरी भौंह वाला हिरण) का एकमात्र प्राकृतिक आवास है।"
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