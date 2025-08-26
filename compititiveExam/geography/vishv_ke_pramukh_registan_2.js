const questions = [
    {
        topHeading: "विश्व के प्रमुख रेगिस्तानों पर आधारित बहुविकल्पीय प्रश्न (MCQs) part 2  (quiz_no. 77)."
    },
    {
        question: "किस रेगिस्तान में 'आयरनवुड' (Ironwood) और 'सागुआरो' (Saguaro) कैक्टस पाए जाते हैं?",
        answers: shuffle([
            { text: "सहारा रेगिस्तान", correct: false },
            { text: "सोनोरन रेगिस्तान", correct: true },
            { text: "गोबी रेगिस्तान", correct: false },
            { text: "थार रेगिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोनोरन रेगिस्तान अपनी अनूठी वनस्पति के लिए प्रसिद्ध है, जिसमें आयरनवुड के पेड़ और विशाल सागुआरो कैक्टस शामिल हैं।"
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
        question: "'ग्रेट सैंडी रेगिस्तान' किस देश में स्थित है?",
        answers: shuffle([
            { text: "अमेरिका", correct: false },
            { text: "ऑस्ट्रेलिया", correct: true },
            { text: "चीन", correct: false },
            { text: "भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेट सैंडी रेगिस्तान पश्चिमी ऑस्ट्रेलिया में स्थित है और यह ऑस्ट्रेलिया का दूसरा सबसे बड़ा रेगिस्तान है।"
    },
    {
        question: "'दनाकिल रेगिस्तान' की प्रमुख भू-आकृति क्या है?",
        answers: shuffle([
            { text: "रेत के टीले", correct: false },
            { text: "नमक के मैदान", correct: true },
            { text: "लावा के मैदान", correct: false },
            { text: "विशाल चट्टानें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दनाकिल रेगिस्तान अपने नमक के विशाल मैदानों और सक्रिय ज्वालामुखियों के लिए प्रसिद्ध है।"
    },
    {
        question: "थार रेगिस्तान किस प्रकार का रेगिस्तान है?",
        answers: shuffle([
            { text: "ध्रुवीय रेगिस्तान", correct: false },
            { text: "ठंडा रेगिस्तान", correct: false },
            { text: "उपोष्णकटिबंधीय रेगिस्तान", correct: true },
            { text: "महाद्वीपीय रेगिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थार रेगिस्तान भारत और पाकिस्तान में स्थित एक उपोष्णकटिबंधीय रेगिस्तान है।"
    },
    {
        question: "'सोनोरन रेगिस्तान' किसलिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "अपनी जैव विविधता", correct: true },
            { text: "अपने सोने के भंडार", correct: false },
            { text: "अपनी शुष्क जलवायु", correct: false },
            { text: "अपनी ठंडी हवाएँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोनोरन रेगिस्तान अपनी समृद्ध जैव विविधता के लिए जाना जाता है, जिसमें विभिन्न प्रकार के पौधे और जानवर पाए जाते हैं।"
    },
    {
        question: "सहारा रेगिस्तान में स्थित सबसे ऊँची चोटी कौन सी है?",
        answers: shuffle([
            { text: "माउंट एवरेस्ट", correct: false },
            { text: "माउंट कंबूल", correct: false },
            { text: "माउंट एमी कौसी", correct: true },
            { text: "माउंट अल्माज़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट एमी कौसी, जो चाड में स्थित है, सहारा रेगिस्तान की सबसे ऊँची चोटी है।"
    },
    {
        question: "'अटाकामा रेगिस्तान' किस पर्वतमाला के किनारे स्थित है?",
        answers: shuffle([
            { text: "एंडीज़ पर्वतमाला", correct: true },
            { text: "रॉकी पर्वतमाला", correct: false },
            { text: "हिमालय पर्वतमाला", correct: false },
            { text: "एटलस पर्वतमाला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अटाकामा रेगिस्तान एंडीज़ पर्वतमाला के पश्चिम में स्थित है।"
    },
    {
        question: "'ग्रेट बेसिन रेगिस्तान' का निर्माण किस प्रकार हुआ है?",
        answers: shuffle([
            { text: "ज्वालामुखी विस्फोट", correct: false },
            { text: "बारिश की छाया प्रभाव", correct: true },
            { text: "नदियों के कटाव", correct: false },
            { text: "भूगर्भीय उत्थान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेट बेसिन रेगिस्तान सिएरा नेवादा पर्वतमाला की बारिश की छाया में स्थित है, जिसके कारण यह सूखा है।"
    },
    {
        question: "'थार रेगिस्तान' में पाए जाने वाले 'ऊँट' किस नाम से जाने जाते हैं?",
        answers: shuffle([
            { text: "राजस्थानी ऊँट", correct: false },
            { text: "कच्छी ऊँट", correct: false },
            { text: "रेगिस्तानी ऊँट", correct: false },
            { text: "बीकानेरी ऊँट", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बीकानेरी ऊँट थार रेगिस्तान में पाए जाने वाले एक विशेष प्रकार के ऊँट हैं, जो अपनी शक्ति और सहनशीलता के लिए जाने जाते हैं।"
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
        question: "'गोबी रेगिस्तान' में किस प्रकार की मिट्टी पाई जाती है?",
        answers: shuffle([
            { text: "रेतीली मिट्टी", correct: false },
            { text: "काली मिट्टी", correct: false },
            { text: "बजरी और रेतीली मिट्टी", correct: true },
            { text: "लाल मिट्टी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोबी रेगिस्तान में बजरी और चट्टानें अधिक हैं, और यह एक रेतीला रेगिस्तान होने के बजाय एक बजरी रेगिस्तान है।"
    },
    {
        question: "'कालाहारी रेगिस्तान' में कौन सा खनिज प्रचुर मात्रा में पाया जाता है?",
        answers: shuffle([
            { text: "सोना", correct: false },
            { text: "हीरा", correct: true },
            { text: "कोयला", correct: false },
            { text: "बॉक्साइट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालाहारी रेगिस्तान के क्षेत्र में हीरे की खदानें पाई जाती हैं, जैसे बोत्सवाना में ओरापा खदान।"
    },
    {
        question: "'दस्त-ए-लुत' रेगिस्तान किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "यूरोप", correct: false },
            { text: "एशिया", correct: true },
            { text: "अफ्रीका", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दस्त-ए-लुत रेगिस्तान ईरान में स्थित है, जो एशिया महाद्वीप का हिस्सा है।"
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
        question: "विश्व थार रेगिस्तान किस प्रकार का रेगिस्तान है?",
        answers: shuffle([
            { text: "ध्रुवीय रेगिस्तान", correct: false },
            { text: "ठंडा रेगिस्तान", correct: false },
            { text: "उपोष्णकटिबंधीय रेगिस्तान", correct: true },
            { text: "महाद्वीपीय रेगिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थार रेगिस्तान भारत और पाकिस्तान में स्थित एक उपोष्णकटिबंधीय रेगिस्तान है।"
    },
    {
        question: "'नामद रेगिस्तान' किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "अफ्रीका", correct: true },
            { text: "दक्षिण अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नामद रेगिस्तान अफ्रीका के नामीबिया देश में स्थित है।"
    },
    {
        question: "'सिम्पसन रेगिस्तान' में कौन सी नदी बहती है?",
        answers: shuffle([
            { text: "मूर्रे नदी", correct: false },
            { text: "डार्लिंग नदी", correct: false },
            { text: "कूपर क्रीक", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिम्पसन रेगिस्तान के पास कूपर क्रीक नामक एक मौसमी नदी बहती है।"
    },
    {
        question: "'ग्रेट बेसिन रेगिस्तान' का सबसे निचला बिंदु क्या है?",
        answers: shuffle([
            { text: "बैडवॉटर बेसिन", correct: true },
            { text: "डेथ वैली", correct: false },
            { text: "साल्ट लेक सिटी", correct: false },
            { text: "लेक मीड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैडवॉटर बेसिन, जो डेथ वैली में स्थित है, ग्रेट बेसिन रेगिस्तान का सबसे निचला बिंदु है।"
    },
    {
        question: "'ऑस्ट्रेलियाई रेगिस्तान' में कौन सा जानवर नहीं पाया जाता है?",
        answers: shuffle([
            { text: "कंगारू", correct: false },
            { text: "ऊँट", correct: false },
            { text: "कोआला", correct: true },
            { text: "डिंगो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोआला मुख्य रूप से पूर्वी ऑस्ट्रेलिया के यूकेलिप्टस जंगलों में पाए जाते हैं, न कि रेगिस्तान में।"
    },
    {
        question: "'थार रेगिस्तान' में कौन सा पक्षी पाया जाता है?",
        answers: shuffle([
            { text: "ग्रेट इंडियन बस्टर्ड", correct: true },
            { text: "सारस क्रेन", correct: false },
            { text: "मोर", correct: false },
            { text: "साइबेरियन क्रेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेट इंडियन बस्टर्ड थार रेगिस्तान में पाया जाने वाला एक गंभीर रूप से लुप्तप्राय पक्षी है।"
    },
    {
        question: "'पेटागोनिया रेगिस्तान' में किस प्रकार की वनस्पति पाई जाती है?",
        answers: shuffle([
            { text: "घने जंगल", correct: false },
            { text: "कांटेदार झाड़ियाँ और घास", correct: true },
            { text: "सदाबहार वन", correct: false },
            { text: "वर्षावन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेटागोनिया रेगिस्तान में शुष्क और ठंडी जलवायु के कारण कांटेदार झाड़ियाँ और घास पाई जाती हैं।"
    },
    {
        question: "'सहारा रेगिस्तान' में पाए जाने वाले 'रेत के टीले' को क्या कहा जाता है?",
        answers: shuffle([
            { text: "एर्ग", correct: true },
            { text: "हमादा", correct: false },
            { text: "रेज", correct: false },
            { text: "वादी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सहारा रेगिस्तान में रेत के टीलों को 'एर्ग' कहा जाता है।"
    },
    {
        question: "'गोबी रेगिस्तान' के उत्तरी भाग में कौन सी पर्वतमाला है?",
        answers: shuffle([
            { text: "अल्ताई पर्वतमाला", correct: true },
            { text: "हिमालय पर्वतमाला", correct: false },
            { text: "काराकोरम पर्वतमाला", correct: false },
            { text: "कुनलुन पर्वतमाला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोबी रेगिस्तान के उत्तरी भाग में अल्ताई पर्वतमाला स्थित है।"
    },
    {
        question: "'कालाहारी रेगिस्तान' में कौन सा जानवर पाया जाता है?",
        answers: shuffle([
            { text: "ऊँट", correct: false },
            { text: "हाथी", correct: false },
            { text: "शेर", correct: false },
            { text: "मीराकैट (Meerkat)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालाहारी रेगिस्तान में मीराकैट, शेर और चीता जैसे कई जानवर पाए जाते हैं।"
    },
    {
        question: "पेटागोनिया रेगिस्तान किस महासागर के तट पर स्थित है?",
        answers: shuffle([
            { text: "प्रशांत महासागर", correct: false },
            { text: "अटलांटिक महासागर", correct: true },
            { text: "हिंद महासागर", correct: false },
            { text: "आर्कटिक महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेटागोनिया रेगिस्तान अटलांटिक महासागर के तट पर स्थित है।"
    },
    {
        question: "अटाकामा रेगिस्तान में स्थित सबसे प्रसिद्ध ज्वालामुखी कौन सा है?",
        answers: shuffle([
            { text: "ओजोस डेल सलाडो", correct: true },
            { text: "माउंट एवरेस्ट", correct: false },
            { text: "माउंट अल्माज़", correct: false },
            { text: "माउंट चिंबोरजो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओजोस डेल सलाडो, जो विश्व का सबसे ऊँचा सक्रिय ज्वालामुखी है, अटाकामा रेगिस्तान में स्थित है।"
    },
    {
        question: "काराकुम रेगिस्तान किस देश में स्थित है?",
        answers: shuffle([
            { text: "तुर्कमेनिस्तान", correct: true },
            { text: "कजाकिस्तान", correct: false },
            { text: "उज्बेकिस्तान", correct: false },
            { text: "चीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काराकुम रेगिस्तान का अधिकांश हिस्सा तुर्कमेनिस्तान में है।"
    },
    {
        question: "सहारा रेगिस्तान के पूर्वी हिस्से को क्या कहा जाता है?",
        answers: shuffle([
            { text: "लिबियाई रेगिस्तान", correct: false },
            { text: "नूबियाई रेगिस्तान", correct: true },
            { text: "सूडानी रेगिस्तान", correct: false },
            { text: "तनेज़रौफ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सहारा रेगिस्तान के पूर्वी हिस्से को नूबियाई रेगिस्तान कहा जाता है, जो मिस्र और सूडान में फैला हुआ है।"
    },
    {
        question: "ऑस्ट्रेलियाई रेगिस्तान में कौन सा जानवर नहीं पाया जाता है?",
        answers: shuffle([
            { text: "कंगारू", correct: false },
            { text: "ऊँट", correct: false },
            { text: "कोआला", correct: true },
            { text: "डिंगो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोआला मुख्य रूप से पूर्वी ऑस्ट्रेलिया के यूकेलिप्टस जंगलों में पाए जाते हैं, न कि रेगिस्तान में।"
    },
    {
        question: "दस्त-ए-लुत रेगिस्तान किस महासागर से दूर स्थित है?",
        answers: shuffle([
            { text: "हिंद महासागर", correct: true },
            { text: "प्रशांत महासागर", correct: false },
            { text: "अटलांटिक महासागर", correct: false },
            { text: "भूमध्य सागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दस्त-ए-लुत एक आंतरिक रेगिस्तान है, लेकिन यह हिंद महासागर से काफी दूर स्थित है।"
    },
    {
        question: "सिम्पसन रेगिस्तान किस देश में स्थित है?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "ऑस्ट्रेलिया", correct: true },
            { text: "अमेरिका", correct: false },
            { text: "ब्राजील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिम्पसन रेगिस्तान ऑस्ट्रेलिया के केंद्रीय हिस्से में स्थित है।"
    },
    {
        question: "थार रेगिस्तान में कौन सा खनिज प्रचुर मात्रा में पाया जाता है?",
        answers: shuffle([
            { text: "पेट्रोलियम", correct: false },
            { text: "कोयला", correct: false },
            { text: "जिप्सम और नमक", correct: true },
            { text: "सोना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थार रेगिस्तान में जिप्सम, नमक और अन्य खनिजों के भंडार पाए जाते हैं।"
    },
    {
        question: "गोबी रेगिस्तान में पाए जाने वाले जानवर कौन से हैं?",
        answers: shuffle([
            { text: "ऊँट", correct: false },
            { text: "जंगली गधे", correct: false },
            { text: "दोनों (a) और (b)", correct: true },
            { text: "शेर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोबी रेगिस्तान में जंगली ऊँट और जंगली गधे पाए जाते हैं।"
    },
    {
        question: "कालाहारी रेगिस्तान का अधिकांश हिस्सा किस देश में स्थित है?",
        answers: shuffle([
            { text: "नामीबिया", correct: false },
            { text: "दक्षिण अफ्रीका", correct: false },
            { text: "बोत्सवाना", correct: true },
            { text: "अंगोला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालाहारी रेगिस्तान का अधिकांश हिस्सा बोत्सवाना में स्थित है।"
    },
    {
        question: "सोनोरन रेगिस्तान किस पर्वतमाला से घिरा हुआ है?",
        answers: shuffle([
            { text: "सिएरा माद्रे", correct: true },
            { text: "रॉकीज", correct: false },
            { text: "एंडीज़", correct: false },
            { text: "एटलस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोनोरन रेगिस्तान मेक्सिको में सिएरा माद्रे पर्वतमाला के पास स्थित है।"
    },
    {
        question: "तकलामकान रेगिस्तान किस नदी के बेसिन में स्थित है?",
        answers: shuffle([
            { text: "तारिम नदी", correct: true },
            { text: "यांग्त्ज़ी नदी", correct: false },
            { text: "ह्वांग हो नदी", correct: false },
            { text: "मेकोंग नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तकलामकान रेगिस्तान तारिम नदी बेसिन में स्थित है।"
    },
    {
        question: "सहारा रेगिस्तान में पाए जाने वाले 'रेत के टीले' को क्या कहा जाता है?",
        answers: shuffle([
            { text: "एर्ग", correct: true },
            { text: "हमादा", correct: false },
            { text: "रेज", correct: false },
            { text: "वादी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सहारा रेगिस्तान में रेत के टीलों को 'एर्ग' कहा जाता है।"
    },
    {
        question: "सहारा रेगिस्तान के पश्चिमी हिस्से को क्या कहा जाता है?",
        answers: shuffle([
            { text: "पश्चिमी सहारा", correct: true },
            { text: "मोरक्को रेगिस्तान", correct: false },
            { text: "अल्जीरियाई रेगिस्तान", correct: false },
            { text: "तुनिसियाई रेगिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सहारा रेगिस्तान के पश्चिमी हिस्से को पश्चिमी सहारा कहा जाता है।"
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
        question: "ग्रेट विक्टोरिया रेगिस्तान में कौन सा जानवर पाया जाता है?",
        answers: shuffle([
            { text: "कंगारू", correct: false },
            { text: "ऊँट", correct: false },
            { text: "दोनों (a) और (b)", correct: true },
            { text: "शेर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेट विक्टोरिया रेगिस्तान में कंगारू और जंगली ऊँट पाए जाते हैं।"
    },
    {
        question: "पेटागोनिया रेगिस्तान किस देश में स्थित है?",
        answers: shuffle([
            { text: "चिली और पेरू", correct: false },
            { text: "अर्जेंटीना और चिली", correct: true },
            { text: "ब्राजील और अर्जेंटीना", correct: false },
            { text: "कोलंबिया और वेनेजुएला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेटागोनिया रेगिस्तान अर्जेंटीना के दक्षिणी भाग और चिली के कुछ हिस्सों में फैला हुआ है।"
    },
    {
        question: "अंटार्कटिका रेगिस्तान किसलिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "गर्म जलवायु", correct: false },
            { text: "ठंडी जलवायु", correct: false },
            { text: "बर्फ से ढकी भूमि", correct: false },
            { text: "दोनों (b) और (c)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंटार्कटिका दुनिया का सबसे ठंडा और बर्फ से ढका हुआ रेगिस्तान है।"
    },
    {
        question: "नामीब रेगिस्तान किस महासागर के तट पर स्थित है?",
        answers: shuffle([
            { text: "हिंद महासागर", correct: false },
            { text: "अटलांटिक महासागर", correct: true },
            { text: "प्रशांत महासागर", correct: false },
            { text: "दक्षिणी महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नामिब रेगिस्तान अटलांटिक महासागर के तट पर स्थित है।"
    },
    {
        question: "थार रेगिस्तान में पाए जाने वाले 'खेजड़ी' वृक्ष का क्या महत्व है?",
        answers: shuffle([
            { text: "इसका उपयोग दवा बनाने में होता है", correct: false },
            { text: "यह रेगिस्तान में पानी को संचित करता है", correct: false },
            { text: "यह स्थानीय लोगों के लिए भोजन और पशुओं के लिए चारा प्रदान करता है", correct: true },
            { text: "यह रेगिस्तान में हवा को शुद्ध करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खेजड़ी वृक्ष को 'राजस्थान का राज्य वृक्ष' कहा जाता है और यह अपनी बहुउपयोगिता के लिए जाना जाता है।"
    },
    {
        question: "थार रेगिस्तान किस प्रकार का रेगिस्तान है?",
        answers: shuffle([
            { text: "ध्रुवीय रेगिस्तान", correct: false },
            { text: "ठंडा रेगिस्तान", correct: false },
            { text: "उपोष्णकटिबंधीय रेगिस्तान", correct: true },
            { text: "महाद्वीपीय रेगिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थार रेगिस्तान भारत और पाकिस्तान में स्थित एक उपोष्णकटिबंधीय रेगिस्तान है।"
    },
    {
        question: "गोबी रेगिस्तान किस पर्वतमाला के दक्षिण में स्थित है?",
        answers: shuffle([
            { text: "अल्ताई पर्वतमाला", correct: true },
            { text: "हिमालय पर्वतमाला", correct: false },
            { text: "यूराल पर्वतमाला", correct: false },
            { text: "एंडीज़ पर्वतमाला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोबी रेगिस्तान अल्ताई पर्वतमाला के दक्षिण में स्थित है।"
    },
    {
        question: "कालाहारी रेगिस्तान में पाए जाने वाले प्रसिद्ध 'ओकावांगो डेल्टा' का क्या महत्व है?",
        answers: shuffle([
            { text: "यह रेगिस्तान को जल प्रदान करता है", correct: false },
            { text: "यह जैव विविधता का केंद्र है", correct: false },
            { text: "यह एक महत्वपूर्ण पर्यटन स्थल है", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओकावांगो डेल्टा एक महत्वपूर्ण वेटलैंड है जो रेगिस्तान के बीच में जीवन और जैव विविधता को बढ़ावा देता है और एक प्रसिद्ध पर्यटन स्थल है।"
    },
    {
        question: "ऑस्ट्रेलियाई रेगिस्तान में कौन सा जानवर नहीं पाया जाता है?",
        answers: shuffle([
            { text: "कंगारू", correct: false },
            { text: "ऊँट", correct: false },
            { text: "कोआला", correct: true },
            { text: "डिंगो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोआला मुख्य रूप से पूर्वी ऑस्ट्रेलिया के यूकेलिप्टस जंगलों में पाए जाते हैं, न कि रेगिस्तान में।"
    },
    {
        question: "सहारा रेगिस्तान में पाए जाने वाले 'ओएसिस' (Oasis) का क्या महत्व है?",
        answers: shuffle([
            { text: "यह पानी का एकमात्र स्रोत है", correct: false },
            { text: "यह रेगिस्तान में खेती को संभव बनाता है", correct: false },
            { text: "यह स्थानीय जनजातियों का घर है", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओएसिस रेगिस्तान में पानी के स्रोत होते हैं, जो जीवन और खेती के लिए आवश्यक हैं और स्थानीय समुदायों का समर्थन करते हैं।"
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