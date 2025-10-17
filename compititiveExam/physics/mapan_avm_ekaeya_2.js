const questions = [
  {
    topHeading: " मात्रक और मापन पर आधारित 50 MCQs,part_2 (quiz_no.2)"
  },
  {
    question: "प्रश्न 1. डेसिबल इकाई का प्रयोग किया जाता है:",
    answers: shuffle([
      { text: "प्रकाश की गति के लिए", correct: false },
      { text: "ऊष्मा की तीव्रता के लिए", correct: false },
      { text: "ध्वनि की तीव्रता के लिए", correct: true },
      { text: "रेडियो तरंग की आवृत्ति के लिए", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> डेसिबल (dB) एक लघुगणकीय इकाई है जिसका उपयोग ध्वनि की तीव्रता के स्तर को मापने के लिए किया जाता है।"
  },
  {
    question: "प्रश्न 2. निम्नलिखित में से कौन-सा युग्म सुमेलित नहीं है?",
    answers: shuffle([
      { text: "अश्वशक्ति - शक्ति की इकाई", correct: false },
      { text: "डेसिबल - ध्वनि तीव्रता की इकाई", correct: false },
      { text: "समुद्री मील - नौसंचालन में दूरी की इकाई", correct: false },
      { text: "सेल्सियस - ऊष्मा की इकाई", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेल्सियस तापमान मापने की इकाई है, ऊष्मा की नहीं।<br><br><i class='fa-solid fa-angles-right icon'></i> ऊष्मा (ऊर्जा का एक रूप) की SI इकाई जूल है।"
  },
  {
    question: "प्रश्न 3. कैंडेला (Candela) मात्रक है:",
    answers: shuffle([
      { text: "ज्योति फ्लक्स", correct: false },
      { text: "ज्योति प्रभाव", correct: false },
      { text: "ज्योति दाब", correct: false },
      { text: "ज्योति तीव्रता", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैंडेला (cd) ज्योति तीव्रता (Luminous intensity) की SI मूल इकाई है।"
  },
  {
    question: "प्रश्न 4. टेस्ला इकाई किस क्षेत्र से संबंधित है?",
    answers: shuffle([
      { text: "चुंबकीय क्षेत्र से", correct: true },
      { text: "विद्युत क्षेत्र से", correct: false },
      { text: "गुरुत्वाकर्षण क्षेत्र से", correct: false },
      { text: "ऊष्मा के क्षेत्र से", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> टेस्ला (T) चुंबकीय क्षेत्र की तीव्रता (या चुंबकीय फ्लक्स घनत्व) की SI इकाई है।"
  },
  {
    question: "प्रश्न 5. गुप्त ऊष्मा का विमीय सूत्र है:",
    answers: shuffle([
      { text: "[ML2T−2]", correct: false },
      { text: "[M0L2T−2]", correct: true },
      { text: "[MLT−2]", correct: false },
      { text: "[M0L2T−1]", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त ऊष्मा (L) = ऊष्मा (Q) / द्रव्यमान (m)।<br><br><i class='fa-solid fa-angles-right icon'></i> ऊष्मा एक प्रकार की ऊर्जा है।<br><br><i class='fa-solid fa-angles-right icon'></i> तो, [L]=[ML2T−2]/[M]=[M0L2T−2] होता है।"
  },
  {
    question: "प्रश्न 6. निम्नलिखित में से कौन सी राशि विमाहीन है?",
    answers: shuffle([
      { text: "कोण", correct: false },
      { text: "विकृति", correct: false },
      { text: "आपेक्षिक घनत्व", correct: false },
      { text: "ये सभी", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोण (चाप/त्रिज्या), विकृति (लंबाई में परिवर्तन/मूल लंबाई), और आपेक्षिक घनत्व (वस्तु का घनत्व/पानी का घनत्व) ये सभी समान राशियों के अनुपात हैं, इसलिए ये विमाहीन हैं।"
  },
  {
    question: "प्रश्न 7. डायोप्टर किसकी इकाई है?",
    answers: shuffle([
      { text: "लेंस की क्षमता की", correct: true },
      { text: "लेंस की फोकस दूरी की", correct: false },
      { text: "प्रकाश की तीव्रता की", correct: false },
      { text: "ध्वनि की तीव्रता की", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> डायोप्टर लेंस की प्रकाशीय शक्ति (क्षमता) की इकाई है, जो मीटर में मापी गई फोकस दूरी के व्युत्क्रम के बराबर होती है।"
  },
  {
    question: "प्रश्न 8. पास्कल इकाई है:",
    answers: shuffle([
      { text: "आर्द्रता की", correct: false },
      { text: "दाब की", correct: true },
      { text: "वर्षा की", correct: false },
      { text: "तापमान की", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> पास्कल (Pa) दाब की SI इकाई है, जो एक न्यूटन प्रति वर्ग मीटर (N/m2) के बराबर होती है।"
  },
  {
    question: "प्रश्न 9. FPS (फुट-पाउंड-सेकंड) पद्धति में द्रव्यमान का मात्रक क्या है?",
    answers: shuffle([
      { text: "किलोग्राम", correct: false },
      { text: "पाउंड", correct: true },
      { text: "ग्राम", correct: false },
      { text: "स्लग", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> FPS पद्धति में, लंबाई का मात्रक फुट, द्रव्यमान का पाउंड और समय का मात्रक सेकंड होता है।"
  },
  {
    question: "प्रश्न 10. रॉकेट की कार्य प्रणाली किस सिद्धांत पर आधारित होती है?",
    answers: shuffle([
      { text: "न्यूटन का प्रथम नियम", correct: false },
      { text: "न्यूटन का द्वितीय नियम", correct: false },
      { text: "न्यूटन का तृतीय नियम", correct: true },
      { text: "आर्कमिडीज का सिद्धांत", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> रॉकेट का प्रणोदन न्यूटन के गति के तीसरे नियम (क्रिया-प्रतिक्रिया) पर आधारित है।<br><br><i class='fa-solid fa-angles-right icon'></i> गर्म गैसों को पीछे की ओर धकेलने की क्रिया रॉकेट को आगे की ओर धकेलने की प्रतिक्रिया उत्पन्न करती है।"
  },
  {
    question: "प्रश्न 11. 'बार' किसकी इकाई है?",
    answers: shuffle([
      { text: "ताप", correct: false },
      { text: "तापक्रम", correct: false },
      { text: "धारा", correct: false },
      { text: "वायुमंडलीय दाब", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> बार दाब की एक इकाई है, जिसका उपयोग मुख्य रूप से वायुमंडलीय दाब को मापने के लिए किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 1 बार = 105 पास्कल।"
  },
  {
    question: "प्रश्न 12. जड़त्व (Inertia) का माप क्या है?",
    answers: shuffle([
      { text: "वेग", correct: false },
      { text: "त्वरण", correct: false },
      { text: "द्रव्यमान", correct: true },
      { text: "भार", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी वस्तु का जड़त्व उसकी विराम या गति की अवस्था में परिवर्तन का विरोध करने की प्रवृत्ति है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रवृत्ति सीधे वस्तु के द्रव्यमान पर निर्भर करती है।"
  },
  {
    question: "प्रश्न 13. स्क्रू गेज का उपयोग क्या मापने के लिए किया जाता है?",
    answers: shuffle([
      { text: "कोण", correct: false },
      { text: "दाब", correct: false },
      { text: "बहुत छोटी लंबाई (तार का व्यास)", correct: true },
      { text: "समय", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्क्रू गेज एक मापक यंत्र है जिसका उपयोग बहुत छोटी लंबाइयों, जैसे किसी पतले तार के व्यास या किसी पतली शीट की मोटाई को सटीकता से मापने के लिए किया जाता है।"
  },
  {
    question: "प्रश्न 14. 'मेगावाट' बिजली के मापने की इकाई है जो:",
    answers: shuffle([
      { text: "उत्पादित की जाती है", correct: true },
      { text: "उपभोग की जाती है", correct: false },
      { text: "बचत की जाती है", correct: false },
      { text: "ट्रांसमिशन में हृास हो जाती है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेगावाट (MW) शक्ति की एक बड़ी इकाई है, जिसका उपयोग आमतौर पर बिजली संयंत्रों द्वारा उत्पादित की जाने वाली विद्युत शक्ति की मात्रा को दर्शाने के लिए किया जाता है।"
  },
  {
    question: "प्रश्न 15. एक অ্যাস্ট্রোনিमिकাল একক (AU) का मान कितना होता है?",
    answers: shuffle([
      { text: "1.496×108 किमी", correct: true },
      { text: "9.46×1012 किमी", correct: false },
      { text: "3.26 प्रकाश वर्ष", correct: false },
      { text: "3×108 मी/से", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक खगोलीय इकाई (AU) पृथ्वी और सूर्य के बीच की औसत दूरी है, जो लगभग 149.6 मिलियन किलोमीटर या 1.496×108 किमी होती है।"
  },
  {
    question: "प्रश्न 16. आवेग का विमीय सूत्र वही है जो ______ का है।",
    answers: shuffle([
      { text: "कार्य", correct: false },
      { text: "संवेग", correct: true },
      { text: "बल आघूर्ण", correct: false },
      { text: "कोणीय संवेग", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवेग (बल × समय) और संवेग (द्रव्यमान × वेग) दोनों का विमीय सूत्र [MLT−1] होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> आवेग-संवेग प्रमेय के अनुसार, किसी वस्तु पर लगाया गया आवेग उसके संवेग में परिवर्तन के बराबर होता है।"
  },
  {
    question: "प्रश्न 17. श्यानता गुणांक (Coefficient of Viscosity) की SI इकाई क्या है?",
    answers: shuffle([
      { text: "पास्कल-सेकंड", correct: true },
      { text: "न्यूटन/मीटर²", correct: false },
      { text: "पास्कल/सेकंड", correct: false },
      { text: "न्यूटन-सेकंड/मीटर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्यानता गुणांक की SI इकाई पास्कल-सेकंड (Pa·s) या किलोग्राम प्रति मीटर-सेकंड (kg/(m·s)) होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे 'प्वाइज्यूल' भी कहते हैं।"
  },
  {
    question: "प्रश्न 18. 'गैलन' सामान्यतः ______ के लिए इस्तेमाल होता है।",
    answers: shuffle([
      { text: "गति के लिए", correct: false },
      { text: "एक कंटेनर के लिए", correct: false },
      { text: "आयतन के माप के रूप में", correct: true },
      { text: "कंटेनरों को बैरल के संदर्भ में व्यक्त करने के लिए", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> गैलन आयतन मापने की एक इकाई है, जिसका उपयोग मुख्य रूप से तरल पदार्थों, जैसे पेट्रोल या पानी, की मात्रा के लिए किया जाता है।"
  },
  {
    question: "प्रश्न 19. एक खगोलीय इकाई में कितने मीटर होते हैं?",
    answers: shuffle([
      { text: "1.496×1011 मीटर", correct: true },
      { text: "1.496×108 मीटर", correct: false },
      { text: "9.46×1015 मीटर", correct: false },
      { text: "3.08×1016 मीटर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1 खगोलीय इकाई (AU) लगभग 1.496×1011 मीटर के बराबर होती है।"
  },
  {
    question: "प्रश्न 20. निम्न में से कौन सी भौतिक राशि की विमाएँ ऊर्जा की विमाओं के समान हैं?",
    answers: shuffle([
      { text: "शक्ति", correct: false },
      { text: "संवेग", correct: false },
      { text: "बल आघूर्ण", correct: true },
      { text: "घनत्व", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊर्जा (कार्य) और बल आघूर्ण दोनों का विमीय सूत्र [ML2T−2] होता है, हालांकि वे अलग-अलग भौतिक राशियाँ हैं।"
  },
  {
    question: "प्रश्न 21. 'एनिमोमीटर' से निम्नलिखित में से किसका मापन किया जाता है?",
    answers: shuffle([
      { text: "पानी के बहाव की गति", correct: false },
      { text: "पानी की गहराई", correct: false },
      { text: "पवन वेग", correct: true },
      { text: "प्रकाश की तीव्रता", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एनिमोमीटर एक उपकरण है जिसका उपयोग हवा की गति या पवन वेग को मापने के लिए किया जाता है।"
  },
  {
    question: "प्रश्न 22. फैराडे (Faraday) किसका मात्रक है?",
    answers: shuffle([
      { text: "विद्युत धारिता", correct: true },
      { text: "विद्युत चालकत्व", correct: false },
      { text: "विद्युत आवेश", correct: false },
      { text: "विद्युत प्रेरण", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> फैराड (Farad) विद्युत धारिता (Capacitance) का SI मात्रक है।<br><br><i class='fa-solid fa-angles-right icon'></i> (ध्यान दें: फैराडे नियतांक एक अलग राशि है)।"
  },
  {
    question: "प्रश्न 23. क्यूरी (Curie) किसकी इकाई का नाम है?",
    answers: shuffle([
      { text: "रेडियोएक्टिव धर्मिता", correct: true },
      { text: "तापक्रम", correct: false },
      { text: "ऊष्मा", correct: false },
      { text: "ऊर्जा", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्यूरी रेडियोधर्मिता को मापने की एक पारंपरिक इकाई है।"
  },
  {
    question: "प्रश्न 24. एक नॉट (Knot) बराबर है:",
    answers: shuffle([
      { text: "1.852 किमी/घंटा", correct: true },
      { text: "1.652 किमी/घंटा", correct: false },
      { text: "1.952 किमी/घंटा", correct: false },
      { text: "2.0 किमी/घंटा", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> नॉट गति की एक इकाई है, जो एक नॉटिकल मील प्रति घंटे के बराबर होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> 1 नॉट ≈ 1.852 किमी/घंटा।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका उपयोग समुद्री जहाजों और विमानों की गति के लिए किया जाता है।"
  },
  {
    question: "प्रश्न 25. 'मोल' (Mole) SI इकाई है:",
    answers: shuffle([
      { text: "द्रव्यमान की", correct: false },
      { text: "पदार्थ की मात्रा की", correct: true },
      { text: "तापमान की", correct: false },
      { text: "ज्योति तीव्रता की", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोल पदार्थ की मात्रा की SI मूल इकाई है।"
  },
  {
    question: "प्रश्न 26. किसी तारे की दूरी मापने के लिए प्रयुक्त यूनिट है:",
    answers: shuffle([
      { text: "कूलॉम", correct: false },
      { text: "नॉटिकल मील", correct: false },
      { text: "ऐम्पियर", correct: false },
      { text: "प्रकाश वर्ष", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> तारों और आकाशगंगाओं जैसी अत्यधिक लंबी दूरियों को मापने के लिए प्रकाश वर्ष का उपयोग किया जाता है।"
  },
  {
    question: "प्रश्न 27. भौतिक मात्रा 'विद्युत चालकता' की इकाई क्या है?",
    answers: shuffle([
      { text: "लक्स", correct: false },
      { text: "ओम", correct: false },
      { text: "फैराड", correct: false },
      { text: "सीमेंस", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत चालकता (Conductance), जो प्रतिरोध का व्युत्क्रम है, की SI इकाई सीमेंस (S) है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे 'महो' भी कहा जाता है।"
  },
  {
    question: "प्रश्न 28. 'मैक संख्या' (Mach number) का प्रयोग वेग के संबंध में किया जाता है:",
    answers: shuffle([
      { text: "ध्वनि के", correct: false },
      { text: "जलयान के", correct: false },
      { text: "वायुयान के", correct: true },
      { text: "अंतरिक्ष यान के", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> मैक संख्या किसी वस्तु के वेग और उस माध्यम में ध्वनि के वेग का अनुपात है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका उपयोग मुख्य रूप से वायुयानों और रॉकेटों की गति का वर्णन करने के लिए किया जाता है।"
  },
  {
    question: "प्रश्न 29. एक लीटर में कितने घन सेंटीमीटर होते हैं?",
    answers: shuffle([
      { text: "10", correct: false },
      { text: "100", correct: false },
      { text: "1000", correct: true },
      { text: "10000", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक लीटर आयतन 1000 घन सेंटीमीटर (cm³) के बराबर होता है।"
  },
  {
    question: "प्रश्न 30. एक पार्सेक में कुल कितने प्रकाश वर्ष होते हैं?",
    answers: shuffle([
      { text: "9.46", correct: false },
      { text: "3.08", correct: false },
      { text: "1.496", correct: false },
      { text: "3.26", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक पार्सेक लगभग 3.26 प्रकाश वर्ष के बराबर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह दूरी की सबसे बड़ी व्यावहारिक इकाइयों में से एक है।"
  },
  {
    question: "प्रश्न 31. एक माइक्रोन में कितने नैनोमीटर होते हैं?",
    answers: shuffle([
      { text: "100", correct: false },
      { text: "1000", correct: true },
      { text: "10", correct: false },
      { text: "1", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1 माइक्रोन = 10−6 मीटर और 1 नैनोमीटर = 10−9 मीटर।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, 1 माइक्रोन / 1 नैनोमीटर = 10−6/10−9=103=1000।"
  },
  {
    question: "प्रश्न 32. 1 kWh (किलोवॉट-घंटा) किसके बराबर है?",
    answers: shuffle([
      { text: "3.6×105 जूल", correct: false },
      { text: "3.6×106 जूल", correct: true },
      { text: "3.6×103 जूल", correct: false },
      { text: "3.6 जूल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1 kWh = 1000 वॉट × 3600 सेकंड = 3,600,000 वॉट-सेकंड = 3.6×106 जूल।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ऊर्जा की व्यावसायिक इकाई है।"
  },
  {
    question: "प्रश्न 33. किसी भौतिक राशि का संख्यात्मक मान:",
    answers: shuffle([
      { text: "उसके मात्रक के व्युत्क्रमानुपाती होता है", correct: true },
      { text: "उसके मात्रक के अनुक्रमानुपाती होता है", correct: false },
      { text: "उसके मात्रक के वर्ग के व्युत्क्रमानुपाती होता है", correct: false },
      { text: "मात्रक पर निर्भर नहीं करता", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी भौतिक राशि का माप (Q) उसके संख्यात्मक मान (n) और मात्रक (u) का गुणनफल होता है (Q = nu)।<br><br><i class='fa-solid fa-angles-right icon'></i> Q स्थिर रहता है, इसलिए n, u के व्युत्क्रमानुपाती होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> बड़ा मात्रक, छोटा संख्यात्मक मान।"
  },
  {
    question: "प्रश्न 34. यदि L तथा R क्रमशः प्रेरकत्व तथा प्रतिरोध हैं, तो L/R की विमा क्या होगी?",
    answers: shuffle([
      { text: "[M0L0T−1]", correct: false },
      { text: "[M0LT0]", correct: false },
      { text: "[M0L0T]", correct: true },
      { text: "विमाहीन", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> L/R को समय नियतांक (Time Constant) कहा जाता है और इसकी विमा समय की विमा के बराबर होती है, अर्थात [T] या [M0L0T]।"
  },
  {
    question: "प्रश्न 35. 'पॉइज' (Poise) किसकी इकाई है?",
    answers: shuffle([
      { text: "पृष्ठ तनाव", correct: false },
      { text: "दाब", correct: false },
      { text: "श्यानता", correct: true },
      { text: "प्रत्यास्थता", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> पॉइज श्यानता गुणांक की CGS इकाई है।<br><br><i class='fa-solid fa-angles-right icon'></i> SI इकाई पास्कल-सेकंड है। 1 पास्कल-सेकंड = 10 पॉइज।"
  },
  {
    question: "प्रश्न 36. हाइग्रोमीटर से क्या मापा जाता है?",
    answers: shuffle([
      { text: "द्रवों का आपेक्षिक घनत्व", correct: false },
      { text: "दूध की शुद्धता", correct: false },
      { text: "वायुमंडल में व्याप्त आर्द्रता", correct: true },
      { text: "समुद्र की गहराई", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाइग्रोमीटर का उपयोग हवा में सापेक्ष आर्द्रता (Relative Humidity) को मापने के लिए किया जाता है।"
  },
  {
    question: "प्रश्न 37. एक फर्मी बराबर है:",
    answers: shuffle([
      { text: "10−10 मी", correct: false },
      { text: "10−12 मी", correct: false },
      { text: "10−15 मी", correct: true },
      { text: "10−18 मी", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक फर्मी (या फेम्टोमीटर) 10−15 मीटर के बराबर होता है, जिसका उपयोग नाभिकीय दूरियों के लिए किया जाता है।"
  },
  {
    question: "प्रश्न 38. लंबाई की न्यूनतम इकाई क्या है?",
    answers: shuffle([
      { text: "माइक्रोन", correct: false },
      { text: "नैनोमीटर", correct: false },
      { text: "एंगस्ट्रॉम", correct: false },
      { text: "फर्मीमीटर", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिए गए विकल्पों में, फर्मीमीटर (10−15 मीटर) लंबाई की सबसे छोटी इकाई है।"
  },
  {
    question: "प्रश्न 39. स्प्रिंग तुला (Spring Balance) का उपयोग क्या मापने में होता है?",
    answers: shuffle([
      { text: "द्रव्यमान", correct: false },
      { text: "भार", correct: true },
      { text: "घनत्व", correct: false },
      { text: "त्वरण", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्प्रिंग तुला किसी वस्तु पर लगने वाले गुरुत्वाकर्षण बल, यानी उसके भार (Weight) को मापता है।"
  },
  {
    question: "प्रश्न 40. 'रिऐक्टर पैमाने' पर क्या मापा जाता है?",
    answers: shuffle([
      { text: "भूकंप की तीव्रता", correct: true },
      { text: "तरल का घनत्व", correct: false },
      { text: "पर्वत की ऊँचाई", correct: false },
      { text: "ध्वनि की प्रबलता", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> रिऐक्टर पैमाना (Richter scale) एक लघुगणकीय पैमाना है जिसका उपयोग भूकंप द्वारा उत्सर्जित ऊर्जा की मात्रा या उसकी तीव्रता को मापने के लिए किया जाता है।"
  },
  {
    question: "प्रश्न 41. एक चंद्रशेखर सीमा (Chandrasekhar Limit) किसके बराबर होती है?",
    answers: shuffle([
      { text: "सूर्य के द्रव्यमान का 1.44 गुना", correct: true },
      { text: "पृथ्वी के द्रव्यमान का 1.44 गुना", correct: false },
      { text: "सूर्य की त्रिज्या का 1.44 गुना", correct: false },
      { text: "पृथ्वी की त्रिज्या का 1.44 गुना", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रशेखर सीमा किसी सफेद बौने तारे का अधिकतम संभव द्रव्यमान है, जो सूर्य के द्रव्यमान का लगभग 1.44 गुना होता है।"
  },
  {
    question: "प्रश्न 42. निम्नलिखित में से किस युग्म की विमाएँ समान नहीं हैं?",
    answers: shuffle([
      { text: "कार्य और बल आघूर्ण", correct: false },
      { text: "आवेग और संवेग", correct: false },
      { text: "भार और बल", correct: false },
      { text: "बल और दाब", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> बल की विमा [MLT−2] है, जबकि दाब (बल/क्षेत्रफल) की विमा [ML−1T−2] है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी युग्मों की विमाएँ समान हैं।"
  },
  {
    question: "प्रश्न 43. 'रॉन्टजन' (Roentgen) किसकी इकाई है?",
    answers: shuffle([
      { text: "रेडियोधर्मिता", correct: false },
      { text: "एक्स-किरण या गामा-किरण की मात्रा (विकिरण उद्भासन)", correct: true },
      { text: "ज्योति तीव्रता", correct: false },
      { text: "चुंबकीय प्रेरण", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> रॉन्टजन विकिरण उद्भासन (Radiation exposure) की एक पारंपरिक इकाई है, जिसका उपयोग एक्स-किरणों और गामा किरणों के लिए किया जाता है।"
  },
  {
    question: "प्रश्न 44. ओडोमीटर क्या मापता है?",
    answers: shuffle([
      { text: "वाहनों की गति", correct: false },
      { text: "वाहनों द्वारा तय की गई दूरी", correct: true },
      { text: "तरल का दबाव", correct: false },
      { text: "ध्वनि की आवृत्ति", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओडोमीटर एक उपकरण है जो किसी वाहन द्वारा चली गई कुल दूरी को मापता है।"
  },
  {
    question: "प्रश्न 45. 'गॉस' (Gauss) किसकी इकाई है?",
    answers: shuffle([
      { text: "चुंबकीय प्रेरण", correct: true },
      { text: "चुंबकीय फ्लक्स", correct: false },
      { text: "विद्युत क्षेत्र", correct: false },
      { text: "विद्युत धारिता", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> गॉस चुंबकीय प्रेरण (या चुंबकीय क्षेत्र) की CGS इकाई है।<br><br><i class='fa-solid fa-angles-right icon'></i> 1 टेस्ला = 104 गॉस।"
  },
  {
    question: "प्रश्न 46. एक शेक (Shake) बराबर है:",
    answers: shuffle([
      { text: "10−8 सेकंड", correct: true },
      { text: "10−9 सेकंड", correct: false },
      { text: "10−6 सेकंड", correct: false },
      { text: "10−12 सेकंड", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> शेक समय की एक बहुत छोटी इकाई है, जो 10−8 सेकंड के बराबर होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका उपयोग नाभिकीय भौतिकी में किया जाता है।"
  },
  {
    question: "प्रश्न 47. सार्वत्रिक गैस नियतांक (R) का SI मात्रक क्या है?",
    answers: shuffle([
      { text: "जूल/केल्विन", correct: false },
      { text: "जूल/मोल", correct: false },
      { text: "जूल/(मोल-केल्विन)", correct: true },
      { text: "वॉट/केल्विन", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> आदर्श गैस समीकरण (PV = nRT) से, R = PV/nT।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका SI मात्रक जूल प्रति मोल-केल्विन (J/(mol•K)) होता है।"
  },
  {
    question: "प्रश्न 48. 'लक्स' (Lux) किसकी इकाई है?",
    answers: shuffle([
      { text: "ज्योति तीव्रता", correct: false },
      { text: "ज्योति फ्लक्स", correct: false },
      { text: "प्रदीप्ति घनत्व (Illuminance)", correct: true },
      { text: "चमक", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> लक्स प्रदीप्ति घनत्व की SI इकाई है, जो प्रति इकाई क्षेत्रफल पर पड़ने वाले ज्योति फ्लक्स को मापती है।<br><br><i class='fa-solid fa-angles-right icon'></i> 1 लक्स = 1 ल्यूमेन/मीटर²।"
  },
  {
    question: "प्रश्न 49. एक स्लग (Slug) किसके बराबर होता है?",
    answers: shuffle([
      { text: "14.59 किग्रा", correct: true },
      { text: "10 किग्रा", correct: false },
      { text: "1.459 किग्रा", correct: false },
      { text: "1 किग्रा", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्लग FPS प्रणाली में द्रव्यमान की एक इकाई है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह वह द्रव्यमान है जो 1 पाउंड-बल के बल से 1 फीट/सेकंड² का त्वरण प्राप्त करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 1 स्लग ≈ 14.59 किलोग्राम।"
  },
  {
    question: "प्रश्न 50. एक मील में कितने किलोमीटर होते हैं?",
    answers: shuffle([
      { text: "1.609 किमी", correct: true },
      { text: "1.852 किमी", correct: false },
      { text: "1.509 किमी", correct: false },
      { text: "1.752 किमी", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक स्थलीय मील (statute mile) लगभग 1.609 किलोमीटर के बराबर होता है।"
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