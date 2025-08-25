const questions = [
    {
        topHeading: "जैन धर्म पर आधारित बहुविकल्पी प्रश्न part 3 (quiz_no.23)"
    },
    {
        question: "जैन धर्म में 'द्रव्य' (Dravya) को कितने श्रेणियों में विभाजित किया गया है?",
        answers: shuffle([
            { text: "3", correct: false },
            { text: "5", correct: false },
            { text: "6", correct: true },
            { text: "8", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन दर्शन के अनुसार, 'द्रव्य' छह प्रकार के होते हैं: जीव (चेतन), पुद्गल (पदार्थ), धर्म (गति का माध्यम), अधर्म (स्थिरता का माध्यम), आकाश (अंतरिक्ष), और काल (समय)।"
    },
    {
        question: "जैन धर्म के दो प्रमुख संप्रदायों 'श्वेतांबर' और 'दिगंबर' के अतिरिक्त कौन सी उप-शाखा है जो वस्त्र धारण करती है और मूर्तिपूजा का विरोध करती है?",
        answers: shuffle([
            { text: "थेरापंथ", correct: false },
            { text: "स्थानकवासी", correct: true },
            { text: "दिगंबर", correct: false },
            { text: "हीनयान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्थानकवासी श्वेतांबर संप्रदाय की एक उप-शाखा है, जो श्वेत वस्त्र धारण करती है लेकिन मूर्तिपूजा का समर्थन नहीं करती।<br><br><i class='fa-solid fa-angles-right icon'></i> दिगंबर संप्रदाय में साधु वस्त्र नहीं पहनते।"
    },
    {
        question: "जैन धर्म के तीसरे तीर्थंकर संभवनाथ का प्रतीक चिह्न क्या था?",
        answers: shuffle([
            { text: "बैल", correct: false },
            { text: "हाथी", correct: false },
            { text: "घोड़ा", correct: true },
            { text: "सिंह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संभवनाथ जैन धर्म के तीसरे तीर्थंकर थे, और उनका प्रतीक चिह्न घोड़ा था।"
    },
    {
        question: "'ऋग्वेद' में किन दो जैन तीर्थंकरों का उल्लेख मिलता है?",
        answers: shuffle([
            { text: "पार्श्वनाथ और अरिष्टनेमि", correct: false },
            { text: "ऋषभदेव और अरिष्टनेमि", correct: true },
            { text: "महावीर और ऋषभदेव", correct: false },
            { text: "केवल ऋषभदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में दो जैन तीर्थंकरों, ऋषभदेव (प्रथम तीर्थंकर) और अरिष्टनेमि (22वें तीर्थंकर) के नामों का उल्लेख मिलता है, जो जैन धर्म की प्राचीनता को दर्शाता है।"
    },
    {
        question: "जैन दर्शन के अनुसार, 'पुद्गल' क्या है?",
        answers: shuffle([
            { text: "आत्मा", correct: false },
            { text: "कर्म का प्रवाह", correct: false },
            { text: "भौतिक पदार्थ", correct: true },
            { text: "मोक्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म में 'पुद्गल' उस तत्व को कहते हैं जिसमें स्पर्श, रस, गंध और वर्ण हो, यानी कि भौतिक पदार्थ।"
    },
    {
        question: "'रत्नत्रय' (तीन रत्न) का संबंध किस धर्म से है?",
        answers: shuffle([
            { text: "बौद्ध धर्म", correct: false },
            { text: "जैन धर्म", correct: true },
            { text: "शैव धर्म", correct: false },
            { text: "वैष्णव धर्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म के तीन रत्न: सम्यक दर्शन, सम्यक ज्ञान और सम्यक आचरण को सामूहिक रूप से 'रत्नत्रय' कहा जाता है।"
    },
    {
        question: "'जैन साहित्य' को 'आगम' भी कहते हैं। इस साहित्य में कुल कितने 'अंग' हैं?",
        answers: shuffle([
            { text: "10", correct: false },
            { text: "12", correct: true },
            { text: "14", correct: false },
            { text: "16", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन आगम साहित्य में 12 अंग, 12 उपांग, 10 प्रकीर्ण, 6 छेद सूत्र और 4 मूल सूत्र शामिल हैं।"
    },
    {
        question: "'दशवैकालिक सूत्र' किस जैन संप्रदाय से संबंधित है?",
        answers: shuffle([
            { text: "दिगंबर", correct: false },
            { text: "श्वेतांबर", correct: true },
            { text: "थेरापंथ", correct: false },
            { text: "स्थानकवासी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दशवैकालिक सूत्र' श्वेतांबर आगम साहित्य का हिस्सा है, जिसमें जैन मुनियों के नियमों का वर्णन है।"
    },
    {
        question: "जैन धर्म के किस संप्रदाय के अनुयायी साध्वियों को मोक्ष प्राप्त करने योग्य नहीं मानते?",
        answers: shuffle([
            { text: "श्वेतांबर", correct: false },
            { text: "दिगंबर", correct: true },
            { text: "थेरवाद", correct: false },
            { text: "हीनयान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिगंबर संप्रदाय का मानना है कि मोक्ष के लिए पूर्ण नग्नता आवश्यक है, जो साध्वियों के लिए संभव नहीं है, इसलिए वे मोक्ष प्राप्त करने योग्य नहीं हैं।"
    },
    {
        question: "'दिगंबर' संप्रदाय की स्थापना किसने की थी?",
        answers: shuffle([
            { text: "स्थूलभद्र", correct: false },
            { text: "भद्रबाहु", correct: true },
            { text: "महावीर", correct: false },
            { text: "ऋषभदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिगंबर संप्रदाय की स्थापना भद्रबाहु ने की थी, जिन्होंने अकाल के समय अपने अनुयायियों के साथ दक्षिण भारत की यात्रा की थी।"
    },
    {
        question: "जैन धर्म का सबसे महत्वपूर्ण त्यौहार क्या है?",
        answers: shuffle([
            { text: "दीपावली", correct: false },
            { text: "पर्युषण", correct: true },
            { text: "होली", correct: false },
            { text: "महावीर जयंती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पर्युषण जैन धर्म का एक महत्वपूर्ण और पवित्र त्यौहार है, जो श्वेतांबर और दिगंबर दोनों संप्रदायों द्वारा मनाया जाता है।"
    },
    {
        question: "महावीर के माता-पिता किस धर्म के अनुयायी थे?",
        answers: shuffle([
            { text: "बौद्ध धर्म", correct: false },
            { text: "वैदिक धर्म", correct: false },
            { text: "जैन धर्म", correct: true },
            { text: "शैव धर्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर के माता-पिता 23वें तीर्थंकर पार्श्वनाथ के अनुयायी थे।"
    },
    {
        question: "'जैन कल्पसूत्र' की रचना किसने की थी?",
        answers: shuffle([
            { text: "महावीर", correct: false },
            { text: "स्थूलभद्र", correct: false },
            { text: "भद्रबाहु", correct: true },
            { text: "देवर्धिगण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भद्रबाहु द्वारा रचित 'कल्पसूत्र' में जैन तीर्थंकरों का जीवन चरित्र है।"
    },
    {
        question: "जैन धर्म के अनुसार, 'मोक्ष' का क्या अर्थ है?",
        answers: shuffle([
            { text: "स्वर्ग की प्राप्ति", correct: false },
            { text: "पुनर्जन्म से मुक्ति", correct: true },
            { text: "ईश्वर का साक्षात्कार", correct: false },
            { text: "धन की प्राप्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म में मोक्ष का अर्थ है आत्मा का कर्मों के बंधन से पूरी तरह मुक्त हो जाना, जिससे व्यक्ति को जन्म और मृत्यु के चक्र से हमेशा के लिए छुटकारा मिल जाता है।"
    },
    {
        question: "जैन धर्म में 'जिन' का क्या अर्थ है?",
        answers: shuffle([
            { text: "विजेता", correct: true },
            { text: "देवता", correct: false },
            { text: "गुरु", correct: false },
            { text: "ज्ञानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जिन' का शाब्दिक अर्थ है विजेता, यानी वह व्यक्ति जिसने अपनी इंद्रियों पर विजय प्राप्त कर ली हो।"
    },
    {
        question: "'जियो और जीने दो' का नारा किसने दिया था?",
        answers: shuffle([
            { text: "महात्मा बुद्ध", correct: false },
            { text: "महावीर स्वामी", correct: true },
            { text: "ऋषभदेव", correct: false },
            { text: "पार्श्वनाथ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर स्वामी ने जैन धर्म के मूल सिद्धांत अहिंसा पर जोर देते हुए 'जियो और जीने दो' का नारा दिया था।"
    },
    {
        question: "अहिंसा के सिद्धांत पर अत्यधिक जोर देने के कारण, जैन धर्म के अनुयायी किस व्यवसाय में मुख्य रूप से शामिल हुए?",
        answers: shuffle([
            { text: "कृषि", correct: false },
            { text: "युद्ध", correct: false },
            { text: "व्यापार और वाणिज्य", correct: true },
            { text: "कारीगरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अहिंसा के सिद्धांत के कारण, जैनियों ने कृषि से परहेज किया क्योंकि इसमें कीड़े-मकोड़ों की मृत्यु होती थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए वे मुख्य रूप से व्यापार और वाणिज्य के क्षेत्र में आए।"
    },
    {
        question: "'श्रवणबेलगोला' में गोमतेश्वर की विशालकाय प्रतिमा का निर्माण किस शासक के मंत्री ने करवाया था?",
        answers: shuffle([
            { text: "अशोक", correct: false },
            { text: "चंद्रगुप्त मौर्य", correct: false },
            { text: "चामुंडराय", correct: true },
            { text: "खारवेल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गंग वंश के मंत्री चामुंडराय ने 10वीं शताब्दी ईस्वी में श्रवणबेलगोला (कर्नाटक) में गोमतेश्वर (बाहुबली) की विशालकाय प्रतिमा का निर्माण करवाया था।"
    },
    {
        question: "जैन धर्म के किस तीर्थंकर का उल्लेख 'ऋग्वेद' में भी मिलता है?",
        answers: shuffle([
            { text: "पार्श्वनाथ और अरिष्टनेमि", correct: false },
            { text: "ऋषभदेव और अरिष्टनेमि", correct: true },
            { text: "महावीर और ऋषभदेव", correct: false },
            { text: "केवल ऋषभदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में दो जैन तीर्थंकरों, ऋषभदेव और अरिष्टनेमि, के नामों का उल्लेख मिलता है, जिससे जैन धर्म की प्राचीनता का पता चलता है।"
    },
    {
        question: "'जैन धर्म' में 'केवलिन' (Kaivalin) किसे कहा जाता है?",
        answers: shuffle([
            { text: "जिसने घर छोड़ दिया हो", correct: false },
            { text: "जिसे पूर्ण ज्ञान प्राप्त हो गया हो", correct: true },
            { text: "जिसने तपस्या की हो", correct: false },
            { text: "जिसने उपदेश दिए हों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'केवलिन' उस व्यक्ति को कहा जाता है जिसे 'कैवल्य' (पूर्ण ज्ञान) की प्राप्ति हो गई हो।"
    },
    {
        question: "'पंच महाव्रत' में से कौन सा व्रत महावीर ने जोड़ा था?",
        answers: shuffle([
            { text: "अहिंसा", correct: false },
            { text: "सत्य", correct: false },
            { text: "अस्तेय", correct: false },
            { text: "ब्रह्मचर्य", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म के 23वें तीर्थंकर पार्श्वनाथ ने चार महाव्रत दिए थे।<br><br><i class='fa-solid fa-angles-right icon'></i> महावीर ने इन चारों में पाँचवाँ व्रत ब्रह्मचर्य को जोड़ा।"
    },
    {
        question: "'स्याद्वाद' का सिद्धांत किससे संबंधित है?",
        answers: shuffle([
            { text: "अनेकांतवाद", correct: true },
            { text: "कर्म का सिद्धांत", correct: false },
            { text: "पुनर्जन्म", correct: false },
            { text: "ईश्वर की अवधारणा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्याद्वाद (ज्ञान की सापेक्षता) जैन धर्म का एक महत्वपूर्ण सिद्धांत है, जो अनेकांतवाद (अनेक दृष्टिकोणों का सिद्धांत) से संबंधित है।"
    },
    {
        question: "जैन धर्म में 'ज्ञान' के कितने भेद बताए गए हैं?",
        answers: shuffle([
            { text: "दो", correct: false },
            { text: "तीन", correct: false },
            { text: "चार", correct: false },
            { text: "पाँच", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म में ज्ञान के पाँच भेद बताए गए हैं: मति, श्रुति, अवधि, मनःपर्यय, और कैवल्य।"
    },
    {
        question: "जैन धर्म के अनुसार, सृष्टि का निर्माण किसने किया?",
        answers: shuffle([
            { text: "ईश्वर", correct: false },
            { text: "आत्मा", correct: false },
            { text: "किसी ने नहीं, यह शाश्वत है", correct: true },
            { text: "ब्रह्मा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म ईश्वर को सृष्टि के निर्माता के रूप में स्वीकार नहीं करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उनका मानना है कि सृष्टि शाश्वत है और इसका कोई आरंभ या अंत नहीं है।"
    },
    {
        question: "महावीर को किस नदी के तट पर ज्ञान की प्राप्ति हुई थी?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "ऋजुपालिका", correct: true },
            { text: "निरंजना", correct: false },
            { text: "गंडक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर को जृम्भिक ग्राम के पास ऋजुपालिका नदी के तट पर एक साल वृक्ष के नीचे ज्ञान (कैवल्य) की प्राप्ति हुई थी।"
    },
    {
        question: "जैन धर्म के अनुसार, 'मोक्ष' प्राप्त करने के लिए व्यक्ति को किन तीन मार्गों का अनुसरण करना चाहिए?",
        answers: shuffle([
            { text: "ज्ञान, तपस्या, दान", correct: false },
            { text: "सम्यक दर्शन, सम्यक ज्ञान, सम्यक आचरण", correct: true },
            { text: "अहिंसा, सत्य, अपरिग्रह", correct: false },
            { text: "बुद्ध, धम्म, संघ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म में इन तीन मार्गों को 'त्रिरत्न' कहा जाता है, जो मोक्ष प्राप्ति के लिए आवश्यक हैं।"
    },
    {
        question: "जैन धर्म के 23वें तीर्थंकर 'पार्श्वनाथ' का प्रतीक चिह्न क्या था?",
        answers: shuffle([
            { text: "साँड़", correct: false },
            { text: "सर्प", correct: true },
            { text: "सिंह", correct: false },
            { text: "शंख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पार्श्वनाथ का प्रतीक चिह्न 'सर्प' (साँप) था।"
    },
    {
        question: "'भद्रबाहु' ने जैन धर्म के किस संप्रदाय का नेतृत्व किया था?",
        answers: shuffle([
            { text: "श्वेतांबर", correct: false },
            { text: "दिगंबर", correct: true },
            { text: "थेरवाद", correct: false },
            { text: "हीनयान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भद्रबाहु ने उन जैन भिक्षुओं का नेतृत्व किया था जो अकाल के समय दक्षिण भारत चले गए थे और बाद में दिगंबर संप्रदाय के रूप में जाने गए।"
    },
    {
        question: "'जैन धर्म' में 'अहिंसा' का क्या अर्थ है?",
        answers: shuffle([
            { text: "मन, वचन और कर्म से किसी को नुकसान न पहुँचाना", correct: true },
            { text: "केवल शारीरिक हिंसा से बचना", correct: false },
            { text: "झूठ न बोलना", correct: false },
            { text: "चोरी न करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म में अहिंसा का अर्थ बहुत व्यापक है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें मन, वचन और कर्म से किसी भी प्राणी को पीड़ा न पहुँचाना शामिल है।"
    },
    {
        question: "महावीर के बचपन का नाम क्या था?",
        answers: shuffle([
            { text: "सिद्धार्थ", correct: false },
            { text: "वर्धमान", correct: true },
            { text: "महावीर", correct: false },
            { text: "गौतम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर के बचपन का नाम वर्धमान था।"
    },
    {
        question: "जैन धर्म में 'तीर्थंकर' शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "मुक्ति का मार्ग दिखाने वाला", correct: true },
            { text: "ज्ञान का देवता", correct: false },
            { text: "तपस्या करने वाला", correct: false },
            { text: "उपदेश देने वाला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तीर्थंकर' का शाब्दिक अर्थ है 'घाट का निर्माता', यानी वह व्यक्ति जो जीवन और मृत्यु के सागर को पार करने के लिए एक मार्ग का निर्माण करता है।"
    },
    {
        question: "'सल्लेखना' प्रथा का पालन करने वाला पहला प्रसिद्ध शासक कौन था?",
        answers: shuffle([
            { text: "अशोक", correct: false },
            { text: "चंद्रगुप्त मौर्य", correct: true },
            { text: "खारवेल", correct: false },
            { text: "बिम्बिसार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौर्य सम्राट चंद्रगुप्त मौर्य ने अपने जीवन के अंतिम वर्षों में जैन धर्म अपनाया और श्रवणबेलगोला में सल्लेखना विधि से अपने प्राण त्यागे।"
    },
    {
        question: "'जैन धर्म' में 'अस्तेय' का क्या अर्थ है?",
        answers: shuffle([
            { text: "अहिंसा", correct: false },
            { text: "झूठ न बोलना", correct: false },
            { text: "चोरी न करना", correct: true },
            { text: "संपत्ति का संग्रह न करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अस्तेय' जैन धर्म के पाँच महाव्रतों में से एक है, जिसका अर्थ है किसी भी रूप में चोरी न करना।"
    },
    {
        question: "महावीर ने अपना पहला उपदेश किस भाषा में दिया था?",
        answers: shuffle([
            { text: "संस्कृत", correct: false },
            { text: "पाली", correct: false },
            { text: "प्राकृत (अर्ध-मागधी)", correct: true },
            { text: "मगधी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर ने अपने उपदेश प्राकृत भाषा (अर्ध-मागधी) में दिए थे, ताकि आम लोग उनके विचारों को आसानी से समझ सकें।"
    },
    {
        question: "जैन धर्म के अनुसार, 'अनेकांतवाद' का सिद्धांत किससे संबंधित है?",
        answers: shuffle([
            { text: "आत्मा और कर्म", correct: false },
            { text: "ज्ञान की सापेक्षता", correct: true },
            { text: "सृष्टि और ईश्वर", correct: false },
            { text: "मोक्ष और निर्वाण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनेकांतवाद' का सिद्धांत बताता है कि किसी भी वस्तु या सत्य को कई अलग-अलग दृष्टिकोणों से देखा जा सकता है, और कोई भी एक दृष्टिकोण पूर्ण सत्य नहीं हो सकता।"
    },
    {
        question: "'जियो और जीने दो' का नारा किसने दिया था?",
        answers: shuffle([
            { text: "महात्मा बुद्ध", correct: false },
            { text: "महावीर स्वामी", correct: true },
            { text: "ऋषभदेव", correct: false },
            { text: "पार्श्वनाथ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर स्वामी ने जैन धर्म के मूल सिद्धांत अहिंसा पर जोर देते हुए 'जियो और जीने दो' का नारा दिया था।"
    },
    {
        question: "जैन धर्म में 'पुद्गल' (Pudgala) का क्या अर्थ है?",
        answers: shuffle([
            { text: "आत्मा", correct: false },
            { text: "कर्म का प्रवाह", correct: false },
            { text: "भौतिक पदार्थ", correct: true },
            { text: "समय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन दर्शन के अनुसार, 'पुद्गल' उस तत्व को कहते हैं जिसमें स्पर्श, रस, गंध और वर्ण हो, यानी कि भौतिक पदार्थ।"
    },
    {
        question: "जैन धर्म के किस संप्रदाय के अनुयायी पूर्ण नग्नता को स्वीकार करते हैं?",
        answers: shuffle([
            { text: "श्वेतांबर", correct: false },
            { text: "दिगंबर", correct: true },
            { text: "थेरवाद", correct: false },
            { text: "हीनयान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिगंबर संप्रदाय के भिक्षु पूर्ण नग्नता को मोक्ष प्राप्ति के लिए आवश्यक मानते हैं।"
    },
    {
        question: "जैन धर्म के अनुसार, 'सृष्टि' का निर्माण किसने किया?",
        answers: shuffle([
            { text: "ईश्वर", correct: false },
            { text: "आत्मा", correct: false },
            { text: "किसी ने नहीं, यह शाश्वत है", correct: true },
            { text: "ब्रह्मा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म ईश्वर को सृष्टि के निर्माता के रूप में स्वीकार नहीं करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उनका मानना है कि सृष्टि शाश्वत है और इसका कोई आरंभ या अंत नहीं है।"
    },
    {
        question: "'जैन आगम' साहित्य का अंतिम संकलन किस संगीति में हुआ था?",
        answers: shuffle([
            { text: "प्रथम जैन संगीति (पाटलिपुत्र)", correct: false },
            { text: "द्वितीय जैन संगीति (वल्लभी)", correct: true },
            { text: "तृतीय जैन संगीति", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्वितीय जैन संगीति (512 ईस्वी, वल्लभी) में जैन आगमों को अंतिम रूप से संकलित और लिपिबद्ध किया गया था।"
    },
    {
        question: "जैन धर्म में 'निर्वाण' शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "जन्म", correct: false },
            { text: "मृत्यु", correct: true },
            { text: "पुनर्जन्म", correct: false },
            { text: "कैवल्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म में 'निर्वाण' शब्द का उपयोग मुख्य रूप से मृत्यु के लिए किया जाता है, जब व्यक्ति मोक्ष प्राप्त कर लेता है।"
    },
    {
        question: "जैन धर्म में 'अपरिग्रह' का क्या अर्थ है?",
        answers: shuffle([
            { text: "हिंसा न करना", correct: false },
            { text: "झूठ न बोलना", correct: false },
            { text: "चोरी न करना", correct: false },
            { text: "संपत्ति का संग्रह न करना", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अपरिग्रह' का अर्थ है किसी भी प्रकार की भौतिक संपत्ति या धन का संग्रह न करना।"
    },
    {
        question: "महावीर को कितने वर्ष की आयु में ज्ञान की प्राप्ति हुई थी?",
        answers: shuffle([
            { text: "29", correct: false },
            { text: "30", correct: false },
            { text: "42", correct: true },
            { text: "35", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर ने 30 वर्ष की आयु में घर त्याग दिया था और 12 वर्ष की कठोर तपस्या के बाद 42 वर्ष की आयु में उन्हें 'कैवल्य' (पूर्ण ज्ञान) की प्राप्ति हुई थी।"
    },
    {
        question: "जैन धर्म के प्रथम तीर्थंकर कौन थे?",
        answers: shuffle([
            { text: "पार्श्वनाथ", correct: false },
            { text: "महावीर", correct: false },
            { text: "ऋषभदेव", correct: true },
            { text: "अरिष्टनेमि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋषभदेव (या आदिनाथ) जैन धर्म के पहले तीर्थंकर थे।"
    },
    {
        question: "जैन धर्म के 24वें और अंतिम तीर्थंकर कौन थे?",
        answers: shuffle([
            { text: "ऋषभदेव", correct: false },
            { text: "अरिष्टनेमि", correct: false },
            { text: "पार्श्वनाथ", correct: false },
            { text: "महावीर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर स्वामी जैन धर्म के 24वें और अंतिम तीर्थंकर थे।"
    },
    {
        question: "महावीर का जन्म कहाँ हुआ था?",
        answers: shuffle([
            { text: "पाटलिपुत्र", correct: false },
            { text: "कुंडग्राम, वैशाली", correct: true },
            { text: "लुम्बिनी", correct: false },
            { text: "कुशीनगर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर का जन्म 540 ईसा पूर्व में कुंडग्राम (वैशाली) में हुआ था।"
    },
    {
        question: "'श्वेतांबर' और 'दिगंबर' संप्रदायों का विभाजन किस काल में हुआ था?",
        answers: shuffle([
            { text: "महावीर के जीवन काल में", correct: false },
            { text: "मौर्य काल में", correct: true },
            { text: "गुप्त काल में", correct: false },
            { text: "हर्ष के काल में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त मौर्य के समय मगध में पड़े अकाल के कारण दिगंबर और श्वेतांबर संप्रदायों का विभाजन हुआ।"
    },
    {
        question: "जैन धर्म में 'ज्ञान' के कितने भेद बताए गए हैं?",
        answers: shuffle([
            { text: "दो", correct: false },
            { text: "तीन", correct: false },
            { text: "चार", correct: false },
            { text: "पाँच", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म में ज्ञान के पाँच भेद हैं: मति, श्रुति, अवधि, मनःपर्यय, और कैवल्य।"
    },
    {
        question: "'जैन कल्पसूत्र' की रचना किसने की थी?",
        answers: shuffle([
            { text: "महावीर", correct: false },
            { text: "भद्रबाहु", correct: true },
            { text: "स्थूलभद्र", correct: false },
            { text: "देवर्धिगण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भद्रबाहु द्वारा रचित 'कल्पसूत्र' में जैन तीर्थंकरों का जीवन चरित्र है।"
    },
    {
        question: "महावीर के दामाद का नाम क्या था?",
        answers: shuffle([
            { text: "जमालि", correct: true },
            { text: "गोसाल", correct: false },
            { text: "स्थूलभद्र", correct: false },
            { text: "भद्रबाहु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर की पुत्री प्रियदर्शिनी का विवाह उनके दामाद जमालि से हुआ था।"
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