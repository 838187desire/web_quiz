const questions = [
    {
        topHeading: "ब्रह्मांड पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "ब्रह्मांड के विस्तार की खोज किसने की थी?",
        answers: shuffle([
            { text: "एडविन हबल", correct: true },
            { text: "अल्बर्ट आइंस्टीन", correct: false },
            { text: "जॉर्ज लेमैत्रे", correct: false },
            { text: "स्टीफन हॉकिंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1929 में एडविन हबल ने देखा कि आकाशगंगाएँ एक दूसरे से दूर जा रही हैं, जिससे ब्रह्मांड के विस्तार का प्रमाण मिला।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस गैस की उपस्थिति के कारण अरुण (यूरेनस) ग्रह हरा दिखाई देता है?",
        answers: shuffle([
            { text: "मीथेन", correct: true },
            { text: "हाइड्रोजन", correct: false },
            { text: "हीलियम", correct: false },
            { text: "अमोनिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरुण के वायुमंडल में मौजूद मीथेन गैस लाल प्रकाश को अवशोषित कर लेती है और नीले-हरे प्रकाश को परावर्तित करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'ओरियन' क्या है?",
        answers: shuffle([
            { text: "एक तारामंडल", correct: true },
            { text: "एक ग्रह", correct: false },
            { text: "एक आकाशगंगा", correct: false },
            { text: "एक नेबुला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओरियन, जिसे 'शिकारी' भी कहा जाता है, आकाश में सबसे पहचानने योग्य तारामंडलों में से एक है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "चंद्रमा पर किसी वस्तु का भार पृथ्वी पर उसके भार का कितना होता है?",
        answers: shuffle([
            { text: "1/6 गुना", correct: true },
            { text: "बराबर", correct: false },
            { text: "1/4 गुना", correct: false },
            { text: "1/10 गुना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रमा का गुरुत्वाकर्षण पृथ्वी के गुरुत्वाकर्षण का लगभग छठा हिस्सा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य के केंद्रीय भाग को क्या कहते हैं?",
        answers: shuffle([
            { text: "कोर (क्रोड)", correct: true },
            { text: "प्रकाशमंडल", correct: false },
            { text: "वर्णमंडल", correct: false },
            { text: "कोरोना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य का कोर अत्यधिक गर्म और सघन होता है, यहीं पर नाभिकीय संलयन की क्रिया होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'सौर ज्वाला' (Solar Flare) क्या है?",
        answers: shuffle([
            { text: "सूर्य के वायुमंडल में होने वाला एक तीव्र ऊर्जावान विस्फोट", correct: true },
            { text: "सूर्य की सतह पर एक काला धब्बा", correct: false },
            { text: "सूर्य से निकलने वाली हवा", correct: false },
            { text: "एक प्रकार का ग्रहण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौर ज्वाला से बड़ी मात्रा में विकिरण और ऊर्जावान कण अंतरिक्ष में फैलते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "एक खगोलीय इकाई (Astronomical Unit - AU) किनके बीच की औसत दूरी है?",
        answers: shuffle([
            { text: "पृथ्वी और सूर्य", correct: true },
            { text: "पृथ्वी और चंद्रमा", correct: false },
            { text: "पृथ्वी और मंगल", correct: false },
            { text: "सूर्य और बृहस्पति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक AU का मान लगभग 149.6 मिलियन किलोमीटर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "हबल अंतरिक्ष दूरबीन को कब प्रक्षेपित किया गया था?",
        answers: shuffle([
            { text: "1990", correct: true },
            { text: "1985", correct: false },
            { text: "1995", correct: false },
            { text: "2000", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हबल टेलीस्कोप को नासा और यूरोपीय अंतरिक्ष एजेंसी द्वारा अंतरिक्ष में स्थापित किया गया था, जिसने ब्रह्मांड के बारे में हमारी समझ में क्रांति ला दी।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सबसे भारी ग्रह कौन सा है?",
        answers: shuffle([
            { text: "बृहस्पति", correct: true },
            { text: "शनि", correct: false },
            { text: "वरुण", correct: false },
            { text: "पृथ्वी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति न केवल आकार में सबसे बड़ा है, बल्कि द्रव्यमान में भी सौर मंडल का सबसे भारी ग्रह है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "टाइटन किस ग्रह का सबसे बड़ा उपग्रह है?",
        answers: shuffle([
            { text: "शनि", correct: true },
            { text: "बृहस्पति", correct: false },
            { text: "अरुण", correct: false },
            { text: "वरुण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टाइटन सौर मंडल का दूसरा सबसे बड़ा उपग्रह है और यह एकमात्र ऐसा उपग्रह है जिसका अपना सघन वायुमंडल है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "उल्कापिंड (Meteorite) क्या होता है?",
        answers: shuffle([
            { text: "पृथ्वी की सतह पर पहुँचने वाला उल्का का अवशेष", correct: true },
            { text: "अंतरिक्ष में तैरता हुआ पत्थर", correct: false },
            { text: "धूमकेतु का हिस्सा", correct: false },
            { text: "पृथ्वी के वायुमंडल में प्रवेश कर जलने वाला पिंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कोई उल्का (Meteoroid) पृथ्वी के वायुमंडल से पूरी तरह जले बिना सतह तक पहुँच जाता है, तो उसे उल्कापिंड कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "भारतीय अंतरिक्ष अनुसंधान संगठन (इसरो) का मुख्यालय कहाँ है?",
        answers: shuffle([
            { text: "बेंगलुरु", correct: true },
            { text: "नई दिल्ली", correct: false },
            { text: "मुंबई", correct: false },
            { text: "चेन्नई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसरो (ISRO) भारत की राष्ट्रीय अंतरिक्ष एजेंसी है और इसका मुख्यालय बेंगलुरु में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "भारत द्वारा प्रक्षेपित पहले कृत्रिम उपग्रह का क्या नाम था?",
        answers: shuffle([
            { text: "आर्यभट्ट", correct: true },
            { text: "भास्कर", correct: false },
            { text: "रोहिणी", correct: false },
            { text: "एप्पल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आर्यभट्ट को 1975 में सोवियत संघ की सहायता से प्रक्षेपित किया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'चंद्रयान-1' मिशन कब प्रक्षेपित किया गया था?",
        answers: shuffle([
            { text: "2008", correct: true },
            { text: "2005", correct: false },
            { text: "2011", correct: false },
            { text: "2013", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह इसरो का पहला चंद्र मिशन था, जिसने चंद्रमा पर पानी के अणुओं की मौजूदगी का पता लगाया था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "भारत के मंगल मिशन (मार्स ऑर्बिटर मिशन) का क्या नाम था?",
        answers: shuffle([
            { text: "मंगलयान", correct: true },
            { text: "चंद्रयान-2", correct: false },
            { text: "गगनयान", correct: false },
            { text: "आदित्य-एल1", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगलयान को 2013 में प्रक्षेपित किया गया था, और भारत पहले ही प्रयास में मंगल की कक्षा में पहुँचने वाला पहला देश बना।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वह काल्पनिक सीमा जिसके बाहर से कोई भी वस्तु या प्रकाश पलायन नहीं कर सकता, क्या कहलाती है?",
        answers: shuffle([
            { text: "घटना क्षितिज (Event Horizon)", correct: true },
            { text: "चंद्रशेखर सीमा", correct: false },
            { text: "रॉश सीमा", correct: false },
            { text: "हबल सीमा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह ब्लैक होल के चारों ओर का वह क्षेत्र है जहाँ से गुरुत्वाकर्षण इतना प्रबल हो जाता है कि कुछ भी वापस नहीं आ सकता।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'बिग डिपर' और 'लिटिल डिपर' क्या हैं?",
        answers: shuffle([
            { text: "तारामंडल के भाग (एस्ट्रिज्म)", correct: true },
            { text: "आकाशगंगाएँ", correct: false },
            { text: "नेबुला", correct: false },
            { text: "बौने ग्रह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिग डिपर सप्तर्षि (Ursa Major) का हिस्सा है और लिटिल डिपर ध्रुवमत्स्य (Ursa Minor) का हिस्सा है, जिसमें ध्रुव तारा शामिल है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "ग्रहों की गति के नियम किसने प्रतिपादित किए थे?",
        answers: shuffle([
            { text: "केप्लर", correct: true },
            { text: "न्यूटन", correct: false },
            { text: "गैलीलियो", correct: false },
            { text: "कॉपरनिकस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जोहान्स केप्लर ने ग्रहों की गति के तीन नियम दिए थे, जो उनके दीर्घवृत्ताकार पथों का वर्णन करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी अपनी धुरी पर एक चक्कर पूरा करने में कितना समय लेती है?",
        answers: shuffle([
            { text: "23 घंटे 56 मिनट 4 सेकंड", correct: true },
            { text: "ठीक 24 घंटे", correct: false },
            { text: "24 घंटे 10 मिनट 2 सेकंड", correct: false },
            { text: "23 घंटे 30 मिनट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस अवधि को एक 'नाक्षत्र दिवस' (Sidereal Day) कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ग्रह को 'नीला ग्रह' भी कहा जाता है?",
        answers: shuffle([
            { text: "पृथ्वी", correct: true },
            { text: "अरुण", correct: false },
            { text: "वरुण", correct: false },
            { text: "शनि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी की सतह का लगभग 71% हिस्सा पानी से ढका हुआ है, जिसके कारण यह अंतरिक्ष से नीली दिखाई देती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य में हाइड्रोजन के बाद दूसरा सबसे प्रचुर तत्व कौन सा है?",
        answers: shuffle([
            { text: "हीलियम", correct: true },
            { text: "ऑक्सीजन", correct: false },
            { text: "कार्बन", correct: false },
            { text: "लोहा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य का लगभग 24% द्रव्यमान हीलियम है, जो हाइड्रोजन के संलयन से बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'वोयेजर 1' अंतरिक्ष यान का मुख्य उद्देश्य क्या था?",
        answers: shuffle([
            { text: "बाहरी सौर मंडल के ग्रहों का अध्ययन", correct: true },
            { text: "मंगल का अध्ययन", correct: false },
            { text: "चंद्रमा पर उतरना", correct: false },
            { text: "सूर्य का अध्ययन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1977 में प्रक्षेपित वोयेजर 1 बृहस्पति और शनि का अध्ययन करने के बाद अब अंतरतारकीय अंतरिक्ष (Interstellar space) में प्रवेश कर चुका है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "ब्रह्मांड में मौजूद आकाशगंगाओं की अनुमानित संख्या कितनी है?",
        answers: shuffle([
            { text: "100 बिलियन से 200 बिलियन", correct: true },
            { text: "10 बिलियन", correct: false },
            { text: "1 ट्रिलियन", correct: false },
            { text: "500 बिलियन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवीनतम अनुमानों के अनुसार यह संख्या और भी अधिक, लगभग 2 ट्रिलियन तक हो सकती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य ग्रहण केवल किस दिन होता है?",
        answers: shuffle([
            { text: "अमावस्या", correct: true },
            { text: "पूर्णिमा", correct: false },
            { text: "अष्टमी", correct: false },
            { text: "किसी भी दिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य ग्रहण तभी हो सकता है जब चंद्रमा सूर्य और पृथ्वी के बीच में हो, और यह स्थिति केवल अमावस्या को होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "तारे मुख्य रूप से किससे बने होते हैं?",
        answers: shuffle([
            { text: "गर्म गैसों (प्लाज्मा) से", correct: true },
            { text: "ठोस चट्टानों से", correct: false },
            { text: "तरल लावा से", correct: false },
            { text: "धूल और बर्फ से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तारे मुख्य रूप से हाइड्रोजन और हीलियम की गर्म, आयनित गैस से बने होते हैं जिसे प्लाज्मा कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
     {
        question: "पृथ्वी के सबसे निकटतम ग्रह कौन सा है?",
        answers: shuffle([
            { text: "मंगल", correct: false },
            { text: "शुक्र", correct: true },
            { text: "बुध", correct: false },
            { text: "बृहस्पति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपनी कक्षाओं में घूमते समय शुक्र ग्रह पृथ्वी के सबसे करीब आता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'सप्तर्षि' तारामंडल किस बड़े तारामंडल का हिस्सा है?",
        answers: shuffle([
            { text: "उरसा मेजर (बृहत् सप्तर्षि)", correct: true },
            { text: "ओरियन (मृग)", correct: false },
            { text: "स्कॉर्पियस (वृश्चिक)", correct: false },
            { text: "लियो (सिंह)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सप्तर्षि (सात तारों का समूह) उरसा मेजर तारामंडल का सबसे आसानी से पहचाना जाने वाला हिस्सा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि का सबसे बड़ा चंद्रमा 'टाइटन' की खोज किसने की थी?",
        answers: shuffle([
            { text: "गैलीलियो गैलिली", correct: false },
            { text: "क्रिस्टियान ह्यूजेंस", correct: true },
            { text: "आइजैक न्यूटन", correct: false },
            { text: "एडमंड हेली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डच खगोलशास्त्री क्रिस्टियान ह्यूजेंस ने 1655 में टाइटन की खोज की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'डार्क एनर्जी' (अदृश्य ऊर्जा) का संबंध किससे है?",
        answers: shuffle([
            { text: "ब्रह्मांड के त्वरित विस्तार से", correct: true },
            { text: "ब्रह्मांड के संकुचन से", correct: false },
            { text: "तारों की ऊर्जा से", correct: false },
            { text: "ब्लैक होल के निर्माण से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माना जाता है कि डार्क एनर्जी एक रहस्यमयी ऊर्जा है जो गुरुत्वाकर्षण के विपरीत काम करती है और ब्रह्मांड के विस्तार की गति को बढ़ा रही है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'सुपरमून' की घटना कब होती है?",
        answers: shuffle([
            { text: "जब चंद्रमा पृथ्वी से सबसे दूर होता है", correct: false },
            { text: "चंद्र ग्रहण के दौरान", correct: false },
            { text: "जब चंद्रमा पृथ्वी के सबसे निकट होता है", correct: true },
            { text: "सूर्य ग्रहण के दौरान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब पूर्णिमा के दिन चंद्रमा अपनी कक्षा में पृथ्वी के सबसे करीब (पेरिगी) होता है, तो वह सामान्य से थोड़ा बड़ा और चमकीला दिखाई देता है, जिसे सुपरमून कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य के प्रकाशमंडल (Photosphere) में ठंडे और काले धब्बों को क्या कहा जाता है?",
        answers: shuffle([
            { text: "सौर ज्वाला", correct: false },
            { text: "सौर कलंक (Sunspot)", correct: true },
            { text: "कोरोना", correct: false },
            { text: "प्रमुखता (Prominence)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौर कलंक आसपास के क्षेत्रों की तुलना में ठंडे होते हैं क्योंकि वहां मजबूत चुंबकीय क्षेत्र संवहन को रोकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "जेम्स वेब स्पेस टेलीस्कोप मुख्य रूप से किस प्रकार के विकिरण का निरीक्षण करता है?",
        answers: shuffle([
            { text: "अवरक्त (Infrared)", correct: true },
            { text: "दृश्य प्रकाश", correct: false },
            { text: "एक्स-रे", correct: false },
            { text: "गामा किरणें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवरक्त में देखने की क्षमता जेम्स वेब टेलीस्कोप को ब्रह्मांड की शुरुआती आकाशगंगाओं और तारों का अध्ययन करने में मदद करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ग्रह का एक दिन उसके एक वर्ष से बड़ा होता है?",
        answers: shuffle([
            { text: "बुध", correct: false },
            { text: "मंगल", correct: false },
            { text: "शुक्र", correct: true },
            { text: "बृहस्पति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र को अपनी धुरी पर एक बार घूमने में 243 पृथ्वी दिवस लगते हैं, जबकि सूर्य की परिक्रमा करने में केवल 225 पृथ्वी दिवस लगते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'भू-स्थिर कक्षा' (Geostationary Orbit) क्या है?",
        answers: shuffle([
            { text: "एक कक्षा जिसमें उपग्रह ध्रुवों के ऊपर से गुजरता है", correct: false },
            { text: "पृथ्वी के चारों ओर एक ऐसी कक्षा जिसमें उपग्रह पृथ्वी से स्थिर दिखाई देता है", correct: true },
            { text: "चंद्रमा के चारों ओर की कक्षा", correct: false },
            { text: "सूर्य के चारों ओर की कक्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस कक्षा में उपग्रह की घूर्णन गति पृथ्वी की घूर्णन गति के बराबर होती है, इसलिए वह आकाश में एक ही स्थान पर स्थिर प्रतीत होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'ट्राइटन' किस ग्रह का सबसे बड़ा उपग्रह है?",
        answers: shuffle([
            { text: "वरुण (नेप्च्यून)", correct: true },
            { text: "शनि", correct: false },
            { text: "बृहस्पति", correct: false },
            { text: "अरुण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ट्राइटन सौर मंडल का एकमात्र बड़ा उपग्रह है जो अपने ग्रह की परिक्रमा उसकी घूर्णन दिशा के विपरीत करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अंतरिक्ष में जाने वाले पहले भारतीय कौन थे?",
        answers: shuffle([
            { text: "राकेश शर्मा", correct: true },
            { text: "कल्पना चावला", correct: false },
            { text: "सुनीता विलियम्स", correct: false },
            { text: "रविश मल्होत्रा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राकेश शर्मा ने 1984 में सोवियत संघ के सोयुज टी-11 मिशन के तहत अंतरिक्ष यात्रा की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "एक तारे के जीवन चक्र का सही क्रम क्या है?",
        answers: shuffle([
            { text: "नीहारिका -> मुख्य अनुक्रम तारा -> लाल दानव -> सफेद बौना", correct: true },
            { text: "नीहारिका -> लाल दानव -> सफेद बौना -> मुख्य अनुक्रम तारा", correct: false },
            { text: "सफेद बौना -> नीहारिका -> लाल दानव -> मुख्य अनुक्रम तारा", correct: false },
            { text: "लाल दानव -> सफेद बौना -> नीहारिका -> मुख्य अनुक्रम तारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक औसत आकार के तारे (जैसे सूर्य) के जीवन चक्र का क्रम है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौर मंडल किस आकाशगंगा में स्थित है?",
        answers: shuffle([
            { text: "मंदाकिनी", correct: true },
            { text: "एंड्रोमेडा", correct: false },
            { text: "ट्रायंगुलम", correct: false },
            { text: "मेसियर 87", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हमारा सौर मंडल मंदाकिनी (मिल्की वे) आकाशगंगा की एक भुजा, जिसे ओरियन आर्म कहते हैं, में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'ब्लू मून' क्या है?",
        answers: shuffle([
            { text: "एक ही कैलेंडर महीने में दूसरी पूर्णिमा", correct: true },
            { text: "जब चंद्रमा नीला दिखाई देता है", correct: false },
            { text: "चंद्र ग्रहण का दूसरा नाम", correct: false },
            { text: "एक दुर्लभ खगोलीय घटना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक खगोलीय घटना है जो लगभग हर ढाई साल में एक बार होती है, इसका चंद्रमा के रंग से कोई संबंध नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'गुरुत्वाकर्षण लेंसिंग' (Gravitational Lensing) की घटना की भविष्यवाणी किसने की थी?",
        answers: shuffle([
            { text: "अल्बर्ट आइंस्टीन", correct: true },
            { text: "आइजैक न्यूटन", correct: false },
            { text: "एडविन हबल", correct: false },
            { text: "स्टीफन हॉकिंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आइंस्टीन के सामान्य सापेक्षता के सिद्धांत के अनुसार, विशाल वस्तुएं अपने गुरुत्वाकर्षण से अपने पीछे की वस्तुओं से आने वाले प्रकाश को मोड़ सकती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सेरेस (Ceres) क्या है?",
        answers: shuffle([
            { text: "एक बौना ग्रह", correct: true },
            { text: "एक चंद्रमा", correct: false },
            { text: "एक धूमकेतु", correct: false },
            { text: "एक आकाशगंगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेरेस क्षुद्रग्रह पट्टी में स्थित सबसे बड़ी वस्तु है और इसे बौने ग्रह के रूप में वर्गीकृत किया गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ग्रह का घनत्व पानी से भी कम है?",
        answers: shuffle([
            { text: "शनि", correct: true },
            { text: "बृहस्पति", correct: false },
            { text: "अरुण", correct: false },
            { text: "वरुण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शनि का औसत घनत्व इतना कम है कि यदि इसे पानी के एक विशाल टब में रखा जा सके, तो यह तैरने लगेगा।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'मैगेलैनिक बादल' (Magellanic Clouds) क्या हैं?",
        answers: shuffle([
            { text: "हमारी आकाशगंगा की दो उपग्रह आकाशगंगाएँ", correct: true },
            { text: "बृहस्पति पर तूफान", correct: false },
            { text: "शनि के वलयों का हिस्सा", correct: false },
            { text: "एक प्रकार का नेबुला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये दो अनियमित बौनी आकाशगंगाएँ हैं जो दक्षिणी गोलार्ध से दिखाई देती हैं और मिल्की वे की परिक्रमा करती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'सिजिगी' (Syzygy) शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "जब तीन खगोलीय पिंड एक सीधी रेखा में होते हैं", correct: true },
            { text: "जब कोई ग्रह सूर्य के सबसे निकट होता है", correct: false },
            { text: "जब कोई ग्रह सूर्य से सबसे दूर होता है", correct: false },
            { text: "जब दो तारे एक दूसरे की परिक्रमा करते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य ग्रहण और चंद्र ग्रहण सिजिगी के उदाहरण हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य की सतह का तापमान लगभग कितना होता है?",
        answers: shuffle([
            { text: "6,000 डिग्री सेल्सियस", correct: true },
            { text: "2,000 डिग्री सेल्सियस", correct: false },
            { text: "15,000 डिग्री सेल्सियस", correct: false },
            { text: "1 मिलियन डिग्री सेल्सियस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य की सतह जिसे प्रकाशमंडल कहते हैं, का तापमान लगभग 5,500 से 6,000 डिग्री सेल्सियस होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "नासा का 'क्यूरियोसिटी' रोवर किस खगोलीय पिंड का अध्ययन कर रहा है?",
        answers: shuffle([
            { text: "मंगल", correct: true },
            { text: "चंद्रमा", correct: false },
            { text: "बृहस्पति", correct: false },
            { text: "टाइटन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्यूरियोसिटी रोवर 2012 में मंगल पर उतरा था और यह वहां के भूविज्ञान और जलवायु का अध्ययन कर रहा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'व्हाइट ड्वार्फ' (सफेद बौना) क्या है?",
        answers: shuffle([
            { text: "एक मृत तारे का अवशेष", correct: true },
            { text: "एक युवा, गर्म तारा", correct: false },
            { text: "एक विशाल तारा", correct: false },
            { text: "एक प्रकार का ग्रह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य जैसे कम द्रव्यमान वाले तारे अपने जीवन के अंत में अपना बाहरी आवरण खोकर एक सघन कोर छोड़ देते हैं, जिसे सफेद बौना कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "हमारे सौर मंडल की आयु लगभग कितनी है?",
        answers: shuffle([
            { text: "4.6 अरब वर्ष", correct: true },
            { text: "1.5 अरब वर्ष", correct: false },
            { text: "10.2 अरब वर्ष", correct: false },
            { text: "13.8 अरब वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैज्ञानिकों का अनुमान है कि हमारा सौर मंडल लगभग 4.6 अरब साल पहले एक विशाल आणविक बादल के ढहने से बना था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी के वायुमंडल के अभाव में आकाश का रंग कैसा दिखाई देगा?",
        answers: shuffle([
            { text: "काला", correct: true },
            { text: "नीला", correct: false },
            { text: "सफेद", correct: false },
            { text: "नारंगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आकाश का नीला रंग सूर्य के प्रकाश के वायुमंडलीय कणों द्वारा प्रकीर्णन के कारण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> वायुमंडल न होने पर, यह काला दिखाई देगा, जैसा कि अंतरिक्ष यात्रियों को दिखता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'और्ट क्लाउड' (Oort Cloud) क्या है?",
        answers: shuffle([
            { text: "सौर मंडल के बाहरी किनारे पर बर्फीले पिंडों का एक विशाल गोलाकार बादल", correct: true },
            { text: "शनि के चारों ओर एक वलय", correct: false },
            { text: "क्षुद्रग्रह पट्टी का एक हिस्सा", correct: false },
            { text: "एक सर्पिल आकाशगंगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माना जाता है कि लंबी अवधि वाले धूमकेतु इसी और्ट क्लाउड से आते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
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