const questions = [
    {
        topHeading: "दक्षिण भारत के प्रमुख राजवंश पर आधारित बहुविकल्पी प्रश्न part 1 (quiz_no.89)"
    },
    {
        question: "संगम काल में 'मुवेंदर' शब्द का प्रयोग किसके लिए किया जाता था?",
        answers: shuffle([
            { text: "तीन महान कवियों", correct: false },
            { text: "तीन संगमों के लिए", correct: false },
            { text: "तीन प्रमुख राजवंशों (चोल, चेर, पांड्य) के लिए", correct: true },
            { text: "तीन प्रकार के करों के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मुवेंदर' एक तमिल शब्द है, जिसका अर्थ है 'तीन राजा'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह संगम युग के तीन शक्तिशाली शासक परिवारों - चोल, चेर और पांड्य - के लिए प्रयोग किया जाता था।"
    },
    {
        question: "चोलों की प्रारंभिक राजधानी क्या थी?",
        answers: shuffle([
            { text: "मदुरै", correct: false },
            { text: "उरैयूर", correct: true },
            { text: "तंजौर", correct: false },
            { text: "कांची", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रारंभिक चोलों की राजधानी उरैयूर थी, जो कपास व्यापार का एक महत्वपूर्ण केंद्र था।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में तंजौर और गंगईकोंडचोलपुरम उनकी राजधानियाँ बनीं।"
    },
    {
        question: "संगम युग के दौरान पांड्य राजवंश की राजधानी कहाँ थी?",
        answers: shuffle([
            { text: "उरैयूर", correct: false },
            { text: "तंजौर", correct: false },
            { text: "मदुरै", correct: true },
            { text: "पुहार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पांड्य राजवंश की राजधानी मदुरै थी।<br><br><i class='fa-solid fa-angles-right icon'></i> यह संगम साहित्य और कला का एक प्रमुख केंद्र था, जहाँ तीन संगमों का आयोजन हुआ था।"
    },
    {
        question: "पल्लव वंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "सिंहविष्णु", correct: true },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंहविष्णु ने 575 ईस्वी के आसपास पल्लव वंश की स्थापना की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> वह 'अवनीसिंह' की उपाधि से भी जाना जाता है।"
    },
    {
        question: "मामल्लपुरम (महाबलीपुरम) के 'सप्त रथ मंदिर' का निर्माण किस पल्लव शासक ने करवाया था?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: true },
            { text: "नरसिंहवर्मन II", correct: false },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नरसिंहवर्मन I, जिसे 'मामल्ल' के नाम से भी जाना जाता है, ने महाबलीपुरम के प्रसिद्ध एकाश्म मंदिरों (रथ मंदिरों) का निर्माण करवाया था।"
    },
    {
        question: "वातापी (बादामी) के चालुक्य वंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "पुलकेशिन I", correct: true },
            { text: "पुलकेशिन II", correct: false },
            { text: "कीर्तिवर्मन I", correct: false },
            { text: "विक्रमादित्य I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुलकेशिन I ने 543 ईस्वी में वातापी (बादामी) को अपनी राजधानी बनाकर चालुक्य वंश की स्थापना की थी।"
    },
    {
        question: "राष्ट्रकूट वंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "दंतिदुर्ग", correct: true },
            { text: "कृष्ण I", correct: false },
            { text: "अमोघवर्ष I", correct: false },
            { text: "ध्रुव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 753 ईस्वी में दंतिदुर्ग ने चालुक्यों को पराजित कर राष्ट्रकूट वंश की स्थापना की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> उसकी राजधानी मान्यखेत थी।"
    },
    {
        question: "एलोरा में स्थित प्रसिद्ध 'कैलाश मंदिर' का निर्माण किस राष्ट्रकूट शासक ने करवाया था?",
        answers: shuffle([
            { text: "दंतिदुर्ग", correct: false },
            { text: "कृष्ण I", correct: true },
            { text: "अमोघवर्ष I", correct: false },
            { text: "ध्रुव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एलोरा का कैलाश मंदिर, जो अपनी एकाश्म वास्तुकला के लिए प्रसिद्ध है, राष्ट्रकूट शासक कृष्ण I (756-774 ईस्वी) द्वारा बनवाया गया था।"
    },
    {
        question: "चोल राजवंश का राजकीय चिन्ह क्या था?",
        answers: shuffle([
            { text: "बाघ", correct: true },
            { text: "धनुष", correct: false },
            { text: "मछली", correct: false },
            { text: "हाथी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोलों का राजकीय चिन्ह बाघ था, जबकि चेरों का धनुष और पांड्यों का मछली था।"
    },
    {
        question: "पांड्य राजवंश का राजकीय चिन्ह क्या था?",
        answers: shuffle([
            { text: "बाघ", correct: false },
            { text: "धनुष", correct: false },
            { text: "मछली", correct: true },
            { text: "हाथी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मछली पांड्यों का राजकीय चिन्ह था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उनके सिक्कों और मुहरों पर भी अंकित होता था।"
    },
    {
        question: "प्रसिद्ध ऐहोल अभिलेख किस चालुक्य शासक से संबंधित है?",
        answers: shuffle([
            { text: "पुलकेशिन I", correct: false },
            { text: "पुलकेशिन II", correct: true },
            { text: "विक्रमादित्य I", correct: false },
            { text: "विक्रमादित्य II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऐहोल अभिलेख पुलकेशिन II के दरबारी कवि रविकीर्ति द्वारा रचित है, जिसमें उसके शासनकाल की उपलब्धियों, विशेषकर हर्षवर्धन पर उसकी विजय, का वर्णन है।"
    },
    {
        question: "पल्लव और चालुक्य वंश के बीच लंबे समय तक चले संघर्ष का आरंभ किस पल्लव शासक ने किया था?",
        answers: shuffle([
            { text: "सिंहविष्णु", correct: false },
            { text: "महेंद्रवर्मन I", correct: true },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "परमेश्वरवर्मन I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महेंद्रवर्मन I के शासनकाल (लगभग 600 ईस्वी) में ही चालुक्य शासक पुलकेशिन II के साथ संघर्ष की शुरुआत हुई थी।"
    },
    {
        question: "चालुक्य शासक पुलकेशिन II ने हर्षवर्धन को किस नदी के तट पर पराजित किया था?",
        answers: shuffle([
            { text: "कावेरी", correct: false },
            { text: "कृष्णा", correct: false },
            { text: "नर्मदा", correct: true },
            { text: "गोदावरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 618 ईस्वी में पुलकेशिन II ने हर्षवर्धन को नर्मदा नदी के तट पर पराजित किया था, जिससे हर्षवर्धन का दक्षिण की ओर विस्तार रुक गया।"
    },
    {
        question: "किस पल्लव शासक को 'मत्तविलास प्रहसन' नामक व्यंग्य नाटक के लेखक के रूप में जाना जाता है?",
        answers: shuffle([
            { text: "सिंहविष्णु", correct: false },
            { text: "महेंद्रवर्मन I", correct: true },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महेंद्रवर्मन I एक कुशल कलाकार और लेखक था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने 'मत्तविलास प्रहसन' नामक एक संस्कृत व्यंग्य नाटक की रचना की थी।"
    },
    {
        question: "'विक्रमांकदेवचरित' नामक ग्रंथ की रचना किसने की थी, जो पश्चिमी चालुक्य शासक विक्रमादित्य VI की जीवनी है?",
        answers: shuffle([
            { text: "बिल्हण", correct: true },
            { text: "दंडी", correct: false },
            { text: "रविकीर्ति", correct: false },
            { text: "भारवि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिल्हण पश्चिमी चालुक्य शासक विक्रमादित्य VI के दरबारी कवि थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने 'विक्रमांकदेवचरित' नामक एक महाकाव्य की रचना की थी।"
    },
    {
        question: "राष्ट्रकूट वंश की राजधानी क्या थी?",
        answers: shuffle([
            { text: "वातापी", correct: false },
            { text: "कांची", correct: false },
            { text: "मान्यखेत", correct: true },
            { text: "तंजौर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दंतिदुर्ग द्वारा स्थापित राष्ट्रकूट वंश की राजधानी मान्यखेत (आधुनिक मालखेड़, कर्नाटक) थी।"
    },
    {
        question: "किस चोल शासक ने 'गंगईकोंडचोल' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "विजयालय", correct: false },
            { text: "राजराजा I", correct: false },
            { text: "राजेन्द्र चोल I", correct: true },
            { text: "कुलोत्तुंग चोल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजेन्द्र चोल I ने गंगा नदी के तट तक उत्तरी भारत के राज्यों पर विजय प्राप्त की थी, जिसके बाद उसने 'गंगईकोंडचोल' (गंगा को जीतने वाला चोल) की उपाधि धारण की।"
    },
    {
        question: "तंजौर में प्रसिद्ध 'बृहदेश्वर मंदिर' का निर्माण किस चोल शासक ने करवाया था?",
        answers: shuffle([
            { text: "विजयालय", correct: false },
            { text: "राजराजा I", correct: true },
            { text: "राजेन्द्र चोल I", correct: false },
            { text: "कुलोत्तुंग चोल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजराजा I ने तंजौर में बृहदेश्वर मंदिर (राजराजेश्वर मंदिर) का निर्माण करवाया था, जो चोल वास्तुकला का एक उत्कृष्ट उदाहरण है।"
    },
    {
        question: "किस राष्ट्रकूट शासक ने जैन धर्म को संरक्षण दिया और 'कविराजमार्ग' नामक ग्रंथ की रचना की?",
        answers: shuffle([
            { text: "दंतिदुर्ग", correct: false },
            { text: "कृष्ण I", correct: false },
            { text: "अमोघवर्ष I", correct: true },
            { text: "ध्रुव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमोघवर्ष I (814-878 ईस्वी) राष्ट्रकूट वंश का एक महान शासक था।<br><br><i class='fa-solid fa-angles-right icon'></i> वह स्वयं एक विद्वान था और उसने कन्नड़ भाषा में 'कविराजमार्ग' की रचना की।<br><br><i class='fa-solid fa-angles-right icon'></i> वह जैन धर्म का अनुयायी था।"
    },
    {
        question: "मामल्लपुरम (महाबलीपुरम) के प्रसिद्ध रथ मंदिर किस शैली में निर्मित हैं?",
        answers: shuffle([
            { text: "द्रविड़ शैली", correct: false },
            { text: "पल्लव शैली", correct: true },
            { text: "वेसर शैली", correct: false },
            { text: "होयसल शैली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाबलीपुरम के रथ मंदिर पल्लव शैली की वास्तुकला के उदाहरण हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इन मंदिरों में चट्टानों को काटकर एक ही पत्थर से मूर्तियों का निर्माण किया गया था, जिसे 'एकाश्म' कहा जाता है।"
    },
    {
        question: "संगम काल में 'चेर' वंश का राजकीय चिन्ह क्या था?",
        answers: shuffle([
            { text: "बाघ", correct: false },
            { text: "धनुष", correct: true },
            { text: "मछली", correct: false },
            { text: "हाथी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चेर वंश का राजकीय चिन्ह धनुष था, जो उनके युद्ध कौशल और शिकारी संस्कृति को दर्शाता है।"
    },
    {
        question: "किस पल्लव शासक ने चालुक्य राजधानी वातापी पर अधिकार कर 'वातापीकोंड' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: true },
            { text: "नरसिंहवर्मन II", correct: false },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नरसिंहवर्मन I ने चालुक्य शासक पुलकेशिन II को पराजित किया और उसकी राजधानी वातापी पर कब्जा कर लिया, जिसके बाद उसने 'वातापीकोंड' (वातापी का विजेता) की उपाधि धारण की।"
    },
    {
        question: "बादामी के चालुक्यों का कौन सा शासक पल्लवों पर अपनी विजय के लिए प्रसिद्ध था?",
        answers: shuffle([
            { text: "पुलकेशिन I", correct: false },
            { text: "कीर्तिवर्मन I", correct: false },
            { text: "विक्रमादित्य I", correct: false },
            { text: "विक्रमादित्य II", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चालुक्य शासक विक्रमादित्य II ने तीन बार पल्लव राजधानी कांची पर हमला किया और उस पर अधिकार किया।<br><br><i class='fa-solid fa-angles-right icon'></i> उसकी इस विजय का उल्लेख उसकी रानी लोकमहादेवी द्वारा बनवाए गए विरुपाक्ष मंदिर अभिलेखों में मिलता है।"
    },
    {
        question: "किस चोल शासक ने श्रीलंका के उत्तरी भाग पर विजय प्राप्त की और उसे अपने साम्राज्य का एक प्रांत बनाया?",
        answers: shuffle([
            { text: "विजयालय", correct: false },
            { text: "राजराजा I", correct: true },
            { text: "राजेन्द्र चोल I", correct: false },
            { text: "कुलोत्तुंग चोल I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजराजा I ने श्रीलंका के उत्तरी भाग पर आक्रमण कर उसे अपने साम्राज्य में मिला लिया था।"
    },
    {
        question: "संगम युग में 'तोल्काप्पियम' नामक प्रसिद्ध तमिल व्याकरण ग्रंथ की रचना किसने की थी?",
        answers: shuffle([
            { text: "तोल्काप्पियर", correct: true },
            { text: "इलंगो अडिगल", correct: false },
            { text: "तिरुवल्लुवर", correct: false },
            { text: "कपिला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तोल्काप्पियम' संगम काल का सबसे पुराना उपलब्ध तमिल व्याकरण ग्रंथ है, जिसकी रचना तोल्काप्पियर ने की थी।"
    },
    {
        question: "किस चोल शासक के शासनकाल में स्थानीय स्वशासन की विस्तृत जानकारी 'उत्तरमेरूर अभिलेख' से मिलती है?",
        answers: shuffle([
            { text: "विजयालय", correct: false },
            { text: "राजराजा I", correct: false },
            { text: "राजेन्द्र चोल I", correct: false },
            { text: "परंतक I", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परंतक I के शासनकाल (907-955 ईस्वी) के उत्तरमेरूर अभिलेख में चोल प्रशासन के ग्राम-सभाओं और स्थानीय स्वशासन के बारे में विस्तृत नियम और जानकारी दी गई है।"
    },
    {
        question: "किस चोल शासक ने अपनी नौसेना के बल पर श्रीविजय (जावा, सुमात्रा) साम्राज्य के खिलाफ नौसैनिक अभियान चलाया था?",
        answers: shuffle([
            { text: "राजराजा I", correct: false },
            { text: "राजेन्द्र चोल I", correct: true },
            { text: "राजराजा II", correct: false },
            { text: "कुलोत्तुंग चोल I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजेन्द्र चोल I (1014-1044 ईस्वी) ने अपनी शक्तिशाली नौसेना का उपयोग करके दक्षिण-पूर्व एशिया में स्थित श्रीविजय साम्राज्य के खिलाफ सफलतापूर्वक नौसैनिक अभियान चलाया था।"
    },
    {
        question: "पूर्वी चालुक्य वंश (वेंगी के चालुक्य) का संस्थापक कौन था?",
        answers: shuffle([
            { text: "पुलकेशिन II", correct: false },
            { text: "विष्णुवर्धन", correct: true },
            { text: "विक्रमादित्य I", correct: false },
            { text: "जयसिंह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुलकेशिन II के भाई विष्णुवर्धन ने 624 ईस्वी में पूर्वी चालुक्य वंश की स्थापना की थी, जिसकी राजधानी वेंगी थी।"
    },
    {
        question: "बादामी के चालुक्यों ने किस स्थान पर मंदिर वास्तुकला की \"वेसर शैली\" विकसित की, जहाँ चालुक्य शैली के कई मंदिर स्थित हैं?",
        answers: shuffle([
            { text: "महाबलीपुरम", correct: false },
            { text: "कांची", correct: false },
            { text: "बादामी", correct: false },
            { text: "पट्टडकल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पट्टडकल (आधुनिक कर्नाटक) में चालुक्यों ने मंदिर वास्तुकला की वेसर शैली को विकसित किया, जो द्रविड़ और नागर शैलियों का मिश्रण है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ विरुपाक्ष मंदिर और मल्लिकार्जुन मंदिर प्रसिद्ध हैं।"
    },
    {
        question: "चोल प्रशासन में सबसे छोटी इकाई 'उर' के बाद अगली बड़ी इकाई क्या थी?",
        answers: shuffle([
            { text: "नाडु", correct: false },
            { text: "वलनाडु", correct: false },
            { text: "कुर्रम", correct: true },
            { text: "मंडलम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोल प्रशासन में 'ग्राम' (उर) सबसे छोटी इकाई थी।<br><br><i class='fa-solid fa-angles-right icon'></i> कई गाँवों को मिलाकर 'कुर्रम' (संघ) बनता था।"
    },
    {
        question: "मामल्लपुरम का प्रसिद्ध 'शोर मंदिर' (Shore Temple) किस पल्लव शासक के शासनकाल में बनाया गया था?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "नरसिंहवर्मन II (राजसिंह)", correct: true },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नरसिंहवर्मन II, जिसे 'राजसिंह' के नाम से भी जाना जाता है, के शासनकाल में महाबलीपुरम का प्रसिद्ध Shore Temple (तटीय मंदिर) और कांची का कैलाशनाथ मंदिर बनाया गया था।"
    },
    {
        question: "कांची के प्रसिद्ध 'कैलाशनाथ मंदिर' का निर्माण किसने करवाया था?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "नरसिंहवर्मन II", correct: true },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कांची का कैलाशनाथ मंदिर पल्लव वास्तुकला का एक उत्कृष्ट उदाहरण है, जिसे नरसिंहवर्मन II ने बनवाया था।"
    },
    {
        question: "राष्ट्रकूट, पाल और प्रतिहारों के बीच 'त्रिपक्षीय संघर्ष' किस क्षेत्र पर नियंत्रण के लिए हुआ था?",
        answers: shuffle([
            { text: "दक्षिण भारत", correct: false },
            { text: "कन्नौज", correct: true },
            { text: "कलिंग", correct: false },
            { text: "बंगाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रकूट, पाल (बंगाल) और गुर्जर-प्रतिहार (मालवा) के बीच लगभग 200 वर्षों तक कन्नौज पर अधिकार के लिए संघर्ष चला, जिसे त्रिपक्षीय संघर्ष कहा जाता है।"
    },
    {
        question: "किस राष्ट्रकूट शासक ने त्रिपक्षीय संघर्ष में भाग लिया और प्रतिहार शासक वत्सराज को पराजित किया?",
        answers: shuffle([
            { text: "दंतिदुर्ग", correct: false },
            { text: "कृष्ण I", correct: false },
            { text: "ध्रुव", correct: true },
            { text: "गोविंद III", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्रुव (780-793 ईस्वी) राष्ट्रकूटों का पहला शासक था जिसने त्रिपक्षीय संघर्ष में भाग लिया और उत्तर भारत में गुर्जर-प्रतिहार शासक वत्सराज को पराजित किया।"
    },
    {
        question: "चोल प्रशासन में 'एरिपति' क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का कर", correct: false },
            { text: "तालाबों की देखरेख करने वाला एक अधिकारी", correct: true },
            { text: "व्यापारियों का एक समूह", correct: false },
            { text: "एक प्रकार का सैनिक दल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'एरिपति' चोल प्रशासन में तालाबों और सिंचाई के साधनों की देखरेख के लिए जिम्मेदार एक अधिकारी था।"
    },
    {
        question: "किस पल्लव शासक ने चालुक्य शासक पुलकेशिन II को पराजित कर 'वातापीकोंड' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: true },
            { text: "नरसिंहवर्मन II", correct: false },
            { text: "परमेश्वरवर्मन I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नरसिंहवर्मन I ने 642 ईस्वी में पुलकेशिन II को पराजित कर मार डाला और चालुक्यों की राजधानी वातापी पर अधिकार कर लिया, जिसके बाद उसने 'वातापीकोंड' की उपाधि धारण की।"
    },
    {
        question: "चालुक्य-पल्लव संघर्ष के दौरान, पल्लव शासक महेंद्रवर्मन I को किसने पराजित किया था?",
        answers: shuffle([
            { text: "पुलकेशिन I", correct: false },
            { text: "पुलकेशिन II", correct: true },
            { text: "विक्रमादित्य I", correct: false },
            { text: "विक्रमादित्य II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुलकेशिन II ने पल्लव शासक महेंद्रवर्मन I को हराया और पल्लव साम्राज्य के उत्तरी भाग पर कब्जा कर लिया।"
    },
    {
        question: "'अमोघवृत्ति' नामक जैन ग्रंथ की रचना किस राष्ट्रकूट शासक ने की थी?",
        answers: shuffle([
            { text: "दंतिदुर्ग", correct: false },
            { text: "कृष्ण I", correct: false },
            { text: "अमोघवर्ष I", correct: true },
            { text: "गोविंद III", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रकूट शासक अमोघवर्ष I एक कुशल विद्वान था जिसने कन्नड़ में 'कविराजमार्ग' और संस्कृत में 'अमोघवृत्ति' जैसे ग्रंथों की रचना की थी।"
    },
    {
        question: "चोल कला का उत्कृष्ट उदाहरण, 'नटराज' की प्रसिद्ध कांस्य प्रतिमा किस देवता का प्रतिनिधित्व करती है?",
        answers: shuffle([
            { text: "विष्णु", correct: false },
            { text: "ब्रह्मा", correct: false },
            { text: "शिव", correct: true },
            { text: "मुरुगन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नटराज की प्रतिमा में भगवान शिव को ब्रह्मांडीय नर्तक के रूप में दर्शाया गया है, जो चोल कला का एक उत्कृष्ट नमूना है।"
    },
    {
        question: "मध्यकालीन चोल वंश का संस्थापक कौन था, जिसने तंजौर पर अधिकार कर उसे अपनी राजधानी बनाया?",
        answers: shuffle([
            { text: "राजराजा I", correct: false },
            { text: "राजेन्द्र चोल I", correct: false },
            { text: "विजयालय", correct: true },
            { text: "आदित्य I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 850 ईस्वी के आसपास विजयालय ने पल्लवों से तंजौर छीनकर मध्यकालीन चोल साम्राज्य की स्थापना की थी।"
    },
    {
        question: "किस चोल शासक के काल में चोलों की शक्ति और प्रतिष्ठा चरम पर थी, और उसने अपने साम्राज्य का विस्तार दक्षिण-पूर्व एशिया तक किया?",
        answers: shuffle([
            { text: "राजराजा I", correct: false },
            { text: "राजेन्द्र चोल I", correct: true },
            { text: "आदित्य I", correct: false },
            { text: "कुलोत्तुंग चोल I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजेन्द्र चोल I को चोलों का सबसे महान शासक माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उसके शासनकाल में चोलों की नौसेना सबसे शक्तिशाली थी और उसका साम्राज्य दक्षिण-पूर्व एशिया तक फैला था।"
    },
    {
        question: "पल्लव शासक महेंद्रवर्मन I का वह कौन सा प्रसिद्ध नाटक है, जिसमें बौद्ध और जैन धर्म पर व्यंग्य किया गया है?",
        answers: shuffle([
            { text: "दशकुमारचरित", correct: false },
            { text: "किरातार्जुनीयम्", correct: false },
            { text: "मत्तविलास प्रहसन", correct: true },
            { text: "मुद्राराक्षस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मत्तविलास प्रहसन' महेंद्रवर्मन I द्वारा रचित एक संस्कृत व्यंग्य नाटक है, जो कापालिक और बौद्ध भिक्षुओं के जीवन पर कटाक्ष करता है।"
    },
    {
        question: "किस राष्ट्रकूट शासक के शासनकाल में अरब यात्री सुलेमान ने भारत की यात्रा की थी और उसे दुनिया के चार महानतम राजाओं में से एक माना था?",
        answers: shuffle([
            { text: "दंतिदुर्ग", correct: false },
            { text: "कृष्ण I", correct: false },
            { text: "अमोघवर्ष I", correct: true },
            { text: "गोविंद III", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमोघवर्ष I के शासनकाल में आए अरब यात्री सुलेमान ने उसकी प्रशंसा करते हुए उसे उस समय के विश्व के चार महान शासकों में से एक बताया था।"
    },
    {
        question: "कांची का प्रसिद्ध 'वैकुंठपेरुमल मंदिर' किस पल्लव शासक ने बनवाया था?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "नरसिंहवर्मन II", correct: false },
            { text: "नंदीवर्मन II", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैकुंठ पेरुमल मंदिर का निर्माण नंदीवर्मन II ने करवाया था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मंदिर पल्लव वास्तुकला और मूर्तिकला का एक महत्वपूर्ण उदाहरण है।"
    },
    {
        question: "चालुक्य राजधानी वातापी को किसने ध्वस्त किया था?",
        answers: shuffle([
            { text: "राजराजा I", correct: false },
            { text: "राजेन्द्र चोल I", correct: false },
            { text: "नरसिंहवर्मन I", correct: true },
            { text: "कृष्ण I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पल्लव शासक नरसिंहवर्मन I ने चालुक्य शासक पुलकेशिन II को पराजित कर उसकी राजधानी वातापी को नष्ट कर दिया था।"
    },
    {
        question: "चोल साम्राज्य में 'नाडु' नामक प्रशासनिक इकाई क्या थी?",
        answers: shuffle([
            { text: "गाँवों का समूह", correct: true },
            { text: "जिलों का समूह", correct: false },
            { text: "प्रांतों का समूह", correct: false },
            { text: "राज्यों का समूह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोल प्रशासन में 'नाडु' कई गाँवों का समूह होता था, और यह प्रशासन की एक महत्वपूर्ण इकाई थी।"
    },
    {
        question: "किस चोल शासक ने 'गंगईकोंडचोलपुरम' नामक एक नई राजधानी की स्थापना की और एक विशाल मंदिर का निर्माण करवाया?",
        answers: shuffle([
            { text: "राजराजा I", correct: false },
            { text: "राजेन्द्र चोल I", correct: true },
            { text: "आदित्य I", correct: false },
            { text: "विजयालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजेन्द्र चोल I ने उत्तरी भारत पर विजय प्राप्त करने के बाद, 'गंगईकोंडचोल' की उपाधि धारण की और अपनी नई राजधानी गंगईकोंडचोलपुरम की स्थापना की, जहाँ एक विशाल शिव मंदिर बनवाया गया।"
    },
    {
        question: "किस चालुक्य शासक ने पल्लव राजधानी कांची पर तीन बार आक्रमण किया और उसे पराजित किया?",
        answers: shuffle([
            { text: "पुलकेशिन I", correct: false },
            { text: "पुलकेशिन II", correct: false },
            { text: "विक्रमादित्य I", correct: false },
            { text: "विक्रमादित्य II", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्रमादित्य II ने अपने शासनकाल में तीन बार पल्लव राजधानी कांची पर हमला किया और उसे जीता।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने कांची के मंदिरों को नष्ट करने के बजाय दान भी दिया था।"
    },
    {
        question: "राष्ट्रकूट शासकों ने किस धर्म को संरक्षण दिया था?",
        answers: shuffle([
            { text: "शैव धर्म", correct: false },
            { text: "वैष्णव धर्म", correct: false },
            { text: "जैन धर्म", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रकूट शासक शैव, वैष्णव और जैन धर्मों के प्रति सहिष्णु थे।<br><br><i class='fa-solid fa-angles-right icon'></i> एलोरा का कैलाश मंदिर (शैव) और अमोघवर्ष जैसे शासकों का जैन धर्म के प्रति झुकाव इसका प्रमाण है।"
    },
    {
        question: "संगम युग के चेर शासकों का सबसे प्रसिद्ध बंदरगाह कौन सा था, जिसका उल्लेख ग्रीक और रोमन लेखकों ने भी किया है?",
        answers: shuffle([
            { text: "पुहार", correct: false },
            { text: "मुजिरीस", correct: true },
            { text: "कोरकई", correct: false },
            { text: "कावेरीपट्टनम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुजिरीस चेर शासकों का सबसे महत्वपूर्ण बंदरगाह था, जो मसालों के व्यापार के लिए प्रसिद्ध था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका उल्लेख ग्रीक और रोमन लेखों में भी मिलता है।"
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