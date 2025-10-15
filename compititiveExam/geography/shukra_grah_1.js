const questions = [
    {
        topHeading: "शुक्र ग्रह पर आधारित 50 MCQs, (quiz_no.)"
    },
    {
        question: "सौरमंडल का सबसे गर्म ग्रह कौन सा है?",
        answers: shuffle([
            { text: "बुध", correct: false },
            { text: "शुक्र", correct: true },
            { text: "मंगल", correct: false },
            { text: "बृहस्पति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र का घना कार्बन डाइऑक्साइड युक्त वायुमंडल एक अनियंत्रित ग्रीनहाउस प्रभाव पैदा करता है, जिससे इसकी सतह का तापमान 460 डिग्री सेल्सियस से भी अधिक हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ग्रह को 'पृथ्वी की जुड़वां बहन' के रूप में जाना जाता है?",
        answers: shuffle([
            { text: "मंगल", correct: false },
            { text: "बुध", correct: false },
            { text: "शुक्र", correct: true },
            { text: "शनि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र का आकार, द्रव्यमान और घनत्व पृथ्वी के लगभग बराबर है, इसी समानता के कारण इसे 'पृथ्वी की जुड़वां बहन' कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'भोर का तारा' (Morning Star) और 'सांझ का तारा' (Evening Star) किस ग्रह को कहा जाता है?",
        answers: shuffle([
            { text: "मंगल", correct: false },
            { text: "बुध", correct: false },
            { text: "बृहस्पति", correct: false },
            { text: "शुक्र", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र ग्रह सूर्योदय से पहले पूर्व में और सूर्यास्त के बाद पश्चिम में आकाश में आसानी से देखा जा सकता है, इसलिए इसे यह उपनाम दिया गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शुक्र ग्रह के वायुमंडल में कौन सी गैस सर्वाधिक मात्रा में पाई जाती है?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: false },
            { text: "नाइट्रोजन", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: true },
            { text: "मीथेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र का वायुमंडल लगभग 96.5% कार्बन डाइऑक्साइड से बना है, जो इसे सौरमंडल का सबसे गर्म ग्रह बनाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौरमंडल का कौन सा ग्रह अपनी धुरी पर पूर्व से पश्चिम की ओर घूमता है?",
        answers: shuffle([
            { text: "पृथ्वी", correct: false },
            { text: "मंगल", correct: false },
            { text: "शुक्र", correct: true },
            { text: "बृहस्पति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र (और अरुण) की घूर्णन दिशा बाकी ग्रहों के विपरीत है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस उल्टी गति को 'प्रतिगामी घूर्णन' कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शुक्र ग्रह के बादलों का निर्माण मुख्य रूप से किससे हुआ है?",
        answers: shuffle([
            { text: "जल वाष्प", correct: false },
            { text: "अमोनिया क्रिस्टल", correct: false },
            { text: "सल्फ्यूरिक एसिड", correct: true },
            { text: "मीथेन बर्फ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र के घने बादल सल्फ्यूरिक एसिड (गंधक का अम्ल) की बूंदों से बने होते हैं, जो अत्यंत संक्षारक होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ग्रह का एक दिन उसके एक वर्ष से भी लंबा होता है?",
        answers: shuffle([
            { text: "बुध", correct: false },
            { text: "पृथ्वी", correct: false },
            { text: "मंगल", correct: false },
            { text: "शुक्र", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र को अपनी धुरी पर एक चक्कर लगाने में 243 पृथ्वी दिवस लगते हैं, जबकि सूर्य की एक परिक्रमा पूरी करने में केवल 225 पृथ्वी दिवस लगते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य से दूरी के क्रम में शुक्र ग्रह का स्थान कौन सा है?",
        answers: shuffle([
            { text: "पहला", correct: false },
            { text: "दूसरा", correct: true },
            { text: "तीसरा", correct: false },
            { text: "चौथा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य से दूरी का क्रम है: बुध, शुक्र, पृथ्वी, मंगल, बृहस्पति, शनि, अरुण और वरुण।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शुक्र ग्रह के कुल कितने प्राकृतिक उपग्रह (चंद्रमा) हैं?",
        answers: shuffle([
            { text: "एक", correct: false },
            { text: "दो", correct: false },
            { text: "चार", correct: false },
            { text: "शून्य", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुध और शुक्र सौरमंडल के ऐसे दो ग्रह हैं जिनका कोई भी ज्ञात प्राकृतिक उपग्रह नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शुक्र ग्रह की सतह पर वायुमंडलीय दबाव पृथ्वी की तुलना में कितना है?",
        answers: shuffle([
            { text: "पृथ्वी के बराबर", correct: false },
            { text: "पृथ्वी से 10 गुना अधिक", correct: false },
            { text: "पृथ्वी से 92 गुना अधिक", correct: true },
            { text: "पृथ्वी से कम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र की सतह पर अत्यधिक घना वायुमंडल है, जिससे वहां का दबाव पृथ्वी के समुद्र में 900 मीटर नीचे के दबाव के बराबर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "निम्नलिखित में से कौन सा मिशन विशेष रूप से शुक्र ग्रह के अध्ययन के लिए भेजा गया था?",
        answers: shuffle([
            { text: "क्यूरियोसिटी", correct: false },
            { text: "जूनो", correct: false },
            { text: "मैगलन", correct: true },
            { text: "वोयेजर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नासा के मैगलन अंतरिक्ष यान ने 1990 से 1994 तक रडार का उपयोग करके शुक्र की सतह का विस्तृत नक्शा तैयार किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शुक्र ग्रह का नामकरण किस आधार पर किया गया है?",
        answers: shuffle([
            { text: "रोमन युद्ध देवता", correct: false },
            { text: "रोमन प्रेम और सौंदर्य की देवी", correct: true },
            { text: "रोमन कृषि देवता", correct: false },
            { text: "ग्रीक आकाश देवता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आकाश में इसकी सुंदरता और चमक के कारण, इसका नाम प्रेम की रोमन देवी 'वीनस' के नाम पर रखा गया।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शुक्र ग्रह का अक्षीय झुकाव कितना है, जिसके कारण वहां ऋतुएं नहीं होतीं?",
        answers: shuffle([
            { text: "23.5 डिग्री", correct: false },
            { text: "98 डिग्री", correct: false },
            { text: "3 डिग्री", correct: true },
            { text: "25 डिग्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र का अक्षीय झुकाव बहुत कम (लगभग 3 डिग्री) है, जिसके कारण इसके किसी भी हिस्से पर सूर्य की किरणों के कोण में कोई खास बदलाव नहीं होता और वहां मौसम लगभग एक जैसा रहता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शुक्र ग्रह की सतह किस प्रकार की है?",
        answers: shuffle([
            { text: "बर्फीली और चिकनी", correct: false },
            { text: "तरल और गैसीय", correct: false },
            { text: "शुष्क, रेगिस्तानी और ज्वालामुखीय चट्टानों से युक्त", correct: true },
            { text: "पानी के महासागरों से ढकी हुई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र की सतह विशाल ज्वालामुखियों, लावा के मैदानों और पहाड़ों से भरी हुई है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस अंतरिक्ष यान ने सबसे पहले शुक्र ग्रह का सफलतापूर्वक दौरा (फ्लाई-बाई) किया था?",
        answers: shuffle([
            { text: "वेनेरा 1", correct: false },
            { text: "स्पुतनिक 1", correct: false },
            { text: "मैरिनर 2", correct: true },
            { text: "पायनियर 1", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1962 में नासा का मैरिनर 2 अंतरिक्ष यान किसी भी ग्रह के पास से सफलतापूर्वक गुजरने वाला पहला मिशन बना।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शुक्र ग्रह की सतह पर उतरने वाला पहला अंतरिक्ष यान कौन सा था?",
        answers: shuffle([
            { text: "मैरिनर 10", correct: false },
            { text: "वेनेरा 7", correct: true },
            { text: "वाइकिंग 1", correct: false },
            { text: "पायनियर वीनस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1970 में सोवियत संघ का वेनेरा 7 किसी दूसरे ग्रह की सतह पर सफलतापूर्वक उतरने और वहां से डेटा भेजने वाला पहला अंतरिक्ष यान था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शुक्र ग्रह इतना चमकीला क्यों दिखाई देता है?",
        answers: shuffle([
            { text: "इसकी सतह बर्फीली है", correct: false },
            { text: "यह पृथ्वी के बहुत निकट है", correct: false },
            { text: "इसके घने बादल सूर्य के प्रकाश का अधिकांश भाग परावर्तित कर देते हैं", correct: true },
            { text: "यह स्वयं प्रकाश उत्सर्जित करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र के सल्फ्यूरिक एसिड के बादल एक विशाल दर्पण की तरह काम करते हैं और लगभग 70% सूर्य के प्रकाश को वापस अंतरिक्ष में भेज देते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शुक्र ग्रह की परिक्रमण अवधि (एक वर्ष) कितने पृथ्वी दिवस के बराबर है?",
        answers: shuffle([
            { text: "88 दिन", correct: false },
            { text: "225 दिन", correct: true },
            { text: "365 दिन", correct: false },
            { text: "687 दिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र सूर्य के चारों ओर अपना एक चक्कर लगभग 225 पृथ्वी दिवस में पूरा करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शुक्र ग्रह पर स्थित सबसे ऊंचे पर्वत का क्या नाम है?",
        answers: shuffle([
            { text: "ओलंपस मॉन्स", correct: false },
            { text: "मौना केआ", correct: false },
            { text: "माउंट एवरेस्ट", correct: false },
            { text: "मैक्सवेल मोंटेस", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मैक्सवेल मोंटेस शुक्र के 'इश्तार टेरा' नामक पठार पर स्थित है और यह माउंट एवरेस्ट से भी ऊंचा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "\"अनियंत्रित ग्रीनहाउस प्रभाव\" (Runaway Greenhouse Effect) की घटना किस ग्रह से संबंधित है?",
        answers: shuffle([
            { text: "पृथ्वी", correct: false },
            { text: "मंगल", correct: false },
            { text: "शुक्र", correct: true },
            { text: "बृहस्पति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस प्रक्रिया में, वायुमंडल में गर्मी फंसती जाती है, जिससे सतह का तापमान लगातार बढ़ता रहता है जब तक कि महासागर (यदि मौजूद हों) उबल न जाएं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शुक्र ग्रह के घूर्णन की अत्यंत धीमी गति का क्या परिणाम है?",
        answers: shuffle([
            { text: "इसका चुंबकीय क्षेत्र बहुत शक्तिशाली है", correct: false },
            { text: "इसका चुंबकीय क्षेत्र लगभग नगण्य है", correct: true },
            { text: "इस पर बहुत तेज हवाएं चलती हैं", correct: false },
            { text: "इस पर कोई वायुमंडल नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माना जाता है कि ग्रह का चुंबकीय क्षेत्र उसके कोर के घूमने से उत्पन्न होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> शुक्र के धीमे घूर्णन के कारण इसका चुंबकीय क्षेत्र पृथ्वी की तुलना में बहुत कमजोर है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शुक्र ग्रह की सतह पर मौजूद 'कोरोना' (Coronae) नामक भू-आकृतियाँ क्या हैं?",
        answers: shuffle([
            { text: "उल्कापिंडों से बने गड्ढे", correct: false },
            { text: "जमे हुए पानी की झीलें", correct: false },
            { text: "गोलाकार ज्वालामुखीय संरचनाएं", correct: true },
            { text: "ऊंचे पठार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये अनोखी संरचनाएं तब बनती हैं जब ग्रह के अंदर से गर्म मैग्मा सतह को ऊपर की ओर धकेलता है और फिर ठंडा होकर वापस बैठ जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शुक्र ग्रह का औसत घनत्व किसके समान है?",
        answers: shuffle([
            { text: "बृहस्पति", correct: false },
            { text: "शनि", correct: false },
            { text: "पृथ्वी", correct: true },
            { text: "चंद्रमा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र का औसत घनत्व 5.24 ग्राम प्रति घन सेंटीमीटर है, जो पृथ्वी के 5.51 ग्राम प्रति घन सेंटीमीटर के बहुत करीब है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ग्रह का कोई वलय (Ring) नहीं है?",
        answers: shuffle([
            { text: "शनि", correct: false },
            { text: "बृहस्पति", correct: false },
            { text: "अरुण", correct: false },
            { text: "शुक्र", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौरमंडल के सभी पार्थिव ग्रहों (बुध, शुक्र, पृथ्वी, मंगल) में से किसी के पास भी वलय प्रणाली नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शुक्र ग्रह किस प्रकार का ग्रह है?",
        answers: shuffle([
            { text: "गैसीय दानव", correct: false },
            { text: "बर्फीला दानव", correct: false },
            { text: "पार्थिव या स्थलीय ग्रह", correct: true },
            { text: "बौना ग्रह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पार्थिव ग्रह वे ग्रह होते हैं जो मुख्य रूप से सिलिकेट चट्टानों या धातुओं से बने होते हैं, जैसे बुध, शुक्र, पृथ्वी और मंगल।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शुक्र ग्रह पर एक पर्यवेक्षक को सूर्य किस दिशा में उदय होता हुआ दिखाई देगा?",
        answers: shuffle([
            { text: "पूर्व", correct: false },
            { text: "पश्चिम", correct: true },
            { text: "उत्तर", correct: false },
            { text: "दक्षिण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र के प्रतिगामी (उल्टे) घूर्णन के कारण, वहां सूर्य पश्चिम में उगता और पूर्व में अस्त होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शुक्र ग्रह के दो मुख्य महाद्वीप जैसे उच्चभूमि क्षेत्रों के क्या नाम हैं?",
        answers: shuffle([
            { text: "ओलंपस और थारिस", correct: false },
            { text: "इश्तार टेरा और एफ़्रोडाइट टेरा", correct: true },
            { text: "मारिया और हाइलैंड्स", correct: false },
            { text: "हेलस और आर्गियर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इश्तार टेरा उत्तरी गोलार्ध में और एफ़्रोडाइट टेरा भूमध्य रेखा के पास स्थित विशाल पठारी क्षेत्र हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शुक्र की सतह की आयु कितनी अनुमानित है?",
        answers: shuffle([
            { text: "लगभग 4.5 अरब वर्ष (सौर मंडल जितनी पुरानी)", correct: false },
            { text: "लगभग 1 अरब वर्ष", correct: false },
            { text: "लगभग 30-60 करोड़ वर्ष (अपेक्षाकृत युवा)", correct: true },
            { text: "लगभग 10 करोड़ वर्ष से भी कम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माना जाता है कि बड़े पैमाने पर ज्वालामुखी गतिविधि ने कुछ सौ मिलियन वर्ष पहले शुक्र की पूरी सतह को नया रूप दिया था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "निम्नलिखित में से कौन सी विशेषता शुक्र ग्रह पर नहीं पाई जाती है?",
        answers: shuffle([
            { text: "ज्वालामुखी", correct: false },
            { text: "पहाड़", correct: false },
            { text: "तरल पानी के महासागर", correct: true },
            { text: "लावा के मैदान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र की सतह का अत्यधिक तापमान पानी को तरल अवस्था में मौजूद रहने की अनुमति नहीं देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शुक्र ग्रह की कक्षा कैसी है?",
        answers: shuffle([
            { text: "सौरमंडल में सबसे अधिक अंडाकार (दीर्घवृत्ताकार)", correct: false },
            { text: "सौरमंडल में सबसे अधिक गोलाकार", correct: true },
            { text: "पृथ्वी की कक्षा के समान", correct: false },
            { text: "एक अनियमित पथ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र की कक्षा लगभग एक आदर्श वृत्त है, जो सभी ग्रहों में सबसे कम उत्केंद्रित (less eccentric) है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "यदि आप शुक्र की सतह पर खड़े होते, तो आकाश का रंग कैसा दिखाई देता?",
        answers: shuffle([
            { text: "गहरा नीला", correct: false },
            { text: "काला", correct: false },
            { text: "नारंगी-पीला", correct: true },
            { text: "हरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घना कार्बन डाइऑक्साइड वायुमंडल नीले प्रकाश को बिखेर देता है, जिससे केवल लाल और पीले रंग का प्रकाश ही सतह तक पहुंच पाता है, जिससे आकाश नारंगी रंग का दिखता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'अकिहतो' (Akatsuki) किस देश का शुक्र ऑर्बिटर मिशन है?",
        answers: shuffle([
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "रूस", correct: false },
            { text: "भारत", correct: false },
            { text: "जापान", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जापान एयरोस्पेस एक्सप्लोरेशन एजेंसी (JAXA) का अकिहतो मिशन 2015 से शुक्र के वायुमंडल और मौसम का अध्ययन कर रहा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शुक्र ग्रह का व्यास लगभग कितना है?",
        answers: shuffle([
            { text: "6,000 किलोमीटर", correct: false },
            { text: "12,104 किलोमीटर", correct: true },
            { text: "15,500 किलोमीटर", correct: false },
            { text: "21,000 किलोमीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह पृथ्वी के व्यास (12,742 किलोमीटर) से थोड़ा ही कम है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शुक्र ग्रह पर \"सुपर-रोटेशन\" (Super-rotation) की घटना का क्या अर्थ है?",
        answers: shuffle([
            { text: "ग्रह का बहुत तेजी से घूमना", correct: false },
            { text: "वायुमंडल का ग्रह की सतह से बहुत तेज गति से घूमना", correct: true },
            { text: "ग्रह का अपनी कक्षा में तेजी से घूमना", correct: false },
            { text: "उपग्रहों का तेजी से घूमना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र का ऊपरी वायुमंडल ग्रह के घूर्णन से लगभग 60 गुना तेजी से घूमता है, जिससे वहां प्रचंड हवाएं चलती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शुक्र की सतह पर क्रेटर (गड्ढे) कम क्यों हैं?",
        answers: shuffle([
            { text: "a) शुक्र पर कभी उल्कापिंड नहीं गिरते", correct: false },
            { text: "b) घना वायुमंडल अधिकांश उल्कापिंडों को सतह तक पहुंचने से पहले ही जला देता है", correct: false },
            { text: "c) ज्वालामुखी गतिविधि पुराने क्रेटरों को ढक देती है", correct:false },
            { text: "b) और c) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घना वायुमंडल छोटे उल्कापिंडों से रक्षा करता है, और ज्वालामुखी गतिविधि समय-समय पर सतह को नया रूप देकर बड़े क्रेटरों को मिटा देती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शुक्र ग्रह की आंतरिक संरचना में क्या शामिल होने की संभावना है?",
        answers: shuffle([
            { text: "एक ठोस बर्फीला कोर", correct: false },
            { text: "केवल गैस का एक गोला", correct: false },
            { text: "एक धात्विक कोर, एक चट्टानी मेंटल और एक पर्पटी", correct: true },
            { text: "एक तरल हाइड्रोजन कोर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माना जाता है कि शुक्र की आंतरिक संरचना पृथ्वी के समान है, जिसमें लोहा-निकल का एक कोर है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस कारण से शुक्र ग्रह को \"पर्दा वाला ग्रह\" (Veiled Planet) भी कहा जाता है?",
        answers: shuffle([
            { text: "इसके चारों ओर धूल का पर्दा है", correct: false },
            { text: "इसके घने, अपारदर्शी बादल इसकी सतह को छिपाए रखते हैं", correct: true },
            { text: "यह अक्सर सूर्य के पीछे छिप जाता है", correct: false },
            { text: "इसके चारों ओर एक वलय प्रणाली है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र की सतह को सीधे दूरबीन से देखना असंभव है क्योंकि सल्फ्यूरिक एसिड के घने बादल इसे पूरी तरह से ढक लेते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शुक्र पर दिन और रात के तापमान में कितना अंतर होता है?",
        answers: shuffle([
            { text: "बहुत अधिक अंतर", correct: false },
            { text: "बहुत कम या कोई अंतर नहीं", correct: true },
            { text: "केवल 10-20 डिग्री का अंतर", correct: false },
            { text: "दिन में गर्म, रात में बर्फीला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र का घना वायुमंडल एक कंबल की तरह काम करता है, जो गर्मी को ग्रह के चारों ओर समान रूप से वितरित करता है, इसलिए रात में भी सतह लगभग उतनी ही गर्म रहती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'संक्रमण' (Transit) की खगोलीय घटना क्या है, जो शुक्र से संबंधित है?",
        answers: shuffle([
            { text: "शुक्र का पृथ्वी के पीछे से गुजरना", correct: false },
            { text: "शुक्र का सूर्य और पृथ्वी के बीच से एक छोटे काले बिंदु के रूप में गुजरना", correct: true },
            { text: "शुक्र का किसी अन्य ग्रह के सामने से गुजरना", correct: false },
            { text: "शुक्र पर सूर्य ग्रहण होना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र का पारगमन एक दुर्लभ घटना है, जो जोड़ों में होती है और इन जोड़ों के बीच एक सदी से भी अधिक का अंतर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शुक्र ग्रह को पृथ्वी से देखने के लिए सबसे अच्छा समय कौन सा होता है?",
        answers: shuffle([
            { text: "आधी रात", correct: false },
            { text: "सूर्योदय से कुछ घंटे पहले या सूर्यास्त के कुछ घंटे बाद", correct: true },
            { text: "दोपहर का समय", correct: false },
            { text: "केवल सूर्य ग्रहण के दौरान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र की कक्षा पृथ्वी की कक्षा के अंदर है, इसलिए यह सूर्य से कभी भी आकाश में बहुत दूर दिखाई नहीं देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शुक्र का 'अल्बेडो' (Albedo) या परावर्तकता गुणांक कैसा है?",
        answers: shuffle([
            { text: "सौरमंडल में सबसे कम", correct: false },
            { text: "सौरमंडल में सबसे अधिक", correct: true },
            { text: "पृथ्वी के बराबर", correct: false },
            { text: "मंगल के बराबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र का अल्बेडो बहुत अधिक (लगभग 0.7) है, जिसका अर्थ है कि यह अपने ऊपर पड़ने वाले सूर्य के प्रकाश का लगभग 70% परावर्तित कर देता है, जो इसकी चमक का एक मुख्य कारण है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शुक्र ग्रह पर कौन सी भूवैज्ञानिक प्रक्रिया वर्तमान में भी सक्रिय हो सकती है?",
        answers: shuffle([
            { text: "प्लेट टेक्टोनिक्स", correct: false },
            { text: "जल अपरदन", correct: false },
            { text: "ज्वालामुखी गतिविधि", correct: true },
            { text: "ग्लेशियरों का निर्माण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाल के अध्ययनों और वायुमंडल में सल्फर डाइऑक्साइड की बदलती मात्रा से यह संकेत मिलता है कि शुक्र पर ज्वालामुखी आज भी सक्रिय हो सकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'वेरिटास' (VERITAS) और 'डेविंसी+' (DAVINCI+) किस अंतरिक्ष एजेंसी के शुक्र के लिए प्रस्तावित मिशन हैं?",
        answers: shuffle([
            { text: "इसरो (भारत)", correct: false },
            { text: "रॉसकॉसमॉस (रूस)", correct: false },
            { text: "नासा (संयुक्त राज्य अमेरिका)", correct: true },
            { text: "जाक्सा (जापान)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन दोनों मिशनों का उद्देश्य शुक्र की सतह, भूविज्ञान और वायुमंडल के बारे में हमारी समझ को बेहतर बनाना है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शुक्र की कक्षा का तल पृथ्वी की कक्षा के तल से कितना झुका हुआ है?",
        answers: shuffle([
            { text: "लगभग 0 डिग्री", correct: false },
            { text: "लगभग 3.4 डिग्री", correct: true },
            { text: "लगभग 7.1 डिग्री", correct: false },
            { text: "लगभग 10.8 डिग्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह मामूली झुकाव एक कारण है कि शुक्र का पारगमन हर बार जब वह सूर्य और पृथ्वी के बीच आता है, तब नहीं होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी के अलावा, शुक्र एकमात्र ऐसा पार्थिव ग्रह है जिसके पास...",
        answers: shuffle([
            { text: "एक पर्याप्त वायुमंडल है।", correct: true },
            { text: "ज्वालामुखी हैं।", correct: false },
            { text: "तरल पानी है।", correct: false },
            { text: "एक बड़ा चंद्रमा है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हालांकि शुक्र का वायुमंडल बहुत अलग और जहरीला है, लेकिन बुध और मंगल की तुलना में यह बहुत अधिक सघन और महत्वपूर्ण है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शुक्र ग्रह की सतह की मैपिंग के लिए रडार का उपयोग क्यों आवश्यक है?",
        answers: shuffle([
            { text: "क्योंकि शुक्र बहुत दूर है।", correct: false },
            { text: "क्योंकि शुक्र की सतह से प्रकाश परावर्तित नहीं होता है।", correct: false },
            { text: "क्योंकि घने बादल दृश्य प्रकाश में सतह को देखने से रोकते हैं।", correct: true },
            { text: "क्योंकि रडार पारंपरिक दूरबीनों से सस्ता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रडार तरंगें बादलों को भेदकर सतह तक पहुंच सकती हैं और वापस लौटकर सतह की स्थलाकृति का नक्शा बना सकती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "यदि पृथ्वी, शुक्र की कक्षा में होती तो क्या होता?",
        answers: shuffle([
            { text: "पृथ्वी पर जीवन और अधिक विकसित होता।", correct: false },
            { text: "पृथ्वी भी शुक्र की तरह एक गर्म और निर्जन ग्रह बन जाती।", correct: true },
            { text: "पृथ्वी जम जाती।", correct: false },
            { text: "कोई खास परिवर्तन नहीं होता।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य के करीब होने के कारण तापमान बढ़ता, महासागर उबल जाते और एक अनियंत्रित ग्रीनहाउस प्रभाव शुरू हो जाता।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शुक्र ग्रह का कोर (केंद्र) कैसा माना जाता है?",
        answers: shuffle([
            { text: "ठोस चट्टान का", correct: false },
            { text: "तरल और ठोस लोहे का, पृथ्वी के समान", correct: true },
            { text: "बर्फीला", correct: false },
            { text: "पूरी तरह से तरल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हालांकि इसके धीमे घूर्णन के कारण यह एक मजबूत चुंबकीय क्षेत्र उत्पन्न नहीं करता है, इसकी संरचना पृथ्वी के समान मानी जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'एस्परस' (Asperitas) बादल, जो पृथ्वी पर भी पाए जाते हैं, किस दूसरे ग्रह पर देखे गए हैं?",
        answers: shuffle([
            { text: "मंगल", correct: false },
            { text: "बृहस्पति", correct: false },
            { text: "शुक्र", correct: true },
            { text: "शनि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूरोपीय अंतरिक्ष एजेंसी के वीनस एक्सप्रेस ऑर्बिटर ने शुक्र के वायुमंडल में इन लहरदार और अशांत बादल संरचनाओं का पता लगाया था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शुक्र पर एक दिन (सौर दिवस) की लंबाई कितनी होती है?",
        answers: shuffle([
            { text: "24 घंटे", correct: false },
            { text: "243 पृथ्वी दिवस", correct: false },
            { text: "117 पृथ्वी दिवस", correct: true },
            { text: "225 पृथ्वी दिवस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र का घूर्णन इतना धीमा है और उसकी कक्षा के विपरीत है कि एक सूर्योदय से दूसरे सूर्योदय तक का समय (सौर दिवस) लगभग 117 पृथ्वी दिवस होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
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