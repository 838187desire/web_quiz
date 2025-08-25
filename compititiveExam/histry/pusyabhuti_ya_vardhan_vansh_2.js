const questions = [
    {
        topHeading: "पुष्यभूति वंश या वर्धन वंश पर आधारित बहुविकल्पी प्रश्न part 2 (quiz_no.86)"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'ग्राम' (गाँव) का प्रमुख अधिकारी कौन होता था?",
        answers: shuffle([
            { text: "ग्रामीक या ग्रामाक्षपटलिक", correct: true },
            { text: "विषयपति", correct: false },
            { text: "उपारिक", correct: false },
            { text: "महाबलाधिकृत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वर्धन प्रशासन में, गाँव सबसे छोटी प्रशासनिक इकाई थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका प्रमुख 'ग्रामीक' या 'ग्रामाक्षपटलिक' कहलाता था।"
    },
    {
        question: "हर्षवर्धन द्वारा प्रयाग में आयोजित 'महामोक्ष परिषद' का मुख्य उद्देश्य क्या था?",
        answers: shuffle([
            { text: "सैन्य शक्ति का प्रदर्शन", correct: false },
            { text: "साम्राज्य का विस्तार", correct: false },
            { text: "दान-पुण्य और धार्मिक चर्चाएँ", correct: true },
            { text: "विदेशी व्यापार को बढ़ावा देना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन प्रयाग में प्रत्येक पाँच वर्ष में एक धार्मिक सभा आयोजित करता था, जिसे महामोक्ष परिषद कहते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> इस सभा में वह अपना सारा खजाना दान कर देता था।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में, कौन सा कर जबरन श्रम के रूप में लिया जाता था?",
        answers: shuffle([
            { text: "हिरण्य", correct: false },
            { text: "भोग", correct: false },
            { text: "विष्टि", correct: true },
            { text: "भाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विष्टि' एक प्रकार का कर था जो गुप्त काल की तरह हर्षवर्धन के शासनकाल में भी प्रचलित था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका अर्थ था बेगार या जबरन श्रम।"
    },
    {
        question: "हर्षवर्धन के दरबार में 'महासेनापति' का पद किसे दिया गया था?",
        answers: shuffle([
            { text: "सिंहनाद", correct: true },
            { text: "कुंतल", correct: false },
            { text: "अवंति", correct: false },
            { text: "भंडी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन के प्रशासन में, 'सिंहनाद' नामक अधिकारी सेना का सर्वोच्च कमांडर या महासेनापति होता था।"
    },
    {
        question: "चीनी यात्री ह्वेन त्सांग ने अपनी पुस्तक में हर्षवर्धन के शासनकाल में किस जाति को 'कृषक' कहा है?",
        answers: shuffle([
            { text: "ब्राह्मण", correct: false },
            { text: "क्षत्रिय", correct: false },
            { text: "वैश्य", correct: true },
            { text: "शूद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग के अनुसार, उस समय वैश्य जाति के लोग मुख्यतः व्यापार और कृषि जैसे कार्यों में लगे हुए थे।"
    },
    {
        question: "हर्षवर्धन के किस नाटक में बौद्ध धर्म की शिक्षाओं का समावेश है?",
        answers: shuffle([
            { text: "रत्नावली", correct: false },
            { text: "प्रियदर्शिका", correct: false },
            { text: "नागानंद", correct: true },
            { text: "हर्षचरित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नागानंद' हर्षवर्धन द्वारा रचित एक नाटक है, जिसमें बौद्ध धर्म से जुड़ी एक बोधिसत्व की कहानी है जो आत्म-बलिदान से नागों को बचाता है।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'सार्थवाह' किसे कहा जाता था?",
        answers: shuffle([
            { text: "व्यापारियों के काफिले का प्रमुख", correct: true },
            { text: "भूमि का अधिकारी", correct: false },
            { text: "सैनिकों का अधिकारी", correct: false },
            { text: "धार्मिक प्रमुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सार्थवाह' उस समय व्यापारियों के काफिले के प्रमुख को कहा जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पद व्यापारिक समुदाय में बहुत महत्वपूर्ण था।"
    },
    {
        question: "ह्वेन त्सांग के अनुसार, हर्षवर्धन के साम्राज्य में किस क्षेत्र में शिक्षा का प्रमुख केंद्र था?",
        answers: shuffle([
            { text: "मथुरा", correct: false },
            { text: "पाटलिपुत्र", correct: false },
            { text: "कन्नौज", correct: false },
            { text: "नालंदा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग ने अपने वृत्तांत में नालंदा विश्वविद्यालय की विस्तृत प्रशंसा की है, जो उस समय शिक्षा का एक विश्व प्रसिद्ध केंद्र था।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'भोग' क्या था?",
        answers: shuffle([
            { text: "भूमिकर", correct: false },
            { text: "एक प्रकार का सैनिक कर", correct: false },
            { text: "राजा को दी जाने वाली दैनिक भेंट", correct: true },
            { text: "न्यायिक दंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भोग' वह कर था जो राजा को फलों, सब्जियों और अन्य दैनिक वस्तुओं के रूप में दिया जाता था।"
    },
    {
        question: "हर्षवर्धन की मृत्यु के बाद उत्तर भारत में कौन से शासक का उदय हुआ?",
        answers: shuffle([
            { text: "यशोवर्मन", correct: true },
            { text: "मिहिरभोज", correct: false },
            { text: "नागभट्ट", correct: false },
            { text: "महिपाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन की मृत्यु के बाद कन्नौज पर कुछ समय के लिए अराजकता रही, जिसके बाद यशोवर्मन नामक एक शासक का उदय हुआ।"
    },
    {
        question: "ह्वेन त्सांग की जीवनी किसने लिखी थी?",
        answers: shuffle([
            { text: "बाणभट्ट", correct: false },
            { text: "इत्सिंग", correct: false },
            { text: "वे-त्सिंग", correct: false },
            { text: "ह्वी ली", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग की जीवनी 'द लाइफ ऑफ ह्वेन त्सांग' उसके मित्र और शिष्य ह्वी ली द्वारा लिखी गई थी।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'ग्रामपति' किसे कहा जाता था?",
        answers: shuffle([
            { text: "गाँव का प्रमुख", correct: true },
            { text: "सैनिक प्रमुख", correct: false },
            { text: "प्रांत का प्रमुख", correct: false },
            { text: "न्याय अधिकारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गाँव के प्रमुख को 'ग्रामीक' या 'ग्रामपति' भी कहा जाता था।"
    },
    {
        question: "हर्षवर्धन के समकालीन किस शासक ने गौड़ शासक शशांक के विरुद्ध उसके साथ गठबंधन किया था?",
        answers: shuffle([
            { text: "पुलकेशिन II", correct: false },
            { text: "भास्करवर्मन", correct: true },
            { text: "देवगुप्त", correct: false },
            { text: "ध्रुवसेन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कामरूप (असम) के शासक भास्करवर्मन ने हर्षवर्धन के साथ मिलकर शशांक को पराजित करने में उसकी सहायता की थी।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में, सेना को कितने भागों में विभाजित किया गया था?",
        answers: shuffle([
            { text: "दो", correct: false },
            { text: "तीन", correct: false },
            { text: "चार", correct: true },
            { text: "पाँच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन की सेना में चार मुख्य अंग थे - पैदल सेना, अश्वारोही सेना, गज सेना और रथ सेना।"
    },
    {
        question: "हर्षवर्धन ने किस शासक को पराजित कर कन्नौज के सिंहासन पर अधिकार किया था?",
        answers: shuffle([
            { text: "शशांक", correct: false },
            { text: "देवगुप्त", correct: true },
            { text: "राज्यवर्धन", correct: false },
            { text: "प्रभाकरवर्धन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मालवा के शासक देवगुप्त ने कन्नौज के शासक ग्रहवर्मन को मारकर वहाँ कब्जा कर लिया था।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में हर्षवर्धन ने देवगुप्त को हरा कर कन्नौज को अपनी राजधानी बनाया।"
    },
    {
        question: "ह्वेन त्सांग ने किस बौद्ध भिक्षु से महायान बौद्ध धर्म की शिक्षा ली थी?",
        answers: shuffle([
            { text: "नागार्जुन", correct: false },
            { text: "वसुबंधु", correct: false },
            { text: "शीलभद्र", correct: true },
            { text: "धर्मपाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नालंदा विश्वविद्यालय में प्रवास के दौरान, ह्वेन त्सांग ने आचार्य शीलभद्र से महायान बौद्ध धर्म की शिक्षा ली थी।"
    },
    {
        question: "'रत्नावली' और 'प्रियदर्शिका' नामक नाटकों के रचयिता कौन हैं?",
        answers: shuffle([
            { text: "बाणभट्ट", correct: false },
            { text: "भवभूति", correct: false },
            { text: "हर्षवर्धन", correct: true },
            { text: "कालिदास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन ने 'रत्नावली' और 'प्रियदर्शिका' जैसे प्रसिद्ध नाटकों की रचना स्वयं की थी।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में, 'भूमि' (Land) को किस नाम से जाना जाता था?",
        answers: shuffle([
            { text: "क्षेत्र", correct: true },
            { text: "वास्तु", correct: false },
            { text: "कृषि", correct: false },
            { text: "भोग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उस समय भूमि को 'क्षेत्र' के नाम से भी जाना जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> कृषियोग्य भूमि को 'क्षेत्र' कहा जाता था।"
    },
    {
        question: "ह्वेन त्सांग की यात्रा के समय भारत में कुल कितने बौद्ध मठ थे?",
        answers: shuffle([
            { text: "लगभग 1000", correct: false },
            { text: "लगभग 3000", correct: false },
            { text: "लगभग 5000", correct: true },
            { text: "लगभग 10000", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग ने अपने वृत्तांत में उल्लेख किया है कि उसके भारत आगमन के समय, यहाँ लगभग 5000 बौद्ध मठ थे।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में, कौन सी फसल सबसे महत्वपूर्ण थी?",
        answers: shuffle([
            { text: "गेहूँ", correct: false },
            { text: "चावल", correct: true },
            { text: "गन्ना", correct: false },
            { text: "कपास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग ने अपने वृत्तांत में उल्लेख किया है कि उस समय चावल भारत की सबसे महत्वपूर्ण फसल थी।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में, 'रेशम' का प्रमुख केंद्र कौन सा था?",
        answers: shuffle([
            { text: "मथुरा", correct: false },
            { text: "काशी", correct: true },
            { text: "मालवा", correct: false },
            { text: "थानेश्वर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग के वृत्तांत से पता चलता है कि उस समय काशी रेशम के उत्पादन और व्यापार का एक प्रमुख केंद्र था।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में, 'अक्षपटलिक' नामक अधिकारी का क्या कार्य था?",
        answers: shuffle([
            { text: "राजस्व संग्रह", correct: false },
            { text: "न्यायिक कार्य", correct: false },
            { text: "अभिलेखों का रखरखाव", correct: true },
            { text: "सैन्य प्रशासन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अक्षपटलिक' गुप्त काल की तरह, वर्धन प्रशासन में भी अभिलेखों, दस्तावेजों और बहीखातों का रखरखाव करता था।"
    },
    {
        question: "किस शासक ने 'महाराजाधिराज' और 'परमभट्टारक' जैसी उपाधियाँ धारण की थीं?",
        answers: shuffle([
            { text: "प्रभाकरवर्धन", correct: true },
            { text: "राज्यवर्धन", correct: false },
            { text: "हर्षवर्धन", correct: false },
            { text: "पुष्यभूति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रभाकरवर्धन, जिसने पुष्यभूति वंश को एक शक्तिशाली राज्य में बदला, ने ही सर्वप्रथम 'महाराजाधिराज' और 'परमभट्टारक' जैसी भव्य उपाधियाँ धारण की थीं।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में, कन्नौज किसलिए प्रसिद्ध था?",
        answers: shuffle([
            { text: "धार्मिक शिक्षा", correct: false },
            { text: "व्यापार और वाणिज्य", correct: false },
            { text: "राजनीतिक और सांस्कृतिक केंद्र", correct: true },
            { text: "सैन्य मुख्यालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन ने अपनी राजधानी थानेश्वर से कन्नौज स्थानांतरित की थी, जिसके बाद यह उत्तर भारत का सबसे महत्वपूर्ण राजनीतिक और सांस्कृतिक केंद्र बन गया था।"
    },
    {
        question: "हर्षवर्धन के साम्राज्य के पतन का एक प्रमुख कारण क्या था?",
        answers: shuffle([
            { text: "सामंतवादी व्यवस्था का उदय", correct: true },
            { text: "हूणों का आक्रमण", correct: false },
            { text: "आर्थिक संकट", correct: false },
            { text: "विदेशी व्यापार का पतन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन के शासनकाल में सामंतवादी व्यवस्था का उदय हुआ था, जिसमें छोटे-छोटे सामंत और जागीरदार मजबूत हो रहे थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उसकी मृत्यु के बाद ये सामंत स्वतंत्र होने लगे, जिससे साम्राज्य का पतन हुआ।"
    },
    {
        question: "हर्षवर्धन की मृत्यु के बाद कौन सा चीनी शासक भारत आया था, जिसने कन्नौज में अराजकता देखी?",
        answers: shuffle([
            { text: "फाह्यान", correct: false },
            { text: "ह्वेन त्सांग", correct: false },
            { text: "इत्सिंग", correct: false },
            { text: "वांग ह्वेन-त्से", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन की मृत्यु के बाद 648 ईस्वी में चीनी दूत वांग ह्वेन-त्से भारत आया था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने कन्नौज में अराजकता और अव्यवस्था देखी और उसने अरुणाश्व नामक शासक को पराजित किया था।"
    },
    {
        question: "'हर्षचरित' में बाणभट्ट ने हर्षवर्धन के पूर्वज के रूप में किस शासक का उल्लेख किया है?",
        answers: shuffle([
            { text: "पुष्यभूति", correct: true },
            { text: "नरवर्धन", correct: false },
            { text: "आदित्यवर्धन", correct: false },
            { text: "प्रभाकरवर्धन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाणभट्ट ने 'हर्षचरित' में पुष्यभूति को इस वंश का संस्थापक और हर्षवर्धन का पूर्वज बताया है।"
    },
    {
        question: "हर्षवर्धन ने किस शासक को पराजित कर कन्नौज पर अधिकार किया था?",
        answers: shuffle([
            { text: "शशांक", correct: false },
            { text: "देवगुप्त", correct: true },
            { text: "ग्रहवर्मन", correct: false },
            { text: "भंडी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मालवा के शासक देवगुप्त ने कन्नौज के राजा ग्रहवर्मन की हत्या कर कन्नौज पर कब्जा कर लिया था।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में, हर्षवर्धन ने देवगुप्त को पराजित कर कन्नौज पर अधिकार कर लिया।"
    },
    {
        question: "ह्वेन त्सांग के अनुसार, हर्षवर्धन के शासनकाल में 'दंड' के रूप में क्या प्रचलित था?",
        answers: shuffle([
            { text: "शारीरिक दंड", correct: false },
            { text: "जुर्माना और कारावास", correct: true },
            { text: "मृत्युदंड", correct: false },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग ने लिखा है कि हर्षवर्धन के शासनकाल में कानून व्यवस्था काफी सख्त थी।<br><br><i class='fa-solid fa-angles-right icon'></i> गंभीर अपराधों के लिए जुर्माना और कारावास का प्रावधान था, लेकिन मृत्युदंड बहुत कम दिया जाता था।"
    },
    {
        question: "हर्षवर्धन ने किस स्थान पर बौद्ध भिक्षुओं के लिए एक महाविहार (मठ) का निर्माण करवाया था?",
        answers: shuffle([
            { text: "नालंदा", correct: true },
            { text: "कन्नौज", correct: false },
            { text: "थानेश्वर", correct: false },
            { text: "भीलसा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि नालंदा विश्वविद्यालय की स्थापना कुमारगुप्त प्रथम ने की थी, लेकिन हर्षवर्धन ने इस महाविहार को उदारतापूर्वक दान दिया और उसके संरक्षण में इसका विकास हुआ।"
    },
    {
        question: "'अंगुलिमाल' और 'शूद्रक' का वर्णन हर्षवर्धन के किस नाटक में मिलता है?",
        answers: shuffle([
            { text: "नागानंद", correct: true },
            { text: "रत्नावली", correct: false },
            { text: "प्रियदर्शिका", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नागानंद' नाटक में 'अंगुलिमाल' जैसे बोधिसत्व के चरित्र और उनकी कहानी का उल्लेख है, जो बौद्ध धर्म से प्रेरित है।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'विषय' नामक प्रशासनिक इकाई का प्रमुख कौन होता था?",
        answers: shuffle([
            { text: "ग्रामीक", correct: false },
            { text: "उपरिक", correct: false },
            { text: "विषयपति", correct: true },
            { text: "महाबलाधिकृत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विषय' (जिला) नामक प्रशासनिक इकाई का प्रमुख 'विषयपति' कहलाता था।"
    },
    {
        question: "ह्वेन त्सांग के अनुसार, हर्षवर्धन के शासनकाल में 'चांदी' के सिक्कों को क्या कहा जाता था?",
        answers: shuffle([
            { text: "दीनार", correct: false },
            { text: "रूपक", correct: false },
            { text: "पण", correct: false },
            { text: "द्रम्म", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग के अनुसार, हर्षवर्धन के शासनकाल में चांदी के सिक्कों को 'द्रम्म' कहा जाता था।"
    },
    {
        question: "हर्षवर्धन के साम्राज्य के पतन का एक प्रमुख कारण क्या था?",
        answers: shuffle([
            { text: "विदेशी व्यापार का पतन", correct: false },
            { text: "सामंतवादी व्यवस्था का मजबूत होना", correct: true },
            { text: "बौद्ध धर्म का ह्रास", correct: false },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन के शासनकाल में सामंतवादी व्यवस्था का उदय हुआ, जिससे केंद्रीय सत्ता कमजोर हुई।<br><br><i class='fa-solid fa-angles-right icon'></i> उसकी मृत्यु के बाद ये सामंत स्वतंत्र हो गए और साम्राज्य का पतन हुआ।"
    },
    {
        question: "'नागानंद' नाटक में हर्षवर्धन ने किस बौद्ध भिक्षु की कथा को आधार बनाया है?",
        answers: shuffle([
            { text: "नागार्जुन", correct: false },
            { text: "बोधिसत्व", correct: true },
            { text: "शीलभद्र", correct: false },
            { text: "वसुबंधु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नागानंद' में हर्षवर्धन ने एक बोधिसत्व (जीमूतवाहन) की कहानी को आधार बनाया है, जो अपनी जान देकर नागों की रक्षा करता है।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में, कौन सा बंदरगाह सबसे महत्वपूर्ण था?",
        answers: shuffle([
            { text: "भृगुकच्छ (भड़ौच)", correct: true },
            { text: "ताम्रलिप्ति", correct: false },
            { text: "कालीकट", correct: false },
            { text: "सोपारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन के शासनकाल में भृगुकच्छ (आधुनिक गुजरात का भड़ौच) पश्चिमी तट पर सबसे महत्वपूर्ण बंदरगाह था।"
    },
    {
        question: "हर्षवर्धन के समय, 'नागरिकों' के लिए कौन सा कर प्रमुख था?",
        answers: shuffle([
            { text: "भाग", correct: false },
            { text: "हिरण्य", correct: true },
            { text: "विष्टि", correct: false },
            { text: "भोग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हिरण्य' एक नकद कर था जो व्यापारियों और गैर-कृषि आय पर लगाया जाता था।"
    },
    {
        question: "ह्वेन त्सांग के अनुसार, हर्षवर्धन के साम्राज्य में किस क्षेत्र में सबसे अधिक बौद्ध मठ थे?",
        answers: shuffle([
            { text: "पंजाब", correct: false },
            { text: "मगध", correct: true },
            { text: "कश्मीर", correct: false },
            { text: "कन्नौज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग ने अपने यात्रा वृत्तांत में मगध (जो बौद्ध धर्म का जन्मस्थान था) में बौद्ध मठों और भिक्षुओं की सबसे अधिक संख्या का उल्लेख किया है।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'भूमिकर' (Land Tax) का क्या नाम था?",
        answers: shuffle([
            { text: "भोग", correct: false },
            { text: "हिरण्य", correct: false },
            { text: "भाग", correct: true },
            { text: "विष्टि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भूमिकर को 'भाग' कहा जाता था, जिसकी दर 1/6 थी।"
    },
    {
        question: "'सूर्य शतक' नामक ग्रंथ की रचना किसने की थी, जो हर्षवर्धन के दरबार से संबंधित थे?",
        answers: shuffle([
            { text: "बाणभट्ट", correct: false },
            { text: "मयूर", correct: true },
            { text: "जयसेन", correct: false },
            { text: "प्रभाकरवर्धन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मयूर, जो हर्षवर्धन के दरबारी कवि थे, ने 'सूर्य शतक' नामक ग्रंथ की रचना की थी, जिसमें उन्होंने सूर्य देव की स्तुति की है।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में न्याय प्रशासन का सर्वोच्च अधिकारी कौन होता था?",
        answers: shuffle([
            { text: "महादंडनायक", correct: false },
            { text: "राजा", correct: true },
            { text: "उपरिक", correct: false },
            { text: "महाबलाधिकृत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त काल की तरह, हर्षवर्धन के शासनकाल में भी राजा ही न्याय प्रशासन का सर्वोच्च अधिकारी होता था।"
    },
    {
        question: "किस चीनी यात्री को 'तीर्थयात्रियों का राजकुमार' कहा जाता है?",
        answers: shuffle([
            { text: "फाह्यान", correct: false },
            { text: "ह्वेन त्सांग", correct: true },
            { text: "इत्सिंग", correct: false },
            { text: "शुआंग युन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग को बौद्ध धर्म की शिक्षा प्राप्त करने के लिए लंबी यात्राएँ करने के कारण 'तीर्थयात्रियों का राजकुमार' कहा जाता है।"
    },
    {
        question: "'हर्षचरित' में बाणभट्ट ने किस गौड़ शासक का उल्लेख किया है, जिसने राज्यवर्धन की हत्या की थी?",
        answers: shuffle([
            { text: "देवगुप्त", correct: false },
            { text: "शशांक", correct: true },
            { text: "भास्करवर्मन", correct: false },
            { text: "पुलकेशिन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हर्षचरित' में शशांक को 'गौड़ाधम' (गौड़ का नीच) कहकर निंदित किया गया है, जिसने धोखे से राज्यवर्धन की हत्या की थी।"
    },
    {
        question: "हर्षवर्धन ने अपनी बहन राज्यश्री को कहाँ से मुक्त करवाया था?",
        answers: shuffle([
            { text: "कन्नौज", correct: false },
            { text: "थानेश्वर", correct: false },
            { text: "विंध्य जंगल", correct: true },
            { text: "मगध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाणभट्ट के अनुसार, जब राज्यवर्धन की मृत्यु हुई, तो राज्यश्री कन्नौज से भागकर विंध्य के जंगलों में चली गई थी।<br><br><i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन ने दिवाकरमित्र नामक एक बौद्ध भिक्षु की मदद से उसे खोजकर बचाया था।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'व्यापारियों' की श्रेणी को क्या कहा जाता था?",
        answers: shuffle([
            { text: "श्रेणी", correct: false },
            { text: "निगम", correct: false },
            { text: "सार्थवाह", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'श्रेणी' और 'निगम' दोनों ही व्यापारियों के संगठनों के लिए प्रयुक्त होते थे, जबकि 'सार्थवाह' व्यापारियों के काफिले के प्रमुख को कहा जाता था।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में, 'अवाप्त' नामक अधिकारी का क्या कार्य था?",
        answers: shuffle([
            { text: "राजस्व संग्रह", correct: false },
            { text: "भूमि अनुदानों का लेखा-जोखा", correct: true },
            { text: "सैन्य प्रशासन", correct: false },
            { text: "न्याय प्रशासन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अवाप्त' नामक अधिकारी भूमि अनुदानों और उनके अभिलेखों का रखरखाव करता था।"
    },
    {
        question: "किस शासक ने अपनी विजयों के बाद 'महाराजाधिराज' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "प्रभाकरवर्धन", correct: true },
            { text: "हर्षवर्धन", correct: false },
            { text: "राज्यवर्धन", correct: false },
            { text: "पुष्यभूति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुष्यभूति वंश में प्रभाकरवर्धन पहला शासक था जिसने अपनी शक्ति का विस्तार किया और 'महाराजाधिराज' की उपाधि धारण की।"
    },
    {
        question: "ह्वेन त्सांग ने अपनी यात्रा के दौरान किस जगह को 'जयनगर' कहा था?",
        answers: shuffle([
            { text: "प्रयाग", correct: false },
            { text: "कन्नौज", correct: false },
            { text: "थानेश्वर", correct: true },
            { text: "कामरूप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग ने अपनी पुस्तक में थानेश्वर को 'जयनगर' के रूप में संदर्भित किया है।"
    },
    {
        question: "हर्षवर्धन ने किस शासक को पराजित कर 'बंगाल' पर अधिकार किया था?",
        answers: shuffle([
            { text: "शशांक", correct: true },
            { text: "देवगुप्त", correct: false },
            { text: "पुलकेशिन II", correct: false },
            { text: "यशोवर्मन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन ने गौड़ शासक शशांक को पराजित कर बंगाल और मगध के कुछ हिस्सों पर अधिकार कर लिया था।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में, 'नालंदा' विश्वविद्यालय को किस लिए जाना जाता था?",
        answers: shuffle([
            { text: "व्यापारिक गतिविधियों के लिए", correct: false },
            { text: "सैन्य प्रशिक्षण के लिए", correct: false },
            { text: "उच्च बौद्ध शिक्षा के लिए", correct: true },
            { text: "कला और मूर्तिकला के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नालंदा विश्वविद्यालय उच्च शिक्षा का एक विश्व प्रसिद्ध केंद्र था, जहाँ बौद्ध धर्म, दर्शन, तर्कशास्त्र, और अन्य विषयों की पढ़ाई होती थी।"
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