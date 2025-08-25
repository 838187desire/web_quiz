const questions = [
    {
        topHeading: "शैव धर्म पर आधारित बहुविकल्पी प्रश्न part 3 (quiz_no.39)"
    },
    {
        question: "'लिंगायत' संप्रदाय में किस अनुष्ठान का विरोध किया गया था?",
        answers: [
            { text: "शिव पूजा", correct: false },
            { text: "जाति व्यवस्था", correct: true },
            { text: "मूर्ति पूजा", correct: false },
            { text: "ध्यान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिंगायत संप्रदाय के संस्थापक वासव ने वैदिक कर्मकांडों और समाज में व्याप्त जाति व्यवस्था का घोर विरोध किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह संप्रदाय सामाजिक समानता पर जोर देता था।"
    },
    {
        question: "'महाकाल' मंदिर किस नदी के तट पर स्थित है?",
        answers: [
            { text: "नर्मदा", correct: false },
            { text: "क्षिप्रा", correct: true },
            { text: "ताप्ती", correct: false },
            { text: "गोदावरी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य प्रदेश के उज्जैन में स्थित प्रसिद्ध महाकालेश्वर मंदिर क्षिप्रा नदी के तट पर है।"
    },
    {
        question: "'बृहदेश्वर मंदिर' किस शासक द्वारा बनवाया गया था?",
        answers: [
            { text: "राजाराजा I", correct: true },
            { text: "राजेंद्र I", correct: false },
            { text: "कृष्णदेव राय", correct: false },
            { text: "नरसिंहवर्मन I", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह भव्य मंदिर चोल शासक राजाराजा I द्वारा बनवाया गया था और इसका निर्माण 1010 ईस्वी में पूरा हुआ था।"
    },
    {
        question: "'अर्धनारीश्वर' स्वरूप में शिव का कौन-सा रूप दर्शाया गया है?",
        answers: [
            { text: "शिव और विष्णु का संयुक्त रूप", correct: false },
            { text: "शिव और पार्वती का संयुक्त रूप", correct: true },
            { text: "शिव और ब्रह्मा का संयुक्त रूप", correct: false },
            { text: "शिव और गणेश का संयुक्त रूप", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह रूप शिव और उनकी शक्ति, पार्वती का मिलन दर्शाता है, जो पुरुष और प्रकृति के संयोजन का प्रतीक है।"
    },
    {
        question: "'शैव धर्म' का कौन-सा संप्रदाय 'नाथ' संप्रदाय से जुड़ा है?",
        answers: [
            { text: "कापालिक", correct: false },
            { text: "कालामुख", correct: false },
            { text: "पाशुपत", correct: false },
            { text: "योग", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नाथ संप्रदाय योग साधना पर अत्यधिक बल देता है, और इसके अनुयायी 'योग' के माध्यम से शिव को प्राप्त करने का प्रयास करते हैं।"
    },
    {
        question: "'एलिफेंटा' की गुफाओं में किस देवता की प्रसिद्ध 'त्रिमूर्ति' प्रतिमा है?",
        answers: [
            { text: "ब्रह्मा", correct: false },
            { text: "विष्णु", correct: false },
            { text: "शिव", correct: true },
            { text: "इंद्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एलिफेंटा की गुफाओं में स्थित 'त्रिमूर्ति' प्रतिमा भगवान शिव के तीन रूपों (सृजन, संरक्षण और विनाश) को दर्शाती है।"
    },
    {
        question: "'पशुपतिनाथ' मंदिर किस नदी के तट पर स्थित है?",
        answers: [
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: false },
            { text: "बागमती", correct: true },
            { text: "कोसी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नेपाल के काठमांडू में स्थित पशुपतिनाथ मंदिर बागमती नदी के किनारे पर है।"
    },
    {
        question: "शैव धर्म के किस संप्रदाय के अनुयायी नर-मुंड की माला पहनते थे?",
        answers: [
            { text: "पाशुपत", correct: false },
            { text: "लिंगायत", correct: false },
            { text: "कापालिक", correct: false },
            { text: "कालामुख", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालामुख संप्रदाय के अनुयायी अपनी उग्र साधना के रूप में नर-मुंडों की माला पहनते थे और श्मशान घाटों पर रहते थे।"
    },
    {
        question: "'शिव' की पूजा किस रूप में सबसे पहले प्रचलित हुई?",
        answers: [
            { text: "शिवलिंग", correct: true },
            { text: "नटराज", correct: false },
            { text: "पशुपति", correct: false },
            { text: "अर्धनारीश्वर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शैव धर्म में शिवलिंग की पूजा शिव के निराकार स्वरूप का प्रतीक है और यह सबसे पहले प्रचलित हुई।"
    },
    {
        question: "'नयनार' संतों की संख्या कितनी थी?",
        answers: [
            { text: "33", correct: false },
            { text: "63", correct: true },
            { text: "108", correct: false },
            { text: "12", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्षिण भारत में शैव भक्ति आंदोलन का नेतृत्व 63 नयनार संतों ने किया था।"
    },
    {
        question: "'त्रिमूर्ति' की अवधारणा में, शिव को किस रूप में दर्शाया गया है?",
        answers: [
            { text: "निर्माता", correct: false },
            { text: "पालनकर्ता", correct: false },
            { text: "संहारक", correct: true },
            { text: "रक्षक", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंदू धर्म की त्रिमूर्ति (ब्रह्मा, विष्णु, महेश) में, शिव को सृष्टि का संहारक या विनाशक माना जाता है।"
    },
    {
        question: "'शैव धर्म' का कौन-सा ग्रंथ तांत्रिक अनुष्ठानों पर केंद्रित है?",
        answers: [
            { text: "पुराण", correct: false },
            { text: "उपनिषद", correct: false },
            { text: "आगम", correct: true },
            { text: "वेद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आगम ग्रंथ शैव धर्म के वे शास्त्र हैं जिनमें तांत्रिक साधनाओं और शिव पूजा की पद्धतियों का विस्तृत वर्णन है।"
    },
    {
        question: "'वीरशैव' किस संप्रदाय का दूसरा नाम है?",
        answers: [
            { text: "पाशुपत", correct: false },
            { text: "लिंगायत", correct: true },
            { text: "कापालिक", correct: false },
            { text: "नाथ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिंगायत संप्रदाय, जिसकी स्थापना वासव ने की थी, को वीरशैव भी कहा जाता है।"
    },
    {
        question: "किस शासक ने अपनी मुद्राओं पर शिव के चित्र अंकित करवाए थे?",
        answers: [
            { text: "अशोक", correct: false },
            { text: "समुद्रगुप्त", correct: false },
            { text: "कनिष्क", correct: false },
            { text: "विम कडफिसेस", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाण शासक विम कडफिसेस के सिक्कों पर शिव और नंदी की आकृतियाँ मिली हैं।"
    },
    {
        question: "'पशुपति संप्रदाय' की स्थापना किसने की थी?",
        answers: [
            { text: "शंकराचार्य", correct: false },
            { text: "वासव", correct: false },
            { text: "लकुलीश", correct: true },
            { text: "रामानुज", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शैव धर्म का सबसे प्राचीन संप्रदाय पाशुपत था, जिसकी स्थापना लकुलीश ने की थी।"
    },
    {
        question: "'केदारनाथ' ज्योतिर्लिंग किस पर्वत श्रृंखला पर स्थित है?",
        answers: [
            { text: "हिमालय", correct: true },
            { text: "शिवालिक", correct: false },
            { text: "विंध्य", correct: false },
            { text: "सतपुड़ा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केदारनाथ ज्योतिर्लिंग उत्तराखंड में हिमालय पर्वत श्रृंखला में स्थित है।"
    },
    {
        question: "'कालामुख' संप्रदाय के अनुयायी किस देवता की पूजा करते थे?",
        answers: [
            { text: "शिव", correct: true },
            { text: "विष्णु", correct: false },
            { text: "शक्ति", correct: false },
            { text: "ब्रह्मा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालामुख संप्रदाय शैव धर्म का ही एक हिस्सा था, और इसके अनुयायी भगवान शिव की उग्र रूप में पूजा करते थे।"
    },
    {
        question: "'नटराज' की मूर्ति में शिव किस अवस्था में हैं?",
        answers: [
            { text: "योग", correct: false },
            { text: "ध्यान", correct: false },
            { text: "तांडव नृत्य", correct: true },
            { text: "विश्राम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नटराज' की मूर्ति में भगवान शिव को उनके तांडव नृत्य की अवस्था में दर्शाया गया है, जो सृष्टि के सृजन और विनाश का प्रतीक है।"
    },
    {
        question: "शैव धर्म के किस संप्रदाय में 'पंचमुद्रा' की साधना प्रचलित थी?",
        answers: [
            { text: "लिंगायत", correct: false },
            { text: "पाशुपत", correct: false },
            { text: "कापालिक", correct: true },
            { text: "नाथ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कापालिक संप्रदाय के अनुयायी 'पंचमुद्रा' जैसी तांत्रिक साधनाएं करते थे।"
    },
    {
        question: "'सोमनाथ' ज्योतिर्लिंग किस राज्य में स्थित है?",
        answers: [
            { text: "राजस्थान", correct: false },
            { text: "गुजरात", correct: true },
            { text: "महाराष्ट्र", correct: false },
            { text: "पंजाब", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोमनाथ ज्योतिर्लिंग गुजरात के सौराष्ट्र क्षेत्र में स्थित है और यह बारह ज्योतिर्लिंगों में से एक है।"
    },
    {
        question: "'महाकाल' का अर्थ क्या है?",
        answers: [
            { text: "महान योगी", correct: false },
            { text: "महान संहारक", correct: false },
            { text: "महान समय", correct: true },
            { text: "महान शासक", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महाकाल' शब्द का शाब्दिक अर्थ है 'महान समय', जो शिव के उस रूप को दर्शाता है जो काल (समय) से भी परे है।"
    },
    {
        question: "शैव धर्म का सबसे प्राचीन संप्रदाय कौन-सा था, जिसके संस्थापक को शिव का अवतार माना जाता है?",
        answers: [
            { text: "कालामुख", correct: false },
            { text: "लिंगायत", correct: false },
            { text: "पाशुपत", correct: true },
            { text: "नाथ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पाशुपत शैव धर्म का सबसे प्राचीन संप्रदाय था, जिसके संस्थापक लकुलीश को शिव का 28वां अवतार माना जाता है।"
    },
    {
        question: "'त्रयंबकेश्वर' ज्योतिर्लिंग किस देवता को समर्पित है?",
        answers: [
            { text: "विष्णु", correct: false },
            { text: "ब्रह्मा", correct: false },
            { text: "शिव", correct: true },
            { text: "गणेश", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> त्रयंबकेश्वर बारह ज्योतिर्लिंगों में से एक है, जो भगवान शिव को समर्पित है।"
    },
    {
        question: "'सिंधु घाटी सभ्यता' से प्राप्त किस मोहर पर शिव के प्रारंभिक रूप को 'पशुपति' कहा गया है?",
        answers: [
            { text: "बैल वाली मुहर", correct: false },
            { text: "मुकुट वाले योगी", correct: true },
            { text: "नटराज वाली मुहर", correct: false },
            { text: "त्रिमुख वाली मुहर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो से प्राप्त मुहर पर एक सींग वाले मुकुट पहने और चारों ओर जानवरों से घिरे योगी की आकृति को 'आद्य-शिव' या 'पशुपति' कहा गया है।"
    },
    {
        question: "'लिंगायत' संप्रदाय के अनुयायियों को किस नाम से भी जाना जाता है?",
        answers: [
            { text: "शैव", correct: false },
            { text: "वैष्णव", correct: false },
            { text: "वीरशैव", correct: true },
            { text: "शाक्त", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिंगायत संप्रदाय के अनुयायी, जो शिव के कट्टर उपासक थे, को वीरशैव भी कहा जाता था।"
    },
    {
        question: "'नागा साधुओं' का संबंध किस शैव संप्रदाय से है?",
        answers: [
            { text: "पाशुपत", correct: false },
            { text: "कापालिक", correct: false },
            { text: "नाथ", correct: true },
            { text: "लिंगायत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नाथ संप्रदाय से जुड़े साधुओं को अक्सर नागा साधुओं के रूप में जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस संप्रदाय की स्थापना मत्स्येंद्रनाथ ने की थी और इसका प्रचार गोरखनाथ ने किया।"
    },
    {
        question: "'पशुपति' शब्द का उल्लेख किस प्राचीन ग्रंथ में मिलता है?",
        answers: [
            { text: "ऋग्वेद", correct: false },
            { text: "यजुर्वेद", correct: true },
            { text: "अथर्ववेद", correct: false },
            { text: "रामायण", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेदों में शिव के लिए 'रुद्र' और 'पशुपति' दोनों नामों का प्रयोग हुआ है, लेकिन 'पशुपति' का स्पष्ट उल्लेख यजुर्वेद में मिलता है।"
    },
    {
        question: "शैव धर्म का कौन-सा संप्रदाय केवल 'शिव' को ही परम सत्य मानता है और किसी अन्य देवता की पूजा नहीं करता?",
        answers: [
            { text: "नाथ", correct: false },
            { text: "कापालिक", correct: false },
            { text: "पाशुपत", correct: false },
            { text: "लिंगायत", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिंगायत संप्रदाय, जिसे 'वीरशैव' भी कहते हैं, एक एकेश्वरवादी संप्रदाय है जो केवल भगवान शिव को ही सर्वोच्च मानता है और अन्य देवी-देवताओं की पूजा नहीं करता।"
    },
    {
        question: "'बृहदेश्वर मंदिर' किस स्थान पर स्थित है?",
        answers: [
            { text: "मदुरै", correct: false },
            { text: "तंजौर", correct: true },
            { text: "कांचीपुरम", correct: false },
            { text: "हलेबिदु", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तमिलनाडु के तंजौर में स्थित बृहदेश्वर मंदिर शैव धर्म का एक प्रमुख मंदिर है, जिसे चोल शासक राजाराजा प्रथम ने बनवाया था।"
    },
    {
        question: "शैव धर्म का कौन-सा संप्रदाय वाममार्गी साधना और तांत्रिक क्रियाओं पर अधिक जोर देता था?",
        answers: [
            { text: "पाशुपत", correct: false },
            { text: "कापालिक", correct: true },
            { text: "लिंगायत", correct: false },
            { text: "नाथ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कापालिक संप्रदाय अपनी वाममार्गी (अतिवादी) साधनाओं और तांत्रिक अनुष्ठानों के लिए प्रसिद्ध था।"
    },
    {
        question: "'त्रयंबकेश्वर' ज्योतिर्लिंग किस नदी के उद्गम स्थल पर स्थित है?",
        answers: [
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: false },
            { text: "गोदावरी", correct: true },
            { text: "कृष्णा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> त्रयंबकेश्वर ज्योतिर्लिंग महाराष्ट्र में गोदावरी नदी के उद्गम स्थल पर स्थित है।"
    },
    {
        question: "'नटराज' की कांस्य मूर्ति किस काल की कला का एक प्रसिद्ध उदाहरण है?",
        answers: [
            { text: "गुप्त काल", correct: false },
            { text: "पल्लव काल", correct: false },
            { text: "चोल काल", correct: true },
            { text: "राष्ट्रकूट काल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोल काल में बनी नटराज की कांस्य मूर्तियाँ अपनी कलात्मकता और सुंदरता के लिए विश्व भर में प्रसिद्ध हैं।"
    },
    {
        question: "दक्षिण भारत में शैव धर्म का पुनरुत्थान किस राजवंश के शासनकाल में हुआ?",
        answers: [
            { text: "चोल", correct: false },
            { text: "चालुक्य", correct: false },
            { text: "पल्लव", correct: true },
            { text: "राष्ट्रकूट", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शैव धर्म का पुनरुत्थान पल्लव काल में शुरू हुआ, जब नयनार संतों ने अपनी भक्ति कविताओं के माध्यम से इसका प्रचार किया।"
    },
    {
        question: "'महाकालेश्वर' ज्योतिर्लिंग कहाँ स्थित है?",
        answers: [
            { text: "वाराणसी", correct: false },
            { text: "उज्जैन", correct: true },
            { text: "हरिद्वार", correct: false },
            { text: "नासिक", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाकालेश्वर ज्योतिर्लिंग उज्जैन (मध्य प्रदेश) में स्थित है और यह बारह ज्योतिर्लिंगों में से एक है।"
    },
    {
        question: "शैव धर्म के किस संप्रदाय ने अपने अनुयायियों को नर-मुंड की माला पहनने के लिए प्रोत्साहित किया?",
        answers: [
            { text: "पाशुपत", correct: false },
            { text: "कापालिक", correct: false },
            { text: "कालामुख", correct: true },
            { text: "लिंगायत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालामुख संप्रदाय, जो कापालिकों से मिलता-जुलता था, अपने कठोर और भयावह अनुष्ठानों के लिए जाना जाता था।"
    },
    {
        question: "शैव धर्म से संबंधित 'आगम ग्रंथ' किस विषय से संबंधित हैं?",
        answers: [
            { text: "इतिहास और पुराण", correct: false },
            { text: "दर्शन और योग", correct: false },
            { text: "पूजा विधि और तंत्र साधना", correct: true },
            { text: "वेद और उपनिषद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शैव धर्म के आगम ग्रंथ शिव की पूजा विधि, मंत्र, और तांत्रिक साधनाओं का विस्तृत वर्णन करते हैं।"
    },
    {
        question: "'अमरनाथ गुफा' किस राज्य में स्थित है?",
        answers: [
            { text: "उत्तराखंड", correct: false },
            { text: "हिमाचल प्रदेश", correct: false },
            { text: "जम्मू और कश्मीर", correct: true },
            { text: "सिक्किम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमरनाथ गुफा, जहाँ प्राकृतिक रूप से बर्फ का शिवलिंग बनता है, जम्मू और कश्मीर में स्थित है।"
    },
    {
        question: "किस शासक ने 'एलिफेंटा' की गुफाओं का निर्माण करवाया था, जो शैव धर्म को समर्पित हैं?",
        answers: [
            { text: "गुप्त", correct: false },
            { text: "पल्लव", correct: false },
            { text: "राष्ट्रकूट", correct: true },
            { text: "चालुक्य", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एलिफेंटा की गुफाओं का निर्माण राष्ट्रकूट शासकों के समय में हुआ था।"
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
        question: "'नाथ संप्रदाय' के संस्थापक कौन थे?",
        answers: [
            { text: "गोरखनाथ", correct: false },
            { text: "मत्स्येंद्रनाथ", correct: true },
            { text: "शंकराचार्य", correct: false },
            { text: "वासव", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नाथ संप्रदाय की स्थापना मत्स्येंद्रनाथ ने की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> उनके शिष्य गोरखनाथ ने इसका व्यापक प्रचार-प्रसार किया।"
    },
    {
        question: "शैव धर्म में 'रुद्र' का अर्थ क्या है?",
        answers: [
            { text: "शुभ", correct: false },
            { text: "कल्याणकारी", correct: false },
            { text: "भयंकर", correct: true },
            { text: "महान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैदिक काल में 'रुद्र' को एक भयंकर देवता माना जाता था, जो तूफानों और बीमारियों को लाते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में यही रूप शिव से जुड़ गया।"
    },
    {
        question: "किस पुराण में शैव धर्म का सबसे विस्तृत वर्णन है?",
        answers: [
            { text: "शिव पुराण", correct: true },
            { text: "विष्णु पुराण", correct: false },
            { text: "गरुड़ पुराण", correct: false },
            { text: "ब्रह्म पुराण", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शिव पुराण शैव धर्म का एक प्रमुख ग्रंथ है, जिसमें शिव की महिमा, उनके अवतारों और पूजा पद्धति का विस्तृत वर्णन है।"
    },
    {
        question: "'एकादश रुद्र' की अवधारणा का संबंध किस देवता से है?",
        answers: [
            { text: "विष्णु", correct: false },
            { text: "ब्रह्मा", correct: false },
            { text: "शिव", correct: true },
            { text: "इंद्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'एकादश रुद्र' का अर्थ है 11 रुद्र, जो भगवान शिव के विभिन्न रूप हैं।"
    },
    {
        question: "'शैव धर्म' और 'वैष्णव धर्म' के बीच एकता स्थापित करने का प्रयास किस काल में हुआ था?",
        answers: [
            { text: "मौर्य काल", correct: false },
            { text: "गुप्त काल", correct: true },
            { text: "चोल काल", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त काल में वैष्णव और शैव धर्म के बीच समन्वय स्थापित करने का प्रयास हुआ।<br><br><i class='fa-solid fa-angles-right icon'></i> इस काल में दोनों संप्रदायों के देवी-देवताओं को समान रूप से पूजा जाने लगा।"
    },
    {
        question: "'अर्धनारीश्वर' स्वरूप में शिव का कौन-सा हाथ पुरुष और कौन-सा स्त्री का है?",
        answers: [
            { text: "दायाँ पुरुष, बायाँ स्त्री", correct: true },
            { text: "बायाँ पुरुष, दायाँ स्त्री", correct: false },
            { text: "दोनों पुरुष", correct: false },
            { text: "दोनों स्त्री", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अर्धनारीश्वर की मूर्तियों में शिव का दायाँ भाग पुरुष का और बायाँ भाग स्त्री (पार्वती) का होता है।"
    },
    {
        question: "शैव धर्म के किस संप्रदाय के अनुयायी शिव के आठ भेदों (अष्टमूर्ति) की पूजा करते थे?",
        answers: [
            { text: "पाशुपत", correct: true },
            { text: "कापालिक", correct: false },
            { text: "कालामुख", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पाशुपत संप्रदाय के अनुयायी शिव के आठ भेदों (अष्टमूर्ति) की पूजा करते थे, जो उनके विभिन्न रूपों को दर्शाते हैं।"
    },
    {
        question: "'लिंगायत' संप्रदाय की स्थापना किस शताब्दी में हुई थी?",
        answers: [
            { text: "8वीं", correct: false },
            { text: "10वीं", correct: false },
            { text: "12वीं", correct: true },
            { text: "15वीं", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिंगायत संप्रदाय की स्थापना 12वीं शताब्दी में कर्नाटक में वासव ने की थी।"
    },
    {
        question: "'शैव धर्म' को दक्षिण भारत में लोकप्रिय बनाने के लिए किस भाषा में भक्ति गीत और कविताएं लिखी गईं?",
        answers: [
            { text: "तेलुगु", correct: false },
            { text: "कन्नड़", correct: false },
            { text: "तमिल", correct: true },
            { text: "मलयालम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नयनार संतों ने तमिल भाषा में भक्ति गीत और कविताएं लिखीं, जिन्होंने दक्षिण भारत में शैव धर्म को लोकप्रिय बनाने में महत्वपूर्ण भूमिका निभाई।"
    },
    {
        question: "'एलिफेंटा' की गुफाओं में स्थित 'त्रिमूर्ति' की विशाल प्रतिमा किस देवता की है?",
        answers: [
            { text: "ब्रह्मा", correct: false },
            { text: "विष्णु", correct: false },
            { text: "शिव", correct: true },
            { text: "तीनों की संयुक्त रूप से", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एलिफेंटा की गुफाओं में स्थित प्रसिद्ध 'त्रिमूर्ति' प्रतिमा भगवान शिव के तीन पहलुओं (सृजन, संरक्षण और विनाश) को दर्शाती है, जिन्हें ब्रह्मा, विष्णु और महेश के रूप में देखा जाता है।"
    },
    {
        question: "'शैव धर्म' का कौन-सा संप्रदाय अपने अनुयायियों को सिर के बालों में जटाएँ रखने और शरीर पर भस्म लगाने के लिए जाना जाता था?",
        answers: [
            { text: "लिंगायत", correct: false },
            { text: "पाशुपत", correct: false },
            { text: "कालामुख", correct: true },
            { text: "नाथ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालामुख संप्रदाय के अनुयायी अपने कठोर नियमों के तहत जटाएँ रखते थे और पूरे शरीर पर भस्म लगाते थे।"
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