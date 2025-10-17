const questions = [
  {
    topHeading: " मात्रक पद्धति पर आधारित 50 MCQs,part_1 (quiz_no.2)"
  },
  {
    question: "प्रश्न 1: अंतर्राष्ट्रीय मात्रक प्रणाली (SI) में लंबाई की मूल इकाई क्या है?",
    answers: shuffle([
      { text: "सेंटीमीटर", correct: false },
      { text: "मीटर", correct: true },
      { text: "किलोमीटर", correct: false },
      { text: "मील", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> SI पद्धति में लंबाई की सात मूल इकाइयों में से एक मीटर है।"
  },
  {
    question: "प्रश्न 2: निम्नलिखित में से कौन सी एक मूल भौतिक राशि नहीं है?",
    answers: shuffle([
      { text: "द्रव्यमान", correct: false },
      { text: "समय", correct: false },
      { text: "वेग", correct: true },
      { text: "तापमान", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेग एक व्युत्पन्न राशि है क्योंकि यह लंबाई (दूरी) और समय पर निर्भर करती है (वेग = दूरी/समय)।<br><br><i class='fa-solid fa-angles-right icon'></i> द्रव्यमान, समय और तापमान मूल राशियाँ हैं।"
  },
  {
    question: "प्रश्न 3: CGS प्रणाली का पूर्ण रूप क्या है?",
    answers: shuffle([
      { text: "सेंटीमीटर-ग्राम-सेकंड", correct: true },
      { text: "कूलॉम-गॉस-सेकंड", correct: false },
      { text: "सेंटीमीटर-गैलन-सेकंड", correct: false },
      { text: "कैलोरी-ग्राम-सेकंड", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> CGS मात्रक पद्धति में लंबाई को सेंटीमीटर में, द्रव्यमान को ग्राम में और समय को सेकंड में मापा जाता है।"
  },
  {
    question: "प्रश्न 4: FPS पद्धति में द्रव्यमान की इकाई क्या है?",
    answers: shuffle([
      { text: "ग्राम", correct: false },
      { text: "किलोग्राम", correct: false },
      { text: "पाउंड", correct: true },
      { text: "स्लग", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> FPS (फुट-पाउंड-सेकंड) पद्धति में द्रव्यमान की इकाई पाउंड होती है।"
  },
  {
    question: "प्रश्न 5: MKS पद्धति में बल की इकाई क्या है?",
    answers: shuffle([
      { text: "डाइन", correct: false },
      { text: "पाउंडल", correct: false },
      { text: "न्यूटन", correct: true },
      { text: "जूल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> MKS (मीटर-किलोग्राम-सेकंड) पद्धति में, बल की इकाई न्यूटन होती है, जो kg⋅m/s2 के बराबर है।"
  },
  {
    question: "प्रश्न 6: SI प्रणाली में कुल कितनी मूल इकाइयाँ परिभाषित हैं?",
    answers: shuffle([
      { text: "5", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false },
      { text: "9", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> SI प्रणाली में सात मूल इकाइयाँ हैं: मीटर, किलोग्राम, सेकंड, ऐम्पियर, केल्विन, मोल और कैंडेला।"
  },
  {
    question: "प्रश्न 7: निम्नलिखित में से कौन सी एक SI पूरक इकाई है?",
    answers: shuffle([
      { text: "मीटर", correct: false },
      { text: "किलोग्राम", correct: false },
      { text: "रेडियन", correct: true },
      { text: "केल्विन", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> SI प्रणाली में दो पूरक इकाइयाँ हैं: रेडियन (समतल कोण के लिए) और स्टेरेडियन (ठोस कोण के लिए)।"
  },
  {
    question: "प्रश्न 8: CGS पद्धति में कार्य या ऊर्जा की इकाई क्या है?",
    answers: shuffle([
      { text: "जूल", correct: false },
      { text: "न्यूटन", correct: false },
      { text: "अर्ग", correct: true },
      { text: "वॉट", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> CGS प्रणाली में ऊर्जा की इकाई अर्ग होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> 1 जूल 107 अर्ग के बराबर होता है।"
  },
  {
    question: "प्रश्न 9: 1 न्यूटन कितने डाइन के बराबर होता है?",
    answers: shuffle([
      { text: "103", correct: false },
      { text: "105", correct: true },
      { text: "107", correct: false },
      { text: "109", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> बल की MKS इकाई (न्यूटन) और CGS इकाई (डाइन) के बीच संबंध है: 1 न्यूटन = 105 डाइन।"
  },
  {
    question: "प्रश्न 10: 'ऐम्पियर' किस भौतिक राशि की SI इकाई है?",
    answers: shuffle([
      { text: "विद्युत आवेश", correct: false },
      { text: "विद्युत विभव", correct: false },
      { text: "विद्युत प्रतिरोध", correct: false },
      { text: "विद्युत धारा", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऐम्पियर विद्युत धारा की SI मूल इकाई है।"
  },
  {
    question: "प्रश्न 11: पदार्थ की मात्रा को मापने के लिए SI इकाई कौन सी है?",
    answers: shuffle([
      { text: "ग्राम", correct: false },
      { text: "किलोग्राम", correct: false },
      { text: "मोल", correct: true },
      { text: "अणु", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोल पदार्थ की मात्रा की SI मूल इकाई है, जो कणों की एक निश्चित संख्या (अवोगाद्रो संख्या) को दर्शाती है।"
  },
  {
    question: "प्रश्न 12: ऊष्मागतिक तापमान की SI मूल इकाई क्या है?",
    answers: shuffle([
      { text: "सेल्सियस", correct: false },
      { text: "फारेनहाइट", correct: false },
      { text: "केल्विन", correct: true },
      { text: "डिग्री", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊष्मागतिक तापमान की SI मूल इकाई केल्विन (K) है।"
  },
  {
    question: "प्रश्न 13: MKS प्रणाली किस प्रणाली का विस्तारित रूप है?",
    answers: shuffle([
      { text: "CGS प्रणाली", correct: false },
      { text: "FPS प्रणाली", correct: false },
      { text: "SI प्रणाली", correct: true },
      { text: "यह एक स्वतंत्र प्रणाली है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> SI (अंतर्राष्ट्रीय प्रणाली) MKS प्रणाली का ही एक तर्कसंगत और विस्तारित रूप है, जिसमें चार और मूल इकाइयों को जोड़ा गया है।"
  },
  {
    question: "प्रश्न 14: ज्योति तीव्रता की SI इकाई क्या है?",
    answers: shuffle([
      { text: "ल्यूमेन", correct: false },
      { text: "लक्स", correct: false },
      { text: "कैंडेला", correct: true },
      { text: "वेबर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैंडेला (cd) ज्योति तीव्रता की SI मूल इकाई है।"
  },
  {
    question: "प्रश्न 15: FPS पद्धति को और किस नाम से जाना जाता है?",
    answers: shuffle([
      { text: "मीट्रिक प्रणाली", correct: false },
      { text: "फ्रांसीसी प्रणाली", correct: false },
      { text: "ब्रिटिश प्रणाली", correct: true },
      { text: "जर्मन प्रणाली", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> FPS (फुट-पाउंड-सेकंड) पद्धति को आमतौर पर ब्रिटिश इंजीनियरिंग प्रणाली के रूप में भी जाना जाता है।"
  },
  {
    question: "प्रश्न 16: 'स्टेरेडियन' किसकी इकाई है?",
    answers: shuffle([
      { text: "समतल कोण", correct: false },
      { text: "ठोस कोण (घनकोण)", correct: true },
      { text: "चुंबकीय क्षेत्र", correct: false },
      { text: "दूरी", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्टेरेडियन ठोस कोण को मापने के लिए एक SI पूरक इकाई है।"
  },
  {
    question: "प्रश्न 17: CGS पद्धति में बल की इकाई क्या है?",
    answers: shuffle([
      { text: "न्यूटन", correct: false },
      { text: "पास्कल", correct: false },
      { text: "डाइन", correct: true },
      { text: "वॉट", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> CGS पद्धति में बल की इकाई डाइन है, जो g⋅cm/s2 के बराबर होती है।"
  },
  {
    question: "प्रश्न 18: निम्नलिखित में से कौन सी इकाई सभी मात्रक प्रणालियों (SI, CGS, FPS) में समान है?",
    answers: shuffle([
      { text: "द्रव्यमान", correct: false },
      { text: "लंबाई", correct: false },
      { text: "समय", correct: true },
      { text: "बल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> समय की इकाई 'सेकंड' SI, CGS और FPS तीनों प्रणालियों में समान रूप से उपयोग की जाती है।"
  },
  {
    question: "प्रश्न 19: मीट्रिक प्रणाली किस पर आधारित है?",
    answers: shuffle([
      { text: "2 की घात पर", correct: false },
      { text: "5 की घात पर", correct: false },
      { text: "10 की घात पर", correct: true },
      { text: "12 की घात पर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> मीट्रिक प्रणालियाँ (जैसे CGS और MKS/SI) 10 की घातों पर आधारित होती हैं, जिससे इकाइयों का रूपांतरण सरल हो जाता है।"
  },
  {
    question: "प्रश्न 20: 1 पाउंड में लगभग कितने ग्राम होते हैं?",
    answers: shuffle([
      { text: "100 ग्राम", correct: false },
      { text: "250 ग्राम", correct: false },
      { text: "453.6 ग्राम", correct: true },
      { text: "1000 ग्राम", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1 पाउंड (FPS इकाई) लगभग 453.6 ग्राम के बराबर होता है।"
  },
  {
    question: "प्रश्न 21: कौन सी मात्रक पद्धति को 'गॉसियन प्रणाली' भी कहा जाता है?",
    answers: shuffle([
      { text: "MKS", correct: false },
      { text: "FPS", correct: false },
      { text: "SI", correct: false },
      { text: "CGS", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> CGS प्रणाली को, विशेष रूप से विद्युत चुंबकत्व के संदर्भ में, गॉसियन प्रणाली भी कहा जाता है।"
  },
  {
    question: "प्रश्न 22: 1 फुट में कितने सेंटीमीटर होते हैं?",
    answers: shuffle([
      { text: "25.4 सेमी", correct: false },
      { text: "30.48 सेमी", correct: true },
      { text: "50.8 सेमी", correct: false },
      { text: "100 सेमी", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1 फुट (FPS इकाई) 12 इंच के बराबर होता है, और यह लगभग 30.48 सेंटीमीटर के तुल्य है।"
  },
  {
    question: "प्रश्न 23: SI उपसर्ग 'गिगा' का मान क्या है?",
    answers: shuffle([
      { text: "106", correct: false },
      { text: "109", correct: true },
      { text: "1012", correct: false },
      { text: "10−9", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गिगा' (G) 10 की घात 9 को दर्शाता है, जैसे गीगाबाइट या गीगावाट में।"
  },
  {
    question: "प्रश्न 24: SI उपसर्ग 'नैनो' का मान क्या है?",
    answers: shuffle([
      { text: "10−6", correct: false },
      { text: "10−9", correct: true },
      { text: "10−12", correct: false },
      { text: "10−15", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नैनो' (n) 10 की घात -9 को दर्शाता है, जैसे नैनोमीटर या नैनोसेकंड में।"
  },
  {
    question: "प्रश्न 25: MKSQ प्रणाली में 'Q' किसे दर्शाता है?",
    answers: shuffle([
      { text: "आवेश (चार्ज)", correct: true },
      { text: "गुणवत्ता (क्वालिटी)", correct: false },
      { text: "मात्रा (क्वांटिटी)", correct: false },
      { text: "त्वरण (क्विकनिंग)", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुछ प्रणालियों में, MKSQ में Q का उपयोग विद्युत आवेश (कूलॉम में) के लिए एक मूल इकाई के रूप में किया जाता था।"
  },
  {
    question: "प्रश्न 26. कौन सी प्रणाली दशमलव प्रणाली पर आधारित नहीं है?",
    answers: shuffle([
      { text: "SI", correct: false },
      { text: "MKS", correct: false },
      { text: "CGS", correct: false },
      { text: "FPS", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> FPS (ब्रिटिश) प्रणाली दशमलव पर आधारित नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> उदाहरण के लिए, 1 फुट में 12 इंच और 1 पाउंड में 16 औंस होते हैं।"
  },
  {
    question: "प्रश्न 27. 1 इंच किसके बराबर है?",
    answers: shuffle([
      { text: "2.54 सेंटीमीटर", correct: true },
      { text: "3.54 सेंटीमीटर", correct: false },
      { text: "1.54 सेंटीमीटर", correct: false },
      { text: "5.08 सेंटीमीटर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1 इंच को अंतरराष्ट्रीय स्तर पर ठीक 2.54 सेंटीमीटर के रूप में परिभाषित किया गया है।"
  },
  {
    question: "प्रश्न 28. SI प्रणाली को आधिकारिक तौर पर कब अपनाया गया था?",
    answers: shuffle([
      { text: "1947", correct: false },
      { text: "1951", correct: false },
      { text: "1960", correct: true },
      { text: "1971", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> मात्रकों और माप पर आम सम्मेलन (CGPM) ने 1960 में अंतर्राष्ट्रीय मात्रक प्रणाली (SI) को औपचारिक रूप से अपनाया था।"
  },
  {
    question: "प्रश्न 29. FPS प्रणाली में लंबाई की इकाई क्या है?",
    answers: shuffle([
      { text: "मीटर", correct: false },
      { text: "सेंटीमीटर", correct: false },
      { text: "गज", correct: false },
      { text: "फुट", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> FPS प्रणाली में लंबाई की मूल इकाई फुट है।"
  },
  {
    question: "प्रश्न 30. MKS और CGS दोनों में कौन सी भौतिक राशि की इकाई समान है?",
    answers: shuffle([
      { text: "लंबाई", correct: false },
      { text: "द्रव्यमान", correct: false },
      { text: "समय", correct: true },
      { text: "बल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> MKS और CGS दोनों ही प्रणालियों में समय की इकाई सेकंड है।"
  },
  {
    question: "प्रश्न 31. दाब की CGS इकाई क्या है?",
    answers: shuffle([
      { text: "पास्कल", correct: false },
      { text: "बार", correct: false },
      { text: "टॉर", correct: false },
      { text: "डाइन प्रति वर्ग सेंटीमीटर", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> दाब = बल/क्षेत्रफल।<br><br><i class='fa-solid fa-angles-right icon'></i> CGS में बल की इकाई डाइन और क्षेत्रफल की वर्ग सेंटीमीटर है, इसलिए दाब की इकाई डाइन/सेमी² है।"
  },
  {
    question: "प्रश्न 32. 'किलोग्राम' किस मात्रक पद्धति की मूल इकाई है?",
    answers: shuffle([
      { text: "FPS", correct: false },
      { text: "CGS", correct: false },
      { text: "MKS/SI", correct: true },
      { text: "ये सभी", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> किलोग्राम MKS और इसकी विस्तारित SI प्रणाली में द्रव्यमान की मूल इकाई है।"
  },
  {
    question: "प्रश्न 33. SI उपसर्ग 'पेटा' (Peta) का गुणक क्या है?",
    answers: shuffle([
      { text: "1012", correct: false },
      { text: "1015", correct: true },
      { text: "1018", correct: false },
      { text: "10−15", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> SI उपसर्ग 'पेटा' (P) 1015 के गुणक को दर्शाता है।"
  },
  {
    question: "प्रश्न 34. SI उपसर्ग 'माइक्रो' का प्रतीक क्या है?",
    answers: shuffle([
      { text: "m", correct: false },
      { text: "M", correct: false },
      { text: "µ", correct: true },
      { text: "n", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'माइक्रो' (10−6) का प्रतीक ग्रीक अक्षर म्यू (µ) है।"
  },
  {
    question: "प्रश्न 35. एक गैलन (यू.एस.) में लगभग कितने लीटर होते हैं?",
    answers: shuffle([
      { text: "2.78 लीटर", correct: false },
      { text: "3.78 लीटर", correct: true },
      { text: "4.54 लीटर", correct: false },
      { text: "5.0 लीटर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक अमेरिकी गैलन लगभग 3.785 लीटर के बराबर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> (ब्रिटिश इंपीरियल गैलन लगभग 4.54 लीटर होता है)।"
  },
  {
    question: "प्रश्न 36. घनत्व की CGS इकाई क्या है?",
    answers: shuffle([
      { text: "kg/m3", correct: false },
      { text: "g/cm3", correct: true },
      { text: "lb/ft3", correct: false },
      { text: "g/m3", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> घनत्व = द्रव्यमान/आयतन।<br><br><i class='fa-solid fa-angles-right icon'></i> CGS में द्रव्यमान की इकाई ग्राम (g) और आयतन की घन सेंटीमीटर (cm3) है।"
  },
  {
    question: "प्रश्न 37. 2019 में SI की किस मूल इकाई को एक भौतिक स्थिरांक के आधार पर पुनः परिभाषित किया गया?",
    answers: shuffle([
      { text: "मीटर", correct: false },
      { text: "सेकंड", correct: false },
      { text: "किलोग्राम", correct: true },
      { text: "ऐम्पियर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> 2019 में, किलोग्राम को एक भौतिक वस्तु (लेग्रैंड के) के बजाय प्लांक स्थिरांक (h) के एक निश्चित संख्यात्मक मान के आधार पर पुनः परिभाषित किया गया।"
  },
  {
    question: "प्रश्न 38. किस प्रणाली को फ्रांसीसी प्रणाली भी कहा जाता है?",
    answers: shuffle([
      { text: "FPS", correct: false },
      { text: "MKS", correct: false },
      { text: "CGS", correct: false },
      { text: "मीट्रिक प्रणाली (सामान्य रूप से)", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> मीट्रिक प्रणाली (जिसमें CGS और MKS/SI शामिल हैं) की उत्पत्ति फ्रांसीसी क्रांति के दौरान फ्रांस में हुई थी, इसलिए इसे कभी-कभी फ्रांसीसी प्रणाली भी कहा जाता है।"
  },
  {
    question: "प्रश्न 39. MKSA प्रणाली में 'A' का क्या अर्थ है?",
    answers: shuffle([
      { text: "त्वरण (Acceleration)", correct: false },
      { text: "क्षेत्रफल (Area)", correct: false },
      { text: "ऐम्पियर (Ampere)", correct: true },
      { text: "कोण (Angle)", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> MKSA प्रणाली (मीटर-किलोग्राम-सेकंड-ऐम्पियर) MKS का एक विस्तार थी जिसमें विद्युत धारा के लिए ऐम्पियर को एक मूल इकाई के रूप में शामिल किया गया था।"
  },
  {
    question: "प्रश्न 40. त्वरण की FPS इकाई क्या है?",
    answers: shuffle([
      { text: "m/s2", correct: false },
      { text: "cm/s2", correct: false },
      { text: "ft/s2", correct: true },
      { text: "mi/h2", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> त्वरण = लंबाई/समय²।<br><br><i class='fa-solid fa-angles-right icon'></i> FPS में लंबाई की इकाई फुट (ft) और समय की सेकंड (s) है, इसलिए त्वरण की इकाई ft/s2 होती है।"
  },
  {
    question: "प्रश्न 41. एक गज में कितने फुट होते हैं?",
    answers: shuffle([
      { text: "2", correct: false },
      { text: "3", correct: true },
      { text: "4", correct: false },
      { text: "12", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> FPS प्रणाली में, 1 गज 3 फुट के बराबर होता है।"
  },
  {
    question: "प्रश्न 42. SI उपसर्ग 'फेम्टो' किसके बराबर है?",
    answers: shuffle([
      { text: "10−9", correct: false },
      { text: "10−12", correct: false },
      { text: "10−15", correct: true },
      { text: "10−18", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'फेम्टो' (f) 10 की घात -15 को दर्शाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> एक फर्मी 1 फेम्टोमीटर के बराबर होता है।"
  },
  {
    question: "प्रश्न 43. SI प्रणाली की स्थापना के लिए जिम्मेदार अंतर्राष्ट्रीय संगठन कौन सा है?",
    answers: shuffle([
      { text: "IUPAC", correct: false },
      { text: "BIPM", correct: true },
      { text: "NASA", correct: false },
      { text: "ISO", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> BIPM (अंतर्राष्ट्रीय बाट और माप ब्यूरो) वह संगठन है जो SI प्रणाली के रखरखाव और मानकीकरण के लिए जिम्मेदार है।"
  },
  {
    question: "प्रश्न 44. 'स्लग' किस भौतिक राशि की इकाई है और किस पद्धति में है?",
    answers: shuffle([
      { text: "द्रव्यमान, CGS", correct: false },
      { text: "द्रव्यमान, FPS", correct: true },
      { text: "भार, FPS", correct: false },
      { text: "बल, MKS", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्लग FPS प्रणाली में द्रव्यमान की एक व्युत्पन्न इकाई है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह वह द्रव्यमान है जो 1 पाउंड-बल से 1ft/s2 का त्वरण प्राप्त करता है।"
  },
  {
    question: "प्रश्न 45. 1 जूल प्रति सेकंड किसके बराबर है?",
    answers: shuffle([
      { text: "1 न्यूटन", correct: false },
      { text: "1 पास्कल", correct: false },
      { text: "1 वॉट", correct: true },
      { text: "1 हेनरी", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक्ति की SI इकाई वॉट है, जिसे प्रति सेकंड एक जूल ऊर्जा के हस्तांतरण की दर के रूप में परिभाषित किया गया है।"
  },
  {
    question: "प्रश्न 46. SI प्रणाली में समतल कोण की इकाई क्या है?",
    answers: shuffle([
      { text: "डिग्री", correct: false },
      { text: "ग्रेडियन", correct: false },
      { text: "रेडियन", correct: true },
      { text: "मिनट", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> SI प्रणाली में समतल कोण की पूरक इकाई रेडियन है।"
  },
  {
    question: "प्रश्न 47. 1 कैलोरी में लगभग कितने जूल होते हैं?",
    answers: shuffle([
      { text: "2.18", correct: false },
      { text: "3.18", correct: false },
      { text: "4.18", correct: true },
      { text: "5.18", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1 कैलोरी ऊर्जा की एक इकाई है जो लगभग 4.184 जूल के बराबर होती है।"
  },
  {
    question: "प्रश्न 48. कौन सी प्रणाली विद्युत चुम्बकीय इकाइयों को आधार इकाइयों के रूप में शामिल करने वाली पहली प्रणालियों में से एक थी?",
    answers: shuffle([
      { text: "FPS", correct: false },
      { text: "CGS", correct: false },
      { text: "MKSA", correct: true },
      { text: "MTS (मीटर-टन-सेकंड)", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> MKSA प्रणाली ने विद्युत धारा (ऐम्पियर) को एक आधार इकाई के रूप में शामिल करके MKS प्रणाली का विस्तार किया, जिससे यह विद्युत चुंबकत्व के लिए अधिक व्यापक हो गई।"
  },
  {
    question: "प्रश्न 49. SI उपसर्ग 'टेरा' का मान क्या है?",
    answers: shuffle([
      { text: "109", correct: false },
      { text: "10 की घात 12", correct: true },
      { text: "1015", correct: false },
      { text: "10 की घात -12", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'टेरा' (T) 10 की घात 12 को दर्शाता है, जैसे टेराबाइट।"
  },
  {
    question: "प्रश्न 50. एक मील (स्थलीय) में कितने फुट होते हैं?",
    answers: shuffle([
      { text: "1760", correct: false },
      { text: "2280", correct: false },
      { text: "5280", correct: true },
      { text: "6076", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक स्थलीय मील (statute mile) में 5280 फुट होते हैं।"
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