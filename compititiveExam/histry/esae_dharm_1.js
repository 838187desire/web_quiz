const questions = [
    {
        topHeading: "ईसाई धर्म पर आधारित बहुविकल्पी प्रश्न part 1 (quiz_no.41)"
    },
    {
        question: "ईसाई धर्म के संस्थापक कौन हैं?",
        answers: shuffle([
            { text: "पैगंबर मुहम्मद", correct: false },
            { text: "पैगंबर मूसा", correct: false },
            { text: "जीसस क्राइस्ट", correct: true },
            { text: "गौतम बुद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीसस क्राइस्ट ईसाई धर्म के संस्थापक और केंद्रीय व्यक्ति हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ईसा मसीह के जीवन और उपदेशों पर ही यह धर्म आधारित है।"
    },
    {
        question: "ईसाई धर्म का सबसे पवित्र ग्रंथ कौन-सा है?",
        answers: shuffle([
            { text: "कुरान", correct: false },
            { text: "बाइबिल", correct: true },
            { text: "तोराह", correct: false },
            { text: "अवेस्ता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल ईसाई धर्म का पवित्र ग्रंथ है, जिसे दो मुख्य भागों में विभाजित किया गया है: पुराना नियम (Old Testament) और नया नियम (New Testament)।"
    },
    {
        question: "जीसस क्राइस्ट का जन्म कहाँ हुआ था?",
        answers: shuffle([
            { text: "यरूशलेम", correct: false },
            { text: "नासरत", correct: false },
            { text: "बेथलहम", correct: true },
            { text: "रोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल के अनुसार, जीसस का जन्म यहूदिया के एक छोटे से गाँव बेथलहम में हुआ था।"
    },
    {
        question: "ईसाई धर्म का प्राथमिक और सबसे महत्वपूर्ण प्रतीक क्या है?",
        answers: shuffle([
            { text: "मछली", correct: false },
            { text: "क्रॉस (क्रूस)", correct: true },
            { text: "कबूतर", correct: false },
            { text: "मेमना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रॉस ईसाई धर्म का सबसे प्रसिद्ध प्रतीक है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह जीसस की मृत्यु और पुनरुत्थान को दर्शाता है, जो पापों से मुक्ति का प्रतीक है।"
    },
    {
        question: "बाइबिल के अनुसार, जीसस क्राइस्ट को किसने सूली पर चढ़ाया था?",
        answers: shuffle([
            { text: "यहूदी नेता", correct: false },
            { text: "रोमन गवर्नर पोंटियस पाइलेट", correct: true },
            { text: "राजा हेरोदेस", correct: false },
            { text: "सिकंदर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल में यह वर्णित है कि रोमन गवर्नर पोंटियस पाइलेट के आदेश पर जीसस को सूली पर चढ़ाया गया था।"
    },
    {
        question: "ईसाई धर्म की 'होली ट्रिनिटी' (पवित्र त्रिमूर्ति) में कौन-सी तीन इकाइयाँ शामिल हैं?",
        answers: shuffle([
            { text: "जीसस, मरियम, जोसेफ", correct: false },
            { text: "पिता, पुत्र, पवित्र आत्मा", correct: true },
            { text: "संत पीटर, संत पॉल, संत जॉन", correct: false },
            { text: "विश्वास, आशा, प्रेम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> होली ट्रिनिटी ईसाई धर्म का एक केंद्रीय सिद्धांत है, जिसमें एक ही ईश्वर तीन रूपों में विद्यमान है: ईश्वर पिता (सृष्टि का निर्माता), ईश्वर पुत्र (जीसस क्राइस्ट), और ईश्वर पवित्र आत्मा (ईश्वरीय उपस्थिति)।"
    },
    {
        question: "बाइबिल में 'पुराना नियम' (Old Testament) मुख्य रूप से किस भाषा में लिखा गया था?",
        answers: shuffle([
            { text: "ग्रीक", correct: false },
            { text: "लैटिन", correct: false },
            { text: "हिब्रू", correct: true },
            { text: "अरामी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल के पुराने नियम का अधिकांश भाग मूल रूप से हिब्रू भाषा में लिखा गया था।"
    },
    {
        question: "बाइबिल में 'नया नियम' (New Testament) मुख्य रूप से किस भाषा में लिखा गया था?",
        answers: shuffle([
            { text: "हिब्रू", correct: false },
            { text: "अरामी", correct: false },
            { text: "कोइन ग्रीक", correct: true },
            { text: "लैटिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल के नए नियम की अधिकांश पुस्तकें कोइन ग्रीक नामक प्राचीन यूनानी भाषा में लिखी गई थीं।"
    },
    {
        question: "जीसस के कितने मुख्य शिष्य (Apostles) थे?",
        answers: shuffle([
            { text: "7", correct: false },
            { text: "10", correct: false },
            { text: "12", correct: true },
            { text: "15", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल के अनुसार, जीसस ने अपने उपदेशों के प्रचार के लिए 12 मुख्य शिष्यों का चयन किया था, जिन्हें 'प्रेरित' या 'Apostles' कहा जाता है।"
    },
    {
        question: "'लास्ट सपर' (अंतिम भोज) किस घटना को संदर्भित करता है?",
        answers: shuffle([
            { text: "जीसस के पुनरुत्थान का भोज", correct: false },
            { text: "जीसस का अंतिम भोजन अपने शिष्यों के साथ", correct: true },
            { text: "जीसस के जन्म का भोज", correct: false },
            { text: "जीसस के स्वर्गारोहण का भोज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लास्ट सपर वह अंतिम भोजन था जो जीसस ने अपनी गिरफ्तारी और सूली पर चढ़ाए जाने से पहले अपने शिष्यों के साथ किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी घटना से 'युकेरिस्ट' नामक संस्कार की शुरुआत हुई।"
    },
    {
        question: "जीसस के पुनरुत्थान के उपलक्ष्य में कौन-सा त्योहार मनाया जाता है?",
        answers: shuffle([
            { text: "क्रिसमस", correct: false },
            { text: "गुड फ्राइडे", correct: false },
            { text: "ईस्टर", correct: true },
            { text: "पेंटेकोस्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ईस्टर ईसाई धर्म का सबसे महत्वपूर्ण त्योहार है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह जीसस के सूली पर चढ़ने के तीन दिन बाद उनके पुनरुत्थान का जश्न मनाता है।"
    },
    {
        question: "जीसस के सूली पर चढ़ाए जाने के दिन को किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "ईस्टर", correct: false },
            { text: "गुड फ्राइडे", correct: true },
            { text: "क्रिसमस", correct: false },
            { text: "लेंट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुड फ्राइडे उस दिन को याद करने के लिए मनाया जाता है जब जीसस को सूली पर चढ़ाया गया था।"
    },
    {
        question: "बाइबिल के किस भाग में जीसस के जीवन और उपदेशों का वर्णन है?",
        answers: shuffle([
            { text: "पुराना नियम", correct: false },
            { text: "नया नियम", correct: true },
            { text: "तोराह", correct: false },
            { text: "कुरान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल के नए नियम में जीसस के जन्म, जीवन, उपदेशों, मृत्यु और पुनरुत्थान की कहानियाँ और उनके शिष्यों के कार्य शामिल हैं।"
    },
    {
        question: "जीसस को सूली पर चढ़ाने के लिए किस स्थान का उल्लेख किया जाता है?",
        answers: shuffle([
            { text: "माउंट सिनाई", correct: false },
            { text: "जैतून का पहाड़", correct: false },
            { text: "माउंट गोल्गोथा (कलवरी)", correct: true },
            { text: "माउंट ऑफ टेम्पटेशन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल के अनुसार, जीसस को यरूशलेम के बाहर, गोल्गोथा नामक एक पहाड़ी पर सूली पर चढ़ाया गया था, जिसे कलवरी भी कहा जाता है।"
    },
    {
        question: "जीसस की माँ का नाम क्या था?",
        answers: shuffle([
            { text: "मरियम मगदलीनी", correct: false },
            { text: "मरियम", correct: true },
            { text: "मरथा", correct: false },
            { text: "सारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मरियम (Mary) जीसस की माँ थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> ईसाई धर्म में उन्हें 'वर्जिन मरियम' के रूप में सम्मानित किया जाता है।"
    },
    {
        question: "जीसस के जन्म का उत्सव किस दिन मनाया जाता है?",
        answers: shuffle([
            { text: "25 दिसंबर", correct: true },
            { text: "21 मार्च", correct: false },
            { text: "14 फरवरी", correct: false },
            { text: "1 जनवरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीसस के जन्मदिन को क्रिसमस के रूप में 25 दिसंबर को मनाया जाता है।"
    },
    {
        question: "बाइबिल की पहली पुस्तक का नाम क्या है?",
        answers: shuffle([
            { text: "निर्गमन (Exodus)", correct: false },
            { text: "लैव्यव्यवस्था (Leviticus)", correct: false },
            { text: "उत्पत्ति (Genesis)", correct: true },
            { text: "भजन संहिता (Psalms)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्पत्ति (Genesis) बाइबिल की पहली पुस्तक है, जिसमें सृष्टि के निर्माण की कहानी, आदम और हव्वा, और प्राचीन पैगंबरों के बारे में बताया गया है।"
    },
    {
        question: "ईसाई धर्म में 'बाप्तिस्मा' (Baptism) क्या है?",
        answers: shuffle([
            { text: "शादी का एक समारोह", correct: false },
            { text: "धार्मिक दीक्षा और शुद्धिकरण का एक संस्कार", correct: true },
            { text: "मृत्यु का एक संस्कार", correct: false },
            { text: "एक प्रकार का उपवास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाप्तिस्मा ईसाई धर्म में एक महत्वपूर्ण संस्कार है, जिसमें पानी का उपयोग करके व्यक्ति को पापों से शुद्ध किया जाता है और उसे ईसाई समुदाय में शामिल किया जाता है।"
    },
    {
        question: "कौन-सा रोमन सम्राट ईसाई धर्म के महान उत्पीड़न के लिए जाना जाता है?",
        answers: shuffle([
            { text: "ऑगस्टस", correct: false },
            { text: "नीरो", correct: false },
            { text: "डायोक्लेशियन", correct: true },
            { text: "कॉमोडस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डायोक्लेशियन (284-305 ईस्वी) के शासनकाल को ईसाई धर्म के सबसे भयंकर उत्पीड़न में से एक माना जाता है, जिसमें हजारों ईसाइयों को मार दिया गया था।"
    },
    {
        question: "313 ईस्वी में 'मिलान का अध्यादेश' (Edict of Milan) किसने जारी किया था, जिसने ईसाई धर्म को वैधता दी?",
        answers: shuffle([
            { text: "सम्राट नीरो", correct: false },
            { text: "सम्राट कॉन्सटेंटाइन", correct: true },
            { text: "सम्राट डायोक्लेशियन", correct: false },
            { text: "सम्राट थिओडोसियस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सम्राट कॉन्सटेंटाइन ने 313 ईस्वी में मिलान का अध्यादेश जारी किया था, जिसने रोमन साम्राज्य में ईसाई धर्म को कानूनी मान्यता दी और उत्पीड़न को समाप्त किया।"
    },
    {
        question: "कैथोलिक चर्च में कितने 'साक्रामेंट' (पवित्र संस्कार) होते हैं?",
        answers: shuffle([
            { text: "3", correct: false },
            { text: "5", correct: false },
            { text: "7", correct: true },
            { text: "10", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रोमन कैथोलिक और रूढ़िवादी चर्चों में सात साक्रामेंट होते हैं: बाप्तिस्मा, युकेरिस्ट, पुष्टिकरण, मेल-मिलाप, बीमारों का अभिषेक, पवित्र आदेश और विवाह।"
    },
    {
        question: "वह कौन-सा प्रेरित था, जो शुरू में ईसाइयों का उत्पीड़न करता था, लेकिन बाद में सबसे महत्वपूर्ण मिशनरी बन गया?",
        answers: shuffle([
            { text: "संत पीटर", correct: false },
            { text: "संत जॉन", correct: false },
            { text: "संत पॉल (शाऊल)", correct: true },
            { text: "संत एंड्रयू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संत पॉल, जिनका मूल नाम शाऊल था, शुरू में ईसाइयों को सताते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन एक दिव्य अनुभव के बाद, वे ईसाई धर्म के सबसे प्रभावशाली मिशनरी और धर्मशास्त्री बन गए।"
    },
    {
        question: "बाइबिल में 'यीशु के अंतिम भोज' को किस संस्कार के रूप में मनाया जाता है?",
        answers: shuffle([
            { text: "बाप्तिस्मा", correct: false },
            { text: "विवाह", correct: false },
            { text: "युकेरिस्ट (कम्युनियन)", correct: true },
            { text: "पुष्टिकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> युकेरिस्ट, जिसे कम्युनियन भी कहा जाता है, जीसस के अंतिम भोज की याद में मनाया जाने वाला एक संस्कार है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें रोटी और दाखमधु को जीसस के शरीर और रक्त का प्रतीक माना जाता है।"
    },
    {
        question: "ईसाई धर्म में कौन-सा जानवर पवित्र आत्मा का प्रतीक माना जाता है?",
        answers: shuffle([
            { text: "मेमना", correct: false },
            { text: "कबूतर", correct: true },
            { text: "मछली", correct: false },
            { text: "शेर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल के नए नियम में कई बार पवित्र आत्मा को कबूतर के रूप में प्रकट होते दिखाया गया है।"
    },
    {
        question: "'नीकैया की परिषद' (Council of Nicaea), जो 325 ईस्वी में हुई थी, का मुख्य उद्देश्य क्या था?",
        answers: shuffle([
            { text: "बाइबिल का अनुवाद करना", correct: false },
            { text: "ईसाई धर्म के मौलिक सिद्धांतों को परिभाषित करना", correct: true },
            { text: "जीसस के शिष्यों की संख्या तय करना", correct: false },
            { text: "चर्चों के लिए नियम बनाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नीकैया की परिषद का आयोजन सम्राट कॉन्सटेंटाइन ने किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका मुख्य उद्देश्य जीसस की दिव्यता से संबंधित विवादों को सुलझाना और एक समान ईसाई धर्म सिद्धांत (Nicene Creed) को स्थापित करना था।"
    },
    {
        question: "किसे पारंपरिक रूप से ईसाई धर्म का पहला पोप माना जाता है?",
        answers: shuffle([
            { text: "संत पॉल", correct: false },
            { text: "संत जॉन", correct: false },
            { text: "संत पीटर", correct: true },
            { text: "संत एंड्रयू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संत पीटर को रोमन कैथोलिक चर्च द्वारा जीसस का एक प्रमुख शिष्य और रोम का पहला बिशप (पोप) माना जाता है।"
    },
    {
        question: "बाइबिल के अनुसार, जीसस को किसने बपतिस्मा दिया था?",
        answers: shuffle([
            { text: "संत पीटर", correct: false },
            { text: "संत पॉल", correct: false },
            { text: "जॉन द बैपटिस्ट", correct: true },
            { text: "जोसेफ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जॉन द बैपटिस्ट, जो जीसस के चचेरे भाई थे, ने जॉर्डन नदी में जीसस को बपतिस्मा दिया था।"
    },
    {
        question: "बाइबिल के नए नियम की पहली पुस्तक कौन-सी है?",
        answers: shuffle([
            { text: "मरकुस का सुसमाचार", correct: false },
            { text: "लूका का सुसमाचार", correct: false },
            { text: "यूहन्ना का सुसमाचार", correct: false },
            { text: "मत्ती का सुसमाचार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नए नियम की शुरुआत चार सुसमाचारों (Gospels) से होती है, जिनमें मत्ती का सुसमाचार (Matthew) पहली पुस्तक है।"
    },
    {
        question: "बाइबिल के नए नियम की अंतिम पुस्तक कौन-सी है?",
        answers: shuffle([
            { text: "प्रेरितों के कार्य", correct: false },
            { text: "रोमियों", correct: false },
            { text: "प्रकाशितवाक्य", correct: true },
            { text: "इब्रानियों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाशितवाक्य (Revelation) बाइबिल की अंतिम पुस्तक है, जिसमें भविष्य की घटनाओं और दुनिया के अंत के बारे में भविष्यवाणियाँ हैं।"
    },
    {
        question: "नए नियम में कितने 'सुसमाचार' (Gospels) शामिल हैं?",
        answers: shuffle([
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नए नियम में चार सुसमाचार हैं: मत्ती (Matthew), मरकुस (Mark), लूका (Luke), और यूहन्ना (John)।<br><br><i class='fa-solid fa-angles-right icon'></i> ये सभी जीसस के जीवन और उपदेशों का विवरण देते हैं।"
    },
    {
        question: "जीसस की 'दृष्टांत कथाएँ' (Parables) क्या थीं?",
        answers: shuffle([
            { text: "उनके शिष्यों के नाम", correct: false },
            { text: "नैतिक या आध्यात्मिक शिक्षा देने वाली छोटी कहानियाँ", correct: true },
            { text: "प्रार्थनाएँ", correct: false },
            { text: "भविष्यवाणियाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीसस ने अक्सर दृष्टांत कथाओं का उपयोग लोगों को जटिल आध्यात्मिक सिद्धांतों को सरल तरीके से समझाने के लिए किया।"
    },
    {
        question: "किस घटना ने 1054 ईस्वी में ईसाई धर्म को रोमन कैथोलिक और पूर्वी रूढ़िवादी चर्चों में विभाजित कर दिया?",
        answers: shuffle([
            { text: "मार्टिन लूथर का सुधार", correct: false },
            { text: "मिलान का अध्यादेश", correct: false },
            { text: "धर्मयुद्ध", correct: false },
            { text: "द ग्रेट स्किज़म (महान विभाजन)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1054 ईस्वी का महान विभाजन पूर्वी और पश्चिमी ईसाई चर्चों के बीच एक औपचारिक विभाजन था, जिसने रोमन कैथोलिक और पूर्वी रूढ़िवादी चर्चों को जन्म दिया।"
    },
    {
        question: "किसे प्रोटेस्टेंट सुधार (Protestant Reformation) का जनक माना जाता है?",
        answers: shuffle([
            { text: "संत थॉमस एक्विनास", correct: false },
            { text: "संत ऑगस्टीन", correct: false },
            { text: "मार्टिन लूथर", correct: true },
            { text: "जॉन केल्विन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मार्टिन लूथर 16वीं सदी के एक जर्मन धर्मशास्त्री थे, जिन्होंने 1517 में 95 थीसिस लिखकर प्रोटेस्टेंट सुधार की शुरुआत की।"
    },
    {
        question: "मार्टिन लूथर ने 1517 में किस प्रसिद्ध दस्तावेज को प्रकाशित किया था?",
        answers: shuffle([
            { text: "द नाइसीन क्रीड", correct: false },
            { text: "द टेन कमांडमेंट्स", correct: false },
            { text: "95 थीसिस", correct: true },
            { text: "बुक ऑफ कॉमन प्रेयर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लूथर की 95 थीसिस में कैथोलिक चर्च की प्रथाओं, विशेषकर 'इंडुलजेंस' (पापमोचन पत्रों) की बिक्री पर आपत्ति जताई गई थी।"
    },
    {
        question: "किस संस्कार में एक बीमार व्यक्ति को प्रार्थना और तेल से अभिषेक किया जाता है?",
        answers: shuffle([
            { text: "बाप्तिस्मा", correct: false },
            { text: "विवाह", correct: false },
            { text: "पुष्टिकरण", correct: false },
            { text: "बीमारों का अभिषेक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बीमारों का अभिषेक (Anointing of the Sick) एक संस्कार है जिसमें एक पुजारी बीमारी या बुढ़ापे का सामना कर रहे व्यक्ति को चंगाई और आध्यात्मिक शक्ति प्रदान करने के लिए अभिषेक करता है।"
    },
    {
        question: "कौन-सा संस्कार एक पुरुष और एक महिला के बीच जीवनभर की प्रतिबद्धता का प्रतीक है?",
        answers: shuffle([
            { text: "पुष्टिकरण", correct: false },
            { text: "विवाह", correct: true },
            { text: "पवित्र आदेश", correct: false },
            { text: "युकेरिस्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विवाह (Matrimony) को कैथोलिक और रूढ़िवादी चर्चों में एक पवित्र संस्कार माना जाता है, जो पति-पत्नी के मिलन और ईश्वर के साथ उनके संबंध का प्रतीक है।"
    },
    {
        question: "ईस्टर से पहले का 40 दिन का उपवास काल क्या कहलाता है?",
        answers: shuffle([
            { text: "लेंट", correct: true },
            { text: "एडवेंट", correct: false },
            { text: "पेंटेकोस्ट", correct: false },
            { text: "एपिफेनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लेंट ईस्टर से पहले 40 दिन की अवधि है, जिसे प्रार्थना, उपवास और पश्चात्ताप के लिए समर्पित किया जाता है।"
    },
    {
        question: "क्रिसमस से पहले की चार सप्ताह की अवधि को क्या कहा जाता है?",
        answers: shuffle([
            { text: "लेंट", correct: false },
            { text: "एडवेंट", correct: true },
            { text: "पेंटेकोस्ट", correct: false },
            { text: "ईस्टर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एडवेंट क्रिसमस से पहले की चार सप्ताह की अवधि है जो जीसस के आगमन की तैयारी और अपेक्षा का प्रतीक है।"
    },
    {
        question: "मूसा को ईश्वर ने 'दस आज्ञाएँ' (Ten Commandments) कहाँ दी थीं?",
        answers: shuffle([
            { text: "माउंट सिनाई", correct: true },
            { text: "माउंट जैतून", correct: false },
            { text: "माउंट गोल्गोथा", correct: false },
            { text: "माउंट ऑफ टेम्पटेशन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल के अनुसार, ईश्वर ने मूसा को माउंट सिनाई पर दस आज्ञाएँ दी थीं, जो यहूदियों और ईसाइयों दोनों के लिए नैतिक और धार्मिक कानून का आधार हैं।"
    },
    {
        question: "'बीटिट्यूड्स' (धन्यवचन) किस प्रसिद्ध उपदेश का हिस्सा हैं?",
        answers: shuffle([
            { text: "अंतिम भोज का उपदेश", correct: false },
            { text: "माउंट पर उपदेश", correct: true },
            { text: "जैतून पर्वत का उपदेश", correct: false },
            { text: "यरूशलेम का उपदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट पर उपदेश (Sermon on the Mount) जीसस का सबसे प्रसिद्ध उपदेश है, जिसमें आठ 'धन्यवचन' (Beatitudes) शामिल हैं।"
    },
    {
        question: "जीसस को किस दिन सूली पर चढ़ाया गया था?",
        answers: shuffle([
            { text: "रविवार", correct: false },
            { text: "सोमवार", correct: false },
            { text: "शुक्रवार", correct: true },
            { text: "गुरुवार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीसस को शुक्रवार को सूली पर चढ़ाया गया था, जिसे 'गुड फ्राइडे' के रूप में याद किया जाता है।"
    },
    {
        question: "जीसस किस दिन मृतकों में से जी उठे थे?",
        answers: shuffle([
            { text: "शुक्रवार", correct: false },
            { text: "शनिवार", correct: false },
            { text: "रविवार", correct: true },
            { text: "सोमवार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीसस के पुनरुत्थान का दिन रविवार था, जिसे 'ईस्टर संडे' के रूप में मनाया जाता है।"
    },
    {
        question: "जीसस के स्वर्ग में वापस जाने की घटना को क्या कहा जाता है?",
        answers: shuffle([
            { text: "पुनरुत्थान (Resurrection)", correct: false },
            { text: "स्वर्गारोहण (Ascension)", correct: true },
            { text: "बपतिस्मा", correct: false },
            { text: "प्रकटीकरण (Revelation)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल के अनुसार, जीसस अपने पुनरुत्थान के 40 दिन बाद स्वर्ग में अपने पिता के पास लौट गए थे।<br><br><i class='fa-solid fa-angles-right icon'></i> इस घटना को स्वर्गारोहण (Ascension) कहा जाता है।"
    },
    {
        question: "'पुराने नियम' में ईश्वर के साथ 'वाचा' (Covenant) बनाने वाले पहले व्यक्ति कौन थे?",
        answers: shuffle([
            { text: "आदम", correct: false },
            { text: "नूह", correct: false },
            { text: "अब्राहम", correct: true },
            { text: "मूसा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अब्राहम को यहूदी और ईसाई धर्मों में 'विश्वास का पिता' माना जाता है, क्योंकि उन्होंने ईश्वर के साथ एक वाचा (Covenant) बनाई थी।"
    },
    {
        question: "जीसस के जन्म से पहले, उनकी माँ मरियम को किसने बताया था कि वह ईश्वर के पुत्र को जन्म देंगी?",
        answers: shuffle([
            { text: "देवदूत मिखाइल", correct: false },
            { text: "देवदूत गैब्रियल", correct: true },
            { text: "जॉन द बैपटिस्ट", correct: false },
            { text: "संत जोसेफ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल के अनुसार, देवदूत गैब्रियल ने मरियम के पास जाकर उन्हें बताया था कि वह पवित्र आत्मा की शक्ति से ईश्वर के पुत्र को जन्म देंगी।"
    },
    {
        question: "नए नियम में 'प्रेरितों के कार्य' (Acts of the Apostles) नामक पुस्तक किसने लिखी थी?",
        answers: shuffle([
            { text: "मत्ती", correct: false },
            { text: "मरकुस", correct: false },
            { text: "लूका", correct: true },
            { text: "यूहन्ना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रेरितों के कार्य नामक पुस्तक को लूका ने लिखा था, जिन्होंने लूका का सुसमाचार भी लिखा था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह जीसस के स्वर्गारोहण के बाद शुरुआती चर्च के विकास का वर्णन करती है।"
    },
    {
        question: "कौन-सा संप्रदाय 'कन्फर्मेशन' (Confirmation) नामक संस्कार को मानता है?",
        answers: shuffle([
            { text: "रोमन कैथोलिक", correct: false },
            { text: "पूर्वी रूढ़िवादी", correct: false },
            { text: "मेथोडिस्ट", correct: false },
            { text: "रोमन कैथोलिक और पूर्वी रूढ़िवादी दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कन्फर्मेशन एक संस्कार है जिसमें एक बपतिस्मा प्राप्त व्यक्ति को पवित्र आत्मा की शक्ति से मजबूत किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कैथोलिक और पूर्वी रूढ़िवादी दोनों चर्चों में महत्वपूर्ण है।"
    },
    {
        question: "'सलेम' शहर का उल्लेख किस रूप में किया गया है?",
        answers: shuffle([
            { text: "शांति का शहर", correct: true },
            { text: "जीसस के जन्म का शहर", correct: false },
            { text: "जीसस के शिष्यों का शहर", correct: false },
            { text: "राजा दाऊद का शहर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सलेम' शब्द का अर्थ 'शांति' है।<br><br><i class='fa-solid fa-angles-right icon'></i> बाइबिल में इसका उल्लेख यरूशलेम के एक पुराने नाम के रूप में किया गया है।"
    },
    {
        question: "ईसाई धर्म में 'अंतिम न्याय' (Final Judgment) के दिन क्या होगा?",
        answers: shuffle([
            { text: "सभी लोगों को स्वर्ग भेज दिया जाएगा।", correct: false },
            { text: "केवल ईसाइयों का न्याय होगा।", correct: false },
            { text: "ईश्वर सभी लोगों के कर्मों के आधार पर उनका न्याय करेगा।", correct: true },
            { text: "सभी को नर्क भेज दिया जाएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ईसाई धर्म के अनुसार, 'अंतिम न्याय' के दिन ईश्वर सभी जीवित और मृत लोगों के कर्मों के आधार पर उनके जीवन का न्याय करेगा।"
    },
    {
        question: "'क्रूस' पर चढ़ाए जाने से पहले जीसस ने अपने शिष्यों के साथ कहाँ प्रार्थना की थी?",
        answers: shuffle([
            { text: "माउंट सिनाई", correct: false },
            { text: "जैतून का बगीचा (गथसेमानी)", correct: true },
            { text: "मंदिर", correct: false },
            { text: "यरूशलेम शहर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीसस को गिरफ्तार किए जाने से पहले, उन्होंने जैतून के बगीचे (Garden of Gethsemane) में प्रार्थना की थी, जहाँ उनके शिष्य उनके साथ थे।"
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