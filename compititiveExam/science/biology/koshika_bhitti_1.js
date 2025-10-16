const questions = [
    {
        topHeading: "कोशिका भित्ति पर आधारित 30 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. निम्नलिखित में से किस जीव में कोशिका भित्ति नहीं पाई जाती है?",
        answers: shuffle([
            { text: "जीवाणु", correct: false },
            { text: "कवक", correct: false },
            { text: "पादप", correct: false },
            { text: "जंतु", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जंतु कोशिकाओं में कोशिका भित्ति अनुपस्थित होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इनकी बाहरी परत कोशिका झिल्ली (plasma membrane) होती है।"
    },
    {
        question: "प्रश्न 2. पादप कोशिका भित्ति का मुख्य संरचनात्मक घटक क्या है?",
        answers: shuffle([
            { text: "काइटिन", correct: false },
            { text: "पेप्टिडोग्लाइकन", correct: false },
            { text: "सेलूलोज", correct: true },
            { text: "सुबेरिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पादप कोशिका भित्ति मुख्य रूप से सेलूलोज नामक एक पॉलीसेकेराइड से बनी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो ग्लूकोज इकाइयों का एक लंबा श्रृंखला बहुलक है और कोशिका को मजबूती प्रदान करता है।"
    },
    {
        question: "प्रश्न 3. कवक (Fungi) की कोशिका भित्ति किससे बनी होती है?",
        answers: shuffle([
            { text: "सेलूलोज", correct: false },
            { text: "काइटिन", correct: true },
            { text: "पेक्टिन", correct: false },
            { text: "लिग्निन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कवकों की कोशिका भित्ति काइटिन नामक एक जटिल पॉलीसेकेराइड से बनी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो आर्थ्रोपोड के बाह्यकंकाल में भी पाया जाता है।"
    },
    {
        question: "प्रश्न 4. जीवाणुओं (Bacteria) की कोशिका भित्ति का मुख्य घटक क्या है?",
        answers: shuffle([
            { text: "काइटिन", correct: false },
            { text: "सेलूलोज", correct: false },
            { text: "पेप्टिडोग्लाइकन (म्यूरिन)", correct: true },
            { text: "ग्लाइकोजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीवाणु की कोशिका भित्ति पेप्टिडोग्लाइकन (जिसे म्यूरिन भी कहा जाता है) की बनी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो शर्करा और अमीनो एसिड का एक बहुलक है।"
    },
    {
        question: "प्रश्न 5. दो आसन्न पादप कोशिकाओं को जोड़ने वाली परत को क्या कहते हैं?",
        answers: shuffle([
            { text: "प्राथमिक भित्ति", correct: false },
            { text: "द्वितीयक भित्ति", correct: false },
            { text: "मध्य पटलिका (Middle Lamella)", correct: true },
            { text: "जीवद्रव्य तंतु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य पटलिका मुख्य रूप से कैल्शियम पेक्टेट की बनी एक परत है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो दो पादप कोशिकाओं को एक साथ सीमेंट की तरह चिपकाकर रखती है।"
    },
    {
        question: "प्रश्न 6. कोशिका भित्ति का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "प्रोटीन संश्लेषण", correct: false },
            { text: "आनुवंशिक पदार्थों का भंडारण", correct: false },
            { text: "कोशिका को निश्चित आकार और संरचनात्मक सहारा देना", correct: true },
            { text: "ऊर्जा का उत्पादन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशिका भित्ति एक कठोर परत होती है जो कोशिका को एक निश्चित आकार देती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और उसे यांत्रिक क्षति तथा परासरणी दाब से बचाती है।"
    },
    {
        question: "प्रश्न 7. ग्राम-पॉजिटिव और ग्राम-नेगेटिव बैक्टीरिया में अंतर का आधार क्या है?",
        answers: shuffle([
            { text: "केंद्रक की संरचना", correct: false },
            { text: "कोशिका भित्ति की संरचना", correct: true },
            { text: "राइबोसोम का प्रकार", correct: false },
            { text: "कशाभिका (flagella) की उपस्थिति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्राम-पॉजिटिव बैक्टीरिया की कोशिका भित्ति में पेप्टिडोग्लाइकन की मोटी परत होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जबकि ग्राम-नेगेटिव बैक्टीरिया में इसकी पतली परत होती है और एक बाहरी झिल्ली भी होती है।"
    },
    {
        question: "प्रश्न 8. कोशिका भित्ति की प्रकृति कैसी होती है?",
        answers: shuffle([
            { text: "चयनात्मक पारगम्य (Selectively permeable)", correct: false },
            { text: "अर्ध-पारगम्य (Semi-permeable)", correct: false },
            { text: "पूर्ण पारगम्य (Fully permeable)", correct: true },
            { text: "अपारगम्य (Impermeable)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशिका भित्ति पूरी तरह से पारगम्य होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसका अर्थ है कि यह जल और छोटे विलेय अणुओं को अपने आर-पार स्वतंत्र रूप से जाने देती है।"
    },
    {
        question: "प्रश्न 9. पादप कोशिकाओं के बीच जीवद्रव्यी सम्बन्ध (cytoplasmic connections) क्या कहलाते हैं?",
        answers: shuffle([
            { text: "डेस्मोसोम", correct: false },
            { text: "टाइट जंक्शन", correct: false },
            { text: "प्लाज्मोडेस्मेटा (जीवद्रव्य तंतु)", correct: true },
            { text: "गैप जंक्शन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्लाज्मोडेस्मेटा कोशिका भित्ति में मौजूद सूक्ष्म चैनल होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो पड़ोसी पादप कोशिकाओं के जीवद्रव्य को जोड़ते हैं, जिससे संचार और परिवहन संभव होता है।"
    },
    {
        question: "प्रश्न 10. लकड़ी को कठोरता प्रदान करने वाला रासायनिक पदार्थ कौन सा है जो द्वितीयक कोशिका भित्ति में जमा होता है?",
        answers: shuffle([
            { text: "पेक्टिन", correct: false },
            { text: "सुबेरिन", correct: false },
            { text: "लिग्निन", correct: true },
            { text: "क्यूटिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिग्निन एक जटिल बहुलक है जो पादपों की द्वितीयक कोशिका भित्ति में जमा होकर उसे कठोरता, मजबूती और जलरोधी क्षमता प्रदान करता है।"
    },
    {
        question: "प्रश्न 11. शैवाल (Algae) की कोशिका भित्ति में सेलूलोज के अलावा और क्या पाया जाता है?",
        answers: shuffle([
            { text: "काइटिन और पेक्टिन", correct: false },
            { text: "गैलेक्टन्स, मैनन्स और कैल्शियम कार्बोनेट", correct: true },
            { text: "केवल पेप्टिडोग्लाइकन", correct: false },
            { text: "केवल सुबेरिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शैवाल की कोशिका भित्ति सेलूलोज, गैलेक्टन्स, मैनन्स और कुछ मामलों में कैल्शियम कार्बोनेट जैसे खनिजों से बनी होती है।"
    },
    {
        question: "प्रश्न 12. प्लाज्मोलाइसिस (जीवद्रव्य कुंचन) की प्रक्रिया में, कोशिका का कौन सा भाग सिकुड़ता है?",
        answers: shuffle([
            { text: "केवल कोशिका भित्ति", correct: false },
            { text: "कोशिका झिल्ली और जीवद्रव्य", correct: true },
            { text: "केवल केंद्रक", correct: false },
            { text: "पूरी कोशिका, भित्ति सहित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कोशिका को अतिपरासारी विलयन में रखा जाता है, तो जल बाहर निकल जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे जीवद्रव्य और कोशिका झिल्ली सिकुड़कर कोशिका भित्ति से अलग हो जाते हैं। कोशिका भित्ति अपनी जगह पर बनी रहती है।"
    },
    {
        question: "प्रश्न 13. नई पादप कोशिका भित्ति का निर्माण कोशिका विभाजन की किस अवस्था में होता है?",
        answers: shuffle([
            { text: "प्रोफेज", correct: false },
            { text: "मेटाफेज", correct: false },
            { text: "एनाफेज", correct: false },
            { text: "टीलोफेज (अंत्यावस्था)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पादप कोशिका विभाजन के अंत में (टीलोफेज), कोशिका प्लेट (cell plate) का निर्माण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो बाद में मध्य पटलिका और नई कोशिका भित्ति में विकसित होती है।"
    },
    {
        question: "प्रश्न 14. कौन सा एंजाइम जीवाणु की कोशिका भित्ति को तोड़ सकता है?",
        answers: shuffle([
            { text: "लाइपेज", correct: false },
            { text: "एमाइलेज", correct: false },
            { text: "लाइसोजाइम", correct: true },
            { text: "प्रोटीज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाइसोजाइम एक एंजाइम है (जो आंसू, लार में पाया जाता है)।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो बैक्टीरिया की कोशिका भित्ति के पेप्टिडोग्लाइकन को तोड़कर उसे नष्ट कर देता है।"
    },
    {
        question: "प्रश्न 15. पादप कोशिका की सबसे बाहरी परत क्या है?",
        answers: shuffle([
            { text: "कोशिका झिल्ली", correct: false },
            { text: "टोनोप्लास्ट", correct: false },
            { text: "कोशिका भित्ति", correct: true },
            { text: "केंद्रक झिल्ली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पादप कोशिका में, कोशिका झिल्ली के बाहर एक कठोर कोशिका भित्ति होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो इसकी सबसे बाहरी परत है।"
    },
    {
        question: "प्रश्न 16. कोशिका भित्ति रहित कोशिका को क्या कहते हैं?",
        answers: shuffle([
            { text: "प्रोटोप्लास्ट", correct: true },
            { text: "प्रोटोप्लाज्म", correct: false },
            { text: "साइटोप्लास्ट", correct: false },
            { text: "टोनोप्लास्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब किसी पादप, कवक या जीवाणु कोशिका से उसकी कोशिका भित्ति को एंजाइम द्वारा हटा दिया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  तो शेष बची संरचना को प्रोटोप्लास्ट कहते हैं।"
    },
    {
        question: "प्रश्न 17. फलों को पकाने पर वे नरम क्यों हो जाते हैं?",
        answers: shuffle([
            { text: "लिग्निन के जमाव के कारण", correct: false },
            { text: "मध्य पटलिका में पेक्टिन के घुलने के कारण", correct: true },
            { text: "सेलूलोज के बढ़ने के कारण", correct: false },
            { text: "सुबेरिन के जमाव के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फल पकने के दौरान, एंजाइम मध्य पटलिका में मौजूद पेक्टिन को घोल देते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे कोशिकाएं एक-दूसरे से अलग होने लगती हैं और फल नरम पड़ जाता है।"
    },
    {
        question: "प्रश्न 18. पेनिसिलिन एंटीबायोटिक किस पर हमला करके बैक्टीरिया को मारती है?",
        answers: shuffle([
            { text: "DNA संश्लेषण पर", correct: false },
            { text: "कोशिका भित्ति के निर्माण पर", correct: true },
            { text: "प्रोटीन संश्लेषण पर", correct: false },
            { text: "कोशिका झिल्ली पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेनिसिलिन बैक्टीरिया में पेप्टिडोग्लाइकन के संश्लेषण को रोक देती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे नई कोशिका भित्ति नहीं बन पाती और बैक्टीरिया परासरणी दाब के कारण फट जाता है।"
    },
    {
        question: "प्रश्न 19. डायटम (Diatoms) की कोशिका भित्ति में कौन सा पदार्थ जमा होता है?",
        answers: shuffle([
            { text: "कैल्शियम कार्बोनेट", correct: false },
            { text: "सिलिका", correct: true },
            { text: "लिग्निन", correct: false },
            { text: "काइटिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डायटम, जो एक प्रकार के शैवाल हैं, उनकी कोशिका भित्ति सिलिका (रेत का मुख्य घटक) से बनी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो उन्हें एक कठोर, कांच जैसी संरचना प्रदान करती है।"
    },
    {
        question: "प्रश्न 20. पादप कोशिका की प्राथमिक भित्ति की क्या विशेषता है?",
        answers: shuffle([
            { text: "यह मोटी और कठोर होती है", correct: false },
            { text: "यह पतली, लचीली और वृद्धि में सक्षम होती है", correct: true },
            { text: "इसमें लिग्निन का जमाव होता है", correct: false },
            { text: "यह अपारगम्य होती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> युवा और बढ़ती हुई पादप कोशिकाओं में प्राथमिक भित्ति पाई जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो पतली और लचीली होती है ताकि कोशिका का विस्तार हो सके।"
    },
    {
        question: "प्रश्न 21. द्वितीयक कोशिका भित्ति कहाँ स्थित होती है?",
        answers: shuffle([
            { text: "मध्य पटलिका के बाहर", correct: false },
            { text: "प्राथमिक भित्ति के बाहर", correct: false },
            { text: "प्राथमिक भित्ति और कोशिका झिल्ली के बीच", correct: true },
            { text: "कोशिका झिल्ली के अंदर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशिका की वृद्धि रुकने के बाद, प्राथमिक भित्ति के अंदर की तरफ (कोशिका झिल्ली की ओर) मोटी और कठोर द्वितीयक भित्ति का निर्माण होता है।"
    },
    {
        question: "प्रश्न 22. कॉर्क कोशिकाओं की भित्ति में कौन सा मोमी पदार्थ जमा होता है जो उन्हें जलरोधी बनाता है?",
        answers: shuffle([
            { text: "पेक्टिन", correct: false },
            { text: "क्यूटिन", correct: false },
            { text: "लिग्निन", correct: false },
            { text: "सुबेरिन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कॉर्क (छाल) की कोशिकाओं की भित्ति में सुबेरिन नामक मोमी पदार्थ जमा हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो उन्हें जल और गैसों के लिए अपारगम्य बनाता है।"
    },
    {
        question: "प्रश्न 23. कोशिका भित्ति का कौन सा गुण उसे परासरणी फटने (osmotic lysis) से बचाता है?",
        answers: shuffle([
            { text: "पारगम्यता", correct: false },
            { text: "लचीलापन", correct: false },
            { text: "कठोरता (Rigidity)", correct: true },
            { text: "रंगहीनता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशिका भित्ति की मजबूती और कठोरता कोशिका को बहुत अधिक पानी लेने (अल्पपरासारी विलयन में) और फटने से रोकती है।"
    },
    {
        question: "प्रश्न 24. आर्कीबैक्टीरिया (Archaebacteria) की कोशिका भित्ति में क्या पाया जाता है?",
        answers: shuffle([
            { text: "पेप्टिडोग्लाइकन", correct: false },
            { text: "स्यूडोपेप्टिडोग्लाइकन (Pseudopeptidoglycan)", correct: true },
            { text: "काइटिन", correct: false },
            { text: "सेलूलोज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आर्कीबैक्टीरिया की कोशिका भित्ति सामान्य बैक्टीरिया से भिन्न होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और इसमें पेप्टिडोग्लाइकन के स्थान पर स्यूडोपेप्टिडोग्लाइकन या प्रोटीन (S-layer) पाया जाता है।"
    },
    {
        question: "प्रश्न 25. कोशिका प्लेट (Cell Plate) के निर्माण में कौन सा कोशिकांग मदद करता है?",
        answers: shuffle([
            { text: "राइबोसोम", correct: false },
            { text: "लाइसोसोम", correct: false },
            { text: "माइटोकॉन्ड्रिया", correct: false },
            { text: "गॉल्जी काय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पादप कोशिका विभाजन के दौरान गॉल्जी काय से निकली पुटिकाएं (vesicles) कोशिका के मध्य में एकत्रित होकर कोशिका प्लेट बनाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो बाद में कोशिका भित्ति में परिवर्तित हो जाती है।"
    },
    {
        question: "प्रश्न 26. किस समूह के जीवों में कोशिका भित्ति पूरी तरह से अनुपस्थित होती है?",
        answers: shuffle([
            { text: "बैक्टीरिया", correct: false },
            { text: "माइकोप्लाज्मा", correct: true },
            { text: "कवक", correct: false },
            { text: "शैवाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माइकोप्लाज्मा सबसे छोटी ज्ञात कोशिकाएं हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और इनमें कोशिका भित्ति का पूर्ण अभाव होता है, जिसके कारण ये अपना आकार बदल सकती हैं।"
    },
    {
        question: "प्रश्न 27. हेमिसेलूलोज (Hemicellulose) कहाँ पाया जाता है?",
        answers: shuffle([
            { text: "कवक की कोशिका भित्ति में", correct: false },
            { text: "जीवाणु की कोशिका भित्ति में", correct: false },
            { text: "पादप की कोशिका भित्ति में", correct: true },
            { text: "जंतु की कोशिका झिल्ली में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेमिसेलूलोज एक अन्य पॉलीसेकेराइड है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो पादप कोशिका भित्ति के मैट्रिक्स में सेलूलोज माइक्रोफाइब्रिल्स को पेक्टिन के साथ जोड़ने का काम करता है।"
    },
    {
        question: "प्रश्न 28. पादप कोशिका भित्ति का निर्माण किस विधि से होता है?",
        answers: shuffle([
            { text: "कणाधान (Intussusception) और स्तराधान (Apposition)", correct: true },
            { text: "केवल विसरण", correct: false },
            { text: "केवल परासरण", correct: false },
            { text: "केवल मुकुलन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्राथमिक भित्ति का निर्माण कणाधान (अंदर से पदार्थ जमा होना) और द्वितीयक भित्ति का निर्माण स्तराधान (सतह पर परतें जमना) द्वारा होता है।"
    },
    {
        question: "प्रश्न 29. कोशिका भित्ति के अध्ययन के लिए किस उपकरण का प्रयोग किया जाता है?",
        answers: shuffle([
            { text: "केवल साधारण सूक्ष्मदर्शी", correct: false },
            { text: "इलेक्ट्रॉन सूक्ष्मदर्शी", correct: true },
            { text: "टेलीस्कोप", correct: false },
            { text: "बैरोमीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशिका भित्ति की अति सूक्ष्म संरचना (जैसे सेलूलोज माइक्रोफाइब्रिल्स) को देखने के लिए उच्च आवर्धन क्षमता वाले इलेक्ट्रॉन सूक्ष्मदर्शी की आवश्यकता होती है।"
    },
    {
        question: "प्रश्न 30. कोशिका भित्ति को पचाने वाले एंजाइमों के समूह को क्या कहा जाता है?",
        answers: shuffle([
            { text: "सेल्युलेज, पेक्टिनेज", correct: true },
            { text: "लाइपेज, प्रोटीज", correct: false },
            { text: "एमाइलेज, लैक्टेज", correct: false },
            { text: "पोलीमरेज़, लाइगेज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेल्युलेज एंजाइम सेलूलोज को और पेक्टिनेज एंजाइम पेक्टिन को तोड़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इन एंजाइमों का उपयोग प्रोटोप्लास्ट तैयार करने के लिए किया जाता है।"
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