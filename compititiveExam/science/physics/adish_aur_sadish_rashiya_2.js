const questions = [
  {
    topHeading: "सदिश और अदिश राशियों पर आधारित 50 बहुविकल्पीय प्रश्न ,part_2 (quiz_no.4)"
  },
  {
    question: "प्रश्न 1: 'विद्युत द्विध्रुव आघूर्ण' (Electric Dipole Moment) है:",
    answers: shuffle([
      { text: "अदिश राशि", correct: false },
      { text: "सदिश राशि", correct: true },
      { text: "इकाई रहित", correct: false },
      { text: "केवल एक संख्या", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसकी दिशा ऋणात्मक आवेश से धनात्मक आवेश की ओर होती है, और इसका एक परिमाण होता है, इसलिए यह एक सदिश राशि है।"
  },
  {
    question: "प्रश्न 2: दो सदिशों के बीच का कोण ज्ञात करने के लिए किसका उपयोग करना सबसे उपयुक्त है?",
    answers: shuffle([
      { text: "अदिश गुणनफल (Dot Product)", correct: true },
      { text: "सदिश गुणनफल (Cross Product)", correct: false },
      { text: "सदिश योग", correct: false },
      { text: "सदिश घटाव", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> अदिश गुणनफल का सूत्र A.B = |A||B|cos(θ) है, जिससे cos(θ) और फिर कोण θ को आसानी से निकाला जा सकता है।"
  },
  {
    question: "प्रश्न 3: 'गुरुत्वीय क्षेत्र की तीव्रता' (Gravitational Field Intensity) है एक:",
    answers: shuffle([
      { text: "अदिश राशि", correct: false },
      { text: "सदिश राशि", correct: true },
      { text: "ऊर्जा", correct: false },
      { text: "विभव", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह किसी बिंदु पर इकाई द्रव्यमान द्वारा अनुभव किया जाने वाला गुरुत्वाकर्षण बल है।<br><br><i class='fa-solid fa-angles-right icon'></i> बल होने के कारण यह एक सदिश राशि है और इसकी दिशा हमेशा द्रव्यमान के केंद्र की ओर होती है।"
  },
  {
    question: "प्रश्न 4: एक शून्य सदिश (Null Vector) में होता है:",
    answers: shuffle([
      { text: "शून्य परिमाण और कोई भी दिशा", correct: true },
      { text: "शून्य परिमाण और एक विशिष्ट दिशा", correct: false },
      { text: "एक परिमाण और कोई दिशा नहीं", correct: false },
      { text: "अनंत परिमाण", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> शून्य सदिश का परिमाण शून्य होता है, और इसकी दिशा अपरिभाषित या स्वेच्छ (arbitrary) होती है।"
  },
  {
    question: "प्रश्न 5: किसी सदिश का उसी सदिश के साथ सदिश गुणनफल (Cross Product) होता है:",
    answers: shuffle([
      { text: "सदिश का वर्ग", correct: false },
      { text: "शून्य सदिश", correct: true },
      { text: "एक", correct: false },
      { text: "सदिश का परिमाण", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> A x A = |A||A|sin(0°) n̂ = 0।<br><br><i class='fa-solid fa-angles-right icon'></i> किसी भी सदिश का स्वयं के साथ कोण 0° होता है, और sin(0°) शून्य होता है।"
  },
  {
    question: "प्रश्न 6: 'विकृति' (Strain) किस प्रकार की राशि है?",
    answers: shuffle([
      { text: "सदिश", correct: false },
      { text: "अदिश", correct: false },
      { text: "प्रदेश", correct: false },
      { text: "विमाहीन अदिश राशि", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> विकृति वस्तु के आकार में सापेक्ष परिवर्तन है (लंबाई में परिवर्तन / मूल लंबाई)।<br><br><i class='fa-solid fa-angles-right icon'></i> यह दो समान राशियों का अनुपात है, इसलिए यह विमाहीन और अदिश है।"
  },
  {
    question: "प्रश्न 7: एक कार सीधी सड़क पर एकसमान वेग से चल रही है। इसका त्वरण कितना होगा?",
    answers: shuffle([
      { text: "एकसमान", correct: false },
      { text: "शून्य", correct: true },
      { text: "परिवर्तनशील", correct: false },
      { text: "वेग के बराबर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एकसमान वेग का अर्थ है कि वेग में कोई परिवर्तन नहीं हो रहा है (न तो परिमाण में और न ही दिशा में)।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि त्वरण वेग में परिवर्तन की दर है, इसलिए त्वरण शून्य होगा।"
  },
  {
    question: "प्रश्न 8: 'पलायन वेग' (Escape Velocity) है:",
    answers: shuffle([
      { text: "एक सदिश राशि", correct: false },
      { text: "एक अदिश राशि", correct: true },
      { text: "एक निर्देश तंत्र पर निर्भर राशि", correct: false },
      { text: "एक ऋणात्मक राशि", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> पलायन वेग वह न्यूनतम गति है जो किसी वस्तु को ग्रह के गुरुत्वाकर्षण से बाहर निकलने के लिए चाहिए।<br><br><i class='fa-solid fa-angles-right icon'></i> यह गति (चाल) को संदर्भित करता है, न कि वेग को, इसलिए यह एक अदिश राशि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी कोई विशिष्ट दिशा नहीं होती।"
  },
  {
    question: "प्रश्न 9: किसी समतल में गतिमान कण के वेग सदिश की दिशा होती है:",
    answers: shuffle([
      { text: "हमेशा मूल बिंदु की ओर", correct: false },
      { text: "हमेशा कण के पथ के लंबवत", correct: false },
      { text: "कण के पथ की स्पर्शरेखा (tangent) के अनुदिश", correct: true },
      { text: "हमेशा स्थिर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी भी क्षण पर, वेग की दिशा उस बिंदु पर कण के पथ के स्पर्शीय होती है।"
  },
  {
    question: "प्रश्न 10: 'विशिष्ट ऊष्मा' (Specific Heat) है:",
    answers: shuffle([
      { text: "एक सदिश राशि", correct: false },
      { text: "एक अदिश राशि", correct: true },
      { text: "एक तापमान-निर्भर सदिश", correct: false },
      { text: "एक आयामी स्थिरांक", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> विशिष्ट ऊष्मा किसी पदार्थ के इकाई द्रव्यमान का तापमान एक डिग्री सेल्सियस बढ़ाने के लिए आवश्यक ऊष्मा की मात्रा है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक अदिश राशि है।"
  },
  {
    question: "प्रश्न 11: निम्नलिखित में से कौन सा व्यंजक एक सदिश राशि को निरूपित नहीं करता है?",
    answers: shuffle([
      { text: "वेग × समय", correct: false },
      { text: "बल / द्रव्यमान", correct: false },
      { text: "चाल × समय", correct: true },
      { text: "त्वरण × समय", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> चाल (अदिश) और समय (अदिश) का गुणनफल दूरी (अदिश) होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी विकल्प (विस्थापन, त्वरण, वेग में परिवर्तन) सदिश राशियों को निरूपित करते हैं।"
  },
  {
    question: "प्रश्न 12: यदि दो सदिशों A और B के लिए A . B = 0 है, तो इसका अर्थ है:",
    answers: shuffle([
      { text: "a) A और B समांतर हैं।", correct: false },
      { text: "b) A और B एक दूसरे के लंबवत हैं।", correct: false },
      { text: "c) A या B में से कोई एक शून्य सदिश है।", correct: false },
      { text: "d) (b) या (c) दोनों संभव हैं।", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> अदिश गुणनफल शून्य तब होता है जब या तो सदिशों के बीच का कोण 90° हो, या कम से कम एक सदिश शून्य सदिश हो।"
  },
  {
    question: "प्रश्न 13: 'चुंबकीय आघूर्ण' (Magnetic Moment) है:",
    answers: shuffle([
      { text: "अदिश", correct: false },
      { text: "सदिश", correct: true },
      { text: "प्रदेश", correct: false },
      { text: "संख्या", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> चुंबकीय आघूर्ण की दिशा दक्षिणी ध्रुव से उत्तरी ध्रुव की ओर होती है, इसलिए यह एक सदिश राशि है।"
  },
  {
    question: "प्रश्न 14: अदिश राशि का उदाहरण है:",
    answers: shuffle([
      { text: "रैखिक संवेग", correct: false },
      { text: "कोणीय संवेग", correct: false },
      { text: "विद्युत क्षेत्र", correct: false },
      { text: "विद्युत आवेश", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत आवेश का केवल परिमाण होता है, कोई दिशा नहीं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक मौलिक अदिश राशि है।"
  },
  {
    question: "प्रश्न 15: एक समान सदिश (Unit Vector) का परिमाण होता है:",
    answers: shuffle([
      { text: "शून्य", correct: false },
      { text: "एक", correct: true },
      { text: "अनंत", correct: false },
      { text: "सदिश के परिमाण के बराबर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक समान सदिश का उपयोग केवल दिशा निर्दिष्ट करने के लिए किया जाता है और परिभाषा के अनुसार इसका परिमाण हमेशा एक (इकाई) होता है।"
  },
  {
    question: "प्रश्न 16: स्थिति सदिश (Position Vector) क्या निर्दिष्ट करता है?",
    answers: shuffle([
      { text: "किसी कण की गति", correct: false },
      { text: "किसी कण का वेग", correct: false },
      { text: "मूल बिंदु के सापेक्ष किसी कण की स्थिति और दिशा", correct: true },
      { text: "किसी कण का द्रव्यमान", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्थिति सदिश एक सदिश है जो निर्देश तंत्र के मूल बिंदु से किसी कण की स्थिति तक खींचा जाता है।"
  },
  {
    question: "प्रश्न 17: अभिकेंद्रीय बल (Centripetal Force) की दिशा होती है:",
    answers: shuffle([
      { text: "वृत्तीय पथ की स्पर्शरेखा के अनुदिश", correct: false },
      { text: "वृत्तीय पथ के केंद्र से बाहर की ओर", correct: false },
      { text: "वृत्तीय पथ के केंद्र की ओर", correct: true },
      { text: "गति की दिशा के विपरीत", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> अभिकेंद्रीय बल हमेशा वस्तु को वृत्तीय पथ पर बनाए रखने के लिए केंद्र की ओर निर्देशित होता है।"
  },
  {
    question: "प्रश्न 18: 'गुप्त ऊष्मा' (Latent Heat) है:",
    answers: shuffle([
      { text: "a) सदिश", correct: false },
      { text: "b) अदिश", correct: true },
      { text: "a) ,b) दोनों", correct: false },
      { text: "न तो सदिश और न ही अदिश", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त ऊष्मा वह ऊर्जा है जो किसी पदार्थ की अवस्था परिवर्तन के दौरान अवशोषित या मुक्त होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> ऊर्जा होने के कारण यह एक अदिश राशि है।"
  },
  {
    question: "प्रश्न 19: यदि |A x B| = A . B है, तो A और B के बीच का कोण है:",
    answers: shuffle([
      { text: "0°", correct: false },
      { text: "45°", correct: true },
      { text: "90°", correct: false },
      { text: "180°", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> |A||B|sin(θ) = |A||B|cos(θ) => tan(θ) = 1 => θ = 45°।"
  },
  {
    question: "प्रश्न 20: कौन सी राशि निर्देश तंत्र (Frame of Reference) पर निर्भर नहीं करती है?",
    answers: shuffle([
      { text: "विस्थापन", correct: false },
      { text: "वेग", correct: false },
      { text: "दूरी", correct: true },
      { text: "त्वरण", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> दो बिंदुओं के बीच की दूरी एक अदिश राशि है और यह निर्देश तंत्र के चयन से स्वतंत्र होती है, जबकि विस्थापन, वेग और त्वरण सदिश हैं और निर्देश तंत्र पर निर्भर करते हैं।"
  },
  {
    question: "प्रश्न 21: 'तरंग दैर्ध्य' (Wavelength) है:",
    answers: shuffle([
      { text: "सदिश", correct: false },
      { text: "अदिश", correct: true },
      { text: "एक दिशात्मक गुण", correct: false },
      { text: "एक बल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> तरंग दैर्ध्य एक तरंग के दो क्रमागत श्रृंगों या गर्तों के बीच की दूरी है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक लंबाई है और इसकी कोई दिशा नहीं होती, अतः यह अदिश है।"
  },
  {
    question: "प्रश्न 22: कौन सी राशि ऋणात्मक नहीं हो सकती?",
    answers: shuffle([
      { text: "तापमान", correct: false },
      { text: "कार्य", correct: false },
      { text: "चाल", correct: true },
      { text: "ऊर्जा में परिवर्तन", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> चाल दूरी/समय है, और दूरी कभी भी ऋणात्मक नहीं हो सकती, इसलिए चाल भी ऋणात्मक नहीं हो सकती।<br><br><i class='fa-solid fa-angles-right icon'></i> तापमान (सेल्सियस में), कार्य, और ऊर्जा में परिवर्तन ऋणात्मक हो सकते हैं।"
  },
  {
    question: "प्रश्न 23: एक कार पूर्व दिशा में जाती है और फिर बायीं ओर मुड़ जाती है। वेग में परिवर्तन की दिशा क्या है?",
    answers: shuffle([
      { text: "पूर्व", correct: false },
      { text: "उत्तर", correct: false },
      { text: "उत्तर-पश्चिम", correct: true },
      { text: "दक्षिण-पूर्व", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रारंभिक वेग पूर्व में है (V_i)।<br><br><i class='fa-solid fa-angles-right icon'></i> अंतिम वेग उत्तर में है (V_f)।<br><br><i class='fa-solid fa-angles-right icon'></i> वेग में परिवर्तन (ΔV = V_f - V_i) की दिशा उत्तर-पश्चिम की ओर होगी।"
  },
  {
    question: "प्रश्न 24: 'चुंबकीय पारगम्यता' (Magnetic Permeability) है:",
    answers: shuffle([
      { text: "सदिश", correct: false },
      { text: "अदिश", correct: true },
      { text: "प्रदेश", correct: false },
      { text: "विमाहीन", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह किसी माध्यम का वह गुण है जो दर्शाता है कि वह चुंबकीय क्षेत्र रेखाओं को कितनी आसानी से अपने अंदर से गुजरने देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक अदिश स्थिरांक है।"
  },
  {
    question: "प्रश्न 25: दो अशून्य सदिशों का परिणामी शून्य नहीं हो सकता यदि वे:",
    answers: shuffle([
      { text: "समान परिमाण के हों", correct: false },
      { text: "विपरीत दिशा में हों", correct: false },
      { text: "असमान परिमाण के हों", correct: false },
      { text: "एक दूसरे के लंबवत हों", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि दो अशून्य सदिश लंबवत हैं, तो उनका परिणामी कभी भी शून्य नहीं हो सकता।<br><br><i class='fa-solid fa-angles-right icon'></i> शून्य होने के लिए उनका समान परिमाण और विपरीत दिशा में होना आवश्यक है।"
  },
   {
    question: "प्रश्न 26. निम्नलिखित में से कौन सी एक व्युत्पन्न सदिश राशि है?",
    answers: shuffle([
      { text: "द्रव्यमान", correct: false },
      { text: "समय", correct: false },
      { text: "लंबाई", correct: false },
      { text: "त्वरण", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> त्वरण, वेग (एक व्युत्पन्न राशि) और समय (एक मूल राशि) से व्युत्पन्न होता है और यह एक सदिश है।<br><br><i class='fa-solid fa-angles-right icon'></i> द्रव्यमान, समय और लंबाई मूल (अदिश) राशियाँ हैं।"
  },
  {
    question: "प्रश्न 27. 'अणुओं की औसत गतिज ऊर्जा' सीधे तौर पर किसके समानुपाती होती है?",
    answers: shuffle([
      { text: "दाब (अदिश)", correct: false },
      { text: "आयतन (अदिश)", correct: false },
      { text: "परम ताप (अदिश)", correct: true },
      { text: "घनत्व (अदिश)", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी गैस के अणुओं की औसत गतिज ऊर्जा उसके परम तापमान के सीधे समानुपाती होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह संबंध अदिश राशियों के बीच है।"
  },
  {
    question: "प्रश्न 28. एक व्यक्ति अपने घर से बाज़ार तक जाता है और वापस घर आ जाता है। इस पूरी यात्रा में उसका विस्थापन है:",
    answers: shuffle([
      { text: "घर और बाज़ार के बीच की दूरी का दोगुना", correct: false },
      { text: "शून्य", correct: true },
      { text: "तय की गई कुल दूरी के बराबर", correct: false },
      { text: "निर्धारित नहीं किया जा सकता", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि व्यक्ति का प्रारंभिक और अंतिम बिंदु एक ही (घर) है, इसलिए कुल विस्थापन शून्य होगा।"
  },
  {
    question: "प्रश्न 29. 'घर्षण गुणांक' (Coefficient of Friction) है:",
    answers: shuffle([
      { text: "सदिश", correct: false },
      { text: "अदिश", correct: true },
      { text: "बल", correct: false },
      { text: "त्वरण", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह दो सतहों के बीच घर्षण बल और अभिलंब बल का अनुपात है।<br><br><i class='fa-solid fa-angles-right icon'></i> दो बलों का अनुपात होने के कारण यह एक विमाहीन अदिश राशि है।"
  },
  {
    question: "प्रश्न 30. सदिश राशि का एक गुण यह है कि:",
    answers: shuffle([
      { text: "इसे स्थानांतरित नहीं किया जा सकता है।", correct: false },
      { text: "यह दिक्काल (space) में अभिविन्यस्त होती है।", correct: true },
      { text: "यह हमेशा धनात्मक होती है।", correct: false },
      { text: "इसे सामान्य बीजगणित के नियमों से जोड़ा जा सकता है।", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक सदिश की दिशा होती है, जिसका अर्थ है कि यह अंतरिक्ष में एक विशिष्ट अभिविन्यास (orientation) रखता है।"
  },
  {
    question: "प्रश्न 31. 'विद्युतशीलता' (Permittivity) है:",
    answers: shuffle([
      { text: "एक सदिश क्षेत्र", correct: false },
      { text: "एक अदिश स्थिरांक", correct: true },
      { text: "एक बल", correct: false },
      { text: "एक ऊर्जा घनत्व", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युतशीलता किसी माध्यम का वह गुण है जो विद्युत क्षेत्र के निर्माण का विरोध करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक अदिश राशि है।"
  },
  {
    question: "प्रश्न 32. यदि कोई वस्तु एकसमान चाल से गति कर रही है, तो क्या उसमें त्वरण हो सकता है?",
    answers: shuffle([
      { text: "नहीं, कभी नहीं", correct: false },
      { text: "हाँ, यदि वह सीधी रेखा में चल रही हो", correct: false },
      { text: "हाँ, यदि वह अपनी दिशा बदल रही हो", correct: true },
      { text: "हाँ, यदि उसका द्रव्यमान बदल रहा हो", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाँ, त्वरण हो सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> एकसमान वृत्तीय गति में चाल स्थिर रहती है, लेकिन दिशा लगातार बदलने के कारण वेग बदलता है, जिससे अभिकेंद्रीय त्वरण उत्पन्न होता है।"
  },
  {
    question: "प्रश्न 33. 'आवेग' (Impulse) का विमीय सूत्र किसके समान है?",
    answers: shuffle([
      { text: "बल", correct: false },
      { text: "कार्य", correct: false },
      { text: "शक्ति", correct: false },
      { text: "संवेग", correct: true }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवेग (बल × समय) और संवेग (द्रव्यमान × वेग) दोनों सदिश राशियाँ हैं और दोनों का विमीय सूत्र [MLT⁻¹] समान होता है।"
  },
  {
    question: "प्रश्न 34. 'गुरुत्वाकर्षण नियतांक (G)' है:",
    answers: shuffle([
      { text: "एक सदिश", correct: false },
      { text: "एक अदिश", correct: true },
      { text: "एक बल", correct: false },
      { text: "एक त्वरण", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> G एक सार्वभौमिक नियतांक है जो गुरुत्वाकर्षण बल के परिमाण को निर्धारित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका केवल संख्यात्मक मान होता है, कोई दिशा नहीं।"
  },
  {
    question: "प्रश्न 35. एक सदिश का उसके लंबवत घटक के साथ अदिश गुणनफल होता है:",
    answers: shuffle([
      { text: "एक", correct: false },
      { text: "शून्य", correct: true },
      { text: "सदिश का परिमाण", correct: false },
      { text: "घटक का परिमाण", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक सदिश और उसका लंबवत घटक एक दूसरे से 90^{\\circ} के कोण पर होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> cos(90^{\\circ}) = 0 होने के कारण उनका अदिश गुणनफल शून्य होता है।"
  },
  {
    question: "प्रश्न 36. निम्नलिखित में से कौन सी राशि संरक्षित (conserved) हो भी सकती है और नहीं भी?",
    answers: shuffle([
      { text: "ऊर्जा (अदिश)", correct: true },
      { text: "आवेश (अदिश)", correct: false },
      { text: "रैखिक संवेग (सदिश)", correct: false },
      { text: "कोणीय संवेग (सदिश)", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुल ऊर्जा हमेशा संरक्षित रहती है, लेकिन यांत्रिक ऊर्जा (गतिज + स्थितिज) असंरक्षी बलों (जैसे घर्षण) की उपस्थिति में संरक्षित नहीं रह सकती है।<br><br><i class='fa-solid fa-angles-right icon'></i> संवेग और आवेश हमेशा एक विलगित निकाय में संरक्षित रहते हैं।"
  },
  {
    question: "प्रश्न 37. एक नाव नदी में धारा की दिशा में जा रही है। जमीन के सापेक्ष नाव का वेग होगा:",
    answers: shuffle([
      { text: "नाव के वेग और धारा के वेग का अंतर", correct: false },
      { text: "नाव के वेग और धारा के वेग का योग", correct: true },
      { text: "केवल नाव का वेग", correct: false },
      { text: "केवल धारा का वेग", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि दोनों वेग एक ही दिशा में हैं, परिणामी वेग प्राप्त करने के लिए उनके परिमाण जुड़ जाएंगे।"
  },
  {
    question: "प्रश्न 38. सदिशों को निरूपित करने के लिए किसका उपयोग किया जाता है?",
    answers: shuffle([
      { text: "एक सीधी रेखा", correct: false },
      { text: "एक तीर (arrow)", correct: true },
      { text: "एक वक्र", correct: false },
      { text: "एक बिंदु", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक तीर का उपयोग सदिश को दर्शाने के लिए किया जाता है, जहाँ तीर की लंबाई परिमाण को और तीर का सिरा (arrowhead) दिशा को इंगित करता है।"
  },
  {
    question: "प्रश्न 39. 'यंग का प्रत्यास्थता गुणांक' (Young's Modulus) है:",
    answers: shuffle([
      { text: "सदिश", correct: false },
      { text: "अदिश", correct: true },
      { text: "प्रदेश", correct: false },
      { text: "बल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह प्रतिबल और विकृति का अनुपात है और पदार्थ के प्रत्यास्थ गुण को दर्शाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक अदिश राशि है।"
  },
  {
    question: "प्रश्न 40. एक गेंद को सीधे ऊपर की ओर फेंका जाता है। उच्चतम बिंदु पर उसका वेग और त्वरण क्या होता है?",
    answers: shuffle([
      { text: "वेग = 0, त्वरण = 0", correct: false },
      { text: "वेग ≠ 0, त्वरण = g", correct: false },
      { text: "वेग = 0, त्वरण = g (नीचे की ओर)", correct: true },
      { text: "वेग ≠ 0, त्वरण = 0", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> उच्चतम बिंदु पर, गेंद क्षण भर के लिए रुक जाती है (वेग=0), लेकिन गुरुत्वीय त्वरण (g) अभी भी उस पर नीचे की ओर कार्य कर रहा होता है।"
  },
  {
    question: "प्रश्न 41. कौन सी राशि केवल परिमाण में परिवर्तन होने पर बदल सकती है?",
    answers: shuffle([
      { text: "वेग", correct: false },
      { text: "त्वरण", correct: false },
      { text: "चाल", correct: true },
      { text: "बल", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> चाल एक अदिश राशि है, इसलिए यह केवल परिमाण बदलने पर ही बदलती है।<br><br><i class='fa-solid fa-angles-right icon'></i> वेग, त्वरण और बल सदिश हैं, जो परिमाण, दिशा या दोनों के बदलने पर बदल सकते हैं।"
  },
  {
    question: "प्रश्न 42. 'ऊष्मीय चालकता' (Thermal Conductivity) है:",
    answers: shuffle([
      { text: "सदिश", correct: false },
      { text: "अदिश", correct: true },
      { text: "ऊर्जा प्रवाह", correct: false },
      { text: "तापमान", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह किसी पदार्थ की ऊष्मा का संचालन करने की क्षमता का एक माप है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक अदिश राशि है।"
  },
  {
    question: "प्रश्न 43. सदिश कलन (Vector Calculus) में, 'ग्रेडिएंट' (Gradient) का परिणाम होता है:",
    answers: shuffle([
      { text: "एक अदिश क्षेत्र", correct: false },
      { text: "एक सदिश क्षेत्र", correct: true },
      { text: "एक संख्या", correct: false },
      { text: "शून्य", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक अदिश फलन का ग्रेडिएंट एक सदिश क्षेत्र उत्पन्न करता है जो अदिश क्षेत्र में अधिकतम वृद्धि की दर और दिशा को इंगित करता है।"
  },
  {
    question: "प्रश्न 44. दो सदिशों का सदिश गुणनफल शून्य है। इसका मतलब है कि वे:",
    answers: shuffle([
      { text: "लंबवत हैं", correct: false },
      { text: "समांतर या प्रति-समांतर हैं", correct: true },
      { text: "बराबर हैं", correct: false },
      { text: "इनमें से कोई नहीं", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> सदिश गुणनफल शून्य होता है जब सदिशों के बीच का कोण 0^{\\circ} (समांतर) या 180^{\\circ} (प्रति-समांतर) होता है।"
  },
  {
    question: "प्रश्न 45. 'सापेक्ष घनत्व' (Relative Density) है:",
    answers: shuffle([
      { text: "सदिश", correct: false },
      { text: "अदिश", correct: true },
      { text: "घनत्व", correct: false },
      { text: "भार", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह किसी पदार्थ के घनत्व और पानी के घनत्व का अनुपात है।<br><br><i class='fa-solid fa-angles-right icon'></i> अनुपात होने के कारण, यह एक विमाहीन अदिश राशि है।"
  },
  {
    question: "प्रश्न 46. किसी कण का विस्थापन समय के वर्ग के समानुपाती है। कण की गति है:",
    answers: shuffle([
      { text: "एकसमान वेग से", correct: false },
      { text: "एकसमान त्वरण से", correct: true },
      { text: "एकसमान चाल से", correct: false },
      { text: "स्थिर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> गति का समीकरण s = ut + 1/2at^{2} दर्शाता है कि यदि विस्थापन (s) समय (t) के वर्ग के समानुपाती है, तो वस्तु एकसमान त्वरण (a) से गति कर रही है।"
  },
  {
    question: "प्रश्न 47. 'धारिता' (Capacitance) किस प्रकार की राशि है?",
    answers: shuffle([
      { text: "सदिश", correct: false },
      { text: "अदिश", correct: true },
      { text: "आवेश", correct: false },
      { text: "विभव", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> धारिता किसी चालक की विद्युत आवेश संग्रहीत करने की क्षमता का माप है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक अदिश राशि है।"
  },
  {
    question: "प्रश्न 48. यदि एक सदिश के घटक ऋणात्मक हैं, तो इसका परिमाण होगा:",
    answers: shuffle([
      { text: "ऋणात्मक", correct: false },
      { text: "धनात्मक", correct: true },
      { text: "शून्य", correct: false },
      { text: "अपरिभाषित", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> परिमाण की गणना घटकों के वर्गों के योग के वर्गमूल के रूप में की जाती है (पाइथागोरस प्रमेय)।<br><br><i class='fa-solid fa-angles-right icon'></i> वर्गों का योग हमेशा धनात्मक होता है, इसलिए परिमाण भी धनात्मक होगा।"
  },
  {
    question: "प्रश्न 49. अदिश राशियाँ किस नियम के अनुसार जोड़ी जाती हैं?",
    answers: shuffle([
      { text: "सदिश योग के त्रिभुज नियम", correct: false },
      { text: "समांतर चतुर्भुज नियम", correct: false },
      { text: "सामान्य बीजगणित के नियम", correct: true },
      { text: "इनमें से कोई नहीं", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> अदिश राशियों, जैसे द्रव्यमान या समय, को साधारण अंकगणित का उपयोग करके सीधे जोड़ा या घटाया जा सकता है (जैसे 2 किलो + 5 किलो = 7 किलो)।"
  },
  {
    question: "प्रश्न 50. एक वृत्ताकार पथ पर आधी परिक्रमा पूरी करने पर, विस्थापन का परिमाण कितना होता है?",
    answers: shuffle([
      { text: "शून्य", correct: false },
      { text: "\\pir", correct: false },
      { text: "2r (व्यास)", correct: true },
      { text: "2\\pir", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> आधी परिक्रमा के बाद, कण प्रारंभिक बिंदु के ठीक विपरीत बिंदु पर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इन दो बिंदुओं के बीच की सबसे छोटी सीधी दूरी वृत्त के व्यास (2r) के बराबर होती है।"
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