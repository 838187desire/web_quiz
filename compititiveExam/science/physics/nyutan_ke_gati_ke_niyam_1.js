const questions = [
  {
    topHeading: "न्यूटन के नियम पर आधारित 50 MCQs,part_1 (quiz_no.10)"
  },
  {
    question: "प्रश्न 1: न्यूटन का गति का पहला नियम किस अवधारणा को परिभाषित करता है?",
    answers: shuffle([
      { text: "बल", correct: false },
      { text: "जड़त्व", correct: true },
      { text: "त्वरण", correct: false },
      { text: "संवेग", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन का पहला नियम, जिसे जड़त्व का नियम भी कहते हैं, बताता है कि कोई वस्तु अपनी विरामावस्था या एकसमान गति की अवस्था में तब तक बनी रहती है जब तक उस पर कोई बाहरी बल न लगाया जाए।"
  },
  {
    question: "प्रश्न 2: चलती बस के अचानक रुकने पर यात्री आगे की ओर क्यों झुक जाते हैं?",
    answers: shuffle([
      { text: "गति के जड़त्व के कारण", correct: true },
      { text: "विराम के जड़त्व के कारण", correct: false },
      { text: "दिशा के जड़त्व के कारण", correct: false },
      { text: "गुरुत्वाकर्षण के कारण", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> बस के रुकने पर यात्री का निचला हिस्सा तो बस के साथ रुक जाता है, परन्तु ऊपरी हिस्सा गति के जड़त्व के कारण आगे की ओर गतिमान रहने का प्रयास करता है।"
  },
  {
    question: "प्रश्न 3: किसी वस्तु पर लगाया गया बल उसके ________ में परिवर्तन की दर के बराबर होता है।",
    answers: shuffle([
      { text: "वेग", correct: false },
      { text: "त्वरण", correct: false },
      { text: "संवेग", correct: true },
      { text: "विस्थापन", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन के दूसरे नियम के अनुसार, किसी वस्तु पर लगाया गया बल उस वस्तु के संवेग में परिवर्तन की दर के समानुपाती होता है।"
  },
  {
    question: "प्रश्न 4: क्रिया और प्रतिक्रिया बल के बारे में क्या सत्य है?",
    answers: shuffle([
      { text: "वे एक ही वस्तु पर कार्य करते हैं।", correct: false },
      { text: "वे परिमाण में बराबर और दिशा में विपरीत होते हैं।", correct: true },
      { text: "वे परिमाण में भिन्न होते हैं।", correct: false },
      { text: "वे एक दूसरे को निरस्त कर देते हैं।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन के तीसरे नियम के अनुसार, प्रत्येक क्रिया के बराबर और विपरीत दिशा में एक प्रतिक्रिया होती है, और ये दोनों बल अलग-अलग वस्तुओं पर कार्य करते हैं।"
  },
  {
    question: "प्रश्न 5: जड़त्व का नियम किसे कहा जाता है?",
    answers: shuffle([
      { text: "न्यूटन के पहले नियम को", correct: true },
      { text: "न्यूटन के दूसरे नियम को", correct: false },
      { text: "न्यूटन के तीसरे नियम को", correct: false },
      { text: "ऊर्जा संरक्षण के नियम को", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन के पहले नियम को ही जड़त्व का नियम कहा जाता है क्योंकि यह जड़त्व की अवधारणा की व्याख्या करता है।"
  },
  {
    question: "प्रश्न 6: रॉकेट का प्रक्षेपण न्यूटन के किस नियम पर आधारित है?",
    answers: shuffle([
      { text: "पहला नियम", correct: false },
      { text: "दूसरा नियम", correct: false },
      { text: "तीसरा नियम", correct: true },
      { text: "गुरुत्वाकर्षण का नियम", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> रॉकेट तीव्र वेग से गैसों को पीछे की ओर फेंकता है (क्रिया), जिसके परिणामस्वरूप गैसें रॉकेट को आगे की ओर धकेलती हैं (प्रतिक्रिया)।"
  },
  {
    question: "प्रश्न 7: किसी वस्तु का जड़त्व किस पर निर्भर करता है?",
    answers: shuffle([
      { text: "वस्तु के वेग पर", correct: false },
      { text: "वस्तु के त्वरण पर", correct: false },
      { text: "वस्तु के द्रव्यमान पर", correct: true },
      { text: "वस्तु के आकार पर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जिस वस्तु का द्रव्यमान जितना अधिक होता है, उसकी अपनी गति की अवस्था में परिवर्तन का विरोध करने की प्रवृत्ति उतनी ही अधिक होती है, अर्थात उसका जड़त्व उतना ही अधिक होता है।"
  },
  {
    question: "प्रश्न 8: बल का व्यंजक (F=ma) न्यूटन के किस नियम से प्राप्त होता है?",
    answers: shuffle([
      { text: "पहला नियम", correct: false },
      { text: "दूसरा नियम", correct: true },
      { text: "तीसरा नियम", correct: false },
      { text: "गुरुत्वाकर्षण का नियम", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन का दूसरा नियम बल, द्रव्यमान और त्वरण के बीच मात्रात्मक संबंध स्थापित करता है, जिसे F=ma सूत्र द्वारा व्यक्त किया जाता है।"
  },
  {
    question: "प्रश्न 9: जब हम जमीन पर चलते हैं, तो जमीन द्वारा हमारे पैरों पर लगाया गया बल क्या है?",
    answers: shuffle([
      { text: "क्रिया बल", correct: false },
      { text: "प्रतिक्रिया बल", correct: true },
      { text: "घर्षण बल", correct: false },
      { text: "गुरुत्वाकर्षण बल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> हम अपने पैरों से जमीन को पीछे की ओर धकेलते हैं (क्रिया), और प्रतिक्रिया स्वरूप जमीन हमारे पैरों को आगे की ओर धकेलती है, जिससे हम चल पाते हैं।"
  },
  {
    question: "प्रश्न 10: यदि किसी वस्तु पर कोई बाहरी बल कार्य न करे, तो उसका त्वरण कितना होगा?",
    answers: shuffle([
      { text: "शून्य", correct: true },
      { text: "एकसमान", correct: false },
      { text: "परिवर्ती", correct: false },
      { text: "अनंत", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन के पहले नियम के अनुसार, यदि कोई बल नहीं है, तो वेग में कोई परिवर्तन नहीं होगा, जिसका अर्थ है कि त्वरण शून्य होगा।"
  },
  {
    question: "प्रश्न 11: एक क्रिकेटर गेंद को पकड़ते समय अपने हाथों को पीछे की ओर क्यों खींचता है?",
    answers: shuffle([
      { text: "गेंद को अधिक बल देने के लिए", correct: false },
      { text: "संवेग परिवर्तन की दर को कम करने के लिए", correct: true },
      { text: "जड़त्व को बढ़ाने के लिए", correct: false },
      { text: "गेंद को दिशा देने के लिए", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाथ पीछे खींचने से संवेग को शून्य होने में अधिक समय लगता है, जिससे संवेग परिवर्तन की दर (बल) कम हो जाती है और हाथों पर चोट कम लगती है।"
  },
  {
    question: "प्रश्न 12: \"प्रत्येक क्रिया के बराबर तथा विपरीत प्रतिक्रिया होती है।\" यह कथन है:",
    answers: shuffle([
      { text: "न्यूटन का पहला नियम", correct: false },
      { text: "न्यूटन का दूसरा नियम", correct: false },
      { text: "न्यूटन का तीसरा नियम", correct: true },
      { text: "संवेग संरक्षण का नियम", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह न्यूटन के गति के तीसरे नियम का सीधा कथन है।"
  },
  {
    question: "प्रश्न 13: संवेग का एस.आई. (SI) मात्रक क्या है?",
    answers: shuffle([
      { text: "a) किलोग्राम-मीटर/सेकंड", correct: false },
      { text: "b) किलोग्राम-मीटर/सेकंड²", correct: false },
      { text: "c) न्यूटन-सेकंड", correct: false },
      { text: "(a) और (c) दोनों", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> संवेग (p=mv) का मात्रक किग्रा-मी/से होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> आवेग (बल×समय) का मात्रक न्यूटन-सेकंड होता है, जो संवेग में परिवर्तन के बराबर है, इसलिए दोनों मात्रक सही हैं।"
  },
  {
    question: "प्रश्न 14: विराम अवस्था में रखी एक भारी वस्तु को हिलाना क्यों कठिन होता है?",
    answers: shuffle([
      { text: "अधिक गतिज ऊर्जा के कारण", correct: false },
      { text: "अधिक स्थितिज ऊर्जा के कारण", correct: false },
      { text: "अधिक जड़त्व के कारण", correct: true },
      { text: "अधिक घर्षण के कारण", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारी वस्तु का द्रव्यमान अधिक होता है, इसलिए उसका विराम का जड़त्व भी अधिक होता है, जिससे उसकी अवस्था में परिवर्तन करना कठिन होता है।"
  },
  {
    question: "प्रश्न 15: नाव से किनारे पर कूदने पर नाव का पीछे की ओर हटना, किस नियम का उदाहरण है?",
    answers: shuffle([
      { text: "पहला नियम", correct: false },
      { text: "दूसरा नियम", correct: false },
      { text: "तीसरा नियम", correct: true },
      { text: "ऊर्जा संरक्षण", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यक्ति नाव पर बल लगाकर आगे कूदता है (क्रिया), और नाव व्यक्ति पर बल लगाकर उसे पीछे की ओर धकेलती है (प्रतिक्रिया)।"
  },
  {
    question: "प्रश्न 16: संवेग संरक्षण का नियम न्यूटन के किस नियम का परिणाम है?",
    answers: shuffle([
      { text: "केवल दूसरे नियम का", correct: false },
      { text: "केवल तीसरे नियम का", correct: false },
      { text: "दूसरे और तीसरे नियम का", correct: true },
      { text: "केवल पहले नियम का", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब किसी निकाय पर कोई बाहरी बल नहीं लगता (दूसरे नियम से F=0), तो क्रिया-प्रतिक्रिया बलों (तीसरे नियम) के कारण निकाय का कुल संवेग संरक्षित रहता है।"
  },
  {
    question: "प्रश्न 17: यदि किसी वस्तु का संवेग स्थिर है, तो उस पर लगने वाला बल होगा:",
    answers: shuffle([
      { text: "स्थिर", correct: false },
      { text: "शून्य", correct: true },
      { text: "परिवर्ती", correct: false },
      { text: "अधिकतम", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन के दूसरे नियम के अनुसार, बल संवेग में परिवर्तन की दर है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि संवेग स्थिर है (परिवर्तन शून्य है), तो बल भी शून्य होगा।"
  },
  {
    question: "प्रश्न 18: पेड़ की शाखा को जोर से हिलाने पर फल नीचे क्यों गिर जाते हैं?",
    answers: shuffle([
      { text: "गति के जड़त्व के कारण", correct: false },
      { text: "विराम के जड़त्व के कारण", correct: true },
      { text: "गुरुत्वाकर्षण बल के बढ़ने के कारण", correct: false },
      { text: "हवा के दबाव के कारण", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह विराम के जड़त्व का एक और उदाहरण है, जहाँ धूल के कण अपनी स्थिर अवस्था बनाए रखने की कोशिश करते हैं।"
  },
  {
    question: "प्रश्न 19: क्रिया-प्रतिक्रिया बल एक दूसरे को निरस्त क्यों नहीं करते हैं?",
    answers: shuffle([
      { text: "क्योंकि वे हमेशा बराबर नहीं होते हैं।", correct: false },
      { text: "क्योंकि वे अलग-अलग वस्तुओं पर कार्य करते हैं।", correct: true },
      { text: "क्योंकि उनकी दिशाएँ अलग होती हैं।", correct: false },
      { text: "क्योंकि वे अलग-अलग समय पर कार्य करते हैं।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी एक वस्तु पर लगने वाले बलों को निरस्त करने के लिए, उन सभी बलों का उसी वस्तु पर लगना आवश्यक है।<br><br><i class='fa-solid fa-angles-right icon'></i> क्रिया-प्रतिक्रिया बल दो भिन्न वस्तुओं पर लगते हैं।"
  },
  {
    question: "प्रश्न 20: किसी पिंड का त्वरण शून्य होने का क्या अर्थ है?",
    answers: shuffle([
      { text: "a) पिंड पर कोई बल नहीं लग रहा है।", correct: false },
      { text: "b) पिंड पर लगने वाले सभी बलों का सदिश योग शून्य है।", correct: false },
      { text: "c) पिंड निश्चित रूप से विरामावस्था में है।", correct: false },
      { text: "(a) और (b) दोनों सही हो सकते हैं।", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> त्वरण शून्य होने का अर्थ है कि शुद्ध बल शून्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका मतलब यह हो सकता है कि या तो कोई बल नहीं है, या कई बल एक-दूसरे को संतुलित कर रहे हैं।"
  },
  {
    question: "प्रश्न 21: बंदूक से गोली चलाने पर बंदूक पीछे की ओर झटका क्यों देती है (प्रतिक्षेप)?",
    answers: shuffle([
      { text: "न्यूटन के पहले नियम के कारण", correct: false },
      { text: "न्यूटन के दूसरे नियम के कारण", correct: false },
      { text: "न्यूटन के तीसरे नियम के कारण", correct: true },
      { text: "ऊर्जा संरक्षण के कारण", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> बंदूक गोली पर आगे की ओर बल लगाती है (क्रिया), और गोली बंदूक पर पीछे की ओर उतना ही बल लगाती है (प्रतिक्रिया), जिससे बंदूक प्रतिक्षेप करती है।"
  },
  {
    question: "प्रश्न 22: \"बल\" वह भौतिक राशि है जो वस्तु में ________ उत्पन्न करती है।",
    answers: shuffle([
      { text: "ऊर्जा", correct: false },
      { text: "शक्ति", correct: false },
      { text: "त्वरण", correct: true },
      { text: "जड़त्व", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन के दूसरे नियम के अनुसार, बल लगाने पर वस्तु में त्वरण उत्पन्न होता है (a = F/m)।"
  },
  {
    question: "प्रश्न 23: एक समान वेग से चलती हुई वस्तु पर लगने वाला शुद्ध बल कितना होता है?",
    answers: shuffle([
      { text: "शून्य", correct: true },
      { text: "उसके भार के बराबर", correct: false },
      { text: "एकसमान", correct: false },
      { text: "परिवर्ती", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एकसमान वेग का अर्थ है शून्य त्वरण।<br><br><i class='fa-solid fa-angles-right icon'></i> न्यूटन के दूसरे नियम (F=ma) के अनुसार, यदि त्वरण शून्य है, तो शुद्ध बल भी शून्य होगा।"
  },
  {
    question: "प्रश्न 24: हथौड़े से कील ठोकना न्यूटन के किस नियम का अनुप्रयोग है?",
    answers: shuffle([
      { text: "पहला नियम", correct: false },
      { text: "दूसरा नियम", correct: false },
      { text: "तीसरा नियम", correct: false },
      { text: "ये सभी", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> हथौड़े का जड़त्व (पहला नियम) उसे गतिमान रखता है, हथौड़े का बल कील में त्वरण पैदा करता है (दूसरा नियम), और कील भी हथौड़े पर प्रतिक्रिया बल लगाती है (तीसरा नियम)।"
  },
  {
    question: "प्रश्न 25: जड़त्वीय निर्देश तंत्र (Inertial Frame of Reference) में कौन सा नियम लागू होता है?",
    answers: shuffle([
      { text: "केवल न्यूटन का पहला नियम", correct: false },
      { text: "केवल न्यूटन का दूसरा नियम", correct: false },
      { text: "केवल न्यूटन का तीसरा नियम", correct: false },
      { text: "न्यूटन के सभी नियम", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जड़त्वीय निर्देश तंत्र वे तंत्र हैं जो या तो स्थिर हैं या एकसमान वेग से गतिमान हैं, और इनमें न्यूटन के तीनों नियम मान्य होते हैं।"
  },
  {
    question: "प्रश्न 26: आवेग (Impulse) किसके बराबर होता है?",
    answers: shuffle([
      { text: "बल में परिवर्तन", correct: false },
      { text: "संवेग में परिवर्तन", correct: true },
      { text: "त्वरण में परिवर्तन", correct: false },
      { text: "कार्य में परिवर्तन", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवेग-संवेग प्रमेय के अनुसार, किसी वस्तु पर लगाया गया आवेग (बल × समय अंतराल) उस वस्तु के संवेग में हुए परिवर्तन के बराबर होता है।"
  },
  {
    question: "प्रश्न 27: दो समान द्रव्यमान की गेंदें टकराती हैं और रुक जाती हैं। इस प्रक्रिया में क्या संरक्षित रहता है?",
    answers: shuffle([
      { text: "केवल गतिज ऊर्जा", correct: false },
      { text: "केवल संवेग", correct: true },
      { text: "संवेग और गतिज ऊर्जा दोनों", correct: false },
      { text: "न तो संवेग और न ही गतिज ऊर्जा", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक पूर्णतः अप्रत्यास्थ टक्कर है।<br><br><i class='fa-solid fa-angles-right icon'></i> बाहरी बल की अनुपस्थिति में कुल संवेग हमेशा संरक्षित रहता है, लेकिन गतिज ऊर्जा का ऊष्मा और ध्वनि में क्षय हो जाता है।"
  },
  {
    question: "प्रश्न 28: किसी वस्तु पर बल लगाकर उसका वेग बदला जा सकता है, परन्तु क्या नहीं बदला जा सकता?",
    answers: shuffle([
      { text: "त्वरण", correct: false },
      { text: "संवेग", correct: false },
      { text: "जड़त्व", correct: true },
      { text: "स्थिति", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जड़त्व वस्तु के द्रव्यमान का एक आंतरिक गुण है।<br><br><i class='fa-solid fa-angles-right icon'></i> बल लगाकर इसे नहीं बदला जा सकता, जब तक कि वस्तु का द्रव्यमान न बदल जाए।"
  },
  {
    question: "प्रश्न 29: एक अंतरिक्ष यात्री अंतरिक्ष में हथौड़े से चोट करता है। क्या होगा?",
    answers: shuffle([
      { text: "केवल वस्तु हिलेगी।", correct: false },
      { text: "केवल यात्री हिलेगा।", correct: false },
      { text: "यात्री और वस्तु दोनों विपरीत दिशाओं में गति करेंगे।", correct: true },
      { text: "कुछ नहीं होगा।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन के तीसरे नियम के अनुसार, यात्री हथौड़े पर बल लगाएगा और हथौड़ा यात्री पर विपरीत दिशा में बल लगाएगा, जिससे दोनों गतिमान हो जाएंगे।"
  },
  {
    question: "प्रश्न 30: न्यूटन के गति के नियम किस प्रकार की वस्तुओं के लिए लागू नहीं होते हैं?",
    answers: shuffle([
      { text: "बहुत भारी वस्तुओं के लिए", correct: false },
      { text: "बहुत हल्की वस्तुओं के लिए", correct: false },
      { text: "प्रकाश के वेग से गतिमान वस्तुओं के लिए", correct: true },
      { text: "स्थिर वस्तुओं के लिए", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> अत्यधिक उच्च वेग पर, जहाँ सापेक्षता के प्रभाव महत्वपूर्ण हो जाते हैं, न्यूटन के नियम लागू नहीं होते।<br><br><i class='fa-solid fa-angles-right icon'></i> वहां आइंस्टीन के सापेक्षता के सिद्धांत का उपयोग किया जाता है।"
  },
  {
    question: "प्रश्न 31: घर्षण बल हमेशा गति का ________ करता है।",
    answers: shuffle([
      { text: "समर्थन", correct: false },
      { text: "विरोध", correct: true },
      { text: "कोई प्रभाव नहीं डालता", correct: false },
      { text: "त्वरण उत्पन्न करता है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण एक संपर्क बल है जो दो सतहों के बीच सापेक्ष गति का विरोध करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह न्यूटन के नियमों के विश्लेषण में एक महत्वपूर्ण बल है।"
  },
  {
    question: "प्रश्न 32: एक व्यक्ति लिफ्ट में खड़ा है। किस स्थिति में उसका भार वास्तविक भार से कम महसूस होगा?",
    answers: shuffle([
      { text: "जब लिफ्ट एकसमान वेग से ऊपर जा रही हो।", correct: false },
      { text: "जब लिफ्ट ऊपर की ओर त्वरित हो रही हो।", correct: false },
      { text: "जब लिफ्ट नीचे की ओर त्वरित हो रही हो।", correct: true },
      { text: "जब लिफ्ट स्थिर हो।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब लिफ्ट नीचे की ओर त्वरित होती है, तो आभासी भार (R = mg - ma) वास्तविक भार (mg) से कम हो जाता है।"
  },
  {
    question: "प्रश्न 33: बल और समय का गुणनफल क्या कहलाता है?",
    answers: shuffle([
      { text: "कार्य", correct: false },
      { text: "शक्ति", correct: false },
      { text: "आवेग", correct: true },
      { text: "संवेग", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवेग को बल और उस समय अंतराल के गुणनफल के रूप में परिभाषित किया जाता है जिसके लिए बल कार्य करता है।"
  },
  {
    question: "प्रश्न 34: कंबल को छड़ी से पीटने पर धूल के कण बाहर क्यों आ जाते हैं?",
    answers: shuffle([
      { text: "छड़ी धूल के कणों को खींच लेती है।", correct: false },
      { text: "कंबल गति में आ जाता है और धूल के कण जड़त्व के कारण स्थिर रहते हैं।", correct: true },
      { text: "हवा के दबाव से कण बाहर निकल जाते हैं।", correct: false },
      { text: "गुरुत्वाकर्षण के कारण।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह विराम के जड़त्व का एक और उदाहरण है, जहाँ धूल के कण अपनी स्थिर अवस्था बनाए रखने की कोशिश करते हैं।"
  },
  {
    question: "प्रश्न 35: यदि क्रिया और प्रतिक्रिया बल बराबर और विपरीत हैं, तो गति कैसे संभव है?",
    answers: shuffle([
      { text: "क्योंकि वे हमेशा संतुलित नहीं होते हैं।", correct: false },
      { text: "क्योंकि वे अलग-अलग पिंडों पर कार्य करते हैं।", correct: true },
      { text: "क्योंकि प्रतिक्रिया बल हमेशा थोड़ा कम होता है।", correct: false },
      { text: "गति संभव नहीं है, यह एक भ्रम है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> गति किसी एक पिंड पर लगने वाले असंतुलित बलों के कारण होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि क्रिया-प्रतिक्रिया अलग-अलग पिंडों पर लगते हैं, वे एक-दूसरे को निरस्त नहीं कर सकते और गति हो सकती है।"
  },
  {
    question: "प्रश्न 36: एक त्वरित निर्देश तंत्र (Non-Inertial Frame) में, न्यूटन के नियमों को लागू करने के लिए किस अवधारणा का उपयोग किया जाता है?",
    answers: shuffle([
      { text: "वास्तविक बल", correct: false },
      { text: "संपर्क बल", correct: false },
      { text: "छद्म बल (आभासी बल)", correct: true },
      { text: "नाभिकीय बल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> त्वरित फ्रेम में वस्तुओं की गति की सही व्याख्या करने के लिए, त्वरण के विपरीत दिशा में एक आभासी बल (जैसे अपकेंद्री बल) की कल्पना की जाती है।"
  },
  {
    question: "प्रश्न 37: 'संवेग' में ________ दोनों होते हैं।",
    answers: shuffle([
      { text: "परिमाण और दिशा", correct: true },
      { text: "केवल परिमाण", correct: false },
      { text: "केवल दिशा", correct: false },
      { text: "न तो परिमाण और न ही दिशा", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> संवेग (द्रव्यमान × वेग) एक सदिश राशि है, क्योंकि वेग एक सदिश राशि है।"
  },
  {
    question: "प्रश्न 38: न्यूटन का कौन सा नियम \"वास्तविक नियम\" कहलाता है क्योंकि अन्य दो नियम उससे प्राप्त किए जा सकते हैं?",
    answers: shuffle([
      { text: "पहला नियम", correct: false },
      { text: "दूसरा नियम", correct: true },
      { text: "तीसरा नियम", correct: false },
      { text: "कोई नहीं", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> दूसरे नियम (F=ma) से, यदि F=0 है तो a=0 (पहला नियम) प्राप्त होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> साथ ही, यह संवेग संरक्षण की नींव है जो तीसरे नियम से निकटता से संबंधित है।"
  },
  {
    question: "प्रश्न 39: घोड़े द्वारा गाड़ी खींचना किस सिद्धांत पर काम करता है?",
    answers: shuffle([
      { text: "घोड़ा गाड़ी पर बल लगाता है।", correct: false },
      { text: "गाड़ी घोड़े पर बल लगाती है।", correct: false },
      { text: "घोड़ा जमीन को पीछे धकेलता है और जमीन घोड़े को आगे धकेलती है।", correct: true },
      { text: "ये सभी।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> घोड़ा और गाड़ी आगे तभी बढ़ते हैं जब घोड़े द्वारा जमीन पर लगाया गया बल, जमीन की प्रतिक्रिया बल से अधिक होता है जो घोड़े और गाड़ी के निकाय को आगे बढ़ाता है।"
  },
  {
    question: "प्रश्न 40: किसी वस्तु पर बल लगाने से उसमें क्या परिवर्तन हो सकता है?",
    answers: shuffle([
      { text: "उसकी चाल में", correct: false },
      { text: "उसकी दिशा में", correct: false },
      { text: "उसके आकार में", correct: false },
      { text: "ये सभी", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> बल किसी वस्तु की गति की अवस्था (चाल और दिशा) और उसके आकार या आकृति में परिवर्तन कर सकता है।"
  },
  {
    question: "प्रश्न 41: एक बंद निकाय (Isolated System) का कुल संवेग हमेशा:",
    answers: shuffle([
      { text: "बढ़ता है", correct: false },
      { text: "घटता है", correct: false },
      { text: "संरक्षित रहता है", correct: true },
      { text: "शून्य होता है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक बंद निकाय वह है जिस पर कोई बाहरी बल कार्य नहीं करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> संवेग संरक्षण के नियम के अनुसार, ऐसे निकाय का कुल संवेग स्थिर रहता है।"
  },
  {
    question: "प्रश्न 42: साइकिल चलाते समय पैडल मारना बंद करने पर साइकिल क्यों धीमी हो जाती है?",
    answers: shuffle([
      { text: "जड़त्व के कारण", correct: false },
      { text: "घर्षण और वायु प्रतिरोध जैसे बाहरी बलों के कारण", correct: true },
      { text: "संवेग की कमी के कारण", correct: false },
      { text: "गुरुत्वाकर्षण के कारण", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन के पहले नियम के अनुसार, यदि कोई बाहरी बल न हो तो साइकिल चलती रहेगी।<br><br><i class='fa-solid fa-angles-right icon'></i> घर्षण और वायु प्रतिरोध विरोधी बल हैं जो इसे धीमा कर देते हैं।"
  },
  {
    question: "प्रश्न 43: किसी वस्तु के द्रव्यमान और वेग का गुणनफल क्या कहलाता है?",
    answers: shuffle([
      { text: "बल", correct: false },
      { text: "आवेग", correct: false },
      { text: "त्वरण", correct: false },
      { text: "संवेग", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह संवेग की मानक परिभाषा है (p = mv)।"
  },
  {
    question: "प्रश्न 44: यदि किसी गतिशील वस्तु का द्रव्यमान दोगुना कर दिया जाए, तो समान बल के लिए उसका त्वरण:",
    answers: shuffle([
      { text: "दोगुना हो जाएगा", correct: false },
      { text: "आधा हो जाएगा", correct: true },
      { text: "चार गुना हो जाएगा", correct: false },
      { text: "अपरिवर्तित रहेगा", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> a = F/m के अनुसार, त्वरण द्रव्यमान के व्युत्क्रमानुपाती होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि द्रव्यमान दोगुना होता है, तो त्वरण आधा हो जाएगा।"
  },
  {
    question: "प्रश्न 45: जब कोई तैराक पानी में तैरता है, तो वह पानी को पीछे की ओर धकेलता है। यह क्या है?",
    answers: shuffle([
      { text: "क्रिया बल", correct: true },
      { text: "प्रतिक्रिया बल", correct: false },
      { text: "उत्प्लावन बल", correct: false },
      { text: "श्यान बल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> तैराक द्वारा पानी पर लगाया गया बल क्रिया है, और पानी द्वारा तैराक पर आगे की ओर लगाया गया बल प्रतिक्रिया है, जो उसे आगे बढ़ने में मदद करता है।"
  },
  {
    question: "प्रश्न 46: न्यूटन के नियमों की वैधता के लिए आवश्यक शर्त क्या है?",
    answers: shuffle([
      { text: "निर्देश तंत्र जड़त्वीय होना चाहिए।", correct: false },
      { text: "वस्तु का वेग प्रकाश के वेग से बहुत कम होना चाहिए।", correct: false },
      { text: "केवल स्थूल (macroscopic) वस्तुओं पर लागू होते हैं।", correct: false },
      { text: "ये सभी।", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन के नियम इन सभी शर्तों के तहत ही सटीक रूप से लागू होते हैं।"
  },
  {
    question: "प्रश्न 47: एक पत्थर को ऊपर की ओर फेंकने पर, उस पर लगने वाला गुरुत्वाकर्षण बल:",
    answers: shuffle([
      { text: "उसे ऊपर की ओर त्वरित करता है।", correct: false },
      { text: "उसे नीचे की ओर मंदित करता है।", correct: false },
      { text: "उसकी गति पर कोई प्रभाव नहीं डालता।", correct: false },
      { text: "उसे नीचे की ओर त्वरित करता है (या ऊपर की ओर मंदित करता है)।", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुत्वाकर्षण बल हमेशा नीचे की ओर कार्य करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब पत्थर ऊपर जाता है, तो यह बल उसकी गति का विरोध करता है (मंदन), और जब वह नीचे आता है, तो यह उसकी गति का समर्थन करता है (त्वरण)।"
  },
  {
    question: "प्रश्न 48: एक भारी ट्रक और एक छोटी कार समान वेग से गतिमान हैं। किसे रोकने के लिए अधिक बल की आवश्यकता होगी?",
    answers: shuffle([
      { text: "कार को", correct: false },
      { text: "ट्रक को", correct: true },
      { text: "दोनों को समान बल की", correct: false },
      { text: "यह उनकी गति पर निर्भर करता है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> ट्रक का द्रव्यमान अधिक है, इसलिए उसका संवेग (p=mv) भी अधिक है।<br><br><i class='fa-solid fa-angles-right icon'></i> संवेग में समान समय में अधिक परिवर्तन (उसे शून्य करने) के लिए अधिक बल की आवश्यकता होगी।"
  },
  {
    question: "प्रश्न 49: एक स्थिर वस्तु में क्या हो सकता है?",
    answers: shuffle([
      { text: "वेग", correct: false },
      { text: "त्वरण", correct: false },
      { text: "संवेग", correct: false },
      { text: "जड़त्व", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्येक वस्तु जिसका द्रव्यमान है, उसमें जड़त्व होता है, चाहे वह स्थिर हो या गतिमान।<br><br><i class='fa-solid fa-angles-right icon'></i> स्थिर वस्तु में वेग, त्वरण और संवेग शून्य होते हैं।"
  },
  {
    question: "प्रश्न 50: न्यूटन का तीसरा नियम बलों की ________ प्रकृति पर जोर देता है।",
    answers: shuffle([
      { text: "एकल", correct: false },
      { text: "अन्योन्य (पारस्परिक)", correct: true },
      { text: "आंतरिक", correct: false },
      { text: "बाहरी", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> तीसरा नियम बताता है कि बल हमेशा जोड़े में उत्पन्न होते हैं; कोई भी बल अकेला मौजूद नहीं हो सकता।"
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