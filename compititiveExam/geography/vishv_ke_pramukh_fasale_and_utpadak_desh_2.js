const questions = [ 
    {
        topHeading: "विश्व के प्रमुख फसले एवं उत्पादक देश पर आधारित बहुविकल्पीय प्रश्न (MCQs) part 2  (quiz_no. 64)."
    },
    {
        question: "ज्वार (Sorghum) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "सूडान", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: true },
            { text: "नाइजीरिया", correct: false },
            { text: "मेक्सिको", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संयुक्त राज्य अमेरिका विश्व में ज्वार का सबसे बड़ा उत्पादक है, जबकि नाइजीरिया और सूडान जैसे देश भी प्रमुख उत्पादकों में शामिल हैं।"
    },
    {
        question: "जौ (Barley) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "जर्मनी", correct: false },
            { text: "रूस", correct: true },
            { text: "फ्रांस", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रूस विश्व में जौ का सबसे बड़ा उत्पादक है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका उपयोग मुख्य रूप से माल्ट बनाने, पशु चारा और बीयर उद्योग में होता है।"
    },
    {
        question: "रेंडी (Castor) बीज का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "भारत", correct: true },
            { text: "ब्राजील", correct: false },
            { text: "मोज़ाम्बिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत विश्व में रेंडी बीज का सबसे बड़ा उत्पादक है, जिसका उपयोग रेंडी के तेल के उत्पादन में किया जाता है।"
    },
    {
        question: "सूरजमुखी का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "यूक्रेन", correct: false },
            { text: "रूस", correct: true },
            { text: "अर्जेंटीना", correct: false },
            { text: "रोमानिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रूस और यूक्रेन दोनों ही सूरजमुखी के प्रमुख उत्पादक हैं, लेकिन रूस वर्तमान में शीर्ष स्थान पर है।"
    },
    {
        question: "जई (Oats) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "रूस", correct: true },
            { text: "कनाडा", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रूस विश्व में जई का सबसे बड़ा उत्पादक देश है।"
    },
    {
        question: "अंगूर का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "चीन", correct: true },
            { text: "इटली", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "फ्रांस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में अंगूर का सबसे बड़ा उत्पादक देश है।"
    },
    {
        question: "बादाम (Almonds) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "ईरान", correct: false },
            { text: "स्पेन", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संयुक्त राज्य अमेरिका, विशेष रूप से कैलिफोर्निया राज्य, विश्व में बादाम का सबसे बड़ा उत्पादक है।"
    },
    {
        question: "अखरोट (Walnuts) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "चीन", correct: true },
            { text: "ईरान", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में अखरोट का सबसे बड़ा उत्पादक देश है।"
    },
    {
        question: "दालें (Pulses) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "कनाडा", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "भारत", correct: true },
            { text: "चीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत विश्व में दालों का सबसे बड़ा उत्पादक और उपभोक्ता दोनों है।"
    },
    {
        question: "चुकंदर (Sugar Beet) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "फ्रांस", correct: false },
            { text: "रूस", correct: true },
            { text: "जर्मनी", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रूस विश्व में चुकंदर का सबसे बड़ा उत्पादक है, जिसका उपयोग चीनी उत्पादन के लिए किया जाता है।"
    },
    {
        question: "प्याज (Onion) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "चीन", correct: true },
            { text: "मिस्र", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में प्याज का सबसे बड़ा उत्पादक देश है।"
    },
    {
        question: "टमाटर का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "तुर्की", correct: false },
            { text: "भारत", correct: false },
            { text: "चीन", correct: true },
            { text: "संयुक्त राज्य अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में टमाटर का सबसे बड़ा उत्पादक है, जिसका उपयोग ताजे और प्रसंस्कृत दोनों रूपों में होता है।"
    },
    {
        question: "सेब (Apples) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "पोलैंड", correct: false },
            { text: "तुर्की", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "चीन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में सेब का सबसे बड़ा उत्पादक देश है।"
    },
    {
        question: "केले (Bananas) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "इक्वाडोर", correct: false },
            { text: "ब्राजील", correct: false },
            { text: "भारत", correct: true },
            { text: "फिलीपींस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत विश्व में केले का सबसे बड़ा उत्पादक है, जबकि इक्वाडोर सबसे बड़ा निर्यातक है।"
    },
    {
        question: "जैतून (Olive) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "इटली", correct: false },
            { text: "स्पेन", correct: true },
            { text: "ग्रीस", correct: false },
            { text: "तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्पेन विश्व में जैतून का सबसे बड़ा उत्पादक है और जैतून के तेल का भी सबसे बड़ा उत्पादक है।"
    },
    {
        question: "विश्व में किस देश को 'चीनी का कटोरा' कहा जाता है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "ब्राजील", correct: false },
            { text: "क्यूबा", correct: true },
            { text: "ऑस्ट्रेलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्यूबा को ऐतिहासिक रूप से 'चीनी का कटोरा' कहा जाता है, हालांकि वर्तमान में ब्राजील और भारत गन्ना उत्पादन में आगे हैं।"
    },
    {
        question: "प्राकृतिक रेशम का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "चीन", correct: true },
            { text: "थाईलैंड", correct: false },
            { text: "उज्बेकिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में प्राकृतिक रेशम का सबसे बड़ा उत्पादक है।"
    },
    {
        question: "पिस्ता (Pistachios) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "ईरान", correct: true },
            { text: "तुर्की", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "चीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ईरान विश्व में पिस्ता का सबसे बड़ा उत्पादक है।"
    },
    {
        question: "लहसुन (Garlic) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "रूस", correct: false },
            { text: "चीन", correct: true },
            { text: "स्पेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में लहसुन का सबसे बड़ा उत्पादक है, और इसका बहुत बड़ा हिस्सा निर्यात भी करता है।"
    },
    {
        question: "तरबूज (Watermelon) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "तुर्की", correct: false },
            { text: "ईरान", correct: false },
            { text: "चीन", correct: true },
            { text: "ब्राजील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में तरबूज का सबसे बड़ा उत्पादक है।"
    },
    {
        question: "कोको (Cocoa) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "घाना", correct: false },
            { text: "कोटे डी आइवर", correct: true },
            { text: "ब्राजील", correct: false },
            { text: "इंडोनेशिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोटे डी आइवर विश्व में कोको का सबसे बड़ा उत्पादक है।"
    },
    {
        question: "स्ट्रॉबेरी (Strawberry) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "मेक्सिको", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "तुर्की", correct: false },
            { text: "चीन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में स्ट्रॉबेरी का सबसे बड़ा उत्पादक है।"
    },
    {
        question: "शकरकंद (Sweet Potato) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "चीन", correct: true },
            { text: "नाइजीरिया", correct: false },
            { text: "इथियोपिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन शकरकंद का सबसे बड़ा उत्पादक है, जिसका उपयोग मानव और पशु आहार दोनों में होता है।"
    },
    {
        question: "अनानास (Pineapple) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "कोस्टारिका", correct: false },
            { text: "फिलीपींस", correct: true },
            { text: "ब्राजील", correct: false },
            { text: "थाईलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फिलीपींस विश्व में अनानास का सबसे बड़ा उत्पादक है, जिसके बाद कोस्टा रिका और इंडोनेशिया का स्थान आता है।"
    },
    {
        question: "खरबूजा (Melon) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "चीन", correct: true },
            { text: "तुर्की", correct: false },
            { text: "ईरान", correct: false },
            { text: "स्पेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में खरबूजे का सबसे बड़ा उत्पादक देश है।"
    },
    {
        question: "ज्वार (Sorghum) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "नाइजीरिया", correct: false },
            { text: "भारत", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: true },
            { text: "मेक्सिको", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संयुक्त राज्य अमेरिका विश्व में ज्वार का सबसे बड़ा उत्पादक देश है।"
    },
    {
        question: "बाजरा (Millet) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "नाइजीरिया", correct: false },
            { text: "भारत", correct: true },
            { text: "चीन", correct: false },
            { text: "सूडान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत विश्व में बाजरा का सबसे बड़ा उत्पादक देश है।"
    },
    {
        question: "जई (Oats) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "कनाडा", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "रूस", correct: true },
            { text: "पोलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रूस विश्व में जई का सबसे बड़ा उत्पादक है, जिसके बाद कनाडा और पोलैंड का स्थान आता है।"
    },
    {
        question: "रबर का दूसरा सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "थाईलैंड", correct: false },
            { text: "मलेशिया", correct: false },
            { text: "वियतनाम", correct: false },
            { text: "इंडोनेशिया", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थाईलैंड के बाद इंडोनेशिया प्राकृतिक रबर का दूसरा सबसे बड़ा उत्पादक है।"
    },
    {
        question: "मूंगफली (Groundnut) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "चीन", correct: true },
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "सूडान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में मूंगफली का सबसे बड़ा उत्पादक है।"
    },
    {
        question: "विश्व में मछली का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "चीन", correct: true },
            { text: "पेरू", correct: false },
            { text: "इंडोनेशिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में मछली का सबसे बड़ा उत्पादक देश है, जिसमें जलीय कृषि (aquaculture) का बड़ा योगदान है।"
    },
    {
        question: "बादाम (Almonds) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "ईरान", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "स्पेन", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संयुक्त राज्य अमेरिका, खासकर कैलिफ़ोर्निया राज्य, विश्व में बादाम का सबसे बड़ा उत्पादक है।"
    },
    {
        question: "अखरोट (Walnuts) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "चीन", correct: true },
            { text: "ईरान", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में अखरोट का सबसे बड़ा उत्पादक देश है।"
    },
    {
        question: "संतरा (Orange) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "चीन", correct: false },
            { text: "ब्राजील", correct: true },
            { text: "मेक्सिको", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्राजील विश्व में संतरे का सबसे बड़ा उत्पादक देश है।"
    },
    {
        question: "विश्व में दालों (Pulses) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "भारत", correct: true },
            { text: "कनाडा", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत दालों का सबसे बड़ा उत्पादक और उपभोक्ता दोनों है।"
    },
    {
        question: "कोको (Cocoa) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "घाना", correct: false },
            { text: "कोटे डी आइवर", correct: true },
            { text: "इंडोनेशिया", correct: false },
            { text: "ब्राजील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोटे डी आइवर विश्व में कोको का सबसे बड़ा उत्पादक है।"
    },
    {
        question: "विश्व में किस देश में दूध का सबसे अधिक उत्पादन होता है?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "भारत", correct: true },
            { text: "न्यूजीलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत विश्व में दूध का सबसे बड़ा उत्पादक है।"
    },
    {
        question: "प्राकृतिक रेशम (Natural Silk) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "चीन", correct: true },
            { text: "थाईलैंड", correct: false },
            { text: "उज्बेकिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में प्राकृतिक रेशम का सबसे बड़ा उत्पादक है।"
    },
    {
        question: "विश्व में चुकंदर (Sugar Beet) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "फ्रांस", correct: false },
            { text: "जर्मनी", correct: false },
            { text: "रूस", correct: true },
            { text: "संयुक्त राज्य अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रूस विश्व में चुकंदर का सबसे बड़ा उत्पादक है, जिसका उपयोग चीनी बनाने के लिए किया जाता है।"
    },
    {
        question: "अंगूर का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "इटली", correct: false },
            { text: "चीन", correct: true },
            { text: "फ्रांस", correct: false },
            { text: "स्पेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में अंगूर का सबसे बड़ा उत्पादक देश है।"
    },
    {
        question: "सेब (Apples) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "चीन", correct: true },
            { text: "तुर्की", correct: false },
            { text: "पोलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में सेब का सबसे बड़ा उत्पादक है।"
    },
    {
        question: "केला (Bananas) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "भारत", correct: true },
            { text: "इक्वाडोर", correct: false },
            { text: "ब्राजील", correct: false },
            { text: "फिलीपींस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत विश्व में केले का सबसे बड़ा उत्पादक है।"
    },
    {
        question: "विश्व में सबसे अधिक टमाटर का उत्पादन किस देश में होता है?",
        answers: shuffle([
            { text: "तुर्की", correct: false },
            { text: "भारत", correct: false },
            { text: "चीन", correct: true },
            { text: "संयुक्त राज्य अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में टमाटर का सबसे बड़ा उत्पादक देश है।"
    },
    {
        question: "विश्व में प्याज का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "चीन", correct: true },
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "मिस्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में प्याज का सबसे बड़ा उत्पादक है।"
    },
    {
        question: "शकरकंद (Sweet Potato) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "नाइजीरिया", correct: false },
            { text: "चीन", correct: true },
            { text: "इथियोपिया", correct: false },
            { text: "भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन शकरकंद का सबसे बड़ा उत्पादक है।"
    },
    {
        question: "अनानास (Pineapple) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "कोस्टारिका", correct: false },
            { text: "फिलीपींस", correct: true },
            { text: "ब्राजील", correct: false },
            { text: "थाईलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फिलीपींस विश्व में अनानास का सबसे बड़ा उत्पादक और निर्यातक है।"
    },
    {
        question: "खरबूजा (Melon) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "चीन", correct: true },
            { text: "तुर्की", correct: false },
            { text: "ईरान", correct: false },
            { text: "स्पेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में खरबूजे का सबसे बड़ा उत्पादक देश है।"
    },
    {
        question: "किस देश को 'मसालों का बगीचा' (Spice Garden) कहा जाता है?",
        answers: shuffle([
            { text: "भारत", correct: true },
            { text: "श्रीलंका", correct: false },
            { text: "इंडोनेशिया", correct: false },
            { text: "थाईलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत को उसके विविध और प्रचुर मात्रा में मसालों के उत्पादन के कारण 'मसालों का बगीचा' कहा जाता है।"
    },
    {
        question: "विश्व में केसर (Saffron) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "स्पेन", correct: false },
            { text: "ईरान", correct: true },
            { text: "भारत", correct: false },
            { text: "ग्रीस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ईरान विश्व में केसर का सबसे बड़ा उत्पादक देश है।"
    },
    {
        question: "जैतून (Olive) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "इटली", correct: false },
            { text: "ग्रीस", correct: false },
            { text: "स्पेन", correct: true },
            { text: "तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्पेन विश्व में जैतून का सबसे बड़ा उत्पादक देश है।"
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