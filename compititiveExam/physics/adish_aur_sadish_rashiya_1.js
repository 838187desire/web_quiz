const questions = [
  {
    topHeading: " मात्रकों और मापन पर आधारित 50 बहुविकल्पीय प्रश्न, part_1 (quiz_no.2)"
  },
  {
    question: "प्रश्न 1: निम्नलिखित में से कौन सी एक अदिश राशि है?",
    answers: shuffle([
      { text: "वेग", correct: false },
      { text: "बल", correct: false },
      { text: "द्रव्यमान", correct: true },
      { text: "संवेग", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्रव्यमान में केवल परिमाण होता है, दिशा नहीं, इसलिए यह एक अदिश राशि है।"
  },
  {
    question: "प्रश्न 2: किसी राशि को सदिश होने के लिए क्या आवश्यक है?",
    answers: shuffle([
      { text: "केवल परिमाण", correct: false },
      { text: "केवल दिशा", correct: false },
      { text: "परिमाण और दिशा दोनों", correct: true },
      { text: "न तो परिमाण और न ही दिशा", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> सदिश राशियों को पूरी तरह से व्यक्त करने के लिए परिमाण और दिशा दोनों की आवश्यकता होती है।"
  },
  {
    question: "प्रश्न 3: विस्थापन किस प्रकार की राशि है?",
    answers: shuffle([
      { text: "अदिश", correct: false },
      { text: "सदिश", correct: true },
      { text: "प्रदेश (टेंसर)", correct: false },
      { text: " कोई नहीं", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> विस्थापन एक निश्चित दिशा में तय की गई न्यूनतम दूरी है, अतः यह एक सदिश राशि है।"
  },
  {
    question: "प्रश्न 4: निम्नलिखित में से कौन सी एक सदिश राशि नहीं है?",
    answers: shuffle([
      { text: "त्वरण", correct: false },
      { text: "विद्युत क्षेत्र", correct: false },
      { text: "कार्य", correct: true },
      { text: "चुंबकीय क्षेत्र", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्य, बल और विस्थापन का अदिश गुणनफल है, इसलिए यह एक अदिश राशि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें केवल परिमाण होता है।"
  },
  {
    question: "प्रश्न 5: दूरी और विस्थापन के संबंध में क्या सत्य है?",
    answers: shuffle([
      { text: "दूरी हमेशा विस्थापन से अधिक होती है।", correct: false },
      { text: "दूरी हमेशा विस्थापन के बराबर होती है।", correct: false },
      { text: "दूरी, विस्थापन से अधिक या उसके बराबर हो सकती है।", correct: true },
      { text: "विस्थापन हमेशा दूरी से अधिक होता है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> दूरी तय किए गए पथ की कुल लंबाई है, जबकि विस्थापन प्रारंभिक और अंतिम बिंदुओं के बीच की सबसे छोटी दूरी है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, दूरी या तो विस्थापन के बराबर होगी (यदि गति एक सीधी रेखा में हो) या उससे अधिक होगी।"
  },
  {
    question: "प्रश्न 6: चाल और वेग में मुख्य अंतर क्या है?",
    answers: shuffle([
      { text: "चाल एक सदिश राशि है, जबकि वेग अदिश है।", correct: false },
      { text: "चाल एक अदिश राशि है, जबकि वेग सदिश है।", correct: true },
      { text: "दोनों ही सदिश राशियाँ हैं।", correct: false },
      { text: "दोनों ही अदिश राशियाँ हैं।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> चाल में केवल परिमाण होता है (कितनी तेजी से), जबकि वेग में परिमाण और दिशा दोनों होते हैं।"
  },
  {
    question: "प्रश्न 7: विद्युत धारा (Electric Current) कौन सी राशि है?",
    answers: shuffle([
      { text: "सदिश", correct: false },
      { text: "अदिश", correct: true },
      { text: "प्रदेश (टेंसर)", correct: false },
      { text: "न सदिश, न अदिश", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि विद्युत धारा में परिमाण और दिशा दोनों होते हैं, यह सदिश योग के नियमों का पालन नहीं करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इसे एक अदिश राशि माना जाता है।"
  },
  {
    question: "प्रश्न 8: दाब (Pressure) को किस प्रकार की राशि माना जाता है?",
    answers: shuffle([
      { text: "A) सदिश", correct: false },
      { text: "B) अदिश", correct: true },
      { text: "A) , B)दोनों", correct: false },
      { text: "इनमें से कोई नहीं", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> दाब प्रति इकाई क्षेत्रफल पर लगने वाला बल है और इसकी कोई विशिष्ट दिशा नहीं होती; यह सतह पर लंबवत कार्य करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए यह एक अदिश राशि है।"
  },
  {
    question: "प्रश्न 9: निम्नलिखित में से कौन सा समूह केवल सदिश राशियों का है?",
    answers: shuffle([
      { text: "कार्य, ऊर्जा, बल", correct: false },
      { text: "वेग, त्वरण, बल", correct: true },
      { text: "ऊष्मा, प्रकाश, विद्युत धारा", correct: false },
      { text: "दूरी, चाल, समय", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस समूह में वेग, त्वरण, और बल तीनों ही ऐसी राशियाँ हैं जिन्हें व्यक्त करने के लिए परिमाण और दिशा दोनों की आवश्यकता होती है।"
  },
  {
    question: "प्रश्न 10: निम्नलिखित में से कौन सा समूह केवल अदिश राशियों का है?",
    answers: shuffle([
      { text: "विस्थापन, क्षेत्रफल, आयतन", correct: false },
      { text: "तापमान, दाब, समय", correct: true },
      { text: "संवेग, आवेग, बल आघूर्ण", correct: false },
      { text: "चुंबकीय तीव्रता, गुरुत्वाकर्षण, वेग", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस समूह में तापमान, दाब और समय तीनों को व्यक्त करने के लिए केवल परिमाण की आवश्यकता होती है, दिशा की नहीं।"
  },
  {
    question: "प्रश्न 11: बल आघूर्ण (Torque) किस प्रकार की राशि है?",
    answers: shuffle([
      { text: "अदिश", correct: false },
      { text: "सदिश", correct: true },
      { text: "न तो सदिश और न ही अदिश", correct: false },
      { text: "कभी अदिश, कभी सदिश", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> बल आघूर्ण एक घूर्णी बल है और इसकी एक निश्चित दिशा होती है (घूर्णन अक्ष के अनुदिश), इसलिए यह एक सदिश राशि है।"
  },
  {
    question: "प्रश्न 12: यदि कोई वस्तु एक वृत्ताकार पथ पर एक चक्कर पूरा करती है, तो उसका विस्थापन कितना होगा?",
    answers: shuffle([
      { text: "वृत्त की परिधि के बराबर", correct: false },
      { text: "वृत्त की त्रिज्या के बराबर", correct: false },
      { text: "शून्य", correct: true },
      { text: "वृत्त के व्यास के बराबर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्योंकि वस्तु का प्रारंभिक और अंतिम बिंदु समान है, इसलिए कुल विस्थापन शून्य होगा, भले ही तय की गई दूरी वृत्त की परिधि के बराबर हो।"
  },
  {
    question: "प्रश्न 13: कोणीय वेग (Angular Velocity) है एक:",
    answers: shuffle([
      { text: "अदिश राशि", correct: false },
      { text: "अक्षीय सदिश (Axial Vector)", correct: true },
      { text: "ध्रुवीय सदिश (Polar Vector)", correct: false },
      { text: "प्रदेश राशि", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोणीय वेग की दिशा घूर्णन अक्ष के अनुदिश होती है, जिसे दाहिने हाथ के नियम से ज्ञात किया जाता है, इसलिए यह एक अक्षीय सदिश है।"
  },
  {
    question: "प्रश्न 14: पृष्ठ तनाव (Surface Tension) किस प्रकार की राशि है?",
    answers: shuffle([
      { text: "सदिश", correct: false },
      { text: "अदिश", correct: true },
      { text: "प्रदेश", correct: false },
      { text: "आयामी स्थिरांक", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृष्ठ तनाव को प्रति इकाई लंबाई पर लगने वाले बल के रूप में परिभाषित किया गया है, और यह द्रव की सतह पर सभी दिशाओं में समान रूप से कार्य करता है, इसलिए इसे अदिश माना जाता है।"
  },
  {
    question: "प्रश्न 15: दो सदिशों का योग अधिकतम कब होता है?",
    answers: shuffle([
      { text: "जब वे एक दूसरे के लंबवत हों", correct: false },
      { text: "जब वे एक ही दिशा में हों", correct: true },
      { text: "जब वे विपरीत दिशा में हों", correct: false },
      { text: "जब वे 45 डिग्री के कोण पर हों", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब दो सदिश एक ही दिशा में (0° कोण पर) होते हैं, तो उनके परिमाण सीधे जुड़ जाते हैं, जिससे अधिकतम परिणामी सदिश प्राप्त होता है।"
  },
  {
    question: "प्रश्न 16: जड़त्व आघूर्ण (Moment of Inertia) कौन सी राशि है?",
    answers: shuffle([
      { text: "सदिश", correct: false },
      { text: "अदिश", correct: false },
      { text: "प्रदेश (टेंसर)", correct: true },
      { text: "इनमें से कोई नहीं", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जड़त्व आघूर्ण का मान घूर्णन अक्ष की स्थिति के आधार पर बदलता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह न तो पूरी तरह से सदिश है और न ही अदिश, बल्कि यह एक प्रदेश (टेंसर) राशि है।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, सरल भौतिकी में इसे कभी-कभी अदिश के रूप में माना जाता है।"
  },
  {
    question: "प्रश्न 17: दो सदिशों का अदिश गुणनफल (Dot Product) हमेशा होता है:",
    answers: shuffle([
      { text: "एक सदिश राशि", correct: false },
      { text: "एक अदिश राशि", correct: true },
      { text: "शून्य", correct: false },
      { text: "एक", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> अदिश गुणनफल, जिसे डॉट प्रोडक्ट भी कहते हैं, का परिणाम हमेशा एक संख्या (परिमाण) होता है जिसमें कोई दिशा नहीं होती है, इसलिए यह एक अदिश राशि है।"
  },
  {
    question: "प्रश्न 18: दो सदिशों का सदिश गुणनफल (Cross Product) हमेशा होता है:",
    answers: shuffle([
      { text: "एक सदिश राशि", correct: true },
      { text: "एक अदिश राशि", correct: false },
      { text: "शून्य", correct: false },
      { text: "एक", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> सदिश गुणनफल, जिसे क्रॉस प्रोडक्ट भी कहते हैं, का परिणाम एक नया सदिश होता है जिसकी दिशा मूल दो सदिशों द्वारा बनाए गए तल के लंबवत होती है।"
  },
  {
    question: "प्रश्न 19: एकसमान वृत्तीय गति में कौन सी राशि स्थिर रहती है?",
    answers: shuffle([
      { text: "वेग", correct: false },
      { text: "त्वरण", correct: false },
      { text: "चाल", correct: true },
      { text: "बल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एकसमान वृत्तीय गति में, वस्तु की चाल (गति का परिमाण) स्थिर रहती है, लेकिन वेग की दिशा लगातार बदलने के कारण वेग परिवर्तित होता रहता है।"
  },
  {
    question: "प्रश्न 20: ऊर्जा किस प्रकार की राशि है?",
    answers: shuffle([
      { text: "A) सदिश", correct: false },
      { text: "B) अदिश", correct: true },
      { text: "A), B) दोनों हो सकती है", correct: false },
      { text: "इनमें से कोई नहीं", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊर्जा कार्य करने की क्षमता है और इसकी कोई दिशा नहीं होती है, केवल परिमाण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः यह एक अदिश राशि है।"
  },
  {
    question: "प्रश्न 21: निम्नलिखित में से कौन सी भौतिक राशि की प्रकृति अन्य तीन से भिन्न है?",
    answers: shuffle([
      { text: "शक्ति", correct: false },
      { text: "घनत्व", correct: false },
      { text: "आवेग", correct: true },
      { text: "आयतन", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक्ति, घनत्व और आयतन अदिश राशियाँ हैं, जबकि आवेग (बल × समय) एक सदिश राशि है क्योंकि इसकी दिशा बल की दिशा में होती है।"
  },
  {
    question: "प्रश्न 22: गुरुत्वीय विभव (Gravitational Potential) है एक:",
    answers: shuffle([
      { text: "सदिश राशि", correct: false },
      { text: "अदिश राशि", correct: true },
      { text: "न सदिश, न अदिश", correct: false },
      { text: "कभी-कभी सदिश", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुत्वीय विभव को इकाई द्रव्यमान को अनंत से किसी बिंदु तक लाने में किए गए कार्य के रूप में परिभाषित किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि यह कार्य और द्रव्यमान (दोनों अदिश) पर आधारित है, यह भी एक अदिश राशि है।"
  },
  {
    question: "प्रश्न 23: किसी सदिश का किसी अक्ष पर प्रक्षेप (Projection) होता है:",
    answers: shuffle([
      { text: "हमेशा एक सदिश", correct: false },
      { text: "हमेशा एक अदिश", correct: true },
      { text: "शून्य", correct: false },
      { text: "सदिश या अदिश हो सकता है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी सदिश का किसी अक्ष पर प्रक्षेप उस सदिश के प्रभाव की लंबाई को उस अक्ष की दिशा में दर्शाता है, जो कि एक अदिश मान होता है।"
  },
  {
    question: "प्रश्न 24: चुंबकीय फ्लक्स (Magnetic Flux) किस प्रकार की राशि है?",
    answers: shuffle([
      { text: "सदिश", correct: false },
      { text: "अदिश", correct: true },
      { text: "प्रदेश", correct: false },
      { text: "इकाई रहित", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> चुंबकीय फ्लक्स किसी सतह से गुजरने वाली चुंबकीय क्षेत्र रेखाओं की संख्या का माप है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह चुंबकीय क्षेत्र और क्षेत्रफल सदिश का अदिश गुणनफल है, इसलिए यह एक अदिश राशि है।"
  },
  {
    question: "प्रश्न 25: त्वरण की दिशा होती है:",
    answers: shuffle([
      { text: "वेग की दिशा में", correct: false },
      { text: "वेग में परिवर्तन की दिशा में", correct: true },
      { text: "वस्तु की गति के लंबवत", correct: false },
      { text: "हमेशा केंद्र की ओर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> त्वरण को वेग में परिवर्तन की दर के रूप में परिभाषित किया गया है, इसलिए इसकी दिशा हमेशा वेग में परिवर्तन (अंतिम वेग - प्रारंभिक वेग) की दिशा में होती है।"
  },
   {
    question: "प्रश्न 26. 'तात्क्षणिक चाल' (Instantaneous Speed) है:",
    answers: shuffle([
      { text: "तात्क्षणिक वेग की दिशा", correct: false },
      { text: "तात्क्षणिक वेग का परिमाण", correct: true },
      { text: "औसत वेग का परिमाण", correct: false },
      { text: "एक सदिश राशि", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> चाल हमेशा वेग सदिश का परिमाण होती है।"
  },
  {
    question: "प्रश्न 27. श्यानता गुणांक (Coefficient of Viscosity) है:",
    answers: shuffle([
      { text: "एक सदिश राशि", correct: false },
      { text: "एक अदिश राशि", correct: true },
      { text: "एक विमाहीन राशि", correct: false },
      { text: "एक मौलिक राशि", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्यानता गुणांक किसी तरल के प्रवाह के प्रतिरोध का एक माप है और इसका केवल परिमाण होता है, कोई विशिष्ट दिशा नहीं होती।"
  },
  {
    question: "प्रश्न 28. दो लंबवत सदिशों का अदिश गुणनफल (Dot Product) कितना होता है?",
    answers: shuffle([
      { text: "उनके परिमाणों का गुणनफल", correct: false },
      { text: "शून्य", correct: true },
      { text: "एक", correct: false },
      { text: "अनंत", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्योंकि A.B = |A||B|cos0 होता है, और लंबवत सदिशों के लिए 0 = 90° होता है, और cos(90°) = 0 होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, उनका अदिश गुणनफल शून्य होता है।"
  },
  {
    question: "प्रश्न 29. कोणीय संवेग (Angular Momentum) की दिशा किस नियम से ज्ञात की जाती है?",
    answers: shuffle([
      { text: "फ्लेमिंग के बाएँ हाथ के नियम से", correct: false },
      { text: "फ्लेमिंग के दाएँ हाथ के नियम से", correct: false },
      { text: "दाहिने हाथ के पेंच नियम (Right-Hand Grip Rule) से", correct: true },
      { text: "एम्पीयर के नियम से", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोणीय संवेग एक अक्षीय सदिश है जिसकी दिशा घूर्णन तल के लंबवत होती है, जिसे दाहिने हाथ के नियम का उपयोग करके निर्धारित किया जाता है।"
  },
  {
    question: "प्रश्न 30. किसी वस्तु का 'भार' (Weight) किस प्रकार की राशि है?",
    answers: shuffle([
      { text: "अदिश", correct: false },
      { text: "सदिश", correct: true },
      { text: "भारहीन", correct: false },
      { text: "स्थिरांक", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> भार एक प्रकार का बल है (द्रव्यमान × गुरुत्वीय त्वरण) जो हमेशा पृथ्वी के केंद्र की ओर निर्देशित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> दिशा होने के कारण यह एक सदिश राशि है।"
  },
  {
    question: "प्रश्न 31. यदि दो सदिशों का परिणामी सदिश शून्य है, तो वे दोनों सदिश होंगे:",
    answers: shuffle([
      { text: "समान परिमाण और समान दिशा में", correct: false },
      { text: "समान परिमाण और विपरीत दिशा में", correct: true },
      { text: "असमान परिमाण और विपरीत दिशा में", correct: false },
      { text: "एक दूसरे के लंबवत", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> दो सदिशों का योग केवल तभी शून्य हो सकता है जब उनके परिमाण बराबर हों और उनकी दिशाएँ ठीक एक दूसरे के विपरीत (180^{\\circ}) हों।"
  },
  {
    question: "प्रश्न 32. समय को अदिश राशि क्यों माना जाता है?",
    answers: shuffle([
      { text: "क्योंकि यह केवल आगे बढ़ता है।", correct: false },
      { text: "क्योंकि इसका केवल परिमाण होता है, दिशा नहीं।", correct: true },
      { text: "क्योंकि यह एक मौलिक राशि है।", correct: false },
      { text: "क्योंकि यह ऋणात्मक नहीं हो सकता।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> समय का केवल माप (परिमाण) होता है, जैसे सेकंड, मिनट, या घंटे।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी कोई स्थानिक दिशा नहीं होती है, इसलिए यह एक अदिश राशि है।"
  },
  {
    question: "प्रश्न 33. निम्नलिखित में से कौन सी एक अक्षीय सदिश (Axial Vector) है?",
    answers: shuffle([
      { text: "विस्थापन", correct: false },
      { text: "बल", correct: false },
      { text: "कोणीय वेग", correct: true },
      { text: "रैखिक संवेग", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> अक्षीय सदिश वे सदिश होते हैं जो घूर्णी गति से संबंधित होते हैं और जिनकी दिशा घूर्णन के अक्ष के अनुदिश होती है, जैसे कोणीय वेग और बल आघूर्ण।"
  },
  {
    question: "प्रश्न 34. 'शक्ति' (Power) एक अदिश राशि है क्योंकि यह:",
    answers: shuffle([
      { text: "ऊर्जा और समय का अनुपात है।", correct: false },
      { text: "बल और वेग का अदिश गुणनफल है।", correct: true },
      { text: "हमेशा धनात्मक होती है।", correct: false },
      { text: "इसकी कोई दिशा नहीं होती।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक्ति (P) को बल (F) और वेग (v) के अदिश गुणनफल (P = F . v) के रूप में भी परिभाषित किया जा सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> दो सदिशों का अदिश गुणनफल एक अदिश राशि होती है।"
  },
  {
    question: "प्रश्न 35. एक सदिश को उसके घटकों में तोड़ने की प्रक्रिया कहलाती है:",
    answers: shuffle([
      { text: "सदिश योग", correct: false },
      { text: "सदिश वियोजन", correct: true },
      { text: "सदिश गुणन", correct: false },
      { text: "सदिश प्रक्षेप", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी सदिश को दो या दो से अधिक सदिशों में विभाजित करना, जिनका संयुक्त प्रभाव मूल सदिश के समान होता है, सदिशों का वियोजन कहलाता है।"
  },
  {
    question: "प्रश्न 36. ध्रुवीय सदिश (Polar Vector) का उदाहरण है:",
    answers: shuffle([
      { text: "बल आघूर्ण", correct: false },
      { text: "कोणीय विस्थापन", correct: false },
      { text: "रैखिक संवेग", correct: true },
      { text: "कोणीय वेग", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्रुवीय सदिश वे सदिश होते हैं जिनका एक प्रारंभिक बिंदु होता है या जो एक सीधी रेखा में कार्य करते हैं, जैसे विस्थापन, वेग, बल और रैखिक संवेग।"
  },
  {
    question: "प्रश्न 37. दो समांतर सदिशों (Parallel Vectors) का सदिश गुणनफल (Cross Product) कितना होता है?",
    answers: shuffle([
      { text: "उनके परिमाणों का गुणनफल", correct: false },
      { text: "शून्य सदिश (Null Vector)", correct: true },
      { text: "एक", correct: false },
      { text: "अनंत", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्योंकि A \\times B = |A||B|sin(\\theta) \\hat{n} होता है, और समांतर सदिशों के लिए \theta = 0^{\\circ} होता है, और sin(0^{\\circ}) = 0 होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, उनका सदिश गुणनफल एक शून्य सदिश होता है।"
  },
  {
    question: "प्रश्न 38. 'विद्युत विभव' (Electric Potential) है:",
    answers: shuffle([
      { text: "एक सदिश राशि", correct: false },
      { text: "एक अदिश राशि", correct: true },
      { text: "एक प्रदेश राशि", correct: false },
      { text: "इनमें से कोई नहीं", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत विभव किसी बिंदु पर प्रति इकाई आवेश की स्थितिज ऊर्जा है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ऊर्जा और आवेश (दोनों अदिश) से संबंधित है, इसलिए यह एक अदिश राशि है।"
  },
  {
    question: "प्रश्न 39. किसी सदिश का परिमाण कभी भी नहीं हो सकता:",
    answers: shuffle([
      { text: "धनात्मक", correct: false },
      { text: "ऋणात्मक", correct: true },
      { text: "शून्य", correct: false },
      { text: "एक", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी सदिश का परिमाण उसकी लंबाई को दर्शाता है, और लंबाई कभी भी ऋणात्मक नहीं हो सकती।<br><br><i class='fa-solid fa-angles-right icon'></i> यह या तो शून्य हो सकता है (शून्य सदिश के लिए) या धनात्मक।"
  },
  {
    question: "प्रश्न 40. निम्नलिखित में से कौन-सी राशि सदिश योग के त्रिभुज नियम का पालन करती है?",
    answers: shuffle([
      { text: "विद्युत धारा", correct: false },
      { text: "दाब", correct: false },
      { text: "बल", correct: true },
      { text: "कार्य", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> बल एक सदिश राशि है और इसे जोड़ने के लिए सदिश योग के नियमों, जैसे त्रिभुज नियम या समांतर चतुर्भुज नियम, का उपयोग किया जाता है।"
  },
  {
    question: "प्रश्न 41. 'आवृत्ति' (Frequency) किस प्रकार की राशि है?",
    answers: shuffle([
      { text: "A) सदिश", correct: false },
      { text: "B) अदिश", correct: true },
      { text: "A), B) दोनों", correct: false },
      { text: "इनमें से कोई नहीं", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवृत्ति प्रति सेकंड चक्रों की संख्या है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका केवल परिमाण होता है, दिशा नहीं, इसलिए यह एक अदिश राशि है।"
  },
  {
    question: "प्रश्न 42. 'चुंबकीय क्षेत्र की तीव्रता' (Magnetic Field Intensity) है:",
    answers: shuffle([
      { text: "अदिश राशि", correct: false },
      { text: "सदिश राशि", correct: true },
      { text: "प्रदेश राशि", correct: false },
      { text: "एक अनुपात", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> चुंबकीय क्षेत्र की तीव्रता की एक निश्चित दिशा और परिमाण होता है, जिसे दिक्सूचक (compass) द्वारा पता लगाया जा सकता है।"
  },
  {
    question: "प्रश्न 43. 'घनत्व' (Density) एक अदिश राशि है क्योंकि:",
    answers: shuffle([
      { text: "यह द्रव्यमान और आयतन का अनुपात है।", correct: false },
      { text: "यह तापमान पर निर्भर करता है।", correct: false },
      { text: "इसकी कोई दिशा नहीं होती है।", correct: true },
      { text: "ये सभी", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> घनत्व (द्रव्यमान/आयतन) पदार्थ का एक गुण है और इसका केवल संख्यात्मक मान होता है, कोई दिशा नहीं।"
  },
  {
    question: "प्रश्न 44. एक हवाई जहाज पूर्व की ओर 400 किमी/घंटा से उड़ रहा है और हवा उत्तर की ओर 300 किमी/घंटा से बह रही है। जहाज का परिणामी वेग होगा:",
    answers: shuffle([
      { text: "एक अदिश राशि", correct: false },
      { text: "एक सदिश राशि", correct: true },
      { text: "शून्य", correct: false },
      { text: "केवल पूर्व दिशा में", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> परिणामी वेग, हवाई जहाज के वेग और हवा के वेग का सदिश योग होगा, जिसकी एक निश्चित दिशा (उत्तर-पूर्व के बीच) और परिमाण होगा।"
  },
  {
    question: "प्रश्न 45. 'ऊष्मा' (Heat) किस प्रकार की राशि है?",
    answers: shuffle([
      { text: "सदिश", correct: false },
      { text: "अदिश", correct: true },
      { text: "एक प्रकार का बल", correct: false },
      { text: "एक प्रकार का संवेग", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊष्मा ऊर्जा का एक रूप है जो तापमान के अंतर के कारण स्थानांतरित होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> ऊर्जा होने के कारण, यह एक अदिश राशि है।"
  },
  {
    question: "प्रश्न 46. यदि किसी सदिश को -1 से गुणा किया जाए, तो परिणामी सदिश होगा:",
    answers: shuffle([
      { text: "परिमाण में समान और दिशा में समान", correct: false },
      { text: "परिमाण में शून्य", correct: false },
      { text: "परिमाण में समान लेकिन दिशा में विपरीत", correct: true },
      { text: "परिमाण में दोगुना", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी सदिश को ऋणात्मक संख्या से गुणा करने पर उसका परिमाण वही रहता है लेकिन उसकी दिशा 180^{\\circ} से उलट जाती है।"
  },
  {
    question: "प्रश्न 47. 'आपेक्षिक वेग' (Relative Velocity) है:",
    answers: shuffle([
      { text: "हमेशा अदिश", correct: false },
      { text: "हमेशा सदिश", correct: true },
      { text: "कभी अदिश, कभी सदिश", correct: false },
      { text: "एक अनुपात", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> आपेक्षिक वेग एक वस्तु का वेग दूसरी वस्तु के सापेक्ष होता है, और यह दो वेग सदिशों का अंतर होता है, जिसका परिणाम भी एक सदिश होता है।"
  },
  {
    question: "प्रश्न 48. निम्नलिखित में से कौन सी राशि हमेशा धनात्मक होती है?",
    answers: shuffle([
      { text: "विस्थापन", correct: false },
      { text: "वेग", correct: false },
      { text: "दूरी", correct: true },
      { text: "त्वरण", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> दूरी तय किए गए पथ की कुल लंबाई है, जो कभी भी ऋणात्मक नहीं हो सकती।<br><br><i class='fa-solid fa-angles-right icon'></i> विस्थापन, वेग और त्वरण सदिश राशियाँ हैं और ये ऋणात्मक हो सकते हैं, जो दिशा को इंगित करता है।"
  },
  {
    question: "प्रश्न 49. 'प्रतिबल' (Stress) किस प्रकार की राशि है?",
    answers: shuffle([
      { text: "सदिश", correct: false },
      { text: "अदिश", correct: false },
      { text: "प्रदेश (टेंसर)", correct: true },
      { text: "इनमें से कोई नहीं", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिबल (आंतरिक प्रतिरोधी बल प्रति इकाई क्षेत्रफल) का मान उस तल के अभिविन्यास पर निर्भर करता है जिस पर यह कार्य करता है, इसलिए यह एक प्रदेश राशि है।"
  },
  {
    question: "प्रश्न 50. एक घड़ी की सेकंड की सुई का कोणीय वेग है:",
    answers: shuffle([
      { text: "एक अदिश राशि", correct: false },
      { text: "एक सदिश राशि", correct: true },
      { text: "शून्य", correct: false },
      { text: "समय के साथ परिवर्तनशील", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> घड़ी की सुई की गति घूर्णी गति है, और इसके कोणीय वेग की एक निश्चित दिशा (घड़ी के तल के लंबवत, अंदर की ओर) होती है, इसलिए यह एक सदिश है।"
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