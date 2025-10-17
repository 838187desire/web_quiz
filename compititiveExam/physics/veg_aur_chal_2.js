const questions = [
  {
    topHeading: "गति, चाल और वेग पर आधारित 50 MCQs,part_2 (quiz_no.)"
  },
  {
    question: "प्रश्न 1: यदि कोई वस्तु एक चौथाई वृत्ताकार पथ तय करती है, तो दूरी और विस्थापन का अनुपात क्या होगा?",
    answers: shuffle([
      { text: "हमेशा 1 से अधिक", correct: true },
      { text: "हमेशा 1 से कम", correct: false },
      { text: "हमेशा 1 के बराबर", correct: false },
      { text: "शून्य", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> पथ की लंबाई (दूरी) हमेशा सीधी रेखा की दूरी (विस्थापन) से अधिक होगी, सिवाय एक सीधी रेखा गति के।<br><br><i class='fa-solid fa-angles-right icon'></i> एक चौथाई वृत्त में, दूरी (πr/2) विस्थापन (r√2) से अधिक होती है।"
  },
  {
    question: "प्रश्न 2: किसी गतिशील वस्तु के लिए, विस्थापन का परिमाण तय की गई दूरी से:",
    answers: shuffle([
      { text: "हमेशा अधिक होता है", correct: false },
      { text: "हमेशा कम होता है", correct: false },
      { text: "बराबर या कम होता है", correct: true },
      { text: "बराबर या अधिक होता है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> विस्थापन दो बिंदुओं के बीच की सबसे छोटी दूरी है, जबकि दूरी वास्तविक पथ की लंबाई है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए विस्थापन या तो दूरी के बराबर होगा (सरल रेखीय गति में) या उससे कम होगा।"
  },
  {
    question: "प्रश्न 3: ऋणात्मक वेग का क्या अर्थ है?",
    answers: shuffle([
      { text: "वस्तु की चाल घट रही है।", correct: false },
      { text: "वस्तु एक चुनी हुई ऋणात्मक दिशा में गति कर रही है।", correct: true },
      { text: "वस्तु धीमी हो रही है।", correct: false },
      { text: "वस्तु स्थिर है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेग में ऋणात्मक चिह्न केवल गति की दिशा को इंगित करता है, जो निर्देश तंत्र में चुनी गई धनात्मक दिशा के विपरीत होती है।"
  },
  {
    question: "प्रश्न 4: एक कार विरामावस्था से शुरू होती है और एकसमान त्वरण के साथ गति करती है। इसकी तात्क्षणिक चाल:",
    answers: shuffle([
      { text: "स्थिर रहती है।", correct: false },
      { text: "समय के साथ रैखिक रूप से बढ़ती है।", correct: true },
      { text: "समय के साथ घटती है।", correct: false },
      { text: "पहले बढ़ती है फिर घटती है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> समीकरण v = u + at में, यदि u=0 और a स्थिर है, तो चाल (v) सीधे समय (t) के समानुपाती होती है।"
  },
  {
    question: "प्रश्न 5: क्या किसी वस्तु का वेग शून्य हो सकता है जबकि उसका त्वरण अशून्य हो?",
    answers: shuffle([
      { text: "नहीं, यह असंभव है।", correct: false },
      { text: "हाँ, जब उसे ऊपर की ओर फेंका जाता है तो उच्चतम बिंदु पर।", correct: true },
      { text: "हाँ, यदि वह स्थिर है।", correct: false },
      { text: "हाँ, एकसमान वृत्तीय गति में।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब एक गेंद को ऊपर फेंका जाता है, तो उच्चतम बिंदु पर उसका वेग क्षण भर के लिए शून्य होता है, लेकिन गुरुत्वीय त्वरण अभी भी उस पर नीचे की ओर कार्य कर रहा होता है।"
  },
  {
    question: "प्रश्न 6: यदि किसी वस्तु का स्थिति-समय ग्राफ समय-अक्ष के समांतर एक सीधी रेखा है, तो वस्तु का वेग:",
    answers: shuffle([
      { text: "स्थिर है", correct: false },
      { text: "बढ़ रहा है", correct: false },
      { text: "घट रहा है", correct: false },
      { text: "शून्य है", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका मतलब है कि समय के साथ वस्तु की स्थिति नहीं बदल रही है, यानी वस्तु स्थिर है और उसका वेग शून्य है।"
  },
  {
    question: "प्रश्न 7: एक समान गति (Uniform Motion) में, वस्तु का वेग:",
    answers: shuffle([
      { text: "स्थिर रहता है", correct: true },
      { text: "बदलता रहता है", correct: false },
      { text: "शून्य होता है", correct: false },
      { text: "बढ़ता रहता है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक समान गति का अर्थ है कि वस्तु का वेग (परिमाण और दिशा दोनों) स्थिर है।"
  },
  {
    question: "प्रश्न 8: निम्नलिखित में से कौन सी एक सदिश राशि है?",
    answers: shuffle([
      { text: "दूरी", correct: false },
      { text: "चाल", correct: false },
      { text: "वेग", correct: true },
      { text: "समय", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेग में परिमाण और दिशा दोनों होते हैं, इसलिए यह एक सदिश राशि है।"
  },
  {
    question: "प्रश्न 9: यदि किसी कण का वेग एकसमान है, तो उसकी चाल:",
    answers: shuffle([
      { text: "निश्चित रूप से एकसमान होगी।", correct: true },
      { text: "परिवर्ती हो सकती है।", correct: false },
      { text: "शून्य होनी चाहिए।", correct: false },
      { text: "अनंत होनी चाहिए।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एकसमान वेग का अर्थ है कि परिमाण और दिशा दोनों स्थिर हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> चाल वेग का परिमाण है, इसलिए यह भी स्थिर (एकसमान) होगी।"
  },
  {
    question: "प्रश्न 10: पलायन वेग (Escape Velocity) एक:",
    answers: shuffle([
      { text: "सदिश राशि है", correct: false },
      { text: "अदिश राशि है", correct: true },
      { text: "त्वरण है", correct: false },
      { text: "बल है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> पलायन वेग वह न्यूनतम 'चाल' है जो किसी वस्तु को ग्रह के गुरुत्वाकर्षण से मुक्त होने के लिए आवश्यक है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह दिशा पर निर्भर नहीं करता है, इसलिए यह एक अदिश राशि है।"
  },
  {
    question: "प्रश्न 11: जब कोई वस्तु वक्रीय पथ पर चलती है, तो उसका वेग:",
    answers: shuffle([
      { text: "हमेशा स्थिर रहता है।", correct: false },
      { text: "हमेशा बदलता रहता है।", correct: true },
      { text: "शून्य हो सकता है।", correct: false },
      { text: "परिमाण में हमेशा बढ़ता है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> वक्रीय पथ पर, वस्तु की दिशा लगातार बदलती रहती है, जिसके कारण उसका वेग सदिश भी लगातार बदलता रहता है, भले ही उसकी चाल स्थिर हो।"
  },
  {
    question: "प्रश्न 12: एक चलती हुई ट्रेन में बैठा एक यात्री अपने बगल की सीट पर बैठे यात्री को किस अवस्था में देखता है?",
    answers: shuffle([
      { text: "गति में", correct: false },
      { text: "विराम में", correct: true },
      { text: "त्वरित गति में", correct: false },
      { text: "यह ट्रेन के वेग पर निर्भर करता है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि दोनों यात्री एक ही निर्देश तंत्र (ट्रेन) में हैं और उनके बीच कोई सापेक्ष गति नहीं है, वे एक-दूसरे को विराम अवस्था में देखेंगे।"
  },
  {
    question: "प्रश्न 13: किसी गतिमान वस्तु के लिए औसत चाल का मान औसत वेग के परिमाण से:",
    answers: shuffle([
      { text: "हमेशा कम होता है।", correct: false },
      { text: "हमेशा अधिक होता है।", correct: false },
      { text: "हमेशा बराबर होता है।", correct: false },
      { text: "बराबर या अधिक होता है।", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि तय की गई दूरी हमेशा विस्थापन के परिमाण के बराबर या उससे अधिक होती है, इसलिए औसत चाल भी औसत वेग के परिमाण के बराबर या उससे अधिक होगी।"
  },
  {
    question: "प्रश्न 14: गति के समीकरण (equations of motion) किस स्थिति में लागू होते हैं?",
    answers: shuffle([
      { text: "किसी भी प्रकार की गति के लिए", correct: false },
      { text: "केवल वृत्तीय गति के लिए", correct: false },
      { text: "केवल एकसमान त्वरण के लिए", correct: true },
      { text: "केवल असमान त्वरण के लिए", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> गति के तीन प्रसिद्ध समीकरण (v = u + at, आदि) केवल तभी मान्य होते हैं जब वस्तु का त्वरण स्थिर (एकसमान) हो।"
  },
  {
    question: "प्रश्न 15: एक कार सीधी सड़क पर चल रही है। किस स्थिति में दूरी और विस्थापन बराबर होंगे?",
    answers: shuffle([
      { text: "यदि कार वापस आती है।", correct: false },
      { text: "यदि कार एक ही दिशा में चलती रहती है।", correct: true },
      { text: "यदि कार रुक-रुक कर चलती है।", correct: false },
      { text: "यदि कार की चाल बदलती रहती है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब तक गति की दिशा नहीं बदलती, तय किया गया पथ दो बिंदुओं के बीच की सबसे छोटी दूरी होती है।"
  },
  {
    question: "प्रश्न 16: एक घड़ी की सेकंड की सुई की नोक की गति होती है:",
    answers: shuffle([
      { text: "एकसमान वेग के साथ", correct: false },
      { text: "असमान वेग के साथ", correct: true },
      { text: "शून्य वेग के साथ", correct: false },
      { text: "एकसमान त्वरण के साथ", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि सुई की चाल स्थिर होती है, उसकी दिशा लगातार बदलती रहती है, इसलिए उसका वेग असमान (परिवर्ती) होता है।"
  },
  {
    question: "प्रश्न 17: यदि विस्थापन-समय ग्राफ मूल बिंदु से गुजरने वाली एक सीधी रेखा है, तो यह दर्शाता है:",
    answers: shuffle([
      { text: "वस्तु स्थिर है।", correct: false },
      { text: "वस्तु एकसमान वेग से गतिमान है।", correct: true },
      { text: "वस्तु एकसमान त्वरण से गतिमान है।", correct: false },
      { text: "वस्तु असमान वेग से गतिमान है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक सीधी रेखा का मतलब है कि ढलान (वेग) स्थिर है।<br><br><i class='fa-solid fa-angles-right icon'></i> मूल बिंदु से गुजरने का मतलब है कि समय शून्य पर विस्थापन शून्य था।"
  },
  {
    question: "प्रश्न 18: किसी वस्तु का वेग दोगुना करने पर, उसकी गतिज ऊर्जा:",
    answers: shuffle([
      { text: "आधी हो जाती है", correct: false },
      { text: "दोगुनी हो जाती है", correct: false },
      { text: "चार गुनी हो जाती है", correct: true },
      { text: "अपरिवर्तित रहती है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> गतिज ऊर्जा (1/2 * mv²) वेग के वर्ग के समानुपाती होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> वेग को दोगुना (2v) करने पर, गतिज ऊर्जा (2v)² = 4v² के समानुपाती होगी, यानी चार गुनी हो जाएगी।"
  },
  {
    question: "प्रश्न 19: कौन सा ग्राफ एकसमान मंदन को दर्शाता है?",
    answers: shuffle([
      { text: "एक सीधी रेखा जिसका ढलान धनात्मक और स्थिर हो।", correct: false },
      { text: "एक सीधी रेखा जिसका ढलान ऋणात्मक और स्थिर हो।", correct: true },
      { text: "एक परवलयिक वक्र।", correct: false },
      { text: "समय-अक्ष के समांतर एक रेखा।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एकसमान मंदन का अर्थ है स्थिर ऋणात्मक त्वरण।<br><br><i class='fa-solid fa-angles-right icon'></i> वेग-समय ग्राफ में, ढलान त्वरण को दर्शाता है, इसलिए एक स्थिर ऋणात्मक ढलान एकसमान मंदन को इंगित करता है।"
  },
  {
    question: "प्रश्न 20: एक कण स्थिर चाल से चल रहा है। इसका पथ कैसा हो सकता है?",
    answers: shuffle([
      { text: "केवल सीधी रेखा", correct: false },
      { text: "केवल वृत्त", correct: false },
      { text: "सीधी रेखा या वृत्त या कोई अन्य वक्र", correct: true },
      { text: "यह स्थिर होना चाहिए", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्थिर चाल का मतलब है कि वेग का परिमाण नहीं बदल रहा है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह सीधी रेखा में (स्थिर वेग के साथ) या किसी भी वक्रीय पथ (जैसे वृत्त) पर हो सकता है जहाँ केवल दिशा बदलती है।"
  },
  {
    question: "प्रश्न 21: एक नाव धारा के प्रतिकूल चल रही है। जमीन के सापेक्ष उसका वेग होगा:",
    answers: shuffle([
      { text: "नाव के वेग और धारा के वेग का योग।", correct: false },
      { text: "नाव के वेग और धारा के वेग का अंतर।", correct: true },
      { text: "केवल नाव का वेग।", correct: false },
      { text: "केवल धारा का वेग।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि नाव धारा की विपरीत दिशा में जा रही है, धारा का वेग नाव की गति का विरोध करेगा, और परिणामी वेग उनका अंतर होगा।"
  },
  {
    question: "प्रश्न 22: ब्रेक लगाने पर कार का वेग कम हो जाता है। इस स्थिति में, वेग और त्वरण की दिशाएँ:",
    answers: shuffle([
      { text: "एक समान होती हैं।", correct: false },
      { text: "एक दूसरे के विपरीत होती हैं।", correct: true },
      { text: "एक दूसरे के लंबवत होती हैं।", correct: false },
      { text: "कोई निश्चित संबंध नहीं है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेग कम होने का मतलब है कि त्वरण (इस मामले में मंदन) वेग की दिशा के विरुद्ध कार्य कर रहा है।"
  },
  {
    question: "प्रश्न 23: किसी वस्तु की चाल को ऋणात्मक मान नहीं दिया जा सकता क्योंकि:",
    answers: shuffle([
      { text: "a) यह एक सदिश राशि है।", correct: false },
      { text: "b) दूरी कभी ऋणात्मक नहीं होती।", correct: false },
      { text: "c) समय कभी ऋणात्मक नहीं होता।", correct: false },
      { text: "b) और c) दोनों।", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> चाल = दूरी/समय।<br><br><i class='fa-solid fa-angles-right icon'></i> भौतिक संदर्भ में, तय की गई दूरी और लिया गया समय दोनों को धनात्मक माना जाता है, इसलिए उनका अनुपात भी धनात्मक होता है।"
  },
  {
    question: "प्रश्न 24: जब आप किसी चलती बस से उतरते हैं, तो आपको बस की गति की दिशा में कुछ दूर दौड़ने की सलाह क्यों दी जाती है?",
    answers: shuffle([
      { text: "संवेग संरक्षण के लिए।", correct: false },
      { text: "गति के जड़त्व के कारण संतुलन बनाए रखने के लिए।", correct: true },
      { text: "ऊर्जा संरक्षण के लिए।", correct: false },
      { text: "बस को धक्का देने के लिए।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब आप बस में होते हैं, तो आपका शरीर भी बस के वेग से गतिमान होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उतरने पर आपके पैर तुरंत रुक जाते हैं, लेकिन शरीर का ऊपरी हिस्सा गति के जड़त्व के कारण आगे बढ़ता रहता है, जिससे गिरने का खतरा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> दौड़ने से शरीर धीरे-धीरे विराम अवस्था में आता है।"
  },
  {
    question: "प्रश्न 25: किसी गतिमान वस्तु के लिए औसत चाल का मान औसत वेग के परिमाण से:",
    answers: shuffle([
      { text: "हमेशा कम होता है।", correct: false },
      { text: "हमेशा अधिक होता है।", correct: false },
      { text: "हमेशा बराबर होता है।", correct: false },
      { text: "बराबर या अधिक होता है।", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि तय की गई दूरी हमेशा विस्थापन के परिमाण के बराबर या उससे अधिक होती है, इसलिए औसत चाल भी औसत वेग के परिमाण के बराबर या उससे अधिक होगी।"
  },
  {
    question: "प्रश्न 26. यदि वेग स्थिर है, तो कौन सी राशि निश्चित रूप से स्थिर है?",
    answers: shuffle([
      { text: "केवल चाल", correct: false },
      { text: "केवल दिशा", correct: false },
      { text: "चाल और दिशा दोनों", correct: true },
      { text: "केवल त्वरण", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेग एक सदिश है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके स्थिर होने का मतलब है कि इसका परिमाण (चाल) और इसकी दिशा दोनों स्थिर हैं।"
  },
  {
    question: "प्रश्न 27. एक हवाई जहाज हवा के सापेक्ष एक निश्चित वेग से उड़ रहा है। जमीन के सापेक्ष उसका वेग निर्भर करेगा:",
    answers: shuffle([
      { text: "केवल हवाई जहाज के वेग पर।", correct: false },
      { text: "केवल हवा के वेग पर।", correct: false },
      { text: "हवाई जहाज और हवा दोनों के वेग पर।", correct: true },
      { text: "हवाई जहाज के द्रव्यमान पर।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जमीन के सापेक्ष परिणामी वेग, हवाई जहाज के वेग और हवा के वेग का सदिश योग होता है।"
  },
  {
    question: "प्रश्न 28: निम्नलिखित में से कौन सी एक सदिश राशि है?",
    answers: shuffle([
      { text: "दूरी", correct: false },
      { text: "चाल", correct: false },
      { text: "वेग", correct: true },
      { text: "समय", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेग में परिमाण और दिशा दोनों होते हैं, इसलिए यह एक सदिश राशि है।"
  },
  {
    question: "प्रश्न 29. असमान गति (Non-uniform motion) में, चाल:",
    answers: shuffle([
      { text: "हमेशा स्थिर रहती है।", correct: false },
      { text: "समय के साथ बदलती है।", correct: true },
      { text: "हमेशा शून्य होती है।", correct: false },
      { text: "हमेशा बढ़ती है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> असमान गति का अर्थ है कि वस्तु की चाल या तो बढ़ रही है, घट रही है, या दिशा बदल रही है, जिससे चाल का मान समय के साथ परिवर्तित होता है।"
  },
  {
    question: "प्रश्न 30. बारिश की बूँदें पृथ्वी पर लगभग स्थिर वेग से क्यों गिरती हैं?",
    answers: shuffle([
      { text: "गुरुत्वाकर्षण की अनुपस्थिति के कारण।", correct: false },
      { text: "हवा के प्रतिरोध (श्यान बल) के कारण।", correct: true },
      { text: "पृथ्वी के घूर्णन के कारण।", correct: false },
      { text: "बादलों के कम घनत्व के कारण।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुरू में बूँदें त्वरित होती हैं, लेकिन जैसे-जैसे उनका वेग बढ़ता है, हवा का प्रतिरोध भी बढ़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i> एक बिंदु पर, यह प्रतिरोध गुरुत्वाकर्षण बल को संतुलित कर देता है, और बूँदें स्थिर 'टर्मिनल वेग' प्राप्त कर लेती हैं।"
  },
  {
    question: "प्रश्न 31. यदि कोई कार आधी दूरी एक चाल से और शेष आधी दूरी दूसरी चाल से तय करती है, तो उसकी औसत चाल:",
    answers: shuffle([
      { text: "दोनों चालों का अंकगणितीय माध्य होती है।", correct: false },
      { text: "दोनों चालों का गुणोत्तर माध्य होती है।", correct: false },
      { text: "दोनों चालों का हरात्मक माध्य होती है।", correct: true },
      { text: "शून्य होती है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस विशिष्ट मामले में, औसत चाल का सूत्र 2v₁v₂ / (v₁ + v₂) होता है, जो कि दो संख्याओं का हरात्मक माध्य है।"
  },
  {
    question: "प्रश्न 32. गति का पहला समीकरण किनके बीच संबंध स्थापित करता है?",
    answers: shuffle([
      { text: "वेग, स्थिति और समय", correct: false },
      { text: "अंतिम वेग, प्रारंभिक वेग, त्वरण और समय", correct: true },
      { text: "स्थिति, प्रारंभिक वेग, समय और त्वरण", correct: false },
      { text: "अंतिम वेग, प्रारंभिक वेग, त्वरण और विस्थापन", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> पहला समीकरण v = u + at है, जो इन चार राशियों को जोड़ता है।"
  },
  {
    question: "प्रश्न 33. एक कार के वेग को क्या प्रभावित कर सकता है?",
    answers: shuffle([
      { text: "केवल त्वरक (accelerator)", correct: false },
      { text: "केवल ब्रेक", correct: false },
      { text: "केवल स्टीयरिंग व्हील", correct: false },
      { text: "ये सभी", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> त्वरक चाल बढ़ाता है, ब्रेक चाल घटाता है, और स्टीयरिंग व्हील दिशा बदलता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये सभी कारक वेग को बदलते हैं क्योंकि वेग में परिमाण (चाल) और दिशा दोनों शामिल हैं।"
  },
  {
    question: "प्रश्न 34. यदि कोई धावक एक वृत्ताकार पथ पर स्थिर चाल से दौड़ रहा है, तो कौन सी भौतिक राशि शून्य है?",
    answers: shuffle([
      { text: "औसत वेग (एक चक्कर में)", correct: true },
      { text: "तात्क्षणिक वेग", correct: false },
      { text: "अभिकेंद्रीय त्वरण", correct: false },
      { text: "औसत चाल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक पूर्ण चक्कर में विस्थापन शून्य होता है, इसलिए औसत वेग शून्य होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी राशियाँ अशून्य हैं।"
  },
  {
    question: "प्रश्न 35. गति का अध्ययन भौतिकी की किस शाखा में किया जाता है?",
    answers: shuffle([
      { text: "प्रकाशिकी", correct: false },
      { text: "ऊष्मागतिकी", correct: false },
      { text: "यांत्रिकी", correct: true },
      { text: "विद्युत चुंबकत्व", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यांत्रिकी भौतिकी की वह शाखा है जो वस्तुओं की गति, बलों और ऊर्जा से संबंधित है।"
  },
  {
    question: "प्रश्न 36. एक समान चाल वाली गति में:",
    answers: shuffle([
      { text: "त्वरण हमेशा शून्य होता है।", correct: false },
      { text: "त्वरण शून्य हो सकता है।", correct: true },
      { text: "वेग हमेशा स्थिर रहता है।", correct: false },
      { text: "वस्तु हमेशा सीधी रेखा में चलती है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि वस्तु सीधी रेखा में एकसमान चाल से चलती है, तो त्वरण शून्य होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन यदि वह वक्र पथ (जैसे वृत्त) पर एकसमान चाल से चलती है, तो दिशा बदलने के कारण त्वरण होता है (अभिकेंद्रीय त्वरण)।"
  },
  {
    question: "प्रश्न 37. निम्नलिखित में से किसका वेग सबसे अधिक होता है?",
    answers: shuffle([
      { text: "ध्वनि का हवा में", correct: false },
      { text: "प्रकाश का निर्वात में", correct: true },
      { text: "एक रेसिंग कार का", correct: false },
      { text: "एक हवाई जहाज का", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश की चाल प्रकृति में ज्ञात उच्चतम चाल है, जो लगभग 3 लाख किलोमीटर प्रति सेकंड है।"
  },
  {
    question: "प्रश्न 38. यदि चाल-समय ग्राफ समय-अक्ष की ओर झुक रहा एक वक्र है, तो त्वरण:",
    answers: shuffle([
      { text: "बढ़ रहा है।", correct: false },
      { text: "घट रहा है।", correct: true },
      { text: "स्थिर है।", correct: false },
      { text: "शून्य है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> वक्र का ढलान त्वरण को दर्शाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि वक्र का ढलान कम हो रहा है (यह चपटा हो रहा है), तो त्वरण घट रहा है।"
  },
  {
    question: "प्रश्न 39. एक कण विरामावस्था में है। इसका वेग-समय ग्राफ कैसा दिखेगा?",
    answers: shuffle([
      { text: "मूल बिंदु से गुजरती एक ढलान वाली रेखा।", correct: false },
      { text: "समय-अक्ष पर ही स्थित एक रेखा।", correct: true },
      { text: "y-अक्ष के समांतर एक रेखा।", correct: false },
      { text: "एक परवलय।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> विरामावस्था का अर्थ है कि हर समय वेग शून्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ग्राफ पर समय-अक्ष (जहाँ वेग = 0) के साथ संपाती एक रेखा द्वारा दर्शाया जाएगा।"
  },
  {
    question: "प्रश्न 40. वेग में परिवर्तन किसके कारण हो सकता है?",
    answers: shuffle([
      { text: "केवल चाल में परिवर्तन", correct: false },
      { text: "केवल दिशा में परिवर्तन", correct: false },
      { text: "चाल या दिशा या दोनों में परिवर्तन", correct: true },
      { text: "केवल द्रव्यमान में परिवर्तन", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि वेग एक सदिश है, इसका मान तब बदलता है जब या तो इसका परिमाण (चाल) बदलता है, या इसकी दिशा बदलती है, या दोनों बदलते हैं।"
  },
  {
    question: "प्रश्न 41. किसी कण का वेग केवल तभी स्थिर कहा जाता है जब:",
    answers: shuffle([
      { text: "इसकी चाल स्थिर हो।", correct: false },
      { text: "इसकी गति की दिशा स्थिर हो।", correct: false },
      { text: "इसकी चाल और गति की दिशा दोनों स्थिर हों।", correct: true },
      { text: "इसका त्वरण स्थिर हो।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एकसमान वेग की पूर्ण परिभाषा है।"
  },
  {
    question: "प्रश्न 42. सरल आवर्त गति (Simple Harmonic Motion) में, साम्यावस्था पर कण का वेग होता है:",
    answers: shuffle([
      { text: "शून्य", correct: false },
      { text: "अधिकतम", correct: true },
      { text: "न्यूनतम (अशून्य)", correct: false },
      { text: "स्थिर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब दोलक अपनी मध्य (साम्य) स्थिति से गुजरता है, तो उसकी गतिज ऊर्जा अधिकतम होती है, जिसका अर्थ है कि उसका वेग भी अधिकतम होता है।"
  },
  {
    question: "प्रश्न 43. जब कोई उपग्रह पृथ्वी के चारों ओर एक वृत्ताकार कक्षा में घूमता है, तो उसका वेग:",
    answers: shuffle([
      { text: "हर बिंदु पर बदलता है।", correct: true },
      { text: "स्थिर रहता है।", correct: false },
      { text: "शून्य होता है।", correct: false },
      { text: "केवल पृथ्वी के निकटतम होने पर बदलता है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृत्ताकार गति में दिशा लगातार बदलती रहती है, इसलिए वेग भी हर बिंदु पर बदलता है, भले ही चाल स्थिर हो।"
  },
  {
    question: "प्रश्न 44. गति का दूसरा समीकरण (s = ut + ½at²) क्या दर्शाता है?",
    answers: shuffle([
      { text: "एक निश्चित समय में तय किया गया विस्थापन।", correct: true },
      { text: "वेग और समय के बीच संबंध।", correct: false },
      { text: "बल और त्वरण के बीच संबंध।", correct: false },
      { text: "संवेग और आवेग के बीच संबंध।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह समीकरण प्रारंभिक वेग (u), त्वरण (a), और समय (t) के आधार पर वस्तु के विस्थापन (s) की गणना करता है।"
  },
  {
    question: "प्रश्न 45. एक वस्तु का वेग धनात्मक है और त्वरण ऋणात्मक है। वस्तु:",
    answers: shuffle([
      { text: "की चाल बढ़ रही है।", correct: false },
      { text: "की चाल घट रही है (धीमी हो रही है)।", correct: true },
      { text: "स्थिर वेग से चल रही है।", correct: false },
      { text: "स्थिर है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब वेग और त्वरण के चिह्न विपरीत होते हैं, तो वस्तु मंदित होती है, यानी उसकी चाल कम होती है।"
  },
  {
    question: "प्रश्न 46: निम्नलिखित में से कौन सी एक सदिश राशि है?",
    answers: shuffle([
      { text: "दूरी", correct: false },
      { text: "चाल", correct: false },
      { text: "वेग", correct: true },
      { text: "समय", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेग में परिमाण और दिशा दोनों होते हैं, इसलिए यह एक सदिश राशि है।"
  },
  {
    question: "प्रश्न 47. यदि कोई वस्तु एकसमान त्वरण से गतिमान है, तो उसका औसत वेग होता है:",
    answers: shuffle([
      { text: "प्रारंभिक वेग के बराबर", correct: false },
      { text: "अंतिम वेग के बराबर", correct: false },
      { text: "(प्रारंभिक वेग + अंतिम वेग) / 2", correct: true },
      { text: "शून्य", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक विशेष सूत्र है जो केवल एकसमान त्वरण की स्थिति में औसत वेग की गणना के लिए लागू होता है।"
  },
  {
    question: "प्रश्न 48. एक चींटी एक घन के एक कोने से शुरू होकर विकर्णीय रूप से विपरीत कोने तक जाती है। दूरी और विस्थापन:",
    answers: shuffle([
      { text: "बराबर हैं।", correct: false },
      { text: "दूरी विस्थापन से अधिक है।", correct: true },
      { text: "विस्थापन दूरी से अधिक है।", correct: false },
      { text: "दोनों शून्य हैं।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> विस्थापन दो कोनों के बीच की सीधी रेखा (मुख्य विकर्ण) है, जबकि दूरी चींटी द्वारा अपनाए गए वास्तविक पथ (किनारों के साथ) की लंबाई है, जो हमेशा अधिक होगी।"
  },
  {
    question: "प्रश्न 49. किसी पिंड का वेग समय के समानुपाती है। पिंड की गति:",
    answers: shuffle([
      { text: "एकसमान वेग से है", correct: false },
      { text: "एकसमान त्वरण से है", correct: true },
      { text: "शून्य त्वरण से है", correct: false },
      { text: "परिवर्ती त्वरण से है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि v \\propto t है, तो इसका मतलब है कि v = kt (जहाँ k एक स्थिरांक है)।<br><br><i class='fa-solid fa-angles-right icon'></i> त्वरण dv/dt = k होगा, जो एक स्थिर मान है।"
  },
  {
    question: "प्रश्न 50: एक समान गति (Uniform Motion) में, वस्तु का वेग:",
    answers: shuffle([
      { text: "स्थिर रहता है", correct: true },
      { text: "बदलता रहता है", correct: false },
      { text: "शून्य होता है", correct: false },
      { text: "बढ़ता रहता है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक समान गति का अर्थ है कि वस्तु का वेग (परिमाण और दिशा दोनों) स्थिर है।"
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