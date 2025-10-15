const questions = [
    {
        topHeading: "ज्वालामुखी पर आधारित 50  MCQs, part_2 (quiz_no.)"
    },
    {
        question: "निम्नलिखित में से कौन सा एक हॉटस्पॉट ज्वालामुखी का उदाहरण है?",
        answers: shuffle([
            { text: "माउंट फ्यूजी", correct: false },
            { text: "माउंट सेंट हेलेंस", correct: false },
            { text: "हवाई द्वीपसमूह के ज्वालामुखी", correct: true },
            { text: "विसुवियस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हॉटस्पॉट ज्वालामुखी मेंटल में एक स्थिर गर्म स्थान के ऊपर बनते हैं, जब टेक्टोनिक प्लेट उसके ऊपर से गुजरती है।<br><br><i class='fa-solid fa-angles-right icon'></i> हवाई इसका प्रमुख उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'माउंट किलिमंजारो', जो एक प्रसुप्त ज्वालामुखी है, किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "अफ्रीका", correct: true },
            { text: "दक्षिण अमेरिका", correct: false },
            { text: "यूरोप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किलिमंजारो अफ्रीका का सबसे ऊंचा पर्वत है, जो तंजानिया में स्थित है और तीन ज्वालामुखीय शंकुओं से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'अजोरेस' और 'आइसलैंड' के ज्वालामुखी किस भूगर्भिक संरचना पर स्थित हैं?",
        answers: shuffle([
            { text: "परि-प्रशांत मेखला", correct: false },
            { text: "मध्य-महाद्वीपीय पेटी", correct: false },
            { text: "मध्य-अटलांटिक कटक", correct: true },
            { text: "अफ्रीकी भ्रंश घाटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य-अटलांटिक कटक एक अपसारी प्लेट सीमा है जहाँ यूरेशियन और उत्तरी अमेरिकी प्लेटें अलग हो रही हैं, जिससे ज्वालामुखी गतिविधि होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "जब मैग्मा अपनति (anticline) और अभिनति (syncline) के मोड़ों में जम जाता है, तो निर्मित स्थलरूप क्या कहलाता है?",
        answers: shuffle([
            { text: "लैकोलिथ", correct: false },
            { text: "बैथोलिथ", correct: false },
            { text: "फैकोलिथ", correct: true },
            { text: "लोपोलिथ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फैकोलिथ एक लहरदार अंतर्वेधी पिंड है जो मुड़ी हुई चट्टानी परतों के शीर्ष (अपनति) और तल (अभिनति) में बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'माउंट एरेबस' अंटार्कटिका का एकमात्र सक्रिय ज्वालामुखी, किस प्रकार का ज्वालामुखी है?",
        answers: shuffle([
            { text: "शील्ड ज्वालामुखी", correct: false },
            { text: "स्ट्रैटो ज्वालामुखी", correct: true },
            { text: "सिंडर शंकु", correct: false },
            { text: "काल्डेरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट एरेबस दुनिया का सबसे दक्षिणी सक्रिय ज्वालामुखी है और यह एक स्ट्रैटो ज्वालामुखी (मिश्रित शंकु) है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'पिलो लावा' (Pillow Lava) का निर्माण कहाँ होता है?",
        answers: shuffle([
            { text: "रेगिस्तान में", correct: false },
            { text: "पानी के नीचे", correct: true },
            { text: "ग्लेशियर के ऊपर", correct: false },
            { text: "घने जंगलों में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब लावा पानी के नीचे (जैसे समुद्र तल पर) फूटता है, तो यह तेजी से ठंडा होकर तकिये जैसे गोल आकार बना लेता है, जिसे पिलो लावा कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "ज्वालामुखी से निकलने वाली विषैली गैस जो जानवरों और मनुष्यों के लिए घातक हो सकती है, कौन सी है?",
        answers: shuffle([
            { text: "जलवाष्प", correct: false },
            { text: "ऑक्सीजन", correct: false },
            { text: "कार्बन डाइऑक्साइड और सल्फर यौगिक", correct: true },
            { text: "नाइट्रोजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारी मात्रा में निकली कार्बन डाइऑक्साइड हवा को विस्थापित कर सकती है, और सल्फर डाइऑक्साइड व हाइड्रोजन सल्फाइड जैसी गैसें जहरीली होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "भूतापीय ऊर्जा (Geothermal Energy) का स्रोत क्या है?",
        answers: shuffle([
            { text: "सूर्य का प्रकाश", correct: false },
            { text: "पृथ्वी के आंतरिक भाग की गर्मी", correct: true },
            { text: "जीवाश्म ईंधन", correct: false },
            { text: "पवन ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह ऊर्जा पृथ्वी के भीतर मैग्मा द्वारा उत्पन्न गर्मी से प्राप्त होती है, जिसका उपयोग बिजली बनाने और तापन के लिए किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'माउंट पिनाटुबो' ज्वालामुखी, जिसका 1991 में बड़ा विस्फोट हुआ था, कहाँ स्थित है?",
        answers: shuffle([
            { text: "जापान", correct: false },
            { text: "इंडोनेशिया", correct: false },
            { text: "फिलीपींस", correct: true },
            { text: "मेक्सिको", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट पिनाटुबो का 1991 का विस्फोट 20वीं सदी के सबसे बड़े ज्वालामुखीय विस्फोटों में से एक था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "एसिड लावा और बेसिक लावा में मुख्य अंतर किसका होता है?",
        answers: shuffle([
            { text: "तापमान का", correct: false },
            { text: "रंग का", correct: false },
            { text: "सिलिका की मात्रा का", correct: true },
            { text: "घनत्व का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एसिड लावा में सिलिका की मात्रा अधिक (गाढ़ा) होती है, जबकि बेसिक लावा में सिलिका की मात्रा कम (पतला) होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "जब ज्वालामुखी का वेंट (निकास नली) लावा से भरकर ठोस हो जाता है, तो कौन सी स्थलाकृति बनती है?",
        answers: shuffle([
            { text: "ज्वालामुखी ग्रीवा या प्लग", correct: true },
            { text: "डाइक", correct: false },
            { text: "सिल", correct: false },
            { text: "लावा पठार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समय के साथ आसपास की नरम चट्टानों के अपरदन के बाद, यह कठोर लावा प्लग एक स्तंभ के रूप में दिखाई देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'टोबा झील', जो एक विशाल ज्वालामुखी झील है, कहाँ स्थित है?",
        answers: shuffle([
            { text: "फिलीपींस", correct: false },
            { text: "इंडोनेशिया (सुमात्रा)", correct: true },
            { text: "जापान", correct: false },
            { text: "न्यूजीलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टोबा झील एक विशाल सुपरवॉल्केनो के काल्डेरा में स्थित है, जिसका विस्फोट लगभग 75,000 साल पहले हुआ था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "कौन सी प्लेट विवर्तनिक सेटिंग में सामान्यतः ज्वालामुखी गतिविधि नहीं होती है?",
        answers: shuffle([
            { text: "महासागरीय-महाद्वीपीय अभिसरण", correct: false },
            { text: "महाद्वीपीय-महाद्वीपीय अभिसरण", correct: false },
            { text: "अपसारी सीमा", correct: false },
            { text: "संरक्षी या रूपांतरित सीमा (Transform Boundary)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संरक्षी सीमाओं पर प्लेटें एक-दूसरे के समानांतर खिसकती हैं, जिससे क्रस्ट का न तो निर्माण होता है और न ही विनाश, इसलिए यहाँ ज्वालामुखी दुर्लभ होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'लाकी' नामक दरारी ज्वालामुखी, जिसका 1783 में उद्गार हुआ था, किस देश में स्थित है?",
        answers: shuffle([
            { text: "इटली", correct: false },
            { text: "आइसलैंड", correct: true },
            { text: "जापान", correct: false },
            { text: "चिली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाकी के उद्गार ने भारी मात्रा में सल्फर डाइऑक्साइड छोड़ी, जिससे यूरोप में गंभीर जलवायु परिवर्तन और अकाल पड़ा।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "आग्नेय चट्टानों का जनक किसे माना जाता है?",
        answers: shuffle([
            { text: "अवसाद", correct: false },
            { text: "लावा", correct: false },
            { text: "मैग्मा", correct: true },
            { text: "कायांतरित चट्टान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सभी आग्नेय चट्टानें मैग्मा के ठंडा और ठोस होने से बनती हैं, चाहे वह सतह के ऊपर (लावा के रूप में) हो या नीचे।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'पोपोकैटेपेट्ल' नामक सक्रिय ज्वालामुखी किस देश में स्थित है?",
        answers: shuffle([
            { text: "पेरू", correct: false },
            { text: "कोलंबिया", correct: false },
            { text: "मेक्सिको", correct: true },
            { text: "ग्वाटेमाला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पोपोकैटेपेट्ल मेक्सिको सिटी के पास स्थित एक बहुत ही सक्रिय स्ट्रैटो ज्वालामुखी है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'आ' (A'a) और 'पाहोहो' (Pahoehoe) किसके प्रकार हैं?",
        answers: shuffle([
            { text: "ज्वालामुखी गैसों के", correct: false },
            { text: "ज्वालामुखी चट्टानों के", correct: false },
            { text: "लावा प्रवाह के", correct: true },
            { text: "ज्वालामुखी शंकुओं के", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये बेसाल्टिक लावा प्रवाह के दो मुख्य प्रकारों के हवाईयन नाम हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> 'आ' खुरदरा और खंडित होता है, जबकि 'पाहोहो' चिकना और रस्सी जैसा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "ज्वालामुखी क्रिया द्वारा कौन से बहुमूल्य पत्थर और खनिज प्राप्त होते हैं?",
        answers: shuffle([
            { text: "कोयला और चूना पत्थर", correct: false },
            { text: "हीरा और सल्फर", correct: true },
            { text: "बलुआ पत्थर और शेल", correct: false },
            { text: "संगमरमर और स्लेट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीरे किम्बरलाइट पाइप्स नामक ज्वालामुखीय संरचनाओं में पाए जाते हैं, और सल्फर ज्वालामुखी के मुख के पास जमा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'कोह-ए-सुल्तान' ज्वालामुखी किस देश में स्थित है?",
        answers: shuffle([
            { text: "ईरान", correct: false },
            { text: "अफगानिस्तान", correct: false },
            { text: "पाकिस्तान", correct: true },
            { text: "तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोह-ए-सुल्तान पाकिस्तान के बलूचिस्तान प्रांत में स्थित एक प्रसुप्त ज्वालामुखी है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "विश्व का सबसे ऊंचा ज्वालामुखी पर्वत कौन सा है?",
        answers: shuffle([
            { text: "माउंट किलिमंजारो", correct: false },
            { text: "ओजोस डेल सलाडो", correct: true },
            { text: "माउंट कोटोपैक्सी", correct: false },
            { text: "माउंट फ्यूजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अर्जेंटीना-चिली सीमा पर स्थित ओजोस डेल सलाडो दुनिया का सबसे ऊंचा सक्रिय ज्वालामुखी है, हालांकि इसका अंतिम उद्गार कई सौ साल पहले हुआ माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'कैस्केड रेंज' के ज्वालामुखी किस प्रकार की प्लेट सीमा का परिणाम हैं?",
        answers: shuffle([
            { text: "अपसारी सीमा", correct: false },
            { text: "महाद्वीपीय भ्रंश", correct: false },
            { text: "हॉटस्पॉट", correct: false },
            { text: "सबडक्शन जोन (प्रविष्ठन क्षेत्र)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैस्केड रेंज तब बनी जब जुआन डे फूका प्लेट उत्तरी अमेरिकी प्लेट के नीचे खिसक गई, जिससे मैग्मा का निर्माण हुआ।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'टेंबोर' ज्वालामुखी, जिसका 1815 का विस्फोट मानव इतिहास के सबसे बड़े विस्फोटों में से एक था, कहाँ है?",
        answers: shuffle([
            { text: "जावा, इंडोनेशिया", correct: false },
            { text: "सुमात्रा, इंडोनेशिया", correct: false },
            { text: "सुंबावा, इंडोनेशिया", correct: true },
            { text: "बाली, इंडोनेशिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस विस्फोट के कारण 1816 को \"बिना गर्मी का वर्ष\" कहा गया क्योंकि राख ने वैश्विक जलवायु को प्रभावित किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ज्वालामुखी उद्गार को 'स्ट्रॉम्बोलियन प्रकार' का कहा जाता है?",
        answers: shuffle([
            { text: "जिसमें शांत लावा बहता है", correct: false },
            { text: "जिसमें नियमित अंतराल पर छोटे-छोटे विस्फोट होते हैं", correct: true },
            { text: "जिसमें अत्यधिक विनाशकारी पाइरोक्लास्टिक प्रवाह होता है", correct: false },
            { text: "जिसमें केवल भाप निकलती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्ट्रॉम्बोलियन उद्गार में गैस के बुलबुले लावा को नियमित, हल्के विस्फोटों के साथ बाहर फेंकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'अफ्रीकी भ्रंश घाटी' (African Rift Valley) में ज्वालामुखी गतिविधि का क्या कारण है?",
        answers: shuffle([
            { text: "दो प्लेटों का टकराव", correct: false },
            { text: "एक हॉटस्पॉट की उपस्थिति", correct: false },
            { text: "महाद्वीपीय प्लेट का अलग होना (अपसरण)", correct: true },
            { text: "एक रूपांतरित भ्रंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह घाटी एक उभरती हुई अपसारी प्लेट सीमा है जहाँ अफ्रीकी प्लेट दो भागों में टूट रही है, जिससे मैग्मा सतह पर आ रहा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "निम्नलिखित में से कौन सी एक अंतर्वेधी (Intrusive) ज्वालामुखी स्थलाकृति है?",
        answers: shuffle([
            { text: "क्रेटर", correct: false },
            { text: "काल्डेरा", correct: false },
            { text: "सिंडर शंकु", correct: false },
            { text: "बैथोलिथ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैथोलिथ मैग्मा के जमने से सतह के नीचे बनती है, जबकि अन्य सभी सतह पर या उसके पास बनती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'माउंट सेंट हेलेंस' में 1980 में हुए विस्फोट की सबसे विशिष्ट घटना क्या थी?",
        answers: shuffle([
            { text: "विशाल लावा प्रवाह", correct: false },
            { text: "पर्वत के उत्तरी हिस्से का पार्श्व विस्फोट और भूस्खलन", correct: true },
            { text: "एक बड़ी क्रेटर झील का निर्माण", correct: false },
            { text: "शांत गैस उत्सर्जन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह विस्फोट ऊपर की ओर न होकर sideways (पार्श्व) हुआ था, जो अपेक्षाकृत दुर्लभ और विनाशकारी था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'गाढ़ा' या 'चिपचिपा' लावा क्या इंगित करता है?",
        answers: shuffle([
            { text: "कम सिलिका और कम गैस", correct: false },
            { text: "उच्च सिलिका और उच्च गैस सामग्री", correct: true },
            { text: "उच्च तापमान और तरल प्रवाह", correct: false },
            { text: "केवल बेसाल्टिक संरचना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उच्च सिलिका लावा को गाढ़ा बनाती है, और फंसी हुई गैसें दबाव बनाती हैं, जिससे विस्फोटक उद्गार होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "ज्वालामुखी के निकट रहने का एक सकारात्मक पहलू क्या हो सकता है?",
        answers: shuffle([
            { text: "लगातार भूकंप का खतरा", correct: false },
            { text: "उपजाऊ मिट्टी और भूतापीय ऊर्जा", correct: true },
            { text: "लहर और पाइरोक्लास्टिक प्रवाह", correct: false },
            { text: "अम्लीय वर्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ज्वालामुखी राख से मिट्टी बहुत उपजाऊ हो जाती है और भूतापीय ऊर्जा एक स्वच्छ ऊर्जा स्रोत है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'मेरापी', 'सेमेरू', और 'अगुंग' ये सभी सक्रिय ज्वालामुखी किस देश के द्वीपसमूह में स्थित हैं?",
        answers: shuffle([
            { text: "फिलीपींस", correct: false },
            { text: "जापान", correct: false },
            { text: "इंडोनेशिया", correct: true },
            { text: "पापुआ न्यू गिनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंडोनेशिया 'अग्नि वलय' पर स्थित है और यहाँ दुनिया के सबसे अधिक सक्रिय ज्वालामुखी हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "समुद्र के अंदर की पर्वत श्रृंखलाओं, जिन्हें मध्य-महासागरीय कटक कहा जाता है, पर किस प्रकार का ज्वालामुखी उद्गार होता है?",
        answers: shuffle([
            { text: "विस्फोटक पीलियन प्रकार", correct: false },
            { text: "शांत दरारी उद्भेदन", correct: true },
            { text: "गुंबद निर्माण", correct: false },
            { text: "सिंडर शंकु निर्माण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन कटकों पर बेसाल्टिक लावा दरारों से शांत रूप से निकलता है और नए समुद्री तल का निर्माण करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'ज्वालामुखी बम' (Volcanic Bomb) क्या है?",
        answers: shuffle([
            { text: "ठोस चट्टान का एक बड़ा टुकड़ा", correct: false },
            { text: "विस्फोट के दौरान हवा में फेंका गया पिघला हुआ लावा का गोला जो हवा में ही ठोस हो जाता है", correct: true },
            { text: "ज्वालामुखी के अंदर गैस का एक बुलबुला", correct: false },
            { text: "एक प्रकार का ज्वालामुखी अध्ययन उपकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये अक्सर वायुगतिकीय (aerodynamic) आकार ले लेते हैं क्योंकि वे घूमते हुए ठंडे होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "कौन सी गैस ज्वालामुखी क्षेत्रों में 'सड़े हुए अंडे' जैसी गंध के लिए जिम्मेदार है?",
        answers: shuffle([
            { text: "कार्बन डाइऑक्साइड", correct: false },
            { text: "सल्फर डाइऑक्साइड", correct: false },
            { text: "हाइड्रोजन सल्फाइड", correct: true },
            { text: "मीथेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाइड्रोजन सल्फाइड (H₂S) एक विषैली गैस है जिसकी विशिष्ट गंध सड़े हुए अंडे जैसी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'एंडीज पर्वत श्रृंखला' के ज्वालामुखी किस प्रक्रिया का परिणाम हैं?",
        answers: shuffle([
            { text: "हॉटस्पॉट गतिविधि", correct: false },
            { text: "दो महाद्वीपीय प्लेटों का टकराव", correct: false },
            { text: "एक महासागरीय प्लेट का महाद्वीपीय प्लेट के नीचे सबडक्शन", correct: true },
            { text: "एक अपसारी सीमा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नाज़का प्लेट का दक्षिण अमेरिकी प्लेट के नीचे जाने से एंडीज पर्वत और उसके ज्वालामुखी बने हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "एक 'सुपरवॉल्केनो' (महाज्वालामुखी) को कैसे परिभाषित किया जाता है?",
        answers: shuffle([
            { text: "जो 15,000 फीट से अधिक ऊंचा हो", correct: false },
            { text: "जो हर साल फटता हो", correct: false },
            { text: "जो एक ही विस्फोट में 1,000 घन किलोमीटर से अधिक सामग्री बाहर फेंकता हो", correct: true },
            { text: "जो भूमध्य रेखा पर स्थित हो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुपरवॉल्केनो के विस्फोट वैश्विक जलवायु को प्रभावित करने और बड़े पैमाने पर विनाश करने में सक्षम होते हैं, जैसे येलोस्टोन।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "ज्वालामुखी नली में लावा के जमने से बनी दीवार जैसी संरचना क्या कहलाती है?",
        answers: shuffle([
            { text: "सिल", correct: false },
            { text: "डाइक", correct: true },
            { text: "क्रेटर", correct: false },
            { text: "प्लग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डाइक तब बनता है जब मैग्मा दरारों में लंबवत रूप से घुसकर जम जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'माउंट शास्ता' और 'लेसेन पीक' ज्वालामुखी किस अमेरिकी राज्य में स्थित हैं?",
        answers: shuffle([
            { text: "वाशिंगटन", correct: false },
            { text: "ओरेगन", correct: false },
            { text: "कैलिफोर्निया", correct: true },
            { text: "अलास्का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये दोनों कैस्केड रेंज के दक्षिणी छोर पर कैलिफोर्निया में स्थित ज्वालामुखी हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'ज्वालामुखीय राख' (Volcanic Ash) वास्तव में क्या है?",
        answers: shuffle([
            { text: "जली हुई लकड़ी का अवशेष", correct: false },
            { text: "महीन पिसी हुई चट्टान, खनिज और ज्वालामुखीय कांच के कण", correct: true },
            { text: "मिट्टी का एक प्रकार", correct: false },
            { text: "जमी हुई गैस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह नरम नहीं होती; यह कठोर, खुरदरी और अपघर्षक होती है और विमान के इंजनों के लिए खतरनाक हो सकती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी पर सबसे बड़ा ज्वालामुखी (क्षेत्रफल के हिसाब से) कौन सा है?",
        answers: shuffle([
            { text: "मौना लोआ", correct: false },
            { text: "किलाऊआ", correct: false },
            { text: "टामू मासिफ", correct: true },
            { text: "ओलंपस मॉन्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टामू मासिफ प्रशांत महासागर में एक विलुप्त पनडुब्बी शील्ड ज्वालामुखी है, जो क्षेत्रफल के हिसाब से पृथ्वी पर सबसे बड़ा एकल ज्वालामुखी है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "लावा डोम (Lava Dome) का निर्माण कैसे होता है?",
        answers: shuffle([
            { text: "पतले, बहने वाले लावा से", correct: false },
            { text: "बहुत गाढ़े, चिपचिपे लावा के धीरे-धीरे बाहर निकलने और जमा होने से", correct: true },
            { text: "पानी के नीचे के विस्फोटों से", correct: false },
            { text: "सिंडर और राख के जमाव से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह लावा इतना गाढ़ा होता है कि दूर तक नहीं बह पाता और वेंट के ऊपर एक गुंबद या टीले के रूप में जमा हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'वल्केनियन उद्गार' की विशेषता क्या है?",
        answers: shuffle([
            { text: "लावा फव्वारे", correct: false },
            { text: "शांत लावा प्रवाह", correct: false },
            { text: "घने, राख से भरे विस्फोट जो कई किलोमीटर ऊंचे जाते हैं", correct: true },
            { text: "पानी के नीचे का उद्गार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये स्ट्राम्बोलियन से अधिक विस्फोटक होते हैं और इसमें राख के बड़े बादल बनते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'माउंट न्यारागोंगो' (Mount Nyiragongo), जो अपनी स्थायी लावा झील के लिए प्रसिद्ध है, कहाँ स्थित है?",
        answers: shuffle([
            { text: "इथियोपिया", correct: false },
            { text: "केन्या", correct: false },
            { text: "तंजानिया", correct: false },
            { text: "कांगो लोकतांत्रिक गणराज्य", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह विरुंगा पर्वत में स्थित है और दुनिया की सबसे बड़ी और सबसे सक्रिय लावा झीलों में से एक के लिए जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'पेरिडोटाइट' और 'किम्बरलाइट' चट्टानें किस भूगर्भिक प्रक्रिया से निकटता से जुड़ी हैं?",
        answers: shuffle([
            { text: "अवसादन", correct: false },
            { text: "कायांतरण", correct: false },
            { text: "गहरी ज्वालामुखी गतिविधि", correct: true },
            { text: "ग्लेशियर निर्माण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये चट्टानें पृथ्वी के मेंटल से उत्पन्न होती हैं और ज्वालामुखी पाइप के माध्यम से सतह पर आती हैं, किम्बरलाइट अक्सर हीरे ले आती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "कौन सी घटना अक्सर बड़े ज्वालामुखी विस्फोटों से पहले या उनके साथ होती है?",
        answers: shuffle([
            { text: "तीव्र वर्षा", correct: false },
            { text: "शांत मौसम", correct: false },
            { text: "छोटे भूकंप और जमीन का फूलना", correct: true },
            { text: "समुद्र के स्तर में गिरावट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मैग्मा के ऊपर की ओर बढ़ने से चट्टानें टूटती हैं (भूकंप) और सतह ऊपर उठती (फूलती) है, जो आसन्न विस्फोट के संकेत हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'सोल्फतारा' (Solfatara) किस प्रकार का धुआँरा है?",
        answers: shuffle([
            { text: "जो केवल जलवाष्प छोड़ता है", correct: false },
            { text: "जो मुख्य रूप से सल्फर युक्त गैसें छोड़ता है", correct: true },
            { text: "जो कार्बन डाइऑक्साइड छोड़ता है", correct: false },
            { text: "जो मीथेन छोड़ता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोल्फतारा एक धुआँरा है जिससे गंधक (सल्फर) की गैसें निकलती हैं, और इसके किनारों पर अक्सर सल्फर जमा हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'मेडिटेरेनियन' (भूमध्य) क्षेत्र में ज्वालामुखी गतिविधि का मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "मध्य-अटलांटिक कटक का विस्तार", correct: false },
            { text: "एक हॉटस्पॉट", correct: false },
            { text: "अफ्रीकी और यूरेशियन प्लेटों का अभिसरण (टकराव)", correct: true },
            { text: "एक विशाल रूपांतरित भ्रंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अफ्रीकी प्लेट के यूरेशियन प्लेट के नीचे खिसकने से इटली और ग्रीस जैसे देशों में ज्वालामुखी गतिविधि होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'नेवाडो डेल रुइज़' ज्वालामुखी (कोलंबिया) 1985 में किस प्रकार की आपदा के लिए कुख्यात हुआ?",
        answers: shuffle([
            { text: "एक विशाल पाइरोक्लास्टिक प्रवाह", correct: false },
            { text: "एक विनाशकारी लहर (Lahar) जिसने आर्मेरो शहर को दफन कर दिया", correct: true },
            { text: "एक विशाल काल्डेरा का निर्माण", correct: false },
            { text: "वायुमंडल में अत्यधिक राख का उत्सर्जन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ज्वालामुखी के विस्फोट ने ग्लेशियरों को पिघला दिया, जिससे भारी मात्रा में कीचड़ और मलबे का प्रवाह (लहर) हुआ जिसने हजारों लोगों की जान ले ली।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'ऑब्सीडियन' (Obsidian) क्या है?",
        answers: shuffle([
            { text: "एक प्रकार की अवसादी चट्टान", correct: false },
            { text: "एक ज्वालामुखीय कांच", correct: true },
            { text: "एक कायांतरित चट्टान", correct: false },
            { text: "एक ज्वालामुखी गैस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑब्सीडियन तब बनता है जब सिलिका युक्त लावा इतनी तेजी से ठंडा होता है कि क्रिस्टल नहीं बन पाते, जिससे यह कांच जैसा दिखता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'प्यूमिस' (Pumice) पत्थर पानी में क्यों तैरता है?",
        answers: shuffle([
            { text: "क्योंकि यह बहुत हल्का होता है", correct: false },
            { text: "क्योंकि इसमें फंसी हुई गैस के बुलबुलों के कारण कई छिद्र होते हैं", correct: true },
            { text: "क्योंकि इसका घनत्व पानी से अधिक होता है", correct: false },
            { text: "क्योंकि यह तेल से बना होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> झागदार लावा के तेजी से ठंडा होने पर गैसें फंस जाती हैं, जिससे यह छिद्रपूर्ण हो जाता है और इसका समग्र घनत्व पानी से कम हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मध्य-महाद्वीपीय ज्वालामुखी पेटी किन दो प्लेटों के बीच स्थित है?",
        answers: shuffle([
            { text: "यूरेशियन और प्रशांत प्लेट", correct: false },
            { text: "यूरेशियन और अफ्रीकी-भारतीय प्लेट", correct: true },
            { text: "उत्तरी अमेरिकी और प्रशांत प्लेट", correct: false },
            { text: "दक्षिण अमेरिकी और नाज़का प्लेट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह पेटी आल्प्स, भूमध्य सागर और हिमालय क्षेत्र से होकर गुजरती है, जो इन प्लेटों के टकराव का परिणाम है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "कौन सी घटना अक्सर बड़े ज्वालामुखी विस्फोटों से पहले या उनके साथ होती है?",
        answers: shuffle([
            { text: "तीव्र वर्षा", correct: false },
            { text: "शांत मौसम", correct: false },
            { text: "छोटे भूकंप और जमीन का फूलना", correct: true },
            { text: "समुद्र के स्तर में गिरावट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मैग्मा के ऊपर की ओर बढ़ने से चट्टानें टूटती हैं (भूकंप) और सतह ऊपर उठती (फूलती) है, जो आसन्न विस्फोट के संकेत हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
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