const questions = [
    {
        topHeading: "भारत के उद्योग पर आधारित बहुविकल्पीय प्रश्न part 2  (quiz_no. 100)."
    },
    {
        question: "भारत में 'पहला कागज मिल' कहाँ स्थापित किया गया था?",
        answers: shuffle([
            { text: "बालीगंज (पश्चिम बंगाल)", correct: true },
            { text: "श्रीरामपुर (पश्चिम बंगाल)", correct: false },
            { text: "टीटागढ़ (पश्चिम बंगाल)", correct: false },
            { text: "लखनऊ (उत्तर प्रदेश)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में पहली सफल कागज मिल की स्थापना 1867 में बालीगंज, पश्चिम बंगाल में हुई थी।"
    },
    {
        question: "'हिंदुस्तान एयरोनॉटिक्स लिमिटेड' (HAL) का मुख्यालय कहाँ है?",
        answers: shuffle([
            { text: "बेंगलुरु", correct: true },
            { text: "हैदराबाद", correct: false },
            { text: "पुणे", correct: false },
            { text: "नासिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंदुस्तान एयरोनॉटिक्स लिमिटेड (HAL), जो एक प्रमुख एयरोस्पेस और रक्षा कंपनी है, का मुख्यालय बेंगलुरु में स्थित है।"
    },
    {
        question: "'पिंपरी' किस उद्योग के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "लौह और इस्पात", correct: false },
            { text: "एंटीबायोटिक", correct: true },
            { text: "मोटर वाहन", correct: false },
            { text: "सीमेंट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पिंपरी, पुणे के पास स्थित है, और यह हिंदुस्तान एंटीबायोटिक्स लिमिटेड (HAL) के लिए जाना जाता है, जो भारत की पहली एंटीबायोटिक निर्माण इकाई है।"
    },
    {
        question: "'रेलवे कोच फैक्ट्री' कहाँ स्थित है?",
        answers: shuffle([
            { text: "चित्तरंजन", correct: false },
            { text: "कपूरथला", correct: true },
            { text: "वाराणसी", correct: false },
            { text: "जमशेदपुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कपूरथला, पंजाब में स्थित है और यह भारत की एक प्रमुख रेलवे कोच फैक्ट्री है।"
    },
    {
        question: "'भिलाई इस्पात संयंत्र' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "झारखंड", correct: false },
            { text: "ओडिशा", correct: false },
            { text: "छत्तीसगढ़", correct: true },
            { text: "पश्चिम बंगाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भिलाई इस्पात संयंत्र छत्तीसगढ़ में स्थित है और यह भारत का सबसे बड़ा सार्वजनिक क्षेत्र का इस्पात संयंत्र है।"
    },
    {
        question: "'मुंबई को भारत का सबसे बड़ा औद्योगिक क्षेत्र' क्यों माना जाता है?",
        answers: shuffle([
            { text: "यह एक बंदरगाह है।", correct: false },
            { text: "यहाँ पूंजी और बाजार उपलब्ध है।", correct: false },
            { text: "यहाँ कच्चे माल की उपलब्धता है।", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुंबई औद्योगिक क्षेत्र को बंदरगाह, पूंजी, बाजार, कुशल श्रमिक और कच्चे माल की उपलब्धता जैसे कई कारक लाभ पहुंचाते हैं।"
    },
    {
        question: "'सिंदरी' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "झारखंड", correct: true },
            { text: "बिहार", correct: false },
            { text: "पश्चिम बंगाल", correct: false },
            { text: "ओडिशा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंदरी, झारखंड में स्थित है और यह भारत का पहला सार्वजनिक क्षेत्र का उर्वरक कारखाना है।"
    },
    {
        question: "'बोकारो इस्पात संयंत्र' किस नदी घाटी पर स्थित है?",
        answers: shuffle([
            { text: "दामोदर घाटी", correct: true },
            { text: "स्वर्णरेखा घाटी", correct: false },
            { text: "महानदी घाटी", correct: false },
            { text: "कोसी घाटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बोकारो इस्पात संयंत्र झारखंड में दामोदर घाटी के पास स्थित है, जिससे इसे कोयले और अन्य कच्चे माल की आपूर्ति में मदद मिलती है।"
    },
    {
        question: "'भारत का सबसे बड़ा तेल क्षेत्र' कौन सा है?",
        answers: shuffle([
            { text: "अंकलेश्वर", correct: false },
            { text: "डिगबोई", correct: false },
            { text: "मुंबई हाई", correct: true },
            { text: "नहरकटिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुंबई हाई, मुंबई के तट से दूर स्थित है और यह भारत का सबसे बड़ा अपतटीय तेल क्षेत्र है।"
    },
    {
        question: "'लोहा और इस्पात उद्योग' के लिए 'कोयले' की आपूर्ति कहाँ से होती है?",
        answers: shuffle([
            { text: "रानीगंज", correct: false },
            { text: "झरिया", correct: false },
            { text: "बोकारो", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत के लौह और इस्पात उद्योग को कोयले की आपूर्ति मुख्य रूप से झरिया, रानीगंज और बोकारो जैसे कोयला क्षेत्रों से होती है।"
    },
    {
        question: "'हिंदुस्तान शिपयार्ड लिमिटेड' कहाँ स्थित है?",
        answers: shuffle([
            { text: "मुंबई", correct: false },
            { text: "कोच्चि", correct: false },
            { text: "विशाखापत्तनम", correct: true },
            { text: "चेन्नई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंदुस्तान शिपयार्ड लिमिटेड (HSL) विशाखापत्तनम में स्थित है और यह भारत का सबसे पुराना और सबसे बड़ा शिपयार्ड है।"
    },
    {
        question: "'सूती वस्त्र उद्योग' के लिए आदर्श जलवायु क्या है?",
        answers: shuffle([
            { text: "गर्म और शुष्क", correct: false },
            { text: "गर्म और आर्द्र", correct: true },
            { text: "ठंडी और शुष्क", correct: false },
            { text: "ठंडी और आर्द्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गर्म और आर्द्र जलवायु सूती धागे को टूटने से बचाती है और कताई और बुनाई में मदद करती है, इसलिए यह सूती वस्त्र उद्योग के लिए आदर्श है।"
    },
    {
        question: "'टीटागढ़' किस उद्योग के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "सूती वस्त्र", correct: false },
            { text: "कागज", correct: true },
            { text: "चीनी", correct: false },
            { text: "सीमेंट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टीटागढ़, पश्चिम बंगाल में स्थित है और यह कागज उद्योग के लिए जाना जाता है।"
    },
    {
        question: "'नाल्को' (NALCO) का मुख्यालय कहाँ है?",
        answers: shuffle([
            { text: "दिल्ली", correct: false },
            { text: "भुवनेश्वर", correct: true },
            { text: "मुंबई", correct: false },
            { text: "बेंगलुरु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नेशनल एल्यूमीनियम कंपनी लिमिटेड (NALCO) का मुख्यालय भुवनेश्वर, ओडिशा में स्थित है।"
    },
    {
        question: "'राष्ट्रीय केमिकल्स एंड फर्टिलाइजर्स लिमिटेड' (RCF) कहाँ स्थित है?",
        answers: shuffle([
            { text: "सिंदरी", correct: false },
            { text: "ट्राम्बे", correct: true },
            { text: "हल्दिया", correct: false },
            { text: "गोरखपुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रीय केमिकल्स एंड फर्टिलाइजर्स लिमिटेड (RCF) का मुख्य संयंत्र ट्राम्बे, मुंबई में स्थित है।"
    },
    {
        question: "'भारत हेवी इलेक्ट्रिकल्स लिमिटेड' (BHEL) किस क्षेत्र में काम करता है?",
        answers: shuffle([
            { text: "पेट्रोलियम", correct: false },
            { text: "इस्पात", correct: false },
            { text: "भारी इंजीनियरिंग", correct: true },
            { text: "उर्वरक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> BHEL एक प्रमुख सार्वजनिक क्षेत्र का उपक्रम है जो भारी इंजीनियरिंग उपकरणों और विद्युत उत्पादन उपकरण का निर्माण करता है।"
    },
    {
        question: "'रेशम उत्पादन' में भारत का सबसे बड़ा राज्य कौन सा है?",
        answers: shuffle([
            { text: "जम्मू और कश्मीर", correct: false },
            { text: "असम", correct: false },
            { text: "कर्नाटक", correct: true },
            { text: "आंध्र प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कर्नाटक भारत का सबसे बड़ा रेशम उत्पादक राज्य है।"
    },
    {
        question: "'सलेम' किस उद्योग के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "सीमेंट", correct: false },
            { text: "लौह और इस्पात", correct: true },
            { text: "चीनी", correct: false },
            { text: "बॉक्साइट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सलेम, तमिलनाडु में स्थित है और यह एक महत्वपूर्ण लौह और इस्पात संयंत्र है।"
    },
    {
        question: "'भारत का सबसे बड़ा सार्वजनिक क्षेत्र का उपक्रम' (PSU) कौन सा है?",
        answers: shuffle([
            { text: "भारतीय रेलवे", correct: true },
            { text: "BHEL", correct: false },
            { text: "HAL", correct: false },
            { text: "ONGC", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय रेलवे अपने कर्मचारियों की संख्या और कार्यक्षेत्र के मामले में भारत का सबसे बड़ा सार्वजनिक क्षेत्र का उपक्रम है।"
    },
    {
        question: "'भिलाई इस्पात संयंत्र' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "महानदी", correct: false },
            { text: "दामोदर", correct: false },
            { text: "शिवनाथ", correct: true },
            { text: "स्वर्णरेखा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भिलाई इस्पात संयंत्र शिवनाथ नदी के किनारे स्थित है, जो इसे जल की आपूर्ति करती है।"
    },
    {
        question: "'पहला आधुनिक जूट मिल' कहाँ स्थापित हुआ था?",
        answers: shuffle([
            { text: "टीटागढ़", correct: false },
            { text: "रिसड़ा", correct: true },
            { text: "श्रीरामपुर", correct: false },
            { text: "बालीगंज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में पहला आधुनिक जूट मिल 1855 में रिसड़ा, पश्चिम बंगाल में स्थापित किया गया था।"
    },
    {
        question: "'पेट्रोलियम रिफाइनरी' के लिए भारत का सबसे बड़ा निजी क्षेत्र का संयंत्र कहाँ है?",
        answers: shuffle([
            { text: "मुंबई", correct: false },
            { text: "जामनगर", correct: true },
            { text: "हल्दिया", correct: false },
            { text: "मथुरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जामनगर (गुजरात) में रिलायंस इंडस्ट्रीज की रिफाइनरी भारत की सबसे बड़ी निजी क्षेत्र की पेट्रोलियम रिफाइनरी है।"
    },
    {
        question: "'भारत हेवी इलेक्ट्रिकल्स लिमिटेड' (BHEL) की स्थापना कब हुई थी?",
        answers: shuffle([
            { text: "1956", correct: false },
            { text: "1964", correct: true },
            { text: "1974", correct: false },
            { text: "1984", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> BHEL की स्थापना 1964 में भारी इंजीनियरिंग क्षेत्र में आत्मनिर्भरता प्राप्त करने के लिए की गई थी।"
    },
    {
        question: "'नाल्को' (NALCO) का मुख्यालय कहाँ है?",
        answers: shuffle([
            { text: "दिल्ली", correct: false },
            { text: "भुवनेश्वर", correct: true },
            { text: "मुंबई", correct: false },
            { text: "बेंगलुरु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नेशनल एल्यूमीनियम कंपनी लिमिटेड (NALCO) का मुख्यालय भुवनेश्वर, ओडिशा में स्थित है।"
    },
    {
        question: "'पिट्सबर्ग' किस उद्योग के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "सूती वस्त्र", correct: false },
            { text: "लौह और इस्पात", correct: true },
            { text: "ऑटोमोबाइल", correct: false },
            { text: "पेट्रोलियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पिट्सबर्ग, अमेरिका में एक प्रमुख लौह और इस्पात उद्योग केंद्र है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, जमशेदपुर को 'भारत का पिट्सबर्ग' कहा जाता है।"
    },
    {
        question: "'भारत का बोस्टन' किसे कहा जाता है?",
        answers: shuffle([
            { text: "मुंबई", correct: false },
            { text: "अहमदाबाद", correct: true },
            { text: "कोलकाता", correct: false },
            { text: "चेन्नई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अहमदाबाद को 'भारत का बोस्टन' कहा जाता है क्योंकि यह साबरमती नदी के किनारे स्थित है, ठीक जैसे बोस्टन अमेरिका में चार्ल्स नदी के किनारे है, और दोनों ही शहर कपड़ा उद्योग के लिए जाने जाते हैं।"
    },
    {
        question: "'हिंदुस्तान एयरोनॉटिक्स लिमिटेड' (HAL) की स्थापना कब हुई थी?",
        answers: shuffle([
            { text: "1940", correct: true },
            { text: "1956", correct: false },
            { text: "1964", correct: false },
            { text: "1971", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंदुस्तान एयरक्राफ्ट की स्थापना 1940 में बेंगलुरु में हुई थी, जिसे बाद में हिंदुस्तान एयरोनॉटिक्स लिमिटेड (HAL) नाम दिया गया।"
    },
    {
        question: "भारत में 'सबसे अधिक उर्वरक की खपत' वाला राज्य कौन सा है?",
        answers: shuffle([
            { text: "महाराष्ट्र", correct: false },
            { text: "उत्तर प्रदेश", correct: false },
            { text: "पंजाब", correct: true },
            { text: "हरियाणा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पंजाब में प्रति हेक्टेयर उर्वरक की खपत भारत में सबसे अधिक है, क्योंकि यहाँ की कृषि सघन और मशीनीकृत है।"
    },
    {
        question: "'इंडियन ऑयल कॉर्पोरेशन लिमिटेड' (IOCL) का मुख्यालय कहाँ है?",
        answers: shuffle([
            { text: "मुंबई", correct: false },
            { text: "नई दिल्ली", correct: true },
            { text: "कोलकाता", correct: false },
            { text: "चेन्नई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंडियन ऑयल कॉर्पोरेशन लिमिटेड, जो भारत की सबसे बड़ी सार्वजनिक क्षेत्र की तेल और गैस कंपनी है, का मुख्यालय नई दिल्ली में स्थित है।"
    },
    {
        question: "'दुर्गापुर' इस्पात संयंत्र किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "दामोदर", correct: true },
            { text: "हुगली", correct: false },
            { text: "महानदी", correct: false },
            { text: "ब्रह्मपुत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दुर्गापुर इस्पात संयंत्र पश्चिम बंगाल में दामोदर नदी के किनारे स्थित है, जो इसे जल की आपूर्ति करती है।"
    },
    {
        question: "भारत में 'पहला तेल कुआं' कहाँ खोदा गया था?",
        answers: shuffle([
            { text: "डिगबोई", correct: false },
            { text: "माकुम", correct: true },
            { text: "नहरकटिया", correct: false },
            { text: "मोरान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में पहला तेल कुआं 1867 में असम के माकुम में खोदा गया था, हालांकि व्यावसायिक उत्पादन डिगबोई से शुरू हुआ था।"
    },
    {
        question: "'इंटीग्रल कोच फैक्ट्री' (ICF) कहाँ स्थित है?",
        answers: shuffle([
            { text: "पेरंबूर", correct: true },
            { text: "कपूरथला", correct: false },
            { text: "चित्तरंजन", correct: false },
            { text: "वाराणसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंटीग्रल कोच फैक्ट्री (ICF) चेन्नई के पास पेरंबूर में स्थित है और यह रेलवे कोचों के निर्माण का एक प्रमुख केंद्र है।"
    },
    {
        question: "'कागज उद्योग' का सबसे पुराना केंद्र कौन सा है?",
        answers: shuffle([
            { text: "टीटागढ़", correct: false },
            { text: "श्रीरामपुर", correct: false },
            { text: "बालीगंज", correct: true },
            { text: "हुगली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में पहला सफल कागज मिल 1867 में बालीगंज, पश्चिम बंगाल में स्थापित किया गया था।"
    },
    {
        question: "'भारत का पिट्सबर्ग' किसे कहा जाता है?",
        answers: shuffle([
            { text: "जमशेदपुर", correct: true },
            { text: "भिलाई", correct: false },
            { text: "राउरकेला", correct: false },
            { text: "दुर्गापुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जमशेदपुर, जो भारत का पहला और सबसे महत्वपूर्ण लौह और इस्पात उद्योग केंद्र है, को अमेरिका के पिट्सबर्ग शहर की तुलना में 'भारत का पिट्सबर्ग' कहा जाता है।"
    },
    {
        question: "'बेंगलुरु' किस उद्योग के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "सूती वस्त्र", correct: false },
            { text: "लौह और इस्पात", correct: false },
            { text: "इलेक्ट्रॉनिक्स और सूचना प्रौद्योगिकी", correct: true },
            { text: "चीनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बेंगलुरु, जिसे 'भारत का सिलिकॉन वैली' कहा जाता है, अपने इलेक्ट्रॉनिक्स और सूचना प्रौद्योगिकी उद्योग के लिए विश्व प्रसिद्ध है।"
    },
    {
        question: "'कोयंबटूर' को 'दक्षिण भारत का मैनचेस्टर' क्यों कहा जाता है?",
        answers: shuffle([
            { text: "यहाँ सबसे अधिक ऊनी मिलें हैं।", correct: false },
            { text: "यहाँ कपास की खेती होती है।", correct: false },
            { text: "यहाँ सबसे अधिक सूती वस्त्र मिलें हैं।", correct: true },
            { text: "यहाँ जूट उद्योग का केंद्र है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोयंबटूर, तमिलनाडु में स्थित है, और यहाँ सूती वस्त्र मिलों की संख्या सबसे अधिक है, इसलिए इसे 'दक्षिण भारत का मैनचेस्टर' कहा जाता है।"
    },
    {
        question: "'बोकारो इस्पात संयंत्र' किस पंचवर्षीय योजना के दौरान स्थापित हुआ था?",
        answers: shuffle([
            { text: "दूसरी", correct: false },
            { text: "तीसरी", correct: false },
            { text: "चौथी", correct: true },
            { text: "पांचवीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बोकारो इस्पात संयंत्र की स्थापना चौथी पंचवर्षीय योजना (1969-74) के दौरान सोवियत संघ के सहयोग से हुई थी।"
    },
    {
        question: "'हिंदुस्तान मोटर्स' का संयंत्र कहाँ स्थित है?",
        answers: shuffle([
            { text: "चेन्नई", correct: false },
            { text: "कोलकाता के पास", correct: true },
            { text: "पुणे", correct: false },
            { text: "गुड़गांव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंदुस्तान मोटर्स का संयंत्र पश्चिम बंगाल में कोलकाता के पास उत्तरपारा में स्थित है, जहां 'एंबेसडर' कार का निर्माण होता था।"
    },
    {
        question: "'गुजरात' में 'सीमेंट उद्योग' के विकास का मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "सस्ता श्रम", correct: false },
            { text: "बंदरगाह की निकटता", correct: false },
            { text: "कोयले की उपलब्धता", correct: false },
            { text: "चूना पत्थर और जिप्सम के विशाल भंडार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुजरात में चूना पत्थर और जिप्सम के विशाल भंडार हैं, जो सीमेंट उद्योग के लिए प्रमुख कच्चे माल हैं, जिससे इस उद्योग का विकास हुआ है।"
    },
    {
        question: "'भारत हेवी इलेक्ट्रिकल्स लिमिटेड' (BHEL) का मुख्यालय कहाँ है?",
        answers: shuffle([
            { text: "भोपाल", correct: false },
            { text: "हरिद्वार", correct: false },
            { text: "नई दिल्ली", correct: true },
            { text: "हैदराबाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत हेवी इलेक्ट्रिकल्स लिमिटेड (BHEL) का मुख्यालय नई दिल्ली में स्थित है, हालांकि इसके प्रमुख संयंत्र भोपाल और हरिद्वार में हैं।"
    },
    {
        question: "'लौह और इस्पात उद्योग' के लिए 'मैंगनीज' की आपूर्ति कहाँ से होती है?",
        answers: shuffle([
            { text: "ओडिशा", correct: false },
            { text: "मध्य प्रदेश", correct: false },
            { text: "कर्नाटक", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लौह और इस्पात उद्योग को मैंगनीज की आपूर्ति मुख्य रूप से ओडिशा, मध्य प्रदेश और कर्नाटक राज्यों से होती है।"
    },
    {
        question: "'नाल्को' (NALCO) का संयंत्र कहाँ स्थित है?",
        answers: shuffle([
            { text: "कोरबा", correct: false },
            { text: "हिंडालको", correct: false },
            { text: "दामनजोड़ी", correct: true },
            { text: "रेणुकूट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नेशनल एल्यूमीनियम कंपनी लिमिटेड (NALCO) का संयंत्र ओडिशा के दामनजोड़ी में स्थित है।"
    },
    {
        question: "'सिंदरी' उर्वरक संयंत्र किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "दामोदर", correct: true },
            { text: "स्वर्णरेखा", correct: false },
            { text: "महानदी", correct: false },
            { text: "ब्रह्मपुत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंदरी उर्वरक संयंत्र झारखंड में दामोदर नदी के किनारे स्थित है, जो इसे जल की आपूर्ति करती है।"
    },
    {
        question: "'मोटर वाहन उद्योग' का एक प्रमुख केंद्र कौन सा है?",
        answers: shuffle([
            { text: "पुणे", correct: false },
            { text: "चेन्नई", correct: false },
            { text: "गुड़गांव", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुणे, चेन्नई और गुड़गांव तीनों ही भारत में मोटर वाहन उद्योग के प्रमुख केंद्र हैं।"
    },
    {
        question: "'भारतीय रेलवे' का सबसे बड़ा लोकोमोटिव कारखाना कहाँ है?",
        answers: shuffle([
            { text: "चित्तरंजन", correct: true },
            { text: "वाराणसी", correct: false },
            { text: "पटियाला", correct: false },
            { text: "पेरंबूर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चित्तरंजन लोकोमोटिव वर्क्स (CLW) पश्चिम बंगाल में स्थित है और यह भारतीय रेलवे का सबसे बड़ा लोकोमोटिव कारखाना है।"
    },
    {
        question: "'तेल और प्राकृतिक गैस निगम' (ONGC) की स्थापना कब हुई थी?",
        answers: shuffle([
            { text: "1948", correct: false },
            { text: "1956", correct: true },
            { text: "1964", correct: false },
            { text: "1974", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ONGC की स्थापना 1956 में भारत सरकार द्वारा कच्चे तेल और प्राकृतिक गैस के उत्पादन के लिए की गई थी।"
    },
    {
        question: "'रेशम उद्योग' के लिए प्रसिद्ध 'मुर्शिदाबाद' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "असम", correct: false },
            { text: "कर्नाटक", correct: false },
            { text: "जम्मू और कश्मीर", correct: false },
            { text: "पश्चिम बंगाल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुर्शिदाबाद, पश्चिम बंगाल में स्थित है और यह अपने रेशम उत्पादन और रेशमी साड़ियों के लिए प्रसिद्ध है।"
    },
    {
        question: "'सलेम इस्पात संयंत्र' किस प्रकार के इस्पात का उत्पादन करता है?",
        answers: shuffle([
            { text: "कार्बन इस्पात", correct: false },
            { text: "स्टेनलेस इस्पात", correct: true },
            { text: "मिश्र धातु इस्पात", correct: false },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सलेम इस्पात संयंत्र मुख्य रूप से स्टेनलेस इस्पात का उत्पादन करता है।"
    },
    {
        question: "'कागज उद्योग' का प्रमुख केंद्र कौन सा है?",
        answers: shuffle([
            { text: "बल्लारपुर", correct: false },
            { text: "नेपानगर", correct: false },
            { text: "टीटागढ़", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बल्लारपुर, नेपानगर और टीटागढ़ तीनों ही भारत में कागज उद्योग के प्रमुख केंद्र हैं।"
    },
    {
        question: "'भारत में सबसे अधिक जूट मिलें' किस राज्य में हैं?",
        answers: shuffle([
            { text: "बिहार", correct: false },
            { text: "असम", correct: false },
            { text: "ओडिशा", correct: false },
            { text: "पश्चिम बंगाल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पश्चिम बंगाल में हुगली नदी के किनारे जूट उत्पादक क्षेत्रों के करीब होने के कारण सबसे अधिक जूट मिलें हैं।"
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