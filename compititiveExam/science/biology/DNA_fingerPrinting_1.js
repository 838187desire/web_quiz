const questions = [
    {
        topHeading: "डीएनए फिंगरप्रिंटिंग पर आधारित 30 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. डीएनए फिंगरप्रिंटिंग तकनीक का विकास किसने किया था?",
        answers: shuffle([
            { text: "जेम्स वाटसन और फ्रांसिस क्रिक", correct: false },
            { text: "हरगोबिंद खुराना", correct: false },
            { text: "एलेक जेफ्रीज", correct: true },
            { text: "ग्रेगर मेंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्रिटिश आनुवंशिकीविद् सर एलेक जेफ्रीज ने 1984 में डीएनए फिंगरप्रिंटिंग तकनीक का विकास किया था।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसने फोरेंसिक विज्ञान में क्रांति ला दी।"
    },
    {
        question: "प्रश्न 2. डीएनए फिंगरप्रिंटिंग का मूल आधार क्या है?",
        answers: shuffle([
            { text: "सभी मनुष्यों का डीएनए 100% समान होता है।", correct: false },
            { text: "डीएनए में प्रोटीन का अनुक्रम।", correct: false },
            { text: "डीएनए बहुरूपता (DNA Polymorphism)।", correct: true },
            { text: "मनुष्यों में समान गुणसूत्रों की संख्या।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डीएनए फिंगरप्रिंटिंग इस तथ्य पर आधारित है कि यद्यपि अधिकांश डीएनए अनुक्रम सभी मनुष्यों में समान होते हैं, कुछ क्षेत्रों में उच्च स्तर की बहुरूपता (भिन्नता) होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो प्रत्येक व्यक्ति के लिए अद्वितीय होती है।"
    },
    {
        question: "प्रश्न 3. डीएनए फिंगरप्रिंटिंग में उपयोग किए जाने वाले 'VNTRs' का पूर्ण रूप क्या है?",
        answers: shuffle([
            { text: "वेरिएबल नंबर ऑफ थाइमिन रिपीट्स", correct: false },
            { text: "वेरी नैरो टैंडम रिपीट्स", correct: false },
            { text: "वेरिएबल नंबर ऑफ टैंडम रिपीट्स", correct: true },
            { text: "वेरिएबल न्यूक्लियोटाइड ऑफ टैंडम रिपीट्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> VNTRs (वेरिएबल नंबर ऑफ टैंडम रिपीट्स) डीएनए के वे खंड हैं जिनमें न्यूक्लियोटाइड का एक छोटा अनुक्रम कई बार दोहराया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इन दोहरावों की संख्या प्रत्येक व्यक्ति में भिन्न होती है।"
    },
    {
        question: "प्रश्न 4. डीएनए फिंगरप्रिंटिंग की प्रक्रिया में पॉलिमरेज़ चेन रिएक्शन (PCR) का क्या उपयोग है?",
        answers: shuffle([
            { text: "डीएनए को काटने के लिए", correct: false },
            { text: "डीएनए की मात्रा को बढ़ाने (प्रवर्धन) के लिए", correct: true },
            { text: "डीएनए खंडों को अलग करने के लिए", correct: false },
            { text: "डीएनए को रेडियोधर्मी बनाने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> PCR एक ऐसी तकनीक है जो किसी नमूने में मौजूद डीएनए की बहुत कम मात्रा की भी करोड़ों प्रतियां बना सकती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे विश्लेषण के लिए पर्याप्त डीएनए उपलब्ध हो जाता है।"
    },
    {
        question: "प्रश्न 5. डीएनए खंडों को उनके आकार के अनुसार अलग करने के लिए किस तकनीक का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "पीसीआर (PCR)", correct: false },
            { text: "सदर्न ब्लॉटिंग (Southern Blotting)", correct: false },
            { text: "जेल इलेक्ट्रोफोरेसिस (Gel Electrophoresis)", correct: true },
            { text: "ऑटोरेडियोग्राफी (Autoradiography)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जेल इलेक्ट्रोफोरेसिस में, डीएनए खंडों को एक जेल मैट्रिक्स के माध्यम से विद्युत धारा का उपयोग करके स्थानांतरित किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  छोटे खंड बड़े खंडों की तुलना में तेजी से और दूर तक जाते हैं।"
    },
    {
        question: "प्रश्न 6. डीएनए फिंगरप्रिंटिंग में 'रिस्ट्रिक्शन एंजाइम' (Restriction Enzymes) की क्या भूमिका है?",
        answers: shuffle([
            { text: "डीएनए को विशिष्ट स्थानों पर काटना", correct: true },
            { text: "डीएनए के टुकड़ों को जोड़ना", correct: false },
            { text: "डीएनए का प्रवर्धन करना", correct: false },
            { text: "डीएनए को नष्ट करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रिस्ट्रिक्शन एंजाइम, जिन्हें 'आणविक कैंची' भी कहा जाता है, डीएनए को विशिष्ट पहचान अनुक्रमों पर काटते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे विश्लेषण के लिए विभिन्न आकार के डीएनए खंड उत्पन्न होते हैं।"
    },
    {
        question: "प्रश्न 7. डीएनए फिंगरप्रिंटिंग के लिए नमूना कहाँ से प्राप्त किया जा सकता है?",
        answers: shuffle([
            { text: "रक्त", correct: false },
            { text: "लार", correct: false },
            { text: "बालों की जड़", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डीएनए शरीर की लगभग सभी कोशिकाओं में मौजूद होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसलिए रक्त, लार, वीर्य, त्वचा कोशिकाएं, बालों की जड़ें आदि सभी डीएनए फिंगरप्रिंटिंग के लिए नमूने के स्रोत हो सकते हैं।"
    },
    {
        question: "प्रश्न 8. जेल इलेक्ट्रोफोरेसिस के बाद डीएनए खंडों को नायलॉन झिल्ली पर स्थानांतरित करने की प्रक्रिया को क्या कहा जाता है?",
        answers: shuffle([
            { text: "नॉर्दर्न ब्लॉटिंग", correct: false },
            { text: "वेस्टर्न ब्लॉटिंग", correct: false },
            { text: "सदर्न ब्लॉटिंग", correct: true },
            { text: "ईस्टर्न ब्लॉटिंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सदर्न ब्लॉटिंग, जिसका नाम इसके आविष्कारक एडविन सदर्न के नाम पर रखा गया है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह जेल से डीएनए खंडों को एक झिल्ली पर स्थानांतरित करने की एक विधि है ताकि उन्हें आगे के विश्लेषण के लिए स्थिर किया जा सके।"
    },
    {
        question: "प्रश्न 9. डीएनए फिंगरप्रिंटिंग में 'प्रोब' (Probe) क्या है?",
        answers: shuffle([
            { text: "एक प्रकार का एंजाइम", correct: false },
            { text: "डीएनए का एक छोटा, रेडियोधर्मी लेबल वाला एकल-रज्जुक खंड", correct: true },
            { text: "डीएनए को अलग करने वाला जेल", correct: false },
            { text: "विद्युत धारा का स्रोत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोब एक ज्ञात डीएनए अनुक्रम होता है जिसे रेडियोधर्मी या फ्लोरोसेंट अणु से लेबल किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसका उपयोग झिल्ली पर मौजूद पूरक डीएनए अनुक्रमों (जैसे VNTRs) की पहचान करने के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 10. निम्नलिखित में से कौन सा डीएनए फिंगरप्रिंटिंग का एक अनुप्रयोग है?",
        answers: shuffle([
            { text: "अपराधों की फोरेंसिक जांच", correct: false },
            { text: "पितृत्व संबंधी विवादों का समाधान", correct: false },
            { text: "आनुवंशिक रोगों की पहचान", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डीएनए फिंगरप्रिंटिंग का उपयोग अपराध के दृश्यों से प्राप्त नमूनों का मिलान करने, माता-पिता-बच्चे के संबंधों को स्थापित करने और कुछ वंशानुगत बीमारियों के निदान में व्यापक रूप से किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  अतः उपरोक्त सभी सही हैं।"
    },
    {
        question: "प्रश्न 11. डीएनए फिंगरप्रिंटिंग में अंतिम पैटर्न को देखने के लिए किस तकनीक का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "पीसीआर (PCR)", correct: false },
            { text: "सेंट्रीफ्यूगेशन (Centrifugation)", correct: false },
            { text: "ऑटोरेडियोग्राफी (Autoradiography)", correct: true },
            { text: "क्रोमैटोग्राफी (Chromatography)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब रेडियोधर्मी प्रोब का उपयोग किया जाता है, तो झिल्ली को एक्स-रे फिल्म के संपर्क में रखा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिन स्थानों पर प्रोब डीएनए से जुड़ा होता है, वहां फिल्म पर काले बैंड दिखाई देते हैं, जिससे व्यक्ति का अद्वितीय डीएनए फिंगरप्रिंट बनता है। इस प्रक्रिया को ऑटोरेडियोग्राफी कहते हैं।"
    },
    {
        question: "प्रश्न 12. भारत में डीएनए फिंगरप्रिंटिंग और निदान केंद्र (CDFD) कहाँ स्थित है?",
        answers: shuffle([
            { text: "नई दिल्ली", correct: false },
            { text: "मुंबई", correct: false },
            { text: "हैदराबाद", correct: true },
            { text: "बैंगलोर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेंटर फॉर डीएनए फिंगरप्रिंटिंग एंड डायग्नोस्टिक्स (CDFD), हैदराबाद, भारत में डीएनए विश्लेषण, निदान और अनुसंधान के लिए एक प्रमुख संस्थान है।"
    },
    {
        question: "प्रश्न 13. डीएनए अणु पर किस प्रकार का आवेश (Charge) होता है, जो इसे इलेक्ट्रोफोरेसिस में स्थानांतरित करने में मदद करता है?",
        answers: shuffle([
            { text: "धनात्मक (Positive)", correct: false },
            { text: "ऋणात्मक (Negative)", correct: true },
            { text: "उदासीन (Neutral)", correct: false },
            { text: "कोई आवेश नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डीएनए अणु में फॉस्फेट समूहों की उपस्थिति के कारण इस पर एक समग्र ऋणात्मक आवेश होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसी कारण यह जेल इलेक्ट्रोफोरेसिस में धनात्मक इलेक्ट्रोड (एनोड) की ओर बढ़ता है।"
    },
    {
        question: "प्रश्न 14. सैटेलाइट डीएनए (Satellite DNA) का क्या महत्व है?",
        answers: shuffle([
            { text: "यह प्रोटीन को कोड करता है", correct: false },
            { text: "यह डीएनए बहुरूपता का आधार बनता है", correct: true },
            { text: "यह कोशिका विभाजन को नियंत्रित करता है", correct: false },
            { text: "यह ऊर्जा का उत्पादन करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सैटेलाइट डीएनए जीनोम के गैर-कोडिंग हिस्से होते हैं जिनमें डीएनए अनुक्रमों का उच्च दोहराव होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  VNTRs और STRs इसी का हिस्सा हैं और डीएनए फिंगरप्रिंटिंग के लिए बहुरूपता प्रदान करते हैं।"
    },
    {
        question: "प्रश्न 15. डीएनए फिंगरप्रिंटिंग का दूसरा नाम क्या है?",
        answers: shuffle([
            { text: "डीएनए प्रोफाइलिंग (DNA Profiling)", correct: true },
            { text: "जीन मैपिंग (Gene Mapping)", correct: false },
            { text: "डीएनए सीक्वेंसिंग (DNA Sequencing)", correct: false },
            { text: "जेनेटिक इंजीनियरिंग (Genetic Engineering)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डीएनए फिंगरप्रिंटिंग को अधिक वैज्ञानिक रूप से डीएनए प्रोफाइलिंग या जेनेटिक फिंगरप्रिंटिंग भी कहा जाता है।"
    },
    {
        question: "प्रश्न 16. STRs का पूर्ण रूप क्या है, जो आजकल डीएनए प्रोफाइलिंग में अधिक उपयोग किए जाते हैं?",
        answers: shuffle([
            { text: "सिंगल टैंडम रिपीट्स", correct: false },
            { text: "शॉर्ट टैंडम रिपीट्स", correct: true },
            { text: "सुपर टैंडम रिपीट्स", correct: false },
            { text: "स्टैंडर्ड टैंडम रिपीट्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> STRs (शॉर्ट टैंडम रिपीट्स) VNTRs की तुलना में छोटे होते हैं (आमतौर पर 2-6 क्षार युग्म लंबे)।<br><br><i class='fa-solid fa-angles-right icon'></i>  पीसीआर द्वारा इनका विश्लेषण करना आसान होता है, इसलिए आधुनिक फोरेंसिक में इनका अधिक उपयोग होता है।"
    },
    {
        question: "प्रश्न 17. पितृत्व परीक्षण में, बच्चे का डीएनए फिंगरप्रिंट किससे मेल खाना चाहिए?",
        answers: shuffle([
            { text: "केवल माता से", correct: false },
            { text: "केवल पिता से", correct: false },
            { text: "माता और जैविक पिता दोनों से", correct: true },
            { text: "किसी भी करीबी रिश्तेदार से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक बच्चे को अपना आधा डीएनए अपनी माता से और आधा अपने जैविक पिता से विरासत में मिलता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसलिए, बच्चे के डीएनए प्रोफाइल में बैंड का लगभग आधा हिस्सा माँ के प्रोफाइल से और आधा पिता के प्रोफाइल से मेल खाना चाहिए।"
    },
    {
        question: "प्रश्न 18. डीएनए फिंगरप्रिंटिंग तकनीक किस तथ्य का लाभ उठाती है?",
        answers: shuffle([
            { text: "दो व्यक्तियों का डीएनए 99.9% समान होता है।", correct: false },
            { text: "दो व्यक्तियों का डीएनए 0.1% भिन्न होता है।", correct: true },
            { text: "डीएनए केवल रक्त में पाया जाता है।", correct: false },
            { text: "डीएनए समय के साथ बदलता रहता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हालांकि दो मनुष्यों (गैर-समान जुड़वां) के बीच 99.9% डीएनए समान होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  लेकिन शेष 0.1% भिन्नता (लगभग 3 मिलियन क्षार) ही उन्हें अद्वितीय डीएनए प्रोफाइल प्रदान करने के लिए पर्याप्त है।"
    },
    {
        question: "प्रश्न 19. RFLP विश्लेषण में 'RFLP' का क्या अर्थ है?",
        answers: shuffle([
            { text: "रैंडम फ्रेगमेंट लेंथ पॉलीपेप्टाइड", correct: false },
            { text: "रिस्ट्रिक्शन फ्रेगमेंट लेंथ पॉलीमॉर्फिज्म", correct: true },
            { text: "रैपिड फ्रेगमेंट लॉन्ग पॉलीपेप्टाइड", correct: false },
            { text: "रिस्ट्रिक्शन फोरेंसिक लेंथ प्रोफाइल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> RFLP का अर्थ रिस्ट्रिक्शन फ्रेगमेंट लेंथ पॉलीमॉर्फिज्म है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह डीएनए फिंगरप्रिंटिंग की शुरुआती तकनीकों में से एक थी, जो रिस्ट्रिक्शन एंजाइमों द्वारा काटे गए डीएनए खंडों की लंबाई में भिन्नता पर आधारित थी।"
    },
    {
        question: "प्रश्न 20. आपदा पीड़ितों की पहचान के लिए डीएनए फिंगरप्रिंटिंग में किससे मिलान किया जाता है?",
        answers: shuffle([
            { text: "अपराध स्थल से मिले नमूने से", correct: false },
            { text: "संदिग्ध व्यक्ति के नमूने से", correct: false },
            { text: "पीड़ित के करीबी रिश्तेदारों या व्यक्तिगत सामानों से", correct: true },
            { text: "किसी भी यादृच्छिक व्यक्ति से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आपदाओं (जैसे विमान दुर्घटना, प्राकृतिक आपदा) में शवों की पहचान के लिए, अज्ञात शव से प्राप्त डीएनए का मिलान उनके परिवार के सदस्यों (माता-पिता, बच्चे) या उनके निजी सामान (जैसे टूथब्रश) से मिले डीएनए से किया जाता है।"
    },
    {
        question: "प्रश्न 21. यदि अपराध स्थल पर केवल एक बाल मिलता है, तो डीएनए विश्लेषण के लिए सबसे महत्वपूर्ण हिस्सा कौन सा है?",
        answers: shuffle([
            { text: "बाल का सिरा (Tip)", correct: false },
            { text: "बाल का शाफ्ट (Shaft)", correct: false },
            { text: "बाल की जड़ (Follicle/Root)", correct: true },
            { text: "बाल का रंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाल की जड़ (Follicle/Root) में नाभिकीय डीएनए वाली कोशिकाएं होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो पूर्ण डीएनए प्रोफाइल बनाने के लिए आवश्यक हैं। बाल के शाफ्ट में केवल माइटोकॉन्ड्रियल डीएनए होता है।"
    },
    {
        question: "प्रश्न 22. CODIS क्या है?",
        answers: shuffle([
            { text: "एक प्रकार का रिस्ट्रिक्शन एंजाइम", correct: false },
            { text: "डीएनए फिंगरप्रिंटिंग की एक नई तकनीक", correct: false },
            { text: "अमेरिका द्वारा बनाए रखा गया एक राष्ट्रीय डीएनए डेटाबेस", correct: true },
            { text: "एक डीएनए अनुक्रमण मशीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> CODIS (कंबाइंड डीएनए इंडेक्स सिस्टम) एफबीआई द्वारा प्रबंधित एक डीएनए डेटाबेस है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसका उपयोग स्थानीय, राज्य और राष्ट्रीय स्तर पर अपराध प्रयोगशालाओं द्वारा अपराध स्थल के डीएनए प्रोफाइल को अपराधियों के प्रोफाइल से मिलाने के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 23. जुड़वां बच्चों के मामले में, किनका डीएनए फिंगरप्रिंट लगभग समान होगा?",
        answers: shuffle([
            { text: "भ्रातृ जुड़वां (Fraternal twins)", correct: false },
            { text: "समरूप जुड़वां (Identical twins)", correct: true },
            { text: "किसी भी प्रकार के जुड़वां", correct: false },
            { text: "जुड़वां का डीएनए समान नहीं हो सकता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समरूप (आइडेंटिकल) जुड़वां एक ही निषेचित अंडे से विकसित होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसलिए उनका डीएनए 100% समान होता है, जिसके परिणामस्वरूप एक ही डीएनए फिंगरप्रिंट होता है।"
    },
    {
        question: "प्रश्न 24. डीएनए फिंगरप्रिंटिंग के लिए डीएनए को कोशिकाओं से बाहर निकालने की प्रक्रिया को क्या कहते हैं?",
        answers: shuffle([
            { text: "डीएनए प्रवर्धन (Amplification)", correct: false },
            { text: "डीएनए निष्कर्षण (Extraction)", correct: true },
            { text: "डीएनए संकरण (Hybridization)", correct: false },
            { text: "डीएनए स्थानांतरण (Blotting)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डीएनए निष्कर्षण या आइसोलेशन डीएनए फिंगरप्रिंटिंग का पहला कदम है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें कोशिका झिल्ली और नाभिक को तोड़कर डीएनए को अन्य सेलुलर घटकों से अलग किया जाता है।"
    },
    {
        question: "प्रश्न 25. फोरेंसिक विज्ञान में डीएनए फिंगरप्रिंटिंग का सबसे बड़ा लाभ क्या है?",
        answers: shuffle([
            { text: "यह बहुत तेज प्रक्रिया है", correct: false },
            { text: "यह बहुत सस्ती तकनीक है", correct: false },
            { text: "यह पहचान की एक अत्यंत सटीक और विश्वसनीय विधि है", correct: true },
            { text: "इसके लिए बड़े नमूने की आवश्यकता होती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डीएनए फिंगरप्रिंटिंग की सटीकता बहुत अधिक है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे अपराधों को सुलझाने और व्यक्तियों की पहचान करने में यह एक शक्तिशाली और विश्वसनीय उपकरण बन गया है।"
    },
    {
        question: "प्रश्न 26. माइटोकॉन्ड्रियल डीएनए (mtDNA) विश्लेषण कब उपयोगी होता है?",
        answers: shuffle([
            { text: "पितृत्व परीक्षण के लिए", correct: false },
            { text: "जब नाभिकीय डीएनए का नमूना खराब या अपर्याप्त हो", correct: true },
            { text: "लिंग निर्धारण के लिए", correct: false },
            { text: "सभी मामलों में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> mtDNA केवल माँ से विरासत में मिलता है और कोशिकाओं में इसकी हजारों प्रतियां होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसलिए, पुराने या खराब नमूनों (जैसे बिना जड़ वाले बाल, पुरानी हड्डियां) के लिए यह उपयोगी है जहाँ नाभिकीय डीएनए नष्ट हो चुका हो।"
    },
    {
        question: "प्रश्न 27. किस प्रकार का डीएनए डीएनए फिंगरप्रिंटिंग में उपयोग किए जाने वाले बहुरूपता को दर्शाता है?",
        answers: shuffle([
            { text: "कोडिंग डीएनए", correct: false },
            { text: "गैर-कोडिंग डीएनए", correct: true },
            { text: "राइबोसोमल डीएनए", correct: false },
            { text: "ट्रांसफर डीएनए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> VNTRs और STRs जैसे बहुरूपी मार्कर जीनोम के गैर-कोडिंग क्षेत्रों में पाए जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  इन क्षेत्रों में कोडिंग क्षेत्रों की तुलना में उत्परिवर्तन दर अधिक होती है, जिससे अधिक भिन्नता पैदा होती है।"
    },
    {
        question: "प्रश्न 28. \"चेन ऑफ कस्टडी\" का डीएनए फोरेंसिक में क्या महत्व है?",
        answers: shuffle([
            { text: "यह डीएनए की रासायनिक संरचना को संदर्भित करता है", correct: false },
            { text: "यह सुनिश्चित करता है कि साक्ष्य को संभालने का एक उचित रिकॉर्ड रखा गया है", correct: true },
            { text: "यह डीएनए डेटाबेस का नाम है", correct: false },
            { text: "यह पीसीआर मशीन का एक हिस्सा है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चेन ऑफ कस्टडी एक प्रक्रिया है जो संग्रह से लेकर विश्लेषण तक साक्ष्य को संभालने वाले प्रत्येक व्यक्ति का दस्तावेजीकरण करती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह सुनिश्चित करता है कि साक्ष्य के साथ छेड़छाड़ या संदूषण नहीं हुआ है और वह अदालत में स्वीकार्य है।"
    },
    {
        question: "प्रश्न 29. मानव जीनोम परियोजना (Human Genome Project) ने डीएनए फिंगरप्रिंटिंग को कैसे मदद की?",
        answers: shuffle([
            { text: "इसने डीएनए फिंगरप्रिंटिंग को अवैध बना दिया", correct: false },
            { text: "इसने बहुरूपी मार्करों की पहचान और मैपिंग में मदद की", correct: true },
            { text: "इसने रिस्ट्रिक्शन एंजाइमों की खोज की", correct: false },
            { text: "इसका डीएनए फिंगरप्रिंटिंग से कोई संबंध नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मानव जीनोम परियोजना ने पूरे मानव जीनोम का नक्शा तैयार किया।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे वैज्ञानिकों को विश्लेषण के लिए नए और बेहतर बहुरूपी मार्करों (जैसे STRs) की पहचान करने में मदद मिली, जिससे डीएनए प्रोफाइलिंग अधिक कुशल और सटीक हो गई।"
    },
    {
        question: "प्रश्न 30. डीएनए फिंगरप्रिंटिंग में, बैंड का पैटर्न क्या दर्शाता है?",
        answers: shuffle([
            { text: "व्यक्ति की आयु", correct: false },
            { text: "व्यक्ति की स्वास्थ्य स्थिति", correct: false },
            { text: "व्यक्ति के डीएनए में विशिष्ट दोहराए जाने वाले अनुक्रमों की उपस्थिति", correct: true },
            { text: "व्यक्ति के रक्त का प्रकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंतिम ऑटोरेडियोग्राम पर प्रत्येक बैंड एक विशिष्ट VNTR या STR एलील का प्रतिनिधित्व करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इन बैंडों का अद्वितीय पैटर्न व्यक्ति की आनुवंशिक पहचान बनाता है।"
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