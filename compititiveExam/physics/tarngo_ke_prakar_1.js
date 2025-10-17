const questions = [
    {
        topHeading: "तरंग और उसके प्रकार पर आधारित 50 MCQs,part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. किसी माध्यम में विक्षोभ (disturbance) के संचरण को क्या कहते हैं, जो ऊर्जा का स्थानांतरण करता है?",
        answers: shuffle([
            { text: "बल", correct: false },
            { text: "तरंग", correct: true },
            { text: "गति", correct: false },
            { text: "कार्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तरंग एक विक्षोभ है जो बिना माध्यम के कणों के वास्तविक स्थानांतरण के ऊर्जा को एक स्थान से दूसरे स्थान तक ले जाता है।"
    },
    {
        question: "प्रश्न 2. तरंगें अपने साथ क्या स्थानांतरित करती हैं?",
        answers: shuffle([
            { text: "माध्यम", correct: false },
            { text: "ऊर्जा", correct: true },
            { text: "कण", correct: false },
            { text: "द्रव्यमान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तरंगों का मुख्य कार्य ऊर्जा का संचरण करना है, जबकि माध्यम के कण अपनी माध्य स्थिति के इर्द-गिर्द ही कंपन करते हैं।"
    },
    {
        question: "प्रश्न 3. तरंगों को मुख्य रूप से किन दो प्रमुख प्रकारों में वर्गीकृत किया जाता है?",
        answers: shuffle([
            { text: "ध्वनि और प्रकाश", correct: false },
            { text: "यांत्रिक और विद्युतचुंबकीय", correct: true },
            { text: "छोटी और बड़ी", correct: false },
            { text: "तेज और धीमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संचरण के लिए माध्यम की आवश्यकता के आधार पर तरंगों को यांत्रिक और विद्युतचुंबकीय (अयांत्रिक) तरंगों में वर्गीकृत किया जाता है।"
    },
    {
        question: "प्रश्न 4. वे तरंगें जिन्हें संचरण के लिए किसी भौतिक माध्यम की आवश्यकता होती है, क्या कहलाती हैं?",
        answers: shuffle([
            { text: "विद्युतचुंबकीय तरंगें", correct: false },
            { text: "यांत्रिक तरंगें", correct: true },
            { text: "द्रव्य तरंगें", correct: false },
            { text: "गुरुत्वाकर्षण तरंगें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यांत्रिक तरंगों को यात्रा करने के लिए ठोस, द्रव या गैस जैसे माध्यम की आवश्यकता होती है।"
    },
    {
        question: "प्रश्न 5. निम्नलिखित में से कौन एक यांत्रिक तरंग का उदाहरण है?",
        answers: shuffle([
            { text: "रेडियो तरंगें", correct: false },
            { text: "प्रकाश तरंगें", correct: false },
            { text: "ध्वनि तरंगें", correct: true },
            { text: "एक्स-किरणें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्वनि को यात्रा करने के लिए हवा, पानी या ठोस जैसे माध्यम की आवश्यकता होती है, इसलिए यह एक यांत्रिक तरंग है।"
    },
    {
        question: "प्रश्न 6. वे तरंगें जिन्हें संचरण के लिए किसी माध्यम की आवश्यकता नहीं होती, क्या कहलाती हैं?",
        answers: shuffle([
            { text: "यांत्रिक तरंगें", correct: false },
            { text: "भूकंपीय तरंगें", correct: false },
            { text: "विद्युतचुंबकीय तरंगें", correct: true },
            { text: "जल तरंगें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युतचुंबकीय तरंगें निर्वात में भी यात्रा कर सकती हैं क्योंकि वे बदलते विद्युत और चुंबकीय क्षेत्रों से बनी होती हैं।"
    },
    {
        question: "प्रश्न 7. निम्नलिखित में से कौन एक विद्युतचुंबकीय तरंग का उदाहरण है?",
        answers: shuffle([
            { text: "रस्सी में उत्पन्न तरंग", correct: false },
            { text: "जल की सतह पर तरंग", correct: false },
            { text: "स्प्रिंग में तरंग", correct: false },
            { text: "पराबैंगनी किरणें", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पराबैंगनी किरणें विद्युतचुंबकीय स्पेक्ट्रम का हिस्सा हैं और इन्हें यात्रा करने के लिए किसी माध्यम की आवश्यकता नहीं होती है।"
    },
    {
        question: "प्रश्न 8. क्या ध्वनि तरंगें निर्वात में यात्रा कर सकती हैं?",
        answers: shuffle([
            { text: "हाँ", correct: false },
            { text: "नहीं", correct: true },
            { text: "केवल यदि आवृत्ति अधिक हो", correct: false },
            { text: "केवल यदि तापमान कम हो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्वनि एक यांत्रिक तरंग है और निर्वात में कोई कण नहीं होते हैं जिनके माध्यम से यह कंपन संचारित कर सके।"
    },
    {
        question: "प्रश्न 9. सूर्य से पृथ्वी तक प्रकाश किस प्रकार की तरंगों के रूप में पहुँचता है?",
        answers: shuffle([
            { text: "यांत्रिक तरंगें", correct: false },
            { text: "ध्वनि तरंगें", correct: false },
            { text: "विद्युतचुंबकीय तरंगें", correct: true },
            { text: "जल तरंगें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंतरिक्ष के निर्वात को पार करने के लिए प्रकाश को विद्युतचुंबकीय तरंगों के रूप में यात्रा करना पड़ता है।"
    },
    {
        question: "प्रश्न 10. भूकंप के दौरान उत्पन्न होने वाली तरंगें (भूकंपीय तरंगें) किस प्रकार की होती हैं?",
        answers: shuffle([
            { text: "केवल विद्युतचुंबकीय", correct: false },
            { text: "केवल यांत्रिक", correct: true },
            { text: "यांत्रिक और विद्युतचुंबकीय दोनों", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भूकंपीय तरंगें पृथ्वी की परतों (एक माध्यम) के माध्यम से यात्रा करती हैं, इसलिए वे यांत्रिक तरंगें हैं।"
    },
    {
        question: "प्रश्न 11. सभी विद्युतचुंबकीय तरंगें निर्वात में किस चाल से चलती हैं?",
        answers: shuffle([
            { text: "ध्वनि की चाल से", correct: false },
            { text: "प्रकाश की चाल से", correct: true },
            { text: "अलग-अलग चाल से", correct: false },
            { text: "शून्य चाल से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निर्वात में, सभी प्रकार की विद्युतचुंबकीय तरंगें (गामा किरणों से लेकर रेडियो तरंगों तक) एक ही स्थिर चाल, यानी प्रकाश की चाल से यात्रा करती हैं।"
    },
    {
        question: "प्रश्न 12. यांत्रिक तरंगों की चाल किस पर निर्भर करती है?",
        answers: shuffle([
            { text: "केवल तरंग की आवृत्ति पर", correct: false },
            { text: "केवल तरंग के आयाम पर", correct: false },
            { text: "माध्यम के गुणों पर", correct: true },
            { text: "तरंग के स्रोत पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यांत्रिक तरंग की चाल माध्यम की प्रत्यास्थता और घनत्व जैसे गुणों पर निर्भर करती है।"
    },
    {
        question: "प्रश्न 13. टेलीविजन और रेडियो प्रसारण में किन तरंगों का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "ध्वनि तरंगें", correct: false },
            { text: "रेडियो तरंगें", correct: true },
            { text: "पराश्रव्य तरंगें", correct: false },
            { text: "जल तरंगें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेडियो तरंगें एक प्रकार की विद्युतचुंबकीय तरंगें हैं जिनका उपयोग लंबी दूरी तक सूचना प्रसारित करने के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 14. कणों के कंपन की दिशा के आधार पर यांत्रिक तरंगों को किन दो प्रकारों में बांटा गया है?",
        answers: shuffle([
            { text: "श्रव्य और पराश्रव्य", correct: false },
            { text: "रेडियो और सूक्ष्म", correct: false },
            { text: "अनुप्रस्थ और अनुदैर्ध्य", correct: true },
            { text: "प्रगामी और अप्रगामी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह वर्गीकरण इस बात पर आधारित है कि माध्यम के कण तरंग की गति की दिशा के सापेक्ष कैसे कंपन करते हैं।"
    },
    {
        question: "प्रश्न 15. जिस तरंग में माध्यम के कण तरंग संचरण की दिशा के लंबवत कंपन करते हैं, उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "अनुदैर्ध्य तरंग", correct: false },
            { text: "अनुप्रस्थ तरंग", correct: true },
            { text: "ध्वनि तरंग", correct: false },
            { text: "दाब तरंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुप्रस्थ तरंगों में, कणों की गति ऊपर-नीचे होती है जबकि तरंग आगे बढ़ती है, जैसे कि रस्सी में उत्पन्न तरंग।"
    },
    {
        question: "प्रश्न 16. निम्नलिखित में से कौन एक अनुप्रस्थ तरंग का उदाहरण है?",
        answers: shuffle([
            { text: "हवा में ध्वनि तरंग", correct: false },
            { text: "प्रकाश तरंग", correct: true },
            { text: "एक स्प्रिंग में संपीडन तरंग", correct: false },
            { text: "भूकंप की P-तरंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश सहित सभी विद्युतचुंबकीय तरंगें अनुप्रस्थ प्रकृति की होती हैं।"
    },
    {
        question: "प्रश्न 17. अनुप्रस्थ तरंगों में बनने वाले उच्चतम बिंदु को क्या कहते हैं?",
        answers: shuffle([
            { text: "गर्त", correct: false },
            { text: "शृंग", correct: true },
            { text: "संपीडन", correct: false },
            { text: "विरलन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक अनुप्रस्थ तरंग में माध्य स्थिति से ऊपर की ओर अधिकतम विस्थापन के बिंदु को शृंग (Crest) कहा जाता है।"
    },
    {
        question: "प्रश्न 18. अनुप्रस्थ तरंगों में बनने वाले निम्नतम बिंदु को क्या कहते हैं?",
        answers: shuffle([
            { text: "शृंग", correct: false },
            { text: "संपीडन", correct: false },
            { text: "गर्त", correct: true },
            { text: "विरलन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक अनुप्रस्थ तरंग में माध्य स्थिति से नीचे की ओर अधिकतम विस्थापन के बिंदु को गर्त (Trough) कहा जाता है।"
    },
    {
        question: "प्रश्न 19. जिस तरंग में माध्यम के कण तरंग संचरण की दिशा के समानांतर कंपन करते हैं, उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "अनुप्रस्थ तरंग", correct: false },
            { text: "प्रकाश तरंग", correct: false },
            { text: "विद्युतचुंबकीय तरंग", correct: false },
            { text: "अनुदैर्ध्य तरंग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुदैर्ध्य तरंगों में, कण तरंग की गति की दिशा में ही आगे-पीछे कंपन करते हैं, जैसे कि ध्वनि तरंग।"
    },
    {
        question: "प्रश्न 20. निम्नलिखित में से कौन एक अनुदैर्ध्य तरंग का उदाहरण है?",
        answers: shuffle([
            { text: "जल की सतह पर तरंग", correct: false },
            { text: "रस्सी में तरंग", correct: false },
            { text: "हवा में ध्वनि तरंग", correct: true },
            { text: "रेडियो तरंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्वनि तरंगें हवा में संपीडन और विरलन के रूप में यात्रा करती हैं, जो एक अनुदैर्ध्य गति है।"
    },
    {
        question: "प्रश्न 21. अनुदैर्ध्य तरंगों में उस क्षेत्र को क्या कहते हैं जहाँ माध्यम के कण पास-पास आ जाते हैं?",
        answers: shuffle([
            { text: "विरलन", correct: false },
            { text: "संपीडन", correct: true },
            { text: "शृंग", correct: false },
            { text: "गर्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संपीडन (Compression) उच्च घनत्व और उच्च दाब का क्षेत्र होता है जहाँ कण एक साथ संकुचित होते हैं।"
    },
    {
        question: "प्रश्न 22. अनुदैर्ध्य तरंगों में उस क्षेत्र को क्या कहते हैं जहाँ माध्यम के कण दूर-दूर हो जाते हैं?",
        answers: shuffle([
            { text: "संपीडन", correct: false },
            { text: "शृंग", correct: false },
            { text: "गर्त", correct: false },
            { text: "विरलन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विरलन (Rarefaction) निम्न घनत्व और निम्न दाब का क्षेत्र होता है जहाँ कण फैल जाते हैं।"
    },
    {
        question: "प्रश्न 23. क्या अनुप्रस्थ तरंगें गैसों में उत्पन्न की जा सकती हैं?",
        answers: shuffle([
            { text: "हाँ", correct: false },
            { text: "नहीं", correct: true },
            { text: "केवल उच्च दाब पर", correct: false },
            { text: "केवल निम्न तापमान पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुप्रस्थ तरंगों के लिए माध्यम में दृढ़ता (rigidity) की आवश्यकता होती है, जो गैसों और तरल पदार्थों के अंदर नहीं होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, ये केवल ठोस पदार्थों में और तरल की सतह पर बन सकती हैं।"
    },
    {
        question: "प्रश्न 24. क्या अनुदैर्ध्य तरंगें ठोस, द्रव और गैस तीनों में उत्पन्न हो सकती हैं?",
        answers: shuffle([
            { text: "केवल ठोस में", correct: false },
            { text: "केवल द्रव और गैस में", correct: false },
            { text: "हाँ, तीनों में", correct: true },
            { text: "नहीं, किसी में नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुदैर्ध्य तरंगों को केवल माध्यम के संपीडित होने की क्षमता की आवश्यकता होती है, जो ठोस, द्रव और गैस तीनों में होती है।"
    },
    {
        question: "प्रश्न 25. जल की सतह पर उत्पन्न होने वाली तरंगें होती हैं:",
        answers: shuffle([
            { text: "केवल अनुप्रस्थ", correct: false },
            { text: "केवल अनुदैर्ध्य", correct: false },
            { text: "अनुप्रस्थ और अनुदैर्ध्य दोनों का संयोजन", correct: true },
            { text: "न तो अनुप्रस्थ और न ही अनुदैर्ध्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जल की सतह पर कण वृत्ताकार या दीर्घवृत्ताकार पथों में गति करते हैं, जिसमें ऊपर-नीचे (अनुप्रस्थ) और आगे-पीछे (अनुदैर्ध्य) दोनों प्रकार की गति शामिल होती है।"
    },
    {
        question: "प्रश्न 26. ध्रुवीकरण (Polarization) का गुण किस प्रकार की तरंगों द्वारा प्रदर्शित किया जा सकता है?",
        answers: shuffle([
            { text: "केवल अनुदैर्ध्य तरंगों द्वारा", correct: false },
            { text: "केवल अनुप्रस्थ तरंगों द्वारा", correct: true },
            { text: "अनुप्रस्थ और अनुदैर्ध्य दोनों द्वारा", correct: false },
            { text: "किसी भी यांत्रिक तरंग द्वारा नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्रुवीकरण में कंपनों को एक ही तल में सीमित करना शामिल है, जो केवल तभी संभव है जब कंपन तरंग की गति की दिशा के लंबवत हों, जैसा कि अनुप्रस्थ तरंगों में होता है।"
    },
    {
        question: "प्रश्न 27. प्रकाश का ध्रुवीकरण क्या सिद्ध करता है?",
        answers: shuffle([
            { text: "प्रकाश की कण प्रकृति", correct: false },
            { text: "प्रकाश की अनुदैर्ध्य प्रकृति", correct: false },
            { text: "प्रकाश की अनुप्रस्थ प्रकृति", correct: true },
            { text: "प्रकाश निर्वात में यात्रा कर सकता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि प्रकाश को ध्रुवीकृत किया जा सकता है, यह सिद्ध होता है कि प्रकाश तरंगें अनुप्रस्थ होती हैं।"
    },
    {
        question: "प्रश्न 28. सितार के तार में उत्पन्न तरंगें होती हैं:",
        answers: shuffle([
            { text: "अनुदैर्ध्य", correct: false },
            { text: "अनुप्रस्थ", correct: true },
            { text: "विद्युतचुंबकीय", correct: false },
            { text: "अनुदैर्ध्य और अनुप्रस्थ दोनों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब तार को खींचा जाता है, तो उसके कण तार की लंबाई के लंबवत कंपन करते हैं, जिससे एक अनुप्रस्थ तरंग उत्पन्न होती है।"
    },
    {
        question: "प्रश्न 29. भूकंप की S-तरंगें (द्वितीयक तरंगें) किस प्रकृति की होती हैं?",
        answers: shuffle([
            { text: "अनुदैर्ध्य", correct: false },
            { text: "अनुप्रस्थ", correct: true },
            { text: "विद्युतचुंबकीय", correct: false },
            { text: "सतही तरंगें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> S-तरंगें (Shear waves) अनुप्रस्थ होती हैं और ये केवल ठोस माध्यम से ही गुजर सकती हैं।"
    },
    {
        question: "प्रश्न 30. भूकंप की P-तरंगें (प्राथमिक तरंगें) किस प्रकृति की होती हैं?",
        answers: shuffle([
            { text: "अनुदैर्ध्य", correct: false },
            { text: "अनुप्रस्थ", correct: false },
            { text: "विद्युतचुंबकीय", correct: false },
            { text: "अनुदैर्ध्य", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> P-तरंगें (Pressure waves) ध्वनि तरंगों की तरह अनुदैर्ध्य होती हैं और ये ठोस, द्रव और गैस तीनों माध्यमों से गुजर सकती हैं।"
    },
    {
        question: "प्रश्न 31. मानव कान द्वारा सुनी जा सकने वाली ध्वनि तरंगों को क्या कहते हैं?",
        answers: shuffle([
            { text: "अवश्रव्य तरंगें", correct: false },
            { text: "श्रव्य तरंगें", correct: true },
            { text: "पराश्रव्य तरंगें", correct: false },
            { text: "अध्वनिक तरंगें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्रव्य (Audible) तरंगों की आवृत्ति परास लगभग 20 हर्ट्ज से 20,000 हर्ट्ज तक होती है।"
    },
    {
        question: "प्रश्न 32. 20 हर्ट्ज से कम आवृत्ति वाली ध्वनि तरंगें क्या कहलाती हैं?",
        answers: shuffle([
            { text: "पराश्रव्य", correct: false },
            { text: "अवश्रव्य", correct: true },
            { text: "श्रव्य", correct: false },
            { text: "रेडियो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवश्रव्य (Infrasonic) तरंगों की आवृत्ति इतनी कम होती है कि मानव कान उन्हें सुन नहीं सकते।"
    },
    {
        question: "प्रश्न 33. 20,000 हर्ट्ज (20 किलोहर्ट्ज) से अधिक आवृत्ति वाली ध्वनि तरंगें क्या कहलाती हैं?",
        answers: shuffle([
            { text: "अवश्रव्य", correct: false },
            { text: "श्रव्य", correct: false },
            { text: "रेडियो", correct: false },
            { text: "पराश्रव्य", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पराश्रव्य (Ultrasonic) तरंगों की आवृत्ति इतनी अधिक होती है कि मानव कान उन्हें नहीं सुन सकते।"
    },
    {
        question: "प्रश्न 34. हाथी और व्हेल जैसे बड़े जानवर संवाद के लिए किन तरंगों का उपयोग करते हैं?",
        answers: shuffle([
            { text: "पराश्रव्य", correct: false },
            { text: "अवश्रव्य", correct: true },
            { text: "प्रकाश", correct: false },
            { text: "एक्स-किरणें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये जानवर लंबी दूरी तक संचार के लिए निम्न-आवृत्ति वाली अवश्रव्य ध्वनि उत्पन्न करते हैं।"
    },
    {
        question: "प्रश्न 35. तरंगों के अध्ययन को क्या कहा जाता है?",
        answers: shuffle([
            { text: "प्रकाशिकी", correct: false },
            { text: "ध्वनिकी", correct: false },
            { text: "तरंग विज्ञान (Wave mechanics/Cymatics)", correct: true },
            { text: "ऊष्मागतिकी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह भौतिकी की वह शाखा है जो तरंगों के व्यवहार और उनके गुणों का अध्ययन करती है।"
    },
    {
        question: "प्रश्न 36. चिकित्सा में, आंतरिक अंगों की छवि बनाने (अल्ट्रासोनोग्राफी) के लिए किन तरंगों का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "एक्स-किरणें", correct: false },
            { text: "अवश्रव्य तरंगें", correct: false },
            { text: "पराश्रव्य तरंगें", correct: true },
            { text: "गामा किरणें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अल्ट्रासाउंड मशीनें शरीर के अंदर की तस्वीरें बनाने के लिए उच्च-आवृत्ति वाली पराश्रव्य ध्वनि तरंगों का उपयोग करती हैं।"
    },
    {
        question: "प्रश्न 37. सोनार (SONAR) तकनीक में किन तरंगों का उपयोग होता है?",
        answers: shuffle([
            { text: "रेडियो तरंगें", correct: false },
            { text: "प्रकाश तरंगें", correct: false },
            { text: "पराश्रव्य तरंगें", correct: true },
            { text: "अवश्रव्य तरंगें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोनार का उपयोग पानी के नीचे वस्तुओं का पता लगाने, दूरी मापने और नक्शा बनाने के लिए पराश्रव्य तरंगों को भेजने और उनकी प्रतिध्वनि प्राप्त करने के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 38. निम्नलिखित में से कौन विद्युतचुंबकीय तरंग नहीं है?",
        answers: shuffle([
            { text: "गामा किरणें", correct: false },
            { text: "एक्स-किरणें", correct: false },
            { text: "कैथोड किरणें", correct: true },
            { text: "अवरक्त किरणें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैथोड किरणें वास्तव में तीव्र गति वाले इलेक्ट्रॉनों की एक धारा हैं, न कि विद्युतचुंबकीय तरंगें।"
    },
    {
        question: "प्रश्न 39. विद्युतचुंबकीय स्पेक्ट्रम में सबसे लंबी तरंगदैर्घ्य वाली तरंगें कौन सी हैं?",
        answers: shuffle([
            { text: "गामा किरणें", correct: false },
            { text: "एक्स-किरणें", correct: false },
            { text: "पराबैंगनी किरणें", correct: false },
            { text: "रेडियो तरंगें", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेडियो तरंगों की तरंगदैर्घ्य सबसे लंबी और आवृत्ति सबसे कम होती है।"
    },
    {
        question: "प्रश्न 40. विद्युतचुंबकीय स्पेक्ट्रम में सबसे कम तरंगदैर्घ्य वाली तरंगें कौन सी हैं?",
        answers: shuffle([
            { text: "रेडियो तरंगें", correct: false },
            { text: "सूक्ष्म तरंगें", correct: false },
            { text: "अवरक्त किरणें", correct: false },
            { text: "गामा किरणें", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गामा किरणों की तरंगदैर्घ्य सबसे छोटी और आवृत्ति तथा ऊर्जा सबसे अधिक होती है।"
    },
    {
        question: "प्रश्न 41. रिमोट कंट्रोल में आमतौर पर किन विद्युतचुंबकीय तरंगों का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "रेडियो तरंगें", correct: false },
            { text: "पराबैंगनी किरणें", correct: false },
            { text: "अवरक्त किरणें", correct: true },
            { text: "एक्स-किरणें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टेलीविजन और अन्य उपकरणों के रिमोट कंट्रोल संकेतों को भेजने के लिए अवरक्त (Infrared) तरंगों का उपयोग करते हैं।"
    },
    {
        question: "प्रश्न 42. हड्डियों के फ्रैक्चर का पता लगाने के लिए चिकित्सा में किन तरंगों का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "सूक्ष्म तरंगें", correct: false },
            { text: "गामा किरणें", correct: false },
            { text: "एक्स-किरणें", correct: true },
            { text: "रेडियो तरंगें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक्स-किरणें नरम ऊतकों से गुजर सकती हैं लेकिन हड्डियों द्वारा अवशोषित हो जाती हैं, जिससे शरीर के अंदर की संरचना की छवि बनाना संभव हो जाता है।"
    },
    {
        question: "प्रश्न 43. ओजोन परत पृथ्वी को सूर्य से आने वाली किन हानिकारक किरणों से बचाती है?",
        answers: shuffle([
            { text: "अवरक्त किरणें", correct: false },
            { text: "पराबैंगनी किरणें", correct: true },
            { text: "एक्स-किरणें", correct: false },
            { text: "रेडियो तरंगें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वायुमंडल की ओजोन परत हानिकारक उच्च-ऊर्जा वाली पराबैंगनी (Ultraviolet) किरणों के अधिकांश भाग को अवशोषित कर लेती है।"
    },
    {
        question: "प्रश्न 44. माइक्रोवेव ओवन में खाना पकाने के लिए किन तरंगों का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "अवरक्त तरंगें", correct: false },
            { text: "रेडियो तरंगें", correct: false },
            { text: "सूक्ष्म तरंगें", correct: true },
            { text: "गामा किरणें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूक्ष्म तरंगें (Microwaves) भोजन में मौजूद पानी के अणुओं को कंपन कराती हैं, जिससे ऊष्मा उत्पन्न होती है और खाना पकता है।"
    },
    {
        question: "प्रश्न 45. दृश्य प्रकाश के स्पेक्ट्रम में किस रंग की तरंगदैर्घ्य सबसे लंबी होती है?",
        answers: shuffle([
            { text: "बैंगनी", correct: false },
            { text: "नीला", correct: false },
            { text: "हरा", correct: false },
            { text: "लाल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल रंग की तरंगदैर्घ्य दृश्यमान स्पेक्ट्रम में सबसे लंबी और आवृत्ति सबसे कम होती है।"
    },
    {
        question: "प्रश्न 46. दृश्य प्रकाश के स्पेक्ट्रम में किस रंग की आवृत्ति सबसे अधिक होती है?",
        answers: shuffle([
            { text: "लाल", correct: false },
            { text: "पीला", correct: false },
            { text: "नारंगी", correct: false },
            { text: "बैंगनी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैंगनी रंग की आवृत्ति सबसे अधिक और तरंगदैर्घ्य सबसे छोटी होती है।"
    },
    {
        question: "प्रश्न 47. कैंसर कोशिकाओं को नष्ट करने के लिए रेडियोथेरेपी में किन तरंगों का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "रेडियो तरंगें", correct: false },
            { text: "अवरक्त किरणें", correct: false },
            { text: "गामा किरणें", correct: true },
            { text: "सूक्ष्म तरंगें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गामा किरणें बहुत उच्च ऊर्जा वाली होती हैं और इनका उपयोग लक्षित तरीके से कैंसर कोशिकाओं को मारने के लिए किया जा सकता है।"
    },
    {
        question: "प्रश्न 48. वह तरंग जो ऊर्जा को एक स्थान से दूसरे स्थान तक ले जाती है, क्या कहलाती है?",
        answers: shuffle([
            { text: "अप्रगामी तरंग", correct: false },
            { text: "प्रगामी तरंग", correct: true },
            { text: "स्थिर तरंग", correct: false },
            { text: "ध्रुवित तरंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रगामी (Progressive) तरंग एक माध्यम में लगातार आगे बढ़ती है और अपने साथ ऊर्जा का परिवहन करती है।"
    },
    {
        question: "प्रश्न 49. जब दो समान तरंगें विपरीत दिशाओं में चलकर अध्यारोपित होती हैं, तो कौन सी तरंग बनती है?",
        answers: shuffle([
            { text: "प्रगामी तरंग", correct: false },
            { text: "अनुदैर्ध्य तरंग", correct: false },
            { text: "अप्रगामी तरंग", correct: true },
            { text: "विद्युतचुंबकीय तरंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस अध्यारोपण से एक स्थिर पैटर्न बनता है जिसे अप्रगामी या स्थिर (Standing/Stationary) तरंग कहते हैं, जिसमें ऊर्जा आगे नहीं बढ़ती है।"
    },
    {
        question: "प्रश्न 50. अप्रगामी तरंग में वे बिंदु जहाँ आयाम हमेशा शून्य रहता है, क्या कहलाते हैं?",
        answers: shuffle([
            { text: "प्रस्पंद", correct: false },
            { text: "निस्पंद", correct: true },
            { text: "शृंग", correct: false },
            { text: "गर्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निस्पंद (Nodes) वे बिंदु हैं जो स्थिर रहते हैं और कोई कंपन नहीं करते हैं।"
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