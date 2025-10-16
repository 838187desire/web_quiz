const questions = [
    {
        topHeading: "जीन और एलील पर आधारित 30 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. आनुवंशिकता की मूल कार्यात्मक इकाई क्या है?",
        answers: shuffle([
            { text: "डीएनए (DNA)", correct: false },
            { text: "गुणसूत्र (Chromosome)", correct: false },
            { text: "जीन (Gene)", correct: true },
            { text: "नाभिक (Nucleus)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीन डीएनए का एक विशिष्ट खंड है जो एक विशेष प्रोटीन या कार्यात्मक आरएनए अणु को कूटबद्ध करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और लक्षणों को एक पीढ़ी से दूसरी पीढ़ी तक ले जाता है।"
    },
    {
        question: "प्रश्न 2. एक जीन के वैकल्पिक रूपों को क्या कहा जाता है?",
        answers: shuffle([
            { text: "जीनोटाइप (Genotype)", correct: false },
            { text: "लोकस (Locus)", correct: false },
            { text: "एलील या युग्मविकल्पी (Allele)", correct: true },
            { text: "फीनोटाइप (Phenotype)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एलील एक ही जीन के विभिन्न संस्करण होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  उदाहरण के लिए, मटर के पौधे की ऊंचाई के लिए जीन के दो एलील होते हैं - एक लंबेपन के लिए (T) और एक बौनेपन के लिए (t)।"
    },
    {
        question: "प्रश्न 3. जब किसी जीन के दोनों एलील एक समान होते हैं (जैसे, TT या tt), तो उस स्थिति को क्या कहते हैं?",
        answers: shuffle([
            { text: "विषमयुग्मजी (Heterozygous)", correct: false },
            { text: "समयुग्मजी (Homozygous)", correct: true },
            { text: "अप्रभावी (Recessive)", correct: false },
            { text: "सह-प्रभावी (Co-dominant)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समयुग्मजी अवस्था में, किसी जीव में एक विशिष्ट लक्षण के लिए दोनों एलील समान होते हैं।"
    },
    {
        question: "प्रश्न 4. जब किसी जीन के दोनों एलील भिन्न होते हैं (जैसे, Tt), तो उस स्थिति को क्या कहते हैं?",
        answers: shuffle([
            { text: "समयुग्मजी (Homozygous)", correct: false },
            { text: "विषमयुग्मजी (Heterozygous)", correct: true },
            { text: "प्रभावी (Dominant)", correct: false },
            { text: "बहुविकल्पी (Multiple Alleles)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विषमयुग्मजी अवस्था में, किसी जीव में एक विशिष्ट लक्षण के लिए दोनों एलील अलग-अलग होते हैं।"
    },
    {
        question: "प्रश्न 5. वह एलील जो विषमयुग्मजी अवस्था में भी अपने लक्षण को व्यक्त करता है, क्या कहलाता है?",
        answers: shuffle([
            { text: "अप्रभावी एलील (Recessive Allele)", correct: false },
            { text: "प्रभावी एलील (Dominant Allele)", correct: true },
            { text: "सह-प्रभावी एलील (Co-dominant Allele)", correct: false },
            { text: "घातक एलील (Lethal Allele)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रभावी एलील वह होता है जो अपनी उपस्थिति में अप्रभावी एलील के प्रभाव को छिपा देता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और विषमयुग्मजी (Tt) और समयुग्मजी प्रभावी (TT) दोनों स्थितियों में व्यक्त होता है।"
    },
    {
        question: "प्रश्न 6. वह एलील जो केवल समयुग्मजी अवस्था में ही अपने लक्षण को व्यक्त कर पाता है, क्या कहलाता है?",
        answers: shuffle([
            { text: "प्रभावी एलील (Dominant Allele)", correct: false },
            { text: "अप्रभावी एलील (Recessive Allele)", correct: true },
            { text: "अपूर्ण प्रभावी एलील (Incomplete Dominant Allele)", correct: false },
            { text: "सामान्य एलील (Normal Allele)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अप्रभावी एलील का लक्षण केवल तभी दिखाई देता है जब जीव में उस जीन के दोनों एलील अप्रभावी हों (जैसे, tt)।"
    },
    {
        question: "प्रश्न 7. गुणसूत्र पर जीन की विशिष्ट स्थिति को क्या कहा जाता है?",
        answers: shuffle([
            { text: "एलील (Allele)", correct: false },
            { text: "सेंट्रोमियर (Centromere)", correct: false },
            { text: "टेलोमेयर (Telomere)", correct: false },
            { text: "लोकस (Locus)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोकस गुणसूत्र पर वह भौतिक स्थान है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जहाँ एक विशिष्ट जीन स्थित होता है।"
    },
    {
        question: "प्रश्न 8. मानव ABO रक्त समूह प्रणाली में कितने एलील शामिल होते हैं?",
        answers: shuffle([
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ABO रक्त समूह प्रणाली बहुविकल्पी (Multiple Alleles) का एक उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें तीन एलील Iᴬ Iᴮ, और i) शामिल होते हैं जो रक्त के प्रकार को निर्धारित करते हैं।"
    },
    {
        question: "प्रश्न 9. जब विषमयुग्मजी अवस्था में दोनों एलील एक साथ और पूरी तरह से व्यक्त होते हैं, तो इस घटना को क्या कहते हैं?",
        answers: shuffle([
            { text: "अपूर्ण प्रभाविता (Incomplete Dominance)", correct: false },
            { text: "प्रभाविता (Dominance)", correct: false },
            { text: "सह-प्रभाविता (Co-dominance)", correct: true },
            { text: "बहुप्रभाविता (Pleiotropy)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सह-प्रभाविता का सबसे अच्छा उदाहरण मानव का AB रक्त समूह है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जहाँ Iᴬ Iᴮ दोनों एलील अपना-अपना प्रभाव दिखाते हैं।"
    },
    {
        question: "प्रश्न 10. किसी जीव की आनुवंशिक संरचना, यानी उसके एलील के संयोजन को क्या कहा जाता है?",
        answers: shuffle([
            { text: "फीनोटाइप (Phenotype)", correct: false },
            { text: "जीनोटाइप (Genotype)", correct: true },
            { text: "जीनोम (Genome)", correct: false },
            { text: "कैरियोटाइप (Karyotype)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीनोटाइप किसी जीव के जीन के सेट को संदर्भित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जैसे TT, Tt, या tt।"
    },
    {
        question: "प्रश्न 11. \"एक जीन-एक एंजाइम\" की परिकल्पना किसने दी थी?",
        answers: shuffle([
            { text: "वाटसन और क्रिक", correct: false },
            { text: "मेंडल", correct: false },
            { text: "बीडल और टैटम", correct: true },
            { text: "मॉर्गन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जॉर्ज बीडल और एडवर्ड टैटम ने न्यूरोस्पोरा (एक प्रकार की फफूंद) पर प्रयोगों के माध्यम से यह परिकल्पना प्रस्तावित की।<br><br><i class='fa-solid fa-angles-right icon'></i>  कि प्रत्येक जीन एक विशिष्ट एंजाइम के उत्पादन के लिए जिम्मेदार है।"
    },
    {
        question: "प्रश्न 12. जीन मुख्य रूप से किसके बने होते हैं?",
        answers: shuffle([
            { text: "प्रोटीन", correct: false },
            { text: "कार्बोहाइड्रेट", correct: false },
            { text: "लिपिड", correct: false },
            { text: "डीऑक्सीराइबोन्यूक्लिक एसिड (DNA)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीन डीएनए के खंड होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  डीएनए एक न्यूक्लिक एसिड है जो आनुवंशिक जानकारी संग्रहीत करता है।"
    },
    {
        question: "प्रश्न 13. जब एक एकल जीन एक से अधिक लक्षणों को प्रभावित करता है, तो उसे क्या कहा जाता है?",
        answers: shuffle([
            { text: "बहुविकल्पी (Multiple Allelism)", correct: false },
            { text: "बहुजीनी वंशागति (Polygenic Inheritance)", correct: false },
            { text: "बहुप्रभाविता (Pleiotropy)", correct: true },
            { text: "सहलग्नता (Linkage)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बहुप्रभाविता का एक उदाहरण 'फेनिलकीटोन्यूरिया' नामक आनुवंशिक विकार है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें एक जीन में दोष के कारण मानसिक मंदता और त्वचा रंजकता में कमी जैसे कई लक्षण उत्पन्न होते हैं।"
    },
    {
        question: "प्रश्न 14. मेंडल के अनुसार, कारक (Factors) जो लक्षणों को नियंत्रित करते हैं, आज उन्हें किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "कोशिकाएं (Cells)", correct: false },
            { text: "जीन (Genes)", correct: true },
            { text: "गुणसूत्र (Chromosomes)", correct: false },
            { text: "न्यूक्लियोटाइड (Nucleotides)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेंडल ने आनुवंशिकता की इकाइयों को \"कारक\" कहा था।<br><br><i class='fa-solid fa-angles-right icon'></i>  बाद में विज्ञान ने सिद्ध किया कि ये कारक वास्तव में जीन हैं।"
    },
    {
        question: "प्रश्न 15. वे जीन जो केवल Y-गुणसूत्र पर पाए जाते हैं, क्या कहलाते हैं?",
        answers: shuffle([
            { text: "ऑटोसोमल जीन", correct: false },
            { text: "होलैंड्रिक जीन (Holandric genes)", correct: true },
            { text: "X-सहलग्न जीन", correct: false },
            { text: "घातक जीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> होलैंड्रिक जीन Y-गुणसूत्र के गैर-समजात खंड पर स्थित होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और केवल पिता से पुत्र में वंशागत होते हैं।"
    },
    {
        question: "प्रश्न 16. \"जंपिंग जीन\" (Jumping genes) या ट्रांसपोसॉन की खोज किसने की थी?",
        answers: shuffle([
            { text: "ग्रेगर मेंडल", correct: false },
            { text: "बारबरा मैक्लिंटॉक", correct: true },
            { text: "जेम्स वाटसन", correct: false },
            { text: "हरगोबिंद खुराना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बारबरा मैक्लिंटॉक ने मक्के पर अपने काम के दौरान \"जंपिंग जीन\" (ट्रांसपोसॉन) की खोज की।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो जीनोम में एक स्थान से दूसरे स्थान पर जा सकते हैं।"
    },
    {
        question: "प्रश्न 17. वह एलील जो किसी जीव की मृत्यु का कारण बन सकता है, क्या कहलाता है?",
        answers: shuffle([
            { text: "प्रभावी एलील", correct: false },
            { text: "अप्रभावी एलील", correct: false },
            { text: "घातक एलील (Lethal Allele)", correct: true },
            { text: "जंगली-प्रकार का एलील (Wild-type allele)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घातक एलील वे होते हैं जो समयुग्मजी अवस्था में होने पर जीव के लिए घातक सिद्ध होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे उसकी मृत्यु हो जाती है।"
    },
    {
        question: "प्रश्न 18. किसी जनसंख्या में किसी जीन के सभी एलीलों के कुल योग को क्या कहा जाता है?",
        answers: shuffle([
            { text: "जीन पूल (Gene Pool)", correct: true },
            { text: "जीनोम (Genome)", correct: false },
            { text: "कैरियोटाइप (Karyotype)", correct: false },
            { text: "आनुवंशिक बहाव (Genetic Drift)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीन पूल एक जनसंख्या में मौजूद सभी जीनों और उनके एलीलों का समग्र संग्रह है।"
    },
    {
        question: "प्रश्न 19. जंगली आबादी में सबसे आम एलील को क्या कहा जाता है?",
        answers: shuffle([
            { text: "उत्परिवर्तित एलील (Mutant allele)", correct: false },
            { text: "जंगली-प्रकार का एलील (Wild-type allele)", correct: true },
            { text: "अप्रभावी एलील (Recessive allele)", correct: false },
            { text: "घातक एलील (Lethal allele)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जंगली-प्रकार का एलील वह संस्करण है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो प्रकृति में या मानक प्रयोगशाला स्टॉक में सबसे अधिक प्रचलित होता है।"
    },
    {
        question: "प्रश्न 20. लिंग-सहलग्न जीन (Sex-linked genes) किस पर पाए जाते हैं?",
        answers: shuffle([
            { text: "केवल ऑटोसोम पर", correct: false },
            { text: "केवल लिंग गुणसूत्रों (X और Y) पर", correct: true },
            { text: "माइटोकॉन्ड्रिया पर", correct: false },
            { text: "सभी गुणसूत्रों पर समान रूप से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिंग-सहलग्न जीन वे जीन होते हैं जो X या Y गुणसूत्रों पर स्थित होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और उनकी वंशागति लिंग के साथ जुड़ी होती है।"
    },
    {
        question: "प्रश्न 21. ओपेरॉन (Operon) क्या है?",
        answers: shuffle([
            { text: "यूकेरियोट्स में जीन का एक समूह", correct: false },
            { text: "प्रोकैरियोट्स में संरचनात्मक जीनों और उनके नियंत्रक तत्वों का एक समूह", correct: true },
            { text: "एक प्रकार का प्रोटीन", correct: false },
            { text: "एक प्रकार का आरएनए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओपेरॉन, जैसे कि लैक ओपेरॉन, प्रोकैरियोटिक कोशिकाओं (जैसे बैक्टीरिया) में जीन अभिव्यक्ति के नियमन की एक इकाई है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह संरचनात्मक जीनों और उनके नियंत्रक तत्वों का एक समूह होता है।"
    },
    {
        question: "प्रश्न 22. युग्मक (Gamete) में किसी जीन के कितने एलील होते हैं?",
        answers: shuffle([
            { text: "एक", correct: true },
            { text: "दो", correct: false },
            { text: "तीन", correct: false },
            { text: "चार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेंडल के पृथक्करण के नियम के अनुसार, अर्धसूत्रीविभाजन के दौरान एलील अलग हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसलिए प्रत्येक युग्मक (शुक्राणु या अंडाणु) में प्रत्येक जीन के लिए केवल एक एलील होता है।"
    },
    {
        question: "प्रश्न 23. एक जीन के भीतर न्यूक्लियोटाइड अनुक्रम में परिवर्तन को क्या कहते हैं?",
        answers: shuffle([
            { text: "लिंकेज (Linkage)", correct: false },
            { text: "जीन उत्परिवर्तन (Gene Mutation)", correct: true },
            { text: "क्रॉसिंग ओवर (Crossing Over)", correct: false },
            { text: "अनुवाद (Translation)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीन उत्परिवर्तन, जिसे बिंदु उत्परिवर्तन भी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  डीएनए में एक या कुछ न्यूक्लियोटाइड में परिवर्तन है, जो एक नए एलील का निर्माण कर सकता है।"
    },
    {
        question: "प्रश्न 24. संरचनात्मक जीन (Structural Gene) का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "अन्य जीनों को नियंत्रित करना", correct: false },
            { text: "प्रोटीन या आरएनए को कूटबद्ध करना", correct: true },
            { text: "कोशिका विभाजन को नियंत्रित करना", correct: false },
            { text: "गुणसूत्रों को संरचना प्रदान करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संरचनात्मक जीन वे जीन होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिनमें एक विशिष्ट प्रोटीन या कार्यात्मक आरएनए अणु बनाने के लिए आनुवंशिक कोड होता है।"
    },
    {
        question: "प्रश्न 25. स्यूडोएलील (Pseudoalleles) क्या हैं?",
        answers: shuffle([
            { text: "वे जीन जो एक ही कार्य करते हैं लेकिन अलग-अलग गुणसूत्रों पर होते हैं", correct: false },
            { text: "वे एलील जो संरचनात्मक रूप से भिन्न होते हैं लेकिन समान फेनोटाइप देते हैं", correct: false },
            { text: "वे जीन जो कार्यात्मक रूप से संबंधित होते हैं और गुणसूत्र पर बहुत करीब स्थित होते हैं", correct: true },
            { text: "निष्क्रिय जीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्यूडोएलील कार्यात्मक रूप से संबंधित जीनों का एक समूह है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो एक ही गुणसूत्र पर इतने करीब स्थित होते हैं कि वे अक्सर एक ही जीन के एलील की तरह व्यवहार करते हैं।"
    },
    {
        question: "प्रश्न 26. जीनों के बीच भौतिक दूरी जितनी अधिक होगी, उनके बीच पुनर्संयोजन (Recombination) की संभावना उतनी ही...",
        answers: shuffle([
            { text: "कम होगी", correct: false },
            { text: "अधिक होगी", correct: true },
            { text: "समान रहेगी", correct: false },
            { text: "शून्य होगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक ही गुणसूत्र पर दूर स्थित जीनों के बीच क्रॉसिंग ओवर होने की संभावना अधिक होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे पुनर्संयोजन की आवृत्ति बढ़ जाती है।"
    },
    {
        question: "प्रश्न 27. कौन सा एलील संयोजन AB रक्त समूह का प्रतिनिधित्व करता है?",
        answers: shuffle([
            { text: "Iᴬ Iᴬ", correct: false },
            { text: "Iᴮ i", correct: false },
            { text: "Iᴬ Iᴮ", correct: true },
            { text: "i i", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> Iᴬ Iᴮ दोनों प्रभावी एलील हैं और सह-प्रभाविता दर्शाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसलिए जब वे एक साथ मौजूद होते हैं, तो व्यक्ति का रक्त समूह AB होता है।"
    },
    {
        question: "प्रश्न 28. एक द्विगुणित (Diploid) जीव में किसी एक जीन के लिए अधिकतम कितने प्रकार के एलील हो सकते हैं?",
        answers: shuffle([
            { text: "एक", correct: false },
            { text: "दो", correct: true },
            { text: "तीन", correct: false },
            { text: "अनेक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक द्विगुणित जीव को प्रत्येक जीन की दो प्रतियां विरासत में मिलती हैं (एक प्रत्येक माता-पिता से)।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसलिए उसके पास किसी भी जीन के लिए अधिकतम दो एलील (एक समरूप गुणसूत्र पर) हो सकते हैं।"
    },
    {
        question: "प्रश्न 29. एक जनसंख्या में एक जीन के लिए दो से अधिक एलील मौजूद होने की स्थिति को क्या कहते हैं?",
        answers: shuffle([
            { text: "सह-प्रभाविता (Co-dominance)", correct: false },
            { text: "बहुविकल्पी (Multiple Alleles)", correct: true },
            { text: "बहुप्रभाविता (Pleiotropy)", correct: false },
            { text: "अपूर्ण प्रभाविता (Incomplete Dominance)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब किसी जनसंख्या में किसी जीन के तीन या अधिक एलील मौजूद होते हैं (जैसे मानव ABO रक्त समूह)।<br><br><i class='fa-solid fa-angles-right icon'></i>  तो इसे बहुविकल्पी कहा जाता है।"
    },
    {
        question: "प्रश्न 30. \"सिस्ट्रॉन\" (Cistron) शब्द का आधुनिक समकक्ष क्या है?",
        answers: shuffle([
            { text: "एलील (Allele)", correct: false },
            { text: "गुणसूत्र (Chromosome)", correct: false },
            { text: "जीन (Gene)", correct: true },
            { text: "डीएनए (DNA)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिस्ट्रॉन को जीन की कार्यात्मक परिभाषा के रूप में प्रस्तावित किया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह डीएनए का वह खंड है जो एक पॉलीपेप्टाइड श्रृंखला को कूटबद्ध करता है। आधुनिक संदर्भ में, यह अनिवार्य रूप से एक जीन है।"
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