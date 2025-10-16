const questions = [
    {
        topHeading: "मुहम्मद गोरी पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. मुहम्मद गोरी ने सबसे पहले किस राजपूत किले पर अधिकार किया था?",
        answers: shuffle([
            { text: "कालिंजर", correct: false },
            { text: "रणथंभौर", correct: false },
            { text: "भटिंडा (तबरहिन्द)", correct: true },
            { text: "ग्वालियर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1191 ई. में मुहम्मद गोरी ने <b>भटिंडा (तबरहिन्द)</b> के किले पर कब्जा कर लिया, जो पृथ्वीराज चौहान के राज्य की सीमा पर स्थित था।<br><br><i class='fa-solid fa-angles-right icon'></i> यही घटना तराइन के प्रथम युद्ध का तात्कालिक कारण बनी।"
    },
    {
        question: "प्रश्न 2. गोरी के किस गुलाम ने गजनी पर अधिकार कर लिया था?",
        answers: shuffle([
            { text: "कुतुबुद्दीन ऐबक", correct: false },
            { text: "नासिरुद्दीन कुबाचा", correct: false },
            { text: "ताजुद्दीन यिल्दिज", correct: true },
            { text: "बख्तियार खिलजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोरी की मृत्यु के बाद, उसका एक अन्य प्रभावशाली गुलाम <b>ताजुद्दीन यिल्दिज</b>, जो किरमान और शंकरान का शासक था, ने <b>गजनी</b> पर अपना अधिकार स्थापित कर लिया।"
    },
    {
        question: "प्रश्न 3. अन्हिलवाड़ा के युद्ध में गोरी की हार का मुख्य कारण क्या था?",
        answers: shuffle([
            { text: "राजपूतों की वीरता", correct: false },
            { text: "गोरी की सेना का थक जाना", correct: false },
            { text: "नायकी देवी की कुशल रणनीति और रेगिस्तानी इलाके से अनभिज्ञता", correct: true },
            { text: "खराब मौसम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>नायकी देवी</b> ने अपनी सेना को माउंट आबू के पास <b>कायदरा की घाटी</b> में तैनात किया, जो एक कठिन पहाड़ी और रेगिस्तानी इलाका था।<br><br><i class='fa-solid fa-angles-right icon'></i> गोरी की सेना इस इलाके से परिचित नहीं थी और बुरी तरह फंसकर हार गई।"
    },
    {
        question: "प्रश्न 4. कुतुबुद्दीन ऐबक द्वारा निर्मित 'अढाई दिन का झोपड़ा' मूल रूप से क्या था?",
        answers: shuffle([
            { text: "एक बौद्ध मठ", correct: false },
            { text: "एक संस्कृत विद्यालय", correct: true },
            { text: "एक महल", correct: false },
            { text: "एक जैन मंदिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>'अढाई दिन का झोपड़ा'</b> नामक मस्जिद अजमेर में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका निर्माण विग्रहराज चतुर्थ (बीसलदेव) द्वारा निर्मित एक <b>संस्कृत विद्यालय</b> और विष्णु मंदिर को तोड़कर किया गया था।"
    },
    {
        question: "प्रश्न 5. मुहम्मद गोरी के अभियानों का उद्देश्य महमूद गजनवी से किस प्रकार भिन्न था?",
        answers: shuffle([
            { text: "गोरी केवल इस्लाम का प्रचार चाहता था", correct: false },
            { text: "गोरी भारत में एक स्थायी साम्राज्य स्थापित करना चाहता था, जबकि गजनवी का उद्देश्य धन लूटना था", correct: true },
            { text: "गोरी गजनवी से कम महत्वाकांक्षी था", correct: false },
            { text: "दोनों के उद्देश्यों में कोई अंतर नहीं था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गजनवी ने 17 बार आक्रमण किए लेकिन पंजाब के अलावा कहीं स्थायी शासन स्थापित नहीं किया।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके विपरीत, गोरी <b>भारत में एक स्थायी साम्राज्य स्थापित करना चाहता था</b>, जबकि गजनवी का उद्देश्य केवल धन लूटना था।"
    },
    {
        question: "प्रश्न 6. मुहम्मद गोरी की मृत्यु के बाद उसके साम्राज्य का क्या हुआ?",
        answers: shuffle([
            { text: "यह उसके भाई को विरासत में मिला", correct: false },
            { text: "यह पूरी तरह से नष्ट हो गया", correct: false },
            { text: "यह उसके तीन प्रमुख गुलामों के बीच विभाजित हो गया", correct: true },
            { text: "इस पर मंगोलों ने कब्जा कर लिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोरी की कोई पुरुष संतान नहीं थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए उसकी मृत्यु के बाद उसका विशाल साम्राज्य <b>उसके तीन सबसे सक्षम गुलामों - ऐबक, यिल्दिज और कुबाचा के बीच बंट गया</b>।"
    },
    {
        question: "प्रश्न 7. तराइन के प्रथम युद्ध में मुहम्मद गोरी को किसने घायल किया था और उसकी जान किसने बचाई थी?",
        answers: shuffle([
            { text: "पृथ्वीराज ने घायल किया, एक खिलजी सैनिक ने बचाया", correct: false },
            { text: "गोविंदराज ने घायल किया, एक खिलजी घुड़सवार ने बचाया", correct: true },
            { text: "जयचंद ने घायल किया, ऐबक ने बचाया", correct: false },
            { text: "स्कंद ने घायल किया, यिल्दिज ने बचाया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> युद्ध के दौरान, दिल्ली के गवर्नर <b>गोविंदराज तोमर</b> ने अपने भाले से गोरी को घायल कर दिया था।<br><br><i class='fa-solid fa-angles-right icon'></i> गोरी घोड़े से गिरने ही वाला था कि एक युवा <b>खिलजी सैनिक</b> ने उसे सहारा देकर युद्ध के मैदान से सुरक्षित निकाल लिया।"
    },
    {
        question: "प्रश्न 8. मुहम्मद गोरी ने 'सुल्तान-ए-मुअज्जम' (महान सुल्तान) की उपाधि कब धारण की?",
        answers: shuffle([
            { text: "भारत पर आक्रमण से पहले", correct: false },
            { text: "तराइन का दूसरा युद्ध जीतने के बाद", correct: false },
            { text: "अपने भाई गयासुद्दीन की मृत्यु के बाद (1203 ई.)", correct: true },
            { text: "जब उसने दिल्ली सल्तनत की स्थापना की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब तक उसका बड़ा भाई गयासुद्दीन जीवित रहा, मुहम्मद गोरी ने उसके अधीन शासक के रूप में काम किया।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>1203 ई. में भाई की मृत्यु के बाद ही उसने सुल्तान की उपाधि धारण की</b> और घुरिद साम्राज्य का एकमात्र शासक बना।"
    },
    {
        question: "प्रश्न 9. किस भारतीय शासक ने तराइन के दूसरे युद्ध से पहले गोरी के आत्मसमर्पण के प्रस्ताव को ठुकरा दिया था?",
        answers: shuffle([
            { text: "जयचंद", correct: false },
            { text: "पृथ्वीराज चौहान", correct: true },
            { text: "भीम द्वितीय", correct: false },
            { text: "परमर्दिदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> युद्ध से पहले गोरी ने एक दूत भेजकर <b>पृथ्वीराज चौहान</b> को इस्लाम स्वीकार करने और उसकी अधीनता मानने के लिए कहा, जिसे पृथ्वीराज ने अपमानजनक मानकर अस्वीकार कर दिया।"
    },
    {
        question: "प्रश्न 10. 'चंदावर' का युद्ध स्थल वर्तमान में कहाँ स्थित है?",
        answers: shuffle([
            { text: "हरियाणा", correct: false },
            { text: "राजस्थान", correct: false },
            { text: "पंजाब", correct: false },
            { text: "उत्तर प्रदेश", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंदावर, जहाँ यह युद्ध लड़ा गया था, वर्तमान <b>उत्तर प्रदेश के फिरोजाबाद जिले में</b> यमुना नदी के तट पर स्थित है।"
    },
    {
        question: "प्रश्न 11. गोरी ने भारत में किस प्रकार की सैन्य व्यवस्था स्थापित की?",
        answers: shuffle([
            { text: "स्थायी केंद्रीय सेना", correct: false },
            { text: "सामंती सेना", correct: false },
            { text: "गैरीसन (किला-बंद) नगरों में सेना की तैनाती", correct: true },
            { text: "नौसेना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तुर्कों ने शुरू में प्रमुख व्यापार मार्गों और सामरिक स्थानों पर किलों का निर्माण किया और उनमें अपनी सेनाएं (गैरीसन) तैनात कीं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका उद्देश्य <b>गैरीसन (किला-बंद) नगरों में सेना की तैनाती</b> करके विजित क्षेत्रों पर नियंत्रण रखना था।"
    },
    {
        question: "प्रश्न 12. भारत में तुर्की साम्राज्य के विस्तार में किस वर्ग ने महत्वपूर्ण भूमिका निभाई?",
        answers: shuffle([
            { text: "तुर्की गुलाम अधिकारी (बंदगान)", correct: true },
            { text: "भारतीय सैनिक", correct: false },
            { text: "अरब व्यापारी", correct: false },
            { text: "अफगान सरदार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुहम्मद गोरी ने सैन्य और प्रशासनिक कार्यों के लिए विशेष रूप से प्रशिक्षित <b>तुर्की गुलामों (बंदगान)</b> पर बहुत भरोसा किया।<br><br><i class='fa-solid fa-angles-right icon'></i> ऐबक, यिल्दिज और कुबाचा इसी वर्ग के थे, जिन्होंने साम्राज्य के विस्तार और सुदृढ़ीकरण में महत्वपूर्ण भूमिका निभाई।"
    },
    {
        question: "प्रश्न 13. तराइन के द्वितीय युद्ध में राजपूतों की हार का एक सामाजिक कारण क्या था?",
        answers: shuffle([
            { text: "समाज में महिलाओं की खराब स्थिति", correct: false },
            { text: "कठोर जाति व्यवस्था और आम जनता का युद्ध से अलगाव", correct: true },
            { text: "शिक्षा की कमी", correct: false },
            { text: "धार्मिक अंधविश्वास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजपूत समाज में युद्ध केवल क्षत्रियों का कर्तव्य माना जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> आम जनता को देश की रक्षा से कोई सीधा सरोकार नहीं था, जिसके कारण <b>कठोर जाति व्यवस्था और आम जनता का युद्ध से अलगाव</b> राष्ट्रीय चेतना और संगठित प्रतिरोध का अभाव था।"
    },
    {
        question: "प्रश्न 14. मुहम्मद गोरी की मृत्यु की खबर सुनकर किस गुलाम ने स्वयं को लाहौर में स्वतंत्र शासक घोषित कर दिया?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "यिल्दिज", correct: false },
            { text: "कुबाचा", correct: false },
            { text: "कुतुबुद्दीन ऐबक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोरी की मृत्यु के बाद, लाहौर के तुर्क अमीरों ने <b>कुतुबुद्दीन ऐबक</b> को शासन संभालने के लिए आमंत्रित किया।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>1206 ई.</b> में उसने स्वयं को शासक घोषित कर दिया, जिससे दिल्ली सल्तनत की औपचारिक शुरुआत हुई।"
    },
    {
        question: "प्रश्न 15. गोरी के किस सेनापति को 'हातिम द्वितीय' भी कहा जाता था?",
        answers: shuffle([
            { text: "बख्तियार खिलजी", correct: false },
            { text: "कुतुबुद्दीन ऐबक", correct: true },
            { text: "नासिरुद्दीन कुबाचा", correct: false },
            { text: "ताजुद्दीन यिल्दिज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कुतुबुद्दीन ऐबक</b> अपनी उदारता और दानशीलता के लिए प्रसिद्ध था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी कारण इतिहासकार उसे <b>'लाखबख्श'</b> (लाखों का दान देने वाला) और <b>'हातिम द्वितीय'</b> भी कहते हैं।"
    },
    {
        question: "प्रश्न 16. तराइन का मैदान किन दो नदियों के बीच स्थित था?",
        answers: shuffle([
            { text: "सिंधु और झेलम", correct: false },
            { text: "रावी और चिनाब", correct: false },
            { text: "गंगा और यमुना", correct: false },
            { text: "सरस्वती और दृषद्वती", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तराइन का ऐतिहासिक मैदान प्राचीन काल की पवित्र नदियों <b>सरस्वती और दृषद्वती</b> के बीच के क्षेत्र में स्थित था।"
    },
    {
        question: "प्रश्न 17. बख्तियार खिलजी ने जब बंगाल पर आक्रमण किया तो उसने अपनी पहचान कैसे छिपाई?",
        answers: shuffle([
            { text: "किसान के वेश में", correct: false },
            { text: "व्यापारी के वेश में", correct: false },
            { text: "साधु के वेश में", correct: false },
            { text: "घोड़े के व्यापारी के रूप में", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बख्तियार खिलजी और उसके कुछ सैनिक <b>घोड़े के व्यापारी के रूप में</b> लक्ष्मणसेन की राजधानी नदिया में घुसे और अचानक महल पर हमला कर दिया।"
    },
    {
        question: "प्रश्न 18. मुहम्मद गोरी का भारत के विरुद्ध अंतिम अभियान किसके विरुद्ध था?",
        answers: shuffle([
            { text: "राजपूतों के", correct: false },
            { text: "गुजरात के सोलंकियों के", correct: false },
            { text: "खोक्करों के", correct: true },
            { text: "चंदेलों के", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उसका अंतिम अभियान 1205 ई. में पंजाब के विद्रोही <b>खोक्करों</b> जनजाति को कुचलने के लिए था।"
    },
    {
        question: "प्रश्न 19. मुहम्मद गोरी की सफलता का भारत की शहरी अर्थव्यवस्था पर क्या प्रभाव पड़ा?",
        answers: shuffle([
            { text: "शहरों का पतन हो गया", correct: false },
            { text: "शहरी अर्थव्यवस्था में गिरावट आई", correct: false },
            { text: "नए शहरों का विकास हुआ और मुद्रा आधारित अर्थव्यवस्था को बढ़ावा मिला", correct: true },
            { text: "कोई प्रभाव नहीं पड़ा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तुर्कों ने इक्ता प्रणाली लागू की और एक समान मुद्रा प्रणाली (टका, जीतल) को बढ़ावा दिया।<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे व्यापार और वाणिज्य में वृद्धि हुई और <b>नए शहरों का विकास हुआ और मुद्रा आधारित अर्थव्यवस्था को बढ़ावा मिला</b>।"
    },
    {
        question: "प्रश्न 20. गोरी की सेना की सबसे मजबूत इकाई क्या थी?",
        answers: shuffle([
            { text: "पैदल सेना", correct: false },
            { text: "हाथी सेना", correct: false },
            { text: "तेज गति वाली घुड़सवार तीरंदाज सेना", correct: true },
            { text: "नौसेना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य एशियाई युद्ध शैली की तरह, गोरी की सेना की ताकत उसके <b>तेज गति वाली घुड़सवार तीरंदाज सेना</b> थे जो घोड़े पर बैठे-बैठे कुशलता से तीर चला सकते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> यह राजपूतों की भारी-भरकम पैदल और हाथी सेना पर भारी पड़ी।"
    },
    {
        question: "प्रश्न 21. तराइन के द्वितीय युद्ध के बाद गोरी ने किसे दिल्ली का गवर्नर नियुक्त किया?",
        answers: shuffle([
            { text: "कुतुबुद्दीन ऐबक", correct: true },
            { text: "गोविंदराज के पुत्र को", correct: false },
            { text: "पृथ्वीराज के पुत्र को", correct: false },
            { text: "अपने एक सेनापति को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तराइन में जीत और दिल्ली पर कब्जा करने के बाद, गोरी ने <b>कुतुबुद्दीन ऐबक</b> को कुहराम और दिल्ली का प्रशासक नियुक्त किया, जो उसके भारतीय अभियानों का केंद्र बन गया।"
    },
    {
        question: "प्रश्न 22. पृथ्वीराज तृतीय (चौहान) किस वंश के शासक थे?",
        answers: shuffle([
            { text: "गहड़वाल वंश", correct: false },
            { text: "परमार वंश", correct: false },
            { text: "चाहमान (चौहान) वंश", correct: true },
            { text: "चंदेल वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वीराज तृतीय, शाकम्भरी और अजमेर के <b>चाहमान (चौहान) वंश</b> के सबसे प्रसिद्ध और अंतिम शक्तिशाली शासक थे।"
    },
    {
        question: "प्रश्न 23. जयचंद किस वंश का शासक था?",
        answers: shuffle([
            { text: "चौहान वंश", correct: false },
            { text: "सोलंकी वंश", correct: false },
            { text: "गहड़वाल वंश", correct: true },
            { text: "तोमर वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जयचंद कन्नौज और बनारस के <b>गहड़वाल वंश</b> का अंतिम शक्तिशाली राजा था।"
    },
    {
        question: "प्रश्न 24. मुहम्मद गोरी के आक्रमण के समय उत्तर भारत की राजनीतिक स्थिति कैसी थी?",
        answers: shuffle([
            { text: "एक शक्तिशाली केंद्रीय साम्राज्य का शासन था", correct: false },
            { text: "राजनीतिक रूप से एकीकृत और मजबूत थी", correct: false },
            { text: "छोटे-छोटे परस्पर विरोधी राजपूत राज्यों में विभाजित थी", correct: true },
            { text: "विदेशी शक्तियों के अधीन थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उस समय उत्तर भारत में कोई केंद्रीय सत्ता नहीं थी।<br><br><i class='fa-solid fa-angles-right icon'></i> चौहान, गहड़वाल, चंदेल, सोलंकी जैसे कई राजपूत राज्य थे जो आपस में ही लड़ते रहते थे, जिससे वे किसी बाहरी आक्रमणकारी का एकजुट होकर सामना नहीं कर सके।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रकार स्थिति <b>छोटे-छोटे परस्पर विरोधी राजपूत राज्यों में विभाजित थी</b>।"
    },
    {
        question: "प्रश्न 25. बख्तियार खिलजी का तिब्बत अभियान क्यों असफल रहा?",
        answers: shuffle([
            { text: "राजपूतों के हमले के कारण", correct: false },
            { text: "खराब मौसम और दुर्गम पहाड़ी रास्तों के कारण", correct: true },
            { text: "मंगोलों के आक्रमण के कारण", correct: false },
            { text: "उसकी सेना में विद्रोह के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बंगाल विजय के बाद, बख्तियार खिलजी ने तिब्बत पर एक महत्वाकांक्षी अभियान चलाया।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन हिमालय के <b>दुर्गम रास्तों, स्थानीय जनजातियों के प्रतिरोध और खराब मौसम</b> के कारण उसकी सेना लगभग पूरी तरह नष्ट हो गई।"
    },
    {
        question: "प्रश्न 26. मुहम्मद गोरी को और किस नाम से जाना जाता था?",
        answers: shuffle([
            { text: "लाखबख्श", correct: false },
            { text: "गाजी मलिक", correct: false },
            { text: "शहाबुद्दीन", correct: true },
            { text: "आलमगीर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुहम्मद गोरी की एक प्रसिद्ध उपाधि <b>'शहाबुद्दीन'</b> (धर्म का प्रज्वलित नक्षत्र) थी।<br><br><i class='fa-solid fa-angles-right icon'></i> उसका पूरा नाम शहाबुद्दीन उर्फ मुईजुद्दीन मुहम्मद गोरी था।"
    },
    {
        question: "प्रश्न 27. गोरी की मृत्यु के समय, कुबाचा कहाँ का गवर्नर था?",
        answers: shuffle([
            { text: "लाहौर और मुल्तान", correct: false },
            { text: "दिल्ली और अजमेर", correct: false },
            { text: "उच्छ और मुल्तान", correct: true },
            { text: "बंगाल और बिहार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नासिरुद्दीन कुबाचा, जो गोरी का दामाद भी था, उसकी मृत्यु के समय सिंध प्रांत के <b>उच्छ और मुल्तान</b> क्षेत्रों का शक्तिशाली गवर्नर था।"
    },
    {
        question: "प्रश्न 28. किस विजय के बाद भारत में मुस्लिम शासन वास्तव में स्थापित हुआ?",
        answers: shuffle([
            { text: "अरबों की सिंध विजय", correct: false },
            { text: "महमूद गजनवी की सोमनाथ विजय", correct: false },
            { text: "तराइन का द्वितीय युद्ध", correct: true },
            { text: "पानीपत का प्रथम युद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तराइन के दूसरे युद्ध में उत्तर भारत की सबसे बड़ी राजपूत शक्ति की हार के बाद ही तुर्कों के लिए भारत में एक स्थायी साम्राज्य स्थापित करने का मार्ग प्रशस्त हुआ।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए <b>तराइन का द्वितीय युद्ध</b> भारत में मुस्लिम शासन की वास्तविक स्थापना का प्रतीक है।"
    },
    {
        question: "प्रश्न 29. मुहम्मद गोरी ने ग्वालियर के किले पर कब अधिकार किया?",
        answers: shuffle([
            { text: "1192 ई.", correct: false },
            { text: "1194 ई.", correct: false },
            { text: "1196 ई.", correct: true },
            { text: "1201 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंदावर के युद्ध के बाद, गोरी और ऐबक ने अपने साम्राज्य को मजबूत करना जारी रखा।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>1196 ई.</b> में एक लंबी घेराबंदी के बाद ग्वालियर के किले पर भी अधिकार कर लिया गया।"
    },
    {
        question: "प्रश्न 30. 'पृथ्वीराज विजय' नामक संस्कृत काव्य की रचना किसने की, जो पृथ्वीराज चौहान के बारे में एक प्रामाणिक स्रोत है?",
        answers: shuffle([
            { text: "चंदबरदाई", correct: false },
            { text: "नयनचंद्र सूरी", correct: false },
            { text: "जयानक", correct: true },
            { text: "मेरुतुंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>जयानक</b>, पृथ्वीराज चौहान के दरबार में एक कश्मीरी पंडित और कवि थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने 'पृथ्वीराज विजय' की रचना की, जो 'पृथ्वीराज रासो' की तुलना में अधिक ऐतिहासिक और विश्वसनीय मानी जाती है।"
    },
    {
        question: "प्रश्न 31. घुरिद साम्राज्य का केंद्र कहाँ था?",
        answers: shuffle([
            { text: "ईरान", correct: false },
            { text: "इराक", correct: false },
            { text: "मध्य अफगानिस्तान", correct: true },
            { text: "तुर्कमेनिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घुरिद या गोर वंश का उदय <b>मध्य अफगानिस्तान</b> के पहाड़ी क्षेत्र 'गोर' में हुआ था, जिसकी राजधानी फिरोजकोह थी।"
    },
    {
        question: "प्रश्न 32. तराइन के प्रथम युद्ध के बाद पृथ्वीराज चौहान ने गोरी की भागती हुई सेना का पीछा क्यों नहीं किया?",
        answers: shuffle([
            { text: "उसकी सेना थक चुकी थी", correct: false },
            { text: "राजपूत युद्ध नियमों के अनुसार, वे निहत्थे या भागते हुए शत्रु पर वार नहीं करते थे", correct: true },
            { text: "उसे लगा कि गोरी वापस नहीं आएगा", correct: false },
            { text: "जयचंद ने उसे रोक दिया था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह पृथ्वीराज की एक बड़ी रणनीतिक भूल मानी जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने <b>राजपूत युद्ध नियमों के अनुसार, निहत्थे या भागते हुए शत्रु पर वार नहीं करने की</b> नैतिकता का पालन करते हुए तुर्की सेना का पीछा कर उसे पूरी तरह नष्ट नहीं किया।"
    },
    {
        question: "प्रश्न 33. मुहम्मद गोरी की प्रशासनिक व्यवस्था में 'अमीर' कौन होते थे?",
        answers: shuffle([
            { text: "व्यापारी", correct: false },
            { text: "धार्मिक नेता", correct: false },
            { text: "सैन्य और नागरिक प्रशासक", correct: true },
            { text: "किसान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तुर्की शासन प्रणाली में, <b>'अमीर'</b> उच्च पदस्थ <b>सैन्य और नागरिक प्रशासकों</b> का एक वर्ग था।<br><br><i class='fa-solid fa-angles-right icon'></i> इन्हें शासन चलाने और प्रांतों का प्रबंधन करने की जिम्मेदारी दी जाती थी।"
    },
    {
        question: "प्रश्न 34. गोरी ने किस भारतीय शहर पर आक्रमण के दौरान पहली बार 'जिहाद' का नारा दिया?",
        answers: shuffle([
            { text: "मुल्तान", correct: false },
            { text: "गुजरात", correct: false },
            { text: "तराइन (द्वितीय युद्ध)", correct: true },
            { text: "कन्नौज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>तराइन के दूसरे युद्ध</b> में अपनी सेना का मनोबल बढ़ाने के लिए मुहम्मद गोरी ने इसे <b>'धर्म युद्ध' (जिहाद)</b> के रूप में प्रस्तुत किया।"
    },
    {
        question: "प्रश्न 35. बख्तियार खिलजी की मृत्यु कैसे हुई?",
        answers: shuffle([
            { text: "युद्ध में मारा गया", correct: false },
            { text: "बीमारी से", correct: false },
            { text: "उसके अपने एक अमीर अली मर्दान खिलजी ने उसकी हत्या कर दी", correct: true },
            { text: "बूढ़ा होकर मरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तिब्बत अभियान की विफलता के बाद जब बख्तियार खिलजी बीमार और हतोत्साहित होकर देवकोट (बंगाल) में था।<br><br><i class='fa-solid fa-angles-right icon'></i> तब उसके अपने एक सेनापति <b>अली मर्दान खिलजी ने छुरा घोंपकर उसकी हत्या कर दी</b>।"
    },
    {
        question: "प्रश्न 36. मुहम्मद गोरी का साम्राज्य पश्चिम में कहाँ तक फैला हुआ था?",
        answers: shuffle([
            { text: "मिस्र तक", correct: false },
            { text: "पूर्वी ईरान (खुरासान) तक", correct: true },
            { text: "तुर्की तक", correct: false },
            { text: "सीरिया तक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपने भाई के साथ, गोरी ने पश्चिम में <b>पूर्वी ईरान (खुरासान) तक</b> से लेकर पूर्व में बंगाल तक एक विशाल साम्राज्य का निर्माण किया था।"
    },
    {
        question: "प्रश्न 37. अन्हिलवाड़ा की लड़ाई को और किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "तराइन का तीसरा युद्ध", correct: false },
            { text: "गुजरात का युद्ध", correct: false },
            { text: "कायदरा का युद्ध", correct: true },
            { text: "चंदावर का युद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह निर्णायक लड़ाई माउंट आबू की तलहटी में स्थित कायदरा नामक गाँव के पास लड़ी गई थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इसे <b>'कायदरा का युद्ध'</b> भी कहा जाता है।"
    },
    {
        question: "प्रश्न 38. मुहम्मद गोरी के समय में घुड़सवार सेना को क्या कहा जाता था?",
        answers: shuffle([
            { text: "पायक", correct: false },
            { text: "सवार", correct: true },
            { text: "बारगीर", correct: false },
            { text: "हश्म-ए-कल्ब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सल्तनत काल की सैन्य शब्दावली में घुड़सवार सैनिकों को सामान्यतः <b>'सवार'</b> कहा जाता था।"
    },
    {
        question: "प्रश्न 39. तराइन के द्वितीय युद्ध में कौन सा भारतीय शासक पृथ्वीराज चौहान की तरफ से लड़ते हुए मारा गया?",
        answers: shuffle([
            { text: "जयचंद", correct: false },
            { text: "गोविंदराज तोमर", correct: true },
            { text: "परमर्दिदेव", correct: false },
            { text: "भीम द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिल्ली के तोमर शासक <b>गोविंदराज तोमर</b> ने दोनों तराइन युद्धों में पृथ्वीराज का साथ दिया।<br><br><i class='fa-solid fa-angles-right icon'></i> वह दूसरे युद्ध में वीरतापूर्वक लड़ते हुए वीरगति को प्राप्त हुए।"
    },
    {
        question: "प्रश्न 40. मुहम्मद गोरी के आक्रमणों का दीर्घकालिक आर्थिक परिणाम क्या था?",
        answers: shuffle([
            { text: "भारत की संपत्ति का मध्य एशिया की ओर प्रवाह", correct: true },
            { text: "भारत में व्यापार का पतन", correct: false },
            { text: "कृषि का विनाश", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तुर्की शासन की स्थापना के साथ, भारत से प्राप्त राजस्व और धन का एक बड़ा हिस्सा शासक वर्ग द्वारा मध्य एशिया (गोर और गजनी) में भेजा जाने लगा।<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे <b>भारत की संपत्ति का मध्य एशिया की ओर प्रवाह</b> हुआ।"
    },
    {
        question: "प्रश्न 41. गोरी ने अपने सिक्कों पर अपना नाम किस लिपि में अंकित करवाया था?",
        answers: shuffle([
            { text: "केवल अरबी", correct: false },
            { text: "केवल फारसी", correct: false },
            { text: "अरबी और देवनागरी दोनों", correct: true },
            { text: "ब्राह्मी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय क्षेत्र में प्रचलन के लिए उसने अपने सिक्कों (देहलीवाल) पर एक तरफ अरबी में और दूसरी तरफ <b>देवनागरी लिपि</b> में 'श्री मुहम्मद बिन साम' लिखवाया था।"
    },
    {
        question: "प्रश्न 42. अंधावाखुन के युद्ध (1204 ई.) में मुहम्मद गोरी को किसने हराया था?",
        answers: shuffle([
            { text: "मंगोलों ने", correct: false },
            { text: "ख्वारिज्म शाह ने", correct: false },
            { text: "गुर खान के नेतृत्व में कराई खितानों ने", correct: true },
            { text: "सेल्जुक तुर्कों ने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य एशिया में ख्वारिज्म शाह से लड़ते हुए, अंधावाखुन के युद्ध में गोरी को <b>गुर खान के नेतृत्व में कराई खितानों</b> (एक मंगोल जनजाति) के हाथों एक विनाशकारी हार का सामना करना पड़ा।<br><br><i class='fa-solid fa-angles-right icon'></i> इस हार ने उसकी प्रतिष्ठा को गहरा धक्का पहुँचाया।"
    },
    {
        question: "प्रश्न 43. अंधावाखुन में हार के बाद भारत में क्या अफवाह फैली?",
        answers: shuffle([
            { text: "गोरी ने इस्लाम छोड़ दिया है", correct: false },
            { text: "गोरी ने भारत छोड़ दिया है", correct: false },
            { text: "गोरी की मृत्यु हो गई है", correct: true },
            { text: "गोरी ने मंगोलों से संधि कर ली है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंधावाखुन में हार के बाद, भारत में यह अफवाह फैल गई कि <b>मुहम्मद गोरी युद्ध में मारा गया है</b>।<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे उसके भारतीय प्रांतों में, विशेषकर खोक्करों के बीच विद्रोह भड़क उठा।"
    },
    {
        question: "प्रश्न 44. मुहम्मद गोरी के शव को कहाँ ले जाकर दफनाया गया था?",
        answers: shuffle([
            { text: "दिल्ली", correct: false },
            { text: "लाहौर", correct: false },
            { text: "दमयक", correct: false },
            { text: "गजनी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऐतिहासिक वृत्तांतों के अनुसार, उसकी हत्या के बाद उसके शव को उसकी राजधानी <b>गजनी</b> ले जाया गया और वहीं दफनाया गया।<br><br><i class='fa-solid fa-angles-right icon'></i> (नोट: कब्र के स्थान को लेकर इतिहासकारों में मतभेद है, लेकिन गजनी अधिक स्वीकृत है)।"
    },
    {
        question: "प्रश्न 45. किस इतिहासकार ने मुहम्मद गोरी को \"भारत में मुस्लिम साम्राज्य का संस्थापक\" कहा है?",
        answers: shuffle([
            { text: "लेनपूल", correct: false },
            { text: "विन्सेंट स्मिथ", correct: false },
            { text: "ईश्वरी प्रसाद", correct: true },
            { text: "ए. एल. श्रीवास्तव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डॉ. <b>ईश्वरी प्रसाद</b> ने मुहम्मद गोरी के योगदान का मूल्यांकन करते हुए उसे भारत में मुस्लिम शक्ति और साम्राज्य का वास्तविक संस्थापक माना है।"
    },
    {
        question: "प्रश्न 46. गोरी ने अपने भाई गयासुद्दीन के साम्राज्य के किस हिस्से का विस्तार किया?",
        answers: shuffle([
            { text: "पश्चिमी हिस्सा", correct: false },
            { text: "उत्तरी हिस्सा", correct: false },
            { text: "पूर्वी हिस्सा (भारत)", correct: true },
            { text: "दक्षिणी हिस्सा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घुरिद साम्राज्य में, बड़े भाई गयासुद्दीन ने पश्चिमी अभियानों पर ध्यान केंद्रित किया।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि छोटे भाई मुईजुद्दीन (मुहम्मद गोरी) को <b>पूर्वी प्रांतों, विशेष रूप से भारत</b> की विजय का कार्य सौंपा गया था।"
    },
    {
        question: "प्रश्न 47. कुतुबुद्दीन ऐबक ने गोरी के प्रतिनिधि के रूप में किस महत्वपूर्ण विद्रोह का दमन किया?",
        answers: shuffle([
            { text: "खोक्करों का विद्रोह", correct: false },
            { text: "बंगाल का विद्रोह", correct: false },
            { text: "अजमेर में हरिराज का विद्रोह", correct: true },
            { text: "गुजरात का विद्रोह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तराइन के युद्ध के बाद, पृथ्वीराज चौहान के भाई हरिराज ने तुर्की शासन के खिलाफ अजमेर में विद्रोह कर दिया था।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसे कुतुबुद्दीन ऐबक ने सफलतापूर्वक कुचल दिया।<br><br><i class='fa-solid fa-angles-right icon'></i> यह विद्रोह <b>अजमेर में हरिराज का विद्रोह</b> था।"
    },
    {
        question: "प्रश्न 48. मुहम्मद गोरी की सफलता में उसके गुलामों की निष्ठा का क्या महत्व था?",
        answers: shuffle([
            { text: "कोई महत्व नहीं था", correct: false },
            { text: "यह उसकी सफलता का एक प्रमुख आधार थी", correct: true },
            { text: "गुलाम अक्सर विद्रोह करते थे", correct: false },
            { text: "गुलाम केवल धन के लिए लड़ते थे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोरी ने अपने गुलामों को बेटों की तरह पाला और प्रशिक्षित किया।<br><br><i class='fa-solid fa-angles-right icon'></i> वे उसके प्रति अत्यधिक वफादार थे और उसकी अनुपस्थिति में भी उसके साम्राज्य को कुशलतापूर्वक संभालते और उसका विस्तार करते रहे, जो <b>उसकी सफलता का एक प्रमुख आधार थी</b>।"
    },
    {
        question: "प्रश्न 49. तराइन के द्वितीय युद्ध में पृथ्वीराज चौहान की सेना में हाथियों की संख्या अधिक होने का क्या परिणाम हुआ?",
        answers: shuffle([
            { text: "सेना को मजबूती मिली", correct: false },
            { text: "हाथियों ने तुर्की सेना को कुचल दिया", correct: false },
            { text: "घायल और बिदके हुए हाथियों ने अपनी ही सेना को रौंद दिया, जिससे भगदड़ मची", correct: true },
            { text: "हाथियों का कोई प्रभाव नहीं पड़ा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तुर्कों के तेज तीरंदाजों ने राजपूत सेना के हाथियों को निशाना बनाया।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>घायल और बिदके हुए हाथियों ने पीछे मुड़कर अपनी ही पैदल सेना को कुचलना शुरू कर दिया</b>, जो राजपूतों की हार का एक बड़ा कारण बना।"
    },
    {
        question: "प्रश्न 50. मुहम्मद गोरी के आक्रमण के समय कन्नौज और दिल्ली के बीच क्या संबंध थे?",
        answers: shuffle([
            { text: "मैत्रीपूर्ण", correct: false },
            { text: "व्यापारिक", correct: false },
            { text: "घोर शत्रुतापूर्ण", correct: true },
            { text: "कोई संबंध नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर भारत में वर्चस्व के लिए चौहान और गहड़वाल वंशों के बीच पुरानी राजनीतिक प्रतिद्वंद्विता और <b>घोर शत्रुतापूर्ण</b> संबंध थे।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी कारण जयचंद ने पृथ्वीराज की मदद नहीं की।"
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