const questions = [
    {
        topHeading: "अनेकार्थी शब्दों पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'हीन' शब्द का क्या अर्थ नहीं है?",
        answers: shuffle([
            { text: "रहित", correct: false },
            { text: "दीन", correct: false },
            { text: "नीचा", correct: false },
            { text: "भारी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हीन' का अर्थ 'से रहित' (गुण-हीन), दीन और नीचा या तुच्छ होता है।"
    },
    {
        question: "प्रश्न 2. 'क्षेत्र' का एक अर्थ 'खेत' है, दूसरा क्या है?",
        answers: shuffle([
            { text: "शरीर", correct: false },
            { text: "तीर्थस्थान", correct: false },
            { text: "पृथ्वी", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क्षेत्र' का अर्थ खेत, शरीर, तीर्थस्थान और कोई विशेष इलाका होता है।"
    },
    {
        question: "प्रश्न 3. 'श्री' का अनेकार्थी शब्द कौन-सा नहीं है?",
        answers: shuffle([
            { text: "लक्ष्मी", correct: false },
            { text: "शोभा", correct: false },
            { text: "संपत्ति", correct: false },
            { text: "सूर्य", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'श्री' का अर्थ लक्ष्मी, शोभा, संपत्ति, कांति और एक सम्मानसूचक शब्द होता है।"
    },
    {
        question: "प्रश्न 4. 'संधि' का एक अर्थ 'जोड़' है, दूसरा क्या है?",
        answers: shuffle([
            { text: "(अ) समझौता", correct: false },
            { text: "(ब) सेंध", correct: false },
            { text: "(स) युग", correct: false },
            { text: "(अ) और (ब) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'संधि' का अर्थ जोड़, समझौता (जैसे- युद्ध संधि), सेंध और दो अक्षरों का मेल होता है।"
    },
    {
        question: "प्रश्न 5. 'रक्त' शब्द का अनेकार्थी है-",
        answers: shuffle([
            { text: "खून", correct: false },
            { text: "लाल रंग", correct: false },
            { text: "केसर", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रक्त' का अर्थ खून, लाल रंग और केसर/सिंदूर होता है।"
    },
    {
        question: "प्रश्न 6. 'मान' का क्या अर्थ नहीं है?",
        answers: shuffle([
            { text: "सम्मान", correct: false },
            { text: "घमंड", correct: false },
            { text: "नाप-तौल", correct: false },
            { text: "मन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मान' का अर्थ सम्मान (आदर), घमंड (अभिमान) और नाप-तौल की इकाई होता है।"
    },
    {
        question: "प्रश्न 7. 'पानी' का अनेकार्थी शब्द है-",
        answers: shuffle([
            { text: "जल", correct: false },
            { text: "चमक (मोती का)", correct: false },
            { text: "इज्जत", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पानी' का अर्थ जल, चमक (आब) और इज्जत (सम्मान) होता है।"
    },
    {
        question: "प्रश्न 8. 'पूर्व' का एक अर्थ 'पहले' है, दूसरा क्या है?",
        answers: shuffle([
            { text: "एक दिशा", correct: true },
            { text: "पिछला", correct: false },
            { text: "सामने", correct: false },
            { text: "बाद का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पूर्व' का अर्थ पहले (भूतपूर्व) और एक दिशा (पूर्व दिशा) होता है।"
    },
    {
        question: "प्रश्न 9. 'गो' शब्द का अनेकार्थी है-",
        answers: shuffle([
            { text: "गाय", correct: false },
            { text: "इंद्रिय", correct: false },
            { text: "पृथ्वी", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गो' के बहुत से अर्थ हैं, जैसे- गाय, इंद्रिय, पृथ्वी, दिशा, बाण, आँख, स्वर्ग, सरस्वती आदि।"
    },
    {
        question: "प्रश्न 10. 'घन' का अनेकार्थी शब्द समूह कौन-सा है?",
        answers: shuffle([
            { text: "बादल, भारी, हथौड़ा", correct: true },
            { text: "बादल, घना, अधिक", correct: false },
            { text: "हथौड़ा, ठोस, संपत्ति", correct: false },
            { text: "भारी, घना, पिघला हुआ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'घन' का अर्थ बादल, भारी, हथौड़ा और गणित की एक आकृति (cube) होता है।"
    },
    {
        question: "प्रश्न 11. 'चपला' शब्द का एक अर्थ 'बिजली' है, दूसरा क्या है?",
        answers: shuffle([
            { text: "(अ) लक्ष्मी", correct: false },
            { text: "(ब) चंचल स्त्री", correct: false },
            { text: "(स) जीभ", correct: false },
            { text: "(अ) और (ब) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चपला' का अर्थ बिजली और चंचल स्त्री होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> लक्ष्मी जी को भी चंचला कहा जाता है।"
    },
    {
        question: "प्रश्न 12. 'खग' का अनेकार्थी शब्द कौन-सा नहीं है?",
        answers: shuffle([
            { text: "पक्षी", correct: false },
            { text: "बाण", correct: false },
            { text: "तारा", correct: false },
            { text: "खरगोश", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खग' (आकाश में गमन करने वाला) का अर्थ पक्षी, बाण, तारा, देवता और सूर्य होता है।"
    },
    {
        question: "प्रश्न 13. 'अचल' का एक अर्थ 'स्थिर' है, तो दूसरा क्या है?",
        answers: shuffle([
            { text: "(अ) पर्वत", correct: false },
            { text: "(ब) निश्चल", correct: false },
            { text: "(स) दृढ़", correct: false },
            { text: "(अ) और (ब) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अचल' का अर्थ स्थिर, पर्वत और निश्चल होता है।"
    },
    {
        question: "प्रश्न 14. 'खैर' का अनेकार्थी नहीं है-",
        answers: shuffle([
            { text: "कुशल", correct: false },
            { text: "कत्था", correct: false },
            { text: "एक वृक्ष", correct: false },
            { text: "बुरा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खैर' का अर्थ कुशल (खैरियत), कत्था और एक वृक्ष होता है।"
    },
    {
        question: "प्रश्न 15. 'कृष्ण' का एक अर्थ 'श्री कृष्ण' है, दूसरा क्या है?",
        answers: shuffle([
            { text: "काला", correct: false },
            { text: "वेदव्यास", correct: false },
            { text: "एक पक्ष", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कृष्ण' का अर्थ काला रंग, भगवान कृष्ण, महर्षि वेदव्यास और महीने का एक पक्ष (कृष्ण पक्ष) होता है।"
    },
    {
        question: "प्रश्न 16. 'खल' शब्द का कौन-सा अर्थ नहीं है?",
        answers: shuffle([
            { text: "दुष्ट", correct: false },
            { text: "धतूरा", correct: false },
            { text: "चुगलखोर", correct: false },
            { text: "मित्र", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खल' का अर्थ दुष्ट, धतूरा और चुगलखोर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'मित्र' इसका विलोम है।"
    },
    {
        question: "प्रश्न 17. 'घर' का अनेकार्थी रूप है-",
        answers: shuffle([
            { text: "मकान", correct: false },
            { text: "कार्यालय", correct: false },
            { text: "कुल", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'घर' का अर्थ मकान, कुल (खानदान) और कार्यालय (दफ्तर) भी होता है।"
    },
    {
        question: "प्रश्न 18. 'जाल' शब्द का अनेकार्थी समूह है-",
        answers: shuffle([
            { text: "फरेब, बुनावट, फंदा", correct: true },
            { text: "पानी, छल, किनारा", correct: false },
            { text: "बुनावट, माया, रस्सी", correct: false },
            { text: "किरण, फंदा, धोखा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जाल' का अर्थ फरेब (मायाजाल), बुनावट (कपड़े का), फंदा और जाला होता है।"
    },
    {
        question: "प्रश्न 19. 'तारा' का एक अर्थ 'नक्षत्र' है, दूसरा क्या है?",
        answers: shuffle([
            { text: "आँख की पुतली", correct: false },
            { text: "बृहस्पति की पत्नी", correct: false },
            { text: "बाली की पत्नी", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तारा' का अर्थ नक्षत्र, आँख की पुतली, बृहस्पति की पत्नी और बाली की पत्नी होता है।"
    },
    {
        question: "प्रश्न 20. 'गिरा' का अनेकार्थी है-",
        answers: shuffle([
            { text: "सरस्वती", correct: false },
            { text: "वाणी", correct: false },
            { text: "जीभ", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गिरा' का अर्थ सरस्वती, वाणी और जीभ होता है।"
    },
    {
        question: "प्रश्न 21. 'पक्षी' का अनेकार्थी रूप है-",
        answers: shuffle([
            { text: "(अ) द्विज", correct: false },
            { text: "(ब) खग", correct: false },
            { text: "(स) ब्राह्मण", correct: false },
            { text: "(अ) और (ब) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पक्षी' के लिए 'द्विज' और 'खग' दोनों ही अनेकार्थी शब्द हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> 'द्विज' का अर्थ पक्षी और ब्राह्मण दोनों होता है, जबकि 'खग' का अर्थ पक्षी और तारा होता है।"
    },
    {
        question: "प्रश्न 22. 'प्रकृति' का एक अर्थ 'स्वभाव' है, दूसरा क्या है?",
        answers: shuffle([
            { text: "कुदरत", correct: false },
            { text: "माया", correct: false },
            { text: "मूल अवस्था", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रकृति' का अर्थ स्वभाव, कुदरत, माया और किसी वस्तु की मूल अवस्था होता है।"
    },
    {
        question: "प्रश्न 23. 'रसना' शब्द का अर्थ है-",
        answers: shuffle([
            { text: "(अ) जीभ", correct: false },
            { text: "(ब) स्वाद लेना", correct: false },
            { text: "(स) आवाज़", correct: false },
            { text: "(अ) और (ब) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रसना' का अर्थ जीभ और स्वाद लेने की क्रिया होता है।"
    },
    {
        question: "प्रश्न 24. 'विग्रह' शब्द का अनेकार्थी नहीं है-",
        answers: shuffle([
            { text: "लड़ाई", correct: false },
            { text: "देवता की मूर्ति", correct: false },
            { text: "शरीर", correct: false },
            { text: "संधि", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विग्रह' का अर्थ लड़ाई (कलह), देवता की मूर्ति, शरीर और (व्याकरण में) पदों को अलग करना होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'संधि' इसका विलोम है।"
    },
    {
        question: "प्रश्न 25. 'स्नेह' का एक अर्थ 'प्रेम' है, दूसरा क्या है?",
        answers: shuffle([
            { text: "(अ) तेल", correct: false },
            { text: "(ब) चिकनाई", correct: false },
            { text: "(स) कोमलता", correct: false },
            { text: "(अ) और (ब) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्नेह' का अर्थ प्रेम और तेल/चिकनाई होता है।"
    },
    {
        question: "प्रश्न 26. 'शक्ति' का अनेकार्थी शब्द है-",
        answers: shuffle([
            { text: "बल", correct: false },
            { text: "दुर्गा", correct: false },
            { text: "माया", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शक्ति' का अर्थ बल, अधिकार, दुर्गा और माया होता है।"
    },
    {
        question: "प्रश्न 27. 'शिखा' का एक अर्थ 'चोटी' है, दूसरा क्या है?",
        answers: shuffle([
            { text: "दीपक की लौ", correct: false },
            { text: "मोर की कलगी", correct: false },
            { text: "ज्वाला", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शिखा' का अर्थ चोटी, दीपक की लौ, ज्वाला और मोर की कलगी होता है।"
    },
    {
        question: "प्रश्न 28. 'संज्ञा' का क्या अर्थ नहीं है?",
        answers: shuffle([
            { text: "नाम", correct: false },
            { text: "चेतना", correct: false },
            { text: "ज्ञान", correct: false },
            { text: "क्रिया", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'संज्ञा' का अर्थ नाम, चेतना और ज्ञान होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> व्याकरण में यह एक शब्द-भेद है।"
    },
    {
        question: "प्रश्न 29. 'हंस' का अनेकार्थी शब्द है-",
        answers: shuffle([
            { text: "एक पक्षी", correct: false },
            { text: "आत्मा", correct: false },
            { text: "सूर्य", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हंस' का अर्थ एक पक्षी, आत्मा, सूर्य, योगी और परमात्मा होता है।"
    },
    {
        question: "प्रश्न 30. 'अधर' का एक अर्थ 'होंठ' है, दूसरा क्या है?",
        answers: shuffle([
            { text: "नीचा", correct: false },
            { text: "अनाधार", correct: false },
            { text: "अंतरिक्ष", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अधर' का अर्थ होंठ, नीचा, अनाधार और आकाश/अंतरिक्ष होता है।"
    },
    {
        question: "प्रश्न 31. 'काम' का अनेकार्थी शब्द नहीं है-",
        answers: shuffle([
            { text: "कार्य", correct: false },
            { text: "पेशा", correct: false },
            { text: "कामदेव", correct: false },
            { text: "आराम", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'काम' का अर्थ कार्य, पेशा, कामदेव और वासना होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'आराम' का अर्थ विश्राम है।"
    },
    {
        question: "प्रश्न 32. 'कुशल' का एक अर्थ 'निपुण' है, दूसरा क्या है?",
        answers: shuffle([
            { text: "(अ) खैरियत", correct: false },
            { text: "(ब) चतुर", correct: false },
            { text: "(स) सुरक्षित", correct: false },
            { text: "(अ) और (स) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुशल' का अर्थ निपुण, खैरियत (सब कुशल-मंगल है) और सुरक्षित होता है।"
    },
    {
        question: "प्रश्न 33. 'कोट' शब्द का अनेकार्थी है-",
        answers: shuffle([
            { text: "(अ) पहनने का वस्त्र", correct: false },
            { text: "(ब) किला", correct: false },
            { text: "(स) श्रेणी", correct: false },
            { text: "(अ) और (ब) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कोट' का अर्थ पहनने का एक वस्त्र और किला (दुर्ग) होता है।"
    },
    {
        question: "प्रश्न 34. 'कौशिक' का अनेकार्थी शब्द नहीं है-",
        answers: shuffle([
            { text: "विश्वामित्र", correct: false },
            { text: "इंद्र", correct: false },
            { text: "उल्लू", correct: false },
            { text: "शिव", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कौशिक' का अर्थ विश्वामित्र, इंद्र, उल्लू और सपेरा होता है।"
    },
    {
        question: "प्रश्न 35. 'गोविंद' का अनेकार्थी है-",
        answers: shuffle([
            { text: "(अ) कृष्ण", correct: false },
            { text: "(ब) बृहस्पति", correct: false },
            { text: "(अ) गोष्ठी का स्वामी", correct: false },
            { text: "(अ) और (ब) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गोविंद' का अर्थ कृष्ण, विष्णु और बृहस्पति होता है।"
    },
    {
        question: "प्रश्न 36. 'ग्रहण' का एक अर्थ 'लेना' है, दूसरा क्या है?",
        answers: shuffle([
            { text: "(अ) सूर्य/चंद्र ग्रहण", correct: false },
            { text: "(ब) इंद्रिय", correct: false },
            { text: "(स) पकड़ना", correct: false },
            { text: "(अ) और (स) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ग्रहण' का अर्थ लेना, पकड़ना और सूर्य/चंद्रमा पर राहु का प्रभाव होता है।"
    },
    {
        question: "प्रश्न 37. 'चीर' शब्द का अनेकार्थी है-",
        answers: shuffle([
            { text: "वस्त्र", correct: false },
            { text: "चीरना (क्रिया)", correct: false },
            { text: "पट्टी", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चीर' का अर्थ वस्त्र, चीरने की क्रिया और कपड़े की पट्टी होता है।"
    },
    {
        question: "प्रश्न 38. 'ठाकुर' का अनेकार्थी शब्द नहीं है-",
        answers: shuffle([
            { text: "देवता", correct: false },
            { text: "स्वामी", correct: false },
            { text: "क्षत्रिय जाति", correct: false },
            { text: "सेवक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ठाकुर' का अर्थ देवता, स्वामी, क्षत्रिय जाति का व्यक्ति और ईश्वर होता है।"
    },
    {
        question: "प्रश्न 39. 'तंत्र' का क्या अर्थ नहीं है?",
        answers: shuffle([
            { text: "सिद्धांत", correct: false },
            { text: "उपासना की एक प्रणाली", correct: false },
            { text: "कपड़ा", correct: false },
            { text: "धन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तंत्र' का अर्थ सिद्धांत, उपासना की एक प्रणाली, कपड़ा और शासन प्रणाली (जैसे- लोकतंत्र) होता है।"
    },
    {
        question: "प्रश्न 40. 'धारणा' का एक अर्थ 'विचार' है, दूसरा क्या है?",
        answers: shuffle([
            { text: "(अ) बुद्धि", correct: false },
            { text: "(ब) मन में स्थापित करना", correct: false },
            { text: "(स) विश्वास", correct: false },
            { text: "(ब) और (स) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धारणा' का अर्थ विचार, विश्वास और किसी बात को मन में स्थापित करना होता है।"
    },
    {
        question: "प्रश्न 41. 'निशाचर' का अनेकार्थी शब्द है-",
        answers: shuffle([
            { text: "राक्षस", correct: false },
            { text: "उल्लू", correct: false },
            { text: "चोर", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निशाचर' (रात में विचरण करने वाला) का अर्थ राक्षस, उल्लू और चोर होता है।"
    },
    {
        question: "प्रश्न 42. 'पक्का' का अनेकार्थी शब्द नहीं है-",
        answers: shuffle([
            { text: "स्थिर", correct: false },
            { text: "पका हुआ", correct: false },
            { text: "अनुभवी", correct: false },
            { text: "कच्चा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पक्का' का अर्थ स्थिर (पक्का इरादा), पका हुआ (पक्का आम) और अनुभवी (पक्का कारीगर) होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'कच्चा' इसका विलोम है।"
    },
    {
        question: "प्रश्न 43. 'पानीय' शब्द का अर्थ है-",
        answers: shuffle([
            { text: "(अ) जल", correct: false },
            { text: "(ब) पीने योग्य", correct: true },
            { text: "(स) चमक", correct: false },
            { text: "(अ) और (ब) दोनों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पानीय' का मुख्य अर्थ 'पीने योग्य' होता है, जैसे- पानीय जल।<br><br><i class='fa-solid fa-angles-right icon'></i> 'पानी' का अर्थ जल होता है।"
    },
    {
        question: "प्रश्न 44. 'मधुसूदन' किसका अनेकार्थी है?",
        answers: shuffle([
            { text: "(अ) कृष्ण", correct: false },
            { text: "(ब) विष्णु", correct: false },
            { text: "(स) भौंरा", correct: false },
            { text: "(अ) और (ब) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मधुसूदन' (मधु नामक राक्षस को मारने वाले) भगवान कृष्ण और विष्णु का एक नाम है।"
    },
    {
        question: "प्रश्न 45. 'महावीर' का एक अर्थ 'हनुमान' है, दूसरा क्या है?",
        answers: shuffle([
            { text: "बहुत बलवान", correct: false },
            { text: "जैन तीर्थंकर", correct: false },
            { text: "सिंह", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महावीर' का अर्थ हनुमान, बहुत बलवान व्यक्ति और 24वें जैन तीर्थंकर होता है।"
    },
    {
        question: "प्रश्न 46. 'योग' का क्या अर्थ नहीं है?",
        answers: shuffle([
            { text: "जोड़", correct: false },
            { text: "ध्यान", correct: false },
            { text: "उपाय", correct: false },
            { text: "रोग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'योग' का अर्थ जोड़, ध्यान, उपाय और संयोग होता है।"
    },
    {
        question: "प्रश्न 47. 'राशि' शब्द का अनेकार्थी है-",
        answers: shuffle([
            { text: "ढेर", correct: false },
            { text: "मेष, वृष आदि", correct: false },
            { text: "गणित की संख्या", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'राशि' का अर्थ ढेर, ज्योतिष की राशियाँ (मेष, वृष आदि) और गणित की संख्या होता है।"
    },
    {
        question: "प्रश्न 48. 'वर' का एक अर्थ 'श्रेष्ठ' है, दूसरा क्या है?",
        answers: shuffle([
            { text: "दूल्हा", correct: false },
            { text: "वरदान", correct: false },
            { text: "आशीर्वाद", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वर' का अर्थ श्रेष्ठ, दूल्हा और वरदान होता है।"
    },
    {
        question: "प्रश्न 49. 'विषम' का अनेकार्थी शब्द नहीं है-",
        answers: shuffle([
            { text: "जो सम न हो", correct: false },
            { text: "कठिन", correct: false },
            { text: "भयंकर", correct: false },
            { text: "समान", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विषम' का अर्थ जो सम न हो, कठिन (विषम परिस्थिति) और भयंकर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'समान' इसका विलोम है।"
    },
    {
        question: "प्रश्न 50. 'वितान' का अनेकार्थी है-",
        answers: shuffle([
            { text: "(अ) फैलाव", correct: false },
            { text: "(ब) तंबू", correct: false },
            { text: "(स) शून्य", correct: false },
            { text: "(अ) और (ब) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वितान' का अर्थ फैलाव, तंबू या शामियाना होता है।"
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