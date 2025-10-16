const questions = [
    {
        topHeading: "एकार्थी शब्दों पर आधारित 50 MCQs, part_3 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'किसी काम को करने की अनुमति देना' कहलाता है:",
        answers: shuffle([
            { text: "स्वीकृति", correct: false },
            { text: "अनुमति", correct: true },
            { text: "आज्ञा", correct: false },
            { text: "सहमति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनुमति' (Permission) का अर्थ है किसी को कोई कार्य करने के लिए 'हाँ' कहना।"
    },
    {
        question: "प्रश्न 2. 'किसी प्रस्ताव, विचार या आवेदन को मान लेना' क्या कहलाता है?",
        answers: shuffle([
            { text: "अनुमति", correct: false },
            { text: "स्वीकृति", correct: true },
            { text: "अनुमोदन", correct: false },
            { text: "मंजूरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्वीकृति' (Acceptance/Approval) का प्रयोग किसी अर्जी, प्रस्ताव या योजना को आधिकारिक रूप से स्वीकार करने के लिए होता है, जैसे- 'आवेदन की स्वीकृति'।"
    },
    {
        question: "प्रश्न 3. 'गहन अध्ययन' के लिए सबसे उपयुक्त शब्द है:",
        answers: shuffle([
            { text: "पठन", correct: false },
            { text: "वाचन", correct: false },
            { text: "अध्ययन", correct: true },
            { text: "अवलोकन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अध्ययन' (Study) में किसी विषय को गंभीरता और गहराई से समझा जाता है।"
    },
    {
        question: "प्रश्न 4. 'लिखित सामग्री को केवल पढ़ना' क्या कहलाता है?",
        answers: shuffle([
            { text: "अध्ययन", correct: false },
            { text: "पठन", correct: true },
            { text: "अवलोकन", correct: false },
            { text: "अनुशीलन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पठन' (Reading) का अर्थ है किसी लिखित चीज को सामान्य रूप से पढ़ना।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसमें गहनता आवश्यक नहीं है।"
    },
    {
        question: "प्रश्न 5. 'किसी व्यावहारिक कार्य में दक्ष' व्यक्ति को कहते हैं:",
        answers: shuffle([
            { text: "कुशल", correct: false },
            { text: "चतुर", correct: false },
            { text: "निपुण", correct: true },
            { text: "पारंगत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निपुण' (Expert) का प्रयोग हाथ से किए जाने वाले कलात्मक या तकनीकी कार्यों में दक्षता के लिए होता है, जैसे- 'वह मूर्तिकला में निपुण है'।"
    },
    {
        question: "प्रश्न 6. 'जो लगभग सभी प्रकार के कार्यों को करने में योग्य हो' उसे कहते हैं:",
        answers: shuffle([
            { text: "निपुण", correct: false },
            { text: "कुशल", correct: true },
            { text: "प्रवीण", correct: false },
            { text: "दक्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुशल' (Skilled) एक सामान्य शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो किसी भी कार्य को अच्छी तरह से करने की योग्यता को दर्शाता है।"
    },
    {
        question: "प्रश्न 7. 'मन में दूसरों को धोखा देने का भाव रखना' कहलाता है:",
        answers: shuffle([
            { text: "छल", correct: false },
            { text: "धोखा", correct: false },
            { text: "कपट", correct: true },
            { text: "फरेब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कपट' एक मानसिक भाव है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसमें व्यक्ति के मन में बेईमानी और दुर्भावना होती है।"
    },
    {
        question: "प्रश्न 8. 'धोखा देने के उद्देश्य से किया गया व्यवहार या कार्य' कहलाता है:",
        answers: shuffle([
            { text: "कपट", correct: false },
            { text: "छल", correct: true },
            { text: "प्रपंच", correct: false },
            { text: "धूर्तता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'छल' कपट का व्यावहारिक रूप है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब मन के कपट को कार्य रूप में परिणत किया जाता है, तो वह छल कहलाता है।"
    },
    {
        question: "प्रश्न 9. 'जो अपने अच्छे गुणों और कार्यों के कारण दूर-दूर तक जाना जाए', उसके लिए शब्द है:",
        answers: shuffle([
            { text: "प्रसिद्ध", correct: false },
            { text: "विख्यात", correct: true },
            { text: "ख्याति", correct: false },
            { text: "लोकप्रिय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विख्यात' का प्रयोग हमेशा सकारात्मक अर्थ में होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका अर्थ है अच्छे कारणों से प्रसिद्ध होना।"
    },
    {
        question: "प्रश्न 10. 'जो किसी भी कारण से (अच्छा या बुरा) दूर-दूर तक जाना जाए', उसे कहते हैं:",
        answers: shuffle([
            { text: "विख्यात", correct: false },
            { text: "कुख्यात", correct: false },
            { text: "प्रसिद्ध", correct: true },
            { text: "चर्चित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रसिद्ध' (Famous) एक सामान्य शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> व्यक्ति अच्छे या बुरे, किसी भी कारण से प्रसिद्ध हो सकता है।"
    },
    {
        question: "प्रश्न 11. 'बुरे कार्यों के लिए मिली प्रसिद्धि' क्या कहलाती है?",
        answers: shuffle([
            { text: "प्रसिद्धि", correct: false },
            { text: "बदनामी", correct: false },
            { text: "कुख्याति", correct: true },
            { text: "अपयश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जो व्यक्ति अपने बुरे कर्मों के कारण जाना जाता है, उसे 'कुख्यात' (Notorious) कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> और इस स्थिति को 'कुख्याति' कहते हैं।"
    },
    {
        question: "प्रश्न 12. 'जिसके बिना काम न चल सके, जो जरूरी हो' कहलाता है:",
        answers: shuffle([
            { text: "अनिवार्य", correct: false },
            { text: "आवश्यक", correct: true },
            { text: "बाध्यकारी", correct: false },
            { text: "अपरिहार्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आवश्यक' (Necessary) का अर्थ है जरूरी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके बिना काम में कठिनाई हो सकती है।"
    },
    {
        question: "प्रश्न 13. 'जो टाला न जा सके और जिसे करना ही पड़े' कहलाता है:",
        answers: shuffle([
            { text: "आवश्यक", correct: false },
            { text: "अनिवार्य", correct: true },
            { text: "जरूरी", correct: false },
            { text: "महत्त्वपूर्ण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनिवार्य' (Mandatory/Compulsory) का अर्थ है जिसे करने के लिए आप कानूनी या नियमतः बाध्य हों।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें विकल्प का अभाव होता है।"
    },
    {
        question: "प्रश्न 14. 'जिसके समान कोई दूसरा न हो' के लिए सही शब्द है:",
        answers: shuffle([
            { text: "अनुपम", correct: false },
            { text: "अद्वितीय", correct: true },
            { text: "अनूठा", correct: false },
            { text: "अद्भुत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अद्वितीय' का शाब्दिक अर्थ है 'जिसका कोई दूसरा न हो'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अपनी तरह का एकमात्र होने का भाव देता है।"
    },
    {
        question: "प्रश्न 15. 'किसी अत्याचारी या पापी व्यक्ति को मारना' कहलाता है:",
        answers: shuffle([
            { text: "हत्या", correct: false },
            { text: "वध", correct: true },
            { text: "मृत्युदंड", correct: false },
            { text: "अंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वध' का प्रयोग किसी दुष्ट या आततायी को मारने के लिए किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसे अक्सर नैतिक रूप से सही माना जाता है, जैसे- 'रावण का वध'।"
    },
    {
        question: "प्रश्न 16. 'बहुत सारे लोगों को एक साथ मार देना' क्या कहलाता है?",
        answers: shuffle([
            { text: "हत्या", correct: false },
            { text: "वध", correct: false },
            { text: "संहार", correct: true },
            { text: "विनाश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'संहार' (Massacre) का अर्थ है बड़े पैमाने पर विनाश या लोगों का मारा जाना, जैसे- 'महाभारत में हुआ संहार'।"
    },
    {
        question: "प्रश्न 17. 'जिसकी तुलना किसी और से न की जा सके' उसे कहते हैं:",
        answers: shuffle([
            { text: "अनुपम", correct: false },
            { text: "अद्वितीय", correct: false },
            { text: "अतुलनीय", correct: true },
            { text: "अमूल्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अतुलनीय' का अर्थ है 'जिसकी तुलना संभव न हो'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह दो वस्तुओं के बीच तुलना की असंभावना को बताता है।"
    },
    {
        question: "प्रश्न 18. 'किसी वस्तु के गुण-दोष या सत्यता को परखना' क्या है?",
        answers: shuffle([
            { text: "निरीक्षण", correct: false },
            { text: "परीक्षण", correct: true },
            { text: "जाँच", correct: false },
            { text: "मूल्यांकन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परीक्षण' (Test/Examination) का उद्देश्य किसी वस्तु या व्यक्ति की क्षमता या गुणवत्ता को जाँचता होता है, जैसे- 'रक्त परीक्षण'।"
    },
    {
        question: "प्रश्न 19. 'समान उम्र के लोग जो साथ पढ़ते या काम करते हों', कहलाते हैं:",
        answers: shuffle([
            { text: "मित्र", correct: false },
            { text: "सखा", correct: false },
            { text: "समवयस्क", correct: true },
            { text: "सहपाठी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'समवयस्क' का अर्थ है समान आयु वाला।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक व्यापक शब्द है।"
    },
    {
        question: "प्रश्न 20. 'वह व्यक्ति जिसके साथ गहरा और आत्मीय लगाव हो', कहलाता है:",
        answers: shuffle([
            { text: "मित्र", correct: true },
            { text: "दोस्त", correct: false },
            { text: "सखा", correct: false },
            { text: "बंधु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मित्र' (Friend) एक सामान्य शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो किसी भी ऐसे व्यक्ति के लिए प्रयुक्त होता है जिससे हमारा अच्छा संबंध हो।"
    },
    {
        question: "प्रश्न 21. 'जो मित्र हर परिस्थिति में साथ दे और जिससे कोई पर्दा न हो', वह है:",
        answers: shuffle([
            { text: "मित्र", correct: false },
            { text: "सहचर", correct: false },
            { text: "सखा", correct: true },
            { text: "हितैषी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सखा' (Close Companion) का अर्थ मित्र से अधिक गहरा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें आत्मीयता और अनौपचारिकता बहुत अधिक होती है, जैसे- कृष्ण और सुदामा।"
    },
    {
        question: "प्रश्न 22. 'किसी वस्तु के भीतरी भाग या मन के भावों के लिए' कौन सा शब्द उपयुक्त है?",
        answers: shuffle([
            { text: "आभ्यंतर", correct: false },
            { text: "आंतरिक", correct: true },
            { text: "अंतःकरण", correct: false },
            { text: "भीतरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आंतरिक' (Internal) का प्रयोग शरीर, देश या किसी संगठन के भीतरी मामलों के लिए होता है।"
    },
    {
        question: "प्रश्न 23. 'मन, बुद्धि, चित्त और अहंकार का समूह' क्या कहलाता है?",
        answers: shuffle([
            { text: "आत्मा", correct: false },
            { text: "मन", correct: false },
            { text: "अंतःकरण", correct: true },
            { text: "हृदय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अंतःकरण' एक दार्शनिक शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो मनुष्य की भीतरी मानसिक और भावनात्मक शक्तियों का समुच्चय है।"
    },
    {
        question: "प्रश्न 24. 'किसी की मृत्यु पर दुःख प्रकट करना' कहलाता है:",
        answers: shuffle([
            { text: "शोक", correct: true },
            { text: "विलाप", correct: false },
            { text: "संवेदना", correct: false },
            { text: "खेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शोक' किसी प्रियजन की मृत्यु या बड़ी हानि पर होने वाला गहरा मानसिक दुःख है।"
    },
    {
        question: "प्रश्न 25. 'अपनी किसी छोटी गलती या किसी को कष्ट पहुँचाने पर होने वाला हल्का दुःख' है:",
        answers: shuffle([
            { text: "शोक", correct: false },
            { text: "कष्ट", correct: false },
            { text: "खेद", correct: true },
            { text: "ग्लानि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खेद' (Regret) का प्रयोग औपचारिक रूप से असुविधा के लिए दुःख प्रकट करने हेतु होता है, जैसे- 'मुझे यह सुनकर खेद है'।"
    },
    {
        question: "प्रश्न 26. 'किसी को आते हुए देखकर सम्मान में खड़े होना' कहलाता है:",
        answers: shuffle([
            { text: "स्वागत", correct: false },
            { text: "सत्कार", correct: false },
            { text: "अभ्यर्थना", correct: true },
            { text: "अभिवादन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अभ्यर्थना' का विशेष अर्थ है किसी के सम्मान में आगे बढ़कर उसे ग्रहण करना।"
    },
    {
        question: "प्रश्न 27. 'हाथ जोड़कर या किसी अन्य तरीके से सम्मान प्रकट करना' कहलाता है:",
        answers: shuffle([
            { text: "नमस्कार", correct: false },
            { text: "प्रणाम", correct: false },
            { text: "अभिवादन", correct: true },
            { text: "नमस्ते", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अभिवादन' (Greeting) सम्मान प्रकट करने का एक सामान्य तरीका है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसमें नमस्कार, प्रणाम आदि शामिल हैं।"
    },
    {
        question: "प्रश्न 28. 'वह स्त्री जिसका पति जीवित हो' के लिए एक शब्द:",
        answers: shuffle([
            { text: "सौभाग्यवती", correct: false },
            { text: "सुहागिन", correct: false },
            { text: "सधवा", correct: true },
            { text: "साध्वी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सधवा' 'विधवा' का विलोम शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> और इसका शाब्दिक अर्थ है 'धव (पति) के साथ'।"
    },
    {
        question: "प्रश्न 29. 'जो स्त्री पतिव्रता हो और अच्छे आचरण वाली हो' उसे कहते हैं:",
        answers: shuffle([
            { text: "देवी", correct: false },
            { text: "साध्वी", correct: true },
            { text: "पतिव्रता", correct: false },
            { text: "पुण्यात्मा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'साध्वी' का अर्थ है साधु स्वभाव वाली पवित्र स्त्री।"
    },
    {
        question: "प्रश्न 30. 'वह पुरुष जिसकी पत्नी मर गई हो' कहलाता है:",
        answers: shuffle([
            { text: "विधुर", correct: true },
            { text: "अभागा", correct: false },
            { text: "अकेला", correct: false },
            { text: "वियोगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विधुर' उस पुरुष को कहते हैं जिसकी पत्नी का देहांत हो गया हो।"
    },
    {
        question: "प्रश्न 31. 'जिसकी पत्नी साथ न हो' उसे क्या कहेंगे?",
        answers: shuffle([
            { text: "विधुर", correct: false },
            { text: "वियोगी", correct: false },
            { text: "विपत्नीक", correct: true },
            { text: "अविवाहित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विपत्नीक' का अर्थ है पत्नी रहित।<br><br><i class='fa-solid fa-angles-right icon'></i> यह स्थिति तलाक या अलगाव के कारण भी हो सकती है, जबकि 'विधुर' केवल मृत्यु के संदर्भ में होता है।"
    },
    {
        question: "प्रश्न 32. 'किसी ग्रंथ या रचना का अंश' कहलाता है:",
        answers: shuffle([
            { text: "भाग", correct: false },
            { text: "हिस्सा", correct: false },
            { text: "खंड", correct: false },
            { text: "अवतरण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अवतरण' (Excerpt/Quotation) किसी लेख या पुस्तक से ज्यों का त्यों लिया गया अंश होता है।"
    },
    {
        question: "प्रश्न 33. 'किसी बड़ी वस्तु का टुकड़ा' कहलाता है:",
        answers: shuffle([
            { text: "अंश", correct: true },
            { text: "भाग", correct: false },
            { text: "टुकड़ा", correct: false },
            { text: "खंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अंश' का अर्थ है किसी समग्र वस्तु का एक छोटा हिस्सा, जैसे- 'यह उसी मशीन का एक अंश है'।"
    },
    {
        question: "प्रश्न 34. 'किसी विषय पर लोगों का मत जानने के लिए की जाने वाली जाँच' है:",
        answers: shuffle([
            { text: "निरीक्षण", correct: false },
            { text: "सर्वेक्षण", correct: true },
            { text: "परीक्षण", correct: false },
            { text: "जाँच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सर्वेक्षण' (Survey) में किसी समूह से प्रश्न पूछकर आँकड़े इकट्ठे किए जाते हैं।"
    },
    {
        question: "प्रश्न 35. 'वह धन जो सरकार द्वारा किसी विशेष कार्य के लिए दिया जाता है', कहलाता है:",
        answers: shuffle([
            { text: "सहायता", correct: false },
            { text: "दान", correct: false },
            { text: "अनुदान", correct: true },
            { text: "ऋण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनुदान' (Grant) सरकार या किसी संस्था द्वारा शिक्षा, शोध या किसी सामाजिक कार्य को बढ़ावा देने के लिए दी जाने वाली आर्थिक सहायता है।"
    },
    {
        question: "प्रश्न 36. 'किसी भी कार्य में सफलता' को क्या कहते हैं?",
        answers: shuffle([
            { text: "सिद्धि", correct: true },
            { text: "कीर्ति", correct: false },
            { text: "विजय", correct: false },
            { text: "जय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सिद्धि' का अर्थ है किसी कार्य का सफलतापूर्वक पूर्ण होना या उसमें प्रवीणता प्राप्त करना।"
    },
    {
        question: "प्रश्न 37. 'युद्ध में शत्रु पर जीत' कहलाती है:",
        answers: shuffle([
            { text: "जय", correct: false },
            { text: "विजय", correct: true },
            { text: "जीत", correct: false },
            { text: "सफलता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विजय' शब्द का प्रयोग विशेष रूप से युद्ध, प्रतियोगिता या संघर्ष में प्राप्त जीत के लिए होता है।"
    },
    {
        question: "प्रश्न 38. 'किसी के प्रति मन में कोमल भाव' कहलाता है:",
        answers: shuffle([
            { text: "दया", correct: false },
            { text: "करुणा", correct: false },
            { text: "सहानुभूति", correct: true },
            { text: "अनुकंपा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सहानुभूति' (Sympathy) का अर्थ है दूसरे के दुःख को समझना और उसके प्रति संवेदना रखना।"
    },
    {
        question: "प्रश्न 39. 'दूसरे के दुःख को देखकर हृदय का पिघल जाना और उसे दूर करने की तीव्र इच्छा' है:",
        answers: shuffle([
            { text: "दया", correct: false },
            { text: "करुणा", correct: true },
            { text: "कृपा", correct: false },
            { text: "ममता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'करुणा' (Compassion) दया से अधिक गहन भाव है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसमें दूसरे के दुःख को देखकर स्वयं भी दुःखी होने का भाव होता है।"
    },
    {
        question: "प्रश्न 40. 'बिना किसी स्वार्थ के दूसरों का भला करना' कहलाता है:",
        answers: shuffle([
            { text: "सेवा", correct: false },
            { text: "परोपकार", correct: true },
            { text: "पुण्य", correct: false },
            { text: "दान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परोपकार' का अर्थ है दूसरों का उपकार करना।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक व्यापक नैतिक गुण है।"
    },
    {
        question: "प्रश्न 41. 'किसी के मन में बैठा हुआ अनुचित और निराधार डर' कहलाता है:",
        answers: shuffle([
            { text: "त्रास", correct: false },
            { text: "आतंक", correct: false },
            { text: "भीति", correct: true },
            { text: "भय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भीति' का अर्थ है मन में समाया हुआ डर।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक आंतरिक और मनोवैज्ञानिक स्थिति है।"
    },
    {
        question: "प्रश्न 42. 'किसी शक्तिशाली व्यक्ति या वस्तु से अनिष्ट की आशंका से उत्पन्न होने वाला डर' है:",
        answers: shuffle([
            { text: "भीति", correct: false },
            { text: "त्रास", correct: false },
            { text: "भय", correct: true },
            { text: "डर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भय' (Fear) का कोई वास्तविक या काल्पनिक कारण होता है, जैसे- 'अँधेरे का भय'।"
    },
    {
        question: "प्रश्न 43. 'किसी के अत्याचार या हिंसा से उत्पन्न बहुत अधिक डर' कहलाता है:",
        answers: shuffle([
            { text: "भय", correct: false },
            { text: "आतंक", correct: true },
            { text: "खौफ", correct: false },
            { text: "दहशत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आतंक' (Terror) का उद्देश्य लोगों में भय फैलाकर उन्हें डराना और नियंत्रित करना होता है।"
    },
    {
        question: "प्रश्न 44. 'किसी साहित्यिक कृति की गुण-दोष के आधार पर विवेचना' करना कहलाता है:",
        answers: shuffle([
            { text: "व्याख्या", correct: false },
            { text: "टीका", correct: false },
            { text: "समीक्षा", correct: false },
            { text: "आलोचना", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आलोचना' (Criticism) में किसी वस्तु या कृति के अच्छे और बुरे, दोनों पक्षों पर निष्पक्ष होकर विचार किया जाता है।"
    },
    {
        question: "प्रश्न 45. 'किसी विषय पर गंभीरता से सोचने-विचारने की क्रिया' है:",
        answers: shuffle([
            { text: "ध्यान", correct: false },
            { text: "चिंतन", correct: true },
            { text: "मनन", correct: false },
            { text: "सोच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चिन्तन' (Contemplation) किसी समस्या या विषय के सभी पहलुओं पर विचार करने की एक बौद्धिक प्रक्रिया है।"
    },
    {
        question: "प्रश्न 46. 'ऐसी वस्तु जो पहले कभी अस्तित्व में नहीं थी, उसका निर्माण करना' कहलाता है:",
        answers: shuffle([
            { text: "खोज", correct: false },
            { text: "अनुसंधान", correct: false },
            { text: "निर्माण", correct: false },
            { text: "आविष्कार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आविष्कार' (Invention) का अर्थ है किसी पूरी तरह से नई वस्तु या सिद्धांत को बनाना, जैसे- 'टेलीफोन का आविष्कार'।"
    },
    {
        question: "प्रश्न 47. 'किसी के दोषों को ही उजागर करना' क्या है?",
        answers: shuffle([
            { text: "आलोचना", correct: false },
            { text: "निंदा", correct: true },
            { text: "बुराई", correct: false },
            { text: "भर्त्सना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निंदा' (Condemnation) का उद्देश्य किसी को अपमानित करना या उसके दोषों का प्रचार करना होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक नकारात्मक क्रिया है।"
    },
    {
        question: "प्रश्न 48. 'इंद्रियों को प्रिय लगने वाली अनुकूल परिस्थितियाँ' क्या हैं?",
        answers: shuffle([
            { text: "आनंद", correct: false },
            { text: "सुख", correct: true },
            { text: "चैन", correct: false },
            { text: "आराम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुख' (Happiness/Comfort) का संबंध भौतिक और सांसारिक सुविधाओं से होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह दुःख का विलोम है।"
    },
    {
        question: "प्रश्न 49. 'बहुत अधिक खुशी के कारण मन में होने वाली हलचल' कहलाती है:",
        answers: shuffle([
            { text: "हर्ष", correct: false },
            { text: "आनंद", correct: false },
            { text: "उल्लास", correct: true },
            { text: "प्रसन्नता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उल्लास' (Exuberance) खुशी का एक तीव्र और प्रकट रूप है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो अक्सर त्योहारों या उत्सवों में दिखाई देता है।"
    },
    {
        question: "प्रश्न 50. 'किसी कार्य को करने का ढंग' कहलाता है:",
        answers: shuffle([
            { text: "नियम", correct: false },
            { text: "रीति", correct: false },
            { text: "विधि", correct: true },
            { text: "तरीका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विधि' (Method/Procedure) किसी कार्य को करने की निर्धारित और व्यवस्थित प्रणाली को कहते हैं, जैसे- 'पूजा की विधि'।"
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