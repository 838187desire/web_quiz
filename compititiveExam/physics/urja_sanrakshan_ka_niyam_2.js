const questions = [
    {
        topHeading: "ऊर्जा संरक्षण के नियम पर आधारित 50 बहुविकल्पीय प्रश्न,part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. एक झील के शांत पानी में संग्रहीत ऊर्जा मुख्य रूप से है:",
        answers: shuffle([
            { text: "गतिज ऊर्जा", correct: false },
            { text: "गुरुत्वीय स्थितिज ऊर्जा", correct: true },
            { text: "नाभिकीय ऊर्जा", correct: false },
            { text: "शून्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पानी के प्रत्येक अणु की पृथ्वी के केंद्र के सापेक्ष एक निश्चित ऊँचाई होती है, जिससे उसमें गुरुत्वीय स्थितिज ऊर्जा संग्रहीत होती है।"
    },
    {
        question: "प्रश्न 2. जब एक चुंबक को एक कुंडली के पास लाया जाता है, तो कुंडली में विद्युत धारा उत्पन्न होती है। यह ऊर्जा संरक्षण से कैसे संबंधित है?",
        answers: shuffle([
            { text: "चुंबक की ऊर्जा विद्युत ऊर्जा में बदल जाती है।", correct: false },
            { text: "चुंबक को हिलाने में किया गया यांत्रिक कार्य विद्युत ऊर्जा में बदल जाता है।", correct: true },
            { text: "ऊष्मा ऊर्जा विद्युत ऊर्जा में बदल जाती है।", correct: false },
            { text: "यहाँ ऊर्जा संरक्षण लागू नहीं होता।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लेंज के नियम के अनुसार, उत्पन्न धारा एक चुंबकीय क्षेत्र बनाती है जो गति का विरोध करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस विरोध के खिलाफ चुंबक को चलाने में किया गया कार्य ही विद्युत ऊर्जा का स्रोत है।"
    },
    {
        question: "प्रश्न 3. ऊर्जा संरक्षण का नियम क्यों महत्वपूर्ण है?",
        answers: shuffle([
            { text: "क्योंकि यह बताता है कि ऊर्जा हमेशा कम होती है।", correct: false },
            { text: "क्योंकि यह भौतिकी में कई घटनाओं की भविष्यवाणी और विश्लेषण करने में मदद करता है।", correct: true },
            { text: "क्योंकि यह केवल ग्रहों की गति की व्याख्या करता है।", correct: false },
            { text: "क्योंकि यह हमें ऊर्जा बर्बाद करने की अनुमति देता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह भौतिकी के सबसे मौलिक सिद्धांतों में से एक है, जो हमें ऊर्जा के प्रवाह और रूपांतरण को समझने में सक्षम बनाता है।"
    },
    {
        question: "प्रश्न 4. एक गुलेल से पत्थर फेंकते समय, ऊर्जा का सही रूपांतरण है:",
        answers: shuffle([
            { text: "गतिज → प्रत्यास्थ स्थितिज → गतिज", correct: false },
            { text: "यांत्रिक कार्य → प्रत्यास्थ स्थितिज → गतिज", correct: true },
            { text: "रासायनिक → गतिज → स्थितिज", correct: false },
            { text: "प्रत्यास्थ स्थितिज → यांत्रिक कार्य → गतिज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पहले हाथ से खींचकर (यांत्रिक कार्य) रबर में प्रत्यास्थ स्थितिज ऊर्जा संग्रहीत की जाती है,<br><br><i class='fa-solid fa-angles-right icon'></i> जो छोड़ने पर पत्थर की गतिज ऊर्जा में बदल जाती है।"
    },
    {
        question: "प्रश्न 5. ऊष्मागतिकी के शून्यवें नियम का संबंध किससे है?",
        answers: shuffle([
            { text: "ऊर्जा संरक्षण", correct: false },
            { text: "एन्ट्रॉपी", correct: false },
            { text: "तापीय संतुलन और तापमान", correct: true },
            { text: "परम शून्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह नियम तापमान की अवधारणा को परिभाषित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ऊर्जा संरक्षण का संबंध पहले नियम से है।"
    },
    {
        question: "प्रश्न 6. किसी वस्तु का संवेग शून्य हो सकता है, लेकिन उसकी कुल ऊर्जा...",
        answers: shuffle([
            { text: "शून्य होनी चाहिए।", correct: false },
            { text: "अशून्य हो सकती है।", correct: true },
            { text: "हमेशा ऋणात्मक होती है।", correct: false },
            { text: "हमेशा अनंत होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक बम विस्फोट से पहले स्थिर (शून्य संवेग) होता है, लेकिन उसमें रासायनिक स्थितिज ऊर्जा होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> विस्फोट के बाद भी कुल संवेग शून्य रहता है, लेकिन ऊर्जा गतिज और ऊष्मीय ऊर्जा में बदल जाती है।"
    },
    {
        question: "प्रश्न 7. प्रत्यास्थ टक्कर में क्या संरक्षित रहता है?",
        answers: shuffle([
            { text: "केवल संवेग", correct: false },
            { text: "केवल गतिज ऊर्जा", correct: false },
            { text: "संवेग और गतिज ऊर्जा दोनों", correct: true },
            { text: "केवल स्थितिज ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक आदर्श प्रत्यास्थ टक्कर में, कुल संवेग और कुल गतिज ऊर्जा दोनों टक्कर से पहले और बाद में समान रहते हैं।"
    },
    {
        question: "प्रश्न 8. अप्रत्यास्थ टक्कर में, गतिज ऊर्जा...",
        answers: shuffle([
            { text: "संरक्षित रहती है।", correct: false },
            { text: "बढ़ जाती है।", correct: false },
            { text: "संरक्षित नहीं रहती है।", correct: true },
            { text: "शून्य हो जाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अप्रत्यास्थ टक्कर में, गतिज ऊर्जा का कुछ हिस्सा ऊष्मा, ध्वनि या विरूपण में बदल जाता है, इसलिए यह संरक्षित नहीं रहती,<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि कुल ऊर्जा और संवेग संरक्षित रहते हैं।"
    },
    {
        question: "प्रश्न 9. एक विद्युत बल्ब में, दी गई विद्युत ऊर्जा का अधिकांश भाग किसमें परिवर्तित हो जाता है?",
        answers: shuffle([
            { text: "प्रकाश ऊर्जा", correct: false },
            { text: "ऊष्मीय ऊर्जा", correct: true },
            { text: "ध्वनि ऊर्जा", correct: false },
            { text: "यांत्रिक ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारंपरिक तापदीप्त बल्ब बहुत अदक्ष होते हैं और वे अधिकांश विद्युत ऊर्जा को प्रकाश के बजाय ऊष्मा में परिवर्तित कर देते हैं।"
    },
    {
        question: "प्रश्न 10. किसी निकाय पर किया गया कार्य उसकी ऊर्जा में परिवर्तन के बराबर होता है। यह कहलाता है:",
        answers: shuffle([
            { text: "संवेग-आवेग प्रमेय", correct: false },
            { text: "कार्य-ऊर्जा प्रमेय", correct: true },
            { text: "बर्नूली का सिद्धांत", correct: false },
            { text: "पास्कल का नियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्य-ऊर्जा प्रमेय ऊर्जा संरक्षण के सिद्धांत का एक सीधा परिणाम है।"
    },
    {
        question: "प्रश्न 11. लेंज का नियम किस संरक्षण नियम का पालन करता है?",
        answers: shuffle([
            { text: "आवेश संरक्षण", correct: false },
            { text: "संवेग संरक्षण", correct: false },
            { text: "ऊर्जा संरक्षण", correct: true },
            { text: "द्रव्यमान संरक्षण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लेंज का नियम यह सुनिश्चित करता है कि प्रेरित धारा की दिशा ऐसी हो जो अपने कारण का विरोध करे, जिससे यह स्पष्ट होता है कि विद्युत ऊर्जा यांत्रिक कार्य से ही उत्पन्न होती है, शून्य से नहीं।"
    },
    {
        question: "प्रश्न 12. ज्वारीय ऊर्जा में, कौन सी ऊर्जा विद्युत ऊर्जा में परिवर्तित होती है?",
        answers: shuffle([
            { text: "चंद्रमा और सूर्य की गुरुत्वीय ऊर्जा", correct: true },
            { text: "पृथ्वी की रासायनिक ऊर्जा", correct: false },
            { text: "महासागरों की ऊष्मीय ऊर्जा", correct: false },
            { text: "पवन की गतिज ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ज्वार-भाटा मुख्य रूप से चंद्रमा और सूर्य के गुरुत्वाकर्षण के कारण पानी की स्थितिज और गतिज ऊर्जा में परिवर्तन से उत्पन्न होते हैं, जिसे फिर बिजली में बदला जाता है।"
    },
    {
        question: "प्रश्न 13. एक बंद लूप में एक संरक्षी बल द्वारा किया गया कुल कार्य होता है:",
        answers: shuffle([
            { text: "धनात्मक", correct: false },
            { text: "ऋणात्मक", correct: false },
            { text: "शून्य", correct: true },
            { text: "अनंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूंकि संरक्षी बल द्वारा किया गया कार्य केवल प्रारंभिक और अंतिम बिंदुओं पर निर्भर करता है, एक बंद लूप में जहाँ प्रारंभिक और अंतिम बिंदु समान होते हैं, कुल कार्य शून्य होता है।"
    },
    {
        question: "प्रश्न 14. ऊर्जा का क्षय (Dissipation of energy) का क्या अर्थ है?",
        answers: shuffle([
            { text: "ऊर्जा का नष्ट हो जाना।", correct: false },
            { text: "उपयोगी ऊर्जा का अनुपयोगी ऊर्जा (जैसे ऊष्मा) में बदल जाना।", correct: true },
            { text: "ऊर्जा का निर्माण होना।", correct: false },
            { text: "ऊर्जा का संरक्षित रहना।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि कुल ऊर्जा संरक्षित रहती है, घर्षण जैसी प्रक्रियाओं में उपयोगी यांत्रिक ऊर्जा अक्सर परिवेश में ऊष्मा के रूप में फैल जाती है, जो काम के लिए अनुपलब्ध हो जाती है।"
    },
    {
        question: "प्रश्न 15. जब कोई वस्तु एक खुरदरी सतह पर फिसलती है, तो यांत्रिक ऊर्जा का क्षय होता है। यह ऊर्जा कहाँ जाती है?",
        answers: shuffle([
            { text: "यह पूरी तरह से नष्ट हो जाती है।", correct: false },
            { text: "यह वस्तु और सतह की आंतरिक ऊर्जा (ऊष्मा) में परिवर्तित हो जाती है।", correct: true },
            { text: "यह स्थितिज ऊर्जा के रूप में संग्रहीत हो जाती है।", correct: false },
            { text: "यह प्रकाश ऊर्जा में बदल जाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घर्षण के कारण उत्पन्न ऊष्मा वस्तु और सतह के अणुओं की गतिज ऊर्जा को बढ़ा देती है, जिससे उनकी आंतरिक ऊर्जा बढ़ जाती है।"
    },
    {
        question: "प्रश्न 16. किसी निकाय के लिए ऊर्जा संरक्षण का समीकरण लिखने के लिए, क्या पहचानना महत्वपूर्ण है?",
        answers: shuffle([
            { text: "केवल निकाय का द्रव्यमान।", correct: false },
            { text: "केवल निकाय का वेग।", correct: false },
            { text: "निकाय में और उसके बाहर ऊर्जा के सभी हस्तांतरण और रूपांतरण।", correct: true },
            { text: "केवल निकाय का आकार।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संरक्षण का नियम लागू करने के लिए, हमें यह हिसाब रखना होता है कि ऊर्जा किन रूपों में मौजूद है और यह प्रणाली के अंदर और बाहर कैसे प्रवाहित हो रही है।"
    },
    {
        question: "प्रश्न 17. प्रकाश विद्युत प्रभाव में, प्रकाश की ऊर्जा किस कण की गतिज ऊर्जा में परिवर्तित होती है?",
        answers: shuffle([
            { text: "प्रोटॉन", correct: false },
            { text: "न्यूट्रॉन", correct: false },
            { text: "इलेक्ट्रॉन", correct: true },
            { text: "फोटॉन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब एक फोटॉन (प्रकाश कण) किसी धातु की सतह से टकराता है, तो वह अपनी ऊर्जा एक इलेक्ट्रॉन को स्थानांतरित कर देता है,<br><br><i class='fa-solid fa-angles-right icon'></i> जो फिर सतह से बाहर निकल जाता है। यह ऊर्जा संरक्षण का एक क्वांटम उदाहरण है।"
    },
    {
        question: "प्रश्न 18. एक सरल लोलक का दोलन अंततः क्यों रुक जाता है?",
        answers: shuffle([
            { text: "गुरुत्वाकर्षण काम करना बंद कर देता है।", correct: false },
            { text: "हवा के प्रतिरोध और निलंबन बिंदु पर घर्षण के कारण ऊर्जा का क्षय होता है।", correct: true },
            { text: "लोलक की ऊर्जा नष्ट हो जाती है।", correct: false },
            { text: "ऊर्जा संरक्षण का नियम लागू नहीं होता।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये असंरक्षी बल धीरे-धीरे लोलक की यांत्रिक ऊर्जा को ऊष्मा में परिवर्तित करते रहते हैं, जब तक कि वह रुक न जाए।"
    },
    {
        question: "प्रश्न 19. ऊर्जा का कौन सा रूप सबसे अव्यवस्थित माना जाता है?",
        answers: shuffle([
            { text: "यांत्रिक ऊर्जा", correct: false },
            { text: "विद्युत ऊर्जा", correct: false },
            { text: "ऊष्मीय ऊर्जा", correct: true },
            { text: "रासायनिक ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊष्मीय ऊर्जा बड़ी संख्या में अणुओं की यादृच्छिक, अव्यवस्थित गति से जुड़ी होती है, जबकि यांत्रिक ऊर्जा एक संगठित गति है।"
    },
    {
        question: "प्रश्न 20. एक आदर्श गैस के समतापी प्रसार में, गैस की आंतरिक ऊर्जा...",
        answers: shuffle([
            { text: "बढ़ती है।", correct: false },
            { text: "घटती है।", correct: false },
            { text: "अपरिवर्तित रहती है।", correct: true },
            { text: "पहले बढ़ती है, फिर घटती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक आदर्श गैस की आंतरिक ऊर्जा केवल उसके तापमान पर निर्भर करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> समतापी (Isothermal) प्रक्रिया में तापमान स्थिर रहता है, इसलिए आंतरिक ऊर्जा भी अपरिवर्तित रहती है।"
    },
    {
        question: "प्रश्न 21. साइकिल चलाते समय, पैडल मारने में लगाई गई रासायनिक ऊर्जा का क्या होता है?",
        answers: shuffle([
            { text: "यह केवल साइकिल की गतिज ऊर्जा में बदलती है।", correct: false },
            { text: "यह गतिज ऊर्जा, घर्षण के विरुद्ध कार्य, और ऊष्मा में बदलती है।", correct: true },
            { text: "यह पूरी तरह से नष्ट हो जाती है।", correct: false },
            { text: "यह स्थितिज ऊर्जा में संग्रहीत हो जाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊर्जा का कुछ हिस्सा साइकिल को गति देता है, कुछ हिस्सा सड़क और हवा के घर्षण पर काबू पाने में खर्च होता है,<br><br><i class='fa-solid fa-angles-right icon'></i> और कुछ शरीर में ऊष्मा के रूप में उत्पन्न होता है।"
    },
    {
        question: "प्रश्न 22. कॉम्पटन प्रभाव में, एक फोटॉन एक इलेक्ट्रॉन से टकराता है। इस प्रक्रिया में...",
        answers: shuffle([
            { text: "केवल ऊर्जा संरक्षित रहती है।", correct: false },
            { text: "केवल संवेग संरक्षित रहता है।", correct: false },
            { text: "ऊर्जा और संवेग दोनों संरक्षित रहते हैं।", correct: true },
            { text: "कुछ भी संरक्षित नहीं रहता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह कणों के बीच एक प्रत्यास्थ टक्कर की तरह है, जहाँ टक्कर से पहले और बाद में सिस्टम की कुल ऊर्जा और कुल संवेग दोनों स्थिर रहते हैं।"
    },
    {
        question: "प्रश्न 23. किसी विलगित प्रणाली की एन्ट्रॉपी समय के साथ...",
        answers: shuffle([
            { text: "हमेशा घटती है।", correct: false },
            { text: "हमेशा स्थिर रहती है।", correct: false },
            { text: "कभी कम नहीं हो सकती।", correct: true },
            { text: "हमेशा शून्य होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह ऊष्मागतिकी का दूसरा नियम है।<br><br><i class='fa-solid fa-angles-right icon'></i> ऊर्जा संरक्षित रहती है (पहला नियम), लेकिन यह अधिक अव्यवस्थित (उच्च एन्ट्रॉपी) अवस्था की ओर प्रवृत्त होती है।"
    },
    {
        question: "प्रश्न 24. एक समतल दर्पण से प्रकाश का परावर्तन ऊर्जा संरक्षण का पालन कैसे करता है?",
        answers: shuffle([
            { text: "आपतित प्रकाश की ऊर्जा परावर्तित प्रकाश की ऊर्जा के बराबर होती है।", correct: true },
            { text: "प्रकाश की गति बढ़ जाती है।", correct: false },
            { text: "प्रकाश की आवृत्ति बदल जाती है।", correct: false },
            { text: "प्रकाश ऊष्मा में बदल जाता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक आदर्श परावर्तन में, प्रकाश की तीव्रता या आवृत्ति नहीं बदलती, जिसका अर्थ है कि ऊर्जा संरक्षित रहती है।"
    },
    {
        question: "प्रश्न 25. एक रुद्धोष्म (Adiabatic) प्रक्रिया में, प्रणाली और परिवेश के बीच...",
        answers: shuffle([
            { text: "ऊर्जा का कोई आदान-प्रदान नहीं होता।", correct: false },
            { text: "ऊष्मा का कोई आदान-प्रदान नहीं होता।", correct: true },
            { text: "कार्य का कोई आदान-प्रदान नहीं होता।", correct: false },
            { text: "तापमान का कोई आदान-प्रदान नहीं होता।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रुद्धोष्म प्रक्रिया में, ΔQ=0, इसलिए आंतरिक ऊर्जा में कोई भी परिवर्तन केवल प्रणाली पर या उसके द्वारा किए गए कार्य के कारण होता है।"
    },
    {
        question: "प्रश्न 26. यदि ऊर्जा का संरक्षण नहीं होता, तो क्या संभव होता?",
        answers: shuffle([
            { text: "समय यात्रा", correct: false },
            { text: "एक शाश्वत गति मशीन", correct: true },
            { text: "प्रकाश से तेज गति", correct: false },
            { text: "गुरुत्वाकर्षण का न होना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि ऊर्जा का निर्माण किया जा सकता, तो एक ऐसी मशीन बनाना संभव होता जो बिना किसी इनपुट के हमेशा के लिए काम करती।"
    },
    {
        question: "प्रश्न 27. एक पत्थर को धागे से बांधकर घुमाने पर, यदि धागा टूट जाता है, तो पत्थर की गतिज ऊर्जा...",
        answers: shuffle([
            { text: "तुरंत शून्य हो जाती है।", correct: false },
            { text: "संरक्षित रहती है (उसी क्षण)।", correct: true },
            { text: "बढ़ जाती है।", correct: false },
            { text: "घट जाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टूटने के ठीक बाद, पत्थर की गति वही रहती है जो टूटने से ठीक पहले थी, इसलिए उसकी गतिज ऊर्जा संरक्षित रहती है।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में गुरुत्वाकर्षण और वायु प्रतिरोध उसे बदल देते हैं।"
    },
    {
        question: "प्रश्न 28. बीटा क्षय में, एक न्यूट्रॉन एक प्रोटॉन और एक इलेक्ट्रॉन में बदल जाता है। ऊर्जा और संवेग संरक्षण के लिए किस अन्य कण का उत्सर्जन आवश्यक है?",
        answers: shuffle([
            { text: "फोटॉन", correct: false },
            { text: "न्यूट्रिनो (या एंटीन्यूट्रिनो)", correct: true },
            { text: "पॉज़िट्रॉन", correct: false },
            { text: "मेसॉन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रारंभिक प्रेक्षणों में ऊर्जा संरक्षित नहीं लग रही थी।<br><br><i class='fa-solid fa-angles-right icon'></i> पाउली ने न्यूट्रिनो के अस्तित्व का प्रस्ताव दिया, जो लापता ऊर्जा और संवेग को ले जाता है।"
    },
    {
        question: "प्रश्न 29. किसी निकाय की कुल ऊर्जा में शामिल हो सकते हैं:",
        answers: shuffle([
            { text: "केवल गतिज ऊर्जा", correct: false },
            { text: "केवल स्थितिज ऊर्जा", correct: false },
            { text: "गतिज, स्थितिज, ऊष्मीय, रासायनिक और अन्य सभी प्रकार की ऊर्जा", correct: true },
            { text: "केवल यांत्रिक ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊर्जा संरक्षण का नियम प्रणाली में मौजूद ऊर्जा के सभी रूपों पर विचार करता है।"
    },
    {
        question: "प्रश्न 30. जब बर्फ पिघलती है, तो उसकी आंतरिक ऊर्जा...",
        answers: shuffle([
            { text: "घटती है।", correct: false },
            { text: "बढ़ती है।", correct: true },
            { text: "अपरिवर्तित रहती है।", correct: false },
            { text: "शून्य हो जाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बर्फ को पिघलाने के लिए दी गई ऊष्मा (गुप्त ऊष्मा) पानी के अणुओं की स्थितिज ऊर्जा को बढ़ाती है, जिससे कुल आंतरिक ऊर्जा बढ़ जाती है।"
    },
    {
        question: "प्रश्न 31. ऊर्जा संरक्षण का नियम एक...",
        answers: shuffle([
            { text: "परिकल्पना है।", correct: false },
            { text: "अवलोकन आधारित अनुभवजन्य नियम है।", correct: true },
            { text: "केवल गणितीय अवधारणा है।", correct: false },
            { text: "सिद्धांत है जिसे कभी-कभी तोड़ा जा सकता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अनगिनत प्रयोगों और अवलोकनों पर आधारित एक मौलिक नियम है और आज तक इसका कोई अपवाद नहीं पाया गया है।"
    },
    {
        question: "प्रश्न 32. एक पेड़ की पत्ती का जमीन पर गिरना ऊर्जा संरक्षण को कैसे दर्शाता है?",
        answers: shuffle([
            { text: "स्थितिज ऊर्जा पूरी तरह से गतिज ऊर्जा में बदल जाती है।", correct: false },
            { text: "स्थितिज ऊर्जा, गतिज ऊर्जा और वायु प्रतिरोध के कारण ऊष्मा में बदल जाती है।", correct: true },
            { text: "ऊर्जा का निर्माण होता है।", correct: false },
            { text: "ऊर्जा नष्ट हो जाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पत्ती की प्रारंभिक स्थितिज ऊर्जा उसे गति (गतिज ऊर्जा) देती है, लेकिन वायु प्रतिरोध लगातार इस ऊर्जा को ऊष्मा में परिवर्तित करता रहता है।"
    },
    {
        question: "प्रश्न 33. दो कारों की टक्कर में, यदि वे आपस में जुड़ जाती हैं, तो यह एक...",
        answers: shuffle([
            { text: "प्रत्यास्थ टक्कर है।", correct: false },
            { text: "पूर्णतः अप्रत्यास्थ टक्कर है।", correct: true },
            { text: "नाभिकीय टक्कर है।", correct: false },
            { text: "इनमें से कोई नहीं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस प्रकार की टक्कर में गतिज ऊर्जा का अधिकतम क्षय होता है (ऊष्मा, ध्वनि और विरूपण में),<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि कुल संवेग अभी भी संरक्षित रहता है।"
    },
    {
        question: "प्रश्न 34. ऊर्जा का सबसे केंद्रित रूप कौन सा है?",
        answers: shuffle([
            { text: "रासायनिक ऊर्जा", correct: false },
            { text: "यांत्रिक ऊर्जा", correct: false },
            { text: "नाभिकीय ऊर्जा", correct: true },
            { text: "ऊष्मीय ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्रव्यमान के एक छोटे से हिस्से को ऊर्जा में परिवर्तित करके भी (E=mc²) नाभिकीय प्रक्रियाओं में भारी मात्रा में ऊर्जा निकलती है।"
    },
    {
        question: "प्रश्न 35. किसी कुएं से बाल्टी खींचते समय, व्यक्ति द्वारा किया गया कार्य...",
        answers: shuffle([
            { text: "केवल बाल्टी की गतिज ऊर्जा को बढ़ाता है।", correct: false },
            { text: "बाल्टी और पानी की गुरुत्वीय स्थितिज ऊर्जा को बढ़ाता है।", correct: true },
            { text: "ऊर्जा को नष्ट कर देता है।", correct: false },
            { text: "ऊष्मा उत्पन्न करता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यक्ति की रासायनिक ऊर्जा यांत्रिक कार्य में बदलती है, जो मुख्य रूप से बाल्टी और पानी को ऊपर उठाकर उनकी स्थितिज ऊर्जा में वृद्धि करती है।"
    },
    {
        question: "प्रश्न 36. \"विश्व की ऊर्जा स्थिर है।\" यह कथन किसका है?",
        answers: shuffle([
            { text: "न्यूटन", correct: false },
            { text: "क्लॉसियस", correct: true },
            { text: "आइंस्टीन", correct: false },
            { text: "फैराडे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रुडोल्फ क्लॉसियस ने ऊष्मागतिकी के पहले और दूसरे नियम को संक्षेप में कहा: \"विश्व की ऊर्जा स्थिर है; विश्व की एन्ट्रॉपी अधिकतम की ओर प्रवृत्त होती है।\""
    },
    {
        question: "प्रश्न 37. जब एक आवेशित कण एक चुंबकीय क्षेत्र में घूमता है, तो चुंबकीय बल...",
        answers: shuffle([
            { text: "कण की गतिज ऊर्जा को बढ़ाता है।", correct: false },
            { text: "कण की गतिज ऊर्जा को घटाता है।", correct: false },
            { text: "कण की गतिज ऊर्जा को नहीं बदलता है।", correct: true },
            { text: "कण को रोक देता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चुंबकीय बल हमेशा कण के वेग के लंबवत होता है, इसलिए यह कोई कार्य नहीं करता और कण की गति (और गतिज ऊर्जा) को नहीं बदलता, केवल उसकी दिशा बदलता है।"
    },
    {
        question: "प्रश्न 38. एक आदर्श गैस के मुक्त प्रसार में, गैस द्वारा किया गया कार्य...",
        answers: shuffle([
            { text: "धनात्मक होता है।", correct: false },
            { text: "ऋणात्मक होता है।", correct: false },
            { text: "शून्य होता है।", correct: true },
            { text: "अनंत होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुक्त प्रसार निर्वात में होता है, जहाँ कोई बाहरी दबाव नहीं होता।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, गैस को किसी बल के विरुद्ध कार्य नहीं करना पड़ता, और किया गया कार्य शून्य होता है।"
    },
    {
        question: "प्रश्न 39. स्थितिज ऊर्जा की अवधारणा केवल किसके लिए परिभाषित है?",
        answers: shuffle([
            { text: "असंरक्षी बलों के लिए", correct: false },
            { text: "संरक्षी बलों के लिए", correct: true },
            { text: "सभी प्रकार के बलों के लिए", correct: false },
            { text: "घर्षण बल के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि संरक्षी बल द्वारा किया गया कार्य केवल अंतिम बिंदुओं पर निर्भर करता है, हम प्रत्येक बिंदु पर एक अद्वितीय स्थितिज ऊर्जा मान परिभाषित कर सकते हैं।"
    },
    {
        question: "प्रश्न 40. एक लोहे के टुकड़े को गर्म करने पर, उसकी आंतरिक ऊर्जा...",
        answers: shuffle([
            { text: "बढ़ती है।", correct: true },
            { text: "घटती है।", correct: false },
            { text: "अपरिवर्तित रहती है।", correct: false },
            { text: "पहले घटती है फिर बढ़ती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊष्मा देने से लोहे के परमाणुओं का कंपन (गतिज ऊर्जा) और उनकी स्थितिज ऊर्जा दोनों बढ़ जाती है, जिससे कुल आंतरिक ऊर्जा में वृद्धि होती है।"
    },
    {
        question: "प्रश्न 41. एक रॉकेट का प्रक्षेपण ऊर्जा संरक्षण का एक जटिल उदाहरण है जिसमें शामिल है:",
        answers: shuffle([
            { text: "केवल गतिज ऊर्जा का रूपांतरण।", correct: false },
            { text: "ईंधन की रासायनिक ऊर्जा का गतिज और स्थितिज ऊर्जा में रूपांतरण।", correct: true },
            { text: "केवल स्थितिज ऊर्जा का रूपांतरण।", correct: false },
            { text: "नाभिकीय ऊर्जा का रूपांतरण।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रॉकेट ईंधन में संग्रहीत रासायनिक ऊर्जा को गर्म गैसों की गतिज ऊर्जा में और फिर रॉकेट की गतिज और गुरुत्वीय स्थितिज ऊर्जा में परिवर्तित करता है।"
    },
    {
        question: "प्रश्न 42. ऊर्जा संरक्षण का नियम किस समरूपता (Symmetry) का परिणाम है?",
        answers: shuffle([
            { text: "स्थान में समरूपता", correct: false },
            { text: "समय में समरूपता", correct: true },
            { text: "दिशा में समरूपता", correct: false },
            { text: "आवेश में समरूपता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नोएथर के प्रमेय के अनुसार, भौतिकी के नियमों का समय के साथ अपरिवर्तनीय होना (अर्थात, आज और कल नियम समान हैं) सीधे ऊर्जा संरक्षण की ओर ले जाता है।"
    },
    {
        question: "प्रश्न 43. एक कैपेसिटर को चार्ज करने में, बैटरी द्वारा किया गया कार्य कहाँ संग्रहीत होता है?",
        answers: shuffle([
            { text: "प्लेटों के बीच चुंबकीय क्षेत्र में।", correct: false },
            { text: "प्लेटों के बीच विद्युत क्षेत्र में।", correct: true },
            { text: "तारों में ऊष्मा के रूप में।", correct: false },
            { text: "यह नष्ट हो जाता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किया गया कार्य कैपेसिटर की प्लेटों के बीच स्थापित विद्युत क्षेत्र में स्थितिज ऊर्जा के रूप में संग्रहीत हो जाता है।"
    },
    {
        question: "प्रश्न 44. जब कोई व्यक्ति सीढ़ियाँ चढ़ता है, तो वह किस बल के विरुद्ध कार्य करता है?",
        answers: shuffle([
            { text: "घर्षण बल", correct: false },
            { text: "वायु प्रतिरोध", correct: false },
            { text: "गुरुत्वाकर्षण बल", correct: true },
            { text: "चुंबकीय बल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यक्ति अपनी रासायनिक ऊर्जा का उपयोग अपने शरीर को गुरुत्वाकर्षण के विरुद्ध ऊपर उठाने में करता है, जिससे उसकी गुरुत्वीय स्थितिज ऊर्जा बढ़ती है।"
    },
    {
        question: "प्रश्न 45. यदि एक प्रणाली की कुल ऊर्जा समय के साथ बदल रही है, तो इसका क्या अर्थ है?",
        answers: shuffle([
            { text: "ऊर्जा संरक्षण का नियम गलत है।", correct: false },
            { text: "प्रणाली विलगित (isolated) नहीं है।", correct: true },
            { text: "प्रणाली का तापमान स्थिर है।", correct: false },
            { text: "प्रणाली पर कोई बल नहीं लग रहा है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका मतलब है कि या तो प्रणाली पर बाहरी बल काम कर रहे हैं या परिवेश के साथ ऊर्जा (जैसे ऊष्मा) का आदान-प्रदान हो रहा है।"
    },
    {
        question: "प्रश्न 46. प्रकाश का अपवर्तन ऊर्जा संरक्षण का पालन कैसे करता है?",
        answers: shuffle([
            { text: "प्रकाश की ऊर्जा बढ़ जाती है।", correct: false },
            { text: "प्रकाश की आवृत्ति अपरिवर्तित रहती है।", correct: true },
            { text: "प्रकाश की ऊर्जा घट जाती है।", correct: false },
            { text: "प्रकाश का वेग अपरिवर्तित रहता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब प्रकाश एक माध्यम से दूसरे में जाता है, तो उसका वेग और तरंगदैर्ध्य बदल जाते हैं, लेकिन उसकी आवृत्ति स्थिर रहती है।<br><br><i class='fa-solid fa-angles-right icon'></i> एक फोटॉन की ऊर्जा उसकी आवृत्ति पर निर्भर करती है, इसलिए ऊर्जा संरक्षित रहती है।"
    },
    {
        question: "प्रश्न 47. एक भारोत्तोलक जब भार को अपने सिर के ऊपर स्थिर रखता है, तो वह...",
        answers: shuffle([
            { text: "कोई कार्य नहीं करता है।", correct: true },
            { text: "धनात्मक कार्य करता है।", correct: false },
            { text: "ऋणात्मक कार्य करता है।", correct: false },
            { text: "ऊर्जा उत्पन्न करता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भौतिकी के अनुसार, यदि कोई विस्थापन नहीं है, तो कोई कार्य नहीं किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, मांसपेशियों को संकुचित रखने के लिए उसे आंतरिक रूप से रासायनिक ऊर्जा खर्च करनी पड़ती है, जो ऊष्मा में बदल जाती है।"
    },
    {
        question: "प्रश्न 48. ऊर्जा संरक्षण का नियम ब्रह्मांड के किस पैमाने पर लागू होता है?",
        answers: shuffle([
            { text: "केवल स्थूल (macroscopic) वस्तुओं पर", correct: false },
            { text: "केवल सूक्ष्म (microscopic) कणों पर", correct: false },
            { text: "स्थूल और सूक्ष्म दोनों पैमानों पर", correct: true },
            { text: "केवल खगोलीय पिंडों पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक मौलिक नियम है जो परमाणुओं और उप-परमाण्विक कणों से लेकर आकाशगंगाओं तक हर पैमाने पर लागू होता है।"
    },
    {
        question: "प्रश्न 49. एक बांध में संग्रहीत जल की स्थितिज ऊर्जा का अंतिम स्रोत क्या है?",
        answers: shuffle([
            { text: "पृथ्वी का गुरुत्वाकर्षण", correct: false },
            { text: "सूर्य", correct: true },
            { text: "नदियाँ", correct: false },
            { text: "महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य की ऊष्मा से पानी वाष्पित होकर बादलों का निर्माण करता है, जो वर्षा के रूप में पहाड़ों पर गिरता है और नदियों के माध्यम से बांधों में इकट्ठा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह जल चक्र सूर्य द्वारा संचालित होता है।"
    },
    {
        question: "प्रश्न 50. किसी रासायनिक अभिक्रिया में, यदि ऊर्जा निकलती है (ऊष्माक्षेपी), तो उत्पादों की कुल बंधन ऊर्जा...",
        answers: shuffle([
            { text: "अभिकारकों से अधिक होती है।", correct: true },
            { text: "अभिकारकों से कम होती है।", correct: false },
            { text: "अभिकारकों के बराबर होती है।", correct: false },
            { text: "शून्य होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब अधिक स्थिर (मजबूत) बंधन बनते हैं, तो ऊर्जा निकलती है।<br><br><i class='fa-solid fa-angles-right icon'></i> स्थिर बंधनों का अर्थ है अधिक (ऋणात्मक) बंधन ऊर्जा।"
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