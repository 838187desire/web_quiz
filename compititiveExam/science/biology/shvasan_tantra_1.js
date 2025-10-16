const questions = [
    {
        topHeading: "श्वसन तंत्र पर आधारित 50 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1: मनुष्य में श्वसन की प्रक्रिया कहाँ से शुरू होती है?",
        answers: shuffle([
            { text: "फेफड़े", correct: false },
            { text: "श्वासनली", correct: false },
            { text: "नासिका", correct: true },
            { text: "मुँह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्वसन की प्रक्रिया नासिका (नाक) से शुरू होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जहां हवा शरीर में प्रवेश करती है और इसे गर्म, आर्द्र और फ़िल्टर किया जाता है।"
    },
    {
        question: "प्रश्न 2: भोजन को श्वास नली में जाने से कौन रोकता है?",
        answers: shuffle([
            { text: "एपिग्लॉटिस", correct: true },
            { text: "डायाफ्राम", correct: false },
            { text: "श्वासनली", correct: false },
            { text: "स्वरयंत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एपिग्लॉटिस एक पत्ती के आकार का फ्लैप है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो निगलते समय श्वास नली (ट्रेकिआ) को बंद कर देता है, जिससे भोजन फेफड़ों में जाने से रुक जाता है।"
    },
    {
        question: "प्रश्न 3: मनुष्य में गैसों का विनिमय (Exchange of gases) कहाँ होता है?",
        answers: shuffle([
            { text: "श्वासनली (Trachea)", correct: false },
            { text: "श्वसनी (Bronchi)", correct: false },
            { text: "वायुकोष्ठिका (Alveoli)", correct: true },
            { text: "नासिका गुहा (Nasal Cavity)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फेफड़ों में मौजूद छोटी-छोटी थैलियाँ, जिन्हें वायुकोष्ठिका या एल्वियोली कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इनमें ऑक्सीजन और कार्बन डाइऑक्साइड का विनिमय रक्त के साथ होता है।"
    },
    {
        question: "प्रश्न 4: एक सामान्य वयस्क व्यक्ति प्रति मिनट कितनी बार सांस लेता है?",
        answers: shuffle([
            { text: "5-10 बार", correct: false },
            { text: "12-16 बार", correct: true },
            { text: "20-25 बार", correct: false },
            { text: "25-30 बार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आराम की स्थिति में, एक स्वस्थ वयस्क व्यक्ति की श्वसन दर औसतन 12 से 16 सांस प्रति मिनट होती है।"
    },
    {
        question: "प्रश्न 5: श्वसन की प्रक्रिया को नियंत्रित करने वाला मस्तिष्क का भाग कौन सा है?",
        answers: shuffle([
            { text: "सेरिबैलम", correct: false },
            { text: "मेडुला ऑब्लांगेटा", correct: true },
            { text: "सेरिब्रम", correct: false },
            { text: "हाइपोथैलेमस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेडुला ऑब्लांगेटा मस्तिष्क का वह हिस्सा है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो अनैच्छिक कार्यों जैसे श्वास, हृदय गति और रक्तचाप को नियंत्रित करता है।"
    },
    {
        question: "प्रश्न 6: ऑक्सीजन का परिवहन रक्त में मुख्य रूप से किसके द्वारा होता है?",
        answers: shuffle([
            { text: "प्लाज्मा", correct: false },
            { text: "हीमोग्लोबिन", correct: true },
            { text: "श्वेत रक्त कोशिकाएं (WBC)", correct: false },
            { text: "प्लेटलेट्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल रक्त कोशिकाओं में मौजूद प्रोटीन हीमोग्लोबिन।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह फेफड़ों से ऑक्सीजन को बांधकर शरीर के ऊतकों तक पहुंचाता है।"
    },
    {
        question: "प्रश्न 7: जब हम सांस छोड़ते हैं तो डायाफ्राम की क्या स्थिति होती है?",
        answers: shuffle([
            { text: "सिकुड़ता है और चपटा हो जाता है।", correct: false },
            { text: "शिथिल होता है और गुंबद के आकार का हो जाता है।", correct: true },
            { text: "कोई परिवर्तन नहीं होता।", correct: false },
            { text: "ऊपर की ओर उठता है और सिकुड़ता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निःश्वसन (सांस छोड़ने) के दौरान, डायाफ्राम और पसलियों की मांसपेशियां शिथिल हो जाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे वक्ष गुहा का आयतन कम हो जाता है और हवा बाहर निकल जाती है।"
    },
    {
        question: "प्रश्न 8: कोशिकीय श्वसन (Cellular Respiration) कहाँ होता है?",
        answers: shuffle([
            { text: "केंद्रक (Nucleus)", correct: false },
            { text: "राइबोसोम (Ribosome)", correct: false },
            { text: "माइटोकॉन्ड्रिया (Mitochondria)", correct: true },
            { text: "लाइसोसोम (Lysosome)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशिकीय श्वसन की प्रक्रिया कोशिका के माइटोकॉन्ड्रिया में होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जहाँ ग्लूकोज और ऑक्सीजन से ऊर्जा (ATP) का उत्पादन होता है।"
    },
    {
        question: "प्रश्न 9: इलेक्ट्रॉन परिवहन श्रृंखला (Electron Transport Chain) कहाँ होती है?",
        answers: shuffle([
            { text: "माइटोकॉन्ड्रिया के बाह्य झिल्ली में", correct: false },
            { text: "माइटोकॉन्ड्रिया के आंतरिक झिल्ली में", correct: true },
            { text: "कोशिका द्रव्य में", correct: false },
            { text: "राइबोसोम पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इलेक्ट्रॉन परिवहन श्रृंखला, जो वायवीय श्वसन का अंतिम चरण है और सबसे अधिक ATP का उत्पादन करती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह माइटोकॉन्ड्रिया की आंतरिक झिल्ली पर होती है।"
    },
    {
        question: "प्रश्न 10: फेफड़ों के ऊपर का आवरण क्या कहलाता है?",
        answers: shuffle([
            { text: "पेरिकार्डियम", correct: false },
            { text: "प्लूरा", correct: true },
            { text: "मेनिन्जेस", correct: false },
            { text: "पेरिटोनियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फेफड़े प्लूरा नामक एक दोहरी झिल्ली से ढके होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो उन्हें घर्षण से बचाती है।"
    },
    {
        question: "प्रश्न 11: स्वरयंत्र (Larynx) का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "भोजन को निगलना", correct: false },
            { text: "ध्वनि उत्पन्न करना", correct: true },
            { text: "हवा को फ़िल्टर करना", correct: false },
            { text: "रक्त शुद्ध करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्वरयंत्र, जिसे वॉयस बॉक्स भी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसमें वोकल कॉर्ड होते हैं जो हवा के गुजरने पर कंपन करके ध्वनि उत्पन्न करते हैं।"
    },
    {
        question: "प्रश्न 12: अवायवीय श्वसन (Anaerobic Respiration) का अंतिम उत्पाद क्या है?",
        answers: shuffle([
            { text: "लैक्टिक एसिड या इथेनॉल", correct: true },
            { text: "कार्बन डाइऑक्साइड और पानी", correct: false },
            { text: "ग्लूकोज", correct: false },
            { text: "ऑक्सीजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑक्सीजन की अनुपस्थिति में होने वाले अवायवीय श्वसन में।<br><br><i class='fa-solid fa-angles-right icon'></i>  मांसपेशियों में लैक्टिक एसिड और यीस्ट में इथेनॉल और CO₂ बनते हैं।"
    },
    {
        question: "प्रश्न 13: 'टाइडॅल वोल्यूम' (Tidal Volume) क्या है?",
        answers: shuffle([
            { text: "गहरी सांस लेने पर फेफड़ों में हवा की मात्रा", correct: false },
            { text: "गहरी सांस छोड़ने के बाद फेफड़ों में बची हवा", correct: false },
            { text: "सामान्य सांस लेने के दौरान अंदर या बाहर ली गई हवा की मात्रा", correct: true },
            { text: "फेफड़ों की कुल क्षमता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टाइडॅल वोल्यूम हवा की वह मात्रा है जिसे एक व्यक्ति आराम की स्थिति में सामान्य रूप से अंदर लेता या बाहर छोड़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह लगभग 500 मिलीलीटर होती है।"
    },
    {
        question: "प्रश्न 14: हीमोग्लोबिन में कौन सी धातु होती है?",
        answers: shuffle([
            { text: "मैग्नीशियम", correct: false },
            { text: "लोहा (आयरन)", correct: true },
            { text: "कैल्शियम", correct: false },
            { text: "कोबाल्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीमोग्लोबिन अणु के केंद्र में आयरन (Fe²⁺) परमाणु होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो ऑक्सीजन के अणुओं को बांधने के लिए आवश्यक है।"
    },
    {
        question: "प्रश्न 15: धूम्रपान से फेफड़ों का कौन सा रोग होता है?",
        answers: shuffle([
            { text: "निमोनिया", correct: false },
            { text: "अस्थमा", correct: false },
            { text: "वातस्फीति (Emphysema)", correct: true },
            { text: "तपेदिक (Tuberculosis)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धूम्रपान वायुकोष्ठिका (एल्वियोली) की दीवारों को नुकसान पहुँचाता है, जिससे वे फट जाती हैं और गैस विनिमय के लिए सतह क्षेत्र कम हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इस स्थिति को वातस्फीति (Emphysema) कहते हैं।"
    },
    {
        question: "प्रश्न 16: हाइपोक्सिया (Hypoxia) क्या है?",
        answers: shuffle([
            { text: "रक्त में CO₂ का उच्च स्तर", correct: false },
            { text: "ऊतकों में ऑक्सीजन की कमी", correct: true },
            { text: "रक्त में ऑक्सीजन का उच्च स्तर", correct: false },
            { text: "श्वसन दर का रुक जाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाइपोक्सिया एक ऐसी स्थिति है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें शरीर के ऊतकों को पर्याप्त मात्रा में ऑक्सीजन नहीं मिल पाती है।"
    },
    {
        question: "प्रश्न 17: श्वासनली (Trachea) में मौजूद 'C' आकार के कार्टिलेज के छल्लों का क्या कार्य है?",
        answers: shuffle([
            { text: "हवा को गर्म करना", correct: false },
            { text: "श्वासनली को पिचकने से रोकना", correct: true },
            { text: "ध्वनि उत्पन्न करना", correct: false },
            { text: "धूल के कणों को रोकना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये कार्टिलेज के छल्ले श्वासनली को खुला रखते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  ताकि हवा आसानी से फेफड़ों तक आ-जा सके और सांस लेने के दौरान यह पिचक न जाए।"
    },
    {
        question: "प्रश्न 18: 'साइनसाइटिस' (Sinusitis) शरीर के किस भाग का संक्रमण है?",
        answers: shuffle([
            { text: "फेफड़े", correct: false },
            { text: "गला", correct: false },
            { text: "साइनस (Sinuses)", correct: true },
            { text: "नाक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> साइनसाइटिस खोपड़ी की हड्डियों में मौजूद हवा से भरी गुहाओं, जिन्हें साइनस कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  इनकी सूजन या संक्रमण है।"
    },
    {
        question: "प्रश्न 19: बोह्र प्रभाव (Bohr Effect) के अनुसार, रक्त में CO₂ की सांद्रता बढ़ने पर हीमोग्लोबिन की ऑक्सीजन से बंधुता पर क्या प्रभाव पड़ता है?",
        answers: shuffle([
            { text: "बढ़ जाती है", correct: false },
            { text: "कम हो जाती है", correct: true },
            { text: "कोई प्रभाव नहीं पड़ता", correct: false },
            { text: "पहले बढ़ती है फिर घटती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बोह्र प्रभाव बताता है कि जब रक्त में कार्बन डाइऑक्साइड का स्तर बढ़ता है (जिससे pH कम होता है)।<br><br><i class='fa-solid fa-angles-right icon'></i>  तो हीमोग्लोबिन की ऑक्सीजन को बांधने की क्षमता कम हो जाती है, जिससे ऊतकों में ऑक्सीजन आसानी से मुक्त हो जाती है।"
    },
    {
        question: "प्रश्न 20: फेफड़ों की कुल क्षमता (Total Lung Capacity) कितनी होती है?",
        answers: shuffle([
            { text: "लगभग 2500 मिलीलीटर", correct: false },
            { text: "लगभग 4000 मिलीलीटर", correct: false },
            { text: "लगभग 6000 मिलीलीटर", correct: true },
            { text: "लगभग 8000 मिलीलीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक वयस्क पुरुष के फेफड़ों की कुल क्षमता, यानी अधिकतम सांस भरने के बाद फेफड़ों में मौजूद हवा की कुल मात्रा।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह लगभग 6 लीटर (6000 मिलीलीटर) होती है।"
    },
    {
        question: "प्रश्न 21: कौन सी गैस हीमोग्लोबिन से ऑक्सीजन की तुलना में अधिक तेजी से बंधती है?",
        answers: shuffle([
            { text: "नाइट्रोजन", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: false },
            { text: "कार्बन मोनोऑक्साइड", correct: true },
            { text: "मीथेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्बन मोनोऑक्साइड (CO) की हीमोग्लोबिन से बंधने की क्षमता ऑक्सीजन की तुलना में 200-250 गुना अधिक होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे यह अत्यंत विषैली गैस बन जाती है।"
    },
    {
        question: "प्रश्न 22: एस्फिक्सिया (Asphyxia) क्या है?",
        answers: shuffle([
            { text: "शरीर में पानी की कमी", correct: false },
            { text: "दम घुटना (शरीर में ऑक्सीजन की कमी और CO₂ की अधिकता)", correct: true },
            { text: "अत्यधिक रक्तस्राव", correct: false },
            { text: "रक्त शर्करा का कम होना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एस्फिक्सिया वह स्थिति है जब शरीर को पर्याप्त ऑक्सीजन नहीं मिल पाती।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे बेहोशी या मृत्यु हो सकती है।"
    },
    {
        question: "प्रश्न 23: निःश्वसन (Expiration) एक ________ प्रक्रिया है, जबकि अंतःश्वसन (Inspiration) एक ________ प्रक्रिया है।",
        answers: shuffle([
            { text: "सक्रिय, निष्क्रिय", correct: false },
            { text: "निष्क्रिय, सक्रिय", correct: true },
            { text: "सक्रिय, सक्रिय", correct: false },
            { text: "निष्क्रिय, निष्क्रिय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामान्य निःश्वसन (सांस छोड़ना) एक निष्क्रिय प्रक्रिया है क्योंकि इसमें मांसपेशियां शिथिल होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जबकि अंतःश्वसन (सांस लेना) एक सक्रिय प्रक्रिया है क्योंकि इसमें डायाफ्राम और पसलियों की मांसपेशियों को सिकुड़ना पड़ता है।"
    },
    {
        question: "प्रश्न 24: पर्वतारोहियों को ऊंचाई पर सांस लेने में कठिनाई क्यों होती है?",
        answers: shuffle([
            { text: "हवा का तापमान कम होता है", correct: false },
            { text: "हवा का घनत्व कम होता है", correct: false },
            { text: "हवा का आंशिक दाब (Partial Pressure) कम होता है", correct: true },
            { text: "हवा में धूल के कण अधिक होते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिक ऊंचाई पर, वायुमंडलीय दबाव कम हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे ऑक्सीजन का आंशिक दाब भी कम हो जाता है। इस कारण फेफड़ों में पर्याप्त ऑक्सीजन नहीं जा पाती।"
    },
    {
        question: "प्रश्न 25: ग्लाइकोलिसिस (Glycolysis) की प्रक्रिया कहाँ होती है?",
        answers: shuffle([
            { text: "माइटोकॉन्ड्रिया", correct: false },
            { text: "कोशिका द्रव्य (Cytoplasm)", correct: true },
            { text: "केंद्रक", correct: false },
            { text: "राइबोसोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्लाइकोलिसिस, जो कोशिकीय श्वसन का पहला चरण है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह कोशिका द्रव्य (Cytoplasm) में होता है और इसमें ग्लूकोज पाइरुविक एसिड में टूटता है।"
    },
    {
        question: "प्रश्न 26: श्वसन के दौरान ऊर्जा किस रूप में उत्पन्न होती है?",
        answers: shuffle([
            { text: "एडीपी (ADP)", correct: false },
            { text: "एटीपी (ATP)", correct: true },
            { text: "आरएनए (RNA)", correct: false },
            { text: "एनएडीपी (NADP)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्वसन का मुख्य उद्देश्य भोजन के ऑक्सीकरण से ऊर्जा को एडेनोसिन ट्राइफॉस्फेट (ATP) के रूप में संचित करना है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसे कोशिका की \"ऊर्जा मुद्रा\" कहा जाता है।"
    },
    {
        question: "प्रश्न 27: कीटों में श्वसन अंग क्या हैं?",
        answers: shuffle([
            { text: "फेफड़े", correct: false },
            { text: "क्लोम (Gills)", correct: false },
            { text: "श्वास रंध्र और श्वास नली (Spiracles and Trachea)", correct: true },
            { text: "त्वचा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कीटों में श्वास नलियों (Trachea) का एक जाल होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो शरीर की सतह पर मौजूद श्वास रंध्रों (Spiracles) के माध्यम से सीधे ऊतकों तक हवा पहुंचाता है।"
    },
    {
        question: "प्रश्न 28: मछलियां पानी में कैसे सांस लेती हैं?",
        answers: shuffle([
            { text: "फेफड़ों से", correct: false },
            { text: "त्वचा से", correct: false },
            { text: "गलफड़ों (Gills) से", correct: true },
            { text: "मुँह से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मछलियां अपने गलफड़ों (Gills) का उपयोग करके पानी में घुली हुई ऑक्सीजन को अवशोषित करती हैं।"
    },
    {
        question: "प्रश्न 29: वह आयतन जो बलपूर्वक निःश्वसन के बाद भी फेफड़ों में शेष रहता है, क्या कहलाता है?",
        answers: shuffle([
            { text: "टाइडॅल वोल्यूम (Tidal Volume)", correct: false },
            { text: "अवशिष्ट आयतन (Residual Volume)", correct: true },
            { text: "जैविक क्षमता (Vital Capacity)", correct: false },
            { text: "निःश्वसन आरक्षित आयतन (Expiratory Reserve Volume)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवशिष्ट आयतन हवा की वह मात्रा है जो अधिकतम प्रयास के साथ सांस छोड़ने के बाद भी फेफड़ों में बची रहती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह फेफड़ों को पिचकने से रोकती है।"
    },
    {
        question: "प्रश्न 30: 'ब्रोंकाइटिस' (Bronchitis) श्वसन तंत्र के किस भाग की सूजन है?",
        answers: shuffle([
            { text: "वायुकोष्ठिका (Alveoli)", correct: false },
            { text: "श्वसनी (Bronchi)", correct: true },
            { text: "श्वासनली (Trachea)", correct: false },
            { text: "फेफड़े की झिल्ली (Pleura)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्रोंकाइटिस फेफड़ों में जाने वाली मुख्य वायुमार्गों, यानी श्वसनी (Bronchi) और श्वसनिकाओं (Bronchioles) की परत की सूजन है।"
    },
    {
        question: "प्रश्न 31: रक्त में कार्बन डाइऑक्साइड (CO₂) का परिवहन मुख्य रूप से किस रूप में होता है?",
        answers: shuffle([
            { text: "हीमोग्लोबिन से जुड़कर", correct: false },
            { text: "प्लाज्मा में घुलकर", correct: false },
            { text: "बाइकार्बोनेट आयनों के रूप में", correct: true },
            { text: "कार्बोनिक एसिड के रूप में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लगभग 70% कार्बन डाइऑक्साइड का परिवहन रक्त में बाइकार्बोनेट आयनों (HCO₃⁻) के रूप में होता है।"
    },
    {
        question: "प्रश्न 32: फेफड़ों की कार्यात्मक इकाई (Functional Unit) क्या है?",
        answers: shuffle([
            { text: "ब्रोंकिओल (Bronchiole)", correct: false },
            { text: "न्यूरॉन (Neuron)", correct: false },
            { text: "नेफ्रॉन (Nephron)", correct: false },
            { text: "वायुकोष्ठिका (Alveolus)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वायुकोष्ठिका (एल्वियोलस) फेफड़ों की सबसे छोटी और मुख्य कार्यात्मक इकाई है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जहाँ गैसों का वास्तविक विनिमय होता है।"
    },
    {
        question: "प्रश्न 33: कौन सा जीव त्वचा से श्वसन करता है?",
        answers: shuffle([
            { text: "मछली", correct: false },
            { text: "मेंढक", correct: true },
            { text: "पक्षी", correct: false },
            { text: "मनुष्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेंढक अपनी नम त्वचा का उपयोग श्वसन के लिए कर सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  खासकर जब वह पानी में होता है। वह फेफड़ों से भी सांस लेता है।"
    },
    {
        question: "प्रश्न 34: 'अस्थमा' (Asthma) रोग में क्या होता है?",
        answers: shuffle([
            { text: "फेफड़ों में पानी भर जाता है", correct: false },
            { text: "वायुकोष्ठिका क्षतिग्रस्त हो जाती है", correct: false },
            { text: "श्वास नलिकाएं संकरी हो जाती हैं", correct: true },
            { text: "श्वसन मांसपेशियां कमजोर हो जाती हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अस्थमा में, एलर्जी या अन्य कारकों के कारण श्वास नलिकाओं (Bronchioles) में सूजन आ जाती है और वे संकरी हो जाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे सांस लेने में कठिनाई होती है।"
    },
    {
        question: "प्रश्न 35: क्रेब्स चक्र (Krebs Cycle) की प्रक्रिया कहाँ संपन्न होती है?",
        answers: shuffle([
            { text: "कोशिका द्रव्य", correct: false },
            { text: "माइटोकॉन्ड्रिया के मैट्रिक्स में", correct: true },
            { text: "माइटोकॉन्ड्रिया की आंतरिक झिल्ली पर", correct: false },
            { text: "केंद्रक में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रेब्स चक्र, जो वायवीय श्वसन का एक महत्वपूर्ण चरण है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह माइटोकॉन्ड्रिया के मैट्रिक्स (आंतरिक द्रव) में होता है।"
    },
    {
        question: "प्रश्न 36: इलेक्ट्रॉन परिवहन श्रृंखला (Electron Transport Chain) कहाँ होती है?",
        answers: shuffle([
            { text: "माइटोकॉन्ड्रिया के बाह्य झिल्ली में", correct: false },
            { text: "माइटोकॉन्ड्रिया के आंतरिक झिल्ली में", correct: true },
            { text: "कोशिका द्रव्य में", correct: false },
            { text: "राइबोसोम पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इलेक्ट्रॉन परिवहन श्रृंखला, जो वायवीय श्वसन का अंतिम चरण है और सबसे अधिक ATP का उत्पादन करती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह माइटोकॉन्ड्रिया की आंतरिक झिल्ली पर होती है।"
    },
    {
        question: "प्रश्न 37: एक सामान्य मनुष्य की जैविक क्षमता (Vital Capacity) लगभग कितनी होती है?",
        answers: shuffle([
            { text: "1500 मिलीलीटर", correct: false },
            { text: "2500 मिलीलीटर", correct: false },
            { text: "4500 मिलीलीटर", correct: true },
            { text: "6000 मिलीलीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैविक क्षमता हवा की वह अधिकतम मात्रा है जिसे एक व्यक्ति गहरी सांस लेने के बाद बलपूर्वक बाहर निकाल सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह औसतन 4-5 लीटर होती है।"
    },
    {
        question: "प्रश्न 38: हेल्डन प्रभाव (Haldane Effect) किससे संबंधित है?",
        answers: shuffle([
            { text: "ऑक्सीजन का परिवहन", correct: false },
            { text: "कार्बन डाइऑक्साइड का परिवहन", correct: true },
            { text: "नाइट्रोजन का परिवहन", correct: false },
            { text: "रक्त का थक्का जमना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेल्डन प्रभाव बताता है कि जब हीमोग्लोबिन ऑक्सीजन युक्त होता है (ऑक्सीहीमोग्लोबिन)।<br><br><i class='fa-solid fa-angles-right icon'></i>  तो उसकी CO₂ ले जाने की क्षमता कम हो जाती है, जिससे फेफड़ों में CO₂ का मुक्त होना आसान हो जाता है।"
    },
    {
        question: "प्रश्न 39: फेफड़ों में हवा भरने की प्रक्रिया क्या कहलाती है?",
        answers: shuffle([
            { text: "निःश्वसन (Expiration)", correct: false },
            { text: "अंतःश्वसन (Inspiration)", correct: true },
            { text: "अवशोषण (Absorption)", correct: false },
            { text: "परिसंचरण (Circulation)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंतःश्वसन या साँस लेना वह प्रक्रिया है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसके द्वारा हवा फेफड़ों के अंदर खींची जाती है।"
    },
    {
        question: "प्रश्न 40: श्वसन का अंतिम उत्पाद क्या है?",
        answers: shuffle([
            { text: "ग्लूकोज, ऑक्सीजन और ऊर्जा", correct: false },
            { text: "कार्बन डाइऑक्साइड, पानी और ऊर्जा (ATP)", correct: true },
            { text: "लैक्टिक एसिड और ऊर्जा", correct: false },
            { text: "ऑक्सीजन, पानी और ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशिकीय श्वसन की समग्र प्रक्रिया में ग्लूकोज और ऑक्सीजन का उपयोग करके कार्बन डाइऑक्साइड, पानी और एटीपी के रूप में ऊर्जा का उत्पादन होता है।"
    },
    {
        question: "प्रश्न 41: श्वसन गुणांक (Respiratory Quotient - RQ) क्या है?",
        answers: shuffle([
            { text: "उत्पन्न CO₂ का आयतन / प्रयुक्त O₂ का आयतन", correct: true },
            { text: "प्रयुक्त O₂ का आयतन / उत्पन्न CO₂ का आयतन", correct: false },
            { text: "उत्पन्न ATP की संख्या / प्रयुक्त ग्लूकोज की संख्या", correct: false },
            { text: "कुल निःश्वसित हवा / कुल अंतःश्वसित हवा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्वसन गुणांक श्वसन के दौरान मुक्त हुई कार्बन डाइऑक्साइड और उपयोग की गई ऑक्सीजन के आयतन का अनुपात है।"
    },
    {
        question: "प्रश्न 42: कार्बोहाइड्रेट के लिए श्वसन गुणांक (RQ) का मान कितना होता है?",
        answers: shuffle([
            { text: "1 से कम", correct: false },
            { text: "1", correct: true },
            { text: "1 से अधिक", correct: false },
            { text: "0", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब श्वसन में कार्बोहाइड्रेट (जैसे ग्लूकोज) का उपयोग होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  तो उत्पन्न CO₂ और प्रयुक्त O₂ की मात्रा बराबर होती है, इसलिए RQ का मान 1 होता है।"
    },
    {
        question: "प्रश्न 43: व्यावसायिक श्वसन रोग 'सिलिकोसिस' (Silicosis) का क्या कारण है?",
        answers: shuffle([
            { text: "कोयले के कण", correct: false },
            { text: "सिलिका के कण", correct: true },
            { text: "एस्बेस्टस के रेशे", correct: false },
            { text: "लोहे के कण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिलिकोसिस एक फेफड़ों की बीमारी है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो खदानों, कांच और पत्थर काटने के उद्योगों में काम करने वाले लोगों में सिलिका की धूल के कणों को सांस के साथ अंदर लेने से होती है।"
    },
    {
        question: "प्रश्न 44: मानव शरीर में कौन सी संरचना श्वसन और पाचन तंत्र दोनों का हिस्सा है?",
        answers: shuffle([
            { text: "ग्रसनी (Pharynx)", correct: true },
            { text: "ग्रासनली (Esophagus)", correct: false },
            { text: "श्वासनली (Trachea)", correct: false },
            { text: "स्वरयंत्र (Larynx)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रसनी या गला (Pharynx) वह मार्ग है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे भोजन ग्रासनली में और हवा श्वासनली में जाती है, इसलिए यह दोनों प्रणालियों का एक साझा हिस्सा है।"
    },
    {
        question: "प्रश्न 45: हिचकी (Hiccup) का क्या कारण है?",
        answers: shuffle([
            { text: "फेफड़ों का तेजी से सिकुड़ना", correct: false },
            { text: "डायाफ्राम का अनैच्छिक संकुचन", correct: true },
            { text: "हृदय गति का बढ़ना", correct: false },
            { text: "पेट में गैस का बनना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिचकी डायाफ्राम की मांसपेशियों के अचानक, अनैच्छिक संकुचन के कारण होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसके तुरंत बाद वोकल कॉर्ड बंद हो जाते हैं, जिससे \"हिक\" की ध्वनि उत्पन्न होती है।"
    },
    {
        question: "प्रश्न 46: सर्फेक्टेंट (Surfactant) नामक पदार्थ का क्या कार्य है?",
        answers: shuffle([
            { text: "गैसों के विनिमय में मदद करना", correct: false },
            { text: "वायुकोष्ठिका के सतही तनाव को कम करना", correct: true },
            { text: "फेफड़ों को संक्रमण से बचाना", correct: false },
            { text: "हवा को नम करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सर्फेक्टेंट एक वसायुक्त पदार्थ है जो वायुकोष्ठिका की आंतरिक सतह पर मौजूद होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और सतही तनाव को कम करके उन्हें पिचकने से रोकता है।"
    },
    {
        question: "प्रश्न 47: 'डेड स्पेस' (Dead Space) हवा क्या है?",
        answers: shuffle([
            { text: "अवशिष्ट आयतन", correct: false },
            { text: "वायु जो गैस विनिमय में भाग नहीं लेती है", correct: true },
            { text: "फेफड़ों की कुल क्षमता", correct: false },
            { text: "निःश्वासित हवा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डेड स्पेस हवा की वह मात्रा है जो श्वसन पथ (नाक, ग्रसनी, श्वासनली) में रहती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और गैस विनिमय के लिए वायुकोष्ठिका तक नहीं पहुंचती है।"
    },
    {
        question: "प्रश्न 48: फेफड़ों का अध्ययन क्या कहलाता है?",
        answers: shuffle([
            { text: "कार्डियोलॉजी", correct: false },
            { text: "पल्मोनोलॉजी", correct: true },
            { text: "नेफ्रोलॉजी", correct: false },
            { text: "हेपेटोलॉजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पल्मोनोलॉजी चिकित्सा की वह शाखा है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो श्वसन तंत्र और इससे संबंधित रोगों के अध्ययन से संबंधित है।"
    },
    {
        question: "प्रश्न 49: रक्त द्वारा फेफड़ों में लाया गया CO₂ मुख्य रूप से किससे बनता है?",
        answers: shuffle([
            { text: "वसा के विघटन से", correct: false },
            { text: "प्रोटीन के विघटन से", correct: false },
            { text: "कोशिकीय श्वसन से", correct: true },
            { text: "ग्लाइकोजन के विघटन से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्बन डाइऑक्साइड कोशिकीय श्वसन का एक उप-उत्पाद है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जहां कोशिकाएं ऊर्जा प्राप्त करने के लिए ग्लूकोज को तोड़ती हैं।"
    },
    {
        question: "प्रश्न 50: डायाफ्राम क्या है?",
        answers: shuffle([
            { text: "एक हड्डी", correct: false },
            { text: "एक उपास्थि", correct: false },
            { text: "एक मांसपेशी", correct: true },
            { text: "एक झिल्ली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डायाफ्राम एक बड़ी, गुंबद के आकार की मांसपेशी है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो वक्ष गुहा (Thoracic cavity) को उदर गुहा (Abdominal cavity) से अलग करती है और श्वसन में महत्वपूर्ण भूमिका निभाती है।"
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