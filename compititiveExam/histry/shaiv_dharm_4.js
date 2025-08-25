const questions = [
    {
        topHeading: "शैव धर्म पर आधारित बहुविकल्पी प्रश्न part 4 (quiz_no.40)"
    },
    {
        question: "'लिंगायत' संप्रदाय के अनुयायी किस देवता को पूजते थे?",
        answers: [
            { text: "ब्रह्मा", correct: false },
            { text: "विष्णु", correct: false },
            { text: "शिव", correct: true },
            { text: "शक्ति", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिंगायत संप्रदाय के अनुयायी केवल और केवल भगवान शिव को ही सर्वोच्च मानते थे और उनकी ही पूजा करते थे।"
    },
    {
        question: "'बृहदेश्वर मंदिर' किस शासक ने बनवाया था?",
        answers: [
            { text: "राजाराजा I", correct: true },
            { text: "राजेंद्र I", correct: false },
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तमिलनाडु के तंजौर में स्थित यह भव्य मंदिर चोल शासक राजाराजा I ने बनवाया था।"
    },
    {
        question: "'पशुपतिनाथ' मंदिर किस देश में स्थित है?",
        answers: [
            { text: "भारत", correct: false },
            { text: "नेपाल", correct: true },
            { text: "श्रीलंका", correct: false },
            { text: "भूटान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भगवान शिव को समर्पित पशुपतिनाथ मंदिर नेपाल की राजधानी काठमांडू में स्थित है।"
    },
    {
        question: "'एलिफेंटा' की गुफाओं में किस देवता की विशाल प्रतिमाएँ हैं?",
        answers: [
            { text: "विष्णु", correct: false },
            { text: "ब्रह्मा", correct: false },
            { text: "शिव", correct: true },
            { text: "गणेश", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुंबई के पास एलिफेंटा की गुफाएँ भगवान शिव को समर्पित हैं, जहाँ उनकी विभिन्न मुद्राएँ और प्रसिद्ध त्रिमूर्ति प्रतिमा है।"
    },
    {
        question: "शैव धर्म का कौन-सा संप्रदाय अपने अनुयायियों को 'महाव्रतधर' कहता था?",
        answers: [
            { text: "पाशुपत", correct: false },
            { text: "कापालिक", correct: true },
            { text: "कालामुख", correct: false },
            { text: "नाथ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कापालिक संप्रदाय के अनुयायी कुछ विशिष्ट और कठोर व्रत धारण करते थे, इसलिए उन्हें 'महाव्रतधर' कहा जाता था।"
    },
    {
        question: "'शैव धर्म' का सबसे प्राचीन संप्रदाय कौन-सा था, जिसके संस्थापक लकुलीश थे?",
        answers: [
            { text: "लिंगायत", correct: false },
            { text: "कापालिक", correct: false },
            { text: "पाशुपत", correct: true },
            { text: "नाथ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शैव धर्म का सबसे प्राचीन संप्रदाय पाशुपत था, जिसकी स्थापना लकुलीश ने की थी।"
    },
    {
        question: "'नटराज' की कांस्य मूर्ति किस काल की कला का एक प्रसिद्ध उदाहरण है?",
        answers: [
            { text: "गुप्त काल", correct: false },
            { text: "पल्लव काल", correct: false },
            { text: "चोल काल", correct: true },
            { text: "राष्ट्रकूट काल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नटराज' की कांस्य मूर्तियाँ चोल काल की एक उत्कृष्ट कलाकृति हैं, जो शिव के ब्रह्मांडीय नर्तक स्वरूप को दर्शाती हैं।"
    },
    {
        question: "'त्रयंबकेश्वर' ज्योतिर्लिंग किस राज्य में स्थित है?",
        answers: [
            { text: "गुजरात", correct: false },
            { text: "महाराष्ट्र", correct: true },
            { text: "मध्य प्रदेश", correct: false },
            { text: "उत्तराखंड", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बारह ज्योतिर्लिंगों में से एक त्रयंबकेश्वर महाराष्ट्र के नासिक जिले में स्थित है।"
    },
    {
        question: "'शैव धर्म' को दक्षिण भारत में लोकप्रिय बनाने में किस संतों का योगदान था?",
        answers: [
            { text: "आलवार", correct: false },
            { text: "नयनार", correct: true },
            { text: "शंकराचार्य", correct: false },
            { text: "रामानुज", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नयनार संतों ने अपनी भक्ति कविताओं के माध्यम से दक्षिण भारत में शैव धर्म का प्रचार किया था।"
    },
    {
        question: "'अमरनाथ गुफा' किस देवता से संबंधित है?",
        answers: [
            { text: "विष्णु", correct: false },
            { text: "ब्रह्मा", correct: false },
            { text: "शिव", correct: true },
            { text: "गणेश", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमरनाथ गुफा भगवान शिव के प्रमुख तीर्थस्थलों में से एक है, जहाँ प्राकृतिक रूप से बर्फ से शिवलिंग बनता है।"
    },
    {
        question: "'लिंगायत' संप्रदाय की स्थापना किस शताब्दी में हुई थी?",
        answers: [
            { text: "8वीं", correct: false },
            { text: "10वीं", correct: false },
            { text: "12वीं", correct: true },
            { text: "15वीं", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिंगायत संप्रदाय की स्थापना 12वीं शताब्दी में वासव ने कर्नाटक में की थी।"
    },
    {
        question: "शैव धर्म का कौन-सा संप्रदाय 'अघोरी' के रूप में भी जाना जाता था?",
        answers: [
            { text: "पाशुपत", correct: false },
            { text: "कापालिक", correct: false },
            { text: "कालामुख", correct: true },
            { text: "लिंगायत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालामुख संप्रदाय के अनुयायी अपनी उग्र और भयावह साधनाओं के कारण 'अघोरी' के रूप में भी जाने जाते थे।"
    },
    {
        question: "'महाकाल' का अर्थ क्या है?",
        answers: [
            { text: "महान योद्धा", correct: false },
            { text: "महान संहारक", correct: false },
            { text: "महान समय", correct: true },
            { text: "महान योगी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महाकाल' शब्द का अर्थ है 'महान समय', जो भगवान शिव के उस रूप को दर्शाता है जो काल (समय) पर शासन करते हैं।"
    },
    {
        question: "शैव धर्म से संबंधित 'आगम ग्रंथ' किससे संबंधित हैं?",
        answers: [
            { text: "वेद", correct: false },
            { text: "उपनिषद", correct: false },
            { text: "तंत्र और पूजा विधि", correct: true },
            { text: "पुराण", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आगम ग्रंथ शैव धर्म के वे शास्त्र हैं जिनमें शिव की पूजा, मंत्र और तांत्रिक साधनाओं का विस्तृत वर्णन है।"
    },
    {
        question: "'शैव धर्म' का पहला स्पष्ट उल्लेख किस पुराण में मिलता है?",
        answers: [
            { text: "शिव पुराण", correct: false },
            { text: "मत्स्य पुराण", correct: true },
            { text: "वायु पुराण", correct: false },
            { text: "भागवत पुराण", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शिवलिंग की पूजा का पहला स्पष्ट और विस्तृत वर्णन मत्स्य पुराण में मिलता है।"
    },
    {
        question: "'अर्धनारीश्वर' के रूप में शिव का चित्रण किस बात का प्रतीक है?",
        answers: [
            { text: "स्त्री-पुरुष की समानता", correct: false },
            { text: "पुरुष और प्रकृति का संतुलन", correct: true },
            { text: "शिव की असीमित शक्ति", correct: false },
            { text: "सृष्टि का सृजन", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह रूप पुरुष (शिव) और प्रकृति (पार्वती) के मिलन का प्रतीक है, जो सृष्टि के संतुलन और निरंतरता को दर्शाता है।"
    },
    {
        question: "'नाथ संप्रदाय' की स्थापना किसने की थी?",
        answers: [
            { text: "गोरखनाथ", correct: false },
            { text: "मत्स्येंद्रनाथ", correct: true },
            { text: "वासव", correct: false },
            { text: "लकुलीश", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नाथ संप्रदाय की स्थापना मत्स्येंद्रनाथ ने की थी।"
    },
    {
        question: "'शैव' और 'शाक्त' धर्म के बीच क्या संबंध है?",
        answers: [
            { text: "दोनों एक ही हैं।", correct: false },
            { text: "शाक्त धर्म शैव धर्म का ही एक हिस्सा है।", correct: false },
            { text: "शाक्त धर्म शिव की पत्नी (शक्ति) की पूजा पर केंद्रित है।", correct: true },
            { text: "दोनों एक दूसरे के विरोधी हैं।", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शाक्त धर्म शिव की शक्ति (देवी पार्वती, दुर्गा, काली) की पूजा करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शैव धर्म से जुड़ा हुआ है क्योंकि इसमें शिव को शक्ति का पूरक माना जाता है।"
    },
    {
        question: "किस शासक ने 'बृहदेश्वर मंदिर' का निर्माण करवाया था, जो शैव धर्म को समर्पित है?",
        answers: [
            { text: "चोल शासक", correct: true },
            { text: "पल्लव शासक", correct: false },
            { text: "राष्ट्रकूट शासक", correct: false },
            { text: "गुप्त शासक", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तंजौर का बृहदेश्वर मंदिर चोल शासक राजाराजा I द्वारा बनवाया गया था।"
    },
    {
        question: "'पशुपति संप्रदाय' का दूसरा नाम क्या है?",
        answers: [
            { text: "शैववाद", correct: true },
            { text: "वीरशैववाद", correct: false },
            { text: "योगवाद", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पाशुपत संप्रदाय शैव धर्म का सबसे प्राचीन और मूल रूप था, इसलिए इसे शैववाद का प्रारंभिक रूप भी माना जाता है।"
    },
    {
        question: "'शैव धर्म' का कौन-सा संप्रदाय शैव धर्म के कठोर और तपस्वी स्वरूप पर अधिक जोर देता था?",
        answers: [
            { text: "लिंगायत", correct: false },
            { text: "पाशुपत", correct: true },
            { text: "कापालिक", correct: false },
            { text: "नाथ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पाशुपत संप्रदाय अपने कठोर तपस्या और नियमों के लिए जाना जाता था।"
    },
    {
        question: "'कैलाश मंदिर', जो शैव धर्म को समर्पित है, कहाँ स्थित है?",
        answers: [
            { text: "मदुरै", correct: false },
            { text: "एलोरा", correct: true },
            { text: "खजुराहो", correct: false },
            { text: "कोणार्क", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाराष्ट्र के एलोरा में स्थित कैलाश मंदिर एक चट्टान को काटकर बनाया गया है और यह भगवान शिव को समर्पित है।"
    },
    {
        question: "'अघोरी' संप्रदाय के अनुयायी किस देवता की पूजा करते थे?",
        answers: [
            { text: "विष्णु", correct: false },
            { text: "शिव", correct: true },
            { text: "शक्ति", correct: false },
            { text: "ब्रह्मा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अघोरी संप्रदाय, जो कालामुख संप्रदाय का ही एक रूप था, भगवान शिव के उग्र रूप की पूजा करता था।"
    },
    {
        question: "शैव धर्म के किस संप्रदाय में शिव को 'वीरभद्र' के रूप में भी पूजा जाता है?",
        answers: [
            { text: "पाशुपत", correct: false },
            { text: "कापालिक", correct: false },
            { text: "लिंगायत", correct: true },
            { text: "नाथ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिंगायत संप्रदाय में शिव के 'वीरभद्र' जैसे रूपों की पूजा की जाती है।"
    },
    {
        question: "'लिंग पूजा' का सबसे पहला स्पष्ट वर्णन किसमें मिलता है?",
        answers: [
            { text: "ऋग्वेद", correct: false },
            { text: "महाभारत", correct: false },
            { text: "मत्स्य पुराण", correct: true },
            { text: "शिव पुराण", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शिवलिंग की पूजा का पहला स्पष्ट और विस्तृत वर्णन मत्स्य पुराण में मिलता है।"
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
        question: "'लिंगायत' संप्रदाय में किस अनुष्ठान का विरोध किया गया था?",
        answers: [
            { text: "वैदिक कर्मकांड और जाति व्यवस्था", correct: true },
            { text: "शिव पूजा", correct: false },
            { text: "ध्यान", correct: false },
            { text: "तपस्या", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिंगायत संप्रदाय ने वैदिक कर्मकांडों और समाज में व्याप्त जाति व्यवस्था का जोरदार विरोध किया था, क्योंकि यह सामाजिक समानता पर जोर देता था।"
    },
    {
        question: "'महाकाल' ज्योतिर्लिंग किस राज्य में स्थित है?",
        answers: [
            { text: "महाराष्ट्र", correct: false },
            { text: "गुजरात", correct: false },
            { text: "मध्य प्रदेश", correct: true },
            { text: "उत्तराखंड", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाकालेश्वर ज्योतिर्लिंग मध्य प्रदेश के उज्जैन में स्थित है, और यह बारह ज्योतिर्लिंगों में से एक है।"
    },
    {
        question: "'नटराज' की मूर्ति किस शैली की है और किस देवता का प्रतीक है?",
        answers: [
            { text: "गुप्त, विष्णु", correct: false },
            { text: "चोल, शिव", correct: true },
            { text: "पल्लव, शिव", correct: false },
            { text: "चालुक्य, ब्रह्मा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नटराज' की कांस्य प्रतिमा चोल कला का एक उत्कृष्ट उदाहरण है, जिसमें भगवान शिव को ब्रह्मांडीय नर्तक के रूप में दर्शाया गया है।"
    },
    {
        question: "'एलिफेंटा' की गुफाओं में किस राजवंश के शासकों ने शिव की विशाल प्रतिमाएँ बनवाई थीं?",
        answers: [
            { text: "गुप्त", correct: false },
            { text: "पल्लव", correct: false },
            { text: "राष्ट्रकूट", correct: true },
            { text: "चोल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एलिफेंटा की गुफाओं का निर्माण राष्ट्रकूट शासकों के समय में हुआ था, जहाँ शिव की प्रसिद्ध 'त्रिमूर्ति' प्रतिमा है।"
    },
    {
        question: "'शैव धर्म' का कौन-सा संप्रदाय 'वीरशैव' के रूप में भी जाना जाता है?",
        answers: [
            { text: "पाशुपत", correct: false },
            { text: "लिंगायत", correct: true },
            { text: "कापालिक", correct: false },
            { text: "नाथ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिंगायत संप्रदाय, जो कर्नाटक में लोकप्रिय था, को वीरशैव भी कहा जाता है।"
    },
    {
        question: "'बृहदेश्वर मंदिर' किस स्थान पर स्थित है?",
        answers: [
            { text: "मदुरै", correct: false },
            { text: "कांचीपुरम", correct: false },
            { text: "तंजौर", correct: true },
            { text: "एलोरा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह भव्य मंदिर तमिलनाडु के तंजौर में स्थित है।"
    },
    {
        question: "शैव धर्म के किस संप्रदाय ने योग साधना को अपने दर्शन का केंद्र बनाया?",
        answers: [
            { text: "पाशुपत", correct: false },
            { text: "कापालिक", correct: false },
            { text: "लिंगायत", correct: false },
            { text: "नाथ", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नाथ संप्रदाय योग और हठयोग पर अत्यधिक बल देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके अनुयायी शिव को 'आदिनाथ' के रूप में पूजते हैं।"
    },
    {
        question: "'अर्धनारीश्वर' के रूप में शिव का चित्रण क्या दर्शाता है?",
        answers: [
            { text: "शिव का स्त्री रूप", correct: false },
            { text: "शिव और पार्वती का मिलन", correct: true },
            { text: "शिव और विष्णु का मिलन", correct: false },
            { text: "शिव का सर्वशक्तिमान रूप", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अर्धनारीश्वर रूप भगवान शिव और उनकी पत्नी पार्वती का संयुक्त रूप है, जो पुरुष और प्रकृति के संयोजन का प्रतीक है।"
    },
    {
        question: "'अमरनाथ गुफा' कहाँ स्थित है?",
        answers: [
            { text: "उत्तराखंड", correct: false },
            { text: "हिमाचल प्रदेश", correct: false },
            { text: "जम्मू और कश्मीर", correct: true },
            { text: "सिक्किम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमरनाथ गुफा, जहाँ प्राकृतिक रूप से बर्फ का शिवलिंग बनता है, जम्मू और कश्मीर में स्थित है।"
    },
    {
        question: "'सोमनाथ' ज्योतिर्लिंग किस राज्य में स्थित है?",
        answers: [
            { text: "महाराष्ट्र", correct: false },
            { text: "राजस्थान", correct: false },
            { text: "गुजरात", correct: true },
            { text: "कर्नाटक", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोमनाथ ज्योतिर्लिंग गुजरात के सौराष्ट्र क्षेत्र में स्थित है।"
    },
    {
        question: "शैव धर्म के किस संप्रदाय ने नर-मुंड की माला और नर-कपालों का उपयोग किया?",
        answers: [
            { text: "लिंगायत", correct: false },
            { text: "पाशुपत", correct: false },
            { text: "कापालिक", correct: true },
            { text: "नाथ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कापालिक संप्रदाय के अनुयायी अपनी तांत्रिक साधनाओं के लिए नर-कपालों का उपयोग करते थे।"
    },
    {
        question: "'महादेव' शब्द का क्या अर्थ है?",
        answers: [
            { text: "महान योगी", correct: false },
            { text: "महान संहारक", correct: false },
            { text: "महान देवता", correct: true },
            { text: "महान शासक", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महादेव' शब्द का शाब्दिक अर्थ है 'महान देवता', जो भगवान शिव के सर्वोच्च स्थान को दर्शाता है।"
    },
    {
        question: "'रुद्र' शब्द का उल्लेख किस वैदिक ग्रंथ में मिलता है?",
        answers: [
            { text: "ऋग्वेद", correct: true },
            { text: "यजुर्वेद", correct: false },
            { text: "सामवेद", correct: false },
            { text: "अथर्ववेद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैदिक साहित्य में, विशेष रूप से ऋग्वेद में, शिव को रुद्र के रूप में वर्णित किया गया है।"
    },
    {
        question: "'त्रयंबकेश्वर' ज्योतिर्लिंग किस नदी के तट पर स्थित है?",
        answers: [
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: false },
            { text: "गोदावरी", correct: true },
            { text: "कृष्णा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> त्रयंबकेश्वर ज्योतिर्लिंग महाराष्ट्र में गोदावरी नदी के उद्गम स्थल के पास स्थित है।"
    },
    {
        question: "'लिंगायत' संप्रदाय के अनुयायियों को किस नाम से भी जाना जाता है?",
        answers: [
            { text: "शैव", correct: false },
            { text: "वीरशैव", correct: true },
            { text: "शाक्त", correct: false },
            { text: "वैष्णव", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिंगायत संप्रदाय के अनुयायी, जो शिव के कट्टर उपासक थे, को वीरशैव भी कहा जाता था।"
    },
    {
        question: "'कैलाश मंदिर' किस स्थान पर स्थित है?",
        answers: [
            { text: "मदुरै", correct: false },
            { text: "एलोरा", correct: true },
            { text: "खजुराहो", correct: false },
            { text: "कोणार्क", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाराष्ट्र के एलोरा में स्थित कैलाश मंदिर एक चट्टान को काटकर बनाया गया है और यह भगवान शिव को समर्पित है।"
    },
    {
        question: "शैव धर्म में 'आगम ग्रंथ' किससे संबंधित हैं?",
        answers: [
            { text: "इतिहास", correct: false },
            { text: "वेद", correct: false },
            { text: "तांत्रिक अनुष्ठान", correct: true },
            { text: "उपनिषद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आगम ग्रंथ शैव धर्म के वे शास्त्र हैं जिनमें तंत्र साधना और शिव पूजा की पद्धतियों का विस्तृत वर्णन है।"
    },
    {
        question: "शैव धर्म का कौन-सा संप्रदाय अपने अनुयायियों को सिर के बालों में जटाएँ रखने के लिए जाना जाता था?",
        answers: [
            { text: "लिंगायत", correct: false },
            { text: "पाशुपत", correct: false },
            { text: "कालामुख", correct: true },
            { text: "नाथ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालामुख संप्रदाय के अनुयायी अपने कठोर नियमों के तहत जटाएँ रखते थे और पूरे शरीर पर भस्म लगाते थे।"
    },
    {
        question: "'नयनार' संतों का संबंध किस क्षेत्र से था?",
        answers: [
            { text: "उत्तर भारत", correct: false },
            { text: "दक्षिण भारत", correct: true },
            { text: "पूर्वी भारत", correct: false },
            { text: "पश्चिमी भारत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नयनार संत दक्षिण भारत में शैव भक्ति आंदोलन के प्रमुख प्रचारक थे।"
    },
    {
        question: "'त्रिमूर्ति' की अवधारणा में, शिव को किस रूप में दर्शाया गया है?",
        answers: [
            { text: "निर्माता", correct: false },
            { text: "पालनकर्ता", correct: false },
            { text: "संहार", correct: true },
            { text: "उपरोक्त सभी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंदू धर्म की त्रिमूर्ति (ब्रह्मा, विष्णु, महेश) में, शिव को सृष्टि का संहारक या विनाशक माना जाता है।"
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
        question: "'विम कडफिसेस' किस वंश का शासक था?",
        answers: [
            { text: "मौर्य", correct: false },
            { text: "कुषाण", correct: true },
            { text: "गुप्त", correct: false },
            { text: "सातवाहन", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विम कडफिसेस कुषाण वंश का एक शासक था, जिसने शैव धर्म को अपनाया था और अपने सिक्कों पर शिव की आकृतियाँ अंकित करवाई थीं।"
    },
    {
        question: "'शैव धर्म' का पहला स्पष्ट उल्लेख किसमें मिलता है?",
        answers: [
            { text: "शिव पुराण", correct: false },
            { text: "मत्स्य पुराण", correct: true },
            { text: "वायु पुराण", correct: false },
            { text: "महाभारत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शिवलिंग की पूजा का पहला स्पष्ट और विस्तृत वर्णन मत्स्य पुराण में मिलता है।"
    },
    {
        question: "'नटराज' की मूर्ति किस शैली का एक उत्कृष्ट उदाहरण है?",
        answers: [
            { text: "गुप्त", correct: false },
            { text: "मौर्य", correct: false },
            { text: "चोल", correct: true },
            { text: "पल्लव", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोल काल में बनी 'नटराज' की कांस्य प्रतिमाएँ अपनी सुंदरता और कलात्मकता के लिए विश्व प्रसिद्ध हैं।"
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