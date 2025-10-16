const questions = [
    {
        topHeading: "नर और मादा प्रजनन तंत्र पर आधारित 50 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. पुरुषों में प्राथमिक यौन अंग (Primary Sex Organ) कौन सा है?",
        answers: shuffle([
            { text: "शिश्न (Penis)", correct: false },
            { text: "वृषण (Testis)", correct: true },
            { text: "प्रोस्टेट ग्रंथि", correct: false },
            { text: "शुक्राशय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृषण को प्राथमिक यौन अंग माना जाता है क्योंकि यह नर युग्मक (शुक्राणु) और पुरुष हार्मोन (टेस्टोस्टेरोन) दोनों का उत्पादन करता है।"
    },
    {
        question: "प्रश्न 2. शुक्राणुओं (Sperms) का निर्माण कहाँ होता है?",
        answers: shuffle([
            { text: "अधिवृषण (Epididymis) में", correct: false },
            { text: "शुक्रजनक नलिकाओं (Seminiferous tubules) में", correct: true },
            { text: "प्रोस्टेट ग्रंथि में", correct: false },
            { text: "शुक्रवाहिका (Vas deferens) में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्राणुजनन (Spermatogenesis) की प्रक्रिया वृषण के भीतर स्थित अत्यधिक कुंडलित शुक्रजनक नलिकाओं में होती है।"
    },
    {
        question: "प्रश्न 3. कौन सा हार्मोन पुरुषों में द्वितीयक यौन लक्षणों के विकास के लिए जिम्मेदार है?",
        answers: shuffle([
            { text: "एस्ट्रोजन", correct: false },
            { text: "प्रोजेस्टेरोन", correct: false },
            { text: "टेस्टोस्टेरोन", correct: true },
            { text: "प्रोलैक्टिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टेस्टोस्टेरोन हार्मोन, जो वृषण की लेडिग कोशिकाओं द्वारा स्रावित होता है, पुरुषों में दाढ़ी-मूंछ का आना, आवाज का भारी होना और मांसपेशियों के विकास को नियंत्रित करता है।"
    },
    {
        question: "प्रश्न 4. शुक्राणुओं का परिपक्वन और भंडारण कहाँ होता है?",
        answers: shuffle([
            { text: "वृषण में", correct: false },
            { text: "अधिवृषण (Epididymis) में", correct: true },
            { text: "शुक्राशय में", correct: false },
            { text: "मूत्रमार्ग में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिवृषण एक लंबी, कुंडलित नली है जो वृषण के पीछे स्थित होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहीं पर शुक्राणु गतिशील और निषेचन के लिए सक्षम होते हैं।"
    },
    {
        question: "प्रश्न 5. मादाओं में प्राथमिक यौन अंग कौन सा है?",
        answers: shuffle([
            { text: "गर्भाशय (Uterus)", correct: false },
            { text: "योनि (Vagina)", correct: false },
            { text: "अंडवाहिनी (Fallopian tube)", correct: false },
            { text: "अंडाशय (Ovary)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंडाशय मादा प्राथमिक यौन अंग है क्योंकि यह मादा युग्मक (अंडाणु) और मादा हार्मोन (एस्ट्रोजन और प्रोजेस्टेरोन) का उत्पादन करता है।"
    },
    {
        question: "प्रश्न 6. मानव में निषेचन (Fertilization) की प्रक्रिया सामान्यतः कहाँ होती है?",
        answers: shuffle([
            { text: "गर्भाशय में", correct: false },
            { text: "योनि में", correct: false },
            { text: "अंडवाहिनी (फैलोपियन ट्यूब) में", correct: true },
            { text: "अंडाशय में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निषेचन, यानी शुक्राणु और अंडाणु का संलयन, आमतौर पर अंडवाहिनी के एम्पुला (Ampulla) नामक भाग में होता है।"
    },
    {
        question: "प्रश्न 7. हर महीने अंडाशय से एक परिपक्व अंडाणु के निकलने की प्रक्रिया को क्या कहते हैं?",
        answers: shuffle([
            { text: "निषेचन (Fertilization)", correct: false },
            { text: "आरोपण (Implantation)", correct: false },
            { text: "अंडोत्सर्ग (Ovulation)", correct: true },
            { text: "मासिक धर्म (Menstruation)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मासिक धर्म चक्र के लगभग 14वें दिन, ल्यूटिनाइजिंग हार्मोन (LH) के प्रभाव में, अंडाशय से एक परिपक्व अंडाणु निकलता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रक्रिया को अंडोत्सर्ग कहा जाता है।"
    },
    {
        question: "प्रश्न 8. कौन सा हार्मोन अंडोत्सर्ग (Ovulation) को प्रेरित करता है?",
        answers: shuffle([
            { text: "FSH (फॉलिकल-स्टिमुलेटिंग हार्मोन)", correct: false },
            { text: "LH (ल्यूटिनाइजिंग हार्मोन)", correct: true },
            { text: "एस्ट्रोजन", correct: false },
            { text: "प्रोजेस्टेरोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मासिक धर्म चक्र के मध्य में LH हार्मोन के स्तर में अचानक वृद्धि (LH surge) ही अंडोत्सर्ग का मुख्य कारण है।"
    },
    {
        question: "प्रश्न 9. भ्रूण (Embryo) का आरोपण (Implantation) कहाँ होता है?",
        answers: shuffle([
            { text: "अंडाशय की दीवार पर", correct: false },
            { text: "अंडवाहिनी की दीवार पर", correct: false },
            { text: "गर्भाशय की आंतरिक दीवार (एंडोमेट्रियम) पर", correct: true },
            { text: "योनि की दीवार पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निषेचन के बाद, ब्लास्टोसिस्ट गर्भाशय की सबसे भीतरी परत, एंडोमेट्रियम, में जाकर धंस जाता है, जिसे आरोपण कहते हैं।"
    },
    {
        question: "प्रश्न 10. गर्भावस्था को बनाए रखने के लिए कौन सा हार्मोन आवश्यक है?",
        answers: shuffle([
            { text: "एस्ट्रोजन", correct: false },
            { text: "प्रोजेस्टेरोन", correct: true },
            { text: "टेस्टोस्टेरोन", correct: false },
            { text: "रिलैक्सिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोजेस्टेरोन, जिसे 'प्रेग्नेंसी हार्मोन' भी कहा जाता है, गर्भाशय के एंडोमेट्रियम को बनाए रखता है और गर्भावस्था के दौरान गर्भाशय के संकुचन को रोकता है।"
    },
    {
        question: "प्रश्न 11. भ्रूण और माँ के रक्त के बीच पदार्थों का आदान-प्रदान किस संरचना के माध्यम से होता है?",
        answers: shuffle([
            { text: "गर्भनाल (Umbilical cord)", correct: false },
            { text: "अपरा (Placenta)", correct: true },
            { text: "एम्नियोटिक द्रव", correct: false },
            { text: "गर्भाशय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपरा (प्लेसेंटा) एक अस्थायी अंग है जो भ्रूण को मां के गर्भाशय से जोड़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पोषक तत्वों, ऑक्सीजन और अपशिष्ट पदार्थों के आदान-प्रदान की अनुमति देता है।"
    },
    {
        question: "प्रश्न 12. गर्भावस्था की पुष्टि के लिए मूत्र परीक्षण में किस हार्मोन का पता लगाया जाता है?",
        answers: shuffle([
            { text: "LH", correct: false },
            { text: "प्रोजेस्टेरोन", correct: false },
            { text: "hCG (ह्यूमन कोरियोनिक गोनाडोट्रोपिन)", correct: true },
            { text: "ऑक्सीटोसिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आरोपण के बाद, अपरा hCG हार्मोन का उत्पादन शुरू कर देता है, जो मूत्र में उत्सर्जित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> गर्भावस्था परीक्षण किट इसी हार्मोन की उपस्थिति का पता लगाती हैं।"
    },
    {
        question: "प्रश्न 13. प्रसव (Parturition) के दौरान गर्भाशय में संकुचन को कौन सा हार्मोन प्रेरित करता है?",
        answers: shuffle([
            { text: "प्रोलैक्टिन", correct: false },
            { text: "प्रोजेस्टेरोन", correct: false },
            { text: "एस्ट्रोजन", correct: false },
            { text: "ऑक्सीटोसिन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑक्सीटोसिन पश्च पीयूष ग्रंथि से स्रावित होता है और यह प्रसव पीड़ा के दौरान गर्भाशय की चिकनी मांसपेशियों में शक्तिशाली संकुचन पैदा करता है।"
    },
    {
        question: "प्रश्न 14. पुरुषों में वृषण (Testes) उदर गुहा के बाहर वृषणकोष (Scrotum) में क्यों स्थित होते हैं?",
        answers: shuffle([
            { text: "शरीर को संतुलन प्रदान करने के लिए", correct: false },
            { text: "शुक्राणु निर्माण के लिए आवश्यक कम तापमान बनाए रखने के लिए", correct: true },
            { text: "हार्मोन के बेहतर स्राव के लिए", correct: false },
            { text: "चोट से बचाने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्राणुजनन की प्रक्रिया के लिए शरीर के आंतरिक तापमान (37°C) से लगभग 2-2.5°C कम तापमान की आवश्यकता होती है, जो वृषणकोष द्वारा प्रदान किया जाता है।"
    },
    {
        question: "प्रश्न 15. सर्टोली कोशिकाएं (Sertoli cells) कहाँ पाई जाती हैं और उनका क्या कार्य है?",
        answers: shuffle([
            { text: "अंडाशय में; अंडाणु को पोषण देना", correct: false },
            { text: "वृषण में; विकासशील शुक्राणुओं को पोषण देना", correct: true },
            { text: "गर्भाशय में; भ्रूण को सहारा देना", correct: false },
            { text: "पीयूष ग्रंथि में; हार्मोन स्रावित करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सर्टोली कोशिकाएं शुक्रजनक नलिकाओं के भीतर पाई जाती हैं और वे शुक्राणुजनन की प्रक्रिया के दौरान विकासशील शुक्राणु कोशिकाओं को पोषण और सहायता प्रदान करती हैं।"
    },
    {
        question: "प्रश्न 16. वीर्य (Semen) का तरल हिस्सा मुख्य रूप से किसके द्वारा स्रावित होता है?",
        answers: shuffle([
            { text: "केवल वृषण द्वारा", correct: false },
            { text: "केवल प्रोस्टेट ग्रंथि द्वारा", correct: false },
            { text: "शुक्राशय और प्रोस्टेट ग्रंथि द्वारा", correct: true },
            { text: "केवल अधिवृषण द्वारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वीर्य का अधिकांश तरल भाग (सेमिनल प्लाज्मा) शुक्राशय (Seminal vesicles) और प्रोस्टेट ग्रंथि द्वारा स्रावित किया जाता है, जो शुक्राणुओं को पोषण और गतिशीलता प्रदान करता है।"
    },
    {
        question: "प्रश्न 17. मानव अंडाणु (Ovum) में गुणसूत्रों की संख्या कितनी होती है?",
        answers: shuffle([
            { text: "46", correct: false },
            { text: "23", correct: true },
            { text: "44", correct: false },
            { text: "22", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> युग्मक (अंडाणु और शुक्राणु) अगुणित (haploid) होते हैं, अर्थात उनमें गुणसूत्रों का केवल एक सेट होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> मानव अंडाणु में 22 ऑटोसोम और एक X गुणसूत्र होता है।"
    },
    {
        question: "प्रश्न 18. एक सामान्य मासिक धर्म चक्र की अवधि लगभग कितने दिन की होती है?",
        answers: shuffle([
            { text: "21 दिन", correct: false },
            { text: "28 दिन", correct: true },
            { text: "35 दिन", correct: false },
            { text: "40 दिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> औसतन, एक सामान्य मासिक धर्म चक्र लगभग 28 दिनों का होता है, हालांकि यह 21 से 35 दिनों तक भिन्न हो सकता है।"
    },
    {
        question: "प्रश्न 19. रजोनिवृत्ति (Menopause) क्या है?",
        answers: shuffle([
            { text: "पहली बार मासिक धर्म का शुरू होना", correct: false },
            { text: "गर्भावस्था का समय", correct: false },
            { text: "महिलाओं में मासिक धर्म चक्र का स्थायी रूप से बंद हो जाना", correct: true },
            { text: "प्रसव की प्रक्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रजोनिवृत्ति आमतौर पर 45-55 वर्ष की आयु में होती है, जब अंडाशय हार्मोन का उत्पादन बंद कर देते हैं और मासिक धर्म स्थायी रूप से रुक जाता है।"
    },
    {
        question: "प्रश्न 20. दुग्ध स्रवण (Lactation) के लिए कौन सा हार्मोन जिम्मेदार है?",
        answers: shuffle([
            { text: "ऑक्सीटोसिन", correct: false },
            { text: "प्रोलैक्टिन", correct: true },
            { text: "प्रोजेस्टेरोन", correct: false },
            { text: "एस्ट्रोजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोलैक्टिन हार्मोन स्तन ग्रंथियों में दूध के उत्पादन को उत्तेजित करता है, जबकि ऑक्सीटोसिन दूध के निष्कासन (milk ejection) को प्रेरित करता है।"
    },
    {
        question: "प्रश्न 21. मानव में लिंग का निर्धारण कैसे होता है?",
        answers: shuffle([
            { text: "अंडाणु के प्रकार से", correct: false },
            { text: "शुक्राणु के प्रकार से", correct: true },
            { text: "निषेचन के समय तापमान से", correct: false },
            { text: "मां के आहार से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मादा के पास केवल X गुणसूत्र वाले अंडाणु होते हैं, जबकि नर के पास X और Y गुणसूत्र वाले दो प्रकार के शुक्राणु होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि X शुक्राणु अंडाणु को निषेचित करता है, तो लड़की (XX) होती है, और यदि Y शुक्राणु करता है, तो लड़का (XY) होता है।"
    },
    {
        question: "प्रश्न 22. कॉर्पस ल्यूटियम (Corpus luteum) क्या स्रावित करता है?",
        answers: shuffle([
            { text: "केवल एस्ट्रोजन", correct: false },
            { text: "केवल LH", correct: false },
            { text: "बड़ी मात्रा में प्रोजेस्टेरोन", correct: true },
            { text: "केवल FSH", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंडोत्सर्ग के बाद, फटा हुआ ग्राफियन फॉलिकल कॉर्पस ल्यूटियम में बदल जाता है, जो गर्भावस्था की तैयारी के लिए गर्भाशय के एंडोमेट्रियम को बनाए रखने के लिए मुख्य रूप से प्रोजेस्टेरोन का स्राव करता है।"
    },
    {
        question: "प्रश्न 23. एक्रोसोम (Acrosome) शुक्राणु के किस भाग में पाया जाता है?",
        answers: shuffle([
            { text: "पूंछ में", correct: false },
            { text: "मध्य भाग में", correct: false },
            { text: "सिर में", correct: true },
            { text: "गर्दन में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक्रोसोम शुक्राणु के सिर पर एक टोपी जैसी संरचना है जिसमें एंजाइम होते हैं जो अंडाणु की बाहरी परतों को भेदने में मदद करते हैं।"
    },
    {
        question: "प्रश्न 24. निम्नलिखित में से कौन सा एक यौन संचारित रोग (STD) है?",
        answers: shuffle([
            { text: "मलेरिया", correct: false },
            { text: "टाइफाइड", correct: false },
            { text: "सिफलिस (Syphilis)", correct: true },
            { text: "कैंसर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिफलिस एक जीवाणु (ट्रिपोनिमा पैलिडम) के कारण होने वाला यौन संचारित रोग है।<br><br><i class='fa-solid fa-angles-right icon'></i> एड्स, गोनोरिया और हर्पीस अन्य एसटीडी के उदाहरण हैं।"
    },
    {
        question: "प्रश्न 25. पुरुषों की नसबंदी (Vasectomy) में क्या काटा जाता है?",
        answers: shuffle([
            { text: "शुक्रजनक नलिकाएं", correct: false },
            { text: "शुक्रवाहिका (Vas deferens)", correct: true },
            { text: "मूत्रमार्ग", correct: false },
            { text: "अधिवृषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरुष नसबंदी में, शुक्रवाहिकाओं को काटकर बांध दिया जाता है ताकि शुक्राणु वीर्य में न मिल सकें, यह गर्भनिरोधन की एक स्थायी विधि है।"
    },
    {
        question: "प्रश्न 26. महिलाओं की नसबंदी (Tubectomy) में क्या काटा या बांधा जाता है?",
        answers: shuffle([
            { text: "गर्भाशय", correct: false },
            { text: "योनि", correct: false },
            { text: "अंडवाहिनी (Fallopian tube)", correct: true },
            { text: "अंडाशय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महिला नसबंदी में, अंडवाहिनियों को अवरुद्ध कर दिया जाता है ताकि अंडाणु शुक्राणु तक न पहुंच सके।"
    },
    {
        question: "प्रश्न 27. टेस्ट-ट्यूब बेबी (Test-tube baby) तकनीक में निषेचन कहाँ होता है?",
        answers: shuffle([
            { text: "मां के गर्भाशय में", correct: false },
            { text: "मां की अंडवाहिनी में", correct: false },
            { text: "प्रयोगशाला में शरीर के बाहर (इन-विट्रो)", correct: true },
            { text: "सरोगेट मां के गर्भाशय में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन-विट्रो फर्टिलाइजेशन (IVF) या टेस्ट-ट्यूब बेबी तकनीक में, अंडाणु और शुक्राणु को शरीर के बाहर एक प्रयोगशाला डिश में निषेचित कराया जाता है और फिर बने भ्रूण को मां के गर्भाशय में स्थानांतरित कर दिया जाता है।"
    },
    {
        question: "प्रश्न 28. बार्थोलिन ग्रंथियां (Bartholin's glands) कहाँ पाई जाती हैं?",
        answers: shuffle([
            { text: "पुरुषों में मूत्रमार्ग के पास", correct: false },
            { text: "महिलाओं में योनि के द्वार पर", correct: true },
            { text: "गर्भाशय के अंदर", correct: false },
            { text: "स्तन ग्रंथियों में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बार्थोलिन ग्रंथियां योनि के दोनों ओर स्थित होती हैं और यौन उत्तेजना के दौरान स्नेहन (lubrication) के लिए तरल पदार्थ का स्राव करती हैं।"
    },
    {
        question: "प्रश्न 29. शुक्राणु के मध्य भाग में बड़ी संख्या में क्या पाए जाते हैं?",
        answers: shuffle([
            { text: "राइबोसोम", correct: false },
            { text: "लाइसोसोम", correct: false },
            { text: "माइटोकॉन्ड्रिया", correct: true },
            { text: "केंद्रक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्राणु के मध्य भाग में सर्पिल रूप से व्यवस्थित माइटोकॉन्ड्रिया होते हैं जो पूंछ की गति के लिए आवश्यक ऊर्जा (ATP) प्रदान करते हैं।"
    },
    {
        question: "प्रश्न 30. लेडिग कोशिकाएं (Leydig cells) क्या स्रावित करती हैं?",
        answers: shuffle([
            { text: "शुक्राणु", correct: false },
            { text: "एस्ट्रोजन", correct: false },
            { text: "टेस्टोस्टेरोन", correct: true },
            { text: "पोषण द्रव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लेडिग कोशिकाएं (या अंतराली कोशिकाएं) वृषण में शुक्रजनक नलिकाओं के बीच पाई जाती हैं और टेस्टोस्टेरोन हार्मोन का उत्पादन करती हैं।"
    },
    {
        question: "प्रश्न 31. जुड़वां बच्चे (Twins) कितने प्रकार के होते हैं?",
        answers: shuffle([
            { text: "केवल एक", correct: false },
            { text: "दो (समरूपी और भातृ)", correct: true },
            { text: "तीन", correct: false },
            { text: "चार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समरूपी (Identical) जुड़वां एक ही निषेचित अंडे के विभाजन से बनते हैं, जबकि भातृ (Fraternal) जुड़वां दो अलग-अलग अंडों के दो अलग-अलग शुक्राणुओं द्वारा निषेचित होने से बनते हैं।"
    },
    {
        question: "प्रश्न 32. मासिक धर्म के दौरान रक्तस्राव का क्या कारण है?",
        answers: shuffle([
            { text: "अंडाशय का फटना", correct: false },
            { text: "गर्भाशय की एंडोमेट्रियम परत का टूटना", correct: true },
            { text: "अंडवाहिनी का टूटना", correct: false },
            { text: "योनि में चोट लगना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि निषेचन नहीं होता है, तो प्रोजेस्टेरोन का स्तर गिर जाता है, जिससे गर्भाशय की मोटी और रक्त वाहिकाओं से भरपूर एंडोमेट्रियम परत टूटकर योनि मार्ग से बाहर निकल जाती है।"
    },
    {
        question: "प्रश्न 33. प्रोस्टेट ग्रंथि का क्या कार्य है?",
        answers: shuffle([
            { text: "शुक्राणु का निर्माण करना", correct: false },
            { text: "टेस्टोस्टेरोन बनाना", correct: false },
            { text: "एक क्षारीय द्रव स्रावित करना जो वीर्य का हिस्सा बनता है", correct: true },
            { text: "शुक्राणु का भंडारण करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोस्टेट ग्रंथि एक दूधिया, थोड़ा अम्लीय (लेकिन समग्र वीर्य को क्षारीय बनाने में मदद करता है) द्रव स्रावित करती है जो शुक्राणुओं को सक्रिय करता है और योनि के अम्लीय वातावरण को उदासीन करता है।"
    },
    {
        question: "प्रश्न 34. पुरुषों में बल्बोयूरेथ्रल (काउपर) ग्रंथि का क्या कार्य है?",
        answers: shuffle([
            { text: "वीर्य का मुख्य आयतन बनाना", correct: false },
            { text: "शुक्राणु को पोषण देना", correct: false },
            { text: "यौन उत्तेजना के दौरान स्नेहन द्रव स्रावित करना", correct: true },
            { text: "हार्मोन का उत्पादन करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काउपर ग्रंथियां मूत्रमार्ग में बची हुई किसी भी अम्लता को उदासीन करने और स्खलन से पहले मूत्रमार्ग को चिकनाई देने के लिए एक स्पष्ट द्रव का स्राव करती हैं।"
    },
    {
        question: "प्रश्न 35. युग्मनज (Zygote) क्या है?",
        answers: shuffle([
            { text: "एक अपरिपक्व अंडाणु", correct: false },
            { text: "एक अपरिपक्व शुक्राणु", correct: false },
            { text: "शुक्राणु और अंडाणु के संलयन से बनी पहली कोशिका", correct: true },
            { text: "एक प्रकार का हार्मोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> युग्मनज एक द्विगुणित (diploid) कोशिका है जो निषेचन के परिणामस्वरूप बनती है और जिसमें एक नए जीव को विकसित करने के लिए पूरी आनुवंशिक जानकारी होती है।"
    },
    {
        question: "प्रश्न 36. मानव प्रजनन प्रणाली के संदर्भ में 'एम्प्यूला' क्या है?",
        answers: shuffle([
            { text: "गर्भाशय का निचला हिस्सा", correct: false },
            { text: "अंडवाहिनी का सबसे चौड़ा हिस्सा जहाँ निषेचन होता है", correct: true },
            { text: "वृषण का एक भाग", correct: false },
            { text: "शिश्न का अग्र भाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एम्प्यूला फैलोपियन ट्यूब का वह लंबा और चौड़ा खंड है जो निषेचन के लिए सबसे आम स्थान है।"
    },
    {
        question: "प्रश्न 37. एक्रोसोमल प्रतिक्रिया (Acrosomal reaction) का क्या उद्देश्य है?",
        answers: shuffle([
            { text: "शुक्राणु को गति प्रदान करना", correct: false },
            { text: "अंडाणु को सक्रिय करना", correct: false },
            { text: "शुक्राणु को अंडाणु की झिल्ली में प्रवेश करने में मदद करना", correct: true },
            { text: "एक से अधिक शुक्राणुओं के प्रवेश को रोकना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब शुक्राणु अंडाणु के संपर्क में आता है, तो एक्रोसोम से एंजाइम निकलते हैं जो अंडाणु की बाहरी परत (जोना पेलुसिडा) को घोल देते हैं, जिससे शुक्राणु प्रवेश कर पाता है।"
    },
    {
        question: "प्रश्न 38. यौवनारंभ (Puberty) क्या है?",
        answers: shuffle([
            { text: "जन्म की प्रक्रिया", correct: false },
            { text: "वह अवधि जब यौन अंग क्रियाशील हो जाते हैं और द्वितीयक यौन लक्षण विकसित होते हैं", correct: true },
            { text: "रजोनिवृत्ति की शुरुआत", correct: false },
            { text: "निषेचन की प्रक्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यौवनारंभ बचपन और वयस्कता के बीच का संक्रमण काल है, जिसके दौरान गोनैडोट्रोपिन हार्मोन के स्राव में वृद्धि के कारण प्रजनन क्षमता प्राप्त होती है।"
    },
    {
        question: "प्रश्न 39. निम्नलिखित में से कौन सी संरचना केवल गर्भवती महिलाओं में पाई जाती है?",
        answers: shuffle([
            { text: "अंडाशय", correct: false },
            { text: "गर्भाशय", correct: false },
            { text: "अपरा (Placenta)", correct: true },
            { text: "योनि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपरा एक अस्थायी अंग है जो केवल गर्भावस्था के दौरान विकसित होता है ताकि विकासशील भ्रूण को सहारा दिया जा सके।"
    },
    {
        question: "प्रश्न 40. क्रिप्टोरकिडिज्म (Cryptorchidism) क्या है?",
        answers: shuffle([
            { text: "शुक्राणुओं की कमी", correct: false },
            { text: "एक ऐसी स्थिति जिसमें वृषण वृषणकोष में नहीं उतर पाते", correct: true },
            { text: "प्रोस्टेट ग्रंथि का बढ़ना", correct: false },
            { text: "एक यौन संचारित रोग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक जन्मजात स्थिति है जिसमें एक या दोनों वृषण जन्म से पहले उदर से वृषणकोष में नहीं आ पाते हैं।"
    },
    {
        question: "प्रश्न 41. मनुष्य की दैहिक कोशिकाओं (Somatic cells) में कितने गुणसूत्र होते हैं?",
        answers: shuffle([
            { text: "23", correct: false },
            { text: "46", correct: true },
            { text: "44", correct: false },
            { text: "22", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मनुष्य की दैहिक (गैर-प्रजनन) कोशिकाओं में 23 जोड़े गुणसूत्र होते हैं, यानी कुल 46 गुणसूत्र।"
    },
    {
        question: "प्रश्न 42. कौन सा हार्मोन गर्भाशय के एंडोमेट्रियम के विकास को उत्तेजित करता है?",
        answers: shuffle([
            { text: "एस्ट्रोजन", correct: true },
            { text: "प्रोजेस्टेरोन", correct: false },
            { text: "LH", correct: false },
            { text: "ऑक्सीटोसिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मासिक धर्म चक्र के फॉलिकुलर चरण के दौरान, अंडाशय द्वारा स्रावित एस्ट्रोजन गर्भाशय की एंडोमेट्रियम परत को मोटा और रक्त वाहिकाओं से भरपूर बनाता है।"
    },
    {
        question: "प्रश्न 43. डिंबक्षरण के बाद ग्राफियन फॉलिकल के अवशेष किसमें परिवर्तित हो जाते हैं?",
        answers: shuffle([
            { text: "कॉर्पस अल्बिकन्स", correct: false },
            { text: "कॉर्पस ल्यूटियम", correct: true },
            { text: "एक नया अंडाणु", correct: false },
            { text: "जोना पेलुसिडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंडोत्सर्ग के बाद बचा हुआ फॉलिकल एक अस्थायी अंतःस्रावी संरचना में बदल जाता है जिसे कॉर्पस ल्यूटियम कहते हैं, जो मुख्य रूप से प्रोजेस्टेरोन का स्राव करता है।"
    },
    {
        question: "प्रश्न 44. फर्टिलाइजिन (Fertilizin) नामक रसायन किससे स्रावित होता है?",
        answers: shuffle([
            { text: "शुक्राणु के एक्रोसोम से", correct: false },
            { text: "परिपक्व अंडाणु से", correct: true },
            { text: "सर्टोली कोशिकाओं से", correct: false },
            { text: "प्रोस्टेट ग्रंथि से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फर्टिलाइजिन एक ग्लाइकोप्रोटीन है जो अंडाणु की सतह से स्रावित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अपनी ही प्रजाति के शुक्राणुओं को पहचानने और आकर्षित करने में मदद करता है।"
    },
    {
        question: "प्रश्न 45. सिफलिस और गोनोरिया किसके कारण होते हैं?",
        answers: shuffle([
            { text: "विषाणु (Virus)", correct: false },
            { text: "जीवाणु (Bacteria)", correct: true },
            { text: "प्रोटोजोआ (Protozoa)", correct: false },
            { text: "कवक (Fungus)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिफलिस ट्रिपोनिमा पैलिडम नामक जीवाणु से और गोनोरिया निसेरिया गोनोरिया नामक जीवाणु से होता है।"
    },
    {
        question: "प्रश्न 46. नर और मादा युग्मकों का निर्माण किस प्रकार के कोशिका विभाजन द्वारा होता है?",
        answers: shuffle([
            { text: "समसूत्री विभाजन (Mitosis)", correct: false },
            { text: "अर्धसूत्री विभाजन (Meiosis)", correct: true },
            { text: "द्विखंडन (Binary Fission)", correct: false },
            { text: "मुकुलन (Budding)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अर्धसूत्री विभाजन में गुणसूत्रों की संख्या आधी हो जाती है, जिससे अगुणित (haploid) युग्मक बनते हैं।"
    },
    {
        question: "प्रश्न 47. स्तन ग्रंथियां (Mammary glands) किसका रूपांतरण हैं?",
        answers: shuffle([
            { text: "तैल ग्रंथियां (Sebaceous glands)", correct: false },
            { text: "स्वेद ग्रंथियां (Sweat glands)", correct: true },
            { text: "लार ग्रंथियां (Salivary glands)", correct: false },
            { text: "लसीका ग्रंथियां (Lymph glands)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्तन ग्रंथियां रूपांतरित स्वेद ग्रंथियां हैं जो दूध का उत्पादन और स्राव करने के लिए विशिष्ट होती हैं।"
    },
    {
        question: "प्रश्न 48. रिलैक्सिन (Relaxin) हार्मोन का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "दुग्ध उत्पादन को प्रेरित करना", correct: false },
            { text: "प्रसव के दौरान प्यूबिक सिम्फिसिस को शिथिल करना", correct: true },
            { text: "रक्त शर्करा को नियंत्रित करना", correct: false },
            { text: "शुक्राणु निर्माण को बढ़ावा देना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह हार्मोन प्रसव को आसान बनाने के लिए श्रोणि (pelvis) के लिगामेंट्स और प्यूबिक सिम्फिसिस को शिथिल करता है और गर्भाशय ग्रीवा को चौड़ा करता है।"
    },
    {
        question: "प्रश्न 49. एंडोमेट्रियोसिस (Endometriosis) क्या है?",
        answers: shuffle([
            { text: "गर्भाशय का कैंसर", correct: false },
            { text: "एक ऐसी स्थिति जिसमें एंडोमेट्रियम ऊतक गर्भाशय के बाहर बढ़ता है", correct: true },
            { text: "मासिक धर्म का रुक जाना", correct: false },
            { text: "एक यौन संचारित रोग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक दर्दनाक विकार है जिसमें गर्भाशय की परत (एंडोमेट्रियम) जैसा ऊतक अंडाशय या फैलोपियन ट्यूब जैसे अन्य स्थानों पर बढ़ने लगता है।"
    },
    {
        question: "प्रश्न 50. वीर्य में फ्रुक्टोज (Fructose) का मुख्य स्रोत क्या है?",
        answers: shuffle([
            { text: "प्रोस्टेट ग्रंथि", correct: false },
            { text: "वृषण", correct: false },
            { text: "शुक्राशय (Seminal vesicles)", correct: true },
            { text: "बल्बोयूरेथ्रल ग्रंथि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्राशय फ्रुक्टोज से भरपूर एक तरल पदार्थ स्रावित करते हैं, जो शुक्राणुओं के लिए ऊर्जा का मुख्य स्रोत है।"
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