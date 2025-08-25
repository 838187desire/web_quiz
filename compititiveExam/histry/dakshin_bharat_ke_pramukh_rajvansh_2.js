const questions = [
    {
        topHeading: "दक्षिण भारत के प्रमुख राजवंश पर आधारित बहुविकल्पी प्रश्न part 2 (quiz_no.90)"
    },
    {
        question: "कल्याणी के चालुक्य वंश (पश्चिमी चालुक्य) का संस्थापक कौन था?",
        answers: shuffle([
            { text: "विक्रमादित्य I", correct: false },
            { text: "तैलप II", correct: true },
            { text: "सोमेश्वर I", correct: false },
            { text: "सोमेश्वर IV", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तैलप II ने 973 ईस्वी में राष्ट्रकूटों की सत्ता समाप्त कर कल्याणी के चालुक्य वंश की स्थापना की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> उसकी राजधानी मान्यखेत थी, जिसे बाद में कल्याणी स्थानांतरित किया गया।"
    },
    {
        question: "कल्याणी के चालुक्यों की राजधानी क्या थी?",
        answers: shuffle([
            { text: "वातापी", correct: false },
            { text: "मान्यखेत", correct: false },
            { text: "तंजौर", correct: false },
            { text: "कल्याणी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हालाँकि इस वंश के संस्थापक तैलप II ने मान्यखेत को अपनी राजधानी बनाया था, लेकिन बाद में सोमेश्वर I ने इसे कल्याणी (आधुनिक कर्नाटक) स्थानांतरित कर दिया, जिसके कारण इस वंश को कल्याणी के चालुक्य कहा जाता है।"
    },
    {
        question: "चोल प्रशासन में 'वलनाडु' क्या थी?",
        answers: shuffle([
            { text: "ग्रामों का समूह", correct: false },
            { text: "कुर्रमों का समूह (जिलों)", correct: true },
            { text: "प्रांतों का समूह (मंडलों)", correct: false },
            { text: "अधिकारियों का एक समूह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोल साम्राज्य में 'मंडलम' (प्रांत) कई 'वलनाडु' (जिले) में विभाजित था, और प्रत्येक 'वलनाडु' में कई 'कुर्रम' (गाँव के समूह) होते थे।"
    },
    {
        question: "होयसल राजवंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "विष्णुवर्धन", correct: false },
            { text: "वीर बल्लाल II", correct: false },
            { text: "नृप काम II", correct: true },
            { text: "विष्णुगोप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नृप काम II (1026-1047 ईस्वी) को होयसल वंश का संस्थापक माना जाता है, जिसने 11वीं शताब्दी में एक स्वतंत्र राज्य की स्थापना की।"
    },
    {
        question: "होयसलों की राजधानी क्या थी?",
        answers: shuffle([
            { text: "वातापी", correct: false },
            { text: "कल्याणी", correct: false },
            { text: "द्वारसमुद्र", correct: true },
            { text: "मदुरै", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> होयसल वंश की राजधानी द्वारसमुद्र थी, जो आधुनिक हलेबिड में स्थित था।"
    },
    {
        question: "हलेबिड में स्थित प्रसिद्ध होयसलेश्वर मंदिर किस राजवंश के शासनकाल में बनाया गया था?",
        answers: shuffle([
            { text: "राष्ट्रकूट", correct: false },
            { text: "चालुक्य", correct: false },
            { text: "चोल", correct: false },
            { text: "होयसल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हलेबिड का होयसलेश्वर मंदिर होयसल वास्तुकला का एक उत्कृष्ट उदाहरण है, जिसे 12वीं शताब्दी में होयसल शासक विष्णुवर्धन के शासनकाल में बनवाया गया था।"
    },
    {
        question: "काकतीय राजवंश की राजधानी क्या थी?",
        answers: shuffle([
            { text: "वारंगल", correct: true },
            { text: "देवगिरि", correct: false },
            { text: "मदुरै", correct: false },
            { text: "कांची", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काकतीय राजवंश की राजधानी वारंगल (आधुनिक तेलंगाना) थी।"
    },
    {
        question: "काकतीय वंश का सबसे प्रसिद्ध शासक कौन था, जिसने 'रायगजाकेसरी' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "गणपतिदेव", correct: true },
            { text: "रुद्रदेव", correct: false },
            { text: "प्रोलाराजा II", correct: false },
            { text: "महादेवा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गणपतिदेव (1199-1262 ईस्वी) काकतीय वंश का सबसे शक्तिशाली शासक था, जिसके शासनकाल में काकतीय साम्राज्य का सबसे अधिक विस्तार हुआ था।"
    },
    {
        question: "किस काकतीय रानी ने अपने साम्राज्य का कुशलतापूर्वक शासन किया और उसके शासनकाल में वारंगल की समृद्धि बढ़ी?",
        answers: shuffle([
            { text: "मीनाक्षी", correct: false },
            { text: "रानी दुर्गावती", correct: false },
            { text: "रुद्रमादेवी", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रानी रुद्रमादेवी (1262-1289 ईस्वी) गणपतिदेव की पुत्री थी।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने अपने पिता की मृत्यु के बाद वारंगल पर शासन किया और दक्षिण भारत की कुछ ही रानियों में से एक थी जिसने एक बड़े साम्राज्य पर शासन किया।"
    },
    {
        question: "देवगिरि के यादव राजवंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "भिल्लम V", correct: true },
            { text: "कृष्ण", correct: false },
            { text: "महादेव", correct: false },
            { text: "रामचंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भिल्लम V ने 1187 ईस्वी में यादव वंश की स्थापना की थी, जिसकी राजधानी देवगिरि थी।"
    },
    {
        question: "देवगिरि के यादवों की राजधानी क्या थी?",
        answers: shuffle([
            { text: "वारंगल", correct: false },
            { text: "मदुरै", correct: false },
            { text: "देवगिरि", correct: true },
            { text: "द्वारसमुद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यादवों ने देवगिरि (आधुनिक दौलताबाद, महाराष्ट्र) को अपनी राजधानी बनाया था।"
    },
    {
        question: "किस राष्ट्रकूट शासक ने कन्नड़ भाषा में 'कविराजमार्ग' नामक ग्रंथ की रचना की थी?",
        answers: shuffle([
            { text: "दंतिदुर्ग", correct: false },
            { text: "कृष्ण I", correct: false },
            { text: "अमोघवर्ष I", correct: true },
            { text: "गोविंद III", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमोघवर्ष I एक कुशल विद्वान था और उसने स्वयं 'कविराजमार्ग' नामक कन्नड़ भाषा के प्रथम ग्रंथ की रचना की थी।"
    },
    {
        question: "किस चालुक्य शासक ने 'दक्षिणपथेश्वर' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "पुलकेशिन I", correct: false },
            { text: "पुलकेशिन II", correct: true },
            { text: "विक्रमादित्य I", correct: false },
            { text: "विक्रमादित्य II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुलकेशिन II ने अपनी महान विजयों के बाद 'परमेश्वर' और 'दक्षिणपथेश्वर' (दक्षिणापथ का स्वामी) जैसी उपाधियाँ धारण की थीं।"
    },
    {
        question: "किस चालुक्य शासक के शासनकाल में प्रसिद्ध चीनी यात्री ह्वेन त्सांग ने वातापी की यात्रा की थी?",
        answers: shuffle([
            { text: "पुलकेशिन I", correct: false },
            { text: "पुलकेशिन II", correct: true },
            { text: "विक्रमादित्य I", correct: false },
            { text: "विक्रमादित्य II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग ने 641 ईस्वी के आसपास चालुक्य शासक पुलकेशिन II के शासनकाल में वातापी की यात्रा की थी और उसके साम्राज्य की समृद्धि का वर्णन किया था।"
    },
    {
        question: "चोल प्रशासन में 'वेल्लल' कौन थे?",
        answers: shuffle([
            { text: "ब्राह्मण", correct: false },
            { text: "सैनिक", correct: false },
            { text: "धनी किसान", correct: true },
            { text: "व्यापारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोल समाज में 'वेल्लल' या 'वेललार' धनी किसानों के वर्ग थे, जो प्रशासन में भी महत्वपूर्ण भूमिका निभाते थे।"
    },
    {
        question: "किस चोल शासक को 'सुंगमतविर्त' (करों को हटाने वाला) की उपाधि मिली थी?",
        answers: shuffle([
            { text: "राजराजा I", correct: false },
            { text: "राजेन्द्र चोल I", correct: false },
            { text: "कुलोत्तुंग चोल I", correct: true },
            { text: "परंतक I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुलोत्तुंग चोल I ने अपने शासनकाल में टोल (सुंगम) कर को समाप्त कर दिया था, जिसके कारण उसे 'सुंगमतविर्त' की उपाधि मिली थी।"
    },
    {
        question: "'त्रिपक्षीय संघर्ष' में भाग लेने वाला अंतिम राष्ट्रकूट शासक कौन था?",
        answers: shuffle([
            { text: "दंतिदुर्ग", correct: false },
            { text: "गोविंद III", correct: false },
            { text: "ध्रुव", correct: false },
            { text: "इंद्र III", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रकूट शासक इंद्र III ने 915 ईस्वी में कन्नौज पर कब्जा कर उसे पूरी तरह से तहस-नहस कर दिया था।<br><br><i class='fa-solid fa-angles-right icon'></i> वह त्रिपक्षीय संघर्ष में भाग लेने वाला अंतिम राष्ट्रकूट शासक था।"
    },
    {
        question: "किस शासक ने कांची के मंदिरों को नष्ट करने के बजाय दान दिया था?",
        answers: shuffle([
            { text: "पुलकेशिन II", correct: false },
            { text: "विक्रमादित्य I", correct: false },
            { text: "विक्रमादित्य II", correct: true },
            { text: "नरसिंहवर्मन I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चालुक्य शासक विक्रमादित्य II ने पल्लवों पर अपनी विजय के बाद कांची के मंदिरों को नष्ट नहीं किया, बल्कि उन्हें धन और दान दिया था।"
    },
    {
        question: "किस पल्लव शासक के शासनकाल में 'कांची का युद्ध' हुआ था, जिसमें चालुक्य शासक पुलकेशिन II ने कांची पर कब्जा किया था?",
        answers: shuffle([
            { text: "सिंहविष्णु", correct: false },
            { text: "महेंद्रवर्मन I", correct: true },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महेंद्रवर्मन I और पुलकेशिन II के बीच हुए संघर्ष में, पुलकेशिन II ने महेंद्रवर्मन I को पराजित कर पल्लवों की राजधानी कांची के उत्तरी भाग पर अधिकार कर लिया था।"
    },
    {
        question: "ह्वेन त्सांग ने किस पल्लव शासक के शासनकाल में कांची की यात्रा की थी?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: true },
            { text: "नरसिंहवर्मन II", correct: false },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग ने लगभग 640 ईस्वी में पल्लव राजधानी कांची की यात्रा की थी, जब वहाँ नरसिंहवर्मन I का शासन था।"
    },
    {
        question: "'सप्त रथ मंदिर' (महाबलीपुरम) किस शासक के शासनकाल की वास्तुकला को दर्शाता है?",
        answers: shuffle([
            { text: "महेंद्रवर्मन शैली", correct: false },
            { text: "मामल्ल शैली", correct: true },
            { text: "राजसिंह शैली", correct: false },
            { text: "पल्लव शैली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सप्त रथ मंदिर' नरसिंहवर्मन I (मामल्ल) के शासनकाल में निर्मित हुए थे, इसलिए उन्हें मामल्ल शैली की वास्तुकला का हिस्सा माना जाता है।"
    },
    {
        question: "किस शासक ने 'पल्लवमल' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "नरसिंहवर्मन II", correct: false },
            { text: "नंदीवर्मन II", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नंदीवर्मन II ने 'पल्लवमल' और 'क्षत्रिय मल्ल' जैसी उपाधियाँ धारण की थीं।"
    },
    {
        question: "चालुक्यों की राजधानी वातापी (बादामी) के प्रसिद्ध मंदिर, जैसे गुफा मंदिर, किस शासक के काल में बने थे?",
        answers: shuffle([
            { text: "पुलकेशिन I", correct: false },
            { text: "पुलकेशिन II", correct: false },
            { text: "मंगलेश", correct: true },
            { text: "कीर्तिवर्मन I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बादामी के प्रसिद्ध गुफा मंदिरों का निर्माण पुलकेशिन I के पुत्र मंगलेश के शासनकाल में हुआ था।"
    },
    {
        question: "चोल प्रशासन में 'ईरई' क्या था?",
        answers: shuffle([
            { text: "भूमि का एक प्रकार", correct: false },
            { text: "एक प्रकार का कर", correct: true },
            { text: "सैनिकों का एक समूह", correct: false },
            { text: "एक प्रशासनिक इकाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ईरई' चोल साम्राज्य में भू-राजस्व का एक प्रकार था।"
    },
    {
        question: "होयसल वंश का सबसे शक्तिशाली शासक कौन था?",
        answers: shuffle([
            { text: "नृप काम II", correct: false },
            { text: "विष्णुवर्धन", correct: false },
            { text: "वीर बल्लाल II", correct: true },
            { text: "नरसिंह II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वीर बल्लाल II (1173-1220 ईस्वी) होयसल वंश का सबसे शक्तिशाली शासक था, जिसके शासनकाल में साम्राज्य का सबसे अधिक विस्तार हुआ और वह चोल और पश्चिमी चालुक्यों के बीच एक महत्वपूर्ण शक्ति बनकर उभरा।"
    },
    {
        question: "किस यादव शासक के शासनकाल में दिल्ली सल्तनत के अलाउद्दीन खिलजी ने देवगिरि पर आक्रमण किया था?",
        answers: shuffle([
            { text: "भिल्लम V", correct: false },
            { text: "रामचंद्र", correct: true },
            { text: "सिंघण II", correct: false },
            { text: "महादेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रामचंद्र के शासनकाल में 1296 ईस्वी में अलाउद्दीन खिलजी ने देवगिरि पर आक्रमण किया और यादव शासक को संधि करने के लिए मजबूर किया।"
    },
    {
        question: "संगम काल में 'कोक्कन' किस राजवंश का शासक था?",
        answers: shuffle([
            { text: "चोल", correct: false },
            { text: "चेर", correct: true },
            { text: "पांड्य", correct: false },
            { text: "पल्लव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कोक्कन' संगम साहित्य में उल्लिखित एक प्रसिद्ध चेर शासक था।"
    },
    {
        question: "किस राष्ट्रकूट शासक ने गंग वंश के शासकों को पराजित किया और उनकी राजधानी तालकाडु को जला दिया?",
        answers: shuffle([
            { text: "दंतिदुर्ग", correct: false },
            { text: "गोविंद III", correct: false },
            { text: "अमोघवर्ष I", correct: false },
            { text: "कृष्ण III", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृष्ण III ने गंगों को पराजित किया और उनके क्षेत्र पर कब्जा कर लिया।"
    },
    {
        question: "चोल प्रशासन में 'पेरुनंदिरम' नामक पद क्या था?",
        answers: shuffle([
            { text: "सेना का सर्वोच्च कमांडर", correct: false },
            { text: "एक उच्च श्रेणी का अधिकारी", correct: true },
            { text: "राजस्व संग्रहकर्ता", correct: false },
            { text: "गाँव का मुखिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोल प्रशासन में 'पेरुनंदिरम' एक उच्च श्रेणी के अधिकारी को कहा जाता था, जो राजा के निकट होता था।"
    },
    {
        question: "पल्लव वास्तुकला की शुरुआत किस शासक के शासनकाल में हुई थी, जब मंडप शैली के मंदिरों का निर्माण हुआ?",
        answers: shuffle([
            { text: "सिंहविष्णु", correct: false },
            { text: "महेंद्रवर्मन I", correct: true },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "नरसिंहवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महेंद्रवर्मन I के शासनकाल में चट्टानों को काटकर बनाए गए मंडप शैली के मंदिरों का निर्माण शुरू हुआ, जिसे महेंद्र शैली भी कहा जाता है।"
    },
    {
        question: "चालुक्यों की राजधानी वातापी (बादामी) के बादामी गुफा मंदिरों का निर्माण किस शैली में हुआ है?",
        answers: shuffle([
            { text: "नागर शैली", correct: false },
            { text: "द्रविड़ शैली", correct: false },
            { text: "वेसर शैली", correct: false },
            { text: "मिश्रित चालुक्य शैली", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बादामी गुफा मंदिर चालुक्य शैली में निर्मित हैं, जिसमें नागर और द्रविड़ शैली के तत्व मिलते हैं, लेकिन इसे एक अलग ही शैली माना जाता है।"
    },
    {
        question: "होयसलों का 'बेलूर' में स्थित 'चेन्नकेशव मंदिर' किस शासक के शासनकाल में बनाया गया था?",
        answers: shuffle([
            { text: "नृप काम II", correct: false },
            { text: "विष्णुवर्धन", correct: true },
            { text: "वीर बल्लाल II", correct: false },
            { text: "नरसिंह I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बेलूर का चेन्नकेशव मंदिर होयसल शासक विष्णुवर्धन ने चोलों पर अपनी विजय के उपलक्ष्य में बनवाया था।"
    },
    {
        question: "चालुक्य-पल्लव संघर्ष के दौरान, पल्लव शासक नरसिंहवर्मन I ने किस चालुक्य शासक को पराजित किया था?",
        answers: shuffle([
            { text: "पुलकेशिन I", correct: false },
            { text: "पुलकेशिन II", correct: true },
            { text: "विक्रमादित्य I", correct: false },
            { text: "कीर्तिवर्मन I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नरसिंहवर्मन I ने पुलकेशिन II को पराजित कर मार डाला और वातापी पर अधिकार कर लिया था।"
    },
    {
        question: "चोल शासक राजराजा I और राजेन्द्र चोल I के समय सबसे महत्वपूर्ण मंदिर कौन-सा था?",
        answers: shuffle([
            { text: "बृहदेश्वर मंदिर", correct: true },
            { text: "गंगईकोंडचोलपुरम मंदिर", correct: false },
            { text: "शोर मंदिर", correct: false },
            { text: "कैलाशनाथ मंदिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहदेश्वर मंदिर (तंजौर) का निर्माण राजराजा I ने करवाया था, और यह चोलों की शक्ति और स्थापत्य कला का प्रतीक था।"
    },
    {
        question: "'दशकुमारचरित' नामक ग्रंथ की रचना किस लेखक ने की थी, जो पल्लव शासक नरसिंहवर्मन II के दरबार से संबंधित थे?",
        answers: shuffle([
            { text: "बिल्हण", correct: false },
            { text: "दंडी", correct: true },
            { text: "रविकीर्ति", correct: false },
            { text: "भारवि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दशकुमारचरित' नामक ग्रंथ की रचना दंडी ने की थी, जो नरसिंहवर्मन II के दरबार में एक महान लेखक थे।"
    },
    {
        question: "किस चोल शासक ने 'गंगईकोंडचोलपुरम' को अपनी राजधानी बनाया और वहां एक विशाल शिव मंदिर बनवाया?",
        answers: shuffle([
            { text: "विजयालय", correct: false },
            { text: "राजराजा I", correct: false },
            { text: "राजेन्द्र चोल I", correct: true },
            { text: "कुलोत्तुंग चोल I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजेन्द्र चोल I ने उत्तरी भारत पर विजय प्राप्त करने के बाद, अपनी नई राजधानी गंगईकोंडचोलपुरम की स्थापना की थी।"
    },
    {
        question: "संगम काल में 'पांड्य' वंश का सबसे प्रसिद्ध बंदरगाह कौन सा था?",
        answers: shuffle([
            { text: "पुहार", correct: false },
            { text: "मुजिरीस", correct: false },
            { text: "कोरकई", correct: true },
            { text: "कावेरीपट्टनम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोरकई पांड्य वंश का सबसे महत्वपूर्ण बंदरगाह था, जो मोतियों के व्यापार के लिए प्रसिद्ध था।"
    },
    {
        question: "बादामी के चालुक्यों का अंतिम शासक कौन था, जिसे राष्ट्रकूटों ने पराजित किया था?",
        answers: shuffle([
            { text: "पुलकेशिन II", correct: false },
            { text: "विक्रमादित्य II", correct: false },
            { text: "कीर्तिवर्मन II", correct: true },
            { text: "तैलप II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कीर्तिवर्मन II (746-753 ईस्वी) बादामी के चालुक्य वंश का अंतिम शासक था, जिसे दंतिदुर्ग ने पराजित कर राष्ट्रकूट साम्राज्य की स्थापना की।"
    },
    {
        question: "किस राष्ट्रकूट शासक ने 'सुलेमान' नामक अरब यात्री को भारत आने पर अपने साम्राज्य में स्वागत किया था?",
        answers: shuffle([
            { text: "दंतिदुर्ग", correct: false },
            { text: "कृष्ण I", correct: false },
            { text: "अमोघवर्ष I", correct: true },
            { text: "गोविंद III", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमोघवर्ष I के शासनकाल में अरब व्यापारी सुलेमान ने भारत का दौरा किया और उसके साम्राज्य की समृद्धि का वर्णन किया था।"
    },
    {
        question: "'कांची' किस राजवंश की राजधानी थी?",
        answers: shuffle([
            { text: "चोल", correct: false },
            { text: "चालुक्य", correct: false },
            { text: "पल्लव", correct: true },
            { text: "पांड्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कांची पल्लव राजवंश की राजधानी थी और शिक्षा, कला और संस्कृति का एक महत्वपूर्ण केंद्र थी।"
    },
    {
        question: "चोलों की सबसे महत्वपूर्ण राजनीतिक और आर्थिक विशेषता क्या थी?",
        answers: shuffle([
            { text: "बड़ी सेना", correct: false },
            { text: "शक्तिशाली नौसेना", correct: false },
            { text: "उन्नत स्थानीय स्वशासन", correct: true },
            { text: "विदेशी व्यापार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोल प्रशासन में ग्राम सभाएँ (उर और सभा) और उनका उन्नत स्थानीय स्वशासन सबसे महत्वपूर्ण और विशिष्ट विशेषता थी।"
    },
    {
        question: "'कविराजमार्ग' नामक कन्नड़ भाषा का ग्रंथ किस शासक द्वारा लिखा गया था?",
        answers: shuffle([
            { text: "दंतिदुर्ग", correct: false },
            { text: "कृष्ण I", correct: false },
            { text: "अमोघवर्ष I", correct: true },
            { text: "गोविंद III", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कविराजमार्ग' कन्नड़ भाषा का सबसे पुराना उपलब्ध साहित्यिक कार्य है, जिसकी रचना राष्ट्रकूट शासक अमोघवर्ष I ने की थी।"
    },
    {
        question: "काकतीय राजवंश की अंतिम शासक कौन थी, जिसे दिल्ली सल्तनत ने पराजित किया था?",
        answers: shuffle([
            { text: "रुद्रमादेवी", correct: true },
            { text: "गणपति देवी", correct: false },
            { text: "रानी दुर्गावती", correct: false },
            { text: "लक्ष्मी देवी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रानी रुद्रमादेवी के बाद उसके उत्तराधिकारी प्रतापरुद्र को दिल्ली सल्तनत के शासकों ने पराजित किया, जिससे काकतीय वंश का अंत हुआ।"
    },
    {
        question: "'ऐहोल' नामक स्थान पर चालुक्य शासकों द्वारा निर्मित मंदिर किस शैली के उदाहरण हैं?",
        answers: shuffle([
            { text: "नागर", correct: false },
            { text: "द्रविड़", correct: false },
            { text: "वेसर", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऐहोल में चालुक्यों ने नागर, द्रविड़ और वेसर, तीनों शैलियों के मंदिरों का निर्माण किया था, जिसे 'भारतीय मंदिर वास्तुकला का पालना' कहा जाता है।"
    },
    {
        question: "किस पल्लव शासक ने 'राजसिंह' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "नरसिंहवर्मन II", correct: true },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नरसिंहवर्मन II, जिसे राजसिंह के नाम से भी जाना जाता है, ने अपने शासनकाल में कांची का कैलाशनाथ मंदिर और महाबलीपुरम का शोर मंदिर बनवाया था।"
    },
    {
        question: "बादामी के चालुक्यों का सबसे शक्तिशाली शासक कौन था, जिसने हर्षवर्धन को पराजित किया था?",
        answers: shuffle([
            { text: "पुलकेशिन I", correct: false },
            { text: "पुलकेशिन II", correct: true },
            { text: "विक्रमादित्य I", correct: false },
            { text: "विक्रमादित्य II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुलकेशिन II बादामी के चालुक्य वंश का सबसे महान शासक था, जिसने उत्तरी भारत के सम्राट हर्षवर्धन को पराजित किया था।"
    },
    {
        question: "चोल कला का प्रमुख केंद्र क्या था?",
        answers: shuffle([
            { text: "मदुरै", correct: false },
            { text: "तंजौर", correct: true },
            { text: "महाबलीपुरम", correct: false },
            { text: "कांची", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तंजौर चोल कला और वास्तुकला का एक महत्वपूर्ण केंद्र था, जहाँ बृहदेश्वर मंदिर जैसे महान मंदिर स्थित हैं।"
    },
    {
        question: "किस राष्ट्रकूट शासक ने एलोरा में 'कैलाश मंदिर' का निर्माण करवाया था, जो एकाश्म वास्तुकला का एक अद्भुत उदाहरण है?",
        answers: shuffle([
            { text: "दंतिदुर्ग", correct: false },
            { text: "कृष्ण I", correct: true },
            { text: "अमोघवर्ष I", correct: false },
            { text: "गोविंद III", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रकूट शासक कृष्ण I ने एलोरा में चट्टानों को काटकर एक ही पत्थर से निर्मित कैलाश मंदिर का निर्माण करवाया था।"
    },
    {
        question: "'अष्टदिग्गज' नामक आठ विद्वानों का समूह किस राजवंश के दरबार में था?",
        answers: shuffle([
            { text: "चोल", correct: false },
            { text: "पांड्य", correct: false },
            { text: "विजयनगर", correct: true },
            { text: "काकतीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अष्टदिग्गज' नामक विद्वानों का समूह विजयनगर साम्राज्य के शासक कृष्णदेव राय के दरबार में था।"
    },
    {
        question: "चोल प्रशासन में 'नागरम्' क्या था?",
        answers: shuffle([
            { text: "शहरों का प्रशासन", correct: false },
            { text: "ब्राह्मणों का एक समूह", correct: false },
            { text: "गाँव का एक प्रकार", correct: false },
            { text: "व्यापारियों का एक संगठन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नागरम्' चोल प्रशासन में व्यापारियों का एक संगठन था, जो शहरों और कस्बों में वाणिज्यिक गतिविधियों को नियंत्रित करता था।"
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