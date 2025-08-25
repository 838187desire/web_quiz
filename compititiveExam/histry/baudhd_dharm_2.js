const questions = [
    {
        topHeading: "बौद्ध धर्म पर आधारित बहुविकल्पी प्रश्न part 2 (quiz_no.26)"
    },
    {
        question: "अशोक ने किस बौद्ध भिक्षु के प्रभाव में आकर बौद्ध धर्म अपनाया था?",
        answers: [
            { text: "उपगुप्त", correct: true },
            { text: "आनंद", correct: false },
            { text: "मोग्गलिपुत्त तिस्स", correct: false },
            { text: "महाकश्यप", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कलिंग युद्ध के पश्चाताप के बाद, मौर्य सम्राट अशोक ने बौद्ध भिक्षु उपगुप्त के प्रभाव में आकर बौद्ध धर्म अपनाया था।"
    },
    {
        question: "'त्रिपिटक' की रचना किस भाषा में हुई थी?",
        answers: [
            { text: "संस्कृत", correct: false },
            { text: "प्राकृत", correct: false },
            { text: "पाली", correct: true },
            { text: "मगधी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध धर्म का सबसे महत्वपूर्ण ग्रंथ त्रिपिटक (विनय पिटक, सुत्त पिटक, अभिधम्म पिटक) पाली भाषा में लिखा गया था।"
    },
    {
        question: "'हीनयान' और 'महायान' में विभाजन किस संगीति में हुआ था?",
        answers: [
            { text: "प्रथम", correct: false },
            { text: "द्वितीय", correct: false },
            { text: "तृतीय", correct: false },
            { text: "चतुर्थ", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाण शासक कनिष्क के शासनकाल में हुई चतुर्थ बौद्ध संगीति में बौद्ध धर्म दो संप्रदायों - हीनयान और महायान में विभाजित हो गया था।"
    },
    {
        question: "'बोधिसत्व' किस संप्रदाय की महत्वपूर्ण अवधारणा है?",
        answers: [
            { text: "हीनयान", correct: false },
            { text: "महायान", correct: true },
            { text: "वज्रयान", correct: false },
            { text: "सहजयान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बोधिसत्व महायान बौद्ध धर्म की एक अवधारणा है, जिसमें एक व्यक्ति दूसरों के कल्याण के लिए अपना निर्वाण स्थगित करता है।"
    },
    {
        question: "बुद्ध के प्रथम उपदेश को क्या कहा गया है?",
        answers: [
            { text: "महापरिनिर्वाण", correct: false },
            { text: "महाभिनिष्क्रमण", correct: false },
            { text: "धर्मचक्र प्रवर्तन", correct: true },
            { text: "निर्वाण", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सारनाथ में बुद्ध द्वारा दिए गए पहले उपदेश को धर्मचक्र प्रवर्तन कहा गया, जिसका अर्थ है 'धर्म के पहिए को चलाना'।"
    },
    {
        question: "किस शासक ने सांची और भरहुत के स्तूपों का निर्माण करवाया था?",
        answers: [
            { text: "अशोक", correct: true },
            { text: "कनिष्क", correct: false },
            { text: "हर्षवर्धन", correct: false },
            { text: "बिम्बिसार", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सम्राट अशोक ने बौद्ध धर्म के प्रचार के लिए सांची (मध्य प्रदेश) और भरहुत (मध्य प्रदेश) जैसे कई स्तूपों का निर्माण करवाया था।"
    },
    {
        question: "बौद्ध धर्म का कौन-सा सिद्धांत 'आत्मा' के अस्तित्व को नकारता है?",
        answers: [
            { text: "प्रतित्यसमुत्पाद", correct: false },
            { text: "क्षणभंगवाद", correct: false },
            { text: "अनात्मवाद", correct: true },
            { text: "शून्यवाद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनात्मवाद बौद्ध धर्म का वह सिद्धांत है जो यह मानता है कि आत्मा जैसी कोई स्थायी या शाश्वत सत्ता नहीं है।"
    },
    {
        question: "'प्रतित्यसमुत्पाद' का सिद्धांत किससे संबंधित है?",
        answers: [
            { text: "आत्मा का पुनर्जन्म", correct: false },
            { text: "कर्म का सिद्धांत", correct: false },
            { text: "कार्य-कारण का सिद्धांत", correct: true },
            { text: "ईश्वर की अवधारणा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतित्यसमुत्पाद का अर्थ है 'किसी के होने पर कुछ होता है'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बौद्ध धर्म का सबसे महत्वपूर्ण सिद्धांत है, जो कार्य-कारण के सिद्धांत पर आधारित है।"
    },
    {
        question: "'त्रिपिटक' का कौन-सा भाग बौद्ध संघ के नियमों से संबंधित है?",
        answers: [
            { text: "विनय पिटक", correct: true },
            { text: "सुत्त पिटक", correct: false },
            { text: "अभिधम्म पिटक", correct: false },
            { text: "जातक", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विनय पिटक में बौद्ध भिक्षुओं और भिक्षुणियों के लिए बनाए गए नियमों और आचार-संहिता का संग्रह है।"
    },
    {
        question: "महात्मा बुद्ध ने अपने सर्वाधिक उपदेश कहाँ दिए थे?",
        answers: [
            { text: "श्रावस्ती", correct: true },
            { text: "वैशाली", correct: false },
            { text: "राजगृह", correct: false },
            { text: "कपिलवस्तु", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुद्ध ने अपने जीवन का अधिकांश समय कोशल की राजधानी श्रावस्ती में बिताया और यहीं पर सर्वाधिक उपदेश दिए।"
    },
    {
        question: "बौद्ध धर्म में 'बुद्ध' शब्द का क्या अर्थ है?",
        answers: [
            { text: "राजा", correct: false },
            { text: "विजेता", correct: false },
            { text: "ज्ञानी", correct: true },
            { text: "तपस्वी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बुद्ध' शब्द का अर्थ है 'प्रबुद्ध' या 'ज्ञानी', अर्थात वह व्यक्ति जिसने परम ज्ञान प्राप्त कर लिया हो।"
    },
    {
        question: "चतुर्थ बौद्ध संगीति का अध्यक्ष कौन था?",
        answers: [
            { text: "महाकश्यप", correct: false },
            { text: "सबाकामी", correct: false },
            { text: "मोग्गलिपुत्त तिस्स", correct: false },
            { text: "वसुमित्र", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुंडलवन (कश्मीर) में हुई चतुर्थ बौद्ध संगीति के अध्यक्ष वसुमित्र थे, जबकि अश्वघोष उपाध्यक्ष थे।"
    },
    {
        question: "'अजातशत्रु' के शासनकाल में कौन-सी बौद्ध संगीति हुई थी?",
        answers: [
            { text: "प्रथम", correct: true },
            { text: "द्वितीय", correct: false },
            { text: "तृतीय", correct: false },
            { text: "चतुर्थ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्यक वंश के शासक अजातशत्रु के शासनकाल में 483 ईसा पूर्व में राजगृह में प्रथम बौद्ध संगीति का आयोजन हुआ था।"
    },
    {
        question: "किस बौद्ध संगीति के बाद त्रिपिटक को अंतिम रूप दिया गया था?",
        answers: [
            { text: "प्रथम", correct: false },
            { text: "द्वितीय", correct: false },
            { text: "तृतीय", correct: true },
            { text: "चतुर्थ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अशोक के शासनकाल में हुई तृतीय बौद्ध संगीति में त्रिपिटक के तीसरे भाग, अभिधम्म पिटक को जोड़ा गया था और इसे अंतिम रूप दिया गया।"
    },
    {
        question: "'योगाचार' दर्शन किससे संबंधित है?",
        answers: [
            { text: "हीनयान", correct: false },
            { text: "महायान", correct: true },
            { text: "वज्रयान", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> योगाचार महायान बौद्ध धर्म का एक दार्शनिक संप्रदाय है, जिसे मैत्रेयनाथ और वसुबंधु ने विकसित किया था।"
    },
    {
        question: "'बुद्ध' की मृत्यु को किस नाम से जाना जाता है?",
        answers: [
            { text: "महाभिनिष्क्रमण", correct: false },
            { text: "धर्मचक्र प्रवर्तन", correct: false },
            { text: "महापरिनिर्वाण", correct: true },
            { text: "संबोधि", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुद्ध की मृत्यु की घटना को बौद्ध धर्म में महापरिनिर्वाण कहा जाता है, जिसका अर्थ है 'पूर्ण निर्वाण'।"
    },
    {
        question: "'बौद्ध धर्म' के अनुसार, दुखों का कारण क्या है?",
        answers: [
            { text: "ईश्वर की इच्छा", correct: false },
            { text: "कर्म", correct: false },
            { text: "तृष्णा (इच्छा)", correct: true },
            { text: "अज्ञानता", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुद्ध के चार आर्य सत्यों में से दूसरा सत्य यह है कि दुखों का कारण तृष्णा (इच्छा या लालसा) है।"
    },
    {
        question: "'बोधिसत्व' किस संप्रदाय से संबंधित है?",
        answers: [
            { text: "हीनयान", correct: false },
            { text: "महायान", correct: true },
            { text: "वज्रयान", correct: false },
            { text: "सहजयान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बोधिसत्व महायान बौद्ध धर्म की एक महत्वपूर्ण अवधारणा है।"
    },
    {
        question: "'सूत पिटक' का संकलन किसने किया था?",
        answers: [
            { text: "आनंद", correct: true },
            { text: "उपालि", correct: false },
            { text: "महाकश्यप", correct: false },
            { text: "अश्वघोष", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रथम बौद्ध संगीति में बुद्ध के प्रिय शिष्य आनंद ने सुत्त पिटक का संकलन किया था।"
    },
    {
        question: "'विनय पिटक' का संकलन किसने किया था?",
        answers: [
            { text: "आनंद", correct: false },
            { text: "उपालि", correct: true },
            { text: "महाकश्यप", correct: false },
            { text: "अश्वघोष", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रथम बौद्ध संगीति में उपालि ने विनय पिटक का संकलन किया था।"
    },
    {
        question: "किस राजा ने नालंदा विश्वविद्यालय की स्थापना की थी?",
        answers: [
            { text: "अशोक", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: true },
            { text: "हर्षवर्धन", correct: false },
            { text: "बिम्बिसार", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त शासक कुमारगुप्त प्रथम ने पाँचवीं शताब्दी ईस्वी में नालंदा विश्वविद्यालय की स्थापना की थी।"
    },
    {
        question: "'माध्यमिक' दर्शन किससे संबंधित है?",
        answers: [
            { text: "हीनयान", correct: false },
            { text: "महायान", correct: true },
            { text: "वज्रयान", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माध्यमिक दर्शन, जिसे शून्यवाद भी कहते हैं, महायान बौद्ध धर्म से संबंधित है और इसके प्रतिपादक नागार्जुन थे।"
    },
    {
        question: "'महाभिनिष्क्रमण' का प्रतीक क्या है?",
        answers: [
            { text: "घोड़ा", correct: true },
            { text: "कमल और बैल", correct: false },
            { text: "बोधि वृक्ष", correct: false },
            { text: "धर्मचक्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुद्ध के गृह त्याग की घटना को महाभिनिष्क्रमण कहा जाता है, जिसका प्रतीक घोड़ा है।"
    },
    {
        question: "'बुद्ध' का जन्म किस प्रतीक से दर्शाया जाता है?",
        answers: [
            { text: "घोड़ा", correct: false },
            { text: "कमल और बैल", correct: true },
            { text: "बोधि वृक्ष", correct: false },
            { text: "धर्मचक्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुद्ध के जन्म का प्रतीक कमल और बैल है।"
    },
    {
        question: "'बुद्ध' की ज्ञान प्राप्ति का प्रतीक क्या है?",
        answers: [
            { text: "घोड़ा", correct: false },
            { text: "कमल और बैल", correct: false },
            { text: "बोधि वृक्ष", correct: true },
            { text: "धर्मचक्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुद्ध को बोधगया में पीपल के पेड़ के नीचे ज्ञान प्राप्त हुआ था, इसलिए ज्ञान प्राप्ति का प्रतीक बोधि वृक्ष है।"
    },
    {
        question: "'नालंदा विश्वविद्यालय' को किसने नष्ट किया था?",
        answers: [
            { text: "बख्तियार खिलजी", correct: true },
            { text: "मोहम्मद गोरी", correct: false },
            { text: "महमूद गजनवी", correct: false },
            { text: "कुतुबुद्दीन ऐबक", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 12वीं शताब्दी के अंत में, तुर्क सेनापति बख्तियार खिलजी ने नालंदा विश्वविद्यालय को नष्ट कर दिया था।"
    },
    {
        question: "'पद्मसंभव' का संबंध बौद्ध धर्म के किस संप्रदाय से है?",
        answers: [
            { text: "हीनयान", correct: false },
            { text: "महायान", correct: false },
            { text: "वज्रयान", correct: true },
            { text: "सहजयान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पद्मसंभव को तिब्बत में वज्रयान बौद्ध धर्म की स्थापना का श्रेय दिया जाता है।"
    },
    {
        question: "बौद्ध धर्म में 'प्रज्ञा' का क्या अर्थ है?",
        answers: [
            { text: "ध्यान", correct: false },
            { text: "शील", correct: false },
            { text: "ज्ञान", correct: true },
            { text: "समाधि", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रज्ञा का अर्थ है 'ज्ञान', जो बौद्ध धर्म के त्रिशिक्षा (शील, समाधि, प्रज्ञा) का एक महत्वपूर्ण हिस्सा है।"
    },
    {
        question: "बुद्ध का जन्म किस वृक्ष के नीचे हुआ था?",
        answers: [
            { text: "पीपल", correct: false },
            { text: "साल", correct: true },
            { text: "अशोक", correct: false },
            { text: "आम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुद्ध का जन्म साल वृक्ष के नीचे हुआ था, जबकि उन्हें ज्ञान की प्राप्ति पीपल वृक्ष (बोधिवृक्ष) के नीचे हुई थी।"
    },
    {
        question: "'अंगुत्तर निकाय' किस धर्म से संबंधित एक ग्रंथ है?",
        answers: [
            { text: "जैन धर्म", correct: false },
            { text: "बौद्ध धर्म", correct: true },
            { text: "हिंदू धर्म", correct: false },
            { text: "शैव धर्म", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंगुत्तर निकाय बौद्ध धर्म के 'सुत्त पिटक' का एक हिस्सा है, जिसमें 16 महाजनपदों का उल्लेख मिलता है।"
    },
    {
        question: "'बौद्ध धर्म' की कौन-सी विशेषता उसे जैन धर्म से अलग करती है?",
        answers: [
            { text: "पुनर्जन्म में विश्वास", correct: false },
            { text: "कर्म के सिद्धांत में विश्वास", correct: false },
            { text: "आत्मा के अस्तित्व को अस्वीकार करना", correct: true },
            { text: "अहिंसा पर जोर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म आत्मा के अस्तित्व को स्वीकार करता है, जबकि बौद्ध धर्म (अनात्मवाद) आत्मा के स्थायी अस्तित्व को अस्वीकार करता है।"
    },
    {
        question: "'मिलिंदपन्हो' में किन दो व्यक्तियों के बीच संवाद है?",
        answers: [
            { text: "अशोक और उपगुप्त", correct: false },
            { text: "मिनेंडर और नागसेन", correct: true },
            { text: "कनिष्क और अश्वघोष", correct: false },
            { text: "हर्षवर्धन और ह्वेनसांग", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिलिंदपन्हो में यूनानी राजा मिनेंडर (मिलिंद) और बौद्ध भिक्षु नागसेन के बीच हुए दार्शनिक संवादों का वर्णन है।"
    },
    {
        question: "किस शासक ने बौद्ध धर्म के प्रचार के लिए अपने पुत्र और पुत्री को श्रीलंका भेजा था?",
        answers: [
            { text: "बिम्बिसार", correct: false },
            { text: "अशोक", correct: true },
            { text: "कनिष्क", correct: false },
            { text: "हर्षवर्धन", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सम्राट अशोक ने बौद्ध धर्म के प्रचार के लिए अपने पुत्र महेंद्र और पुत्री संघमित्रा को श्रीलंका भेजा था।"
    },
    {
        question: "'बुद्ध' का अर्थ क्या है?",
        answers: [
            { text: "राजा", correct: false },
            { text: "विजेता", correct: false },
            { text: "ज्ञानी", correct: true },
            { text: "तपस्वी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बुद्ध' शब्द का अर्थ है 'जागृत' या 'प्रबुद्ध' व्यक्ति, जिसने परम ज्ञान प्राप्त कर लिया हो।"
    },
    {
        question: "'चतुर्थ बौद्ध संगीति' का आयोजन किस राजा के शासनकाल में हुआ था?",
        answers: [
            { text: "अशोक", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "कालाशोक", correct: false },
            { text: "कनिष्क", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चतुर्थ बौद्ध संगीति का आयोजन कुषाण शासक कनिष्क के शासनकाल में कुंडलवन (कश्मीर) में हुआ था।"
    },
    {
        question: "'हीनयान' बौद्ध धर्म का सबसे महत्वपूर्ण ग्रंथ क्या है?",
        answers: [
            { text: "त्रिपिटक", correct: true },
            { text: "महावस्तु", correct: false },
            { text: "ललितविस्तर", correct: false },
            { text: "बुद्धचरित", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> त्रिपिटक (विनय, सुत्त और अभिधम्म पिटक) हीनयान बौद्ध धर्म का सबसे महत्वपूर्ण और प्रामाणिक ग्रंथ है।"
    },
    {
        question: "'नागार्जुन' किस बौद्ध संप्रदाय से संबंधित थे?",
        answers: [
            { text: "हीनयान", correct: false },
            { text: "महायान", correct: true },
            { text: "वज्रयान", correct: false },
            { text: "सहजयान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नागार्जुन महायान बौद्ध धर्म के एक महान दार्शनिक थे, जिन्होंने शून्यवाद का सिद्धांत दिया था।"
    },
    {
        question: "बौद्ध धर्म का वह कौन-सा संप्रदाय है जो बुद्ध की मूर्ति पूजा करता है?",
        answers: [
            { text: "हीनयान", correct: false },
            { text: "महायान", correct: true },
            { text: "वज्रयान", correct: false },
            { text: "सहजयान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महायान संप्रदाय के अनुयायी बुद्ध को ईश्वर मानकर उनकी मूर्ति पूजा करते हैं, जबकि हीनयान संप्रदाय प्रतीकों की पूजा करता है।"
    },
    {
        question: "'गौतम बुद्ध' की मृत्यु की घटना को किस नाम से जाना जाता है?",
        answers: [
            { text: "महाभिनिष्क्रमण", correct: false },
            { text: "धर्मचक्र प्रवर्तन", correct: false },
            { text: "महापरिनिर्वाण", correct: true },
            { text: "संबोधि", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 80 वर्ष की आयु में कुशीनगर में बुद्ध की मृत्यु को महापरिनिर्वाण कहा जाता है।"
    },
    {
        question: "'प्रतित्यसमुत्पाद' का सिद्धांत क्या है?",
        answers: [
            { text: "आत्मा के पुनर्जन्म का सिद्धांत", correct: false },
            { text: "कार्य-कारण का सिद्धांत", correct: true },
            { text: "ईश्वर का अस्तित्व", correct: false },
            { text: "मोक्ष का मार्ग", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतित्यसमुत्पाद का अर्थ है 'एक के होने पर दूसरा होता है'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बौद्ध धर्म का सबसे महत्वपूर्ण सिद्धांत है, जो कार्य-कारण पर आधारित है।"
    },
    {
        question: "'अजंता' की गुफाओं में किस काल की चित्रकलाएँ हैं?",
        answers: [
            { text: "मौर्य काल", correct: false },
            { text: "गुप्त काल", correct: true },
            { text: "कुषाण काल", correct: false },
            { text: "वर्धन काल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजंता की गुफाओं में मुख्य रूप से गुप्त काल और वाकाटक काल की चित्रकलाएँ पाई जाती हैं, जो बौद्ध धर्म से संबंधित हैं।"
    },
    {
        question: "'महाभिनिष्क्रमण' का प्रतीक क्या है?",
        answers: [
            { text: "कमल", correct: false },
            { text: "घोड़ा", correct: true },
            { text: "बोधि वृक्ष", correct: false },
            { text: "धर्मचक्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुद्ध के गृह त्याग की घटना को महाभिनिष्क्रमण कहा जाता है, जिसका प्रतीक घोड़ा है।"
    },
    {
        question: "'गौतम बुद्ध' के जन्म का प्रतीक क्या है?",
        answers: [
            { text: "घोड़ा", correct: false },
            { text: "कमल और बैल", correct: true },
            { text: "बोधि वृक्ष", correct: false },
            { text: "धर्मचक्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतम बुद्ध के जन्म का प्रतीक कमल और बैल है।"
    },
    {
        question: "'बुद्ध' की ज्ञान प्राप्ति का प्रतीक क्या है?",
        answers: [
            { text: "घोड़ा", correct: false },
            { text: "कमल और बैल", correct: false },
            { text: "बोधि वृक्ष", correct: true },
            { text: "धर्मचक्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुद्ध को बोधगया में पीपल के पेड़ के नीचे ज्ञान प्राप्त हुआ था, इसलिए ज्ञान प्राप्ति का प्रतीक बोधि वृक्ष है।"
    },
    {
        question: "'प्रथम बौद्ध संगीति' का अध्यक्ष कौन था?",
        answers: [
            { text: "सबाकामी", correct: false },
            { text: "महाकश्यप", correct: true },
            { text: "वसुमित्र", correct: false },
            { text: "अश्वघोष", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रथम बौद्ध संगीति के अध्यक्ष महाकश्यप थे, जो बुद्ध के प्रमुख शिष्यों में से एक थे।"
    },
    {
        question: "'अशोक' के शासनकाल में कौन-सी बौद्ध संगीति हुई थी?",
        answers: [
            { text: "प्रथम", correct: false },
            { text: "द्वितीय", correct: false },
            { text: "तृतीय", correct: true },
            { text: "चतुर्थ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौर्य सम्राट अशोक के शासनकाल में पाटलिपुत्र में तृतीय बौद्ध संगीति का आयोजन हुआ था।"
    },
    {
        question: "'नालंदा विश्वविद्यालय' की स्थापना किस शताब्दी में हुई थी?",
        answers: [
            { text: "तीसरी शताब्दी", correct: false },
            { text: "पाँचवीं शताब्दी", correct: true },
            { text: "सातवीं शताब्दी", correct: false },
            { text: "नौवीं शताब्दी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नालंदा विश्वविद्यालय की स्थापना गुप्त शासक कुमारगुप्त प्रथम ने पाँचवीं शताब्दी में की थी।"
    },
    {
        question: "'जातक' कथाओं का संबंध किससे है?",
        answers: [
            { text: "जैन धर्म", correct: false },
            { text: "बौद्ध धर्म", correct: true },
            { text: "हिंदू धर्म", correct: false },
            { text: "सिख धर्म", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जातक कथाएँ महात्मा बुद्ध के पूर्व जन्मों की कहानियाँ हैं, जो बौद्ध धर्म से संबंधित हैं।"
    },
    {
        question: "'तथागत' किसे कहा जाता है?",
        answers: [
            { text: "महावीर", correct: false },
            { text: "गौतम बुद्ध", correct: true },
            { text: "ऋषभदेव", correct: false },
            { text: "शंकराचार्य", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तथागत बुद्ध का एक और नाम है, जिसका अर्थ है 'जो सत्य को पा चुका हो'।"
    },
    {
        question: "'बौद्ध संघ' में प्रवेश पाने वाली पहली महिला कौन थीं?",
        answers: [
            { text: "यशोधरा", correct: false },
            { text: "महामाया", correct: false },
            { text: "प्रजापति गौतमी", correct: true },
            { text: "आम्रपाली", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुद्ध की मौसी और सौतेली माँ प्रजापति गौतमी बौद्ध संघ में प्रवेश पाने वाली पहली महिला थीं।"
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