const questions = [
    {
        topHeading: "मानव इंद्रियों पर आधारित 50 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. मानव आँख में प्रतिबिंब कहाँ बनता है?",
        answers: shuffle([
            { text: "कॉर्निया (Cornea)", correct: false },
            { text: "आइरिस (Iris)", correct: false },
            { text: "रेटिना (Retina)", correct: true },
            { text: "पुतली (Pupil)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेटिना आँख के पीछे एक प्रकाश-संवेदनशील परत है, जहाँ लेंस द्वारा केंद्रित प्रकाश एक वास्तविक और उल्टा प्रतिबिंब बनाता है।"
    },
    {
        question: "प्रश्न 2. आँख का कौन सा भाग प्रकाश की मात्रा को नियंत्रित करता है जो पुतली में प्रवेश करती है?",
        answers: shuffle([
            { text: "रेटिना", correct: false },
            { text: "कॉर्निया", correct: false },
            { text: "आइरिस (परितारिका)", correct: true },
            { text: "लेंस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आइरिस एक रंगीन मांसपेशी है जो पुतली के आकार को समायोजित करके आँख में प्रवेश करने वाले प्रकाश की मात्रा को नियंत्रित करती है।"
    },
    {
        question: "प्रश्न 3. निकट दृष्टि दोष (Myopia) को ठीक करने के लिए किस प्रकार के लेंस का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "उत्तल लेंस (Convex Lens)", correct: false },
            { text: "अवतल लेंस (Concave Lens)", correct: true },
            { text: "बेलनाकार लेंस (Cylindrical Lens)", correct: false },
            { text: "बाइफोकल लेंस (Bifocal Lens)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निकट दृष्टि दोष में, प्रतिबिंब रेटिना से पहले बन जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अवतल लेंस प्रकाश किरणों को फैलाता है ताकि वे सही ढंग से रेटिना पर केंद्रित हो सकें।"
    },
    {
        question: "प्रश्न 4. आँख में रंग दृष्टि (Color Vision) के लिए कौन सी कोशिकाएं जिम्मेदार हैं?",
        answers: shuffle([
            { text: "शलाका कोशिकाएं (Rod Cells)", correct: false },
            { text: "शंकु कोशिकाएं (Cone Cells)", correct: true },
            { text: "गैंग्लियन कोशिकाएं (Ganglion Cells)", correct: false },
            { text: "एपिथेलियल कोशिकाएं (Epithelial Cells)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शंकु कोशिकाएं तेज रोशनी में काम करती हैं और रंगों को पहचानने के लिए जिम्मेदार होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये तीन प्रकार की होती हैं: लाल, हरी और नीली।"
    },
    {
        question: "प्रश्न 5. जब कोई व्यक्ति अँधेरे कमरे में प्रवेश करता है, तो पुतली के आकार पर क्या प्रभाव पड़ता है?",
        answers: shuffle([
            { text: "सिकुड़ जाती है", correct: false },
            { text: "फैल जाती है (बड़ी हो जाती है)", correct: true },
            { text: "कोई परिवर्तन नहीं होता", correct: false },
            { text: "पहले सिकुड़ती है फिर फैलती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिक प्रकाश को आँख में प्रवेश करने देने के लिए, आइरिस पुतली को फैला देती है ताकि कम रोशनी में बेहतर देखा जा सके।"
    },
    {
        question: "प्रश्न 6. आँख का कौन सा भाग नेत्रदान में दान किया जाता है?",
        answers: shuffle([
            { text: "पूरा नेत्रगोलक", correct: false },
            { text: "रेटिना", correct: false },
            { text: "लेंस", correct: false },
            { text: "कॉर्निया", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कॉर्निया आँख की सबसे बाहरी, पारदर्शी परत है।<br><br><i class='fa-solid fa-angles-right icon'></i> नेत्रदान में केवल कॉर्निया का प्रत्यारोपण किया जाता है।"
    },
    {
        question: "प्रश्न 7. दूर दृष्टि दोष (Hypermetropia) में प्रतिबिंब कहाँ बनता है?",
        answers: shuffle([
            { text: "रेटिना के सामने", correct: false },
            { text: "रेटिना के पीछे", correct: true },
            { text: "रेटिना पर", correct: false },
            { text: "अंध बिंदु पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस दोष में, आँख की फोकस करने की क्षमता कम हो जाती है, जिससे पास की वस्तुओं से आने वाली प्रकाश किरणें रेटिना के पीछे केंद्रित होती हैं।"
    },
    {
        question: "प्रश्न 8. आँखों में आँसू किस ग्रंथि द्वारा निर्मित होते हैं?",
        answers: shuffle([
            { text: "पीयूष ग्रंथि", correct: false },
            { text: "लैक्रिमल ग्रंथि (Lacrimal Gland)", correct: true },
            { text: "थायरॉयड ग्रंथि", correct: false },
            { text: "लार ग्रंथि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैक्रिमल ग्रंथियाँ (अश्रु ग्रंथियाँ) आँखों के ऊपरी-बाहरी हिस्से में स्थित होती हैं और आँसू का उत्पादन करती हैं जो आँखों को नम और साफ रखते हैं।"
    },
    {
        question: "प्रश्न 9. रेटिना पर 'अंध बिंदु' (Blind Spot) क्यों होता है?",
        answers: shuffle([
            { text: "यहाँ केवल शंकु कोशिकाएं होती हैं", correct: false },
            { text: "यहाँ केवल शलाका कोशिकाएं होती हैं", correct: false },
            { text: "यहाँ प्रकाशग्राही कोशिकाएं (शंकु और शलाका) नहीं होती हैं", correct: true },
            { text: "यहाँ लेंस का केंद्र होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंध बिंदु वह स्थान है जहाँ ऑप्टिक तंत्रिका रेटिना से निकलती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस स्थान पर कोई रॉड्स या कोन्स नहीं होते, इसलिए यहाँ बनने वाले प्रतिबिंब को नहीं देखा जा सकता।"
    },
    {
        question: "प्रश्न 10. मोतियाबिंद (Cataract) में आँख का कौन सा भाग प्रभावित होता है?",
        answers: shuffle([
            { text: "आइरिस", correct: false },
            { text: "लेंस", correct: true },
            { text: "कॉर्निया", correct: false },
            { text: "रेटिना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोतियाबिंद में, आँख का प्राकृतिक लेंस धुंधला हो जाता है, जिससे दृष्टि में बाधा आती है।"
    },
    {
        question: "प्रश्न 11. कम रोशनी में देखने के लिए कौन सी कोशिकाएं उत्तरदायी हैं?",
        answers: shuffle([
            { text: "शंकु कोशिकाएं (Cone Cells)", correct: false },
            { text: "शलाका कोशिकाएं (Rod Cells)", correct: true },
            { text: "लाल रक्त कोशिकाएं", correct: false },
            { text: "तंत्रिका कोशिकाएं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शलाका कोशिकाएं प्रकाश के प्रति बहुत संवेदनशील होती हैं और हमें मंद प्रकाश (जैसे रात में) में देखने में सक्षम बनाती हैं, लेकिन वे रंग नहीं पहचान सकतीं।"
    },
    {
        question: "प्रश्न 12. मानव कान का कौन सा भाग शरीर का संतुलन बनाए रखने में मदद करता है?",
        answers: shuffle([
            { text: "बाह्य कर्ण (Outer Ear)", correct: false },
            { text: "कर्णपटह (Eardrum)", correct: false },
            { text: "मध्य कर्ण की अस्थियाँ", correct: false },
            { text: "अंतःकर्ण (Inner Ear) का वेस्टिबुलर तंत्र", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंतःकर्ण में मौजूद अर्धवृत्ताकार नलिकाएं (Semicircular canals) और ओटोलिथ अंग शरीर की गति और स्थिति का पता लगाकर संतुलन बनाए रखने में मदद करते हैं।"
    },
    {
        question: "प्रश्न 13. ध्वनि तरंगों को विद्युत संकेतों में कहाँ परिवर्तित किया जाता है?",
        answers: shuffle([
            { text: "कर्णपटह (Eardrum)", correct: false },
            { text: "मैलीयस, इन्कस, स्टेप्स", correct: false },
            { text: "कर्णावर्त (Cochlea)", correct: true },
            { text: "यूस्टेशियन ट्यूब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोक्लिया (कर्णावर्त) अंतःकर्ण का एक सर्पिल आकार का अंग है जिसमें द्रव और संवेदनशील रोम कोशिकाएं होती हैं, जो ध्वनि कंपनों को तंत्रिका आवेगों में बदलती हैं।"
    },
    {
        question: "प्रश्न 14. मानव कान की सबसे छोटी हड्डी का नाम क्या है?",
        answers: shuffle([
            { text: "मैलीयस (Malleus)", correct: false },
            { text: "इन्कस (Incus)", correct: false },
            { text: "स्टेप्स (Stapes)", correct: true },
            { text: "फीमर (Femur)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्टेप्स न केवल कान की, बल्कि पूरे मानव शरीर की सबसे छोटी हड्डी है, जो मध्य कान में स्थित है।"
    },
    {
        question: "प्रश्न 15. कान का पर्दा (Eardrum) का वैज्ञानिक नाम क्या है?",
        answers: shuffle([
            { text: "पिन्ना (Pinna)", correct: false },
            { text: "कोक्लिया (Cochlea)", correct: false },
            { text: "टिम्पैनिक झिल्ली (Tympanic Membrane)", correct: true },
            { text: "ऑडिटरी कैनाल (Auditory Canal)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टिम्पैनिक झिल्ली एक पतली झिल्ली है जो बाहरी कान को मध्य कान से अलग करती है और ध्वनि तरंगों से कंपन करती है।"
    },
    {
        question: "प्रश्न 16. मध्य कान को गले से जोड़ने वाली नली का क्या नाम है?",
        answers: shuffle([
            { text: "ऑडिटरी कैनाल", correct: false },
            { text: "यूस्टेशियन ट्यूब", correct: true },
            { text: "सेमीसर्कुलर कैनाल", correct: false },
            { text: "कोक्लियर डक्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूस्टेशियन ट्यूब कान के पर्दे के दोनों ओर हवा के दबाव को बराबर करने में मदद करती है, जो सुनने के लिए महत्वपूर्ण है।"
    },
    {
        question: "प्रश्न 17. ध्वनि की प्रबलता (Loudness) किस इकाई में मापी जाती है?",
        answers: shuffle([
            { text: "हर्ट्ज (Hertz)", correct: false },
            { text: "डेसिबल (Decibel)", correct: true },
            { text: "पास्कल (Pascal)", correct: false },
            { text: "मीटर (Meter)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डेसिबल (dB) ध्वनि की तीव्रता या प्रबलता को मापने के लिए उपयोग की जाने वाली एक लघुगणकीय इकाई है।"
    },
    {
        question: "प्रश्न 18. कान का बाहरी हिस्सा, जो ध्वनि तरंगों को इकट्ठा करता है, क्या कहलाता है?",
        answers: shuffle([
            { text: "कोक्लिया", correct: false },
            { text: "स्टेप्स", correct: false },
            { text: "पिन्ना या ऑरिकल", correct: true },
            { text: "ईयरड्रम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पिन्ना उपास्थि से बना कान का दृश्य भाग है जो ध्वनि को एकत्रित करके श्रवण नलिका की ओर निर्देशित करता है।"
    },
    {
        question: "प्रश्न 19. मध्य कान की तीन हड्डियाँ (ऑसिकल्स) का सही क्रम क्या है?",
        answers: shuffle([
            { text: "इन्कस, मैलीयस, स्टेप्स", correct: false },
            { text: "स्टेप्स, इन्कस, मैलीयस", correct: false },
            { text: "मैलीयस, इन्कस, स्टेप्स", correct: true },
            { text: "मैलीयस, स्टेप्स, इन्कस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्वनि कंपन पहले ईयरड्रम से मैलीयस (हथौड़ा) में, फिर इन्कस (निहाई) में, और अंत में स्टेप्स (रकाब) में स्थानांतरित होता है।"
    },
    {
        question: "प्रश्न 20. ध्वनि की आवृत्ति (Frequency) या तारत्व (Pitch) किस इकाई में मापी जाती है?",
        answers: shuffle([
            { text: "डेसिबल", correct: false },
            { text: "जूल", correct: false },
            { text: "हर्ट्ज (Hz)", correct: true },
            { text: "वॉट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्ट्ज प्रति सेकंड चक्रों की संख्या को मापता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उच्च आवृत्ति का अर्थ है उच्च तारत्व या तीखी आवाज।"
    },
    {
        question: "प्रश्न 21. मानव के लिए श्रव्य ध्वनि की सामान्य सीमा क्या है?",
        answers: shuffle([
            { text: "2 हर्ट्ज से 200 हर्ट्ज", correct: false },
            { text: "20 हर्ट्ज से 20,000 हर्ट्ज", correct: true },
            { text: "200 हर्ट्ज से 2,000 हर्ट्ज", correct: false },
            { text: "20,000 हर्ट्ज से अधिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक स्वस्थ युवा व्यक्ति इस आवृत्ति रेंज के भीतर की ध्वनियों को सुन सकता है।"
    },
    {
        question: "प्रश्न 22. सूंघने की क्रिया से संबंधित ग्राही (receptors) कहाँ स्थित होते हैं?",
        answers: shuffle([
            { text: "नासिका के निचले भाग में", correct: false },
            { text: "नासिका गुहा के ऊपरी भाग में (घ्राण उपकला)", correct: true },
            { text: "फेफड़ों में", correct: false },
            { text: "साइनस में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घ्राण (Olfactory) रिसेप्टर न्यूरॉन्स नासिका गुहा की छत पर स्थित एक छोटे से क्षेत्र में होते हैं, जिसे घ्राण उपकला (Olfactory epithelium) कहा जाता है।"
    },
    {
        question: "प्रश्न 23. गंध की भावना के लिए वैज्ञानिक शब्द क्या है?",
        answers: shuffle([
            { text: "गस्टेशन (Gustation)", correct: false },
            { text: "ऑडिशन (Audition)", correct: false },
            { text: "ऑल्फेक्शन (Olfaction)", correct: true },
            { text: "टैक्सेशन (Tactation)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑल्फेक्शन गंध की भावना को संदर्भित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> गस्टेशन स्वाद के लिए, ऑडिशन सुनने के लिए है।"
    },
    {
        question: "प्रश्न 24. गंध के अणु हवा से नाक में पहुँचकर किसमें घुल जाते हैं?",
        answers: shuffle([
            { text: "रक्त में", correct: false },
            { text: "पानी में", correct: false },
            { text: "श्लेष्मा (Mucus) में", correct: true },
            { text: "लार में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गंध के अणुओं को पहले घ्राण उपकला को ढकने वाली श्लेष्मा की परत में घुलना पड़ता है ताकि वे घ्राण रिसेप्टर्स को उत्तेजित कर सकें।"
    },
    {
        question: "प्रश्न 25. गंध की संवेदना को मस्तिष्क के किस भाग तक पहुँचाया जाता है?",
        answers: shuffle([
            { text: "सेरिबैलम", correct: false },
            { text: "मेडुला ऑबोंगटा", correct: false },
            { text: "घ्राण बल्ब (Olfactory Bulb)", correct: true },
            { text: "पोंस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घ्राण रिसेप्टर्स से संकेत सीधे मस्तिष्क के घ्राण बल्ब तक जाते हैं, जो गंध की जानकारी को संसाधित करने वाला पहला केंद्र है।"
    },
    {
        question: "प्रश्न 26. जुकाम होने पर सूंघने की क्षमता क्यों कम हो जाती है?",
        answers: shuffle([
            { text: "नाक बंद हो जाती है और श्लेष्मा बढ़ जाता है", correct: true },
            { text: "जीभ का स्वाद बदल जाता है", correct: false },
            { text: "कान बंद हो जाते हैं", correct: false },
            { text: "मस्तिष्क ठीक से काम नहीं करता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अतिरिक्त श्लेष्मा की परत गंध के अणुओं को घ्राण रिसेप्टर्स तक पहुँचने से रोकती है, जिससे सूंघने की क्षमता अस्थायी रूप से कम हो जाती है।"
    },
    {
        question: "प्रश्न 27. जीभ पर पाए जाने वाले छोटे उभार क्या कहलाते हैं, जिन पर स्वाद कलिकाएं होती हैं?",
        answers: shuffle([
            { text: "विलाई (Villi)", correct: false },
            { text: "सिलिया (Cilia)", correct: false },
            { text: "पैपिला (Papillae)", correct: true },
            { text: "एल्वियोलाई (Alveoli)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पैपिला जीभ की सतह को खुरदरा बनाते हैं और अधिकांश स्वाद कलिकाएं (Taste buds) इन्हीं पर स्थित होती हैं।"
    },
    {
        question: "प्रश्न 28. मनुष्य कितने मूल स्वादों को पहचान सकता है?",
        answers: shuffle([
            { text: "तीन (मीठा, खट्टा, नमकीन)", correct: false },
            { text: "चार (मीठा, खट्टा, नमकीन, कड़वा)", correct: false },
            { text: "पाँच (मीठा, खट्टा, नमकीन, कड़वा, उमामी)", correct: true },
            { text: "छह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पांचवां मूल स्वाद 'उमामी' है, जो एक स्वादिष्ट या मांस जैसा स्वाद है और मोनोसोडियम ग्लूटामेट (MSG) जैसे यौगिकों से आता है।"
    },
    {
        question: "प्रश्न 29. स्वाद की भावना के लिए वैज्ञानिक शब्द क्या है?",
        answers: shuffle([
            { text: "ऑल्फेक्शन", correct: false },
            { text: "गस्टेशन", correct: true },
            { text: "ऑडिशन", correct: false },
            { text: "विजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गस्टेशन स्वाद की भावना को संदर्भित करता है।"
    },
    {
        question: "प्रश्न 30. जीभ का कौन सा भाग आमतौर पर कड़वे स्वाद के प्रति सबसे अधिक संवेदनशील होता है?",
        answers: shuffle([
            { text: "नोक (Tip)", correct: false },
            { text: "पिछला भाग (Back)", correct: true },
            { text: "किनारे (Sides)", correct: false },
            { text: "मध्य भाग (Center)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हालांकि सभी स्वाद जीभ के सभी हिस्सों पर महसूस किए जा सकते हैं, लेकिन पिछला हिस्सा कड़वे स्वाद के प्रति विशेष रूप से संवेदनशील होता है, जो संभावित विषाक्त पदार्थों को निगलने से रोकने में मदद करता है।"
    },
    {
        question: "प्रश्न 31. भोजन का स्वाद लेने के लिए, भोजन के अणुओं को किसमें घुलना आवश्यक है?",
        answers: shuffle([
            { text: "हवा", correct: false },
            { text: "रक्त", correct: false },
            { text: "लार (Saliva)", correct: true },
            { text: "पानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भोजन के रासायनिक अणु लार में घुलकर ही स्वाद कलिकाओं में मौजूद स्वाद रिसेप्टर कोशिकाओं तक पहुँच सकते हैं।"
    },
    {
        question: "प्रश्न 32. 'उमामी' स्वाद किससे संबंधित है?",
        answers: shuffle([
            { text: "चीनी", correct: false },
            { text: "नमक", correct: false },
            { text: "नींबू", correct: false },
            { text: "ग्लूटामेट (जैसे MSG)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उमामी एक जापानी शब्द है जिसका अर्थ है \"सुखद स्वादिष्ट स्वाद\"।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मांस, पनीर और टमाटर जैसे खाद्य पदार्थों में पाए जाने वाले ग्लूटामेट द्वारा उत्पन्न होता है।"
    },
    {
        question: "प्रश्न 33. मिर्च का 'तीखापन' वास्तव में क्या है?",
        answers: shuffle([
            { text: "एक मूल स्वाद", correct: false },
            { text: "एक गंध", correct: false },
            { text: "दर्द और गर्मी की अनुभूति", correct: true },
            { text: "एक प्रकार का खट्टापन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिर्च में मौजूद 'कैप्साइसिन' नामक यौगिक जीभ पर स्वाद कलिकाओं को नहीं, बल्कि दर्द और गर्मी के रिसेप्टर्स को उत्तेजित करता है, इसलिए यह एक स्वाद नहीं है।"
    },
    {
        question: "प्रश्न 34. त्वचा शरीर का सबसे बड़ा _________ है।",
        answers: shuffle([
            { text: "अंग (Organ)", correct: true },
            { text: "ऊतक (Tissue)", correct: false },
            { text: "कोशिका (Cell)", correct: false },
            { text: "ग्रंथि (Gland)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> त्वचा, जो पूरे शरीर को ढकती है, सतह क्षेत्र और वजन दोनों के हिसाब से शरीर का सबसे बड़ा अंग है।"
    },
    {
        question: "प्रश्न 35. त्वचा की सबसे बाहरी परत क्या कहलाती है?",
        answers: shuffle([
            { text: "डर्मिस (Dermis)", correct: false },
            { text: "एपिडर्मिस (Epidermis)", correct: true },
            { text: "हाइपोडर्मिस (Hypodermis)", correct: false },
            { text: "एंडोडर्मिस (Endodermis)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एपिडर्मिस त्वचा की सबसे पतली और सबसे बाहरी परत है जो शरीर को बाहरी वातावरण से बचाती है।"
    },
    {
        question: "प्रश्न 36. त्वचा का रंग किस वर्णक के कारण होता है?",
        answers: shuffle([
            { text: "हीमोग्लोबिन", correct: false },
            { text: "कैरोटीन", correct: false },
            { text: "मेलेनिन", correct: true },
            { text: "बिलीरुबिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेलेनिन एपिडर्मिस में 'मेलानोसाइट्स' नामक कोशिकाओं द्वारा निर्मित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह त्वचा को सूर्य की हानिकारक पराबैंगनी (UV) किरणों से बचाता है।"
    },
    {
        question: "प्रश्न 37. त्वचा में स्पर्श (touch) के लिए कौन से रिसेप्टर्स जिम्मेदार हैं?",
        answers: shuffle([
            { text: "थर्मोरिसेप्टर्स (Thermoreceptors)", correct: false },
            { text: "नोसिसेप्टर्स (Nociceptors)", correct: false },
            { text: "मैकेनोसेप्टर्स (Mechanoreceptors)", correct: true },
            { text: "फोटोरिसेप्टर्स (Photoreceptors)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मैकेनोसेप्टर्स यांत्रिक उत्तेजनाओं जैसे दबाव, कंपन और स्पर्श के प्रति संवेदनशील होते हैं।"
    },
    {
        question: "प्रश्न 38. दर्द की अनुभूति के लिए कौन से ग्राही उत्तरदायी हैं?",
        answers: shuffle([
            { text: "थर्मोरिसेप्टर्स", correct: false },
            { text: "मैकेनोसेप्टर्स", correct: false },
            { text: "कीमोरिसेप्टर्स", correct: false },
            { text: "नोसिसेप्टर्स", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नोसिसेप्टर्स विशेष संवेदी न्यूरॉन्स हैं जो ऊतक क्षति या संभावित क्षति का पता लगाते हैं और मस्तिष्क को दर्द के संकेत भेजते हैं।"
    },
    {
        question: "प्रश्न 39. त्वचा की किस परत में रक्त वाहिकाएं, तंत्रिकाएं और बाल कूप स्थित होते हैं?",
        answers: shuffle([
            { text: "एपिडर्मिस", correct: false },
            { text: "डर्मिस", correct: true },
            { text: "हाइपोडर्मिस", correct: false },
            { text: "स्ट्रैटम कॉर्नियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डर्मिस, एपिडर्मिस के नीचे की मोटी परत है, जिसमें त्वचा की अधिकांश संरचनाएं जैसे रक्त वाहिकाएं, तंत्रिका अंत, ग्रंथियां और बाल कूप पाए जाते हैं।"
    },
    {
        question: "प्रश्न 40. पसीना किस ग्रंथि द्वारा निर्मित होता है?",
        answers: shuffle([
            { text: "वसामय ग्रंथि (Sebaceous Gland)", correct: false },
            { text: "स्वेद ग्रंथि (Sweat Gland)", correct: true },
            { text: "लार ग्रंथि", correct: false },
            { text: "लैक्रिमल ग्रंथि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्वेद ग्रंथियाँ त्वचा में स्थित होती हैं और पसीने का उत्पादन करती हैं, जो वाष्पीकरण के माध्यम से शरीर को ठंडा करने में मदद करता है।"
    },
    {
        question: "प्रश्न 41. रोंगटे खड़े होना (Goosebumps) किस मांसपेशी की क्रिया के कारण होता है?",
        answers: shuffle([
            { text: "बाइसेप्स", correct: false },
            { text: "एरेक्टर पिली (Arrector pili)", correct: true },
            { text: "डायफ्राम", correct: false },
            { text: "सारटोरियस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्येक बाल कूप से जुड़ी यह छोटी मांसपेशी ठंड या भय की प्रतिक्रिया में सिकुड़ती है, जिससे बाल सीधे खड़े हो जाते हैं।"
    },
    {
        question: "प्रश्न 42. विटामिन D का संश्लेषण त्वचा में किसकी उपस्थिति में होता है?",
        answers: shuffle([
            { text: "चाँदनी", correct: false },
            { text: "पानी", correct: false },
            { text: "सूर्य का प्रकाश (पराबैंगनी किरणें)", correct: true },
            { text: "ऑक्सीजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब त्वचा सूर्य की यूवी-बी किरणों के संपर्क में आती है, तो यह कोलेस्ट्रॉल के एक यौगिक को विटामिन डी में परिवर्तित कर देती है।"
    },
    {
        question: "प्रश्न 43. तापमान में परिवर्तन का पता लगाने वाले रिसेप्टर्स क्या कहलाते हैं?",
        answers: shuffle([
            { text: "नोसिसेप्टर्स", correct: false },
            { text: "थर्मोरिसेप्टर्स", correct: true },
            { text: "मैकेनोसेप्टर्स", correct: false },
            { text: "कीमोरिसेप्टर्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थर्मोरिसेप्टर्स त्वचा में मौजूद संवेदी न्यूरॉन्स हैं जो गर्मी और ठंड का पता लगाते हैं।"
    },
    {
        question: "प्रश्न 44. 'ब्रेल लिपि' का उपयोग कौन लोग करते हैं?",
        answers: shuffle([
            { text: "बहरे लोग", correct: false },
            { text: "गूंगे लोग", correct: false },
            { text: "दृष्टिबाधित लोग", correct: true },
            { text: "चलने में असमर्थ लोग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्रेल एक स्पर्शनीय लेखन प्रणाली है, जिसे दृष्टिबाधित लोग अपनी उंगलियों से उभरे हुए बिंदुओं को महसूस करके पढ़ते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह स्पर्श की भावना का उपयोग करती है।"
    },
    {
        question: "प्रश्न 45. स्वाद और गंध की भावनाएं आपस में कैसे जुड़ी होती हैं?",
        answers: shuffle([
            { text: "वे एक ही तंत्रिका का उपयोग करती हैं", correct: false },
            { text: "वे मस्तिष्क के एक ही हिस्से में संसाधित होती हैं", correct: false },
            { text: "चबाते समय भोजन की गंध नाक में पहुँचकर स्वाद को प्रभावित करती है", correct: true },
            { text: "उनका कोई संबंध नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भोजन का अधिकांश 'स्वाद' वास्तव में उसकी गंध होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> चबाने से गंध के अणु निकलते हैं जो नाक के पिछले हिस्से तक पहुँचते हैं, जिससे हमें भोजन का पूर्ण स्वाद अनुभव होता है।"
    },
    {
        question: "प्रश्न 46. निम्नलिखित में से कौन सी एक इंद्रिय नहीं है?",
        answers: shuffle([
            { text: "दृष्टि", correct: false },
            { text: "श्रवण", correct: false },
            { text: "सोचना", correct: true },
            { text: "स्पर्श", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोचना एक संज्ञानात्मक प्रक्रिया है, इंद्रिय नहीं।<br><br><i class='fa-solid fa-angles-right icon'></i> इंद्रियाँ बाहरी दुनिया से जानकारी एकत्र करती हैं।"
    },
    {
        question: "प्रश्न 47. मानव शरीर में संतुलन की भावना मुख्य रूप से किससे संबंधित है?",
        answers: shuffle([
            { text: "आँख", correct: false },
            { text: "त्वचा", correct: false },
            { text: "कान", correct: true },
            { text: "जीभ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कान का आंतरिक भाग (वेस्टिबुलर सिस्टम) शरीर के संतुलन और स्थानिक अभिविन्यास के लिए प्राथमिक रूप से जिम्मेदार है।"
    },
    {
        question: "प्रश्न 48. 'एस्टिग्मेटिज्म' (Astigmatism) आँख के किस भाग की अनियमितता के कारण होता है?",
        answers: shuffle([
            { text: "रेटिना", correct: false },
            { text: "लेंस या कॉर्निया का आकार", correct: true },
            { text: "आइरिस", correct: false },
            { text: "ऑप्टिक तंत्रिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एस्टिग्मेटिज्म में, कॉर्निया या लेंस का आकार पूरी तरह से गोल नहीं होता, जिससे प्रकाश किरणें एक बिंदु पर केंद्रित नहीं हो पातीं और दृष्टि धुंधली हो जाती है।"
    },
    {
        question: "प्रश्न 49. 'प्रोप्रियोसेप्शन' (Proprioception) क्या है?",
        answers: shuffle([
            { text: "दर्द की भावना", correct: false },
            { text: "शरीर के अंगों की स्थिति और गति की भावना", correct: true },
            { text: "तापमान की भावना", correct: false },
            { text: "दबाव की भावना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह हमारी 'छठी इंद्रिय' है जो हमें यह जानने में मदद करती है कि हमारे हाथ-पैर बिना देखे कहाँ हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मांसपेशियों और जोड़ों में मौजूद रिसेप्टर्स से आती है।"
    },
    {
        question: "प्रश्न 50. आँखों में आँसू किस ग्रंथि द्वारा निर्मित होते हैं?",
        answers: shuffle([
            { text: "पीयूष ग्रंथि", correct: false },
            { text: "लैक्रिमल ग्रंथि (Lacrimal Gland)", correct: true },
            { text: "थायरॉयड ग्रंथि", correct: false },
            { text: "लार ग्रंथि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैक्रिमल ग्रंथियाँ (अश्रु ग्रंथियाँ) आँखों के ऊपरी-बाहरी हिस्से में स्थित होती हैं और आँसू का उत्पादन करती हैं जो आँखों को नम और साफ रखते हैं।"
    },
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