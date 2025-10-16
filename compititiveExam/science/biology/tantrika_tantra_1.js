const questions = [
    {
        topHeading: "तंत्रिका तंत्र पर आधारित 50 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. तंत्रिका तंत्र की मूल संरचनात्मक और कार्यात्मक इकाई क्या है?",
        answers: shuffle([
            { text: "नेफ्रॉन", correct: false },
            { text: "न्यूरॉन (तंत्रिका कोशिका)", correct: true },
            { text: "एल्वियोली", correct: false },
            { text: "मायोसाइट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूरॉन या तंत्रिका कोशिका ही तंत्रिका तंत्र का आधार है, जो विद्युत और रासायनिक संकेतों के रूप में सूचनाओं को प्राप्त, संसाधित और प्रसारित करती है।"
    },
    {
        question: "प्रश्न 2. मानव मस्तिष्क का सबसे बड़ा भाग कौन सा है?",
        answers: shuffle([
            { text: "अनुमस्तिष्क (Cerebellum)", correct: false },
            { text: "प्रमस्तिष्क (Cerebrum)", correct: true },
            { text: "मेडुला ऑब्लांगेटा", correct: false },
            { text: "थैलेमस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रमस्तिष्क, जिसे सेरिब्रम भी कहते हैं, मस्तिष्क का सबसे बड़ा और सबसे विकसित भाग है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बुद्धि, स्मृति, चेतना, तर्क और इच्छाशक्ति का केंद्र है।"
    },
    {
        question: "प्रश्न 3. दो न्यूरॉन्स के बीच के जंक्शन को क्या कहा जाता है?",
        answers: shuffle([
            { text: "एक्सॉन", correct: false },
            { text: "डेंड्राइट", correct: false },
            { text: "सिनेप्स (Synapse)", correct: true },
            { text: "नोड ऑफ रैन्वियर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिनेप्स वह विशेष जंक्शन है जहां एक न्यूरॉन का एक्सॉन टर्मिनल दूसरे न्यूरॉन के डेंड्राइट से जुड़ता है और न्यूरोट्रांसमीटर के माध्यम से संकेतों का संचार होता है।"
    },
    {
        question: "प्रश्न 4. प्रतिवर्ती क्रियाओं (Reflex Actions) का नियंत्रण केंद्र कहाँ होता है?",
        answers: shuffle([
            { text: "प्रमस्तिष्क", correct: false },
            { text: "अनुमस्तिष्क", correct: false },
            { text: "मेरुरज्जु (Spinal Cord)", correct: true },
            { text: "हाइपोथैलेमस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिकांश प्रतिवर्ती क्रियाएं, जैसे गर्म वस्तु को छूने पर हाथ का तुरंत हटना, मेरुरज्जु द्वारा नियंत्रित होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें मस्तिष्क शामिल नहीं होता है, जिससे प्रतिक्रिया बहुत तेज होती है।"
    },
    {
        question: "प्रश्न 5. मनुष्य में कितनी जोड़ी कपाल तंत्रिकाएं (Cranial Nerves) होती हैं?",
        answers: shuffle([
            { text: "10 जोड़ी", correct: false },
            { text: "12 जोड़ी", correct: true },
            { text: "21 जोड़ी", correct: false },
            { text: "31 जोड़ी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मनुष्य में 12 जोड़ी कपाल तंत्रिकाएं होती हैं जो सीधे मस्तिष्क से निकलती हैं और मुख्य रूप से सिर और गर्दन के अंगों को नियंत्रित करती हैं।"
    },
    {
        question: "प्रश्न 6. शरीर का संतुलन बनाए रखने में मस्तिष्क का कौन सा भाग मदद करता है?",
        answers: shuffle([
            { text: "थैलेमस", correct: false },
            { text: "प्रमस्तिष्क", correct: false },
            { text: "हाइपोथैलेमस", correct: false },
            { text: "अनुमस्तिष्क (Cerebellum)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुमस्तिष्क, जिसे सेरिबैलम भी कहते हैं, शरीर की गतिविधियों में समन्वय, मुद्रा और संतुलन बनाए रखने के लिए जिम्मेदार होता है।"
    },
    {
        question: "प्रश्न 7. न्यूरॉन के एक्सॉन के ऊपर चढ़ी वसायुक्त परत को क्या कहते हैं?",
        answers: shuffle([
            { text: "सार्कोलेमा", correct: false },
            { text: "न्यूरिलेमा", correct: false },
            { text: "मायेलिन शीथ (Myelin Sheath)", correct: true },
            { text: "डेंड्रॉन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मायेलिन शीथ एक इन्सुलेटिंग परत है जो एक्सॉन के चारों ओर लिपटी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह तंत्रिका आवेगों के संचरण की गति को बहुत तेज कर देती है।"
    },
    {
        question: "प्रश्न 8. मनुष्य के मस्तिष्क का औसत वजन कितना होता है?",
        answers: shuffle([
            { text: "लगभग 1000 ग्राम", correct: false },
            { text: "लगभग 1300-1400 ग्राम", correct: true },
            { text: "लगभग 2000 ग्राम", correct: false },
            { text: "लगभग 800 ग्राम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक वयस्क मानव मस्तिष्क का औसत वजन लगभग 1.3 से 1.4 किलोग्राम (1300-1400 ग्राम) होता है।"
    },
    {
        question: "प्रश्न 9. भूख, प्यास, प्यार और घृणा का केंद्र मस्तिष्क का कौन सा भाग है?",
        answers: shuffle([
            { text: "सेरिबैलम", correct: false },
            { text: "मेडुला", correct: false },
            { text: "हाइपोथैलेमस", correct: true },
            { text: "कॉर्पस कैलोसम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाइपोथैलेमस मस्तिष्क का एक छोटा लेकिन महत्वपूर्ण हिस्सा है जो शरीर के तापमान, भूख, प्यास, नींद और भावनाओं जैसी कई मूलभूत क्रियाओं को नियंत्रित करता है।"
    },
    {
        question: "प्रश्न 10. मस्तिष्क को घेरने वाली सुरक्षात्मक झिल्लियों को क्या कहा जाता है?",
        answers: shuffle([
            { text: "प्लूरा", correct: false },
            { text: "पेरिकार्डियम", correct: false },
            { text: "मेनिन्जेस (Meninges)", correct: true },
            { text: "पेरिटोनियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेनिन्जेस तीन झिल्लियों (ड्यूरामेटर, एरेक्नॉइड मेटर और पियामेटर) की एक प्रणाली है जो मस्तिष्क और मेरुरज्जु को घेरकर उनकी सुरक्षा करती है।"
    },
    {
        question: "प्रश्न 11. तंत्रिका आवेग (Nerve Impulse) की प्रकृति कैसी होती है?",
        answers: shuffle([
            { text: "केवल रासायनिक", correct: false },
            { text: "केवल भौतिक", correct: false },
            { text: "केवल विद्युत", correct: false },
            { text: "विद्युत-रासायनिक (Electrochemical)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूरॉन के भीतर आवेग का संचरण एक विद्युत घटना है (आयनों की गति के कारण), जबकि सिनेप्स पर एक न्यूरॉन से दूसरे में इसका संचरण एक रासायनिक घटना (न्यूरोट्रांसमीटर के माध्यम से) है।"
    },
    {
        question: "प्रश्न 12. 'लड़ो या भागो' (Fight or Flight) प्रतिक्रिया के लिए कौन सा तंत्रिका तंत्र जिम्मेदार है?",
        answers: shuffle([
            { text: "केंद्रीय तंत्रिका तंत्र", correct: false },
            { text: "अनुकंपी तंत्रिका तंत्र (Sympathetic Nervous System)", correct: true },
            { text: "परानुकंपी तंत्रिका तंत्र (Parasympathetic Nervous System)", correct: false },
            { text: "कायिक तंत्रिका तंत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुकंपी तंत्रिका तंत्र शरीर को आपातकालीन या तनावपूर्ण स्थितियों के लिए तैयार करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह हृदय गति बढ़ाता है, रक्तचाप बढ़ाता है और ऊर्जा का उपयोग करता है।"
    },
    {
        question: "प्रश्न 13. सिनेप्स पर संकेतों को एक न्यूरॉन से दूसरे न्यूरॉन तक ले जाने वाले रसायन क्या कहलाते हैं?",
        answers: shuffle([
            { text: "हार्मोन", correct: false },
            { text: "एंजाइम", correct: false },
            { text: "न्यूरोट्रांसमीटर", correct: true },
            { text: "एंटीबॉडी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूरोट्रांसमीटर जैसे एसिटाइलकोलाइन, डोपामाइन और सेरोटोनिन रासायनिक संदेशवाहक होते हैं जो सिनेप्टिक फांक को पार करके अगले न्यूरॉन को उत्तेजित या बाधित करते हैं।"
    },
    {
        question: "प्रश्न 14. आँखों में प्रकाश की मात्रा को कौन नियंत्रित करता है?",
        answers: shuffle([
            { text: "कॉर्निया", correct: false },
            { text: "रेटिना", correct: false },
            { text: "पुतली (Pupil)", correct: false },
            { text: "आइरिस (Iris)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आइरिस आंख का रंगीन हिस्सा है जो एक मांसपेशी की तरह काम करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पुतली के आकार को समायोजित करके आंख में प्रवेश करने वाले प्रकाश की मात्रा को नियंत्रित करता है।"
    },
    {
        question: "प्रश्न 15. वस्तु का प्रतिबिंब आँख के किस भाग पर बनता है?",
        answers: shuffle([
            { text: "आइरिस", correct: false },
            { text: "लेंस", correct: false },
            { text: "रेटिना (दृष्टिपटल)", correct: true },
            { text: "कॉर्निया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेटिना आंख के पीछे की प्रकाश-संवेदनशील परत है, जहां प्रकाश केंद्रित होता है और एक वास्तविक, उल्टा प्रतिबिंब बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहीं पर रॉड और कोन कोशिकाएं होती हैं।"
    },
    {
        question: "प्रश्न 16. 'पार्किंसंस रोग' (Parkinson's Disease) शरीर के किस अंग से संबंधित है?",
        answers: shuffle([
            { text: "फेफड़े", correct: false },
            { text: "हृदय", correct: false },
            { text: "यकृत", correct: false },
            { text: "मस्तिष्क", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पार्किंसंस रोग एक न्यूरोडीजेनेरेटिव विकार है जो मस्तिष्क में डोपामाइन उत्पन्न करने वाली तंत्रिका कोशिकाओं के नष्ट होने के कारण होता है, जिससे गति और संतुलन में समस्या होती है।"
    },
    {
        question: "प्रश्न 17. अनैच्छिक क्रियाओं (Involuntary Actions) जैसे कि हृदय की धड़कन और श्वसन का नियंत्रण कौन करता है?",
        answers: shuffle([
            { text: "प्रमस्तिष्क", correct: false },
            { text: "मेडुला ऑब्लांगेटा", correct: true },
            { text: "अनुमस्तिष्क", correct: false },
            { text: "थैलेमस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेडुला ऑब्लांगेटा पश्चमस्तिष्क का हिस्सा है और यह हृदय गति, श्वास, रक्तचाप, छींकने और निगलने जैसी महत्वपूर्ण अनैच्छिक क्रियाओं को नियंत्रित करता है।"
    },
    {
        question: "प्रश्न 18. मनुष्य में कितनी जोड़ी मेरु तंत्रिकाएं (Spinal Nerves) होती हैं?",
        answers: shuffle([
            { text: "12 जोड़ी", correct: false },
            { text: "21 जोड़ी", correct: false },
            { text: "31 जोड़ी", correct: true },
            { text: "41 जोड़ी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेरुरज्जु से 31 जोड़ी मेरु तंत्रिकाएं निकलती हैं जो शरीर के धड़ और अंगों तक संदेश पहुंचाती हैं।"
    },
    {
        question: "प्रश्न 19. प्रमस्तिष्क के दोनों गोलार्धों (Hemispheres) को कौन सी संरचना जोड़ती है?",
        answers: shuffle([
            { text: "हाइपोथैलेमस", correct: false },
            { text: "थैलेमस", correct: false },
            { text: "कॉर्पस कैलोसम", correct: true },
            { text: "पोंस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कॉर्पस कैलोसम तंत्रिका तंतुओं का एक मोटा बंडल है जो मस्तिष्क के बाएं और दाएं गोलार्धों को जोड़ता है और उनके बीच संचार को सक्षम बनाता है।"
    },
    {
        question: "प्रश्न 20. ईईजी (EEG - Electroencephalogram) का उपयोग किसकी गतिविधि दर्ज करने के लिए किया जाता है?",
        answers: shuffle([
            { text: "हृदय", correct: false },
            { text: "फेफड़े", correct: false },
            { text: "मस्तिष्क", correct: true },
            { text: "मांसपेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ईईजी एक परीक्षण है जो खोपड़ी पर लगाए गए इलेक्ट्रोड का उपयोग करके मस्तिष्क की विद्युत गतिविधि को मापता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका उपयोग मिर्गी जैसे विकारों का निदान करने के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 21. सुनने की प्रक्रिया में कौन सी कपाल तंत्रिका शामिल होती है?",
        answers: shuffle([
            { text: "ऑप्टिक तंत्रिका", correct: false },
            { text: "फेशियल तंत्रिका", correct: false },
            { text: "ऑडिटरी तंत्रिका (वेस्टिबुलोकोक्लियर)", correct: true },
            { text: "वेगस तंत्रिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आठवीं कपाल तंत्रिका, जिसे ऑडिटरी या वेस्टिबुलोकोक्लियर तंत्रिका कहा जाता है, आंतरिक कान से ध्वनि और संतुलन की जानकारी मस्तिष्क तक ले जाती है।"
    },
    {
        question: "प्रश्न 22. 'अल्जाइमर रोग' (Alzheimer's Disease) में मानव शरीर का कौन सा अंग प्रभावित होता है?",
        answers: shuffle([
            { text: "आंखें", correct: false },
            { text: "यकृत", correct: false },
            { text: "मस्तिष्क", correct: true },
            { text: "वृक्क", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अल्जाइमर एक प्रगतिशील मस्तिष्क विकार है जो धीरे-धीरे स्मृति, सोच कौशल और अंततः सरल कार्यों को करने की क्षमता को नष्ट कर देता है।"
    },
    {
        question: "प्रश्न 23. न्यूरॉन का कौन सा भाग अन्य न्यूरॉन्स से संकेत प्राप्त करता है?",
        answers: shuffle([
            { text: "एक्सॉन", correct: false },
            { text: "कोशिका काय (Cell body)", correct: false },
            { text: "डेंड्राइट (Dendrite)", correct: true },
            { text: "सिनेप्टिक नोब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डेंड्राइट पेड़ की शाखाओं जैसी संरचनाएं होती हैं जो न्यूरॉन के कोशिका काय से निकलती हैं और अन्य न्यूरॉन्स से आने वाले संकेतों को प्राप्त करने के लिए मुख्य सतह के रूप में कार्य करती हैं।"
    },
    {
        question: "प्रश्न 24. कौन सी कोशिकाएं केंद्रीय तंत्रिका तंत्र में मायेलिन शीथ का निर्माण करती हैं?",
        answers: shuffle([
            { text: "श्वान कोशिकाएं", correct: false },
            { text: "एस्ट्रोसाइट्स", correct: false },
            { text: "ओलिगोडेंड्रोसाइट्स", correct: true },
            { text: "माइक्रोग्लिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओलिगोडेंड्रोसाइट्स केंद्रीय तंत्रिका तंत्र (मस्तिष्क और मेरुरज्जु) में एक्सॉन के चारों ओर मायेलिन शीथ बनाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि श्वान कोशिकाएं परिधीय तंत्रिका तंत्र में यह कार्य करती हैं।"
    },
    {
        question: "प्रश्न 25. आराम और पाचन ('Rest and Digest') की स्थिति से कौन सा तंत्रिका तंत्र जुड़ा है?",
        answers: shuffle([
            { text: "अनुकंपी तंत्रिका तंत्र", correct: false },
            { text: "परानुकंपी तंत्रिका तंत्र (Parasympathetic Nervous System)", correct: true },
            { text: "केंद्रीय तंत्रिका तंत्र", correct: false },
            { text: "कायिक तंत्रिका तंत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परानुकंपी तंत्रिका तंत्र शरीर की ऊर्जा का संरक्षण करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह हृदय गति को धीमा करता है, पाचन को उत्तेजित करता है और शरीर को शांत और आराम की स्थिति में लाता है।"
    },
    {
        question: "प्रश्न 26. मस्तिष्क और मेरुरज्जु में पाए जाने वाले द्रव को क्या कहते हैं?",
        answers: shuffle([
            { text: "प्लाज्मा", correct: false },
            { text: "लसीका (Lymph)", correct: false },
            { text: "सीरम", correct: false },
            { text: "सेरिब्रोस्पाइनल द्रव (Cerebrospinal Fluid - CSF)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> CSF एक स्पष्ट, रंगहीन तरल पदार्थ है जो मस्तिष्क और मेरुरज्जु को घेरता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उन्हें यांत्रिक आघात से बचाता है और पोषक तत्व प्रदान करता है।"
    },
    {
        question: "प्रश्न 27. मानव आंख में कौन सा लेंस पाया जाता है?",
        answers: shuffle([
            { text: "अवतल लेंस", correct: false },
            { text: "उत्तल लेंस", correct: true },
            { text: "समतल लेंस", correct: false },
            { text: "बेलनाकार लेंस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मानव आंख में एक लचीला, जैविक उत्तल लेंस होता है जो रेटिना पर प्रकाश को केंद्रित करने के लिए अपना आकार बदल सकता है।"
    },
    {
        question: "प्रश्न 28. निकट दृष्टि दोष (Myopia) को ठीक करने के लिए किस लेंस का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "उत्तल लेंस", correct: false },
            { text: "अवतल लेंस", correct: true },
            { text: "बाइफोकल लेंस", correct: false },
            { text: "समतल लेंस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निकट दृष्टि दोष में, प्रकाश रेटिना के सामने केंद्रित हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अवतल लेंस प्रकाश की किरणों को थोड़ा फैला देता है ताकि वे सही ढंग से रेटिना पर केंद्रित हो सकें।"
    },
    {
        question: "प्रश्न 29. मानव कान का कौन सा भाग ध्वनि कंपनों को विद्युत संकेतों में बदलता है?",
        answers: shuffle([
            { text: "कर्ण पटल (Ear drum)", correct: false },
            { text: "मध्य कर्ण की अस्थियां", correct: false },
            { text: "कॉक्लिया (Cochlea)", correct: true },
            { text: "यूस्टेशियन ट्यूब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कॉक्लिया आंतरिक कान का एक सर्पिल आकार का, द्रव से भरा अंग है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें विशेष बाल कोशिकाएं होती हैं जो ध्वनि कंपनों को विद्युत आवेगों में परिवर्तित करती हैं, जिन्हें श्रवण तंत्रिका द्वारा मस्तिष्क तक भेजा जाता है।"
    },
    {
        question: "प्रश्न 30. जीभ का कौन सा भाग कड़वे स्वाद के प्रति सबसे अधिक संवेदनशील होता है?",
        answers: shuffle([
            { text: "अगला सिरा", correct: false },
            { text: "पिछला भाग", correct: true },
            { text: "किनारे", correct: false },
            { text: "मध्य भाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारंपरिक स्वाद मानचित्र के अनुसार, जीभ का पिछला हिस्सा कड़वे स्वाद के प्रति सबसे अधिक संवेदनशील माना जाता है, हालांकि अब यह ज्ञात है कि सभी स्वाद जीभ के सभी हिस्सों द्वारा महसूस किए जा सकते हैं।"
    },
    {
        question: "प्रश्न 31. तंत्रिका तंत्र को मुख्य रूप से कितने भागों में बांटा गया है?",
        answers: shuffle([
            { text: "दो", correct: true },
            { text: "तीन", correct: false },
            { text: "चार", correct: false },
            { text: "पाँच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तंत्रिका तंत्र को संरचनात्मक रूप से दो मुख्य भागों में विभाजित किया गया है: केंद्रीय तंत्रिका तंत्र (CNS) और परिधीय तंत्रिका तंत्र (PNS)।"
    },
    {
        question: "प्रश्न 32. 'मिर्गी' (Epilepsy) का संबंध शरीर के किस अंग से है?",
        answers: shuffle([
            { text: "यकृत", correct: false },
            { text: "हृदय", correct: false },
            { text: "मस्तिष्क", correct: true },
            { text: "फेफड़े", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिर्गी एक केंद्रीय तंत्रिका तंत्र (न्यूरोलॉजिकल) विकार है जिसमें मस्तिष्क की गतिविधि असामान्य हो जाती है, जिससे दौरे या असामान्य व्यवहार और संवेदनाएं होती हैं।"
    },
    {
        question: "प्रश्न 33. पोंस, सेरिबैलम और मेडुला किस मस्तिष्क के भाग हैं?",
        answers: shuffle([
            { text: "अग्रमस्तिष्क (Forebrain)", correct: false },
            { text: "मध्यमस्तिष्क (Midbrain)", correct: false },
            { text: "पश्चमस्तिष्क (Hindbrain)", correct: true },
            { text: "प्रमस्तिष्क", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पश्चमस्तिष्क में पोंस, अनुमस्तिष्क (सेरिबैलम) और मेडुला ऑब्लांगेटा शामिल होते हैं, जो कई महत्वपूर्ण शारीरिक कार्यों को नियंत्रित करते हैं।"
    },
    {
        question: "प्रश्न 34. तंत्रिका कोशिका का कौन सा भाग कोशिका के चयापचय कार्यों का केंद्र होता है?",
        answers: shuffle([
            { text: "एक्सॉन", correct: false },
            { text: "डेंड्राइट", correct: false },
            { text: "कोशिका काय (Cell Body / Soma)", correct: true },
            { text: "सिनेप्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशिका काय, जिसे सोमा भी कहा जाता है, में न्यूरॉन का केंद्रक और अधिकांश कोशिकांग होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कोशिका के जीवन-निर्वाह (चयापचय) कार्यों के लिए जिम्मेदार है।"
    },
    {
        question: "प्रश्न 35. मानव शरीर की सबसे लंबी कोशिका कौन सी है?",
        answers: shuffle([
            { text: "यकृत कोशिका", correct: false },
            { text: "पेशी कोशिका", correct: false },
            { text: "तंत्रिका कोशिका (Neuron)", correct: true },
            { text: "अस्थि कोशिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुछ तंत्रिका कोशिकाएं, विशेष रूप से जिनके एक्सॉन मेरुरज्जु से पैर की उंगलियों तक जाते हैं, मानव शरीर की सबसे लंबी कोशिकाएं होती हैं, जो एक मीटर से भी अधिक लंबी हो सकती हैं।"
    },
    {
        question: "प्रश्न 36. मस्तिष्क का कौन सा भाग रिले स्टेशन (relay station) की तरह कार्य करता है?",
        answers: shuffle([
            { text: "हाइपोथैलेमस", correct: false },
            { text: "थैलेमस", correct: true },
            { text: "सेरिबैलम", correct: false },
            { text: "पोंस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थैलेमस संवेदी सूचनाओं (गंध को छोड़कर) के लिए एक प्रमुख रिले केंद्र के रूप में कार्य करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहां सूचना को प्रमस्तिष्क के संबंधित क्षेत्रों में भेजे जाने से पहले संसाधित किया जाता है।"
    },
    {
        question: "प्रश्न 37. एक्सॉन के बीच में मायेलिन शीथ रहित खाली जगह को क्या कहते हैं?",
        answers: shuffle([
            { text: "सिनेप्स", correct: false },
            { text: "श्वान कोशिका", correct: false },
            { text: "नोड ऑफ रैन्वियर (Node of Ranvier)", correct: true },
            { text: "निसल ग्रेन्यूल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये मायेलिन शीथ में नियमित अंतराल पर पाए जाने वाले गैप हैं जिन्हें नोड ऑफ रैन्वियर कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> तंत्रिका आवेग इन नोड्स पर एक से दूसरे पर कूदता है (Saltatory Conduction), जिससे संचरण की गति बढ़ जाती है।"
    },
    {
        question: "प्रश्न 38. दूर दृष्टि दोष (Hypermetropia) में प्रतिबिंब कहाँ बनता है?",
        answers: shuffle([
            { text: "रेटिना के सामने", correct: false },
            { text: "रेटिना के पीछे", correct: true },
            { text: "रेटिना पर", correct: false },
            { text: "अंध बिंदु पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दूर दृष्टि दोष में, आंख की पुतली छोटी हो जाने या लेंस की फोकस दूरी बढ़ जाने के कारण प्रकाश की किरणें रेटिना के पीछे केंद्रित होती हैं, जिससे पास की वस्तुएं धुंधली दिखाई देती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे उत्तल लेंस से ठीक किया जाता है।"
    },
    {
        question: "प्रश्न 39. सेरोटोनिन और डोपामाइन क्या हैं?",
        answers: shuffle([
            { text: "हार्मोन", correct: false },
            { text: "एंजाइम", correct: false },
            { text: "न्यूरोट्रांसमीटर", correct: true },
            { text: "विटामिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेरोटोनिन और डोपामाइन महत्वपूर्ण न्यूरोट्रांसमीटर हैं जो मूड, नींद, भूख और सीखने जैसी कई मस्तिष्क की क्रियाओं को प्रभावित करते हैं।"
    },
    {
        question: "प्रश्न 40. त्वचा का सबसे बाहरी संवेदी रिसेप्टर कौन सा है?",
        answers: shuffle([
            { text: "दबाव रिसेप्टर", correct: false },
            { text: "ताप रिसेप्टर", correct: false },
            { text: "दर्द रिसेप्टर (Nociceptors)", correct: true },
            { text: "स्पर्श रिसेप्टर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दर्द रिसेप्टर्स या नोसिसेप्टर्स स्वतंत्र तंत्रिका अंत होते हैं जो त्वचा की एपिडर्मिस (सबसे बाहरी परत) तक फैले होते हैं और ऊतक क्षति या संभावित क्षति का पता लगाते हैं।"
    },
    {
        question: "प्रश्न 41. परिधीय तंत्रिका तंत्र (PNS) में क्या शामिल होता है?",
        answers: shuffle([
            { text: "केवल मस्तिष्क", correct: false },
            { text: "केवल मेरुरज्जु", correct: false },
            { text: "मस्तिष्क और मेरुरज्जु", correct: false },
            { text: "मस्तिष्क और मेरुरज्जु से निकलने वाली तंत्रिकाएं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> PNS में केंद्रीय तंत्रिका तंत्र (CNS) के बाहर की सभी तंत्रिकाएं शामिल होती हैं, जो CNS को शरीर के बाकी हिस्सों से जोड़ती हैं।"
    },
    {
        question: "प्रश्न 42. रेटिना में कौन सी कोशिकाएं रंग दृष्टि के लिए जिम्मेदार होती हैं?",
        answers: shuffle([
            { text: "रॉड कोशिकाएं (Rod cells)", correct: false },
            { text: "कोन कोशिकाएं (Cone cells)", correct: true },
            { text: "गैन्ग्लियन कोशिकाएं", correct: false },
            { text: "बाइपोलर कोशिकाएं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोन कोशिकाएं तेज रोशनी में काम करती हैं और रंगीन दृष्टि के लिए जिम्मेदार होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> तीन प्रकार की कोन कोशिकाएं होती हैं - लाल, हरी और नीली।"
    },
    {
        question: "प्रश्न 43. 'मेनिनजाइटिस' (Meningitis) बीमारी में सूजन कहाँ होती है?",
        answers: shuffle([
            { text: "मस्तिष्क की कोशिकाओं में", correct: false },
            { text: "मेरुरज्जु में", correct: false },
            { text: "मस्तिष्क और मेरुरज्जु को ढकने वाली झिल्लियों में", correct: true },
            { text: "कपाल तंत्रिकाओं में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेनिनजाइटिस मेनिन्जेस (मस्तिष्क और मेरुरज्जु को घेरने वाली सुरक्षात्मक झिल्लियां) की सूजन है, जो आमतौर पर संक्रमण के कारण होती है।"
    },
    {
        question: "प्रश्न 44. स्वचालित (Autonomic) तंत्रिका तंत्र किसे नियंत्रित करता है?",
        answers: shuffle([
            { text: "ऐच्छिक मांसपेशियों को", correct: false },
            { text: "अनैच्छिक क्रियाओं और आंतरिक अंगों को", correct: true },
            { text: "केवल संवेदी सूचनाओं को", correct: false },
            { text: "केवल प्रतिवर्ती क्रियाओं को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्वचालित तंत्रिका तंत्र हृदय, ग्रंथियों और चिकनी मांसपेशियों जैसे आंतरिक अंगों के कार्यों को नियंत्रित करता है, जो हमारे सचेत नियंत्रण में नहीं होते हैं।"
    },
    {
        question: "प्रश्न 45. जब कोई न्यूरॉन आराम की स्थिति में होता है, तो झिल्ली के अंदर का आवेश कैसा होता है?",
        answers: shuffle([
            { text: "धनात्मक", correct: false },
            { text: "ऋणात्मक", correct: true },
            { text: "उदासीन", correct: false },
            { text: "परिवर्तनशील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आराम की स्थिति में, सोडियम-पोटेशियम पंप के कारण, कोशिका झिल्ली के अंदर बाहर की तुलना में अधिक ऋणात्मक आवेश होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे रेस्टिंग मेम्ब्रेन पोटेंशियल कहा जाता है।"
    },
    {
        question: "प्रश्न 46. शरीर की सबसे बड़ी कपाल तंत्रिका कौन सी है?",
        answers: shuffle([
            { text: "ऑप्टिक तंत्रिका", correct: false },
            { text: "फेशियल तंत्रिका", correct: false },
            { text: "ट्राइजेमिनल तंत्रिका", correct: false },
            { text: "वेगस तंत्रिका", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दसवीं कपाल तंत्रिका, वेगस तंत्रिका, सबसे लंबी और सबसे जटिल कपाल तंत्रिकाओं में से एक है, जो गर्दन, छाती और पेट में कई अंगों को नियंत्रित करती है।"
    },
    {
        question: "प्रश्न 47. ग्रे मैटर (Gray Matter) मुख्य रूप से किससे बना होता है?",
        answers: shuffle([
            { text: "मायेलिनेटेड एक्सॉन", correct: false },
            { text: "न्यूरॉन के कोशिका काय और डेंड्राइट", correct: true },
            { text: "सेरिब्रोस्पाइनल द्रव", correct: false },
            { text: "श्वान कोशिकाएं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रे मैटर में मुख्य रूप से न्यूरॉन के कोशिका काय, डेंड्राइट और अनमायेलिनेटेड एक्सॉन होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह वह जगह है जहाँ सिनैप्टिक प्रसंस्करण होता है।"
    },
    {
        question: "प्रश्न 48. किसी व्यक्ति की अल्पकालिक स्मृति (Short-term memory) को दीर्घकालिक स्मृति (Long-term memory) में बदलने में मस्तिष्क का कौन सा भाग महत्वपूर्ण है?",
        answers: shuffle([
            { text: "एमिग्डाला", correct: false },
            { text: "हिप्पोकैम्पस", correct: true },
            { text: "सेरिबैलम", correct: false },
            { text: "मेडुला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिप्पोकैम्पस लिम्बिक प्रणाली का एक हिस्सा है और नई यादों के निर्माण और उन्हें दीर्घकालिक भंडारण के लिए समेकित करने में एक महत्वपूर्ण भूमिका निभाता है।"
    },
    {
        question: "प्रश्न 49. 'डिस्लेक्सिया' (Dyslexia) क्या है?",
        answers: shuffle([
            { text: "सोने में कठिनाई", correct: false },
            { text: "चलने में कठिनाई", correct: false },
            { text: "भोजन निगलने में कठिनाई", correct: false },
            { text: "पढ़ने और सीखने संबंधी विकार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डिस्लेक्सिया एक सीखने संबंधी विकार है जिसमें ध्वनियों को पहचानने और उन्हें अक्षरों और शब्दों से जोड़ने में समस्या होती है, जिससे पढ़ने में कठिनाई होती है।"
    },
    {
        question: "प्रश्न 50. शरीर में दर्द और तापमान की संवेदना को कौन सी तंत्रिकाएं मस्तिष्क तक ले जाती हैं?",
        answers: shuffle([
            { text: "मोटर तंत्रिकाएं", correct: false },
            { text: "संवेदी तंत्रिकाएं (Sensory Nerves)", correct: true },
            { text: "मिश्रित तंत्रिकाएं", correct: false },
            { text: "कपाल तंत्रिकाएं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संवेदी तंत्रिकाएं शरीर के विभिन्न हिस्सों (जैसे त्वचा) से स्पर्श, दर्द, तापमान और दबाव जैसी संवेदनाओं को केंद्रीय तंत्रिका तंत्र तक पहुंचाती हैं।"
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