const questions = [
    {
        topHeading: "आनुवंशिकता के नियमों पर आधारित 30 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. आनुवंशिकी (Genetics) का जनक किसे कहा जाता है?",
        answers: shuffle([
            { text: "चार्ल्स डार्विन", correct: false },
            { text: "ग्रेगर मेंडल", correct: true },
            { text: "जेम्स वाटसन", correct: false },
            { text: "हरगोबिंद खुराना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑस्ट्रियाई भिक्षु ग्रेगर मेंडल को मटर के पौधों पर उनके अभूतपूर्व कार्य के लिए \"आनुवंशिकी का जनक\" कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे आनुवंशिकता के मूलभूत नियम स्थापित हुए।"
    },
    {
        question: "प्रश्न 2. मेंडल ने अपने प्रयोगों के लिए किस पौधे का चयन किया था?",
        answers: shuffle([
            { text: "गुलाब", correct: false },
            { text: "गेहूँ", correct: false },
            { text: "उद्यान मटर (Garden Pea)", correct: true },
            { text: "सरसों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेंडल ने उद्यान मटर (पाइसम सैटाइवम) को चुना क्योंकि इसका जीवन चक्र छोटा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसमें कई विपरीत लक्षण होते हैं और इसमें स्व-परागण और पर-परागण आसानी से कराया जा सकता है।"
    },
    {
        question: "प्रश्न 3. मेंडल का 'प्रभाविता का नियम' (Law of Dominance) क्या कहता है?",
        answers: shuffle([
            { text: "दोनों जनक के गुण मिश्रित हो जाते हैं।", correct: false },
            { text: "F1 पीढ़ी में केवल एक जनक (प्रभावी) का गुण दिखाई देता है।", correct: true },
            { text: "गुण अलग-अलग होकर अगली पीढ़ी में जाते हैं।", correct: false },
            { text: "सभी गुण समान रूप से व्यक्त होते हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस नियम के अनुसार, जब दो विपरीत लक्षणों वाले जनकों में संकरण कराया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  तो पहली पीढ़ी (F1) में केवल प्रभावी लक्षण ही प्रकट होता है और अप्रभावी लक्षण छिपा रहता है।"
    },
    {
        question: "प्रश्न 4. किसी जीव के देखने योग्य लक्षणों को क्या कहा जाता है?",
        answers: shuffle([
            { text: "जीनोटाइप (Genotype)", correct: false },
            { text: "फीनोटाइप (Phenotype)", correct: true },
            { text: "समयुग्मजी (Homozygous)", correct: false },
            { text: "एलील (Allele)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फीनोटाइप किसी जीव के बाहरी रूप से दिखाई देने वाले लक्षणों को संदर्भित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जैसे पौधे की लंबाई, फूल का रंग आदि।"
    },
    {
        question: "प्रश्न 5. किसी जीव की आनुवंशिक संरचना को क्या कहते हैं?",
        answers: shuffle([
            { text: "फीनोटाइप (Phenotype)", correct: false },
            { text: "जीनोटाइप (Genotype)", correct: true },
            { text: "जीनोम (Genome)", correct: false },
            { text: "गुणसूत्र (Chromosome)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीनोटाइप एक जीव की आनुवंशिक संरचना या जीन के सेट को संदर्भित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो उसके लक्षणों को निर्धारित करता है।"
    },
    {
        question: "प्रश्न 6. मेंडल के एकसंकर क्रॉस (Monohybrid cross) में F2 पीढ़ी का लक्षणप्रारूप (Phenotypic) अनुपात क्या होता है?",
        answers: shuffle([
            { text: "1:1", correct: false },
            { text: "1:2:1", correct: false },
            { text: "3:1", correct: true },
            { text: "9:3:3:1", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> F2 पीढ़ी में, तीन-चौथाई संतति में प्रभावी लक्षण (जैसे लंबापन) और एक-चौथाई में अप्रभावी लक्षण (जैसे बौनापन) दिखाई देता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे 3:1 का अनुपात प्राप्त होता है।"
    },
    {
        question: "प्रश्न 7. मेंडल के एकसंकर क्रॉस में F2 पीढ़ी का जीनप्रारूप (Genotypic) अनुपात क्या होता है?",
        answers: shuffle([
            { text: "3:1", correct: false },
            { text: "1:2:1", correct: true },
            { text: "1:1", correct: false },
            { text: "9:3:3:1", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> F2 पीढ़ी में जीनोटाइप का अनुपात 1 (समयुग्मजी प्रभावी - TT) : 2 (विषमयुग्मजी - Tt) : 1 (समयुग्मजी अप्रभावी - tt) होता है।"
    },
    {
        question: "प्रश्न 8. मेंडल का 'पृथक्करण का नियम' (Law of Segregation) क्या बताता है?",
        answers: shuffle([
            { text: "जीन हमेशा जोड़े में रहते हैं।", correct: false },
            { text: "युग्मक निर्माण के दौरान जीन के एलील एक-दूसरे से अलग हो जाते हैं।", correct: true },
            { text: "गुण हमेशा मिश्रित होते हैं।", correct: false },
            { text: "प्रभावी जीन हमेशा बना रहता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह नियम बताता है कि प्रत्येक जीन के दो एलील (युग्मविकल्पी) युग्मक (gamete) बनाते समय एक-दूसरे से अलग हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  ताकि प्रत्येक युग्मक को केवल एक ही एलील प्राप्त हो। इसे 'युग्मकों की शुद्धता का नियम' भी कहते हैं।"
    },
    {
        question: "प्रश्न 9. जब एक विशेष जीन के दोनों एलील अलग-अलग होते हैं (जैसे Tt), तो उस स्थिति को क्या कहते हैं?",
        answers: shuffle([
            { text: "समयुग्मजी (Homozygous)", correct: false },
            { text: "विषमयुग्मजी (Heterozygous)", correct: true },
            { text: "अप्रभावी (Recessive)", correct: false },
            { text: "प्रभावी (Dominant)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विषमयुग्मजी स्थिति तब होती है जब किसी जीव में एक विशेष जीन के लिए दो अलग-अलग एलील मौजूद होते हैं।"
    },
    {
        question: "प्रश्न 10. मेंडल का 'स्वतंत्र अपव्यूहन का नियम' (Law of Independent Assortment) किस पर आधारित है?",
        answers: shuffle([
            { text: "एकसंकर क्रॉस (Monohybrid cross)", correct: false },
            { text: "द्विसंकर क्रॉस (Dihybrid cross)", correct: true },
            { text: "टेस्ट क्रॉस (Test cross)", correct: false },
            { text: "बैक क्रॉस (Back cross)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह नियम दो या दो से अधिक लक्षणों की एकसाथ वंशागति की व्याख्या करता है और यह द्विसंकर क्रॉस के परिणामों से सिद्ध होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जहाँ लक्षणों के एलील स्वतंत्र रूप से अलग होते हैं।"
    },
    {
        question: "प्रश्न 11. द्विसंकर क्रॉस (Dihybrid cross) में F2 पीढ़ी का लक्षणप्रारूप (Phenotypic) अनुपात क्या होता है?",
        answers: shuffle([
            { text: "3:1", correct: false },
            { text: "1:2:1", correct: false },
            { text: "1:1:1:1", correct: false },
            { text: "9:3:3:1", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अनुपात दो अलग-अलग लक्षणों के स्वतंत्र वर्गीकरण को दर्शाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें चार अलग-अलग फेनोटाइप बनते हैं: 9 (दोनों प्रभावी), 3 (पहला प्रभावी, दूसरा अप्रभावी), 3 (पहला अप्रभावी, दूसरा प्रभावी), और 1 (दोनों अप्रभावी)।"
    },
    {
        question: "प्रश्न 12. टेस्ट क्रॉस (Test Cross) का उपयोग क्यों किया जाता है?",
        answers: shuffle([
            { text: "संतति की संख्या गिनने के लिए", correct: false },
            { text: "प्रभावी लक्षण वाले जीव का जीनोटाइप ज्ञात करने के लिए", correct: true },
            { text: "अप्रभावी जनक का पता लगाने के लिए", correct: false },
            { text: "लिंग निर्धारण के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टेस्ट क्रॉस में, एक प्रभावी फेनोटाइप वाले जीव का क्रॉस समयुग्मजी अप्रभावी जीव से कराया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  ताकि यह पता लगाया जा सके कि प्रभावी जीव समयुग्मजी (TT) है या विषमयुग्मजी (Tt) है।"
    },
    {
        question: "प्रश्न 13. अपूर्ण प्रभाविता (Incomplete Dominance) में, जब लाल (RR) और सफेद (rr) फूल वाले पौधों का संकरण होता है, तो F1 पीढ़ी में फूलों का रंग क्या होगा?",
        answers: shuffle([
            { text: "लाल", correct: false },
            { text: "सफेद", correct: false },
            { text: "गुलाबी", correct: true },
            { text: "लाल और सफेद धब्बेदार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपूर्ण प्रभाविता में, विषमयुग्मजी (Rr) का फेनोटाइप दोनों समयुग्मजी जनकों (RR और rr) के बीच का एक मध्यवर्ती रूप (गुलाबी) होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  कोई भी एलील पूरी तरह से प्रभावी नहीं होता है।"
    },
    {
        question: "प्रश्न 14. मानव में AB रक्त समूह किसका एक उत्कृष्ट उदाहरण है?",
        answers: shuffle([
            { text: "प्रभाविता", correct: false },
            { text: "अपूर्ण प्रभाविता", correct: false },
            { text: "सह-प्रभाविता (Co-dominance)", correct: true },
            { text: "बहुजीनी वंशागति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सह-प्रभाविता में, विषमयुग्मजी अवस्था में दोनों एलील (A और B) अपना-अपना प्रभाव पूरी तरह से व्यक्त करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे AB रक्त समूह बनता है।"
    },
    {
        question: "प्रश्न 15. मानव रक्त समूह प्रणाली में कितने प्रकार के एलील होते हैं?",
        answers: shuffle([
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मानव ABO रक्त समूह प्रणाली 'बहुविकल्पी' (Multiple Alleles) का उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसे तीन एलील नियंत्रित करते हैं: Iᴬ, Iᴮ, और i।"
    },
    {
        question: "प्रश्न 16. निम्नलिखित में से कौन सा रक्त समूह एक सार्वभौमिक दाता (Universal Donor) है?",
        answers: shuffle([
            { text: "A", correct: false },
            { text: "B", correct: false },
            { text: "AB", correct: false },
            { text: "O", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रक्त समूह O वाले व्यक्ति की लाल रक्त कोशिकाओं पर कोई A या B एंटीजन नहीं होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसलिए यह किसी भी रक्त समूह वाले व्यक्ति को रक्त दे सकता है।"
    },
    {
        question: "प्रश्न 17. लिंग-सहलग्न (Sex-linked) बीमारियाँ आमतौर पर पुरुषों में अधिक क्यों पाई जाती हैं?",
        answers: shuffle([
            { text: "क्योंकि उनके पास दो Y गुणसूत्र होते हैं।", correct: false },
            { text: "क्योंकि उनके पास केवल एक X गुणसूत्र होता है।", correct: true },
            { text: "क्योंकि Y गुणसूत्र बहुत लंबा होता है।", correct: false },
            { text: "क्योंकि पुरुषों की प्रतिरक्षा प्रणाली कमजोर होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिकांश लिंग-सहलग्न बीमारियाँ X-सहलग्न अप्रभावी होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  पुरुषों (XY) में केवल एक X गुणसूत्र होने के कारण, उस पर मौजूद एक भी दोषपूर्ण एलील बीमारी का कारण बन जाता है।"
    },
    {
        question: "प्रश्न 18. निम्नलिखित में से कौन एक लिंग-सहलग्न रोग है?",
        answers: shuffle([
            { text: "सिकल सेल एनीमिया", correct: false },
            { text: "वर्णांधता (Colour blindness)", correct: true },
            { text: "डाउन सिंड्रोम", correct: false },
            { text: "अल्जाइमर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वर्णांधता (लाल-हरे रंग का अंधापन) एक सामान्य X-सहलग्न अप्रभावी विकार है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो पुरुषों में अधिक आम है।"
    },
    {
        question: "प्रश्न 19. एक सामान्य महिला लेकिन वर्णांधता की वाहक (Carrier), एक सामान्य पुरुष से शादी करती है। उनके पुत्रों में वर्णांध होने की क्या संभावना है?",
        answers: shuffle([
            { text: "0%", correct: false },
            { text: "25%", correct: false },
            { text: "50%", correct: true },
            { text: "100%", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि महिला वाहक (XᶜX) है, वह अपने 50% पुत्रों को दोषपूर्ण X गुणसूत्र (Xᶜ) देगी।<br><br><i class='fa-solid fa-angles-right icon'></i>  पिता (XY) सामान्य है, इसलिए वह पुत्रों को Y गुणसूत्र देगा। अतः 50% पुत्रों के वर्णांध (XᶜY) होने की संभावना है।"
    },
    {
        question: "प्रश्न 20. हीमोफिलिया (Haemophilia) किस प्रकार का रोग है?",
        answers: shuffle([
            { text: "ऑटोसोमल प्रभावी", correct: false },
            { text: "ऑटोसोमल अप्रभावी", correct: false },
            { text: "X-सहलग्न प्रभावी", correct: false },
            { text: "X-सहलग्न अप्रभावी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीमोफिलिया एक X-सहलग्न अप्रभावी आनुवंशिक विकार है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें रक्त के थक्के जमने की क्षमता प्रभावित होती है।"
    },
    {
        question: "प्रश्न 21. मनुष्य में त्वचा का रंग किस प्रकार की वंशागति का उदाहरण है?",
        answers: shuffle([
            { text: "प्रभाविता", correct: false },
            { text: "सह-प्रभाविता", correct: false },
            { text: "बहुजीनी वंशागति (Polygenic Inheritance)", correct: true },
            { text: "अपूर्ण प्रभाविता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मनुष्य की त्वचा का रंग एक एकल जीन द्वारा नहीं, बल्कि कई जीनों द्वारा सामूहिक रूप से नियंत्रित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे लक्षणों की एक विस्तृत श्रृंखला उत्पन्न होती है।"
    },
    {
        question: "प्रश्न 22. आनुवंशिकता की मूल इकाई क्या है?",
        answers: shuffle([
            { text: "डीएनए", correct: false },
            { text: "आरएनए", correct: false },
            { text: "जीन", correct: true },
            { text: "गुणसूत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीन डीएनए का एक खंड है जो एक विशिष्ट लक्षण को नियंत्रित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और आनुवंशिकता की कार्यात्मक इकाई है।"
    },
    {
        question: "प्रश्न 23. एक ही गुणसूत्र पर स्थित जीनों में एक साथ वंशागत होने की प्रवृत्ति होती है। इस घटना को क्या कहते हैं?",
        answers: shuffle([
            { text: "पुनर्संयोजन (Recombination)", correct: false },
            { text: "सहलग्नता (Linkage)", correct: true },
            { text: "उत्परिवर्तन (Mutation)", correct: false },
            { text: "अपव्यूहन (Assortment)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सहलग्नता वह प्रवृत्ति है जिसमें एक ही गुणसूत्र पर स्थित जीन अर्धसूत्रीविभाजन के दौरान एकसाथ रहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और अगली पीढ़ी में एकसाथ वंशागत होते हैं।"
    },
    {
        question: "प्रश्न 24. डीएनए अनुक्रम में होने वाले अचानक, स्थायी परिवर्तन को क्या कहा जाता है?",
        answers: shuffle([
            { text: "सहलग्नता", correct: false },
            { text: "अनुकूलन", correct: false },
            { text: "उत्परिवर्तन (Mutation)", correct: true },
            { text: "चयन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्परिवर्तन डीएनए के अनुक्रम में एक स्थायी परिवर्तन है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो विविधताओं का मूल स्रोत है।"
    },
    {
        question: "प्रश्न 25. टर्नर सिंड्रोम (Turner Syndrome) का कारण क्या है?",
        answers: shuffle([
            { text: "एक अतिरिक्त X गुणसूत्र (XXY)", correct: false },
            { text: "एक X गुणसूत्र की अनुपस्थिति (XO)", correct: true },
            { text: "एक अतिरिक्त Y गुणसूत्र (XYY)", correct: false },
            { text: "गुणसूत्र 21 की त्रिसूत्रता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टर्नर सिंड्रोम एक गुणसूत्रीय विकार है जो महिलाओं को प्रभावित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें एक X गुणसूत्र पूर्ण या आंशिक रूप से अनुपस्थित होता है (XO), जिससे कुल 45 गुणसूत्र होते हैं।"
    },
    {
        question: "प्रश्न 26. मेंडल के नियम का अपवाद क्या है?",
        answers: shuffle([
            { text: "प्रभाविता का नियम", correct: false },
            { text: "पृथक्करण का नियम", correct: false },
            { text: "सहलग्नता (Linkage)", correct: true },
            { text: " कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सहलग्नता (Linkage) मेंडल के स्वतंत्र अपव्यूहन के नियम का एक अपवाद है।<br><br><i class='fa-solid fa-angles-right icon'></i>  क्योंकि सहलग्न जीन स्वतंत्र रूप से अलग नहीं होते हैं बल्कि एक साथ वंशागत होते हैं।"
    },
    {
        question: "प्रश्न 27. किसी व्यक्ति का लिंग निर्धारण किसके गुणसूत्रों द्वारा होता है?",
        answers: shuffle([
            { text: "केवल माता", correct: false },
            { text: "केवल पिता", correct: true },
            { text: "माता और पिता दोनों", correct: false },
            { text: "दादा-दादी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मानव में, महिला (XX) हमेशा X गुणसूत्र वाला अंडाणु देती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  पिता (XY) 50% शुक्राणुओं में X और 50% में Y गुणसूत्र देता है। यदि Y शुक्राणु निषेचित करता है तो पुत्र (XY) और यदि X शुक्राणु निषेचित करता है तो पुत्री (XX) होती है।"
    },
    {
        question: "प्रश्न 28. डाउन सिंड्रोम (Down Syndrome) किस गुणसूत्र की त्रिसूत्रता (Trisomy) के कारण होता है?",
        answers: shuffle([
            { text: "गुणसूत्र 18", correct: false },
            { text: "गुणसूत्र 13", correct: false },
            { text: "गुणसूत्र 21", correct: true },
            { text: "X गुणसूत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डाउन सिंड्रोम एक आनुवंशिक स्थिति है जो गुणसूत्र 21 की एक अतिरिक्त प्रतिलिपि (त्रिसूत्रता) की उपस्थिति के कारण होती है।"
    },
    {
        question: "प्रश्न 29. एक जीन के वैकल्पिक रूपों को क्या कहा जाता है?",
        answers: shuffle([
            { text: "जीनोटाइप", correct: false },
            { text: "फीनोटाइप", correct: false },
            { text: "एलील या युग्मविकल्पी (Allele)", correct: true },
            { text: "लोकस (Locus)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एलील एक जीन के दो या दो से अधिक वैकल्पिक रूप हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो गुणसूत्र पर एक ही स्थान (लोकस) पर स्थित होते हैं।"
    },
    {
        question: "प्रश्न 30. \"वंशागति का गुणसूत्रीय सिद्धांत\" (Chromosomal Theory of Inheritance) किसने प्रतिपादित किया था?",
        answers: shuffle([
            { text: "ग्रेगर मेंडल", correct: false },
            { text: "वाटसन और क्रिक", correct: false },
            { text: "सटन और बोवेरी", correct: true },
            { text: "टी.एच. मॉर्गन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वाल्टर सटन और थियोडोर बोवेरी ने 1902 में स्वतंत्र रूप से वंशागति का गुणसूत्रीय सिद्धांत प्रस्तावित किया।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें कहा गया कि जीन गुणसूत्रों पर स्थित होते हैं।"
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