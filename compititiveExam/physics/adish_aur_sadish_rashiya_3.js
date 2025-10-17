const questions = [
  {
    topHeading: "भौतिक राशियाँ और उनके गुण पर आधारित 50 बहुविकल्पीय प्रश्न MCQs,part_3 (quiz_no.5)"
  },
  {
    question: "प्रश्न 1: 'प्रेरकत्व' (Inductance) है:",
    answers: shuffle([
      { text: "सदिश", correct: false },
      { text: "अदिश", correct: true },
      { text: "चुंबकीय फ्लक्स", correct: false },
      { text: "विद्युत धारा", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रेरकत्व किसी कुंडली का वह गुण है जो उसमें प्रवाहित धारा में परिवर्तन का विरोध करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक अदिश राशि है।"
  },
  {
    question: "प्रश्न 2: सदिश कलन में, एक सदिश क्षेत्र के 'डाइवर्जेंस' (Divergence) का परिणाम होता है:",
    answers: shuffle([
      { text: "एक सदिश", correct: false },
      { text: "एक अदिश", correct: true },
      { text: "शून्य", correct: false },
      { text: "एक स्थिरांक", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> डाइवर्जेंस किसी बिंदु पर सदिश क्षेत्र के स्रोत या सिंक की प्रबलता को मापता है, और इसका परिणाम एक अदिश मान होता है।"
  },
  {
    question: "प्रश्न 3: 'प्रतिरोध' (Resistance) किस प्रकार की राशि है?",
    answers: shuffle([
      { text: "सदिश", correct: false },
      { text: "अदिश", correct: true },
      { text: "धारा", correct: false },
      { text: "वोल्टेज", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिरोध किसी चालक का वह गुण है जो विद्युत धारा के प्रवाह का विरोध करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका केवल परिमाण होता है, कोई दिशा नहीं।"
  },
  {
    question: "प्रश्न 4: यदि दो सदिशों का योग और अंतर एक दूसरे के लंबवत हैं, तो:",
    answers: shuffle([
      { text: "दोनों सदिश परिमाण में बराबर हैं।", correct: true },
      { text: "दोनों सदिश एक दूसरे के लंबवत हैं।", correct: false },
      { text: "दोनों सदिश समांतर हैं।", correct: false },
      { text: "एक सदिश शून्य है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> (A+B) . (A-B) = 0 => |A|² - |B|² = 0 => |A| = |B|।"
  },
  {
    question: "प्रश्न 5: 'कार्य-ऊर्जा प्रमेय' (Work-Energy Theorem) किन राशियों के बीच संबंध स्थापित करता है?",
    answers: shuffle([
      { text: "दो सदिश राशियों के बीच", correct: false },
      { text: "दो अदिश राशियों के बीच", correct: true },
      { text: "एक सदिश और एक अदिश राशि के बीच", correct: false },
      { text: "दो प्रदेश राशियों के बीच", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह प्रमेय किए गए कार्य (अदिश) और गतिज ऊर्जा में परिवर्तन (अदिश) के बीच संबंध स्थापित करता है।"
  },
  {
    question: "प्रश्न 6: 'अपवर्तनांक' (Refractive Index) है:",
    answers: shuffle([
      { text: "सदिश", correct: false },
      { text: "अदिश", correct: true },
      { text: "कोण", correct: false },
      { text: "लंबाई", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह निर्वात में प्रकाश की चाल और किसी माध्यम में प्रकाश की चाल का अनुपात है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक विमाहीन अदिश राशि है।"
  },
  {
    question: "प्रश्न 7: सदिश कलन में, एक सदिश क्षेत्र के 'कर्ल' (Curl) का परिणाम होता है:",
    answers: shuffle([
      { text: "एक सदिश", correct: true },
      { text: "एक अदिश", correct: false },
      { text: "शून्य", correct: false },
      { text: "एक स्थिरांक", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> कर्ल किसी बिंदु पर सदिश क्षेत्र के घूर्णन की मात्रा को मापता है, और इसका परिणाम एक सदिश होता है जिसकी दिशा घूर्णन अक्ष के अनुदिश होती है।"
  },
  {
    question: "प्रश्न 8: किसी सदिश का ऋणात्मक सदिश (Negative Vector) वह सदिश है जिसका:",
    answers: shuffle([
      { text: "परिमाण समान और दिशा विपरीत होती है।", correct: true },
      { text: "परिमाण विपरीत और दिशा समान होती है।", correct: false },
      { text: "परिमाण और दिशा दोनों विपरीत होते हैं।", correct: false },
      { text: "परिमाण शून्य होता है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह परिभाषा के अनुसार सत्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> A का ऋणात्मक सदिश -A है।"
  },
  {
    question: "प्रश्न 9: 'पॉइसन अनुपात' (Poisson's Ratio) है:",
    answers: shuffle([
      { text: "सदिश", correct: false },
      { text: "अदिश", correct: true },
      { text: "बल", correct: false },
      { text: "लंबाई", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह पार्श्व विकृति और अनुदैर्ध्य विकृति का अनुपात है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक विमाहीन अदिश राशि है।"
  },
  {
    question: "प्रश्न 10: बल और विस्थापन का सदिश गुणनफल क्या कहलाता है?",
    answers: shuffle([
      { text: "कार्य", correct: false },
      { text: "शक्ति", correct: false },
      { text: "बल आघूर्ण", correct: true },
      { text: "आवेग", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> बल आघूर्ण (τ) को स्थिति सदिश (r) और बल (F) के सदिश गुणनफल के रूप में परिभाषित किया जाता है (τ = r x F)।"
  },
  {
    question: "प्रश्न 11: 'प्लांक नियतांक' (Planck's Constant) है:",
    answers: shuffle([
      { text: "सदिश", correct: false },
      { text: "अदिश", correct: true },
      { text: "ऊर्जा", correct: false },
      { text: "आवृत्ति", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक मौलिक भौतिक नियतांक है जो ऊर्जा और आवृत्ति (E=hν) को जोड़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक अदिश राशि है।"
  },
  {
    question: "प्रश्न 12: एक प्रक्षेप्य की गति में, उच्चतम बिंदु पर वेग सदिश और त्वरण सदिश के बीच का कोण कितना होता है?",
    answers: shuffle([
      { text: "0°", correct: false },
      { text: "45°", correct: false },
      { text: "90°", correct: true },
      { text: "180°", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> उच्चतम बिंदु पर, वेग क्षैतिज होता है और त्वरण (g) हमेशा ऊर्ध्वाधर नीचे की ओर होता है, इसलिए उनके बीच का कोण 90° होता है।"
  },
  {
    question: "प्रश्न 13: 'केन्द्रीय बल' (Central Force) की दिशा हमेशा होती है:",
    answers: shuffle([
      { text: "एक स्थिर बिंदु की ओर या उससे दूर", correct: true },
      { text: "गति के लंबवत", correct: false },
      { text: "गति की दिशा में", correct: false },
      { text: "स्थिर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> केन्द्रीय बल, जैसे गुरुत्वाकर्षण बल या स्थिरविद्युत बल, हमेशा एक निश्चित बिंदु (केंद्र) की ओर या उससे दूर की रेखा के अनुदिश कार्य करता है।"
  },
  {
    question: "प्रश्न 14: 'चुंबकीय संवेदनशीलता' (Magnetic Susceptibility) है:",
    answers: shuffle([
      { text: "सदिश", correct: false },
      { text: "अदिश", correct: true },
      { text: "चुंबकीय क्षेत्र", correct: false },
      { text: "चुंबकीय आघूर्ण", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक विमाहीन अदिश राशि है जो यह दर्शाती है कि कोई पदार्थ बाहरी चुंबकीय क्षेत्र में रखे जाने पर कितना चुंबकित होगा।"
  },
  {
    question: "प्रश्न 15: सदिश A और B के लिए, A x B = - (B x A) संबंध क्या दर्शाता है?",
    answers: shuffle([
      { text: "सदिश गुणन क्रमविनिमेय है।", correct: false },
      { text: "सदिश गुणन प्रति-क्रमविनिमेय (anti-commutative) है।", correct: true },
      { text: "सदिश गुणन साहचर्य है।", correct: false },
      { text: "सदिश गुणन शून्य है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सदिश गुणनफल का एक मौलिक गुण है, जिसका अर्थ है कि क्रम बदलने पर परिणामी सदिश की दिशा उलट जाती है।"
  },
  {
    question: "प्रश्न 16: 'विद्युत प्रतिरोधकता' (Electrical Resistivity) है:",
    answers: shuffle([
      { text: "सदिश", correct: false },
      { text: "अदिश", correct: true },
      { text: "प्रतिरोध", correct: false },
      { text: "धारा घनत्व", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह किसी पदार्थ का आंतरिक गुण है जो विद्युत धारा के प्रवाह के प्रतिरोध को मापता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक अदिश राशि है।"
  },
  {
    question: "प्रश्न 17: 'तात्क्षणिक वेग' (Instantaneous Velocity) को कैसे परिभाषित किया जाता है?",
    answers: shuffle([
      { text: "कुल विस्थापन / कुल समय", correct: false },
      { text: "विस्थापन का अवकलज (derivative) समय के सापेक्ष", correct: true },
      { text: "समय का अवकलज विस्थापन के सापेक्ष", correct: false },
      { text: "कुल दूरी / कुल समय", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> तात्क्षणिक वेग किसी विशेष क्षण पर वेग को दर्शाता है और इसे गणितीय रूप से v = ds/dt के रूप में व्यक्त किया जाता है।"
  },
  {
    question: "प्रश्न 18: 'सापेक्षिक पारगम्यता' (Relative Permeability) है:",
    answers: shuffle([
      { text: "सदिश", correct: false },
      { text: "अदिश", correct: true },
      { text: "चुंबकीय क्षेत्र", correct: false },
      { text: "फ्लक्स", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह किसी माध्यम की पारगम्यता और निर्वात की पारगम्यता का अनुपात है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक विमाहीन अदिश राशि है।"
  },
  {
    question: "प्रश्न 19: यदि तीन सदिशों का सदिश योग शून्य है, तो वे:",
    answers: shuffle([
      { text: "एक ही तल में नहीं हो सकते।", correct: false },
      { text: "आवश्यक रूप से एक ही तल में (समतलीय) होंगे।", correct: true },
      { text: "हमेशा एक दूसरे के लंबवत होंगे।", correct: false },
      { text: "हमेशा बराबर परिमाण के होंगे।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> तीन सदिशों का परिणामी शून्य तभी हो सकता है जब उन्हें एक बंद त्रिभुज के रूप में दर्शाया जा सके, और एक त्रिभुज हमेशा एक तल में होता है।"
  },
  {
    question: "प्रश्न 20: 'विकिरण दाब' (Radiation Pressure) है:",
    answers: shuffle([
      { text: "सदिश", correct: false },
      { text: "अदिश", correct: true },
      { text: "बल", correct: false },
      { text: "ऊर्जा", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> हालांकि यह विद्युत चुम्बकीय विकिरण द्वारा लगाए गए बल से उत्पन्न होता है, दाब को पारंपरिक रूप से एक अदिश राशि के रूप में परिभाषित किया जाता है।"
  },
  {
    question: "प्रश्न 21: 'ऊर्जा घनत्व' (Energy Density) है:",
    answers: shuffle([
      { text: "सदिश", correct: false },
      { text: "अदिश", correct: true },
      { text: "ऊर्जा", correct: false },
      { text: "आयतन", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह प्रति इकाई आयतन में संग्रहीत ऊर्जा की मात्रा है।<br><br><i class='fa-solid fa-angles-right icon'></i> ऊर्जा और आयतन दोनों अदिश हैं, इसलिए उनका अनुपात भी अदिश है।"
  },
  {
    question: "प्रश्न 22: एक वस्तु जो स्थिर अवस्था से एकसमान त्वरण के साथ गतिमान होती है, उसका वेग-समय ग्राफ होगा:",
    answers: shuffle([
      { text: "समय-अक्ष के समांतर एक सीधी रेखा", correct: false },
      { text: "मूल बिंदु से गुजरने वाली एक सीधी रेखा", correct: true },
      { text: "एक परवलय (parabola)", correct: false },
      { text: "एक वृत्त", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> v = u + at समीकरण में, यदि u=0 है, तो v=at, जो कि y=mx के रूप का एक रैखिक समीकरण है।"
  },
  {
    question: "प्रश्न 23: 'स्टीफन-बोल्ट्जमैन नियतांक' (Stefan-Boltzmann Constant) है:",
    answers: shuffle([
      { text: "सदिश", correct: false },
      { text: "अदिश", correct: true },
      { text: "तापमान", correct: false },
      { text: "ऊर्जा", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक भौतिक नियतांक है जो किसी कृष्णिका द्वारा उत्सर्जित कुल विकिरण ऊर्जा को उसके तापमान से संबंधित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक अदिश राशि है।"
  },
  {
    question: "प्रश्न 24: 'प्रत्यानयन बल' (Restoring Force) की दिशा हमेशा होती है:",
    answers: shuffle([
      { text: "विस्थापन की दिशा में", correct: false },
      { text: "विस्थापन की दिशा के विपरीत", correct: true },
      { text: "वेग की दिशा में", correct: false },
      { text: "स्थिर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह बल हमेशा वस्तु को उसकी साम्यावस्था की ओर वापस लाने का प्रयास करता है, इसलिए यह विस्थापन के विपरीत दिशा में कार्य करता है।"
  },
  {
    question: "प्रश्न 25: 'मोलर ऊष्मा धारिता' (Molar Heat Capacity) है:",
    answers: shuffle([
      { text: "सदिश", correct: false },
      { text: "अदिश", correct: true },
      { text: "ऊर्जा", correct: false },
      { text: "तापमान", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह किसी पदार्थ के एक मोल का तापमान एक डिग्री सेल्सियस बढ़ाने के लिए आवश्यक ऊष्मा की मात्रा है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक अदिश राशि है।"
  },
  {
    question: "प्रश्न 26. एक सदिश जो अपनी प्रारंभिक स्थिति में वापस आ जाता है, कहलाता है:",
    answers: shuffle([
      { text: "शून्य सदिश", correct: true },
      { text: "स्थिति सदिश", correct: false },
      { text: "इकाई सदिश", correct: false },
      { text: "यह एक सदिश नहीं है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि कोई सदिश घूमकर या स्थानांतरित होकर अपनी प्रारंभिक स्थिति में ही समाप्त होता है, तो उसका कुल विस्थापन शून्य होता है, जिसे शून्य सदिश द्वारा दर्शाया जाता है।"
  },
  {
    question: "प्रश्न 27. निम्नलिखित में से कौन सी राशि हमेशा संरक्षी बल के लिए शून्य होती है?",
    answers: shuffle([
      { text: "एक बंद पथ में किया गया कार्य", correct: true },
      { text: "एक खुले पथ में किया गया कार्य", correct: false },
      { text: "बल का परिमाण", correct: false },
      { text: "बल की दिशा", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> संरक्षी बल (जैसे गुरुत्वाकर्षण बल) द्वारा एक बंद लूप में किया गया कुल कार्य हमेशा शून्य होता है।"
  },
  {
    question: "प्रश्न 28. 'लेंस की क्षमता' (Power of a lens) है:",
    answers: shuffle([
      { text: "सदिश", correct: false },
      { text: "अदिश", correct: true },
      { text: "लंबाई", correct: false },
      { text: "बल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> लेंस की क्षमता उसकी फोकस दूरी का व्युत्क्रम है और इसकी इकाई डायोप्टर है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक अदिश राशि है।"
  },
  {
    question: "प्रश्न 29. एक लिफ्ट एकसमान वेग से ऊपर जा रही है। लिफ्ट में खड़े एक व्यक्ति का आभासी भार उसके वास्तविक भार की तुलना में होगा:",
    answers: shuffle([
      { text: "अधिक", correct: false },
      { text: "कम", correct: false },
      { text: "बराबर", correct: true },
      { text: "शून्य", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि लिफ्ट एकसमान वेग से चल रही है, इसका त्वरण शून्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, व्यक्ति पर कोई अतिरिक्त बल नहीं लगता है, और उसका आभासी भार उसके वास्तविक भार के बराबर होता है।"
  },
  {
    question: "प्रश्न 30. 'आवर्धन क्षमता' (Magnifying Power) है:",
    answers: shuffle([
      { text: "सदिश", correct: false },
      { text: "अदिश", correct: true },
      { text: "लंबाई", correct: false },
      { text: "क्षेत्रफल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अंतिम प्रतिबिंब द्वारा बनाए गए कोण और वस्तु द्वारा बनाए गए कोण का अनुपात है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक विमाहीन अदिश राशि है।"
  },
  {
    question: "प्रश्न 31. एक अदिश को एक सदिश से गुणा करने पर प्राप्त होता है:",
    answers: shuffle([
      { text: "एक अदिश", correct: false },
      { text: "एक सदिश", correct: true },
      { text: "एक संख्या", correct: false },
      { text: "यह संभव नहीं है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> परिणामी राशि एक सदिश होती है जिसका परिमाण अदिश और सदिश के परिमाण का गुणनफल होता है और दिशा मूल सदिश के समान (यदि अदिश धनात्मक है) या विपरीत (यदि अदिश ऋणात्मक है) होती है।"
  },
  {
    question: "प्रश्न 32. 'द्रव्यमान-ऊर्जा तुल्यता' (Mass-Energy Equivalence) संबंध E=mc² किन राशियों को जोड़ता है?",
    answers: shuffle([
      { text: "दो सदिश", correct: false },
      { text: "दो अदिश", correct: true },
      { text: "एक सदिश और एक अदिश", correct: false },
      { text: "ऊर्जा और वेग", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह संबंध ऊर्जा (E), द्रव्यमान (m), और प्रकाश की चाल (c) के बीच है, जो सभी अदिश राशियाँ हैं।"
  },
  {
    question: "प्रश्न 33. एक पतंग हवा में स्थिर है। उस पर लगने वाले सभी बलों का सदिश योग है:",
    answers: shuffle([
      { text: "ऊपर की ओर", correct: false },
      { text: "नीचे की ओर", correct: false },
      { text: "शून्य", correct: true },
      { text: "हवा की दिशा में", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन के पहले नियम के अनुसार, यदि कोई वस्तु स्थिर है (या एकसमान वेग से चल रही है), तो उस पर लगने वाला कुल बल शून्य होता है।"
  },
  {
    question: "प्रश्न 34. 'क्रांतिक कोण' (Critical Angle) है:",
    answers: shuffle([
      { text: "सदिश", correct: false },
      { text: "अदिश", correct: true },
      { text: "लंबाई", correct: false },
      { text: "समय", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक विशिष्ट आपतन कोण है जिसके लिए अपवर्तन कोण 90 degree होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक अदिश राशि है।"
  },
  {
    question: "प्रश्न 35. कौन सा नियम बताता है कि प्रत्येक क्रिया के बराबर और विपरीत प्रतिक्रिया होती है?",
    answers: shuffle([
      { text: "न्यूटन का पहला नियम", correct: false },
      { text: "न्यूटन का दूसरा नियम", correct: false },
      { text: "न्यूटन का तीसरा नियम", correct: true },
      { text: "ऊर्जा संरक्षण का नियम", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन का तीसरा नियम बलों की सदिश प्रकृति को दर्शाता है, जहाँ क्रिया और प्रतिक्रिया बल परिमाण में बराबर और दिशा में विपरीत होते हैं।"
  },
  {
    question: "प्रश्न 36. 'पायंटिंग सदिश' (Poynting Vector) क्या दर्शाता है?",
    answers: shuffle([
      { text: "विद्युत क्षेत्र की दिशा", correct: false },
      { text: "चुंबकीय क्षेत्र की दिशा", correct: false },
      { text: "विद्युत चुम्बकीय ऊर्जा के प्रवाह की दिशा और दर", correct: true },
      { text: "आवेश का प्रवाह", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक सदिश राशि है जो प्रति इकाई क्षेत्रफल में ऊर्जा प्रवाह की दर और दिशा को इंगित करती है।"
  },
  {
    question: "प्रश्न 37. 'विद्युत चालकता' (Electrical Conductivity) है:",
    answers: shuffle([
      { text: "सदिश", correct: false },
      { text: "अदिश", correct: true },
      { text: "प्रतिरोधकता", correct: false },
      { text: "धारा", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह विद्युत प्रतिरोधकता का व्युत्क्रम है और किसी पदार्थ की विद्युत धारा का संचालन करने की क्षमता को मापता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक अदिश राशि है।"
  },
  {
    question: "प्रश्न 38. एक प्रक्षेप्य का पथ कैसा होता है (वायु प्रतिरोध को नगण्य मानते हुए)?",
    answers: shuffle([
      { text: "सीधी रेखा", correct: false },
      { text: "वृत्त", correct: false },
      { text: "परवलय (Parabola)", correct: true },
      { text: "दीर्घवृत्त", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्षैतिज दिशा में एकसमान वेग और ऊर्ध्वाधर दिशा में एकसमान त्वरण के संयोजन के कारण प्रक्षेप्य का पथ परवलयाकार होता है।"
  },
  {
    question: "प्रश्न 39. 'समय अवधि' (Time Period) है:",
    answers: shuffle([
      { text: "सदिश", correct: false },
      { text: "अदिश", correct: true },
      { text: "आवृत्ति", correct: false },
      { text: "वेग", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक दोलन या एक चक्कर पूरा करने में लगने वाला समय है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक अदिश राशि है।"
  },
  {
    question: "प्रश्न 40. दो सदिशों का सदिश गुणनफल उन दो सदिशों द्वारा परिभाषित तल के:",
    answers: shuffle([
      { text: "समांतर होता है", correct: false },
      { text: "लंबवत होता है", correct: true },
      { text: "45° पर होता है", correct: false },
      { text: "उसी तल में होता है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सदिश गुणनफल की परिभाषा है।<br><br><i class='fa-solid fa-angles-right icon'></i> परिणामी सदिश की दिशा दाहिने हाथ के नियम द्वारा दी जाती है।"
  },
  {
    question: "प्रश्न 41. 'एन्ट्रापी' (Entropy) है:",
    answers: shuffle([
      { text: "सदिश", correct: false },
      { text: "अदिश", correct: true },
      { text: "ऊर्जा", correct: false },
      { text: "तापमान", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एन्ट्रापी किसी निकाय की अव्यवस्था या यादृच्छिकता का एक माप है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक अदिश राशि है."
  },
  {
    question: "प्रश्न 42. किसी वस्तु की घूर्णी गति का वर्णन करने के लिए कौन सी राशियाँ सबसे उपयुक्त हैं?",
    answers: shuffle([
      { text: "विस्थापन और वेग", correct: false },
      { text: "बल और संवेग", correct: false },
      { text: "कोणीय विस्थापन, कोणीय वेग, और कोणीय त्वरण", correct: true },
      { text: "द्रव्यमान और जड़त्व", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये सभी अक्षीय सदिश हैं जो विशेष रूप से घूर्णी गति का वर्णन करते हैं।"
  },
  {
    question: "प्रश्न 43. 'विद्युत फ्लक्स घनत्व' (Electric Flux Density) या 'विद्युत विस्थापन' है:",
    answers: shuffle([
      { text: "सदिश", correct: true },
      { text: "अदिश", correct: false },
      { text: "फ्लक्स", correct: false },
      { text: "आवेश", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसे 'D' से दर्शाया जाता है और यह एक सदिश क्षेत्र है जो परावैद्युत माध्यमों में विद्युत क्षेत्र का वर्णन करता है।"
  },
  {
    question: "प्रश्न 44. 'तापीय प्रसार गुणांक' (Coefficient of Thermal Expansion) है:",
    answers: shuffle([
      { text: "सदिश", correct: false },
      { text: "अदिश", correct: true },
      { text: "लंबाई", correct: false },
      { text: "तापमान", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह तापमान में प्रति इकाई परिवर्तन पर किसी पदार्थ के आकार में भिन्नात्मक परिवर्तन को मापता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक अदिश राशि है।"
  },
  {
    question: "प्रश्न 45. एक शून्य सदिश को एक अशून्य सदिश में जोड़ने पर परिणाम होता है:",
    answers: shuffle([
      { text: "शून्य सदिश", correct: false },
      { text: "वही अशून्य सदिश", correct: true },
      { text: "एक इकाई सदिश", correct: false },
      { text: "अनंत", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> शून्य सदिश सदिश योग का योज्य तत्समक (additive identity) है, ठीक वैसे ही जैसे संख्या 0 साधारण जोड़ में है।"
  },
  {
    question: "प्रश्न 46. 'संवेग संरक्षण का नियम' किस पर आधारित है?",
    answers: shuffle([
      { text: "न्यूटन के पहले और दूसरे नियम पर", correct: false },
      { text: "न्यूटन के दूसरे और तीसरे नियम पर", correct: true },
      { text: "न्यूटन के पहले और तीसरे नियम पर", correct: false },
      { text: "केवल न्यूटन के तीसरे नियम पर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह नियम न्यूटन के गति के नियमों का एक सीधा परिणाम है, जो बलों और संवेग में परिवर्तन (दोनों सदिश) से संबंधित हैं।"
  },
  {
    question: "प्रश्न 47. 'चुंबकीय क्षेत्र सामर्थ्य' (Magnetic Field Strength) या 'चुंबकन क्षेत्र' (Magnetizing Field) है:",
    answers: shuffle([
      { text: "सदिश", correct: true },
      { text: "अदिश", correct: false },
      { text: "फ्लक्स", correct: false },
      { text: "धारा", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसे 'H' से दर्शाया जाता है और यह एक सदिश राशि है जो बाहरी स्रोतों (जैसे विद्युत धाराओं) से उत्पन्न चुंबकीय प्रभाव को मापता है।"
  },
  {
    question: "प्रश्न 48. वह भौतिक राशि जिसकी कोई विमा नहीं होती, लेकिन दिशा होती है:",
    answers: shuffle([
      { text: "कोणीय विस्थापन", correct: true },
      { text: "विकृति", correct: false },
      { text: "घर्षण गुणांक", correct: false },
      { text: "ऐसा संभव नहीं है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> छोटे कोणीय विस्थापन को एक सदिश माना जाता है (जिसकी दिशा घूर्णन अक्ष के अनुदिश होती है), लेकिन यह चाप की लंबाई और त्रिज्या का अनुपात होने के कारण विमाहीन है।"
  },
  {
    question: "प्रश्न 49. दो सदिशों का अदिश त्रिक गुणनफल (Scalar Triple Product) [A B C] = A . (B x C) का परिणाम होता है:",
    answers: shuffle([
      { text: "एक सदिश", correct: false },
      { text: "एक अदिश", correct: true },
      { text: "शून्य", correct: false },
      { text: "एक", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह उन तीन सदिशों द्वारा बनाए गए समांतर षट्फलक (parallelepiped) के आयतन को दर्शाता है, और आयतन एक अदिश राशि है।"
  },
  {
    question: "प्रश्न 50. 'गुरुत्वीय त्वरण (g)' का मान:",
    answers: shuffle([
      { text: "हर जगह स्थिर रहता है", correct: false },
      { text: "एक अदिश राशि है", correct: false },
      { text: "एक सदिश है जिसकी दिशा हमेशा पृथ्वी के केंद्र की ओर होती है", correct: true },
      { text: "केवल द्रव्यमान पर निर्भर करता है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> g एक त्वरण है, इसलिए यह एक सदिश राशि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका परिमाण और दिशा स्थान के साथ बदलते हैं, लेकिन दिशा हमेशा पृथ्वी के केंद्र की ओर होती है।"
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