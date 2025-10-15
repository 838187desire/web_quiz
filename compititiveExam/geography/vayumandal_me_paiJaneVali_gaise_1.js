const questions = [
    {
        topHeading: "वायुमंडलीय गैसों पर आधारित 50 MCQs part_1 (quiz_no.)"
    },
    {
        question: "वायुमंडल में आयतन के अनुसार सबसे प्रचुर मात्रा में कौन सी गैस है?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: false },
            { text: "आर्गन", correct: false },
            { text: "नाइट्रोजन", correct: true },
            { text: "कार्बन डाइऑक्साइड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वायुमंडल का लगभग 78% हिस्सा नाइट्रोजन गैस से बना है, जो इसे सबसे अधिक मात्रा में पाई जाने वाली गैस बनाता है।"
    },
    {
        question: "पृथ्वी पर जीवन के लिए दूसरी सबसे महत्वपूर्ण गैस कौन सी है, जो श्वसन के लिए आवश्यक है?",
        answers: shuffle([
            { text: "नाइट्रोजन", correct: false },
            { text: "ऑक्सीजन", correct: true },
            { text: "हाइड्रोजन", correct: false },
            { text: "हीलियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑक्सीजन (लगभग 21%) अधिकांश जीवों के लिए श्वसन प्रक्रिया के माध्यम से ऊर्जा उत्पन्न करने के लिए अनिवार्य है।"
    },
    {
        question: "वायुमंडल में तीसरी सबसे प्रचुर गैस कौन सी है?",
        answers: shuffle([
            { text: "कार्बन डाइऑक्साइड", correct: false },
            { text: "नियॉन", correct: false },
            { text: "आर्गन", correct: true },
            { text: "मीथेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आर्गन एक अक्रिय गैस है और यह वायुमंडल का लगभग 0.93% हिस्सा बनाती है, जो इसे नाइट्रोजन और ऑक्सीजन के बाद तीसरी सबसे प्रचुर गैस बनाती है।"
    },
    {
        question: "पौधे प्रकाश संश्लेषण की प्रक्रिया में किस गैस का उपयोग करते हैं?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: false },
            { text: "नाइट्रोजन", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: true },
            { text: "जल वाष्प", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पौधे सूर्य के प्रकाश की उपस्थिति में कार्बन डाइऑक्साइड और पानी का उपयोग करके अपना भोजन (ग्लूकोज) बनाते हैं और ऑक्सीजन छोड़ते हैं।"
    },
    {
        question: "कौन सी गैस सूर्य से आने वाली हानिकारक पराबैंगनी किरणों से पृथ्वी की रक्षा करती है?",
        answers: shuffle([
            { text: "ओजोन", correct: true },
            { text: "मीथेन", correct: false },
            { text: "क्सीनन", correct: false },
            { text: "क्रिप्टन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समतापमंडल में स्थित ओजोन (O₃) परत एक ढाल के रूप में कार्य करती है, जो सूर्य की अधिकांश हानिकारक यूवी-बी और यूवी-सी विकिरण को अवशोषित कर लेती है।"
    },
    {
        question: "निम्नलिखित में से कौन सी एक प्रमुख ग्रीनहाउस गैस है?",
        answers: shuffle([
            { text: "नाइट्रोजन", correct: false },
            { text: "ऑक्सीजन", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: true },
            { text: "आर्गन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्बन डाइऑक्साइड पृथ्वी द्वारा उत्सर्जित अवरक्त विकिरण (गर्मी) को सोख लेती है, जिससे वायुमंडल गर्म रहता है<br><br><i class='fa-solid fa-angles-right icon'></i> इसे ग्रीनहाउस प्रभाव कहा जाता है।"
    },
    {
        question: "वायुमंडल में सभी गैसों को एक साथ रखने वाला बल कौन सा है?",
        answers: shuffle([
            { text: "चुंबकीय बल", correct: false },
            { text: "केन्द्रापसारक बल", correct: false },
            { text: "गुरुत्वाकर्षण बल", correct: true },
            { text: "सौर पवन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी का गुरुत्वाकर्षण गैस के अणुओं को अपनी ओर खींचता है, जिससे वे अंतरिक्ष में फैलने के बजाय ग्रह के चारों ओर एक वायुमंडल बनाते हैं।"
    },
    {
        question: "दहन (जलने की प्रक्रिया) के लिए कौन सी गैस आवश्यक है?",
        answers: shuffle([
            { text: "नाइट्रोजन", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: false },
            { text: "ऑक्सीजन", correct: true },
            { text: "आर्गन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दहन एक रासायनिक प्रक्रिया है जिसमें किसी पदार्थ की ऑक्सीजन के साथ तीव्र प्रतिक्रिया होती है, जिससे गर्मी और प्रकाश उत्पन्न होता है।"
    },
    {
        question: "वायुमंडल में जलवाष्प की भूमिका क्या है?",
        answers: shuffle([
            { text: "यह एक प्रमुख ग्रीनहाउस गैस है", correct: false },
            { text: "यह मौसम की घटनाओं (जैसे बादल, वर्षा) को नियंत्रित करती है", correct: false },
            { text: "यह आर्द्रता का स्रोत है", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जलवाष्प गर्मी को सोखती है, वर्षा और बादलों के निर्माण के लिए आवश्यक है, और वायुमंडल में आर्द्रता का स्तर निर्धारित करती है।"
    },
    {
        question: "कौन सी गैस आग को तेजी से फैलने से रोकने में मदद करती है?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: false },
            { text: "हाइड्रोजन", correct: false },
            { text: "नाइट्रोजन", correct: true },
            { text: "मीथेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नाइट्रोजन दहन का समर्थन नहीं करती है<br><br><i class='fa-solid fa-angles-right icon'></i> वायुमंडल में इसकी उच्च सांद्रता ऑक्सीजन को पतला करती है, जिससे दहन की प्रक्रिया धीमी हो जाती है।"
    },
    {
        question: "\"पौधों के लिए पोषक तत्व\" के रूप में किस गैस को जाना जाता है?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: false },
            { text: "आर्गन", correct: false },
            { text: "नाइट्रोजन", correct: true },
            { text: "नियॉन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पौधे सीधे वायुमंडलीय नाइट्रोजन का उपयोग नहीं कर सकते, लेकिन मिट्टी में बैक्टीरिया इसे नाइट्रेट्स में बदलते हैं, जो पौधों की वृद्धि के लिए एक आवश्यक पोषक तत्व है।"
    },
    {
        question: "जीवाश्म ईंधन (कोयला, पेट्रोल, डीजल) के जलने से मुख्य रूप से कौन सी गैस वायुमंडल में छोड़ी जाती है?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: true },
            { text: "नाइट्रोजन", correct: false },
            { text: "हाइड्रोजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीवाश्म ईंधन कार्बन यौगिकों से बने होते हैं, और जब वे जलते हैं, तो कार्बन ऑक्सीजन के साथ मिलकर कार्बन डाइऑक्साइड बनाता है।"
    },
    {
        question: "वायुमंडल में ऑक्सीजन का मुख्य स्रोत क्या है?",
        answers: shuffle([
            { text: "ज्वालामुखी विस्फोट", correct: false },
            { text: "पौधों द्वारा प्रकाश संश्लेषण", correct: true },
            { text: "जानवरों द्वारा श्वसन", correct: false },
            { text: "जीवाश्म ईंधन का जलना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश संश्लेषण की प्रक्रिया के दौरान, पौधे कार्बन डाइऑक्साइड लेते हैं और उप-उत्पाद के रूप में ऑक्सीजन छोड़ते हैं, जो वायुमंडल में ऑक्सीजन का मुख्य स्रोत है।"
    },
    {
        question: "कौन सी गैस एक तीखी, दम घोंटने वाली गंध देती है और अक्सर ज्वालामुखियों से निकलती है?",
        answers: shuffle([
            { text: "कार्बन डाइऑक्साइड", correct: false },
            { text: "मीथेन", correct: false },
            { text: "सल्फर डाइऑक्साइड", correct: true },
            { text: "नाइट्रोजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सल्फर डाइऑक्साइड (SO₂) की एक तेज, जलन पैदा करने वाली गंध होती है जो जले हुए माचिस की गंध के समान होती है।"
    },
    {
        question: "मीथेन (CH₄) गैस का मुख्य प्राकृतिक स्रोत क्या है?",
        answers: shuffle([
            { text: "ज्वालामुखी", correct: false },
            { text: "आर्द्रभूमि (दलदली भूमि) और पशुधन", correct: true },
            { text: "जंगल की आग", correct: false },
            { text: "महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आर्द्रभूमि में अवायवीय जीवाणु और जुगाली करने वाले पशुओं (जैसे गाय) की पाचन प्रक्रिया बड़ी मात्रा में मीथेन का उत्पादन करती है।"
    },
    {
        question: "वायुमंडल में आयतन के अनुसार ऑक्सीजन का अनुमानित प्रतिशत कितना है?",
        answers: shuffle([
            { text: "78%", correct: false },
            { text: "1%", correct: false },
            { text: "21%", correct: true },
            { text: "0.04%", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुष्क हवा में लगभग 20.95% ऑक्सीजन होती है, जिसे आमतौर पर 21% माना जाता है।"
    },
    {
        question: "अम्ल वर्षा (Acid Rain) के लिए कौन सी दो गैसें मुख्य रूप से जिम्मेदार हैं?",
        answers: shuffle([
            { text: "कार्बन डाइऑक्साइड और मीथेन", correct: false },
            { text: "सल्फर डाइऑक्साइड और नाइट्रोजन ऑक्साइड", correct: true },
            { text: "ओजोन और क्लोरोफ्लोरोकार्बन", correct: false },
            { text: "ऑक्सीजन और नाइट्रोजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये गैसें वायुमंडल में पानी के साथ मिलकर क्रमशः सल्फ्यूरिक एसिड और नाइट्रिक एसिड बनाती हैं, जो वर्षा के साथ पृथ्वी पर गिरती हैं।"
    },
    {
        question: "कौन सी गैस वेल्डिंग में उपयोग की जाती है क्योंकि यह एक निष्क्रिय परिरक्षण वातावरण प्रदान करती है?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: false },
            { text: "हाइड्रोजन", correct: false },
            { text: "आर्गन", correct: true },
            { text: "नाइट्रोजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आर्गन की अक्रिय प्रकृति गर्म धातुओं को वायुमंडलीय ऑक्सीजन और नाइट्रोजन के साथ प्रतिक्रिया करने से रोकती है, जिससे एक मजबूत और साफ वेल्ड बनता है।"
    },
    {
        question: "क्लोरोफ्लोरोकार्बन (CFCs) द्वारा वायुमंडल की किस गैस को नष्ट किया जाता है?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: false },
            { text: "नाइट्रोजन", correct: false },
            { text: "ओजोन", correct: true },
            { text: "कार्बन डाइऑक्साइड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सीएफसी से निकलने वाले क्लोरीन और ब्रोमीन परमाणु समतापमंडलीय ओजोन अणुओं के साथ प्रतिक्रिया करके उन्हें नष्ट कर देते हैं, जिससे ओजोन परत पतली हो जाती है।"
    },
    {
        question: "सबसे हल्की गैस कौन सी है, जो वायुमंडल के सबसे ऊपरी हिस्से (बाह्यमंडल) में पाई जाती है?",
        answers: shuffle([
            { text: "हीलियम", correct: false },
            { text: "नियॉन", correct: false },
            { text: "हाइड्रोजन", correct: true },
            { text: "नाइट्रोजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाइड्रोजन सबसे हल्का तत्व है, और गुरुत्वाकर्षण कमजोर होने के कारण, यह वायुमंडल के उच्चतम स्तरों तक उठ जाता है और अक्सर अंतरिक्ष में पलायन कर जाता है।"
    },
    {
        question: "कौन सी गैस रंगीन विज्ञापन साइनबोर्ड में उपयोग की जाती है, जो एक विशिष्ट लाल-नारंगी चमक देती है?",
        answers: shuffle([
            { text: "आर्गन", correct: false },
            { text: "नियॉन", correct: true },
            { text: "क्रिप्टन", correct: false },
            { text: "हीलियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब नियॉन गैस से भरी ट्यूब में विद्युत प्रवाह किया जाता है, तो यह एक चमकदार लाल-नारंगी प्रकाश उत्सर्जित करती है।"
    },
    {
        question: "ग्लोबल वार्मिंग पोटेंशियल (GWP) के मामले में, कार्बन डाइऑक्साइड की तुलना में मीथेन कैसी है?",
        answers: shuffle([
            { text: "कम शक्तिशाली", correct: false },
            { text: "समान रूप से शक्तिशाली", correct: false },
            { text: "बहुत अधिक शक्तिशाली", correct: true },
            { text: "कोई पोटेंशियल नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हालांकि मीथेन वायुमंडल में कम समय तक रहती है, लेकिन यह गर्मी को रोकने में कार्बन डाइऑक्साइड की तुलना में 25-30 गुना अधिक प्रभावी है (100 साल की अवधि में)।"
    },
    {
        question: "पानी में घुलने पर कौन सी गैस कार्बोनिक एसिड बनाती है, जो सोडा वाटर को उसका स्वाद देती है?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: false },
            { text: "नाइट्रोजन", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: true },
            { text: "सल्फर डाइऑक्साइड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कार्बन डाइऑक्साइड (CO₂) पानी (H₂O) में घुलती है, तो यह कार्बोनिक एसिड (H₂CO₃) बनाती है, जिसका उपयोग कार्बोनेटेड पेय बनाने में किया जाता है।"
    },
    {
        question: "किस गैस को \"जीवन की गैस\" कहा जाता है?",
        answers: shuffle([
            { text: "नाइट्रोजन", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: false },
            { text: "ऑक्सीजन", correct: true },
            { text: "ओजोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिकांश जीवित प्राणियों को जीवित रहने और कोशिकीय श्वसन के लिए ऑक्सीजन की आवश्यकता होती है, इसलिए इसे जीवन की गैस कहा जाता है।"
    },
    {
        question: "वायुमंडल में नाइट्रोजन का प्रतिशत कितना स्थिर क्यों रहता है?",
        answers: shuffle([
            { text: "क्योंकि इसका उपयोग नहीं होता है", correct: false },
            { text: "नाइट्रोजन चक्र के कारण", correct: true },
            { text: "क्योंकि यह बहुत भारी है", correct: false },
            { text: "ज्वालामुखी गतिविधि के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नाइट्रोजन चक्र एक प्राकृतिक प्रक्रिया है जिसमें नाइट्रोजन वायुमंडल, मिट्टी और जीवित जीवों के बीच लगातार घूमती रहती है, जिससे इसकी मात्रा संतुलित रहती है।"
    },
    {
        question: "कौन सी गैस गहरे समुद्र में गोताखोरों द्वारा ऑक्सीजन के साथ मिलाकर उपयोग की जाती है ताकि उच्च दबाव में ऑक्सीजन विषाक्तता से बचा जा सके?",
        answers: shuffle([
            { text: "नाइट्रोजन", correct: false },
            { text: "आर्गन", correct: false },
            { text: "हीलियम", correct: true },
            { text: "हाइड्रोजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीलियम रक्त में नाइट्रोजन की तुलना में कम घुलनशील है और नाइट्रोजन नार्कोसिस (दबाव में बेहोशी) के जोखिम को कम करती है।"
    },
    {
        question: "वायुमंडल में कार्बन डाइऑक्साइड की सांद्रता में वृद्धि का मुख्य परिणाम क्या है?",
        answers: shuffle([
            { text: "ओजोन परत का पतला होना", correct: false },
            { text: "अम्ल वर्षा में वृद्धि", correct: false },
            { text: "भूमंडलीय तापन (ग्लोबल वार्मिंग)", correct: true },
            { text: "ऑक्सीजन के स्तर में कमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बढ़ी हुई कार्बन डाइऑक्साइड अधिक गर्मी को रोकती है, जिससे पृथ्वी की सतह और वायुमंडल का औसत तापमान बढ़ जाता है।"
    },
    {
        question: "कौन सी गैस पौधों और जानवरों के सड़ने पर उत्पन्न होती है?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: false },
            { text: "मीथेन", correct: true },
            { text: "ओजोन", correct: false },
            { text: "नियॉन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑक्सीजन की अनुपस्थिति में (अवायवीय अपघटन), माइक्रोऑर्गेनिज्म कार्बनिक पदार्थों को तोड़ते हैं और मीथेन गैस छोड़ते हैं।"
    },
    {
        question: "प्रकाश-रासायनिक धूम-कोहरा (Photochemical Smog) के निर्माण में कौन सी गैस एक प्रमुख घटक है?",
        answers: shuffle([
            { text: "कार्बन डाइऑक्साइड", correct: false },
            { text: "जमीनी स्तर पर ओजोन", correct: true },
            { text: "आर्गन", correct: false },
            { text: "मीथेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब सूर्य के प्रकाश की उपस्थिति में नाइट्रोजन ऑक्साइड और वाष्पशील कार्बनिक यौगिक प्रतिक्रिया करते हैं, तो वे जमीनी स्तर पर ओजोन बनाते हैं, जो स्मॉग का एक मुख्य हानिकारक घटक है।"
    },
    {
        question: "कौन सी गैस तरल रूप में रॉकेट ईंधन के रूप में उपयोग की जाती है?",
        answers: shuffle([
            { text: "तरल नाइट्रोजन", correct: false },
            { text: "तरल ऑक्सीजन", correct: true },
            { text: "तरल आर्गन", correct: false },
            { text: "तरल नियॉन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तरल ऑक्सीजन (LOX) एक शक्तिशाली ऑक्सीकारक के रूप में कार्य करती है, जो ईंधन (जैसे तरल हाइड्रोजन) के साथ मिलकर रॉकेट को आवश्यक जोर प्रदान करती है।"
    },
    {
        question: "वायुमंडलीय गैसों में, किसका आणविक भार सबसे अधिक है?",
        answers: shuffle([
            { text: "नियॉन", correct: false },
            { text: "क्रिप्टन", correct: false },
            { text: "क्सीनन", correct: true },
            { text: "आर्गन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्सीनन (Xe) एक बहुत ही दुर्लभ और भारी उत्कृष्ट गैस है, जिसका आणविक भार अन्य उल्लिखित गैसों की तुलना में सबसे अधिक है।"
    },
    {
        question: "श्वसन के दौरान, जीवधारी ऑक्सीजन लेते हैं और कौन सी गैस छोड़ते हैं?",
        answers: shuffle([
            { text: "नाइट्रोजन", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: true },
            { text: "मीथेन", correct: false },
            { text: "जल वाष्प", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशिकीय श्वसन की प्रक्रिया में, ग्लूकोज और ऑक्सीजन ऊर्जा, पानी और कार्बन डाइऑक्साइड में टूट जाते हैं, जिसे फिर शरीर से बाहर निकाल दिया जाता है।"
    },
    {
        question: "कौन सी गैस एक शक्तिशाली ऑक्सीकरण एजेंट है और इसका उपयोग पानी को कीटाणुरहित करने के लिए किया जाता है?",
        answers: shuffle([
            { text: "a) नाइट्रोजन", correct: false },
            { text: "b) क्लोरीन", correct: false },
            { text: "c) ओजोन", correct: false },
            { text: "b) और c) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओजोन (O₃) और क्लोरीन (Cl₂), दोनों ही शक्तिशाली ऑक्सीकारक हैं जो बैक्टीरिया और वायरस को नष्ट कर सकते हैं, इसलिए इनका उपयोग जल शोधन में किया जाता है।"
    },
    {
        question: "शुष्क हवा में नाइट्रोजन और ऑक्सीजन के बाद कौन सी गैसें सबसे प्रचुर मात्रा में (अवरोही क्रम में) हैं?",
        answers: shuffle([
            { text: "कार्बन डाइऑक्साइड, नियॉन, हीलियम", correct: false },
            { text: "आर्गन, कार्बन डाइऑक्साइड, नियॉन", correct: true },
            { text: "हीलियम, क्रिप्टन, क्सीनन", correct: false },
            { text: "मीथेन, ओजोन, हाइड्रोजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुष्क हवा में प्रचुरता का सही क्रम है: नाइट्रोजन > ऑक्सीजन > आर्गन (0.93%) > कार्बन डाइऑक्साइड (0.04%) > नियॉन (0.0018%)।"
    },
    {
        question: "\"हंसाने वाली गैस\" (Laughing Gas) का रासायनिक नाम क्या है, जो एक ग्रीनहाउस गैस भी है?",
        answers: shuffle([
            { text: "मीथेन", correct: false },
            { text: "सल्फर डाइऑक्साइड", correct: false },
            { text: "नाइट्रस ऑक्साइड (N₂O)", correct: true },
            { text: "कार्बन मोनोऑक्साइड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नाइट्रस ऑक्साइड का उपयोग निश्चेतक के रूप में किया जाता है और यह कृषि और औद्योगिक गतिविधियों से भी उत्सर्जित होती है, जो एक शक्तिशाली ग्रीनहाउस गैस है।"
    },
    {
        question: "इलेक्ट्रिक लाइट बल्बों में फिलामेंट को जलने से बचाने के लिए अक्सर किस अक्रिय गैस का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: false },
            { text: "हाइड्रोजन", correct: false },
            { text: "आर्गन", correct: true },
            { text: "नियॉन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आर्गन की अक्रिय प्रकृति गर्म टंगस्टन फिलामेंट को हवा में मौजूद ऑक्सीजन के साथ प्रतिक्रिया करने और जलने से रोकती है, जिससे बल्ब का जीवनकाल बढ़ जाता है।"
    },
    {
        question: "वायुमंडल में कौन सी गैस मात्रा के हिसाब से सबसे अधिक परिवर्तनशील है?",
        answers: shuffle([
            { text: "नाइट्रोजन", correct: false },
            { text: "ऑक्सीजन", correct: false },
            { text: "आर्गन", correct: false },
            { text: "जल वाष्प", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जल वाष्प की मात्रा स्थान और समय के आधार पर बहुत भिन्न होती है, जो शुष्क रेगिस्तान में लगभग 0% से लेकर आर्द्र उष्णकटिबंधीय क्षेत्रों में 4% तक हो सकती है।"
    },
    {
        question: "पृथ्वी के प्रारंभिक वायुमंडल में कौन सी गैस प्रमुख थी, लेकिन अब बहुत कम मात्रा में है?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: false },
            { text: "नाइट्रोजन", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: true },
            { text: "आर्गन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माना जाता है कि पृथ्वी के प्रारंभिक वायुमंडल में ज्वालामुखी विस्फोटों के कारण कार्बन डाइऑक्साइड का प्रभुत्व था, जिसे बाद में प्रकाश संश्लेषण करने वाले जीवों ने ऑक्सीजन में बदल दिया।"
    },
    {
        question: "कौन सी गैस मुख्य रूप से चावल के खेतों से उत्सर्जित होती है?",
        answers: shuffle([
            { text: "कार्बन डाइऑक्साइड", correct: false },
            { text: "मीथेन", correct: true },
            { text: "नाइट्रस ऑक्साइड", correct: false },
            { text: "सल्फर डाइऑक्साइड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पानी से भरे चावल के खेतों में अवायवीय जीवाणु कार्बनिक पदार्थों को विघटित करते हैं, जिससे बड़ी मात्रा में मीथेन गैस का उत्पादन होता है।"
    },
    {
        question: "वायु प्रदूषण के संदर्भ में, वाहनों से निकलने वाला \"कार्बन मोनोऑक्साइड\" (CO) स्वास्थ्य के लिए खतरनाक क्यों है?",
        answers: shuffle([
            { text: "यह एक ग्रीनहाउस गैस है", correct: false },
            { text: "यह रक्त में ऑक्सीजन ले जाने की क्षमता को कम करता है", correct: true },
            { text: "यह ओजोन परत को नष्ट करता है", correct: false },
            { text: "इससे अम्ल वर्षा होती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्बन मोनोऑक्साइड हीमोग्लोबिन के साथ ऑक्सीजन की तुलना में बहुत अधिक मजबूती से जुड़ता है, जिससे शरीर के ऊतकों तक ऑक्सीजन की आपूर्ति बाधित होती है।"
    },
    {
        question: "पृथ्वी के वायुमंडल में हीलियम का मुख्य स्रोत क्या है?",
        answers: shuffle([
            { text: "सौर पवन", correct: false },
            { text: "पृथ्वी के भीतर रेडियोधर्मी तत्वों का क्षय", correct: true },
            { text: "पौधों का अपघटन", correct: false },
            { text: "औद्योगिक प्रक्रियाएं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी की पपड़ी में यूरेनियम और थोरियम जैसे तत्वों के प्राकृतिक रेडियोधर्मी क्षय से अल्फा कण निकलते हैं, जो हीलियम के नाभिक होते हैं।"
    },
    {
        question: "यदि वायुमंडल में नाइट्रोजन न होती, तो दहन पर क्या प्रभाव पड़ता?",
        answers: shuffle([
            { text: "दहन नहीं होता", correct: false },
            { text: "दहन बहुत धीमा होता", correct: false },
            { text: "दहन बहुत तीव्र और अनियंत्रित होता", correct: true },
            { text: "कोई प्रभाव नहीं पड़ता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नाइट्रोजन ऑक्सीजन की सांद्रता को कम करती है<br><br><i class='fa-solid fa-angles-right icon'></i> शुद्ध ऑक्सीजन में, चीजें बहुत अधिक आसानी से और विस्फोटक रूप से जलती हैं।"
    },
    {
        question: "कौन सी उत्कृष्ट गैस (noble gas) रेडियोधर्मी है और फेफड़ों के कैंसर का एक प्रमुख कारण है?",
        answers: shuffle([
            { text: "हीलियम", correct: false },
            { text: "नियॉन", correct: false },
            { text: "आर्गन", correct: false },
            { text: "रेडॉन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेडॉन एक प्राकृतिक रूप से उत्पन्न होने वाली रेडियोधर्मी गैस है जो चट्टानों और मिट्टी में यूरेनियम के क्षय से बनती है<br><br><i class='fa-solid fa-angles-right icon'></i> यह घरों में जमा हो सकती है और साँस द्वारा अंदर लेने पर फेफड़ों के लिए हानिकारक होती है।"
    },
    {
        question: "प्रोटीन और न्यूक्लिक एसिड (डीएनए) के निर्माण के लिए कौन सी वायुमंडलीय गैस आवश्यक है?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: false },
            { text: "कार्बन", correct: false },
            { text: "नाइट्रोजन", correct: true },
            { text: "हाइड्रोजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नाइट्रोजन सभी अमीनो एसिड (जो प्रोटीन बनाते हैं) और न्यूक्लियोटाइड (जो डीएनए और आरएनए बनाते हैं) का एक प्रमुख घटक है।"
    },
    {
        question: "किस प्रक्रिया द्वारा वायुमंडलीय नाइट्रोजन को प्रयोग करने योग्य रूपों (जैसे अमोनिया) में परिवर्तित किया जाता है?",
        answers: shuffle([
            { text: "प्रकाश संश्लेषण", correct: false },
            { text: "श्वसन", correct: false },
            { text: "नाइट्रोजन स्थिरीकरण (Nitrogen Fixation)", correct: true },
            { text: "वाष्पीकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह प्रक्रिया कुछ विशेष बैक्टीरिया (जैसे राइजोबियम) और बिजली चमकने जैसी प्राकृतिक घटनाओं द्वारा की जाती है, जो वायुमंडलीय नाइट्रोजन (N₂) को पौधों के लिए प्रयोग करने योग्य यौगिकों में बदल देती है।"
    },
    {
        question: "\"स्थायी गैसें\" (Permanent Gases) किन्हें कहा जाता है?",
        answers: shuffle([
            { text: "वे गैसें जो हमेशा तरल रहती हैं", correct: false },
            { text: "वे गैसें जिनकी सांद्रता वायुमंडल में लगभग स्थिर रहती है", correct: true },
            { text: "वे गैसें जो बहुत भारी होती हैं", correct: false },
            { text: "वे गैसें जो प्रतिक्रिया नहीं करती हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नाइट्रोजन, ऑक्सीजन और आर्गन जैसी गैसों का अनुपात वायुमंडल में समय और स्थान के साथ बहुत कम बदलता है, इसलिए उन्हें स्थायी गैसें कहा जाता है।"
    },
    {
        question: "\"परिवर्तनशील गैसें\" (Variable Gases) का एक उदाहरण कौन सा है?",
        answers: shuffle([
            { text: "नाइट्रोजन", correct: false },
            { text: "ऑक्सीजन", correct: false },
            { text: "आर्गन", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्बन डाइऑक्साइड, जल वाष्प, मीथेन और ओजोन जैसी गैसों की मात्रा मानवीय गतिविधियों और प्राकृतिक प्रक्रियाओं के कारण समय और स्थान के साथ बदलती रहती है।"
    },
    {
        question: "कौन सी गैस अग्निशामक यंत्रों में उपयोग की जाती है क्योंकि यह ऑक्सीजन की आपूर्ति को रोकती है?",
        answers: shuffle([
            { text: "हीलियम", correct: false },
            { text: "नाइट्रोजन", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: true },
            { text: "हाइड्रोजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्बन डाइऑक्साइड हवा से भारी होती है और जलती हुई वस्तु के चारों ओर एक परत बनाकर उसे ऑक्सीजन से वंचित कर देती है, जिससे आग बुझ जाती है।"
    },
    {
        question: "कौन सी वायुमंडलीय गैस पृथ्वी को रात में बहुत अधिक ठंडा होने से रोकती है?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: false },
            { text: "नाइट्रोजन", correct: false },
            { text: "जल वाष्प और कार्बन डाइऑक्साइड", correct: true },
            { text: "आर्गन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये ग्रीनहाउस गैसें दिन के दौरान पृथ्वी द्वारा अवशोषित गर्मी को रात में अंतरिक्ष में वापस जाने से रोकती हैं, जिससे सतह गर्म बनी रहती है।"
    },
    {
        question: "शुष्क बर्फ (Dry Ice) किस गैस का ठोस रूप है?",
        answers: shuffle([
            { text: "नाइट्रोजन", correct: false },
            { text: "ऑक्सीजन", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: true },
            { text: "जल वाष्प", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कार्बन डाइऑक्साइड गैस को बहुत कम तापमान (-78.5°C) पर ठंडा किया जाता है, तो यह सीधे ठोस अवस्था में बदल जाती है, जिसे शुष्क बर्फ कहते हैं।"
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