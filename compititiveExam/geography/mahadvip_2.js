const questions = [
    {
        topHeading: "महाद्वीप पर आधारित 50 MCQs part_2 (quiz_no.)"
    },
    {
        question: "'आसवान बांध' किस नदी पर बनाया गया है?",
        answers: shuffle([
            { text: "नाइजर नदी", correct: false },
            { text: "कांगो नदी", correct: false },
            { text: "नील नदी", correct: true },
            { text: "वोल्टा नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आसवान उच्च बांध मिस्र में नील नदी पर बनाया गया एक विशाल बांध है, जिसका उपयोग सिंचाई और बिजली उत्पादन के लिए किया जाता है।"
    },
    {
        question: "'जिब्राल्टर जलसंधि' किन दो भूभागों को अलग करती है?",
        answers: shuffle([
            { text: "अफ़्रीका और एशिया", correct: false },
            { text: "यूरोप और अफ़्रीका", correct: true },
            { text: "यूरोप और एशिया", correct: false },
            { text: "उत्तरी अमेरिका और दक्षिण अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जिब्राल्टर जलसंधि स्पेन (यूरोप) को मोरक्को (अफ़्रीका) से अलग करती है और अटलांटिक महासागर को भूमध्य सागर से जोड़ती है।"
    },
    {
        question: "विश्व का सबसे बड़ा हीरा उत्पादक क्षेत्र 'किम्बरले' किस देश में है?",
        answers: shuffle([
            { text: "बोत्सवाना", correct: false },
            { text: "घाना", correct: false },
            { text: "दक्षिण अफ़्रीका", correct: true },
            { text: "कांगो लोकतांत्रिक गणराज्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किम्बरले की खान दक्षिण अफ़्रीका में स्थित है और यह ऐतिहासिक रूप से हीरा खनन का एक प्रमुख केंद्र रही है।"
    },
    {
        question: "सवाना घास के मैदान मुख्यतः किस महाद्वीप में पाए जाते हैं?",
        answers: shuffle([
            { text: "दक्षिण अमेरिका", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "अफ़्रीका", correct: true },
            { text: "एशिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सवाना उष्णकटिबंधीय घास के मैदान हैं जो अफ़्रीका महाद्वीप के एक बड़े हिस्से में फैले हुए हैं, विशेषकर भूमध्य रेखा के दोनों ओर।"
    },
    {
        question: "'बाब-अल-मनदेव जलसंधि' किन्हें जोड़ती है?",
        answers: shuffle([
            { text: "फारस की खाड़ी और अरब सागर", correct: false },
            { text: "लाल सागर और अदन की खाड़ी", correct: true },
            { text: "भूमध्य सागर और लाल सागर", correct: false },
            { text: "अंडमान सागर और बंगाल की खाड़ी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह जलसंधि यमन (एशिया) को जिबूती और इरिट्रिया (अफ़्रीका) से अलग करती है तथा लाल सागर को अदन की खाड़ी से जोड़ती है।"
    },
    {
        question: "'ड्रेकेन्सबर्ग पर्वत' किस देश में स्थित है?",
        answers: shuffle([
            { text: "तंजानिया", correct: false },
            { text: "केन्या", correct: false },
            { text: "दक्षिण अफ़्रीका", correct: true },
            { text: "नामीबिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ड्रेकेन्सबर्ग पर्वत श्रृंखला दक्षिण अफ़्रीका के पूर्वी हिस्से में स्थित है और यह देश की सबसे ऊँची पर्वत श्रृंखला है।"
    },
    {
        question: "अफ़्रीका का कौन सा देश 'कोको' का सबसे बड़ा उत्पादक है?",
        answers: shuffle([
            { text: "घाना", correct: false },
            { text: "नाइजीरिया", correct: false },
            { text: "आइवरी कोस्ट (कोत दिव्वार)", correct: true },
            { text: "कैमरून", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आइवरी कोस्ट विश्व में कोको बीन्स का सबसे बड़ा उत्पादक और निर्यातक देश है, जिसका उपयोग चॉकलेट बनाने में होता है।"
    },
    {
        question: "'टांगानिका झील' के बारे में क्या सत्य है?",
        answers: shuffle([
            { text: "यह विश्व की सबसे बड़ी मीठे पानी की झील है।", correct: false },
            { text: "यह विश्व की दूसरी सबसे गहरी झील है।", correct: true },
            { text: "यह पूरी तरह से एक ही देश में स्थित है।", correct: false },
            { text: "यह एक खारे पानी की झील है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैकाल झील के बाद टांगानिका झील विश्व की दूसरी सबसे गहरी और दूसरी सबसे बड़ी (आयतन में) मीठे पानी की झील है।"
    },
    {
        question: "मकर रेखा को दो बार काटने वाली नदी कौन सी है?",
        answers: shuffle([
            { text: "लिम्पोपो नदी", correct: true },
            { text: "ज़म्बेजी नदी", correct: false },
            { text: "ऑरेंज नदी", correct: false },
            { text: "वाल नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिम्पोपो नदी दक्षिणी अफ़्रीका में बहती है और अपने घुमावदार मार्ग के कारण मकर रेखा को दो बार काटती है।"
    },
    {
        question: "'वेल्ड' नामक शीतोष्ण घास के मैदान कहाँ पाए जाते हैं?",
        answers: shuffle([
            { text: "अर्जेंटीना", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "दक्षिण अफ़्रीका", correct: true },
            { text: "हंगरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्षिण अफ़्रीका के पठारी क्षेत्रों में पाए जाने वाले शीतोष्ण घास के मैदानों को 'वेल्ड' कहा जाता है।"
    },
    {
        question: "विश्व की सबसे बड़ी ताजे पानी की झील कौन सी है?",
        answers: shuffle([
            { text: "बैकाल झील", correct: false },
            { text: "मिशिगन झील", correct: false },
            { text: "सुपीरियर झील", correct: true },
            { text: "विक्टोरिया झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुपीरियर झील, जो उत्तरी अमेरिका की महान झीलों (Great Lakes) में से एक है, सतह के क्षेत्रफल की दृष्टि से विश्व की सबसे बड़ी ताजे पानी की झील है।"
    },
    {
        question: "'रॉकी पर्वत श्रृंखला' किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "दक्षिण अमेरिका", correct: false },
            { text: "यूरोप", correct: false },
            { text: "उत्तरी अमेरिका", correct: true },
            { text: "एशिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रॉकी पर्वत श्रृंखला उत्तरी अमेरिका के पश्चिमी भाग में कनाडा से लेकर संयुक्त राज्य अमेरिका के न्यू मेक्सिको तक फैली हुई है।"
    },
    {
        question: "'ग्रैंड कैनियन' का निर्माण किस नदी द्वारा हुआ है?",
        answers: shuffle([
            { text: "मिसिसिपी नदी", correct: false },
            { text: "कोलोराडो नदी", correct: true },
            { text: "मिसौरी नदी", correct: false },
            { text: "रियो ग्रांडे नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रैंड कैनियन संयुक्त राज्य अमेरिका के एरिजोना राज्य में स्थित एक गहरी और विशाल घाटी है, जिसका निर्माण कोलोराडो नदी के अपरदन से हुआ है।"
    },
    {
        question: "उत्तरी अमेरिका की सबसे ऊँची चोटी कौन सी है?",
        answers: shuffle([
            { text: "माउंट व्हिटनी", correct: false },
            { text: "माउंट लोगन", correct: false },
            { text: "माउंट डेनाली (पूर्व में माउंट मैकिनले)", correct: true },
            { text: "माउंट रेनियर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट डेनाली अलास्का (USA) में स्थित है और यह उत्तरी अमेरिका महाद्वीप की सबसे ऊँची पर्वत चोटी है।"
    },
    {
        question: "'प्रेयरी' घास के मैदान कहाँ पाए जाते हैं?",
        answers: shuffle([
            { text: "अफ़्रीका", correct: false },
            { text: "दक्षिण अमेरिका", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "उत्तरी अमेरिका", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तरी अमेरिका के मध्य भाग में, विशेष रूप से संयुक्त राज्य अमेरिका और कनाडा में, पाए जाने वाले शीतोष्ण घास के मैदानों को 'प्रेयरी' कहा जाता है।"
    },
    {
        question: "'पनामा नहर' किन दो महासागरों को जोड़ती है?",
        answers: shuffle([
            { text: "अटलांटिक और प्रशांत महासागर", correct: true },
            { text: "प्रशांत और हिंद महासागर", correct: false },
            { text: "अटलांटिक और आर्कटिक महासागर", correct: false },
            { text: "हिंद और अटलांटिक महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पनामा नहर उत्तरी और दक्षिण अमेरिका को अलग करती है तथा अटलांटिक महासागर को प्रशांत महासागर से जोड़कर जहाजों के लिए एक महत्वपूर्ण मार्ग प्रदान करती है।"
    },
    {
        question: "विश्व का सबसे बड़ा द्वीप 'ग्रीनलैंड' किस महाद्वीप का भाग माना जाता है (राजनीतिक रूप से)?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "उत्तरी अमेरिका", correct: false },
            { text: "यूरोप", correct: true },
            { text: "अंटार्कटिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भौगोलिक रूप से ग्रीनलैंड उत्तरी अमेरिका का हिस्सा है, लेकिन राजनीतिक रूप से यह डेनमार्क (यूरोप) के अधीन एक स्वायत्त क्षेत्र है।"
    },
    {
        question: "'मृत घाटी' (Death Valley) कहाँ स्थित है?",
        answers: shuffle([
            { text: "मैक्सिको", correct: false },
            { text: "कनाडा", correct: false },
            { text: "संयुक्त राज्य अमेरिका (कैलिफोर्निया)", correct: true },
            { text: "क्यूबा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मृत घाटी उत्तरी अमेरिका का सबसे निचला, सबसे शुष्क और सबसे गर्म स्थान है, जो कैलिफोर्निया के मोजावे मरुस्थल में स्थित है।"
    },
    {
        question: "विश्व प्रसिद्ध 'नियाग्रा जलप्रपात' किन दो झीलों के बीच स्थित है?",
        answers: shuffle([
            { text: "सुपीरियर और ह्यूरॉन", correct: false },
            { text: "ह्यूरॉन और मिशिगन", correct: false },
            { text: "इरी और ओंटारियो", correct: true },
            { text: "मिशिगन और इरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नियाग्रा जलप्रपात संयुक्त राज्य अमेरिका और कनाडा की सीमा पर स्थित है और यह नियाग्रा नदी पर है जो इरी झील को ओंटारियो झील से जोड़ती है।"
    },
    {
        question: "कौन सी नदी उत्तरी अमेरिका की सबसे लम्बी नदी प्रणाली बनाती है?",
        answers: shuffle([
            { text: "कोलोराडो नदी", correct: false },
            { text: "मैकेंज़ी नदी", correct: false },
            { text: "मिसिसिपी-मिसौरी नदी", correct: true },
            { text: "युकोन नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिसिसिपी-मिसौरी-जेफरसन नदी प्रणाली उत्तरी अमेरिका की सबसे लम्बी और दुनिया की चौथी सबसे लम्बी नदी प्रणाली है।"
    },
    {
        question: "'हडसन की खाड़ी' किस देश में स्थित है?",
        answers: shuffle([
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "मैक्सिको", correct: false },
            { text: "कनाडा", correct: true },
            { text: "ग्रीनलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हडसन की खाड़ी उत्तर-पूर्वी कनाडा में स्थित एक विशाल अंतर्देशीय समुद्री खाड़ी है।"
    },
    {
        question: "'अपलेशियन पर्वत' किस क्षेत्र में स्थित हैं?",
        answers: shuffle([
            { text: "पश्चिमी उत्तरी अमेरिका", correct: false },
            { text: "पूर्वी उत्तरी अमेरिका", correct: true },
            { text: "मध्य उत्तरी अमेरिका", correct: false },
            { text: "दक्षिणी उत्तरी अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपलेशियन पर्वत श्रृंखला पूर्वी उत्तरी अमेरिका में स्थित एक पुरानी और कम ऊँची पर्वत श्रृंखला है।"
    },
    {
        question: "विश्व में मक्का का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "ब्राजील", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: true },
            { text: "मैक्सिको", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संयुक्त राज्य अमेरिका का मध्य-पश्चिमी क्षेत्र, जिसे 'कॉर्न बेल्ट' भी कहा जाता है, विश्व में मक्का का सबसे बड़ा उत्पादक है।"
    },
    {
        question: "'कैरिबियन सागर' किस महासागर का हिस्सा है?",
        answers: shuffle([
            { text: "प्रशांत महासागर", correct: false },
            { text: "हिंद महासागर", correct: false },
            { text: "अटलांटिक महासागर", correct: true },
            { text: "आर्कटिक महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैरिबियन सागर अटलांटिक महासागर का एक सीमांत सागर है, जो वेस्ट इंडीज और मध्य व दक्षिण अमेरिका के तटों से घिरा है।"
    },
    {
        question: "'बरमूडा त्रिभुज' (Bermuda Triangle) किस महासागर में स्थित एक क्षेत्र है?",
        answers: shuffle([
            { text: "प्रशांत महासागर", correct: false },
            { text: "हिंद महासागर", correct: false },
            { text: "आर्कटिक महासागर", correct: false },
            { text: "अटलांटिक महासागर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बरमूडा त्रिभुज उत्तरी अटलांटिक महासागर के पश्चिमी भाग में एक काल्पनिक क्षेत्र है, जो बरमूडा, फ्लोरिडा और प्यूर्टो रिको के बीच स्थित है।"
    },
    {
        question: "विश्व का सबसे ऊँचा जलप्रपात 'एंजेल जलप्रपात' किस देश में है?",
        answers: shuffle([
            { text: "ब्राजील", correct: false },
            { text: "पेरू", correct: false },
            { text: "वेनेजुएला", correct: true },
            { text: "कोलंबिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंजेल जलप्रपात वेनेजुएला के कनैमा राष्ट्रीय उद्यान में स्थित है और यह दुनिया का सबसे ऊँचा अबाधित जलप्रपात है।"
    },
    {
        question: "विश्व के सबसे बड़े वर्षावन 'अमेजन वर्षावन' का अधिकांश भाग किस देश में है?",
        answers: shuffle([
            { text: "पेरू", correct: false },
            { text: "कोलंबिया", correct: false },
            { text: "इक्वाडोर", correct: false },
            { text: "ब्राजील", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमेजन वर्षावन का लगभग 60% हिस्सा ब्राजील में है, हालांकि यह नौ देशों में फैला हुआ है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे 'पृथ्वी का फेफड़ा' भी कहा जाता है।"
    },
    {
        question: "विश्व की सबसे ऊँची नौगम्य झील 'टिटिकाका झील' किन दो देशों की सीमा पर है?",
        answers: shuffle([
            { text: "पेरू और बोलीविया", correct: true },
            { text: "बोलीविया और चिली", correct: false },
            { text: "पेरू और इक्वाडोर", correct: false },
            { text: "अर्जेंटीना और चिली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टिटिकाका झील एंडीज पर्वत पर स्थित है और यह पेरू तथा बोलीविया की सीमा पर स्थित विश्व की सबसे ऊँची नौगम्य झील है।"
    },
    {
        question: "'पम्पास' घास के मैदान कहाँ पाए जाते हैं?",
        answers: shuffle([
            { text: "ब्राजील", correct: false },
            { text: "वेनेजुएला", correct: false },
            { text: "अर्जेंटीना", correct: true },
            { text: "चिली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पम्पास अर्जेंटीना के उपजाऊ निचले इलाकों में पाए जाने वाले शीतोष्ण घास के मैदान हैं, जो कृषि और पशुपालन के लिए प्रसिद्ध हैं।"
    },
    {
        question: "विश्व का सबसे शुष्क स्थान 'अटाकामा मरुस्थल' मुख्यतः किस देश में है?",
        answers: shuffle([
            { text: "अर्जेंटीना", correct: false },
            { text: "पेरू", correct: false },
            { text: "बोलीविया", correct: false },
            { text: "चिली", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अटाकामा मरुस्थल दक्षिण अमेरिका में एंडीज पर्वत के पश्चिम में स्थित एक तटीय मरुस्थल है और यह पृथ्वी का सबसे शुष्क गैर-ध्रुवीय मरुस्थल है।"
    },
    {
        question: "दक्षिण अमेरिका का सबसे बड़ा देश कौन सा है?",
        answers: shuffle([
            { text: "अर्जेंटीना", correct: false },
            { text: "पेरू", correct: false },
            { text: "ब्राजील", correct: true },
            { text: "कोलंबिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्राजील क्षेत्रफल और जनसंख्या दोनों की दृष्टि से दक्षिण अमेरिका का सबसे बड़ा देश है।"
    },
    {
        question: "'गैलापागोस द्वीप समूह' किस देश का हिस्सा है?",
        answers: shuffle([
            { text: "चिली", correct: false },
            { text: "पेरू", correct: false },
            { text: "इक्वाडोर", correct: true },
            { text: "कोलंबिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गैलापागोस द्वीप समूह प्रशांत महासागर में स्थित ज्वालामुखी द्वीपों का एक समूह है, जो अपनी अनूठी जैव विविधता के लिए प्रसिद्ध है और यह इक्वाडोर का एक प्रांत है।"
    },
    {
        question: "आयतन की दृष्टि से विश्व की सबसे बड़ी नदी कौन सी है?",
        answers: shuffle([
            { text: "नील नदी", correct: false },
            { text: "यांग्त्ज़ी नदी", correct: false },
            { text: "अमेजन नदी", correct: true },
            { text: "मिसिसिपी नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमेजन नदी, जो दक्षिण अमेरिका में बहती है, जल के आयतन और प्रवाह की दृष्टि से विश्व की सबसे बड़ी नदी है।"
    },
    {
        question: "'माचू पिच्चू' के इंका खंडहर किस देश में स्थित हैं?",
        answers: shuffle([
            { text: "बोलीविया", correct: false },
            { text: "पेरू", correct: true },
            { text: "इक्वाडोर", correct: false },
            { text: "कोलंबिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माचू पिच्चू पेरू के कुस्को क्षेत्र में स्थित 15वीं शताब्दी का एक इंका गढ़ है, जो एक प्रसिद्ध पुरातात्विक स्थल है।"
    },
    {
        question: "'पेटागोनिया का पठार' किन दो देशों में फैला हुआ है?",
        answers: shuffle([
            { text: "अर्जेंटीना और चिली", correct: true },
            { text: "ब्राजील और अर्जेंटीना", correct: false },
            { text: "पेरू और बोलीविया", correct: false },
            { text: "उरुग्वे और पराग्वे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेटागोनिया एक विरल आबादी वाला क्षेत्र है जो एंडीज पर्वत के पूर्व में दक्षिणी अर्जेंटीना और चिली में फैला हुआ है।"
    },
    {
        question: "दक्षिण अमेरिका के कौन से दो देश भू-आबद्ध (landlocked) हैं?",
        answers: shuffle([
            { text: "उरुग्वे और पराग्वे", correct: false },
            { text: "बोलीविया और पराग्वे", correct: true },
            { text: "इक्वाडोर और बोलीविया", correct: false },
            { text: "सूरीनाम और गुयाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बोलीविया और पराग्वे दक्षिण अमेरिका के एकमात्र ऐसे देश हैं जिनकी सीमा समुद्र से नहीं लगती है।"
    },
    {
        question: "'टेरा डेल फ्यूगो' द्वीप समूह को दक्षिण अमेरिका की मुख्य भूमि से कौन सी जलसंधि अलग करती है?",
        answers: shuffle([
            { text: "ड्रेक पैसेज", correct: false },
            { text: "मैगलन जलसंधि", correct: true },
            { text: "पनामा नहर", correct: false },
            { text: "बेरिंग जलसंधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मैगलन जलसंधि एक नौगम्य समुद्री मार्ग है जो अटलांटिक और प्रशांत महासागरों को जोड़ता है तथा दक्षिण अमेरिकी मुख्य भूमि को टेरा डेल फ्यूगो से अलग करता है।"
    },
    {
        question: "विश्व में कॉफी का सबसे बड़ा उत्पादक देश कौन सा है?",
        answers: shuffle([
            { text: "कोलंबिया", correct: false },
            { text: "वियतनाम", correct: false },
            { text: "ब्राजील", correct: true },
            { text: "इथियोपिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्राजील पिछले 150 वर्षों से विश्व का सबसे बड़ा कॉफी उत्पादक देश रहा है।"
    },
    {
        question: "'लानोस' नामक उष्णकटिबंधीय घास के मैदान कहाँ पाए जाते हैं?",
        answers: shuffle([
            { text: "अर्जेंटीना", correct: false },
            { text: "ब्राजील", correct: false },
            { text: "वेनेजुएला और कोलंबिया", correct: true },
            { text: "चिली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लानोस एक विशाल उष्णकटिबंधीय घास का मैदान है जो एंडीज के पूर्व में उत्तर-पश्चिमी दक्षिण अमेरिका में वेनेजुएला और कोलंबिया में फैला हुआ है।"
    },
    {
        question: "दुनिया का सबसे दक्षिणी शहर 'उशुआइया' किस देश में स्थित है?",
        answers: shuffle([
            { text: "चिली", correct: false },
            { text: "अर्जेंटीना", correct: true },
            { text: "न्यूजीलैंड", correct: false },
            { text: "दक्षिण अफ़्रीका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उशुआइया अर्जेंटीना के टेरा डेल फ्यूगो प्रांत की राजधानी है और इसे आमतौर पर दुनिया का सबसे दक्षिणी शहर माना जाता है।"
    },
    {
        question: "यूरोप की सबसे लम्बी नदी कौन सी है?",
        answers: shuffle([
            { text: "डेन्यूब", correct: false },
            { text: "राइन", correct: false },
            { text: "वोल्गा", correct: true },
            { text: "टेम्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वोल्गा नदी पूरी तरह से रूस में बहती है और यह लम्बाई, प्रवाह और जल निकासी बेसिन के मामले में यूरोप की सबसे बड़ी नदी है।"
    },
    {
        question: "'आल्प्स पर्वत श्रृंखला' का विस्तार निम्नलिखित में से किस देश में नहीं है?",
        answers: shuffle([
            { text: "स्विट्जरलैंड", correct: false },
            { text: "ऑस्ट्रिया", correct: false },
            { text: "फ्रांस", correct: false },
            { text: "स्पेन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आल्प्स पर्वत आठ यूरोपीय देशों में फैला है: फ्रांस, स्विट्जरलैंड, इटली, मोनाको, लिकटेंस्टीन, ऑस्ट्रिया, जर्मनी और स्लोवेनिया।<br><br><i class='fa-solid fa-angles-right icon'></i> स्पेन में पाइरेनीज पर्वत है।"
    },
    {
        question: "'काला सागर' (Black Sea) से किस देश की सीमा नहीं लगती है?",
        answers: shuffle([
            { text: "तुर्की", correct: false },
            { text: "यूक्रेन", correct: false },
            { text: "रोमानिया", correct: false },
            { text: "हंगरी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हंगरी एक भू-आबद्ध देश है और इसकी सीमा काला सागर से नहीं लगती है।"
    },
    {
        question: "'यूनाइटेड किंगडम' को शेष यूरोप से अलग करने वाला जल निकाय कौन सा है?",
        answers: shuffle([
            { text: "उत्तरी सागर", correct: false },
            { text: "इंग्लिश चैनल", correct: true },
            { text: "बाल्टिक सागर", correct: false },
            { text: "आयरिश सागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंग्लिश चैनल अटलांटिक महासागर की एक शाखा है जो ग्रेट ब्रिटेन को उत्तरी फ्रांस से अलग करती है और उत्तरी सागर को अटलांटिक से जोड़ती है।"
    },
    {
        question: "'बाल्कन प्रायद्वीप' किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "यूरोप", correct: true },
            { text: "अफ़्रीका", correct: false },
            { text: "उत्तरी अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाल्कन प्रायद्वीप दक्षिण-पूर्वी यूरोप में स्थित है और इसमें अल्बानिया, बोस्निया, बुल्गारिया, ग्रीस जैसे कई देश शामिल हैं।"
    },
    {
        question: "वेटिकन सिटी, जो दुनिया का सबसे छोटा देश है, किस शहर के भीतर स्थित है?",
        answers: shuffle([
            { text: "पेरिस", correct: false },
            { text: "लंदन", correct: false },
            { text: "रोम", correct: true },
            { text: "बर्लिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेटिकन सिटी इटली की राजधानी रोम के भीतर स्थित एक स्वतंत्र शहर-राज्य है।"
    },
    {
        question: "'डेन्यूब नदी' निम्नलिखित में से किस राजधानी शहर से होकर नहीं बहती है?",
        answers: shuffle([
            { text: "वियना (ऑस्ट्रिया)", correct: false },
            { text: "बुडापेस्ट (हंगरी)", correct: false },
            { text: "बेलग्रेड (सर्बिया)", correct: false },
            { text: "प्राग (चेक गणराज्य)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डेन्यूब नदी वियना, ब्रातिस्लावा, बुडापेस्ट और बेलग्रेड सहित दस देशों और चार राजधानियों से होकर बहती है, लेकिन प्राग से नहीं।"
    },
    {
        question: "'मैटरहॉर्न' पर्वत किस पर्वत श्रृंखला का हिस्सा है?",
        answers: shuffle([
            { text: "पाइरेनीज", correct: false },
            { text: "आल्प्स", correct: true },
            { text: "कार्पेथियन", correct: false },
            { text: "काकेशस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मैटरहॉर्न आल्प्स की एक प्रसिद्ध चोटी है जो स्विट्जरलैंड और इटली की सीमा पर स्थित है।"
    },
    {
        question: "'हजार झीलों का देश' किसे कहा जाता है?",
        answers: shuffle([
            { text: "नॉर्वे", correct: false },
            { text: "स्वीडन", correct: false },
            { text: "फिनलैंड", correct: true },
            { text: "कनाडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फिनलैंड में लगभग 1,88,000 झीलें हैं, जिसके कारण इसे 'हजार झीलों का देश' कहा जाता है।"
    },
    {
        question: "यूरोप की सबसे ऊँची पर्वत चोटी कौन सी है?",
        answers: shuffle([
            { text: "माउंट ब्लैंक", correct: false },
            { text: "माउंट एल्ब्रस", correct: true },
            { text: "मैटरहॉर्न", correct: false },
            { text: "माउंट ओलिंपस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट एल्ब्रस रूस में काकेशस पर्वत श्रृंखला में स्थित एक निष्क्रिय ज्वालामुखी है और यह यूरोप की सबसे ऊँची चोटी है।"
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