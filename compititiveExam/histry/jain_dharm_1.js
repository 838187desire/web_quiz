const questions = [
    {
        topHeading: "जैन धर्म पर आधारित बहुविकल्पी प्रश्न part 1 (quiz_no.21)"
    },
    {
        question: "जैन धर्म के प्रथम तीर्थंकर कौन थे?",
        answers: [
            { text: "पार्श्वनाथ", correct: false },
            { text: "महावीर", correct: false },
            { text: "ऋषभदेव", correct: true },
            { text: "अरिष्टनेमि", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋषभदेव (या आदिनाथ) जैन धर्म के पहले तीर्थंकर थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उनका उल्लेख ऋग्वेद में भी मिलता है।"
    },
    {
        question: "जैन धर्म के 24वें और अंतिम तीर्थंकर कौन थे?",
        answers: [
            { text: "ऋषभदेव", correct: false },
            { text: "अरिष्टनेमि", correct: false },
            { text: "पार्श्वनाथ", correct: false },
            { text: "महावीर", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर स्वामी जैन धर्म के 24वें और अंतिम तीर्थंकर थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्हें जैन धर्म का वास्तविक संस्थापक माना जाता है।"
    },
    {
        question: "महावीर का जन्म कहाँ हुआ था?",
        answers: [
            { text: "पाटलिपुत्र", correct: false },
            { text: "कुंडग्राम, वैशाली", correct: true },
            { text: "लुम्बिनी", correct: false },
            { text: "कुशीनगर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर का जन्म 540 ईसा पूर्व में कुंडग्राम (वैशाली) में हुआ था।"
    },
    {
        question: "महावीर के बचपन का नाम क्या था?",
        answers: [
            { text: "सिद्धार्थ", correct: false },
            { text: "वर्धमान", correct: true },
            { text: "महावीर", correct: false },
            { text: "गौतम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर के बचपन का नाम वर्धमान था।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्हें ज्ञान प्राप्ति के बाद महावीर के नाम से जाना गया।"
    },
    {
        question: "महावीर किस कुल से संबंधित थे?",
        answers: [
            { text: "शाक्य", correct: false },
            { text: "ज्ञात्रिक", correct: true },
            { text: "लिच्छवि", correct: false },
            { text: "मौर्य", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर का संबंध ज्ञात्रिक कुल से था।<br><br><i class='fa-solid fa-angles-right icon'></i> उनके पिता सिद्धार्थ ज्ञात्रिक कुल के प्रमुख थे।"
    },
    {
        question: "महावीर के पिता का नाम क्या था?",
        answers: [
            { text: "शुद्धोदन", correct: false },
            { text: "सिद्धार्थ", correct: true },
            { text: "महासेन", correct: false },
            { text: "बिम्बिसार", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर के पिता का नाम सिद्धार्थ था, जो वज्जि संघ के ज्ञात्रिक कुल के प्रधान थे।"
    },
    {
        question: "महावीर की माता का नाम क्या था?",
        answers: [
            { text: "यशोदा", correct: false },
            { text: "त्रिशला", correct: true },
            { text: "महामाया", correct: false },
            { text: "यशोदा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर की माता का नाम त्रिशला था, जो लिच्छवि शासक चेटक की बहन थीं।"
    },
    {
        question: "महावीर की पत्नी और पुत्री का नाम क्या था?",
        answers: [
            { text: "यशोदा, प्रियदर्शिनी", correct: true },
            { text: "यशोधरा, प्रियदर्शिनी", correct: false },
            { text: "यशोदा, संघमित्रा", correct: false },
            { text: "यशोधरा, संघमित्रा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर की पत्नी का नाम यशोदा और उनकी पुत्री का नाम प्रियदर्शिनी (अनोज्जा) था।"
    },
    {
        question: "महावीर को कितने वर्ष की आयु में ज्ञान की प्राप्ति हुई थी?",
        answers: [
            { text: "29", correct: false },
            { text: "30", correct: false },
            { text: "42", correct: true },
            { text: "35", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर ने 30 वर्ष की आयु में घर त्याग दिया था और 12 वर्ष की कठोर तपस्या के बाद 42 वर्ष की आयु में उन्हें 'कैवल्य' (पूर्ण ज्ञान) की प्राप्ति हुई थी।"
    },
    {
        question: "महावीर को किस नदी के तट पर ज्ञान की प्राप्ति हुई थी?",
        answers: [
            { text: "गंगा", correct: false },
            { text: "ऋजुपालिका", correct: true },
            { text: "निरंजना", correct: false },
            { text: "गंडक", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर को जृम्भिक ग्राम के पास ऋजुपालिका नदी के तट पर एक साल वृक्ष के नीचे ज्ञान की प्राप्ति हुई थी।"
    },
    {
        question: "जैन धर्म के अनुसार, 'कैवल्य' का क्या अर्थ है?",
        answers: [
            { text: "ज्ञान की प्राप्ति", correct: true },
            { text: "मृत्यु", correct: false },
            { text: "त्याग", correct: false },
            { text: "जन्म", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म में 'कैवल्य' का अर्थ है पूर्ण ज्ञान या सर्वोच्च ज्ञान की प्राप्ति, जिसके बाद व्यक्ति सभी सांसारिक बंधनों से मुक्त हो जाता है।"
    },
    {
        question: "महावीर ने अपना पहला उपदेश किस भाषा में दिया था?",
        answers: [
            { text: "संस्कृत", correct: false },
            { text: "पाली", correct: false },
            { text: "प्राकृत (अर्ध-मागधी)", correct: true },
            { text: "मगधी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर ने अपने उपदेश प्राकृत भाषा (अर्ध-मागधी) में दिए, ताकि आम लोग उनके विचारों को आसानी से समझ सकें।"
    },
    {
        question: "जैन धर्म के तीन रत्न (त्रिरत्न) क्या हैं?",
        answers: [
            { text: "सम्यक दर्शन, सम्यक ज्ञान, सम्यक आचरण", correct: true },
            { text: "अहिंसा, सत्य, अपरिग्रह", correct: false },
            { text: "बुद्ध, धम्म, संघ", correct: false },
            { text: "ब्रह्मचर्य, अपरिग्रह, अस्तेय", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म के तीन रत्न हैं: सम्यक दर्शन (सही विश्वास), सम्यक ज्ञान (सही ज्ञान), और सम्यक आचरण (सही कर्म)।"
    },
    {
        question: "जैन धर्म में 'अहिंसा' का क्या अर्थ है?",
        answers: [
            { text: "मन, वचन और कर्म से किसी को नुकसान न पहुँचाना", correct: true },
            { text: "केवल शारीरिक हिंसा से बचना", correct: false },
            { text: "झूठ न बोलना", correct: false },
            { text: "चोरी न करना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म में अहिंसा का अर्थ बहुत व्यापक है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें केवल शारीरिक हिंसा से बचना ही नहीं, बल्कि मन और वचन से भी किसी को दुख न पहुँचाना शामिल है।"
    },
    {
        question: "जैन धर्म में 'अनेकांतवाद' का सिद्धांत किससे संबंधित है?",
        answers: [
            { text: "कई देवताओं में विश्वास", correct: false },
            { text: "सृष्टि की प्रकृति", correct: false },
            { text: "ज्ञान की सापेक्षता", correct: true },
            { text: "आत्मा की अमरता", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनेकांतवाद का सिद्धांत बताता है कि किसी भी वस्तु या सत्य को कई अलग-अलग दृष्टिकोणों से देखा जा सकता है, और कोई भी एक दृष्टिकोण पूर्ण सत्य नहीं हो सकता।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे 'स्याद्वाद' भी कहते हैं।"
    },
    {
        question: "'श्वेतांबर' और 'दिगंबर' किस धर्म के दो प्रमुख संप्रदाय हैं?",
        answers: [
            { text: "बौद्ध धर्म", correct: false },
            { text: "जैन धर्म", correct: true },
            { text: "शैव धर्म", correct: false },
            { text: "वैष्णव धर्म", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म के दो प्रमुख संप्रदाय हैं: श्वेतांबर (जो सफेद वस्त्र पहनते हैं) और दिगंबर (जो पूर्णतः नग्न रहते हैं)।<br><br><i class='fa-solid fa-angles-right icon'></i> यह विभाजन महावीर की मृत्यु के बाद हुआ।"
    },
    {
        question: "जैन धर्म के किस संप्रदाय के अनुयायी पूर्ण नग्नता को स्वीकार करते हैं?",
        answers: [
            { text: "श्वेतांबर", correct: false },
            { text: "दिगंबर", correct: true },
            { text: "थेरवाद", correct: false },
            { text: "हीनयान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिगंबर संप्रदाय के भिक्षु पूर्ण नग्नता को मोक्ष प्राप्ति के लिए आवश्यक मानते हैं।"
    },
    {
        question: "जैन तीर्थंकरों की जीवनी 'कल्पसूत्र' नामक ग्रंथ में किस भाषा में लिखी गई है?",
        answers: [
            { text: "पाली", correct: false },
            { text: "प्राकृत", correct: true },
            { text: "संस्कृत", correct: false },
            { text: "अपभ्रंश", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन तीर्थंकरों की जीवनी 'कल्पसूत्र' नामक ग्रंथ प्राकृत भाषा में लिखा गया था।"
    },
    {
        question: "'भद्रबाहु' और 'स्थूलभद्र' का संबंध किस घटना से है?",
        answers: [
            { text: "जैन धर्म के दो संप्रदायों का विभाजन", correct: true },
            { text: "महावीर के मुख्य शिष्य", correct: false },
            { text: "जैन संगीतियाँ", correct: false },
            { text: "जैन धर्म के दार्शनिक", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त मौर्य के समय मगध में पड़े अकाल के कारण भद्रबाहु अपने अनुयायियों के साथ दक्षिण भारत चले गए, जबकि स्थूलभद्र मगध में ही रहे।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी घटना के कारण श्वेतांबर और दिगंबर संप्रदायों का विभाजन हुआ।"
    },
    {
        question: "प्रथम जैन संगीति का आयोजन कहाँ हुआ था?",
        answers: [
            { text: "पाटलिपुत्र", correct: true },
            { text: "वल्लभी", correct: false },
            { text: "राजगृह", correct: false },
            { text: "मथुरा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रथम जैन संगीति का आयोजन चंद्रगुप्त मौर्य के शासनकाल में पाटलिपुत्र में हुआ था, जिसके अध्यक्ष स्थूलभद्र थे।"
    },
    {
        question: "'द्वितीय जैन संगीति' का आयोजन कहाँ हुआ था?",
        answers: [
            { text: "पाटलिपुत्र", correct: false },
            { text: "वल्लभी (गुजरात)", correct: true },
            { text: "राजगृह", correct: false },
            { text: "मथुरा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्वितीय जैन संगीति का आयोजन 512 ईस्वी में वल्लभी (गुजरात) में हुआ था, जिसके अध्यक्ष देवर्धिगण क्षमाश्रमण थे।<br><br><i class='fa-solid fa-angles-right icon'></i> इस संगीति में जैन ग्रंथों को अंतिम रूप से संकलित किया गया था।"
    },
    {
        question: "महावीर की मृत्यु कहाँ हुई थी?",
        answers: [
            { text: "पावापुरी (राजगीर)", correct: true },
            { text: "कुशीनगर", correct: false },
            { text: "श्रवणबेलगोला", correct: false },
            { text: "लुम्बिनी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर की मृत्यु 72 वर्ष की आयु में 468 ईसा पूर्व में पावापुरी (आधुनिक राजगीर, बिहार) में हुई थी।"
    },
    {
        question: "किस शासक ने श्रवणबेलगोला में गोमतेश्वर की विशालकाय प्रतिमा का निर्माण करवाया था?",
        answers: [
            { text: "अशोक", correct: false },
            { text: "चंद्रगुप्त मौर्य", correct: false },
            { text: "चामुंडराय", correct: true },
            { text: "खारवेल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गंग वंश के मंत्री चामुंडराय ने 10वीं शताब्दी ईस्वी में श्रवणबेलगोला (कर्नाटक) में गोमतेश्वर (बाहुबली) की विशालकाय प्रतिमा का निर्माण करवाया था।"
    },
    {
        question: "जैन धर्म के अनुसार, सृष्टि का निर्माण किसने किया?",
        answers: [
            { text: "ईश्वर", correct: false },
            { text: "आत्मा", correct: false },
            { text: "किसी ने नहीं, यह शाश्वत है", correct: true },
            { text: "ब्रह्मा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म ईश्वर को सृष्टि के निर्माता के रूप में स्वीकार नहीं करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उनका मानना है कि सृष्टि शाश्वत है और इसका कोई आरंभ या अंत नहीं है।"
    },
    {
        question: "जैन धर्म के पाँच महाव्रत क्या हैं?",
        answers: [
            { text: "अहिंसा, सत्य, अस्तेय, अपरिग्रह, ब्रह्मचर्य", correct: true },
            { text: "अहिंसा, सत्य, अपरिग्रह, ब्रह्मचर्य, तपस्या", correct: false },
            { text: "अहिंसा, सत्य, अस्तेय, तपस्या, ध्यान", correct: false },
            { text: "अहिंसा, सत्य, अपरिग्रह, तपस्या, दान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म के पाँच महाव्रत हैं: अहिंसा (हिंसा न करना), सत्य (झूठ न बोलना), अस्तेय (चोरी न करना), अपरिग्रह (संपत्ति का संग्रह न करना), और ब्रह्मचर्य (ब्रह्मचर्य का पालन)।<br><br><i class='fa-solid fa-angles-right icon'></i> इनमें से अंतिम व्रत महावीर ने जोड़ा था।"
    },
    {
        question: "जैन धर्म के 23वें तीर्थंकर कौन थे?",
        answers: [
            { text: "महावीर", correct: false },
            { text: "ऋषभदेव", correct: false },
            { text: "पार्श्वनाथ", correct: true },
            { text: "अरिष्टनेमि", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पार्श्वनाथ जैन धर्म के 23वें तीर्थंकर थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने चार महाव्रतों (अहिंसा, सत्य, अस्तेय, अपरिग्रह) का प्रतिपादन किया था, जिसमें पाँचवाँ व्रत (ब्रह्मचर्य) महावीर ने जोड़ा।"
    },
    {
        question: "'जियो और जीने दो' का नारा किसने दिया था?",
        answers: [
            { text: "महात्मा बुद्ध", correct: false },
            { text: "महावीर स्वामी", correct: true },
            { text: "ऋषभदेव", correct: false },
            { text: "पार्श्वनाथ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर स्वामी ने जैन धर्म के मूल सिद्धांत अहिंसा पर जोर देते हुए 'जियो और जीने दो' का नारा दिया था।"
    },
    {
        question: "'दिगंबर' संप्रदाय के अनुयायी किस तीर्थंकर की शिक्षाओं का पालन करते हैं?",
        answers: [
            { text: "ऋषभदेव", correct: false },
            { text: "पार्श्वनाथ", correct: false },
            { text: "महावीर", correct: true },
            { text: "नेमिनाथ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिगंबर संप्रदाय के अनुयायी महावीर की शिक्षाओं का कठोरता से पालन करते हैं, जिसमें पूर्ण नग्नता को मोक्ष के लिए आवश्यक माना जाता है।"
    },
    {
        question: "जैन धर्म के अनुसार, 'सल्लेखना' क्या है?",
        answers: [
            { text: "उपवास के द्वारा शरीर त्यागना", correct: true },
            { text: "जैन मंदिरों का निर्माण", correct: false },
            { text: "जैन ग्रंथों का संकलन", correct: false },
            { text: "तपस्या का एक प्रकार", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सल्लेखना या संथारा जैन धर्म में एक प्रथा है, जिसमें व्यक्ति उपवास करते हुए धीरे-धीरे भोजन और जल त्यागकर स्वेच्छा से मृत्यु को प्राप्त करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मोक्ष प्राप्ति का एक मार्ग माना जाता है।"
    },
    {
        question: "किस शासक ने अपने जीवन के अंतिम समय में जैन धर्म अपनाकर 'सल्लेखना' विधि से अपने प्राण त्यागे थे?",
        answers: [
            { text: "अशोक", correct: false },
            { text: "चंद्रगुप्त मौर्य", correct: true },
            { text: "बिम्बिसार", correct: false },
            { text: "खारवेल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौर्य सम्राट चंद्रगुप्त मौर्य ने अपने जीवन के अंतिम वर्षों में जैन धर्म अपनाया और श्रवणबेलगोला (कर्नाटक) जाकर सल्लेखना विधि से अपने प्राण त्यागे।"
    },
    {
        question: "जैन धर्म में 'ज्ञान' के कितने भेद बताए गए हैं?",
        answers: [
            { text: "दो", correct: false },
            { text: "तीन", correct: false },
            { text: "चार", correct: false },
            { text: "पाँच", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म में ज्ञान के पाँच भेद बताए गए हैं: मति ज्ञान (इंद्रिय जनित ज्ञान), श्रुति ज्ञान (शास्त्रों से प्राप्त ज्ञान), अवधि ज्ञान (दिव्य ज्ञान), मनःपर्यय ज्ञान (दूसरों के मन का ज्ञान), और कैवल्य ज्ञान (पूर्ण ज्ञान)।"
    },
    {
        question: "महावीर को 'जिन' क्यों कहा जाता है?",
        answers: [
            { text: "क्योंकि उन्होंने ज्ञान प्राप्त किया था।", correct: false },
            { text: "क्योंकि उन्होंने इंद्रियों को जीत लिया था।", correct: true },
            { text: "क्योंकि वे एक राजा थे।", correct: false },
            { text: "क्योंकि वे 24वें तीर्थंकर थे।", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जिन' शब्द का अर्थ है 'विजेता'।<br><br><i class='fa-solid fa-angles-right icon'></i> महावीर ने अपनी इंद्रियों पर पूर्ण विजय प्राप्त कर ली थी, इसलिए उन्हें 'जिन' कहा जाता है।"
    },
    {
        question: "जैन धर्म में 'तीर्थंकर' शब्द का क्या अर्थ है?",
        answers: [
            { text: "मुक्ति का मार्ग दिखाने वाला", correct: true },
            { text: "ज्ञान का देवता", correct: false },
            { text: "तपस्या करने वाला", correct: false },
            { text: "उपदेश देने वाला", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तीर्थंकर' का शाब्दिक अर्थ है 'घाट का निर्माता', यानी वह व्यक्ति जो जीवन और मृत्यु के सागर को पार करने के लिए एक मार्ग का निर्माण करता है।"
    },
    {
        question: "जैन धर्म में 'अनुव्रत' किसे कहते हैं?",
        answers: [
            { text: "भिक्षुओं के लिए कठोर नियम", correct: false },
            { text: "गृहस्थों के लिए छोटे नियम", correct: true },
            { text: "जैन मठों का संगठन", correct: false },
            { text: "जैन संगीतियाँ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म में अनुव्रत वे पाँच छोटे नियम हैं जो गृहस्थों के लिए बनाए गए हैं, क्योंकि वे भिक्षुओं की तरह पाँच महाव्रतों का कठोरता से पालन नहीं कर सकते।"
    },
    {
        question: "'स्याद्वाद' का संबंध किस धर्म से है?",
        answers: [
            { text: "बौद्ध धर्म", correct: false },
            { text: "जैन धर्म", correct: true },
            { text: "वैष्णव धर्म", correct: false },
            { text: "शैव धर्म", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्याद्वाद जैन दर्शन का एक महत्वपूर्ण सिद्धांत है, जिसे 'सप्तभंगी' या 'ज्ञान की सापेक्षता' का सिद्धांत भी कहते हैं।"
    },
    {
        question: "जैन धर्म में 'अस्तेय' का क्या अर्थ है?",
        answers: [
            { text: "अहिंसा", correct: false },
            { text: "झूठ न बोलना", correct: false },
            { text: "चोरी न करना", correct: true },
            { text: "संपत्ति का संग्रह न करना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अस्तेय' जैन धर्म के पाँच महाव्रतों में से एक है, जिसका अर्थ है किसी भी रूप में चोरी न करना।"
    },
    {
        question: "जैन धर्म का सबसे महत्वपूर्ण केंद्र 'श्रवणबेलगोला' किस राज्य में स्थित है?",
        answers: [
            { text: "तमिलनाडु", correct: false },
            { text: "आंध्र प्रदेश", correct: false },
            { text: "कर्नाटक", correct: true },
            { text: "महाराष्ट्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्रवणबेलगोला कर्नाटक में स्थित जैनियों का एक प्रमुख तीर्थ स्थल है, जहाँ गोमतेश्वर की विशाल प्रतिमा है और जहाँ चंद्रगुप्त मौर्य ने अपने प्राण त्यागे थे।"
    },
    {
        question: "'श्वेतांबर' संप्रदाय के अनुयायी किस तीर्थंकर की शिक्षाओं का पालन करते हैं?",
        answers: [
            { text: "पार्श्वनाथ", correct: false },
            { text: "महावीर", correct: true },
            { text: "ऋषभदेव", correct: false },
            { text: "नेमिनाथ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्वेतांबर संप्रदाय भी महावीर की शिक्षाओं का पालन करता है, लेकिन वे सफेद वस्त्र पहनते हैं और मानते हैं कि मोक्ष के लिए नग्नता आवश्यक नहीं है।"
    },
    {
        question: "जैन साहित्य को सामूहिक रूप से क्या कहा जाता है?",
        answers: [
            { text: "त्रिपिटक", correct: false },
            { text: "आगम सूत्र", correct: true },
            { text: "पुराण", correct: false },
            { text: "वेदांग", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म के सभी पवित्र ग्रंथों को सामूहिक रूप से आगम सूत्र कहा जाता है।"
    },
    {
        question: "'जैन कल्पसूत्र' की रचना किसने की थी?",
        answers: [
            { text: "महावीर", correct: false },
            { text: "भद्रबाहु", correct: true },
            { text: "स्थूलभद्र", correct: false },
            { text: "देवर्धिगण", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भद्रबाहु द्वारा रचित 'कल्पसूत्र' में जैन तीर्थंकरों का जीवन चरित्र है।"
    },
    {
        question: "'श्वेतांबर' और 'दिगंबर' संप्रदायों का विभाजन किस संगीति के दौरान हुआ था?",
        answers: [
            { text: "प्रथम जैन संगीति (पाटलिपुत्र)", correct: true },
            { text: "द्वितीय जैन संगीति (वल्लभी)", correct: false },
            { text: "तृतीय जैन संगीति", correct: false },
            { text: "कोई नहीं", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मगध में अकाल के कारण भद्रबाहु के नेतृत्व में कुछ जैन दक्षिण भारत चले गए।<br><br><i class='fa-solid fa-angles-right icon'></i> जब वे लौटे तो उन्होंने देखा कि मगध में ठहरे हुए जैनों ने सफेद वस्त्र धारण कर लिए थे, जिससे प्रथम जैन संगीति के बाद श्वेतांबर और दिगंबर संप्रदायों का विभाजन हुआ।"
    },
    {
        question: "'महावीर' के प्रथम अनुयायी कौन थे?",
        answers: [
            { text: "भद्रबाहु", correct: false },
            { text: "स्थूलभद्र", correct: false },
            { text: "जमालि", correct: true },
            { text: "गोसाल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जमालि महावीर के दामाद थे और वे उनके पहले अनुयायी बने।"
    },
    {
        question: "महावीर के बाद जैन संघ का अध्यक्ष कौन बना?",
        answers: [
            { text: "स्थूलभद्र", correct: false },
            { text: "भद्रबाहु", correct: false },
            { text: "जंबु", correct: false },
            { text: "सुधर्मन", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर की मृत्यु के बाद सुधर्मन जैन संघ के पहले अध्यक्ष बने।"
    },
    {
        question: "'पंच महाव्रत' में से कौन सा व्रत महावीर ने जोड़ा था?",
        answers: [
            { text: "अहिंसा", correct: false },
            { text: "सत्य", correct: false },
            { text: "अस्तेय", correct: false },
            { text: "ब्रह्मचर्य", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म के 23वें तीर्थंकर पार्श्वनाथ ने चार महाव्रत दिए थे।<br><br><i class='fa-solid fa-angles-right icon'></i> महावीर ने इन चारों में पाँचवाँ व्रत ब्रह्मचर्य को जोड़ा।"
    },
    {
        question: "महावीर की मृत्यु कहाँ हुई थी?",
        answers: [
            { text: "पावापुरी (राजगीर)", correct: true },
            { text: "कुशीनगर", correct: false },
            { text: "श्रवणबेलगोला", correct: false },
            { text: "लुम्बिनी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर की मृत्यु 72 वर्ष की आयु में 468 ईसा पूर्व में पावापुरी (आधुनिक राजगीर, बिहार) में हुई थी।"
    },
    {
        question: "जैन धर्म के किस तीर्थंकर का प्रतीक चिह्न 'साँप' है?",
        answers: [
            { text: "ऋषभदेव", correct: false },
            { text: "पार्श्वनाथ", correct: true },
            { text: "महावीर", correct: false },
            { text: "नेमिनाथ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पार्श्वनाथ का प्रतीक चिह्न साँप है।<br><br><i class='fa-solid fa-angles-right icon'></i> ऋषभदेव का बैल, महावीर का सिंह, और नेमिनाथ का शंख है।"
    },
    {
        question: "जैन धर्म में 'अपरिग्रह' का क्या अर्थ है?",
        answers: [
            { text: "हिंसा न करना", correct: false },
            { text: "झूठ न बोलना", correct: false },
            { text: "चोरी न करना", correct: false },
            { text: "संपत्ति का संग्रह न करना", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अपरिग्रह' का अर्थ है किसी भी प्रकार की भौतिक संपत्ति या धन का संग्रह न करना।"
    },
    {
        question: "जैन धर्म का सबसे महत्वपूर्ण सिद्धांत क्या है?",
        answers: [
            { text: "कर्म", correct: false },
            { text: "पुनर्जन्म", correct: false },
            { text: "अहिंसा", correct: true },
            { text: "ईश्वर में विश्वास", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म का सबसे केंद्रीय और महत्वपूर्ण सिद्धांत अहिंसा है, जो मन, वचन और कर्म से किसी भी जीव को हानि न पहुँचाने पर जोर देता है।"
    },
    {
        question: "महावीर की पुत्री का विवाह किसके साथ हुआ था?",
        answers: [
            { text: "महावीर के भाई", correct: false },
            { text: "महावीर के चचेरे भाई", correct: false },
            { text: "महावीर के शिष्य", correct: false },
            { text: "महावीर के दामाद जमालि", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर की पुत्री प्रियदर्शिनी का विवाह उनके दामाद जमालि से हुआ था, जो उनके प्रथम शिष्य भी बने।"
    },
    {
        question: "महावीर ने अपने उपदेश कहाँ दिए थे?",
        answers: [
            { text: "श्रावस्ती", correct: false },
            { text: "कपिलवस्तु", correct: false },
            { text: "वैशाली", correct: true },
            { text: "पाटलिपुत्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर ने अपने उपदेश मुख्य रूप से वैशाली के आसपास के क्षेत्रों में दिए थे, जहाँ उनका जन्म हुआ था।"
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