const questions = [
    {
        topHeading: "रूढ़ विलोम पर आधारित 50 MCQs, (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'अमृत' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "पीयूष", correct: false },
            { text: "विष", correct: true },
            { text: "सुधा", correct: false },
            { text: "अमिय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमृत का अर्थ होता है जो मृत्यु से रहित कर दे।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि विष का अर्थ होता है ज़हर जो मृत्यु का कारण बनता है।"
    },
    {
        question: "प्रश्न 2. 'अथ' का सही विलोम शब्द चुनें।",
        answers: shuffle([
            { text: "इति", correct: true },
            { text: "अंत", correct: false },
            { text: "समाप्त", correct: false },
            { text: "शुरू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अथ' का अर्थ 'आरंभ' या 'शुरुआत' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि 'इति' का अर्थ 'समाप्ति' या 'अंत' होता है।"
    },
    {
        question: "प्रश्न 3. 'अन्धकार' के लिए उपयुक्त विलोम शब्द कौन सा है?",
        answers: shuffle([
            { text: "तम", correct: false },
            { text: "तिमिर", correct: false },
            { text: "प्रकाश", correct: true },
            { text: "अँधेरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अन्धकार का अर्थ है रोशनी का अभाव।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि प्रकाश का अर्थ है रोशनी या उजाला।"
    },
    {
        question: "प्रश्न 4. 'अल्पायु' का विलोम शब्द निम्नलिखित में से कौन सा है?",
        answers: shuffle([
            { text: "चिरायु", correct: false },
            { text: "दीर्घायु", correct: true },
            { text: "अमर", correct: false },
            { text: "अजर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अल्पायु का अर्थ होता है कम उम्र वाला।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि दीर्घायु का अर्थ होता है लम्बी उम्र वाला।"
    },
    {
        question: "प्रश्न 5. 'अनुराग' का विपरीतार्थक शब्द क्या है?",
        answers: shuffle([
            { text: "प्रेम", correct: false },
            { text: "स्नेह", correct: false },
            { text: "आसक्ति", correct: false },
            { text: "विराग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुराग का अर्थ किसी के प्रति गहरा प्रेम या लगाव होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके विपरीत, विराग का अर्थ है किसी से लगाव का न होना या उदासीनता।"
    },
    {
        question: "प्रश्न 6. 'अपमान' शब्द का विलोम क्या होगा?",
        answers: shuffle([
            { text: "अनादर", correct: false },
            { text: "तिरस्कार", correct: false },
            { text: "सम्मान", correct: true },
            { text: "निरादर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपमान का अर्थ किसी का निरादर करना है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि सम्मान का अर्थ किसी को आदर देना है।"
    },
    {
        question: "प्रश्न 7. 'अपेक्षा' का सही विलोम शब्द है:",
        answers: shuffle([
            { text: "आशा", correct: false },
            { text: "उम्मीद", correct: false },
            { text: "उपेक्षा", correct: true },
            { text: "निराशा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपेक्षा का अर्थ किसी से आशा या उम्मीद रखना है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि उपेक्षा का अर्थ ध्यान न देना या अनदेखी करना है।"
    },
    {
        question: "प्रश्न 8. 'आदि' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "प्रारम्भ", correct: false },
            { text: "शुरू", correct: false },
            { text: "प्रथम", correct: false },
            { text: "अन्त", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आदि का अर्थ है शुरुआत या आरंभ।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम अन्त होता है, जिसका अर्थ है समाप्ति।"
    },
    {
        question: "प्रश्न 9. 'आगामी' के लिए विलोम शब्द चुनें।",
        answers: shuffle([
            { text: "भविष्य", correct: false },
            { text: "आनेवाला", correct: false },
            { text: "गत", correct: true },
            { text: "वर्तमान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आगामी का अर्थ है 'आने वाला'।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि 'गत' का अर्थ है 'बीता हुआ'।"
    },
    {
        question: "प्रश्न 10. 'उत्थान' का विलोम शब्द है:",
        answers: shuffle([
            { text: "उन्नति", correct: false },
            { text: "विकास", correct: false },
            { text: "पतन", correct: true },
            { text: "प्रगति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्थान का अर्थ है ऊपर उठना या प्रगति करना।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विपरीतार्थक शब्द पतन है, जिसका अर्थ है नीचे गिरना या अवनति।"
    },
    {
        question: "प्रश्न 11. 'आग्रह' का विपरीतार्थक शब्द क्या है?",
        answers: shuffle([
            { text: "निवेदन", correct: false },
            { text: "दुराग्रह", correct: true },
            { text: "अनुरोध", correct: false },
            { text: "प्रार्थना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आग्रह का अर्थ है किसी बात के लिए प्रेमपूर्वक हठ करना।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि दुराग्रह का अर्थ है किसी अनुचित बात के लिए हठ करना।"
    },
    {
        question: "प्रश्न 12. 'एकता' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "संगठन", correct: false },
            { text: "मेल", correct: false },
            { text: "अनेकता", correct: true },
            { text: "समूह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एकता का अर्थ है मिलकर एक होने का भाव।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि अनेकता का अर्थ है भिन्नता या अलगाव का भाव।"
    },
    {
        question: "प्रश्न 13. 'अनुज' का सही विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "छोटाभाई", correct: false },
            { text: "कनिष्ठ", correct: false },
            { text: "अग्रज", correct: true },
            { text: "लघु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुज का अर्थ होता है 'छोटा भाई'।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि अग्रज का अर्थ होता है 'बड़ा भाई'।"
    },
    {
        question: "प्रश्न 14. 'आकर्षण' शब्द का विलोम है:",
        answers: shuffle([
            { text: "खिंचाव", correct: false },
            { text: "विकर्षण", correct: true },
            { text: "सम्मोहन", correct: false },
            { text: "लगाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आकर्षण का अर्थ है अपनी ओर खींचने का भाव।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि विकर्षण का अर्थ है दूर हटाने या परे धकेलने का भाव।"
    },
    {
        question: "प्रश्न 15. 'उद्यमी' का विलोम शब्द कौन सा है?",
        answers: shuffle([
            { text: "परिश्रमी", correct: false },
            { text: "मेहनती", correct: false },
            { text: "आलसी", correct: true },
            { text: "कर्मठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उद्यमी का अर्थ है परिश्रम करने वाला या मेहनती।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विलोम आलसी होता है।"
    },
    {
        question: "प्रश्न 16. 'निंदा' का विलोम शब्द है:",
        answers: shuffle([
            { text: "बुराई", correct: false },
            { text: "आलोचना", correct: false },
            { text: "स्तुति", correct: true },
            { text: "अपयश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निंदा का अर्थ है किसी की बुराई करना।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि स्तुति का अर्थ है किसी की प्रशंसा करना।"
    },
    {
        question: "प्रश्न 17. 'आदान' का विपरीतार्थक शब्द क्या है?",
        answers: shuffle([
            { text: "लेना", correct: false },
            { text: "ग्रहण", correct: false },
            { text: "प्रदान", correct: true },
            { text: "स्वीकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आदान का अर्थ है 'लेना'।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि प्रदान का अर्थ है 'देना'।"
    },
    {
        question: "प्रश्न 18. 'उर्वर' का विलोम शब्द है:",
        answers: shuffle([
            { text: "उपजाऊ", correct: false },
            { text: "ऊसर", correct: true },
            { text: "सिंचित", correct: false },
            { text: "हरा-भरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उर्वर भूमि वह होती है जो उपजाऊ हो।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके विपरीत ऊसर भूमि वह होती है जो बंजर हो।"
    },
    {
        question: "प्रश्न 19. 'एक' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "अकेला", correct: false },
            { text: "एकल", correct: false },
            { text: "अनेक", correct: true },
            { text: "संयुक्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'एक' का अर्थ संख्या में एक होना है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि 'अनेक' का अर्थ एक से अधिक होना है।"
    },
    {
        question: "प्रश्न 20. 'आलस्य' का विलोम शब्द चुनें।",
        answers: shuffle([
            { text: "सुस्ती", correct: false },
            { text: "काहिली", correct: false },
            { text: "स्फूर्ति", correct: true },
            { text: "तंद्रा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आलस्य का अर्थ है काम करने में सुस्ती दिखाना।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि स्फूर्ति का अर्थ है चुस्ती या तेजी।"
    },
    {
        question: "प्रश्न 21. 'नूतन' का विलोम शब्द है:",
        answers: shuffle([
            { text: "नया", correct: false },
            { text: "नवीन", correct: false },
            { text: "पुरातन", correct: true },
            { text: "अर्वाचीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नूतन का अर्थ है नया।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि पुरातन का अर्थ है पुराना।"
    },
    {
        question: "प्रश्न 22. 'आदर्श' का विलोम शब्द है:",
        answers: shuffle([
            { text: "उत्तम", correct: false },
            { text: "श्रेष्ठ", correct: false },
            { text: "यथार्थ", correct: true },
            { text: "मानक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आदर्श एक काल्पनिक उत्तम स्थिति है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि यथार्थ वास्तविक स्थिति को कहते हैं।"
    },
    {
        question: "प्रश्न 23. 'आय' का विपरीतार्थक शब्द क्या है?",
        answers: shuffle([
            { text: "आमदनी", correct: false },
            { text: "कमाई", correct: false },
            { text: "व्यय", correct: true },
            { text: "लाभ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आय का अर्थ है आमदनी या कमाई।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि व्यय का अर्थ है खर्चा।"
    },
    {
        question: "प्रश्न 24. 'स्वाधीन' का विलोम शब्द है:",
        answers: shuffle([
            { text: "स्वतंत्र", correct: false },
            { text: "आजाद", correct: false },
            { text: "स्वच्छंद", correct: false },
            { text: "पराधीन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्वाधीन का अर्थ है अपने अधीन या स्वतंत्र।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि पराधीन का अर्थ है दूसरों के अधीन या गुलाम।"
    },
    {
        question: "प्रश्न 25. 'आहार' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "भोजन", correct: false },
            { text: "खाना", correct: false },
            { text: "निराहार", correct: true },
            { text: "खाद्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आहार का अर्थ है भोजन ग्रहण करना।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि निराहार का अर्थ है बिना भोजन के रहना।"
    },
    {
        question: "प्रश्न 26. 'आविर्भाव' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "उदय", correct: false },
            { text: "प्रकटहोना", correct: false },
            { text: "तिरोभाव", correct: true },
            { text: "उद्भव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आविर्भाव का अर्थ है प्रकट होना या उत्पत्ति।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि तिरोभाव का अर्थ है अदृश्य हो जाना या अंतर्धान।"
    },
    {
        question: "प्रश्न 27. 'आरोह' का विलोम शब्द है:",
        answers: shuffle([
            { text: "चढ़ना", correct: false },
            { text: "ऊपरजाना", correct: false },
            { text: "अवरोह", correct: true },
            { text: "उच्च", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आरोह का अर्थ है ऊपर की ओर जाना या चढ़ना।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि अवरोह का अर्थ है नीचे की ओर आना या उतरना।"
    },
    {
        question: "प्रश्न 28. 'आचार' का विपरीतार्थक शब्द क्या है?",
        answers: shuffle([
            { text: "व्यवहार", correct: false },
            { text: "चरित्र", correct: false },
            { text: "अनाचार", correct: true },
            { text: "सदाचार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आचार का अर्थ है अच्छा व्यवहार या चाल-चलन।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि अनाचार का अर्थ है बुरा व्यवहार या दुराचार।"
    },
    {
        question: "प्रश्न 29. 'आश्रित' का विलोम शब्द है:",
        answers: shuffle([
            { text: "निर्भर", correct: false },
            { text: "आधारित", correct: false },
            { text: "निराश्रित", correct: true },
            { text: "पराश्रित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आश्रित का अर्थ है किसी के सहारे रहने वाला।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि निराश्रित का अर्थ है बिना किसी सहारे के रहने वाला।"
    },
    {
        question: "प्रश्न 30. 'आधुनिक' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "नवीन", correct: false },
            { text: "नया", correct: false },
            { text: "प्राचीन", correct: true },
            { text: "अर्वाचीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आधुनिक का अर्थ है नए समय का।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि प्राचीन का अर्थ है पुराने समय का।"
    },
    {
        question: "प्रश्न 31. 'आर्द्र' का विलोम शब्द है:",
        answers: shuffle([
            { text: "गीला", correct: false },
            { text: "नम", correct: false },
            { text: "शुष्क", correct: true },
            { text: "तरल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आर्द्र का अर्थ है नमीयुक्त या गीला।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि शुष्क का अर्थ है सूखा।"
    },
    {
        question: "प्रश्न 32. 'सगुण' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "गुणवान", correct: false },
            { text: "निर्गुण", correct: true },
            { text: "गुणी", correct: false },
            { text: "सदगुण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सगुण का अर्थ है गुणों से युक्त।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि निर्गुण का अर्थ है गुणों से रहित।"
    },
    {
        question: "प्रश्न 33. 'सम्मुख' का विलोम शब्द है:",
        answers: shuffle([
            { text: "सामने", correct: false },
            { text: "प्रत्यक्ष", correct: false },
            { text: "विमुख", correct: true },
            { text: "उन्मुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सम्मुख का अर्थ है सामने या मुख की ओर।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि विमुख का अर्थ है मुँह फेर लेना या विपरीत दिशा में।"
    },
    {
        question: "प्रश्न 34. 'पक्ष' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "समर्थन", correct: false },
            { text: "तरफ", correct: false },
            { text: "विपक्ष", correct: true },
            { text: "सहाय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पक्ष का अर्थ है किसी का समर्थन या तरफदारी करना।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि विपक्ष का अर्थ है विरोध करना।"
    },
    {
        question: "प्रश्न 35. 'संयोग' का विपरीतार्थक शब्द है:",
        answers: shuffle([
            { text: "मिलन", correct: false },
            { text: "मेल", correct: false },
            { text: "योग", correct: false },
            { text: "वियोग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संयोग का अर्थ है मिलन या साथ होना।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि वियोग का अर्थ है बिछड़ना या अलग होना।"
    },
    {
        question: "प्रश्न 36. 'सृष्टि' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "रचना", correct: false },
            { text: "निर्माण", correct: false },
            { text: "प्रलय", correct: true },
            { text: "संसार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सृष्टि का अर्थ है रचना या निर्माण।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि प्रलय का अर्थ है विनाश या संहार।"
    },
    {
        question: "प्रश्न 37. 'सूक्ष्म' का विलोम शब्द है:",
        answers: shuffle([
            { text: "छोटा", correct: false },
            { text: "बारीक", correct: false },
            { text: "स्थूल", correct: true },
            { text: "पतला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूक्ष्म का अर्थ है बहुत छोटा या बारीक।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि स्थूल का अर्थ है बड़ा या मोटा।"
    },
    {
        question: "प्रश्न 38. 'सुगम' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "सरल", correct: false },
            { text: "आसान", correct: false },
            { text: "दुर्गम", correct: true },
            { text: "सहज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुगम का अर्थ है जहाँ आसानी से पहुँचा जा सके।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि दुर्गम का अर्थ है जहाँ पहुँचना कठिन हो।"
    },
    {
        question: "प्रश्न 39. 'ह्रास' का विलोम शब्द है:",
        answers: shuffle([
            { text: "कमी", correct: false },
            { text: "क्षय", correct: false },
            { text: "गिरावट", correct: false },
            { text: "वृद्धि", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्रास का अर्थ है कमी या गिरावट।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि वृद्धि का अर्थ है बढ़ोतरी या विकास।"
    },
    {
        question: "प्रश्न 40. 'क्षणिक' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "अल्पकालिक", correct: false },
            { text: "नश्वर", correct: false },
            { text: "शाश्वत", correct: true },
            { text: "अस्थायी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्षणिक का अर्थ है जो कुछ क्षणों के लिए हो।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि शाश्वत का अर्थ है जो हमेशा बना रहे।"
    },
    {
        question: "प्रश्न 41. 'कृतज्ञ' का विलोम शब्द है:",
        answers: shuffle([
            { text: "आभारी", correct: false },
            { text: "उपकारी", correct: false },
            { text: "कृतघ्न", correct: true },
            { text: "अनुगृहीत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृतज्ञ वह होता है जो किए हुए उपकार को मानता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि कृतघ्न वह होता है जो किए हुए उपकार को नहीं मानता।"
    },
    {
        question: "प्रश्न 42. 'क्रूर' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "निर्दयी", correct: false },
            { text: "कठोर", correct: false },
            { text: "दयालु", correct: true },
            { text: "निष्ठुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रूर का अर्थ है निर्दयी।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि दयालु का अर्थ है दया करने वाला।"
    },
    {
        question: "प्रश्न 43. 'कनिष्ठ' का विलोम शब्द है:",
        answers: shuffle([
            { text: "छोटा", correct: false },
            { text: "अनुज", correct: false },
            { text: "ज्येष्ठ", correct: true },
            { text: "लघु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कनिष्ठ का अर्थ है पद या उम्र में छोटा।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि ज्येष्ठ का अर्थ है पद या उम्र में बड़ा।"
    },
    {
        question: "प्रश्न 44. 'गुप्त' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "छिपाहुआ", correct: false },
            { text: "रहस्य", correct: false },
            { text: "प्रकट", correct: true },
            { text: "गोपनीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त का अर्थ है छिपा हुआ।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि प्रकट का अर्थ है जो सामने हो या ज़ाहिर हो।"
    },
    {
        question: "प्रश्न 45. 'गौरव' का विलोम शब्द है:",
        answers: shuffle([
            { text: "सम्मान", correct: false },
            { text: "महिमा", correct: false },
            { text: "लाघव", correct: true },
            { text: "बड़प्पन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौरव का अर्थ है बड़प्पन या भारीपन।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि लाघव का अर्थ है लघुता या हल्कापन।"
    },
    {
        question: "प्रश्न 46. 'गरल' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "विष", correct: false },
            { text: "हलाहल", correct: false },
            { text: "सुधा", correct: true },
            { text: "ज़हर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गरल का अर्थ विष या ज़हर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि सुधा का अर्थ अमृत होता है।"
    },
    {
        question: "प्रश्न 47. 'गृहस्थ' का विलोम शब्द है:",
        answers: shuffle([
            { text: "पारिवारिक", correct: false },
            { text: "संसारी", correct: false },
            { text: "संन्यासी", correct: true },
            { text: "वैरागी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गृहस्थ वह है जो परिवार के साथ रहता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि संन्यासी वह है जो संसार को त्याग देता है।"
    },
    {
        question: "प्रश्न 48. 'छली' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "कपटी", correct: false },
            { text: "धोखेबाज़", correct: false },
            { text: "निश्चल", correct: true },
            { text: "धूर्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> छली का अर्थ है छल-कपट करने वाला।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि निश्चल का अर्थ है जिसमें कोई छल न हो।"
    },
    {
        question: "प्रश्न 49. 'जड़' का विलोम शब्द है:",
        answers: shuffle([
            { text: "अचेतन", correct: false },
            { text: "निर्जीव", correct: false },
            { text: "चेतन", correct: true },
            { text: "स्थिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जड़ का अर्थ है जिसमें चेतना या गति न हो।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि चेतन का अर्थ है जिसमें चेतना या प्राण हो।"
    },
    {
        question: "प्रश्न 50. 'जटिल' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "कठिन", correct: false },
            { text: "मुश्किल", correct: false },
            { text: "पेचीदा", correct: false },
            { text: "सरल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जटिल का अर्थ है उलझा हुआ या कठिन।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि सरल का अर्थ है आसान या सीधा।"
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