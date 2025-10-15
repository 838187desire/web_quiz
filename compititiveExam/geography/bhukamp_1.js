const questions = [
    {
        topHeading: "भूकंप पर आधारित 50 MCQs part_1 (quiz_no.)"
    },
    {
        question: "पृथ्वी की सतह पर होने वाले आकस्मिक कंपन को क्या कहते हैं?",
        answers: shuffle([
            { text: "ज्वालामुखी", correct: false },
            { text: "सुनामी", correct: false },
            { text: "भूकंप", correct: true },
            { text: "भूस्खलन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विवर्तनिक हलचलों या अन्य कारणों से जब पृथ्वी की सतह अचानक काँपने लगती है, तो इस घटना को भूकंप कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी के भीतर वह स्थान जहाँ से भूकंपीय ऊर्जा उत्पन्न होती है, क्या कहलाता है?",
        answers: shuffle([
            { text: "अधिकेंद्र (Epicenter)", correct: false },
            { text: "उद्गम केंद्र (Focus/Hypocenter)", correct: true },
            { text: "भ्रंश रेखा (Fault Line)", correct: false },
            { text: "प्लेट सीमा (Plate Boundary)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उद्गम केंद्र या अवकेंद्र पृथ्वी के अंदर का वह बिंदु है जहाँ चट्टानों में तनाव मुक्त होने से ऊर्जा निकलती है और भूकंप की शुरुआत होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "उद्गम केंद्र के ठीक ऊपर पृथ्वी की सतह पर स्थित बिंदु को क्या कहा जाता है?",
        answers: shuffle([
            { text: "अवकेंद्र (Hypocenter)", correct: false },
            { text: "अधिकेंद्र (Epicenter)", correct: true },
            { text: "भूकंपीय क्षेत्र (Seismic Zone)", correct: false },
            { text: "हॉटस्पॉट (Hotspot)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिकेंद्र सतह पर वह स्थान है जहाँ भूकंपीय तरंगें सबसे पहले पहुँचती हैं और जहाँ सामान्यतः सबसे अधिक क्षति होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "भूकंप आने का मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "पृथ्वी का घूर्णन", correct: false },
            { text: "चंद्रमा का गुरुत्वाकर्षण", correct: false },
            { text: "प्लेट विवर्तनिकी (Plate Tectonics)", correct: true },
            { text: "मौसमी परिवर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिकांश भूकंप पृथ्वी की विवर्तनिक प्लेटों के किनारों पर होने वाली गति, टकराव या खिसकाव के कारण उत्पन्न होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "कौन सी भूकंपीय तरंगें सबसे तीव्र गति से चलती हैं?",
        answers: shuffle([
            { text: "P-तरंगें", correct: true },
            { text: "S-तरंगें", correct: false },
            { text: "L-तरंगें", correct: false },
            { text: "R-तरंगें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> P-तरंगें (प्राथमिक तरंगें) सबसे तेज होती हैं और किसी भी भूकंपमापी यंत्र पर सबसे पहले दर्ज की जाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "निम्नलिखित में से कौन सी तरंग 'अनुदैर्ध्य तरंग' (Longitudinal Wave) का उदाहरण है?",
        answers: shuffle([
            { text: "P-तरंग", correct: true },
            { text: "S-तरंग", correct: false },
            { text: "L-तरंग", correct: false },
            { text: "प्रकाश तरंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> P-तरंगों में कणों का कंपन तरंग की दिशा के समानांतर आगे-पीछे होता है, ठीक ध्वनि तरंगों की तरह।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "कौन सी भूकंपीय तरंगें केवल ठोस माध्यम में ही यात्रा कर सकती हैं?",
        answers: shuffle([
            { text: "P-तरंगें", correct: false },
            { text: "S-तरंगें", correct: true },
            { text: "धरातलीय तरंगें", correct: false },
            { text: "सुनामी तरंगें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> S-तरंगें (द्वितीयक तरंगें) अनुप्रस्थ तरंगें हैं और ये तरल या गैसीय माध्यम से नहीं गुजर सकतीं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "S-तरंगों का तरल माध्यम से न गुजर पाना पृथ्वी की किस आंतरिक परत की पुष्टि करता है?",
        answers: shuffle([
            { text: "भूपर्पटी के ठोस होने की", correct: false },
            { text: "मैंटल के प्लास्टिक होने की", correct: false },
            { text: "बाह्य क्रोड के तरल होने की", correct: true },
            { text: "आंतरिक क्रोड के ठोस होने की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> S-तरंगों का छाया क्षेत्र यह प्रमाणित करता है कि पृथ्वी का बाह्य क्रोड तरल अवस्था में है, जिसे वे पार नहीं कर पातीं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "भूकंप की तीव्रता मापने वाले यंत्र को क्या कहते हैं?",
        answers: shuffle([
            { text: "बैरोमीटर", correct: false },
            { text: "थर्मामीटर", correct: false },
            { text: "सिस्मोग्राफ (भूकंपलेखी)", correct: true },
            { text: "लैक्टोमीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिस्मोग्राफ या भूकंपलेखी वह उपकरण है जो भूकंप के दौरान जमीन के कंपन को रिकॉर्ड करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "भूकंप द्वारा उत्सर्जित ऊर्जा की मात्रा को मापने के लिए किस पैमाने का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "मरकेली पैमाना", correct: false },
            { text: "रिक्टर पैमाना", correct: true },
            { text: "फैरेनहाइट पैमाना", correct: false },
            { text: "सेल्सियस पैमाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रिक्टर पैमाना भूकंप के परिमाण (Magnitude) को मापता है, जो भूकंप के स्रोत पर जारी हुई कुल ऊर्जा पर आधारित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "रिक्टर पैमाने पर प्रत्येक अगली इकाई पिछली इकाई की तुलना में कितनी अधिक तरंग आयाम दर्शाती है?",
        answers: shuffle([
            { text: "2 गुना", correct: false },
            { text: "10 गुना", correct: true },
            { text: "50 गुना", correct: false },
            { text: "100 गुना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक लघुगणकीय (logarithmic) पैमाना है, जहाँ परिमाण में 1 अंक की वृद्धि का अर्थ तरंगों के आयाम में 10 गुना वृद्धि है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "भूकंप के कारण होने वाले प्रभावों और विनाश को मापने के लिए किस पैमाने का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "रिक्टर पैमाना", correct: false },
            { text: "आघूर्ण परिमाण पैमाना", correct: false },
            { text: "मरकेली पैमाना", correct: true },
            { text: " कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मरकेली पैमाना भूकंप की तीव्रता (Intensity) को मापता है, जो लोगों, इमारतों और पर्यावरण पर पड़े प्रभावों के अवलोकन पर आधारित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मरकेली पैमाने में कितने स्तर होते हैं?",
        answers: shuffle([
            { text: "1 से 10", correct: false },
            { text: "1 से 5", correct: false },
            { text: "1 से 12 (रोमन अंकों में)", correct: true },
            { text: "1 से 7", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह पैमाना I (अगोचर) से लेकर XII (पूर्ण विनाश) तक के 12 स्तरों में भूकंप की तीव्रता का वर्णन करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी पर सबसे अधिक विनाशकारी भूकंपीय तरंगें कौन सी होती हैं?",
        answers: shuffle([
            { text: "P-तरंगें", correct: false },
            { text: "S-तरंगें", correct: false },
            { text: "धरातलीय तरंगें (L-तरंगें)", correct: true },
            { text: "कायिक तरंगें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धरातलीय तरंगें पृथ्वी की सतह पर चलती हैं, इनकी गति धीमी होती है लेकिन आयाम बहुत बड़ा होता है, जिसके कारण ये सबसे अधिक तबाही मचाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'प्रत्यास्थ पुनश्चलन सिद्धांत' (Elastic Rebound Theory) का संबंध किससे है?",
        answers: shuffle([
            { text: "ज्वालामुखी की उत्पत्ति", correct: false },
            { text: "भूकंप की उत्पत्ति", correct: true },
            { text: "सुनामी की उत्पत्ति", correct: false },
            { text: "पर्वत निर्माण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सिद्धांत बताता है कि चट्टानें तनाव के कारण धीरे-धीरे मुड़ती हैं और जब तनाव उनकी क्षमता से अधिक हो जाता है, तो वे टूटकर अपनी मूल स्थिति में वापस आती हैं, जिससे भूकंपीय ऊर्जा निकलती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "समान भूकंपीय तीव्रता वाले स्थानों को मिलाने वाली काल्पनिक रेखा क्या कहलाती है?",
        answers: shuffle([
            { text: "समदाब रेखा (Isobar)", correct: false },
            { text: "समताप रेखा (Isotherm)", correct: false },
            { text: "समभूकंपीय रेखा (Isoseismal line)", correct: true },
            { text: "समलवण रेखा (Isohaline)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भूकंप के बाद बनाए गए मानचित्र पर, ये रेखाएँ उन सभी बिंदुओं को जोड़ती हैं जहाँ मरकेली पैमाने पर समान तीव्रता महसूस की गई।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "विश्व के लगभग 63% भूकंप किस पेटी में आते हैं?",
        answers: shuffle([
            { text: "मध्य-अटलांटिक पेटी", correct: false },
            { text: "मध्य-महाद्वीपीय पेटी", correct: false },
            { text: "परि-प्रशांत महासागरीय पेटी", correct: true },
            { text: "हिंद महासागरीय पेटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस पेटी को 'अग्नि वलय' (Ring of Fire) भी कहा जाता है और यह प्रशांत महासागर के चारों ओर स्थित है जहाँ विवर्तनिक प्लेटों की सीमाएँ मिलती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "समुद्र के नीचे भूकंप आने से उत्पन्न होने वाली विशाल समुद्री लहरों को क्या कहते हैं?",
        answers: shuffle([
            { text: "ज्वार-भाटा", correct: false },
            { text: "धारा", correct: false },
            { text: "सुनामी", correct: true },
            { text: "विक्षोभ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब समुद्र तल पर भूकंप, भूस्खलन या ज्वालामुखी विस्फोट के कारण अचानक विस्थापन होता है, तो पानी का एक बड़ा स्तंभ विस्थापित होता है जो सुनामी लहरों को जन्म देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "भारत को कितने भूकंपीय जोखिम अंचलों (Seismic Zones) में विभाजित किया गया है?",
        answers: shuffle([
            { text: "तीन", correct: false },
            { text: "चार", correct: true },
            { text: "पाँच", correct: false },
            { text: "छह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय मानक ब्यूरो के अनुसार, भारत को चार भूकंपीय जोनों में बांटा गया है: जोन-II (न्यूनतम जोखिम), जोन-III (मध्यम जोखिम), जोन-IV (उच्च जोखिम), और जोन-V (अत्यधिक जोखिम)।<br><br><i class='fa-solid fa-angles-right icon'></i> (पहले जोन-I भी था, जिसे अब समाप्त कर दिया गया है)।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "भारत का कौन सा क्षेत्र भूकंपीय दृष्टि से सबसे अधिक सक्रिय है और जोन-V के अंतर्गत आता है?",
        answers: shuffle([
            { text: "दक्कन का पठार", correct: false },
            { text: "हिमालयी क्षेत्र और पूर्वोत्तर भारत", correct: true },
            { text: "तटीय मैदान", correct: false },
            { text: "थार मरुस्थल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय प्लेट के यूरेशियन प्लेट से टकराने के कारण हिमालय क्षेत्र और पूर्वोत्तर के राज्य भूकंप के लिए अत्यधिक संवेदनशील हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मुख्य भूकंप से पहले आने वाले छोटे भूकंपों को क्या कहा जाता है?",
        answers: shuffle([
            { text: "पश्च-कंपन (Aftershocks)", correct: false },
            { text: "पूर्व-कंपन (Foreshocks)", correct: true },
            { text: "सूक्ष्म भूकंप (Microquakes)", correct: false },
            { text: "कृत्रिम भूकंप (Artificial earthquakes)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कभी-कभी एक बड़े भूकंप से पहले उसी क्षेत्र में छोटे-छोटे झटके महसूस किए जाते हैं, जिन्हें पूर्व-कंपन कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मुख्य भूकंप के बाद उसी क्षेत्र में आने वाले छोटे-छोटे भूकंप क्या कहलाते हैं?",
        answers: shuffle([
            { text: "पश्च-कंपन (Aftershocks)", correct: true },
            { text: "पूर्व-कंपन (Foreshocks)", correct: false },
            { text: "भूकंप झुंड (Earthquake Swarm)", correct: false },
            { text: "प्रेरित भूकंप (Induced Seismicity)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुख्य भूकंप के बाद भ्रंश रेखा पर तनाव के समायोजन के कारण ये झटके आते हैं, जो दिनों, हफ्तों या महीनों तक जारी रह सकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'P-तरंग छाया क्षेत्र' (P-wave Shadow Zone) का विस्तार भूकंप केंद्र से कितनी कोणीय दूरी पर होता है?",
        answers: shuffle([
            { text: "105° से 145°", correct: true },
            { text: "90° से 120°", correct: false },
            { text: "145° से 180°", correct: false },
            { text: "105° से परे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी के तरल बाह्य क्रोड से गुजरते समय P-तरंगों के अपवर्तन के कारण, भूकंप केंद्र से 105° और 145° के बीच एक क्षेत्र बनता है जहाँ ये तरंगें सीधे नहीं पहुँचतीं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'S-तरंग छाया क्षेत्र' (S-wave Shadow Zone) का विस्तार कितना है?",
        answers: shuffle([
            { text: "90° से परे", correct: false },
            { text: "105° से परे", correct: true },
            { text: "120° से परे", correct: false },
            { text: "145° से परे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि S-तरंगें तरल बाह्य क्रोड को पार नहीं कर सकतीं, इसलिए 105° से आगे के पूरे क्षेत्र में ये तरंगें दर्ज नहीं की जातीं, जो एक बहुत बड़ा छाया क्षेत्र बनाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "भूकंपीय तरंगों के अध्ययन को क्या कहा जाता है?",
        answers: shuffle([
            { text: "भूगर्भशास्त्र (Geology)", correct: false },
            { text: "भूकंप विज्ञान (Seismology)", correct: true },
            { text: "जलवायु विज्ञान (Climatology)", correct: false },
            { text: "समुद्र विज्ञान (Oceanography)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भूकंप विज्ञान वह वैज्ञानिक शाखा है जो भूकंपों और उनके द्वारा उत्पन्न होने वाली भूकंपीय तरंगों का अध्ययन करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "2001 में भुज (गुजरात) में आया विनाशकारी भूकंप किस प्रकार का भूकंप था?",
        answers: shuffle([
            { text: "ज्वालामुखी भूकंप", correct: false },
            { text: "विवर्तनिक भूकंप", correct: true },
            { text: "नियात भूकंप", correct: false },
            { text: "कृत्रिम भूकंप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह भूकंप भारतीय प्लेट के भीतर भ्रंशों पर तनाव के कारण उत्पन्न हुआ था, जो एक विवर्तनिक भूकंप का उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बड़े बांधों के निर्माण से जलाशयों के पास होने वाली भूकंपीय गतिविधि को क्या कहते हैं?",
        answers: shuffle([
            { text: "विवर्तनिक भूकंप", correct: false },
            { text: "प्रेरित भूकंपीयता (Induced Seismicity)", correct: true },
            { text: "ज्वालामुखी भूकंप", correct: false },
            { text: "पातालीय भूकंप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जलाशय में भारी मात्रा में पानी के भार से नीचे की चट्टानों पर दबाव बढ़ता है, जिससे स्थानीय भ्रंश सक्रिय हो सकते हैं और भूकंप आ सकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "भूकंप के दौरान जल-संतृप्त रेतीली मिट्टी के अपनी ताकत खोकर तरल जैसा व्यवहार करने की घटना क्या कहलाती है?",
        answers: shuffle([
            { text: "भूस्खलन", correct: false },
            { text: "द्रवीकरण (Liquefaction)", correct: true },
            { text: "अवतलन (Subsidence)", correct: false },
            { text: "अपरदन (Erosion)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तीव्र कंपन के कारण, पानी के कण मिट्टी के कणों को अलग कर देते हैं, जिससे जमीन अपनी भार वहन क्षमता खो देती है और इमारतें धँस जाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किन प्लेट सीमाओं पर सबसे शक्तिशाली और गहरे भूकंप आते हैं?",
        answers: shuffle([
            { text: "अपसारी सीमा (Divergent)", correct: false },
            { text: "अभिसारी सीमा (Convergent)", correct: true },
            { text: "संरक्षी सीमा (Transform)", correct: false },
            { text: "किसी भी सीमा पर नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अभिसारी सीमाओं पर, एक प्लेट दूसरी के नीचे क्षेपित (subduct) होती है, जिससे अत्यधिक तनाव उत्पन्न होता है और शक्तिशाली, गहरे भूकंप आते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'रिंग ऑफ फायर' किस महासागर से संबंधित है?",
        answers: shuffle([
            { text: "अटलांटिक महासागर", correct: false },
            { text: "हिंद महासागर", correct: false },
            { text: "आर्कटिक महासागर", correct: false },
            { text: "प्रशांत महासागर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रिंग ऑफ फायर' या 'अग्नि वलय' प्रशांत महासागर के चारों ओर स्थित ज्वालामुखियों और भूकंपीय गतिविधियों की एक श्रृंखला है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "उन स्थानों को जोड़ने वाली रेखा जहाँ भूकंपीय तरंगें एक ही समय पर पहुँचती हैं, क्या कहलाती है?",
        answers: shuffle([
            { text: "समभूकंपीय रेखा (Isoseismal line)", correct: false },
            { text: "सहभूकंपीय रेखा (Homoseismal line)", correct: true },
            { text: "समदाब रेखा (Isobar)", correct: false },
            { text: "समोच्च रेखा (Contour line)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह रेखा भूकंप के केंद्र से समान दूरी पर स्थित होती है, इसलिए तरंगें इन सभी स्थानों पर एक साथ पहुँचती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "भूकंप की भविष्यवाणी के संदर्भ में, वायुमंडल में किस अक्रिय गैस की मात्रा में वृद्धि एक संभावित संकेतक मानी जाती है?",
        answers: shuffle([
            { text: "हीलियम", correct: false },
            { text: "नियॉन", correct: false },
            { text: "आर्गन", correct: false },
            { text: "रेडॉन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऐसा माना जाता है कि भूकंप से पहले चट्टानों में सूक्ष्म दरारें बनने से उनमें फंसी रेडॉन गैस वायुमंडल में निकल सकती है, जिससे इसकी सांद्रता बढ़ जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वर्तमान में भूकंप के परिमाण को मापने के लिए सबसे सटीक और व्यापक रूप से उपयोग किया जाने वाला पैमाना कौन सा है?",
        answers: shuffle([
            { text: "रिक्टर पैमाना", correct: false },
            { text: "मरकेली पैमाना", correct: false },
            { text: "आघूर्ण परिमाण पैमाना (Moment Magnitude Scale)", correct: true },
            { text: "रॉसी-फोरेल पैमाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह पैमाना भ्रंश के आकार, चट्टानों की कठोरता और विस्थापन की मात्रा पर आधारित है, जो विशेष रूप से बड़े भूकंपों के लिए अधिक सटीक ऊर्जा माप प्रदान करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "L-तरंगों की खोज किस वैज्ञानिक ने की थी?",
        answers: shuffle([
            { text: "ए. ई. एच. लव", correct: true },
            { text: "लॉर्ड रैले", correct: false },
            { text: "चार्ल्स रिक्टर", correct: false },
            { text: "गुइसेप मरकेली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्रिटिश गणितज्ञ ए. ई. एच. लव ने इन धरातलीय तरंगों का वर्णन किया था, जिनमें कणों का कंपन क्षैतिज रूप से, तरंग की दिशा के लंबवत होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस प्रकार की भूकंपीय तरंगों में कणों का कंपन ऊपर-नीचे और आगे-पीछे एक दीर्घवृत्तीय गति में होता है?",
        answers: shuffle([
            { text: "P-तरंगें", correct: false },
            { text: "S-तरंगें", correct: false },
            { text: "लव तरंगें", correct: false },
            { text: "रैले तरंगें", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रैले तरंगें (R-waves) पानी की सतह पर लहरों के समान गति करती हैं, जो जमीन को ऊपर-नीचे और अगल-बगल दोनों तरह से कंपित करती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "भूकंपरोधी इमारतों का डिजाइन बनाते समय मुख्य उद्देश्य क्या होता है?",
        answers: shuffle([
            { text: "भूकंप को रोकना", correct: false },
            { text: "इमारत को कंपन से पूरी तरह बचाना", correct: false },
            { text: "इमारत को ढहने से बचाना ताकि लोगों की जान बच सके", correct: true },
            { text: "भूकंप के दौरान इमारत को कठोर बनाए रखना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डिजाइन का लक्ष्य इमारत को इतना लचीला बनाना है कि वह बिना ढहे भूकंपीय ऊर्जा को अवशोषित कर सके, जिससे लोगों को बाहर निकलने का समय मिल जाए।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "दिल्ली किस भूकंपीय जोन में स्थित है?",
        answers: shuffle([
            { text: "जोन-II", correct: false },
            { text: "जोन-III", correct: false },
            { text: "जोन-IV", correct: true },
            { text: "जोन-V", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत की राजधानी दिल्ली उच्च जोखिम वाले भूकंपीय जोन-IV में आती है, जिसका अर्थ है कि यहाँ गंभीर क्षति पहुँचाने वाले भूकंप की संभावना है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पातालीय भूकंप (Plutonic Earthquake) का उद्गम केंद्र कितनी गहराई पर होता है?",
        answers: shuffle([
            { text: "0-50 किमी", correct: false },
            { text: "50-250 किमी", correct: false },
            { text: "300-700 किमी", correct: true },
            { text: "700 किमी से अधिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये बहुत गहरे उद्गम केंद्र वाले भूकंप होते हैं, जो सामान्यतः क्षेपण क्षेत्रों (subduction zones) में पाए जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'भूकंप झुंड' (Earthquake Swarm) क्या है?",
        answers: shuffle([
            { text: "एक बड़ा भूकंप और उसके बाद के पश्च-कंपन", correct: false },
            { text: "एक ही क्षेत्र में बिना किसी मुख्य झटके के लंबे समय तक आने वाले कई छोटे भूकंप", correct: true },
            { text: "भूकंप से पहले जानवरों का असामान्य व्यवहार", correct: false },
            { text: "एक ही भ्रंश पर बार-बार आने वाले भूकंप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भूकंप झुंड में कोई एक भूकंप स्पष्ट रूप से मुख्य झटका नहीं होता, बल्कि कई समान आकार के भूकंप कुछ दिनों या हफ्तों तक आते रहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सुनामी चेतावनी प्रणाली मुख्य रूप से किस पर निर्भर करती है?",
        answers: shuffle([
            { text: "समुद्र की सतह के तापमान पर", correct: false },
            { text: "मौसम उपग्रहों पर", correct: false },
            { text: "समुद्र तल पर दबाव सेंसर और भूकंपीय डेटा पर", correct: true },
            { text: "ज्वार-भाटा की ऊँचाई पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह प्रणाली भूकंप का पता लगाने के लिए सिस्मोमीटर और पानी के स्तंभ में परिवर्तन का पता लगाने के लिए गहरे समुद्र में लगे दबाव सेंसर (DART buoys) का उपयोग करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "रिक्टर पैमाने पर 7 परिमाण का भूकंप, 5 परिमाण के भूकंप से कितनी अधिक ऊर्जा उत्सर्जित करेगा?",
        answers: shuffle([
            { text: "100 गुना", correct: false },
            { text: "200 गुना", correct: false },
            { text: "लगभग 1000 गुना", correct: true },
            { text: "64 गुना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परिमाण में 1 अंक की वृद्धि ऊर्जा में ~32 गुना वृद्धि के बराबर है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, 2 अंकों की वृद्धि (7-5=2) का अर्थ है 32 x 32 ≈ 1024 गुना अधिक ऊर्जा।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "P-तरंगें और S-तरंगें, दोनों को संयुक्त रूप से क्या कहा जाता है?",
        answers: shuffle([
            { text: "धरातलीय तरंगें (Surface Waves)", correct: false },
            { text: "कायिक तरंगें (Body Waves)", correct: true },
            { text: "सूक्ष्म तरंगें (Microwaves)", correct: false },
            { text: "गुरुत्वीय तरंगें (Gravitational Waves)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन्हें कायिक तरंगें इसलिए कहा जाता है क्योंकि ये पृथ्वी के आंतरिक भाग (body) से होकर गुजरती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "भूकंप के दौरान सबसे सुरक्षित स्थान कौन सा माना जाता है?",
        answers: shuffle([
            { text: "किसी बड़ी इमारत के पास", correct: false },
            { text: "लिफ्ट के अंदर", correct: false },
            { text: "पेड़ों और बिजली के तारों के नीचे", correct: false },
            { text: "खुला मैदान", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खुले मैदान में इमारतों, पेड़ों, या बिजली की लाइनों जैसी गिरने वाली वस्तुओं से चोट लगने का खतरा सबसे कम होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "1993 में लातूर (महाराष्ट्र) में आया भूकंप किस घटना का एक उल्लेखनीय उदाहरण था?",
        answers: shuffle([
            { text: "प्लेट सीमा पर भूकंप", correct: false },
            { text: "ज्वालामुखी भूकंप", correct: false },
            { text: "अंतरा-प्लेट भूकंप (Intra-plate Earthquake)", correct: true },
            { text: "मानव-जनित भूकंप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह भूकंप किसी प्लेट सीमा पर नहीं, बल्कि भारतीय प्लेट के भीतर स्थित एक पुराने भ्रंश के पुनः सक्रिय होने से आया था, जो अपेक्षाकृत दुर्लभ है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "भूकंप के बाद कौन सी माध्यमिक आपदा अक्सर पहाड़ी क्षेत्रों में संचार और राहत कार्यों को बाधित करती है?",
        answers: shuffle([
            { text: "सुनामी", correct: false },
            { text: "आग", correct: false },
            { text: "भूस्खलन", correct: true },
            { text: "बाढ़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भूकंप से प्रेरित भूस्खलन सड़कों, पुलों और संचार लाइनों को नष्ट कर सकते हैं, जिससे प्रभावित क्षेत्रों तक पहुँचना मुश्किल हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "P और S तरंगों के बीच के समय अंतराल का उपयोग क्या निर्धारित करने के लिए किया जाता है?",
        answers: shuffle([
            { text: "भूकंप की गहराई", correct: false },
            { text: "भूकंप का परिमाण", correct: false },
            { text: "भूकंप की तीव्रता", correct: false },
            { text: "भूकंपमापी से अधिकेंद्र की दूरी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> P-तरंगें S-तरंगों से तेज चलती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> उनके आगमन के समय में जितना अधिक अंतर होता है, अधिकेंद्र उतना ही दूर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "भूकंप विज्ञान का जनक किसे माना जाता है?",
        answers: shuffle([
            { text: "चार्ल्स रिक्टर", correct: false },
            { text: "रिचर्ड डिक्सन ओल्डम", correct: true },
            { text: "अल्फ्रेड वेगनर", correct: false },
            { text: "गुटेनबर्ग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रिचर्ड ओल्डम एक आयरिश भूविज्ञानी थे जिन्होंने सबसे पहले P-तरंगों, S-तरंगों और धरातलीय तरंगों के बीच अंतर किया और पृथ्वी के क्रोड के अस्तित्व का प्रमाण दिया।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वह भ्रंश (Fault) क्या है जिसमें एक चट्टानी खंड दूसरे के सापेक्ष नीचे की ओर खिसकता है?",
        answers: shuffle([
            { text: "व्युत्क्रम भ्रंश (Reverse Fault)", correct: false },
            { text: "सामान्य भ्रंश (Normal Fault)", correct: true },
            { text: "नतिलंब सर्पी भ्रंश (Strike-slip Fault)", correct: false },
            { text: "अधिक्षेप (Thrust Fault)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामान्य भ्रंश तनाव बलों (tensional forces) के कारण होता है, जहाँ भूपर्पटी खिंचती या फैलती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वह भ्रंश (Fault) जिसमें एक चट्टानी खंड दूसरे के सापेक्ष ऊपर की ओर चढ़ता है, क्या कहलाता है?",
        answers: shuffle([
            { text: "सामान्य भ्रंश (Normal Fault)", correct: false },
            { text: "व्युत्क्रम भ्रंश (Reverse Fault)", correct: true },
            { text: "नतिलंब सर्पी भ्रंश (Strike-slip Fault)", correct: false },
            { text: "दरार (Fissure)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्युत्क्रम भ्रंश संपीड़न बलों (compressional forces) के कारण होता है, जहाँ भूपर्पटी सिकुड़ती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सैन एंड्रियास भ्रंश (San Andreas Fault) किस प्रकार के भ्रंश का उदाहरण है?",
        answers: shuffle([
            { text: "सामान्य भ्रंश", correct: false },
            { text: "व्युत्क्रम भ्रंश", correct: false },
            { text: "नतिलंब सर्पी भ्रंश (रूपांतर भ्रंश)", correct: true },
            { text: "अधिक्षेप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक रूपांतर भ्रंश (Transform Fault) है जहाँ प्रशांत प्लेट और उत्तरी अमेरिकी प्लेट एक-दूसरे के समानांतर क्षैतिज रूप से खिसकती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
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