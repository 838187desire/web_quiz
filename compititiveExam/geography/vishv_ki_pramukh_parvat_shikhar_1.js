const questions = [
    {
        topHeading: "विश्व के प्रमुख पर्वत शिखर पर आधारित बहुविकल्पीय प्रश्न (MCQs) part 1  (quiz_no. 70)."
    },
    {
        question: "विश्व का सबसे ऊँचा पर्वत शिखर 'माउंट एवरेस्ट' किस पर्वत श्रृंखला में स्थित है?",
        answers: shuffle([
            { text: "काराकोरम", correct: false },
            { text: "हिमालय", correct: true },
            { text: "हिंदू कुश", correct: false },
            { text: "एंडीज़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट एवरेस्ट, जिसकी ऊँचाई 8,848.86 मीटर है, हिमालय पर्वत श्रृंखला का हिस्सा है और नेपाल तथा चीन की सीमा पर स्थित है।"
    },
    {
        question: "माउंट एवरेस्ट को नेपाल में किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "चोमोलुंगमा", correct: false },
            { text: "सागरमाथा", correct: true },
            { text: "गौरी शंकर", correct: false },
            { text: "अन्नपूर्णा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नेपाल में माउंट एवरेस्ट को 'सागरमाथा' (आकाश की देवी) के नाम से पुकारा जाता है, जबकि तिब्बत में इसे 'चोमोलुंगमा' (पर्वतों की रानी) कहते हैं।"
    },
    {
        question: "विश्व का दूसरा सबसे ऊँचा पर्वत शिखर 'के2' (K2), किस पर्वत श्रृंखला में स्थित है?",
        answers: shuffle([
            { text: "हिमालय", correct: false },
            { text: "हिंदू कुश", correct: false },
            { text: "काराकोरम", correct: true },
            { text: "कुनलुन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> के2, जिसे माउंट गॉडविन-ऑस्टिन भी कहते हैं, की ऊँचाई 8,611 मीटर है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह काराकोरम पर्वत श्रृंखला में स्थित है।"
    },
    {
        question: "'अन्नपूर्णा' पर्वत शिखर किस देश में स्थित है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "नेपाल", correct: true },
            { text: "भूटान", correct: false },
            { text: "चीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अन्नपूर्णा पर्वत नेपाल के मध्य भाग में स्थित हिमालय का एक हिस्सा है, जिसमें कई ऊँचे शिखर शामिल हैं।"
    },
    {
        question: "'किलिमंजारो' पर्वत किस महाद्वीप का सबसे ऊँचा पर्वत है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "यूरोप", correct: false },
            { text: "अफ्रीका", correct: true },
            { text: "दक्षिण अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट किलिमंजारो तंजानिया में स्थित एक निष्क्रिय ज्वालामुखी है और यह अफ्रीका महाद्वीप का सबसे ऊँचा पर्वत शिखर है।"
    },
    {
        question: "'एलब्रुस' (Elbrus) पर्वत शिखर किस महाद्वीप का सर्वोच्च बिंदु है?",
        answers: shuffle([
            { text: "अफ्रीका", correct: false },
            { text: "यूरोप", correct: true },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "अंटार्कटिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट एलब्रुस रूस में स्थित है और यह काकेशस पर्वत श्रृंखला का हिस्सा है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे यूरोप का सबसे ऊँचा पर्वत शिखर माना जाता है।"
    },
    {
        question: "'एकांकागुआ' (Aconcagua) पर्वत शिखर किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "उत्तरी अमेरिका", correct: false },
            { text: "दक्षिण अमेरिका", correct: true },
            { text: "एशिया", correct: false },
            { text: "यूरोप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एकांकागुआ एंडीज पर्वत श्रृंखला में स्थित है और यह दक्षिण अमेरिका के साथ-साथ पश्चिमी गोलार्ध का भी सबसे ऊँचा पर्वत शिखर है।"
    },
    {
        question: "उत्तरी अमेरिका का सबसे ऊँचा पर्वत शिखर कौन सा है?",
        answers: shuffle([
            { text: "माउंट लोगन", correct: false },
            { text: "माउंट व्हिटनी", correct: false },
            { text: "माउंट मैकिन्ले (देनाली)", correct: true },
            { text: "माउंट एल्बर्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट मैकिन्ले, जिसे अब देनाली के नाम से जाना जाता है, अलास्का (संयुक्त राज्य अमेरिका) में स्थित है और यह उत्तरी अमेरिका का सबसे ऊँचा पर्वत शिखर है।"
    },
    {
        question: "'विंसन मासिफ' (Vinson Massif) किस महाद्वीप का सर्वोच्च पर्वत शिखर है?",
        answers: shuffle([
            { text: "अफ्रीका", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "अंटार्कटिका", correct: true },
            { text: "दक्षिण अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विंसन मासिफ अंटार्कटिका की एल्सवर्थ पर्वत श्रृंखला में स्थित है और यह इस महाद्वीप का सबसे ऊँचा पर्वत है।"
    },
    {
        question: "ऑस्ट्रेलिया का सबसे ऊँचा पर्वत शिखर कौन सा है?",
        answers: shuffle([
            { text: "माउंट कुक", correct: false },
            { text: "पुन्चक जया", correct: false },
            { text: "माउंट कोज़िउस्को", correct: true },
            { text: "माउंट विंसन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट कोज़िउस्को ऑस्ट्रेलिया की ग्रेट डिवाइडिंग रेंज में स्थित है और यह इस महाद्वीप का सबसे ऊँचा पर्वत शिखर है।"
    },
    {
        question: "'माउंट कुक' (Mount Cook), जिसे 'ऑराकी' भी कहते हैं, किस देश में स्थित है?",
        answers: shuffle([
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "न्यूजीलैंड", correct: true },
            { text: "फिजी", correct: false },
            { text: "पापुआ न्यू गिनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट कुक न्यूजीलैंड के दक्षिणी आल्प्स पर्वत श्रृंखला में स्थित है और यह देश का सबसे ऊँचा पर्वत है।"
    },
    {
        question: "'माउंट मैकिन्ले' को वर्तमान में किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "माउंट देनाली", correct: true },
            { text: "माउंट अलास्का", correct: false },
            { text: "माउंट हडसन", correct: false },
            { text: "माउंट एल्बर्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 2015 में, संयुक्त राज्य अमेरिका के राष्ट्रपति बराक ओबामा ने माउंट मैकिन्ले का नाम बदलकर 'देनाली' रख दिया, जो वहाँ के मूल निवासियों का नाम है।"
    },
    {
        question: "'माउंट ब्लैंक' (Mount Blanc) किस पर्वत श्रृंखला में स्थित है?",
        answers: shuffle([
            { text: "एंडीज़", correct: false },
            { text: "आल्प्स", correct: true },
            { text: "रॉकी", correct: false },
            { text: "काकेशस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट ब्लैंक आल्प्स पर्वत श्रृंखला का सबसे ऊँचा पर्वत है और यह फ्रांस तथा इटली की सीमा पर स्थित है।"
    },
    {
        question: "'पुन्चक जया' (Puncak Jaya) किस द्वीप का सबसे ऊँचा पर्वत शिखर है?",
        answers: shuffle([
            { text: "ग्रीनलैंड", correct: false },
            { text: "बोर्नियो", correct: false },
            { text: "न्यू गिनी", correct: true },
            { text: "मेडागास्कर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुन्चक जया इंडोनेशिया के पापुआ प्रांत में स्थित है और यह न्यू गिनी द्वीप तथा ओशिनिया का सबसे ऊँचा शिखर है।"
    },
    {
        question: "'माउंट फ़ूजी' (Mount Fuji) किस देश में स्थित एक प्रसिद्ध ज्वालामुखी पर्वत है?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "जापान", correct: true },
            { text: "दक्षिण कोरिया", correct: false },
            { text: "फिलीपींस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट फ़ूजी जापान का सबसे ऊँचा पर्वत और एक सक्रिय ज्वालामुखी है, जिसे जापान का राष्ट्रीय प्रतीक माना जाता है।"
    },
    {
        question: "भारत का सबसे ऊँचा पर्वत शिखर कौन सा है?",
        answers: shuffle([
            { text: "कंचनजंगा", correct: true },
            { text: "नंदा देवी", correct: false },
            { text: "माउंट एवरेस्ट", correct: false },
            { text: "नंगा पर्वत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कंचनजंगा भारत का सबसे ऊँचा पर्वत शिखर है, जो सिक्किम और नेपाल की सीमा पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> (नोट: कुछ स्रोतों के अनुसार, विवादित क्षेत्र में स्थित होने के कारण K2 को भारत का सर्वोच्च शिखर माना जाता है)।"
    },
    {
        question: "'माउंट एवरेस्ट' पर चढ़ने वाले पहले व्यक्ति कौन थे?",
        answers: shuffle([
            { text: "एडमंड हिलेरी और तेनजिंग नोर्गे", correct: true },
            { text: "जूनको ताबेई", correct: false },
            { text: "फु दोरजी", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूजीलैंड के एडमंड हिलेरी और नेपाल के तेनजिंग नोर्गे ने 29 मई 1953 को पहली बार माउंट एवरेस्ट की चोटी पर कदम रखा था।"
    },
    {
        question: "'माउंट मैकिन्ले' (देनाली) किस देश में स्थित है?",
        answers: shuffle([
            { text: "कनाडा", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: true },
            { text: "मेक्सिको", correct: false },
            { text: "रूस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट मैकिन्ले, जिसे देनाली भी कहा जाता है, संयुक्त राज्य अमेरिका के अलास्का राज्य में स्थित है।"
    },
    {
        question: "'नंदा देवी' पर्वत शिखर किस देश में स्थित है?",
        answers: shuffle([
            { text: "भारत", correct: true },
            { text: "नेपाल", correct: false },
            { text: "भूटान", correct: false },
            { text: "पाकिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नंदा देवी पर्वत भारत के उत्तराखंड राज्य में स्थित है और यह देश का दूसरा सबसे ऊँचा पर्वत शिखर है।"
    },
    {
        question: "'माउंट कैमरून' किस देश में स्थित एक सक्रिय ज्वालामुखी पर्वत है?",
        answers: shuffle([
            { text: "नाइजीरिया", correct: false },
            { text: "कैमरून", correct: true },
            { text: "घाना", correct: false },
            { text: "इथियोपिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट कैमरून पश्चिमी अफ्रीका के कैमरून देश में स्थित है और यह एक सक्रिय ज्वालामुखी है।"
    },
    {
        question: "'अटलास पर्वत' किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "अफ्रीका", correct: true },
            { text: "यूरोप", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अटलास पर्वत श्रृंखला उत्तर-पश्चिमी अफ्रीका में स्थित है, जो मोरक्को, अल्जीरिया और ट्यूनीशिया देशों से होकर गुजरती है।"
    },
    {
        question: "'ग्रेट डिवाइडिंग रेंज' किस देश की एक प्रमुख पर्वत श्रृंखला है?",
        answers: shuffle([
            { text: "कनाडा", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "ऑस्ट्रेलिया", correct: true },
            { text: "न्यूजीलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेट डिवाइडिंग रेंज ऑस्ट्रेलिया के पूर्वी तट के साथ-साथ चलती है और यह इस देश की सबसे लंबी पर्वत श्रृंखला है।"
    },
    {
        question: "'काकेशस पर्वत' किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "यूरोप और एशिया के बीच", correct: true },
            { text: "अफ्रीका", correct: false },
            { text: "उत्तरी अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काकेशस पर्वत श्रृंखला काला सागर और कैस्पियन सागर के बीच स्थित है और इसे यूरोप तथा एशिया के बीच की एक प्राकृतिक सीमा माना जाता है।"
    },
    {
        question: "'माउंट रेनियर' (Mount Rainier) किस देश में स्थित एक प्रसिद्ध ज्वालामुखी पर्वत है?",
        answers: shuffle([
            { text: "संयुक्त राज्य अमेरिका", correct: true },
            { text: "कनाडा", correct: false },
            { text: "मेक्सिको", correct: false },
            { text: "जापान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट रेनियर वाशिंगटन राज्य, संयुक्त राज्य अमेरिका में स्थित एक सक्रिय ज्वालामुखी है।"
    },
    {
        question: "'ब्लैंक फॉरेस्ट' (Black Forest) पर्वत किस देश में स्थित है?",
        answers: shuffle([
            { text: "फ्रांस", correct: false },
            { text: "जर्मनी", correct: true },
            { text: "स्विट्जरलैंड", correct: false },
            { text: "ऑस्ट्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्लैंक फॉरेस्ट (ब्लैक फॉरेस्ट) जर्मनी के बाडेन-वुर्टेमबर्ग राज्य में स्थित एक वन-आच्छादित पर्वत श्रृंखला है।"
    },
    {
        question: "'माउंट एवरेस्ट' किस देश और किस देश के बीच की सीमा पर स्थित है?",
        answers: shuffle([
            { text: "भारत और नेपाल", correct: false },
            { text: "नेपाल और चीन", correct: true },
            { text: "भारत और चीन", correct: false },
            { text: "भूटान और चीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट एवरेस्ट नेपाल और चीन (तिब्बत) की सीमा पर स्थित है।"
    },
    {
        question: "'एंडीज पर्वत' (Andes) किस महाद्वीप की सबसे लंबी पर्वत श्रृंखला है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "उत्तरी अमेरिका", correct: false },
            { text: "दक्षिण अमेरिका", correct: true },
            { text: "यूरोप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंडीज पर्वत श्रृंखला 7,000 किलोमीटर से अधिक लंबी है और यह दक्षिण अमेरिका के पश्चिमी तट के साथ-साथ स्थित है।"
    },
    {
        question: "'रॉकी पर्वत' (Rocky Mountains) किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "दक्षिण अमेरिका", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "उत्तरी अमेरिका", correct: true },
            { text: "अफ्रीका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रॉकी पर्वत श्रृंखला कनाडा और संयुक्त राज्य अमेरिका के पश्चिमी भागों में स्थित है।"
    },
    {
        question: "'माउंट एवरेस्ट' पर चढ़ने वाली पहली महिला कौन थीं?",
        answers: shuffle([
            { text: "जूनको ताबेई", correct: true },
            { text: "बछेंद्री पाल", correct: false },
            { text: "संतोष यादव", correct: false },
            { text: "डिकी डोल्मा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जापान की जूनको ताबेई 16 मई 1975 को माउंट एवरेस्ट पर सफलतापूर्वक चढ़ने वाली पहली महिला थीं।"
    },
    {
        question: "'माउंट एवरेस्ट' पर दो बार चढ़ने वाली पहली महिला कौन थीं?",
        answers: shuffle([
            { text: "बछेंद्री पाल", correct: false },
            { text: "संतोष यादव", correct: true },
            { text: "अरुणिमा सिन्हा", correct: false },
            { text: "डिकी डोल्मा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत की संतोष यादव विश्व की एकमात्र महिला पर्वतारोही हैं, जिन्होंने माउंट एवरेस्ट पर दो बार (1992 और 1993 में) सफलतापूर्वक चढ़ाई की।"
    },
    {
        question: "'एटलस पर्वत' का सबसे ऊँचा शिखर कौन सा है?",
        answers: shuffle([
            { text: "माउंट कैमरून", correct: false },
            { text: "माउंट टूबकल", correct: true },
            { text: "माउंट किलिमंजारो", correct: false },
            { text: "माउंट एवरेस्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट टूबकल (Mount Toubkal) मोरक्को में स्थित है और यह अटलास पर्वत श्रृंखला का सबसे ऊँचा शिखर है।"
    },
    {
        question: "'डेनाली' (Denali) पर्वत का पुराना नाम क्या था?",
        answers: shuffle([
            { text: "माउंट हडसन", correct: false },
            { text: "माउंट लोगन", correct: false },
            { text: "माउंट मैकिन्ले", correct: true },
            { text: "माउंट एल्बर्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 2015 में, संयुक्त राज्य अमेरिका के राष्ट्रपति बराक ओबामा ने माउंट मैकिन्ले का नाम बदलकर 'देनाली' रख दिया, जो अलास्का की मूल भाषा में 'महान' का अर्थ है।"
    },
    {
        question: "'माउंट फ़ूजी' किस प्रकार का पर्वत है?",
        answers: shuffle([
            { text: "वलित पर्वत", correct: false },
            { text: "ब्लॉक पर्वत", correct: false },
            { text: "ज्वालामुखी पर्वत", correct: true },
            { text: "अवशिष्ट पर्वत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट फ़ूजी जापान में स्थित एक सक्रिय ज्वालामुखी पर्वत है।"
    },
    {
        question: "'माउंट ब्लैंक' किस-किस देश की सीमा पर स्थित है?",
        answers: shuffle([
            { text: "जर्मनी और फ्रांस", correct: false },
            { text: "इटली और फ्रांस", correct: true },
            { text: "स्विट्जरलैंड और फ्रांस", correct: false },
            { text: "ऑस्ट्रिया और इटली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट ब्लैंक, जो आल्प्स पर्वत श्रृंखला का सबसे ऊँचा शिखर है, इटली और फ्रांस के बीच की सीमा पर स्थित है।"
    },
    {
        question: "'ग्रेट डिवाइडिंग रेंज' किस देश की सबसे लंबी पर्वत श्रृंखला है?",
        answers: shuffle([
            { text: "कनाडा", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "ऑस्ट्रेलिया", correct: true },
            { text: "न्यूजीलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेट डिवाइडिंग रेंज ऑस्ट्रेलिया के पूर्वी तट के समानांतर फैली हुई है।"
    },
    {
        question: "'नंदा देवी' पर्वत किस पर्वत श्रृंखला का हिस्सा है?",
        answers: shuffle([
            { text: "हिमालय", correct: true },
            { text: "सतपुड़ा", correct: false },
            { text: "विंध्य", correct: false },
            { text: "अरावली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नंदा देवी पर्वत भारत के उत्तराखंड राज्य में स्थित हिमालय का एक महत्वपूर्ण शिखर है।"
    },
    {
        question: "'कंचनजंगा' पर्वत शिखर की ऊँचाई कितनी है?",
        answers: shuffle([
            { text: "8,586 मीटर", correct: true },
            { text: "8,848 मीटर", correct: false },
            { text: "8,611 मीटर", correct: false },
            { text: "8,463 मीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कंचनजंगा विश्व का तीसरा सबसे ऊँचा पर्वत शिखर है, जिसकी ऊँचाई 8,586 मीटर है।"
    },
    {
        question: "'माउंट लोगन' (Mount Logan) किस देश का सर्वोच्च पर्वत शिखर है?",
        answers: shuffle([
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "कनाडा", correct: true },
            { text: "मेक्सिको", correct: false },
            { text: "रूस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट लोगन कनाडा के युकोन क्षेत्र में स्थित है और यह देश का सबसे ऊँचा पर्वत है।"
    },
    {
        question: "'एलब्रुस' (Elbrus) पर्वत किस पर्वत श्रृंखला का हिस्सा है?",
        answers: shuffle([
            { text: "आल्प्स", correct: false },
            { text: "यूराल", correct: false },
            { text: "काकेशस", correct: true },
            { text: "अप्पलेशियन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट एलब्रुस काकेशस पर्वत श्रृंखला में स्थित है और इसे यूरोप का सबसे ऊँचा शिखर माना जाता है।"
    },
    {
        question: "'पामीर पठार' (Pamir Knot) को अक्सर किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "विश्व की छत", correct: true },
            { text: "एशिया का हृदय", correct: false },
            { text: "पर्वतों का देश", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पामीर पठार को उसकी ऊँचाई और कई प्रमुख पर्वत श्रृंखलाओं का मिलन बिंदु होने के कारण 'विश्व की छत' कहा जाता है।"
    },
    {
        question: "'सिएरा नेवादा' (Sierra Nevada) पर्वत श्रृंखला किस देश में स्थित है?",
        answers: shuffle([
            { text: "मेक्सिको", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: true },
            { text: "कनाडा", correct: false },
            { text: "पेरू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिएरा नेवादा पर्वत श्रृंखला संयुक्त राज्य अमेरिका के कैलिफ़ोर्निया राज्य में स्थित है।"
    },
    {
        question: "'माउंट एवरेस्ट' पर चढ़ने वाली पहली भारतीय महिला कौन थीं?",
        answers: shuffle([
            { text: "संतोष यादव", correct: false },
            { text: "अरुणिमा सिन्हा", correct: false },
            { text: "बछेंद्री पाल", correct: true },
            { text: "डिकी डोल्मा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बछेंद्री पाल 1984 में माउंट एवरेस्ट पर चढ़ने वाली पहली भारतीय महिला बनीं।"
    },
    {
        question: "'माउंट फुजी' किस देश का सबसे ऊँचा पर्वत है?",
        answers: shuffle([
            { text: "जापान", correct: true },
            { text: "चीन", correct: false },
            { text: "दक्षिण कोरिया", correct: false },
            { text: "फिलीपींस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट फुजी जापान का एक प्रसिद्ध प्रतीक है और यह देश का सर्वोच्च शिखर है।"
    },
    {
        question: "'अंटार्कटिका' महाद्वीप का सबसे ऊँचा शिखर कौन सा है?",
        answers: shuffle([
            { text: "माउंट एवरेस्ट", correct: false },
            { text: "माउंट किलिमंजारो", correct: false },
            { text: "विंसन मासिफ", correct: true },
            { text: "माउंट एलब्रुस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विंसन मासिफ अंटार्कटिका महाद्वीप का सर्वोच्च पर्वत शिखर है।"
    },
    {
        question: "'माउंट कोज़िउस्को' किस देश में स्थित है?",
        answers: shuffle([
            { text: "ऑस्ट्रेलिया", correct: true },
            { text: "न्यूजीलैंड", correct: false },
            { text: "इंडोनेशिया", correct: false },
            { text: "पापुआ न्यू गिनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट कोज़िउस्को ऑस्ट्रेलिया की सबसे ऊँची चोटी है, जो ग्रेट डिवाइडिंग रेंज में स्थित है।"
    },
    {
        question: "'माउंट रेनिएर' किस प्रकार का पर्वत है?",
        answers: shuffle([
            { text: "वलित पर्वत", correct: false },
            { text: "ब्लॉक पर्वत", correct: false },
            { text: "ज्वालामुखी पर्वत", correct: true },
            { text: "अवशिष्ट पर्वत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट रेनिएर संयुक्त राज्य अमेरिका के वाशिंगटन राज्य में स्थित एक सक्रिय ज्वालामुखी है।"
    },
    {
        question: "'माउंट मेरापी' (Mount Merapi) किस देश में स्थित एक प्रसिद्ध ज्वालामुखी है?",
        answers: shuffle([
            { text: "जापान", correct: false },
            { text: "फिलीपींस", correct: false },
            { text: "इंडोनेशिया", correct: true },
            { text: "चीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट मेरापी इंडोनेशिया में स्थित एक अत्यधिक सक्रिय ज्वालामुखी है।"
    },
    {
        question: "'मैकालू' (Makalu) पर्वत शिखर किस पर्वत श्रृंखला का हिस्सा है?",
        answers: shuffle([
            { text: "काराकोरम", correct: false },
            { text: "हिंदू कुश", correct: false },
            { text: "हिमालय", correct: true },
            { text: "एंडीज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मैकालू, जो विश्व का पाँचवाँ सबसे ऊँचा पर्वत है, नेपाल और चीन की सीमा पर हिमालय पर्वत श्रृंखला में स्थित है।"
    },
    {
        question: "'किलिमंजारो' पर्वत किस देश में स्थित है?",
        answers: shuffle([
            { text: "केन्या", correct: false },
            { text: "युगांडा", correct: false },
            { text: "तंजानिया", correct: true },
            { text: "रवांडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट किलिमंजारो, अफ्रीका का सबसे ऊँचा पर्वत, तंजानिया में स्थित है।"
    },
    {
        question: "'एकांकागुआ' पर्वत शिखर किस पर्वत श्रृंखला का सबसे ऊँचा बिंदु है?",
        answers: shuffle([
            { text: "रॉकी", correct: false },
            { text: "एंडीज", correct: true },
            { text: "आल्प्स", correct: false },
            { text: "ग्रेट डिवाइडिंग रेंज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एकांकागुआ एंडीज पर्वत श्रृंखला का सबसे ऊँचा शिखर है।"
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