const questions = [ 
    {
        topHeading: "भारत के कृषि पर आधारित बहुविकल्पीय प्रश्न part 2  (quiz_no. 96)."
    },
    {
        question: "भारत में 'दालों' का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        answers: shuffle([
            { text: "उत्तर प्रदेश", correct: false },
            { text: "राजस्थान", correct: false },
            { text: "मध्य प्रदेश", correct: true },
            { text: "महाराष्ट्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य प्रदेश भारत में दालों (दलहन) का सबसे बड़ा उत्पादक राज्य है, जिसमें चना, अरहर और उड़द जैसी दालें प्रमुख हैं।"
    },
    {
        question: "'काली क्रांति' का संबंध किससे है?",
        answers: shuffle([
            { text: "पेट्रोलियम उत्पादन", correct: true },
            { text: "कोयला उत्पादन", correct: false },
            { text: "चमड़ा उद्योग", correct: false },
            { text: "सौर ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली क्रांति का संबंध पेट्रोलियम और कच्चे तेल के उत्पादन को बढ़ाने से है।"
    },
    {
        question: "भारत में 'गहरी काली मिट्टी' को किस अन्य नाम से जाना जाता है?",
        answers: shuffle([
            { text: "रेगुर मिट्टी", correct: true },
            { text: "बांगर मिट्टी", correct: false },
            { text: "खादर मिट्टी", correct: false },
            { text: "तराई मिट्टी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी को 'रेगुर मिट्टी' भी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मुख्य रूप से दक्कन के पठार में पाई जाती है और कपास की खेती के लिए बहुत उपजाऊ होती है।"
    },
    {
        question: "'जायद' फसलें किस मौसम में उगाई जाती हैं?",
        answers: shuffle([
            { text: "रबी और खरीफ के बीच", correct: true },
            { text: "केवल मानसून के मौसम में", correct: false },
            { text: "केवल सर्दियों के मौसम में", correct: false },
            { text: "पूरे वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जायद फसलें, जैसे ककड़ी, तरबूज और खीरा, रबी और खरीफ फसल चक्र के बीच (मार्च से जून तक) के छोटे मौसम में उगाई जाती हैं।"
    },
    {
        question: "'कृषि मूल्य आयोग' (CACP) की स्थापना किस वर्ष हुई थी?",
        answers: shuffle([
            { text: "1960", correct: false },
            { text: "1965", correct: true },
            { text: "1970", correct: false },
            { text: "1975", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृषि मूल्य आयोग (CACP) की स्थापना 1965 में हुई थी।<br><br><i class='fa-solid fa-angles-right icon'></i> यह सरकार को विभिन्न फसलों के लिए न्यूनतम समर्थन मूल्य (MSP) की सिफारिश करता है।"
    },
    {
        question: "'हरित क्रांति' भारत में किस पंचवर्षीय योजना के दौरान शुरू की गई थी?",
        answers: shuffle([
            { text: "दूसरी", correct: false },
            { text: "तीसरी", correct: false },
            { text: "चौथी", correct: true },
            { text: "पांचवीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हरित क्रांति की शुरुआत भारत में तीसरी पंचवर्षीय योजना (1961-66) के अंतिम वर्षों में हुई, लेकिन इसका प्रभाव चौथी पंचवर्षीय योजना (1969-74) में दिखाई दिया।<br><br><i class='fa-solid fa-angles-right icon'></i> दिए गए विकल्पों में चौथी सबसे उपयुक्त है।"
    },
    {
        question: "भारत में 'गेहूं' के उत्पादन के लिए किस प्रकार की जलवायु उपयुक्त है?",
        answers: shuffle([
            { text: "गर्म और आर्द्र", correct: false },
            { text: "ठंडी और शुष्क", correct: false },
            { text: "हल्की गर्म और मध्यम वर्षा", correct: true },
            { text: "अत्यधिक वर्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गेहूं की खेती के लिए बोते समय हल्की ठंडी जलवायु और कटाई के समय हल्की गर्म और शुष्क जलवायु की आवश्यकता होती है।"
    },
    {
        question: "'सघन निर्वाह कृषि' में किसान क्या उगाते हैं?",
        answers: shuffle([
            { text: "नकदी फसलें", correct: false },
            { text: "रोपण फसलें", correct: false },
            { text: "खाद्य फसलें", correct: true },
            { text: "चारा फसलें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सघन निर्वाह कृषि में, किसान मुख्य रूप से अपने परिवार के उपभोग के लिए खाद्य फसलें (जैसे चावल, गेहूं) उगाते हैं।"
    },
    {
        question: "भारत में 'गन्ने' की खेती के लिए वार्षिक वर्षा की मात्रा कितनी होनी चाहिए?",
        answers: shuffle([
            { text: "50-75 सेमी", correct: false },
            { text: "75-150 सेमी", correct: true },
            { text: "150-200 सेमी", correct: false },
            { text: "200 सेमी से अधिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गन्ना एक उष्णकटिबंधीय फसल है, जिसके लिए 75 से 150 सेमी तक की वार्षिक वर्षा आदर्श होती है।"
    },
    {
        question: "'फसल बीमा योजना' किस वर्ष शुरू की गई थी?",
        answers: shuffle([
            { text: "2012", correct: false },
            { text: "2014", correct: false },
            { text: "2016", correct: true },
            { text: "2018", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रधानमंत्री फसल बीमा योजना (PMFBY) 2016 में शुरू की गई थी।"
    },
    {
        question: "भारत में 'गेहूं' की सबसे अधिक प्रति हेक्टेयर उपज किस राज्य में है?",
        answers: shuffle([
            { text: "उत्तर प्रदेश", correct: false },
            { text: "पंजाब", correct: true },
            { text: "हरियाणा", correct: false },
            { text: "मध्य प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हालांकि उत्तर प्रदेश कुल गेहूं उत्पादन में सबसे आगे है, लेकिन प्रति हेक्टेयर उपज के मामले में पंजाब पहले स्थान पर है।"
    },
    {
        question: "'जैविक खेती' का मुख्य उद्देश्य क्या है?",
        answers: shuffle([
            { text: "अधिक उर्वरकों का उपयोग करना", correct: false },
            { text: "प्राकृतिक उर्वरकों और कीटनाशकों का उपयोग करना", correct: true },
            { text: "अधिक जल का उपयोग करना", correct: false },
            { text: "मशीनों का अधिक उपयोग करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैविक खेती में सिंथेटिक उर्वरकों और कीटनाशकों के बजाय प्राकृतिक तरीकों (जैसे जैविक खाद) का उपयोग किया जाता है।"
    },
    {
        question: "'हरित क्रांति' का मुख्य प्रभाव किन फसलों पर पड़ा?",
        answers: shuffle([
            { text: "दलहन और तिलहन", correct: false },
            { text: "चाय और कॉफी", correct: false },
            { text: "गेहूं और चावल", correct: true },
            { text: "गन्ना और कपास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हरित क्रांति के दौरान उच्च उपज वाली किस्मों (HYVs) के बीजों का उपयोग मुख्य रूप से गेहूं और चावल के लिए किया गया था।"
    },
    {
        question: "'नीली क्रांति' का जनक किसे माना जाता है?",
        answers: shuffle([
            { text: "वर्गीज कुरियन", correct: false },
            { text: "हीरालाल चौधरी", correct: true },
            { text: "एम. एस. स्वामीनाथन", correct: false },
            { text: "सैम पित्रोदा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नीली क्रांति का उद्देश्य मत्स्य उत्पादन बढ़ाना था, और इसका जनक डॉ. हीरालाल चौधरी को माना जाता है।"
    },
    {
        question: "भारत में 'सिल्वर फाइबर क्रांति' का संबंध किससे है?",
        answers: shuffle([
            { text: "जूट", correct: false },
            { text: "कपास", correct: true },
            { text: "रेशम", correct: false },
            { text: "ऊन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिल्वर फाइबर क्रांति का संबंध कपास उत्पादन को बढ़ाने से है।"
    },
    {
        question: "'फलों और सब्जियों' के उत्पादन को बढ़ावा देने के लिए कौन सी क्रांति शुरू की गई थी?",
        answers: shuffle([
            { text: "गुलाबी क्रांति", correct: false },
            { text: "सुनहरी क्रांति", correct: true },
            { text: "भूरी क्रांति", correct: false },
            { text: "रजत क्रांति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुनहरी क्रांति का संबंध बागवानी क्षेत्र से है, जिसमें फल, सब्जियां, शहद और अन्य बागवानी उत्पादों का उत्पादन शामिल है।"
    },
    {
        question: "'भूदान-ग्रामदान आंदोलन' किसने शुरू किया था?",
        answers: shuffle([
            { text: "महात्मा गांधी", correct: false },
            { text: "जवाहरलाल नेहरू", correct: false },
            { text: "आचार्य विनोबा भावे", correct: true },
            { text: "जयप्रकाश नारायण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भूदान-ग्रामदान आंदोलन आचार्य विनोबा भावे द्वारा शुरू किया गया एक स्वैच्छिक भूमि सुधार आंदोलन था।"
    },
    {
        question: "'कृषि' किस सूची का विषय है?",
        answers: shuffle([
            { text: "संघ सूची", correct: false },
            { text: "राज्य सूची", correct: true },
            { text: "समवर्ती सूची", correct: false },
            { text: "अवशिष्ट सूची", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान के अनुसार, कृषि राज्य सूची का विषय है।"
    },
    {
        question: "'पाम ऑयल' का उत्पादन बढ़ाने के लिए कौन सी क्रांति शुरू की गई थी?",
        answers: shuffle([
            { text: "पीली क्रांति", correct: true },
            { text: "हरित क्रांति", correct: false },
            { text: "इंद्रधनुषी क्रांति", correct: false },
            { text: "सुनहरी क्रांति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीली क्रांति मुख्य रूप से तिलहन उत्पादन से संबंधित है, जिसमें पाम ऑयल भी शामिल है, जिसका उद्देश्य खाद्य तेलों में आत्मनिर्भरता प्राप्त करना है।"
    },
    {
        question: "'भारत में सिंचाई का सबसे महत्वपूर्ण स्रोत' क्या है?",
        answers: shuffle([
            { text: "नहरें", correct: false },
            { text: "कुएँ और नलकूप", correct: true },
            { text: "तालाब", correct: false },
            { text: "वर्षा जल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में सिंचाई का सबसे महत्वपूर्ण स्रोत कुएँ और नलकूप हैं, जिनका उपयोग देश में लगभग 60% से अधिक सिंचित भूमि के लिए किया जाता है।"
    },
    {
        question: "'लाल मिट्टी' किस फसल की खेती के लिए सबसे उपयुक्त है?",
        answers: shuffle([
            { text: "गेहूं", correct: false },
            { text: "चावल", correct: false },
            { text: "मूंगफली और बाजरा", correct: true },
            { text: "कपास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टी कम उपजाऊ होती है, लेकिन इसमें मूंगफली, बाजरा, रागी और तंबाकू जैसी फसलें उगाई जा सकती हैं।"
    },
    {
        question: "'भारत का ब्रेड बास्केट' (Bread Basket) किसे कहा जाता है?",
        answers: shuffle([
            { text: "गंगा-ब्रह्मपुत्र मैदान", correct: false },
            { text: "दक्कन का पठार", correct: false },
            { text: "पंजाब-हरियाणा मैदान", correct: true },
            { text: "तटीय मैदान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पंजाब और हरियाणा में गेहूं और चावल का अत्यधिक उत्पादन होता है, इसलिए इन क्षेत्रों को 'भारत का ब्रेड बास्केट' कहा जाता है।"
    },
    {
        question: "'झूम खेती' को आंध्र प्रदेश में किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "पोडु", correct: true },
            { text: "बीवर", correct: false },
            { text: "दीपा", correct: false },
            { text: "दहिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> झूम खेती को आंध्र प्रदेश में 'पोडु' के नाम से जाना जाता है।"
    },
    {
        question: "भारत में 'बागवानी' के विकास के लिए कौन सी क्रांति शुरू की गई थी?",
        answers: shuffle([
            { text: "गुलाबी क्रांति", correct: false },
            { text: "भूरी क्रांति", correct: false },
            { text: "सुनहरी क्रांति", correct: true },
            { text: "रजत क्रांति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुनहरी क्रांति का संबंध बागवानी (Horticulture) से है, जिसमें फल, सब्जी, शहद और अन्य बागवानी उत्पादों का उत्पादन शामिल है।"
    },
    {
        question: "'अंडा उत्पादन' किस क्रांति से संबंधित है?",
        answers: shuffle([
            { text: "पीली क्रांति", correct: false },
            { text: "भूरी क्रांति", correct: false },
            { text: "रजत क्रांति", correct: true },
            { text: "गुलाबी क्रांति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रजत क्रांति (Silver Revolution) का संबंध अंडा उत्पादन और पोल्ट्री उत्पादन को बढ़ावा देने से है।"
    },
    {
        question: "'सदाबहार क्रांति' का मुख्य उद्देश्य क्या है?",
        answers: shuffle([
            { text: "फसल विविधीकरण", correct: false },
            { text: "बागवानी", correct: false },
            { text: "जैविक खेती", correct: false },
            { text: "समग्र कृषि विकास", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सदाबहार क्रांति का उद्देश्य कृषि उत्पादन को बढ़ाना है, लेकिन बिना पर्यावरण को नुकसान पहुंचाए।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका लक्ष्य टिकाऊ और समग्र कृषि विकास को सुनिश्चित करना है।"
    },
    {
        question: "'फसल बीमा योजना' किस वर्ष शुरू की गई थी?",
        answers: shuffle([
            { text: "2012", correct: false },
            { text: "2014", correct: false },
            { text: "2016", correct: true },
            { text: "2018", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रधानमंत्री फसल बीमा योजना (PMFBY) 2016 में शुरू की गई थी।"
    },
    {
        question: "भारत में 'कृषि वर्ष' की अवधि क्या है?",
        answers: shuffle([
            { text: "1 अप्रैल से 31 मार्च", correct: false },
            { text: "1 जनवरी से 31 दिसंबर", correct: false },
            { text: "1 जून से 31 मई", correct: false },
            { text: "1 जुलाई से 30 जून", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में कृषि वर्ष 1 जुलाई को शुरू होता है और अगले वर्ष 30 जून को समाप्त होता है, जो मानसून चक्र के अनुरूप है।"
    },
    {
        question: "'गहन निर्वाह कृषि' का मुख्य उद्देश्य क्या होता है?",
        answers: shuffle([
            { text: "निर्यात के लिए फसलों का उत्पादन", correct: false },
            { text: "परिवार की खपत के लिए फसलों का उत्पादन", correct: true },
            { text: "औद्योगिकीकरण को बढ़ावा देना", correct: false },
            { text: "नकदी फसलों पर ध्यान देना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गहन निर्वाह कृषि में किसान अपने और अपने परिवार की जरूरतों को पूरा करने के लिए कम भूमि पर अधिक श्रम और निवेश के साथ खेती करते हैं।"
    },
    {
        question: "'भारत में सिंचाई का सबसे बड़ा साधन' क्या है?",
        answers: shuffle([
            { text: "नहरें", correct: false },
            { text: "कुएँ और नलकूप", correct: true },
            { text: "तालाब", correct: false },
            { text: "वर्षा जल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में सिंचाई का सबसे महत्वपूर्ण और व्यापक रूप से उपयोग किया जाने वाला साधन कुएँ और नलकूप हैं।"
    },
    {
        question: "'रबी' फसलों को किस मौसम में बोया जाता है?",
        answers: shuffle([
            { text: "वसंत", correct: false },
            { text: "ग्रीष्म", correct: false },
            { text: "शीत", correct: true },
            { text: "मानसून", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रबी फसलें, जैसे गेहूं और जौ, अक्टूबर-नवंबर में सर्दियों की शुरुआत में बोई जाती हैं।"
    },
    {
        question: "भारत में किस फसल को 'सुनहरा रेशा' (Golden Fibre) कहा जाता है?",
        answers: shuffle([
            { text: "कपास", correct: false },
            { text: "जूट", correct: true },
            { text: "चाय", correct: false },
            { text: "रेशम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जूट को उसके चमकीले सुनहरे रंग और आर्थिक महत्व के कारण 'सुनहरा रेशा' कहा जाता है।"
    },
    {
        question: "'भारत में सर्वाधिक जूट उत्पादक राज्य' कौन सा है?",
        answers: shuffle([
            { text: "बिहार", correct: false },
            { text: "असम", correct: false },
            { text: "पश्चिम बंगाल", correct: true },
            { text: "ओडिशा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पश्चिम बंगाल भारत का सबसे बड़ा जूट उत्पादक राज्य है, जहाँ गंगा-ब्रह्मपुत्र डेल्टा की जलोढ़ मिट्टी जूट की खेती के लिए आदर्श है।"
    },
    {
        question: "'रेशम उत्पादन' में भारत का सबसे बड़ा राज्य कौन सा है?",
        answers: shuffle([
            { text: "कर्नाटक", correct: true },
            { text: "असम", correct: false },
            { text: "जम्मू और कश्मीर", correct: false },
            { text: "आंध्र प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कर्नाटक भारत का सबसे बड़ा रेशम उत्पादक राज्य है, जो देश के कुल रेशम उत्पादन का लगभग 70% से अधिक हिस्सा प्रदान करता है।"
    },
    {
        question: "'मसालों का बगीचा' के नाम से कौन सा राज्य प्रसिद्ध है?",
        answers: shuffle([
            { text: "कर्नाटक", correct: false },
            { text: "तमिलनाडु", correct: false },
            { text: "केरल", correct: true },
            { text: "आंध्र प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केरल अपने विविध प्रकार के मसालों जैसे काली मिर्च, इलायची, लौंग आदि के उत्पादन के लिए प्रसिद्ध है, इसलिए इसे 'मसालों का बगीचा' कहते हैं।"
    },
    {
        question: "'सफेद सोना' किस फसल को कहा जाता है?",
        answers: shuffle([
            { text: "गन्ना", correct: false },
            { text: "चाय", correct: false },
            { text: "कपास", correct: true },
            { text: "जूट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कपास को उसके आर्थिक महत्व और सफेद रंग के कारण 'सफेद सोना' कहा जाता है।"
    },
    {
        question: "'ऑपरेशन फ्लड' का संबंध किस क्षेत्र से है?",
        answers: shuffle([
            { text: "बाढ़ नियंत्रण", correct: false },
            { text: "दुग्ध उत्पादन", correct: true },
            { text: "मछली पालन", correct: false },
            { text: "सिंचाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑपरेशन फ्लड (श्वेत क्रांति) भारत में दुग्ध उत्पादन बढ़ाने के लिए चलाया गया एक कार्यक्रम था।"
    },
    {
        question: "'झूम कृषि' भारत के किस क्षेत्र में प्रचलित है?",
        answers: shuffle([
            { text: "उत्तर-पूर्वी भारत", correct: true },
            { text: "दक्षिण भारत", correct: false },
            { text: "पश्चिमी भारत", correct: false },
            { text: "मध्य भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> झूम खेती एक प्रकार की स्थानांतरण कृषि है जो मुख्य रूप से उत्तर-पूर्वी राज्यों में की जाती है।"
    },
    {
        question: "'भारत में दालों का सबसे बड़ा उत्पादक राज्य' कौन सा है?",
        answers: shuffle([
            { text: "उत्तर प्रदेश", correct: false },
            { text: "राजस्थान", correct: false },
            { text: "मध्य प्रदेश", correct: true },
            { text: "महाराष्ट्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य प्रदेश भारत में दालों (दलहन) का सबसे बड़ा उत्पादक राज्य है।"
    },
    {
        question: "'गेहूं' के उत्पादन के लिए किस प्रकार की जलवायु की आवश्यकता होती है?",
        answers: shuffle([
            { text: "गर्म और आर्द्र", correct: false },
            { text: "ठंडी और शुष्क", correct: false },
            { text: "मध्यम तापमान और मध्यम वर्षा", correct: true },
            { text: "अत्यधिक वर्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गेहूं की खेती के लिए बोते समय ठंडी जलवायु और कटाई के समय हल्की गर्म और शुष्क जलवायु की आवश्यकता होती है।"
    },
    {
        question: "'सघन निर्वाह कृषि' में किसान अपनी उपज का क्या करते हैं?",
        answers: shuffle([
            { text: "बाजार में बेचते हैं", correct: false },
            { text: "परिवार की खपत के लिए उपयोग करते हैं", correct: true },
            { text: "निर्यात करते हैं", correct: false },
            { text: "औद्योगिक उपयोग के लिए बेचते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सघन निर्वाह कृषि में किसान मुख्य रूप से अपने परिवार के उपभोग के लिए खाद्य फसलें उगाते हैं।"
    },
    {
        question: "'नीली क्रांति' का संबंध किससे है?",
        answers: shuffle([
            { text: "तिलहन उत्पादन", correct: false },
            { text: "उर्वरक उत्पादन", correct: false },
            { text: "मत्स्य उत्पादन", correct: true },
            { text: "आलू उत्पादन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नीली क्रांति का उद्देश्य भारत में मत्स्य उत्पादन को बढ़ाना है।"
    },
    {
        question: "'पीली क्रांति' का संबंध किस फसल से है?",
        answers: shuffle([
            { text: "दलहन", correct: false },
            { text: "तिलहन", correct: true },
            { text: "आलू", correct: false },
            { text: "गन्ना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीली क्रांति का उद्देश्य भारत में तिलहन फसलों (जैसे सरसों, सूरजमुखी) के उत्पादन को बढ़ाकर खाद्य तेलों में आत्मनिर्भरता प्राप्त करना था।"
    },
    {
        question: "'झूम खेती' को आंध्र प्रदेश में किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "दीपा", correct: false },
            { text: "पोडु", correct: true },
            { text: "दहिया", correct: false },
            { text: "बीवर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> झूम खेती को आंध्र प्रदेश में 'पोडु' के नाम से जाना जाता है।"
    },
    {
        question: "'कॉफी' का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        answers: shuffle([
            { text: "केरल", correct: false },
            { text: "तमिलनाडु", correct: false },
            { text: "कर्नाटक", correct: true },
            { text: "आंध्र प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कर्नाटक भारत का सबसे बड़ा कॉफी उत्पादक राज्य है, जहाँ कुल उत्पादन का 70% से अधिक होता है।"
    },
    {
        question: "'कपास' की खेती के लिए कौन सी मिट्टी सबसे उपयुक्त है?",
        answers: shuffle([
            { text: "जलोढ़ मिट्टी", correct: false },
            { text: "काली मिट्टी", correct: true },
            { text: "लाल मिट्टी", correct: false },
            { text: "लेटराइट मिट्टी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी, जिसे 'रेगुर मिट्टी' भी कहते हैं, कपास की खेती के लिए सबसे उपयुक्त होती है क्योंकि इसमें नमी धारण करने की क्षमता अधिक होती है।"
    },
    {
        question: "'हरित क्रांति' का मुख्य प्रभाव किन फसलों पर पड़ा?",
        answers: shuffle([
            { text: "दलहन और तिलहन", correct: false },
            { text: "चाय और कॉफी", correct: false },
            { text: "गेहूं और चावल", correct: true },
            { text: "गन्ना और कपास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हरित क्रांति के दौरान उच्च उपज वाली किस्मों (HYVs) के बीजों का उपयोग मुख्य रूप से गेहूं और चावल के उत्पादन को बढ़ाने के लिए किया गया था।"
    },
    {
        question: "'गन्ने' का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        answers: shuffle([
            { text: "महाराष्ट्र", correct: false },
            { text: "उत्तर प्रदेश", correct: true },
            { text: "कर्नाटक", correct: false },
            { text: "तमिलनाडु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर प्रदेश भारत में गन्ने का सबसे बड़ा उत्पादक राज्य है।"
    },
    {
        question: "'लाल क्रांति' का संबंध किससे है?",
        answers: shuffle([
            { text: "प्याज उत्पादन", correct: false },
            { text: "टमाटर और मांस उत्पादन", correct: true },
            { text: "दूध उत्पादन", correct: false },
            { text: "उर्वरक उत्पादन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल क्रांति का संबंध टमाटर और मांस के उत्पादन को बढ़ाने से है।"
    },
    {
        question: "'भारत में सर्वाधिक चावल का कटोरा' के रूप में कौन सा क्षेत्र जाना जाता है?",
        answers: shuffle([
            { text: "पंजाब", correct: false },
            { text: "गंगा-ब्रह्मपुत्र मैदान", correct: false },
            { text: "कृष्णा-गोदावरी डेल्टा", correct: true },
            { text: "छत्तीसगढ़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृष्णा-गोदावरी डेल्टा क्षेत्र में चावल के अत्यधिक उत्पादन के कारण इसे 'चावल का कटोरा' कहा जाता है।"
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