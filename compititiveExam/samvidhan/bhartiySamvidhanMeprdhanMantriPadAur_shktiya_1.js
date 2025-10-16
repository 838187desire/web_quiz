const questions = [
    {
        topHeading: "प्रधानमंत्री का पद और शक्तियों पर आधारित 50 बहुविकल्पीय प्रश्न (quiz_no.)"
    },
    {
        question: "प्रश्न 1. भारतीय संविधान का कौन सा अनुच्छेद भारत के प्रधानमंत्री की नियुक्ति का प्रावधान करता है?",
        answers: shuffle([
            { text: "अनुच्छेद 74", correct: false },
            { text: "अनुच्छेद 75", correct: true },
            { text: "अनुच्छेद 76", correct: false },
            { text: "अनुच्छेद 78", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 75(1) में स्पष्ट रूप से कहा गया है कि \"प्रधानमंत्री की नियुक्ति राष्ट्रपति करेगा और अन्य मंत्रियों की नियुक्ति राष्ट्रपति, प्रधानमंत्री की सलाह पर करेगा।\""
    },
    {
        question: "प्रश्न 2. प्रधानमंत्री बनने के लिए व्यक्ति को न्यूनतम किस सदन का सदस्य होना अनिवार्य है?",
        answers: shuffle([
            { text: "केवल लोकसभा", correct: false },
            { text: "केवल राज्यसभा", correct: false },
            { text: "लोकसभा या राज्यसभा", correct: true },
            { text: "किसी भी सदन का सदस्य होना अनिवार्य नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रधानमंत्री को संसद के किसी भी सदन (लोकसभा या राज्यसभा) का सदस्य होना चाहिए।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि नियुक्ति के समय वह सदस्य नहीं है, तो उसे छह महीने के भीतर किसी भी सदन की सदस्यता लेनी होती है।"
    },
    {
        question: "प्रश्न 3. भारत का प्रधानमंत्री किसके प्रति जवाबदेह होता है?",
        answers: shuffle([
            { text: "राष्ट्रपति", correct: false },
            { text: "राज्यसभा", correct: false },
            { text: "लोकसभा", correct: true },
            { text: "भारत के मुख्य न्यायाधीश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 75(3) के अनुसार, मंत्रिपरिषद सामूहिक रूप से लोकसभा के प्रति उत्तरदायी होती है, और प्रधानमंत्री मंत्रिपरिषद का प्रमुख होता है।"
    },
    {
        question: "प्रश्न 4. यदि कोई व्यक्ति प्रधानमंत्री नियुक्त होते समय संसद का सदस्य नहीं है, तो उसे कितने समय के भीतर सदस्य बनना अनिवार्य है?",
        answers: shuffle([
            { text: "3 महीने", correct: false },
            { text: "6 महीने", correct: true },
            { text: "9 महीने", correct: false },
            { text: "1 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के अनुसार, कोई भी मंत्री या प्रधानमंत्री जो नियुक्ति के समय संसद का सदस्य नहीं है, उसे 6 महीने के भीतर संसद की सदस्यता प्राप्त करनी होगी, अन्यथा उसे अपना पद छोड़ना होगा।"
    },
    {
        question: "प्रश्न 5. प्रधानमंत्री का कार्यकाल कितना होता है?",
        answers: shuffle([
            { text: "5 वर्ष", correct: false },
            { text: "6 वर्ष", correct: false },
            { text: "राज्यसभा के कार्यकाल तक", correct: false },
            { text: "जब तक उसे लोकसभा में बहुमत का समर्थन प्राप्त हो", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रधानमंत्री का कार्यकाल निश्चित नहीं होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> वह राष्ट्रपति के प्रसादपर्यंत पद पर बना रहता है, जिसका व्यावहारिक अर्थ है कि जब तक उसे लोकसभा में बहुमत का विश्वास प्राप्त है, वह पद पर रह सकता है।"
    },
    {
        question: "प्रश्न 6. 'सरकार की नीतियों का प्रमुख प्रवक्ता' कौन होता है?",
        answers: shuffle([
            { text: "राष्ट्रपति", correct: false },
            { text: "गृह मंत्री", correct: false },
            { text: "प्रधानमंत्री", correct: true },
            { text: "कैबिनेट सचिव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रधानमंत्री सरकार का प्रमुख होता है और संसद के अंदर और बाहर सरकार की नीतियों पर आधिकारिक घोषणा करने वाला मुख्य प्रवक्ता होता है।"
    },
    {
        question: "प्रश्न 7. नीति आयोग (NITI Aayog) का पदेन अध्यक्ष कौन होता है?",
        answers: shuffle([
            { text: "वित्त मंत्री", correct: false },
            { text: "गृह मंत्री", correct: false },
            { text: "राष्ट्रपति", correct: false },
            { text: "प्रधानमंत्री", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> योजना आयोग के स्थान पर गठित नीति आयोग का पदेन अध्यक्ष भारत का प्रधानमंत्री होता है।"
    },
    {
        question: "प्रश्न 8. मंत्रिपरिषद की बैठकों की अध्यक्षता कौन करता है?",
        answers: shuffle([
            { text: "राष्ट्रपति", correct: false },
            { text: "उपराष्ट्रपति", correct: false },
            { text: "लोकसभा अध्यक्ष", correct: false },
            { text: "प्रधानमंत्री", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रधानमंत्री मंत्रिपरिषद का प्रमुख होता है और वह इसकी बैठकों की अध्यक्षता करता है तथा इसके निर्णयों को प्रभावित करता है।"
    },
    {
        question: "प्रश्न 9. राष्ट्रपति और मंत्रिपरिषद के बीच संचार की मुख्य कड़ी कौन है?",
        answers: shuffle([
            { text: "उपराष्ट्रपति", correct: false },
            { text: "लोकसभा अध्यक्ष", correct: false },
            { text: "प्रधानमंत्री", correct: true },
            { text: "गृह मंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 78 के तहत, यह प्रधानमंत्री का कर्तव्य है कि वह संघ के प्रशासन और विधान संबंधी प्रस्तावों के बारे में राष्ट्रपति को सूचित करे।"
    },
    {
        question: "प्रश्न 10. लोकसभा को भंग करने की सिफारिश राष्ट्रपति से कौन कर सकता है?",
        answers: shuffle([
            { text: "लोकसभा अध्यक्ष", correct: false },
            { text: "प्रधानमंत्री", correct: true },
            { text: "संसदीय कार्य मंत्री", correct: false },
            { text: "मंत्रिपरिषद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रधानमंत्री किसी भी समय राष्ट्रपति को लोकसभा भंग करने और नए चुनाव कराने की सलाह दे सकता है।"
    },
    {
        question: "प्रश्न 11. मंत्रियों को विभागों का आवंटन और फेरबदल कौन करता है?",
        answers: shuffle([
            { text: "राष्ट्रपति", correct: false },
            { text: "प्रधानमंत्री", correct: true },
            { text: "कैबिनेट सचिव", correct: false },
            { text: "संसदीय समिति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रधानमंत्री अपनी मंत्रिपरिषद के सदस्यों को विभिन्न मंत्रालयों का आवंटन करता है और आवश्यकतानुसार उनके विभागों में फेरबदल भी कर सकता है।"
    },
    {
        question: "प्रश्न 12. निम्नलिखित में से किस निकाय की अध्यक्षता प्रधानमंत्री नहीं करता है?",
        answers: shuffle([
            { text: "नीति आयोग", correct: false },
            { text: "राष्ट्रीय विकास परिषद", correct: false },
            { text: "राष्ट्रीय एकता परिषद", correct: false },
            { text: "वित्त आयोग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वित्त आयोग एक संवैधानिक निकाय है जिसकी नियुक्ति राष्ट्रपति द्वारा की जाती है और इसकी अध्यक्षता प्रधानमंत्री नहीं करता।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य तीनों निकायों की अध्यक्षता प्रधानमंत्री करता है।"
    },
    {
        question: "प्रश्न 13. किसी मंत्री को पद से हटाने के लिए प्रधानमंत्री किसे सलाह दे सकता है?",
        answers: shuffle([
            { text: "लोकसभा अध्यक्ष को", correct: false },
            { text: "भारत के मुख्य न्यायाधीश को", correct: false },
            { text: "राष्ट्रपति को", correct: true },
            { text: "संबंधित मंत्री को स्वयं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि प्रधानमंत्री किसी मंत्री के काम से संतुष्ट नहीं है, तो वह उसे त्यागपत्र देने के लिए कह सकता है या राष्ट्रपति को उसे बर्खास्त करने की सलाह दे सकता है।"
    },
    {
        question: "प्रश्न 14. \"प्रधानमंत्री, मंत्रियों के बीच एक समान समकक्षों में प्रथम (First among equals) है।\" यह कथन किसका है?",
        answers: shuffle([
            { text: "लॉर्ड मॉर्ले", correct: true },
            { text: "आइवर जेनिंग्स", correct: false },
            { text: "एच. जे. लास्की", correct: false },
            { text: "विलियम हरकोर्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लॉर्ड मॉर्ले ने प्रधानमंत्री की स्थिति को कैबिनेट में 'समकक्षों में प्रथम' के रूप में वर्णित किया, हालांकि आधुनिक समय में प्रधानमंत्री की शक्तियां बहुत अधिक बढ़ गई हैं।"
    },
    {
        question: "प्रश्न 15. भारत के महान्यायवादी (Attorney General) की नियुक्ति के लिए राष्ट्रपति को सलाह कौन देता है?",
        answers: shuffle([
            { text: "भारत के मुख्य न्यायाधीश", correct: false },
            { text: "विधि मंत्री", correct: false },
            { text: "प्रधानमंत्री की अध्यक्षता वाली मंत्रिपरिषद", correct: true },
            { text: "लोकसभा अध्यक्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नियंत्रक एवं महालेखा परीक्षक (CAG), महान्यायवादी, UPSC के अध्यक्ष और सदस्यों जैसी प्रमुख नियुक्तियों के संबंध में राष्ट्रपति को सलाह केंद्रीय मंत्रिपरिषद देती है, जिसका प्रमुख प्रधानमंत्री होता है।"
    },
    {
        question: "प्रश्न 16. राष्ट्रीय आपदा प्रबंधन प्राधिकरण (NDMA) का पदेन अध्यक्ष कौन होता है?",
        answers: shuffle([
            { text: "गृह मंत्री", correct: false },
            { text: "प्रधानमंत्री", correct: true },
            { text: "राष्ट्रपति", correct: false },
            { text: "रक्षा मंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आपदा प्रबंधन अधिनियम, 2005 के तहत गठित राष्ट्रीय आपदा प्रबंधन प्राधिकरण का पदेन अध्यक्ष प्रधानमंत्री होता है।"
    },
    {
        question: "प्रश्न 17. यदि प्रधानमंत्री अपने पद से त्यागपत्र दे देता है, तो क्या होता है?",
        answers: shuffle([
            { text: "केवल प्रधानमंत्री का पद रिक्त होता है", correct: false },
            { text: "पूरी मंत्रिपरिषद भंग हो जाती है", correct: true },
            { text: "वरिष्ठतम मंत्री कार्यवाहक प्रधानमंत्री बनता है", correct: false },
            { text: "लोकसभा स्वतः भंग हो जाती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रधानमंत्री मंत्रिपरिषद का प्रमुख होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उसके इस्तीफे या मृत्यु का अर्थ पूरी मंत्रिपरिषद का इस्तीफा माना जाता है, जिससे एक राजनीतिक शून्य उत्पन्न हो जाता है।"
    },
    {
        question: "प्रश्न 18. 'किचन कैबिनेट' का क्या अर्थ है?",
        answers: shuffle([
            { text: "रसोई के लिए जिम्मेदार मंत्रियों का समूह", correct: false },
            { text: "प्रधानमंत्री और उसके 2-4 विश्वसनीय सहयोगियों का अनौपचारिक समूह", correct: true },
            { text: "केवल कैबिनेट मंत्रियों का समूह", correct: false },
            { text: "विपक्ष के नेताओं का समूह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक अनौपचारिक निकाय होता है जिसमें प्रधानमंत्री अपने सबसे भरोसेमंद सहयोगियों (जो मंत्री हो भी सकते हैं और नहीं भी) से सलाह-मशविरा करता है।"
    },
    {
        question: "प्रश्न 19. संसद सत्र को बुलाने और सत्रावसान करने के संबंध में राष्ट्रपति को सलाह कौन देता है?",
        answers: shuffle([
            { text: "लोकसभा अध्यक्ष", correct: false },
            { text: "संसदीय मामलों की कैबिनेट समिति", correct: false },
            { text: "प्रधानमंत्री", correct: true },
            { text: "उपराष्ट्रपति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि यह शक्ति राष्ट्रपति के पास है, लेकिन वह इस शक्ति का प्रयोग प्रधानमंत्री की सलाह पर ही करता है।"
    },
    {
        question: "प्रश्न 20. \"वह राष्ट्र की नीति को आकार देता है।\" यह किसके लिए कहा गया है?",
        answers: shuffle([
            { text: "संसद", correct: false },
            { text: "राष्ट्रपति", correct: false },
            { text: "सर्वोच्च न्यायालय", correct: false },
            { text: "प्रधानमंत्री", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रधानमंत्री देश की आंतरिक और विदेश नीति को आकार देने में केंद्रीय भूमिका निभाता है।"
    },
    {
        question: "प्रश्न 21. भारत में 'वास्तविक कार्यकारी' शक्ति किसमें निहित है?",
        answers: shuffle([
            { text: "राष्ट्रपति", correct: false },
            { text: "प्रधानमंत्री", correct: true },
            { text: "मंत्रिपरिषद", correct: false },
            { text: "कैबिनेट सचिव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि राष्ट्रपति 'नाममात्र का कार्यकारी' (De jure) प्रमुख होता है, लेकिन वास्तविक कार्यकारी शक्तियाँ प्रधानमंत्री में निहित होती हैं।"
    },
    {
        question: "प्रश्न 22. प्रधानमंत्री पद के कर्तव्यों का उल्लेख किस अनुच्छेद में है?",
        answers: shuffle([
            { text: "अनुच्छेद 75", correct: false },
            { text: "अनुच्छेद 77", correct: false },
            { text: "अनुच्छेद 78", correct: true },
            { text: "अनुच्छेद 80", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 78 में प्रधानमंत्री के उन कर्तव्यों का वर्णन है जो राष्ट्रपति को जानकारी देने से संबंधित हैं।"
    },
    {
        question: "प्रश्न 23. मंत्रिपरिषद का आकार (प्रधानमंत्री सहित) लोकसभा की कुल सदस्य संख्या का कितने प्रतिशत से अधिक नहीं हो सकता?",
        answers: shuffle([
            { text: "10%", correct: false },
            { text: "12%", correct: false },
            { text: "15%", correct: true },
            { text: "20%", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 91वें संविधान संशोधन अधिनियम, 2003 द्वारा यह प्रावधान किया गया कि मंत्रिपरिषद का आकार लोकसभा की कुल सदस्य संख्या के 15% से अधिक नहीं होगा।"
    },
    {
        question: "प्रश्न 24. वह कौन से प्रधानमंत्री थे जिन्होंने कभी लोकसभा का सामना नहीं किया?",
        answers: shuffle([
            { text: "मोरारजी देसाई", correct: false },
            { text: "चौधरी चरण सिंह", correct: true },
            { text: "आई.के. गुजराल", correct: false },
            { text: "चंद्रशेखर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चौधरी चरण सिंह ने जुलाई 1979 से जनवरी 1980 तक प्रधानमंत्री के रूप में कार्य किया, लेकिन इससे पहले कि वह लोकसभा में अपना बहुमत साबित कर पाते, कांग्रेस ने समर्थन वापस ले लिया और उन्हें इस्तीफा देना पड़ा।"
    },
    {
        question: "प्रश्न 25. 'सामूहिक उत्तरदायित्व' का सिद्धांत किस अनुच्छेद में निहित है?",
        answers: shuffle([
            { text: "अनुच्छेद 74(1)", correct: false },
            { text: "अनुच्छेद 75(3)", correct: true },
            { text: "अनुच्छेद 77", correct: false },
            { text: "अनुच्छेद 78", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अनुच्छेद कहता है कि मंत्रिपरिषद सामूहिक रूप से लोकसभा के प्रति उत्तरदायी होगी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका अर्थ है कि एक मंत्री के खिलाफ अविश्वास प्रस्ताव पूरे मंत्रिमंडल के खिलाफ माना जाता है।"
    },
    {
        question: "प्रश्न 26. प्रधानमंत्री सचिवालय का नाम बदलकर 'प्रधानमंत्री कार्यालय' (PMO) किस प्रधानमंत्री के कार्यकाल में किया गया?",
        answers: shuffle([
            { text: "जवाहरलाल नेहरू", correct: false },
            { text: "लाल बहादुर शास्त्री", correct: false },
            { text: "इंदिरा गांधी", correct: false },
            { text: "मोरारजी देसाई", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1977 में, मोरारजी देसाई सरकार ने प्रधानमंत्री सचिवालय का नाम बदलकर प्रधानमंत्री कार्यालय (PMO) कर दिया।"
    },
    {
        question: "प्रश्न 27. अविश्वास प्रस्ताव (No-confidence motion) संसद के किस सदन में लाया जाता है?",
        answers: shuffle([
            { text: "केवल राज्यसभा", correct: false },
            { text: "केवल लोकसभा", correct: true },
            { text: "किसी भी सदन में", correct: false },
            { text: "दोनों सदनों की संयुक्त बैठक में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि मंत्रिपरिषद केवल लोकसभा के प्रति उत्तरदायी होती है, इसलिए सरकार के खिलाफ अविश्वास प्रस्ताव केवल लोकसभा में ही पेश किया जा सकता है।"
    },
    {
        question: "प्रश्न 28. पद पर रहते हुए मरने वाले पहले प्रधानमंत्री कौन थे?",
        answers: shuffle([
            { text: "लाल बहादुर शास्त्री", correct: false },
            { text: "जवाहरलाल नेहरू", correct: true },
            { text: "इंदिरा गांधी", correct: false },
            { text: "राजीव गांधी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जवाहरलाल नेहरू की मृत्यु 27 मई, 1964 को उनके प्रधानमंत्री के कार्यकाल के दौरान हुई थी।"
    },
    {
        question: "प्रश्न 29. भारत के कौन से प्रधानमंत्री राज्यसभा के सदस्य के रूप में प्रधानमंत्री बने?",
        answers: shuffle([
            { text: "इंदिरा गांधी", correct: false },
            { text: "एच.डी. देवेगौड़ा", correct: false },
            { text: "मनमोहन सिंह", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंदिरा गांधी (1966 में), एच.डी. देवेगौड़ा (1996 में) और मनमोहन सिंह (2004 और 2009 में) सभी राज्यसभा के सदस्य रहते हुए प्रधानमंत्री बने।"
    },
    {
        question: "प्रश्न 30. प्रधानमंत्री की शक्तियों का मुख्य स्रोत क्या है?",
        answers: shuffle([
            { text: "A) संविधान", correct: false },
            { text: "B) लोकसभा में बहुमत दल का नेता होना", correct: false },
            { text: "C) राष्ट्रपति द्वारा दी गई शक्तियाँ", correct: false },
            { text: "उपरोक्त (A) और (B) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रधानमंत्री को संविधान से औपचारिक शक्तियाँ प्राप्त होती हैं, लेकिन उसकी वास्तविक शक्ति का स्रोत लोकसभा में उसकी पार्टी या गठबंधन का बहुमत होता है।"
    },
    {
        question: "प्रश्न 31. 'शैडो कैबिनेट' (Shadow Cabinet) की अवधारणा किस देश की शासन प्रणाली की विशेषता है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "फ्रांस", correct: false },
            { text: "ब्रिटेन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्रिटेन में, विपक्षी दल एक 'शैडो कैबिनेट' का गठन करता है जो सत्तारूढ़ कैबिनेट की निगरानी करता है और वैकल्पिक नीतियां प्रस्तुत करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत में यह औपचारिक व्यवस्था नहीं है।"
    },
    {
        question: "प्रश्न 32. सरकार के प्रमुख के रूप में, प्रधानमंत्री की भूमिका क्या है?",
        answers: shuffle([
            { text: "केवल नाममात्र का प्रमुख", correct: false },
            { text: "राज्य का प्रमुख", correct: false },
            { text: "सरकार का प्रमुख", correct: true },
            { text: "विधायिका का प्रमुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में, राष्ट्रपति 'राज्य का प्रमुख' होता है, जबकि प्रधानमंत्री 'सरकार का प्रमुख' होता है और वास्तविक कार्यकारी शक्तियों का प्रयोग करता है।"
    },
    {
        question: "प्रश्न 33. वह प्रधानमंत्री कौन थे जिन्होंने अपने कार्यकाल में भारत में आर्थिक उदारीकरण की प्रक्रिया शुरू की?",
        answers: shuffle([
            { text: "राजीव गांधी", correct: false },
            { text: "वी.पी. सिंह", correct: false },
            { text: "पी.वी. नरसिम्हा राव", correct: true },
            { text: "अटल बिहारी वाजपेयी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1991 में पी.वी. नरसिम्हा राव की सरकार ने (वित्त मंत्री मनमोहन सिंह के साथ मिलकर) भारत में आर्थिक उदारीकरण, निजीकरण और वैश्वीकरण (LPG) की शुरुआत की।"
    },
    {
        question: "प्रश्न 34. प्रधानमंत्री को \"तारों के बीच चंद्रमा\" (Moon among the stars) की संज्ञा किसने दी है?",
        answers: shuffle([
            { text: "आइवर जेनिंग्स", correct: false },
            { text: "विलियम वर्नर हरकोर्ट", correct: true },
            { text: "एच.आर.जी. ग्रीव्स", correct: false },
            { text: "मुनरो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह उक्ति प्रधानमंत्री की कैबिनेट में केंद्रीय और सबसे चमकदार स्थिति को दर्शाती है।"
    },
    {
        question: "प्रश्न 35. 'शपथ ग्रहण करने के बाद पद संभालने वाले सबसे उम्रदराज प्रधानमंत्री कौन थे?",
        answers: shuffle([
            { text: "अटल बिहारी वाजपेयी", correct: false },
            { text: "मनमोहन सिंह", correct: false },
            { text: "मोरारजी देसाई", correct: true },
            { text: "आई.के. गुजराल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोरारजी देसाई 1977 में 81 वर्ष की आयु में प्रधानमंत्री बने थे।"
    },
    {
        question: "प्रश्न 36. प्रधानमंत्री राष्ट्रीय राहत कोष (PMNRF) का संचालन किसके द्वारा किया जाता है?",
        answers: shuffle([
            { text: "वित्त मंत्रालय", correct: false },
            { text: "गृह मंत्रालय", correct: false },
            { text: "प्रधानमंत्री कार्यालय (PMO)", correct: true },
            { text: "राष्ट्रपति सचिवालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रधानमंत्री राष्ट्रीय राहत कोष पूरी तरह से सार्वजनिक योगदान पर निर्भर करता है और इसका प्रशासन प्रधानमंत्री कार्यालय द्वारा किया जाता है।"
    },
    {
        question: "प्रश्न 37. भारतीय विदेश नीति का मुख्य वास्तुकार किसे माना जाता है?",
        answers: shuffle([
            { text: "सरदार पटेल", correct: false },
            { text: "जवाहरलाल नेहरू", correct: true },
            { text: "महात्मा गांधी", correct: false },
            { text: "डॉ. राजेंद्र प्रसाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत के पहले प्रधानमंत्री के रूप में, जवाहरलाल नेहरू ने गुटनिरपेक्षता जैसी नीतियों के माध्यम से भारत की विदेश नीति की नींव रखी।"
    },
    {
        question: "प्रश्न 38. केंद्रीय सतर्कता आयोग (CVC) के अध्यक्ष की नियुक्ति करने वाली समिति में निम्नलिखित में से कौन शामिल होता है?",
        answers: shuffle([
            { text: "केवल प्रधानमंत्री", correct: false },
            { text: "प्रधानमंत्री, गृह मंत्री और लोकसभा में विपक्ष के नेता", correct: true },
            { text: "राष्ट्रपति, उपराष्ट्रपति और प्रधानमंत्री", correct: false },
            { text: "भारत के मुख्य न्यायाधीश, प्रधानमंत्री और विधि मंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चयन समिति की अध्यक्षता प्रधानमंत्री करते हैं, जिसमें गृह मंत्री और लोकसभा में विपक्ष के नेता सदस्य के रूप में होते हैं।"
    },
    {
        question: "प्रश्न 39. कौन सा अनुच्छेद प्रधानमंत्री और अन्य मंत्रियों की नियुक्ति से संबंधित है?",
        answers: shuffle([
            { text: "अनुच्छेद 72", correct: false },
            { text: "अनुच्छेद 74", correct: false },
            { text: "अनुच्छेद 75", correct: true },
            { text: "अनुच्छेद 76", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 75 स्पष्ट रूप से प्रधानमंत्री और राष्ट्रपति द्वारा उनकी सलाह पर अन्य मंत्रियों की नियुक्ति का प्रावधान करता है।"
    },
    {
        question: "प्रश्न 40. यदि लोकसभा किसी एक मंत्री के विरुद्ध अविश्वास प्रस्ताव पारित करती है, तो?",
        answers: shuffle([
            { text: "केवल संबंधित मंत्री को त्यागपत्र देना होता है", correct: false },
            { text: "प्रधानमंत्री और संबंधित मंत्री को त्यागपत्र देना होता है", correct: false },
            { text: "संपूर्ण मंत्रिपरिषद को त्यागपत्र देना होता है", correct: true },
            { text: "प्रधानमंत्री लोकसभा भंग करने की सलाह दे सकता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह 'सामूहिक उत्तरदायित्व' के सिद्धांत के कारण है।<br><br><i class='fa-solid fa-angles-right icon'></i> एक मंत्री में अविश्वास पूरे मंत्रिपरिषद में अविश्वास माना जाता है।"
    },
    {
        question: "प्रश्न 41. प्रधानमंत्री का वेतन और भत्ते कौन निर्धारित करता है?",
        answers: shuffle([
            { text: "राष्ट्रपति", correct: false },
            { text: "संसद", correct: true },
            { text: "कैबिनेट", correct: false },
            { text: "वित्त आयोग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रधानमंत्री का वेतन और भत्ता समय-समय पर संसद द्वारा कानून बनाकर निर्धारित किया जाता है।"
    },
    {
        question: "प्रश्न 42. किसने प्रधानमंत्री को \"राज्य की नाव का कप्तान\" कहा है?",
        answers: shuffle([
            { text: "मुनरो", correct: true },
            { text: "Ramsay Muir", correct: false },
            { text: "एच. जे. लास्की", correct: false },
            { text: "आइवर जेनिंग्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुनरो ने प्रधानमंत्री की तुलना उस जहाज के कप्तान से की जो राज्य की नाव को चलाता है।"
    },
    {
        question: "प्रश्न 43. अंतर-राज्य परिषद (Inter-State Council) का अध्यक्ष कौन होता है?",
        answers: shuffle([
            { text: "राष्ट्रपति", correct: false },
            { text: "गृह मंत्री", correct: false },
            { text: "प्रधानमंत्री", correct: true },
            { text: "वित्त मंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केंद्र और राज्यों के बीच समन्वय स्थापित करने वाली अंतर-राज्य परिषद की अध्यक्षता प्रधानमंत्री करता है।"
    },
    {
        question: "प्रश्न 44. संविधान के अनुसार, निम्नलिखित में से क्या शब्दशः सत्य है?",
        answers: shuffle([
            { text: "प्रधानमंत्री का चयन लोकसभा द्वारा किया जाता है", correct: false },
            { text: "प्रधानमंत्री की नियुक्ति राष्ट्रपति द्वारा की जाती है", correct: true },
            { text: "प्रधानमंत्री को लोकसभा में बहुमत दल द्वारा नियुक्त किया जाता है", correct: false },
            { text: "प्रधानमंत्री लोकसभा अध्यक्ष द्वारा चयनित होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि राष्ट्रपति लोकसभा में बहुमत दल के नेता को ही प्रधानमंत्री नियुक्त करता है, लेकिन संवैधानिक भाषा के अनुसार, प्रधानमंत्री की 'नियुक्ति' राष्ट्रपति द्वारा की जाती है।"
    },
    {
        question: "प्रश्न 45. भारत में एक व्यक्ति कितनी बार प्रधानमंत्री बन सकता है?",
        answers: shuffle([
            { text: "केवल एक बार", correct: false },
            { text: "दो बार", correct: false },
            { text: "तीन बार", correct: false },
            { text: "कोई सीमा नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान में इस बात पर कोई सीमा नहीं लगाई गई है कि कोई व्यक्ति कितनी बार प्रधानमंत्री पद धारण कर सकता है।"
    },
    {
        question: "प्रश्न 46. प्रधानमंत्री पद से त्यागपत्र देने वाले प्रथम व्यक्ति कौन थे?",
        answers: shuffle([
            { text: "जवाहरलाल नेहरू", correct: false },
            { text: "लाल बहादुर शास्त्री", correct: false },
            { text: "मोरारजी देसाई", correct: true },
            { text: "चौधरी चरण सिंह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोरारजी देसाई ने 1979 में अपनी सरकार के खिलाफ अविश्वास प्रस्ताव पर मतदान से पहले ही इस्तीफा दे दिया था।"
    },
    {
        question: "प्रश्न 47. निम्नलिखित में से कौन सी प्रधानमंत्री की शक्ति का औपचारिक स्रोत नहीं है?",
        answers: shuffle([
            { text: "संविधान के अनुच्छेद", correct: false },
            { text: "संसदीय कानून", correct: false },
            { text: "अपनी पार्टी पर नियंत्रण", correct: true },
            { text: "राष्ट्रपति के साथ परामर्श", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपनी पार्टी पर नियंत्रण प्रधानमंत्री की राजनीतिक शक्ति का एक महत्वपूर्ण स्रोत है, लेकिन यह औपचारिक (संवैधानिक या कानूनी) स्रोत नहीं है।"
    },
    {
        question: "प्रश्न 48. \"यदि हमारे संविधान में किसी कार्यकारी की तुलना अमेरिकी राष्ट्रपति से की जा सकती है, तो वह प्रधानमंत्री है, न कि संघ का राष्ट्रपति।\" यह कथन किसका है?",
        answers: shuffle([
            { text: "जवाहरलाल नेहरू", correct: false },
            { text: "सरदार पटेल", correct: false },
            { text: "डॉ. राजेंद्र प्रसाद", correct: false },
            { text: "डॉ. बी.आर. अंबेडकर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान सभा में चर्चा के दौरान, डॉ. अंबेडकर ने भारत में प्रधानमंत्री की वास्तविक शक्तियों को उजागर करने के लिए यह तुलना की थी।"
    },
    {
        question: "प्रश्न 49. कैबिनेट सचिवालय किसके सीधे नियंत्रण में कार्य करता है?",
        answers: shuffle([
            { text: "राष्ट्रपति", correct: false },
            { text: "गृह मंत्री", correct: false },
            { text: "संसद", correct: false },
            { text: "प्रधानमंत्री", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैबिनेट सचिवालय का प्रशासनिक प्रमुख कैबिनेट सचिव होता है, और यह सीधे प्रधानमंत्री के अधीन कार्य करता है।"
    },
    {
        question: "प्रश्न 50. भारत के किस प्रधानमंत्री की मृत्यु देश के बाहर हुई थी?",
        answers: shuffle([
            { text: "जवाहरलाल नेहरू", correct: false },
            { text: "लाल बहादुर शास्त्री", correct: true },
            { text: "इंदिरा गांधी", correct: false },
            { text: "राजीव गांधी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ताशकंद समझौते पर हस्ताक्षर करने के एक दिन बाद 11 जनवरी, 1966 को ताशकंद (तब सोवियत संघ, अब उज्बेकिस्तान) में लाल बहादुर शास्त्री का निधन हो गया था।"
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