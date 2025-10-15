const questions = [
    {
        topHeading: "जलमंडल पर आधारित 50 MCQs part_2 (quiz_no.)"
    },
    {
        question: "कौन सी नहर बाल्टिक सागर को उत्तरी सागर से जोड़ती है?",
        answers: shuffle([
            { text: "पनामा नहर", correct: false },
            { text: "स्वेज नहर", correct: false },
            { text: "कील नहर", correct: true },
            { text: "मैनचेस्टर नहर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कील नहर जर्मनी में स्थित है और यह बाल्टिक सागर को सीधे उत्तरी सागर से जोड़कर यात्रा के समय को कम करती है।"
    },
    {
        question: "अगुलहास धारा किस महासागर में बहती है?",
        answers: shuffle([
            { text: "प्रशांत महासागर", correct: false },
            { text: "अटलांटिक महासागर", correct: false },
            { text: "हिंद महासागर", correct: true },
            { text: "आर्कटिक महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अगुलहास धारा एक गर्म पश्चिमी सीमा धारा है जो हिंद महासागर के दक्षिण-पश्चिमी भाग में बहती है।"
    },
    {
        question: "पानी के भीतर पर्वत श्रृंखला को क्या कहा जाता है?",
        answers: shuffle([
            { text: "गर्त (Trench)", correct: false },
            { text: "कटक (Ridge)", correct: true },
            { text: "गुयोट (Guyot)", correct: false },
            { text: "मग्नतट (Shelf)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य-महासागरीय कटक समुद्र के नीचे स्थित एक विशाल पर्वत श्रृंखला है, जो टेक्टोनिक प्लेटों के अलग होने से बनती है।"
    },
    {
        question: "टिटिकाका झील कहाँ स्थित है?",
        answers: shuffle([
            { text: "उत्तरी अमेरिका", correct: false },
            { text: "अफ्रीका", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "दक्षिण अमेरिका", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टिटिकाका झील पेरू और बोलीविया की सीमा पर एंडीज पर्वत में स्थित है और यह दुनिया की सबसे ऊँची नौगम्य झील है।"
    },
    {
        question: "'ला नीना' (La Niña) घटना के दौरान पूर्वी प्रशांत महासागर का तापमान कैसा हो जाता है?",
        answers: shuffle([
            { text: "सामान्य से अधिक गर्म", correct: false },
            { text: "सामान्य से अधिक ठंडा", correct: true },
            { text: "कोई परिवर्तन नहीं", correct: false },
            { text: "बहुत अस्थिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ला नीना, एल नीनो के विपरीत है, जिसमें पूर्वी उष्णकटबंधीय प्रशांत महासागर का सतही जल सामान्य से अधिक ठंडा हो जाता है।"
    },
    {
        question: "कौन सी नदी विषुवत रेखा को दो बार काटती है?",
        answers: shuffle([
            { text: "नील नदी", correct: false },
            { text: "अमेज़ॅन नदी", correct: false },
            { text: "कांगो नदी (जायरे नदी)", correct: true },
            { text: "मिसिसिपी नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अफ्रीका की कांगो नदी, जिसे जायरे नदी भी कहा जाता है, विषुवत रेखा को दो बार पार करती है।"
    },
    {
        question: "समुद्री धाराओं की दिशा को प्रभावित करने वाला कोरिओलिस बल किसके कारण उत्पन्न होता है?",
        answers: shuffle([
            { text: "पृथ्वी का गुरुत्वाकर्षण", correct: false },
            { text: "पृथ्वी का घूर्णन", correct: true },
            { text: "चंद्रमा का खिंचाव", correct: false },
            { text: "तापमान में अंतर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी के अपने अक्ष पर घूमने के कारण एक आभासी बल उत्पन्न होता है जो उत्तरी गोलार्ध में गतिमान वस्तुओं (जैसे धाराओं) को दाईं ओर और दक्षिणी गोलार्ध में बाईं ओर मोड़ देता है।"
    },
    {
        question: "'चैलेंजर डीप' किस गर्त का सबसे गहरा बिंदु है?",
        answers: shuffle([
            { text: "टोंगा गर्त", correct: false },
            { text: "फिलीपीन गर्त", correct: false },
            { text: "कुरील गर्त", correct: false },
            { text: "मारियाना गर्त", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चैलेंजर डीप, मारियाना गर्त का सबसे गहरा ज्ञात बिंदु है और यह पृथ्वी पर महासागरों का भी सबसे गहरा बिंदु है।"
    },
    {
        question: "नदी के युवावस्था में बनने वाली प्रमुख भू-आकृति कौन सी है?",
        answers: shuffle([
            { text: "डेल्टा", correct: false },
            { text: "विसर्प (Meander)", correct: false },
            { text: "वी-आकार की घाटी और गॉर्ज", correct: true },
            { text: "ऑक्स-बो झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपनी युवावस्था में, नदियाँ पहाड़ों से तेजी से बहती हैं और लंबवत कटाव करती हैं, जिससे गहरी और संकीर्ण 'वी' आकार की घाटियाँ और गॉर्ज बनते हैं।"
    },
    {
        question: "किस प्रकार की वर्षा तब होती है जब गर्म और आर्द्र हवा किसी पर्वत से टकराकर ऊपर उठने के लिए मजबूर हो जाती है?",
        answers: shuffle([
            { text: "संवहनीय वर्षा", correct: false },
            { text: "पर्वतीय वर्षा", correct: true },
            { text: "चक्रवातीय वर्षा", correct: false },
            { text: "मानसूनी वर्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसे पर्वतीय वर्षा (Orographic Rainfall) कहते हैं, जहाँ हवा पहाड़ के ढलान पर ऊपर उठकर ठंडी होती है, संघनित होती है और वर्षा करती है।"
    },
    {
        question: "विश्व का सबसे बड़ा प्रायद्वीप कौन सा है?",
        answers: shuffle([
            { text: "भारतीय प्रायद्वीप", correct: false },
            { text: "अरब प्रायद्वीप", correct: true },
            { text: "इंडोचीन प्रायद्वीप", correct: false },
            { text: "अलास्का प्रायद्वीप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरब प्रायद्वीप क्षेत्रफल के हिसाब से दुनिया का सबसे बड़ा प्रायद्वीप है।"
    },
    {
        question: "सपाट शीर्ष वाले समुद्री पर्वतों को क्या कहा जाता है?",
        answers: shuffle([
            { text: "समुद्री टीला (Seamount)", correct: false },
            { text: "गुयोट (Guyot)", correct: true },
            { text: "कटक (Ridge)", correct: false },
            { text: "एटोल (Atoll)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुयोट पानी के नीचे स्थित ज्वालामुखी पर्वत होते हैं जिनका शीर्ष लहरों के कटाव के कारण सपाट हो जाता है।"
    },
    {
        question: "ग्रैंड बैंक, जो एक प्रमुख मत्स्य ग्रहण क्षेत्र है, कहाँ स्थित है?",
        answers: shuffle([
            { text: "उत्तरी प्रशांत महासागर", correct: false },
            { text: "उत्तरी अटलांटिक महासागर", correct: true },
            { text: "दक्षिणी हिंद महासागर", correct: false },
            { text: "आर्कटिक महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रैंड बैंक न्यूफ़ाउंडलैंड के तट पर उथले पानी का एक समूह है, जहाँ ठंडी लैब्राडोर धारा गर्म गल्फ स्ट्रीम से मिलती है, जिससे यह मछली पकड़ने के लिए एक उत्कृष्ट स्थान बन जाता है।"
    },
    {
        question: "पृथ्वी के जलमंडल में जल की विभिन्न अवस्थाओं का सही अवरोही क्रम क्या है?",
        answers: shuffle([
            { text: "महासागर > ग्लेशियर > भूमिगत जल > झीलें", correct: true },
            { text: "ग्लेशियर > महासागर > झीलें > भूमिगत जल", correct: false },
            { text: "महासागर > भूमिगत जल > ग्लेशियर > झीलें", correct: false },
            { text: "ग्लेशियर > भूमिगत जल > महासागर > झीलें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी का अधिकांश जल महासागरों में (खारे पानी के रूप में) है, इसके बाद ग्लेशियरों और बर्फ की चोटियों में (मीठे पानी के रूप में), फिर भूमिगत जल और अंत में झीलों और नदियों में है।"
    },
    {
        question: "डोवर जलसंधि किन दो देशों को अलग करती है?",
        answers: shuffle([
            { text: "स्पेन और मोरक्को", correct: false },
            { text: "ब्रिटेन और फ्रांस", correct: true },
            { text: "संयुक्त राज्य अमेरिका और क्यूबा", correct: false },
            { text: "रूस और जापान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डोवर जलसंधि इंग्लिश चैनल के सबसे संकरे हिस्से पर स्थित है और यह ग्रेट ब्रिटेन को महाद्वीपीय यूरोप (फ्रांस) से अलग करती है।"
    },
    {
        question: "जल की कठोरता के लिए कौन से तत्व जिम्मेदार हैं?",
        answers: shuffle([
            { text: "सोडियम और पोटेशियम", correct: false },
            { text: "कैल्शियम और मैग्नीशियम", correct: true },
            { text: "क्लोरीन और सल्फर", correct: false },
            { text: "लोहा और मैंगनीज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पानी में कैल्शियम और मैग्नीशियम के बाइकार्बोनेट, क्लोराइड और सल्फेट की उपस्थिति उसे कठोर बनाती है।"
    },
    {
        question: "वोल्गा नदी किस सागर में अपना जल विसर्जित करती है?",
        answers: shuffle([
            { text: "काला सागर", correct: false },
            { text: "भूमध्य सागर", correct: false },
            { text: "बाल्टिक सागर", correct: false },
            { text: "कैस्पियन सागर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वोल्गा यूरोप की सबसे लंबी नदी है और यह रूस से होकर बहती हुई अंततः कैस्पियन सागर में मिल जाती है।"
    },
    {
        question: "'बरमूडा त्रिभुज' किस महासागर में स्थित है?",
        answers: shuffle([
            { text: "प्रशांत महासागर", correct: false },
            { text: "हिंद महासागर", correct: false },
            { text: "अटलांटिक महासागर", correct: true },
            { text: "दक्षिणी महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बरमूडा त्रिभुज उत्तरी अटलांटिक महासागर के पश्चिमी भाग में एक शिथिल परिभाषित क्षेत्र है।"
    },
    {
        question: "नदी द्वारा बनाई गई सबसे चौड़ी भू-आकृति क्या है?",
        answers: shuffle([
            { text: "बाढ़ का मैदान (Floodplain)", correct: true },
            { text: "डेल्टा", correct: false },
            { text: "गॉर्ज", correct: false },
            { text: "जलप्रपात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाढ़ के दौरान नदी के किनारों पर महीन तलछट के जमाव से बनने वाला समतल और चौड़ा क्षेत्र बाढ़ का मैदान कहलाता है।"
    },
    {
        question: "समुद्री राष्ट्रीय उद्यान, मन्नार की खाड़ी, किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "केरल", correct: false },
            { text: "गुजरात", correct: false },
            { text: "तमिलनाडु", correct: true },
            { text: "आंध्र प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मन्नार की खाड़ी समुद्री राष्ट्रीय उद्यान भारत के तमिलनाडु राज्य में स्थित एक संरक्षित क्षेत्र है।"
    },
    {
        question: "थर्मोकलाइन (Thermocline) परत क्या है?",
        answers: shuffle([
            { text: "वह परत जहाँ लवणता तेजी से बदलती है", correct: false },
            { text: "वह परत जहाँ घनत्व तेजी से बदलता है", correct: false },
            { text: "वह परत जहाँ तापमान गहराई के साथ तेजी से घटता है", correct: true },
            { text: "वह परत जहाँ ऑक्सीजन का स्तर सबसे कम होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थर्मोकलाइन समुद्र में एक परत है जिसमें तापमान ऊपर की गर्म परत और नीचे की ठंडी परत के बीच तेजी से कम होता है।"
    },
    {
        question: "एटोल (Atoll) क्या है?",
        answers: shuffle([
            { text: "एक सक्रिय ज्वालामुखी", correct: false },
            { text: "एक सपाट शीर्ष वाला समुद्री पर्वत", correct: false },
            { text: "एक घोड़े की नाल या वलय के आकार की प्रवाल भित्ति", correct: true },
            { text: "एक हिमनद झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एटोल एक वलय के आकार की प्रवाल भित्ति है जो एक लैगून को पूरी तरह या आंशिक रूप से घेरती है।"
    },
    {
        question: "पृथ्वी के सबसे उत्तरी महासागर का क्या नाम है?",
        answers: shuffle([
            { text: "अटलांटिक महासागर", correct: false },
            { text: "प्रशांत महासागर", correct: false },
            { text: "हिंद महासागर", correct: false },
            { text: "आर्कटिक महासागर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आर्कटिक महासागर दुनिया का सबसे छोटा और सबसे उथला महासागर है, जो उत्तरी ध्रुव के आसपास स्थित है।"
    },
    {
        question: "होर्मुज जलसंधि किन दो जल निकायों को जोड़ती है?",
        answers: shuffle([
            { text: "फारस की खाड़ी और ओमान की खाड़ी", correct: true },
            { text: "लाल सागर और अदन की खाड़ी", correct: false },
            { text: "अटलांटिक महासागर और भूमध्य सागर", correct: false },
            { text: "काला सागर और मरमरा सागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> होर्मुज जलसंधि फारस की खाड़ी को ओमान की खाड़ी और अरब सागर से जोड़ने वाला एक महत्वपूर्ण जलमार्ग है।"
    },
    {
        question: "'अंध महासागर' किस महासागर का उपनाम है?",
        answers: shuffle([
            { text: "प्रशांत महासागर", correct: false },
            { text: "अटलांटिक महासागर", correct: true },
            { text: "हिंद महासागर", correct: false },
            { text: "आर्कटिक महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऐतिहासिक रूप से, अटलांटिक महासागर को इसके विशाल और अज्ञात विस्तार के कारण 'अंध महासागर' भी कहा जाता था।"
    },
    {
        question: "जल प्रदूषण को मापने के लिए निम्नलिखित में से कौन सा परीक्षण किया जाता है?",
        answers: shuffle([
            { text: "जैव रासायनिक ऑक्सीजन मांग (BOD)", correct: false },
            { text: "पीएच मान", correct: false },
            { text: "चालकता", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बी.ओ.डी., पी.एच. मान, और चालकता सभी जल की गुणवत्ता और प्रदूषण के स्तर को मापने के लिए उपयोग किए जाने वाले महत्वपूर्ण पैरामीटर हैं।"
    },
    {
        question: "भारत की सबसे बड़ी लैगून झील कौन सी है?",
        answers: shuffle([
            { text: "पुलिकट झील", correct: false },
            { text: "वेम्बनाड झील", correct: false },
            { text: "कोलेरू झील", correct: false },
            { text: "चिल्का झील", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उड़ीसा में स्थित चिल्का झील भारत की सबसे बड़ी और दुनिया की दूसरी सबसे बड़ी खारे पानी की लैगून झील है।"
    },
    {
        question: "नियाग्रा जलप्रपात किन दो झीलों के बीच स्थित है?",
        answers: shuffle([
            { text: "सुपीरियर और मिशिगन", correct: false },
            { text: "ह्यूरॉन और ओंटारियो", correct: false },
            { text: "ईरी और ओंटारियो", correct: true },
            { text: "मिशिगन और ह्यूरॉन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नियाग्रा जलप्रपात उत्तरी अमेरिका की ईरी झील और ओंटारियो झील के बीच नियाग्रा नदी पर स्थित है।"
    },
    {
        question: "'दक्षिणी महासागर' को आधिकारिक तौर पर कब महासागर के रूप में मान्यता दी गई?",
        answers: shuffle([
            { text: "1950", correct: false },
            { text: "1982", correct: false },
            { text: "2000", correct: true },
            { text: "2021", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंतर्राष्ट्रीय जल सर्वेक्षण संगठन (IHO) ने वर्ष 2000 में दक्षिणी महासागर को पांचवें महासागर के रूप में सीमांकित और नामित किया।"
    },
    {
        question: "पिकोकलाइन (Pycnocline) परत क्या है?",
        answers: shuffle([
            { text: "वह परत जहाँ लवणता तेजी से बदलती है", correct: false },
            { text: "वह परत जहाँ घनत्व गहराई के साथ तेजी से बढ़ता है", correct: true },
            { text: "वह परत जहाँ तापमान तेजी से घटता है", correct: false },
            { text: "वह परत जहाँ प्रकाश प्रवेश नहीं कर सकता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पिकोकलाइन समुद्र में एक परत है जिसमें पानी का घनत्व गहराई के साथ तेजी से बढ़ता है।"
    },
    {
        question: "मीकांग नदी किस सागर में गिरती है?",
        answers: shuffle([
            { text: "अंडमान सागर", correct: false },
            { text: "पीला सागर", correct: false },
            { text: "दक्षिण चीन सागर", correct: true },
            { text: "जापान सागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मीकांग नदी तिब्बत से निकलकर चीन, म्यांमार, लाओस, थाईलैंड, कंबोडिया और वियतनाम से होकर बहती हुई दक्षिण चीन सागर में मिल जाती है।"
    },
    {
        question: "'ग्रेट ब्लू होल' कहाँ स्थित है?",
        answers: shuffle([
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "मेक्सिको", correct: false },
            { text: "बेलीज", correct: true },
            { text: "मिस्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेट ब्लू होल बेलीज के तट पर एक विशाल समुद्री सिंकहोल है, जो स्कूबा डाइवर्स के बीच बहुत लोकप्रिय है।"
    },
    {
        question: "महाद्वीपीय ढाल (Continental Slope) की विशेषता क्या है?",
        answers: shuffle([
            { text: "यह एक उथला, मंद ढलान वाला क्षेत्र है", correct: false },
            { text: "यह एक तीव्र ढलान वाला क्षेत्र है", correct: true },
            { text: "यह एक समतल, गहरा समुद्री मैदान है", correct: false },
            { text: "यह एक ज्वालामुखी पर्वत है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाद्वीपीय ढाल, महाद्वीपीय मग्नतट और गहरे समुद्र के बीच का तीव्र ढलान वाला क्षेत्र है।"
    },
    {
        question: "यूट्रोफिकेशन (सुपोषण) का क्या अर्थ है?",
        answers: shuffle([
            { text: "जल निकाय का लवणता में वृद्धि", correct: false },
            { text: "जल निकाय का पोषक तत्वों से समृद्ध होना", correct: true },
            { text: "जल निकाय का सूख जाना", correct: false },
            { text: "जल निकाय का तापमान बढ़ना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूट्रोफिकेशन वह प्रक्रिया है जिसमें एक जल निकाय, जैसे झील, पोषक तत्वों (विशेष रूप से नाइट्रेट और फॉस्फेट) से अत्यधिक समृद्ध हो जाता है, जिससे शैवाल की अत्यधिक वृद्धि होती है।"
    },
    {
        question: "हडसन की खाड़ी किस देश में स्थित है?",
        answers: shuffle([
            { text: "रूस", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "कनाडा", correct: true },
            { text: "ग्रीनलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हडसन की खाड़ी उत्तरपूर्वी कनाडा में एक विशाल अंतर्देशीय समुद्र है।"
    },
    {
        question: "बाब-अल-मंदेब जलसंधि किन दो जल निकायों को जोड़ती है?",
        answers: shuffle([
            { text: "फारस की खाड़ी और ओमान की खाड़ी", correct: false },
            { text: "लाल सागर और अदन की खाड़ी (अरब सागर)", correct: true },
            { text: "अटलांटिक महासागर और भूमध्य सागर", correct: false },
            { text: "काला सागर और एजियन सागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाब-अल-मंदेब जलसंधि लाल सागर को अदन की खाड़ी से जोड़ती है।"
    },
    {
        question: "किस प्रकार के ज्वार में उच्च ज्वार और निम्न ज्वार की ऊँचाइयाँ भिन्न होती हैं?",
        answers: shuffle([
            { text: "दैनिक ज्वार", correct: false },
            { text: "अर्ध-दैनिक ज्वार", correct: false },
            { text: "मिश्रित ज्वार", correct: true },
            { text: "वृहत ज्वार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिश्रित ज्वार पैटर्न में एक दिन में दो उच्च ज्वार और दो निम्न ज्वार होते हैं, लेकिन लगातार आने वाले ज्वारों की ऊँचाइयों में अंतर होता है।"
    },
    {
        question: "जलीय चक्र को संचालित करने वाली मुख्य ऊर्जा क्या है?",
        answers: shuffle([
            { text: "भूतापीय ऊर्जा", correct: false },
            { text: "गुरुत्वाकर्षण ऊर्जा", correct: false },
            { text: "सौर ऊर्जा", correct: true },
            { text: "ज्वारीय ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य की ऊर्जा पानी के वाष्पीकरण का कारण बनती है, जो जल चक्र को चलाने वाली प्राथमिक शक्ति है।"
    },
    {
        question: "दुनिया की सबसे लंबी तटरेखा वाला देश कौन सा है?",
        answers: shuffle([
            { text: "रूस", correct: false },
            { text: "इंडोनेशिया", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "कनाडा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कनाडा की तटरेखा दुनिया में सबसे लंबी है, जो तीन महासागरों - अटलांटिक, प्रशांत और आर्कटिक - से लगती है।"
    },
    {
        question: "नदी के मुहाने पर खारे पानी और मीठे पानी के मिश्रण वाले क्षेत्र को क्या कहते हैं?",
        answers: shuffle([
            { text: "लैगून", correct: false },
            { text: "डेल्टा", correct: false },
            { text: "ज्वारनदमुख (Estuary)", correct: true },
            { text: "खाड़ी (Gulf)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ज्वारनदमुख एक आंशिक रूप से संलग्न तटीय जल निकाय है जहाँ नदियों का मीठा पानी समुद्र के खारे पानी से मिलता है।"
    },
    {
        question: "'डाउन्स' नामक घास के मैदानों में बहने वाली प्रमुख नदी प्रणाली कौन सी है?",
        answers: shuffle([
            { text: "नील नदी", correct: false },
            { text: "अमेज़ॅन नदी", correct: false },
            { text: "मर्रे-डार्लिंग नदी", correct: true },
            { text: "मिसिसिपी-मिसौरी नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डाउन्स ऑस्ट्रेलिया के समशीतोष्ण घास के मैदान हैं, और मर्रे-डार्लिंग नदी प्रणाली इस क्षेत्र की प्रमुख नदी प्रणाली है।"
    },
    {
        question: "विश्व का सबसे बड़ा अंतर्देशीय जल निकाय (Inland body of water) कौन सा है?",
        answers: shuffle([
            { text: "सुपीरियर झील", correct: false },
            { text: "अरल सागर", correct: false },
            { text: "कैस्पियन सागर", correct: true },
            { text: "बैकाल झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैस्पियन सागर अपने विशाल आकार के कारण दुनिया का सबसे बड़ा अंतर्देशीय जल निकाय है, जिसे झील और समुद्र दोनों माना जाता है।"
    },
    {
        question: "महासागरीय नितल (Ocean Floor) का सबसे विस्तृत भाग कौन सा है?",
        answers: shuffle([
            { text: "महाद्वीपीय मग्नतट", correct: false },
            { text: "महाद्वीपीय ढाल", correct: false },
            { text: "गहन सागरीय मैदान (Abyssal Plain)", correct: true },
            { text: "महासागरीय गर्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गहन सागरीय मैदान महासागरीय नितल का समतल और विस्तृत क्षेत्र है, जो कुल क्षेत्रफल का लगभग 40% कवर करता है।"
    },
    {
        question: "'ब्लैक सी' (काला सागर) के नाम का कारण क्या माना जाता है?",
        answers: shuffle([
            { text: "इसके पानी का रंग काला है", correct: false },
            { text: "सर्दियों में घना कोहरा", correct: false },
            { text: "उच्च हाइड्रोजन सल्फाइड की उपस्थिति से धातु का काला पड़ना", correct: true },
            { text: "इसमें तेल के बड़े भंडार हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काला सागर की गहरी परतों में ऑक्सीजन की कमी और हाइड्रोजन सल्फाइड की अधिकता होती है, जो इसमें गिरने वाली धातु की वस्तुओं को काला कर देती है, इसी से इसका नाम पड़ा है।"
    },
    {
        question: "बेंगुएला धारा किस महासागर की एक ठंडी धारा है?",
        answers: shuffle([
            { text: "दक्षिणी प्रशांत महासागर", correct: false },
            { text: "उत्तरी अटलांटिक महासागर", correct: false },
            { text: "हिंद महासागर", correct: false },
            { text: "दक्षिणी अटलांटिक महासागर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बेंगुएला धारा अफ्रीका के पश्चिमी तट के साथ उत्तर की ओर बहने वाली दक्षिणी अटलांटिक महासागर की एक ठंडी, चौड़ी धारा है।"
    },
    {
        question: "जब वर्षा का जल जमीन में रिसता है, तो उस प्रक्रिया को क्या कहते हैं?",
        answers: shuffle([
            { text: "अपवाह (Runoff)", correct: false },
            { text: "संघनन (Condensation)", correct: false },
            { text: "अंतःस्यंदन (Infiltration)", correct: true },
            { text: "वाष्पीकरण (Evaporation)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंतःस्यंदन वह प्रक्रिया है जिसके द्वारा पानी सतह से भूमि के अंदर प्रवेश करता है।"
    },
    {
        question: "'फोर्ड' (Fjord) तट का निर्माण कैसे होता है?",
        answers: shuffle([
            { text: "नदी के कटाव से", correct: false },
            { text: "हिमनद द्वारा गहरी की गई घाटी के जलमग्न होने से", correct: true },
            { text: "ज्वालामुखी गतिविधि से", correct: false },
            { text: "प्रवाल भित्तियों के विकास से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फोर्ड एक लंबी, संकरी, गहरी समुद्री खाड़ी होती है जिसका निर्माण तब होता है जब कोई हिमनद घाटी समुद्र के पानी से भर जाती है।"
    },
    {
        question: "आयतन की दृष्टि से विश्व की सबसे बड़ी नदी कौन सी है?",
        answers: shuffle([
            { text: "नील नदी", correct: false },
            { text: "कांगो नदी", correct: false },
            { text: "यांग्त्ज़ी नदी", correct: false },
            { text: "अमेज़ॅन नदी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमेज़ॅन नदी में पानी के बहाव (आयतन) की मात्रा दुनिया की किसी भी अन्य नदी से कहीं अधिक है।"
    },
    {
        question: "'सैंडविच ट्रेंच' किस महासागर में स्थित है?",
        answers: shuffle([
            { text: "हिंद महासागर", correct: false },
            { text: "दक्षिणी अटलांटिक महासागर", correct: true },
            { text: "उत्तरी प्रशांत महासागर", correct: false },
            { text: "आर्कटिक महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्षिण सैंडविच ट्रेंच दक्षिणी अटलांटिक महासागर में स्थित एक गहरा चापाकार गर्त है।"
    },
    {
        question: "भारत में मीठे पानी की सबसे बड़ी झील कौन सी है?",
        answers: shuffle([
            { text: "डल झील", correct: false },
            { text: "वुलर झील", correct: true },
            { text: "लोकटक झील", correct: false },
            { text: "नैनीताल झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जम्मू और कश्मीर में स्थित वुलर झील भारत की सबसे बड़ी ताजे पानी की झील है।"
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