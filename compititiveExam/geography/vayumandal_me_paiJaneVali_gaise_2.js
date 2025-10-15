const questions = [
    {
        topHeading: "वायुमंडलीय गैसों पर आधारित 50 MCQs part_2 (quiz_no.)"
    },
    {
        question: "ओजोन अणु ऑक्सीजन के कितने परमाणुओं से मिलकर बना होता है?",
        answers: shuffle([
            { text: "एक", correct: false },
            { text: "दो", correct: false },
            { text: "तीन", correct: true },
            { text: "चार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामान्य ऑक्सीजन अणु (O₂) में दो परमाणु होते हैं, जबकि ओजोन अणु (O₃) में तीन ऑक्सीजन परमाणु होते हैं।"
    },
    {
        question: "कौन सी गैस चिप्स जैसे खाद्य पदार्थों के पैकेट में भरी जाती है ताकि उन्हें बासी होने से बचाया जा सके?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: false },
            { text: "नाइट्रोजन", correct: true },
            { text: "हीलियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नाइट्रोजन एक अक्रिय गैस है जो ऑक्सीकरण को रोकती है, जिससे चिप्स और अन्य तले हुए स्नैक्स को ताजा और कुरकुरा रखने में मदद मिलती है।"
    },
    {
        question: "पृथ्वी के वायुमंडल के विकास में, किस घटना ने ऑक्सीजन की मात्रा को महत्वपूर्ण रूप से बढ़ाया?",
        answers: shuffle([
            { text: "ज्वालामुखी विस्फोट", correct: false },
            { text: "\"महान ऑक्सीकरण घटना\" (Great Oxidation Event)", correct: true },
            { text: "डायनासोर का विलुप्त होना", correct: false },
            { text: "हिमयुग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह लगभग 2.4 अरब साल पहले की अवधि थी जब साइनोबैक्टीरिया द्वारा प्रकाश संश्लेषण के माध्यम से उत्पादित ऑक्सीजन ने पहली बार वायुमंडल में जमा होना शुरू किया।"
    },
    {
        question: "समतापमंडल में ओजोन का निर्माण कैसे होता है?",
        answers: shuffle([
            { text: "प्रदूषण से", correct: false },
            { text: "सूर्य के पराबैंगनी विकिरण द्वारा ऑक्सीजन अणुओं (O₂) को तोड़ने से", correct: true },
            { text: "ज्वालामुखी से", correct: false },
            { text: "बादलों में रासायनिक प्रतिक्रियाओं से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पराबैंगनी विकिरण ऑक्सीजन अणु (O₂) को दो ऑक्सीजन परमाणुओं (O) में तोड़ देता है<br><br><i class='fa-solid fa-angles-right icon'></i> ये मुक्त परमाणु फिर दूसरे ऑक्सीजन अणुओं (O₂) से मिलकर ओजोन (O₃) बनाते हैं।"
    },
    {
        question: "निम्नलिखित में से कौन सी गैस प्राकृतिक रूप से उत्पन्न नहीं होती है?",
        answers: shuffle([
            { text: "मीथेन", correct: false },
            { text: "ओजोन", correct: false },
            { text: "क्लोरोफ्लोरोकार्बन (CFCs)", correct: true },
            { text: "कार्बन डाइऑक्साइड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सीएफसी पूरी तरह से मानव निर्मित यौगिक हैं, जिन्हें रेफ्रिजरेंट और एयरोसोल स्प्रे प्रोपेलेंट के रूप में उपयोग के लिए बनाया गया था।"
    },
    {
        question: "किस गैस की गंध सड़े हुए अंडे जैसी होती है?",
        answers: shuffle([
            { text: "अमोनिया", correct: false },
            { text: "हाइड्रोजन सल्फाइड", correct: true },
            { text: "मीथेन", correct: false },
            { text: "क्लोरीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाइड्रोजन सल्फाइड (H₂S) एक जहरीली गैस है जो अक्सर ज्वालामुखी, गर्म झरनों और कार्बनिक पदार्थों के अवायवीय अपघटन से उत्पन्न होती है।"
    },
    {
        question: "वायुमंडल में मौजूद कौन सी अक्रिय गैस का उपयोग लेजर में किया जाता है?",
        answers: shuffle([
            { text: "हीलियम-नियॉन", correct: false },
            { text: "आर्गन", correct: false },
            { text: "क्रिप्टन", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीलियम-नियॉन, आर्गन और क्रिप्टन जैसी कई अक्रिय गैसों का उपयोग विभिन्न प्रकार के गैस लेजर बनाने के लिए किया जाता है जो अलग-अलग रंगों का प्रकाश उत्पन्न करते हैं।"
    },
    {
        question: "\"प्राणवायु\" किस गैस का दूसरा नाम है?",
        answers: shuffle([
            { text: "नाइट्रोजन", correct: false },
            { text: "ऑक्सीजन", correct: true },
            { text: "कार्बन डाइऑक्साइड", correct: false },
            { text: "जल वाष्प", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि यह जीवन और श्वसन के लिए आवश्यक है, इसलिए ऑक्सीजन को अक्सर \"प्राणवायु\" कहा जाता है।"
    },
    {
        question: "किस गैस की कमी से उच्च ऊंचाई पर \"हाइपोक्सिया\" (ऑक्सीजन की कमी) हो सकती है?",
        answers: shuffle([
            { text: "नाइट्रोजन", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: false },
            { text: "ऑक्सीजन", correct: true },
            { text: "आर्गन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैसे-जैसे ऊंचाई बढ़ती है, वायुदाब कम हो जाता है, जिससे प्रति साँस में ली जाने वाली ऑक्सीजन की मात्रा कम हो जाती है, जिससे हाइपोक्सिया हो सकता है।"
    },
    {
        question: "यदि पृथ्वी का वायुमंडल केवल ऑक्सीजन से बना होता, तो क्या होता?",
        answers: shuffle([
            { text: "जीवन आसान होता", correct: false },
            { text: "वस्तुएं बहुत आसानी से और विनाशकारी रूप से जल जातीं", correct: true },
            { text: "पौधे तेजी से बढ़ते", correct: false },
            { text: "कोई परिवर्तन नहीं होता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुद्ध ऑक्सीजन एक अत्यंत शक्तिशाली ऑक्सीकारक है<br><br><i class='fa-solid fa-angles-right icon'></i> नाइट्रोजन की अनुपस्थिति में, आग को नियंत्रित करना लगभग असंभव होगा।"
    },
    {
        question: "कौन सी गैस एक \"असममित खिंचाव\" (asymmetric stretch) के कारण अवरक्त विकिरण को अवशोषित करती है, जो इसे एक प्रभावी ग्रीनहाउस गैस बनाती है?",
        answers: shuffle([
            { text: "नाइट्रोजन (N₂)", correct: false },
            { text: "ऑक्सीजन (O₂)", correct: false },
            { text: "कार्बन डाइऑक्साइड (CO₂)", correct: true },
            { text: "आर्गन (Ar)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> CO₂ जैसे अणु, जिनमें तीन या अधिक परमाणु होते हैं, अवरक्त विकिरण की ऊर्जा को अवशोषित करके कंपन कर सकते हैं, जबकि N₂ और O₂ जैसे द्वि-परमाणु अणु ऐसा नहीं कर सकते।"
    },
    {
        question: "\"वाष्पोत्सर्जन\" (Transpiration) की प्रक्रिया में पौधे कौन सी गैस छोड़ते हैं?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: false },
            { text: "जल वाष्प", correct: true },
            { text: "नाइट्रोजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वाष्पोत्सर्जन वह प्रक्रिया है जिसके द्वारा पौधे अपनी पत्तियों से पानी को वाष्प के रूप में छोड़ते हैं, जो वायुमंडल में आर्द्रता में योगदान देता है।"
    },
    {
        question: "कौन सी गैस वायुमंडल में स्वाभाविक रूप से बिजली चमकने से बनती है?",
        answers: shuffle([
            { text: "मीथेन", correct: false },
            { text: "ओजोन", correct: true },
            { text: "क्सीनन", correct: false },
            { text: "रेडॉन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिजली का एक शक्तिशाली विद्युत निर्वहन ऑक्सीजन अणुओं (O₂) को तोड़ सकता है, जो फिर से मिलकर ओजोन (O₃) बना सकते हैं, जिससे एक विशिष्ट गंध आती है।"
    },
    {
        question: "मानव गतिविधियों से उत्पन्न होने वाली कौन सी गैस सबसे बड़ी मात्रा में उत्सर्जित होती है?",
        answers: shuffle([
            { text: "मीथेन", correct: false },
            { text: "नाइट्रस ऑक्साइड", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: true },
            { text: "सीएफसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीवाश्म ईंधन जलाने, वनों की कटाई और औद्योगिक प्रक्रियाओं के कारण, कार्बन डाइऑक्साइड मानवजनित ग्रीनहाउस गैस उत्सर्जन का सबसे बड़ा हिस्सा है।"
    },
    {
        question: "किस गैस का उपयोग भोजन को तुरंत जमाने (flash freezing) के लिए किया जाता है?",
        answers: shuffle([
            { text: "तरल ऑक्सीजन", correct: false },
            { text: "तरल नाइट्रोजन", correct: true },
            { text: "तरल हीलियम", correct: false },
            { text: "तरल आर्गन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तरल नाइट्रोजन का तापमान बहुत कम (-196°C) होता है, जो भोजन को बहुत तेजी से जमा सकता है, जिससे छोटे बर्फ के क्रिस्टल बनते हैं और भोजन की बनावट बेहतर रहती है।"
    },
    {
        question: "कौन सी गैस पृथ्वी के वायुमंडल से धीरे-धीरे अंतरिक्ष में रिस रही है?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: false },
            { text: "नाइट्रोजन", correct: false },
            { text: "हीलियम", correct: true },
            { text: "कार्बन डाइऑक्साइड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीलियम इतनी हल्की है कि पृथ्वी का गुरुत्वाकर्षण इसे पूरी तरह से पकड़ नहीं पाता है, और यह धीरे-धीरे वायुमंडल के शीर्ष से अंतरिक्ष में पलायन कर जाती है।"
    },
    {
        question: "कौन सी गैस जानवरों के अपशिष्ट और उर्वरकों से उत्सर्जित होती है?",
        answers: shuffle([
            { text: "मीथेन और नाइट्रस ऑक्साइड", correct: true },
            { text: "कार्बन डाइऑक्साइड", correct: false },
            { text: "केवल मीथेन", correct: false },
            { text: "केवल नाइट्रस ऑक्साइड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्बनिक पदार्थों के अपघटन से मीथेन निकलती है, जबकि मिट्टी में माइक्रोबियल प्रक्रियाएं उर्वरकों में मौजूद नाइट्रोजन को नाइट्रस ऑक्साइड में बदल सकती हैं।"
    },
    {
        question: "वायुमंडल की कौन सी गैस सूर्य के प्रकाश का प्रकीर्णन (scattering) करके आकाश को नीला रंग देती है?",
        answers: shuffle([
            { text: "a) ऑक्सीजन", correct: false },
            { text: "b) नाइट्रोजन", correct: false },
            { text: "c) जल वाष्प", correct: false },
            { text: "a) और b) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नाइट्रोजन और ऑक्सीजन के अणु छोटे तरंग दैर्ध्य वाले प्रकाश (नीला और बैंगनी) को बड़े तरंग दैर्ध्य वाले प्रकाश (लाल और नारंगी) की तुलना में अधिक कुशलता से बिखेरते हैं, जिसे रेले प्रकीर्णन कहते हैं।"
    },
    {
        question: "पृथ्वी के वायुमंडल के अलावा, किस अन्य खगोलीय पिंड के वायुमंडल में मुख्य रूप से नाइट्रोजन है?",
        answers: shuffle([
            { text: "मंगल", correct: false },
            { text: "शुक्र", correct: false },
            { text: "टाइटन (शनि का चंद्रमा)", correct: true },
            { text: "बृहस्पति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टाइटन का वायुमंडल पृथ्वी से भी अधिक घना है और इसमें 95% से अधिक नाइट्रोजन है।"
    },
    {
        question: "\"अक्रिय गैसें\" (Inert Gases) या \"उत्कृष्ट गैसें\" (Noble Gases) आवर्त सारणी के किस समूह से संबंधित हैं?",
        answers: shuffle([
            { text: "समूह 1", correct: false },
            { text: "समूह 17", correct: false },
            { text: "समूह 18", correct: true },
            { text: "समूह 2", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समूह 18 (हीलियम, नियॉन, आर्गन, क्रिप्टन, क्सीनन, रेडॉन) के तत्वों का बाहरी इलेक्ट्रॉन कोश पूर्ण होता है, जिससे वे रासायनिक रूप से बहुत स्थिर और अक्रियाशील हो जाते हैं।"
    },
    {
        question: "किस गैस की उपस्थिति मंगल ग्रह को उसका लाल रंग देती है?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: false },
            { text: "नाइट्रोजन", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: false },
            { text: "कोई नहीं, यह सतह के कारण है", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगल का लाल रंग उसकी सतह पर मौजूद आयरन ऑक्साइड (जंग) के कारण है, न कि उसके वायुमंडल की किसी गैस के कारण<br><br><i class='fa-solid fa-angles-right icon'></i> उसका वायुमंडल मुख्य रूप से कार्बन डाइऑक्साइड से बना है।"
    },
    {
        question: "कौन सी गैस पृथ्वी के तापमान को नियंत्रित करने में महत्वपूर्ण भूमिका निभाती है?",
        answers: shuffle([
            { text: "केवल ऑक्सीजन", correct: false },
            { text: "केवल नाइट्रोजन", correct: false },
            { text: "ग्रीनहाउस गैसें (जैसे CO₂, H₂O, CH₄)", correct: true },
            { text: "केवल आर्गन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये गैसें पृथ्वी की गर्मी को रोककर एक \"कंबल\" प्रभाव पैदा करती हैं, जो ग्रह को रहने योग्य तापमान पर रखती हैं।"
    },
    {
        question: "यदि आप एक बंद कमरे में कोयला या लकड़ी जलाते हैं, तो कौन सी घातक गैस बन सकती है?",
        answers: shuffle([
            { text: "कार्बन डाइऑक्साइड", correct: false },
            { text: "कार्बन मोनोऑक्साइड", correct: true },
            { text: "सल्फर डाइऑक्साइड", correct: false },
            { text: "मीथेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपूर्ण दहन (जब ऑक्सीजन की आपूर्ति सीमित होती है) कार्बन मोनोऑक्साइड (CO) का उत्पादन करता है, जो एक रंगहीन, गंधहीन और अत्यधिक जहरीली गैस है।"
    },
    {
        question: "समतापमंडलीय ओजोन को \"अच्छा ओजोन\" क्यों कहा जाता है?",
        answers: shuffle([
            { text: "क्योंकि हम इसे सांस में ले सकते हैं", correct: false },
            { text: "क्योंकि यह हमें पराबैंगनी विकिरण से बचाता है", correct: true },
            { text: "क्योंकि यह ग्रीनहाउस प्रभाव को कम करता है", correct: false },
            { text: "क्योंकि यह पौधों को बढ़ने में मदद करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक सुरक्षात्मक परत के रूप में कार्य करता है, जबकि जमीनी स्तर पर ओजोन (\"खराब ओजोन\") एक वायु प्रदूषक है जो श्वसन संबंधी समस्याएं पैदा कर सकता है।"
    },
    {
        question: "कौन सी गैस पृथ्वी के वायुमंडल का लगभग 99% हिस्सा बनाती है?",
        answers: shuffle([
            { text: "नाइट्रोजन और कार्बन डाइऑक्साइड", correct: false },
            { text: "ऑक्सीजन और आर्गन", correct: false },
            { text: "नाइट्रोजन और ऑक्सीजन", correct: true },
            { text: "कार्बन डाइऑक्साइड और जल वाष्प", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नाइट्रोजन (≈78%) और ऑक्सीजन (≈21%) मिलकर वायुमंडल का लगभग 99% हिस्सा बनाते हैं।"
    },
    {
        question: "प्रकाश संश्लेषण और श्वसन की प्रक्रियाएं वायुमंडल में किन दो गैसों के बीच संतुलन बनाए रखती हैं?",
        answers: shuffle([
            { text: "नाइट्रोजन और आर्गन", correct: false },
            { text: "ऑक्सीजन और कार्बन डाइऑक्साइड", correct: true },
            { text: "मीथेन और ओजोन", correct: false },
            { text: "हाइड्रोजन और हीलियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पौधे प्रकाश संश्लेषण के दौरान CO₂ लेते हैं और O₂ छोड़ते हैं, जबकि जानवर श्वसन के दौरान O₂ लेते हैं और CO₂ छोड़ते हैं, जिससे एक चक्र बनता है।"
    },
    {
        question: "कौन सी गैस सबसे पहले पृथ्वी के वायुमंडल से लगभग पूरी तरह से गायब हो गई क्योंकि यह बहुत हल्की थी?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: false },
            { text: "हाइड्रोजन और हीलियम", correct: true },
            { text: "नाइट्रोजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी के प्रारंभिक वायुमंडल में ये गैसें प्रचुर मात्रा में थीं, लेकिन पृथ्वी का गुरुत्वाकर्षण उन्हें रोक नहीं सका और वे अंतरिक्ष में पलायन कर गईं।"
    },
    {
        question: "वायुमंडल में आर्गन का मुख्य स्रोत क्या है?",
        answers: shuffle([
            { text: "पौधों का अपघटन", correct: false },
            { text: "ज्वालामुखी विस्फोट", correct: false },
            { text: "पृथ्वी की पपड़ी में पोटेशियम-40 का रेडियोधर्मी क्षय", correct: true },
            { text: "जीवाश्म ईंधन का जलना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पोटेशियम-40, एक प्राकृतिक रूप से पाया जाने वाला रेडियोधर्मी आइसोटोप, क्षय होकर आर्गन-40 बनाता है, जो धीरे-धीरे वायुमंडल में रिसता है।"
    },
    {
        question: "कौन सी गैस पृथ्वी को एक \"नीले संगमरमर\" (Blue Marble) जैसा दिखाती है जब इसे अंतरिक्ष से देखा जाता है?",
        answers: shuffle([
            { text: "जल वाष्प", correct: false },
            { text: "ओजोन", correct: false },
            { text: "नाइट्रोजन और ऑक्सीजन", correct: false },
            { text: "यह पानी के कारण है", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी का नीला रंग मुख्य रूप से महासागरों द्वारा सूर्य के प्रकाश के परावर्तन और अवशोषण के कारण है, साथ ही वायुमंडल द्वारा नीले प्रकाश के प्रकीर्णन के कारण है।"
    },
    {
        question: "कौन सी गैस बृहस्पति और शनि जैसे गैस विशाल ग्रहों के वायुमंडल का मुख्य घटक है?",
        answers: shuffle([
            { text: "नाइट्रोजन और ऑक्सीजन", correct: false },
            { text: "हाइड्रोजन और हीलियम", correct: true },
            { text: "कार्बन डाइऑक्साइड और मीथेन", correct: false },
            { text: "आर्गन और नियॉन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये दो सबसे हल्के और ब्रह्मांड में सबसे प्रचुर तत्व हैं, और वे गैस विशाल ग्रहों का अधिकांश हिस्सा बनाते हैं।"
    },
    {
        question: "कौन सी गैस रेफ्रिजरेटर और एयर कंडीशनर में शीतलक (refrigerant) के रूप में उपयोग की जाती थी, लेकिन अब प्रतिबंधित है?",
        answers: shuffle([
            { text: "अमोनिया", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: false },
            { text: "क्लोरोफ्लोरोकार्बन (CFCs)", correct: true },
            { text: "प्रोपेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सीएफसी को उनके ओजोन-क्षयकारी गुणों के कारण मॉन्ट्रियल प्रोटोकॉल के तहत चरणबद्ध तरीके से समाप्त कर दिया गया था।"
    },
    {
        question: "पौधों की वृद्धि के लिए वायुमंडल से नाइट्रोजन प्राप्त करने की प्रक्रिया में कौन महत्वपूर्ण भूमिका निभाता है?",
        answers: shuffle([
            { text: "जानवर", correct: false },
            { text: "कवक", correct: false },
            { text: "बैक्टीरिया", correct: true },
            { text: "वायरस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिट्टी में और कुछ पौधों की जड़ों में रहने वाले नाइट्रोजन-फिक्सिंग बैक्टीरिया वायुमंडलीय नाइट्रोजन को पौधों द्वारा उपयोग किए जा सकने वाले रूपों में परिवर्तित करते हैं।"
    },
    {
        question: "किस गैस का घनत्व हवा से कम होता है, जिसके कारण भरे हुए गुब्बारे ऊपर की ओर उड़ते हैं?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: false },
            { text: "हीलियम", correct: true },
            { text: "आर्गन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीलियम आसपास की हवा (जो मुख्य रूप से नाइट्रोजन और ऑक्सीजन है) की तुलना में बहुत कम सघन है, इसलिए उत्प्लावन बल इसे ऊपर की ओर धकेलता है।"
    },
    {
        question: "कौन सी गैस सामान्यतः निष्क्रिय होती है, लेकिन उच्च तापमान और दबाव पर प्रतिक्रिया कर सकती है, जैसे कि कार के इंजन में?",
        answers: shuffle([
            { text: "आर्गन", correct: false },
            { text: "नियॉन", correct: false },
            { text: "नाइट्रोजन", correct: true },
            { text: "हीलियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार के इंजन के अंदर की चरम स्थितियों में, नाइट्रोजन और ऑक्सीजन प्रतिक्रिया करके नाइट्रोजन ऑक्साइड (NOx) बना सकते हैं, जो एक प्रमुख वायु प्रदूषक है।"
    },
    {
        question: "जब बिजली चमकती है, तो कौन सी दो प्रमुख वायुमंडलीय गैसें प्रतिक्रिया करके प्रदूषक बनाती हैं?",
        answers: shuffle([
            { text: "कार्बन डाइऑक्साइड और जल वाष्प", correct: false },
            { text: "नाइट्रोजन और ऑक्सीजन", correct: true },
            { text: "आर्गन और नियॉन", correct: false },
            { text: "मीथेन और ऑक्सीजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिजली की तीव्र ऊर्जा नाइट्रोजन और ऑक्सीजन को प्रतिक्रिया करने और नाइट्रोजन ऑक्साइड बनाने का कारण बनती है, जो अम्ल वर्षा और स्मॉग में योगदान करते हैं।"
    },
    {
        question: "शुक्र ग्रह का वायुमंडल इतना गर्म (लगभग 465°C) क्यों है?",
        answers: shuffle([
            { text: "क्योंकि यह सूर्य के बहुत करीब है", correct: false },
            { text: "क्योंकि इसमें अनियंत्रित ग्रीनहाउस प्रभाव है", correct: true },
            { text: "क्योंकि इसमें बहुत सारे ज्वालामुखी हैं", correct: false },
            { text: "क्योंकि यह तेजी से घूमता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र का वायुमंडल 96% से अधिक कार्बन डाइऑक्साइड से बना है, जो एक अत्यंत शक्तिशाली ग्रीनहाउस प्रभाव पैदा करता है जो गर्मी को फंसा लेता है और सतह के तापमान को अत्यधिक बढ़ा देता है।"
    },
    {
        question: "कौन सी गैस मनुष्यों द्वारा महसूस की जाने वाली गंध और स्वाद में कोई योगदान नहीं देती है?",
        answers: shuffle([
            { text: "a) ऑक्सीजन", correct: false },
            { text: "b) नाइट्रोजन", correct: false },
            { text: "c) हाइड्रोजन सल्फाइड", correct: false },
            { text: "a) और b) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुद्ध नाइट्रोजन और ऑक्सीजन दोनों रंगहीन, गंधहीन और स्वादहीन गैसें हैं।"
    },
    {
        question: "\"अक्रिय गैसों\" को यह नाम क्यों दिया गया है?",
        answers: shuffle([
            { text: "क्योंकि वे दुर्लभ हैं", correct: false },
            { text: "क्योंकि वे प्रतिक्रिया नहीं करती हैं या बहुत कम प्रतिक्रिया करती हैं", correct: true },
            { text: "क्योंकि वे भारी हैं", correct: false },
            { text: "क्योंकि वे हल्की हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उनका पूर्ण बाहरी इलेक्ट्रॉन कोश उन्हें अत्यंत स्थिर बनाता है, इसलिए वे अन्य तत्वों के साथ आसानी से रासायनिक बंधन नहीं बनाती हैं।"
    },
    {
        question: "पृथ्वी पर जीवन के अस्तित्व के लिए गैसों का कौन सा संयोजन सबसे महत्वपूर्ण है?",
        answers: shuffle([
            { text: "नाइट्रोजन, आर्गन, नियॉन", correct: false },
            { text: "ऑक्सीजन, कार्बन डाइऑक्साइड, नाइट्रोजन, जल वाष्प", correct: true },
            { text: "हीलियम, हाइड्रोजन, क्रिप्टन", correct: false },
            { text: "ओजोन, मीथेन, सल्फर डाइऑक्साइड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑक्सीजन श्वसन के लिए, कार्बन डाइऑक्साइड प्रकाश संश्लेषण के लिए, नाइट्रोजन जीवन के निर्माण खंडों के लिए और जल वाष्प जल चक्र और तापमान विनियमन के लिए आवश्यक है।"
    },
    {
        question: "यदि वायुमंडल में सभी ग्रीनहाउस गैसें हटा दी जाएं, तो पृथ्वी पर क्या प्रभाव पड़ेगा?",
        answers: shuffle([
            { text: "पृथ्वी का तापमान बढ़ जाएगा", correct: false },
            { text: "पृथ्वी नाटकीय रूप से ठंडी हो जाएगी (लगभग -18°C)", correct: true },
            { text: "कोई महत्वपूर्ण प्रभाव नहीं पड़ेगा", correct: false },
            { text: "केवल महासागर ठंडे हो जाएंगे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्राकृतिक ग्रीनहाउस प्रभाव के बिना, जो ग्रह को लगभग 33°C गर्म रखता है, पृथ्वी जीवन का समर्थन करने के लिए बहुत ठंडी हो जाएगी।"
    },
    {
        question: "कौन सी गैस स्वाभाविक रूप से सड़ते हुए कचरे के ढेर (लैंडफिल) से उत्पन्न होती है?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: false },
            { text: "मीथेन", correct: true },
            { text: "नाइट्रोजन", correct: false },
            { text: "हीलियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैंडफिल में कार्बनिक कचरे का अवायवीय अपघटन बड़ी मात्रा में \"लैंडफिल गैस\" का उत्पादन करता है, जो मुख्य रूप से मीथेन और कार्बन डाइऑक्साइड का मिश्रण है।"
    },
    {
        question: "किस गैस का उपयोग MRI (मैग्नेटिक रेजोनेंस इमेजिंग) स्कैनर में सुपरकंडक्टिंग मैग्नेट को ठंडा करने के लिए किया जाता है?",
        answers: shuffle([
            { text: "तरल नाइट्रोजन", correct: false },
            { text: "तरल हीलियम", correct: true },
            { text: "तरल आर्गन", correct: false },
            { text: "तरल ऑक्सीजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तरल हीलियम का क्वथनांक बहुत कम (लगभग -269°C) होता है, जो इसे MRI में उपयोग किए जाने वाले शक्तिशाली मैग्नेट को उनके आवश्यक सुपरकंडक्टिंग तापमान तक ठंडा रखने के लिए आदर्श बनाता है।"
    },
    {
        question: "कौन सी गैस एक अणु के रूप में मौजूद नहीं है, बल्कि एक मुक्त परमाणु के रूप में वायुमंडल के बहुत ऊपरी हिस्से में पाई जाती है?",
        answers: shuffle([
            { text: "आणविक ऑक्सीजन (O₂)", correct: false },
            { text: "परमाण्विक ऑक्सीजन (O)", correct: true },
            { text: "आणविक नाइट्रोजन (N₂)", correct: false },
            { text: "ओजोन (O₃)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तापमंडल में, तीव्र सौर विकिरण ऑक्सीजन अणुओं (O₂) को अलग-अलग ऑक्सीजन परमाणुओं (O) में तोड़ देता है।"
    },
    {
        question: "कौन सी गैस प्राकृतिक गैस का मुख्य घटक है?",
        answers: shuffle([
            { text: "प्रोपेन", correct: false },
            { text: "ब्यूटेन", correct: false },
            { text: "मीथेन", correct: true },
            { text: "ईथेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्राकृतिक गैस मुख्य रूप से मीथेन (CH₄) से बनी होती है, साथ ही इसमें अन्य हाइड्रोकार्बन की थोड़ी मात्रा भी होती है।"
    },
    {
        question: "वायुमंडल के बिना, पृथ्वी की सतह पर दिन और रात के तापमान में क्या अंतर होता?",
        answers: shuffle([
            { text: "बहुत कम", correct: false },
            { text: "कोई अंतर नहीं", correct: false },
            { text: "अत्यधिक (दिन में बहुत गर्म, रात में बहुत ठंडा)", correct: true },
            { text: "केवल थोड़ा अधिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वायुमंडल एक कंबल की तरह काम करता है, जो दिन में गर्मी को नियंत्रित करता है और रात में गर्मी को बनाए रखता है, जिससे तापमान में भारी उतार-चढ़ाव को रोका जा सकता है, जैसा कि चंद्रमा पर होता है।"
    },
    {
        question: "कौन सी गैस हवा से भारी है?",
        answers: shuffle([
            { text: "हीलियम", correct: false },
            { text: "मीथेन", correct: false },
            { text: "हाइड्रोजन", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्बन डाइऑक्साइड का आणविक भार (≈44) हवा के औसत आणविक भार (≈29) से अधिक है, इसलिए यह नीचे की ओर बैठती है।"
    },
    {
        question: "कौन सी गैस हवा से हल्की है?",
        answers: shuffle([
            { text: "आर्गन", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: false },
            { text: "मीथेन", correct: true },
            { text: "क्सीनन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मीथेन का आणविक भार (≈16) हवा के औसत आणविक भार (≈29) से कम है, इसलिए यह ऊपर की ओर उठती है।"
    },
    {
        question: "कौन सी गैस उच्च-तीव्रता वाले लैंप और फोटोग्राफिक फ्लैश में उपयोग की जाती है?",
        answers: shuffle([
            { text: "नियॉन", correct: false },
            { text: "हीलियम", correct: false },
            { text: "क्सीनन", correct: true },
            { text: "आर्गन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्सीनन एक बहुत तेज, सफेद प्रकाश उत्पन्न करता है जब इससे विद्युत प्रवाह किया जाता है, जो इसे फ्लैश लैंप, प्रोजेक्टर और कार हेडलाइट्स के लिए उपयोगी बनाता है।"
    },
    {
        question: "कौन सी गैस पौधों को मुरझाने से बचाने में मदद करती है?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: false },
            { text: "जल वाष्प", correct: true },
            { text: "नाइट्रोजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वायुमंडल में जल वाष्प (आर्द्रता) पौधों से पानी के वाष्पीकरण की दर को कम करती है, जिससे उन्हें अपनी संरचना बनाए रखने में मदद मिलती है।"
    },
    {
        question: "जानवरों द्वारा छोड़ी जाने वाली मुख्य गैस कौन सी है?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: true },
            { text: "नाइट्रोजन", correct: false },
            { text: "मीथेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्वसन की प्रक्रिया के माध्यम से, सभी जानवर ऊर्जा के लिए चयापचय करते समय कार्बन डाइऑक्साइड को एक अपशिष्ट उत्पाद के रूप में छोड़ते हैं।"
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