const questions = [
  {
    topHeading: " त्रुटियाँ, सार्थक अंक पर आधारित 50 बहुविकल्पीय प्रश्न,part_1 (quiz_no.)"
  },
  {
    question: "प्रश्न 1: किसी माप की यथार्थता (accuracy) क्या दर्शाती है?",
    answers: shuffle([
      { text: "माप की विभेदन क्षमता", correct: false },
      { text: "माप का उसके वास्तविक मान से निकटता", correct: true },
      { text: "एक ही माप की कई बार पुनरावृत्ति में मानों का सामंजस्य", correct: false },
      { text: "सार्थक अंकों की संख्या", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यथार्थता यह बताती है कि किसी भौतिक राशि का मापा गया मान उसके वास्तविक मान के कितना निकट है।"
  },
  {
    question: "प्रश्न 2: संख्या 0.0520 में सार्थक अंकों की संख्या कितनी है?",
    answers: shuffle([
      { text: "2", correct: false },
      { text: "3", correct: true },
      { text: "4", correct: false },
      { text: "5", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रथम अशून्य अंक से पहले के शून्य सार्थक नहीं होते, परन्तु दशमलव के बाद अंत में आने वाले शून्य सार्थक होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः 5, 2, और 0 सार्थक अंक हैं।"
  },
  {
    question: "प्रश्न 3: यादृच्छिक त्रुटि (random error) को कैसे कम किया जा सकता है?",
    answers: shuffle([
      { text: "बेहतर उपकरण का उपयोग करके", correct: false },
      { text: "व्यक्तिगत पूर्वाग्रह को हटाकर", correct: false },
      { text: "कई प्रेक्षणों का औसत मान लेकर", correct: true },
      { text: "बाह्य परिस्थितियों को नियंत्रित करके", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यादृच्छिक त्रुटियाँ अनियमित होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> कई बार माप लेकर उनका औसत निकालने से इन त्रुटियों का प्रभाव कम हो जाता है।"
  },
  {
    question: "प्रश्न 4: एक गोले की त्रिज्या के मापन में 2% की त्रुटि होती है। उसके आयतन की गणना में प्रतिशत त्रुटि कितनी होगी?",
    answers: shuffle([
      { text: "2%", correct: false },
      { text: "4%", correct: false },
      { text: "6%", correct: true },
      { text: "8%", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोले का आयतन V=(4/3)πr³ होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> आयतन में प्रतिशत त्रुटि = 3× (त्रिज्या में प्रतिशत त्रुटि) = 3×2%=6%।"
  },
  {
    question: "प्रश्न 5: संख्या 237.854 को तीन सार्थक अंकों तक पूर्णांकित करने पर क्या मिलेगा?",
    answers: shuffle([
      { text: "237", correct: false },
      { text: "238", correct: true },
      { text: "237.8", correct: false },
      { text: "237.9", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> हमें 7 तक रखना है।<br><br><i class='fa-solid fa-angles-right icon'></i> अगला अंक 8 है (जो 5 से बड़ा है), इसलिए 7 में 1 जोड़ दिया जाएगा, जिससे 238 प्राप्त होगा।"
  },
  {
    question: "प्रश्न 6: किसी उपकरण का अल्पतमांक (least count) क्या दर्शाता है?",
    answers: shuffle([
      { text: "उपकरण द्वारा मापी जा सकने वाली अधिकतम राशि", correct: false },
      { text: "उपकरण द्वारा मापी जा सकने वाली न्यूनतम राशि", correct: true },
      { text: "उपकरण की कुल त्रुटि", correct: false },
      { text: "उपकरण की यथार्थता", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> अल्पतमांक वह सबसे छोटा मान है जिसे कोई मापक यंत्र सटीकता से माप सकता है।"
  },
  {
    question: "प्रश्न 7: यदि X=A²B/C है तथा A, B और C के मापन में प्रतिशत त्रुटियाँ क्रमशः 1%, 2% और 3% हैं, तो X में अधिकतम प्रतिशत त्रुटि कितनी होगी?",
    answers: shuffle([
      { text: "2%", correct: false },
      { text: "4%", correct: false },
      { text: "7%", correct: true },
      { text: "0%", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> X में अधिकतम प्रतिशत त्रुटि = (2×A%)+B%+C%=(2×1%)+2%+3%=2%+2%+3%=7%।<br><br><i class='fa-solid fa-angles-right icon'></i> त्रुटियाँ हमेशा जुड़ती हैं।"
  },
  {
    question: "प्रश्न 8: निम्नलिखित में से किस संख्या में चार सार्थक अंक हैं?",
    answers: shuffle([
      { text: "6.023", correct: true },
      { text: "0.0620", correct: false },
      { text: "6200", correct: false },
      { text: "6.2", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> 6.023 में सभी चार अंक अशून्य हैं या अशून्य अंकों के बीच हैं, इसलिए इसमें चार सार्थक अंक हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> 0.0620 में तीन, 6200 में दो (जब तक अन्यथा न कहा जाए), और 6.2 में दो सार्थक अंक हैं।"
  },
  {
    question: "प्रश्न 9: क्रमबद्ध त्रुटि (systematic error) का कारण क्या हो सकता है?",
    answers: shuffle([
      { text: "उपकरण की अपूर्ण बनावट", correct: true },
      { text: "प्रयोग करने वाले व्यक्ति की लापरवाही", correct: false },
      { text: "तापमान और दाब में अचानक परिवर्तन", correct: false },
      { text: "उपरोक्त सभी", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रमबद्ध त्रुटियाँ निश्चित नियमों का पालन करती हैं और आमतौर पर उपकरण की बनावट में दोष, शून्य त्रुटि या गलत अंशांकन के कारण होती हैं।"
  },
  {
    question: "प्रश्न 10: दो लंबाइयों 25.2 सेमी और 14.73 सेमी का योग उचित सार्थक अंकों में क्या होगा?",
    answers: shuffle([
      { text: "39.93 सेमी", correct: false },
      { text: "39.9 सेमी", correct: true },
      { text: "40.0 सेमी", correct: false },
      { text: "39 सेमी", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> जोड़ या घटाव में, परिणाम में दशमलव के बाद उतने ही अंक होने चाहिए जितने कि मूल संख्याओं में से सबसे कम वाली संख्या में हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> 25.2 में दशमलव के बाद एक अंक है, इसलिए परिणाम 39.93 को एक अंक तक पूर्णांकित करके 39.9 लिखा जाएगा।"
  },
  {
    question: "प्रश्न 11: परिशुद्धता (precision) का क्या अर्थ है?",
    answers: shuffle([
      { text: "माप का वास्तविक मान के निकट होना", correct: false },
      { text: "विभिन्न मापों का एक दूसरे के निकट होना", correct: true },
      { text: "त्रुटि का शून्य होना", correct: false },
      { text: "सार्थक अंकों का अधिक होना", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> परिशुद्धता यह दर्शाती है कि किसी राशि के विभिन्न माप एक-दूसरे के कितने समीप हैं, चाहे वे वास्तविक मान के निकट हों या नहीं।"
  },
  {
    question: "प्रश्न 12: संख्या 6.023×10²³ में सार्थक अंकों की संख्या है:",
    answers: shuffle([
      { text: "23", correct: false },
      { text: "24", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैज्ञानिक संकेतन में, 10 की घात को सार्थक अंकों में नहीं गिना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> केवल 6.023 में सार्थक अंक गिने जाते हैं, जो कि 4 हैं।"
  },
  {
    question: "प्रश्न 13: एक तार की लंबाई (100.5 ± 0.1) सेमी और दूसरी तार की लंबाई (5.25 ± 0.05) सेमी है। कुल लंबाई में त्रुटि क्या होगी?",
    answers: shuffle([
      { text: "0.05 सेमी", correct: false },
      { text: "0.15 सेमी", correct: true },
      { text: "0.1 सेमी", correct: false },
      { text: "0.075 सेमी", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> राशियों को जोड़ने पर उनकी निरपेक्ष त्रुटियाँ भी जुड़ जाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः कुल त्रुटि = 0.1+0.05=0.15 सेमी।"
  },
  {
    question: "प्रश्न 14: एक भौतिक राशि P, P=a³b²/(c⋅√d) द्वारा दी गई है। P में अधिकतम प्रतिशत त्रुटि का सूत्र क्या होगा?",
    answers: shuffle([
      { text: "3(Δa/a)+2(Δb/b)−(1/2)(Δc/c)−(Δd/d)", correct: false },
      { text: "3(Δa/a)+2(Δb/b)+(1/2)(Δc/c)+(Δd/d)", correct: true },
      { text: "3(Δa/a)×2(Δb/b)/((1/2)(Δc/c)×(Δd/d))", correct: false },
      { text: "3(Δa/a)−2(Δb/b)+(1/2)(Δc/c)−(Δd/d)", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिकतम भिन्नात्मक त्रुटि की गणना करते समय, सभी राशियों की घातों को उनकी भिन्नात्मक त्रुटियों से गुणा करके जोड़ा जाता है, चाहे वे अंश में हों या हर में।"
  },
  {
    question: "प्रश्न 15: यदि किसी वृत्त की त्रिज्या 2.12 सेमी मापी जाती है, तो उसके क्षेत्रफल की गणना उचित सार्थक अंकों में क्या होगी? (π=3.14 मानें)",
    answers: shuffle([
      { text: "14.1 सेमी²", correct: true },
      { text: "14.11 सेमी²", correct: false },
      { text: "14.108 सेमी²", correct: false },
      { text: "14.108336 सेमी²", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्षेत्रफल = πr²=3.14×(2.12)²=14.108336 सेमी²।<br><br><i class='fa-solid fa-angles-right icon'></i> गुणा में, परिणाम में उतने ही सार्थक अंक होने चाहिए जितने कि न्यूनतम सार्थक अंकों वाली संख्या में हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> त्रिज्या (2.12) में 3 सार्थक अंक हैं, इसलिए क्षेत्रफल को 3 सार्थक अंकों तक पूर्णांकित किया जाएगा, जो 14.1 सेमी² है।"
  },
  {
    question: "प्रश्न 16: शून्य त्रुटि (zero error) किस प्रकार की त्रुटि है?",
    answers: shuffle([
      { text: "यादृच्छिक त्रुटि", correct: false },
      { text: "क्रमबद्ध त्रुटि (यंत्रगत)", correct: true },
      { text: "व्यक्तिगत त्रुटि", correct: false },
      { text: "सकल त्रुटि", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> शून्य त्रुटि उपकरण के कारण होने वाली एक क्रमबद्ध त्रुटि है, जिसमें पैमाने का शून्य मुख्य पैमाने के शून्य से मेल नहीं खाता है।"
  },
  {
    question: "प्रश्न 17: संख्या 5000 में कितने सार्थक अंक हैं?",
    answers: shuffle([
      { text: "1", correct: false },
      { text: "4", correct: false },
      { text: "3", correct: false },
      { text: "निर्धारित नहीं किया जा सकता", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिना दशमलव वाली संख्या में अनुगामी शून्य सार्थक हो भी सकते हैं और नहीं भी।<br><br><i class='fa-solid fa-angles-right icon'></i> स्पष्टता के लिए, इसे वैज्ञानिक संकेतन में लिखा जाना चाहिए, जैसे 5×10³ (1 सार्थक अंक) या 5.000×10³ (4 सार्थक अंक)।"
  },
  {
    question: "प्रश्न 18: सापेक्ष त्रुटि (relative error) को कैसे परिभाषित किया जाता है?",
    answers: shuffle([
      { text: "माध्य निरपेक्ष त्रुटि और वास्तविक मान का गुणनफल", correct: false },
      { text: "माध्य निरपेक्ष त्रुटि और माध्य मान का अनुपात", correct: true },
      { text: "व्यक्तिगत माप और वास्तविक मान का अंतर", correct: false },
      { text: "वास्तविक मान और मापे गए मान का अनुपात", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> सापेक्ष त्रुटि, माध्य निरपेक्ष त्रुटि (Δamean) और राशि के माध्य मान (amean) का अनुपात होती है।"
  },
  {
    question: "प्रश्न 19: एक स्क्रू गेज का अल्पतमांक 0.001 सेमी है। इस उपकरण द्वारा मापी गई लंबाई में कौन सा मान संभव है?",
    answers: shuffle([
      { text: "5.2 सेमी", correct: false },
      { text: "5.23 सेमी", correct: false },
      { text: "5.234 सेमी", correct: true },
      { text: "5.2345 सेमी", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> उपकरण का माप उसके अल्पतमांक का गुणज होना चाहिए।<br><br><i class='fa-solid fa-angles-right icon'></i> अल्पतमांक दशमलव के तीसरे स्थान तक है, इसलिए माप भी दशमलव के तीसरे स्थान तक ही संभव है।"
  },
  {
    question: "प्रश्न 20: (12.56 - 10.2) को उचित सार्थक अंकों में हल करें।",
    answers: shuffle([
      { text: "2.36", correct: false },
      { text: "2.4", correct: true },
      { text: "2.3", correct: false },
      { text: "2", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> घटाव में, परिणाम में दशमलव के बाद उतने ही अंक होने चाहिए जितने सबसे कम वाली संख्या में हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> 10.2 में दशमलव के बाद एक अंक है।<br><br><i class='fa-solid fa-angles-right icon'></i> 12.56−10.2=2.36, जिसे एक दशमलव स्थान तक पूर्णांकित करने पर 2.4 मिलता है।"
  },
  {
    question: "प्रश्न 21: यदि किसी माप में परिशुद्धता अधिक है, तो यह आवश्यक नहीं है कि उसमें:",
    answers: shuffle([
      { text: "यथार्थता भी अधिक हो", correct: true },
      { text: "सार्थक अंक अधिक हों", correct: false },
      { text: "क्रमबद्ध त्रुटि कम हो", correct: false },
      { text: "यादृच्छिक त्रुटि कम हो", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक माप बहुत परिशुद्ध हो सकता है (अर्थात सभी माप एक-दूसरे के बहुत करीब हों), लेकिन यदि कोई बड़ी क्रमबद्ध त्रुटि मौजूद है तो वह यथार्थ नहीं होगा (वास्तविक मान से दूर होगा)।"
  },
  {
    question: "प्रश्न 22: संख्या 3.00 में कितने सार्थक अंक हैं?",
    answers: shuffle([
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "3", correct: true },
      { text: "0", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> दशमलव वाली संख्या में अनुगामी (अंत में आने वाले) शून्य सार्थक माने जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> वे माप की परिशुद्धता को दर्शाते हैं।"
  },
  {
    question: "प्रश्न 23: एक घन की भुजा मापने में 3% की त्रुटि होती है। घन के पृष्ठ क्षेत्रफल की गणना में प्रतिशत त्रुटि होगी:",
    answers: shuffle([
      { text: "3%", correct: false },
      { text: "4.5%", correct: false },
      { text: "6%", correct: true },
      { text: "9%", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> घन का पृष्ठ क्षेत्रफल A=6L² होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> क्षेत्रफल में प्रतिशत त्रुटि = 2× (भुजा में प्रतिशत त्रुटि) = 2×3%=6%।"
  },
  {
    question: "प्रश्न 24: व्यक्तिगत त्रुटि (personal error) का कारण क्या है?",
    answers: shuffle([
      { text: "उपकरण में खराबी", correct: false },
      { text: "प्रेक्षक का पूर्वाग्रह या parallax (लंबन)", correct: true },
      { text: "वायु का दबाव", correct: false },
      { text: "गुरुत्वाकर्षण में परिवर्तन", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यक्तिगत त्रुटियाँ प्रेक्षक द्वारा पाठ्यांक लेने में असावधानी, गलत तरीके से उपकरण स्थापित करने या लंबन के कारण होती हैं।"
  },
  {
    question: "प्रश्न 25: 15.0 मीटर को सेंटीमीटर में बदलने पर सार्थक अंकों की संख्या क्या होगी?",
    answers: shuffle([
      { text: "3", correct: true },
      { text: "4", correct: false },
      { text: "5", correct: false },
      { text: "अपरिवर्तित (3)", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> मात्रक बदलने से सार्थक अंकों की संख्या नहीं बदलती है।<br><br><i class='fa-solid fa-angles-right icon'></i> 15.0 मीटर (3 सार्थक अंक) = 1500 सेमी = 1.50×10³ सेमी (3 सार्थक अंक)।"
  },
  {
    question: "प्रश्न 26. प्रतिशत त्रुटि (percentage error) का सूत्र क्या है?",
    answers: shuffle([
      { text: "(माध्य निरपेक्ष त्रुटि / माध्य मान) × 100", correct: true },
      { text: "(माध्य मान / माध्य निरपेक्ष त्रुटि) × 100", correct: false },
      { text: "(वास्तविक मान - मापा गया मान) × 100", correct: false },
      { text: "(अल्पतमांक / कुल माप) × 100", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिशत त्रुटि, सापेक्ष त्रुटि को 100 से गुणा करके प्राप्त की जाती है।"
  },
  {
    question: "प्रश्न 27. निम्नलिखित में से कौन-सी त्रुटि धनात्मक या ऋणात्मक दोनों हो सकती है?",
    answers: shuffle([
      { text: "शून्य त्रुटि", correct: false },
      { text: "पिच त्रुटि", correct: false },
      { text: "यादृच्छिक त्रुटि", correct: true },
      { text: "ये सभी", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यादृच्छिक त्रुटियाँ अनिश्चित होती हैं और मापे गए मान को वास्तविक मान से अधिक या कम कर सकती हैं, इसलिए वे धनात्मक या ऋणात्मक हो सकती हैं।"
  },
  {
    question: "प्रश्न 28. (5.2×1.35)/2.5 का मान उचित सार्थक अंकों में ज्ञात करें।",
    answers: shuffle([
      { text: "2.808", correct: false },
      { text: "2.81", correct: false },
      { text: "2.8", correct: true },
      { text: "3", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस गणना में, न्यूनतम सार्थक अंकों वाली संख्या 5.2 और 2.5 हैं (दोनों में 2 सार्थक अंक हैं)।<br><br><i class='fa-solid fa-angles-right icon'></i> गणना का परिणाम (7.02/2.5=2.808) को 2 सार्थक अंकों तक पूर्णांकित किया जाना चाहिए, जो 2.8 है।"
  },
  {
    question: "प्रश्न 29. किसी माप की विभेदन क्षमता (resolution) किससे संबंधित है?",
    answers: shuffle([
      { text: "यथार्थता", correct: false },
      { text: "परिशुद्धता", correct: false },
      { text: "अल्पतमांक", correct: true },
      { text: "निरपेक्ष त्रुटि", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी उपकरण की विभेदन क्षमता या सीमा उसके अल्पतमांक द्वारा निर्धारित होती है, अर्थात वह दो बहुत करीबी मानों में कितना अंतर कर सकता है।"
  },
  {
    question: "प्रश्न 30. एक विद्यार्थी तीन माप 1.52, 1.54, 1.56 लेता है। माप में माध्य निरपेक्ष त्रुटि क्या है?",
    answers: shuffle([
      { text: "0.02", correct: false },
      { text: "0.04", correct: false },
      { text: "1.54", correct: false },
      { text: "0.013", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> माध्य मान = (1.52+1.54+1.56)/3 = 1.54।<br><br><i class='fa-solid fa-angles-right icon'></i> निरपेक्ष त्रुटियाँ: |1.52-1.54|=0.02, |1.54-1.54|=0.00, |1.56-1.54|=0.02।<br><br><i class='fa-solid fa-angles-right icon'></i> माध्य निरपेक्ष त्रुटि = (0.02+0.00+0.02)/3 ≈ 0.013।"
  },
  {
    question: "प्रश्न 31. सार्थक अंकों का क्या महत्व है?",
    answers: shuffle([
      { text: "यह गणना को आसान बनाते हैं", correct: false },
      { text: "यह माप की परिशुद्धता को दर्शाते हैं", correct: true },
      { text: "यह त्रुटियों को खत्म कर देते हैं", correct: false },
      { text: "यह संख्या को आकर्षक बनाते हैं", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी संख्या में सार्थक अंक उन अंकों को दर्शाते हैं जो विश्वसनीय रूप से ज्ञात हैं, और इस प्रकार वे माप की परिशुद्धता का संकेत देते हैं।"
  },
  {
    question: "प्रश्न 32. संख्या 432.70 को चार सार्थक अंकों तक पूर्णांकित करें।",
    answers: shuffle([
      { text: "432", correct: false },
      { text: "433", correct: false },
      { text: "432.7", correct: true },
      { text: "432.8", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> हमें 7 तक रखना है।<br><br><i class='fa-solid fa-angles-right icon'></i> अगला अंक 0 है (जो 5 से कम है), इसलिए 7 अपरिवर्तित रहेगा।<br><br><i class='fa-solid fa-angles-right icon'></i> परिणाम 432.7 होगा।"
  },
  {
    question: "प्रश्न 33. दो प्रतिरोध R1​=(100±3)Ω और R2​=(200±4)Ω को श्रेणीक्रम में जोड़ा गया है। तुल्य प्रतिरोध में त्रुटि क्या होगी?",
    answers: shuffle([
      { text: "7Ω", correct: true },
      { text: "1Ω", correct: false },
      { text: "5Ω", correct: false },
      { text: "12Ω", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्रेणीक्रम में तुल्य प्रतिरोध R=R1​+R2​ होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> त्रुटियाँ जुड़ जाती हैं, अतः ΔR=ΔR1​+ΔR2​=3+4=7Ω।"
  },
  {
    question: "प्रश्न 34. एक संख्या को वैज्ञानिक संकेतन में क्यों लिखा जाता है?",
    answers: shuffle([
      { text: "संख्या को छोटा दिखाने के लिए", correct: false },
      { text: "गणना में आसानी के लिए", correct: false },
      { text: "सार्थक अंकों की संख्या को स्पष्ट रूप से दर्शाने के लिए", correct: true },
      { text: "इसे अंतरराष्ट्रीय मानक बनाने के लिए", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैज्ञानिक संकेतन का उपयोग बहुत बड़ी या बहुत छोटी संख्याओं को लिखने और उनमें सार्थक अंकों की संख्या के बारे में अस्पष्टता को दूर करने के लिए किया जाता है।"
  },
  {
    question: "प्रश्न 35. यदि किसी माप का वास्तविक मान 5.0 सेमी है और मापा गया मान 5.2 सेमी है, तो निरपेक्ष त्रुटि क्या है?",
    answers: shuffle([
      { text: "0.2 सेमी", correct: true },
      { text: "-0.2 सेमी", correct: false },
      { text: "10.2 सेमी", correct: false },
      { text: "0.04 सेमी", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> निरपेक्ष त्रुटि मापे गए मान और वास्तविक मान के अंतर का परिमाण है: ∣5.2−5.0∣=0.2 सेमी।"
  },
  {
    question: "प्रश्न 36. एक आयत की लंबाई 10.5 सेमी और चौड़ाई 2.1 सेमी है। इसका क्षेत्रफल उचित सार्थक अंकों में क्या होगा?",
    answers: shuffle([
      { text: "22.05 सेमी²", correct: false },
      { text: "22.1 सेमी²", correct: false },
      { text: "22 सेमी²", correct: true },
      { text: "22.0 सेमी²", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्षेत्रफल = 10.5×2.1=22.05 सेमी²।<br><br><i class='fa-solid fa-angles-right icon'></i> न्यूनतम सार्थक अंक चौड़ाई (2.1) में हैं, जो 2 हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, परिणाम को 2 सार्थक अंकों तक पूर्णांकित किया जाएगा, जो 22 सेमी² है।"
  },
  {
    question: "प्रश्न 37. \"सभी अशून्य अंक सार्थक होते हैं\"। यह कथन है:",
    answers: shuffle([
      { text: "सत्य", correct: true },
      { text: "असत्य", correct: false },
      { text: "कभी-कभी सत्य", correct: false },
      { text: "जानकारी अपर्याप्त है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> सार्थक अंकों की पहचान के लिए यह एक मूलभूत नियम है।"
  },
  {
    question: "प्रश्न 38. एक सरल लोलक के आवर्तकाल के मापन में 1.5% की त्रुटि और उसकी लंबाई के मापन में 1% की त्रुटि होती है। g के मान की गणना में अधिकतम प्रतिशत त्रुटि कितनी होगी?",
    answers: shuffle([
      { text: "2.5%", correct: false },
      { text: "4%", correct: true },
      { text: "0.5%", correct: false },
      { text: "3.5%", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूत्र T=2πL/g​ से, g=4π2L/T2 होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> g में प्रतिशत त्रुटि = (L में % त्रुटि) + 2× (T में % त्रुटि) = 1%+2×1.5%=1%+3%=4%।"
  },
  {
    question: "प्रश्न 39. सकल त्रुटि (gross error) का मुख्य कारण क्या है?",
    answers: shuffle([
      { text: "बाहरी विक्षोभ", correct: false },
      { text: "उपकरण की सीमा", correct: false },
      { text: "प्रेक्षक की घोर लापरवाही या गलती", correct: true },
      { text: "परिवेश का तापमान", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> सकल त्रुटियाँ आमतौर पर प्रयोगकर्ता द्वारा पाठ्यांक को गलत पढ़ने, गलत लिखने या गणना में गलती करने जैसी मानवीय भूलों के कारण होती हैं।"
  },
  {
    question: "प्रश्न 40. संख्या 846.00 में कितने सार्थक अंक हैं?",
    answers: shuffle([
      { text: "3", correct: false },
      { text: "2", correct: false },
      { text: "5", correct: true },
      { text: "4", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> दशमलव बिंदु के बाद आने वाले सभी शून्य सार्थक होते हैं, इसलिए 8, 4, 6, 0, 0 सभी सार्थक अंक हैं।"
  },
  {
    question: "प्रश्न 41. एक भौतिक राशि Z का मान 4.5678 है। इसे दो दशमलव स्थानों तक पूर्णांकित करने पर मान क्या होगा?",
    answers: shuffle([
      { text: "4.56", correct: false },
      { text: "4.57", correct: true },
      { text: "4.5", correct: false },
      { text: "4.6", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> हमें 6 तक रखना है।<br><br><i class='fa-solid fa-angles-right icon'></i> अगला अंक 7 है (जो 5 से बड़ा है), इसलिए 6 में 1 जोड़ा जाएगा।<br><br><i class='fa-solid fa-angles-right icon'></i> परिणाम 4.57 होगा।"
  },
  {
    question: "प्रश्न 42. यदि किसी राशि की घात 'n' है, तो उसकी गणना में प्रतिशत त्रुटि मूल राशि की प्रतिशत त्रुटि की ______ गुनी हो जाती है।",
    answers: shuffle([
      { text: "n", correct: true },
      { text: "1/n", correct: false },
      { text: "n2", correct: false },
      { text: "n​", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि Y=Xn है, तो Y में प्रतिशत त्रुटि n गुना (X में प्रतिशत त्रुटि) होती है।"
  },
  {
    question: "प्रश्न 43. एक अच्छा मापन वह है जिसमें:",
    answers: shuffle([
      { text: "यथार्थता और परिशुद्धता दोनों उच्च हों", correct: true },
      { text: "केवल यथार्थता उच्च हो", correct: false },
      { text: "केवल परिशुद्धता उच्च हो", correct: false },
      { text: "सार्थक अंक कम हों", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक आदर्श माप के लिए आवश्यक है कि वह वास्तविक मान के करीब (यथार्थ) हो और बार-बार करने पर सुसंगत परिणाम दे (परिशुद्ध)।"
  },
  {
    question: "प्रश्न 44. 'कोटिमान' (Order of magnitude) का क्या अर्थ है?",
    answers: shuffle([
      { text: "संख्या में अंकों की संख्या", correct: false },
      { text: "संख्या का निकटतम पूर्णांक मान", correct: false },
      { text: "10 की वह घात जो उस संख्या के सबसे निकट हो", correct: true },
      { text: "संख्या का वर्गमूल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी राशि का कोटिमान 10 की निकटतम घात के रूप में उस राशि का एक अनुमान है।"
  },
  {
    question: "प्रश्न 45. 200.0 में कितने सार्थक अंक हैं?",
    answers: shuffle([
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> दशमलव के बाद शून्य सार्थक होते हैं, इसलिए 2, 0, 0, 0 सभी सार्थक अंक हैं, जो माप की परिशुद्धता को दर्शाते हैं।"
  },
  {
    question: "प्रश्न 46. एक गोले के व्यास के मापन में निरपेक्ष त्रुटि 0.04 सेमी है। त्रिज्या के मापन में निरपेक्ष त्रुटि कितनी होगी?",
    answers: shuffle([
      { text: "0.04 सेमी", correct: false },
      { text: "0.08 सेमी", correct: false },
      { text: "0.02 सेमी", correct: true },
      { text: "0.01 सेमी", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> त्रिज्या, व्यास की आधी होती है (r=d/2)।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, त्रिज्या में निरपेक्ष त्रुटि भी व्यास की निरपेक्ष त्रुटि की आधी होगी: Δr=Δd/2=0.04/2=0.02 सेमी।"
  },
  {
    question: "प्रश्न 47. वह त्रुटि जो प्रयोग की condiciones (परिस्थितियों) में परिवर्तन के कारण उत्पन्न होती है, कहलाती है:",
    answers: shuffle([
      { text: "यंत्रगत त्रुटि", correct: false },
      { text: "व्यक्तिगत त्रुटि", correct: false },
      { text: "बाह्य त्रुटि", correct: true },
      { text: "सकल त्रुटि", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> तापमान, दाब, आर्द्रता या बाहरी चुंबकीय/विद्युत क्षेत्रों में परिवर्तन के कारण होने वाली त्रुटियों को बाह्य कारणों से होने वाली त्रुटियाँ कहा जाता है।"
  },
  {
    question: "प्रश्न 48. 12965 को तीन सार्थक अंकों में व्यक्त करें।",
    answers: shuffle([
      { text: "130", correct: false },
      { text: "12900", correct: false },
      { text: "1.30 ×104", correct: true },
      { text: "1.29 ×104", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> 12965 को तीन सार्थक अंकों तक पूर्णांकित करने पर 13000 मिलेगा।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे स्पष्ट रूप से तीन सार्थक अंकों में दिखाने का सबसे अच्छा तरीका वैज्ञानिक संकेतन है: 1.30×104।"
  },
  {
    question: "प्रश्न 49. यदि किसी माप की सापेक्ष त्रुटि 0.05 है, तो प्रतिशत त्रुटि क्या होगी?",
    answers: shuffle([
      { text: "0.05%", correct: false },
      { text: "0.5%", correct: false },
      { text: "5%", correct: true },
      { text: "50%", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिशत त्रुटि = सापेक्ष त्रुटि × 100 = 0.05×100=5%।"
  },
  {
    question: "प्रश्न 50. एक मीटर पैमाने का अल्पतमांक 1 मिमी है। इससे लंबाई मापने में संभावित प्रतिशत त्रुटि क्या होगी यदि लंबाई 50 सेमी मापी गई हो?",
    answers: shuffle([
      { text: "0.2%", correct: true },
      { text: "2%", correct: false },
      { text: "0.5%", correct: false },
      { text: "5%", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> अल्पतमांक ΔL=1 मिमी = 0.1 सेमी।<br><br><i class='fa-solid fa-angles-right icon'></i> मापी गई लंबाई L=50 सेमी।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रतिशत त्रुटि = (ΔL/L)×100=(0.1/50)×100=0.2%।"
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