const questions = [
    {
        topHeading: "अंतःस्रावी तंत्र (ग्रंथियाँ) पर आधारित 50 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. मानव शरीर की किस ग्रंथि को 'मास्टर ग्रंथि' (Master Gland) कहा जाता है?",
        answers: shuffle([
            { text: "थायरॉयड ग्रंथि", correct: false },
            { text: "पीयूष ग्रंथि (Pituitary Gland)", correct: true },
            { text: "अधिवृक्क ग्रंथि", correct: false },
            { text: "अग्न्याशय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीयूष ग्रंथि कई अन्य महत्वपूर्ण अंतःस्रावी ग्रंथियों की गतिविधि को नियंत्रित करती है, इसीलिए इसे मास्टर ग्रंथि कहा जाता है।"
    },
    {
        question: "प्रश्न 2. वृद्धि हार्मोन (Growth Hormone - GH) का स्राव कहाँ से होता है?",
        answers: shuffle([
            { text: "पीयूष ग्रंथि के अग्र भाग से", correct: true },
            { text: "पीयूष ग्रंथि के पश्च भाग से", correct: false },
            { text: "थाइमस ग्रंथि से", correct: false },
            { text: "थायरॉयड ग्रंथि से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृद्धि हार्मोन, जो शरीर की वृद्धि और चयापचय को नियंत्रित करता है, अग्र पीयूष ग्रंथि (Anterior Pituitary) द्वारा स्रावित होता है।"
    },
    {
        question: "प्रश्न 3. कौन सा हार्मोन 'लड़ो या उड़ो' (Fight or Flight) प्रतिक्रिया के लिए जिम्मेदार है?",
        answers: shuffle([
            { text: "इंसुलिन", correct: false },
            { text: "थायरॉक्सिन", correct: false },
            { text: "एड्रेनालाईन (एपिनेफ्रीन)", correct: true },
            { text: "टेस्टोस्टेरोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तनाव या खतरे की स्थिति में, एड्रिनल मेडुला से स्रावित एड्रेनालाईन हार्मोन हृदय गति, रक्तचाप और ग्लूकोज के स्तर को बढ़ाकर शरीर को तत्काल कार्रवाई के लिए तैयार करता है।"
    },
    {
        question: "प्रश्न 4. इंसुलिन का उत्पादन शरीर के किस अंग में होता है?",
        answers: shuffle([
            { text: "यकृत", correct: false },
            { text: "प्लीहा", correct: false },
            { text: "अग्न्याशय (Pancreas)", correct: true },
            { text: "पित्ताशय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंसुलिन का उत्पादन अग्न्याशय में स्थित लैंगरहैंस के द्वीप (Islets of Langerhans) की बीटा-कोशिकाओं द्वारा किया जाता है।"
    },
    {
        question: "प्रश्न 5. आयोडीन की कमी से कौन सा रोग होता है?",
        answers: shuffle([
            { text: "स्कर्वी", correct: false },
            { text: "घेंघा (Goitre)", correct: true },
            { text: "रिकेट्स", correct: false },
            { text: "मधुमेह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आयोडीन थायरॉयड हार्मोन (थायरॉक्सिन) का एक आवश्यक घटक है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी कमी होने पर, थायरॉयड ग्रंथि हार्मोन बनाने के लिए अधिक मेहनत करती है, जिससे वह सूज जाती है, जिसे घेंघा कहते हैं।"
    },
    {
        question: "प्रश्न 6. कौन सी ग्रंथि अंतःस्रावी (Endocrine) और बहिःस्रावी (Exocrine) दोनों के रूप में कार्य करती है?",
        answers: shuffle([
            { text: "पीयूष ग्रंथि", correct: false },
            { text: "अधिवृक्क ग्रंथि", correct: false },
            { text: "अग्न्याशय", correct: true },
            { text: "थायरॉयड ग्रंथि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अग्न्याशय एक मिश्रित ग्रंथि है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अंतःस्रावी ग्रंथि के रूप में इंसुलिन और ग्लूकागन हार्मोन स्रावित करता है और बहिःस्रावी ग्रंथि के रूप में पाचन एंजाइमों का स्राव करता है।"
    },
    {
        question: "प्रश्न 7. रक्त में कैल्शियम और फॉस्फेट के स्तर को कौन सा हार्मोन नियंत्रित करता है?",
        answers: shuffle([
            { text: "A) पैराथाइरॉइड हार्मोन (पैराथॉर्मोन)", correct: false },
            { text: "B) कैल्सीटोनिन", correct: false },
            { text: "C) थायरॉक्सिन", correct: false },
            { text: "A) और B) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पैराथॉर्मोन रक्त में कैल्शियम के स्तर को बढ़ाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि कैल्सीटोनिन (थायरॉयड ग्रंथि द्वारा स्रावित) रक्त में कैल्शियम के स्तर को कम करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> दोनों मिलकर संतुलन बनाए रखते हैं।"
    },
    {
        question: "प्रश्न 8. नींद-जागने के चक्र (जैविक घड़ी) को नियंत्रित करने वाला हार्मोन 'मेलाटोनिन' कौन सी ग्रंथि स्रावित करती है?",
        answers: shuffle([
            { text: "पीयूष ग्रंथि", correct: false },
            { text: "पीनियल ग्रंथि", correct: true },
            { text: "थाइमस ग्रंथि", correct: false },
            { text: "अधिवृक्क ग्रंथि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीनियल ग्रंथि मेलाटोनिन का उत्पादन करती है, जो शरीर के सर्केडियन लय या नींद-जागने के चक्र को नियंत्रित करता है।"
    },
    {
        question: "प्रश्न 9. मधुमेह मेलेटस (Diabetes Mellitus) किस हार्मोन की कमी के कारण होता है?",
        answers: shuffle([
            { text: "ग्लूकागन", correct: false },
            { text: "एल्डोस्टेरोन", correct: false },
            { text: "थायरॉक्सिन", correct: false },
            { text: "इंसुलिन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंसुलिन की कमी या इसके प्रति शरीर की कोशिकाओं की असंवेदनशीलता के कारण रक्त में ग्लूकोज का स्तर बढ़ जाता है, जिससे मधुमेह होता है।"
    },
    {
        question: "प्रश्न 10. अधिवृक्क ग्रंथि (Adrenal Gland) कहाँ स्थित होती है?",
        answers: shuffle([
            { text: "मस्तिष्क में", correct: false },
            { text: "गले में", correct: false },
            { text: "वृक्क (किडनी) के ऊपर", correct: true },
            { text: "पेट में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्येक वृक्क के शीर्ष पर एक छोटी, त्रिकोणीय आकार की अधिवृक्क ग्रंथि स्थित होती है।"
    },
    {
        question: "प्रश्न 11. दुग्ध स्राव (Milk Ejection) के लिए कौन सा हार्मोन जिम्मेदार है?",
        answers: shuffle([
            { text: "प्रोलैक्टिन", correct: false },
            { text: "ऑक्सीटोसिन", correct: true },
            { text: "एस्ट्रोजन", correct: false },
            { text: "प्रोजेस्टेरोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोलैक्टिन दूध उत्पादन को उत्तेजित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि ऑक्सीटोसिन स्तन ग्रंथियों से दूध के स्राव या 'लेट-डाउन' को प्रेरित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे 'लव हार्मोन' भी कहते हैं।"
    },
    {
        question: "प्रश्न 12. पुरुषों में द्वितीयक यौन लक्षणों के विकास के लिए कौन सा हार्मोन उत्तरदायी है?",
        answers: shuffle([
            { text: "एस्ट्रोजन", correct: false },
            { text: "प्रोजेस्टेरोन", correct: false },
            { text: "टेस्टोस्टेरोन", correct: true },
            { text: "कॉर्टिसोल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टेस्टोस्टेरोन, जो वृषण (Testes) द्वारा निर्मित होता है, पुरुषों में दाढ़ी-मूंछ, भारी आवाज और मांसपेशियों के विकास जैसे लक्षणों के लिए जिम्मेदार है।"
    },
    {
        question: "प्रश्न 13. थाइमस ग्रंथि द्वारा उत्पादित हार्मोन का नाम क्या है, जो प्रतिरक्षा प्रणाली के विकास में मदद करता है?",
        answers: shuffle([
            { text: "थाइमोसिन", correct: true },
            { text: "थायरॉक्सिन", correct: false },
            { text: "मेलाटोनिन", correct: false },
            { text: "रेनिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थाइमोसिन हार्मोन T-लिम्फोसाइट्स (एक प्रकार की श्वेत रक्त कोशिका) के परिपक्वन को बढ़ावा देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये T-लिम्फोसाइट्स शरीर की प्रतिरक्षा के लिए महत्वपूर्ण हैं।"
    },
    {
        question: "प्रश्न 14. एंटीडाइयूरेटिक हार्मोन (ADH) का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "रक्त शर्करा बढ़ाना", correct: false },
            { text: "वृक्क द्वारा जल के पुनरवशोषण को बढ़ाना", correct: true },
            { text: "हृदय गति को बढ़ाना", correct: false },
            { text: "कैल्शियम के स्तर को कम करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ADH (या वैसोप्रेसिन) शरीर में पानी की कमी होने पर वृक्क की नलिकाओं से जल के पुनरवशोषण को बढ़ाकर शरीर में जल संतुलन बनाए रखता है।"
    },
    {
        question: "प्रश्न 15. महिलाओं में मासिक धर्म चक्र को नियंत्रित करने वाले मुख्य हार्मोन कौन से हैं?",
        answers: shuffle([
            { text: "टेस्टोस्टेरोन और इंसुलिन", correct: false },
            { text: "एस्ट्रोजन और प्रोजेस्टेरोन", correct: true },
            { text: "एड्रेनालाईन और कॉर्टिसोल", correct: false },
            { text: "थायरॉक्सिन और पैराथॉर्मोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंडाशय द्वारा उत्पादित ये दोनों हार्मोन गर्भाशय की परत के विकास और मासिक धर्म चक्र के विभिन्न चरणों को नियंत्रित करते हैं।"
    },
    {
        question: "प्रश्न 16. किस हार्मोन के अल्पस्राव के कारण बच्चों में 'बौनापन' (Dwarfism) हो जाता है?",
        answers: shuffle([
            { text: "थायरॉक्सिन", correct: false },
            { text: "वृद्धि हार्मोन (GH)", correct: true },
            { text: "इंसुलिन", correct: false },
            { text: "एड्रेनालाईन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बचपन के दौरान वृद्धि हार्मोन के अपर्याप्त स्राव से शरीर की सामान्य वृद्धि रुक जाती है, जिससे बौनापन होता है।"
    },
    {
        question: "प्रश्न 17. कौन सा हार्मोन रक्त शर्करा के स्तर को बढ़ाता है?",
        answers: shuffle([
            { text: "इंसुलिन", correct: false },
            { text: "ग्लूकागन", correct: true },
            { text: "सोमाटोस्टैटिन", correct: false },
            { text: "एल्डोस्टेरोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्लूकागन, जो अग्न्याशय की अल्फा-कोशिकाओं द्वारा स्रावित होता है, यकृत में संग्रहीत ग्लाइकोजन को ग्लूकोज में परिवर्तित करके रक्त शर्करा के स्तर को बढ़ाता है।"
    },
    {
        question: "प्रश्न 18. 'एडिसन रोग' (Addison's disease) किस ग्रंथि के हार्मोन के अपर्याप्त स्राव के कारण होता है?",
        answers: shuffle([
            { text: "थायरॉयड ग्रंथि", correct: false },
            { text: "अधिवृक्क वल्कुट (Adrenal Cortex)", correct: true },
            { text: "पीयूष ग्रंथि", correct: false },
            { text: "पैराथाइरॉइड ग्रंथि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एडिसन रोग तब होता है जब अधिवृक्क वल्कुट कॉर्टिसोल और एल्डोस्टेरोन जैसे आवश्यक हार्मोन का पर्याप्त मात्रा में उत्पादन नहीं कर पाता है।"
    },
    {
        question: "प्रश्न 19. कौन सा हार्मोन शरीर की चयापचय दर (Metabolic Rate) को नियंत्रित करता है?",
        answers: shuffle([
            { text: "वृद्धि हार्मोन", correct: false },
            { text: "थायरॉक्सिन", correct: true },
            { text: "मेलाटोनिन", correct: false },
            { text: "प्रोलैक्टिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थायरॉयड ग्रंथि द्वारा स्रावित थायरॉक्सिन हार्मोन शरीर की बेसल मेटाबोलिक रेट (BMR) को नियंत्रित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अर्थात शरीर आराम की स्थिति में कितनी ऊर्जा का उपयोग करता है।"
    },
    {
        question: "प्रश्न 20. पश्च पीयूष ग्रंथि (Posterior Pituitary) द्वारा कौन से हार्मोन स्रावित होते हैं?",
        answers: shuffle([
            { text: "GH और TSH", correct: false },
            { text: "FSH और LH", correct: false },
            { text: "ADH और ऑक्सीटोसिन", correct: true },
            { text: "प्रोलैक्टिन और ACTH", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये दोनों हार्मोन (ADH और ऑक्सीटोसिन) वास्तव में हाइपोथैलेमस में बनते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन पश्च पीयूष ग्रंथि में संग्रहीत और वहीं से रक्त में स्रावित होते हैं।"
    },
    {
        question: "प्रश्न 21. 'कुशिंग सिंड्रोम' (Cushing's syndrome) किस हार्मोन के अत्यधिक स्तर के कारण होता है?",
        answers: shuffle([
            { text: "इंसुलिन", correct: false },
            { text: "थायरॉक्सिन", correct: false },
            { text: "कॉर्टिसोल", correct: true },
            { text: "वृद्धि हार्मोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कॉर्टिसोल के लंबे समय तक उच्च स्तर के संपर्क में रहने से कुशिंग सिंड्रोम होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके लक्षणों में वजन बढ़ना, उच्च रक्तचाप और त्वचा में परिवर्तन शामिल हैं।"
    },
    {
        question: "प्रश्न 22. शरीर में लवण और जल संतुलन को नियंत्रित करने वाला मुख्य हार्मोन कौन सा है?",
        answers: shuffle([
            { text: "रेनिन", correct: false },
            { text: "एल्डोस्टेरोन", correct: true },
            { text: "एंजियोटेंसिन", correct: false },
            { text: "ADH", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एल्डोस्टेरोन, जो अधिवृक्क वल्कुट द्वारा स्रावित होता है, वृक्क को सोडियम और जल को बनाए रखने तथा पोटेशियम को उत्सर्जित करने का संकेत देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इससे रक्तचाप नियंत्रित होता है।"
    },
    {
        question: "प्रश्न 23. अग्न्याशय के लैंगरहैंस के द्वीप की अल्फा-कोशिकाएं कौन सा हार्मोन स्रावित करती हैं?",
        answers: shuffle([
            { text: "इंसुलिन", correct: false },
            { text: "ग्लूकागन", correct: true },
            { text: "सोमाटोस्टैटिन", correct: false },
            { text: "गैस्ट्रिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अल्फा-कोशिकाएं ग्लूकागन का स्राव करती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि बीटा-कोशिकाएं इंसुलिन का स्राव करती हैं।"
    },
    {
        question: "प्रश्न 24. किस ग्रंथि का आकार उम्र के साथ, विशेषकर यौवन के बाद, घटता जाता है?",
        answers: shuffle([
            { text: "पीयूष ग्रंथि", correct: false },
            { text: "थायरॉयड ग्रंथि", correct: false },
            { text: "थाइमस ग्रंथि", correct: true },
            { text: "पीनियल ग्रंथि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थाइमस ग्रंथि बचपन में प्रतिरक्षा के लिए बहुत महत्वपूर्ण होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन यौवन के बाद यह धीरे-धीरे सिकुड़कर वसा ऊतक में बदल जाती है।"
    },
    {
        question: "प्रश्न 25. हार्मोन रासायनिक रूप से क्या होते हैं?",
        answers: shuffle([
            { text: "केवल प्रोटीन", correct: false },
            { text: "केवल स्टेरॉयड", correct: false },
            { text: "केवल कार्बोहाइड्रेट", correct: false },
            { text: "प्रोटीन, स्टेरॉयड या अमीनो एसिड डेरिवेटिव", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हार्मोन विभिन्न रासायनिक संरचनाओं के हो सकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जैसे इंसुलिन (प्रोटीन), टेस्टोस्टेरोन (स्टेरॉयड), और एड्रेनालाईन (अमीनो एसिड डेरिवेटिव)।"
    },
    {
        question: "प्रश्न 26. 'एक्रोमेगाली' (Acromegaly) नामक विकार किस हार्मोन के अतिस्राव के कारण होता है?",
        answers: shuffle([
            { text: "बच्चों में वृद्धि हार्मोन", correct: false },
            { text: "वयस्कों में वृद्धि हार्मोन", correct: true },
            { text: "थायरॉक्सिन", correct: false },
            { text: "इंसुलिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वयस्कों में, जब हड्डियों की लंबाई बढ़ना बंद हो जाती है, तब वृद्धि हार्मोन के अतिस्राव से हाथ, पैर और चेहरे की हड्डियाँ असामान्य रूप से बड़ी हो जाती हैं, जिसे एक्रोमेगाली कहते हैं।"
    },
    {
        question: "प्रश्न 27. 'डायबिटीज इन्सिपिडस' (Diabetes Insipidus) किस हार्मोन की कमी से होता है?",
        answers: shuffle([
            { text: "इंसुलिन", correct: false },
            { text: "ग्लूकागन", correct: false },
            { text: "एल्डोस्टेरोन", correct: false },
            { text: "एंटीडाइयूरेटिक हार्मोन (ADH)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ADH की कमी के कारण वृक्क जल का पुनरवशोषण नहीं कर पाते।<br><br><i class='fa-solid fa-angles-right icon'></i> इससे व्यक्ति को अत्यधिक प्यास लगती है और वह बड़ी मात्रा में तनु मूत्र का उत्सर्जन करता है।"
    },
    {
        question: "प्रश्न 28. अंडाशय (Ovary) द्वारा कौन से हार्मोन उत्पादित होते हैं?",
        answers: shuffle([
            { text: "केवल एस्ट्रोजन", correct: false },
            { text: "केवल प्रोजेस्टेरोन", correct: false },
            { text: "एस्ट्रोजन और प्रोजेस्टेरोन दोनों", correct: true },
            { text: "टेस्टोस्टेरोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंडाशय मुख्य रूप से इन दो प्रमुख महिला सेक्स हार्मोन (एस्ट्रोजन और प्रोजेस्टेरोन) का उत्पादन करता है।"
    },
    {
        question: "प्रश्न 29. पैराथाइरॉइड ग्रंथियाँ कहाँ स्थित होती हैं?",
        answers: shuffle([
            { text: "वृक्क के ऊपर", correct: false },
            { text: "अग्न्याशय में", correct: false },
            { text: "थायरॉयड ग्रंथि के पीछे", correct: true },
            { text: "मस्तिष्क के आधार पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आमतौर पर चार छोटी पैराथाइरॉइड ग्रंथियाँ होती हैं जो थायरॉयड ग्रंथि की पिछली सतह पर धंसी होती हैं।"
    },
    {
        question: "प्रश्न 30. फॉलिकल-स्टिमुलेटिंग हार्मोन (FSH) और ल्यूटिनाइजिंग हार्मोन (LH) को संयुक्त रूप से क्या कहा जाता है?",
        answers: shuffle([
            { text: "वृद्धि हार्मोन", correct: false },
            { text: "आपातकालीन हार्मोन", correct: false },
            { text: "गोनैडोट्रॉपिन्स", correct: true },
            { text: "चयापचय हार्मोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्योंकि ये दोनों हार्मोन गोनैड्स (अंडाशय और वृषण) की गतिविधि को नियंत्रित करते हैं, इसलिए इन्हें गोनैडोट्रॉपिन्स कहा जाता है।"
    },
    {
        question: "प्रश्न 31. गर्भावस्था को बनाए रखने के लिए कौन सा हार्मोन आवश्यक है?",
        answers: shuffle([
            { text: "एस्ट्रोजन", correct: false },
            { text: "ऑक्सीटोसिन", correct: false },
            { text: "प्रोजेस्टेरोन", correct: true },
            { text: "प्रोलैक्टिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोजेस्टेरोन गर्भाशय की परत (एंडोमेट्रियम) को बनाए रखता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इससे भ्रूण का आरोपण और विकास संभव हो पाता है।"
    },
    {
        question: "प्रश्न 32. वह कौन सी कोशिकाएं हैं जिन पर हार्मोन अपना प्रभाव डालते हैं?",
        answers: shuffle([
            { text: "सभी कोशिकाएं", correct: false },
            { text: "केवल तंत्रिका कोशिकाएं", correct: false },
            { text: "लक्ष्य कोशिकाएं (Target Cells)", correct: true },
            { text: "केवल रक्त कोशिकाएं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हार्मोन केवल उन्हीं कोशिकाओं को प्रभावित करते हैं जिनकी सतह पर या अंदर उनके लिए विशिष्ट ग्राही (receptors) होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इन कोशिकाओं को लक्ष्य कोशिकाएं कहा जाता है।"
    },
    {
        question: "प्रश्न 33. 'हाइपोथैलेमस' का अंतःस्रावी तंत्र में क्या भूमिका है?",
        answers: shuffle([
            { text: "यह सीधे रक्त में हार्मोन स्रावित करता है", correct: false },
            { text: "यह पीयूष ग्रंथि की गतिविधि को नियंत्रित करता है", correct: true },
            { text: "यह शरीर का तापमान नियंत्रित करता है", correct: false },
            { text: "यह इंसुलिन का उत्पादन करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाइपोथैलेमस मोचक (releasing) और निरोधी (inhibiting) हार्मोन का स्राव करके 'मास्टर ग्रंथि' यानी पीयूष ग्रंथि को नियंत्रित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रकार यह तंत्रिका और अंतःस्रावी तंत्र के बीच एक कड़ी है।"
    },
    {
        question: "प्रश्न 34. 'क्रेटिनिज्म' (Cretinism), जो बच्चों में शारीरिक और मानसिक विकास को अवरुद्ध करता है, किस हार्मोन की कमी से होता है?",
        answers: shuffle([
            { text: "वृद्धि हार्मोन", correct: false },
            { text: "थायरॉक्सिन", correct: true },
            { text: "इंसुलिन", correct: false },
            { text: "कॉर्टिसोल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गर्भावस्था के दौरान या बचपन में थायरॉयड हार्मोन (थायरॉक्सिन) की गंभीर कमी से बच्चे का शारीरिक और मानसिक विकास ठीक से नहीं हो पाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस स्थिति को क्रेटिनिज्म कहते हैं।"
    },
    {
        question: "प्रश्न 35. 'गैस्ट्रिन' नामक हार्मोन कहाँ से स्रावित होता है?",
        answers: shuffle([
            { text: "अग्न्याशय", correct: false },
            { text: "छोटी आंत", correct: false },
            { text: "पेट (आमाशय) की दीवार", correct: true },
            { text: "यकृत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गैस्ट्रिन एक हार्मोन है जो पेट की दीवारों द्वारा स्रावित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पेट में हाइड्रोक्लोरिक एसिड के स्राव को उत्तेजित करता है।"
    },
    {
        question: "प्रश्न 36. कौन सा हार्मोन एक स्टेरॉयड नहीं है?",
        answers: shuffle([
            { text: "टेस्टोस्टेरोन", correct: false },
            { text: "एस्ट्रोजन", correct: false },
            { text: "कॉर्टिसोल", correct: false },
            { text: "इंसुलिन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंसुलिन एक पेप्टाइड (प्रोटीन) हार्मोन है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि टेस्टोस्टेरोन, एस्ट्रोजन और कॉर्टिसोल सभी स्टेरॉयड हार्मोन हैं जो कोलेस्ट्रॉल से बनते हैं।"
    },
    {
        question: "प्रश्न 37. ACTH (एड्रेनोकोर्टिकोट्रॉपिक हार्मोन) किस ग्रंथि को हार्मोन स्रावित करने के लिए उत्तेजित करता है?",
        answers: shuffle([
            { text: "थायरॉयड ग्रंथि", correct: false },
            { text: "अधिवृक्क वल्कुट (Adrenal Cortex)", correct: true },
            { text: "अंडाशय", correct: false },
            { text: "वृषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ACTH, जो अग्र पीयूष ग्रंथि से स्रावित होता है, अधिवृक्क वल्कुट को कॉर्टिसोल जैसे ग्लूकोकॉर्टिकॉइड्स का उत्पादन और स्राव करने के लिए उत्तेजित करता है।"
    },
    {
        question: "प्रश्न 38. 'टिटेनी' (Tetany), जिसमें मांसपेशियों में दर्दनाक ऐंठन होती है, किस हार्मोन की कमी से हो सकती है?",
        answers: shuffle([
            { text: "कैल्सीटोनिन", correct: false },
            { text: "थायरॉक्सिन", correct: false },
            { text: "पैराथॉर्मोन", correct: true },
            { text: "एल्डोस्टेरोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पैराथॉर्मोन की कमी से रक्त में कैल्शियम का स्तर बहुत कम हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इससे तंत्रिकाओं और मांसपेशियों की उत्तेजनशीलता बढ़ जाती है और टिटेनी हो सकती है।"
    },
    {
        question: "प्रश्न 39. हार्मोन अपने लक्ष्य कोशिकाओं तक कैसे पहुँचते हैं?",
        answers: shuffle([
            { text: "तंत्रिकाओं के माध्यम से", correct: false },
            { text: "लसीका के माध्यम से", correct: false },
            { text: "रक्तप्रवाह के माध्यम से", correct: true },
            { text: "सीधे प्रसार द्वारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंतःस्रावी ग्रंथियाँ अपने स्राव (हार्मोन) को सीधे रक्त में छोड़ती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> और रक्त उन्हें पूरे शरीर में लक्ष्य अंगों और ऊतकों तक पहुँचाता है।"
    },
    {
        question: "प्रश्न 40. TSH का पूर्ण रूप क्या है?",
        answers: shuffle([
            { text: "टेस्टोस्टेरोन स्टिमुलेटिंग हार्मोन", correct: false },
            { text: "थाइमोसिन स्टिमुलेटिंग हार्मोन", correct: false },
            { text: "थायरॉयड स्टिमुलेटिंग हार्मोन", correct: true },
            { text: "थैलेमस स्टिमुलेटिंग हार्मोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> TSH का पूर्ण रूप थायरॉयड स्टिमुलेटिंग हार्मोन (थायरोट्रोपिन) है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पीयूष ग्रंथि द्वारा स्रावित होता है और थायरॉयड ग्रंथि को थायरॉक्सिन बनाने और स्रावित करने के लिए उत्तेजित करता है।"
    },
    {
        question: "प्रश्न 41. वृक्क (किडनी) द्वारा कौन सा हार्मोन उत्पादित होता है जो लाल रक्त कोशिकाओं के उत्पादन को उत्तेजित करता है?",
        answers: shuffle([
            { text: "A) रेनिन", correct: false },
            { text: "B) एरिथ्रोपोइटिन", correct: true },
            { text: "C) कैल्सिट्रिऑल", correct: false },
            { text: "B) और C) दोनों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एरिथ्रोपोइटिन (EPO) एक हार्मोन है जो मुख्य रूप से वृक्क द्वारा ऑक्सीजन के निम्न स्तर की प्रतिक्रिया में उत्पन्न होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अस्थि मज्जा में लाल रक्त कोशिकाओं के उत्पादन को बढ़ावा देता है।"
    },
    {
        question: "प्रश्न 42. 'हाइपरग्लाइसीमिया' (Hyperglycemia) का क्या अर्थ है?",
        answers: shuffle([
            { text: "रक्त में कैल्शियम का उच्च स्तर", correct: false },
            { text: "रक्त में पोटेशियम का उच्च स्तर", correct: false },
            { text: "रक्त में ग्लूकोज का उच्च स्तर", correct: true },
            { text: "रक्त में यूरिया का उच्च स्तर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाइपरग्लाइसीमिया या उच्च रक्त शर्करा मधुमेह का एक मुख्य लक्षण है।"
    },
    {
        question: "प्रश्न 43. 'प्रोलैक्टिन' हार्मोन का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "प्रसव पीड़ा शुरू करना", correct: false },
            { text: "दुग्ध ग्रंथियों द्वारा दूध के उत्पादन को उत्तेजित करना", correct: true },
            { text: "अंडाणु के विकास को बढ़ावा देना", correct: false },
            { text: "शरीर की वृद्धि को नियंत्रित करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोलैक्टिन, जो अग्र पीयूष ग्रंथि से स्रावित होता है, गर्भावस्था के दौरान और प्रसव के बाद स्तनों में दूध के संश्लेषण को बढ़ावा देता है।"
    },
    {
        question: "प्रश्न 44. मानव शरीर की सबसे बड़ी अंतःस्रावी ग्रंथि कौन सी है?",
        answers: shuffle([
            { text: "पीयूष ग्रंथि", correct: false },
            { text: "अग्न्याशय", correct: false },
            { text: "थायरॉयड ग्रंथि", correct: true },
            { text: "अधिवृक्क ग्रंथि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थायरॉयड ग्रंथि, जो गर्दन में स्थित होती है, शरीर की सबसे बड़ी शुद्ध अंतःस्रावी ग्रंथि है।"
    },
    {
        question: "प्रश्न 45. कौन सा हार्मोन एक न्यूरोट्रांसमीटर के रूप में भी कार्य कर सकता है?",
        answers: shuffle([
            { text: "इंसुलिन", correct: false },
            { text: "थायरॉक्सिन", correct: false },
            { text: "नॉरएड्रेनालाईन (नॉरएपिनेफ्रीन)", correct: true },
            { text: "प्रोजेस्टेरोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नॉरएड्रेनालाईन अधिवृक्क मेडुला द्वारा एक हार्मोन के रूप में और तंत्रिका तंत्र में एक न्यूरोट्रांसमीटर के रूप में स्रावित होता है।"
    },
    {
        question: "प्रश्न 46. 'हाइपोग्लाइसीमिया' (Hypoglycemia) किस स्थिति को संदर्भित करता है?",
        answers: shuffle([
            { text: "निम्न रक्तचाप", correct: false },
            { text: "निम्न रक्त शर्करा", correct: true },
            { text: "शरीर का निम्न तापमान", correct: false },
            { text: "रक्त में निम्न कैल्शियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह स्थिति तब होती है जब रक्त में ग्लूकोज का स्तर असामान्य रूप से कम हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अक्सर मधुमेह के उपचार का एक दुष्प्रभाव हो सकता है।"
    },
    {
        question: "प्रश्न 47. 'कैल्सीटोनिन' हार्मोन किस ग्रंथि द्वारा स्रावित होता है?",
        answers: shuffle([
            { text: "पैराथाइरॉइड ग्रंथि", correct: false },
            { text: "थायरॉयड ग्रंथि", correct: true },
            { text: "पीयूष ग्रंथि", correct: false },
            { text: "अधिवृक्क ग्रंथि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैल्सीटोनिन थायरॉयड ग्रंथि की 'C' कोशिकाओं द्वारा स्रावित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह रक्त में कैल्शियम के स्तर को कम करने में मदद करता है।"
    },
    {
        question: "प्रश्न 48. हृदय द्वारा स्रावित होने वाले हार्मोन का नाम क्या है जो रक्तचाप को कम करता है?",
        answers: shuffle([
            { text: "गैस्ट्रिन", correct: false },
            { text: "रेनिन", correct: false },
            { text: "एट्रियल नैट्रियूरेटिक फैक्टर (ANF)", correct: true },
            { text: "सेक्रेटिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब रक्तचाप बढ़ता है, तो हृदय की अलिंद की दीवारें ANF का स्राव करती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह रक्त वाहिकाओं को फैलाकर और वृक्क द्वारा सोडियम और पानी के उत्सर्जन को बढ़ाकर रक्तचाप को कम करता है।"
    },
    {
        question: "प्रश्न 49. बहिःस्रावी ग्रंथियों (Exocrine glands) की क्या विशेषता है?",
        answers: shuffle([
            { text: "वे अपने स्राव को सीधे रक्त में छोड़ती हैं", correct: false },
            { text: "उनके पास नलिकाएं (ducts) होती हैं", correct: true },
            { text: "वे केवल हार्मोन का उत्पादन करती हैं", correct: false },
            { text: "वे नलिकाविहीन होती हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बहिःस्रावी ग्रंथियाँ, जैसे लार ग्रंथियाँ और पसीने की ग्रंथियाँ, अपने स्राव को नलिकाओं (ducts) के माध्यम से एक विशिष्ट स्थान पर पहुंचाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि अंतःस्रावी ग्रंथियाँ नलिकाविहीन होती हैं।"
    },
    {
        question: "प्रश्न 50. 'सोमाटोस्टैटिन' हार्मोन का क्या कार्य है?",
        answers: shuffle([
            { text: "शरीर की वृद्धि को बढ़ावा देना", correct: false },
            { text: "रक्त शर्करा को बढ़ाना", correct: false },
            { text: "वृद्धि हार्मोन और इंसुलिन सहित कई अन्य हार्मोनों के स्राव को रोकना", correct: true },
            { text: "रक्तचाप को नियंत्रित करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोमाटोस्टैटिन, जो अग्न्याशय और हाइपोथैलेमस द्वारा स्रावित होता है, एक निरोधात्मक हार्मोन के रूप में कार्य करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कई पाचन और अंतःस्रावी प्रक्रियाओं को धीमा कर देता है।"
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