const questions = [
    {
        topHeading: "मुगल साम्राज्य पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. अकबर ने 'इबादतखाना' (पूजा गृह) की स्थापना कहाँ की थी?",
        answers: shuffle([
            { text: "आगरा", correct: false },
            { text: "दिल्ली", correct: false },
            { text: "फतेहपुर सीकरी", correct: true },
            { text: "लाहौर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1575 ई. में, अकबर ने फतेहपुर सीकरी में <b>'इबादतखाना'</b> की स्थापना की।<br><br><i class='fa-solid fa-angles-right icon'></i> जहाँ वह विभिन्न धर्मों के विद्वानों के साथ धार्मिक और आध्यात्मिक विषयों पर चर्चा करता था।"
    },
    {
        question: "प्रश्न 2. अकबर ने 'मजहरनामा' (अमोघत्व की घोषणा) कब जारी किया?",
        answers: shuffle([
            { text: "1575 ई.", correct: false },
            { text: "1579 ई.", correct: true },
            { text: "1581 ई.", correct: false },
            { text: "1582 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>'मजहर'</b> की घोषणा करके अकबर ने स्वयं को धार्मिक मामलों में सर्वोच्च निर्णायक घोषित कर दिया, जिससे उलेमा वर्ग का प्रभाव कम हो गया।"
    },
    {
        question: "प्रश्न 3. 'दीन-ए-इलाही' या 'तौहीद-ए-इलाही' (ईश्वरीय एकेश्वरवाद) की स्थापना किसने की?",
        answers: shuffle([
            { text: "बाबर", correct: false },
            { text: "हुमायूँ", correct: false },
            { text: "अकबर", correct: true },
            { text: "शाहजहाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1582 ई. में, अकबर ने सभी धर्मों के अच्छे सिद्धांतों को मिलाकर <b>'दीन-ए-इलाही'</b> नामक एक नए विचार को प्रवर्तित किया, जो एक सूफी पंथ की तरह था।"
    },
    {
        question: "प्रश्न 4. दीन-ए-इलाही को स्वीकार करने वाला एकमात्र हिंदू कौन था?",
        answers: shuffle([
            { text: "राजा मानसिंह", correct: false },
            { text: "राजा टोडरमल", correct: false },
            { text: "राजा भगवानदास", correct: false },
            { text: "बीरबल (महेश दास)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकबर के नवरत्नों में से, केवल बीरबल (महेश दास) ही एकमात्र हिंदू दरबारी थे जिन्होंने <b>दीन-ए-इलाही</b> को अपनाया था।"
    },
    {
        question: "प्रश्न 5. अकबर की भू-राजस्व प्रणाली 'दहसाला बंदोबस्त' को लागू करने का श्रेय किसे दिया जाता है?",
        answers: shuffle([
            { text: "बैरम खान", correct: false },
            { text: "राजा मानसिंह", correct: false },
            { text: "राजा टोडरमल", correct: true },
            { text: "अबुल फजल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजा टोडरमल, जो अकबर के वित्त मंत्री थे, ने 1580 ई. में <b>'दहसाला'</b> या <b>'जब्ती'</b> प्रणाली की शुरुआत की।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें पिछले दस वर्षों की औसत उपज के आधार पर लगान निर्धारित किया जाता था।"
    },
    {
        question: "प्रश्न 6. अकबर ने कौन सी सैन्य और प्रशासनिक प्रणाली शुरू की?",
        answers: shuffle([
            { text: "इक्ता प्रणाली", correct: false },
            { text: "जागीरदारी प्रणाली", correct: false },
            { text: "मनसबदारी प्रणाली", correct: true },
            { text: "जमींदारी प्रणाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मनसबदारी प्रणाली</b> में प्रत्येक अधिकारी (मनसबदार) को एक 'मनसब' (पद या रैंक) दिया जाता था, जो उसके वेतन और उसके द्वारा रखे जाने वाले सैनिकों की संख्या को निर्धारित करता था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह <b>'जात'</b> और <b>'सवार'</b> में विभाजित था।"
    },
    {
        question: "प्रश्न 7. 'आईन-ए-अकबरी' और 'अकबरनामा' की रचना किसने की?",
        answers: shuffle([
            { text: "फैजी", correct: false },
            { text: "बदायूंनी", correct: false },
            { text: "अबुल फजल", correct: true },
            { text: "अब्दुर्रहीम खान-ए-खाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अबुल फजल अकबर के नवरत्नों में से एक और उसके मुख्य सलाहकार थे।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>'अकबरनामा'</b> अकबर के शासनकाल का आधिकारिक इतिहास है, और <b>'आईन-ए-अकबरी'</b> इसी का तीसरा भाग है जिसमें अकबर के प्रशासन का विस्तृत वर्णन है।"
    },
    {
        question: "प्रश्न 8. महाभारत का फारसी में 'रज्मनामा' (युद्धों की पुस्तक) नाम से अनुवाद किसके काल में हुआ?",
        answers: shuffle([
            { text: "बाबर", correct: false },
            { text: "हुमायूँ", correct: false },
            { text: "अकबर", correct: true },
            { text: "जहाँगीर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकबर ने एक अनुवाद विभाग की स्थापना की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>बदायूंनी, फैजी</b> और <b>नकीब खान</b> जैसे विद्वानों ने मिलकर महाभारत का फारसी में अनुवाद किया।"
    },
    {
        question: "प्रश्न 9. मुगल काल में 'मिर्जा राजा' की उपाधि किसे दी गई थी?",
        answers: shuffle([
            { text: "राजा मानसिंह", correct: false },
            { text: "राजा जयसिंह", correct: true },
            { text: "राजा बीरबल", correct: false },
            { text: "राजा टोडरमल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आमेर के राजा जयसिंह प्रथम को शाहजहाँ ने <b>'मिर्जा राजा'</b> की उपाधि दी थी।"
    },
    {
        question: "प्रश्न 10. अकबर के दरबार के प्रसिद्ध संगीतकार 'तानसेन' का मूल नाम क्या था?",
        answers: shuffle([
            { text: "महेश दास", correct: false },
            { text: "राम तनु पांडे", correct: true },
            { text: "मकरंद पांडे", correct: false },
            { text: "बाज बहादुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तानसेन, जो <b>'संगीत सम्राट'</b> के नाम से विख्यात हैं, का वास्तविक नाम राम तनु पांडे था।<br><br><i class='fa-solid fa-angles-right icon'></i> वे पहले रीवा के राजा राम चंद्र के दरबार में थे।"
    },
    {
        question: "प्रश्न 11. अकबर ने 'जरी कलम' (सोने की कलम) की उपाधि किसे दी थी?",
        answers: shuffle([
            { text: "बसावन", correct: false },
            { text: "दसवंत", correct: false },
            { text: "मुहम्मद हुसैन कश्मीरी", correct: true },
            { text: "अब्दुस्समद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुहम्मद हुसैन कश्मीरी एक प्रसिद्ध सुलेखक (कैलिग्राफर) थे, जिन्हें उनकी सुंदर लिखावट के लिए अकबर ने यह उपाधि दी थी।"
    },
    {
        question: "प्रश्न 12. अकबर ने 'सीरी कलम' (मीठी कलम) की उपाधि किसे दी थी?",
        answers: shuffle([
            { text: "मीर सैयद अली", correct: false },
            { text: "दसवंत", correct: false },
            { text: "अब्दुस्समद", correct: true },
            { text: "बसावन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अब्दुस्समद एक महान चित्रकार थे, जिन्हें उनकी उत्कृष्ट चित्रकला के लिए अकबर ने <b>'सीरी कलम'</b> की उपाधि से सम्मानित किया था।"
    },
    {
        question: "प्रश्न 13. अकबर के नवरत्नों में कौन शामिल नहीं था?",
        answers: shuffle([
            { text: "बीरबल", correct: false },
            { text: "टोडरमल", correct: false },
            { text: "मान सिंह", correct: false },
            { text: "बैरम खान", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैरम खान अकबर के संरक्षक थे, लेकिन वे उसके <b>'नवरत्न'</b> (नौरत्नों) के समूह का हिस्सा नहीं थे।"
    },
    {
        question: "प्रश्न 14. अकबर का मकबरा कहाँ स्थित है?",
        answers: shuffle([
            { text: "दिल्ली", correct: false },
            { text: "फतेहपुर सीकरी", correct: false },
            { text: "आगरा", correct: false },
            { text: "सिकंदरा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकबर का मकबरा आगरा के पास सिकंदरा नामक स्थान पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका निर्माण कार्य अकबर ने शुरू किया था और जहाँगीर ने इसे पूरा करवाया।"
    },
    {
        question: "प्रश्न 15. अकबर का उत्तराधिकारी कौन बना?",
        answers: shuffle([
            { text: "मुराद", correct: false },
            { text: "दानियाल", correct: false },
            { text: "सलीम (जहाँगीर)", correct: true },
            { text: "खुसरो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकबर की मृत्यु के बाद, उसका पुत्र सलीम <b>'नूरुद्दीन मुहम्मद जहाँगीर बादशाह गाजी'</b> की उपाधि के साथ 1605 ई. में सिंहासन पर बैठा।"
    },
    {
        question: "प्रश्न 16. जहाँगीर के किस पुत्र ने उसके खिलाफ विद्रोह किया था?",
        answers: shuffle([
            { text: "परवेज", correct: false },
            { text: "खुर्रम", correct: false },
            { text: "शहरयार", correct: false },
            { text: "खुसरो मिर्जा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1606 ई. में, जहाँगीर के सबसे बड़े पुत्र खुसरो ने सिंहासन के लिए विद्रोह कर दिया था, जिसे जहाँगीर ने दबा दिया।"
    },
    {
        question: "प्रश्न 17. जहाँगीर ने किस सिख गुरु को खुसरो की सहायता करने के आरोप में मृत्युदंड दिया था?",
        answers: shuffle([
            { text: "गुरु हरगोबिंद", correct: false },
            { text: "गुरु तेग बहादुर", correct: false },
            { text: "गुरु अर्जुन देव", correct: true },
            { text: "गुरु हरराय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खुसरो ने भागकर सिखों के पांचवें गुरु, गुरु अर्जुन देव जी से शरण और आर्थिक सहायता ली थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी कारण जहाँगीर ने उन्हें 1606 ई. में मृत्युदंड दे दिया।"
    },
    {
        question: "प्रश्न 18. 'न्याय की जंजीर' किस मुगल बादशाह ने लगवाई थी?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "जहाँगीर", correct: true },
            { text: "शाहजहाँ", correct: false },
            { text: "औरंगजेब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जहाँगीर ने आगरा के किले की शाहबुर्ज और यमुना तट पर स्थित पत्थर के खंभे के बीच एक सोने की जंजीर लगवाई थी।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसे बजाकर कोई भी व्यक्ति सीधे बादशाह से न्याय की गुहार लगा सकता था।"
    },
    {
        question: "प्रश्न 19. किस मुगल बादशाह के शासनकाल को 'चित्रकला का स्वर्ण युग' कहा जाता है?",
        answers: shuffle([
            { text: "हुमायूँ", correct: false },
            { text: "अकबर", correct: false },
            { text: "जहाँगीर", correct: true },
            { text: "शाहजहाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जहाँगीर स्वयं चित्रकला का एक महान पारखी था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसके काल में चित्रकला अपने चरमोत्कर्ष पर पहुँच गई।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>उस्ताद मंसूर</b> और <b>अबुल हसन</b> उसके दरबार के प्रसिद्ध चित्रकार थे।"
    },
    {
        question: "प्रश्न 20. 'नूरजहाँ' का वास्तविक नाम क्या था?",
        answers: shuffle([
            { text: "अर्जुमंद बानो बेगम", correct: false },
            { text: "लाडली बेगम", correct: false },
            { text: "मेहरुन्निसा", correct: true },
            { text: "जहाँआरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नूरजहाँ एक ईरानी अमीर मिर्जा गियास बेग की पुत्री थी।<br><br><i class='fa-solid fa-angles-right icon'></i> उसका मूल नाम <b>मेहरुन्निसा</b> था।"
    },
    {
        question: "प्रश्न 21. जहाँगीर ने नूरजहाँ से कब विवाह किया?",
        answers: shuffle([
            { text: "1605 ई.", correct: false },
            { text: "1611 ई.", correct: true },
            { text: "1615 ई.", correct: false },
            { text: "1620 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1611 ई. में जहाँगीर ने मेहरुन्निसा (जो शेर अफगन की विधवा थी) से विवाह किया।<br><br><i class='fa-solid fa-angles-right icon'></i> और उसे 'नूर महल' और बाद में 'नूरजहाँ' (संसार की रोशनी) की उपाधियाँ दीं।"
    },
    {
        question: "प्रश्न 22. 'नूरजहाँ गुट' (जुंटा) में कौन शामिल नहीं था?",
        answers: shuffle([
            { text: "मिर्जा गियास बेग (एत्मादुद्दौला)", correct: false },
            { text: "आसफ खान", correct: false },
            { text: "शहजादा खुर्रम (शाहजहाँ)", correct: false },
            { text: "शहजादा खुसरो", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस शक्तिशाली गुट में नूरजहाँ, उसके पिता एत्मादुद्दौला, उसका भाई आसफ खान और शहजादा खुर्रम शामिल थे।<br><br><i class='fa-solid fa-angles-right icon'></i> जिन्होंने कुछ समय तक मुगल राजनीति को नियंत्रित किया।"
    },
    {
        question: "प्रश्न 23. 'एत्मादुद्दौला का मकबरा' कहाँ स्थित है?",
        answers: shuffle([
            { text: "दिल्ली", correct: false },
            { text: "आगरा", correct: true },
            { text: "लाहौर", correct: false },
            { text: "फतेहपुर सीकरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह मकबरा नूरजहाँ ने अपने पिता मिर्जा गियास बेग की याद में बनवाया था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत में पूरी तरह से संगमरमर से बनी पहली मुगल इमारत है, जिसमें <b>'पिएत्रा ड्यूरा'</b> (पच्चीकारी) का काम किया गया है।"
    },
    {
        question: "प्रश्न 24. किस मुगल बादशाह के दरबार में ब्रिटिश राजा जेम्स प्रथम का दूत 'कैप्टन हॉकिन्स' आया था?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "जहाँगीर", correct: true },
            { text: "शाहजहाँ", correct: false },
            { text: "औरंगजेब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैप्टन विलियम हॉकिन्स 1608 ई. में ईस्ट इंडिया कंपनी के लिए व्यापारिक सुविधाएँ प्राप्त करने के उद्देश्य से जहाँगीर के दरबार में आया था।"
    },
    {
        question: "प्रश्न 25. सर टॉमस रो किस मुगल बादशाह के दरबार में आया था?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "जहाँगीर", correct: true },
            { text: "शाहजहाँ", correct: false },
            { text: "औरंगजेब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सर टॉमस रो 1615 ई. में जेम्स प्रथम के राजदूत के रूप में जहाँगीर के दरबार में आया।<br><br><i class='fa-solid fa-angles-right icon'></i> और उसने व्यापारिक फरमान प्राप्त करने में सफलता पाई।"
    },
    {
        question: "प्रश्न 26. जहाँगीर का मकबरा कहाँ स्थित है?",
        answers: shuffle([
            { text: "आगरा", correct: false },
            { text: "दिल्ली", correct: false },
            { text: "काबुल", correct: false },
            { text: "शाहदरा (लाहौर)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जहाँगीर की मृत्यु कश्मीर से लौटते समय हुई थी।<br><br><i class='fa-solid fa-angles-right icon'></i> उसे लाहौर के पास शाहदरा में रावी नदी के किनारे दफनाया गया।"
    },
    {
        question: "प्रश्न 27. जहाँगीर का उत्तराधिकारी कौन था?",
        answers: shuffle([
            { text: "खुसरो", correct: false },
            { text: "परवेज", correct: false },
            { text: "शहरयार", correct: false },
            { text: "खुर्रम (शाहजहाँ)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जहाँगीर की मृत्यु के बाद, उसके पुत्र खुर्रम ने अपने भाई शहरयार को हराकर <b>'अबुल मुजफ्फर शहाबुद्दीन मुहम्मद साहिब किरन-ए-सानी शाहजहाँ बादशाह गाजी'</b> की उपाधि के साथ सिंहासन प्राप्त किया।"
    },
    {
        question: "प्रश्न 28. किस मुगल बादशाह के शासनकाल को 'स्थापत्य कला का स्वर्ण युग' कहा जाता है?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "जहाँगीर", correct: false },
            { text: "शाहजहाँ", correct: true },
            { text: "औरंगजेब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शाहजहाँ को इमारतें बनवाने का बहुत शौक था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसके काल में ताजमहल, दिल्ली का लाल किला, जामा मस्जिद और आगरा के किले में कई भव्य इमारतें बनीं, जिनमें संगमरमर का व्यापक उपयोग हुआ।"
    },
    {
        question: "प्रश्न 29. 'ताजमहल' का निर्माण शाहजहाँ ने किसकी याद में करवाया था?",
        answers: shuffle([
            { text: "नूरजहाँ", correct: false },
            { text: "जहाँआरा", correct: false },
            { text: "रोशनआरा", correct: false },
            { text: "मुमताज महल (अर्जुमंद बानो बेगम)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ताजमहल शाहजहाँ की प्रिय पत्नी <b>मुमताज महल</b> का मकबरा है, जिनकी मृत्यु 1631 ई. में प्रसव पीड़ा के दौरान हुई थी।"
    },
    {
        question: "प्रश्न 30. ताजमहल के मुख्य वास्तुकार (डिजाइनर) कौन माने जाते हैं?",
        answers: shuffle([
            { text: "शाहजहाँ", correct: false },
            { text: "उस्ताद अहमद लाहौरी", correct: true },
            { text: "उस्ताद ईसा", correct: false },
            { text: "अमानत खान शिराजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि कई लोगों ने इसके निर्माण में योगदान दिया, लेकिन उस्ताद अहमद लाहौरी को ताजमहल का प्रमुख वास्तुकार माना जाता है।"
    },
    {
        question: "प्रश्न 31. दिल्ली का 'लाल किला' और 'जामा मस्जिद' किसने बनवाया?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "जहाँगीर", correct: false },
            { text: "शाहजहाँ", correct: true },
            { text: "औरंगजेब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शाहजहाँ ने अपनी नई राजधानी शाहजहाँनाबाद (पुरानी दिल्ली) में लाल बलुआ पत्थर से <b>लाल किले</b> का और भारत की सबसे बड़ी मस्जिद, जामा मस्जिद का निर्माण करवाया।"
    },
    {
        question: "प्रश्न 32. 'मयूर सिंहासन' (तख्त-ए-ताऊस) का निर्माण किसने करवाया था?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "जहाँगीर", correct: false },
            { text: "शाहजहाँ", correct: true },
            { text: "औरंगजेब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक विश्व प्रसिद्ध, रत्नों से जड़ा हुआ सिंहासन था जिसे शाहजहाँ ने बनवाया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके मुख्य कलाकार बेबादल खान थे।"
    },
    {
        question: "प्रश्न 33. मयूर सिंहासन पर बैठने वाला अंतिम मुगल बादशाह कौन था?",
        answers: shuffle([
            { text: "शाह आलम द्वितीय", correct: false },
            { text: "बहादुर शाह जफर", correct: false },
            { text: "मुहम्मद शाह 'रंगीला'", correct: true },
            { text: "जहाँदार शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1739 ई. में फारस के शासक नादिर शाह ने भारत पर आक्रमण किया।<br><br><i class='fa-solid fa-angles-right icon'></i> और मयूर सिंहासन तथा कोहिनूर हीरे को अपने साथ ले गया।"
    },
    {
        question: "प्रश्न 34. किस मुगल बादशाह ने अपनी राजधानी आगरा से दिल्ली स्थानांतरित की?",
        answers: shuffle([
            { text: "जहाँगीर", correct: false },
            { text: "अकबर", correct: false },
            { text: "औरंगजेब", correct: false },
            { text: "शाहजहाँ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1638 ई. में शाहजहाँ ने दिल्ली में 'शाहजहाँनाबाद' नामक एक नई राजधानी की नींव रखी और बाद में वहीं से शासन करने लगा।"
    },
    {
        question: "प्रश्न 35. शाहजहाँ के किस पुत्र ने 'उपनिषदों' का फारसी में 'सिर्र-ए-अकबर' (महान रहस्य) नाम से अनुवाद किया?",
        answers: shuffle([
            { text: "औरंगजेब", correct: false },
            { text: "मुराद बख्श", correct: false },
            { text: "शाह शुजा", correct: false },
            { text: "दारा शिकोह", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दारा शिकोह एक उदार और विद्वान शहजादा था, जिसने 52 उपनिषदों का फारसी में अनुवाद करवाया था।"
    },
    {
        question: "प्रश्न 36. शाहजहाँ के शासनकाल के अंत में उत्तराधिकार के लिए हुए युद्धों में किसे विजय मिली?",
        answers: shuffle([
            { text: "दारा शिकोह", correct: false },
            { text: "शाह शुजा", correct: false },
            { text: "मुराद बख्श", correct: false },
            { text: "औरंगजेब", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शाहजहाँ के पुत्रों के बीच हुए उत्तराधिकार के युद्धों (जैसे धरमत, सामूगढ़ और देवराई के युद्ध) में, औरंगजेब ने अपने सभी भाइयों को पराजित कर सिंहासन पर अधिकार कर लिया।"
    },
    {
        question: "प्रश्न 37. शाहजहाँ को उसके अंतिम दिनों में किसने और कहाँ कैद कर दिया था?",
        answers: shuffle([
            { text: "जहाँगीर ने, लाहौर के किले में", correct: false },
            { text: "औरंगजेब ने, दिल्ली के लाल किले में", correct: false },
            { text: "औरंगजेब ने, आगरा के किले में", correct: true },
            { text: "दारा शिकोह ने, ग्वालियर के किले में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सत्ता पर कब्जा करने के बाद, औरंगजेब ने अपने पिता शाहजहाँ को आगरा के किले के शाहबुर्ज में कैद कर दिया, जहाँ से वह ताजमहल को देख सकता था।<br><br><i class='fa-solid fa-angles-right icon'></i> यहीं 1666 ई. में उसकी मृत्यु हुई।"
    },
    {
        question: "प्रश्न 38. किस मुगल बादशाह को 'आलमगीर' (विश्व विजेता) के नाम से भी जाना जाता है?",
        answers: shuffle([
            { text: "शाहजहाँ", correct: false },
            { text: "जहाँगीर", correct: false },
            { text: "अकबर", correct: false },
            { text: "औरंगजेब", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> औरंगजेब ने <b>'अबुल मुजफ्फर मुहीउद्दीन मुहम्मद औरंगजेब बहादुर आलमगीर बादशाह गाजी'</b> की उपाधि धारण की थी।"
    },
    {
        question: "प्रश्न 39. किस मुगल बादशाह को 'जिंदा पीर' (जीवित संत) कहा जाता था?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "शाहजहाँ", correct: false },
            { text: "औरंगजेब", correct: true },
            { text: "बहादुर शाह प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> औरंगजेब अपने व्यक्तिगत जीवन में बहुत सादा और धर्मपरायण था।<br><br><i class='fa-solid fa-angles-right icon'></i> वह कुरान की नकलें बनाता और टोपियाँ सिलकर अपनी आजीविका कमाता था, इसलिए उसे <b>'जिंदा पीर'</b> कहा जाता था।"
    },
    {
        question: "प्रश्न 40. औरंगजेब ने किस सिख गुरु की हत्या करवाई थी?",
        answers: shuffle([
            { text: "गुरु अर्जुन देव", correct: false },
            { text: "गुरु हरगोबिंद", correct: false },
            { text: "गुरु हरकिशन", correct: false },
            { text: "गुरु तेग बहादुर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1675 ई. में, इस्लाम स्वीकार न करने के कारण औरंगजेब ने दिल्ली में सिखों के नौवें गुरु, गुरु तेग बहादुर जी की हत्या करवा दी।<br><br><i class='fa-solid fa-angles-right icon'></i> चांदनी चौक में स्थित <b>'गुरुद्वारा शीशगंज साहिब'</b> उन्हीं की शहादत का प्रतीक है।"
    },
    {
        question: "प्रश्न 41. औरंगजेब ने 'जजिया कर' को पुनः कब लागू किया?",
        answers: shuffle([
            { text: "1669 ई.", correct: false },
            { text: "1675 ई.", correct: false },
            { text: "1679 ई.", correct: true },
            { text: "1681 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपनी कट्टर इस्लामी नीतियों के तहत, औरंगजेब ने 1679 ई. में अकबर द्वारा समाप्त किए गए जजिया कर को फिर से लगा दिया।"
    },
    {
        question: "प्रश्न 42. औरंगजेब के शासनकाल में मुगल साम्राज्य का सबसे अधिक विस्तार हुआ, विशेषकर किस क्षेत्र में?",
        answers: shuffle([
            { text: "उत्तर-पश्चिम", correct: false },
            { text: "पूर्वोत्तर", correct: false },
            { text: "दक्कन (दक्षिण भारत)", correct: true },
            { text: "मध्य भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> औरंगजेब ने अपने शासनकाल का एक बड़ा हिस्सा (लगभग 25 वर्ष) दक्कन में मराठों और दक्कनी सल्तनतों (बीजापुर और गोलकुंडा) से लड़ने में बिताया।"
    },
    {
        question: "प्रश्न 43. औरंगजेब ने बीजापुर को मुगल साम्राज्य में कब मिलाया?",
        answers: shuffle([
            { text: "1681 ई.", correct: false },
            { text: "1685 ई.", correct: false },
            { text: "1686 ई.", correct: true },
            { text: "1687 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक लंबी घेराबंदी के बाद, औरंगजेब ने 1686 ई. में बीजापुर की आदिलशाही सल्तनत पर विजय प्राप्त की।"
    },
    {
        question: "प्रश्न 44. औरंगजेब ने गोलकुंडा पर कब विजय प्राप्त की?",
        answers: shuffle([
            { text: "1685 ई.", correct: false },
            { text: "1686 ई.", correct: false },
            { text: "1687 ई.", correct: true },
            { text: "1689 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1687 ई. में औरंगजेब ने गोलकुंडा के किले पर भी अधिकार कर कुतुबशाही वंश का अंत कर दिया।"
    },
    {
        question: "प्रश्न 45. 'बीबी का मकबरा' कहाँ स्थित है?",
        answers: shuffle([
            { text: "आगरा", correct: false },
            { text: "दिल्ली", correct: false },
            { text: "औरंगाबाद (महाराष्ट्र)", correct: true },
            { text: "हैदराबाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह मकबरा औरंगजेब ने अपनी पत्नी दिलरास बानो बेगम (राबिया-उद-दौरानी) की याद में बनवाया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे 'ताजमहल की फूहड़ नकल' और 'दक्कन का ताज' भी कहा जाता है।"
    },
    {
        question: "प्रश्न 46. किस मुगल बादशाह ने संगीत और नृत्य पर प्रतिबंध लगा दिया था?",
        answers: shuffle([
            { text: "शाहजहाँ", correct: false },
            { text: "जहाँगीर", correct: false },
            { text: "औरंगजेब", correct: true },
            { text: "अकबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> औरंगजेब ने संगीत को गैर-इस्लामी मानते हुए अपने दरबार में इस पर पाबंदी लगा दी थी।<br><br><i class='fa-solid fa-angles-right icon'></i> हालाँकि वह स्वयं एक कुशल वीणा वादक था।"
    },
    {
        question: "प्रश्न 47. औरंगजेब के विरुद्ध हुए जाट विद्रोह का नेतृत्व किसने किया था?",
        answers: shuffle([
            { text: "चूड़ामन और बदन सिंह", correct: false },
            { text: "गोकुला और राजाराम", correct: true },
            { text: "शिवाजी", correct: false },
            { text: "दुर्गादास राठौर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> औरंगजेब की नीतियों के खिलाफ मथुरा क्षेत्र में जाटों ने सबसे पहले गोकुला और बाद में राजाराम के नेतृत्व में विद्रोह किया।"
    },
    {
        question: "प्रश्न 48. किस मुगल बादशाह के शासनकाल में मुगल साम्राज्य का क्षेत्रफल सबसे अधिक था?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "शाहजहाँ", correct: false },
            { text: "जहाँगीर", correct: false },
            { text: "औरंगजेब", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बीजापुर और गोलकुंडा की विजय के बाद, मुगल साम्राज्य अपने चरमोत्कर्ष पर पहुँच गया।<br><br><i class='fa-solid fa-angles-right icon'></i> और काबुल से लेकर कावेरी तक फैल गया।"
    },
    {
        question: "प्रश्न 49. औरंगजेब की मृत्यु कहाँ हुई?",
        answers: shuffle([
            { text: "दिल्ली", correct: false },
            { text: "आगरा", correct: false },
            { text: "औरंगाबाद", correct: false },
            { text: "अहमदनगर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 3 मार्च 1707 को 88 वर्ष की आयु में अहमदनगर में औरंगजेब की मृत्यु हो गई।"
    },
    {
        question: "प्रश्न 50. औरंगजेब का मकबरा कहाँ स्थित है?",
        answers: shuffle([
            { text: "दिल्ली", correct: false },
            { text: "औरंगाबाद", correct: false },
            { text: "अहमदनगर", correct: false },
            { text: "खुल्दाबाद (दौलताबाद के पास)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उसकी इच्छा के अनुसार, उसे खुल्दाबाद में प्रसिद्ध सूफी संत शेख बुरहानुद्दीन गरीब की कब्र के पास एक साधारण कच्ची कब्र में दफनाया गया।"
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