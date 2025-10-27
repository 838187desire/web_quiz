const questions = [
    {
        topHeading: " सरल आवर्त पर आधारित 50 MCQs,part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. सरल आवर्त गति का समीकरण सामान्यतः किस फलन द्वारा दिया जाता है?",
        answers: shuffle([
            { text: "चरघातांकी फलन", correct: false },
            { text: "लघुगणकीय फलन", correct: false },
            { text: "साइन या कोसाइन फलन", correct: true },
            { text: "रैखिक फलन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सरल आवर्त गति में विस्थापन, वेग और त्वरण समय के साथ ज्यावक्रीय रूप से बदलते हैं, जिन्हें साइन या कोसाइन फलनों द्वारा दर्शाया जाता है।"
    },
    {
        question: "प्रश्न 2. सरल आवर्त गति में त्वरण विस्थापन के...",
        answers: shuffle([
            { text: "समानुपाती होता है।", correct: false },
            { text: "व्युत्क्रमानुपाती होता है।", correct: false },
            { text: "ऋणात्मक समानुपाती होता है।", correct: true },
            { text: "वर्ग के समानुपाती होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> त्वरण की दिशा हमेशा विस्थापन की दिशा के विपरीत होती है (a∝−x), जो कण को वापस माध्य स्थिति की ओर निर्देशित करती है।"
    },
    {
        question: "प्रश्न 3. दोलक की 'स्वाभाविक आवृत्ति' क्या है?",
        answers: shuffle([
            { text: "वह आवृत्ति जिस पर उसे बाहरी रूप से चलाया जाता है।", correct: false },
            { text: "वह आवृत्ति जिस पर वह अवमंदन की उपस्थिति में दोलन करता है।", correct: false },
            { text: "वह आवृत्ति जिस पर वह बिना किसी बाहरी और अवमंदन बल के स्वाभाविक रूप से दोलन करता है।", correct: true },
            { text: "अनुनाद की आवृत्ति।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह किसी भी दोलन प्रणाली का एक अंतर्निहित गुण है, जो उसके भौतिक मापदंडों पर निर्भर करता है।"
    },
    {
        question: "प्रश्न 4. एक लड़की झूले पर बैठी है। यदि एक और लड़की आकर उसके साथ बैठ जाए, तो झूले का आवर्तकाल...",
        answers: shuffle([
            { text: "बढ़ जाएगा।", correct: false },
            { text: "घट जाएगा।", correct: false },
            { text: "अपरिवर्तित रहेगा।", correct: true },
            { text: "पहले बढ़ेगा फिर घटेगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक आदर्श लोलक का आवर्तकाल द्रव्यमान पर निर्भर नहीं करता है, इसलिए दूसरी लड़की के बैठने से आवर्तकाल पर कोई प्रभाव नहीं पड़ेगा।"
    },
    {
        question: "प्रश्न 5. सरल आवर्त गति में, औसत गतिज ऊर्जा और औसत स्थितिज ऊर्जा के बीच क्या संबंध है?",
        answers: shuffle([
            { text: "औसत गतिज ऊर्जा अधिक होती है।", correct: false },
            { text: "औसत स्थितिज ऊर्जा अधिक होती है।", correct: false },
            { text: "दोनों बराबर होती हैं।", correct: true },
            { text: "यह आयाम पर निर्भर करता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक पूर्ण चक्र के दौरान, कुल ऊर्जा का आधा समय गतिज ऊर्जा के रूप में और आधा समय स्थितिज ऊर्जा के रूप में होता है, इसलिए उनकी औसत मान बराबर होते हैं।"
    },
    {
        question: "प्रश्न 6. अवमंदित दोलनों में, कौन सी राशि चरघातांकी रूप से घटती है?",
        answers: shuffle([
            { text: "आवर्तकाल", correct: false },
            { text: "आवृत्ति", correct: false },
            { text: "आयाम", correct: true },
            { text: "कला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामान्य अवमंदन मॉडल में, दोलनों का आयाम समय के साथ चरघातांकी (exponentially) रूप से कम होता जाता है।"
    },
    {
        question: "प्रश्न 7. किसी सरल लोलक की लंबाई चार गुनी कर दी जाए, तो उसका आवर्तकाल कितना हो जाएगा?",
        answers: shuffle([
            { text: "आधा", correct: false },
            { text: "दोगुना", correct: true },
            { text: "चार गुना", correct: false },
            { text: "एक-चौथाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवर्तकाल लंबाई के वर्गमूल के समानुपाती होता है (T∝√L)।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि लंबाई 4 गुनी की जाती है, तो आवर्तकाल √4=2 गुना हो जाएगा।"
    },
    {
        question: "प्रश्न 8. सरल आवर्त गति करते कण के लिए वेग-समय ग्राफ की आकृति कैसी होती है?",
        answers: shuffle([
            { text: "सीधी रेखा", correct: false },
            { text: "परवलय", correct: false },
            { text: "ज्यावक्रीय (साइन या कोसाइन वक्र)", correct: true },
            { text: "वृत्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि वेग समय के साथ ज्यावक्रीय रूप से बदलता है, इसलिए इसका ग्राफ भी एक साइन या कोसाइन वक्र होगा।"
    },
    {
        question: "प्रश्न 9. सरल आवर्त गति में, कुल ऊर्जा आयाम (A) पर कैसे निर्भर करती है?",
        answers: shuffle([
            { text: "A के समानुपाती", correct: false },
            { text: "A के व्युत्क्रमानुपाती", correct: false },
            { text: "A के वर्ग के समानुपाती", correct: true },
            { text: "A पर निर्भर नहीं करती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुल ऊर्जा E∝A² होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका मतलब है कि आयाम को दोगुना करने पर कुल ऊर्जा चार गुनी हो जाएगी।"
    },
    {
        question: "प्रश्न 10. एक कृत्रिम उपग्रह के अंदर एक सरल लोलक का आवर्तकाल कितना होगा?",
        answers: shuffle([
            { text: "शून्य", correct: false },
            { text: "2 सेकंड", correct: false },
            { text: "अनंत", correct: true },
            { text: "पृथ्वी पर उसके आवर्तकाल के बराबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उपग्रह के अंदर भारहीनता की स्थिति होती है, यानी प्रभावी गुरुत्वीय त्वरण 'g' शून्य होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि T∝1/√g, आवर्तकाल अनंत हो जाएगा, अर्थात लोलक दोलन नहीं करेगा।"
    },
    {
        question: "प्रश्न 11. सरल आवर्त गति में वेग और त्वरण के बीच कलांतर कितना होता है?",
        answers: shuffle([
            { text: "शून्य", correct: false },
            { text: "90 डिग्री", correct: true },
            { text: "180 डिग्री", correct: false },
            { text: "45 डिग्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब वेग अधिकतम (माध्य स्थिति पर) होता है, तो त्वरण शून्य होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब त्वरण अधिकतम (चरम स्थिति पर) होता है, तो वेग शून्य होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह 90 डिग्री का कलांतर दर्शाता है।"
    },
    {
        question: "प्रश्न 12. दो सरल आवर्त गतियों के अध्यारोपण का सिद्धांत किस पर लागू होता है?",
        answers: shuffle([
            { text: "केवल तरंगों पर", correct: false },
            { text: "केवल प्रकाश पर", correct: false },
            { text: "रैखिक प्रणालियों पर जहाँ हुक का नियम लागू होता है", correct: true },
            { text: "सभी प्रकार की गतियों पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अध्यारोपण का सिद्धांत उन प्रणालियों पर लागू होता है जहाँ बल विस्थापन के रैखिक रूप से संबंधित होता है, जैसे कि सरल आवर्त गति।"
    },
    {
        question: "प्रश्न 13. एक बच्चे का झूला किसका एक अच्छा उदाहरण है?",
        answers: shuffle([
            { text: "एक सरल लोलक", correct: false },
            { text: "एक स्प्रिंग-द्रव्यमान निकाय", correct: false },
            { text: "एक भौतिक लोलक", correct: true },
            { text: "एक यौगिक लोलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक सरल लोलक एक आदर्श स्थिति है जिसमें सारा द्रव्यमान एक बिंदु पर केंद्रित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> झूला एक दृढ़ पिंड है, इसलिए यह एक भौतिक लोलक (Physical Pendulum) का उदाहरण है।"
    },
    {
        question: "प्रश्न 14. दोलन और तरंग में मुख्य अंतर क्या है?",
        answers: shuffle([
            { text: "दोलन में ऊर्जा का स्थानांतरण होता है, तरंग में नहीं।", correct: false },
            { text: "तरंग में ऊर्जा का स्थानांतरण होता है, दोलन में नहीं।", correct: false },
            { text: "दोलन एक कण की गति है, जबकि तरंग कई कणों की सामूहिक गति है जो ऊर्जा का संचार करती है।", correct: true },
            { text: "कोई अंतर नहीं है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तरंगें माध्यम के कणों के दोलन के माध्यम से ऊर्जा को एक स्थान से दूसरे स्थान तक ले जाती हैं।"
    },
    {
        question: "प्रश्न 15. वाहनों में लगे शॉक अवशोषक (Shock absorbers) किस सिद्धांत पर काम करते हैं?",
        answers: shuffle([
            { text: "अनुनाद", correct: false },
            { text: "सरल आवर्त गति", correct: false },
            { text: "अवमंदित दोलन", correct: true },
            { text: "प्रणोदित दोलन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शॉक अवशोषक सड़क के झटकों से उत्पन्न दोलनों को तेजी से खत्म करने के लिए डिज़ाइन किए गए हैं, जो अवमंदन का एक उदाहरण है।"
    },
    {
        question: "प्रश्न 16. दोलन करते समय, एक सरल लोलक के धागे में तनाव कहाँ पर अधिकतम होता है?",
        answers: shuffle([
            { text: "चरम स्थितियों पर", correct: false },
            { text: "माध्य स्थिति पर", correct: true },
            { text: "हर जगह समान", correct: false },
            { text: "माध्य और चरम स्थिति के बीच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माध्य स्थिति पर, गोलक का वेग अधिकतम होता है, इसलिए आवश्यक अभिकेंद्रीय बल प्रदान करने के लिए तनाव को गुरुत्वाकर्षण बल के साथ-साथ कार्य करना पड़ता है, जिससे तनाव अधिकतम हो जाता है।"
    },
    {
        question: "प्रश्न 17. दो सरल आवर्त गतियाँ जिनके आयाम और आवृत्तियाँ समान हैं, विपरीत कला में मिलती हैं। परिणामी आयाम क्या होगा?",
        answers: shuffle([
            { text: "दोगुना", correct: false },
            { text: "आधा", correct: false },
            { text: "शून्य", correct: true },
            { text: "समान रहेगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विपरीत कला (180 डिग्री का अंतर) का अर्थ है कि जब एक कण अपनी धनात्मक चरम सीमा पर होता है, तो दूसरा ऋणात्मक पर।<br><br><i class='fa-solid fa-angles-right icon'></i> वे एक दूसरे के प्रभाव को पूरी तरह से रद्द कर देते हैं, जिससे परिणामी आयाम शून्य हो जाता है।"
    },
    {
        question: "प्रश्न 18. सरल आवर्त गति में, औसत वेग एक पूर्ण चक्र के लिए...",
        answers: shuffle([
            { text: "अधिकतम होता है।", correct: false },
            { text: "न्यूनतम होता है।", correct: false },
            { text: "शून्य होता है।", correct: true },
            { text: "आयाम पर निर्भर करता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक पूर्ण चक्र के बाद, कण अपनी प्रारंभिक स्थिति में वापस आ जाता है, इसलिए कुल विस्थापन शून्य होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> औसत वेग = कुल विस्थापन / कुल समय, इसलिए औसत वेग भी शून्य है।"
    },
    {
        question: "प्रश्न 19. एक भारहीन स्प्रिंग से लटका एक पिंड सरल आवर्त गति कर रहा है। यदि पिंड को एक ऐसे पिंड से बदल दिया जाए जिसका द्रव्यमान दोगुना हो, तो आवृत्ति...",
        answers: shuffle([
            { text: "दोगुनी हो जाएगी।", correct: false },
            { text: "आधी हो जाएगी।", correct: false },
            { text: "1/√2 गुनी हो जाएगी।", correct: true },
            { text: "√2 गुनी हो जाएगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवृत्ति आवर्तकाल की व्युत्क्रम होती है (f=1/T), और आवर्तकाल द्रव्यमान के वर्गमूल के समानुपाती होता है (T∝√m)।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, f∝1/√m। द्रव्यमान दोगुना करने पर आवृत्ति 1/√2 गुनी हो जाएगी।"
    },
    {
        question: "प्रश्न 20. यदि एक सरल लोलक पानी के अंदर दोलन करता है, तो उसका आवर्तकाल...",
        answers: shuffle([
            { text: "बढ़ जाएगा।", correct: true },
            { text: "घट जाएगा।", correct: false },
            { text: "अपरिवर्तित रहेगा।", correct: false },
            { text: "पहले बढ़ेगा फिर घटेगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पानी के उत्प्लावन बल के कारण, गोलक पर नीचे की ओर लगने वाला प्रभावी बल कम हो जाता है, जिससे प्रभावी 'g' कम हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'g' कम होने से आवर्तकाल बढ़ जाता है। साथ ही, पानी का श्यान अवमंदन भी होता है।"
    },
    {
        question: "प्रश्न 21. सरल आवर्त गति करते कण की स्थितिज ऊर्जा का सूत्र किसके समानुपाती होता है?",
        answers: shuffle([
            { text: "विस्थापन के", correct: false },
            { text: "विस्थापन के वर्ग के", correct: true },
            { text: "वेग के", correct: false },
            { text: "वेग के वर्ग के", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्थितिज ऊर्जा (U) विस्थापन (x) के वर्ग के समानुपाती होती है, U∝x²।"
    },
    {
        question: "प्रश्न 22. दोलन गति का अध्ययन महत्वपूर्ण क्यों है?",
        answers: shuffle([
            { text: "क्योंकि यह केवल घड़ियों में होता है।", correct: false },
            { text: "क्योंकि प्रकृति में कई घटनाएं (जैसे प्रकाश, ध्वनि, परमाणु कंपन) दोलन पर आधारित हैं।", correct: true },
            { text: "क्योंकि यह समझना सबसे आसान है।", correct: false },
            { text: "क्योंकि यह केवल संगीत से संबंधित है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दोलन और तरंगें भौतिकी की कई शाखाओं का आधार हैं और हमारे आसपास की दुनिया को समझने के लिए मौलिक हैं।"
    },
    {
        question: "प्रश्न 23. सरल आवर्त गति में, किस बिंदु पर बल और त्वरण की दिशा उलट जाती है?",
        answers: shuffle([
            { text: "केवल चरम स्थितियों पर", correct: false },
            { text: "केवल माध्य स्थिति पर", correct: true },
            { text: "हर समय", correct: false },
            { text: "कभी नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कण माध्य स्थिति से एक तरफ होता है, तो बल माध्य स्थिति की ओर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जैसे ही कण माध्य स्थिति को पार करता है, विस्थापन की दिशा बदल जाती है, और बल की दिशा भी उलट जाती है।"
    },
    {
        question: "प्रश्न 24. क्रांतिक अवमंदन (Critical Damping) क्या है?",
        answers: shuffle([
            { text: "वह स्थिति जहाँ दोलन बहुत तेजी से होते हैं।", correct: false },
            { text: "वह स्थिति जहाँ आयाम अनंत हो जाता है।", correct: false },
            { text: "वह अवमंदन की मात्रा जो दोलक को बिना दोलन किए सबसे कम समय में साम्यावस्था में वापस लाती है।", correct: true },
            { text: "वह स्थिति जहाँ कोई अवमंदन नहीं होता।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह दरवाजों के क्लोजर और वाहन सस्पेंशन जैसे अनुप्रयोगों में वांछनीय है।"
    },
    {
        question: "प्रश्न 25. एक सरल लोलक की लंबाई और उसके आवर्तकाल के वर्ग के बीच का ग्राफ कैसा होगा?",
        answers: shuffle([
            { text: "एक सीधी रेखा जो मूल से होकर गुजरती है।", correct: true },
            { text: "एक परवलय।", correct: false },
            { text: "एक अतिपरवलय।", correct: false },
            { text: "एक वृत्त।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि T∝√L, तो T²∝L।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक सीधी रेखा का समीकरण है जो मूल बिंदु से होकर गुजरती है।"
    },
    {
        question: "प्रश्न 26. \"दोलन\" शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "एक सीधी रेखा में चलना।", correct: false },
            { text: "एक निश्चित बिंदु के आगे-पीछे या ऊपर-नीचे गति करना।", correct: true },
            { text: "घूमना।", correct: false },
            { text: "गिरना।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दोलन का शाब्दिक अर्थ है एक माध्य स्थिति के दोनों ओर नियमित रूप से गति करना।"
    },
    {
        question: "प्रश्न 27. सरल आवर्त गति में, विस्थापन और वेग एक दूसरे से...",
        answers: shuffle([
            { text: "समान कला में होते हैं।", correct: false },
            { text: "90 डिग्री से कला में भिन्न होते हैं।", correct: true },
            { text: "180 डिग्री से कला में भिन्न होते हैं।", correct: false },
            { text: "45 डिग्री से कला में भिन्न होते हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेग विस्थापन से 90 डिग्री या π/2 रेडियन आगे होता है।"
    },
    {
        question: "प्रश्न 28. एक बच्चे के खिलौने 'यो-यो' की गति में शामिल है:",
        answers: shuffle([
            { text: "केवल रैखिक गति", correct: false },
            { text: "केवल घूर्णी गति", correct: false },
            { text: "रैखिक, घूर्णी और दोलन गति", correct: true },
            { text: "केवल सरल आवर्त गति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यो-यो नीचे जाता है (रैखिक), घूमता है (घूर्णी), और फिर ऊपर-नीचे दोलन करता है।"
    },
    {
        question: "प्रश्न 29. यदि स्प्रिंग से लटके द्रव्यमान को दोगुना कर दिया जाए, तो आवर्तकाल...",
        answers: shuffle([
            { text: "दोगुना हो जाएगा।", correct: false },
            { text: "आधा हो जाएगा।", correct: false },
            { text: "√2 गुना हो जाएगा।", correct: true },
            { text: "अपरिवर्तित रहेगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि T∝√m, द्रव्यमान को 2 गुना करने पर आवर्तकाल √2 गुना हो जाएगा।"
    },
    {
        question: "प्रश्न 30. सरल आवर्त गति में गतिज ऊर्जा की आवृत्ति दोलक की आवृत्ति से...",
        answers: shuffle([
            { text: "आधी होती है।", correct: false },
            { text: "बराबर होती है।", correct: false },
            { text: "दोगुनी होती है।", correct: true },
            { text: "चार गुनी होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक पूर्ण दोलन में, कण दो बार अपनी अधिकतम गति (और अधिकतम गतिज ऊर्जा) तक पहुँचता है (एक बार माध्य स्थिति से गुजरते समय प्रत्येक दिशा में)।"
    },
    {
        question: "प्रश्न 31. अनुनाद के कारण होने वाली एक विनाशकारी घटना का उदाहरण है:",
        answers: shuffle([
            { text: "टैकोमा नैरो ब्रिज का ढहना", correct: true },
            { text: "इंद्रधनुष का बनना", correct: false },
            { text: "सूर्य ग्रहण", correct: false },
            { text: "ज्वार-भाटा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1940 में, हवा के कारण उत्पन्न छोटे बलों की आवृत्ति पुल की स्वाभाविक आवृत्ति से मेल खा गई, जिससे अनुनाद हुआ और पुल ढह गया।"
    },
    {
        question: "प्रश्न 32. क्या सरल आवर्त गति में कण का त्वरण कभी स्थिर रहता है?",
        answers: shuffle([
            { text: "हाँ, हमेशा", correct: false },
            { text: "हाँ, केवल चरम स्थितियों पर", correct: false },
            { text: "नहीं, कभी नहीं", correct: true },
            { text: "हाँ, केवल माध्य स्थिति पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> त्वरण लगातार विस्थापन के साथ बदलता रहता है (a∝−x)।<br><br><i class='fa-solid fa-angles-right icon'></i> यह केवल माध्य स्थिति पर शून्य और चरम स्थितियों पर अधिकतम होता है, लेकिन कभी स्थिर नहीं रहता।"
    },
    {
        question: "प्रश्न 33. एक ठोस गोले और उसी द्रव्यमान और त्रिज्या के खोखले गोले को एक ही बिंदु से भौतिक लोलक के रूप में लटकाया जाता है। किसका आवर्तकाल अधिक होगा?",
        answers: shuffle([
            { text: "ठोस गोले का", correct: false },
            { text: "खोखले गोले का", correct: true },
            { text: "दोनों का बराबर होगा", correct: false },
            { text: "यह उनके रंग पर निर्भर करेगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खोखले गोले का जड़त्व आघूर्ण ठोस गोले से अधिक होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> भौतिक लोलक का आवर्तकाल जड़त्व आघूर्ण पर निर्भर करता है, जिससे खोखले गोले का आवर्तकाल अधिक होगा।"
    },
    {
        question: "प्रश्न 34. दोलनों का आयाम निर्धारित होता है:",
        answers: shuffle([
            { text: "केवल आवृत्ति द्वारा", correct: false },
            { text: "प्रणाली को दी गई प्रारंभिक ऊर्जा द्वारा", correct: true },
            { text: "केवल आवर्तकाल द्वारा", correct: false },
            { text: "गुरुत्वीय त्वरण द्वारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रणाली को शुरू में जितनी अधिक ऊर्जा दी जाती है (जितना अधिक उसे खींचा या धकेला जाता है), उसका आयाम उतना ही अधिक होगा।"
    },
    {
        question: "प्रश्न 35. सरल आवर्त गति में, जब कण अपनी माध्य स्थिति से गुजर रहा होता है, तो उस पर लगने वाला बल...",
        answers: shuffle([
            { text: "अधिकतम होता है।", correct: false },
            { text: "शून्य होता है।", correct: true },
            { text: "ऋणात्मक होता है।", correct: false },
            { text: "उसकी गति की दिशा में होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माध्य स्थिति पर विस्थापन शून्य होता है, इसलिए प्रत्यानयन बल (F=−kx) भी शून्य होता है।"
    },
    {
        question: "प्रश्न 36. दो स्प्रिंगों को श्रेणीक्रम में जोड़ा गया है। संयोजन का प्रभावी बल नियतांक...",
        answers: shuffle([
            { text: "अलग-अलग नियतांकों के योग के बराबर होगा।", correct: false },
            { text: "अलग-अलग नियतांकों से कम होगा।", correct: true },
            { text: "अलग-अलग नियतांकों के गुणनफल के बराबर होगा।", correct: false },
            { text: "अलग-अलग नियतांकों से अधिक होगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्रेणीक्रम में, संयोजन नरम हो जाता है, और प्रभावी बल नियतांक प्रत्येक व्यक्तिगत नियतांक से कम होता है।"
    },
    {
        question: "प्रश्न 37. दो स्प्रिंगों को समानांतर क्रम में जोड़ा गया है। संयोजन का प्रभावी बल नियतांक...",
        answers: shuffle([
            { text: "अलग-अलग नियतांकों के योग के बराबर होगा।", correct: true },
            { text: "अलग-अलग नियतांकों से कम होगा।", correct: false },
            { text: "अलग-अलग नियतांकों के औसत के बराबर होगा।", correct: false },
            { text: "शून्य होगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समानांतर क्रम में, संयोजन कठोर हो जाता है, और प्रभावी बल नियतांक दोनों के बल नियतांकों का सीधा योग होता है।"
    },
    {
        question: "प्रश्न 38. सरल आवर्त गति की कुल ऊर्जा किस पर निर्भर नहीं करती है?",
        answers: shuffle([
            { text: "स्प्रिंग नियतांक (k) पर", correct: false },
            { text: "आयाम (A) पर", correct: false },
            { text: "द्रव्यमान (m) पर", correct: false },
            { text: "समय (t) पर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक आदर्श SHM में, कुल ऊर्जा संरक्षित रहती है और समय के साथ बदलती नहीं है।"
    },
    {
        question: "प्रश्न 39. एक सरल लोलक का गोलक पानी से भरा एक खोखला गोला है। यदि गोले में एक छोटा छेद कर दिया जाए जिससे पानी बाहर निकल जाए, तो आवर्तकाल...",
        answers: shuffle([
            { text: "पहले बढ़ेगा, फिर घटेगा।", correct: true },
            { text: "अपरिवर्तित रहेगा।", correct: false },
            { text: "लगातार बढ़ेगा।", correct: false },
            { text: "लगातार घटेगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैसे-जैसे पानी निकलता है, निकाय का गुरुत्व केंद्र नीचे जाता है (लंबाई बढ़ती है), जिससे आवर्तकाल बढ़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब गोला लगभग खाली हो जाता है, तो गुरुत्व केंद्र वापस ऊपर की ओर गोले के केंद्र की ओर बढ़ने लगता है, जिससे आवर्तकाल वापस घटने लगता है।"
    },
    {
        question: "प्रश्न 40. कौन सा उपकरण सरल आवर्त गति के सिद्धांत पर काम नहीं करता है?",
        answers: shuffle([
            { text: "लोलक घड़ी", correct: false },
            { text: "गिटार का तार", correct: false },
            { text: "कार का इंजन", correct: true },
            { text: "स्प्रिंग तुला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार का इंजन दहन और पिस्टन की रैखिक गति पर आधारित है, जो सरल आवर्त गति नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी में SHM या उससे संबंधित सिद्धांत शामिल हैं।"
    },
    {
        question: "प्रश्न 41. किसी कण की गति x=Asin(ωt) द्वारा दी गई है। कण की अधिकतम गति क्या है?",
        answers: shuffle([
            { text: "A", correct: false },
            { text: "Aω", correct: true },
            { text: "Aω²", correct: false },
            { text: "ω", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेग विस्थापन का समय के सापेक्ष अवकलन होता है, जो v=Aωcos(ωt) होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका अधिकतम मान Aω है।"
    },
    {
        question: "प्रश्न 42. पिछले प्रश्न में, कण का अधिकतम त्वरण क्या है?",
        answers: shuffle([
            { text: "A", correct: false },
            { text: "Aω", correct: false },
            { text: "Aω²", correct: true },
            { text: "ω²", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> त्वरण वेग का समय के सापेक्ष अवकलन होता है, जो a=−Aω²sin(ωt) होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका अधिकतम परिमाण Aω² है।"
    },
    {
        question: "प्रश्न 43. सरल आवर्त गति के लिए विस्थापन-समय ग्राफ एक...",
        answers: shuffle([
            { text: "सीधी रेखा है।", correct: false },
            { text: "परवलय है।", correct: false },
            { text: "ज्या वक्र (साइन वक्र) है।", correct: true },
            { text: "वृत्त है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विस्थापन समय के साथ एक साइन या कोसाइन फलन के रूप में बदलता है, जिसका ग्राफ एक ज्या वक्र होता है।"
    },
    {
        question: "प्रश्न 44. एक लोलक जो पृथ्वी पर सेकंडों का सही समय देता है, यदि उसे किसी ऐसे ग्रह पर ले जाया जाए जहाँ गुरुत्वीय त्वरण पृथ्वी से दोगुना है, तो वह...",
        answers: shuffle([
            { text: "सुस्त हो जाएगा।", correct: false },
            { text: "तेज हो जाएगा।", correct: true },
            { text: "सही समय देगा।", correct: false },
            { text: "काम करना बंद कर देगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'g' बढ़ने से आवर्तकाल घट जाएगा (T∝1/√g)।<br><br><i class='fa-solid fa-angles-right icon'></i> कम आवर्तकाल का मतलब है कि घड़ी तेज चलेगी।"
    },
    {
        question: "प्रश्न 45. सरल आवर्त गति में, किस भौतिक राशि का औसत मान एक पूर्ण चक्र के लिए शून्य नहीं है?",
        answers: shuffle([
            { text: "वेग", correct: false },
            { text: "त्वरण", correct: false },
            { text: "विस्थापन", correct: false },
            { text: "गतिज ऊर्जा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेग, त्वरण और विस्थापन सदिश राशियाँ हैं और एक पूर्ण चक्र में उनका औसत शून्य होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> गतिज ऊर्जा एक अदिश राशि है और हमेशा धनात्मक या शून्य होती है, इसलिए इसका औसत मान शून्य नहीं होता है।"
    },
    {
        question: "प्रश्न 46. एक झूले का आवर्तकाल 2 सेकंड है। इसकी आवृत्ति क्या होगी?",
        answers: shuffle([
            { text: "2 हर्ट्ज", correct: false },
            { text: "1 हर्ट्ज", correct: false },
            { text: "0.5 हर्ट्ज", correct: true },
            { text: "4 हर्ट्ज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवृत्ति, आवर्तकाल का व्युत्क्रम होती है (f=1/T)।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, f=1/2=0.5 हर्ट्ज।"
    },
    {
        question: "प्रश्न 47. अवमंदन का प्रभाव दोलन के किस गुण पर सबसे अधिक पड़ता है?",
        answers: shuffle([
            { text: "आवृत्ति", correct: false },
            { text: "आवर्तकाल", correct: false },
            { text: "आयाम", correct: true },
            { text: "कला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवमंदन मुख्य रूप से दोलन के आयाम को समय के साथ कम करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह आवृत्ति को भी थोड़ा प्रभावित कर सकता है, लेकिन सबसे प्रमुख प्रभाव आयाम पर होता है।"
    },
    {
        question: "प्रश्न 48. सरल आवर्त गति में, प्रत्यानयन बल...",
        answers: shuffle([
            { text: "एक संरक्षी बल है।", correct: true },
            { text: "एक असंरक्षी बल है।", correct: false },
            { text: "एक केंद्रीय बल है।", correct: false },
            { text: "एक घर्षण बल है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि इस बल द्वारा किया गया कार्य पथ पर निर्भर नहीं करता है, यह एक संरक्षी बल है, और इसके साथ एक स्थितिज ऊर्जा जुड़ी होती है।"
    },
    {
        question: "प्रश्न 49. दोलन की कला किस पर निर्भर करती है?",
        answers: shuffle([
            { text: "केवल आयाम पर", correct: false },
            { text: "प्रारंभिक स्थिति और प्रारंभिक वेग पर", correct: true },
            { text: "केवल आवृत्ति पर", correct: false },
            { text: "केवल द्रव्यमान पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गति का प्रारंभिक बिंदु (समय t=0 पर कण कहाँ है और किधर जा रहा है) गति की कला को निर्धारित करता है।"
    },
    {
        question: "प्रश्न 50. एक लड़की एक घूमते हुए स्टूल पर बैठी है और उसने अपनी बाहें फैला रखी हैं। यदि वह अपनी बाहों को सिकोड़ लेती है, तो क्या संरक्षित रहेगा?",
        answers: shuffle([
            { text: "गतिज ऊर्जा", correct: false },
            { text: "कोणीय वेग", correct: false },
            { text: "जड़त्व आघूर्ण", correct: false },
            { text: "कोणीय संवेग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि कोई बाहरी बल आघूर्ण नहीं है, निकाय का कोणीय संवेग संरक्षित रहेगा।<br><br><i class='fa-solid fa-angles-right icon'></i> गतिज ऊर्जा बढ़ जाएगी क्योंकि वह कार्य करती है।"
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