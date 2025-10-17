const questions = [
  {
    topHeading: "द्रव्यमान और भार पर आधारित 50 MCQs,part_1 (quiz_no.)"
  },
  {
    question: "प्रश्न 1. किसी वस्तु में उपस्थित पदार्थ की मात्रा को क्या कहते हैं?",
    answers: shuffle([
      { text: "भार", correct: false },
      { text: "घनत्व", correct: false },
      { text: "आयतन", correct: false },
      { text: "द्रव्यमान", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्रव्यमान किसी वस्तु में निहित पदार्थ की कुल मात्रा का माप है।"
  },
  {
    question: "प्रश्न 2. किसी वस्तु का भार क्या है?",
    answers: shuffle([
      { text: "वस्तु का जड़त्व", correct: false },
      { text: "वस्तु का द्रव्यमान", correct: false },
      { text: "वह बल जिससे पृथ्वी वस्तु को आकर्षित करती है", correct: true },
      { text: "वस्तु की सतह का क्षेत्रफल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> भार एक प्रकार का बल है, विशेष रूप से गुरुत्वाकर्षण बल जो किसी ग्रह द्वारा वस्तु पर लगाया जाता है।"
  },
  {
    question: "प्रश्न 3. द्रव्यमान की एस.आई. (SI) इकाई क्या है?",
    answers: shuffle([
      { text: "न्यूटन", correct: false },
      { text: "किलोग्राम", correct: true },
      { text: "डाइन", correct: false },
      { text: "ग्राम", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंतर्राष्ट्रीय मात्रक प्रणाली में द्रव्यमान का मानक मात्रक किलोग्राम है।"
  },
  {
    question: "प्रश्न 4. भार की एस.आई. (SI) इकाई क्या है?",
    answers: shuffle([
      { text: "किलोग्राम", correct: false },
      { text: "पास्कल", correct: false },
      { text: "जूल", correct: false },
      { text: "न्यूटन", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि भार एक बल है, इसकी एस.आई. इकाई बल की इकाई, न्यूटन (N), होती है।"
  },
  {
    question: "प्रश्न 5. निम्नलिखित में से कौन सी राशि स्थान के अनुसार परिवर्तित नहीं होती है?",
    answers: shuffle([
      { text: "भार", correct: false },
      { text: "द्रव्यमान", correct: true },
      { text: "गुरुत्वीय त्वरण", correct: false },
      { text: "आभासी भार", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्रव्यमान एक वस्तु का आंतरिक गुण है और यह ब्रह्मांड में कहीं भी स्थिर रहता है।"
  },
  {
    question: "प्रश्न 6. किसी वस्तु का भार कहाँ परिवर्तित हो सकता है?",
    answers: shuffle([
      { text: "केवल पृथ्वी पर", correct: false },
      { text: "केवल चंद्रमा पर", correct: false },
      { text: "एक स्थान से दूसरे स्थान पर जाने पर", correct: true },
      { text: "कभी परिवर्तित नहीं होता", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> भार गुरुत्वीय त्वरण (g) पर निर्भर करता है, और 'g' का मान स्थान के साथ बदलता है, इसलिए भार भी बदलता है।"
  },
  {
    question: "प्रश्न 7. द्रव्यमान किस प्रकार की राशि है?",
    answers: shuffle([
      { text: "सदिश", correct: false },
      { text: "अदिश", correct: true },
      { text: "प्रदेश (टेंसर)", correct: false },
      { text: "न तो सदिश न ही अदिश", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्रव्यमान में केवल परिमाण होता है, दिशा नहीं, इसलिए यह एक अदिश राशि है।"
  },
  {
    question: "प्रश्न 8. भार किस प्रकार की राशि है?",
    answers: shuffle([
      { text: "सदिश", correct: true },
      { text: "अदिश", correct: false },
      { text: "विमाहीन", correct: false },
      { text: "एक अनुपात", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> भार एक बल है और इसकी दिशा हमेशा ग्रह के केंद्र की ओर होती है, इसलिए यह एक सदिश राशि है।"
  },
  {
    question: "प्रश्न 9. किसी वस्तु का द्रव्यमान मापने के लिए किस उपकरण का उपयोग किया जाता है?",
    answers: shuffle([
      { text: "कमानीदार तुला (Spring Balance)", correct: false },
      { text: "भौतिक तुला या दंड तुला (Physical Balance)", correct: true },
      { text: "बैरोमीटर", correct: false },
      { text: "मैनोमीटर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक भौतिक तुला दो द्रव्यमानों की तुलना करके द्रव्यमान का सटीक माप करती है।"
  },
  {
    question: "प्रश्न 10. किसी वस्तु का भार मापने के लिए किस उपकरण का उपयोग किया जाता है?",
    answers: shuffle([
      { text: "भौतिक तुला (Physical Balance)", correct: false },
      { text: "कमानीदार तुला (Spring Balance)", correct: true },
      { text: "थर्मामीटर", correct: false },
      { text: "कैलोरीमीटर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> कमानीदार तुला स्प्रिंग के खिंचाव को मापती है, जो वस्तु पर लगने वाले गुरुत्वाकर्षण बल (भार) के समानुपाती होता है।"
  },
  {
    question: "प्रश्न 11. चंद्रमा पर किसी वस्तु का भार पृथ्वी पर उसके भार की तुलना में:",
    answers: shuffle([
      { text: "अधिक होता है", correct: false },
      { text: "कम होता है", correct: true },
      { text: "बराबर होता है", correct: false },
      { text: "शून्य होता है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रमा का गुरुत्वीय त्वरण पृथ्वी का लगभग 1/6 गुना है, इसलिए वहाँ वस्तु का भार भी लगभग 1/6 गुना हो जाता है।"
  },
  {
    question: "प्रश्न 12. चंद्रमा पर किसी वस्तु का द्रव्यमान पृथ्वी पर उसके द्रव्यमान की तुलना में:",
    answers: shuffle([
      { text: "अधिक होता है", correct: false },
      { text: "कम होता है", correct: false },
      { text: "बराबर होता है", correct: true },
      { text: "शून्य होता है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्रव्यमान वस्तु का एक मौलिक गुण है और स्थान बदलने पर यह नहीं बदलता है।"
  },
  {
    question: "प्रश्न 13. पृथ्वी के केंद्र पर किसी वस्तु का भार कितना होता है?",
    answers: shuffle([
      { text: "अधिकतम", correct: false },
      { text: "न्यूनतम (लेकिन अशून्य)", correct: false },
      { text: "शून्य", correct: true },
      { text: "अनंत", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी के केंद्र पर गुरुत्वीय त्वरण (g) का मान शून्य होता है, इसलिए भार (W=mg) भी शून्य होता है।"
  },
  {
    question: "प्रश्न 14. पृथ्वी के केंद्र पर किसी वस्तु का द्रव्यमान कितना होता है?",
    answers: shuffle([
      { text: "शून्य", correct: false },
      { text: "अनंत", correct: false },
      { text: "पृथ्वी की सतह पर द्रव्यमान के बराबर", correct: true },
      { text: "पृथ्वी की सतह पर द्रव्यमान से कम", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> वस्तु का द्रव्यमान स्थान पर निर्भर नहीं करता है, इसलिए यह सतह पर मौजूद द्रव्यमान के बराबर ही रहेगा।"
  },
  {
    question: "प्रश्न 15. किसी वस्तु का ________ उसके जड़त्व का माप है।",
    answers: shuffle([
      { text: "भार", correct: false },
      { text: "द्रव्यमान", correct: true },
      { text: "घनत्व", correct: false },
      { text: "आयतन", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जिस वस्तु का द्रव्यमान जितना अधिक होता है, उसकी अपनी गति की अवस्था में परिवर्तन का विरोध करने की प्रवृत्ति (जड़त्व) उतनी ही अधिक होती है।"
  },
  {
    question: "प्रश्न 16. भार का सूत्र क्या है?",
    answers: shuffle([
      { text: "द्रव्यमान × वेग", correct: false },
      { text: "द्रव्यमान × त्वरण", correct: false },
      { text: "द्रव्यमान × गुरुत्वीय त्वरण", correct: true },
      { text: "द्रव्यमान / आयतन", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> भार (W) की गणना वस्तु के द्रव्यमान (m) को उस स्थान के गुरुत्वीय त्वरण (g) से गुणा करके की जाती है (W = mg)।"
  },
  {
    question: "प्रश्न 17. क्या किसी वस्तु का द्रव्यमान शून्य हो सकता है?",
    answers: shuffle([
      { text: "हाँ, निर्वात में", correct: false },
      { text: "हाँ, पृथ्वी के केंद्र पर", correct: false },
      { text: "नहीं, कभी नहीं", correct: true },
      { text: "हाँ, यदि वस्तु भारहीन हो", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि किसी वस्तु का अस्तित्व है, तो उसमें कुछ पदार्थ होगा, जिसका अर्थ है कि उसका द्रव्यमान अशून्य होगा।"
  },
  {
    question: "प्रश्न 18. क्या किसी वस्तु का भार शून्य हो सकता है?",
    answers: shuffle([
      { text: "नहीं, कभी नहीं", correct: false },
      { text: "हाँ, गहरे अंतरिक्ष में या ग्रह के केंद्र पर", correct: true },
      { text: "हाँ, यदि वस्तु का द्रव्यमान बहुत कम हो", correct: false },
      { text: "नहीं, क्योंकि द्रव्यमान कभी शून्य नहीं होता", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> भार शून्य हो सकता है जहाँ गुरुत्वाकर्षण क्षेत्र शून्य हो (जैसे पृथ्वी के केंद्र पर) या नगण्य हो (जैसे गहरे अंतरिक्ष में)।"
  },
  {
    question: "प्रश्न 19. पृथ्वी की सतह से ऊपर जाने पर किसी वस्तु का भार:",
    answers: shuffle([
      { text: "बढ़ता है", correct: false },
      { text: "घटता है", correct: true },
      { text: "अपरिवर्तित रहता है", correct: false },
      { text: "पहले बढ़ता है फिर घटता है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊँचाई बढ़ने पर गुरुत्वीय त्वरण (g) का मान कम हो जाता है, जिससे वस्तु का भार भी कम हो जाता है।"
  },
  {
    question: "प्रश्न 20. पृथ्वी की सतह से नीचे (गहराई में) जाने पर किसी वस्तु का भार:",
    answers: shuffle([
      { text: "बढ़ता है", correct: false },
      { text: "घटता है", correct: true },
      { text: "अपरिवर्तित रहता है", correct: false },
      { text: "पहले घटता है फिर बढ़ता है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी के अंदर जाने पर भी 'g' का मान घटता है और केंद्र पर शून्य हो जाता है, इसलिए भार भी घटता है।"
  },
  {
    question: "प्रश्न 21. पृथ्वी के ध्रुवों पर किसी वस्तु का भार भूमध्य रेखा की तुलना में:",
    answers: shuffle([
      { text: "कम होता है", correct: false },
      { text: "अधिक होता है", correct: true },
      { text: "बराबर होता है", correct: false },
      { text: "शून्य होता है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्रुवों पर गुरुत्वीय त्वरण (g) का मान भूमध्य रेखा की तुलना में थोड़ा अधिक होता है, इसलिए वहाँ भार भी अधिक होता है।"
  },
  {
    question: "प्रश्न 22. निम्नलिखित में से क्या एक प्रकार का बल है?",
    answers: shuffle([
      { text: "द्रव्यमान", correct: false },
      { text: "भार", correct: true },
      { text: "जड़त्व", correct: false },
      { text: "घनत्व", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> भार गुरुत्वाकर्षण द्वारा लगाया गया बल है।"
  },
  {
    question: "प्रश्न 23. भारहीनता (Weightlessness) की स्थिति में:",
    answers: shuffle([
      { text: "द्रव्यमान शून्य हो जाता है", correct: false },
      { text: "गुरुत्वाकर्षण शून्य हो जाता है", correct: false },
      { text: "आभासी भार शून्य होता है", correct: true },
      { text: "वस्तु वास्तव में तैरती है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारहीनता वह स्थिति है जहाँ वस्तु कोई बल या भार महसूस नहीं करती, जैसे मुक्त रूप से गिरते हुए या किसी उपग्रह में।"
  },
  {
    question: "प्रश्न 24. एक लिफ्ट जो ऊपर की ओर एकसमान वेग से जा रही है, उसमें किसी व्यक्ति का भार:",
    answers: shuffle([
      { text: "बढ़ जाएगा", correct: false },
      { text: "घट जाएगा", correct: false },
      { text: "अपरिवर्तित रहेगा", correct: true },
      { text: "शून्य हो जाएगा", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एकसमान वेग का अर्थ है शून्य त्वरण।<br><br><i class='fa-solid fa-angles-right icon'></i> इस स्थिति में, आभासी भार वास्तविक भार (mg) के बराबर होता है।"
  },
  {
    question: "प्रश्न 25. एक लिफ्ट जो ऊपर की ओर त्वरित हो रही है, उसमें किसी व्यक्ति का आभासी भार:",
    answers: shuffle([
      { text: "बढ़ जाएगा", correct: true },
      { text: "घट जाएगा", correct: false },
      { text: "वास्तविक भार के बराबर होगा", correct: false },
      { text: "शून्य हो जाएगा", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊपर की ओर त्वरण के कारण, व्यक्ति पर एक अतिरिक्त ऊपर की ओर बल लगता है, जिससे उसका आभासी भार (m(g+a)) बढ़ जाता है।"
  },
  {
    question: "प्रश्न 26. एक लिफ्ट जो नीचे की ओर त्वरित हो रही है, उसमें किसी व्यक्ति का आभासी भार:",
    answers: shuffle([
      { text: "बढ़ जाएगा", correct: false },
      { text: "घट जाएगा", correct: true },
      { text: "वास्तविक भार के बराबर होगा", correct: false },
      { text: "शून्य हो जाएगा", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> नीचे की ओर त्वरण के कारण, व्यक्ति का आभासी भार (m(g-a)) उसके वास्तविक भार से कम हो जाता है।"
  },
  {
    question: "प्रश्न 27. यदि लिफ्ट की केबल टूट जाए और वह मुक्त रूप से गिरे, तो उसमें किसी व्यक्ति का भार होगा:",
    answers: shuffle([
      { text: "दोगुना", correct: false },
      { text: "आधा", correct: false },
      { text: "अपरिवर्तित", correct: false },
      { text: "शून्य", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुक्त पतन की स्थिति में, लिफ्ट का त्वरण 'g' के बराबर होता है, और आभासी भार m(g-g) = 0 हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारहीनता की स्थिति है।"
  },
  {
    question: "प्रश्न 28. द्रव्यमान और भार के बीच क्या संबंध है?",
    answers: shuffle([
      { text: "वे एक दूसरे के व्युत्क्रमानुपाती हैं।", correct: false },
      { text: "वे एक दूसरे के बराबर हैं।", correct: false },
      { text: "भार, द्रव्यमान और गुरुत्वीय त्वरण का गुणनफल है।", correct: true },
      { text: "द्रव्यमान, भार और गुरुत्वीय त्वरण का गुणनफल है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> W = mg यह सूत्र द्रव्यमान और भार के बीच के संबंध को दर्शाता है।"
  },
  {
    question: "प्रश्न 29. किसी वस्तु का द्रव्यमान उसके ________ का विरोध करता है।",
    answers: shuffle([
      { text: "भार", correct: false },
      { text: "गति की अवस्था में परिवर्तन", correct: true },
      { text: "आयतन", correct: false },
      { text: "घनत्व", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्रव्यमान जड़त्व का माप है, और जड़त्व गति की अवस्था में परिवर्तन का विरोध करता है।"
  },
  {
    question: "प्रश्न 30. यदि किसी वस्तु का द्रव्यमान अधिक है, तो उसका जड़त्व:",
    answers: shuffle([
      { text: "कम होगा", correct: false },
      { text: "अधिक होगा", correct: true },
      { text: "अपरिवर्तित रहेगा", correct: false },
      { text: "शून्य होगा", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जड़त्व द्रव्यमान के सीधे समानुपाती होता है।"
  },
  {
    question: "प्रश्न 31. किसी ग्रह पर किसी वस्तु का भार किस पर निर्भर नहीं करता है?",
    answers: shuffle([
      { text: "वस्तु के द्रव्यमान पर", correct: false },
      { text: "ग्रह के द्रव्यमान पर", correct: false },
      { text: "ग्रह की त्रिज्या पर", correct: false },
      { text: "वस्तु के आयतन पर", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> भार (W = G(Mm)/r²) वस्तु के द्रव्यमान (m), ग्रह के द्रव्यमान (M), और ग्रह की त्रिज्या (r) पर निर्भर करता है, लेकिन वस्तु के आयतन पर नहीं।"
  },
  {
    question: "प्रश्न 32. एक अंतरिक्ष यात्री जो एक परिक्रमा करते उपग्रह में है, भारहीनता का अनुभव क्यों करता है?",
    answers: shuffle([
      { text: "क्योंकि वहाँ गुरुत्वाकर्षण नहीं है।", correct: false },
      { text: "क्योंकि उसका द्रव्यमान शून्य हो जाता है।", correct: false },
      { text: "क्योंकि वह और उपग्रह दोनों मुक्त पतन की स्थिति में हैं।", correct: true },
      { text: "क्योंकि उपग्रह बहुत तेजी से घूम रहा है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> उपग्रह लगातार पृथ्वी की ओर गिर रहा है (मुक्त पतन), लेकिन उसका क्षैतिज वेग उसे सतह से टकराने से रोकता है, जिससे भारहीनता की स्थिति उत्पन्न होती है।"
  },
  {
    question: "प्रश्न 33. किलोग्राम-भार (Kilogram-force) किसकी इकाई है?",
    answers: shuffle([
      { text: "द्रव्यमान", correct: false },
      { text: "बल या भार", correct: true },
      { text: "ऊर्जा", correct: false },
      { text: "दाब", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह बल की एक गुरुत्वीय इकाई है, जो 1 किलोग्राम द्रव्यमान पर पृथ्वी द्वारा लगाए गए बल के बराबर है।"
  },
  {
    question: "प्रश्न 34. किसी वस्तु के द्रव्यमान और भार का अनुपात (m/W):",
    answers: shuffle([
      { text: "हर जगह स्थिर रहता है", correct: false },
      { text: "'g' के बराबर होता है", correct: false },
      { text: "'1/g' के बराबर होता है", correct: true },
      { text: "स्थान के साथ बदलता है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि W = mg है, इसलिए m/W = m/(mg) = 1/g।<br><br><i class='fa-solid fa-angles-right icon'></i> यह 'g' के मान के साथ बदलता है।"
  },
  {
    question: "प्रश्न 35. यदि पृथ्वी घूमना बंद कर दे, तो भूमध्य रेखा पर किसी वस्तु का भार:",
    answers: shuffle([
      { text: "घट जाएगा", correct: false },
      { text: "बढ़ जाएगा", correct: true },
      { text: "अपरिवर्तित रहेगा", correct: false },
      { text: "शून्य हो जाएगा", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी के घूर्णन के कारण भूमध्य रेखा पर एक अपकेंद्री बल बाहर की ओर लगता है, जो भार को थोड़ा कम करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> घूर्णन बंद होने पर यह प्रभाव समाप्त हो जाएगा।"
  },
  {
    question: "प्रश्न 36. भौतिक तुला से हम क्या मापते हैं?",
    answers: shuffle([
      { text: "दो वस्तुओं के भारों की तुलना", correct: false },
      { text: "दो वस्तुओं के द्रव्यमानों की तुलना", correct: true },
      { text: "एक वस्तु का सटीक भार", correct: false },
      { text: "एक वस्तु का घनत्व", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि तुला के दोनों पलड़ों पर 'g' का प्रभाव समान होता है, यह प्रभावी रूप से द्रव्यमानों की तुलना करती है।"
  },
  {
    question: "प्रश्न 37. निम्नलिखित में से कौन सा कथन सही है?",
    answers: shuffle([
      { text: "द्रव्यमान एक सदिश है और भार एक अदिश है।", correct: false },
      { text: "द्रव्यमान एक अदिश है और भार एक सदिश है।", correct: true },
      { text: "दोनों सदिश राशियाँ हैं।", correct: false },
      { text: "दोनों अदिश राशियाँ हैं।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह द्रव्यमान और भार की प्रकृति के बीच एक मौलिक अंतर है।"
  },
  {
    question: "प्रश्न 38. किसी वस्तु का भार उस पर लगने वाले ________ के बराबर होता है।",
    answers: shuffle([
      { text: "घर्षण बल", correct: false },
      { text: "चुंबकीय बल", correct: false },
      { text: "गुरुत्वाकर्षण बल", correct: true },
      { text: "नाभिकीय बल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> भार की परिभाषा ही वस्तु पर लगने वाला गुरुत्वाकर्षण बल है।"
  },
  {
    question: "प्रश्न 39. जड़त्वीय द्रव्यमान (Inertial mass) और गुरुत्वीय द्रव्यमान (Gravitational mass) सामान्य सापेक्षता के तुल्यता सिद्धांत के अनुसार:",
    answers: shuffle([
      { text: "भिन्न होते हैं।", correct: false },
      { text: "समान होते हैं।", correct: true },
      { text: "एक दूसरे के विपरीत होते हैं।", correct: false },
      { text: "केवल कुछ स्थितियों में समान होते हैं।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक मौलिक सिद्धांत है कि त्वरण का विरोध करने वाला द्रव्यमान (जड़त्वीय) और गुरुत्वाकर्षण बल का अनुभव करने वाला द्रव्यमान (गुरुत्वीय) समान होते हैं।"
  },
  {
    question: "प्रश्न 40. एक पंख और एक पत्थर को निर्वात में एक ही ऊँचाई से गिराया जाता है। कौन पहले जमीन पर पहुँचेगा?",
    answers: shuffle([
      { text: "पत्थर", correct: false },
      { text: "पंख", correct: false },
      { text: "दोनों एक साथ", correct: true },
      { text: "यह उनके द्रव्यमान पर निर्भर करता है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> निर्वात में वायु प्रतिरोध नहीं होता, इसलिए दोनों वस्तुओं पर समान गुरुत्वीय त्वरण 'g' लगता है और वे एक साथ पहुँचती हैं, चाहे उनका द्रव्यमान कुछ भी हो।"
  },
  {
    question: "प्रश्न 41. यदि किसी वस्तु को किसी तरल में डुबोया जाता है, तो उसके भार में कमी का कारण क्या है?",
    answers: shuffle([
      { text: "वस्तु का द्रव्यमान कम हो जाता है", correct: false },
      { text: "गुरुत्वाकर्षण कम हो जाता है", correct: false },
      { text: "तरल द्वारा लगाया गया उत्प्लावन बल", correct: true },
      { text: "श्यानता", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्प्लावन बल ऊपर की ओर कार्य करता है और वस्तु के भार का विरोध करता है, जिससे भार में एक आभासी कमी महसूस होती है।"
  },
  {
    question: "प्रश्न 42. वस्तु का द्रव्यमान उसकी ________ का माप है।",
    answers: shuffle([
      { text: "ऊष्मीय ऊर्जा", correct: false },
      { text: "पदार्थ की मात्रा", correct: true },
      { text: "रासायनिक प्रकृति", correct: false },
      { text: "विद्युत आवेश", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्रव्यमान को मौलिक रूप से किसी वस्तु में मौजूद पदार्थ की मात्रा के रूप में परिभाषित किया गया है।"
  },
  {
    question: "प्रश्न 43. किसी वस्तु का भार अधिकतम कहाँ होता है?",
    answers: shuffle([
      { text: "पृथ्वी के केंद्र पर", correct: false },
      { text: "पृथ्वी की सतह पर", correct: true },
      { text: "पृथ्वी से बहुत दूर अंतरिक्ष में", correct: false },
      { text: "भूमध्य रेखा पर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'g' का मान पृथ्वी की सतह पर अधिकतम होता है (केंद्र में शून्य और ऊँचाई के साथ घटता है), इसलिए भार भी सतह पर अधिकतम होता है।"
  },
  {
    question: "प्रश्न 44. किसी वस्तु के लिए 'g' का मान किस पर निर्भर नहीं करता है?",
    answers: shuffle([
      { text: "ग्रह के द्रव्यमान पर", correct: false },
      { text: "ग्रह की त्रिज्या पर", correct: false },
      { text: "वस्तु के द्रव्यमान पर", correct: true },
      { text: "ग्रह से ऊँचाई पर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुत्वीय त्वरण 'g' केवल उस ग्रह या खगोलीय पिंड का गुण है जिस पर वस्तु स्थित है, यह वस्तु के अपने द्रव्यमान पर निर्भर नहीं करता है।"
  },
  {
    question: "प्रश्न 45. द्रव्यमान और भार के बारे में क्या सच है?",
    answers: shuffle([
      { text: "जहाँ द्रव्यमान है, वहाँ हमेशा भार होता है।", correct: false },
      { text: "जहाँ भार है, वहाँ हमेशा द्रव्यमान होता है।", correct: true },
      { text: "वे एक ही चीज हैं।", correct: false },
      { text: "द्रव्यमान बल का एक रूप है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> भार (W=mg) के अस्तित्व के लिए द्रव्यमान (m) और गुरुत्वाकर्षण (g) दोनों का होना आवश्यक है।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन द्रव्यमान गुरुत्वाकर्षण के बिना भी मौजूद हो सकता है (जैसे गहरे अंतरिक्ष में)।"
  },
  {
    question: "प्रश्न 46. यदि किसी व्यक्ति का पृथ्वी पर द्रव्यमान 60 किलो है, तो चंद्रमा पर उसका द्रव्यमान कितना होगा?",
    answers: shuffle([
      { text: "10 किलो", correct: false },
      { text: "60 किलो", correct: true },
      { text: "360 किलो", correct: false },
      { text: "0 किलो", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्रव्यमान एक स्थिर राशि है और स्थान बदलने पर नहीं बदलता।<br><br><i class='fa-solid fa-angles-right icon'></i> केवल उसका भार बदलेगा।"
  },
  {
    question: "प्रश्न 47. यदि किसी व्यक्ति का पृथ्वी पर भार 600 न्यूटन है, तो चंद्रमा पर उसका भार लगभग कितना होगा?",
    answers: shuffle([
      { text: "600 न्यूटन", correct: false },
      { text: "100 न्यूटन", correct: true },
      { text: "3600 न्यूटन", correct: false },
      { text: "60 न्यूटन", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रमा पर 'g' का मान पृथ्वी का लगभग 1/6 है, इसलिए भार भी 600/6 = 100 न्यूटन हो जाएगा।"
  },
  {
    question: "प्रश्न 48. द्रव्यमान संरक्षण का नियम क्या कहता है?",
    answers: shuffle([
      { text: "किसी विलगित निकाय का कुल द्रव्यमान स्थिर रहता है।", correct: true },
      { text: "किसी विलगित निकाय का कुल भार स्थिर रहता है।", correct: false },
      { text: "द्रव्यमान को ऊर्जा में नहीं बदला जा सकता।", correct: false },
      { text: "द्रव्यमान हमेशा भार के बराबर होता है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक मौलिक संरक्षण नियम है, हालांकि इसे ऊर्जा संरक्षण के साथ द्रव्यमान-ऊर्जा संरक्षण के रूप में संशोधित किया गया है।"
  },
  {
    question: "प्रश्न 49. एक स्प्रिंग तुला का उपयोग ________ में भिन्न पाठ्यांक देगा।",
    answers: shuffle([
      { text: "a) विभिन्न द्रव्यमानों के लिए", correct: false },
      { text: "b) विभिन्न गुरुत्वाकर्षण क्षेत्रों के लिए", correct: false },
      { text: "c) विभिन्न तापमानों के लिए", correct: false },
      { text: "(a) और (b) दोनों", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्प्रिंग तुला भार (mg) को मापती है, इसलिए यह द्रव्यमान (m) और गुरुत्वीय त्वरण (g) दोनों के बदलने पर अलग-अलग पाठ्यांक देगी।"
  },
  {
    question: "प्रश्न 50. एक भौतिक तुला का उपयोग ________ में समान पाठ्यांक देगा।",
    answers: shuffle([
      { text: "विभिन्न द्रव्यमानों के लिए", correct: false },
      { text: "विभिन्न गुरुत्वाकर्षण क्षेत्रों के लिए", correct: true },
      { text: "विभिन्न तापमानों के लिए", correct: false },
      { text: "इनमें से कोई नहीं", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक भौतिक तुला द्रव्यमानों की तुलना करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि एक ज्ञात द्रव्यमान के साथ किसी वस्तु को संतुलित किया जाता है, तो यह माप चंद्रमा पर भी समान रहेगा क्योंकि 'g' दोनों पलड़ों से रद्द हो जाता है।"
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