const questions = [
    {
        topHeading: "मध्यपाषाण काल पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. मध्यपाषाण काल में जलवायु कैसी थी?",
        answers: shuffle([
            { text: "बहुत ठंडी और शुष्क", correct: false },
            { text: "गर्म और आर्द्र", correct: true },
            { text: "ठंडी और नम", correct: false },
            { text: "बहुत गर्म और शुष्क", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिम युग की समाप्ति के साथ, पृथ्वी की जलवायु <b>गर्म और नम</b> हो गई, जिससे <b>जंगलों का विस्तार</b> हुआ और जीव-जंतुओं तथा वनस्पतियों में परिवर्तन आया।"
    },
    {
        question: "प्रश्न 2. चौपानी-मांडो नामक स्थल क्यों महत्वपूर्ण है?",
        answers: shuffle([
            { text: "यहाँ से पशुपालन का प्राचीनतम साक्ष्य मिला है।", correct: false },
            { text: "यहाँ से जंगली चावल के उपयोग और मिट्टी के बर्तनों के प्राचीनतम साक्ष्यों में से एक मिला है।", correct: true },
            { text: "यह भारत का सबसे बड़ा मध्यपाषाणकालीन स्थल है।", correct: false },
            { text: "यहाँ से केवल पुरापाषाण काल के उपकरण मिले हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बेलन घाटी में स्थित <b>चौपानी-मांडो</b> से मध्यपाषाण काल के अंतिम चरण के संदर्भ में <b>हाथ से बने मिट्टी के बर्तनों</b> और <b>जंगली चावल के उपयोग</b> का साक्ष्य मिला है, जो नवपाषाण काल की ओर संक्रमण को दर्शाता है।"
    },
    {
        question: "प्रश्न 3. बागोर (राजस्थान) से मिले साक्ष्यों से क्या पता चलता है?",
        answers: shuffle([
            { text: "लोग केवल शिकार पर निर्भर थे", correct: false },
            { text: "लोग केवल कृषि करते थे", correct: false },
            { text: "लोग शिकार के साथ-साथ पशुपालन भी करते थे", correct: true },
            { text: "लोग केवल मछली पकड़ते थे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बागोर</b> से जंगली और पालतू दोनों प्रकार के जानवरों की हड्डियाँ मिली हैं, जो यह दर्शाता है कि यहाँ के लोग शिकार करने के साथ-साथ <b>पशुपालन की शुरुआत</b> भी कर चुके थे।"
    },
    {
        question: "प्रश्न 4. किस मध्यपाषाणकालीन स्थल से झोपड़ियों के अंदर ही कब्रें मिली हैं?",
        answers: shuffle([
            { text: "दमदमा", correct: false },
            { text: "बागोर", correct: true },
            { text: "लंघनाज", correct: false },
            { text: "बीरभानपुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बागोर</b> में कुछ शवाधान आवासीय क्षेत्र के अंदर, यानी <b>झोपड़ियों के फर्श के नीचे</b> ही बनाए गए थे।"
    },
    {
        question: "प्रश्न 5. मध्यपाषाण काल में पत्थर के अलावा किस अन्य सामग्री का उपयोग औजार बनाने के लिए बढ़ा?",
        answers: shuffle([
            { text: "लोहा", correct: false },
            { text: "तांबा", correct: false },
            { text: "हड्डी और सींग", correct: true },
            { text: "कांसा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गंगा घाटी के स्थलों (विशेषकर <b>महदहा</b>) से पता चलता है कि इस काल में <b>हड्डी और सींग</b> का उपयोग तीर की नोकें, चाकू और आभूषण बनाने के लिए बड़े पैमाने पर होने लगा था।"
    },
    {
        question: "प्रश्न 6. भीमबेटका के मध्यपाषाणकालीन चित्रों में कौन सा पशु बहुतायत से चित्रित है?",
        answers: shuffle([
            { text: "हाथी", correct: false },
            { text: "गैंडा", correct: false },
            { text: "हिरण/चीतल", correct: true },
            { text: "शेर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस काल के चित्रों में <b>हिरण, चीतल, बारहसिंगा</b> जैसे जानवरों का चित्रण सबसे अधिक हुआ है, जो उस समय उनकी प्रचुरता और शिकार में महत्व को दर्शाता है।"
    },
    {
        question: "प्रश्न 7. मध्यपाषाण काल के लोग कपड़े के रूप में क्या पहनते थे?",
        answers: shuffle([
            { text: "सूती वस्त्र", correct: false },
            { text: "ऊनी वस्त्र", correct: false },
            { text: "जानवरों की खाल और पेड़ों की छाल", correct: true },
            { text: "रेशमी वस्त्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस काल में वस्त्र निर्माण का विकास नहीं हुआ था।<br><br><i class='fa-solid fa-angles-right icon'></i> लोग अपने शरीर को ढंकने और ठंड से बचाने के लिए <b>जानवरों की खाल, पत्तियों और पेड़ों की छाल</b> का उपयोग करते थे।"
    },
    {
        question: "प्रश्न 8. भारत के पूर्वी भाग में स्थित एक महत्वपूर्ण मध्यपाषाणकालीन स्थल कौन सा है?",
        answers: shuffle([
            { text: "बागोर", correct: false },
            { text: "लंघनाज", correct: false },
            { text: "कुचाई (मयूरभंज)", correct: true },
            { text: "सराय नाहर राय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कुचाई</b>, <b>उड़ीसा के मयूरभंज</b> जिले में स्थित एक महत्वपूर्ण स्थल है, जहाँ से मध्यपाषाण काल के साथ-साथ नवपाषाण काल के भी अवशेष मिले हैं।"
    },
    {
        question: "प्रश्न 9. मध्यपाषाणकालीन शवाधानों में मृतकों को सामान्यतः किस दिशा में लिटाया जाता था?",
        answers: shuffle([
            { text: "उत्तर-दक्षिण", correct: false },
            { text: "पूर्व-पश्चिम", correct: false },
            { text: "किसी भी निश्चित दिशा में नहीं", correct: false },
            { text: "पश्चिम-पूर्व", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गंगा घाटी और बागोर जैसे कई स्थलों पर मृतकों को <b>पश्चिम-पूर्व दिशा में</b>, सिर पश्चिम की ओर करके लिटाया गया है, हालांकि इसमें कुछ भिन्नताएँ भी मिलती हैं।"
    },
    {
        question: "प्रश्न 10. मध्यपाषाणकालीन कला का स्वरूप कैसा था?",
        answers: shuffle([
            { text: "अमूर्त और प्रतीकात्मक", correct: false },
            { text: "यथार्थवादी और वर्णनात्मक", correct: true },
            { text: "केवल धार्मिक", correct: false },
            { text: "केवल सजावटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस काल की कला <b>जीवन के दृश्यों का सीधे-सीधे वर्णन</b> करती है, जैसे शिकार करना, नाचना, आदि।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अपने समय के जीवन का एक सजीव चित्रण प्रस्तुत करती है।"
    },
    {
        question: "प्रश्न 11. 'ज्यामितीय सूक्ष्मपाषाण' (Geometric Microliths) का क्या अर्थ है?",
        answers: shuffle([
            { text: "गोल आकार के उपकरण", correct: false },
            { text: "बहुत बड़े उपकरण", correct: false },
            { text: "त्रिभुज, समलंब जैसे निश्चित ज्यामितीय आकार वाले उपकरण", correct: true },
            { text: "बिना किसी आकार के उपकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्यपाषाण काल के बाद के चरण में सूक्ष्मपाषाणों को <b>त्रिभुज, समलंब और नवचंद्राकार</b> जैसे <b>मानकीकृत ज्यामितीय आकारों</b> में बनाया जाने लगा।"
    },
    {
        question: "प्रश्न 12. मध्यपाषाणकालीन लोगों के जीवन में कुत्तों का क्या उपयोग था?",
        answers: shuffle([
            { text: "भोजन के स्रोत के रूप में", correct: false },
            { text: "शिकार में सहायक और प्रहरी के रूप में", correct: true },
            { text: "परिवहन के लिए", correct: false },
            { text: "ऊन के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुत्ते मानव बस्तियों की <b>सुरक्षा</b> करने और शिकार का पता लगाने तथा उसे घेरने में मदद करते थे, जिससे वे मानव के पहले पशु साथी बने।"
    },
    {
        question: "प्रश्न 13. बागोर (राजस्थान) से मिले सूक्ष्मपाषाण उद्योग को कितने चरणों में विभाजित किया गया है?",
        answers: shuffle([
            { text: "दो", correct: false },
            { text: "तीन", correct: true },
            { text: "चार", correct: false },
            { text: "पाँच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बागोर</b> के सांस्कृतिक जमाव को <b>तीन चरणों</b> में बांटा गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> पहला चरण पूर्णतः मध्यपाषाणकालीन है, जबकि बाद के चरणों में तांबे के उपकरण और मिट्टी के बर्तन भी मिलने लगते हैं।"
    },
    {
        question: "प्रश्न 14. मध्यपाषाण काल में मानव समूहों का आकार कैसा था?",
        answers: shuffle([
            { text: "पुरापाषाण काल की तुलना में छोटा", correct: false },
            { text: "पुरापाषाण काल की तुलना में बड़ा", correct: true },
            { text: "पुरापाषाण काल के बराबर", correct: false },
            { text: "सैकड़ों लोगों के बड़े गाँव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बेहतर खाद्य सुरक्षा और अधिक स्थिर जीवन के कारण, <b>मध्यपाषाण काल में मानव समूहों का आकार बढ़ा</b> और सामाजिक संरचना अधिक जटिल हुई।"
    },
    {
        question: "प्रश्न 15. कौन सा स्थल मध्यपाषाण काल से संबंधित है और वहाँ से हाथ और पैर के निशान के शैलचित्र मिले हैं?",
        answers: shuffle([
            { text: "लेखहिया (उत्तर प्रदेश)", correct: true },
            { text: "पैसरा (बिहार)", correct: false },
            { text: "बागोर (राजस्थान)", correct: false },
            { text: "लंघनाज (गुजरात)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मिर्जापुर</b> के पास स्थित <b>लेखहिया</b> शैलाश्रय समूह में मध्यपाषाणकालीन चित्रों के साथ-साथ <b>हाथ-पैर के छापे</b> वाले चित्र भी मिलते हैं।"
    },
    {
        question: "प्रश्न 16. मध्यपाषाणकालीन अर्थव्यवस्था में 'विस्तृत स्पेक्ट्रम अर्थव्यवस्था' का क्या अर्थ है?",
        answers: shuffle([
            { text: "केवल बड़े जानवरों का शिकार", correct: false },
            { text: "केवल पौधों पर निर्भरता", correct: false },
            { text: "भोजन के लिए विविध प्रकार के पशु-पक्षियों, मछलियों और पौधों का उपयोग", correct: true },
            { text: "केवल एक ही प्रकार के भोजन पर निर्भरता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस काल में मानव ने अपने भोजन के दायरे को बहुत विस्तृत कर लिया था और वे <b>हर संभव खाद्य संसाधन</b> का उपयोग कर रहे थे, जिसे '<b>विस्तृत स्पेक्ट्रम अर्थव्यवस्था</b>' कहते हैं।"
    },
    {
        question: "प्रश्न 17. मध्यपाषाणकालीन दमदमा स्थल किस नदी के किनारे स्थित था?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: false },
            { text: "यह एक प्राचीन झील के किनारे था", correct: true },
            { text: "गोमती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गंगा घाटी के ये तीनों प्रमुख स्थल (सराय नाहर राय, महदहा, दमदमा) प्राचीन <b>गोखुर झीलों (oxbow lakes) के किनारे</b> बसे थे, जो पानी, मछली और अन्य संसाधनों का एक स्थायी स्रोत थीं।"
    },
    {
        question: "प्रश्न 18. बागोर से मिले कंकालों के विश्लेषण से क्या पता चलता है?",
        answers: shuffle([
            { text: "वे बहुत स्वस्थ और लंबे थे", correct: false },
            { text: "वे कुपोषित और बीमार थे", correct: false },
            { text: "उनमें संघर्ष और बीमारी के मिले-जुले साक्ष्य हैं", correct: true },
            { text: "वे सभी बहुत वृद्ध थे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कंकालों का अध्ययन दर्शाता है कि लोगों को गठिया जैसी बीमारियाँ थीं और उनके जीवन में <b>संघर्ष</b> भी था, लेकिन वे पुरापाषाण काल के लोगों की तुलना में थोड़ा बेहतर जीवन जी रहे थे।"
    },
    {
        question: "प्रश्न 19. मध्यपाषाण काल में मानव ने किस नए भौगोलिक क्षेत्र में बसना शुरू किया?",
        answers: shuffle([
            { text: "केवल ऊँचे पहाड़ों पर", correct: false },
            { text: "केवल घने जंगलों में", correct: false },
            { text: "गंगा के मैदानी इलाकों जैसे नए क्षेत्रों में", correct: true },
            { text: "केवल मरुस्थलीय क्षेत्रों में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरापाषाण काल में जो <b>गंगा के मैदान</b> मानव निवास के लिए अनुपयुक्त थे, वे मध्यपाषाण काल में बेहतर जलवायु और तकनीक के कारण <b>बसने योग्य</b> हो गए।"
    },
    {
        question: "प्रश्न 20. भीमबेटका में किस चित्र में एक जानवर को घायल अवस्था में और उसके चारों ओर मनुष्यों को खुशी मनाते हुए दिखाया गया है?",
        answers: shuffle([
            { text: "सूअर के शिकार का दृश्य", correct: true },
            { text: "हाथी के शिकार का दृश्य", correct: false },
            { text: "गैंडे के शिकार का दृश्य", correct: false },
            { text: "भैंसे के शिकार का दृश्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>भीमबेटका</b> का एक प्रसिद्ध चित्र एक विशाल <b>जंगली सूअर</b> को दिखाता है जिसका कई लोग मिलकर शिकार कर रहे हैं, जो सामूहिक शिकार की रणनीति को दर्शाता है।"
    },
    {
        question: "प्रश्न 21. लंघनाज का उत्खनन किस प्रसिद्ध पुरातत्वविद् के निर्देशन में हुआ?",
        answers: shuffle([
            { text: "वी. एस. वाकणकर", correct: false },
            { text: "बी. सुब्बाराव", correct: false },
            { text: "एच. डी. सांकलिया", correct: true },
            { text: "आर. डी. बनर्जी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>हसमुख धीरजलाल सांकलिया</b> ने डेक्कन कॉलेज, पुणे की ओर से <b>लंघनाज</b> में उत्खनन कराया, जिससे गुजरात के प्रागैतिहास पर महत्वपूर्ण प्रकाश पड़ा।"
    },
    {
        question: "प्रश्न 22. मध्यपाषाण काल में कौन सी तकनीक विकसित नहीं हुई थी?",
        answers: shuffle([
            { text: "धनुष और बाण", correct: false },
            { text: "मछली पकड़ने के जाल और कांटे", correct: false },
            { text: "मिट्टी के बर्तन बनाने का चाक", correct: true },
            { text: "नाव या डोंगी का प्रारंभिक रूप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मिट्टी के बर्तन बनाने का चाक</b> नवपाषाण काल की एक महत्वपूर्ण खोज थी।<br><br><i class='fa-solid fa-angles-right icon'></i> मध्यपाषाण काल में यदि बर्तन बने भी, तो वे हाथ से बनाए गए थे और बहुत दुर्लभ थे।"
    },
    {
        question: "प्रश्न 23. मध्यपाषाण काल के अंत तक लोगों के जीवन में आया सबसे महत्वपूर्ण परिवर्तन क्या था?",
        answers: shuffle([
            { text: "वे पूरी तरह से शाकाहारी हो गए", correct: false },
            { text: "उन्होंने स्थायी गाँव बसाने और खेती करने की शुरुआत की", correct: true },
            { text: "उन्होंने पत्थर के औजारों का उपयोग करना बंद कर दिया", correct: false },
            { text: "वे वापस गुफाओं में रहने लगे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्यपाषाण काल का अंत और नवपाषाण काल की शुरुआत <b>स्थायी जीवन, कृषि और पशुपालन</b> से होती है, जिसकी नींव मध्यपाषाण काल में ही पड़ गई थी।"
    },
    {
        question: "प्रश्न 24. प्रागैतिहासिक काल के किस चरण में मानव ने पहली बार कलात्मक अभिव्यक्ति (चित्रकला) शुरू की?",
        answers: shuffle([
            { text: "निम्न पुरापाषाण काल", correct: false },
            { text: "मध्य पुरापाषाण काल", correct: false },
            { text: "उच्च पुरापाषाण काल", correct: true },
            { text: "मध्यपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कला का सबसे पहला स्पष्ट प्रमाण <b>उच्च पुरापाषाण काल</b> से मिलता है, जो मध्यपाषाण काल में और अधिक विकसित और विविध हो गया।"
    },
    {
        question: "प्रश्न 25. 'चर्ट' (Chert) क्या है?",
        answers: shuffle([
            { text: "एक प्रकार की धातु", correct: false },
            { text: "एक प्रकार की हड्डी", correct: false },
            { text: "सूक्ष्मपाषाण बनाने के लिए प्रयुक्त एक प्रकार का पत्थर", correct: true },
            { text: "एक प्रकार का चिपकाने वाला पदार्थ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>चर्ट</b> एक प्रकार का सूक्ष्मक्रिस्टलीय अवसादी चट्टान है जो बहुत कठोर होता है और तोड़ने पर तेज धार देता है, इसलिए यह <b>सूक्ष्मपाषाण बनाने के लिए आदर्श</b> था।"
    },
    {
        question: "प्रश्न 26. कंकालों के अध्ययन से मध्यपाषाण काल में औसत जीवन प्रत्याशा कितनी आंकी गई है?",
        answers: shuffle([
            { text: "15-20 वर्ष", correct: false },
            { text: "30-35 वर्ष", correct: true },
            { text: "50-55 वर्ष", correct: false },
            { text: "60-70 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उच्च शिशु मृत्यु दर, बीमारियों और कठिन जीवनशैली के कारण, मध्यपाषाण काल में औसत जीवन प्रत्याशा बहुत कम, लगभग <b>30-35 वर्ष</b> थी।"
    },
    {
        question: "प्रश्न 27. मध्यपाषाणकालीन चित्रों में कौन सा जानवर लगभग अनुपस्थित है?",
        answers: shuffle([
            { text: "हिरण", correct: false },
            { text: "भैंसा", correct: false },
            { text: "हाथी", correct: false },
            { text: "ऊँट", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्यपाषाणकालीन चित्रों में आमतौर पर जंगल के जानवरों का चित्रण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>ऊँट</b>, जो मुख्य रूप से एक मरुस्थलीय और बाद में पालतू बनाया गया जानवर है, इन चित्रों में नहीं पाया जाता।"
    },
    {
        question: "प्रश्न 28. मध्यपाषाण काल में सामाजिक भिन्नता का क्या प्रमाण मिलता है?",
        answers: shuffle([
            { text: "राजाओं और दासों की कब्रें", correct: false },
            { text: "बड़े महल और छोटी झोपड़ियाँ", correct: false },
            { text: "कुछ कब्रों में दूसरों की तुलना में अधिक आभूषण या उपकरण मिलना", correct: true },
            { text: "जाति व्यवस्था का लिखित प्रमाण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि समाज काफी हद तक समतावादी था, फिर भी <b>कुछ व्यक्तियों को दूसरों की तुलना में अधिक वस्तुओं के साथ दफनाया जाना</b> आरंभिक सामाजिक भिन्नता का संकेत हो सकता है।"
    },
    {
        question: "प्रश्न 29. मध्य प्रदेश के लेखहिया शैलाश्रय से क्या महत्वपूर्ण खोज हुई है?",
        answers: shuffle([
            { text: "बड़ी संख्या में मानव कंकाल", correct: true },
            { text: "तांबे के उपकरण", correct: false },
            { text: "कृषि के साक्ष्य", correct: false },
            { text: "सोने के सिक्के", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>लेखहिया</b> से <b>सत्रह मानव कंकालों</b> के अवशेष मिले हैं, जो इस क्षेत्र में मध्यपाषाणकालीन आबादी के घनत्व को दर्शाते हैं।"
    },
    {
        question: "प्रश्न 30. होमो सेपियन्स (आधुनिक मानव) किस काल में पूरे भारत में फैल गए?",
        answers: shuffle([
            { text: "निम्न पुरापाषाण काल", correct: false },
            { text: "मध्य पुरापाषाण काल", correct: false },
            { text: "उच्च पुरापाषाण काल और मध्यपाषाण काल", correct: true },
            { text: "नवपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>होमो सेपियन्स</b> का उदय उच्च पुरापाषाण काल में हुआ और <b>मध्यपाषाण काल</b> तक वे बदलती परिस्थितियों के अनुकूल ढलते हुए भारतीय उपमहाद्वीप के लगभग हर हिस्से में फैल चुके थे।"
    },
    {
        question: "प्रश्न 31. 'संक्रमण काल' के रूप में, मध्यपाषाण काल ने किन दो जीवनशैलियों को जोड़ा?",
        answers: shuffle([
            { text: "घुमंतू और शहरी", correct: false },
            { text: "शिकारी-संग्राहक और खाद्य-उत्पादक", correct: true },
            { text: "ग्रामीण और औद्योगिक", correct: false },
            { text: "पाषाण युग और धातु युग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह काल पुरापाषाण की पूर्ण <b>शिकारी-संग्राहक</b> अवस्था और नवपाषाण की पूर्ण <b>खाद्य-उत्पादक (कृषि)</b> अवस्था के बीच का पुल है।"
    },
    {
        question: "प्रश्न 32. गंगा घाटी के मध्यपाषाणकालीन लोग उपकरण बनाने के लिए पत्थर कहाँ से लाते थे?",
        answers: shuffle([
            { text: "वे पत्थर का उपयोग नहीं करते थे", correct: false },
            { text: "वे स्थानीय रूप से उपलब्ध कंकड़ का उपयोग करते थे", correct: false },
            { text: "वे 100-200 किमी दूर विंध्य क्षेत्र से पत्थर आयात करते थे", correct: true },
            { text: "वे हिमालय से पत्थर लाते थे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गंगा के मैदानी इलाकों में पत्थर की कमी थी, इसलिए यहाँ के लोग उपकरण बनाने के लिए आवश्यक चर्ट और चाल्सेडनी जैसे पत्थर पास के <b>विंध्य पहाड़ों</b> से लाते थे, जो एक प्रकार के <b>व्यापार या विनिमय</b> का संकेत है।"
    },
    {
        question: "प्रश्न 33. मध्यपाषाण काल के संबंध में 'गतिशीलता' (Mobility) का क्या अर्थ है?",
        answers: shuffle([
            { text: "वे एक ही स्थान पर स्थायी रूप से रहते थे", correct: false },
            { text: "वे संसाधनों की उपलब्धता के अनुसार मौसमी रूप से अपने शिविर बदलते थे", correct: true },
            { text: "वे बिना किसी कारण के लगातार घूमते रहते थे", correct: false },
            { text: "वे लंबी दूरी का व्यापार करते थे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उनकी गतिशीलता एक निश्चित क्षेत्र के भीतर संसाधनों का फायदा उठाने के लिए <b>मौसमी प्रवास</b> पर आधारित थी, जो पुरापाषाण काल के यादृच्छिक घुमंतूपन से अलग थी।"
    },
    {
        question: "प्रश्न 34. कौन सा स्थल अपने सूक्ष्मपाषाण उद्योग के लिए प्रसिद्ध है, जहाँ फर्श पर पत्थर बिछाए गए थे?",
        answers: shuffle([
            { text: "महदहा", correct: false },
            { text: "बागोर", correct: true },
            { text: "दमदमा", correct: false },
            { text: "लंघनाज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बागोर</b> अपने असाधारण रूप से समृद्ध <b>सूक्ष्मपाषाण उद्योग</b> के लिए जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ झोपड़ियों के फर्श को <b>पत्थरों से पाटा</b> गया था और बीच-बीच में काम करने की जगहें भी थीं।"
    },
    {
        question: "प्रश्न 35. मध्यपाषाणकालीन चित्रों में एक्स-रे शैली (X-ray style) क्या है?",
        answers: shuffle([
            { text: "चित्रों को हड्डियों पर बनाना", correct: false },
            { text: "जानवरों के आंतरिक अंगों को भी चित्रित करना", correct: true },
            { text: "केवल कंकालों का चित्रण करना", correct: false },
            { text: "सफेद रंग से चित्रण करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुछ चित्रों में, कलाकार ने जानवर की बाहरी रूपरेखा के साथ-साथ उसके <b>अंदर के अंगों</b> जैसे पेट या भ्रूण को भी दिखाने की कोशिश की है, इसे <b>एक्स-रे शैली</b> कहते हैं।"
    },
    {
        question: "प्रश्न 36. किस गतिविधि ने मध्यपाषाण काल में लोगों को एक स्थान पर अधिक समय तक रुकने के लिए प्रोत्साहित किया?",
        answers: shuffle([
            { text: "युद्ध", correct: false },
            { text: "मछली पकड़ना और जलीय संसाधनों का उपयोग", correct: true },
            { text: "बड़े जानवरों का शिकार", correct: false },
            { text: "कला बनाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नदियाँ और झीलें भोजन का एक स्थिर और विश्वसनीय स्रोत थीं, जिससे लोगों को उनके किनारों पर <b>लंबे समय तक टिकने</b> में मदद मिली।"
    },
    {
        question: "प्रश्न 37. मध्यपाषाण काल को अंग्रेजी में कभी-कभी 'Epipaleolithic' भी क्यों कहा जाता है?",
        answers: shuffle([
            { text: "क्योंकि यह पुरापाषाण के बाद आता है", correct: true },
            { text: "क्योंकि इसके उपकरण बेहतर थे", correct: false },
            { text: "क्योंकि यह नवपाषाण से पहले आता है", correct: false },
            { text: "क्योंकि यह एक छोटा काल था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>Epipaleolithic</b>' का शाब्दिक अर्थ है '<b>पुरापाषाण के ऊपर</b>'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शब्द उन संस्कृतियों के लिए उपयोग किया जाता है जो पुरापाषाणकालीन परंपरा को जारी रखती हैं लेकिन होलोसीन युग में मौजूद थीं, जैसा कि मध्यपाषाण काल में हुआ।"
    },
    {
        question: "प्रश्न 38. मध्यपाषाण काल में सामाजिक समारोहों का क्या प्रमाण मिलता है?",
        answers: shuffle([
            { text: "बड़े सभा भवनों के अवशेष", correct: false },
            { text: "सामूहिक नृत्य और दावतों के शैल चित्र", correct: true },
            { text: "लिखित निमंत्रण पत्र", correct: false },
            { text: "सिक्कों का मिलना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भीमबेटका जैसे स्थलों पर कई चित्र हैं जिनमें लोगों को हाथ पकड़कर एक पंक्ति में <b>नाचते हुए</b> या एक साथ <b>भोजन करते हुए</b> दिखाया गया है, जो सामाजिक समारोहों का प्रमाण है।"
    },
    {
        question: "प्रश्न 39. यदि आपको किसी स्थल पर त्रिभुज, समलंब और ब्लेड जैसे छोटे पत्थर के उपकरण मिलें, तो आप उसे किस काल का मानेंगे?",
        answers: shuffle([
            { text: "पुरापाषाण काल", correct: false },
            { text: "मध्यपाषाण काल", correct: true },
            { text: "नवपाषाण काल", correct: false },
            { text: "ताम्रपाषाण काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये ज्यामितीय और गैर-ज्यामितीय <b>सूक्ष्मपाषाण</b> <b>मध्यपाषाण काल</b> के सबसे विशिष्ट पहचान चिह्न हैं।"
    },
    {
        question: "प्रश्न 40. बागोर स्थल के बारे में कौन सा तथ्य गलत है?",
        answers: shuffle([
            { text: "यह कोठारी नदी के किनारे है।", correct: false },
            { text: "यह भारत का सबसे बड़ा मध्यपाषाणकालीन स्थल है।", correct: false },
            { text: "यहाँ से कृषि का स्पष्ट प्रमाण मिला है।", correct: true },
            { text: "यहाँ से पशुपालन का प्रारंभिक साक्ष्य मिला है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बागोर से पशुपालन का साक्ष्य तो मिला है, लेकिन पौधों की खेती या <b>कृषि का कोई स्पष्ट और प्रत्यक्ष प्रमाण नहीं मिला है</b>।"
    },
    {
        question: "प्रश्न 41. मध्यपाषाणकालीन दफन में, मृतकों के साथ उपकरण क्यों रखे जाते थे?",
        answers: shuffle([
            { text: "ताकि वे कब्र खोद सकें", correct: false },
            { text: "यह दर्शाता है कि उपकरण मृतक की संपत्ति थे", correct: false },
            { text: "मृत्यु के बाद के जीवन में उपयोग के लिए एक संभावित विश्वास के कारण", correct: true },
            { text: "यह एक गलती से हो जाता था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मृतकों के साथ उनकी उपयोगी वस्तुएं रखना अक्सर इस विश्वास से जुड़ा होता है कि उन्हें <b>दूसरी दुनिया में इन चीजों की आवश्यकता</b> होगी।"
    },
    {
        question: "प्रश्न 42. मध्यपाषाणकालीन लोगों ने पुरापाषाणकालीन लोगों की तुलना में पर्यावरण को बेहतर ढंग से कैसे समझा?",
        answers: shuffle([
            { text: "उन्होंने किताबें पढ़ीं", correct: false },
            { text: "उन्होंने बहुत विविध प्रकार के पौधों और जानवरों का उपयोग करना सीखा", correct: true },
            { text: "उन्होंने मौसम की भविष्यवाणी करना सीख लिया", correct: false },
            { text: "उन्होंने नक्शे बनाए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उनका '<b>विस्तृत स्पेक्ट्रम</b>' भोजन संग्रहण यह दर्शाता है कि उन्हें अपने परिवेश में उपलब्ध हर छोटे-बड़े संसाधन की <b>गहरी समझ</b> थी।"
    },
    {
        question: "प्रश्न 43. भारत में मध्यपाषाणकालीन अनुसंधान को किससे सबसे अधिक बल मिला?",
        answers: shuffle([
            { text: "विदेशी यात्रियों के वृत्तांतों से", correct: false },
            { text: "धार्मिक ग्रंथों से", correct: false },
            { text: "व्यवस्थित पुरातात्विक उत्खनन और विश्लेषण से", correct: true },
            { text: "सोने की खोज से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्लाइल की प्रारंभिक खोजों के बाद, सांकलिया, मिश्र, शर्मा जैसे पुरातत्वविदों द्वारा किए गए <b>वैज्ञानिक उत्खनन और विश्लेषण</b> ने ही इस काल के बारे में हमारी अधिकांश जानकारी प्रदान की है।"
    },
    {
        question: "प्रश्न 44. मध्यपाषाण काल में कला का मुख्य माध्यम क्या था?",
        answers: shuffle([
            { text: "कपड़े पर चित्रकारी", correct: false },
            { text: "कैनवास पर तैल चित्र", correct: false },
            { text: "गुफाओं और शैलाश्रयों की चट्टानी सतह", correct: true },
            { text: "कागज पर जल रंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस काल की कला का सबसे प्रमुख और स्थायी रूप <b>शैल चित्रकला (Rock Art)</b> है, जो <b>प्राकृतिक चट्टानी सतहों</b> पर खनिज रंगों से बनाई गई थी।"
    },
    {
        question: "प्रश्न 45. दमदमा स्थल के शवाधानों की सबसे अनूठी विशेषता क्या है?",
        answers: shuffle([
            { text: "सभी शवों को जलाया गया था", correct: false },
            { text: "शवों को बैठे हुए दफनाया गया था", correct: false },
            { text: "एक ही कब्र में एक से अधिक (तीन तक) लोगों को दफनाना", correct: true },
            { text: "शवों के साथ सोने के आभूषण मिलना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>दमदमा</b> में कई <b>बहु-शवाधान (multiple burials)</b> मिले हैं, जिनमें <b>दो या तीन व्यक्तियों</b> को एक साथ एक ही कब्र में दफनाया गया है, जो इसकी विशिष्ट पहचान है।"
    },
    {
        question: "प्रश्न 46. मध्यपाषाण काल में शिकार की तकनीक में सबसे बड़ा नवाचार क्या था?",
        answers: shuffle([
            { text: "आग का उपयोग करके जानवरों को डराना", correct: false },
            { text: "बड़े गड्ढे खोदकर जानवरों को फँसाना", correct: false },
            { text: "धनुष-बाण का प्रयोग", correct: true },
            { text: "पत्थरों से जानवरों को मारना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>धनुष-बाण</b> ने शिकारी को दूर से और सुरक्षित रूप से तेज गति वाले जानवरों का शिकार करने की क्षमता प्रदान की, जो एक <b>क्रांतिकारी बदलाव</b> था।"
    },
    {
        question: "प्रश्न 47. मध्यपाषाण काल में आवास के लिए झोपड़ियों के साक्ष्य क्या हैं?",
        answers: shuffle([
            { text: "ईंटों की दीवारें", correct: false },
            { text: "नींव के पत्थर", correct: false },
            { text: "जमीन में खंभे गाड़ने के लिए बने गड्ढे (Post-holes) और सपाट फर्श", correct: true },
            { text: "छत की टाइलें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरातत्वविदों को खुदाई में अक्सर गोलाकार पैटर्न में बने <b>खंभों के गड्ढे</b> और सख्त की गई मिट्टी के फर्श मिलते हैं, जो झोपड़ियों के अस्तित्व को प्रमाणित करते हैं।"
    },
    {
        question: "प्रश्न 48. मध्यपाषाणकालीन कला में महिलाओं को किन भूमिकाओं में चित्रित किया गया है?",
        answers: shuffle([
            { text: "केवल शिकार करते हुए", correct: false },
            { text: "केवल नृत्य करते हुए", correct: false },
            { text: "भोजन इकट्ठा करते, बच्चों की देखभाल करते और घरेलू कामों में", correct: true },
            { text: "केवल युद्ध करते हुए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चित्रों में महिलाओं को अक्सर <b>टोकरी लिए हुए भोजन इकट्ठा करते, अनाज पीसते और बच्चों के साथ</b> दिखाया गया है, जो उनके सामाजिक योगदान को दर्शाता है।"
    },
    {
        question: "प्रश्न 49. भारत में किस क्षेत्र से सबसे सघन मध्यपाषाणकालीन स्थल मिले हैं?",
        answers: shuffle([
            { text: "हिमालय की ऊँचाइयों पर", correct: false },
            { text: "विंध्य और कैमूर पर्वत श्रृंखला में", correct: true },
            { text: "पूर्वोत्तर के घने जंगलों में", correct: false },
            { text: "तटीय मैंग्रोव वनों में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य भारत का यह पहाड़ी क्षेत्र <b>शैलाश्रयों, पानी की उपलब्धता और उपकरण बनाने के लिए पत्थर की प्रचुरता</b> के कारण मध्यपाषाणकालीन बसावट के लिए सबसे आदर्श था।"
    },
    {
        question: "प्रश्न 50. मध्यपाषाण काल से नवपाषाण काल में परिवर्तन का मुख्य सूचक क्या है?",
        answers: shuffle([
            { text: "पत्थर के औजारों का पूर्ण अभाव", correct: false },
            { text: "कृषि और पशुपालन का नियमित अभ्यास", correct: true },
            { text: "गुफाओं में रहने का अंत", correct: false },
            { text: "लेखन की शुरुआत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब मानव भोजन के लिए शिकार और संग्रहण पर निर्भरता कम करके जानबूझकर <b>फसल उगाने और पशुओं को पालने</b> लगता है, तो यह <b>नवपाषाण युग की शुरुआत</b> का संकेत है।"
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