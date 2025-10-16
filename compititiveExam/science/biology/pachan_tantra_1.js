const questions = [
    {
        topHeading: "पाचन तंत्र पर आधारित 50 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1: लार में कौन सा एंजाइम पाया जाता है जो स्टार्च के पाचन में मदद करता है?",
        answers: shuffle([
            { text: "पेप्सिन", correct: false },
            { text: "ट्रिप्सिन", correct: false },
            { text: "टायलिन (एमाइलेज)", correct: true },
            { text: "लाइपेज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लार में टायलिन नामक एंजाइम होता है, जिसे लार एमाइलेज भी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह एंजाइम भोजन में मौजूद स्टार्च को माल्टोज शर्करा में तोड़ता है।"
    },
    {
        question: "प्रश्न 2: मनुष्य के वयस्क दंत सूत्र (Dental Formula) क्या है?",
        answers: shuffle([
            { text: "2123/2123", correct: true },
            { text: "2102/2102", correct: false },
            { text: "2122/2122", correct: false },
            { text: "2023/2023", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक वयस्क मनुष्य के प्रत्येक जबड़े के आधे हिस्से में 2 कृंतक (Incisors), 1 रदनक (Canine), 2 अग्रचर्वणक (Premolars) और 3 चर्वणक (Molars) दांत होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  इस प्रकार कुल 32 दांत होते हैं।"
    },
    {
        question: "प्रश्न 3: आमाशय (Stomach) में प्रोटीन का पाचन कौन सा एंजाइम शुरू करता है?",
        answers: shuffle([
            { text: "ट्रिप्सिन", correct: false },
            { text: "पेप्सिन", correct: true },
            { text: "एमाइलेज", correct: false },
            { text: "लाइपेज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आमाशय में जठर ग्रंथियों से पेप्सिन एंजाइम निकलता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो प्रोटीन को छोटे पेप्टाइड्स में तोड़कर पाचन क्रिया शुरू करता है।"
    },
    {
        question: "प्रश्न 4: यकृत (Liver) द्वारा स्रावित पित्त रस (Bile Juice) का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "प्रोटीन का पाचन", correct: false },
            { text: "वसा का पायसीकरण (Emulsification)", correct: true },
            { text: "कार्बोहाइड्रेट का पाचन", correct: false },
            { text: "रक्त का शुद्धिकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पित्त रस में कोई एंजाइम नहीं होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  लेकिन यह वसा की बड़ी बूंदों को छोटी-छोटी बूंदों में तोड़ता है, जिसे वसा का पायसीकरण कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  इससे लाइपेज एंजाइम को वसा पचाने में आसानी होती है।"
    },
    {
        question: "प्रश्न 5: मानव शरीर की सबसे बड़ी ग्रंथि कौन सी है?",
        answers: shuffle([
            { text: "अग्न्याशय", correct: false },
            { text: "यकृत", correct: true },
            { text: "पिट्यूटरी", correct: false },
            { text: "थायरॉयड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यकृत मानव शरीर की सबसे बड़ी ग्रंथि है, जिसका वजन लगभग 1.5 किलोग्राम होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह पाचन, चयापचय और विषहरण जैसे कई महत्वपूर्ण कार्य करता है।"
    },
    {
        question: "प्रश्न 6: भोजन का सर्वाधिक पाचन और अवशोषण कहाँ होता है?",
        answers: shuffle([
            { text: "आमाशय", correct: false },
            { text: "बड़ी आंत", correct: false },
            { text: "छोटी आंत", correct: true },
            { text: "ग्रासनली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> छोटी आंत में भोजन का पूर्ण पाचन होता है और पचे हुए पोषक तत्वों का अवशोषण भी मुख्य रूप से यहीं होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसकी आंतरिक सतह पर मौजूद विलाई (Villi) अवशोषण क्षेत्र को बढ़ाते हैं।"
    },
    {
        question: "प्रश्न 7: अग्न्याशय (Pancreas) से कौन सा रस स्रावित होता है?",
        answers: shuffle([
            { text: "पित्त रस", correct: false },
            { text: "जठर रस", correct: false },
            { text: "अग्नाशयी रस", correct: true },
            { text: "आंत्र रस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अग्न्याशय एक मिश्रित ग्रंथि है जो अग्नाशयी रस का स्राव करती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसमें प्रोटीन, कार्बोहाइड्रेट और वसा को पचाने वाले शक्तिशाली एंजाइम होते हैं।"
    },
    {
        question: "प्रश्न 8: इंसुलिन (Insulin) हार्मोन का स्राव किस ग्रंथि से होता है?",
        answers: shuffle([
            { text: "यकृत", correct: false },
            { text: "अग्न्याशय", correct: true },
            { text: "पिट्यूटरी", correct: false },
            { text: "अधिवृक्क", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंसुलिन का स्राव अग्न्याशय की लैंगरहैंस की द्वीपिकाओं (Islets of Langerhans) की बीटा-कोशिकाओं द्वारा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह रक्त में शर्करा की मात्रा को नियंत्रित करता है।"
    },
    {
        question: "प्रश्न 9: आमाशय की दीवार को हाइड्रोक्लोरिक अम्ल (HCl) के प्रभाव से कौन बचाता है?",
        answers: shuffle([
            { text: "पेप्सिन", correct: false },
            { text: "गैस्ट्रिन", correct: false },
            { text: "म्यूकस (श्लेष्मा)", correct: true },
            { text: "बाइकार्बोनेट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आमाशय की आंतरिक दीवार पर म्यूकस (श्लेष्मा) की एक मोटी परत होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो इसे शक्तिशाली हाइड्रोक्लोरिक अम्ल से होने वाले नुकसान से बचाती है।"
    },
    {
        question: "प्रश्न 10: बड़ी आंत (Large Intestine) का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "भोजन का पाचन", correct: false },
            { text: "पोषक तत्वों का अवशोषण", correct: false },
            { text: "जल का अवशोषण", correct: true },
            { text: "एंजाइम का स्राव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बड़ी आंत में कोई पाचन क्रिया नहीं होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसका मुख्य कार्य अपचित भोजन से जल और कुछ लवणों का अवशोषण करना तथा मल का निर्माण करना है।"
    },
    {
        question: "प्रश्न 11: प्रोटीन के पाचन के बाद वह किसमें परिवर्तित हो जाता है?",
        answers: shuffle([
            { text: "ग्लूकोज", correct: false },
            { text: "फैटी एसिड", correct: false },
            { text: "अमीनो एसिड", correct: true },
            { text: "ग्लिसरॉल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोटीन पाचन की एक जटिल प्रक्रिया के बाद अपने सबसे सरल रूप, अमीनो एसिड में टूट जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसे शरीर द्वारा अवशोषित कर लिया जाता है।"
    },
    {
        question: "प्रश्न 12: वसा (Fat) का पूर्ण पाचन कहाँ होता है?",
        answers: shuffle([
            { text: "मुख गुहा", correct: false },
            { text: "आमाशय", correct: false },
            { text: "छोटी आंत", correct: true },
            { text: "बड़ी आंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वसा का पाचन मुख्य रूप से छोटी आंत में होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जहाँ पित्त रस द्वारा इसका पायसीकरण होता है और फिर अग्नाशयी लाइपेज द्वारा इसे फैटी एसिड और ग्लिसरॉल में तोड़ा जाता है।"
    },
    {
        question: "प्रश्न 13: पित्त रस (Bile Juice) का भंडारण कहाँ होता है?",
        answers: shuffle([
            { text: "यकृत", correct: false },
            { text: "अग्न्याशय", correct: false },
            { text: "पित्ताशय (Gallbladder)", correct: true },
            { text: "प्लीहा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पित्त रस का निर्माण यकृत में होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  लेकिन इसका भंडारण और सांद्रण यकृत के नीचे स्थित एक छोटी थैली, पित्ताशय में होता है।"
    },
    {
        question: "प्रश्न 14: कौन सा एंजाइम दूध के प्रोटीन (केसीन) को पचाता है?",
        answers: shuffle([
            { text: "पेप्सिन", correct: false },
            { text: "रेनिन", correct: true },
            { text: "ट्रिप्सिन", correct: false },
            { text: "एमाइलेज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेनिन एंजाइम, जो शिशुओं के जठर रस में पाया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह दूध के प्रोटीन केसीन को कैल्शियम की उपस्थिति में पैराकेसिनेट में बदलता है, जिससे दूध फट जाता है और उसका पाचन आसान हो जाता है।"
    },
    {
        question: "प्रश्न 15: भोजन नली (Esophagus) का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "भोजन को पचाना", correct: false },
            { text: "भोजन को मुख से आमाशय तक पहुंचाना", correct: true },
            { text: "हवा को फेफड़ों तक पहुंचाना", correct: false },
            { text: "पानी का अवशोषण करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भोजन नली एक मांसपेशीय नली है जो क्रमाकुंचन (Peristalsis) गति द्वारा भोजन को मुख गुहा से आमाशय तक ले जाती है।"
    },
    {
        question: "प्रश्न 16: छोटी आंत का सबसे पहला और सबसे छोटा भाग कौन सा है?",
        answers: shuffle([
            { text: "इलियम (Ileum)", correct: false },
            { text: "जेजुनम (Jejunum)", correct: false },
            { text: "सीकम (Cecum)", correct: false },
            { text: "ग्रहणी (Duodenum)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रहणी (Duodenum) छोटी आंत का 'C' आकार का पहला भाग है, जो आमाशय से जुड़ा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यहीं पर पित्त और अग्नाशयी रस भोजन में मिलते हैं।"
    },
    {
        question: "प्रश्न 17: जठर रस (Gastric Juice) की प्रकृति कैसी होती है?",
        answers: shuffle([
            { text: "क्षारीय", correct: false },
            { text: "अम्लीय", correct: true },
            { text: "उदासीन", correct: false },
            { text: "परिवर्तनीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जठर रस में हाइड्रोक्लोरिक अम्ल (HCl) की उपस्थिति के कारण यह अत्यधिक अम्लीय (pH 1.5-3.5) होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो भोजन में मौजूद जीवाणुओं को नष्ट करता है और पेप्सिन एंजाइम को सक्रिय करता है।"
    },
    {
        question: "प्रश्न 18: अपेंडिक्स (Appendix) शरीर के किस अंग का हिस्सा है?",
        answers: shuffle([
            { text: "छोटी आंत", correct: false },
            { text: "बड़ी आंत", correct: true },
            { text: "आमाशय", correct: false },
            { text: "यकृत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वर्मीफॉर्म अपेंडिक्स एक छोटा, उंगली जैसा अंग है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो बड़ी आंत के पहले भाग सीकम (Cecum) से जुड़ा होता है। यह एक अवशेषी अंग माना जाता है।"
    },
    {
        question: "प्रश्न 19: कार्बोहाइड्रेट का पाचन कहाँ से शुरू होता है?",
        answers: shuffle([
            { text: "आमाशय", correct: false },
            { text: "छोटी आंत", correct: false },
            { text: "मुख गुहा", correct: true },
            { text: "ग्रासनली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्बोहाइड्रेट (स्टार्च) का पाचन मुख गुहा में ही शुरू हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जहाँ लार में मौजूद टायलिन (एमाइलेज) एंजाइम इसे शर्करा में तोड़ना शुरू कर देता है।"
    },
    {
        question: "प्रश्न 20: छोटी आंत में अवशोषण के लिए सतही क्षेत्रफल बढ़ाने वाली संरचनाएं क्या हैं?",
        answers: shuffle([
            { text: "सीलिया", correct: false },
            { text: "फ्लैजेला", correct: false },
            { text: "विलाई (रसांकुर)", correct: true },
            { text: "पेशीस्तर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> छोटी आंत की आंतरिक सतह पर लाखों उंगली जैसी संरचनाएं होती हैं जिन्हें विलाई या रसांकुर कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  ये पचे हुए भोजन के अवशोषण के लिए सतह क्षेत्र को कई गुना बढ़ा देती हैं।"
    },
    {
        question: "प्रश्न 21: कौन सा विटामिन बड़ी आंत में बैक्टीरिया द्वारा संश्लेषित होता है?",
        answers: shuffle([
            { text: "विटामिन A", correct: false },
            { text: "विटामिन C", correct: false },
            { text: "विटामिन D", correct: false },
            { text: "विटामिन K", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बड़ी आंत में मौजूद सहजीवी बैक्टीरिया विटामिन K और कुछ विटामिन B कॉम्प्लेक्स का संश्लेषण करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिन्हें शरीर द्वारा अवशोषित कर लिया जाता है।"
    },
    {
        question: "प्रश्न 22: पेरिस्टालसिस (क्रमाकुंचन) क्या है?",
        answers: shuffle([
            { text: "एंजाइम द्वारा पाचन", correct: false },
            { text: "पोषक तत्वों का अवशोषण", correct: false },
            { text: "आहार नली की मांसपेशियों का लयबद्ध संकुचन", correct: true },
            { text: "पित्त का स्राव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेरिस्टालसिस एक तरंग जैसी गति है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो आहार नली की दीवारों की मांसपेशियों के संकुचन और शिथिलन से उत्पन्न होती है, जिससे भोजन आगे बढ़ता है।"
    },
    {
        question: "प्रश्न 23: गैस्ट्रिन (Gastrin) हार्मोन का क्या कार्य है?",
        answers: shuffle([
            { text: "पित्त रस के स्राव को उत्तेजित करना", correct: false },
            { text: "जठर ग्रंथियों को हाइड्रोक्लोरिक अम्ल और पेप्सिनोजेन स्रावित करने के लिए उत्तेजित करना", correct: true },
            { text: "रक्त शर्करा को कम करना", correct: false },
            { text: "अग्नाशयी रस के स्राव को रोकना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गैस्ट्रिन एक स्थानीय हार्मोन है जो आमाशय की दीवार द्वारा स्रावित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और यह जठर ग्रंथियों को जठर रस का उत्पादन करने के लिए प्रेरित करता है।"
    },
    {
        question: "प्रश्न 24: वसा में घुलनशील विटामिन कौन से हैं?",
        answers: shuffle([
            { text: "A, B, C, D", correct: false },
            { text: "A, D, E, K", correct: true },
            { text: "B, C", correct: false },
            { text: "A, C, E, K", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विटामिन A, D, E, और K वसा में घुलनशील होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और इनके अवशोषण के लिए वसा की आवश्यकता होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  विटामिन B और C जल में घुलनशील होते हैं।"
    },
    {
        question: "प्रश्न 25: ट्रिप्सिन (Trypsin) एंजाइम का उत्पादन कहाँ होता है?",
        answers: shuffle([
            { text: "आमाशय", correct: false },
            { text: "यकृत", correct: false },
            { text: "लार ग्रंथि", correct: false },
            { text: "अग्न्याशय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ट्रिप्सिन एक प्रमुख प्रोटीन-पाचक एंजाइम है जो अग्न्याशय द्वारा निष्क्रिय रूप (ट्रिप्सिनोजेन) में स्रावित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और छोटी आंत में सक्रिय होता है।"
    },
    {
        question: "प्रश्न 26: पीलिया (Jaundice) रोग में कौन सा अंग प्रभावित होता है?",
        answers: shuffle([
            { text: "वृक्क (Kidney)", correct: false },
            { text: "फेफड़े (Lungs)", correct: false },
            { text: "यकृत (Liver)", correct: true },
            { text: "हृदय (Heart)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीलिया यकृत की खराबी के कारण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें रक्त में बिलीरुबिन नामक पीले वर्णक की मात्रा बढ़ जाती है, जिससे त्वचा और आंखें पीली हो जाती हैं।"
    },
    {
        question: "प्रश्न 27: आंत्र रस (Succus Entericus) को और क्या कहा जाता है?",
        answers: shuffle([
            { text: "जठर रस", correct: false },
            { text: "पित्त रस", correct: false },
            { text: "आंतों का रस (Intestinal juice)", correct: true },
            { text: "लार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आंत्र रस या सक्कस एंटरिकस छोटी आंत की दीवारों द्वारा स्रावित होने वाले एंजाइमों का मिश्रण है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो पाचन के अंतिम चरण को पूरा करता है।"
    },
    {
        question: "प्रश्न 28: ग्लाइकोजन (Glycogen) के रूप में अतिरिक्त ग्लूकोज कहाँ संग्रहीत होता है?",
        answers: shuffle([
            { text: "आमाशय और आंत में", correct: false },
            { text: "यकृत और मांसपेशियों में", correct: true },
            { text: "अग्न्याशय और पित्ताशय में", correct: false },
            { text: "त्वचा के नीचे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शरीर अतिरिक्त ग्लूकोज को ग्लाइकोजन में परिवर्तित कर देता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और इसे भविष्य में ऊर्जा की आवश्यकता के लिए यकृत और मांसपेशियों में संग्रहीत करता है।"
    },
    {
        question: "प्रश्न 29: भोजन निगलते समय श्वसन नली को कौन बंद कर देता है?",
        answers: shuffle([
            { text: "टॉन्सिल", correct: false },
            { text: "एपिग्लॉटिस", correct: true },
            { text: "जीभ", correct: false },
            { text: "यूवुला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एपिग्लॉटिस एक पत्ती जैसी उपास्थि संरचना है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो भोजन निगलते समय श्वासनली (Trachea) के द्वार को बंद कर देती है ताकि भोजन फेफड़ों में न जाए।"
    },
    {
        question: "प्रश्न 30: पेप्टिक अल्सर (Peptic Ulcer) का मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "वसायुक्त भोजन", correct: false },
            { text: "मीठा भोजन", correct: false },
            { text: "हेलिकोबैक्टर पाइलोरी (Helicobacter pylori) बैक्टीरिया", correct: true },
            { text: "व्यायाम की कमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिकांश पेप्टिक अल्सर (आमाशय या ग्रहणी में घाव) हेलिकोबैक्टर पाइलोरी नामक बैक्टीरिया के संक्रमण और नॉन-स्टेरॉयडल एंटी-इंफ्लेमेटरी दवाओं (NSAIDs) के लंबे समय तक उपयोग के कारण होते हैं।"
    },
    {
        question: "प्रश्न 31: मल (Feces) का पीला-भूरा रंग किस वर्णक के कारण होता है?",
        answers: shuffle([
            { text: "हीमोग्लोबिन", correct: false },
            { text: "मेलेनिन", correct: false },
            { text: "स्टेरकोबिलिन", correct: true },
            { text: "बिलीरुबिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीमोग्लोबिन के टूटने से बने बिलीरुबिन से स्टेरकोबिलिन और यूरोबिलिन बनते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  स्टेरकोबिलिन के कारण मल का विशिष्ट रंग होता है।"
    },
    {
        question: "प्रश्न 32: सिक्रेटिन (Secretin) हार्मोन का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "आमाशय को अम्ल स्रावित करने के लिए उत्तेजित करना", correct: false },
            { text: "अग्न्याशय को बाइकार्बोनेट युक्त रस स्रावित करने के लिए उत्तेजित करना", correct: true },
            { text: "भूख को बढ़ाना", correct: false },
            { text: "पित्ताशय को संकुचित करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब आमाशय से अम्लीय काइम छोटी आंत में प्रवेश करता है, तो सिक्रेटिन हार्मोन स्रावित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो अग्न्याशय को बाइकार्बोनेट से भरपूर रस का उत्पादन करने के लिए प्रेरित करता है ताकि अम्ल को उदासीन किया जा सके।"
    },
    {
        question: "प्रश्न 33: ब्रूनर की ग्रंथियाँ (Brunner's glands) कहाँ पाई जाती हैं?",
        answers: shuffle([
            { text: "आमाशय", correct: false },
            { text: "ग्रहणी (Duodenum) की सबम्यूकोसा में", correct: true },
            { text: "इलियम", correct: false },
            { text: "यकृत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्रूनर की ग्रंथियाँ छोटी आंत के पहले भाग, ग्रहणी (Duodenum) की सबम्यूकोसा परत में पाई जाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और ये क्षारीय श्लेष्मा का स्राव करती हैं जो अम्लीय काइम से ग्रहणी की रक्षा करती है।"
    },
    {
        question: "प्रश्न 34: जठर ग्रंथियों की कौन सी कोशिकाएं हाइड्रोक्लोरिक अम्ल (HCl) का स्राव करती हैं?",
        answers: shuffle([
            { text: "मुख्य कोशिकाएं (Chief cells)", correct: false },
            { text: "म्यूकस कोशिकाएं (Mucous cells)", correct: false },
            { text: "पार्श्विका कोशिकाएं (Parietal cells) या ऑक्सिनटिक कोशिकाएं", correct: true },
            { text: "जी कोशिकाएं (G cells)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पार्श्विका कोशिकाएं (Parietal cells) या ऑक्सिनटिक कोशिकाएं आमाशय की ग्रंथियों में स्थित विशेष कोशिकाएं हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो हाइड्रोक्लोरिक अम्ल और आंतरिक कारक (Intrinsic factor) का स्राव करती हैं।"
    },
    {
        question: "प्रश्न 35: काइमोट्रिप्सिन (Chymotrypsin) किसका पाचन करता है?",
        answers: shuffle([
            { text: "कार्बोहाइड्रेट", correct: false },
            { text: "वसा", correct: false },
            { text: "प्रोटीन", correct: true },
            { text: "न्यूक्लिक एसिड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काइमोट्रिप्सिन, ट्रिप्सिन की तरह ही एक प्रोटीन-पाचक एंजाइम है जो अग्न्याशय द्वारा स्रावित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और छोटी आंत में प्रोटीन को पेप्टाइड्स में तोड़ता है।"
    },
    {
        question: "प्रश्न 36: लैक्टोज असहिष्णुता (Lactose intolerance) किस एंजाइम की कमी से होती है?",
        answers: shuffle([
            { text: "माल्टेज", correct: false },
            { text: "सुक्रेज", correct: false },
            { text: "लैक्टेज", correct: true },
            { text: "लाइपेज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैक्टेज वह एंजाइम है जो दूध में पाई जाने वाली शर्करा (लैक्टोज) को ग्लूकोज और गैलेक्टोज में तोड़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसकी कमी होने पर लैक्टोज का पाचन नहीं हो पाता है, जिससे पेट में गैस, दर्द और दस्त जैसी समस्याएं होती हैं।"
    },
    {
        question: "प्रश्न 37: उल्टी (Vomiting) का नियंत्रण मस्तिष्क का कौन सा भाग करता है?",
        answers: shuffle([
            { text: "सेरिबैलम", correct: false },
            { text: "सेरिब्रम", correct: false },
            { text: "मेडुला ऑब्लांगेटा", correct: true },
            { text: "हाइपोथैलेमस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेडुला ऑब्लांगेटा में स्थित वमन केंद्र (Vomiting center) उल्टी की प्रक्रिया को नियंत्रित करता है।"
    },
    {
        question: "प्रश्न 38: भोजन के बोलस (Bolus) का निर्माण कहाँ होता है?",
        answers: shuffle([
            { text: "आमाशय में", correct: false },
            { text: "छोटी आंत में", correct: false },
            { text: "मुख गुहा में", correct: true },
            { text: "ग्रासनली में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुख गुहा में भोजन को चबाकर लार के साथ मिलाया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे यह एक चिकनी, गोल संरचना में बदल जाता है जिसे बोलस कहते हैं, जो निगलने में आसान होता है।"
    },
    {
        question: "प्रश्न 39: आमाशय में भोजन के अर्ध-पचित, लुगदी जैसे रूप को क्या कहा जाता है?",
        answers: shuffle([
            { text: "बोलस", correct: false },
            { text: "काइम", correct: true },
            { text: "काइल", correct: false },
            { text: "मल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आमाशय में भोजन जठर रस के साथ मिलकर एक अम्लीय, अर्ध-तरल लेई बन जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसे काइम कहते हैं। यह काइम धीरे-धीरे छोटी आंत में जाता है।"
    },
    {
        question: "प्रश्न 40: वसा के अवशोषण के बाद उसे लसीका तंत्र में किस रूप में ले जाया जाता है?",
        answers: shuffle([
            { text: "अमीनो एसिड", correct: false },
            { text: "ग्लूकोज", correct: false },
            { text: "काइलोमाइक्रोन", correct: true },
            { text: "ग्लाइकोजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> छोटी आंत में वसा के पाचन से बने फैटी एसिड और ग्लिसरॉल अवशोषित होकर फिर से ट्राइग्लिसराइड्स में बदल जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और प्रोटीन के साथ मिलकर काइलोमाइक्रोन नामक कण बनाते हैं, जो लसीका वाहिकाओं (लैक्टियल्स) में प्रवेश करते हैं।"
    },
    {
        question: "प्रश्न 41: कौन सा हार्मोन पित्ताशय के संकुचन को उत्तेजित करता है?",
        answers: shuffle([
            { text: "गैस्ट्रिन", correct: false },
            { text: "सिक्रेटिन", correct: false },
            { text: "कोलेसिस्टोकाइनिन (CCK)", correct: true },
            { text: "इंसुलिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब वसायुक्त भोजन छोटी आंत में पहुंचता है, तो CCK हार्मोन स्रावित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो पित्ताशय को संकुचित होने और पित्त रस को ग्रहणी में छोड़ने का संकेत देता है।"
    },
    {
        question: "प्रश्न 42: मानव शरीर में पाई जाने वाली सबसे कठोर सामग्री कौन सी है?",
        answers: shuffle([
            { text: "हड्डी", correct: false },
            { text: "उपास्थि", correct: false },
            { text: "डेंटिन", correct: false },
            { text: "इनेमल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दांतों का इनेमल (दंतवल्क) मानव शरीर का सबसे कठोर पदार्थ है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो मुख्य रूप से कैल्शियम फॉस्फेट से बना होता है।"
    },
    {
        question: "प्रश्न 43: हेपेटाइटिस (Hepatitis) रोग मुख्य रूप से किस अंग को प्रभावित करता है?",
        answers: shuffle([
            { text: "अग्न्याशय", correct: false },
            { text: "यकृत", correct: true },
            { text: "आमाशय", correct: false },
            { text: "वृक्क", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेपेटाइटिस का अर्थ है यकृत में सूजन।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह आमतौर पर वायरल संक्रमण के कारण होता है, लेकिन इसके अन्य कारण भी हो सकते हैं।"
    },
    {
        question: "प्रश्न 44: 'क्रिप्ट्स ऑफ लिबरकुन' (Crypts of Lieberkuhn) कहाँ पाए जाते हैं?",
        answers: shuffle([
            { text: "आमाशय की दीवार में", correct: false },
            { text: "यकृत की कोशिकाओं के बीच", correct: false },
            { text: "आंतों के विलाई के बीच", correct: true },
            { text: "अग्न्याशय में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये सरल, नलिकाकार ग्रंथियाँ होती हैं जो छोटी और बड़ी आंतों के विलाई (Villi) के आधार पर स्थित होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और आंत्र रस का स्राव करती हैं।"
    },
    {
        question: "प्रश्न 45: कौन सा पोषक तत्व ऊर्जा प्रदान नहीं करता है, लेकिन शरीर के लिए आवश्यक है?",
        answers: shuffle([
            { text: "प्रोटीन", correct: false },
            { text: "कार्बोहाइड्रेट", correct: false },
            { text: "विटामिन", correct: true },
            { text: "वसा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विटामिन कार्बनिक यौगिक हैं जो शरीर की चयापचय क्रियाओं के लिए आवश्यक हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  लेकिन ये कैलोरी या ऊर्जा प्रदान नहीं करते हैं।"
    },
    {
        question: "प्रश्न 46: जठर ग्रंथियों द्वारा स्रावित 'आंतरिक कारक' (Intrinsic Factor) किसके अवशोषण के लिए आवश्यक है?",
        answers: shuffle([
            { text: "विटामिन C", correct: false },
            { text: "विटामिन B12", correct: true },
            { text: "कैल्शियम", correct: false },
            { text: "आयरन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आंतरिक कारक एक ग्लाइकोप्रोटीन है जो आमाशय की पार्श्विका कोशिकाओं द्वारा स्रावित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह छोटी आंत में विटामिन B12 के अवशोषण के लिए अनिवार्य है।"
    },
    {
        question: "प्रश्न 47: उस वाल्व का क्या नाम है जो छोटी आंत और बड़ी आंत को अलग करता है?",
        answers: shuffle([
            { text: "पाइलोरिक स्फिंक्टर", correct: false },
            { text: "इलियोसीकल वाल्व", correct: true },
            { text: "कार्डियक स्फिंक्टर", correct: false },
            { text: "ओड्डी का स्फिंक्टर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इलियोसीकल वाल्व छोटी आंत के अंतिम भाग (इलियम) और बड़ी आंत के पहले भाग (सीकम) के बीच स्थित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह बड़ी आंत की सामग्री को वापस छोटी आंत में जाने से रोकता है।"
    },
    {
        question: "प्रश्न 48: माल्टेज, लैक्टेज और सुक्रेज एंजाइम किसके द्वारा स्रावित होते हैं?",
        answers: shuffle([
            { text: "लार ग्रंथियाँ", correct: false },
            { text: "अग्न्याशय", correct: false },
            { text: "आमाशय", correct: false },
            { text: "आंत्र उपकला (Intestinal epithelium)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये डाइसैकेराइड को पचाने वाले एंजाइम हैं जो छोटी आंत की उपकला कोशिकाओं की सतह (ब्रश बॉर्डर) पर पाए जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और पाचन के अंतिम चरण को पूरा करते हैं।"
    },
    {
        question: "प्रश्न 49: कब्ज (Constipation) की स्थिति में क्या होता है?",
        answers: shuffle([
            { text: "आंतों की गति बहुत तेज हो जाती है", correct: false },
            { text: "मल त्याग अनियमित या कठिन हो जाता है", correct: true },
            { text: "शरीर में पानी की कमी हो जाती है", correct: false },
            { text: "आमाशय में अम्ल बढ़ जाता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कब्ज में, बड़ी आंत में मल बहुत धीमी गति से आगे बढ़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे अधिक पानी अवशोषित हो जाता है और मल कठोर और शुष्क हो जाता है, जिससे उसे त्यागना मुश्किल हो जाता है।"
    },
    {
        question: "प्रश्न 50: अग्न्याशय द्वारा स्रावित कौन सा एंजाइम वसा को पचाता है?",
        answers: shuffle([
            { text: "एमाइलेज", correct: false },
            { text: "ट्रिप्सिन", correct: false },
            { text: "लाइपेज", correct: true },
            { text: "न्यूक्लिएज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अग्नाशयी लाइपेज वसा (ट्राइग्लिसराइड्स) को फैटी एसिड और मोनोग्लिसराइड्स में विघटित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  ताकि उन्हें अवशोषित किया जा सके।"
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