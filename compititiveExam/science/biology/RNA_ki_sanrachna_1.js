const questions = [
    {
        topHeading: "आरएनए की संरचना और प्रकार पर आधारित 30 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. आरएनए (RNA) का पूरा नाम क्या है?",
        answers: shuffle([
            { text: "राइबो न्यूक्लिक एसिड", correct: true },
            { text: "राइबोजन्यूक्लिक एसिड", correct: false },
            { text: "राइबोन्यूक्लियर एसिड", correct: false },
            { text: "राइबोन्यूक्लियोटाइड एसिड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आरएनए का पूर्ण रूप राइबोन्यूक्लिक एसिड (Ribo Nucleic Acid) है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह एक न्यूक्लिक अम्ल है जो सभी जीवित कोशिकाओं में पाया जाता है।"
    },
    {
        question: "प्रश्न 2. निम्नलिखित में से कौन सा नाइट्रोजनस बेस आरएनए में पाया जाता है, लेकिन डीएनए में नहीं?",
        answers: shuffle([
            { text: "एडेनिन", correct: false },
            { text: "गुआनिन", correct: false },
            { text: "साइटोसिन", correct: false },
            { text: "यूरेसिल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आरएनए में थाइमिन (Thymine) के स्थान पर यूरेसिल (Uracil) नामक नाइट्रोजनस बेस होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो डीएनए में नहीं पाया जाता है।"
    },
    {
        question: "प्रश्न 3. आरएनए में कौन सी शर्करा (sugar) पाई जाती है?",
        answers: shuffle([
            { text: "डीऑक्सीराइबोज", correct: false },
            { text: "राइबोज", correct: true },
            { text: "सुक्रोज", correct: false },
            { text: "फ्रुक्टोज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आरएनए में राइबोज शर्करा होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जबकि डीएनए में डीऑक्सीराइबोज शर्करा पाई जाती है।"
    },
    {
        question: "प्रश्न 4. प्रोटीन संश्लेषण में सूचना वाहक के रूप में कौन सा आरएनए कार्य करता है?",
        answers: shuffle([
            { text: "mRNA (मैसेंजर आरएनए)", correct: true },
            { text: "tRNA (ट्रांसफर आरएनए)", correct: false },
            { text: "rRNA (राइबोसोमल आरएनए)", correct: false },
            { text: "snRNA (लघु नाभिकीय आरएनए)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मैसेंजर आरएनए (mRNA) डीएनए से आनुवंशिक कोड को राइबोसोम तक ले जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जहाँ प्रोटीन का संश्लेषण होता है।"
    },
    {
        question: "प्रश्न 5. अमीनो एसिड को राइबोसोम तक लाने का कार्य कौन सा आरएनए करता है?",
        answers: shuffle([
            { text: "mRNA", correct: false },
            { text: "tRNA", correct: true },
            { text: "rRNA", correct: false },
            { text: "miRNA", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ट्रांसफर आरएनए (tRNA) साइटोप्लाज्म से अमीनो एसिड को चुनकर राइबोसोम तक पहुंचाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  ताकि प्रोटीन श्रृंखला का निर्माण हो सके।"
    },
    {
        question: "प्रश्न 6. राइबोसोम का मुख्य संरचनात्मक घटक कौन सा आरएनए है?",
        answers: shuffle([
            { text: "mRNA", correct: false },
            { text: "tRNA", correct: false },
            { text: "rRNA", correct: true },
            { text: "siRNA", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राइबोसोमल आरएनए (rRNA) राइबोसोम का एक अभिन्न अंग है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और प्रोटीन संश्लेषण के दौरान पेप्टाइड बॉन्ड बनाने में उत्प्रेरक की भूमिका निभाता है।"
    },
    {
        question: "प्रश्न 7. आरएनए अणु की संरचना सामान्यतः कैसी होती है?",
        answers: shuffle([
            { text: "डबल हेलिक्स (Double Helix)", correct: false },
            { text: "सिंगल स्ट्रैंडेड (Single-stranded)", correct: true },
            { text: "ट्रिपल हेलिक्स (Triple Helix)", correct: false },
            { text: "गोलाकार (Circular)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डीएनए के विपरीत, आरएनए अणु आमतौर पर एक-सूत्री (single-stranded) होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  हालांकि यह अपने आप मुड़कर द्वितीयक संरचनाएं बना सकता है।"
    },
    {
        question: "प्रश्न 8. डीएनए से आरएनए बनने की प्रक्रिया को क्या कहते हैं?",
        answers: shuffle([
            { text: "प्रतिकृति (Replication)", correct: false },
            { text: "अनुवाद (Translation)", correct: false },
            { text: "प्रतिलेखन (Transcription)", correct: true },
            { text: "रूपांतरण (Transformation)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिलेखन या ट्रांसक्रिप्शन वह प्रक्रिया है जिसके द्वारा डीएनए के एक खंड से आरएनए अणु का निर्माण होता है।"
    },
    {
        question: "प्रश्न 9. कौन सा आरएनए जीन अभिव्यक्ति (gene expression) के नियमन में शामिल होता है?",
        answers: shuffle([
            { text: "mRNA", correct: false },
            { text: "tRNA", correct: false },
            { text: "rRNA", correct: false },
            { text: "miRNA (माइक्रो आरएनए)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माइक्रो आरएनए (miRNA) छोटे नॉन-कोडिंग आरएनए अणु होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो जीन साइलेंसिंग और पोस्ट-ट्रांसक्रिप्शनल नियमन में महत्वपूर्ण भूमिका निभाते हैं।"
    },
    {
        question: "प्रश्न 10. आरएनए के न्यूक्लियोटाइड में क्या-क्या शामिल होता है?",
        answers: shuffle([
            { text: "राइबोज शर्करा, फॉस्फेट समूह, और नाइट्रोजनस बेस", correct: true },
            { text: "डीऑक्सीराइबोज शर्करा, फॉस्फेट समूह, और नाइट्रोजनस बेस", correct: false },
            { text: "केवल राइबोज शर्करा और फॉस्फेट समूह", correct: false },
            { text: "केवल नाइट्रोजनस बेस और फॉस्फेट समूह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आरएनए का एक न्यूक्लियोटाइड तीन घटकों से मिलकर बना होता है: एक राइबोज शर्करा, एक फॉस्फेट समूह, और चार नाइट्रोजनस बेसों (A, U, G, C) में से एक।"
    },
    {
        question: "प्रश्न 11. कुछ वायरस में आनुवंशिक पदार्थ के रूप में क्या पाया जाता है?",
        answers: shuffle([
            { text: "केवल डीएनए", correct: false },
            { text: "केवल प्रोटीन", correct: false },
            { text: "आरएनए", correct: true },
            { text: "केवल कार्बोहाइड्रेट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कई वायरस, जैसे कि इन्फ्लूएंजा वायरस और एचआईवी (HIV), में आरएनए उनका मुख्य आनुवंशिक पदार्थ होता है, डीएनए नहीं।"
    },
    {
        question: "प्रश्न 12. स्प्लाइसिंग (Splicing) की प्रक्रिया में कौन सा आरएनए महत्वपूर्ण भूमिका निभाता है?",
        answers: shuffle([
            { text: "mRNA", correct: false },
            { text: "tRNA", correct: false },
            { text: "snRNA (लघु नाभिकीय आरएनए)", correct: true },
            { text: "rRNA", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लघु नाभिकीय आरएनए (snRNA) स्प्लाइसोसोम (spliceosome) का एक प्रमुख घटक है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो प्री-एमआरएनए से इंट्रॉन (introns) को हटाने और एक्सॉन (exons) को जोड़ने की प्रक्रिया में मदद करता है।"
    },
    {
        question: "प्रश्न 13. आरएनए अणु में न्यूक्लियोटाइड किस बंध द्वारा एक साथ जुड़े होते हैं?",
        answers: shuffle([
            { text: "हाइड्रोजन बंध", correct: false },
            { text: "फॉस्फोडाइएस्टर बंध", correct: true },
            { text: "पेप्टाइड बंध", correct: false },
            { text: "ग्लाइकोसिडिक बंध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आरएनए की रीढ़ (backbone) में, न्यूक्लियोटाइड एक-दूसरे से फॉस्फोडाइएस्टर बंध (Phosphodiester bond) द्वारा जुड़े होते हैं।"
    },
    {
        question: "प्रश्न 14. एंटीकोडोन (Anticodon) किस आरएनए अणु का हिस्सा है?",
        answers: shuffle([
            { text: "mRNA", correct: false },
            { text: "tRNA", correct: true },
            { text: "rRNA", correct: false },
            { text: "gRNA", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंटीकोडोन, tRNA अणु पर स्थित तीन न्यूक्लियोटाइड का एक क्रम है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो mRNA पर मौजूद कोडोन (codon) के पूरक होता है और सही अमीनो एसिड को पहचानने में मदद करता है।"
    },
    {
        question: "प्रश्न 15. आरएनए हस्तक्षेप (RNA interference - RNAi) की प्रक्रिया में कौन सा आरएनए उपयोग होता है?",
        answers: shuffle([
            { text: "siRNA (लघु इंटरफेरिंग आरएनए)", correct: true },
            { text: "mRNA", correct: false },
            { text: "tRNA", correct: false },
            { text: "rRNA", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लघु इंटरफेरिंग आरएनए (siRNA) एक डबल-स्ट्रैंडेड आरएनए अणु है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो आरएनए हस्तक्षेप (RNAi) मार्ग के माध्यम से विशिष्ट जीनों की अभिव्यक्ति को रोकता है।"
    },
    {
        question: "प्रश्न 16. राइबोजाइम (Ribozyme) क्या है?",
        answers: shuffle([
            { text: "एक प्रकार का प्रोटीन एंजाइम", correct: false },
            { text: "एक उत्प्रेरक आरएनए अणु", correct: true },
            { text: "एक प्रकार का लिपिड", correct: false },
            { text: "एक डीएनए अणु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राइबोजाइम एक आरएनए अणु है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो प्रोटीन एंजाइम की तरह रासायनिक प्रतिक्रियाओं को उत्प्रेरित करने की क्षमता रखता है।"
    },
    {
        question: "प्रश्न 17. रिवर्स ट्रांसक्रिप्शन (Reverse Transcription) की प्रक्रिया में क्या होता है?",
        answers: shuffle([
            { text: "डीएनए से प्रोटीन बनता है", correct: false },
            { text: "आरएनए से डीएनए बनता है", correct: true },
            { text: "आरएनए से प्रोटीन बनता है", correct: false },
            { text: "डीएनए से आरएनए बनता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रिवर्स ट्रांसक्रिप्शन एक प्रक्रिया है जिसमें रिवर्स ट्रांसक्रिप्टेज एंजाइम का उपयोग करके आरएनए टेम्पलेट से डीएनए का संश्लेषण किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह रेट्रोवायरस में आम है।"
    },
    {
        question: "प्रश्न 18. आरएनए और डीएनए में मुख्य अंतर क्या है?",
        answers: shuffle([
            { text: "शर्करा का प्रकार और एक नाइट्रोजनस बेस", correct: true },
            { text: "फॉस्फेट समूह की संरचना", correct: false },
            { text: "दोनों की लंबाई", correct: false },
            { text: "उनका कोशिका में स्थान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आरएनए में राइबोज शर्करा और यूरेसिल बेस होता है, जबकि डीएनए में डीऑक्सीराइबोज शर्करा और थाइमिन बेस होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  साथ ही, आरएनए आमतौर पर सिंगल-स्ट्रैंडेड होता है जबकि डीएनए डबल-स्ट्रैंडेड।"
    },
    {
        question: "प्रश्न 19. पॉली-ए टेल (Poly-A tail) किस आरएनए के सिरे पर जोड़ा जाता है?",
        answers: shuffle([
            { text: "tRNA", correct: false },
            { text: "rRNA", correct: false },
            { text: "यूकैरियोटिक mRNA", correct: true },
            { text: "प्रोकैरियोटिक mRNA", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पॉली-ए टेल, जो कई एडेनिन न्यूक्लियोटाइड की एक श्रृंखला है, को यूकैरियोटिक mRNA के 3' सिरे पर जोड़ा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह स्थिरता प्रदान करता है और न्यूक्लियस से बाहर परिवहन में मदद करता है।"
    },
    {
        question: "प्रश्न 20. सेंट्रल डोग्मा (Central Dogma) का सही क्रम क्या है?",
        answers: shuffle([
            { text: "प्रोटीन → आरएनए → डीएनए", correct: false },
            { text: "आरएनए → डीएनए → प्रोटीन", correct: false },
            { text: "डीएनए → आरएनए → प्रोटीन", correct: true },
            { text: "डीएनए → प्रोटीन → आरएनए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आणविक जीवविज्ञान का सेंट्रल डोग्मा बताता है कि आनुवंशिक सूचना का प्रवाह डीएनए से आरएनए (प्रतिलेखन) और फिर आरएनए से प्रोटीन (अनुवाद) तक होता है।"
    },
    {
        question: "प्रश्न 21. किस आरएनए का जीवनकाल सबसे कम होता है?",
        answers: shuffle([
            { text: "rRNA", correct: false },
            { text: "tRNA", correct: false },
            { text: "mRNA", correct: true },
            { text: "snRNA", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> mRNA का जीवनकाल आमतौर पर सबसे कम होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  क्योंकि कोशिका को आवश्यकतानुसार प्रोटीन के उत्पादन को जल्दी से नियंत्रित करने की आवश्यकता होती है।"
    },
    {
        question: "प्रश्न 22. आरएनए अणु में प्यूरीन (Purine) बेस कौन से हैं?",
        answers: shuffle([
            { text: "साइटोसिन और यूरेसिल", correct: false },
            { text: "एडेनिन और गुआनिन", correct: true },
            { text: "एडेनिन और थाइमिन", correct: false },
            { text: "गुआनिन और साइटोसिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आरएनए में प्यूरीन बेस एडेनिन (A) और गुआनिन (G) होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  पिरामिडीन बेस साइटोसिन (C) और यूरेसिल (U) होते हैं।"
    },
    {
        question: "प्रश्न 23. आरएनए पोलीमरेज़ (RNA Polymerase) एंजाइम का क्या कार्य है?",
        answers: shuffle([
            { text: "डीएनए की प्रतिकृति बनाना", correct: false },
            { text: "डीएनए टेम्पलेट से आरएनए का संश्लेषण करना", correct: true },
            { text: "प्रोटीन का संश्लेषण करना", correct: false },
            { text: "आरएनए को छोटे टुकड़ों में तोड़ना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आरएनए पोलीमरेज़ वह मुख्य एंजाइम है जो प्रतिलेखन (transcription) की प्रक्रिया के दौरान डीएनए को एक टेम्पलेट के रूप में उपयोग करके आरएनए अणु का निर्माण करता है।"
    },
    {
        question: "प्रश्न 24. कौन सा आरएनए कोशिका में मात्रा के हिसाब से सबसे प्रचुर मात्रा में होता है?",
        answers: shuffle([
            { text: "mRNA", correct: false },
            { text: "tRNA", correct: false },
            { text: "rRNA", correct: true },
            { text: "miRNA", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राइबोसोमल आरएनए (rRNA) कोशिका में कुल आरएनए का लगभग 80-90% हिस्सा बनाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  क्योंकि यह राइबोसोम की संरचना का एक प्रमुख हिस्सा है।"
    },
    {
        question: "प्रश्न 25. हेटेरोजेनस न्यूक्लियर आरएनए (hnRNA) क्या है?",
        answers: shuffle([
            { text: "tRNA का पूर्ववर्ती", correct: false },
            { text: "rRNA का पूर्ववर्ती", correct: false },
            { text: "mRNA का पूर्ववर्ती (प्री-एमआरएनए)", correct: true },
            { text: "एक प्रकार का वायरल आरएनए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूकैरियोटिक कोशिकाओं में, hnRNA या प्री-एमआरएनए, प्रतिलेखन द्वारा बनाया गया प्रारंभिक आरएनए अणु है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसे स्प्लाइसिंग और अन्य संशोधनों के बाद परिपक्व mRNA में परिवर्तित किया जाता है।"
    },
    {
        question: "प्रश्न 26. आरएनए अणु का 5' सिरा (5' end) आमतौर पर किससे समाप्त होता है?",
        answers: shuffle([
            { text: "एक हाइड्रोक्सिल समूह से", correct: false },
            { text: "एक फॉस्फेट समूह से", correct: true },
            { text: "एक मिथाइल समूह से", correct: false },
            { text: "एक अमीनो समूह से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आरएनए श्रृंखला का 5' सिरा आमतौर पर एक मुक्त फॉस्फेट समूह के साथ समाप्त होता है।"
    },
    {
        question: "प्रश्न 27. tRNA की त्रि-आयामी (3D) संरचना कैसी दिखती है?",
        answers: shuffle([
            { text: "सीधी रेखा जैसी", correct: false },
            { text: "डबल हेलिक्स जैसी", correct: false },
            { text: "उल्टे 'L' आकार की", correct: true },
            { text: "गोलाकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जबकि tRNA की द्वि-आयामी संरचना एक तिपतिया घास (cloverleaf) जैसी दिखती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसकी वास्तविक त्रि-आयामी संरचना एक मुड़े हुए या उल्टे 'L' अक्षर के समान होती है।"
    },
    {
        question: "प्रश्न 28. जेनेटिक कोड (Genetic Code) को पढ़ने और उसे अमीनो एसिड की भाषा में अनुवाद करने में कौन से दो आरएनए मुख्य रूप से शामिल होते हैं?",
        answers: shuffle([
            { text: "rRNA और snRNA", correct: false },
            { text: "mRNA और tRNA", correct: true },
            { text: "miRNA और siRNA", correct: false },
            { text: "mRNA और rRNA", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> mRNA जेनेटिक कोड को डीएनए से लाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और tRNA उस कोड को पढ़कर संबंधित अमीनो एसिड को प्रोटीन श्रृंखला में जोड़ता है।"
    },
    {
        question: "प्रश्न 29. टेलर आरएनए (Telomerase RNA) का क्या कार्य है?",
        answers: shuffle([
            { text: "प्रोटीन संश्लेषण को रोकना", correct: false },
            { text: "गुणसूत्रों के सिरों (टेलोमेयर) को बनाए रखना", correct: true },
            { text: "कोशिका विभाजन को नियंत्रित करना", correct: false },
            { text: "आरएनए को नष्ट करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टेलर आरएनए, टेलरमेज़ एंजाइम का एक घटक है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो गुणसूत्रों के सिरों, जिन्हें टेलोमेयर कहा जाता है, की लंबाई को बनाए रखने के लिए एक टेम्पलेट के रूप में कार्य करता है।"
    },
    {
        question: "प्रश्न 30. प्रोकैरियोटिक और यूकैरियोटिक राइबोसोम के rRNA में क्या अंतर होता है?",
        answers: shuffle([
            { text: "केवल प्रोकैरियोट्स में rRNA होता है", correct: false },
            { text: "उनके अवसादन गुणांक (Svedberg units) भिन्न होते हैं", correct: true },
            { text: "केवल यूकैरियोट्स में rRNA होता है", correct: false },
            { text: "कोई अंतर नहीं होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोकैरियोटिक राइबोसोम (70S) में 16S, 23S, और 5S rRNA होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जबकि यूकैरियोटिक राइबोसोम (80S) में 18S, 28S, 5.8S, और 5S rRNA होते हैं। यह अंतर एंटीबायोटिक दवाओं के लिए एक प्रमुख लक्ष्य है।"
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