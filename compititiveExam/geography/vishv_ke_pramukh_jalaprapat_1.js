const questions = [
    {
        topHeading: "विश्व के प्रमुख जलप्रपातों पर आधारित बहुविकल्पीय प्रश्न (MCQs) part 1  (quiz_no. 78)."
    },
    {
        question: "विश्व का सबसे ऊँचा जलप्रपात कौन सा है?",
        answers: shuffle([
            { text: "नियाग्रा जलप्रपात", correct: false },
            { text: "एंजेल जलप्रपात", correct: true },
            { text: "विक्टोरिया जलप्रपात", correct: false },
            { text: "इगुआजु जलप्रपात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंजेल जलप्रपात (Angel Falls) वेनेजुएला में स्थित है और यह विश्व का सबसे ऊँचा जलप्रपात है, जिसकी कुल ऊँचाई 979 मीटर है।"
    },
    {
        question: "एंजेल जलप्रपात किस देश में स्थित है?",
        answers: shuffle([
            { text: "ब्राजील", correct: false },
            { text: "वेनेजुएला", correct: true },
            { text: "अर्जेंटीना", correct: false },
            { text: "कनाडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंजेल जलप्रपात दक्षिण अमेरिका के वेनेजुएला में कैनाइमा नेशनल पार्क में स्थित है।"
    },
    {
        question: "एंजेल जलप्रपात किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "ओरिनोको नदी", correct: false },
            { text: "चुरून नदी", correct: true },
            { text: "पराना नदी", correct: false },
            { text: "अमेज़न नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंजेल जलप्रपात ओरिनोको नदी की सहायक नदी, चुरून नदी पर स्थित है।"
    },
    {
        question: "नियाग्रा जलप्रपात किन दो झीलों के बीच स्थित है?",
        answers: shuffle([
            { text: "झील सुपीरियर और झील मिशिगन", correct: false },
            { text: "झील एरी और झील ओंटारियो", correct: true },
            { text: "झील ह्यूरन और झील एरी", correct: false },
            { text: "झील ओंटारियो और झील ह्यूरन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नियाग्रा जलप्रपात एरी झील और ओंटारियो झील के बीच स्थित है और यह संयुक्त राज्य अमेरिका और कनाडा की सीमा पर है।"
    },
    {
        question: "विक्टोरिया जलप्रपात किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "कांगो नदी", correct: false },
            { text: "नील नदी", correct: false },
            { text: "ज़ांबेज़ी नदी", correct: true },
            { text: "ऑरेंज नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्टोरिया जलप्रपात ज़ांबेज़ी नदी पर स्थित है और यह ज़ाम्बिया और जिम्बाब्वे की सीमा पर है।"
    },
    {
        question: "नियाग्रा जलप्रपात किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "यूरोप", correct: false },
            { text: "उत्तरी अमेरिका", correct: true },
            { text: "अफ्रीका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नियाग्रा जलप्रपात संयुक्त राज्य अमेरिका और कनाडा की सीमा पर स्थित है, जो उत्तरी अमेरिका महाद्वीप में हैं।"
    },
    {
        question: "विक्टोरिया जलप्रपात किन दो देशों की सीमा पर स्थित है?",
        answers: shuffle([
            { text: "दक्षिण अफ्रीका और नामीबिया", correct: false },
            { text: "ज़ाम्बिया और जिम्बाब्वे", correct: true },
            { text: "अंगोला और बोत्सवाना", correct: false },
            { text: "केन्या और तंजानिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्टोरिया जलप्रपात ज़ाम्बिया और जिम्बाब्वे की सीमा पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे ज़ाम्बिया में 'मोसी-ओआ-तुन्या' (गड़गड़ाहट वाला धुआँ) के नाम से भी जाना जाता है।"
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
        question: "इगुआजु जलप्रपात किन दो देशों की सीमा पर स्थित है?",
        answers: shuffle([
            { text: "ब्राजील और पराग्वे", correct: false },
            { text: "अर्जेंटीना और ब्राजील", correct: true },
            { text: "उरुग्वे और ब्राजील", correct: false },
            { text: "बोलीविया और अर्जेंटीना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इगुआजु जलप्रपात दक्षिण अमेरिका में इगुआजु नदी पर स्थित है और यह अर्जेंटीना के मिसिओनेस प्रांत और ब्राजील के पराना राज्य की सीमा बनाता है।"
    },
    {
        question: "भारत का सबसे ऊँचा जलप्रपात कौन सा है?",
        answers: shuffle([
            { text: "कुंचिकल जलप्रपात", correct: true },
            { text: "जोग जलप्रपात", correct: false },
            { text: "धुआंधार जलप्रपात", correct: false },
            { text: "हुंडरू जलप्रपात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुंचिकल जलप्रपात (Kunchikal Falls) कर्नाटक में स्थित है और यह 455 मीटर की ऊँचाई के साथ भारत का सबसे ऊँचा जलप्रपात है।"
    },
    {
        question: "भारत का जोग जलप्रपात किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "कावेरी नदी", correct: false },
            { text: "कृष्णा नदी", correct: false },
            { text: "शरावती नदी", correct: true },
            { text: "गोदावरी नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जोग जलप्रपात कर्नाटक में शरावती नदी पर स्थित है।"
    },
    {
        question: "सुथरलैंड जलप्रपात (Sutherland Falls) किस देश में स्थित है?",
        answers: shuffle([
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "न्यूजीलैंड", correct: true },
            { text: "दक्षिण अफ्रीका", correct: false },
            { text: "नॉर्वे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुथरलैंड जलप्रपात न्यूजीलैंड के फियोरलैंड नेशनल पार्क में स्थित है।"
    },
    {
        question: "योसेमाइट जलप्रपात (Yosemite Falls) किस देश में स्थित है?",
        answers: shuffle([
            { text: "अमेरिका", correct: true },
            { text: "कनाडा", correct: false },
            { text: "मेक्सिको", correct: false },
            { text: "फ्रांस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> योसेमाइट जलप्रपात अमेरिका के कैलिफोर्निया राज्य में योसेमाइट नेशनल पार्क में स्थित है।"
    },
    {
        question: "दक्षिण अमेरिका का सबसे ऊँचा जलप्रपात कौन सा है?",
        answers: shuffle([
            { text: "नियाग्रा जलप्रपात", correct: false },
            { text: "इगुआजु जलप्रपात", correct: false },
            { text: "एंजेल जलप्रपात", correct: true },
            { text: "कायेतूर जलप्रपात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंजेल जलप्रपात वेनेजुएला में स्थित है और यह न केवल दक्षिण अमेरिका, बल्कि पूरे विश्व का सबसे ऊँचा जलप्रपात है।"
    },
    {
        question: "'मोसी-ओआ-तुन्या' (Mosi-oa-Tunya) किस जलप्रपात का स्थानीय नाम है?",
        answers: shuffle([
            { text: "एंजेल जलप्रपात", correct: false },
            { text: "विक्टोरिया जलप्रपात", correct: true },
            { text: "नियाग्रा जलप्रपात", correct: false },
            { text: "इगुआजु जलप्रपात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ज़ाम्बिया की स्थानीय भाषा में 'मोसी-ओआ-तुन्या' का अर्थ है 'गड़गड़ाहट वाला धुआँ' जो विक्टोरिया जलप्रपात के लिए उपयोग होता है।"
    },
    {
        question: "कायेतूर जलप्रपात (Kaieteur Falls) किस देश में स्थित है?",
        answers: shuffle([
            { text: "गुयाना", correct: true },
            { text: "ब्राजील", correct: false },
            { text: "पेरू", correct: false },
            { text: "कोलंबिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कायेतूर जलप्रपात दक्षिण अमेरिका के गुयाना में पोतारो नदी पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह दुनिया के सबसे शक्तिशाली जलप्रपातों में से एक है।"
    },
    {
        question: "जोग जलप्रपात किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "कर्नाटक", correct: true },
            { text: "गोवा", correct: false },
            { text: "महाराष्ट्र", correct: false },
            { text: "तमिलनाडु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जोग जलप्रपात (जिसे गेरुसोप्पा जलप्रपात भी कहते हैं) कर्नाटक में शरावती नदी पर स्थित है।"
    },
    {
        question: "विक्टोरिया जलप्रपात की खोज किस यूरोपीय खोजकर्ता ने की थी?",
        answers: shuffle([
            { text: "क्रिस्टोफर कोलंबस", correct: false },
            { text: "जेम्स कुक", correct: false },
            { text: "डेविड लिविंगस्टोन", correct: true },
            { text: "वास्को डी गामा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्कॉटिश खोजकर्ता डेविड लिविंगस्टोन ने 1855 में विक्टोरिया जलप्रपात को खोजा और इसका नाम ब्रिटिश महारानी विक्टोरिया के नाम पर रखा।"
    },
    {
        question: "योसेमाइट जलप्रपात की ऊँचाई कितनी है?",
        answers: shuffle([
            { text: "500 मीटर", correct: false },
            { text: "600 मीटर", correct: false },
            { text: "739 मीटर", correct: true },
            { text: "800 मीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> योसेमाइट जलप्रपात उत्तरी अमेरिका का सबसे ऊँचा जलप्रपात है, जिसकी कुल ऊँचाई 739 मीटर है।"
    },
    {
        question: "'नील नदी' पर स्थित सबसे प्रसिद्ध जलप्रपात कौन सा है?",
        answers: shuffle([
            { text: "मर्चिसन जलप्रपात", correct: true },
            { text: "विक्टोरिया जलप्रपात", correct: false },
            { text: "एंजेना जलप्रपात", correct: false },
            { text: "बोयोमा जलप्रपात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मर्चिसन जलप्रपात (Murchison Falls) नील नदी पर स्थित है, जो युगांडा में है।"
    },
    {
        question: "नियाग्रा जलप्रपात का कौन सा हिस्सा कनाडा में है?",
        answers: shuffle([
            { text: "अमेरिकन फॉल्स", correct: false },
            { text: "हॉर्शो फॉल्स", correct: true },
            { text: "ब्राइडल वेल फॉल्स", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नियाग्रा जलप्रपात तीन हिस्सों में बँटा है: अमेरिकन फॉल्स, ब्राइडल वेल फॉल्स (दोनों अमेरिका में) और हॉर्शो फॉल्स (कनाडा में)।"
    },
    {
        question: "वेनेजुएला में स्थित एंजेल जलप्रपात को किस नाम से भी जाना जाता है?",
        answers: shuffle([
            { text: "साल्टो एंजेल", correct: true },
            { text: "चुरून मेरू", correct: false },
            { text: "दोनों a और b", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्पेनिश में एंजेल जलप्रपात को \"साल्टो एंजेल\" कहा जाता है।"
    },
    {
        question: "इगुआजु जलप्रपात किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "पराना नदी", correct: false },
            { text: "इगुआजु नदी", correct: true },
            { text: "उरुग्वे नदी", correct: false },
            { text: "साओ फ्रांसिस्को नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इगुआजु जलप्रपात, इसी नाम की इगुआजु नदी पर स्थित है, जो बाद में पराना नदी में मिल जाती है।"
    },
    {
        question: "भारत का जोग जलप्रपात किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "कावेरी नदी", correct: false },
            { text: "कृष्णा नदी", correct: false },
            { text: "शरावती नदी", correct: true },
            { text: "गोदावरी नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जोग जलप्रपात कर्नाटक में शरावती नदी पर स्थित है।"
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
        question: "विश्व का सबसे ऊँचा जलप्रपात किस पठार पर स्थित है?",
        answers: shuffle([
            { text: "ब्राजीलियन पठार", correct: false },
            { text: "गुयाना पठार", correct: true },
            { text: "तिब्बती पठार", correct: false },
            { text: "कोलोराडो पठार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विश्व का सबसे ऊँचा जलप्रपात, एंजेल जलप्रपात, गुयाना पठार के औयान-तेपुई (Auyán-tepui) नामक मेसा पर स्थित है।"
    },
    {
        question: "नियाग्रा जलप्रपात किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "यूरोप", correct: false },
            { text: "उत्तरी अमेरिका", correct: true },
            { text: "अफ्रीका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नियाग्रा जलप्रपात उत्तरी अमेरिका में कनाडा और संयुक्त राज्य अमेरिका की सीमा पर स्थित है।"
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
        question: "इगुआजु जलप्रपात में कितने छोटे-बड़े जलप्रपात शामिल हैं?",
        answers: shuffle([
            { text: "150", correct: false },
            { text: "275", correct: true },
            { text: "350", correct: false },
            { text: "400", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इगुआजु जलप्रपात का समूह 275 छोटे-बड़े जलप्रपातों से मिलकर बना है, जो एक विशाल अर्धचंद्राकार रूप में फैले हुए हैं।"
    },
    {
        question: "विश्व का सबसे ऊँचा 'सीरीज ऑफ वाटरफॉल्स' (कई जलप्रपातों की श्रृंखला) कौन सा है?",
        answers: shuffle([
            { text: "एंजेल जलप्रपात", correct: false },
            { text: "योसेमाइट जलप्रपात", correct: false },
            { text: "तुगेला जलप्रपात", correct: true },
            { text: "रिबन जलप्रपात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तुगेला जलप्रपात (Tugela Falls) दक्षिण अफ्रीका में है और यह पांच अलग-अलग हिस्सों में गिरता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी कुल ऊँचाई 948 मीटर है, जो इसे दूसरा सबसे ऊँचा जलप्रपात बनाती है, लेकिन यह एक श्रृंखला के रूप में सबसे ऊँचा है।"
    },
    {
        question: "तुगेला जलप्रपात किस देश में स्थित है?",
        answers: shuffle([
            { text: "केन्या", correct: false },
            { text: "दक्षिण अफ्रीका", correct: true },
            { text: "तंजानिया", correct: false },
            { text: "नाइजीरिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तुगेला जलप्रपात दक्षिण अफ्रीका के क्वाज़ुलु-नताल प्रांत में ड्रेकेन्सबर्ग पहाड़ों में स्थित है।"
    },
    {
        question: "विश्व का सबसे बड़ा जलप्रपात कौन सा है जो आयतन (volume) की दृष्टि से सबसे अधिक है?",
        answers: shuffle([
            { text: "नियाग्रा जलप्रपात", correct: false },
            { text: "इगुआजु जलप्रपात", correct: false },
            { text: "एंजेल जलप्रपात", correct: false },
            { text: "कांगो जलप्रपात (Inga Falls)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आयतन की दृष्टि से दुनिया का सबसे बड़ा जलप्रपात कोंगोनदी पर स्थित इंगा जलप्रपात (Inga Falls) है।"
    },
    {
        question: "नियाग्रा जलप्रपात का कौन सा हिस्सा सबसे बड़ा है?",
        answers: shuffle([
            { text: "अमेरिकन फॉल्स", correct: false },
            { text: "हॉर्शो फॉल्स", correct: true },
            { text: "ब्राइडल वेल फॉल्स", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नियाग्रा जलप्रपात का हॉर्शो फॉल्स (घोड़े की नाल के आकार का) हिस्सा सबसे बड़ा और शक्तिशाली है, और यह कनाडा की तरफ स्थित है।"
    },
    {
        question: "नियाग्रा जलप्रपात किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "सेंट लॉरेंस नदी", correct: false },
            { text: "हडसन नदी", correct: false },
            { text: "नियाग्रा नदी", correct: true },
            { text: "एरी नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नियाग्रा जलप्रपात नियाग्रा नदी पर स्थित है, जो एरी झील और ओंटारियो झील को जोड़ती है।"
    },
    {
        question: "'काला पानी' (Black Water) के नाम से प्रसिद्ध जलप्रपात कौन सा है?",
        answers: shuffle([
            { text: "एंजेल जलप्रपात", correct: false },
            { text: "कायेतूर जलप्रपात", correct: true },
            { text: "नियाग्रा जलप्रपात", correct: false },
            { text: "विक्टोरिया जलप्रपात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कायेतूर जलप्रपात (Kaieteur Falls) का पानी टैनिन से भरा होता है, जिसके कारण इसका रंग काला दिखाई देता है, इसलिए इसे 'काला पानी' के नाम से भी जाना जाता है।"
    },
    {
        question: "ग्वैरा जलप्रपात (Guairá Falls) किन देशों की सीमा पर स्थित था?",
        answers: shuffle([
            { text: "ब्राजील और पराग्वे", correct: true },
            { text: "अर्जेंटीना और ब्राजील", correct: false },
            { text: "बोलीविया और पेरू", correct: false },
            { text: "चिली और अर्जेंटीना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्वैरा जलप्रपात एक समय में ब्राजील और पराग्वे की सीमा पर स्थित था, लेकिन 1982 में इताइपु बांध के निर्माण के बाद यह जलमग्न हो गया।"
    },
    {
        question: "'डेविल्स थ्रोट' (Devil's Throat) किस जलप्रपात के सबसे प्रभावशाली हिस्से का नाम है?",
        answers: shuffle([
            { text: "विक्टोरिया जलप्रपात", correct: false },
            { text: "एंजेल जलप्रपात", correct: false },
            { text: "इगुआजु जलप्रपात", correct: true },
            { text: "नियाग्रा जलप्रपात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'डेविल्स थ्रोट' इगुआजु जलप्रपात का सबसे बड़ा और सबसे शक्तिशाली हिस्सा है, जहाँ से अधिकांश पानी गिरता है।"
    },
    {
        question: "भारत का कुंचिकल जलप्रपात किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "बराही नदी", correct: true },
            { text: "शरावती नदी", correct: false },
            { text: "नर्मदा नदी", correct: false },
            { text: "मांडवी नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुंचिकल जलप्रपात कर्नाटक में बराही नदी पर स्थित है।"
    },
    {
        question: "सुथरलैंड जलप्रपात (Sutherland Falls) की ऊँचाई कितनी है?",
        answers: shuffle([
            { text: "400 मीटर", correct: false },
            { text: "580 मीटर", correct: true },
            { text: "700 मीटर", correct: false },
            { text: "820 मीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुथरलैंड जलप्रपात तीन अलग-अलग हिस्सों में गिरता है और इसकी कुल ऊँचाई 580 मीटर है।"
    },
    {
        question: "मर्चिसन जलप्रपात किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "नील नदी", correct: true },
            { text: "कांगो नदी", correct: false },
            { text: "ज़ांबेज़ी नदी", correct: false },
            { text: "नाइजर नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मर्चिसन जलप्रपात युगांडा में श्वेत नील (White Nile) नदी पर स्थित है।"
    },
    {
        question: "ऑस्ट्रेलिया का सबसे ऊँचा जलप्रपात कौन सा है?",
        answers: shuffle([
            { text: "जिम जिम फॉल्स", correct: false },
            { text: "वल्लाह फॉल्स", correct: false },
            { text: "वालमन फॉल्स", correct: true },
            { text: "टियालुंगा फॉल्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वालमन फॉल्स (Wallaman Falls) क्वींसलैंड, ऑस्ट्रेलिया में स्थित है और यह ऑस्ट्रेलिया का सबसे ऊँचा जलप्रपात है, जिसकी ऊँचाई 268 मीटर है।"
    },
    {
        question: "यूरोप का सबसे ऊँचा जलप्रपात कौन सा है?",
        answers: shuffle([
            { text: "रिबोन फॉल्स", correct: false },
            { text: "वेतिसफॉससेन फॉल्स", correct: false },
            { text: "गैवर्निए फॉल्स", correct: true },
            { text: "वॉरिंगटन फॉल्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गैवर्निए फॉल्स (Gavarnie Falls) फ्रांस में स्थित है और यह यूरोप का सबसे ऊँचा जलप्रपात है, जिसकी कुल ऊँचाई 422 मीटर है।"
    },
    {
        question: "नियाग्रा जलप्रपात को क्या 'नदी' कहा जा सकता है?",
        answers: shuffle([
            { text: "हाँ, क्योंकि यह एक नदी पर स्थित है।", correct: false },
            { text: "नहीं, यह एक जलप्रपात है।", correct: true },
            { text: "यह एक नदी और जलप्रपात दोनों है।", correct: false },
            { text: "यह एक झील का हिस्सा है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नियाग्रा जलप्रपात एरी झील और ओंटारियो झील को जोड़ने वाली नियाग्रा नदी पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह स्वयं एक नदी नहीं है, बल्कि नदी के प्रवाह में एक तीव्र गिरावट है।"
    },
    {
        question: "विश्व का सबसे बड़ा जलप्रपात किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "यूरोप", correct: false },
            { text: "दक्षिण अमेरिका", correct: false },
            { text: "अफ्रीका", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आयतन (volume) की दृष्टि से विश्व का सबसे बड़ा जलप्रपात, इंगा फॉल्स, अफ्रीका महाद्वीप के कांगो नदी पर स्थित है।"
    },
    {
        question: "हुंडरू जलप्रपात किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "सुवर्णरेखा नदी", correct: true },
            { text: "दामोदर नदी", correct: false },
            { text: "ब्राह्मणी नदी", correct: false },
            { text: "महानदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुंडरू जलप्रपात झारखंड में सुवर्णरेखा नदी पर स्थित है।"
    },
    {
        question: "नियाग्रा जलप्रपात किस राष्ट्रीय उद्यान का हिस्सा है?",
        answers: shuffle([
            { text: "येलोस्टोन नेशनल पार्क", correct: false },
            { text: "योसेमाइट नेशनल पार्क", correct: false },
            { text: "नियाग्रा फॉल्स स्टेट पार्क", correct: true },
            { text: "ग्रैंड कैन्यन नेशनल पार्क", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नियाग्रा जलप्रपात को संरक्षित करने के लिए अमेरिका में नियाग्रा फॉल्स स्टेट पार्क बनाया गया है, जो अमेरिका का सबसे पुराना राज्य पार्क है।"
    },
    {
        question: "साल्टो डेल लाजा जलप्रपात (Salto del Laja Falls) किस देश में स्थित है?",
        answers: shuffle([
            { text: "चिली", correct: true },
            { text: "अर्जेंटीना", correct: false },
            { text: "पेरू", correct: false },
            { text: "मेक्सिको", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> साल्टो डेल लाजा जलप्रपात दक्षिण अमेरिका के चिली में स्थित है।"
    },
    {
        question: "'हवासीन जलप्रपात' (Havasu Falls) किस देश में स्थित है?",
        answers: shuffle([
            { text: "कनाडा", correct: false },
            { text: "अमेरिका", correct: true },
            { text: "मेक्सिको", correct: false },
            { text: "ब्राजील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हवासीन जलप्रपात अमेरिका के एरिज़ोना में ग्रैंड कैन्यन नेशनल पार्क के भीतर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अपने नीले-हरे पानी के लिए प्रसिद्ध है।"
    },
    {
        question: "विश्व के सबसे ऊँचे जलप्रपातों में से एक 'योसेमाइट जलप्रपात' किस पर्वत श्रृंखला में स्थित है?",
        answers: shuffle([
            { text: "रॉकी पर्वत", correct: false },
            { text: "सिएरा नेवादा पर्वत", correct: true },
            { text: "अप्लेशियन पर्वत", correct: false },
            { text: "एंडीज़ पर्वत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> योसेमाइट जलप्रपात कैलिफ़ोर्निया की सिएरा नेवादा पर्वत श्रृंखला में स्थित है।"
    },
    {
        question: "ओज़ार्क जलप्रपात (Ozark Falls) किस देश में स्थित है?",
        answers: shuffle([
            { text: "ब्राजील", correct: false },
            { text: "अमेरिका", correct: true },
            { text: "रूस", correct: false },
            { text: "चीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओज़ार्क जलप्रपात अमेरिका के ओज़ार्क पर्वत क्षेत्र में स्थित है।"
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