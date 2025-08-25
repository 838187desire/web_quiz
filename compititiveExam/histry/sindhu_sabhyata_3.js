const questions = [
    {
        topHeading: "सिंधु सभ्यता पर आधारित बहुविकल्पीय प्रश्न part 3 (quiz_no.13)"
    },
    {
        question: "सिंधु सभ्यता में 'घोड़े' के अस्तित्व के साक्ष्य किस स्थल से मिले हैं, जो कि एक विवादास्पद मुद्दा है?",
        answers: [
            { text: "लोथल", correct: false },
            { text: "कालीबंगा", correct: false },
            { text: "सुरकोटदा", correct: true },
            { text: "बनावली", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुजरात के सुरकोटदा नामक स्थल से घोड़े की हड्डियां मिली हैं, लेकिन इसके बावजूद सिंधु सभ्यता में घोड़े के व्यापक उपयोग को लेकर इतिहासकारों में मतभेद है।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल से 'शंख का बना एक पैमाना' मिला है?",
        answers: [
            { text: "मोहनजोदड़ो", correct: false },
            { text: "लोथल", correct: true },
            { text: "कालीबंगा", correct: false },
            { text: "धौलावीरा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोथल से शंख से बना एक पैमाना मिला है, जो दर्शाता है कि सिंधुवासी मापन कला में कुशल थे।"
    },
    {
        question: "सिंधु सभ्यता के लोग 'सोना' कहाँ से प्राप्त करते थे?",
        answers: [
            { text: "राजस्थान", correct: false },
            { text: "कर्नाटक", correct: true },
            { text: "गुजरात", correct: false },
            { text: "अफगानिस्तान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता के लोग संभवतः दक्षिण भारत में स्थित कोलार की खानों (कर्नाटक) से सोने का आयात करते थे।"
    },
    {
        question: "सिंधु सभ्यता के लोगों ने 'पहिए' का उपयोग किस लिए किया?",
        answers: [
            { text: "केवल बैलगाड़ी के लिए", correct: false },
            { text: "मिट्टी के बर्तन बनाने के लिए", correct: false },
            { text: "परिवहन और मिट्टी के बर्तन बनाने दोनों के लिए", correct: true },
            { text: "धार्मिक अनुष्ठान के लिए", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता के स्थलों से बैलगाड़ियों के खिलौने और चाक पर बने मिट्टी के बर्तन मिले हैं, जो यह दर्शाते हैं कि लोग पहिए का उपयोग परिवहन और शिल्पकला दोनों के लिए करते थे।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल से एक 'ईंट पर बिल्ली का पीछा करते हुए कुत्ते के पैरों के निशान' मिले हैं?",
        answers: [
            { text: "हड़प्पा", correct: false },
            { text: "मोहनजोदड़ो", correct: false },
            { text: "चन्हुदड़ो", correct: true },
            { text: "कालीबंगा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चन्हुदड़ो एकमात्र ऐसा शहर था जो दुर्ग रहित था और यहाँ से बिल्ली का पीछा करते हुए कुत्ते के पैरों के निशान वाली एक ईंट मिली है।"
    },
    {
        question: "सिंधु घाटी सभ्यता में किस स्थल को 'लघु हड़प्पा' और 'लघु मोहनजोदड़ो' के नाम से भी जाना जाता है?",
        answers: [
            { text: "कालीबंगा", correct: false },
            { text: "लोथल", correct: true },
            { text: "रोपड़", correct: false },
            { text: "धौलावीरा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोथल को उसके छोटे आकार और हड़प्पा व मोहनजोदड़ो जैसी शहरी विशेषताओं के कारण 'लघु हड़प्पा' और 'लघु मोहनजोदड़ो' कहा जाता है।"
    },
    {
        question: "हड़प्पा सभ्यता के लोग किस फसल को सबसे पहले उगाते थे?",
        answers: [
            { text: "गेहूँ", correct: false },
            { text: "जौ", correct: false },
            { text: "कपास", correct: true },
            { text: "चावल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता के लोग कपास का उत्पादन करने वाले दुनिया के पहले लोग थे।<br><br><i class='fa-solid fa-angles-right icon'></i> यूनानी लोग इसे 'सिंडन' कहते थे, जो 'सिंध' शब्द से निकला है।"
    },
    {
        question: "सिंधु सभ्यता में 'शव को दफनाने' का एक नया तरीका कहाँ से मिला है जिसमें अंडाकार कब्रें हैं?",
        answers: [
            { text: "हड़प्पा", correct: false },
            { text: "मोहनजोदड़ो", correct: false },
            { text: "लोथल", correct: false },
            { text: "सुरकोटदा", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुरकोटदा से अंडाकार कब्रें मिली हैं, जो सिंधु सभ्यता के अन्य स्थलों में सामान्य नहीं थीं।"
    },
    {
        question: "सिंधु सभ्यता के लोगों का धार्मिक विश्वास किस पर आधारित था?",
        answers: [
            { text: "पुनर्जन्म", correct: false },
            { text: "प्रकृति पूजा", correct: true },
            { text: "मंदिर पूजा", correct: false },
            { text: "अवतारवाद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता में मंदिरों के साक्ष्य नहीं मिले हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> लोग मातृदेवी, पशुपति और पीपल जैसे वृक्षों की पूजा करते थे, जो प्रकृति पूजा का प्रमाण है।"
    },
    {
        question: "सिंधु घाटी सभ्यता के किस स्थल से 'अग्नि वेदिका' (Fire Altar) के साक्ष्य मिले हैं?",
        answers: [
            { text: "मोहनजोदड़ो", correct: false },
            { text: "लोथल और कालीबंगा", correct: true },
            { text: "हड़प्पा", correct: false },
            { text: "चन्हुदड़ो", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोथल और कालीबंगा से कई आयताकार और वृत्ताकार अग्नि वेदिकाएँ मिली हैं, जो अनुष्ठानों के लिए उपयोग की जाती थीं।"
    },
    {
        question: "सिंधु सभ्यता का सबसे बड़ा अन्नागार कहाँ से मिला है?",
        answers: [
            { text: "हड़प्पा", correct: false },
            { text: "मोहनजोदड़ो", correct: true },
            { text: "लोथल", correct: false },
            { text: "धौलावीरा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो का विशाल अन्नागार सिंधु सभ्यता का सबसे बड़ा भवन था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक 45.71 मीटर लंबा और 15.23 मीटर चौड़ा विशाल भवन था।"
    },
    {
        question: "सिंधु सभ्यता में 'नर्तकी' की कांस्य मूर्ति किस विधि से बनी थी?",
        answers: [
            { text: "ढालना", correct: false },
            { text: "मोम-हानि विधि (Lost-wax Casting)", correct: true },
            { text: "हथौड़े से बनाना", correct: false },
            { text: "पत्थर से तराशना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो से मिली नर्तकी की कांस्य मूर्ति 'मोम-हानि' या 'लॉस्ट-वैक्स कास्टिंग' नामक विधि से बनाई गई थी, जो उनकी उन्नत धातु-कला को दर्शाती है।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल को 'सिंध का बाग' (Garden of Sind) कहा जाता है?",
        answers: [
            { text: "हड़प्पा", correct: false },
            { text: "मोहनजोदड़ो", correct: true },
            { text: "चन्हुदड़ो", correct: false },
            { text: "कोट दीजी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो को 'सिंध का बाग' कहा जाता है, क्योंकि यह सिंध प्रांत में स्थित था और इसकी हरियाली और कृषि समृद्धि के कारण यह एक महत्वपूर्ण स्थल था।"
    },
    {
        question: "सिंधु सभ्यता का समाज किस आधार पर विभाजित था?",
        answers: [
            { text: "वर्ण व्यवस्था", correct: false },
            { text: "जाति व्यवस्था", correct: false },
            { text: "व्यवसाय और निवास स्थान", correct: true },
            { text: "कोई विभाजन नहीं", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता में सामाजिक विभाजन के साक्ष्य मिले हैं, जो उनके निवास स्थान (दुर्ग और निचला शहर) और व्यवसाय (पुरोहित, व्यापारी, कारीगर, श्रमिक) पर आधारित था, न कि जाति या वर्ण पर।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल से 'विशाल खेल का मैदान' मिला है?",
        answers: [
            { text: "मोहनजोदड़ो", correct: false },
            { text: "हड़प्पा", correct: false },
            { text: "लोथल", correct: false },
            { text: "धौलावीरा", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धौलावीरा से एक विशाल खेल का मैदान मिला है, जिसे संभवतः किसी सार्वजनिक सभा या मनोरंजन के लिए उपयोग किया जाता था।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल से 'मनके बनाने का कारखाना' मिला है?",
        answers: [
            { text: "लोथल और चन्हुदड़ो", correct: true },
            { text: "हड़प्पा और मोहनजोदड़ो", correct: false },
            { text: "बनावली और राखीगढ़ी", correct: false },
            { text: "रोपड़ और आलमगीरपुर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोथल और चन्हुदड़ो मनके बनाने के प्रमुख केंद्र थे, जहाँ से मनके बनाने के उपकरण और कच्चे माल के साक्ष्य मिले हैं।"
    },
    {
        question: "हड़प्पावासी किस पेड़ की पूजा करते थे?",
        answers: [
            { text: "बरगद", correct: false },
            { text: "नीम", correct: false },
            { text: "पीपल", correct: true },
            { text: "अशोक", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता की मोहरों पर पीपल के वृक्ष की आकृति बनी हुई मिलती है, जो इस बात का संकेत है कि वे इसकी पूजा करते थे।"
    },
    {
        question: "सिंधु सभ्यता में 'मेसोपोटामिया' के साथ व्यापारिक संबंध थे। इसका प्रमाण कहाँ से मिला है?",
        answers: [
            { text: "हड़प्पा से मेसोपोटामिया की मुहरें मिली हैं", correct: false },
            { text: "मेसोपोटामिया से सिंधु सभ्यता की मुहरें मिली हैं", correct: true },
            { text: "दोनों स्थानों से समान सिक्के मिले हैं", correct: false },
            { text: "दोनों स्थानों से समान हथियार मिले हैं", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेसोपोटामिया के कई स्थलों से सिंधु सभ्यता की मुहरें मिली हैं, जो दोनों सभ्यताओं के बीच व्यापारिक संबंधों को सिद्ध करती हैं।"
    },
    {
        question: "सिंधु सभ्यता का सबसे बड़ा और सबसे पुराना भारतीय स्थल कौन सा है?",
        answers: [
            { text: "लोथल", correct: false },
            { text: "धौलावीरा", correct: false },
            { text: "राखीगढ़ी", correct: true },
            { text: "कालीबंगा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राखीगढ़ी (हरियाणा) को भारत में स्थित सिंधु सभ्यता का सबसे बड़ा और सबसे पुराना स्थल माना जाता है।"
    },
    {
        question: "सिंधु सभ्यता में किस प्रकार के 'अंतिम संस्कार' का प्रचलन था?",
        answers: [
            { text: "पूर्ण समाधि (Complete burial)", correct: false },
            { text: "आंशिक समाधि (Partial burial)", correct: false },
            { text: "दाह संस्कार (Cremation)", correct: false },
            { text: "उपर्युक्त सभी", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता के विभिन्न स्थलों से पूर्ण समाधि (हड़प्पा), आंशिक समाधि (मोहनजोदड़ो) और दाह संस्कार (लोथल) के साक्ष्य मिले हैं।"
    },
    {
        question: "सिंधु सभ्यता की शहरी योजना में 'गढ़' (Citadel) किस दिशा में स्थित था?",
        answers: [
            { text: "पूर्वी भाग", correct: false },
            { text: "पश्चिमी भाग", correct: true },
            { text: "उत्तरी भाग", correct: false },
            { text: "दक्षिणी भाग", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु शहरों को आमतौर पर दो भागों में विभाजित किया गया था: एक छोटा, ऊँचा पश्चिमी भाग जिसे 'गढ़' या 'दुर्ग' कहा जाता था, और एक बड़ा, निचला पूर्वी भाग।"
    },
    {
        question: "सिंधु सभ्यता में मिट्टी के बर्तन (pottery) किस रंग के होते थे?",
        answers: [
            { text: "काले रंग के", correct: false },
            { text: "लाल रंग के", correct: false },
            { text: "काले और लाल रंग के", correct: true },
            { text: "नीले रंग के", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता के मिट्टी के बर्तन लाल रंग के होते थे और उन पर काले रंग से ज्यामितीय और पशुओं की आकृतियाँ बनाई जाती थीं।"
    },
    {
        question: "'मातृदेवी' की मूर्तियाँ किससे बनी थीं?",
        answers: [
            { text: "पत्थर", correct: false },
            { text: "धातु", correct: false },
            { text: "टेराकोटा (पकी हुई मिट्टी)", correct: true },
            { text: "लकड़ी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता में बड़ी संख्या में टेराकोटा से बनी नारी की मूर्तियाँ मिली हैं, जिन्हें मातृदेवी का प्रतीक माना जाता है।"
    },
    {
        question: "सिंधु सभ्यता का कौन सा स्थल अपने 'योजनाबद्ध नगर' और 'हस्तशिल्प' के लिए प्रसिद्ध था?",
        answers: [
            { text: "हड़प्पा", correct: false },
            { text: "मोहनजोदड़ो", correct: false },
            { text: "लोथल", correct: false },
            { text: "उपर्युक्त सभी", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हड़प्पा, मोहनजोदड़ो और लोथल जैसे सभी प्रमुख सिंधु शहर अपनी उन्नत नगर योजना और शिल्पकला (हस्तशिल्प) के लिए जाने जाते थे।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल से 'तांबे की बैलगाड़ी' मिली है?",
        answers: [
            { text: "हड़प्पा", correct: false },
            { text: "मोहनजोदड़ो", correct: false },
            { text: "दायमाबाद", correct: true },
            { text: "कालीबंगा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाराष्ट्र के दायमाबाद से तांबे की एक बैलगाड़ी मिली है, जो सिंधु सभ्यता के दक्षिणी विस्तार को दर्शाता है।"
    },
    {
        question: "सिंधु सभ्यता में 'मोहनजोदड़ो' का सबसे बड़ा सार्वजनिक भवन कौन सा था?",
        answers: shuffle([
            { text: "विशाल स्नानागार", correct: false },
            { text: "विशाल अन्नागार", correct: true },
            { text: "सभागार", correct: false },
            { text: "आवासीय भवन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो में मिला विशाल अन्नागार 45 मीटर से अधिक लंबा था और इसे सिंधु सभ्यता का सबसे बड़ा सार्वजनिक भवन माना जाता है।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल को 'हड़प्पा की जुड़वा राजधानी' कहा जाता है?",
        answers: shuffle([
            { text: "लोथल", correct: false },
            { text: "कालीबंगा", correct: false },
            { text: "मोहनजोदड़ो", correct: true },
            { text: "बनावली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हड़प्पा और मोहनजोदड़ो को सिंधु सभ्यता की दो प्रमुख राजधानियाँ माना जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> इन दोनों शहरों की संरचना और महत्व को देखते हुए इन्हें 'जुड़वा राजधानी' कहा जाता है।"
    },
    {
        question: "सिंधु घाटी सभ्यता के लोग किस धातु का उपयोग नहीं जानते थे?",
        answers: shuffle([
            { text: "तांबा", correct: false },
            { text: "कांस्य", correct: false },
            { text: "लोहा", correct: true },
            { text: "सोना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता कांस्य युगीन सभ्यता थी, जहाँ के लोग तांबा, कांस्य, सोना और चाँदी से परिचित थे, लेकिन लोहे का ज्ञान उन्हें नहीं था।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल से 'शवों को दफनाने के लिए लकड़ी के ताबूत' का साक्ष्य मिला है?",
        answers: shuffle([
            { text: "मोहनजोदड़ो", correct: false },
            { text: "लोथल", correct: false },
            { text: "हड़प्पा", correct: true },
            { text: "कालीबंगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हड़प्पा के 'कब्रिस्तान R-37' से लकड़ी के ताबूत में दफनाए गए कंकाल मिले हैं।"
    },
    {
        question: "सिंधु सभ्यता के लोग 'तांबा' कहाँ से प्राप्त करते थे?",
        answers: shuffle([
            { text: "कर्नाटक", correct: false },
            { text: "राजस्थान", correct: true },
            { text: "बलूचिस्तान", correct: false },
            { text: "अफगानिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता के लोग राजस्थान के खेतड़ी की खानों से तांबा प्राप्त करते थे, जो उनके प्रमुख व्यापारिक मार्गों में से एक था।"
    },
    {
        question: "'घोड़े की हड्डियों' के साक्ष्य कहाँ से मिले हैं?",
        answers: shuffle([
            { text: "मोहनजोदड़ो", correct: false },
            { text: "सुरकोटदा", correct: true },
            { text: "कालीबंगा", correct: false },
            { text: "लोथल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुजरात के सुरकोटदा में घोड़े की हड्डियां मिली हैं, हालांकि इसका उपयोग बड़े पैमाने पर होता था या नहीं, इस पर इतिहासकारों में मतभेद है।"
    },
    {
        question: "सिंधु सभ्यता में 'मनके बनाने के कारखाने' कहाँ से मिले हैं?",
        answers: shuffle([
            { text: "मोहनजोदड़ो और हड़प्पा", correct: false },
            { text: "लोथल और चन्हुदड़ो", correct: true },
            { text: "कालीबंगा और बनावली", correct: false },
            { text: "रोपड़ और आलमगीरपुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोथल और चन्हुदड़ो सिंधु सभ्यता के प्रमुख औद्योगिक केंद्र थे जहाँ मनके बनाने का काम होता था।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ से मनके बनाने के उपकरण भी मिले हैं।"
    },
    {
        question: "सिंधु सभ्यता की मुहरों (Seals) पर किस जानवर की आकृति सबसे ज्यादा अंकित है?",
        answers: shuffle([
            { text: "बाघ", correct: false },
            { text: "हाथी", correct: false },
            { text: "एक सींग वाला गेंडा (Unicorn)", correct: true },
            { text: "भैंसा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता की अधिकांश मुहरों पर एक सींग वाले गेंडे की आकृति मिली है, जिसे संभवतः एक पौराणिक या धार्मिक जानवर माना जाता था।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल से 'अग्निवेदियों' के साक्ष्य मिले हैं?",
        answers: shuffle([
            { text: "हड़प्पा और मोहनजोदड़ो", correct: false },
            { text: "लोथल और कालीबंगा", correct: true },
            { text: "धौलावीरा और बनावली", correct: false },
            { text: "रोपड़ और आलमगीरपुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोथल और कालीबंगा दोनों स्थलों से अग्नि अनुष्ठान के साक्ष्य मिले हैं, जो उनकी धार्मिक प्रथाओं को दर्शाते हैं।"
    },
    {
        question: "सिंधु सभ्यता में 'पशुपति' की मुहर पर कौन-से जानवर अंकित हैं?",
        answers: shuffle([
            { text: "बाघ, हाथी, गेंडा, हिरण", correct: false },
            { text: "गाय, बैल, गेंडा, भैंसा", correct: false },
            { text: "बाघ, हाथी, गेंडा, भैंसा", correct: true },
            { text: "शेर, घोड़ा, हाथी, हिरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहनजोदड़ो से मिली 'पशुपति' की मुहर पर एक योगी जैसी मुद्रा में बैठे देवता के चारों ओर बाघ, हाथी, गेंडा और भैंसा को दर्शाया गया है।"
    },
    {
        question: "सिंधु सभ्यता में 'माप-तौल' की इकाइयां किस अनुपात में थीं?",
        answers: shuffle([
            { text: "8", correct: false },
            { text: "12", correct: false },
            { text: "16", correct: true },
            { text: "20", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता के बाट और मापन की इकाइयां 16 के गुणज (जैसे 16, 32, 64) पर आधारित थीं।"
    },
    {
        question: "सिंधु सभ्यता की लिपि किस प्रकार की थी?",
        answers: shuffle([
            { text: "ब्राह्मी", correct: false },
            { text: "खरोष्ठी", correct: false },
            { text: "चित्रात्मक", correct: true },
            { text: "देवनागरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु लिपि अभी तक पढ़ी नहीं जा सकी है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक भाव-चित्रात्मक लिपि थी जिसमें लगभग 400 से 600 चिन्ह थे।"
    },
    {
        question: "सिंधु सभ्यता का सबसे बड़ा भारतीय स्थल 'राखीगढ़ी' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "पंजाब", correct: false },
            { text: "राजस्थान", correct: false },
            { text: "हरियाणा", correct: true },
            { text: "गुजरात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राखीगढ़ी हरियाणा के हिसार जिले में स्थित है और यह भारत में स्थित सिंधु सभ्यता का सबसे बड़ा स्थल है।"
    },
    {
        question: "सिंधु सभ्यता का सबसे दक्षिणी स्थल 'दायमाबाद' किस नदी के तट पर स्थित है?",
        answers: shuffle([
            { text: "गोदावरी", correct: true },
            { text: "कृष्णा", correct: false },
            { text: "कावेरी", correct: false },
            { text: "नर्मदा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दायमाबाद महाराष्ट्र में गोदावरी नदी की सहायक प्रवरा नदी के तट पर स्थित है।"
    },
    {
        question: "'हड़प्पा' शहर किस नदी के तट पर स्थित है?",
        answers: shuffle([
            { text: "सिंधु", correct: false },
            { text: "रावी", correct: true },
            { text: "घग्गर", correct: false },
            { text: "सतलुज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हड़प्पा पाकिस्तान के पंजाब प्रांत में रावी नदी के बाएं तट पर स्थित है।"
    },
    {
        question: "सिंधु सभ्यता में 'कुत्ते को मानव के साथ दफनाया जाना' किस स्थल से मिला है?",
        answers: shuffle([
            { text: "लोथल", correct: false },
            { text: "कालीबंगा", correct: false },
            { text: "रोपड़", correct: true },
            { text: "बनावली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पंजाब के रोपड़ से एक कब्र मिली है जिसमें मानव के साथ एक कुत्ते को भी दफनाया गया था।"
    },
    {
        question: "हड़प्पा सभ्यता के लोगों का मुख्य आहार क्या था?",
        answers: shuffle([
            { text: "गेहूँ, जौ, चावल", correct: false },
            { text: "गेहूँ और जौ", correct: true },
            { text: "चावल और बाजरा", correct: false },
            { text: "मछली और मांस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खुदाई में प्राप्त अनाजों के साक्ष्यों से पता चला है कि गेहूँ और जौ सिंधु सभ्यता के लोगों का प्रमुख आहार था।"
    },
    {
        question: "सिंधु सभ्यता में 'मिस्र और मेसोपोटामिया' के साथ व्यापारिक संबंधों का क्या प्रमाण है?",
        answers: shuffle([
            { text: "समान हथियार", correct: false },
            { text: "समान मुहरें", correct: true },
            { text: "समान इमारतें", correct: false },
            { text: "समान भाषा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेसोपोटामिया के कई स्थलों से सिंधु सभ्यता की मुहरें मिली हैं, जो इन सभ्यताओं के बीच सक्रिय व्यापार का प्रमाण है।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल से 'पत्थर के बने विशाल जलाशय' मिले हैं?",
        answers: shuffle([
            { text: "मोहनजोदड़ो", correct: false },
            { text: "हड़प्पा", correct: false },
            { text: "धौलावीरा", correct: true },
            { text: "लोथल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धौलावीरा में जल संरक्षण के लिए पत्थरों से बने बड़े-बड़े जलाशय मिले हैं, जो इसकी उन्नत जल प्रबंधन प्रणाली का प्रमाण है।"
    },
    {
        question: "सिंधु सभ्यता का सबसे पूर्वी स्थल कौन सा है?",
        answers: shuffle([
            { text: "मांडा", correct: false },
            { text: "दायमाबाद", correct: false },
            { text: "आलमगीरपुर", correct: true },
            { text: "सुत्कागेंडोर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आलमगीरपुर उत्तर प्रदेश में हिंडन नदी के किनारे स्थित है और यह सिंधु सभ्यता का सबसे पूर्वी स्थल है।"
    },
    {
        question: "सिंधु सभ्यता का समाज किस प्रकार का था?",
        answers: shuffle([
            { text: "पितृसत्तात्मक", correct: false },
            { text: "मातृसत्तात्मक", correct: true },
            { text: "पुरुष-प्रधान", correct: false },
            { text: "इनमे से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु सभ्यता से बड़ी संख्या में नारी की मूर्तियाँ मिली हैं, जिससे यह अनुमान लगाया जाता है कि समाज मातृसत्तात्मक था।"
    },
    {
        question: "सिंधु सभ्यता में 'सड़कें' एक-दूसरे को किस कोण पर काटती थीं?",
        answers: shuffle([
            { text: "45°", correct: false },
            { text: "60°", correct: false },
            { text: "90°", correct: true },
            { text: "120°", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु शहरों की सड़कें एक-दूसरे को समकोण (90°) पर काटती थीं, जो एक सुनियोजित ग्रिड प्रणाली को दर्शाती है।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल पर 'गोदीवाड़ा' (Dockyard) का प्रमाण मिला है?",
        answers: shuffle([
            { text: "कालीबंगा", correct: false },
            { text: "बनावली", correct: false },
            { text: "लोथल", correct: true },
            { text: "धौलावीरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोथल में एक कृत्रिम गोदीवाड़ा मिला है, जिससे यह सिद्ध होता है कि यह सिंधु सभ्यता का एक महत्वपूर्ण बंदरगाह था।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल को 'शिल्पियों का शहर' भी कहा जाता है?",
        answers: shuffle([
            { text: "मोहनजोदड़ो", correct: false },
            { text: "हड़प्पा", correct: false },
            { text: "चन्हुदड़ो", correct: true },
            { text: "लोथल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चन्हुदड़ो अपने मनके बनाने के कारखानों और विभिन्न शिल्पकलाओं के कारण शिल्पियों के शहर के रूप में जाना जाता था।"
    },
    {
        question: "सिंधु सभ्यता के किस स्थल से 'घोड़े की हड्डियों के साक्ष्य' मिले हैं, जिससे एक विवादित मुद्दा उत्पन्न हुआ?",
        answers: shuffle([
            { text: "सुरकोटदा", correct: true },
            { text: "लोथल", correct: false },
            { text: "रोपड़", correct: false },
            { text: "कालीबंगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुरकोटदा से प्राप्त घोड़े की हड्डियों के साक्ष्य ने इतिहासकारों के बीच यह बहस छेड़ दी है कि क्या सिंधु सभ्यता के लोग घोड़े का उपयोग जानते थे।"
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