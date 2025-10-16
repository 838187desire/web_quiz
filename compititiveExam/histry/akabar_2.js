const questions = [
    {
        topHeading: "अकबर पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'अकबरनामा' और 'आईन-ए-अकबरी' की रचना किसने की?",
        answers: shuffle([
            { text: "फैजी", correct: false },
            { text: "बदायूंनी", correct: false },
            { text: "अबुल फजल", correct: true },
            { text: "राजा टोडरमल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अबुल फजल अकबर के नवरत्नों में से एक थे।<br><br><i class='fa-solid fa-angles-right icon'></i> 'अकबरनामा' अकबर के शासनकाल का इतिहास है और 'आईन-ए-अकबरी' इसी का तीसरा भाग है, जिसमें अकबर के प्रशासन का विस्तृत वर्णन है।"
    },
    {
        question: "प्रश्न 2. अकबर के दरबार के 'नवरत्नों' में से कौन नहीं था?",
        answers: shuffle([
            { text: "बीरबल", correct: false },
            { text: "तानसेन", correct: false },
            { text: "बैरम खान", correct: true },
            { text: "अब्दुर्रहीम खान-ए-खाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैरम खान अकबर के संरक्षक थे, लेकिन वे अकबर के वयस्क होने पर दरबार की राजनीति से अलग हो गए थे और नवरत्नों का हिस्सा नहीं थे।"
    },
    {
        question: "प्रश्न 3. प्रसिद्ध संगीतकार तानसेन का मूल नाम क्या था?",
        answers: shuffle([
            { text: "महेश दास", correct: false },
            { text: "रामतनु पांडे", correct: true },
            { text: "बाज बहादुर", correct: false },
            { text: "हरिदास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तानसेन, जो 'संगीत सम्राट' कहलाते हैं, का जन्म एक हिंदू परिवार में हुआ था और उनका वास्तविक नाम रामतनु पांडे था।"
    },
    {
        question: "प्रश्न 4. अकबर के दरबार में आने से पहले तानसेन किस राजा के दरबारी थे?",
        answers: shuffle([
            { text: "मेवाड़ के राणा उदय सिंह", correct: false },
            { text: "मालवा के बाज बहादुर", correct: false },
            { text: "रीवा के राजा रामचंद्र", correct: true },
            { text: "आमेर के राजा भारमल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकबर ने रीवा के राजा रामचंद्र से तानसेन को अपने दरबार में भेजने का अनुरोध किया था।"
    },
    {
        question: "प्रश्न 5. महाभारत का फारसी भाषा में 'रज्मनामा' (युद्धों की पुस्तक) नाम से अनुवाद किसके पर्यवेक्षण में हुआ?",
        answers: shuffle([
            { text: "अबुल फजल", correct: false },
            { text: "फैजी", correct: true },
            { text: "बदायूंनी", correct: false },
            { text: "टोडरमल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकबर के राजकवि और अबुल फजल के भाई, फैजी के नेतृत्व में एक अनुवाद विभाग की स्थापना की गई थी, जहाँ संस्कृत के कई ग्रंथों का फारसी में अनुवाद हुआ।"
    },
    {
        question: "प्रश्न 6. 'रामायण' का फारसी में अनुवाद किसने किया था?",
        answers: shuffle([
            { text: "अबुल फजल", correct: false },
            { text: "फैजी", correct: false },
            { text: "अब्दुर कादिर बदायूंनी", correct: true },
            { text: "इब्राहिम सरहिन्दी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बदायूंनी एक कट्टर सुन्नी मुसलमान था और उसने अनिच्छा से अकबर के आदेश पर रामायण और महाभारत का फारसी में अनुवाद किया था।"
    },
    {
        question: "प्रश्न 7. अकबर ने 'इलाहाबाद' शहर की स्थापना की, इसका प्राचीन नाम क्या था?",
        answers: shuffle([
            { text: "काशी", correct: false },
            { text: "पाटलिपुत्र", correct: false },
            { text: "प्रयाग", correct: true },
            { text: "कन्नौज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकबर ने 1583 में गंगा-यमुना के संगम पर स्थित प्राचीन तीर्थस्थल प्रयाग में एक मजबूत किले का निर्माण करवाया और शहर का नाम 'इलाहाबाद' (अल्लाह का शहर) रखा।"
    },
    {
        question: "प्रश्न 8. अकबर ने अपनी राजधानी आगरा से फतेहपुर सीकरी क्यों स्थानांतरित की?",
        answers: shuffle([
            { text: "a) आगरा में पानी की कमी के कारण", correct: false },
            { text: "b) सूफी संत शेख सलीम चिश्ती के प्रति सम्मान दर्शाने के लिए", correct: false },
            { text: "c) एक नई और भव्य राजधानी बनाने की इच्छा", correct: false },
            { text: "b और c दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकबर ने शेख सलीम चिश्ती के सम्मान में और एक सुनियोजित नई राजधानी बनाने के उद्देश्य से 1571 में फतेहपुर सीकरी का निर्माण शुरू करवाया।"
    },
    {
        question: "प्रश्न 9. फतेहपुर सीकरी की किस इमारत की वास्तुकला बौद्ध विहारों से प्रेरित है?",
        answers: shuffle([
            { text: "दीवान-ए-खास", correct: false },
            { text: "जोधाबाई का महल", correct: false },
            { text: "पंच महल", correct: true },
            { text: "जामा मस्जिद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पंच महल एक पाँच मंजिला इमारत है, जिसका डिजाइन नालंदा के बौद्ध विहारों की वास्तुकला से प्रेरित माना जाता है।"
    },
    {
        question: "प्रश्न 10. अकबर ने 'जरी कलम' (सोने की कलम) की उपाधि किस सुलेखक को दी थी?",
        answers: shuffle([
            { text: "मीर सैयद अली", correct: false },
            { text: "अब्दुस्समद", correct: false },
            { text: "मुहम्मद हुसैन कश्मीरी", correct: true },
            { text: "दसवंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुहम्मद हुसैन कश्मीर के एक प्रसिद्ध सुलेखक थे, जिनकी लिखावट की सुंदरता से प्रभावित होकर अकबर ने उन्हें यह उपाधि दी।"
    },
    {
        question: "प्रश्न 11. 'दसवंत' और 'बसावन' किसके दरबार के प्रसिद्ध चित्रकार थे?",
        answers: shuffle([
            { text: "हुमायूँ", correct: false },
            { text: "जहाँगीर", correct: false },
            { text: "शाहजहाँ", correct: false },
            { text: "अकबर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दसवंत और बसावन अकबर के दरबार के अग्रणी चित्रकार थे, जिन्होंने 'रज्मनामा' और 'अकबरनामा' जैसी पांडुलिपियों को चित्रित करने में महत्वपूर्ण भूमिका निभाई।"
    },
    {
        question: "प्रश्न 12. आगरा का लाल किला किसने बनवाया था?",
        answers: shuffle([
            { text: "सिकंदर लोदी", correct: false },
            { text: "शेरशाह सूरी", correct: false },
            { text: "अकबर", correct: true },
            { text: "शाहजहाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि यहाँ पहले से एक किला था, लेकिन वर्तमान भव्य किले का निर्माण लाल बलुआ पत्थर से अकबर ने 1565 में शुरू करवाया था।"
    },
    {
        question: "प्रश्न 13. अकबर का मकबरा कहाँ स्थित है?",
        answers: shuffle([
            { text: "दिल्ली", correct: false },
            { text: "आगरा", correct: false },
            { text: "फतेहपुर सीकरी", correct: false },
            { text: "सिकंदरा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकबर का मकबरा आगरा के पास सिकंदरा में है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी योजना स्वयं अकबर ने बनाई थी, लेकिन इसे उसके पुत्र जहाँगीर ने पूरा करवाया।"
    },
    {
        question: "प्रश्न 14. अकबर के मकबरे की एक अनूठी विशेषता क्या है?",
        answers: shuffle([
            { text: "यह संगमरमर से बना है", correct: false },
            { text: "यह गुंबद-विहीन है", correct: true },
            { text: "इसमें चार मीनारें हैं", correct: false },
            { text: "यह भूमिगत है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस्लामी वास्तुकला के विपरीत, अकबर के मकबरे के ऊपर कोई गुंबद नहीं है, बल्कि यह एक पाँच मंजिला पिरामिड के आकार का है, जो बौद्ध विहारों की वास्तुकला से प्रेरित लगता है।"
    },
    {
        question: "प्रश्न 15. अकबर के शासनकाल के दौरान ध्रुपद गायन के प्रमुख गायक कौन थे?",
        answers: shuffle([
            { text: "अमीर खुसरो और बैजू बावरा", correct: false },
            { text: "तानसेन और हरिदास", correct: true },
            { text: "बाज बहादुर और रानी रूपमती", correct: false },
            { text: "रामदास और बैजू बावरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्वामी हरिदास, तानसेन के गुरु थे।<br><br><i class='fa-solid fa-angles-right icon'></i> तानसेन, हरिदास, बैजू बावरा और रामदास अकबर के समय के ध्रुपद गायन के चार महान स्तंभ माने जाते हैं।"
    },
    {
        question: "प्रश्न 16. बैरम खान का पतन कब और कैसे हुआ?",
        answers: shuffle([
            { text: "1558, युद्ध में हार के कारण", correct: false },
            { text: "1560, अकबर द्वारा उसे पद से हटाने के कारण", correct: true },
            { text: "1561, उसकी स्वाभाविक मृत्यु हो गई", correct: false },
            { text: "1562, उसे विद्रोह के लिए मार दिया गया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकबर अब स्वयं शासन करना चाहता था और दरबार के अन्य अमीरों के उकसाने पर, उसने 1560 में बैरम खान को संरक्षक के पद से हटाकर मक्का जाने का आदेश दिया।"
    },
    {
        question: "प्रश्न 17. बैरम खान की हत्या कहाँ और किसने की?",
        answers: shuffle([
            { text: "दिल्ली में, आधम खान ने", correct: false },
            { text: "आगरा में, महाम अनगा ने", correct: false },
            { text: "पाटन, गुजरात में, एक अफगान ने", correct: true },
            { text: "लाहौर में, कामरान ने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मक्का जाते समय, गुजरात के पाटन में, मुबारक खान नामक एक अफगान ने अपने पिता की मृत्यु का बदला लेने के लिए 1561 में बैरम खान की हत्या कर दी।"
    },
    {
        question: "प्रश्न 18. 1560 से 1562 तक की अवधि को 'पर्दा शासन' या 'पेटिकोट सरकार' क्यों कहा जाता है?",
        answers: shuffle([
            { text: "क्योंकि इस दौरान महिलाएँ शासन करती थीं", correct: false },
            { text: "क्योंकि अकबर पर्दे के पीछे से शासन करता था", correct: false },
            { text: "क्योंकि अकबर अपनी धाय माँ महाम अनगा और उसके रिश्तेदारों के प्रभाव में था", correct: true },
            { text: "क्योंकि इस दौरान हरम का प्रभाव शून्य था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस अवधि में, युवा अकबर पर उसकी धाय माँ महाम अनगा, उसके पुत्र आधम खान और पुत्री जीजी अनगा का काफी राजनीतिक प्रभाव था।"
    },
    {
        question: "प्रश्न 19. 'अटक का किला' किसने और क्यों बनवाया था?",
        answers: shuffle([
            { text: "शेरशाह ने, अफगानों को रोकने के लिए", correct: false },
            { text: "अकबर ने, उत्तर-पश्चिम सीमा को सुरक्षित करने के लिए", correct: true },
            { text: "जहाँगीर ने, शिकार के लिए", correct: false },
            { text: "शाहजहाँ ने, एक महल के रूप में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उजबेकों और अन्य जनजातियों के विद्रोहों से उत्तर-पश्चिम सीमा को सुरक्षित करने के लिए अकबर ने सिंधु नदी के तट पर अटक का किला बनवाया।"
    },
    {
        question: "प्रश्न 20. अकबर ने पहली बार किस राजपूत राजघराने से वैवाहिक संबंध स्थापित किए?",
        answers: shuffle([
            { text: "मेवाड़ के सिसोदिया", correct: false },
            { text: "रणथंभौर के हाड़ा", correct: false },
            { text: "मारवाड़ के राठौड़", correct: false },
            { text: "आमेर (जयपुर) के कछवाहा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1562 में, आमेर के राजा भारमल ने अपनी पुत्री हरखा बाई (जिन्हें अक्सर जोधा बाई कहा जाता है) का विवाह अकबर से किया।"
    },
    {
        question: "प्रश्न 21. अबुल फजल की हत्या किसने करवाई थी?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "सलीम (जहाँगीर)", correct: true },
            { text: "राजा मान सिंह", correct: false },
            { text: "औरंगजेब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब शहजादा सलीम ने अकबर के खिलाफ विद्रोह किया, तो उसने दक्षिण से लौट रहे अबुल फजल की हत्या ओरछा के बुंदेला सरदार वीर सिंह बुंदेला के हाथों करवा दी, क्योंकि वह अबुल फजल को अपने और अपने पिता के बीच सुलह में बाधक मानता था।"
    },
    {
        question: "प्रश्न 22. 'आईन-ए-दहसाला' प्रणाली कब लागू की गई?",
        answers: shuffle([
            { text: "1575", correct: false },
            { text: "1579", correct: false },
            { text: "1580", correct: true },
            { text: "1582", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजा टोडरमल ने 1580 ई. में इस नई भू-राजस्व प्रणाली को अंतिम रूप देकर लागू किया था।"
    },
    {
        question: "प्रश्न 23. अकबर ने कालिंजर का किला किससे जीता था?",
        answers: shuffle([
            { text: "रानी दुर्गावती", correct: false },
            { text: "राजा रामचंद्र", correct: true },
            { text: "राजा मान सिंह", correct: false },
            { text: "सुरजन हाड़ा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1569 में, रीवा के राजा रामचंद्र ने कालिंजर का किला मुगलों को सौंप दिया।"
    },
    {
        question: "प्रश्न 24. अकबर के समय में 'करोड़ी' कौन थे?",
        answers: shuffle([
            { text: "एक करोड़ की मनसब वाले", correct: false },
            { text: "एक करोड़ की आय वाले व्यापारी", correct: false },
            { text: "एक करोड़ दाम राजस्व वसूलने वाले अधिकारी", correct: true },
            { text: "एक करोड़ की सेना के नायक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1573 में, अकबर ने खालसा भूमि पर राजस्व अधिकारियों की नियुक्ति की, जिन्हें अपने क्षेत्र से एक करोड़ दाम वसूलने का लक्ष्य दिया जाता था।"
    },
    {
        question: "प्रश्न 25. 'तुजुक-ए-बाबरी' का फारसी में अनुवाद 'बाबरनामा' नाम से किसने किया था?",
        answers: shuffle([
            { text: "फैजी", correct: false },
            { text: "अबुल फजल", correct: false },
            { text: "अब्दुर्रहीम खान-ए-खाना", correct: true },
            { text: "बदायूंनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैरम खान के पुत्र और अकबर के नवरत्न, अब्दुर्रहीम खान-ए-खाना ने चगताई तुर्की में लिखी गई बाबर की आत्मकथा का फारसी में अनुवाद किया।"
    },
    {
        question: "प्रश्न 26. अकबर ने किस धर्म से 'अग्नि पूजा' का सिद्धांत ग्रहण किया था?",
        answers: shuffle([
            { text: "हिंदू धर्म", correct: false },
            { text: "जैन धर्म", correct: false },
            { text: "ईसाई धर्म", correct: false },
            { text: "पारसी धर्म", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दस्तूर मेहरजी राणा से प्रभावित होकर, अकबर ने अपने दरबार में पवित्र अग्नि को प्रज्वलित रखने की प्रथा शुरू की, जो पारसी धर्म का एक महत्वपूर्ण तत्व है।"
    },
    {
        question: "प्रश्न 27. 'लीलावती', जो गणित पर एक संस्कृत ग्रंथ है, का फारसी में अनुवाद किसने किया?",
        answers: shuffle([
            { text: "अबुल फजल", correct: false },
            { text: "फैजी", correct: true },
            { text: "बदायूंनी", correct: false },
            { text: "टोडरमल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकबर के राजकवि फैजी ने भास्कर द्वितीय की प्रसिद्ध गणित पुस्तक 'लीलावती' का फारसी में अनुवाद किया।"
    },
    {
        question: "प्रश्न 28. अकबर के समय में प्रांतों (सूबों) को किसमें विभाजित किया गया था?",
        answers: shuffle([
            { text: "परगना", correct: false },
            { text: "खालसा", correct: false },
            { text: "जागीर", correct: false },
            { text: "सरकार (जिला)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रशासनिक क्रम था: साम्राज्य -> सूबा (प्रांत) -> सरकार (जिला) -> परगना (तहसील) -> ग्राम।"
    },
    {
        question: "प्रश्न 29. फतेहपुर सीकरी में 'दीवान-ए-खास' की सबसे अनूठी विशेषता क्या है?",
        answers: shuffle([
            { text: "इसकी विशालता", correct: false },
            { text: "इसका केंद्रीय स्तंभ", correct: true },
            { text: "इसकी संगमरमर की जाली", correct: false },
            { text: "इसकी चित्रकारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीवान-ए-खास के केंद्र में एक विशाल, अलंकृत स्तंभ है, जिसके शीर्ष पर अकबर बैठता था और उसके चारों ओर बने गलियारों में उसके मंत्री बैठते थे।"
    },
    {
        question: "प्रश्न 30. अकबर ने 'इलाही संवत्' (एक नया कैलेंडर) कब शुरू किया?",
        answers: shuffle([
            { text: "1582", correct: false },
            { text: "1583", correct: false },
            { text: "1584", correct: true },
            { text: "1579", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीन-ए-इलाही की स्थापना के बाद, अकबर ने 1584 में हिजरी संवत् के स्थान पर एक नया सौर कैलेंडर 'इलाही संवत्' शुरू किया।"
    },
    {
        question: "प्रश्न 31. अकबर ने 'इलाही' प्रकार के सिक्के कब जारी किए?",
        answers: shuffle([
            { text: "1575", correct: false },
            { text: "1579", correct: false },
            { text: "1582", correct: false },
            { text: "1585", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीन-ए-इलाही के सिद्धांतों के प्रचार के लिए, उसने गोलाकार सोने और चांदी के सिक्के चलाए जिन पर 'अल्लाहु अकबर' अंकित था।"
    },
    {
        question: "प्रश्न 32. किस राजपूत राज्य ने अकबर की अधीनता अंत तक स्वीकार नहीं की?",
        answers: shuffle([
            { text: "आमेर", correct: false },
            { text: "मारवाड़", correct: false },
            { text: "बीकानेर", correct: false },
            { text: "मेवाड़", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेवाड़ (उदयपुर) एकमात्र प्रमुख राजपूत राज्य था जिसने राणा उदय सिंह और विशेषकर महाराणा प्रताप के नेतृत्व में मुगलों की संप्रभुता को कभी पूरी तरह से स्वीकार नहीं किया।"
    },
    {
        question: "प्रश्न 33. अकबर की मृत्यु कब हुई?",
        answers: shuffle([
            { text: "1601", correct: false },
            { text: "1603", correct: false },
            { text: "1605", correct: true },
            { text: "1607", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 27 अक्टूबर, 1605 को पेचिश (अतिसार) के कारण अकबर की मृत्यु हो गई।"
    },
    {
        question: "प्रश्न 34. अकबर के नवरत्नों में से कौन राजस्व विशेषज्ञ था?",
        answers: shuffle([
            { text: "बीरबल", correct: false },
            { text: "मान सिंह", correct: false },
            { text: "टोडर मल", correct: true },
            { text: "अबुल फजल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजा टोडरमल अकबर के वित्त मंत्री थे और उन्होंने ही दहसाला बंदोबस्त जैसी महत्वपूर्ण राजस्व प्रणाली विकसित की थी।"
    },
    {
        question: "प्रश्न 35. अकबर की राजपूत नीति का मुख्य उद्देश्य क्या था?",
        answers: shuffle([
            { text: "राजपूतों का धर्म परिवर्तन कराना", correct: false },
            { text: "राजपूत राज्यों को पूरी तरह से नष्ट करना", correct: false },
            { text: "राजपूतों को मित्र बनाकर साम्राज्य को मजबूत करना", correct: true },
            { text: "राजपूतों से केवल धन वसूलना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकबर ने समझा कि राजपूतों जैसे योद्धाओं को दुश्मन बनाने के बजाय, उनसे वैवाहिक और मैत्रीपूर्ण संबंध स्थापित कर उन्हें साम्राज्य का एक मजबूत स्तंभ बनाया जा सकता है।"
    },
    {
        question: "प्रश्न 36. 'तुर्क-ए-चहलगानी' को किसने समाप्त किया था?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "बलबन", correct: true },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "अकबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह प्रश्न तुलनात्मक समझ के लिए है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'चालीसा दल' का दमन दिल्ली सल्तनत के शासक बलबन ने किया था, अकबर ने नहीं।"
    },
    {
        question: "प्रश्न 37. अकबर ने किसे 'कविराय' और 'राजा' की उपाधि दी थी?",
        answers: shuffle([
            { text: "तानसेन", correct: false },
            { text: "फैजी", correct: false },
            { text: "बीरबल", correct: true },
            { text: "टोडरमल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बीरबल अपनी हाजिरजवाबी, बुद्धिमत्ता और काव्यात्मक प्रतिभा के लिए जाने जाते थे, जिससे प्रसन्न होकर अकबर ने उन्हें ये उपाधियाँ दी थीं।"
    },
    {
        question: "प्रश्न 38. 'मुन्तखब-उत-तवारीख' नामक पुस्तक, जिसमें अकबर की नीतियों की आलोचना की गई है, किसने लिखी?",
        answers: shuffle([
            { text: "अबुल फजल", correct: false },
            { text: "फैजी", correct: false },
            { text: "निजामुद्दीन अहमद", correct: false },
            { text: "अब्दुर कादिर बदायूंनी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बदायूंनी एक कट्टरपंथी इतिहासकार था जो अकबर की उदार धार्मिक नीति से असहमत था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने अपनी यह पुस्तक छिपकर लिखी थी।"
    },
    {
        question: "प्रश्न 39. अकबर के शासनकाल में प्रधानमंत्री को क्या कहा जाता था?",
        answers: shuffle([
            { text: "मीर बख्शी", correct: false },
            { text: "सूबेदार", correct: false },
            { text: "वकील या वजीर", correct: true },
            { text: "काजी-उल-कुजात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रधानमंत्री के लिए 'वकील' पद का प्रयोग होता था, हालांकि बाद में अकबर ने राजस्व और वित्तीय शक्तियों को अलग कर 'दीवान' या 'वजीर' का पद अधिक महत्वपूर्ण बना दिया।"
    },
    {
        question: "प्रश्न 40. अकबर ने 'फतेहपुर सीकरी' को अपनी राजधानी कब तक बनाए रखा?",
        answers: shuffle([
            { text: "1571-1580", correct: false },
            { text: "1571-1585", correct: true },
            { text: "1571-1590", correct: false },
            { text: "1571-1605", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पानी की कमी और उत्तर-पश्चिम सीमा पर अशांति के कारण, अकबर ने 1585 में अपनी राजधानी लाहौर स्थानांतरित कर दी।"
    },
    {
        question: "प्रश्न 41. 'स्वेच्छा से मनसबदारी स्वीकार करने वाला' पहला राजपूत शासक कौन था?",
        answers: shuffle([
            { text: "राणा उदय सिंह", correct: false },
            { text: "राजा भारमल", correct: true },
            { text: "राव चंद्रसेन", correct: false },
            { text: "सुरजन हाड़ा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1562 में, आमेर के कछवाहा शासक राजा भारमल पहले राजपूत राजा थे जिन्होंने स्वेच्छा से अकबर की अधीनता स्वीकार की और अपनी पुत्री का विवाह उससे किया।"
    },
    {
        question: "प्रश्न 42. अकबर ने किस चित्रकार को 'सीरी कलम' (मीठी कलम) की उपाधि दी थी?",
        answers: shuffle([
            { text: "दसवंत", correct: false },
            { text: "बसावन", correct: false },
            { text: "मीर सैयद अली", correct: false },
            { text: "अब्दुस्समद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अब्दुस्समद एक कुशल चित्रकार थे, जिन्हें हुमायूँ अपने साथ फारस से लाया था।<br><br><i class='fa-solid fa-angles-right icon'></i> अकबर ने उनकी कला के सम्मान में यह उपाधि दी।"
    },
    {
        question: "प्रश्न 43. अकबर ने अपनी राजधानी लाहौर कब स्थानांतरित की?",
        answers: shuffle([
            { text: "1571", correct: false },
            { text: "1575", correct: false },
            { text: "1581", correct: false },
            { text: "1585", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर-पश्चिम सीमा पर उजबेकों और अन्य कबीलों की गतिविधियों पर नजर रखने के लिए, अकबर ने 1585 से 1598 तक लाहौर को अपनी राजधानी बनाए रखा।"
    },
    {
        question: "प्रश्न 44. 'तबकात-ए-अकबरी' की रचना किसने की?",
        answers: shuffle([
            { text: "अबुल फजल", correct: false },
            { text: "बदायूंनी", correct: false },
            { text: "निजामुद्दीन अहमद", correct: true },
            { text: "फैजी सरहिन्दी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तबकात-ए-अकबरी' अकबर के शासनकाल का एक महत्वपूर्ण गैर-सरकारी ऐतिहासिक स्रोत है, जिसकी रचना निजामुद्दीन अहमद ने की थी।"
    },
    {
        question: "प्रश्न 45. 'आइन-ए-अकबरी' के अनुसार, अकबर के समय में कितने सूबे थे?",
        answers: shuffle([
            { text: "10", correct: false },
            { text: "12", correct: true },
            { text: "15", correct: false },
            { text: "18", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अबुल फजल ने 'आईन-ए-अकबरी' में 12 सूबों का उल्लेख किया है।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में बरार, खानदेश और अहमदनगर की विजय के बाद यह संख्या 15 हो गई।"
    },
    {
        question: "प्रश्न 46. अकबर के दरबार में आने वाला पहला अंग्रेज व्यक्ति कौन था?",
        answers: shuffle([
            { text: "कैप्टन हॉकिन्स", correct: false },
            { text: "सर टॉमस रो", correct: false },
            { text: "रॉल्फ फिच", correct: true },
            { text: "जॉन मिल्डेनहॉल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रॉल्फ फिच एक अंग्रेज व्यापारी था जो 1583-91 के दौरान भारत आया और उसने आगरा तथा फतेहपुर सीकरी की यात्रा की।"
    },
    {
        question: "प्रश्न 47. किस राजपूत राजा ने अपनी पुत्री का विवाह सलीम (जहाँगीर) से किया था?",
        answers: shuffle([
            { text: "राजा भारमल", correct: false },
            { text: "राजा मान सिंह", correct: false },
            { text: "राजा भगवान दास", correct: true },
            { text: "राणा प्रताप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आमेर के राजा भगवान दास (भारमल के पुत्र) ने अपनी पुत्री मान बाई का विवाह शहजादा सलीम से किया था, जिनसे खुसरो का जन्म हुआ।"
    },
    {
        question: "प्रश्न 48. अकबर ने सती प्रथा के खिलाफ क्या कदम उठाए?",
        answers: shuffle([
            { text: "इसे पूरी तरह से प्रतिबंधित कर दिया", correct: false },
            { text: "इसे प्रोत्साहित किया", correct: false },
            { text: "विधवाओं को पुनर्विवाह की अनुमति दी", correct: false },
            { text: "आदेश दिया कि किसी भी स्त्री को उसकी इच्छा के विरुद्ध सती न किया जाए", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उसने सती प्रथा को पूरी तरह से गैर-कानूनी तो नहीं बनाया, लेकिन उसने यह सुनिश्चित करने का प्रयास किया कि यह स्वेच्छा से हो, न कि किसी दबाव में।"
    },
    {
        question: "प्रश्न 49. अकबर ने ईसाई धर्म के बारे में जानने के लिए जेसुइट पादरियों को कहाँ से आमंत्रित किया था?",
        answers: shuffle([
            { text: "रोम", correct: false },
            { text: "पुर्तगाल", correct: false },
            { text: "गोवा", correct: true },
            { text: "इंग्लैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकबर ने गोवा में पुर्तगाली वायसराय को पत्र लिखकर ईसाई धर्म के विद्वानों को भेजने का अनुरोध किया, जिसके बाद फादर एक्वाविवा और मोनसेरात फतेहपुर सीकरी आए।"
    },
    {
        question: "प्रश्न 50. अकबर की मृत्यु किस बीमारी से हुई?",
        answers: shuffle([
            { text: "चेचक", correct: false },
            { text: "क्षय रोग", correct: false },
            { text: "अतिसार (पेचिश)", correct: true },
            { text: "दिल का दौरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1605 में, अकबर पेचिश या खूनी दस्त की बीमारी से गंभीर रूप से पीड़ित हो गया और इसी के कारण उसकी मृत्यु हो गई।"
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