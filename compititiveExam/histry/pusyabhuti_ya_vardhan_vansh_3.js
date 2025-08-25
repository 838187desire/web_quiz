const questions = [
    {
        topHeading: "पुष्यभूति वंश या वर्धन वंश पर आधारित बहुविकल्पी प्रश्न part 3 (quiz_no.87)"
    },
    {
        question: "हर्षवर्धन के प्रशासन में, 'दंडिक' और 'दंडपाशिक' कौन थे?",
        answers: shuffle([
            { text: "सैन्य अधिकारी", correct: false },
            { text: "पुलिस अधिकारी", correct: true },
            { text: "राजस्व अधिकारी", correct: false },
            { text: "गुप्तचर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दंडिक' और 'दंडपाशिक' हर्षवर्धन के शासनकाल में पुलिस विभाग के अधिकारी थे, जो कानून और व्यवस्था बनाए रखने के लिए जिम्मेदार थे।"
    },
    {
        question: "'नागानंद' नामक नाटक में हर्षवर्धन ने किस बौद्ध भिक्षु की कथा को आधार बनाया है?",
        answers: shuffle([
            { text: "मैत्रेय", correct: false },
            { text: "बोधिसत्व जीमूतवाहन", correct: true },
            { text: "नागार्जुन", correct: false },
            { text: "वसुबंधु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नागानंद' में बोधिसत्व जीमूतवाहन की कहानी है जो एक नाग को बचाने के लिए अपने शरीर का बलिदान देता है, जो बौद्ध धर्म के आत्म-बलिदान के सिद्धांत को दर्शाता है।"
    },
    {
        question: "हर्षवर्धन के समकालीन वल्लभी (गुजरात) का शासक कौन था, जिसके साथ उसने वैवाहिक संबंध स्थापित किए?",
        answers: shuffle([
            { text: "ध्रुवसेन II", correct: true },
            { text: "भास्करवर्मन", correct: false },
            { text: "पुलकेशिन II", correct: false },
            { text: "यशोवर्मन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन ने अपनी पुत्री का विवाह वल्लभी के मैत्रक शासक ध्रुवसेन II के साथ किया था, जिससे उसका पश्चिमी भारत में प्रभाव बढ़ा।"
    },
    {
        question: "ह्वेन त्सांग के अनुसार, नालंदा विश्वविद्यालय का खर्च कैसे चलाया जाता था?",
        answers: shuffle([
            { text: "छात्रों द्वारा दी जाने वाली फीस से", correct: false },
            { text: "राजा द्वारा दिए गए दान से", correct: false },
            { text: "लगभग 100 गाँवों के राजस्व से", correct: true },
            { text: "व्यापारियों द्वारा दिए गए दान से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग के वृत्तांत के अनुसार, नालंदा विश्वविद्यालय को लगभग 100 गाँवों का राजस्व दिया जाता था, जिससे वहाँ के भिक्षुओं और छात्रों का खर्च चलता था।"
    },
    {
        question: "हर्षवर्धन की सेना में 'महाबलाधिकृत' नामक अधिकारी का क्या कार्य था?",
        answers: shuffle([
            { text: "मुख्य सेनापति", correct: true },
            { text: "अश्वसेना का प्रमुख", correct: false },
            { text: "पैदल सेना का प्रमुख", correct: false },
            { text: "गजसेना का प्रमुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महाबलाधिकृत' हर्षवर्धन के प्रशासन में सेना का सर्वोच्च कमांडर या मुख्य सेनापति होता था।"
    },
    {
        question: "'प्रियदर्शिका' नामक नाटक का मुख्य कथानक क्या है?",
        answers: shuffle([
            { text: "राजा हर्षवर्धन की जीवनी", correct: false },
            { text: "राजा उदयन की प्रेम कहानी", correct: true },
            { text: "बुद्ध की कहानी", correct: false },
            { text: "नागों की कहानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रियदर्शिका' एक संस्कृत नाटक है जो राजा उदयन और राजकुमारी प्रियदर्शिका की प्रेम कहानी पर आधारित है।"
    },
    {
        question: "ह्वेन त्सांग ने किस शासक को 'शीलदित्य' की उपाधि से संबोधित किया है?",
        answers: shuffle([
            { text: "प्रभाकरवर्धन", correct: false },
            { text: "राज्यवर्धन", correct: false },
            { text: "हर्षवर्धन", correct: true },
            { text: "भास्करवर्मन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीनी यात्री ह्वेन त्सांग ने अपने यात्रा वृत्तांत में हर्षवर्धन के लिए 'शीलदित्य' शब्द का प्रयोग किया है।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'धार्मिक सहिष्णुता' का सबसे अच्छा उदाहरण क्या है?",
        answers: shuffle([
            { text: "कन्नौज धर्मसभा और प्रयाग की महामोक्ष परिषद", correct: true },
            { text: "विभिन्न धर्मों के शासकों के साथ वैवाहिक संबंध", correct: false },
            { text: "बाणभट्ट को दरबार में रखना", correct: false },
            { text: "ह्वेन त्सांग का भारत आगमन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन ने इन सभाओं में बौद्ध धर्म के साथ-साथ शिव, सूर्य और अन्य हिंदू देवी-देवताओं की भी पूजा की, जो उसकी धार्मिक सहिष्णुता को दर्शाता है।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'राजपूत' शब्द का प्रयोग किस संदर्भ में किया जाता था?",
        answers: shuffle([
            { text: "एक जाति के रूप में", correct: false },
            { text: "एक सैनिक अधिकारी के रूप में", correct: false },
            { text: "एक राजा के पुत्र के रूप में", correct: true },
            { text: "इन सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'राजपूत' शब्द का प्रयोग उस समय 'राजा के पुत्र' के लिए होता था, न कि किसी विशिष्ट जाति के लिए।"
    },
    {
        question: "'नालंदा' विश्वविद्यालय का कुलपति कौन था, जिसके पास ह्वेन त्सांग ने अध्ययन किया था?",
        answers: shuffle([
            { text: "नागार्जुन", correct: false },
            { text: "वसुबंधु", correct: false },
            { text: "धर्मपाल", correct: false },
            { text: "शीलभद्र", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग जब नालंदा विश्वविद्यालय में आया, तब वहाँ के कुलपति आचार्य शीलभद्र थे, जिनसे उसने बौद्ध धर्म की शिक्षा ली।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'प्रयाग' किसलिए प्रसिद्ध था?",
        answers: shuffle([
            { text: "राजनीतिक राजधानी", correct: false },
            { text: "व्यापारिक केंद्र", correct: false },
            { text: "धार्मिक सभा (महामोक्ष परिषद)", correct: true },
            { text: "सैन्य मुख्यालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन प्रत्येक पाँच वर्ष में प्रयाग में महामोक्ष परिषद नामक एक विशाल धार्मिक सभा का आयोजन करता था।"
    },
    {
        question: "ह्वेन त्सांग ने हर्षवर्धन के शासनकाल में 'शूद्रों' की सामाजिक स्थिति के बारे में क्या कहा है?",
        answers: shuffle([
            { text: "उन्हें अछूत माना जाता था।", correct: false },
            { text: "वे मुख्य रूप से कृषि कार्यों में लगे थे।", correct: true },
            { text: "उनकी स्थिति में सुधार हुआ था।", correct: false },
            { text: "उन्हें केवल दासता के लिए रखा जाता था।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग के अनुसार, शूद्रों का सामाजिक सम्मान कम था, लेकिन वे कृषि कार्यों में लगे हुए थे और उन्हें अछूत नहीं माना जाता था।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'कन्नौज' को किस नाम से जाना जाता था?",
        answers: shuffle([
            { text: "कान्यकुब्ज", correct: false },
            { text: "महोदय", correct: false },
            { text: "कुशस्थल", correct: false },
            { text: "दोनों (A) और (B)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कन्नौज को उसके प्राचीन नाम 'कान्यकुब्ज' के साथ-साथ 'महोदय' के नाम से भी जाना जाता था।"
    },
    {
        question: "हर्षवर्धन की माता का क्या नाम था, जिनका उल्लेख 'हर्षचरित' में मिलता है?",
        answers: shuffle([
            { text: "राज्यश्री", correct: false },
            { text: "यशोमती", correct: true },
            { text: "ध्रुवस्वामिनी", correct: false },
            { text: "प्रियदर्शिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाणभट्ट की 'हर्षचरित' के अनुसार, हर्षवर्धन की माता का नाम यशोमती था।"
    },
    {
        question: "'हर्षचरित' में बाणभट्ट ने हर्षवर्धन को किस उपाधि से विभूषित किया है?",
        answers: shuffle([
            { text: "महाराजाधिराज", correct: false },
            { text: "परमेश्वर", correct: false },
            { text: "चक्रवर्ती", correct: false },
            { text: "इन सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाणभट्ट ने हर्षवर्धन के लिए 'महाराजाधिराज', 'परमेश्वर' और 'चक्रवर्ती' जैसी कई उपाधियों का प्रयोग किया है।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में कौन सा अधिकारी 'अभिलेखों' का रखरखाव करता था?",
        answers: shuffle([
            { text: "महासंधिविग्रहिक", correct: false },
            { text: "अक्षपटलिक", correct: true },
            { text: "महाबलाधिकृत", correct: false },
            { text: "कुंतल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अक्षपटलिक' नामक अधिकारी राजकीय अभिलेखों और दस्तावेजों का रखरखाव करता था।"
    },
    {
        question: "'आर्य मंजुश्री मूलकल्प' नामक ग्रंथ किस धर्म से संबंधित है, जिसमें हर्षवर्धन का उल्लेख है?",
        answers: shuffle([
            { text: "जैन धर्म", correct: false },
            { text: "शैव धर्म", correct: false },
            { text: "बौद्ध धर्म", correct: true },
            { text: "वैष्णव धर्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आर्य मंजुश्री मूलकल्प' एक महायान बौद्ध ग्रंथ है जिसमें हर्षवर्धन सहित कई शासकों और उनकी विजयों का उल्लेख है।"
    },
    {
        question: "हर्षवर्धन के साम्राज्य के पतन का एक प्रमुख कारण क्या था?",
        answers: shuffle([
            { text: "विदेशी आक्रमण", correct: false },
            { text: "उसका बिना किसी उत्तराधिकारी के मर जाना", correct: true },
            { text: "आंतरिक विद्रोह", correct: false },
            { text: "आर्थिक संकट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन की 647 ईस्वी में बिना किसी पुत्र या उत्तराधिकारी के मृत्यु हो गई, जिससे उसका साम्राज्य तुरंत ही कई छोटे-छोटे राज्यों में बिखर गया।"
    },
    {
        question: "ह्वेन त्सांग ने अपनी यात्रा के दौरान किस जगह को 'मोक-लो-तो' कहा था?",
        answers: shuffle([
            { text: "कन्नौज", correct: false },
            { text: "थानेश्वर", correct: false },
            { text: "प्रयाग", correct: false },
            { text: "मगध", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग ने मगध क्षेत्र को 'मोक-लो-तो' नाम से संबोधित किया था।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'वास्तुकला' का सबसे अच्छा उदाहरण कहाँ से मिलता है?",
        answers: shuffle([
            { text: "नालंदा का स्तूप", correct: true },
            { text: "भीलसा", correct: false },
            { text: "कन्नौज", correct: false },
            { text: "इन सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन के शासनकाल में निर्मित नालंदा के स्तूप और मठ उस समय की वास्तुकला के उत्कृष्ट उदाहरण हैं।"
    },
    {
        question: "हर्षवर्धन ने किस शासक को पराजित कर कन्नौज के सिंहासन पर अधिकार किया था?",
        answers: shuffle([
            { text: "देवगुप्त", correct: true },
            { text: "शशांक", correct: false },
            { text: "पुलकेशिन II", correct: false },
            { text: "प्रभाकरवर्धन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन ने अपनी बहन राज्यश्री के पति ग्रहवर्मन के हत्यारे देवगुप्त को पराजित कर कन्नौज पर अधिकार किया था।"
    },
    {
        question: "ह्वेन त्सांग के अनुसार, हर्षवर्धन के शासनकाल में कौन सी फसल सबसे महत्वपूर्ण थी?",
        answers: shuffle([
            { text: "गेहूँ", correct: false },
            { text: "चावल", correct: true },
            { text: "जौ", correct: false },
            { text: "बाजरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग के वृत्तांत में चावल को उस समय की सबसे महत्वपूर्ण फसल बताया गया है।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'अश्वमेध यज्ञ' का प्रमाण मिलता है या नहीं?",
        answers: shuffle([
            { text: "हाँ, मिलता है।", correct: false },
            { text: "नहीं, नहीं मिलता है।", correct: true },
            { text: "यह निश्चित नहीं है।", correct: false },
            { text: "केवल बाणभट्ट के लेखों में मिलता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन के शासनकाल में 'अश्वमेध यज्ञ' का कोई अभिलेखीय या साहित्यिक प्रमाण नहीं मिलता है।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'भूमिकर' (Land tax) को कितने भागों में विभाजित किया गया था?",
        answers: shuffle([
            { text: "दो भागों में", correct: false },
            { text: "तीन भागों में", correct: true },
            { text: "चार भागों में", correct: false },
            { text: "यह विभाजित नहीं था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग के अनुसार, भूमिकर को तीन भागों में विभाजित किया गया था - भाग (राजस्व), हिरण्य (नकद कर), और भोग (दैनिक भेंट)।"
    },
    {
        question: "'हर्षवर्धन' के शासनकाल के अंत में उत्तर भारत में कौन सा नया वंश उभरा?",
        answers: shuffle([
            { text: "गुर्जर-प्रतिहार", correct: true },
            { text: "राष्ट्रकूट", correct: false },
            { text: "पाला", correct: false },
            { text: "इन सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन की मृत्यु के बाद उत्तर भारत में गुर्जर-प्रतिहार, पाला और राष्ट्रकूट जैसे नए वंशों का उदय हुआ, जिनमें से गुर्जर-प्रतिहार सबसे प्रमुख था।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'महासंधिविग्रहिक' नामक अधिकारी किस कार्य से संबंधित था?",
        answers: shuffle([
            { text: "राजस्व", correct: false },
            { text: "न्याय", correct: false },
            { text: "विदेश मामले और संधि", correct: true },
            { text: "सेना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महासंधिविग्रहिक' उस समय विदेश मामलों और अन्य राज्यों के साथ संधि करने का प्रमुख अधिकारी था।"
    },
    {
        question: "हर्षवर्धन के किस भाई को 'परमसौगत' की उपाधि मिली थी?",
        answers: shuffle([
            { text: "प्रभाकरवर्धन", correct: false },
            { text: "राज्यवर्धन", correct: true },
            { text: "पुष्यभूति", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन के बड़े भाई राज्यवर्धन को बौद्ध धर्म के प्रति उसकी गहरी आस्था के कारण 'परमसौगत' की उपाधि दी गई थी।"
    },
    {
        question: "ह्वेन त्सांग के अनुसार, हर्षवर्धन के समय 'मंदिरों' को किस प्रकार का दान दिया जाता था?",
        answers: shuffle([
            { text: "कर-मुक्त भूमि अनुदान", correct: true },
            { text: "नकद धन", correct: false },
            { text: "सोने के सिक्के", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग ने अपने वृत्तांत में उल्लेख किया है कि मंदिरों को 'अग्रहार' नामक कर-मुक्त भूमि अनुदान दिया जाता था।"
    },
    {
        question: "'प्रियदर्शिका' नामक नाटक का मुख्य पात्र कौन है?",
        answers: shuffle([
            { text: "राजा हर्षवर्धन", correct: false },
            { text: "राजा उदयन", correct: true },
            { text: "राजा दुष्यंत", correct: false },
            { text: "राजा विक्रमादित्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रियदर्शिका' एक प्रसिद्ध नाटक है जिसके नायक राजा उदयन और नायिका प्रियदर्शिका हैं।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'नालंदा' विश्वविद्यालय का संरक्षक कौन था?",
        answers: shuffle([
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "धर्मपाल", correct: false },
            { text: "हर्षवर्धन", correct: true },
            { text: "शशांक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन ने नालंदा विश्वविद्यालय को उदारतापूर्वक दान दिया और उसका संरक्षक बना, जिससे इस विश्वविद्यालय का और अधिक विकास हुआ।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'भुक्ति' (प्रांत) के प्रमुख को क्या कहा जाता था?",
        answers: shuffle([
            { text: "उपरिक", correct: true },
            { text: "विषयपति", correct: false },
            { text: "ग्रामिक", correct: false },
            { text: "महाबलाधिकृत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उपरिक' नामक अधिकारी प्रांतों का प्रशासक होता था, जिसे 'भुक्ति' कहा जाता था।"
    },
    {
        question: "'हर्षचरित' में बाणभट्ट ने हर्षवर्धन के पिता प्रभाकरवर्धन को किस उपाधि से संबोधित किया है?",
        answers: shuffle([
            { text: "हूण हरिण केसरी", correct: true },
            { text: "परमभट्टारक", correct: false },
            { text: "महाराजाधिराज", correct: false },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाणभट्ट ने प्रभाकरवर्धन को 'हूण हरिण केसरी' कहा है, जिसका अर्थ है 'हूणों के लिए सिंह जैसा'।"
    },
    {
        question: "ह्वेन त्सांग के अनुसार, हर्षवर्धन के शासनकाल में 'सती प्रथा' की स्थिति क्या थी?",
        answers: shuffle([
            { text: "यह व्यापक रूप से प्रचलित थी।", correct: false },
            { text: "यह केवल विशिष्ट वर्ग में ही प्रचलित थी।", correct: true },
            { text: "यह प्रतिबंधित थी।", correct: false },
            { text: "इसका कोई उल्लेख नहीं मिलता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग ने लिखा है कि सती प्रथा का प्रचलन था, लेकिन यह बहुत व्यापक नहीं थी और मुख्यतः विशिष्ट वर्ग तक ही सीमित थी।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में, कौन सा कर 'राजस्व' का एक हिस्सा था?",
        answers: shuffle([
            { text: "हिरण्य", correct: false },
            { text: "भाग", correct: false },
            { text: "भोग", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भाग' भूमिकर था, 'हिरण्य' नकद कर था, और 'भोग' दैनिक भेंट थी।<br><br><i class='fa-solid fa-angles-right icon'></i> ये सभी कर राजस्व का हिस्सा थे।"
    },
    {
        question: "'रत्नावली' नाटक की मुख्य पात्र कौन है?",
        answers: shuffle([
            { text: "प्रियदर्शिका", correct: false },
            { text: "रत्नावली", correct: true },
            { text: "शकुंतला", correct: false },
            { text: "मालविका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रत्नावली' नाटक में वत्सराज उदयन और उसकी रानी वासवदत्ता की सेविका सागरिका (जो वास्तव में सिंहल की राजकुमारी रत्नावली है) की प्रेम कहानी का वर्णन है।"
    },
    {
        question: "ह्वेन त्सांग के अनुसार, 'कन्नौज धर्मसभा' में कौन-सा बौद्ध संप्रदाय प्रमुख था?",
        answers: shuffle([
            { text: "हीनयान", correct: false },
            { text: "महायान", correct: true },
            { text: "वज्रयान", correct: false },
            { text: "थेरवाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 643 ईस्वी में आयोजित कन्नौज धर्मसभा का मुख्य उद्देश्य महायान बौद्ध धर्म का प्रचार करना था और ह्वेन त्सांग इस सभा का मुख्य अतिथि था।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में, 'अवाप्त' नामक अधिकारी का क्या कार्य था?",
        answers: shuffle([
            { text: "न्याय अधिकारी", correct: false },
            { text: "भूमि अभिलेखों का रखरखाव", correct: true },
            { text: "सेनापति", correct: false },
            { text: "राजस्व संग्रह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अवाप्त' नामक अधिकारी भूमि से संबंधित अभिलेखों और अनुदानों का लेखा-जोखा रखता था।"
    },
    {
        question: "'अभिलेखों' को लिखने वाले अधिकारी को क्या कहा जाता था?",
        answers: shuffle([
            { text: "महा अक्षपटलिक", correct: false },
            { text: "अक्षपटलिक", correct: true },
            { text: "महासंधिविग्रहिक", correct: false },
            { text: "इनमे से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन के प्रशासन में, 'अक्षपटलिक' नामक अधिकारी अभिलेखों और दस्तावेजों को लिखने और रखने का कार्य करता था।"
    },
    {
        question: "ह्वेन त्सांग के अनुसार, उस समय भारत में 'न्याय' कैसा था?",
        answers: shuffle([
            { text: "बहुत कठोर", correct: false },
            { text: "उदार और मानवीय", correct: true },
            { text: "बहुत क्रूर", correct: false },
            { text: "यह केवल उच्च वर्ग के लिए था।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग ने लिखा है कि यद्यपि कानून सख्त थे, दंड अपेक्षाकृत उदार और मानवीय थे, और मृत्युदंड बहुत कम दिया जाता था।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'वास्तुकला' का सबसे अच्छा उदाहरण कहाँ से मिलता है?",
        answers: shuffle([
            { text: "नालंदा", correct: true },
            { text: "सारनाथ", correct: false },
            { text: "मथुरा", correct: false },
            { text: "देवगढ़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नालंदा के मठ और स्तूप हर्षवर्धन के शासनकाल की वास्तुकला के प्रमुख उदाहरण हैं, जिनके निर्माण में उसने भी योगदान दिया था।"
    },
    {
        question: "'नालंदा' विश्वविद्यालय किस गुप्त शासक द्वारा स्थापित किया गया था?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: true },
            { text: "स्कंदगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नालंदा विश्वविद्यालय की स्थापना 450 ईस्वी के आसपास गुप्त शासक कुमारगुप्त प्रथम ने की थी।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'सेना' को कितने भागों में बांटा गया था?",
        answers: shuffle([
            { text: "दो", correct: false },
            { text: "तीन", correct: false },
            { text: "चार", correct: true },
            { text: "पाँच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन की सेना में चार मुख्य अंग थे - पैदल सेना, घुड़सवार सेना, गजसेना और रथसेना।"
    },
    {
        question: "हर्षवर्धन की मृत्यु के बाद, कन्नौज पर किस शासक ने कुछ समय के लिए अधिकार कर लिया था?",
        answers: shuffle([
            { text: "यशोवर्मन", correct: true },
            { text: "प्रभाकरवर्धन", correct: false },
            { text: "शशांक", correct: false },
            { text: "वांग ह्वेन-त्से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन की मृत्यु के बाद, कन्नौज में अराजकता फैल गई और कुछ समय बाद यशोवर्मन नामक एक शासक ने वहाँ सत्ता संभाली।"
    },
    {
        question: "'कौटुंबिक' और 'अक्षपटल' नामक अधिकारी किस कार्य से संबंधित थे?",
        answers: shuffle([
            { text: "न्याय", correct: false },
            { text: "राजस्व", correct: true },
            { text: "गुप्तचर", correct: false },
            { text: "सेना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कौटुंबिक' और 'अक्षपटल' नामक अधिकारी राजस्व संग्रह और भूमि रिकॉर्ड से संबंधित थे।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'धार्मिक सहिष्णुता' का सबसे अच्छा प्रमाण क्या है?",
        answers: shuffle([
            { text: "उसकी रचनाएँ", correct: false },
            { text: "प्रयाग की महामोक्ष परिषद", correct: true },
            { text: "ह्वेन त्सांग की जीवनी", correct: false },
            { text: "बाणभट्ट की रचनाएँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रयाग की सभा में हर्षवर्धन ने बौद्ध धर्म के साथ-साथ शिव, सूर्य और अन्य देवी-देवताओं की भी पूजा की, जो उसकी धार्मिक सहिष्णुता का सबसे बड़ा प्रमाण है।"
    },
    {
        question: "हर्षवर्धन ने 'सती प्रथा' को रोकने के लिए क्या कदम उठाया था?",
        answers: shuffle([
            { text: "उसने कानून बनाया।", correct: false },
            { text: "उसने अपनी बहन राज्यश्री को सती होने से बचाया।", correct: true },
            { text: "उसने ब्राह्मणों से अपील की।", correct: false },
            { text: "इसका कोई उल्लेख नहीं है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब हर्षवर्धन की बहन राज्यश्री अपने पति की मृत्यु के बाद सती होने जा रही थी, तब हर्षवर्धन ने उसे विंध्य के जंगलों से ढूंढकर बचाया था।"
    },
    {
        question: "'नागानंद' नाटक में 'बुद्ध' का किस रूप में वर्णन किया गया है?",
        answers: shuffle([
            { text: "एक देवता के रूप में", correct: false },
            { text: "एक बोधिसत्व के रूप में", correct: true },
            { text: "एक राजा के रूप में", correct: false },
            { text: "एक साधु के रूप में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस नाटक में बुद्ध को एक बोधिसत्व (ज्ञान प्राप्त करने के मार्ग पर) के रूप में दर्शाया गया है।"
    },
    {
        question: "ह्वेन त्सांग ने अपनी यात्रा में 'पंजाब' क्षेत्र के लिए किस नाम का प्रयोग किया था?",
        answers: shuffle([
            { text: "पंचनद", correct: false },
            { text: "सप्तसिंधु", correct: false },
            { text: "पेई-लो-किआ", correct: true },
            { text: "पंजाब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग ने अपने वृत्तांत में पंजाब के लिए 'पेई-लो-किआ' शब्द का प्रयोग किया है।"
    },
    {
        question: "'हर्षचरित' में बाणभट्ट ने हर्षवर्धन के शासनकाल को 'किसका शासन' कहा है?",
        answers: shuffle([
            { text: "न्याय का", correct: false },
            { text: "शांति और समृद्धि का", correct: false },
            { text: "धर्म का", correct: false },
            { text: "इन सभी का", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाणभट्ट ने 'हर्षचरित' में हर्षवर्धन के शासनकाल को न्याय, शांति, समृद्धि और धर्म का शासन बताया है।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'व्यापार' किस रास्ते से होता था?",
        answers: shuffle([
            { text: "भूमि मार्ग से", correct: false },
            { text: "जल मार्ग से", correct: false },
            { text: "दोनों (A) और (B)", correct: true },
            { text: "केवल पश्चिमी तट से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन के शासनकाल में व्यापार भूमि और जल दोनों मार्गों से होता था।<br><br><i class='fa-solid fa-angles-right icon'></i> भृगुकच्छ जैसे बंदरगाहों से विदेशी व्यापार होता था।"
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