const questions = [
    {
        topHeading: "कोशिका झिल्ली की संरचना और कार्यों पर आधारित 30 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. कोशिका झिल्ली की प्रकृति कैसी होती है?",
        answers: shuffle([
            { text: "पूर्ण पारगम्य (Fully permeable)", correct: false },
            { text: "अपारगम्य (Impermeable)", correct: false },
            { text: "चयनात्मक पारगम्य (Selectively permeable)", correct: true },
            { text: "कठोर (Rigid)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशिका झिल्ली चयनात्मक रूप से पारगम्य होती है, जिसका अर्थ है कि यह कुछ अणुओं और आयनों को ही अपने आर-पार जाने की अनुमति देती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जबकि दूसरों को रोकती है, जिससे कोशिका का आंतरिक वातावरण नियंत्रित रहता है।"
    },
    {
        question: "प्रश्न 2. कोशिका झिल्ली के 'फ्लूइड मोजेक मॉडल' (Fluid Mosaic Model) को किसने प्रतिपादित किया था?",
        answers: shuffle([
            { text: "वाटसन और क्रिक", correct: false },
            { text: "श्लीडन और श्वान", correct: false },
            { text: "सिंगर और निकोलसन", correct: true },
            { text: "रॉबर्ट हुक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1972 में, एस.जे. सिंगर और जी.एल. निकोलसन ने फ्लूइड मोजेक मॉडल प्रस्तुत किया।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसके अनुसार कोशिका झिल्ली एक तरल फॉस्फोलिपिड द्विपरत है जिसमें प्रोटीन के अणु मोजेक की तरह धंसे रहते हैं।"
    },
    {
        question: "प्रश्न 3. कोशिका झिल्ली मुख्य रूप से किससे बनी होती है?",
        answers: shuffle([
            { text: "केवल प्रोटीन", correct: false },
            { text: "सेलूलोज़ और काइटिन", correct: false },
            { text: "लिपिड और प्रोटीन", correct: true },
            { text: "केवल कार्बोहाइड्रेट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशिका झिल्ली का मूल ढांचा फॉस्फोलिपिड की एक दोहरी परत (Bilayer) से बना होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें विभिन्न प्रकार के प्रोटीन अंतर्निहित या सतह पर जुड़े होते हैं।"
    },
    {
        question: "प्रश्न 4. जल के अणुओं का उच्च सांद्रता वाले क्षेत्र से निम्न सांद्रता वाले क्षेत्र की ओर एक अर्धपारगम्य झिल्ली के माध्यम से जाना क्या कहलाता है?",
        answers: shuffle([
            { text: "विसरण (Diffusion)", correct: false },
            { text: "परासरण (Osmosis)", correct: true },
            { text: "सक्रिय परिवहन (Active Transport)", correct: false },
            { text: "बहिःकोशिकता (Exocytosis)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परासरण एक विशेष प्रकार का विसरण है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें जल के अणु एक चयनात्मक या अर्धपारगम्य झिल्ली (जैसे कोशिका झिल्ली) के माध्यम से अपनी उच्च सांद्रता से निम्न सांद्रता की ओर गति करते हैं।"
    },
    {
        question: "प्रश्न 5. कोशिका झिल्ली में फॉस्फोलिपिड अणु किस प्रकार व्यवस्थित होते हैं?",
        answers: shuffle([
            { text: "एक एकल परत में", correct: false },
            { text: "एक दोहरी परत (Bilayer) में", correct: true },
            { text: "एक तिहरी परत में", correct: false },
            { text: "अनियमित रूप से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फॉस्फोलिपिड अणु एक द्विपरत बनाते हैं जिसमें उनके जलरागी (hydrophilic) 'सिर' बाहर की ओर (जलीय वातावरण की ओर) और जलविरागी (hydrophobic) 'पूंछ' अंदर की ओर (एक दूसरे की ओर) होती हैं।"
    },
    {
        question: "प्रश्न 6. ऊर्जा (ATP) का उपयोग करके पदार्थों को उनकी सांद्रता प्रवणता (Concentration Gradient) के विरुद्ध ले जाने की प्रक्रिया क्या कहलाती है?",
        answers: shuffle([
            { text: "सुगम विसरण (Facilitated Diffusion)", correct: false },
            { text: "परासरण (Osmosis)", correct: false },
            { text: "सक्रिय परिवहन (Active Transport)", correct: true },
            { text: "सरल विसरण (Simple Diffusion)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सक्रिय परिवहन में, कोशिका ATP के रूप में ऊर्जा खर्च करके वाहक प्रोटीन (पंप) की मदद से पदार्थों को कम सांद्रता वाले क्षेत्र से उच्च सांद्रता वाले क्षेत्र की ओर ले जाती है।"
    },
    {
        question: "प्रश्न 7. जन्तु कोशिका झिल्ली में मौजूद कौन सा लिपिड झिल्ली की तरलता (Fluidity) को नियंत्रित करता है?",
        answers: shuffle([
            { text: "फॉस्फोलिपिड", correct: false },
            { text: "स्टेरॉयड", correct: false },
            { text: "कोलेस्ट्रॉल", correct: true },
            { text: "ग्लाइकोलिपिड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोलेस्ट्रॉल जन्तु कोशिका झिल्ली के फॉस्फोलिपिड अणुओं के बीच स्थित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और तापमान के अनुसार झिल्ली को बहुत अधिक तरल या बहुत अधिक कठोर होने से रोकता है, इस प्रकार उसकी तरलता को बनाए रखता है।"
    },
    {
        question: "प्रश्न 8. 'कोशिका द्वारा ठोस पदार्थों को अंदर लेने' (Cell eating) की प्रक्रिया क्या कहलाती है?",
        answers: shuffle([
            { text: "पीनोसाइटोसिस (Pinocytosis)", correct: false },
            { text: "फैगोसाइटोसिस (Phagocytosis)", correct: true },
            { text: "एक्सोसाइटोसिस (Exocytosis)", correct: false },
            { text: "परासरण (Osmosis)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फैगोसाइटोसिस एक प्रकार की एंडोसाइटोसिस प्रक्रिया है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें कोशिका अपनी झिल्ली द्वारा बड़े ठोस कणों (जैसे बैक्टीरिया या कोशिका मलबे) को घेरकर अंदर ले लेती है।"
    },
    {
        question: "प्रश्न 9. कोशिका झिल्ली पर मौजूद प्रोटीन का क्या कार्य है?",
        answers: shuffle([
            { text: "पदार्थों के परिवहन के लिए चैनल और पंप के रूप में कार्य करना", correct: false },
            { text: "एंजाइम के रूप में कार्य करना", correct: false },
            { text: "हार्मोन के लिए रिसेप्टर के रूप में कार्य करना", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> झिल्ली में मौजूद प्रोटीन विभिन्न कार्य करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिनमें आयनों और अणुओं का परिवहन, रासायनिक अभिक्रियाओं को उत्प्रेरित करना, और कोशिका संकेतों को ग्रहण करना शामिल है।"
    },
    {
        question: "प्रश्न 10. पादप कोशिका में कोशिका झिल्ली के बाहर पाया जाने वाला कठोर आवरण क्या कहलाता है?",
        answers: shuffle([
            { text: "प्लाज्मालेमा", correct: false },
            { text: "टोनोप्लास्ट", correct: false },
            { text: "कोशिका भित्ति (Cell Wall)", correct: true },
            { text: "ग्लाइकोकैलिक्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पादप कोशिकाओं, कवक और जीवाणुओं में कोशिका झिल्ली के बाहर एक अतिरिक्त, कठोर सुरक्षात्मक परत होती है जिसे कोशिका भित्ति कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह मुख्य रूप से सेलूलोज़ (पादपों में) से बनी होती है।"
    },
    {
        question: "प्रश्न 11. सुगम विसरण (Facilitated Diffusion) में पदार्थों का परिवहन किसकी सहायता से होता है?",
        answers: shuffle([
            { text: "ऊर्जा (ATP)", correct: false },
            { text: "झिल्ली में मौजूद विशिष्ट प्रोटीन (चैनल या वाहक)", correct: true },
            { text: "लिपिड", correct: false },
            { text: "जल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुगम विसरण एक प्रकार का निष्क्रिय परिवहन है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें अणु अपनी सांद्रता प्रवणता के अनुसार ही गति करते हैं, लेकिन उन्हें झिल्ली को पार करने के लिए एक विशिष्ट वाहक या चैनल प्रोटीन की आवश्यकता होती है।"
    },
    {
        question: "प्रश्न 12. 'कोशिका द्वारा तरल पदार्थों को अंदर लेने' (Cell drinking) की प्रक्रिया क्या कहलाती है?",
        answers: shuffle([
            { text: "फैगोसाइटोसिस (Phagocytosis)", correct: false },
            { text: "पीनोसाइटोसिस (Pinocytosis)", correct: true },
            { text: "साइक्लोसिस", correct: false },
            { text: "एक्सोसाइटोसिस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीनोसाइटोसिस वह प्रक्रिया है जिसके द्वारा कोशिका बाह्य तरल पदार्थ को उसकी झिल्ली में एक छोटी पुटिका (vesicle) बनाकर अंदर लेती है।"
    },
    {
        question: "प्रश्न 13. कोशिका झिल्ली में कार्बोहाइड्रेट किस रूप में पाए जाते हैं?",
        answers: shuffle([
            { text: "केवल स्वतंत्र अणुओं के रूप में", correct: false },
            { text: "प्रोटीन से जुड़कर ग्लाइकोप्रोटीन के रूप में", correct: false },
            { text: "लिपिड से जुड़कर ग्लाइकोलिपिड के रूप में", correct: false },
            { text: "(B) और (C) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्बोहाइड्रेट झिल्ली की बाहरी सतह पर पाए जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और वे या तो प्रोटीन से जुड़कर ग्लाइकोप्रोटीन बनाते हैं या लिपिड से जुड़कर ग्लाइकोलिपिड बनाते हैं। ये कोशिका की पहचान और आसंजन में मदद करते हैं।"
    },
    {
        question: "प्रश्न 14. सोडियम-पोटेशियम पंप (Na⁺-K⁺ Pump) किसका एक उदाहरण है?",
        answers: shuffle([
            { text: "सरल विसरण", correct: false },
            { text: "सुगम विसरण", correct: false },
            { text: "परासरण", correct: false },
            { text: "सक्रिय परिवहन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोडियम-पोटेशियम पंप एक वाहक प्रोटीन है जो ATP ऊर्जा का उपयोग करके 3 सोडियम आयनों को कोशिका से बाहर और 2 पोटेशियम आयनों को कोशिका के अंदर उनकी सांद्रता प्रवणता के विरुद्ध भेजता है।"
    },
    {
        question: "प्रश्न 15. यदि एक जंतु कोशिका को अल्पपरासरी विलयन (Hypotonic solution) में रखा जाए तो क्या होगा?",
        answers: shuffle([
            { text: "कोशिका सिकुड़ जाएगी", correct: false },
            { text: "कोशिका फूलकर फट जाएगी", correct: true },
            { text: "कोशिका के आकार में कोई परिवर्तन नहीं होगा", correct: false },
            { text: "कोशिका विभाजित हो जाएगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अल्पपरासरी विलयन में जल की सांद्रता कोशिका के अंदर से अधिक होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसलिए परासरण द्वारा जल कोशिका के अंदर प्रवेश करेगा, जिससे कोशिका फूल जाएगी और अंततः फट जाएगी (लाइसिस)।"
    },
    {
        question: "प्रश्न 16. कोशिका झिल्ली का दूसरा नाम क्या है?",
        answers: shuffle([
            { text: "कोशिका भित्ति", correct: false },
            { text: "प्लाज्मा झिल्ली (Plasma Membrane)", correct: true },
            { text: "टोनोप्लास्ट", correct: false },
            { text: "केन्द्रक झिल्ली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशिका झिल्ली को प्लाज्मा झिल्ली या प्लाज्मालेमा भी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह कोशिका की बाहरी सीमा का निर्धारण करती है।"
    },
    {
        question: "प्रश्न 17. कोशिका झिल्ली के जलविरागी (hydrophobic) सिरे किससे बने होते हैं?",
        answers: shuffle([
            { text: "फॉस्फेट समूह", correct: false },
            { text: "ग्लिसरॉल", correct: false },
            { text: "वसीय अम्ल (Fatty acid) की श्रृंखलाओं से", correct: true },
            { text: "शर्करा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फॉस्फोलिपिड अणु की जलविरागी 'पूंछ' वसीय अम्ल की लंबी हाइड्रोकार्बन श्रृंखलाओं से बनी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो पानी से दूर रहती हैं।"
    },
    {
        question: "प्रश्न 18. कोशिका द्वारा निर्मित पदार्थों (जैसे हार्मोन, एंजाइम) को बाहर निकालने की प्रक्रिया क्या कहलाती है?",
        answers: shuffle([
            { text: "एंडोसाइटोसिस", correct: false },
            { text: "फैगोसाइटोसिस", correct: false },
            { text: "बहिःकोशिकता (Exocytosis)", correct: true },
            { text: "पीनोसाइटोसिस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बहिःकोशिकता में, कोशिका के अंदर की पुटिकाएं (vesicles) कोशिका झिल्ली के साथ जुड़ जाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और अपने अंदर के पदार्थों को कोशिका के बाहर मुक्त कर देती हैं।"
    },
    {
        question: "प्रश्न 19. कौन सी प्रक्रिया ऊर्जा की खपत नहीं करती है?",
        answers: shuffle([
            { text: "सक्रिय परिवहन", correct: false },
            { text: "विसरण", correct: true },
            { text: "एंडोसाइटोसिस", correct: false },
            { text: "सोडियम-पोटेशियम पंप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विसरण (सरल और सुगम दोनों) एक निष्क्रिय प्रक्रिया है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसका अर्थ है कि यह सांद्रता प्रवणता के कारण होती है और इसमें कोशिका को ATP के रूप में ऊर्जा खर्च करने की आवश्यकता नहीं होती है।"
    },
    {
        question: "प्रश्न 20. ग्लाइकोकैलिक्स (Glycocalyx) क्या है?",
        answers: shuffle([
            { text: "कोशिका झिल्ली की आंतरिक परत", correct: false },
            { text: "कोशिका झिल्ली की बाहरी सतह पर कार्बोहाइड्रेट की परत", correct: true },
            { text: "कोशिका भित्ति का एक घटक", correct: false },
            { text: "झिल्ली के भीतर मौजूद प्रोटीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्लाइकोकैलिक्स या 'सेल कोट' ग्लाइकोप्रोटीन और ग्लाइकोलिपिड से बनी एक परत है जो जन्तु कोशिकाओं की बाहरी सतह को ढँकती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और कोशिका की पहचान, सुरक्षा और आसंजन में मदद करती है।"
    },
    {
        question: "प्रश्न 21. यदि एक पादप कोशिका को अतिपरासरी विलयन (Hypertonic solution) में रखा जाए तो क्या होगा?",
        answers: shuffle([
            { text: "कोशिका फट जाएगी", correct: false },
            { text: "जीवद्रव्य कुंचन (Plasmolysis) होगा", correct: true },
            { text: "कोशिका फूल जाएगी", correct: false },
            { text: "कोई परिवर्तन नहीं होगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अतिपरासरी विलयन में, कोशिका के अंदर से जल परासरण द्वारा बाहर निकल जाएगा।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे कोशिका का जीवद्रव्य सिकुड़कर कोशिका भित्ति से दूर हो जाएगा। इस घटना को जीवद्रव्य कुंचन कहते हैं।"
    },
    {
        question: "प्रश्न 22. कोशिका झिल्ली में मौजूद 'इंटीग्रल प्रोटीन' (Integral proteins) क्या होते हैं?",
        answers: shuffle([
            { text: "जो केवल झिल्ली की सतह पर होते हैं", correct: false },
            { text: "जो झिल्ली में आंशिक या पूरी तरह से धंसे होते हैं", correct: true },
            { text: "जो केवल कार्बोहाइड्रेट से बने होते हैं", correct: false },
            { text: "जो झिल्ली से आसानी से अलग किए जा सकते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंटीग्रल या आंतरिक प्रोटीन फॉस्फोलिपिड द्विपरत में स्थायी रूप से अंतर्निहित होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और अक्सर झिल्ली के आर-पार फैले होते हैं (ट्रांसमेम्ब्रेन प्रोटीन)।"
    },
    {
        question: "प्रश्न 23. झिल्ली के आर-पार आयनों का परिवहन सामान्यतः किसके द्वारा होता है?",
        answers: shuffle([
            { text: "सरल विसरण", correct: false },
            { text: "आयन चैनल (Ion channels)", correct: true },
            { text: "फॉस्फोलिपिड", correct: false },
            { text: "परासरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आयन आवेशित होते हैं और लिपिड द्विपरत को सीधे पार नहीं कर सकते।<br><br><i class='fa-solid fa-angles-right icon'></i>  उनका परिवहन झिल्ली में मौजूद विशिष्ट आयन चैनलों (प्रोटीन से बने) के माध्यम से होता है।"
    },
    {
        question: "प्रश्न 24. कौन सी संरचना प्रोकैरियोटिक और यूकैरियोटिक दोनों कोशिकाओं में पाई जाती है?",
        answers: shuffle([
            { text: "केन्द्रक झिल्ली", correct: false },
            { text: "माइटोकॉन्ड्रिया", correct: false },
            { text: "कोशिका झिल्ली", correct: true },
            { text: "एंडोप्लाज्मिक रेटिकुलम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशिका झिल्ली एक सार्वभौमिक संरचना है जो सभी प्रकार की जीवित कोशिकाओं, चाहे वे प्रोकैरियोटिक हों या यूकैरियोटिक, में मौजूद होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और उनके कोशिका द्रव्य को घेरती है।"
    },
    {
        question: "प्रश्न 25. कोशिका झिल्ली का मुख्य कार्य क्या नहीं है?",
        answers: shuffle([
            { text: "कोशिका को आकार देना और सुरक्षा प्रदान करना", correct: false },
            { text: "पदार्थों के परिवहन को नियंत्रित करना", correct: false },
            { text: "कोशिका की पहचान में मदद करना", correct: false },
            { text: "आनुवंशिक जानकारी का भंडारण करना", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आनुवंशिक जानकारी (DNA) का भंडारण कोशिका के केन्द्रक (यूकैरियोट्स में) या न्यूक्लियॉइड (प्रोकैरियोट्स में) में होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  न कि कोशिका झिल्ली में।"
    },
    {
        question: "प्रश्न 26. समपरासरी विलयन (Isotonic solution) में रखने पर कोशिका के आकार पर क्या प्रभाव पड़ेगा?",
        answers: shuffle([
            { text: "कोशिका सिकुड़ जाएगी", correct: false },
            { text: "कोशिका फूल जाएगी", correct: false },
            { text: "कोई शुद्ध जल प्रवाह नहीं होगा और आकार अपरिवर्तित रहेगा", correct: true },
            { text: "कोशिका नष्ट हो जाएगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समपरासरी विलयन में विलेय की सांद्रता कोशिका के अंदर की सांद्रता के बराबर होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसलिए जल के अंदर और बाहर जाने की दर समान होती है, जिससे कोशिका के आकार में कोई परिवर्तन नहीं होता है।"
    },
    {
        question: "प्रश्न 27. कोशिका झिल्ली में 'पेरिफेरल प्रोटीन' (Peripheral proteins) कहाँ स्थित होते हैं?",
        answers: shuffle([
            { text: "झिल्ली के आर-पार", correct: false },
            { text: "झिल्ली में पूरी तरह से धंसे हुए", correct: false },
            { text: "झिल्ली की आंतरिक या बाहरी सतह पर शिथिल रूप से जुड़े हुए", correct: true },
            { text: "केवल कार्बोहाइड्रेट से जुड़े हुए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेरिफेरल या बाह्य प्रोटीन झिल्ली की सतह पर (आंतरिक या बाहरी) स्थित होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और इंटीग्रल प्रोटीन या फॉस्फोलिपिड के सिरों से कमजोर बंधों द्वारा जुड़े होते हैं।"
    },
    {
        question: "प्रश्न 28. कौन सा अणु सरल विसरण द्वारा कोशिका झिल्ली को सबसे आसानी से पार कर सकता है?",
        answers: shuffle([
            { text: "ग्लूकोज", correct: false },
            { text: "सोडियम आयन (Na+)", correct: false },
            { text: "ऑक्सीजन (O2)", correct: true },
            { text: "प्रोटीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑक्सीजन एक छोटा, अध्रुवीय (nonpolar) अणु है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो लिपिड द्विपरत में आसानी से घुल सकता है और सरल विसरण द्वारा झिल्ली को पार कर सकता है। बड़े ध्रुवीय अणु और आयन इसे आसानी से पार नहीं कर सकते।"
    },
    {
        question: "प्रश्न 29. पादप कोशिकाओं में आसन्न कोशिकाओं को जोड़ने वाले जीवद्रव्यी कनेक्शन को क्या कहते हैं?",
        answers: shuffle([
            { text: "डेस्मोसोम", correct: false },
            { text: "टाइट जंक्शन", correct: false },
            { text: "गैप जंक्शन", correct: false },
            { text: "प्लाज्मोडेस्मेटा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्लाज्मोडेस्मेटा पादप कोशिकाओं की कोशिका भित्ति से गुजरने वाले सूक्ष्म चैनल हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो आसन्न कोशिकाओं की कोशिका झिल्लियों और कोशिका द्रव्य को जोड़ते हैं, जिससे उनके बीच संचार और परिवहन संभव होता है।"
    },
    {
        question: "प्रश्न 30. कोशिका झिल्ली की तरलता (fluidity) का क्या महत्व है?",
        answers: shuffle([
            { text: "यह कोशिका की वृद्धि और विभाजन में सहायक है", correct: false },
            { text: "यह पदार्थों के स्राव (secretion) में मदद करती है", correct: false },
            { text: "यह झिल्ली में प्रोटीन की गति की अनुमति देती है", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> झिल्ली की तरल प्रकृति महत्वपूर्ण है क्योंकि यह कोशिका को आकार बदलने, बढ़ने, विभाजित होने, पदार्थों का स्राव करने।<br><br><i class='fa-solid fa-angles-right icon'></i>  और झिल्ली के भीतर प्रोटीन को अपने कार्य करने के लिए स्थानांतरित होने की अनुमति देती है।"
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