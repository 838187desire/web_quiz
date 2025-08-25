const questions = [
    {
        topHeading: "शैव धर्म पर आधारित बहुविकल्पी प्रश्न part 1 (quiz_no.37)"
    },
    {
        question: "शैव धर्म के अनुसार, 'शिव' का क्या अर्थ है?",
        answers: [
            { text: "विनाशकर्ता", correct: false },
            { text: "कल्याणकारी", correct: true },
            { text: "सृष्टि का निर्माता", correct: false },
            { text: "पालनकर्ता", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शैव धर्म में 'शिव' शब्द का अर्थ है 'कल्याणकारी' या 'शुभ'।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्हें त्रिमूर्ति में विनाशकर्ता माना जाता है, लेकिन उनके अनुयायियों के लिए वे सर्वोच्च कल्याणकारी हैं।"
    },
    {
        question: "'पशुपतिनाथ' किस देवता का एक रूप है?",
        answers: [
            { text: "ब्रह्मा", correct: false },
            { text: "विष्णु", correct: false },
            { text: "शिव", correct: true },
            { text: "इंद्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पशुपतिनाथ भगवान शिव का एक प्रसिद्ध रूप है, जिनका सबसे महत्वपूर्ण मंदिर नेपाल के काठमांडू में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्हें सभी प्राणियों (पशुओं) का स्वामी माना जाता है।"
    },
    {
        question: "सिंधु घाटी सभ्यता से प्राप्त किस मोहर पर शिव के प्रारंभिक रूप माने जाने वाले 'आद्य शिव' की आकृति मिलती है?",
        answers: [
            { text: "योगी की मुद्रा में एक पुरुष", correct: true },
            { text: "एक horned देवता", correct: false },
            { text: "एक बैल", correct: false },
            { text: "एक नटराज", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो से प्राप्त एक मोहर पर पद्मासन में बैठे, चारों ओर जानवरों से घिरे एक देवता की आकृति मिली है, जिसे पुरातत्वविदों ने 'आद्य शिव' (Proto-Shiva) माना है।"
    },
    {
        question: "वेदों में शिव के लिए किस नाम का उल्लेख मिलता है?",
        answers: [
            { text: "रुद्र", correct: true },
            { text: "शंभु", correct: false },
            { text: "शंकर", correct: false },
            { text: "महादेव", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में शिव के लिए 'रुद्र' नाम का उल्लेख मिलता है, जिन्हें तूफानों का देवता और एक भयंकर देवता माना गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में रुद्र को ही शिव के रूप में स्वीकार किया गया।"
    },
    {
        question: "शैव धर्म का सबसे प्राचीन संप्रदाय कौन-सा था?",
        answers: [
            { text: "लिंगायत", correct: false },
            { text: "कापालिक", correct: false },
            { text: "पाशुपत", correct: true },
            { text: "कालामुख", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पाशुपत शैव धर्म का सबसे प्राचीन संप्रदाय था, जिसकी स्थापना लकुलीश नामक व्यक्ति ने की थी।"
    },
    {
        question: "'अर्धनारीश्वर' के रूप में शिव का चित्रण किस बात का प्रतीक है?",
        answers: [
            { text: "स्त्री-पुरुष का समान अधिकार", correct: false },
            { text: "प्रकृति और पुरुष के बीच संतुलन", correct: true },
            { text: "स्त्री-पुरुष के बीच शक्ति का मिश्रण", correct: false },
            { text: "शिव की असीमित शक्ति", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अर्धनारीश्वर रूप शिव और उनकी पत्नी पार्वती (शक्ति/प्रकृति) का संयुक्त रूप है, जो सृष्टि में पुरुष और प्रकृति के संतुलन का प्रतीक है।"
    },
    {
        question: "'लिंगायत' संप्रदाय की स्थापना किसने की थी?",
        answers: [
            { text: "लकुलीश", correct: false },
            { text: "वासव", correct: true },
            { text: "शंकराचार्य", correct: false },
            { text: "रामानुज", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिंगायत संप्रदाय की स्थापना 12वीं शताब्दी में वासव ने कर्नाटक में की थी।"
    },
    {
        question: "'शैव धर्म' को सबसे अधिक संरक्षण किस दक्षिण भारतीय राजवंश ने दिया था?",
        answers: [
            { text: "चोल", correct: true },
            { text: "चालुक्य", correct: false },
            { text: "राष्ट्रकूट", correct: false },
            { text: "पल्लव", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोल शासक शैव धर्म के कट्टर अनुयायी थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने शैव मंदिरों, विशेष रूप से तंजौर के बृहदेश्वर मंदिर का निर्माण करवाया।"
    },
    {
        question: "'त्रिमूर्ति' की अवधारणा में शिव को किस रूप में दर्शाया गया है?",
        answers: [
            { text: "निर्माता", correct: false },
            { text: "पालनकर्ता", correct: false },
            { text: "संहार", correct: true },
            { text: "संरक्षक", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंदू धर्म की त्रिमूर्ति (ब्रह्मा, विष्णु, महेश) में शिव को सृष्टि का संहारक या विनाशक माना जाता है, जो संतुलन बनाए रखने के लिए आवश्यक है।"
    },
    {
        question: "किस पुराण में शैव धर्म का सबसे विस्तृत वर्णन मिलता है?",
        answers: [
            { text: "विष्णु पुराण", correct: false },
            { text: "शिव पुराण", correct: true },
            { text: "मत्स्य पुराण", correct: false },
            { text: "भागवत पुराण", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैसा कि नाम से ही स्पष्ट है, शिव पुराण शैव धर्म का एक प्रमुख ग्रंथ है जिसमें भगवान शिव के विभिन्न रूपों, उनकी महिमा, और उनकी पूजा-पद्धति का विस्तृत वर्णन है।"
    },
    {
        question: "'लिंगायत' संप्रदाय के अनुयायी किस पर अधिक जोर देते हैं?",
        answers: [
            { text: "मूर्ति पूजा", correct: false },
            { text: "शिव लिंग की पूजा", correct: true },
            { text: "वैदिक यज्ञ", correct: false },
            { text: "देवी पूजा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिंगायत संप्रदाय के अनुयायी शिव को ही एकमात्र परम सत्य मानते हैं और वे शिव लिंग की पूजा करते हैं, जिसे वे अपने शरीर पर धारण करते हैं।"
    },
    {
        question: "शैव धर्म के किस संप्रदाय के अनुयायी नर-कपालों में भोजन और जल ग्रहण करते थे?",
        answers: [
            { text: "पाशुपत", correct: false },
            { text: "लिंगायत", correct: false },
            { text: "कापालिक", correct: true },
            { text: "कालामुख", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कापालिक संप्रदाय के अनुयायी अपनी तपस्या के लिए अत्यधिक कठोर और भयानक साधनाएं करते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> वे नर-कपालों में भोजन और जल ग्रहण करते थे और शरीर पर भस्म लगाते थे।"
    },
    {
        question: "'महाकाल' मंदिर कहाँ स्थित है, जो शैव धर्म का एक प्रमुख केंद्र है?",
        answers: [
            { text: "वाराणसी", correct: false },
            { text: "उज्जैन", correct: true },
            { text: "भुवनेश्वर", correct: false },
            { text: "सोमनाथ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उज्जैन (मध्य प्रदेश) में स्थित महाकालेश्वर ज्योतिर्लिंग बारह ज्योतिर्लिंगों में से एक है और शैव धर्म का एक महत्वपूर्ण तीर्थस्थल है।"
    },
    {
        question: "'शैव' और 'शाक्त' धर्म के बीच क्या संबंध है?",
        answers: [
            { text: "दोनों एक दूसरे के विरोधी हैं।", correct: false },
            { text: "शाक्त धर्म शैव धर्म का ही एक हिस्सा है।", correct: false },
            { text: "शाक्त धर्म शिव की पत्नी (शक्ति) की पूजा पर केंद्रित है।", correct: true },
            { text: "दोनों का कोई संबंध नहीं है।", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शाक्त धर्म शिव की पत्नी पार्वती, दुर्गा, काली आदि देवी (शक्ति) की पूजा पर केंद्रित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शैव धर्म से जुड़ा हुआ है क्योंकि इसमें शिव को शक्ति का पूरक माना जाता है।"
    },
    {
        question: "'एलिफेंटा' की गुफाओं में किस देवता की विशाल प्रतिमा है?",
        answers: [
            { text: "विष्णु", correct: false },
            { text: "शिव", correct: true },
            { text: "ब्रह्मा", correct: false },
            { text: "गणेश", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुंबई के पास स्थित एलिफेंटा की गुफाएँ शैव धर्म को समर्पित हैं, जहाँ शिव की विभिन्न मुद्राओं, विशेषकर 'त्रिमूर्ति' की विशाल प्रतिमाएँ हैं।"
    },
    {
        question: "'शैव संप्रदाय' में कौन-सा ग्रंथ प्रमाणिक माना जाता है?",
        answers: [
            { text: "वेद", correct: false },
            { text: "उपनिषद", correct: false },
            { text: "आगम", correct: true },
            { text: "पुराण", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शैव धर्म में आगम ग्रंथ प्रमाणिक माने जाते हैं, जो तंत्र साधना और शिव पूजा की पद्धतियों का वर्णन करते हैं।"
    },
    {
        question: "शैव धर्म का कौन-सा संप्रदाय 'अघोरी' के रूप में जाना जाता था?",
        answers: [
            { text: "लिंगायत", correct: false },
            { text: "पाशुपत", correct: false },
            { text: "कापालिक", correct: false },
            { text: "कालामुख", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालामुख संप्रदाय को 'अघोरी' के रूप में भी जाना जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कापालिकों से मिलता-जुलता था और ये अत्यधिक कठोर और भयावह साधनाएँ करते थे।"
    },
    {
        question: "'नटराज' की मूर्ति किस शैली की है और किस देवता का प्रतीक है?",
        answers: [
            { text: "चोल, विष्णु", correct: false },
            { text: "चोल, शिव", correct: true },
            { text: "पल्लव, शिव", correct: false },
            { text: "गुप्त, ब्रह्मा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नटराज' की कांस्य प्रतिमा चोल कला का एक उत्कृष्ट उदाहरण है, जिसमें भगवान शिव को ब्रह्मांडीय नर्तक के रूप में दर्शाया गया है।"
    },
    {
        question: "'तंजौर' का बृहदेश्वर मंदिर किस शासक ने बनवाया था और यह किस देवता को समर्पित है?",
        answers: [
            { text: "राजाराजा I, विष्णु", correct: false },
            { text: "राजाराजा I, शिव", correct: true },
            { text: "राजेंद्र I, शिव", correct: false },
            { text: "कृष्णदेव राय, विष्णु", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तंजौर का बृहदेश्वर मंदिर, जिसे राजराजेश्वर मंदिर भी कहते हैं, चोल शासक राजाराजा I ने बनवाया था और यह भगवान शिव को समर्पित है।"
    },
    {
        question: "'दक्षिण भारत' में शैव धर्म को लोकप्रिय बनाने में किस संतों का महत्वपूर्ण योगदान था?",
        answers: [
            { text: "आलवार संत", correct: false },
            { text: "नयनार संत", correct: true },
            { text: "शंकराचार्य", correct: false },
            { text: "रामानुज", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आलवार संत वैष्णव धर्म से संबंधित थे, जबकि नयनार संत शैव धर्म के उपासक थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने भक्ति आंदोलन के माध्यम से दक्षिण भारत में शैव धर्म को लोकप्रिय बनाया।"
    },
    {
        question: "'पशुपति संप्रदाय' के संस्थापक लकुलीश किस स्थान से संबंधित थे?",
        answers: [
            { text: "उज्जैन", correct: false },
            { text: "वाराणसी", correct: false },
            { text: "गुजरात", correct: true },
            { text: "मथुरा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लकुलीश, जिन्हें शिव के 28वें अवतारों में से एक माना जाता है, का जन्म स्थान गुजरात के कायवरोहण नामक स्थान पर माना जाता है।"
    },
    {
        question: "'त्रिमूर्ति' की अवधारणा में ब्रह्मा, विष्णु और महेश में से कौन-सा नाम शिव के लिए प्रयोग किया जाता है?",
        answers: [
            { text: "ब्रह्मा", correct: false },
            { text: "विष्णु", correct: false },
            { text: "महेश", correct: true },
            { text: "उपर्युक्त सभी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> त्रिमूर्ति में शिव के लिए महेश (अर्थात महान ईश्वर) नाम का प्रयोग किया जाता है, जो संहारक की भूमिका निभाते हैं।"
    },
    {
        question: "'अमरनाथ गुफा' किस देवता से संबंधित एक प्रमुख तीर्थस्थल है?",
        answers: [
            { text: "विष्णु", correct: false },
            { text: "ब्रह्मा", correct: false },
            { text: "शिव", correct: true },
            { text: "गणेश", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जम्मू और कश्मीर में स्थित अमरनाथ गुफा भगवान शिव के प्रमुख तीर्थस्थलों में से एक है, जहाँ प्राकृतिक रूप से बर्फ से बना शिवलिंग बनता है।"
    },
    {
        question: "'अघोरी' संप्रदाय किस शैव संप्रदाय का एक हिस्सा था?",
        answers: [
            { text: "पाशुपत", correct: false },
            { text: "कापालिक", correct: false },
            { text: "कालामुख", correct: true },
            { text: "लिंगायत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालामुख संप्रदाय, जो कठोर और भयावह साधनाओं के लिए जाना जाता था, को ही 'अघोरी' के रूप में भी जाना जाता था।"
    },
    {
        question: "'लिंग पूजा' का पहला स्पष्ट वर्णन किस पुराण में मिलता है?",
        answers: [
            { text: "शिव पुराण", correct: false },
            { text: "मत्स्य पुराण", correct: true },
            { text: "वायु पुराण", correct: false },
            { text: "स्कंद पुराण", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मत्स्य पुराण में शिवलिंग की पूजा का पहला स्पष्ट और विस्तृत वर्णन मिलता है, जो शैव धर्म की पूजा पद्धति का एक महत्वपूर्ण हिस्सा है।"
    },
    {
        question: "किस शासक ने तंजौर के प्रसिद्ध बृहदेश्वर मंदिर का निर्माण करवाया था, जो शैव धर्म को समर्पित है?",
        answers: [
            { text: "राजाराजा I", correct: true },
            { text: "राजेंद्र I", correct: false },
            { text: "कृष्णदेव राय", correct: false },
            { text: "महेंद्रवर्मन I", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोल शासक राजाराजा I ने 11वीं शताब्दी में तंजौर में बृहदेश्वर मंदिर का निर्माण करवाया था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मंदिर भगवान शिव को समर्पित है और द्रविड़ स्थापत्य कला का उत्कृष्ट उदाहरण है।"
    },
    {
        question: "'त्रिमूर्ति' की अवधारणा में, शिव को किस भूमिका के लिए जाना जाता है?",
        answers: [
            { text: "सृजन", correct: false },
            { text: "पालन", correct: false },
            { text: "विनाश", correct: true },
            { text: "उपरोक्त सभी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंदू धर्म की त्रिमूर्ति (ब्रह्मा, विष्णु, महेश) में, ब्रह्मा सृजनकर्ता हैं, विष्णु पालनकर्ता हैं और शिव (महेश) विनाशक हैं।"
    },
    {
        question: "शैव धर्म के किस संप्रदाय के अनुयायी शिव के अवतार माने जाने वाले लकुलीश को पूजते थे?",
        answers: [
            { text: "कापालिक", correct: false },
            { text: "कालामुख", correct: false },
            { text: "पाशुपत", correct: true },
            { text: "लिंगायत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शैव धर्म का सबसे प्राचीन संप्रदाय पाशुपत था।<br><br><i class='fa-solid fa-angles-right icon'></i> इस संप्रदाय के अनुयायी लकुलीश को भगवान शिव का अंतिम (28वां) अवतार मानते थे और उनकी पूजा करते थे।"
    },
    {
        question: "'लिंगायत' संप्रदाय के संस्थापक कौन थे?",
        answers: [
            { text: "लकुलीश", correct: false },
            { text: "वासव", correct: true },
            { text: "शंकराचार्य", correct: false },
            { text: "अप्पार", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वासव ने 12वीं शताब्दी में कर्नाटक में लिंगायत संप्रदाय की स्थापना की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इस संप्रदाय को वीरशैव भी कहा जाता है।"
    },
    {
        question: "वेदों में शिव का सबसे पहला उल्लेख किस रूप में मिलता है?",
        answers: [
            { text: "महादेव", correct: false },
            { text: "शंकर", correct: false },
            { text: "रुद्र", correct: true },
            { text: "पशुपति", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में शिव को रुद्र के नाम से जाना जाता है, जिन्हें एक भयंकर और तूफानों का देवता माना गया है।"
    },
    {
        question: "'अर्धनारीश्वर' स्वरूप में शिव का कौन-सा रूप दर्शाया गया है?",
        answers: [
            { text: "शिव और गणेश का संयुक्त रूप", correct: false },
            { text: "शिव और पार्वती का संयुक्त रूप", correct: true },
            { text: "शिव और ब्रह्मा का संयुक्त रूप", correct: false },
            { text: "शिव और विष्णु का संयुक्त रूप", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अर्धनारीश्वर शिव और पार्वती का संयुक्त रूप है, जिसमें एक आधा पुरुष और आधा स्त्री है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पुरुष (शिव) और प्रकृति (पार्वती) के मिलन और संतुलन का प्रतीक है।"
    },
    {
        question: "किस शासक के शासनकाल में शैव धर्म भारत में सबसे अधिक लोकप्रिय हुआ?",
        answers: [
            { text: "गुप्त काल", correct: false },
            { text: "कुषाण काल", correct: false },
            { text: "चोल काल", correct: true },
            { text: "मौर्य काल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्षिण भारत के चोल शासकों के समय में शैव धर्म अपने चरम पर पहुँचा।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने कई विशाल शैव मंदिरों का निर्माण करवाया, जिनमें बृहदेश्वर मंदिर सबसे प्रमुख है।"
    },
    {
        question: "शैव धर्म के किस संप्रदाय के अनुयायी नर-कपालों (मनुष्य की खोपड़ी) का उपयोग करते थे?",
        answers: [
            { text: "पाशुपत", correct: false },
            { text: "कापालिक", correct: true },
            { text: "कालामुख", correct: false },
            { text: "लिंगायत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कापालिक संप्रदाय अपनी अत्यधिक कठोर और भयानक साधनाओं के लिए जाना जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> वे नर-कपालों में भोजन और जल ग्रहण करते थे।"
    },
    {
        question: "'त्रयंबकेश्वर' ज्योतिर्लिंग किस राज्य में स्थित है?",
        answers: [
            { text: "गुजरात", correct: false },
            { text: "महाराष्ट्र", correct: true },
            { text: "मध्य प्रदेश", correct: false },
            { text: "उत्तराखंड", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बारह ज्योतिर्लिंगों में से एक त्रयंबकेश्वर महाराष्ट्र के नासिक जिले में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह गोदावरी नदी का उद्गम स्थल भी है।"
    },
    {
        question: "'एलिफेंटा' की गुफाएँ, जो शैव धर्म से संबंधित हैं, कहाँ स्थित हैं?",
        answers: [
            { text: "अजंता", correct: false },
            { text: "मुंबई", correct: true },
            { text: "औरंगाबाद", correct: false },
            { text: "भोपाल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एलिफेंटा की गुफाएँ मुंबई हार्बर के एक द्वीप पर स्थित हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ चट्टानों को काटकर बनाई गई शिव की विशाल मूर्तियाँ और त्रिमूर्ति प्रतिमा प्रसिद्ध हैं।"
    },
    {
        question: "दक्षिण भारत में शैव धर्म के प्रचार-प्रसार में किस संतों का महत्वपूर्ण योगदान था?",
        answers: [
            { text: "आलवार", correct: false },
            { text: "नयनार", correct: true },
            { text: "शंकराचार्य", correct: false },
            { text: "रामानुज", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्षिण भारत में नयनार शैव संतों ने 63 संतों का एक समूह था, जिन्होंने भक्ति आंदोलन के माध्यम से शैव धर्म को लोकप्रिय बनाया।"
    },
    {
        question: "'लिंगायत' संप्रदाय के अनुयायी किसके उपासक थे?",
        answers: [
            { text: "ब्रह्मा", correct: false },
            { text: "शिव", correct: true },
            { text: "विष्णु", correct: false },
            { text: "शक्ति", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिंगायत संप्रदाय के अनुयायी एकमात्र ईश्वर के रूप में शिव की पूजा करते थे, और वे शिवलिंग को अपने शरीर पर धारण करते थे।"
    },
    {
        question: "शैव धर्म का कौन-सा संप्रदाय अपने अनुयायियों को नर-मुंड की माला पहनने के लिए कहता था?",
        answers: [
            { text: "पाशुपत", correct: false },
            { text: "कापालिक", correct: false },
            { text: "कालामुख", correct: true },
            { text: "लिंगायत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालामुख संप्रदाय के अनुयायी नर-कपालों का प्रयोग करते थे और नर-मुंड की मालाएँ पहनते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> यह संप्रदाय कापालिकों से भी अधिक उग्र था।"
    },
    {
        question: "'नटराज' की मूर्ति किस कला शैली का उत्कृष्ट उदाहरण है?",
        answers: [
            { text: "गुप्त", correct: false },
            { text: "मौर्य", correct: false },
            { text: "चोल", correct: true },
            { text: "पल्लव", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोल काल में बनी नटराज की कांस्य प्रतिमाएँ अपनी सुंदरता और कलात्मकता के लिए विश्व प्रसिद्ध हैं।"
    },
    {
        question: "किस पुराण में 'लिंग पूजा' का सबसे पहला स्पष्ट वर्णन मिलता है?",
        answers: [
            { text: "शिव पुराण", correct: false },
            { text: "मत्स्य पुराण", correct: true },
            { text: "वायु पुराण", correct: false },
            { text: "मार्कण्डेय पुराण", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शैव धर्म की पूजा पद्धति के रूप में शिवलिंग की पूजा का पहला स्पष्ट और विस्तृत वर्णन मत्स्य पुराण में मिलता है।"
    },
    {
        question: "शैव धर्म को अपनाने वाले पहले कुषाण शासक कौन थे?",
        answers: [
            { text: "कुजुल कडफिसेस", correct: false },
            { text: "विम कडफिसेस", correct: true },
            { text: "कनिष्क", correct: false },
            { text: "हुविष्क", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाण शासक विम कडफिसेस ने शैव धर्म को अपनाया था।<br><br><i class='fa-solid fa-angles-right icon'></i> उनके सिक्कों पर शिव, नंदी और त्रिशूल के चित्र अंकित थे।"
    },
    {
        question: "'शैव' संप्रदाय से संबंधित 'आगम ग्रंथ' किससे संबंधित हैं?",
        answers: [
            { text: "वैदिक अनुष्ठान", correct: false },
            { text: "शिव पूजा और तांत्रिक साधना", correct: true },
            { text: "दर्शनशास्त्र", correct: false },
            { text: "इतिहास", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शैव धर्म में आगम ग्रंथ वे शास्त्र हैं जिनमें शिव पूजा, मंत्र, और तांत्रिक साधनाओं का विस्तृत वर्णन किया गया है।"
    },
    {
        question: "'केदारनाथ' ज्योतिर्लिंग किस राज्य में स्थित है?",
        answers: [
            { text: "हिमाचल प्रदेश", correct: false },
            { text: "उत्तराखंड", correct: true },
            { text: "जम्मू और कश्मीर", correct: false },
            { text: "सिक्किम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केदारनाथ ज्योतिर्लिंग बारह ज्योतिर्लिंगों में से एक है और यह उत्तराखंड राज्य में स्थित है।"
    },
    {
        question: "'पशुपति संप्रदाय' के संस्थापक लकुलीश किस देवता के अवतार माने जाते हैं?",
        answers: [
            { text: "ब्रह्मा", correct: false },
            { text: "विष्णु", correct: false },
            { text: "शिव", correct: true },
            { text: "गणेश", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लकुलीश को भगवान शिव के 28 अवतारों में से अंतिम अवतार माना जाता है।"
    },
    {
        question: "दक्षिण भारत में शैव धर्म का पुनरुत्थान किस काल में हुआ था?",
        answers: [
            { text: "गुप्त काल", correct: false },
            { text: "चोल काल", correct: false },
            { text: "चालुक्य काल", correct: false },
            { text: "पल्लव काल", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शैव धर्म का पुनरुत्थान पल्लव काल में हुआ था, जब नयनार संतों ने भक्ति आंदोलन के माध्यम से इस धर्म को लोकप्रिय बनाया।"
    },
    {
        question: "'ओमकारेश्वर' ज्योतिर्लिंग कहाँ स्थित है?",
        answers: [
            { text: "मध्य प्रदेश", correct: true },
            { text: "उत्तराखंड", correct: false },
            { text: "महाराष्ट्र", correct: false },
            { text: "गुजरात", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बारह ज्योतिर्लिंगों में से एक ओमकारेश्वर ज्योतिर्लिंग मध्य प्रदेश में नर्मदा नदी के तट पर स्थित है।"
    },
    {
        question: "शैव धर्म में 'महादेव' शब्द का क्या अर्थ है?",
        answers: [
            { text: "महाविनाशक", correct: false },
            { text: "महान देवता", correct: true },
            { text: "महान योगी", correct: false },
            { text: "महान शासक", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महादेव' शब्द का शाब्दिक अर्थ है 'महान देवता', जो भगवान शिव के सर्वोच्च स्थान को दर्शाता है।"
    },
    {
        question: "किस शासक ने अपनी मुद्राओं पर शिव और नंदी की आकृतियाँ अंकित करवाई थीं?",
        answers: [
            { text: "अशोक", correct: false },
            { text: "समुद्रगुप्त", correct: false },
            { text: "विम कडफिसेस", correct: true },
            { text: "हर्षवर्धन", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाण शासक विम कडफिसेस के सिक्कों पर शिव, त्रिशूल और नंदी की आकृतियाँ मिली हैं, जिससे यह पता चलता है कि वह शैव धर्म का अनुयायी था।"
    },
    {
        question: "'लिंगायत' संप्रदाय में किस अनुष्ठान का विरोध किया गया था?",
        answers: [
            { text: "मूर्ति पूजा", correct: false },
            { text: "वैदिक अनुष्ठान और जाति व्यवस्था", correct: true },
            { text: "शिव पूजा", correct: false },
            { text: "उपर्युक्त सभी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिंगायत संप्रदाय ने वैदिक अनुष्ठानों और जाति व्यवस्था का विरोध किया।<br><br><i class='fa-solid fa-angles-right icon'></i> यह संप्रदाय सामाजिक समानता पर जोर देता था।"
    },
    {
        question: "'बृहदेश्वर मंदिर' किस शैली का एक प्रमुख उदाहरण है?",
        answers: [
            { text: "नागर शैली", correct: false },
            { text: "द्रविड़ शैली", correct: true },
            { text: "वेसर शैली", correct: false },
            { text: "गांधार शैली", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तंजौर का बृहदेश्वर मंदिर दक्षिण भारतीय स्थापत्य कला की द्रविड़ शैली का एक शानदार उदाहरण है।"
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