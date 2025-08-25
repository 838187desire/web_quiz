const questions = [
    {
        topHeading: "विश्व के प्रमुख फसले एवं उत्पादक देश पर आधारित बहुविकल्पीय प्रश्न (MCQs) part 3  (quiz_no. 65)."
    },
    {
        question: "ज्वार (Sorghum) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "नाइजीरिया", correct: false },
            { text: "भारत", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: true },
            { text: "मेक्सिको", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संयुक्त राज्य अमेरिका विश्व में ज्वार का सबसे बड़ा उत्पादक देश है, जिसका उपयोग मुख्य रूप से भोजन और पशु चारा के लिए होता है।"
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
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फिलीपींस विश्व में अनानास का सबसे बड़ा उत्पादक है।"
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
    },
    {
        question: "लौंग (Cloves) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "श्रीलंका", correct: false },
            { text: "मेडागास्कर", correct: false },
            { text: "इंडोनेशिया", correct: true },
            { text: "तंजानिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंडोनेशिया विश्व में लौंग का सबसे बड़ा उत्पादक है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका उपयोग मुख्य रूप से सिगरेट (kretek) और पारंपरिक दवाइयों में होता है।"
    },
    {
        question: "जायफल (Nutmeg) और जावित्री (Mace) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "इंडोनेशिया", correct: true },
            { text: "श्रीलंका", correct: false },
            { text: "ग्रेनाडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंडोनेशिया विश्व में जायफल और जावित्री का सबसे बड़ा उत्पादक है, जहाँ इसका उत्पादन 'बंदा' द्वीपों पर केंद्रित है।"
    },
    {
        question: "लंबी रेशे वाली कपास (Long-staple cotton) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "मिस्र", correct: true },
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिस्र अपनी उच्च गुणवत्ता और लंबी रेशे वाली कपास के लिए प्रसिद्ध है, जिसे 'मिस्र की कपास' के नाम से जाना जाता है।"
    },
    {
        question: "पाम तेल (Palm Oil) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "थाईलैंड", correct: false },
            { text: "मलेशिया", correct: false },
            { text: "इंडोनेशिया", correct: true },
            { text: "नाइजीरिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंडोनेशिया विश्व में पाम तेल का सबसे बड़ा उत्पादक है, जिसके बाद मलेशिया का स्थान आता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका उपयोग खाद्य उत्पादों और जैव ईंधन में होता है।"
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
        question: "ओट्स (Oats) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "कनाडा", correct: false },
            { text: "रूस", correct: true },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रूस विश्व में ओट्स का सबसे बड़ा उत्पादक देश है, जिसका उपयोग अनाज और पशु चारा के लिए किया जाता है।"
    },
    {
        question: "सूरजमुखी का दूसरा सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "अर्जेंटीना", correct: false },
            { text: "यूक्रेन", correct: true },
            { text: "चीन", correct: false },
            { text: "फ्रांस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रूस के बाद यूक्रेन सूरजमुखी का दूसरा सबसे बड़ा उत्पादक है, और दोनों देश मिलकर दुनिया के अधिकांश सूरजमुखी तेल का उत्पादन करते हैं।"
    },
    {
        question: "विश्व में किस देश में सबसे अधिक भेड़ें पाई जाती हैं?",
        answers: shuffle([
            { text: "चीन", correct: true },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "भारत", correct: false },
            { text: "न्यूजीलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में सबसे अधिक भेड़ों की आबादी वाला देश है, इसके बाद ऑस्ट्रेलिया का स्थान है जो ऊन उत्पादन के लिए प्रसिद्ध है।"
    },
    {
        question: "सबसे अधिक मांस (Meat) का उत्पादन करने वाला देश कौन सा है?",
        answers: shuffle([
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "ब्राजील", correct: false },
            { text: "चीन", correct: true },
            { text: "भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में मांस का सबसे बड़ा उत्पादक देश है, जिसके बाद संयुक्त राज्य अमेरिका और ब्राजील का स्थान है।"
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
        question: "जैतून (Olive) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "ग्रीस", correct: false },
            { text: "तुर्की", correct: false },
            { text: "स्पेन", correct: true },
            { text: "इटली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्पेन विश्व में जैतून और जैतून के तेल का सबसे बड़ा उत्पादक है।"
    },
    {
        question: "विश्व में सबसे अधिक अंडे (Eggs) का उत्पादन किस देश में होता है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "चीन", correct: true },
            { text: "इंडोनेशिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में सबसे अधिक अंडे का उत्पादन करता है।"
    },
    {
        question: "विश्व में सबसे अधिक शहद (Honey) का उत्पादन किस देश में होता है?",
        answers: shuffle([
            { text: "तुर्की", correct: false },
            { text: "अर्जेंटीना", correct: false },
            { text: "चीन", correct: true },
            { text: "भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में शहद का सबसे बड़ा उत्पादक है।"
    },
    {
        question: "अंगूर का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "इटली", correct: false },
            { text: "चीन", correct: true },
            { text: "फ्रांस", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन विश्व में अंगूर का सबसे बड़ा उत्पादक है।"
    },
    {
        question: "विश्व में किस फसल को 'सफेद सोना' कहा जाता है?",
        answers: shuffle([
            { text: "गेहूँ", correct: false },
            { text: "कपास", correct: true },
            { text: "चावल", correct: false },
            { text: "जूट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कपास को अक्सर 'सफेद सोना' कहा जाता है क्योंकि यह एक महत्वपूर्ण नकदी फसल है और वस्त्र उद्योग का आधार है।"
    },
    {
        question: "विश्व में चाय का दूसरा सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "श्रीलंका", correct: false },
            { text: "केन्या", correct: false },
            { text: "भारत", correct: true },
            { text: "वियतनाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन के बाद भारत विश्व में चाय का दूसरा सबसे बड़ा उत्पादक देश है।"
    },
    {
        question: "कोको (Cocoa) का दूसरा सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "घाना", correct: true },
            { text: "इंडोनेशिया", correct: false },
            { text: "नाइजीरिया", correct: false },
            { text: "ब्राजील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोटे डी आइवर के बाद घाना विश्व में कोको का दूसरा सबसे बड़ा उत्पादक है।"
    },
    {
        question: "विश्व में नारियल का दूसरा सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "फिलीपींस", correct: false },
            { text: "भारत", correct: true },
            { text: "श्रीलंका", correct: false },
            { text: "ब्राजील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंडोनेशिया के बाद भारत नारियल का दूसरा सबसे बड़ा उत्पादक है।"
    },
    {
        question: "पाम तेल (Palm Oil) का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "थाईलैंड", correct: false },
            { text: "मलेशिया", correct: false },
            { text: "इंडोनेशिया", correct: true },
            { text: "नाइजीरिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंडोनेशिया विश्व में पाम तेल का सबसे बड़ा उत्पादक है, जिसके बाद मलेशिया का स्थान आता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका उपयोग खाद्य उत्पादों और जैव ईंधन में होता है।"
    },
    {
        question: "दलहन (Pulses) का सबसे बड़ा उत्पादक और उपभोक्ता देश कौन सा है?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "भारत", correct: true },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "कनाडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत विश्व में दलहन का सबसे बड़ा उत्पादक होने के साथ-साथ इसका सबसे बड़ा उपभोक्ता भी है।"
    },
    {
        question: "सोयाबीन का दूसरा सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "अर्जेंटीना", correct: false },
            { text: "चीन", correct: false },
            { text: "ब्राजील", correct: true },
            { text: "भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संयुक्त राज्य अमेरिका के बाद ब्राजील विश्व में सोयाबीन का दूसरा सबसे बड़ा उत्पादक है।"
    },
    {
        question: "मक्का (Maize) का दूसरा सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "ब्राजील", correct: false },
            { text: "अर्जेंटीना", correct: false },
            { text: "चीन", correct: true },
            { text: "भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संयुक्त राज्य अमेरिका के बाद चीन विश्व में मक्का का दूसरा सबसे बड़ा उत्पादक है।"
    },
    {
        question: "विश्व में काली मिर्च (Black Pepper) का दूसरा सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "ब्राजील", correct: true },
            { text: "इंडोनेशिया", correct: false },
            { text: "श्रीलंका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वियतनाम के बाद ब्राजील विश्व में काली मिर्च का दूसरा सबसे बड़ा उत्पादक है।"
    },
    {
        question: "जूट का दूसरा सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "बांग्लादेश", correct: true },
            { text: "चीन", correct: false },
            { text: "थाईलैंड", correct: false },
            { text: "नेपाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत के बाद बांग्लादेश जूट का दूसरा सबसे बड़ा उत्पादक है।"
    },
    {
        question: "गेहूं का दूसरा सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "रूस", correct: false },
            { text: "भारत", correct: true },
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "फ्रांस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन के बाद भारत विश्व में गेहूं का दूसरा सबसे बड़ा उत्पादक देश है।"
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