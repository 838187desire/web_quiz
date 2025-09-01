const questions = [
    {
        topHeading: "द्वंद्व समास पर आधारित 25 बहुविकल्पीय प्रश्न (quiz_no.16)"
    },
    {
        question: "'माता-पिता' में कौनसा समास है?",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "द्वंद्व", correct: true },
            { text: "बहुव्रीहि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्वंद्व समास में दोनों पद प्रधान होते हैं और इनका विग्रह करने पर 'और', 'या', 'एवं' जैसे समुच्चयबोधक अव्यय लगते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> 'माता-पिता' का विग्रह 'माता और पिता' होता है।"
    },
    {
        question: "'अन्न-जल' में किस प्रकार का द्वंद्व समास है?",
        answers: shuffle([
            { text: "इतरेतर द्वंद्व", correct: false },
            { text: "वैकल्पिक द्वंद्व", correct: false },
            { text: "समाहार द्वंद्व", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अन्न-जल' का विग्रह 'अन्न और जल' होता है, लेकिन इसका प्रयोग 'खाने-पीने की व्यवस्था' के अर्थ में होता है, जो एक समूह का बोध कराता है, इसलिए यह 'समाहार द्वंद्व' का उदाहरण है।"
    },
    {
        question: "निम्नलिखित में से कौन सा शब्द द्वंद्व समास का उदाहरण नहीं है?",
        answers: shuffle([
            { text: "दाल-रोटी", correct: false },
            { text: "भाई-बहन", correct: false },
            { text: "रातोंरात", correct: true },
            { text: "जल-वायु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रातोंरात' का अर्थ 'रात ही रात में' होता है, जो अव्ययीभाव समास का उदाहरण है, क्योंकि इसमें पुनरावृत्ति हो रही है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी द्वंद्व समास के उदाहरण हैं।"
    },
    {
        question: "'लाभ-हानि' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु", correct: false },
            { text: "द्वंद्व", correct: true },
            { text: "कर्मधारय", correct: false },
            { text: "तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लाभ-हानि' का विग्रह 'लाभ या हानि' होता है, जो 'द्वंद्व' का उदाहरण है।"
    },
    {
        question: "'दिन-रात' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "द्वंद्व", correct: true },
            { text: "बहुव्रीहि", correct: false },
            { text: "अव्ययीभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दिन-रात' का विग्रह 'दिन और रात' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> दोनों पद प्रधान हैं और 'और' से जुड़े हैं, जो द्वंद्व समास की पहचान है।"
    },
    {
        question: "किस विकल्प में द्वंद्व समास का सही उदाहरण है?",
        answers: shuffle([
            { text: "चरणकमल", correct: false },
            { text: "दशानन", correct: false },
            { text: "पति-पत्नी", correct: true },
            { text: "यथाशक्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पति-पत्नी' का विग्रह 'पति और पत्नी' होता है, जिसमें दोनों पद प्रधान हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य विकल्प अलग-अलग समास के हैं।"
    },
    {
        question: "'सुरासुर' का सही समास विग्रह क्या है?",
        answers: shuffle([
            { text: "सुर या असुर", correct: false },
            { text: "सुर और असुर", correct: true },
            { text: "सुर के लिए असुर", correct: false },
            { text: "सुर और असुर दोनों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुरासुर' शब्द 'सुर' और 'असुर' के मेल से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> दोनों पद प्रधान हैं और 'और' से जुड़े हैं।"
    },
    {
        question: "'दाल-रोटी' के मेल से कौन सा शब्द बनता है?",
        answers: shuffle([
            { text: "दालरोटी", correct: false },
            { text: "दाल रोटी", correct: false },
            { text: "दाल और रोटी", correct: false },
            { text: "दाल-रोटी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दाल' और 'रोटी' के मेल से 'दाल-रोटी' शब्द बनता है, जो द्वंद्व समास का उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह 'समाहार द्वंद्व' का भी उदाहरण है, जिसमें दोनों पद मिलकर एक समूह का बोध कराते हैं।"
    },
    {
        question: "'ऊँच-नीच' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्वंद्व", correct: true },
            { text: "कर्मधारय", correct: false },
            { text: "बहुव्रीहि", correct: false },
            { text: "तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ऊँच-नीच' का विग्रह 'ऊँच या नीच' होता है, जो वैकल्पिक द्वंद्व का उदाहरण है।"
    },
    {
        question: "'अन्न-जल' का सही समास विग्रह क्या है?",
        answers: shuffle([
            { text: "अन्न और जल", correct: true },
            { text: "अन्न या जल", correct: false },
            { text: "अन्न के लिए जल", correct: false },
            { text: "अन्न जैसा जल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अन्न-जल' का विग्रह 'अन्न और जल' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह द्वंद्व समास है, जिसमें दोनों पद प्रधान हैं।"
    },
    {
        question: "'भाई-बहन' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु", correct: false },
            { text: "बहुव्रीहि", correct: false },
            { text: "कर्मधारय", correct: false },
            { text: "द्वंद्व", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भाई-बहन' का विग्रह 'भाई और बहन' होता है, जिसमें दोनों पद प्रधान हैं।"
    },
    {
        question: "'धर्म-अधर्म' में कौन सा समास है?",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "द्वंद्व", correct: true },
            { text: "द्विगु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धर्म-अधर्म' का विग्रह 'धर्म या अधर्म' होता है, जो वैकल्पिक द्वंद्व का उदाहरण है।"
    },
    {
        question: "'हार-जीत' का समास विग्रह क्या है?",
        answers: shuffle([
            { text: "हार और जीत", correct: false },
            { text: "हार या जीत", correct: true },
            { text: "हार के लिए जीत", correct: false },
            { text: "हार जैसा जीत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हार-जीत' का विग्रह 'हार या जीत' होता है, जो वैकल्पिक द्वंद्व का उदाहरण है।"
    },
    {
        question: "'शुभ-अशुभ' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्वंद्व", correct: true },
            { text: "कर्मधारय", correct: false },
            { text: "बहुव्रीहि", correct: false },
            { text: "अव्ययीभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शुभ-अशुभ' का विग्रह 'शुभ या अशुभ' होता है, जो वैकल्पिक द्वंद्व का उदाहरण है।"
    },
    {
        question: "'देव-असुर' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "द्वंद्व", correct: true },
            { text: "बहुव्रीहि", correct: false },
            { text: "अव्ययीभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'देव-असुर' का विग्रह 'देव और असुर' होता है, जिसमें दोनों पद प्रधान हैं।"
    },
    {
        question: "किस शब्द में द्वंद्व समास नहीं है?",
        answers: shuffle([
            { text: "राजा-रानी", correct: false },
            { text: "सीताराम", correct: false },
            { text: "लंबोदर", correct: true },
            { text: "देश-विदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लंबोदर' का अर्थ 'लंबा है उदर जिसका' (गणेश) होता है, जो बहुव्रीहि समास का उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी द्वंद्व समास के उदाहरण हैं।"
    },
    {
        question: "'आचार-विचार' में कौन सा समास है?",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "द्वंद्व", correct: true },
            { text: "द्विगु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आचार-विचार' का विग्रह 'आचार और विचार' होता है, जो 'इतरेतर द्वंद्व' का उदाहरण है।"
    },
    {
        question: "'नदी-नाले' में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्मधारय", correct: false },
            { text: "बहुव्रीहि", correct: false },
            { text: "द्वंद्व", correct: true },
            { text: "अव्ययीभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नदी-नाले' का विग्रह 'नदी और नाले' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह 'समाहार द्वंद्व' का भी उदाहरण हो सकता है, जहाँ यह नदी और नाले के समूह का बोध कराता है।"
    },
    {
        question: "'अमीर-गरीब' का समास विग्रह क्या है?",
        answers: shuffle([
            { text: "अमीर या गरीब", correct: false },
            { text: "अमीर और गरीब", correct: true },
            { text: "अमीर के लिए गरीब", correct: false },
            { text: "अमीर का गरीब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अमीर-गरीब' का विग्रह 'अमीर और गरीब' होता है, जिसमें दोनों पद प्रधान हैं।"
    },
    {
        question: "'हाथ-पैर' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "द्वंद्व", correct: true },
            { text: "बहुव्रीहि", correct: false },
            { text: "द्विगु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हाथ-पैर' का विग्रह 'हाथ और पैर' होता है, जो 'इतरेतर द्वंद्व' का उदाहरण है।"
    },
    {
        question: "'आटा-दाल' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "द्वंद्व", correct: true },
            { text: "बहुव्रीहि", correct: false },
            { text: "द्विगु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आटा-दाल' का विग्रह 'आटा और दाल' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह 'समाहार द्वंद्व' का भी उदाहरण है।"
    },
    {
        question: "'खाना-पीना' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्वंद्व", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "अव्ययीभाव", correct: false },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खाना-पीना' का विग्रह 'खाना और पीना' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह 'समाहार द्वंद्व' का भी उदाहरण है, जहाँ यह खाने-पीने की क्रिया का बोध कराता है।"
    },
    {
        question: "'सुख-दुःख' का समास विग्रह क्या है?",
        answers: shuffle([
            { text: "सुख और दुःख", correct: false },
            { text: "सुख या दुःख", correct: true },
            { text: "सुख के लिए दुःख", correct: false },
            { text: "सुख जैसा दुःख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुख-दुःख' का विग्रह 'सुख या दुःख' होता है, जो वैकल्पिक द्वंद्व का उदाहरण है।"
    },
    {
        question: "'भाई-भाभी' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "द्विगु", correct: false },
            { text: "द्वंद्व", correct: true },
            { text: "बहुव्रीहि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भाई-भाभी' का विग्रह 'भाई और भाभी' होता है, जिसमें दोनों पद प्रधान हैं।"
    },
    {
        question: "'राम-लक्ष्मण' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्वंद्व", correct: true },
            { text: "कर्मधारय", correct: false },
            { text: "बहुव्रीहि", correct: false },
            { text: "अव्ययीभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'राम-लक्ष्मण' का विग्रह 'राम और लक्ष्मण' होता है, जिसमें दोनों पद प्रधान हैं।"
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