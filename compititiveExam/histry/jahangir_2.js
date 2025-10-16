const questions = [
    {
        topHeading: "जहाँगीर पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. जहाँगीर ने किस चित्रकार को फारस के शाह और उसके अमीरों का चित्र बनाने के लिए ईरान भेजा था?",
        answers: shuffle([
            { text: "अबुल हसन", correct: false },
            { text: "उस्ताद मंसूर", correct: false },
            { text: "मनोहर", correct: false },
            { text: "बिशन दास", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिशन दास छवि-चित्रण (पोर्ट्रेट बनाने) में बहुत निपुण था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसे एक दूत मंडल के साथ फारस भेजा गया था ताकि वह शाह अब्बास और उसके दरबारियों के यथार्थवादी चित्र बना सके।"
    },
    {
        question: "प्रश्न 2. जहाँगीर के समय में यूरोप की कौन सी कला भारत आई?",
        answers: shuffle([
            { text: "तैल चित्रण", correct: true },
            { text: "गोथिक वास्तुकला", correct: false },
            { text: "पुनर्जागरण मूर्तिकला", correct: false },
            { text: "ओपेरा संगीत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूरोपीय व्यापारियों और पादरियों के माध्यम से मुगल दरबार में यूरोपीय पेंटिंग, विशेषकर तैल चित्रण, का परिचय हुआ, जिसने मुगल चित्रकारों को भी प्रभावित किया।"
    },
    {
        question: "प्रश्न 3. जहाँगीर के काल में 'पाइन' नामक फल भारत में कहाँ से लाया गया?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "अफ्रीका", correct: false },
            { text: "पुर्तगाल (यूरोप के माध्यम से)", correct: true },
            { text: "मध्य एशिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनानास (Pineapple) और कई अन्य अमेरिकी फल और सब्जियां पुर्तगालियों द्वारा भारत में लाई गईं।"
    },
    {
        question: "प्रश्न 4. जहाँगीर ने किस सिख गुरु को ग्वालियर के किले में कैद किया था?",
        answers: shuffle([
            { text: "गुरु अर्जन देव", correct: false },
            { text: "गुरु हरगोबिंद", correct: true },
            { text: "गुरु हर राय", correct: false },
            { text: "गुरु तेग बहादुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जहाँगीर ने सिखों की बढ़ती सैन्य शक्ति पर अंकुश लगाने के लिए छठे गुरु, गुरु हरगोबिंद जी को कुछ समय के लिए ग्वालियर के किले में बंदी बना लिया था।"
    },
    {
        question: "प्रश्न 5. जहाँगीर के बचपन के शिक्षक कौन थे?",
        answers: shuffle([
            { text: "अबुल फजल", correct: false },
            { text: "फैजी", correct: false },
            { text: "अब्दुर रहीम खान-ए-खाना", correct: true },
            { text: "बीरबल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैरम खाँ के पुत्र और अकबर के नवरत्नों में से एक, अब्दुर रहीम खान-ए-खाना, सलीम के अतालिक (शिक्षक/संरक्षक) नियुक्त किए गए थे।"
    },
    {
        question: "प्रश्न 6. 'जहाँगीर का स्वप्न' नामक प्रसिद्ध चित्र किसने बनाया था?",
        answers: shuffle([
            { text: "उस्ताद मंसूर", correct: false },
            { text: "बिशन दास", correct: false },
            { text: "अबुल हसन", correct: true },
            { text: "दौलत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस प्रसिद्ध चित्र में जहाँगीर को उसके प्रतिद्वंद्वी फारस के शाह अब्बास को गले लगाते हुए दिखाया गया है, जबकि वास्तव में वे कभी नहीं मिले थे।<br><br><i class='fa-solid fa-angles-right icon'></i> यह जहाँगीर की इच्छा का एक प्रतीकात्मक चित्रण है।"
    },
    {
        question: "प्रश्न 7. जहाँगीर ने किस त्योहार पर तुलादान (सोने-चाँदी से तौलने की प्रथा) को जारी रखा?",
        answers: shuffle([
            { text: "ईद", correct: false },
            { text: "नौरोज", correct: false },
            { text: "जन्मदिन", correct: true },
            { text: "राज्याभिषेक दिवस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक हिंदू परंपरा थी जिसे अकबर ने अपनाया था।<br><br><i class='fa-solid fa-angles-right icon'></i> जहाँगीर भी अपने जन्मदिन पर स्वयं को सोने, चाँदी और अन्य वस्तुओं से तुलवाता था और उसे गरीबों में बाँट देता था।"
    },
    {
        question: "प्रश्न 8. जहाँगीर का मकबरा किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "झेलम", correct: false },
            { text: "चिनाब", correct: false },
            { text: "रावी", correct: true },
            { text: "सतलज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जहाँगीर का मकबरा लाहौर में शाहदरा नामक स्थान पर रावी नदी के तट पर है।"
    },
    {
        question: "प्रश्न 9. जहाँगीर का कौनसा पुत्र उसकी मृत्यु के समय दक्कन का सूबेदार था?",
        answers: shuffle([
            { text: "खुर्रम", correct: false },
            { text: "परवेज़", correct: true },
            { text: "शहरयार", correct: false },
            { text: "खुसरौ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शाहजहाँ के विद्रोह के बाद, परवेज़ को दक्कन का सूबेदार नियुक्त किया गया था।"
    },
    {
        question: "प्रश्न 10. जहाँगीर की मृत्यु के बाद नूरजहाँ ने किसे बादशाह बनाने का प्रयास किया?",
        answers: shuffle([
            { text: "खुर्रम (शाहजहाँ)", correct: false },
            { text: "खुसरौ के पुत्र दावर बख्श", correct: false },
            { text: "अपने दामाद शहरयार", correct: true },
            { text: "परवेज़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नूरजहाँ चाहती थी कि उसका दामाद शहरयार, जो उस समय लाहौर में था, बादशाह बने ताकि उसका प्रभाव बना रहे।"
    },
    {
        question: "प्रश्न 11. जहाँगीर की मृत्यु के समय शाहजहाँ कहाँ था?",
        answers: shuffle([
            { text: "आगरा", correct: false },
            { text: "दिल्ली", correct: false },
            { text: "दक्कन", correct: true },
            { text: "लाहौर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शाहजहाँ अपने विद्रोह की असफलता के बाद दक्कन में निर्वासन जैसी स्थिति में था।"
    },
    {
        question: "प्रश्न 12. 'बलि का बकरा' (Bait) के रूप में किस शहजादे को कुछ समय के लिए बादशाह बनाया गया ताकि शाहजहाँ आगरा पहुँच सके?",
        answers: shuffle([
            { text: "शहरयार", correct: false },
            { text: "होशांग", correct: false },
            { text: "दावर बख्श", correct: true },
            { text: "गुरशास्प", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शाहजहाँ के ससुर आसफ खाँ ने खुसरौ के बेटे दावर बख्श को अस्थायी रूप से सिंहासन पर बैठा दिया ताकि शाहजहाँ के आगरा पहुँचने तक सिंहासन खाली न रहे और शहरयार को रोका जा सके।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में दावर बख्श की हत्या कर दी गई।"
    },
    {
        question: "प्रश्न 13. जहाँगीर को किस चीज का बहुत शौक था और उसने अपनी आत्मकथा में उसका विस्तृत वर्णन किया है?",
        answers: shuffle([
            { text: "वास्तुकला", correct: false },
            { text: "संगीत", correct: false },
            { text: "शिकार और प्रकृति (वनस्पति एवं जीव)", correct: true },
            { text: "खेल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जहाँगीर एक उत्सुक शिकारी और प्रकृति-प्रेमी था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने 'तुजुक-ए-जहाँगीरी' में भारत के विभिन्न पशु-पक्षियों, फूलों और फलों का बहुत ही सजीव और वैज्ञानिक वर्णन किया है।"
    },
    {
        question: "प्रश्न 14. जहाँगीर के शासनकाल में किस यूरोपीय शक्ति ने भारत के पश्चिमी तट पर अपनी स्थिति मजबूत की?",
        answers: shuffle([
            { text: "फ्रांसीसी", correct: false },
            { text: "डच", correct: false },
            { text: "पुर्तगाली", correct: false },
            { text: "अंग्रेज", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जहाँगीर के काल में अंग्रेजों ने सूरत में अपनी पहली स्थायी फैक्ट्री स्थापित की और पुर्तगालियों के एकाधिकार को चुनौती देना शुरू कर दिया।"
    },
    {
        question: "प्रश्न 15. जहाँगीर ने कश्मीर के किस बाग का निर्माण करवाया?",
        answers: shuffle([
            { text: "निशात बाग", correct: false },
            { text: "चश्मे शाही", correct: false },
            { text: "शालीमार बाग", correct: true },
            { text: "परी महल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जहाँगीर ने अपनी पत्नी नूरजहाँ के लिए श्रीनगर में डल झील के किनारे प्रसिद्ध शालीमार बाग का निर्माण करवाया था।"
    },
    {
        question: "प्रश्न 16. जहाँगीर के शयनकक्ष में ईसा मसीह और वर्जिन मैरी की तस्वीरें किसने देखी थीं?",
        answers: shuffle([
            { text: "विलियम हॉकिन्स", correct: false },
            { text: "सर थॉमस रो", correct: true },
            { text: "फादर ज़ेवियर", correct: false },
            { text: "एडवर्ड टेरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सर थॉमस रो ने अपने विवरण में लिखा है कि जहाँगीर की धार्मिक रुचि इतनी व्यापक थी कि उसके निजी कक्षों में ईसाई धर्म से संबंधित चित्र भी लगे हुए थे।"
    },
    {
        question: "प्रश्न 17. जहाँगीर ने किस ज्योतिष को 'ज्योतिक राय' की उपाधि दी थी?",
        answers: shuffle([
            { text: "जगन्नाथ", correct: true },
            { text: "जनार्दन भट्ट", correct: false },
            { text: "कृष्ण दैवज्ञ", correct: false },
            { text: "नीलकंठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पंडित जगन्नाथ जहाँगीर के दरबारी कवि और ज्योतिष थे, जिन्हें उसने यह उपाधि प्रदान की थी।"
    },
    {
        question: "प्रश्न 18. जहाँगीर ने किस हिंदू कवि को 'महाकविराय' की उपाधि दी थी?",
        answers: shuffle([
            { text: "केशवदास", correct: false },
            { text: "सेनापति", correct: false },
            { text: "जगन्नाथ", correct: false },
            { text: "सुंदरदास", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्वालियर के ब्राह्मण कवि सुंदरदास को जहाँगीर ने 'महाकविराय' और 'राय' की उपाधि से सम्मानित किया था।"
    },
    {
        question: "प्रश्न 19. जहाँगीर के शासनकाल में आगरा में प्लेग की महामारी का वर्णन किस विदेशी यात्री ने किया है?",
        answers: shuffle([
            { text: "फ्रांसिस्को पेलसार्ट", correct: true },
            { text: "पीटर मुंडी", correct: false },
            { text: "जॉन जॉर्डन", correct: false },
            { text: "निकोलो कोंटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डच यात्री पेलसार्ट ने जहाँगीर के शासनकाल के दौरान फैले प्लेग और उसके कारण हुई तबाही का विस्तृत वर्णन किया है।"
    },
    {
        question: "प्रश्न 20. जहाँगीर ने किस जानवर के शिकार पर प्रतिबंध लगा दिया था?",
        answers: shuffle([
            { text: "शेर", correct: false },
            { text: "हाथी", correct: false },
            { text: "गैंडा", correct: true },
            { text: "चीता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गैंडों की घटती संख्या को देखते हुए जहाँगीर ने गुजरात और काठियावाड़ के जंगलों में उनके शिकार पर रोक लगा दी थी।"
    },
    {
        question: "प्रश्न 21. \"मैं एक प्याला शराब और एक थाली शोरबे के लिए अपना साम्राज्य अपनी प्रिय बेगम को बेच चुका हूँ।\" - यह कथन किसका है?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "जहाँगीर", correct: true },
            { text: "शाहजहाँ", correct: false },
            { text: "हुमायूँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह कथन जहाँगीर की शराब के प्रति अत्यधिक आसक्ति और नूरजहाँ के हाथों में शासन की बागडोर चले जाने को दर्शाता है।"
    },
    {
        question: "प्रश्न 22. जहाँगीर ने 'अल्तमगा' जागीर किसे प्रदान की थी?",
        answers: shuffle([
            { text: "अपने पसंदीदा अमीरों को", correct: true },
            { text: "राजपूत राजाओं को", correct: false },
            { text: "धार्मिक विद्वानों को", correct: false },
            { text: "महिला सदस्यों को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अल्तमगा' एक विशेष प्रकार की वंशानुगत और स्थायी जागीर होती थी, जो बादशाह अपने अत्यंत विश्वसनीय और प्रिय अमीरों को प्रदान करता था।"
    },
    {
        question: "प्रश्न 23. जहाँगीर के दरबार में किस संगीतकार को 'गुणसमुद्र' की उपाधि मिली थी?",
        answers: shuffle([
            { text: "तानसेन", correct: false },
            { text: "लाल खाँ", correct: true },
            { text: "विलास खाँ", correct: false },
            { text: "शौकी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल खाँ, जो प्रसिद्ध संगीतकार तानसेन के दामाद थे, जहाँगीर और शाहजहाँ दोनों के दरबार में एक प्रमुख संगीतज्ञ थे।"
    },
    {
        question: "प्रश्न 24. जहाँगीर के काल में आगरा में नील का प्रमुख केंद्र कौनसा था?",
        answers: shuffle([
            { text: "फतेहपुर सीकरी", correct: false },
            { text: "बयाना", correct: true },
            { text: "सिकंदरा", correct: false },
            { text: "मथुरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजस्थान में स्थित बयाना अपनी उच्च गुणवत्ता वाली नील की खेती के लिए पूरे विश्व में प्रसिद्ध था और यह मुगल काल में एक बड़ा व्यापारिक केंद्र था।"
    },
    {
        question: "प्रश्न 25. जहाँगीर ने किस बीमारी के इलाज के लिए बर्फ का इस्तेमाल शुरू करवाया था?",
        answers: shuffle([
            { text: "प्लेग", correct: false },
            { text: "हैजा", correct: false },
            { text: "शराब की लत छुड़ाने के लिए", correct: true },
            { text: "चेचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जहाँगीर ने अपनी आत्मकथा में लिखा है कि शराब की तलब को कम करने के लिए वह पानी में बर्फ मिलाकर पीता था।"
    },
    {
        question: "प्रश्न 26. नूरजहाँ द्वारा बनाए गए वस्त्रों और इत्रों में से सबसे प्रसिद्ध क्या था?",
        answers: shuffle([
            { text: "जामदानी", correct: false },
            { text: "चिकनकारी", correct: false },
            { text: "इत्र-ए-जहाँगीरी", correct: true },
            { text: "पशमीना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माना जाता है कि गुलाब से इत्र निकालने की विधि का आविष्कार नूरजहाँ की माँ अस्मत बेगम ने किया था, जिसे 'इत्र-ए-जहाँगीरी' कहा गया।"
    },
    {
        question: "प्रश्न 27. जहाँगीर की न्याय की जंजीर किस धातु की बनी थी?",
        answers: shuffle([
            { text: "चाँदी", correct: false },
            { text: "सोना", correct: true },
            { text: "पीतल", correct: false },
            { text: "लोहा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह प्रसिद्ध जंजीर शुद्ध सोने की बनी थी और इसमें 60 घंटियाँ लगी हुई थीं।"
    },
    {
        question: "प्रश्न 28. जहाँगीर ने किस दिन पशु-हत्या पर पूर्ण प्रतिबंध लगा दिया था?",
        answers: shuffle([
            { text: "a) शुक्रवार (उसके राज्याभिषेक का दिन)", correct: false },
            { text: "b) रविवार (अकबर के जन्म का दिन)", correct: false },
            { text: "a) ,b) दोनों", correct: true },
            { text: "सोमवार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जहाँगीर ने अपने राज्याभिषेक के दिन (शुक्रवार) और अपने पिता अकबर के जन्मदिन (रविवार) पर पूरे साम्राज्य में पशु-वध को निषिद्ध कर दिया था।"
    },
    {
        question: "प्रश्न 29. शाहजहाँ के विद्रोह को दबाने के लिए मुख्य रूप से किसे भेजा गया था?",
        answers: shuffle([
            { text: "आसफ खाँ", correct: false },
            { text: "महाबत खाँ और शहजादा परवेज़", correct: true },
            { text: "अब्दुल्ला खाँ", correct: false },
            { text: "खान-ए-जहाँ लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जहाँगीर ने अपने सबसे योग्य सेनापति महाबत खाँ और पुत्र परवेज़ को शाहजहाँ के विद्रोह का दमन करने के लिए भेजा था।"
    },
    {
        question: "प्रश्न 30. जहाँगीर ने आगरा के पास स्थित अपने पिता के मकबरे का निर्माण कार्य पूरा करवाया, वह मकबरा कहाँ है?",
        answers: shuffle([
            { text: "फतेहपुर सीकरी", correct: false },
            { text: "दिल्ली", correct: false },
            { text: "सिकंदरा", correct: true },
            { text: "औरंगाबाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकबर का मकबरा आगरा के पास सिकंदरा में है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका निर्माण कार्य अकबर ने शुरू किया था और जहाँगीर ने इसे पूरा करवाया।"
    },
    {
        question: "प्रश्न 31. जहाँगीर ने किस हिंदू विद्वान को संरक्षण दिया था, जिसने 'अकबरशाही श्रृंगार दर्पण' लिखा?",
        answers: shuffle([
            { text: "केशवदास", correct: false },
            { text: "सुंदरदास", correct: false },
            { text: "पद्मसुंदर", correct: true },
            { text: "चिंतामणि त्रिपाठी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पद्मसुंदर एक जैन विद्वान थे, लेकिन उन्होंने जहाँगीर के संरक्षण में संस्कृत ग्रंथ 'अकबरशाही श्रृंगार दर्पण' की रचना की।"
    },
    {
        question: "प्रश्न 32. जहाँगीर ने 'मीर-ए-अदल' नामक अधिकारी की नियुक्ति क्यों की?",
        answers: shuffle([
            { text: "शाही कारखानों की देखरेख के लिए", correct: false },
            { text: "न्याय प्रशासन में काजी की सहायता के लिए", correct: true },
            { text: "सेना का वेतन बांटने के लिए", correct: false },
            { text: "गुप्तचर विभाग के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मीर-ए-अदल एक न्यायिक अधिकारी होता था जो बादशाह के सामने लाए गए मामलों की जाँच करता था और काजी को फैसले सुनाने में मदद करता था।"
    },
    {
        question: "प्रश्न 33. जहाँगीर के काल में अफीम का प्रमुख उत्पादन केंद्र कहाँ था?",
        answers: shuffle([
            { text: "बंगाल", correct: false },
            { text: "गुजरात", correct: false },
            { text: "मालवा और बिहार", correct: true },
            { text: "पंजाब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुगल काल में मालवा और बिहार उच्च गुणवत्ता वाली अफीम के उत्पादन के लिए प्रसिद्ध थे।"
    },
    {
        question: "प्रश्न 34. जहाँगीर का विवाह जगत गोसाईं (जोधाबाई) से हुआ था, वह किस राजपूत राज्य की राजकुमारी थीं?",
        answers: shuffle([
            { text: "आमेर (जयपुर)", correct: false },
            { text: "बीकानेर", correct: false },
            { text: "जैसलमेर", correct: false },
            { text: "मारवाड़ (जोधपुर)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जगत गोसाईं मारवाड़ के शासक 'मोटाराजा' उदय सिंह की पुत्री थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> शाहजहाँ इन्हीं का पुत्र था।"
    },
    {
        question: "प्रश्न 35. 'मासिर-ए-जहाँगीरी' के लेखक कौन हैं?",
        answers: shuffle([
            { text: "मोतमिद खाँ", correct: false },
            { text: "इनायत खाँ", correct: false },
            { text: "ख्वाजा कामगार गरेत खाँ", correct: true },
            { text: "मुहम्मद हादी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ख्वाजा कामगार ने जहाँगीर के शासनकाल का इतिहास 'मासिर-ए-जहाँगीरी' के नाम से लिखा है।"
    },
    {
        question: "प्रश्न 36. जहाँगीर ने किस दिन सार्वजनिक रूप से शराब पी थी और अपने अमीरों को भी पिलाई थी?",
        answers: shuffle([
            { text: "ईद के दिन", correct: false },
            { text: "नौरोज के उत्सव पर", correct: true },
            { text: "अपने भाई दानियाल की मृत्यु के बाद", correct: false },
            { text: "कांगड़ा विजय के बाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शराबबंदी के अपने आदेश के बावजूद, जहाँगीर स्वयं इसका सेवन करता था और विशेष अवसरों, जैसे फारसी नव वर्ष 'नौरोज' के जश्न में, खुले आम शराब पी जाती थी।"
    },
    {
        question: "प्रश्न 37. जहाँगीर के शासनकाल में 'इजारा' प्रणाली क्या थी?",
        answers: shuffle([
            { text: "वंशानुगत भूमि अनुदान", correct: false },
            { text: "राजस्व वसूली का ठेका देने की प्रथा", correct: true },
            { text: "सैनिकों को नकद वेतन", correct: false },
            { text: "एक प्रकार का धार्मिक कर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इजारा प्रणाली के तहत, किसी क्षेत्र से भू-राजस्व वसूलने का अधिकार सबसे ऊंची बोली लगाने वाले ठेकेदार को दे दिया जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह किसानों के लिए शोषणकारी थी।"
    },
    {
        question: "प्रश्न 38. जहाँगीर की न्याय की जंजीर में कितनी घंटियाँ थीं?",
        answers: shuffle([
            { text: "12", correct: false },
            { text: "24", correct: false },
            { text: "60", correct: true },
            { text: "100", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लगभग 30 गज लंबी इस सोने की जंजीर में 60 घंटियाँ लगी थीं ताकि उनकी आवाज दूर तक सुनाई दे।"
    },
    {
        question: "प्रश्न 39. 'यूरोपीय चित्रकला' का प्रभाव मुगल कला की किस विशेषता में दिखता है?",
        answers: shuffle([
            { text: "चटक रंगों का प्रयोग", correct: false },
            { text: "सपाट चित्रण", correct: false },
            { text: "छाया और प्रकाश (गहराई) का प्रयोग", correct: true },
            { text: "अमूर्त डिजाइन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूरोपीय चित्रों के प्रभाव से मुगल चित्रकारों ने अपने चित्रों में गहराई और त्रि-आयामी (3D) प्रभाव दिखाने के लिए छाया और प्रकाश का उपयोग करना सीखा।"
    },
    {
        question: "प्रश्न 40. जहाँगीर के काल में कौनसा बंदरगाह 'बाबुल का मक्का' (मक्का का द्वार) कहलाता था?",
        answers: shuffle([
            { text: "खंभात", correct: false },
            { text: "भड़ौच", correct: false },
            { text: "सूरत", correct: true },
            { text: "गोवा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूरत पश्चिमी तट का सबसे प्रमुख बंदरगाह था और यहीं से हज यात्री मक्का के लिए जहाज पकड़ते थे, इसलिए इसे 'मक्का का द्वार' कहा जाता था।"
    },
    {
        question: "प्रश्न 41. जहाँगीर की मृत्यु के बाद आसफ खाँ ने किसे हराया और मार डाला?",
        answers: shuffle([
            { text: "परवेज़", correct: false },
            { text: "दावर बख्श", correct: false },
            { text: "शहरयार", correct: true },
            { text: "होशांग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जहाँगीर की मृत्यु का समाचार मिलते ही आसफ खाँ ने लाहौर में शहरयार को युद्ध में पराजित किया, उसे अंधा कर दिया और बाद में शाहजहाँ के आदेश पर उसकी हत्या कर दी गई।"
    },
    {
        question: "प्रश्न 42. जहाँगीर के शासनकाल में 'चौकी' शब्द का प्रयोग किसके लिए होता था?",
        answers: shuffle([
            { text: "पुलिस स्टेशन", correct: false },
            { text: "कर वसूली केंद्र", correct: false },
            { text: "चित्रकारों की कार्यशाला", correct: true },
            { text: "डाक चौकी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुगल काल में, विशेषकर जहाँगीर के समय में, चित्रशाला या स्टूडियो को 'चौकी' कहा जाता था।"
    },
    {
        question: "प्रश्न 43. जहाँगीर के दरबार में पादरियों ने उसे कौनसा वाद्ययंत्र भेंट किया था?",
        answers: shuffle([
            { text: "वायलिन", correct: false },
            { text: "पियानो", correct: false },
            { text: "हार्पसीकोर्ड (एक प्रकार का पियानो)", correct: true },
            { text: "गिटार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जेसुइट पादरियों ने जहाँगीर को एक हार्पसीकोर्ड भेंट किया था, जिसे देखकर वह बहुत आश्चर्यचकित हुआ।"
    },
    {
        question: "प्रश्न 44. 'पच्चीकारी' (Pietra Dura) का संबंध किससे है?",
        answers: shuffle([
            { text: "चित्रकला की एक शैली", correct: false },
            { text: "संगमरमर में रत्नों की जड़ावट", correct: true },
            { text: "एक प्रकार की बुनाई", correct: false },
            { text: "संगीत की एक धुन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक सजावटी कला है जिसमें कीमती और अर्ध-कीमती पत्थरों को काटकर संगमरमर में बने खांचों में जड़ा जाता है।"
    },
    {
        question: "प्रश्न 45. जहाँगीर ने किसके बारे में कहा था कि \"मैं बता सकता हूँ कि एक पेंटिंग में किस चित्रकार ने भौंह बनाई है और किसने आँख\"?",
        answers: shuffle([
            { text: "अपनी चित्रकला की समझ के बारे में", correct: true },
            { text: "अबुल हसन की कला के बारे में", correct: false },
            { text: "उस्ताद मंसूर की कला के बारे में", correct: false },
            { text: "यूरोपीय चित्रकला के बारे में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह कथन जहाँगीर के चित्रकला के ज्ञान और उसकी पारखी नजर को दर्शाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उसका दावा था कि यदि एक ही चित्र को कई कलाकारों ने मिलकर बनाया हो, तो वह बता सकता है कि कौन सा हिस्सा किस कलाकार ने बनाया है।"
    },
    {
        question: "प्रश्न 46. जहाँगीर ने किस प्रथा को समाप्त करने का आदेश दिया जिसमें अधिकारियों की मृत्यु के बाद उनकी संपत्ति जब्त कर ली जाती थी?",
        answers: shuffle([
            { text: "मनसबदारी", correct: false },
            { text: "इजारा", correct: false },
            { text: "जब्ती", correct: false },
            { text: "एस्चीट (Escheat) या जब्ती", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जहाँगीर ने आदेश दिया कि किसी अमीर की मृत्यु के बाद उसकी संपत्ति उसके उत्तराधिकारियों को दी जाएगी, राज्य उसे जब्त नहीं करेगा।"
    },
    {
        question: "प्रश्न 47. खुसरौ का मकबरा कहाँ स्थित है?",
        answers: shuffle([
            { text: "दिल्ली", correct: false },
            { text: "आगरा", correct: false },
            { text: "लाहौर", correct: false },
            { text: "इलाहाबाद (प्रयागराज)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खुसरौ को उसकी माँ शाह बेगम के पास इलाहाबाद के एक बाग में दफनाया गया, जिसे आज 'खुसरौ बाग' के नाम से जाना जाता है।"
    },
    {
        question: "प्रश्न 48. जहाँगीर ने किस राजपूत सरदार को दक्कन में 5000 का मनसब प्रदान किया?",
        answers: shuffle([
            { text: "राजा मान सिंह", correct: false },
            { text: "राजा जय सिंह", correct: false },
            { text: "राजा गज सिंह", correct: true },
            { text: "राय सिंह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मारवाड़ के राजा गज सिंह ने दक्कन में मुगलों की बहुत सेवा की, जिससे प्रसन्न होकर जहाँगीर ने उन्हें एक उच्च मनसब प्रदान किया।"
    },
    {
        question: "प्रश्न 49. जहाँगीर ने किस किले का नाम बदलकर 'किला-ए-नूरगढ़' रखा था?",
        answers: shuffle([
            { text: "कांगड़ा", correct: true },
            { text: "चुनार", correct: false },
            { text: "रणथंभौर", correct: false },
            { text: "ग्वालियर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कांगड़ा की महत्वपूर्ण विजय के उपलक्ष्य में, जहाँगीर ने इस किले का नाम 'किला-ए-नूरगढ़' रख दिया।"
    },
    {
        question: "प्रश्न 50. जहाँगीर ने अपने किस चित्रकार की प्रशंसा करते हुए कहा था कि \"वह मेरा सानी (मुझ जैसा) नहीं रखता\"?",
        answers: shuffle([
            { text: "उस्ताद मंसूर", correct: false },
            { text: "बिशन दास", correct: false },
            { text: "मनोहर", correct: false },
            { text: "अबुल हसन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जहाँगीर, अबुल हसन की चित्रकला, विशेषकर व्यक्ति-चित्रण की कला से इतना प्रभावित था कि उसने उसकी तुलना स्वयं से की।"
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