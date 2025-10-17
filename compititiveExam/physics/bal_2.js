const questions = [
  {
    topHeading: "बल पर आधारित 50 MCQs,part_2 (quiz_no.)"
  },
  {
    question: "प्रश्न 1. किसी वस्तु पर बल लगाने से निम्नलिखित में से क्या नहीं बदल सकता?",
    answers: shuffle([
      { text: "उसकी चाल", correct: false },
      { text: "उसकी गति की दिशा", correct: false },
      { text: "उसका द्रव्यमान", correct: true },
      { text: "उसका आकार", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> बल किसी वस्तु की गति या आकार को बदल सकता है, लेकिन सामान्य परिस्थितियों में यह उसके द्रव्यमान (पदार्थ की मात्रा) को नहीं बदलता है।"
  },
  {
    question: "प्रश्न 2. दो पिंडों के बीच गुरुत्वाकर्षण बल किस पर निर्भर नहीं करता है?",
    answers: shuffle([
      { text: "उनके द्रव्यमानों पर", correct: false },
      { text: "उनके बीच की दूरी पर", correct: false },
      { text: "पिंडों के आकार पर (यदि वे बिंदु द्रव्यमान नहीं हैं)", correct: false },
      { text: "पिंडों के बीच के माध्यम पर", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुत्वाकर्षण बल एक सार्वभौमिक बल है और यह पिंडों के बीच मौजूद माध्यम से अप्रभावित रहता है।"
  },
  {
    question: "प्रश्न 3. किसी वस्तु की संतुलन की स्थिति का क्या अर्थ है?",
    answers: shuffle([
      { text: "वस्तु पर कोई बल नहीं लग रहा है।", correct: false },
      { text: "वस्तु पर लगने वाला शुद्ध बल शून्य है।", correct: true },
      { text: "वस्तु केवल एक बल का अनुभव कर रही है।", correct: false },
      { text: "वस्तु स्थिर है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> संतुलन का अर्थ है शून्य त्वरण, जो शून्य शुद्ध बल को इंगित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> वस्तु स्थिर हो भी सकती है और नहीं भी (एकसमान वेग से गतिमान हो सकती है)।"
  },
  {
    question: "प्रश्न 4. बल आघूर्ण (Torque) की अवधारणा किससे संबंधित है?",
    answers: shuffle([
      { text: "बल के रैखिक प्रभाव से", correct: false },
      { text: "बल के घूर्णी प्रभाव से", correct: true },
      { text: "बल के आवेग से", correct: false },
      { text: "बल के कार्य से", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> बल आघूर्ण या बलाघूर्ण किसी बल की किसी वस्तु को एक अक्ष के परितः घुमाने की प्रवृत्ति का माप है।"
  },
  {
    question: "प्रश्न 5. किसी निकाय पर कार्यरत आंतरिक बल क्या बदल सकते हैं?",
    answers: shuffle([
      { text: "निकाय का कुल रैखिक संवेग", correct: false },
      { text: "निकाय का कुल कोणीय संवेग", correct: false },
      { text: "निकाय की कुल ऊर्जा", correct: false },
      { text: "निकाय के भागों की व्यक्तिगत गति", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> आंतरिक बल निकाय के कुल संवेग को नहीं बदल सकते, लेकिन वे निकाय के अंदर के हिस्सों के संवेग और गतिज ऊर्जा को पुनर्वितरित कर सकते हैं।"
  },
  {
    question: "प्रश्न 6. कौन सा बल विद्युत रूप से उदासीन कणों के बीच भी कार्य कर सकता है?",
    answers: shuffle([
      { text: "स्थिरविद्युत बल", correct: false },
      { text: "चुंबकीय बल", correct: false },
      { text: "गुरुत्वाकर्षण बल", correct: true },
      { text: "केवल संपर्क बल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुत्वाकर्षण बल द्रव्यमान का गुण है और यह कणों के विद्युत आवेश पर निर्भर नहीं करता है।"
  },
  {
    question: "प्रश्न 7. एक व्यक्ति एक दीवार को धकेलता है, लेकिन दीवार नहीं हिलती। इस स्थिति में:",
    answers: shuffle([
      { text: "व्यक्ति कोई बल नहीं लगा रहा है।", correct: false },
      { text: "दीवार व्यक्ति पर कोई बल नहीं लगा रही है।", correct: false },
      { text: "व्यक्ति द्वारा किया गया कार्य शून्य है।", correct: true },
      { text: "व्यक्ति द्वारा लगाया गया बल दीवार की प्रतिक्रिया से कम है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि व्यक्ति बल लगा रहा है, लेकिन दीवार में कोई विस्थापन नहीं हो रहा है (विस्थापन = 0), इसलिए भौतिकी के अनुसार किया गया कार्य शून्य है।"
  },
  {
    question: "प्रश्न 8. घर्षण बल को कम करने के लिए किसका उपयोग किया जाता है?",
    answers: shuffle([
      { text: "स्नेहक (Lubricants)", correct: false },
      { text: "बॉल बेयरिंग", correct: false },
      { text: "सतह को चिकना करना", correct: false },
      { text: "उपरोक्त सभी", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये सभी विधियाँ दो सतहों के बीच घर्षण को कम करने के लिए उपयोग की जाती हैं।"
  },
  {
    question: "प्रश्न 9. बल का आवेग वस्तु के ________ में परिवर्तन के बराबर होता है।",
    answers: shuffle([
      { text: "त्वरण", correct: false },
      { text: "वेग", correct: false },
      { text: "संवेग", correct: true },
      { text: "स्थिति", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह आवेग-संवेग प्रमेय का कथन है (FΔt  = Δp)।"
  },
  {
    question: "प्रश्न 10. असंतुलित बल का परिणाम क्या होता है?",
    answers: shuffle([
      { text: "वस्तु की अवस्था में परिवर्तन।", correct: true },
      { text: "वस्तु की अवस्था में कोई परिवर्तन नहीं।", correct: false },
      { text: "वस्तु का द्रव्यमान बढ़ जाता है।", correct: false },
      { text: "वस्तु का घनत्व बढ़ जाता है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक असंतुलित बल हमेशा वस्तु की विरामावस्था या एकसमान गति की अवस्था को बदलता है, जिससे त्वरण उत्पन्न होता है।"
  },
  {
    question: "प्रश्न 11. कौन सा बल एक सार्वभौमिक आकर्षण बल है?",
    answers: shuffle([
      { text: "चुंबकीय बल", correct: false },
      { text: "स्थिरविद्युत बल", correct: false },
      { text: "नाभिकीय बल", correct: false },
      { text: "गुरुत्वाकर्षण बल", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्रह्मांड में किन्हीं भी दो द्रव्यमानों के बीच गुरुत्वाकर्षण बल कार्य करता है और यह हमेशा प्रकृति में आकर्षक होता है।"
  },
  {
    question: "प्रश्न 12. यदि किसी वस्तु पर लगने वाला बल दोगुना हो जाए, तो उसका त्वरण:",
    answers: shuffle([
      { text: "आधा हो जाएगा।", correct: false },
      { text: "दोगुना हो जाएगा।", correct: true },
      { text: "अपरिवर्तित रहेगा।", correct: false },
      { text: "चार गुना हो जाएगा।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> F=ma के अनुसार, त्वरण बल के सीधे समानुपाती होता है।"
  },
  {
    question: "प्रश्न 13. एक भारहीनता की स्थिति में, एक वस्तु का:",
    answers: shuffle([
      { text: "द्रव्यमान शून्य होता है।", correct: false },
      { text: "भार शून्य होता है।", correct: true },
      { text: "द्रव्यमान और भार दोनों शून्य होते हैं।", correct: false },
      { text: "घनत्व शून्य होता है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारहीनता का अर्थ है कि वस्तु कोई बल या भार महसूस नहीं कर रही है, लेकिन उसका द्रव्यमान (पदार्थ की मात्रा) वही रहता है।"
  },
  {
    question: "प्रश्न 14. जब कोई वस्तु किसी खुरदरी सतह पर चलती है, तो गतिज घर्षण बल:",
    answers: shuffle([
      { text: "लगाए गए बल पर निर्भर करता है।", correct: false },
      { text: "वस्तु के वेग पर बहुत कम निर्भर करता है।", correct: true },
      { text: "वस्तु के क्षेत्रफल पर निर्भर करता है।", correct: false },
      { text: "हमेशा स्थैतिक घर्षण से अधिक होता है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> गतिज घर्षण का मान लगभग स्थिर रहता है और यह वस्तु के वेग पर महत्वपूर्ण रूप से निर्भर नहीं करता है।"
  },
  {
    question: "प्रश्न 15. विद्युत चुंबकीय बल की परास कितनी होती है?",
    answers: shuffle([
      { text: "बहुत कम (नाभिकीय आकार)", correct: false },
      { text: "सीमित", correct: false },
      { text: "अनंत", correct: true },
      { text: "केवल चालकों में", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुत्वाकर्षण बल की तरह, विद्युत चुंबकीय बल की परास भी अनंत होती है, हालांकि यह दूरी के साथ कमजोर होता जाता है।"
  },
  {
    question: "प्रश्न 16. प्रत्यानयन बल (Restoring force) किस प्रकार की गति में एक महत्वपूर्ण भूमिका निभाता है?",
    answers: shuffle([
      { text: "सरल रेखीय गति", correct: false },
      { text: "वृत्तीय गति", correct: false },
      { text: "दोलनी गति", correct: true },
      { text: "प्रक्षेप्य गति", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्यानयन बल हमेशा वस्तु को उसकी साम्यावस्था की ओर लाने का प्रयास करता है, जो दोलन और कंपन का मुख्य कारण है।"
  },
  {
    question: "प्रश्न 17. संगामी बल (Concurrent forces) क्या होते हैं?",
    answers: shuffle([
      { text: "वे बल जो एक ही रेखा पर कार्य करते हैं।", correct: false },
      { text: "वे बल जिनकी क्रिया रेखाएँ एक ही बिंदु पर मिलती हैं।", correct: true },
      { text: "वे बल जो परिमाण में बराबर होते हैं।", correct: false },
      { text: "वे बल जो एक ही दिशा में होते हैं।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> संगामी बलों का प्रभाव एक एकल बिंदु पर केंद्रित माना जा सकता है।"
  },
  {
    question: "प्रश्न 18. बल को ________ के रूप में भी परिभाषित किया जा सकता है।",
    answers: shuffle([
      { text: "संवेग में परिवर्तन की दर", correct: true },
      { text: "ऊर्जा में परिवर्तन की दर", correct: false },
      { text: "कार्य में परिवर्तन की दर", correct: false },
      { text: "शक्ति में परिवर्तन की दर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह न्यूटन के दूसरे नियम का सबसे सामान्य और सटीक कथन है (F = dp/dt)।"
  },
  {
    question: "प्रश्न 19. परमाणुओं के स्थायित्व के लिए कौन सा बल जिम्मेदार है?",
    answers: shuffle([
      { text: "गुरुत्वाकर्षण बल", correct: false },
      { text: "स्थिरविद्युत बल", correct: true },
      { text: "प्रबल नाभिकीय बल", correct: false },
      { text: "दुर्बल नाभिकीय बल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> नाभिक के धनात्मक आवेश और इलेक्ट्रॉनों के ऋणात्मक आवेश के बीच स्थिरविद्युत आकर्षण बल इलेक्ट्रॉनों को उनकी कक्षाओं में बनाए रखता है, जिससे परमाणु स्थिर होता है।"
  },
  {
    question: "प्रश्न 20. यदि किसी वस्तु का भार 60 न्यूटन है, तो इसका अर्थ है:",
    answers: shuffle([
      { text: "वस्तु का द्रव्यमान 60 किलो है।", correct: false },
      { text: "पृथ्वी वस्तु पर 60 न्यूटन का बल लगा रही है।", correct: true },
      { text: "वस्तु में 60 न्यूटन ऊर्जा है।", correct: false },
      { text: "वस्तु का घनत्व 60 है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> भार गुरुत्वाकर्षण बल का माप है।<br><br><i class='fa-solid fa-angles-right icon'></i> (इसका द्रव्यमान लगभग 6.1 किलो होगा)।"
  },
  {
    question: "प्रश्न 21. बलों को वर्गीकृत करने का एक तरीका 'संपर्क' और 'असंपर्क' है। दूसरा तरीका क्या है?",
    answers: shuffle([
      { text: "आंतरिक और बाहरी", correct: false },
      { text: "संतुलित और असंतुलित", correct: false },
      { text: "संरक्षी और असंरक्षी", correct: false },
      { text: "उपरोक्त सभी", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> बलों को उनके विभिन्न गुणों और प्रभावों के आधार पर कई तरीकों से वर्गीकृत किया जा सकता है।"
  },
  {
    question: "प्रश्न 22. एक चलती हुई कार में त्वरण उत्पन्न करने वाला बल है:",
    answers: shuffle([
      { text: "इंजन द्वारा उत्पन्न बल।", correct: false },
      { text: "सड़क द्वारा टायरों पर लगाया गया घर्षण बल।", correct: true },
      { text: "यात्री द्वारा लगाया गया बल।", correct: false },
      { text: "हवा का प्रतिरोध।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंजन टायरों को घुमाता है, जो सड़क को पीछे की ओर धकेलते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रतिक्रिया में, सड़क का घर्षण बल टायरों को (और इस प्रकार कार को) आगे की ओर धकेलता है।"
  },
  {
    question: "प्रश्न 23. एक आवेशित कण एक चुंबकीय क्षेत्र में प्रवेश करता है। उस पर लगने वाला बल वेग की दिशा के:",
    answers: shuffle([
      { text: "समांतर होता है।", correct: false },
      { text: "विपरीत होता है।", correct: false },
      { text: "लंबवत होता है।", correct: true },
      { text: "किसी भी कोण पर हो सकता है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> चुंबकीय बल (लॉरेंट्ज़ बल) हमेशा कण के वेग और चुंबकीय क्षेत्र दोनों के लंबवत होता है।"
  },
  {
    question: "प्रश्न 24. दाब (Pressure) की परिभाषा क्या है?",
    answers: shuffle([
      { text: "कुल बल", correct: false },
      { text: "प्रति इकाई क्षेत्रफल पर लगने वाला लंबवत बल", correct: true },
      { text: "बल और क्षेत्रफल का गुणनफल", correct: false },
      { text: "प्रति इकाई आयतन पर लगने वाला बल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> दाब (P = F/A) बल के प्रभाव को एक सतह पर वितरित करता है।"
  },
  {
    question: "प्रश्न 25. एक बंद पथ में एक संरक्षी बल द्वारा किया गया कुल कार्य कितना होता है?",
    answers: shuffle([
      { text: "धनात्मक", correct: false },
      { text: "ऋणात्मक", correct: false },
      { text: "शून्य", correct: true },
      { text: "अनंत", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> संरक्षी बल द्वारा किया गया कार्य पथ पर निर्भर नहीं करता है, इसलिए यदि प्रारंभिक और अंतिम बिंदु समान हैं (एक बंद पथ), तो कुल कार्य शून्य होता है।"
  },
  {
    question: "प्रश्न 26. बल का मात्रक 'न्यूटन' किस वैज्ञानिक के सम्मान में रखा गया है?",
    answers: shuffle([
      { text: "गैलीलियो गैलिली", correct: false },
      { text: "अल्बर्ट आइंस्टीन", correct: false },
      { text: "आइजैक न्यूटन", correct: true },
      { text: "जेम्स वॉट", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> सर आइजैक न्यूटन ने गति और बल के मौलिक नियमों को प्रतिपादित किया था।"
  },
  {
    question: "प्रश्न 27. एक वस्तु संतुलन में है। यदि हम एक बल हटा दें, तो वस्तु:",
    answers: shuffle([
      { text: "संतुलन में रहेगी।", correct: false },
      { text: "त्वरित होना शुरू कर देगी।", correct: true },
      { text: "धीमी हो जाएगी।", correct: false },
      { text: "अपनी दिशा बदल देगी।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक बल को हटाने से बलों का संतुलन बिगड़ जाएगा, जिससे एक शुद्ध (असंतुलित) बल उत्पन्न होगा जो त्वरण का कारण बनेगा।"
  },
  {
    question: "प्रश्न 28. 'छद्म बल' (Pseudo force) की अवधारणा का उपयोग क्यों किया जाता है?",
    answers: shuffle([
      { text: "जड़त्वीय निर्देश तंत्र में", correct: false },
      { text: "अजड़त्वीय (त्वरित) निर्देश तंत्र में", correct: true },
      { text: "घर्षण की गणना के लिए", correct: false },
      { text: "गुरुत्वाकर्षण की व्याख्या के लिए", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> त्वरित फ्रेम में न्यूटन के नियमों को उसी रूप में लागू करने के लिए छद्म बलों की कल्पना की जाती है।"
  },
  {
    question: "प्रश्न 29. दो चुंबकों के ध्रुवों के बीच लगने वाला बल है:",
    answers: shuffle([
      { text: "केवल आकर्षण", correct: false },
      { text: "केवल प्रतिकर्षण", correct: false },
      { text: "आकर्षण और प्रतिकर्षण दोनों", correct: true },
      { text: "गुरुत्वाकर्षण", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> समान ध्रुव एक दूसरे को प्रतिकर्षित करते हैं, जबकि विपरीत ध्रुव एक दूसरे को आकर्षित करते हैं।"
  },
  {
    question: "प्रश्न 30. बल के आवेग की दिशा वही होती है जो ________ की दिशा होती है।",
    answers: shuffle([
      { text: "वेग में परिवर्तन", correct: true },
      { text: "प्रारंभिक वेग", correct: false },
      { text: "अंतिम वेग", correct: false },
      { text: "त्वरण", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि आवेग संवेग में परिवर्तन (mΔv) के बराबर है, और द्रव्यमान अदिश है, आवेग की दिशा वेग में परिवर्तन (\\Delta v) की दिशा में होती है।"
  },
  {
    question: "प्रश्न 31. किसी वस्तु पर कार्य करने वाला स्थैतिक घर्षण बल हमेशा:",
    answers: shuffle([
      { text: "गतिज घर्षण के बराबर होता है।", correct: false },
      { text: "लगाए गए बाहरी बल के बराबर और विपरीत होता है (जब तक गति शुरू न हो)।", correct: true },
      { text: "शून्य होता है।", correct: false },
      { text: "अभिलंब बल से अधिक होता है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्थैतिक घर्षण एक स्व-समायोजन बल है; यह केवल उतना ही कार्य करता है जितना गति को रोकने के लिए आवश्यक है, अपने अधिकतम मान (सीमांत घर्षण) तक।"
  },
  {
    question: "प्रश्न 32. बलों के एक युग्म की क्रिया के तहत एक पिंड में होगा:",
    answers: shuffle([
      { text: "केवल स्थानांतरीय गति।", correct: false },
      { text: "केवल घूर्णी गति।", correct: true },
      { text: "न तो स्थानांतरीय और न ही घूर्णी गति।", correct: false },
      { text: "स्थानांतरीय और घूर्णी दोनों गति।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक बल युग्म का परिणामी बल शून्य होता है (कोई स्थानांतरीय गति नहीं) लेकिन परिणामी बल आघूर्ण अशून्य होता है (घूर्णी गति)।"
  },
  {
    question: "प्रश्न 33. यदि किसी निकाय का रैखिक संवेग संरक्षित है, तो उस पर लगने वाला बाहरी बल:",
    answers: shuffle([
      { text: "शून्य है।", correct: true },
      { text: "स्थिर है।", correct: false },
      { text: "निकाय के भार के बराबर है।", correct: false },
      { text: "एक संरक्षी बल है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह संवेग संरक्षण सिद्धांत की शर्त है, जो न्यूटन के दूसरे नियम से निकलती है।"
  },
  {
    question: "प्रश्न 34. दो सतहों के बीच घर्षण गुणांक किस पर निर्भर करता है?",
    answers: shuffle([
      { text: "सतहों के क्षेत्रफल पर", correct: false },
      { text: "सतहों की प्रकृति पर", correct: true },
      { text: "सतहों के बीच सापेक्ष वेग पर", correct: false },
      { text: "लगाए गए बल पर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण गुणांक संपर्क में आने वाली सतहों की सामग्री और उनकी चिकनाई/खुरदरेपन पर निर्भर करता है।"
  },
  {
    question: "प्रश्न 35. बल एक ________ अंतःक्रिया का परिणाम है।",
    answers: shuffle([
      { text: "कण-कण", correct: false },
      { text: "कण-क्षेत्र", correct: false },
      { text: "क्षेत्र-क्षेत्र", correct: false },
      { text: "उपरोक्त सभी", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> बल कणों के बीच सीधे संपर्क (जैसे टक्कर), एक कण और एक क्षेत्र (जैसे गुरुत्वाकर्षण क्षेत्र में द्रव्यमान) या क्षेत्रों के बीच अंतःक्रिया से उत्पन्न हो सकते हैं।"
  },
  {
    question: "प्रश्न 36. एक स्प्रिंग द्वारा लगाया गया बल (हुक के नियम के अनुसार) किसके समानुपाती होता है?",
    answers: shuffle([
      { text: "स्प्रिंग की लंबाई के", correct: false },
      { text: "स्प्रिंग के द्रव्यमान के", correct: false },
      { text: "स्प्रिंग के विस्थापन के", correct: true },
      { text: "स्प्रिंग पर लगे त्वरण के", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुक का नियम कहता है कि स्प्रिंग बल (F) उसकी साम्यावस्था से विस्थापन (x) के समानुपाती और विपरीत होता है (F = -kx)।"
  },
  {
    question: "प्रश्न 37. एक व्यक्ति स्थिर लिफ्ट में एक तुला पर खड़ा है। यदि लिफ्ट की केबल टूट जाए, तो तुला का पाठ्यांक क्या होगा?",
    answers: shuffle([
      { text: "व्यक्ति का वास्तविक भार", correct: false },
      { text: "वास्तविक भार से अधिक", correct: false },
      { text: "वास्तविक भार से कम", correct: false },
      { text: "शून्य", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुक्त पतन की स्थिति में, व्यक्ति और तुला दोनों 'g' त्वरण से नीचे गिरते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> व्यक्ति तुला पर कोई बल नहीं डालता, इसलिए पाठ्यांक शून्य होता है (भारहीनता)।"
  },
  {
    question: "प्रश्न 38. विद्युत चुंबकीय बल, गुरुत्वाकर्षण बल की तुलना में:",
    answers: shuffle([
      { text: "बहुत कमजोर होता है।", correct: false },
      { text: "थोड़ा कमजोर होता है।", correct: false },
      { text: "बराबर शक्तिशाली होता है।", correct: false },
      { text: "बहुत अधिक शक्तिशाली होता है।", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> समान दूरी पर दो प्रोटॉनों के बीच, विद्युत चुंबकीय प्रतिकर्षण उनके बीच गुरुत्वाकर्षण आकर्षण से लगभग 10^{36} गुना अधिक मजबूत होता है।"
  },
  {
    question: "प्रश्न 39. यदि किसी वस्तु की गति की दिशा बदल रही है, तो वस्तु पर निश्चित रूप से एक:",
    answers: shuffle([
      { text: "असंतुलित बल लग रहा है।", correct: true },
      { text: "संतुलित बल लग रहा है।", correct: false },
      { text: "घर्षण बल लग रहा है।", correct: false },
      { text: "गुरुत्वाकर्षण बल लग रहा है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिशा में परिवर्तन का अर्थ है वेग में परिवर्तन, जिसका अर्थ है त्वरण।<br><br><i class='fa-solid fa-angles-right icon'></i> और त्वरण के लिए हमेशा एक असंतुलित (शुद्ध) बल की आवश्यकता होती है।"
  },
  {
    question: "प्रश्न 40. बलों की स्वतंत्रता का सिद्धांत किससे निकटता से संबंधित है?",
    answers: shuffle([
      { text: "बलों की सदिश प्रकृति से", correct: true },
      { text: "बलों की अदिश प्रकृति से", correct: false },
      { text: "ऊर्जा संरक्षण से", correct: false },
      { text: "द्रव्यमान संरक्षण से", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सिद्धांत बताता है कि बल सदिश हैं और उन्हें सदिश योग के नियमों का उपयोग करके जोड़ा जा सकता है।"
  },
  {
    question: "प्रश्न 41. तनाव, घर्षण, अभिलंब बल किसके उदाहरण हैं?",
    answers: shuffle([
      { text: "गुरुत्वाकर्षण बल", correct: false },
      { text: "नाभिकीय बल", correct: false },
      { text: "विद्युत चुंबकीय बल", correct: true },
      { text: "संपर्क बल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्थूल स्तर पर, सभी संपर्क बल मूल रूप से वस्तुओं के परमाणुओं और अणुओं के बीच विद्युत चुंबकीय अंतःक्रियाओं के कारण होते हैं।"
  },
  {
    question: "प्रश्न 42. बल की अवधारणा किससे संबंधित नहीं है?",
    answers: shuffle([
      { text: "जड़त्व", correct: false },
      { text: "संवेग", correct: false },
      { text: "कार्य", correct: false },
      { text: "तापमान", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> तापमान ऊष्मीय ऊर्जा और अणुओं की औसत गतिज ऊर्जा से संबंधित है, न कि सीधे तौर पर स्थूल बल की अवधारणा से।"
  },
  {
    question: "प्रश्न 43. एक कार के एयरबैग ________ को बढ़ाकर बल के प्रभाव को कम करते हैं।",
    answers: shuffle([
      { text: "संवेग", correct: false },
      { text: "अंतिम वेग", correct: false },
      { text: "टक्कर के समय अंतराल", correct: true },
      { text: "जड़त्व", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एयरबैग, क्रिकेटर के हाथों की तरह, संवेग को शून्य तक लाने के लिए लगने वाले समय को बढ़ाते हैं, जिससे यात्री पर लगने वाला औसत बल कम हो जाता है।"
  },
  {
    question: "प्रश्न 44. श्यानता बल किसमें कार्य करता है?",
    answers: shuffle([
      { text: "केवल ठोस में", correct: false },
      { text: "केवल तरल में", correct: false },
      { text: "केवल गैस में", correct: false },
      { text: "तरल और गैस दोनों में (तरल पदार्थों में)", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> तरल और गैस दोनों ही तरल पदार्थ (fluids) हैं, और दोनों में आंतरिक घर्षण होता है जिसे श्यानता कहते हैं।"
  },
  {
    question: "प्रश्न 45. किसी वस्तु पर नेट बल शून्य है। क्या वस्तु में गतिज ऊर्जा हो सकती है?",
    answers: shuffle([
      { text: "हाँ", correct: true },
      { text: "नहीं", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाँ, यदि वस्तु एकसमान वेग से गतिमान है, तो उस पर नेट बल शून्य होगा, लेकिन उसकी गतिज ऊर्जा (½mv^{2}) अशून्य होगी।"
  },
  {
    question: "प्रश्न 46. कौन सा बल हमेशा आकर्षक प्रकृति का होता है?",
    answers: shuffle([
      { text: "स्थिरविद्युत बल", correct: false },
      { text: "चुंबकीय बल", correct: false },
      { text: "गुरुत्वाकर्षण बल", correct: true },
      { text: "नाभिकीय बल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुत्वाकर्षण बल हमेशा दो द्रव्यमानों को एक दूसरे की ओर खींचता है; यह कभी भी प्रतिकारक नहीं होता है।"
  },
  {
    question: "प्रश्न 47. एक गेंद को फर्श पर लुढ़काया जाता है और वह रुक जाती है। इसे कौन सा बल रोकता है?",
    answers: shuffle([
      { text: "अभिलंब बल", correct: false },
      { text: "गुरुत्वाकर्षण बल", correct: false },
      { text: "घर्षण बल", correct: true },
      { text: "कोई बल नहीं, यह स्वाभाविक रूप से रुक जाती है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> फर्श और हवा का घर्षण बल गेंद की गति का विरोध करता है और अंततः उसे रोक देता है।"
  },
  {
    question: "प्रश्न 48. बल द्वारा किया गया कार्य ऋणात्मक कब होता है?",
    answers: shuffle([
      { text: "जब बल और विस्थापन एक ही दिशा में हों।", correct: false },
      { text: "जब बल और विस्थापन लंबवत हों।", correct: false },
      { text: "जब बल और विस्थापन विपरीत दिशाओं में हों।", correct: true },
      { text: "जब बल शून्य हो।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> उदाहरण के लिए, घर्षण बल द्वारा किया गया कार्य हमेशा ऋणात्मक होता है क्योंकि यह हमेशा विस्थापन के विपरीत दिशा में कार्य करता है।"
  },
  {
    question: "प्रश्न 49. प्रणोद (Thrust) एक प्रकार का ________ है।",
    answers: shuffle([
      { text: "दाब", correct: false },
      { text: "बल", correct: true },
      { text: "ऊर्जा", correct: false },
      { text: "शक्ति", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रणोद एक प्रतिक्रिया बल है जो किसी तरल पदार्थ को बाहर निकालकर उत्पन्न होता है, जैसे रॉकेट इंजन में।"
  },
  {
    question: "प्रश्न 50. एक वस्तु पर एक स्थिर बल लग रहा है। वस्तु की गति कैसी होगी?",
    answers: shuffle([
      { text: "स्थिर वेग से", correct: false },
      { text: "स्थिर त्वरण से", correct: true },
      { text: "स्थिर चाल से", correct: false },
      { text: "स्थिर स्थिति में", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> F=ma के अनुसार, यदि बल (F) और द्रव्यमान (m) स्थिर हैं, तो त्वरण (a) भी स्थिर होगा।"
  },
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