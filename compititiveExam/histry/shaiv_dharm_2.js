const questions = [
    {
        topHeading: "शैव धर्म पर आधारित बहुविकल्पी प्रश्न part 2 (quiz_no.38)"
    },
    {
        question: "किस शासक ने अपनी मुद्राओं पर शिव, नंदी और त्रिशूल की आकृतियां अंकित करवाई थीं?",
        answers: [
            { text: "अशोक", correct: false },
            { text: "कनिष्क", correct: false },
            { text: "समुद्रगुप्त", correct: false },
            { text: "विम कडफिसेस", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाण वंश के शासक विम कडफिसेस के सिक्कों पर शिव और नंदी की आकृतियाँ मिली हैं, जिससे यह पता चलता है कि वह शैव धर्म का अनुयायी था।"
    },
    {
        question: "शैव धर्म का कौन-सा संप्रदाय अपने अनुयायियों को श्मशान घाटों पर निवास करने और नर-कपालों का उपयोग करने के लिए जाना जाता था?",
        answers: [
            { text: "लिंगायत", correct: false },
            { text: "पाशुपत", correct: false },
            { text: "कापालिक", correct: true },
            { text: "नाथ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कापालिक शैव धर्म का एक अतिवादी संप्रदाय था, जो अपनी तपस्या के लिए श्मशान घाटों में रहते थे और नर-कपालों का उपयोग करते थे।"
    },
    {
        question: "'लिंगायत' संप्रदाय किस क्षेत्र में प्रमुखता से फैला?",
        answers: [
            { text: "उत्तर भारत", correct: false },
            { text: "दक्षिण भारत (विशेषकर कर्नाटक)", correct: true },
            { text: "पूर्वी भारत", correct: false },
            { text: "पश्चिमी भारत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिंगायत संप्रदाय की स्थापना 12वीं शताब्दी में वासव ने कर्नाटक में की थी, और यह यहीं पर सबसे अधिक लोकप्रिय हुआ।"
    },
    {
        question: "'पशुपतिनाथ' मंदिर, जो शैव धर्म का एक प्रमुख केंद्र है, किस देश में स्थित है?",
        answers: [
            { text: "भारत", correct: false },
            { text: "नेपाल", correct: true },
            { text: "श्रीलंका", correct: false },
            { text: "भूटान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भगवान शिव को समर्पित पशुपतिनाथ मंदिर नेपाल की राजधानी काठमांडू में बागमती नदी के किनारे स्थित है।"
    },
    {
        question: "'नयनार' संत किस धर्म के अनुयायी थे?",
        answers: [
            { text: "वैष्णव", correct: false },
            { text: "शैव", correct: true },
            { text: "जैन", correct: false },
            { text: "बौद्ध", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्षिण भारत में भक्ति आंदोलन के दौरान, नयनार शैव धर्म के अनुयायी थे, जबकि आलवार संत वैष्णव धर्म के अनुयायी थे।"
    },
    {
        question: "'शैव धर्म' का पहला स्पष्ट उल्लेख किस पुराण में मिलता है?",
        answers: [
            { text: "शिव पुराण", correct: false },
            { text: "वायु पुराण", correct: false },
            { text: "मत्स्य पुराण", correct: true },
            { text: "गरुड़ पुराण", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि शिव पुराण शैव धर्म का मुख्य ग्रंथ है, लेकिन 'लिंग पूजा' का पहला स्पष्ट उल्लेख मत्स्य पुराण में मिलता है।"
    },
    {
        question: "शैव धर्म के किस संप्रदाय ने जाति व्यवस्था का विरोध किया और सामाजिक समानता पर जोर दिया?",
        answers: [
            { text: "पाशुपत", correct: false },
            { text: "कापालिक", correct: false },
            { text: "लिंगायत", correct: true },
            { text: "नाथ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिंगायत संप्रदाय ने वैदिक अनुष्ठानों और जाति व्यवस्था का जोरदार विरोध किया।<br><br><i class='fa-solid fa-angles-right icon'></i> इस संप्रदाय को 'वीरशैव' भी कहा जाता है।"
    },
    {
        question: "'नटराज' की मूर्ति किस शैली की है और किस काल से संबंधित है?",
        answers: [
            { text: "पल्लव काल, नागर शैली", correct: false },
            { text: "गुप्त काल, गांधार शैली", correct: false },
            { text: "चोल काल, द्रविड़ शैली", correct: true },
            { text: "मौर्य काल, वेसर शैली", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नटराज' की कांस्य मूर्तियाँ चोल काल की एक पहचान हैं और ये द्रविड़ शैली की मूर्तिकला का प्रतिनिधित्व करती हैं।"
    },
    {
        question: "'एलिफेंटा' की गुफाएँ, जो शैव धर्म से संबंधित हैं, किसके शासनकाल के दौरान बनाई गई थीं?",
        answers: [
            { text: "राष्ट्रकूट", correct: true },
            { text: "चालुक्य", correct: false },
            { text: "गुप्त", correct: false },
            { text: "चोल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुंबई के पास स्थित एलिफेंटा की गुफाओं का निर्माण राष्ट्रकूट शासकों के समय में हुआ था, जहाँ शिव की प्रसिद्ध 'त्रिमूर्ति' प्रतिमा है।"
    },
    {
        question: "'अर्धनारीश्वर' स्वरूप में शिव के साथ कौन-सी देवी का चित्रण होता है?",
        answers: [
            { text: "लक्ष्मी", correct: false },
            { text: "सरस्वती", correct: false },
            { text: "पार्वती", correct: true },
            { text: "दुर्गा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अर्धनारीश्वर रूप भगवान शिव और उनकी पत्नी पार्वती का संयुक्त रूप है, जो पुरुष और प्रकृति के संयोजन का प्रतीक है।"
    },
    {
        question: "'शैव धर्म' का सबसे प्राचीन संप्रदाय कौन-सा था, जिसकी स्थापना लकुलीश ने की थी?",
        answers: [
            { text: "पाशुपत", correct: true },
            { text: "कापालिक", correct: false },
            { text: "कालामुख", correct: false },
            { text: "वीरशैव", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पाशुपत शैव धर्म का सबसे प्राचीन संप्रदाय है, जिसके संस्थापक लकुलीश थे।"
    },
    {
        question: "'त्रिमूर्ति' की अवधारणा में, शिव को किस नाम से पुकारा जाता है?",
        answers: [
            { text: "ब्रह्मा", correct: false },
            { text: "विष्णु", correct: false },
            { text: "महेश", correct: true },
            { text: "इंद्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंदू धर्म में 'त्रिमूर्ति' (ब्रह्मा, विष्णु, महेश) में शिव के लिए महेश नाम का प्रयोग किया जाता है, जो संहारक की भूमिका निभाते हैं।"
    },
    {
        question: "'लिंगायत' संप्रदाय के अनुयायी किस धार्मिक ग्रंथ को अपना आदर्श मानते थे?",
        answers: [
            { text: "वेद", correct: false },
            { text: "आगम", correct: true },
            { text: "शिव पुराण", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिंगायत संप्रदाय के अनुयायी आगम ग्रंथों को अपना आदर्श मानते थे, जिनमें तंत्र साधना और शिव पूजा की पद्धतियों का वर्णन है।"
    },
    {
        question: "'कालामुख' संप्रदाय के अनुयायी किस प्रकार की साधना करते थे?",
        answers: [
            { text: "वैदिक", correct: false },
            { text: "तांत्रिक और उग्र", correct: true },
            { text: "ध्यान और योग", correct: false },
            { text: "अहिंसक", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालामुख संप्रदाय के अनुयायी तांत्रिक और उग्र साधनाएं करते थे, जैसे नर-मुंड की माला पहनना और नर-कपाल में भोजन करना।"
    },
    {
        question: "'तंजौर' का बृहदेश्वर मंदिर किस देवता को समर्पित है?",
        answers: [
            { text: "विष्णु", correct: false },
            { text: "ब्रह्मा", correct: false },
            { text: "गणेश", correct: false },
            { text: "शिव", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोल शासक राजाराजा प्रथम द्वारा निर्मित बृहदेश्वर मंदिर भगवान शिव को समर्पित है।"
    },
    {
        question: "'अमरनाथ गुफा' किस राज्य या केंद्र शासित प्रदेश में स्थित है?",
        answers: [
            { text: "हिमाचल प्रदेश", correct: false },
            { text: "उत्तराखंड", correct: false },
            { text: "जम्मू और कश्मीर", correct: true },
            { text: "अरुणाचल प्रदेश", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमरनाथ गुफा, जहाँ प्राकृतिक रूप से बर्फ का शिवलिंग बनता है, जम्मू और कश्मीर में स्थित है।"
    },
    {
        question: "शैव धर्म का कौन-सा संप्रदाय अपने अनुयायियों को 'वीरशैव' के रूप में भी जाना जाता था?",
        answers: [
            { text: "पाशुपत", correct: false },
            { text: "कालामुख", correct: false },
            { text: "लिंगायत", correct: true },
            { text: "नाथ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिंगायत संप्रदाय के अनुयायी, जो शिव को ही एकमात्र परम सत्य मानते थे, को वीरशैव भी कहा जाता था।"
    },
    {
        question: "'नाथ' संप्रदाय की स्थापना किसने की थी?",
        answers: [
            { text: "लकुलीश", correct: false },
            { text: "गोरखनाथ", correct: false },
            { text: "मत्स्येंद्रनाथ", correct: true },
            { text: "वासव", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नाथ संप्रदाय की स्थापना मत्स्येंद्रनाथ ने की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में उनके शिष्य गोरखनाथ ने इसका व्यापक प्रचार-प्रसार किया।"
    },
    {
        question: "'सिंधु घाटी सभ्यता' से मिली किस मोहर पर शिव के प्रारंभिक रूप का चित्र है?",
        answers: [
            { text: "नृत्य करती हुई लड़की", correct: false },
            { text: "एक horned देवता", correct: false },
            { text: "एक बैल", correct: false },
            { text: "एक पुरुष योगी", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो से प्राप्त एक मोहर पर एक तीन-मुख वाले पुरुष देवता को योग मुद्रा में बैठा दिखाया गया है, जिसे 'आद्य शिव' (Proto-Shiva) माना गया है।"
    },
    {
        question: "'रुद्र' शब्द का उल्लेख किस वैदिक ग्रंथ में मिलता है?",
        answers: [
            { text: "ऋग्वेद", correct: true },
            { text: "यजुर्वेद", correct: false },
            { text: "सामवेद", correct: false },
            { text: "अथर्ववेद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैदिक साहित्य में, विशेष रूप से ऋग्वेद में, शिव को रुद्र के रूप में वर्णित किया गया है, जिन्हें तूफानों का देवता माना जाता है।"
    },
    {
        question: "'विम कडफिसेस' किस वंश का शासक था?",
        answers: [
            { text: "मौर्य वंश", correct: false },
            { text: "कुषाण वंश", correct: true },
            { text: "गुप्त वंश", correct: false },
            { text: "सातवाहन वंश", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विम कडफिसेस कुषाण वंश का एक महत्वपूर्ण शासक था, जिसने शैव धर्म को अपनाया था।"
    },
    {
        question: "'अर्धनारीश्वर' के रूप में शिव का चित्रण किस बात का प्रतीक है?",
        answers: [
            { text: "स्त्री की शक्ति", correct: false },
            { text: "पुरुष और प्रकृति का संतुलन", correct: true },
            { text: "शिव की महानता", correct: false },
            { text: "प्रेम और वैवाहिक जीवन", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह रूप पुरुष (शिव) और प्रकृति (पार्वती) के संयोजन का प्रतीक है, जो सृष्टि के निरंतरता और संतुलन को दर्शाता है।"
    },
    {
        question: "'बृहदेश्वर मंदिर' किस शैली की वास्तुकला का एक प्रमुख उदाहरण है?",
        answers: [
            { text: "नागर शैली", correct: false },
            { text: "वेसर शैली", correct: false },
            { text: "द्रविड़ शैली", correct: true },
            { text: "होयसल शैली", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तंजौर का बृहदेश्वर मंदिर दक्षिण भारतीय स्थापत्य कला की द्रविड़ शैली का एक उत्कृष्ट नमूना है।"
    },
    {
        question: "'कालामुख' संप्रदाय के अनुयायी किस देवता की पूजा करते थे?",
        answers: [
            { text: "विष्णु", correct: false },
            { text: "ब्रह्मा", correct: false },
            { text: "शिव", correct: true },
            { text: "गणेश", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालामुख शैव धर्म का ही एक संप्रदाय था, और इसके अनुयायी भगवान शिव की पूजा करते थे।"
    },
    {
        question: "दक्षिण भारत में शैव संप्रदाय का पुनरुत्थान और लोकप्रिय बनाने में किस संतों ने भूमिका निभाई?",
        answers: [
            { text: "आलवार संत", correct: false },
            { text: "नयनार संत", correct: true },
            { text: "आदि शंकराचार्य", correct: false },
            { text: "रामानुजाचार्य", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नयनार संत दक्षिण भारत में शैव धर्म के प्रचारक थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने अपनी भक्ति कविताओं के माध्यम से लोगों को शिव की उपासना के लिए प्रेरित किया।"
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