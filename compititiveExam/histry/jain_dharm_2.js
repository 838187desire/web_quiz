const questions = [
    {
        topHeading: "जैन धर्म पर आधारित बहुविकल्पी प्रश्न part 2 (quiz_no.22)"
    },
    {
        question: "जैन धर्म के किस तीर्थंकर का प्रतीक चिह्न 'साँप' है?",
        answers: [
            { text: "ऋषभदेव", correct: false },
            { text: "पार्श्वनाथ", correct: true },
            { text: "महावीर", correct: false },
            { text: "अरिष्टनेमि", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म के 23वें तीर्थंकर पार्श्वनाथ का प्रतीक चिह्न साँप है।"
    },
    {
        question: "जैन धर्म के अनुसार, 'अहिंसा' का क्या अर्थ है?",
        answers: [
            { text: "मन, वचन और कर्म से किसी को नुकसान न पहुँचाना", correct: true },
            { text: "केवल शारीरिक हिंसा से बचना", correct: false },
            { text: "झूठ न बोलना", correct: false },
            { text: "चोरी न करना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म में अहिंसा का अर्थ बहुत व्यापक है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें मन, वचन और कर्म से किसी भी प्राणी को पीड़ा न पहुँचाना शामिल है।"
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
        question: "जैन धर्म में 'ज्ञान' के कितने भेद बताए गए हैं?",
        answers: [
            { text: "दो", correct: false },
            { text: "तीन", correct: false },
            { text: "चार", correct: false },
            { text: "पाँच", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म में ज्ञान के पाँच भेद हैं: मति, श्रुति, अवधि, मनःपर्यय, और कैवल्य।"
    },
    {
        question: "'दिगंबर' और 'श्वेतांबर' संप्रदायों का विभाजन किस काल में हुआ था?",
        answers: [
            { text: "महावीर के जीवन काल में", correct: false },
            { text: "मौर्य काल में", correct: true },
            { text: "गुप्त काल में", correct: false },
            { text: "हर्ष के काल में", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त मौर्य के समय मगध में पड़े अकाल के कारण दिगंबर और श्वेतांबर संप्रदायों का विभाजन हुआ।<br><br><i class='fa-solid fa-angles-right icon'></i> दिगंबर संप्रदाय के भिक्षु भद्रबाहु के नेतृत्व में दक्षिण चले गए थे।"
    },
    {
        question: "जैन धर्म में 'कैवल्य' की प्राप्ति के बाद क्या होता है?",
        answers: [
            { text: "व्यक्ति राजा बन जाता है", correct: false },
            { text: "व्यक्ति मोक्ष प्राप्त कर लेता है", correct: true },
            { text: "व्यक्ति ईश्वर बन जाता है", correct: false },
            { text: "व्यक्ति एक साधु बन जाता है", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म में 'कैवल्य' पूर्ण ज्ञान की प्राप्ति है, जिसके बाद व्यक्ति सभी सांसारिक बंधनों से मुक्त होकर मोक्ष प्राप्त कर लेता है।"
    },
    {
        question: "'अनुव्रत' का संबंध किस धर्म से है?",
        answers: [
            { text: "बौद्ध धर्म", correct: false },
            { text: "जैन धर्म", correct: true },
            { text: "शैव धर्म", correct: false },
            { text: "वैष्णव धर्म", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म में अनुव्रत गृहस्थों के लिए निर्धारित पाँच छोटे व्रत हैं, जबकि भिक्षुओं के लिए पाँच महाव्रत हैं।"
    },
    {
        question: "किस शासक के शासनकाल में द्वितीय जैन संगीति का आयोजन हुआ था?",
        answers: [
            { text: "चंद्रगुप्त मौर्य", correct: false },
            { text: "अशोक", correct: false },
            { text: "देवर्धिगण क्षमाश्रमण", correct: true },
            { text: "खारवेल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्वितीय जैन संगीति का आयोजन 512 ईस्वी में वल्लभी (गुजरात) में हुआ था, जिसके अध्यक्ष देवर्धिगण क्षमाश्रमण थे।"
    },
    {
        question: "जैन धर्म के अनुसार, 'सल्लेखना' क्या है?",
        answers: [
            { text: "जैन मंदिरों का निर्माण", correct: false },
            { text: "उपवास के द्वारा शरीर त्यागना", correct: true },
            { text: "जैन ग्रंथों का संकलन", correct: false },
            { text: "तपस्या का एक प्रकार", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सल्लेखना जैन धर्म में मोक्ष प्राप्ति के लिए स्वेच्छा से उपवास के माध्यम से शरीर त्यागने की प्रथा है।"
    },
    {
        question: "महावीर के दामाद का नाम क्या था?",
        answers: [
            { text: "जमालि", correct: true },
            { text: "गोसाल", correct: false },
            { text: "स्थूलभद्र", correct: false },
            { text: "भद्रबाहु", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर की पुत्री प्रियदर्शिनी का विवाह उनके दामाद जमालि से हुआ था, जो उनके पहले शिष्य भी थे।"
    },
    {
        question: "'स्याद्वाद' का सिद्धांत किससे संबंधित है?",
        answers: [
            { text: "अनेकांतवाद", correct: true },
            { text: "कर्म का सिद्धांत", correct: false },
            { text: "पुनर्जन्म", correct: false },
            { text: "ईश्वर की अवधारणा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्याद्वाद (ज्ञान की सापेक्षता) जैन धर्म का एक महत्वपूर्ण सिद्धांत है, जो अनेकांतवाद (अनेक दृष्टिकोणों का सिद्धांत) से संबंधित है।"
    },
    {
        question: "किस शासक ने श्रवणबेलगोला में गोमतेश्वर की विशालकाय प्रतिमा का निर्माण करवाया था?",
        answers: [
            { text: "अशोक", correct: false },
            { text: "चंद्रगुप्त मौर्य", correct: false },
            { text: "चामुंडराय", correct: true },
            { text: "खारवेल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गंग वंश के मंत्री चामुंडराय ने 10वीं शताब्दी में श्रवणबेलगोला (कर्नाटक) में गोमतेश्वर की विशाल प्रतिमा का निर्माण करवाया था।"
    },
    {
        question: "'जैन साहित्य' को सामूहिक रूप से क्या कहा जाता है?",
        answers: [
            { text: "त्रिपिटक", correct: false },
            { text: "आगम सूत्र", correct: true },
            { text: "पुराण", correct: false },
            { text: "वेदांग", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म के सभी पवित्र ग्रंथों को सामूहिक रूप से आगम सूत्र कहा जाता है।"
    },
    {
        question: "महावीर ने किस भाषा में उपदेश दिए थे?",
        answers: [
            { text: "पाली", correct: false },
            { text: "संस्कृत", correct: false },
            { text: "प्राकृत (अर्ध-मागधी)", correct: true },
            { text: "मगधी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर ने आम लोगों तक अपनी शिक्षाएँ पहुँचाने के लिए प्राकृत (अर्ध-मागधी) भाषा का उपयोग किया था।"
    },
    {
        question: "जैन धर्म के अनुसार, 'अपरिग्रह' का क्या अर्थ है?",
        answers: [
            { text: "हिंसा न करना", correct: false },
            { text: "झूठ न बोलना", correct: false },
            { text: "चोरी न करना", correct: false },
            { text: "संपत्ति का संग्रह न करना", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपरिग्रह जैन धर्म के पाँच महाव्रतों में से एक है, जिसका अर्थ है भौतिक वस्तुओं और धन का संचय न करना।"
    },
    {
        question: "'प्रथम जैन संगीति' का आयोजन किस स्थान पर हुआ था?",
        answers: [
            { text: "वल्लभी", correct: false },
            { text: "राजगृह", correct: false },
            { text: "पाटलिपुत्र", correct: true },
            { text: "मथुरा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रथम जैन संगीति का आयोजन मौर्य शासक चंद्रगुप्त मौर्य के समय पाटलिपुत्र में हुआ था।"
    },
    {
        question: "जैन धर्म के किस संप्रदाय के भिक्षु सफेद वस्त्र धारण करते हैं?",
        answers: [
            { text: "दिगंबर", correct: false },
            { text: "श्वेतांबर", correct: true },
            { text: "थेरवाद", correct: false },
            { text: "हीनयान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्वेतांबर संप्रदाय के भिक्षु सफेद वस्त्र पहनते हैं, जबकि दिगंबर संप्रदाय के भिक्षु नग्न रहते हैं।"
    },
    {
        question: "'कल्पसूत्र' की रचना किसने की थी, जिसमें जैन तीर्थंकरों की जीवनी है?",
        answers: [
            { text: "महावीर", correct: false },
            { text: "स्थूलभद्र", correct: false },
            { text: "भद्रबाहु", correct: true },
            { text: "देवर्धिगण", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन तीर्थंकरों की जीवनियों का वर्णन भद्रबाहु द्वारा रचित 'कल्पसूत्र' में मिलता है।"
    },
    {
        question: "जैन धर्म में 'जिन' का क्या अर्थ है?",
        answers: [
            { text: "विजेता", correct: true },
            { text: "देवता", correct: false },
            { text: "गुरु", correct: false },
            { text: "ज्ञानी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जिन' का शाब्दिक अर्थ है विजेता, यानी वह व्यक्ति जिसने अपनी इंद्रियों पर विजय प्राप्त कर ली हो।"
    },
    {
        question: "महावीर के बचपन का नाम क्या था?",
        answers: [
            { text: "सिद्धार्थ", correct: false },
            { text: "गौतम", correct: false },
            { text: "वर्धमान", correct: true },
            { text: "ऋषभ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर के बचपन का नाम वर्धमान था।"
    },
    {
        question: "महावीर की मृत्यु किस स्थान पर हुई थी?",
        answers: [
            { text: "कुशीनगर", correct: false },
            { text: "पावापुरी", correct: true },
            { text: "सारनाथ", correct: false },
            { text: "श्रवणबेलगोला", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर का निर्वाण (मृत्यु) पावापुरी (बिहार) में 468 ईसा पूर्व में हुआ था।"
    },
    {
        question: "किस शासक के शासनकाल में द्वितीय जैन संगीति का आयोजन हुआ था?",
        answers: [
            { text: "चंद्रगुप्त मौर्य", correct: false },
            { text: "अशोक", correct: false },
            { text: "देवर्धिगण क्षमाश्रमण", correct: true },
            { text: "खारवेल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्वितीय जैन संगीति का आयोजन 512 ईस्वी में वल्लभी (गुजरात) में हुआ था, जिसके अध्यक्ष देवर्धिगण क्षमाश्रमण थे।"
    },
    {
        question: "जैन धर्म के 24वें तीर्थंकर का प्रतीक चिह्न क्या था?",
        answers: [
            { text: "साँड़", correct: false },
            { text: "सर्प", correct: false },
            { text: "सिंह", correct: true },
            { text: "शंख", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर (24वें तीर्थंकर) का प्रतीक चिह्न सिंह था।"
    },
    {
        question: "जैन धर्म के 'तीन रत्न' (त्रिरत्न) क्या हैं?",
        answers: [
            { text: "अहिंसा, सत्य, अपरिग्रह", correct: false },
            { text: "सम्यक दर्शन, सम्यक ज्ञान, सम्यक आचरण", correct: true },
            { text: "बुद्ध, धम्म, संघ", correct: false },
            { text: "अस्तेय, ब्रह्मचर्य, तपस्या", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म के तीन रत्न हैं: सम्यक दर्शन (सही विश्वास), सम्यक ज्ञान (सही ज्ञान), और सम्यक आचरण (सही आचरण)।"
    },
    {
        question: "जैन धर्म में 'अस्तेय' का क्या अर्थ है?",
        answers: [
            { text: "हिंसा न करना", correct: false },
            { text: "चोरी न करना", correct: true },
            { text: "झूठ न बोलना", correct: false },
            { text: "संपत्ति का संग्रह न करना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अस्तेय का अर्थ है 'चोरी न करना' या बिना अनुमति के किसी भी वस्तु को न लेना।"
    },
    {
        question: "जैन धर्म के 22वें तीर्थंकर कौन थे, जिनका उल्लेख ऋग्वेद में भी मिलता है?",
        answers: [
            { text: "ऋषभदेव", correct: false },
            { text: "पार्श्वनाथ", correct: false },
            { text: "अरिष्टनेमि", correct: true },
            { text: "महावीर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरिष्टनेमि जैन धर्म के 22वें तीर्थंकर थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उनका नाम ऋग्वेद में भगवान कृष्ण के समकालीन के रूप में उल्लिखित है, जिससे जैन धर्म की प्राचीनता का पता चलता है।"
    },
    {
        question: "'श्वेतांबर' और 'दिगंबर' संप्रदायों का विभाजन मुख्य रूप से किस कारण हुआ था?",
        answers: [
            { text: "दार्शनिक मतभेद", correct: false },
            { text: "भाषा का अंतर", correct: false },
            { text: "अकाल के कारण उत्पन्न मतभेद", correct: true },
            { text: "भौगोलिक दूरी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौर्य काल में मगध में पड़े एक भीषण अकाल के कारण जैन भिक्षु दो समूहों में बँट गए थे।<br><br><i class='fa-solid fa-angles-right icon'></i> एक समूह भद्रबाहु के नेतृत्व में दक्षिण चला गया, जबकि दूसरा स्थूलभद्र के नेतृत्व में मगध में ही रहा।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी घटना के कारण दोनों संप्रदायों का विभाजन हुआ।"
    },
    {
        question: "जैन धर्म के अनुसार, 'मोक्ष' का क्या अर्थ है?",
        answers: [
            { text: "स्वर्ग की प्राप्ति", correct: false },
            { text: "पुनर्जन्म से मुक्ति", correct: true },
            { text: "ईश्वर का साक्षात्कार", correct: false },
            { text: "धन की प्राप्ति", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म में मोक्ष का अर्थ है आत्मा का कर्मों के बंधन से पूरी तरह मुक्त हो जाना, जिससे व्यक्ति को जन्म और मृत्यु के चक्र से हमेशा के लिए छुटकारा मिल जाता है।"
    },
    {
        question: "'जैन साहित्य' को किस भाषा में लिखा गया है?",
        answers: [
            { text: "संस्कृत और प्राकृत", correct: true },
            { text: "पाली और मगधी", correct: false },
            { text: "संस्कृत और पाली", correct: false },
            { text: "प्राकृत और अपभ्रंश", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन साहित्य, जिसे आगम सूत्र कहा जाता है, मुख्य रूप से प्राकृत और संस्कृत भाषाओं में लिखा गया था।"
    },
    {
        question: "जैन धर्म में 'त्रिरत्न' का पालन करने से किस लक्ष्य की प्राप्ति होती है?",
        answers: [
            { text: "धन की प्राप्ति", correct: false },
            { text: "यश की प्राप्ति", correct: false },
            { text: "कर्मों से मुक्ति", correct: false },
            { text: "मोक्ष", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म के त्रिरत्न (सम्यक दर्शन, सम्यक ज्ञान, सम्यक आचरण) का पालन करने से व्यक्ति को कर्मों के बंधन से मुक्ति मिलती है और वह अंततः मोक्ष प्राप्त करता है।"
    },
    {
        question: "'कल्पसूत्र' में किसका वर्णन है?",
        answers: [
            { text: "जैन धर्म के सिद्धांतों का", correct: false },
            { text: "महावीर के उपदेशों का", correct: false },
            { text: "जैन तीर्थंकरों की जीवनी का", correct: true },
            { text: "जैन मठों के नियमों का", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भद्रबाहु द्वारा रचित 'कल्पसूत्र' में जैन तीर्थंकरों, विशेष रूप से ऋषभदेव, पार्श्वनाथ और महावीर के जीवन का वर्णन है।"
    },
    {
        question: "जैन धर्म के किस संप्रदाय के अनुयायी साध्वियों को मोक्ष प्राप्त करने योग्य नहीं मानते?",
        answers: [
            { text: "श्वेतांबर", correct: false },
            { text: "दिगंबर", correct: true },
            { text: "थेरवाद", correct: false },
            { text: "हीनयान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिगंबर संप्रदाय का मानना है कि मोक्ष के लिए पूर्ण नग्नता आवश्यक है, जो साध्वियों के लिए संभव नहीं है, इसलिए वे मोक्ष प्राप्त करने योग्य नहीं हैं।"
    },
    {
        question: "जैन धर्म में किस कर्म को सबसे महत्वपूर्ण माना गया है?",
        answers: [
            { text: "तपस्या", correct: false },
            { text: "दान", correct: false },
            { text: "ध्यान", correct: false },
            { text: "अहिंसा", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म का सबसे महत्वपूर्ण और केंद्रीय सिद्धांत अहिंसा है, जो अन्य सभी नियमों और व्रतों का आधार है।"
    },
    {
        question: "'दिगंबर' संप्रदाय की स्थापना किसने की थी?",
        answers: [
            { text: "स्थूलभद्र", correct: false },
            { text: "भद्रबाहु", correct: true },
            { text: "महावीर", correct: false },
            { text: "ऋषभदेव", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिगंबर संप्रदाय की स्थापना भद्रबाहु ने की थी, जिन्होंने अकाल के समय अपने अनुयायियों के साथ दक्षिण भारत की यात्रा की थी।"
    },
    {
        question: "जैन धर्म का सबसे पवित्र त्यौहार क्या है?",
        answers: [
            { text: "दीपावली", correct: false },
            { text: "पर्युषण", correct: true },
            { text: "होली", correct: false },
            { text: "महावीर जयंती", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पर्युषण जैन धर्म का एक महत्वपूर्ण और पवित्र त्यौहार है, जो श्वेतांबर और दिगंबर दोनों संप्रदायों द्वारा मनाया जाता है।"
    },
    {
        question: "जैन धर्म के 23वें तीर्थंकर पार्श्वनाथ ने कितने महाव्रतों का प्रतिपादन किया था?",
        answers: [
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false },
            { text: "6", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पार्श्वनाथ ने चार महाव्रतों का प्रतिपादन किया था: अहिंसा, सत्य, अस्तेय और अपरिग्रह।<br><br><i class='fa-solid fa-angles-right icon'></i> पाँचवाँ व्रत (ब्रह्मचर्य) महावीर ने जोड़ा।"
    },
    {
        question: "'श्वेतांबर' संप्रदाय की स्थापना किसने की थी?",
        answers: [
            { text: "भद्रबाहु", correct: false },
            { text: "स्थूलभद्र", correct: true },
            { text: "महावीर", correct: false },
            { text: "ऋषभदेव", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्वेतांबर संप्रदाय की स्थापना स्थूलभद्र ने की थी, जिन्होंने मगध में ही रहकर भिक्षुओं को सफेद वस्त्र पहनने की अनुमति दी थी।"
    },
    {
        question: "जैन धर्म के अनुसार, 'अनेकांतवाद' का क्या अर्थ है?",
        answers: [
            { text: "एक ही सत्य के कई पहलू हो सकते हैं।", correct: true },
            { text: "आत्मा और परमात्मा एक हैं।", correct: false },
            { text: "ईश्वर का अस्तित्व नहीं है।", correct: false },
            { text: "सृष्टि का निर्माण अनादि है।", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनेकांतवाद का सिद्धांत बताता है कि किसी भी वस्तु या सत्य को कई अलग-अलग दृष्टिकोणों से देखा जा सकता है, और कोई भी एक दृष्टिकोण पूर्ण सत्य नहीं हो सकता।"
    },
    {
        question: "महावीर ने कितने वर्ष की आयु में ज्ञान प्राप्त किया था?",
        answers: [
            { text: "30 वर्ष", correct: false },
            { text: "35 वर्ष", correct: false },
            { text: "42 वर्ष", correct: true },
            { text: "72 वर्ष", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर ने 30 वर्ष की आयु में घर छोड़ा था और 12 वर्षों की कठोर तपस्या के बाद 42 वर्ष की आयु में उन्हें कैवल्य (पूर्ण ज्ञान) प्राप्त हुआ।"
    },
    {
        question: "जैन धर्म का दूसरा तीर्थंकर कौन था?",
        answers: [
            { text: "ऋषभदेव", correct: false },
            { text: "अजितनाथ", correct: true },
            { text: "पार्श्वनाथ", correct: false },
            { text: "अरिष्टनेमि", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजितनाथ जैन धर्म के दूसरे तीर्थंकर थे।<br><br><i class='fa-solid fa-angles-right icon'></i> ऋषभदेव पहले, पार्श्वनाथ 23वें और महावीर 24वें तीर्थंकर थे।"
    },
    {
        question: "'कल्पसूत्र' किस भाषा में लिखा गया है?",
        answers: [
            { text: "पाली", correct: false },
            { text: "प्राकृत", correct: true },
            { text: "संस्कृत", correct: false },
            { text: "अपभ्रंश", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भद्रबाहु द्वारा रचित 'कल्पसूत्र' में जैन तीर्थंकरों की जीवनी का वर्णन प्राकृत भाषा में किया गया है।"
    },
    {
        question: "जैन धर्म में 'निर्वाण' शब्द का क्या अर्थ है?",
        answers: [
            { text: "जन्म", correct: false },
            { text: "मृत्यु", correct: true },
            { text: "पुनर्जन्म", correct: false },
            { text: "कैवल्य", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म में 'निर्वाण' शब्द का उपयोग मुख्य रूप से मृत्यु के लिए किया जाता है, जब व्यक्ति मोक्ष प्राप्त कर लेता है।"
    },
    {
        question: "जैन धर्म के 20वें तीर्थंकर का नाम क्या था?",
        answers: [
            { text: "नेमिनाथ", correct: true },
            { text: "सुमतिनाथ", correct: false },
            { text: "मुनिसुव्रतनाथ", correct: false },
            { text: "अरिष्टनेमि", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नेमिनाथ जैन धर्म के 20वें तीर्थंकर थे, जिनका प्रतीक चिह्न शंख था।"
    },
    {
        question: "जैन धर्म के अनुसार, आत्मा के कितने प्रकार होते हैं?",
        answers: [
            { text: "एक", correct: false },
            { text: "दो", correct: false },
            { text: "अनेक", correct: true },
            { text: "पाँच", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म का मानना है कि संसार में अनंत आत्माएँ हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> हर जीव में एक स्वतंत्र आत्मा होती है।"
    },
    {
        question: "जैन धर्म के अनुसार, कर्म के कितने प्रकार होते हैं?",
        answers: [
            { text: "3", correct: false },
            { text: "5", correct: false },
            { text: "8", correct: true },
            { text: "10", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन दर्शन के अनुसार, कर्म आठ प्रकार के होते हैं, जो आत्मा को संसार में बांधते हैं।"
    },
    {
        question: "जैन धर्म के किस संप्रदाय के अनुयायी साध्वियों को मोक्ष प्राप्त करने योग्य नहीं मानते?",
        answers: [
            { text: "श्वेतांबर", correct: false },
            { text: "दिगंबर", correct: true },
            { text: "थेरवाद", correct: false },
            { text: "हीनयान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिगंबर संप्रदाय का मानना है कि मोक्ष के लिए पूर्ण नग्नता आवश्यक है, जो साध्वियों के लिए संभव नहीं है, इसलिए वे मोक्ष प्राप्त करने योग्य नहीं हैं।"
    },
    {
        question: "महावीर के माता-पिता किस धर्म के अनुयायी थे?",
        answers: [
            { text: "बौद्ध धर्म", correct: false },
            { text: "वैदिक धर्म", correct: false },
            { text: "जैन धर्म", correct: true },
            { text: "शैव धर्म", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीर के माता-पिता 23वें तीर्थंकर पार्श्वनाथ के अनुयायी थे।"
    },
    {
        question: "'भद्रबाहु' ने जैन धर्म के किस संप्रदाय का नेतृत्व किया था?",
        answers: [
            { text: "श्वेतांबर", correct: false },
            { text: "दिगंबर", correct: true },
            { text: "थेरवाद", correct: false },
            { text: "हीनयान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भद्रबाहु ने उन जैन भिक्षुओं का नेतृत्व किया था जो अकाल के समय दक्षिण भारत चले गए थे और बाद में दिगंबर संप्रदाय के रूप में जाने गए।"
    },
    {
        question: "जैन धर्म में 'केवलिन' (Kaivalin) किसे कहा जाता है?",
        answers: [
            { text: "जिसने घर छोड़ दिया हो", correct: false },
            { text: "जिसे पूर्ण ज्ञान प्राप्त हो गया हो", correct: true },
            { text: "जिसने तपस्या की हो", correct: false },
            { text: "जिसने उपदेश दिए हों", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'केवलिन' उस व्यक्ति को कहा जाता है जिसे कैवल्य (पूर्ण ज्ञान) की प्राप्ति हो गई हो।"
    },
    {
        question: "जैन धर्म के अनुसार, महावीर का पहला विरोध किसने किया था?",
        answers: [
            { text: "उनके दामाद जमालि ने", correct: true },
            { text: "उनके पिता सिद्धार्थ ने", correct: false },
            { text: "उनके शिष्य गोसाल ने", correct: false },
            { text: "उनके भाई नंदीवर्धन ने", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जमालि, जो महावीर के पहले शिष्य भी थे, ने उनसे 'क्रियामाणकृत' के सिद्धांत पर असहमति के कारण उनका पहला विरोध किया था।"
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