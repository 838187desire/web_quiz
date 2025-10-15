const questions = [
    {
        topHeading: "महाद्वीप पर आधारित 50 MCQs part_3 (quiz_no.)"
    },
    {
        question: "'पुस्ताज' नामक घास के मैदान कहाँ पाए जाते हैं?",
        answers: shuffle([
            { text: "रूस", correct: false },
            { text: "हंगरी", correct: true },
            { text: "स्पेन", correct: false },
            { text: "यूक्रेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हंगरी के समतल मैदानी इलाकों में पाए जाने वाले शीतोष्ण घास के मैदानों को 'पुस्ताज' कहा जाता है।"
    },
    {
        question: "'राइन नदी' किस सागर में गिरती है?",
        answers: shuffle([
            { text: "भूमध्य सागर", correct: false },
            { text: "काला सागर", correct: false },
            { text: "बाल्टिक सागर", correct: false },
            { text: "उत्तरी सागर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राइन नदी स्विस आल्प्स से निकलकर जर्मनी और नीदरलैंड से होते हुए उत्तरी सागर में मिल जाती है।"
    },
    {
        question: "'आइबेरियन प्रायद्वीप' में कौन से दो देश स्थित हैं?",
        answers: shuffle([
            { text: "नॉर्वे और स्वीडन", correct: false },
            { text: "स्पेन और पुर्तगाल", correct: true },
            { text: "इटली और वेटिकन सिटी", correct: false },
            { text: "ग्रीस और अल्बानिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आइबेरियन प्रायद्वीप दक्षिण-पश्चिमी यूरोप में स्थित है और इसमें मुख्य रूप से स्पेन और पुर्तगाल देश शामिल हैं।"
    },
    {
        question: "'फियोर्ड' तटों के लिए कौन सा देश प्रसिद्ध है?",
        answers: shuffle([
            { text: "ग्रीस", correct: false },
            { text: "इटली", correct: false },
            { text: "नॉर्वे", correct: true },
            { text: "आयरलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फियोर्ड हिमनदों द्वारा निर्मित गहरी, संकरी और लंबी समुद्री खाड़ियाँ होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> नॉर्वे अपने खूबसूरत और विशाल फियोर्ड तटों के लिए विश्व प्रसिद्ध है।"
    },
    {
        question: "'बॉस्फोरस जलसंधि' तुर्की में किन दो सागरों को जोड़ती है?",
        answers: shuffle([
            { text: "काला सागर और मरमरा सागर", correct: true },
            { text: "मरमरा सागर और एजियन सागर", correct: false },
            { text: "एजियन सागर और भूमध्य सागर", correct: false },
            { text: "काला सागर और आज़ोव सागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बॉस्फोरस जलसंधि इस्तांबुल शहर से होकर गुजरती है और यह काला सागर को मरमरा सागर से जोड़ती है, साथ ही यह यूरोप और एशिया के बीच एक सीमा भी बनाती है।"
    },
    {
        question: "ऑस्ट्रेलिया की सबसे लम्बी नदी कौन सी है?",
        answers: shuffle([
            { text: "डार्लिंग", correct: false },
            { text: "मर्रे", correct: true },
            { text: "फ्लिंडर्स", correct: false },
            { text: "कूपर क्रीक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मर्रे नदी ऑस्ट्रेलिया की सबसे लम्बी नदी है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी सहायक नदी डार्लिंग के साथ मिलकर यह मर्रे-डार्लिंग बेसिन बनाती है, जो ऑस्ट्रेलिया का सबसे बड़ा नदी तंत्र है।"
    },
    {
        question: "विश्व की सबसे बड़ी प्रवाल भित्ति 'ग्रेट बैरियर रीफ' किस देश के तट पर स्थित है?",
        answers: shuffle([
            { text: "इंडोनेशिया", correct: false },
            { text: "फिलीपींस", correct: false },
            { text: "ऑस्ट्रेलिया", correct: true },
            { text: "जापान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेट बैरियर रीफ ऑस्ट्रेलिया के क्वींसलैंड के तट पर कोरल सागर में स्थित दुनिया की सबसे बड़ी प्रवाल भित्ति प्रणाली है।"
    },
    {
        question: "'डाउन्स' नामक शीतोष्ण घास के मैदान कहाँ पाए जाते हैं?",
        answers: shuffle([
            { text: "न्यूजीलैंड", correct: false },
            { text: "ऑस्ट्रेलिया", correct: true },
            { text: "दक्षिण अफ़्रीका", correct: false },
            { text: "अर्जेंटीना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑस्ट्रेलिया के दक्षिण-पूर्वी भाग में, विशेषकर मर्रे-डार्लिंग बेसिन में पाए जाने वाले शीतोष्ण घास के मैदानों को 'डाउन्स' कहा जाता है।"
    },
    {
        question: "ऑस्ट्रेलिया की सबसे ऊँची पर्वत चोटी कौन सी है?",
        answers: shuffle([
            { text: "माउंट कुक", correct: false },
            { text: "माउंट कोसियुस्को", correct: true },
            { text: "माउंट टाउनसेंड", correct: false },
            { text: "माउंट बोगोंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट कोसियुस्को ग्रेट डिवाइडिंग रेंज का हिस्सा है और यह ऑस्ट्रेलियाई मुख्य भूमि की सबसे ऊँची चोटी है।"
    },
    {
        question: "न्यूजीलैंड की सर्वोच्च पर्वत चोटी का क्या नाम है?",
        answers: shuffle([
            { text: "माउंट एस्पायरिंग", correct: false },
            { text: "माउंट तस्मान", correct: false },
            { text: "माउंट कुक (आओराकी)", correct: true },
            { text: "माउंट डार्विन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आओराकी/माउंट कुक न्यूजीलैंड के दक्षिणी आल्प्स में स्थित सबसे ऊँची पर्वत चोटी है।"
    },
    {
        question: "'कंगारुओं का देश' किसे कहा जाता है?",
        answers: shuffle([
            { text: "न्यूजीलैंड", correct: false },
            { text: "पापुआ न्यू गिनी", correct: false },
            { text: "ऑस्ट्रेलिया", correct: true },
            { text: "तस्मानिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कंगारू ऑस्ट्रेलिया में पाए जाने वाले स्थानिक मार्सुपियल हैं और यह देश का राष्ट्रीय पशु भी है, इसलिए ऑस्ट्रेलिया को 'कंगारुओं का देश' कहा जाता है।"
    },
    {
        question: "'कुक जलसंधि' किन दो भूभागों को अलग करती है?",
        answers: shuffle([
            { text: "ऑस्ट्रेलिया और तस्मानिया", correct: false },
            { text: "ऑस्ट्रेलिया और न्यूजीलैंड", correct: false },
            { text: "न्यूजीलैंड के उत्तरी और दक्षिणी द्वीप", correct: true },
            { text: "पापुआ न्यू गिनी और ऑस्ट्रेलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुक जलसंधि न्यूजीलैंड के दो मुख्य द्वीपों, उत्तरी द्वीप और दक्षिणी द्वीप, को एक दूसरे से अलग करती है।"
    },
    {
        question: "'ग्रेट डिवाइडिंग रेंज' किस महाद्वीप की प्रमुख पर्वत श्रृंखला है?",
        answers: shuffle([
            { text: "अफ़्रीका", correct: false },
            { text: "दक्षिण अमेरिका", correct: false },
            { text: "ऑस्ट्रेलिया", correct: true },
            { text: "उत्तरी अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेट डिवाइडिंग रेंज ऑस्ट्रेलिया की सबसे महत्वपूर्ण पर्वत श्रृंखला है, जो इसके पूर्वी तट के समानांतर फैली हुई है।"
    },
    {
        question: "'माओरी' जनजाति किस देश के मूल निवासी हैं?",
        answers: shuffle([
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "फिजी", correct: false },
            { text: "पापुआ न्यू गिनी", correct: false },
            { text: "न्यूजीलैंड", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माओरी लोग न्यूजीलैंड के स्वदेशी पॉलिनेशियन लोग हैं।"
    },
    {
        question: "ऑस्ट्रेलिया के मूल निवासियों को क्या कहा जाता है?",
        answers: shuffle([
            { text: "माओरी", correct: false },
            { text: "एबोरिजिन", correct: true },
            { text: "इनुइट", correct: false },
            { text: "पिग्मी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एबोरिजिनल ऑस्ट्रेलियाई या एबोरिजिन ऑस्ट्रेलिया की मुख्य भूमि और तस्मानिया के विभिन्न स्वदेशी लोगों के लिए एक सामान्य शब्द है।"
    },
    {
        question: "अंटार्कटिका में स्थित भारत के स्थायी अनुसंधान केंद्र का क्या नाम है?",
        answers: shuffle([
            { text: "गंगोत्री और यमुनोत्री", correct: false },
            { text: "मैत्री और भारती", correct: true },
            { text: "आर्यभट्ट और भास्कर", correct: false },
            { text: "सागरिका और हिमगिरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत ने अंटार्कटिका में अपने अनुसंधान कार्यक्रम के तहत कई स्टेशन स्थापित किए हैं, जिनमें से मैत्री और भारती वर्तमान में सक्रिय हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> दक्षिण गंगोत्री पहला स्टेशन था।"
    },
    {
        question: "अंटार्कटिका की सबसे ऊँची चोटी कौन सी है?",
        answers: shuffle([
            { text: "विंसन मैसिफ", correct: true },
            { text: "माउंट एरेबस", correct: false },
            { text: "माउंट सिडली", correct: false },
            { text: "माउंट जैक्सन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विंसन मैसिफ अंटार्कटिका की सबसे ऊँची पर्वत चोटी है, जो एल्सवर्थ पर्वत में स्थित है।"
    },
    {
        question: "अंटार्कटिका में स्थित एकमात्र सक्रिय ज्वालामुखी का क्या नाम है?",
        answers: shuffle([
            { text: "माउंट सिडली", correct: false },
            { text: "माउंट एरेबस", correct: true },
            { text: "माउंट फ्रेंकलिन", correct: false },
            { text: "माउंट टेरर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट एरेबस रॉस द्वीप पर स्थित है और यह पृथ्वी पर सबसे दक्षिणी सक्रिय ज्वालामुखी है।"
    },
    {
        question: "'अंटार्कटिक संधि' किस वर्ष लागू हुई थी?",
        answers: shuffle([
            { text: "1951", correct: false },
            { text: "1959", correct: false },
            { text: "1961", correct: true },
            { text: "1982", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंटार्कटिक संधि पर 1959 में हस्ताक्षर किए गए थे और यह 1961 में लागू हुई।<br><br><i class='fa-solid fa-angles-right icon'></i> यह संधि अंटार्कटिका को वैज्ञानिक अनुसंधान और शांतिपूर्ण उद्देश्यों के लिए संरक्षित करती है।"
    },
    {
        question: "कौन सा सागर अंटार्कटिका को दक्षिण अमेरिका से अलग करता है?",
        answers: shuffle([
            { text: "रॉस सागर", correct: false },
            { text: "वेडेल सागर", correct: false },
            { text: "ड्रेक पैसेज", correct: true },
            { text: "बेलिंगशॉसेन सागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ड्रेक पैसेज एक जल निकाय है जो दक्षिण अमेरिका के केप हॉर्न और अंटार्कटिका के दक्षिण शेटलैंड द्वीपों के बीच स्थित है।"
    },
    {
        question: "अंटार्कटिका को अन्य किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "गतिशील महाद्वीप", correct: false },
            { text: "विज्ञान को समर्पित महाद्वीप", correct: false },
            { text: "निर्जन महाद्वीप", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बर्फ की चादर के खिसकने के कारण इसे 'गतिशील महाद्वीप' कहते हैं, वैज्ञानिक अनुसंधानों के कारण 'विज्ञान को समर्पित महाद्वीप' और स्थायी मानव बस्तियों के अभाव के कारण 'निर्जन महाद्वीप' भी कहा जाता है।"
    },
    {
        question: "'रॉस आइस शेल्फ' किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "ग्रीनलैंड (उत्तरी अमेरिका)", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "अंटार्कटिका", correct: true },
            { text: "यूरोप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रॉस आइस शेल्फ अंटार्कटिका का सबसे बड़ा आइस शेल्फ है, जो तैरती हुई बर्फ की एक विशाल चादर है।"
    },
    {
        question: "अंटार्कटिका का लगभग कितना प्रतिशत भाग बर्फ से ढका है?",
        answers: shuffle([
            { text: "75%", correct: false },
            { text: "88%", correct: false },
            { text: "98%", correct: true },
            { text: "100%", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंटार्कटिका महाद्वीप का लगभग 98% हिस्सा स्थायी बर्फ की चादर से ढका हुआ है।"
    },
    {
        question: "अंटार्कटिका की मुख्य वनस्पति क्या है?",
        answers: shuffle([
            { text: "शंकुधारी वन", correct: false },
            { text: "घास के मैदान", correct: false },
            { text: "काई और लाइकेन", correct: true },
            { text: "फूल वाले पौधे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अत्यधिक ठंडी और शुष्क परिस्थितियों के कारण, अंटार्कटिका में कोई पेड़ या झाड़ियाँ नहीं उगती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ की मुख्य वनस्पति काई, लाइकेन और शैवाल हैं।"
    },
    {
        question: "'दक्षिणी ध्रुव' पर पहुँचने वाले पहले व्यक्ति कौन थे?",
        answers: shuffle([
            { text: "रॉबर्ट पियरी", correct: false },
            { text: "रोआल्ड अमुंडसेन", correct: true },
            { text: "रॉबर्ट फाल्कन स्कॉट", correct: false },
            { text: "अर्नेस्ट शेकलटन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नॉर्वे के खोजकर्ता रोआल्ड अमुंडसेन और उनकी टीम 14 दिसंबर 1911 को दक्षिणी ध्रुव पर पहुँचने वाली पहली टीम थी।"
    },
    {
        question: "क्षेत्रफल के अनुसार महाद्वीपों का सही अवरोही क्रम क्या है?",
        answers: shuffle([
            { text: "एशिया, अफ़्रीका, उत्तरी अमेरिका, दक्षिण अमेरिका, अंटार्कटिका, यूरोप, ऑस्ट्रेलिया", correct: true },
            { text: "एशिया, अफ़्रीका, उत्तरी अमेरिका, दक्षिण अमेरिका, यूरोप, अंटार्कटिका, ऑस्ट्रेलिया", correct: false },
            { text: "एशिया, उत्तरी अमेरिका, अफ़्रीका, दक्षिण अमेरिका, अंटार्कटिका, यूरोप, ऑस्ट्रेलिया", correct: false },
            { text: "एशिया, अफ़्रीका, दक्षिण अमेरिका, उत्तरी अमेरिका, यूरोप, अंटार्कटिका, ऑस्ट्रेलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह क्षेत्रफल के आधार पर महाद्वीपों का सही घटता हुआ क्रम है।"
    },
    {
        question: "कौन सा महाद्वीप 'विषमताओं का महाद्वीप' कहलाता है?",
        answers: shuffle([
            { text: "अफ़्रीका", correct: false },
            { text: "एशिया", correct: true },
            { text: "दक्षिण अमेरिका", correct: false },
            { text: "उत्तरी अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एशिया में विश्व का सबसे ऊँचा स्थान (माउंट एवरेस्ट) और सबसे निचला स्थान (मृत सागर), सर्वाधिक वर्षा वाला स्थान और अत्यंत शुष्क क्षेत्र जैसी भौगोलिक विषमताएँ पाई जाती हैं।"
    },
    {
        question: "'काकेशस पर्वत' किन दो महाद्वीपों के बीच सीमा बनाता है?",
        answers: shuffle([
            { text: "यूरोप और अफ़्रीका", correct: false },
            { text: "एशिया और अफ़्रीका", correct: false },
            { text: "यूरोप और एशिया", correct: true },
            { text: "उत्तरी अमेरिका और दक्षिण अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूराल पर्वत और काकेशस पर्वत दोनों को पारंपरिक रूप से यूरोप और एशिया के बीच की सीमा माना जाता है।"
    },
    {
        question: "'स्टेपी' प्रकार के घास के मैदान कहाँ पाए जाते हैं?",
        answers: shuffle([
            { text: "उत्तरी अमेरिका", correct: false },
            { text: "दक्षिण अफ़्रीका", correct: false },
            { text: "यूरेशिया (यूरोप और एशिया)", correct: true },
            { text: "ऑस्ट्रेलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्टेपी विशाल, वृक्ष रहित घास के मैदान हैं जो पूर्वी यूरोप से लेकर मध्य एशिया तक फैले हुए हैं।"
    },
    {
        question: "क्षेत्रफल और जनसंख्या दोनों की दृष्टि से विश्व का सबसे छोटा महाद्वीप कौन सा है?",
        answers: shuffle([
            { text: "यूरोप", correct: false },
            { text: "अंटार्कटिका", correct: false },
            { text: "ऑस्ट्रेलिया", correct: true },
            { text: "दक्षिण अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑस्ट्रेलिया क्षेत्रफल में सबसे छोटा और अंटार्कटिका को छोड़कर जनसंख्या में सबसे कम आबादी वाला महाद्वीप है।"
    },
    {
        question: "किस महाद्वीप में एक भी भू-आबद्ध देश नहीं है?",
        answers: shuffle([
            { text: "दक्षिण अमेरिका", correct: false },
            { text: "यूरोप", correct: false },
            { text: "अफ़्रीका", correct: false },
            { text: "उत्तरी अमेरिका", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तरी अमेरिका में कोई भी देश पूरी तरह से भूमि से घिरा नहीं है; सभी की समुद्र तक सीधी पहुँच है।"
    },
    {
        question: "'मर्रे-डार्लिंग' नदी तंत्र किस महाद्वीप में है?",
        answers: shuffle([
            { text: "ऑस्ट्रेलिया", correct: true },
            { text: "दक्षिण अमेरिका", correct: false },
            { text: "उत्तरी अमेरिका", correct: false },
            { text: "अफ़्रीका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मर्रे-डार्लिंग बेसिन ऑस्ट्रेलिया का सबसे बड़ा और सबसे महत्वपूर्ण नदी तंत्र है।"
    },
    {
        question: "किस महाद्वीप को 'मानव जाति का पालना' (Cradle of Humankind) कहा जाता है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "अफ़्रीका", correct: true },
            { text: "यूरोप", correct: false },
            { text: "दक्षिण अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुरुआती मानवों (होमिनिन) के सबसे पुराने जीवाश्म अफ़्रीका में पाए गए हैं, जिससे यह सिद्धांत पुष्ट होता है कि मानव का विकास यहीं से शुरू हुआ।"
    },
    {
        question: "कौन सी जलसंधि अंतर्राष्ट्रीय तिथि रेखा के समानांतर स्थित है?",
        answers: shuffle([
            { text: "जिब्राल्टर जलसंधि", correct: false },
            { text: "बेरिंग जलसंधि", correct: true },
            { text: "पनामा नहर", correct: false },
            { text: "स्वेज नहर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बेरिंग जलसंधि एशिया और उत्तरी अमेरिका को अलग करती है और यह लगभग 180° देशांतर के पास स्थित है, जहाँ से अंतर्राष्ट्रीय तिथि रेखा गुजरती है।"
    },
    {
        question: "'सेरेनगेटी राष्ट्रीय उद्यान', जो अपने वार्षिक प्रवासन के लिए प्रसिद्ध है, किस महाद्वीप में है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "दक्षिण अमेरिका", correct: false },
            { text: "अफ़्रीका", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेरेनगेटी राष्ट्रीय उद्यान तंजानिया (अफ़्रीका) में स्थित है और यह वाइल्डबीस्ट और ज़ेबरा के विशाल वार्षिक प्रवासन के लिए विश्व प्रसिद्ध है।"
    },
    {
        question: "एंडीज, रॉकी, आल्प्स और हिमालय क्या हैं?",
        answers: shuffle([
            { text: "ज्वालामुखी", correct: false },
            { text: "पठार", correct: false },
            { text: "वलित पर्वत", correct: true },
            { text: "भ्रंशोत्थ पर्वत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये सभी विश्व की प्रमुख नवीन वलित पर्वत श्रृंखलाएं हैं, जिनका निर्माण टेक्टोनिक प्लेटों के टकराने से हुआ है।"
    },
    {
        question: "'केंटरबरी के मैदान' किस देश में स्थित हैं?",
        answers: shuffle([
            { text: "इंग्लैंड", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "न्यूजीलैंड", correct: true },
            { text: "कनाडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केंटरबरी के मैदान न्यूजीलैंड के दक्षिणी द्वीप के पूर्वी तट पर स्थित उपजाऊ कृषि क्षेत्र हैं।"
    },
    {
        question: "वह एकमात्र महाद्वीप कौन सा है जो चारों गोलार्धों (उत्तरी, दक्षिणी, पूर्वी, पश्चिमी) में फैला हुआ है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "दक्षिण अमेरिका", correct: false },
            { text: "अफ़्रीका", correct: true },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भूमध्य रेखा (0° अक्षांश) और प्रधान मध्याह्न रेखा (0° देशांतर) दोनों अफ़्रीका से होकर गुजरती हैं, जिससे यह चारों गोलार्धों में स्थित हो जाता है।"
    },
    {
        question: "'इग्लू' नामक बर्फ के घर किस क्षेत्र के निवासियों द्वारा बनाए जाते हैं?",
        answers: shuffle([
            { text: "साइबेरिया", correct: false },
            { text: "अंटार्कटिका", correct: false },
            { text: "आर्कटिक क्षेत्र", correct: true },
            { text: "अल्पाइन क्षेत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इग्लू उत्तरी अमेरिका (कनाडा, ग्रीनलैंड) के आर्कटिक क्षेत्रों में रहने वाले इनुइट लोगों द्वारा बनाए जाने वाले पारंपरिक शीतकालीन आश्रय हैं।"
    },
    {
        question: "दुनिया का सबसे बड़ा कॉफी निर्यातक महाद्वीप कौन सा है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "अफ़्रीका", correct: false },
            { text: "दक्षिण अमेरिका", correct: true },
            { text: "उत्तरी अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्राजील, कोलंबिया, पेरू जैसे प्रमुख उत्पादक देशों के कारण दक्षिण अमेरिका दुनिया का सबसे बड़ा कॉफी निर्यातक महाद्वीप है।"
    },
    {
        question: "कौन सा महाद्वीप 'द्वीपीय महाद्वीप' के रूप में भी जाना जाता है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "यूरोप", correct: false },
            { text: "ऑस्ट्रेलिया", correct: true },
            { text: "उत्तरी अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑस्ट्रेलिया स्वयं एक विशाल द्वीप है और यह एक महाद्वीप भी है, इसलिए इसे 'द्वीपीय महाद्वीप' कहा जाता है।"
    },
    {
        question: "'एमु' और 'कसोवरी' नामक न उड़ने वाले पक्षी किस महाद्वीप में पाए जाते हैं?",
        answers: shuffle([
            { text: "अफ़्रीका", correct: false },
            { text: "दक्षिण अमेरिका", correct: false },
            { text: "ऑस्ट्रेलिया", correct: true },
            { text: "अंटार्कटिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुतुरमुर्ग के बाद एमु दुनिया का दूसरा सबसे बड़ा पक्षी है और यह कसोवरी के साथ ऑस्ट्रेलिया और आसपास के द्वीपों में पाया जाता है।"
    },
    {
        question: "'ब्लू नाइल' और 'व्हाइट नाइल' नदियाँ किस शहर में मिलकर 'नील नदी' बनाती हैं?",
        answers: shuffle([
            { text: "काहिरा (मिस्र)", correct: false },
            { text: "खार्तूम (सूडान)", correct: true },
            { text: "कंपाला (युगांडा)", correct: false },
            { text: "अदीस अबाबा (इथियोपिया)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इथियोपिया से आने वाली ब्लू नाइल और विक्टोरिया झील से आने वाली व्हाइट नाइल का संगम सूडान की राजधानी खार्तूम में होता है।"
    },
    {
        question: "'ग्रेट लेक्स' (महान झीलें) किन दो देशों की सीमा पर स्थित हैं?",
        answers: shuffle([
            { text: "संयुक्त राज्य अमेरिका और मैक्सिको", correct: false },
            { text: "कनाडा और ग्रीनलैंड", correct: false },
            { text: "संयुक्त राज्य अमेरिका और कनाडा", correct: true },
            { text: "रूस और चीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुपीरियर, मिशिगन, ह्यूरॉन, इरी और ओंटारियो झीलें मिलकर महान झीलें कहलाती हैं, जो संयुक्त राज्य अमेरिका और कनाडा के बीच एक प्राकृतिक सीमा बनाती हैं (मिशिगन झील को छोड़कर जो पूरी तरह से अमेरिका में है)।"
    },
    {
        question: "'टॉरेस जलसंधि' किन दो भूभागों को अलग करती है?",
        answers: shuffle([
            { text: "ऑस्ट्रेलिया और न्यूजीलैंड", correct: false },
            { text: "ऑस्ट्रेलिया और तस्मानिया", correct: false },
            { text: "ऑस्ट्रेलिया और न्यू गिनी द्वीप", correct: true },
            { text: "जावा और सुमात्रा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टॉरेस जलसंधि ऑस्ट्रेलिया के केप यॉर्क प्रायद्वीप और न्यू गिनी द्वीप के बीच स्थित है।"
    },
    {
        question: "'यूराल नदी' किस सागर में गिरती है?",
        answers: shuffle([
            { text: "काला सागर", correct: false },
            { text: "कैस्पियन सागर", correct: true },
            { text: "बाल्टिक सागर", correct: false },
            { text: "आर्कटिक महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूराल नदी यूराल पर्वत से निकलती है और रूस तथा कजाकिस्तान से बहते हुए कैस्पियन सागर में मिल जाती है।"
    },
    {
        question: "'विक्टोरिया मरुस्थल' कहाँ स्थित है?",
        answers: shuffle([
            { text: "अफ़्रीका", correct: false },
            { text: "ऑस्ट्रेलिया", correct: true },
            { text: "उत्तरी अमेरिका", correct: false },
            { text: "एशिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेट विक्टोरिया मरुस्थल ऑस्ट्रेलिया का सबसे बड़ा मरुस्थल है, जो पश्चिमी ऑस्ट्रेलिया और दक्षिण ऑस्ट्रेलिया में फैला हुआ है।"
    },
    {
        question: "कौन सा यूरोपीय देश अपनी पवन चक्कियों, नहरों और ट्यूलिप के खेतों के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "डेनमार्क", correct: false },
            { text: "बेल्जियम", correct: false },
            { text: "नीदरलैंड", correct: true },
            { text: "स्विट्जरलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नीदरलैंड (हॉलैंड) अपनी समतल भूमि, नहरों, पवन चक्कियों और ट्यूलिप के फूलों के लिए विश्व भर में जाना जाता है।"
    },
    {
        question: "'अमेजन नदी' का मुहाना किस महासागर में है?",
        answers: shuffle([
            { text: "प्रशांत महासागर", correct: false },
            { text: "अटलांटिक महासागर", correct: true },
            { text: "कैरिबियन सागर", correct: false },
            { text: "हिंद महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमेजन नदी पेरू के एंडीज से निकलकर पूर्व की ओर बहती है और ब्राजील के तट पर अटलांटिक महासागर में मिल जाती है।"
    },
    {
        question: "'मसाई' जनजाति मुख्य रूप से कहाँ पाई जाती है?",
        answers: shuffle([
            { text: "कांगो बेसिन", correct: false },
            { text: "कालाहारी मरुस्थल", correct: false },
            { text: "केन्या और तंजानिया के सवाना", correct: true },
            { text: "सहारा मरुस्थल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मसाई एक अर्ध-खानाबदोश जातीय समूह है जो पूर्वी अफ़्रीका के केन्या और उत्तरी तंजानिया के सवाना मैदानों में निवास करता है।"
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