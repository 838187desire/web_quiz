const questions = [
  {
    topHeading: "बल पर आधारित 50 MCQs,part_1(quiz_no.)"
  },
  {
    question: "प्रश्न 1. बल की मानक परिभाषा क्या है?",
    answers: shuffle([
      { text: "किसी वस्तु की गति की अवस्था।", correct: false },
      { text: "वह बाहरी कारक जो किसी वस्तु की अवस्था में परिवर्तन करता है या करने का प्रयास करता है।", correct: true },
      { text: "किसी वस्तु में निहित ऊर्जा।", correct: false },
      { text: "कार्य करने की क्षमता।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> बल एक धक्का या खिंचाव है जो किसी वस्तु की विरामावस्था, गति की अवस्था या आकार को बदल सकता है।"
  },
  {
    question: "प्रश्न 2. बल किस प्रकार की राशि है?",
    answers: shuffle([
      { text: "अदिश राशि", correct: false },
      { text: "सदिश राशि", correct: true },
      { text: "प्रदेश राशि", correct: false },
      { text: "विमाहीन राशि", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> बल को पूरी तरह से व्यक्त करने के लिए परिमाण और दिशा दोनों की आवश्यकता होती है, इसलिए यह एक सदिश राशि है।"
  },
  {
    question: "प्रश्न 3. बल का एस.आई. (SI) मात्रक क्या है?",
    answers: shuffle([
      { text: "जूल", correct: false },
      { text: "वॉट", correct: false },
      { text: "न्यूटन", correct: true },
      { text: "पास्कल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंतर्राष्ट्रीय मात्रक प्रणाली में बल का मात्रक न्यूटन (N) है।"
  },
  {
    question: "प्रश्न 4. निम्नलिखित में से कौन सा एक संपर्क बल (Contact Force) का उदाहरण है?",
    answers: shuffle([
      { text: "चुंबकीय बल", correct: false },
      { text: "गुरुत्वाकर्षण बल", correct: false },
      { text: "स्थिरविद्युत बल", correct: false },
      { text: "घर्षण बल", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण बल दो सतहों के बीच भौतिक संपर्क के कारण उत्पन्न होता है, जबकि अन्य विकल्प असंपर्क बल हैं।"
  },
  {
    question: "प्रश्न 5. प्रकृति में पाया जाने वाला सबसे कमजोर बल कौन सा है?",
    answers: shuffle([
      { text: "गुरुत्वाकर्षण बल", correct: true },
      { text: "विद्युत चुंबकीय बल", correct: false },
      { text: "प्रबल नाभिकीय बल", correct: false },
      { text: "दुर्बल नाभिकीय बल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुत्वाकर्षण बल चार मूलभूत बलों में सबसे क्षीण है, हालांकि इसकी परास अनंत होती है।"
  },
  {
    question: "प्रश्न 6. संतुलित बल (Balanced Forces) किसी वस्तु पर क्या प्रभाव डालते हैं?",
    answers: shuffle([
      { text: "वस्तु में त्वरण उत्पन्न करते हैं।", correct: false },
      { text: "वस्तु की गति की अवस्था में कोई परिवर्तन नहीं करते हैं।", correct: true },
      { text: "वस्तु की चाल बढ़ा देते हैं।", correct: false },
      { text: "वस्तु की दिशा बदल देते हैं।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब किसी वस्तु पर लगने वाले सभी बलों का परिणामी शून्य होता है, तो वे संतुलित बल कहलाते हैं और वस्तु की गति की अवस्था (स्थिर या एकसमान गति) में कोई बदलाव नहीं होता है।"
  },
  {
    question: "प्रश्न 7. जब कोई वस्तु एकसमान वेग से गति कर रही हो, तो उस पर लगने वाला शुद्ध बल कितना होता है?",
    answers: shuffle([
      { text: "शून्य", correct: true },
      { text: "उसके भार के बराबर", correct: false },
      { text: "एक स्थिर मान", correct: false },
      { text: "निरंतर बढ़ता हुआ", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एकसमान वेग का अर्थ है शून्य त्वरण।<br><br><i class='fa-solid fa-angles-right icon'></i> न्यूटन के दूसरे नियम (F=ma) के अनुसार, यदि त्वरण शून्य है, तो शुद्ध बल भी शून्य होगा।"
  },
  {
    question: "प्रश्न 8. प्रकृति में पाया जाने वाला सबसे प्रबल बल कौन सा है?",
    answers: shuffle([
      { text: "गुरुत्वाकर्षण बल", correct: false },
      { text: "विद्युत चुंबकीय बल", correct: false },
      { text: "प्रबल नाभिकीय बल", correct: true },
      { text: "दुर्बल नाभिकीय बल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रबल नाभिकीय बल परमाणु के नाभिक में प्रोटॉन और न्यूट्रॉन को एक साथ बांधे रखता है और यह सबसे शक्तिशाली मूलभूत बल है।"
  },
  {
    question: "प्रश्न 9. बल का विमीय सूत्र क्या है?",
    answers: shuffle([
      { text: "[MLT⁻¹]", correct: false },
      { text: "[MLT⁻²]", correct: true },
      { text: "[ML²T⁻²]", correct: false },
      { text: "[ML²T⁻¹]", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> बल = द्रव्यमान × त्वरण, जिसका विमीय सूत्र [M][LT⁻²] = [MLT⁻²] है।"
  },
  {
    question: "प्रश्न 10. अभिकेंद्रीय बल (Centripetal Force) की दिशा क्या होती है?",
    answers: shuffle([
      { text: "वृत्तीय पथ की स्पर्शरेखा के अनुदिश", correct: false },
      { text: "वृत्तीय पथ के केंद्र से बाहर की ओर", correct: false },
      { text: "वृत्तीय पथ के केंद्र की ओर", correct: true },
      { text: "गति की दिशा के विपरीत", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> अभिकेंद्रीय बल हमेशा वस्तु को वृत्तीय पथ पर बनाए रखने के लिए केंद्र की ओर निर्देशित होता है।"
  },
  {
    question: "प्रश्न 11. घर्षण बल की प्रकृति कैसी होती है?",
    answers: shuffle([
      { text: "यह हमेशा गति का समर्थन करता है।", correct: false },
      { text: "यह हमेशा गति का विरोध करता है।", correct: true },
      { text: "यह गति पर निर्भर नहीं करता।", correct: false },
      { text: "यह एक असंपर्क बल है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण बल दो सतहों के बीच सापेक्ष गति का विरोध करने वाला बल है।"
  },
  {
    question: "प्रश्न 12. अपकेंद्री बल (Centrifugal Force) एक कैसा बल है?",
    answers: shuffle([
      { text: "वास्तविक बल", correct: false },
      { text: "छद्म या आभासी बल", correct: true },
      { text: "प्रतिक्रिया बल", correct: false },
      { text: "नाभिकीय बल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक जड़त्वीय बल है जो केवल एक घूर्णन (त्वरित) निर्देश तंत्र में महसूस होता है, यह कोई वास्तविक बल नहीं है।"
  },
  {
    question: "प्रश्न 13. बल की CGS इकाई क्या है?",
    answers: shuffle([
      { text: "न्यूटन", correct: false },
      { text: "पास्कल", correct: false },
      { text: "अर्ग", correct: false },
      { text: "डाइन", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> बल की CGS (सेंटीमीटर-ग्राम-सेकंड) प्रणाली में इकाई डाइन है।<br><br><i class='fa-solid fa-angles-right icon'></i> 1 न्यूटन = 10⁵ डाइन।"
  },
  {
    question: "प्रश्न 14. जब किसी वस्तु पर असंतुलित बल लगाया जाता है, तो वस्तु में क्या उत्पन्न होता है?",
    answers: shuffle([
      { text: "स्थिर वेग", correct: false },
      { text: "त्वरण", correct: true },
      { text: "जड़त्व", correct: false },
      { text: "कोई परिवर्तन नहीं", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन के दूसरे नियम के अनुसार, एक असंतुलित या शुद्ध बल हमेशा वस्तु में त्वरण उत्पन्न करता है।"
  },
  {
    question: "प्रश्न 15. दो आवेशों के बीच लगने वाला स्थिरविद्युत बल किस प्रकार का बल है?",
    answers: shuffle([
      { text: "केवल आकर्षण बल", correct: false },
      { text: "केवल प्रतिकर्षण बल", correct: false },
      { text: "आकर्षण या प्रतिकर्षण बल", correct: true },
      { text: "संपर्क बल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> समान आवेशों के बीच प्रतिकर्षण और विपरीत आवेशों के बीच आकर्षण बल लगता है।"
  },
  {
    question: "प्रश्न 16. किसी द्रव में वस्तु पर ऊपर की ओर लगने वाला बल क्या कहलाता है?",
    answers: shuffle([
      { text: "श्यान बल", correct: false },
      { text: "पृष्ठ तनाव", correct: false },
      { text: "उत्प्लावन बल", correct: true },
      { text: "गुरुत्वाकर्षण बल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी तरल में आंशिक या पूर्ण रूप से डूबी हुई वस्तु पर ऊपर की ओर लगने वाला बल उत्प्लावन बल कहलाता है।"
  },
  {
    question: "प्रश्न 17. नाभिक के अंदर प्रोटॉनों को एक साथ कौन सा बल बांधे रखता है?",
    answers: shuffle([
      { text: "स्थिरविद्युत बल", correct: false },
      { text: "गुरुत्वाकर्षण बल", correct: false },
      { text: "प्रबल नाभिकीय बल", correct: true },
      { text: "चुंबकीय बल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोटॉनों के बीच स्थिरविद्युत प्रतिकर्षण के बावजूद, प्रबल नाभिकीय बल उन्हें नाभिक के भीतर एक साथ रखता है।"
  },
  {
    question: "प्रश्न 18. तनाव बल (Tension Force) सामान्यतः किसमें पाया जाता है?",
    answers: shuffle([
      { text: "ठोस सतहों में", correct: false },
      { text: "तरल पदार्थों में", correct: false },
      { text: "रस्सियों, धागों या केबलों में", correct: true },
      { text: "गैसों में", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> तनाव एक खींचने वाला बल है जो एक डोरी या रस्सी के माध्यम से प्रसारित होता है।"
  },
  {
    question: "प्रश्न 19. \"प्रत्येक क्रिया के बराबर तथा विपरीत प्रतिक्रिया होती है।\" यह कथन किस अवधारणा से संबंधित है?",
    answers: shuffle([
      { text: "बल के संतुलन से", correct: false },
      { text: "बल के जोड़े की प्रकृति से", correct: true },
      { text: "जड़त्व से", correct: false },
      { text: "संवेग से", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन का तीसरा नियम बताता है कि बल हमेशा जोड़े में (क्रिया-प्रतिक्रिया) मौजूद होते हैं।"
  },
  {
    question: "प्रश्न 20. किसी सतह द्वारा किसी वस्तु पर लंबवत रूप से लगाए गए बल को क्या कहते हैं?",
    answers: shuffle([
      { text: "घर्षण बल", correct: false },
      { text: "अभिलंब बल", correct: true },
      { text: "तनाव बल", correct: false },
      { text: "गुरुत्वाकर्षण बल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> अभिलंब बल (Normal Force) एक संपर्क बल है जो सतह के लंबवत होता है और वस्तु को सतह के आर-पार जाने से रोकता है।"
  },
  {
    question: "प्रश्न 21. कौन सा बल लंबी परास का होता है लेकिन बहुत कमजोर होता है?",
    answers: shuffle([
      { text: "चुंबकीय बल", correct: false },
      { text: "गुरुत्वाकर्षण बल", correct: true },
      { text: "स्थिरविद्युत बल", correct: false },
      { text: "दुर्बल नाभिकीय बल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुत्वाकर्षण बल की परास अनंत होती है, लेकिन यह मूलभूत बलों में सबसे कमजोर है।"
  },
  {
    question: "प्रश्न 22. असंरक्षी बल (Non-conservative force) का उदाहरण क्या है?",
    answers: shuffle([
      { text: "गुरुत्वाकर्षण बल", correct: false },
      { text: "स्थिरविद्युत बल", correct: false },
      { text: "घर्षण बल", correct: true },
      { text: "चुंबकीय बल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण बल द्वारा किया गया कार्य पथ पर निर्भर करता है और यह ऊर्जा का क्षय (ऊष्मा के रूप में) करता है, इसलिए यह एक असंरक्षी बल है।"
  },
  {
    question: "प्रश्न 23. बल और समय अंतराल का गुणनफल क्या कहलाता है?",
    answers: shuffle([
      { text: "कार्य", correct: false },
      { text: "शक्ति", correct: false },
      { text: "संवेग", correct: false },
      { text: "आवेग", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवेग (Impulse) को बल और उस समय के गुणनफल के रूप में परिभाषित किया जाता है जिसके लिए वह बल कार्य करता है।"
  },
  {
    question: "प्रश्न 24. एक समान वृत्तीय गति में, कौन सा बल आवश्यक है?",
    answers: shuffle([
      { text: "अपकेंद्री बल", correct: false },
      { text: "अभिकेंद्रीय बल", correct: true },
      { text: "घर्षण बल", correct: false },
      { text: "गुरुत्वाकर्षण बल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी वस्तु को वृत्ताकार पथ पर गतिमान रखने के लिए एक बल की आवश्यकता होती है जो हमेशा केंद्र की ओर निर्देशित हो, जिसे अभिकेंद्रीय बल कहते हैं।"
  },
  {
    question: "प्रश्न 25. यदि किसी वस्तु पर लगने वाला शुद्ध बल शून्य हो, तो वस्तु:",
    answers: shuffle([
      { text: "हमेशा स्थिर रहेगी।", correct: false },
      { text: "हमेशा त्वरित होगी।", correct: false },
      { text: "अपनी गति की अवस्था को बनाए रखेगी।", correct: true },
      { text: "हमेशा वृत्तीय गति करेगी।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन के पहले नियम के अनुसार, शून्य शुद्ध बल का अर्थ है शून्य त्वरण, इसलिए वस्तु या तो स्थिर रहेगी या एकसमान वेग से चलती रहेगी।"
  },
  {
    question: "प्रश्न 26. बल द्वारा किसी वस्तु में ________ उत्पन्न किया जाता है।",
    answers: shuffle([
      { text: "केवल गति", correct: false },
      { text: "त्वरण", correct: true },
      { text: "जड़त्व", correct: false },
      { text: "द्रव्यमान", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन का दूसरा नियम (F=ma) स्पष्ट रूप से बताता है कि बल त्वरण का कारण बनता है।"
  },
  {
    question: "प्रश्न 27. चार मूलभूत बलों में से किसकी परास सबसे कम होती है?",
    answers: shuffle([
      { text: "प्रबल नाभिकीय बल", correct: false },
      { text: "दुर्बल नाभिकीय बल", correct: true },
      { text: "विद्युत चुंबकीय बल", correct: false },
      { text: "गुरुत्वाकर्षण बल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> दुर्बल और प्रबल दोनों नाभिकीय बलों की परास बहुत कम होती है (परमाणु नाभिक के आकार तक सीमित), लेकिन दुर्बल बल की परास और भी कम होती है।"
  },
  {
    question: "प्रश्न 28. ससंजक बल (Cohesive Force) किसके बीच कार्य करता है?",
    answers: shuffle([
      { text: "एक ही पदार्थ के अणुओं के बीच", correct: true },
      { text: "विभिन्न पदार्थों के अणुओं के बीच", correct: false },
      { text: "केवल द्रव के अणुओं के बीच", correct: false },
      { text: "केवल ठोस के अणुओं के बीच", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> ससंजक बल समान अणुओं के बीच का आकर्षण बल है, जो पदार्थ को एक साथ रखता है।"
  },
  {
    question: "प्रश्न 29. आसंजक बल (Adhesive Force) किसके बीच कार्य करता है?",
    answers: shuffle([
      { text: "एक ही पदार्थ के अणुओं के बीच", correct: false },
      { text: "विभिन्न पदार्थों के अणुओं के बीच", correct: true },
      { text: "केवल गैस के अणुओं के बीच", correct: false },
      { text: "केवल चुंबकीय पदार्थों के बीच", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> आसंजक बल विभिन्न प्रकार के अणुओं के बीच का आकर्षण बल है, जैसे पानी और कांच के अणुओं के बीच।"
  },
  {
    question: "प्रश्न 30. ग्रहों की गति के लिए कौन सा बल मुख्य रूप से जिम्मेदार है?",
    answers: shuffle([
      { text: "चुंबकीय बल", correct: false },
      { text: "नाभिकीय बल", correct: false },
      { text: "गुरुत्वाकर्षण बल", correct: true },
      { text: "स्थिरविद्युत बल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य का विशाल गुरुत्वाकर्षण बल ग्रहों को उनकी कक्षाओं में बनाए रखता है।"
  },
  {
    question: "प्रश्न 31. बल को मापने के लिए किस उपकरण का उपयोग किया जाता है?",
    answers: shuffle([
      { text: "बैरोमीटर", correct: false },
      { text: "थर्मामीटर", correct: false },
      { text: "कमानीदार तुला (स्प्रिंग बैलेंस)", correct: true },
      { text: "वोल्टमीटर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> कमानीदार तुला स्प्रिंग के विस्तार को मापता है, जो उस पर लगाए गए बल (या भार) के समानुपाती होता है।"
  },
  {
    question: "प्रश्न 32. लोटनिक घर्षण (Rolling Friction) का मान सर्पी घर्षण (Sliding Friction) से:",
    answers: shuffle([
      { text: "अधिक होता है", correct: false },
      { text: "कम होता है", correct: true },
      { text: "बराबर होता है", correct: false },
      { text: "कभी अधिक कभी कम होता है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी वस्तु को लुढ़काना उसे खिसकाने की तुलना में बहुत आसान होता है, क्योंकि लोटनिक घर्षण का मान बहुत कम होता है।"
  },
  {
    question: "प्रश्न 33. यदि पृथ्वी अचानक घूमना बंद कर दे, तो भूमध्य रेखा पर किसी वस्तु का भार:",
    answers: shuffle([
      { text: "बढ़ जाएगा।", correct: true },
      { text: "घट जाएगा।", correct: false },
      { text: "अपरिवर्तित रहेगा।", correct: false },
      { text: "शून्य हो जाएगा।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> घूर्णन के कारण भूमध्य रेखा पर एक अपकेंद्री प्रभाव होता है जो गुरुत्वाकर्षण को थोड़ा कम करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि घूर्णन रुक जाए, तो यह प्रभाव समाप्त हो जाएगा और आभासी भार बढ़ जाएगा।"
  },
  {
    question: "प्रश्न 34. प्रकृति की सभी घटनाओं की व्याख्या कितने मूलभूत बलों के आधार पर की जा सकती है?",
    answers: shuffle([
      { text: "एक", correct: false },
      { text: "दो", correct: false },
      { text: "तीन", correct: false },
      { text: "चार", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> भौतिकी में सभी ज्ञात बल और अंतःक्रियाएँ चार मूलभूत बलों से उत्पन्न होती हैं: गुरुत्वाकर्षण, विद्युत चुंबकत्व, प्रबल नाभिकीय और दुर्बल नाभिकीय।"
  },
  {
    question: "प्रश्न 35. जब कोई बल किसी वस्तु की गति की दिशा के लंबवत लगता है, तो वह वस्तु की:",
    answers: shuffle([
      { text: "चाल को बदलता है।", correct: false },
      { text: "दिशा को बदलता है।", correct: true },
      { text: "गतिज ऊर्जा को बदलता है।", correct: false },
      { text: "संवेग को नहीं बदलता है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> लंबवत बल कोई कार्य नहीं करता, इसलिए चाल और गतिज ऊर्जा नहीं बदलती, लेकिन यह वेग की दिशा को मोड़ देता है, जैसा कि वृत्तीय गति में होता है।"
  },
  {
    question: "प्रश्न 36. द्रवों की बूंदों का गोलाकार आकार किस बल के कारण होता है?",
    answers: shuffle([
      { text: "श्यानता", correct: false },
      { text: "गुरुत्वाकर्षण", correct: false },
      { text: "पृष्ठ तनाव", correct: true },
      { text: "दाब", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृष्ठ तनाव द्रव का वह गुण है जिसके कारण वह अपने पृष्ठीय क्षेत्रफल को न्यूनतम करने का प्रयास करता है, और दी गई मात्रा के लिए गोले का पृष्ठीय क्षेत्रफल सबसे कम होता है।"
  },
  {
    question: "प्रश्न 37. एक संरक्षी बल (Conservative Force) द्वारा किया गया कार्य किस पर निर्भर करता है?",
    answers: shuffle([
      { text: "केवल प्रारंभिक और अंतिम स्थितियों पर", correct: true },
      { text: "अपनाए गए पथ पर", correct: false },
      { text: "वस्तु के वेग पर", correct: false },
      { text: "लिए गए समय पर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> संरक्षी बल जैसे गुरुत्वाकर्षण बल द्वारा किया गया कार्य पथ से स्वतंत्र होता है।"
  },
  {
    question: "प्रश्न 38. परमाणुओं और अणुओं को एक साथ बांधकर रखने वाला बल कौन सा है?",
    answers: shuffle([
      { text: "गुरुत्वाकर्षण बल", correct: false },
      { text: "विद्युत चुंबकीय बल", correct: true },
      { text: "प्रबल नाभिकीय बल", correct: false },
      { text: "दुर्बल नाभिकीय बल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> रासायनिक बंधन और अंतराण्विक बल मूल रूप से आवेशित कणों (इलेक्ट्रॉन और प्रोटॉन) के बीच विद्युत चुंबकीय अंतःक्रियाएं हैं।"
  },
  {
    question: "प्रश्न 39. किसी वस्तु का भार एक प्रकार का ________ है।",
    answers: shuffle([
      { text: "जड़त्व", correct: false },
      { text: "द्रव्यमान", correct: false },
      { text: "बल", correct: true },
      { text: "ऊर्जा", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> भार (W=mg) वह गुरुत्वाकर्षण बल है जिससे पृथ्वी किसी वस्तु को आकर्षित करती है।"
  },
  {
    question: "प्रश्न 40. बल युग्म (Couple) क्या उत्पन्न करता है?",
    answers: shuffle([
      { text: "केवल रैखिक गति", correct: false },
      { text: "केवल घूर्णी गति", correct: true },
      { text: "रैखिक और घूर्णी दोनों गति", correct: false },
      { text: "कोई गति नहीं", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक बल युग्म में दो बराबर और विपरीत बल होते हैं जो एक ही रेखा पर कार्य नहीं करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका परिणामी बल शून्य होता है लेकिन यह एक बल आघूर्ण उत्पन्न करता है, जिससे केवल घूर्णन होता है।"
  },
  {
    question: "प्रश्न 41. कौन सा बल रेडियोधर्मी क्षय जैसी प्रक्रियाओं के लिए जिम्मेदार है?",
    answers: shuffle([
      { text: "गुरुत्वाकर्षण बल", correct: false },
      { text: "विद्युत चुंबकीय बल", correct: false },
      { text: "प्रबल नाभिकीय बल", correct: false },
      { text: "दुर्बल नाभिकीय बल", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> दुर्बल नाभिकीय बल उप-परमाण्विक कणों के बीच होने वाली कुछ अंतःक्रियाओं, जैसे बीटा क्षय, के लिए उत्तरदायी है।"
  },
  {
    question: "प्रश्न 42. बल की व्यावहारिक इकाई क्या है?",
    answers: shuffle([
      { text: "किलोग्राम-भार (kgf)", correct: true },
      { text: "डाइन", correct: false },
      { text: "न्यूटन", correct: false },
      { text: "जूल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> किलोग्राम-भार (या किलोग्राम-बल) एक गुरुत्वीय इकाई है, जिसका उपयोग अक्सर इंजीनियरिंग और व्यावहारिक अनुप्रयोगों में किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 1 kgf ≈ 9.8 N."
  },
  {
    question: "प्रश्न 43. यदि किसी वस्तु पर कई बल लग रहे हों, तो वस्तु का त्वरण किस पर निर्भर करेगा?",
    answers: shuffle([
      { text: "सबसे बड़े बल पर", correct: false },
      { text: "सबसे छोटे बल पर", correct: false },
      { text: "सभी बलों के सदिश योग पर", correct: true },
      { text: "सभी बलों के अदिश योग पर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> वस्तु का त्वरण उस पर लगने वाले शुद्ध या परिणामी बल पर निर्भर करता है, जो सभी व्यक्तिगत बलों का सदिश योग होता है।"
  },
  {
    question: "प्रश्न 44. केंद्रीय बल (Central Force) की विशेषता क्या है?",
    answers: shuffle([
      { text: "यह हमेशा स्थिर रहता है।", correct: false },
      { text: "यह हमेशा एक स्थिर बिंदु की ओर या उससे दूर निर्देशित होता है।", correct: true },
      { text: "यह हमेशा गति के लंबवत होता है।", correct: false },
      { text: "यह हमेशा एक संपर्क बल होता है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुत्वाकर्षण बल और स्थिरविद्युत बल केंद्रीय बलों के उदाहरण हैं।"
  },
  {
    question: "प्रश्न 45. स्थैतिक घर्षण (Static Friction) का अधिकतम मान क्या कहलाता है?",
    answers: shuffle([
      { text: "गतिज घर्षण", correct: false },
      { text: "लोटनिक घर्षण", correct: false },
      { text: "सीमांत घर्षण", correct: true },
      { text: "श्यानता", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> सीमांत घर्षण वह अधिकतम स्थैतिक घर्षण बल है जो किसी वस्तु को गतिमान करने से ठीक पहले उस पर लगता है।"
  },
  {
    question: "प्रश्न 46. बल का व्यंजक F=ma किस स्थिति में लागू होता है?",
    answers: shuffle([
      { text: "जब वस्तु का द्रव्यमान स्थिर हो।", correct: true },
      { text: "जब वस्तु का वेग स्थिर हो।", correct: false },
      { text: "केवल वृत्तीय गति में।", correct: false },
      { text: "हमेशा लागू होता है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन के दूसरे नियम का अधिक सामान्य रूप F = dp/dt (संवेग में परिवर्तन की दर) है।<br><br><i class='fa-solid fa-angles-right icon'></i> F=ma इसका एक विशेष रूप है जब द्रव्यमान स्थिर रहता है।"
  },
  {
    question: "प्रश्न 47. किसी तरल की परतों के बीच सापेक्ष गति का विरोध करने वाले बल को क्या कहते हैं?",
    answers: shuffle([
      { text: "पृष्ठ तनाव", correct: false },
      { text: "श्यान बल", correct: true },
      { text: "आसंजक बल", correct: false },
      { text: "उत्प्लावन बल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्यानता किसी तरल का वह गुण है जो उसके प्रवाह का विरोध करता है, और यह श्यान बल के कारण होता है।"
  },
  {
    question: "प्रश्न 48. एक न्यूटन बल किसके बराबर है?",
    answers: shuffle([
      { text: "1 किलोग्राम द्रव्यमान में 1 मीटर/सेकंड का वेग उत्पन्न करने वाला बल।", correct: false },
      { text: "1 ग्राम द्रव्यमान में 1 सेमी/सेकंड² का त्वरण उत्पन्न करने वाला बल।", correct: false },
      { text: "1 किलोग्राम द्रव्यमान में 1 मीटर/सेकंड² का त्वरण उत्पन्न करने वाला बल।", correct: true },
      { text: "1 किलोग्राम द्रव्यमान में 9.8 मीटर/सेकंड² का त्वरण उत्पन्न करने वाला बल।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह F=ma सूत्र के अनुसार न्यूटन की मानक परिभाषा है।"
  },
  {
    question: "प्रश्न 49. बलों के अध्यारोपण का सिद्धांत (Principle of Superposition) क्या कहता है?",
    answers: shuffle([
      { text: "बल हमेशा जोड़े में होते हैं।", correct: false },
      { text: "किसी कण पर कई बलों का परिणामी उनके सदिश योग के बराबर होता है।", correct: true },
      { text: "बल हमेशा गति का विरोध करते हैं।", correct: false },
      { text: "बल हमेशा त्वरण उत्पन्न करता है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सिद्धांत बताता है कि प्रत्येक बल स्वतंत्र रूप से कार्य करता है और कुल प्रभाव सभी बलों का सदिश योग होता है।"
  },
  {
    question: "प्रश्न 50. एक हवाई जहाज एक स्थिर ऊँचाई और स्थिर वेग से उड़ रहा है। उसके पंखों द्वारा उत्पन्न उत्थापक बल (Lift force) किसके बराबर है?",
    answers: shuffle([
      { text: "हवाई जहाज के भार के", correct: true },
      { text: "इंजन के प्रणोद (thrust) के", correct: false },
      { text: "वायु प्रतिरोध के", correct: false },
      { text: "शून्य", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्थिर ऊँचाई का मतलब है कि ऊर्ध्वाधर दिशा में कोई त्वरण नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, ऊपर की ओर लगने वाला उत्थापक बल नीचे की ओर लगने वाले भार को संतुलित करता है।"
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