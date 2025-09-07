const questions = [
    {
        topHeading: "सर्वनाम पर आधारित 25 बहुविकल्पीय प्रश्न part 3 (quiz_no.43)"
    },
    {
        question: "'तुम्हें कौन बुला रहा है?' इस वाक्य में 'कौन' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "पुरुषवाचक", correct: false },
            { text: "निश्चयवाचक", correct: false },
            { text: "प्रश्नवाचक", correct: true },
            { text: "निजवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कौन' शब्द से प्रश्न पूछा जा रहा है, इसलिए यह प्रश्नवाचक सर्वनाम है।"
    },
    {
        question: "'मैं खुद वहाँ जाऊँगा।' इस वाक्य में 'खुद' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "पुरुषवाचक", correct: false },
            { text: "निश्चयवाचक", correct: false },
            { text: "अनिश्चयवाचक", correct: false },
            { text: "निजवाचक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खुद' शब्द कर्ता (मैं) के लिए प्रयोग हुआ है और अपनेपन का बोध करा रहा है।"
    },
    {
        question: "'यह मेरा भाई है।' इस वाक्य में 'यह' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "पुरुषवाचक", correct: false },
            { text: "निश्चयवाचक", correct: true },
            { text: "अनिश्चयवाचक", correct: false },
            { text: "संबंधवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यह' शब्द निश्चित रूप से किसी व्यक्ति की ओर संकेत कर रहा है।"
    },
    {
        question: "'आप कब आए?' इस वाक्य में 'आप' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "उत्तम पुरुषवाचक", correct: false },
            { text: "मध्यम पुरुषवाचक", correct: true },
            { text: "अन्य पुरुषवाचक", correct: false },
            { text: "प्रश्नवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आप' का प्रयोग सुनने वाले के लिए किया गया है।"
    },
    {
        question: "'किसी ने मेरी घड़ी चुरा ली।' इस वाक्य में 'किसी' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "निश्चयवाचक", correct: false },
            { text: "अनिश्चयवाचक", correct: true },
            { text: "प्रश्नवाचक", correct: false },
            { text: "निजवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'किसी' से किसी निश्चित व्यक्ति का बोध नहीं हो रहा है।"
    },
    {
        question: "'जितना गुड़ डालोगे उतना मीठा होगा।' इस वाक्य में 'जितना' और 'उतना' कौन से सर्वनाम हैं?",
        answers: shuffle([
            { text: "प्रश्नवाचक", correct: false },
            { text: "निश्चयवाचक", correct: false },
            { text: "संबंधवाचक", correct: true },
            { text: "निजवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जितना' और 'उतना' दो वाक्यों के बीच संबंध स्थापित कर रहे हैं।"
    },
    {
        question: "'हम खेलने जा रहे हैं।' इस वाक्य में 'हम' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "उत्तम पुरुषवाचक", correct: true },
            { text: "मध्यम पुरुषवाचक", correct: false },
            { text: "अन्य पुरुषवाचक", correct: false },
            { text: "संबंधवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हम' शब्द बोलने वाले के लिए प्रयोग हुआ है।"
    },
    {
        question: "'निजवाचक सर्वनाम' का उदाहरण है:",
        answers: shuffle([
            { text: "आप (आप कब आए?)", correct: false },
            { text: "आप (आप भला तो जग भला)", correct: true },
            { text: "कोई", correct: false },
            { text: "वह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस वाक्य में 'आप' का प्रयोग स्वयं के लिए हुआ है, इसलिए यह निजवाचक सर्वनाम है।"
    },
    {
        question: "'वहाँ कुछ गिर गया।' इस वाक्य में 'कुछ' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "निश्चयवाचक", correct: false },
            { text: "अनिश्चयवाचक", correct: true },
            { text: "प्रश्नवाचक", correct: false },
            { text: "निजवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुछ' से किसी निश्चित वस्तु का बोध नहीं हो रहा है।"
    },
    {
        question: "'जो आया है, सो जाएगा।' इस वाक्य में 'सो' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "पुरुषवाचक", correct: false },
            { text: "निश्चयवाचक", correct: false },
            { text: "संबंधवाचक", correct: true },
            { text: "निजवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जो' और 'सो' एक दूसरे से संबंध स्थापित कर रहे हैं।"
    },
    {
        question: "'कौन दरवाजे पर खड़ा है?' इस वाक्य में 'कौन' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "पुरुषवाचक", correct: false },
            { text: "निश्चयवाचक", correct: false },
            { text: "प्रश्नवाचक", correct: true },
            { text: "निजवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कौन' शब्द से प्रश्न पूछा जा रहा है।"
    },
    {
        question: "'यह हमारा विद्यालय है।' इस वाक्य में 'हमारा' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "उत्तम पुरुषवाचक", correct: true },
            { text: "मध्यम पुरुषवाचक", correct: false },
            { text: "अन्य पुरुषवाचक", correct: false },
            { text: "संबंधवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हमारा' शब्द बोलने वाले के समूह के लिए प्रयोग हुआ है।"
    },
    {
        question: "'तुम लोग कहाँ हो?' इस वाक्य में 'तुम' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "उत्तम पुरुषवाचक", correct: false },
            { text: "मध्यम पुरुषवाचक", correct: true },
            { text: "अन्य पुरुषवाचक", correct: false },
            { text: "प्रश्नवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तुम' शब्द सुनने वालों के लिए प्रयोग हुआ है।"
    },
    {
        question: "'जो आया है, वह मेरा मित्र है।' इस वाक्य में 'वह' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "पुरुषवाचक", correct: false },
            { text: "निश्चयवाचक", correct: false },
            { text: "संबंधवाचक", correct: true },
            { text: "निजवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जो' और 'वह' एक दूसरे से संबंध स्थापित कर रहे हैं।"
    },
    {
        question: "'आप क्या कर रहे हैं?' इस वाक्य में 'आप' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "उत्तम पुरुषवाचक", correct: false },
            { text: "मध्यम पुरुषवाचक", correct: true },
            { text: "अन्य पुरुषवाचक", correct: false },
            { text: "निजवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आप' का प्रयोग सुनने वाले के लिए किया गया है।"
    },
    {
        question: "'वे' शब्द का प्रयोग किस पुरुषवाचक सर्वनाम के लिए होता है?",
        answers: shuffle([
            { text: "उत्तम पुरुष", correct: false },
            { text: "मध्यम पुरुष", correct: false },
            { text: "अन्य पुरुष", correct: true },
            { text: "निजवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वे' उस व्यक्ति के लिए प्रयोग होता है जिसके बारे में बात की जा रही हो।"
    },
    {
        question: "'कोई कुछ लाया है।' इस वाक्य में 'कोई' और 'कुछ' कौन से सर्वनाम हैं?",
        answers: shuffle([
            { text: "निश्चयवाचक", correct: false },
            { text: "अनिश्चयवाचक", correct: true },
            { text: "प्रश्नवाचक", correct: false },
            { text: "संबंधवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कोई' और 'कुछ' से किसी निश्चित व्यक्ति या वस्तु का बोध नहीं हो रहा है।"
    },
    {
        question: "'सर्वनाम' का प्रयोग क्यों किया जाता है?",
        answers: shuffle([
            { text: "वाक्यों को लंबा करने के लिए", correct: false },
            { text: "संज्ञा की पुनरावृत्ति से बचने के लिए", correct: true },
            { text: "वाक्यों को कठिन बनाने के लिए", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सर्वनाम का मुख्य उद्देश्य संज्ञा की बार-बार पुनरावृत्ति को रोकना है।"
    },
    {
        question: "'यह पुस्तक बहुत अच्छी है।' इस वाक्य में 'यह' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "पुरुषवाचक", correct: false },
            { text: "निश्चयवाचक", correct: true },
            { text: "अनिश्चयवाचक", correct: false },
            { text: "संबंधवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यह' शब्द निश्चित रूप से पुस्तक की ओर संकेत कर रहा है।"
    },
    {
        question: "'आप' निजवाचक सर्वनाम के रूप में कब प्रयोग होता है?",
        answers: shuffle([
            { text: "जब यह कर्ता का बोध कराए।", correct: true },
            { text: "जब यह सुनने वाले का बोध कराए।", correct: false },
            { text: "जब यह किसी तीसरे व्यक्ति का बोध कराए।", correct: false },
            { text: "कोई नहीं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निजवाचक 'आप' का प्रयोग कर्ता के लिए होता है, जैसे 'मैं आप ही चला जाऊँगा'।"
    },
    {
        question: "'कौन क्या कर रहा है?' इस वाक्य में 'क्या' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "पुरुषवाचक", correct: false },
            { text: "निश्चयवाचक", correct: false },
            { text: "प्रश्नवाचक", correct: true },
            { text: "निजवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क्या' शब्द से प्रश्न पूछा जा रहा है।"
    },
    {
        question: "'मैं स्वयं ही चला जाऊँगा।' इस वाक्य में 'स्वयं' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "पुरुषवाचक", correct: false },
            { text: "निश्चयवाचक", correct: false },
            { text: "अनिश्चयवाचक", correct: false },
            { text: "निजवाचक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्वयं' शब्द कर्ता के लिए प्रयोग हुआ है और अपनेपन का बोध करा रहा है।"
    },
    {
        question: "'यह उसका घर है।' इस वाक्य में 'यह' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "पुरुषवाचक", correct: false },
            { text: "निश्चयवाचक", correct: true },
            { text: "अनिश्चयवाचक", correct: false },
            { text: "संबंधवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यह' शब्द निश्चित रूप से घर की ओर संकेत कर रहा है।"
    },
    {
        question: "'कोई भी आ सकता है।' इस वाक्य में 'कोई भी' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "निश्चयवाचक", correct: false },
            { text: "अनिश्चयवाचक", correct: true },
            { text: "प्रश्नवाचक", correct: false },
            { text: "निजवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कोई भी' से किसी निश्चित व्यक्ति का बोध नहीं हो रहा है।"
    },
    {
        question: "'जो मेहनत करेगा, वही पाएगा।' इस वाक्य में 'वही' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "पुरुषवाचक", correct: false },
            { text: "निश्चयवाचक", correct: false },
            { text: "संबंधवाचक", correct: true },
            { text: "निजवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जो' और 'वही' एक दूसरे से संबंध स्थापित कर रहे हैं।"
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