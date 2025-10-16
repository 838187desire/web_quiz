const questions = [
    {
        topHeading: "लसीका तंत्र पर आधारित 55 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. लसीका तंत्र का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "ऑक्सीजन का परिवहन", correct: false },
            { text: "प्रतिरक्षा और द्रव संतुलन", correct: true },
            { text: "रक्त का थक्का बनाना", correct: false },
            { text: "पाचन में सहायता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लसीका तंत्र शरीर के प्रतिरक्षा तंत्र का एक महत्वपूर्ण हिस्सा है और ऊतकों से अतिरिक्त द्रव को वापस रक्तप्रवाह में लाकर द्रव संतुलन बनाए रखता है।"
    },
    {
        question: "प्रश्न 2. लसीका (Lymph) का रंग कैसा होता है?",
        answers: shuffle([
            { text: "लाल", correct: false },
            { text: "नीला", correct: false },
            { text: "रंगहीन या हल्का पीला", correct: true },
            { text: "गहरा भूरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लसीका एक तरल पदार्थ है जो रक्त प्लाज्मा से बनता है, लेकिन इसमें लाल रक्त कोशिकाएं नहीं होती हैं, जिसके कारण यह रंगहीन या हल्का पीला दिखाई देता है।"
    },
    {
        question: "प्रश्न 3. शरीर का सबसे बड़ा लसीका अंग कौन सा है?",
        answers: shuffle([
            { text: "टॉन्सिल", correct: false },
            { text: "थाइमस", correct: false },
            { text: "प्लीहा (Spleen)", correct: true },
            { text: "लसीका पर्व (Lymph Node)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्लीहा या तिल्ली शरीर का सबसे बड़ा लसीका अंग है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह रक्त को फ़िल्टर करता है, पुरानी लाल रक्त कोशिकाओं को नष्ट करता है और प्रतिरक्षा प्रतिक्रिया में महत्वपूर्ण भूमिका निभाता है।"
    },
    {
        question: "प्रश्न 4. लसीका पर्व (Lymph Nodes) का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "लसीका का उत्पादन करना", correct: false },
            { text: "लसीका को फ़िल्टर करना और रोगाणुओं को नष्ट करना", correct: true },
            { text: "वसा का भंडारण करना", correct: false },
            { text: "रक्त का उत्पादन करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लसीका पर्व छोटे, बीन के आकार के अंग होते हैं जो लसीका वाहिकाओं के साथ स्थित होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> वे लसीका को छानते हैं और उसमें मौजूद बैक्टीरिया, वायरस और अन्य हानिकारक पदार्थों को फँसाकर नष्ट कर देते हैं।"
    },
    {
        question: "प्रश्न 5. कौन सा लसीका अंग T-लिम्फोसाइट्स (T-cells) के परिपक्वन (maturation) के लिए जिम्मेदार है?",
        answers: shuffle([
            { text: "प्लीहा (Spleen)", correct: false },
            { text: "थाइमस ग्रंथि (Thymus Gland)", correct: true },
            { text: "टॉन्सिल (Tonsils)", correct: false },
            { text: "अस्थि मज्जा (Bone Marrow)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थाइमस ग्रंथि छाती में स्थित एक अंग है जहां T-लिम्फोसाइट्स (एक प्रकार की श्वेत रक्त कोशिका) परिपक्व होती हैं और प्रतिरक्षा प्रणाली में अपनी विशिष्ट भूमिका के लिए प्रशिक्षित होती हैं।"
    },
    {
        question: "प्रश्न 6. लसीका में कौन सा रक्त घटक अनुपस्थित होता है?",
        answers: shuffle([
            { text: "श्वेत रक्त कोशिकाएं (WBC)", correct: false },
            { text: "लाल रक्त कोशिकाएं (RBC) और प्लेटलेट्स", correct: true },
            { text: "प्लाज्मा प्रोटीन", correct: false },
            { text: "पानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लसीका रक्त केशिकाओं से छना हुआ प्लाज्मा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रक्रिया में बड़ी संरचनाएं जैसे RBC और प्लेटलेट्स केशिकाओं से बाहर नहीं निकल पाती हैं।"
    },
    {
        question: "प्रश्न 7. छोटी आंत में वसा का अवशोषण करने वाली विशेष लसीका वाहिकाओं को क्या कहा जाता है?",
        answers: shuffle([
            { text: "लैक्टियल्स (Lacteals)", correct: true },
            { text: "लसीका केशिकाएं (Lymph Capillaries)", correct: false },
            { text: "थोरैसिक डक्ट (Thoracic Duct)", correct: false },
            { text: "सिस्टर्ना चाइली (Cisterna Chyli)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैक्टियल्स छोटी आंत के विलाई (villi) में पाई जाने वाली विशेष लसीका केशिकाएं हैं जो पचे हुए वसा को अवशोषित करती हैं, जिससे लसीका दूधिया (chyle) दिखाई देता है।"
    },
    {
        question: "प्रश्न 8. शरीर की सबसे बड़ी लसीका वाहिका कौन सी है?",
        answers: shuffle([
            { text: "दाहिनी लसीका वाहिनी (Right Lymphatic Duct)", correct: false },
            { text: "वक्षीय वाहिनी (Thoracic Duct)", correct: true },
            { text: "जुगुलर ट्रंक (Jugular Trunk)", correct: false },
            { text: "सबक्लेवियन ट्रंक (Subclavian Trunk)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वक्षीय वाहिनी (थोरैसिक डक्ट) शरीर की सबसे बड़ी लसीका वाहिका है, जो शरीर के अधिकांश हिस्सों (दोनों पैरों, पेट, बाएं हाथ, छाती, सिर और गर्दन के बाएं हिस्से) से लसीका एकत्र करती है।"
    },
    {
        question: "प्रश्न 9. टॉन्सिल शरीर के किस भाग में स्थित होते हैं?",
        answers: shuffle([
            { text: "पेट में", correct: false },
            { text: "गर्दन में", correct: false },
            { text: "गले के पिछले हिस्से में (ग्रसनी)", correct: true },
            { text: "छाती में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टॉन्सिल लसीका ऊतक के समूह हैं जो गले के पीछे स्थित होते हैं और मुंह और नाक के माध्यम से प्रवेश करने वाले रोगजनकों के खिलाफ रक्षा की पहली पंक्ति के रूप में कार्य करते हैं।"
    },
    {
        question: "प्रश्न 10. 'एडिमा' (Oedema) या सूजन का क्या कारण है?",
        answers: shuffle([
            { text: "रक्त की अधिकता", correct: false },
            { text: "ऊतकों में अंतरालीय द्रव का जमा होना", correct: true },
            { text: "लसीका का तेजी से प्रवाह", correct: false },
            { text: "वसा का जमाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब लसीका तंत्र क्षतिग्रस्त हो जाता है या ठीक से काम नहीं करता है, तो ऊतकों से अतिरिक्त द्रव को प्रभावी ढंग से नहीं हटाया जा सकता है, जिससे वह जमा हो जाता है और सूजन (एडिमा) का कारण बनता है।"
    },
    {
        question: "प्रश्न 11. लिम्फोसाइट्स (Lymphocytes) का निर्माण मुख्य रूप से कहाँ होता है?",
        answers: shuffle([
            { text: "यकृत (Liver)", correct: false },
            { text: "प्लीहा (Spleen)", correct: false },
            { text: "अस्थि मज्जा (Bone Marrow)", correct: true },
            { text: "मस्तिष्क (Brain)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सभी रक्त कोशिकाओं की तरह, लिम्फोसाइट्स (B-कोशिकाएं और T-कोशिकाएं दोनों) का उत्पादन अस्थि मज्जा में स्टेम कोशिकाओं से होता है।"
    },
    {
        question: "प्रश्न 12. लसीका तंत्र किस प्रकार का परिसंचरण तंत्र है?",
        answers: shuffle([
            { text: "बंद परिसंचरण तंत्र", correct: false },
            { text: "खुला परिसंचरण तंत्र", correct: false },
            { text: "एक-दिशीय प्रवाह तंत्र (One-way system)", correct: true },
            { text: "द्वि-दिशीय प्रवाह तंत्र (Two-way system)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लसीका तंत्र एक-दिशीय होता है, जो ऊतकों से द्रव एकत्र करता है और इसे हमेशा हृदय की ओर रक्तप्रवाह में वापस ले जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें कोई पंप (जैसे हृदय) नहीं होता है।"
    },
    {
        question: "प्रश्न 13. 'हाथीपाँव' (Elephantiasis) या फाइलेरिया रोग किस कारण होता है?",
        answers: shuffle([
            { text: "जीवाणु संक्रमण", correct: false },
            { text: "विषाणु संक्रमण", correct: false },
            { text: "परजीवी कृमि द्वारा लसीका वाहिकाओं में रुकावट", correct: true },
            { text: "फंगल संक्रमण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह रोग फाइलेरियल कृमि (Wuchereria bancrofti) के कारण होता है, जो मच्छरों द्वारा फैलता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये कृमि लसीका वाहिकाओं में रहते हैं और रुकावट पैदा करते हैं, जिससे अत्यधिक सूजन होती है।"
    },
    {
        question: "प्रश्न 14. बी-लिम्फोसाइट्स (B-cells) का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "सीधे संक्रमित कोशिकाओं को मारना", correct: false },
            { text: "एंटीबॉडी का उत्पादन करना", correct: true },
            { text: "फैगोसाइटोसिस (भक्षण) करना", correct: false },
            { text: "एलर्जी प्रतिक्रिया उत्पन्न करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब बी-लिम्फोसाइट्स किसी विशिष्ट रोगज़नक़ के संपर्क में आते हैं, तो वे प्लाज्मा कोशिकाओं में बदल जाते हैं जो उस रोगज़नक़ से लड़ने के लिए बड़ी मात्रा में एंटीबॉडी का उत्पादन और स्राव करते हैं।"
    },
    {
        question: "प्रश्न 15. किस लसीका अंग को \"RBC का कब्रिस्तान\" भी कहा जाता है?",
        answers: shuffle([
            { text: "थाइमस", correct: false },
            { text: "टॉन्सिल", correct: false },
            { text: "लसीका पर्व", correct: false },
            { text: "प्लीहा (Spleen)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्लीहा रक्तप्रवाह से पुरानी, क्षतिग्रस्त और दोषपूर्ण लाल रक्त कोशिकाओं (RBC) और प्लेटलेट्स को हटाकर नष्ट कर देता है।"
    },
    {
        question: "प्रश्न 16. लसीका के प्रवाह में कौन मदद करता है?",
        answers: shuffle([
            { text: "हृदय का पंपिंग कार्य", correct: false },
            { text: "कंकाल की मांसपेशियों का संकुचन और श्वास क्रिया", correct: true },
            { text: "गुरुत्वाकर्षण", correct: false },
            { text: "धमनियों का दबाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूंकि लसीका तंत्र में अपना पंप नहीं होता है, लसीका का प्रवाह आसपास की कंकाल की मांसपेशियों के संकुचन और श्वास के दौरान छाती में होने वाले दबाव परिवर्तनों पर निर्भर करता है।"
    },
    {
        question: "प्रश्न 17. पेयर के पैच (Peyer's Patches) कहाँ पाए जाते हैं?",
        answers: shuffle([
            { text: "बड़ी आंत", correct: false },
            { text: "पेट", correct: false },
            { text: "छोटी आंत (विशेषकर इलियम)", correct: true },
            { text: "ग्रासनली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेयर के पैच छोटी आंत की दीवार में लसीका ऊतक के संगठित समूह होते हैं जो आंतों के मार्ग की निगरानी करते हैं और रोगजनकों के खिलाफ प्रतिरक्षा प्रतिक्रिया उत्पन्न करते हैं।"
    },
    {
        question: "प्रश्न 18. 'लिम्फोमा' (Lymphoma) किस प्रकार का कैंसर है?",
        answers: shuffle([
            { text: "यकृत का कैंसर", correct: false },
            { text: "फेफड़ों का कैंसर", correct: false },
            { text: "लसीका तंत्र का कैंसर", correct: true },
            { text: "रक्त का कैंसर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिम्फोमा एक प्रकार का कैंसर है जो लिम्फोसाइट्स नामक प्रतिरक्षा प्रणाली की कोशिकाओं में शुरू होता है, जो लसीका तंत्र का हिस्सा हैं।"
    },
    {
        question: "प्रश्न 19. दाहिनी लसीका वाहिनी (Right Lymphatic Duct) शरीर के किस हिस्से से लसीका एकत्र करती है?",
        answers: shuffle([
            { text: "पूरे शरीर से", correct: false },
            { text: "केवल निचले अंगों से", correct: false },
            { text: "शरीर के दाहिने ऊपरी हिस्से से (सिर, गर्दन, छाती और दाहिने हाथ का दाहिना भाग)", correct: true },
            { text: "शरीर के बाएं हिस्से से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक छोटी वाहिनी है जो शरीर के केवल दाहिने ऊपरी चतुर्थांश से लसीका एकत्र करती है और इसे दाहिनी सबक्लेवियन शिरा में डालती है।"
    },
    {
        question: "प्रश्न 20. लसीका वाहिकाओं में मौजूद वाल्व का क्या कार्य है?",
        answers: shuffle([
            { text: "लसीका के प्रवाह को तेज करना", correct: false },
            { text: "लसीका के पिछड़े प्रवाह को रोकना", correct: true },
            { text: "लसीका को फ़िल्टर करना", correct: false },
            { text: "लिम्फोसाइट्स का उत्पादन करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शिराओं की तरह, लसीका वाहिकाओं में भी एक-तरफ़ा वाल्व होते हैं जो यह सुनिश्चित करते हैं कि लसीका केवल एक दिशा में, यानी हृदय की ओर बहता रहे।"
    },
    {
        question: "प्रश्न 21. कौन सा अंग बचपन में सबसे बड़ा और सक्रिय होता है, लेकिन यौवन के बाद धीरे-धीरे सिकुड़ जाता है?",
        answers: shuffle([
            { text: "प्लीहा", correct: false },
            { text: "टॉन्सिल", correct: false },
            { text: "अपेंडिक्स", correct: false },
            { text: "थाइमस ग्रंथि", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थाइमस ग्रंथि जन्म के समय बड़ी होती है और बचपन के दौरान T-कोशिकाओं के विकास के लिए महत्वपूर्ण होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यौवन के बाद, यह धीरे-धीरे सिकुड़ने लगती है और इसकी जगह वसा ऊतक ले लेते हैं।"
    },
    {
        question: "प्रश्न 22. 'चाइल' (Chyle) क्या है?",
        answers: shuffle([
            { text: "शुद्ध लसीका", correct: false },
            { text: "वसा युक्त लसीका", correct: true },
            { text: "संक्रमित लसीका", correct: false },
            { text: "रक्त युक्त लसीका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चाइल एक दूधिया शारीरिक तरल पदार्थ है जिसमें लसीका और छोटी आंत से अवशोषित पायसीकृत वसा (chylomicrons) होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह लैक्टियल्स में पाया जाता है।"
    },
    {
        question: "प्रश्न 23. अपेंडिक्स (Appendix) को किस प्रकार का अंग माना जाता है?",
        answers: shuffle([
            { text: "पाचन अंग", correct: false },
            { text: "अंतःस्रावी अंग", correct: false },
            { text: "लसीकाभ अंग (Lymphoid Organ)", correct: true },
            { text: "अवशेषी अंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हालांकि इसे अक्सर अवशेषी अंग माना जाता है, अपेंडिक्स में पर्याप्त मात्रा में लसीका ऊतक होता है और यह आंत में अच्छे बैक्टीरिया को बनाए रखने और प्रतिरक्षा में भूमिका निभा सकता है।"
    },
    {
        question: "प्रश्न 24. लसीका और अंतरालीय द्रव (Interstitial Fluid) में मुख्य अंतर क्या है?",
        answers: shuffle([
            { text: "रंग का", correct: false },
            { text: "स्थान का", correct: true },
            { text: "प्रोटीन की मात्रा का", correct: false },
            { text: "तापमान का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये दोनों तरल पदार्थ संरचना में लगभग समान हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जब तरल कोशिकाओं के बीच के स्थान में होता है, तो इसे अंतरालीय द्रव कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जब यही द्रव लसीका वाहिकाओं में प्रवेश कर जाता है, तो इसे लसीका कहते हैं।"
    },
    {
        question: "प्रश्न 25. MALT का पूर्ण रूप क्या है?",
        answers: shuffle([
            { text: "Multiple Associated Lymphoid Tissues", correct: false },
            { text: "Mucosa-Associated Lymphoid Tissue", correct: true },
            { text: "Main Arterial Lymphoid Trunk", correct: false },
            { text: "Major Antibody Lymphoid Tissue", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> MALT (श्लेष्मा-संबद्ध लसीकाभ ऊतक) लसीका ऊतक का एक फैला हुआ तंत्र है जो पाचन, श्वसन और मूत्र-जननांग पथों जैसे श्लेष्म झिल्ली में पाया जाता है।"
    },
    {
        question: "प्रश्न 26. जब लसीका पर्व संक्रमण के कारण सूज जाते हैं, तो इस स्थिति को क्या कहते हैं?",
        answers: shuffle([
            { text: "एडिमा", correct: false },
            { text: "लिम्फोमा", correct: false },
            { text: "लिम्फैडेनाइटिस (Lymphadenitis)", correct: true },
            { text: "लिम्फैन्जाइटिस (Lymphangitis)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिम्फैडेनाइटिस एक या एक से अधिक लसीका पर्व की सूजन है, जो आमतौर पर संक्रमण की प्रतिक्रिया के रूप में होती है जब वे रोगाणुओं से लड़ रहे होते हैं।"
    },
    {
        question: "प्रश्न 27. प्लीहा का 'लाल पल्प' (Red Pulp) क्या कार्य करता है?",
        answers: shuffle([
            { text: "लिम्फोसाइट्स का भंडारण", correct: false },
            { text: "एंटीबॉडी का उत्पादन", correct: false },
            { text: "रक्त को फ़िल्टर करना और पुरानी RBC को हटाना", correct: true },
            { text: "T-कोशिकाओं को परिपक्व करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्लीहा का लाल पल्प रक्त से भरे साइनसों से बना होता है जो रक्त को छानने और पुरानी रक्त कोशिकाओं को हटाने के लिए जिम्मेदार होता है।"
    },
    {
        question: "प्रश्न 28. प्लीहा का 'श्वेत पल्प' (White Pulp) किससे संबंधित है?",
        answers: shuffle([
            { text: "रक्त भंडारण", correct: false },
            { text: "प्रतिरक्षा कार्य", correct: true },
            { text: "RBC का निर्माण", correct: false },
            { text: "पाचन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्वेत पल्प लसीका ऊतक (लिम्फोसाइट्स और मैक्रोफेज) से बना होता है और यह प्लीहा का वह हिस्सा है जो रक्त-जनित रोगजनकों के खिलाफ प्रतिरक्षा प्रतिक्रियाओं में शामिल होता है।"
    },
    {
        question: "प्रश्न 29. लसीका तंत्र किस विटामिन के अवशोषण में मदद करता है?",
        answers: shuffle([
            { text: "विटामिन C", correct: false },
            { text: "विटामिन B12", correct: false },
            { text: "वसा में घुलनशील विटामिन (A, D, E, K)", correct: true },
            { text: "विटामिन B6", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूंकि लसीका तंत्र वसा के अवशोषण के लिए जिम्मेदार है, यह वसा में घुलनशील विटामिनों के अवशोषण और परिवहन में भी महत्वपूर्ण भूमिका निभाता है।"
    },
    {
        question: "प्रश्न 30. जन्मजात प्रतिरक्षा (Innate Immunity) और अनुकूली प्रतिरक्षा (Adaptive Immunity) में कौन अंतर करने में सक्षम है?",
        answers: shuffle([
            { text: "मैक्रोफेज", correct: false },
            { text: "न्यूट्रोफिल्स", correct: false },
            { text: "लिम्फोसाइट्स", correct: true },
            { text: "मास्ट कोशिकाएं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिम्फोसाइट्स (T-कोशिकाएं और B-कोशिकाएं) अनुकूली प्रतिरक्षा प्रणाली के मुख्य घटक हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> वे विशिष्ट रोगजनकों को पहचानने और उनके खिलाफ \"मेमोरी\" बनाने में सक्षम हैं।"
    },
    {
        question: "प्रश्न 31. सिस्टर्ना चाइली (Cisterna Chyli) क्या है?",
        answers: shuffle([
            { text: "एक प्रकार की लसीका कोशिका", correct: false },
            { text: "एक लसीका अंग", correct: false },
            { text: "वक्षीय वाहिनी के निचले सिरे पर एक फैली हुई थैली", correct: true },
            { text: "एक प्रकार का टॉन्सिल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक बड़ी थैली है जो निचले शरीर और आंतों से लसीका (विशेषकर चाइल) एकत्र करती है और इसे वक्षीय वाहिनी (थोरैसिक डक्ट) में भेजती है।"
    },
    {
        question: "प्रश्न 32. लसीका तंत्र शरीर के किस तंत्र के साथ मिलकर काम करता है?",
        answers: shuffle([
            { text: "केवल पाचन तंत्र", correct: false },
            { text: "केवल श्वसन तंत्र", correct: false },
            { text: "परिसंचरण तंत्र और प्रतिरक्षा तंत्र", correct: true },
            { text: "केवल तंत्रिका तंत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लसीका तंत्र परिसंचरण तंत्र के समानांतर काम करता है (द्रव लौटाकर) और यह प्रतिरक्षा तंत्र का एक अभिन्न अंग है।"
    },
    {
        question: "प्रश्न 33. निम्नलिखित में से कौन सा एक प्राथमिक लसीकाभ अंग (Primary Lymphoid Organ) है?",
        answers: shuffle([
            { text: "प्लीहा", correct: false },
            { text: "लसीका पर्व", correct: false },
            { text: "थाइमस", correct: true },
            { text: "टॉन्सिल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्राथमिक लसीकाभ अंग वे होते हैं जहाँ लिम्फोसाइट्स बनते और परिपक्व होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इनमें अस्थि मज्जा और थाइमस शामिल हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> प्लीहा और लसीका पर्व द्वितीयक अंग हैं।"
    },
    {
        question: "प्रश्न 34. होजकिन रोग (Hodgkin's disease) किस तंत्र को प्रभावित करता है?",
        answers: shuffle([
            { text: "पाचन तंत्र", correct: false },
            { text: "लसीका तंत्र", correct: true },
            { text: "श्वसन तंत्र", correct: false },
            { text: "अंतःस्रावी तंत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> होजकिन रोग (या होजकिन लिम्फोमा) लसीका तंत्र का एक प्रकार का कैंसर है।"
    },
    {
        question: "प्रश्न 35. लसीका वाहिकाओं की दीवारें रक्त केशिकाओं की तुलना में कैसी होती हैं?",
        answers: shuffle([
            { text: "अधिक मोटी", correct: false },
            { text: "अधिक पारगम्य (More permeable)", correct: true },
            { text: "कम पारगम्य (Less permeable)", correct: false },
            { text: "कोई अंतर नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लसीका केशिकाओं की दीवारें बहुत पतली और पारगम्य होती हैं, जो अंतरालीय द्रव, प्रोटीन और अन्य बड़े कणों को आसानी से अंदर आने देती हैं।"
    },
    {
        question: "प्रश्न 36. मेमोरी कोशिकाएं (Memory Cells) किस प्रकार की प्रतिरक्षा से संबंधित हैं?",
        answers: shuffle([
            { text: "जन्मजात प्रतिरक्षा", correct: false },
            { text: "अनुकूली या अर्जित प्रतिरक्षा", correct: true },
            { text: "निष्क्रिय प्रतिरक्षा", correct: false },
            { text: "कोशिकीय प्रतिरक्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेमोरी B-कोशिकाएं और T-कोशिकाएं अनुकूली प्रतिरक्षा का एक महत्वपूर्ण हिस्सा हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> वे पिछले संक्रमणों को \"याद\" रखती हैं और भविष्य में उसी रोगज़नक़ के हमले पर तेजी से और अधिक प्रभावी प्रतिक्रिया देती हैं।"
    },
    {
        question: "प्रश्न 37. लसीका तंत्र का कौन सा घटक शरीर के सभी ऊतकों में नहीं पाया जाता है?",
        answers: shuffle([
            { text: "लसीका केशिकाएं", correct: false },
            { text: "लिम्फोसाइट्स", correct: false },
            { text: "अंतरालीय द्रव", correct: false },
            { text: "लैक्टियल्स", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैक्टियल्स केवल छोटी आंत की विलाई में पाई जाने वाली विशेष लसीका केशिकाएं हैं।"
    },
    {
        question: "प्रश्न 38. लसीका परिसंचरण का अध्ययन क्या कहलाता है?",
        answers: shuffle([
            { text: "कार्डियोलॉजी", correct: false },
            { text: "हेमेटोलॉजी", correct: false },
            { text: "लिम्फोलॉजी (Lymphology)", correct: true },
            { text: "इम्यूनोलॉजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिम्फोलॉजी चिकित्सा का वह क्षेत्र है जो लसीका तंत्र और इससे संबंधित विकारों के निदान और उपचार से संबंधित है।"
    },
    {
        question: "प्रश्न 39. प्लीहा को हटाने की शल्य प्रक्रिया क्या कहलाती है?",
        answers: shuffle([
            { text: "नेफरेक्टोमी", correct: false },
            { text: "हेपेटेक्टोमी", correct: false },
            { text: "स्प्लेनेक्टोमी (Splenectomy)", correct: true },
            { text: "गैस्ट्रेक्टोमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्प्लेनेक्टोमी प्लीहा को शल्य चिकित्सा द्वारा हटाने की प्रक्रिया है, जो अक्सर चोट या कुछ बीमारियों के कारण की जाती है।"
    },
    {
        question: "प्रश्न 40. लसीका में मौजूद मुख्य श्वेत रक्त कोशिका कौन सी है?",
        answers: shuffle([
            { text: "न्यूट्रोफिल", correct: false },
            { text: "बेसोफिल", correct: false },
            { text: "इओसिनोफिल", correct: false },
            { text: "लिम्फोसाइट", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैसा कि नाम से पता चलता है, लसीका (लिम्फ) में सबसे प्रचुर मात्रा में पाई जाने वाली कोशिकाएं लिम्फोसाइट्स हैं, जो प्रतिरक्षा में महत्वपूर्ण भूमिका निभाती हैं।"
    },
    {
        question: "प्रश्न 41. कौन सा अंग रक्त के भंडार के रूप में कार्य कर सकता है?",
        answers: shuffle([
            { text: "थाइमस", correct: false },
            { text: "यकृत", correct: false },
            { text: "प्लीहा", correct: true },
            { text: "अग्न्याशय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपने लाल पल्प में बड़ी मात्रा में रक्त रखने की क्षमता के कारण, प्लीहा आपातकालीन स्थिति में रक्त की आपूर्ति के लिए एक भंडार के रूप में कार्य कर सकता है।"
    },
    {
        question: "प्रश्न 42. एडिनॉइड्स (Adenoids) क्या हैं?",
        answers: shuffle([
            { text: "गर्दन में लसीका पर्व", correct: false },
            { text: "नाक के पीछे ग्रसनी के ऊपरी भाग में स्थित लसीका ऊतक", correct: true },
            { text: "पेट में लसीका ऊतक", correct: false },
            { text: "त्वचा के नीचे लसीका ऊतक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एडिनॉइड्स टॉन्सिल के समान लसीका ऊतक का एक पैच है जो नासॉफिरिन्क्स (nasopharynx) में स्थित होता है और बच्चों में प्रतिरक्षा में भूमिका निभाता है।"
    },
    {
        question: "प्रश्न 43. लसीका का प्रवाह रक्त के प्रवाह की तुलना में कैसा होता है?",
        answers: shuffle([
            { text: "बहुत तेज", correct: false },
            { text: "बहुत धीमा", correct: true },
            { text: "समान गति से", correct: false },
            { text: "अप्रत्याशित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लसीका तंत्र में हृदय जैसा कोई केंद्रीय पंप नहीं होता है, इसलिए लसीका का प्रवाह रक्त परिसंचरण की तुलना में काफी धीमा और कम दबाव वाला होता है।"
    },
    {
        question: "प्रश्न 44. HIV (ह्यूमन इम्यूनोडेफिशिएंसी वायरस) मुख्य रूप से किन कोशिकाओं पर हमला करता है?",
        answers: shuffle([
            { text: "बी-लिम्फोसाइट्स", correct: false },
            { text: "सहायक T-कोशिकाएं (Helper T-cells)", correct: true },
            { text: "न्यूट्रोफिल्स", correct: false },
            { text: "लाल रक्त कोशिकाएं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> HIV विशेष रूप से सहायक T-कोशिकाओं (CD4+ T-cells) को लक्षित और नष्ट करता है, जो प्रतिरक्षा प्रणाली को समन्वित करने के लिए महत्वपूर्ण हैं, जिससे शरीर संक्रमणों के प्रति संवेदनशील हो जाता है।"
    },
    {
        question: "प्रश्न 45. लसीका तंत्र का कौन सा कार्य सीधे तौर पर परिसंचरण तंत्र से संबंधित है?",
        answers: shuffle([
            { text: "रोगजनकों से लड़ना", correct: false },
            { text: "ऊतकों से अतिरिक्त द्रव लौटाना", correct: true },
            { text: "वसा का अवशोषण", correct: false },
            { text: "T-कोशिकाओं का परिपक्वन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊतकों से अतिरिक्त द्रव लौटाना सीधे परिसंचरण तंत्र से संबंधित है क्योंकि यह रक्त की मात्रा और रक्तचाप को बनाए रखने में मदद करता है।"
    },
    {
        question: "प्रश्न 46. टीकाकरण (Vaccination) किस प्रकार की प्रतिरक्षा को प्रेरित करता है?",
        answers: shuffle([
            { text: "प्राकृतिक सक्रिय प्रतिरक्षा", correct: false },
            { text: "कृत्रिम सक्रिय प्रतिरक्षा", correct: true },
            { text: "प्राकृतिक निष्क्रिय प्रतिरक्षा", correct: false },
            { text: "कृत्रिम निष्क्रिय प्रतिरक्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टीकाकरण में शरीर में एक कमजोर या निष्क्रिय रोगज़नक़ डाला जाता है, जो शरीर की अपनी प्रतिरक्षा प्रणाली (लिम्फोसाइट्स) को एंटीबॉडी और मेमोरी कोशिकाएं बनाने के लिए प्रेरित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे कृत्रिम सक्रिय प्रतिरक्षा कहते हैं।"
    },
    {
        question: "प्रश्न 47. निम्नलिखित में से कौन सा एक द्वितीयक लसीकाभ अंग (Secondary Lymphoid Organ) है?",
        answers: shuffle([
            { text: "लाल अस्थि मज्जा", correct: false },
            { text: "थाइमस ग्रंथि", correct: false },
            { text: "लसीका पर्व (Lymph Node)", correct: true },
            { text: "ये  सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्वितीयक लसीकाभ अंग वे स्थान हैं जहां परिपक्व लिम्फोसाइट्स रोगजनकों के संपर्क में आते हैं और प्रतिरक्षा प्रतिक्रिया शुरू करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इनमें लसीका पर्व, प्लीहा, टॉन्सिल आदि शामिल हैं।"
    },
    {
        question: "प्रश्न 48. लिम्फैन्जाइटिस (Lymphangitis) क्या है?",
        answers: shuffle([
            { text: "लसीका पर्व की सूजन", correct: false },
            { text: "लसीका वाहिकाओं की सूजन", correct: true },
            { text: "प्लीहा की सूजन", correct: false },
            { text: "टॉन्सिल की सूजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिम्फैन्जाइटिस लसीका वाहिकाओं का संक्रमण या सूजन है, जो अक्सर त्वचा पर लाल धारियों के रूप में दिखाई देती है।"
    },
    {
        question: "प्रश्न 49. शरीर की प्रतिरक्षा प्रणाली जब शरीर की अपनी कोशिकाओं पर हमला करती है, तो उस स्थिति को क्या कहते हैं?",
        answers: shuffle([
            { text: "एलर्जी", correct: false },
            { text: "ऑटोइम्यून रोग (Autoimmune Disease)", correct: true },
            { text: "इम्यूनोडेफिशिएंसी", correct: false },
            { text: "सूजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑटोइम्यून विकारों में, प्रतिरक्षा प्रणाली (जिसमें लिम्फोसाइट्स शामिल हैं) 'स्व' और 'गैर-स्व' के बीच अंतर करने में विफल हो जाती है और शरीर के स्वस्थ ऊतकों पर हमला करना शुरू कर देती है।"
    },
    {
        question: "प्रश्न 50. एक नवजात शिशु को अपनी माँ के दूध (कोलोस्ट्रम) से कौन सी प्रतिरक्षा प्राप्त होती है?",
        answers: shuffle([
            { text: "कृत्रिम सक्रिय प्रतिरक्षा", correct: false },
            { text: "कृत्रिम निष्क्रिय प्रतिरक्षा", correct: false },
            { text: "प्राकृतिक सक्रिय प्रतिरक्षा", correct: false },
            { text: "प्राकृतिक निष्क्रिय प्रतिरक्षा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माँ के दूध में पहले से बनी हुई एंटीबॉडी होती हैं जो शिशु को सीधे तौर पर मिलती हैं, जिससे उसे जीवन के शुरुआती महीनों में सुरक्षा मिलती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे प्राकृतिक निष्क्रिय प्रतिरक्षा कहा जाता है क्योंकि शिशु का शरीर स्वयं एंटीबॉडी नहीं बना रहा है।"
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