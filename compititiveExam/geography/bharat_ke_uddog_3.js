const questions = [
    {
        topHeading: "भारत के उद्योग पर आधारित बहुविकल्पीय प्रश्न part 3  (quiz_no. 101)."
    },
    {
        question: "भारत में सबसे अधिक चीनी का उत्पादन' किस राज्य में होता है?",
        answers: shuffle([
            { text: "महाराष्ट्र", correct: false },
            { text: "उत्तर प्रदेश", correct: true },
            { text: "बिहार", correct: false },
            { text: "तमिलनाडु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर प्रदेश भारत का सबसे बड़ा गन्ना उत्पादक राज्य है, और इसलिए यहाँ भारत में सबसे अधिक चीनी का उत्पादन होता है।"
    },
    {
        question: "'लौह और इस्पात उद्योग' में 'कोयला' का क्या महत्व है?",
        answers: shuffle([
            { text: "यह कच्चे माल के रूप में उपयोग होता है।", correct: false },
            { text: "यह ऊर्जा के स्रोत के रूप में उपयोग होता है।", correct: false },
            { text: "यह लौह अयस्क को पिघलाने में मदद करता है।", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोयला लौह और इस्पात उद्योग में एक महत्वपूर्ण ईंधन के रूप में, पिघलाने की प्रक्रिया में और कार्बन की आपूर्ति के लिए उपयोग होता है, इसलिए इसका उपयोग इन सभी तरीकों से किया जाता है।"
    },
    {
        question: "'हिंदुस्तान एयरोनॉटिक्स लिमिटेड' (HAL) की इकाइयाँ कहाँ स्थित हैं?",
        answers: shuffle([
            { text: "बेंगलुरु", correct: false },
            { text: "नासिक", correct: false },
            { text: "हैदराबाद", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंदुस्तान एयरोनॉटिक्स लिमिटेड (HAL) की इकाइयाँ बेंगलुरु, नासिक, हैदराबाद, लखनऊ और कानपुर जैसे कई शहरों में स्थित हैं।"
    },
    {
        question: "'भारत का सबसे पुराना सूती वस्त्र उद्योग' कहाँ स्थापित किया गया था?",
        answers: shuffle([
            { text: "मुंबई", correct: false },
            { text: "अहमदाबाद", correct: false },
            { text: "कोलकाता", correct: true },
            { text: "कानपुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत का पहला आधुनिक सूती वस्त्र मिल 1818 में कोलकाता के पास फोर्ट ग्लॉस्टर में स्थापित हुआ था।"
    },
    {
        question: "'भारत का सबसे बड़ा तेल उत्पादक क्षेत्र' कौन सा है?",
        answers: shuffle([
            { text: "डिगबोई", correct: false },
            { text: "अंकलेश्वर", correct: false },
            { text: "मुंबई हाई", correct: true },
            { text: "जामनगर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुंबई हाई, मुंबई के तट से दूर अरब सागर में स्थित भारत का सबसे बड़ा और सबसे महत्वपूर्ण अपतटीय तेल उत्पादक क्षेत्र है।"
    },
    {
        question: "'हिंडाल्को' (Hindalco) किस उद्योग से संबंधित है?",
        answers: shuffle([
            { text: "लौह और इस्पात", correct: false },
            { text: "एल्यूमीनियम", correct: true },
            { text: "उर्वरक", correct: false },
            { text: "सीमेंट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंडाल्को इंडस्ट्रीज लिमिटेड आदित्य बिड़ला समूह की एक कंपनी है जो एल्यूमीनियम और तांबे के उत्पादन से संबंधित है।"
    },
    {
        question: "'नेवेली लिग्नाइट कॉर्पोरेशन' (NLC) किस उद्योग से संबंधित है?",
        answers: shuffle([
            { text: "लौह और इस्पात", correct: false },
            { text: "विद्युत उत्पादन", correct: true },
            { text: "सीमेंट", correct: false },
            { text: "उर्वरक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नेवेली लिग्नाइट कॉर्पोरेशन (NLC) मुख्य रूप से लिग्नाइट कोयले का खनन और उससे ताप विद्युत का उत्पादन करता है।"
    },
    {
        question: "'इलेक्ट्रॉनिक उद्योग' के लिए प्रसिद्ध 'गुड़गांव' किस राज्य में है?",
        answers: shuffle([
            { text: "उत्तर प्रदेश", correct: false },
            { text: "हरियाणा", correct: true },
            { text: "राजस्थान", correct: false },
            { text: "दिल्ली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुड़गांव (अब गुरुग्राम), हरियाणा में स्थित है और यह ऑटोमोबाइल और इलेक्ट्रॉनिक उद्योग का एक प्रमुख केंद्र है।"
    },
    {
        question: "'डीजल लोकोमोटिव वर्क्स' (DLW) कहाँ स्थित है?",
        answers: shuffle([
            { text: "चित्तरंजन", correct: false },
            { text: "कपूरथला", correct: false },
            { text: "पेरंबूर", correct: false },
            { text: "वाराणसी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डीजल लोकोमोटिव वर्क्स (DLW) वाराणसी में स्थित है और यह डीजल और इलेक्ट्रिक इंजनों का निर्माण करता है।"
    },
    {
        question: "'जहाज निर्माण उद्योग' का एक महत्वपूर्ण केंद्र कौन सा है?",
        answers: shuffle([
            { text: "विशाखापत्तनम", correct: false },
            { text: "कोच्चि", correct: false },
            { text: "मुंबई", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विशाखापत्तनम (हिंदुस्तान शिपयार्ड), कोच्चि (कोचीन शिपयार्ड) और मुंबई (मझगांव डॉक) तीनों ही भारत में जहाज निर्माण के प्रमुख केंद्र हैं।"
    },
    {
        question: "'सीमेंट उद्योग' के स्थानीयकरण का सबसे महत्वपूर्ण कारक क्या है?",
        answers: shuffle([
            { text: "बाजार की निकटता", correct: false },
            { text: "कच्चे माल की उपलब्धता", correct: true },
            { text: "परिवहन की सुविधा", correct: false },
            { text: "पानी की उपलब्धता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सीमेंट उद्योग में चूना पत्थर, जिप्सम और कोयला जैसे कच्चे माल का वजन अधिक होता है, इसलिए उद्योग की स्थापना कच्चे माल के स्रोत के पास ही की जाती है।"
    },
    {
        question: "'राउरकेला' इस्पात संयंत्र किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "झारखंड", correct: false },
            { text: "ओडिशा", correct: true },
            { text: "छत्तीसगढ़", correct: false },
            { text: "पश्चिम बंगाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राउरकेला इस्पात संयंत्र ओडिशा में स्थित है, और इसकी स्थापना जर्मनी के सहयोग से हुई थी।"
    },
    {
        question: "'भारत में सबसे अधिक जूट उत्पादन' किस राज्य में होता है?",
        answers: shuffle([
            { text: "असम", correct: false },
            { text: "बिहार", correct: false },
            { text: "पश्चिम बंगाल", correct: true },
            { text: "ओडिशा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पश्चिम बंगाल भारत का सबसे बड़ा जूट उत्पादक राज्य है, और यहाँ देश की अधिकांश जूट मिलें भी स्थित हैं।"
    },
    {
        question: "'पेट्रोलियम रिफाइनरियां' कहाँ स्थित हैं?",
        answers: shuffle([
            { text: "डिगबोई और मुंबई", correct: false },
            { text: "हल्दिया और मथुरा", correct: false },
            { text: "जामनगर और पानीपत", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में कई स्थानों पर पेट्रोलियम रिफाइनरियां स्थित हैं, जैसे डिगबोई (असम), मुंबई (महाराष्ट्र), हल्दिया (पश्चिम बंगाल), मथुरा (उत्तर प्रदेश), जामनगर (गुजरात) और पानीपत (हरियाणा)।"
    },
    {
        question: "'भारत का सबसे बड़ा उर्वरक संयंत्र' कहाँ स्थित है?",
        answers: shuffle([
            { text: "हल्दिया", correct: true },
            { text: "सिंदरी", correct: false },
            { text: "फूलपुर", correct: false },
            { text: "ट्राम्बे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हल्दिया (पश्चिम बंगाल) में स्थित हिंदुस्तान फर्टिलाइजर कॉर्पोरेशन लिमिटेड का संयंत्र भारत का सबसे बड़ा उर्वरक संयंत्र है।"
    },
    {
        question: "'भारत में पहली मोटर कार' का निर्माण किस कंपनी ने किया था?",
        answers: shuffle([
            { text: "मारुति सुजुकी", correct: false },
            { text: "हिंदुस्तान मोटर्स", correct: true },
            { text: "टाटा मोटर्स", correct: false },
            { text: "महिंद्रा एंड महिंद्रा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में पहली मोटर कार 'हिंदुस्तान 10' का निर्माण हिंदुस्तान मोटर्स ने किया था।"
    },
    {
        question: "'हिंदुस्तान जिंक लिमिटेड' का मुख्यालय कहाँ है?",
        answers: shuffle([
            { text: "जयपुर", correct: false },
            { text: "उदयपुर", correct: true },
            { text: "दिल्ली", correct: false },
            { text: "मुंबई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंदुस्तान जिंक लिमिटेड, जो जस्ता और सीसा का उत्पादन करता है, का मुख्यालय राजस्थान के उदयपुर में है।"
    },
    {
        question: "'पिंपरी' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "तमिलनाडु", correct: false },
            { text: "कर्नाटक", correct: false },
            { text: "महाराष्ट्र", correct: true },
            { text: "गुजरात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पिंपरी, महाराष्ट्र में पुणे के पास स्थित है और यह एंटीबायोटिक उद्योग के लिए प्रसिद्ध है।"
    },
    {
        question: "'लुधियाना' किस उद्योग के लिए जाना जाता है?",
        answers: shuffle([
            { text: "सूती वस्त्र", correct: false },
            { text: "ऊनी वस्त्र और होजरी", correct: true },
            { text: "रेशम उद्योग", correct: false },
            { text: "कागज उद्योग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लुधियाना, पंजाब में स्थित है और यह भारत का एक प्रमुख ऊनी वस्त्र और होजरी उद्योग केंद्र है।"
    },
    {
        question: "'भारत का सबसे बड़ा निजी क्षेत्र का लौह और इस्पात संयंत्र' कौन सा है?",
        answers: shuffle([
            { text: "बोकारो", correct: false },
            { text: "जमशेदपुर", correct: true },
            { text: "राउरकेला", correct: false },
            { text: "विशाखापत्तनम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जमशेदपुर में स्थित टाटा स्टील (TISCO) भारत का सबसे बड़ा निजी क्षेत्र का लौह और इस्पात संयंत्र है।"
    },
    {
        question: "'भारत में पहली जूट मिल' किस वर्ष स्थापित हुई थी?",
        answers: shuffle([
            { text: "1855", correct: true },
            { text: "1860", correct: false },
            { text: "1870", correct: false },
            { text: "1880", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में पहला जूट मिल 1855 में रिसड़ा, पश्चिम बंगाल में स्थापित किया गया था।"
    },
    {
        question: "'बेंगलुरु' किस उद्योग के लिए जाना जाता है?",
        answers: shuffle([
            { text: "ऑटोमोबाइल", correct: false },
            { text: "इलेक्ट्रॉनिक्स", correct: false },
            { text: "एयरोस्पेस", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बेंगलुरु इलेक्ट्रॉनिक्स, एयरोस्पेस और ऑटोमोबाइल जैसे कई उद्योगों का एक प्रमुख केंद्र है।"
    },
    {
        question: "'अहमदाबाद' को 'भारत का मैनचेस्टर' क्यों कहा जाता है?",
        answers: shuffle([
            { text: "यहाँ सबसे अधिक ऊनी मिलें हैं।", correct: false },
            { text: "यहाँ जूट उद्योग का केंद्र है।", correct: false },
            { text: "यहाँ सबसे अधिक सूती वस्त्र मिलें हैं।", correct: true },
            { text: "यहाँ औद्योगिक विकास सबसे पहले हुआ था।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अहमदाबाद में सूती वस्त्र मिलों की संख्या अधिक होने के कारण इसे 'भारत का मैनचेस्टर' कहा जाता है।"
    },
    {
        question: "'सिंदरी' उर्वरक संयंत्र की स्थापना किस पंचवर्षीय योजना के दौरान हुई थी?",
        answers: shuffle([
            { text: "पहली", correct: true },
            { text: "दूसरी", correct: false },
            { text: "तीसरी", correct: false },
            { text: "चौथी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंदरी में भारत के पहले सार्वजनिक क्षेत्र के उर्वरक कारखाने की स्थापना पहली पंचवर्षीय योजना (1951-56) के दौरान हुई थी।"
    },
    {
        question: "'भारत में 'ऑटोमोबाइल उद्योग' का सबसे बड़ा केंद्र' कौन सा है?",
        answers: shuffle([
            { text: "पुणे", correct: false },
            { text: "चेन्नई", correct: true },
            { text: "गुड़गांव", correct: false },
            { text: "मुंबई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चेन्नई को 'भारत का डेट्रॉइट' कहा जाता है, क्योंकि यहाँ भारत के कुल ऑटोमोबाइल उत्पादन का एक बड़ा हिस्सा होता है।"
    },
    {
        question: "'भारत का सबसे पुराना निजी क्षेत्र का जहाज निर्माण यार्ड' कौन सा है?",
        answers: shuffle([
            { text: "हिंदुस्तान शिपयार्ड लिमिटेड", correct: true },
            { text: "कोचीन शिपयार्ड लिमिटेड", correct: false },
            { text: "गार्डन रीच शिपबिल्डर्स एंड इंजीनियर्स", correct: false },
            { text: "मझगांव डॉक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंदुस्तान शिपयार्ड लिमिटेड की स्थापना 1941 में निजी क्षेत्र में सिन्धिया स्टीम नेविगेशन कंपनी द्वारा की गई थी।"
    },
    {
        question: "'इंडियन टेलीफोन इंडस्ट्रीज' (ITI) का मुख्यालय कहाँ है?",
        answers: shuffle([
            { text: "पुणे", correct: false },
            { text: "बेंगलुरु", correct: true },
            { text: "चेन्नई", correct: false },
            { text: "हैदराबाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंडियन टेलीफोन इंडस्ट्रीज (ITI), जो दूरसंचार उपकरणों का निर्माण करती है, का मुख्यालय बेंगलुरु में स्थित है।"
    },
    {
        question: "'भारत में सबसे अधिक ऊनी मिलें' किस राज्य में हैं?",
        answers: shuffle([
            { text: "पंजाब", correct: true },
            { text: "हरियाणा", correct: false },
            { text: "राजस्थान", correct: false },
            { text: "गुजरात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पंजाब, विशेषकर लुधियाना, भारत में ऊनी वस्त्रों और होजरी का एक प्रमुख केंद्र है।"
    },
    {
        question: "'भारत में सीमेंट उद्योग का पहला सफल प्रयास' कहाँ किया गया था?",
        answers: shuffle([
            { text: "पोर्टो नोवो", correct: false },
            { text: "चेन्नई", correct: true },
            { text: "सिंदरी", correct: false },
            { text: "कटनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में पहला सफल सीमेंट संयंत्र 1904 में चेन्नई में स्थापित किया गया था।"
    },
    {
        question: "'दुर्गापुर इस्पात संयंत्र' की स्थापना किस पंचवर्षीय योजना के दौरान हुई थी?",
        answers: shuffle([
            { text: "पहली", correct: false },
            { text: "दूसरी", correct: true },
            { text: "तीसरी", correct: false },
            { text: "चौथी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दुर्गापुर इस्पात संयंत्र (पश्चिम बंगाल) की स्थापना द्वितीय पंचवर्षीय योजना (1956-61) के दौरान ब्रिटेन के सहयोग से हुई थी।"
    },
    {
        question: "'भारत हेवी इलेक्ट्रिकल्स लिमिटेड' (BHEL) का संयंत्र कहाँ स्थित है?",
        answers: shuffle([
            { text: "हरिद्वार", correct: false },
            { text: "भोपाल", correct: false },
            { text: "झांसी", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> BHEL के प्रमुख संयंत्र हरिद्वार (उत्तराखंड), भोपाल (मध्य प्रदेश), झांसी (उत्तर प्रदेश) और तिरुचिरापल्ली (तमिलनाडु) में स्थित हैं।"
    },
    {
        question: "'भारत में सबसे बड़ा पेट्रोलियम रिफाइनरी परिसर' कहाँ है?",
        answers: shuffle([
            { text: "जामनगर", correct: true },
            { text: "मुंबई", correct: false },
            { text: "हल्दिया", correct: false },
            { text: "मथुरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुजरात के जामनगर में रिलायंस इंडस्ट्रीज का रिफाइनरी परिसर विश्व का सबसे बड़ा पेट्रोलियम रिफाइनरी परिसर है।"
    },
    {
        question: "'भिलाई' इस्पात संयंत्र किस कच्चे माल के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "उच्च गुणवत्ता वाला हेमेटाइट", correct: true },
            { text: "निम्न गुणवत्ता वाला कोयला", correct: false },
            { text: "मैंगनीज", correct: false },
            { text: "बॉक्साइट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भिलाई इस्पात संयंत्र को बैलाडीला की खदानों से उच्च गुणवत्ता वाला हेमेटाइट लौह अयस्क प्राप्त होता है।"
    },
    {
        question: "'भारत का चीनी का कटोरा' (Sugar Bowl of India) किसे कहा जाता है?",
        answers: shuffle([
            { text: "पंजाब", correct: false },
            { text: "महाराष्ट्र", correct: false },
            { text: "उत्तर प्रदेश", correct: true },
            { text: "बिहार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर प्रदेश, भारत में गन्ने का सबसे बड़ा उत्पादक होने के कारण इसे 'चीनी का कटोरा' कहा जाता है।"
    },
    {
        question: "'रेशम उत्पादन' में भारत का कौन सा राज्य 'मूगा रेशम' का सबसे बड़ा उत्पादक है?",
        answers: shuffle([
            { text: "कर्नाटक", correct: false },
            { text: "आंध्र प्रदेश", correct: false },
            { text: "असम", correct: true },
            { text: "बिहार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> असम मूगा रेशम का एकमात्र उत्पादक है, जो भारत में व्यावसायिक रूप से पाया जाने वाला एकमात्र रेशम है।"
    },
    {
        question: "'महानदी कोलफील्ड्स लिमिटेड' (MCL) का मुख्यालय कहाँ है?",
        answers: shuffle([
            { text: "भुवनेश्वर", correct: false },
            { text: "कटक", correct: false },
            { text: "संबलपुर", correct: true },
            { text: "राउरकेला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महानदी कोलफील्ड्स लिमिटेड (MCL) का मुख्यालय ओडिशा के संबलपुर में स्थित है, और यह कोल इंडिया लिमिटेड (CIL) की एक सहायक कंपनी है।"
    },
    {
        question: "'भारत में सबसे बड़ा सार्वजनिक क्षेत्र का इस्पात संयंत्र' कौन सा है?",
        answers: shuffle([
            { text: "बोकारो", correct: false },
            { text: "दुर्गापुर", correct: false },
            { text: "भिलाई", correct: true },
            { text: "राउरकेला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> छत्तीसगढ़ में स्थित भिलाई इस्पात संयंत्र भारत का सबसे बड़ा सार्वजनिक क्षेत्र का इस्पात संयंत्र है।"
    },
    {
        question: "'ऑटोमोबाइल उद्योग' के लिए 'गुड़गांव' क्यों प्रसिद्ध है?",
        answers: shuffle([
            { text: "यहाँ कच्चे माल का भंडार है।", correct: false },
            { text: "यह देश की राजधानी के करीब है।", correct: false },
            { text: "यहाँ कुशल श्रम उपलब्ध है।", correct: false },
            { text: "B और C दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुड़गांव (गुरुग्राम) दिल्ली के करीब है, जो एक बड़ा बाजार है, और यहाँ कुशल श्रम भी उपलब्ध है, जिसने ऑटोमोबाइल उद्योग के विकास में मदद की है।"
    },
    {
        question: "'इलेक्ट्रॉनिक उद्योग' के लिए भारत में 'सबसे बड़ा निर्यात क्षेत्र' कौन सा है?",
        answers: shuffle([
            { text: "बेंगलुरु", correct: false },
            { text: "चेन्नई", correct: false },
            { text: "नोएडा", correct: true },
            { text: "मुंबई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नोएडा (उत्तर प्रदेश) भारत में इलेक्ट्रॉनिक उत्पादों का सबसे बड़ा निर्यात क्षेत्र है।"
    },
    {
        question: "'राष्ट्रीय खनिज विकास निगम' (NMDC) किस क्षेत्र में काम करता है?",
        answers: shuffle([
            { text: "पेट्रोलियम", correct: false },
            { text: "लौह अयस्क", correct: true },
            { text: "एल्यूमीनियम", correct: false },
            { text: "कोयला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> NMDC लौह अयस्क, हीरा और अन्य खनिजों की खोज और खनन का काम करता है।"
    },
    {
        question: "'भारत हेवी इलेक्ट्रिकल्स लिमिटेड' (BHEL) का संयंत्र 'झांसी' किस उद्योग से संबंधित है?",
        answers: shuffle([
            { text: "ट्रांसफार्मर", correct: false },
            { text: "बॉयलर", correct: false },
            { text: "विद्युत लोकोमोटिव", correct: true },
            { text: "पवन टरबाइन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> BHEL का झांसी संयंत्र विद्युत लोकोमोटिव और अन्य विद्युत उपकरणों का निर्माण करता है।"
    },
    {
        question: "'भारत में सबसे अधिक जूट मिलें' किस नदी के किनारे स्थित हैं?",
        answers: shuffle([
            { text: "दामोदर", correct: false },
            { text: "हुगली", correct: true },
            { text: "महानदी", correct: false },
            { text: "ब्रह्मपुत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत की अधिकांश जूट मिलें पश्चिम बंगाल में हुगली नदी के किनारे स्थित हैं।"
    },
    {
        question: "'सीमेंट उद्योग' का पहला सफल संयंत्र किस वर्ष स्थापित किया गया था?",
        answers: shuffle([
            { text: "1898", correct: false },
            { text: "1904", correct: true },
            { text: "1914", correct: false },
            { text: "1921", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में पहला सफल सीमेंट संयंत्र 1904 में चेन्नई में स्थापित हुआ था।"
    },
    {
        question: "'लौह और इस्पात उद्योग' के लिए 'कोयले' की आपूर्ति कहाँ से होती है?",
        answers: shuffle([
            { text: "झरिया", correct: false },
            { text: "रानीगंज", correct: false },
            { text: "बोकारो", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत के लौह और इस्पात उद्योग को कोयले की आपूर्ति मुख्य रूप से झरिया, रानीगंज और बोकारो जैसे प्रमुख कोयला क्षेत्रों से होती है।"
    },
    {
        question: "'टीटागढ़' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "बिहार", correct: false },
            { text: "ओडिशा", correct: false },
            { text: "पश्चिम बंगाल", correct: true },
            { text: "झारखंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टीटागढ़, पश्चिम बंगाल में स्थित है और यह कागज उद्योग के लिए प्रसिद्ध है।"
    },
    {
        question: "'पेट्रोरसायन उद्योग' का प्रमुख केंद्र कौन सा है?",
        answers: shuffle([
            { text: "अंकलेश्वर", correct: false },
            { text: "हल्दिया", correct: false },
            { text: "वडोदरा", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में पेट्रोरसायन उद्योग के प्रमुख केंद्र हल्दिया, वडोदरा, अंकलेश्वर, जामनगर और मुंबई हैं।"
    },
    {
        question: "'रेशम उद्योग' के लिए प्रसिद्ध 'मैसूर' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "कर्नाटक", correct: true },
            { text: "तमिलनाडु", correct: false },
            { text: "केरल", correct: false },
            { text: "आंध्र प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मैसूर, कर्नाटक में स्थित है और यह रेशम उत्पादन के लिए प्रसिद्ध है।"
    },
    {
        question: "'सीमेंट उद्योग' में 'जिप्सम' का क्या उपयोग है?",
        answers: shuffle([
            { text: "यह कच्चे माल के रूप में उपयोग होता है।", correct: false },
            { text: "यह जल को सोखता है।", correct: false },
            { text: "यह सीमेंट के जमने की दर को नियंत्रित करता है।", correct: true },
            { text: "यह सीमेंट की ताकत बढ़ाता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जिप्सम सीमेंट में मिलाने से उसके जमने की प्रक्रिया धीमी हो जाती है, जिससे सीमेंट को एक उपयुक्त समय मिलता है।"
    },
    {
        question: "'भारत का सबसे बड़ा सार्वजनिक क्षेत्र का उपक्रम' कौन सा है?",
        answers: shuffle([
            { text: "BHEL", correct: false },
            { text: "IOCL", correct: false },
            { text: "कोल इंडिया लिमिटेड (CIL)", correct: false },
            { text: "भारतीय रेलवे", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय रेलवे अपने कर्मचारियों की संख्या और राजस्व के मामले में भारत का सबसे बड़ा सार्वजनिक क्षेत्र का उपक्रम है।"
    },
    {
        question: "'भारत में पहला चीनी मिल' किस वर्ष स्थापित किया गया था?",
        answers: shuffle([
            { text: "1889", correct: false },
            { text: "1903", correct: true },
            { text: "1914", correct: false },
            { text: "1921", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में पहला आधुनिक चीनी मिल 1903 में बिहार के मढ़ौरा में स्थापित किया गया था।"
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