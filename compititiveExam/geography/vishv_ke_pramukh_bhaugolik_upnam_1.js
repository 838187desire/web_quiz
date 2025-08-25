const questions = [ 
    {
        topHeading: "विश्व के प्रमुख भौगोलिक उपनाम पर आधारित बहुविकल्पीय प्रश्न (MCQs) part 1  (quiz_no. 60)."
    },
    {
        question: "किस शहर को 'शाश्वत शहर' (Eternal City) कहा जाता है?",
        answers: shuffle([
            { text: "रोम", correct: true },
            { text: "पेरिस", correct: false },
            { text: "एथेंस", correct: false },
            { text: "लंदन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्राचीन रोमन साम्राज्य की राजधानी होने और अपनी ऐतिहासिक विरासत के कारण रोम को 'शाश्वत शहर' कहा जाता है।"
    },
    {
        question: "'पूर्व का वेनिस' किस शहर को कहा जाता है?",
        answers: shuffle([
            { text: "कोच्चि", correct: false },
            { text: "मुंबई", correct: false },
            { text: "उदयपुर", correct: true },
            { text: "जयपुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पूर्व का वेनिस' भारत के राजस्थान राज्य में स्थित उदयपुर शहर को कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उदयपुर अपनी सुंदर झीलों, महलों और जलमार्गों के कारण इस उपाधि से सम्मानित है।"
    },
    {
        question: "'गोल्डन गेट सिटी' के नाम से कौन सा शहर जाना जाता है?",
        answers: shuffle([
            { text: "सैन फ्रांसिस्को", correct: true },
            { text: "न्यूयॉर्क", correct: false },
            { text: "सिडनी", correct: false },
            { text: "टोक्यो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सैन फ्रांसिस्को को उसके प्रसिद्ध 'गोल्डन गेट ब्रिज' के कारण 'गोल्डन गेट सिटी' कहा जाता है।"
    },
    {
        question: "'अंध महाद्वीप' (Dark Continent) किस महाद्वीप को कहा जाता है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "अफ्रीका", correct: true },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "यूरोप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 19वीं सदी तक इसके आंतरिक क्षेत्रों के बारे में कम जानकारी होने के कारण अफ्रीका को 'अंध महाद्वीप' कहा जाता था।"
    },
    {
        question: "'सात पहाड़ियों का शहर' (City of Seven Hills) किस शहर को कहा जाता है?",
        answers: shuffle([
            { text: "रोम", correct: true },
            { text: "मास्को", correct: false },
            { text: "बर्लिन", correct: false },
            { text: "स्टॉकहोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रोम शहर का निर्माण सात पहाड़ियों पर हुआ था, इसलिए इसे 'सात पहाड़ियों का शहर' कहते हैं।"
    },
    {
        question: "'श्वेत नगर' (White City) के नाम से कौन सा शहर जाना जाता है?",
        answers: shuffle([
            { text: "बेलग्रेड", correct: true },
            { text: "हेलसिंकी", correct: false },
            { text: "लंदन", correct: false },
            { text: "बर्लिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सर्बिया की राजधानी बेलग्रेड का शाब्दिक अर्थ 'श्वेत नगर' है, इसलिए इसे यह उपनाम दिया गया है।"
    },
    {
        question: "'गगनचुंबी इमारतों का शहर' (City of Skyscrapers) किसे कहा जाता है?",
        answers: shuffle([
            { text: "न्यूयॉर्क", correct: true },
            { text: "टोक्यो", correct: false },
            { text: "लंदन", correct: false },
            { text: "पेरिस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूयॉर्क शहर में दुनिया की सबसे अधिक गगनचुंबी इमारतें हैं, इसलिए इसे 'गगनचुंबी इमारतों का शहर' कहा जाता है।"
    },
    {
        question: "'दक्षिण का ब्रिटेन' (Britain of the South) किस देश को कहते हैं?",
        answers: shuffle([
            { text: "न्यूजीलैंड", correct: true },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "जापान", correct: false },
            { text: "अर्जेंटीना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूजीलैंड की भौगोलिक स्थिति और संस्कृति की समानता के कारण इसे 'दक्षिण का ब्रिटेन' कहते हैं।"
    },
    {
        question: "'हजारों झीलों की भूमि' (Land of a Thousand Lakes) किस देश को कहा जाता है?",
        answers: shuffle([
            { text: "फिनलैंड", correct: true },
            { text: "कनाडा", correct: false },
            { text: "आयरलैंड", correct: false },
            { text: "नॉर्वे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फिनलैंड में 1,88,000 से अधिक झीलें हैं, इसलिए इसे यह उपनाम दिया गया है।"
    },
    {
        question: "'नहरों का शहर' (City of Canals) किस शहर को कहा जाता है?",
        answers: shuffle([
            { text: "वेनिस", correct: true },
            { text: "एम्सटर्डम", correct: false },
            { text: "बैंकॉक", correct: false },
            { text: "सेंट पीटर्सबर्ग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इटली का वेनिस शहर अपनी जलमार्गों और नहरों के नेटवर्क के लिए विश्व प्रसिद्ध है।"
    },
    {
        question: "'झीलों का देश' (Land of Lakes) किसे कहते हैं?",
        answers: shuffle([
            { text: "कनाडा", correct: true },
            { text: "फिनलैंड", correct: false },
            { text: "आयरलैंड", correct: false },
            { text: "स्कॉटलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कनाडा में दुनिया की सबसे अधिक झीलें हैं।"
    },
    {
        question: "'इंद्रधनुष का देश' (Land of Rainbows) किस देश को कहा जाता है?",
        answers: shuffle([
            { text: "दक्षिण अफ्रीका", correct: true },
            { text: "ब्राजील", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्षिण अफ्रीका की विविध सांस्कृतिक और जातीय जनसंख्या के कारण इसे 'इंद्रधनुष का देश' कहा जाता है।"
    },
    {
        question: "'हवा वाला शहर' (Windy City) किस शहर को कहा जाता है?",
        answers: shuffle([
            { text: "शिकागो", correct: true },
            { text: "सैन फ्रांसिस्को", correct: false },
            { text: "न्यूयॉर्क", correct: false },
            { text: "लॉस एंजिल्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिशिगन झील के पास स्थित होने के कारण शिकागो में तेज हवाएं चलती हैं, इसलिए इसे 'हवा वाला शहर' कहते हैं।"
    },
    {
        question: "'यूरोप का खेल का मैदान' (Playground of Europe) किस देश को कहा जाता है?",
        answers: shuffle([
            { text: "स्विट्जरलैंड", correct: true },
            { text: "फ्रांस", correct: false },
            { text: "इटली", correct: false },
            { text: "स्पेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्विट्जरलैंड अपनी प्राकृतिक सुंदरता और साहसिक खेलों के लिए प्रसिद्ध है, इसलिए इसे यह उपनाम दिया गया है।"
    },
    {
        question: "'सफेद हाथियों की भूमि' (Land of White Elephants) किस देश को कहा जाता है?",
        answers: shuffle([
            { text: "थाईलैंड", correct: true },
            { text: "भारत", correct: false },
            { text: "श्रीलंका", correct: false },
            { text: "चीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थाईलैंड में सफेद हाथी बहुत सम्मानित और पवित्र माने जाते हैं।"
    },
    {
        question: "'सूर्य का देश' (Land of the Rising Sun) किस देश को कहा जाता है?",
        answers: shuffle([
            { text: "जापान", correct: true },
            { text: "चीन", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "न्यूजीलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जापान दुनिया का सबसे पूर्वी देश है, जहां सबसे पहले सूर्योदय होता है।"
    },
    {
        question: "'मध्यरात्रि सूर्य का देश' (Land of the Midnight Sun) किसे कहते हैं?",
        answers: shuffle([
            { text: "नॉर्वे", correct: true },
            { text: "स्वीडन", correct: false },
            { text: "फिनलैंड", correct: false },
            { text: "आइसलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आर्कटिक सर्कल के अंदर स्थित होने के कारण नॉर्वे में गर्मियों में आधी रात को भी सूर्य दिखाई देता है।"
    },
    {
        question: "'नील नदी का उपहार' (Gift of the Nile) किस देश को कहा जाता है?",
        answers: shuffle([
            { text: "मिस्र", correct: true },
            { text: "सूडान", correct: false },
            { text: "इथियोपिया", correct: false },
            { text: "यूगांडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नील नदी मिस्र की सभ्यता और कृषि का आधार रही है, इसलिए इसे 'नील नदी का उपहार' कहा जाता है।"
    },
    {
        question: "'मोतियों का द्वीप' (Island of Pearls) किस देश को कहा जाता है?",
        answers: shuffle([
            { text: "बहरीन", correct: true },
            { text: "श्रीलंका", correct: false },
            { text: "मालदीव", correct: false },
            { text: "फिलीपींस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बहरीन प्राचीन काल से मोतियों के व्यापार के लिए प्रसिद्ध है।"
    },
    {
        question: "'कंगारुओं का देश' (Land of Kangaroos) किस देश को कहते हैं?",
        answers: shuffle([
            { text: "ऑस्ट्रेलिया", correct: true },
            { text: "न्यूजीलैंड", correct: false },
            { text: "दक्षिण अफ्रीका", correct: false },
            { text: "कनाडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कंगारू ऑस्ट्रेलिया के मूल निवासी हैं और वहां बड़ी संख्या में पाए जाते हैं।"
    },
    {
        question: "'पवित्र भूमि' (Holy Land) के नाम से कौन सा स्थान जाना जाता है?",
        answers: shuffle([
            { text: "यरुशलम", correct: true },
            { text: "मक्का", correct: false },
            { text: "रोम", correct: false },
            { text: "वाराणसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यरुशलम यहूदी धर्म, ईसाई धर्म और इस्लाम के लिए एक पवित्र स्थल है।"
    },
    {
        question: "'मरकत द्वीप' (Emerald Isle) किस देश को कहा जाता है?",
        answers: shuffle([
            { text: "आयरलैंड", correct: true },
            { text: "स्कॉटलैंड", correct: false },
            { text: "इंग्लैंड", correct: false },
            { text: "आइसलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आयरलैंड को उसकी हरी-भरी वनस्पतियों और परिदृश्य के कारण 'मरकत द्वीप' कहा जाता है।"
    },
    {
        question: "'भारत का मसालों का बगीचा' (Spice Garden of India) किस राज्य को कहा जाता है?",
        answers: shuffle([
            { text: "केरल", correct: true },
            { text: "कर्नाटक", correct: false },
            { text: "तमिलनाडु", correct: false },
            { text: "आंध्र प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केरल अपनी काली मिर्च, इलायची और अन्य मसालों के उत्पादन के लिए प्रसिद्ध है।"
    },
    {
        question: "'नहरों का शहर' (City of Canals) किस शहर को कहा जाता है?",
        answers: shuffle([
            { text: "वेनिस", correct: true },
            { text: "एम्सटर्डम", correct: false },
            { text: "बैंकॉक", correct: false },
            { text: "सेंट पीटर्सबर्ग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इटली का वेनिस शहर अपनी जलमार्गों और नहरों के नेटवर्क के लिए विश्व प्रसिद्ध है।"
    },
    {
        question: "'पूर्व का वेनिस' किस शहर को कहा जाता है?",
        answers: shuffle([
            { text: "कोच्चि", correct: false },
            { text: "मुंबई", correct: false },
            { text: "उदयपुर", correct: true },
            { text: "जयपुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पूर्व का वेनिस' भारत के राजस्थान राज्य में स्थित उदयपुर शहर को कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उदयपुर अपनी सुंदर झीलों, महलों और जलमार्गों के कारण इस उपाधि से सम्मानित है।"
    },
    {
        question: "किस शहर को 'क्वेकर शहर' (Quaker City) के नाम से जाना जाता है?",
        answers: shuffle([
            { text: "फिलाडेल्फिया", correct: true },
            { text: "बोस्टन", correct: false },
            { text: "शिकागो", correct: false },
            { text: "न्यूयॉर्क", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फिलाडेल्फिया की स्थापना विलियम पेन ने की थी, जो एक क्वेकर थे, इसलिए इसे 'क्वेकर शहर' कहा जाता है।"
    },
    {
        question: "'एम्पायर सिटी' (Empire City) किस शहर का उपनाम है?",
        answers: shuffle([
            { text: "न्यूयॉर्क", correct: true },
            { text: "लंदन", correct: false },
            { text: "टोक्यो", correct: false },
            { text: "पेरिस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूयॉर्क शहर को इसकी आर्थिक और सांस्कृतिक शक्ति के कारण 'एम्पायर सिटी' कहा जाता है।"
    },
    {
        question: "'आंसुओं का प्रवेश द्वार' (Gate of Tears) किसे कहा जाता है?",
        answers: shuffle([
            { text: "बाब-अल-मंदेब", correct: true },
            { text: "जिब्राल्टर जलडमरूमध्य", correct: false },
            { text: "स्वेज नहर", correct: false },
            { text: "पनामा नहर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह जलडमरूमध्य लाल सागर और अदन की खाड़ी को जोड़ता है और इसे खतरनाक नेविगेशन के कारण यह नाम मिला।"
    },
    {
        question: "'यूरोप का रोगी' (Sick Man of Europe) किस देश को कहा जाता है?",
        answers: shuffle([
            { text: "तुर्की", correct: true },
            { text: "फ्रांस", correct: false },
            { text: "जर्मनी", correct: false },
            { text: "इटली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 19वीं और 20वीं शताब्दी में ओटोमन साम्राज्य की कमजोर स्थिति के कारण इसे 'यूरोप का रोगी' कहा गया।"
    },
    {
        question: "'सूर्य का देश' (Land of the Rising Sun) किस देश को कहा जाता है?",
        answers: shuffle([
            { text: "जापान", correct: true },
            { text: "चीन", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "न्यूजीलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जापान दुनिया का सबसे पूर्वी देश है, जहां सबसे पहले सूर्योदय होता है।"
    },
    {
        question: "'सात टापुओं का शहर' (City of Seven Islands) किस शहर को कहा जाता है?",
        answers: shuffle([
            { text: "मुंबई", correct: true },
            { text: "कोलकाता", correct: false },
            { text: "गोवा", correct: false },
            { text: "चेन्नई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुंबई शहर का निर्माण सात टापुओं को मिलाकर किया गया था, इसलिए इसे 'सात टापुओं का शहर' कहते हैं।"
    },
    {
        question: "'सफेद हाथियों का देश' (Land of White Elephants) किस देश को कहा जाता है?",
        answers: shuffle([
            { text: "थाईलैंड", correct: true },
            { text: "भारत", correct: false },
            { text: "श्रीलंका", correct: false },
            { text: "चीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थाईलैंड में सफेद हाथी बहुत सम्मानित और पवित्र माने जाते हैं।"
    },
    {
        question: "'अंध महाद्वीप' (Dark Continent) किस महाद्वीप को कहा जाता है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "अफ्रीका", correct: true },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "यूरोप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 19वीं सदी तक इसके आंतरिक क्षेत्रों के बारे में कम जानकारी होने के कारण अफ्रीका को 'अंध महाद्वीप' कहा जाता था।"
    },
    {
        question: "'झीलों का देश' (Land of Lakes) किसे कहते हैं?",
        answers: shuffle([
            { text: "कनाडा", correct: true },
            { text: "फिनलैंड", correct: false },
            { text: "आयरलैंड", correct: false },
            { text: "नॉर्वे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कनाडा में दुनिया की सबसे अधिक झीलें हैं।"
    },
    {
        question: "'गोल्डन गेट सिटी' (Golden Gate City) के नाम से कौन सा शहर जाना जाता है?",
        answers: shuffle([
            { text: "सैन फ्रांसिस्को", correct: true },
            { text: "न्यूयॉर्क", correct: false },
            { text: "सिडनी", correct: false },
            { text: "टोक्यो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सैन फ्रांसिस्को को उसके प्रसिद्ध 'गोल्डन गेट ब्रिज' के कारण 'गोल्डन गेट सिटी' कहा जाता है।"
    },
    {
        question: "'पवन चक्कियों की भूमि' (Land of Windmills) किस देश को कहा जाता है?",
        answers: shuffle([
            { text: "नीदरलैंड", correct: true },
            { text: "डेनमार्क", correct: false },
            { text: "बेल्जियम", correct: false },
            { text: "फ्रांस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नीदरलैंड में बड़ी संख्या में पवन चक्कियां पाई जाती हैं, जो इतिहास में जल प्रबंधन के लिए इस्तेमाल की जाती थीं।"
    },
    {
        question: "'भारत का स्विट्जरलैंड' (Switzerland of India) किसे कहते हैं?",
        answers: shuffle([
            { text: "कश्मीर", correct: true },
            { text: "हिमाचल प्रदेश", correct: false },
            { text: "सिक्किम", correct: false },
            { text: "उत्तराखंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कश्मीर की प्राकृतिक सुंदरता और बर्फीले पहाड़ इसे स्विट्जरलैंड के समान बनाते हैं।"
    },
    {
        question: "'प्यासी भूमि का देश' (Land of the Thirsty Land) किस देश को कहा जाता है?",
        answers: shuffle([
            { text: "ऑस्ट्रेलिया", correct: true },
            { text: "सूडान", correct: false },
            { text: "मिस्र", correct: false },
            { text: "लीबिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑस्ट्रेलिया का अधिकांश हिस्सा रेगिस्तानी है और यहां पानी की कमी है, इसलिए इसे यह उपनाम मिला है।"
    },
    {
        question: "'स्वर्ण पैगोडा का देश' (Land of Golden Pagodas) किसे कहते हैं?",
        answers: shuffle([
            { text: "म्यांमार", correct: true },
            { text: "थाईलैंड", correct: false },
            { text: "कंबोडिया", correct: false },
            { text: "लाओस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> म्यांमार में कई सोने के रंग के बौद्ध स्तूप (पैगोडा) हैं, इसलिए इसे यह उपनाम मिला है।"
    },
    {
        question: "'नहरों का शहर' (City of Canals) किस शहर को कहा जाता है?",
        answers: shuffle([
            { text: "वेनिस", correct: true },
            { text: "एम्सटर्डम", correct: false },
            { text: "बैंकॉक", correct: false },
            { text: "सेंट पीटर्सबर्ग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इटली का वेनिस शहर अपनी जलमार्गों और नहरों के नेटवर्क के लिए विश्व प्रसिद्ध है।"
    },
    {
        question: "'विश्व की रोटी की टोकरी' (Breadbasket of the World) किसे कहा जाता है?",
        answers: shuffle([
            { text: "प्रेयरीज़ (उत्तरी अमेरिका)", correct: true },
            { text: "स्टेपीज़ (यूक्रेन)", correct: false },
            { text: "पम्पास (अर्जेंटीना)", correct: false },
            { text: "सवाना (अफ्रीका)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तरी अमेरिका के प्रेयरीज़ विशाल गेहूं उत्पादन के कारण दुनिया की रोटी की टोकरी कहलाते हैं।"
    },
    {
        question: "'नील का उपहार' (Gift of the Nile) किस देश को कहा जाता है?",
        answers: shuffle([
            { text: "मिस्र", correct: true },
            { text: "सूडान", correct: false },
            { text: "इथियोपिया", correct: false },
            { text: "यूगांडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नील नदी मिस्र की सभ्यता और कृषि का आधार रही है, इसलिए इसे 'नील नदी का उपहार' कहा जाता है।"
    },
    {
        question: "'ग्रेट व्हाइट नॉर्थ' (Great White North) किसे कहते हैं?",
        answers: shuffle([
            { text: "कनाडा", correct: true },
            { text: "ग्रीनलैंड", correct: false },
            { text: "अलास्का", correct: false },
            { text: "रूस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कनाडा को उसकी ठंडी जलवायु, विशाल बर्फीले परिदृश्य और उत्तरी भौगोलिक स्थिति के कारण यह उपनाम मिला है।"
    },
    {
        question: "'यूरोप का युद्ध का मैदान' (Battlefield of Europe) किस देश को कहते हैं?",
        answers: shuffle([
            { text: "बेल्जियम", correct: true },
            { text: "फ्रांस", correct: false },
            { text: "जर्मनी", correct: false },
            { text: "पोलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बेल्जियम का भौगोलिक स्थान कई यूरोपीय शक्तियों के लिए युद्ध का केंद्र रहा है, खासकर विश्व युद्धों में।"
    },
    {
        question: "'नीला शहर' (Blue City) के नाम से कौन सा शहर जाना जाता है?",
        answers: shuffle([
            { text: "जोधपुर", correct: true },
            { text: "जयपुर", correct: false },
            { text: "उदयपुर", correct: false },
            { text: "बीकानेर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जोधपुर के पुराने शहर के घरों को नीले रंग से रंगा गया है, इसलिए इसे 'नीला शहर' कहते हैं।"
    },
    {
        question: "'मरकत द्वीप' (Emerald Isle) किस देश को कहा जाता है?",
        answers: shuffle([
            { text: "आयरलैंड", correct: true },
            { text: "स्कॉटलैंड", correct: false },
            { text: "इंग्लैंड", correct: false },
            { text: "आइसलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आयरलैंड को उसकी हरी-भरी वनस्पतियों और परिदृश्य के कारण 'मरकत द्वीप' कहा जाता है।"
    },
    {
        question: "'आंसुओं का द्वार' (Gate of Tears) किसे कहते हैं?",
        answers: shuffle([
            { text: "बाब-अल-मंदेब", correct: true },
            { text: "जिब्राल्टर जलडमरूमध्य", correct: false },
            { text: "स्वेज नहर", correct: false },
            { text: "पनामा नहर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह जलडमरूमध्य लाल सागर और अदन की खाड़ी को जोड़ता है और इसे खतरनाक नेविगेशन के कारण यह नाम मिला।"
    },
    {
        question: "'हजारों झीलों की भूमि' (Land of a Thousand Lakes) किस देश को कहा जाता है?",
        answers: shuffle([
            { text: "फिनलैंड", correct: true },
            { text: "कनाडा", correct: false },
            { text: "आयरलैंड", correct: false },
            { text: "नॉर्वे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फिनलैंड में 1,88,000 से अधिक झीलें हैं, इसलिए इसे यह उपनाम दिया गया है।"
    },
    {
        question: "'अंध महाद्वीप' (Dark Continent) किस महाद्वीप को कहा जाता है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "अफ्रीका", correct: true },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "यूरोप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 19वीं सदी तक इसके आंतरिक क्षेत्रों के बारे में कम जानकारी होने के कारण अफ्रीका को 'अंध महाद्वीप' कहा जाता था।"
    },
    {
        question: "'गोल्डन गेट सिटी' (Golden Gate City) के नाम से कौन सा शहर जाना जाता है?",
        answers: shuffle([
            { text: "सैन फ्रांसिस्को", correct: true },
            { text: "न्यूयॉर्क", correct: false },
            { text: "सिडनी", correct: false },
            { text: "टोक्यो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सैन फ्रांसिस्को को उसके प्रसिद्ध 'गोल्डन गेट ब्रिज' के कारण 'गोल्डन गेट सिटी' कहा जाता है।"
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