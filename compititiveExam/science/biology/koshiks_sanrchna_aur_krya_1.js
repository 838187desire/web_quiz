const questions = [
    {
        topHeading: "कोशिका: संरचना और कार्य विज्ञान पर आधारित 35 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. निम्नलिखित में से किसे 'कोशिका का पावर हाउस' (Power House of the Cell) कहा जाता है?",
        answers: shuffle([
            { text: "राइबोसोम", correct: false },
            { text: "माइटोकॉन्ड्रिया", correct: true },
            { text: "गॉल्जी उपकरण", correct: false },
            { text: "लाइसोसोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माइटोकॉन्ड्रिया कोशिकीय श्वसन द्वारा ATP (एडेनोसिन ट्राइफॉस्फेट) के रूप में ऊर्जा उत्पन्न करता है, जिसका उपयोग कोशिका अपनी विभिन्न जैविक क्रियाओं के लिए करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी कारण इसे कोशिका का ऊर्जा गृह कहा जाता है।"
    },
    {
        question: "प्रश्न 2. कोशिका सिद्धांत (Cell Theory) का प्रतिपादन किसने किया था?",
        answers: shuffle([
            { text: "रॉबर्ट हुक", correct: false },
            { text: "एंटोनी वॉन ल्यूवेनहॉक", correct: false },
            { text: "श्लीडन और श्वान", correct: true },
            { text: "रुडोल्फ विरचो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1839 में, वनस्पतिशास्त्री मैथियास श्लीडन और जंतुविज्ञानी थियोडोर श्वान ने मिलकर कोशिका सिद्धांत प्रस्तुत किया, जिसके अनुसार सभी सजीव एक या एक से अधिक कोशिकाओं से बने होते हैं।"
    },
    {
        question: "प्रश्न 3. पादप कोशिका भित्ति (Plant Cell Wall) मुख्य रूप से किससे बनी होती है?",
        answers: shuffle([
            { text: "प्रोटीन", correct: false },
            { text: "लिपिड", correct: false },
            { text: "सेलूलोज़", correct: true },
            { text: "स्टार्च", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पादप कोशिका भित्ति का मुख्य घटक सेलूलोज़ है, जो एक जटिल कार्बोहाइड्रेट है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कोशिका को संरचनात्मक दृढ़ता और सुरक्षा प्रदान करती है।"
    },
    {
        question: "प्रश्न 4. जन्तु कोशिका में कौन सा कोशिकांग अनुपस्थित होता है?",
        answers: shuffle([
            { text: "माइटोकॉन्ड्रिया", correct: false },
            { text: "केंद्रक", correct: false },
            { text: "लवक (Plastid)", correct: true },
            { text: "राइबोसोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लवक, जैसे हरितलवक (क्लोरोप्लास्ट), केवल पादप कोशिकाओं और कुछ शैवालों में पाए जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये प्रकाश संश्लेषण के लिए आवश्यक हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जन्तु कोशिकाओं में इनका अभाव होता है।"
    },
    {
        question: "प्रश्न 5. कोशिका की 'आत्मघाती थैली' (Suicidal Bag) किसे कहा जाता है?",
        answers: shuffle([
            { text: "लाइसोसोम", correct: true },
            { text: "रिक्तिका (Vacuole)", correct: false },
            { text: "गॉल्जी उपकरण", correct: false },
            { text: "एंडोप्लाज्मिक रेटिकुलम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाइसोसोम में शक्तिशाली पाचक एंजाइम (हाइड्रोलाइटिक एंजाइम) होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जब कोशिका क्षतिग्रस्त हो जाती है, तो लाइसोसोम फटकर अपनी ही कोशिका को पचा लेते हैं, इसलिए इन्हें आत्मघाती थैली कहते हैं।"
    },
    {
        question: "प्रश्न 6. DNA (डीऑक्सीराइबोन्यूक्लिक एसिड) मुख्य रूप से कोशिका के किस भाग में पाया जाता है?",
        answers: shuffle([
            { text: "कोशिका द्रव्य", correct: false },
            { text: "केंद्रक (Nucleus)", correct: true },
            { text: "राइबोसोम", correct: false },
            { text: "कोशिका झिल्ली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूकेरियोटिक कोशिकाओं में अधिकांश DNA केंद्रक के अंदर गुणसूत्रों (Chromosomes) के रूप में संगठित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कोशिका की आनुवंशिक सूचनाओं का वाहक होता है।"
    },
    {
        question: "प्रश्न 7. प्रोटीन संश्लेषण (Protein Synthesis) का कार्य स्थल कौन-सा है?",
        answers: shuffle([
            { text: "माइटोकॉन्ड्रिया", correct: false },
            { text: "लाइसोसोम", correct: false },
            { text: "राइबोसोम", correct: true },
            { text: "केंद्रिका (Nucleolus)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राइबोसोम को कोशिका की 'प्रोटीन फैक्ट्री' कहा जाता है क्योंकि यहीं पर mRNA के निर्देशों के अनुसार अमीनो एसिड को जोड़कर प्रोटीन का निर्माण होता है।"
    },
    {
        question: "प्रश्न 8. प्रोकैरियोटिक कोशिका और यूकेरियोटिक कोशिका में मुख्य अंतर क्या है?",
        answers: shuffle([
            { text: "कोशिका भित्ति की उपस्थिति", correct: false },
            { text: "कोशिका झिल्ली की उपस्थिति", correct: false },
            { text: "झिल्ली-बद्ध केंद्रक की अनुपस्थिति", correct: true },
            { text: "राइबोसोम की उपस्थिति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोकैरियोटिक कोशिकाओं में एक सुसंगठित, झिल्ली से घिरा हुआ केंद्रक नहीं होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उनका आनुवंशिक पदार्थ कोशिका द्रव्य में बिखरा रहता है, जिसे न्यूक्लियॉइड कहते हैं।"
    },
    {
        question: "प्रश्न 9. कोशिका झिल्ली (Cell Membrane) का 'फ्लूइड मोजेक मॉडल' किसने प्रस्तुत किया?",
        answers: shuffle([
            { text: "वाटसन और क्रिक", correct: false },
            { text: "सिंगर और निकोलसन", correct: true },
            { text: "श्लीडन और श्वान", correct: false },
            { text: "रॉबर्ट ब्राउन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1972 में सिंगर और निकोलसन ने फ्लूइड मोजेक मॉडल प्रस्तुत किया, जिसके अनुसार कोशिका झिल्ली प्रोटीन और लिपिड की बनी एक अर्ध-तरल संरचना है।"
    },
    {
        question: "प्रश्न 10. समसूत्री कोशिका विभाजन (Mitosis) के परिणामस्वरूप एक जनक कोशिका से कितनी संतति कोशिकाएं बनती हैं?",
        answers: shuffle([
            { text: "एक", correct: false },
            { text: "दो", correct: true },
            { text: "चार", correct: false },
            { text: "आठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समसूत्री विभाजन में एक द्विगुणित (Diploid) जनक कोशिका विभाजित होकर दो आनुवंशिक रूप से समान द्विगुणित संतति कोशिकाओं का निर्माण करती है।"
    },
    {
        question: "प्रश्न 11. प्रकाश संश्लेषण की प्रक्रिया कोशिका के किस अंगक में होती है?",
        answers: shuffle([
            { text: "माइटोकॉन्ड्रिया", correct: false },
            { text: "हरितलवक (Chloroplast)", correct: true },
            { text: "अवर्णीलवक (Leucoplast)", correct: false },
            { text: "वर्णीलवक (Chromoplast)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हरितलवक में क्लोरोफिल नामक हरा वर्णक होता है जो सूर्य के प्रकाश की ऊर्जा को ग्रहण कर प्रकाश संश्लेषण की प्रक्रिया को संपन्न करता है, जिससे भोजन का निर्माण होता है।"
    },
    {
        question: "प्रश्न 12. कोशिका का 'यातायात प्रबंधक' (Traffic Police) किसे कहा जाता है?",
        answers: shuffle([
            { text: "राइबोसोम", correct: false },
            { text: "लाइसोसोम", correct: false },
            { text: "गॉल्जी उपकरण (Golgi Apparatus)", correct: true },
            { text: "एंडोप्लाज्मिक रेटिकुलम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गॉल्जी उपकरण कोशिका में बने प्रोटीन और अन्य पदार्थों की छंटाई, पैकेजिंग और उन्हें उनके गंतव्य तक भेजने का कार्य करता है, इसलिए इसे यातायात प्रबंधक कहते हैं।"
    },
    {
        question: "प्रश्न 13. अर्धसूत्री विभाजन (Meiosis) का क्या महत्व है?",
        answers: shuffle([
            { text: "शरीर की वृद्धि", correct: false },
            { text: "घावों का भरना", correct: false },
            { text: "लैंगिक जनन हेतु युग्मक निर्माण", correct: true },
            { text: "अलैंगिक जनन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अर्धसूत्री विभाजन जनन कोशिकाओं में होता है, जिससे अगुणित (Haploid) युग्मक (जैसे शुक्राणु और अंडाणु) बनते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रजातियों में गुणसूत्रों की संख्या को स्थिर बनाए रखता है।"
    },
    {
        question: "प्रश्न 14. कोशिका के अंदर कंकाल जैसी संरचना प्रदान करने वाला कोशिकांग कौन-सा है?",
        answers: shuffle([
            { text: "गॉल्जी उपकरण", correct: false },
            { text: "माइटोकॉन्ड्रिया", correct: false },
            { text: "एंडोप्लाज्मिक रेटिकुलम (ER)", correct: true },
            { text: "लाइसोसोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंडोप्लाज्मिक रेटिकुलम नलिकाओं का एक विस्तृत जाल है जो कोशिका द्रव्य में फैला रहता है और कोशिका को यांत्रिक सहारा तथा एक आंतरिक कंकाल प्रदान करता है।"
    },
    {
        question: "प्रश्न 15. गुणसूत्र (Chromosome) किससे बने होते हैं?",
        answers: shuffle([
            { text: "केवल DNA", correct: false },
            { text: "केवल प्रोटीन", correct: false },
            { text: "DNA और प्रोटीन", correct: true },
            { text: "DNA और RNA", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुणसूत्र DNA और हिस्टोन नामक प्रोटीन से बनी संघनित संरचनाएं हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> DNA आनुवंशिक सूचनाओं को धारण करता है जबकि हिस्टोन प्रोटीन DNA की पैकेजिंग में मदद करते हैं।"
    },
    {
        question: "प्रश्न 16. पादप कोशिका को जन्तु कोशिका से भिन्न करने वाली एक प्रमुख विशेषता क्या है?",
        answers: shuffle([
            { text: "कोशिका झिल्ली की उपस्थिति", correct: false },
            { text: "केंद्रक की उपस्थिति", correct: false },
            { text: "कोशिका भित्ति की उपस्थिति", correct: true },
            { text: "माइटोकॉन्ड्रिया की उपस्थिति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पादप कोशिकाओं में कोशिका झिल्ली के बाहर एक कठोर सेलूलोज़ की बनी कोशिका भित्ति होती है, जो जन्तु कोशिकाओं में नहीं पाई जाती है।"
    },
    {
        question: "प्रश्न 17. केंद्रक की खोज किस वैज्ञानिक ने की थी?",
        answers: shuffle([
            { text: "रॉबर्ट हुक", correct: false },
            { text: "रॉबर्ट ब्राउन", correct: true },
            { text: "पुरकिंजे", correct: false },
            { text: "ल्यूवेनहॉक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्कॉटिश वनस्पतिशास्त्री रॉबर्ट ब्राउन ने 1831 में ऑर्किड की कोशिकाओं में केंद्रक की खोज की थी।"
    },
    {
        question: "प्रश्न 18. 70S प्रकार के राइबोसोम किन कोशिकाओं में पाए जाते हैं?",
        answers: shuffle([
            { text: "केवल यूकेरियोटिक कोशिकाओं में", correct: false },
            { text: "केवल प्रोकैरियोटिक कोशिकाओं में", correct: false },
            { text: "प्रोकैरियोटिक कोशिकाओं तथा यूकेरियोटिक कोशिकांगों (माइटोकॉन्ड्रिया, क्लोरोप्लास्ट) में", correct: true },
            { text: "केवल जंतु कोशिकाओं में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 70S राइबोसोम प्रोकैरियोटिक कोशिकाओं (जैसे बैक्टीरिया) की विशेषता हैं, लेकिन ये यूकेरियोटिक कोशिकाओं के माइटोकॉन्ड्रिया और क्लोरोप्लास्ट में भी पाए जाते हैं।"
    },
    {
        question: "प्रश्न 19. 'जीवद्रव्य' (Protoplasm) शब्द का प्रयोग सबसे पहले किसने किया था?",
        answers: shuffle([
            { text: "श्वान", correct: false },
            { text: "डार्विन", correct: false },
            { text: "पुरकिंजे", correct: true },
            { text: "हेकेल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1839 में, जोहान्स इवेंजेलिस्टा पुरकिंजे ने कोशिका के भीतर के जीवित, तरल पदार्थ के लिए 'जीवद्रव्य' शब्द गढ़ा।"
    },
    {
        question: "प्रश्न 20. कोशिका विभाजन को प्रेरित करने वाला प्रमुख पादप हार्मोन कौन-सा है?",
        answers: shuffle([
            { text: "ऑक्सिन", correct: false },
            { text: "जिबरेलिन", correct: false },
            { text: "साइटोकाइनिन", correct: true },
            { text: "एब्सिसिक एसिड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> साइटोकाइनिन एक पादप हार्मोन है जो मुख्य रूप से कोशिका विभाजन (साइटोकाइनेसिस) को बढ़ावा देता है और पौधों की वृद्धि एवं विकास में महत्वपूर्ण भूमिका निभाता है।"
    },
    {
        question: "प्रश्न 21. कौन-सा कोशिकांग केवल पादप कोशिका में पाया जाता है और जन्तु कोशिका में नहीं?",
        answers: shuffle([
            { text: "राइबोसोम", correct: false },
            { text: "कोशिका झिल्ली", correct: false },
            { text: "बड़ी केंद्रीय रिक्तिका (Large Central Vacuole)", correct: true },
            { text: "केंद्रक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परिपक्व पादप कोशिकाओं में एक बड़ी केंद्रीय रिक्तिका होती है जो कोशिका का 90% तक आयतन घेर सकती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह स्फीति दाब बनाए रखने और अपशिष्ट पदार्थों के भंडारण में मदद करती है।"
    },
    {
        question: "प्रश्न 22. चिकनी एंडोप्लाज्मिक रेटिकुलम (SER) का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "प्रोटीन संश्लेषण", correct: false },
            { text: "लिपिड और स्टेरॉयड का संश्लेषण", correct: true },
            { text: "ऊर्जा उत्पादन", correct: false },
            { text: "पदार्थों का पाचन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चिकनी एंडोप्लाज्मिक रेटिकुलम (Smooth ER) लिपिड, फॉस्फोलिपिड और स्टेरॉयड जैसे हार्मोन के संश्लेषण और विषहरण (Detoxification) में महत्वपूर्ण भूमिका निभाता है।"
    },
    {
        question: "प्रश्न 23. एक कोशिका से दूसरी कोशिका में जल के अणुओं की गति परासरण (Osmosis) द्वारा होती है। यह गति किसके माध्यम से होती है?",
        answers: shuffle([
            { text: "कोशिका भित्ति", correct: false },
            { text: "चयनात्मक पारगम्य झिल्ली (Selectively Permeable Membrane)", correct: true },
            { text: "केंद्रक झिल्ली", correct: false },
            { text: "रिक्तिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परासरण एक विशेष प्रकार का विसरण है जिसमें जल के अणु अपनी उच्च सांद्रता से निम्न सांद्रता की ओर एक चयनात्मक पारगम्य झिल्ली (जैसे कोशिका झिल्ली) के माध्यम से गति करते हैं।"
    },
    {
        question: "प्रश्न 24. मानव शरीर की सबसे लंबी कोशिका कौन सी है?",
        answers: shuffle([
            { text: "यकृत कोशिका", correct: false },
            { text: "पेशी कोशिका", correct: false },
            { text: "तंत्रिका कोशिका (Neuron)", correct: true },
            { text: "लाल रक्त कोशिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तंत्रिका कोशिकाएं या न्यूरॉन मानव शरीर की सबसे लंबी कोशिकाएं होती हैं, जो संकेतों को शरीर के एक हिस्से से दूसरे हिस्से तक पहुंचाने के लिए विशेषीकृत होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इनकी लंबाई एक मीटर तक भी हो सकती है।"
    },
    {
        question: "प्रश्न 25. क्रोमेटिन (Chromatin) कहाँ पाया जाता है?",
        answers: shuffle([
            { text: "कोशिका द्रव्य में", correct: false },
            { text: "केंद्रक में", correct: true },
            { text: "राइबोसोम में", correct: false },
            { text: "लाइसोसोम में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रोमेटिन, DNA और प्रोटीन (मुख्य रूप से हिस्टोन) का एक जटिल जाल है जो यूकेरियोटिक कोशिकाओं के केंद्रक में पाया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> कोशिका विभाजन के समय यह संघनित होकर गुणसूत्र बनाता है।"
    },
    {
        question: "प्रश्न 26. कोशिका चक्र (Cell Cycle) की किस अवस्था में DNA का द्विगुणन (Replication) होता है?",
        answers: shuffle([
            { text: "G1 अवस्था", correct: false },
            { text: "S अवस्था", correct: true },
            { text: "G2 अवस्था", correct: false },
            { text: "M अवस्था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशिका चक्र की S (संश्लेषण) अवस्था के दौरान कोशिका अपने DNA की एक सटीक प्रतिलिपि बनाती है, ताकि विभाजन के बाद दोनों संतति कोशिकाओं को आनुवंशिक पदार्थ का पूरा सेट मिल सके।"
    },
    {
        question: "प्रश्न 27. श्वसन की क्रेब्स चक्र (Krebs Cycle) प्रक्रिया कोशिका के किस भाग में होती है?",
        answers: shuffle([
            { text: "कोशिका द्रव्य", correct: false },
            { text: "माइटोकॉन्ड्रिया के मैट्रिक्स में", correct: true },
            { text: "लाइसोसोम में", correct: false },
            { text: "हरितलवक के स्ट्रोमा में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रेब्स चक्र, जो कोशिकीय श्वसन का एक महत्वपूर्ण चरण है, यूकेरियोटिक कोशिकाओं में माइटोकॉन्ड्रिया के आंतरिक तरल भाग, यानी मैट्रिक्स में संपन्न होता है।"
    },
    {
        question: "प्रश्न 28. कौन-सा कोशिकांग अकोशिकीय (non-cellular) जीव, जैसे विषाणु (Virus), में नहीं पाया जाता है?",
        answers: shuffle([
            { text: "आनुवंशिक पदार्थ (DNA/RNA)", correct: false },
            { text: "प्रोटीन आवरण (कैप्सिड)", correct: false },
            { text: "कोशिका झिल्ली", correct: true },
            { text: "ये कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विषाणु को सजीव और निर्जीव के बीच की कड़ी माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इनमें केवल आनुवंशिक पदार्थ और एक प्रोटीन कोट होता है, लेकिन कोशिका झिल्ली, कोशिका द्रव्य और अन्य कोशिकांगों का पूर्ण अभाव होता है।"
    },
    {
        question: "प्रश्न 29. पादप कोशिकाओं में फूलों और फलों को विभिन्न रंग प्रदान करने के लिए कौन-सा लवक उत्तरदायी है?",
        answers: shuffle([
            { text: "हरितलवक (Chloroplast)", correct: false },
            { text: "अवर्णीलवक (Leucoplast)", correct: false },
            { text: "वर्णीलवक (Chromoplast)", correct: true },
            { text: "प्रोप्लास्टिड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वर्णीलवक में कैरोटीनॉयड और जैंथोफिल जैसे वर्णक होते हैं जो फूलों और फलों को पीला, नारंगी या लाल रंग प्रदान करते हैं, जिससे परागण और बीज प्रकीर्णन में सहायता मिलती है।"
    },
    {
        question: "प्रश्न 30. दो कोशिकाओं के कोशिका द्रव्य को जोड़ने वाली संरचना क्या कहलाती है?",
        answers: shuffle([
            { text: "टाइट जंक्शन", correct: false },
            { text: "प्लाज्मोडेस्मेटा", correct: true },
            { text: "डेस्मोसोम", correct: false },
            { text: "गैप जंक्शन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्लाज्मोडेस्मेटा विशेष रूप से पादप कोशिकाओं में पाए जाने वाले सूक्ष्म चैनल हैं जो आसन्न कोशिकाओं की कोशिका भित्ति से होकर गुजरते हैं और उनके कोशिका द्रव्य को जोड़ते हैं, जिससे पदार्थों का आदान-प्रदान संभव होता है।"
    },
    {
        question: "प्रश्न 31. राइबोसोम की उप-इकाइयों (sub-units) का निर्माण कहाँ होता है?",
        answers: shuffle([
            { text: "केंद्रक झिल्ली में", correct: false },
            { text: "कोशिका द्रव्य में", correct: false },
            { text: "केंद्रिका (Nucleolus) में", correct: true },
            { text: "गॉल्जी उपकरण में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केंद्रिका, जो केंद्रक के अंदर एक सघन संरचना है, राइबोसोमल RNA (rRNA) के संश्लेषण और राइबोसोम की उप-इकाइयों को एकत्रित करने का मुख्य स्थल है।"
    },
    {
        question: "प्रश्न 32. एंडोसिम्बायोटिक सिद्धांत (Endosymbiotic Theory) किन कोशिकांगों की उत्पत्ति की व्याख्या करता है?",
        answers: shuffle([
            { text: "राइबोसोम और लाइसोसोम", correct: false },
            { text: "माइटोकॉन्ड्रिया और क्लोरोप्लास्ट", correct: true },
            { text: "केंद्रक और गॉल्जी उपकरण", correct: false },
            { text: "एंडोप्लाज्मिक रेटिकुलम और रिक्तिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस सिद्धांत के अनुसार, माइटोकॉन्ड्रिया और क्लोरोप्लास्ट की उत्पत्ति प्राचीन प्रोकैरियोटिक जीवों से हुई है जिन्हें प्रारंभिक यूकेरियोटिक कोशिकाओं ने निगल लिया और वे सहजीवी के रूप में रहने लगे।"
    },
    {
        question: "प्रश्न 33. किस कोशिकांग में डीएनए पाया जाता है?",
        answers: shuffle([
            { text: "केवल केंद्रक में", correct: false },
            { text: "केंद्रक और माइटोकॉन्ड्रिया में", correct: false },
            { text: "केंद्रक, माइटोकॉन्ड्रिया और क्लोरोप्लास्ट में", correct: true },
            { text: "केवल माइटोकॉन्ड्रिया में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशिका का अधिकांश डीएनए केंद्रक में होता है, लेकिन माइटोकॉन्ड्रिया और क्लोरोप्लास्ट (पादप कोशिकाओं में) के पास भी अपना स्वयं का वृत्ताकार डीएनए होता है, जो उनकी प्रोकैरियोटिक उत्पत्ति का प्रमाण है।"
    },
    {
        question: "प्रश्न 34. मृत कोशिकाओं की खोज का श्रेय किसे दिया जाता है?",
        answers: shuffle([
            { text: "एंटोनी वॉन ल्यूवेनहॉक", correct: false },
            { text: "रॉबर्ट हुक", correct: true },
            { text: "थियोडोर श्वान", correct: false },
            { text: "रुडोल्फ विरचो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1665 में, रॉबर्ट हुक ने अपने स्वनिर्मित सूक्ष्मदर्शी से कॉर्क की एक पतली परत का अवलोकन किया और उसमें मधुमक्खी के छत्ते जैसी संरचनाएं देखीं, जिन्हें उन्होंने 'सेल' (कोशिका) नाम दिया।<br><br><i class='fa-solid fa-angles-right icon'></i> ये वास्तव में मृत कोशिका भित्तियाँ थीं।"
    },
    {
        question: "प्रश्न 35. सेंट्रोसोम (Centrosome) नामक कोशिकांग मुख्य रूप से किस प्रक्रिया में भाग लेता है?",
        answers: shuffle([
            { text: "प्रोटीन संश्लेषण", correct: false },
            { text: "ऊर्जा उत्पादन", correct: false },
            { text: "कोशिका विभाजन", correct: true },
            { text: "प्रकाश संश्लेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेंट्रोसोम, जो मुख्य रूप से जन्तु कोशिकाओं में पाया जाता है, कोशिका विभाजन के दौरान तर्कु तंतुओं (spindle fibers) के निर्माण का आयोजन करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये तंतु गुणसूत्रों को अलग करने में मदद करते हैं।"
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