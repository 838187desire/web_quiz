const questions = [
    {
        topHeading: "ज्वालामुखी पर आधारित 50  MCQs, part_1 (quiz_no.)"
    },
    {
        question: "पृथ्वी के अंदर पिघले हुए चट्टानी पदार्थ को क्या कहा जाता है?",
        answers: shuffle([
            { text: "लावा", correct: false },
            { text: "मैग्मा", correct: true },
            { text: "बेसाल्ट", correct: false },
            { text: "अवसाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब तक पिघला हुआ चट्टानी पदार्थ पृथ्वी की सतह के नीचे रहता है, उसे मैग्मा कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "जब मैग्मा पृथ्वी की सतह पर फूटकर बाहर आता है, तो उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "लावा", correct: true },
            { text: "गीजर", correct: false },
            { text: "काल्डेरा", correct: false },
            { text: "डाइक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी की सतह पर पहुँचने के बाद मैग्मा को लावा कहा जाता है, जो ठंडा होकर आग्नेय चट्टानों का निर्माण करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "ज्वालामुखी के कप के आकार के मुख को क्या कहते हैं?",
        answers: shuffle([
            { text: "शंकु", correct: false },
            { text: "क्रेटर", correct: true },
            { text: "काल्डेरा", correct: false },
            { text: "सिंडर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ज्वालामुखी के शीर्ष पर स्थित कीप या कप के आकार के गड्ढे को क्रेटर कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "क्रेटर का बड़ा और विस्तृत रूप क्या कहलाता है?",
        answers: shuffle([
            { text: "सिंडर शंकु", correct: false },
            { text: "ज्वालामुखी शंकु", correct: false },
            { text: "काल्डेरा", correct: true },
            { text: "ज्वालामुखी ग्रीवा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब क्रेटर धंस जाता है या विस्फोट से बहुत चौड़ा हो जाता है, तो उसे काल्डेरा कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "विश्व का सबसे सक्रिय ज्वालामुखी कौन सा है?",
        answers: shuffle([
            { text: "कोटोपैक्सी", correct: false },
            { text: "फ्यूजियामा", correct: false },
            { text: "किलाऊआ", correct: true },
            { text: "विसुवियस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हवाई (संयुक्त राज्य अमेरिका) में स्थित किलाऊआ को दुनिया का सबसे सक्रिय ज्वालामुखी माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "निम्नलिखित में से किसे 'भूमध्य सागर का प्रकाश स्तंभ' कहा जाता है?",
        answers: shuffle([
            { text: "एटना", correct: false },
            { text: "विसुवियस", correct: false },
            { text: "स्ट्राम्बोली", correct: true },
            { text: "क्राकाटोआ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्ट्राम्बोली ज्वालामुखी से निरंतर प्रज्वलित गैसें और लावा निकलता रहता है, जिससे यह दूर से एक प्रकाश स्तंभ जैसा प्रतीत होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "ज्वालामुखी उद्गार के समय निकलने वाली गैसों में सबसे अधिक मात्रा किसकी होती है?",
        answers: shuffle([
            { text: "कार्बन डाइऑक्साइड", correct: false },
            { text: "सल्फर डाइऑक्साइड", correct: false },
            { text: "जलवाष्प", correct: true },
            { text: "हाइड्रोजन सल्फाइड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ज्वालामुखी गैसों में लगभग 60-90% हिस्सा जलवाष्प (स्टीम) का होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'अग्नि वलय' (Ring of Fire) किस महासागर में स्थित है?",
        answers: shuffle([
            { text: "अटलांटिक महासागर", correct: false },
            { text: "हिंद महासागर", correct: false },
            { text: "प्रशांत महासागर", correct: true },
            { text: "आर्कटिक महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विश्व के लगभग दो-तिहाई सक्रिय ज्वालामुखी प्रशांत महासागर के चारों ओर एक श्रृंखला में स्थित हैं, जिसे 'अग्नि वलय' कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "भारत में एकमात्र सक्रिय ज्वालामुखी कौन सा है?",
        answers: shuffle([
            { text: "नारकोंडम द्वीप", correct: false },
            { text: "बैरन द्वीप", correct: true },
            { text: "डेक्कन ट्रैप", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंडमान और निकोबार द्वीप समूह में स्थित बैरन द्वीप भारत का एकमात्र सक्रिय ज्वालामुखी है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वे ज्वालामुखी जो ऐतिहासिक काल में कभी नहीं फटे, क्या कहलाते हैं?",
        answers: shuffle([
            { text: "सक्रिय ज्वालामुखी", correct: false },
            { text: "प्रसुप्त ज्वालामुखी", correct: false },
            { text: "मृत या शांत ज्वालामुखी", correct: true },
            { text: "मिश्रित ज्वालामुखी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऐसे ज्वालामुखी जिनमें भविष्य में उद्गार की कोई संभावना नहीं होती, उन्हें मृत या शांत ज्वालामुखी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'माउंट एटना' ज्वालामुखी किस देश में स्थित है?",
        answers: shuffle([
            { text: "जापान", correct: false },
            { text: "इंडोनेशिया", correct: false },
            { text: "इटली", correct: true },
            { text: "संयुक्त राज्य अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट एटना यूरोप का सबसे ऊंचा और सबसे सक्रिय ज्वालामुखी है, जो इटली के सिसिली द्वीप पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "ज्वालामुखी की सक्रियता के आधार पर उन्हें कितने प्रकारों में बांटा गया है?",
        answers: shuffle([
            { text: "दो", correct: false },
            { text: "तीन", correct: true },
            { text: "चार", correct: false },
            { text: "पाँच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सक्रियता के आधार पर ज्वालामुखी तीन प्रकार के होते हैं: सक्रिय (Active), प्रसुप्त (Dormant), और मृत (Extinct)।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "जिस ज्वालामुखी में निकट अतीत में उद्गार नहीं हुआ है, लेकिन कभी भी हो सकता है, उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "सक्रिय ज्वालामुखी", correct: false },
            { text: "प्रसुप्त ज्वालामुखी", correct: true },
            { text: "मृत ज्वालामुखी", correct: false },
            { text: "मिश्रित शंकु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रसुप्त (सोया हुआ) ज्वालामुखी वह है जो अभी शांत है पर भविष्य में सक्रिय हो सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "विश्व का सबसे ऊंचा सक्रिय ज्वालामुखी 'माउंट कोटोपैक्सी' कहाँ स्थित है?",
        answers: shuffle([
            { text: "जापान", correct: false },
            { text: "इक्वाडोर", correct: true },
            { text: "चिली", correct: false },
            { text: "पेरू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट कोटोपैक्सी एंडीज पर्वतमाला में, इक्वाडोर देश में स्थित विश्व का सबसे ऊँचा सक्रिय ज्वालामुखी है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'माउंट फ्यूजियामा' किस देश का एक प्रसिद्ध ज्वालामुखी है?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "दक्षिण कोरिया", correct: false },
            { text: "जापान", correct: true },
            { text: "फिलीपींस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट फ्यूजियामा जापान का सबसे ऊंचा पर्वत और एक प्रसुप्त ज्वालामुखी है, जिसे जापानी संस्कृति में बहुत पवित्र माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पतले और तरल लावा से किस प्रकार के ज्वालामुखी शंकु का निर्माण होता है?",
        answers: shuffle([
            { text: "सिंडर शंकु", correct: false },
            { text: "शील्ड शंकु", correct: true },
            { text: "मिश्रित शंकु", correct: false },
            { text: "लावा डोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कम चिपचिपे (बेसाल्टिक) लावा के शांत प्रवाह से चौड़े और कम ढाल वाले शील्ड शंकुओं का निर्माण होता है, जैसे हवाई के ज्वालामुखी।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "ज्वालामुखी विस्फोट से बनी कौन सी मिट्टी कृषि के लिए अत्यधिक उपजाऊ होती है?",
        answers: shuffle([
            { text: "जलोढ़ मिट्टी", correct: false },
            { text: "लैटेराइट मिट्टी", correct: false },
            { text: "काली मिट्टी (रेगुर)", correct: true },
            { text: "लाल मिट्टी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ज्वालामुखी लावा के अपक्षय से बनी काली मिट्टी खनिजों से भरपूर होती है और कपास जैसी फसलों के लिए बहुत उपजाऊ होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'क्राकाटोआ' ज्वालामुखी किस देश में स्थित है?",
        answers: shuffle([
            { text: "इंडोनेशिया", correct: true },
            { text: "मलेशिया", correct: false },
            { text: "फिलीपींस", correct: false },
            { text: "थाईलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्राकाटोआ इंडोनेशिया में स्थित एक ज्वालामुखी है, जो 1883 के विनाशकारी विस्फोट के लिए जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "ज्वालामुखी से निकलने वाले छोटे-छोटे चट्टानी टुकड़ों को क्या कहते हैं?",
        answers: shuffle([
            { text: "पाइरोक्लास्ट", correct: false },
            { text: "लैपिली", correct: false },
            { text: "लावा बम", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ज्वालामुखी विस्फोट में लावा के साथ निकलने वाले सभी ठोस पदार्थों (राख, लैपिली, बम) को सामूहिक रूप से पाइरोक्लास्ट या टेफ्रा कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'ओल्ड फेथफुल' गीजर कहाँ स्थित है?",
        answers: shuffle([
            { text: "आइसलैंड", correct: false },
            { text: "न्यूजीलैंड", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: true },
            { text: "रूस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओल्ड फेथफुल एक प्रसिद्ध गीजर है जो संयुक्त राज्य अमेरिका के व्योमिंग राज्य में येलोस्टोन नेशनल पार्क में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "गर्म जल के झरने (Hot Springs) किसकी क्रिया के फलस्वरूप बनते हैं?",
        answers: shuffle([
            { text: "भूकंप", correct: false },
            { text: "वलन", correct: false },
            { text: "ज्वालामुखी", correct: true },
            { text: "अपरदन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भूगर्भिक रूप से गर्म चट्टानों (अक्सर ज्वालामुखी गतिविधि से संबंधित) के संपर्क में आने से जब भूमिगत जल गर्म होकर सतह पर आता है, तो गर्म जल के झरने बनते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "ज्वालामुखी की कीप के आकार की नली को क्या कहते हैं जिससे मैग्मा ऊपर आता है?",
        answers: shuffle([
            { text: "वेंट (निकास नली)", correct: true },
            { text: "डाइक", correct: false },
            { text: "सिल", correct: false },
            { text: "सिंडर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ज्वालामुखी वेंट या निकास नली वह मार्ग है जिससे होकर मैग्मा और गैसें सतह तक पहुँचती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस प्रकार के लावा में सिलिका की मात्रा अधिक होती है?",
        answers: shuffle([
            { text: "अम्लीय लावा (Acidic Lava)", correct: true },
            { text: "क्षारीय लावा (Basic Lava)", correct: false },
            { text: "बेसाल्टिक लावा", correct: false },
            { text: "इन सभी में समान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अम्लीय लावा अधिक गाढ़ा और चिपचिपा होता है क्योंकि इसमें सिलिका की मात्रा 65% से अधिक होती है, जिससे विस्फोटक उद्गार होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "भारत का नारकोंडम द्वीप किस प्रकार का ज्वालामुखी है?",
        answers: shuffle([
            { text: "सक्रिय", correct: false },
            { text: "प्रसुप्त", correct: true },
            { text: "मृत या शांत", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंडमान सागर में स्थित नारकोंडम एक प्रसुप्त ज्वालामुखी है, जिसमें हाल के वर्षों में कोई गतिविधि नहीं देखी गई है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "जब लावा दरारों से निकलकर एक विस्तृत क्षेत्र में फैल जाता है, तो किसका निर्माण होता है?",
        answers: shuffle([
            { text: "पर्वत", correct: false },
            { text: "घाटी", correct: false },
            { text: "लावा पठार", correct: true },
            { text: "झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दरारी उद्भेदन से निकलने वाला तरल लावा विशाल क्षेत्रों में फैलकर लावा पठार या ट्रैप का निर्माण करता है, जैसे भारत का दक्कन पठार।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'माउंट पीली' ज्वालामुखी किस द्वीप पर स्थित है?",
        answers: shuffle([
            { text: "हवाई", correct: false },
            { text: "सिसिली", correct: false },
            { text: "मार्टीनिक", correct: true },
            { text: "सुमात्रा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट पीली कैरिबियन सागर के मार्टीनिक द्वीप पर स्थित एक सक्रिय ज्वालामुखी है, जो 1902 के विनाशकारी विस्फोट के लिए जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "ज्वालामुखी उद्गार का मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "पृथ्वी का घूर्णन", correct: false },
            { text: "प्लेट विवर्तनिकी (Plate Tectonics)", correct: true },
            { text: "चंद्रमा का गुरुत्वाकर्षण", correct: false },
            { text: "नदियों का प्रवाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी की टेक्टोनिक प्लेटों की गति के कारण मैग्मा का निर्माण होता है और वह कमजोर क्षेत्रों से सतह पर आ जाता है, जिससे ज्वालामुखी फटते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वह कौन सा महाद्वीप है जहाँ एक भी ज्वालामुखी नहीं है?",
        answers: shuffle([
            { text: "अफ्रीका", correct: false },
            { text: "यूरोप", correct: false },
            { text: "ऑस्ट्रेलिया", correct: true },
            { text: "दक्षिण अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑस्ट्रेलिया महाद्वीप किसी भी सक्रिय प्लेट सीमा पर स्थित नहीं है, इसलिए वहां कोई सक्रिय ज्वालामुखी नहीं हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "लावा की मोटी, परतदार और चिपचिपी परतों से किस प्रकार के ज्वालामुखी का निर्माण होता है?",
        answers: shuffle([
            { text: "शील्ड ज्वालामुखी", correct: false },
            { text: "मिश्रित या स्ट्रैटो ज्वालामुखी", correct: true },
            { text: "सिंडर शंकु", correct: false },
            { text: "दरारी ज्वालामुखी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये ज्वालामुखी लावा और पाइरोक्लास्टिक पदार्थों की क्रमिक परतों से बनते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इनका ढाल तीव्र होता है और ये विस्फोटक होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "ज्वालामुखी के अध्ययन को क्या कहा जाता है?",
        answers: shuffle([
            { text: "सिस्मोलॉजी", correct: false },
            { text: "वोल्केनोलॉजी", correct: true },
            { text: "जियोलॉजी", correct: false },
            { text: "पेट्रोलॉजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वोल्केनोलॉजी (ज्वालामुखी विज्ञान) वह विज्ञान है जिसमें ज्वालामुखी, लावा, मैग्मा और संबंधित भूवैज्ञानिक घटनाओं का अध्ययन किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'माउंट रेनियर' और 'माउंट सेंट हेलेंस' ज्वालामुखी किस देश में हैं?",
        answers: shuffle([
            { text: "कनाडा", correct: false },
            { text: "मेक्सिको", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: true },
            { text: "इटली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये दोनों प्रसिद्ध स्ट्रैटो ज्वालामुखी संयुक्त राज्य अमेरिका के वाशिंगटन राज्य में कैस्केड पर्वत श्रृंखला का हिस्सा हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "डाइक (Dyke) क्या है?",
        answers: shuffle([
            { text: "ज्वालामुखी के ऊपर का गड्ढा", correct: false },
            { text: "लावा का क्षैतिज जमाव", correct: false },
            { text: "लावा का लंबवत जमाव", correct: true },
            { text: "गर्म पानी का फव्वारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डाइक एक अंतर्वेधी स्थलरूप है जिसमें मैग्मा चट्टानों की परतों को लंबवत या तिरछे काटकर जम जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सिल (Sill) क्या है?",
        answers: shuffle([
            { text: "मैग्मा का धरातल पर प्रवाह", correct: false },
            { text: "मैग्मा का चट्टानों की परतों के समानांतर जमाव", correct: true },
            { text: "ज्वालामुखी का मुख", correct: false },
            { text: "ज्वालामुखी से निकली राख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिल एक अंतर्वेधी स्थलरूप है जिसमें मैग्मा चट्टानों की परतों के बीच क्षैतिज रूप से घुसकर जम जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'विसुवियस' ज्वालामुखी, जिसने पोम्पेई शहर को नष्ट कर दिया था, किस देश में स्थित है?",
        answers: shuffle([
            { text: "ग्रीस", correct: false },
            { text: "तुर्की", correct: false },
            { text: "इटली", correct: true },
            { text: "स्पेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट विसुवियस इटली के नेपल्स की खाड़ी के पास स्थित है, और इसका 79 ईस्वी का विस्फोट ऐतिहासिक रूप से प्रसिद्ध है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ज्वालामुखी पेटी को 'परि-प्रशांत महासागरीय पेटी' भी कहा जाता है?",
        answers: shuffle([
            { text: "मध्य-अटलांटिक पेटी", correct: false },
            { text: "हिंद महासागरीय पेटी", correct: false },
            { text: "अग्नि वलय (Ring of Fire)", correct: true },
            { text: "अफ्रीकी भ्रंश घाटी पेटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रशांत महासागर के चारों ओर विस्तृत ज्वालामुखी और भूकंपीय क्षेत्र को परि-प्रशांत महासागरीय पेटी या अग्नि वलय कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "ज्वालामुखी विस्फोट के पैमाने को मापने के लिए किस सूचकांक का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "रिक्टर स्केल", correct: false },
            { text: "मरकली स्केल", correct: false },
            { text: "ज्वालामुखी explosivity सूचकांक (VEI)", correct: true },
            { text: "सफिर-सिम्पसन स्केल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> VEI स्केल ज्वालामुखी विस्फोट की भयावहता को मापता है, जो 0 से 8 तक होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> रिक्टर और मरकली स्केल भूकंप के लिए हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'पैले के बाल' (Pele's hair) का संबंध किससे है?",
        answers: shuffle([
            { text: "भूकंप", correct: false },
            { text: "सुनामी", correct: false },
            { text: "ज्वालामुखी", correct: true },
            { text: "चक्रवात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह बेसाल्टिक लावा के हवा में खिंचकर बने कांच के पतले धागों को दिया गया नाम है, जिसका नाम हवाई की ज्वालामुखी देवी 'पैले' के नाम पर रखा गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सबसे विस्फोटक प्रकार के ज्वालामुखी उद्गार को क्या कहा जाता है?",
        answers: shuffle([
            { text: "हवाईयन उद्गार", correct: false },
            { text: "स्ट्राम्बोलियन उद्गार", correct: false },
            { text: "पीलियन उद्गार", correct: true },
            { text: "वल्केनियन उद्गार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीलियन उद्गार सबसे विनाशकारी और विस्फोटक होते हैं, जिनमें भारी मात्रा में गैस, राख और पाइरोक्लास्टिक प्रवाह होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'धुआँरे' (Fumaroles) क्या होते हैं?",
        answers: shuffle([
            { text: "गर्म जल के स्रोत", correct: false },
            { text: "ज्वालामुखी गैसों और भाप के निकास द्वार", correct: true },
            { text: "कीचड़ के ज्वालामुखी", correct: false },
            { text: "छोटे लावा प्रवाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धुआँरे ऐसे छिद्र होते हैं जिनसे केवल गैसें और जलवाष्प निकलती है, लावा नहीं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'हजारों धुआँरों की घाटी' (Valley of Ten Thousand Smokes) कहाँ स्थित है?",
        answers: shuffle([
            { text: "आइसलैंड", correct: false },
            { text: "न्यूजीलैंड", correct: false },
            { text: "हवाई (यूएसए)", correct: false },
            { text: "अलास्का (यूएसए)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह घाटी अलास्का के कटमाई राष्ट्रीय उद्यान में है, जिसका निर्माण 1912 के नोवारुप्ता ज्वालामुखी विस्फोट के बाद हुआ था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "भारत का 'डेक्कन ट्रैप' किस प्रकार की ज्वालामुखी क्रिया का परिणाम है?",
        answers: shuffle([
            { text: "केंद्रीय उद्भेदन", correct: false },
            { text: "दरारी उद्भेदन", correct: true },
            { text: "विस्फोटक उद्भेदन", correct: false },
            { text: "अम्लीय उद्भेदन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डेक्कन पठार का निर्माण लाखों साल पहले दरारों से निकलने वाले बेसाल्टिक लावा के शांत प्रवाह और जमाव के कारण हुआ था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "ज्वालामुखी द्वारा निर्मित झील को क्या कहा जाता है?",
        answers: shuffle([
            { text: "लैगून", correct: false },
            { text: "क्रेटर झील", correct: true },
            { text: "गोखुर झील", correct: false },
            { text: "भ्रंश झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब किसी ज्वालामुखी के क्रेटर या काल्डेरा में पानी भर जाता है, तो क्रेटर झील का निर्माण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सिंडर शंकु (Cinder Cone) का निर्माण मुख्य रूप से किससे होता है?",
        answers: shuffle([
            { text: "तरल लावा", correct: false },
            { text: "गाढ़ा लावा", correct: false },
            { text: "राख, सिंडर और ज्वालामुखी बम", correct: true },
            { text: "केवल गैसों से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंडर शंकु छोटे और तीव्र ढाल वाले होते हैं जिनका निर्माण ज्वालामुखी के मुख से निकले पाइरोक्लास्टिक टुकड़ों के जमाव से होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ग्रह पर सौरमंडल का सबसे बड़ा ज्वालामुखी 'ओलंपस मॉन्स' स्थित है?",
        answers: shuffle([
            { text: "शुक्र", correct: false },
            { text: "मंगल", correct: true },
            { text: "बृहस्पति", correct: false },
            { text: "पृथ्वी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओलंपस मॉन्स मंगल ग्रह पर स्थित एक विशाल शील्ड ज्वालामुखी है, जो माउंट एवरेस्ट से लगभग तीन गुना ऊँचा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "ज्वालामुखी की गतिविधि किन प्लेट सीमाओं पर सबसे आम है?",
        answers: shuffle([
            { text: "अभिसारी और अपसारी सीमाएँ", correct: true },
            { text: "केवल अभिसारी सीमाएँ", correct: false },
            { text: "केवल अपसारी सीमाएँ", correct: false },
            { text: "संरक्षी सीमाएँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अभिसारी सीमाओं (जहाँ प्लेटें टकराती हैं) और अपसारी सीमाओं (जहाँ प्लेटें अलग होती हैं) पर मैग्मा का निर्माण होता है, जिससे ज्वालामुखी बनते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "जब मैग्मा ऊपर उठती परतों को मोड़कर एक तश्तरी के आकार में जम जाता है, तो उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "लैकोलिथ", correct: false },
            { text: "बैथोलिथ", correct: false },
            { text: "फैकोलिथ", correct: false },
            { text: "लोपोलिथ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोपोलिथ एक तश्तरी या बेसिन के आकार का अंतर्वेधी पिंड है जो आमतौर पर चट्टानों के सिंकलाइन (अभिनति) में बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'माउंट मेरापी' नामक सक्रिय ज्वालामुखी किस देश में है?",
        answers: shuffle([
            { text: "जापान", correct: false },
            { text: "फिलीपींस", correct: false },
            { text: "इंडोनेशिया", correct: true },
            { text: "मलेशिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट मेरापी इंडोनेशिया के सबसे सक्रिय ज्वालामुखियों में से एक है, जो जावा द्वीप पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "गर्म और विनाशकारी गैस, राख और चट्टानों के तेज गति से बहने वाले प्रवाह को क्या कहते हैं?",
        answers: shuffle([
            { text: "लावा प्रवाह", correct: false },
            { text: "पाइरोक्लास्टिक प्रवाह", correct: true },
            { text: "लहर (Lahar)", correct: false },
            { text: "गीजर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पाइरोक्लास्टिक प्रवाह ज्वालामुखी विस्फोट की सबसे खतरनाक घटनाओं में से एक है, जो अत्यधिक तापमान पर बहुत तेज गति से चलता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "ज्वालामुखी कीचड़ और मलबे के प्रवाह को क्या कहा जाता है?",
        answers: shuffle([
            { text: "पाइरोक्लास्टिक प्रवाह", correct: false },
            { text: "लावा ट्यूब", correct: false },
            { text: "लहर (Lahar)", correct: true },
            { text: "टेफ्रा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लहर ज्वालामुखी से निकली राख और मलबे का पानी (बारिश या पिघली बर्फ से) के साथ मिलकर बना कीचड़ का प्रवाह है, जो बहुत विनाशकारी होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "हवाईयन प्रकार के उद्गार की मुख्य विशेषता क्या है?",
        answers: shuffle([
            { text: "अत्यधिक विस्फोटक", correct: false },
            { text: "शांत और तरल लावा का प्रवाह", correct: true },
            { text: "केवल गैसों का निकलना", correct: false },
            { text: "अम्लीय लावा का गुंबद बनना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हवाईयन उद्गार में कम चिपचिपा बेसाल्टिक लावा शांत रूप से बहता है, जिससे शील्ड ज्वालामुखियों का निर्माण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
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