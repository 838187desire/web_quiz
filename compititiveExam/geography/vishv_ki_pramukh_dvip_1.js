const questions = [
    {
        topHeading: "विश्व के प्रमुख द्वीपों पर आधारित बहुविकल्पीय प्रश्न (MCQs) part 1  (quiz_no. 72)."
    },
    {
        question: "क्षेत्रफल की दृष्टि से विश्व का सबसे बड़ा द्वीप कौन सा है?",
        answers: shuffle([
            { text: "बोर्नियो", correct: false },
            { text: "मेडागास्कर", correct: false },
            { text: "ग्रीनलैंड", correct: true },
            { text: "न्यू गिनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रीनलैंड, जो डेनमार्क के अधीन एक स्वायत्त क्षेत्र है, क्षेत्रफल के मामले में विश्व का सबसे बड़ा द्वीप है।"
    },
    {
        question: "विश्व का सबसे बड़ा द्वीपसमूह (Archipelago) कौन सा है?",
        answers: shuffle([
            { text: "जापान", correct: false },
            { text: "इंडोनेशिया", correct: true },
            { text: "फिलीपींस", correct: false },
            { text: "हवाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंडोनेशिया में 17,500 से अधिक द्वीप हैं, जो इसे विश्व का सबसे बड़ा द्वीपसमूह बनाते हैं।"
    },
    {
        question: "न्यू गिनी द्वीप को किन दो देशों के बीच विभाजित किया गया है?",
        answers: shuffle([
            { text: "इंडोनेशिया और फिलीपींस", correct: false },
            { text: "पापुआ न्यू गिनी और ऑस्ट्रेलिया", correct: false },
            { text: "पापुआ न्यू गिनी और इंडोनेशिया", correct: true },
            { text: "इंडोनेशिया और मलेशिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यू गिनी द्वीप का पूर्वी आधा भाग पापुआ न्यू गिनी देश है, जबकि पश्चिमी आधा भाग इंडोनेशिया के दो प्रांतों (पापुआ और पश्चिम पापुआ) के अंतर्गत आता है।"
    },
    {
        question: "विश्व का सबसे बड़ा नदी द्वीप 'माजुली' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: false },
            { text: "ब्रह्मपुत्र", correct: true },
            { text: "गोदावरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माजुली द्वीप असम में ब्रह्मपुत्र नदी पर स्थित है और इसे विश्व का सबसे बड़ा नदी द्वीप माना जाता है।"
    },
    {
        question: "मेडागास्कर किस महासागर में स्थित है?",
        answers: shuffle([
            { text: "प्रशांत महासागर", correct: false },
            { text: "अटलांटिक महासागर", correct: false },
            { text: "हिंद महासागर", correct: true },
            { text: "आर्कटिक महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेडागास्कर अफ्रीका के पूर्वी तट से दूर हिंद महासागर में स्थित एक विशाल द्वीप देश है।"
    },
    {
        question: "क्यूबा द्वीप, जिसे 'क्यूबा का मोती' भी कहा जाता है, किस महासागर में स्थित है?",
        answers: shuffle([
            { text: "अटलांटिक महासागर", correct: true },
            { text: "प्रशांत महासागर", correct: false },
            { text: "हिंद महासागर", correct: false },
            { text: "आर्कटिक महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्यूबा कैरिबियन सागर में स्थित एक द्वीप देश है, जो अटलांटिक महासागर का हिस्सा है।"
    },
    {
        question: "जापान का सबसे बड़ा द्वीप कौन सा है?",
        answers: shuffle([
            { text: "शिकोकू", correct: false },
            { text: "क्यूशू", correct: false },
            { text: "होक्काइडो", correct: false },
            { text: "होन्शू", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> होन्शू, जापान के चार मुख्य द्वीपों में से सबसे बड़ा और सबसे अधिक आबादी वाला है, जहाँ टोक्यो, ओसाका और क्योटो जैसे प्रमुख शहर स्थित हैं।"
    },
    {
        question: "सुमात्रा, जावा और बोर्नियो द्वीप किस देश का हिस्सा हैं?",
        answers: shuffle([
            { text: "मलेशिया", correct: false },
            { text: "फिलीपींस", correct: false },
            { text: "इंडोनेशिया", correct: true },
            { text: "वियतनाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये तीनों प्रमुख द्वीप इंडोनेशिया के सबसे बड़े और महत्वपूर्ण द्वीप हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> बोर्नियो का कुछ हिस्सा मलेशिया और ब्रुनेई में भी है।"
    },
    {
        question: "'ग्रेट ब्रिटेन' द्वीप में कौन-कौन से देश शामिल हैं?",
        answers: shuffle([
            { text: "इंग्लैंड, स्कॉटलैंड और वेल्स", correct: true },
            { text: "इंग्लैंड, स्कॉटलैंड और उत्तरी आयरलैंड", correct: false },
            { text: "इंग्लैंड और वेल्स", correct: false },
            { text: "इंग्लैंड और आयरलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेट ब्रिटेन एक भौगोलिक द्वीप है, जिसमें इंग्लैंड, स्कॉटलैंड और वेल्स शामिल हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यूनाइटेड किंगडम में इन तीनों के साथ-साथ उत्तरी आयरलैंड भी शामिल है।"
    },
    {
        question: "विक्टोरिया द्वीप, जो कनाडा का एक प्रमुख द्वीप है, किस महासागर में स्थित है?",
        answers: shuffle([
            { text: "प्रशांत महासागर", correct: false },
            { text: "आर्कटिक महासागर", correct: true },
            { text: "अटलांटिक महासागर", correct: false },
            { text: "हिंद महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्टोरिया द्वीप आर्कटिक द्वीपसमूह का हिस्सा है और कनाडा के नुनावुत और उत्तर-पश्चिमी क्षेत्रों में स्थित है।"
    },
    {
        question: "हवाई द्वीप किस महासागर में स्थित है?",
        answers: shuffle([
            { text: "हिंद महासागर", correct: false },
            { text: "प्रशांत महासागर", correct: true },
            { text: "अटलांटिक महासागर", correct: false },
            { text: "आर्कटिक महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हवाई द्वीप प्रशांत महासागर के मध्य में स्थित है और संयुक्त राज्य अमेरिका का एक राज्य है।"
    },
    {
        question: "'मेडागास्कर' द्वीप को किससे अलग करता है?",
        answers: shuffle([
            { text: "मोजाम्बिक चैनल", correct: true },
            { text: "मलक्का जलडमरूमध्य", correct: false },
            { text: "बेरिंग जलडमरूमध्य", correct: false },
            { text: "डेनमार्क जलडमरूमध्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोजाम्बिक चैनल मेडागास्कर को अफ्रीकी मुख्यभूमि (मोजाम्बिक) से अलग करता है।"
    },
    {
        question: "'माउंट कुक' पर्वत शिखर, जो न्यूजीलैंड का सबसे ऊँचा पर्वत है, किस द्वीप पर स्थित है?",
        answers: shuffle([
            { text: "उत्तरी द्वीप", correct: false },
            { text: "दक्षिणी द्वीप", correct: true },
            { text: "स्टीवर्ट द्वीप", correct: false },
            { text: "चैथम द्वीप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट कुक (जिसे 'ऑराकी' भी कहते हैं) न्यूजीलैंड के दक्षिणी द्वीप पर स्थित है।"
    },
    {
        question: "गैलापागोस द्वीपसमूह किस देश का हिस्सा है?",
        answers: shuffle([
            { text: "पेरू", correct: false },
            { text: "चिली", correct: false },
            { text: "इक्वाडोर", correct: true },
            { text: "कोलंबिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गैलापागोस द्वीपसमूह, जो अपनी अनूठी जैवविविधता के लिए प्रसिद्ध है, प्रशांत महासागर में इक्वाडोर से लगभग 1,000 किमी पश्चिम में स्थित है।"
    },
    {
        question: "'सिसिली' (Sicily) द्वीप किस देश का सबसे बड़ा द्वीप है?",
        answers: shuffle([
            { text: "ग्रीस", correct: false },
            { text: "इटली", correct: true },
            { text: "स्पेन", correct: false },
            { text: "तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिसिली भूमध्य सागर का सबसे बड़ा द्वीप है और यह इटली का एक स्वायत्त क्षेत्र है।"
    },
    {
        question: "'आयरलैंड' द्वीप के कितने भाग पर एक अलग देश (आयरलैंड गणराज्य) का शासन है?",
        answers: shuffle([
            { text: "पूरा द्वीप", correct: false },
            { text: "उत्तरी आधा भाग", correct: false },
            { text: "दक्षिणी भाग का अधिकांश हिस्सा", correct: true },
            { text: "पश्चिमी भाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आयरलैंड गणराज्य, जिसे केवल आयरलैंड भी कहते हैं, द्वीप के लगभग पाँच-छठे हिस्से पर फैला है, जबकि शेष उत्तरी भाग यूनाइटेड किंगडम का हिस्सा है।"
    },
    {
        question: "'फॉकलैंड द्वीप' (Falkland Islands) किस महासागर में स्थित है?",
        answers: shuffle([
            { text: "अटलांटिक महासागर", correct: true },
            { text: "प्रशांत महासागर", correct: false },
            { text: "हिंद महासागर", correct: false },
            { text: "आर्कटिक महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फॉकलैंड द्वीप दक्षिण अटलांटिक महासागर में स्थित है और यह यूनाइटेड किंगडम का एक विदेशी क्षेत्र है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस पर अर्जेंटीना भी दावा करता है।"
    },
    {
        question: "'टोंगा' किस महासागर में स्थित एक द्वीप राष्ट्र है?",
        answers: shuffle([
            { text: "हिंद महासागर", correct: false },
            { text: "अटलांटिक महासागर", correct: false },
            { text: "प्रशांत महासागर", correct: true },
            { text: "आर्कटिक महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टोंगा दक्षिण प्रशांत महासागर में स्थित एक द्वीप राष्ट्र है।"
    },
    {
        question: "'डिएगो गार्सिया' (Diego Garcia) द्वीप किस महासागर में स्थित एक रणनीतिक नौसैनिक अड्डा है?",
        answers: shuffle([
            { text: "प्रशांत महासागर", correct: false },
            { text: "अटलांटिक महासागर", correct: false },
            { text: "हिंद महासागर", correct: true },
            { text: "आर्कटिक महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डिएगो गार्सिया हिंद महासागर के चागोस द्वीपसमूह में स्थित है और यह यूनाइटेड किंगडम का एक विदेशी क्षेत्र है, जिसका उपयोग अमेरिका और यूके द्वारा नौसैनिक अड्डे के रूप में किया जाता है।"
    },
    {
        question: "'ग्रेट बैरियर रीफ' (Great Barrier Reef) के पास कौन सा द्वीप स्थित है?",
        answers: shuffle([
            { text: "तस्मानिया", correct: false },
            { text: "न्यूजीलैंड", correct: false },
            { text: "ऑस्ट्रेलिया", correct: true },
            { text: "फिजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेट बैरियर रीफ दुनिया की सबसे बड़ी प्रवाल भित्ति प्रणाली है, जो ऑस्ट्रेलिया के उत्तर-पूर्वी तट से लगी हुई है।"
    },
    {
        question: "'जावा ट्रेंच' किस द्वीप के पास स्थित है?",
        answers: shuffle([
            { text: "सुमात्रा", correct: false },
            { text: "जावा", correct: true },
            { text: "बाली", correct: false },
            { text: "बोर्नियो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जावा ट्रेंच (या सुंडा ट्रेंच) हिंद महासागर में स्थित एक गहरी खाई है, जो इंडोनेशिया के जावा द्वीप के दक्षिण में है।"
    },
    {
        question: "'कनाडा' का सबसे बड़ा द्वीप कौन सा है?",
        answers: shuffle([
            { text: "विक्टोरिया द्वीप", correct: false },
            { text: "बैंक्स द्वीप", correct: false },
            { text: "बैफिन द्वीप", correct: true },
            { text: "एलस्मीयर द्वीप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैफिन द्वीप क्षेत्रफल के हिसाब से कनाडा का सबसे बड़ा और विश्व का पाँचवाँ सबसे बड़ा द्वीप है।"
    },
    {
        question: "'मेडागास्कर' की राजधानी क्या है?",
        answers: shuffle([
            { text: "अंतानानारिवो", correct: true },
            { text: "पोर्ट लुई", correct: false },
            { text: "विक्टोरिया", correct: false },
            { text: "मोरोनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंतानानारिवो मेडागास्कर की राजधानी और सबसे बड़ा शहर है।"
    },
    {
        question: "'ग्रीनलैंड' को किस देश से राजनीतिक स्वायत्तता मिली हुई है?",
        answers: shuffle([
            { text: "नॉर्वे", correct: false },
            { text: "स्वीडन", correct: false },
            { text: "डेनमार्क", correct: true },
            { text: "कनाडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रीनलैंड डेनमार्क साम्राज्य का एक हिस्सा है, लेकिन इसे 1979 में स्व-शासन का अधिकार मिला।"
    },
    {
        question: "'जापान' के किस द्वीप पर हिरोशिमा शहर स्थित है?",
        answers: shuffle([
            { text: "होन्शू", correct: true },
            { text: "शिकोकू", correct: false },
            { text: "क्यूशू", correct: false },
            { text: "होक्काइडो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिरोशिमा, जिसे परमाणु बम हमले के लिए जाना जाता है, जापान के सबसे बड़े द्वीप होन्शू पर स्थित है।"
    },
    {
        question: "भूमध्य सागर का सबसे बड़ा द्वीप कौन सा है?",
        answers: shuffle([
            { text: "कोर्सिका", correct: false },
            { text: "सार्डिनिया", correct: false },
            { text: "सिसिली", correct: true },
            { text: "साइप्रस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिसिली, जो इटली का एक स्वायत्त क्षेत्र है, क्षेत्रफल में भूमध्य सागर का सबसे बड़ा द्वीप है।"
    },
    {
        question: "अंडमान और निकोबार द्वीप समूह किस महासागर में स्थित है?",
        answers: shuffle([
            { text: "प्रशांत महासागर", correct: false },
            { text: "हिंद महासागर", correct: true },
            { text: "अरब सागर", correct: false },
            { text: "बंगाल की खाड़ी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंडमान और निकोबार द्वीप समूह बंगाल की खाड़ी में स्थित है, जो हिंद महासागर का एक हिस्सा है।"
    },
    {
        question: "हवाई द्वीप समूह का सबसे बड़ा द्वीप कौन सा है?",
        answers: shuffle([
            { text: "माउई", correct: false },
            { text: "ओआहू", correct: false },
            { text: "हवाई (बड़ा द्वीप)", correct: true },
            { text: "कौआई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हवाई द्वीप, जिसे अक्सर \"बड़ा द्वीप\" (Big Island) कहा जाता है, हवाई द्वीप समूह का सबसे बड़ा और सबसे पूर्वी द्वीप है।"
    },
    {
        question: "'सेंट हेलेना' द्वीप किस महासागर में स्थित है, जहाँ नेपोलियन बोनापार्ट को निर्वासित किया गया था?",
        answers: shuffle([
            { text: "हिंद महासागर", correct: false },
            { text: "प्रशांत महासागर", correct: false },
            { text: "अटलांटिक महासागर", correct: true },
            { text: "आर्कटिक महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेंट हेलेना दक्षिण अटलांटिक महासागर में एक ब्रिटिश विदेशी क्षेत्र है, जहाँ 1815 में वाटरलू की लड़ाई के बाद नेपोलियन को निर्वासित किया गया था।"
    },
    {
        question: "'माल्टा' द्वीप समूह किस सागर में स्थित है?",
        answers: shuffle([
            { text: "भूमध्य सागर", correct: true },
            { text: "लाल सागर", correct: false },
            { text: "काला सागर", correct: false },
            { text: "कैस्पियन सागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माल्टा भूमध्य सागर में स्थित एक छोटा द्वीप राष्ट्र है, जो इटली के दक्षिण में है।"
    },
    {
        question: "'बरमूडा ट्रायंगल' में कौन सा द्वीप स्थित है?",
        answers: shuffle([
            { text: "हवाई", correct: false },
            { text: "बरमूडा", correct: true },
            { text: "क्यूबा", correct: false },
            { text: "प्यूर्टो रिको", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बरमूडा अटलांटिक महासागर में एक ब्रिटिश विदेशी क्षेत्र है, और यह 'बरमूडा ट्रायंगल' के तीन कोनों में से एक है।"
    },
    {
        question: "विश्व का तीसरा सबसे बड़ा द्वीप कौन सा है?",
        answers: shuffle([
            { text: "बोर्नियो", correct: true },
            { text: "मेडागास्कर", correct: false },
            { text: "न्यू गिनी", correct: false },
            { text: "सुमात्रा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बोर्नियो क्षेत्रफल की दृष्टि से विश्व का तीसरा सबसे बड़ा द्वीप है।"
    },
    {
        question: "'तस्मानिया' द्वीप किस देश का एक राज्य है?",
        answers: shuffle([
            { text: "न्यूजीलैंड", correct: false },
            { text: "ऑस्ट्रेलिया", correct: true },
            { text: "फिजी", correct: false },
            { text: "इंडोनेशिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तस्मानिया, ऑस्ट्रेलिया के मुख्य भूभाग से दक्षिण में स्थित एक द्वीप है, और यह ऑस्ट्रेलिया का एक राज्य है।"
    },
    {
        question: "'माउंट फ़ूजी' किस द्वीप पर स्थित है?",
        answers: shuffle([
            { text: "होन्शू", correct: true },
            { text: "शिकोकू", correct: false },
            { text: "क्यूशू", correct: false },
            { text: "होक्काइडो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट फ़ूजी, जापान का सबसे ऊँचा पर्वत, होन्शू द्वीप पर स्थित है।"
    },
    {
        question: "'बोर्नियो' द्वीप का कौन सा हिस्सा पूरी तरह से ब्रुनेई देश के अंतर्गत आता है?",
        answers: shuffle([
            { text: "उत्तरी भाग", correct: false },
            { text: "दक्षिणी भाग", correct: false },
            { text: "पूर्वी भाग", correct: false },
            { text: "बोर्नियो का कोई भी हिस्सा पूरी तरह से ब्रुनेई के पास नहीं है।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्रुनेई एक छोटा सा देश है जो बोर्नियो द्वीप के उत्तरी तट पर स्थित है, लेकिन बोर्नियो का अधिकांश भाग इंडोनेशिया और मलेशिया के बीच विभाजित है।"
    },
    {
        question: "'फिलीपींस' द्वीप समूह की राजधानी मनीला किस द्वीप पर स्थित है?",
        answers: shuffle([
            { text: "मिंडानाओ", correct: false },
            { text: "लूजोन", correct: true },
            { text: "पलावन", correct: false },
            { text: "सेबू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लूजोन फिलीपींस का सबसे बड़ा और सबसे अधिक आबादी वाला द्वीप है, जहाँ राजधानी मनीला स्थित है।"
    },
    {
        question: "'ओकावांगो डेल्टा' (Okavango Delta), जो एक प्रसिद्ध डेल्टा है, किस द्वीप के पास स्थित है?",
        answers: shuffle([
            { text: "अफ्रीका मुख्य भूमि", correct: true },
            { text: "मेडागास्कर", correct: false },
            { text: "तस्मानिया", correct: false },
            { text: "ग्रीनलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओकावांगो डेल्टा, एक अंतर्देशीय डेल्टा, बोत्सवाना, अफ्रीका में स्थित है, और यह एक द्वीप नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रश्न एक अपवाद है और यह जाँचने के लिए है कि आप ध्यान से पढ़ रहे हैं या नहीं।<br><br><i class='fa-solid fa-angles-right icon'></i> सही उत्तर यह है कि यह किसी द्वीप के पास स्थित नहीं है, बल्कि अफ्रीकी मुख्य भूमि पर है।"
    },
    {
        question: "'सार्दिनिया' (Sardinia) द्वीप किस देश का हिस्सा है?",
        answers: shuffle([
            { text: "फ्रांस", correct: false },
            { text: "स्पेन", correct: false },
            { text: "इटली", correct: true },
            { text: "ग्रीस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सार्दिनिया भूमध्य सागर का दूसरा सबसे बड़ा द्वीप है और यह इटली का एक स्वायत्त क्षेत्र है।"
    },
    {
        question: "'लॉन्ग आईलैंड' (Long Island), जो अमेरिका का एक महत्वपूर्ण द्वीप है, किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "कैलिफ़ोर्निया", correct: false },
            { text: "फ्लोरिडा", correct: false },
            { text: "न्यूयॉर्क", correct: true },
            { text: "मैसाचुसेट्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लॉन्ग आईलैंड न्यूयॉर्क राज्य का एक घना आबादी वाला द्वीप है, जो न्यूयॉर्क शहर के क्वींस और ब्रुकलिन बोरो को भी शामिल करता है।"
    },
    {
        question: "'सुमात्रा' द्वीप किस देश का हिस्सा है?",
        answers: shuffle([
            { text: "थाईलैंड", correct: false },
            { text: "मलेशिया", correct: false },
            { text: "इंडोनेशिया", correct: true },
            { text: "सिंगापुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुमात्रा इंडोनेशिया के सबसे बड़े द्वीपों में से एक है।"
    },
    {
        question: "'बोर्नियो' द्वीप किन तीन देशों के बीच विभाजित है?",
        answers: shuffle([
            { text: "मलेशिया, ब्रुनेई और इंडोनेशिया", correct: true },
            { text: "इंडोनेशिया, फिलीपींस और मलेशिया", correct: false },
            { text: "चीन, वियतनाम और थाईलैंड", correct: false },
            { text: "ऑस्ट्रेलिया, न्यूजीलैंड और इंडोनेशिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बोर्नियो एकमात्र ऐसा द्वीप है जिसे तीन देशों द्वारा साझा किया जाता है।"
    },
    {
        question: "'नार्वे' के किस तट पर 'नॉर्वेजियन सागर' स्थित है?",
        answers: shuffle([
            { text: "पूर्वी तट", correct: false },
            { text: "पश्चिमी तट", correct: true },
            { text: "उत्तरी तट", correct: false },
            { text: "दक्षिणी तट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नॉर्वेजियन सागर अटलांटिक महासागर का एक सीमांत सागर है, जो नॉर्वे के पश्चिमी तट पर स्थित है।"
    },
    {
        question: "'हवाई' द्वीप समूह की राजधानी होनोलूलू किस द्वीप पर स्थित है?",
        answers: shuffle([
            { text: "माउई", correct: false },
            { text: "ओआहू", correct: true },
            { text: "हवाई (बड़ा द्वीप)", correct: false },
            { text: "कौआई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> होनोलूलू, हवाई की राजधानी, ओआहू द्वीप पर स्थित है।"
    },
    {
        question: "'ब्रिटिश वर्जिन आइलैंड्स' किस महासागर में स्थित है?",
        answers: shuffle([
            { text: "प्रशांत महासागर", correct: false },
            { text: "हिंद महासागर", correct: false },
            { text: "अटलांटिक महासागर", correct: true },
            { text: "आर्कटिक महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्रिटिश वर्जिन आइलैंड्स कैरिबियन सागर में स्थित हैं, जो अटलांटिक महासागर का हिस्सा है।"
    },
    {
        question: "'जंजीबार' (Zanzibar) द्वीप किस देश का हिस्सा है?",
        answers: shuffle([
            { text: "केन्या", correct: false },
            { text: "तंजानिया", correct: true },
            { text: "मोज़ाम्बिक", correct: false },
            { text: "सोमालिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जंजीबार हिंद महासागर में स्थित एक स्वायत्त द्वीप समूह है जो तंजानिया का हिस्सा है।"
    },
    {
        question: "'स्कॉटलैंड' के मुख्य द्वीप समूह में से कौन सा नहीं है?",
        answers: shuffle([
            { text: "हेब्राइड्स", correct: false },
            { text: "शेटलैंड द्वीप समूह", correct: false },
            { text: "ऑर्कनी द्वीप समूह", correct: false },
            { text: "चैनल द्वीप समूह", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चैनल द्वीप समूह फ्रांस के तट पर स्थित है और यह क्राउन निर्भरता है, जबकि हेब्राइड्स, शेटलैंड और ऑर्कनी स्कॉटलैंड का हिस्सा हैं।"
    },
    {
        question: "'मिंडानाओ' (Mindanao) द्वीप किस देश का दूसरा सबसे बड़ा द्वीप है?",
        answers: shuffle([
            { text: "इंडोनेशिया", correct: false },
            { text: "मलेशिया", correct: false },
            { text: "फिलीपींस", correct: true },
            { text: "जापान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिंडानाओ फिलीपींस का दूसरा सबसे बड़ा द्वीप है, जो लूजोन के बाद आता है।"
    },
    {
        question: "'तंजानिया' का सबसे बड़ा द्वीप कौन सा है?",
        answers: shuffle([
            { text: "पेम्बा", correct: false },
            { text: "उंगुजा (जंजीबार)", correct: true },
            { text: "माफ़िया", correct: false },
            { text: "लामू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उंगुजा द्वीप, जिसे जंजीबार द्वीप के नाम से भी जाना जाता है, तंजानिया का सबसे बड़ा द्वीप है।"
    },
    {
        question: "'इबीसा' (Ibiza) और 'मालोर्का' (Mallorca) द्वीप किस देश का हिस्सा हैं?",
        answers: shuffle([
            { text: "फ्रांस", correct: false },
            { text: "इटली", correct: false },
            { text: "ग्रीस", correct: false },
            { text: "स्पेन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये दोनों द्वीप स्पेन के बालेरिक द्वीप समूह का हिस्सा हैं, जो भूमध्य सागर में स्थित हैं।"
    },
    {
        question: "'फ़ैरो द्वीप' (Faroe Islands) किस देश का स्वायत्त क्षेत्र है?",
        answers: shuffle([
            { text: "नॉर्वे", correct: false },
            { text: "स्वीडन", correct: false },
            { text: "डेनमार्क", correct: true },
            { text: "आइसलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फ़ैरो द्वीप उत्तरी अटलांटिक महासागर में स्थित है और यह डेनमार्क साम्राज्य का एक स्वायत्त घटक देश है।"
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