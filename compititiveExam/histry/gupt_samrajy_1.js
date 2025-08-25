const questions = [
    {
        topHeading: "गुप्त साम्राज्य पर आधारित बहुविकल्पी प्रश्न part 1 (quiz_no.81)"
    },
    {
        question: "गुप्त साम्राज्य का संस्थापक कौन था?",
        answers: shuffle([
            { text: "चंद्रगुप्त प्रथम", correct: false },
            { text: "श्रीगुप्त", correct: true },
            { text: "समुद्रगुप्त", correct: false },
            { text: "घटोत्कचगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्रीगुप्त को गुप्त साम्राज्य का संस्थापक माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> हालाँकि, इस वंश का वास्तविक संस्थापक चंद्रगुप्त प्रथम को माना जाता है, क्योंकि उसी ने इसे एक विशाल साम्राज्य का रूप दिया था।"
    },
    {
        question: "गुप्त वंश के किस शासक ने सबसे पहले 'महाराजाधिराज' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "श्रीगुप्त", correct: false },
            { text: "घटोत्कचगुप्त", correct: false },
            { text: "चंद्रगुप्त प्रथम", correct: true },
            { text: "समुद्रगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त प्रथम ने लिच्छवि राजकुमारी कुमारदेवी से विवाह करके अपनी राजनीतिक स्थिति मजबूत की और 'महाराजाधिराज' (राजाओं का राजा) की भव्य उपाधि धारण की।"
    },
    {
        question: "किस गुप्त शासक को 'भारत का नेपोलियन' कहा जाता है?",
        answers: shuffle([
            { text: "चंद्रगुप्त प्रथम", correct: false },
            { text: "समुद्रगुप्त", correct: true },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "स्कंदगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इतिहासकार वी. ए. स्मिथ ने समुद्रगुप्त को उसकी महान सैन्य विजयों और साम्राज्य विस्तार के कारण 'भारत का नेपोलियन' कहा है।<br><br><i class='fa-solid fa-angles-right icon'></i> उसकी विजयों का वर्णन प्रयाग प्रशस्ति में मिलता है।"
    },
    {
        question: "'प्रयाग प्रशस्ति' की रचना किसने की थी, जिसमें समुद्रगुप्त की विजयों का वर्णन है?",
        answers: shuffle([
            { text: "कालिदास", correct: false },
            { text: "हरिषेण", correct: true },
            { text: "बाणभट्ट", correct: false },
            { text: "आर्यभट्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रयाग प्रशस्ति (इलाहाबाद स्तंभ शिलालेख) की रचना समुद्रगुप्त के दरबारी कवि और मंत्री हरिषेण ने संस्कृत में की थी।"
    },
    {
        question: "किस गुप्त शासक को 'कविराज' की उपाधि दी गई थी?",
        answers: shuffle([
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "समुद्रगुप्त", correct: true },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "स्कंदगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समुद्रगुप्त को न केवल एक महान योद्धा माना जाता था, बल्कि वह एक कुशल कवि और संगीतकार भी था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसके कुछ सिक्कों पर उसे वीणा बजाते हुए दिखाया गया है, इसीलिए उसे 'कविराज' कहा जाता है।"
    },
    {
        question: "किस चीनी यात्री ने चंद्रगुप्त द्वितीय के शासनकाल में भारत की यात्रा की थी?",
        answers: shuffle([
            { text: "ह्वेन त्सांग", correct: false },
            { text: "फाह्यान", correct: true },
            { text: "इत्सिंग", correct: false },
            { text: "सुंगयुन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फाह्यान ने लगभग 399 ईस्वी से 414 ईस्वी के बीच भारत की यात्रा की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> वह चंद्रगुप्त द्वितीय के शासनकाल के दौरान भारत आया था, जहाँ उसने गुप्तकालीन समाज, धर्म और प्रशासन का वर्णन किया।"
    },
    {
        question: "किस गुप्त शासक ने 'विक्रमादित्य' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: true },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "स्कंदगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त द्वितीय ने शकों को पराजित करने के बाद 'विक्रमादित्य' की उपाधि धारण की थी, जिसका अर्थ 'सूर्य के समान शक्तिशाली' होता है।"
    },
    {
        question: "गुप्त काल में, 'नवरत्न' किसके दरबार में थे?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त प्रथम", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: true },
            { text: "कुमारगुप्त प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त द्वितीय के दरबार में नौ विद्वानों की एक परिषद थी, जिसे 'नवरत्न' कहा जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> इनमें कालिदास, अमरसिंह और वराहमिहिर जैसे महान विद्वान शामिल थे।"
    },
    {
        question: "'मेघदूत' और 'अभिज्ञानशाकुंतलम्' जैसे प्रसिद्ध ग्रंथों की रचना किसने की?",
        answers: shuffle([
            { text: "विशाखदत्त", correct: false },
            { text: "शूद्रक", correct: false },
            { text: "कालिदास", correct: true },
            { text: "आर्यभट्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालिदास चंद्रगुप्त द्वितीय के नवरत्नों में से एक थे और उन्हें संस्कृत साहित्य का महानतम कवि और नाटककार माना जाता है।"
    },
    {
        question: "गुप्त काल में किस धातु के सिक्के सबसे अधिक जारी किए गए थे?",
        answers: shuffle([
            { text: "सोना", correct: true },
            { text: "चांदी", correct: false },
            { text: "तांबा", correct: false },
            { text: "शीशा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त शासकों ने बड़ी संख्या में सोने के सिक्के जारी किए थे, जिन्हें 'दीनार' कहा जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> ये सिक्के गुणवत्ता और कलात्मकता के लिए प्रसिद्ध हैं।"
    },
    {
        question: "नालंदा विश्वविद्यालय की स्थापना किसने की थी?",
        answers: shuffle([
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "समुद्रगुप्त", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: true },
            { text: "स्कंदगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नालंदा विश्वविद्यालय, जो प्राचीन भारत में शिक्षा का एक प्रमुख केंद्र था, की स्थापना कुमारगुप्त प्रथम ने पाँचवीं शताब्दी ईस्वी में की थी।"
    },
    {
        question: "हूणों का पहला आक्रमण किस गुप्त शासक के शासनकाल में हुआ था?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "स्कंदगुप्त", correct: true },
            { text: "भानुगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हूणों का पहला आक्रमण स्कंदगुप्त के शासनकाल के दौरान हुआ था, जिसका उल्लेख जूनागढ़ अभिलेख में मिलता है।<br><br><i class='fa-solid fa-angles-right icon'></i> स्कंदगुप्त ने सफलतापूर्वक हूणों को पराजित किया था।"
    },
    {
        question: "गुप्त काल में 'दीनार' किस धातु के सिक्के को कहा जाता था?",
        answers: shuffle([
            { text: "चांदी", correct: false },
            { text: "तांबा", correct: false },
            { text: "सोना", correct: true },
            { text: "लोहा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रोमन दीनार से प्रेरित होकर गुप्त शासकों ने सोने के सिक्के जारी किए थे, जिन्हें 'दीनार' कहा जाता था।"
    },
    {
        question: "सुदर्शन झील का जीर्णोद्धार किस गुप्त शासक ने करवाया था?",
        answers: shuffle([
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "समुद्रगुप्त", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "स्कंदगुप्त", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुदर्शन झील का निर्माण मौर्य काल में हुआ था।<br><br><i class='fa-solid fa-angles-right icon'></i> रुद्रदामन I ने इसका जीर्णोद्धार करवाया था, और बाद में स्कंदगुप्त ने भी इसका जीर्णोद्धार करवाया, जिसका उल्लेख जूनागढ़ अभिलेख में है।"
    },
    {
        question: "'मुद्राराक्षस' नामक नाटक की रचना किसने की थी?",
        answers: shuffle([
            { text: "कालिदास", correct: false },
            { text: "विशाखदत्त", correct: true },
            { text: "आर्यभट्ट", correct: false },
            { text: "शूद्रक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विशाखदत्त ने 'मुद्राराक्षस' की रचना की थी, जिसमें मौर्य वंश की स्थापना और चाणक्य की राजनीतिक चालों का वर्णन है।"
    },
    {
        question: "गुप्त काल को 'भारतीय इतिहास का स्वर्ण युग' क्यों कहा जाता है?",
        answers: shuffle([
            { text: "सैन्य विजयों के कारण", correct: false },
            { text: "आर्थिक समृद्धि के कारण", correct: false },
            { text: "कला, साहित्य और विज्ञान के विकास के कारण", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त काल को कला, साहित्य, विज्ञान, प्रशासन और आर्थिक समृद्धि के क्षेत्र में अभूतपूर्व प्रगति के कारण 'भारतीय इतिहास का स्वर्ण युग' कहा जाता है।"
    },
    {
        question: "'दशावतार मंदिर', जो गुप्त काल का एक प्रसिद्ध मंदिर है, कहाँ स्थित है?",
        answers: shuffle([
            { text: "देवगढ़", correct: true },
            { text: "भूमरा", correct: false },
            { text: "भीतरगाँव", correct: false },
            { text: "सांची", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर प्रदेश के देवगढ़ में स्थित दशावतार मंदिर गुप्त काल के मंदिरों में सबसे महत्वपूर्ण है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मंदिर वास्तुकला और मूर्तिकला के लिए प्रसिद्ध है।"
    },
    {
        question: "गुप्त काल में 'भाष्य' लिखने वाले प्रसिद्ध खगोलशास्त्री कौन थे?",
        answers: shuffle([
            { text: "आर्यभट्ट", correct: false },
            { text: "वराहमिहिर", correct: true },
            { text: "ब्रह्मगुप्त", correct: false },
            { text: "धनवंतरि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वराहमिहिर चंद्रगुप्त द्वितीय के दरबार में एक प्रसिद्ध खगोलशास्त्री थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने 'बृहत्संहिता' और 'बृहज्जातक' जैसे ग्रंथों की रचना की।"
    },
    {
        question: "गुप्त काल में 'दाम' किस धातु के सिक्के को कहा जाता था?",
        answers: shuffle([
            { text: "सोना", correct: false },
            { text: "चांदी", correct: false },
            { text: "तांबा", correct: true },
            { text: "लोहा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त काल में सोने के सिक्कों को दीनार, चांदी के सिक्कों को रूपक, और तांबे के सिक्कों को दाम या माषक कहा जाता था।"
    },
    {
        question: "किस गुप्त शासक के शासनकाल में चीनी यात्री ह्वेन त्सांग भारत आया था?",
        answers: shuffle([
            { text: "चंद्रगुप्त प्रथम", correct: false },
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "ह्वेन त्सांग गुप्त काल के बाद आया था।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग गुप्त काल के बाद हर्षवर्धन के शासनकाल में (लगभग 629-645 ईस्वी) भारत आया था।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि चीनी यात्री फाह्यान गुप्त शासक चंद्रगुप्त द्वितीय के शासनकाल में भारत आया था।"
    },
    {
        question: "'एरण अभिलेख' किस गुप्त शासक से संबंधित है, जिसमें सती प्रथा का पहला प्रमाण मिलता है?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "स्कंदगुप्त", correct: false },
            { text: "भानुगुप्त", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 510 ईस्वी के एरण अभिलेख में भानुगुप्त के एक सामंत गोपराज की मृत्यु और उसकी पत्नी के सती होने का उल्लेख है, जो सती प्रथा का पहला अभिलेखीय प्रमाण है।"
    },
    {
        question: "गुप्त काल में 'मंदिर' वास्तुकला की शुरुआत किस शासक के काल में हुई?",
        answers: shuffle([
            { text: "श्रीगुप्त", correct: false },
            { text: "चंद्रगुप्त प्रथम", correct: false },
            { text: "समुद्रगुप्त", correct: true },
            { text: "कुमारगुप्त प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त काल में मंदिर वास्तुकला का विकास समुद्रगुप्त के शासनकाल से शुरू हुआ, जिसमें पत्थर और ईंटों से बने मंदिरों का निर्माण हुआ।"
    },
    {
        question: "'पंचतंत्र' की रचना किसने की थी, जो गुप्त काल की एक महत्वपूर्ण साहित्यिक कृति है?",
        answers: shuffle([
            { text: "विष्णु शर्मा", correct: true },
            { text: "अमरसिंह", correct: false },
            { text: "आर्यभट्ट", correct: false },
            { text: "वराहमिहिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पंचतंत्र' की रचना विष्णु शर्मा ने की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कहानियों का एक संग्रह है, जो अपने नैतिक उपदेशों के लिए विश्व प्रसिद्ध है।"
    },
    {
        question: "गुप्त काल में 'रूपक' किस धातु के सिक्के को कहा जाता था?",
        answers: shuffle([
            { text: "सोना", correct: false },
            { text: "चांदी", correct: true },
            { text: "तांबा", correct: false },
            { text: "लोहा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त द्वितीय ने शकों को हराने के बाद चांदी के सिक्के जारी किए थे, जिन्हें 'रूपक' कहा जाता था।"
    },
    {
        question: "किस गुप्त शासक ने 'अश्वमेध यज्ञ' करवाया था?",
        answers: shuffle([
            { text: "चंद्रगुप्त प्रथम", correct: false },
            { text: "समुद्रगुप्त", correct: true },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समुद्रगुप्त ने अपनी विजयों के बाद 'अश्वमेध यज्ञ' करवाया था, जिसके प्रमाण उसके सिक्कों पर अंकित अश्वमेध यज्ञ की प्रतिमाओं से मिलते हैं।"
    },
    {
        question: "गुप्त काल में 'महायज्ञ' करने वाला अंतिम गुप्त शासक कौन था?",
        answers: shuffle([
            { text: "चंद्रगुप्त प्रथम", correct: false },
            { text: "समुद्रगुप्त", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: true },
            { text: "स्कंदगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुमारगुप्त प्रथम ने अपने शासनकाल में 'अश्वमेध यज्ञ' करवाया था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसके बाद किसी भी गुप्त शासक के अश्वमेध यज्ञ करने का कोई प्रमाण नहीं मिलता, इसलिए उसे 'महायज्ञ' करने वाला अंतिम गुप्त शासक माना जाता है।"
    },
    {
        question: "गुप्त काल में 'महासंधिविग्राहक' का क्या अर्थ था?",
        answers: shuffle([
            { text: "सेनापति", correct: false },
            { text: "न्याय मंत्री", correct: false },
            { text: "शांति और युद्ध का मंत्री", correct: true },
            { text: "राजस्व मंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त प्रशासन में 'महासंधिविग्राहक' एक महत्वपूर्ण पद था, जो शांति और युद्ध की नीतियों का प्रभारी होता था।"
    },
    {
        question: "गुप्त काल में 'भुक्तियाँ' क्या थीं?",
        answers: shuffle([
            { text: "सैनिक टुकड़ियाँ", correct: false },
            { text: "प्रांत या प्रदेश", correct: true },
            { text: "व्यापारिक श्रेणियां", correct: false },
            { text: "गाँव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त साम्राज्य को प्रशासनिक सुविधा के लिए 'भुक्तियों' (प्रांतों) में विभाजित किया गया था, जिनका प्रमुख 'उपारिक' कहलाता था।"
    },
    {
        question: "गुप्त काल की राजधानी क्या थी?",
        answers: shuffle([
            { text: "पाटलिपुत्र", correct: true },
            { text: "मथुरा", correct: false },
            { text: "कन्नौज", correct: false },
            { text: "उज्जैन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त साम्राज्य की राजधानी पाटलिपुत्र (आधुनिक पटना) थी।<br><br><i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त द्वितीय ने उज्जैन को अपनी दूसरी राजधानी बनाया था।"
    },
    {
        question: "गुप्त काल में 'रेशम बुनकरों' की एक श्रेणी का उल्लेख किस अभिलेख में मिलता है?",
        answers: shuffle([
            { text: "प्रयाग प्रशस्ति", correct: false },
            { text: "जूनागढ़ अभिलेख", correct: false },
            { text: "मंदसौर अभिलेख", correct: true },
            { text: "एरण अभिलेख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंदसौर अभिलेख, जो कुमारगुप्त प्रथम के शासनकाल का है, उसमें दशपुर (मंदसौर) के रेशम बुनकरों की एक श्रेणी (गिल्ड) का वर्णन है, जो लाट प्रदेश (गुजरात) से आकर यहाँ बस गए थे।"
    },
    {
        question: "आर्यभट्ट, जो एक महान गणितज्ञ और खगोलशास्त्री थे, किसके समकालीन थे?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: true },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "स्कंदगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आर्यभट्ट, जिन्होंने 'आर्यभटीय' और 'सूर्य सिद्धांत' जैसे ग्रंथों की रचना की, चंद्रगुप्त द्वितीय के शासनकाल के समकालीन थे।"
    },
    {
        question: "गुप्त काल में 'सार्थवाह' किसे कहा जाता था?",
        answers: shuffle([
            { text: "महाजनों को", correct: false },
            { text: "व्यापारियों के काफिले के प्रमुख को", correct: true },
            { text: "सैनिकों को", correct: false },
            { text: "पुरोहितों को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त काल में व्यापारी अक्सर काफिलों में यात्रा करते थे, और उनके प्रमुख को 'सार्थवाह' कहा जाता था।"
    },
    {
        question: "किस गुप्त शासक ने हूणों को पराजित किया था, जिसका उल्लेख जूनागढ़ अभिलेख में मिलता है?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "स्कंदगुप्त", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्कंदगुप्त ने हूणों के आक्रमण को सफलतापूर्वक विफल किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> जूनागढ़ अभिलेख में इसका उल्लेख है कि उसने हूणों को हराकर अपनी प्रजा को सुरक्षित किया था।"
    },
    {
        question: "गुप्त काल में बनी 'भीतरगाँव मंदिर', किस धातु से बना है?",
        answers: shuffle([
            { text: "पत्थर", correct: false },
            { text: "ईंट", correct: true },
            { text: "लकड़ी", correct: false },
            { text: "लोहा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भीतरगाँव (कानपुर, उत्तर प्रदेश) का मंदिर गुप्त काल के ईंटों से बने मंदिरों में सबसे प्रसिद्ध है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह इसकी विशिष्ट वास्तुकला के लिए जाना जाता है।"
    },
    {
        question: "'दशमलव प्रणाली' का विकास किस काल में हुआ?",
        answers: shuffle([
            { text: "मौर्य काल", correct: false },
            { text: "गुप्त काल", correct: true },
            { text: "कुषाण काल", correct: false },
            { text: "वर्धन काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दशमलव प्रणाली और शून्य का आविष्कार गुप्त काल के दौरान हुआ था, जिसका श्रेय आर्यभट्ट को दिया जाता है।"
    },
    {
        question: "'नाट्यशास्त्र' के लेखक भरतमुनि किस काल के थे?",
        answers: shuffle([
            { text: "गुप्त काल", correct: true },
            { text: "मौर्य काल", correct: false },
            { text: "शुंग काल", correct: false },
            { text: "गुप्त काल के समकालीन नहीं थे।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नाट्यशास्त्र, जो भारतीय संगीत, नृत्य और नाटक का सबसे प्राचीन ग्रंथ है, भरतमुनि ने गुप्त काल में लिखा था।"
    },
    {
        question: "गुप्त काल में 'अमरकोश' नामक शब्दकोश की रचना किसने की थी?",
        answers: shuffle([
            { text: "अमरसिंह", correct: true },
            { text: "कालिदास", correct: false },
            { text: "वराहमिहिर", correct: false },
            { text: "धनवंतरि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमरसिंह, जो चंद्रगुप्त द्वितीय के नवरत्नों में से एक थे, उन्होंने संस्कृत के प्रसिद्ध शब्दकोश 'अमरकोश' की रचना की थी।"
    },
    {
        question: "'वृक्षायुर्वेद' (पौधे की चिकित्सा) की रचना किस काल में हुई?",
        answers: shuffle([
            { text: "मौर्य काल", correct: false },
            { text: "गुप्त काल", correct: true },
            { text: "कुषाण काल", correct: false },
            { text: "वर्धन काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वृक्षायुर्वेद', जो पौधों की चिकित्सा से संबंधित एक ग्रंथ है, की रचना गुप्त काल में हुई थी।<br><br><i class='fa-solid fa-angles-right icon'></i> यह विज्ञान और कृषि के क्षेत्र में गुप्त काल की प्रगति को दर्शाता है।"
    },
    {
        question: "गुप्त काल में 'रूपक' किस धातु के सिक्के को कहा जाता था?",
        answers: shuffle([
            { text: "सोना", correct: false },
            { text: "चांदी", correct: true },
            { text: "तांबा", correct: false },
            { text: "शीशा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त द्वितीय ने शकों को पराजित करने के बाद चांदी के सिक्के जारी किए थे, जिन्हें 'रूपक' कहा जाता था।"
    },
    {
        question: "गुप्त काल में 'खगोलशास्त्र' का प्रमुख केंद्र कौनसा था?",
        answers: shuffle([
            { text: "पाटलिपुत्र", correct: false },
            { text: "उज्जैन", correct: true },
            { text: "मथुरा", correct: false },
            { text: "कन्नौज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वराहमिहिर जैसे महान खगोलशास्त्रियों के कारण उज्जैन गुप्त काल में खगोलशास्त्र का एक महत्वपूर्ण केंद्र बन गया था।"
    },
    {
        question: "गुप्त काल में 'मंदिर' वास्तुकला की किस शैली का विकास हुआ?",
        answers: shuffle([
            { text: "द्रविड़ शैली", correct: false },
            { text: "नागर शैली", correct: true },
            { text: "वेसर शैली", correct: false },
            { text: "इंडो-इस्लामिक शैली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त काल में नागर शैली के मंदिर बनना शुरू हुए, जिनकी विशेषता ऊंचे शिखर और गर्भगृह थे।<br><br><i class='fa-solid fa-angles-right icon'></i> देवगढ़ का दशावतार मंदिर इसका प्रमुख उदाहरण है।"
    },
    {
        question: "'सूर्य सिद्धांत' नामक ग्रंथ के लेखक कौन हैं, जो गुप्त काल के हैं?",
        answers: shuffle([
            { text: "वराहमिहिर", correct: false },
            { text: "आर्यभट्ट", correct: true },
            { text: "ब्रह्मगुप्त", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आर्यभट्ट ने 'आर्यभटीय' के साथ-साथ 'सूर्य सिद्धांत' नामक ग्रंथ की भी रचना की थी, जिसमें उन्होंने सूर्य और चंद्र ग्रहण की वैज्ञानिक व्याख्या की।"
    },
    {
        question: "किस गुप्त शासक को 'महेन्द्रादित्य' की उपाधि से जाना जाता है?",
        answers: shuffle([
            { text: "चंद्रगुप्त प्रथम", correct: false },
            { text: "समुद्रगुप्त", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: true },
            { text: "स्कंदगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुमारगुप्त प्रथम ने 'महेन्द्रादित्य' की उपाधि धारण की थी।"
    },
    {
        question: "गुप्त काल में 'पुलिकेशिन द्वितीय' किस वंश का शासक था?",
        answers: shuffle([
            { text: "गुप्त वंश", correct: false },
            { text: "वर्धन वंश", correct: false },
            { text: "चालुक्य वंश", correct: false },
            { text: "उपरोक्त में से कोई नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुलिकेशिन द्वितीय गुप्त काल के बहुत बाद (610-642 ईस्वी) का शासक था, जो चालुक्य वंश से संबंधित था।"
    },
    {
        question: "गुप्त काल में 'फाह्यान' के यात्रा वृत्तांत का मुख्य विषय क्या था?",
        answers: shuffle([
            { text: "गुप्त शासकों की सैन्य शक्ति", correct: false },
            { text: "गुप्त साम्राज्य की आर्थिक स्थिति", correct: false },
            { text: "बौद्ध धर्म और गुप्तकालीन समाज", correct: true },
            { text: "कला और साहित्य का विकास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फाह्यान का मुख्य उद्देश्य बौद्ध ग्रंथों का अध्ययन करना था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने अपने यात्रा वृत्तांत में गुप्त साम्राज्य के बौद्ध धर्म और समाज का वर्णन किया, लेकिन राजा के नाम का उल्लेख नहीं किया।"
    },
    {
        question: "गुप्त काल में 'विष्टि' का क्या अर्थ था?",
        answers: shuffle([
            { text: "धार्मिक कर", correct: false },
            { text: "भूमिकर", correct: false },
            { text: "बेगार या जबरन श्रम", correct: true },
            { text: "व्यापार कर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विष्टि' गुप्त काल में एक प्रकार का कर था, जो जबरन श्रम या बेगार के रूप में लिया जाता था।"
    },
    {
        question: "किस अभिलेख में स्कंदगुप्त को 'शक्रादित्य' कहा गया है?",
        answers: shuffle([
            { text: "जूनागढ़ अभिलेख", correct: false },
            { text: "एरण अभिलेख", correct: false },
            { text: "कहौम स्तंभलेख", correct: false },
            { text: "भीतरी स्तंभलेख", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भीतरी स्तंभलेख में स्कंदगुप्त को 'शक्रादित्य' कहा गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें हूणों के साथ उसके युद्धों का भी उल्लेख है।"
    },
    {
        question: "गुप्त साम्राज्य के पतन का प्रमुख कारण क्या था?",
        answers: shuffle([
            { text: "आंतरिक विद्रोह", correct: false },
            { text: "हूणों का आक्रमण", correct: true },
            { text: "आर्थिक संकट", correct: false },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त साम्राज्य के पतन का सबसे महत्वपूर्ण और तात्कालिक कारण मध्य एशिया से आए हूणों के लगातार आक्रमण थे, जिन्होंने साम्राज्य को कमजोर कर दिया।"
    },
    {
        question: "गुप्त काल में 'पुंड्रवर्धन भुक्ति' कहाँ स्थित थी?",
        answers: shuffle([
            { text: "बिहार", correct: false },
            { text: "बंगाल", correct: true },
            { text: "गुजरात", correct: false },
            { text: "पंजाब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पुंड्रवर्धन भुक्ति' गुप्त साम्राज्य का एक प्रांत था, जो आधुनिक बंगाल के क्षेत्र में स्थित था।"
    },
    {
        question: "किस गुप्त शासक ने महरौली के लौह स्तंभ का निर्माण करवाया था, जिसका उल्लेख उस पर मिलता है?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: true },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "स्कंदगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिल्ली में स्थित महरौली का लौह स्तंभ, जिस पर 'चंद्र' नामक राजा का उल्लेख है, को आमतौर पर चंद्रगुप्त द्वितीय से जोड़ा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह स्तंभ धातु विज्ञान में गुप्त काल की प्रगति का उत्कृष्ट उदाहरण है।"
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