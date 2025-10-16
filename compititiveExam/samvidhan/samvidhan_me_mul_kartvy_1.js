const questions = [
    {
        topHeading: "मूल कर्तव्य पर आधारित 50 बहुविकल्पीय प्रश्न (quiz_no.)"
    },
    {
        question: "प्रश्न 1: भारतीय संविधान में मूल कर्तव्यों को किस देश के संविधान से प्रेरित होकर शामिल किया गया है?",
        answers: shuffle([
            { text: "संयुक्त राज्य अमेरिका (USA)", correct: false },
            { text: "यूनाइटेड किंगडम (UK)", correct: false },
            { text: "पूर्व सोवियत संघ (USSR)", correct: true },
            { text: "आयरलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान में मूल कर्तव्यों की अवधारणा पूर्व सोवियत संघ (अब रूस) के संविधान से ली गई है।"
    },
    {
        question: "प्रश्न 2: मूल कर्तव्यों का वर्णन संविधान के किस भाग में किया गया है?",
        answers: shuffle([
            { text: "भाग III", correct: false },
            { text: "भाग IV", correct: false },
            { text: "भाग IV-A", correct: true },
            { text: "भाग V", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मूल कर्तव्यों को 42वें संविधान संशोधन द्वारा संविधान में एक नया भाग, भाग IV-A, जोड़कर शामिल किया गया था।"
    },
    {
        question: "प्रश्न 3: संविधान का कौन सा अनुच्छेद मूल कर्तव्यों से संबंधित है?",
        answers: shuffle([
            { text: "अनुच्छेद 32", correct: false },
            { text: "अनुच्छेद 51", correct: false },
            { text: "अनुच्छेद 51-A", correct: true },
            { text: "अनुच्छेद 21", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के भाग IV-A में एकमात्र अनुच्छेद 51-A है, जिसमें सभी 11 मूल कर्तव्यों का उल्लेख किया गया है।"
    },
    {
        question: "प्रश्न 4: किस संवैधानिक संशोधन अधिनियम द्वारा भारतीय संविधान में मूल कर्तव्यों को जोड़ा गया?",
        answers: shuffle([
            { text: "40वां संशोधन अधिनियम", correct: false },
            { text: "42वां संशोधन अधिनियम", correct: true },
            { text: "44वां संशोधन अधिनियम", correct: false },
            { text: "52वां संशोधन अधिनियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 42वें संविधान संशोधन अधिनियम, 1976 के माध्यम से भारतीय संविधान में 10 मूल कर्तव्यों को जोड़ा गया था।"
    },
    {
        question: "प्रश्न 5: किस समिति की सिफारिशों के आधार पर भारतीय संविधान में मूल कर्तव्यों को शामिल किया गया था?",
        answers: shuffle([
            { text: "बलवंत राय मेहता समिति", correct: false },
            { text: "सरदार स्वर्ण सिंह समिति", correct: true },
            { text: "अशोक मेहता समिति", correct: false },
            { text: "वर्मा समिति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1976 में कांग्रेस पार्टी द्वारा गठित सरदार स्वर्ण सिंह समिति ने संविधान में मूल कर्तव्यों का एक अलग अध्याय शामिल करने की सिफारिश की थी।"
    },
    {
        question: "प्रश्न 6: 1976 में 42वें संशोधन द्वारा कितने मूल कर्तव्यों को जोड़ा गया था?",
        answers: shuffle([
            { text: "8", correct: false },
            { text: "10", correct: true },
            { text: "11", correct: false },
            { text: "12", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रारंभ में, 42वें संविधान संशोधन के माध्यम से अनुच्छेद 51-A के तहत 10 मूल कर्तव्यों को सूचीबद्ध किया गया था।"
    },
    {
        question: "प्रश्न 7: वर्तमान में भारतीय संविधान में कुल कितने मूल कर्तव्य हैं?",
        answers: shuffle([
            { text: "9", correct: false },
            { text: "10", correct: false },
            { text: "11", correct: true },
            { text: "12", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वर्तमान में संविधान में कुल 11 मूल कर्तव्य हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> 11वां मूल कर्तव्य 2002 में जोड़ा गया था।"
    },
    {
        question: "प्रश्न 8: 11वां मूल कर्तव्य किस संशोधन द्वारा जोड़ा गया?",
        answers: shuffle([
            { text: "42वें संशोधन, 1976", correct: false },
            { text: "44वें संशोधन, 1978", correct: false },
            { text: "86वें संशोधन, 2002", correct: true },
            { text: "92वें संशोधन, 2003", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 86वें संविधान संशोधन अधिनियम, 2002 द्वारा 11वां मूल कर्तव्य जोड़ा गया, जो शिक्षा के अवसर से संबंधित है।"
    },
    {
        question: "प्रश्न 9: निम्नलिखित में से कौन सा एक मूल कर्तव्य नहीं है?",
        answers: shuffle([
            { text: "संविधान का पालन करना", correct: false },
            { text: "देश की रक्षा करना", correct: false },
            { text: "करों का भुगतान करना", correct: true },
            { text: "सार्वजनिक संपत्ति को सुरक्षित रखना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'करों का भुगतान करना' एक कानूनी दायित्व है, लेकिन यह अनुच्छेद 51-A के तहत उल्लिखित 11 मूल कर्तव्यों में से एक नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> स्वर्ण सिंह समिति ने इसकी सिफारिश की थी, लेकिन इसे शामिल नहीं किया गया।"
    },
    {
        question: "प्रश्न 10: मूल कर्तव्यों की प्रकृति कैसी है?",
        answers: shuffle([
            { text: "न्यायोचित (Justiciable)", correct: false },
            { text: "गैर-न्यायोचित (Non-Justiciable)", correct: true },
            { text: "कुछ कर्तव्य न्यायोचित हैं और कुछ नहीं", correct: false },
            { text: " कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मूल कर्तव्य गैर-न्यायोचित हैं, जिसका अर्थ है कि उनके उल्लंघन के लिए सीधे तौर पर अदालत द्वारा कानूनी कार्रवाई नहीं की जा सकती।"
    },
    {
        question: "प्रश्न 11: भारतीय संविधान का कौन सा मूल कर्तव्य 'वैज्ञानिक दृष्टिकोण, मानववाद और ज्ञानार्जन तथा सुधार की भावना' के विकास से संबंधित है?",
        answers: shuffle([
            { text: "अनुच्छेद 51-A (e)", correct: false },
            { text: "अनुच्छेद 51-A (f)", correct: false },
            { text: "अनुच्छेद 51-A (h)", correct: true },
            { text: "अनुच्छेद 51-A (i)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 51-A (h) प्रत्येक नागरिक को वैज्ञानिक दृष्टिकोण, मानववाद और ज्ञानार्जन तथा सुधार की भावना का विकास करने का कर्तव्य सौंपता है।"
    },
    {
        question: "प्रश्न 12: \"भारत की संप्रभुता, एकता और अखंडता की रक्षा करें और उसे अक्षुण्ण रखें\" यह उल्लेख कहाँ किया गया है?",
        answers: shuffle([
            { text: "संविधान की प्रस्तावना", correct: false },
            { text: "राज्य के नीति निदेशक तत्व", correct: false },
            { text: "मूल अधिकार", correct: false },
            { text: "मूल कर्तव्य", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अनुच्छेद 51-A (c) के तहत सूचीबद्ध एक मूल कर्तव्य है।"
    },
    {
        question: "प्रश्न 13: 11वां मूल कर्तव्य किससे संबंधित है?",
        answers: shuffle([
            { text: "पर्यावरण की रक्षा", correct: false },
            { text: "सार्वजनिक संपत्ति की सुरक्षा", correct: false },
            { text: "6 से 14 वर्ष की आयु के बच्चों को शिक्षा के अवसर प्रदान करना", correct: true },
            { text: "देश की रक्षा करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 86वें संशोधन द्वारा जोड़े गए अनुच्छेद 51-A (k) के अनुसार, प्रत्येक माता-पिता या अभिभावक का यह कर्तव्य है कि वह अपने 6 से 14 वर्ष की आयु के बच्चे को शिक्षा के अवसर प्रदान करे।"
    },
    {
        question: "प्रश्न 14: मूल कर्तव्यों का पालन न करने पर क्या दंड का प्रावधान है?",
        answers: shuffle([
            { text: "जुर्माना", correct: false },
            { text: "कारावास", correct: false },
            { text: "संविधान में सीधे दंड का कोई प्रावधान नहीं है", correct: true },
            { text: "सामाजिक सेवा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मूल कर्तव्य गैर-प्रवर्तनीय (non-enforceable) हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, संसद कानून बनाकर किसी कर्तव्य के उल्लंघन पर दंड का प्रावधान कर सकती है।"
    },
    {
        question: "प्रश्न 15: निम्नलिखित में से किस एक का संरक्षण भारतीय नागरिक का मूल कर्तव्य है?",
        answers: shuffle([
            { text: "ग्राम पंचायत", correct: false },
            { text: "राष्ट्रीय ध्वज", correct: false },
            { text: "अनुसूचित जाति/अनुसूचित जनजाति", correct: false },
            { text: "वन्य प्राणी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 51-A (g) के अनुसार, प्राकृतिक पर्यावरण की, जिसके अंतर्गत वन, झील, नदी और वन्य जीव हैं, रक्षा करना और उसका संवर्धन करना प्रत्येक नागरिक का कर्तव्य है।"
    },
    {
        question: "प्रश्न 16: वर्मा समिति (1999) का संबंध किससे है?",
        answers: shuffle([
            { text: "केंद्र-राज्य संबंध", correct: false },
            { text: "चुनाव सुधार", correct: false },
            { text: "मूल कर्तव्यों के प्रवर्तन से संबंधित कानूनी प्रावधानों की पहचान", correct: true },
            { text: "बैंकिंग सुधार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जे.एस. वर्मा समिति का गठन कुछ मूल कर्तव्यों के कार्यान्वयन के लिए मौजूद कानूनी प्रावधानों की पहचान करने और उन्हें प्रभावी बनाने के उपायों की सिफारिश करने के लिए किया गया था।"
    },
    {
        question: "प्रश्न 17: मूल कर्तव्य किन पर लागू होते हैं?",
        answers: shuffle([
            { text: "केवल भारतीय नागरिकों पर", correct: true },
            { text: "भारत में रहने वाले सभी व्यक्तियों पर", correct: false },
            { text: "केवल सरकारी कर्मचारियों पर", correct: false },
            { text: "विदेशी नागरिकों पर भी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मूल अधिकार कुछ विदेशियों पर भी लागू होते हैं, लेकिन मूल कर्तव्य केवल भारत के नागरिकों के लिए हैं।"
    },
    {
        question: "प्रश्न 18: स्वर्ण सिंह समिति ने कुल कितने मूल कर्तव्यों का सुझाव दिया था?",
        answers: shuffle([
            { text: "10", correct: false },
            { text: "11", correct: false },
            { text: "8", correct: true },
            { text: "12", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सरदार स्वर्ण सिंह समिति ने 8 मूल कर्तव्यों को शामिल करने की सिफारिश की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, सरकार ने 10 कर्तव्यों को शामिल किया, जिनमें से कुछ समिति की सिफारिशों से अलग थे।"
    },
    {
        question: "प्रश्न 19: कौन सा मूल कर्तव्य स्वतंत्रता संग्राम के उच्च आदर्शों से संबंधित है?",
        answers: shuffle([
            { text: "अनुच्छेद 51-A (a)", correct: false },
            { text: "अनुच्छेद 51-A (b)", correct: true },
            { text: "अनुच्छेद 51-A (c)", correct: false },
            { text: "अनुच्छेद 51-A (d)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 51-A (b) कहता है: \"स्वतंत्रता के लिए हमारे राष्ट्रीय आंदोलन को प्रेरित करने वाले उच्च आदर्शों को हृदय में संजोए रखें और उनका पालन करें।\""
    },
    {
        question: "प्रश्न 20: 'हमारी सामासिक संस्कृति की गौरवशाली परंपरा का महत्व समझें और उसका परिरक्षण करें' यह किस अनुच्छेद से संबंधित है?",
        answers: shuffle([
            { text: "अनुच्छेद 51-A (d)", correct: false },
            { text: "अनुच्छेद 51-A (e)", correct: false },
            { text: "अनुच्छेद 51-A (f)", correct: true },
            { text: "अनुच्छेद 51-A (g)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह छठा मूल कर्तव्य है, जो भारत की विविध और समृद्ध संस्कृति के संरक्षण पर जोर देता है।"
    },
    {
        question: "प्रश्न 21: मूल कर्तव्य संविधान में क्यों जोड़े गए?",
        answers: shuffle([
            { text: "अधिकारों और कर्तव्यों के बीच संतुलन बनाने के लिए", correct: true },
            { text: "सरकार को अधिक शक्ति देने के लिए", correct: false },
            { text: "न्यायपालिका को अधिक अधिकार देने के लिए", correct: false },
            { text: "मूल अधिकारों को सीमित करने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इनका उद्देश्य नागरिकों को यह याद दिलाना था कि अधिकारों का आनंद लेते समय, उन्हें अपने देश, समाज और साथी नागरिकों के प्रति अपने कर्तव्यों के प्रति भी सचेत रहना होगा।"
    },
    {
        question: "प्रश्न 22: निम्नलिखित में से कौन सी एक स्वर्ण सिंह समिति की सिफारिश नहीं थी जिसे स्वीकार नहीं किया गया?",
        answers: shuffle([
            { text: "करों का भुगतान करना एक मूल कर्तव्य होना चाहिए।", correct: false },
            { text: "कर्तव्यों का पालन न करने पर संसद द्वारा दंड का प्रावधान होना चाहिए।", correct: false },
            { text: "ऐसे किसी भी कानून को अदालत में चुनौती नहीं दी जा सकती।", correct: false },
            { text: "संविधान और राष्ट्रीय ध्वज का आदर करना।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पहले तीन सिफारिशें (a, b, c) स्वर्ण सिंह समिति द्वारा की गई थीं, लेकिन तत्कालीन सरकार द्वारा इन्हें स्वीकार नहीं किया गया।<br><br><i class='fa-solid fa-angles-right icon'></i> संविधान का आदर करना कर्तव्य के रूप में शामिल किया गया था।"
    },
    {
        question: "प्रश्न 23: मूल कर्तव्यों का महत्व क्या है?",
        answers: shuffle([
            { text: "वे नागरिकों के लिए प्रेरणा के स्रोत हैं।", correct: false },
            { text: "वे अदालतों को किसी कानून की संवैधानिकता निर्धारित करने में मदद करते हैं।", correct: false },
            { text: "वे राष्ट्र-विरोधी गतिविधियों के खिलाफ एक चेतावनी के रूप में कार्य करते हैं।", correct: false },
            { text: "ये सभी।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि वे गैर-न्यायोचित हैं, फिर भी मूल कर्तव्य नागरिकों में अनुशासन और प्रतिबद्धता की भावना को बढ़ावा देते हैं, कानूनों की व्याख्या में मदद करते हैं और एक अनुस्मारक के रूप में कार्य करते हैं।"
    },
    {
        question: "प्रश्न 24: \"आह्वान किए जाने पर देश की रक्षा करें और राष्ट्र की सेवा करें\" यह क्या है?",
        answers: shuffle([
            { text: "एक कानूनी बाध्यता", correct: false },
            { text: "एक मूल कर्तव्य", correct: true },
            { text: "एक नीति निदेशक सिद्धांत", correct: false },
            { text: "एक मूल अधिकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अनुच्छेद 51-A (d) के तहत चौथा मूल कर्तव्य है।"
    },
    {
        question: "प्रश्न 25: मूल कर्तव्य, आपातकाल के दौरान किस प्रधानमंत्री के कार्यकाल में जोड़े गए थे?",
        answers: shuffle([
            { text: "जवाहरलाल नेहरू", correct: false },
            { text: "लाल बहादुर शास्त्री", correct: false },
            { text: "इंदिरा गांधी", correct: true },
            { text: "राजीव गांधी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 42वां संशोधन 1976 में आपातकाल (1975-77) के दौरान पारित किया गया था, जब इंदिरा गांधी प्रधानमंत्री थीं।"
    },
      {
        question: "प्रश्न 26. भारत के अलावा, किस अन्य प्रमुख लोकतांत्रिक देश के संविधान में नागरिकों के कर्तव्यों का उल्लेख है?",
        answers: shuffle([
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "जापान", correct: true },
            { text: "कनाडा", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जापान एकमात्र प्रमुख उन्नत लोकतांत्रिक देश है जिसके संविधान में नागरिकों के लिए कर्तव्यों की एक सूची है।"
    },
    {
        question: "प्रश्न 27. अनुच्छेद 51-A(e) किस पर जोर देता है?",
        answers: shuffle([
            { text: "वैज्ञानिक दृष्टिकोण का विकास", correct: false },
            { text: "पर्यावरण का संरक्षण", correct: false },
            { text: "सार्वजनिक संपत्ति की सुरक्षा", correct: false },
            { text: "सद्भाव और समान भ्रातृत्व की भावना का निर्माण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह कर्तव्य सभी भारतीयों के बीच सद्भाव और भाईचारे को बढ़ावा देने और महिलाओं की गरिमा का अनादर करने वाली प्रथाओं का त्याग करने की बात करता है।"
    },
    {
        question: "प्रश्न 28. मूल कर्तव्यों की आलोचना का एक मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "ये बहुत अधिक हैं।", correct: false },
            { text: "इनमें कई शब्द अस्पष्ट और समझने में कठिन हैं।", correct: true },
            { text: "ये केवल नागरिकों पर लागू होते हैं।", correct: false },
            { text: "ये सोवियत संघ से लिए गए हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आलोचकों का तर्क है कि 'उच्च आदर्श', 'सामासिक संस्कृति', 'वैज्ञानिक दृष्टिकोण' जैसे शब्दों की व्याख्या अलग-अलग लोग अलग-अलग तरीके से कर सकते हैं, जिससे भ्रम की स्थिति उत्पन्न होती है।"
    },
    {
        question: "प्रश्न 29. \"सार्वजनिक संपत्ति को सुरक्षित रखें और हिंसा से दूर रहें\" यह किस मूल कर्तव्य का हिस्सा है?",
        answers: shuffle([
            { text: "सातवाँ", correct: false },
            { text: "आठवाँ", correct: false },
            { text: "नौवाँ", correct: true },
            { text: "दसवाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 51-A (i) के अनुसार, प्रत्येक नागरिक का यह कर्तव्य है कि वह सार्वजनिक संपत्ति की सुरक्षा करे और हिंसा का त्याग करे।"
    },
    {
        question: "प्रश्न 30. क्या मूल कर्तव्यों को मूल अधिकारों पर वरीयता दी जा सकती है?",
        answers: shuffle([
            { text: "हाँ, हमेशा", correct: false },
            { text: "नहीं, कभी नहीं", correct: false },
            { text: "केवल राष्ट्रीय आपातकाल के दौरान", correct: false },
            { text: "मूल अधिकार हमेशा सर्वोच्च होते हैं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हालांकि दोनों महत्वपूर्ण हैं, लेकिन न्यायिक व्याख्या के अनुसार, मूल अधिकार (विशेषकर अनुच्छेद 14 और 19) मूल कर्तव्यों पर वरीयता रखते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> मूल कर्तव्य मूल अधिकारों को सीमित नहीं कर सकते।"
    },
    {
        question: "प्रश्न 31. मूल कर्तव्यों को लागू करने के लिए संसद द्वारा बनाया गया एक कानून कौन सा है?",
        answers: shuffle([
            { text: "नागरिकता अधिनियम, 1955", correct: false },
            { text: "वन्यजीव (संरक्षण) अधिनियम, 1972", correct: true },
            { text: "सूचना का अधिकार अधिनियम, 2005", correct: false },
            { text: "कंपनी अधिनियम, 2013", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वन्यजीव (संरक्षण) अधिनियम, 1972 और वन (संरक्षण) अधिनियम, 1980 जैसे कानून अनुच्छेद 51-A (g) (पर्यावरण की रक्षा) को लागू करने में मदद करते हैं।"
    },
    {
        question: "प्रश्न 32. अनुच्छेद 51-A का खंड (j) नागरिकों को किस लिए प्रेरित करता है?",
        answers: shuffle([
            { text: "भारत की संप्रभुता की रक्षा", correct: false },
            { text: "व्यक्तिगत और सामूहिक गतिविधियों में उत्कृष्टता की ओर बढ़ने का प्रयास", correct: true },
            { text: "बच्चों को स्कूल भेजना", correct: false },
            { text: "राष्ट्रीय प्रतीकों का सम्मान करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह कर्तव्य नागरिकों को सभी क्षेत्रों में उत्कृष्टता प्राप्त करने के लिए प्रयास करने के लिए प्रोत्साहित करता है ताकि राष्ट्र निरंतर प्रगति और उपलब्धि के उच्च स्तर तक पहुंच सके।"
    },
    {
        question: "प्रश्न 33. मूल अधिकारों और मूल कर्तव्यों में एक मुख्य अंतर क्या है?",
        answers: shuffle([
            { text: "अधिकार नागरिकों के लिए हैं, कर्तव्य राज्य के लिए।", correct: false },
            { text: "अधिकार न्यायोचित हैं, कर्तव्य गैर-न्यायोचित हैं।", correct: true },
            { text: "अधिकार सकारात्मक हैं, कर्तव्य नकारात्मक हैं।", correct: false },
            { text: "अधिकारों को संशोधित नहीं किया जा सकता, कर्तव्यों को किया जा सकता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सबसे fundamental अंतर है।<br><br><i class='fa-solid fa-angles-right icon'></i> मूल अधिकारों के उल्लंघन पर नागरिक सीधे अदालत जा सकते हैं, जबकि मूल कर्तव्यों के उल्लंघन पर ऐसा नहीं कर सकते।"
    },
    {
        question: "प्रश्न 34. \"संविधान का पालन करें और उसके आदर्शों, संस्थाओं, राष्ट्र ध्वज और राष्ट्र गान का आदर करें।\" यह कौन सा मूल कर्तव्य है?",
        answers: shuffle([
            { text: "पहला", correct: true },
            { text: "दूसरा", correct: false },
            { text: "तीसरा", correct: false },
            { text: "चौथा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अनुच्छेद 51-A (a) के तहत सूचीबद्ध पहला और सबसे महत्वपूर्ण मूल कर्तव्य है।"
    },
    {
        question: "प्रश्न 35. मूल कर्तव्य किस विचारधारा पर आधारित हैं?",
        answers: shuffle([
            { text: "समाजवाद और साम्यवाद", correct: false },
            { text: "गांधीवाद", correct: false },
            { text: "भारतीय परंपरा और मूल्य", correct: false },
            { text: "ये सभी का मिश्रण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मूल कर्तव्यों में भारतीय परंपरा, पौराणिक कथाओं, धर्म और प्रथाओं का सार समाहित है।<br><br><i class='fa-solid fa-angles-right icon'></i> साथ ही, इनमें समाजवादी देशों से प्रेरित कर्तव्य भी शामिल हैं।"
    },
    {
        question: "प्रश्न 36. स्वर्ण सिंह समिति का गठन किस वर्ष किया गया था?",
        answers: shuffle([
            { text: "1975", correct: false },
            { text: "1976", correct: true },
            { text: "1977", correct: false },
            { text: "1978", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस समिति का गठन 1976 में आपातकाल के दौरान किया गया था ताकि मूल कर्तव्यों की आवश्यकता और समावेश पर विचार किया जा सके।"
    },
    {
        question: "प्रश्न 37. 42वें संशोधन को 'लघु संविधान' (Mini-Constitution) भी कहा जाता है। इसमें मूल कर्तव्यों के अलावा और क्या प्रमुख बदलाव किए गए थे?",
        answers: shuffle([
            { text: "प्रस्तावना में 'समाजवादी', 'पंथनिरपेक्ष' और 'अखंडता' शब्द जोड़े गए।", correct: false },
            { text: "राष्ट्रपति को कैबिनेट की सलाह मानने के लिए बाध्य किया गया।", correct: false },
            { text: "लोकसभा का कार्यकाल 5 से 6 वर्ष किया गया (जिसे बाद में 44वें संशोधन द्वारा निरस्त कर दिया गया)।", correct: false },
            { text: "उपरोक्त सभी।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 42वां संशोधन एक बहुत व्यापक संशोधन था जिसमें प्रस्तावना, मूल कर्तव्यों, और सरकार की शक्तियों से संबंधित कई महत्वपूर्ण बदलाव किए गए थे।"
    },
    {
        question: "प्रश्न 38. मूल कर्तव्यों को संविधान में शामिल करने का निर्णय किस कांग्रेस अधिवेशन में लिया गया था?",
        answers: shuffle([
            { text: "बॉम्बे अधिवेशन", correct: false },
            { text: "कलकत्ता अधिवेशन", correct: false },
            { text: "गुवाहाटी अधिवेशन", correct: true },
            { text: "दिल्ली अधिवेशन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्वर्ण सिंह समिति की रिपोर्ट को अखिल भारतीय कांग्रेस कमेटी ने अपने गुवाहाटी अधिवेशन (1976) में स्वीकार किया, जिसके बाद सरकार ने संशोधन विधेयक पेश किया।"
    },
    {
        question: "प्रश्न 39. मूल कर्तव्य और राज्य के नीति निदेशक तत्व दोनों की साझा विशेषता क्या है?",
        answers: shuffle([
            { text: "दोनों आयरलैंड के संविधान से लिए गए हैं।", correct: false },
            { text: "दोनों केवल नागरिकों पर लागू होते हैं।", correct: false },
            { text: "दोनों गैर-न्यायोचित (Non-justiciable) हैं।", correct: true },
            { text: "दोनों को 42वें संशोधन द्वारा जोड़ा गया था।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह दोनों की एक प्रमुख समानता है।<br><br><i class='fa-solid fa-angles-right icon'></i> दोनों को सीधे तौर पर अदालतों द्वारा लागू नहीं किया जा सकता है और ये क्रमशः नागरिकों और राज्य के लिए नैतिक और प्रशासनिक दायित्वों के रूप में कार्य करते हैं।"
    },
    {
        question: "प्रश्न 40. मूल कर्तव्य किस प्रकार नागरिकों के व्यवहार को प्रभावित करते हैं?",
        answers: shuffle([
            { text: "कानूनी रूप से बाध्य करके।", correct: false },
            { text: "नैतिक और नागरिक दायित्वों का बोध कराकर।", correct: true },
            { text: "दंड के भय से।", correct: false },
            { text: "पुरस्कार प्रदान करके।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वे एक नैतिक संहिता के रूप में कार्य करते हैं जो नागरिकों को जिम्मेदार व्यवहार करने और राष्ट्र निर्माण में योगदान करने के लिए प्रेरित करते हैं।"
    },
    {
        question: "प्रश्न 41. राष्ट्रीय सम्मान का अपमान निवारण अधिनियम, 1971 किस मूल कर्तव्य को लागू करने में सहायक है?",
        answers: shuffle([
            { text: "अनुच्छेद 51-A (a)", correct: true },
            { text: "अनुच्छेद 51-A (b)", correct: false },
            { text: "अनुच्छेद 51-A (c)", correct: false },
            { text: "अनुच्छेद 51-A (d)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह कानून भारत के संविधान, राष्ट्रीय ध्वज और राष्ट्रगान के अपमान को रोकता है, जो सीधे तौर पर पहले मूल कर्तव्य से जुड़ा है।"
    },
    {
        question: "प्रश्न 42. क्या मूल कर्तव्यों में संशोधन किया जा सकता है?",
        answers: shuffle([
            { text: "नहीं, वे मूल ढांचे का हिस्सा हैं।", correct: false },
            { text: "हाँ, अनुच्छेद 368 के तहत संसद द्वारा।", correct: true },
            { text: "केवल सर्वोच्च न्यायालय द्वारा।", correct: false },
            { text: "केवल राष्ट्रपति के आदेश से।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संसद संविधान के किसी भी भाग में (मूल ढांचे को छोड़कर) अनुच्छेद 368 के तहत संशोधन कर सकती है।<br><br><i class='fa-solid fa-angles-right icon'></i> 86वां संशोधन इसका एक उदाहरण है, जिसने एक नया कर्तव्य जोड़ा।"
    },
    {
        question: "प्रश्न 43. मूल कर्तव्य राज्य के नीति निदेशक तत्वों से किस प्रकार भिन्न हैं?",
        answers: shuffle([
            { text: "कर्तव्य नागरिकों के लिए हैं, जबकि निदेशक तत्व राज्य के लिए हैं।", correct: true },
            { text: "कर्तव्य गैर-न्यायोचित हैं, जबकि निदेशक तत्व न्यायोचित हैं।", correct: false },
            { text: "कर्तव्य संविधान के भाग IV में हैं, निदेशक तत्व भाग III में।", correct: false },
            { text: " कोई नहीं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक मौलिक अंतर है।<br><br><i class='fa-solid fa-angles-right icon'></i> मूल कर्तव्य (अनुच्छेद 51-A) नागरिकों के दायित्व हैं, जबकि नीति निदेशक तत्व (अनुच्छेद 36-51) कानून बनाते समय राज्य के लिए मार्गदर्शन सिद्धांत हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> दोनों ही गैर-न्यायोचित हैं।"
    },
    {
        question: "प्रश्न 44. मूल संविधान (1950) में मूल कर्तव्यों के न होने का एक कारण क्या था?",
        answers: shuffle([
            { text: "संविधान निर्माता इसे आवश्यक नहीं समझते थे।", correct: false },
            { text: "यह माना गया था कि नागरिक अपने कर्तव्यों को स्वतः ही पूरा करेंगे।", correct: false },
            { text: "उस समय के अधिकांश लोकतांत्रिक संविधानों में कर्तव्यों का उल्लेख नहीं था।", correct: false },
            { text: "ये सभी।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान निर्माताओं ने माना कि स्वतंत्रता संग्राम में भाग लेने वाले नागरिक अपने कर्तव्यों से अवगत हैं और उन्हें संविधान में सूचीबद्ध करने की आवश्यकता नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> साथ ही, यह तत्कालीन संवैधानिक परंपरा के अनुरूप भी था।"
    },
    {
        question: "प्रश्न 45. मूल कर्तव्यों को शामिल करने का तात्कालिक कारण क्या था?",
        answers: shuffle([
            { text: "1971 का भारत-पाक युद्ध", correct: false },
            { text: "1975 में घोषित आंतरिक आपातकाल", correct: true },
            { text: "1962 का भारत-चीन युद्ध", correct: false },
            { text: "बैंकों का राष्ट्रीयकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आपातकाल के दौरान यह महसूस किया गया कि देश में अनुशासनहीनता और अराजकता का माहौल है, और नागरिकों को उनके राष्ट्र के प्रति कर्तव्यों की याद दिलाने की आवश्यकता है।"
    },
    {
        question: "प्रश्न 46. अनुच्छेद 51-A (g) में 'प्राणी मात्र के प्रति दया भाव' रखने का कर्तव्य किसे शामिल करता है?",
        answers: shuffle([
            { text: "केवल वन्यजीवों को", correct: false },
            { text: "केवल पालतू जानवरों को", correct: false },
            { text: "सभी जीवित प्राणियों को", correct: true },
            { text: "केवल लुप्तप्राय प्रजातियों को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> \"प्राणी मात्र\" शब्द का प्रयोग व्यापक है और इसमें सभी प्रकार के जीव-जंतु शामिल हैं, जो करुणा और दया की व्यापक भावना को दर्शाता है।"
    },
    {
        question: "प्रश्न 47. महिलाओं की गरिमा का अनादर करने वाली प्रथाओं का त्याग करना किस मूल कर्तव्य का हिस्सा है?",
        answers: shuffle([
            { text: "अनुच्छेद 51-A (c)", correct: false },
            { text: "अनुच्छेद 51-A (e)", correct: true },
            { text: "अनुच्छेद 51-A (f)", correct: false },
            { text: "अनुच्छेद 51-A (h)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 51-A (e) सद्भाव और भाईचारे को बढ़ावा देने के साथ-साथ \"ऐसी प्रथाओं का त्याग करें जो स्त्रियों के सम्मान के विरुद्ध हैं\" का भी आह्वान करता है।"
    },
    {
        question: "प्रश्न 48. मूल कर्तव्यों का उद्देश्य नागरिकों में किस भावना को बढ़ावा देना है?",
        answers: shuffle([
            { text: "केवल व्यक्तिगत विकास", correct: false },
            { text: "केवल आर्थिक समृद्धि", correct: false },
            { text: "नागरिक उत्तरदायित्व और राष्ट्रीय चेतना", correct: true },
            { text: "राजनीतिक भागीदारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इनका मूल उद्देश्य प्रत्येक नागरिक को एक जिम्मेदार हितधारक बनाना है जो राष्ट्र की प्रगति और एकता में सक्रिय रूप से योगदान दे।"
    },
    {
        question: "प्रश्न 49. 'व्यक्तिगत और सामूहिक गतिविधि' के सभी क्षेत्रों में उत्कृष्टता का प्रयास किसलिए महत्वपूर्ण है?",
        answers: shuffle([
            { text: "व्यक्तिगत प्रसिद्धि के लिए", correct: false },
            { text: "राष्ट्र को निरंतर प्रगति की ओर ले जाने के लिए", correct: true },
            { text: "अंतरराष्ट्रीय प्रतियोगिताओं में जीतने के लिए", correct: false },
            { text: "आर्थिक लाभ के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 51-A (j) का उद्देश्य यह है कि जब नागरिक व्यक्तिगत और सामूहिक रूप से उत्कृष्टता प्राप्त करेंगे, तो राष्ट्र समग्र रूप से प्रगति और उपलब्धि के नए शिखर पर पहुंचेगा।"
    },
    {
        question: "प्रश्न 50. यदि संसद किसी मूल कर्तव्य को लागू करने के लिए कानून बनाती है, तो क्या उस कानून को मूल अधिकारों के उल्लंघन के आधार पर चुनौती दी जा सकती है?",
        answers: shuffle([
            { text: "नहीं, कभी नहीं", correct: false },
            { text: "हाँ, यदि वह अनुच्छेद 14 और 19 का अनुचित रूप से उल्लंघन करता है", correct: true },
            { text: "केवल राष्ट्रपति की अनुमति से", correct: false },
            { text: "केवल अगर कानून अस्पष्ट हो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाँ, संसद द्वारा बनाया गया कोई भी कानून न्यायिक समीक्षा के अधीन है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि मूल कर्तव्य को लागू करने वाला कानून अनुच्छेद 14 (समानता का अधिकार) या अनुच्छेद 19 (स्वतंत्रता का अधिकार) जैसे मौलिक अधिकारों का अनुचित या अतार्किक रूप से उल्लंघन करता है, तो उसे अदालत में चुनौती दी जा सकती है।"
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