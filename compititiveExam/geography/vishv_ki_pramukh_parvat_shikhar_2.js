const questions = [
    {
        topHeading: "विश्व के प्रमुख पर्वत शिखर पर आधारित बहुविकल्पीय प्रश्न (MCQs) part 2  (quiz_no. 71)."
    },
    {
        question: "विश्व का सबसे ऊँचा पठार कौन सा है?",
        answers: shuffle([
            { text: "दक्कन का पठार", correct: false },
            { text: "ब्राज़ीलियाई पठार", correct: false },
            { text: "तिब्बती पठार", correct: true },
            { text: "कोलोराडो पठार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तिब्बती पठार को 'विश्व की छत' भी कहा जाता है, जो अपनी अत्यधिक ऊँचाई (4,500 मीटर से अधिक) के कारण प्रसिद्ध है।"
    },
    {
        question: "'माउंट एवरेस्ट' की नई ऊँचाई क्या है, जो 2020 में मापी गई?",
        answers: shuffle([
            { text: "8,848 मीटर", correct: false },
            { text: "8,848.86 मीटर", correct: true },
            { text: "8,850 मीटर", correct: false },
            { text: "8,860 मीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नेपाल और चीन द्वारा संयुक्त रूप से की गई माप के बाद 2020 में माउंट एवरेस्ट की नई आधिकारिक ऊँचाई 8,848.86 मीटर घोषित की गई।"
    },
    {
        question: "'के2' पर्वत शिखर को और किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "माउंट एवरेस्ट", correct: false },
            { text: "माउंट गॉडविन-ऑस्टिन", correct: true },
            { text: "माउंट मैकिन्ले", correct: false },
            { text: "माउंट लोगन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> के2 को ब्रिटिश सर्वेक्षक सर हेनरी गॉडविन-ऑस्टिन के सम्मान में माउंट गॉडविन-ऑस्टिन भी कहा जाता है।"
    },
    {
        question: "'काकेशस पर्वत' की सबसे ऊँची चोटी कौन सी है?",
        answers: shuffle([
            { text: "माउंट एवरेस्ट", correct: false },
            { text: "माउंट किलिमंजारो", correct: false },
            { text: "माउंट एलब्रुस", correct: true },
            { text: "माउंट ब्लैंक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट एलब्रुस, जो रूस में स्थित है, काकेशस पर्वत श्रृंखला का सबसे ऊँचा शिखर है और इसे यूरोप का भी सबसे ऊँचा पर्वत माना जाता है।"
    },
    {
        question: "'माउंट लोगन' किस पर्वत श्रृंखला का हिस्सा है?",
        answers: shuffle([
            { text: "रॉकी पर्वत", correct: false },
            { text: "कोस्ट पर्वत", correct: false },
            { text: "सेंट एलियास पर्वत", correct: true },
            { text: "अप्पलेशियन पर्वत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट लोगन कनाडा के युकोन क्षेत्र में सेंट एलियास पर्वत श्रृंखला का हिस्सा है।"
    },
    {
        question: "'विंसन मासिफ' किस पर्वत श्रृंखला में स्थित है?",
        answers: shuffle([
            { text: "ट्रान्सअंटार्कटिक पर्वत", correct: false },
            { text: "एल्सवर्थ पर्वत", correct: true },
            { text: "अंटार्कटिक प्रायद्वीप", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विंसन मासिफ, अंटार्कटिका का सर्वोच्च शिखर, एल्सवर्थ पर्वत श्रृंखला का हिस्सा है।"
    },
    {
        question: "'ऑक्सिडेंटल कॉर्डिलेरा' (Cordillera Occidental) किस पर्वत श्रृंखला का हिस्सा है?",
        answers: shuffle([
            { text: "रॉकी पर्वत", correct: false },
            { text: "एंडीज़ पर्वत", correct: true },
            { text: "आल्प्स पर्वत", correct: false },
            { text: "हिमालय पर्वत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑक्सिडेंटल कॉर्डिलेरा, जिसका अर्थ 'पश्चिमी पर्वतमाला' है, एंडीज पर्वत श्रृंखला की एक प्रमुख उप-श्रेणी है।"
    },
    {
        question: "'माउंट एल्बर्ट' (Mount Elbert) किस पर्वत श्रृंखला का सबसे ऊँचा शिखर है?",
        answers: shuffle([
            { text: "रॉकी पर्वत", correct: true },
            { text: "अप्पलेशियन पर्वत", correct: false },
            { text: "कैस्केड रेंज", correct: false },
            { text: "सिएरा नेवादा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट एल्बर्ट कोलोराडो, संयुक्त राज्य अमेरिका में स्थित है और यह रॉकी पर्वत श्रृंखला का सबसे ऊँचा शिखर है।"
    },
    {
        question: "'अन्नपूर्णा' किस देश में स्थित है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "नेपाल", correct: true },
            { text: "चीन", correct: false },
            { text: "भूटान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अन्नपूर्णा पर्वत नेपाल के हिमालय क्षेत्र में स्थित है।"
    },
    {
        question: "'माउंट चिम्बोराज़ो' (Mount Chimborazo) किस देश में स्थित एक निष्क्रिय ज्वालामुखी है?",
        answers: shuffle([
            { text: "पेरू", correct: false },
            { text: "चिली", correct: false },
            { text: "इक्वाडोर", correct: true },
            { text: "बोलीविया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट चिम्बोराज़ो इक्वाडोर का सबसे ऊँचा शिखर है और यह भूमध्य रेखा के सबसे निकट स्थित शिखर है।"
    },
    {
        question: "'ओलिंपस पर्वत' (Mount Olympus) किस देश में स्थित है?",
        answers: shuffle([
            { text: "इटली", correct: false },
            { text: "ग्रीस", correct: true },
            { text: "फ्रांस", correct: false },
            { text: "स्पेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट ओलिंपस ग्रीस का सबसे ऊँचा पर्वत है और प्राचीन यूनानी पौराणिक कथाओं में देवताओं का निवास स्थान माना जाता था।"
    },
    {
        question: "'ड्रैकेंसबर्ग पर्वत' (Drakensberg Mountains) किस देश में स्थित है?",
        answers: shuffle([
            { text: "दक्षिण अफ्रीका", correct: true },
            { text: "केन्या", correct: false },
            { text: "मोरक्को", correct: false },
            { text: "तंजानिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ड्रैकेंसबर्ग पर्वत श्रृंखला दक्षिण अफ्रीका और लेसोथो में स्थित है।"
    },
    {
        question: "'अप्पूलेसियन पर्वत' (Appalachian Mountains) किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "यूरोप", correct: false },
            { text: "उत्तरी अमेरिका", correct: true },
            { text: "दक्षिण अमेरिका", correct: false },
            { text: "एशिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अप्पूलेसियन पर्वत उत्तरी अमेरिका के पूर्वी भाग में स्थित है।"
    },
    {
        question: "'किलीमांजरो' किस महाद्वीप का सबसे ऊँचा शिखर है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "अफ्रीका", correct: true },
            { text: "यूरोप", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किलीमांजरो तंजानिया में स्थित है और यह अफ्रीका का सबसे ऊँचा पर्वत है।"
    },
    {
        question: "'हिमालय' किस प्रकार के पर्वतों का उदाहरण है?",
        answers: shuffle([
            { text: "वलित पर्वत", correct: true },
            { text: "ब्लॉक पर्वत", correct: false },
            { text: "ज्वालामुखी पर्वत", correct: false },
            { text: "अवशिष्ट पर्वत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिमालय एक नवीन वलित पर्वत श्रृंखला है, जिसका निर्माण भारतीय और यूरेशियन प्लेटों के टकराने से हुआ है।"
    },
    {
        question: "'माउंट एवरेस्ट' पर चढ़ने वाले पहले विकलांग व्यक्ति कौन थे?",
        answers: shuffle([
            { text: "मार्क इंग्लिस", correct: false },
            { text: "अरुणिमा सिन्हा", correct: false },
            { text: "एरिक वीहेनमयेर", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एरिक वीहेनमयेर, एक अमेरिकी पर्वतारोही, 2001 में एवरेस्ट पर चढ़ने वाले पहले नेत्रहीन व्यक्ति थे।"
    },
    {
        question: "'माउंट रेनिएर' किस देश में स्थित है?",
        answers: shuffle([
            { text: "संयुक्त राज्य अमेरिका", correct: true },
            { text: "कनाडा", correct: false },
            { text: "मेक्सिको", correct: false },
            { text: "अलास्का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट रेनिएर संयुक्त राज्य अमेरिका के वाशिंगटन राज्य में स्थित है।"
    },
    {
        question: "'कोसीयूस्को पर्वत' (Mount Kosciuszko) किस पर्वत श्रृंखला में स्थित है?",
        answers: shuffle([
            { text: "आल्प्स", correct: false },
            { text: "ग्रेट डिवाइडिंग रेंज", correct: true },
            { text: "रॉकी", correct: false },
            { text: "एंडीज़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट कोसीयूस्को ऑस्ट्रेलिया के ग्रेट डिवाइडिंग रेंज में स्थित है।"
    },
    {
        question: "'माउंट फुजी' किस देश का राष्ट्रीय प्रतीक माना जाता है?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "जापान", correct: true },
            { text: "दक्षिण कोरिया", correct: false },
            { text: "फिलीपींस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट फुजी को जापान की सांस्कृतिक पहचान और राष्ट्रीय प्रतीक के रूप में देखा जाता है।"
    },
    {
        question: "'काराकोरम' पर्वत श्रृंखला किन दो देशों के बीच स्थित है?",
        answers: shuffle([
            { text: "भारत और नेपाल", correct: false },
            { text: "भारत और चीन", correct: false },
            { text: "पाकिस्तान और चीन", correct: true },
            { text: "भारत और पाकिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काराकोरम पर्वत श्रृंखला मुख्य रूप से पाकिस्तान, भारत और चीन के बीच स्थित है, लेकिन इसका अधिकांश भाग पाकिस्तान और चीन के बीच है।"
    },
    {
        question: "'माउंट चिम्बोराज़ो' किस पर्वत श्रृंखला का हिस्सा है?",
        answers: shuffle([
            { text: "एंडीज़", correct: true },
            { text: "रॉकी", correct: false },
            { text: "आल्प्स", correct: false },
            { text: "हिमालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट चिम्बोराज़ो एंडीज पर्वत श्रृंखला में स्थित है।"
    },
    {
        question: "'लहोत्से' (Lhotse) पर्वत शिखर किस देश में स्थित है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "नेपाल और चीन की सीमा पर", correct: true },
            { text: "पाकिस्तान", correct: false },
            { text: "भूटान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लहोत्से, विश्व का चौथा सबसे ऊँचा पर्वत, एवरेस्ट के ठीक पास नेपाल और चीन की सीमा पर स्थित है।"
    },
    {
        question: "'माउंट ब्लैंक' की ऊँचाई कितनी है?",
        answers: shuffle([
            { text: "4,808 मीटर", correct: true },
            { text: "5,642 मीटर", correct: false },
            { text: "6,190 मीटर", correct: false },
            { text: "8,848 मीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट ब्लैंक, आल्प्स का सबसे ऊँचा शिखर, लगभग 4,808 मीटर ऊँचा है।"
    },
    {
        question: "'माउंट एवरेस्ट' पर चढ़ने वाले सबसे कम उम्र के भारतीय कौन थे?",
        answers: shuffle([
            { text: "अर्जुन वाजपेयी", correct: true },
            { text: "राघवेन्द्र राय", correct: false },
            { text: "प्रेमलता अग्रवाल", correct: false },
            { text: "लवराज सिंह धर्मशक्तु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अर्जुन वाजपेयी 16 साल की उम्र में 2010 में एवरेस्ट पर चढ़ने वाले सबसे कम उम्र के भारतीय बने थे।"
    },
    {
        question: "'माउंट एल्बर्ट' किस देश में स्थित है?",
        answers: shuffle([
            { text: "कनाडा", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: true },
            { text: "मेक्सिको", correct: false },
            { text: "अर्जेंटीना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट एल्बर्ट रॉकी पर्वत श्रृंखला में स्थित है, जो कोलोराडो, संयुक्त राज्य अमेरिका में है।"
    },
    {
        question: "'अंडमान द्वीप समूह' की सबसे ऊँची चोटी कौन सी है?",
        answers: shuffle([
            { text: "माउंट हैरियट", correct: false },
            { text: "सैडल पीक", correct: true },
            { text: "माउंट डियाबोलो", correct: false },
            { text: "माउंट थुलियर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सैडल पीक अंडमान और निकोबार द्वीप समूह की सबसे ऊँची चोटी है।"
    },
    {
        question: "'नीलगिरी पर्वत' का सर्वोच्च शिखर कौन सा है?",
        answers: shuffle([
            { text: "अनाईमुडी", correct: false },
            { text: "डोडाबेट्टा", correct: true },
            { text: "गुरु शिखर", correct: false },
            { text: "महेंद्रगिरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डोडाबेट्टा दक्षिण भारत में नीलगिरी पर्वत का सबसे ऊँचा शिखर है।"
    },
    {
        question: "'माउंट सिनाई' (Mount Sinai) किस देश में स्थित है?",
        answers: shuffle([
            { text: "इज़राइल", correct: false },
            { text: "जॉर्डन", correct: false },
            { text: "मिस्र", correct: true },
            { text: "सऊदी अरब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट सिनाई मिस्र के सिनाई प्रायद्वीप में स्थित है और यह धार्मिक रूप से महत्वपूर्ण स्थान है।"
    },
    {
        question: "'यूराल पर्वत' (Ural Mountains) किन दो महाद्वीपों को अलग करता है?",
        answers: shuffle([
            { text: "अफ्रीका और एशिया", correct: false },
            { text: "उत्तरी अमेरिका और दक्षिण अमेरिका", correct: false },
            { text: "यूरोप और एशिया", correct: true },
            { text: "ऑस्ट्रेलिया और एशिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूराल पर्वत रूस में स्थित है और इसे पारंपरिक रूप से यूरोप और एशिया के बीच की सीमा माना जाता है।"
    },
    {
        question: "'ब्लू माउंटेन' (Blue Mountains) किस देश में स्थित है?",
        answers: shuffle([
            { text: "अमेरिका", correct: false },
            { text: "ऑस्ट्रेलिया", correct: true },
            { text: "चीन", correct: false },
            { text: "भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्लू माउंटेन ऑस्ट्रेलिया के न्यू साउथ वेल्स राज्य में स्थित है, जो अपनी नीली धुंध के लिए प्रसिद्ध है।"
    },
    {
        question: "'कंचनजंगा' पर्वत शिखर किन देशों की सीमा पर स्थित है?",
        answers: shuffle([
            { text: "भारत और चीन", correct: false },
            { text: "भारत और नेपाल", correct: true },
            { text: "भारत और भूटान", correct: false },
            { text: "नेपाल और चीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कंचनजंगा पर्वत भारत के सिक्किम राज्य और नेपाल की सीमा पर स्थित है।"
    },
    {
        question: "'अनाईमुडी' (Anamudi) किस पर्वत श्रृंखला का सबसे ऊँचा शिखर है?",
        answers: shuffle([
            { text: "नीलगिरी पर्वत", correct: false },
            { text: "कार्डमम हिल्स", correct: false },
            { text: "पश्चिमी घाट", correct: true },
            { text: "पूर्वी घाट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनाईमुडी केरल में स्थित पश्चिमी घाट और प्रायद्वीपीय भारत का सबसे ऊँचा शिखर है।"
    },
    {
        question: "'ट्रांसअंटार्कटिक पर्वत' (Transantarctic Mountains) किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "अफ्रीका", correct: false },
            { text: "अंटार्कटिका", correct: true },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "दक्षिण अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ट्रांसअंटार्कटिक पर्वत अंटार्कटिका महाद्वीप को पूर्वी और पश्चिमी अंटार्कटिका में विभाजित करता है।"
    },
    {
        question: "'ओल्ड फैथफुल' (Old Faithful) एक प्रसिद्ध गीज़र है, जो किस पर्वत श्रृंखला के पास स्थित है?",
        answers: shuffle([
            { text: "रॉकी पर्वत", correct: true },
            { text: "अप्पलेशियन पर्वत", correct: false },
            { text: "सिएरा नेवादा", correct: false },
            { text: "कैस्केड रेंज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ओल्ड फैथफुल' येलोस्टोन नेशनल पार्क में स्थित है, जो रॉकी पर्वत श्रृंखला का हिस्सा है।"
    },
    {
        question: "'माउंट रेनियर' किस राष्ट्रीय उद्यान में स्थित है?",
        answers: shuffle([
            { text: "येलोस्टोन नेशनल पार्क", correct: false },
            { text: "योसेमाइट नेशनल पार्क", correct: false },
            { text: "ग्रैंड कैन्यन नेशनल पार्क", correct: false },
            { text: "माउंट रेनियर नेशनल पार्क", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट रेनियर अपने ही नाम वाले राष्ट्रीय उद्यान में स्थित है, जो संयुक्त राज्य अमेरिका के वाशिंगटन राज्य में है।"
    },
    {
        question: "'पोपकाटेपेटल' (Popocatépetl) किस देश में स्थित एक सक्रिय ज्वालामुखी है?",
        answers: shuffle([
            { text: "ग्वाटेमाला", correct: false },
            { text: "होंडुरास", correct: false },
            { text: "मेक्सिको", correct: true },
            { text: "चिली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पोपकाटेपेटल मेक्सिको में स्थित एक प्रसिद्ध और सक्रिय ज्वालामुखी है।"
    },
    {
        question: "'माउंट ब्लैंक' किस देश का सर्वोच्च पर्वत शिखर है?",
        answers: shuffle([
            { text: "फ्रांस", correct: true },
            { text: "इटली", correct: false },
            { text: "स्विट्जरलैंड", correct: false },
            { text: "जर्मनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट ब्लैंक, जो फ्रांस और इटली की सीमा पर स्थित है, फ्रांस का सर्वोच्च पर्वत शिखर माना जाता है।"
    },
    {
        question: "'ड्रैकेंसबर्ग पर्वत' की सबसे ऊँची चोटी कौन सी है?",
        answers: shuffle([
            { text: "माउंट किलिमंजारो", correct: false },
            { text: "माउंट एलब्रुस", correct: false },
            { text: "थाबाना-न्त्लेन्याना", correct: true },
            { text: "माउंट टूबकल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थाबाना-न्त्लेन्याना (Thabana Ntlenyana) लेसोथो में स्थित है और यह ड्रैकेंसबर्ग पर्वत श्रृंखला का सबसे ऊँचा शिखर है।"
    },
    {
        question: "'ओजोन परत' किस वायुमंडलीय परत में स्थित है?",
        answers: shuffle([
            { text: "क्षोभमंडल (Troposphere)", correct: false },
            { text: "समतापमंडल (Stratosphere)", correct: true },
            { text: "मध्यमंडल (Mesosphere)", correct: false },
            { text: "बाह्यमंडल (Exosphere)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओजोन परत, जो सूर्य की हानिकारक पराबैंगनी किरणों से पृथ्वी की रक्षा करती है, समतापमंडल में स्थित है।"
    },
    {
        question: "'माउंट फ़ूजी' किस शहर के पास स्थित है?",
        answers: shuffle([
            { text: "क्योटो", correct: false },
            { text: "टोक्यो", correct: true },
            { text: "ओसाका", correct: false },
            { text: "हिरोशिमा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट फ़ूजी जापान की राजधानी टोक्यो के दक्षिण-पश्चिम में स्थित है।"
    },
    {
        question: "'माउंट लोगन' किस पर्वत श्रृंखला का सबसे ऊँचा शिखर है?",
        answers: shuffle([
            { text: "रॉकी पर्वत", correct: false },
            { text: "सेंट एलियास पर्वत", correct: true },
            { text: "एंडीज पर्वत", correct: false },
            { text: "अप्पलेशियन पर्वत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट लोगन सेंट एलियास पर्वत श्रृंखला का सबसे ऊँचा शिखर है, जो कनाडा में स्थित है।"
    },
    {
        question: "'माउंट एवरेस्ट' पर चढ़ने वाले सबसे कम उम्र के व्यक्ति कौन थे?",
        answers: shuffle([
            { text: "जॉर्डन रोमेरो", correct: true },
            { text: "तेनजिंग नोर्गे", correct: false },
            { text: "फु दोरजी", correct: false },
            { text: "अर्जुन वाजपेयी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमेरिकी पर्वतारोही जॉर्डन रोमेरो 13 साल की उम्र में 2010 में माउंट एवरेस्ट पर चढ़ने वाले सबसे कम उम्र के व्यक्ति थे।"
    },
    {
        question: "'हिमालय' किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "यूरोप", correct: false },
            { text: "उत्तरी अमेरिका", correct: false },
            { text: "एशिया", correct: true },
            { text: "अफ्रीका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिमालय पर्वत श्रृंखला एशिया महाद्वीप में स्थित है।"
    },
    {
        question: "'माउंट एल्ब्रस' किस देश में स्थित है?",
        answers: shuffle([
            { text: "स्विट्जरलैंड", correct: false },
            { text: "रूस", correct: true },
            { text: "फ्रांस", correct: false },
            { text: "इटली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट एल्ब्रस रूस में स्थित है और यूरोप का सबसे ऊँचा शिखर है।"
    },
    {
        question: "'कंचनजंगा' पर्वत शिखर किन देशों की सीमा पर स्थित है?",
        answers: shuffle([
            { text: "भारत और चीन", correct: false },
            { text: "भारत और नेपाल", correct: true },
            { text: "भारत और भूटान", correct: false },
            { text: "नेपाल और चीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कंचनजंगा पर्वत भारत के सिक्किम राज्य और नेपाल की सीमा पर स्थित है।"
    },
    {
        question: "'सिएरा नेवादा' पर्वत किस देश में स्थित है?",
        answers: shuffle([
            { text: "मेक्सिको", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: true },
            { text: "कनाडा", correct: false },
            { text: "स्पेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिएरा नेवादा पर्वत श्रृंखला संयुक्त राज्य अमेरिका के कैलिफ़ोर्निया राज्य में है।"
    },
    {
        question: "'एकांकागुआ' पर्वत की ऊँचाई कितनी है?",
        answers: shuffle([
            { text: "6,961 मीटर", correct: true },
            { text: "7,500 मीटर", correct: false },
            { text: "6,194 मीटर", correct: false },
            { text: "8,000 मीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एकांकागुआ, दक्षिण अमेरिका का सर्वोच्च शिखर, 6,961 मीटर ऊँचा है।"
    },
    {
        question: "'माउंट विंसन मासिफ' किस पर्वत श्रृंखला में स्थित है?",
        answers: shuffle([
            { text: "ट्रांसअंटार्कटिक पर्वत", correct: false },
            { text: "क्वीन मौड पर्वत", correct: false },
            { text: "एल्सवर्थ पर्वत", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विंसन मासिफ अंटार्कटिका में एल्सवर्थ पर्वत का हिस्सा है।"
    },
    {
        question: "'माउंट फुजी' की ऊँचाई कितनी है?",
        answers: shuffle([
            { text: "3,776 मीटर", correct: true },
            { text: "4,808 मीटर", correct: false },
            { text: "6,194 मीटर", correct: false },
            { text: "8,848 मीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट फुजी की ऊँचाई 3,776 मीटर है।"
    },
    {
        question: "'ओलिंपस पर्वत' (Mount Olympus) किस देश में स्थित है?",
        answers: shuffle([
            { text: "इटली", correct: false },
            { text: "फ्रांस", correct: false },
            { text: "ग्रीस", correct: true },
            { text: "स्पेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट ओलिंपस ग्रीस का सबसे ऊँचा पर्वत है, जो पौराणिक कथाओं में देवताओं का निवास स्थान था।"
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