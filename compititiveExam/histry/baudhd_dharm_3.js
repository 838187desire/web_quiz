const questions = [
    {
        topHeading: "बौद्ध धर्म पर आधारित बहुविकल्पी प्रश्न part 3 (quiz_no.27)"
    },
    {
        question: "'मिलिंदपन्हो' नामक ग्रंथ में किस राजा और बौद्ध भिक्षु के बीच संवाद का वर्णन है?",
        answers: [
            { text: "अशोक और उपगुप्त", correct: false },
            { text: "मिनेंडर (मिलिंद) और नागसेन", correct: true },
            { text: "कनिष्क और अश्वघोष", correct: false },
            { text: "हर्षवर्धन और ह्वेनसांग", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मिलिंदपन्हो' का शाब्दिक अर्थ है 'मिलिंद के प्रश्न', जिसमें यूनानी-बौद्ध राजा मिनेंडर और बौद्ध भिक्षु नागसेन के बीच दार्शनिक संवादों का वर्णन है।"
    },
    {
        question: "'बौद्ध धर्म' में 'त्रिपिटक' के तीन भाग कौन-से हैं?",
        answers: [
            { text: "विनय, सुत्त, अभिधम्म", correct: true },
            { text: "बुद्ध, धम्म, संघ", correct: false },
            { text: "शील, समाधि, प्रज्ञा", correct: false },
            { text: "कर्म, पुनर्जन्म, निर्वाण", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'त्रिपिटक' का अर्थ है 'तीन पिटारे', और इसके तीन भाग हैं: विनय पिटक (संघ के नियम), सुत्त पिटक (बुद्ध के उपदेश), और अभिधम्म पिटक (दार्शनिक सिद्धांत)।"
    },
    {
        question: "'बुद्धचरित' नामक महाकाव्य के लेखक कौन थे?",
        answers: [
            { text: "नागार्जुन", correct: false },
            { text: "अश्वघोष", correct: true },
            { text: "वसुमित्र", correct: false },
            { text: "नागसेन", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बुद्धचरित' संस्कृत भाषा में लिखा गया है, जिसमें गौतम बुद्ध की जीवनी का वर्णन है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी रचना अश्वघोष ने की थी, जो कनिष्क के दरबार में थे।"
    },
    {
        question: "'शून्यवाद' (माध्यमिक दर्शन) के प्रतिपादक कौन थे?",
        answers: [
            { text: "वसुबंधु", correct: false },
            { text: "अश्वघोष", correct: false },
            { text: "नागार्जुन", correct: true },
            { text: "आनंद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नागार्जुन, जिन्हें 'भारत का आइंस्टीन' भी कहा जाता है, ने शून्यवाद का सिद्धांत दिया था, जो महायान बौद्ध धर्म का एक प्रमुख दार्शनिक विचार है।"
    },
    {
        question: "'हीनयान' और 'महायान' संप्रदायों का विभाजन किस संगीति के बाद हुआ था?",
        answers: [
            { text: "प्रथम", correct: false },
            { text: "द्वितीय", correct: false },
            { text: "तृतीय", correct: false },
            { text: "चतुर्थ", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कनिष्क के शासनकाल में आयोजित चतुर्थ बौद्ध संगीति में बौद्ध धर्म दो प्रमुख संप्रदायों - हीनयान और महायान में विभाजित हो गया था।"
    },
    {
        question: "'गौतम बुद्ध' की मृत्यु के बाद बौद्ध संघ का नेतृत्व किसने किया?",
        answers: [
            { text: "आनंद", correct: false },
            { text: "उपालि", correct: false },
            { text: "महाकश्यप", correct: false },
            { text: "किसी ने नहीं, संघ स्वतंत्र हो गया था", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुद्ध ने अपनी मृत्यु से पहले यह स्पष्ट कर दिया था कि उनके बाद कोई भी उनका उत्तराधिकारी नहीं होगा और बौद्ध संघ स्वतंत्र रूप से अपने नियमों का पालन करेगा।"
    },
    {
        question: "किस शासक ने 'बौद्ध धर्म' को राज्य धर्म घोषित किया था?",
        answers: [
            { text: "अशोक", correct: true },
            { text: "कनिष्क", correct: false },
            { text: "हर्षवर्धन", correct: false },
            { text: "अजातशत्रु", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौर्य सम्राट अशोक ने कलिंग युद्ध के बाद बौद्ध धर्म को अपनाया और इसे अपने साम्राज्य में फैलाने के लिए महत्वपूर्ण प्रयास किए, जिससे यह एक प्रकार से राज्य धर्म बन गया था।"
    },
    {
        question: "'बुद्ध' के गृह त्याग का प्रतीक क्या है?",
        answers: [
            { text: "कमल", correct: false },
            { text: "घोड़ा", correct: true },
            { text: "बोधि वृक्ष", correct: false },
            { text: "धर्मचक्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुद्ध के गृह त्याग (महाभिनिष्क्रमण) का प्रतीक घोड़ा है।"
    },
    {
        question: "'बौद्ध' और 'जैन' धर्मों में किस सिद्धांत को लेकर मतभेद था?",
        answers: [
            { text: "अहिंसा", correct: false },
            { text: "कर्म", correct: false },
            { text: "आत्मा का अस्तित्व", correct: true },
            { text: "पुनर्जन्म", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म आत्मा के अस्तित्व को स्वीकार करता है, जबकि बौद्ध धर्म में 'अनात्मवाद' का सिद्धांत है, जो आत्मा के स्थायी अस्तित्व को नकारता है।"
    },
    {
        question: "'अष्टांगिक मार्ग' का संबंध बौद्ध धर्म के किस आर्य सत्य से है?",
        answers: [
            { text: "पहला आर्य सत्य (दुःख है)", correct: false },
            { text: "दूसरा आर्य सत्य (दुःख का कारण है)", correct: false },
            { text: "तीसरा आर्य सत्य (दुःख का निरोध संभव है)", correct: false },
            { text: "चौथा आर्य सत्य (दुःख निरोध का मार्ग है)", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुद्ध ने चौथे आर्य सत्य के रूप में दुःखों को समाप्त करने के मार्ग (दुःख निरोध गामिनी प्रतिपदा) के रूप में अष्टांगिक मार्ग को बताया था।"
    },
    {
        question: "'अंगुत्तर निकाय' में कितने महाजनपदों का उल्लेख मिलता है?",
        answers: [
            { text: "12", correct: false },
            { text: "16", correct: true },
            { text: "18", correct: false },
            { text: "20", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध ग्रंथ अंगुत्तर निकाय में छठी शताब्दी ईसा पूर्व के 16 महाजनपदों का उल्लेख मिलता है।"
    },
    {
        question: "'अजंता' की गुफाओं का संबंध किस धर्म से है?",
        answers: [
            { text: "जैन धर्म", correct: false },
            { text: "बौद्ध धर्म", correct: true },
            { text: "शैव धर्म", correct: false },
            { text: "वैष्णव धर्म", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजंता की गुफाओं में बौद्ध धर्म से संबंधित चित्रकारी और मूर्तिकलाएँ हैं।"
    },
    {
        question: "बुद्ध की शिक्षाओं का संकलन किस पिटक में है?",
        answers: [
            { text: "विनय पिटक", correct: false },
            { text: "सुत्त पिटक", correct: true },
            { text: "अभिधम्म पिटक", correct: false },
            { text: "जातक", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुत्त पिटक में महात्मा बुद्ध के उपदेशों और संवादों का संग्रह है।"
    },
    {
        question: "'द्वितीय बौद्ध संगीति' का अध्यक्ष कौन था?",
        answers: [
            { text: "महाकश्यप", correct: false },
            { text: "सबाकामी", correct: true },
            { text: "मोग्गलिपुत्त तिस्स", correct: false },
            { text: "वसुमित्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्वितीय बौद्ध संगीति का आयोजन वैशाली में हुआ था, जिसके अध्यक्ष सबाकामी थे।"
    },
    {
        question: "'तृतीय बौद्ध संगीति' का अध्यक्ष कौन था?",
        answers: [
            { text: "महाकश्यप", correct: false },
            { text: "सबाकामी", correct: false },
            { text: "मोग्गलिपुत्त तिस्स", correct: true },
            { text: "वसुमित्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तृतीय बौद्ध संगीति का आयोजन पाटलिपुत्र में हुआ था, जिसके अध्यक्ष मोग्गलिपुत्त तिस्स थे।"
    },
    {
        question: "'चतुर्थ बौद्ध संगीति' का उपाध्यक्ष कौन था?",
        answers: [
            { text: "वसुमित्र", correct: false },
            { text: "अश्वघोष", correct: true },
            { text: "नागसेन", correct: false },
            { text: "नागार्जुन", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुंडलवन में हुई चतुर्थ बौद्ध संगीति के अध्यक्ष वसुमित्र थे, जबकि अश्वघोष उपाध्यक्ष थे।"
    },
    {
        question: "'बौद्ध धर्म' में 'अनात्मवाद' का सिद्धांत क्या है?",
        answers: [
            { text: "आत्मा का अस्तित्व नहीं है", correct: true },
            { text: "आत्मा का अस्तित्व है", correct: false },
            { text: "आत्मा अमर है", correct: false },
            { text: "आत्मा का पुनर्जन्म होता है", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनात्मवाद का सिद्धांत बताता है कि कोई भी स्थायी आत्मा या 'स्व' नहीं होता है।"
    },
    {
        question: "'जातक' कथाएँ किससे संबंधित हैं?",
        answers: [
            { text: "बुद्ध के जन्म से", correct: false },
            { text: "बुद्ध के पूर्व जन्मों से", correct: true },
            { text: "बुद्ध के उपदेशों से", correct: false },
            { text: "बुद्ध के शिष्यों से", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जातक कथाओं में महात्मा बुद्ध के पूर्व जन्मों की कहानियों का वर्णन है।"
    },
    {
        question: "'सांची' का स्तूप किस राज्य में स्थित है?",
        answers: [
            { text: "बिहार", correct: false },
            { text: "उत्तर प्रदेश", correct: false },
            { text: "मध्य प्रदेश", correct: true },
            { text: "महाराष्ट्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सांची का स्तूप, जो मौर्य सम्राट अशोक द्वारा बनवाया गया था, भारत के मध्य प्रदेश राज्य में स्थित है।"
    },
    {
        question: "'बुद्ध' के उपदेशों का सार किस पर आधारित है?",
        answers: [
            { text: "चार आर्य सत्य", correct: false },
            { text: "त्रिरत्न", correct: false },
            { text: "अष्टांगिक मार्ग", correct: false },
            { text: "उपर्युक्त सभी", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुद्ध की शिक्षाओं का सार चार आर्य सत्यों में निहित है, जिनके अनुसार दुखों का कारण और निवारण संभव है, और इसका मार्ग अष्टांगिक मार्ग है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये सभी त्रिरत्न का हिस्सा हैं।"
    },
    {
        question: "'निर्वाण' शब्द का क्या अर्थ है?",
        answers: [
            { text: "ज्ञान की प्राप्ति", correct: false },
            { text: "इच्छाओं का बुझ जाना", correct: true },
            { text: "मृत्यु", correct: false },
            { text: "पुनर्जन्म", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध धर्म में निर्वाण का अर्थ है 'बुझ जाना' या 'शांति', जो सभी इच्छाओं और लालसाओं के अंत का प्रतीक है।"
    },
    {
        question: "किस शासक ने विक्रमशिला विश्वविद्यालय की स्थापना की थी?",
        answers: [
            { text: "धर्मपाल", correct: true },
            { text: "देवपाल", correct: false },
            { text: "महिपाल", correct: false },
            { text: "गोपाल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पाल वंश के शासक धर्मपाल ने आठवीं शताब्दी में बिहार में विक्रमशिला विश्वविद्यालय की स्थापना की थी, जो बौद्ध धर्म का एक प्रमुख केंद्र था।"
    },
    {
        question: "'हीनयान' बौद्ध धर्म का केंद्र कहाँ था?",
        answers: [
            { text: "श्रीलंका, बर्मा, थाईलैंड", correct: true },
            { text: "चीन, जापान, कोरिया", correct: false },
            { text: "तिब्बत, भूटान", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीनयान संप्रदाय (जिसे अब थेरवाद के नाम से जाना जाता है) मुख्य रूप से श्रीलंका, बर्मा (म्यांमार), थाईलैंड और कंबोडिया जैसे दक्षिण एशियाई देशों में फैला।"
    },
    {
        question: "'महायान' बौद्ध धर्म का केंद्र कहाँ था?",
        answers: [
            { text: "श्रीलंका, बर्मा", correct: false },
            { text: "चीन, जापान, कोरिया", correct: true },
            { text: "थाईलैंड, कंबोडिया", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महायान संप्रदाय मुख्य रूप से चीन, जापान, कोरिया, तिब्बत और मध्य एशिया में फैला था।"
    },
    {
        question: "'चतुर्थ बौद्ध संगीति' का आयोजन किस शताब्दी में हुआ था?",
        answers: [
            { text: "5वीं ईसा पूर्व", correct: false },
            { text: "3री ईसा पूर्व", correct: false },
            { text: "पहली ईस्वी", correct: true },
            { text: "5वीं ईस्वी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चतुर्थ बौद्ध संगीति का आयोजन कुषाण शासक कनिष्क के शासनकाल में पहली शताब्दी ईस्वी में हुआ था।"
    },
    {
        question: "'हीनयान' संप्रदाय की शिक्षाओं का संकलन किस भाषा में हुआ था?",
        answers: [
            { text: "संस्कृत", correct: false },
            { text: "पाली", correct: true },
            { text: "प्राकृत", correct: false },
            { text: "मगधी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीनयान संप्रदाय, जो बुद्ध के मूल उपदेशों पर अधिक जोर देता था, की शिक्षाओं का संकलन पाली भाषा में हुआ था।"
    },
    {
        question: "'महायान' संप्रदाय की शिक्षाओं का संकलन किस भाषा में हुआ था?",
        answers: [
            { text: "संस्कृत", correct: true },
            { text: "पाली", correct: false },
            { text: "प्राकृत", correct: false },
            { text: "अपभ्रंश", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महायान संप्रदाय ने अपने ग्रंथों और शिक्षाओं के लिए संस्कृत भाषा का प्रयोग किया, क्योंकि उनका मानना था कि बौद्ध धर्म का प्रचार समाज के उच्च वर्गों तक भी होना चाहिए।"
    },
    {
        question: "बुद्ध ने किस नदी के तट पर ज्ञान प्राप्त किया था?",
        answers: [
            { text: "गंगा", correct: false },
            { text: "निरंजना (फल्गु)", correct: true },
            { text: "गंडक", correct: false },
            { text: "ऋजुपालिका", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुद्ध को बोधगया में निरंजना (जिसे फल्गु नदी भी कहते हैं) नदी के तट पर पीपल वृक्ष के नीचे ज्ञान प्राप्त हुआ था।"
    },
    {
        question: "'बुद्ध' का जन्म कहाँ हुआ था?",
        answers: [
            { text: "लुम्बिनी", correct: true },
            { text: "बोधगया", correct: false },
            { text: "सारनाथ", correct: false },
            { text: "कुशीनगर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुद्ध का जन्म 563 ईसा पूर्व में नेपाल के लुम्बिनी में हुआ था।"
    },
    {
        question: "बौद्ध धर्म में 'अनात्मवाद' का सिद्धांत क्या बताता है?",
        answers: [
            { text: "आत्मा का अस्तित्व नहीं है।", correct: true },
            { text: "आत्मा का अस्तित्व है।", correct: false },
            { text: "आत्मा अमर है।", correct: false },
            { text: "आत्मा का पुनर्जन्म नहीं होता है।", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध धर्म के अनात्मवाद सिद्धांत के अनुसार, कोई भी स्थायी, अपरिवर्तनशील आत्मा या स्व नहीं होता है।"
    },
    {
        question: "'बौद्ध संघ' में प्रवेश के लिए न्यूनतम आयु क्या थी?",
        answers: [
            { text: "12 वर्ष", correct: false },
            { text: "15 वर्ष", correct: true },
            { text: "18 वर्ष", correct: false },
            { text: "20 वर्ष", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध संघ में प्रवेश पाने के लिए किसी भी व्यक्ति की न्यूनतम आयु 15 वर्ष होनी चाहिए थी।"
    },
    {
        question: "किस राजा ने विक्रमशिला विश्वविद्यालय की स्थापना की थी?",
        answers: [
            { text: "अशोक", correct: false },
            { text: "धर्मपाल", correct: true },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "हर्षवर्धन", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पाल वंश के शासक धर्मपाल ने आठवीं शताब्दी में बिहार में विक्रमशिला विश्वविद्यालय की स्थापना की थी।"
    },
    {
        question: "'जातक' कथाओं का संबंध किससे है?",
        answers: [
            { text: "बुद्ध की जीवनी", correct: false },
            { text: "बुद्ध के पूर्व जन्मों की कहानियाँ", correct: true },
            { text: "बौद्ध संघ के नियम", correct: false },
            { text: "बौद्ध दर्शन", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जातक कथाएँ बौद्ध धर्म के 'सुत्त पिटक' का हिस्सा हैं, जिनमें बुद्ध के पूर्व जन्मों की कहानियाँ वर्णित हैं।"
    },
    {
        question: "'चौथी बौद्ध संगीति' के समय शासक कौन था?",
        answers: [
            { text: "अशोक", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "कालाशोक", correct: false },
            { text: "कनिष्क", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाण शासक कनिष्क के शासनकाल में कुंडलवन (कश्मीर) में चौथी बौद्ध संगीति हुई थी।"
    },
    {
        question: "'सर्वास्तिवाद' और 'सौत्रांतिक' किस संप्रदाय के उप-संप्रदाय थे?",
        answers: [
            { text: "हीनयान", correct: true },
            { text: "महायान", correct: false },
            { text: "वज्रयान", correct: false },
            { text: "सहजयान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीनयान संप्रदाय में कई उप-संप्रदाय थे, जिनमें सर्वास्तिवाद और सौत्रांतिक प्रमुख थे।"
    },
    {
        question: "'महात्मा बुद्ध' ने अपना पहला उपदेश कहाँ दिया था?",
        answers: [
            { text: "बोधगया", correct: false },
            { text: "सारनाथ", correct: true },
            { text: "कुशीनगर", correct: false },
            { text: "श्रावस्ती", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ज्ञान प्राप्ति के बाद, बुद्ध ने अपना पहला उपदेश सारनाथ में पाँच शिष्यों को दिया था।"
    },
    {
        question: "'सांची' का स्तूप किसने बनवाया था?",
        answers: [
            { text: "चंद्रगुप्त मौर्य", correct: false },
            { text: "अशोक", correct: true },
            { text: "हर्षवर्धन", correct: false },
            { text: "कनिष्क", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य प्रदेश में स्थित सांची का स्तूप मौर्य सम्राट अशोक द्वारा बनवाया गया था।"
    },
    {
        question: "बौद्ध धर्म का 'अष्टांगिक मार्ग' किस आर्य सत्य से संबंधित है?",
        answers: [
            { text: "प्रथम आर्य सत्य", correct: false },
            { text: "द्वितीय आर्य सत्य", correct: false },
            { text: "तृतीय आर्य सत्य", correct: false },
            { text: "चतुर्थ आर्य सत्य", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अष्टांगिक मार्ग' बुद्ध के चतुर्थ आर्य सत्य (दुःख निरोध गामिनी प्रतिपदा) से संबंधित है, जो दुखों के निवारण का मार्ग बताता है।"
    },
    {
        question: "'बुद्धचरित' की रचना किस भाषा में हुई थी?",
        answers: [
            { text: "पाली", correct: false },
            { text: "प्राकृत", correct: false },
            { text: "संस्कृत", correct: true },
            { text: "मगधी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अश्वघोष द्वारा रचित 'बुद्धचरित' संस्कृत भाषा में लिखा गया था।"
    },
    {
        question: "'महापरिनिर्वाण' का प्रतीक क्या है?",
        answers: [
            { text: "घोड़ा", correct: false },
            { text: "स्तूप", correct: true },
            { text: "बोधि वृक्ष", correct: false },
            { text: "धर्मचक्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुद्ध की मृत्यु की घटना को 'महापरिनिर्वाण' कहा जाता है, जिसका प्रतीक स्तूप है।"
    },
    {
        question: "'धर्मचक्र प्रवर्तन' का प्रतीक क्या है?",
        answers: [
            { text: "घोड़ा", correct: false },
            { text: "स्तूप", correct: false },
            { text: "बोधि वृक्ष", correct: false },
            { text: "धर्मचक्र", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुद्ध के प्रथम उपदेश को 'धर्मचक्र प्रवर्तन' कहा जाता है, जिसका प्रतीक धर्मचक्र है।"
    },
    {
        question: "'बौद्ध' और 'जैन' धर्मों में क्या समानता थी?",
        answers: [
            { text: "दोनों ईश्वर के अस्तित्व को मानते थे।", correct: false },
            { text: "दोनों ने आत्मा के अस्तित्व को स्वीकार किया।", correct: false },
            { text: "दोनों ने कर्म और पुनर्जन्म के सिद्धांत को माना।", correct: true },
            { text: "दोनों ने तपस्या पर जोर नहीं दिया।", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध और जैन दोनों धर्मों ने कर्म के सिद्धांत और आत्मा के पुनर्जन्म में विश्वास किया, हालाँकि उनकी अवधारणाएँ अलग-अलग थीं।"
    },
    {
        question: "'अभिधम्म पिटक' का संकलन किस संगीति में हुआ था?",
        answers: [
            { text: "प्रथम", correct: false },
            { text: "द्वितीय", correct: false },
            { text: "तृतीय", correct: true },
            { text: "चतुर्थ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अशोक के शासनकाल में हुई तृतीय बौद्ध संगीति में 'अभिधम्म पिटक' को जोड़ा गया था।"
    },
    {
        question: "'मिलिंदपन्हो' के लेखक कौन थे?",
        answers: [
            { text: "नागार्जुन", correct: false },
            { text: "अश्वघोष", correct: false },
            { text: "नागसेन", correct: true },
            { text: "आनंद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मिलिंदपन्हो' की रचना बौद्ध भिक्षु नागसेन ने की थी।"
    },
    {
        question: "'पद्मसंभव' किस संप्रदाय से संबंधित हैं?",
        answers: [
            { text: "हीनयान", correct: false },
            { text: "महायान", correct: false },
            { text: "वज्रयान", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पद्मसंभव को तिब्बत में वज्रयान बौद्ध धर्म का संस्थापक माना जाता है।"
    },
    {
        question: "'बौद्ध धर्म' में 'हीनयान' और 'महायान' में विभाजन के बाद, तीसरा प्रमुख संप्रदाय कौन-सा था?",
        answers: [
            { text: "सौत्रांतिक", correct: false },
            { text: "सर्वास्तिवाद", correct: false },
            { text: "वज्रयान", correct: true },
            { text: "सहजयान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध धर्म का तीसरा प्रमुख संप्रदाय वज्रयान था, जो गुप्त काल में विकसित हुआ और तांत्रिक क्रियाओं पर आधारित था।"
    },
    {
        question: "'शून्यवाद' का सिद्धांत किससे संबंधित है?",
        answers: [
            { text: "जैन धर्म", correct: false },
            { text: "बौद्ध धर्म", correct: true },
            { text: "वैष्णव धर्म", correct: false },
            { text: "शैव धर्म", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शून्यवाद का सिद्धांत महान बौद्ध दार्शनिक नागार्जुन ने दिया था, जो महायान बौद्ध धर्म से संबंधित है।"
    },
    {
        question: "'बौद्ध' धर्म के किस संप्रदाय ने 'बोधिसत्व' की अवधारणा को प्रमुखता दी? A) हीनयान B) महायान C) वज्रयान D) सहजयान सही उत्तर: B) महायान व्याख्या: महायान संप्रदाय में 'बोधिसत्व' की अवधारणा बहुत महत्वपूर्ण है।",
        answers: [
            { text: "हीनयान", correct: false },
            { text: "महायान", correct: true },
            { text: "वज्रयान", correct: false },
            { text: "सहजयान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महायान संप्रदाय में 'बोधिसत्व' की अवधारणा बहुत महत्वपूर्ण है।"
    },
    {
        question: "'बुद्ध' को किस नदी के तट पर ज्ञान की प्राप्ति हुई थी?",
        answers: [
            { text: "गंगा", correct: false },
            { text: "निरंजना", correct: true },
            { text: "गंडक", correct: false },
            { text: "यमुना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महात्मा बुद्ध को बोधगया में निरंजना नदी के तट पर ज्ञान प्राप्त हुआ था।"
    },
    {
        question: "'त्रिरत्न' का संबंध किस धर्म से है?",
        answers: [
            { text: "जैन धर्म", correct: false },
            { text: "बौद्ध धर्म", correct: false },
            { text: "दोनों", correct: true },
            { text: "कोई नहीं", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> त्रिरत्न की अवधारणा जैन धर्म (सम्यक दर्शन, सम्यक ज्ञान, सम्यक आचरण) और बौद्ध धर्म (बुद्ध, धम्म, संघ) दोनों में मौजूद है।"
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