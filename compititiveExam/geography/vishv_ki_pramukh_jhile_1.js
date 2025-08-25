const questions = [
    {
        topHeading: "विश्व की प्रमुख झीलों पर आधारित बहुविकल्पीय प्रश्न (MCQs) part 1  (quiz_no. 66)."
    },
    {
        question: "विश्व की सबसे बड़ी झील कौन सी है?",
        answers: shuffle([
            { text: "सुपीरियर झील", correct: false },
            { text: "कैस्पियन सागर", correct: true },
            { text: "बैकाल झील", correct: false },
            { text: "विक्टोरिया झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैस्पियन सागर क्षेत्रफल की दृष्टि से विश्व की सबसे बड़ी झील है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका विस्तार पाँच देशों - रूस, ईरान, कजाकिस्तान, तुर्कमेनिस्तान और अजरबैजान - में है।"
    },
    {
        question: "विश्व की सबसे गहरी झील कौन सी है?",
        answers: shuffle([
            { text: "सुपीरियर झील", correct: false },
            { text: "टिटिकाका झील", correct: false },
            { text: "बैकाल झील", correct: true },
            { text: "विक्टोरिया झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रूस में स्थित बैकाल झील विश्व की सबसे गहरी और सबसे पुरानी (लगभग 25-30 मिलियन वर्ष) ताजे पानी की झील है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें पृथ्वी के कुल ताजे पानी का लगभग 20% हिस्सा है।"
    },
    {
        question: "क्षेत्रफल की दृष्टि से विश्व की सबसे बड़ी ताजे पानी की झील कौन सी है?",
        answers: shuffle([
            { text: "विक्टोरिया झील", correct: false },
            { text: "कैस्पियन सागर", correct: false },
            { text: "बैकाल झील", correct: false },
            { text: "सुपीरियर झील", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तरी अमेरिका में स्थित सुपीरियर झील क्षेत्रफल के मामले में विश्व की सबसे बड़ी ताजे पानी की झील है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कनाडा और संयुक्त राज्य अमेरिका की सीमा पर स्थित है।"
    },
    {
        question: "विश्व की सबसे बड़ी खारे पानी की झील कौन सी है?",
        answers: shuffle([
            { text: "मृत सागर", correct: false },
            { text: "ग्रेट सॉल्ट लेक", correct: false },
            { text: "कैस्पियन सागर", correct: true },
            { text: "अरल सागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैस्पियन सागर, जिसे खारे पानी की झील के रूप में वर्गीकृत किया गया है, यह क्षेत्रफल की दृष्टि से सबसे बड़ी झील है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका जल खारा है, लेकिन इसका खारापन समुद्र के पानी से कम है।"
    },
    {
        question: "'फिंगर लेक्स' (Finger Lakes) किस देश में स्थित हैं?",
        answers: shuffle([
            { text: "संयुक्त राज्य अमेरिका", correct: true },
            { text: "कनाडा", correct: false },
            { text: "फिनलैंड", correct: false },
            { text: "स्विट्जरलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फिंगर लेक्स संयुक्त राज्य अमेरिका के न्यूयॉर्क राज्य में स्थित हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये हिमनदों द्वारा निर्मित लंबी और संकरी झीलें हैं।"
    },
    {
        question: "विश्व की सबसे अधिक ऊँचाई पर स्थित नौगम्य झील (Navigable Lake) कौन सी है?",
        answers: shuffle([
            { text: "बैकाल झील", correct: false },
            { text: "टिटिकाका झील", correct: true },
            { text: "टंगानिका झील", correct: false },
            { text: "विक्टोरिया झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टिटिकाका झील पेरू और बोलीविया की सीमा पर एंडीज पर्वतमाला में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह विश्व की सबसे ऊँची नौगम्य झील है।"
    },
    {
        question: "ग्रेट स्लेव लेक (Great Slave Lake) किस देश में स्थित है?",
        answers: shuffle([
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "कनाडा", correct: true },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "रूस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेट स्लेव लेक कनाडा के उत्तर-पश्चिमी क्षेत्रों में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कनाडा की सबसे गहरी झील है और उत्तरी अमेरिका की 10वीं सबसे बड़ी झील है।"
    },
    {
        question: "रूस की बैकाल झील को किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "विश्व की सबसे बड़ी झील", correct: false },
            { text: "विश्व की सबसे गहरी झील", correct: true },
            { text: "विश्व की सबसे ऊँची झील", correct: false },
            { text: "विश्व की सबसे लंबी झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैकाल झील को 'विश्व की सबसे गहरी झील' के रूप में जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक दरार घाटी में बनी है और इसमें ताजे पानी का विशाल भंडार है।"
    },
    {
        question: "किस झील की सीमा पर तंजानिया, युगांडा और केन्या स्थित हैं?",
        answers: shuffle([
            { text: "मलावी झील", correct: false },
            { text: "विक्टोरिया झील", correct: true },
            { text: "टंगानिका झील", correct: false },
            { text: "तुर्काना झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्टोरिया झील अफ्रीका की सबसे बड़ी और विश्व की तीसरी सबसे बड़ी ताजे पानी की झील है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी सीमाएँ तंजानिया, युगांडा और केन्या से लगती हैं।"
    },
    {
        question: "निम्न में से कौन सी झील संयुक्त राज्य अमेरिका और कनाडा के बीच स्थित नहीं है?",
        answers: shuffle([
            { text: "सुपीरियर झील", correct: false },
            { text: "मिशिगन झील", correct: true },
            { text: "ह्यूरन झील", correct: false },
            { text: "ओंटारियो झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिशिगन झील संयुक्त राज्य अमेरिका की एकमात्र महान झील है जो पूरी तरह से उसके अंदर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी महान झीलें (सुपीरियर, ह्यूरन, ओंटारियो और एरी) अमेरिका और कनाडा के बीच स्थित हैं।"
    },
    {
        question: "ग्रेट लेक्स (Great Lakes) में से कौन सी झील पूरी तरह से संयुक्त राज्य अमेरिका के अंदर स्थित है?",
        answers: shuffle([
            { text: "एरी झील", correct: false },
            { text: "ओंटारियो झील", correct: false },
            { text: "मिशिगन झील", correct: true },
            { text: "ह्यूरन झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिशिगन झील पाँच महान झीलों में से एकमात्र है जो पूरी तरह से संयुक्त राज्य अमेरिका की सीमा के भीतर आती है।"
    },
    {
        question: "अफ्रीका की सबसे लंबी झील कौन सी है?",
        answers: shuffle([
            { text: "विक्टोरिया झील", correct: false },
            { text: "तुर्काना झील", correct: false },
            { text: "अल्बर्ट झील", correct: false },
            { text: "टंगानिका झील", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टंगानिका झील अफ्रीका की सबसे लंबी और दूसरी सबसे गहरी झील है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह चार देशों - बुरुंडी, कांगो लोकतांत्रिक गणराज्य, तंजानिया और जाम्बिया - में स्थित है।"
    },
    {
        question: "मृत सागर (Dead Sea) किस प्रकार की झील का उदाहरण है?",
        answers: shuffle([
            { text: "ताजे पानी की झील", correct: false },
            { text: "खारे पानी की झील", correct: true },
            { text: "ज्वालामुखी झील", correct: false },
            { text: "हिमनद झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मृत सागर एक अत्यधिक खारी झील है जो जॉर्डन और इज़राइल के बीच स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी लवणता (salinity) बहुत अधिक है, जिसके कारण इसमें जीवन का अभाव है।"
    },
    {
        question: "टिटिकाका झील किन दो देशों की सीमा पर स्थित है?",
        answers: shuffle([
            { text: "पेरू और ब्राजील", correct: false },
            { text: "पेरू और इक्वाडोर", correct: false },
            { text: "पेरू और बोलीविया", correct: true },
            { text: "ब्राजील और बोलीविया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टिटिकाका झील दक्षिण अमेरिका में एंडीज पर्वतमाला में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पेरू और बोलीविया के बीच प्राकृतिक सीमा बनाती है।"
    },
    {
        question: "तुर्काना झील, जिसे रुडोल्फ झील के नाम से भी जाना जाता है, किस देश में स्थित है?",
        answers: shuffle([
            { text: "युगांडा", correct: false },
            { text: "केन्या", correct: true },
            { text: "तंजानिया", correct: false },
            { text: "इथियोपिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तुर्काना झील केन्या में स्थित है और इसका उत्तरी छोर इथियोपिया में है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह विश्व की सबसे बड़ी रेगिस्तानी झील है।"
    },
    {
        question: "विश्व की सबसे बड़ी मानव निर्मित झील कौन सी है?",
        answers: shuffle([
            { text: "कारा-बोगज़-गोल झील", correct: false },
            { text: "झील मीड", correct: false },
            { text: "वोल्टा झील", correct: true },
            { text: "हुवर झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वोल्टा झील घाना में स्थित है और यह क्षेत्रफल की दृष्टि से विश्व की सबसे बड़ी मानव निर्मित झील है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अकोसोम्बो बांध (Akosombo Dam) के निर्माण के कारण बनी थी।"
    },
    {
        question: "अरल सागर किन दो देशों के बीच स्थित है?",
        answers: shuffle([
            { text: "रूस और कजाकिस्तान", correct: false },
            { text: "कजाकिस्तान और उज्बेकिस्तान", correct: true },
            { text: "उज्बेकिस्तान और तुर्कमेनिस्तान", correct: false },
            { text: "कजाकिस्तान और तुर्कमेनिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरल सागर मध्य एशिया में कजाकिस्तान और उज्बेकिस्तान की सीमा पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> पिछले कुछ दशकों में, यह झील गंभीर रूप से सूख गई है।"
    },
    {
        question: "इरी और ओंटारियो झीलों को कौन सी नहर जोड़ती है?",
        answers: shuffle([
            { text: "सू नहर (Soo Canal)", correct: false },
            { text: "वेलैंड नहर (Welland Canal)", correct: true },
            { text: "पनामा नहर", correct: false },
            { text: "ग्रैंड नहर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेलैंड नहर इरी झील और ओंटारियो झील को जोड़ती है, जिससे जहाजों को नियाग्रा जलप्रपात से बचने में मदद मिलती है।"
    },
    {
        question: "\"हजार झीलों की भूमि\" (Land of a Thousand Lakes) किस देश को कहा जाता है?",
        answers: shuffle([
            { text: "नॉर्वे", correct: false },
            { text: "फिनलैंड", correct: true },
            { text: "स्वीडन", correct: false },
            { text: "कनाडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फिनलैंड को उसकी अनगिनत झीलों के कारण \"हजार झीलों की भूमि\" कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ लगभग 188,000 झीलें हैं।"
    },
    {
        question: "निम्न में से कौन सी झील अफ्रीकी महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "ग्रेट बेयर झील", correct: false },
            { text: "बैकाल झील", correct: false },
            { text: "चाड झील", correct: true },
            { text: "ग्रेट सॉल्ट लेक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चाड झील अफ्रीका महाद्वीप में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह चाड, नाइजर, कैमरून और नाइजीरिया की सीमाओं पर स्थित एक उथली झील है।"
    },
    {
        question: "विश्व की सबसे लवणीय (नमकीन) झील कौन सी है?",
        answers: shuffle([
            { text: "मृत सागर", correct: false },
            { text: "ग्रेट सॉल्ट लेक", correct: false },
            { text: "वान झील", correct: true },
            { text: "अससल झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तुर्की में स्थित वान झील विश्व की सबसे लवणीय झील है, जिसमें पानी की लवणता 330‰ (प्रति हजार) से अधिक है।<br><br><i class='fa-solid fa-angles-right icon'></i> मृत सागर और ग्रेट सॉल्ट लेक भी अत्यधिक लवणीय हैं, लेकिन वान झील का रिकॉर्ड सबसे अधिक है।"
    },
    {
        question: "टंगानिका झील किन चार देशों की सीमा पर स्थित है?",
        answers: shuffle([
            { text: "युगांडा, तंजानिया, रवांडा, बुरुंडी", correct: false },
            { text: "बुरुंडी, कांगो लोकतांत्रिक गणराज्य, तंजानिया, जाम्बिया", correct: true },
            { text: "केन्या, तंजानिया, युगांडा, मलावी", correct: false },
            { text: "ज़ाम्बिया, मलावी, मोज़ाम्बिक, तंजानिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टंगानिका झील अफ्रीकी महान दरार घाटी (African Great Rift Valley) की एक प्रमुख झील है, जो इन चार देशों के बीच स्थित है।"
    },
    {
        question: "किस महाद्वीप में कोई भी झील नहीं है?",
        answers: shuffle([
            { text: "अफ्रीका", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "अंटार्कटिका", correct: true },
            { text: "यूरोप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंटार्कटिका महाद्वीप में कोई भी स्थायी ताजे पानी की झील सतह पर नहीं है, क्योंकि यह बर्फ की मोटी चादरों से ढका है।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, बर्फ के नीचे कई सबग्लेशियल झीलें मौजूद हैं, जैसे कि वोस्तोक झील।"
    },
    {
        question: "सुपीरियर झील और ह्यूरन झील को कौन सी नहर जोड़ती है?",
        answers: shuffle([
            { text: "वेलैंड नहर", correct: false },
            { text: "सू नहर", correct: true },
            { text: "मैक्केनजी नहर", correct: false },
            { text: "एरी नहर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सू नहर (Soo Locks) सुपीरियर झील को ह्यूरन झील से जोड़ती है, जिससे जहाज दोनों झीलों के बीच के जलप्रपातों से बचकर आवाजाही कर पाते हैं।"
    },
    {
        question: "विक्टोरिया झील किस नदी का उद्गम स्थल है?",
        answers: shuffle([
            { text: "नील नदी", correct: true },
            { text: "जाम्बेजी नदी", correct: false },
            { text: "कांगो नदी", correct: false },
            { text: "नाइजर नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्टोरिया झील से श्वेत नील (White Nile) नदी निकलती है, जो नील नदी की दो प्रमुख सहायक नदियों में से एक है।"
    },
    {
        question: "विश्व की दूसरी सबसे गहरी झील कौन सी है?",
        answers: shuffle([
            { text: "बैकाल झील", correct: false },
            { text: "सुपीरियर झील", correct: false },
            { text: "टंगानिका झील", correct: true },
            { text: "कैस्पियन सागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अफ्रीका में स्थित टंगानिका झील, बैकाल झील के बाद विश्व की दूसरी सबसे गहरी झील है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अफ्रीकी दरार घाटी की सबसे पुरानी झीलों में से एक है।"
    },
    {
        question: "अफ्रीका की महान झीलों (Great Lakes of Africa) में से कौन सी झील सबसे बड़ी है?",
        answers: shuffle([
            { text: "मलावी झील", correct: false },
            { text: "अल्बर्ट झील", correct: false },
            { text: "टंगानिका झील", correct: false },
            { text: "विक्टोरिया झील", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्टोरिया झील अफ्रीका की महान झीलों में सबसे बड़ी और विश्व की तीसरी सबसे बड़ी ताजे पानी की झील है।"
    },
    {
        question: "बालखश झील (Lake Balkhash) किस देश में स्थित है?",
        answers: shuffle([
            { text: "रूस", correct: false },
            { text: "चीन", correct: false },
            { text: "कजाकिस्तान", correct: true },
            { text: "मंगोलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बालखश झील कजाकिस्तान में स्थित एक खारे पानी की झील है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह झील पूर्व में खारी और पश्चिम में ताजे पानी की है, जो इसे अनोखा बनाती है।"
    },
    {
        question: "किस झील को \"ईरान का खारा सागर\" कहा जाता है?",
        answers: shuffle([
            { text: "अरल सागर", correct: false },
            { text: "उर्मिया झील", correct: true },
            { text: "कैस्पियन सागर", correct: false },
            { text: "वान झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उर्मिया झील ईरान में स्थित एक अत्यधिक लवणीय झील है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मध्य पूर्व की सबसे बड़ी झील है।"
    },
    {
        question: "संयुक्त राज्य अमेरिका में स्थित ग्रेट सॉल्ट लेक (Great Salt Lake) किस प्रकार की झील का उदाहरण है?",
        answers: shuffle([
            { text: "हिमनद झील", correct: false },
            { text: "ज्वालामुखी झील", correct: false },
            { text: "खारे पानी की झील", correct: true },
            { text: "ताजे पानी की झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेट सॉल्ट लेक यूटा, संयुक्त राज्य अमेरिका में स्थित एक अत्यधिक खारी झील है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पश्चिमी गोलार्ध की सबसे बड़ी खारे पानी की झील है।"
    },
    {
        question: "न्यासा झील (Lake Nyasa) किन तीन देशों की सीमा पर स्थित है?",
        answers: shuffle([
            { text: "मलावी, तंजानिया, मोज़ाम्बिक", correct: true },
            { text: "केन्या, तंजानिया, युगांडा", correct: false },
            { text: "बुरुंडी, तंजानिया, जाम्बिया", correct: false },
            { text: "नाइजीरिया, चाड, कैमरून", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यासा झील (जिसे मलावी झील भी कहते हैं) पूर्वी अफ्रीका में एक महत्वपूर्ण दरार घाटी झील है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मलावी, तंजानिया और मोज़ाम्बिक की सीमाओं पर स्थित है।"
    },
    {
        question: "विश्व की सबसे बड़ी ज्वालामुखी झील कौन सी है?",
        answers: shuffle([
            { text: "क्रेटर झील", correct: false },
            { text: "टोबा झील", correct: true },
            { text: "वान झील", correct: false },
            { text: "अससल झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंडोनेशिया के सुमात्रा द्वीप पर स्थित टोबा झील, एक विशाल ज्वालामुखी झील (caldera lake) है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक प्राचीन ज्वालामुखी विस्फोट के बाद बनी थी।"
    },
    {
        question: "किस झील को 'ग्रेट बियर' (Great Bear Lake) कहा जाता है?",
        answers: shuffle([
            { text: "कनाडा की सबसे बड़ी झील", correct: false },
            { text: "कनाडा की सबसे गहरी झील", correct: false },
            { text: "उत्तरी अमेरिका की सबसे बड़ी झील", correct: false },
            { text: "उत्तरी ध्रुव वृत्त के पास की झील", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेट बियर झील कनाडा के आर्कटिक सर्कल के पास स्थित एक विशाल झील है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उत्तरी अमेरिका की चौथी सबसे बड़ी झील है।"
    },
    {
        question: "किस झील को 'लोअर लेक' (Lower Lake) कहा जाता है और यह संयुक्त राज्य अमेरिका के मिनेसोटा और कनाडा के मैनिटोबा प्रांत के बीच स्थित है?",
        answers: shuffle([
            { text: "लेक ऑफ द वुड्स", correct: true },
            { text: "विनिपेग झील", correct: false },
            { text: "विनिपेगोसिस झील", correct: false },
            { text: "रेनडीयर झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लेक ऑफ द वुड्स' संयुक्त राज्य अमेरिका और कनाडा के बीच स्थित है, और इसे अक्सर 'लोअर लेक' कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका नाम पास के घने जंगलों के कारण पड़ा।"
    },
    {
        question: "मृत सागर (Dead Sea) के जल का घनत्व इतना अधिक क्यों है?",
        answers: shuffle([
            { text: "इसमें खनिज और लवणों की अत्यधिक मात्रा", correct: true },
            { text: "इसमें बहुत अधिक शैवाल", correct: false },
            { text: "यह बहुत गहरा है", correct: false },
            { text: "यह बहुत ठंडा है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मृत सागर के जल में लवणों और खनिजों की अत्यधिक सांद्रता के कारण इसका घनत्व बहुत अधिक होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी कारण कोई भी व्यक्ति इसमें आसानी से तैर सकता है।"
    },
    {
        question: "निम्न में से कौन सी झील अफ्रीकी दरार घाटी (Rift Valley) का हिस्सा नहीं है?",
        answers: shuffle([
            { text: "मलावी झील", correct: false },
            { text: "टंगानिका झील", correct: false },
            { text: "विक्टोरिया झील", correct: true },
            { text: "अल्बर्ट झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्टोरिया झील एक उथली अवसाद में स्थित है जो दरार घाटी के दो पश्चिमी और पूर्वी किनारों के बीच स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> बाकी सभी झीलें दरार घाटी की ही झीलें हैं।"
    },
    {
        question: "विश्व की सबसे लवणीय (saline) झील कौन सी है?",
        answers: shuffle([
            { text: "अससल झील", correct: false },
            { text: "मृत सागर", correct: false },
            { text: "ग्रेट सॉल्ट लेक", correct: false },
            { text: "वान झील", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तुर्की में स्थित वान झील विश्व की सबसे लवणीय झील है, जिसमें पानी की लवणता बहुत अधिक है।"
    },
    {
        question: "किस देश को 'झीलों का देश' कहा जाता है?",
        answers: shuffle([
            { text: "नॉर्वे", correct: false },
            { text: "स्वीडन", correct: false },
            { text: "फिनलैंड", correct: true },
            { text: "आयरलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फिनलैंड में बड़ी संख्या में झीलें हैं, इसलिए इसे 'झीलों का देश' कहा जाता है।"
    },
    {
        question: "'पवन' नामक तूफान से बनी झील कौन सी है?",
        answers: shuffle([
            { text: "टिटिकाका झील", correct: false },
            { text: "लोपनोर झील", correct: true },
            { text: "सांभर झील", correct: false },
            { text: "चिलिका झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोपनोर झील चीन में एक अस्थिर और मौसमी खारे पानी की झील है, जो 'पवन' नामक तूफान से बनी थी।"
    },
    {
        question: "निम्न में से कौन सी झील क्रेटर झील (Crater Lake) है?",
        answers: shuffle([
            { text: "चिल्का झील", correct: false },
            { text: "लोनार झील", correct: true },
            { text: "पुलिकट झील", correct: false },
            { text: "कोल्लेरू झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाराष्ट्र, भारत में स्थित लोनार झील एक क्रेटर झील है, जो एक उल्कापिंड के टकराने से बनी है।"
    },
    {
        question: "विश्व की सबसे बड़ी मीठे पानी की झील कौन सी है?",
        answers: shuffle([
            { text: "सुपीरियर झील", correct: true },
            { text: "विक्टोरिया झील", correct: false },
            { text: "ह्यूरन झील", correct: false },
            { text: "मिशिगन झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुपीरियर झील क्षेत्रफल के मामले में विश्व की सबसे बड़ी मीठे पानी की झील है।"
    },
    {
        question: "कैस्पियन सागर की सीमा कितने देशों से लगती है?",
        answers: shuffle([
            { text: "3", correct: false },
            { text: "4", correct: false },
            { text: "5", correct: true },
            { text: "6", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैस्पियन सागर की सीमा रूस, कजाकिस्तान, तुर्कमेनिस्तान, ईरान और अजरबैजान से लगती है।"
    },
    {
        question: "किस झील का पानी 'ग्रेट बियर झील' और 'ग्रेट स्लेव झील' को जोड़ता है?",
        answers: shuffle([
            { text: "अथबास्का झील", correct: false },
            { text: "विनिपेग झील", correct: false },
            { text: "लेक विनिपेगोसिस", correct: false },
            { text: "मैकेंजी नदी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मैकेंजी नदी ग्रेट स्लेव झील से निकलती है और आर्कटिक महासागर में गिरती है, जो इस क्षेत्र की झीलों और नदियों को जोड़ती है।"
    },
    {
        question: "विक्टोरिया झील किस प्रकार की झील है?",
        answers: shuffle([
            { text: "दरार घाटी झील", correct: false },
            { text: "ज्वालामुखी झील", correct: false },
            { text: "हिमनद झील", correct: false },
            { text: "विवर्तनिक झील", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्टोरिया झील एक विवर्तनिक झील है, जो पृथ्वी की सतह में एक उथले अवसाद के कारण बनी है।"
    },
    {
        question: "'लेक वोस्तोक' (Lake Vostok) कहाँ स्थित है?",
        answers: shuffle([
            { text: "रूस", correct: false },
            { text: "कनाडा", correct: false },
            { text: "अंटार्कटिका", correct: true },
            { text: "ग्रीनलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वोस्तोक झील अंटार्कटिका में बर्फ की मोटी चादर के नीचे स्थित एक सबग्लेशियल झील है।"
    },
    {
        question: "किस झील को \"नमक का सागर\" (Salt Sea) भी कहा जाता है?",
        answers: shuffle([
            { text: "मृत सागर", correct: true },
            { text: "ग्रेट सॉल्ट लेक", correct: false },
            { text: "वान झील", correct: false },
            { text: "अससल झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मृत सागर को इसकी अत्यधिक लवणता के कारण 'नमक का सागर' भी कहा जाता है, जहाँ कोई भी जीव जीवित नहीं रह सकता।"
    },
    {
        question: "विश्व की सबसे बड़ी स्थलीय झील कौन सी है?",
        answers: shuffle([
            { text: "सुपीरियर झील", correct: false },
            { text: "अरल सागर", correct: false },
            { text: "कैस्पियन सागर", correct: true },
            { text: "विक्टोरिया झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैस्पियन सागर चारों ओर से भूमि से घिरा है, इसलिए इसे विश्व की सबसे बड़ी स्थलीय झील माना जाता है।"
    },
    {
        question: "किस देश में 'ग्रेट बेयर झील' और 'ग्रेट स्लेव झील' दोनों स्थित हैं?",
        answers: shuffle([
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "कनाडा", correct: true },
            { text: "रूस", correct: false },
            { text: "फिनलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेट बेयर झील और ग्रेट स्लेव झील, दोनों कनाडा के उत्तर-पश्चिमी क्षेत्रों में स्थित हैं।"
    },
    {
        question: "टंगानिका झील का पानी किस नदी में बहता है?",
        answers: shuffle([
            { text: "नील नदी", correct: false },
            { text: "जाम्बेजी नदी", correct: false },
            { text: "कांगो नदी", correct: true },
            { text: "नाइजर नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टंगानिका झील का पानी लुक्विगा नदी (Lukuga River) के माध्यम से कांगो नदी बेसिन में बहता है।"
    },
    {
        question: "अरल सागर के सिकुड़ने का मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "जलवायु परिवर्तन", correct: false },
            { text: "प्रदूषण", correct: false },
            { text: "आसपास की नदियों का पानी सिंचाई के लिए मोड़ना", correct: true },
            { text: "ज्वालामुखी गतिविधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरल सागर में पानी लाने वाली दो प्रमुख नदियाँ, अमू दरिया और सिर दरिया, का पानी बड़े पैमाने पर सिंचाई के लिए मोड़ दिया गया था, जिससे यह झील सूख गई।"
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