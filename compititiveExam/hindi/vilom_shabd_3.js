const questions = [
    {
        topHeading: "विलोम शब्द पर आधारित 50 बहुविकल्पीय प्रश्न part 39 (quiz_no.39)"
    },
    {
        question: "'सृजन' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "संहार", correct: true },
            { text: "प्रकृति", correct: false },
            { text: "बनाना", correct: false },
            { text: "निर्माण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सृजन' का अर्थ है किसी चीज़ का निर्माण करना या रचना करना।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके विपरीत, 'संहार' का अर्थ है विनाश करना या नष्ट करना।"
    },
    {
        question: "'सापेक्ष' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "निरपेक्ष", correct: true },
            { text: "असत्य", correct: false },
            { text: "परोक्ष", correct: false },
            { text: "स्पष्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सापेक्ष' का अर्थ है जो किसी अन्य वस्तु पर निर्भर हो या उससे संबंधित हो।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'निरपेक्ष' है, जिसका अर्थ है जो किसी पर निर्भर न हो, स्वतंत्र हो।"
    },
    {
        question: "'श्वेत' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "उजला", correct: false },
            { text: "सफ़ेद", correct: false },
            { text: "श्याम", correct: true },
            { text: "स्वच्छ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'श्वेत' का अर्थ सफ़ेद रंग होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'श्याम' है, जिसका अर्थ काला या साँवला रंग होता है।"
    },
    {
        question: "'हर्ष' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "खुशी", correct: false },
            { text: "आनंद", correct: false },
            { text: "उल्लास", correct: false },
            { text: "विषाद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हर्ष' का अर्थ है अत्यधिक प्रसन्नता या खुशी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विपरीतार्थक शब्द 'विषाद' है, जिसका अर्थ गहरा दुःख या शोक होता है।"
    },
    {
        question: "'अनिवार्य' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "आवश्यक", correct: false },
            { text: "जरूरी", correct: false },
            { text: "वैकल्पिक", correct: true },
            { text: "वश्यक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनिवार्य' का मतलब है जिसे टाला न जा सके, जो करना ही पड़े।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'वैकल्पिक' होता है, जिसका अर्थ है जिसे अपनी इच्छा के अनुसार चुना जा सके।"
    },
    {
        question: "'आयात' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "निर्यात", correct: true },
            { text: "आगमन", correct: false },
            { text: "प्रेषण", correct: false },
            { text: "भेजना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आयात' का अर्थ है दूसरे देश से माल मंगाना, जबकि 'निर्यात' का अर्थ है अपने देश से माल दूसरे देश भेजना।"
    },
    {
        question: "'आमिष' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "सामिष", correct: false },
            { text: "निरामिष", correct: true },
            { text: "मांसाहारी", correct: false },
            { text: "शाकाहारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आमिष' का अर्थ है मांस युक्त भोजन।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'निरामिष' है, जिसका अर्थ है बिना मांस का भोजन।"
    },
    {
        question: "'आर्द्र' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "गीला", correct: false },
            { text: "नम", correct: false },
            { text: "शुष्क", correct: true },
            { text: "तरल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आर्द्र' का अर्थ नमी युक्त या गीला होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'शुष्क' है, जिसका अर्थ सूखा होता है।"
    },
    {
        question: "'आस्था' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "विश्वास", correct: false },
            { text: "श्रद्धा", correct: false },
            { text: "अनास्था", correct: true },
            { text: "भक्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आस्था' का अर्थ है किसी व्यक्ति या वस्तु में विश्वास या श्रद्धा रखना।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'अनास्था' है, जिसका अर्थ है विश्वास या श्रद्धा का न होना।"
    },
    {
        question: "'ईश्वर' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "भगवान", correct: false },
            { text: "अनीश्वर", correct: true },
            { text: "देवता", correct: false },
            { text: "परमात्मा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ईश्वर' में विश्वास रखने वाले को आस्तिक कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जो ईश्वर के अस्तित्व को नहीं मानता, उसे 'अनीश्वरवादी' कहते हैं, इसलिए 'ईश्वर' का विलोम 'अनीश्वर' है।"
    },
    {
        question: "'उत्थान' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "उन्नति", correct: false },
            { text: "पतन", correct: true },
            { text: "प्रगति", correct: false },
            { text: "विकास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उत्थान' का अर्थ ऊपर उठना या प्रगति करना है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'पतन' है, जिसका अर्थ नीचे गिरना या अवनति होना है।"
    },
    {
        question: "'उर्वर' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "उपजाऊ", correct: false },
            { text: "ऊसर", correct: true },
            { text: "सिंचित", correct: false },
            { text: "हरा-भरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उर्वर' भूमि वह होती है जो उपजाऊ हो।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'ऊसर' या 'बंजर' है, जिसका अर्थ है अनुपजाऊ भूमि।"
    },
    {
        question: "'एकता' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "मेल", correct: false },
            { text: "संगठन", correct: false },
            { text: "अनेकता", correct: true },
            { text: "समन्वय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'एकता' का अर्थ है मिलकर एक होना।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विपरीतार्थक शब्द 'अनेकता' है, जिसका अर्थ है भिन्नता या अलगाव।"
    },
    {
        question: "'कटु' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "तीखा", correct: false },
            { text: "कड़वा", correct: false },
            { text: "कर्कश", correct: false },
            { text: "मधु", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कटु' का अर्थ कड़वा या अप्रिय होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'मधु' या 'मधुर' है, जिसका अर्थ मीठा या प्रिय होता है।"
    },
    {
        question: "'गुप्त' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "छिपा हुआ", correct: false },
            { text: "रहस्य", correct: false },
            { text: "प्रकट", correct: true },
            { text: "जानना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गुप्त' का अर्थ है जो छिपा हुआ हो।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'प्रकट' है, जिसका अर्थ है जो सामने हो या ज़ाहिर हो।"
    },
    {
        question: "'सुगम' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "सरल", correct: false },
            { text: "आसान", correct: false },
            { text: "दुर्गम", correct: true },
            { text: "सहज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुगम' का अर्थ है जहाँ आसानी से पहुँचा जा सके।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'दुर्गम' है, जिसका अर्थ है जहाँ कठिनाई से पहुँचा जा सके।"
    },
    {
        question: "'निर्मल' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "स्वच्छ", correct: false },
            { text: "पवित्र", correct: false },
            { text: "मलिन", correct: true },
            { text: "शुद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निर्मल' का अर्थ है स्वच्छ या बिना मैल का।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'मलिन' है, जिसका अर्थ है मैला या गंदा।"
    },
    {
        question: "'पराधीन' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "गुलाम", correct: false },
            { text: "अधीन", correct: false },
            { text: "स्वाधीन", correct: true },
            { text: "आश्रित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पराधीन' का अर्थ है दूसरों के अधीन या गुलाम।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'स्वाधीन' है, जिसका अर्थ है स्वतंत्र या अपने अधीन।"
    },
    {
        question: "'प्रत्यक्ष' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "सामने", correct: false },
            { text: "परोक्ष", correct: true },
            { text: "स्पष्ट", correct: false },
            { text: "साक्ष्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रत्यक्ष' का अर्थ है जो आँखों के सामने हो।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'परोक्ष' है, जिसका अर्थ है जो आँखों के सामने न हो।"
    },
    {
        question: "'बंधन' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "रिश्ता", correct: false },
            { text: "संबंध", correct: false },
            { text: "मुक्ति", correct: true },
            { text: "जोड़ना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बंधन' का अर्थ है बंधा हुआ होना।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विपरीतार्थक शब्द 'मुक्ति' है, जिसका अर्थ है स्वतंत्रता या छुटकारा।"
    },
    {
        question: "'मितव्यय' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "कम खर्च", correct: false },
            { text: "अपव्यय", correct: true },
            { text: "कृपण", correct: false },
            { text: "कंजूस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मितव्यय' का अर्थ है सोच-समझकर खर्च करना या कम खर्च करना।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'अपव्यय' है, जिसका अर्थ है फिजूलखर्ची करना।"
    },
    {
        question: "'मौखिक' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "कथित", correct: false },
            { text: "पठित", correct: false },
            { text: "वाचिक", correct: false },
            { text: "लिखित", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मौखिक' का अर्थ है मुख से बोला हुआ।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'लिखित' है, जिसका अर्थ है लिखा हुआ।"
    },
    {
        question: "'यश' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "कीर्ति", correct: false },
            { text: "प्रसिद्धि", correct: false },
            { text: "अपयश", correct: true },
            { text: "सम्मान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यश' का अर्थ है प्रसिद्धि या कीर्ति।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'अपयश' है, जिसका अर्थ है बदनामी।"
    },
    {
        question: "'रुग्ण' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "बीमार", correct: false },
            { text: "अस्वस्थ", correct: false },
            { text: "रोगी", correct: false },
            { text: "स्वस्थ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रुग्ण' का अर्थ है रोगी या बीमार।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'स्वस्थ' है, जिसका अर्थ है निरोगी।"
    },
    {
        question: "'विधवा' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "सधवा", correct: true },
            { text: "विवाहिता", correct: false },
            { text: "कुमारी", correct: false },
            { text: "सुहागिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विधवा' वह स्त्री होती है जिसके पति की मृत्यु हो गई हो।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'सधवा' है, जिसका अर्थ है वह स्त्री जिसका पति जीवित हो।"
    },
    {
        question: "'संकीर्ण' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "तंग", correct: false },
            { text: "संकुचित", correct: false },
            { text: "विस्तीर्ण", correct: true },
            { text: "गहरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'संकीर्ण' का अर्थ है तंग या संकुचित।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'विस्तीर्ण' है, जिसका अर्थ है फैला हुआ या विस्तृत।"
    },
    {
        question: "'संक्षेप' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "छोटा", correct: false },
            { text: "लघु", correct: false },
            { text: "विस्तार", correct: true },
            { text: "कम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'संक्षेप' का अर्थ है किसी बात को थोड़े में कहना।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'विस्तार' है, जिसका अर्थ है किसी बात को फैलाकर या विस्तार से कहना।"
    },
    {
        question: "'सज्जन' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "भला", correct: false },
            { text: "ईमानदार", correct: false },
            { text: "दुर्जन", correct: true },
            { text: "दयालु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सज्जन' का अर्थ है अच्छा या भला व्यक्ति।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'दुर्जन' है, जिसका अर्थ है दुष्ट या बुरा व्यक्ति।"
    },
    {
        question: "'सरस' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "रसीला", correct: false },
            { text: "मधुर", correct: false },
            { text: "नीरस", correct: true },
            { text: "आनंदमय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सरस' का अर्थ है रस से भरा हुआ या आनंददायक।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'नीरस' है, जिसका अर्थ है बिना रस का या उबाऊ।"
    },
    {
        question: "'स्थूल' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "मोटा", correct: false },
            { text: "भारी", correct: false },
            { text: "सूक्ष्म", correct: true },
            { text: "विशाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्थूल' का अर्थ है मोटा या बड़ा।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'सूक्ष्म' है, जिसका अर्थ है बहुत छोटा या बारीक।"
    },
    {
        question: "'स्वार्थ' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "अपनापन", correct: false },
            { text: "परमार्थ", correct: true },
            { text: "निजता", correct: false },
            { text: "अहंकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्वार्थ' का अर्थ है केवल अपना हित साधना।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'परमार्थ' है, जिसका अर्थ है दूसरों की भलाई करना।"
    },
    {
        question: "'क्षणिक' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "अल्प", correct: false },
            { text: "नश्वर", correct: false },
            { text: "शाश्वत", correct: true },
            { text: "अस्थायी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क्षणिक' का अर्थ है जो कुछ ही क्षणों के लिए रहे।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'शाश्वत' है, जिसका अर्थ है जो हमेशा बना रहे।"
    },
    {
        question: "'आधुनिक' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "नवीन", correct: false },
            { text: "नया", correct: false },
            { text: "अर्वाचीन", correct: false },
            { text: "प्राचीन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आधुनिक' का संबंध वर्तमान समय से है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'प्राचीन' है, जिसका संबंध पुराने समय से है।"
    },
    {
        question: "'आदर' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "सम्मान", correct: false },
            { text: "मान", correct: false },
            { text: "निरादर", correct: true },
            { text: "सत्कार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आदर' का अर्थ है सम्मान।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'निरादर' है, जिसका अर्थ है अपमान।"
    },
    {
        question: "'उपकार' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "भलाई", correct: false },
            { text: "परोपकार", correct: false },
            { text: "अपकार", correct: true },
            { text: "सहायता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उपकार' का अर्थ है किसी की भलाई करना।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'अपकार' है, जिसका अर्थ है किसी का बुरा करना।"
    },
    {
        question: "'कनिष्ठ' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "छोटा", correct: false },
            { text: "लघु", correct: false },
            { text: "निम्न", correct: false },
            { text: "ज्येष्ठ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कनिष्ठ' का अर्थ है पद या आयु में छोटा।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'ज्येष्ठ' है, जिसका अर्थ है पद या आयु में बड़ा।"
    },
    {
        question: "'निंदा' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "बुराई", correct: false },
            { text: "दोषारोपण", correct: false },
            { text: "स्तुति", correct: true },
            { text: "आलोचना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निंदा' का अर्थ है किसी की बुराई करना।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'स्तुति' है, जिसका अर्थ है प्रशंसा या बड़ाई करना।"
    },
    {
        question: "'अल्पसंख्यक' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "कम", correct: false },
            { text: "बहुसंख्यक", correct: true },
            { text: "अधिक", correct: false },
            { text: "अनेक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अल्पसंख्यक' का अर्थ है संख्या में कम होना।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'बहुसंख्यक' है, जिसका अर्थ है संख्या में अधिक होना।"
    },
    {
        question: "'आकर्षण' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "खिंचाव", correct: false },
            { text: "विकर्षण", correct: true },
            { text: "प्रेम", correct: false },
            { text: "लगाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आकर्षण' का अर्थ है अपनी ओर खींचना।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'विकर्षण' है, जिसका अर्थ है दूर हटाना।"
    },
    {
        question: "'अवनत' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "गिरा हुआ", correct: false },
            { text: "नीचा", correct: false },
            { text: "उन्नत", correct: true },
            { text: "पतन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अवनत' का अर्थ है झुका हुआ या गिरा हुआ।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'उन्नत' है, जिसका अर्थ है उठा हुआ या विकसित।"
    },
    {
        question: "'बाह्य' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "बाहरी", correct: false },
            { text: "अभ्यंतर", correct: true },
            { text: "अंदर", correct: false },
            { text: "गहरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बाह्य' का अर्थ है बाहरी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'अभ्यंतर' है, जिसका अर्थ है भीतरी या आंतरिक।"
    },
    {
        question: "'सापेक्ष' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "निरपेक्ष", correct: true },
            { text: "असत्य", correct: false },
            { text: "परोक्ष", correct: false },
            { text: "स्पष्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सापेक्ष' का अर्थ है जो किसी अन्य वस्तु पर निर्भर हो या उससे संबंधित हो।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'निरपेक्ष' है, जिसका अर्थ है जो किसी पर निर्भर न हो, स्वतंत्र हो।"
    },
    {
        question: "'राजा' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "प्रजा", correct: false },
            { text: "रानी", correct: false },
            { text: "रंक", correct: true },
            { text: "सेनापति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'राजा' का अर्थ है शासक, जो धनवान और शक्तिशाली होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'रंक' है, जिसका अर्थ है अत्यंत निर्धन व्यक्ति। 'प्रजा' भी एक संभावित विलोम है, लेकिन 'रंक' अधिक सटीक है।"
    },
    {
        question: "'सजीव' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "जीवित", correct: false },
            { text: "प्राणवान", correct: false },
            { text: "निर्जीव", correct: true },
            { text: "चेतन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सजीव' का अर्थ है जिसमें जीवन हो।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'निर्जीव' है, जिसका अर्थ है जिसमें जीवन न हो।"
    },
    {
        question: "'सुगम' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "सरल", correct: false },
            { text: "आसान", correct: false },
            { text: "दुर्गम", correct: true },
            { text: "सहज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुगम' का अर्थ है जहाँ आसानी से पहुँचा जा सके।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'दुर्गम' है, जिसका अर्थ है जहाँ कठिनाई से पहुँचा जा सके।"
    },
    {
        question: "'सौभाग्य' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "अच्छा भाग्य", correct: false },
            { text: "किस्मत", correct: false },
            { text: "दुर्भाग्य", correct: true },
            { text: "सुकर्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सौभाग्य' का अर्थ है अच्छा भाग्य।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'दुर्भाग्य' है, जिसका अर्थ है बुरा भाग्य।"
    },
    {
        question: "'दाता' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "दानी", correct: false },
            { text: "भिखारी", correct: false },
            { text: "याचक", correct: true },
            { text: "दनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दाता' का अर्थ है देने वाला।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'याचक' है, जिसका अर्थ है माँगने वाला।"
    },
    {
        question: "'धवल' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "उज्ज्वल", correct: false },
            { text: "श्वेत", correct: false },
            { text: "मलिन", correct: true },
            { text: "स्वच्छ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धवल' का अर्थ उज्ज्वल या सफ़ेद होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'मलिन' है, जिसका अर्थ मैला या श्याम होता है।"
    },
    {
        question: "'निरक्षर' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "अनपढ़", correct: false },
            { text: "अशिक्षित", correct: false },
            { text: "साक्षर", correct: true },
            { text: "अज्ञानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निरक्षर' का अर्थ है जो पढ़ा-लिखा न हो।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'साक्षर' है, जिसका अर्थ है जो पढ़ा-लिखा हो।"
    },
    {
        question: "'प्राचीन' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "पुराना", correct: false },
            { text: "सनातन", correct: false },
            { text: "अर्वाचीन", correct: true },
            { text: "पूर्वकालीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्राचीन' का अर्थ है पुराना।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम 'अर्वाचीन' है, जिसका अर्थ है नया या आधुनिक।"
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