const questions = [
  {
    topHeading: " मात्रक और मापन पर आधारित 50 MCQs,part_1 (quiz_no.2)"
  },
  {
    question: "प्रश्न 1. निम्नलिखित में से कौन सी एक अदिश राशि है?",
    answers: shuffle([
      { text: "संवेग", correct: false },
      { text: "दाब", correct: true },
      { text: "आवेग", correct: false },
      { text: "कोणीय संवेग", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> दाब एक अदिश राशि है क्योंकि इसे व्यक्त करने के लिए केवल परिमाण की आवश्यकता होती है, दिशा की नहीं।<br><br><i class='fa-solid fa-angles-right icon'></i> संवेग, आवेग और कोणीय संवेग सदिश राशियाँ हैं।"
  },
  {
    question: "प्रश्न 2. 'पारसेक' (Parsec) किसकी मापन इकाई है?",
    answers: shuffle([
      { text: "तारों का घनत्व", correct: false },
      { text: "खगोलीय दूरी", correct: true },
      { text: "खगोलीय पिंडों की चमक", correct: false },
      { text: "विशालकाय तारों का कक्षीय वेग", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारसेक खगोलीय दूरी को मापने की एक इकाई है।<br><br><i class='fa-solid fa-angles-right icon'></i> एक पारसेक लगभग 3.26 प्रकाश-वर्ष के बराबर होता है।"
  },
  {
    question: "प्रश्न 3. बल का SI मात्रक क्या है?",
    answers: shuffle([
      { text: "पास्कल", correct: false },
      { text: "न्यूटन", correct: true },
      { text: "वॉट", correct: false },
      { text: "जूल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> बल का SI मात्रक न्यूटन (N) है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह किलोग्राम-मीटर प्रति सेकंड वर्ग (kg⋅m/s2) के बराबर होता है।"
  },
  {
    question: "प्रश्न 4. एक माइक्रोन किसके बराबर होता है?",
    answers: shuffle([
      { text: "10−3 मीटर", correct: false },
      { text: "10−6 मीटर", correct: true },
      { text: "10−9 मीटर", correct: false },
      { text: "10−12 मीटर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक माइक्रोन (या माइक्रोमीटर) 10−6 मीटर के बराबर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका उपयोग बहुत छोटी लंबाई, जैसे कि जीवाणुओं के आकार को मापने के लिए किया जाता है।"
  },
  {
    question: "प्रश्न 5. कार्य का SI मात्रक क्या है?",
    answers: shuffle([
      { text: "डाइन", correct: false },
      { text: "अर्ग", correct: false },
      { text: "जूल", correct: true },
      { text: "वॉट", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्य का SI मात्रक जूल (J) है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक न्यूटन बल द्वारा किसी वस्तु को बल की दिशा में एक मीटर विस्थापित करने में किए गए कार्य के बराबर है।"
  },
  {
    question: "प्रश्न 6. निम्नलिखित में से कौन सा एक व्युत्पन्न मात्रक नहीं है?",
    answers: shuffle([
      { text: "घनत्व", correct: false },
      { text: "आयतन", correct: false },
      { text: "द्रव्यमान", correct: true },
      { text: "चाल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्रव्यमान एक मूल भौतिक राशि है और इसका मात्रक (किलोग्राम) एक मूल मात्रक है।<br><br><i class='fa-solid fa-angles-right icon'></i> घनत्व, आयतन और चाल व्युत्पन्न राशियाँ हैं जिनके मात्रक मूल मात्रकों से प्राप्त किए जाते हैं।"
  },
  {
    question: "प्रश्न 7. प्रकाश वर्ष (Light Year) किसकी इकाई है?",
    answers: shuffle([
      { text: "समय", correct: false },
      { text: "दूरी", correct: true },
      { text: "प्रकाश की तीव्रता", correct: false },
      { text: "प्रकाश का वेग", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश वर्ष दूरी की एक इकाई है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह वह दूरी है जो प्रकाश एक वर्ष में निर्वात में तय करता है।"
  },
  {
    question: "प्रश्न 8. त्वरण का विमीय सूत्र क्या है?",
    answers: shuffle([
      { text: "[LT−1]", correct: false },
      { text: "[LT−2]", correct: true },
      { text: "[MLT−2]", correct: false },
      { text: "[ML−1T−2]", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> त्वरण वेग में परिवर्तन की दर है (वेग/समय)।<br><br><i class='fa-solid fa-angles-right icon'></i> वेग का विमीय सूत्र [LT−1] है, इसलिए त्वरण का विमीय सूत्र [LT−1]/[T]=[LT−2] होता है।"
  },
  {
    question: "प्रश्न 9. एक बैरल में लगभग कितने लीटर होते हैं?",
    answers: shuffle([
      { text: "131 लीटर", correct: false },
      { text: "159 लीटर", correct: true },
      { text: "259 लीटर", correct: false },
      { text: "321 लीटर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक बैरल, विशेष रूप से कच्चे तेल के माप में, लगभग 159 लीटर के बराबर होता है।"
  },
  {
    question: "प्रश्न 10. शक्ति (Power) की इकाई क्या है?",
    answers: shuffle([
      { text: "हर्ट्ज", correct: false },
      { text: "वोल्ट", correct: false },
      { text: "वॉट", correct: true },
      { text: "न्यूटन", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक्ति की SI इकाई वॉट (W) है, जो प्रति सेकंड एक जूल (J/s) के बराबर है।"
  },
  {
    question: "प्रश्न 11. ऐम्पियर क्या मापने की इकाई है?",
    answers: shuffle([
      { text: "वोल्टेज", correct: false },
      { text: "विद्युत धारा", correct: true },
      { text: "प्रतिरोध", correct: false },
      { text: "शक्ति", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऐम्पियर (A) विद्युत धारा को मापने की SI मूल इकाई है।"
  },
  {
    question: "प्रश्न 12. ऊर्जा की CGS पद्धति में इकाई क्या है?",
    answers: shuffle([
      { text: "जूल", correct: false },
      { text: "न्यूटन", correct: false },
      { text: "डाइन", correct: false },
      { text: "अर्ग", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊर्जा की CGS (सेंटीमीटर-ग्राम-सेकंड) इकाई अर्ग है।<br><br><i class='fa-solid fa-angles-right icon'></i> 1 जूल = 107 अर्ग होता है।"
  },
  {
    question: "प्रश्न 13. ऊष्मागतिक तापक्रम की SI इकाई क्या है?",
    answers: shuffle([
      { text: "सेल्सियस", correct: false },
      { text: "फारेनहाइट", correct: false },
      { text: "केल्विन", correct: true },
      { text: "रयूमर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊष्मागतिक तापक्रम की SI मूल इकाई केल्विन (K) है।"
  },
  {
    question: "प्रश्न 14. एक खगोलीय इकाई (Astronomical Unit) किससे संबंधित है?",
    answers: shuffle([
      { text: "सूर्य और पृथ्वी के बीच की दूरी से", correct: true },
      { text: "चंद्रमा और पृथ्वी के बीच की दूरी से", correct: false },
      { text: "सूर्य और चंद्रमा के बीच की दूरी से", correct: false },
      { text: "प्लूटो और सूर्य के बीच की दूरी से", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक खगोलीय इकाई (AU) पृथ्वी के केंद्र से सूर्य के केंद्र तक की औसत दूरी है, जो लगभग 149.6 मिलियन किलोमीटर है।"
  },
  {
    question: "प्रश्न 15. 'डॉब्सन इकाई' का प्रयोग किसे मापने के लिए किया जाता है?",
    answers: shuffle([
      { text: "पृथ्वी की मोटाई", correct: false },
      { text: "हीरे की मोटाई", correct: false },
      { text: "ओजोन परत की मोटाई", correct: true },
      { text: "शोर का मापन", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> डॉब्सन इकाई का उपयोग समतापमंडल में ओजोन परत की मोटाई को मापने के लिए किया जाता है।"
  },
  {
    question: "प्रश्न 16. दाब का विमीय सूत्र क्या है?",
    answers: shuffle([
      { text: "[MLT−2]", correct: false },
      { text: "[ML−1T−2]", correct: true },
      { text: "[ML−1T−1]", correct: false },
      { text: "[MLT−1]", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> दाब = बल / क्षेत्रफल।<br><br><i class='fa-solid fa-angles-right icon'></i> बल का विमीय सूत्र [MLT−2] और क्षेत्रफल का [L2] होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, दाब का विमीय सूत्र [MLT−2]/[L2]=[ML−1T−2] है।"
  },
  {
    question: "प्रश्न 17. 'क्यूसेक' (Cusec) में क्या मापा जाता है?",
    answers: shuffle([
      { text: "जल की शुद्धता", correct: false },
      { text: "जल की गहराई", correct: false },
      { text: "जल का बहाव", correct: true },
      { text: "जल की मात्रा", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्यूसेक 'क्यूबिक फीट प्रति सेकंड' का संक्षिप्त रूप है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह जल के बहाव (प्रवाह की दर) को मापने की इकाई है, जिसका उपयोग आमतौर पर नदियों और नहरों में किया जाता है।"
  },
  {
    question: "प्रश्न 18. यंग प्रत्यास्थता गुणांक का SI मात्रक क्या है?",
    answers: shuffle([
      { text: "डाइन/सेमी", correct: false },
      { text: "न्यूटन/मीटर", correct: false },
      { text: "न्यूटन/मीटर²", correct: true },
      { text: "मीटर²/सेकंड", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यंग प्रत्यास्थता गुणांक = प्रतिबल / विकृति।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि विकृति विमाहीन होती है, यंग गुणांक का मात्रक प्रतिबल के मात्रक के समान होता है, जो न्यूटन प्रति वर्ग मीटर (N/m2) या पास्कल (Pa) है।"
  },
  {
    question: "प्रश्न 19. निम्नलिखित में से कौन सी एक सदिश राशि नहीं है?",
    answers: shuffle([
      { text: "विस्थापन", correct: false },
      { text: "वेग", correct: false },
      { text: "बल", correct: false },
      { text: "आयतन", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> आयतन एक अदिश राशि है, क्योंकि इसे व्यक्त करने के लिए केवल परिमाण की आवश्यकता होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> विस्थापन, वेग और बल सदिश राशियाँ हैं, जिन्हें परिमाण और दिशा दोनों की आवश्यकता होती है।"
  },
  {
    question: "प्रश्न 20. 'एंगस्ट्रॉम' क्या मापता है?",
    answers: shuffle([
      { text: "आवृत्ति", correct: false },
      { text: "तरंगदैर्ध्य", correct: true },
      { text: "आवर्तकाल", correct: false },
      { text: "समय", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंगस्ट्रॉम (Å) लंबाई की एक इकाई है जिसका उपयोग मुख्य रूप से प्रकाश की तरंगदैर्ध्य को व्यक्त करने के लिए किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 1 एंगस्ट्रॉम = 10−10 मीटर।"
  },
  {
    question: "प्रश्न 21. एक हॉर्स पावर (Horse Power) में कितने वॉट होते हैं?",
    answers: shuffle([
      { text: "1000", correct: false },
      { text: "750", correct: false },
      { text: "746", correct: true },
      { text: "748", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक अश्वशक्ति (हॉर्स पावर) लगभग 746 वॉट के बराबर होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शक्ति मापने की एक पुरानी इकाई है।"
  },
  {
    question: "प्रश्न 22. जड़त्व आघूर्ण का SI मात्रक क्या है?",
    answers: shuffle([
      { text: "kg⋅m2", correct: true },
      { text: "kg⋅m", correct: false },
      { text: "kg/m2", correct: false },
      { text: "kg⋅m/s", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जड़त्व आघूर्ण (Moment of Inertia) का सूत्र I=mr2 होता है, जहाँ m द्रव्यमान है और r घूर्णन अक्ष से दूरी है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, इसका SI मात्रक किलोग्राम-मीटर वर्ग (kg⋅m2) है।"
  },
  {
    question: "प्रश्न 23. एक फैदम किसके बराबर है?",
    answers: shuffle([
      { text: "6 फीट", correct: true },
      { text: "6 मीटर", correct: false },
      { text: "60 फीट", correct: false },
      { text: "100 सेमी", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> फैदम गहराई मापने की एक इकाई है, जिसका उपयोग विशेष रूप से समुद्री गहराई के लिए किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> एक फैदम 6 फीट के बराबर होता है।"
  },
  {
    question: "प्रश्न 24. कौन सा उपकरण वायुमंडलीय दाब को मापने के लिए उपयोग किया जाता है?",
    answers: shuffle([
      { text: "हाइड्रोमीटर", correct: false },
      { text: "बैरोमीटर", correct: true },
      { text: "मैनोमीटर", correct: false },
      { text: "हाइग्रोमीटर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैरोमीटर का उपयोग वायुमंडलीय दाब को मापने के लिए किया जाता है।"
  },
  {
    question: "प्रश्न 25. पृष्ठ तनाव का SI मात्रक क्या है?",
    answers: shuffle([
      { text: "न्यूटन/मीटर", correct: true },
      { text: "न्यूटन/मीटर²", correct: false },
      { text: "जूल/मीटर", correct: false },
      { text: "वॉट/मीटर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृष्ठ तनाव को प्रति इकाई लंबाई पर लगने वाले बल के रूप में परिभाषित किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, इसका SI मात्रक न्यूटन प्रति मीटर (N/m) है।"
  },
  {
    question: "प्रश्न 26. 1 किलोग्राम/सेमी² दाब किसके समतुल्य है?",
    answers: shuffle([
      { text: "0.1 बार", correct: false },
      { text: "1.0 बार", correct: true },
      { text: "10.0 बार", correct: false },
      { text: "100.0 बार", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> दाब की एक इकाई 'बार' है, जो लगभग एक वायुमंडलीय दाब के बराबर होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> 1 किलोग्राम/सेमी² दाब लगभग 0.98 बार के बराबर होता है, जिसे सामान्यतः 1.0 बार के समतुल्य माना जाता है।"
  },
  {
    question: "प्रश्न 27. कोणीय वेग का विमीय सूत्र क्या है?",
    answers: shuffle([
      { text: "[M0L0T−1]", correct: true },
      { text: "[MLT−1]", correct: false },
      { text: "[M0L1T−2]", correct: false },
      { text: "[ML2T−2]", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोणीय वेग (omega) = कोणीय विस्थापन (theta) / समय (t)।<br><br><i class='fa-solid fa-angles-right icon'></i> कोणीय विस्थापन एक विमाहीन राशि है, इसलिए कोणीय वेग का विमीय सूत्र [T−1] या [M0L0T−1] होता है।"
  },
  {
    question: "प्रश्न 28. सोनार (SONAR) में हम उपयोग करते हैं:",
    answers: shuffle([
      { text: "रेडियो तरंगों का", correct: false },
      { text: "श्रव्य ध्वनि तरंगों का", correct: false },
      { text: "पराश्रव्य तरंगों का", correct: true },
      { text: "अवश्रव्य तरंगों का", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोनार (साउंड नेविगेशन एंड रेंजिंग) पानी के नीचे वस्तुओं का पता लगाने के लिए पराश्रव्य तरंगों (Ultrasound waves) का उपयोग करता है।"
  },
  {
    question: "प्रश्न 29. दूध के घनत्व को किसके द्वारा मापा जाता है?",
    answers: shuffle([
      { text: "लैक्टोमीटर", correct: true },
      { text: "हाइड्रोमीटर", correct: false },
      { text: "बैरोमीटर", correct: false },
      { text: "हाइग्रोमीटर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैक्टोमीटर एक विशेष प्रकार का हाइड्रोमीटर है जिसका उपयोग दूध के घनत्व या शुद्धता को मापने के लिए किया जाता है।"
  },
  {
    question: "प्रश्न 30. विद्युत विभव का SI मात्रक क्या है?",
    answers: shuffle([
      { text: "ऐम्पियर", correct: false },
      { text: "कूलॉम", correct: false },
      { text: "ओम", correct: false },
      { text: "वोल्ट", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत विभव या विभवांतर का SI मात्रक वोल्ट (V) है।"
  },
  {
    question: "प्रश्न 31. गुरुत्वाकर्षण नियतांक (G) का विमीय सूत्र क्या है?",
    answers: shuffle([
      { text: "[ML3T−2]", correct: false },
      { text: "[M−1L3T−2]", correct: true },
      { text: "[M−1L−3T2]", correct: false },
      { text: "[ML−3T2]", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन के गुरुत्वाकर्षण नियम F=G(m1m2/r2) से, G=Fr2/(m1m2) होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> विमाओं को रखने पर, [G]=[MLT−2][L2]/[M2]=[M−1L3T−2] होता है।"
  },
  {
    question: "प्रश्न 32. 'नॉटिकल मील' इकाई का प्रयोग कहाँ किया जाता है?",
    answers: shuffle([
      { text: "सड़क दूरी में", correct: false },
      { text: "खगोल विज्ञान में", correct: false },
      { text: "नौसंचालन में", correct: true },
      { text: "रेलमार्ग की लंबाई में", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> नॉटिकल मील (समुद्री मील) का उपयोग समुद्री और हवाई नौसंचालन में दूरी मापने के लिए किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 1 नॉटिकल मील लगभग 1.852 किलोमीटर के बराबर होता है।"
  },
  {
    question: "प्रश्न 33. एक नैनोमीटर किसके बराबर है?",
    answers: shuffle([
      { text: "10−6 सेमी", correct: false },
      { text: "10−7 सेमी", correct: true },
      { text: "10−8 सेमी", correct: false },
      { text: "10−9 सेमी", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक नैनोमीटर (nm) = 10−9 मीटर।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि 1 मीटर = 100 सेमी, तो 1 नैनोमीटर = 10−9×100 सेमी = 10−7 सेमी।"
  },
  {
    question: "प्रश्न 34. ल्यूमेन (Lumen) किसका मात्रक है?",
    answers: shuffle([
      { text: "ज्योति तीव्रता", correct: false },
      { text: "ज्योति फ्लक्स", correct: true },
      { text: "प्रदीप्ति घनत्व", correct: false },
      { text: "चमक", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> ल्यूमेन ज्योति फ्लक्स (Luminous flux) का SI मात्रक है, जो किसी प्रकाश स्रोत द्वारा प्रति सेकंड उत्सर्जित कुल दृश्य प्रकाश की मात्रा को मापता है।"
  },
  {
    question: "प्रश्न 35. एक पिको ग्राम बराबर होता है:",
    answers: shuffle([
      { text: "10−6 ग्राम के", correct: false },
      { text: "10−9 ग्राम के", correct: false },
      { text: "10−12 ग्राम के", correct: true },
      { text: "10−15 ग्राम के", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पिको' SI उपसर्ग 10−12 को दर्शाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, एक पिको ग्राम 10−12 ग्राम के बराबर होता है।"
  },
  {
    question: "प्रश्न 36. एक किलोमीटर दूरी का तात्पर्य है:",
    answers: shuffle([
      { text: "100 मीटर", correct: false },
      { text: "1000 सेंटीमीटर", correct: false },
      { text: "1000 मीटर", correct: true },
      { text: "100 सेंटीमीटर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'किलो' उपसर्ग 1000 को दर्शाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, एक किलोमीटर 1000 मीटर के बराबर होता है।"
  },
  {
    question: "प्रश्न 37. विद्युत प्रतिरोधकता (Resistivity) का SI मात्रक क्या है?",
    answers: shuffle([
      { text: "ओम", correct: false },
      { text: "ओम/मीटर", correct: false },
      { text: "ओम-मीटर", correct: true },
      { text: "महो", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिरोधकता का सूत्र ρ = RA/L होता है, जहाँ R प्रतिरोध, A क्षेत्रफल और L लंबाई है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका मात्रक (ओम)(मीटर²)/मीटर = ओम-मीटर (Ω•m) होता है।"
  },
  {
    question: "प्रश्न 38. फर्मी (Fermi) वह मात्रक है जो व्यक्त करने के लिए प्रयोग किया जाता है:",
    answers: shuffle([
      { text: "संवेग", correct: false },
      { text: "ऊर्जा", correct: false },
      { text: "आवेग", correct: false },
      { text: "लंबाई", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> फर्मी लंबाई की एक बहुत छोटी इकाई है, जो 10−15 मीटर के बराबर होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका उपयोग परमाणु नाभिक के आकार को व्यक्त करने के लिए किया जाता है।"
  },
  {
    question: "प्रश्न 39. ध्वनि की तीव्रता को मापने वाला यंत्र है:",
    answers: shuffle([
      { text: "क्रोनोमीटर", correct: false },
      { text: "एनीमोमीटर", correct: false },
      { text: "ऑडियो फोन", correct: false },
      { text: "ऑडियोमीटर", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑडियोमीटर का उपयोग ध्वनि की तीव्रता को मापने के लिए किया जाता है।"
  },
  {
    question: "प्रश्न 40. पाइरोमीटर किसके मापन में प्रयोग किया जाता है?",
    answers: shuffle([
      { text: "वायुमंडलीय दाब के", correct: false },
      { text: "आर्द्रता के", correct: false },
      { text: "उच्च ताप के", correct: true },
      { text: "घनत्व के", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> पाइरोमीटर एक दूरस्थ-संवेदी थर्मामीटर है जिसका उपयोग दूर की वस्तुओं के उच्च तापमान को मापने के लिए किया जाता है, जैसे कि भट्टियों का तापमान।"
  },
  {
    question: "प्रश्न 41. सीस्मोग्राफ क्या रिकॉर्ड करता है?",
    answers: shuffle([
      { text: "हृदय की धड़कन", correct: false },
      { text: "वायुमंडल का दबाव", correct: false },
      { text: "भूचाल (भूकंप)", correct: true },
      { text: "इनमें से कोई नहीं", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> सीस्मोग्राफ एक उपकरण है जो भूकंप के कारण होने वाली जमीनी हलचल (भूकंपीय तरंगों) को रिकॉर्ड करता है।"
  },
  {
    question: "प्रश्न 42. बल आघूर्ण का SI मात्रक क्या है?",
    answers: shuffle([
      { text: "न्यूटन", correct: false },
      { text: "न्यूटन-मीटर", correct: true },
      { text: "न्यूटन/मीटर", correct: false },
      { text: "न्यूटन-सेकंड", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> बल आघूर्ण (Torque) = बल × दूरी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, इसका SI मात्रक न्यूटन-मीटर (N•m) है।"
  },
  {
    question: "प्रश्न 43. निम्नलिखित में से किस राशि का मात्रक नहीं है?",
    answers: shuffle([
      { text: "प्रतिबल", correct: false },
      { text: "बल", correct: false },
      { text: "विकृति", correct: true },
      { text: "दाब", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> विकृति (Strain) लंबाई में परिवर्तन और मूल लंबाई का अनुपात है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि यह समान राशियों का अनुपात है, इसलिए यह एक मात्रकहीन और विमाहीन राशि है।"
  },
  {
    question: "प्रश्न 44. 'हर्ट्ज' (Hertz) क्या मापने की यूनिट है?",
    answers: shuffle([
      { text: "तरंगदैर्ध्य", correct: false },
      { text: "तरंगों की तीव्रता", correct: false },
      { text: "तरंगों की आवृत्ति", correct: true },
      { text: "तरंगों की स्पष्टता", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्ट्ज (Hz) आवृत्ति की SI इकाई है।<br><br><i class='fa-solid fa-angles-right icon'></i> एक हर्ट्ज का अर्थ है प्रति सेकंड एक चक्र।"
  },
  {
    question: "प्रश्न 45. रेडियोधर्मिता की इकाई क्या है?",
    answers: shuffle([
      { text: "क्यूरी", correct: false },
      { text: "बेकुरल", correct: false },
      { text: "रदरफोर्ड", correct: false },
      { text: "ये सभी", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्यूरी, बेकुरल (SI इकाई) और रदरफोर्ड, ये सभी रेडियोधर्मिता को मापने की इकाइयाँ हैं।"
  },
  {
    question: "प्रश्न 46. प्लांक नियतांक (h) का विमीय सूत्र क्या है?",
    answers: shuffle([
      { text: "[ML2T−1]", correct: true },
      { text: "[MLT−1]", correct: false },
      { text: "[ML2T−2]", correct: false },
      { text: "[MLT−2]", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊर्जा के सूत्र E = hν से, h = E/ν होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ऊर्जा (E) की विमा [ML2T−2] और आवृत्ति (ν) की विमा [T−1] है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, h की विमा [ML2T−2]/[T−1]=[ML2T−1] है।"
  },
  {
    question: "प्रश्न 47. एक प्रकाश वर्ष में कितने मीटर होते हैं?",
    answers: shuffle([
      { text: "9.46×1012 मी", correct: false },
      { text: "9.46×1015 मी", correct: true },
      { text: "3.08×1016 मी", correct: false },
      { text: "1.496×1011 मी", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक प्रकाश वर्ष वह दूरी है जो प्रकाश एक वर्ष में तय करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका मान लगभग 9.46×1015 मीटर होता है।"
  },
  {
    question: "प्रश्न 48. प्रेरकत्व (Inductance) का मात्रक है:",
    answers: shuffle([
      { text: "वेबर", correct: false },
      { text: "ओम", correct: false },
      { text: "हेनरी", correct: true },
      { text: "टेस्ला", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रेरकत्व का SI मात्रक हेनरी (H) है।"
  },
  {
    question: "प्रश्न 49. चुंबकीय फ्लक्स का SI मात्रक क्या है?",
    answers: shuffle([
      { text: "टेस्ला", correct: false },
      { text: "वेबर", correct: true },
      { text: "हेनरी", correct: false },
      { text: "गॉस", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> चुंबकीय फ्लक्स का SI मात्रक वेबर (Wb) है।"
  },
  {
    question: "प्रश्न 50. एक फेम्टोमीटर किसके तुल्य होता है?",
    answers: shuffle([
      { text: "10−9 मीटर", correct: false },
      { text: "10−12 मीटर", correct: false },
      { text: "10−15 मीटर", correct: true },
      { text: "10−18 मीटर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'फेम्टो' SI उपसर्ग 10−15 को दर्शाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, एक फेम्टोमीटर 10−15 मीटर के बराबर होता है। इसे फर्मी भी कहते हैं।"
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