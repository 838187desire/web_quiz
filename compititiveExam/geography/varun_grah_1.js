const questions = [
    {
        topHeading: " पर आधारित 50 बहुविकल्पीय प्रश्न (quiz_no.)"
    },
    {
        question: "सौरमंडल में सूर्य से दूरी के अनुसार वरुण ग्रह का स्थान कौन-सा है?",
        answers: shuffle([
            { text: "सातवाँ", correct: false },
            { text: "आठवाँ", correct: true },
            { text: "नौवाँ", correct: false },
            { text: "छठा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वरुण हमारे सौरमंडल का आठवाँ और सूर्य से सबसे दूर स्थित ग्रह है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण ग्रह की खोज किस वर्ष की गई थी?",
        answers: shuffle([
            { text: "1781", correct: false },
            { text: "1846", correct: true },
            { text: "1930", correct: false },
            { text: "1610", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वरुण ग्रह की खोज 23 सितंबर 1846 को जोहान गाले ने की थी, जो अर्बन ले वेरियर की गणितीय गणनाओं पर आधारित थी।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण ग्रह का नीला रंग किस गैस की उपस्थिति के कारण है?",
        answers: shuffle([
            { text: "हाइड्रोजन", correct: false },
            { text: "हीलियम", correct: false },
            { text: "मीथेन", correct: true },
            { text: "अमोनिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वरुण के वायुमंडल में मौजूद मीथेन गैस लाल प्रकाश को अवशोषित कर लेती है, जिससे यह ग्रह चमकीला नीला दिखाई देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण ग्रह के सबसे बड़े चंद्रमा का क्या नाम है?",
        answers: shuffle([
            { text: "टाइटन", correct: false },
            { text: "गैनीमीड", correct: false },
            { text: "यूरोपा", correct: false },
            { text: "ट्राइटन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ट्राइटन, वरुण का सबसे बड़ा प्राकृतिक उपग्रह है और यह सौरमंडल का एकमात्र बड़ा चंद्रमा है जो अपने ग्रह की परिक्रमा उल्टी दिशा (प्रतिगामी कक्षा) में करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस अंतरिक्ष यान ने वरुण ग्रह का सबसे पहले और एकमात्र बार समीप से अध्ययन किया है?",
        answers: shuffle([
            { text: "पायनियर 11", correct: false },
            { text: "वोयेजर 1", correct: false },
            { text: "वोयेजर 2", correct: true },
            { text: "न्यू होराइजन्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नासा का वोयेजर 2 अंतरिक्ष यान 1989 में वरुण ग्रह के पास से गुजरने वाला एकमात्र मानव निर्मित यान है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण ग्रह को सूर्य की एक परिक्रमा पूरी करने में लगभग कितना समय लगता है?",
        answers: shuffle([
            { text: "84 वर्ष", correct: false },
            { text: "165 वर्ष", correct: true },
            { text: "248 वर्ष", correct: false },
            { text: "12 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य से अपनी अत्यधिक दूरी के कारण, वरुण को एक परिक्रमा पूरी करने में लगभग 165 पृथ्वी वर्ष लगते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौरमंडल में सबसे तेज हवाएं किस ग्रह पर चलती हैं?",
        answers: shuffle([
            { text: "बृहस्पति", correct: false },
            { text: "शनि", correct: false },
            { text: "यूरेनस", correct: false },
            { text: "वरुण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वरुण ग्रह पर सौरमंडल की सबसे तेज हवाएं चलती हैं, जिनकी गति 2100 किलोमीटर प्रति घंटे तक पहुंच सकती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण ग्रह पर देखा गया 'ग्रेट डार्क स्पॉट' (विशाल अंधकार धब्बा) क्या था?",
        answers: shuffle([
            { text: "एक स्थायी ज्वालामुखी", correct: false },
            { text: "एक बड़ा गड्ढा", correct: false },
            { text: "एक प्रतिचक्रवातीय तूफान", correct: true },
            { text: "एक बर्फीला पहाड़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह बृहस्पति के 'ग्रेट रेड स्पॉट' के समान एक विशाल तूफानी प्रणाली थी, जिसे 1989 में वोयेजर 2 ने देखा था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण का सबसे छोटा नामित चंद्रमा कौन सा है?",
        answers: shuffle([
            { text: "Psamathe (सैमाथे)", correct: false },
            { text: "Naiad (नायड)", correct: false },
            { text: "Hippocamp (हिप्पोकैम्प)", correct: true },
            { text: "S/2004 N 1", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिप्पोकैम्प, जिसे 2013 में खोजा गया था, वरुण का सबसे हालिया और सबसे छोटा नामित चंद्रमा है, जिसका व्यास केवल 34 किमी है।<br><br><i class='fa-solid fa-angles-right icon'></i> (S/2004 N 1 इसी का अस्थायी नाम था)।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण ग्रह का नाम किस रोमन देवता के नाम पर रखा गया है?",
        answers: shuffle([
            { text: "युद्ध के देवता", correct: false },
            { text: "समुद्र के देवता", correct: true },
            { text: "कृषि के देवता", correct: false },
            { text: "आकाश के देवता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वरुण (Neptune) का नाम समुद्र के रोमन देवता के नाम पर रखा गया है, जो इसके नीले रंग के अनुरूप है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "निम्नलिखित में से कौन सा ग्रह 'जुड़वां ग्रह' के रूप में जाना जाता है, जो आकार और संरचना में लगभग समान हैं?",
        answers: shuffle([
            { text: "पृथ्वी और मंगल", correct: false },
            { text: "बृहस्पति और शनि", correct: false },
            { text: "वरुण और यूरेनस", correct: true },
            { text: "बुध और शुक्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वरुण और यूरेनस आकार, द्रव्यमान और वायुमंडलीय संरचना में काफी समान हैं, इसलिए उन्हें अक्सर 'जुड़वां बर्फीले दानव' कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण ग्रह के कितने ज्ञात चंद्रमा हैं?",
        answers: shuffle([
            { text: "5", correct: false },
            { text: "14", correct: true },
            { text: "27", correct: false },
            { text: "67", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वर्तमान जानकारी के अनुसार, वरुण ग्रह के 14 ज्ञात प्राकृतिक उपग्रह हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण ग्रह का घनत्व पानी के घनत्व से...",
        answers: shuffle([
            { text: "कम है", correct: false },
            { text: "बराबर है", correct: false },
            { text: "थोड़ा अधिक है", correct: true },
            { text: "बहुत अधिक है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वरुण का घनत्व लगभग 1.638 ग्राम प्रति घन सेंटीमीटर है, जो पानी (1 ग्राम/सेमी³) से अधिक है, जिसका अर्थ है कि यह पानी में डूब जाएगा।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण का चंद्रमा 'ट्राइटन' किस लिए विशेष रूप से जाना जाता है?",
        answers: shuffle([
            { text: "सक्रिय ज्वालामुखियों के लिए", correct: false },
            { text: "घने वायुमंडल के लिए", correct: false },
            { text: "क्रायोवोल्केनिज्म (बर्फीले ज्वालामुखी) के लिए", correct: true },
            { text: "तरल पानी के महासागरों के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ट्राइटन पर बर्फीले ज्वालामुखी पाए गए हैं, जो पानी, नाइट्रोजन और मीथेन जैसी जमी हुई गैसों का उद्गार करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण ग्रह का औसत तापमान लगभग कितना है?",
        answers: shuffle([
            { text: "-150° सेल्सियस", correct: false },
            { text: "-180° सेल्सियस", correct: false },
            { text: "-214° सेल्सियस", correct: true },
            { text: "-250° सेल्सियस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य से अत्यधिक दूरी के कारण वरुण सौरमंडल के सबसे ठंडे ग्रहों में से एक है, जिसका औसत तापमान बहुत कम होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण ग्रह का खगोलीय चिन्ह (प्रतीक) क्या है?",
        answers: shuffle([
            { text: "एक चक्र और क्रॉस", correct: false },
            { text: "एक हँसिया", correct: false },
            { text: "एक त्रिशूल", correct: true },
            { text: "एक तीर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वरुण का प्रतीक (♆) रोमन देवता नेप्च्यून के त्रिशूल को दर्शाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण ग्रह के वलय (Rings) की मुख्य विशेषता क्या है?",
        answers: shuffle([
            { text: "वे बहुत चमकीले और चौड़े हैं", correct: false },
            { text: "वे धुंधले, पतले और खंडित हैं", correct: true },
            { text: "वे ठोस चट्टानों से बने हैं", correct: false },
            { text: "उनका कोई वलय नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शनि के वलयों के विपरीत, वरुण के वलय बहुत धुंधले और पतले हैं, और उनमें कुछ मोटे हिस्से हैं जिन्हें 'आर्क' (Arcs) कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण को अपनी धुरी पर एक चक्कर पूरा करने में कितना समय लगता है (एक दिन की अवधि)?",
        answers: shuffle([
            { text: "लगभग 10 घंटे", correct: false },
            { text: "लगभग 16 घंटे", correct: true },
            { text: "लगभग 24 घंटे", correct: false },
            { text: "लगभग 9 घंटे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वरुण का एक दिन लगभग 16 घंटे 6 मिनट का होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण के वायुमंडल का मुख्य घटक कौन सी गैसें हैं?",
        answers: shuffle([
            { text: "ऑक्सीजन और नाइट्रोजन", correct: false },
            { text: "हाइड्रोजन, हीलियम और मीथेन", correct: true },
            { text: "कार्बन डाइऑक्साइड और सल्फर", correct: false },
            { text: "केवल मीथेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति और शनि की तरह, वरुण का वायुमंडल भी मुख्य रूप से हाइड्रोजन और हीलियम से बना है, जिसमें मीथेन की थोड़ी मात्रा मौजूद है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण ग्रह का व्यास पृथ्वी के व्यास से लगभग कितना गुना अधिक है?",
        answers: shuffle([
            { text: "लगभग 2 गुना", correct: false },
            { text: "लगभग 4 गुना", correct: true },
            { text: "लगभग 8 गुना", correct: false },
            { text: "लगभग 11 गुना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वरुण का भूमध्यरेखीय व्यास लगभग 49,528 किलोमीटर है, जो पृथ्वी के व्यास का लगभग 3.9 गुना है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण का कौन सा चंद्रमा अपनी अनियमित और बहुत लंबी कक्षा के लिए जाना जाता है?",
        answers: shuffle([
            { text: "ट्राइटन", correct: false },
            { text: "नेरीड", correct: true },
            { text: "प्रोटियस", correct: false },
            { text: "लारिसा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नेरीड की कक्षा सौरमंडल के किसी भी चंद्रमा की तुलना में सबसे अधिक उत्केंद्रित (eccentric) है, जिसका अर्थ है कि इसकी ग्रह से दूरी बहुत अधिक बदलती रहती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण की खोज किस ग्रह की कक्षा में देखे गए अप्रत्याशित परिवर्तनों के कारण हुई?",
        answers: shuffle([
            { text: "बृहस्पति", correct: false },
            { text: "शनि", correct: false },
            { text: "यूरेनस", correct: true },
            { text: "प्लूटो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खगोलविदों ने देखा कि यूरेनस की कक्षा न्यूटन के नियमों का पूरी तरह से पालन नहीं कर रही थी, जिससे उन्हें एक और बाहरी ग्रह के गुरुत्वाकर्षण खिंचाव का संदेह हुआ।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण ग्रह का द्रव्यमान पृथ्वी के द्रव्यमान का लगभग कितना गुना है?",
        answers: shuffle([
            { text: "5 गुना", correct: false },
            { text: "12 गुना", correct: false },
            { text: "17 गुना", correct: true },
            { text: "25 गुना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वरुण पृथ्वी से लगभग 17 गुना अधिक भारी है, लेकिन बृहस्पति से काफी हल्का है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण ग्रह पर मौजूद 'स्कूटर' क्या है?",
        answers: shuffle([
            { text: "एक तेज गति वाला बादल", correct: true },
            { text: "एक चंद्रमा", correct: false },
            { text: "एक वलय का हिस्सा", correct: false },
            { text: "एक अंतरिक्ष यान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्कूटर' एक सफेद बादल समूह का उपनाम था जिसे वोयेजर 2 ने देखा था, जो ग्रह के बाकी बादलों की तुलना में बहुत तेजी से घूम रहा था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण ग्रह के वलयों का नाम किसके नाम पर रखा गया है?",
        answers: shuffle([
            { text: "देवताओं के नाम पर", correct: false },
            { text: "प्रसिद्ध खगोलविदों के नाम पर", correct: true },
            { text: "खोजकर्ताओं के नाम पर", correct: false },
            { text: "पौराणिक जीवों के नाम पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वरुण के वलयों (जैसे एडम्स, ले वेरियर, गाले) का नाम उन खगोलविदों के नाम पर रखा गया है जिन्होंने ग्रह की खोज में महत्वपूर्ण भूमिका निभाई।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण पर एक दिन उसकी एक परिक्रमा के समय की तुलना में कैसा होता है?",
        answers: shuffle([
            { text: "दिन बहुत लंबा और परिक्रमा बहुत छोटी", correct: false },
            { text: "दिन और परिक्रमा दोनों बहुत लंबे", correct: false },
            { text: "दिन बहुत छोटा और परिक्रमा बहुत लंबी", correct: true },
            { text: "दिन और परिक्रमा लगभग बराबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वरुण बहुत तेजी से घूमता है (लगभग 16 घंटे का एक दिन), लेकिन सूर्य से बहुत दूर होने के कारण इसकी परिक्रमा (एक वर्ष) में लगभग 165 पृथ्वी वर्ष लगते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "आकार (व्यास) के हिसाब से वरुण सौरमंडल का कौन-सा सबसे बड़ा ग्रह है?",
        answers: shuffle([
            { text: "तीसरा", correct: false },
            { text: "चौथा", correct: true },
            { text: "पांचवां", correct: false },
            { text: "आठवाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आकार के हिसाब से क्रम है: बृहस्पति, शनि, यूरेनस और फिर वरुण।<br><br><i class='fa-solid fa-angles-right icon'></i> यूरेनस वरुण से थोड़ा बड़ा है लेकिन कम सघन है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण ग्रह का आंतरिक भाग किससे बना माना जाता है?",
        answers: shuffle([
            { text: "केवल ठोस चट्टान", correct: false },
            { text: "तरल धात्विक हाइड्रोजन", correct: false },
            { text: "चट्टान और बर्फ का एक कोर, और पानी, मीथेन, अमोनिया की परतें", correct: true },
            { text: "केवल गैस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वरुण का एक छोटा चट्टानी कोर है, जिसके ऊपर अत्यधिक संपीड़ित, गर्म और घने तरल पदार्थ की एक विशाल परत है जिसे 'बर्फीला मैंटल' कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण का दूसरा सबसे बड़ा चंद्रमा कौन सा है?",
        answers: shuffle([
            { text: "नेरीड", correct: false },
            { text: "लारिसा", correct: false },
            { text: "गैलाटिया", correct: false },
            { text: "प्रोटियस", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोटियस, ट्राइटन के बाद वरुण का दूसरा सबसे बड़ा उपग्रह है और इसका आकार बहुत ही अनियमित है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस खगोलशास्त्री ने दूरबीन से पहली बार वरुण ग्रह को देखा और उसकी पहचान की?",
        answers: shuffle([
            { text: "अर्बन ले वेरियर", correct: false },
            { text: "जॉन काउच एडम्स", correct: false },
            { text: "जोहान गाले", correct: true },
            { text: "विलियम हर्शेल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हालांकि ले वेरियर और एडम्स ने भविष्यवाणी की थी, बर्लिन वेधशाला के जोहान गाले ने 1846 में इसे पहली बार देखा था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण के वायुमंडल में बादलों की परतें मुख्य रूप से किससे बनी होती हैं?",
        answers: shuffle([
            { text: "पानी की बर्फ", correct: false },
            { text: "कार्बन डाइऑक्साइड की बर्फ", correct: false },
            { text: "अमोनिया और मीथेन की बर्फ", correct: true },
            { text: "सल्फर यौगिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अत्यधिक ठंडे तापमान के कारण, वरुण के वायुमंडल में मीथेन और अमोनिया जैसे यौगिक संघनित होकर बर्फीले बादल बनाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण ग्रह की सूर्य से औसत दूरी लगभग कितनी है?",
        answers: shuffle([
            { text: "1.5 अरब किलोमीटर", correct: false },
            { text: "2.8 अरब किलोमीटर", correct: false },
            { text: "4.5 अरब किलोमीटर", correct: true },
            { text: "5.9 अरब किलोमीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वरुण सूर्य से लगभग 30 खगोलीय इकाइयों (AU) की दूरी पर स्थित है, जो लगभग 4.5 अरब किलोमीटर के बराबर है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "निम्नलिखित में से किस ग्रह का घनत्व वरुण से अधिक है?",
        answers: shuffle([
            { text: "शनि", correct: false },
            { text: "यूरेनस", correct: false },
            { text: "बृहस्पति", correct: false },
            { text: "पृथ्वी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वरुण सभी गैस/बर्फीले दानवों में सबसे सघन (dense) है, लेकिन स्थलीय ग्रहों (जैसे पृथ्वी) का घनत्व उससे कहीं अधिक है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'प्रतिगामी कक्षा' (Retrograde Orbit) का क्या अर्थ है, जैसा कि ट्राइटन के मामले में है?",
        answers: shuffle([
            { text: "ग्रह के बहुत करीब परिक्रमा करना", correct: false },
            { text: "ग्रह की घूर्णन दिशा के विपरीत परिक्रमा करना", correct: true },
            { text: "एक बहुत ही अंडाकार पथ में परिक्रमा करना", correct: false },
            { text: "ग्रह के भूमध्य रेखा के ऊपर परिक्रमा करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ट्राइटन वरुण के घूमने की दिशा के उल्टी दिशा में परिक्रमा करता है, जिससे यह अनुमान लगाया जाता है कि यह मूल रूप से वरुण के साथ नहीं बना था, बल्कि बाद में इसके गुरुत्वाकर्षण द्वारा पकड़ लिया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण के वलयों में पाए जाने वाले 'वलय चाप' (Ring Arcs) का क्या नाम है?",
        answers: shuffle([
            { text: "लिबर्टी, इक्वलिटी, फ्रेटरनिटी", correct: true },
            { text: "अल्फा, बीटा, गामा", correct: false },
            { text: "एडम्स, गाले, ले वेरियर", correct: false },
            { text: "वॉयेजर, पायनियर, एक्सप्लोरर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एडम्स वलय के भीतर इन घने क्षेत्रों को फ्रांसीसी क्रांति के नारे पर यह नाम दिया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण का अक्षीय झुकाव लगभग कितना है, जो पृथ्वी के समान है?",
        answers: shuffle([
            { text: "3°", correct: false },
            { text: "28°", correct: true },
            { text: "60°", correct: false },
            { text: "98°", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वरुण का अक्षीय झुकाव 28.3 डिग्री है, जो पृथ्वी के 23.5 डिग्री के समान है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके कारण इस ग्रह पर भी मौसम बदलते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण ग्रह को \"पवन ग्रह\" (The Windy Planet) क्यों कहा जाता है?",
        answers: shuffle([
            { text: "क्योंकि यह बहुत तेजी से घूमता है", correct: false },
            { text: "क्योंकि इसका वायुमंडल बहुत घना है", correct: false },
            { text: "क्योंकि यहाँ सौरमंडल की सबसे तेज हवाएं चलती हैं", correct: true },
            { text: "क्योंकि इसका चुंबकीय क्षेत्र बहुत मजबूत है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वरुण पर सुपरसोनिक हवाएं चलती हैं, जो सौरमंडल में किसी भी अन्य ग्रह की तुलना में सबसे तेज हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण पर एक दिन उसकी एक परिक्रमा के समय की तुलना में कैसा होता है?",
        answers: shuffle([
            { text: "दिन बहुत लंबा और परिक्रमा बहुत छोटी", correct: false },
            { text: "दिन और परिक्रमा दोनों बहुत लंबे", correct: false },
            { text: "दिन बहुत छोटा और परिक्रमा बहुत लंबी", correct: true },
            { text: "दिन और परिक्रमा लगभग बराबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वरुण बहुत तेजी से घूमता है (लगभग 16 घंटे का एक दिन), लेकिन सूर्य से बहुत दूर होने के कारण इसकी परिक्रमा (एक वर्ष) में लगभग 165 पृथ्वी वर्ष लगते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण ग्रह का चुंबकीय क्षेत्र इसके घूर्णन अक्ष के संबंध में कैसा है?",
        answers: shuffle([
            { text: "पूरी तरह से संरेखित", correct: false },
            { text: "काफी हद तक झुका हुआ", correct: true },
            { text: "कोई चुंबकीय क्षेत्र नहीं है", correct: false },
            { text: "बहुत कमजोर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूरेनस की तरह, वरुण का चुंबकीय क्षेत्र भी इसके घूर्णन अक्ष से लगभग 47 डिग्री झुका हुआ है और ग्रह के केंद्र से दूर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण के वायुमंडल में सफेद बादल जो दिखाई देते हैं, वे किसके क्रिस्टल से बने होते हैं?",
        answers: shuffle([
            { text: "जमे हुए पानी", correct: false },
            { text: "जमे हुए अमोनिया", correct: false },
            { text: "जमे हुए मीथेन", correct: true },
            { text: "जमे हुए कार्बन डाइऑक्साइड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वरुण के ऊपरी वायुमंडल में मीथेन गैस जम जाती है और सफेद सिरस बादलों (cirrus clouds) का निर्माण करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण का कौन सा चंद्रमा लगभग गोलाकार न होकर एक आलू जैसा अनियमित आकार का है?",
        answers: shuffle([
            { text: "ट्राइटन", correct: false },
            { text: "नेरीड", correct: false },
            { text: "प्रोटियस", correct: true },
            { text: "लारिसा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोटियस इतना बड़ा होने के बावजूद गुरुत्वाकर्षण के कारण गोलाकार नहीं हो पाया है और इसका आकार बहुत ही अनियमित है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "2011 में वरुण ग्रह ने अपनी खोज के बाद से क्या महत्वपूर्ण मील का पत्थर पूरा किया?",
        answers: shuffle([
            { text: "सूर्य के सबसे करीब पहुंचा", correct: false },
            { text: "अपनी पहली परिक्रमा पूरी की", correct: true },
            { text: "अपना सबसे बड़ा तूफान खो दिया", correct: false },
            { text: "एक नया चंद्रमा खोजा गया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूंकि वरुण का परिक्रमण काल लगभग 165 वर्ष है, इसलिए 1846 में अपनी खोज के बाद इसने 2011 में सूर्य के चारों ओर अपना पहला पूरा चक्कर लगाया।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण के वलयों को पृथ्वी से देखना क्यों मुश्किल है?",
        answers: shuffle([
            { text: "क्योंकि वे बहुत दूर हैं", correct: false },
            { text: "क्योंकि वे बहुत गहरे रंग के और धुंधले हैं", correct: false },
            { text: "क्योंकि ग्रह बहुत चमकीला है", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वरुण की अत्यधिक दूरी, इसके वलयों का गहरा (कार्बन युक्त) और धुंधला होना, उन्हें पृथ्वी-आधारित दूरबीनों से देखना लगभग असंभव बना देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'ग्रेट डार्क स्पॉट' के अलावा, वोयेजर 2 ने वरुण पर और छोटे तूफान की खोज की थी, उसका नाम क्या था?",
        answers: shuffle([
            { text: "a) स्मॉल डार्क स्पॉट या D2", correct: false },
            { text: "b) द विजार्ड्स आई", correct: false },
            { text: "c) स्कूटर", correct: false },
            { text: "a) और b) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वोयेजर 2 ने एक छोटे काले धब्बे की खोज की थी जिसे 'स्मॉल डार्क स्पॉट' या 'D2' कहा जाता था, और एक और विशेषता जिसे 'द विजार्ड्स आई' कहा जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी की तुलना में वरुण पर गुरुत्वाकर्षण कैसा है?",
        answers: shuffle([
            { text: "बहुत कम", correct: false },
            { text: "लगभग समान", correct: false },
            { text: "थोड़ा अधिक", correct: true },
            { text: "बहुत अधिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपने बड़े आकार के बावजूद, वरुण का घनत्व कम है, इसलिए इसकी सतह पर (बादलों के शीर्ष पर) गुरुत्वाकर्षण पृथ्वी की तुलना में केवल 17% अधिक है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण के चंद्रमा 'ट्राइटन' का भविष्य क्या अनुमानित है?",
        answers: shuffle([
            { text: "यह ग्रह से दूर चला जाएगा", correct: false },
            { text: "यह वरुण के वलयों में टूट जाएगा या ग्रह से टकरा जाएगा", correct: true },
            { text: "यह स्थिर रहेगा", correct: false },
            { text: "यह एक बौना ग्रह बन जाएगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपनी प्रतिगामी कक्षा के कारण, ट्राइटन धीरे-धीरे वरुण की ओर बढ़ रहा है और लाखों वर्षों में ज्वारीय बलों द्वारा तोड़ दिया जाएगा, जिससे एक नया वलय बनेगा, या यह ग्रह में समा जाएगा।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण की खोज से पहले किस वैज्ञानिक ने एक ऐसे ही ग्रह के अस्तित्व की परिकल्पना की थी, लेकिन उनकी गणना प्रकाशित नहीं हुई?",
        answers: shuffle([
            { text: "निकोलो कैसियाटोर", correct: false },
            { text: "जॉन काउच एडम्स", correct: true },
            { text: "गैलीलियो गैलीली", correct: false },
            { text: "जोसेफ लालंडे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एडम्स ने ले वेरियर से पहले ही अपनी गणना पूरी कर ली थी, लेकिन उन्हें प्रकाशित करने में देरी हुई, जिससे खोज का श्रेय मुख्य रूप से ले वेरियर और गाले को मिला।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण ग्रह पर मौसमों की अवधि कितनी लंबी होती है?",
        answers: shuffle([
            { text: "लगभग 10 वर्ष", correct: false },
            { text: "लगभग 20 वर्ष", correct: false },
            { text: "लगभग 40 वर्ष", correct: true },
            { text: "लगभग 80 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वरुण का परिक्रमण काल 165 वर्ष है और इसका अक्षीय झुकाव पृथ्वी जैसा है, इसलिए प्रत्येक मौसम 40 पृथ्वी वर्ष से अधिक समय तक रहता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण का आंतरिक ताप स्रोत क्या है?",
        answers: shuffle([
            { text: "सौर ऊर्जा", correct: false },
            { text: "रेडियोधर्मी क्षय और ग्रह निर्माण से बची गर्मी", correct: true },
            { text: "ज्वारीय तापन", correct: false },
            { text: "कोई आंतरिक ताप स्रोत नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वरुण सूर्य से प्राप्त ऊर्जा से लगभग 2.6 गुना अधिक ऊर्जा उत्सर्जित करता है, जो इसके आंतरिक ताप स्रोत से आती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यही तेज हवाओं का कारण माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वरुण का सबसे बाहरी वलय कौन सा है?",
        answers: shuffle([
            { text: "गाले", correct: false },
            { text: "ले वेरियर", correct: false },
            { text: "एडम्स", correct: true },
            { text: "लसेल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एडम्स वलय सबसे बाहरी और सबसे प्रसिद्ध है क्योंकि इसमें प्रसिद्ध 'वलय चाप' मौजूद हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
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