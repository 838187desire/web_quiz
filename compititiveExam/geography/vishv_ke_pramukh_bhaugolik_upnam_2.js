const questions = [ 
    {
        topHeading: "विश्व के प्रमुख भौगोलिक उपनाम पर आधारित बहुविकल्पीय प्रश्न (MCQs) part 2  (quiz_no. 61)."
    },
    {
        question: "किस देश को 'संसार की छत' (Roof of the World) कहा जाता है?",
        answers: shuffle([
            { text: "तिब्बत", correct: true },
            { text: "नेपाल", correct: false },
            { text: "भारत", correct: false },
            { text: "चीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तिब्बत को इसकी ऊँची पठारी भौगोलिक स्थिति के कारण 'संसार की छत' कहा जाता है।"
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
        question: "'द गार्डन ऑफ इंग्लैंड' (The Garden of England) के नाम से कौन सा क्षेत्र जाना जाता है?",
        answers: shuffle([
            { text: "केंट", correct: true },
            { text: "लंदन", correct: false },
            { text: "बर्मिंघम", correct: false },
            { text: "मैनचेस्टर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केंट को इसकी उपजाऊ भूमि, फलों के बागों और सुंदर परिदृश्य के कारण 'द गार्डन ऑफ इंग्लैंड' कहा जाता है।"
    },
    {
        question: "'लैंड ऑफ द मॉर्निग काम' (Land of the Morning Calm) किस देश को कहा जाता है?",
        answers: shuffle([
            { text: "दक्षिण कोरिया", correct: true },
            { text: "जापान", correct: false },
            { text: "चीन", correct: false },
            { text: "वियतनाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्षिण कोरिया को अपनी शांत और सुंदर प्रकृति के कारण यह उपनाम मिला है।"
    },
    {
        question: "'सिटी ऑफ ड्रीमिंग स्पायर्स' (City of Dreaming Spires) किस शहर का उपनाम है?",
        answers: shuffle([
            { text: "ऑक्सफोर्ड", correct: true },
            { text: "कैम्ब्रिज", correct: false },
            { text: "लंदन", correct: false },
            { text: "एडिनबर्ग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑक्सफोर्ड विश्वविद्यालय के ऐतिहासिक और वास्तुकला की दृष्टि से महत्वपूर्ण कॉलेजों की वजह से इसे यह उपनाम मिला है।"
    },
    {
        question: "'संसार का सबसे बड़ा रेगिस्तान' (World's Largest Desert) किसे कहा जाता है?",
        answers: shuffle([
            { text: "सहारा", correct: true },
            { text: "गोबी", correct: false },
            { text: "अटाकामा", correct: false },
            { text: "ग्रेट विक्टोरिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सहारा दुनिया का सबसे बड़ा गर्म रेगिस्तान है, जो अफ्रीका के उत्तरी भाग में स्थित है।"
    },
    {
        question: "'लॉन्ग वाइट क्लाउड की भूमि' (Land of the Long White Cloud) किसे कहते हैं?",
        answers: shuffle([
            { text: "न्यूजीलैंड", correct: true },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "कनाडा", correct: false },
            { text: "नॉर्वे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माओरी भाषा में न्यूजीलैंड का नाम 'आओटेरोआ' है, जिसका अर्थ 'लंबा सफेद बादल' है, जो यहां के क्षितिज को दर्शाता है।"
    },
    {
        question: "'दक्षिण का ब्रिटेन' (Britain of the South) किस देश को कहा जाता है?",
        answers: shuffle([
            { text: "न्यूजीलैंड", correct: true },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "जापान", correct: false },
            { text: "अर्जेंटीना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूजीलैंड की भौगोलिक स्थिति और संस्कृति की समानता के कारण इसे 'दक्षिण का ब्रिटेन' कहते हैं।"
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