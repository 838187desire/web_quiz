const questions = [
    {
        topHeading: "सल्तनत काल पर आधारित 50 MCQs, part_3 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. सल्तनत स्थापत्य की 'अष्टभुजीय मकबरा' शैली का जन्मदाता किसे कहा जाता है?",
        answers: shuffle([
            { text: "खिलजी वंश", correct: false },
            { text: "तुगलक वंश", correct: false },
            { text: "सैय्यद वंश", correct: false },
            { text: "लोदी वंश", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोदी काल में <b>अष्टभुजीय मकबरों</b> का निर्माण एक विशिष्ट शैली बन गया।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसकी शुरुआत सैय्यद काल में हुई और <b>लोदी काल</b> में यह अपने चरम पर पहुँची, जैसे <b>सिकंदर लोदी का मकबरा</b>।"
    },
    {
        question: "प्रश्न 2. किस सुल्तान ने होली के त्योहार में सार्वजनिक रूप से भाग लिया?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "फिरोजशाह तुगलक", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: true },
            { text: "सिकंदर लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मुहम्मद बिन तुगलक</b> अपनी धार्मिक सहिष्णुता के लिए जाना जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> और वह हिंदुओं के त्योहारों, विशेषकर <b>होली</b>, में व्यक्तिगत रूप से भाग लेता था।"
    },
    {
        question: "प्रश्न 3. 'चचनामा' किस क्षेत्र के इतिहास से संबंधित ग्रंथ है?",
        answers: shuffle([
            { text: "पंजाब", correct: false },
            { text: "बंगाल", correct: false },
            { text: "सिंध", correct: true },
            { text: "गुजरात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>'चचनामा'</b> अरबों द्वारा <b>सिंध विजय</b> का विस्तृत वर्णन करने वाला एक महत्वपूर्ण फारसी ग्रंथ है।"
    },
    {
        question: "प्रश्न 4. सल्तनत काल में 'पैगंबर का सेनापति' की उपाधि किसने धारण की?",
        answers: shuffle([
            { text: "मुबारक शाह खिलजी", correct: false },
            { text: "खुसरव शाह", correct: true },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोजशाह तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>खुसरव शाह</b>, जो एक धर्मांतरित हिंदू था, ने खिलजी वंश के बाद कुछ समय के लिए शासन किया।<br><br><i class='fa-solid fa-angles-right icon'></i> और 'पैगंबर का सेनापति' जैसी उपाधि धारण की।"
    },
    {
        question: "प्रश्न 5. 'ताज-उल-मासिर' के लेखक कौन हैं?",
        answers: shuffle([
            { text: "अमीर खुसरो", correct: false },
            { text: "हसन निजामी", correct: true },
            { text: "मिनहाज-उस-सिराज", correct: false },
            { text: "जियाउद्दीन बरनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>'ताज-उल-मासिर'</b> को दिल्ली सल्तनत का पहला आधिकारिक इतिहास माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसमें <b>कुतुबुद्दीन ऐबक और इल्तुतमिश</b> के शासनकाल की घटनाओं का वर्णन है।"
    },
    {
        question: "प्रश्न 6. मंगोलों का सर्वाधिक आक्रमण किसके शासनकाल में हुआ?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: true },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोजशाह तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अलाउद्दीन खिलजी</b> के समय में मंगोलों ने <b>सबसे अधिक और सबसे भयानक आक्रमण</b> किए।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन उसने सफलतापूर्वक इन सभी आक्रमणों का सामना किया।"
    },
    {
        question: "प्रश्न 7. सल्तनत काल में वह कौन सा पहला सुल्तान था जिसने अकाल संहिता (Famine Code) तैयार करवाई?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: true },
            { text: "फिरोजशाह तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दोआब में भीषण अकाल के बाद, <b>मुहम्मद बिन तुगलक</b> ने अकाल पीड़ितों को राहत देने और भविष्य के लिए योजना बनाने हेतु एक <b>अकाल संहिता</b> तैयार करवाई थी।"
    },
    {
        question: "प्रश्न 8. सल्तनत काल में 'तुगलमा युद्ध नीति' का प्रयोग किसने किया?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "तैमूर लंग", correct: false },
            { text: "बाबर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह प्रश्न सल्तनत के अंत से जुड़ा है।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>बाबर</b> ने पानीपत के प्रथम युद्ध में उज्बेकों से सीखी गई 'तुगलमा' युद्ध पद्धति का प्रयोग किया, जिसमें सेना को विभिन्न टुकड़ियों में बाँटकर दुश्मन को चारों ओर से घेरा जाता है।"
    },
    {
        question: "प्रश्न 9. 'ढाई दिन का झोपड़ा' मस्जिद के स्थान पर पहले कौन सी संरचना थी?",
        answers: shuffle([
            { text: "एक बौद्ध विहार", correct: false },
            { text: "एक जैन मंदिर", correct: false },
            { text: "एक संस्कृत विद्यालय", correct: true },
            { text: "एक हिंदू मंदिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका निर्माण मूल रूप से चौहान शासक <b>विग्रहराज चतुर्थ (बीसलदेव)</b> द्वारा निर्मित एक <b>संस्कृत विद्यालय</b> और मंदिर के स्थान पर किया गया था।"
    },
    {
        question: "प्रश्न 10. सल्तनत काल में 'शर्ब' क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का पेय", correct: false },
            { text: "सिंचाई कर", correct: true },
            { text: "व्यापारिक कर", correct: false },
            { text: "एक प्रकार का वस्त्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>फिरोज शाह तुगलक</b> ने जो नहरें बनवाई थीं, उनसे सिंचित भूमि पर उपज का <b>1/10 भाग</b> 'हक-ए-शर्ब' या सिंचाई कर के रूप में वसूला जाता था।"
    },
    {
        question: "प्रश्न 11. किस सुल्तान ने योग्यता के आधार पर पद देना शुरू किया, न कि वंश के आधार पर?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: true },
            { text: "फिरोजशाह तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मुहम्मद बिन तुगलक</b> ने धर्म या जाति की परवाह किए बिना, <b>योग्यता के आधार पर</b> भारतीय मुसलमानों, हिंदुओं और विदेशियों को भी उच्च पदों पर नियुक्त किया।"
    },
    {
        question: "प्रश्न 12. कुतुब मीनार की पांचवीं मंजिल का निर्माण किसने करवाया था?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "फिरोज शाह तुगलक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिजली गिरने से कुतुब मीनार की चौथी मंजिल क्षतिग्रस्त हो गई थी।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसकी मरम्मत <b>फिरोज शाह तुगलक</b> ने करवाई और एक <b>पांचवीं मंजिल</b> भी जुड़वा दी।"
    },
    {
        question: "प्रश्न 13. सल्तनत काल में 'उलेमा' कौन थे?",
        answers: shuffle([
            { text: "सैन्य कमांडर", correct: false },
            { text: "राजस्व अधिकारी", correct: false },
            { text: "मुस्लिम धर्मशास्त्री और कानून के विद्वान", correct: true },
            { text: "शिल्पकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उलेमा' मुस्लिम विद्वानों का वर्ग था जो <b>शरीयत (इस्लामी कानून)</b> की व्याख्या करते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> और राज्य के धार्मिक और न्यायिक मामलों पर गहरा प्रभाव रखते थे।"
    },
    {
        question: "प्रश्न 14. सल्तनत काल में संगीत पर पहली फारसी पुस्तक 'गुनायत-उल-मुन्या' किसके काल में लिखी गई?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "बलबन", correct: false },
            { text: "फिरोज शाह तुगलक", correct: true },
            { text: "सिकंदर लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुजरात के गवर्नर के अनुरोध पर, <b>फिरोज शाह तुगलक</b> के काल में भारतीय संगीत पर आधारित इस ग्रंथ की रचना की गई थी।"
    },
    {
        question: "प्रश्न 15. किस सुल्तान ने चांदी के टंके के स्थान पर 'अदली' नामक सिक्का चलाया?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "ग्यासुद्दीन तुगलक", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: true },
            { text: "फिरोजशाह तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मुहम्मद बिन तुगलक</b> ने मुद्रा प्रणाली में कई प्रयोग किए।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसमें उसने चांदी के टंके (175 ग्रेन) के स्थान पर 140 ग्रेन वजन का 'अदली' नामक नया सिक्का चलाया था।"
    },
    {
        question: "प्रश्न 16. 'सल्तनत काल का अकबर' किसे कहा जाता है?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोज शाह तुगलक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि वह धार्मिक रूप से असहिष्णु था, लेकिन अपने लोक कल्याणकारी कार्यों, नहरों, अस्पतालों, शहरों के निर्माण और प्रशासनिक सुधारों के कारण कुछ इतिहासकार उसे 'सल्तनत काल का अकबर' कहते हैं।"
    },
    {
        question: "प्रश्न 17. सल्तनत काल में 'मुहतसिब' नामक अधिकारी का क्या कार्य था?",
        answers: shuffle([
            { text: "बाजार की कीमतों पर नियंत्रण", correct: false },
            { text: "लोगों के आचरण पर नजर रखना और शरीयत का पालन करवाना", correct: false },
            { text: "माप-तौल की जाँच करना", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुहतसिब एक बहुउद्देश्यीय अधिकारी था।<br><br><i class='fa-solid fa-angles-right icon'></i> जो यह सुनिश्चित करता था कि लोग सार्वजनिक रूप से शरीयत के अनुसार आचरण करें, साथ ही वह बाजारों में माप-तौल और कीमतों की भी निगरानी करता था।"
    },
    {
        question: "प्रश्न 18. सल्तनत काल में घोड़े के नाल के आकार की मेहराब का प्रयोग सबसे पहले कहाँ किया गया?",
        answers: shuffle([
            { text: "कुतुब मीनार", correct: false },
            { text: "अलाई दरवाजा", correct: true },
            { text: "इल्तुतमिश का मकबरा", correct: false },
            { text: "बलबन का मकबरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अलाई दरवाजा</b> में पहली बार वैज्ञानिक विधि से बनी गुंबद और घोड़े की नाल के आकार की मेहराब का प्रयोग किया गया।<br><br><i class='fa-solid fa-angles-right icon'></i> जो सल्तनत वास्तुकला में एक महत्वपूर्ण विकास था।"
    },
    {
        question: "प्रश्न 19. सल्तनत काल में 'जवाबित' क्या थे?",
        answers: shuffle([
            { text: "धार्मिक कानून", correct: false },
            { text: "कृषि संबंधी कानून", correct: false },
            { text: "सुल्तान द्वारा बनाए गए राज्य कानून", correct: true },
            { text: "व्यापारिक नियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जवाबित' वे नियम और कानून थे जो शरीयत पर आधारित नहीं होते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> बल्कि <b>सुल्तान द्वारा राज्य की प्रशासनिक आवश्यकताओं के अनुसार</b> बनाए जाते थे।"
    },
    {
        question: "प्रश्न 20. दिल्ली सल्तनत के पतन का एक मुख्य कारण क्या था?",
        answers: shuffle([
            { text: "मंगोल आक्रमण", correct: false },
            { text: "कमजोर उत्तराधिकारी और सामंती व्यवस्था", correct: true },
            { text: "राजपूतों का प्रतिरोध", correct: false },
            { text: "आर्थिक संकट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फिरोज शाह तुगलक के बाद कोई भी योग्य सुल्तान नहीं हुआ।<br><br><i class='fa-solid fa-angles-right icon'></i> साथ ही, इक्तादारी प्रणाली के वंशानुगत हो जाने से प्रांतीय गवर्नर बहुत शक्तिशाली हो गए और सल्तनत का विघटन हो गया।"
    },
    {
        question: "प्रश्न 21. सल्तनत काल में 'अमीर-ए-हाजिब' कौन होता था?",
        answers: shuffle([
            { text: "गुप्तचर प्रमुख", correct: false },
            { text: "मुख्य न्यायाधीश", correct: false },
            { text: "दरबारी शिष्टाचार की देखरेख करने वाला अधिकारी", correct: true },
            { text: "विदेश मंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमीर-ए-हाजिब दरबार का एक महत्वपूर्ण अधिकारी था।<br><br><i class='fa-solid fa-angles-right icon'></i> जो यह सुनिश्चित करता था कि सभी दरबारी सुल्तान के समक्ष उचित <b>शिष्टाचार का पालन</b> करें और वह लोगों को सुल्तान से मिलवाता था।"
    },
    {
        question: "प्रश्न 22. बलबन ने अपनी शक्ति को समेकित करने के बाद कौन सी भव्य उपाधि धारण की?",
        answers: shuffle([
            { text: "सुल्तान-ए-आजम", correct: false },
            { text: "सिकंदर-ए-सानी", correct: false },
            { text: "जिल्ले-इलाही (ईश्वर की छाया)", correct: true },
            { text: "अमीर-उल-मोमिनीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बलबन ने राजा के पद को दैवीय रूप देने के लिए <b>'नियाबत-ए-खुदाई'</b> (ईश्वर का प्रतिनिधि) और 'जिल्ले-इलाही' (ईश्वर की छाया) जैसी उपाधियाँ धारण कीं।"
    },
    {
        question: "प्रश्न 23. सल्तनत काल में किस फसल की खेती व्यापक रूप से नहीं होती थी?",
        answers: shuffle([
            { text: "गेहूँ", correct: false },
            { text: "चावल", correct: false },
            { text: "गन्ना", correct: false },
            { text: "तम्बाकू", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>तम्बाकू</b> की खेती भारत में 17वीं शताब्दी में पुर्तगालियों द्वारा शुरू की गई थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए यह सल्तनत काल में मौजूद नहीं थी।"
    },
    {
        question: "प्रश्न 24. 'चरखा' का प्रयोग भारत में किस काल में लोकप्रिय हुआ?",
        answers: shuffle([
            { text: "मौर्य काल", correct: false },
            { text: "गुप्त काल", correct: false },
            { text: "सल्तनत काल", correct: true },
            { text: "मुगल काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माना जाता है कि 13वीं-14वीं शताब्दी में तुर्कों के आगमन के साथ भारत में सूत कातने के लिए चरखे का प्रयोग लोकप्रिय हुआ।<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे कपड़ा उत्पादन में क्रांति आ गई।"
    },
    {
        question: "प्रश्न 25. 'चार मीनार' जो कि दौलताबाद में है, का निर्माण किसने करवाया था?",
        answers: shuffle([
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "अलाउद्दीन बहमन शाह", correct: true },
            { text: "फिरोजशाह बहमनी", correct: false },
            { text: "महमूद गवां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह हैदराबाद की चारमीनार से अलग है।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>बहमनी साम्राज्य</b> के संस्थापक <b>अलाउद्दीन बहमन शाह</b> ने दिल्ली पर विजय के प्रतीक के रूप में इसका निर्माण करवाया था।"
    },
    {
        question: "प्रश्न 26. सल्तनत काल में कागज का प्रयोग कब शुरू हुआ?",
        answers: shuffle([
            { text: "10वीं शताब्दी", correct: false },
            { text: "11वीं शताब्दी", correct: false },
            { text: "13वीं शताब्दी", correct: true },
            { text: "15वीं शताब्दी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में <b>कागज</b> का प्रचलन दिल्ली सल्तनत की स्थापना के साथ (लगभग 13वीं शताब्दी में) व्यापक रूप से हुआ।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसने लेखन और प्रशासन में बहुत मदद की।"
    },
    {
        question: "प्रश्न 27. इब्राहिम लोदी और राणा सांगा के बीच कौन सा युद्ध हुआ था?",
        answers: shuffle([
            { text: "पानीपत का युद्ध", correct: false },
            { text: "खानवा का युद्ध", correct: false },
            { text: "चंदेरी का युद्ध", correct: false },
            { text: "खतौली का युद्ध", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1518 ई.</b> में मेवाड़ के राणा सांगा और इब्राहिम लोदी के बीच खतौली का युद्ध हुआ।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसमें राणा सांगा की विजय हुई।"
    },
    {
        question: "प्रश्न 28. सल्तनत काल में 'दीवान-ए-आरिज' का मुख्य कार्य क्या था?",
        answers: shuffle([
            { text: "सैनिकों की भर्ती करना और उनका हुलिया रखना", correct: false },
            { text: "सेना का निरीक्षण करना", correct: false },
            { text: "सैन्य उपकरणों की व्यवस्था करना", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीवान-ए-आरिज (या अर्ज) सैन्य मंत्री होता था।<br><br><i class='fa-solid fa-angles-right icon'></i> और वह <b>सेना की भर्ती, संगठन, रसद और निरीक्षण</b> जैसे सभी कार्यों के लिए जिम्मेदार था।"
    },
    {
        question: "प्रश्न 29. किस सूफी संत के नाम पर कुतुब मीनार का नामकरण किया गया?",
        answers: shuffle([
            { text: "निजामुद्दीन औलिया", correct: false },
            { text: "मोइनुद्दीन चिश्ती", correct: false },
            { text: "कुतुबुद्दीन बख्तियार काकी", correct: true },
            { text: "बाबा फरीद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कुतुबुद्दीन ऐबक</b> प्रसिद्ध चिश्ती संत ख्वाजा कुतुबुद्दीन बख्तियार काकी का बहुत सम्मान करता था।<br><br><i class='fa-solid fa-angles-right icon'></i> और उन्हीं की स्मृति में उसने कुतुब मीनार का निर्माण शुरू करवाया।"
    },
    {
        question: "प्रश्न 30. सल्तनत काल में 'महसूल' शब्द का क्या अर्थ था?",
        answers: shuffle([
            { text: "वेतन", correct: false },
            { text: "भू-राजस्व", correct: true },
            { text: "दान", correct: false },
            { text: "उपहार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फारसी में 'महसूल' का अर्थ उपज या आय होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> और सल्तनत काल में इसका प्रयोग सामान्यतः <b>भू-राजस्व या लगान</b> के लिए किया जाता था।"
    },
    {
        question: "प्रश्न 31. भारत में 'मकबरा निर्माण शैली' का जनक किसे कहा जाता है?",
        answers: shuffle([
            { text: "कुतुबुद्दीन ऐबक", correct: false },
            { text: "इल्तुतमिश", correct: true },
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इल्तुतमिश</b> ने अपने पुत्र नसीरुद्दीन महमूद का मकबरा (सुल्तानगढ़ी) बनवाया।<br><br><i class='fa-solid fa-angles-right icon'></i> जो भारत में निर्मित <b>पहला मकबरा</b> माना जाता है। उसने दिल्ली में स्वयं का मकबरा भी बनवाया।"
    },
    {
        question: "प्रश्न 32. किस सुल्तान ने शराब पीने, बेचने और सामाजिक समारोहों पर प्रतिबंध लगा दिया था?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: true },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोजशाह तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्रोहों को रोकने के लिए, <b>अलाउद्दीन खिलजी</b> का मानना था कि अमीरों का मिलना-जुलना और शराब पीना षड्यंत्रों को जन्म देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए उसने इन पर कठोर प्रतिबंध लगा दिए।"
    },
    {
        question: "प्रश्न 33. सल्तनत काल में 'पैदल सैनिकों' को क्या कहा जाता था?",
        answers: shuffle([
            { text: "सवार", correct: false },
            { text: "पायक", correct: true },
            { text: "बरीद", correct: false },
            { text: "मामलुक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सल्तनत की सेना में पैदल चलने वाले सैनिकों को 'पायक' कहा जाता था।"
    },
    {
        question: "प्रश्न 34. \"हर राजा के सिर पर मौजूद ताज में हजारों मोती किसानों की खून से सनी आंखों से गिरे हुए आँसुओं से बने होते हैं।\" यह प्रसिद्ध कथन किसका है?",
        answers: shuffle([
            { text: "जियाउद्दीन बरनी", correct: false },
            { text: "हसन निजामी", correct: false },
            { text: "अमीर खुसरो", correct: true },
            { text: "इब्न बतूता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि <b>अमीर खुसरो</b> दरबारी कवि थे, फिर भी उन्होंने अपनी रचनाओं में आम जनता, विशेषकर <b>किसानों की दुर्दशा</b> का मार्मिक चित्रण किया है।"
    },
    {
        question: "प्रश्न 35. कौन सा सुल्तान स्वयं को 'अफरासियाब' वंश का वंशज मानता था?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "बलबन", correct: true },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "ग्यासुद्दीन तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपनी और अपने वंश की श्रेष्ठता साबित करने के लिए, <b>बलबन</b> ने दावा किया कि वह ईरान के पौराणिक शाहनामा के नायक 'अफरासियाब' का वंशज है।"
    },
    {
        question: "प्रश्न 36. सल्तनत काल के दौरान 'टका' किस धातु का सिक्का था?",
        answers: shuffle([
            { text: "सोना", correct: false },
            { text: "चांदी", correct: true },
            { text: "तांबा", correct: false },
            { text: "कांसा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इल्तुतमिश द्वारा शुरू किया गया 'टका' <b>चांदी</b> का एक मानक सिक्का था।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि 'जीतल' तांबे का सिक्का था।"
    },
    {
        question: "प्रश्न 37. किस सुल्तान ने 'सीरी' को अपनी राजधानी बनाया था?",
        answers: shuffle([
            { text: "जलालुद्दीन खिलजी", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: true },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोजशाह तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगोल आक्रमणों से सुरक्षा के लिए, <b>अलाउद्दीन खिलजी</b> ने 1303 ई. में दिल्ली के पास 'सीरी' नामक एक नई किलेबंद <b>राजधानी</b> का निर्माण करवाया।"
    },
    {
        question: "प्रश्न 38. 'तुगलकनामा' के रचनाकार कौन हैं?",
        answers: shuffle([
            { text: "जियाउद्दीन बरनी", correct: false },
            { text: "अमीर खुसरो", correct: true },
            { text: "इब्न बतूता", correct: false },
            { text: "ग्यासुद्दीन तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तुगलकनामा' <b>अमीर खुसरो</b> की अंतिम ऐतिहासिक मसनवी है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसमें उन्होंने ग्यासुद्दीन तुगलक की खुसरव शाह पर विजय का वर्णन किया है।"
    },
    {
        question: "प्रश्न 39. अलाउद्दीन खिलजी ने देवगिरि पर पहला आक्रमण कब किया था, जब वह सुल्तान नहीं था?",
        answers: shuffle([
            { text: "1290 ई.", correct: false },
            { text: "1296 ई.", correct: true },
            { text: "1301 ई.", correct: false },
            { text: "1303 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कड़ा के गवर्नर के रूप में, अलाउद्दीन ने 1296 ई. में देवगिरि के यादव राजा रामचंद्र देव पर आक्रमण कर अपार संपत्ति लूटी थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी धन ने उसे सुल्तान बनने में मदद की।"
    },
    {
        question: "प्रश्न 40. किस सुल्तान के शासनकाल में सल्तनत का साम्राज्य सबसे विस्तृत था?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: true },
            { text: "फिरोजशाह तुगलक", correct: false },
            { text: "सिकंदर लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मुहम्मद बिन तुगलक</b> के समय में, सल्तनत का विस्तार उत्तर में हिमालय से लेकर दक्षिण में मदुरै तक और पूर्व में बंगाल से लेकर पश्चिम में सिंध तक था।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, इसी के काल में विघटन भी शुरू हुआ।"
    },
    {
        question: "प्रश्न 41. सल्तनत काल में 'मुनहियन' कौन होते थे?",
        answers: shuffle([
            { text: "न्यायाधीश", correct: false },
            { text: "राजस्व अधिकारी", correct: false },
            { text: "गुप्त सूचना देने वाले (मुखबिर)", correct: true },
            { text: "शिल्पकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मुनहियन' <b>गुप्त सूचनादाता</b> होते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> जो 'बरीदों' (गुप्तचरों) को अपनी रिपोर्ट देते थे। यह एक प्रभावी जासूसी तंत्र का हिस्सा था।"
    },
    {
        question: "प्रश्न 42. किस सुल्तान ने अनुवाद विभाग की स्थापना की ताकि संस्कृत ग्रंथों का फारसी में अनुवाद किया जा सके?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोज शाह तुगलक", correct: true },
            { text: "सिकंदर लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नगरकोट से लाए गए 1300 संस्कृत पांडुलिपियों का फारसी में अनुवाद कराने के लिए फिरोज शाह तुगलक ने एक <b>अनुवाद विभाग</b> की स्थापना की थी।"
    },
    {
        question: "प्रश्न 43. सल्तनत काल में 'सल्तनत की सबसे बड़ी मस्जिद' कौन सी थी?",
        answers: shuffle([
            { text: "कुव्वत-उल-इस्लाम मस्जिद", correct: false },
            { text: "मोठ की मस्जिद", correct: false },
            { text: "बेगमपुरी मस्जिद", correct: true },
            { text: "अदीना मस्जिद (पांडुआ)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मुहम्मद बिन तुगलक</b> द्वारा अपनी नई राजधानी जहांपनाह में बनाई गई बेगमपुरी मस्जिद दिल्ली सल्तनत की <b>सबसे बड़ी मस्जिद</b> मानी जाती है।"
    },
    {
        question: "प्रश्न 44. बलबन का वास्तविक नाम क्या था?",
        answers: shuffle([
            { text: "जौना खान", correct: false },
            { text: "फरीद", correct: false },
            { text: "बहाउद्दीन", correct: true },
            { text: "गाजी मलिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुल्तान बनने से पहले बलबन का मूल नाम बहाउद्दीन था।<br><br><i class='fa-solid fa-angles-right icon'></i> वह <b>इल्तुतमिश</b> का एक तुर्क गुलाम था।"
    },
    {
        question: "प्रश्न 45. 'खुतबा' क्या होता था?",
        answers: shuffle([
            { text: "एक प्रकार का कर", correct: false },
            { text: "एक शाही आदेश", correct: false },
            { text: "शुक्रवार की नमाज के दौरान शासक के नाम का पढ़ा जाने वाला उपदेश", correct: true },
            { text: "एक प्रकार का वस्त्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खुतबा' में शासक का नाम शामिल होना उसकी <b>संप्रभुता</b> का प्रतीक माना जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शुक्रवार की नमाज के दौरान पढ़ा जाता था।"
    },
    {
        question: "प्रश्न 46. सल्तनत काल में 'अमीर-ए-शिकार' का पद किससे संबंधित था?",
        answers: shuffle([
            { text: "न्याय विभाग", correct: false },
            { text: "कृषि विभाग", correct: false },
            { text: "शाही शिकार का आयोजन", correct: true },
            { text: "नौसेना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अधिकारी सुल्तान के शिकार अभियानों की व्यवस्था और प्रबंधन करता था।"
    },
    {
        question: "प्रश्न 47. अलाउद्दीन खिलजी ने भू-राजस्व को उपज का कितना भाग निर्धारित किया?",
        answers: shuffle([
            { text: "1/3", correct: false },
            { text: "1/4", correct: false },
            { text: "1/2", correct: true },
            { text: "2/3", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपनी आय को अधिकतम करने के लिए, <b>अलाउद्दीन खिलजी</b> ने भू-राजस्व की दर को बढ़ाकर उपज का 50% या 1/2 भाग कर दिया।<br><br><i class='fa-solid fa-angles-right icon'></i> जो सल्तनत काल में <b>सर्वोच्च दर</b> थी।"
    },
    {
        question: "प्रश्न 48. वह कौन सा सुल्तान था जो अपनी वेशभूषा के लिए जाना जाता था और कभी-कभी दरबार में महिलाओं के कपड़े पहनकर आ जाता था?",
        answers: shuffle([
            { text: "कैकुबाद", correct: false },
            { text: "मुबारक शाह खिलजी", correct: true },
            { text: "खुसरव शाह", correct: false },
            { text: "नसीरुद्दीन महमूद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कुतुबुद्दीन मुबारक शाह खिलजी</b> एक विलासी और चरित्रहीन शासक था।<br><br><i class='fa-solid fa-angles-right icon'></i> जो ऐसी अजीब हरकतें किया करता था।"
    },
    {
        question: "प्रश्न 49. सल्तनत काल में 'मदरसा-ए-नासिरी' का निर्माण किसने करवाया था?",
        answers: shuffle([
            { text: "नसीरुद्दीन महमूद", correct: false },
            { text: "बलबन", correct: false },
            { text: "इल्तुतमिश", correct: true },
            { text: "रजिया सुल्तान", correct: false }
        ]), 
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इल्तुतमिश</b> ने अपने पुत्र शहजादा <b>नसीरुद्दीन महमूद</b> की याद में दिल्ली में इस मदरसे का निर्माण करवाया था।"
    },
    {
        question: "प्रश्न 50. सल्तनत काल में 'इद्रार' क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का कर", correct: false },
            { text: "एक सैन्य पद", correct: false },
            { text: "विद्वानों और धार्मिक लोगों को दी जाने वाली पेंशन या वृत्ति", correct: true },
            { text: "एक प्रकार का सिक्का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुल्तान विद्वानों, कवियों और धर्मगुरुओं को उनके जीवनयापन के लिए 'इद्रार' नामक <b>वित्तीय सहायता या पेंशन</b> प्रदान करते थे।"
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