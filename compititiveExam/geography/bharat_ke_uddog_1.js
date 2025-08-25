const questions = [
    {
        topHeading: "भारत के उद्योग पर आधारित बहुविकल्पीय प्रश्न part 1  (quiz_no. 99)."
    },
    {
        question: "भारत में पहला लौह और इस्पात उद्योग संयंत्र कहाँ स्थापित किया गया था?",
        answers: shuffle([
            { text: "दुर्गापुर", correct: false },
            { text: "राउरकेला", correct: false },
            { text: "जमशेदपुर", correct: true },
            { text: "भिलाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में पहला लौह और इस्पात उद्योग संयंत्र, टाटा आयरन एंड स्टील कंपनी (TISCO), की स्थापना जमशेदपुर (झारखंड) में 1907 में हुई थी।"
    },
    {
        question: "भारत में 'सूती वस्त्र उद्योग' की पहली मिल कहाँ स्थापित हुई थी?",
        answers: shuffle([
            { text: "मुंबई", correct: false },
            { text: "कोलकाता", correct: true },
            { text: "अहमदाबाद", correct: false },
            { text: "कानपुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में पहला आधुनिक सूती वस्त्र मिल 1818 में कोलकाता के पास फोर्ट ग्लॉस्टर में स्थापित किया गया था, हालांकि यह सफल नहीं रहा।"
    },
    {
        question: "'भारत का मैनचेस्टर' किसे कहा जाता है?",
        answers: shuffle([
            { text: "कानपुर", correct: false },
            { text: "मुंबई", correct: false },
            { text: "अहमदाबाद", correct: true },
            { text: "कोयंबटूर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अहमदाबाद, गुजरात में सूती वस्त्र उद्योग का एक प्रमुख केंद्र है, इसलिए इसे 'भारत का मैनचेस्टर' कहा जाता है।"
    },
    {
        question: "'भिलाई इस्पात संयंत्र' किस देश के सहयोग से स्थापित किया गया था?",
        answers: shuffle([
            { text: "जर्मनी", correct: false },
            { text: "सोवियत संघ (रूस)", correct: true },
            { text: "ब्रिटेन", correct: false },
            { text: "अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भिलाई इस्पात संयंत्र (छत्तीसगढ़) की स्थापना द्वितीय पंचवर्षीय योजना के दौरान सोवियत संघ (तत्कालीन रूस) के सहयोग से हुई थी।"
    },
    {
        question: "'राउरकेला इस्पात संयंत्र' किस देश के सहयोग से स्थापित किया गया था?",
        answers: shuffle([
            { text: "सोवियत संघ (रूस)", correct: false },
            { text: "ब्रिटेन", correct: false },
            { text: "जर्मनी", correct: true },
            { text: "जापान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राउरकेला इस्पात संयंत्र (ओडिशा) की स्थापना जर्मनी के सहयोग से हुई थी।"
    },
    {
        question: "भारत का सबसे बड़ा 'सार्वजनिक क्षेत्र का लौह और इस्पात संयंत्र' कौन सा है?",
        answers: shuffle([
            { text: "भिलाई इस्पात संयंत्र", correct: true },
            { text: "बोकारो इस्पात संयंत्र", correct: false },
            { text: "दुर्गापुर इस्पात संयंत्र", correct: false },
            { text: "राउरकेला इस्पात संयंत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भिलाई इस्पात संयंत्र भारत में स्टील अथॉरिटी ऑफ इंडिया लिमिटेड (SAIL) के तहत सबसे बड़ा सार्वजनिक क्षेत्र का इस्पात संयंत्र है।"
    },
    {
        question: "'भारत का डेट्रॉइट' किसे कहा जाता है?",
        answers: shuffle([
            { text: "पुणे", correct: false },
            { text: "चेन्नई", correct: true },
            { text: "गुरुग्राम", correct: false },
            { text: "जमशेदपुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चेन्नई, तमिलनाडु में एक प्रमुख ऑटोमोबाइल विनिर्माण केंद्र है, इसलिए इसे 'भारत का डेट्रॉइट' (अमेरिका के डेट्रॉइट शहर के नाम पर) कहा जाता है।"
    },
    {
        question: "भारत में 'पेट्रोलियम रिफाइनरी' की सबसे पुरानी इकाई कहाँ स्थित है?",
        answers: shuffle([
            { text: "मुंबई", correct: false },
            { text: "डिगबोई", correct: true },
            { text: "मथुरा", correct: false },
            { text: "हल्दिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डिगबोई (असम) में भारत की सबसे पुरानी और पहली पेट्रोलियम रिफाइनरी 1901 में स्थापित की गई थी।"
    },
    {
        question: "भारत में 'पहली चीनी मिल' कहाँ स्थापित हुई थी?",
        answers: shuffle([
            { text: "उत्तर प्रदेश", correct: false },
            { text: "बिहार", correct: true },
            { text: "महाराष्ट्र", correct: false },
            { text: "पंजाब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में आधुनिक चीनी उद्योग की शुरुआत 1903 में बिहार के मढ़ौरा में स्थापित पहली चीनी मिल से हुई थी।"
    },
    {
        question: "भारत में 'लौह और इस्पात उद्योग' के लिए कच्चा माल क्या है?",
        answers: shuffle([
            { text: "लौह अयस्क और कोयला", correct: false },
            { text: "मैंगनीज और चूना पत्थर", correct: false },
            { text: "बॉक्साइट", correct: false },
            { text: "A और B दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लौह और इस्पात उद्योग के लिए मुख्य कच्चे माल लौह अयस्क, कोयला, मैंगनीज, चूना पत्थर और डोलोमाइट हैं।"
    },
    {
        question: "'एल्यूमीनियम उद्योग' के लिए प्रमुख कच्चा माल क्या है?",
        answers: shuffle([
            { text: "हेमेटाइट", correct: false },
            { text: "बॉक्साइट", correct: true },
            { text: "मैंगनीज", correct: false },
            { text: "चूना पत्थर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एल्यूमीनियम बॉक्साइट अयस्क से प्राप्त किया जाता है, इसलिए बॉक्साइट इस उद्योग का प्रमुख कच्चा माल है।"
    },
    {
        question: "भारत में 'सबसे बड़ा उर्वरक संयंत्र' कहाँ स्थित है?",
        answers: shuffle([
            { text: "सिंदरी", correct: false },
            { text: "कानपुर", correct: false },
            { text: "गोरखपुर", correct: true },
            { text: "हल्दिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोरखपुर (उत्तर प्रदेश) में स्थित हिंदुस्तान उर्वरक और रसायन लिमिटेड (HURL) भारत का सबसे बड़ा उर्वरक संयंत्र है।"
    },
    {
        question: "'सलेम इस्पात संयंत्र' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "आंध्र प्रदेश", correct: false },
            { text: "कर्नाटक", correct: false },
            { text: "तमिलनाडु", correct: true },
            { text: "केरल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सलेम इस्पात संयंत्र तमिलनाडु में स्थित है और यह एक महत्वपूर्ण इस्पात संयंत्र है।"
    },
    {
        question: "'नेपानगर' किस उद्योग के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "चीनी उद्योग", correct: false },
            { text: "सीमेंट उद्योग", correct: false },
            { text: "अखबारी कागज उद्योग", correct: true },
            { text: "लौह और इस्पात उद्योग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नेपानगर (मध्य प्रदेश) अखबारी कागज के उत्पादन के लिए प्रसिद्ध है और यहां नेशनल न्यूजप्रिंट एंड पेपर मिल्स (NEPA) स्थित है।"
    },
    {
        question: "'सीमेंट उद्योग' के लिए प्रमुख कच्चा माल क्या है?",
        answers: shuffle([
            { text: "चूना पत्थर", correct: false },
            { text: "कोयला", correct: false },
            { text: "जिप्सम", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सीमेंट उद्योग में चूना पत्थर, कोयला और जिप्सम तीनों का उपयोग होता है, हालांकि चूना पत्थर सबसे महत्वपूर्ण कच्चा माल है।"
    },
    {
        question: "भारत में 'जहाज निर्माण उद्योग' का सबसे बड़ा केंद्र कहाँ है?",
        answers: shuffle([
            { text: "कोच्चि", correct: true },
            { text: "विशाखापत्तनम", correct: false },
            { text: "मुंबई", correct: false },
            { text: "हल्दिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोचीन शिपयार्ड लिमिटेड (केरल) भारत का सबसे बड़ा जहाज निर्माण और मरम्मत केंद्र है।"
    },
    {
        question: "भारत का पहला 'भारी इंजीनियरिंग उद्योग' कहाँ स्थापित किया गया था?",
        answers: shuffle([
            { text: "मुंबई", correct: false },
            { text: "कोलकाता", correct: false },
            { text: "रांची", correct: true },
            { text: "बेंगलुरु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हैवी इंजीनियरिंग कॉर्पोरेशन (HEC) की स्थापना 1958 में रांची (झारखंड) में की गई थी, जो भारत का पहला भारी इंजीनियरिंग उद्योग था।"
    },
    {
        question: "'मुंबई को सूती वस्त्र उद्योग की राजधानी' क्यों कहा जाता है?",
        answers: shuffle([
            { text: "यहाँ सबसे अधिक सूती मिलें हैं।", correct: false },
            { text: "यह एक बंदरगाह शहर है।", correct: false },
            { text: "यह कच्चे माल के उत्पादन के करीब है।", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुंबई एक बंदरगाह शहर है, जो आयात-निर्यात में मदद करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कपास उत्पादक क्षेत्रों के करीब है और यहाँ आर्द्र जलवायु भी है, जो सूती धागे को टूटने से रोकती है।"
    },
    {
        question: "'नाल्को' (NALCO) किस उद्योग से संबंधित है?",
        answers: shuffle([
            { text: "लौह और इस्पात", correct: false },
            { text: "एल्यूमीनियम", correct: true },
            { text: "तांबा", correct: false },
            { text: "सीमेंट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नाल्को (नेशनल एल्यूमीनियम कंपनी लिमिटेड) एक सार्वजनिक क्षेत्र का उपक्रम है जो एल्यूमीनियम के उत्पादन से संबंधित है।"
    },
    {
        question: "'भारत में कोयले की सबसे अधिक खपत' किस क्षेत्र में होती है?",
        answers: shuffle([
            { text: "रेलवे", correct: false },
            { text: "घरेलू", correct: false },
            { text: "लौह और इस्पात उद्योग", correct: false },
            { text: "विद्युत उत्पादन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में उत्पादित अधिकांश कोयले का उपयोग ताप विद्युत संयंत्रों में बिजली उत्पादन के लिए किया जाता है।"
    },
    {
        question: "'मथुरा' रिफाइनरी किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "हरियाणा", correct: false },
            { text: "उत्तर प्रदेश", correct: true },
            { text: "पंजाब", correct: false },
            { text: "मध्य प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मथुरा पेट्रोलियम रिफाइनरी उत्तर प्रदेश में स्थित है, जो देश के महत्वपूर्ण रिफाइनरियों में से एक है।"
    },
    {
        question: "'सीमेंट उद्योग' का पहला सफल संयंत्र कहाँ स्थापित किया गया था?",
        answers: shuffle([
            { text: "चेन्नई", correct: true },
            { text: "पोर्टलैंड", correct: false },
            { text: "सिंदरी", correct: false },
            { text: "मुंबई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में पहला सफल सीमेंट संयंत्र 1904 में चेन्नई में स्थापित किया गया था।"
    },
    {
        question: "'भारत में चीनी उद्योग' का सबसे बड़ा केंद्र किस राज्य में है?",
        answers: shuffle([
            { text: "महाराष्ट्र", correct: false },
            { text: "उत्तर प्रदेश", correct: true },
            { text: "बिहार", correct: false },
            { text: "कर्नाटक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर प्रदेश भारत में गन्ने और चीनी का सबसे बड़ा उत्पादक है, इसलिए यह चीनी उद्योग का सबसे बड़ा केंद्र है।"
    },
    {
        question: "'भिलाई' शहर किस उद्योग के लिए जाना जाता है?",
        answers: shuffle([
            { text: "सीमेंट", correct: false },
            { text: "एल्यूमीनियम", correct: false },
            { text: "लौह और इस्पात", correct: true },
            { text: "कागज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भिलाई, छत्तीसगढ़ में स्थित है और यह भारत के प्रमुख लौह और इस्पात संयंत्रों में से एक है।"
    },
    {
        question: "'कोलकाता को जूट उद्योग की राजधानी' क्यों कहा जाता है?",
        answers: shuffle([
            { text: "यहाँ जूट मिलों की संख्या सबसे अधिक है।", correct: false },
            { text: "यह जूट उत्पादक क्षेत्रों के करीब है।", correct: false },
            { text: "यहाँ से जूट उत्पादों का निर्यात होता है।", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोलकाता हुगली नदी के किनारे स्थित है, जो जूट उत्पादक क्षेत्रों के करीब है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बंदरगाह की सुविधा भी प्रदान करता है और यहाँ जूट मिलों की संख्या भी सबसे अधिक है।"
    },
    {
        question: "भारत में 'सबसे बड़ा सूती वस्त्र उत्पादक राज्य' कौन सा है?",
        answers: shuffle([
            { text: "गुजरात", correct: true },
            { text: "महाराष्ट्र", correct: false },
            { text: "तमिलनाडु", correct: false },
            { text: "उत्तर प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुजरात भारत का सबसे बड़ा सूती वस्त्र उत्पादक राज्य है।"
    },
    {
        question: "'दुर्गापुर इस्पात संयंत्र' किस देश के सहयोग से स्थापित किया गया था?",
        answers: shuffle([
            { text: "ब्रिटेन", correct: true },
            { text: "सोवियत संघ (रूस)", correct: false },
            { text: "अमेरिका", correct: false },
            { text: "जापान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दुर्गापुर इस्पात संयंत्र (पश्चिम बंगाल) की स्थापना द्वितीय पंचवर्षीय योजना के दौरान ब्रिटेन के सहयोग से हुई थी।"
    },
    {
        question: "भारत में 'पेट्रोरसायन उद्योग' का सबसे बड़ा केंद्र कहाँ है?",
        answers: shuffle([
            { text: "मुंबई", correct: false },
            { text: "जामनगर", correct: true },
            { text: "विशाखापत्तनम", correct: false },
            { text: "हल्दिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जामनगर (गुजरात) में रिलायंस इंडस्ट्रीज की रिफाइनरी विश्व की सबसे बड़ी तेल रिफाइनरियों में से एक है, इसलिए यह पेट्रोरसायन उद्योग का एक प्रमुख केंद्र है।"
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
        question: "'भारत का सिलिकॉन वैली' किसे कहा जाता है?",
        answers: shuffle([
            { text: "मुंबई", correct: false },
            { text: "हैदराबाद", correct: false },
            { text: "बेंगलुरु", correct: true },
            { text: "चेन्नई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बेंगलुरु सूचना प्रौद्योगिकी (IT) और इलेक्ट्रॉनिक उद्योग का एक प्रमुख केंद्र है, इसलिए इसे 'भारत का सिलिकॉन वैली' कहा जाता है।"
    },
    {
        question: "'कानपुर' किस उद्योग के लिए जाना जाता है?",
        answers: shuffle([
            { text: "सूती वस्त्र", correct: false },
            { text: "जूट", correct: false },
            { text: "चमड़ा", correct: true },
            { text: "रेशम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कानपुर, जिसे 'उत्तर भारत का मैनचेस्टर' भी कहा जाता है, अपने चमड़ा उद्योग के लिए प्रसिद्ध है।"
    },
    {
        question: "'कागज उद्योग' के लिए प्रमुख कच्चा माल क्या है?",
        answers: shuffle([
            { text: "गन्ना", correct: false },
            { text: "बांस और घास", correct: true },
            { text: "कपास", correct: false },
            { text: "जूट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कागज उद्योग में मुख्य रूप से बांस, घास और लकड़ी के गूदे (pulp) का उपयोग होता है।"
    },
    {
        question: "'भिलाई' इस्पात संयंत्र किस पंचवर्षीय योजना के दौरान स्थापित हुआ था?",
        answers: shuffle([
            { text: "पहली", correct: false },
            { text: "दूसरी", correct: true },
            { text: "तीसरी", correct: false },
            { text: "चौथी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भिलाई, राउरकेला और दुर्गापुर इस्पात संयंत्रों की स्थापना द्वितीय पंचवर्षीय योजना (1956-61) के दौरान की गई थी।"
    },
    {
        question: "भारत में 'लौह और इस्पात उद्योग' का सबसे पुराना निजी क्षेत्र का संयंत्र कौन सा है?",
        answers: shuffle([
            { text: "TISCO (टिस्को)", correct: true },
            { text: "SAIL (सेल)", correct: false },
            { text: "VSP (विजाग स्टील)", correct: false },
            { text: "RINL (आरआईएनएल)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टाटा आयरन एंड स्टील कंपनी (TISCO) भारत का सबसे पुराना निजी क्षेत्र का लौह और इस्पात संयंत्र है, जिसकी स्थापना 1907 में हुई थी।"
    },
    {
        question: "'अलुवाये' किस उद्योग के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "लौह और इस्पात", correct: false },
            { text: "एल्यूमीनियम", correct: true },
            { text: "चीनी", correct: false },
            { text: "रेशम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अलुवाये, केरल में स्थित है, और यह भारत में एल्यूमीनियम उद्योग का एक प्रमुख केंद्र है।"
    },
    {
        question: "'लुधियाना' किस उद्योग के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "सूती वस्त्र", correct: false },
            { text: "रेशम", correct: false },
            { text: "ऊनी वस्त्र", correct: true },
            { text: "जूट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लुधियाना (पंजाब) भारत का एक महत्वपूर्ण ऊनी वस्त्र उद्योग केंद्र है, जिसे 'भारत का ऊनी शहर' भी कहा जाता है।"
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
        question: "'हिंदुस्तान मशीन टूल्स' (HMT) का मुख्यालय कहाँ है?",
        answers: shuffle([
            { text: "दिल्ली", correct: false },
            { text: "मुंबई", correct: false },
            { text: "बेंगलुरु", correct: true },
            { text: "चेन्नई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंदुस्तान मशीन टूल्स (HMT), जो मशीनरी और घड़ियों के उत्पादन के लिए जाना जाता है, का मुख्यालय बेंगलुरु में स्थित है।"
    },
    {
        question: "'कोयंबटूर' किस उद्योग के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "जूट उद्योग", correct: false },
            { text: "रेशम उद्योग", correct: false },
            { text: "सूती वस्त्र उद्योग", correct: true },
            { text: "ऊनी वस्त्र उद्योग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोयंबटूर, तमिलनाडु में स्थित है, और यह सूती वस्त्र उद्योग का एक प्रमुख केंद्र है, जिसे 'दक्षिण भारत का मैनचेस्टर' भी कहा जाता है।"
    },
    {
        question: "भारत का सबसे बड़ा 'सार्वजनिक क्षेत्र का उपक्रम' कौन सा है?",
        answers: shuffle([
            { text: "BHEL", correct: false },
            { text: "ONGC", correct: true },
            { text: "IOCL", correct: false },
            { text: "SAIL", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ONGC (तेल और प्राकृतिक गैस निगम) भारत का सबसे बड़ा सार्वजनिक क्षेत्र का उपक्रम है।"
    },
    {
        question: "'हल्दीया' किस उद्योग के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "लौह और इस्पात", correct: false },
            { text: "पेट्रोलियम रिफाइनरी", correct: true },
            { text: "जूट उद्योग", correct: false },
            { text: "कागज उद्योग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हल्दिया, पश्चिम बंगाल में स्थित है, और यह एक प्रमुख पेट्रोलियम रिफाइनरी केंद्र है।"
    },
    {
        question: "'इलेक्ट्रॉनिक उद्योग' का एक महत्वपूर्ण केंद्र कहाँ है?",
        answers: shuffle([
            { text: "चेन्नई", correct: false },
            { text: "मुंबई", correct: false },
            { text: "बेंगलुरु", correct: true },
            { text: "पुणे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बेंगलुरु भारत में इलेक्ट्रॉनिक और सूचना प्रौद्योगिकी (IT) उद्योग का सबसे बड़ा केंद्र है।"
    },
    {
        question: "'मूरी' किस उद्योग के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "सीमेंट", correct: false },
            { text: "एल्यूमीनियम", correct: true },
            { text: "लौह और इस्पात", correct: false },
            { text: "उर्वरक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मूरी (झारखंड) में स्थित हिंडाल्को इंडस्ट्रीज का एक प्रमुख एल्यूमीनियम संयंत्र है।"
    },
    {
        question: "'सलेम इस्पात संयंत्र' की स्थापना कब हुई थी?",
        answers: shuffle([
            { text: "1959", correct: false },
            { text: "1969", correct: false },
            { text: "1974", correct: false },
            { text: "1982", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सलेम इस्पात संयंत्र (तमिलनाडु) की स्थापना 1982 में हुई थी।"
    },
    {
        question: "भारत में 'पहला जूट मिल' कहाँ स्थापित हुआ था?",
        answers: shuffle([
            { text: "श्रीरामपुर", correct: false },
            { text: "रिसड़ा", correct: true },
            { text: "भटपारा", correct: false },
            { text: "टीटागढ़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में पहला जूट मिल 1855 में रिसड़ा, पश्चिम बंगाल में स्थापित किया गया था।"
    },
    {
        question: "'सिंदरी' किस उद्योग के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "सीमेंट", correct: false },
            { text: "उर्वरक", correct: true },
            { text: "सूती वस्त्र", correct: false },
            { text: "लौह और इस्पात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंदरी (झारखंड) में स्थित फर्टिलाइजर कॉर्पोरेशन ऑफ इंडिया का पहला उर्वरक कारखाना है।"
    },
    {
        question: "'विशाखापत्तनम' किस उद्योग के लिए जाना जाता है?",
        answers: shuffle([
            { text: "कागज उद्योग", correct: false },
            { text: "पेट्रोलियम रिफाइनरी और जहाज निर्माण", correct: true },
            { text: "सीमेंट उद्योग", correct: false },
            { text: "सूती वस्त्र उद्योग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विशाखापत्तनम (आंध्र प्रदेश) में एक प्रमुख पेट्रोलियम रिफाइनरी और हिंदुस्तान शिपयार्ड लिमिटेड स्थित है।"
    },
    {
        question: "भारत में 'सबसे बड़ा सूती वस्त्र उत्पादक राज्य' कौन सा है?",
        answers: shuffle([
            { text: "गुजरात", correct: true },
            { text: "महाराष्ट्र", correct: false },
            { text: "तमिलनाडु", correct: false },
            { text: "उत्तर प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुजरात भारत का सबसे बड़ा सूती वस्त्र उत्पादक राज्य है।"
    },
    {
        question: "'बोकारो इस्पात संयंत्र' की स्थापना कब हुई थी?",
        answers: shuffle([
            { text: "1959", correct: false },
            { text: "1964", correct: true },
            { text: "1969", correct: false },
            { text: "1972", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बोकारो इस्पात संयंत्र (झारखंड) की स्थापना 1964 में सोवियत संघ के सहयोग से हुई थी।"
    },
    {
        question: "'इलेक्ट्रॉनिक उद्योग' के विकास के लिए 'SEZ' (Special Economic Zone) कहाँ स्थापित किए गए हैं?",
        answers: shuffle([
            { text: "चेन्नई", correct: false },
            { text: "गुरुग्राम", correct: false },
            { text: "नोएडा", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इलेक्ट्रॉनिक उद्योग के विकास के लिए चेन्नई, गुरुग्राम और नोएडा जैसे शहरों में विशेष आर्थिक क्षेत्र (SEZ) स्थापित किए गए हैं।"
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