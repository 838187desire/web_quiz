const questions = [
    {
        topHeading: "सर्वनाम पर आधारित 25 बहुविकल्पीय प्रश्न part 1 (quiz_no.42)"
    },
    {
        question: "सर्वनाम किसे कहते हैं?",
        answers: shuffle([
            { text: "किसी काम के करने या होने को", correct: false },
            { text: "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को", correct: false },
            { text: "जो शब्द संज्ञा के स्थान पर प्रयोग होते हैं", correct: true },
            { text: "जो शब्द संज्ञा और सर्वनाम की विशेषता बताते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सर्वनाम वे शब्द हैं जिनका प्रयोग संज्ञा के स्थान पर किया जाता है ताकि वाक्य में पुनरावृत्ति से बचा जा सके।<br><br><i class='fa-solid fa-angles-right icon'></i> जैसे: मैं, तुम, वह, यह।"
    },
    {
        question: "सर्वनाम के कितने भेद होते हैं?",
        answers: shuffle([
            { text: "चार", correct: false },
            { text: "पाँच", correct: false },
            { text: "छह", correct: true },
            { text: "सात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सर्वनाम के छह भेद होते हैं: पुरुषवाचक, निश्चयवाचक, अनिश्चयवाचक, संबंधवाचक, प्रश्नवाचक और निजवाचक सर्वनाम।"
    },
    {
        question: "'मैं' किस प्रकार का सर्वनाम है?",
        answers: shuffle([
            { text: "उत्तम पुरुषवाचक", correct: true },
            { text: "मध्यम पुरुषवाचक", correct: false },
            { text: "अन्य पुरुषवाचक", correct: false },
            { text: "निजवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मैं' और 'हम' बोलने वाले या लिखने वाले के लिए प्रयोग होते हैं, इसलिए ये उत्तम पुरुषवाचक सर्वनाम कहलाते हैं।"
    },
    {
        question: "'तुम' किस प्रकार का सर्वनाम है?",
        answers: shuffle([
            { text: "उत्तम पुरुषवाचक", correct: false },
            { text: "मध्यम पुरुषवाचक", correct: true },
            { text: "अन्य पुरुषवाचक", correct: false },
            { text: "प्रश्नवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तुम' और 'आप' सुनने वाले के लिए प्रयोग होते हैं, इसलिए ये मध्यम पुरुषवाचक सर्वनाम कहलाते हैं।"
    },
    {
        question: "'वह' किस प्रकार का सर्वनाम है?",
        answers: shuffle([
            { text: "उत्तम पुरुषवाचक", correct: false },
            { text: "मध्यम पुरुषवाचक", correct: false },
            { text: "अन्य पुरुषवाचक", correct: true },
            { text: "निश्चयवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वह' और 'वे' उस व्यक्ति के लिए प्रयोग होते हैं जिसके बारे में बात की जा रही हो, इसलिए ये अन्य पुरुषवाचक सर्वनाम हैं।"
    },
    {
        question: "'यह मेरी पुस्तक है।' इस वाक्य में 'यह' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "पुरुषवाचक", correct: false },
            { text: "निश्चयवाचक", correct: true },
            { text: "अनिश्चयवाचक", correct: false },
            { text: "संबंधवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यह' शब्द निश्चित रूप से पुस्तक की ओर संकेत कर रहा है, इसलिए यह निश्चयवाचक सर्वनाम है।"
    },
    {
        question: "'कोई आ रहा है।' इस वाक्य में 'कोई' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "निश्चयवाचक", correct: false },
            { text: "अनिश्चयवाचक", correct: true },
            { text: "प्रश्नवाचक", correct: false },
            { text: "निजवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कोई' से किसी व्यक्ति के आने का बोध हो रहा है, लेकिन यह निश्चित नहीं है कि कौन आ रहा है, इसलिए यह अनिश्चयवाचक सर्वनाम है।"
    },
    {
        question: "'जो करेगा सो भरेगा।' इस वाक्य में 'जो' और 'सो' कौन से सर्वनाम हैं?",
        answers: shuffle([
            { text: "प्रश्नवाचक", correct: false },
            { text: "निश्चयवाचक", correct: false },
            { text: "संबंधवाचक", correct: true },
            { text: "निजवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जो' और 'सो' दो वाक्यों के बीच संबंध स्थापित कर रहे हैं, इसलिए ये संबंधवाचक सर्वनाम हैं।"
    },
    {
        question: "'तुम क्या कर रहे हो?' इस वाक्य में 'क्या' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "प्रश्नवाचक", correct: true },
            { text: "निजवाचक", correct: false },
            { text: "पुरुषवाचक", correct: false },
            { text: "निश्चयवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क्या' शब्द से प्रश्न पूछा जा रहा है, इसलिए यह प्रश्नवाचक सर्वनाम है।"
    },
    {
        question: "'मैं अपना काम स्वयं करूँगा।' इस वाक्य में 'स्वयं' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "पुरुषवाचक", correct: false },
            { text: "निश्चयवाचक", correct: false },
            { text: "निजवाचक", correct: true },
            { text: "संबंधवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्वयं' शब्द कर्ता के लिए प्रयोग हुआ है और अपनेपन का बोध करा रहा है, इसलिए यह निजवाचक सर्वनाम है।"
    },
    {
        question: "'कुछ खा लेना।' इस वाक्य में 'कुछ' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "निश्चयवाचक", correct: false },
            { text: "अनिश्चयवाचक", correct: true },
            { text: "प्रश्नवाचक", correct: false },
            { text: "निजवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुछ' से किसी निश्चित वस्तु का बोध नहीं हो रहा है, इसलिए यह अनिश्चयवाचक सर्वनाम है।"
    },
    {
        question: "'यह घर मेरा है।' इस वाक्य में 'यह' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "पुरुषवाचक", correct: false },
            { text: "निश्चयवाचक", correct: true },
            { text: "अनिश्चयवाचक", correct: false },
            { text: "संबंधवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यह' शब्द निश्चित रूप से घर की ओर संकेत कर रहा है, इसलिए यह निश्चयवाचक सर्वनाम है।"
    },
    {
        question: "'उसने मुझसे कहा।' इस वाक्य में 'उसने' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "उत्तम पुरुषवाचक", correct: false },
            { text: "मध्यम पुरुषवाचक", correct: false },
            { text: "अन्य पुरुषवाचक", correct: true },
            { text: "निजवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उसने' शब्द उस व्यक्ति के लिए प्रयोग हुआ है जिसके बारे में बात हो रही है, इसलिए यह अन्य पुरुषवाचक सर्वनाम है।"
    },
    {
        question: "'कौन आ रहा है?' इस वाक्य में 'कौन' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "पुरुषवाचक", correct: false },
            { text: "निश्चयवाचक", correct: false },
            { text: "प्रश्नवाचक", correct: true },
            { text: "निजवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कौन' शब्द से प्रश्न पूछा जा रहा है, इसलिए यह प्रश्नवाचक सर्वनाम है।"
    },
    {
        question: "'जैसी करनी वैसी भरनी।' इस वाक्य में 'जैसी' और 'वैसी' कौन से सर्वनाम हैं?",
        answers: shuffle([
            { text: "प्रश्नवाचक", correct: false },
            { text: "निश्चयवाचक", correct: false },
            { text: "संबंधवाचक", correct: true },
            { text: "निजवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जैसी' और 'वैसी' दो वाक्यों के बीच संबंध स्थापित कर रहे हैं, इसलिए ये संबंधवाचक सर्वनाम हैं।"
    },
    {
        question: "'अपने आप' किस प्रकार का सर्वनाम है?",
        answers: shuffle([
            { text: "पुरुषवाचक", correct: false },
            { text: "निजवाचक", correct: true },
            { text: "अनिश्चयवाचक", correct: false },
            { text: "निश्चयवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अपने आप' शब्द कर्ता द्वारा स्वयं काम करने का बोध करा रहा है, इसलिए यह निजवाचक सर्वनाम है।"
    },
    {
        question: "'हमें अपना काम करना चाहिए।' इस वाक्य में 'हमें' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "उत्तम पुरुषवाचक", correct: true },
            { text: "मध्यम पुरुषवाचक", correct: false },
            { text: "अन्य पुरुषवाचक", correct: false },
            { text: "संबंधवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हमें' शब्द बोलने वाले या लिखने वाले के लिए प्रयोग हुआ है, इसलिए यह उत्तम पुरुषवाचक सर्वनाम है।"
    },
    {
        question: "'तुम कहाँ जा रहे हो?' इस वाक्य में 'तुम' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "उत्तम पुरुषवाचक", correct: false },
            { text: "मध्यम पुरुषवाचक", correct: true },
            { text: "अन्य पुरुषवाचक", correct: false },
            { text: "प्रश्नवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तुम' शब्द सुनने वाले के लिए प्रयोग हुआ है, इसलिए यह मध्यम पुरुषवाचक सर्वनाम है।"
    },
    {
        question: "'कोई कुछ कह रहा है।' इस वाक्य में 'कोई' और 'कुछ' कौन से सर्वनाम हैं?",
        answers: shuffle([
            { text: "निश्चयवाचक", correct: false },
            { text: "अनिश्चयवाचक", correct: true },
            { text: "प्रश्नवाचक", correct: false },
            { text: "संबंधवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कोई' और 'कुछ' से किसी निश्चित व्यक्ति या वस्तु का बोध नहीं हो रहा है, इसलिए ये अनिश्चयवाचक सर्वनाम हैं।"
    },
    {
        question: "'यह तुम्हारा है।' इस वाक्य में 'यह' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "पुरुषवाचक", correct: false },
            { text: "निश्चयवाचक", correct: true },
            { text: "अनिश्चयवाचक", correct: false },
            { text: "संबंधवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यह' शब्द निश्चित रूप से किसी वस्तु की ओर संकेत कर रहा है, इसलिए यह निश्चयवाचक सर्वनाम है।"
    },
    {
        question: "'सर्वनाम' का शाब्दिक अर्थ क्या है?",
        answers: shuffle([
            { text: "सबका नाम", correct: true },
            { text: "सबका काम", correct: false },
            { text: "सबकी विशेषता", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सर्वनाम' शब्द 'सर्व' (सब) और 'नाम' से मिलकर बना है, जिसका शाब्दिक अर्थ 'सबका नाम' होता है।"
    },
    {
        question: "'आप' किस प्रकार का सर्वनाम है?",
        answers: shuffle([
            { text: "पुरुषवाचक (उत्तम पुरुष)", correct: false },
            { text: "पुरुषवाचक (मध्यम पुरुष)", correct: true },
            { text: "पुरुषवाचक (अन्य पुरुष)", correct: false },
            { text: "निजवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आप' का प्रयोग सुनने वाले के लिए किया जाता है, इसलिए यह मध्यम पुरुषवाचक सर्वनाम है।"
    },
    {
        question: "'वह पढ़ रहा है।' इस वाक्य में 'वह' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "निश्चयवाचक", correct: false },
            { text: "अनिश्चयवाचक", correct: false },
            { text: "अन्य पुरुषवाचक", correct: true },
            { text: "संबंधवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वह' शब्द किसी तीसरे व्यक्ति के लिए प्रयोग हुआ है, इसलिए यह अन्य पुरुषवाचक सर्वनाम है।"
    },
    {
        question: "'जो मेहनत करता है, वह सफल होता है।' इस वाक्य में 'वह' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "पुरुषवाचक", correct: false },
            { text: "निश्चयवाचक", correct: false },
            { text: "संबंधवाचक", correct: true },
            { text: "निजवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जो' और 'वह' दोनों एक दूसरे से संबंधित हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> 'वह' 'जो' के साथ संबंध स्थापित कर रहा है, इसलिए यह संबंधवाचक सर्वनाम है।"
    },
    {
        question: "'कुछ लोग आ रहे हैं।' इस वाक्य में 'कुछ' कौन सा सर्वनाम है?",
        answers: shuffle([
            { text: "निश्चयवाचक", correct: false },
            { text: "अनिश्चयवाचक", correct: true },
            { text: "प्रश्नवाचक", correct: false },
            { text: "निजवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुछ' से लोगों की संख्या निश्चित नहीं है, इसलिए यह अनिश्चयवाचक सर्वनाम है।"
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