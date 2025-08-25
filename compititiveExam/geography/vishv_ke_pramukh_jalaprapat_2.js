const questions = [
    {
        topHeading: "विश्व के प्रमुख जलप्रपातों पर आधारित बहुविकल्पीय प्रश्न (MCQs) part 2  (quiz_no. 79)."
    },
    {
        question: "सथरन जलप्रपात किस देश में स्थित है?",
        answers: shuffle([
            { text: "नॉर्वे", correct: false },
            { text: "न्यूजीलैंड", correct: true },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "कनाडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सथरन जलप्रपात, जिसे सुथरलैंड जलप्रपात के नाम से भी जाना जाता है, न्यूजीलैंड के दक्षिण द्वीप में स्थित है।"
    },
    {
        question: "नियाग्रा जलप्रपात के समीप कौन सा शहर स्थित है?",
        answers: shuffle([
            { text: "न्यूयॉर्क शहर", correct: false },
            { text: "नियाग्रा फॉल्स, न्यूयॉर्क", correct: true },
            { text: "शिकागो", correct: false },
            { text: "बोस्टन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नियाग्रा जलप्रपात के अमेरिका की तरफ नियाग्रा फॉल्स, न्यूयॉर्क नामक शहर है, जबकि कनाडा की तरफ भी नियाग्रा फॉल्स, ओंटारियो नामक शहर है।"
    },
    {
        question: "इगुआजु जलप्रपात किस राष्ट्रीय उद्यान का हिस्सा है?",
        answers: shuffle([
            { text: "इगुआजु नेशनल पार्क", correct: true },
            { text: "योसेमाइट नेशनल पार्क", correct: false },
            { text: "कानाइमा नेशनल पार्क", correct: false },
            { text: "विक्टोरिया फॉल्स नेशनल पार्क", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इगुआजु जलप्रपात अर्जेंटीना और ब्राजील दोनों देशों में स्थित इगुआजु नेशनल पार्क का हिस्सा है।"
    },
    {
        question: "विक्टोरिया जलप्रपात किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "यूरोप", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "अफ्रीका", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्टोरिया जलप्रपात अफ्रीका महाद्वीप में ज़ाम्बिया और जिम्बाब्वे की सीमा पर स्थित है।"
    },
    {
        question: "विश्व का सबसे ऊँचा जलप्रपात किस प्रकार के जलप्रपात का उदाहरण है?",
        answers: shuffle([
            { text: "कतार जलप्रपात (Plunge waterfall)", correct: true },
            { text: "खंडित जलप्रपात (Segmented waterfall)", correct: false },
            { text: "झरना जलप्रपात (Tiered waterfall)", correct: false },
            { text: "घुमावदार जलप्रपात (Cascade waterfall)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंजेल जलप्रपात एक कतार जलप्रपात है, जहाँ पानी सीधे एक खड़ी चट्टान से नीचे गिरता है।"
    },
    {
        question: "हॉर्सशू जलप्रपात किस जलप्रपात का हिस्सा है?",
        answers: shuffle([
            { text: "एंजेल जलप्रपात", correct: false },
            { text: "इगुआजु जलप्रपात", correct: false },
            { text: "नियाग्रा जलप्रपात", correct: true },
            { text: "विक्टोरिया जलप्रपात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हॉर्सशू फॉल्स (Horsehoe Falls) नियाग्रा जलप्रपात का सबसे बड़ा और शक्तिशाली हिस्सा है, जो कनाडा की तरफ स्थित है।"
    },
    {
        question: "भारत का जोग जलप्रपात किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "गोदावरी नदी", correct: false },
            { text: "कृष्णा नदी", correct: false },
            { text: "शरावती नदी", correct: true },
            { text: "कावेरी नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जोग जलप्रपात (जिसे गेरुसोप्पा जलप्रपात भी कहते हैं) कर्नाटक में शरावती नदी पर स्थित है।"
    },
    {
        question: "'चामरेल जलप्रपात' (Chamarel Falls) किस देश में स्थित है?",
        answers: shuffle([
            { text: "मॉरीशस", correct: true },
            { text: "मेडागास्कर", correct: false },
            { text: "दक्षिण अफ्रीका", correct: false },
            { text: "केन्या", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चामरेल जलप्रपात, जो अपनी सात रंग की मिट्टी के लिए भी जाना जाता है, मॉरीशस द्वीप पर स्थित है।"
    },
    {
        question: "सुवनोमो जलप्रपात (Suonomo Falls) किस देश में स्थित है?",
        answers: shuffle([
            { text: "नॉर्वे", correct: true },
            { text: "फिनलैंड", correct: false },
            { text: "स्वीडन", correct: false },
            { text: "रूस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुवनोमो जलप्रपात यूरोप के नॉर्वे देश में स्थित है।"
    },
    {
        question: "दुनिया का सबसे ऊँचा जलप्रपात 'एंजेल जलप्रपात' किस पर्वत श्रृंखला में स्थित है?",
        answers: shuffle([
            { text: "एंडीज़ पर्वत", correct: false },
            { text: "रॉकी पर्वत", correct: false },
            { text: "गुयाना हाइलैंड्स", correct: true },
            { text: "हिमालय पर्वत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंजेल जलप्रपात दक्षिण अमेरिका में गुयाना हाइलैंड्स के अंतर्गत औयान-तेपुई पठार पर स्थित है।"
    },
    {
        question: "मर्चिसन जलप्रपात किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "ज़ांबेज़ी नदी", correct: false },
            { text: "कांगो नदी", correct: false },
            { text: "नील नदी", correct: true },
            { text: "नाइजर नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मर्चिसन जलप्रपात युगांडा में नील नदी पर स्थित है, जो एक प्रसिद्ध वन्यजीव अभयारण्य का हिस्सा भी है।"
    },
    {
        question: "इगुआजु जलप्रपात किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "अफ्रीका", correct: false },
            { text: "एशिया", correct: false },
            { text: "दक्षिण अमेरिका", correct: true },
            { text: "उत्तरी अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इगुआजु जलप्रपात अर्जेंटीना और ब्राजील की सीमा पर स्थित है, जो दक्षिण अमेरिका महाद्वीप में हैं।"
    },
    {
        question: "'काला पानी' के नाम से प्रसिद्ध कायेतूर जलप्रपात किस देश में स्थित है?",
        answers: shuffle([
            { text: "गुयाना", correct: true },
            { text: "पेरू", correct: false },
            { text: "कोलंबिया", correct: false },
            { text: "बोलीविया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कायेतूर जलप्रपात दक्षिण अमेरिका के गुयाना में स्थित है और इसका पानी टैनिन के कारण काला दिखाई देता है।"
    },
    {
        question: "भारत का कुंचिकल जलप्रपात किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "केरल", correct: false },
            { text: "कर्नाटक", correct: true },
            { text: "तमिलनाडु", correct: false },
            { text: "आंध्र प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुंचिकल जलप्रपात कर्नाटक के शिमोगा जिले में स्थित है।"
    },
    {
        question: "योसेमाइट जलप्रपात किस देश में स्थित है?",
        answers: shuffle([
            { text: "कनाडा", correct: false },
            { text: "अमेरिका", correct: true },
            { text: "मेक्सिको", correct: false },
            { text: "ग्रीनलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> योसेमाइट जलप्रपात अमेरिका के कैलिफ़ोर्निया राज्य में योसेमाइट नेशनल पार्क में स्थित है।"
    },
    {
        question: "विश्व का सबसे बड़ा जलप्रपात कौन सा है (आयतन की दृष्टि से)?",
        answers: shuffle([
            { text: "इगुआजु जलप्रपात", correct: false },
            { text: "नियाग्रा जलप्रपात", correct: false },
            { text: "विक्टोरिया जलप्रपात", correct: false },
            { text: "इंगा जलप्रपात", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आयतन की दृष्टि से दुनिया का सबसे बड़ा जलप्रपात अफ्रीका की कांगो नदी पर स्थित इंगा जलप्रपात है, जिसमें प्रति सेकंड भारी मात्रा में पानी गिरता है।"
    },
    {
        question: "इगुआजु जलप्रपात के बारे में क्या सही है?",
        answers: shuffle([
            { text: "यह विश्व का सबसे ऊँचा जलप्रपात है।", correct: false },
            { text: "यह केवल अर्जेंटीना में स्थित है।", correct: false },
            { text: "यह ब्राजील और अर्जेंटीना की सीमा पर स्थित है।", correct: true },
            { text: "यह नियाग्रा जलप्रपात से छोटा है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इगुआजु जलप्रपात ब्राजील और अर्जेंटीना की सीमा पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह सबसे ऊँचा नहीं है, बल्कि सबसे चौड़ा जलप्रपात है।"
    },
    {
        question: "'वेर्ना जलप्रपात' (Verna Falls) किस देश में स्थित है?",
        answers: shuffle([
            { text: "भारत", correct: true },
            { text: "रूस", correct: false },
            { text: "चीन", correct: false },
            { text: "स्लोवाकिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेर्ना जलप्रपात गोवा, भारत में स्थित है।"
    },
    {
        question: "विक्टोरिया जलप्रपात का पानी किस सागर में गिरता है?",
        answers: shuffle([
            { text: "अटलांटिक महासागर", correct: false },
            { text: "हिंद महासागर", correct: false },
            { text: "प्रशांत महासागर", correct: false },
            { text: "इनमें से कोई नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्टोरिया जलप्रपात का पानी ज़ांबेज़ी नदी से होकर बहता है, जो अंततः हिंद महासागर में गिरती है, लेकिन जलप्रपात का पानी सीधे किसी सागर में नहीं गिरता।"
    },
    {
        question: "'नील नदी' पर स्थित मर्चिसन जलप्रपात किस देश में स्थित है?",
        answers: shuffle([
            { text: "मिस्र", correct: false },
            { text: "सूडान", correct: false },
            { text: "युगांडा", correct: true },
            { text: "इथियोपिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मर्चिसन जलप्रपात युगांडा के उत्तरी भाग में स्थित है।"
    },
    {
        question: "'जुलस जलप्रपात' (Julus Falls) किस देश में स्थित है?",
        answers: shuffle([
            { text: "अमेरिका", correct: true },
            { text: "चीन", correct: false },
            { text: "रूस", correct: false },
            { text: "जर्मनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जुलस जलप्रपात अमेरिका के हवाई द्वीप में स्थित है।"
    },
    {
        question: "इगा जलप्रपात किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "नाइजर नदी", correct: false },
            { text: "कांगो नदी", correct: true },
            { text: "ज़ांबेज़ी नदी", correct: false },
            { text: "ऑरेंज नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इगा जलप्रपात अफ्रीका की कांगो नदी पर स्थित है।"
    },
    {
        question: "नियाग्रा जलप्रपात की कुल चौड़ाई कितनी है?",
        answers: shuffle([
            { text: "1 किलोमीटर", correct: false },
            { text: "2 किलोमीटर", correct: false },
            { text: "1.2 किलोमीटर", correct: true },
            { text: "1.5 किलोमीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नियाग्रा जलप्रपात की कुल चौड़ाई लगभग 1,203 मीटर (1.2 किलोमीटर) है।"
    },
    {
        question: "एंजेल जलप्रपात को किस यूरोपीय खोजकर्ता ने 'खोजा' था?",
        answers: shuffle([
            { text: "वास्को डी गामा", correct: false },
            { text: "जेम्स कुक", correct: false },
            { text: "जिमी एंजेल", correct: true },
            { text: "क्रिस्टोफर कोलंबस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंजेल जलप्रपात का नाम अमेरिकी एविएटर जिमी एंजेल के नाम पर रखा गया था, जिन्होंने 1933 में इसे खोजा था।"
    },
    {
        question: "जोग जलप्रपात का दूसरा नाम क्या है?",
        answers: shuffle([
            { text: "कुंचिकल जलप्रपात", correct: false },
            { text: "शिवसमुद्रम जलप्रपात", correct: false },
            { text: "गेरुसोप्पा जलप्रपात", correct: true },
            { text: "हुंडरू जलप्रपात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जोग जलप्रपात को गेरुसोप्पा जलप्रपात के नाम से भी जाना जाता है।"
    },
    {
        question: "'गोकटा जलप्रपात' (Gocta Falls) किस देश में स्थित है?",
        answers: shuffle([
            { text: "ब्राजील", correct: false },
            { text: "पेरू", correct: true },
            { text: "चिली", correct: false },
            { text: "कोलंबिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोकटा जलप्रपात दक्षिण अमेरिका के पेरू में स्थित है और यह दुनिया के सबसे ऊँचे जलप्रपातों में से एक है।"
    },
    {
        question: "विक्टोरिया जलप्रपात की कुल ऊँचाई कितनी है?",
        answers: shuffle([
            { text: "100 मीटर", correct: false },
            { text: "108 मीटर", correct: true },
            { text: "120 मीटर", correct: false },
            { text: "150 मीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्टोरिया जलप्रपात की कुल ऊँचाई 108 मीटर है।"
    },
    {
        question: "नियाग्रा जलप्रपात के किस हिस्से को 'ब्राइडल वेल फॉल्स' (Bridal Veil Falls) कहा जाता है?",
        answers: shuffle([
            { text: "सबसे छोटा हिस्सा", correct: true },
            { text: "सबसे बड़ा हिस्सा", correct: false },
            { text: "कनाडा की तरफ वाला हिस्सा", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्राइडल वेल फॉल्स नियाग्रा जलप्रपात का सबसे छोटा हिस्सा है, जो अमेरिकी फॉल्स के पास स्थित है।"
    },
    {
        question: "'वोरिंगफोससेन जलप्रपात' (Vøringsfossen Falls) किस देश में स्थित है?",
        answers: shuffle([
            { text: "नॉर्वे", correct: true },
            { text: "इटली", correct: false },
            { text: "स्विट्जरलैंड", correct: false },
            { text: "फ्रांस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वोरिंगफोससेन जलप्रपात नॉर्वे में स्थित है और यह देश के सबसे प्रसिद्ध और दर्शनीय जलप्रपातों में से एक है।"
    },
    {
        question: "'सुथरलैंड जलप्रपात' (Sutherland Falls) किस देश में स्थित है?",
        answers: shuffle([
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "न्यूजीलैंड", correct: true },
            { text: "दक्षिण अफ्रीका", correct: false },
            { text: "नॉर्वे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुथरलैंड जलप्रपात न्यूजीलैंड के फियोरलैंड नेशनल पार्क में स्थित है और यह देश के सबसे प्रसिद्ध और ऊँचे जलप्रपातों में से एक है।"
    },
    {
        question: "'धुआंधार जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "महाराष्ट्र", correct: false },
            { text: "मध्य प्रदेश", correct: true },
            { text: "गुजरात", correct: false },
            { text: "राजस्थान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धुआंधार जलप्रपात मध्य प्रदेश में नर्मदा नदी पर स्थित है।"
    },
    {
        question: "'विक्टोरिया जलप्रपात' को किस नदी पर 'मोसी-ओआ-तुन्या' के नाम से भी जाना जाता है?",
        answers: shuffle([
            { text: "कांगो नदी", correct: false },
            { text: "ज़ांबेज़ी नदी", correct: true },
            { text: "ऑरेंज नदी", correct: false },
            { text: "नील नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ज़ांबेज़ी नदी पर स्थित विक्टोरिया जलप्रपात को स्थानीय रूप से 'मोसी-ओआ-तुन्या' (गड़गड़ाहट वाला धुआँ) कहते हैं।"
    },
    {
        question: "किस जलप्रपात का पानी सीधा कैरेबियन सागर में गिरता है?",
        answers: shuffle([
            { text: "विक्टोरिया जलप्रपात", correct: false },
            { text: "एंजेल जलप्रपात", correct: false },
            { text: "कायेतूर जलप्रपात", correct: false },
            { text: "इनमें से कोई नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंजेल जलप्रपात का पानी कैरेबियन सागर में नहीं गिरता, बल्कि यह एक नदी में मिल जाता है जो अंततः अटलांटिक महासागर में बहती है।"
    },
    {
        question: "ऑस्ट्रेलिया का सबसे ऊँचा एकल-बूंद जलप्रपात (single-drop waterfall) कौन सा है?",
        answers: shuffle([
            { text: "जिम जिम फॉल्स", correct: false },
            { text: "वल्लाह फॉल्स", correct: false },
            { text: "वालमन फॉल्स", correct: true },
            { text: "इब्रोम फॉल्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वालमन फॉल्स ऑस्ट्रेलिया का सबसे ऊँचा एकल-बूंद जलप्रपात है, जिसकी ऊँचाई 268 मीटर है।"
    },
    {
        question: "'हुंडरू जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "बिहार", correct: false },
            { text: "ओडिशा", correct: false },
            { text: "झारखंड", correct: true },
            { text: "पश्चिम बंगाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुंडरू जलप्रपात झारखंड में सुवर्णरेखा नदी पर स्थित है।"
    },
    {
        question: "नियाग्रा जलप्रपात का निर्माण किस युग में हुआ था?",
        answers: shuffle([
            { text: "जुरासिक युग", correct: false },
            { text: "हिम युग", correct: true },
            { text: "क्रिटेशस युग", correct: false },
            { text: "सेनोजोइक युग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नियाग्रा जलप्रपात का निर्माण अंतिम हिम युग के अंत में, लगभग 10,000 साल पहले हुआ था, जब पिघलते हुए ग्लेशियरों ने ग्रेट लेक्स का निर्माण किया।"
    },
    {
        question: "'तुगेला जलप्रपात' किस देश में स्थित है?",
        answers: shuffle([
            { text: "केन्या", correct: false },
            { text: "दक्षिण अफ्रीका", correct: true },
            { text: "इथियोपिया", correct: false },
            { text: "नाइजीरिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तुगेला जलप्रपात दक्षिण अफ्रीका के ड्रेकेन्सबर्ग पर्वतों में स्थित है।"
    },
    {
        question: "'रिबन जलप्रपात' (Ribbon Falls) किस देश में स्थित है?",
        answers: shuffle([
            { text: "कनाडा", correct: false },
            { text: "अमेरिका", correct: true },
            { text: "रूस", correct: false },
            { text: "चीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रिबन जलप्रपात अमेरिका के कैलिफ़ोर्निया में योसेमाइट नेशनल पार्क में स्थित है।"
    },
    {
        question: "'मोगफ़ोस्सेन जलप्रपात' (Mogafossen Falls) किस देश में स्थित है?",
        answers: shuffle([
            { text: "नॉर्वे", correct: true },
            { text: "स्वीडन", correct: false },
            { text: "फिनलैंड", correct: false },
            { text: "आइसलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोगफ़ोस्सेन जलप्रपात नॉर्वे में स्थित है, जो यूरोप के सबसे खूबसूरत जलप्रपातों में से एक है।"
    },
    {
        question: "'कैटराक्ट्स' (Cataracts) का उपयोग अक्सर किस प्रकार के जलप्रपात के लिए किया जाता है?",
        answers: shuffle([
            { text: "छोटे जलप्रपात", correct: false },
            { text: "घुमावदार जलप्रपात", correct: false },
            { text: "बड़े और शक्तिशाली जलप्रपात", correct: true },
            { text: "मौसमी जलप्रपात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कैटराक्ट्स' शब्द का उपयोग विशेष रूप से बड़े, शक्तिशाली और तेज बहने वाले जलप्रपातों के लिए किया जाता है, जैसे कि इंगा जलप्रपात।"
    },
    {
        question: "'नोकालिकाई जलप्रपात' (Nohkalikai Falls) किस देश में स्थित है?",
        answers: shuffle([
            { text: "भारत", correct: true },
            { text: "भूटान", correct: false },
            { text: "नेपाल", correct: false },
            { text: "चीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नोकालिकाई जलप्रपात भारत के मेघालय राज्य में स्थित है और यह देश के सबसे ऊँचे जलप्रपातों में से एक है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अपनी ऊँचाई और सुंदरता के लिए प्रसिद्ध है।"
    },
    {
        question: "'बर्केले जलप्रपात' (Barkele Falls) किस देश में स्थित है?",
        answers: shuffle([
            { text: "इरिट्रिया", correct: false },
            { text: "इथियोपिया", correct: true },
            { text: "सोमालिया", correct: false },
            { text: "जिबूती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बर्केले जलप्रपात इथियोपिया में स्थित है और यह देश के कुछ प्रसिद्ध जलप्रपातों में से एक है।"
    },
    {
        question: "विक्टोरिया जलप्रपात किस झील के पास स्थित नहीं है?",
        answers: shuffle([
            { text: "लेक कारीबा", correct: false },
            { text: "लेक मलावी", correct: false },
            { text: "लेक तंगानिका", correct: false },
            { text: "इनमें से कोई नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्टोरिया जलप्रपात ज़ांबेज़ी नदी पर स्थित है और इसके आसपास कोई बड़ी झील नहीं है।"
    },
    {
        question: "विश्व का सबसे चौड़ा जलप्रपात कौन सा है?",
        answers: shuffle([
            { text: "विक्टोरिया जलप्रपात", correct: false },
            { text: "नियाग्रा जलप्रपात", correct: false },
            { text: "एंजेल जलप्रपात", correct: false },
            { text: "इगुआजु जलप्रपात", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इगुआजु जलप्रपात (Iguazu Falls) विश्व के सबसे चौड़े जलप्रपातों में से एक है, जो अर्जेंटीना और ब्राजील की सीमा पर स्थित है।"
    },
    {
        question: "एंजेल जलप्रपात का पानी सीधे कहाँ से गिरता है?",
        answers: shuffle([
            { text: "नदी से", correct: false },
            { text: "झील से", correct: false },
            { text: "पठार के किनारे से", correct: true },
            { text: "ग्लेशियर से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंजेल जलप्रपात का पानी गुयाना पठार के औयान-तेपुई पठार के सीधे किनारे से गिरता है।"
    },
    {
        question: "'सुथरलैंड जलप्रपात' (Sutherland Falls) किस राष्ट्रीय उद्यान का हिस्सा है?",
        answers: shuffle([
            { text: "फियोरलैंड नेशनल पार्क", correct: true },
            { text: "माउंट कुक नेशनल पार्क", correct: false },
            { text: "एबेल तस्मान नेशनल पार्क", correct: false },
            { text: "वेस्टलैंड नेशनल पार्क", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुथरलैंड जलप्रपात न्यूजीलैंड के फियोरलैंड नेशनल पार्क में स्थित है।"
    },
    {
        question: "विक्टोरिया जलप्रपात की चौड़ाई लगभग कितनी है?",
        answers: shuffle([
            { text: "500 मीटर", correct: false },
            { text: "1 किलोमीटर", correct: false },
            { text: "1.7 किलोमीटर", correct: true },
            { text: "2.5 किलोमीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्टोरिया जलप्रपात लगभग 1.7 किलोमीटर (1 मील) चौड़ा है।"
    },
    {
        question: "नियाग्रा जलप्रपात का पानी अंत में किस महासागर में गिरता है?",
        answers: shuffle([
            { text: "अटलांटिक महासागर", correct: true },
            { text: "प्रशांत महासागर", correct: false },
            { text: "हिंद महासागर", correct: false },
            { text: "आर्कटिक महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नियाग्रा जलप्रपात का पानी नियाग्रा नदी से ओंटारियो झील में जाता है, और फिर सेंट लॉरेंस नदी के माध्यम से अटलांटिक महासागर में गिरता है।"
    },
    {
        question: "'टोलिंडुरान जलप्रपात' (Tolinduran Falls) किस देश में स्थित है?",
        answers: shuffle([
            { text: "इंडोनेशिया", correct: false },
            { text: "फिलीपींस", correct: true },
            { text: "मलेशिया", correct: false },
            { text: "थाईलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टोलिंडुरान जलप्रपात फिलीपींस के सिबुयान द्वीप में स्थित है।"
    },
    {
        question: "इगुआजु जलप्रपात के समीप कौन सा देश नहीं है?",
        answers: shuffle([
            { text: "ब्राजील", correct: false },
            { text: "अर्जेंटीना", correct: false },
            { text: "पराग्वे", correct: false },
            { text: "उरुग्वे", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इगुआजु जलप्रपात ब्राजील और अर्जेंटीना की सीमा पर स्थित है और पराग्वे इसके बहुत करीब है, लेकिन उरुग्वे इन देशों से काफी दूर है।"
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