const questions = [
  {
    topHeading: "जड़त्व पर आधारित 50 MCQs,part_1 (quiz_no.)"
  },
  {
    question: "प्रश्न 1. किसी वस्तु का वह गुण जो उसकी विरामावस्था या एकसमान गति की अवस्था में परिवर्तन का विरोध करता है, क्या कहलाता है?",
    answers: shuffle([
      { text: "बल", correct: false },
      { text: "संवेग", correct: false },
      { text: "जड़त्व", correct: true },
      { text: "त्वरण", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जड़त्व किसी पिंड का अंतर्निहित गुण है जो उसकी गति की अवस्था में किसी भी बदलाव का विरोध करता है।"
  },
  {
    question: "प्रश्न 2. जड़त्व का नियम न्यूटन के किस नियम को कहा जाता है?",
    answers: shuffle([
      { text: "गति का पहला नियम", correct: true },
      { text: "गति का दूसरा नियम", correct: false },
      { text: "गति का तीसरा नियम", correct: false },
      { text: "गुरुत्वाकर्षण का नियम", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन का पहला नियम जड़त्व की अवधारणा को परिभाषित करता है, इसलिए इसे जड़त्व का नियम भी कहते हैं।"
  },
  {
    question: "प्रश्न 3. किसी वस्तु का जड़त्व किस भौतिक राशि पर निर्भर करता है?",
    answers: shuffle([
      { text: "वस्तु के वेग पर", correct: false },
      { text: "वस्तु के आकार पर", correct: false },
      { text: "वस्तु के द्रव्यमान पर", correct: true },
      { text: "वस्तु पर लगे बल पर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी वस्तु का द्रव्यमान जितना अधिक होता है, उसका जड़त्व उतना ही अधिक होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> द्रव्यमान जड़त्व का माप है।"
  },
  {
    question: "प्रश्न 4. चलती हुई बस के अचानक रुकने पर यात्री आगे की ओर क्यों झुक जाते हैं?",
    answers: shuffle([
      { text: "विराम के जड़त्व के कारण", correct: false },
      { text: "गति के जड़त्व के कारण", correct: true },
      { text: "दिशा के जड़त्व के कारण", correct: false },
      { text: "अपकेंद्री बल के कारण", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> बस के रुकने पर यात्री का शरीर गति के जड़त्व के कारण अपनी गति की अवस्था को बनाए रखने का प्रयास करता है।"
  },
  {
    question: "प्रश्न 5. एक स्थिर बस के अचानक चलने पर यात्री पीछे की ओर क्यों झुक जाते हैं?",
    answers: shuffle([
      { text: "विराम के जड़त्व के कारण", correct: true },
      { text: "गति के जड़त्व के कारण", correct: false },
      { text: "दिशा के जड़त्व के कारण", correct: false },
      { text: "अभिकेंद्रीय बल के कारण", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> बस के चलने पर यात्री का शरीर विराम के जड़त्व के कारण अपनी स्थिर अवस्था को बनाए रखने का प्रयास करता है।"
  },
  {
    question: "प्रश्न 6. एक भारी पत्थर और एक हल्की गेंद में से किसका जड़त्व अधिक होगा?",
    answers: shuffle([
      { text: "हल्की गेंद का", correct: false },
      { text: "भारी पत्थर का", correct: true },
      { text: "दोनों का बराबर होगा", correct: false },
      { text: "यह उनके वेग पर निर्भर करता है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जिसका द्रव्यमान अधिक होता है, उसका जड़त्व भी अधिक होता है।"
  },
  {
    question: "प्रश्न 7. पेड़ की शाखा को हिलाने पर फलों का टूटकर गिरना किस प्रकार के जड़त्व का उदाहरण है?",
    answers: shuffle([
      { text: "गति का जड़त्व", correct: false },
      { text: "दिशा का जड़त्व", correct: false },
      { text: "विराम का जड़त्व", correct: true },
      { text: "घूर्णी जड़त्व", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> शाखा गति में आ जाती है, लेकिन फल विराम के जड़त्व के कारण अपनी स्थिति में बने रहने की कोशिश करते हैं और अलग हो जाते हैं।"
  },
  {
    question: "प्रश्न 8. जड़त्व की अवधारणा सबसे पहले किसने दी थी?",
    answers: shuffle([
      { text: "न्यूटन", correct: false },
      { text: "आर्किमिडीज", correct: false },
      { text: "आइंस्टीन", correct: false },
      { text: "गैलीलियो", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> गैलीलियो ने सबसे पहले जड़त्व की सही अवधारणा प्रस्तुत की, जिसे बाद में न्यूटन ने अपने पहले नियम में शामिल किया।"
  },
  {
    question: "प्रश्न 9. एक समान वेग से गतिमान वस्तु का जड़त्व:",
    answers: shuffle([
      { text: "शून्य होता है।", correct: false },
      { text: "उसके द्रव्यमान पर निर्भर करता है।", correct: true },
      { text: "उसके वेग पर निर्भर करता है।", correct: false },
      { text: "अनंत होता है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जड़त्व वस्तु की गति की अवस्था पर निर्भर नहीं करता, केवल उसके द्रव्यमान पर निर्भर करता है।"
  },
  {
    question: "प्रश्न 10. जब कोई कार एक तीव्र मोड़ लेती है, तो यात्री बाहर की ओर धक्का महसूस करते हैं। यह किसका उदाहरण है?",
    answers: shuffle([
      { text: "विराम का जड़त्व", correct: false },
      { text: "गति का जड़त्व", correct: false },
      { text: "दिशा का जड़त्व", correct: true },
      { text: "अभिकेंद्रीय बल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार की दिशा बदल जाती है, लेकिन यात्री का शरीर दिशा के जड़त्व के कारण अपनी सीधी गति बनाए रखने की कोशिश करता है।"
  },
  {
    question: "प्रश्न 11. निम्नलिखित में से कौन सी राशि जड़त्व का संख्यात्मक माप है?",
    answers: shuffle([
      { text: "भार", correct: false },
      { text: "घनत्व", correct: false },
      { text: "द्रव्यमान", correct: true },
      { text: "आयतन", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्रव्यमान किसी वस्तु में पदार्थ की मात्रा है और यह सीधे उसके रैखिक जड़त्व को मापता है।"
  },
  {
    question: "प्रश्न 12. एक स्थिर वस्तु में क्या हो सकता है?",
    answers: shuffle([
      { text: "वेग", correct: false },
      { text: "संवेग", correct: false },
      { text: "त्वरण", correct: false },
      { text: "जड़त्व", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्येक वस्तु जिसका द्रव्यमान है, उसमें जड़त्व होता है, चाहे वह स्थिर हो या गतिमान।"
  },
  {
    question: "प्रश्न 13. जड़त्व का गुण किसमें होता है?",
    answers: shuffle([
      { text: "केवल गतिशील वस्तुओं में", correct: false },
      { text: "केवल स्थिर वस्तुओं में", correct: false },
      { text: "प्रत्येक वस्तु में जिसका द्रव्यमान हो", correct: true },
      { text: "केवल भारी वस्तुओं में", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जड़त्व द्रव्यमान का एक सार्वभौमिक गुण है।"
  },
  {
    question: "प्रश्न 14. हथौड़े के हत्थे को जमीन पर पटकने से हथौड़े का सिर कस जाता है। यह किस कारण होता है?",
    answers: shuffle([
      { text: "गुरुत्वाकर्षण", correct: false },
      { text: "गति का जड़त्व", correct: true },
      { text: "विराम का जड़त्व", correct: false },
      { text: "घर्षण", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> हत्था रुक जाता है, लेकिन हथौड़े का सिर गति के जड़त्व के कारण आगे बढ़ता रहता है और हत्थे में कस जाता है।"
  },
  {
    question: "प्रश्न 15. एक खाली बाल्टी की तुलना में पानी से भरी बाल्टी को हिलाना क्यों अधिक कठिन होता है?",
    answers: shuffle([
      { text: "पानी के भार के कारण", correct: false },
      { text: "अधिक जड़त्व के कारण", correct: true },
      { text: "अधिक घनत्व के कारण", correct: false },
      { text: "पृष्ठ तनाव के कारण", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> पानी से भरी बाल्टी का द्रव्यमान अधिक होता है, इसलिए उसका जड़त्व भी अधिक होता है, जिससे उसकी अवस्था में परिवर्तन करना कठिन होता है।"
  },
  {
    question: "प्रश्न 16. रैखिक गति में जो भूमिका द्रव्यमान की है, घूर्णी गति में वही भूमिका किसकी है?",
    answers: shuffle([
      { text: "बल आघूर्ण", correct: false },
      { text: "कोणीय वेग", correct: false },
      { text: "जड़त्वाघूर्ण", correct: true },
      { text: "कोणीय संवेग", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जड़त्वाघूर्ण घूर्णी गति में परिवर्तन का उसी प्रकार विरोध करता है जैसे द्रव्यमान रैखिक गति में परिवर्तन का विरोध करता है।"
  },
  {
    question: "प्रश्न 17. जड़त्व किसी वस्तु की गति की अवस्था में परिवर्तन का ________ करता है।",
    answers: shuffle([
      { text: "समर्थन", correct: false },
      { text: "विरोध", correct: true },
      { text: "कोई प्रभाव नहीं डालता", correct: false },
      { text: "निर्धारण", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह जड़त्व की परिभाषा है; यह परिवर्तन के प्रति एक प्रतिरोध है।"
  },
  {
    question: "प्रश्न 18. एक हल्की साइकिल और एक भारी ट्रक में से किसको धकेलकर गति देना अधिक कठिन है?",
    answers: shuffle([
      { text: "साइकिल को", correct: false },
      { text: "ट्रक को", correct: true },
      { text: "दोनों को समान रूप से", correct: false },
      { text: "यह सड़क पर निर्भर करता है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> ट्रक का द्रव्यमान और इसलिए उसका विराम का जड़त्व बहुत अधिक होता है।"
  },
  {
    question: "प्रश्न 19. \"एक वस्तु अपनी अवस्था में तब तक बनी रहती है जब तक उस पर कोई बाहरी बल न लगे।\" यह कथन दर्शाता है:",
    answers: shuffle([
      { text: "संवेग संरक्षण", correct: false },
      { text: "ऊर्जा संरक्षण", correct: false },
      { text: "जड़त्व का गुण", correct: true },
      { text: "बल की परिभाषा", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह न्यूटन के पहले नियम का सार है, जो जड़त्व को परिभाषित करता है।"
  },
  {
    question: "प्रश्न 20. जड़त्व एक ________ है।",
    answers: shuffle([
      { text: "बल", correct: false },
      { text: "ऊर्जा", correct: false },
      { text: "गुण", correct: true },
      { text: "भौतिक राशि जिसे मापा नहीं जा सकता", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जड़त्व किसी भी द्रव्यमान युक्त वस्तु का एक अंतर्निहित गुण है।"
  },
  {
    question: "प्रश्न 21. जड़त्वाघूर्ण किस प्रकार की गति से संबंधित है?",
    answers: shuffle([
      { text: "रैखिक गति", correct: false },
      { text: "प्रक्षेप्य गति", correct: false },
      { text: "घूर्णी गति", correct: true },
      { text: "दोलनी गति", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जड़त्वाघूर्ण किसी वस्तु की घूर्णी गति में परिवर्तन के प्रति प्रतिरोध का माप है।"
  },
  {
    question: "प्रश्न 22. जड़त्वाघूर्ण को ________ भी कहा जाता है।",
    answers: shuffle([
      { text: "रैखिक जड़त्व", correct: false },
      { text: "घूर्णी जड़त्व", correct: true },
      { text: "दिशा का जड़त्व", correct: false },
      { text: "कोणीय द्रव्यमान", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह घूर्णी गति में जड़त्व की भूमिका निभाता है, इसलिए इसे घूर्णी जड़त्व भी कहते हैं।"
  },
  {
    question: "प्रश्न 23. जड़त्वाघूर्ण का एस.आई. (SI) मात्रक क्या है?",
    answers: shuffle([
      { text: "किलोग्राम-मीटर", correct: false },
      { text: "किलोग्राम/मीटर²", correct: false },
      { text: "किलोग्राम-मीटर²", correct: true },
      { text: "किलोग्राम²/मीटर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जड़त्वाघूर्ण (I = mr²) का मात्रक द्रव्यमान (kg) और दूरी के वर्ग (m²) का गुणनफल होता है।"
  },
  {
    question: "प्रश्न 24. किसी वस्तु का जड़त्वाघूर्ण किस पर निर्भर नहीं करता है?",
    answers: shuffle([
      { text: "वस्तु के द्रव्यमान पर", correct: false },
      { text: "घूर्णन अक्ष पर", correct: false },
      { text: "द्रव्यमान के वितरण पर", correct: false },
      { text: "वस्तु के कोणीय वेग पर", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जड़त्वाघूर्ण वस्तु का एक आंतरिक गुण है जो उसकी गति पर निर्भर नहीं करता, बल्कि उसके द्रव्यमान और ज्यामिति पर निर्भर करता है।"
  },
  {
    question: "प्रश्न 25. यदि किसी वस्तु का सारा द्रव्यमान घूर्णन अक्ष के पास केंद्रित हो, तो उसका जड़त्वाघूर्ण होगा:",
    answers: shuffle([
      { text: "कम", correct: true },
      { text: "अधिक", correct: false },
      { text: "शून्य", correct: false },
      { text: "अनंत", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जड़त्वाघूर्ण द्रव्यमान और अक्ष से दूरी के वर्ग के गुणनफल पर निर्भर करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> दूरी कम होने पर यह कम हो जाता है।"
  },
  {
    question: "प्रश्न 26. एक ही द्रव्यमान और त्रिज्या के एक ठोस गोले और एक खोखले गोले में से किसका जड़त्वाघूर्ण अधिक होगा?",
    answers: shuffle([
      { text: "ठोस गोले का", correct: false },
      { text: "खोखले गोले का", correct: true },
      { text: "दोनों का बराबर होगा", correct: false },
      { text: "यह उनके पदार्थ पर निर्भर करता है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> खोखले गोले का द्रव्यमान अक्ष से अधिक दूरी पर वितरित होता है, इसलिए उसका जड़त्वाघूर्ण अधिक होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> (I_hollow = 2/3 MR², I_solid = 2/5 MR²)।"
  },
  {
    question: "प्रश्न 27. समांतर अक्ष प्रमेय का उपयोग कब किया जाता है?",
    answers: shuffle([
      { text: "जड़त्वाघूर्ण की दिशा ज्ञात करने के लिए", correct: false },
      { text: "द्रव्यमान केंद्र से गुजरने वाली अक्ष के समांतर किसी अन्य अक्ष के परितः जड़त्वाघूर्ण ज्ञात करने के लिए", correct: true },
      { text: "कोणीय वेग ज्ञात करने के लिए", correct: false },
      { text: "दो वस्तुओं के जड़त्वाघूर्ण की तुलना करने के लिए", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह प्रमेय (I = I_cm + Md²) एक अक्ष के परितः जड़त्वाघूर्ण को दूसरी समांतर अक्ष के परितः जड़त्वाघूर्ण से संबंधित करता है।"
  },
  {
    question: "प्रश्न 28. लंबवत अक्ष प्रमेय किस प्रकार के पिंडों पर लागू होता है?",
    answers: shuffle([
      { text: "केवल त्रि-आयामी पिंडों पर", correct: false },
      { text: "केवल एक-आयामी पिंडों पर", correct: false },
      { text: "केवल समतलीय (द्वि-आयामी) पिंडों पर", correct: true },
      { text: "सभी प्रकार के पिंडों पर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह प्रमेय (I_z = I_x + I_y) केवल पतली, समतल वस्तुओं के लिए मान्य है।"
  },
  {
    question: "प्रश्न 29. जड़त्वाघूर्ण का विमीय सूत्र क्या है?",
    answers: shuffle([
      { text: "[MLT⁻²]", correct: false },
      { text: "[ML²T⁻¹]", correct: false },
      { text: "[ML²]", correct: true },
      { text: "[M L⁻¹ T²]", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> I = mr² के अनुसार, विमा = [M][L²] = [ML²]।"
  },
  {
    question: "प्रश्न 30. एक कताई करने वाला नर्तक जब अपनी बाहों को सिकोड़ता है, तो उसका कोणीय वेग बढ़ जाता है। इसका कारण है:",
    answers: shuffle([
      { text: "उसका जड़त्वाघूर्ण बढ़ जाता है।", correct: false },
      { text: "उसका जड़त्वाघूर्ण घट जाता है।", correct: true },
      { text: "उसका द्रव्यमान कम हो जाता है।", correct: false },
      { text: "उस पर बाहरी बल आघूर्ण लगता है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाहें सिकोड़ने से द्रव्यमान घूर्णन अक्ष के करीब आ जाता है, जिससे जड़त्वाघूर्ण कम हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> कोणीय संवेग संरक्षण के कारण, कोणीय वेग बढ़ जाता है।"
  },
  {
    question: "प्रश्न 31. घूर्णन त्रिज्या (Radius of Gyration) की अवधारणा किससे संबंधित है?",
    answers: shuffle([
      { text: "रैखिक जड़त्व से", correct: false },
      { text: "जड़त्वाघूर्ण और द्रव्यमान के वितरण से", correct: true },
      { text: "वृत्तीय गति की त्रिज्या से", correct: false },
      { text: "बल आघूर्ण से", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह वह दूरी है जिस पर यदि वस्तु का सारा द्रव्यमान केंद्रित मान लिया जाए, तो जड़त्वाघूर्ण वही रहेगा।<br><br><i class='fa-solid fa-angles-right icon'></i> यह द्रव्यमान वितरण का एक माप है।"
  },
  {
    question: "प्रश्न 32. एक ही द्रव्यमान और त्रिज्या की एक वलय (ring) और एक डिस्क (disc) में से, अपने केंद्र से गुजरने वाली और तल के लंबवत अक्ष के परितः किसका जड़त्वाघूर्ण अधिक होगा?",
    answers: shuffle([
      { text: "वलय का", correct: true },
      { text: "डिस्क का", correct: false },
      { text: "दोनों का बराबर होगा", correct: false },
      { text: "यह उनके कोणीय वेग पर निर्भर करता है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> वलय का सारा द्रव्यमान अक्ष से अधिकतम दूरी (त्रिज्या) पर होता है, जबकि डिस्क का द्रव्यमान वितरित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> (I_ring = MR², I_disc = 1/2 MR²)।"
  },
  {
    question: "प्रश्न 33. जड़त्वाघूर्ण किस प्रकार की राशि है?",
    answers: shuffle([
      { text: "अदिश", correct: false },
      { text: "सदिश", correct: false },
      { text: "प्रदेश (टेंसर)", correct: true },
      { text: "विमाहीन", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि सरल गणनाओं में इसे अदिश माना जाता है, जड़त्वाघूर्ण का मान घूर्णन अक्ष के अभिविन्यास पर निर्भर करता है, जो इसे एक प्रदेश राशि बनाता है।"
  },
  {
    question: "प्रश्न 34. किसी पतली छड़ का जड़त्वाघूर्ण उसके केंद्र से गुजरने वाली और लंबाई के लंबवत अक्ष के परितः न्यूनतम होता है। यदि अक्ष को सिरे की ओर ले जाया जाए, तो जड़त्वाघूर्ण:",
    answers: shuffle([
      { text: "घटेगा", correct: false },
      { text: "बढ़ेगा", correct: true },
      { text: "अपरिवर्तित रहेगा", correct: false },
      { text: "शून्य हो जाएगा", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> समांतर अक्ष प्रमेय के अनुसार, अक्ष को द्रव्यमान केंद्र से दूर ले जाने पर जड़त्वाघूर्ण हमेशा बढ़ता है।"
  },
  {
    question: "प्रश्न 35. घूर्णन त्रिज्या का मात्रक क्या है?",
    answers: shuffle([
      { text: "किलोग्राम", correct: false },
      { text: "मीटर", correct: true },
      { text: "किलोग्राम-मीटर", correct: false },
      { text: "मीटर²", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> घूर्णन त्रिज्या एक दूरी है, इसलिए इसका मात्रक मीटर होता है।"
  },
  {
    question: "प्रश्न 36. एक फ्लाईव्हील (flywheel) का जड़त्वाघूर्ण बहुत अधिक क्यों बनाया जाता है?",
    answers: shuffle([
      { text: "इसे हल्का बनाने के लिए", correct: false },
      { text: "घूर्णी गति में अचानक होने वाले परिवर्तनों का विरोध करने के लिए", correct: true },
      { text: "इसे तेजी से घुमाने के लिए", correct: false },
      { text: "लागत कम करने के लिए", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिक जड़त्वाघूर्ण का अर्थ है कि यह अपनी घूर्णी चाल को बनाए रखने में बेहतर है, जिससे यह ऊर्जा को सुचारू रूप से संग्रहीत और वितरित कर सकता है।"
  },
  {
    question: "प्रश्न 37. जड़त्वाघूर्ण की अवधारणा किसने प्रस्तुत की?",
    answers: shuffle([
      { text: "आइजैक न्यूटन", correct: false },
      { text: "गैलीलियो गैलिली", correct: false },
      { text: "लियोनहार्ड यूलर", correct: true },
      { text: "अल्बर्ट आइंस्टीन", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> लियोनहार्ड यूलर ने न्यूटन के नियमों को दृढ़ पिंडों की घूर्णी गति पर लागू किया और जड़त्वाघूर्ण की अवधारणा विकसित की।"
  },
  {
    question: "प्रश्न 38. यदि हम किसी घूमती हुई वस्तु का द्रव्यमान बढ़ा दें (बिना आकार बदले), तो उसका जड़त्वाघूर्ण:",
    answers: shuffle([
      { text: "घटेगा", correct: false },
      { text: "बढ़ेगा", correct: true },
      { text: "वही रहेगा", correct: false },
      { text: "शून्य हो जाएगा", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जड़त्वाघूर्ण द्रव्यमान के सीधे समानुपाती होता है।"
  },
  {
    question: "प्रश्न 39. जड़त्वाघूर्ण का मान किस पर निर्भर करता है?",
    answers: shuffle([
      { text: "केवल वस्तु के कुल द्रव्यमान पर", correct: false },
      { text: "केवल वस्तु के आकार पर", correct: false },
      { text: "केवल घूर्णन अक्ष की स्थिति पर", correct: false },
      { text: "ये सभी पर", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जड़त्वाघूर्ण एक संयुक्त गुण है जो द्रव्यमान, उसके वितरण (आकार) और चुने गए घूर्णन अक्ष पर निर्भर करता है।"
  },
  {
    question: "प्रश्न 40. किसी बिंदु द्रव्यमान का जड़त्वाघूर्ण (I = mr²) में 'r' क्या है?",
    answers: shuffle([
      { text: "कण की त्रिज्या", correct: false },
      { text: "घूर्णन पथ की त्रिज्या", correct: false },
      { text: "घूर्णन अक्ष से कण की लंबवत दूरी", correct: true },
      { text: "कण का व्यास", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह जड़त्वाघूर्ण की परिभाषा में दूरी का सही अर्थ है।"
  },
  {
    question: "प्रश्न 41. किसी पिंड का जड़त्वाघूर्ण किसके बारे में न्यूनतम होता है?",
    answers: shuffle([
      { text: "उसके किसी भी सिरे से गुजरने वाली अक्ष", correct: false },
      { text: "उसके द्रव्यमान केंद्र से गुजरने वाली अक्ष", correct: true },
      { text: "उसकी सतह को छूने वाली अक्ष", correct: false },
      { text: "यह हमेशा स्थिर रहता है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> समांतर अक्ष प्रमेय (I = I_cm + Md²) से स्पष्ट है कि I का मान हमेशा I_cm से अधिक या बराबर होगा।"
  },
  {
    question: "प्रश्न 42. एक ठोस बेलन और एक खोखले बेलन का द्रव्यमान और त्रिज्या समान हैं। अपनी ज्यामितीय अक्ष के परितः किसका जड़त्वाघूर्ण कम होगा?",
    answers: shuffle([
      { text: "ठोस बेलन का", correct: true },
      { text: "खोखले बेलन का", correct: false },
      { text: "दोनों का बराबर होगा", correct: false },
      { text: "जानकारी अपर्याप्त है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> ठोस बेलन का द्रव्यमान अक्ष के करीब भी वितरित होता है, जबकि खोखले बेलन का सारा द्रव्यमान परिधि पर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> (I_solid = 1/2 MR², I_hollow = MR²)।"
  },
  {
    question: "प्रश्न 43. साइकिल के पहिये में अधिकांश द्रव्यमान रिम में क्यों केंद्रित होता है?",
    answers: shuffle([
      { text: "पहिये को सस्ता बनाने के लिए", correct: false },
      { text: "पहिये का जड़त्वाघूर्ण बढ़ाने के लिए", correct: true },
      { text: "पहिये का वजन कम करने के लिए", correct: false },
      { text: "सौंदर्य कारणों से", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिक जड़त्वाघूर्ण पहिये को एक बार गति में आने के बाद अपनी घूर्णी गति को बनाए रखने में मदद करता है, जिससे स्थिरता मिलती है।"
  },
  {
    question: "प्रश्न 44. जड़त्वाघूर्ण, बल आघूर्ण और कोणीय त्वरण के बीच क्या संबंध है?",
    answers: shuffle([
      { text: "बल आघूर्ण = जड़त्वाघूर्ण / कोणीय त्वरण", correct: false },
      { text: "बल आघूर्ण = जड़त्वाघूर्ण × कोणीय त्वरण", correct: true },
      { text: "जड़त्वाघूर्ण = बल आघूर्ण × कोणीय त्वरण", correct: false },
      { text: "कोणीय त्वरण = बल आघूर्ण × जड़त्वाघूर्ण", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह संबंध (τ = Iα) घूर्णी गति के लिए न्यूटन के दूसरे नियम का अनुरूप है (F = ma)।"
  },
  {
    question: "प्रश्न 45. यदि पिघलकर पृथ्वी अपनी वर्तमान त्रिज्या की आधी रह जाए (द्रव्यमान स्थिर रहे), तो उसका जड़त्वाघूर्ण:",
    answers: shuffle([
      { text: "आधा हो जाएगा", correct: false },
      { text: "दोगुना हो जाएगा", correct: false },
      { text: "एक चौथाई हो जाएगा", correct: true },
      { text: "चार गुना हो जाएगा", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी को एक ठोस गोला मानते हुए (I ∝ R²), यदि त्रिज्या आधी (R/2) हो जाती है, तो जड़त्वाघूर्ण (R/2)² = R²/4, यानी एक चौथाई हो जाएगा।"
  },
  {
    question: "प्रश्न 46. लंबवत अक्ष प्रमेय के अनुसार, I_z = I_x + I_y में, x, y, और z अक्षों को होना चाहिए:",
    answers: shuffle([
      { text: "समांतर", correct: false },
      { text: "एक ही तल में", correct: false },
      { text: "परस्पर लंबवत", correct: true },
      { text: "किसी भी कोण पर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह प्रमेय तीन परस्पर लंबवत अक्षों पर लागू होता है, जिनमें से दो (x और y) पिंड के तल में होते हैं और तीसरा (z) उनके कटान बिंदु से गुजरता है।"
  },
  {
    question: "प्रश्न 47. जड़त्वाघूर्ण की अवधारणा का उपयोग किसमें नहीं होता है?",
    answers: shuffle([
      { text: "घूर्णन करती पृथ्वी के अध्ययन में", correct: false },
      { text: "वाहनों के फ्लाईव्हील के डिजाइन में", correct: false },
      { text: "एक सीधी रेखा में चलती कार की गति के विश्लेषण में", correct: true },
      { text: "एक घूमते हुए लट्टू की गति के विश्लेषण में", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> सीधी रेखा (रैखिक) गति का विश्लेषण करने के लिए केवल जड़त्व (द्रव्यमान) की आवश्यकता होती है, जड़त्वाघूर्ण की नहीं (जब तक कि हम पहियों के घूर्णन पर विचार न करें)।"
  },
  {
    question: "प्रश्न 48. घूर्णन त्रिज्या (K) और जड़त्वाघूर्ण (I) के बीच संबंध है:",
    answers: shuffle([
      { text: "I = MK", correct: false },
      { text: "I = MK²", correct: true },
      { text: "I = M/K²", correct: false },
      { text: "I = M²K", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह घूर्णन त्रिज्या की परिभाषा है, जहाँ M कुल द्रव्यमान है।"
  },
  {
    question: "प्रश्न 49. एक नर्तकी घूमते हुए अपने हाथ फैला लेती है। उसका जड़त्वाघूर्ण:",
    answers: shuffle([
      { text: "बढ़ जाएगा", correct: true },
      { text: "घट जाएगा", correct: false },
      { text: "अपरिवर्तित रहेगा", correct: false },
      { text: "शून्य हो जाएगा", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाथ फैलाने से द्रव्यमान घूर्णन अक्ष से दूर चला जाता है, जिससे जड़त्वाघूर्ण बढ़ जाता है।"
  },
  {
    question: "प्रश्न 50. दो पिंडों का जड़त्वाघूर्ण समान है। क्या यह आवश्यक है कि उनका द्रव्यमान भी समान हो?",
    answers: shuffle([
      { text: "हाँ, हमेशा", correct: false },
      { text: "नहीं, आवश्यक नहीं है", correct: true },
      { text: "हाँ, यदि उनका आकार समान है", correct: false },
      { text: "हाँ, यदि वे एक ही पदार्थ से बने हैं", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक कम द्रव्यमान वाली वस्तु जिसका द्रव्यमान अक्ष से दूर वितरित हो, का जड़त्वाघूर्ण एक अधिक द्रव्यमान वाली वस्तु जिसका द्रव्यमान अक्ष के पास हो, के बराबर हो सकता है।"
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