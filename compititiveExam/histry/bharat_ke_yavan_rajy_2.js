const questions = [
    {
        topHeading: "भारत के यवनराज्य पर आधारित बहुविकल्पी प्रश्न part 2 (quiz_no.74)"
    },
    {
        question: "हिंद-यवन शासक मिनांडर ने किस नदी के तट तक अपने साम्राज्य का विस्तार किया था?",
        answers: shuffle([
            { text: "सिंधु नदी", correct: false },
            { text: "गंगा नदी", correct: false },
            { text: "रावी नदी", correct: true },
            { text: "झेलम नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिनांडर का साम्राज्य पश्चिम में काबुल नदी घाटी से लेकर पूर्व में रावी नदी तक फैला हुआ था।"
    },
    {
        question: "'मिलिंद पन्हो' में, नागसेन ने मिनांडर को किस बौद्ध अवधारणा के बारे में समझाया?",
        answers: shuffle([
            { text: "कर्म का सिद्धांत", correct: false },
            { text: "पुनर्जन्म का सिद्धांत", correct: false },
            { text: "आत्मा की अवधारणा", correct: false },
            { text: "अनात्मा (अ-आत्मा) की अवधारणा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मिलिंद पन्हो' का मुख्य विषय अनात्मा का सिद्धांत है, जिसमें नागसेन ने मिनांडर को समझाया कि कोई स्थायी 'आत्मा' नहीं है।"
    },
    {
        question: "किस हिंद-यवन शासक के सिक्कों पर \"धर्मचक्र\" और \"हाथी\" दोनों के प्रतीक मिलते हैं?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: false },
            { text: "मिनांडर", correct: false },
            { text: "अपोलोडोटस I", correct: true },
            { text: "यूथीडेमस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपोलोडोटस I के सिक्कों पर धर्मचक्र और हाथी दोनों के प्रतीक मिलते हैं, जो उसके बौद्ध और भारतीय प्रभाव को दर्शाते हैं।"
    },
    {
        question: "किस शासक के सिक्कों पर \"सोटर\" (Soter) की उपाधि मिलती है, जिसका अर्थ है 'मुक्तिदाता'?",
        answers: shuffle([
            { text: "मिनांडर", correct: true },
            { text: "डेमेट्रियस", correct: false },
            { text: "अपोलोडोटस I", correct: false },
            { text: "यूक्रेटाइड्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासक मिनांडर को उसके सिक्कों पर 'सोटर' की उपाधि से दर्शाया गया है, जिसका अर्थ है 'मुक्तिदाता'।"
    },
    {
        question: "हिंद-यवन शासकों का अंतिम ज्ञात शासक कौन था?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: false },
            { text: "मिनांडर", correct: false },
            { text: "स्ट्रेटो II", correct: true },
            { text: "हेलिओक्लीज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्ट्रेटो II को हिंद-यवन शासकों का अंतिम ज्ञात शासक माना जाता है, जिसके बाद शक शासकों ने उसके राज्य पर अधिकार कर लिया।"
    },
    {
        question: "किस ग्रंथ में उल्लेख है कि यवनों ने अवध में साकेत और चित्तौड़ के निकट माध्यमिका का घेरा डाला था?",
        answers: shuffle([
            { text: "अष्टाध्यायी", correct: false },
            { text: "मुद्रा राक्षस", correct: false },
            { text: "महाभाष्य", correct: true },
            { text: "अर्थशास्त्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पतंजलि के 'महाभाष्य' में यवन आक्रमणों का उल्लेख है, जिसमें साकेत और माध्यमिका पर उनके घेराव का वर्णन है।"
    },
    {
        question: "किस कला शैली में बुद्ध की मूर्तियां यूनानी शैली में बनाई गईं, जिसमें लहराते बाल और वस्त्र दिखाए गए हैं?",
        answers: shuffle([
            { text: "मथुरा कला", correct: false },
            { text: "अमरावती कला", correct: false },
            { text: "गांधार कला", correct: true },
            { text: "गुप्त कला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गांधार कला, यूनानी-रोमन और भारतीय कला का मिश्रण है, जिसमें बुद्ध की मूर्तियों को यूनानी देवताओं (जैसे अपोलो) की शैली में बनाया गया है।"
    },
    {
        question: "हिंद-यवन शासकों ने सबसे पहले किस धातु के मिश्रित सिक्के जारी किए?",
        answers: shuffle([
            { text: "चांदी और तांबा", correct: false },
            { text: "सोना और चांदी", correct: false },
            { text: "निकेल और तांबा", correct: true },
            { text: "शीशा और तांबा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुछ हिंद-यवन शासकों ने निकेल और तांबे के मिश्रित धातु के सिक्के भी जारी किए थे, जो भारत में एक नई प्रथा थी।"
    },
    {
        question: "किस हिंद-यवन शासक ने अपने सिक्कों पर हाथी की टोपी का चित्रण करवाया था, जो उसके भारतीय क्षेत्र पर राज का प्रतीक था?",
        answers: shuffle([
            { text: "मिनांडर", correct: false },
            { text: "डेमेट्रियस I", correct: true },
            { text: "अपोलोडोटस", correct: false },
            { text: "यूक्रेटाइड्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डेमेट्रियस I के सिक्कों पर हाथी की टोपी का चित्रण मिलता है, जो उसके भारतीय विजय का प्रतीक था।"
    },
    {
        question: "हिंद-यवन शासकों द्वारा अपनाई गई कौन सी धार्मिक प्रथा भारतीय परंपराओं से प्रभावित थी?",
        answers: shuffle([
            { text: "केवल यूनानी देवताओं की पूजा", correct: false },
            { text: "केवल बौद्ध धर्म का पालन", correct: false },
            { text: "यूनानी और भारतीय देवताओं का मिश्रण", correct: true },
            { text: "केवल जैन धर्म का पालन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों के सिक्कों पर यूनानी देवताओं के साथ-साथ भारतीय देवताओं (जैसे कृष्ण) के चित्र भी मिलते हैं, जो सांस्कृतिक मिश्रण को दर्शाता है।"
    },
    {
        question: "स्ट्रैबो के अनुसार, यूनानियों ने गंगा नदी और किस शहर तक आक्रमण किए?",
        answers: shuffle([
            { text: "कन्नौज", correct: false },
            { text: "पाटलिपुत्र", correct: true },
            { text: "काशी", correct: false },
            { text: "मथुरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूनानी इतिहासकार स्ट्रैबो के अनुसार, यूनानी शासकों ने गंगा नदी के किनारे पाटलिपुत्र तक आक्रमण किया था।"
    },
    {
        question: "हिंद-यवन शासकों ने भारतीय ज्योतिष में किस अवधारणा का परिचय दिया?",
        answers: shuffle([
            { text: "सात दिनों का सप्ताह", correct: true },
            { text: "ज्योतिषीय संकेत", correct: false },
            { text: "ग्रहों की गति", correct: false },
            { text: "उपरोक्त में से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों ने भारत में सप्ताह में सात दिनों की अवधारणा का प्रचलन किया।"
    },
    {
        question: "हिंद-यवन साम्राज्य में कला और मूर्तिकला का प्रमुख केंद्र कौन सा था?",
        answers: shuffle([
            { text: "अमरावती", correct: false },
            { text: "मथुरा", correct: false },
            { text: "गंधार", correct: true },
            { text: "सारनाथ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गंधार क्षेत्र हिंद-यवन शासन के दौरान हेलेनिस्टिक कला और भारतीय कला के संगम का प्रमुख केंद्र बन गया था।"
    },
    {
        question: "हिंद-यवन शासकों के आगमन से पहले भारत पर किस साम्राज्य का शासन था?",
        answers: shuffle([
            { text: "गुप्त साम्राज्य", correct: false },
            { text: "कुषाण साम्राज्य", correct: false },
            { text: "मौर्योत्तर काल", correct: true },
            { text: "शुंग साम्राज्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन आक्रमण मौर्य साम्राज्य के पतन के बाद मौर्योत्तर काल में हुए, जब भारत में कोई केंद्रीय शक्ति नहीं थी।"
    },
    {
        question: "किस शासक को \"द ग्रेट\" (महान) की उपाधि दी गई थी, जिसने सेल्यूकस के विशाल साम्राज्य को अक्षुण्ण बनाए रखा?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: false },
            { text: "एंटीओकस I", correct: false },
            { text: "यूथीडेमस", correct: false },
            { text: "एंटीओकस III", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंटीओकस III ने सेल्यूकस द्वारा स्थापित विशाल साम्राज्य को अक्षुण्ण बनाए रखा और उसे 'महान' की उपाधि दी गई थी।"
    },
    {
        question: "'मिलिंद पन्हो' मूल रूप से किस भाषा में लिखा गया था?",
        answers: shuffle([
            { text: "संस्कृत", correct: false },
            { text: "प्राकृत", correct: false },
            { text: "पाली", correct: true },
            { text: "यूनानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मिलिंद पन्हो' मूलतः पाली भाषा में लिखा गया एक बौद्ध ग्रंथ है।"
    },
    {
        question: "हिंद-यवन शासकों ने अपने सिक्कों पर किस यूनानी देवता का चित्र अंकित नहीं करवाया?",
        answers: shuffle([
            { text: "अपोलो", correct: false },
            { text: "ज़्यूस", correct: false },
            { text: "पोसाइडन", correct: true },
            { text: "एथेना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों ने अक्सर अपने सिक्कों पर ज़्यूस, अपोलो और एथेना जैसे यूनानी देवताओं का चित्रण करवाया, लेकिन पोसाइडन का चित्रण दुर्लभ है।"
    },
    {
        question: "हिंद-यवन शासकों के शासन में, भारतीय प्रशासन पर क्या प्रभाव पड़ा?",
        answers: shuffle([
            { text: "पूरी तरह से यूनानी प्रशासन प्रणाली अपनाई गई", correct: false },
            { text: "प्रशासनिक प्रथाओं का कोई मिश्रण नहीं था", correct: false },
            { text: "यूनानी और स्थानीय प्रशासनिक प्रथाओं का मिश्रण हुआ", correct: true },
            { text: "केवल भारतीय प्रशासन प्रणाली जारी रही", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों ने यूनानी और स्थानीय प्रशासनिक प्रथाओं को मिलाकर एक एकीकृत शासन प्रणाली स्थापित की।"
    },
    {
        question: "'गार्गी संहिता' में किस यवन आक्रमण का उल्लेख मिलता है?",
        answers: shuffle([
            { text: "मिनांडर का आक्रमण", correct: false },
            { text: "डेमेट्रियस का आक्रमण", correct: true },
            { text: "यूक्रेटाइड्स का आक्रमण", correct: false },
            { text: "सभी यवन आक्रमणों का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गार्गी संहिता' में यवनों के आक्रमण का उल्लेख है, जो संभवतः डेमेट्रियस के नेतृत्व में हुआ था।"
    },
    {
        question: "किस ग्रंथ में यवन शासक मिनांडर को \"राजा मिलिंद\" के रूप में वर्णित किया गया है?",
        answers: shuffle([
            { text: "महाभाष्य", correct: false },
            { text: "अष्टाध्यायी", correct: false },
            { text: "मिलिंद पन्हो", correct: true },
            { text: "मालविकाग्निमित्रम्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मिलिंद पन्हो' में राजा मिनांडर को 'मिलिंद' नाम से संबोधित किया गया है।"
    },
    {
        question: "हिंद-यवन शासकों के शासनकाल के दौरान व्यापार और वाणिज्य पर क्या प्रभाव पड़ा?",
        answers: shuffle([
            { text: "व्यापार पूरी तरह से ठप हो गया", correct: false },
            { text: "व्यापार केवल भारत के भीतर तक सीमित रहा", correct: false },
            { text: "यूनानी और भारतीय व्यापारियों के बीच व्यापार को बढ़ावा मिला", correct: true },
            { text: "केवल समुद्री व्यापार में वृद्धि हुई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों ने व्यापार मार्गों और शहरी केंद्रों के विकास में योगदान दिया, जिससे यूनानी और भारतीय व्यापारियों के बीच आर्थिक आदान-प्रदान को बढ़ावा मिला।"
    },
    {
        question: "हिंद-यवन शासकों के सिक्के बनाने की कला में किस देश की कला का प्रभाव था?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "रोम", correct: false },
            { text: "यूनान", correct: true },
            { text: "फारस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों के सिक्कों पर यूनानी कला का स्पष्ट प्रभाव दिखाई देता है, जिसमें शासकों और देवताओं के यथार्थवादी चित्र अंकित होते थे।"
    },
    {
        question: "किस हिंद-यवन शासक के सिक्कों पर \"धर्मचक्र\" और \"हाथी\" दोनों के प्रतीक मिलते हैं?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: false },
            { text: "मिनांडर", correct: false },
            { text: "अपोलोडोटस I", correct: true },
            { text: "यूथीडेमस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपोलोडोटस I के सिक्कों पर धर्मचक्र और हाथी दोनों के प्रतीक मिलते हैं, जो उसके बौद्ध और भारतीय प्रभाव को दर्शाते हैं।"
    },
    {
        question: "हिंद-यवन शासकों ने भारत के पश्चिमोत्तर सीमा प्रांत में यूनान की प्राचीन कला चलाई, जिसे क्या कहते हैं?",
        answers: shuffle([
            { text: "हेलेनिस्टिक आर्ट", correct: true },
            { text: "मथुरा कला", correct: false },
            { text: "गुप्त कला", correct: false },
            { text: "उपरोक्त में से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों ने भारत के पश्चिमोत्तर सीमा प्रांत में यूनानी कला को बढ़ावा दिया, जिसे हेलेनिस्टिक आर्ट के नाम से जाना जाता है।"
    },
    {
        question: "किस शासक को 'भारत के यवन राज्य' का संस्थापक भी माना जाता है, जिसने 180 ईसा पूर्व में आक्रमण किया था?",
        answers: shuffle([
            { text: "मिनांडर", correct: false },
            { text: "डेमेट्रियस I", correct: true },
            { text: "यूक्रेटाइड्स", correct: false },
            { text: "स्ट्रेटो II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डेमेट्रियस I को भारत में हिंद-यवन शासन का संस्थापक माना जाता है, जिसने लगभग 180 ईसा पूर्व में भारत पर आक्रमण किया था।"
    },
    {
        question: "हिंद-यवन साम्राज्य में किस शासक ने सबसे पहले भारतीय लिपि और प्रतीक चिन्हों का प्रयोग अपने सिक्कों पर किया?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: false },
            { text: "मिनांडर", correct: false },
            { text: "अपोलोडोटस I", correct: true },
            { text: "यूक्रेटाइड्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपोलोडोटस I, जो डेमेट्रियस के बाद शासक बना, उसने अपने सिक्कों पर भारतीय लिपि और प्रतीकों, जैसे कि हाथी और बैल, का प्रयोग किया।"
    },
    {
        question: "किस शासक को \"द ग्रेट\" (महान) की उपाधि दी गई थी, जिसने सेल्यूकस के विशाल साम्राज्य को अक्षुण्ण बनाए रखा?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: false },
            { text: "एंटीओकस I", correct: false },
            { text: "यूथीडेमस", correct: false },
            { text: "एंटीओकस III", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंटीओकस III ने सेल्यूकस द्वारा स्थापित विशाल साम्राज्य को अक्षुण्ण बनाए रखा और उसे 'महान' की उपाधि दी गई थी।"
    },
    {
        question: "'मिलिंद पन्हो' मूल रूप से किस भाषा में लिखा गया था?",
        answers: shuffle([
            { text: "संस्कृत", correct: false },
            { text: "प्राकृत", correct: false },
            { text: "पाली", correct: true },
            { text: "यूनानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मिलिंद पन्हो' मूलतः पाली भाषा में लिखा गया एक बौद्ध ग्रंथ है।"
    },
    {
        question: "हिंद-यवन शासकों ने अपने सिक्कों पर किस यूनानी देवता का चित्र अंकित नहीं करवाया?",
        answers: shuffle([
            { text: "अपोलो", correct: false },
            { text: "ज़्यूस", correct: false },
            { text: "पोसाइडन", correct: true },
            { text: "एथेना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों ने अक्सर अपने सिक्कों पर ज़्यूस, अपोलो और एथेना जैसे यूनानी देवताओं का चित्रण करवाया, लेकिन पोसाइडन का चित्रण दुर्लभ है।"
    },
    {
        question: "हिंद-यवन शासकों के शासन में, भारतीय प्रशासन पर क्या प्रभाव पड़ा?",
        answers: shuffle([
            { text: "पूरी तरह से यूनानी प्रशासन प्रणाली अपनाई गई", correct: false },
            { text: "प्रशासनिक प्रथाओं का कोई मिश्रण नहीं था", correct: false },
            { text: "यूनानी और स्थानीय प्रशासनिक प्रथाओं का मिश्रण हुआ", correct: true },
            { text: "केवल भारतीय प्रशासन प्रणाली जारी रही", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों ने यूनानी और स्थानीय प्रशासनिक प्रथाओं को मिलाकर एक एकीकृत शासन प्रणाली स्थापित की।"
    },
    {
        question: "'गार्गी संहिता' में किस यवन आक्रमण का उल्लेख मिलता है?",
        answers: shuffle([
            { text: "मिनांडर का आक्रमण", correct: false },
            { text: "डेमेट्रियस का आक्रमण", correct: true },
            { text: "यूक्रेटाइड्स का आक्रमण", correct: false },
            { text: "सभी यवन आक्रमणों का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गार्गी संहिता' में यवनों के आक्रमण का उल्लेख है, जो संभवतः डेमेट्रियस के नेतृत्व में हुआ था।"
    },
    {
        question: "किस ग्रंथ में यवन शासक मिनांडर को \"राजा मिलिंद\" के रूप में वर्णित किया गया है?",
        answers: shuffle([
            { text: "महाभाष्य", correct: false },
            { text: "अष्टाध्यायी", correct: false },
            { text: "मिलिंद पन्हो", correct: true },
            { text: "मालविकाग्निमित्रम्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मिलिंद पन्हो' में राजा मिनांडर को 'मिलिंद' नाम से संबोधित किया गया है।"
    },
    {
        question: "हिंद-यवन शासकों के शासनकाल के दौरान व्यापार और वाणिज्य पर क्या प्रभाव पड़ा?",
        answers: shuffle([
            { text: "व्यापार पूरी तरह से ठप हो गया", correct: false },
            { text: "व्यापार केवल भारत के भीतर तक सीमित रहा", correct: false },
            { text: "यूनानी और भारतीय व्यापारियों के बीच व्यापार को बढ़ावा मिला", correct: true },
            { text: "केवल समुद्री व्यापार में वृद्धि हुई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों ने व्यापार मार्गों और शहरी केंद्रों के विकास में योगदान दिया, जिससे यूनानी और भारतीय व्यापारियों के बीच आर्थिक आदान-प्रदान को बढ़ावा मिला।"
    },
    {
        question: "हिंद-यवन शासकों के सिक्के बनाने की कला में किस देश की कला का प्रभाव था?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "रोम", correct: false },
            { text: "यूनान", correct: true },
            { text: "फारस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों के सिक्कों पर यूनानी कला का स्पष्ट प्रभाव दिखाई देता है, जिसमें शासकों और देवताओं के यथार्थवादी चित्र अंकित होते थे।"
    },
    {
        question: "किस हिंद-यवन शासक के सिक्कों पर \"धर्मचक्र\" और \"हाथी\" दोनों के प्रतीक मिलते हैं?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: false },
            { text: "मिनांडर", correct: false },
            { text: "अपोलोडोटस I", correct: true },
            { text: "यूथीडेमस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपोलोडोटस I के सिक्कों पर धर्मचक्र और हाथी दोनों के प्रतीक मिलते हैं, जो उसके बौद्ध और भारतीय प्रभाव को दर्शाते हैं।"
    },
    {
        question: "हिंद-यवन शासकों ने भारत के पश्चिमोत्तर सीमा प्रांत में यूनान की प्राचीन कला चलाई, जिसे क्या कहते हैं?",
        answers: shuffle([
            { text: "हेलेनिस्टिक आर्ट", correct: true },
            { text: "मथुरा कला", correct: false },
            { text: "गुप्त कला", correct: false },
            { text: "उपरोक्त में से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों ने भारत के पश्चिमोत्तर सीमा प्रांत में यूनानी कला को बढ़ावा दिया, जिसे हेलेनिस्टिक आर्ट के नाम से जाना जाता है।"
    },
    {
        question: "किस शासक को 'भारत के यवन राज्य' का संस्थापक भी माना जाता है, जिसने 180 ईसा पूर्व में आक्रमण किया था?",
        answers: shuffle([
            { text: "मिनांडर", correct: false },
            { text: "डेमेट्रियस I", correct: true },
            { text: "यूक्रेटाइड्स", correct: false },
            { text: "स्ट्रेटो II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डेमेट्रियस I को भारत में हिंद-यवन शासन का संस्थापक माना जाता है, जिसने लगभग 180 ईसा पूर्व में भारत पर आक्रमण किया था।"
    },
    {
        question: "हिंद-यवन शासकों के पतन के बाद भारत में कौन से शासक आए जिन्होंने हिंद-यवन कला और संस्कृति के तत्वों को अपनाया?",
        answers: shuffle([
            { text: "गुप्त", correct: false },
            { text: "मौर्य", correct: false },
            { text: "कुषाण", correct: true },
            { text: "सातवाहन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाणों ने हिंद-यवन शासकों के पतन के बाद उनके क्षेत्रों पर शासन किया और गांधार कला जैसी उनकी कई सांस्कृतिक और कलात्मक परंपराओं को जारी रखा।"
    },
    {
        question: "किस शासक के सिक्के भड़ोच के बाजारों में खूब चलते थे, जैसा कि 'पेरिप्लस ऑफ द एरिथ्रियन सी' में उल्लेख है?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: false },
            { text: "मिनांडर", correct: true },
            { text: "अपोलोडोटस", correct: false },
            { text: "स्ट्रेटो I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्राचीन रोमन-ग्रीक ग्रंथ 'पेरिप्लस ऑफ द एरिथ्रियन सी' में उल्लेख है कि मिनांडर के सिक्के पश्चिमी भारत के भड़ोच के बंदरगाह पर भी व्यापार में इस्तेमाल होते थे।"
    },
    {
        question: "हिंद-यवन शासकों के सिक्के मुख्य रूप से किस प्रकार के थे?",
        answers: shuffle([
            { text: "केवल वृत्ताकार", correct: false },
            { text: "केवल चौकोर", correct: false },
            { text: "वृत्ताकार और चौकोर दोनों", correct: true },
            { text: "केवल आयताकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों ने वृत्ताकार (यूनानी शैली में) और चौकोर (भारतीय शैली में) दोनों प्रकार के सिक्के जारी किए।"
    },
    {
        question: "पतंजलि के 'महाभाष्य' में किस यवन आक्रमण का उल्लेख मिलता है?",
        answers: shuffle([
            { text: "डेमेट्रियस का मथुरा पर आक्रमण", correct: false },
            { text: "यवनों का अयोध्या में साकेत और चित्तौड़ के निकट माध्यमिका पर आक्रमण", correct: true },
            { text: "मिनांडर का पाटलिपुत्र पर आक्रमण", correct: false },
            { text: "यूक्रेटाइड्स का तक्षशिला पर आक्रमण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पतंजलि के महाभाष्य में इस बात का उल्लेख है कि यवनों ने अवध में साकेत और राजस्थान में चित्तौड़ के निकट माध्यमिका पर घेरा डाला था।"
    },
    {
        question: "हिंद-यवन शासकों ने भारतीय नाट्यकला में किस नए तत्व का योगदान दिया?",
        answers: shuffle([
            { text: "संगीत", correct: false },
            { text: "नृत्य", correct: false },
            { text: "मंच पर पर्दा (यवनिका)", correct: true },
            { text: "वेशभूषा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूनानी लोग भारतीय नाट्यकला में पर्दे का प्रचलन लाए, जिसे 'यवनिका' कहा जाता है।"
    },
    {
        question: "बैक्ट्रिया से भारत पर आक्रमण करने वाला पहला शासक कौन था?",
        answers: shuffle([
            { text: "सेल्यूकस निकेटर", correct: false },
            { text: "डेमेट्रियस", correct: true },
            { text: "यूक्रेटाइड्स", correct: false },
            { text: "एंटीओकस III", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैक्ट्रिया के शासक डेमेट्रियस ने लगभग 190 ईसा पूर्व में भारत पर आक्रमण किया था।"
    },
    {
        question: "हिंद-यवन शासकों के सिक्कों पर अक्सर किन भारतीय देवताओं के प्रतीक पाए जाते हैं?",
        answers: shuffle([
            { text: "शिव", correct: false },
            { text: "विष्णु", correct: false },
            { text: "बुद्ध और बौद्ध प्रतीक", correct: true },
            { text: "महावीर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों, विशेषकर मिनांडर, ने बौद्ध धर्म को अपनाया और उनके सिक्कों पर बुद्ध और बौद्ध धर्म के प्रतीकों, जैसे कि धर्मचक्र और कमल, के चित्र अंकित थे।"
    },
    {
        question: "हिंद-यवन शासकों के शासनकाल में भारतीय और यूनानी संस्कृतियों के बीच हुए मिश्रण को क्या कहते हैं?",
        answers: shuffle([
            { text: "संगम", correct: false },
            { text: "समन्वय", correct: false },
            { text: "सम्मिलन", correct: false },
            { text: "हेलेनाइजेशन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय और यूनानी संस्कृतियों के मिश्रण की इस प्रक्रिया को हेलेनाइजेशन कहते हैं।"
    },
    {
        question: "किस शासक ने अपनी राजधानी तक्षशिला में स्थापित की, जबकि डेमेट्रियस ने साकल को अपनी राजधानी बनाया?",
        answers: shuffle([
            { text: "अपोलोडोटस", correct: false },
            { text: "मिनांडर", correct: false },
            { text: "स्ट्रेटो II", correct: false },
            { text: "यूक्रेटाइड्स", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब डेमेट्रियस भारत में आक्रमण कर रहा था, तब यूक्रेटाइड्स ने बैक्ट्रिया में विद्रोह करके अपना स्वतंत्र राज्य स्थापित किया और तक्षशिला को अपनी राजधानी बनाया।"
    },
    {
        question: "'मिलिंद पन्हो' में किस शासक को \"महान और बुद्धिमान\" राजा के रूप में वर्णित किया गया है?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: false },
            { text: "मिनांडर", correct: true },
            { text: "यूथीडेमस", correct: false },
            { text: "अपोलोडोटस I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मिलिंद पन्हो' में राजा मिनांडर को एक बुद्धिमान, विद्वान और योग्य राजा के रूप में वर्णित किया गया है।"
    },
    {
        question: "हिंद-यवन शासन के दौरान, कौन से दो प्रमुख केंद्र राजनीतिक और सांस्कृतिक गतिविधियों के लिए महत्वपूर्ण थे?",
        answers: shuffle([
            { text: "मथुरा और पाटलिपुत्र", correct: false },
            { text: "शाकल और तक्षशिला", correct: true },
            { text: "अयोध्या और वाराणसी", correct: false },
            { text: "उज्जैन और कन्नौज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शाकल (मिनांडर की राजधानी) और तक्षशिला (यूक्रेटाइड्स की राजधानी) हिंद-यवन काल के दो सबसे महत्वपूर्ण राजनीतिक और सांस्कृतिक केंद्र थे।"
    },
    {
        question: "किस ग्रंथ में यूनानी आक्रमण और शुंग शासक पुष्यमित्र द्वारा उन्हें रोकने का उल्लेख मिलता है?",
        answers: shuffle([
            { text: "गार्गी संहिता", correct: false },
            { text: "महाभाष्य", correct: false },
            { text: "मालविकाग्निमित्रम्", correct: true },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालिदास के नाटक 'मालविकाग्निमित्रम्' में शुंग शासक पुष्यमित्र और यूनानियों के बीच हुए युद्ध का उल्लेख मिलता है।"
    },
    {
        question: "हिंद-यवन शासकों के सिक्कों पर अक्सर किस भाषा में द्विभाषी शिलालेख होते थे?",
        answers: shuffle([
            { text: "यूनानी और ब्राह्मी", correct: false },
            { text: "यूनानी और प्राकृत", correct: false },
            { text: "यूनानी और खरोष्ठी", correct: true },
            { text: "यूनानी और संस्कृत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों ने मुख्य रूप से यूनानी और खरोष्ठी लिपि का प्रयोग अपने द्विभाषी सिक्कों पर किया।"
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