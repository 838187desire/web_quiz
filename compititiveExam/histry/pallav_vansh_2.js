const questions = [
    {
        topHeading: "पल्लव वंश पर आधारित बहुविकल्पी प्रश्न part 2 (quiz_no.94)"
    },
    {
        question: "पल्लव शासक 'नरसिंहवर्मन II' के समय में किस प्रसिद्ध लेखक ने 'काव्यादर्श' नामक ग्रंथ की रचना की थी?",
        answers: shuffle([
            { text: "रविकीर्ति", correct: false },
            { text: "दंडी", correct: true },
            { text: "भारवि", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दंडी, जो 'दशकुमारचरित' के लेखक भी थे, नरसिंहवर्मन II के दरबार में एक महान विद्वान थे और उन्होंने 'काव्यादर्श' की रचना की थी।"
    },
    {
        question: "किस पल्लव शासक ने 'महेंद्र शैली' के स्थान पर 'मामल्ल शैली' को विकसित किया?",
        answers: shuffle([
            { text: "सिंहविष्णु", correct: false },
            { text: "नरसिंहवर्मन I", correct: true },
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नरसिंहवर्मन I ने अपने पिता महेंद्रवर्मन I की शैली को छोड़कर 'मामल्ल शैली' को विकसित किया, जिसमें एकाश्म रथों और मूर्तियों का निर्माण हुआ।"
    },
    {
        question: "पल्लव शासन में 'अधिकरण' क्या था?",
        answers: shuffle([
            { text: "एक प्रशासनिक इकाई", correct: false },
            { text: "एक धार्मिक अनुष्ठान", correct: false },
            { text: "एक न्यायालय", correct: true },
            { text: "एक कर संग्रहकर्ता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पल्लव प्रशासन में 'अधिकरण' एक न्यायालय था, जो न्याय प्रदान करने का कार्य करता था।"
    },
    {
        question: "किस पल्लव शासक को 'राजराजसिंह' की उपाधि मिली थी?",
        answers: shuffle([
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "परमेश्वरवर्मन I", correct: false },
            { text: "नरसिंहवर्मन II", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नरसिंहवर्मन II को 'राजसिंह' के साथ-साथ 'राजराजसिंह' की उपाधि भी मिली थी, जो उसके शासनकाल की भव्यता को दर्शाती है।"
    },
    {
        question: "पल्लवों और राष्ट्रकूटों के बीच संघर्ष का आरंभ किस पल्लव शासक के शासनकाल में हुआ?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "परमेश्वरवर्मन II", correct: false },
            { text: "नंदीवर्मन II", correct: true },
            { text: "अपराजित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नंदीवर्मन II के शासनकाल में ही पल्लवों और राष्ट्रकूटों के बीच संघर्ष की शुरुआत हुई थी।"
    },
    {
        question: "'मामल्लपुरम' में स्थित 'गजलक्ष्मी गुफा मंदिर' किस शैली का उदाहरण है?",
        answers: shuffle([
            { text: "महेंद्र शैली", correct: false },
            { text: "मामल्ल शैली", correct: true },
            { text: "राजसिंह शैली", correct: false },
            { text: "अपराजित शैली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गजलक्ष्मी गुफा मंदिर' नरसिंहवर्मन I (मामल्ल) के शासनकाल में निर्मित हुआ था, और यह मामल्ल शैली का एक महत्वपूर्ण उदाहरण है।"
    },
    {
        question: "किस पल्लव शासक ने 'पल्लवमल' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "नरसिंहवर्मन II", correct: false },
            { text: "नंदीवर्मन II", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नंदीवर्मन II ने 'पल्लवमल' (पल्लवों का पहलवान) और 'क्षत्रियमल्ल' जैसी उपाधियाँ धारण की थीं।"
    },
    {
        question: "'अल्वार' संत किस धर्म से संबंधित थे, और उन्हें किस राजवंश का संरक्षण प्राप्त था?",
        answers: shuffle([
            { text: "शैव, चालुक्य", correct: false },
            { text: "वैष्णव, पल्लव", correct: true },
            { text: "शैव, चोल", correct: false },
            { text: "वैष्णव, पांड्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अल्वार' संत वैष्णव धर्म से संबंधित थे और पल्लव काल में उन्हें संरक्षण प्राप्त था, जिससे वैष्णव आंदोलन को प्रोत्साहन मिला।"
    },
    {
        question: "'नायनार' संत किस धर्म से संबंधित थे, और उन्हें किस राजवंश का संरक्षण प्राप्त था?",
        answers: shuffle([
            { text: "शैव, पल्लव", correct: true },
            { text: "वैष्णव, चालुक्य", correct: false },
            { text: "शैव, चोल", correct: false },
            { text: "वैष्णव, पांड्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नायनार' संत शैव धर्म से संबंधित थे और पल्लव काल में उन्हें संरक्षण प्राप्त था, जिससे शैव धर्म को भी प्रोत्साहन मिला।"
    },
    {
        question: "'नरसिंहवर्मन I' के शासनकाल में पल्लवों ने किस नदी के तट पर अपनी जीत का जश्न मनाया था?",
        answers: shuffle([
            { text: "कावेरी", correct: false },
            { text: "कृष्णा", correct: true },
            { text: "गोदावरी", correct: false },
            { text: "तुंगभद्रा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नरसिंहवर्मन I ने चालुक्यों को कृष्णा नदी के तट पर हराया था।"
    },
    {
        question: "'पल्लव' वंश के किस शासक ने 'परमेश्वरवर्मन II' को पराजित किया था?",
        answers: shuffle([
            { text: "सिंहविष्णु", correct: false },
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "इनमें से कोई नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परमेश्वरवर्मन II को चालुक्य शासक विक्रमादित्य II ने पराजित किया था, न कि किसी पल्लव शासक ने।"
    },
    {
        question: "पल्लव वास्तुकला की कौन-सी शैली 'द्रविड़ शैली' की नींव मानी जाती है?",
        answers: shuffle([
            { text: "महेंद्र शैली", correct: false },
            { text: "मामल्ल शैली", correct: false },
            { text: "राजसिंह शैली", correct: true },
            { text: "अपराजित शैली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नरसिंहवर्मन II (राजसिंह) द्वारा बनवाए गए संरचनात्मक मंदिर, जैसे कैलाशनाथ मंदिर, द्रविड़ शैली के विकास में महत्वपूर्ण भूमिका निभाते हैं।"
    },
    {
        question: "'महाबलीपुरम' में स्थित 'अर्जुन की तपस्या' नामक विशाल मूर्तिकला किस शैली की उत्कृष्ट कृति है?",
        answers: shuffle([
            { text: "महेंद्र शैली", correct: false },
            { text: "मामल्ल शैली", correct: true },
            { text: "राजसिंह शैली", correct: false },
            { text: "अपराजित शैली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अर्जुन की तपस्या' या 'गंगा अवतरण' नामक मूर्तिकला नरसिंहवर्मन I के शासनकाल में निर्मित मामल्ल शैली का एक प्रसिद्ध उदाहरण है।"
    },
    {
        question: "किस पल्लव शासक ने 'परमेश्वर' और 'महामल्ल' दोनों उपाधियाँ धारण की थीं?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "परमेश्वरवर्मन I", correct: true },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परमेश्वरवर्मन I ने चालुक्यों पर विजय के बाद 'परमेश्वर' की उपाधि ली, जबकि 'महामल्ल' की उपाधि भी धारण की थी, जो उसके सैन्य कौशल को दर्शाती है।"
    },
    {
        question: "पल्लव शासक 'नंदीवर्मन II' का किस राजवंश से संबंध था?",
        answers: shuffle([
            { text: "चालुक्य", correct: false },
            { text: "पांड्य", correct: false },
            { text: "कदंब", correct: false },
            { text: "इनमें से कोई नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नंदीवर्मन II पल्लव वंश का एक अलग शाखा से आया था, जो पल्लव शासकों के मुख्य वंश से संबंधित नहीं था।"
    },
    {
        question: "किस पल्लव शासक को 'विचित्रचित्त' की उपाधि मिली थी, जिसका अर्थ है 'अनोखे विचारों वाला'?",
        answers: shuffle([
            { text: "सिंहविष्णु", correct: false },
            { text: "महेंद्रवर्मन I", correct: true },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "परमेश्वरवर्मन I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महेंद्रवर्मन I को उसकी बहुमुखी प्रतिभा और कला के प्रति प्रेम के कारण 'विचित्रचित्त' की उपाधि मिली थी।"
    },
    {
        question: "पल्लव काल में 'वेल्लार' नामक वर्ग कौन-सा था?",
        answers: shuffle([
            { text: "व्यापारी", correct: false },
            { text: "सैनिक", correct: false },
            { text: "धनी किसान", correct: true },
            { text: "पुजारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पल्लव समाज में 'वेल्लार' धनी किसान थे, जो समाज और प्रशासन में महत्वपूर्ण भूमिका निभाते थे।"
    },
    {
        question: "पल्लव शासकों ने किस भाषा को अपनी राजकीय भाषा बनाया था?",
        answers: shuffle([
            { text: "तमिल", correct: true },
            { text: "तेलुगु", correct: false },
            { text: "संस्कृत", correct: false },
            { text: "कन्नड़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हालाँकि पल्लव शासक संस्कृत के संरक्षक थे, लेकिन उनकी राजकीय भाषा तमिल थी और संगम साहित्य का भी विकास हुआ।"
    },
    {
        question: "पल्लव वंश का अंतिम शासक अपराजित किस चोल शासक द्वारा पराजित हुआ था?",
        answers: shuffle([
            { text: "विजयालय", correct: false },
            { text: "आदित्य I", correct: true },
            { text: "राजराजा I", correct: false },
            { text: "परंतक I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोल शासक आदित्य I ने अपराजित को 897 ईस्वी में पराजित कर पल्लव साम्राज्य का अंत कर दिया।"
    },
    {
        question: "पल्लव काल में 'कूट' क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का कर", correct: false },
            { text: "एक प्रशासनिक इकाई", correct: false },
            { text: "एक मंत्रीपरिषद", correct: true },
            { text: "एक सैन्य टुकड़ी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पल्लव प्रशासन में 'कूट' एक मंत्रीपरिषद थी, जो राजा को सलाह देती थी।"
    },
    {
        question: "'महाबलीपुरम' के 'पंच रथ' मंदिरों में से सबसे बड़ा रथ कौन-सा है?",
        answers: shuffle([
            { text: "धर्मराज रथ", correct: true },
            { text: "भीम रथ", correct: false },
            { text: "अर्जुन रथ", correct: false },
            { text: "द्रौपदी रथ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाबलीपुरम के पंच रथों में 'धर्मराज रथ' सबसे बड़ा और सबसे ऊँचा है।"
    },
    {
        question: "पल्लव वंश के किस शासक ने पांड्य शासकों को पराजित कर 'मदुराधिपति' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "सिंहविष्णु", correct: false },
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "परमेश्वरवर्मन I", correct: false },
            { text: "नंदीवर्मन II", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नंदीवर्मन II ने पांड्यों पर विजय प्राप्त करने के बाद 'मदुराधिपति' की उपाधि धारण की थी।"
    },
    {
        question: "पल्लवों और चालुक्यों के बीच संघर्ष किस नदी के क्षेत्र को लेकर होता था?",
        answers: shuffle([
            { text: "कावेरी", correct: false },
            { text: "कृष्णा", correct: false },
            { text: "तुंगभद्रा", correct: true },
            { text: "गोदावरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पल्लवों और चालुक्यों के बीच संघर्ष का मुख्य कारण तुंगभद्रा नदी के बीच का क्षेत्र था, जो आर्थिक और राजनीतिक रूप से महत्वपूर्ण था।"
    },
    {
        question: "'कांची' के वैकुंठपेरुमल मंदिर की शैली क्या है?",
        answers: shuffle([
            { text: "महेंद्र शैली", correct: false },
            { text: "मामल्ल शैली", correct: false },
            { text: "राजसिंह शैली", correct: false },
            { text: "अपराजित शैली", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नंदीवर्मन II के शासनकाल में निर्मित वैकुंठपेरुमल मंदिर 'अपराजित शैली' का एक उदाहरण है।"
    },
    {
        question: "किस पल्लव शासक ने 'शंभु' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "सिंहविष्णु", correct: false },
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "परमेश्वरवर्मन I", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परमेश्वरवर्मन I एक प्रबल शैव था, जिसने 'शंभु' (शिव) की उपाधि धारण की थी।"
    },
    {
        question: "किस पल्लव शासक ने 'वरुण' की उपाधि धारण की थी, जो समुद्र देवता का प्रतीक थी?",
        answers: shuffle([
            { text: "सिंहविष्णु", correct: false },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "नरसिंहवर्मन II", correct: true },
            { text: "महेंद्रवर्मन I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नरसिंहवर्मन II ने 'वरुण' (समुद्र देवता) की उपाधि धारण की थी, जो उसकी नौसेना शक्ति और समुद्री व्यापार के प्रति रुचि को दर्शाती है।"
    },
    {
        question: "'कांची' के प्रसिद्ध कैलाशनाथ मंदिर का निर्माण किस पल्लव शासक ने करवाया था, जिसके दरबार में दंडी जैसे विद्वान थे?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "नरसिंहवर्मन II", correct: true },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नरसिंहवर्मन II ने कांची में कैलाशनाथ मंदिर का निर्माण करवाया था, और उसके शासनकाल को साहित्य और कला का स्वर्ण युग माना जाता है।"
    },
    {
        question: "पल्लव शासकों ने किस विदेशी शक्ति के साथ व्यापारिक संबंध स्थापित किए थे?",
        answers: shuffle([
            { text: "रोमन साम्राज्य", correct: false },
            { text: "चीन", correct: false },
            { text: "दक्षिण-पूर्व एशिया", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पल्लव शासकों के व्यापारिक संबंध रोमन साम्राज्य, चीन और दक्षिण-पूर्व एशिया के साथ मजबूत थे, जिसका प्रमाण उनके बंदरगाहों से मिलता है।"
    },
    {
        question: "पल्लव शासन में 'ओलाइनायक' क्या था?",
        answers: shuffle([
            { text: "एक धार्मिक अधिकारी", correct: false },
            { text: "एक सैन्य अधिकारी", correct: false },
            { text: "एक शाही सचिव", correct: true },
            { text: "एक कर संग्रहकर्ता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ओलाइनायक' पल्लव प्रशासन में एक महत्वपूर्ण पद था, जो शाही दस्तावेजों और आदेशों को लिखने का कार्य करता था।"
    },
    {
        question: "किस पल्लव शासक ने 'चोलों' के शासन को अस्थायी रूप से समाप्त कर अपने साम्राज्य में मिला लिया था?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: true },
            { text: "नरसिंहवर्मन II", correct: false },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नरसिंहवर्मन I ने चोलों को पराजित कर उनके राज्य को अपने अधीन कर लिया था।"
    },
    {
        question: "'त्रिमूर्ति गुफा' नामक मंदिर किस पल्लव शासक के शासनकाल में निर्मित हुआ था?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: true },
            { text: "नरसिंहवर्मन II", correct: false },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाबलीपुरम में स्थित त्रिमूर्ति गुफा मंदिर नरसिंहवर्मन I के शासनकाल में बनवाया गया था, जो मामल्ल शैली का एक उदाहरण है।"
    },
    {
        question: "पल्लव वंश का वह कौन-सा शासक था, जिसने 'चालुक्यों' को उनकी राजधानी वातापी में कई बार पराजित किया?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: true },
            { text: "परमेश्वरवर्मन I", correct: false },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नरसिंहवर्मन I ने पुलकेशिन II को पराजित कर वातापी पर कब्जा किया और चालुक्यों को कई बार हराया।"
    },
    {
        question: "'कांची' के प्रसिद्ध मुक्तेश्वर मंदिर का निर्माण किस पल्लव शासक ने करवाया था?",
        answers: shuffle([
            { text: "सिंहविष्णु", correct: false },
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन II", correct: false },
            { text: "नंदीवर्मन II", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नंदीवर्मन II ने कांची में मुक्तेश्वर मंदिर का निर्माण करवाया था, जो पल्लव वास्तुकला की अपराजित शैली का उदाहरण है।"
    },
    {
        question: "पल्लव काल में 'सेंगल' नामक कर किस पर लगाया जाता था?",
        answers: shuffle([
            { text: "भू-राजस्व", correct: false },
            { text: "व्यापार", correct: false },
            { text: "नमक उत्पादन", correct: true },
            { text: "मंदिरों पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सेंगल' नामक कर नमक उत्पादन पर लगाया जाता था, जो राज्य की आय का एक स्रोत था।"
    },
    {
        question: "'महाबलीपुरम' के 'पंच रथ' में से कौन-सा रथ अधूरा है?",
        answers: shuffle([
            { text: "धर्मराज रथ", correct: false },
            { text: "अर्जुन रथ", correct: true },
            { text: "सहदेव रथ", correct: false },
            { text: "द्रौपदी रथ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अर्जुन रथ पाँच रथों में से एकमात्र ऐसा रथ है, जो निर्माण के दौरान अधूरा रह गया था।"
    },
    {
        question: "किस पल्लव शासक को 'मल्ल' की उपाधि भी मिली थी, जिसने 'मामल्लपुरम' को एक प्रमुख बंदरगाह बनाया?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: true },
            { text: "नरसिंहवर्मन II", correct: false },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नरसिंहवर्मन I को 'महामल्ल' (महान पहलवान) की उपाधि मिली थी, और उसने अपने नाम पर महाबलीपुरम को मामल्लपुरम नाम दिया।"
    },
    {
        question: "पल्लव वंश के किस शासक ने अपनी सैन्य विजयों के बाद 'चोलों' के राज्य को अपने अधीन कर लिया था?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: true },
            { text: "परमेश्वरवर्मन I", correct: false },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नरसिंहवर्मन I ने चोलों को पराजित कर अपने अधीन कर लिया, लेकिन बाद में वे फिर से स्वतंत्र हो गए।"
    },
    {
        question: "'चोल' और 'पल्लव' संघर्ष का मुख्य कारण क्या था?",
        answers: shuffle([
            { text: "आर्थिक संसाधन", correct: false },
            { text: "राजनीतिक प्रभुत्व", correct: true },
            { text: "धार्मिक मतभेद", correct: false },
            { text: "भू-राजस्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोल और पल्लव दोनों राजवंश दक्षिण भारत में राजनीतिक प्रभुत्व स्थापित करना चाहते थे, जिससे उनके बीच लंबा संघर्ष चला।"
    },
    {
        question: "पल्लव काल में 'एरी' क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का कर", correct: false },
            { text: "एक धार्मिक अनुष्ठान", correct: false },
            { text: "एक तालाब या झील", correct: true },
            { text: "एक प्रशासनिक इकाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'एरी' का अर्थ तालाब या झील था, जो सिंचाई के लिए उपयोग किया जाता था और पल्लव प्रशासन में महत्वपूर्ण था।"
    },
    {
        question: "'महाबलीपुरम' का प्रसिद्ध 'गंगा अवतरण' नामक मूर्तिकला किस पल्लव शासक के शासनकाल में निर्मित हुई थी?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: true },
            { text: "नरसिंहवर्मन II", correct: false },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गंगा अवतरण' नामक मूर्तिकला नरसिंहवर्मन I के शासनकाल में निर्मित मामल्ल शैली का एक अद्भुत उदाहरण है।"
    },
    {
        question: "किस पल्लव शासक ने 'परमेश्वर' की उपाधि धारण की थी और चालुक्यों को पराजित कर अपनी सैन्य शक्ति का प्रदर्शन किया था?",
        answers: shuffle([
            { text: "सिंहविष्णु", correct: false },
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "परमेश्वरवर्मन I", correct: true },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परमेश्वरवर्मन I ने चालुक्यों को पराजित कर अपनी सैन्य शक्ति का प्रदर्शन किया और 'परमेश्वर' की उपाधि धारण की थी।"
    },
    {
        question: "पल्लव काल में 'वरियम्' क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का कर", correct: false },
            { text: "एक गाँव की प्रशासनिक समिति", correct: true },
            { text: "एक सैन्य टुकड़ी", correct: false },
            { text: "एक धार्मिक अनुष्ठान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वरियम्' गाँव की प्रशासनिक समिति थी, जो सिंचाई, न्याय और अन्य स्थानीय कार्यों का प्रबंधन करती थी।"
    },
    {
        question: "पल्लव वास्तुकला की 'राजसिंह शैली' किस शासक के नाम पर थी?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "नरसिंहवर्मन II", correct: true },
            { text: "अपराजित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'राजसिंह' नरसिंहवर्मन II की उपाधि थी, और उसके शासनकाल में विकसित वास्तुकला को 'राजसिंह शैली' कहा जाता है।"
    },
    {
        question: "किस पल्लव शासक ने 'चेन्नई' के प्रसिद्ध 'कपलेश्वर मंदिर' का निर्माण करवाया था?",
        answers: shuffle([
            { text: "सिंहविष्णु", correct: false },
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "इनमें से कोई नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कपलेश्वर मंदिर का निर्माण 7वीं शताब्दी में पल्लवों ने करवाया था, लेकिन बाद में पुर्तगालियों ने इसे नष्ट कर दिया और इसका पुनर्निर्माण विजयनगर शासकों ने करवाया।"
    },
    {
        question: "किस पल्लव शासक ने 'मल्ल' की उपाधि धारण की थी और महाबलीपुरम के एकाश्म रथ मंदिरों का निर्माण करवाया था?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: true },
            { text: "नरसिंहवर्मन II", correct: false },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नरसिंहवर्मन I को 'महामल्ल' की उपाधि मिली थी और उसने महाबलीपुरम में एकाश्म रथों का निर्माण करवाया था।"
    },
    {
        question: "पल्लव वंश का वह अंतिम शासक कौन था, जिसे 'अपराजित' के नाम से भी जाना जाता था?",
        answers: shuffle([
            { text: "परमेश्वरवर्मन II", correct: false },
            { text: "नंदीवर्मन II", correct: false },
            { text: "अपराजित", correct: true },
            { text: "नरसिंहवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपराजित पल्लव वंश का अंतिम शासक था, जिसे चोल शासक आदित्य I ने पराजित किया था।"
    },
    {
        question: "पल्लव शासन में 'नाडु' क्या था?",
        answers: shuffle([
            { text: "गाँव", correct: false },
            { text: "जिला", correct: true },
            { text: "प्रांत", correct: false },
            { text: "राज्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोल और पल्लव प्रशासन में 'नाडु' एक जिला या उप-मंडल था।"
    },
    {
        question: "किस पल्लव शासक के शासनकाल में 'कांची' के वैकुंठपेरुमल मंदिर की दीवारों पर पल्लव इतिहास का चित्रण मिलता है?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "नरसिंहवर्मन II", correct: false },
            { text: "नंदीवर्मन II", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नंदीवर्मन II द्वारा निर्मित वैकुंठपेरुमल मंदिर की दीवारों पर पल्लव शासकों के इतिहास का विस्तृत चित्रण है।"
    },
    {
        question: "'मामल्लपुरम' (महाबलीपुरम) के प्रसिद्ध 'कृष्ण मंडप' का निर्माण किस पल्लव शासक के शासनकाल में हुआ था?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: true },
            { text: "नरसिंहवर्मन II", correct: false },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कृष्ण मंडप' नरसिंहवर्मन I (मामल्ल) के शासनकाल में निर्मित गुफा मंदिरों में से एक है, जो मामल्ल शैली का उदाहरण है।"
    },
    {
        question: "पल्लव वास्तुकला की 'अपराजित शैली' किस शासक के बाद अस्तित्व में आई?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "परमेश्वरवर्मन II", correct: true },
            { text: "अपराजित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपराजित शैली पल्लव वंश की अंतिम शैली थी, जो परमेश्वरवर्मन II के बाद अस्तित्व में आई और चोलों के आक्रमण के साथ समाप्त हो गई।"
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