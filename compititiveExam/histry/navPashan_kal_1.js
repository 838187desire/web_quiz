const questions = [
    {
        topHeading: "नवपाषाण काल पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'नवपाषाण' (नियोलिथिक) शब्द का सर्वप्रथम प्रयोग किसने किया था?",
        answers: shuffle([
            { text: "जॉन मार्शल", correct: false },
            { text: "सर जॉन लुबॉक", correct: true },
            { text: "अलेक्जेंडर कनिंघम", correct: false },
            { text: "रॉबर्ट ब्रूस फुट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नियोलिथिक' (नवपाषाण) शब्द का पहली बार प्रयोग 1865 में <b>सर जॉन लुबॉक</b> ने अपनी पुस्तक 'प्री-हिस्टोरिक टाइम्स' में किया था।"
    },
    {
        question: "प्रश्न 2. नवपाषाण काल की सबसे महत्वपूर्ण विशेषता क्या थी?",
        answers: shuffle([
            { text: "आग का उपयोग", correct: false },
            { text: "पहिये का आविष्कार", correct: false },
            { text: "कृषि और पशुपालन की शुरुआत", correct: true },
            { text: "धातु का प्रयोग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवपाषाण काल की सबसे बड़ी क्रांति <b>कृषि और पशुपालन की शुरुआत</b> थी, जिससे मानव शिकारी-संग्राहक जीवन से स्थायी कृषक जीवन की ओर अग्रसर हुआ।"
    },
    {
        question: "प्रश्न 3. भारतीय उपमहाद्वीप में कृषि के प्राचीनतम साक्ष्य कहाँ से प्राप्त हुए हैं?",
        answers: shuffle([
            { text: "बुर्जहोम", correct: false },
            { text: "मेहरगढ़", correct: true },
            { text: "कोल्डिहवा", correct: false },
            { text: "चिरांद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बलूचिस्तान (वर्तमान पाकिस्तान) में स्थित <b>मेहरगढ़</b> से भारतीय उपमहाद्वीप में कृषि के <b>सबसे पुराने प्रमाण</b> (लगभग 7000 ईसा पूर्व) मिले हैं, जहाँ <b>गेहूँ और जौ</b> की खेती के साक्ष्य हैं।"
    },
    {
        question: "प्रश्न 4. नवपाषाण काल में मानव ने किस पशु को सबसे पहले पालतू बनाया?",
        answers: shuffle([
            { text: "गाय", correct: false },
            { text: "घोड़ा", correct: false },
            { text: "कुत्ता", correct: true },
            { text: "बकरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरातात्विक साक्ष्यों के अनुसार, <b>कुत्ता</b> मानव द्वारा पालतू बनाया गया पहला जानवर था, जिसका उपयोग शिकार और सुरक्षा के लिए किया जाता था।"
    },
    {
        question: "प्रश्न 5. चावल की खेती का प्राचीनतम साक्ष्य किस नवपाषाणिक स्थल से मिला है?",
        answers: shuffle([
            { text: "मेहरगढ़", correct: false },
            { text: "बुर्जहोम", correct: false },
            { text: "गुफ्कराल", correct: false },
            { text: "कोल्डिहवा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर प्रदेश के बेलन घाटी में स्थित <b>कोल्डिहवा</b> से लगभग 6500 ईसा पूर्व के <b>चावल की खेती</b> के दुनिया के सबसे पुराने साक्ष्यों में से एक मिला है।"
    },
    {
        question: "प्रश्न 6. 'गर्त-आवास' (गड्ढे वाले घर) के साक्ष्य कहाँ से मिले हैं?",
        answers: shuffle([
            { text: "चिरांद", correct: false },
            { text: "मेहरगढ़", correct: false },
            { text: "बुर्जहोम", correct: true },
            { text: "ब्रह्मगिरि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कश्मीर में स्थित <b>बुर्जहोम</b> नामक नवपाषाणिक स्थल से <b>गर्त-आवास</b> के प्रमाण मिले हैं, जहाँ लोग ठंड से बचने के लिए जमीन के नीचे गड्ढे बनाकर रहते थे।"
    },
    {
        question: "प्रश्न 7. बुर्जहोम की एक अनूठी विशेषता क्या है?",
        answers: shuffle([
            { text: "हड्डी के औजारों का मिलना", correct: false },
            { text: "मालिक के साथ पालतू कुत्ते को दफनाने के साक्ष्य", correct: true },
            { text: "धान की खेती का प्रमाण", correct: false },
            { text: "मिट्टी के बर्तन का अभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुर्जहोम में कब्रों में <b>मालिकों के साथ उनके पालतू कुत्तों को भी दफनाए जाने</b> के साक्ष्य मिले हैं, जो उस समय के मानव-पशु संबंध को दर्शाता है।"
    },
    {
        question: "प्रश्न 8. नवपाषाण काल में किस प्रकार के औजारों का प्रयोग प्रमुखता से होता था?",
        answers: shuffle([
            { text: "खुरदरे पत्थर के औजार", correct: false },
            { text: "माइक्रोलिथ (सूक्ष्म पाषाण)", correct: false },
            { text: "पॉलिशदार पत्थर के औजार", correct: true },
            { text: "तांबे के औजार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस काल के औजारों को <b>घिसकर चिकना और चमकदार</b> बनाया जाता था, जिससे वे अधिक प्रभावी और टिकाऊ होते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> इसीलिए इसे '<b>पॉलिशदार पत्थर के औजारों</b>' का युग भी कहते हैं।"
    },
    {
        question: "प्रश्न 9. नवपाषाण काल में मिट्टी के बर्तनों का निर्माण क्यों महत्वपूर्ण था?",
        answers: shuffle([
            { text: "केवल सजावट के लिए", correct: false },
            { text: "अनाज का भंडारण और खाना पकाने के लिए", correct: true },
            { text: "हथियार बनाने के लिए", correct: false },
            { text: "मुद्रा के रूप में उपयोग करने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृषि के विकास के साथ <b>अतिरिक्त अनाज के भंडारण</b> और <b>भोजन पकाने</b> की आवश्यकता हुई, जिसे मिट्टी के बर्तनों (मृदभांड) ने पूरा किया।"
    },
    {
        question: "प्रश्न 10. बिहार में स्थित एकमात्र नवपाषाणिक स्थल कौन सा है?",
        answers: shuffle([
            { text: "सेनूवर", correct: false },
            { text: "ताराडीह", correct: false },
            { text: "चिरांद", correct: true },
            { text: "चेचर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सारण जिले में स्थित <b>चिरांद</b> बिहार का एक प्रमुख नवपाषाणिक स्थल है, जहाँ से बड़ी मात्रा में हड्डी के उपकरण और गेहूं, जौ, धान की खेती के साक्ष्य मिले हैं।"
    },
    {
        question: "प्रश्न 11. दक्षिण भारत में नवपाषाणिक संस्कृति का मुख्य साक्ष्य क्या है?",
        answers: shuffle([
            { text: "गर्त-आवास", correct: false },
            { text: "राख के टीले", correct: true },
            { text: "चित्रित शैलाश्रय", correct: false },
            { text: "तांबे के भंडार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्षिण भारत के कई नवपाषाणिक स्थलों जैसे उतनूर, पिक्लीहल, संगनकल्लु से <b>राख के टीले (Ashmounds)</b> मिले हैं, जो संभवतः मौसमी शिविरों में पशुओं के गोबर को जलाने से बने थे।"
    },
    {
        question: "प्रश्न 12. 'कुम्हार की गुफा' के नाम से किस नवपाषाणिक स्थल को जाना जाता है?",
        answers: shuffle([
            { text: "बुर्जहोम", correct: false },
            { text: "मेहरगढ़", correct: false },
            { text: "गुफ्कराल", correct: true },
            { text: "कोल्डिहवा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कश्मीर में स्थित <b>गुफ्कराल</b> का शाब्दिक अर्थ '<b>कुम्हार की गुफा</b>' है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ से कृषि, पशुपालन और हड्डी के औजारों के प्रमाण मिले हैं।"
    },
    {
        question: "प्रश्न 13. नवपाषाणिक क्रांति (Neolithic Revolution) शब्द का प्रयोग किसने किया?",
        answers: shuffle([
            { text: "वी. गॉर्डन चाइल्ड", correct: true },
            { text: "सर जॉन लुबॉक", correct: false },
            { text: "मॉर्टिमर व्हीलर", correct: false },
            { text: "स्टुअर्ट पिगॉट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रसिद्ध पुरातत्ववेत्ता <b>वी. गॉर्डन चाइल्ड</b> ने कृषि और पशुपालन के कारण मानव जीवन में आए क्रांतिकारी परिवर्तनों को '<b>नवपाषाणिक क्रांति</b>' की संज्ञा दी।"
    },
    {
        question: "प्रश्न 14. मेहरगढ़ में किस प्रकार के घरों के अवशेष मिले हैं?",
        answers: shuffle([
            { text: "गोलाकार झोपड़ियाँ", correct: false },
            { text: "गर्त-आवास", correct: false },
            { text: "कच्ची ईंटों के आयताकार घर", correct: true },
            { text: "लकड़ी के घर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेहरगढ़ के शुरुआती स्तरों से <b>कच्ची ईंटों से बने आयताकार घरों</b> के साक्ष्य मिले हैं, जिनमें भंडारण के लिए छोटे-छोटे कमरे भी होते थे।"
    },
    {
        question: "प्रश्न 15. पहिये का आविष्कार किस काल की देन माना जाता है?",
        answers: shuffle([
            { text: "पुरापाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: false },
            { text: "नवपाषाण काल", correct: true },
            { text: "ताम्रपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>पहिये का आविष्कार</b> <b>नवपाषाण काल</b> की एक महत्वपूर्ण तकनीकी उपलब्धि थी, जिसका उपयोग पहले कुम्हार के चाक और फिर परिवहन के लिए किया गया।"
    },
    {
        question: "प्रश्न 16. किस नवपाषाणिक स्थल से हड्डी के उपकरणों का एक विशाल भंडार मिला है?",
        answers: shuffle([
            { text: "मेहरगढ़", correct: false },
            { text: "बुर्जहोम", correct: false },
            { text: "कोल्डिहवा", correct: false },
            { text: "चिरांद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिहार के <b>चिरांद</b> से <b>हिरण के सींगों से बने हड्डी के उपकरणों</b> का एक बहुत बड़ा जखीरा मिला है, जो इस क्षेत्र में हड्डी-उपकरण उद्योग के विकास को दर्शाता है।"
    },
    {
        question: "प्रश्न 17. नवपाषाण काल में लोगों ने वस्त्र निर्माण के लिए किस फसल की खेती शुरू की?",
        answers: shuffle([
            { text: "जूट", correct: false },
            { text: "कपास", correct: true },
            { text: "सन", correct: false },
            { text: "रेशम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेहरगढ़ जैसे स्थलों से <b>कपास की खेती</b> के शुरुआती प्रमाण मिले हैं, जिससे यह अनुमान लगाया जाता है कि नवपाषाण काल में लोगों ने <b>कपड़े बुनना</b> सीख लिया था।"
    },
    {
        question: "प्रश्न 18. दक्षिण भारत के किस स्थल को 'नवपाषाण काल का प्रांतीय मुख्यालय' कहा जाता है?",
        answers: shuffle([
            { text: "ब्रह्मगिरि", correct: false },
            { text: "पिक्लीहल", correct: false },
            { text: "संगनकल्लु", correct: true },
            { text: "हल्लूर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कर्नाटक के बेल्लारी जिले में स्थित <b>संगनकल्लु</b> एक महत्वपूर्ण नवपाषाणिक स्थल है जहाँ एक पहाड़ी पर बस्तियों के अवशेष मिले हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी व्यापकता के कारण इसे कभी-कभी '<b>प्रांतीय मुख्यालय</b>' के रूप में संदर्भित किया जाता है।"
    },
    {
        question: "प्रश्न 19. नवपाषाण काल के लोग किस प्रकार के समाज में रहते थे?",
        answers: shuffle([
            { text: "खानाबदोश शिकारी समाज", correct: false },
            { text: "बड़े शहरी समाज", correct: false },
            { text: "ग्रामीण और स्थायी कृषक समाज", correct: true },
            { text: "औद्योगिक समाज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृषि के विकास ने लोगों को एक स्थान पर बसने के लिए प्रेरित किया, जिससे <b>स्थायी गाँवों</b> और <b>कृषक समुदायों</b> का उदय हुआ।"
    },
    {
        question: "प्रश्न 20. 'रागी' की खेती का प्रथम साक्ष्य किस दक्षिण भारतीय नवपाषाणिक स्थल से मिला है?",
        answers: shuffle([
            { text: "पिक्लीहल", correct: false },
            { text: "उतनूर", correct: false },
            { text: "हल्लूर", correct: true },
            { text: "तक्कलकोट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कर्नाटक में स्थित <b>हल्लूर</b> से दक्षिण भारत में <b>रागी</b> जैसी फसलों की खेती के शुरुआती प्रमाण मिलते हैं, जो इस क्षेत्र की कृषि विविधता को दर्शाता है।"
    },
    {
        question: "प्रश्न 21. नवपाषाण काल के अंत में किस धातु का प्रयोग शुरू हुआ, जिसने ताम्रपाषाण युग की शुरुआत की?",
        answers: shuffle([
            { text: "लोहा", correct: false },
            { text: "कांसा", correct: false },
            { text: "सोना", correct: false },
            { text: "तांबा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवपाषाण काल के अंतिम चरण में मानव ने सबसे पहले <b>तांबा</b> धातु का प्रयोग करना सीखा, जिससे पाषाण उपकरणों के साथ-साथ धातु के उपकरण भी बनने लगे और <b>ताम्रपाषाण युग</b> का आरंभ हुआ।"
    },
    {
        question: "प्रश्न 22. नवपाषाण काल के लोगों द्वारा बनाए गए मृदभांडों का रंग सामान्यतः क्या होता था?",
        answers: shuffle([
            { text: "केवल काला", correct: false },
            { text: "केवल लाल", correct: false },
            { text: "धूसर (Grey Ware) और अन्य रंग", correct: true },
            { text: "हमेशा बहुरंगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवपाषाण काल के मृदभांड कई रंगों के होते थे, लेकिन एक विशिष्ट प्रकार <b>'धूसर मृदभांड' (Grey Ware)</b> था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके अलावा लाल, काले और भूरे रंग के बर्तन भी पाए जाते हैं।"
    },
    {
        question: "प्रश्न 23. नवपाषाण काल में मृतकों के साथ बर्तन, औजार और खाद्य सामग्री क्यों दफनाई जाती थी?",
        answers: shuffle([
            { text: "यह एक सामान्य प्रक्रिया थी", correct: false },
            { text: "परलोक में जीवन के विश्वास के कारण", correct: true },
            { text: "जगह बचाने के लिए", correct: false },
            { text: "देवताओं को प्रसन्न करने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मृतकों के साथ इन वस्तुओं को दफनाना यह दर्शाता है कि नवपाषाणिक लोग <b>मृत्यु के बाद भी जीवन में विश्वास</b> करते थे और मानते थे कि ये वस्तुएं परलोक में मृतक के काम आएंगी।"
    },
    {
        question: "प्रश्न 24. बेलन घाटी, जो नवपाषाणिक स्थलों के लिए प्रसिद्ध है, किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "मध्य प्रदेश", correct: false },
            { text: "बिहार", correct: false },
            { text: "उत्तर प्रदेश", correct: true },
            { text: "राजस्थान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बेलन नदी घाटी उत्तर प्रदेश</b> में स्थित है और यह पुरापाषाण, मध्यपाषाण और नवपाषाण काल के अनुक्रम का एक महत्वपूर्ण केंद्र है।<br><br><i class='fa-solid fa-angles-right icon'></i> कोल्डिहवा और महगड़ा जैसे स्थल यहीं स्थित हैं।"
    },
    {
        question: "प्रश्न 25. किस नवपाषाणिक स्थल से एक साथ भेड़, बकरी और मवेशी पालन का साक्ष्य मिला है?",
        answers: shuffle([
            { text: "कोल्डिहवा", correct: false },
            { text: "चिरांद", correct: false },
            { text: "गुफ्कराल", correct: false },
            { text: "महगड़ा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर प्रदेश की बेलन घाटी में स्थित <b>महगड़ा</b> से एक बड़े <b>पशु बाड़े</b> का प्रमाण मिला है, जहाँ से भेड़, बकरी और मवेशियों की हड्डियाँ एक साथ मिली हैं, जो सामूहिक पशुपालन को इंगित करता है।"
    },
    {
        question: "प्रश्न 26. नवपाषाण काल के औजार बनाने के लिए किस पत्थर का मुख्य रूप से उपयोग किया जाता था?",
        answers: shuffle([
            { text: "बलुआ पत्थर", correct: false },
            { text: "ग्रेनाइट", correct: false },
            { text: "डोलेराइट और बेसाल्ट", correct: true },
            { text: "संगमरमर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवपाषाण काल के पॉलिशदार औजार, विशेषकर कुल्हाड़ियाँ, बनाने के लिए <b>डोलेराइट और बेसाल्ट</b> जैसे कठोर और महीन कणों वाले पत्थरों का उपयोग किया जाता था।"
    },
    {
        question: "प्रश्न 27. निम्नलिखित में से कौन सी एक नवपाषाण काल की विशेषता नहीं है?",
        answers: shuffle([
            { text: "स्थायी जीवन", correct: false },
            { text: "मृदभांड निर्माण", correct: false },
            { text: "लेखन कला का ज्ञान", correct: true },
            { text: "पशुपालन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>लेखन कला का विकास</b> बहुत बाद में कांस्य युग की सभ्यताओं (जैसे सिंधु घाटी सभ्यता) में हुआ।<br><br><i class='fa-solid fa-angles-right icon'></i> नवपाषाण काल के लोग प्रागैतिहासिक थे और लिखना नहीं जानते थे।"
    },
    {
        question: "प्रश्न 28. पिक्लीहल, जो अपने राख के टीलों के लिए जाना जाता है, किस वर्तमान राज्य में स्थित है?",
        answers: shuffle([
            { text: "आंध्र प्रदेश", correct: false },
            { text: "कर्नाटक", correct: true },
            { text: "तमिलनाडु", correct: false },
            { text: "केरल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>पिक्लीहल कर्नाटक</b> राज्य में स्थित एक प्रमुख दक्षिण भारतीय नवपाषाणिक स्थल है, जो विशेष रूप से अपने '<b>ऐशमाउंड</b>' या <b>राख के टीलों</b> के लिए प्रसिद्ध है।"
    },
    {
        question: "प्रश्न 29. नवपाषाणिक मानव अपनी बस्तियाँ आमतौर पर कहाँ बसाते थे?",
        answers: shuffle([
            { text: "घने जंगलों में", correct: false },
            { text: "ऊँचे पहाड़ों पर", correct: false },
            { text: "नदी और झीलों के किनारे", correct: true },
            { text: "रेगिस्तान के बीच में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृषि और दैनिक जीवन के लिए पानी की आवश्यकता के कारण, नवपाषाणिक बस्तियाँ अक्सर <b>नदियों और झीलों जैसे जल स्रोतों के पास</b> बसाई जाती थीं।"
    },
    {
        question: "प्रश्न 30. नवपाषाण काल में सामाजिक संरचना का स्वरूप कैसा था?",
        answers: shuffle([
            { text: "जटिल और वर्गीकृत", correct: false },
            { text: "राजशाही आधारित", correct: false },
            { text: "समतावादी और कबीलाई", correct: true },
            { text: "पूर्ण रूप से अराजक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुरुआती नवपाषाणिक समाज संभवतः <b>समतावादी</b> था, जिसमें बड़े पैमाने पर सामाजिक भेदभाव नहीं था।<br><br><i class='fa-solid fa-angles-right icon'></i> लोग <b>कबीलों</b> में रहते थे और निर्णय सामूहिक रूप से लिए जाते थे।"
    },
    {
        question: "प्रश्न 31. किस क्षेत्र की नवपाषाणिक संस्कृति को 'बुर्जहोम संस्कृति' के नाम से भी जाना जाता है?",
        answers: shuffle([
            { text: "गंगा घाटी", correct: false },
            { text: "बलूचिस्तान", correct: false },
            { text: "कश्मीर घाटी", correct: true },
            { text: "ब्रह्मपुत्र घाटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कश्मीर घाटी</b> में स्थित बुर्जहोम और गुफ्कराल जैसे स्थलों की विशिष्ट विशेषताओं, जैसे गर्त-आवास, हड्डी के औजार और विशेष दफन प्रथाओं के कारण इस क्षेत्र की संस्कृति को '<b>बुर्जहोम संस्कृति</b>' कहा जाता है।"
    },
    {
        question: "प्रश्न 32. नवपाषाण काल के मृदभांड (मिट्टी के बर्तन) मुख्य रूप से कैसे बनाए जाते थे?",
        answers: shuffle([
            { text: "केवल हाथ से", correct: false },
            { text: "चाक पर", correct: false },
            { text: "हाथ और चाक दोनों से", correct: true },
            { text: "साँचे में ढालकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवपाषाण काल के शुरुआती बर्तन हाथ से बनाए जाते थे, लेकिन बाद में <b>चाक के आविष्कार</b> ने बर्तन निर्माण में क्रांति ला दी, जिससे अधिक सुडौल और विविध प्रकार के बर्तन बनाना संभव हुआ।"
    },
    {
        question: "प्रश्न 33. 'सेल्ट' (Celt) शब्द का प्रयोग नवपाषाण काल के किस उपकरण के लिए किया जाता है?",
        answers: shuffle([
            { text: "तीर की नोंक", correct: false },
            { text: "खुरचनी", correct: false },
            { text: "पत्थर की पॉलिशदार कुल्हाड़ी", correct: true },
            { text: "हड्डी की सुई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>सेल्ट</b>' एक प्रकार की <b>पॉलिशदार पत्थर की कुल्हाड़ी या बसूला</b> है, जो नवपाषाण काल का एक विशिष्ट और महत्वपूर्ण उपकरण था, जिसका उपयोग पेड़ों को काटने और लकड़ी का काम करने के लिए किया जाता था।"
    },
    {
        question: "प्रश्न 34. भारत के किस राज्य में नवपाषाणिक स्थलों का घनत्व सबसे अधिक है?",
        answers: shuffle([
            { text: "उत्तर प्रदेश", correct: false },
            { text: "बिहार", correct: false },
            { text: "कर्नाटक", correct: true },
            { text: "मध्य प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कर्नाटक</b> में संगनकल्लु, हल्लूर, ब्रह्मगिरि, मस्की, पिक्लीहल और तक्कलकोट जैसे कई महत्वपूर्ण नवपाषाणिक स्थल पाए गए हैं, जिससे यह इस काल के अध्ययन का एक प्रमुख केंद्र बन गया है।"
    },
    {
        question: "प्रश्न 35. नवपाषाण काल की अर्थव्यवस्था का मुख्य आधार क्या था?",
        answers: shuffle([
            { text: "शिकार और संग्रहण", correct: false },
            { text: "व्यापार और वाणिज्य", correct: false },
            { text: "खाद्य उत्पादन (कृषि और पशुपालन)", correct: true },
            { text: "केवल पशुपालन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवपाषाण काल की अर्थव्यवस्था शिकारी-संग्राहक से बदलकर <b>खाद्य-उत्पादक</b> हो गई, जिसमें <b>कृषि और पशुपालन</b> आर्थिक गतिविधियों का मुख्य केंद्र बन गए।"
    },
    {
        question: "प्रश्न 36. गारो पहाड़ियों में स्थित एक महत्वपूर्ण नवपाषाणिक स्थल कौन सा है?",
        answers: shuffle([
            { text: "चिरांद", correct: false },
            { text: "बुर्जहोम", correct: false },
            { text: "दाओजली हेडिंग", correct: true },
            { text: "पय्यमपल्ली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>दाओजली हेडिंग</b> मेघालय की <b>गारो पहाड़ियों</b> के क्षेत्र में एक महत्वपूर्ण नवपाषाणिक स्थल है, जो पूर्वोत्तर भारत में इस संस्कृति के प्रसार को दर्शाता है।"
    },
    {
        question: "प्रश्न 37. तमिलनाडु में स्थित एक प्रमुख नवपाषाणिक स्थल कौन सा है?",
        answers: shuffle([
            { text: "उतनूर", correct: false },
            { text: "नागार्जुनकोंडा", correct: false },
            { text: "पय्यमपल्ली", correct: true },
            { text: "आदिचनल्लूर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>पय्यमपल्ली तमिलनाडु</b> का एक महत्वपूर्ण नवपाषाणिक स्थल है जहाँ से पॉलिशदार पत्थर के औजार, मृदभांड और आवास के प्रमाण मिले हैं।"
    },
    {
        question: "प्रश्न 38. नवपाषाण काल में सामुदायिक जीवन का प्रमाण किससे मिलता है?",
        answers: shuffle([
            { text: "बड़े-बड़े कब्रिस्तानों से", correct: false },
            { text: "सामूहिक भोज के अवशेषों से", correct: false },
            { text: "किलाबंद बस्तियों और सार्वजनिक संरचनाओं से", correct: false },
            { text: "ये सभी से", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बड़े कब्रिस्तानों का होना, सामूहिक भोज और अनाज भंडारण के साक्ष्य, तथा कुछ स्थलों पर सुरक्षात्मक दीवारों का पाया जाना यह इंगित करता है कि लोग एक <b>संगठित सामुदायिक जीवन</b> जीते थे।"
    },
    {
        question: "प्रश्न 39. किस नवपाषाणिक स्थल का नाम 'राख का टीला' के स्थानीय अर्थ पर आधारित है?",
        answers: shuffle([
            { text: "ब्रह्मगिरि", correct: false },
            { text: "मस्की", correct: false },
            { text: "पिक्लीहल", correct: true },
            { text: "संगनकल्लु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>पिक्लीहल</b>' का स्थानीय भाषा में अर्थ '<b>राख का टीला</b>' (ash mound) होता है, जो इस स्थल की प्रमुख पुरातात्विक विशेषता को दर्शाता है।"
    },
    {
        question: "प्रश्न 40. मानव द्वारा उगाया गया पहला अनाज कौन सा था?",
        answers: shuffle([
            { text: "चावल और मक्का", correct: false },
            { text: "जौ और गेहूँ", correct: true },
            { text: "बाजरा और रागी", correct: false },
            { text: "ज्वार और जई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरातात्विक साक्ष्यों के अनुसार, मध्य-पूर्व के 'फर्टाइल क्रीसेंट' क्षेत्र में सबसे पहले <b>जौ और गेहूँ</b> की खेती शुरू की गई, जो नवपाषाणिक क्रांति का आधार बनी।"
    },
    {
        question: "प्रश्न 41. नवपाषाण काल के संदर्भ में, 'महगड़ा' क्यों प्रसिद्ध है?",
        answers: shuffle([
            { text: "गर्त-आवासों के लिए", correct: false },
            { text: "वृत्ताकार झोपड़ियों और पशु बाड़े के लिए", correct: true },
            { text: "हड्डी के औजारों के लिए", correct: false },
            { text: "राख के टीलों के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इलाहाबाद (प्रयागराज) के पास स्थित <b>महगड़ा</b> से <b>वृत्ताकार झोपड़ियों</b> के फर्श और एक बड़े <b>सामुदायिक पशु बाड़े</b> के साक्ष्य मिले हैं, जो इस स्थल की अनूठी विशेषता है।"
    },
    {
        question: "प्रश्न 42. किस जानवर की हड्डियाँ भारतीय नवपाषाणिक स्थलों से सामान्यतः नहीं मिली हैं?",
        answers: shuffle([
            { text: "गाय-बैल", correct: false },
            { text: "भेड़-बकरी", correct: false },
            { text: "सुअर", correct: false },
            { text: "घोड़ा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>घोड़े</b> को पालतू बनाने और उसके उपयोग का प्रमाण भारत में बहुत बाद के काल (सिंधु घाटी सभ्यता के बाद और विशेषकर वैदिक काल) में मिलता है।<br><br><i class='fa-solid fa-angles-right icon'></i> नवपाषाणिक स्थलों से घोड़े के अवशेष नहीं मिले हैं।"
    },
    {
        question: "प्रश्न 43. बुर्जहोम के लोग औजार बनाने के लिए पत्थर के अलावा और किस सामग्री का बहुतायत से उपयोग करते थे?",
        answers: shuffle([
            { text: "तांबा", correct: false },
            { text: "लकड़ी", correct: false },
            { text: "हड्डी और सींग", correct: true },
            { text: "हाथी दांत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कश्मीर में पत्थर आसानी से उपलब्ध नहीं था, इसलिए बुर्जहोम और गुफ्कराल के लोगों ने सुई, भाले की नोक, मछली पकड़ने के कांटे जैसे कई उपकरण बनाने के लिए जानवरों की <b>हड्डियों और सींगों</b> का बड़े पैमाने पर इस्तेमाल किया।"
    },
    {
        question: "प्रश्न 44. नवपाषाण काल में मानव बस्तियों का आकार कैसा था?",
        answers: shuffle([
            { text: "बड़े महानगरों जैसा", correct: false },
            { text: "छोटे, स्थायी गाँवों जैसा", correct: true },
            { text: "अस्थायी शिविरों जैसा", correct: false },
            { text: "एकल परिवार आवासों जैसा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृषि ने लोगों को एक जगह पर टिकने के लिए मजबूर किया, जिसके परिणामस्वरूप <b>छोटे-छोटे स्थायी गाँव</b> बने, जहाँ कई परिवार एक साथ रहते थे।"
    },
    {
        question: "प्रश्न 45. दक्षिण भारत की नवपाषाणिक संस्कृति उत्तर भारत से किस मामले में भिन्न थी?",
        answers: shuffle([
            { text: "वे केवल शिकार पर निर्भर थे", correct: false },
            { text: "उन्होंने पशुपालन पर अधिक जोर दिया", correct: true },
            { text: "वे धातु का प्रयोग जानते थे", correct: false },
            { text: "उनके पास कोई औजार नहीं थे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हालांकि दक्षिण भारत में कृषि भी होती थी, लेकिन वहां की संस्कृति में <b>पशुपालन</b> (विशेषकर मवेशी पालन) का अधिक महत्व था, जैसा कि राख के टीलों से प्रमाणित होता है।"
    },
    {
        question: "प्रश्न 46. नवपाषाण काल के अंत और ताम्रपाषाण काल की शुरुआत का संक्रमण काल क्या कहलाता है?",
        answers: shuffle([
            { text: "मध्यपाषाण काल", correct: false },
            { text: "महापाषाण काल", correct: false },
            { text: "प्रोटो-हिस्टोरिक काल", correct: false },
            { text: "नवपाषाण-ताम्रपाषाण काल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह वह संक्रमणकालीन चरण था जब लोग पत्थर के औजारों का उपयोग जारी रखते हुए <b>तांबे का उपयोग</b> करना भी सीख रहे थे।"
    },
    {
        question: "प्रश्न 47. किस स्थल से कृषि और पशुपालन दोनों के सबसे पुराने स्पष्ट प्रमाण मिले हैं?",
        answers: shuffle([
            { text: "बागोर", correct: false },
            { text: "आदमगढ़", correct: false },
            { text: "मेहरगढ़", correct: true },
            { text: "सराय नाहर राय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मेहरगढ़</b> को 'बलूचिस्तान की रोटी की टोकरी' भी कहा जाता है, यहाँ से लगभग 7000 ईसा पूर्व से <b>कृषि (गेहूँ, जौ) और पशुपालन</b> (भेड़, बकरी, मवेशी) के क्रमिक विकास का एक स्पष्ट अनुक्रम मिलता है।"
    },
    {
        question: "प्रश्न 48. नवपाषाण काल के लोगों की कलात्मक अभिव्यक्ति का उदाहरण क्या है?",
        answers: shuffle([
            { text: "गुफाओं में बड़े पैमाने पर चित्रकारी", correct: false },
            { text: "मूर्तिकला का विकास", correct: false },
            { text: "बर्तनों पर ज्यामितीय डिजाइन और चित्र", correct: true },
            { text: "लेखन कला का आविष्कार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवपाषाणिक लोगों ने अपने मिट्टी के बर्तनों को और अधिक सुंदर बनाने के लिए उन पर विभिन्न प्रकार के <b>ज्यामितीय पैटर्न और कभी-कभी जानवरों के चित्र</b> भी बनाए।"
    },
    {
        question: "प्रश्न 49. 'नवपाषाण' शब्द में 'नियो' (Neo) का क्या अर्थ है?",
        answers: shuffle([
            { text: "पुराना", correct: false },
            { text: "मध्य", correct: false },
            { text: "नवीन", correct: true },
            { text: "पत्थर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नियोलिथिक' (Neolithic) एक ग्रीक शब्द है जो 'नियोस' (Neos) और 'लिथोस' (Lithos) से मिलकर बना है, जिसका अर्थ क्रमशः <b>'नवीन'</b> और 'पत्थर' होता है, अर्थात 'नवीन पाषाण युग'।"
    },
    {
        question: "प्रश्न 50. कौन सा नवपाषाणिक स्थल गंगा नदी के तट पर स्थित है?",
        answers: shuffle([
            { text: "बुर्जहोम", correct: false },
            { text: "मेहरगढ़", correct: false },
            { text: "चिरांद", correct: true },
            { text: "हल्लूर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>चिरांद</b>, बिहार के सारण जिले में <b>गंगा, घाघरा और गंडक नदियों के संगम</b> के पास स्थित है, जो इसे व्यापार और परिवहन के लिए एक रणनीतिक स्थान बनाता था।"
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