const questions = [
    {
        topHeading: "भारत के खनिज संसाधन पर आधारित बहुविकल्पीय प्रश्न part 2  (quiz_no. 98)"
    },
    {
        question: "'हट्टी' की खानें किस खनिज के लिए प्रसिद्ध हैं?",
        answers: shuffle([
            { text: "तांबा", correct: false },
            { text: "लौह अयस्क", correct: false },
            { text: "सोना", correct: true },
            { text: "मैंगनीज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हट्टी, कर्नाटक में स्थित है, और यह भारत में सोने की एक प्रमुख खान है।"
    },
    {
        question: "'बैलाडीला' की खानें किस राज्य में स्थित हैं?",
        answers: shuffle([
            { text: "ओडिशा", correct: false },
            { text: "झारखंड", correct: false },
            { text: "छत्तीसगढ़", correct: true },
            { text: "कर्नाटक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैलाडीला छत्तीसगढ़ के दंतेवाड़ा जिले में स्थित है और यह भारत में उच्च गुणवत्ता वाले लौह अयस्क के उत्पादन के लिए प्रसिद्ध है।"
    },
    {
        question: "'जादूगोड़ा' की खानें किस राज्य में स्थित हैं?",
        answers: shuffle([
            { text: "बिहार", correct: false },
            { text: "झारखंड", correct: true },
            { text: "छत्तीसगढ़", correct: false },
            { text: "ओडिशा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जादूगोड़ा झारखंड के सिंहभूम जिले में स्थित है, जो भारत में यूरेनियम खनन के लिए जाना जाता है।"
    },
    {
        question: "भारत में 'टिन' का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        answers: shuffle([
            { text: "राजस्थान", correct: false },
            { text: "ओडिशा", correct: false },
            { text: "छत्तीसगढ़", correct: true },
            { text: "झारखंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> छत्तीसगढ़ भारत में टिन का एकमात्र उत्पादक राज्य है, जहां दंतेवाड़ा जिले में टिन के भंडार पाए जाते हैं।"
    },
    {
        question: "'कोयले' का सबसे अधिक उपयोग किस उद्योग में होता है?",
        answers: shuffle([
            { text: "लौह और इस्पात उद्योग", correct: false },
            { text: "सीमेंट उद्योग", correct: false },
            { text: "उर्वरक उद्योग", correct: false },
            { text: "थर्मल पावर प्लांट", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में उत्पादित अधिकांश कोयले का उपयोग थर्मल पावर प्लांट में बिजली उत्पादन के लिए किया जाता है।"
    },
    {
        question: "'नेवेली' की खानें किस राज्य में स्थित हैं?",
        answers: shuffle([
            { text: "आंध्र प्रदेश", correct: false },
            { text: "तमिलनाडु", correct: true },
            { text: "कर्नाटक", correct: false },
            { text: "केरल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नेवेली तमिलनाडु में स्थित है और यह भारत का सबसे बड़ा लिग्नाइट कोयला क्षेत्र है।"
    },
    {
        question: "'थोरियम' का सबसे बड़ा भंडार किस राज्य में है?",
        answers: shuffle([
            { text: "झारखंड", correct: false },
            { text: "केरल", correct: true },
            { text: "तमिलनाडु", correct: false },
            { text: "ओडिशा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केरल में थोरियम का सबसे बड़ा भंडार है, जो मोनोजाइट रेत में पाया जाता है, खासकर इसके तटीय क्षेत्रों में।"
    },
    {
        question: "'कोयले' की सबसे पुरानी खान कौन सी है?",
        answers: shuffle([
            { text: "झरिया", correct: false },
            { text: "रानीगंज", correct: true },
            { text: "बोकारो", correct: false },
            { text: "गिरिडीह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रानीगंज, पश्चिम बंगाल में स्थित है, और यह भारत की सबसे पुरानी कोयला खदान है।"
    },
    {
        question: "'महानदी' बेसिन किस खनिज के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "लौह अयस्क", correct: false },
            { text: "कोयला", correct: true },
            { text: "बॉक्साइट", correct: false },
            { text: "मैंगनीज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महानदी बेसिन (ओडिशा और छत्तीसगढ़ में) भारत के प्रमुख कोयला क्षेत्रों में से एक है।"
    },
    {
        question: "'कोडरमा' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "झारखंड", correct: true },
            { text: "छत्तीसगढ़", correct: false },
            { text: "बिहार", correct: false },
            { text: "ओडिशा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोडरमा, जिसे 'भारत की अभ्रक राजधानी' भी कहते हैं, झारखंड में स्थित है।"
    },
    {
        question: "'बॉक्साइट' किस धातु का अयस्क है?",
        answers: shuffle([
            { text: "लोहा", correct: false },
            { text: "तांबा", correct: false },
            { text: "एल्यूमीनियम", correct: true },
            { text: "जस्ता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बॉक्साइट एल्यूमीनियम का प्राथमिक अयस्क है।"
    },
    {
        question: "भारत में 'लौह अयस्क' के मुख्य प्रकार कौन से हैं?",
        answers: shuffle([
            { text: "एन्थ्रेसाइट और बिटुमिनस", correct: false },
            { text: "हेमेटाइट और मैग्नेटाइट", correct: true },
            { text: "लिग्नाइट और पीट", correct: false },
            { text: "बॉक्साइट और क्रोमाइट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में लौह अयस्क के दो मुख्य प्रकार हेमेटाइट और मैग्नेटाइट हैं, जो देश में सबसे अधिक पाए जाते हैं।"
    },
    {
        question: "'मैंगनीज' का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        answers: shuffle([
            { text: "ओडिशा", correct: false },
            { text: "मध्य प्रदेश", correct: true },
            { text: "कर्नाटक", correct: false },
            { text: "महाराष्ट्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य प्रदेश भारत में मैंगनीज का सबसे बड़ा उत्पादक है, जहां बालाघाट और छिंदवाड़ा जिले प्रमुख हैं।"
    },
    {
        question: "'राजस्थान' किस खनिज के उत्पादन में एकाधिकार रखता है?",
        answers: shuffle([
            { text: "अभ्रक", correct: false },
            { text: "जस्ता और सीसा", correct: true },
            { text: "तांबा", correct: false },
            { text: "यूरेनियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजस्थान भारत में जस्ता और सीसे का सबसे बड़ा उत्पादक है।"
    },
    {
        question: "'डिगबोई' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "गुजरात", correct: false },
            { text: "असम", correct: true },
            { text: "महाराष्ट्र", correct: false },
            { text: "आंध्र प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डिगबोई असम में स्थित है और यह भारत की सबसे पुरानी कार्यरत तेल रिफाइनरी है।"
    },
    {
        question: "'पेट्रोलियम' किस प्रकार की चट्टानों में पाया जाता है?",
        answers: shuffle([
            { text: "आग्नेय", correct: false },
            { text: "अवसादी", correct: true },
            { text: "कायांतरित", correct: false },
            { text: "इनमे से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेट्रोलियम और प्राकृतिक गैस कार्बनिक पदार्थों के अवसादी चट्टानों में दबे रहने और अत्यधिक दबाव व ताप के कारण बनते हैं।"
    },
    {
        question: "'अंकलेश्वर' किसके लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "लौह अयस्क", correct: false },
            { text: "तांबा", correct: false },
            { text: "पेट्रोलियम", correct: true },
            { text: "कोयला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंकलेश्वर, गुजरात में स्थित है, और यह भारत का एक महत्वपूर्ण तेल क्षेत्र है।"
    },
    {
        question: "भारत में 'हीरे' का भंडार कहाँ पाया जाता है?",
        answers: shuffle([
            { text: "कर्नाटक", correct: false },
            { text: "झारखंड", correct: false },
            { text: "मध्य प्रदेश", correct: true },
            { text: "ओडिशा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य प्रदेश का पन्ना जिला भारत में हीरे के उत्पादन के लिए प्रसिद्ध है।"
    },
    {
        question: "'मोनाजाईट रेत' में कौन सा खनिज पाया जाता है?",
        answers: shuffle([
            { text: "बॉक्साइट", correct: false },
            { text: "थोरियम", correct: true },
            { text: "यूरेनियम", correct: false },
            { text: "लिग्नाइट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोनाजाईट रेत में थोरियम पाया जाता है, जो केरल के तटीय क्षेत्रों में पाया जाता है।"
    },
    {
        question: "'बोकारो' कोयला क्षेत्र किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "ओडिशा", correct: false },
            { text: "पश्चिम बंगाल", correct: false },
            { text: "झारखंड", correct: true },
            { text: "छत्तीसगढ़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बोकारो, झारखंड में स्थित है, और यह भारत के प्रमुख कोयला क्षेत्रों में से एक है।"
    },
    {
        question: "'खनिज तेल' का सबसे बड़ा भंडार किस बेसिन में है?",
        answers: shuffle([
            { text: "कृष्णा-गोदावरी बेसिन", correct: false },
            { text: "कावेरी बेसिन", correct: false },
            { text: "मुंबई हाई", correct: true },
            { text: "असम-अराकान बेसिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुंबई हाई, भारत का सबसे बड़ा अपतटीय तेल क्षेत्र है, जहां क्रूड ऑयल का सबसे बड़ा भंडार है।"
    },
    {
        question: "'लौह अयस्क' के निर्यात के लिए सबसे महत्वपूर्ण बंदरगाह कौन सा है?",
        answers: shuffle([
            { text: "विशाखापत्तनम", correct: false },
            { text: "चेन्नई", correct: false },
            { text: "पारादीप", correct: true },
            { text: "मुंबई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारादीप बंदरगाह, ओडिशा में स्थित है, और यह मुख्य रूप से लौह अयस्क और कोयले के निर्यात के लिए एक महत्वपूर्ण बंदरगाह है।"
    },
    {
        question: "'लौह अयस्क' किस प्रकार का खनिज है?",
        answers: shuffle([
            { text: "धात्विक खनिज", correct: true },
            { text: "अधात्विक खनिज", correct: false },
            { text: "ऊर्जा खनिज", correct: false },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लौह अयस्क एक धात्विक खनिज है, जिसका उपयोग लौह और इस्पात उद्योग में होता है।"
    },
    {
        question: "'कोयले' की गुणवत्ता का आकलन किस आधार पर किया जाता है?",
        answers: shuffle([
            { text: "रंग के आधार पर", correct: false },
            { text: "कार्बन की मात्रा के आधार पर", correct: true },
            { text: "राख की मात्रा के आधार पर", correct: false },
            { text: "इन सभी के आधार पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोयले की गुणवत्ता का निर्धारण मुख्य रूप से उसमें मौजूद कार्बन की मात्रा से होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> एन्थ्रेसाइट में सर्वाधिक कार्बन होता है, जो इसे सबसे अच्छी गुणवत्ता का बनाता है।"
    },
    {
        question: "'बैलाडीला' की खानों से प्राप्त लौह अयस्क का निर्यात किस बंदरगाह से होता है?",
        answers: shuffle([
            { text: "कोलकाता", correct: false },
            { text: "विशाखापत्तनम", correct: true },
            { text: "हल्दिया", correct: false },
            { text: "मुंबई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैलाडीला की खानों से प्राप्त लौह अयस्क का निर्यात मुख्य रूप से विशाखापत्तनम बंदरगाह से होता है।"
    },
    {
        question: "भारत में 'लौह अयस्क' के कुल भंडार का लगभग 95% हिस्सा किन राज्यों में है?",
        answers: shuffle([
            { text: "झारखंड, ओडिशा, पश्चिम बंगाल", correct: false },
            { text: "ओडिशा, झारखंड, छत्तीसगढ़, कर्नाटक और गोवा", correct: true },
            { text: "राजस्थान, गुजरात, महाराष्ट्र", correct: false },
            { text: "मध्य प्रदेश, आंध्र प्रदेश, तमिलनाडु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में लौह अयस्क के विशाल भंडार मुख्य रूप से ओडिशा, झारखंड, छत्तीसगढ़, कर्नाटक और गोवा में केंद्रित हैं।"
    },
    {
        question: "'पन्ना' की खानें किस राज्य में स्थित हैं?",
        answers: shuffle([
            { text: "झारखंड", correct: false },
            { text: "छत्तीसगढ़", correct: false },
            { text: "मध्य प्रदेश", correct: true },
            { text: "ओडिशा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पन्ना, मध्य प्रदेश का एक जिला है जो हीरे की खदानों के लिए विश्व प्रसिद्ध है।"
    },
    {
        question: "'मैंगनीज' का सबसे अधिक उपयोग किस उद्योग में होता है?",
        answers: shuffle([
            { text: "लौह और इस्पात उद्योग", correct: true },
            { text: "उर्वरक उद्योग", correct: false },
            { text: "सीमेंट उद्योग", correct: false },
            { text: "विद्युत उद्योग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मैंगनीज का उपयोग मुख्य रूप से लौह और इस्पात उद्योग में फेरोमैंगनीज मिश्र धातु बनाने के लिए होता है, जो स्टील को कठोर और मजबूत बनाता है।"
    },
    {
        question: "भारत में 'यूरेनियम' के भंडार मुख्य रूप से किस राज्य में पाए जाते हैं?",
        answers: shuffle([
            { text: "केरल", correct: false },
            { text: "कर्नाटक", correct: false },
            { text: "झारखंड", correct: true },
            { text: "तमिलनाडु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> झारखंड का जादूगोड़ा क्षेत्र भारत में यूरेनियम खनन के लिए जाना जाता है।"
    },
    {
        question: "'चूना पत्थर' का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        answers: shuffle([
            { text: "राजस्थान", correct: false },
            { text: "मध्य प्रदेश", correct: true },
            { text: "कर्नाटक", correct: false },
            { text: "आंध्र प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य प्रदेश भारत में चूना पत्थर का सबसे बड़ा उत्पादक है, जिसका उपयोग सीमेंट उद्योग में बड़े पैमाने पर होता है।"
    },
    {
        question: "'खेतड़ी' की खानें किस राज्य में स्थित हैं?",
        answers: shuffle([
            { text: "राजस्थान", correct: true },
            { text: "मध्य प्रदेश", correct: false },
            { text: "झारखंड", correct: false },
            { text: "ओडिशा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खेतड़ी, राजस्थान के झुंझुनू जिले में स्थित है और यह भारत का एक महत्वपूर्ण तांबा खनन केंद्र है।"
    },
    {
        question: "'अंकलेश्वर' तेल क्षेत्र किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "असम", correct: false },
            { text: "महाराष्ट्र", correct: false },
            { text: "गुजरात", correct: true },
            { text: "राजस्थान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंकलेश्वर, गुजरात में स्थित है और यह भारत का एक महत्वपूर्ण तेल क्षेत्र है।"
    },
    {
        question: "'बेतूल' किस खनिज के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "कोयला", correct: false },
            { text: "तांबा", correct: true },
            { text: "मैंगनीज", correct: false },
            { text: "सोना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बेतूल, मध्य प्रदेश का एक जिला है जो तांबा उत्पादन के लिए जाना जाता है।"
    },
    {
        question: "'क्रूड ऑयल' के भंडार भारत में किस राज्य में सबसे अधिक हैं?",
        answers: shuffle([
            { text: "असम", correct: false },
            { text: "गुजरात", correct: false },
            { text: "राजस्थान", correct: false },
            { text: "महाराष्ट्र", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाराष्ट्र में मुंबई हाई भारत का सबसे बड़ा अपतटीय तेल क्षेत्र है, इसलिए महाराष्ट्र में कच्चे तेल के भंडार सबसे अधिक हैं।"
    },
    {
        question: "'भारत में क्रोमाइट का लगभग 95% उत्पादन' किस राज्य से होता है?",
        answers: shuffle([
            { text: "कर्नाटक", correct: false },
            { text: "ओडिशा", correct: true },
            { text: "झारखंड", correct: false },
            { text: "महाराष्ट्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओडिशा की सुकिंदा घाटी भारत में क्रोमाइट का सबसे बड़ा भंडार है और देश के कुल उत्पादन का लगभग 95% से अधिक हिस्सा प्रदान करती है।"
    },
    {
        question: "'लिग्नाइट' कोयले का उपयोग मुख्य रूप से किस उद्योग में होता है?",
        answers: shuffle([
            { text: "लौह और इस्पात उद्योग", correct: false },
            { text: "ताप विद्युत उत्पादन", correct: true },
            { text: "सीमेंट उद्योग", correct: false },
            { text: "उर्वरक उद्योग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिग्नाइट कोयले का उपयोग मुख्य रूप से तमिलनाडु के नेवेली में ताप विद्युत उत्पादन के लिए किया जाता है।"
    },
    {
        question: "'सोना' किस प्रकार की चट्टानों में पाया जाता है?",
        answers: shuffle([
            { text: "आग्नेय और कायांतरित चट्टानें", correct: true },
            { text: "अवसादी चट्टानें", correct: false },
            { text: "केवल आग्नेय चट्टानें", correct: false },
            { text: "केवल कायांतरित चट्टानें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोना आग्नेय और कायांतरित चट्टानों की शिराओं (veins) में पाया जाता है।"
    },
    {
        question: "'अभ्रक' का मुख्य उपयोग किस उद्योग में होता है?",
        answers: shuffle([
            { text: "लौह और इस्पात उद्योग", correct: false },
            { text: "विद्युत और इलेक्ट्रॉनिक उद्योग", correct: true },
            { text: "सीमेंट उद्योग", correct: false },
            { text: "उर्वरक उद्योग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अभ्रक विद्युत का कुचालक और ऊष्मा का सुचालक होता है, इसलिए इसका उपयोग विद्युत और इलेक्ट्रॉनिक उपकरणों में बड़े पैमाने पर होता है।"
    },
    {
        question: "'सीसा' का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        answers: shuffle([
            { text: "राजस्थान", correct: true },
            { text: "ओडिशा", correct: false },
            { text: "झारखंड", correct: false },
            { text: "मध्य प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजस्थान भारत में सीसे और जस्ते दोनों का सबसे बड़ा उत्पादक है, जहां जावर और रामपुरा-अगुचा की खानें प्रसिद्ध हैं।"
    },
    {
        question: "'पेट्रोलियम' किस प्रकार का खनिज है?",
        answers: shuffle([
            { text: "धात्विक खनिज", correct: false },
            { text: "अधात्विक खनिज", correct: false },
            { text: "ऊर्जा खनिज", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेट्रोलियम एक ऊर्जा खनिज है, क्योंकि इसका उपयोग ऊर्जा स्रोत (ईंधन) के रूप में किया जाता है।"
    },
    {
        question: "'झरिया' की खानें किस राज्य में स्थित हैं?",
        answers: shuffle([
            { text: "ओडिशा", correct: false },
            { text: "पश्चिम बंगाल", correct: false },
            { text: "झारखंड", correct: true },
            { text: "छत्तीसगढ़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> झरिया, झारखंड के धनबाद जिले में स्थित है और यह भारत का सबसे बड़ा कोयला क्षेत्र है।"
    },
    {
        question: "'भारत में टिन का एकमात्र उत्पादक राज्य' कौन सा है?",
        answers: shuffle([
            { text: "छत्तीसगढ़", correct: true },
            { text: "झारखंड", correct: false },
            { text: "ओडिशा", correct: false },
            { text: "मध्य प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> छत्तीसगढ़ भारत में टिन का एकमात्र उत्पादक राज्य है, जहां दंतेवाड़ा जिले में टिन के भंडार पाए जाते हैं।"
    },
    {
        question: "'डिगबोई' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "गुजरात", correct: false },
            { text: "असम", correct: true },
            { text: "महाराष्ट्र", correct: false },
            { text: "त्रिपुरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डिगबोई, असम में स्थित है और यह भारत की सबसे पुरानी कार्यरत तेल रिफाइनरी है।"
    },
    {
        question: "'ग्रेनाइट' किस प्रकार की चट्टान है?",
        answers: shuffle([
            { text: "अवसादी चट्टान", correct: false },
            { text: "आग्नेय चट्टान", correct: true },
            { text: "कायांतरित चट्टान", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेनाइट एक आग्नेय चट्टान है, जो मैग्मा के ठंडा होने और जमने से बनती है।"
    },
    {
        question: "'खनिज तेल' के भंडार किस प्रकार की चट्टानों में पाए जाते हैं?",
        answers: shuffle([
            { text: "आग्नेय", correct: false },
            { text: "अवसादी", correct: true },
            { text: "कायांतरित", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेट्रोलियम और प्राकृतिक गैस कार्बनिक पदार्थों के अवसादी चट्टानों में दबे रहने और अत्यधिक दबाव व ताप के कारण बनते हैं।"
    },
    {
        question: "'लौह अयस्क' के निर्यात के लिए सबसे महत्वपूर्ण बंदरगाह कौन सा है?",
        answers: shuffle([
            { text: "कोलकाता", correct: false },
            { text: "विशाखापत्तनम", correct: false },
            { text: "पारादीप", correct: true },
            { text: "मुंबई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारादीप बंदरगाह, ओडिशा में स्थित है और यह मुख्य रूप से लौह अयस्क और कोयले के निर्यात के लिए एक महत्वपूर्ण बंदरगाह है।"
    },
    {
        question: "'तांबा' का उपयोग मुख्य रूप से किस उद्योग में होता है?",
        answers: shuffle([
            { text: "इलेक्ट्रॉनिक और विद्युत उद्योग", correct: true },
            { text: "लौह और इस्पात उद्योग", correct: false },
            { text: "सीमेंट उद्योग", correct: false },
            { text: "उर्वरक उद्योग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तांबा एक उत्कृष्ट विद्युत सुचालक है, इसलिए इसका उपयोग विद्युत तारों, उपकरणों और इलेक्ट्रॉनिक सर्किट में बड़े पैमाने पर होता है।"
    },
    {
        question: "'थोरियम' किस खनिज से प्राप्त होता है?",
        answers: shuffle([
            { text: "बॉक्साइट", correct: false },
            { text: "यूरेनियम", correct: false },
            { text: "मोनोजाइट", correct: true },
            { text: "लिग्नाइट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थोरियम, मोनोजाइट रेत से प्राप्त होता है, जो केरल के तटीय क्षेत्रों में पाया जाता है।"
    },
    {
        question: "'कोलार' की खानें किस राज्य में स्थित हैं?",
        answers: shuffle([
            { text: "कर्नाटक", correct: true },
            { text: "आंध्र प्रदेश", correct: false },
            { text: "झारखंड", correct: false },
            { text: "तमिलनाडु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोलार, कर्नाटक में स्थित है और यह भारत की सबसे महत्वपूर्ण सोने की खानों में से एक है।"
    },
    {
        question: "'भारत में कोयले का सबसे बड़ा भंडार' किस घाटी में है?",
        answers: shuffle([
            { text: "दामोदर घाटी", correct: true },
            { text: "महानदी घाटी", correct: false },
            { text: "गोदावरी घाटी", correct: false },
            { text: "नर्मदा घाटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दामोदर घाटी, जो झारखंड और पश्चिम बंगाल में फैली हुई है, भारत में कोयले का सबसे बड़ा भंडार रखती है।"
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