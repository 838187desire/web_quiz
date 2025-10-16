const questions = [
    {
        topHeading: "मानव जीनोम परियोजना पर आधारित 30 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. मानव जीनोम परियोजना (HGP) का मुख्य उद्देश्य क्या था?",
        answers: shuffle([
            { text: "मानव में प्रोटीन की संरचना का पता लगाना", correct: false },
            { text: "मानव डीएनए में मौजूद सभी जीनों की पहचान और अनुक्रमण करना", correct: true },
            { text: "आनुवंशिक विकारों के लिए दवाएं बनाना", correct: false },
            { text: "मानव विकास का अध्ययन करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> HGP का प्राथमिक लक्ष्य मानव जीनोम में मौजूद लगभग 3 बिलियन रासायनिक क्षार युग्मों (base pairs) के अनुक्रम को निर्धारित करना और सभी मानव जीनों की पहचान करना था।"
    },
    {
        question: "प्रश्न 2. मानव जीनोम परियोजना आधिकारिक तौर पर किस वर्ष शुरू हुई थी?",
        answers: shuffle([
            { text: "1980", correct: false },
            { text: "1990", correct: true },
            { text: "2000", correct: false },
            { text: "2003", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मानव जीनोम परियोजना एक अंतरराष्ट्रीय वैज्ञानिक अनुसंधान परियोजना थी।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो आधिकारिक तौर पर 1 अक्टूबर, 1990 को शुरू हुई थी।"
    },
    {
        question: "प्रश्न 3. मानव जीनोम परियोजना किस वर्ष में पूर्ण घोषित की गई थी?",
        answers: shuffle([
            { text: "1999", correct: false },
            { text: "2001", correct: false },
            { text: "2003", correct: true },
            { text: "2005", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> HGP को निर्धारित समय से दो साल पहले अप्रैल 2003 में सफलतापूर्वक पूरा घोषित किया गया था।"
    },
    {
        question: "प्रश्न 4. मानव जीनोम में अनुमानित कितने जीन पाए गए हैं?",
        answers: shuffle([
            { text: "लगभग 100,000", correct: false },
            { text: "लगभग 50,000", correct: false },
            { text: "लगभग 20,000 - 25,000", correct: true },
            { text: "1 मिलियन से अधिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परियोजना के निष्कर्षों ने जीनों की संख्या को बहुत कम, लगभग 20,000 से 25,000 तक संशोधित किया।<br><br><i class='fa-solid fa-angles-right icon'></i>  HGP से पहले, यह अनुमान 80,000 से 100,000 जीन का था।"
    },
    {
        question: "प्रश्न 5. मानव जीनोम का कितना प्रतिशत हिस्सा प्रोटीन-कोडिंग (प्रोटीन बनाने वाले) जीनों का है?",
        answers: shuffle([
            { text: "50% से अधिक", correct: false },
            { text: "लगभग 25%", correct: false },
            { text: "लगभग 10%", correct: false },
            { text: "2% से कम", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परियोजना का एक आश्चर्यजनक परिणाम यह था कि मानव जीनोम का एक बहुत छोटा हिस्सा (2% से भी कम) ही प्रोटीन के लिए कोड करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  शेष डीएनए का अधिकांश भाग गैर-कोडिंग है।"
    },
    {
        question: "प्रश्न 6. HGP के अनुसार, किन्हीं भी दो मनुष्यों के बीच डीएनए स्तर पर कितनी समानता होती है?",
        answers: shuffle([
            { text: "90%", correct: false },
            { text: "95.5%", correct: false },
            { text: "99.9%", correct: true },
            { text: "100%", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> HGP ने पुष्टि की कि सभी मनुष्य, चाहे उनकी नस्ल या जातीयता कुछ भी हो, डीएनए स्तर पर 99.9% समान हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  शेष 0.1% भिन्नता ही व्यक्तियों के बीच अद्वितीय अंतरों के लिए जिम्मेदार है।"
    },
    {
        question: "प्रश्न 7. HGP में डीएनए अनुक्रमण के लिए किस तकनीक का व्यापक रूप से उपयोग किया गया था?",
        answers: shuffle([
            { text: "पीसीआर (PCR)", correct: false },
            { text: "डीएनए फिंगरप्रिंटिंग", correct: false },
            { text: "सैंगर अनुक्रमण (Sanger Sequencing)", correct: true },
            { text: "आरएनए इंटरफेरेंस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फ्रेडरिक सैंगर द्वारा विकसित डाइडीऑक्सी चेन टर्मिनेशन विधि, जिसे सैंगर अनुक्रमण (Sanger Sequencing) के रूप में जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह HGP के दौरान डीएनए अनुक्रमण के लिए मुख्य तकनीक थी।"
    },
    {
        question: "प्रश्न 8. HGP का एक महत्वपूर्ण घटक 'ELSI' था। ELSI का पूर्ण रूप क्या है?",
        answers: shuffle([
            { text: "Ethical, Legal, and Social Issues (नैतिक, कानूनी और सामाजिक मुद्दे)", correct: true },
            { text: "Electronic, Logical, and Systematic Information", correct: false },
            { text: "Enzyme-Linked Sorbent Investigation", correct: false },
            { text: "Eukaryotic Loci Sequencing Initiative", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> HGP ने अपने बजट का एक हिस्सा नैतिक, कानूनी और सामाजिक मुद्दों (ELSI) के अध्ययन के लिए समर्पित किया।<br><br><i class='fa-solid fa-angles-right icon'></i>  ताकि आनुवंशिक जानकारी के दुरुपयोग को रोका जा सके।"
    },
    {
        question: "प्रश्न 9. किस मानव गुणसूत्र में सबसे अधिक जीन होते हैं?",
        answers: shuffle([
            { text: "गुणसूत्र X", correct: false },
            { text: "गुणसूत्र Y", correct: false },
            { text: "गुणसूत्र 1", correct: true },
            { text: "गुणसूत्र 21", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मानव गुणसूत्र 1 सबसे बड़ा है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और इसमें सबसे अधिक संख्या में जीन (लगभग 2968 जीन) होते हैं।"
    },
    {
        question: "प्रश्न 10. किस मानव गुणसूत्र में सबसे कम जीन होते हैं?",
        answers: shuffle([
            { text: "गुणसूत्र X", correct: false },
            { text: "गुणसूत्र Y", correct: true },
            { text: "गुणसूत्र 18", correct: false },
            { text: "गुणसूत्र 22", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> Y गुणसूत्र सबसे छोटे मानव गुणसूत्रों में से एक है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और इसमें सबसे कम संख्या में जीन (लगभग 231 जीन) होते हैं।"
    },
    {
        question: "प्रश्न 11. वह विज्ञान जो जीनोमिक डेटा के संग्रह, भंडारण और विश्लेषण के लिए कंप्यूटर विज्ञान का उपयोग करता है, क्या कहलाता है?",
        answers: shuffle([
            { text: "जैव प्रौद्योगिकी (Biotechnology)", correct: false },
            { text: "जैव सूचना विज्ञान (Bioinformatics)", correct: true },
            { text: "आणविक जीवविज्ञान (Molecular Biology)", correct: false },
            { text: "आनुवंशिकी (Genetics)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> HGP द्वारा उत्पन्न भारी मात्रा में डेटा को प्रबंधित और विश्लेषण करने के लिए जैव सूचना विज्ञान (Bioinformatics) का विकास महत्वपूर्ण था।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह जीनोमिक डेटा के लिए कंप्यूटर विज्ञान का उपयोग करता है।"
    },
    {
        question: "प्रश्न 12. HGP ने मानव जीनोम के अलावा कुछ 'मॉडल जीवों' के जीनोम का भी अनुक्रमण किया। निम्नलिखित में से कौन एक मॉडल जीव नहीं था?",
        answers: shuffle([
            { text: "ई. कोलाई (बैक्टीरिया)", correct: false },
            { text: "यीस्ट (कवक)", correct: false },
            { text: "ड्रोसोफिला (फल मक्खी)", correct: false },
            { text: "डायनासोर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मॉडल जीवों (जैसे बैक्टीरिया, यीस्ट, फल मक्खी, चूहा) के जीनोम का अनुक्रमण मानव जीनों के कार्यों को समझने में मदद के लिए किया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i>  डायनासोर विलुप्त हो चुके हैं और उनका डीएनए उपलब्ध नहीं था।"
    },
    {
        question: "प्रश्न 13. 'जीनोम' शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "एक कोशिका में सभी प्रोटीनों का सेट", correct: false },
            { text: "एक जीव के डीएनए का संपूर्ण सेट", correct: true },
            { text: "केवल प्रोटीन बनाने वाले जीन", correct: false },
            { text: "एक कोशिका का नाभिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीनोम एक जीव में मौजूद संपूर्ण आनुवंशिक सामग्री (डीएनए) है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें उसके सभी जीन और गैर-कोडिंग अनुक्रम शामिल होते हैं।"
    },
    {
        question: "प्रश्न 14. HGP में डीएनए के बड़े टुकड़ों को क्लोन करने के लिए उपयोग किए जाने वाले वाहक (vectors) कौन से थे?",
        answers: shuffle([
            { text: "प्लास्मिड (Plasmids)", correct: false },
            { text: "BAC और YAC", correct: true },
            { text: "कॉस्मिड (Cosmids)", correct: false },
            { text: "बैक्टीरियोफेज (Bacteriophages)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> BAC (बैक्टीरियल आर्टिफिशियल क्रोमोसोम) और YAC (यीस्ट आर्टिफिशियल क्रोमोसोम) डीएनए के बड़े खंडों को ले जाने और क्लोन करने में सक्षम वाहक हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो जीनोम को अनुक्रमित करने के लिए आवश्यक थे।"
    },
    {
        question: "प्रश्न 15. मानव जीनोम परियोजना मुख्य रूप से किन दो अमेरिकी एजेंसियों द्वारा शुरू की गई थी?",
        answers: shuffle([
            { text: "NASA और FDA", correct: false },
            { text: "U.S. ऊर्जा विभाग (DOE) और राष्ट्रीय स्वास्थ्य संस्थान (NIH)", correct: true },
            { text: "CIA और FBI", correct: false },
            { text: "USDA और EPA", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह विशाल परियोजना संयुक्त राज्य अमेरिका के ऊर्जा विभाग (DOE) और राष्ट्रीय स्वास्थ्य संस्थान (NIH) के बीच एक संयुक्त प्रयास के रूप में शुरू हुई।"
    },
    {
        question: "प्रश्न 16. निजी क्षेत्र की किस कंपनी ने HGP के साथ प्रतिस्पर्धा में मानव जीनोम का अनुक्रमण किया?",
        answers: shuffle([
            { text: "जेनेनटेक (Genentech)", correct: false },
            { text: "सेलेरा जीनोमिक्स (Celera Genomics)", correct: true },
            { text: "एमजेन (Amgen)", correct: false },
            { text: "बायो-रेड (Bio-Rad)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रेग वेंटर के नेतृत्व में सेलेरा जीनोमिक्स (Celera Genomics) ने एक अलग, तेज 'शॉटगन' अनुक्रमण विधि का उपयोग करके सार्वजनिक परियोजना के साथ प्रतिस्पर्धा की।"
    },
    {
        question: "प्रश्न 17. HGP के निष्कर्षों का किस क्षेत्र में सबसे अधिक प्रभाव पड़ा है?",
        answers: shuffle([
            { text: "कृषि", correct: false },
            { text: "चिकित्सा और रोग निदान", correct: true },
            { text: "कंप्यूटर विज्ञान", correct: false },
            { text: "अंतरिक्ष अन्वेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> HGP ने हजारों आनुवंशिक विकारों के लिए जीन की पहचान करने में मदद की है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे बेहतर निदान, उपचार और व्यक्तिगत दवा (pharmacogenomics) का मार्ग प्रशस्त हुआ है।"
    },
    {
        question: "प्रश्न 18. 'एक्सप्रेस्ड सीक्वेंस टैग्स' (ESTs) किस पर आधारित होते हैं?",
        answers: shuffle([
            { text: "डीएनए", correct: false },
            { text: "आरएनए (RNA)", correct: true },
            { text: "प्रोटीन", correct: false },
            { text: "कार्बोहाइड्रेट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ESTs जीनों की पहचान करने की एक विधि है जो मैसेंजर आरएनए (mRNA) को एक टेम्पलेट के रूप में उपयोग करती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  क्योंकि mRNA केवल उन जीनों का प्रतिनिधित्व करता है जो एक कोशिका में सक्रिय रूप से व्यक्त (expressed) हो रहे हैं।"
    },
    {
        question: "प्रश्न 19. मानव जीनोम का एक बड़ा हिस्सा 'पुनरावृत्ति डीएनए' (Repetitive DNA) से बना है। इसका क्या अर्थ है?",
        answers: shuffle([
            { text: "डीएनए अनुक्रम जो प्रोटीन के लिए कोड करते हैं", correct: false },
            { text: "डीएनए अनुक्रम जो बार-बार दोहराए जाते हैं", correct: true },
            { text: "डीएनए अनुक्रम जो केवल एक बार मौजूद होते हैं", correct: false },
            { text: "डीएनए जो कोशिका विभाजन के दौरान दोहराया जाता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये डीएनए के खिंचाव हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिनमें न्यूक्लियोटाइड के छोटे अनुक्रम बार-बार दोहराए जाते हैं। ये जीनोम का एक महत्वपूर्ण हिस्सा बनाते हैं।"
    },
    {
        question: "प्रश्न 20. HGP द्वारा किस आनुवंशिक विकार से संबंधित जीन की पहचान सबसे पहले की गई थी?",
        answers: shuffle([
            { text: "सिस्टिक फाइब्रोसिस", correct: true },
            { text: "हटिंगटन रोग", correct: false },
            { text: "सिकल-सेल एनीमिया", correct: false },
            { text: "हीमोफिलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिस्टिक फाइब्रोसिस के लिए जिम्मेदार जीन (CFTR जीन) की खोज 1989 में हुई थी।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो HGP के आधिकारिक लॉन्च से ठीक पहले की एक महत्वपूर्ण सफलता थी और इसने परियोजना के लिए गति निर्धारित की।"
    },
    {
        question: "प्रश्न 21. 'फार्माकोजीनोमिक्स' (Pharmacogenomics) का अध्ययन क्या है?",
        answers: shuffle([
            { text: "फार्मास्यूटिकल्स का इतिहास", correct: false },
            { text: "किसी व्यक्ति की आनुवंशिक संरचना के आधार पर दवाओं पर उसकी प्रतिक्रिया का अध्ययन", correct: true },
            { text: "दवा बनाने की प्रक्रिया", correct: false },
            { text: "पौधों से दवाएं निकालना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> HGP ने फार्माकोजीनोमिक्स के क्षेत्र को बढ़ावा दिया।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसका लक्ष्य प्रत्येक व्यक्ति के जीनोम के अनुरूप व्यक्तिगत दवाएं विकसित करना है ताकि प्रभावशीलता बढ़े और दुष्प्रभाव कम हों।"
    },
    {
        question: "प्रश्न 22. HGP के सार्वजनिक प्रयास ने किस अनुक्रमण रणनीति का उपयोग किया?",
        answers: shuffle([
            { text: "होल जीनोम शॉटगन", correct: false },
            { text: "क्लोन-दर-क्लोन अनुक्रमण", correct: true },
            { text: "आरएनए-सेक", correct: false },
            { text: "पायरोसेक्वेंसिंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सार्वजनिक परियोजना ने एक व्यवस्थित, धीमी लेकिन अधिक सटीक विधि का उपयोग किया।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसे 'पदानुक्रमित शॉटगन' या क्लोन-दर-क्लोन अनुक्रमण कहा जाता है।"
    },
    {
        question: "प्रश्न 23. मानव जीनोम में मौजूद क्षार युग्मों (base pairs) की कुल संख्या लगभग कितनी है?",
        answers: shuffle([
            { text: "3 मिलियन", correct: false },
            { text: "300 मिलियन", correct: false },
            { text: "3 बिलियन", correct: true },
            { text: "3 ट्रिलियन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मानव जीनोम लगभग 3 बिलियन (या 3,000,000,000) डीएनए क्षार युग्मों से बना है।"
    },
    {
        question: "प्रश्न 24. HGP के पूरा होने के बाद, ENCODE परियोजना का लक्ष्य क्या था?",
        answers: shuffle([
            { text: "मानव जीनोम को फिर से अनुक्रमित करना", correct: false },
            { text: "मानव जीनोम में सभी कार्यात्मक तत्वों की पहचान करना", correct: true },
            { text: "केवल प्रोटीन-कोडिंग जीनों का अध्ययन करना", correct: false },
            { text: "एलियन जीनोम की खोज करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ENCODE (Encyclopedia of DNA Elements) परियोजना HGP के अनुवर्ती के रूप में शुरू की गई थी।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसका लक्ष्य मानव जीनोम के उन हिस्सों को पहचानना था जो कार्यात्मक भूमिका निभाते हैं, भले ही वे प्रोटीन के लिए कोड न करते हों।"
    },
    {
        question: "प्रश्न 25. SNP (स्निप) का पूर्ण रूप क्या है?",
        answers: shuffle([
            { text: "Single Nucleotide Polymorphism", correct: true },
            { text: "Short Nuclear Protein", correct: false },
            { text: "Single Nucleic Particle", correct: false },
            { text: "Spliced Nuclear Polypeptide", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक SNP (Single Nucleotide Polymorphism) जीनोम में एक एकल न्यूक्लियोटाइड (A, T, C, या G) का भिन्नता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  ये आनुवंशिक भिन्नता के सबसे सामान्य प्रकार हैं और बीमारियों के प्रति संवेदनशीलता से जुड़े हो सकते हैं।"
    },
    {
        question: "प्रश्न 26. जीनोम मैपिंग का क्या उद्देश्य है?",
        answers: shuffle([
            { text: "डीएनए का अनुक्रमण करना", correct: false },
            { text: "गुणसूत्रों पर जीनों के स्थान और सापेक्ष दूरी का पता लगाना", correct: true },
            { text: "प्रोटीन की संरचना निर्धारित करना", correct: false },
            { text: "जीन अभिव्यक्ति का अध्ययन करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीनोम मैपिंग एक रोडमैप बनाने जैसा है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो यह दर्शाता है कि कौन से जीन किस गुणसूत्र पर और किस क्रम में स्थित हैं।"
    },
    {
        question: "प्रश्न 27. HGP के अंतर्राष्ट्रीय संघ में कौन सा एशियाई देश एक प्रमुख भागीदार था?",
        answers: shuffle([
            { text: "दक्षिण कोरिया", correct: false },
            { text: "भारत", correct: false },
            { text: "जापान", correct: true },
            { text: "सिंगापुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मानव जीनोम परियोजना एक अंतर्राष्ट्रीय सहयोग था।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें संयुक्त राज्य अमेरिका, यूनाइटेड किंगडम, फ्रांस, जर्मनी, जापान और चीन शामिल थे।"
    },
    {
        question: "प्रश्न 28. क्रेग वेंटर ने मानव जीनोम को अनुक्रमित करने के लिए किस तीव्र विधि का उपयोग किया?",
        answers: shuffle([
            { text: "पदानुक्रमित अनुक्रमण", correct: false },
            { text: "होल जीनोम शॉटगन अनुक्रमण", correct: true },
            { text: "सैंगर अनुक्रमण", correct: false },
            { text: "क्लोनिंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेलेरा जीनोमिक्स ने होल जीनोम शॉटगन अनुक्रमण विधि का उपयोग किया।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें पूरे जीनोम को छोटे टुकड़ों में तोड़कर, उन्हें अनुक्रमित करके, और फिर कंप्यूटर का उपयोग करके उन्हें वापस एक साथ जोड़ा जाता है।"
    },
    {
        question: "प्रश्न 29. HGP का ज्ञान फोरेंसिक विज्ञान में कैसे मदद करता है?",
        answers: shuffle([
            { text: "अपराध स्थल पर छोड़े गए डीएनए की पहचान करके", correct: true },
            { text: "अपराध के समय का पता लगाकर", correct: false },
            { text: "हथियार के प्रकार की पहचान करके", correct: false },
            { text: "अपराधियों के व्यवहार का अध्ययन करके", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> HGP ने मानव डीएनए में भिन्नता के क्षेत्रों (जैसे SNPs) की हमारी समझ को बढ़ाया।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे डीएनए फिंगरप्रिंटिंग तकनीक और अधिक सटीक हो गई, जो व्यक्तियों की विशिष्ट रूप से पहचान करने में मदद करती है।"
    },
    {
        question: "प्रश्न 30. HGP का सबसे महत्वपूर्ण दीर्घकालिक लाभ क्या माना जाता है?",
        answers: shuffle([
            { text: "सभी मनुष्यों को समान बनाना", correct: false },
            { text: "रोगों की आणविक स्तर पर समझ और व्यक्तिगत चिकित्सा का विकास", correct: true },
            { text: "नए कंप्यूटरों का निर्माण", correct: false },
            { text: "मानव क्लोनिंग को संभव बनाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> HGP ने हमें यह समझने के लिए एक 'निर्देश पुस्तिका' दी है कि जीन और प्रोटीन कैसे काम करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे बीमारियों के मूल कारणों को समझने और उनके लिए लक्षित उपचार विकसित करने की अपार संभावनाएं खुली हैं।"
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