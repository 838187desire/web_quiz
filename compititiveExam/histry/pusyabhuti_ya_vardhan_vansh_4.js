const questions = [
    {
        topHeading: "पुष्यभूति वंश या वर्धन वंश पर आधारित बहुविकल्पी प्रश्न part 4 (quiz_no.88)"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'प्रयाग' में आयोजित 'महामोक्ष परिषद' का उल्लेख किस चीनी यात्री ने किया है?",
        answers: shuffle([
            { text: "फाह्यान", correct: false },
            { text: "ह्वेन त्सांग", correct: true },
            { text: "इत्सिंग", correct: false },
            { text: "सुंगयुन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग ने अपने यात्रा वृत्तांत 'सी-यू-की' में प्रयाग में हर्षवर्धन द्वारा आयोजित महामोक्ष परिषद का विस्तृत वर्णन किया है।"
    },
    {
        question: "हर्षवर्धन के किस भाई को 'हूण हरिण केसरी' कहा जाता था?",
        answers: shuffle([
            { text: "पुष्यभूति", correct: false },
            { text: "प्रभाकरवर्धन", correct: true },
            { text: "राज्यवर्धन", correct: false },
            { text: "हर्षवर्धन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाणभट्ट ने अपनी पुस्तक 'हर्षचरित' में प्रभाकरवर्धन को 'हूण हरिण केसरी' (हूण रूपी हिरण के लिए सिंह) कहा है, क्योंकि उसने हूणों को पराजित किया था।"
    },
    {
        question: "'रत्नावली' और 'प्रियदर्शिका' नामक नाटकों के रचयिता कौन हैं?",
        answers: shuffle([
            { text: "बाणभट्ट", correct: false },
            { text: "भवभूति", correct: false },
            { text: "हर्षवर्धन", correct: true },
            { text: "कालिदास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन स्वयं एक कुशल लेखक था और उसने 'रत्नावली', 'प्रियदर्शिका' और 'नागानंद' जैसे तीन प्रसिद्ध नाटकों की रचना की थी।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में, 'अवाप्त' नामक अधिकारी का क्या कार्य था?",
        answers: shuffle([
            { text: "राजस्व संग्रह", correct: false },
            { text: "न्यायिक कार्य", correct: false },
            { text: "भूमि अनुदानों का लेखा-जोखा", correct: true },
            { text: "सैन्य प्रशासन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अवाप्त' नामक अधिकारी भूमि से संबंधित अभिलेखों और अनुदानों का रखरखाव करता था।"
    },
    {
        question: "ह्वेन त्सांग ने अपनी यात्रा के दौरान किस जगह को 'तीर्थयात्रियों का राजकुमार' कहा है?",
        answers: shuffle([
            { text: "नालंदा", correct: false },
            { text: "प्रयाग", correct: false },
            { text: "कन्नौज", correct: false },
            { text: "वह स्वयं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग को 'तीर्थयात्रियों का राजकुमार' कहा जाता है क्योंकि उसने बौद्ध धर्म के पवित्र स्थलों की यात्रा की थी।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'भुक्ति' क्या थी?",
        answers: shuffle([
            { text: "गाँव", correct: false },
            { text: "जिला", correct: false },
            { text: "प्रांत", correct: true },
            { text: "राजधानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भुक्ति' हर्षवर्धन के प्रशासन में प्रांतों के लिए प्रयुक्त होने वाला एक शब्द था, जैसे गुप्त काल में होता था।"
    },
    {
        question: "'बाणभट्ट' किस शासक के दरबारी कवि थे?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "हर्षवर्धन", correct: true },
            { text: "यशोवर्मन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाणभट्ट हर्षवर्धन के दरबारी कवि थे और उन्होंने 'हर्षचरित' और 'कादंबरी' जैसी महान कृतियों की रचना की थी।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'महासंधिविग्रहिक' नामक अधिकारी किस कार्य से संबंधित था?",
        answers: shuffle([
            { text: "राजस्व", correct: false },
            { text: "न्याय", correct: false },
            { text: "विदेश मामले और संधि", correct: true },
            { text: "सेना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महासंधिविग्रहिक' नामक अधिकारी विदेश मामलों और अन्य राज्यों के साथ संधि करने का कार्य करता था।"
    },
    {
        question: "हर्षवर्धन ने किस शासक के साथ मैत्री संधि कर शशांक को पराजित किया था?",
        answers: shuffle([
            { text: "भास्करवर्मन", correct: true },
            { text: "पुलकेशिन II", correct: false },
            { text: "ध्रुवसेन II", correct: false },
            { text: "यशोवर्मन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन ने कामरूप (आधुनिक असम) के शासक भास्करवर्मन के साथ एक मैत्री संधि कर गौड़ शासक शशांक को पराजित किया था।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'भूमिकर' (Land tax) को क्या कहा जाता था?",
        answers: shuffle([
            { text: "हिरण्य", correct: false },
            { text: "भाग", correct: true },
            { text: "भोग", correct: false },
            { text: "विष्टि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भूमिकर को 'भाग' कहा जाता था, जो कुल उपज का 1/6 हिस्सा होता था।"
    },
    {
        question: "हर्षवर्धन की बहन 'राज्यश्री' का विवाह किस शासक से हुआ था?",
        answers: shuffle([
            { text: "देवगुप्त", correct: false },
            { text: "भास्करवर्मन", correct: false },
            { text: "ग्रहवर्मन", correct: true },
            { text: "पुलकेशिन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राज्यश्री का विवाह कन्नौज के मौखरी शासक ग्रहवर्मन से हुआ था।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'अश्वसेना' का प्रमुख अधिकारी कौन होता था?",
        answers: shuffle([
            { text: "महाबलाधिकृत", correct: false },
            { text: "सिंहनाद", correct: false },
            { text: "कुंतल", correct: true },
            { text: "अवंति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन की सेना में 'कुंतल' नामक अधिकारी अश्वसेना का प्रमुख होता था।"
    },
    {
        question: "किस चालुक्य शासक ने हर्षवर्धन को नर्मदा नदी के तट पर पराजित किया था?",
        answers: shuffle([
            { text: "पुलकेशिन I", correct: false },
            { text: "विक्रमादित्य II", correct: false },
            { text: "पुलकेशिन II", correct: true },
            { text: "कीर्तिवर्मन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुलकेशिन II ने 618 ईस्वी में हर्षवर्धन को नर्मदा नदी के तट पर पराजित किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इस विजय का उल्लेख ऐहोल अभिलेख में मिलता है।"
    },
    {
        question: "हर्षवर्धन की मृत्यु किस वर्ष हुई थी?",
        answers: shuffle([
            { text: "647 ईस्वी", correct: true },
            { text: "618 ईस्वी", correct: false },
            { text: "606 ईस्वी", correct: false },
            { text: "629 ईस्वी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन की मृत्यु 647 ईस्वी में हुई थी, जिसके बाद उत्तर भारत में केंद्रीय सत्ता का अंत हो गया।"
    },
    {
        question: "ह्वेन त्सांग ने हर्षवर्धन के लिए किस उपाधि का प्रयोग किया है?",
        answers: shuffle([
            { text: "महाराजाधिराज", correct: false },
            { text: "परमभट्टारक", correct: false },
            { text: "शिलादित्य", correct: true },
            { text: "परमेश्वर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीनी यात्री ह्वेन त्सांग ने अपने वृत्तांत में हर्षवर्धन को 'शीलदित्य' या 'सूर्य के समान' कहा है।"
    },
    {
        question: "'हर्षचरित' में बाणभट्ट ने हर्षवर्धन के पूर्वज के रूप में किस शासक का उल्लेख किया है?",
        answers: shuffle([
            { text: "प्रभाकरवर्धन", correct: false },
            { text: "नरवर्धन", correct: false },
            { text: "पुष्यभूति", correct: true },
            { text: "आदित्यवर्धन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाणभट्ट ने 'हर्षचरित' में पुष्यभूति को इस वंश का संस्थापक बताया है।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'भूमि अनुदान' को क्या कहा जाता था?",
        answers: shuffle([
            { text: "अग्रहार", correct: true },
            { text: "भोग", correct: false },
            { text: "हिरण्य", correct: false },
            { text: "विष्टि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन के शासनकाल में ब्राह्मणों और मंदिरों को कर-मुक्त भूमि अनुदान दिया जाता था, जिसे 'अग्रहार' कहा जाता था।"
    },
    {
        question: "'नालंदा' विश्वविद्यालय का कुलपति कौन था, जिसके पास ह्वेन त्सांग ने शिक्षा प्राप्त की थी?",
        answers: shuffle([
            { text: "नागार्जुन", correct: false },
            { text: "वसुबंधु", correct: false },
            { text: "शीलभद्र", correct: true },
            { text: "धर्मपाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग ने नालंदा विश्वविद्यालय में प्रवास के दौरान आचार्य शीलभद्र से शिक्षा ली थी।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'व्यापारियों' के काफिले के प्रमुख को क्या कहा जाता था?",
        answers: shuffle([
            { text: "श्रेष्ठी", correct: false },
            { text: "सार्थवाह", correct: true },
            { text: "निगम", correct: false },
            { text: "वणिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सार्थवाह' वह अधिकारी होता था जो व्यापारियों के काफिले का नेतृत्व करता था।"
    },
    {
        question: "'नागानंद' नाटक में बौद्ध धर्म के किस सिद्धांत का समावेश है?",
        answers: shuffle([
            { text: "कर्म का सिद्धांत", correct: false },
            { text: "अहिंसा का सिद्धांत", correct: false },
            { text: "आत्म-बलिदान का सिद्धांत", correct: true },
            { text: "निर्वाण का सिद्धांत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नागानंद' में बोधिसत्व जीमूतवाहन की कहानी है जो दूसरों को बचाने के लिए आत्म-बलिदान देता है।"
    },
    {
        question: "हर्षवर्धन की माता 'यशोमती' ने किसकी मृत्यु के बाद सती होने का निर्णय लिया था?",
        answers: shuffle([
            { text: "राज्यवर्धन", correct: false },
            { text: "प्रभाकरवर्धन", correct: true },
            { text: "हर्षवर्धन", correct: false },
            { text: "ग्रहवर्मन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाणभट्ट की 'हर्षचरित' के अनुसार, प्रभाकरवर्धन की मृत्यु के बाद उसकी पत्नी यशोमती ने सती होने का निर्णय लिया था।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'पुलकेशिन द्वितीय' किस वंश का शासक था?",
        answers: shuffle([
            { text: "गुप्त वंश", correct: false },
            { text: "पल्लव वंश", correct: false },
            { text: "चालुक्य वंश", correct: true },
            { text: "वर्धन वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुलकेशिन द्वितीय वातापी के चालुक्य वंश का एक शक्तिशाली शासक था, जिसने हर्षवर्धन को पराजित किया था।"
    },
    {
        question: "हर्षवर्धन के साम्राज्य के पतन का एक प्रमुख कारण क्या था?",
        answers: shuffle([
            { text: "हूणों का आक्रमण", correct: false },
            { text: "उसका बिना उत्तराधिकारी के मर जाना", correct: true },
            { text: "आर्थिक संकट", correct: false },
            { text: "सामंतवादी व्यवस्था का मजबूत होना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन की मृत्यु के बाद कोई योग्य उत्तराधिकारी नहीं था, जिससे उसका विशाल साम्राज्य छोटे-छोटे राज्यों में बिखर गया।"
    },
    {
        question: "'प्रयाग' में हर्षवर्धन द्वारा आयोजित 'महामोक्ष परिषद' में कौन सा धर्म प्रमुख था?",
        answers: shuffle([
            { text: "शैव", correct: false },
            { text: "वैष्णव", correct: false },
            { text: "बौद्ध (महायान)", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस सभा में बौद्ध, शैव, और सूर्य जैसे देवी-देवताओं की पूजा की जाती थी, जो हर्षवर्धन की धार्मिक सहिष्णुता को दर्शाता है।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'ग्राम' (गाँव) का प्रमुख अधिकारी कौन होता था?",
        answers: shuffle([
            { text: "विषयपति", correct: false },
            { text: "उपारिक", correct: false },
            { text: "ग्रामीक", correct: true },
            { text: "महाबलाधिकृत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गाँव का प्रमुख 'ग्रामीक' या 'ग्रामाक्षपटलिक' कहलाता था, जो प्रशासन की सबसे छोटी इकाई थी।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'भाग', 'भोग', 'हिरण्य' और 'विष्टि' क्या थे?",
        answers: shuffle([
            { text: "प्रांतों के नाम", correct: false },
            { text: "न्याय प्रणाली के अंग", correct: false },
            { text: "करों के प्रकार", correct: true },
            { text: "सेना के भाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भाग' भूमिकर, 'भोग' राजा को दी जाने वाली भेंट, 'हिरण्य' नकद कर और 'विष्टि' जबरन श्रम था।<br><br><i class='fa-solid fa-angles-right icon'></i> ये सभी हर्षवर्धन के समय प्रचलित करों के प्रकार थे।"
    },
    {
        question: "ह्वेन त्सांग के अनुसार, नालंदा विश्वविद्यालय के भिक्षुओं का खर्च कैसे चलता था?",
        answers: shuffle([
            { text: "दानदाताओं द्वारा दिए गए धन से", correct: false },
            { text: "लगभग 100 गाँवों के राजस्व से", correct: true },
            { text: "राजा द्वारा दिए गए वार्षिक अनुदान से", correct: false },
            { text: "भिक्षुओं द्वारा किए गए परिश्रम से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग ने लिखा है कि नालंदा महाविहार के खर्च के लिए लगभग 100 गाँवों का राजस्व दिया जाता था, जिससे वहाँ के भिक्षुओं को सभी आवश्यक वस्तुएँ उपलब्ध होती थीं।"
    },
    {
        question: "हर्षवर्धन की जीवनी 'हर्षचरित' किस भाषा में लिखी गई थी?",
        answers: shuffle([
            { text: "प्राकृत", correct: false },
            { text: "पाली", correct: false },
            { text: "संस्कृत", correct: true },
            { text: "हिंदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाणभट्ट ने 'हर्षचरित' और 'कादंबरी' दोनों की रचना संस्कृत भाषा में की थी।"
    },
    {
        question: "हर्षवर्धन ने अपनी बहन राज्यश्री को सती होने से कहाँ बचाया था?",
        answers: shuffle([
            { text: "थानेश्वर", correct: false },
            { text: "कन्नौज", correct: false },
            { text: "विंध्य के जंगल", correct: true },
            { text: "प्रयाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाणभट्ट के अनुसार, जब राज्यश्री अपने पति की मृत्यु के बाद सती होने के लिए तैयार थी, तो हर्षवर्धन ने उसे विंध्य के जंगलों से बचाया था।"
    },
    {
        question: "'बौद्ध तीर्थयात्रियों का राजकुमार' किसे कहा जाता है?",
        answers: shuffle([
            { text: "फाह्यान", correct: false },
            { text: "ह्वेन त्सांग", correct: true },
            { text: "इत्सिंग", correct: false },
            { text: "सुंगयुन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीनी यात्री ह्वेन त्सांग को बौद्ध धर्म के प्रति उसकी गहरी आस्था और भारत में उसके व्यापक भ्रमण के कारण 'बौद्ध तीर्थयात्रियों का राजकुमार' कहा जाता है।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'राजस्व संग्रह' करने वाले अधिकारी को क्या कहते थे?",
        answers: shuffle([
            { text: "अक्षपटलिक", correct: false },
            { text: "महाबलाधिकृत", correct: false },
            { text: "भोगिक", correct: false },
            { text: "साउल्किक (Shaulkika)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'साउल्किक' नामक अधिकारी राजस्व और चुंगी करों को इकट्ठा करता था।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'न्यायपालिका' का सर्वोच्च अधिकारी कौन होता था?",
        answers: shuffle([
            { text: "राजा", correct: true },
            { text: "महादंडनायक", correct: false },
            { text: "उपारिक", correct: false },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त काल की तरह, हर्षवर्धन के शासनकाल में भी न्यायपालिका का सर्वोच्च अधिकारी राजा होता था।"
    },
    {
        question: "'हर्षचरित' के अनुसार, हर्षवर्धन की माता का नाम क्या था?",
        answers: shuffle([
            { text: "ध्रुवस्वामिनी", correct: false },
            { text: "यशोमती", correct: true },
            { text: "प्रियदर्शिका", correct: false },
            { text: "राज्यश्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाणभट्ट ने अपनी जीवनी 'हर्षचरित' में हर्षवर्धन की माता का नाम यशोमती बताया है।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'गजसेना' का प्रमुख कौन होता था?",
        answers: shuffle([
            { text: "महाबलाधिकृत", correct: false },
            { text: "सिंहनाद", correct: false },
            { text: "कुंतल", correct: false },
            { text: "कतुक (Katuka)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कतुक' नामक अधिकारी गजसेना (हाथियों की सेना) का प्रमुख होता था।"
    },
    {
        question: "किस चालुक्य शासक ने हर्षवर्धन को पराजित करने के बाद 'परमेश्वर' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "पुलकेशिन I", correct: false },
            { text: "विक्रमादित्य II", correct: false },
            { text: "पुलकेशिन II", correct: true },
            { text: "कीर्तिवर्मन I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन को पराजित करने के बाद पुलकेशिन II ने 'परमेश्वर' की उपाधि धारण की थी।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'भूमिकर' की दर क्या थी?",
        answers: shuffle([
            { text: "1/4 से 1/6", correct: true },
            { text: "1/2", correct: false },
            { text: "1/6 से 1/10", correct: false },
            { text: "1/8", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग के अनुसार, भूमिकर की दर उपज का 1/6 भाग थी, जबकि अन्य करों को मिलाकर यह 1/4 तक भी हो सकती थी।"
    },
    {
        question: "हर्षवर्धन के किस भाई को गौड़ शासक शशांक ने धोखे से मारा था?",
        answers: shuffle([
            { text: "प्रभाकरवर्धन", correct: false },
            { text: "राज्यवर्धन", correct: true },
            { text: "पुष्यभूति", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रभाकरवर्धन की मृत्यु के बाद राजा बने राज्यवर्धन को गौड़ शासक शशांक ने एक संधि के बहाने बुलाकर धोखे से मार डाला था।"
    },
    {
        question: "हर्षवर्धन ने अपनी राजधानी थानेश्वर से कहाँ स्थानांतरित की थी?",
        answers: shuffle([
            { text: "पाटलिपुत्र", correct: false },
            { text: "प्रयाग", correct: false },
            { text: "कन्नौज", correct: true },
            { text: "वल्लभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपनी बहन राज्यश्री को कन्नौज का सिंहासन वापस दिलाने के बाद हर्षवर्धन ने अपनी राजधानी थानेश्वर से कन्नौज स्थानांतरित कर दी थी।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'धार्मिक सहिष्णुता' का सबसे अच्छा उदाहरण क्या है?",
        answers: shuffle([
            { text: "ह्वेन त्सांग का स्वागत", correct: false },
            { text: "अपनी बहन को बौद्ध धर्म अपनाने की अनुमति", correct: false },
            { text: "प्रयाग में विभिन्न देवताओं की पूजा", correct: true },
            { text: "बौद्ध और हिंदू दोनों मंदिरों का निर्माण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रयाग की महामोक्ष परिषद में हर्षवर्धन ने बौद्ध, शैव और सूर्य जैसे विभिन्न धर्मों के देवी-देवताओं की पूजा की, जो उसकी धार्मिक सहिष्णुता को दर्शाता है।"
    },
    {
        question: "'हर्षचरित' में बाणभट्ट ने हर्षवर्धन के लिए किस शब्द का प्रयोग किया है?",
        answers: shuffle([
            { text: "परमेश्वर", correct: false },
            { text: "महाराजाधिराज", correct: false },
            { text: "चक्रवर्ती", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाणभट्ट ने 'हर्षचरित' में हर्षवर्धन के लिए 'परमेश्वर', 'महाराजाधिराज' और 'चक्रवर्ती' जैसी कई उपाधियों का प्रयोग किया है।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'सामंतवादी व्यवस्था' की क्या स्थिति थी?",
        answers: shuffle([
            { text: "यह पूरी तरह से समाप्त हो गई थी।", correct: false },
            { text: "यह अपने चरम पर थी।", correct: false },
            { text: "इसका उदय हो रहा था।", correct: true },
            { text: "यह केवल सैन्य प्रशासन तक सीमित थी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन के शासनकाल में सामंतवादी व्यवस्था का उदय हो रहा था, जिसमें छोटे-छोटे राजा और जागीरदार मजबूत हो रहे थे।"
    },
    {
        question: "'नालंदा' विश्वविद्यालय का कुलपति कौन था, जिसके पास ह्वेन त्सांग ने शिक्षा प्राप्त की थी?",
        answers: shuffle([
            { text: "नागार्जुन", correct: false },
            { text: "वसुबंधु", correct: false },
            { text: "शीलभद्र", correct: true },
            { text: "धर्मपाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग जब नालंदा विश्वविद्यालय में आया, तब वहाँ के कुलपति आचार्य शीलभद्र थे, जिनसे उसने बौद्ध धर्म की शिक्षा ली थी।"
    },
    {
        question: "हर्षवर्धन के समकालीन बंगाल का शासक कौन था?",
        answers: shuffle([
            { text: "देवगुप्त", correct: false },
            { text: "भास्करवर्मन", correct: false },
            { text: "शशांक", correct: true },
            { text: "पुलकेशिन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौड़ शासक शशांक हर्षवर्धन का समकालीन था और उसने ही राज्यवर्धन की धोखे से हत्या की थी।"
    },
    {
        question: "हर्षवर्धन ने अपनी पुत्री का विवाह किस मैत्रक शासक से किया था?",
        answers: shuffle([
            { text: "ध्रुवसेन I", correct: false },
            { text: "ध्रुवसेन II", correct: true },
            { text: "शिलादित्य I", correct: false },
            { text: "शिलादित्य II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन ने अपनी पुत्री का विवाह वल्लभी के मैत्रक शासक ध्रुवसेन II से किया था।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'वाणिज्यिक केंद्र' कौन सा था?",
        answers: shuffle([
            { text: "प्रयाग", correct: false },
            { text: "थानेश्वर", correct: false },
            { text: "भड़ौच (भृगुकच्छ)", correct: true },
            { text: "कन्नौज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भड़ौच (भृगुकच्छ) हर्षवर्धन के शासनकाल में पश्चिमी तट पर एक महत्वपूर्ण वाणिज्यिक केंद्र था।"
    },
    {
        question: "हर्षवर्धन की मृत्यु के बाद उत्तर भारत में कौन से नए वंश का उदय हुआ?",
        answers: shuffle([
            { text: "गुर्जर-प्रतिहार", correct: true },
            { text: "पाला", correct: false },
            { text: "राष्ट्रकूट", correct: false },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन की मृत्यु के बाद उत्तर भारत में गुर्जर-प्रतिहार वंश सबसे प्रमुख शक्ति के रूप में उभरा।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'अक्षपटलिक' नामक अधिकारी का क्या कार्य था?",
        answers: shuffle([
            { text: "राजस्व संग्रह", correct: false },
            { text: "अभिलेखों का रखरखाव", correct: true },
            { text: "न्यायिक कार्य", correct: false },
            { text: "सैन्य प्रशासन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अक्षपटलिक' नामक अधिकारी राजकीय अभिलेखों और दस्तावेजों का रखरखाव करता था।"
    },
    {
        question: "ह्वेन त्सांग ने अपनी यात्रा में 'कन्नौज' को किस नाम से संबोधित किया था?",
        answers: shuffle([
            { text: "महोदय", correct: false },
            { text: "कान्यकुब्ज", correct: false },
            { text: "पेई-लो-किआ", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग ने कन्नौज के लिए 'महोदय' और 'कान्यकुब्ज' दोनों नामों का प्रयोग किया है।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'सार्थवाह' किसे कहा जाता था?",
        answers: shuffle([
            { text: "व्यापारियों के काफिले का प्रमुख", correct: true },
            { text: "गाँव का प्रमुख", correct: false },
            { text: "प्रांतों का प्रशासक", correct: false },
            { text: "सेनापति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सार्थवाह' उस समय व्यापारियों के काफिले के प्रमुख को कहा जाता था।"
    },
    {
        question: "किस चीनी यात्री ने 'महानवमी' जैसे उत्सवों का वर्णन किया है?",
        answers: shuffle([
            { text: "फाह्यान", correct: false },
            { text: "ह्वेन त्सांग", correct: true },
            { text: "इत्सिंग", correct: false },
            { text: "सुंगयुन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग ने अपने यात्रा वृत्तांत में हर्षवर्धन के शासनकाल में मनाए जाने वाले विभिन्न उत्सवों और सभाओं का उल्लेख किया है।"
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