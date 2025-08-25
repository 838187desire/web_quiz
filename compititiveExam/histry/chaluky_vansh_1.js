const questions = [
    {
        topHeading: "चालुक्य वंश पर आधारित बहुविकल्पी प्रश्न part 1 (quiz_no.97)"
    },
    {
        question: "चालुक्य वंश की स्थापना किसने की थी?",
        answers: shuffle([
            { text: "पुलकेशिन प्रथम", correct: true },
            { text: "कीर्तिवर्मन प्रथम", correct: false },
            { text: "पुलकेशिन द्वितीय", correct: false },
            { text: "विक्रमादित्य प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चालुक्य वंश की स्थापना पुलकेशिन प्रथम ने 543 ईस्वी में की थी, और उसने अपनी राजधानी बादामी (वातापी) को बनाया था।"
    },
    {
        question: "बादामी (वातापी) के चालुक्य वंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "जयसिंह", correct: false },
            { text: "पुलकेशिन प्रथम", correct: true },
            { text: "कीर्तिवर्मन द्वितीय", correct: false },
            { text: "विक्रमादित्य द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बादामी के चालुक्य वंश का वास्तविक संस्थापक पुलकेशिन प्रथम था, जिसने वातापी को अपनी राजधानी बनाकर एक स्वतंत्र राज्य की स्थापना की।"
    },
    {
        question: "किस चालुक्य शासक ने हर्षवर्धन को नर्मदा नदी के तट पर पराजित किया था?",
        answers: shuffle([
            { text: "पुलकेशिन प्रथम", correct: false },
            { text: "कीर्तिवर्मन प्रथम", correct: false },
            { text: "पुलकेशिन द्वितीय", correct: true },
            { text: "विक्रमादित्य द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुलकेशिन द्वितीय ने 618-619 ईस्वी के दौरान हर्षवर्धन को नर्मदा नदी के तट पर हराया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इस जीत का उल्लेख एहोल अभिलेख में मिलता है।"
    },
    {
        question: "एहोल अभिलेख किस चालुक्य शासक से संबंधित है?",
        answers: shuffle([
            { text: "कीर्तिवर्मन प्रथम", correct: false },
            { text: "पुलकेशिन प्रथम", correct: false },
            { text: "पुलकेशिन द्वितीय", correct: true },
            { text: "विक्रमादित्य प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एहोल अभिलेख को पुलकेशिन द्वितीय के दरबारी कवि रविकीर्ति ने लिखा था, जिसमें उसकी सैन्य सफलताओं का वर्णन है।"
    },
    {
        question: "बादामी के चालुक्यों की राजधानी क्या थी?",
        answers: shuffle([
            { text: "एहोल", correct: false },
            { text: "बादामी (वातापी)", correct: true },
            { text: "पट्टदकल", correct: false },
            { text: "वेंगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुलकेशिन प्रथम ने वातापी को अपनी राजधानी बनाया, और यह बादामी के चालुक्यों का प्रमुख केंद्र था।"
    },
    {
        question: "किस चालुक्य शासक ने 'परमेश्वर' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "पुलकेशिन प्रथम", correct: false },
            { text: "कीर्तिवर्मन प्रथम", correct: false },
            { text: "पुलकेशिन द्वितीय", correct: true },
            { text: "विक्रमादित्य द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन को हराने के बाद पुलकेशिन द्वितीय ने 'परमेश्वर' और 'दक्षिणापथेश्वर' जैसी उपाधियाँ धारण की थीं।"
    },
    {
        question: "बादामी के चालुक्यों के शासनकाल में किस विदेशी यात्री ने दरबार का दौरा किया था?",
        answers: shuffle([
            { text: "फाह्यान", correct: false },
            { text: "ह्वेनसांग", correct: true },
            { text: "इब्नबतूता", correct: false },
            { text: "मेगस्थनीज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रसिद्ध चीनी यात्री ह्वेनसांग ने पुलकेशिन द्वितीय के शासनकाल में बादामी का दौरा किया था और उसने चालुक्य साम्राज्य की समृद्धि का वर्णन किया है।"
    },
    {
        question: "किस पल्लव शासक ने चालुक्य शासक पुलकेशिन द्वितीय को पराजित किया था?",
        answers: shuffle([
            { text: "महेंद्रवर्मन प्रथम", correct: false },
            { text: "नरसिंहवर्मन प्रथम", correct: true },
            { text: "नरसिंहवर्मन द्वितीय", correct: false },
            { text: "नंदीवर्मन द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नरसिंहवर्मन प्रथम ने 642 ईस्वी में पुलकेशिन द्वितीय को हराया और बादामी पर कब्जा कर लिया, जिससे चालुक्य साम्राज्य कुछ समय के लिए कमजोर हो गया।"
    },
    {
        question: "किस चालुक्य शासक ने 'विक्रमांक देवचरित्र' नामक ग्रंथ में अपनी उपलब्धियों का वर्णन करवाया था?",
        answers: shuffle([
            { text: "विक्रमादित्य प्रथम", correct: false },
            { text: "विक्रमादित्य द्वितीय", correct: false },
            { text: "विक्रमादित्य षष्ठ", correct: true },
            { text: "सोमेश्वर द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कल्याणी के चालुक्य शासक विक्रमादित्य षष्ठ की जीवनी, 'विक्रमांक देवचरित्र', उनके दरबारी कवि बिल्हण ने लिखी थी।"
    },
    {
        question: "बादामी के चालुक्यों का अंतिम शासक कौन था?",
        answers: shuffle([
            { text: "विक्रमादित्य द्वितीय", correct: false },
            { text: "कीर्तिवर्मन द्वितीय", correct: true },
            { text: "सोमेश्वर प्रथम", correct: false },
            { text: "तैलप द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कीर्तिवर्मन द्वितीय बादामी के चालुक्य वंश का अंतिम शासक था, जिसे राष्ट्रकूट शासक दंतिदुर्ग ने पराजित किया।"
    },
    {
        question: "एहोल, बादामी और पट्टदकल के मंदिर किस राजवंश की वास्तुकला को दर्शाते हैं?",
        answers: shuffle([
            { text: "पल्लव", correct: false },
            { text: "राष्ट्रकूट", correct: false },
            { text: "चालुक्य", correct: true },
            { text: "चोल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एहोल, बादामी और पट्टदकल चालुक्य वास्तुकला के प्रमुख केंद्र थे, जहाँ कई भव्य मंदिरों का निर्माण हुआ।"
    },
    {
        question: "किस चालुक्य शासक को 'पल्लवों का विजेता' कहा जाता है?",
        answers: shuffle([
            { text: "पुलकेशिन प्रथम", correct: false },
            { text: "विक्रमादित्य प्रथम", correct: false },
            { text: "विक्रमादित्य द्वितीय", correct: true },
            { text: "कीर्तिवर्मन द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्रमादित्य द्वितीय ने पल्लव शासक नंदीवर्मन द्वितीय को कई बार पराजित किया और कांचीपुरम पर कब्जा किया, इसलिए उसे 'पल्लवों का विजेता' कहा जाता है।"
    },
    {
        question: "'कल्याणी' के चालुक्य वंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "सोमेश्वर प्रथम", correct: false },
            { text: "तैलप द्वितीय", correct: true },
            { text: "सोमेश्वर द्वितीय", correct: false },
            { text: "विक्रमादित्य षष्ठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तैलप द्वितीय ने 973 ईस्वी में राष्ट्रकूट शासक कर्क द्वितीय को हराकर 'कल्याणी' के चालुक्य वंश की स्थापना की थी।"
    },
    {
        question: "कल्याणी के चालुक्यों की राजधानी क्या थी?",
        answers: shuffle([
            { text: "बादामी", correct: false },
            { text: "एहोल", correct: false },
            { text: "कल्याणी", correct: true },
            { text: "वेंगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कल्याणी के चालुक्यों ने कल्याणी (आधुनिक बीदर) को अपनी राजधानी बनाया, और यह उनके साम्राज्य का केंद्र था।"
    },
    {
        question: "किस चालुक्य शासक ने 'चालुक्य-विक्रम संवत' नामक एक नया कैलेंडर शुरू किया था?",
        answers: shuffle([
            { text: "सोमेश्वर द्वितीय", correct: false },
            { text: "विक्रमादित्य षष्ठ", correct: true },
            { text: "जयसिंह तृतीय", correct: false },
            { text: "तैलप तृतीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्रमादित्य षष्ठ ने 1076 ईस्वी में राज्यारोहण के अवसर पर 'चालुक्य-विक्रम संवत' शुरू किया था।"
    },
    {
        question: "'वेगी' के चालुक्य वंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "पुलकेशिन प्रथम", correct: false },
            { text: "कुब्ज विष्णुवर्धन", correct: true },
            { text: "तैलप द्वितीय", correct: false },
            { text: "विक्रमादित्य द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुब्ज विष्णुवर्धन बादामी के चालुक्य शासक पुलकेशिन द्वितीय का भाई था, जिसने पूर्वी चालुक्य वंश (वेंगी के चालुक्य) की स्थापना की।"
    },
    {
        question: "एहोल के प्रसिद्ध जैन मंदिर (मेगुती मंदिर) का निर्माण किस शासक के शासनकाल में हुआ था?",
        answers: shuffle([
            { text: "पुलकेशिन प्रथम", correct: false },
            { text: "पुलकेशिन द्वितीय", correct: true },
            { text: "कीर्तिवर्मन द्वितीय", correct: false },
            { text: "विक्रमादित्य प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एहोल का मेगुती जैन मंदिर पुलकेशिन द्वितीय के शासनकाल में बनवाया गया था, और यह एहोल अभिलेख का भी स्थान है।"
    },
    {
        question: "चालुक्य वास्तुकला की किस शैली को 'वेसर शैली' के रूप में जाना जाता है?",
        answers: shuffle([
            { text: "द्रविड़ शैली", correct: false },
            { text: "नागर शैली", correct: false },
            { text: "मिश्रित शैली", correct: true },
            { text: "गांधार शैली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चालुक्य वास्तुकला नागर और द्रविड़ शैलियों का मिश्रण थी, जिसे 'वेसर शैली' कहा जाता है।"
    },
    {
        question: "किस चालुक्य शासक ने पट्टदकल में प्रसिद्ध विरूपाक्ष मंदिर का निर्माण करवाया था?",
        answers: shuffle([
            { text: "विक्रमादित्य प्रथम", correct: false },
            { text: "विक्रमादित्य द्वितीय", correct: true },
            { text: "पुलकेशिन द्वितीय", correct: false },
            { text: "तैलप द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्रमादित्य द्वितीय ने पल्लवों पर अपनी विजय के बाद अपनी रानी लोकमहादेवी के अनुरोध पर पट्टदकल में विरूपाक्ष मंदिर का निर्माण करवाया था।"
    },
    {
        question: "'विक्रमांक देव चरित्र' के लेखक बिल्हण किस चालुक्य शासक के दरबारी कवि थे?",
        answers: shuffle([
            { text: "तैलप द्वितीय", correct: false },
            { text: "सोमेश्वर प्रथम", correct: false },
            { text: "विक्रमादित्य षष्ठ", correct: true },
            { text: "जयसिंह तृतीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिल्हण ने अपने आश्रयदाता विक्रमादित्य षष्ठ की जीवनी 'विक्रमांक देव चरित्र' में उनके जीवन और उपलब्धियों का वर्णन किया है।"
    },
    {
        question: "'विज्ञानेश्वर' नामक प्रसिद्ध विधि-विद्वान किस चालुक्य शासक के दरबार में थे?",
        answers: shuffle([
            { text: "सोमेश्वर प्रथम", correct: false },
            { text: "विक्रमादित्य षष्ठ", correct: true },
            { text: "तैलप द्वितीय", correct: false },
            { text: "कीर्तिवर्मन द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विज्ञानेश्वर ने प्रसिद्ध ग्रंथ 'मिताक्षरा' की रचना की थी और वे विक्रमादित्य षष्ठ के दरबार में रहते थे।"
    },
    {
        question: "किस चालुक्य शासक ने पल्लव शासक नरसिंहवर्मन प्रथम से बादामी को वापस ले लिया था?",
        answers: shuffle([
            { text: "पुलकेशिन द्वितीय", correct: false },
            { text: "विक्रमादित्य प्रथम", correct: true },
            { text: "कीर्तिवर्मन प्रथम", correct: false },
            { text: "विनयदित्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्रमादित्य प्रथम ने अपने पिता पुलकेशिन द्वितीय की हार का बदला लेने के लिए बादामी को पल्लवों से वापस जीत लिया था।"
    },
    {
        question: "'पूर्वी चालुक्य' की राजधानी क्या थी?",
        answers: shuffle([
            { text: "बादामी", correct: false },
            { text: "कल्याणी", correct: false },
            { text: "वेंगी", correct: true },
            { text: "कांची", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पूर्वी चालुक्य, जिनकी स्थापना कुब्ज विष्णुवर्धन ने की थी, की राजधानी वेंगी (आंध्र प्रदेश) थी।"
    },
    {
        question: "बादामी में स्थित गुफा मंदिरों में कौन-से धर्मों से संबंधित चित्र और मूर्तियाँ मिलती हैं?",
        answers: shuffle([
            { text: "बौद्ध, जैन और शैव", correct: false },
            { text: "शैव, वैष्णव और जैन", correct: true },
            { text: "वैष्णव, बौद्ध और शैव", correct: false },
            { text: "केवल शैव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बादामी की गुफाओं में हिंदू (शैव और वैष्णव) और जैन धर्म से संबंधित मूर्तियाँ और चित्र मिलते हैं, जो चालुक्यों की धार्मिक सहिष्णुता को दर्शाते हैं।"
    },
    {
        question: "किस चालुक्य शासक ने 'वातापीकोंडा' (वातापी का विजेता) की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "पुलकेशिन द्वितीय", correct: false },
            { text: "नरसिंहवर्मन प्रथम", correct: true },
            { text: "कीर्तिवर्मन द्वितीय", correct: false },
            { text: "विक्रमादित्य द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक महत्वपूर्ण ऐतिहासिक तथ्य है कि पल्लव शासक नरसिंहवर्मन प्रथम ने पुलकेशिन द्वितीय को हराकर बादामी (वातापी) पर कब्जा किया और 'वातापीकोंडा' की उपाधि धारण की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अक्सर चालुक्य और पल्लवों के संघर्ष को दर्शाता है।"
    },
    {
        question: "बादामी के चालुक्यों का वह कौन-सा शासक था, जिसने 'चालुक्य साम्राज्य' को एकजुट किया और अपने पिता पुलकेशिन द्वितीय की हार का बदला लिया?",
        answers: shuffle([
            { text: "विक्रमादित्य प्रथम", correct: true },
            { text: "विक्रमादित्य द्वितीय", correct: false },
            { text: "विनयदित्य", correct: false },
            { text: "विजयादित्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुलकेशिन द्वितीय की मृत्यु के बाद चालुक्य साम्राज्य में अव्यवस्था फैल गई थी।<br><br><i class='fa-solid fa-angles-right icon'></i> विक्रमादित्य प्रथम ने पल्लवों से बादामी को वापस लेकर साम्राज्य को पुनः संगठित किया।"
    },
    {
        question: "किस चालुक्य शासक ने कांचीपुरम को कई बार लूटा और अपने अधिकार में लिया?",
        answers: shuffle([
            { text: "विक्रमादित्य प्रथम", correct: false },
            { text: "विक्रमादित्य द्वितीय", correct: true },
            { text: "कीर्तिवर्मन द्वितीय", correct: false },
            { text: "तैलप द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्रमादित्य द्वितीय ने पल्लव शासकों को पराजित कर कांचीपुरम को तीन बार लूटा था, जिससे चालुक्यों की शक्ति का प्रदर्शन हुआ।"
    },
    {
        question: "'मिताक्षरा' नामक प्रसिद्ध ग्रंथ, जो हिंदू कानून पर आधारित है, के लेखक कौन थे?",
        answers: shuffle([
            { text: "बिल्हण", correct: false },
            { text: "विज्ञानेश्वर", correct: true },
            { text: "रविकीर्ति", correct: false },
            { text: "पम्प", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विज्ञानेश्वर, जो कल्याणी के चालुक्य शासक विक्रमादित्य षष्ठ के दरबारी विद्वान थे, ने 'मिताक्षरा' नामक ग्रंथ की रचना की, जो हिंदू उत्तराधिकार के नियमों का एक महत्वपूर्ण स्रोत है।"
    },
    {
        question: "चालुक्यों की वास्तुकला की किस शैली में मंदिरों की छतें और शिखर नागर और द्रविड़ दोनों शैलियों के तत्वों को मिलाकर बनाए गए हैं?",
        answers: shuffle([
            { text: "नागर शैली", correct: false },
            { text: "द्रविड़ शैली", correct: false },
            { text: "वेसर शैली", correct: true },
            { text: "गांधार शैली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चालुक्य वास्तुकला को 'वेसर शैली' या 'मिश्रित शैली' कहा जाता है, जिसमें उत्तरी भारत की नागर शैली और दक्षिण भारत की द्रविड़ शैली का सुंदर मिश्रण देखने को मिलता है।"
    },
    {
        question: "पट्टदकल में स्थित जैन मंदिर का निर्माण किस शासक ने करवाया था?",
        answers: shuffle([
            { text: "विनयदित्य", correct: true },
            { text: "विजयादित्य", correct: false },
            { text: "विक्रमादित्य प्रथम", correct: false },
            { text: "विक्रमादित्य द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विनयदित्य ने पट्टदकल में जैन मंदिर का निर्माण करवाया था, जो चालुक्यों की धार्मिक सहिष्णुता को दर्शाता है।"
    },
    {
        question: "चालुक्यों के शासनकाल में 'महानदंडाधिपति' कौन होता था?",
        answers: shuffle([
            { text: "राजस्व अधिकारी", correct: false },
            { text: "सेना का सर्वोच्च अधिकारी", correct: true },
            { text: "न्यायाधीश", correct: false },
            { text: "प्रांत का प्रशासक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महानदंडाधिपति' चालुक्य प्रशासन में सेना का सर्वोच्च कमांडर या प्रमुख होता था।"
    },
    {
        question: "बादामी के चालुक्यों के समय में कौन-सा बंदरगाह व्यापार का एक महत्वपूर्ण केंद्र था?",
        answers: shuffle([
            { text: "महाबलीपुरम", correct: false },
            { text: "सोपारा", correct: true },
            { text: "कावेरीपट्टनम", correct: false },
            { text: "विशाखापत्तनम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोपारा पश्चिमी तट पर स्थित एक प्रमुख बंदरगाह था, जिसका उपयोग चालुक्यों द्वारा रोमन साम्राज्य और अन्य पश्चिमी देशों के साथ व्यापार के लिए किया जाता था।"
    },
    {
        question: "'विक्रमांक देव चरित्र' नामक ग्रंथ में किस चालुक्य शासक का विस्तृत वर्णन है?",
        answers: shuffle([
            { text: "विक्रमादित्य प्रथम", correct: false },
            { text: "विक्रमादित्य द्वितीय", correct: false },
            { text: "विक्रमादित्य षष्ठ", correct: true },
            { text: "सोमेश्वर द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह ग्रंथ कल्याणी के चालुक्य शासक विक्रमादित्य षष्ठ की जीवनी है, जिसे उनके दरबारी कवि बिल्हण ने लिखा था।"
    },
    {
        question: "किस राष्ट्रकूट शासक ने बादामी के चालुक्यों का अंत किया था?",
        answers: shuffle([
            { text: "दंतिदुर्ग", correct: true },
            { text: "कृष्ण प्रथम", correct: false },
            { text: "गोविंद तृतीय", correct: false },
            { text: "अमोघवर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रकूट शासक दंतिदुर्ग ने 753 ईस्वी में बादामी के अंतिम चालुक्य शासक कीर्तिवर्मन द्वितीय को हराकर चालुक्य साम्राज्य का अंत किया।"
    },
    {
        question: "चालुक्यों की प्रशासनिक इकाई को आरोही क्रम में कैसे व्यवस्थित किया जाता था?",
        answers: shuffle([
            { text: "ग्राम -> विषय -> राष्ट्र", correct: true },
            { text: "विषय -> राष्ट्र -> ग्राम", correct: false },
            { text: "राष्ट्र -> विषय -> ग्राम", correct: false },
            { text: "राष्ट्र -> ग्राम -> विषय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चालुक्य प्रशासन में सबसे छोटी इकाई ग्राम (गाँव) थी, उसके ऊपर विषय (जिला) और सबसे ऊपर राष्ट्र (प्रांत) होता था।"
    },
    {
        question: "'चालुक्य-चोल संघर्ष' का मुख्य कारण क्या था?",
        answers: shuffle([
            { text: "आर्थिक मतभेद", correct: false },
            { text: "धार्मिक संघर्ष", correct: false },
            { text: "वेंगी राज्य पर नियंत्रण", correct: true },
            { text: "कन्नौज पर नियंत्रण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेंगी राज्य भौगोलिक रूप से महत्वपूर्ण था, और इस पर नियंत्रण के लिए चालुक्यों (कल्याणी के) और चोलों के बीच लंबे समय तक संघर्ष चला।"
    },
    {
        question: "बादामी के चालुक्यों के शासनकाल में बने मंदिरों में से कौन-सा सबसे पुराना माना जाता है?",
        answers: shuffle([
            { text: "पट्टदकल का विरूपाक्ष मंदिर", correct: false },
            { text: "एहोल का लाडखान मंदिर", correct: true },
            { text: "बादामी का गुफा मंदिर-1", correct: false },
            { text: "एहोल का मेगुती जैन मंदिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एहोल का लाडखान मंदिर सबसे पुराने चालुक्य मंदिरों में से एक माना जाता है, जो एक अनूठी शैली में बना है।"
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
        question: "किस चालुक्य शासक के शासनकाल में 'वातापी' शहर की स्थापना हुई थी?",
        answers: shuffle([
            { text: "जयसिंह", correct: false },
            { text: "पुलकेशिन प्रथम", correct: true },
            { text: "पुलकेशिन द्वितीय", correct: false },
            { text: "कीर्तिवर्मन द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चालुक्य वंश के संस्थापक पुलकेशिन प्रथम ने वातापी (आधुनिक बादामी) शहर की स्थापना की और उसे अपनी राजधानी बनाया।"
    },
    {
        question: "बादामी के चालुक्यों की वास्तुकला में 'पट्टदकल' में स्थित मंदिरों को किस UNESCO विश्व धरोहर स्थल के रूप में मान्यता मिली है?",
        answers: shuffle([
            { text: "एलोरा", correct: false },
            { text: "हंपी", correct: false },
            { text: "पट्टदकल", correct: true },
            { text: "महाबलीपुरम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पट्टदकल में चालुक्यों के कई मंदिर हैं, जो द्रविड़ और नागर शैली का मिश्रण दर्शाते हैं, और इसे 1987 में UNESCO विश्व धरोहर स्थल घोषित किया गया था।"
    },
    {
        question: "'विक्रमादित्य षष्ठ' को अपने भाई सोमेश्वर द्वितीय से सिंहासन कैसे प्राप्त हुआ?",
        answers: shuffle([
            { text: "युद्ध में पराजित करके", correct: true },
            { text: "सोमेश्वर द्वितीय की मृत्यु के बाद", correct: false },
            { text: "सोमेश्वर द्वितीय द्वारा स्वेच्छा से सिंहासन त्यागने पर", correct: false },
            { text: "सामंतों के सहयोग से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्रमादित्य षष्ठ ने अपने भाई सोमेश्वर द्वितीय को युद्ध में हरा कर कल्याणी के सिंहासन पर कब्जा किया था।"
    },
    {
        question: "पूर्वी चालुक्यों की राजधानी वेंगी वर्तमान में भारत के किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "कर्नाटक", correct: false },
            { text: "तमिलनाडु", correct: false },
            { text: "आंध्र प्रदेश", correct: true },
            { text: "तेलंगाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेंगी, जो पूर्वी चालुक्यों की राजधानी थी, वर्तमान में आंध्र प्रदेश के एलुरू के पास स्थित है।"
    },
    {
        question: "किस चालुक्य शासक ने 'दक्षिण का नेपोलियन' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "पुलकेशिन प्रथम", correct: false },
            { text: "पुलकेशिन द्वितीय", correct: true },
            { text: "विक्रमादित्य प्रथम", correct: false },
            { text: "सोमेश्वर प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुलकेशिन द्वितीय की व्यापक सैन्य सफलताओं के कारण इतिहासकारों ने उसे 'दक्षिण का नेपोलियन' कहा है।"
    },
    {
        question: "चालुक्य मंदिरों में आमतौर पर किस प्रकार की सामग्री का उपयोग किया गया था?",
        answers: shuffle([
            { text: "ईंट", correct: false },
            { text: "संगमरमर", correct: false },
            { text: "बलुआ पत्थर", correct: true },
            { text: "ग्रेनाइट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बादामी और एहोल के चालुक्य मंदिरों के निर्माण में मुख्य रूप से लाल बलुआ पत्थर का उपयोग किया गया था।"
    },
    {
        question: "चालुक्यों के शासनकाल में 'महाबलाधिकृत' कौन होता था?",
        answers: shuffle([
            { text: "सेना का मुख्य कमांडर", correct: true },
            { text: "राजस्व अधिकारी", correct: false },
            { text: "प्रधानमंत्री", correct: false },
            { text: "न्यायाधीश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महाबलाधिकृत' सेना का मुख्य कमांडर था, जो 'महादंडानायक' से उच्च पद पर होता था।"
    },
    {
        question: "किस चालुक्य शासक के शासनकाल में राजराजा चोल ने पूर्वी चालुक्यों पर आक्रमण किया था?",
        answers: shuffle([
            { text: "पुलकेशिन द्वितीय", correct: false },
            { text: "विक्रमादित्य षष्ठ", correct: false },
            { text: "सोमेश्वर प्रथम", correct: false },
            { text: "शक्तिवर्मन प्रथम", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोल शासक राजराजा प्रथम ने पूर्वी चालुक्य शासक शक्तिवर्मन प्रथम के शासनकाल के दौरान वेंगी पर हमला किया था।"
    },
    {
        question: "चालुक्य शासक पुलकेशिन द्वितीय ने किस ईरानी शासक के पास अपना दूत भेजा था?",
        answers: shuffle([
            { text: "खुसरो प्रथम", correct: false },
            { text: "खुसरो द्वितीय", correct: true },
            { text: "अलेक्जेंडर", correct: false },
            { text: "दारा प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुलकेशिन द्वितीय ने फारस के शासक खुसरो द्वितीय के पास एक दूत भेजा था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका चित्रण अजंता गुफाओं में भी मिलता है।"
    },
    {
        question: "'पट्टदकल' में स्थित पापनाथ मंदिर का निर्माण किस शैली में किया गया है?",
        answers: shuffle([
            { text: "द्रविड़ शैली", correct: false },
            { text: "नागर शैली", correct: true },
            { text: "वेसर शैली", correct: false },
            { text: "होयसल शैली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पट्टदकल में विरूपाक्ष मंदिर द्रविड़ शैली में है, जबकि पापनाथ मंदिर नागर शैली में बना है, जो चालुक्य वास्तुकला की विविधता को दर्शाता है।"
    },
    {
        question: "'दंतिदुर्ग' ने किस चालुक्य शासक को हराकर राष्ट्रकूट साम्राज्य की नींव रखी थी?",
        answers: shuffle([
            { text: "पुलकेशिन द्वितीय", correct: false },
            { text: "विक्रमादित्य द्वितीय", correct: false },
            { text: "कीर्तिवर्मन द्वितीय", correct: true },
            { text: "तैलप द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रकूट शासक दंतिदुर्ग ने बादामी के अंतिम चालुक्य शासक कीर्तिवर्मन द्वितीय को पराजित कर चालुक्य शासन का अंत किया।"
    },
    {
        question: "कल्याणी के चालुक्यों का अंतिम शासक कौन था?",
        answers: shuffle([
            { text: "तैलप द्वितीय", correct: false },
            { text: "सोमेश्वर चतुर्थ", correct: true },
            { text: "विक्रमादित्य षष्ठ", correct: false },
            { text: "सोमेश्वर तृतीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोमेश्वर चतुर्थ कल्याणी के चालुक्य वंश का अंतिम शासक था, जिसे यादव और होयसल शासकों ने पराजित किया।"
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