const questions = [
    {
        topHeading: "  हड्डियाँ और जोड़ों पर आधारित 35 MCQs (quiz_no. 35)"
    },
    {
        question: "प्रश्न 1. एक वयस्क मानव शरीर में कुल कितनी हड्डियाँ होती हैं?",
        answers: shuffle([
            { text: "208", correct: false },
            { text: "206", correct: true },
            { text: "300", correct: false },
            { text: "212", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक वयस्क मनुष्य के कंकाल में 206 हड्डियाँ होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि एक नवजात शिशु में लगभग 300 हड्डियाँ होती हैं, जिनमें से कुछ बाद में जुड़ जाती हैं।"
    },
    {
        question: "प्रश्न 2. मानव शरीर की सबसे लंबी और सबसे मजबूत हड्डी कौन सी है?",
        answers: shuffle([
            { text: "टिबिया (Tibia)", correct: false },
            { text: "फीमर (Femur)", correct: true },
            { text: "ह्यूमरस (Humerus)", correct: false },
            { text: "स्टapes (Stapes)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फीमर, जिसे जांघ की हड्डी भी कहा जाता है, मानव शरीर की सबसे लंबी, सबसे भारी और सबसे मजबूत हड्डी है।"
    },
    {
        question: "प्रश्न 3. मानव शरीर की सबसे छोटी हड्डी कौन सी है?",
        answers: shuffle([
            { text: "मैलियस (Malleus)", correct: false },
            { text: "इन्कस (Incus)", correct: false },
            { text: "स्टapes (Stapes)", correct: true },
            { text: "फालेंजेस (Phalanges)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्टapes मध्य कान में स्थित होती है और यह मानव शरीर की सबसे छोटी और सबसे हल्की हड्डी है।"
    },
    {
        question: "प्रश्न 4. हड्डियों के अध्ययन को क्या कहा जाता है?",
        answers: shuffle([
            { text: "ओरोलॉजी (Orology)", correct: false },
            { text: "ऑस्टियोलॉजी (Osteology)", correct: true },
            { text: "मायोलॉजी (Myology)", correct: false },
            { text: "हेमेटोलॉजी (Hematology)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑस्टियोलॉजी जीव विज्ञान की वह शाखा है जो हड्डियों की संरचना, कार्य और बीमारियों के अध्ययन से संबंधित है।"
    },
    {
        question: "प्रश्न 5. अक्षीय कंकाल (Axial Skeleton) में कितनी हड्डियाँ होती हैं?",
        answers: shuffle([
            { text: "80", correct: true },
            { text: "126", correct: false },
            { text: "206", correct: false },
            { text: "60", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अक्षीय कंकाल शरीर का मुख्य अक्ष बनाता है और इसमें खोपड़ी, कशेरुक दंड, पसलियां और उरोस्थि (sternum) शामिल होती हैं, जिनकी कुल संख्या 80 है।"
    },
    {
        question: "प्रश्न 6. निम्नलिखित में से कौन सी हड्डी अक्षीय कंकाल का हिस्सा नहीं है?",
        answers: shuffle([
            { text: "खोपड़ी (Skull)", correct: false },
            { text: "पसलियां (Ribs)", correct: false },
            { text: "ह्यूमरस (Humerus)", correct: true },
            { text: "कशेरुक दंड (Vertebral column)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्यूमरस (बांह की हड्डी) उपांगीय कंकाल (Appendicular Skeleton) का हिस्सा है, जोแขन और पैरों की हड्डियों से बना होता है।"
    },
    {
        question: "प्रश्न 7. हड्डी को मांसपेशी से जोड़ने वाले संयोजी ऊतक को क्या कहते हैं?",
        answers: shuffle([
            { text: "लिगामेंट (Ligament)", correct: false },
            { text: "टेंडन (Tendon)", correct: true },
            { text: "उपास्थि (Cartilage)", correct: false },
            { text: "त्वचा (Skin)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टेंडन (कण्डरा) एक मजबूत, रेशेदार संयोजी ऊतक है जो मांसपेशियों को हड्डियों से जोड़ता है और गति को संभव बनाता है।"
    },
    {
        question: "प्रश्न 8. हड्डी को हड्डी से जोड़ने वाले संयोजी ऊतक को क्या कहते हैं?",
        answers: shuffle([
            { text: "टेंडन (Tendon)", correct: false },
            { text: "लिगामेंट (Ligament)", correct: true },
            { text: "एक्सॉन (Axon)", correct: false },
            { text: "मायोसिन (Myosin)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिगामेंट (स्नायु) एक लोचदार संयोजी ऊतक है जो एक हड्डी को दूसरी हड्डी से जोड़कर जोड़ों को स्थिरता प्रदान करता है।"
    },
    {
        question: "प्रश्न 9. मनुष्य की खोपड़ी में कुल कितनी हड्डियाँ होती हैं?",
        answers: shuffle([
            { text: "22", correct: true },
            { text: "28", correct: false },
            { text: "14", correct: false },
            { text: "8", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मानव खोपड़ी में कुल 22 हड्डियाँ होती हैं: 8 कपाल (Cranium) में और 14 चेहरे (Facial) पर।<br><br><i class='fa-solid fa-angles-right icon'></i> (कान की हड्डियों को मिलाकर 28 होती हैं)।"
    },
    {
        question: "प्रश्न 10. घुटने की हड्डी को किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "टिबिया", correct: false },
            { text: "फीमर", correct: false },
            { text: "पटेला (Patella)", correct: true },
            { text: "फिबुला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पटेला, जिसे नी-कैप (kneecap) भी कहते हैं, एक त्रिकोणीय हड्डी है जो घुटने के जोड़ के सामने स्थित होती है।"
    },
    {
        question: "प्रश्न 11. कलाई की हड्डियों को क्या कहा जाता है?",
        answers: shuffle([
            { text: "टार्सल्स (Tarsals)", correct: false },
            { text: "मेटाकार्पल्स (Metacarpals)", correct: false },
            { text: "कार्पल्स (Carpals)", correct: true },
            { text: "फालेंजेस (Phalanges)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कलाई 8 छोटी हड्डियों से बनी होती है जिन्हें कार्पल्स कहा जाता है, जो दो पंक्तियों में व्यवस्थित होती हैं।"
    },
    {
        question: "प्रश्न 12. कंधे का जोड़ किस प्रकार के जोड़ का उदाहरण है?",
        answers: shuffle([
            { text: "हिंज जोड़ (Hinge joint)", correct: false },
            { text: "पिवट जोड़ (Pivot joint)", correct: false },
            { text: "बॉल एंड सॉकेट जोड़ (Ball and socket joint)", correct: true },
            { text: "ग्लाइडिंग जोड़ (Gliding joint)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कंधे और कूल्हे के जोड़ बॉल एंड सॉकेट प्रकार के होते हैं, जो सभी दिशाओं में गति की अनुमति देते हैं।"
    },
    {
        question: "प्रश्न 13. कोहनी और घुटने का जोड़ किस प्रकार का होता है?",
        answers: shuffle([
            { text: "बॉल एंड सॉकेट जोड़", correct: false },
            { text: "सैडल जोड़ (Saddle joint)", correct: false },
            { text: "हिंज जोड़ (Hinge joint)", correct: true },
            { text: "पिवट जोड़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंज जोड़ (कब्जा संधि) केवल एक ही दिशा में गति की अनुमति देता है, जैसे दरवाजे का कब्ज़ा।<br><br><i class='fa-solid fa-angles-right icon'></i> कोहनी और घुटने इसके प्रमुख उदाहरण हैं।"
    },
    {
        question: "प्रश्न 14. हड्डियों के निर्माण के लिए कौन सा खनिज आवश्यक है?",
        answers: shuffle([
            { text: "लोहा", correct: false },
            { text: "सोडियम", correct: false },
            { text: "पोटेशियम", correct: false },
            { text: "कैल्शियम", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैल्शियम और फास्फोरस हड्डियों के मुख्य खनिज घटक हैं, जो उन्हें कठोरता और मजबूती प्रदान करते हैं।"
    },
    {
        question: "प्रश्न 15. लाल रक्त कोशिकाओं (RBC) का निर्माण कहाँ होता है?",
        answers: shuffle([
            { text: "यकृत में", correct: false },
            { text: "हृदय में", correct: false },
            { text: "पीली अस्थि मज्जा में", correct: false },
            { text: "लाल अस्थि मज्जा में", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल अस्थि मज्जा (Red bone marrow), जो लंबी हड्डियों के सिरों और चपटी हड्डियों में पाई जाती है, लाल रक्त कोशिकाओं, श्वेत रक्त कोशिकाओं और प्लेटलेट्स का उत्पादन करती है।"
    },
    {
        question: "प्रश्न 16. ऑस्टियोपोरोसिस (Osteoporosis) रोग में क्या होता है?",
        answers: shuffle([
            { text: "हड्डियाँ मोटी हो जाती हैं", correct: false },
            { text: "जोड़ों में सूजन आ जाती है", correct: false },
            { text: "हड्डी का घनत्व कम हो जाता है और वे कमजोर हो जाती हैं", correct: true },
            { text: "रक्त में कैल्शियम बढ़ जाता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑस्टियोपोरोसिस एक ऐसी स्थिति है जिसमें हड्डियाँ छिद्रपूर्ण और भंगुर हो जाती हैं, जिससे फ्रैक्चर का खतरा बढ़ जाता है।"
    },
    {
        question: "प्रश्न 17. मानव रीढ़ की हड्डी (कशेरुक दंड) में कुल कितनी कशेरुकाएं होती हैं?",
        answers: shuffle([
            { text: "26", correct: false },
            { text: "33", correct: true },
            { text: "30", correct: false },
            { text: "24", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक बच्चे के कशेरुक दंड में 33 कशेरुकाएं होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> वयस्कों में, त्रिक (sacral) और अनुत्रिक (coccygeal) कशेरुकाएं जुड़कर एक-एक हड्डी बन जाती हैं, जिससे संख्या 26 रह जाती है।"
    },
    {
        question: "प्रश्न 18. पसलियों (Ribs) की कुल संख्या कितनी होती है?",
        answers: shuffle([
            { text: "12", correct: false },
            { text: "24", correct: true },
            { text: "10", correct: false },
            { text: "22", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मनुष्य में 12 जोड़ी पसलियां होती हैं, यानी कुल 24 पसलियां, जो पसली पिंजरे का निर्माण करती हैं।"
    },
    {
        question: "प्रश्न 19. गर्दन का जोड़, जो सिर को 'हाँ' और 'ना' में घुमाने की अनुमति देता है, किस प्रकार का जोड़ है?",
        answers: shuffle([
            { text: "हिंज जोड़", correct: false },
            { text: "पिवट जोड़ (Pivot joint)", correct: true },
            { text: "सैडल जोड़", correct: false },
            { text: "ग्लाइडिंग जोड़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पहली और दूसरी ग्रीवा कशेरुकाओं (एटलस और एक्सिस) के बीच का जोड़ एक पिवट जोड़ है, जो सिर को घुमाने की अनुमति देता है।"
    },
    {
        question: "प्रश्न 20. साइनोवियल द्रव (Synovial fluid) कहाँ पाया जाता है?",
        answers: shuffle([
            { text: "मस्तिष्क में", correct: false },
            { text: "हृदय में", correct: false },
            { text: "चल जोड़ों (Movable joints) में", correct: true },
            { text: "फेफड़ों में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> साइनोवियल द्रव एक चिकनाई वाला तरल पदार्थ है जो साइनोवियल जोड़ों (जैसे घुटना, कंधा) में पाया जाता है और घर्षण को कम करता है।"
    },
    {
        question: "प्रश्न 21. हड्डियों में पाए जाने वाले मुख्य प्रोटीन का नाम क्या है?",
        answers: shuffle([
            { text: "एक्टिन", correct: false },
            { text: "मायोसिन", correct: false },
            { text: "ओसीन (Ossein)", correct: true },
            { text: "केराटिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओसीन (या कोलेजन) वह प्रोटीन है जो हड्डी के मैट्रिक्स का जैविक हिस्सा बनाता है और इसे लचीलापन प्रदान करता है।"
    },
    {
        question: "प्रश्न 22. गठिया (Arthritis) रोग शरीर के किस अंग को प्रभावित करता है?",
        answers: shuffle([
            { text: "फेफड़ों को", correct: false },
            { text: "जोड़ों को", correct: true },
            { text: "यकृत को", correct: false },
            { text: "वृक्क को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गठिया एक या एक से अधिक जोड़ों में सूजन की स्थिति है, जिससे दर्द और जकड़न होती है।"
    },
    {
        question: "प्रश्न 23. बच्चों की हड्डियाँ वयस्कों की तुलना में अधिक लचीली क्यों होती हैं?",
        answers: shuffle([
            { text: "उनमें अधिक खनिज होते हैं", correct: false },
            { text: "उनमें अधिक कार्बनिक पदार्थ (कोलेजन) होते हैं", correct: true },
            { text: "वे आकार में छोटी होती हैं", correct: false },
            { text: "उनमें अधिक रक्त होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बच्चों की हड्डियों में खनिज की तुलना में कार्बनिक पदार्थ (कोलेजन) का अनुपात अधिक होता है, जो उन्हें अधिक लचीला बनाता है।"
    },
    {
        question: "प्रश्न 24. टिबिया और फिबुला हड्डियाँ शरीर के किस भाग में पाई जाती हैं?",
        answers: shuffle([
            { text: "बांह में", correct: false },
            { text: "जांघ में", correct: false },
            { text: "निचले पैर में (पिंडली)", correct: true },
            { text: "कलाई में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टिबिया (शिन बोन) और फिबुला घुटने और टखने के बीच निचले पैर में स्थित दो हड्डियाँ हैं।"
    },
    {
        question: "प्रश्न 25. खोपड़ी की हड्डियाँ किस प्रकार के जोड़ से जुड़ी होती हैं?",
        answers: shuffle([
            { text: "चल जोड़", correct: false },
            { text: "उपास्थि जोड़", correct: false },
            { text: "अचल जोड़ (sutures)", correct: true },
            { text: "हिंज जोड़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खोपड़ी की हड्डियाँ रेशेदार, अचल जोड़ों से कसकर जुड़ी होती हैं जिन्हें सीवन (sutures) कहा जाता है, जो मस्तिष्क की सुरक्षा के लिए एक कठोर आवरण प्रदान करते हैं।"
    },
    {
        question: "प्रश्न 26. अस्थि कोशिकाओं (Bone cells) को क्या कहा जाता है?",
        answers: shuffle([
            { text: "नेफ्रॉन", correct: false },
            { text: "न्यूरॉन", correct: false },
            { text: "ऑस्टियोसाइट्स (Osteocytes)", correct: true },
            { text: "हेपेटोसाइट्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑस्टियोसाइट्स परिपक्व हड्डी कोशिकाएं हैं जो हड्डी के मैट्रिक्स को बनाए रखने में मदद करती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ऑस्टियोब्लास्ट हड्डी बनाने वाली और ऑस्टियोक्लास्ट हड्डी को तोड़ने वाली कोशिकाएं हैं।"
    },
    {
        question: "प्रश्न 27. उपांगीय कंकाल (Appendicular Skeleton) में कितनी हड्डियाँ होती हैं?",
        answers: shuffle([
            { text: "80", correct: false },
            { text: "126", correct: true },
            { text: "206", correct: false },
            { text: "106", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उपांगीय कंकाल में हाथ, पैर, कंधे की पेटी (pectoral girdle) और श्रोणि मेखला (pelvic girdle) की हड्डियाँ शामिल होती हैं, जिनकी कुल संख्या 126 है।"
    },
    {
        question: "प्रश्न 28. चेहरे पर कितनी हड्डियाँ होती हैं?",
        answers: shuffle([
            { text: "8", correct: false },
            { text: "12", correct: false },
            { text: "14", correct: true },
            { text: "22", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मानव चेहरे का कंकाल 14 हड्डियों से बना होता है जो जबड़े, नाक, गाल और आंखों के सॉकेट को आकार देते हैं।"
    },
    {
        question: "प्रश्न 29. शरीर की एकमात्र हड्डी जो किसी अन्य हड्डी से नहीं जुड़ी है, वह कौन सी है?",
        answers: shuffle([
            { text: "स्टapes", correct: false },
            { text: "पटेला", correct: false },
            { text: "हायॉयड हड्डी (Hyoid bone)", correct: true },
            { text: "एक्सिस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हायॉयड हड्डी गर्दन में जीभ के आधार पर स्थित होती है और यह केवल मांसपेशियों और लिगामेंट्स द्वारा अपनी जगह पर रहती है।"
    },
    {
        question: "प्रश्न 30. जोड़ों में यूरिक एसिड क्रिस्टल का जमा होना किस बीमारी का कारण बनता है?",
        answers: shuffle([
            { text: "ऑस्टियोपोरोसिस", correct: false },
            { text: "गठिया (Arthritis)", correct: false },
            { text: "गाउट (Gout)", correct: true },
            { text: "रिकेट्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गाउट एक प्रकार का गठिया है जो जोड़ों में, विशेष रूप से बड़े पैर के अंगूठे में, यूरिक एसिड के क्रिस्टल जमा होने के कारण होने वाली तीव्र सूजन और दर्द से पहचाना जाता है।"
    },
    {
        question: "प्रश्न 31. अंगूठे का जोड़, जो इसे अन्य उंगलियों के विपरीत दिशा में ले जाने की अनुमति देता है, किस प्रकार का जोड़ है?",
        answers: shuffle([
            { text: "हिंज जोड़", correct: false },
            { text: "पिवट जोड़", correct: false },
            { text: "सैडल जोड़ (Saddle joint)", correct: true },
            { text: "बॉल एंड सॉकेट जोड़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंगूठे के आधार पर कार्पल और मेटाकार्पल हड्डी के बीच का जोड़ एक सैडल जोड़ है, जो इसे आगे-पीछे और अगल-बगल गति करने की अनुमति देता है।"
    },
    {
        question: "प्रश्न 32. सपाट या चपटी हड्डियाँ (Flat bones) कहाँ पाई जाती हैं?",
        answers: shuffle([
            { text: "कलाई में", correct: false },
            { text: "जांघ में", correct: false },
            { text: "खोपड़ी, पसलियों और कंधे के ब्लेड में", correct: true },
            { text: "उंगलियों में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चपटी हड्डियाँ आंतरिक अंगों की रक्षा करती हैं और मांसपेशियों के जुड़ाव के लिए एक बड़ी सतह प्रदान करती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> खोपड़ी, उरोस्थि और पसलियां इसके उदाहरण हैं।"
    },
    {
        question: "प्रश्न 33. विटामिन D की कमी से बच्चों में कौन सा हड्डी रोग होता है?",
        answers: shuffle([
            { text: "स्कर्वी", correct: false },
            { text: "बेरी-बेरी", correct: false },
            { text: "रिकेट्स (Rickets)", correct: true },
            { text: "पेलाग्रा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विटामिन D शरीर में कैल्शियम के अवशोषण के लिए आवश्यक है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी कमी से बच्चों में हड्डियाँ नरम और कमजोर हो जाती हैं, जिससे वे मुड़ जाती हैं, इस स्थिति को रिकेट्स कहते हैं।"
    },
    {
        question: "प्रश्न 34. उपास्थि (Cartilage) में कौन सा प्रोटीन पाया जाता है?",
        answers: shuffle([
            { text: "ओसीन", correct: false },
            { text: "केराटिन", correct: false },
            { text: "कॉन्ड्रिन (Chondrin)", correct: true },
            { text: "मायोसिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उपास्थि का मैट्रिक्स मुख्य रूप से कॉन्ड्रिन नामक प्रोटीन से बना होता है, जो इसे लचीला और मजबूत बनाता है।"
    },
    {
        question: "प्रश्न 35. मानव शरीर में तैरती हुई पसलियों (Floating ribs) की संख्या कितनी होती है?",
        answers: shuffle([
            { text: "2 जोड़ी (कुल 4)", correct: true },
            { text: "3 जोड़ी (कुल 6)", correct: false },
            { text: "5 जोड़ी (कुल 10)", correct: false },
            { text: "7 जोड़ी (कुल 14)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पसलियों की अंतिम दो जोड़ी (11वीं और 12वीं) उरोस्थि (sternum) से नहीं जुड़ी होती हैं, इसीलिए इन्हें तैरती हुई पसलियां कहा जाता है।"
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