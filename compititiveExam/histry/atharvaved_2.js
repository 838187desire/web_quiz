const questions = [
    {
        topHeading: "अथर्ववेद पर आधारित बहुविकल्पीय प्रश्न part 2 (quiz_no.56)"
    },
    {
        question: "अथर्ववेद का ‘गोपथ ब्राह्मण’ किस प्रकार का ग्रंथ है?",
        answers: shuffle([
            { text: "उपनिषद", correct: false },
            { text: "ब्राह्मण ग्रंथ", correct: true },
            { text: "संहिता", correct: false },
            { text: "इतिहास ग्रंथ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोपथ ब्राह्मण अथर्ववेद का एकमात्र ब्राह्मण ग्रंथ है, जो वेद की शिक्षाओं और संस्कारों की व्याख्या करता है।"
    },
    {
        question: "अथर्ववेद में ‘काल’ का किस काण्ड में वर्णन है?",
        answers: shuffle([
            { text: "15वाँ", correct: false },
            { text: "16वाँ", correct: false },
            { text: "19वाँ", correct: true },
            { text: "20वाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 19वें काण्ड में ‘काल सूक्त’ है, जिसमें काल को सर्वोच्च शक्ति के रूप में वर्णित किया गया है।"
    },
    {
        question: "अथर्ववेद में ‘श्याम अयस’ से क्या तात्पर्य है?",
        answers: shuffle([
            { text: "सोना", correct: false },
            { text: "चाँदी", correct: false },
            { text: "तांबा", correct: false },
            { text: "लोहा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्याम अयस का अर्थ काला धातु यानी लोहा है, जिसका उल्लेख अथर्ववेद में मिलता है।"
    },
    {
        question: "अथर्ववेद में ‘सभा’ और ‘समिति’ का मुख्य कार्य क्या था?",
        answers: shuffle([
            { text: "धार्मिक अनुष्ठान", correct: false },
            { text: "राजा की शक्ति को नियंत्रित करना", correct: true },
            { text: "शत्रु वध", correct: false },
            { text: "औषधि बनाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये संस्थाएँ राजा के शासन पर नियंत्रण रखती थीं और शासन में लोकतांत्रिक भूमिका निभाती थीं।"
    },
    {
        question: "अथर्ववेद में ‘मुण्डक उपनिषद’ का विषय क्या है?",
        answers: shuffle([
            { text: "लौकिक ज्ञान", correct: false },
            { text: "आध्यात्मिक ज्ञान", correct: true },
            { text: "चिकित्सा विज्ञान", correct: false },
            { text: "युद्ध नीति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुण्डक उपनिषद में ‘परा विद्या’ अर्थात परम ज्ञान का वर्णन है।"
    },
    {
        question: "अथर्ववेद की प्रमुख शाखाएं कौन-कौन सी हैं?",
        answers: shuffle([
            { text: "पैप्पलाद और शौनक", correct: true },
            { text: "मुण्डक और माण्डूक्य", correct: false },
            { text: "ऋग्वेद और सामवेद", correct: false },
            { text: "शौनक और अंगिरस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये दो प्रमुख शाखाएं आज भी उपलब्ध हैं।"
    },
    {
        question: "अथर्ववेद में ‘भैषज्य वेद’ किसे कहा जाता है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "यजुर्वेद", correct: false },
            { text: "सामवेद", correct: false },
            { text: "अथर्ववेद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अथर्ववेद में औषधि और रोग निवारण के मंत्र हैं, इसलिए इसे भैषज्य वेद कहा जाता है।"
    },
    {
        question: "अथर्ववेद में ‘पुरोहित’ किस प्रकार की शक्ति का धारक माना गया है?",
        answers: shuffle([
            { text: "धार्मिक और जादुई दोनों", correct: true },
            { text: "केवल धार्मिक", correct: false },
            { text: "केवल राजनीतिक", correct: false },
            { text: "आर्थिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरोहित यज्ञ का निरीक्षक और जादू मंत्रों का ज्ञाता होता था।"
    },
    {
        question: "अथर्ववेद में ‘अभिचार’ मंत्रों का मुख्य उद्देश्य क्या था?",
        answers: shuffle([
            { text: "शत्रुओं को नष्ट करना", correct: true },
            { text: "रोगों का इलाज", correct: false },
            { text: "कृषि वृद्धि", correct: false },
            { text: "विवाह संस्कार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अभिचार मंत्र शत्रुओं को हानि पहुँचाने के लिए प्रयोग होते थे।"
    },
    {
        question: "अथर्ववेद के कितने काण्ड हैं?",
        answers: shuffle([
            { text: "15", correct: false },
            { text: "18", correct: false },
            { text: "20", correct: true },
            { text: "22", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अथर्ववेद को 20 काण्डों में विभाजित किया गया है।"
    },
    {
        question: "अथर्ववेद में ‘विवाह’ से संबंधित मंत्र किस काण्ड में हैं?",
        answers: shuffle([
            { text: "11वाँ", correct: false },
            { text: "12वाँ", correct: false },
            { text: "14वाँ", correct: true },
            { text: "16वाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 14वें काण्ड को विवाह काण्ड कहा जाता है।"
    },
    {
        question: "अथर्ववेद में ‘रोग’ को किस प्रकार देखा गया है?",
        answers: shuffle([
            { text: "केवल प्राकृतिक", correct: false },
            { text: "केवल दैवीय", correct: false },
            { text: "प्राकृतिक और जादुई दोनों", correct: true },
            { text: "केवल सामाजिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रोगों का उपचार औषधि और मंत्रों से दोनों तरह से किया जाता था।"
    },
    {
        question: "अथर्ववेद में ‘मंत्र’ किसके द्वारा प्राप्त होते थे?",
        answers: shuffle([
            { text: "राजा", correct: false },
            { text: "ऋषि", correct: true },
            { text: "योद्धा", correct: false },
            { text: "पुरोहित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋषि तपस्या और ध्यान से मंत्र प्राप्त करते थे।"
    },
    {
        question: "अथर्ववेद में ‘ॐ’ का क्या अर्थ है?",
        answers: shuffle([
            { text: "ईश्वर का नाम", correct: false },
            { text: "परम ब्रह्म का प्रतीक", correct: true },
            { text: "मंत्र की शुरुआत", correct: false },
            { text: "जादू की शक्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माण्डूक्य उपनिषद में ‘ॐ’ को परम ब्रह्म के रूप में वर्णित किया गया है।"
    },
    {
        question: "अथर्ववेद में ‘गृहस्थ जीवन’ को किस रूप में दर्शाया गया है?",
        answers: shuffle([
            { text: "कलंक", correct: false },
            { text: "समस्याओं का केंद्र", correct: false },
            { text: "कल्याण का स्रोत", correct: true },
            { text: "त्याग का जीवन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गृहस्थ जीवन स्वास्थ्य, धन और सुरक्षा से जुड़ा माना गया है।"
    },
    {
        question: "अथर्ववेद की भाषा कौन-सी है?",
        answers: shuffle([
            { text: "प्राकृत", correct: false },
            { text: "संस्कृत", correct: true },
            { text: "पाली", correct: false },
            { text: "तमिल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अथर्ववेद संस्कृत भाषा में लिखा गया है।"
    },
    {
        question: "अथर्ववेद के कौन-से ऋषि को जादू मंत्रों का प्रणेता माना जाता है?",
        answers: shuffle([
            { text: "वाल्मीकि", correct: false },
            { text: "अंगिरस", correct: true },
            { text: "विश्वामित्र", correct: false },
            { text: "वशिष्ठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंगिरस ऋषि को जादू मंत्रों का प्रणेता माना गया है।"
    },
    {
        question: "अथर्ववेद का कौन-सा काण्ड ‘काल सूक्त’ के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "10वाँ", correct: false },
            { text: "15वाँ", correct: false },
            { text: "19वाँ", correct: true },
            { text: "20वाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 19वें काण्ड में काल की महिमा का वर्णन है।"
    },
    {
        question: "अथर्ववेद में ‘शांति पाठ’ क्यों किया जाता है?",
        answers: shuffle([
            { text: "यज्ञ के लिए", correct: false },
            { text: "समाज में शांति के लिए", correct: true },
            { text: "युद्ध के लिए", correct: false },
            { text: "कृषि के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शांति पाठ से समृद्धि और शांति की कामना की जाती है।"
    },
    {
        question: "अथर्ववेद का ‘पैप्पलाद’ शाखा किस क्षेत्र में प्रमुख थी?",
        answers: shuffle([
            { text: "दक्षिण भारत", correct: true },
            { text: "उत्तर भारत", correct: false },
            { text: "पूर्व भारत", correct: false },
            { text: "पश्चिम भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पैप्पलाद शाखा दक्षिण भारत में प्रचलित थी।"
    },
    {
        question: "अथर्ववेद में ‘अग्नि’ का क्या महत्व है?",
        answers: shuffle([
            { text: "केवल देवता", correct: false },
            { text: "यज्ञ के केंद्र", correct: true },
            { text: "केवल प्रतीक", correct: false },
            { text: "जल का देवता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अग्नि यज्ञ के प्रमुख देवता और केंद्र है।"
    },
    {
        question: "अथर्ववेद में ‘अर्थ’ शब्द का अर्थ क्या है?",
        answers: shuffle([
            { text: "धन", correct: true },
            { text: "ज्ञान", correct: false },
            { text: "शक्ति", correct: false },
            { text: "युद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अर्थ का अर्थ धन या संपत्ति होता है।"
    },
    {
        question: "अथर्ववेद में ‘अधिकार’ शब्द किस संदर्भ में आता है?",
        answers: shuffle([
            { text: "धार्मिक अधिकार", correct: false },
            { text: "राजनीतिक अधिकार", correct: true },
            { text: "सामाजिक अधिकार", correct: false },
            { text: "आर्थिक अधिकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सभा और समिति द्वारा राजा के अधिकारों का नियंत्रण होता था।"
    },
    {
        question: "अथर्ववेद में ‘शत्रु नाश’ के लिए कौन से मंत्र प्रयोग किए जाते थे?",
        answers: shuffle([
            { text: "स्तुति मंत्र", correct: false },
            { text: "अभिचार मंत्र", correct: true },
            { text: "शांति मंत्र", correct: false },
            { text: "विवाह मंत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अभिचार मंत्रों का प्रयोग शत्रु नाश के लिए होता था।"
    },
    {
        question: "अथर्ववेद में ‘नमस्ते’ का क्या महत्व है?",
        answers: shuffle([
            { text: "अभिवादन", correct: true },
            { text: "युद्ध घोष", correct: false },
            { text: "धार्मिक अनुष्ठान", correct: false },
            { text: "शिक्षा का प्रारंभ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नमस्ते संस्कृत शब्द है जिसका अर्थ है ‘मैं तुम्हें प्रणाम करता हूँ’।"
    },
    {
        question: "अथर्ववेद में ‘अग्निहोत्र’ का क्या महत्व है?",
        answers: shuffle([
            { text: "शत्रु वध", correct: false },
            { text: "विवाह संस्कार", correct: false },
            { text: "यज्ञ का प्रकार", correct: true },
            { text: "कृषि का अनुष्ठान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अग्निहोत्र एक प्रकार का यज्ञ है जो अग्नि को समर्पित किया जाता है।"
    },
    {
        question: "अथर्ववेद में ‘उपवास’ का क्या उद्देश्य था?",
        answers: shuffle([
            { text: "धन संग्रह", correct: false },
            { text: "युद्ध की तैयारी", correct: false },
            { text: "पाप से मुक्ति", correct: true },
            { text: "रोग निवारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उपवास को शरीर और मन की शुद्धि के लिए माना गया है।"
    },
    {
        question: "अथर्ववेद में ‘सप्तर्षि’ किसे कहा जाता है?",
        answers: shuffle([
            { text: "सात यज्ञ", correct: false },
            { text: "सात नदियाँ", correct: false },
            { text: "सात ऋषि", correct: true },
            { text: "सप्त देवता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सप्तर्षि वे सात महान ऋषि हैं जिनकी भूमिका वेदों के निर्माण में मानी जाती है।"
    },
    {
        question: "अथर्ववेद में ‘धूप’ का क्या महत्व है?",
        answers: shuffle([
            { text: "धन अर्जन", correct: false },
            { text: "भोजन का भाग", correct: false },
            { text: "पूजा में प्रयोग", correct: true },
            { text: "शत्रु वध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धूप से वातावरण शुद्ध होता है और देवताओं की पूजा होती है।"
    },
    {
        question: "अथर्ववेद में ‘शमक’ मंत्र किसके लिए होते हैं?",
        answers: shuffle([
            { text: "विवाह के लिए", correct: false },
            { text: "भूमि की उपज बढ़ाना", correct: false },
            { text: "रोगों का इलाज", correct: true },
            { text: "शत्रु नाश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शमक मंत्र रोगों को शांत करने और दूर करने के लिए होते हैं।"
    },
    {
        question: "अथर्ववेद में ‘प्रश्न उपनिषद’ किस विषय पर केंद्रित है?",
        answers: shuffle([
            { text: "चिकित्सा", correct: false },
            { text: "सामाजिक नियम", correct: false },
            { text: "ब्रह्म ज्ञान", correct: true },
            { text: "यज्ञ विधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रश्न उपनिषद में ब्रह्म और जीवन के रहस्यों पर चर्चा है।"
    },
    {
        question: "अथर्ववेद के किस काण्ड में ‘पृथ्वी सूक्त’ है?",
        answers: shuffle([
            { text: "18वाँ", correct: false },
            { text: "15वाँ", correct: false },
            { text: "12वाँ", correct: true },
            { text: "10वाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 12वें काण्ड में पृथ्वी सूक्त है, जो भूमि को माता के रूप में दर्शाता है।"
    },
    {
        question: "अथर्ववेद में ‘यज्ञ’ का क्या महत्व है?",
        answers: shuffle([
            { text: "कृषि के लिए", correct: false },
            { text: "व्यापार के लिए", correct: false },
            { text: "देवताओं की पूजा के लिए", correct: true },
            { text: "युद्ध के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यज्ञ देवताओं को प्रसन्न करने और आशीर्वाद प्राप्त करने का माध्यम है।"
    },
    {
        question: "अथर्ववेद में ‘ब्राह्मण’ शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "राजा", correct: false },
            { text: "योद्धा", correct: false },
            { text: "ज्ञान का धनी", correct: true },
            { text: "यज्ञ करने वाला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्राह्मण वे व्यक्ति होते हैं जो वेदों का ज्ञान रखते हैं।"
    },
    {
        question: "अथर्ववेद के ‘मुण्डक उपनिषद’ में ‘तुरीय’ किसका संकेत है?",
        answers: shuffle([
            { text: "परम चेतना", correct: true },
            { text: "गुप्त अवस्था", correct: false },
            { text: "स्वप्न अवस्था", correct: false },
            { text: "जाग्रत अवस्था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तुरीय चेतना का चौथा स्तर है, जो परम ब्रह्म का अनुभव है।"
    },
    {
        question: "अथर्ववेद में ‘आयुर्वेद’ का संबंध किससे है?",
        answers: shuffle([
            { text: "यज्ञ", correct: false },
            { text: "शिक्षा", correct: false },
            { text: "युद्ध", correct: false },
            { text: "चिकित्सा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आयुर्वेद, अथर्ववेद से उत्पन्न चिकित्साशास्त्र है।"
    },
    {
        question: "अथर्ववेद में ‘प्राण’ शब्द का क्या महत्व है?",
        answers: shuffle([
            { text: "अर्थशास्त्र", correct: false },
            { text: "युद्ध कला", correct: false },
            { text: "जीवन शक्ति", correct: true },
            { text: "ज्ञान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्राण शरीर में जीवंत ऊर्जा का स्रोत है।"
    },
    {
        question: "अथर्ववेद में ‘विवाह संस्कार’ का वर्णन किस रूप में है?",
        answers: shuffle([
            { text: "सभी उपर्युक्त", correct: true },
            { text: "परिवार की स्थापना", correct: false },
            { text: "सामाजिक नियम", correct: false },
            { text: "धार्मिक अनुष्ठान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विवाह संस्कार धार्मिक, सामाजिक और पारिवारिक दायित्वों का समागम है।"
    },
    {
        question: "अथर्ववेद में ‘जप’ का क्या महत्व है?",
        answers: shuffle([
            { text: "धन संग्रह", correct: false },
            { text: "कृषि विधि", correct: false },
            { text: "युद्ध कौशल", correct: false },
            { text: "मंत्रों का उच्चारण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जप से मंत्रों का निरंतर उच्चारण होता है, जिससे शक्ति प्राप्त होती है।"
    },
    {
        question: "अथर्ववेद के किस भाग में ‘धनुर्वेद’ का उल्लेख है?",
        answers: shuffle([
            { text: "छंद", correct: false },
            { text: "उपनिषद", correct: false },
            { text: "ब्राह्मण", correct: false },
            { text: "संहिता", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धनुर्वेद यानि युद्धकला का उल्लेख अथर्ववेद संहिता में मिलता है।"
    },
    {
        question: "अथर्ववेद के अनुसार ‘सभा’ का क्या कार्य था?",
        answers: shuffle([
            { text: "शिक्षा देना", correct: false },
            { text: "धार्मिक अनुष्ठान", correct: false },
            { text: "राजकीय निर्णय लेना", correct: true },
            { text: "यज्ञ करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सभा राजनीतिक और न्यायिक कार्यों के लिए थी।"
    },
    {
        question: "अथर्ववेद में ‘समिति’ किस प्रकार की संस्था थी?",
        answers: shuffle([
            { text: "सैन्य", correct: false },
            { text: "व्यापारिक", correct: false },
            { text: "राजनीतिक", correct: true },
            { text: "धार्मिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समिति राजा के कार्यों पर नियंत्रण करती थी।"
    },
    {
        question: "अथर्ववेद में ‘शांति मंत्र’ का उद्देश्य क्या था?",
        answers: shuffle([
            { text: "विवाह के लिए", correct: false },
            { text: "धन अर्जन के लिए", correct: false },
            { text: "समाज में शांति के लिए", correct: true },
            { text: "युद्ध के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शांति मंत्र से सामाजिक और पारिवारिक शांति की कामना की जाती है।"
    },
    {
        question: "अथर्ववेद में ‘ऋषि पिप्पलाद’ किसके गुरु थे?",
        answers: shuffle([
            { text: "7 शिष्य", correct: false },
            { text: "6 शिष्य", correct: true },
            { text: "5 शिष्य", correct: false },
            { text: "4 शिष्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रश्न उपनिषद में ऋषि पिप्पलाद के 6 शिष्यों का उल्लेख है।"
    },
    {
        question: "अथर्ववेद में ‘नमस्ते’ का क्या महत्व है?",
        answers: shuffle([
            { text: "शिक्षा का प्रारंभ", correct: false },
            { text: "धार्मिक अनुष्ठान", correct: false },
            { text: "युद्ध घोष", correct: false },
            { text: "अभिवादन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नमस्ते संस्कृत शब्द है जिसका अर्थ है ‘मैं तुम्हें प्रणाम करता हूँ’।"
    },
    {
        question: "अथर्ववेद में ‘शत्रु नाश’ के लिए कौन-से मंत्र प्रमुख हैं?",
        answers: shuffle([
            { text: "विवाह मंत्र", correct: false },
            { text: "शांति मंत्र", correct: false },
            { text: "अभिचार मंत्र", correct: true },
            { text: "स्तुति मंत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अभिचार मंत्रों का प्रयोग शत्रु नाश के लिए किया जाता था।"
    },
    {
        question: "अथर्ववेद में ‘अथर्वन्’ और ‘अंगिरस’ किसके नाम हैं?",
        answers: shuffle([
            { text: "मंत्र", correct: false },
            { text: "यज्ञ", correct: false },
            { text: "ऋषि", correct: true },
            { text: "देवता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अथर्ववेद का नाम ‘अथर्वांगिरस’ ऋषि परंपराओं से पड़ा है।"
    },
    {
        question: "अथर्ववेद में ‘भूत-प्रेत’ से निवारण के लिए क्या प्रयोग होता था?",
        answers: shuffle([
            { text: "युद्ध", correct: false },
            { text: "पूजा", correct: false },
            { text: "औषधि", correct: false },
            { text: "जादू मंत्र", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भूत-प्रेत के निवारण के लिए जादू मंत्रों का प्रयोग होता था।"
    },
    {
        question: "अथर्ववेद में ‘सप्त मन्त्र’ किसके लिए उपयोग होते थे?",
        answers: shuffle([
            { text: "औषधि", correct: false },
            { text: "शुभकामना", correct: true },
            { text: "रक्षा", correct: false },
            { text: "यज्ञ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सप्त मन्त्र शुभकामना और सौभाग्य के लिए उपयोग होते थे।"
    },
    {
        question: "अथर्ववेद में ‘शौनक’ शाखा का प्रचलन अधिक कहाँ था?",
        answers: shuffle([
            { text: "पश्चिम भारत", correct: false },
            { text: "उत्तर भारत", correct: true },
            { text: "पूर्व भारत", correct: false },
            { text: "दक्षिण भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शौनक शाखा उत्तर भारत में अधिक प्रचलित थी।"
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