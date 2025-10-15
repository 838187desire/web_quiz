const questions = [
    {
        topHeading: "बृहस्पति ग्रह पर आधारित 50 MCQs, (quiz_no.)"
    },
    {
        question: "सौरमंडल का सबसे बड़ा ग्रह कौन सा है?",
        answers: shuffle([
            { text: "शनि", correct: false },
            { text: "अरुण", correct: false },
            { text: "पृथ्वी", correct: false },
            { text: "बृहस्पति", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति सौरमंडल का सबसे विशाल ग्रह है, इसका द्रव्यमान सौरमंडल के अन्य सभी ग्रहों के कुल द्रव्यमान का लगभग 2.5 गुना है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति ग्रह मुख्य रूप से किन गैसों से बना है?",
        answers: shuffle([
            { text: "ऑक्सीजन और नाइट्रोजन", correct: false },
            { text: "हाइड्रोजन और हीलियम", correct: true },
            { text: "मीथेन और अमोनिया", correct: false },
            { text: "कार्बन डाइऑक्साइड और सल्फर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य की तरह, बृहस्पति का वायुमंडल भी मुख्य रूप से हाइड्रोजन (लगभग 90%) और हीलियम (लगभग 10%) से बना है, इसलिए इसे 'गैस दानव' भी कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति पर दिखाई देने वाले 'ग्रेट रेड स्पॉट' (विशाल लाल धब्बा) क्या है?",
        answers: shuffle([
            { text: "एक विशाल ज्वालामुखी", correct: false },
            { text: "एक विशाल तूफान", correct: true },
            { text: "एक लाल रंग का पठार", correct: false },
            { text: "एक बड़ा गड्ढा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेट रेड स्पॉट एक विशाल, स्थायी प्रतिचक्रवातीय तूफान है जो बृहस्पति के दक्षिणी गोलार्ध में सदियों से मौजूद है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका आकार पृथ्वी से भी बड़ा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति ग्रह का एक दिन (घूर्णन काल) लगभग कितनी अवधि का होता है?",
        answers: shuffle([
            { text: "9 घंटे 55 मिनट", correct: true },
            { text: "24 घंटे", correct: false },
            { text: "36 घंटे 10 मिनट", correct: false },
            { text: "5 दिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति सौरमंडल में सबसे तेज घूमने वाला ग्रह है, जो अपनी धुरी पर एक चक्कर मात्र 9 घंटे 55 मिनट में पूरा कर लेता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति को सूर्य की एक परिक्रमा पूरी करने में लगभग कितना समय लगता है?",
        answers: shuffle([
            { text: "5.5 वर्ष", correct: false },
            { text: "11.9 वर्ष", correct: true },
            { text: "29.5 वर्ष", correct: false },
            { text: "84 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति का एक वर्ष पृथ्वी के लगभग 11.9 वर्षों के बराबर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे सूर्य का एक पूरा चक्कर लगाने में इतना समय लगता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति के चार सबसे बड़े चंद्रमाओं की खोज किसने की थी?",
        answers: shuffle([
            { text: "आइजैक न्यूटन", correct: false },
            { text: "कॉपरनिकस", correct: false },
            { text: "गैलीलियो गैलिली", correct: true },
            { text: "केपलर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सन् 1610 में, गैलीलियो गैलिली ने अपनी दूरबीन से बृहस्पति के चार सबसे बड़े उपग्रहों - आयो, यूरोपा, गैनीमेड और कैलिस्टो - की खोज की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति के इन चार सबसे बड़े उपग्रहों को सामूहिक रूप से क्या कहा जाता है?",
        answers: shuffle([
            { text: "केपलर उपग्रह", correct: false },
            { text: "शनि के वलय", correct: false },
            { text: "गैलीलियन उपग्रह", correct: true },
            { text: "क्षुद्रग्रह पट्टी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इनकी खोज गैलीलियो ने की थी, इसलिए इन चारों चंद्रमाओं को उनके सम्मान में 'गैलीलियन उपग्रह' कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौरमंडल का सबसे बड़ा प्राकृतिक उपग्रह (चंद्रमा) कौन सा है?",
        answers: shuffle([
            { text: "टाइटन (शनि)", correct: false },
            { text: "गैनीमेड (बृहस्पति)", correct: true },
            { text: "चंद्रमा (पृथ्वी)", correct: false },
            { text: "ट्राइटन (वरुण)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति का उपग्रह गैनीमेड, न केवल सौरमंडल का सबसे बड़ा चंद्रमा है, बल्कि यह बुध ग्रह से भी बड़ा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "निम्नलिखित में से किस ग्रह के चारों ओर वलय (rings) पाए जाते हैं?",
        answers: shuffle([
            { text: "केवल शनि", correct: false },
            { text: "शनि और अरुण", correct: false },
            { text: "शनि, अरुण और वरुण", correct: false },
            { text: "बृहस्पति, शनि, अरुण और वरुण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हालांकि शनि के वलय सबसे प्रसिद्ध हैं, लेकिन बृहस्पति सहित सभी गैस दानव ग्रहों (बृहस्पति, शनि, अरुण, वरुण) के चारों ओर वलय प्रणाली मौजूद है, जो बहुत धुंधली होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति का औसत तापमान कितना है?",
        answers: shuffle([
            { text: "20 डिग्री सेल्सियस", correct: false },
            { text: "-50 डिग्री सेल्सियस", correct: false },
            { text: "-145 डिग्री सेल्सियस", correct: true },
            { text: "-200 डिग्री सेल्सियस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति के बादलों के ऊपरी हिस्से का औसत तापमान बहुत ठंडा, लगभग -145 डिग्री सेल्सियस होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति के किस उपग्रह पर सक्रिय ज्वालामुखी पाए जाते हैं?",
        answers: shuffle([
            { text: "यूरोपा", correct: false },
            { text: "गैनीमेड", correct: false },
            { text: "कैलिस्टो", correct: false },
            { text: "आयो", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आयो सौरमंडल में सबसे अधिक ज्वालामुखीय रूप से सक्रिय पिंड है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका कारण बृहस्पति और अन्य गैलीलियन उपग्रहों से लगने वाला तीव्र गुरुत्वाकर्षण बल है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस गैलीलियन उपग्रह की बर्फीली सतह के नीचे एक विशाल महासागर होने की प्रबल संभावना है?",
        answers: shuffle([
            { text: "आयो", correct: false },
            { text: "यूरोपा", correct: true },
            { text: "गैनीमेड", correct: false },
            { text: "कैलिस्टो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैज्ञानिकों का मानना है कि यूरोपा की मोटी बर्फीली परत के नीचे एक विशाल खारे पानी का महासागर मौजूद हो सकता है, जिससे वहां जीवन की संभावना भी बनती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "प्राचीन सभ्यताओं द्वारा बृहस्पति को किस रूप में देखा जाता था?",
        answers: shuffle([
            { text: "एक साधारण तारे के रूप में", correct: false },
            { text: "एक भटकते हुए तारे या ग्रह के रूप में", correct: false },
            { text: "एक धूमकेतु के रूप में", correct: false },
            { text: "एक देवता के रूप में", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसकी चमक और आकाश में प्रमुख स्थिति के कारण, कई प्राचीन संस्कृतियों, जैसे कि रोमन और यूनानी, ने बृहस्पति को अपने प्रमुख देवताओं में से एक माना।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति का द्रव्यमान पृथ्वी के द्रव्यमान से लगभग कितना गुना अधिक है?",
        answers: shuffle([
            { text: "101 गुना", correct: false },
            { text: "218 गुना", correct: false },
            { text: "318 गुना", correct: true },
            { text: "512 गुना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति का द्रव्यमान पृथ्वी की तुलना में लगभग 318 गुना अधिक है, जो इसे सौरमंडल का सबसे भारी ग्रह बनाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "नासा का 'जूनो' (Juno) अंतरिक्ष यान किस ग्रह का अध्ययन करने के लिए भेजा गया है?",
        answers: shuffle([
            { text: "मंगल", correct: false },
            { text: "शनि", correct: false },
            { text: "बृहस्पति", correct: true },
            { text: "शुक्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जूनो मिशन को बृहस्पति की उत्पत्ति, संरचना, वायुमंडल और चुंबकीय क्षेत्र का विस्तृत अध्ययन करने के लिए 2011 में लॉन्च किया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति का चुंबकीय क्षेत्र (मैग्नेटोस्फीयर) पृथ्वी की तुलना में कैसा है?",
        answers: shuffle([
            { text: "कमजोर है", correct: false },
            { text: "लगभग बराबर है", correct: false },
            { text: "10 गुना शक्तिशाली है", correct: false },
            { text: "लगभग 20,000 गुना अधिक शक्तिशाली है", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति का चुंबकीय क्षेत्र सौरमंडल में सबसे शक्तिशाली है (सूर्य को छोड़कर), जो पृथ्वी के चुंबकीय क्षेत्र से लगभग 20,000 गुना अधिक प्रबल है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति की धारियों और बैंड का अलग-अलग रंग किस कारण से होता है?",
        answers: shuffle([
            { text: "विभिन्न गैसों के तापमान में अंतर", correct: false },
            { text: "अमोनिया क्रिस्टल की विभिन्न ऊंचाइयों और मोटाई के कारण", correct: true },
            { text: "ग्रह पर धूल के तूफान", correct: false },
            { text: "जल वाष्प की उपस्थिति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति के वायुमंडल में विभिन्न ऊंचाई पर मौजूद अमोनिया के बादल सूर्य के प्रकाश से क्रिया कर अलग-अलग रंग प्रदर्शित करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति के वायुमंडल में किस तत्व की अधिकता के कारण इसे 'असफल तारा' भी कहा जाता है?",
        answers: shuffle([
            { text: "लोहा", correct: false },
            { text: "कार्बन", correct: false },
            { text: "हाइड्रोजन", correct: true },
            { text: "सिलिकॉन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति की संरचना सूर्य के समान ही है, जिसमें हाइड्रोजन और हीलियम की प्रचुरता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि यह लगभग 80 गुना अधिक विशाल होता, तो यह एक तारा बन सकता था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'ट्रोजन क्षुद्रग्रह' (Trojan Asteroids) किस ग्रह की कक्षा में सूर्य की परिक्रमा करते हैं?",
        answers: shuffle([
            { text: "मंगल", correct: false },
            { text: "बृहस्पति", correct: true },
            { text: "शनि", correct: false },
            { text: "पृथ्वी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ट्रोजन क्षुद्रग्रहों के दो बड़े समूह हैं जो बृहस्पति की कक्षा को साझा करते हैं, एक समूह ग्रह के आगे और दूसरा उसके पीछे चलता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति की आंतरिक संरचना में क्या शामिल होने की संभावना है?",
        answers: shuffle([
            { text: "एक ठोस सतही परत", correct: false },
            { text: "एक विशाल तरल महासागर", correct: false },
            { text: "एक छोटा, सघन चट्टानी कोर", correct: true },
            { text: "पूरी तरह से गैसीय अवस्था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माना जाता है कि अत्यधिक दाब के कारण बृहस्पति के केंद्र में चट्टान और बर्फ से बना एक छोटा लेकिन बहुत सघन कोर मौजूद है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति ग्रह का औसत घनत्व पृथ्वी की तुलना में कैसा है?",
        answers: shuffle([
            { text: "बहुत अधिक", correct: false },
            { text: "लगभग बराबर", correct: false },
            { text: "बहुत कम", correct: true },
            { text: "थोड़ा अधिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गैस दानव होने के कारण, बृहस्पति का औसत घनत्व (लगभग 1.33 ग्राम/सेमी³) पृथ्वी के घनत्व (लगभग 5.51 ग्राम/सेमी³) का लगभग एक-चौथाई ही है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'पायनियर 10' पहला अंतरिक्ष यान था जिसने...",
        answers: shuffle([
            { text: "बृहस्पति की कक्षा में प्रवेश किया", correct: false },
            { text: "बृहस्पति के पास से उड़ान भरी", correct: true },
            { text: "बृहस्पति पर उतरा", correct: false },
            { text: "शनि के वलयों का अध्ययन किया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1973 में, पायोनियर 10 बृहस्पति के पास से गुजरने और उसकी तस्वीरें भेजने वाला पहला मानव निर्मित यान बना।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति ग्रह पर गुरुत्वाकर्षण पृथ्वी की तुलना में कितना है?",
        answers: shuffle([
            { text: "लगभग बराबर", correct: false },
            { text: "लगभग 2.4 गुना अधिक", correct: true },
            { text: "लगभग 10 गुना अधिक", correct: false },
            { text: "कम है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपने विशाल आकार और द्रव्यमान के कारण बृहस्पति की सतह (बादलों के शीर्ष पर) पर गुरुत्वाकर्षण पृथ्वी की तुलना में लगभग 2.4 गुना अधिक है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'शूमेकर-लेवी 9' धूमकेतु 1994 में किस ग्रह से टकराया था?",
        answers: shuffle([
            { text: "शनि", correct: false },
            { text: "मंगल", correct: false },
            { text: "पृथ्वी", correct: false },
            { text: "बृहस्पति", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1994 में, धूमकेतु शूमेकर-लेवी 9 के टुकड़े बृहस्पति से टकराए, जिससे खगोलविदों को इस तरह की टक्करों के प्रभाव का अध्ययन करने का एक अनूठा अवसर मिला।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति की वलय प्रणाली मुख्य रूप से किससे बनी है?",
        answers: shuffle([
            { text: "बर्फ के बड़े टुकड़ों से", correct: false },
            { text: "चट्टानी क्षुद्रग्रहों से", correct: false },
            { text: "धूल के सूक्ष्म कणों से", correct: true },
            { text: "जमी हुई गैसों से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शनि के वलयों के विपरीत, जो बर्फ से बने हैं, बृहस्पति के धुंधले वलय मुख्य रूप से इसके आंतरिक चंद्रमाओं से उल्कापिंडों के टकराने से निकले धूल के कणों से बने हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति को 'सौरमंडल का वैक्यूम क्लीनर' क्यों कहा जाता है?",
        answers: shuffle([
            { text: "क्योंकि यह धूल और गैस को साफ करता है", correct: false },
            { text: "क्योंकि इसका शक्तिशाली गुरुत्वाकर्षण कई धूमकेतुओं और क्षुद्रग्रहों को अपनी ओर खींच लेता है", correct: true },
            { text: "क्योंकि इसका वायुमंडल बहुत स्वच्छ है", correct: false },
            { text: "क्योंकि यह सौर पवन को रोकता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति का विशाल गुरुत्वाकर्षण आंतरिक सौर मंडल की ओर आने वाले कई खतरनाक धूमकेतुओं और क्षुद्रग्रहों को या तो निगल लेता है या उनकी दिशा बदल देता है, जिससे पृथ्वी की रक्षा होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति के वायुमंडल में दिखाई देने वाले सफेद रंग के बैंड को क्या कहते हैं?",
        answers: shuffle([
            { text: "बेल्ट्स (Belts)", correct: false },
            { text: "जोन्स (Zones)", correct: true },
            { text: "स्पॉट्स (Spots)", correct: false },
            { text: "स्ट्रीक्स (Streaks)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति पर हल्के रंग के बैंड 'जोन्स' कहलाते हैं, ये ऊपर उठती हुई गैसों के क्षेत्र हैं, जबकि गहरे रंग के बैंड 'बेल्ट्स' नीचे जाती हुई गैसों के क्षेत्र हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति का नाम किस रोमन देवता के नाम पर रखा गया है?",
        answers: shuffle([
            { text: "युद्ध के देवता", correct: false },
            { text: "समुद्र के देवता", correct: false },
            { text: "कृषि के देवता", correct: false },
            { text: "देवताओं के राजा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति का नाम रोमन पौराणिक कथाओं में देवताओं के राजा 'ज्यूपिटर' (Jupiter) के नाम पर रखा गया है, जो इसके विशाल आकार को दर्शाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति के कुल ज्ञात उपग्रहों की संख्या कितनी है? (यह संख्या खोजों के साथ बदलती रहती है)",
        answers: shuffle([
            { text: "20 से कम", correct: false },
            { text: "30 से 40", correct: false },
            { text: "50 से 60", correct: false },
            { text: "90 से अधिक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वर्तमान जानकारी के अनुसार (यह संख्या लगातार बढ़ रही है), बृहस्पति के 95 ज्ञात उपग्रह हैं, जो सौरमंडल में किसी भी अन्य ग्रह से अधिक हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ग्रह की उपस्थिति के बिना पृथ्वी पर जीवन संभवतः बहुत भिन्न होता?",
        answers: shuffle([
            { text: "शुक्र", correct: false },
            { text: "मंगल", correct: false },
            { text: "बृहस्पति", correct: true },
            { text: "शनि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति के सुरक्षात्मक प्रभाव के बिना, पृथ्वी पर बहुत अधिक संख्या में क्षुद्रग्रह और धूमकेतु टकराते, जिससे जीवन का विकास अत्यंत कठिन हो जाता।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति की धुरी का झुकाव कितना है?",
        answers: shuffle([
            { text: "लगभग 3 डिग्री", correct: true },
            { text: "लगभग 23.5 डिग्री", correct: false },
            { text: "लगभग 50 डिग्री", correct: false },
            { text: "लगभग 98 डिग्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति की धुरी का झुकाव केवल 3.13 डिग्री है, जिसके कारण इस ग्रह पर पृथ्वी की तरह स्पष्ट मौसम परिवर्तन नहीं होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति पर हवा की गति कितनी हो सकती है?",
        answers: shuffle([
            { text: "100 किलोमीटर प्रति घंटा", correct: false },
            { text: "250 किलोमीटर प्रति घंटा", correct: false },
            { text: "600 किलोमीटर प्रति घंटा से अधिक", correct: true },
            { text: "हवा नहीं चलती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति के वायुमंडल में हवाएं अत्यधिक तेज गति से चलती हैं, कुछ जेट धाराओं में गति 600 किलोमीटर प्रति घंटे से भी अधिक हो सकती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति के अध्ययन के लिए भेजे गए 'गैलीलियो' अंतरिक्ष यान ने क्या ऐतिहासिक कार्य किया था?",
        answers: shuffle([
            { text: "यह बृहस्पति पर उतरने वाला पहला यान था", correct: false },
            { text: "यह बृहस्पति की कक्षा में प्रवेश करने वाला पहला यान था", correct: true },
            { text: "इसने बृहस्पति के वलयों की खोज की थी", correct: false },
            { text: "इसने ग्रेट रेड स्पॉट की खोज की थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1995 में, गैलीलियो अंतरिक्ष यान बृहस्पति की परिक्रमा करने वाला पहला यान बना और इसने ग्रह और उसके चंद्रमाओं का वर्षों तक विस्तृत अध्ययन किया।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति का पलायन वेग (escape velocity) कैसा है?",
        answers: shuffle([
            { text: "पृथ्वी से कम", correct: false },
            { text: "पृथ्वी के बराबर", correct: false },
            { text: "सौरमंडल में सबसे अधिक", correct: true },
            { text: "ज्ञात नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति का पलायन वेग लगभग 59.5 किलोमीटर प्रति सेकंड है, जो सौरमंडल के किसी भी अन्य ग्रह से अधिक है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके गुरुत्वाकर्षण से बचने के लिए इतनी गति की आवश्यकता होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति के वायुमंडल के गहरे बैंड को क्या कहा जाता है?",
        answers: shuffle([
            { text: "जोन्स (Zones)", correct: false },
            { text: "बेल्ट्स (Belts)", correct: true },
            { text: "रिजेज (Ridges)", correct: false },
            { text: "वैलीज (Valleys)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गहरे रंग के बैंड 'बेल्ट्स' कहलाते हैं, जहाँ वायुमंडल की गैसें ठंडी होकर नीचे की ओर उतरती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति को नग्न आंखों से देखने पर वह कैसा दिखाई देता है?",
        answers: shuffle([
            { text: "एक धुंधला लाल तारा", correct: false },
            { text: "एक बहुत चमकीला, स्थिर प्रकाश बिंदु", correct: true },
            { text: "एक नीला बिंदु", correct: false },
            { text: "दिखाई नहीं देता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य, चंद्रमा और शुक्र के बाद बृहस्पति रात के आकाश में चौथी सबसे चमकीली वस्तु है और यह एक तारे की तरह टिमटिमाता नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति का आयतन इतना बड़ा है कि इसमें कितनी पृथ्वियां समा सकती हैं?",
        answers: shuffle([
            { text: "लगभग 300", correct: false },
            { text: "लगभग 800", correct: false },
            { text: "लगभग 1300", correct: true },
            { text: "लगभग 2000", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति इतना विशाल है कि इसके आयतन में 1300 से अधिक पृथ्वी ग्रह समा सकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति ग्रह का वायुमंडलीय दाब पृथ्वी की सतह की तुलना में कैसा है?",
        answers: shuffle([
            { text: "बहुत कम", correct: false },
            { text: "लगभग बराबर", correct: false },
            { text: "थोड़ा अधिक", correct: false },
            { text: "अत्यधिक उच्च", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति के वायुमंडल में गहराई में जाने पर दाब और तापमान तेजी से बढ़ता है, जो पृथ्वी की सतह की तुलना में लाखों गुना अधिक हो सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति के सबसे भीतरी गैलीलियन उपग्रह का नाम क्या है?",
        answers: shuffle([
            { text: "यूरोपा", correct: false },
            { text: "गैनीमेड", correct: false },
            { text: "आयो", correct: true },
            { text: "कैलिस्टो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति के सबसे निकट परिक्रमा करने वाला गैलीलियन उपग्रह आयो है, जिसके बाद यूरोपा, गैनीमेड और कैलिस्टो आते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति ग्रह पर प्रकाश की तुलना में ध्वनि की गति कैसी होगी?",
        answers: shuffle([
            { text: "धीमी", correct: false },
            { text: "तेज", correct: true },
            { text: "बराबर", correct: false },
            { text: "ध्वनि यात्रा नहीं कर सकती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति का वायुमंडल पृथ्वी की तुलना में बहुत सघन है, और सघन माध्यम में ध्वनि की गति तेज होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति के अधिकांश छोटे, अनियमित आकार के उपग्रहों की उत्पत्ति का क्या कारण माना जाता है?",
        answers: shuffle([
            { text: "ये ग्रह के निर्माण से बचे हुए हैं", correct: false },
            { text: "ये बृहस्पति के गुरुत्वाकर्षण द्वारा पकड़े गए क्षुद्रग्रह हैं", correct: true },
            { text: "ये बड़े चंद्रमाओं के टूटे हुए हिस्से हैं", correct: false },
            { text: "ये ज्वालामुखियों से निकले हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माना जाता है कि बृहस्पति के अधिकांश बाहरी और छोटे उपग्रह वास्तव में क्षुद्रग्रह हैं जो बहुत पहले ग्रह के शक्तिशाली गुरुत्वाकर्षण क्षेत्र में फंस गए थे।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति के ग्रेट रेड स्पॉट का रंग लाल क्यों है?",
        answers: shuffle([
            { text: "लोहे के ऑक्साइड की उपस्थिति के कारण", correct: false },
            { text: "इसका सटीक कारण अभी भी अज्ञात है", correct: true },
            { text: "मीथेन गैस की उपस्थिति के कारण", correct: false },
            { text: "सल्फर यौगिकों की उपस्थिति के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हालांकि कई सिद्धांत हैं, जैसे कि सूर्य के प्रकाश के साथ क्रिया करने वाले जटिल कार्बनिक अणु या फास्फोरस यौगिक, लेकिन ग्रेट रेड स्पॉट के लाल रंग का सटीक रासायनिक कारण अभी तक निश्चित रूप से ज्ञात नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'वॉयेजर 1' अंतरिक्ष यान ने बृहस्पति के बारे में कौन सी महत्वपूर्ण खोज की थी?",
        answers: shuffle([
            { text: "बृहस्पति के उपग्रहों की खोज", correct: false },
            { text: "बृहस्पति के धुंधले वलयों की खोज", correct: true },
            { text: "ग्रेट रेड स्पॉट की खोज", correct: false },
            { text: "बृहस्पति के चुंबकीय क्षेत्र की खोज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1979 में, वॉयेजर 1 ने बृहस्पति के पास से गुजरते हुए अप्रत्याशित रूप से इसके चारों ओर एक पतली वलय प्रणाली की खोज की।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति के वायुमंडल में बादलों की कितनी मुख्य परतें मानी जाती हैं?",
        answers: shuffle([
            { text: "एक", correct: false },
            { text: "तीन", correct: true },
            { text: "पांच", correct: false },
            { text: "सात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खगोलविदों का मानना है कि बृहस्पति के बादलों की तीन अलग-अलग परतें हैं: सबसे ऊपरी अमोनिया बर्फ की, बीच वाली अमोनियम हाइड्रोसल्फाइड की, और सबसे निचली पानी की बर्फ और जल वाष्प की।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति पर 'ऑरोरा' (ध्रुवीय ज्योति) पृथ्वी की तुलना में कैसा होता है?",
        answers: shuffle([
            { text: "कमजोर और छोटा", correct: false },
            { text: "अधिक स्थायी और सैकड़ों गुना अधिक शक्तिशाली", correct: true },
            { text: "केवल एक ध्रुव पर दिखाई देता है", correct: false },
            { text: "बृहस्पति पर ऑरोरा नहीं होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति के अत्यंत शक्तिशाली चुंबकीय क्षेत्र के कारण, इसके ध्रुवों पर बनने वाला ऑरोरा पृथ्वी की तुलना में बहुत बड़ा, अधिक ऊर्जावान और स्थायी होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति का कौन सा गुण इसे सौरमंडल के ग्रहों में अद्वितीय बनाता है?",
        answers: shuffle([
            { text: "इसका आकार", correct: false },
            { text: "इसके चंद्रमाओं की संख्या", correct: false },
            { text: "इसका द्रव्यमान केंद्र (बैरीसेंटर) सूर्य की सतह के बाहर स्थित है", correct: true },
            { text: "इसका घूर्णन काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति इतना विशाल है कि सूर्य-बृहस्पति प्रणाली का साझा द्रव्यमान केंद्र (बैरीसेंटर) सूर्य की सतह के ठीक बाहर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी ग्रहों के साथ, यह केंद्र सूर्य के अंदर ही रहता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "यदि कोई वस्तु बृहस्पति पर गिराई जाए तो उसका क्या होगा?",
        answers: shuffle([
            { text: "वह सतह पर गिर जाएगी", correct: false },
            { text: "वह वायुमंडल में जल जाएगी", correct: false },
            { text: "वह अत्यधिक दाब और तापमान के कारण नष्ट हो जाएगी", correct: true },
            { text: "वह ग्रह के दूसरी ओर से निकल जाएगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति की कोई ठोस सतह नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> कोई भी वस्तु वायुमंडल में प्रवेश करने पर बढ़ते दाब और तापमान के कारण पिघल जाएगी, वाष्पीकृत हो जाएगी और अंततः नष्ट हो जाएगी।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "गैलीलियन उपग्रहों में से कौन सा सबसे अधिक गड्ढों (क्रेटर्स) वाला और सबसे पुराना है?",
        answers: shuffle([
            { text: "आयो", correct: false },
            { text: "यूरोपा", correct: false },
            { text: "गैनीमेड", correct: false },
            { text: "कैलिस्टो", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैलिस्टो की सतह सौरमंडल में सबसे पुरानी और सबसे अधिक गड्ढों वाली सतहों में से एक है, जो यह दर्शाता है कि इस पर भूवैज्ञानिक गतिविधि बहुत कम हुई है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बृहस्पति की संरचना को समझने के लिए किस प्रकार की तरंगों का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "रेडियो तरंगें", correct: true },
            { text: "भूकंपीय तरंगें", correct: false },
            { text: "प्रकाश तरंगें", correct: false },
            { text: "गुरुत्वाकर्षण तरंगें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जूनो जैसे अंतरिक्ष यान गुरुत्वाकर्षण और रेडियो तरंगों का उपयोग करके ग्रह के घने बादलों के नीचे उसकी आंतरिक संरचना का नक्शा तैयार करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी से बृहस्पति की दूरी...",
        answers: shuffle([
            { text: "हमेशा स्थिर रहती है", correct: false },
            { text: "लगातार बदलती रहती है", correct: true },
            { text: "केवल बढ़ती है", correct: false },
            { text: "केवल घटती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि पृथ्वी और बृहस्पति दोनों सूर्य की परिक्रमा करते हैं, उनकी कक्षाओं में उनकी स्थिति के आधार पर उनके बीच की दूरी घटती-बढ़ती रहती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
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