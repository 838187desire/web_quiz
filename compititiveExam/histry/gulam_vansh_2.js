const questions = [
    {
        topHeading: "गुलामवंश पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. बलबन की मृत्यु के बाद दिल्ली का सुल्तान कौन बना?",
        answers: shuffle([
            { text: "बुगरा खान", correct: false },
            { text: "कैकुबाद", correct: true },
            { text: "कयुमर्स", correct: false },
            { text: "जलालुद्दीन खिलजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बलबन ने अपने पुत्र बुगरा खान को उत्तराधिकारी बनाना चाहा, लेकिन उसने बंगाल का सूबेदार बने रहना पसंद किया।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, अमीरों ने बलबन के पोते <b>कैकुबाद</b> को सुल्तान बनाया।"
    },
    {
        question: "प्रश्न 2. 'जब वह पैदा हुआ तो उसके शरीर पर कोई हड्डी नहीं थी।' यह कथन किस सुल्तान के बारे में कहा गया है?",
        answers: shuffle([
            { text: "रजिया सुल्तान", correct: false },
            { text: "आराम शाह", correct: false },
            { text: "कैकुबाद", correct: false },
            { text: "यह एक कहावत है", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक भ्रामक प्रश्न है।<br><br><i class='fa-solid fa-angles-right icon'></i> ऐसा कोई सुल्तान नहीं था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक मुहावरेदार कथन हो सकता है, लेकिन किसी सुल्तान के लिए ऐतिहासिक रूप से इसका प्रयोग नहीं किया गया है।"
    },
    {
        question: "प्रश्न 3. किस गुलाम वंश के सुल्तान ने 'उलुग खान' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "रजिया", correct: false },
            { text: "बलबन", correct: true },
            { text: "नासिरुद्दीन महमूद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुल्तान <b>नासिरुद्दीन महमूद</b> ने अपने नायब (प्रधानमंत्री) <b>बलबन</b> को उसकी सेवाओं के लिए <b>'उलुग खान'</b> (महान खान) की उपाधि प्रदान की थी।"
    },
    {
        question: "प्रश्न 4. गुलाम वंश का शासनकाल कब से कब तक रहा?",
        answers: shuffle([
            { text: "1206 ई. से 1290 ई. तक", correct: true },
            { text: "1290 ई. से 1320 ई. तक", correct: false },
            { text: "1192 ई. से 1206 ई. तक", correct: false },
            { text: "1320 ई. से 1414 ई. तक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>गुलाम वंश</b> ने <b>कुतुबुद्दीन ऐबक (1206 ई.)</b> से लेकर <b>कयुमर्स (1290 ई.)</b> तक कुल 84 वर्षों तक दिल्ली सल्तनत पर शासन किया।"
    },
    {
        question: "प्रश्न 5. मंगोलों को तुर्की में क्या कहा जाता था?",
        answers: shuffle([
            { text: "तातार", correct: true },
            { text: "मुगल", correct: false },
            { text: "उज्बेक", correct: false },
            { text: "तुर्क", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उस समय के फारसी और तुर्की स्रोतों में मंगोलों के लिए अक्सर <b>'तातार'</b> या <b>'मोगुल'</b> शब्द का प्रयोग किया जाता था।"
    },
    {
        question: "प्रश्न 6. इल्तुतमिश के प्रतिद्वंद्वी ताजुद्दीन यिल्दिज और नासिरुद्दीन कुबाचा कौन थे?",
        answers: shuffle([
            { text: "उसके भाई", correct: false },
            { text: "मंगोल सरदार", correct: false },
            { text: "मुहम्मद गोरी के अन्य गुलाम", correct: true },
            { text: "राजपूत राजा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>यिल्दिज</b> (गजनी का शासक) और <b>कुबाचा</b> (सिंध और मुल्तान का शासक) भी <b>गोरी के गुलाम</b> थे।<br><br><i class='fa-solid fa-angles-right icon'></i> और वे <b>इल्तुतमिश</b> को दिल्ली का स्वतंत्र शासक नहीं मानते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> इल्तुतमिश ने दोनों को पराजित किया।"
    },
    {
        question: "प्रश्न 7. तराइन का तीसरा युद्ध (1215-16 ई.) किसके बीच हुआ था?",
        answers: shuffle([
            { text: "इल्तुतमिश और चंगेज खान", correct: false },
            { text: "इल्तुतमिश और यिल्दिज", correct: true },
            { text: "बलबन और मंगोल", correct: false },
            { text: "रजिया और अल्तूनिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब ख्वारिज्म शाह ने यिल्दिज को गजनी से भगा दिया, तो उसने पंजाब पर अधिकार करने का प्रयास किया।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>इल्तुतमिश</b> ने उसे <b>तराइन के मैदान</b> में पराजित किया।"
    },
    {
        question: "प्रश्न 8. दिल्ली में बलबन का मकबरा किस शैली में बना है?",
        answers: shuffle([
            { text: "नागर शैली", correct: false },
            { text: "द्रविड़ शैली", correct: false },
            { text: "शुद्ध इस्लामी शैली (वैज्ञानिक मेहराब का पहला प्रयोग)", correct: true },
            { text: "इंडो-इस्लामिक शैली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बलबन का मकबरा</b> मेहराब के निर्माण में <b>वैज्ञानिक विधि</b> का प्रयोग करने वाला भारत का पहला स्मारक है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इसे <b>शुद्ध इस्लामी शैली</b> का उत्कृष्ट उदाहरण माना जाता है।"
    },
    {
        question: "प्रश्न 9. किस सुल्तान ने चांदी के टके पर टकसाल का नाम लिखवाने की परंपरा शुरू की?",
        answers: shuffle([
            { text: "कुतुबुद्दीन ऐबक", correct: false },
            { text: "बलबन", correct: false },
            { text: "इल्तुतमिश", correct: true },
            { text: "अलाउद्दीन खिलजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इल्तुतमिश</b> ने अपनी मुद्रा प्रणाली को व्यवस्थित करते हुए सिक्कों पर <b>टकसाल</b> (जहाँ सिक्का ढाला गया है) का नाम अंकित करवाने की प्रथा शुरू की।"
    },
    {
        question: "प्रश्न 10. गुलाम वंश के किस शासक ने सुल्तान के पद को वंशानुगत बनाने का प्रयास किया?",
        answers: shuffle([
            { text: "कुतुबुद्दीन ऐबक", correct: false },
            { text: "इल्तुतमिश", correct: true },
            { text: "बलबन", correct: false },
            { text: "रजिया सुल्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इल्तुतमिश</b> ने अपनी मृत्यु से पहले अपनी बेटी <b>रजिया</b> को अपना उत्तराधिकारी नियुक्त करके सल्तनत में <b>वंशानुगत उत्तराधिकार</b> की परंपरा स्थापित करने का पहला प्रयास किया।"
    },
    {
        question: "प्रश्न 11. 'राजा का कोई सगा-संबंधी नहीं होता।' यह कथन किससे संबंधित है?",
        answers: shuffle([
            { text: "रजिया सुल्तान", correct: false },
            { text: "इल्तुतमिश", correct: false },
            { text: "बलबन", correct: true },
            { text: "अलाउद्दीन खिलजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह <b>बलबन के राजत्व सिद्धांत</b> का एक प्रमुख हिस्सा था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसका मानना था कि शासन और न्याय के मामले में सुल्तान के लिए कोई रिश्तेदार या मित्र नहीं होता।"
    },
    {
        question: "प्रश्न 12. बलबन ने दोआब क्षेत्र में विद्रोहों को दबाने के लिए किन किलों का निर्माण करवाया?",
        answers: shuffle([
            { text: "लाल किला और पुराना किला", correct: false },
            { text: "आगरा और फतेहपुर सीकरी", correct: false },
            { text: "पटियाली, कम्पिल और भोजपुर", correct: true },
            { text: "ग्वालियर और कालिंजर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कानून-व्यवस्था स्थापित करने और विद्रोही गतिविधियों पर नजर रखने के लिए बलबन ने गंगा-यमुना दोआब में <b>पटियाली, कम्पिल और भोजपुर</b> जैसे स्थानों पर मजबूत किलों की एक श्रृंखला बनवाई।<br><br><i class='fa-solid fa-angles-right icon'></i> और वहाँ अफगान सैनिकों को तैनात किया।"
    },
    {
        question: "प्रश्न 13. इल्तुतमिश की माँ का क्या नाम था जो उसके प्रारंभिक जीवन के बारे में जानकारी देती है?",
        answers: shuffle([
            { text: "शाह तुर्कान", correct: false },
            { text: "कुत्लुग निगार खानम", correct: false },
            { text: "इसामी", correct: false },
            { text: "स्रोतों में उल्लेख नहीं है", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इल्तुतमिश के माता-पिता के बारे में कोई विश्वसनीय ऐतिहासिक जानकारी उपलब्ध नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> उसे बचपन में ही उसके भाइयों ने बेच दिया था।"
    },
    {
        question: "प्रश्न 14. रजिया सुल्तान के शासनकाल की अवधि क्या थी?",
        answers: shuffle([
            { text: "1230-1235 ई.", correct: false },
            { text: "1236-1240 ई.", correct: true },
            { text: "1240-1245 ई.", correct: false },
            { text: "1220-1225 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>रजिया</b> ने अपने भाई रुकनुद्दीन फिरोज को अपदस्थ करने के बाद <b>1236 ई.</b> में सत्ता संभाली।<br><br><i class='fa-solid fa-angles-right icon'></i> और लगभग साढ़े तीन साल <b>(1240 ई. तक)</b> शासन किया।"
    },
    {
        question: "प्रश्न 15. 'चालीसा' दल का आधिकारिक नाम क्या था?",
        answers: shuffle([
            { text: "अमीर-ए-चिहालगानी", correct: false },
            { text: "तुर्कान-ए-चिहालगानी", correct: true },
            { text: "बंदगान-ए-खास", correct: false },
            { text: " कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इल्तुतमिश द्वारा गठित 40 तुर्क सरदारों के इस शक्तिशाली गुट का आधिकारिक नाम <b>'तुर्कान-ए-चिहालगानी'</b> था।"
    },
    {
        question: "प्रश्न 16. किस गुलाम शासक ने कभी 'सुल्तान' की उपाधि धारण नहीं की और स्वयं को 'मलिक' और 'सिपहसालार' ही कहता रहा?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "बलबन", correct: false },
            { text: "कुतुबुद्दीन ऐबक", correct: true },
            { text: "आराम शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>ऐबक</b> ने हमेशा मुहम्मद गोरी के प्रतिनिधि के रूप में शासन किया और औपचारिक रूप से <b>सुल्तान की उपाधि ग्रहण नहीं</b> की।<br><br><i class='fa-solid fa-angles-right icon'></i> वह <b>मलिक</b> और <b>सिपहसालार</b> की उपाधियों से ही संतुष्ट रहा।"
    },
    {
        question: "प्रश्न 17. रजिया के बाद दिल्ली का सुल्तान कौन बना?",
        answers: shuffle([
            { text: "नासिरुद्दीन महमूद", correct: false },
            { text: "मुईजुद्दीन बहराम शाह", correct: true },
            { text: "अलाउद्दीन मसूद शाह", correct: false },
            { text: "बलबन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रजिया को अपदस्थ करने के बाद, तुर्क अमीरों ने इल्तुतमिश के तीसरे पुत्र <b>मुईजुद्दीन बहराम शाह</b> को गद्दी पर बैठाया।<br><br><i class='fa-solid fa-angles-right icon'></i> जो एक कठपुतली शासक था।"
    },
    {
        question: "प्रश्न 18. बलबन ने मंगोलों से मुकाबले के लिए सीमांत क्षेत्र में किसे नियुक्त किया था?",
        answers: shuffle([
            { text: "अपने पुत्र मुहम्मद और बुगरा खान को", correct: true },
            { text: "अपने चचेरे भाई शेर खान को", correct: false },
            { text: "तुगरिल बेग को", correct: false },
            { text: "मलिक जानी को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बलबन</b> ने उत्तर-पश्चिमी सीमा की सुरक्षा को मजबूत करने के लिए सीमांत प्रांतों को अपने दो पुत्रों - <b>मुहम्मद खान</b> (सिंध-मुल्तान) और <b>बुगरा खान</b> (सुनाम-समाना) के बीच विभाजित कर दिया था।"
    },
    {
        question: "प्रश्न 19. 'सुल्तान को निरंकुश होना चाहिए।' यह कथन किस शासक का है?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "बलबन", correct: true },
            { text: "इल्तुतमिश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बलबन</b> का मानना था कि राज्य में शांति और व्यवस्था बनाए रखने के लिए सुल्तान की शक्ति का <b>निरंकुश और असीमित</b> होना आवश्यक है।"
    },
    {
        question: "प्रश्न 20. इल्तुतमिश ने किस राजपूत राज्य पर विजय प्राप्त नहीं की थी?",
        answers: shuffle([
            { text: "रणथंभौर", correct: false },
            { text: "मंदसौर", correct: false },
            { text: "ग्वालियर", correct: false },
            { text: "गुजरात", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इल्तुतमिश</b> ने <b>गुजरात</b> के चालुक्यों पर आक्रमण किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन वह उन्हें पूरी तरह से पराजित करने में असफल रहा।"
    },
    {
        question: "प्रश्न 21. इल्तुतमिश को दासता से मुक्ति कब मिली?",
        answers: shuffle([
            { text: "सुल्तान बनने से पहले", correct: false },
            { text: "सुल्तान बनने के बाद", correct: false },
            { text: "मुहम्मद गोरी द्वारा 1205-06 में", correct: true },
            { text: "उसे कभी दासता से मुक्ति नहीं मिली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खोक्करों के विरुद्ध अभियान में <b>इल्तुतमिश</b> की वीरता से प्रभावित होकर <b>मुहम्मद गोरी</b> ने ऐबक को उसे <b>दासता से मुक्त</b> करने का आदेश दिया था।"
    },
    {
        question: "प्रश्न 22. किस सुल्तान की मृत्यु के बाद उसकी माँ 'शाह तुर्कान' ने शासन पर नियंत्रण कर लिया था?",
        answers: shuffle([
            { text: "रजिया सुल्तान", correct: false },
            { text: "रुकनुद्दीन फिरोजशाह", correct: true },
            { text: "बहराम शाह", correct: false },
            { text: "नासिरुद्दीन महमूद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इल्तुतमिश की मृत्यु के बाद, जब उसका विलासी पुत्र <b>रुकनुद्दीन</b> सुल्तान बना।<br><br><i class='fa-solid fa-angles-right icon'></i> तो उसकी महत्वाकांक्षी माँ <b>शाह तुर्कान</b> ने, जो एक तुर्की दासी थी, शासन की बागडोर अपने हाथों में ले ली और अत्याचार करने लगी।"
    },
    {
        question: "प्रश्न 23. बलबन ने दरबार में किस प्रकार के व्यवहार पर रोक लगा दी थी?",
        answers: shuffle([
            { text: "जोर से हँसने और शराब पीने पर", correct: true },
            { text: "संगीत सुनने पर", correct: false },
            { text: "कविता पाठ करने पर", correct: false },
            { text: "उपहार देने पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दरबार की गरिमा और सुल्तान की प्रतिष्ठा बनाए रखने के लिए <b>बलबन</b> ने दरबार में किसी भी प्रकार के हल्के-फुल्के व्यवहार, जैसे <b>हँसना-बोलना और शराब पीने पर पूर्ण प्रतिबंध</b> लगा दिया था।"
    },
    {
        question: "प्रश्न 24. 'न्याय का सर्वोच्च अधिकारी सुल्तान है।' इस सिद्धांत को किसने स्थापित किया?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "रजिया", correct: false },
            { text: "बलबन", correct: true },
            { text: "ऐबक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बलबन</b> न्याय के मामले में बहुत कठोर था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने यह सिद्धांत स्थापित किया कि न्याय प्रदान करना <b>सुल्तान का सर्वोच्च कर्तव्य</b> है और उसने अपने संबंधियों को भी दंडित करने में कोई संकोच नहीं किया।"
    },
    {
        question: "प्रश्न 25. गुलाम वंश के पतन का मुख्य कारण क्या था?",
        answers: shuffle([
            { text: "मंगोल आक्रमण", correct: false },
            { text: "बलबन के कमजोर उत्तराधिकारी और खिलजी सरदारों का उदय", correct: true },
            { text: "आंतरिक विद्रोह", correct: false },
            { text: "आर्थिक संकट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बलबन की मृत्यु के बाद कोई भी योग्य शासक नहीं हुआ।<br><br><i class='fa-solid fa-angles-right icon'></i> उसके <b>उत्तराधिकारी कमजोर और विलासी</b> थे, जिसका लाभ उठाकर <b>खिलजी सरदार जलालुद्दीन</b> ने सत्ता पर अधिकार कर लिया।"
    },
    {
        question: "प्रश्न 26. 'ताज-उल-मासिर' का लेखक हसन निजामी किस सुल्तान का समकालीन था?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "इल्तुतमिश", correct: false },
            { text: "कुतुबुद्दीन ऐबक", correct: true },
            { text: "रजिया सुल्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>हसन निजामी</b> ने <b>कुतुबुद्दीन ऐबक</b> के शासनकाल की घटनाओं का वर्णन अपनी पुस्तक <b>'ताज-उल-मासिर'</b> में किया है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो गुलाम वंश के आरंभ का एक महत्वपूर्ण स्रोत है।"
    },
    {
        question: "प्रश्न 27. इल्तुतमिश ने उज्जैन के किस प्रसिद्ध मंदिर को नष्ट किया था?",
        answers: shuffle([
            { text: "सोमनाथ मंदिर", correct: false },
            { text: "महाकालेश्वर मंदिर", correct: true },
            { text: "लिंगराज मंदिर", correct: false },
            { text: "सूर्य मंदिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1234-35 ई.</b> में अपने मालवा अभियान के दौरान, <b>इल्तुतमिश</b> ने उज्जैन पर आक्रमण किया।<br><br><i class='fa-solid fa-angles-right icon'></i> और वहाँ के प्राचीन और प्रतिष्ठित <b>महाकालेश्वर मंदिर</b> को लूटा और तोड़ा।"
    },
    {
        question: "प्रश्न 28. किस सुल्तान ने 'नायब-ए-मुमालिकत' का पद सृजित किया था?",
        answers: shuffle([
            { text: "रजिया सुल्तान", correct: false },
            { text: "मुईजुद्दीन बहराम शाह", correct: true },
            { text: "इल्तुतमिश", correct: false },
            { text: "बलबन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रजिया के बाद, तुर्क अमीरों ने सुल्तान की शक्तियों को कम करने के लिए <b>'नायब-ए-मुमालिकत'</b> (राज्य का संरक्षक) का एक नया पद बनाया।<br><br><i class='fa-solid fa-angles-right icon'></i> और सबसे पहले <b>ऐतिगिन</b> को इस पद पर नियुक्त किया।"
    },
    {
        question: "प्रश्न 29. बलबन ने किस मस्जिद की दीवारों पर अपने उपदेश खुदवाए थे?",
        answers: shuffle([
            { text: "कुव्वत-उल-इस्लाम", correct: false },
            { text: "अढाई दिन का झोपड़ा", correct: false },
            { text: "गढ़मुक्तेश्वर की मस्जिद", correct: true },
            { text: "जामा मस्जिद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>गढ़मुक्तेश्वर (उत्तर प्रदेश)</b> की मस्जिद की दीवारों पर लगे शिलालेखों में <b>बलबन</b> ने खलीफा के प्रति अपने सम्मान और शासक के कर्तव्यों का उल्लेख करवाया है।"
    },
    {
        question: "प्रश्न 30. गुलाम वंश के शासकों ने कितने वर्षों तक शासन किया?",
        answers: shuffle([
            { text: "75 वर्ष", correct: false },
            { text: "84 वर्ष", correct: true },
            { text: "92 वर्ष", correct: false },
            { text: "100 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुलाम वंश का शासन <b>1206 ई.</b> में शुरू हुआ और <b>1290 ई.</b> में समाप्त हो गया।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रकार उन्होंने कुल <b>84 वर्षों</b> तक शासन किया।"
    },
    {
        question: "प्रश्न 31. रजिया को सुल्तान बनाने में किसका हाथ था?",
        answers: shuffle([
            { text: "a) तुर्क अमीरों का", correct: false },
            { text: "b) इल्तुतमिश की वसीयत का", correct: false },
            { text: "c) दिल्ली की आम जनता का", correct: false },
            { text: "b) और c) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इल्तुतमिश</b> ने रजिया को अपना उत्तराधिकारी नामित किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> जब शाह तुर्कान के अत्याचारों से तंग आकर <b>दिल्ली की जनता</b> ने विद्रोह किया, तो उन्होंने इल्तुतमिश की इच्छा का सम्मान करते हुए <b>रजिया का समर्थन</b> किया और उसे सुल्तान बनाया।"
    },
    {
        question: "प्रश्न 32. बलबन की मृत्यु कब हुई?",
        answers: shuffle([
            { text: "1285 ई.", correct: false },
            { text: "1287 ई.", correct: true },
            { text: "1290 ई.", correct: false },
            { text: "1280 ई.", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपने प्रिय पुत्र शहजादा मुहम्मद की मृत्यु के गहरे सदमे के कारण बलबन का स्वास्थ्य बिगड़ता गया।<br><br><i class='fa-solid fa-angles-right icon'></i> और <b>1287 ई.</b> में उसकी मृत्यु हो गई।"
    },
    {
        question: "प्रश्न 33. 'शम्सी' वंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "कुतुबुद्दीन ऐबक", correct: false },
            { text: "इल्तुतमिश", correct: true },
            { text: "बलबन", correct: false },
            { text: "रजिया सुल्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि <b>इल्तुतमिश</b> का पूरा नाम <b>शम्सुद्दीन इल्तुतमिश</b> था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए उसके द्वारा स्थापित राजवंश को <b>'शम्सी वंश'</b> भी कहा जाता है, जो गुलाम वंश का ही एक हिस्सा था।"
    },
    {
        question: "प्रश्न 34. गुलाम वंश के पतन के बाद दिल्ली में कौन सी क्रांति हुई?",
        answers: shuffle([
            { text: "मंगोल क्रांति", correct: false },
            { text: "राजपूत क्रांति", correct: false },
            { text: "खिलजी क्रांति", correct: true },
            { text: "तुगलक क्रांति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>जलालुद्दीन खिलजी</b> द्वारा सत्ता पर अधिकार को <b>'खिलजी क्रांति'</b> कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> क्योंकि इसने सत्ता पर इल्बारी तुर्कों के एकाधिकार को समाप्त कर दिया और यह दिखाया कि शक्ति तलवार के बल पर प्राप्त की जा सकती है, न कि केवल उच्च कुल के आधार पर।"
    },
    {
        question: "प्रश्न 35. बलबन ने किस मंगोल शासक के साथ समझौता किया था कि मंगोल सतलुज नदी को पार नहीं करेंगे?",
        answers: shuffle([
            { text: "चंगेज खान", correct: false },
            { text: "तैमूर", correct: false },
            { text: "हलाकू खान", correct: true },
            { text: "कुबलई खान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बलबन</b> ने कूटनीति का प्रयोग करते हुए ईरान के इल्खानी मंगोल शासक <b>हलाकू खान</b> के साथ एक प्रकार की मौन सहमति बनाई।<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे सल्तनत की पश्चिमी सीमा पर कुछ समय के लिए शांति स्थापित हो गई।"
    },
    {
        question: "प्रश्न 36. इल्तुतमिश ने अपनी राजधानी दिल्ली में किस हौज (तालाब) का निर्माण करवाया था?",
        answers: shuffle([
            { text: "हौज-ए-खास", correct: false },
            { text: "हौज-ए-सुल्तानी (हौज-ए-शम्सी)", correct: true },
            { text: "हौज रानी", correct: false },
            { text: "सूरज कुंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिल्ली के निवासियों को पानी की आपूर्ति सुनिश्चित करने के लिए, <b>इल्तुतमिश</b> ने एक बड़े तालाब का निर्माण करवाया।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसे <b>'हौज-ए-सुल्तानी'</b> या <b>'हौज-ए-शम्सी'</b> के नाम से जाना जाता है।"
    },
    {
        question: "प्रश्न 37. रजिया के विरोधी गुट का नेतृत्व कौन कर रहा था?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "निजाम-उल-मुल्क जुनैदी", correct: true },
            { text: "याकूत", correct: false },
            { text: "अल्तूनिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इल्तुतमिश का वजीर, <b>निजाम-उल-मुल्क जुनैदी</b>, रजिया को सुल्तान बनाए जाने के खिलाफ था।<br><br><i class='fa-solid fa-angles-right icon'></i> और उसने कई प्रांतीय इक्तादारों के साथ मिलकर उसके विरुद्ध एक गुट बनाया।"
    },
    {
        question: "प्रश्न 38. कुतुबुद्दीन ऐबक को कहाँ दफनाया गया था?",
        answers: shuffle([
            { text: "दिल्ली", correct: false },
            { text: "अजमेर", correct: false },
            { text: "लाहौर", correct: true },
            { text: "आगरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि <b>कुतुबुद्दीन ऐबक</b> की मृत्यु <b>लाहौर</b> में हुई थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए उसे वहीं अनारकली बाजार के पास दफनाया गया था।"
    },
    {
        question: "प्रश्न 39. गुलाम वंश के किस सुल्तान ने मलिकों और अमीरों पर निगरानी रखने के लिए विवाह संबंधों पर भी नियंत्रण स्थापित किया?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "रजिया", correct: false },
            { text: "बलबन", correct: true },
            { text: "अलाउद्दीन खिलजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बलबन</b> ने अमीरों की शक्ति को तोड़ने और उनके बीच गुटबंदी को रोकने के लिए अपनी अनुमति के बिना उनके आपसी <b>वैवाहिक संबंधों पर भी रोक</b> लगा दी।"
    },
    {
        question: "प्रश्न 40. इल्तुतमिश को 'गुलाम का गुलाम' क्यों कहा जाता है?",
        answers: shuffle([
            { text: "क्योंकि वह बहुत विनम्र था", correct: false },
            { text: "क्योंकि वह मुहम्मद गोरी के गुलाम (ऐबक) का गुलाम था", correct: true },
            { text: "यह एक अपमानजनक उपाधि थी", correct: false },
            { text: "क्योंकि उसने कई गुलाम खरीदे थे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुहम्मद गोरी का गुलाम <b>कुतुबुद्दीन ऐबक</b> था।<br><br><i class='fa-solid fa-angles-right icon'></i> और <b>इल्तुतमिश को ऐबक ने खरीदा</b> था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, इल्तुतमिश को <b>'गुलाम का गुलाम'</b> कहा जाता है।"
    },
    {
        question: "प्रश्न 41. गुलाम वंश के पतन के बाद दिल्ली में कौन सी क्रांति हुई?",
        answers: shuffle([
            { text: "मंगोल क्रांति", correct: false },
            { text: "राजपूत क्रांति", correct: false },
            { text: "खिलजी क्रांति", correct: true },
            { text: "तुगलक क्रांति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>जलालुद्दीन खिलजी</b> द्वारा सत्ता पर अधिकार को <b>'खिलजी क्रांति'</b> कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> क्योंकि इसने सत्ता पर इल्बारी तुर्कों के एकाधिकार को समाप्त कर दिया और यह दिखाया कि शक्ति तलवार के बल पर प्राप्त की जा सकती है, न कि केवल उच्च कुल के आधार पर।"
    },
    {
        question: "प्रश्न 42. किस सुल्तान ने अमीरों की संपत्ति जब्त करके 'खालिसा भूमि' (केंद्रीय सरकार की भूमि) का विस्तार किया?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "बलबन", correct: true },
            { text: "फिरोजशाह तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि यह नीति अलाउद्दीन खिलजी के समय में बड़े पैमाने पर अपनाई गई।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन इसकी शुरुआत <b>बलबन</b> ने ही कर दी थी।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने कई इक्तादारों की जागीरें जब्त कर उन्हें <b>खालिसा भूमि</b> में परिवर्तित कर दिया था।"
    },
    {
        question: "प्रश्न 43. दिल्ली सल्तनत का पहला अफगान शासक कौन था?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "बलबन", correct: false },
            { text: "बहलोल लोदी", correct: true },
            { text: "गुलाम वंश में कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुलाम वंश के सभी शासक <b>तुर्क</b> थे।<br><br><i class='fa-solid fa-angles-right icon'></i> दिल्ली सल्तनत के पहले <b>अफगान शासक लोदी वंश के संस्थापक बहलोल लोदी</b> थे।"
    },
    {
        question: "प्रश्न 44. 'बलबनी वंश' का संस्थापक कौन था?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "बहराम शाह", correct: false },
            { text: "बलबन", correct: true },
            { text: "कैकुबाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>गयासुद्दीन बलबन</b> ने एक नए राजवंश की स्थापना की।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसे उसके नाम पर <b>'बलबनी वंश'</b> कहा जाता है, जो गुलाम वंश का ही दूसरा चरण था।"
    },
    {
        question: "प्रश्न 45. किस सुल्तान ने अपने दरबारियों के लिए एक विशेष पोशाक (Dress Code) निर्धारित की थी?",
        answers: shuffle([
            { text: "रजिया सुल्तान", correct: false },
            { text: "बलबन", correct: true },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "इब्राहिम लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दरबार की गरिमा और एकरूपता बनाए रखने के लिए <b>बलबन</b> ने सभी अमीरों और दरबारियों के लिए एक <b>निर्धारित पोशाक</b> पहनना अनिवार्य कर दिया था।"
    },
    {
        question: "प्रश्न 46. इल्तुतमिश ने तराइन के तीसरे युद्ध में किसे पराजित किया था?",
        answers: shuffle([
            { text: "कुबाचा", correct: false },
            { text: "यिल्दिज", correct: true },
            { text: "मंगोल", correct: false },
            { text: "जलालुद्दीन मंगबरनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गजनी के शासक <b>ताजुद्दीन यिल्दिज</b> ने दिल्ली पर अपना दावा किया।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसे <b>इल्तुतमिश</b> ने <b>1215-16 ई.</b> में तराइन के मैदान में हराकर मार डाला।"
    },
    {
        question: "प्रश्न 47. किस इतिहासकार ने रजिया के बारे में लिखा कि, 'उसमें एक महान सम्राट के सभी गुण थे, सिवाय इसके कि वह एक महिला थी'?",
        answers: shuffle([
            { text: "हसन निजामी", correct: false },
            { text: "जियाउद्दीन बरनी", correct: false },
            { text: "मिनहाज-उस-सिराज", correct: true },
            { text: "अमीर खुसरो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रजिया के समकालीन इतिहासकार <b>मिनहाज-उस-सिराज</b> ने उसकी योग्यता की प्रशंसा करते हुए यह प्रसिद्ध टिप्पणी की थी।"
    },
    {
        question: "प्रश्न 48. बलबन ने अपने पुत्र बुगरा खान को कहाँ का सूबेदार नियुक्त किया था?",
        answers: shuffle([
            { text: "सिंध", correct: false },
            { text: "मुल्तान", correct: false },
            { text: "बंगाल", correct: true },
            { text: "अवध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तुगरिल बेग के विद्रोह को दबाने के बाद, <b>बलबन</b> ने अपने दूसरे पुत्र <b>बुगरा खान</b> को <b>बंगाल का सूबेदार</b> नियुक्त किया।<br><br><i class='fa-solid fa-angles-right icon'></i> और उसे दिल्ली के प्रति वफादार रहने की सख्त हिदायत दी।"
    },
    {
        question: "प्रश्न 49. दिल्ली सल्तनत का कौन सा सुल्तान कभी सार्वजनिक रूप से नहीं हँसता था?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "नासिरुद्दीन महमूद", correct: false },
            { text: "बलबन", correct: true },
            { text: "कैकुबाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुल्तान के पद की गरिमा और भय बनाए रखने के लिए <b>बलबन</b> ने अपने व्यक्तित्व को बहुत गंभीर और कठोर बना लिया था।<br><br><i class='fa-solid fa-angles-right icon'></i> वह दरबार में कभी मुस्कुराता या हँसता नहीं था।"
    },
    {
        question: "प्रश्न 50. कुतुबुद्दीन ऐबक की मृत्यु के समय इल्तुतमिश कहाँ का इक्तादार था?",
        answers: shuffle([
            { text: "हाँसी", correct: false },
            { text: "बदायूँ", correct: true },
            { text: "लाहौर", correct: false },
            { text: "दिल्ली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब ऐबक की मृत्यु हुई, तब उसका सबसे योग्य गुलाम और दामाद <b>इल्तुतमिश</b> <b>बदायूँ</b> का गवर्नर था।"
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