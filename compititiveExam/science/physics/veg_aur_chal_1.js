const questions = [
  {
    topHeading: "गति, चाल और वेग पर आधारित 50 MCQs,part_1 (quiz_no.6)"
  },
  {
    question: "प्रश्न 1: किसी वस्तु द्वारा इकाई समय में तय की गई दूरी क्या कहलाती है?",
    answers: shuffle([
      { text: "वेग", correct: false },
      { text: "चाल", correct: true },
      { text: "त्वरण", correct: false },
      { text: "विस्थापन", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> चाल को प्रति इकाई समय में तय की गई दूरी के रूप में परिभाषित किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक अदिश राशि है।"
  },
  {
    question: "प्रश्न 2: वेग के बारे में निम्नलिखित में से कौन सा कथन सत्य है?",
    answers: shuffle([
      { text: "यह एक अदिश राशि है।", correct: false },
      { text: "यह हमेशा धनात्मक होता है।", correct: false },
      { text: "यह इकाई समय में तय किया गया विस्थापन है।", correct: true },
      { text: "इसका मात्रक मीटर प्रति सेकंड वर्ग है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेग एक सदिश राशि है, जिसे प्रति इकाई समय में हुए विस्थापन के रूप में परिभाषित किया जाता है।"
  },
  {
    question: "प्रश्न 3: चाल और वेग में मुख्य अंतर क्या है?",
    answers: shuffle([
      { text: "चाल में दिशा होती है, वेग में नहीं।", correct: false },
      { text: "वेग में दिशा होती है, चाल में नहीं।", correct: true },
      { text: "दोनों के मात्रक भिन्न होते हैं।", correct: false },
      { text: "दोनों हमेशा बराबर होते हैं।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> चाल एक अदिश राशि है जिसमें केवल परिमाण होता है, जबकि वेग एक सदिश राशि है जिसमें परिमाण और दिशा दोनों होते हैं।"
  },
  {
    question: "प्रश्न 4: यदि कोई वस्तु एक वृत्ताकार पथ पर एक चक्कर पूरा करती है, तो उसका औसत वेग कितना होगा?",
    answers: shuffle([
      { text: "शून्य", correct: true },
      { text: "उसकी औसत चाल के बराबर", correct: false },
      { text: "अनंत", correct: false },
      { text: "वृत्त की परिधि के बराबर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक पूर्ण चक्कर के बाद, वस्तु का कुल विस्थापन शून्य होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि औसत वेग = कुल विस्थापन / कुल समय, इसलिए औसत वेग भी शून्य होगा।"
  },
  {
    question: "प्रश्न 5: तात्क्षणिक वेग और तात्क्षणिक चाल के बीच क्या संबंध है?",
    answers: shuffle([
      { text: "तात्क्षणिक चाल, तात्क्षणिक वेग का परिमाण है।", correct: true },
      { text: "तात्क्षणिक वेग, तात्क्षणिक चाल का परिमाण है।", correct: false },
      { text: "वे हमेशा बराबर होते हैं।", correct: false },
      { text: "उनमें कोई संबंध नहीं है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी भी क्षण पर, वस्तु की चाल उसके वेग सदिश के परिमाण के बराबर होती है।"
  },
  {
    question: "प्रश्न 6: वेग-समय ग्राफ का ढलान (slope) क्या दर्शाता है?",
    answers: shuffle([
      { text: "दूरी", correct: false },
      { text: "विस्थापन", correct: false },
      { text: "त्वरण", correct: true },
      { text: "चाल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेग-समय ग्राफ का ढलान वेग में परिवर्तन की दर (Δv/Δt) को दर्शाता है, जो त्वरण की परिभाषा है।"
  },
  {
    question: "प्रश्न 7: जब कोई वस्तु मुक्त रूप से पृथ्वी की ओर गिरती है, तो उसका वेग:",
    answers: shuffle([
      { text: "घटता है", correct: false },
      { text: "बढ़ता है", correct: true },
      { text: "स्थिर रहता है", correct: false },
      { text: "शून्य हो जाता है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुत्वाकर्षण बल के कारण वस्तु में एकसमान त्वरण (g) उत्पन्न होता है, जिससे उसका वेग लगातार बढ़ता जाता है।"
  },
  {
    question: "प्रश्न 8: निम्नलिखित में से किस स्थिति में किसी वस्तु का औसत वेग शून्य हो सकता है, जबकि औसत चाल शून्य न हो?",
    answers: shuffle([
      { text: "जब वस्तु सीधी रेखा में चलती है।", correct: false },
      { text: "जब वस्तु अपनी प्रारंभिक स्थिति पर वापस लौट आती है।", correct: true },
      { text: "जब वस्तु स्थिर रहती है।", correct: false },
      { text: "ऐसा कभी संभव नहीं है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि वस्तु घूमकर प्रारंभिक स्थिति पर आ जाए, तो उसका विस्थापन शून्य होगा (अतः औसत वेग शून्य), लेकिन तय की गई दूरी शून्य नहीं होगी (अतः औसत चाल शून्य नहीं होगी)।"
  },
  {
    question: "प्रश्न 9: यदि किसी वस्तु का विस्थापन शून्य है, तो उसकी चाल के बारे में क्या कहा जा सकता है?",
    answers: shuffle([
      { text: "यह निश्चित रूप से शून्य है।", correct: false },
      { text: "यह निश्चित रूप से अशून्य है।", correct: false },
      { text: "यह शून्य हो भी सकती है और नहीं भी।", correct: true },
      { text: "यह ऋणात्मक है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि वस्तु चली ही नहीं तो विस्थापन और चाल दोनों शून्य होंगे।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि वस्तु चलकर वापस प्रारंभिक बिंदु पर आ गई तो विस्थापन शून्य होगा लेकिन चाल अशून्य होगी।"
  },
  {
    question: "प्रश्न 10: दूरी-समय ग्राफ का ढलान क्या दर्शाता है?",
    answers: shuffle([
      { text: "त्वरण", correct: false },
      { text: "वेग", correct: false },
      { text: "चाल", correct: true },
      { text: "बल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> दूरी-समय ग्राफ का ढलान दूरी में परिवर्तन की दर (Δd/Δt) को दर्शाता है, जो चाल की परिभाषा है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि यह विस्थापन-समय ग्राफ होता, तो ढलान वेग को दर्शाता।"
  },
  {
    question: "प्रश्न 11: एकसमान वेग से गतिमान वस्तु का त्वरण कितना होता है?",
    answers: shuffle([
      { text: "शून्य", correct: true },
      { text: "एकसमान", correct: false },
      { text: "परिवर्ती", correct: false },
      { text: "अनंत", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एकसमान वेग का अर्थ है कि वेग में कोई परिवर्तन नहीं हो रहा है (न परिमाण में, न दिशा में)।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि त्वरण वेग में परिवर्तन की दर है, यह शून्य होगा।"
  },
  {
    question: "प्रश्न 12: यदि किसी वस्तु की चाल लगातार बढ़ रही है, तो उसका वेग:",
    answers: shuffle([
      { text: "निश्चित रूप से बढ़ रहा है।", correct: true },
      { text: "निश्चित रूप से घट रहा है।", correct: false },
      { text: "स्थिर रह सकता है।", correct: false },
      { text: "बढ़ भी सकता है और घट भी सकता है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> चाल वेग का परिमाण है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि परिमाण बढ़ रहा है, तो वेग सदिश भी बदल रहा है, यानी वेग बढ़ रहा है।"
  },
  {
    question: "प्रश्न 13: आपेक्षिक वेग (Relative Velocity) की अवधारणा किस पर लागू होती है?",
    answers: shuffle([
      { text: "केवल अदिश राशियों पर", correct: false },
      { text: "केवल सदिश राशियों पर", correct: true },
      { text: "अदिश और सदिश दोनों पर", correct: false },
      { text: "केवल स्थिर वस्तुओं पर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> आपेक्षिक वेग एक वस्तु के वेग का दूसरी वस्तु के सापेक्ष माप है, और यह दो वेग सदिशों का अंतर होता है।"
  },
  {
    question: "प्रश्न 14: जब एक गेंद को सीधे ऊपर फेंका जाता है, तो उच्चतम बिंदु पर उसका वेग क्या होता है?",
    answers: shuffle([
      { text: "अधिकतम", correct: false },
      { text: "न्यूनतम (लेकिन अशून्य)", correct: false },
      { text: "शून्य", correct: true },
      { text: "गुरुत्वीय त्वरण के बराबर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> उच्चतम बिंदु पर गेंद क्षण भर के लिए रुक जाती है, इसलिए उसका तात्क्षणिक वेग शून्य होता है, जिसके बाद वह नीचे आना शुरू करती है।"
  },
  {
    question: "प्रश्न 15: निम्नलिखित में से कौन सी राशि ऋणात्मक नहीं हो सकती?",
    answers: shuffle([
      { text: "वेग", correct: false },
      { text: "विस्थापन", correct: false },
      { text: "त्वरण", correct: false },
      { text: "चाल", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> चाल (दूरी/समय) हमेशा एक धनात्मक मान या शून्य होती है क्योंकि दूरी कभी भी ऋणात्मक नहीं हो सकती।<br><br><i class='fa-solid fa-angles-right icon'></i> वेग, विस्थापन और त्वरण सदिश राशियाँ हैं और दिशा के आधार पर ऋणात्मक हो सकते हैं।"
  },
  {
    question: "प्रश्न 16: किसी वाहन का ओडोमीटर (Odometer) क्या मापता है?",
    answers: shuffle([
      { text: "तात्क्षणिक चाल", correct: false },
      { text: "औसत चाल", correct: false },
      { text: "तय की गई दूरी", correct: true },
      { text: "तात्क्षणिक वेग", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओडोमीटर वाहन द्वारा यात्रा की गई कुल दूरी को रिकॉर्ड करता है।"
  },
  {
    question: "प्रश्न 17: किसी वाहन का स्पीडोमीटर (Speedometer) क्या मापता है?",
    answers: shuffle([
      { text: "औसत चाल", correct: false },
      { text: "तात्क्षणिक चाल", correct: true },
      { text: "औसत वेग", correct: false },
      { text: "तात्क्षणिक वेग", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्पीडोमीटर किसी भी क्षण पर वाहन की चाल को मापता है।"
  },
  {
    question: "प्रश्न 18: यदि किसी वस्तु का वेग-समय ग्राफ समय-अक्ष के समांतर एक सीधी रेखा है, तो वस्तु:",
    answers: shuffle([
      { text: "स्थिर है।", correct: false },
      { text: "एकसमान त्वरण से चल रही है।", correct: false },
      { text: "एकसमान वेग से चल रही है।", correct: true },
      { text: "परिवर्ती त्वरण से चल रही है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> समय-अक्ष के समांतर रेखा का अर्थ है कि समय के साथ वेग का मान नहीं बदल रहा है, अर्थात वेग एकसमान (स्थिर) है।"
  },
  {
    question: "प्रश्न 19: वेग का विमीय सूत्र क्या है?",
    answers: shuffle([
      { text: "[LT⁻¹]", correct: true },
      { text: "[LT⁻²]", correct: false },
      { text: "[MLT⁻¹]", correct: false },
      { text: "[L]", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेग = विस्थापन / समय, जिसका विमीय सूत्र [L]/[T] = [LT⁻¹] है।"
  },
  {
    question: "प्रश्न 20: असमान वेग से गतिमान वस्तु का:",
    answers: shuffle([
      { text: "त्वरण शून्य होता है।", correct: false },
      { text: "त्वरण अशून्य होता है।", correct: true },
      { text: "विस्थापन हमेशा शून्य होता है।", correct: false },
      { text: "चाल हमेशा स्थिर रहती है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> असमान (या परिवर्ती) वेग का अर्थ है कि वेग बदल रहा है।<br><br><i class='fa-solid fa-angles-right icon'></i> वेग में परिवर्तन की दर को त्वरण कहते हैं, इसलिए त्वरण अशून्य होगा।"
  },
  {
    question: "प्रश्न 21: दो रेलगाड़ियाँ समांतर पटरियों पर एक ही दिशा में चल रही हैं। एक दूसरे के सापेक्ष उनका वेग होगा:",
    answers: shuffle([
      { text: "उनके वेगों का योग।", correct: false },
      { text: "उनके वेगों का अंतर।", correct: true },
      { text: "उनके वेगों का गुणनफल।", correct: false },
      { text: "शून्य।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब दो वस्तुएँ एक ही दिशा में चलती हैं, तो उनका आपेक्षिक वेग उनके व्यक्तिगत वेगों के अंतर के बराबर होता है।"
  },
  {
    question: "प्रश्न 22: औसत चाल और औसत वेग का परिमाण बराबर कब होता है?",
    answers: shuffle([
      { text: "जब वस्तु वृत्ताकार पथ पर चलती है।", correct: false },
      { text: "जब वस्तु बिना दिशा बदले एक सीधी रेखा में चलती है।", correct: true },
      { text: "जब वस्तु अपनी प्रारंभिक स्थिति पर लौट आती है।", correct: false },
      { text: "वे कभी बराबर नहीं हो सकते।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस स्थिति में, तय की गई दूरी और विस्थापन का परिमाण बराबर होता है, इसलिए औसत चाल और औसत वेग का परिमाण भी बराबर होता है।"
  },
  {
    question: "प्रश्न 23: एक धावक 400 मीटर के ट्रैक का एक चक्कर पूरा करता है। उसका विस्थापन और तय की गई दूरी क्रमशः हैं:",
    answers: shuffle([
      { text: "400 मीटर, 0", correct: false },
      { text: "0, 400 मीटर", correct: true },
      { text: "400 मीटर, 400 मीटर", correct: false },
      { text: "0, 0", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक चक्कर पूरा करने पर, धावक प्रारंभिक बिंदु पर वापस आ जाता है, इसलिए विस्थापन शून्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> तय की गई दूरी ट्रैक की लंबाई, यानी 400 मीटर है।"
  },
  {
    question: "प्रश्न 24: मंदन (Retardation) क्या है?",
    answers: shuffle([
      { text: "धनात्मक त्वरण", correct: false },
      { text: "ऋणात्मक त्वरण", correct: true },
      { text: "शून्य त्वरण", correct: false },
      { text: "स्थिर वेग", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब किसी वस्तु का वेग समय के साथ घटता है, तो उसके त्वरण को मंदन कहते हैं, जो कि एक ऋणात्मक त्वरण है।"
  },
  {
    question: "प्रश्न 25: यदि किसी वस्तु की चाल शून्य है, तो उसका वेग क्या होगा?",
    answers: shuffle([
      { text: "शून्य", correct: true },
      { text: "अशून्य", correct: false },
      { text: "निर्धारित नहीं किया जा सकता", correct: false },
      { text: "अनंत", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> चाल वेग का परिमाण है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि परिमाण शून्य है, तो वेग सदिश स्वयं एक शून्य सदिश होगा।"
  },
  {
    question: "प्रश्न 26. प्रक्षेप्य गति में, उच्चतम बिंदु पर वेग का ऊर्ध्वाधर घटक होता है:",
    answers: shuffle([
      { text: "अधिकतम", correct: false },
      { text: "शून्य", correct: true },
      { text: "क्षैतिज घटक के बराबर", correct: false },
      { text: "न्यूनतम लेकिन अशून्य", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> उच्चतम बिंदु पर, वस्तु क्षण भर के लिए ऊपर जाना बंद कर देती है, इसलिए वेग का ऊर्ध्वाधर घटक शून्य हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> केवल क्षैतिज घटक ही बचता है।"
  },
  {
    question: "प्रश्न 27. वेग में परिवर्तन की दर को क्या कहते हैं?",
    answers: shuffle([
      { text: "चाल", correct: false },
      { text: "संवेग", correct: false },
      { text: "आवेग", correct: false },
      { text: "त्वरण", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह त्वरण की मानक परिभाषा है।"
  },
  {
    question: "प्रश्न 28. किसी सीधी सड़क पर चलती हुई कार की गति किस प्रकार की गति का उदाहरण है?",
    answers: shuffle([
      { text: "वृत्तीय गति", correct: false },
      { text: "दोलनी गति", correct: false },
      { text: "स्थानांतरीय (सरल रेखीय) गति", correct: true },
      { text: "घूर्णी गति", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कोई वस्तु एक सीधी रेखा में चलती है, तो उसकी गति को स्थानांतरीय या सरल रेखीय गति कहा जाता है।"
  },
  {
    question: "प्रश्न 29. यदि किसी वस्तु का वेग समय के साथ रैखिक रूप से बढ़ता है, तो उसका त्वरण:",
    answers: shuffle([
      { text: "शून्य है।", correct: false },
      { text: "स्थिर (एकसमान) है।", correct: true },
      { text: "बढ़ रहा है।", correct: false },
      { text: "घट रहा है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेग-समय संबंध (v = u + at) एक रैखिक समीकरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि वेग रैखिक रूप से बढ़ता है, तो इसका मतलब है कि ढलान (त्वरण) स्थिर है।"
  },
  {
    question: "प्रश्न 30. औसत चाल की गणना कैसे की जाती है?",
    answers: shuffle([
      { text: "कुल विस्थापन / कुल समय", correct: false },
      { text: "कुल दूरी / कुल समय", correct: true },
      { text: "(प्रारंभिक वेग + अंतिम वेग) / 2", correct: false },
      { text: "वेग में परिवर्तन / समय", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> औसत चाल की परिभाषा कुल यात्रा में तय की गई कुल दूरी को कुल समय से विभाजित करके प्राप्त की जाती है।"
  },
  {
    question: "प्रश्न 31. एक लिफ्ट एकसमान वेग से नीचे आ रही है। उसमें रखे एक पिंड का त्वरण क्या है?",
    answers: shuffle([
      { text: "शून्य", correct: true },
      { text: "गुरुत्वीय त्वरण (g) के बराबर", correct: false },
      { text: "g से कम", correct: false },
      { text: "g से अधिक", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एकसमान वेग का मतलब शून्य त्वरण है, चाहे गति किसी भी दिशा में हो।"
  },
  {
    question: "प्रश्न 32. निम्नलिखित में से कौन सी गति में दूरी और विस्थापन का परिमाण समान होता है?",
    answers: shuffle([
      { text: "वृत्ताकार गति", correct: false },
      { text: "दोलनी गति", correct: false },
      { text: "एक ही दिशा में सरल रेखीय गति", correct: true },
      { text: "प्रक्षेप्य गति", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कोई वस्तु बिना मुड़े एक सीधी रेखा में चलती है, तो उसके द्वारा तय की गई दूरी उसके विस्थापन के परिमाण के ठीक बराबर होती है।"
  },
  {
    question: "प्रश्न 33. वेग-समय ग्राफ और समय-अक्ष के बीच घिरा क्षेत्रफल क्या दर्शाता है?",
    answers: shuffle([
      { text: "त्वरण", correct: false },
      { text: "औसत चाल", correct: false },
      { text: "विस्थापन", correct: true },
      { text: "तात्क्षणिक वेग", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेग-समय ग्राफ के अंतर्गत क्षेत्रफल (वेग × समय) विस्थापन को निरूपित करता है।"
  },
  {
    question: "प्रश्न 34. यदि कोई वस्तु समान समय अंतराल में समान दूरी तय करती है, तो उसकी चाल को कहा जाता है:",
    answers: shuffle([
      { text: "एकसमान चाल", correct: true },
      { text: "असमान चाल", correct: false },
      { text: "औसत चाल", correct: false },
      { text: "तात्क्षणिक चाल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एकसमान चाल की परिभाषा है।"
  },
  {
    question: "प्रश्न 35. स्वतंत्रतापूर्वक गिरती हुई वस्तु की गति एक उदाहरण है:",
    answers: shuffle([
      { text: "एकसमान वेग की गति का", correct: false },
      { text: "एकसमान चाल की गति का", correct: false },
      { text: "एकसमान त्वरित गति का", correct: true },
      { text: "असमान त्वरण की गति का", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> वायु प्रतिरोध को नगण्य मानने पर, वस्तु केवल गुरुत्वीय त्वरण (g) के अधीन गिरती है, जो एक स्थिर मान है।"
  },
  {
    question: "प्रश्न 36. दो वस्तुएँ जो अलग-अलग वेग से चल रही हैं, उनका त्वरण समान हो सकता है। यह कथन:",
    answers: shuffle([
      { text: "सत्य है", correct: true },
      { text: "असत्य है", correct: false },
      { text: "केवल तभी सत्य है जब वे एक ही दिशा में चल रही हों", correct: false },
      { text: "केवल तभी सत्य है जब उनका द्रव्यमान समान हो", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> दो अलग-अलग कारों का वेग अलग-अलग हो सकता है, लेकिन यदि दोनों एक ही दर से अपना वेग बदल रही हैं, तो उनका त्वरण समान हो सकता है।"
  },
  {
    question: "प्रश्न 37. यदि कोई साइकिल सवार एक मोड़ पर एकसमान चाल से मुड़ता है, तो उसका वेग:",
    answers: shuffle([
      { text: "स्थिर रहता है", correct: false },
      { text: "परिवर्तित होता है", correct: true },
      { text: "शून्य हो जाता है", correct: false },
      { text: "अनंत हो जाता है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> भले ही चाल (परिमाण) स्थिर हो, मोड़ पर दिशा बदल जाती है, जिससे वेग सदिश परिवर्तित हो जाता है।"
  },
  {
    question: "प्रश्न 38. किसी कण की गति का वर्णन करने के लिए, हमें किसकी आवश्यकता होती है?",
    answers: shuffle([
      { text: "केवल उसकी चाल की", correct: false },
      { text: "केवल उसकी स्थिति की", correct: false },
      { text: "एक निर्देश तंत्र की", correct: true },
      { text: "केवल उसके द्रव्यमान की", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी वस्तु की स्थिति, विस्थापन, वेग आदि का वर्णन करने के लिए एक संदर्भ बिंदु या निर्देश तंत्र (Frame of Reference) आवश्यक है।"
  },
  {
    question: "प्रश्न 39. एक वस्तु को ऊर्ध्वाधर रूप से ऊपर की ओर फेंका जाता है। ऊपर जाने के दौरान उसका वेग:",
    answers: shuffle([
      { text: "बढ़ता है", correct: false },
      { text: "घटता है", correct: true },
      { text: "स्थिर रहता है", correct: false },
      { text: "पहले बढ़ता है फिर घटता है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुत्वाकर्षण बल नीचे की ओर कार्य करता है, जो वस्तु की ऊपर की गति का विरोध करता है, जिससे उसका वेग लगातार घटता जाता है जब तक कि वह उच्चतम बिंदु पर शून्य न हो जाए।"
  },
  {
    question: "प्रश्न 40. \"तात्क्षणिक\" शब्द का क्या अर्थ है?",
    answers: shuffle([
      { text: "एक लंबी अवधि में", correct: false },
      { text: "किसी विशेष क्षण पर", correct: true },
      { text: "यात्रा की शुरुआत में", correct: false },
      { text: "यात्रा के अंत में", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> भौतिकी में \"तात्क्षणिक\" का अर्थ है समय के एक बहुत ही छोटे अंतराल पर या किसी विशिष्ट क्षण पर मापा गया मान।"
  },
  {
    question: "प्रश्न 41. यदि किसी वस्तु का विस्थापन-समय ग्राफ एक वक्र है, तो उसका वेग:",
    answers: shuffle([
      { text: "स्थिर है", correct: false },
      { text: "शून्य है", correct: false },
      { text: "परिवर्ती (असमान) है", correct: true },
      { text: "अनंत है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक वक्र ग्राफ का मतलब है कि ढलान (जो वेग को दर्शाता है) लगातार बदल रहा है, इसलिए वेग परिवर्ती है।"
  },
  {
    question: "प्रश्न 42. किसी ढलान पर लुढ़कती हुई गेंद की गति में:",
    answers: shuffle([
      { text: "केवल चाल बदलती है।", correct: false },
      { text: "केवल दिशा बदलती है।", correct: false },
      { text: "चाल और दिशा दोनों स्थिर रहते हैं।", correct: false },
      { text: "चाल और वेग दोनों बदलते हैं।", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> ढलान पर नीचे आते समय गुरुत्वाकर्षण के कारण गेंद की चाल बढ़ती है, और चूँकि चाल बदल रही है, वेग भी बदलता है।"
  },
  {
    question: "प्रश्न 43. एक सीधी रेखा में गतिमान कण के लिए, कौन सी दो राशियाँ समान हो सकती हैं?",
    answers: shuffle([
      { text: "औसत चाल और तात्क्षणिक चाल", correct: false },
      { text: "औसत वेग और तात्क्षणिक वेग", correct: false },
      { text: "चाल और वेग का परिमाण", correct: true },
      { text: "दूरी और त्वरण", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी भी क्षण पर, किसी वस्तु की चाल उसके वेग के परिमाण के बराबर होती है।"
  },
  {
    question: "प्रश्न 44. यदि वेग और त्वरण की दिशाएँ विपरीत हों, तो वस्तु की चाल:",
    answers: shuffle([
      { text: "बढ़ेगी", correct: false },
      { text: "घटेगी", correct: true },
      { text: "स्थिर रहेगी", correct: false },
      { text: "शून्य हो जाएगी", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब त्वरण, वेग की दिशा के विपरीत होता है, तो यह गति का विरोध करता है, जिससे वस्तु की चाल कम हो जाती है (मंदन)।"
  },
  {
    question: "प्रश्न 45. एक कार एक शहर से दूसरे शहर तक एक निश्चित चाल से जाती है और फिर एक अलग चाल से वापस आती है। पूरी यात्रा के लिए औसत वेग क्या है?",
    answers: shuffle([
      { text: "दोनों चालों का औसत", correct: false },
      { text: "शून्य", correct: true },
      { text: "जाने वाली चाल के बराबर", correct: false },
      { text: "आने वाली चाल के बराबर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि कार अपनी प्रारंभिक स्थिति पर वापस आ जाती है, कुल विस्थापन शून्य होता है, इसलिए औसत वेग भी शून्य होगा।"
  },
  {
    question: "प्रश्न 46. 'टर्मिनल वेग' (Terminal Velocity) क्या है?",
    answers: shuffle([
      { text: "किसी वस्तु का प्रारंभिक वेग", correct: false },
      { text: "किसी वस्तु का अधिकतम वेग", correct: false },
      { text: "वह स्थिर वेग जो कोई वस्तु वायु प्रतिरोध के तहत प्राप्त करती है", correct: true },
      { text: "किसी वस्तु का न्यूनतम वेग", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कोई वस्तु किसी तरल (जैसे हवा) में गिरती है, तो एक बिंदु आता है जब गुरुत्वाकर्षण बल और वायु प्रतिरोध बल बराबर हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इस बिंदु पर, वस्तु का त्वरण शून्य हो जाता है और वह एक स्थिर वेग से गिरती है जिसे टर्मिनल वेग कहते हैं।"
  },
  {
    question: "प्रश्न 47. यदि किसी वस्तु का वेग स्थिर है, तो उसका विस्थापन-समय ग्राफ कैसा होगा?",
    answers: shuffle([
      { text: "एक परवलय", correct: false },
      { text: "एक वक्र", correct: false },
      { text: "एक स्थिर ढलान वाली सीधी रेखा", correct: true },
      { text: "समय-अक्ष के समांतर एक रेखा", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्थिर वेग का अर्थ है कि ढलान (वेग) स्थिर है।<br><br><i class='fa-solid fa-angles-right icon'></i> एक सीधी रेखा का ढलान स्थिर होता है।"
  },
  {
    question: "प्रश्न 48. क्या किसी वस्तु की चाल स्थिर हो सकती है जबकि उसका वेग परिवर्ती हो?",
    answers: shuffle([
      { text: "हाँ", correct: true },
      { text: "नहीं", correct: false },
      { text: "केवल निर्वात में", correct: false },
      { text: "केवल घर्षण रहित सतह पर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाँ, यह एकसमान वृत्तीय गति में होता है, जहाँ चाल स्थिर रहती है लेकिन दिशा में निरंतर परिवर्तन के कारण वेग परिवर्ती होता है।"
  },
  {
    question: "प्रश्न 49. एक पत्थर को एक निश्चित ऊँचाई से गिराया जाता है। जैसे-जैसे वह नीचे गिरता है, उसका वेग:",
    answers: shuffle([
      { text: "एकसमान रहता है", correct: false },
      { text: "एकसमान रूप से बढ़ता है", correct: true },
      { text: "असमान रूप से बढ़ता है", correct: false },
      { text: "एकसमान रूप से घटता है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुत्वीय त्वरण (g) के स्थिर मान के कारण, पत्थर का वेग प्रत्येक सेकंड में एक निश्चित मात्रा में बढ़ता है।"
  },
  {
    question: "प्रश्न 50. दो व्यक्ति समान वेग से एक दूसरे की ओर आ रहे हैं। उनका आपेक्षिक वेग क्या है?",
    answers: shuffle([
      { text: "शून्य", correct: false },
      { text: "किसी एक व्यक्ति के वेग के बराबर", correct: false },
      { text: "किसी एक व्यक्ति के वेग का दोगुना", correct: true },
      { text: "उनके वेगों का अंतर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब दो वस्तुएँ विपरीत दिशाओं में चलती हैं, तो उनका आपेक्षिक वेग उनके व्यक्तिगत वेगों के परिमाण के योग के बराबर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि वेग समान हैं, तो यह दोगुना हो जाएगा।"
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