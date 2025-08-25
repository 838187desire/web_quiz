const questions = [
    {
        topHeading: "विश्व के प्रमुख रेगिस्तानों पर आधारित बहुविकल्पीय प्रश्न (MCQs) part 1  (quiz_no. 76)."
    },
    {
        question: "विश्व का सबसे बड़ा रेगिस्तान कौन सा है?",
        answers: shuffle([
            { text: "गोबी रेगिस्तान", correct: false },
            { text: "कालाहारी रेगिस्तान", correct: false },
            { text: "सहारा रेगिस्तान", correct: true },
            { text: "अटाकामा रेगिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सहारा रेगिस्तान अफ्रीका में स्थित है और यह विश्व का सबसे बड़ा गर्म रेगिस्तान है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका क्षेत्रफल 92 लाख वर्ग किमी से भी अधिक है।"
    },
    {
        question: "गोबी रेगिस्तान किन दो देशों में फैला हुआ है?",
        answers: shuffle([
            { text: "भारत और पाकिस्तान", correct: false },
            { text: "चीन और मंगोलिया", correct: true },
            { text: "रूस और कजाकिस्तान", correct: false },
            { text: "ईरान और इराक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोबी रेगिस्तान चीन के उत्तरी भाग और मंगोलिया के दक्षिणी भाग में फैला हुआ है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एशिया का सबसे बड़ा रेगिस्तान है।"
    },
    {
        question: "अटाकामा रेगिस्तान किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "उत्तरी अमेरिका", correct: false },
            { text: "दक्षिण अमेरिका", correct: true },
            { text: "अफ्रीका", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अटाकामा रेगिस्तान दक्षिणी अमेरिका के चिली और पेरू देशों में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे विश्व का सबसे शुष्क रेगिस्तान माना जाता है।"
    },
    {
        question: "कालाहारी रेगिस्तान किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "अफ्रीका", correct: true },
            { text: "यूरोप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालाहारी रेगिस्तान अफ्रीका के दक्षिणी भाग में स्थित है, जिसमें बोत्सवाना, नामीबिया और दक्षिण अफ्रीका जैसे देशों के हिस्से शामिल हैं।"
    },
    {
        question: "ग्रेट विक्टोरिया रेगिस्तान किस देश में स्थित है?",
        answers: shuffle([
            { text: "अमेरिका", correct: false },
            { text: "ऑस्ट्रेलिया", correct: true },
            { text: "ब्राजील", correct: false },
            { text: "चीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेट विक्टोरिया रेगिस्तान ऑस्ट्रेलिया का सबसे बड़ा रेगिस्तान है, जो पश्चिमी ऑस्ट्रेलिया और दक्षिणी ऑस्ट्रेलिया में फैला हुआ है।"
    },
    {
        question: "थार रेगिस्तान किस देश में स्थित है?",
        answers: shuffle([
            { text: "भारत और पाकिस्तान", correct: true },
            { text: "चीन और भारत", correct: false },
            { text: "नेपाल और भूटान", correct: false },
            { text: "अफगानिस्तान और पाकिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थार रेगिस्तान, जिसे महान भारतीय रेगिस्तान भी कहा जाता है, भारत के राजस्थान और पाकिस्तान के पंजाब और सिंध प्रांतों में फैला हुआ है।"
    },
    {
        question: "अरब रेगिस्तान किन देशों में स्थित है?",
        answers: shuffle([
            { text: "ईरान, इराक, तुर्की", correct: false },
            { text: "सऊदी अरब, यमन, ओमान", correct: true },
            { text: "मिस्र, लीबिया, सूडान", correct: false },
            { text: "अल्जीरिया, माली, नाइजर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरब रेगिस्तान एक विशाल रेगिस्तान है जो अरब प्रायद्वीप के अधिकांश हिस्से को कवर करता है, जिसमें सऊदी अरब, यमन, ओमान, कुवैत और यूएई जैसे देश शामिल हैं।"
    },
    {
        question: "मोजेव रेगिस्तान किस देश में स्थित है?",
        answers: shuffle([
            { text: "मैक्सिको", correct: false },
            { text: "अमेरिका", correct: true },
            { text: "कनाडा", correct: false },
            { text: "ब्राजील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोजेव रेगिस्तान संयुक्त राज्य अमेरिका के कैलिफोर्निया, नेवादा, एरिजोना और यूटा राज्यों में स्थित है।"
    },
    {
        question: "'ग्रेट बेसिन रेगिस्तान' किस देश में स्थित है?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "अमेरिका", correct: true },
            { text: "कनाडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेट बेसिन रेगिस्तान संयुक्त राज्य अमेरिका के पश्चिमी हिस्से में स्थित एक ठंडा रेगिस्तान है।"
    },
    {
        question: "पेटागोनिया रेगिस्तान किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "उत्तरी अमेरिका", correct: false },
            { text: "दक्षिण अमेरिका", correct: true },
            { text: "अफ्रीका", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेटागोनिया रेगिस्तान अर्जेंटीना और चिली के दक्षिणी हिस्सों में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह दक्षिण अमेरिका का सबसे बड़ा रेगिस्तान है।"
    },
    {
        question: "सहारा रेगिस्तान किस प्रकार का रेगिस्तान है?",
        answers: shuffle([
            { text: "उष्णकटिबंधीय", correct: false },
            { text: "शीतोष्ण", correct: false },
            { text: "उपोष्णकटिबंधीय", correct: true },
            { text: "ध्रुवीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सहारा रेगिस्तान कर्क रेखा के आसपास स्थित एक उपोष्णकटिबंधीय रेगिस्तान है, जहाँ पूरे वर्ष उच्च तापमान रहता है।"
    },
    {
        question: "सिम्पसन रेगिस्तान किस देश में स्थित है?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "ऑस्ट्रेलिया", correct: true },
            { text: "ब्राजील", correct: false },
            { text: "अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिम्पसन रेगिस्तान ऑस्ट्रेलिया के केंद्रीय हिस्से में स्थित है और यह अपनी लाल रेत के टीलों के लिए प्रसिद्ध है।"
    },
    {
        question: "'दनाकिल रेगिस्तान' किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "अफ्रीका", correct: true },
            { text: "यूरोप", correct: false },
            { text: "दक्षिण अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दनाकिल रेगिस्तान अफ्रीका में स्थित है, जिसमें इथियोपिया, एरिट्रिया और जिबूती के हिस्से शामिल हैं।"
    },
    {
        question: "कराकुम रेगिस्तान किस देश में स्थित है?",
        answers: shuffle([
            { text: "तुर्कमेनिस्तान", correct: true },
            { text: "कजाकिस्तान", correct: false },
            { text: "उज्बेकिस्तान", correct: false },
            { text: "ईरान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कराकुम रेगिस्तान मध्य एशिया में स्थित है और इसका अधिकांश हिस्सा तुर्कमेनिस्तान में है।"
    },
    {
        question: "'तकलामकान रेगिस्तान' किस देश में स्थित है?",
        answers: shuffle([
            { text: "मंगोलिया", correct: false },
            { text: "चीन", correct: true },
            { text: "कजाकिस्तान", correct: false },
            { text: "रूस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तकलामकान रेगिस्तान चीन के झिंजियांग प्रांत में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह दुनिया के सबसे बड़े रेतीले रेगिस्तानों में से एक है।"
    },
    {
        question: "'दस्त-ए-लुत' रेगिस्तान किस देश में स्थित है?",
        answers: shuffle([
            { text: "ईरान", correct: true },
            { text: "इराक", correct: false },
            { text: "अफगानिस्तान", correct: false },
            { text: "पाकिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दस्त-ए-लुत रेगिस्तान ईरान के दक्षिण-पूर्वी भाग में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे दुनिया के सबसे गर्म स्थानों में से एक माना जाता है।"
    },
    {
        question: "'नामद रेगिस्तान' (Namib Desert) किस देश में स्थित है?",
        answers: shuffle([
            { text: "बोत्सवाना", correct: false },
            { text: "नामीबिया", correct: true },
            { text: "दक्षिण अफ्रीका", correct: false },
            { text: "अंगोला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नामिब रेगिस्तान नामीबिया में स्थित है और यह दुनिया के सबसे पुराने रेगिस्तानों में से एक है।"
    },
    {
        question: "गोबी रेगिस्तान किस प्रकार का रेगिस्तान है?",
        answers: shuffle([
            { text: "गर्म रेगिस्तान", correct: false },
            { text: "ठंडा रेगिस्तान", correct: true },
            { text: "वर्षावन", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोबी रेगिस्तान एक ठंडा रेगिस्तान है, जहाँ गर्मियों में तापमान अधिक हो सकता है, लेकिन सर्दियों में यह अत्यधिक ठंडा हो जाता है।"
    },
    {
        question: "सहारा रेगिस्तान को कौन सी पर्वतमाला दो भागों में विभाजित करती है?",
        answers: shuffle([
            { text: "एटलस पर्वतमाला", correct: true },
            { text: "रॉकी पर्वतमाला", correct: false },
            { text: "एंडीज़ पर्वतमाला", correct: false },
            { text: "हिमालय पर्वतमाला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सहारा रेगिस्तान एटलस पर्वतमाला द्वारा दो मुख्य भागों में विभाजित होता है।"
    },
    {
        question: "ग्रेट विक्टोरिया रेगिस्तान किस देश में स्थित है?",
        answers: shuffle([
            { text: "अमेरिका", correct: false },
            { text: "ऑस्ट्रेलिया", correct: true },
            { text: "ब्राजील", correct: false },
            { text: "चीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेट विक्टोरिया रेगिस्तान ऑस्ट्रेलिया का सबसे बड़ा रेगिस्तान है, जो पश्चिमी ऑस्ट्रेलिया और दक्षिणी ऑस्ट्रेलिया में फैला हुआ है।"
    },
    {
        question: "'दस्त-ए-कविर' रेगिस्तान किस देश में स्थित है?",
        answers: shuffle([
            { text: "सऊदी अरब", correct: false },
            { text: "इराक", correct: false },
            { text: "ईरान", correct: true },
            { text: "पाकिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दस्त-ए-कविर रेगिस्तान ईरान में स्थित है, जो दस्त-ए-लुत के उत्तर में है।"
    },
    {
        question: "'सोनोरन रेगिस्तान' किन देशों में फैला हुआ है?",
        answers: shuffle([
            { text: "अमेरिका और कनाडा", correct: false },
            { text: "अमेरिका और मैक्सिको", correct: true },
            { text: "कनाडा और मैक्सिको", correct: false },
            { text: "अमेरिका और ब्राजील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोनोरन रेगिस्तान संयुक्त राज्य अमेरिका के एरिजोना और कैलिफोर्निया राज्यों और मैक्सिको के सोनारा और बाजा कैलिफोर्निया राज्यों में फैला हुआ है।"
    },
    {
        question: "दक्षिण अफ्रीका के कालाहारी रेगिस्तान के पास कौन सी जनजाति रहती है?",
        answers: shuffle([
            { text: "बुशमैन", correct: true },
            { text: "मसाई", correct: false },
            { text: "पिग्मी", correct: false },
            { text: "जुलू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुशमैन जनजाति कालाहारी रेगिस्तान के क्षेत्र में निवास करती है।"
    },
    {
        question: "'किज़िलकुम रेगिस्तान' किन देशों में फैला हुआ है?",
        answers: shuffle([
            { text: "कजाकिस्तान, तुर्कमेनिस्तान, उज्बेकिस्तान", correct: true },
            { text: "चीन, मंगोलिया", correct: false },
            { text: "रूस, कजाकिस्तान", correct: false },
            { text: "ईरान, अफगानिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किज़िलकुम रेगिस्तान मध्य एशिया में स्थित है और यह कजाकिस्तान, तुर्कमेनिस्तान और उज्बेकिस्तान जैसे देशों में फैला हुआ है।"
    },
    {
        question: "किस रेगिस्तान को 'मृत्यु का सागर' के नाम से जाना जाता है?",
        answers: shuffle([
            { text: "सहारा रेगिस्तान", correct: false },
            { text: "गोबी रेगिस्तान", correct: false },
            { text: "तकलामकान रेगिस्तान", correct: true },
            { text: "अटाकामा रेगिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तकलामकान रेगिस्तान का अर्थ 'मृत्यु का सागर' या 'जो अंदर जाता है, वह बाहर नहीं आता' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह चीन में स्थित एक विशाल रेतीला रेगिस्तान है।"
    },
    {
        question: "विश्व का सबसे बड़ा ठंडा रेगिस्तान कौन सा है?",
        answers: shuffle([
            { text: "सहारा रेगिस्तान", correct: false },
            { text: "अंटार्कटिका रेगिस्तान", correct: true },
            { text: "गोबी रेगिस्तान", correct: false },
            { text: "ग्रेट बेसिन रेगिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंटार्कटिका रेगिस्तान दुनिया का सबसे बड़ा रेगिस्तान है, लेकिन यह एक ध्रुवीय (ठंडा) रेगिस्तान है, जो बर्फ से ढका हुआ है।"
    },
    {
        question: "दस्त-ए-कविर और दस्त-ए-लुत रेगिस्तान किस देश में स्थित हैं?",
        answers: shuffle([
            { text: "ईरान", correct: true },
            { text: "इराक", correct: false },
            { text: "सऊदी अरब", correct: false },
            { text: "तुर्की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दस्त-ए-कविर (ग्रेट साल्ट रेगिस्तान) और दस्त-ए-लुत (खालीपन का रेगिस्तान) दोनों ही रेगिस्तान ईरान में स्थित हैं।"
    },
    {
        question: "चिली में स्थित अटाकामा रेगिस्तान में कौन सा खनिज प्रचुर मात्रा में पाया जाता है?",
        answers: shuffle([
            { text: "सोना", correct: false },
            { text: "चांदी", correct: false },
            { text: "नाइट्रेट", correct: true },
            { text: "कोयला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अटाकामा रेगिस्तान अपने विशाल नाइट्रेट भंडारों के लिए प्रसिद्ध है।"
    },
    {
        question: "'काराकुम रेगिस्तान' का क्या अर्थ है?",
        answers: shuffle([
            { text: "लाल रेत", correct: false },
            { text: "काली रेत", correct: true },
            { text: "सफेद रेत", correct: false },
            { text: "पीली रेत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'काराकुम' शब्द का तुर्की में अर्थ 'काली रेत' होता है।"
    },
    {
        question: "सहारा रेगिस्तान में किस प्रकार की वनस्पति पाई जाती है?",
        answers: shuffle([
            { text: "घने जंगल", correct: false },
            { text: "घास के मैदान", correct: false },
            { text: "कैक्टस और कांटेदार झाड़ियाँ", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सहारा रेगिस्तान में अत्यधिक शुष्क जलवायु के कारण मुख्य रूप से कैक्टस और अन्य कांटेदार झाड़ियाँ पाई जाती हैं।"
    },
    {
        question: "'नाफूद रेगिस्तान' किस देश में स्थित है?",
        answers: shuffle([
            { text: "सऊदी अरब", correct: true },
            { text: "यमन", correct: false },
            { text: "ओमान", correct: false },
            { text: "कतर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नाफूद रेगिस्तान सऊदी अरब में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अरब रेगिस्तान का एक हिस्सा है।"
    },
    {
        question: "थार रेगिस्तान में पाई जाने वाली सबसे महत्वपूर्ण नदी कौन सी है?",
        answers: shuffle([
            { text: "गंगा नदी", correct: false },
            { text: "यमुना नदी", correct: false },
            { text: "लूनी नदी", correct: true },
            { text: "सतलुज नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लूनी नदी थार रेगिस्तान की सबसे महत्वपूर्ण नदी है, जो कच्छ के रण में विलुप्त हो जाती है।"
    },
    {
        question: "अंटार्कटिका रेगिस्तान किस प्रकार का रेगिस्तान है?",
        answers: shuffle([
            { text: "गर्म रेगिस्तान", correct: false },
            { text: "ठंडा रेगिस्तान", correct: true },
            { text: "तटीय रेगिस्तान", correct: false },
            { text: "उपोष्णकटिबंधीय रेगिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंटार्कटिका ध्रुवीय क्षेत्र में स्थित है, इसलिए यह एक ठंडा रेगिस्तान है जो बर्फ से ढका हुआ है।"
    },
    {
        question: "'सोनोरन रेगिस्तान' किस प्रकार का रेगिस्तान है?",
        answers: shuffle([
            { text: "ध्रुवीय रेगिस्तान", correct: false },
            { text: "ठंडा रेगिस्तान", correct: false },
            { text: "उष्णकटिबंधीय रेगिस्तान", correct: false },
            { text: "उपोष्णकटिबंधीय रेगिस्तान", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोनोरन रेगिस्तान एक उपोष्णकटिबंधीय रेगिस्तान है।"
    },
    {
        question: "थार रेगिस्तान किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "अफ्रीका", correct: false },
            { text: "एशिया", correct: true },
            { text: "यूरोप", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थार रेगिस्तान, जिसे महान भारतीय रेगिस्तान भी कहा जाता है, एशिया में स्थित है।"
    },
    {
        question: "'सिम्पसन रेगिस्तान' को और किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "लाल रेत का रेगिस्तान", correct: true },
            { text: "सफेद रेत का रेगिस्तान", correct: false },
            { text: "नीला रेगिस्तान", correct: false },
            { text: "काला रेगिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिम्पसन रेगिस्तान अपनी लाल रेत के टीलों के लिए प्रसिद्ध है, इसलिए इसे \"लाल रेत का रेगिस्तान\" भी कहा जाता है।"
    },
    {
        question: "'पेटागोनिया रेगिस्तान' किन पर्वतमालाओं के बीच स्थित है?",
        answers: shuffle([
            { text: "एंडीज़ और रॉकीज़", correct: false },
            { text: "हिमालय और आल्प्स", correct: false },
            { text: "एंडीज़ और अटलांटिक महासागर", correct: true },
            { text: "यूराल और एंडीज़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेटागोनिया रेगिस्तान एंडीज़ पर्वतमाला के पूर्व में स्थित है, जो अटलांटिक महासागर तक फैला हुआ है।"
    },
    {
        question: "'मोजेव रेगिस्तान' का सबसे प्रसिद्ध स्थान क्या है?",
        answers: shuffle([
            { text: "ग्रैंड कैनियन", correct: false },
            { text: "डेथ वैली", correct: true },
            { text: "येलोस्टोन नेशनल पार्क", correct: false },
            { text: "ग्रेट साल्ट लेक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डेथ वैली, जो उत्तरी अमेरिका का सबसे निचला और सबसे गर्म स्थान है, मोजेव रेगिस्तान के भीतर स्थित है।"
    },
    {
        question: "'कालाहारी रेगिस्तान' में कौन सी नदी बहती है?",
        answers: shuffle([
            { text: "ऑरेंज नदी", correct: false },
            { text: "लिम्पोपो नदी", correct: false },
            { text: "ज़ांज़ी नदी", correct: false },
            { text: "ओकावांगो नदी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओकावांगो नदी कालाहारी रेगिस्तान के बीच में ओकावांगो डेल्टा बनाती है।"
    },
    {
        question: "'गोबी रेगिस्तान' किस पर्वतमाला के उत्तर में स्थित है?",
        answers: shuffle([
            { text: "हिमालय", correct: false },
            { text: "अल्ताई पर्वत", correct: true },
            { text: "यूराल पर्वत", correct: false },
            { text: "काराकोरम पर्वत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोबी रेगिस्तान अल्ताई पर्वत और मंगोलियाई स्टेपी के दक्षिण में स्थित है।"
    },
    {
        question: "'दस्त-ए-लुत' रेगिस्तान का क्या अर्थ है?",
        answers: shuffle([
            { text: "पानी की जगह", correct: false },
            { text: "नमक की जगह", correct: false },
            { text: "खालीपन की जगह", correct: true },
            { text: "काली रेत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दस्त-ए-लुत' का फारसी में अर्थ 'खालीपन की जगह' या 'निर्जन रेगिस्तान' होता है।"
    },
    {
        question: "ऑस्ट्रेलिया में किस प्रकार के रेगिस्तान पाए जाते हैं?",
        answers: shuffle([
            { text: "गर्म रेगिस्तान", correct: true },
            { text: "ठंडा रेगिस्तान", correct: false },
            { text: "ध्रुवीय रेगिस्तान", correct: false },
            { text: "दोनों (a) और (b)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑस्ट्रेलिया के अधिकांश रेगिस्तान गर्म रेगिस्तान हैं, जैसे ग्रेट विक्टोरिया, ग्रेट सैंडी और सिम्पसन रेगिस्तान।"
    },
    {
        question: "सहारा रेगिस्तान के दक्षिणी किनारे पर स्थित घास के मैदानों को क्या कहा जाता है?",
        answers: shuffle([
            { text: "सवाना", correct: true },
            { text: "प्रेयरी", correct: false },
            { text: "स्टेपी", correct: false },
            { text: "टुंड्रा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सहारा रेगिस्तान के दक्षिणी किनारे पर स्थित घास के मैदानों को 'सवाना' कहा जाता है।"
    },
    {
        question: "'क्युज़िलकुम रेगिस्तान' किस नदी के उत्तर में स्थित है?",
        answers: shuffle([
            { text: "आमू दरिया", correct: true },
            { text: "सिर दरिया", correct: false },
            { text: "वोल्गा नदी", correct: false },
            { text: "यूरल नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्युज़िलकुम रेगिस्तान आमू दरिया नदी के उत्तर में स्थित है।"
    },
    {
        question: "'काराकुम रेगिस्तान' किस सागर के पूर्व में स्थित है?",
        answers: shuffle([
            { text: "काला सागर", correct: false },
            { text: "कैस्पियन सागर", correct: true },
            { text: "लाल सागर", correct: false },
            { text: "भूमध्य सागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काराकुम रेगिस्तान कैस्पियन सागर के पूर्व में स्थित है।"
    },
    {
        question: "थार रेगिस्तान में पाई जाने वाली सबसे महत्वपूर्ण नदी कौन सी है?",
        answers: shuffle([
            { text: "गंगा नदी", correct: false },
            { text: "यमुना नदी", correct: false },
            { text: "लूनी नदी", correct: true },
            { text: "सतलुज नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लूनी नदी थार रेगिस्तान की सबसे महत्वपूर्ण नदी है, जो कच्छ के रण में विलुप्त हो जाती है।"
    },
    {
        question: "'पेटागोनिया रेगिस्तान' का निर्माण किस कारण से हुआ है?",
        answers: shuffle([
            { text: "महासागरीय धाराओं के कारण", correct: false },
            { text: "बारिश की छाया (Rain Shadow) प्रभाव के कारण", correct: true },
            { text: "ज्वालामुखी विस्फोटों के कारण", correct: false },
            { text: "हिमनदी के कटाव के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेटागोनिया रेगिस्तान एंडीज पर्वतमाला की बारिश की छाया में स्थित है, जहाँ हवाएं नमी खो देती हैं।"
    },
    {
        question: "'गोबी रेगिस्तान' का क्या अर्थ है?",
        answers: shuffle([
            { text: "पानी की जगह", correct: false },
            { text: "सूखा स्थान", correct: true },
            { text: "रेगिस्तानी चट्टान", correct: false },
            { text: "ठंडा रेगिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गोबी' शब्द का मंगोलियाई में अर्थ 'सूखा स्थान' या 'अर्ध-रेगिस्तानी' होता है।"
    },
    {
        question: "'नामीब रेगिस्तान' किस महासागर के तट पर स्थित है?",
        answers: shuffle([
            { text: "हिंद महासागर", correct: false },
            { text: "अटलांटिक महासागर", correct: true },
            { text: "प्रशांत महासागर", correct: false },
            { text: "आर्कटिक महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नामिब रेगिस्तान अटलांटिक महासागर के तट पर स्थित है।"
    },
    {
        question: "'ग्रेट विक्टोरिया रेगिस्तान' का नाम किस शासिका के नाम पर रखा गया है?",
        answers: shuffle([
            { text: "महारानी एलिजाबेथ", correct: false },
            { text: "महारानी विक्टोरिया", correct: true },
            { text: "महारानी मैरी", correct: false },
            { text: "महारानी एनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेट विक्टोरिया रेगिस्तान का नाम ब्रिटिश महारानी विक्टोरिया के नाम पर रखा गया था।"
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