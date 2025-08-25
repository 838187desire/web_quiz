const questions = [
    {
        topHeading: "चालुक्य वंश पर आधारित बहुविकल्पी प्रश्न part 2 (quiz_no.98)"
    },
    {
        question: "एहोल को किस नाम से जाना जाता था?",
        answers: shuffle([
            { text: "मंदिरों का शहर", correct: true },
            { text: "चालुक्यों की राजधानी", correct: false },
            { text: "व्यापार का केंद्र", correct: false },
            { text: "जैनियों का केंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एहोल को 'भारतीय मंदिर वास्तुकला का उद्गमस्थल' भी कहा जाता है, जहाँ चालुक्य काल के 70 से अधिक मंदिर स्थित हैं।"
    },
    {
        question: "किस चालुक्य शासक ने मल्लिकार्जुन मंदिर का निर्माण करवाया था?",
        answers: shuffle([
            { text: "पुलकेशिन प्रथम", correct: false },
            { text: "विक्रमादित्य द्वितीय", correct: true },
            { text: "कीर्तिवर्मन प्रथम", correct: false },
            { text: "जयसिंह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्रमादित्य द्वितीय की रानी त्रैलोक्यमहादेवी ने पट्टदकल में मल्लिकार्जुन मंदिर का निर्माण करवाया था, जो विरूपाक्ष मंदिर के समान है।"
    },
    {
        question: "बादामी के चालुक्यों का वह कौन-सा शासक था, जिसने 'विजयादित्य' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "पुलकेशिन प्रथम", correct: false },
            { text: "कीर्तिवर्मन द्वितीय", correct: false },
            { text: "विजयादित्य", correct: true },
            { text: "विक्रमादित्य प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विजयादित्य ने अपने शासनकाल में चालुक्य साम्राज्य को स्थिरता प्रदान की और पल्लवों के साथ संघर्ष को जारी रखा।"
    },
    {
        question: "चालुक्य प्रशासन में 'महात्तर' कौन होता था?",
        answers: shuffle([
            { text: "गाँव का मुखिया", correct: true },
            { text: "न्यायाधीश", correct: false },
            { text: "राजस्व अधिकारी", correct: false },
            { text: "सेना का अधिकारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महात्तर' ग्राम सभा का प्रमुख सदस्य होता था, जो गाँव के प्रशासन में महत्वपूर्ण भूमिका निभाता था।"
    },
    {
        question: "कल्याणी के चालुक्यों और चोलों के बीच सबसे प्रसिद्ध युद्ध कौन-सा था?",
        answers: shuffle([
            { text: "तक्कोलम का युद्ध", correct: false },
            { text: "मान्मंगई का युद्ध", correct: false },
            { text: "कोप्पल का युद्ध", correct: false },
            { text: "कोप्पम का युद्ध", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोप्पम के युद्ध (1054 ईस्वी) में चोल शासक राजेंद्र द्वितीय ने चालुक्य शासक सोमेश्वर प्रथम को पराजित किया था, जिसमें सोमेश्वर के भाई जयसिंह तृतीय की मृत्यु हो गई थी।"
    },
    {
        question: "बादामी के चालुक्यों का अंतिम शासक कौन था, जिसे राष्ट्रकूटों ने पराजित किया?",
        answers: shuffle([
            { text: "पुलकेशिन द्वितीय", correct: false },
            { text: "विक्रमादित्य द्वितीय", correct: false },
            { text: "कीर्तिवर्मन द्वितीय", correct: true },
            { text: "विनयदित्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कीर्तिवर्मन द्वितीय बादामी के चालुक्य वंश का अंतिम शासक था, जिसे राष्ट्रकूट शासक दंतिदुर्ग ने समाप्त किया।"
    },
    {
        question: "चालुक्य कला का 'उत्कृष्ट केंद्र' किसे माना जाता है?",
        answers: shuffle([
            { text: "बादामी", correct: false },
            { text: "एहोल", correct: false },
            { text: "पट्टदकल", correct: false },
            { text: "उपर्युक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बादामी, एहोल और पट्टदकल तीनों ही चालुक्य कला के महत्वपूर्ण केंद्र थे, जहाँ वेसर शैली में बने मंदिर और गुफाएँ मौजूद हैं।"
    },
    {
        question: "चालुक्य शासक पुलकेशिन द्वितीय के समकालीन कन्नौज का शासक कौन था?",
        answers: shuffle([
            { text: "हर्षवर्धन", correct: true },
            { text: "राजराजा प्रथम", correct: false },
            { text: "महेंद्रपाल", correct: false },
            { text: "नरसिंहवर्मन प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुलकेशिन द्वितीय ने हर्षवर्धन को नर्मदा नदी के तट पर पराजित किया था, जैसा कि एहोल अभिलेख में वर्णित है।"
    },
    {
        question: "किस चालुक्य शासक ने 'दक्षिण का नेपोलियन' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "पुलकेशिन प्रथम", correct: false },
            { text: "पुलकेशिन द्वितीय", correct: true },
            { text: "विक्रमादित्य षष्ठ", correct: false },
            { text: "सोमेश्वर प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुलकेशिन द्वितीय की व्यापक सैन्य सफलताओं के कारण इतिहासकारों ने उसे 'दक्षिण का नेपोलियन' कहा है।"
    },
    {
        question: "'वातापीकोंडा' की उपाधि किसने धारण की थी?",
        answers: shuffle([
            { text: "पुलकेशिन द्वितीय", correct: false },
            { text: "नरसिंहवर्मन प्रथम", correct: true },
            { text: "विक्रमादित्य प्रथम", correct: false },
            { text: "कीर्तिवर्मन द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पल्लव शासक नरसिंहवर्मन प्रथम ने पुलकेशिन द्वितीय को हराने के बाद 'वातापीकोंडा' (वातापी का विजेता) की उपाधि धारण की थी।"
    },
    {
        question: "कल्याणी के चालुक्यों का अंतिम महान शासक किसे माना जाता है?",
        answers: shuffle([
            { text: "तैलप द्वितीय", correct: false },
            { text: "सोमेश्वर प्रथम", correct: false },
            { text: "विक्रमादित्य षष्ठ", correct: true },
            { text: "सोमेश्वर चतुर्थ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्रमादित्य षष्ठ का शासनकाल कल्याणी के चालुक्यों का स्वर्ण युग माना जाता है, जिसमें कला और साहित्य का विकास हुआ।"
    },
    {
        question: "एहोल अभिलेख में पुलकेशिन द्वितीय की किस विजय का उल्लेख है?",
        answers: shuffle([
            { text: "पल्लवों पर विजय", correct: false },
            { text: "कदंबों पर विजय", correct: false },
            { text: "हर्षवर्धन पर विजय", correct: true },
            { text: "उपर्युक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एहोल अभिलेख में मुख्य रूप से पुलकेशिन द्वितीय द्वारा हर्षवर्धन को पराजित करने का वर्णन है, जिसमें उसे 'दक्षिणापथेश्वर' कहा गया है।"
    },
    {
        question: "चालुक्यों के शासनकाल में 'महानंददंडनायक' कौन होता था?",
        answers: shuffle([
            { text: "सेना का कमांडर", correct: false },
            { text: "राजस्व अधिकारी", correct: false },
            { text: "न्यायाधीश", correct: true },
            { text: "प्रधानमंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महानंददंडनायक' न्यायपालिका का प्रमुख होता था, जो न्याय से संबंधित मामलों को देखता था।"
    },
    {
        question: "'विक्रमांकदेव चरित्र' नामक ग्रंथ के लेखक कौन थे?",
        answers: shuffle([
            { text: "रविकीर्ति", correct: false },
            { text: "बिल्हण", correct: true },
            { text: "विज्ञानेश्वर", correct: false },
            { text: "पम्प", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिल्हण ने अपने आश्रयदाता कल्याणी के चालुक्य शासक विक्रमादित्य षष्ठ की जीवनी 'विक्रमांक देव चरित्र' में लिखी थी।"
    },
    {
        question: "बादामी में गुफा मंदिरों का निर्माण किस चालुक्य शासक के शासनकाल में शुरू हुआ?",
        answers: shuffle([
            { text: "पुलकेशिन प्रथम", correct: false },
            { text: "कीर्तिवर्मन प्रथम", correct: true },
            { text: "पुलकेशिन द्वितीय", correct: false },
            { text: "विक्रमादित्य प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बादामी के गुफा मंदिरों का निर्माण कीर्तिवर्मन प्रथम के शासनकाल में शुरू हुआ था, और इन्हें हिंदू तथा जैन धर्म को समर्पित किया गया था।"
    },
    {
        question: "चालुक्य वंश की किस शाखा ने चोलों के साथ वैवाहिक संबंध स्थापित किए थे?",
        answers: shuffle([
            { text: "बादामी के चालुक्य", correct: false },
            { text: "कल्याणी के चालुक्य", correct: false },
            { text: "वेंगी के चालुक्य", correct: true },
            { text: "गुजरात के चालुक्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेंगी के चालुक्यों और चोलों के बीच कई वैवाहिक संबंध स्थापित हुए थे, जिससे दोनों राजवंशों के बीच राजनीतिक गठबंधन मजबूत हुआ।"
    },
    {
        question: "'चालुक्य-विक्रम संवत' नामक कैलेंडर की शुरुआत किसने की थी?",
        answers: shuffle([
            { text: "विक्रमादित्य प्रथम", correct: false },
            { text: "विक्रमादित्य द्वितीय", correct: false },
            { text: "विक्रमादित्य षष्ठ", correct: true },
            { text: "सोमेश्वर तृतीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कल्याणी के चालुक्य शासक विक्रमादित्य षष्ठ ने 1076 ईस्वी में अपने राज्यारोहण के अवसर पर इस नए कैलेंडर की शुरुआत की थी।"
    },
    {
        question: "पट्टदकल में स्थित विरूपाक्ष मंदिर का निर्माण किसने करवाया था?",
        answers: shuffle([
            { text: "लोकमहादेवी", correct: true },
            { text: "त्रैलोक्यमहादेवी", correct: false },
            { text: "दोनों रानियाँ", correct: false },
            { text: "विक्रमादित्य द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विरूपाक्ष मंदिर का निर्माण विक्रमादित्य द्वितीय की रानी लोकमहादेवी ने पल्लवों पर राजा की विजय के उपलक्ष्य में करवाया था।"
    },
    {
        question: "चालुक्यों की प्रशासनिक इकाई में सबसे बड़ी इकाई क्या थी?",
        answers: shuffle([
            { text: "ग्राम", correct: false },
            { text: "विषय", correct: false },
            { text: "राष्ट्र", correct: true },
            { text: "उपग्राम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चालुक्य साम्राज्य 'राष्ट्र' (प्रांतों) में विभाजित था, जो सबसे बड़ी प्रशासनिक इकाई थी, जिसका प्रमुख 'राष्ट्रिक' कहलाता था।"
    },
    {
        question: "कल्याणी के चालुक्यों का वह कौन-सा शासक था, जिसने 'त्रैलोक्यमल्ल' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "तैलप द्वितीय", correct: false },
            { text: "सोमेश्वर प्रथम", correct: true },
            { text: "सोमेश्वर द्वितीय", correct: false },
            { text: "विक्रमादित्य षष्ठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोमेश्वर प्रथम ने अपनी सैन्य सफलताओं के बाद 'त्रैलोक्यमल्ल' की उपाधि धारण की थी।"
    },
    {
        question: "बादामी के चालुक्यों के किस शासक ने कांची के पल्लव शासक महेंद्रवर्मन प्रथम को हराया था?",
        answers: shuffle([
            { text: "पुलकेशिन प्रथम", correct: false },
            { text: "पुलकेशिन द्वितीय", correct: true },
            { text: "विक्रमादित्य प्रथम", correct: false },
            { text: "कीर्तिवर्मन द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एहोल अभिलेख में पुलकेशिन द्वितीय द्वारा पल्लव शासक महेंद्रवर्मन प्रथम पर विजय का उल्लेख है।"
    },
    {
        question: "किस चालुक्य शासक ने 'श्रीमहापुरुष' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "विक्रमादित्य प्रथम", correct: true },
            { text: "विक्रमादित्य द्वितीय", correct: false },
            { text: "पुलकेशिन प्रथम", correct: false },
            { text: "पुलकेशिन द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्रमादित्य प्रथम ने पल्लवों से बादामी को वापस लेने के बाद 'श्रीमहापुरुष' जैसी उपाधियाँ धारण की थीं।"
    },
    {
        question: "चालुक्यों की वास्तुकला में मंदिरों का निर्माण किस शैली में किया गया है?",
        answers: shuffle([
            { text: "केवल नागर", correct: false },
            { text: "केवल द्रविड़", correct: false },
            { text: "नागर और द्रविड़ शैलियों का मिश्रण", correct: true },
            { text: "होयसल शैली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चालुक्य मंदिर वास्तुकला 'वेसर शैली' के नाम से जानी जाती है, जो उत्तर भारत की नागर और दक्षिण भारत की द्रविड़ शैलियों का सुंदर मिश्रण है।"
    },
    {
        question: "चालुक्य शासकों द्वारा जारी किए गए सिक्कों पर आमतौर पर किस देवता का चित्र अंकित होता था?",
        answers: shuffle([
            { text: "शिव", correct: false },
            { text: "विष्णु", correct: false },
            { text: "ब्रह्मा", correct: false },
            { text: "कार्तिकेय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चालुक्यों के सिक्कों पर आमतौर पर उनके कुलदेवता कार्तिकेय का चित्र अंकित होता था।"
    },
    {
        question: "किस चालुक्य शासक ने राष्ट्रकूटों को हराया और कल्याणी के चालुक्य वंश की स्थापना की?",
        answers: shuffle([
            { text: "सोमेश्वर प्रथम", correct: false },
            { text: "विक्रमादित्य षष्ठ", correct: false },
            { text: "तैलप द्वितीय", correct: true },
            { text: "सोमेश्वर द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तैलप द्वितीय ने 973 ईस्वी में राष्ट्रकूटों के अंतिम शासक कर्क द्वितीय को हराकर कल्याणी के चालुक्य वंश की स्थापना की।"
    },
    {
        question: "चालुक्यों की किस शाखा का 'सिंह' राजचिह्न था?",
        answers: shuffle([
            { text: "बादामी के चालुक्य", correct: true },
            { text: "कल्याणी के चालुक्य", correct: false },
            { text: "वेंगी के चालुक्य", correct: false },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बादामी के चालुक्यों का राजचिह्न 'सिंह' था, जबकि कल्याणी के चालुक्यों ने 'वराह' (सूअर) का उपयोग किया था।"
    },
    {
        question: "चालुक्यों के शासनकाल में निर्मित प्रसिद्ध लाड खान मंदिर किस देवता को समर्पित है?",
        answers: shuffle([
            { text: "विष्णु", correct: false },
            { text: "शिव", correct: true },
            { text: "ब्रह्मा", correct: false },
            { text: "कार्तिकेय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एहोल में स्थित लाड खान मंदिर शिव को समर्पित है, हालांकि इसकी प्रारंभिक वास्तुकला में सूर्य देवता की भी पूजा होती थी।"
    },
    {
        question: "किस चालुक्य शासक ने 'जयसिंह' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "पुलकेशिन प्रथम", correct: true },
            { text: "कीर्तिवर्मन प्रथम", correct: false },
            { text: "विक्रमादित्य प्रथम", correct: false },
            { text: "विक्रमादित्य द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चालुक्य वंश के संस्थापक पुलकेशिन प्रथम ने 'जयसिंह' और 'रणविक्रांत' जैसी उपाधियाँ धारण की थीं।"
    },
    {
        question: "चालुक्यों के शासनकाल में 'अग्रहार' क्या था?",
        answers: shuffle([
            { text: "सैनिकों के लिए आवास", correct: false },
            { text: "ब्राह्मणों को दान में दी गई भूमि", correct: true },
            { text: "एक प्रकार का कर", correct: false },
            { text: "व्यापारिक केंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अग्रहार' वह भूमि थी, जो ब्राह्मणों को उनकी धार्मिक सेवाओं के लिए कर-मुक्त दान में दी जाती थी।"
    },
    {
        question: "बादामी के चालुक्यों का सबसे शक्तिशाली शासक कौन था?",
        answers: shuffle([
            { text: "पुलकेशिन प्रथम", correct: false },
            { text: "पुलकेशिन द्वितीय", correct: true },
            { text: "विक्रमादित्य प्रथम", correct: false },
            { text: "विजयादित्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुलकेशिन द्वितीय को बादामी के चालुक्य वंश का सबसे महान और शक्तिशाली शासक माना जाता है, जिसने हर्षवर्धन को पराजित किया था।"
    },
    {
        question: "चालुक्य कला के किस केंद्र में 'पल्लवों के मंदिरों का प्रभाव' स्पष्ट रूप से दिखाई देता है?",
        answers: shuffle([
            { text: "बादामी", correct: false },
            { text: "एहोल", correct: false },
            { text: "पट्टदकल", correct: true },
            { text: "महाबलीपुरम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पट्टदकल में द्रविड़ शैली में बने मंदिर पल्लव वास्तुकला से प्रभावित हैं, क्योंकि यहाँ पल्लवों के साथ संघर्ष और सांस्कृतिक आदान-प्रदान हुआ था।"
    },
    {
        question: "विक्रमादित्य षष्ठ के बाद कल्याणी के चालुक्यों का शासक कौन बना?",
        answers: shuffle([
            { text: "सोमेश्वर द्वितीय", correct: false },
            { text: "सोमेश्वर तृतीय", correct: true },
            { text: "तैलप तृतीय", correct: false },
            { text: "जगदेकमल्ल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्रमादित्य षष्ठ की मृत्यु के बाद उनका पुत्र सोमेश्वर तृतीय सिंहासन पर बैठा।"
    },
    {
        question: "एहोल अभिलेख में पुलकेशिन द्वितीय की किस नदी पर विजय का उल्लेख है?",
        answers: shuffle([
            { text: "कावेरी", correct: false },
            { text: "कृष्णा", correct: false },
            { text: "नर्मदा", correct: true },
            { text: "गोदावरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एहोल अभिलेख में यह स्पष्ट रूप से वर्णित है कि पुलकेशिन द्वितीय ने नर्मदा नदी के तट पर उत्तर भारत के शक्तिशाली शासक हर्षवर्धन को पराजित किया था।"
    },
    {
        question: "बादामी के चालुक्यों का वह कौन-सा शासक था, जिसने 'सत्याश्रय' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "पुलकेशिन प्रथम", correct: false },
            { text: "पुलकेशिन द्वितीय", correct: true },
            { text: "कीर्तिवर्मन द्वितीय", correct: false },
            { text: "विजयादित्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुलकेशिन द्वितीय को उसके एहोल अभिलेख में 'सत्याश्रय' के रूप में भी संदर्भित किया गया है, जिसका अर्थ है 'सत्य का आश्रय'।"
    },
    {
        question: "किस चालुक्य शासक को 'दक्षिण का नेपोलियन' कहा जाता है?",
        answers: shuffle([
            { text: "विक्रमादित्य प्रथम", correct: false },
            { text: "पुलकेशिन द्वितीय", correct: true },
            { text: "सोमेश्वर प्रथम", correct: false },
            { text: "तैलप द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुलकेशिन द्वितीय को उसकी व्यापक विजयों और साम्राज्य विस्तार के कारण 'दक्षिण का नेपोलियन' कहा जाता है।"
    },
    {
        question: "चालुक्यों का अंतिम शासक कौन था, जिसे राष्ट्रकूटों ने पराजित किया?",
        answers: shuffle([
            { text: "विक्रमादित्य द्वितीय", correct: false },
            { text: "कीर्तिवर्मन द्वितीय", correct: true },
            { text: "सोमेश्वर चतुर्थ", correct: false },
            { text: "तैलप द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बादामी के चालुक्य वंश का अंतिम शासक कीर्तिवर्मन द्वितीय था, जिसे दंतिदुर्ग ने पराजित किया।"
    },
    {
        question: "कल्याणी के चालुक्यों और चोलों के बीच सबसे प्रसिद्ध युद्ध कौन-सा था, जिसमें चोल राजा राजाधिराज की मृत्यु हो गई थी?",
        answers: shuffle([
            { text: "कोप्पम का युद्ध", correct: true },
            { text: "तक्कोलम का युद्ध", correct: false },
            { text: "मान्मंगई का युद्ध", correct: false },
            { text: "कोप्पल का युद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1054 ईस्वी में हुए कोप्पम के युद्ध में चोल शासक राजाधिराज की मृत्यु हो गई थी, लेकिन उनके भाई राजेंद्र द्वितीय ने युद्ध जीत लिया था।"
    },
    {
        question: "चालुक्यों की वास्तुकला की कौन-सी विशेषता प्रमुख है?",
        answers: shuffle([
            { text: "ऊँचे गोपुरम", correct: false },
            { text: "रथ मंदिर", correct: false },
            { text: "वेसर शैली के मंदिर", correct: true },
            { text: "चट्टान काटकर बनाई गई गुफाएँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चालुक्य वास्तुकला की सबसे विशिष्ट विशेषता वेसर शैली है, जिसमें नागर और द्रविड़ शैलियों का मिश्रण है, और यह चालुक्यों के मंदिरों में प्रमुखता से दिखाई देती है।"
    },
    {
        question: "किस चालुक्य शासक ने 'पल्लवों का विजेता' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "पुलकेशिन द्वितीय", correct: false },
            { text: "विक्रमादित्य प्रथम", correct: false },
            { text: "विक्रमादित्य द्वितीय", correct: true },
            { text: "विजयादित्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्रमादित्य द्वितीय ने कांची पर अपनी विजय के बाद 'पल्लवों का विजेता' की उपाधि धारण की थी।"
    },
    {
        question: "'मिताक्षरा' नामक हिंदू कानून ग्रंथ के लेखक विज्ञानेश्वर किस शासक के दरबारी थे?",
        answers: shuffle([
            { text: "तैलप द्वितीय", correct: false },
            { text: "सोमेश्वर द्वितीय", correct: false },
            { text: "विक्रमादित्य षष्ठ", correct: true },
            { text: "सोमेश्वर तृतीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विज्ञानेश्वर, जो 'मिताक्षरा' के लेखक थे, कल्याणी के चालुक्य शासक विक्रमादित्य षष्ठ के दरबार में एक प्रमुख विद्वान थे।"
    },
    {
        question: "चालुक्यों के शासनकाल में 'उर' क्या था?",
        answers: shuffle([
            { text: "प्रांत की राजधानी", correct: false },
            { text: "गाँव की सभा", correct: true },
            { text: "एक प्रकार का कर", correct: false },
            { text: "सैन्य इकाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उर' चालुक्य प्रशासन में गाँव के स्थानीय प्रशासन का प्रबंधन करने वाली एक सभा थी।"
    },
    {
        question: "किस चालुक्य शासक ने बिल्हण और विज्ञानेश्वर जैसे विद्वानों को संरक्षण दिया था?",
        answers: shuffle([
            { text: "सोमेश्वर प्रथम", correct: false },
            { text: "सोमेश्वर द्वितीय", correct: false },
            { text: "विक्रमादित्य षष्ठ", correct: true },
            { text: "तैलप द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्रमादित्य षष्ठ के दरबार में बिल्हण (जिन्होंने 'विक्रमांक देवचरित्र' लिखा) और विज्ञानेश्वर (जिन्होंने 'मिताक्षरा' लिखा) जैसे विद्वान थे, जिससे उनके शासनकाल को साहित्यिक स्वर्ण युग माना जाता है।"
    },
    {
        question: "बादामी के चालुक्यों का वह कौन-सा शासक था, जिसने 'महाराजाधिराज' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "जयसिंह", correct: false },
            { text: "पुलकेशिन प्रथम", correct: true },
            { text: "कीर्तिवर्मन प्रथम", correct: false },
            { text: "विक्रमादित्य प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चालुक्य वंश के संस्थापक पुलकेशिन प्रथम ने वातापी को अपनी राजधानी बनाने के बाद 'महाराजाधिराज' की उपाधि धारण की थी।"
    },
    {
        question: "चालुक्यों के शासनकाल में 'महासंधिविग्रहिक' कौन होता था?",
        answers: shuffle([
            { text: "सेना का प्रमुख", correct: false },
            { text: "विदेश मंत्री", correct: true },
            { text: "राजस्व अधिकारी", correct: false },
            { text: "न्यायाधीश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महासंधिविग्रहिक' राज्य का विदेश मंत्री होता था, जो शांति और युद्ध से संबंधित संधियों और नीतियों का प्रबंधन करता था।"
    },
    {
        question: "पट्टदकल में स्थित मंदिरों में से कौन-सा मंदिर पल्लव राजा नरसिंहवर्मन प्रथम द्वारा निर्मित महाबलीपुरम के रथ मंदिरों से प्रेरित है?",
        answers: shuffle([
            { text: "विरूपाक्ष मंदिर", correct: true },
            { text: "पापनाथ मंदिर", correct: false },
            { text: "काशी विश्वनाथ मंदिर", correct: false },
            { text: "संगमेश्वर मंदिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विरूपाक्ष मंदिर की वास्तुकला में महाबलीपुरम के रथ मंदिरों की वास्तुकला से समानता दिखाई देती है, जो दोनों राजवंशों के बीच सांस्कृतिक आदान-प्रदान का प्रमाण है।"
    },
    {
        question: "बादामी के गुफा मंदिरों में सबसे प्रसिद्ध गुफा किस धर्म से संबंधित है?",
        answers: shuffle([
            { text: "गुफा संख्या 1 (शैव)", correct: false },
            { text: "गुफा संख्या 2 (वैष्णव)", correct: false },
            { text: "गुफा संख्या 3 (वैष्णव)", correct: true },
            { text: "गुफा संख्या 4 (जैन)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बादामी की गुफा संख्या 3 सबसे बड़ी और सबसे प्रसिद्ध है, जिसमें विष्णु के विभिन्न अवतारों को दर्शाया गया है।"
    },
    {
        question: "चालुक्यों का अंतिम महान शासक कौन था?",
        answers: shuffle([
            { text: "कीर्तिवर्मन द्वितीय", correct: true },
            { text: "पुलकेशिन द्वितीय", correct: false },
            { text: "विक्रमादित्य षष्ठ", correct: false },
            { text: "सोमेश्वर चतुर्थ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बादामी के चालुक्य वंश का अंतिम महान शासक कीर्तिवर्मन द्वितीय था, जिसे दंतिदुर्ग ने हराया।<br><br><i class='fa-solid fa-angles-right icon'></i> कल्याणी के चालुक्य वंश का अंतिम महान शासक विक्रमादित्य षष्ठ था।"
    },
    {
        question: "चालुक्यों के शासनकाल में 'उपरिक' कौन होता था?",
        answers: shuffle([
            { text: "सेना का प्रमुख", correct: false },
            { text: "प्रांत का प्रशासक", correct: true },
            { text: "राजस्व अधिकारी", correct: false },
            { text: "न्यायाधीश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उपरिक' चालुक्य प्रशासन में प्रांतों (राष्ट्र) का प्रमुख होता था, जो स्थानीय शासन का प्रबंधन करता था।"
    },
    {
        question: "'पूर्वी चालुक्य' वंश का अंत किस राजवंश द्वारा किया गया था?",
        answers: shuffle([
            { text: "राष्ट्रकूट", correct: false },
            { text: "चोल", correct: true },
            { text: "यादव", correct: false },
            { text: "होयसल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पूर्वी चालुक्य वंश का विलय चोल साम्राज्य में हो गया था, जब पूर्वी चालुक्य राजकुमार कुलोत्तुंग चोल प्रथम (राजेंद्र चोल का पुत्र) चोल सिंहासन पर बैठा।"
    },
    {
        question: "चालुक्यों की वास्तुकला में मंदिरों का निर्माण कहाँ नहीं हुआ है?",
        answers: shuffle([
            { text: "बादामी", correct: false },
            { text: "एहोल", correct: false },
            { text: "पट्टदकल", correct: false },
            { text: "कोणार्क", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोणार्क का सूर्य मंदिर गंग वंश के शासक नरसिंहदेव प्रथम द्वारा ओडिशा में बनवाया गया था, जबकि अन्य सभी स्थान चालुक्य वास्तुकला के प्रमुख केंद्र हैं।"
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