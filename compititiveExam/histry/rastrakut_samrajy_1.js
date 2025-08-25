const questions = [
    {
        topHeading: "राष्ट्रकूट साम्राज्य पर आधारित बहुविकल्पी प्रश्न part 1 (quiz_no.95)"
    },
    {
        question: "राष्ट्रकूट वंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "गोविंद तृतीय", correct: false },
            { text: "दंतिदुर्ग", correct: true },
            { text: "कृष्ण प्रथम", correct: false },
            { text: "अमोघवर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दंतिदुर्ग ने 735 ईस्वी में चालुक्यों को हराकर राष्ट्रकूट वंश की स्थापना की थी।"
    },
    {
        question: "राष्ट्रकूटों की प्रारंभिक राजधानी क्या थी?",
        answers: shuffle([
            { text: "मान्यखेत (मालखेड़)", correct: false },
            { text: "नासिक", correct: true },
            { text: "गुलबर्गा", correct: false },
            { text: "एलोरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रकूटों के संस्थापक दंतिदुर्ग ने अपनी प्रारंभिक राजधानी नासिक को बनाया था।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में, अमोघवर्ष प्रथम ने मान्यखेत (आधुनिक मालखेड़) को राष्ट्रकूट साम्राज्य की स्थायी राजधानी बनाया।"
    },
    {
        question: "एलोरा के प्रसिद्ध कैलाश मंदिर का निर्माण किस राष्ट्रकूट शासक ने करवाया था?",
        answers: shuffle([
            { text: "दंतिदुर्ग", correct: false },
            { text: "कृष्ण प्रथम", correct: true },
            { text: "ध्रुव", correct: false },
            { text: "गोविंद तृतीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैलाश मंदिर का निर्माण 8वीं शताब्दी में कृष्ण प्रथम ने करवाया था, जो भारतीय स्थापत्य कला का एक अद्भुत उदाहरण है।"
    },
    {
        question: "किस राष्ट्रकूट शासक ने कन्नौज के लिए हुए त्रिपक्षीय संघर्ष में भाग लिया और पाल तथा प्रतिहार शासकों को पराजित किया?",
        answers: shuffle([
            { text: "कृष्ण प्रथम", correct: false },
            { text: "ध्रुव", correct: true },
            { text: "गोविंद तृतीय", correct: false },
            { text: "अमोघवर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्रुव (धारावर्ष) ने त्रिपक्षीय संघर्ष में हिस्सा लिया और गुर्जर-प्रतिहार शासक वत्सराज तथा पाल शासक धर्मपाल को पराजित किया।"
    },
    {
        question: "किस राष्ट्रकूट शासक को 'धारावर्ष' की उपाधि मिली थी?",
        answers: shuffle([
            { text: "गोविंद द्वितीय", correct: false },
            { text: "ध्रुव", correct: true },
            { text: "गोविंद तृतीय", correct: false },
            { text: "कृष्ण तृतीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्रुव ने अपनी सैन्य सफलताओं के कारण 'धारावर्ष' की उपाधि धारण की थी।"
    },
    {
        question: "राष्ट्रकूट वंश का वह कौन-सा शासक था, जिसके शासनकाल में राष्ट्रकूट साम्राज्य अपनी चरम सीमा पर था?",
        answers: shuffle([
            { text: "ध्रुव", correct: false },
            { text: "गोविंद तृतीय", correct: true },
            { text: "अमोघवर्ष", correct: false },
            { text: "कृष्ण द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोविंद तृतीय के शासनकाल में राष्ट्रकूट साम्राज्य का विस्तार उत्तर में हिमालय से लेकर दक्षिण में कन्याकुमारी तक हो गया था।"
    },
    {
        question: "कन्नड़ भाषा में 'कविराजमार्ग' नामक ग्रंथ की रचना किस राष्ट्रकूट शासक ने की थी?",
        answers: shuffle([
            { text: "कृष्ण प्रथम", correct: false },
            { text: "ध्रुव", correct: false },
            { text: "अमोघवर्ष प्रथम", correct: true },
            { text: "इंद्र तृतीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमोघवर्ष प्रथम एक महान विद्वान था, जिसने स्वयं कन्नड़ भाषा के इस महत्वपूर्ण ग्रंथ की रचना की थी।"
    },
    {
        question: "राष्ट्रकूट साम्राज्य की राजधानी मान्यखेत (मालखेड़) की स्थापना किसने की थी?",
        answers: shuffle([
            { text: "दंतिदुर्ग", correct: false },
            { text: "ध्रुव", correct: false },
            { text: "अमोघवर्ष प्रथम", correct: true },
            { text: "कृष्ण तृतीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमोघवर्ष प्रथम ने मान्यखेत (आधुनिक मालखेड़) को राष्ट्रकूटों की राजधानी बनाया।"
    },
    {
        question: "राष्ट्रकूट शासक 'कृष्ण तृतीय' ने किस चोल शासक को पराजित किया था?",
        answers: shuffle([
            { text: "राजराजा I", correct: false },
            { text: "परंतक I", correct: true },
            { text: "राजेंद्र I", correct: false },
            { text: "विजयालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृष्ण तृतीय ने 949 ईस्वी के 'तक्कोलम के युद्ध' में चोल शासक परंतक I को पराजित किया था।"
    },
    {
        question: "राष्ट्रकूट शासकों का किस धर्म के प्रति गहरा झुकाव था?",
        answers: shuffle([
            { text: "जैन धर्म", correct: true },
            { text: "बौद्ध धर्म", correct: false },
            { text: "शैव धर्म", correct: false },
            { text: "वैष्णव धर्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हालाँकि राष्ट्रकूट शासक सभी धर्मों के प्रति सहिष्णु थे, लेकिन अमोघवर्ष प्रथम जैसे कई शासक जैन धर्म के अनुयायी थे।"
    },
    {
        question: "राष्ट्रकूट काल में 'राष्ट्रपति' कौन होता था?",
        answers: shuffle([
            { text: "गाँव का मुखिया", correct: false },
            { text: "प्रांत का प्रशासक", correct: true },
            { text: "सेना का प्रमुख", correct: false },
            { text: "न्याय का प्रमुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रकूट साम्राज्य को कई 'राष्ट्र' (प्रांतों) में विभाजित किया गया था, जिसका प्रमुख 'राष्ट्रपति' कहलाता था।"
    },
    {
        question: "राष्ट्रकूटों का राज्य-चिह्न क्या था?",
        answers: shuffle([
            { text: "गरुड़", correct: true },
            { text: "नंदी (बैल)", correct: false },
            { text: "हाथी", correct: false },
            { text: "शेर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रकूटों का राजकीय चिह्न 'गरुड़' था।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि कुछ शिलालेखों में नंदी (बैल) का भी उल्लेख मिलता है, गरुड़ को उनका मुख्य प्रतीक माना जाता है।"
    },
    {
        question: "राष्ट्रकूटों का पतन किस वंश के उदय के कारण हुआ?",
        answers: shuffle([
            { text: "चोल", correct: false },
            { text: "कल्याणी के चालुक्य", correct: true },
            { text: "पल्लव", correct: false },
            { text: "होयसल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 973 ईस्वी में कल्याणी के चालुक्य शासक तैलप द्वितीय ने राष्ट्रकूटों को पराजित कर अपने वंश की स्थापना की।"
    },
    {
        question: "राष्ट्रकूटों के दरबार में कौन-सा महान कन्नड़ कवि रहता था, जिसने 'शांतिपुराण' की रचना की?",
        answers: shuffle([
            { text: "पोन्न", correct: true },
            { text: "रन्न", correct: false },
            { text: "पंप", correct: false },
            { text: "महावीराचार्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पोन्न, रन्न और पंप को कन्नड़ साहित्य के 'त्रिरत्न' के रूप में जाना जाता है, और पोन्न कृष्ण तृतीय के दरबार में रहते थे।"
    },
    {
        question: "'राष्ट्रकूट' शब्द का शाब्दिक अर्थ क्या है?",
        answers: shuffle([
            { text: "राजा का पुत्र", correct: false },
            { text: "राष्ट्र का प्रमुख", correct: true },
            { text: "शक्तिशाली सेना", correct: false },
            { text: "भूमि का स्वामी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'राष्ट्र' का अर्थ है प्रांत और 'कूट' का अर्थ है प्रमुख, इसलिए 'राष्ट्रकूट' का अर्थ है 'प्रांत का प्रमुख'।"
    },
    {
        question: "एलिफेंटा की गुफाओं में 'त्रिमूर्ति' की विशाल प्रतिमा किस राजवंश के शासनकाल में निर्मित हुई थी?",
        answers: shuffle([
            { text: "चालुक्य", correct: false },
            { text: "राष्ट्रकूट", correct: true },
            { text: "पल्लव", correct: false },
            { text: "गुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एलिफेंटा की गुफाओं में स्थित कई मूर्तिकलाएँ, विशेष रूप से त्रिमूर्ति की प्रतिमा, राष्ट्रकूट काल से संबंधित हैं।"
    },
    {
        question: "किस राष्ट्रकूट शासक के शासनकाल को 'कन्नड़ साहित्य का स्वर्ण युग' माना जाता है?",
        answers: shuffle([
            { text: "ध्रुव", correct: false },
            { text: "अमोघवर्ष प्रथम", correct: true },
            { text: "गोविंद तृतीय", correct: false },
            { text: "कृष्ण तृतीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमोघवर्ष प्रथम के शासनकाल में ही कन्नड़ साहित्य का सर्वाधिक विकास हुआ।"
    },
    {
        question: "किस अरब यात्री ने राष्ट्रकूट साम्राज्य को दुनिया के चार महान साम्राज्यों में से एक माना था?",
        answers: shuffle([
            { text: "अल मसूदी", correct: false },
            { text: "सुलेमान", correct: true },
            { text: "इब्नबतूता", correct: false },
            { text: "अलबरूनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 9वीं शताब्दी के अरब यात्री सुलेमान ने राष्ट्रकूट शासक अमोघवर्ष के साम्राज्य की प्रशंसा की थी।"
    },
    {
        question: "राष्ट्रकूटों के शासनकाल में 'भोगे' या 'भोगपति' कौन होता था?",
        answers: shuffle([
            { text: "गाँव का मुखिया", correct: false },
            { text: "जिले का प्रमुख", correct: false },
            { text: "छोटे प्रशासनिक क्षेत्र का प्रमुख", correct: true },
            { text: "सेना का अधिकारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रकूट प्रशासन में 'भोगे' या 'भोगपति' छोटे प्रशासनिक क्षेत्रों के प्रमुख होते थे।"
    },
    {
        question: "राष्ट्रकूटों के अंतिम शासक कौन थे?",
        answers: shuffle([
            { text: "कृष्ण तृतीय", correct: false },
            { text: "कर्क द्वितीय", correct: true },
            { text: "गोविंद चतुर्थ", correct: false },
            { text: "इंद्र चतुर्थ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कर्क द्वितीय राष्ट्रकूट वंश का अंतिम शासक था, जिसे कल्याणी के चालुक्य शासक तैलप द्वितीय ने पराजित किया।"
    },
    {
        question: "राष्ट्रकूट शासक 'गोविंद तृतीय' ने किस नदी के तट पर अपनी विजयों का जश्न मनाया था?",
        answers: shuffle([
            { text: "नर्मदा", correct: true },
            { text: "कावेरी", correct: false },
            { text: "कृष्णा", correct: false },
            { text: "गोदावरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोविंद तृतीय ने उत्तर भारत में अपनी सफलताओं के बाद नर्मदा नदी के तट पर विजय समारोह आयोजित किया था।"
    },
    {
        question: "'दंतिदुर्ग' ने किस चालुक्य शासक को हरा कर राष्ट्रकूट साम्राज्य की नींव रखी थी?",
        answers: shuffle([
            { text: "पुलकेशिन II", correct: false },
            { text: "विक्रमादित्य II", correct: false },
            { text: "कीर्तिवर्मन II", correct: true },
            { text: "विजयादित्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दंतिदुर्ग ने चालुक्य शासक कीर्तिवर्मन द्वितीय को पराजित कर राष्ट्रकूट साम्राज्य की स्थापना की।"
    },
    {
        question: "'ध्रुव' ने त्रिपक्षीय संघर्ष में किसे पराजित किया था?",
        answers: shuffle([
            { text: "वत्सराज", correct: false },
            { text: "धर्मपाल", correct: false },
            { text: "ए और बी दोनों", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्रुव ने गुर्जर-प्रतिहार शासक वत्सराज और पाल शासक धर्मपाल दोनों को पराजित किया था।"
    },
    {
        question: "राष्ट्रकूटों ने किस स्थान पर एक विशाल स्तम्भ बनवाया था, जिसे 'कीर्तिस्तम्भ' कहा जाता था?",
        answers: shuffle([
            { text: "एलोरा", correct: false },
            { text: "मान्यखेत", correct: true },
            { text: "बादामी", correct: false },
            { text: "तंजावुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रकूटों ने अपनी राजधानी मान्यखेत में एक विशाल कीर्तिस्तम्भ बनवाया था।"
    },
    {
        question: "किस राष्ट्रकूट शासक ने 'महाराजाधिराज' और 'परमभट्टारक' जैसी उपाधियाँ धारण की थीं?",
        answers: shuffle([
            { text: "दंतिदुर्ग", correct: false },
            { text: "ध्रुव", correct: false },
            { text: "गोविंद तृतीय", correct: true },
            { text: "कृष्ण प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोविंद तृतीय ने अपने साम्राज्य विस्तार के बाद 'महाराजाधिराज', 'परमभट्टारक' और 'पृथ्वीवल्लभ' जैसी उपाधियाँ धारण की थीं।"
    },
    {
        question: "राष्ट्रकूटों का सबसे महत्वपूर्ण व्यापारिक केंद्र कौन-सा था?",
        answers: shuffle([
            { text: "कांची", correct: false },
            { text: "तंजावुर", correct: false },
            { text: "सोपारा", correct: true },
            { text: "मदुरै", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोपारा राष्ट्रकूट साम्राज्य का एक महत्वपूर्ण बंदरगाह और व्यापारिक केंद्र था, जहाँ से रोमन साम्राज्य और अरब देशों के साथ व्यापार होता था।"
    },
    {
        question: "किस राष्ट्रकूट शासक ने मान्यखेत (मालखेड़) को अपनी स्थायी राजधानी बनाया था?",
        answers: shuffle([
            { text: "दंतिदुर्ग", correct: false },
            { text: "गोविंद तृतीय", correct: false },
            { text: "कृष्ण तृतीय", correct: false },
            { text: "अमोघवर्ष प्रथम", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रकूटों की प्रारंभिक राजधानी नासिक थी, जिसे बाद में अमोघवर्ष प्रथम ने मान्यखेत (आधुनिक मालखेड़) में स्थानांतरित कर दिया था।"
    },
    {
        question: "राष्ट्रकूटों के शासनकाल में 'विषयपति' कौन होता था?",
        answers: shuffle([
            { text: "प्रांत का प्रमुख", correct: false },
            { text: "जिले का प्रमुख", correct: true },
            { text: "गाँव का मुखिया", correct: false },
            { text: "सेना का अधिकारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रकूट साम्राज्य में 'विषय' (जिला) का प्रमुख 'विषयपति' कहलाता था।"
    },
    {
        question: "एलोरा के कैलाश मंदिर में किस देवता की विशाल प्रतिमा स्थापित है?",
        answers: shuffle([
            { text: "भगवान विष्णु", correct: false },
            { text: "भगवान शिव", correct: true },
            { text: "भगवान ब्रह्मा", correct: false },
            { text: "भगवान सूर्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एलोरा का कैलाश मंदिर भगवान शिव को समर्पित है, जो राष्ट्रकूट शासक कृष्ण प्रथम द्वारा बनवाया गया था।"
    },
    {
        question: "किस राष्ट्रकूट शासक ने 'सुलेमान' नामक अरब यात्री के आगमन पर भव्य स्वागत किया था?",
        answers: shuffle([
            { text: "गोविंद तृतीय", correct: false },
            { text: "अमोघवर्ष प्रथम", correct: true },
            { text: "कृष्ण तृतीय", correct: false },
            { text: "ध्रुव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरब यात्री सुलेमान ने अमोघवर्ष के शासनकाल में राष्ट्रकूट साम्राज्य की यात्रा की थी।"
    },
    {
        question: "राष्ट्रकूटों के दरबार में 'महावीराचार्य' नामक गणितज्ञ ने किस ग्रंथ की रचना की थी?",
        answers: shuffle([
            { text: "गणितसारसंग्रह", correct: true },
            { text: "सिद्धांत शिरोमणि", correct: false },
            { text: "लीलावती", correct: false },
            { text: "ब्रह्मस्फुटसिद्धांत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महावीराचार्य, जो अमोघवर्ष प्रथम के दरबार में रहते थे, ने 'गणितसारसंग्रह' नामक एक प्रसिद्ध ग्रंथ की रचना की थी।"
    },
    {
        question: "राष्ट्रकूट शासक 'गोविंद तृतीय' ने किस नदी के तट पर पल्लव, पांड्य और केरल शासकों के संघ को हराया था?",
        answers: shuffle([
            { text: "तुंगभद्रा", correct: false },
            { text: "कृष्णा", correct: false },
            { text: "गोदावरी", correct: false },
            { text: "कावेरी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोविंद तृतीय ने कावेरी नदी के तट पर पल्लव, पांड्य और केरल शासकों के संघ को पराजित कर अपनी शक्ति का प्रदर्शन किया।"
    },
    {
        question: "राष्ट्रकूट वंश का वह कौन-सा शासक था, जिसने 'चालुक्यों' से अपनी स्वतंत्रता घोषित कर एक नए वंश की स्थापना की?",
        answers: shuffle([
            { text: "दंतिदुर्ग", correct: true },
            { text: "गोविंद तृतीय", correct: false },
            { text: "कृष्ण तृतीय", correct: false },
            { text: "अमोघवर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दंतिदुर्ग ने चालुक्य शासक कीर्तिवर्मन द्वितीय को हराकर स्वतंत्र राष्ट्रकूट साम्राज्य की नींव रखी।"
    },
    {
        question: "राष्ट्रकूटों के बाद दक्षिण में किस राजवंश का उदय हुआ, जिसने राष्ट्रकूटों का स्थान लिया?",
        answers: shuffle([
            { text: "चोल", correct: false },
            { text: "कल्याणी के चालुक्य", correct: true },
            { text: "होयसल", correct: false },
            { text: "विजयनगर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तैलप द्वितीय के नेतृत्व में कल्याणी के चालुक्यों ने राष्ट्रकूटों को समाप्त कर अपना साम्राज्य स्थापित किया।"
    },
    {
        question: "राष्ट्रकूटों के किस शासक को 'मल्लिकार्जुन' भी कहा जाता था?",
        answers: shuffle([
            { text: "कृष्ण तृतीय", correct: true },
            { text: "अमोघवर्ष प्रथम", correct: false },
            { text: "ध्रुव", correct: false },
            { text: "गोविंद तृतीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृष्ण तृतीय को 'मल्लिकार्जुन' की उपाधि भी मिली थी, जो उसके सैन्य कौशल और शक्ति को दर्शाती है।"
    },
    {
        question: "राष्ट्रकूटों की कौन-सी शाखा सबसे अधिक शक्तिशाली थी?",
        answers: shuffle([
            { text: "मान्यखेत के राष्ट्रकूट", correct: true },
            { text: "एलिचपुर के राष्ट्रकूट", correct: false },
            { text: "वेंगी के राष्ट्रकूट", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मान्यखेत के राष्ट्रकूटों ने ही एक विशाल साम्राज्य की स्थापना की थी और वे सबसे शक्तिशाली थे।"
    },
    {
        question: "राष्ट्रकूट शासनकाल में 'उर' क्या था?",
        answers: shuffle([
            { text: "गाँव की एक प्रशासनिक समिति", correct: true },
            { text: "एक कर का नाम", correct: false },
            { text: "एक प्रकार का सैनिक", correct: false },
            { text: "एक प्रशासनिक इकाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उर' गाँव की एक प्रशासनिक समिति थी, जो गाँव के स्थानीय प्रशासन का कार्य करती थी।"
    },
    {
        question: "'अमोघवर्ष प्रथम' किस धर्म का अनुयायी था?",
        answers: shuffle([
            { text: "शैव धर्म", correct: false },
            { text: "वैष्णव धर्म", correct: false },
            { text: "जैन धर्म", correct: true },
            { text: "बौद्ध धर्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमोघवर्ष प्रथम एक जैन अनुयायी था और उसने जैन धर्म को संरक्षण दिया था।"
    },
    {
        question: "राष्ट्रकूटों के किस शासक ने अपनी राजधानी मान्यखेत में भव्य मंदिरों का निर्माण करवाया था?",
        answers: shuffle([
            { text: "कृष्ण प्रथम", correct: false },
            { text: "अमोघवर्ष प्रथम", correct: true },
            { text: "ध्रुव", correct: false },
            { text: "कृष्ण तृतीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमोघवर्ष प्रथम ने मान्यखेत में जैन मंदिरों सहित कई भव्य मंदिरों का निर्माण करवाया था।"
    },
    {
        question: "राष्ट्रकूटों का सबसे प्रसिद्ध मंदिर कौन-सा है, जो एक ही चट्टान को काटकर बनाया गया है?",
        answers: shuffle([
            { text: "बादामी का मंदिर", correct: false },
            { text: "ऐहोल का मंदिर", correct: false },
            { text: "एलोरा का कैलाश मंदिर", correct: true },
            { text: "महाबलीपुरम का मंदिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एलोरा का कैलाश मंदिर, जिसे कृष्ण प्रथम ने बनवाया था, भारतीय स्थापत्य कला का एक उत्कृष्ट उदाहरण है।"
    },
    {
        question: "'कविराजमार्ग' नामक ग्रंथ किस विषय से संबंधित है?",
        answers: shuffle([
            { text: "व्याकरण", correct: false },
            { text: "राजनीति", correct: false },
            { text: "काव्यशास्त्र", correct: true },
            { text: "ज्योतिष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कविराजमार्ग' कन्नड़ भाषा में काव्यशास्त्र पर लिखा गया एक महत्वपूर्ण ग्रंथ है।"
    },
    {
        question: "राष्ट्रकूट शासक 'कृष्ण तृतीय' ने चोलों को किस प्रसिद्ध युद्ध में पराजित किया था?",
        answers: shuffle([
            { text: "तक्कोलम का युद्ध", correct: true },
            { text: "गंगईकोंडा का युद्ध", correct: false },
            { text: "मान्मंगई का युद्ध", correct: false },
            { text: "वेंगी का युद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 949 ईस्वी में हुए तक्कोलम के युद्ध में कृष्ण तृतीय ने चोल शासक परंतक I को पराजित किया था।"
    },
    {
        question: "किस राष्ट्रकूट शासक ने 'त्रिपक्षीय संघर्ष' में अपनी भागीदारी से उत्तर भारत में राष्ट्रकूटों की शक्ति स्थापित की?",
        answers: shuffle([
            { text: "ध्रुव और गोविंद तृतीय", correct: true },
            { text: "दंतिदुर्ग और कृष्ण प्रथम", correct: false },
            { text: "अमोघवर्ष और कृष्ण द्वितीय", correct: false },
            { text: "गोविंद चतुर्थ और कर्क द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्रुव और गोविंद तृतीय दोनों ने कन्नौज के लिए त्रिपक्षीय संघर्ष में भाग लेकर राष्ट्रकूटों को उत्तरी भारत में एक प्रमुख शक्ति के रूप में स्थापित किया।"
    },
    {
        question: "राष्ट्रकूट प्रशासन में 'दंडाधिपति' कौन होता था?",
        answers: shuffle([
            { text: "न्याय विभाग का प्रमुख", correct: false },
            { text: "सेना का प्रमुख", correct: true },
            { text: "प्रांत का प्रमुख", correct: false },
            { text: "ग्राम का प्रमुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दंडाधिपति' राष्ट्रकूट शासन में सेना का प्रमुख होता था, जो युद्ध और सुरक्षा का कार्य देखता था।"
    },
    {
        question: "राष्ट्रकूटों का पतन किस शासक के बाद शुरू हो गया था?",
        answers: shuffle([
            { text: "गोविंद तृतीय", correct: false },
            { text: "अमोघवर्ष प्रथम", correct: false },
            { text: "कृष्ण तृतीय", correct: true },
            { text: "ध्रुव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृष्ण तृतीय की मृत्यु के बाद राष्ट्रकूट साम्राज्य कमजोर होने लगा, जिससे उसके पतन का मार्ग प्रशस्त हुआ।"
    },
    {
        question: "'पंप' नामक प्रसिद्ध कन्नड़ कवि किस राष्ट्रकूट शासक के दरबार में रहते थे?",
        answers: shuffle([
            { text: "गोविंद तृतीय", correct: false },
            { text: "अमोघवर्ष प्रथम", correct: false },
            { text: "कृष्ण तृतीय", correct: false },
            { text: "कृष्ण द्वितीय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पंप, जिन्हें कन्नड़ साहित्य के 'आदिकवि' के रूप में जाना जाता है, कृष्ण द्वितीय के दरबार में रहते थे।"
    },
    {
        question: "किस राष्ट्रकूट शासक ने 'पंडितवत्सल' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "कृष्ण प्रथम", correct: false },
            { text: "गोविंद तृतीय", correct: false },
            { text: "अमोघवर्ष प्रथम", correct: false },
            { text: "इंद्र तृतीय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंद्र तृतीय को 'पंडितवत्सल' (विद्वानों का संरक्षक) की उपाधि मिली थी, जो कला और साहित्य के प्रति उसके प्रेम को दर्शाती है।"
    },
    {
        question: "राष्ट्रकूटों की कौन-सी शाखा सबसे अधिक शक्तिशाली थी?",
        answers: shuffle([
            { text: "मान्यखेत के राष्ट्रकूट", correct: true },
            { text: "एलिचपुर के राष्ट्रकूट", correct: false },
            { text: "वेंगी के राष्ट्रकूट", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मान्यखेत के राष्ट्रकूटों ने ही एक विशाल साम्राज्य की स्थापना की थी और वे सबसे शक्तिशाली थे।"
    },
    {
        question: "किस राष्ट्रकूट शासक ने गुर्जर-प्रतिहारों की राजधानी कन्नौज पर कब्जा किया था?",
        answers: shuffle([
            { text: "ध्रुव", correct: false },
            { text: "गोविंद तृतीय", correct: false },
            { text: "इंद्र तृतीय", correct: true },
            { text: "कृष्ण तृतीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंद्र तृतीय ने कन्नौज के शासक महीपाल को पराजित कर कन्नौज पर कब्जा कर लिया था।"
    },
    {
        question: "राष्ट्रकूटों के शासनकाल में 'उभय-दर्शन' का क्या अर्थ था?",
        answers: shuffle([
            { text: "दो धर्मों का मिश्रण", correct: true },
            { text: "दो प्रकार के कर", correct: false },
            { text: "एक प्रशासनिक समिति", correct: false },
            { text: "एक सैन्य इकाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रकूट काल में 'उभय-दर्शन' जैन और शैव धर्म के मिश्रण को दर्शाता था, जो उनके धार्मिक सहिष्णुता को प्रदर्शित करता है।"
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