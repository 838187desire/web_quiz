const questions = [
    {
        topHeading: "संविधान के अनुच्छेद और भाग पर आधारित 50 बहुविकल्पीय प्रश्न (quiz_no.)"
    },
    {
        question: "प्रश्न 1. भारतीय संविधान का कौन सा भाग 'नागरिकता' से संबंधित है?",
        answers: shuffle([
            { text: "भाग I", correct: false },
            { text: "भाग II", correct: true },
            { text: "भाग III", correct: false },
            { text: "भाग IV", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान का भाग II (अनुच्छेद 5 से 11) नागरिकता के प्रावधानों से संबंधित है।"
    },
    {
        question: "प्रश्न 2. भारतीय संविधान का कौन सा अनुच्छेद 'कानून के समक्ष समानता' का अधिकार प्रदान करता है?",
        answers: shuffle([
            { text: "अनुच्छेद 14", correct: true },
            { text: "अनुच्छेद 15", correct: false },
            { text: "अनुच्छेद 16", correct: false },
            { text: "अनुच्छेद 17", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 14 यह प्रावधान करता है कि राज्य किसी भी व्यक्ति को भारत के क्षेत्र में कानून के समक्ष समानता या कानूनों के समान संरक्षण से वंचित नहीं करेगा।"
    },
    {
        question: "प्रश्न 3. 'अस्पृश्यता का अंत' भारतीय संविधान के किस अनुच्छेद में वर्णित है?",
        answers: shuffle([
            { text: "अनुच्छेद 16", correct: false },
            { text: "अनुच्छेद 17", correct: true },
            { text: "अनुच्छेद 18", correct: false },
            { text: "अनुच्छेद 19", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 17 अस्पृश्यता को समाप्त करता है और किसी भी रूप में इसके अभ्यास को प्रतिबंधित करता है।"
    },
    {
        question: "प्रश्न 4. भारतीय संविधान का कौन सा भाग 'मौलिक अधिकारों' से संबंधित है?",
        answers: shuffle([
            { text: "भाग II", correct: false },
            { text: "भाग III", correct: true },
            { text: "भाग IV", correct: false },
            { text: "भाग IV-A", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान का भाग III (अनुच्छेद 12 से 35) देश के नागरिकों के लिए मौलिक अधिकारों का वर्णन करता है।"
    },
    {
        question: "प्रश्न 5. 'प्रेस की स्वतंत्रता' का अधिकार किस अनुच्छेद के तहत निहित है?",
        answers: shuffle([
            { text: "अनुच्छेद 19(1)(a)", correct: true },
            { text: "अनुच्छेद 19(1)(b)", correct: false },
            { text: "अनुच्छेद 21", correct: false },
            { text: "अनुच्छेद 22", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भाषण और अभिव्यक्ति की स्वतंत्रता का अधिकार अनुच्छेद 19(1)(a) में दिया गया है, और सर्वोच्च न्यायालय ने माना है कि प्रेस की स्वतंत्रता इसी में निहित है।"
    },
    {
        question: "प्रश्न 6. भारतीय संविधान का कौन सा भाग 'राज्य के नीति निदेशक तत्वों' (DPSP) से संबंधित है?",
        answers: shuffle([
            { text: "भाग III", correct: false },
            { text: "भाग IV", correct: true },
            { text: "भाग V", correct: false },
            { text: "भाग VI", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान का भाग IV (अनुच्छेद 36 से 51) राज्य के नीति निदेशक तत्वों से संबंधित है, जो एक कल्याणकारी राज्य की स्थापना के लिए दिशा-निर्देश हैं।"
    },
    {
        question: "प्रश्न 7. 'ग्राम पंचायतों का संगठन' किस अनुच्छेद के तहत वर्णित है?",
        answers: shuffle([
            { text: "अनुच्छेद 39", correct: false },
            { text: "अनुच्छेद 40", correct: true },
            { text: "अनुच्छेद 41", correct: false },
            { text: "अनुच्छेद 48", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 40 राज्य को ग्राम पंचायतों को संगठित करने और उन्हें स्व-शासन की इकाइयों के रूप में कार्य करने में सक्षम बनाने के लिए आवश्यक शक्तियाँ और अधिकार प्रदान करने का निर्देश देता है।"
    },
    {
        question: "प्रश्न 8. भारतीय संविधान में 'मौलिक कर्तव्य' किस भाग में जोड़े गए हैं?",
        answers: shuffle([
            { text: "भाग IV", correct: false },
            { text: "भाग IV-A", correct: true },
            { text: "भाग V", correct: false },
            { text: "भाग III", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौलिक कर्तव्यों को 1976 में 42वें संशोधन अधिनियम द्वारा संविधान में जोड़ा गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> ये भाग IV-A के तहत अनुच्छेद 51-A में सूचीबद्ध हैं।"
    },
    {
        question: "प्रश्न 9. भारतीय संविधान का कौन सा भाग 'संघ' (The Union) से संबंधित है?",
        answers: shuffle([
            { text: "भाग IV", correct: false },
            { text: "भाग V", correct: true },
            { text: "भाग VI", correct: false },
            { text: "भाग VII", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भाग V (अनुच्छेद 52 से 151) संघ सरकार से संबंधित है, जिसमें राष्ट्रपति, उपराष्ट्रपति, संसद, केंद्रीय न्यायपालिका आदि शामिल हैं।"
    },
    {
        question: "प्रश्न 10. राष्ट्रपति पर महाभियोग चलाने की प्रक्रिया किस अनुच्छेद में दी गई है?",
        answers: shuffle([
            { text: "अनुच्छेद 59", correct: false },
            { text: "अनुच्छेद 60", correct: false },
            { text: "अनुच्छेद 61", correct: true },
            { text: "अनुच्छेद 72", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 61 में संविधान के उल्लंघन के लिए राष्ट्रपति पर महाभियोग चलाने की प्रक्रिया का वर्णन है।"
    },
    {
        question: "प्रश्न 11. 'धन विधेयक' (Money Bill) की परिभाषा भारतीय संविधान के किस अनुच्छेद में दी गई है?",
        answers: shuffle([
            { text: "अनुच्छेद 109", correct: false },
            { text: "अनुच्छेद 110", correct: true },
            { text: "अनुच्छेद 111", correct: false },
            { text: "अनुच्छेद 112", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 110 में उन मामलों को परिभाषित किया गया है जिन्हें धन विधेयक माना जाएगा।"
    },
    {
        question: "प्रश्न 12. संसद के दोनों सदनों की संयुक्त बैठक का प्रावधान किस अनुच्छेद में है?",
        answers: shuffle([
            { text: "अनुच्छेद 108", correct: true },
            { text: "अनुच्छेद 110", correct: false },
            { text: "अनुच्छेद 112", correct: false },
            { text: "अनुच्छेद 123", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 108 राष्ट्रपति को कुछ मामलों में गतिरोध को हल करने के लिए संसद के दोनों सदनों की संयुक्त बैठक बुलाने का अधिकार देता है।"
    },
    {
        question: "प्रश्न 13. राष्ट्रपति को अध्यादेश जारी करने की शक्ति किस अनुच्छेद से प्राप्त होती है?",
        answers: shuffle([
            { text: "अनुच्छेद 111", correct: false },
            { text: "अनुच्छेद 123", correct: true },
            { text: "अनुच्छेद 124", correct: false },
            { text: "अनुच्छेद 143", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब संसद सत्र में न हो तो अनुच्छेद 123 राष्ट्रपति को अध्यादेश जारी करने का अधिकार देता है।"
    },
    {
        question: "प्रश्न 14. सर्वोच्च न्यायालय की स्थापना और गठन का वर्णन किस अनुच्छेद में है?",
        answers: shuffle([
            { text: "अनुच्छेद 123", correct: false },
            { text: "अनुच्छेद 124", correct: true },
            { text: "अनुच्छेद 129", correct: false },
            { text: "अनुच्छेद 131", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 124 भारत के सर्वोच्च न्यायालय की स्थापना और गठन से संबंधित है।"
    },
    {
        question: "प्रश्न 15. भारतीय संविधान का कौन सा भाग 'राज्यों' (The States) से संबंधित है?",
        answers: shuffle([
            { text: "भाग V", correct: false },
            { text: "भाग VI", correct: true },
            { text: "भाग VII", correct: false },
            { text: "भाग VIII", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भाग VI (अनुच्छेद 152 से 237) राज्य सरकारों की संरचना और कामकाज से संबंधित है।"
    },
    {
        question: "प्रश्न 16. राज्यपाल की नियुक्ति का प्रावधान किस अनुच्छेद में है?",
        answers: shuffle([
            { text: "अनुच्छेद 153", correct: false },
            { text: "अनुच्छेद 154", correct: false },
            { text: "अनुच्छेद 155", correct: true },
            { text: "अनुच्छेद 156", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 155 के अनुसार, राज्य के राज्यपाल को राष्ट्रपति द्वारा अपने हस्ताक्षर और मुहर के तहत वारंट द्वारा नियुक्त किया जाएगा।"
    },
    {
        question: "प्रश्न 17. राज्य विधान सभा का गठन किस अनुच्छेद के तहत किया जाता है?",
        answers: shuffle([
            { text: "अनुच्छेद 168", correct: false },
            { text: "अनुच्छेद 169", correct: false },
            { text: "अनुच्छेद 170", correct: true },
            { text: "अनुच्छेद 171", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 170 राज्य की विधान सभा की संरचना से संबंधित है, जिसमें कहा गया है कि इसमें राज्य में क्षेत्रीय निर्वाचन क्षेत्रों से प्रत्यक्ष चुनाव द्वारा चुने गए सदस्य शामिल होंगे।"
    },
    {
        question: "प्रश्न 18. उच्च न्यायालयों को रिट जारी करने की शक्ति किस अनुच्छेद के तहत दी गई है?",
        answers: shuffle([
            { text: "अनुच्छेद 32", correct: false },
            { text: "अनुच्छेद 224", correct: false },
            { text: "अनुच्छेद 226", correct: true },
            { text: "अनुच्छेद 227", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 226 उच्च न्यायालयों को मौलिक अधिकारों के प्रवर्तन और किसी अन्य उद्देश्य के लिए रिट जारी करने का अधिकार देता है।"
    },
    {
        question: "प्रश्न 19. भारतीय संविधान का कौन सा भाग 'पंचायतों' से संबंधित है?",
        answers: shuffle([
            { text: "भाग IX", correct: true },
            { text: "भाग IX-A", correct: false },
            { text: "भाग X", correct: false },
            { text: "भाग XI", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 73वें संशोधन अधिनियम, 1992 द्वारा जोड़े गए भाग IX में पंचायतों से संबंधित प्रावधान (अनुच्छेद 243 से 243-O) शामिल हैं।"
    },
    {
        question: "प्रश्न 20. भारतीय संविधान का कौन सा भाग 'नगर पालिकाओं' से संबंधित है?",
        answers: shuffle([
            { text: "भाग IX", correct: false },
            { text: "भाग IX-A", correct: true },
            { text: "भाग IX-B", correct: false },
            { text: "भाग X", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 74वें संशोधन अधिनियम, 1992 द्वारा जोड़े गए भाग IX-A में नगर पालिकाओं से संबंधित प्रावधान (अनुच्छेद 243-P से 243-ZG) शामिल हैं।"
    },
    {
        question: "प्रश्न 21. संघ और राज्यों के बीच विधायी संबंधों का उल्लेख किस भाग में है?",
        answers: shuffle([
            { text: "भाग X", correct: false },
            { text: "भाग XI", correct: true },
            { text: "भाग XII", correct: false },
            { text: "भाग XIII", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भाग XI संघ और राज्यों के बीच संबंधों से संबंधित है, जिसमें विधायी और प्रशासनिक संबंध शामिल हैं।"
    },
    {
        question: "प्रश्न 22. 'संपत्ति का अधिकार' अब किस अनुच्छेद के तहत एक कानूनी अधिकार है?",
        answers: shuffle([
            { text: "अनुच्छेद 31", correct: false },
            { text: "अनुच्छेद 300", correct: false },
            { text: "अनुच्छेद 300-A", correct: true },
            { text: "अनुच्छेद 301", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 44वें संशोधन अधिनियम, 1978 द्वारा संपत्ति के अधिकार को मौलिक अधिकारों से हटाकर भाग XII के तहत अनुच्छेद 300-A में एक कानूनी अधिकार के रूप में स्थापित किया गया।"
    },
    {
        question: "प्रश्न 23. अखिल भारतीय सेवाओं (All-India Services) का प्रावधान किस अनुच्छेद में है?",
        answers: shuffle([
            { text: "अनुच्छेद 310", correct: false },
            { text: "अनुच्छेद 311", correct: false },
            { text: "अनुच्छेद 312", correct: true },
            { text: "अनुच्छेद 315", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 312 संसद को एक या एक से अधिक अखिल भारतीय सेवाओं के निर्माण के लिए कानून बनाने का अधिकार देता है जो संघ और राज्यों दोनों के लिए समान हो।"
    },
    {
        question: "प्रश्न 24. 'निर्वाचन आयोग' की स्थापना का प्रावधान किस अनुच्छेद में है?",
        answers: shuffle([
            { text: "अनुच्छेद 320", correct: false },
            { text: "अनुच्छेद 324", correct: true },
            { text: "अनुच्छेद 326", correct: false },
            { text: "अनुच्छेद 330", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 324 चुनावों के अधीक्षण, निर्देशन और नियंत्रण के लिए एक स्वतंत्र निर्वाचन आयोग की स्थापना का प्रावधान करता है।"
    },
    {
        question: "प्रश्न 25. लोकसभा में अनुसूचित जातियों और अनुसूचित जनजातियों के लिए सीटों का आरक्षण किस अनुच्छेद के तहत प्रदान किया गया है?",
        answers: shuffle([
            { text: "अनुच्छेद 330", correct: true },
            { text: "अनुच्छेद 331", correct: false },
            { text: "अनुच्छेद 332", correct: false },
            { text: "अनुच्छेद 335", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 330 लोकसभा में अनुसूचित जातियों और अनुसूचित जनजातियों के लिए सीटों के आरक्षण का प्रावधान करता है।"
    },
    {
        question: "प्रश्न 26. भारतीय संविधान का कौन सा भाग 'आपातकालीन प्रावधानों' से संबंधित है?",
        answers: shuffle([
            { text: "भाग XVII", correct: false },
            { text: "भाग XVIII", correct: true },
            { text: "भाग XIX", correct: false },
            { text: "भाग XX", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भाग XVIII (अनुच्छेद 352 से 360) देश में आपातकालीन स्थितियों से निपटने के प्रावधानों से संबंधित है।"
    },
    {
        question: "प्रश्न 27. 'वित्तीय आपातकाल' की घोषणा किस अनुच्छेद के तहत की जा सकती है?",
        answers: shuffle([
            { text: "अनुच्छेद 352", correct: false },
            { text: "अनुच्छेद 356", correct: false },
            { text: "अनुच्छेद 358", correct: false },
            { text: "अनुच्छेद 360", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 360 राष्ट्रपति को वित्तीय आपातकाल की घोषणा करने का अधिकार देता है यदि वह संतुष्ट हो कि ऐसी स्थिति उत्पन्न हो गई है जिससे भारत की वित्तीय स्थिरता या साख को खतरा है।"
    },
    {
        question: "प्रश्न 28. भारतीय संविधान का कौन सा भाग 'संविधान के संशोधन' से संबंधित है?",
        answers: shuffle([
            { text: "भाग XVIII", correct: false },
            { text: "भाग XIX", correct: false },
            { text: "भाग XX", correct: true },
            { text: "भाग XXI", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भाग XX का एकमात्र अनुच्छेद, अनुच्छेद 368, संविधान और इसकी प्रक्रिया में संशोधन करने के लिए संसद की शक्तियों से संबंधित है।"
    },
    {
        question: "प्रश्न 29. किस अनुच्छेद के तहत जम्मू और कश्मीर को विशेष दर्जा दिया गया था (जिसे बाद में निरस्त कर दिया गया)?",
        answers: shuffle([
            { text: "अनुच्छेद 368", correct: false },
            { text: "अनुच्छेद 370", correct: true },
            { text: "अनुच्छेद 371", correct: false },
            { text: "अनुच्छेद 372", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 370 ने जम्मू और कश्मीर राज्य को अस्थायी विशेष स्वायत्त दर्जा प्रदान किया था, जिसे 2019 में निरस्त कर दिया गया।"
    },
    {
        question: "प्रश्न 30. भारतीय संविधान का कौन सा भाग 'राजभाषा' से संबंधित है?",
        answers: shuffle([
            { text: "भाग XV", correct: false },
            { text: "भाग XVI", correct: false },
            { text: "भाग XVII", correct: true },
            { text: "भाग XVIII", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भाग XVII (अनुच्छेद 343 से 351) संघ की राजभाषा, क्षेत्रीय भाषाओं, सर्वोच्च न्यायालय और उच्च न्यायालयों की भाषा आदि से संबंधित है।"
    },
    {
        question: "प्रश्न 31. संघ की राजभाषा देवनागरी लिपि में हिंदी होगी, यह किस अनुच्छेद में कहा गया है?",
        answers: shuffle([
            { text: "अनुच्छेद 343(1)", correct: true },
            { text: "अनुच्छेद 344", correct: false },
            { text: "अनुच्छेद 345", correct: false },
            { text: "अनुच्छेद 348", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 343(1) घोषित करता है कि संघ की राजभाषा देवनागरी लिपि में हिंदी होगी।"
    },
    {
        question: "प्रश्न 32. किस अनुच्छेद के तहत राष्ट्रपति सर्वोच्च न्यायालय से परामर्श ले सकते हैं?",
        answers: shuffle([
            { text: "अनुच्छेद 129", correct: false },
            { text: "अनुच्छेद 137", correct: false },
            { text: "अनुच्छेद 143", correct: true },
            { text: "अनुच्छेद 148", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 143 राष्ट्रपति को कानून या तथ्य के किसी भी प्रश्न पर सर्वोच्च न्यायालय की राय लेने का अधिकार देता है।"
    },
    {
        question: "प्रश्न 33. भारत के नियंत्रक और महालेखा परीक्षक (CAG) की नियुक्ति का प्रावधान किस अनुच्छेद में है?",
        answers: shuffle([
            { text: "अनुच्छेद 148", correct: true },
            { text: "अनुच्छेद 149", correct: false },
            { text: "अनुच्छेद 150", correct: false },
            { text: "अनुच्छेद 151", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 148 भारत के लिए एक नियंत्रक और महालेखा परीक्षक का प्रावधान करता है, जिसे राष्ट्रपति द्वारा नियुक्त किया जाएगा।"
    },
    {
        question: "प्रश्न 34. 'अवशिष्ट शक्तियाँ' (Residuary powers) केंद्र में निहित होंगी, यह किस अनुच्छेद में वर्णित है?",
        answers: shuffle([
            { text: "अनुच्छेद 246", correct: false },
            { text: "अनुच्छेद 248", correct: true },
            { text: "अनुच्छेद 249", correct: false },
            { text: "अनुच्छेद 250", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 248 संसद को उन मामलों पर कानून बनाने की विशेष शक्ति देता है जो राज्य सूची या समवर्ती सूची में शामिल नहीं हैं।"
    },
    {
        question: "प्रश्न 35. किस अनुच्छेद के तहत संसद राज्य सूची के विषय पर कानून बना सकती है यदि राज्य सभा ऐसा करने के लिए प्रस्ताव पारित करती है?",
        answers: shuffle([
            { text: "अनुच्छेद 247", correct: false },
            { text: "अनुच्छेद 249", correct: true },
            { text: "अनुच्छेद 252", correct: false },
            { text: "अनुच्छेद 253", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि राज्यसभा उपस्थित और मतदान करने वाले सदस्यों के कम से कम दो-तिहाई बहुमत से एक प्रस्ताव पारित करती है कि यह राष्ट्रीय हित में आवश्यक है, तो संसद राज्य सूची में शामिल किसी भी मामले पर कानून बना सकती है।"
    },
    {
        question: "प्रश्न 36. 'वित्त आयोग' (Finance Commission) के गठन का प्रावधान किस अनुच्छेद में है?",
        answers: shuffle([
            { text: "अनुच्छेद 263", correct: false },
            { text: "अनुच्छेद 275", correct: false },
            { text: "अनुच्छेद 280", correct: true },
            { text: "अनुच्छेद 300", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 280 राष्ट्रपति को हर पांच साल में एक वित्त आयोग का गठन करने का अधिकार देता है ताकि वह संघ और राज्यों के बीच करों के वितरण पर सिफारिशें कर सके।"
    },
    {
        question: "प्रश्न 37. भारतीय संविधान का कौन सा अनुच्छेद 'भारत के महान्यायवादी' (Attorney-General for India) से संबंधित है?",
        answers: shuffle([
            { text: "अनुच्छेद 72", correct: false },
            { text: "अनुच्छेद 76", correct: true },
            { text: "अनुच्छेद 78", correct: false },
            { text: "अनुच्छेद 148", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 76 भारत के महान्यायवादी के पद का प्रावधान करता है, जो देश का सर्वोच्च कानून अधिकारी होता है।"
    },
    {
        question: "प्रश्न 38. कौन सा अनुच्छेद बच्चों के लिए मुफ्त और अनिवार्य शिक्षा का प्रावधान करता है?",
        answers: shuffle([
            { text: "अनुच्छेद 19", correct: false },
            { text: "अनुच्छेद 21-A", correct: true },
            { text: "अनुच्छेद 29", correct: false },
            { text: "अनुच्छेद 45", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 86वें संशोधन अधिनियम, 2002 द्वारा जोड़े गए अनुच्छेद 21-A में कहा गया है कि राज्य छह से चौदह वर्ष की आयु के सभी बच्चों को मुफ्त और अनिवार्य शिक्षा प्रदान करेगा।"
    },
    {
        question: "प्रश्न 39. किस अनुच्छेद के तहत 'संवैधानिक उपचारों का अधिकार' प्रदान किया गया है?",
        answers: shuffle([
            { text: "अनुच्छेद 30", correct: false },
            { text: "अनुच्छेद 31", correct: false },
            { text: "अनुच्छेद 32", correct: true },
            { text: "अनुच्छेद 226", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 32 मौलिक अधिकारों के प्रवर्तन के लिए सर्वोच्च न्यायालय में जाने का अधिकार प्रदान करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> डॉ. अम्बेडकर ने इसे 'संविधान की आत्मा और हृदय' कहा था।"
    },
    {
        question: "प्रश्न 40. किस अनुच्छेद में 'उपाधियों के अंत' का वर्णन है?",
        answers: shuffle([
            { text: "अनुच्छेद 16", correct: false },
            { text: "अनुच्छेद 17", correct: false },
            { text: "अनुच्छेद 18", correct: true },
            { text: "अनुच्छेद 19", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 18 राज्य को सैन्य या अकादमिक विशिष्टताओं को छोड़कर कोई भी उपाधि प्रदान करने से रोकता है।"
    },
    {
        question: "प्रश्न 41. राज्य में राष्ट्रपति शासन लगाने की सिफारिश राज्यपाल किस अनुच्छेद के तहत करते हैं?",
        answers: shuffle([
            { text: "अनुच्छेद 352", correct: false },
            { text: "अनुच्छेद 355", correct: false },
            { text: "अनुच्छेद 356", correct: true },
            { text: "अनुच्छेद 365", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 356 के तहत, यदि कोई राज्य सरकार संविधान के प्रावधानों के अनुसार काम करने में असमर्थ है, तो राज्यपाल की रिपोर्ट के आधार पर राष्ट्रपति शासन लगाया जा सकता है।"
    },
    {
        question: "प्रश्न 42. 'सार्वजनिक रोजगार के मामलों में अवसर की समानता' किस अनुच्छेद में सुनिश्चित की गई है?",
        answers: shuffle([
            { text: "अनुच्छेद 14", correct: false },
            { text: "अनुच्छेद 15", correct: false },
            { text: "अनुच्छेद 16", correct: true },
            { text: "अनुच्छेद 19", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 16 राज्य के अधीन किसी भी कार्यालय में रोजगार या नियुक्ति से संबंधित मामलों में सभी नागरिकों के लिए अवसर की समानता की गारंटी देता है।"
    },
    {
        question: "प्रश्न 43. 'प्राण और दैहिक स्वतंत्रता का संरक्षण' किस अनुच्छेद में वर्णित है?",
        answers: shuffle([
            { text: "अनुच्छेद 20", correct: false },
            { text: "अनुच्छेद 21", correct: true },
            { text: "अनुच्छेद 22", correct: false },
            { text: "अनुच्छेद 19", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 21 यह प्रावधान करता है कि किसी भी व्यक्ति को कानून द्वारा स्थापित प्रक्रिया के अलावा उसके जीवन या व्यक्तिगत स्वतंत्रता से वंचित नहीं किया जाएगा।"
    },
    {
        question: "प्रश्न 44. किस अनुच्छेद के तहत संसद को नागरिकता के संबंध में कानून बनाने का अधिकार है?",
        answers: shuffle([
            { text: "अनुच्छेद 9", correct: false },
            { text: "अनुच्छेद 10", correct: false },
            { text: "अनुच्छेद 11", correct: true },
            { text: "अनुच्छेद 5", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 11 संसद को नागरिकता के अधिग्रहण और समाप्ति तथा नागरिकता से संबंधित किसी भी अन्य मामले के संबंध में कोई भी प्रावधान करने का अधिकार देता है।"
    },
    {
        question: "प्रश्न 45. कौन सा अनुच्छेद 'समान नागरिक संहिता' (Uniform Civil Code) से संबंधित है?",
        answers: shuffle([
            { text: "अनुच्छेद 42", correct: false },
            { text: "अनुच्छेद 43", correct: false },
            { text: "अनुच्छेद 44", correct: true },
            { text: "अनुच्छेद 46", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राज्य के नीति निदेशक तत्वों के तहत अनुच्छेद 44 राज्य को भारत के पूरे क्षेत्र में नागरिकों के लिए एक समान नागरिक संहिता सुनिश्चित करने का प्रयास करने का निर्देश देता है।"
    },
    {
        question: "प्रश्न 46. 'अंतर-राज्य परिषद' (Inter-State Council) के गठन का प्रावधान किस अनुच्छेद में है?",
        answers: shuffle([
            { text: "अनुच्छेद 262", correct: false },
            { text: "अनुच्छेद 263", correct: true },
            { text: "अनुच्छेद 280", correct: false },
            { text: "अनुच्छेद 315", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 263 राष्ट्रपति को राज्यों के बीच विवादों की जांच और सलाह देने, सामान्य हित के विषयों पर चर्चा करने के लिए एक अंतर-राज्य परिषद की स्थापना करने का अधिकार देता है।"
    },
    {
        question: "प्रश्न 47. भारतीय संविधान का कौन सा भाग 'संघ राज्य क्षेत्रों' (The Union Territories) से संबंधित है?",
        answers: shuffle([
            { text: "भाग VII", correct: false },
            { text: "भाग VIII", correct: true },
            { text: "भाग IX", correct: false },
            { text: "भाग X", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भाग VIII (अनुच्छेद 239 से 242) संघ राज्य क्षेत्रों के प्रशासन से संबंधित है।"
    },
    {
        question: "प्रश्न 48. राष्ट्रीय अनुसूचित जाति आयोग का गठन किस अनुच्छेद के तहत किया गया है?",
        answers: shuffle([
            { text: "अनुच्छेद 338", correct: true },
            { text: "अनुच्छेद 338-A", correct: false },
            { text: "अनुच्छेद 340", correct: false },
            { text: "अनुच्छेद 341", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 338 में राष्ट्रीय अनुसूचित जाति आयोग के गठन का प्रावधान है, जिसका कार्य अनुसूचित जातियों के हितों की रक्षा करना है।"
    },
    {
        question: "प्रश्न 49. राष्ट्रीय अनुसूचित जनजाति आयोग का गठन किस अनुच्छेद के तहत किया गया है?",
        answers: shuffle([
            { text: "अनुच्छेद 338", correct: false },
            { text: "अनुच्छेद 338-A", correct: true },
            { text: "अनुच्छेद 339", correct: false },
            { text: "अनुच्छेद 342", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 89वें संशोधन अधिनियम, 2003 द्वारा जोड़े गए अनुच्छेद 338-A में राष्ट्रीय अनुसूचित जनजाति आयोग के गठन का प्रावधान है।"
    },
    {
        question: "प्रश्न 50. 'भारत की आकस्मिकता निधि' (Contingency Fund of India) किस अनुच्छेद से संबंधित है?",
        answers: shuffle([
            { text: "अनुच्छेद 266", correct: false },
            { text: "अनुच्छेद 267", correct: true },
            { text: "अनुच्छेद 268", correct: false },
            { text: "अनुच्छेद 269", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 267 संसद को 'भारत की आकस्मिकता निधि' नामक एक निधि स्थापित करने की अनुमति देता है, जिसे अप्रत्याशित व्यय को पूरा करने के लिए राष्ट्रपति के निपटान में रखा जाता है।"
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