const questions = [
    {
        topHeading: "ईसाई धर्म पर आधारित बहुविकल्पी प्रश्न part 3 (quiz_no.43)"
    },
    {
        question: "बाइबिल में 'यीशु के अंतिम भोज' को किस संस्कार के रूप में मनाया जाता है?",
        answers: shuffle([
            { text: "बपतिस्मा", correct: false },
            { text: "विवाह", correct: false },
            { text: "युकेरिस्ट (कम्युनियन)", correct: true },
            { text: "पुष्टिकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> युकेरिस्ट, जिसे कम्युनियन भी कहा जाता है, जीसस के अंतिम भोज की याद में मनाया जाने वाला एक संस्कार है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें रोटी और दाखमधु को जीसस के शरीर और रक्त का प्रतीक माना जाता है।"
    },
    {
        question: "किस रोमन अधिकारी ने जीसस को सूली पर चढ़ाने का आदेश दिया था?",
        answers: shuffle([
            { text: "सम्राट ऑगस्टस", correct: false },
            { text: "पोंटियस पाइलेट", correct: true },
            { text: "राजा हेरोदेस", correct: false },
            { text: "सम्राट टिबेरियस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पोंटियस पाइलेट, जो यहूदिया का रोमन गवर्नर था, ने जीसस को सूली पर चढ़ाने का आदेश दिया था, हालाँकि उसने जीसस को निर्दोष पाया था।"
    },
    {
        question: "कौन-सा प्रेरित जीसस के पुनरुत्थान पर संदेह करने के लिए जाना जाता है जब तक कि उसने खुद घावों को नहीं देखा?",
        answers: shuffle([
            { text: "संत पीटर", correct: false },
            { text: "संत पॉल", correct: false },
            { text: "संत थॉमस", correct: true },
            { text: "संत जॉन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संत थॉमस ने जीसस के पुनरुत्थान पर तब तक विश्वास नहीं किया जब तक कि उसने उनके घावों को नहीं देखा और छुआ।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी कारण उन्हें 'संदेही थॉमस' भी कहा जाता है।"
    },
    {
        question: "जीसस ने अपने बारह शिष्यों के साथ 'अंतिम भोज' किस दिन किया था?",
        answers: shuffle([
            { text: "सोमवार", correct: false },
            { text: "मंगलवार", correct: false },
            { text: "बुधवार", correct: false },
            { text: "गुरुवार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंतिम भोज 'पवित्र गुरुवार' (Maundy Thursday) को मनाया जाता है, जो जीसस के सूली पर चढ़ाए जाने से एक रात पहले हुआ था।"
    },
    {
        question: "'लेंट' (उपवास काल) की शुरुआत किस दिन होती है?",
        answers: shuffle([
            { text: "पवित्र गुरुवार", correct: false },
            { text: "राख बुधवार (Ash Wednesday)", correct: true },
            { text: "गुड फ्राइडे", correct: false },
            { text: "पाम संडे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राख बुधवार लेंट के 40 दिन के उपवास काल की शुरुआत का प्रतीक है, जिसमें ईसाइयों के माथे पर राख लगाई जाती है।"
    },
    {
        question: "बाइबिल के चार सुसमाचारों में से कितने को 'सिनोप्टिक सुसमाचार' कहा जाता है?",
        answers: shuffle([
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false },
            { text: "1", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मत्ती, मरकुस और लूका के सुसमाचारों को 'सिनोप्टिक' (Synoptic) कहा जाता है क्योंकि वे जीसस के जीवन की घटनाओं को समान परिप्रेक्ष्य से देखते हैं।"
    },
    {
        question: "बाइबिल के किस पुराने नियम की पुस्तक में एक धर्मी व्यक्ति की कहानी है जो बिना किसी कारण के भयानक पीड़ा सहता है?",
        answers: shuffle([
            { text: "अय्यूब (Job)", correct: true },
            { text: "भजन संहिता (Psalms)", correct: false },
            { text: "नीतिवचन (Proverbs)", correct: false },
            { text: "यशायाह (Isaiah)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अय्यूब की पुस्तक में यह बताया गया है कि एक धर्मी व्यक्ति, अय्यूब, को शैतान द्वारा कठोर परीक्षा से गुजरना पड़ा, जिससे ईश्वर की संप्रभुता और दुख के अर्थ पर सवाल उठाए गए।"
    },
    {
        question: "बाइबिल के 'प्रेरितों के कार्य' (Acts of the Apostles) नामक पुस्तक किसने लिखी थी?",
        answers: shuffle([
            { text: "मत्ती", correct: false },
            { text: "मरकुस", correct: false },
            { text: "लूका", correct: true },
            { text: "यूहन्ना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माना जाता है कि लूका, जिन्होंने लूका का सुसमाचार भी लिखा था, ने ही प्रेरितों के कार्य की रचना की थी, जो जीसस के स्वर्गारोहण के बाद शुरुआती चर्च के विकास का वर्णन करती है।"
    },
    {
        question: "प्रोटेस्टेंटवाद के किस सिद्धांत का अर्थ है कि \"केवल धर्मग्रंथ ही अंतिम अधिकार है\"?",
        answers: shuffle([
            { text: "सोला फिडे (Sola Fide)", correct: false },
            { text: "सोला स्क्रिप्टुरा (Sola Scriptura)", correct: true },
            { text: "सोला ग्राटिया (Sola Gratia)", correct: false },
            { text: "सोला क्रिस्टस (Sola Christus)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सोला स्क्रिप्टुरा' प्रोटेस्टेंट सुधार का एक सिद्धांत है जिसका अर्थ है कि बाइबिल ही विश्वास और नैतिकता का एकमात्र अचूक स्रोत है।"
    },
    {
        question: "जीसस के पुनरुत्थान के कितने दिनों बाद 'पेंटेकोस्ट' का त्योहार मनाया जाता है?",
        answers: shuffle([
            { text: "10 दिन", correct: false },
            { text: "20 दिन", correct: false },
            { text: "40 दिन", correct: false },
            { text: "50 दिन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेंटेकोस्ट का त्योहार जीसस के पुनरुत्थान के 50 दिन बाद मनाया जाता है, जब पवित्र आत्मा प्रेरितों पर अवतरित हुई थी।"
    },
    {
        question: "बाइबिल के अनुसार, जीसस का पहला चमत्कार क्या था?",
        answers: shuffle([
            { text: "पांच रोटियाँ और दो मछलियों से 5000 लोगों को खिलाना", correct: false },
            { text: "पानी को दाखमधु में बदलना", correct: true },
            { text: "बीमारों को चंगा करना", correct: false },
            { text: "तूफान को शांत करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल के यूहन्ना के सुसमाचार के अनुसार, जीसस ने 'काना' नामक विवाह समारोह में पानी को दाखमधु में बदलकर अपना पहला चमत्कार किया था।"
    },
    {
        question: "जीसस की 'खोई हुई भेड़' की दृष्टांत कथा का क्या संदेश है?",
        answers: shuffle([
            { text: "एक चरवाहे की कहानी", correct: false },
            { text: "ईश्वर एक भी पश्चात्तापी पापी के लिए खुश होता है", correct: true },
            { text: "खोई हुई वस्तुओं को खोजना", correct: false },
            { text: "दूसरों की मदद करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खोई हुई भेड़' की दृष्टांत कथा में जीसस बताते हैं कि ईश्वर एक पश्चात्तापी पापी की वापसी के लिए बहुत खुश होता है, जैसे एक चरवाहा अपनी खोई हुई भेड़ को पाकर होता है।"
    },
    {
        question: "किस घटना ने कैथोलिक और प्रोटेस्टेंट चर्चों के बीच औपचारिक विभाजन की शुरुआत की?",
        answers: shuffle([
            { text: "मिलान का अध्यादेश", correct: false },
            { text: "नाइसीन की परिषद", correct: false },
            { text: "प्रोटेस्टेंट सुधार", correct: true },
            { text: "क्रूसेड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 16वीं शताब्दी में मार्टिन लूथर के नेतृत्व में हुए प्रोटेस्टेंट सुधार ने कैथोलिक चर्च की सत्ता को चुनौती दी, जिसके परिणामस्वरूप प्रोटेस्टेंट चर्चों की स्थापना हुई।"
    },
    {
        question: "जीसस के जीवनकाल के दौरान, 'गलील' नामक क्षेत्र में कौन सा प्रमुख धार्मिक केंद्र स्थित था?",
        answers: shuffle([
            { text: "यरूशलेम", correct: false },
            { text: "नासरत", correct: true },
            { text: "कैपर्नम", correct: false },
            { text: "बेथलहम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नासरत जीसस का गृह नगर था जहाँ उन्होंने अपना बचपन और युवावस्था बिताई थी, और यह गलील क्षेत्र का एक महत्वपूर्ण केंद्र था।"
    },
    {
        question: "बाइबिल की किस पुस्तक में 'सृष्टि के चार घोड़े' (Four Horsemen of the Apocalypse) का वर्णन है?",
        answers: shuffle([
            { text: "उत्पत्ति", correct: false },
            { text: "यशायाह", correct: false },
            { text: "प्रकाशितवाक्य", correct: true },
            { text: "यूहन्ना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाशितवाक्य की पुस्तक में भविष्य की घटनाओं का वर्णन है, जिसमें 'चार घोड़े' भी शामिल हैं जो युद्ध, अकाल, महामारी और मृत्यु का प्रतिनिधित्व करते हैं।"
    },
    {
        question: "जॉन द बैपटिस्ट की माँ का नाम क्या था?",
        answers: shuffle([
            { text: "मरियम", correct: false },
            { text: "एलिजाबेथ", correct: true },
            { text: "मरथा", correct: false },
            { text: "सारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एलिजाबेथ जॉन द बैपटिस्ट की माँ थीं, जो मरियम (जीसस की माँ) की चचेरी बहन थीं।"
    },
    {
        question: "ईसाई धर्म में 'अभिषेक' (Confirmation) नामक संस्कार किस बात का प्रतीक है?",
        answers: shuffle([
            { text: "बपतिस्मा", correct: false },
            { text: "पवित्र आत्मा को प्राप्त करना", correct: true },
            { text: "विवाह", correct: false },
            { text: "पश्चात्ताप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कन्फर्मेशन' एक संस्कार है जो बपतिस्मा प्राप्त व्यक्ति को पवित्र आत्मा से मजबूत करता है, जिससे वह अपने विश्वास को और अधिक गहराई से स्वीकार करता है।"
    },
    {
        question: "'द इंक्विजिशन' (The Inquisition) क्या था?",
        answers: shuffle([
            { text: "एक धार्मिक त्योहार", correct: false },
            { text: "मध्य युग में विधर्मियों को दंडित करने के लिए कैथोलिक चर्च द्वारा स्थापित एक न्यायालय", correct: true },
            { text: "एक मिशनरी अभियान", correct: false },
            { text: "एक मठवासी आदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'द इंक्विजिशन' कैथोलिक चर्च द्वारा स्थापित एक संस्था थी जिसका उद्देश्य विधर्म (heresy) को समाप्त करना और कैथोलिक धर्म के सिद्धांतों का पालन सुनिश्चित करना था।"
    },
    {
        question: "बाइबिल में 'युकेरिस्ट' (Eucharist) की स्थापना किस घटना के दौरान हुई थी?",
        answers: shuffle([
            { text: "जीसस का जन्म", correct: false },
            { text: "जीसस का बपतिस्मा", correct: false },
            { text: "अंतिम भोज", correct: true },
            { text: "जीसस का पुनरुत्थान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> युकेरिस्ट की स्थापना अंतिम भोज के दौरान हुई थी, जब जीसस ने रोटी और दाखमधु को अपने शरीर और रक्त के रूप में प्रस्तुत किया था।"
    },
    {
        question: "'अंतिम भोज' के दौरान जीसस ने अपने शिष्यों के पैर क्यों धोए थे?",
        answers: shuffle([
            { text: "एक यहूदी परंपरा के कारण", correct: false },
            { text: "नम्रता और सेवा का उदाहरण स्थापित करने के लिए", correct: true },
            { text: "एक धार्मिक संस्कार के रूप में", correct: false },
            { text: "उन्हें शुद्ध करने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीसस ने शिष्यों के पैर धोकर नम्रता और सेवा का एक उदाहरण स्थापित किया, यह सिखाने के लिए कि उनके अनुयायियों को भी एक-दूसरे की सेवा करनी चाहिए।"
    },
    {
        question: "बाइबिल में 'जीसस' के बचपन और युवावस्था के बारे में सबसे अधिक जानकारी किस सुसमाचार में मिलती है?",
        answers: shuffle([
            { text: "मत्ती", correct: false },
            { text: "मरकुस", correct: false },
            { text: "लूका", correct: true },
            { text: "यूहन्ना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लूका का सुसमाचार जीसस के जन्म, बचपन और युवावस्था के बारे में सबसे अधिक जानकारी प्रदान करता है, जिसमें मरियम से संबंधित कहानियाँ भी शामिल हैं।"
    },
    {
        question: "ईसाई धर्म में 'पुरगेटरी' (Purgatory) की अवधारणा किस चर्च से संबंधित है?",
        answers: shuffle([
            { text: "प्रोटेस्टेंट चर्च", correct: false },
            { text: "पूर्वी रूढ़िवादी चर्च", correct: false },
            { text: "रोमन कैथोलिक चर्च", correct: true },
            { text: "सभी ईसाई चर्च", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पुरगेटरी' की अवधारणा रोमन कैथोलिक चर्च की एक विशेष शिक्षा है, जिसके अनुसार मृत्यु के बाद कुछ आत्माओं को स्वर्ग जाने से पहले अपने पापों को शुद्ध करने के लिए एक अस्थायी स्थान पर रहना पड़ता है।"
    },
    {
        question: "'सोला क्रिस्टस' (Sola Christus) का क्या अर्थ है?",
        answers: shuffle([
            { text: "केवल बाइबिल ही अधिकार है।", correct: false },
            { text: "केवल विश्वास ही मुक्ति दिलाता है।", correct: false },
            { text: "केवल मसीह ही मुक्ति का मार्ग है।", correct: true },
            { text: "केवल दया ही मुक्ति दिलाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सोला क्रिस्टस' प्रोटेस्टेंट सुधार का एक सिद्धांत है जो यह बताता है कि जीसस ही एकमात्र मुक्तिदाता और ईश्वर और मनुष्य के बीच एकमात्र मध्यस्थ हैं।"
    },
    {
        question: "जीसस को सूली पर चढ़ाने में मदद करने वाले व्यक्ति का नाम क्या था?",
        answers: shuffle([
            { text: "बरअब्बा", correct: false },
            { text: "शिमोन", correct: true },
            { text: "पोंटियस पाइलेट", correct: false },
            { text: "यूसुफ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल के अनुसार, एक व्यक्ति जिसका नाम शिमोन था, उसने जीसस का क्रूस उठाने में उनकी मदद की थी।"
    },
    {
        question: "'बाइबिल' में किस पुस्तक को ज्ञान की पुस्तक माना जाता है?",
        answers: shuffle([
            { text: "नीतिवचन (Proverbs)", correct: true },
            { text: "भजन संहिता (Psalms)", correct: false },
            { text: "उत्पत्ति (Genesis)", correct: false },
            { text: "प्रकाशितवाक्य (Revelation)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नीतिवचन की पुस्तक में जीवन और धर्म पर कई ज्ञानवर्धक बातें और उपदेश शामिल हैं।"
    },
    {
        question: "बाइबिल के 'पुराने नियम' की पहली पांच पुस्तकों को क्या कहा जाता है?",
        answers: shuffle([
            { text: "सुसमाचार", correct: false },
            { text: "भजन संहिता", correct: false },
            { text: "पेंटाटुक (पञ्चग्रन्थ)", correct: true },
            { text: "पत्रियाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेंटाटुक, जिसे तोराह भी कहा जाता है, बाइबिल के पुराने नियम की पहली पांच पुस्तकें हैं: उत्पत्ति, निर्गमन, लैव्यव्यवस्था, गिनती और व्यवस्थाविवरण।"
    },
    {
        question: "बाइबिल के किस भविष्यवक्ता को एक बड़ी मछली ने निगल लिया था?",
        answers: shuffle([
            { text: "यशायाह", correct: false },
            { text: "यिर्मयाह", correct: false },
            { text: "दानिय्येल", correct: false },
            { text: "योना", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल की योना की पुस्तक में यह कहानी है कि योना को ईश्वर की आज्ञा न मानने के कारण एक बड़ी मछली ने निगल लिया था, और वह तीन दिन और तीन रात उसके पेट में रहा।"
    },
    {
        question: "बाइबिल के अनुसार, जीसस का सार्वजनिक प्रचार कितने समय तक चला था?",
        answers: shuffle([
            { text: "लगभग 6 महीने", correct: false },
            { text: "लगभग 1 वर्ष", correct: false },
            { text: "लगभग 3 वर्ष", correct: true },
            { text: "लगभग 10 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल के सुसमाचारों के आधार पर, जीसस के बपतिस्मा से लेकर उनकी मृत्यु तक का उनका सार्वजनिक प्रचार लगभग तीन वर्षों तक चला था।"
    },
    {
        question: "जीसस ने किस व्यक्ति को मृतकों में से जीवित किया था?",
        answers: shuffle([
            { text: "योना", correct: false },
            { text: "लाजरस", correct: true },
            { text: "अब्राहम", correct: false },
            { text: "जॉन द बैपटिस्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल के अनुसार, जीसस ने बेथनियाह में अपने मित्र लाजरस को, जो चार दिन से मरा हुआ था, मृतकों में से जीवित किया था।"
    },
    {
        question: "'पवित्र गुरुवार' (Maundy Thursday) किस घटना को याद करने के लिए मनाया जाता है?",
        answers: shuffle([
            { text: "जीसस का जन्म", correct: false },
            { text: "जीसस का पुनरुत्थान", correct: false },
            { text: "अंतिम भोज", correct: true },
            { text: "जीसस का बपतिस्मा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पवित्र गुरुवार अंतिम भोज के दिन को याद करता है, जब जीसस ने अपने शिष्यों के साथ अपना अंतिम भोजन किया था और 'युकेरिस्ट' की स्थापना की थी।"
    },
    {
        question: "जीसस के शिष्य बनने से पहले मत्ती का पेशा क्या था?",
        answers: shuffle([
            { text: "मछुआरा", correct: false },
            { text: "बढ़ई", correct: false },
            { text: "कर संग्राहक", correct: true },
            { text: "चिकित्सक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल के अनुसार, मत्ती, जिसे लेवी भी कहा जाता था, एक कर संग्राहक था जिसे जीसस ने अपना शिष्य बनने के लिए बुलाया था।"
    },
    {
        question: "ईसाई धर्म में 'पवित्र आत्मा' (Holy Spirit) का क्या कार्य है?",
        answers: shuffle([
            { text: "केवल भविष्यवाणियाँ करना", correct: false },
            { text: "जीसस के अनुयायियों को शक्ति और मार्गदर्शन देना", correct: true },
            { text: "जीसस को सूली पर चढ़ाना", correct: false },
            { text: "चर्च के निर्माण को रोकना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ईसाई धर्मशास्त्र के अनुसार, पवित्र आत्मा ईश्वर की शक्ति है जो ईसाइयों को उनके विश्वास में मजबूत करती है और उन्हें मार्गदर्शन देती है।"
    },
    {
        question: "धर्मशास्त्र की वह शाखा कौनसी है जो 'अंत समय' (end times) और अंतिम घटनाओं का अध्ययन करती है?",
        answers: shuffle([
            { text: "पारिस्थितिकी (Ecology)", correct: false },
            { text: "मोक्षशास्त्र (Soteriology)", correct: false },
            { text: "मुक्तिशास्त्र (Eschatology)", correct: true },
            { text: "नीतिशास्त्र (Ethics)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुक्तिशास्त्र (Eschatology) ईसाई धर्मशास्त्र का एक हिस्सा है जो दुनिया के अंत, अंतिम न्याय, पुनरुत्थान और स्वर्ग के बारे में सिखाता है।"
    },
    {
        question: "जीसस की 'अच्छे चरवाहे' की दृष्टांत कथा में चरवाहा किसका प्रतिनिधित्व करता है?",
        answers: shuffle([
            { text: "राजा", correct: false },
            { text: "ईश्वर", correct: false },
            { text: "जीसस", correct: true },
            { text: "पुजारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अच्छे चरवाहे' की दृष्टांत कथा में, जीसस खुद को उस चरवाहे के रूप में प्रस्तुत करते हैं जो अपनी भेड़ों (अपने अनुयायियों) की देखभाल करता है और उनके लिए अपना जीवन देता है।"
    },
    {
        question: "'प्रेरितों का पंथ' (Apostles' Creed) क्या है?",
        answers: shuffle([
            { text: "एक प्रार्थना", correct: false },
            { text: "विश्वास का एक संक्षिप्त वक्तव्य", correct: true },
            { text: "एक धार्मिक पुस्तक", correct: false },
            { text: "एक गीत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रेरितों का पंथ' ईसाई धर्म के मूल सिद्धांतों को संक्षेप में प्रस्तुत करने वाला एक प्राचीन वक्तव्य है, जिसका उपयोग कई चर्चों में किया जाता है।"
    },
    {
        question: "11वीं से 13वीं शताब्दी तक हुए 'धर्मयुद्ध' (Crusades) का मुख्य उद्देश्य क्या था?",
        answers: shuffle([
            { text: "ईसाई धर्म का प्रचार करना।", correct: false },
            { text: "व्यापार मार्ग स्थापित करना।", correct: false },
            { text: "पवित्र भूमि को मुस्लिम शासन से वापस लेना।", correct: true },
            { text: "कैथोलिक चर्च में सुधार करना।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धर्मयुद्ध पवित्र भूमि (यरूशलेम) को मुस्लिम शासन से मुक्त कराने और ईसाई तीर्थयात्रियों के लिए रास्ता सुरक्षित करने के उद्देश्य से लड़े गए थे।"
    },
    {
        question: "ईसाई धर्म के अनुसार, 'पुष्टिकरण' (Confirmation) का संस्कार क्या करता है?",
        answers: shuffle([
            { text: "बपतिस्मा को दोहराता है।", correct: false },
            { text: "प्राप्तकर्ता को पवित्र आत्मा की शक्ति से मजबूत करता है।", correct: true },
            { text: "किसी व्यक्ति को पाप से मुक्त करता है।", correct: false },
            { text: "विवाह की तैयारी करता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुष्टिकरण का संस्कार एक व्यक्ति को पवित्र आत्मा का विशेष अभिषेक प्रदान करता है, जिससे वह अपने विश्वास में अधिक मजबूत होता है।"
    },
    {
        question: "बाइबिल के किस पुस्तक में राजा सुलैमान के ज्ञान का वर्णन है?",
        answers: shuffle([
            { text: "भजन संहिता", correct: false },
            { text: "नीतिवचन", correct: true },
            { text: "यशायाह", correct: false },
            { text: "प्रकाशितवाक्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नीतिवचन (Proverbs) की पुस्तक में ज्ञान और बुद्धिमत्ता से संबंधित कई बातें हैं, जिनमें से अधिकांश राजा सुलैमान को समर्पित हैं।"
    },
    {
        question: "'संत पॉल' के अनुसार, \"मुक्ति\" (Salvation) कैसे प्राप्त होती है?",
        answers: shuffle([
            { text: "केवल अच्छे कर्मों से", correct: false },
            { text: "केवल विश्वास से", correct: true },
            { text: "प्रार्थना और उपवास से", correct: false },
            { text: "तीर्थयात्रा से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रेरित पॉल ने सिखाया कि जीसस पर विश्वास के माध्यम से ही मुक्ति मिलती है, न कि केवल नियमों या कर्मों का पालन करने से।"
    },
    {
        question: "जीसस के बारह शिष्यों में से किसने जीसस को उनके अंतिम समय में तीन बार अस्वीकार किया था?",
        answers: shuffle([
            { text: "जूदास", correct: false },
            { text: "थॉमस", correct: false },
            { text: "संत पीटर", correct: true },
            { text: "संत जॉन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब जीसस को गिरफ्तार किया गया था, तब संत पीटर ने लोगों के सामने यह स्वीकार करने से तीन बार इनकार कर दिया था कि वह जीसस के अनुयायी हैं।"
    },
    {
        question: "बाइबिल में 'युकेरिस्ट' (Eucharist) के लिए किस और शब्द का प्रयोग किया जाता है?",
        answers: shuffle([
            { text: "बपतिस्मा", correct: false },
            { text: "कम्युनियन (Communion)", correct: true },
            { text: "उपवास", correct: false },
            { text: "विवाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'युकेरिस्ट' को 'पवित्र कम्युनियन' या 'प्रभुभोज' भी कहा जाता है, जिसमें विश्वासियों को जीसस के शरीर और रक्त के प्रतीक दिए जाते हैं।"
    },
    {
        question: "किस घटना को 'पवित्र आत्मा' के अवतरण के रूप में मनाया जाता है?",
        answers: shuffle([
            { text: "जीसस का बपतिस्मा", correct: false },
            { text: "जीसस का पुनरुत्थान", correct: false },
            { text: "पेंटेकोस्ट", correct: true },
            { text: "स्वर्गारोहण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेंटेकोस्ट का दिन उस घटना को याद करता है जब पवित्र आत्मा जीसस के शिष्यों पर अवतरित हुई थी।"
    },
    {
        question: "बाइबिल में 'कबूतर' (Dove) किसका प्रतीक है?",
        answers: shuffle([
            { text: "युद्ध", correct: false },
            { text: "पवित्र आत्मा", correct: true },
            { text: "जीसस", correct: false },
            { text: "शांति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल में जीसस के बपतिस्मा के समय पवित्र आत्मा को कबूतर के रूप में अवतरित होते दिखाया गया है, इसलिए कबूतर पवित्र आत्मा का प्रतीक है।"
    },
    {
        question: "जीसस को सूली पर चढ़ाने के लिए मजबूर करने वाले यहूदी नेता कौन थे?",
        answers: shuffle([
            { text: "फरीसी और सदूकी", correct: true },
            { text: "राजा हेरोदेस", correct: false },
            { text: "रोमन सैनिक", correct: false },
            { text: "सम्राट ऑगस्टस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाइबिल के अनुसार, फरीसी और सदूकी नामक यहूदी धार्मिक नेताओं ने जीसस पर ईशनिंदा का आरोप लगाया और उन्हें सूली पर चढ़ाने के लिए पोंटियस पाइलेट पर दबाव डाला।"
    },
    {
        question: "'पुराने नियम' में 'योना' की पुस्तक का मुख्य संदेश क्या है?",
        answers: shuffle([
            { text: "युद्ध के बारे में चेतावनी", correct: false },
            { text: "ईश्वर की क्षमा और दया", correct: true },
            { text: "ईश्वर के नियम", correct: false },
            { text: "राजाओं का इतिहास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> योना की पुस्तक का मुख्य संदेश यह है कि ईश्वर न केवल यहूदियों पर बल्कि सभी लोगों पर दया करता है, यहाँ तक कि उनके दुश्मनों पर भी।"
    },
    {
        question: "जीसस ने अपने शिष्यों को सबसे प्रसिद्ध प्रार्थना कौनसी सिखाई थी?",
        answers: shuffle([
            { text: "हालेलुयाह", correct: false },
            { text: "पिता हमारा (The Lord's Prayer)", correct: true },
            { text: "जय हो मरियम", correct: false },
            { text: "ईश्वर की स्तुति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पिता हमारा' प्रार्थना जीसस ने अपने शिष्यों को सिखाई थी और यह ईसाई धर्म की सबसे महत्वपूर्ण प्रार्थनाओं में से एक है।"
    },
    {
        question: "'सुसमाचार' (Gospels) शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "अच्छा संदेश", correct: true },
            { text: "नया नियम", correct: false },
            { text: "पुराना नियम", correct: false },
            { text: "इतिहास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुसमाचार' शब्द का अर्थ है 'अच्छा संदेश' या 'खुशखबरी'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह जीसस के जीवन और उपदेशों को संदर्भित करता है।"
    },
    {
        question: "बाइबिल में 'युकेरिस्ट' संस्कार में 'दाखमधु' (वाइन) क्या दर्शाता है?",
        answers: shuffle([
            { text: "जीसस का शरीर", correct: false },
            { text: "जीसस का रक्त", correct: true },
            { text: "पवित्र आत्मा", correct: false },
            { text: "जीवन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'युकेरिस्ट' के संस्कार में, दाखमधु को जीसस के रक्त का प्रतीक माना जाता है जो पापों की क्षमा के लिए बहाया गया था।"
    },
    {
        question: "'अंतिम न्याय' के बाद, एक विश्वासी आत्मा को कहाँ भेजा जाता है?",
        answers: shuffle([
            { text: "नर्क", correct: false },
            { text: "शुद्धिस्थान", correct: false },
            { text: "स्वर्ग", correct: true },
            { text: "पुनर्जन्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ईसाई धर्म के अनुसार, 'अंतिम न्याय' के बाद, एक विश्वासी आत्मा को ईश्वर के साथ शाश्वत जीवन बिताने के लिए स्वर्ग भेजा जाता है।"
    },
    {
        question: "'सोला स्क्रिप्टुरा' (Sola Scriptura) नामक सिद्धांत का क्या अर्थ है?",
        answers: shuffle([
            { text: "केवल जीसस ही मुक्ति दिलाते हैं।", correct: false },
            { text: "केवल विश्वास ही मुक्ति दिलाता है।", correct: false },
            { text: "केवल बाइबिल ही अंतिम अधिकार है।", correct: true },
            { text: "केवल दया ही मुक्ति दिलाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सोला स्क्रिप्टुरा' प्रोटेस्टेंट सुधार का एक सिद्धांत है जिसका अर्थ है कि बाइबिल ही विश्वास और नैतिकता का एकमात्र अचूक स्रोत है।"
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