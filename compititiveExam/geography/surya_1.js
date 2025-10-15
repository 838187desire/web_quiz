const questions = [
    {
        topHeading: "सूर्य पर आधारित 50 MCQs, (quiz_no.)"
    },
    {
        question: "सूर्य की ऊर्जा का मुख्य स्रोत क्या है?",
        answers: shuffle([
            { text: "नाभिकीय संलयन", correct: true },
            { text: "नाभिकीय विखंडन", correct: false },
            { text: "रासायनिक अभिक्रिया", correct: false },
            { text: "गुरुत्वाकर्षण संकुचन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य के केंद्र में अत्यधिक दाब और तापमान के कारण हाइड्रोजन के परमाणु मिलकर हीलियम का निर्माण करते हैं, इस प्रक्रिया को नाभिकीय संलयन कहते हैं, जिससे अपार ऊर्जा उत्पन्न होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य के प्रकाश को पृथ्वी तक पहुँचने में लगभग कितना समय लगता है?",
        answers: shuffle([
            { text: "8 मिनट 20 सेकंड", correct: true },
            { text: "2 मिनट 10 सेकंड", correct: false },
            { text: "5 मिनट 30 सेकंड", correct: false },
            { text: "12 मिनट 40 सेकंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य और पृथ्वी के बीच की औसत दूरी लगभग 15 करोड़ किलोमीटर है, और प्रकाश की गति से इस दूरी को तय करने में लगभग 8 मिनट और 20 सेकंड का समय लगता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य की सतह का लगभग तापमान कितना होता है?",
        answers: shuffle([
            { text: "6,000 डिग्री सेल्सियस", correct: true },
            { text: "2,000 डिग्री सेल्सियस", correct: false },
            { text: "15,000 डिग्री सेल्सियस", correct: false },
            { text: "1 लाख डिग्री सेल्सियस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य की सतह, जिसे प्रकाशमंडल (फोटोस्फीयर) भी कहा जाता है, का औसत तापमान लगभग 5,500 से 6,000 डिग्री सेल्सियस के बीच होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य के संघटन में कौन सी गैस सर्वाधिक मात्रा में पाई जाती है?",
        answers: shuffle([
            { text: "हाइड्रोजन", correct: true },
            { text: "हीलियम", correct: false },
            { text: "ऑक्सीजन", correct: false },
            { text: "कार्बन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य का लगभग 74% भाग हाइड्रोजन से और लगभग 24% भाग हीलियम से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य का व्यास पृथ्वी के व्यास से लगभग कितना गुना अधिक है?",
        answers: shuffle([
            { text: "109 गुना", correct: true },
            { text: "50 गुना", correct: false },
            { text: "218 गुना", correct: false },
            { text: "500 गुना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य का व्यास लगभग 13,92,700 किलोमीटर है, जो पृथ्वी के व्यास (लगभग 12,742 किलोमीटर) से करीब 109 गुना अधिक है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य की सबसे बाहरी परत को क्या कहा जाता है?",
        answers: shuffle([
            { text: "कोरोना (किरीट)", correct: true },
            { text: "वर्णमंडल (क्रोमोस्फीयर)", correct: false },
            { text: "प्रकाशमंडल (फोटोस्फीयर)", correct: false },
            { text: "संवहन क्षेत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोरोना सूर्य के वायुमंडल की सबसे बाहरी परत है, जो केवल पूर्ण सूर्य ग्रहण के दौरान ही दिखाई देती है और इसका तापमान लाखों डिग्री सेल्सियस तक होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौर कलंक (Sunspots) वास्तव में क्या हैं?",
        answers: shuffle([
            { text: "सूर्य के ठंडे और अंधेरे क्षेत्र", correct: true },
            { text: "सूर्य पर मौजूद काले धब्बे", correct: false },
            { text: "सूर्य पर स्थित बड़े पहाड़", correct: false },
            { text: "सूर्य के गर्म और चमकीले क्षेत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौर कलंक सूर्य की सतह पर अपेक्षाकृत ठंडे क्षेत्र होते हैं, जिनका तापमान आसपास के क्षेत्रों से कम होता है, इसलिए वे काले धब्बों के रूप में दिखाई देते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौर कलंक का एक पूरा चक्र कितने वर्षों का होता है?",
        answers: shuffle([
            { text: "11 वर्ष", correct: true },
            { text: "5 वर्ष", correct: false },
            { text: "22 वर्ष", correct: false },
            { text: "33 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौर कलंकों की संख्या में वृद्धि और कमी का एक चक्र लगभग 11 वर्षों में पूरा होता है, जिसे सौर चक्र (Solar Cycle) कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य हमारी आकाशगंगा 'मिल्की वे' के केंद्र की परिक्रमा कितने समय में करता है?",
        answers: shuffle([
            { text: "225-250 मिलियन वर्ष", correct: true },
            { text: "100 मिलियन वर्ष", correct: false },
            { text: "150 मिलियन वर्ष", correct: false },
            { text: "300 मिलियन वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य लगभग 225 से 250 मिलियन वर्षों में अपनी आकाशगंगा के केंद्र का एक चक्कर पूरा करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस अवधि को एक 'ब्रह्मांडीय वर्ष' भी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "निम्नलिखित में से कौन सी परत सूर्य की सतह से दिखाई देती है?",
        answers: shuffle([
            { text: "प्रकाशमंडल (फोटोस्फीयर)", correct: true },
            { text: "कोरोना (किरीट)", correct: false },
            { text: "कोर (केंद्र)", correct: false },
            { text: "विकिरण क्षेत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाशमंडल सूर्य की वह परत है जो हमें सामान्य रूप से पृथ्वी से दिखाई देती है और जिससे प्रकाश उत्सर्जित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य के केंद्र (Core) का अनुमानित तापमान कितना है?",
        answers: shuffle([
            { text: "15 मिलियन डिग्री सेल्सियस", correct: true },
            { text: "1 मिलियन डिग्री सेल्सियस", correct: false },
            { text: "5 मिलियन डिग्री सेल्सियस", correct: false },
            { text: "10 मिलियन डिग्री सेल्सियस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य का केंद्र अत्यधिक गर्म और घना है, जहाँ का तापमान लगभग 15 मिलियन डिग्री सेल्सियस होता है, जो नाभिकीय संलयन के लिए आवश्यक है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'सौर ज्वाला' (Solar Flare) का क्या अर्थ है?",
        answers: shuffle([
            { text: "सूर्य के वायुमंडल में अचानक ऊर्जा का विस्फोट", correct: true },
            { text: "सूर्य से प्रकाश का निकलना", correct: false },
            { text: "सूर्य का ठंडा होना", correct: false },
            { text: "सूर्य ग्रहण की घटना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौर ज्वाला सूर्य के वायुमंडल में होने वाला एक तीव्र ऊर्जावान विस्फोट है, जिससे बड़ी मात्रा में विकिरण और आवेशित कण अंतरिक्ष में फैल जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'सौर पवन' (Solar Wind) में मुख्य रूप से क्या होते हैं?",
        answers: shuffle([
            { text: "प्रोटॉन और इलेक्ट्रॉन", correct: true },
            { text: "फोटॉन और न्यूट्रॉन", correct: false },
            { text: "हीलियम के नाभिक", correct: false },
            { text: "ऑक्सीजन और नाइट्रोजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौर पवन सूर्य के कोरोना से निकलने वाले आवेशित कणों (मुख्य रूप से प्रोटॉन और इलेक्ट्रॉन) की एक धारा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य की आयु लगभग कितनी अनुमानित है?",
        answers: shuffle([
            { text: "4.6 अरब वर्ष", correct: true },
            { text: "1.5 अरब वर्ष", correct: false },
            { text: "2.5 अरब वर्ष", correct: false },
            { text: "10 अरब वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खगोलविदों का अनुमान है कि हमारे सौरमंडल और सूर्य का निर्माण लगभग 4.6 अरब वर्ष पहले हुआ था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य के अध्ययन के लिए भारत द्वारा भेजा गया पहला मिशन कौन सा है?",
        answers: shuffle([
            { text: "आदित्य-एल1", correct: true },
            { text: "चंद्रयान-1", correct: false },
            { text: "मंगलयान", correct: false },
            { text: "गगनयान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आदित्य-एल1 भारतीय अंतरिक्ष अनुसंधान संगठन (इसरो) द्वारा सूर्य के अध्ययन के लिए समर्पित पहला भारतीय अंतरिक्ष मिशन है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "प्रकाशमंडल के ऊपर स्थित सूर्य की परत को क्या कहते हैं?",
        answers: shuffle([
            { text: "वर्णमंडल (क्रोमोस्फीयर)", correct: true },
            { text: "कोरोना (किरीट)", correct: false },
            { text: "विकिरण क्षेत्र", correct: false },
            { text: "संवहन क्षेत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वर्णमंडल, सूर्य के वायुमंडल की एक पतली परत है जो प्रकाशमंडल के ठीक ऊपर और कोरोना के नीचे स्थित होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य का द्रव्यमान सौरमंडल के कुल द्रव्यमान का लगभग कितना प्रतिशत है?",
        answers: shuffle([
            { text: "99.8%", correct: true },
            { text: "75%", correct: false },
            { text: "89%", correct: false },
            { text: "95.8%", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य इतना विशाल है कि इसका द्रव्यमान हमारे पूरे सौरमंडल के कुल द्रव्यमान का लगभग 99.86% है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य ग्रहण कब होता है?",
        answers: shuffle([
            { text: "जब चंद्रमा, सूर्य और पृथ्वी के बीच आ जाता है", correct: true },
            { text: "जब पृथ्वी, सूर्य और चंद्रमा के बीच आ जाती है", correct: false },
            { text: "जब सूर्य, चंद्रमा और पृथ्वी के बीच आ जाता है", correct: false },
            { text: "पूर्णिमा के दिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य ग्रहण तब होता है जब चंद्रमा घूमते हुए सूर्य और पृथ्वी के बीच में आ जाता है, जिससे सूर्य का प्रकाश पृथ्वी तक नहीं पहुँच पाता।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य को खगोल विज्ञान में किस श्रेणी के तारे के रूप में वर्गीकृत किया गया है?",
        answers: shuffle([
            { text: "पीला वामन (Yellow Dwarf)", correct: true },
            { text: "लाल दानव (Red Giant)", correct: false },
            { text: "श्वेत वामन (White Dwarf)", correct: false },
            { text: "नीला महादानव (Blue Supergiant)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य एक जी-प्रकार का मुख्य-अनुक्रम तारा है, जिसे आमतौर पर 'पीला वामन' कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य की परिक्रमा करने वाले खगोलीय पिंडों को क्या कहते हैं?",
        answers: shuffle([
            { text: "ग्रह", correct: true },
            { text: "तारे", correct: false },
            { text: "आकाशगंगा", correct: false },
            { text: "उल्कापिंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रह, बौने ग्रह, क्षुद्रग्रह और धूमकेतु जैसे खगोलीय पिंड सूर्य के गुरुत्वाकर्षण के कारण उसकी परिक्रमा करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य के केंद्र से सतह तक ऊर्जा का स्थानांतरण किन प्रक्रियाओं द्वारा होता है?",
        answers: shuffle([
            { text: "विकिरण और संवहन दोनों द्वारा", correct: true },
            { text: "केवल विकिरण द्वारा", correct: false },
            { text: "केवल संवहन द्वारा", correct: false },
            { text: "चालन द्वारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य के आंतरिक भाग में ऊर्जा का स्थानांतरण पहले विकिरण (Radiation) द्वारा और फिर बाहरी परतों में संवहन (Convection) द्वारा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य के ध्रुवीय क्षेत्रों की तुलना में भूमध्यरेखीय क्षेत्र का घूर्णन काल कैसा होता है?",
        answers: shuffle([
            { text: "कम होता है", correct: true },
            { text: "अधिक होता है", correct: false },
            { text: "बराबर होता है", correct: false },
            { text: "निश्चित नहीं होता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य एक ठोस पिंड नहीं है, इसलिए इसका घूर्णन विभेदक होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> भूमध्य रेखा पर यह लगभग 25 दिनों में एक चक्कर पूरा करता है, जबकि ध्रुवों पर लगभग 35 दिन लगते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'कोरोनाग्राफ' (Coronagraph) नामक उपकरण का प्रयोग किसके अध्ययन के लिए किया जाता है?",
        answers: shuffle([
            { text: "सूर्य के कोरोना (किरीट)", correct: true },
            { text: "सूर्य के केंद्र", correct: false },
            { text: "सूर्य के धब्बों", correct: false },
            { text: "सौर ज्वालाओं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोरोनाग्राफ एक दूरबीन है जो सूर्य की चमकदार डिस्क को ढक देती है ताकि उसके चारों ओर की धुंधली कोरोना का अध्ययन किया जा सके।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी पर 'ऑरोरा' (ध्रुवीय ज्योति) की घटना का मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "सौर पवन", correct: true },
            { text: "चंद्रमा का प्रकाश", correct: false },
            { text: "पृथ्वी का घूर्णन", correct: false },
            { text: "उल्का वर्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब सूर्य से आने वाले आवेशित कण (सौर पवन) पृथ्वी के चुंबकीय क्षेत्र से टकराते हैं, तो वे वायुमंडल के कणों के साथ क्रिया करके रंगीन प्रकाश उत्पन्न करते हैं, जिसे ऑरोरा कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वह बिंदु जहाँ किसी ग्रह की कक्षा में वह सूर्य से सबसे दूर होता है, क्या कहलाता है?",
        answers: shuffle([
            { text: "अपसौर (Aphelion)", correct: true },
            { text: "उपसौर (Perihelion)", correct: false },
            { text: "अपभू (Apogee)", correct: false },
            { text: "उपभू (Perigee)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपसौर वह बिंदु है जब कोई ग्रह या खगोलीय पिंड अपनी कक्षा में सूर्य से अधिकतम दूरी पर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य का गुरुत्वाकर्षण पृथ्वी के गुरुत्वाकर्षण से लगभग कितना गुना अधिक है?",
        answers: shuffle([
            { text: "28 गुना", correct: true },
            { text: "10 गुना", correct: false },
            { text: "18 गुना", correct: false },
            { text: "50 गुना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य का विशाल द्रव्यमान और आकार होने के कारण इसकी सतह पर गुरुत्वाकर्षण पृथ्वी की तुलना में लगभग 28 गुना अधिक है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "भविष्य में जब सूर्य का हाइड्रोजन ईंधन समाप्त हो जाएगा, तो यह किसमें परिवर्तित हो जाएगा?",
        answers: shuffle([
            { text: "एक लाल दानव (रेड जायंट) में", correct: true },
            { text: "एक कृष्ण विवर (ब्लैक होल) में", correct: false },
            { text: "एक न्यूट्रॉन तारे में", correct: false },
            { text: "एक सुपरनोवा में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लगभग 5 अरब वर्षों में, जब सूर्य का हाइड्रोजन समाप्त हो जाएगा, तो यह फूलकर एक लाल दानव तारे में बदल जाएगा।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'हीलियोसिस्मोलॉजी' (Helioseismology) किसका अध्ययन है?",
        answers: shuffle([
            { text: "सूर्य की आंतरिक संरचना का", correct: true },
            { text: "सूर्य के कोरोना का", correct: false },
            { text: "सूर्य के धब्बों का", correct: false },
            { text: "सौर ज्वालाओं का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीलियोसिस्मोलॉजी सूर्य की सतह पर होने वाले कंपनों का अध्ययन करके उसकी आंतरिक संरचना और गतिशीलता को समझने का विज्ञान है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'सौर स्थिरांक' (Solar Constant) का मान क्या है?",
        answers: shuffle([
            { text: "पृथ्वी के वायुमंडल के ऊपरी भाग पर प्रति इकाई क्षेत्रफल पर प्राप्त सौर ऊर्जा", correct: true },
            { text: "सूर्य से पृथ्वी को प्राप्त कुल ऊर्जा", correct: false },
            { text: "सूर्य की सतह का तापमान", correct: false },
            { text: "सूर्य का कुल ऊर्जा उत्पादन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौर स्थिरांक वह ऊर्जा है जो पृथ्वी के वायुमंडल की बाहरी सीमा पर सूर्य की किरणों के लंबवत स्थित प्रति इकाई क्षेत्रफल पर प्रति सेकंड प्राप्त होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका मान लगभग 1.37 किलोवॉट प्रति वर्ग मीटर है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य के वायुमंडल का सबसे ठंडा क्षेत्र कौन सा है?",
        answers: shuffle([
            { text: "तापमान न्यूनतम क्षेत्र (Temperature Minimum Region)", correct: true },
            { text: "प्रकाशमंडल (फोटोस्फीयर)", correct: false },
            { text: "कोरोना (किरीट)", correct: false },
            { text: "केंद्र (कोर)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाशमंडल और वर्णमंडल के बीच एक क्षेत्र होता है जहाँ तापमान लगभग 4,100 डिग्री सेल्सियस तक गिर जाता है, यह सूर्य के वायुमंडल का सबसे ठंडा हिस्सा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य के अलावा पृथ्वी का सबसे निकटतम तारा कौन सा है?",
        answers: shuffle([
            { text: "प्रॉक्सिमा सेंटॉरी", correct: true },
            { text: "सीरियस", correct: false },
            { text: "अल्फा सेंटॉरी ए", correct: false },
            { text: "ध्रुव तारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रॉक्सिमा सेंटॉरी, सूर्य के बाद पृथ्वी से सबसे निकट का तारा है, जो लगभग 4.24 प्रकाश-वर्ष दूर है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वह बिंदु जहाँ किसी ग्रह की कक्षा में वह सूर्य के सबसे निकट होता है, क्या कहलाता है?",
        answers: shuffle([
            { text: "उपसौर (Perihelion)", correct: true },
            { text: "अपसौर (Aphelion)", correct: false },
            { text: "अपभू (Apogee)", correct: false },
            { text: "उपभू (Perigee)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उपसौर वह बिंदु है जब कोई ग्रह या खगोलीय पिंड अपनी कक्षा में सूर्य से न्यूनतम दूरी पर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'आदित्य-एल1' मिशन में 'एल1' का क्या अर्थ है?",
        answers: shuffle([
            { text: "लेग्रान्ज बिंदु 1", correct: true },
            { text: "लॉन्च बिंदु 1", correct: false },
            { text: "निम्न कक्षा 1", correct: false },
            { text: "स्तर 1", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एल1 (लेग्रान्ज बिंदु 1) अंतरिक्ष में सूर्य और पृथ्वी के बीच वह स्थान है जहाँ दोनों का गुरुत्वाकर्षण बल संतुलित हो जाता है, जिससे कोई उपग्रह कम ईंधन के साथ वहाँ स्थिर रह सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य की सतह पर दिखाई देने वाले दानेदार स्वरूप को क्या कहा जाता है?",
        answers: shuffle([
            { text: "कणिकाएँ (Granules)", correct: true },
            { text: "सौर कलंक", correct: false },
            { text: "सौर ज्वाला", correct: false },
            { text: "स्पिक्यूल्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य के प्रकाशमंडल पर दिखाई देने वाली दानेदार संरचनाओं को कणिकाएँ कहते हैं, जो सूर्य के भीतर संवहन धाराओं के कारण बनती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य का चुंबकीय क्षेत्र पृथ्वी के चुंबकीय क्षेत्र की तुलना में कैसा है?",
        answers: shuffle([
            { text: "बहुत अधिक शक्तिशाली", correct: true },
            { text: "कमजोर", correct: false },
            { text: "लगभग बराबर", correct: false },
            { text: "समान प्रकृति का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य का समग्र चुंबकीय क्षेत्र पृथ्वी की तुलना में बहुत जटिल और शक्तिशाली है, जो सौर कलंक और सौर ज्वाला जैसी घटनाओं को जन्म देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य की संरचना में केंद्र के ठीक बाहर कौन सा क्षेत्र स्थित है?",
        answers: shuffle([
            { text: "विकिरण क्षेत्र (Radiative Zone)", correct: true },
            { text: "संवहन क्षेत्र (Convective Zone)", correct: false },
            { text: "प्रकाशमंडल (Photosphere)", correct: false },
            { text: "वर्णमंडल (Chromosphere)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य के केंद्र (कोर) से ऊर्जा फोटॉन के रूप में विकिरण क्षेत्र से होकर गुजरती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कोर और संवहन क्षेत्र के बीच स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य से आने वाली पराबैंगनी किरणों से पृथ्वी की रक्षा कौन सी परत करती है?",
        answers: shuffle([
            { text: "ओजोन परत", correct: true },
            { text: "क्षोभमंडल", correct: false },
            { text: "आयनमंडल", correct: false },
            { text: "बाह्यमंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समतापमंडल में स्थित ओजोन परत सूर्य से आने वाली हानिकारक पराबैंगनी (UV) किरणों को अवशोषित कर लेती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पूर्ण सूर्य ग्रहण के दौरान कौन सा भाग स्पष्ट रूप से दिखाई देता है?",
        answers: shuffle([
            { text: "कोरोना (किरीट)", correct: true },
            { text: "प्रकाशमंडल", correct: false },
            { text: "सूर्य का केंद्र", correct: false },
            { text: "विकिरण क्षेत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब चंद्रमा सूर्य को पूरी तरह से ढक लेता है, तो सूर्य की चमकदार सतह छिप जाती है, जिससे उसका धुंधला बाहरी वायुमंडल, कोरोना, दिखाई देने लगता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य किस दिशा से किस दिशा में घूर्णन करता है?",
        answers: shuffle([
            { text: "पश्चिम से पूर्व", correct: true },
            { text: "पूर्व से पश्चिम", correct: false },
            { text: "उत्तर से दक्षिण", correct: false },
            { text: "दक्षिण से उत्तर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी की तरह ही, सूर्य भी अपनी धुरी पर पश्चिम से पूर्व की ओर घूर्णन करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य द्वारा प्रति सेकंड कितनी ऊर्जा उत्सर्जित की जाती है?",
        answers: shuffle([
            { text: "लगभग 3.8 x 10^26 जूल", correct: true },
            { text: "लगभग 3.8 x 10^20 जूल", correct: false },
            { text: "लगभग 3.8 x 10^23 जूल", correct: false },
            { text: "लगभग 3.8 x 10^30 जूल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नाभिकीय संलयन के कारण सूर्य प्रति सेकंड लगभग 3.8 x 10^26 जूल की विशाल मात्रा में ऊर्जा उत्सर्जित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य के वर्णमंडल (क्रोमोस्फीयर) का रंग कैसा होता है?",
        answers: shuffle([
            { text: "लाल", correct: true },
            { text: "पीला", correct: false },
            { text: "सफेद", correct: false },
            { text: "नीला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य ग्रहण के दौरान वर्णमंडल एक लाल रंग की पतली परत के रूप में दिखाई देता है, जिसका कारण हाइड्रोजन अल्फा उत्सर्जन है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य की भूमध्य रेखा उसके क्रांतिवृत्त (Ecliptic) के तल से कितने डिग्री झुकी हुई है?",
        answers: shuffle([
            { text: "7.25 डिग्री", correct: true },
            { text: "0 डिग्री", correct: false },
            { text: "23.5 डिग्री", correct: false },
            { text: "45 डिग्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य की घूर्णन अक्ष पृथ्वी की कक्षा के तल (क्रांतिवृत्त) के सापेक्ष लगभग 7.25 डिग्री पर झुकी हुई है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य के द्रव्यमान का लगभग कितना प्रतिशत भाग हाइड्रोजन और हीलियम से बना है?",
        answers: shuffle([
            { text: "98%", correct: true },
            { text: "70%", correct: false },
            { text: "85%", correct: false },
            { text: "92%", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य के कुल द्रव्यमान का लगभग 74% हाइड्रोजन और 24% हीलियम है, जो मिलकर लगभग 98% होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> शेष 2% में अन्य भारी तत्व शामिल हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य पर 'प्रोमिनेंस' (Prominence) या 'सौर उभार' क्या है?",
        answers: shuffle([
            { text: "सूर्य की सतह से उठने वाली गैस की एक विशाल चमकदार आकृति", correct: true },
            { text: "एक ठंडा क्षेत्र", correct: false },
            { text: "एक काला धब्बा", correct: false },
            { text: "एक गहरा गड्ढा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौर उभार सूर्य की सतह से उठने वाली प्लाज्मा और चुंबकीय क्षेत्रों की एक विशाल, धनुषाकार संरचना होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य से ऊर्जा किस रूप में अंतरिक्ष में यात्रा करती है?",
        answers: shuffle([
            { text: "विद्युत चुम्बकीय विकिरण के रूप में", correct: true },
            { text: "केवल प्रकाश के रूप में", correct: false },
            { text: "केवल ऊष्मा के रूप में", correct: false },
            { text: "ध्वनि तरंगों के रूप में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य की ऊर्जा विद्युत चुम्बकीय विकिरण के रूप में यात्रा करती है, जिसमें दृश्य प्रकाश, पराबैंगनी किरणें, अवरक्त किरणें और अन्य तरंगें शामिल होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य के प्रकाशमंडल के किनारों का केंद्र की तुलना में धुंधला दिखाई देना क्या कहलाता है?",
        answers: shuffle([
            { text: "लिम्ब डार्केनिंग (Limb Darkening)", correct: true },
            { text: "सौर कलंक", correct: false },
            { text: "कोरोना प्रभाव", correct: false },
            { text: "गुरुत्वाकर्षण लेंसिंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब हम सूर्य की डिस्क के केंद्र को देखते हैं तो हम अधिक गर्म और गहरी परतों को देखते हैं, जबकि किनारों पर हम ठंडी और उथली परतों को देखते हैं, जिससे किनारे धुंधले दिखाई देते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'पार्कर सोलर प्रोब' मिशन का मुख्य उद्देश्य क्या है?",
        answers: shuffle([
            { text: "सूर्य के कोरोना का अध्ययन करना", correct: true },
            { text: "चंद्रमा का अध्ययन करना", correct: false },
            { text: "मंगल ग्रह पर जीवन खोजना", correct: false },
            { text: "क्षुद्रग्रहों का विश्लेषण करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नासा का पार्कर सोलर प्रोब मिशन सूर्य के बाहरी वायुमंडल, कोरोना, के करीब जाकर उसका अध्ययन करने के लिए बनाया गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य के केंद्र में हाइड्रोजन किस तत्व में परिवर्तित होता है?",
        answers: shuffle([
            { text: "हीलियम", correct: true },
            { text: "ऑक्सीजन", correct: false },
            { text: "कार्बन", correct: false },
            { text: "लोहा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य के कोर में नाभिकीय संलयन की प्रक्रिया में चार हाइड्रोजन परमाणु मिलकर एक हीलियम परमाणु का निर्माण करते हैं, जिससे ऊर्जा मुक्त होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौरमंडल का सबसे गर्म ग्रह कौन सा है, भले ही वह सूर्य के सबसे निकट नहीं है?",
        answers: shuffle([
            { text: "शुक्र", correct: true },
            { text: "बुध", correct: false },
            { text: "पृथ्वी", correct: false },
            { text: "मंगल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र का घना वायुमंडल ग्रीनहाउस प्रभाव के कारण सूर्य की गर्मी को रोक लेता है, जिससे यह सौरमंडल का सबसे गर्म ग्रह बन जाता है, जबकि बुध सूर्य के सबसे निकट है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य के एक स्थान से दूसरे स्थान पर ऊर्जा ले जाने वाली संवहन कोशिकाओं को क्या कहा जाता है?",
        answers: shuffle([
            { text: "कणिकाएँ (Granules)", correct: true },
            { text: "स्पिक्यूल्स", correct: false },
            { text: "सौर उभार", correct: false },
            { text: "फिलामेंट्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य के संवहन क्षेत्र में गर्म प्लाज्मा ऊपर उठता है और ठंडा होकर नीचे जाता है, जिससे सतह पर कोशिका जैसी संरचनाएँ बनती हैं जिन्हें कणिकाएँ कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
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