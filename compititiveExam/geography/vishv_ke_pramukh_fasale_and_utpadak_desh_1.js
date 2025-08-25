const questions = [ 
    {
        topHeading: "विश्व के प्रमुख फसले एवं उत्पादक देश पर आधारित बहुविकल्पीय प्रश्न (MCQs) part 1  (quiz_no. 63)"
    },
    {
        question: "विश्व में चावल का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "चीन", correct: true },
            { text: "इंडोनेशिया", correct: false },
            { text: "बांग्लादेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में चावल का सबसे बड़ा उत्पादक देश है, इसके बाद भारत का स्थान आता है।<br><br><i class='fa-solid fa-angles-right icon'></i> चीन अपनी बड़ी आबादी के लिए बड़ी मात्रा में चावल का उत्पादन करता है।"
    },
    {
        question: "गेहूँ का सर्वाधिक उत्पादन करने वाला देश कौन सा है?",
        answers: shuffle([
            { text: "रूस", correct: false },
            { text: "भारत", correct: false },
            { text: "चीन", correct: true },
            { text: "संयुक्त राज्य अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में गेहूँ का सबसे बड़ा उत्पादक है, जबकि भारत दूसरे और रूस तीसरे स्थान पर है।"
    },
    {
        question: "मक्का का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "ब्राजील", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: true },
            { text: "अर्जेंटीना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संयुक्त राज्य अमेरिका विश्व में मक्का का सबसे बड़ा उत्पादक है, जिसका उपयोग मुख्य रूप से पशु चारा और इथेनॉल उत्पादन में होता है।"
    },
    {
        question: "जूट का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "भारत", correct: true },
            { text: "बांग्लादेश", correct: false },
            { text: "चीन", correct: false },
            { text: "पाकिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत विश्व में जूट का सबसे बड़ा उत्पादक है, जबकि बांग्लादेश दूसरे स्थान पर है।<br><br><i class='fa-solid fa-angles-right icon'></i> जूट का उपयोग बोरे, थैले और अन्य पैकेजिंग सामग्री बनाने में किया जाता है।"
    },
    {
        question: "कॉफी का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "कोलंबिया", correct: false },
            { text: "वियतनाम", correct: false },
            { text: "ब्राजील", correct: true },
            { text: "इथियोपिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्राजील विश्व में कॉफी का सबसे बड़ा उत्पादक और निर्यातक देश है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके बाद वियतनाम और कोलंबिया का स्थान आता है।"
    },
    {
        question: "गन्ना (Sugarcane) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "चीन", correct: false },
            { text: "ब्राजील", correct: true },
            { text: "क्यूबा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्राजील विश्व में गन्ने का सबसे बड़ा उत्पादक है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका उपयोग मुख्य रूप से चीनी और इथेनॉल उत्पादन के लिए किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत दूसरा सबसे बड़ा उत्पादक है।"
    },
    {
        question: "चाय का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "श्रीलंका", correct: false },
            { text: "चीन", correct: true },
            { text: "केन्या", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में चाय का सबसे बड़ा उत्पादक देश है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके बाद भारत और केन्या का स्थान आता है।"
    },
    {
        question: "कपास (Cotton) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "चीन", correct: true },
            { text: "भारत", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "पाकिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में कपास का सबसे बड़ा उत्पादक है, जबकि भारत दूसरे स्थान पर है।"
    },
    {
        question: "रबड़ (Rubber) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "मलेशिया", correct: false },
            { text: "थाईलैंड", correct: true },
            { text: "इंडोनेशिया", correct: false },
            { text: "वियतनाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थाईलैंड विश्व में प्राकृतिक रबड़ का सबसे बड़ा उत्पादक है।"
    },
    {
        question: "तंबाकू का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "ब्राजील", correct: false },
            { text: "चीन", correct: true },
            { text: "संयुक्त राज्य अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में तंबाकू का सबसे बड़ा उत्पादक है।"
    },
    {
        question: "विश्व में दलहन (Pulses) का सबसे बड़ा उत्पादक और उपभोक्ता देश कौन सा है?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "भारत", correct: true },
            { text: "ब्राजील", correct: false },
            { text: "कनाडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत विश्व में दलहन का सबसे बड़ा उत्पादक और साथ ही सबसे बड़ा उपभोक्ता देश भी है।"
    },
    {
        question: "सोयाबीन का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "अर्जेंटीना", correct: false },
            { text: "चीन", correct: false },
            { text: "ब्राजील", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संयुक्त राज्य अमेरिका विश्व में सोयाबीन का सबसे बड़ा उत्पादक है, जिसके बाद ब्राजील और अर्जेंटीना का स्थान आता है।"
    },
    {
        question: "आलू का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "रूस", correct: false },
            { text: "भारत", correct: false },
            { text: "चीन", correct: true },
            { text: "पेरू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में आलू का सबसे बड़ा उत्पादक देश है।"
    },
    {
        question: "प्याज का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "चीन", correct: true },
            { text: "भारत", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "मिस्र", correct: false }
        ]),
        Explanation: "<i class-solid fa-angles-right icon'></i> चीन विश्व में प्याज का सबसे बड़ा उत्पादक देश है, उसके बाद भारत का स्थान आता है।"
    },
    {
        question: "नारियल का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "श्रीलंका", correct: false },
            { text: "फिलीपींस", correct: false },
            { text: "इंडोनेशिया", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंडोनेशिया विश्व में नारियल का सबसे बड़ा उत्पादक देश है।"
    },
    {
        question: "केला का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "ब्राजील", correct: false },
            { text: "भारत", correct: true },
            { text: "चीन", correct: false },
            { text: "इक्वाडोर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत विश्व में केला का सबसे बड़ा उत्पादक है, हालाँकि इक्वाडोर इसका सबसे बड़ा निर्यातक है।"
    },
    {
        question: "सबसे अधिक मूंगफली का उत्पादन करने वाला देश कौन सा है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "चीन", correct: true },
            { text: "नाइजीरिया", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में मूंगफली का सबसे बड़ा उत्पादक देश है।"
    },
    {
        question: "सेब का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "चीन", correct: true },
            { text: "तुर्की", correct: false },
            { text: "पोलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में सेब का सबसे बड़ा उत्पादक है।"
    },
    {
        question: "सूरजमुखी (Sunflower) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "यूक्रेन", correct: false },
            { text: "रूस", correct: true },
            { text: "अर्जेंटीना", correct: false },
            { text: "चीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रूस विश्व में सूरजमुखी के तेल का सबसे बड़ा उत्पादक देश है।"
    },
    {
        question: "कोको (Cocoa) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "ब्राजील", correct: false },
            { text: "घाना", correct: false },
            { text: "कोटे डी आइवर", correct: true },
            { text: "नाइजीरिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोटे डी आइवर विश्व में कोको का सबसे बड़ा उत्पादक है।"
    },
    {
        question: "अंगूर का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "इटली", correct: false },
            { text: "फ्रांस", correct: false },
            { text: "चीन", correct: true },
            { text: "स्पेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में अंगूर का सबसे बड़ा उत्पादक देश है।"
    },
    {
        question: "विश्व में दूध का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "भारत", correct: true },
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "न्यूजीलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत विश्व में दूध का सबसे बड़ा उत्पादक है।"
    },
    {
        question: "दालचीनी (Cinnamon) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "श्रीलंका", correct: false },
            { text: "चीन", correct: true },
            { text: "वियतनाम", correct: false },
            { text: "इंडोनेशिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में दालचीनी का सबसे बड़ा उत्पादक है।"
    },
    {
        question: "प्राकृतिक रेशम (Natural Silk) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "चीन", correct: true },
            { text: "थाईलैंड", correct: false },
            { text: "उज़्बेकिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में प्राकृतिक रेशम का सबसे बड़ा उत्पादक है।"
    },
    {
        question: "काली मिर्च (Black Pepper) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "वियतनाम", correct: true },
            { text: "ब्राजील", correct: false },
            { text: "इंडोनेशिया", correct: false },
            { text: "भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वियतनाम विश्व में काली मिर्च का सबसे बड़ा उत्पादक देश है।"
    },
    {
        question: "कॉफी का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "कोलंबिया", correct: false },
            { text: "वियतनाम", correct: false },
            { text: "ब्राजील", correct: true },
            { text: "इथियोपिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्राजील विश्व में कॉफी का सबसे बड़ा उत्पादक और निर्यातक देश है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके बाद वियतनाम और कोलंबिया का स्थान आता है।"
    },
    {
        question: "इलायची (Cardamom) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "ग्वाटेमाला", correct: true },
            { text: "श्रीलंका", correct: false },
            { text: "चीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्वाटेमाला विश्व में इलायची का सबसे बड़ा उत्पादक है, जो इसे सबसे बड़े निर्यातक के रूप में भी स्थापित करता है।"
    },
    {
        question: "जैतून (Olive) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "ग्रीस", correct: false },
            { text: "इटली", correct: false },
            { text: "स्पेन", correct: true },
            { text: "तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्पेन विश्व में जैतून का सबसे बड़ा उत्पादक देश है और दुनिया के आधे से अधिक जैतून के तेल का उत्पादन करता है।"
    },
    {
        question: "प्राकृतिक रबड़ का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "मलेशिया", correct: false },
            { text: "थाईलैंड", correct: true },
            { text: "इंडोनेशिया", correct: false },
            { text: "वियतनाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थाईलैंड विश्व में प्राकृतिक रबड़ का सबसे बड़ा उत्पादक है, जिसके बाद इंडोनेशिया और वियतनाम का स्थान आता है।"
    },
    {
        question: "केसर (Saffron) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "स्पेन", correct: false },
            { text: "भारत", correct: false },
            { text: "ईरान", correct: true },
            { text: "ग्रीस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ईरान विश्व में केसर का सबसे बड़ा उत्पादक है, और दुनिया के 90% से अधिक केसर का उत्पादन करता है।"
    },
    {
        question: "नारियल (Coconut) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "इंडोनेशिया", correct: true },
            { text: "फिलीपींस", correct: false },
            { text: "ब्राजील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंडोनेशिया विश्व में नारियल का सबसे बड़ा उत्पादक है, इसके बाद फिलीपींस और भारत का स्थान है।"
    },
    {
        question: "काजू (Cashew) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "वियतनाम", correct: false },
            { text: "नाइजीरिया", correct: false },
            { text: "कोटे डी आइवर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोटे डी आइवर विश्व मंश काजू का सबसे बड़ा उत्पादक है, जिसने भारत और वियतनाम को पीछे छोड़ दिया है।"
    },
    {
        question: "काली मिर्च (Black Pepper) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "इंडोनेशिया", correct: false },
            { text: "ब्राजील", correct: false },
            { text: "वियतनाम", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वियतनाम विश्व में काली मिर्च का सबसे बड़ा उत्पादक और निर्यातक है।"
    },
    {
        question: "संतरा (Orange) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "स्पेन", correct: false },
            { text: "ब्राजील", correct: true },
            { text: "चीन", correct: false },
            { text: "भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्राजील विश्व में संतरे का सबसे बड़ा उत्पादक है, जिसका उपयोग मुख्य रूप से संतरे का रस बनाने के लिए किया जाता है।"
    },
    {
        question: "विश्व में दुग्ध उत्पादन में भारत का कौन सा स्थान है?",
        answers: shuffle([
            { text: "दूसरा", correct: false },
            { text: "पहला", correct: true },
            { text: "तीसरा", correct: false },
            { text: "चौथा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत विश्व में दुग्ध उत्पादन में पहले स्थान पर है, जो अपने घरेलू खपत को पूरा करता है।"
    },
    {
        question: "विश्व में किस देश को 'चीनी का कटोरा' (Sugar Bowl of the World) कहा जाता है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "ब्राजील", correct: false },
            { text: "क्यूबा", correct: true },
            { text: "ऑस्ट्रेलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्यूबा को ऐतिहासिक रूप से 'चीनी का कटोरा' कहा जाता है, हालांकि वर्तमान में ब्राजील और भारत जैसे देश गन्ना उत्पादन में आगे हैं।"
    },
    {
        question: "आलू का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "चीन", correct: true },
            { text: "रूस", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में आलू का सबसे बड़ा उत्पादक है।"
    },
    {
        question: "तम्बाकू का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "चीन", correct: true },
            { text: "ब्राजील", correct: false },
            { text: "इंडोनेशिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में तम्बाकू का सबसे बड़ा उत्पादक देश है।"
    },
    {
        question: "विश्व में किस देश को 'मसालों का बगीचा' (Spice Garden) कहा जाता है?",
        answers: shuffle([
            { text: "भारत", correct: true },
            { text: "श्रीलंका", correct: false },
            { text: "थाईलैंड", correct: false },
            { text: "इंडोनेशिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत अपने विविध और प्रचुर मात्रा में मसालों के उत्पादन के कारण 'मसालों का बगीचा' कहलाता है।"
    },
    {
        question: "कपास (Cotton) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "चीन", correct: true },
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "पाकिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में कपास का सबसे बड़ा उत्पादक है, जबकि भारत दूसरे स्थान पर है।"
    },
    {
        question: "सोयाबीन का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "अर्जेंटीना", correct: false },
            { text: "ब्राजील", correct: true },
            { text: "संयुक्त राज्य अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i>  ब्राजील विश्व में सोयाबीन का सबसे बड़ा उत्पादक है, जिसके बाद संयुक्त राज्य अमेरिका और अर्जेंटीना का स्थान आता है।"
    },
    {
        question: "विश्व में अंडे का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "चीन", correct: true },
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "ब्राजील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में अंडे का सबसे बड़ा उत्पादक देश है।"
    },
    {
        question: "विश्व में मांस का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "ब्राजील", correct: false },
            { text: "चीन", correct: true },
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में मांस का सबसे बड़ा उत्पादक है।"
    },
    {
        question: "शहद का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "चीन", correct: true },
            { text: "तुर्की", correct: false },
            { text: "रूस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में शहद का सबसे बड़ा उत्पादक देश है।"
    },
    {
        question: "चाय का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "श्रीलंका", correct: false },
            { text: "चीन", correct: true },
            { text: "केन्या", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में चाय का सबसे बड़ा उत्पादक देश है, जिसके बाद भारत का स्थान आता है।"
    },
    {
        question: "विश्व में केले का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "इक्वाडोर", correct: false },
            { text: "भारत", correct: true },
            { text: "चीन", correct: false },
            { text: "फिलीपींस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत विश्व में केले का सबसे बड़ा उत्पादक है, हालांकि इक्वाडोर सबसे बड़ा निर्यातक है।"
    },
    {
        question: "चुकंदर (Sugar Beet) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "रूस", correct: true },
            { text: "फ्रांस", correct: false },
            { text: "जर्मनी", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रूस विश्व में चुकंदर का सबसे बड़ा उत्पादक देश है, जिसका उपयोग चीनी बनाने में किया जाता है।"
    },
    {
        question: "अंगूर का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "इटली", correct: false },
            { text: "फ्रांस", correct: false },
            { text: "चीन", correct: true },
            { text: "स्पेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में अंगूर का सबसे बड़ा उत्पादक देश है, जिसका एक बड़ा हिस्सा वाइन उत्पादन में उपयोग होता है।"
    },
    {
        question: "मूंगफली का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "भारत", correct: false },
            { text: "चीन", correct: true },
            { text: "नाइजीरिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में मूंगफली का सबसे बड़ा उत्पादक है, इसके बाद भारत का स्थान आता है।"
    },
    {
        question: "सोयाबीन का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "ब्राजील", correct: true },
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "अर्जेंटीना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्राजील विश्व में सोयाबीन का सबसे बड़ा उत्पादक है, जिसके बाद संयुक्त राज्य अमेरिका और अर्जेंटीना का स्थान आता है।"
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