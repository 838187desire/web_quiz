const questions = [
    {
        topHeading: "हार्मोन और उनके कार्यों पर आधारित 50 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'मास्टर ग्रंथि' (Master Gland) के रूप में किस ग्रंथि को जाना जाता है?",
        answers: shuffle([
            { text: "थायरॉइड ग्रंथि", correct: false },
            { text: "अधिवृक्क ग्रंथि", correct: false },
            { text: "पीयूष ग्रंथि (Pituitary Gland)", correct: true },
            { text: "अग्न्याशय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीयूष ग्रंथि अन्य कई महत्वपूर्ण अंतःस्रावी ग्रंथियों (जैसे थायरॉइड, अधिवृक्क) के कार्यों को नियंत्रित करती है, इसीलिए इसे 'मास्टर ग्रंथि' कहा जाता है।"
    },
    {
        question: "प्रश्न 2. इंसुलिन (Insulin) हार्मोन का उत्पादन कहाँ होता है?",
        answers: shuffle([
            { text: "यकृत", correct: false },
            { text: "पीयूष ग्रंथि", correct: false },
            { text: "अग्न्याशय की लैंगरहैंस की द्वीपिकाएं", correct: true },
            { text: "थायरॉइड ग्रंथि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंसुलिन का स्राव अग्न्याशय (Pancreas) में स्थित लैंगरहैंस की द्वीपिकाओं की बीटा-कोशिकाओं (β-cells) द्वारा होता है।"
    },
    {
        question: "प्रश्न 3. कौन सा हार्मोन रक्त में कैल्शियम के स्तर को नियंत्रित करता है?",
        answers: shuffle([
            { text: "थायरोक्सिन", correct: false },
            { text: "पैराथाइरॉइड हार्मोन (पैराथर्मोन)", correct: true },
            { text: "इंसुलिन", correct: false },
            { text: "एड्रेनालाईन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पैराथाइरॉइड ग्रंथि द्वारा स्रावित पैराथर्मोन (PTH) रक्त में कैल्शियम की कमी होने पर हड्डियों से कैल्शियम निकालकर रक्त में इसके स्तर को बढ़ाता है।"
    },
    {
        question: "प्रश्न 4. 'लड़ो या भागो' (Fight or Flight) हार्मोन किसे कहा जाता है?",
        answers: shuffle([
            { text: "ऑक्सीटोसिन", correct: false },
            { text: "एस्ट्रोजन", correct: false },
            { text: "एड्रेनालाईन (एपिनेफ्रीन)", correct: true },
            { text: "इंसुलिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एड्रेनालाईन हार्मोन अधिवृक्क मेडुला द्वारा स्रावित होता है और यह शरीर को तनाव, भय या आपातकालीन स्थितियों का सामना करने के लिए तैयार करता है।"
    },
    {
        question: "प्रश्न 5. वृद्धि हार्मोन (Growth Hormone - GH) का स्राव किस ग्रंथि से होता है?",
        answers: shuffle([
            { text: "पीयूष ग्रंथि", correct: true },
            { text: "थाइमस ग्रंथि", correct: false },
            { text: "पीनियल ग्रंथि", correct: false },
            { text: "अधिवृक्क ग्रंथि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृद्धि हार्मोन (सोमैटोट्रोपिन) का स्राव अग्र पीयूष ग्रंथि (Anterior Pituitary) द्वारा किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो शरीर की सामान्य वृद्धि, विशेषकर हड्डियों की वृद्धि के लिए आवश्यक है।"
    },
    {
        question: "प्रश्न 6. आयोडीन की कमी से कौन सा रोग होता है?",
        answers: shuffle([
            { text: "मधुमेह", correct: false },
            { text: "स्कर्वी", correct: false },
            { text: "घेंघा (Goitre)", correct: true },
            { text: "रिकेट्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आयोडीन, थायरॉइड ग्रंथि द्वारा थायरोक्सिन हार्मोन के निर्माण के लिए आवश्यक है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी कमी से थायरॉइड ग्रंथि में सूजन आ जाती है, जिसे घेंघा रोग कहते हैं।"
    },
    {
        question: "प्रश्न 7. कौन सा हार्मोन 'लव हार्मोन' (Love Hormone) के रूप में भी जाना जाता है?",
        answers: shuffle([
            { text: "प्रोलैक्टिन", correct: false },
            { text: "ऑक्सीटोसिन", correct: true },
            { text: "प्रोजेस्टेरोन", correct: false },
            { text: "टेस्टोस्टेरोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑक्सीटोसिन सामाजिक बंधन, विश्वास और मातृत्व व्यवहार को बढ़ावा देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रसव के दौरान गर्भाशय के संकुचन और दुग्ध स्राव को भी प्रेरित करता है।"
    },
    {
        question: "प्रश्न 8. रक्त शर्करा (Blood Sugar) को कम करने वाला हार्मोन कौन सा है?",
        answers: shuffle([
            { text: "ग्लूकागन", correct: false },
            { text: "इंसुलिन", correct: true },
            { text: "थायरोक्सिन", correct: false },
            { text: "कोर्टिसोल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंसुलिन शरीर की कोशिकाओं को रक्त से ग्लूकोज लेने के लिए उत्तेजित करता है और यकृत में ग्लूकोज को ग्लाइकोजन के रूप में संग्रहीत करने में मदद करता है, जिससे रक्त शर्करा का स्तर कम होता है।"
    },
    {
        question: "प्रश्न 9. पुरुषों में द्वितीयक यौन लक्षणों (Secondary sexual characters) के लिए कौन सा हार्मोन जिम्मेदार है?",
        answers: shuffle([
            { text: "एस्ट्रोजन", correct: false },
            { text: "प्रोजेस्टेरोन", correct: false },
            { text: "टेस्टोस्टेरोन", correct: true },
            { text: "प्रोलैक्टिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृषण (Testes) द्वारा उत्पादित टेस्टोस्टेरोन पुरुषों में दाढ़ी-मूंछ का आना, आवाज का भारी होना और मांसपेशियों के विकास जैसे द्वितीयक यौन लक्षणों के लिए उत्तरदायी है।"
    },
    {
        question: "प्रश्न 10. नींद और जागने के चक्र (Sleep-wake cycle) को कौन सा हार्मोन नियंत्रित करता है?",
        answers: shuffle([
            { text: "सेरोटोनिन", correct: false },
            { text: "मेलाटोनिन", correct: true },
            { text: "डोपामाइन", correct: false },
            { text: "एड्रेनालाईन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीनियल ग्रंथि द्वारा स्रावित मेलाटोनिन शरीर की जैविक घड़ी (Circadian rhythm) को नियंत्रित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह नींद और जागने के पैटर्न को निर्धारित करती है।"
    },
    {
        question: "प्रश्न 11. एंटीडाययूरेटिक हार्मोन (ADH) का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "रक्तचाप बढ़ाना", correct: false },
            { text: "वृक्क द्वारा जल के पुनरवशोषण को बढ़ाना", correct: true },
            { text: "रक्त शर्करा कम करना", correct: false },
            { text: "पाचन को उत्तेजित करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ADH (वैसोप्रेसिन) वृक्क की नलिकाओं से जल के पुनरवशोषण को बढ़ाकर शरीर में जल संतुलन बनाए रखने में मदद करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे मूत्र सांद्र होता है।"
    },
    {
        question: "प्रश्न 12. महिलाओं में मासिक धर्म चक्र (Menstrual cycle) को कौन से हार्मोन नियंत्रित करते हैं?",
        answers: shuffle([
            { text: "केवल एस्ट्रोजन", correct: false },
            { text: "केवल प्रोजेस्टेरोन", correct: false },
            { text: "एस्ट्रोजन और प्रोजेस्टेरोन दोनों", correct: true },
            { text: "टेस्टोस्टेरोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एस्ट्रोजन और प्रोजेस्टेरोन, FSH और LH के साथ मिलकर, अंडाशय और गर्भाशय में होने वाले चक्रीय परिवर्तनों को नियंत्रित करते हैं।"
    },
    {
        question: "प्रश्न 13. अधिवृक्क ग्रंथि (Adrenal Gland) कहाँ स्थित होती है?",
        answers: shuffle([
            { text: "मस्तिष्क में", correct: false },
            { text: "गर्दन में", correct: false },
            { text: "वृक्क (गुर्दे) के ऊपर", correct: true },
            { text: "उदर गुहा में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्येक वृक्क के ऊपरी सिरे पर एक टोपी जैसी संरचना होती है, जिसे अधिवृक्क ग्रंथि कहते हैं।"
    },
    {
        question: "प्रश्न 14. शरीर की चयापचय दर (Metabolic rate) को नियंत्रित करने वाला मुख्य हार्मोन कौन सा है?",
        answers: shuffle([
            { text: "इंसुलिन", correct: false },
            { text: "थायरोक्सिन", correct: true },
            { text: "ग्लूकागन", correct: false },
            { text: "कोर्टिसोल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थायरॉइड ग्रंथि द्वारा स्रावित थायरोक्सिन (T4) और ट्राईआयोडोथायरोनिन (T3) शरीर की बेसल मेटाबोलिक रेट (BMR) को नियंत्रित करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ऊर्जा उत्पादन के लिए महत्वपूर्ण है।"
    },
    {
        question: "प्रश्न 15. दुग्ध उत्पादन (Milk production) के लिए कौन सा हार्मोन उत्तेजित करता है?",
        answers: shuffle([
            { text: "ऑक्सीटोसिन", correct: false },
            { text: "एस्ट्रोजन", correct: false },
            { text: "प्रोलैक्टिन", correct: true },
            { text: "प्रोजेस्टेरोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अग्र पीयूष ग्रंथि से स्रावित प्रोलैक्टिन हार्मोन प्रसव के बाद स्तन ग्रंथियों को दूध का उत्पादन करने के लिए उत्तेजित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> (ध्यान दें: ऑक्सीटोसिन दूध के निष्कासन में मदद करता है)।"
    },
    {
        question: "प्रश्न 16. रक्त शर्करा को बढ़ाने वाला हार्मोन कौन सा है?",
        answers: shuffle([
            { text: "इंसुलिन", correct: false },
            { text: "एल्डोस्टेरोन", correct: false },
            { text: "ग्लूकागन", correct: true },
            { text: "सोमैटोस्टेटिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब रक्त में ग्लूकोज का स्तर कम हो जाता है, तो अग्न्याशय की अल्फा-कोशिकाएं (α-cells) ग्लूकागन स्रावित करती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह यकृत को संग्रहीत ग्लाइकोजन को ग्लूकोज में तोड़ने का संकेत देता है।"
    },
    {
        question: "प्रश्न 17. 'आपातकालीन हार्मोन' (Emergency Hormone) किसे कहा जाता है?",
        answers: shuffle([
            { text: "थायरोक्सिन", correct: false },
            { text: "एड्रेनालाईन", correct: true },
            { text: "इंसुलिन", correct: false },
            { text: "ऑक्सीटोसिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एड्रेनालाईन शरीर को तत्काल ऊर्जा प्रदान करके और हृदय गति बढ़ाकर आपातकालीन स्थितियों के लिए तैयार करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इसे आपातकालीन हार्मोन भी कहते हैं।"
    },
    {
        question: "प्रश्न 18. कौन सी ग्रंथि अंतःस्रावी (Endocrine) और बहिःस्रावी (Exocrine) दोनों के रूप में कार्य करती है?",
        answers: shuffle([
            { text: "पीयूष ग्रंथि", correct: false },
            { text: "थायरॉइड ग्रंथि", correct: false },
            { text: "अग्न्याशय (Pancreas)", correct: true },
            { text: "अधिवृक्क ग्रंथि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अग्न्याशय एक मिश्रित ग्रंथि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका बहिःस्रावी भाग पाचन एंजाइमों का स्राव करता है, जबकि अंतःस्रावी भाग (लैंगरहैंस की द्वीपिकाएं) इंसुलिन और ग्लूकागन जैसे हार्मोन का स्राव करता है।"
    },
    {
        question: "प्रश्न 19. शरीर में लवण और जल संतुलन को कौन सा हार्मोन नियंत्रित करता है?",
        answers: shuffle([
            { text: "कोर्टिसोल", correct: false },
            { text: "एल्डोस्टेरोन", correct: true },
            { text: "एड्रेनालाईन", correct: false },
            { text: "टेस्टोस्टेरोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिवृक्क कॉर्टेक्स द्वारा स्रावित एल्डोस्टेरोन, वृक्क को सोडियम (लवण) का पुनरवशोषण करने और पोटेशियम का उत्सर्जन करने का निर्देश देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इससे रक्तचाप और जल संतुलन नियंत्रित होता है।"
    },
    {
        question: "प्रश्न 20. बच्चों में वृद्धि हार्मोन की कमी से कौन सा रोग होता है?",
        answers: shuffle([
            { text: "भीमकायता (Gigantism)", correct: false },
            { text: "बौनापन (Dwarfism)", correct: true },
            { text: "एक्रोमिगेली", correct: false },
            { text: "घेंघा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि बचपन में वृद्धि हार्मोन का स्राव अपर्याप्त होता है, तो हड्डियों और शरीर की वृद्धि रुक जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे व्यक्ति बौना रह जाता है।"
    },
    {
        question: "प्रश्न 21. एस्ट्रोजन हार्मोन का उत्पादन मुख्य रूप से कहाँ होता है?",
        answers: shuffle([
            { text: "अंडाशय (Ovary)", correct: true },
            { text: "वृषण (Testis)", correct: false },
            { text: "अधिवृक्क ग्रंथि", correct: false },
            { text: "पीयूष ग्रंथि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एस्ट्रोजन मुख्य रूप से अंडाशय के फॉलिकल्स द्वारा उत्पादित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह महिलाओं में द्वितीयक यौन लक्षणों और मासिक धर्म चक्र के नियमन के लिए जिम्मेदार है।"
    },
    {
        question: "प्रश्न 22. कौन सा हार्मोन शरीर की प्रतिरक्षा प्रणाली के विकास में मदद करता है?",
        answers: shuffle([
            { text: "थाइमोसिन", correct: true },
            { text: "मेलाटोनिन", correct: false },
            { text: "रेनिन", correct: false },
            { text: "गैस्ट्रिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थाइमस ग्रंथि द्वारा स्रावित थाइमोसिन हार्मोन टी-लिम्फोसाइट्स (T-lymphocytes) नामक प्रतिरक्षा कोशिकाओं के विकास और परिपक्वता को बढ़ावा देता है।"
    },
    {
        question: "प्रश्न 23. गर्भावस्था को बनाए रखने के लिए कौन सा हार्मोन आवश्यक है?",
        answers: shuffle([
            { text: "एस्ट्रोजन", correct: false },
            { text: "प्रोजेस्टेरोन", correct: true },
            { text: "रिलैक्सिन", correct: false },
            { text: "HCG", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोजेस्टेरोन, जिसे 'प्रेग्नेंसी हार्मोन' भी कहा जाता है, गर्भाशय के अंतःस्तर (Endometrium) को भ्रूण के आरोपण और गर्भावस्था को बनाए रखने के लिए तैयार करता है।"
    },
    {
        question: "प्रश्न 24. कौन सा हार्मोन तनाव (Stress) हार्मोन कहलाता है?",
        answers: shuffle([
            { text: "सेरोटोनिन", correct: false },
            { text: "डोपामाइन", correct: false },
            { text: "कोर्टिसोल", correct: true },
            { text: "मेलाटोनिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोर्टिसोल अधिवृक्क कॉर्टेक्स द्वारा स्रावित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह लंबे समय तक के तनाव की प्रतिक्रिया में रक्त शर्करा को बढ़ाकर और सूजन को कम करके शरीर की मदद करता है।"
    },
    {
        question: "प्रश्न 25. पीयूष ग्रंथि के पश्च भाग (Posterior Pituitary) से कौन से हार्मोन स्रावित होते हैं?",
        answers: shuffle([
            { text: "GH और प्रोलैक्टिन", correct: false },
            { text: "TSH और ACTH", correct: false },
            { text: "ADH और ऑक्सीटोसिन", correct: true },
            { text: "FSH और LH", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ADH और ऑक्सीटोसिन का उत्पादन हाइपोथैलेमस में होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन इनका भंडारण और स्राव पश्च पीयूष ग्रंथि द्वारा किया जाता है।"
    },
    {
        question: "प्रश्न 26. मधुमेह (Diabetes Mellitus) किस हार्मोन की कमी या अक्रियाशीलता के कारण होता है?",
        answers: shuffle([
            { text: "ग्लूकागन", correct: false },
            { text: "थायरोक्सिन", correct: false },
            { text: "इंसुलिन", correct: true },
            { text: "एल्डोस्टेरोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब शरीर पर्याप्त इंसुलिन का उत्पादन नहीं करता या इसका प्रभावी ढंग से उपयोग नहीं कर पाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> तो रक्त में ग्लूकोज का स्तर बहुत अधिक हो जाता है, जिससे मधुमेह होता है।"
    },
    {
        question: "प्रश्न 27. कौन सा हार्मोन सीधे जीन को प्रभावित करके कार्य कर सकता है?",
        answers: shuffle([
            { text: "पेप्टाइड हार्मोन (जैसे इंसुलिन)", correct: false },
            { text: "स्टेरॉयड हार्मोन (जैसे एस्ट्रोजन)", correct: true },
            { text: "अमीनो एसिड डेरिवेटिव", correct: false },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्टेरॉयड हार्मोन वसा में घुलनशील होते हैं, इसलिए वे कोशिका झिल्ली को पार करके कोशिका के अंदर पहुँच सकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये सीधे केंद्रक में जीन की अभिव्यक्ति को नियंत्रित कर सकते हैं।"
    },
    {
        question: "प्रश्न 28. कैल्सीटोनिन (Calcitonin) हार्मोन का क्या कार्य है?",
        answers: shuffle([
            { text: "रक्त में कैल्शियम बढ़ाना", correct: false },
            { text: "रक्त में कैल्शियम कम करना", correct: true },
            { text: "रक्त में ग्लूकोज बढ़ाना", correct: false },
            { text: "रक्त में ग्लूकोज कम करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैल्सीटोनिन, जो थायरॉइड ग्रंथि द्वारा स्रावित होता है, पैराथर्मोन के विपरीत कार्य करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह रक्त में कैल्शियम का स्तर अधिक होने पर उसे हड्डियों में जमा करके कम करता है।"
    },
    {
        question: "प्रश्न 29. रेनिन (Renin) हार्मोन का स्राव कौन सा अंग करता है?",
        answers: shuffle([
            { text: "यकृत", correct: false },
            { text: "हृदय", correct: false },
            { text: "वृक्क (गुर्दा)", correct: true },
            { text: "आमाशय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब रक्तचाप कम होता है, तो वृक्क की कोशिकाएं रेनिन नामक एक एंजाइम (जो हार्मोन की तरह काम करता है) स्रावित करती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह रक्तचाप को बढ़ाने वाली प्रणाली को सक्रिय करता है।"
    },
    {
        question: "प्रश्न 30. बच्चों में वृद्धि हार्मोन का अत्यधिक स्राव क्या कहलाता है?",
        answers: shuffle([
            { text: "एक्रोमिगेली", correct: false },
            { text: "बौनापन", correct: false },
            { text: "भीमकायता (Gigantism)", correct: true },
            { text: "कुशिंग सिंड्रोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि बचपन में (जब हड्डियां बढ़ रही होती हैं) वृद्धि हार्मोन का अत्यधिक स्राव होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> तो हड्डियां असामान्य रूप से लंबी हो जाती हैं, जिससे शरीर का आकार बहुत बड़ा हो जाता है, इसे भीमकायता कहते हैं।"
    },
    {
        question: "प्रश्न 31. आमाशय द्वारा स्रावित कौन सा हार्मोन जठर रस के स्राव को उत्तेजित करता है?",
        answers: shuffle([
            { text: "सिक्रेटिन", correct: false },
            { text: "कोलेसिस्टोकाइनिन (CCK)", correct: false },
            { text: "गैस्ट्रिन", correct: true },
            { text: "सोमैटोस्टेटिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गैस्ट्रिन एक स्थानीय हार्मोन है जो भोजन के आमाशय में पहुँचने पर स्रावित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह आमाशय की दीवारों को हाइड्रोक्लोरिक एसिड और पेप्सिनोजेन का स्राव करने के लिए उत्तेजित करता है।"
    },
    {
        question: "प्रश्न 32. 'एडिसन रोग' (Addison's disease) किस हार्मोन के अल्पस्राव के कारण होता है?",
        answers: shuffle([
            { text: "थायरोक्सिन", correct: false },
            { text: "इंसुलिन", correct: false },
            { text: "कोर्टिसोल और एल्डोस्टेरोन", correct: true },
            { text: "वृद्धि हार्मोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एडिसन रोग तब होता है जब अधिवृक्क कॉर्टेक्स पर्याप्त मात्रा में कॉर्टिकोस्टेरॉइड्स (कोर्टिसोल और एल्डोस्टेरोन) का उत्पादन नहीं कर पाता है।"
    },
    {
        question: "प्रश्न 33. टी-कोशिकाओं (T-cells) की परिपक्वता के लिए कौन सी ग्रंथि आवश्यक है?",
        answers: shuffle([
            { text: "पीनियल ग्रंथि", correct: false },
            { text: "थायरॉइड ग्रंथि", correct: false },
            { text: "थाइमस ग्रंथि", correct: true },
            { text: "पैराथायरॉइड ग्रंथि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थाइमस ग्रंथि बचपन में सबसे अधिक सक्रिय होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह थाइमोसिन हार्मोन का स्राव करती है जो प्रतिरक्षा प्रणाली की टी-कोशिकाओं के विकास के लिए महत्वपूर्ण है।"
    },
    {
        question: "प्रश्न 34. कौन सा हार्मोन अंडोत्सर्ग (Ovulation) को प्रेरित करता है?",
        answers: shuffle([
            { text: "FSH (फॉलिकल-स्टिमुलेटिंग हार्मोन)", correct: false },
            { text: "LH (ल्यूटिनाइजिंग हार्मोन)", correct: true },
            { text: "प्रोजेस्टेरोन", correct: false },
            { text: "प्रोलैक्टिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मासिक धर्म चक्र के मध्य में LH के स्तर में अचानक वृद्धि (LH surge) अंडाशय को परिपक्व डिम्ब (Ovum) को छोड़ने के लिए प्रेरित करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रक्रिया को अंडोत्सर्ग कहते हैं।"
    },
    {
        question: "प्रश्न 35. हृदय द्वारा स्रावित हार्मोन जो रक्तचाप को कम करता है, वह कौन सा है?",
        answers: shuffle([
            { text: "रेनिन", correct: false },
            { text: "एरिथ्रोपोइटिन", correct: false },
            { text: "एट्रियल नैट्रीयूरेटिक फैक्टर (ANF)", correct: true },
            { text: "एंजियोटेंसिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब रक्तचाप बढ़ता है, तो हृदय की आलिंद (Atria) की दीवारें ANF स्रावित करती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह रक्त वाहिकाओं को फैलाकर और वृक्क द्वारा सोडियम और जल के उत्सर्जन को बढ़ाकर रक्तचाप को कम करता है।"
    },
    {
        question: "प्रश्न 36. एक्रोमिगेली (Acromegaly) रोग का क्या कारण है?",
        answers: shuffle([
            { text: "वयस्क अवस्था में वृद्धि हार्मोन का अत्यधिक स्राव", correct: true },
            { text: "बचपन में वृद्धि हार्मोन का अत्यधिक स्राव", correct: false },
            { text: "वयस्क अवस्था में थायरोक्सिन की कमी", correct: false },
            { text: "बचपन में थायरोक्सिन की अधिकता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब वयस्क अवस्था में (हड्डियों की लंबाई बढ़ना बंद होने के बाद) वृद्धि हार्मोन का स्राव बढ़ जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> तो चेहरे, हाथ और पैरों की हड्डियां चौड़ी और मोटी हो जाती हैं, इस स्थिति को एक्रोमिगेली कहते हैं।"
    },
    {
        question: "प्रश्न 37. निम्न में से कौन सा एक स्टेरॉयड हार्मोन नहीं है?",
        answers: shuffle([
            { text: "कोर्टिसोल", correct: false },
            { text: "टेस्टोस्टेरोन", correct: false },
            { text: "एस्ट्रोजन", correct: false },
            { text: "इंसुलिन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंसुलिन एक पेप्टाइड हार्मोन है, जो अमीनो एसिड की श्रृंखला से बना होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> कोर्टिसोल, टेस्टोस्टेरोन और एस्ट्रोजन कोलेस्ट्रॉल से व्युत्पन्न स्टेरॉयड हार्मोन हैं।"
    },
    {
        question: "प्रश्न 38. सिक्रेटिन (Secretin) हार्मोन का क्या कार्य है?",
        answers: shuffle([
            { text: "पित्ताशय को संकुचित करना", correct: false },
            { text: "आमाशय के स्राव को रोकना", correct: false },
            { text: "अग्न्याशय को बाइकार्बोनेट युक्त रस स्रावित करने के लिए उत्तेजित करना", correct: true },
            { text: "रक्त शर्करा को नियंत्रित करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब आमाशय से अम्लीय काइम छोटी आंत में प्रवेश करता है, तो सिक्रेटिन हार्मोन स्रावित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अग्न्याशय को बाइकार्बोनेट से भरपूर पाचक रस का उत्पादन करने के लिए प्रेरित करता है ताकि अम्ल को उदासीन किया जा सके।"
    },
    {
        question: "प्रश्न 39. कौन सी ग्रंथि केवल यौवन तक ही सक्रिय रहती है?",
        answers: shuffle([
            { text: "पीयूष ग्रंथि", correct: false },
            { text: "थाइमस ग्रंथि", correct: true },
            { text: "पीनियल ग्रंथि", correct: false },
            { text: "थायरॉइड ग्रंथि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थाइमस ग्रंथि जन्म के समय बड़ी होती है और यौवन तक बढ़ती है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसके बाद यह धीरे-धीरे सिकुड़ने लगती है और वसा ऊतक द्वारा प्रतिस्थापित हो जाती है।"
    },
    {
        question: "प्रश्न 40. लाल रक्त कोशिकाओं (RBC) के निर्माण को कौन सा हार्मोन बढ़ावा देता है?",
        answers: shuffle([
            { text: "थ्रोम्बोपोइटिन", correct: false },
            { text: "एरिथ्रोपोइटिन (EPO)", correct: true },
            { text: "रेनिन", correct: false },
            { text: "हेपरिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एरिथ्रोपोइटिन (EPO) मुख्य रूप से वृक्क द्वारा स्रावित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अस्थि मज्जा (Bone marrow) को लाल रक्त कोशिकाओं के उत्पादन के लिए उत्तेजित करता है।"
    },
    {
        question: "प्रश्न 41. 'कुशिंग सिंड्रोम' (Cushing's syndrome) किस हार्मोन के अतिस्राव के कारण होता है?",
        answers: shuffle([
            { text: "इंसुलिन", correct: false },
            { text: "थायरोक्सिन", correct: false },
            { text: "कोर्टिसोल", correct: true },
            { text: "पैराथर्मोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुशिंग सिंड्रोम शरीर में कोर्टिसोल हार्मोन के लंबे समय तक उच्च स्तर पर रहने के कारण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे उच्च रक्तचाप, वजन बढ़ना और त्वचा संबंधी समस्याएं होती हैं।"
    },
    {
        question: "प्रश्न 42. कौन सा हार्मोन एक न्यूरोट्रांसमीटर के रूप में भी कार्य करता है?",
        answers: shuffle([
            { text: "थायरोक्सिन", correct: false },
            { text: "इंसुलिन", correct: false },
            { text: "नॉरएड्रेनालाईन (नॉरएपिनेफ्रीन)", correct: true },
            { text: "प्रोजेस्टेरोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नॉरएड्रेनालाईन अधिवृक्क मेडुला द्वारा एक हार्मोन के रूप में और अनुकंपी तंत्रिका तंत्र में एक न्यूरोट्रांसमीटर के रूप में स्रावित होता है।"
    },
    {
        question: "प्रश्न 43. हाइपोथैलेमस द्वारा कौन सा हार्मोन उत्पादित होता है?",
        answers: shuffle([
            { text: "वृद्धि हार्मोन", correct: false },
            { text: "थायरॉइड-उत्तेजक हार्मोन (TSH)", correct: false },
            { text: "गोनैडोट्रोपिन-रिलीजिंग हार्मोन (GnRH)", correct: true },
            { text: "प्रोलैक्टिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाइपोथैलेमस कई रिलीजिंग और इन्हिबिटिंग हार्मोन का उत्पादन करता है जो पीयूष ग्रंथि के स्राव को नियंत्रित करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> GnRH पीयूष ग्रंथि को FSH और LH स्रावित करने का संकेत देता है।"
    },
    {
        question: "प्रश्न 44. 'हाइपरग्लाइसीमिया' (Hyperglycemia) का क्या अर्थ है?",
        answers: shuffle([
            { text: "रक्त में कैल्शियम का उच्च स्तर", correct: false },
            { text: "रक्त में पोटेशियम का उच्च स्तर", correct: false },
            { text: "रक्त में शर्करा (ग्लूकोज) का उच्च स्तर", correct: true },
            { text: "रक्त में यूरिया का उच्च स्तर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाइपरग्लाइसीमिया रक्त में शर्करा (ग्लूकोज) का उच्च स्तर है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मधुमेह का एक मुख्य लक्षण है, जो इंसुलिन की कमी या अप्रभावीता के कारण होता है।"
    },
    {
        question: "प्रश्न 45. शरीर की 'जैविक घड़ी' (Biological Clock) किस ग्रंथि से संबंधित है?",
        answers: shuffle([
            { text: "पीयूष ग्रंथि", correct: false },
            { text: "थाइमस ग्रंथि", correct: false },
            { text: "पीनियल ग्रंथि", correct: true },
            { text: "थायरॉइड ग्रंथि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीनियल ग्रंथि मेलाटोनिन का स्राव करती है जो शरीर के 24 घंटे के सर्कैडियन लय (जैसे नींद-जागना चक्र) को बनाए रखने में मदद करती है।"
    },
    {
        question: "प्रश्न 46. सोमैटोस्टेटिन (Somatostatin) हार्मोन का क्या कार्य है?",
        answers: shuffle([
            { text: "वृद्धि हार्मोन को उत्तेजित करना", correct: false },
            { text: "इंसुलिन और ग्लूकागन के स्राव को रोकना", correct: true },
            { text: "रक्तचाप को बढ़ाना", correct: false },
            { text: "पाचन को तेज करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोमैटोस्टेटिन अग्न्याशय और हाइपोथैलेमस द्वारा स्रावित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक निरोधात्मक (inhibitory) हार्मोन है जो कई अन्य हार्मोनों (इंसुलिन और ग्लूकागन सहित) के स्राव को नियंत्रित करता है।"
    },
    {
        question: "प्रश्न 47. मानव कोरियोनिक गोनाडोट्रोपिन (hCG) हार्मोन का क्या महत्व है?",
        answers: shuffle([
            { text: "यह दुग्ध उत्पादन शुरू करता है", correct: false },
            { text: "यह मासिक धर्म को नियंत्रित करता है", correct: false },
            { text: "यह गर्भावस्था परीक्षण में उपयोग होता है", correct: true },
            { text: "यह हड्डियों की वृद्धि करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> hCG हार्मोन गर्भावस्था के दौरान प्लेसेंटा द्वारा निर्मित होता है और यह मूत्र में उत्सर्जित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> गर्भावस्था परीक्षण किट मूत्र में इसी हार्मोन की उपस्थिति का पता लगाती हैं।"
    },
    {
        question: "प्रश्न 48. किस हार्मोन के अल्पस्राव से 'डायबिटीज इन्सिपिडस' होता है?",
        answers: shuffle([
            { text: "इंसुलिन", correct: false },
            { text: "ग्लूकागन", correct: false },
            { text: "एल्डोस्टेरोन", correct: false },
            { text: "ADH (एंटीडाययूरेटिक हार्मोन)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ADH की कमी से, वृक्क जल का पुनरवशोषण नहीं कर पाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे व्यक्ति को अत्यधिक प्यास लगती है और वह बड़ी मात्रा में पतला मूत्र उत्सर्जित करता है।"
    },
    {
        question: "प्रश्न 49. कोलेसिस्टोकाइनिन (CCK) हार्मोन का स्राव कहाँ होता है?",
        answers: shuffle([
            { text: "आमाशय", correct: false },
            { text: "छोटी आंत", correct: true },
            { text: "यकृत", correct: false },
            { text: "अग्न्याशय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> CCK छोटी आंत की दीवारों द्वारा वसा और प्रोटीन युक्त भोजन की प्रतिक्रिया में स्रावित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पित्ताशय के संकुचन और अग्न्याशय से एंजाइमों के स्राव को उत्तेजित करता है।"
    },
    {
        question: "प्रश्न 50. कौन सा हार्मोन द्वितीयक संदेशवाहक (Second Messenger) प्रणाली का उपयोग करता है?",
        answers: shuffle([
            { text: "कोर्टिसोल", correct: false },
            { text: "थायरोक्सिन", correct: false },
            { text: "एड्रेनालाईन", correct: true },
            { text: "टेस्टोस्टेरोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेप्टाइड हार्मोन और कैटेकोलामाइन (जैसे एड्रेनालाईन) कोशिका झिल्ली को पार नहीं कर सकते।<br><br><i class='fa-solid fa-angles-right icon'></i> वे झिल्ली पर रिसेप्टर्स से जुड़ते हैं और कोशिका के अंदर चक्रीय AMP (cAMP) जैसे द्वितीयक संदेशवाहकों को सक्रिय करते हैं।"
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