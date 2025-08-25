const questions = [
    {
        topHeading: "विश्व के प्रमुख द्वीपों पर आधारित बहुविकल्पीय प्रश्न (MCQs) part 2  (quiz_no. 73)."
    },
    {
        question: "'ग्रेट बैरियर रीफ' किस महासागर में स्थित है?",
        answers: shuffle([
            { text: "हिंद महासागर", correct: false },
            { text: "प्रशांत महासागर", correct: true },
            { text: "अटलांटिक महासागर", correct: false },
            { text: "आर्कटिक महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेट बैरियर रीफ प्रशांत महासागर में ऑस्ट्रेलिया के उत्तर-पूर्वी तट पर स्थित है।"
    },
    {
        question: "'हॉकाइडो' (Hokkaido) द्वीप किस देश का उत्तरी द्वीप है?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "रूस", correct: false },
            { text: "जापान", correct: true },
            { text: "दक्षिण कोरिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हॉकाइडो, जापान के चार मुख्य द्वीपों में से सबसे उत्तरी और दूसरा सबसे बड़ा द्वीप है।"
    },
    {
        question: "'फिलीपींस' में ज्वालामुखी पर्वत 'माउंट ताल' (Mount Taal) किस द्वीप पर स्थित है?",
        answers: shuffle([
            { text: "लूजोन", correct: true },
            { text: "मिंडानाओ", correct: false },
            { text: "पलावन", correct: false },
            { text: "नेग्रोस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट ताल, जो एक सक्रिय ज्वालामुखी है, लूजोन द्वीप पर स्थित है।"
    },
    {
        question: "'श्रीलंका' द्वीप को भारत से कौन सा जलडमरूमध्य अलग करता है?",
        answers: shuffle([
            { text: "बेरिंग जलडमरूमध्य", correct: false },
            { text: "पाक जलडमरूमध्य", correct: true },
            { text: "जिब्राल्टर जलडमरूमध्य", correct: false },
            { text: "मलक्का जलडमरूमध्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पाक जलडमरूमध्य, भारत के तमिलनाडु राज्य को श्रीलंका के जाफना जिले से अलग करता है।"
    },
    {
        question: "'फिजी' किस महासागर में स्थित एक द्वीप राष्ट्र है?",
        answers: shuffle([
            { text: "अटलांटिक महासागर", correct: false },
            { text: "प्रशांत महासागर", correct: true },
            { text: "हिंद महासागर", correct: false },
            { text: "आर्कटिक महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फिजी दक्षिण प्रशांत महासागर में स्थित एक द्वीप राष्ट्र है।"
    },
    {
        question: "'सेंट लॉरेंस नदी' (St. Lawrence River) का सबसे बड़ा द्वीप कौन सा है?",
        answers: shuffle([
            { text: "मॉन्ट्रियल द्वीप", correct: true },
            { text: "वेनिस द्वीप", correct: false },
            { text: "मैनहट्टन द्वीप", correct: false },
            { text: "लॉन्ग आईलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मॉन्ट्रियल द्वीप कनाडा में सेंट लॉरेंस नदी में स्थित है, और इस पर मॉन्ट्रियल शहर बसा है।"
    },
    {
        question: "'सैंडविच द्वीप' (South Sandwich Islands) किस महासागर में स्थित है?",
        answers: shuffle([
            { text: "हिंद महासागर", correct: false },
            { text: "प्रशांत महासागर", correct: false },
            { text: "दक्षिणी महासागर", correct: false },
            { text: "अटलांटिक महासागर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्षिण सैंडविच द्वीप दक्षिण अटलांटिक महासागर में स्थित एक निर्जन ब्रिटिश विदेशी क्षेत्र है।"
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
        question: "'साल्वेशन आइलैंड' (Salvation Islands) किस देश में स्थित है?",
        answers: shuffle([
            { text: "ब्राजील", correct: false },
            { text: "फ्रांस", correct: false },
            { text: "वेनेजुएला", correct: false },
            { text: "फ्रेंच गयाना", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> साल्वेशन आइलैंड फ्रेंच गयाना के तट पर स्थित है, जो फ्रांस का एक विदेशी विभाग है।"
    },
    {
        question: "'एलिज़ाबेथ द्वीप' (Elizabeth Islands) किस देश में स्थित है?",
        answers: shuffle([
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "न्यूजीलैंड", correct: false },
            { text: "अमेरिका", correct: true },
            { text: "कनाडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एलिज़ाबेथ द्वीप मैसाचुसेट्स, संयुक्त राज्य अमेरिका में स्थित है।"
    },
    {
        question: "'बैलेरिक द्वीप समूह' (Balearic Islands) किस सागर में स्थित है?",
        answers: shuffle([
            { text: "एड्रियाटिक सागर", correct: false },
            { text: "एजियन सागर", correct: false },
            { text: "भूमध्य सागर", correct: true },
            { text: "काला सागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैलेरिक द्वीप समूह, जिसमें मालोर्का, माइनोर्का, इबीसा और फोरमेंटेरा शामिल हैं, भूमध्य सागर में स्थित हैं और स्पेन का हिस्सा हैं।"
    },
    {
        question: "'हवाई' का सबसे ऊँचा पर्वत शिखर कौन सा है?",
        answers: shuffle([
            { text: "मौना लोआ", correct: false },
            { text: "किलाउआ", correct: false },
            { text: "मौना केआ", correct: true },
            { text: "हलेकाला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौना केआ हवाई का सबसे ऊँचा पर्वत है, और आधार से चोटी तक मापने पर यह पृथ्वी का सबसे ऊँचा पर्वत है (इसका अधिकांश हिस्सा पानी के नीचे है)।"
    },
    {
        question: "'कोमोरोस' (Comoros) द्वीप किस महासागर में स्थित है?",
        answers: shuffle([
            { text: "अटलांटिक महासागर", correct: false },
            { text: "हिंद महासागर", correct: true },
            { text: "प्रशांत महासागर", correct: false },
            { text: "आर्कटिक महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोमोरोस हिंद महासागर में मेडागास्कर और अफ्रीकी मुख्यभूमि के बीच स्थित एक द्वीप राष्ट्र है।"
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
        question: "'क्रेवेन द्वीप' के अलावा कौन सा द्वीप समूह अलास्का (अमेरिका) का हिस्सा है?",
        answers: shuffle([
            { text: "सखालिन द्वीप समूह", correct: false },
            { text: "अलेउतियन द्वीप समूह", correct: true },
            { text: "क्युरिल द्वीप समूह", correct: false },
            { text: "कमचटका प्रायद्वीप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अलेउतियन द्वीप समूह प्रशांत महासागर में स्थित है और यह अलास्का का एक हिस्सा है।"
    },
    {
        question: "'न्यूजीलैंड' के दो मुख्य द्वीपों को कौन सी जलडमरूमध्य अलग करती है?",
        answers: shuffle([
            { text: "कुक जलडमरूमध्य", correct: true },
            { text: "फोवियाक्स जलडमरूमध्य", correct: false },
            { text: "बैस जलडमरूमध्य", correct: false },
            { text: "टोरेस जलडमरूमध्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुक जलडमरूमध्य न्यूजीलैंड के उत्तरी और दक्षिणी द्वीपों को अलग करता है।"
    },
    {
        question: "'फिजी' की राजधानी सुवा किस द्वीप पर स्थित है?",
        answers: shuffle([
            { text: "वानुअ लेवु", correct: false },
            { text: "विटी लेवु", correct: true },
            { text: "टवेयुनी", correct: false },
            { text: "कांडावु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुवा, फिजी की राजधानी, विटी लेवु द्वीप पर स्थित है, जो फिजी का सबसे बड़ा द्वीप है।"
    },
    {
        question: "'सिसिली' और 'इतालवी प्रायद्वीप' को कौन सी जलडमरूमध्य अलग करती है?",
        answers: shuffle([
            { text: "मेसीना जलडमरूमध्य", correct: true },
            { text: "ओट्रान्टो जलडमरूमध्य", correct: false },
            { text: "बोनिफासियो जलडमरूमध्य", correct: false },
            { text: "जिब्राल्टर जलडमरूमध्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेसीना जलडमरूमध्य सिसिली को इतालवी मुख्यभूमि से अलग करती है।"
    },
    {
        question: "'बाली' द्वीप किस देश का हिस्सा है?",
        answers: shuffle([
            { text: "मलेशिया", correct: false },
            { text: "थाईलैंड", correct: false },
            { text: "फिलीपींस", correct: false },
            { text: "इंडोनेशिया", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाली, अपने पर्यटन और संस्कृति के लिए प्रसिद्ध, इंडोनेशिया का एक प्रांत है और एक द्वीप भी है।"
    },
    {
        question: "'फॉकलैंड द्वीप' की राजधानी क्या है?",
        answers: shuffle([
            { text: "पोर्ट स्टेनली", correct: true },
            { text: "जॉर्जटाउन", correct: false },
            { text: "किंग्सटाउन", correct: false },
            { text: "पोर्ट ऑफ स्पेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पोर्ट स्टेनली फॉकलैंड द्वीप की राजधानी और सबसे बड़ा शहर है।"
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
        question: "'एलिफैंटा गुफाएं' (Elephanta Caves) किस द्वीप पर स्थित हैं?",
        answers: shuffle([
            { text: "मुंबई द्वीप", correct: false },
            { text: "एलीफैंटा द्वीप", correct: true },
            { text: "सालसेट्टे द्वीप", correct: false },
            { text: "रायगढ़ द्वीप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एलीफैंटा गुफाएं मुंबई के पास एलीफैंटा द्वीप पर स्थित हैं।"
    },
    {
        question: "'लंदन' शहर किस द्वीप पर स्थित है?",
        answers: shuffle([
            { text: "ग्रेट ब्रिटेन", correct: true },
            { text: "आयरलैंड", correct: false },
            { text: "माल्टा", correct: false },
            { text: "ग्रीनलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लंदन ग्रेट ब्रिटेन द्वीप पर स्थित है।"
    },
    {
        question: "'बहामास' किस महासागर में स्थित एक द्वीप राष्ट्र है?",
        answers: shuffle([
            { text: "प्रशांत महासागर", correct: false },
            { text: "हिंद महासागर", correct: false },
            { text: "अटलांटिक महासागर", correct: true },
            { text: "आर्कटिक महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बहामास अटलांटिक महासागर में स्थित एक द्वीप राष्ट्र है।"
    },
    {
        question: "'डिएगो गार्सिया' किस देश का हिस्सा है?",
        answers: shuffle([
            { text: "अमेरिका", correct: false },
            { text: "भारत", correct: false },
            { text: "यूनाइटेड किंगडम", correct: true },
            { text: "ऑस्ट्रेलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डिएगो गार्सिया, यूनाइटेड किंगडम का एक विदेशी क्षेत्र है।"
    },
    {
        question: "'सिसिली' द्वीप किस महासागर/सागर में स्थित है?",
        answers: shuffle([
            { text: "एड्रियाटिक सागर", correct: false },
            { text: "भूमध्य सागर", correct: true },
            { text: "काला सागर", correct: false },
            { text: "लाल सागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिसिली भूमध्य सागर में स्थित है।"
    },
    {
        question: "'ग्रीनलैंड' के बाद विश्व का दूसरा सबसे बड़ा द्वीप कौन सा है?",
        answers: shuffle([
            { text: "बोर्नियो", correct: false },
            { text: "मेडागास्कर", correct: false },
            { text: "न्यू गिनी", correct: true },
            { text: "सुमात्रा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यू गिनी, क्षेत्रफल में दूसरा सबसे बड़ा द्वीप है।"
    },
    {
        question: "'साउथ आइलैंड' (South Island) और 'नॉर्थ आइलैंड' (North Island) किस देश के मुख्य द्वीप हैं?",
        answers: shuffle([
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "न्यूजीलैंड", correct: true },
            { text: "फिजी", correct: false },
            { text: "जापान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूजीलैंड के दो मुख्य द्वीप हैं: दक्षिणी द्वीप और उत्तरी द्वीप।"
    },
    {
        question: "'क्रेते' (Crete) द्वीप किस देश का सबसे बड़ा द्वीप है?",
        answers: shuffle([
            { text: "तुर्की", correct: false },
            { text: "इटली", correct: false },
            { text: "ग्रीस", correct: true },
            { text: "साइप्रस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रेते भूमध्य सागर में स्थित ग्रीस का सबसे बड़ा और सबसे अधिक आबादी वाला द्वीप है।"
    },
    {
        question: "'बैरन द्वीप' (Barren Island), भारत का एकमात्र सक्रिय ज्वालामुखी, कहाँ स्थित है?",
        answers: shuffle([
            { text: "अंडमान द्वीप समूह", correct: true },
            { text: "लक्षद्वीप", correct: false },
            { text: "दमन और दीव", correct: false },
            { text: "गोवा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैरन द्वीप अंडमान सागर में स्थित एक द्वीप है, और यह भारत का एकमात्र सक्रिय ज्वालामुखी है।"
    },
    {
        question: "'एलेक्जेंडर आइलैंड' (Alexander Island) किस महाद्वीप का सबसे बड़ा द्वीप है?",
        answers: shuffle([
            { text: "अंटार्कटिका", correct: true },
            { text: "उत्तरी अमेरिका", correct: false },
            { text: "एशिया", correct: false },
            { text: "अफ्रीका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एलेक्जेंडर आइलैंड अंटार्कटिका के पास स्थित सबसे बड़ा द्वीप है।"
    },
    {
        question: "'बोर्नियो' द्वीप का अधिकांश हिस्सा किस देश के अंतर्गत आता है?",
        answers: shuffle([
            { text: "मलेशिया", correct: false },
            { text: "ब्रुनेई", correct: false },
            { text: "इंडोनेशिया", correct: true },
            { text: "फिलीपींस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बोर्नियो द्वीप का लगभग 73% हिस्सा इंडोनेशिया का है, जबकि शेष मलेशिया और ब्रुनेई के बीच विभाजित है।"
    },
    {
        question: "'मिंडानाओ' द्वीप किस देश के दक्षिण में स्थित है?",
        answers: shuffle([
            { text: "मलेशिया", correct: false },
            { text: "फिलीपींस", correct: true },
            { text: "थाईलैंड", correct: false },
            { text: "इंडोनेशिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिंडानाओ फिलीपींस द्वीप समूह के दक्षिणी भाग में स्थित है।"
    },
    {
        question: "'न्यूजीलैंड' की राजधानी वेलिंगटन किस द्वीप पर स्थित है?",
        answers: shuffle([
            { text: "उत्तरी द्वीप", correct: true },
            { text: "दक्षिणी द्वीप", correct: false },
            { text: "स्टीवर्ट द्वीप", correct: false },
            { text: "चैथम द्वीप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेलिंगटन न्यूजीलैंड की राजधानी है और यह उत्तरी द्वीप पर स्थित है।"
    },
    {
        question: "'मलायी द्वीपसमूह' (Malay Archipelago) में कौन सा द्वीप शामिल नहीं है?",
        answers: shuffle([
            { text: "जावा", correct: false },
            { text: "सुमात्रा", correct: false },
            { text: "बोर्नियो", correct: false },
            { text: "श्रीलंका", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्रीलंका एक अलग द्वीप है, जबकि जावा, सुमात्रा और बोर्नियो मलायी द्वीपसमूह के प्रमुख द्वीप हैं।"
    },
    {
        question: "'कोमोडो द्वीप' (Komodo Island) किस देश का हिस्सा है, जो कोमोडो ड्रैगन के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "फिलीपींस", correct: false },
            { text: "इंडोनेशिया", correct: true },
            { text: "मलेशिया", correct: false },
            { text: "सिंगापुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोमोडो द्वीप इंडोनेशिया में स्थित है और यहाँ विश्व के सबसे बड़े छिपकली, कोमोडो ड्रैगन, पाए जाते हैं।"
    },
    {
        question: "'अंडमान द्वीप' और 'निकोबार द्वीप' को कौनसी अक्षांश रेखा अलग करती है?",
        answers: shuffle([
            { text: "8° चैनल", correct: false },
            { text: "9° चैनल", correct: false },
            { text: "10° चैनल", correct: true },
            { text: "11° चैनल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 10° चैनल अंडमान द्वीप समूह को निकोबार द्वीप समूह से अलग करता है।"
    },
    {
        question: "'फॉकलैंड द्वीप' किस देश से विवादित है?",
        answers: shuffle([
            { text: "ब्राजील", correct: false },
            { text: "चिली", correct: false },
            { text: "अर्जेंटीना", correct: true },
            { text: "पेरू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फॉकलैंड द्वीप पर यूनाइटेड किंगडम का शासन है, लेकिन अर्जेंटीना इसे अपना हिस्सा मानता है।"
    },
    {
        question: "'तस्मानिया' को 'ऑस्ट्रेलिया' से कौनसी जलडमरूमध्य अलग करती है?",
        answers: shuffle([
            { text: "बैस जलडमरूमध्य", correct: true },
            { text: "टोरेस जलडमरूमध्य", correct: false },
            { text: "कुक जलडमरूमध्य", correct: false },
            { text: "फोवियाक्स जलडमरूमध्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैस जलडमरूमध्य तस्मानिया और ऑस्ट्रेलिया के मुख्य भूभाग के बीच स्थित है।"
    },
    {
        question: "'डिएगो गार्सिया' किस द्वीपसमूह का हिस्सा है?",
        answers: shuffle([
            { text: "मालदीव", correct: false },
            { text: "चागोस द्वीपसमूह", correct: true },
            { text: "मॉरीशस", correct: false },
            { text: "सेशेल्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डिएगो गार्सिया चागोस द्वीपसमूह का हिस्सा है, जो हिंद महासागर में स्थित है।"
    },
    {
        question: "'जावा' द्वीप का सबसे ऊँचा पर्वत कौन सा है?",
        answers: shuffle([
            { text: "माउंट फ़ूजी", correct: false },
            { text: "माउंट सेमेरु", correct: true },
            { text: "माउंट मेरापी", correct: false },
            { text: "माउंट ताल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट सेमेरु जावा का सबसे ऊँचा और सबसे सक्रिय ज्वालामुखी है।"
    },
    {
        question: "'कोमोरोस' की राजधानी क्या है?",
        answers: shuffle([
            { text: "मोरनी", correct: true },
            { text: "विक्टोरिया", correct: false },
            { text: "पोर्ट लुई", correct: false },
            { text: "अंताननारिवो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोरनी कोमोरोस की राजधानी है।"
    },
    {
        question: "'यूराल पर्वत' किस देश में स्थित है, जो इसे दो भागों में बांटता है?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "रूस", correct: true },
            { text: "कजाकिस्तान", correct: false },
            { text: "मंगोलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूराल पर्वत रूस में स्थित है और यह यूरोप और एशिया के बीच की एक पारंपरिक सीमा माना जाता है।"
    },
    {
        question: "'अंडमान द्वीप' और 'निकोबार द्वीप' को कौनसी अक्षांश रेखा अलग करती है?",
        answers: shuffle([
            { text: "8° चैनल", correct: false },
            { text: "9° चैनल", correct: false },
            { text: "10° चैनल", correct: true },
            { text: "11° चैनल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 10° चैनल अंडमान द्वीप समूह को निकोबार द्वीप समूह से अलग करता है।"
    },
    {
        question: "'जापान' के सबसे उत्तरी और सबसे दक्षिणी द्वीपों का सही क्रम क्या है?",
        answers: shuffle([
            { text: "होन्शू और क्यूशू", correct: false },
            { text: "हॉकाइडो और क्यूशू", correct: false },
            { text: "हॉकाइडो और ओकिनावा", correct: true },
            { text: "होन्शू और ओकिनावा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हॉकाइडो जापान का सबसे उत्तरी प्रमुख द्वीप है, जबकि ओकिनावा द्वीप समूह जापान के सबसे दक्षिणी छोर पर है।"
    },
    {
        question: "'माल्टा' द्वीप समूह की राजधानी क्या है?",
        answers: shuffle([
            { text: "गोजो", correct: false },
            { text: "वलेत्ता", correct: true },
            { text: "मेदिना", correct: false },
            { text: "कोमिना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वलेत्ता माल्टा की राजधानी है, जो यूनेस्को की विश्व धरोहर स्थल भी है।"
    },
    {
        question: "'ओशिनिया' (Oceania) का सबसे बड़ा द्वीप कौन सा है?",
        answers: shuffle([
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "न्यूजीलैंड", correct: false },
            { text: "न्यू गिनी", correct: true },
            { text: "तस्मानिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओशिनिया महाद्वीप में ऑस्ट्रेलिया को अक्सर एक मुख्य भूमि माना जाता है, जबकि न्यू गिनी द्वीप इस क्षेत्र का सबसे बड़ा द्वीप है।"
    },
    {
        question: "'फिजी' द्वीप समूह किस सागर में स्थित है?",
        answers: shuffle([
            { text: "कोरल सागर", correct: false },
            { text: "फिजी सागर", correct: true },
            { text: "सुलु सागर", correct: false },
            { text: "जापानी सागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फिजी द्वीप समूह का अधिकांश हिस्सा फिजी सागर में स्थित है, जो प्रशांत महासागर का हिस्सा है।"
    },
    {
        question: "'अटलांटिक महासागर' का सबसे बड़ा द्वीप कौन सा है?",
        answers: shuffle([
            { text: "ग्रेट ब्रिटेन", correct: false },
            { text: "क्यूबा", correct: false },
            { text: "ग्रीनलैंड", correct: true },
            { text: "आइसलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रीनलैंड, भौगोलिक रूप से आर्कटिक महासागर और अटलांटिक महासागर के बीच स्थित है, लेकिन अक्सर इसे अटलांटिक का सबसे बड़ा द्वीप माना जाता है।"
    },
    {
        question: "'सिक्किम' राज्य, भारत के किस द्वीप के पास स्थित है?",
        answers: shuffle([
            { text: "पोर्ट ब्लेयर", correct: false },
            { text: "सालसेट्टे द्वीप", correct: false },
            { text: "बैरन द्वीप", correct: false },
            { text: "सिक्किम भारत की मुख्य भूमि पर है, यह एक द्वीप नहीं है।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिक्किम भारत के पूर्वोत्तर भाग में स्थित एक राज्य है और यह कोई द्वीप नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रश्न एक अपवाद है जो यह जाँचने के लिए है कि आप ध्यान से प्रश्नों को पढ़ रहे हैं या नहीं।"
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