const questions = [
    {
        topHeading: "पृथ्वी और उसके सौर्यिक संबंध पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "\"लेटा हुआ ग्रह\" किसे कहा जाता है?",
        answers: shuffle([
            { text: "शनि", correct: false },
            { text: "बृहस्पति", correct: false },
            { text: "अरुण (यूरेनस)", correct: true },
            { text: "वरुण (नेपच्यून)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरुण ग्रह अपने अक्ष पर लगभग 98 डिग्री तक झुका हुआ है, जिसके कारण यह अपनी कक्षा में लेटा हुआ सा प्रतीत होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ग्रह का कोई भी उपग्रह नहीं है?",
        answers: shuffle([
            { text: "मंगल और पृथ्वी", correct: false },
            { text: "बुध और शुक्र", correct: true },
            { text: "शनि और बृहस्पति", correct: false },
            { text: "अरुण और वरुण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौर मंडल में बुध और शुक्र ही दो ऐसे ग्रह हैं जिनका कोई भी प्राकृतिक उपग्रह (चंद्रमा) नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी के अलावा किस ग्रह पर जीवन की संभावना व्यक्त की जाती है?",
        answers: shuffle([
            { text: "शुक्र", correct: false },
            { text: "बृहस्पति", correct: false },
            { text: "मंगल", correct: true },
            { text: "बुध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगल ग्रह पर पानी (बर्फ के रूप में) और पतले वायुमंडल के साक्ष्य मिले हैं, जिसके कारण वैज्ञानिक यहाँ अतीत में या भविष्य में जीवन की संभावना तलाश रहे हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "कॉपरनिकस क्यों प्रसिद्ध हैं?",
        answers: shuffle([
            { text: "गुरुत्वाकर्षण के नियम के लिए", correct: false },
            { text: "ग्रहों की गति के नियम के लिए", correct: false },
            { text: "यह बताने के लिए कि ग्रह सूर्य के चारों ओर घूमते हैं", correct: true },
            { text: "दूरबीन के आविष्कार के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निकोलस कॉपरनिकस ने सूर्यकेंद्रीय (Heliocentric) सिद्धांत प्रतिपादित किया था, जिसमें बताया गया कि पृथ्वी नहीं, बल्कि सूर्य सौर मंडल के केंद्र में है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौर कलंक (Sunspot) क्या हैं?",
        answers: shuffle([
            { text: "सूर्य पर गर्म क्षेत्र", correct: false },
            { text: "सूर्य की सतह पर अपेक्षाकृत ठंडे और काले धब्बे", correct: true },
            { text: "सूर्य पर गैसों के बादल", correct: false },
            { text: "सूर्य के चारों ओर के ग्रह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौर कलंक सूर्य के प्रकाशमंडल पर वे क्षेत्र हैं जो आसपास के क्षेत्रों की तुलना में ठंडे होते हैं और तीव्र चुंबकीय गतिविधि वाले होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी से चंद्रमा का कितना प्रतिशत भाग दिखाई देता है?",
        answers: shuffle([
            { text: "100%", correct: false },
            { text: "50%", correct: false },
            { text: "59%", correct: true },
            { text: "75%", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रमा के घूर्णन और परिक्रमण की अवधि समान होने के कारण हमें हमेशा उसका एक ही पक्ष दिखाई देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, चंद्रमा के डगमगाने (Libration) के कारण हम समय के साथ उसकी सतह का लगभग 59% हिस्सा देख पाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य और पृथ्वी के बीच की न्यूनतम दूरी (उपसौर) कब होती है?",
        answers: shuffle([
            { text: "जुलाई में", correct: false },
            { text: "सितंबर में", correct: false },
            { text: "जनवरी में", correct: true },
            { text: "मार्च में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उपसौर की स्थिति जनवरी के पहले सप्ताह में (लगभग 3 जनवरी को) होती है, जब पृथ्वी सूर्य के सबसे निकट होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य और पृथ्वी के बीच की अधिकतम दूरी (अपसौर) कब होती है?",
        answers: shuffle([
            { text: "जनवरी में", correct: false },
            { text: "जुलाई में", correct: true },
            { text: "अक्टूबर में", correct: false },
            { text: "दिसंबर में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपसौर की स्थिति जुलाई के पहले सप्ताह में (लगभग 4 जुलाई को) होती है, जब पृथ्वी सूर्य से सबसे दूर होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "\"सिजगी\" (Syzygy) क्या है?",
        answers: shuffle([
            { text: "पृथ्वी और सूर्य के बीच की अधिकतम दूरी", correct: false },
            { text: "सूर्य, पृथ्वी और चंद्रमा का एक सीधी रेखा में होना", correct: true },
            { text: "एक वर्ष में दो पूर्णिमा होना", correct: false },
            { text: "धूमकेतु का सूर्य के निकट आना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिजगी एक खगोलीय स्थिति है जब तीन खगोलीय पिंड, विशेष रूप से सूर्य, पृथ्वी और चंद्रमा, एक सीधी रेखा में संरेखित होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ग्रहण इसी स्थिति में होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी की पर्पटी में सबसे प्रचुर मात्रा में कौन सा तत्व पाया जाता है?",
        answers: shuffle([
            { text: "लोहा", correct: false },
            { text: "सिलिकॉन", correct: false },
            { text: "ऑक्सीजन", correct: true },
            { text: "एल्युमिनियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी की भूपर्पटी (Crust) में भार के अनुसार सबसे अधिक मात्रा में ऑक्सीजन (लगभग 47%) पाया जाता है, उसके बाद सिलिकॉन (लगभग 28%) का स्थान आता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "कौन सी रेखा भारत के लगभग मध्य से होकर गुजरती है?",
        answers: shuffle([
            { text: "भूमध्य रेखा", correct: false },
            { text: "मकर रेखा", correct: false },
            { text: "कर्क रेखा", correct: true },
            { text: "आर्कटिक वृत्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कर्क रेखा (23.5° उत्तरी अक्षांश) भारत के आठ राज्यों से होकर गुजरती है, जो देश को लगभग दो बराबर भागों में विभाजित करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौर मंडल का सबसे चमकीला ग्रह कौन सा है?",
        answers: shuffle([
            { text: "बृहस्पति", correct: false },
            { text: "मंगल", correct: false },
            { text: "शुक्र", correct: true },
            { text: "शनि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र का घना वायुमंडल सूर्य के प्रकाश का लगभग 70% परावर्तित कर देता है, जिससे यह आकाश में सबसे चमकीला ग्रह दिखाई देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "जब दिन और रात की अवधि बराबर होती है, तो सूर्य की किरणें सीधी पड़ती हैं:",
        answers: shuffle([
            { text: "कर्क रेखा पर", correct: false },
            { text: "मकर रेखा पर", correct: false },
            { text: "भूमध्य रेखा पर", correct: true },
            { text: "ध्रुवों पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विषुव (Equinox) के दिन (21 मार्च और 23 सितंबर) सूर्य की किरणें भूमध्य रेखा पर लंबवत पड़ती हैं, जिससे पूरी पृथ्वी पर दिन और रात बराबर होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी का औसत तापमान कितना है?",
        answers: shuffle([
            { text: "0 डिग्री सेल्सियस", correct: false },
            { text: "15 डिग्री सेल्सियस", correct: true },
            { text: "100 डिग्री सेल्सियस", correct: false },
            { text: "-10 डिग्री सेल्सियस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रीनहाउस प्रभाव के कारण पृथ्वी का औसत सतह तापमान लगभग 15°C (59°F) है, जो जीवन के लिए अनुकूल है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस वैज्ञानिक ने ग्रहों की गति के तीन नियम दिए थे?",
        answers: shuffle([
            { text: "आइजैक न्यूटन", correct: false },
            { text: "गैलीलियो गैलिली", correct: false },
            { text: "जोहान्स केप्लर", correct: true },
            { text: "कॉपरनिकस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जोहान्स केप्लर ने 17वीं शताब्दी की शुरुआत में ग्रहों की गति से संबंधित तीन मूलभूत नियमों का प्रतिपादन किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "हमारी आकाशगंगा (Galaxy) का नाम क्या है?",
        answers: shuffle([
            { text: "एंड्रोमेडा", correct: false },
            { text: "मिल्की वे (दुग्ध मेखला)", correct: true },
            { text: "ट्रायंगुलम", correct: false },
            { text: "सेंटॉरस ए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हमारा सौर मंडल जिस आकाशगंगा में स्थित है, उसे मिल्की वे या दुग्ध मेखला या मंदाकिनी कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "उल्कापिंड (Meteorite) क्या होता है?",
        answers: shuffle([
            { text: "एक प्रकार का तारा", correct: false },
            { text: "अंतरिक्ष में तैरता चट्टान का टुकड़ा", correct: false },
            { text: "उल्का का वह अंश जो वायुमंडल से जलकर पृथ्वी तक पहुँचता है", correct: true },
            { text: "एक छोटा ग्रह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंतरिक्ष में घूमते चट्टान के टुकड़े (उल्कापिंड) जब पृथ्वी के वायुमंडल में प्रवेश करते हैं तो घर्षण से जल उठते हैं (उल्का), और जो हिस्सा बिना जले पृथ्वी पर गिरता है उसे उल्कापिंड कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी की आयु लगभग कितनी मानी जाती है?",
        answers: shuffle([
            { text: "4.5 अरब वर्ष", correct: true },
            { text: "1 अरब वर्ष", correct: false },
            { text: "10 अरब वर्ष", correct: false },
            { text: "1 मिलियन वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेडियोमेट्रिक डेटिंग तकनीकों के आधार पर वैज्ञानिकों ने पृथ्वी और सौर मंडल की आयु लगभग 4.54 अरब वर्ष अनुमानित की है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि ग्रह के वलय (rings) मुख्य रूप से किससे बने हैं?",
        answers: shuffle([
            { text: "गैस और धूल", correct: false },
            { text: "चट्टान के बड़े टुकड़े", correct: false },
            { text: "बर्फ के कण और चट्टानी मलबे", correct: true },
            { text: "तरल धातु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शनि के प्रसिद्ध वलय अरबों छोटे-छोटे बर्फ के कणों, धूल और चट्टानी टुकड़ों से मिलकर बने हैं जो ग्रह की परिक्रमा करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "\"बौना ग्रह\" (Dwarf Planet) की श्रेणी में किस खगोलीय पिंड को रखा गया है?",
        answers: shuffle([
            { text: "चंद्रमा", correct: false },
            { text: "बृहस्पति", correct: false },
            { text: "प्लूटो", correct: true },
            { text: "फोबोस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 2006 में अंतर्राष्ट्रीय खगोलीय संघ ने ग्रहों की नई परिभाषा दी, जिसके अनुसार प्लूटो ग्रह के मानदंडों को पूरा नहीं करता, इसलिए इसे \"बौने ग्रह\" की श्रेणी में डाल दिया गया।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "कोरियोलिस बल (Coriolis force) किसके कारण उत्पन्न होता है?",
        answers: shuffle([
            { text: "पृथ्वी के गुरुत्वाकर्षण के कारण", correct: false },
            { text: "पृथ्वी के परिक्रमण के कारण", correct: false },
            { text: "पृथ्वी के घूर्णन के कारण", correct: true },
            { text: "चंद्रमा के खिंचाव के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी के अपने अक्ष पर घूमने के कारण एक आभासी बल उत्पन्न होता है जो उत्तरी गोलार्ध में हवाओं और धाराओं को दाईं ओर तथा दक्षिणी गोलार्ध में बाईं ओर मोड़ देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वलयाकार सूर्य ग्रहण (Annular Solar Eclipse) में क्या होता है?",
        answers: shuffle([
            { text: "सूर्य पूरी तरह से ढक जाता है।", correct: false },
            { text: "सूर्य आंशिक रूप से ढकता है।", correct: false },
            { text: "चंद्रमा सूर्य के केंद्र को ढक लेता है, जिससे सूर्य एक चमकती अंगूठी जैसा दिखता है।", correct: true },
            { text: "पृथ्वी की छाया सूर्य पर पड़ती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह तब होता है जब चंद्रमा पृथ्वी से अपनी कक्षा में दूर होता है और सूर्य को पूरी तरह से ढकने के लिए बहुत छोटा दिखाई देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी की जुड़वां बहन शुक्र को क्यों कहा जाता है?",
        answers: shuffle([
            { text: "रंग में समानता के कारण", correct: false },
            { text: "आकार, घनत्व और द्रव्यमान में लगभग समानता के कारण", correct: true },
            { text: "समान संख्या में चंद्रमा होने के कारण", correct: false },
            { text: "समान वायुमंडल होने के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र का आकार और बनावट पृथ्वी से काफी मिलती-जुलती है, इसीलिए इसे \"पृथ्वी की जुड़वां बहन\" के रूप में जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "\"बिग बैंग\" सिद्धांत किससे संबंधित है?",
        answers: shuffle([
            { text: "ग्रहों की उत्पत्ति से", correct: false },
            { text: "ब्रह्मांड की उत्पत्ति से", correct: true },
            { text: "तारों की मृत्यु से", correct: false },
            { text: "ब्लैक होल से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिग बैंग सिद्धांत ब्रह्मांड की उत्पत्ति का सबसे स्वीकृत वैज्ञानिक सिद्धांत है, जिसके अनुसार ब्रह्मांड की शुरुआत एक अत्यंत गर्म और घने बिंदु से हुई थी।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "हमारे सौरमंडल से बाहर खोजे गए ग्रहों को क्या कहा जाता है?",
        answers: shuffle([
            { text: "बौने ग्रह", correct: false },
            { text: "क्षुद्रग्रह", correct: false },
            { text: "एक्सोप्लैनेट (बहिर्ग्रह)", correct: true },
            { text: "जोवियन ग्रह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वे ग्रह जो हमारे सूर्य के अलावा अन्य तारों की परिक्रमा करते हैं, उन्हें एक्सोप्लैनेट या बहिर्ग्रह कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी अपनी धुरी पर किस दिशा में घूमती है?",
        answers: shuffle([
            { text: "पूर्व से पश्चिम", correct: false },
            { text: "पश्चिम से पूर्व", correct: true },
            { text: "उत्तर से दक्षिण", correct: false },
            { text: "दक्षिण से उत्तर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी अपनी धुरी पर पश्चिम से पूर्व की ओर घूमती है, इसीलिए सूर्य, चंद्रमा और तारे हमें पूर्व से उगते और पश्चिम में अस्त होते हुए दिखाई देते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "0° अक्षांश को किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "कर्क रेखा", correct: false },
            { text: "मकर रेखा", correct: false },
            { text: "आर्कटिक वृत्त", correct: false },
            { text: "भूमध्य रेखा (विषुवत रेखा)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 0° अक्षांश रेखा को भूमध्य रेखा या विषुवत रेखा कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पृथ्वी को उत्तरी और दक्षिणी गोलार्ध में विभाजित करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "0° देशांतर रेखा कहाँ से गुजरती है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "ग्रीनविच, इंग्लैंड", correct: true },
            { text: "ऑस्ट्रेलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 0° देशांतर रेखा, जिसे प्रधान मध्याह्न रेखा (Prime Meridian) भी कहते हैं, लंदन के पास ग्रीनविच की वेधशाला से होकर गुजरती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहीं से विश्व का मानक समय निर्धारित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति ग्रह का सबसे बड़ा उपग्रह कौन सा है?",
        answers: shuffle([
            { text: "यूरोपा", correct: false },
            { text: "कैलिस्टो", correct: false },
            { text: "गैनीमेड", correct: true },
            { text: "आयो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गैनीमेड न केवल बृहस्पति का, बल्कि पूरे सौर मंडल का सबसे बड़ा उपग्रह है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह आकार में बुध ग्रह से भी बड़ा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "दो अक्षांश रेखाओं के बीच की दूरी लगभग कितनी होती है?",
        answers: shuffle([
            { text: "111 किलोमीटर", correct: true },
            { text: "101 किलोमीटर", correct: false },
            { text: "121 किलोमीटर", correct: false },
            { text: "151 किलोमीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दो क्रमागत अक्षांश रेखाओं (1 डिग्री के अंतराल पर) के बीच की दूरी लगभग 111 किलोमीटर होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी का सबसे निकटतम ग्रह कौन सा है?",
        answers: shuffle([
            { text: "बुध", correct: false },
            { text: "मंगल", correct: false },
            { text: "शुक्र", correct: true },
            { text: "बृहस्पति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र ग्रह अपनी कक्षा में घूमते हुए पृथ्वी के सबसे करीब आता है, हालांकि बुध सूर्य के सबसे निकट है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौर मंडल के किस ग्रह का घनत्व सबसे कम है?",
        answers: shuffle([
            { text: "बृहस्पति", correct: false },
            { text: "अरुण", correct: false },
            { text: "वरुण", correct: false },
            { text: "शनि", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शनि ग्रह का घनत्व पानी से भी कम है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि शनि को किसी विशाल महासागर में रखा जाए तो यह तैरेगा।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य के अध्ययन के लिए भारत द्वारा भेजा गया पहला मिशन कौन सा है?",
        answers: shuffle([
            { text: "चंद्रयान-3", correct: false },
            { text: "मंगलयान", correct: false },
            { text: "आदित्य-एल1", correct: true },
            { text: "गगनयान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आदित्य-एल1 भारतीय अंतरिक्ष अनुसंधान संगठन (ISRO) द्वारा सूर्य का अध्ययन करने के लिए भेजा गया पहला समर्पित अंतरिक्ष मिशन है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "ध्रुव तारा (Pole Star) हमेशा किस दिशा में दिखाई देता है?",
        answers: shuffle([
            { text: "पूर्व", correct: false },
            { text: "पश्चिम", correct: false },
            { text: "उत्तर", correct: true },
            { text: "दक्षिण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्रुव तारा पृथ्वी के उत्तरी घूर्णन अक्ष की सीध में स्थित है, इसलिए यह हमेशा आकाश में उत्तर दिशा में स्थिर दिखाई देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पूर्ण सूर्य ग्रहण के दौरान सूर्य का कौन सा भाग दिखाई देता है?",
        answers: shuffle([
            { text: "प्रकाशमंडल", correct: false },
            { text: "कोर", correct: false },
            { text: "किरीट (कोरोना)", correct: true },
            { text: "वर्णमंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पूर्ण सूर्य ग्रहण के समय जब चंद्रमा सूर्य को पूरी तरह से ढक लेता है, तब सूर्य का वायुमंडल यानी कोरोना एक चमकदार प्रभामंडल के रूप में दिखाई देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "ब्रह्मांड में सबसे प्रचुर तत्व कौन सा है?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: false },
            { text: "हीलियम", correct: false },
            { text: "कार्बन", correct: false },
            { text: "हाइड्रोजन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्रह्मांड में लगभग 75% पदार्थ हाइड्रोजन है।<br><br><i class='fa-solid fa-angles-right icon'></i> तारे मुख्य रूप से हाइड्रोजन से ही बने होते हैं और इसी के संलयन से ऊर्जा उत्पन्न करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ग्रह को \"नीला ग्रह\" (Blue Planet) कहा जाता है?",
        answers: shuffle([
            { text: "अरुण", correct: false },
            { text: "वरुण", correct: false },
            { text: "पृथ्वी", correct: true },
            { text: "शुक्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी की सतह का लगभग 71% हिस्सा पानी से ढका हुआ है, जिसके कारण अंतरिक्ष से देखने पर यह नीली दिखाई देती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "चंद्रमा पर किसी वस्तु का भार पृथ्वी पर उसके भार का कितना होता है?",
        answers: shuffle([
            { text: "बराबर", correct: false },
            { text: "1/6 गुना", correct: true },
            { text: "6 गुना", correct: false },
            { text: "1/10 गुना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रमा का गुरुत्वाकर्षण बल पृथ्वी के गुरुत्वाकर्षण बल का लगभग छठा हिस्सा है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, चंद्रमा पर किसी वस्तु का भार पृथ्वी पर उसके भार का 1/6 हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "समय मापने के लिए पृथ्वी की किस गति का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "परिक्रमण", correct: false },
            { text: "घूर्णन", correct: true },
            { text: "अक्षीय झुकाव", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी का घूर्णन, जो दिन और रात का कारण बनता है, हमारी समय की मूल इकाई (दिन) का आधार है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी के घूर्णन की गति सबसे अधिक कहाँ होती है?",
        answers: shuffle([
            { text: "ध्रुवों पर", correct: false },
            { text: "कर्क रेखा पर", correct: false },
            { text: "भूमध्य रेखा पर", correct: true },
            { text: "सभी जगह समान होती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी एक गोले के रूप में घूमती है, इसलिए सबसे अधिक परिधि वाले हिस्से, यानी भूमध्य रेखा पर, घूर्णन की गति अधिकतम (लगभग 1670 किमी/घंटा) होती है और ध्रुवों पर यह शून्य हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ऋतु में दिन छोटे और रातें बड़ी होती हैं?",
        answers: shuffle([
            { text: "ग्रीष्म ऋतु", correct: false },
            { text: "शीत ऋतु", correct: true },
            { text: "वसंत ऋतु", correct: false },
            { text: "शरद ऋतु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शीत ऋतु में सूर्य की किरणें तिरछी पड़ती हैं और सूर्य आकाश में कम समय के लिए रहता है, जिससे दिन छोटे और रातें लंबी होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "देशांतर रेखाओं का मुख्य उपयोग क्या है?",
        answers: shuffle([
            { text: "किसी स्थान की जलवायु निर्धारित करना", correct: false },
            { text: "किसी स्थान की दूरी भूमध्य रेखा से बताना", correct: false },
            { text: "किसी स्थान का समय निर्धारित करना", correct: true },
            { text: "ऋतुओं का निर्धारण करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> देशांतर रेखाएं पृथ्वी पर किसी स्थान की पूर्व-पश्चिम स्थिति को दर्शाती हैं और इनका उपयोग स्थानीय और मानक समय की गणना के लिए किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ग्रह पर 'ग्रेट रेड स्पॉट' (Great Red Spot) पाया जाता है?",
        answers: shuffle([
            { text: "शनि", correct: false },
            { text: "मंगल", correct: false },
            { text: "बृहस्पति", correct: true },
            { text: "अरुण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ग्रेट रेड स्पॉट' बृहस्पति ग्रह पर सदियों से चल रहा एक विशाल तूफान (प्रतिचक्रवात) है, जो आकार में पृथ्वी से भी बड़ा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल ग्रह के दो उपग्रह कौन से हैं?",
        answers: shuffle([
            { text: "गैनीमेड और यूरोपा", correct: false },
            { text: "टाइटन और रिया", correct: false },
            { text: "फोबोस और डीमोस", correct: true },
            { text: "ट्राइटन और नेरीड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगल ग्रह के दो छोटे और अनियमित आकार के चंद्रमा हैं, जिनके नाम फोबोस और डीमोस हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सबसे लंबा वर्ष किस ग्रह पर होता है?",
        answers: shuffle([
            { text: "बृहस्पति", correct: false },
            { text: "शनि", correct: false },
            { text: "अरुण", correct: false },
            { text: "वरुण (नेपच्यून)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वरुण सूर्य से सबसे दूर का ग्रह है, इसलिए इसे सूर्य की एक परिक्रमा पूरी करने में सबसे अधिक समय (लगभग 165 पृथ्वी वर्ष) लगता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "\"ब्लैक होल\" (Black Hole) क्या है?",
        answers: shuffle([
            { text: "एक मृत तारा", correct: false },
            { text: "अंतरिक्ष में एक छेद", correct: false },
            { text: "अत्यधिक गुरुत्वाकर्षण वाला एक खगोलीय क्षेत्र जिससे प्रकाश भी नहीं निकल सकता", correct: true },
            { text: "एक प्रकार की आकाशगंगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्लैक होल तब बनता है जब कोई बहुत बड़ा तारा अपने जीवन के अंत में अपने ही गुरुत्वाकर्षण के कारण ढह जाता है, जिससे अत्यंत सघन क्षेत्र बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी की बहन कहलाने वाले ग्रह शुक्र पर एक दिन उसकी एक साल से...",
        answers: shuffle([
            { text: "छोटा होता है", correct: false },
            { text: "बराबर होता है", correct: false },
            { text: "बड़ा होता है", correct: true },
            { text: "आधा होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र का घूर्णन काल (एक दिन) लगभग 243 पृथ्वी दिवस है, जबकि उसका परिक्रमण काल (एक वर्ष) लगभग 225 पृथ्वी दिवस है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक अनोखी विशेषता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अपोलो 11 मिशन क्यों महत्वपूर्ण है?",
        answers: shuffle([
            { text: "यह मंगल पर उतरा था", correct: false },
            { text: "यह चंद्रमा पर उतरने वाला पहला मानवयुक्त मिशन था", correct: true },
            { text: "इसने सौरमंडल की तस्वीरें लीं", correct: false },
            { text: "यह एक सूर्य मिशन था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपोलो 11 नासा का वह ऐतिहासिक मिशन था जिसने 1969 में नील आर्मस्ट्रांग और बज़ एल्ड्रिन को सफलतापूर्वक चंद्रमा पर उतारा था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी का वायुमंडल मुख्य रूप से गर्म होता है:",
        answers: shuffle([
            { text: "सूर्य की सीधी किरणों से", correct: false },
            { text: "पृथ्वी की सतह से होने वाले विकिरण से (पार्थिव विकिरण)", correct: true },
            { text: "ज्वालामुखी गतिविधियों से", correct: false },
            { text: "ग्रीनहाउस गैसों के जलने से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य की लघु-तरंग किरणें पृथ्वी की सतह को गर्म करती हैं, फिर सतह दीर्घ-तरंग विकिरण उत्सर्जित करती है जो वायुमंडल को नीचे से ऊपर की ओर गर्म करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "उत्तरी गोलार्ध में सबसे छोटी रात कब होती है?",
        answers: shuffle([
            { text: "22 दिसंबर", correct: false },
            { text: "21 मार्च", correct: false },
            { text: "23 सितंबर", correct: false },
            { text: "21 जून", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 21 जून को उत्तरी गोलार्ध में सबसे बड़ा दिन होता है, इसलिए स्वाभाविक रूप से इसी तिथि को रात सबसे छोटी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
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