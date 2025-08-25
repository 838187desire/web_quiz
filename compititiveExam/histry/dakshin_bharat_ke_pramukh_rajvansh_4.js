const questions = [
    {
        topHeading: "दक्षिण भारत के प्रमुख राजवंश पर आधारित बहुविकल्पी प्रश्न part 4 (quiz_no.92)"
    },
    {
        question: "'बृहदेश्वर मंदिर' (तंजौर) किस शैली की वास्तुकला का उदाहरण है?",
        answers: shuffle([
            { text: "नागर शैली", correct: false },
            { text: "वेसर शैली", correct: false },
            { text: "द्रविड़ शैली", correct: true },
            { text: "होयसल शैली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तंजौर का बृहदेश्वर मंदिर, जो चोल शासक राजराजा I द्वारा बनवाया गया था, द्रविड़ वास्तुकला की एक उत्कृष्ट कृति है।"
    },
    {
        question: "'गोलकुंडा' के कुतुबशाही शासकों को किस भाषा के साहित्य को संरक्षण देने के लिए जाना जाता है?",
        answers: shuffle([
            { text: "फारसी", correct: false },
            { text: "उर्दू", correct: false },
            { text: "तेलुगु", correct: true },
            { text: "कन्नड़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोलकुंडा के कुतुबशाही शासकों ने फारसी के साथ-साथ तेलुगु साहित्य को भी संरक्षण दिया, जिससे इस क्षेत्र में एक मिश्रित संस्कृति का विकास हुआ।"
    },
    {
        question: "किस चोल शासक ने 'मदुरैकोंड' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "आदित्य I", correct: false },
            { text: "परंतक I", correct: true },
            { text: "राजराजा I", correct: false },
            { text: "राजेन्द्र चोल I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परंतक I ने पांड्यों की राजधानी मदुरै पर विजय प्राप्त करने के बाद 'मदुरैकोंड' (मदुरै को जीतने वाला) की उपाधि धारण की थी।"
    },
    {
        question: "विजयनगर साम्राज्य का सबसे शक्तिशाली शासक कौन था, जिसके समय में साम्राज्य अपनी समृद्धि और शक्ति की पराकाष्ठा पर था?",
        answers: shuffle([
            { text: "हरिहर I", correct: false },
            { text: "देवराय II", correct: false },
            { text: "कृष्णदेव राय", correct: true },
            { text: "रामराय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृष्णदेव राय (1509-1529 ईस्वी) को विजयनगर साम्राज्य का सबसे महान शासक माना जाता है, जिसके शासनकाल में साम्राज्य का सबसे अधिक विस्तार और विकास हुआ।"
    },
    {
        question: "'अराविदु' वंश के अंतिम शासक कौन थे?",
        answers: shuffle([
            { text: "सदाशिव राय", correct: false },
            { text: "तिरुमल", correct: false },
            { text: "श्रीरंग III", correct: true },
            { text: "रामराय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अराविदु वंश विजयनगर साम्राज्य का चौथा और अंतिम वंश था।<br><br><i class='fa-solid fa-angles-right icon'></i> श्रीरंग III इस वंश का अंतिम शासक था।"
    },
    {
        question: "किस विजयनगर शासक को 'अभिनव भोज' के नाम से भी जाना जाता है?",
        answers: shuffle([
            { text: "हरिहर I", correct: false },
            { text: "देवराय II", correct: false },
            { text: "कृष्णदेव राय", correct: true },
            { text: "सदाशिव राय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृष्णदेव राय को उनकी विद्वत्ता, कला और साहित्य के प्रति उनके प्रेम के कारण 'अभिनव भोज' कहा जाता था।"
    },
    {
        question: "संगम काल में 'मुजिरीस' किस राजवंश का एक प्रसिद्ध बंदरगाह था?",
        answers: shuffle([
            { text: "चोल", correct: false },
            { text: "चेर", correct: true },
            { text: "पांड्य", correct: false },
            { text: "पल्लव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुजिरीस चेर राजवंश का एक प्रमुख बंदरगाह था, जहाँ से रोमन साम्राज्य के साथ व्यापार होता था।"
    },
    {
        question: "'विजयनगर' साम्राज्य का कौन-सा प्रसिद्ध मंदिर अपने संगीत स्तंभों के लिए जाना जाता है?",
        answers: shuffle([
            { text: "विट्ठल स्वामी मंदिर", correct: true },
            { text: "विरुपाक्ष मंदिर", correct: false },
            { text: "हजार राम मंदिर", correct: false },
            { text: "लोटस महल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हम्पी में स्थित विट्ठल स्वामी मंदिर अपने 'संगीत स्तंभों' के लिए प्रसिद्ध है, जिन्हें थपथपाने पर संगीत की ध्वनि उत्पन्न होती है।"
    },
    {
        question: "'तालीकोटा के युद्ध' के बाद विजयनगर साम्राज्य की राजधानी क्या बनी?",
        answers: shuffle([
            { text: "हम्पी", correct: false },
            { text: "पेनुकोंडा", correct: true },
            { text: "चंद्रगिरि", correct: false },
            { text: "वेल्लोर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तालीकोटा के युद्ध में हार के बाद विजयनगर साम्राज्य की राजधानी हम्पी से हटाकर पेनुकोंडा स्थानांतरित कर दी गई थी।"
    },
    {
        question: "'पांड्य' शासकों का किस देश के साथ व्यापारिक संबंध सबसे मजबूत थे?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "रोमन साम्राज्य", correct: true },
            { text: "अरब", correct: false },
            { text: "श्रीलंका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पांड्य शासकों का रोमन साम्राज्य के साथ मजबूत व्यापारिक संबंध थे, जो मोतियों, मसालों और अन्य वस्तुओं का व्यापार करते थे।"
    },
    {
        question: "'अजंता' और 'एलोरा' की गुफाओं में से कौन-सी गुफाएं राष्ट्रकूट शासकों के संरक्षण में बनी थीं?",
        answers: shuffle([
            { text: "अजंता", correct: false },
            { text: "एलोरा", correct: true },
            { text: "दोनों", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एलोरा की गुफाओं में स्थित कैलाश मंदिर जैसे स्थापत्य राष्ट्रकूट शासकों के संरक्षण में बनाए गए थे।"
    },
    {
        question: "किस चालुक्य शासक को 'मल्लेश्वर' की उपाधि मिली थी?",
        answers: shuffle([
            { text: "पुलकेशिन I", correct: false },
            { text: "विक्रमादित्य II", correct: true },
            { text: "तैलप II", correct: false },
            { text: "सोमेश्वर I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्रमादित्य द्वितीय ने 'मल्लेश्वर' और 'कंचिकोड' जैसी उपाधियाँ धारण की थीं।"
    },
    {
        question: "किस पल्लव शासक ने 'वातापीकोंड' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: true },
            { text: "नरसिंहवर्मन II", correct: false },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नरसिंहवर्मन I ने चालुक्य राजधानी वातापी पर विजय प्राप्त करने के बाद 'वातापीकोंड' की उपाधि धारण की थी।"
    },
    {
        question: "'कांची का कैलाशनाथ मंदिर' किस शैली की वास्तुकला का उदाहरण है?",
        answers: shuffle([
            { text: "महेंद्र शैली", correct: false },
            { text: "मामल्ल शैली", correct: false },
            { text: "राजसिंह शैली", correct: true },
            { text: "अपराजित शैली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कांची का कैलाशनाथ मंदिर नरसिंहवर्मन II (राजसिंह) द्वारा बनवाया गया था और यह राजसिंह शैली का एक उत्कृष्ट उदाहरण है।"
    },
    {
        question: "किस विजयनगर शासक ने 'अमुक्तमाल्यदा' नामक ग्रंथ की रचना की थी?",
        answers: shuffle([
            { text: "हरिहर I", correct: false },
            { text: "बुक्का I", correct: false },
            { text: "कृष्णदेव राय", correct: true },
            { text: "देवराय II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अमुक्तमाल्यदा' नामक तेलुगु महाकाव्य की रचना स्वयं कृष्णदेव राय ने की थी।"
    },
    {
        question: "चोल प्रशासन में 'पेरुनगाल' क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का कर", correct: false },
            { text: "एक प्रशासनिक इकाई", correct: false },
            { text: "एक मंदिर का नाम", correct: false },
            { text: "एक उच्च अधिकारी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पेरुनगाल' चोल साम्राज्य में एक उच्च श्रेणी के अधिकारी को कहा जाता था।"
    },
    {
        question: "'संगम काल' के दौरान व्यापारिक संबंध किस देश के साथ सबसे अधिक थे?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "रोमन साम्राज्य", correct: true },
            { text: "मिस्र", correct: false },
            { text: "अरब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संगम काल के दौरान, विशेषकर चेर बंदरगाहों से, रोमन साम्राज्य के साथ बड़े पैमाने पर मसालों और अन्य वस्तुओं का व्यापार होता था।"
    },
    {
        question: "'वेल्लार' नामक कृषक वर्ग किस राजवंश के शासनकाल में प्रमुख था?",
        answers: shuffle([
            { text: "पल्लव", correct: false },
            { text: "चालुक्य", correct: false },
            { text: "चोल", correct: true },
            { text: "पांड्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वेल्लार' चोल समाज में धनी और प्रभावशाली कृषक वर्ग थे, जो प्रशासन में भी महत्वपूर्ण भूमिका निभाते थे।"
    },
    {
        question: "'कदम' राजवंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "मयूरशर्मन", correct: true },
            { text: "काकुस्थवर्मन", correct: false },
            { text: "शांतिवर्मन", correct: false },
            { text: "रविवर्मा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मयूरशर्मन ने 345 ईस्वी के आसपास कदंब राजवंश की स्थापना की थी।"
    },
    {
        question: "'गंगा' वंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "कोक्कुनी वर्मा", correct: false },
            { text: "माधव", correct: true },
            { text: "दुर्विनीत", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माधव को गंगा वंश का संस्थापक माना जाता है, जिसकी राजधानी तालकाडु थी।"
    },
    {
        question: "बहमनी साम्राज्य के किस शासक ने अपनी राजधानी गुलबर्गा से बीदर स्थानांतरित की थी?",
        answers: shuffle([
            { text: "अलाउद्दीन हसन बहमन शाह", correct: false },
            { text: "फिरोज शाह बहमनी", correct: false },
            { text: "अहमद शाह वली", correct: true },
            { text: "कलीमुल्लाह शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अहमद शाह वली ने 1425 ईस्वी में बहमनी साम्राज्य की राजधानी गुलबर्गा से बीदर स्थानांतरित कर दी थी।"
    },
    {
        question: "किस विजयनगर शासक को 'अभिनव भोज' के नाम से भी जाना जाता है?",
        answers: shuffle([
            { text: "हरिहर I", correct: false },
            { text: "देवराय II", correct: false },
            { text: "कृष्णदेव राय", correct: true },
            { text: "सदाशिव राय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृष्णदेव राय को उनकी विद्वत्ता, कला और साहित्य के प्रति उनके प्रेम के कारण 'अभिनव भोज' कहा जाता था।"
    },
    {
        question: "'हजार राम मंदिर' किस विजयनगर शासक ने बनवाया था?",
        answers: shuffle([
            { text: "हरिहर I", correct: false },
            { text: "बुक्का I", correct: false },
            { text: "देवराय II", correct: true },
            { text: "कृष्णदेव राय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हम्पी में स्थित हजार राम मंदिर देवराय II के शासनकाल में बनवाया गया था।"
    },
    {
        question: "'शिल्पादिकारम' में 'कन्नगी' की कहानी किस राजवंश से संबंधित है?",
        answers: shuffle([
            { text: "चोल", correct: false },
            { text: "चेर", correct: false },
            { text: "पांड्य", correct: true },
            { text: "पल्लव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शिल्पादिकारम में कन्नगी की कहानी पांड्य राजवंश से संबंधित है, जिसमें पांड्य राजा द्वारा उसके पति को गलत तरीके से मृत्युदंड दिया जाता है।"
    },
    {
        question: "'वेगी' के पूर्वी चालुक्य किस राजवंश से संबंधित थे?",
        answers: shuffle([
            { text: "बादामी के चालुक्य", correct: true },
            { text: "कल्याणी के चालुक्य", correct: false },
            { text: "राष्ट्रकूट", correct: false },
            { text: "पल्लव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेंगी के पूर्वी चालुक्य बादामी के चालुक्यों से संबंधित थे, जब पुलकेशिन II ने अपने भाई विष्णुवर्धन को वहाँ का शासक नियुक्त किया था।"
    },
    {
        question: "कदंब वंश के संस्थापक मयूरशर्मन ने किस वंश के खिलाफ विद्रोह कर अपनी सत्ता स्थापित की थी?",
        answers: shuffle([
            { text: "पल्लव", correct: true },
            { text: "चालुक्य", correct: false },
            { text: "राष्ट्रकूट", correct: false },
            { text: "गुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कदंब वंश के संस्थापक मयूरशर्मन ने पल्लवों के खिलाफ विद्रोह कर कदंब वंश की स्थापना की थी।"
    },
    {
        question: "'बेलूर' में स्थित 'चेन्नकेशव मंदिर' किस देवता को समर्पित है?",
        answers: shuffle([
            { text: "शिव", correct: false },
            { text: "विष्णु", correct: true },
            { text: "ब्रह्मा", correct: false },
            { text: "सूर्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बेलूर का चेन्नकेशव मंदिर भगवान विष्णु को समर्पित है, जो होयसल वास्तुकला का एक अद्भुत उदाहरण है।"
    },
    {
        question: "'यादव' राजवंश के किस शासक ने 13वीं शताब्दी में अपने साम्राज्य का सबसे अधिक विस्तार किया था?",
        answers: shuffle([
            { text: "भिल्लम V", correct: false },
            { text: "सिंघण II", correct: true },
            { text: "रामचंद्र", correct: false },
            { text: "महादेवा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंघण II (1200-1247 ईस्वी) यादव वंश का सबसे शक्तिशाली शासक था, जिसने अपने साम्राज्य का सबसे अधिक विस्तार किया।"
    },
    {
        question: "'कौटिल्य के अर्थशास्त्र' पर 'राजनीति' नामक टिप्पणी किसने लिखी थी?",
        answers: shuffle([
            { text: "दंडी", correct: false },
            { text: "रविकीर्ति", correct: false },
            { text: "वीर बल्लाल II", correct: false },
            { text: "माधव", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गंगा शासक माधव ने 'कौटिल्य के अर्थशास्त्र' पर 'राजनीति' नामक एक प्रसिद्ध टिप्पणी लिखी थी।"
    },
    {
        question: "बहमनी साम्राज्य के किस शासक को 'जालिम' शासक के रूप में जाना जाता है?",
        answers: shuffle([
            { text: "अलाउद्दीन हसन बहमन शाह", correct: false },
            { text: "अलाउद्दीन हुमायूँ", correct: true },
            { text: "मुहम्मद शाह I", correct: false },
            { text: "फिरोजशाह बहमनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अलाउद्दीन हुमायूँ (1458-1461 ईस्वी) को उसकी क्रूर और दमनकारी नीतियों के कारण 'जालिम' शासक के रूप में जाना जाता है।"
    },
    {
        question: "किस शासक को 'मट्टुर' की उपाधि मिली थी, जो विजयनगर शासक कृष्णदेव राय का प्रतिद्वंद्वी था?",
        answers: shuffle([
            { text: "पुर्तगाली गवर्नर", correct: false },
            { text: "बहमनी सुल्तान", correct: false },
            { text: "गजपति शासक", correct: true },
            { text: "मुस्लिम सुल्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गजपति शासक प्रतापरुद्र देव, जिसने 'मट्टुर' की उपाधि धारण की थी, विजयनगर शासक कृष्णदेव राय का एक प्रमुख प्रतिद्वंद्वी था।"
    },
    {
        question: "'विजयनगर' साम्राज्य के पतन का प्रमुख कारण क्या था?",
        answers: shuffle([
            { text: "आर्थिक संकट", correct: false },
            { text: "पड़ोसी राज्यों का आक्रमण", correct: false },
            { text: "आपसी संघर्ष और तालीकोटा का युद्ध", correct: true },
            { text: "विदेशी आक्रमण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विजयनगर साम्राज्य का पतन तालीकोटा के युद्ध में हार और बाद में अराविदु वंश में आपसी संघर्षों के कारण हुआ।"
    },
    {
        question: "'गंगा' वंश के किस शासक ने श्रवणबेलगोला में 'गोमतेश्वर' की विशाल प्रतिमा बनवाई थी?",
        answers: shuffle([
            { text: "माधव", correct: false },
            { text: "राजमल्ल", correct: false },
            { text: "चामुंडराय", correct: true },
            { text: "दुर्विनीत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गंगा शासक चामुंडराय ने श्रवणबेलगोला में 981 ईस्वी में गोमतेश्वर की विशाल प्रतिमा का निर्माण करवाया था।"
    },
    {
        question: "'बहमनी' शासकों द्वारा निर्मित 'बीदर' का प्रसिद्ध मदरसा किस शासक ने बनवाया था?",
        answers: shuffle([
            { text: "मुहम्मद शाह I", correct: false },
            { text: "महमूद गवान", correct: true },
            { text: "फिरोजशाह बहमनी", correct: false },
            { text: "अहमद शाह वली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बीदर का मदरसा बहमनी साम्राज्य के प्रधानमंत्री महमूद गवान ने 1472 ईस्वी में बनवाया था।"
    },
    {
        question: "'अहोबिलम' नामक धार्मिक स्थल किस राजवंश के शासनकाल में प्रसिद्ध हुआ?",
        answers: shuffle([
            { text: "चालुक्य", correct: true },
            { text: "काकतीय", correct: false },
            { text: "विजयनगर", correct: false },
            { text: "यादव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अहोबिलम में चालुक्यों ने कई मंदिरों का निर्माण करवाया, जिससे यह एक महत्वपूर्ण धार्मिक स्थल बन गया।"
    },
    {
        question: "'तोल्काप्पियम' नामक तमिल ग्रंथ किस पर आधारित है?",
        answers: shuffle([
            { text: "व्याकरण और कविता", correct: true },
            { text: "युद्ध और रणनीति", correct: false },
            { text: "चिकित्सा", correct: false },
            { text: "ज्योतिष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तोल्काप्पियम' संगम काल का सबसे प्राचीन उपलब्ध ग्रंथ है, जो तमिल भाषा के व्याकरण और कविता पर आधारित है।"
    },
    {
        question: "चालुक्य शासक विक्रमादित्य VI के दरबार में 'विज्ञानेश्वर' नामक प्रसिद्ध न्यायविद् ने किस ग्रंथ की रचना की थी?",
        answers: shuffle([
            { text: "मिताक्षरा", correct: true },
            { text: "मुद्राराक्षस", correct: false },
            { text: "लीलावती", correct: false },
            { text: "राजतरंगिणी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विज्ञानेश्वर ने 'मिताक्षरा' नामक ग्रंथ की रचना की थी, जो हिंदू कानून पर एक महत्वपूर्ण टीका है।"
    },
    {
        question: "'विजयनगर' साम्राज्य का कौन-सा शासक 'इमदी देवराय' के नाम से भी जाना जाता है?",
        answers: shuffle([
            { text: "देवराय I", correct: false },
            { text: "देवराय II", correct: true },
            { text: "कृष्णदेव राय", correct: false },
            { text: "अच्युत देव राय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> देवराय II को 'इमदी देवराय' और 'प्रौढ़ देवराय' के नाम से भी जाना जाता था।"
    },
    {
        question: "बहमनी साम्राज्य के किस शासक ने अपनी राजधानी गुलबर्गा से बीदर स्थानांतरित की थी?",
        answers: shuffle([
            { text: "मुहम्मद शाह I", correct: false },
            { text: "फिरोजशाह बहमनी", correct: false },
            { text: "अहमद शाह वली", correct: true },
            { text: "कलीमुल्लाह शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अहमद शाह वली ने 1425 ईस्वी में बहमनी साम्राज्य की राजधानी गुलबर्गा से बीदर स्थानांतरित कर दी थी।"
    },
    {
        question: "किस वंश के शासकों ने 'द्वारसमुद्र' (हलेबिड) को अपनी राजधानी बनाया?",
        answers: shuffle([
            { text: "चोल", correct: false },
            { text: "पल्लव", correct: false },
            { text: "होयसल", correct: true },
            { text: "काकतीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> होयसल राजवंश की राजधानी द्वारसमुद्र (हलेबिड) थी, जहाँ होयसल शैली के कई प्रसिद्ध मंदिर हैं।"
    },
    {
        question: "'कांची' के प्रसिद्ध कैलाशनाथ मंदिर का निर्माण किस पल्लव शासक ने करवाया था?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "नरसिंहवर्मन II", correct: true },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कांची का कैलाशनाथ मंदिर नरसिंहवर्मन II (राजसिंह) द्वारा बनवाया गया था, जो पल्लव वास्तुकला का एक महत्वपूर्ण उदाहरण है।"
    },
    {
        question: "'नागर' शैली के मंदिरों का निर्माण किस वंश के शासकों ने किया था?",
        answers: shuffle([
            { text: "चोल", correct: false },
            { text: "पल्लव", correct: false },
            { text: "चालुक्य", correct: true },
            { text: "राष्ट्रकूट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चालुक्य शासकों ने ऐहोल और पट्टडकल में नागर, द्रविड़ और वेसर, तीनों शैलियों के मंदिरों का निर्माण करवाया था।"
    },
    {
        question: "चोल शासन में 'मंडलम' क्या थी?",
        answers: shuffle([
            { text: "गाँव", correct: false },
            { text: "जिला", correct: false },
            { text: "प्रांत", correct: true },
            { text: "राष्ट्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोल साम्राज्य को कई 'मंडलम' (प्रांतों) में विभाजित किया गया था, जिसका प्रशासन एक राजकुमार या उच्च अधिकारी करता था।"
    },
    {
        question: "'अब्दुर रज्जाक' नामक फारसी यात्री ने किस शासक के शासनकाल में विजयनगर की यात्रा की थी?",
        answers: shuffle([
            { text: "हरिहर I", correct: false },
            { text: "देवराय II", correct: true },
            { text: "कृष्णदेव राय", correct: false },
            { text: "सदाशिव राय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फारसी यात्री अब्दुर रज्जाक ने 1442-1443 ईस्वी में विजयनगर की यात्रा की थी, जब देवराय II का शासन था।"
    },
    {
        question: "'कांची' के प्रसिद्ध वैकुंठ पेरुमल मंदिर का निर्माण किस पल्लव शासक ने करवाया था?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: false },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "नंदीवर्मन II", correct: true },
            { text: "परमेश्वरवर्मन I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैकुंठ पेरुमल मंदिर, जिसे 'नंदीवर्मन मंदिर' भी कहा जाता है, का निर्माण नंदीवर्मन II ने करवाया था।"
    },
    {
        question: "विजयनगर साम्राज्य के शासक 'कृष्णदेव राय' के दरबार में 'तेनालीराम' किस पद पर थे?",
        answers: shuffle([
            { text: "दरबारी कवि", correct: true },
            { text: "मंत्री", correct: false },
            { text: "राजगुरु", correct: false },
            { text: "सेनापति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तेनालीराम विजयनगर साम्राज्य के शासक कृष्णदेव राय के दरबार में एक प्रसिद्ध दरबारी कवि और विदूषक थे।"
    },
    {
        question: "किस चालुक्य शासक ने राष्ट्रकूटों को पराजित कर 'कल्याणी के चालुक्य' वंश की स्थापना की थी?",
        answers: shuffle([
            { text: "पुलकेशिन II", correct: false },
            { text: "विक्रमादित्य II", correct: false },
            { text: "तैलप II", correct: true },
            { text: "जयसिंह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तैलप II ने राष्ट्रकूटों को पराजित कर 973 ईस्वी में कल्याणी के चालुक्य वंश की स्थापना की।"
    },
    {
        question: "किस शासक को 'मत्तविलास प्रहसन' के लेखक के रूप में जाना जाता है?",
        answers: shuffle([
            { text: "महेंद्रवर्मन I", correct: true },
            { text: "नरसिंहवर्मन I", correct: false },
            { text: "नरसिंहवर्मन II", correct: false },
            { text: "नंदीवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महेंद्रवर्मन I ने 'मत्तविलास प्रहसन' नामक एक संस्कृत व्यंग्य नाटक की रचना की थी।"
    },
    {
        question: "'गोलकुंडा' का किला किस राजवंश के शासकों द्वारा बनवाया गया था?",
        answers: shuffle([
            { text: "विजयनगर", correct: false },
            { text: "बहमनी", correct: false },
            { text: "कुतुबशाही", correct: false },
            { text: "काकतीय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोलकुंडा का किला मूल रूप से काकतीय शासकों द्वारा बनवाया गया था, जिसे बाद में बहमनी और कुतुबशाही शासकों ने पुनर्निर्मित किया।"
    },
    {
        question: "'विजयनगर' साम्राज्य का कौन-सा शासक 'आंध्रकवितापितामह' के नाम से जाना जाता था?",
        answers: shuffle([
            { text: "कृष्णदेव राय", correct: false },
            { text: "तेनालीराम", correct: false },
            { text: "अल्लसानी पेद्दन", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अल्लसानी पेद्दन, जो कृष्णदेव राय के 'अष्टदिग्गज' में से एक थे, को 'आंध्रकवितापितामह' की उपाधि मिली थी।"
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