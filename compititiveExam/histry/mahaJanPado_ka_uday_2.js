const questions = [
    {
        topHeading: "महाजनपदों के उदय पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. निम्नलिखित में से कौन सा महाजनपद राजतंत्रीय नहीं था?",
        answers: shuffle([
            { text: "कोसल", correct: false },
            { text: "अवंति", correct: false },
            { text: "मल्ल", correct: true },
            { text: "मगध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मल्ल महाजनपद</b> एक <b>गणराज्य</b> था, जहाँ शासन कुलों के प्रमुखों द्वारा किया जाता था, न कि किसी एक राजा द्वारा।<br><br><i class='fa-solid fa-angles-right icon'></i> कुशीनारा और पावा इसके प्रमुख नगर थे।"
    },
    {
        question: "प्रश्न 2. दूसरी बौद्ध संगीति किसके शासन काल में हुई थी?",
        answers: shuffle([
            { text: "अजातशत्रु", correct: false },
            { text: "कालाशोक", correct: true },
            { text: "अशोक", correct: false },
            { text: "कनिष्क", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>द्वितीय बौद्ध संगीति</b> का आयोजन 383 ईसा पूर्व में वैशाली में <b>शिशुनाग वंश</b> के शासक <b>कालाशोक (काकवर्ण)</b> के संरक्षण में हुआ था।"
    },
    {
        question: "प्रश्न 3. 'गृहपति' का क्या अर्थ है?",
        answers: shuffle([
            { text: "गाँव का मुखिया", correct: false },
            { text: "धनी किसान", correct: true },
            { text: "व्यापारी", correct: false },
            { text: "पुजारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाजनपद काल में '<b>गृहपति</b>' शब्द का प्रयोग बड़े भू-स्वामी या <b>धनी किसानों</b> के लिए किया जाता था, जो अपनी भूमि पर दासों और मजदूरों से काम करवाते थे।"
    },
    {
        question: "प्रश्न 4. अवंति का राजा कौन था जो बुद्ध का समकालीन था?",
        answers: shuffle([
            { text: "उदयन", correct: false },
            { text: "प्रसेनजित", correct: false },
            { text: "चंडप्रद्योत", correct: true },
            { text: "बिम्बिसार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>चंडप्रद्योत</b> अवंति का एक शक्तिशाली और प्रतापी राजा था।<br><br><i class='fa-solid fa-angles-right icon'></i> वह भगवान बुद्ध और मगध के राजा बिम्बिसार का समकालीन था।"
    },
    {
        question: "प्रश्न 5. भारत पर पहला विदेशी आक्रमण किसके द्वारा किया गया था?",
        answers: shuffle([
            { text: "यूनानियों द्वारा", correct: false },
            { text: "ईरानियों (हखमनी) द्वारा", correct: true },
            { text: "शकों द्वारा", correct: false },
            { text: "कुषाणों द्वारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत पर प्रथम सफल विदेशी आक्रमण <b>ईरान</b> के <b>हखमनी वंश</b> के शासकों ने किया।<br><br><i class='fa-solid fa-angles-right icon'></i> सायरस द्वितीय ने इसकी शुरुआत की और डेरियस प्रथम ने इसे सुदृढ़ किया।"
    },
    {
        question: "प्रश्न 6. मगध की सफलता का एक मुख्य कारण लौह भंडारों का होना था। ये भंडार किस क्षेत्र में स्थित थे?",
        answers: shuffle([
            { text: "विंध्य क्षेत्र", correct: false },
            { text: "छोटानागपुर पठार", correct: true },
            { text: "अरावली पर्वतमाला", correct: false },
            { text: "हिमालय की तलहटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आधुनिक झारखंड में स्थित <b>छोटानागपुर पठार</b> क्षेत्र में लौह अयस्क के विशाल भंडार थे, जिससे मगध को बेहतर हथियार और कृषि उपकरण बनाने में मदद मिली।"
    },
    {
        question: "प्रश्न 7. किस महाजनपद का शाब्दिक अर्थ 'पशुपालक समुदाय' है?",
        answers: shuffle([
            { text: "वत्स", correct: true },
            { text: "पांचाल", correct: false },
            { text: "चेदि", correct: false },
            { text: "कुरु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>वत्स</b>' का संबंध 'बछड़े' या 'वंशज' से है, जो इस क्षेत्र के प्रारंभिक <b>पशुपालक समाज</b> की ओर संकेत करता है।"
    },
    {
        question: "प्रश्न 8. महाजनपद काल में प्रयुक्त 'आहत सिक्के' मुख्य रूप से किस धातु के बने होते थे?",
        answers: shuffle([
            { text: "सोना", correct: false },
            { text: "तांबा", correct: false },
            { text: "चाँदी", correct: true },
            { text: "कांसा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत के प्राचीनतम सिक्के, जिन्हें <b>आहत</b> या <b>पंच-मार्क सिक्के</b> कहा जाता है, मुख्य रूप से <b>चाँदी</b> के बने होते थे और इन पर विभिन्न चिह्न ठप्पा लगाकर बनाए जाते थे।"
    },
    {
        question: "प्रश्न 9. बिम्बिसार ने अपनी शक्ति को मजबूत करने के लिए किस नीति का व्यापक उपयोग किया?",
        answers: shuffle([
            { text: "सैन्य विजय", correct: false },
            { text: "कूटनीति", correct: false },
            { text: "वैवाहिक संबंध", correct: true },
            { text: "आर्थिक सुधार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बिम्बिसार</b> ने कोसल, लिच्छवि और मद्र जैसे प्रमुख कुलों में <b>विवाह</b> करके अपनी राजनीतिक स्थिति को अत्यंत सुदृढ़ किया और साम्राज्य विस्तार का मार्ग प्रशस्त किया।"
    },
    {
        question: "प्रश्न 10. कोसल के किस राजा ने काशी को लेकर मगध से एक लंबा संघर्ष किया?",
        answers: shuffle([
            { text: "महाकोसल", correct: false },
            { text: "प्रसेनजित", correct: true },
            { text: "विड्डूभ", correct: false },
            { text: "कंस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजा <b>प्रसेनजित</b> बुद्ध के समकालीन और कोसल के शक्तिशाली शासक थे।<br><br><i class='fa-solid fa-angles-right icon'></i> दहेज में मिली काशी को लेकर उनका अपने बहनोई अजातशत्रु से लंबा संघर्ष चला।"
    },
    {
        question: "प्रश्न 11. सिकंदर ने भारत में कितने समय तक प्रवास किया?",
        answers: shuffle([
            { text: "लगभग 12 महीने", correct: false },
            { text: "लगभग 19 महीने", correct: true },
            { text: "लगभग 24 महीने", correct: false },
            { text: "लगभग 29 महीने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर 326 ईसा पूर्व में भारत में प्रवेश किया और 325 ईसा पूर्व में वापस लौट गया, इस प्रकार उसका भारत प्रवास लगभग <b>19 महीने</b> का रहा।"
    },
    {
        question: "प्रश्न 12. महाजनपदों के उदय का मुख्य कारण क्या था?",
        answers: shuffle([
            { text: "धार्मिक आंदोलन", correct: false },
            { text: "विदेशी आक्रमण", correct: false },
            { text: "लोहे का व्यापक प्रयोग और कृषि अधिशेष", correct: true },
            { text: "राजनीतिक अस्थिरता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> छठी शताब्दी ईसा पूर्व में <b>लोहे के औजारों</b> से गंगा घाटी के जंगलों को साफ करना और गहरी जुताई संभव हुई, जिससे <b>कृषि उत्पादन बढ़ा</b> और बड़े राज्यों (जनपदों) का उदय हुआ।"
    },
    {
        question: "प्रश्न 13. मल्ल महाजनपद की राजधानी कहाँ थी?",
        answers: shuffle([
            { text: "पावा और कुशीनारा", correct: true },
            { text: "वैशाली और मिथिला", correct: false },
            { text: "इंद्रप्रस्थ और हस्तिनापुर", correct: false },
            { text: "श्रावस्ती और साकेत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मल्ल गणराज्य</b> की दो शाखाएँ थीं, जिनकी राजधानियाँ क्रमशः <b>पावा</b> (जहाँ महावीर ने निर्वाण प्राप्त किया) और <b>कुशीनारा</b> (जहाँ बुद्ध ने महापरिनिर्वाण प्राप्त किया) थीं।"
    },
    {
        question: "प्रश्न 14. किस भारतीय राजा ने सबसे पहले सिकंदर की अधीनता स्वीकार की?",
        answers: shuffle([
            { text: "पोरस", correct: false },
            { text: "आम्भि", correct: true },
            { text: "चंद्रगुप्त मौर्य", correct: false },
            { text: "धनानंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तक्षशिला के राजा <b>आम्भि</b> ने सिकंदर से बिना युद्ध किए उसकी <b>अधीनता स्वीकार</b> कर ली और पोरस के विरुद्ध उसकी सहायता की।"
    },
    {
        question: "प्रश्न 15. महाजनपद काल में 'भाग' और 'बलि' क्या थे?",
        answers: shuffle([
            { text: "सैन्य पद", correct: false },
            { text: "धार्मिक अनुष्ठान", correct: false },
            { text: "राजस्व के स्रोत (कर)", correct: true },
            { text: "सिक्के", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>भाग</b>' उपज का हिस्सा (सामान्यतः 1/6) था जो किसानों से लिया जाता था, जबकि '<b>बलि</b>' एक अन्य प्रकार का कर था।<br><br><i class='fa-solid fa-angles-right icon'></i> ये राज्य की आय के मुख्य स्रोत थे।"
    },
    {
        question: "प्रश्न 16. पाटलिपुत्र को किस शासक ने सर्वप्रथम मगध की राजधानी बनाया?",
        answers: shuffle([
            { text: "अजातशत्रु", correct: false },
            { text: "कालाशोक", correct: false },
            { text: "उदायिन", correct: true },
            { text: "चंद्रगुप्त मौर्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि पाटलिपुत्र की नींव अजातशत्रु ने रखी थी, लेकिन इसे राजगृह से राजधानी के रूप में <b>स्थानांतरित</b> करने का श्रेय उसके पुत्र <b>उदायिन</b> को जाता है।"
    },
    {
        question: "प्रश्न 17. किस शासक ने पाटलिपुत्र में एक 'जल-दुर्ग' का निर्माण करवाया था?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: true },
            { text: "उदायिन", correct: false },
            { text: "महापद्मनंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वज्जियों के आक्रमण से अपनी राजधानी की सुरक्षा के लिए <b>अजातशत्रु</b> ने पाटलिग्राम (बाद में पाटलिपुत्र) में एक सुदृढ़ दुर्ग का निर्माण करवाया था, जिसे '<b>जल-दुर्ग</b>' कहा गया क्योंकि यह नदियों से घिरा था।"
    },
    {
        question: "प्रश्न 18. महाजनपद काल में 'शौल्किक' या 'शुल्काध्यक्ष' कौन होता था?",
        answers: shuffle([
            { text: "चुंगी या सीमा शुल्क वसूलने वाला अधिकारी", correct: true },
            { text: "खानों का अध्यक्ष", correct: false },
            { text: "टकसाल का प्रमुख", correct: false },
            { text: "व्यापारिक मार्गों का प्रमुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अधिकारी व्यापारियों से उनके माल पर कर या <b>चुंगी वसूल</b> करता था, जो राज्य की आय का एक महत्वपूर्ण स्रोत था।"
    },
    {
        question: "प्रश्न 19. मगध के किस प्रारंभिक शासक ने अपने राजवैद्य जीवक को अवंति नरेश चंडप्रद्योत के इलाज के लिए भेजा था?",
        answers: shuffle([
            { text: "अजातशत्रु", correct: false },
            { text: "उदायिन", correct: false },
            { text: "बिम्बिसार", correct: true },
            { text: "शिशुनाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब अवंति के राजा चंडप्रद्योत पीलिया से ग्रसित थे, तो <b>बिम्बिसार</b> ने मित्रता का परिचय देते हुए अपने प्रसिद्ध राजवैद्य <b>जीवक</b> को उनके उपचार के लिए उज्जैन भेजा था।"
    },
    {
        question: "प्रश्न 20. वज्जि संघ में कितने गणराज्य शामिल थे?",
        answers: shuffle([
            { text: "4", correct: false },
            { text: "6", correct: false },
            { text: "8", correct: true },
            { text: "10", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>वज्जि</b> एक शक्तिशाली परिसंघ था जिसमें <b>आठ</b> कुल या गणराज्य शामिल थे।<br><br><i class='fa-solid fa-angles-right icon'></i> इनमें लिच्छवि, विदेह और ज्ञातृक सबसे प्रमुख थे।"
    },
    {
        question: "प्रश्न 21. निम्नलिखित में से कौन सा नगर महाजनपद काल में उत्तर-दक्षिण और पूर्व-पश्चिम व्यापारिक मार्गों का मिलन बिंदु था?",
        answers: shuffle([
            { text: "मथुरा", correct: true },
            { text: "वाराणसी", correct: false },
            { text: "उज्जैन", correct: false },
            { text: "कौशाम्बी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मथुरा</b> उत्तरापथ और दक्षिणापथ दोनों महत्वपूर्ण व्यापारिक मार्गों पर स्थित था, जिससे यह एक प्रमुख व्यावसायिक केंद्र बन गया।"
    },
    {
        question: "प्रश्न 22. किस शासक के बारे में कहा जाता है कि उसने कलिंग में एक नहर का निर्माण कराया था?",
        answers: shuffle([
            { text: "अजातशत्रु", correct: false },
            { text: "शिशुनाग", correct: false },
            { text: "महापद्मनंद", correct: true },
            { text: "धनानंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खारवेल के हाथीगुम्फा अभिलेख से ज्ञात होता है कि नंद राजा (संभवतः <b>महापद्मनंद</b>) ने कलिंग पर विजय प्राप्त की थी और वहाँ एक <b>नहर</b> खुदवाई थी।"
    },
    {
        question: "प्रश्न 23. महाजनपदों में शासन का सर्वोच्च अधिकारी कौन होता था?",
        answers: shuffle([
            { text: "पुरोहित", correct: false },
            { text: "सेनापति", correct: false },
            { text: "राजा", correct: true },
            { text: "अमात्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजतंत्रीय महाजनपदों में <b>राजा</b> सर्वोच्च शासक होता था, जिसके पास सभी कार्यकारी, विधायी और न्यायिक शक्तियाँ केंद्रित होती थीं।"
    },
    {
        question: "प्रश्न 24. सिकंदर का गुरु कौन था?",
        answers: shuffle([
            { text: "प्लेटो", correct: false },
            { text: "सुकरात", correct: false },
            { text: "अरस्तू", correct: true },
            { text: "होमर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सिकंदर महान</b> का गुरु प्रसिद्ध यूनानी दार्शनिक <b>अरस्तू</b> था, जिसने उसे विभिन्न विषयों की शिक्षा दी थी।"
    },
    {
        question: "प्रश्न 25. 'महापरिनिर्वाण' बुद्ध की मृत्यु से संबंधित है। यह घटना किस महाजनपद में हुई?",
        answers: shuffle([
            { text: "मगध", correct: false },
            { text: "वज्जि", correct: false },
            { text: "मल्ल", correct: true },
            { text: "वत्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतम बुद्ध ने अपना अंतिम समय <b>मल्ल गणराज्य</b> में बिताया और कुशीनारा (कुशीनगर) में 483 ईसा पूर्व में <b>महापरिनिर्वाण</b> प्राप्त किया।"
    },
    {
        question: "प्रश्न 26. प्रथम बौद्ध संगीति का आयोजन अजातशत्रु ने कहाँ करवाया था?",
        answers: shuffle([
            { text: "पाटलिपुत्र", correct: false },
            { text: "वैशाली", correct: false },
            { text: "राजगृह की सप्तपर्णि गुफा में", correct: true },
            { text: "कुंडलवन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुद्ध के महापरिनिर्वाण के तुरंत बाद, 483 ईसा पूर्व में <b>अजातशत्रु</b> के संरक्षण में <b>राजगृह की सप्तपर्णि गुफा</b> में <b>प्रथम बौद्ध संगीति</b> का आयोजन हुआ, जिसकी अध्यक्षता महाकस्सप ने की।"
    },
    {
        question: "प्रश्न 27. भारत में द्वितीय नगरीय क्रांति के समय किस प्रकार के मृद्भांड लोकप्रिय थे?",
        answers: shuffle([
            { text: "गेरुवर्णी मृद्भांड (OCP)", correct: false },
            { text: "चित्रित धूसर मृद्भांड (PGW)", correct: false },
            { text: "उत्तरी काले पॉलिशदार मृद्भांड (NBPW)", correct: true },
            { text: "लाल और काले मृद्भांड (BRW)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>उत्तरी काले पॉलिशदार मृद्भांड</b> (Northern Black Polished Ware) महाजनपद काल की विशिष्ट पहचान हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये अत्यंत चिकने और चमकदार होते थे और संभवतः विलासिता की वस्तु थे।"
    },
    {
        question: "प्रश्न 28. मगध साम्राज्य के विस्तार का पहला शिकार कौन सा महाजनपद बना?",
        answers: shuffle([
            { text: "काशी", correct: false },
            { text: "अंग", correct: true },
            { text: "वज्जि", correct: false },
            { text: "कोसल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बिम्बिसार</b> ने सबसे पहले <b>अंग महाजनपद</b> पर आक्रमण कर उसे जीता और अपने पुत्र अजातशत्रु को वहाँ का शासक नियुक्त किया।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मगध के साम्राज्य विस्तार की पहली महत्वपूर्ण कड़ी थी।"
    },
    {
        question: "प्रश्न 29. अपने पिता बिम्बिसार की हत्या करने के बाद अजातशत्रु को किस कोसल नरेश के क्रोध का सामना करना पड़ा?",
        answers: shuffle([
            { text: "महाकोसल", correct: false },
            { text: "कंस", correct: false },
            { text: "शिशुपाल", correct: false },
            { text: "प्रसेनजित", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजातशत्रु की माँ कोसलदेवी, कोसल नरेश <b>प्रसेनजित</b> की बहन थी।<br><br><i class='fa-solid fa-angles-right icon'></i> बिम्बिसार की मृत्यु के शोक में उनकी मृत्यु हो गई, जिससे क्रोधित होकर प्रसेनजित ने काशी वापस ले लिया और युद्ध छेड़ दिया।"
    },
    {
        question: "प्रश्न 30. 'अमात्य' कौन होते थे?",
        answers: shuffle([
            { text: "गुप्तचर", correct: false },
            { text: "सेना के अधिकारी", correct: false },
            { text: "उच्च वर्गीय प्रशासनिक अधिकारी या मंत्री", correct: true },
            { text: "राजस्व अधिकारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अमात्य</b> महाजनपद काल के प्रशासन में उच्च स्तर के अधिकारी थे जो राजा को विभिन्न मामलों में सलाह देते थे और विभागों का कार्यभार संभालते थे।"
    },
    {
        question: "प्रश्न 31. किस महाजनपद के लोग अपनी सैन्य कुशलता और युद्धप्रियता के लिए जाने जाते थे?",
        answers: shuffle([
            { text: "काशी", correct: false },
            { text: "गांधार", correct: false },
            { text: "कंबोज", correct: true },
            { text: "मगध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कौटिल्य ने अपने अर्थशास्त्र में <b>कंबोज</b> के लोगों को 'वार्ताशस्त्रोपजीवन' कहा है, जिसका अर्थ है कि वे कृषि, पशुपालन और <b>शस्त्र (युद्ध)</b> द्वारा अपनी आजीविका चलाते थे।"
    },
    {
        question: "प्रश्न 32. सिकंदर के आक्रमण का भारत पर निम्नलिखित में से कौन सा एक तात्कालिक प्रभाव नहीं था?",
        answers: shuffle([
            { text: "भारत और यूनान के बीच प्रत्यक्ष संपर्क स्थापित हुआ।", correct: false },
            { text: "मौर्य साम्राज्य की स्थापना का मार्ग प्रशस्त हुआ।", correct: false },
            { text: "भारत में गांधार शैली की कला का विकास हुआ।", correct: false },
            { text: "भारत में बड़े पैमाने पर यूनानी बस्तियाँ स्थापित हुईं।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि सिकंदर ने कुछ नगर स्थापित किए (जैसे निकैया, बुकेफाला), लेकिन भारत में <b>बड़े पैमाने पर स्थायी यूनानी बस्तियाँ स्थापित नहीं हुईं</b>।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी प्रभाव दीर्घकालिक रूप से महत्वपूर्ण थे।"
    },
    {
        question: "प्रश्न 33. वज्जि संघ को पराजित करने के लिए अजातशत्रु के किस मंत्री ने प्रमुख भूमिका निभाई थी?",
        answers: shuffle([
            { text: "जीवक", correct: false },
            { text: "वस्सकार", correct: true },
            { text: "दीर्घ चारायण", correct: false },
            { text: "सुनीध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अजातशत्रु</b> ने अपने कूटनीतिज्ञ मंत्री <b>वस्सकार</b> को वैशाली भेजा, जिसने लिच्छवियों के बीच सफलतापूर्वक <b>फूट डाली</b>, जिससे मगध की विजय आसान हो गई।"
    },
    {
        question: "प्रश्न 34. महाजनपदों के काल में फसलों पर कर की दर सामान्यतः क्या थी?",
        answers: shuffle([
            { text: "उपज का 1/3 भाग", correct: false },
            { text: "उपज का 1/4 भाग", correct: false },
            { text: "उपज का 1/6 भाग", correct: true },
            { text: "उपज का 1/8 भाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिकांश धर्मसूत्रों और ग्रंथों में कृषि उपज पर लगने वाले कर '<b>भाग</b>' की दर पैदावार का <b>छठा हिस्सा</b> निर्धारित की गई है, जो एक मानक दर थी।"
    },
    {
        question: "प्रश्न 35. कौन सा महाजनपद यमुना और चंबल नदियों के बीच स्थित था?",
        answers: shuffle([
            { text: "सूरसेन", correct: true },
            { text: "चेदि", correct: false },
            { text: "मत्स्य", correct: false },
            { text: "अवंति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सूरसेन महाजनपद</b> का केंद्र आधुनिक मथुरा था और इसका क्षेत्र <b>यमुना और चंबल नदियों</b> के आस-पास फैला हुआ था।"
    },
    {
        question: "प्रश्न 36. राजगृह नगर का वास्तुकार कौन था?",
        answers: shuffle([
            { text: "विश्वकर्मा", correct: false },
            { text: "महागोविंद", correct: true },
            { text: "जीवक", correct: false },
            { text: "स्थूलभद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध ग्रंथों के अनुसार, बिम्बिसार के शासनकाल में <b>राजगृह</b> नगर की योजना और निर्माण का श्रेय वास्तुकार <b>महागोविंद</b> को दिया जाता है।"
    },
    {
        question: "प्रश्न 37. शिशुनाग ने अपनी दूसरी राजधानी कहाँ बनाई?",
        answers: shuffle([
            { text: "पाटलिपुत्र", correct: false },
            { text: "राजगृह", correct: false },
            { text: "वैशाली", correct: true },
            { text: "चम्पा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>शिशुनाग</b> ने गिरिव्रज के अलावा <b>वैशाली</b> को अपनी <b>दूसरी राजधानी</b> बनाया ताकि वह वज्जि क्षेत्र पर बेहतर नियंत्रण रख सके।"
    },
    {
        question: "प्रश्न 38. नंद शासक किस वर्ण के माने जाते हैं?",
        answers: shuffle([
            { text: "ब्राह्मण", correct: false },
            { text: "क्षत्रिय", correct: false },
            { text: "वैश्य", correct: false },
            { text: "शूद्र", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुराणों और अन्य स्रोतों के अनुसार, नंद वंश के संस्थापक महापद्मनंद को निम्न कुल (<b>शूद्र</b>) का माना जाता है, जिसने क्षत्रिय शासकों का अंत किया था।"
    },
    {
        question: "प्रश्न 39. 'सर्वक्षत्रांतक' (सभी क्षत्रियों का अंत करने वाला) किसे कहा गया है?",
        answers: shuffle([
            { text: "अजातशत्रु", correct: false },
            { text: "शिशुनाग", correct: false },
            { text: "धनानंद", correct: false },
            { text: "महापद्मनंद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>महापद्मनंद</b> ने इक्ष्वाकु, पांचाल, कुरु, काशी, हैहय, कलिंग जैसे कई समकालीन क्षत्रिय राजवंशों को पराजित किया, जिसके कारण पुराणों में उसे '<b>सर्वक्षत्रांतक</b>' कहा गया है।"
    },
    {
        question: "प्रश्न 40. यूनानी लेखकों ने धनानंद को किस नाम से पुकारा है?",
        answers: shuffle([
            { text: "अमित्रोकेट्स", correct: false },
            { text: "सैंड्रोकोट्टस", correct: false },
            { text: "अग्रमीज या जेड्रमीज", correct: true },
            { text: "पोरस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूनानी लेखक कर्टियस और डियोडोरस नंद वंश के अंतिम शासक धनानंद का उल्लेख '<b>अग्रमीज</b>' या '<b>जेड्रमीज</b>' नाम से करते हैं।"
    },
    {
        question: "प्रश्न 41. दक्षिण अवंति की राजधानी कहाँ थी?",
        answers: shuffle([
            { text: "उज्जैनी", correct: false },
            { text: "पोतन", correct: false },
            { text: "महिष्मती", correct: true },
            { text: "विराटनगर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अवंति महाजनपद</b> वेत्रवती नदी द्वारा दो भागों में विभाजित था।<br><br><i class='fa-solid fa-angles-right icon'></i> उत्तरी भाग की राजधानी उज्जैनी और <b>दक्षिणी भाग</b> की राजधानी <b>महिष्मती</b> थी।"
    },
    {
        question: "प्रश्न 42. महाजनपद काल में 'कार्षापण' क्या था?",
        answers: shuffle([
            { text: "एक तौल की इकाई", correct: false },
            { text: "एक प्रकार का कपड़ा", correct: false },
            { text: "एक प्रकार का सिक्का", correct: true },
            { text: "एक कृषि उपकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कार्षापण</b>, पण या धरण, महाजनपद काल में प्रचलित <b>आहत सिक्कों</b> के नाम थे, जो मुख्यतः चाँदी के बने होते थे।"
    },
    {
        question: "प्रश्न 43. 'राजभट्ट' शब्द किसके लिए प्रयोग किया जाता था?",
        answers: shuffle([
            { text: "राजा के अंगरक्षक", correct: false },
            { text: "भाड़े के सैनिक", correct: false },
            { text: "वंशानुगत सैनिक", correct: true },
            { text: "कर अधिकारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाजनपद काल में '<b>राजभट्ट</b>' उन <b>सैनिकों</b> को कहा जाता था जो <b>वंशानुगत</b> रूप से राजा की सेवा में रहते थे और उन्हें भूमि अनुदान मिलता था।"
    },
    {
        question: "प्रश्न 44. निम्नलिखित में से कौन सा महाजनपद वर्तमान बिहार के क्षेत्र में स्थित नहीं था?",
        answers: shuffle([
            { text: "अंग", correct: false },
            { text: "मगध", correct: false },
            { text: "वज्जि", correct: false },
            { text: "वत्स", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंग, मगध और वज्जि महाजनपद आधुनिक बिहार में स्थित थे, जबकि <b>वत्स महाजनपद</b> का क्षेत्र आधुनिक <b>उत्तर प्रदेश</b> में प्रयागराज के आस-पास था।"
    },
    {
        question: "प्रश्न 45. सिकंदर ने अपने घोड़े 'बुकेफालस' के नाम पर किस नदी के तट पर एक नगर बसाया था?",
        answers: shuffle([
            { text: "सिंधु", correct: false },
            { text: "रावी", correct: false },
            { text: "झेलम", correct: true },
            { text: "चिनाब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पोरस के साथ युद्ध के बाद, सिकंदर ने अपने प्रिय घोड़े <b>बुकेफालस</b> की याद में <b>झेलम नदी</b> के तट पर '<b>बुकेफाला</b>' नामक नगर की स्थापना की थी।"
    },
    {
        question: "प्रश्न 46. किस बौद्ध ग्रंथ में मगध के शासकों की कालक्रमानुसार सूची मिलती है?",
        answers: shuffle([
            { text: "अंगुत्तर निकाय", correct: false },
            { text: "दीघ निकाय", correct: false },
            { text: "महावंश", correct: true },
            { text: "ललितविस्तर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्रीलंकाई बौद्ध ग्रंथ '<b>महावंश</b>' में बिम्बिसार से लेकर मौर्य काल तक के मगध के शासकों का एक व्यवस्थित <b>कालक्रम</b> दिया गया है।"
    },
    {
        question: "प्रश्न 47. महाजनपद काल की गणतांत्रिक व्यवस्था में वास्तविक शक्ति किसके हाथ में होती थी?",
        answers: shuffle([
            { text: "राजा", correct: false },
            { text: "पुरोहित", correct: false },
            { text: "कुलीन वर्ग के प्रमुख", correct: true },
            { text: "सामान्य जनता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गणराज्यों में शासन का संचालन एक केंद्रीय समिति करती थी, जिसके सदस्य <b>कुलीन वंशों (क्षत्रिय कुल) के प्रमुख</b> होते थे, न कि आम जनता।"
    },
    {
        question: "प्रश्न 48. किस शासक ने पाटलिपुत्र में एक 'जल-दुर्ग' का निर्माण करवाया था?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: true },
            { text: "उदायिन", correct: false },
            { text: "महापद्मनंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वज्जियों के आक्रमण से अपनी राजधानी की सुरक्षा के लिए <b>अजातशत्रु</b> ने पाटलिग्राम (बाद में पाटलिपुत्र) में एक सुदृढ़ दुर्ग का निर्माण करवाया था, जिसे '<b>जल-दुर्ग</b>' कहा गया क्योंकि यह नदियों से घिरा था।"
    },
    {
        question: "प्रश्न 49. वह कौन सा महाजनपद था जो प्रारंभ में सबसे शक्तिशाली था, किन्तु बाद में कोसल ने उसे अधिग्रहीत कर लिया?",
        answers: shuffle([
            { text: "अंग", correct: false },
            { text: "चेदि", correct: false },
            { text: "काशी", correct: true },
            { text: "पांचाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रारंभ में <b>काशी</b> एक अत्यंत शक्तिशाली महाजनपद था, लेकिन बुद्ध के काल तक आते-आते यह कोसल के राजा <b>कंस</b> द्वारा <b>जीत लिया गया था</b>।"
    },
    {
        question: "प्रश्न 50. महाजनपदों की कर प्रणाली के संबंध में कौन सा कथन सही है?",
        answers: shuffle([
            { text: "केवल किसानों पर कर लगाया जाता था।", correct: false },
            { text: "कर केवल वस्तु के रूप में लिया जाता था।", correct: false },
            { text: "शिल्पकारों और व्यापारियों को भी कर देना पड़ता था।", correct: true },
            { text: "कोई नियमित कर प्रणाली नहीं थी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसानों से उपज का हिस्सा ('भाग') लिया जाता था, वहीं <b>शिल्पकारों</b> से महीने में एक दिन राजा के लिए काम करने के रूप में और <b>व्यापारियों</b> से चुंगी के रूप में कर वसूला जाता था।"
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