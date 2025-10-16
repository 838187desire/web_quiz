const questions = [
    {
        topHeading: "डीएनए की संरचना पर आधारित 29 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. डीएनए का पूर्ण रूप क्या है?",
        answers: shuffle([
            { text: "डीऑक्सीराइबोन्यूक्लिक एसिड", correct: true },
            { text: "डीऑक्सीराइबोन्यूक्लिक एमाइन", correct: false },
            { text: "डीऑक्सीराइबोन्यूक्लिक एस्टर", correct: false },
            { text: "डीऑक्सीराइबोन्यूक्लिक एमाइड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डीएनए का पूरा नाम डीऑक्सीराइबोन्यूक्लिक एसिड है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो एक अणु है जिसमें अधिकांश जीवों के विकास, कामकाज, वृद्धि और प्रजनन के लिए आनुवंशिक निर्देश होते हैं।"
    },
    {
        question: "प्रश्न 2. डीएनए की द्विकुंडलिनी (डबल हेलिक्स) संरचना की खोज किसने की थी?",
        answers: shuffle([
            { text: "ग्रेगर मेंडल", correct: false },
            { text: "हरगोबिंद खुराना", correct: false },
            { text: "जेम्स वाटसन और फ्रांसिस क्रिक", correct: true },
            { text: "लुई पाश्चर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1953 में जेम्स वाटसन और फ्रांसिस क्रिक ने डीएनए की द्विकुंडलिनी संरचना का मॉडल प्रस्तुत किया था।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसके लिए उन्हें नोबेल पुरस्कार से सम्मानित किया गया।"
    },
    {
        question: "प्रश्न 3. डीएनए में कौन से चार नाइट्रोजनस क्षार (Nitrogenous Bases) पाए जाते हैं?",
        answers: shuffle([
            { text: "एडेनिन, गुआनिन, साइटोसिन, यूरेसिल", correct: false },
            { text: "एडेनिन, गुआनिन, साइटोसिन, थाइमिन", correct: true },
            { text: "एडेनिन, गुआनिन, यूरेसिल, थाइमिन", correct: false },
            { text: "एडेनिन, यूरेसिल, साइटोसिन, थाइमिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डीएनए में चार नाइट्रोजनस क्षार होते हैं: एडेनिन (A), गुआनिन (G), साइटोसिन (C), और थाइमिन (T)।<br><br><i class='fa-solid fa-angles-right icon'></i>  आरएनए में थाइमिन के स्थान पर यूरेसिल (U) होता है।"
    },
    {
        question: "प्रश्न 4. डीएनए में एडेनिन (Adenine) हमेशा किस क्षार के साथ जुड़ता है?",
        answers: shuffle([
            { text: "गुआनिन (Guanine)", correct: false },
            { text: "साइटोसिन (Cytosine)", correct: false },
            { text: "थाइमिन (Thymine)", correct: true },
            { text: "यूरेसिल (Uracil)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डीएनए की संरचना में, एडेनिन (A) हमेशा दो हाइड्रोजन बंधों के माध्यम से थाइमिन (T) के साथ जुड़ता है।"
    },
    {
        question: "प्रश्न 5. डीएनए में गुआनिन (Guanine) हमेशा किस क्षार के साथ जुड़ता है?",
        answers: shuffle([
            { text: "एडेनिन (Adenine)", correct: false },
            { text: "साइटोसिन (Cytosine)", correct: true },
            { text: "थाइमिन (Thymine)", correct: false },
            { text: "यूरेसिल (Uracil)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुआनिन (G) हमेशा तीन हाइड्रोजन बंधों के माध्यम से साइटोसिन (C) के साथ जुड़ता है।"
    },
    {
        question: "प्रश्न 6. डीएनए अणु की रीढ़ (Backbone) किससे बनी होती है?",
        answers: shuffle([
            { text: "केवल शर्करा से", correct: false },
            { text: "केवल फॉस्फेट समूह से", correct: false },
            { text: "शर्करा और फॉस्फेट से", correct: true },
            { text: "नाइट्रोजनस क्षार से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डीएनए की रीढ़ की हड्डी वैकल्पिक शर्करा (डीऑक्सीराइबोज) और फॉस्फेट समूहों से बनी होती है।"
    },
    {
        question: "प्रश्न 7. डीएनए में मौजूद शर्करा (Sugar) का क्या नाम है?",
        answers: shuffle([
            { text: "राइबोज", correct: false },
            { text: "डीऑक्सीराइबोज", correct: true },
            { text: "सुक्रोज", correct: false },
            { text: "फ्रुक्टोज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डीएनए में मौजूद पेंटोज (पांच-कार्बन) शर्करा को डीऑक्सीराइबोज कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  आरएनए में राइबोज शर्करा होती है।"
    },
    {
        question: "प्रश्न 8. न्यूक्लियोटाइड (Nucleotide) में क्या-क्या शामिल होता है?",
        answers: shuffle([
            { text: "एक शर्करा, एक फॉस्फेट और एक नाइट्रोजनस क्षार", correct: true },
            { text: "केवल शर्करा और फॉस्फेट", correct: false },
            { text: "केवल नाइट्रोजनस क्षार", correct: false },
            { text: "शर्करा और नाइट्रोजनस क्षार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक न्यूक्लियोटाइड डीएनए की मूल इकाई है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें एक डीऑक्सीराइबोज शर्करा, एक फॉस्फेट समूह और एक नाइट्रोजनस क्षार होता है।"
    },
    {
        question: "प्रश्न 9. डीएनए मुख्य रूप से कोशिका के किस भाग में पाया जाता है?",
        answers: shuffle([
            { text: "कोशिका झिल्ली", correct: false },
            { text: "कोशिका द्रव्य", correct: false },
            { text: "नाभिक (Nucleus)", correct: true },
            { text: "राइबोसोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूकेरियोटिक कोशिकाओं में, अधिकांश डीएनए नाभिक (Nucleus) के भीतर स्थित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जहाँ यह गुणसूत्रों (chromosomes) के रूप में संगठित होता है।"
    },
    {
        question: "प्रश्न 10. प्यूरीन (Purines) क्षार कौन से हैं?",
        answers: shuffle([
            { text: "एडेनिन और थाइमिन", correct: false },
            { text: "गुआनिन और साइटोसिन", correct: false },
            { text: "एडेनिन और गुआनिन", correct: true },
            { text: "साइटोसिन और थाइमिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नाइट्रोजनस क्षार दो प्रकार के होते हैं: प्यूरीन (दो-रिंग संरचना) जिसमें एडेनिन और गुआनिन शामिल हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और पाइरिमिडीन (एक-रिंग संरचना)।"
    },
    {
        question: "प्रश्न 11. पाइरिमिडीन (Pyrimidines) क्षार कौन से हैं?",
        answers: shuffle([
            { text: "एडेनिन और गुआनिन", correct: false },
            { text: "साइटोसिन और थाइमिन", correct: true },
            { text: "एडेनिन और साइटोसिन", correct: false },
            { text: "गुआनिन और थाइमिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डीएनए में पाइरिमिडीन क्षार साइटोसिन और थाइमिन हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  आरएनए में थाइमिन के बजाय यूरेसिल होता है।"
    },
    {
        question: "प्रश्न 12. डीएनए के दो स्ट्रैंड्स को एक साथ रखने वाले बंध (Bond) का क्या नाम है?",
        answers: shuffle([
            { text: "सहसंयोजक बंध (Covalent Bond)", correct: false },
            { text: "आयनिक बंध (Ionic Bond)", correct: false },
            { text: "हाइड्रोजन बंध (Hydrogen Bond)", correct: true },
            { text: "पेप्टाइड बंध (Peptide Bond)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डीएनए के दो स्ट्रैंड्स पूरक क्षार युग्मों के बीच हाइड्रोजन बंधों द्वारा एक साथ जुड़े रहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  ये बंध कमजोर होते हैं, जो प्रतिकृति और प्रतिलेखन के दौरान स्ट्रैंड्स को अलग करने की अनुमति देते हैं।"
    },
    {
        question: "प्रश्न 13. उत्परिवर्तन (Mutation) क्या है?",
        answers: shuffle([
            { text: "डीएनए अनुक्रम में एक स्थायी परिवर्तन", correct: true },
            { text: "डीएनए का अस्थायी परिवर्तन", correct: false },
            { text: "कोशिका विभाजन की प्रक्रिया", correct: false },
            { text: "जीन का सामान्य कार्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्परिवर्तन डीएनए के न्यूक्लियोटाइड अनुक्रम में एक स्थायी परिवर्तन है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो प्रतिकृति में त्रुटियों या पर्यावरणीय कारकों के कारण हो सकता है।"
    },
    {
        question: "प्रश्न 14. डीएनए प्रतिकृति (DNA Replication) का क्या अर्थ है?",
        answers: shuffle([
            { text: "डीएनए से आरएनए बनना", correct: false },
            { text: "डीएनए से प्रोटीन बनना", correct: false },
            { text: "डीएनए की एक सटीक प्रतिलिपि बनाना", correct: true },
            { text: "डीएनए का टूटना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डीएनए प्रतिकृति वह प्रक्रिया है जिसके द्वारा एक डीएनए अणु अपनी दो समान प्रतियां बनाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह कोशिका विभाजन के लिए एक आवश्यक प्रक्रिया है।"
    },
    {
        question: "प्रश्न 15. जीन (Gene) क्या है?",
        answers: shuffle([
            { text: "डीएनए का एक खंड जो एक विशिष्ट प्रोटीन को कोड करता है", correct: true },
            { text: "संपूर्ण डीएनए अणु", correct: false },
            { text: "एक प्रकार का आरएनए", correct: false },
            { text: "कोशिका का ऊर्जा स्रोत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीन आनुवंशिकता की मूल इकाई है और डीएनए का एक विशिष्ट अनुक्रम है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो एक कार्यात्मक उत्पाद, जैसे प्रोटीन या आरएनए अणु के संश्लेषण का निर्देश देता है।"
    },
    {
        question: "प्रश्न 16. डीएनए की संरचना में, दो स्ट्रैंड्स एक दूसरे के संबंध में कैसे होते हैं?",
        answers: shuffle([
            { text: "समानांतर (Parallel)", correct: false },
            { text: "प्रति-समानांतर (Anti-parallel)", correct: true },
            { text: "लंबवत (Perpendicular)", correct: false },
            { text: "यादृच्छिक (Random)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डीएनए के दो स्ट्रैंड्स एक दूसरे के प्रति-समानांतर (Anti-parallel) होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसका अर्थ है कि वे विपरीत दिशाओं में चलते हैं। एक स्ट्रैंड 5' से 3' दिशा में चलता है, जबकि दूसरा 3' से 5' दिशा में चलता है।"
    },
    {
        question: "प्रश्न 17. प्रोकैरियोटिक कोशिकाओं (जैसे बैक्टीरिया) में डीएनए कैसा होता है?",
        answers: shuffle([
            { text: "रैखिक और नाभिक में बंद", correct: false },
            { text: "गोलाकार और साइटोप्लाज्म में तैरता हुआ", correct: true },
            { text: "कई टुकड़ों में बंटा हुआ", correct: false },
            { text: "नाभिकीय झिल्ली से घिरा हुआ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोकैरियोटिक कोशिकाओं में एक सुव्यवस्थित नाभिक नहीं होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और उनका डीएनए आमतौर पर एक एकल, गोलाकार गुणसूत्र के रूप में साइटोप्लाज्म के एक क्षेत्र में होता है जिसे न्यूक्लियॉइड कहा जाता है।"
    },
    {
        question: "प्रश्न 18. हिस्टोन (Histones) क्या हैं?",
        answers: shuffle([
            { text: "आरएनए अणु", correct: false },
            { text: "वसा अणु", correct: false },
            { text: "प्रोटीन जो डीएनए को पैकेज करने में मदद करते हैं", correct: true },
            { text: "शर्करा अणु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिस्टोन यूकेरियोटिक कोशिकाओं के नाभिक में पाए जाने वाले क्षारीय प्रोटीन हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो डीएनए को क्रोमेटिन नामक संरचनात्मक इकाइयों में संघनित और पैकेज करते हैं।"
    },
    {
        question: "प्रश्न 19. डीएनए फिंगरप्रिंटिंग (DNA Fingerprinting) की तकनीक किसने विकसित की?",
        answers: shuffle([
            { text: "एलेक जेफ्रीज", correct: true },
            { text: "जेम्स वाटसन", correct: false },
            { text: "हरगोबिंद खुराना", correct: false },
            { text: "फ्रेडरिक सेंगर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सर एलेक जेफ्रीज ने 1984 में डीएनए फिंगरप्रिंटिंग की तकनीक विकसित की।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसका उपयोग फोरेंसिक विज्ञान और पितृत्व परीक्षण में बड़े पैमाने पर किया जाता है।"
    },
    {
        question: "प्रश्न 20. डीएनए के एक पूर्ण घुमाव (one complete turn) में कितने क्षार युग्म (base pairs) होते हैं?",
        answers: shuffle([
            { text: "8", correct: false },
            { text: "10", correct: true },
            { text: "12", correct: false },
            { text: "15", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डीएनए की B-फार्म संरचना में, जो सबसे आम है।<br><br><i class='fa-solid fa-angles-right icon'></i>  डबल हेलिक्स के प्रत्येक पूर्ण घुमाव में लगभग 10 से 10.5 क्षार युग्म होते हैं।"
    },
    {
        question: "प्रश्न 21. आरएनए (RNA) डीएनए (DNA) से किस क्षार की उपस्थिति में भिन्न होता है?",
        answers: shuffle([
            { text: "एडेनिन", correct: false },
            { text: "गुआनिन", correct: false },
            { text: "साइटोसिन", correct: false },
            { text: "यूरेसिल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आरएनए में थाइमिन (T) के स्थान पर यूरेसिल (U) नामक क्षार होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो एडेनिन (A) के साथ जुड़ता है।"
    },
    {
        question: "प्रश्न 22. वह एंजाइम कौन सा है जो डीएनए प्रतिकृति के दौरान डीएनए के स्ट्रैंड्स को अलग करता है?",
        answers: shuffle([
            { text: "पोलीमरेज़ (Polymerase)", correct: false },
            { text: "लाइगेज (Ligase)", correct: false },
            { text: "हेलिकेज (Helicase)", correct: true },
            { text: "प्राइमस (Primase)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेलिकेज एंजाइम डीएनए डबल हेलिक्स को खोलने का काम करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे प्रतिकृति के लिए प्रत्येक स्ट्रैंड का उपयोग टेम्पलेट के रूप में किया जा सके।"
    },
    {
        question: "प्रश्न 23. डीएनए पोलीमरेज़ (DNA Polymerase) का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "डीएनए के स्ट्रैंड्स को जोड़ना", correct: false },
            { text: "नए डीएनए स्ट्रैंड का संश्लेषण करना", correct: true },
            { text: "डीएनए की मरम्मत करना", correct: false },
            { text: "डीएनए को खोलना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डीएनए पोलीमरेज़ एक एंजाइम है जो मौजूदा डीएनए स्ट्रैंड को टेम्पलेट के रूप में उपयोग करके नए डीएनए स्ट्रैंड्स का संश्लेषण करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें न्यूक्लियोटाइड्स को जोड़ा जाता है।"
    },
    {
        question: "प्रश्न 24. \"सेंट्रल डोग्मा\" (Central Dogma) का सही क्रम क्या है?",
        answers: shuffle([
            { text: "प्रोटीन → आरएनए → डीएनए", correct: false },
            { text: "डीएनए → आरएनए → प्रोटीन", correct: true },
            { text: "आरएनए → डीएनए → प्रोटीन", correct: false },
            { text: "डीएनए → प्रोटीन → आरएनए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आणविक जीवविज्ञान का सेंट्रल डोग्मा आनुवंशिक जानकारी के प्रवाह का वर्णन करता है: डीएनए से आरएनए (ट्रांसक्रिप्शन) और फिर आरएनए से प्रोटीन (ट्रांसलेशन)।"
    },
    {
        question: "प्रश्न 25. क्रोमेटिन (Chromatin) क्या है?",
        answers: shuffle([
            { text: "डीएनए और आरएनए का एक जटिल", correct: false },
            { text: "डीएनए और प्रोटीन (हिस्टोन) का एक जटिल", correct: true },
            { text: "केवल डीएनए", correct: false },
            { text: "केवल प्रोटीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रोमेटिन यूकेरियोटिक कोशिकाओं में डीएनए और हिस्टोन जैसे प्रोटीन का एक जटिल संयोजन है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो गुणसूत्रों का निर्माण करता है।"
    },
    {
        question: "प्रश्न 26. डीएनए अणु पर कुल आवेश (charge) क्या होता है?",
        answers: shuffle([
            { text: "धनात्मक (Positive)", correct: false },
            { text: "ऋणात्मक (Negative)", correct: true },
            { text: "उदासीन (Neutral)", correct: false },
            { text: "कोई आवेश नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फॉस्फेट समूहों की उपस्थिति के कारण डीएनए अणु पर एक समग्र ऋणात्मक आवेश होता है।"
    },
    {
        question: "प्रश्न 27. कौन सा बंध एक न्यूक्लियोटाइड के फॉस्फेट समूह को अगले न्यूक्लियोटाइड की शर्करा से जोड़ता है?",
        answers: shuffle([
            { text: "हाइड्रोजन बंध", correct: false },
            { text: "ग्लाइकोसिडिक बंध", correct: false },
            { text: "फॉस्फोडाइएस्टर बंध", correct: true },
            { text: "पेप्टाइड बंध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फॉस्फोडाइएस्टर बंध डीएनए स्ट्रैंड की रीढ़ बनाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो एक न्यूक्लियोटाइड के 3' कार्बन को अगले न्यूक्लियोटाइड के 5' कार्बन से फॉस्फेट समूह के माध्यम से जोड़ते हैं।"
    },
    {
        question: "प्रश्न 28. टेलोमेयर (Telomere) का क्या कार्य है?",
        answers: shuffle([
            { text: "जीन को सक्रिय करना", correct: false },
            { text: "गुणसूत्रों के सिरों की रक्षा करना", correct: true },
            { text: "डीएनए प्रतिकृति शुरू करना", correct: false },
            { text: "प्रोटीन बनाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टेलोमेयर गुणसूत्रों के सिरों पर स्थित डीएनए के दोहराए जाने वाले अनुक्रम होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो उन्हें क्षरण या अन्य गुणसूत्रों के साथ संलयन से बचाते हैं।"
    },
    {
        question: "प्रश्न 29. प्लास्मिड (Plasmid) क्या है?",
        answers: shuffle([
            { text: "यूकेरियोटिक कोशिकाओं में पाया जाने वाला डीएनए", correct: false },
            { text: "बैक्टीरिया में मौजूद एक छोटा, गोलाकार डीएनए अणु", correct: true },
            { text: "एक प्रकार का वायरस", correct: false },
            { text: "एक प्रोटीन जो जीन को नियंत्रित करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्लास्मिड एक छोटा, बाह्य गुणसूत्र डीएनए अणु होता है जो बैक्टीरिया के भीतर पाया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और मुख्य गुणसूत्र से स्वतंत्र रूप से प्रतिकृति कर सकता है। इसका उपयोग अक्सर जेनेटिक इंजीनियरिंग में किया जाता है।"
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