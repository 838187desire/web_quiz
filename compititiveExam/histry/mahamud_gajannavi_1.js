const questions = [
    {
        topHeading: "महमूद गजनवी पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. महमूद गजनवी का जन्म किस वर्ष हुआ था?",
        answers: shuffle([
            { text: "971 ई.", correct: true },
            { text: "975 ई.", correct: false },
            { text: "980 ई.", correct: false },
            { text: "962 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महमूद गजनवी का जन्म 2 नवंबर <b>971 ई.</b> में गजनी, अफगानिस्तान में हुआ था।"
    },
    {
        question: "प्रश्न 2. महमूद गजनवी किस वंश से संबंधित था?",
        answers: shuffle([
            { text: "गुलाम वंश", correct: false },
            { text: "यामिनी वंश", correct: true },
            { text: "सल्जूक वंश", correct: false },
            { text: "खिलजी वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महमूद गजनवी <b>यामिनी वंश</b> से संबंधित था, जिसकी स्थापना उसके पिता <b>सुबुक्तगीन</b> ने की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इस वंश को <b>गजनवी वंश</b> भी कहा जाता है।"
    },
    {
        question: "प्रश्न 3. महमूद गजनवी के पिता का क्या नाम था?",
        answers: shuffle([
            { text: "अलप्तगीन", correct: false },
            { text: "सुबुक्तगीन", correct: true },
            { text: "इस्माइल", correct: false },
            { text: "मसूद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सुबुक्तगीन</b> एक तुर्क सरदार और गजनी का शासक था, जो महमूद गजनवी का पिता था।"
    },
    {
        question: "प्रश्न 4. महमूद गजनवी गजनी की गद्दी पर कब बैठा?",
        answers: shuffle([
            { text: "995 ई.", correct: false },
            { text: "998 ई.", correct: true },
            { text: "999 ई.", correct: false },
            { text: "997 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपने पिता सुबुक्तगीन की मृत्यु के बाद, अपने भाई इस्माइल को हराकर महमूद गजनवी <b>998 ई.</b> में गजनी के सिंहासन पर बैठा।"
    },
    {
        question: "प्रश्न 5. महमूद गजनवी के समय में भारत में लिखे गए प्रसिद्ध नाटक 'प्रबोधचंद्रोदय' के लेखक कौन थे?",
        answers: shuffle([
            { text: "राजशेखर", correct: false },
            { text: "कृष्ण मिश्र", correct: true },
            { text: "भवभूति", correct: false },
            { text: "श्रीहर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह नाटक <b>चंदेल राजा कीर्तिवर्मन</b> के दरबार में लिखा गया था, जो गजनवी काल के बाद का है, लेकिन यह उस दौर की बौद्धिक परंपरा को दर्शाता है।"
    },
    {
        question: "प्रश्न 6. बगदाद के किस खलीफा ने महमूद गजनवी को 'यमीन-उद-दौला' तथा 'अमीन-उल-मिल्लत' की उपाधियाँ प्रदान कीं?",
        answers: shuffle([
            { text: "अल-मुस्तansir", correct: false },
            { text: "अल-कादिर बिल्लाह", correct: true },
            { text: "अल-मुत्तकी", correct: false },
            { text: "अल-हाकिम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बगदाद के अब्बासी खलीफा <b>अल-कादिर बिल्लाह</b> ने महमूद गजनवी के शासन को मान्यता दी और उसे '<b>यमीन-उद-दौला</b>' (साम्राज्य का दाहिना हाथ) और '<b>अमीन-उल-मिल्लत</b>' (धर्म का रक्षक) की उपाधियाँ दीं।"
    },
    {
        question: "प्रश्न 7. महमूद गजनवी ने भारत पर कुल कितनी बार आक्रमण किया?",
        answers: shuffle([
            { text: "15", correct: false },
            { text: "16", correct: false },
            { text: "17", correct: true },
            { text: "18", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रसिद्ध इतिहासकार <b>सर हेनरी इलियट</b> के अनुसार, महमूद गजनवी ने <b>1000 ई. से 1027 ई.</b> के बीच भारत पर कुल <b>17 बार</b> आक्रमण किए।"
    },
    {
        question: "प्रश्न 8. महमूद गजनवी ने भारत पर पहला आक्रमण कब किया था?",
        answers: shuffle([
            { text: "1001 ई.", correct: false },
            { text: "1000 ई.", correct: true },
            { text: "1002 ई.", correct: false },
            { text: "999 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महमूद गजनवी ने अपना पहला आक्रमण <b>1000 ई.</b> में आधुनिक अफगानिस्तान और पाकिस्तान के सीमावर्ती नगरों और किलों पर किया था।"
    },
    {
        question: "प्रश्न 9. 1001 ई. में महमूद गजनवी ने किस हिन्दूशाही शासक को पराजित किया था?",
        answers: shuffle([
            { text: "आनंदपाल", correct: false },
            { text: "जयपाल", correct: true },
            { text: "त्रिलोचनपाल", correct: false },
            { text: "भीमपाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेशावर के निकट हुए इस युद्ध में हिन्दूशाही वंश के राजा <b>जयपाल</b> की हार हुई।<br><br><i class='fa-solid fa-angles-right icon'></i> इस पराजय से अपमानित होकर उन्होंने <b>आत्मदाह</b> कर लिया।"
    },
    {
        question: "प्रश्न 10. महमूद गजनवी ने 'मूर्तिभंजक' (बुतशिकन) की उपाधि क्यों धारण की?",
        answers: shuffle([
            { text: "नए साम्राज्य की स्थापना के लिए", correct: false },
            { text: "भारत की मूर्तियों को तोड़ने के कारण", correct: true },
            { text: "खलीफा को प्रसन्न करने के लिए", correct: false },
            { text: "अपनी सैन्य शक्ति दिखाने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत पर अपने आक्रमणों के दौरान, विशेषकर मंदिरों पर आक्रमण कर <b>मूर्तियों को तोड़ने</b> के कारण उसने स्वयं को '<b>बुतशिकन</b>' या '<b>मूर्तिभंजक</b>' कहलाया।"
    },
    {
        question: "प्रश्न 11. महमूद गजनवी के बाद के गजनवी शासक भारत में क्यों सफल नहीं हो सके?",
        answers: shuffle([
            { text: "भारतीय राजा बहुत शक्तिशाली हो गए थे", correct: false },
            { text: "वे सल्जूकों के साथ मध्य एशिया में युद्धों में उलझे रहे", correct: false },
            { text: "उनमें महमूद जैसी सैन्य प्रतिभा का अभाव था", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महमूद के उत्तराधिकारी <b>कमजोर</b> थे, उन्हें पश्चिम में <b>सल्जूकों से लगातार लड़ना</b> पड़ रहा था, और इसी बीच भारतीय राजाओं ने भी अपनी शक्ति को <b>पुनर्गठित</b> कर लिया था।"
    },
    {
        question: "प्रश्न 12. 'किताब-उल-हिन्द' या 'तहकीक-ए-हिन्द' नामक पुस्तक की रचना किसने की?",
        answers: shuffle([
            { text: "हसन निजामी", correct: false },
            { text: "अमीर खुसरो", correct: false },
            { text: "जियाउद्दीन बरनी", correct: false },
            { text: "अल-बिरूनी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह पुस्तक <b>11वीं शताब्दी</b> के भारत के बारे में सबसे प्रामाणिक स्रोतों में से एक है, जिसे <b>अल-बिरूनी</b> ने <b>अरबी भाषा</b> में लिखा था।"
    },
    {
        question: "प्रश्न 13. 'शाहनामा' के लेखक फिरदौसी किस शासक के दरबारी कवि थे?",
        answers: shuffle([
            { text: "सुबुक्तगीन", correct: false },
            { text: "महमूद गजनवी", correct: true },
            { text: "मुहम्मद गोरी", correct: false },
            { text: "अलप्तगीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>फिरदौसी</b> महमूद गजनवी का दरबारी कवि था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने '<b>शाहनामा</b>' नामक महाकाव्य की रचना की, जिसे फारसी भाषा का एक उत्कृष्ट ग्रंथ माना जाता है।"
    },
    {
        question: "प्रश्न 14. महमूद गजनवी का दरबारी इतिहासकार कौन था, जिसने 'किताब-उल-यामिनी' लिखी?",
        answers: shuffle([
            { text: "फिरदौसी", correct: false },
            { text: "हसन निजामी", correct: false },
            { text: "उत्बी", correct: true },
            { text: "बैहाकी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>उत्बी</b> महमूद गजनवी का सचिव और दरबारी इतिहासकार था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसकी पुस्तक '<b>किताब-उल-यामिनी</b>' में सुबुक्तगीन और महमूद गजनवी के शासनकाल की घटनाओं का वर्णन है।"
    },
    {
        question: "प्रश्न 15. महमूद गजनवी का सबसे प्रसिद्ध और विनाशकारी आक्रमण कौन सा था?",
        answers: shuffle([
            { text: "कन्नौज पर आक्रमण", correct: false },
            { text: "सोमनाथ मंदिर पर आक्रमण", correct: true },
            { text: "नगरकोट पर आक्रमण", correct: false },
            { text: "थानेसर पर आक्रमण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1025 ई.</b> में किया गया <b>सोमनाथ मंदिर</b> (गुजरात) पर आक्रमण उसका <b>16वां और सबसे चर्चित</b> आक्रमण था, जिसमें उसने मंदिर को नष्ट कर अपार संपत्ति लूटी।"
    },
    {
        question: "प्रश्न 16. महमूद गजनवी के सोमनाथ आक्रमण के समय गुजरात का शासक कौन था?",
        answers: shuffle([
            { text: "भीम प्रथम", correct: true },
            { text: "जयसिंह सिद्धराज", correct: false },
            { text: "कुमारपाल", correct: false },
            { text: "मूलराज प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब महमूद गजनवी ने सोमनाथ पर आक्रमण किया, उस समय गुजरात पर चालुक्य (सोलंकी) वंश के राजा <b>भीम प्रथम</b> का शासन था।"
    },
    {
        question: "प्रश्न 17. महमूद गजनवी ने नगरकोट (कांगड़ा) के किले पर कब आक्रमण किया?",
        answers: shuffle([
            { text: "1001 ई.", correct: false },
            { text: "1005 ई.", correct: false },
            { text: "1009 ई.", correct: true },
            { text: "1014 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह उसका <b>छठा आक्रमण</b> था, जिसमें उसने <b>नगरकोट</b> के मंदिर को लूटा था।<br><br><i class='fa-solid fa-angles-right icon'></i> इस मंदिर में संग्रहीत <b>अपार धन-संपत्ति</b> उसके हाथ लगी।"
    },
    {
        question: "प्रश्न 18. महमूद गजनवी ने कन्नौज और मथुरा पर कब आक्रमण किया था?",
        answers: shuffle([
            { text: "1010-1011 ई.", correct: false },
            { text: "1018-1019 ई.", correct: true },
            { text: "1021-1022 ई.", correct: false },
            { text: "1024-1025 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपने <b>12वें अभियान</b> में उसने पहले बुलंदशहर, फिर <b>मथुरा</b> और अंत में <b>कन्नौज</b> पर आक्रमण कर इन नगरों को बुरी तरह लूटा और मंदिरों को नष्ट किया।"
    },
    {
        question: "प्रश्न 19. महमूद गजनवी के भारत पर आक्रमण का मुख्य उद्देश्य क्या था?",
        answers: shuffle([
            { text: "इस्लाम धर्म का प्रचार करना", correct: false },
            { text: "भारत में स्थायी मुस्लिम साम्राज्य स्थापित करना", correct: false },
            { text: "भारत की धन-संपत्ति को लूटना", correct: true },
            { text: "भारतीय शासकों को दंडित करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि इस्लाम का प्रचार और मूर्तिपूजा का खंडन भी उसके उद्देश्य थे, लेकिन उसका <b>सर्वप्रमुख उद्देश्य</b> भारत के मंदिरों और नगरों में संग्रहीत <b>अपार धन को लूटना</b> था ताकि वह मध्य एशिया में अपने साम्राज्य को मजबूत कर सके।"
    },
    {
        question: "प्रश्न 20. महमूद गजनवी ने अपना अंतिम भारतीय अभियान (17वां आक्रमण) किसके विरुद्ध किया था?",
        answers: shuffle([
            { text: "जाटों के विरुद्ध", correct: true },
            { text: "राजपूतों के विरुद्ध", correct: false },
            { text: "चंदेलों के विरुद्ध", correct: false },
            { text: "खोखरों के विरुद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1027 ई.</b> में उसने अपना अंतिम आक्रमण सिंध और मुल्तान के तटवर्ती क्षेत्रों के <b>जाटों</b> के विरुद्ध किया, जिन्होंने सोमनाथ से लौटते समय उसकी सेना को परेशान किया था।"
    },
    {
        question: "प्रश्न 21. हिन्दूशाही शासक आनंदपाल, जिसने महमूद गजनवी का सामना किया, वह किसका पुत्र था?",
        answers: shuffle([
            { text: "भीमपाल", correct: false },
            { text: "त्रिलोचनपाल", correct: false },
            { text: "जयपाल", correct: true },
            { text: "सुखपाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>आनंदपाल</b> हिन्दूशाही शासक <b>जयपाल</b> का पुत्र और उत्तराधिकारी था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने 1008-09 ई. में वैहिन्द के युद्ध में महमूद गजनवी का सामना किया था।"
    },
    {
        question: "प्रश्न 22. 'सुल्तान' शब्द का शाब्दिक अर्थ क्या है?",
        answers: shuffle([
            { text: "राजा", correct: false },
            { text: "सम्राट", correct: false },
            { text: "शक्ति या अधिकार", correct: true },
            { text: "ईश्वर का प्रतिनिधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरबी भाषा में '<b>सुल्तान</b>' शब्द का मूल अर्थ <b>शक्ति, अधिकार या प्रभुत्व</b> होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> शासक के रूप में, यह एक स्वतंत्र और शक्तिशाली राजा को दर्शाता है।"
    },
    {
        question: "प्रश्न 23. महमूद गजनवी की मृत्यु कब और कहाँ हुई?",
        answers: shuffle([
            { text: "1030 ई., गजनी में", correct: true },
            { text: "1027 ई., मुल्तान में", correct: false },
            { text: "1035 ई., लाहौर में", correct: false },
            { text: "1032 ई., बगदाद में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत से लूटी गई संपत्ति और निरंतर युद्धों के कारण उसका स्वास्थ्य बिगड़ गया और <b>30 अप्रैल 1030 ई.</b> को मलेरिया से उसकी मृत्यु <b>गजनी</b> में हो गई।"
    },
    {
        question: "प्रश्न 24. महमूद गजनवी ने किस भारतीय शहर को अपनी पूर्वी राजधानी बनाया था?",
        answers: shuffle([
            { text: "दिल्ली", correct: false },
            { text: "मुल्तान", correct: false },
            { text: "पेशावर", correct: false },
            { text: "लाहौर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पंजाब पर पूर्ण अधिकार करने के बाद, महमूद गजनवी ने अपने भारतीय प्रांतों के प्रशासन के लिए <b>लाहौर</b> को केंद्र या एक प्रकार की <b>पूर्वी राजधानी</b> बनाया।"
    },
    {
        question: "प्रश्न 25. वैहिन्द का युद्ध (1008-09 ई.) महमूद गजनवी और किसके बीच लड़ा गया था?",
        answers: shuffle([
            { text: "जयपाल", correct: false },
            { text: "भीम प्रथम", correct: false },
            { text: "आनंदपाल के नेतृत्व वाले हिन्दू राजाओं का संघ", correct: true },
            { text: "विद्याधर चंदेल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह युद्ध महमूद गजनवी और <b>आनंदपाल के नेतृत्व में उज्जैन, ग्वालियर, कालिंजर, कन्नौज, दिल्ली और अजमेर के राजाओं के एक संघ</b> के बीच हुआ था, जिसमें संघ की पराजय हुई।"
    },
    {
        question: "प्रश्न 26. पुराणों का अध्ययन करने वाला प्रथम मुसलमान कौन था?",
        answers: shuffle([
            { text: "अमीर खुसरो", correct: false },
            { text: "दारा शिकोह", correct: false },
            { text: "अल-बिरूनी", correct: true },
            { text: "अबुल फजल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अल-बिरूनी</b> संस्कृत का ज्ञाता था और उसने हिंदू धर्मग्रंथों, विशेषकर <b>पुराणों, भगवद्गीता और वेदों</b> का गहन अध्ययन किया था।"
    },
    {
        question: "प्रश्न 27. महमूद गजनवी ने थानेसर के चक्रस्वामी मंदिर पर कब आक्रमण किया?",
        answers: shuffle([
            { text: "1011 ई.", correct: false },
            { text: "1014 ई.", correct: true },
            { text: "1018 ई.", correct: false },
            { text: "1021 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपने नौवें अभियान में उसने हरियाणा के <b>थानेसर</b> पर आक्रमण कर <b>चक्रस्वामी (भगवान विष्णु)</b> की काँस्य प्रतिमा को नष्ट कर दिया और उसे गजनी ले गया।"
    },
    {
        question: "प्रश्न 28. चंदेल शासक विद्याधर ने किस शासक की हत्या कर दी थी क्योंकि उसने महमूद गजनवी के सामने आत्मसमर्पण कर दिया था?",
        answers: shuffle([
            { text: "आनंदपाल", correct: false },
            { text: "राज्यपाल प्रतिहार", correct: true },
            { text: "जयपाल", correct: false },
            { text: "त्रिलोचनपाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कन्नौज के प्रतिहार शासक <b>राज्यपाल</b> ने महमूद गजनवी के सामने बिना लड़े आत्मसमर्पण कर दिया, तो चंदेल राजा <b>विद्याधर</b> ने क्रोधित होकर उसकी हत्या कर दी।"
    },
    {
        question: "प्रश्न 29. कौन सा एकमात्र चंदेल शासक था जिसने महमूद गजनवी का सफलतापूर्वक प्रतिरोध किया?",
        answers: shuffle([
            { text: "धंगदेव", correct: false },
            { text: "यशोवर्मन", correct: false },
            { text: "विद्याधर", correct: true },
            { text: "कीर्तिवर्मन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>विद्याधर</b> उस समय का सबसे शक्तिशाली भारतीय राजा था।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>1019 और 1022 ई.</b> में महमूद गजनवी और उसकी सेना के बीच हुए संघर्ष <b>अनिर्णायक</b> रहे, जिससे गजनवी को वापस लौटना पड़ा।"
    },
    {
        question: "प्रश्न 30. महमूद गजनवी ने चांदी के सिक्के जारी किए थे, जिन पर एक तरफ अरबी और दूसरी तरफ कौन सी भाषा अंकित थी?",
        answers: shuffle([
            { text: "फारसी", correct: false },
            { text: "प्राकृत", correct: false },
            { text: "संस्कृत", correct: true },
            { text: "तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महमूद गजनवी ने <b>द्विभाषी सिक्के</b> जारी किए, जिन पर एक तरफ अरबी में कलमा और दूसरी तरफ <b>संस्कृत</b> में (देवनागरी लिपि में) उसका अनुवाद \"<b>अव्यक्तमेकम् मुहम्मद अवतार नृपति महमूद</b>\" अंकित था।"
    },
    {
        question: "प्रश्न 31. जयपाल की मृत्यु के बाद हिन्दूशाही वंश की राजधानी कहाँ स्थानांतरित की गई?",
        answers: shuffle([
            { text: "पेशावर", correct: false },
            { text: "लाहौर", correct: false },
            { text: "नन्दना (उदभांडपुर)", correct: true },
            { text: "मुल्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जयपाल की मृत्यु के बाद उसके पुत्र आनंदपाल ने राजधानी को वैहिन्द (पेशावर के पास) से हटाकर नमक कोह पर्वत श्रृंखला में स्थित <b>नन्दना</b> को बनाया।"
    },
    {
        question: "प्रश्न 32. महमूद गजनवी के आक्रमणों का भारत पर सबसे महत्वपूर्ण राजनीतिक प्रभाव क्या पड़ा?",
        answers: shuffle([
            { text: "भारत में तुर्क शासन की स्थापना हुई", correct: false },
            { text: "उत्तर-पश्चिम भारत राजनीतिक रूप से कमजोर हो गया", correct: true },
            { text: "राजपूतों का उदय हुआ", correct: false },
            { text: "भारतीय राजाओं में एकता स्थापित हुई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उसके लगातार आक्रमणों ने हिन्दूशाही राज्य को नष्ट कर दिया और <b>उत्तर-पश्चिम भारत की रक्षा पंक्ति को तोड़ दिया</b>, जिससे भविष्य में तुर्क आक्रमणों का मार्ग प्रशस्त हुआ।"
    },
    {
        question: "प्रश्न 33. अलप्तगीन कौन था, जिसने गजनी में स्वतंत्र तुर्क राज्य की स्थापना की?",
        answers: shuffle([
            { text: "सुबुक्तगीन का पिता", correct: false },
            { text: "सुबुक्तगीन का गुलाम और दामाद", correct: false },
            { text: "बगदाद का खलीफा", correct: false },
            { text: "सामानी साम्राज्य का एक गवर्नर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अलप्तगीन</b> मूल रूप से बुखारा के <b>सामानी साम्राज्य का एक तुर्क गुलाम अधिकारी</b> था, जिसने बाद में गजनी में एक स्वतंत्र राज्य की नींव रखी।<br><br><i class='fa-solid fa-angles-right icon'></i> सुबुक्तगीन उसी का गुलाम था।"
    },
    {
        question: "प्रश्न 34. महमूद गजनवी द्वारा लूटी गई संपत्ति का उपयोग मुख्य रूप से कहाँ किया गया?",
        answers: shuffle([
            { text: "भारत में किलों के निर्माण में", correct: false },
            { text: "अपनी सेना को मजबूत करने में", correct: false },
            { text: "गजनी को एक भव्य राजधानी बनाने में", correct: true },
            { text: "खलीफा को उपहार देने में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उसने भारत से लूटे गए धन का उपयोग <b>गजनी में शानदार मस्जिदों, पुस्तकालयों, महलों और एक विश्वविद्यालय</b> का निर्माण करने में किया, जिससे गजनी मध्य एशिया का एक प्रमुख <b>सांस्कृतिक केंद्र</b> बन गया।"
    },
    {
        question: "प्रश्न 35. 'गजी' की उपाधि किसने धारण की थी?",
        answers: shuffle([
            { text: "मुहम्मद गोरी", correct: false },
            { text: "कुतुबुद्दीन ऐबक", correct: false },
            { text: "महमूद गजनवी", correct: true },
            { text: "सुबुक्तगीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>गजी</b>' का अर्थ होता है '<b>काफिरों का वध करने वाला</b>'।<br><br><i class='fa-solid fa-angles-right icon'></i> इस्लाम के प्रचार और हिंदू मंदिरों को तोड़ने के कारण उसने यह उपाधि भी धारण की थी।"
    },
    {
        question: "प्रश्न 36. महमूद गजनवी ने किस दर्रे का उपयोग करके भारत पर आक्रमण किया?",
        answers: shuffle([
            { text: "बोलन दर्रा", correct: false },
            { text: "गोमल दर्रा", correct: false },
            { text: "खैबर दर्रा", correct: true },
            { text: "काराकोरम दर्रा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>खैबर दर्रा</b> (आधुनिक पाकिस्तान-अफगानिस्तान सीमा) उस समय भारत में प्रवेश करने का सबसे प्रमुख और <b>रणनीतिक मार्ग</b> था, जिसका उपयोग अधिकांश आक्रमणकारियों ने किया।"
    },
    {
        question: "प्रश्न 37. महमूद गजनवी ने मुल्तान पर कब विजय प्राप्त की?",
        answers: shuffle([
            { text: "1004 ई.", correct: false },
            { text: "1006 ई.", correct: true },
            { text: "1008 ई.", correct: false },
            { text: "1010 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उसने मुल्तान के <b>करमाथियन शासक अबुल फतह दाउद</b> के खिलाफ अभियान चलाया और उसे पराजित कर <b>1006 ई.</b> में मुल्तान पर अधिकार कर लिया।"
    },
    {
        question: "प्रश्न 38. निम्नलिखित में से कौन सा नगर महमूद गजनवी के आक्रमण से लगभग अछूता रहा?",
        answers: shuffle([
            { text: "मथुरा", correct: false },
            { text: "कन्नौज", correct: false },
            { text: "अजमेर", correct: true },
            { text: "थानेसर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महमूद गजनवी के आक्रमणों का मुख्य केंद्र पंजाब, गंगा घाटी और गुजरात रहा।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>अजमेर</b> उसके सीधे आक्रमणों के मार्ग में नहीं आया और काफी हद तक बचा रहा।"
    },
    {
        question: "प्रश्न 39. 'फिरदौसी' और महमूद गजनवी के बीच मनमुटाव का क्या कारण था?",
        answers: shuffle([
            { text: "धार्मिक मतभेद", correct: false },
            { text: "शाहनामा के लिए वादे के अनुसार भुगतान न करना", correct: true },
            { text: "दरबारी षड्यंत्र", correct: false },
            { text: "युद्ध की रणनीति पर असहमति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किंवदंती के अनुसार, महमूद ने फिरदौसी को 'शाहनामा' के प्रत्येक छंद के लिए एक सोने का सिक्का देने का वादा किया था, लेकिन बाद में <b>चांदी के सिक्के</b> दिए, जिससे कवि नाराज हो गया।"
    },
    {
        question: "प्रश्न 40. महमूद गजनवी के समकालीन गुजरात के चालुक्य वंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "भीम प्रथम", correct: false },
            { text: "कर्णदेव", correct: false },
            { text: "मूलराज प्रथम", correct: true },
            { text: "जयसिंह सिद्धराज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मूलराज प्रथम (942-995 ई.)</b> ने गुजरात में <b>चालुक्य (सोलंकी) वंश</b> की स्थापना की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> भीम प्रथम उसी का वंशज था।"
    },
    {
        question: "प्रश्न 41. सोमनाथ मंदिर किस देवता को समर्पित है?",
        answers: shuffle([
            { text: "विष्णु", correct: false },
            { text: "ब्रह्मा", correct: false },
            { text: "शिव", correct: true },
            { text: "सूर्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोमनाथ मंदिर भगवान <b>शिव</b> के बारह <b>ज्योतिर्लिंगों</b> में से पहला ज्योतिर्लिंग माना जाता है।"
    },
    {
        question: "प्रश्न 42. महमूद गजनवी द्वारा पराजित शासक 'सुखपाल' ने कौन सा धर्म अपना लिया था?",
        answers: shuffle([
            { text: "बौद्ध धर्म", correct: false },
            { text: "जैन धर्म", correct: false },
            { text: "ईसाई धर्म", correct: false },
            { text: "इस्लाम धर्म", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सुखपाल</b>, जो आनंदपाल का संबंधी था, ने <b>इस्लाम</b> कबूल कर लिया था और उसे '<b>नवासा शाह</b>' नाम दिया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में उसने विद्रोह कर दिया था।"
    },
    {
        question: "प्रश्न 43. महमूद गजनवी के आक्रमण के समय कालिंजर पर किस वंश का शासन था?",
        answers: shuffle([
            { text: "प्रतिहार", correct: false },
            { text: "परमार", correct: false },
            { text: "चंदेल", correct: true },
            { text: "राष्ट्रकूट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालिंजर (आधुनिक बुंदेलखंड) <b>चंदेल राजपूतों</b> का एक मजबूत किला था और उस समय वहाँ का शासक <b>विद्याधर</b> था।"
    },
    {
        question: "प्रश्न 44. महमूद गजनवी ने पंजाब को अपने साम्राज्य में कब मिलाया?",
        answers: shuffle([
            { text: "1001 ई.", correct: false },
            { text: "1009 ई.", correct: false },
            { text: "1021 ई.", correct: true },
            { text: "1025 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> त्रिलोचनपाल और उसके पुत्र भीमपाल की मृत्यु के बाद हिन्दूशाही वंश का अंत हो गया और महमूद ने <b>1021 ई. के आसपास पंजाब को सीधे अपने गजनवी साम्राज्य में मिला लिया</b>।"
    },
    {
        question: "प्रश्न 45. महमूद गजनवी के सिक्कों पर उसे किस रूप में दर्शाया गया है?",
        answers: shuffle([
            { text: "अमीर महमूद", correct: true },
            { text: "सुल्तान महमूद", correct: false },
            { text: "गाजी महमूद", correct: false },
            { text: "बादशाह महमूद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि उसने सुल्तान की उपाधि का प्रयोग किया, लेकिन उसके सिक्कों पर उसका नाम '<b>अमीर महमूद</b>' अंकित मिलता है, जो खलीफा के प्रति उसकी <b>अधीनता</b> को दर्शाता है।"
    },
    {
        question: "प्रश्न 46. किस इतिहासकार ने महमूद गजनवी के आक्रमणों को 'जिहाद' (धर्मयुद्ध) का रूप दिया?",
        answers: shuffle([
            { text: "अल-बिरूनी", correct: false },
            { text: "उत्बी", correct: true },
            { text: "फिरदौसी", correct: false },
            { text: "बैहाकी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दरबारी इतिहासकार होने के नाते, <b>उत्बी</b> ने अपनी रचना 'किताब-उल-यामिनी' में महमूद के भारतीय अभियानों को इस्लाम की महिमा के लिए किया गया '<b>जिहाद</b>' बताया है।"
    },
    {
        question: "प्रश्न 47. महमूद गजनवी ने किस भारतीय शासक के विरुद्ध अभियान में पहली बार हाथियों की विशाल सेना का सामना किया?",
        answers: shuffle([
            { text: "जयपाल", correct: false },
            { text: "आनंदपाल", correct: true },
            { text: "विद्याधर", correct: false },
            { text: "भीम प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>वैहिन्द के युद्ध (1008-09 ई.)</b> में <b>आनंदपाल</b> के नेतृत्व वाले संघ की सेना में बड़ी संख्या में <b>युद्ध-प्रशिक्षित हाथी</b> थे, जिन्होंने शुरू में गजनवी की सेना को मुश्किल में डाल दिया था।"
    },
    {
        question: "प्रश्न 48. महमूद गजनवी की सेना में हिंदू सैनिक भी शामिल थे, उनका सेनापति कौन था?",
        answers: shuffle([
            { text: "तिलक", correct: true },
            { text: "जयसेन", correct: false },
            { text: "विजयराय", correct: false },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक उल्लेखनीय तथ्य है कि महमूद गजनवी की सेना में उच्च पदों पर हिंदू सैनिक भी थे।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>तिलक</b> नामक एक हिंदू उसका एक प्रमुख और विश्वसनीय <b>सेनापति</b> था।"
    },
    {
        question: "प्रश्न 49. सोमनाथ मंदिर को लूटकर वापस जाते समय महमूद गजनवी का मार्ग किसने रोका था?",
        answers: shuffle([
            { text: "परमार शासकों ने", correct: false },
            { text: "चौहान शासकों ने", correct: false },
            { text: "सिंध के जाटों ने", correct: true },
            { text: "चंदेल शासकों ने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब वह कच्छ के रण से होकर वापस जा रहा था, तो <b>सिंध के जाटों</b> ने उसकी सेना पर हमला करके उसे काफी नुकसान पहुँचाया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी का बदला लेने के लिए उसने 1027 में अपना अंतिम अभियान किया।"
    },
    {
        question: "प्रश्न 50. 'अमीन-उल-मिल्लत' उपाधि का शाब्दिक अर्थ क्या है?",
        answers: shuffle([
            { text: "साम्राज्य का रक्षक", correct: false },
            { text: "धर्म का रक्षक", correct: true },
            { text: "लोगों का नेता", correct: false },
            { text: "ईश्वर का सेवक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह उपाधि बगदाद के खलीफा द्वारा दी गई थी, जिसका अर्थ है '<b>मुस्लिम समुदाय या धर्म का रक्षक</b>'।"
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