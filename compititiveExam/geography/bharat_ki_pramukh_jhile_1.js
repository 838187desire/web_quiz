const questions = [ 
    {
        topHeading: "भारत की प्रमुख झीलों पर आधारित बहुविकल्पीय प्रश्न part 1  (quiz_no. 91)."
    },
    {
        question: "भारत की सबसे बड़ी मीठे पानी की प्राकृतिक झील कौन सी है?",
        answers: shuffle([
            { text: "चिल्का झील", correct: false },
            { text: "वुलर झील", correct: true },
            { text: "सांभर झील", correct: false },
            { text: "लोकटक झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वुलर झील जम्मू और कश्मीर में स्थित है और यह भारत की सबसे बड़ी ताजे पानी की प्राकृतिक झील है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह झेलम नदी पर स्थित है।"
    },
    {
        question: "भारत की सबसे बड़ी खारे पानी की लैगून झील कौन सी है?",
        answers: shuffle([
            { text: "सांभर झील", correct: false },
            { text: "पुलिकट झील", correct: false },
            { text: "चिल्का झील", correct: true },
            { text: "वेम्बनाड झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चिल्का झील ओडिशा में स्थित है और यह भारत की सबसे बड़ी खारे पानी की लैगून झील है।"
    },
    {
        question: "'लोकटक झील' किस राज्य में स्थित है और यह किस लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "मेघालय, तैरते हुए राष्ट्रीय उद्यान के लिए", correct: false },
            { text: "मणिपुर, तैरते हुए राष्ट्रीय उद्यान के लिए", correct: true },
            { text: "मिजोरम, ताजे पानी के लिए", correct: false },
            { text: "असम, पक्षियों के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोकटक झील मणिपुर में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अपने 'फुम्दी' (तैरते हुए द्वीप) के लिए प्रसिद्ध है, जिस पर दुनिया का एकमात्र तैरता हुआ राष्ट्रीय उद्यान 'केइबुल लामजाओ' स्थित है।"
    },
    {
        question: "भारत की सबसे बड़ी खारे पानी की अंतर्देशीय (inland) झील कौन सी है?",
        answers: shuffle([
            { text: "चिल्का झील", correct: false },
            { text: "वेम्बनाड झील", correct: false },
            { text: "सांभर झील", correct: true },
            { text: "कोलेरू झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सांभर झील राजस्थान में स्थित है और यह भारत की सबसे बड़ी खारे पानी की अंतर्देशीय झील है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह नमक उत्पादन के लिए भी प्रसिद्ध है।"
    },
    {
        question: "'वेंबनाड झील' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "तमिलनाडु", correct: false },
            { text: "केरल", correct: true },
            { text: "कर्नाटक", correct: false },
            { text: "आंध्र प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेम्बनाड झील केरल में स्थित एक लंबी लैगून झील है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत की सबसे लंबी झील भी है।"
    },
    {
        question: "'पुलिकट झील' किन दो राज्यों की सीमा पर स्थित है?",
        answers: shuffle([
            { text: "कर्नाटक और केरल", correct: false },
            { text: "ओडिशा और आंध्र प्रदेश", correct: false },
            { text: "आंध्र प्रदेश और तमिलनाडु", correct: true },
            { text: "तमिलनाडु और केरल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुलिकट झील भारत की दूसरी सबसे बड़ी खारे पानी की लैगून झील है जो आंध्र प्रदेश और तमिलनाडु की सीमा पर स्थित है।"
    },
    {
        question: "'कोलेरू झील' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "केरल", correct: false },
            { text: "तमिलनाडु", correct: false },
            { text: "कर्नाटक", correct: false },
            { text: "आंध्र प्रदेश", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोलेरू झील आंध्र प्रदेश में कृष्णा और गोदावरी नदियों के डेल्टा के बीच स्थित एक ताजे पानी की झील है।"
    },
    {
        question: "निम्नलिखित में से कौन सी झील भारत की सबसे ऊँचाई पर स्थित झील है?",
        answers: shuffle([
            { text: "डल झील", correct: false },
            { text: "पैंगोंग त्सो झील", correct: false },
            { text: "चोलामू झील", correct: true },
            { text: "लोनार झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोलामू झील सिक्किम में स्थित है और यह भारत की सबसे ऊँचाई पर स्थित झील है।<br><br><i class='fa-solid fa-angles-right icon'></i> तीस्ता नदी का उद्गम इसी झील से होता है।"
    },
    {
        question: "'लोनार झील' का निर्माण किस प्रकार हुआ है?",
        answers: shuffle([
            { text: "भूस्खलन से", correct: false },
            { text: "ज्वालामुखी से", correct: false },
            { text: "उल्कापिंड के गिरने से", correct: true },
            { text: "नदी के मार्ग बदलने से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोनार झील महाराष्ट्र के बुलढाणा जिले में स्थित है और इसका निर्माण एक उल्कापिंड के पृथ्वी से टकराने के कारण हुआ था।"
    },
    {
        question: "'राजसमंद झील' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "मध्य प्रदेश", correct: false },
            { text: "राजस्थान", correct: true },
            { text: "गुजरात", correct: false },
            { text: "उत्तर प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजसमंद झील राजस्थान में स्थित है, जिसका निर्माण 17वीं शताब्दी में राज सिंह प्रथम द्वारा करवाया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक कृत्रिम झील है।"
    },
    {
        question: "'हुसैन सागर झील' किन दो शहरों को जोड़ती है?",
        answers: shuffle([
            { text: "बेंगलुरु और मैसूर", correct: false },
            { text: "हैदराबाद और सिकंदराबाद", correct: true },
            { text: "चेन्नई और मदुरै", correct: false },
            { text: "पुणे और मुंबई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुसैन सागर झील तेलंगाना में स्थित एक कृत्रिम झील है जो हैदराबाद और सिकंदराबाद को जोड़ती है।"
    },
    {
        question: "'पिछोला झील' किस शहर में स्थित है?",
        answers: shuffle([
            { text: "जयपुर", correct: false },
            { text: "जोधपुर", correct: false },
            { text: "उदयपुर", correct: true },
            { text: "जैसलमेर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पिछोला झील राजस्थान के उदयपुर शहर में स्थित है और यह अपने सुंदर द्वीपों और महलों के लिए जानी जाती है।"
    },
    {
        question: "निम्नलिखित में से कौन सी झील एक क्रेटर झील है?",
        answers: shuffle([
            { text: "डल झील", correct: false },
            { text: "लोनार झील", correct: true },
            { text: "वुलर झील", correct: false },
            { text: "चिल्का झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोनार झील का निर्माण एक उल्कापिंड के टकराने से हुआ था, इसलिए इसे क्रेटर झील भी कहा जाता है।"
    },
    {
        question: "'अष्टमुडी झील' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "तमिलनाडु", correct: false },
            { text: "आंध्र प्रदेश", correct: false },
            { text: "कर्नाटक", correct: false },
            { text: "केरल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अष्टमुडी झील केरल में स्थित एक लैगून झील है, जिसका नाम 'आठ भुजाओं वाली' झील से आया है।"
    },
    {
        question: "'नागिन झील' किस राज्य/केंद्र शासित प्रदेश में स्थित है?",
        answers: shuffle([
            { text: "जम्मू और कश्मीर", correct: true },
            { text: "हिमाचल प्रदेश", correct: false },
            { text: "उत्तराखंड", correct: false },
            { text: "सिक्किम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नागिन झील जम्मू और कश्मीर में स्थित है और यह डल झील से एक सेतुबंध द्वारा जुड़ी हुई है।"
    },
    {
        question: "'डल झील' किस शहर में स्थित है?",
        answers: shuffle([
            { text: "शिमला", correct: false },
            { text: "श्रीनगर", correct: true },
            { text: "देहरादून", correct: false },
            { text: "जम्मू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डल झील जम्मू और कश्मीर की ग्रीष्मकालीन राजधानी श्रीनगर में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे 'श्रीनगर का गहना' भी कहा जाता है।"
    },
    {
        question: "'फतेह सागर झील' किस शहर में स्थित है?",
        answers: shuffle([
            { text: "उदयपुर", correct: true },
            { text: "जयपुर", correct: false },
            { text: "जोधपुर", correct: false },
            { text: "अजमेर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फतेह सागर झील राजस्थान के उदयपुर में स्थित एक कृत्रिम झील है।"
    },
    {
        question: "'कोडेकनाल झील' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "केरल", correct: false },
            { text: "कर्नाटक", correct: false },
            { text: "तमिलनाडु", correct: true },
            { text: "आंध्र प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोडेकनाल झील तमिलनाडु के डिंडीगुल जिले में स्थित एक मानव निर्मित झील है।"
    },
    {
        question: "निम्नलिखित में से कौन सी झील एक लैगून नहीं है?",
        answers: shuffle([
            { text: "चिल्का झील", correct: false },
            { text: "पुलिकट झील", correct: false },
            { text: "वेम्बनाड झील", correct: false },
            { text: "सांभर झील", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सांभर झील एक अंतर्देशीय खारे पानी की झील है, जबकि चिल्का, पुलिकट और वेम्बनाड समुद्री तटों पर स्थित लैगून झीलें हैं।"
    },
    {
        question: "'नैनीताल झील' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "हिमाचल प्रदेश", correct: false },
            { text: "जम्मू और कश्मीर", correct: false },
            { text: "उत्तराखंड", correct: true },
            { text: "सिक्किम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नैनीताल झील उत्तराखंड के नैनीताल शहर में स्थित एक ताजे पानी की झील है।"
    },
    {
        question: "'गोविंद सागर झील' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: false },
            { text: "सतलज", correct: true },
            { text: "नर्मदा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोविंद सागर झील हिमाचल प्रदेश में सतलज नदी पर स्थित एक कृत्रिम झील है, जो भाखड़ा नांगल बांध के पीछे बनी है।"
    },
    {
        question: "'लोकतक झील' पर स्थित तैरते हुए राष्ट्रीय उद्यान का नाम क्या है?",
        answers: shuffle([
            { text: "रणथंभौर राष्ट्रीय उद्यान", correct: false },
            { text: "सुंदरवन राष्ट्रीय उद्यान", correct: false },
            { text: "केइबुल लामजाओ राष्ट्रीय उद्यान", correct: true },
            { text: "जिम कॉर्बेट राष्ट्रीय उद्यान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोकतक झील पर स्थित केइबुल लामजाओ राष्ट्रीय उद्यान दुनिया का एकमात्र तैरता हुआ राष्ट्रीय उद्यान है।"
    },
    {
        question: "'रूपकुंड झील' को 'रहस्यमयी झील' क्यों कहा जाता है?",
        answers: shuffle([
            { text: "यह अक्सर अपना रंग बदलती है।", correct: false },
            { text: "इसमें तैरते हुए फुम्दी पाए जाते हैं।", correct: false },
            { text: "इसके तट पर कई रहस्यमयी मंदिर हैं।", correct: false },
            { text: "यहाँ मानव कंकाल पाए गए हैं।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तराखंड में स्थित रूपकुंड झील में सैकड़ों प्राचीन मानव कंकाल पाए गए हैं, जिससे इसे 'रहस्यमयी झील' कहा जाता है।"
    },
    {
        question: "'कोडीकनाल झील' किस प्रकार की झील है?",
        answers: shuffle([
            { text: "प्राकृतिक", correct: false },
            { text: "कृत्रिम", correct: true },
            { text: "ज्वालामुखी", correct: false },
            { text: "लैगून", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोडीकनाल झील एक मानव निर्मित या कृत्रिम झील है।"
    },
    {
        question: "'सलीम अली झील' किस शहर में स्थित है?",
        answers: shuffle([
            { text: "मुंबई", correct: false },
            { text: "औरंगाबाद", correct: true },
            { text: "बेंगलुरु", correct: false },
            { text: "हैदराबाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सलीम अली झील महाराष्ट्र के औरंगाबाद शहर में स्थित है, जिसका नाम प्रसिद्ध पक्षी विज्ञानी डॉ. सलीम अली के नाम पर रखा गया है।"
    },
    {
        question: "'नैनीताल झील' किस प्रकार की झील का उदाहरण है?",
        answers: shuffle([
            { text: "लैगून झील", correct: false },
            { text: "ज्वालामुखी झील", correct: false },
            { text: "विवर्तनिक (Tectonic) झील", correct: true },
            { text: "कृत्रिम झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नैनीताल झील का निर्माण भूस्खलन या विवर्तनिक गतिविधि के कारण हुआ था, जिससे एक खाई बन गई थी जिसमें पानी भर गया।"
    },
    {
        question: "'पिछोला झील' का निर्माण किस सदी में हुआ था?",
        answers: shuffle([
            { text: "13वीं सदी", correct: false },
            { text: "14वीं सदी", correct: true },
            { text: "15वीं सदी", correct: false },
            { text: "16वीं सदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पिछोला झील का निर्माण 14वीं सदी के अंत में एक बंजारे द्वारा करवाया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे बाद में महाराणा उदय सिंह द्वितीय ने विस्तारित किया।"
    },
    {
        question: "'पुष्कर झील' किस शहर में स्थित है?",
        answers: shuffle([
            { text: "जयपुर", correct: false },
            { text: "जोधपुर", correct: false },
            { text: "अजमेर", correct: true },
            { text: "उदयपुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुष्कर झील राजस्थान के अजमेर जिले में स्थित एक पवित्र झील है, जो हिंदुओं के लिए एक महत्वपूर्ण तीर्थस्थल है।"
    },
    {
        question: "'डिडवाना झील' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "हरियाणा", correct: false },
            { text: "पंजाब", correct: false },
            { text: "राजस्थान", correct: true },
            { text: "गुजरात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डिडवाना झील राजस्थान के नागौर जिले में स्थित एक खारे पानी की झील है।"
    },
    {
        question: "'सूरजकुंड झील' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "पंजाब", correct: false },
            { text: "हरियाणा", correct: true },
            { text: "राजस्थान", correct: false },
            { text: "उत्तर प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूरजकुंड झील हरियाणा के फरीदाबाद जिले में स्थित एक मानव निर्मित कुंड है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ हर साल प्रसिद्ध सूरजकुंड अंतर्राष्ट्रीय शिल्प मेला लगता है।"
    },
    {
        question: "'उमियम झील' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "असम", correct: false },
            { text: "मेघालय", correct: true },
            { text: "मणिपुर", correct: false },
            { text: "मिजोरम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उमियम झील मेघालय में स्थित एक कृत्रिम झील है, जिसे उमियम नदी पर बांध बनाकर बनाया गया था।"
    },
    {
        question: "'कोडेकनाल झील' किस पर्वत श्रृंखला में स्थित है?",
        answers: shuffle([
            { text: "नीलगिरि पर्वतमाला", correct: false },
            { text: "पालनी पहाड़ियां", correct: true },
            { text: "जावादी पहाड़ियां", correct: false },
            { text: "अन्नामलाई पहाड़ियां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोडेकनाल झील तमिलनाडु में पालनी पहाड़ियों पर स्थित एक मानव निर्मित झील है।"
    },
    {
        question: "'कोलेरू झील' किस नदी के डेल्टा में स्थित है?",
        answers: shuffle([
            { text: "महानदी और गोदावरी", correct: false },
            { text: "कृष्णा और कावेरी", correct: false },
            { text: "गोदावरी और कृष्णा", correct: true },
            { text: "नर्मदा और ताप्ती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोलेरू झील आंध्र प्रदेश में गोदावरी और कृष्णा नदियों के डेल्टा के बीच स्थित है।"
    },
    {
        question: "'रूपकुंड झील' किस भारतीय राज्य में स्थित है?",
        answers: shuffle([
            { text: "हिमाचल प्रदेश", correct: false },
            { text: "जम्मू और कश्मीर", correct: false },
            { text: "उत्तराखंड", correct: true },
            { text: "सिक्किम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रूपकुंड झील उत्तराखंड के चमोली जिले में स्थित है और यह 'रहस्यमयी झील' के नाम से भी प्रसिद्ध है।"
    },
    {
        question: "भारत में मीठे पानी की सबसे बड़ी कृत्रिम झील कौन सी है?",
        answers: shuffle([
            { text: "वुलर झील", correct: false },
            { text: "गोविंद सागर झील", correct: true },
            { text: "कोलेरू झील", correct: false },
            { text: "शिवाजी सागर झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोविंद सागर झील हिमाचल प्रदेश में भाखड़ा नांगल बांध के पीछे स्थित है और यह भारत की सबसे बड़ी मीठे पानी की कृत्रिम झील है।"
    },
    {
        question: "'चोलामू झील' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "असम", correct: false },
            { text: "उत्तराखंड", correct: false },
            { text: "सिक्किम", correct: true },
            { text: "अरुणाचल प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोलामू झील सिक्किम में स्थित है और इसे भारत की सबसे ऊँचाई पर स्थित झील माना जाता है।"
    },
    {
        question: "'मणिपुर' में पाई जाने वाली झील जो 'फुम्दी' के लिए प्रसिद्ध है, वह कौन सी है?",
        answers: shuffle([
            { text: "लोकटक झील", correct: true },
            { text: "डल झील", correct: false },
            { text: "पुलिकट झील", correct: false },
            { text: "हुसैन सागर झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोकटक झील मणिपुर में स्थित है और इसकी सतह पर तैरते हुए वनस्पति और मिट्टी के द्वीप (फुम्दी) पाए जाते हैं।"
    },
    {
        question: "'भारत की सबसे लंबी झील' कौन सी है?",
        answers: shuffle([
            { text: "चिल्का झील", correct: false },
            { text: "वुलर झील", correct: false },
            { text: "वेम्बनाड झील", correct: true },
            { text: "सांभर झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेम्बनाड झील केरल में स्थित है और लगभग 96.5 किमी की लंबाई के साथ यह भारत की सबसे लंबी झील है।"
    },
    {
        question: "'पुलिकट झील' में कौन सा द्वीप स्थित है?",
        answers: shuffle([
            { text: "अब्दुल कलाम द्वीप", correct: false },
            { text: "श्रीहरिकोटा द्वीप", correct: true },
            { text: "सगार द्वीप", correct: false },
            { text: "पंबन द्वीप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्रीहरिकोटा द्वीप पुलिकट झील को बंगाल की खाड़ी से अलग करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारतीय अंतरिक्ष अनुसंधान संगठन (ISRO) का सतीश धवन अंतरिक्ष केंद्र भी है।"
    },
    {
        question: "'सूरजकुंड झील' का निर्माण किस प्रकार हुआ है?",
        answers: shuffle([
            { text: "ज्वालामुखी से", correct: false },
            { text: "मानव निर्मित", correct: true },
            { text: "भूस्खलन से", correct: false },
            { text: "उल्कापिंड के गिरने से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूरजकुंड झील का निर्माण 10वीं शताब्दी में तोमर राजवंश के राजा सूरज पाल ने करवाया था।"
    },
    {
        question: "'लोनार झील' किस प्रकार की झील है?",
        answers: shuffle([
            { text: "लैगून", correct: false },
            { text: "विवर्तनिक", correct: false },
            { text: "उल्कापिंड निर्मित", correct: true },
            { text: "हिमानी झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोनार झील महाराष्ट्र में एक उल्कापिंड के टकराने से बनी है, इसलिए इसे उल्कापिंड निर्मित या क्रेटर झील भी कहते हैं।"
    },
    {
        question: "'राजसमंद झील' किस शहर के पास स्थित है?",
        answers: shuffle([
            { text: "जयपुर", correct: false },
            { text: "उदयपुर", correct: false },
            { text: "राजसमंद", correct: true },
            { text: "अजमेर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजसमंद झील राजस्थान के राजसमंद शहर में स्थित एक कृत्रिम झील है।"
    },
    {
        question: "'अष्टमुडी झील' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "केरल", correct: true },
            { text: "तमिलनाडु", correct: false },
            { text: "आंध्र प्रदेश", correct: false },
            { text: "कर्नाटक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अष्टमुडी झील केरल में स्थित एक लैगून झील है, जिसका नाम 'आठ भुजाओं वाली' झील से आया है, क्योंकि इसकी आठ शाखाएँ हैं।"
    },
    {
        question: "'नैनीताल झील' किस प्रकार की झील का उदाहरण है?",
        answers: shuffle([
            { text: "लैगून झील", correct: false },
            { text: "ज्वालामुखी झील", correct: false },
            { text: "विवर्तनिक (Tectonic) झील", correct: true },
            { text: "कृत्रिम झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नैनीताल झील का निर्माण भूस्खलन या विवर्तनिक गतिविधि के कारण हुआ था, जिससे एक खाई बन गई थी जिसमें पानी भर गया।"
    },
    {
        question: "'खारे पानी की सबसे बड़ी झील' के संबंध में कौन सा कथन सत्य है?",
        answers: shuffle([
            { text: "यह भारत की सबसे लंबी झील है।", correct: false },
            { text: "यह भारत की सबसे बड़ी अंतर्देशीय झील है।", correct: false },
            { text: "यह भारत की सबसे बड़ी लैगून झील है।", correct: true },
            { text: "इसका पानी मीठा है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चिल्का झील भारत की सबसे बड़ी खारे पानी की लैगून झील है, जबकि सांभर सबसे बड़ी अंतर्देशीय झील है।"
    },
    {
        question: "'पेरियार झील' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "तमिलनाडु", correct: false },
            { text: "केरल", correct: true },
            { text: "कर्नाटक", correct: false },
            { text: "आंध्र प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेरियार झील केरल में पेरियार वन्यजीव अभयारण्य के भीतर स्थित है।"
    },
    {
        question: "'डल झील' में पाए जाने वाले तैरते हुए बगीचों को क्या कहा जाता है?",
        answers: shuffle([
            { text: "शिकारा", correct: false },
            { text: "फुम्दी", correct: false },
            { text: "राध", correct: true },
            { text: "कुदाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डल झील में पाए जाने वाले तैरते हुए वनस्पति के बगीचों को 'राध' कहा जाता है।"
    },
    {
        question: "'पुलिकट झील' में कौन सा पक्षी अभयारण्य स्थित है?",
        answers: shuffle([
            { text: "नलबाना पक्षी अभयारण्य", correct: false },
            { text: "रंगनाथिट्टू पक्षी अभयारण्य", correct: false },
            { text: "पुलिकट झील पक्षी अभयारण्य", correct: true },
            { text: "भरतपुर पक्षी अभयारण्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुलिकट झील के पास 'पुलिकट झील पक्षी अभयारण्य' स्थित है, जो प्रवासी पक्षियों के लिए एक महत्वपूर्ण स्थान है।"
    },
    {
        question: "'वुलर झील' का उद्गम किस नदी से होता है?",
        answers: shuffle([
            { text: "सिंधु", correct: false },
            { text: "झेलम", correct: true },
            { text: "चिनाब", correct: false },
            { text: "रावी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वुलर झील झेलम नदी के विसर्प (meandering) से बनी है<br><br><i class='fa-solid fa-angles-right icon'></i> और इसे 'ताजे पानी की सबसे बड़ी झील' कहा जाता है।"
    },
    {
        question: "'चंद्रताल झील' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "उत्तराखंड", correct: false },
            { text: "जम्मू और कश्मीर", correct: false },
            { text: "हिमाचल प्रदेश", correct: true },
            { text: "सिक्किम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रताल झील हिमाचल प्रदेश के लाहौल और स्पीति जिले में स्थित एक अर्ध-चंद्राकार हिमनदी झील है।"
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