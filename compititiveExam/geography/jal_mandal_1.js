const questions = [
    {
        topHeading: "जलमंडल पर आधारित 50 MCQs part_1 (quiz_no.)"
    },
    {
        question: "पृथ्वी की सतह का कितना प्रतिशत भाग जल से ढका हुआ है?",
        answers: shuffle([
            { text: "29%", correct: false },
            { text: "71%", correct: true },
            { text: "50%", correct: false },
            { text: "85%", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी की सतह का लगभग 71 प्रतिशत हिस्सा जल से आच्छादित है, जिसे जलमंडल कहा जाता है।"
    },
    {
        question: "विश्व का सबसे बड़ा और सबसे गहरा महासागर कौन सा है?",
        answers: shuffle([
            { text: "अटलांटिक महासागर", correct: false },
            { text: "हिंद महासागर", correct: false },
            { text: "प्रशांत महासागर", correct: true },
            { text: "आर्कटिक महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रशांत महासागर क्षेत्रफल और गहराई दोनों में विश्व का सबसे बड़ा महासागर है।"
    },
    {
        question: "विश्व का सबसे गहरा गर्त, मारियाना ट्रेंच, किस महासागर में स्थित है?",
        answers: shuffle([
            { text: "हिंद महासागर", correct: false },
            { text: "आर्कटिक महासागर", correct: false },
            { text: "अटलांटिक महासागर", correct: false },
            { text: "प्रशांत महासागर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मारियाना ट्रेंच पश्चिमी प्रशांत महासागर में स्थित है और यह पृथ्वी का सबसे गहरा बिंदु है।"
    },
    {
        question: "समुद्री जल की औसत लवणता कितनी होती है?",
        answers: shuffle([
            { text: "25 ग्राम प्रति हजार ग्राम", correct: false },
            { text: "35 ग्राम प्रति हजार ग्राम", correct: true },
            { text: "45 ग्राम प्रति हजार ग्राम", correct: false },
            { text: "50 ग्राम प्रति हजार ग्राम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समुद्री जल में घुले हुए लवणों की मात्रा को लवणता कहते हैं, और इसकी औसत मात्रा 35 भाग प्रति हजार (ppt) होती है।"
    },
    {
        question: "निम्नलिखित में से कौन सी एक गर्म महासागरीय धारा है?",
        answers: shuffle([
            { text: "लैब्राडोर धारा", correct: false },
            { text: "गल्फ स्ट्रीम", correct: true },
            { text: "कैनरी धारा", correct: false },
            { text: "ओयाशियो धारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गल्फ स्ट्रीम अटलांटिक महासागर की एक गर्म जलधारा है जो भूमध्य रेखा से ध्रुवों की ओर बहती है।"
    },
    {
        question: "ज्वार-भाटा की उत्पत्ति का मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "पृथ्वी का घूर्णन", correct: false },
            { text: "सूर्य और चंद्रमा का गुरुत्वाकर्षण बल", correct: true },
            { text: "महासागरीय धाराएँ", correct: false },
            { text: "पवनें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रमा और सूर्य के गुरुत्वाकर्षण खिंचाव के कारण समुद्री जल के स्तर में नियमित उतार-चढ़ाव को ज्वार-भाटा कहा जाता है।"
    },
    {
        question: "'रिंग ऑफ फायर' नामक क्षेत्र किस महासागर में स्थित है?",
        answers: shuffle([
            { text: "प्रशांत महासागर", correct: true },
            { text: "अटलांटिक महासागर", correct: false },
            { text: "हिंद महासागर", correct: false },
            { text: "आर्कटिक महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रिंग ऑफ फायर' प्रशांत महासागर के चारों ओर एक ऐसा क्षेत्र है जहाँ बड़ी संख्या में भूकंप और ज्वालामुखी विस्फोट होते हैं।"
    },
    {
        question: "निम्नलिखित में से कौन सा महासागर 'S' अक्षर के आकार का है?",
        answers: shuffle([
            { text: "प्रशांत महासागर", correct: false },
            { text: "हिंद महासागर", correct: false },
            { text: "आर्कटिक महासागर", correct: false },
            { text: "अटलांटिक महासागर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अटलांटिक महासागर का विस्तार उत्तर से दक्षिण तक 'S' अक्षर के आकार में है।"
    },
    {
        question: "विश्व की सबसे बड़ी ताजे पानी की झील कौन सी है?",
        answers: shuffle([
            { text: "बैकाल झील", correct: false },
            { text: "विक्टोरिया झील", correct: false },
            { text: "सुपीरियर झील", correct: true },
            { text: "मिशिगन झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुपीरियर झील उत्तरी अमेरिका में स्थित है और यह सतह क्षेत्रफल के हिसाब से दुनिया की सबसे बड़ी मीठे पानी की झील है।"
    },
    {
        question: "प्रवाल भित्तियाँ (Coral Reefs) मुख्य रूप से किससे बनी होती हैं?",
        answers: shuffle([
            { text: "रेत के कणों से", correct: false },
            { text: "समुद्री शैवाल से", correct: false },
            { text: "कैल्शियम कार्बोनेट से", correct: true },
            { text: "ज्वालामुखी लावा से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रवाल भित्तियाँ छोटे समुद्री जीवों (पॉलिप्स) के कंकालों से बनती हैं, जो मुख्य रूप से कैल्शियम कार्बोनेट के होते हैं।"
    },
    {
        question: "सुनामी लहरें मुख्य रूप से किसके कारण उत्पन्न होती हैं?",
        answers: shuffle([
            { text: "ज्वार-भाटा", correct: false },
            { text: "समुद्री तूफान", correct: false },
            { text: "समुद्र के नीचे भूकंप या ज्वालामुखी विस्फोट", correct: true },
            { text: "तेज हवाएँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुनामी विशाल लहरों की एक श्रृंखला है जो समुद्र तल पर अचानक होने वाली हलचल, जैसे भूकंप, के कारण उत्पन्न होती है।"
    },
    {
        question: "सरगासो सागर किस महासागर का हिस्सा है?",
        answers: shuffle([
            { text: "हिंद महासागर", correct: false },
            { text: "प्रशांत महासागर", correct: false },
            { text: "अटलांटिक महासागर", correct: true },
            { text: "आर्कटिक महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सरगासो सागर उत्तरी अटलांटिक महासागर का एक क्षेत्र है जो चारों ओर से महासागरीय धाराओं से घिरा है और इसकी कोई तटीय सीमा नहीं है।"
    },
    {
        question: "जल चक्र (Hydrological Cycle) की प्रक्रिया में निम्नलिखित में से क्या शामिल नहीं है?",
        answers: shuffle([
            { text: "वाष्पीकरण", correct: false },
            { text: "संघनन", correct: false },
            { text: "अवसादन", correct: true },
            { text: "वर्षण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवसादन (Sedimentation) जल चक्र का हिस्सा नहीं है;<br><br><i class='fa-solid fa-angles-right icon'></i> जल चक्र में वाष्पीकरण, संघनन, वर्षण और अपवाह जैसी प्रक्रियाएँ शामिल हैं।"
    },
    {
        question: "किस जलसंधि (Strait) को 'भूमध्य सागर की कुंजी' कहा जाता है?",
        answers: shuffle([
            { text: "डोवर जलसंधि", correct: false },
            { text: "जिब्राल्टर जलसंधि", correct: true },
            { text: "बेरिंग जलसंधि", correct: false },
            { text: "मलक्का जलसंधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जिब्राल्टर जलसंधि अटलांटिक महासागर को भूमध्य सागर से जोड़ती है और इसके रणनीतिक महत्व के कारण इसे 'भूमध्य सागर की कुंजी' कहा जाता है।"
    },
    {
        question: "विश्व का सबसे बड़ा डेल्टा कौन सा है?",
        answers: shuffle([
            { text: "नील नदी डेल्टा", correct: false },
            { text: "मिसिसिपी डेल्टा", correct: false },
            { text: "सुंदरबन डेल्टा", correct: true },
            { text: "अमेज़ॅन डेल्टा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गंगा और ब्रह्मपुत्र नदियों द्वारा बनाया गया सुंदरबन डेल्टा दुनिया का सबसे बड़ा नदी डेल्टा है।"
    },
    {
        question: "विश्व का सबसे ऊँचा जलप्रपात, एंजेल फॉल्स, किस देश में स्थित है?",
        answers: shuffle([
            { text: "ब्राजील", correct: false },
            { text: "कनाडा", correct: false },
            { text: "वेनेजुएला", correct: true },
            { text: "संयुक्त राज्य अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंजेल फॉल्स वेनेजुएला में स्थित दुनिया का सबसे ऊँचा निर्बाध जलप्रपात है।"
    },
    {
        question: "निम्नलिखित में से कौन सी एक ठंडी महासागरीय धारा है?",
        answers: shuffle([
            { text: "कुरोशियो धारा", correct: false },
            { text: "ब्राजील धारा", correct: false },
            { text: "पेरूवियन (हम्बोल्ट) धारा", correct: true },
            { text: "अगुलहास धारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हम्बोल्ट धारा, जिसे पेरूवियन धारा भी कहा जाता है, प्रशांत महासागर की एक ठंडी जलधारा है।"
    },
    {
        question: "झीलों का देश किसे कहा जाता है?",
        answers: shuffle([
            { text: "नॉर्वे", correct: false },
            { text: "स्वीडन", correct: false },
            { text: "फिनलैंड", correct: true },
            { text: "कनाडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फिनलैंड में हजारों झीलें हैं, जिसके कारण इसे 'झीलों का देश' या 'हजार झीलों की भूमि' कहा जाता है।"
    },
    {
        question: "पनामा नहर किन दो महासागरों को जोड़ती है?",
        answers: shuffle([
            { text: "प्रशांत और हिंद महासागर", correct: false },
            { text: "अटलांटिक और प्रशांत महासागर", correct: true },
            { text: "अटलांटिक और हिंद महासागर", correct: false },
            { text: "आर्कटिक और अटलांटिक महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पनामा नहर अटलांटिक महासागर को प्रशांत महासागर से जोड़ने वाली एक कृत्रिम जलमार्ग है।"
    },
    {
        question: "स्वेज नहर किन दो सागरों को जोड़ती है?",
        answers: shuffle([
            { text: "भूमध्य सागर और काला सागर", correct: false },
            { text: "लाल सागर और अरब सागर", correct: false },
            { text: "भूमध्य सागर और लाल सागर", correct: true },
            { text: "कैरेबियन सागर और प्रशांत महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्वेज नहर मिस्र में एक कृत्रिम समुद्री-स्तरीय जलमार्ग है जो भूमध्य सागर को लाल सागर से जोड़ता है।"
    },
    {
        question: "मृत सागर (Dead Sea) की उच्च लवणता का मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "कम वर्षा", correct: false },
            { text: "उच्च वाष्पीकरण और कोई निकास न होना", correct: true },
            { text: "ज्वालामुखी गतिविधि", correct: false },
            { text: "मानव निर्मित प्रदूषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मृत सागर में नदियों से पानी आता है लेकिन बाहर नहीं जाता।<br><br><i class='fa-solid fa-angles-right icon'></i> उच्च तापमान के कारण पानी का तेजी से वाष्पीकरण होता है, जिससे लवण पीछे रह जाते हैं और सांद्रता बढ़ जाती है।"
    },
    {
        question: "महाद्वीपीय मग्नतट (Continental Shelf) क्या है?",
        answers: shuffle([
            { text: "महासागर का सबसे गहरा भाग", correct: false },
            { text: "महाद्वीप का जलमग्न विस्तार", correct: true },
            { text: "दो महासागरों के बीच एक संकीर्ण भूमि पट्टी", correct: false },
            { text: "एक ज्वालामुखी द्वीप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाद्वीपीय मग्नतट प्रत्येक महाद्वीप का उथला, जलमग्न किनारा होता है जो तटरेखा से गहरे समुद्र तक फैला होता है।"
    },
    {
        question: "पौधों द्वारा जलवाष्प के उत्सर्जन की प्रक्रिया को क्या कहते हैं?",
        answers: shuffle([
            { text: "वाष्पीकरण", correct: false },
            { text: "संघनन", correct: false },
            { text: "वर्षण", correct: false },
            { text: "वाष्पोत्सर्जन (Transpiration)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वाष्पोत्सर्जन वह प्रक्रिया है जिसके द्वारा पौधों की पत्तियों से जलवाष्प वायुमंडल में छोड़ा जाता है।"
    },
    {
        question: "विश्व की सबसे गहरी झील कौन सी है?",
        answers: shuffle([
            { text: "टंगानिका झील", correct: false },
            { text: "सुपीरियर झील", correct: false },
            { text: "कैस्पियन सागर", correct: false },
            { text: "बैकाल झील", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> साइबेरिया (रूस) में स्थित बैकाल झील दुनिया की सबसे गहरी और सबसे पुरानी ताजे पानी की झील है।"
    },
    {
        question: "'एल नीनो' (El Niño) घटना किस महासागर में होती है?",
        answers: shuffle([
            { text: "अटलांटिक महासागर", correct: false },
            { text: "हिंद महासागर", correct: false },
            { text: "प्रशांत महासागर", correct: true },
            { text: "आर्कटिक महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एल नीनो एक जलवायु पैटर्न है जो पूर्वी उष्णकटिबंधीय प्रशांत महासागर में सतही जल के असामान्य रूप से गर्म होने का वर्णन करता है।"
    },
    {
        question: "ग्रेट बैरियर रीफ कहाँ स्थित है?",
        answers: shuffle([
            { text: "संयुक्त राज्य अमेरिका के तट पर", correct: false },
            { text: "ऑस्ट्रेलिया के पूर्वी तट पर", correct: true },
            { text: "भारत के पश्चिमी तट पर", correct: false },
            { text: "अफ्रीका के दक्षिणी तट पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेट बैरियर रीफ दुनिया की सबसे बड़ी प्रवाल भित्ति प्रणाली है, जो ऑस्ट्रेलिया के क्वींसलैंड के तट पर स्थित है।"
    },
    {
        question: "वह काल्पनिक रेखा जो समान लवणता वाले बिंदुओं को जोड़ती है, क्या कहलाती है?",
        answers: shuffle([
            { text: "आइसोबार", correct: false },
            { text: "आइसोहाइट", correct: false },
            { text: "आइसोहेलाइन", correct: true },
            { text: "आइसोथर्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आइसोहेलाइन मानचित्र पर समान समुद्री लवणता वाले स्थानों को मिलाने वाली रेखा है।"
    },
    {
        question: "किस महासागर को 'हेरिंग तालाब' (Herring Pond) के नाम से भी जाना जाता है?",
        answers: shuffle([
            { text: "प्रशांत महासागर", correct: false },
            { text: "हिंद महासागर", correct: false },
            { text: "अटलांटिक महासागर", correct: true },
            { text: "आर्कटिक महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अटलांटिक महासागर में हेरिंग मछली की प्रचुरता के कारण, विशेष रूप से उत्तरी भाग में, इसे कभी-कभी 'हेरिंग तालाब' कहा जाता है।"
    },
    {
        question: "विश्व का सबसे बड़ा द्वीप कौन सा है?",
        answers: shuffle([
            { text: "न्यू गिनी", correct: false },
            { text: "बोर्नियो", correct: false },
            { text: "ग्रीनलैंड", correct: true },
            { text: "मेडागास्कर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रीनलैंड आर्कटिक और अटलांटिक महासागरों के बीच स्थित दुनिया का सबसे बड़ा द्वीप है।"
    },
    {
        question: "महासागरीय जल के तापमान को प्रभावित करने वाला मुख्य कारक क्या है?",
        answers: shuffle([
            { text: "लवणता", correct: false },
            { text: "गहराई", correct: false },
            { text: "सौर विकिरण (अक्षांश)", correct: true },
            { text: "महासागरीय धाराएँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य से प्राप्त होने वाली ऊर्जा (सौर विकिरण) महासागरीय जल के तापमान को निर्धारित करने वाला प्राथमिक कारक है, जो अक्षांश के साथ बदलता है।"
    },
    {
        question: "बेरिंग जलसंधि किन दो भूभागों को अलग करती है?",
        answers: shuffle([
            { text: "एशिया और अफ्रीका", correct: false },
            { text: "उत्तरी अमेरिका और दक्षिण अमेरिका", correct: false },
            { text: "एशिया और उत्तरी अमेरिका", correct: true },
            { text: "यूरोप और अफ्रीका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बेरिंग जलसंधि एशिया (रूस) को उत्तरी अमेरिका (अलास्का) से अलग करती है और आर्कटिक महासागर को बेरिंग सागर (प्रशांत महासागर) से जोड़ती है।"
    },
    {
        question: "ज्वारीय ऊर्जा (Tidal Energy) उत्पादन के लिए भारत में सबसे उपयुक्त स्थान कौन सा है?",
        answers: shuffle([
            { text: "मन्नार की खाड़ी", correct: false },
            { text: "खंभात की खाड़ी", correct: true },
            { text: "चिल्का झील", correct: false },
            { text: "सुंदरबन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खंभात की खाड़ी (गुजरात) में ज्वार की ऊँचाई बहुत अधिक होती है, जो इसे भारत में ज्वारीय ऊर्जा उत्पादन के लिए सबसे आदर्श स्थान बनाती है।"
    },
    {
        question: "हिमनद (Glacier) द्वारा निर्मित 'U' आकार की घाटी को क्या कहते हैं?",
        answers: shuffle([
            { text: "गॉर्ज", correct: false },
            { text: "कैनियन", correct: false },
            { text: "वी-आकार की घाटी", correct: false },
            { text: "हिमनद द्रोणी (Glacial Trough)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिमनद जब किसी घाटी से होकर गुजरते हैं, तो वे उसे काटकर चौड़ा कर देते हैं, जिससे एक विशिष्ट 'U' आकार की घाटी बनती है।"
    },
    {
        question: "'महासागरीय मरुस्थल' किसे कहा जाता है?",
        answers: shuffle([
            { text: "सरगासो सागर", correct: true },
            { text: "लाल सागर", correct: false },
            { text: "मृत सागर", correct: false },
            { text: "काला सागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सरगासो सागर में पोषक तत्वों की कमी और शांत जल के कारण प्लवक का उत्पादन बहुत कम होता है, इसलिए इसे 'महासागरीय मरुस्थल' भी कहते हैं।"
    },
    {
        question: "विश्व जल दिवस कब मनाया जाता है?",
        answers: shuffle([
            { text: "22 अप्रैल", correct: false },
            { text: "5 जून", correct: false },
            { text: "22 मार्च", correct: true },
            { text: "16 सितंबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मीठे पानी के महत्व के बारे में जागरूकता बढ़ाने के लिए हर साल 22 मार्च को विश्व जल दिवस मनाया जाता है।"
    },
    {
        question: "जब चंद्रमा, सूर्य और पृथ्वी एक सीधी रेखा में होते हैं, तो किस प्रकार का ज्वार आता है?",
        answers: shuffle([
            { text: "निम्न ज्वार (Neap Tide)", correct: false },
            { text: "वृहत ज्वार (Spring Tide)", correct: true },
            { text: "दैनिक ज्वार", correct: false },
            { text: "मिश्रित ज्वार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पूर्णिमा और अमावस्या के दिन, सूर्य, चंद्रमा और पृथ्वी एक सीध में होते हैं, जिससे उनके संयुक्त गुरुत्वाकर्षण बल के कारण सामान्य से अधिक ऊँचे ज्वार (वृहत ज्वार) आते हैं।"
    },
    {
        question: "कौन सी दो जलधाराएँ न्यूफ़ाउंडलैंड के पास मिलती हैं, जिससे घना कोहरा और मछली पकड़ने का समृद्ध क्षेत्र बनता है?",
        answers: shuffle([
            { text: "गल्फ स्ट्रीम और कुरोशियो", correct: false },
            { text: "लैब्राडोर और गल्फ स्ट्रीम", correct: true },
            { text: "कैनरी और बेंगुएला", correct: false },
            { text: "ब्राजील और फ़ॉकलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ठंडी लैब्राडोर धारा और गर्म गल्फ स्ट्रीम के मिलने से न्यूफ़ाउंडलैंड के पास घना कोहरा बनता है और यह क्षेत्र प्लवक में समृद्ध होता है, जो मछलियों को आकर्षित करता है।"
    },
    {
        question: "भारत की सबसे लंबी नदी कौन सी है?",
        answers: shuffle([
            { text: "गोदावरी", correct: false },
            { text: "ब्रह्मपुत्र", correct: false },
            { text: "गंगा", correct: true },
            { text: "यमुना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गंगा नदी भारत में बहने वाली सबसे लंबी नदी है, जिसकी लंबाई लगभग 2525 किलोमीटर है।"
    },
    {
        question: "'ऑक्स-बो' झील (Oxbow Lake) का निर्माण किसके द्वारा होता है?",
        answers: shuffle([
            { text: "हिमनद", correct: false },
            { text: "पवन", correct: false },
            { text: "नदी", correct: true },
            { text: "समुद्री लहरें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब एक मैदानी नदी का विसर्प (meander) बहुत अधिक मुड़ जाता है, तो नदी अपना रास्ता सीधा कर लेती है, जिससे विसर्प का कटा हुआ हिस्सा एक 'U' आकार की झील बन जाता है, जिसे ऑक्स-बो झील कहते हैं।"
    },
    {
        question: "विश्व का एकमात्र महासागर जिसका नाम किसी देश के नाम पर है, कौन सा है?",
        answers: shuffle([
            { text: "प्रशांत महासागर", correct: false },
            { text: "आर्कटिक महासागर", correct: false },
            { text: "अटलांटिक महासागर", correct: false },
            { text: "हिंद महासागर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद महासागर का नाम भारत (हिंदुस्तान) के नाम पर रखा गया है।"
    },
    {
        question: "डार्लिंग और मर्रे नदियाँ किस देश में बहती हैं?",
        answers: shuffle([
            { text: "कनाडा", correct: false },
            { text: "ब्राजील", correct: false },
            { text: "ऑस्ट्रेलिया", correct: true },
            { text: "मिस्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मर्रे-डार्लिंग नदी प्रणाली ऑस्ट्रेलिया की सबसे महत्वपूर्ण और सबसे लंबी नदी प्रणाली है।"
    },
    {
        question: "समुद्री जल में पाया जाने वाला सबसे प्रचुर लवण कौन सा है?",
        answers: shuffle([
            { text: "मैग्नीशियम क्लोराइड", correct: false },
            { text: "कैल्शियम सल्फेट", correct: false },
            { text: "सोडियम क्लोराइड", correct: true },
            { text: "पोटेशियम क्लोराइड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोडियम क्लोराइड (साधारण नमक) समुद्री जल की लवणता का लगभग 77% हिस्सा बनाता है।"
    },
    {
        question: "पृथ्वी पर उपलब्ध कुल जल का कितना प्रतिशत मीठा जल (Freshwater) है?",
        answers: shuffle([
            { text: "10%", correct: false },
            { text: "5%", correct: false },
            { text: "2.5%", correct: true },
            { text: "1%", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी के कुल जल का केवल लगभग 2.5% ही मीठा जल है, और इसका अधिकांश हिस्सा ग्लेशियरों और बर्फ की चोटियों में जमा है।"
    },
    {
        question: "विश्व की सबसे बड़ी खारे पानी की झील कौन सी है?",
        answers: shuffle([
            { text: "मृत सागर", correct: false },
            { text: "ग्रेट साल्ट लेक", correct: false },
            { text: "कैस्पियन सागर", correct: true },
            { text: "वॉन झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैस्पियन सागर क्षेत्रफल के हिसाब से दुनिया की सबसे बड़ी झील या अंतर्देशीय समुद्र है, और इसका पानी खारा है।"
    },
    {
        question: "मध्य-महासागरीय कटक (Mid-Oceanic Ridge) का निर्माण कैसे होता है?",
        answers: shuffle([
            { text: "प्लेटों के अभिसरण से", correct: false },
            { text: "प्लेटों के अपसरण से", correct: true },
            { text: "अवसादों के जमाव से", correct: false },
            { text: "ज्वालामुखी द्वीपों के कटाव से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब दो टेक्टोनिक प्लेटें एक दूसरे से दूर हटती हैं, तो नीचे से मैग्मा ऊपर आकर जम जाता है, जिससे समुद्र तल पर एक पर्वत श्रृंखला (कटक) का निर्माण होता है।"
    },
    {
        question: "कौन सा सागर यूरोप को अफ्रीका से अलग करता है?",
        answers: shuffle([
            { text: "लाल सागर", correct: false },
            { text: "काला सागर", correct: false },
            { text: "भूमध्य सागर", correct: true },
            { text: "कैरेबियन सागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भूमध्य सागर यूरोप और अफ्रीका महाद्वीपों के बीच स्थित है।"
    },
    {
        question: "महासागरीय जल का घनत्व किन कारकों पर निर्भर करता है?",
        answers: shuffle([
            { text: "केवल तापमान", correct: false },
            { text: "केवल लवणता", correct: false },
            { text: "तापमान और लवणता दोनों", correct: true },
            { text: "केवल गहराई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ठंडा और अधिक खारा पानी गर्म और कम खारे पानी की तुलना में अधिक सघन होता है।"
    },
    {
        question: "डेन्यूब नदी किस सागर में गिरती है?",
        answers: shuffle([
            { text: "भूमध्य सागर", correct: false },
            { text: "उत्तरी सागर", correct: false },
            { text: "काला सागर", correct: true },
            { text: "बाल्टिक सागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डेन्यूब नदी मध्य और पूर्वी यूरोप में बहने वाली एक प्रमुख नदी है जो अंततः काला सागर में मिल जाती है।"
    },
    {
        question: "दुनिया का सबसे बड़ा ज्वार-भाटा कहाँ आता है?",
        answers: shuffle([
            { text: "हडसन की खाड़ी", correct: false },
            { text: "फंडी की खाड़ी", correct: true },
            { text: "बंगाल की खाड़ी", correct: false },
            { text: "मैक्सिको की खाड़ी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कनाडा में स्थित फंडी की खाड़ी दुनिया में सबसे ऊँचे ज्वारीय परास (Tidal Range) के लिए प्रसिद्ध है।"
    },
    {
        question: "जब नदी समुद्र से मिलती है तो उसके द्वारा लाए गए अवसाद के निक्षेपण से कौन सी भू-आकृति बनती है?",
        answers: shuffle([
            { text: "डेल्टा", correct: true },
            { text: "गॉर्ज", correct: false },
            { text: "जलप्रपात", correct: false },
            { text: "विसर्प", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नदी जब अपने मुहाने पर समुद्र से मिलती है तो उसकी गति धीमी हो जाती है, जिससे वह अपने साथ लाए मलबे (अवसाद) को जमा कर देती है, जिससे डेल्टा का निर्माण होता है।"
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