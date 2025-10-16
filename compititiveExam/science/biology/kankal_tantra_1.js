const questions = [
    {
        topHeading: "कंकाल तंत्र पर आधारित 50 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. एक वयस्क मानव के शरीर में कुल कितनी हड्डियाँ होती हैं?",
        answers: shuffle([
            { text: "208", correct: false },
            { text: "206", correct: true },
            { text: "210", correct: false },
            { text: "300", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जन्म के समय लगभग 300 हड्डियाँ होती हैं, लेकिन वयस्क होने पर कई हड्डियाँ आपस में जुड़ जाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे उनकी संख्या 206 रह जाती है।"
    },
    {
        question: "प्रश्न 2. जब कोई हड्डी अपने जोड़ से हट जाती है, तो उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "फ्रैक्चर (Fracture)", correct: false },
            { text: "मोच (Sprain)", correct: false },
            { text: "डिसलोकेशन (Dislocation)", correct: true },
            { text: "खिंचाव (Strain)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डिसलोकेशन या अव्यवस्था एक ऐसी चोट है जिसमें हड्डी अपनी सामान्य स्थिति से जोड़ से बाहर निकल जाती है।"
    },
    {
        question: "प्रश्न 3. मानव शरीर की सबसे लंबी हड्डी कौन सी है?",
        answers: shuffle([
            { text: "टिबिया (Tibia)", correct: false },
            { text: "ह्यूमरस (Humerus)", correct: false },
            { text: "फीमर (Femur)", correct: true },
            { text: "फीबुला (Fibula)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फीमर, जिसे जांघ की हड्डी भी कहा जाता है, मानव शरीर की सबसे लंबी, सबसे भारी और सबसे मजबूत हड्डी है।"
    },
    {
        question: "प्रश्न 4. मानव शरीर की सबसे छोटी हड्डी 'स्टेप्स' (Stapes) कहाँ पाई जाती है?",
        answers: shuffle([
            { text: "नाक में", correct: false },
            { text: "कान में", correct: true },
            { text: "उंगली में", correct: false },
            { text: "गर्दन में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्टेप्स मध्य कान में पाई जाने वाली तीन हड्डियों (मैलीयस, इन्कस, स्टेप्स) में से एक है और यह शरीर की सबसे छोटी हड्डी है।"
    },
    {
        question: "प्रश्न 5. मनुष्य की पसलियों में कुल कितनी हड्डियाँ होती हैं?",
        answers: shuffle([
            { text: "12 जोड़े (24)", correct: true },
            { text: "10 जोड़े (20)", correct: false },
            { text: "14 जोड़े (28)", correct: false },
            { text: "11 जोड़े (22)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मनुष्य के पसली पिंजर में 12 जोड़ी पसलियाँ होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जो पीछे मेरुदंड से और आगे उरोस्थि (Sternum) से जुड़ी होती हैं।"
    },
    {
        question: "प्रश्न 6. कंकाल तंत्र का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "शरीर को आकार और सहारा देना", correct: false },
            { text: "आंतरिक अंगों की सुरक्षा करना", correct: false },
            { text: "रक्त कोशिकाओं का निर्माण करना", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कंकाल तंत्र शरीर को ढाँचा प्रदान करता है, मस्तिष्क और हृदय जैसे कोमल अंगों की रक्षा करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> और अस्थि मज्जा में रक्त कोशिकाओं का उत्पादन करता है।"
    },
    {
        question: "प्रश्न 7. अक्षीय कंकाल (Axial Skeleton) में कौन सी हड्डियाँ शामिल हैं?",
        answers: shuffle([
            { text: "खोपड़ी, मेरुदंड, पसलियाँ और उरोस्थि", correct: true },
            { text: "हाथ और पैर की हड्डियाँ", correct: false },
            { text: "श्रोणि मेखला और अंस मेखला", correct: false },
            { text: "केवल खोपड़ी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अक्षीय कंकाल शरीर के केंद्रीय अक्ष का निर्माण करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> और इसमें 80 हड्डियाँ होती हैं।"
    },
    {
        question: "प्रश्न 8. घुटने की हड्डी को किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "पटेला (Patella)", correct: true },
            { text: "टिबिया (Tibia)", correct: false },
            { text: "फीमर (Femur)", correct: false },
            { text: "टार्सल (Tarsal)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पटेला, जिसे नी-कैप भी कहते हैं, एक छोटी त्रिकोणीय हड्डी है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो घुटने के जोड़ की रक्षा करती है।"
    },
    {
        question: "प्रश्न 9. हड्डियों के अध्ययन को क्या कहा जाता है?",
        answers: shuffle([
            { text: "ऑन्कोलॉजी (Oncology)", correct: false },
            { text: "ऑस्टियोलॉजी (Osteology)", correct: true },
            { text: "मायोलॉजी (Myology)", correct: false },
            { text: "हेमेटोलॉजी (Hematology)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑस्टियोलॉजी जीव विज्ञान की वह शाखा है जो हड्डियों, कंकाल और उनसे जुड़े विकारों के अध्ययन से संबंधित है।"
    },
    {
        question: "प्रश्न 10. दो हड्डियों को आपस में जोड़ने वाले ऊतक को क्या कहते हैं?",
        answers: shuffle([
            { text: "टेंडन (Tendon)", correct: false },
            { text: "लिगामेंट (Ligament)", correct: true },
            { text: "उपास्थि (Cartilage)", correct: false },
            { text: "मांसपेशी (Muscle)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिगामेंट (स्नायु) एक मजबूत, रेशेदार संयोजी ऊतक है जो एक हड्डी को दूसरी हड्डी से जोड़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i> और जोड़ों को स्थिरता प्रदान करता है।"
    },
    {
        question: "प्रश्न 11. मांसपेशियों को हड्डी से जोड़ने वाले ऊतक को क्या कहते हैं?",
        answers: shuffle([
            { text: "लिगामेंट (Ligament)", correct: false },
            { text: "टेंडन (Tendon)", correct: true },
            { text: "उपास्थि (Cartilage)", correct: false },
            { text: "तंत्रिका (Nerve)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टेंडन (कण्डरा) एक रेशेदार संयोजी ऊतक है जो मांसपेशियों को हड्डियों से जोड़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i> और गति को संभव बनाता है।"
    },
    {
        question: "प्रश्न 12. लाल रक्त कोशिकाओं (RBC) का निर्माण अस्थि के किस भाग में होता है?",
        answers: shuffle([
            { text: "पीली अस्थि मज्जा (Yellow Bone Marrow)", correct: false },
            { text: "लाल अस्थि मज्जा (Red Bone Marrow)", correct: true },
            { text: "पेरीओस्टियम (Periosteum)", correct: false },
            { text: "उपास्थि (Cartilage)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल अस्थि मज्जा में हीमेटोपोएटिक स्टेम कोशिकाएं होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जो लाल रक्त कोशिकाओं, श्वेत रक्त कोशिकाओं और प्लेटलेट्स का निर्माण करती हैं।"
    },
    {
        question: "प्रश्न 13. मनुष्य के चेहरे में कितनी हड्डियाँ होती हैं?",
        answers: shuffle([
            { text: "8", correct: false },
            { text: "12", correct: false },
            { text: "14", correct: true },
            { text: "20", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चेहरे का कंकाल 14 हड्डियों से मिलकर बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो चेहरे को आकार और संरचना प्रदान करती हैं।"
    },
    {
        question: "प्रश्न 14. 'कॉलरबोन' को किस अन्य नाम से जाना जाता है?",
        answers: shuffle([
            { text: "स्कैपुला (Scapula)", correct: false },
            { text: "क्लेविकल (Clavicle)", correct: true },
            { text: "स्टर्नम (Sternum)", correct: false },
            { text: "ह्यूमरस (Humerus)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्लेविकल या हँसली एक पतली, 'S' आकार की हड्डी है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो स्टर्नम (उरोस्थि) को स्कैपुला (कंधे की हड्डी) से जोड़ती है।"
    },
    {
        question: "प्रश्न 15. मानव मेरुदंड (Vertebral Column) में कुल कितनी कशेरुकाएं (Vertebrae) होती हैं?",
        answers: shuffle([
            { text: "26", correct: true },
            { text: "30", correct: false },
            { text: "33", correct: false },
            { text: "24", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक वयस्क मेरुदंड में 26 हड्डियाँ होती हैं (7 ग्रीवा, 12 वक्षीय, 5 काठ, 1 त्रिक, 1 अनुत्रिक)।<br><br><i class='fa-solid fa-angles-right icon'></i> बच्चों में 33 होती हैं क्योंकि त्रिक और अनुत्रिक की हड्डियाँ अलग-अलग होती हैं।"
    },
    {
        question: "प्रश्न 16. जोड़ों में दो हड्डियों के बीच पाए जाने वाले चिकने पदार्थ को क्या कहते हैं?",
        answers: shuffle([
            { text: "साइनोवियल द्रव (Synovial Fluid)", correct: true },
            { text: "लसीका (Lymph)", correct: false },
            { text: "प्लाज्मा (Plasma)", correct: false },
            { text: "सीरम (Serum)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> साइनोवियल द्रव एक गाढ़ा तरल पदार्थ है जो साइनोवियल जोड़ों में पाया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह घर्षण को कम करता है और जोड़ों को चिकनाई प्रदान करता है।"
    },
    {
        question: "प्रश्न 17. 'गठिया' (Arthritis) रोग शरीर के किस अंग को प्रभावित करता है?",
        answers: shuffle([
            { text: "यकृत", correct: false },
            { text: "जोड़ों (Joints)", correct: true },
            { text: "मस्तिष्क", correct: false },
            { text: "वृक्क", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गठिया एक या एक से अधिक जोड़ों की सूजन है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे दर्द और अकड़न होती है।"
    },
    {
        question: "प्रश्न 18. 'ऑस्टियोपोरोसिस' (Osteoporosis) में क्या होता है?",
        answers: shuffle([
            { text: "हड्डियाँ मजबूत हो जाती हैं", correct: false },
            { text: "हड्डियों का घनत्व कम हो जाता है और वे कमजोर हो जाती हैं", correct: true },
            { text: "जोड़ों में सूजन आ जाती है", correct: false },
            { text: "रक्त का निर्माण रुक जाता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस रोग में हड्डियाँ छिद्रपूर्ण और भंगुर हो जाती हैं, जिससे फ्रैक्चर का खतरा बढ़ जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अक्सर कैल्शियम और विटामिन डी की कमी के कारण होता है।"
    },
    {
        question: "प्रश्न 19. हड्डियों के निर्माण और मजबूती के लिए कौन से खनिज आवश्यक हैं?",
        answers: shuffle([
            { text: "लोहा और पोटेशियम", correct: false },
            { text: "सोडियम और क्लोरीन", correct: false },
            { text: "कैल्शियम और फास्फोरस", correct: true },
            { text: "मैग्नीशियम और जिंक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैल्शियम और फास्फोरस हड्डियों के मुख्य खनिज घटक हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जो उन्हें कठोरता और मजबूती प्रदान करते हैं।"
    },
    {
        question: "प्रश्न 20. ऊपरी बांह की हड्डी का क्या नाम है?",
        answers: shuffle([
            { text: "रेडियस (Radius)", correct: false },
            { text: "अल्ना (Ulna)", correct: false },
            { text: "ह्यूमरस (Humerus)", correct: true },
            { text: "फीमर (Femur)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्यूमरस कंधे से कोहनी तक फैली लंबी हड्डी है।"
    },
    {
        question: "प्रश्न 21. कौन सा विटामिन हड्डियों के स्वास्थ्य के लिए महत्वपूर्ण है क्योंकि यह कैल्शियम के अवशोषण में मदद करता है?",
        answers: shuffle([
            { text: "विटामिन A", correct: false },
            { text: "विटामिन C", correct: false },
            { text: "विटामिन D", correct: true },
            { text: "विटामिन B12", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विटामिन D आंतों से कैल्शियम को अवशोषित करने में मदद करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो हड्डियों के खनिजकरण के लिए आवश्यक है।"
    },
    {
        question: "प्रश्न 22. 'ओस्टियोसाइट्स' (Osteocytes) क्या हैं?",
        answers: shuffle([
            { text: "हड्डी बनाने वाली कोशिकाएं", correct: false },
            { text: "हड्डी को नष्ट करने वाली कोशिकाएं", correct: false },
            { text: "परिपक्व हड्डी कोशिकाएं", correct: true },
            { text: "उपास्थि कोशिकाएं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओस्टियोसाइट्स हड्डी के मैट्रिक्स में फंसी परिपक्व हड्डी कोशिकाएं हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जो हड्डी के ऊतकों के रखरखाव में मदद करती हैं।"
    },
    {
        question: "प्रश्न 23. कलाई की हड्डियों को क्या कहा जाता है?",
        answers: shuffle([
            { text: "टार्सल्स (Tarsals)", correct: false },
            { text: "मेटाटार्सल्स (Metatarsals)", correct: false },
            { text: "कार्पल्स (Carpals)", correct: true },
            { text: "मेटाकार्पल्स (Metacarpals)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कलाई 8 छोटी हड्डियों से बनी होती है जिन्हें कार्पल्स कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो दो पंक्तियों में व्यवस्थित होती हैं।"
    },
    {
        question: "प्रश्न 24. मानव शरीर में अचल संधि (Immovable Joint) कहाँ पाई जाती है?",
        answers: shuffle([
            { text: "घुटने में", correct: false },
            { text: "कोहनी में", correct: false },
            { text: "खोपड़ी में", correct: true },
            { text: "कंधे में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खोपड़ी की हड्डियाँ सीवन (Sutures) नामक अचल रेशेदार जोड़ों द्वारा एक साथ जुड़ी होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जो मस्तिष्क की रक्षा करती हैं।"
    },
    {
        question: "प्रश्न 25. कंधे का जोड़ (Shoulder Joint) किस प्रकार के जोड़ का उदाहरण है?",
        answers: shuffle([
            { text: "हिंज जोड़ (Hinge Joint)", correct: false },
            { text: "गेंद और सॉकेट जोड़ (Ball and Socket Joint)", correct: true },
            { text: "पिवट जोड़ (Pivot Joint)", correct: false },
            { text: "ग्लाइडिंग जोड़ (Gliding Joint)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कंधे का जोड़ एक गेंद और सॉकेट जोड़ है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो गति की सबसे विस्तृत श्रृंखला (सभी दिशाओं में गति) की अनुमति देता है।"
    },
    {
        question: "प्रश्न 26. उपांगीय कंकाल (Appendicular Skeleton) में कितनी हड्डियाँ होती हैं?",
        answers: shuffle([
            { text: "80", correct: false },
            { text: "126", correct: true },
            { text: "206", correct: false },
            { text: "64", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उपांगीय कंकाल में हाथ-पैर की हड्डियाँ और उन्हें अक्षीय कंकाल से जोड़ने वाली मेखलाएं (गर्डल्स) शामिल होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जिनकी कुल संख्या 126 है।"
    },
    {
        question: "प्रश्न 27. टखने (Ankle) की हड्डियों को क्या कहते हैं?",
        answers: shuffle([
            { text: "कार्पल्स (Carpals)", correct: false },
            { text: "टार्सल्स (Tarsals)", correct: true },
            { text: "मेटाकार्पल्स (Metacarpals)", correct: false },
            { text: "फैलेन्जेस (Phalanges)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टखना 7 टार्सल्स नामक हड्डियों से मिलकर बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो पैर और पिंडली की हड्डियों को जोड़ती है।"
    },
    {
        question: "प्रश्न 28. अस्थि मज्जा (Bone Marrow) कहाँ पाया जाता है?",
        answers: shuffle([
            { text: "हड्डियों के बाहरी भाग में", correct: false },
            { text: "लंबी हड्डियों के खोखले केंद्र में", correct: true },
            { text: "जोड़ों के बीच में", correct: false },
            { text: "मांसपेशियों के अंदर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अस्थि मज्जा स्पंजी ऊतक है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो फीमर और श्रोणि जैसी कुछ बड़ी हड्डियों के मध्य गुहा में पाया जाता है।"
    },
    {
        question: "प्रश्न 29. वह कौन सी एकमात्र हड्डी है जो किसी अन्य हड्डी से सीधे नहीं जुड़ती है?",
        answers: shuffle([
            { text: "स्टर्नम (Sternum)", correct: false },
            { text: "पटेला (Patella)", correct: false },
            { text: "हायोड हड्डी (Hyoid Bone)", correct: true },
            { text: "क्लेविकल (Clavicle)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हायोड हड्डी गर्दन में स्थित एक 'U' आकार की हड्डी है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो केवल मांसपेशियों और लिगामेंट्स द्वारा अपनी जगह पर टिकी रहती है।"
    },
    {
        question: "प्रश्न 30. कोहनी का जोड़ (Elbow Joint) किस प्रकार का जोड़ है?",
        answers: shuffle([
            { text: "गेंद और सॉकेट जोड़", correct: false },
            { text: "हिंज जोड़ (Hinge Joint)", correct: true },
            { text: "पिवट जोड़", correct: false },
            { text: "सैडल जोड़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोहनी एक हिंज जोड़ है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो एक दरवाजे के कब्जे की तरह केवल एक ही तल में (मुड़ने और सीधा होने) गति की अनुमति देता है।"
    },
    {
        question: "प्रश्न 31. हड्डियों के विकास की प्रक्रिया को क्या कहा जाता है?",
        answers: shuffle([
            { text: "हेमेटोपोइसिस (Hematopoiesis)", correct: false },
            { text: "ऑसिफिकेशन (Ossification)", correct: true },
            { text: "मायोजेनेसिस (Myogenesis)", correct: false },
            { text: "ग्लाइकोलाइसिस (Glycolysis)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑसिफिकेशन या अस्थिजनन वह प्रक्रिया है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसके द्वारा भ्रूण के विकास के दौरान और हड्डी की मरम्मत के दौरान नए हड्डी ऊतक बनते हैं।"
    },
    {
        question: "प्रश्न 32. 'ओस्टियोब्लास्ट' (Osteoblasts) कोशिकाओं का क्या कार्य है?",
        answers: shuffle([
            { text: "हड्डी को तोड़ना", correct: false },
            { text: "नई हड्डी का निर्माण करना", correct: true },
            { text: "वसा का भंडारण करना", correct: false },
            { text: "रक्त कोशिकाओं का निर्माण करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओस्टियोब्लास्ट हड्डी बनाने वाली कोशिकाएं हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जो हड्डी के मैट्रिक्स का संश्लेषण और स्राव करती हैं।"
    },
    {
        question: "प्रश्न 33. 'ओस्टियोक्लास्ट' (Osteoclasts) कोशिकाओं का क्या कार्य है?",
        answers: shuffle([
            { text: "हड्डी का निर्माण करना", correct: false },
            { text: "हड्डी के ऊतकों को तोड़ना और पुनरवशोषित करना", correct: true },
            { text: "कैल्शियम का भंडारण करना", correct: false },
            { text: "जोड़ों को चिकनाई देना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओस्टियोक्लास्ट बड़ी कोशिकाएं हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जो हड्डी के पुनर्माडलिंग और मरम्मत की प्रक्रिया में हड्डी के खनिज मैट्रिक्स को तोड़ती हैं।"
    },
    {
        question: "प्रश्न 34. स्टर्नम (Sternum) हड्डी कहाँ स्थित होती है?",
        answers: shuffle([
            { text: "रीढ़ की हड्डी में", correct: false },
            { text: "खोपड़ी में", correct: false },
            { text: "छाती के केंद्र में", correct: true },
            { text: "श्रोणि में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्टर्नम या उरोस्थि एक सपाट हड्डी है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो छाती के बीच में स्थित होती है और पसलियों को जोड़ती है।"
    },
    {
        question: "प्रश्न 35. टिबिया और फीबुला हड्डियाँ शरीर के किस भाग में पाई जाती हैं?",
        answers: shuffle([
            { text: "ऊपरी बांह", correct: false },
            { text: "निचली बांह", correct: false },
            { text: "जांघ", correct: false },
            { text: "निचली टांग (पिंडली)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टिबिया (शिनबोन) और फीबुला निचली टांग की दो हड्डियाँ हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जो घुटने और टखने के बीच स्थित होती हैं।"
    },
    {
        question: "प्रश्न 36. उंगलियों और पैर की उंगलियों की हड्डियों को क्या कहा जाता है?",
        answers: shuffle([
            { text: "कार्पल्स", correct: false },
            { text: "टार्सल्स", correct: false },
            { text: "फैलेन्जेस (Phalanges)", correct: true },
            { text: "मेटाकार्पल्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाथ और पैर दोनों की उंगलियों की हड्डियों को फैलेन्जेस कहा जाता है।"
    },
    {
        question: "प्रश्न 37. एक वयस्क के कशेरुक स्तंभ (vertebral column) का आकार कैसा होता है?",
        answers: shuffle([
            { text: "सीधा 'I' आकार", correct: false },
            { text: "'C' आकार", correct: false },
            { text: "'S' आकार", correct: true },
            { text: "'L' आकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कशेरुक स्तंभ में चार प्राकृतिक वक्र होते हैं जो इसे 'S' आकार देते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शरीर के वजन को संतुलित करने और झटकों को अवशोषित करने में मदद करता है।"
    },
    {
        question: "प्रश्न 38. 'रिकेट्स' (Rickets) रोग किसकी कमी के कारण होता है?",
        answers: shuffle([
            { text: "विटामिन C", correct: false },
            { text: "विटामिन D", correct: true },
            { text: "विटामिन A", correct: false },
            { text: "विटामिन K", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बच्चों में विटामिन D, कैल्शियम या फास्फोरस की कमी से हड्डियाँ नरम और कमजोर हो जाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे रिकेट्स नामक रोग होता है।"
    },
    {
        question: "प्रश्न 39. सपाट हड्डियाँ (Flat Bones) कहाँ पाई जाती हैं?",
        answers: shuffle([
            { text: "कलाई और टखने में", correct: false },
            { text: "खोपड़ी, पसलियों और कंधे की हड्डी में", correct: true },
            { text: "हाथ और पैर में", correct: false },
            { text: "रीढ़ की हड्डी में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सपाट हड्डियों का मुख्य कार्य आंतरिक अंगों की रक्षा करना।<br><br><i class='fa-solid fa-angles-right icon'></i> या मांसपेशियों के जुड़ाव के लिए एक विस्तृत सतह प्रदान करना है।"
    },
    {
        question: "प्रश्न 40. पहली ग्रीवा कशेरुका (C1 vertebra) को क्या कहा जाता है?",
        answers: shuffle([
            { text: "एक्सिस (Axis)", correct: false },
            { text: "एटलस (Atlas)", correct: true },
            { text: "सैक्रम (Sacrum)", correct: false },
            { text: "कॉक्सिक्स (Coccyx)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एटलस पहली कशेरुका है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो खोपड़ी को सहारा देती है और सिर को 'हाँ' में हिलाने की अनुमति देती है।"
    },
    {
        question: "प्रश्न 41. दूसरी ग्रीवा कशेरुका (C2 vertebra) को क्या कहा जाता है?",
        answers: shuffle([
            { text: "एटलस (Atlas)", correct: false },
            { text: "एक्सिस (Axis)", correct: true },
            { text: "वर्टेब्रा प्रोमिनेंस (Vertebra prominens)", correct: false },
            { text: "लम्बर (Lumbar)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक्सिस में एक उभार (डेन्स) होता है जिसके चारों ओर एटलस घूमता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे सिर को 'ना' में घुमाने की गति संभव होती है।"
    },
    {
        question: "प्रश्न 42. पीली अस्थि मज्जा (Yellow Bone Marrow) का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "लाल रक्त कोशिकाओं का निर्माण", correct: false },
            { text: "वसा का भंडारण करना", correct: true },
            { text: "हड्डियों को मजबूती देना", correct: false },
            { text: "जोड़ों को चिकनाई देना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीली अस्थि मज्जा मुख्य रूप से वसा कोशिकाओं से बनी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> और यह ऊर्जा के भंडार के रूप में कार्य करती है।"
    },
    {
        question: "प्रश्न 43. श्रोणि मेखला (Pelvic Girdle) किन हड्डियों से बनी होती है?",
        answers: shuffle([
            { text: "क्लेविकल और स्कैपुला", correct: false },
            { text: "इलियम, इस्चियम और प्यूबिस", correct: true },
            { text: "फीमर और पटेला", correct: false },
            { text: "सैक्रम और कॉक्सिक्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये तीन हड्डियाँ बचपन में अलग होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> और वयस्क होने पर मिलकर कूल्हे की हड्डी (हिप बोन) का निर्माण करती हैं।"
    },
    {
        question: "प्रश्न 44. शरीर की एकमात्र तैरती हुई पसलियाँ (Floating Ribs) कौन सी हैं?",
        answers: shuffle([
            { text: "पहली 2 जोड़ी", correct: false },
            { text: "पहली 7 जोड़ी", correct: false },
            { text: "अंतिम 5 जोड़ी", correct: false },
            { text: "अंतिम 2 जोड़ी (11वीं और 12वीं)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन पसलियों को तैरती हुई कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> क्योंकि वे सामने की ओर स्टर्नम से नहीं जुड़ती हैं।"
    },
    {
        question: "प्रश्न 45. हड्डी का बाहरी कठोर आवरण क्या कहलाता है?",
        answers: shuffle([
            { text: "एंडोस्टियम (Endosteum)", correct: false },
            { text: "पेरीओस्टियम (Periosteum)", correct: true },
            { text: "अस्थि मज्जा (Bone Marrow)", correct: false },
            { text: "कॉम्पैक्ट बोन (Compact Bone)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेरीओस्टियम एक घनी झिल्ली है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो हड्डियों की बाहरी सतह को कवर करती है और रक्त वाहिकाओं तथा तंत्रिकाओं से युक्त होती है।"
    },
    {
        question: "प्रश्न 46. 'गाउट' (Gout) रोग जोड़ों में किस पदार्थ के जमा होने से होता है?",
        answers: shuffle([
            { text: "कैल्शियम ऑक्सालेट", correct: false },
            { text: "कोलेस्ट्रॉल", correct: false },
            { text: "यूरिक एसिड क्रिस्टल", correct: true },
            { text: "लैक्टिक एसिड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब शरीर में यूरिक एसिड का स्तर बढ़ जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> तो इसके क्रिस्टल जोड़ों में जमा हो सकते हैं, जिससे गंभीर दर्द और सूजन होती है, जिसे गाउट कहते हैं।"
    },
    {
        question: "प्रश्न 47. साइनोवियल जोड़ों में उपास्थि (Cartilage) का क्या कार्य है?",
        answers: shuffle([
            { text: "हड्डियों को जोड़ना", correct: false },
            { text: "हड्डियों की सतहों को चिकना बनाना और झटकों को सोखना", correct: true },
            { text: "रक्त का उत्पादन करना", correct: false },
            { text: "द्रव का स्राव करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आर्टिकुलर कार्टिलेज हड्डियों के सिरों को ढकने वाला एक चिकना ऊतक है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो घर्षण को कम करता है और एक कुशन के रूप में कार्य करता है।"
    },
    {
        question: "प्रश्न 48. निचली बांह की हड्डियाँ कौन सी हैं?",
        answers: shuffle([
            { text: "ह्यूमरस और फीमर", correct: false },
            { text: "टिबिया और फीबुला", correct: false },
            { text: "रेडियस और अल्ना", correct: true },
            { text: "कार्पल्स और मेटाकार्पल्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेडियस (अंगूठे की तरफ) और अल्ना (छोटी उंगली की तरफ) कोहनी और कलाई के बीच स्थित निचली बांह की दो हड्डियाँ हैं।"
    },
    {
        question: "प्रश्न 49. 'फ्रैक्चर' (Fracture) का क्या अर्थ है?",
        answers: shuffle([
            { text: "हड्डी का मुड़ना", correct: false },
            { text: "हड्डी का टूटना", correct: true },
            { text: "हड्डी का खिसकना", correct: false },
            { text: "हड्डी में संक्रमण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हड्डी की निरंतरता में किसी भी प्रकार का विराम या दरार फ्रैक्चर कहलाता है।"
    },
    {
        question: "प्रश्न 50. मानव शरीर में कितनी ग्रीवा कशेरुकाएं (Cervical Vertebrae) होती हैं?",
        answers: shuffle([
            { text: "5", correct: false },
            { text: "7", correct: true },
            { text: "12", correct: false },
            { text: "4", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गर्दन के क्षेत्र में 7 ग्रीवा कशेरुकाएं (C1 से C7) होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जो सिर को सहारा देती हैं और गति प्रदान करती हैं।"
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