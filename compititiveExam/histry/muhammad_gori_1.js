const questions = [
    {
        topHeading: "मुहम्मद गोरी पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. मुहम्मद गोरी का मूल नाम क्या था?",
        answers: shuffle([
            { text: "मुईजुद्दीन मुहम्मद बिन साम", correct: true },
            { text: "गयासुद्दीन मुहम्मद", correct: false },
            { text: "यिल्दिज", correct: false },
            { text: "कुबाचा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुहम्मद गोरी का मूल और पूरा नाम <b>मुईजुद्दीन मुहम्मद बिन साम</b> था।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>शहाबुद्दीन</b> भी उसकी एक उपाधि थी।"
    },
    {
        question: "प्रश्न 2. मुहम्मद गोरी किस वंश से संबंधित था?",
        answers: shuffle([
            { text: "गजनवी वंश", correct: false },
            { text: "गुलाम वंश", correct: false },
            { text: "शंसबनी वंश", correct: true },
            { text: "खिलजी वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुहम्मद गोरी और उसका भाई गयासुद्दीन गोरी, <b>गोर प्रदेश के शंसबनी वंश</b> के थे, जो एक तुर्क वंश था।"
    },
    {
        question: "प्रश्न 3. मुहम्मद गोरी ने गोर का शासन किस वर्ष संभाला?",
        answers: shuffle([
            { text: "1171 ई.", correct: false },
            { text: "1173 ई.", correct: true },
            { text: "1175 ई.", correct: false },
            { text: "1191 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपने भाई गयासुद्दीन गोरी के अधीन, मुहम्मद गोरी <b>1173 ई.</b> में गजनी का शासक बना, जहाँ से उसने भारत पर आक्रमणों की योजना बनाई।"
    },
    {
        question: "प्रश्न 4. मुहम्मद गोरी ने भारत पर अपना पहला आक्रमण किस वर्ष किया था?",
        answers: shuffle([
            { text: "1173 ई.", correct: false },
            { text: "1175 ई.", correct: true },
            { text: "1178 ई.", correct: false },
            { text: "1186 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुहम्मद गोरी ने भारत में अपने साम्राज्य विस्तार के उद्देश्य से पहला आक्रमण <b>1175 ई. में मुल्तान</b> पर किया था।"
    },
    {
        question: "प्रश्न 5. 1175 ई. में अपने पहले आक्रमण में मुहम्मद गोरी ने किस क्षेत्र पर विजय प्राप्त की?",
        answers: shuffle([
            { text: "लाहौर", correct: false },
            { text: "पेशावर", correct: false },
            { text: "मुल्तान और उच्छ", correct: true },
            { text: "दिल्ली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोरी ने सबसे पहले <b>मुल्तान</b> पर आक्रमण किया जहाँ करमाथी शियाओं का शासन था, और उन्हें पराजित कर उस क्षेत्र पर अधिकार कर लिया।"
    },
    {
        question: "प्रश्न 6. मुहम्मद गोरी ने भारत पर आक्रमण के लिए कौन सा दर्रा चुना था?",
        answers: shuffle([
            { text: "खैबर दर्रा", correct: false },
            { text: "बोलन दर्रा", correct: false },
            { text: "गोमल दर्रा", correct: true },
            { text: "काराकोरम दर्रा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महमूद गजनवी के विपरीत, जिसने खैबर दर्रे का उपयोग किया, मुहम्मद गोरी ने भारत में प्रवेश के लिए दक्षिण में स्थित <b>गोमल दर्रे</b> का मार्ग अपनाया।"
    },
    {
        question: "प्रश्न 7. 1178 ई. में गुजरात पर आक्रमण के समय वहाँ का शासक कौन था?",
        answers: shuffle([
            { text: "पृथ्वीराज चौहान", correct: false },
            { text: "जयचंद", correct: false },
            { text: "भीम द्वितीय (मूलराज द्वितीय)", correct: true },
            { text: "लक्ष्मण सेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1178 ई. में जब गोरी ने गुजरात पर आक्रमण किया, तो वहाँ सोलंकी (चालुक्य) वंश का युवा शासक <b>भीम द्वितीय</b> शासन कर रहा था।"
    },
    {
        question: "प्रश्न 8. अन्हिलवाड़ा (गुजरात) के युद्ध में मुहम्मद गोरी को किसने पराजित किया था?",
        answers: shuffle([
            { text: "पृथ्वीराज चौहान", correct: false },
            { text: "भीम द्वितीय की विधवा माँ नायकी देवी", correct: true },
            { text: "जयचंद", correct: false },
            { text: "परमर्दिदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कायदरा के युद्ध (अन्हिलवाड़ा के पास) में, भीम द्वितीय की संरक्षिका और विधवा माँ <b>नायकी देवी</b> ने अपनी सेना का नेतृत्व किया और मुहम्मद गोरी को बुरी तरह पराजित किया।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत में उसकी <b>पहली बड़ी हार</b> थी।"
    },
    {
        question: "प्रश्न 9. मुहम्मद गोरी ने पंजाब के गजनवी शासक खुसरो मलिक को कब पराजित कर लाहौर पर अधिकार किया?",
        answers: shuffle([
            { text: "1175 ई.", correct: false },
            { text: "1178 ई.", correct: false },
            { text: "1181 ई.", correct: false },
            { text: "1186 ई.", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कई प्रयासों के बाद, <b>1186 ई.</b> में मुहम्मद गोरी ने धोखे से अंतिम गजनवी शासक खुसरो मलिक को बंदी बना लिया और लाहौर सहित पूरे पंजाब पर अधिकार कर लिया।"
    },
    {
        question: "प्रश्न 10. तराइन का प्रथम युद्ध किस वर्ष लड़ा गया था?",
        answers: shuffle([
            { text: "1190 ई.", correct: false },
            { text: "1191 ई.", correct: true },
            { text: "1192 ई.", correct: false },
            { text: "1194 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तराइन का प्रथम युद्ध <b>1191 ई.</b> में मुहम्मद गोरी और अजमेर तथा दिल्ली के चौहान शासक <b>पृथ्वीराज चौहान</b> के बीच हुआ था।"
    },
    {
        question: "प्रश्न 11. तराइन के प्रथम युद्ध का परिणाम क्या हुआ?",
        answers: shuffle([
            { text: "मुहम्मद गोरी की विजय हुई", correct: false },
            { text: "पृथ्वीराज चौहान की विजय हुई", correct: true },
            { text: "युद्ध का कोई परिणाम नहीं निकला", correct: false },
            { text: "दोनों के बीच संधि हो गई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस युद्ध में <b>पृथ्वीराज चौहान</b> ने मुहम्मद गोरी की सेना को बुरी तरह पराजित किया।<br><br><i class='fa-solid fa-angles-right icon'></i> गोरी युद्ध में घायल हो गया और अपनी जान बचाकर भाग निकला।"
    },
    {
        question: "प्रश्न 12. तराइन का द्वितीय युद्ध कब हुआ था?",
        answers: shuffle([
            { text: "1191 ई.", correct: false },
            { text: "1192 ई.", correct: true },
            { text: "1193 ई.", correct: false },
            { text: "1194 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपनी पिछली हार का बदला लेने के लिए मुहम्मद गोरी ने एक वर्ष बाद <b>1192 ई.</b> में पूरी तैयारी के साथ फिर से आक्रमण किया, जिससे तराइन का दूसरा युद्ध हुआ।"
    },
    {
        question: "प्रश्न 13. तराइन के द्वितीय युद्ध में मुहम्मद गोरी की जीत का मुख्य कारण क्या था?",
        answers: shuffle([
            { text: "उसकी विशाल सेना", correct: false },
            { text: "पृथ्वीराज चौहान का अति आत्मविश्वास", correct: false },
            { text: "गोरी की बेहतर सैन्य रणनीति (तुर्क युद्ध प्रणाली)", correct: true },
            { text: "राजपूतों में एकता का अभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोरी ने इस युद्ध में '<b>तुलुगमा</b>' और '<b>रिजर्व सेना</b>' जैसी बेहतर युद्ध रणनीतियों का प्रयोग किया।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने सुबह-सुबह सोती हुई राजपूत सेना पर हमला कर दिया, जिससे वे संभल नहीं पाए।"
    },
    {
        question: "प्रश्न 14. तराइन का द्वितीय युद्ध भारतीय इतिहास में एक निर्णायक मोड़ क्यों माना जाता है?",
        answers: shuffle([
            { text: "इससे राजपूत शक्ति का अंत हो गया", correct: false },
            { text: "इससे भारत में तुर्की शासन की नींव पड़ी", correct: true },
            { text: "इससे भारत में मुगलों का आगमन हुआ", correct: false },
            { text: "इससे भारत में व्यापार बढ़ गया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस युद्ध में पृथ्वीराज चौहान की हार के बाद उत्तरी भारत में कोई शक्तिशाली राजपूत शासक नहीं बचा, जिससे <b>तुर्कों के लिए भारत में अपना राज्य स्थापित करने का मार्ग खुल गया</b>।"
    },
    {
        question: "प्रश्न 15. पृथ्वीराज चौहान के दरबारी कवि कौन थे, जिन्होंने 'पृथ्वीराज रासो' की रचना की?",
        answers: shuffle([
            { text: "अमीर खुसरो", correct: false },
            { text: "चंदबरदाई", correct: true },
            { text: "बाणभट्ट", correct: false },
            { text: "कल्हण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>चंदबरदाई</b>, पृथ्वीराज चौहान के मित्र और राजकवि थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने '<b>पृथ्वीराज रासो</b>' नामक महाकाव्य की रचना की, जिसमें पृथ्वीराज के जीवन और वीरता का वर्णन है।"
    },
    {
        question: "प्रश्न 16. चंदावर का युद्ध मुहम्मद गोरी और किसके बीच हुआ था?",
        answers: shuffle([
            { text: "पृथ्वीराज चौहान", correct: false },
            { text: "भीम द्वितीय", correct: false },
            { text: "जयचंद", correct: true },
            { text: "लक्ष्मण सेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंदावर का युद्ध <b>1194 ई.</b> में मुहम्मद गोरी और कन्नौज के गहड़वाल वंश के शासक <b>जयचंद</b> के बीच लड़ा गया था।"
    },
    {
        question: "प्रश्न 17. चंदावर के युद्ध (1194 ई.) में किसकी विजय हुई?",
        answers: shuffle([
            { text: "जयचंद", correct: false },
            { text: "मुहम्मद गोरी", correct: true },
            { text: "युद्ध अनिर्णित रहा", correct: false },
            { text: "दोनों के बीच संधि हुई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस युद्ध में जयचंद की आंख में तीर लगने से उसकी मृत्यु हो गई, जिससे उसकी सेना में भगदड़ मच गई और <b>मुहम्मद गोरी</b> की निर्णायक विजय हुई।"
    },
    {
        question: "प्रश्न 18. मुहम्मद गोरी के किस सेनापति ने बिहार और बंगाल पर विजय प्राप्त की थी?",
        answers: shuffle([
            { text: "कुतुबुद्दीन ऐबक", correct: false },
            { text: "ताजुद्दीन यिल्दिज", correct: false },
            { text: "नासिरुद्दीन कुबाचा", correct: false },
            { text: "इख्तियारुद्दीन मुहम्मद बिन बख्तियार खिलजी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बख्तियार खिलजी</b>, जो गोरी का एक साधारण सरदार था, ने अपनी योग्यता से पूर्व की ओर अभियान किया और बिहार तथा बंगाल के क्षेत्रों को जीता।"
    },
    {
        question: "प्रश्न 19. किस तुर्क सेनापति ने नालंदा और विक्रमशिला विश्वविद्यालयों को नष्ट किया था?",
        answers: shuffle([
            { text: "कुतुबुद्दीन ऐबक", correct: false },
            { text: "मुहम्मद गोरी", correct: false },
            { text: "बख्तियार खिलजी", correct: true },
            { text: "इल्तुतमिश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बख्तियार खिलजी</b> ने अपने बिहार अभियान के दौरान (लगभग 1202-03 ई.) प्रसिद्ध बौद्ध शिक्षा केंद्रों <b>नालंदा और विक्रमशिला</b> महाविहारों को नष्ट कर दिया था।"
    },
    {
        question: "प्रश्न 20. बंगाल के किस सेन वंशीय शासक को बख्तियार खिलजी ने हराया था?",
        answers: shuffle([
            { text: "विजयसेन", correct: false },
            { text: "बल्लालसेन", correct: false },
            { text: "लक्ष्मणसेन", correct: true },
            { text: "सामंतसेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बख्तियार खिलजी ने बंगाल की राजधानी नदिया (लखनौती) पर अचानक आक्रमण किया, जिससे सेन वंश का वृद्ध शासक <b>लक्ष्मणसेन</b> बिना लड़े ही भाग गया।"
    },
    {
        question: "प्रश्न 21. मुहम्मद गोरी ने भारत में जीते हुए प्रदेशों का प्रशासन किसे सौंपा था?",
        answers: shuffle([
            { text: "अपने भाई गयासुद्दीन को", correct: false },
            { text: "अपने गुलाम सेनापति कुतुबुद्दीन ऐबक को", correct: true },
            { text: "अपने भतीजे को", correct: false },
            { text: "बख्तियार खिलजी को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोरी भारत में स्थायी रूप से नहीं रुका।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने यहाँ जीते गए क्षेत्रों का प्रशासक अपने सबसे विश्वसनीय <b>गुलाम कुतुबुद्दीन ऐबक</b> को नियुक्त किया और स्वयं गजनी लौट गया।"
    },
    {
        question: "प्रश्न 22. मुहम्मद गोरी का अंतिम संस्कार किस रीति-रिवाज से किया गया?",
        answers: shuffle([
            { text: "हिंदू", correct: false },
            { text: "बौद्ध", correct: false },
            { text: "इस्लामी", correct: true },
            { text: "पारसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुहम्मद गोरी एक सुन्नी मुसलमान था, और उसकी मृत्यु के बाद उसका अंतिम संस्कार <b>इस्लामी रीति-रिवाजों</b> के अनुसार किया गया।"
    },
    {
        question: "प्रश्न 23. गोरी के आक्रमण के समय भारत का सबसे धनी और शक्तिशाली राज्य कौन सा माना जाता था?",
        answers: shuffle([
            { text: "दिल्ली और अजमेर", correct: false },
            { text: "बंगाल", correct: false },
            { text: "गुजरात", correct: false },
            { text: "कन्नौज", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन के समय से ही <b>कन्नौज</b> उत्तर भारत की राजनीतिक शक्ति और समृद्धि का प्रतीक था।<br><br><i class='fa-solid fa-angles-right icon'></i> गहड़वाल शासकों के अधीन यह एक विशाल और संपन्न राज्य था।"
    },
    {
        question: "प्रश्न 24. मुहम्मद गोरी की हत्या किस स्थान पर हुई थी?",
        answers: shuffle([
            { text: "लाहौर", correct: false },
            { text: "गजनी", correct: false },
            { text: "दमयक (सिंधु नदी के पास)", correct: true },
            { text: "मुल्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1206 ई. में जब गोरी मध्य एशिया के विद्रोह को दबाकर वापस गजनी लौट रहा था, तो <b>सिंधु नदी के किनारे दमयक नामक स्थान पर शिविर में नमाज पढ़ते समय खोक्कर जाटों ने उसकी हत्या कर दी</b>।"
    },
    {
        question: "प्रश्न 25. मुहम्मद गोरी की हत्या किस वर्ष हुई थी?",
        answers: shuffle([
            { text: "1205 ई.", correct: false },
            { text: "1206 ई.", correct: true },
            { text: "1208 ई.", correct: false },
            { text: "1210 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुहम्मद गोरी की हत्या <b>15 मार्च, 1206 ई.</b> को हुई थी।"
    },
    {
        question: "प्रश्न 26. मुहम्मद गोरी का अपने भाई गयासुद्दीन से क्या संबंध था?",
        answers: shuffle([
            { text: "वे सौतेले भाई थे", correct: false },
            { text: "वे सगे भाई थे और उनके बीच गहरा स्नेह और सम्मान था", correct: true },
            { text: "वे चचेरे भाई थे", correct: false },
            { text: "उनके बीच दुश्मनी थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दोनों भाइयों ने मिलकर घुरिद साम्राज्य का निर्माण किया और उनके बीच संबंध <b>असाधारण रूप से सौहार्दपूर्ण और सहयोगी</b> थे, जो मध्यकालीन इतिहास में दुर्लभ है।"
    },
    {
        question: "प्रश्न 27. मुहम्मद गोरी के कोई पुत्र नहीं था। उसने अपना उत्तराधिकारी किसे माना था?",
        answers: shuffle([
            { text: "अपने भतीजे को", correct: false },
            { text: "अपने भाई को", correct: false },
            { text: "अपने तुर्क गुलामों को", correct: true },
            { text: "अपने मंत्री को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोरी कहा करता था, \"अन्य सुल्तानों के एक या दो बेटे हो सकते हैं, मेरे तो हजारों बेटे हैं, यानी मेरे <b>तुर्क गुलाम</b>, जो मेरे बाद मेरे राज्यों की देखभाल करेंगे।\""
    },
    {
        question: "प्रश्न 28. मुहम्मद गोरी की मृत्यु के बाद उसके भारतीय साम्राज्य का शासक कौन बना?",
        answers: shuffle([
            { text: "ताजुद्दीन यिल्दिज", correct: false },
            { text: "नासिरुद्दीन कुबाचा", correct: false },
            { text: "कुतुबुद्दीन ऐबक", correct: true },
            { text: "बख्तियार खिलजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोरी की मृत्यु के बाद, उसके सबसे प्रमुख गुलाम <b>कुतुबुद्दीन ऐबक</b> ने भारतीय प्रदेशों पर अधिकार कर लिया और <b>दिल्ली सल्तनत की स्थापना</b> की।"
    },
    {
        question: "प्रश्न 29. तराइन के द्वितीय युद्ध में गोरी ने अपनी सेना को कितने भागों में बांटा था?",
        answers: shuffle([
            { text: "दो", correct: false },
            { text: "तीन", correct: false },
            { text: "चार और एक रिजर्व टुकड़ी", correct: true },
            { text: "उसने सेना को नहीं बांटा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोरी ने अपनी सेना को हरावल (अग्रिम), दाएँ, बाएँ, मध्य और एक <b>आरक्षित (रिजर्व) टुकड़ी</b> में विभाजित किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> आरक्षित टुकड़ी ने युद्ध के अंतिम चरण में निर्णायक भूमिका निभाई।"
    },
    {
        question: "प्रश्न 30. तराइन के प्रथम युद्ध में पृथ्वीराज चौहान का सेनापति कौन था?",
        answers: shuffle([
            { text: "जयचंद", correct: false },
            { text: "स्कंद", correct: true },
            { text: "गोविंदराज", correct: false },
            { text: "उदयराज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तराइन के पहले युद्ध में पृथ्वीराज की सेना का मुख्य सेनापति <b>स्कंद</b> था, जबकि दिल्ली का गवर्नर गोविंदराज तोमर भी एक प्रमुख कमांडर था।"
    },
    {
        question: "प्रश्न 31. किस इतिहासकार ने कहा कि तराइन का द्वितीय युद्ध \"एक ऐसा निर्णायक युद्ध था जिसने भारत पर मुसलमानों की आधारभूत सफलता निश्चित कर दी\"?",
        answers: shuffle([
            { text: "विन्सेंट स्मिथ", correct: true },
            { text: "लेनपूल", correct: false },
            { text: "ईश्वरी प्रसाद", correct: false },
            { text: "आर. सी. मजूमदार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रसिद्ध इतिहासकार <b>विन्सेंट स्मिथ</b> ने तराइन के दूसरे युद्ध के महत्व को रेखांकित करते हुए यह टिप्पणी की थी।"
    },
    {
        question: "प्रश्न 32. मुहम्मद गोरी का मुख्य प्रतिद्वंद्वी मध्य एशिया में कौन था?",
        answers: shuffle([
            { text: "सेल्जुक तुर्क", correct: false },
            { text: "मंगोल", correct: false },
            { text: "ख्वारिज्म का शाह", correct: true },
            { text: "उस्मानी तुर्क", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुहम्मद गोरी की महत्वाकांक्षा मध्य एशिया में एक विशाल साम्राज्य बनाने की थी, जहाँ उसका सबसे बड़ा प्रतिद्वंद्वी <b>ख्वारिज्म का शक्तिशाली साम्राज्य</b> था।"
    },
    {
        question: "प्रश्न 33. मुहम्मद गोरी ने अपने बड़े भाई गयासुद्दीन गोरी के प्रति कैसी नीति अपनाई?",
        answers: shuffle([
            { text: "विद्रोह की नीति", correct: false },
            { text: "पूर्ण स्वतंत्रता की नीति", correct: false },
            { text: "पूर्ण निष्ठा और सम्मान की नीति", correct: true },
            { text: "प्रतिद्वंद्विता की नीति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुहम्मद गोरी ने हमेशा अपने बड़े भाई गयासुद्दीन को अपना अधिपति माना और उसके नाम से ही सिक्के ढलवाए तथा खुतबा पढ़वाया।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने कभी अपने भाई के विरुद्ध विद्रोह नहीं किया।"
    },
    {
        question: "प्रश्न 34. तराइन के युद्ध का स्थल आधुनिक भारत के किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "पंजाब", correct: false },
            { text: "हरियाणा", correct: true },
            { text: "राजस्थान", correct: false },
            { text: "उत्तर प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तराइन (आधुनिक <b>तरावड़ी</b>) का ऐतिहासिक मैदान <b>हरियाणा</b> के करनाल जिले में स्थित है।"
    },
    {
        question: "प्रश्न 35. मुहम्मद गोरी के आक्रमण का भारत पर क्या सामाजिक प्रभाव पड़ा?",
        answers: shuffle([
            { text: "जाति प्रथा समाप्त हो गई", correct: false },
            { text: "शहरी केंद्रों का विकास हुआ और एक नई Indo-Islamic संस्कृति का उदय हुआ", correct: true },
            { text: "सती प्रथा पर रोक लग गई", correct: false },
            { text: "समाज में कोई परिवर्तन नहीं हुआ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तुर्कों के आगमन से भारत में नए शहर बसे, व्यापार बढ़ा और दो भिन्न संस्कृतियों (हिंदू और इस्लामी) के संपर्क से एक नई <b>मिश्रित संस्कृति का विकास</b> प्रारंभ हुआ।"
    },
    {
        question: "प्रश्न 36. कुतुबुद्दीन ऐबक ने दिल्ली में 'कुव्वत-उल-इस्लाम' मस्जिद का निर्माण किन मंदिरों के अवशेषों पर करवाया था?",
        answers: shuffle([
            { text: "बौद्ध मठ", correct: false },
            { text: "27 हिंदू और जैन मंदिर", correct: true },
            { text: "शिव मंदिर", correct: false },
            { text: "विष्णु मंदिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऐबक ने पृथ्वीराज चौहान के किले 'राय पिथौरा' के स्थान पर <b>27 हिंदू और जैन मंदिरों को तोड़कर उनकी सामग्री</b> से भारत की पहली 'कुव्वत-उल-इस्लाम' मस्जिद का निर्माण करवाया।"
    },
    {
        question: "प्रश्न 37. मुहम्मद गोरी का भारत पर आक्रमण करने का मुख्य उद्देश्य क्या था?",
        answers: shuffle([
            { text: "केवल धन लूटना", correct: false },
            { text: "केवल इस्लाम का प्रचार करना", correct: false },
            { text: "एक स्थायी मुस्लिम साम्राज्य की स्थापना करना", correct: true },
            { text: "बौद्धों को दंडित करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महमूद गजनवी के विपरीत, जिसका मुख्य उद्देश्य धन लूटना था, मुहम्मद गोरी भारत में अपने साम्राज्य का विस्तार करना चाहता था और <b>एक स्थायी शासन स्थापित</b> करना चाहता था।"
    },
    {
        question: "प्रश्न 38. 'ताज-उल-मासिर' का लेखक कौन है, जो गोरी के भारतीय अभियानों का एक महत्वपूर्ण स्रोत है?",
        answers: shuffle([
            { text: "मिनहाज-उस-सिराज", correct: false },
            { text: "जियाउद्दीन बरनी", correct: false },
            { text: "हसन निजामी", correct: true },
            { text: "अमीर खुसरो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>हसन निजामी</b> की '<b>ताज-उल-मासिर</b>' दिल्ली सल्तनत के प्रारंभिक इतिहास, विशेष रूप से गोरी के आक्रमणों और कुतुबुद्दीन ऐबक के शासनकाल का एक समकालीन फारसी वृत्तांत है।"
    },
    {
        question: "प्रश्न 39. कुतुबुद्दीन ऐबक ने किस राजपूत राज्य पर आक्रमण नहीं किया था?",
        answers: shuffle([
            { text: "दिल्ली और अजमेर", correct: false },
            { text: "कन्नौज", correct: false },
            { text: "कालिंजर", correct: false },
            { text: "मेवाड़", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि तुर्कों ने गुजरात और आसपास के क्षेत्रों पर आक्रमण किए, लेकिन <b>मेवाड़</b> का राजपूत राज्य (चित्तौड़) अपनी स्वतंत्रता को लंबे समय तक बनाए रखने में सफल रहा और सल्तनत काल में प्रतिरोध का एक प्रमुख केंद्र बना रहा।"
    },
    {
        question: "प्रश्न 40. मुहम्मद गोरी ने अपने अंतिम अभियान (1205-06 ई.) में भारत की किस जनजाति को पराजित किया था?",
        answers: shuffle([
            { text: "जाट", correct: false },
            { text: "खोक्कर", correct: true },
            { text: "भील", correct: false },
            { text: "गोंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोरी अपना अंतिम अभियान पंजाब के <b>खोक्कर</b> विद्रोहियों को दंडित करने के लिए आया था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने झेलम और चिनाब नदियों के बीच हुए युद्ध में उन्हें बुरी तरह पराजित किया।"
    },
    {
        question: "प्रश्न 41. 'राय पिथौरा' किसे कहा जाता था?",
        answers: shuffle([
            { text: "जयचंद", correct: false },
            { text: "गोविंदराज", correct: false },
            { text: "मुहम्मद गोरी", correct: false },
            { text: "पृथ्वीराज चौहान", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>पृथ्वीराज चौहान</b> को उनकी वीरता और दिल्ली के निर्माण के कारण '<b>राय पिथौरा</b>' के नाम से भी जाना जाता था।"
    },
    {
        question: "प्रश्न 42. 'तबकात-ए-नासिरी' ग्रंथ किसने लिखा है, जिसमें मुहम्मद गोरी के बारे में विस्तृत जानकारी है?",
        answers: shuffle([
            { text: "हसन निजामी", correct: false },
            { text: "जियाउद्दीन बरनी", correct: false },
            { text: "मिनहाज-उस-सिराज", correct: true },
            { text: "इब्न बतूता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मिनहाज-उस-सिराज</b> द्वारा रचित '<b>तबकात-ए-नासिरी</b>' घुरिद वंश और दिल्ली सल्तनत के प्रारंभिक इतिहास का एक बहुत ही विश्वसनीय और विस्तृत स्रोत माना जाता है।"
    },
    {
        question: "प्रश्न 43. मुहम्मद गोरी के भारतीय अभियानों के दौरान सूफी संत ख्वाजा मुईनुद्दीन चिश्ती किस शासक के समय अजमेर आए थे?",
        answers: shuffle([
            { text: "विग्रहराज चतुर्थ", correct: false },
            { text: "पृथ्वीराज चौहान", correct: true },
            { text: "जयचंद", correct: false },
            { text: "भीम द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माना जाता है कि प्रसिद्ध चिश्ती संत <b>ख्वाजा मुईनुद्दीन चिश्ती</b>, मुहम्मद गोरी की सेना के साथ या उसके तुरंत बाद, <b>पृथ्वीराज चौहान</b> के शासनकाल के अंत में अजमेर आए और वहीं बस गए।"
    },
    {
        question: "प्रश्न 44. तराइन के द्वितीय युद्ध में पृथ्वीराज चौहान का साथ किस एकमात्र प्रमुख शासक ने नहीं दिया था, जिससे राजपूत एकता कमजोर हुई?",
        answers: shuffle([
            { text: "मेवाड़ के शासक", correct: false },
            { text: "चंदेल शासक परमर्दिदेव", correct: false },
            { text: "कन्नौज के शासक जयचंद", correct: true },
            { text: "गुजरात के शासक भीम द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वीराज चौहान और <b>जयचंद</b> के बीच व्यक्तिगत शत्रुता (संयोगिता के प्रसंग को लेकर) थी, जिसके कारण जयचंद ने तराइन के युद्ध में पृथ्वीराज का साथ नहीं दिया।"
    },
    {
        question: "प्रश्न 45. तराइन के द्वितीय युद्ध में पृथ्वीराज चौहान कहाँ से पकड़ा गया था?",
        answers: shuffle([
            { text: "युद्ध के मैदान से", correct: false },
            { text: "दिल्ली से", correct: false },
            { text: "अजमेर से", correct: false },
            { text: "सिरसा (हरियाणा) के पास से", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> युद्ध में हार के बाद जब पृथ्वीराज चौहान घोड़े पर भागने की कोशिश कर रहा था, तो उसे <b>सिरसा के पास से</b> पकड़ लिया गया।"
    },
    {
        question: "प्रश्न 46. गोरी ने कुतुबुद्दीन ऐबक को कौन सी उपाधि प्रदान की थी?",
        answers: shuffle([
            { text: "सुल्तान", correct: false },
            { text: "मलिक और सिपहसालार", correct: true },
            { text: "अमीर-ए-आखुर", correct: false },
            { text: "खान-ए-खाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुहम्मद गोरी ने ऐबक को औपचारिक रूप से भारत का वायसराय नियुक्त किया और उसे '<b>मलिक</b>' और '<b>सिपहसालार</b>' (सेनापति) की उपाधियाँ दीं।"
    },
    {
        question: "प्रश्न 47. मुहम्मद गोरी ने किस शहर को अपनी पूर्वी राजधानी बनाया था?",
        answers: shuffle([
            { text: "दिल्ली", correct: false },
            { text: "अजमेर", correct: false },
            { text: "लाहौर", correct: true },
            { text: "गजनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोरी के समय में, उसके भारतीय साम्राज्य की प्रशासनिक राजधानी <b>लाहौर</b> हुआ करती थी।<br><br><i class='fa-solid fa-angles-right icon'></i> दिल्ली को राजधानी बाद में इल्तुतमिश ने बनाया।"
    },
    {
        question: "प्रश्न 48. मुहम्मद गोरी के तीन प्रमुख गुलाम कौन थे जिन्होंने उसके साम्राज्य को आपस में बांटा?",
        answers: shuffle([
            { text: "ऐबक, इल्तुतमिश, बलबन", correct: false },
            { text: "ऐबक, यिल्दिज, कुबाचा", correct: true },
            { text: "ऐबक, खिलजी, आरामशाह", correct: false },
            { text: "यिल्दिज, कुबाचा, इल्तुतमिश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोरी की मृत्यु के बाद, भारतीय प्रांत <b>कुतुबुद्दीन ऐबक</b> को, गजनी का क्षेत्र <b>ताजुद्दीन यिल्दिज</b> को और सिंध तथा मुल्तान का क्षेत्र <b>नासिरुद्दीन कुबाचा</b> को मिला।"
    },
    {
        question: "प्रश्न 49. मुहम्मद गोरी के आक्रमण के समय चंदेल वंश का शासक कौन था, जिसे ऐबक ने 1202 ई. में हराया था?",
        answers: shuffle([
            { text: "धंगदेव", correct: false },
            { text: "विद्याधर", correct: false },
            { text: "परमर्दिदेव (परमाल)", correct: true },
            { text: "कीर्तिवर्मन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1202-03 ई. में कुतुबुद्दीन ऐबक ने बुंदेलखंड पर आक्रमण कर कालिंजर के किले को घेर लिया और चंदेल शासक <b>परमर्दिदेव</b> को संधि के लिए विवश किया।"
    },
    {
        question: "प्रश्न 50. आल्हा और ऊदल नामक प्रसिद्ध वीर योद्धा किस शासक के सेनानायक थे?",
        answers: shuffle([
            { text: "पृथ्वीराज चौहान", correct: false },
            { text: "जयचंद", correct: false },
            { text: "परमर्दिदेव", correct: true },
            { text: "भीम द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>आल्हा और ऊदल</b>, चंदेल शासक <b>परमर्दिदेव</b> के महान सेनापति थे, जो अपनी वीरता के लिए बुंदेलखंड में आज भी लोक कथाओं में प्रसिद्ध हैं।"
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