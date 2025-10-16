const questions = [
    {
        topHeading: "मस्तिष्क की संरचना और कार्यप्रणाली पर आधारित 50 MCQs (quiz_no. 55)"
    },
    {
        question: "प्रश्न 1. मानव मस्तिष्क का सबसे बड़ा भाग कौन सा है?",
        answers: shuffle([
            { text: "अनुमस्तिष्क (Cerebellum)", correct: false },
            { text: "मस्तिष्क स्तंभ (Brainstem)", correct: false },
            { text: "प्रमस्तिष्क (Cerebrum)", correct: true },
            { text: "मेडुला ऑबोंगटा (Medulla Oblongata)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रमस्तिष्क, जिसे सेरिब्रम भी कहा जाता है, मस्तिष्क का सबसे बड़ा और सबसे विकसित हिस्सा है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बुद्धि, स्मृति और चेतना का केंद्र है।"
    },
    {
        question: "प्रश्न 2. मस्तिष्क के किस भाग को 'छोटा मस्तिष्क' (Little Brain) भी कहा जाता है?",
        answers: shuffle([
            { text: "प्रमस्तिष्क (Cerebrum)", correct: false },
            { text: "अनुमस्तिष्क (Cerebellum)", correct: true },
            { text: "पोंस (Pons)", correct: false },
            { text: "हाइपोथैलेमस (Hypothalamus)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुमस्तिष्क (सेरिबैलम) संरचना में प्रमस्तिष्क जैसा दिखता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शरीर के संतुलन और मांसपेशियों के समन्वय में महत्वपूर्ण भूमिका निभाता है।"
    },
    {
        question: "प्रश्न 3. शरीर के संतुलन, मुद्रा और ऐच्छिक पेशियों के समन्वय को कौन नियंत्रित करता है?",
        answers: shuffle([
            { text: "थैलेमस (Thalamus)", correct: false },
            { text: "हाइपोथैलेमस (Hypothalamus)", correct: false },
            { text: "अनुमस्तिष्क (Cerebellum)", correct: true },
            { text: "मेडुला ऑबोंगटा (Medulla Oblongata)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुमस्तिष्क शरीर की गति, संतुलन और मुद्रा को नियंत्रित और समन्वित करने के लिए जिम्मेदार है, जिससे हमारी गतिविधियाँ सहज होती हैं।"
    },
    {
        question: "प्रश्न 4. अनैच्छिक क्रियाओं जैसे श्वास, हृदय गति और रक्तचाप को कौन नियंत्रित करता है?",
        answers: shuffle([
            { text: "प्रमस्तिष्क (Cerebrum)", correct: false },
            { text: "अनुमस्तिष्क (Cerebellum)", correct: false },
            { text: "मेडुला ऑबोंगटा (Medulla Oblongata)", correct: true },
            { text: "पोंस (Pons)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेडुला ऑबोंगटा मस्तिष्क स्तंभ का हिस्सा है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शरीर के कई महत्वपूर्ण अनैच्छिक कार्यों (जैसे सांस लेना, दिल की धड़कन) के लिए नियंत्रण केंद्र के रूप में कार्य करता है।"
    },
    {
        question: "प्रश्न 5. सोचने, तर्क करने, स्मृति और समस्या-समाधान जैसी उच्च मानसिक क्रियाओं का केंद्र है?",
        answers: shuffle([
            { text: "मेडुला ऑबोंगटा", correct: false },
            { text: "अनुमस्तिष्क", correct: false },
            { text: "प्रमस्तिष्क (सेरिब्रम)", correct: true },
            { text: "पोंस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रमस्तिष्क का कॉर्टेक्स उच्च स्तरीय संज्ञानात्मक कार्यों, जैसे कि सोच, सीखना, याद रखना और निर्णय लेना, के लिए जिम्मेदार है।"
    },
    {
        question: "प्रश्न 6. भूख, प्यास, शरीर के तापमान और भावनाओं को कौन नियंत्रित करता है?",
        answers: shuffle([
            { text: "थैलेमस", correct: false },
            { text: "हाइपोथैलेमस", correct: true },
            { text: "हिप्पोकैम्पस", correct: false },
            { text: "एमिग्डाला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाइपोथैलेमस शरीर के आंतरिक संतुलन (होमियोस्टैसिस) को बनाए रखने के लिए एक मास्टर नियंत्रण केंद्र के रूप में कार्य करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भूख, प्यास और तापमान को नियंत्रित करता है।"
    },
    {
        question: "प्रश्न 7. संवेदी सूचनाओं (दर्द, स्पर्श, तापमान) के लिए एक रिले स्टेशन के रूप में कौन कार्य करता है?",
        answers: shuffle([
            { text: "हाइपोथैलेमस", correct: false },
            { text: "थैलेमस", correct: true },
            { text: "बेसल गैन्ग्लिया", correct: false },
            { text: "पोंस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थैलेमस शरीर के विभिन्न हिस्सों से आने वाली अधिकांश संवेदी सूचनाओं को प्राप्त करता है और उन्हें प्रमस्तिष्क के संबंधित क्षेत्रों में भेजता है।"
    },
    {
        question: "प्रश्न 8. मस्तिष्क को बाहरी आघातों से बचाने वाली तीन परतों वाली झिल्ली को क्या कहते हैं?",
        answers: shuffle([
            { text: "प्लूरा (Pleura)", correct: false },
            { text: "पेरिकार्डियम (Pericardium)", correct: false },
            { text: "मेनिन्जेस (Meninges)", correct: true },
            { text: "पेरिटोनियम (Peritoneum)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेनिन्जेस (मस्तिष्कावरण) तीन सुरक्षात्मक झिल्लियाँ (ड्यूरा मेटर, एरेक्नॉइड मेटर, और पिया मेटर) हैं जो मस्तिष्क और रीढ़ की हड्डी को ढकती हैं।"
    },
    {
        question: "प्रश्न 9. दो तंत्रिका कोशिकाओं (न्यूरॉन्स) के बीच के जंक्शन को क्या कहा जाता है?",
        answers: shuffle([
            { text: "एक्सॉन (Axon)", correct: false },
            { text: "डेंड्राइट (Dendrite)", correct: false },
            { text: "सिनेप्स (Synapse)", correct: true },
            { text: "नोड ऑफ रैन्वियर (Node of Ranvier)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिनेप्स वह स्थान है जहाँ एक न्यूरॉन से विद्युत संकेत रासायनिक संकेतों (न्यूरोट्रांसमीटर) के रूप में दूसरे न्यूरॉन तक पहुँचता है।"
    },
    {
        question: "प्रश्न 10. EEG (इलेक्ट्रोएन्सेफलोग्राम) का उपयोग किस अंग की गतिविधि को रिकॉर्ड करने के लिए किया जाता है?",
        answers: shuffle([
            { text: "हृदय", correct: false },
            { text: "फेफड़े", correct: false },
            { text: "यकृत", correct: false },
            { text: "मस्तिष्क", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> EEG मस्तिष्क में न्यूरॉन्स द्वारा उत्पन्न विद्युत गतिविधि को मापता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका उपयोग मिर्गी जैसे विकारों का निदान करने के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 11. प्रमस्तिष्क के दो गोलार्धों को कौन सी संरचना जोड़ती है?",
        answers: shuffle([
            { text: "पोंस", correct: false },
            { text: "थैलेमस", correct: false },
            { text: "कॉर्पस कैलोसम", correct: true },
            { text: "मेडुला ऑबोंगटा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कॉर्पस कैलोसम तंत्रिका तंतुओं का एक मोटा बंडल है जो मस्तिष्क के बाएं और दाएं गोलार्धों के बीच संचार स्थापित करता है।"
    },
    {
        question: "प्रश्न 12. मस्तिष्क का कौन सा लोब (पालि) दृष्टि (vision) के प्रसंस्करण के लिए जिम्मेदार है?",
        answers: shuffle([
            { text: "ललाट पालि (Frontal Lobe)", correct: false },
            { text: "पार्श्विका पालि (Parietal Lobe)", correct: false },
            { text: "शंख पालि (Temporal Lobe)", correct: false },
            { text: "पश्चकपाल पालि (Occipital Lobe)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पश्चकपाल पालि, जो मस्तिष्क के पिछले हिस्से में स्थित है, का प्राथमिक कार्य आँखों से प्राप्त दृश्य सूचनाओं को संसाधित करना है।"
    },
    {
        question: "प्रश्न 13. ब्रोका का क्षेत्र (Broca's Area), जो बोलने के लिए जिम्मेदार है, आमतौर पर मस्तिष्क के किस गोलार्ध में स्थित होता है?",
        answers: shuffle([
            { text: "A) बायाँ गोलार्ध", correct: true },
            { text: "B) दायाँ गोलार्ध", correct: false },
            { text: "A), B) दोनों में समान रूप से", correct: false },
            { text: "अनुमस्तिष्क में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिकांश लोगों (विशेषकर दाएं हाथ के लोगों) में, भाषा उत्पादन और बोलने से संबंधित ब्रोका का क्षेत्र बाएं ललाट पालि में स्थित होता है।"
    },
    {
        question: "प्रश्न 14. सुनने (audition) और स्मृति से संबंधित मस्तिष्क का लोब कौन सा है?",
        answers: shuffle([
            { text: "ललाट पालि", correct: false },
            { text: "पार्श्विका पालि", correct: false },
            { text: "शंख पालि (Temporal Lobe)", correct: true },
            { text: "पश्चकपाल पालि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शंख पालि कानों से प्राप्त ध्वनि सूचनाओं को संसाधित करने और नई यादें बनाने (हिप्पोकैम्पस के कारण) में महत्वपूर्ण भूमिका निभाता है।"
    },
    {
        question: "प्रश्न 15. प्रतिवर्ती क्रियाओं (Reflex Actions) का नियंत्रण केंद्र कहाँ होता है?",
        answers: shuffle([
            { text: "प्रमस्तिष्क", correct: false },
            { text: "अनुमस्तिष्क", correct: false },
            { text: "मेरुरज्जु (Spinal Cord)", correct: true },
            { text: "हाइपोथैलेमस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिकांश तीव्र प्रतिवर्ती क्रियाएं, जैसे गर्म वस्तु से हाथ हटाना, मस्तिष्क के हस्तक्षेप के बिना सीधे मेरुरज्जु द्वारा नियंत्रित होती हैं।"
    },
    {
        question: "प्रश्न 16. पार्किंसंस रोग मस्तिष्क के किस हिस्से में डोपामाइन-उत्पादक न्यूरॉन्स के क्षय के कारण होता है?",
        answers: shuffle([
            { text: "सेरिबैलम", correct: false },
            { text: "बेसल गैन्ग्लिया (सबस्टैंशिया नाइग्रा)", correct: true },
            { text: "हिप्पोकैम्पस", correct: false },
            { text: "सेरेब्रल कॉर्टेक्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पार्किंसंस रोग में, मध्य मस्तिष्क के सबस्टैंशिया नाइग्रा क्षेत्र में डोपामाइन का उत्पादन करने वाली कोशिकाएं मरने लगती हैं, जिससे गति नियंत्रण में समस्या होती है।"
    },
    {
        question: "प्रश्न 17. मस्तिष्क और रीढ़ की हड्डी के चारों ओर तैरने वाला तरल पदार्थ क्या कहलाता है?",
        answers: shuffle([
            { text: "प्लाज्मा", correct: false },
            { text: "सीरम", correct: false },
            { text: "लसीका (Lymph)", correct: false },
            { text: "प्रमस्तिष्क मेरु द्रव (Cerebrospinal Fluid - CSF)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> CSF एक स्पष्ट, रंगहीन तरल है जो मस्तिष्क को पोषण देता है, अपशिष्ट हटाता है और इसे यांत्रिक आघात से बचाता है।"
    },
    {
        question: "प्रश्न 18. तंत्रिका कोशिका (Neuron) का कौन सा भाग अन्य न्यूरॉन्स से संकेत प्राप्त करता है?",
        answers: shuffle([
            { text: "एक्सॉन (Axon)", correct: false },
            { text: "डेंड्राइट (Dendrite)", correct: true },
            { text: "कोशिका काय (Cell Body)", correct: false },
            { text: "माइलिन शीथ (Myelin Sheath)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डेंड्राइट पेड़ की शाखाओं जैसी संरचनाएं हैं जो अन्य न्यूरॉन्स से आने वाले संकेतों को ग्रहण करती हैं और उन्हें कोशिका काय की ओर ले जाती हैं।"
    },
    {
        question: "प्रश्न 19. तंत्रिका आवेगों को तेजी से प्रसारित करने में मदद करने के लिए एक्सॉन के चारों ओर इन्सुलेट परत क्या कहलाती है?",
        answers: shuffle([
            { text: "न्यूरोलेमा", correct: false },
            { text: "सार्कोलेमा", correct: false },
            { text: "माइलिन शीथ", correct: true },
            { text: "एक्सोलेमा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माइलिन शीथ एक वसायुक्त पदार्थ है जो एक्सॉन को इन्सुलेट करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह तंत्रिका आवेग को बहुत तेजी से एक नोड से दूसरे नोड तक कूदने (सॉल्टेटरी कंडक्शन) में मदद करता है।"
    },
    {
        question: "प्रश्न 20. अल्जाइमर रोग मुख्य रूप से किस संज्ञानात्मक कार्य को प्रभावित करता है?",
        answers: shuffle([
            { text: "संतुलन", correct: false },
            { text: "दृष्टि", correct: false },
            { text: "स्मृति (Memory)", correct: true },
            { text: "सुनना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अल्जाइमर रोग एक प्रगतिशील न्यूरोडीजेनेरेटिव विकार है जो मस्तिष्क की कोशिकाओं को नष्ट कर देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मुख्य रूप से स्मृति हानि और अन्य संज्ञानात्मक कार्यों में गिरावट लाता है।"
    },
    {
        question: "प्रश्न 21. भावनाओं, विशेषकर भय, के प्रसंस्करण के लिए मस्तिष्क का कौन सा हिस्सा जिम्मेदार है?",
        answers: shuffle([
            { text: "हिप्पोकैम्पस", correct: false },
            { text: "एमिग्डाला (Amygdala)", correct: true },
            { text: "थैलेमस", correct: false },
            { text: "बेसल गैन्ग्लिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एमिग्डाला, जो लिम्बिक प्रणाली का हिस्सा है, भय, क्रोध और आनंद जैसी भावनाओं को संसाधित करने में एक केंद्रीय भूमिका निभाता है।"
    },
    {
        question: "प्रश्न 22. अल्पकालिक स्मृति को दीर्घकालिक स्मृति में परिवर्तित करने में कौन सी संरचना महत्वपूर्ण है?",
        answers: shuffle([
            { text: "एमिग्डाला", correct: false },
            { text: "हाइपोथैलेमस", correct: false },
            { text: "हिप्पोकैम्पस (Hippocampus)", correct: true },
            { text: "पोंस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिप्पोकैम्पस सीखने और नई तथ्यात्मक यादों को बनाने और उन्हें दीर्घकालिक भंडारण के लिए समेकित करने के लिए आवश्यक है।"
    },
    {
        question: "प्रश्न 23. मानव मस्तिष्क में लगभग कितने न्यूरॉन्स होते हैं?",
        answers: shuffle([
            { text: "10 मिलियन", correct: false },
            { text: "1 बिलियन", correct: false },
            { text: "86 बिलियन", correct: true },
            { text: "1 ट्रिलियन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवीनतम अनुमानों के अनुसार, एक औसत मानव मस्तिष्क में लगभग 86 बिलियन तंत्रिका कोशिकाएं (न्यूरॉन्स) होती हैं।"
    },
    {
        question: "प्रश्न 24. नींद-जागने के चक्र (Circadian Rhythms) को नियंत्रित करने में कौन सी ग्रंथि मदद करती है?",
        answers: shuffle([
            { text: "पीयूष ग्रंथि (Pituitary Gland)", correct: false },
            { text: "अधिवृक्क ग्रंथि (Adrenal Gland)", correct: false },
            { text: "पीनियल ग्रंथि (Pineal Gland)", correct: true },
            { text: "थाइमस ग्रंथि (Thymus Gland)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीनियल ग्रंथि मेलाटोनिन नामक हार्मोन का स्राव करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शरीर के सोने और जागने के चक्र को विनियमित करने में मदद करता है।"
    },
    {
        question: "प्रश्न 25. मस्तिष्क का कौन सा भाग श्वसन लय केंद्र (Respiratory Rhythm Centre) को नियंत्रित करता है?",
        answers: shuffle([
            { text: "प्रमस्तिष्क", correct: false },
            { text: "अनुमस्तिष्क", correct: false },
            { text: "पोंस और मेडुला ऑबोंगटा", correct: true },
            { text: "हाइपोथैलेमस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेडुला में मुख्य श्वसन लय केंद्र होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> पोंस इस लय को संशोधित और ठीक करने में मदद करता है।"
    },
    {
        question: "प्रश्न 26. तंत्रिका तंत्र की कौन सी कोशिकाएं न्यूरॉन्स को समर्थन, पोषण और सुरक्षा प्रदान करती हैं?",
        answers: shuffle([
            { text: "एरिथ्रोसाइट्स", correct: false },
            { text: "लिम्फोसाइट्स", correct: false },
            { text: "ग्लियल कोशिकाएं (Glial Cells)", correct: true },
            { text: "ओस्टियोसाइट्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्लियल कोशिकाएं (या न्यूरोग्लिया) तंत्रिका तंत्र की गैर-न्यूरोनल कोशिकाएं हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये न्यूरॉन्स के लिए संरचनात्मक और चयापचय सहायता प्रदान करती हैं।"
    },
    {
        question: "प्रश्न 27. 'मास्टर ग्रंथि' के रूप में किसे जाना जाता है जो कई अन्य अंतःस्रावी ग्रंथियों को नियंत्रित करती है?",
        answers: shuffle([
            { text: "पीनियल ग्रंथि", correct: false },
            { text: "पीयूष ग्रंथि (Pituitary Gland)", correct: true },
            { text: "थायरॉयड ग्रंथि", correct: false },
            { text: "अधिवृक्क ग्रंथि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीयूष ग्रंथि, जो हाइपोथैलेमस द्वारा नियंत्रित होती है, कई हार्मोन स्रावित करती है जो अन्य अंतःस्रावी ग्रंथियों की गतिविधि को नियंत्रित करते हैं।"
    },
    {
        question: "प्रश्न 28. स्पर्श, दबाव, दर्द और तापमान की संवेदनाओं को मस्तिष्क का कौन सा लोब संसाधित करता है?",
        answers: shuffle([
            { text: "ललाट पालि", correct: false },
            { text: "पार्श्विका पालि (Parietal Lobe)", correct: true },
            { text: "शंख पालि", correct: false },
            { text: "पश्चकपाल पालि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पार्श्विका पालि में सोमाटोसेंसरी कॉर्टेक्स होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शरीर से आने वाली स्पर्श संबंधी सूचनाओं को प्राप्त और संसाधित करता है।"
    },
    {
        question: "प्रश्न 29. वह स्थिति जिसमें मेनिन्जेस में सूजन आ जाती है, क्या कहलाती है?",
        answers: shuffle([
            { text: "एन्सेफलाइटिस (Encephalitis)", correct: false },
            { text: "मेनिनजाइटिस (Meningitis)", correct: true },
            { text: "न्युरिटिस (Neuritis)", correct: false },
            { text: "मायलाइटिस (Myelitis)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेनिनजाइटिस मस्तिष्क और रीढ़ की हड्डी को ढकने वाली सुरक्षात्मक झिल्लियों (मेनिन्जेस) की सूजन है, जो अक्सर संक्रमण के कारण होती है।"
    },
    {
        question: "प्रश्न 30. सिनेप्स पर एक न्यूरॉन से दूसरे न्यूरॉन तक संकेत ले जाने वाले रासायनिक संदेशवाहकों को क्या कहते हैं?",
        answers: shuffle([
            { text: "हार्मोन", correct: false },
            { text: "एंजाइम", correct: false },
            { text: "न्यूरोट्रांसमीटर", correct: true },
            { text: "एंटीबॉडी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूरोट्रांसमीटर जैसे एसिटाइलकोलाइन, डोपामाइन और सेरोटोनिन रासायनिक पदार्थ हैं जो सिनेप्टिक फांक के पार तंत्रिका आवेगों को संचारित करते हैं।"
    },
    {
        question: "प्रश्न 31. मस्तिष्क और शरीर के बाकी हिस्सों के बीच तंत्रिका संकेतों के लिए मुख्य मार्ग कौन सा है?",
        answers: shuffle([
            { text: "अनुमस्तिष्क", correct: false },
            { text: "प्रमस्तिष्क", correct: false },
            { text: "मेरुरज्जु (Spinal Cord)", correct: true },
            { text: "कपालीय तंत्रिकाएं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेरुरज्जु मस्तिष्क से शरीर के अन्य भागों तक मोटर कमांड ले जाता है और शरीर से मस्तिष्क तक संवेदी सूचना पहुंचाता है।"
    },
    {
        question: "प्रश्न 32. कपालीय तंत्रिकाओं (Cranial Nerves) की संख्या कितनी होती है?",
        answers: shuffle([
            { text: "10 जोड़े", correct: false },
            { text: "12 जोड़े", correct: true },
            { text: "21 जोड़े", correct: false },
            { text: "31 जोड़े", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मनुष्य में 12 जोड़े कपालीय तंत्रिकाएं होती हैं जो सीधे मस्तिष्क से निकलती हैं और मुख्य रूप से सिर और गर्दन के कार्यों को नियंत्रित करती हैं।"
    },
    {
        question: "प्रश्न 33. भाषा को समझने से संबंधित 'वर्निक का क्षेत्र' (Wernicke's Area) कहाँ स्थित होता है?",
        answers: shuffle([
            { text: "ललाट पालि", correct: false },
            { text: "पश्चकपाल पालि", correct: false },
            { text: "शंख पालि (Temporal Lobe)", correct: true },
            { text: "पार्श्विका पालि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वर्निक का क्षेत्र, जो बोली जाने वाली और लिखी गई भाषा को समझने के लिए महत्वपूर्ण है, आमतौर पर बाएं शंख पालि में स्थित होता है।"
    },
    {
        question: "प्रश्न 34. 'एक्शन पोटेंशियल' (Action Potential) क्या है?",
        answers: shuffle([
            { text: "एक न्यूरॉन की आराम की स्थिति", correct: false },
            { text: "एक न्यूरॉन के साथ यात्रा करने वाला एक विद्युत संकेत", correct: true },
            { text: "दो न्यूरॉन्स के बीच का स्थान", correct: false },
            { text: "एक रासायनिक संदेशवाहक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक्शन पोटेंशियल एक संक्षिप्त, तीव्र विद्युत आवेश है जो एक न्यूरॉन के एक्सॉन के साथ सूचना प्रसारित करने के लिए यात्रा करता है।"
    },
    {
        question: "प्रश्न 35. मस्तिष्क का वह क्षेत्र जो निर्णय लेने, योजना बनाने और व्यक्तित्व के लिए जिम्मेदार है?",
        answers: shuffle([
            { text: "पश्चकपाल पालि", correct: false },
            { text: "प्रीफ्रंटल कॉर्टेक्स (ललाट पालि का हिस्सा)", correct: true },
            { text: "अनुमस्तिष्क", correct: false },
            { text: "थैलेमस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रीफ्रंटल कॉर्टेक्स, जो ललाट पालि के सामने स्थित है, योजना, निर्णय लेने और सामाजिक व्यवहार को नियंत्रित करने में शामिल है।"
    },
    {
        question: "प्रश्न 36. मिर्गी (Epilepsy) का क्या कारण है?",
        answers: shuffle([
            { text: "मस्तिष्क में रक्त के थक्के", correct: false },
            { text: "मस्तिष्क में असामान्य और अत्यधिक विद्युत गतिविधि", correct: true },
            { text: "डोपामाइन की कमी", correct: false },
            { text: "न्यूरॉन्स का क्षय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिर्गी एक न्यूरोलॉजिकल विकार है जिसमें मस्तिष्क की गतिविधि असामान्य और अत्यधिक विद्युत गतिविधि हो जाती है, जिससे दौरे या असामान्य व्यवहार और संवेदनाएं होती हैं।"
    },
    {
        question: "प्रश्न 37. लिम्बिक सिस्टम (Limbic System) मुख्य रूप से किससे संबंधित है?",
        answers: shuffle([
            { text: "संतुलन और समन्वय", correct: false },
            { text: "दृष्टि और श्रवण", correct: false },
            { text: "भावनाओं और स्मृति", correct: true },
            { text: "श्वास और हृदय गति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिम्बिक सिस्टम मस्तिष्क की संरचनाओं का एक समूह है, जिसमें हिप्पोकैम्पस और एमिग्डाला शामिल हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भावनाओं, प्रेरणा और स्मृति में महत्वपूर्ण भूमिका निभाते हैं।"
    },
    {
        question: "प्रश्न 38. 'ग्रे मैटर' (Gray Matter) मुख्य रूप से किससे बना होता है?",
        answers: shuffle([
            { text: "माइलिनेटेड एक्सॉन", correct: false },
            { text: "न्यूरॉन कोशिका काय, डेंड्राइट और सिनेप्स", correct: true },
            { text: "ग्लियल कोशिकाएं", correct: false },
            { text: "प्रमस्तिष्क मेरु द्रव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रे मैटर में तंत्रिका कोशिकाओं के प्रसंस्करण केंद्र (कोशिका काय, डेंड्राइट और सिनेप्स) होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> व्हाइट मैटर मुख्य रूप से संचार के लिए माइलिनेटेड एक्सॉन से बना होता है।"
    },
    {
        question: "प्रश्न 39. मस्तिष्क का कौन सा भाग चेहरे की अभिव्यक्तियों और स्वाद जैसी क्रियाओं में शामिल होता है?",
        answers: shuffle([
            { text: "मेडुला ऑबोंगटा", correct: false },
            { text: "पोंस (Pons)", correct: true },
            { text: "थैलेमस", correct: false },
            { text: "अनुमस्तिष्क", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पोंस कई कपालीय तंत्रिकाओं के लिए एक उत्पत्ति बिंदु के रूप में कार्य करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह चेहरे की संवेदना, चेहरे की गति और स्वाद को नियंत्रित करती हैं।"
    },
    {
        question: "प्रश्न 40. रक्त-मस्तिष्क बाधा (Blood-Brain Barrier) का क्या कार्य है?",
        answers: shuffle([
            { text: "रक्त को मस्तिष्क में प्रवेश करने से रोकना", correct: false },
            { text: "मस्तिष्क को रक्त में मौजूद हानिकारक पदार्थों से बचाना", correct: true },
            { text: "मस्तिष्क को ऑक्सीजन की आपूर्ति करना", correct: false },
            { text: "मस्तिष्क से अपशिष्ट हटाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक अत्यधिक चयनात्मक, अर्ध-पारगम्य सीमा है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह रक्तप्रवाह से विषाक्त पदार्थों, रोगजनकों और अन्य हानिकारक एजेंटों को मस्तिष्क के ऊतकों में प्रवेश करने से रोकती है।"
    },
    {
        question: "प्रश्न 41. जब कोई व्यक्ति पढ़ना सीखता है, तो मस्तिष्क में क्या परिवर्तन होता है?",
        answers: shuffle([
            { text: "नए न्यूरॉन्स का निर्माण होता है", correct: false },
            { text: "मस्तिष्क का आकार बढ़ता है", correct: false },
            { text: "न्यूरॉन्स के बीच सिनेप्टिक कनेक्शन मजबूत होते हैं", correct: true },
            { text: "माइलिन शीथ मोटा हो जाता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सीखने और स्मृति निर्माण की प्रक्रिया में मौजूदा न्यूरॉन्स के बीच संबंधों (सिनेप्स) को मजबूत या कमजोर करना शामिल है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रक्रिया को सिनेप्टिक प्लास्टिसिटी कहा जाता है।"
    },
    {
        question: "प्रश्न 42. मस्तिष्क का कौन सा गोलार्ध रचनात्मकता, कलात्मकता और स्थानिक क्षमताओं से अधिक जुड़ा होता है?",
        answers: shuffle([
            { text: "A) बायाँ गोलार्ध", correct: false },
            { text: "B) दायाँ गोलार्ध", correct: true },
            { text: "A), B) दोनों समान रूप से", correct: false },
            { text: "यह व्यक्ति पर निर्भर करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हालांकि यह एक अति-सरलीकरण है, आम तौर पर दाएं गोलार्ध को रचनात्मक, सहज और स्थानिक कार्यों में अधिक प्रभावी माना जाता है, जबकि बाएं को विश्लेषणात्मक और तार्किक कार्यों में।"
    },
    {
        question: "प्रश्न 43. हाइपोथैलेमस किस ग्रंथि को सीधे नियंत्रित करता है?",
        answers: shuffle([
            { text: "थायरॉयड ग्रंथि", correct: false },
            { text: "अधिवृक्क ग्रंथि", correct: false },
            { text: "पीयूष ग्रंथि (Pituitary Gland)", correct: true },
            { text: "अग्न्याशय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाइपोथैलेमस हार्मोन जारी करके पीयूष ग्रंथि की गतिविधि को नियंत्रित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रकार यह तंत्रिका तंत्र और अंतःस्रावी तंत्र के बीच एक महत्वपूर्ण कड़ी के रूप में कार्य करता है।"
    },
    {
        question: "प्रश्न 44. 'स्ट्रोक' (Stroke) का क्या कारण है?",
        answers: shuffle([
            { text: "मस्तिष्क में अत्यधिक विद्युत गतिविधि", correct: false },
            { text: "मस्तिष्क में रक्त के प्रवाह में रुकावट या रक्तस्राव", correct: true },
            { text: "मस्तिष्क की झिल्लियों में संक्रमण", correct: false },
            { text: "न्यूरॉन्स का धीमा क्षय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्ट्रोक तब होता है जब मस्तिष्क के किसी हिस्से को रक्त की आपूर्ति बाधित हो जाती है (इस्केमिक स्ट्रोक) या जब मस्तिष्क में रक्त वाहिका फट जाती है (रक्तस्रावी स्ट्रोक), जिससे मस्तिष्क की कोशिकाएं मरने लगती हैं।"
    },
    {
        question: "प्रश्न 45. मानव शरीर की सबसे लंबी कोशिका कौन सी है?",
        answers: shuffle([
            { text: "यकृत कोशिका", correct: false },
            { text: "मांसपेशी कोशिका", correct: false },
            { text: "तंत्रिका कोशिका (Neuron)", correct: true },
            { text: "अस्थि कोशिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुछ न्यूरॉन्स, जैसे कि साइटिक तंत्रिका में, बहुत लंबे हो सकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इनका एक्सॉन रीढ़ की हड्डी के आधार से पैर के अंगूठे तक फैला होता है, जो इन्हें मानव शरीर की सबसे लंबी कोशिकाएं बनाता है।"
    },
    {
        question: "प्रश्न 46. कौन सा न्यूरोट्रांसमीटर मूड, भूख और नींद को नियंत्रित करने में मदद करता है?",
        answers: shuffle([
            { text: "एसिटाइलकोलाइन", correct: false },
            { text: "डोपामाइन", correct: false },
            { text: "सेरोटोनिन", correct: true },
            { text: "गाबा (GABA)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेरोटोनिन एक महत्वपूर्ण न्यूरोट्रांसमीटर है जो मूड, नींद, भूख और पाचन सहित कई शारीरिक और मनोवैज्ञानिक कार्यों को प्रभावित करता है।"
    },
    {
        question: "प्रश्न 47. मस्तिष्क स्तंभ (Brainstem) किन संरचनाओं से मिलकर बना है?",
        answers: shuffle([
            { text: "प्रमस्तिष्क और अनुमस्तिष्क", correct: false },
            { text: "थैलेमस और हाइपोथैलेमस", correct: false },
            { text: "मध्य मस्तिष्क, पोंस और मेडुला ऑबोंगटा", correct: true },
            { text: "हिप्पोकैम्पस और एमिग्डाला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मस्तिष्क स्तंभ मस्तिष्क का सबसे निचला हिस्सा है जो प्रमस्तिष्क को रीढ़ की हड्डी से जोड़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें मध्य मस्तिष्क, पोंस और मेडुला ऑबोंगटा शामिल होते हैं।"
    },
    {
        question: "प्रश्न 48. मेडुला ऑबोंगटा में कौन सी क्रियाएं नियंत्रित होती हैं?",
        answers: shuffle([
            { text: "योजना और निर्णय लेना", correct: false },
            { text: "छींकना, खाँसना, निगलना और उल्टी करना", correct: true },
            { text: "संतुलन और समन्वय", correct: false },
            { text: "भाषा और भाषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेडुला ऑबोंगटा कई महत्वपूर्ण प्रतिवर्ती क्रियाओं के लिए केंद्र के रूप में कार्य करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें छींकना, खाँसना, निगलना और उल्टी करना शामिल हैं जो वायुमार्ग और पाचन तंत्र की सुरक्षा के लिए आवश्यक हैं।"
    },
    {
        question: "प्रश्न 49. शरीर की जैविक घड़ी (Biological Clock) कहाँ स्थित होती है?",
        answers: shuffle([
            { text: "अनुमस्तिष्क में", correct: false },
            { text: "मेडुला में", correct: false },
            { text: "हाइपोथैलेमस (सुप्राकियास्मैटिक न्यूक्लियस) में", correct: true },
            { text: "पीनियल ग्रंथि में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाइपोथैलेमस में सुप्राकियास्मैटिक न्यूक्लियस (SCN) शरीर की मुख्य जैविक घड़ी के रूप में कार्य करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह लगभग 24 घंटे के सर्केडियन लय को नियंत्रित करता है।"
    },
    {
        question: "प्रश्न 50. 'सेरेब्रल पाल्सी' (Cerebral Palsy) क्या है?",
        answers: shuffle([
            { text: "एक प्रगतिशील न्यूरोडीजेनेरेटिव रोग", correct: false },
            { text: "गति और मुद्रा को प्रभावित करने वाले विकारों का एक समूह", correct: true },
            { text: "एक प्रकार का मस्तिष्क कैंसर", correct: false },
            { text: "एक तीव्र वायरल संक्रमण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेरेब्रल पाल्सी अविकसित या क्षतिग्रस्त मस्तिष्क के कारण होने वाली एक स्थिति है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शरीर की गति, संतुलन और मुद्रा को नियंत्रित करने की क्षमता को प्रभावित करती है, यह आमतौर पर जन्म से पहले या उसके दौरान होती है।"
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