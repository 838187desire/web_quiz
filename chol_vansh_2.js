const questions = [
    {
        question: "चोल काल में 'उरैयुर' किसलिए प्रसिद्ध था?",
        answers: shuffle([
            { text: "मसालों के व्यापार के लिए", correct: false },
            { text: "कपास के व्यापार के लिए", correct: true },
            { text: "बंदरगाह के लिए", correct: false },
            { text: "धातु उद्योग के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्राचीन चोलों की राजधानी 'उरैयुर' कपास के व्यापार का एक महत्वपूर्ण केंद्र था।"
    },
    {
        question: "किस चोल शासक के शासनकाल में 'कांचीपुरम' पर अधिकार किया गया था?",
        answers: shuffle([
            { text: "विजयालय", correct: false },
            { text: "राजेंद्र प्रथम", correct: true },
            { text: "राजधिराज प्रथम", correct: false },
            { text: "करिकाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजेंद्र प्रथम ने अपने शासनकाल में पल्लवों की राजधानी कांचीपुरम पर अधिकार कर लिया था।"
    },
    {
        question: "चोलों की सबसे महत्वपूर्ण राजस्व इकाई क्या थी?",
        answers: shuffle([
            { text: "कर", correct: false },
            { text: "भू-राजस्व", correct: true },
            { text: "टोल", correct: false },
            { text: "सीमा शुल्क", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोल साम्राज्य की आय का मुख्य स्रोत भू-राजस्व था, जिसे उत्पादन का लगभग एक-तिहाई हिस्सा माना जाता था।"
    },
    {
        question: "चोल काल में 'नाडुर' क्या था?",
        answers: shuffle([
            { text: "जिला", correct: false },
            { text: "गाँवों का समूह", correct: false },
            { text: "गाँव के अधिकारी", correct: true },
            { text: "प्रांत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नाडुर' नाडु (गाँवों के समूह) के अधिकारी होते थे, जो स्थानीय प्रशासन का प्रबंधन करते थे।"
    },
    {
        question: "चोलों के शासनकाल में 'महासभा' का मुख्य कार्य क्या था?",
        answers: shuffle([
            { text: "भू-राजस्व का संग्रह", correct: false },
            { text: "सिंचाई कार्यों की देखरेख", correct: false },
            { text: "न्यायपालिका का प्रबंधन", correct: false },
            { text: "उपर्युक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महासभा' या 'सभा' ब्राह्मणों के गाँवों में स्थानीय स्वशासन के लिए जिम्मेदार थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके कार्यक्षेत्र में भू-राजस्व संग्रह, न्याय और सिंचाई व्यवस्था का प्रबंधन शामिल था।"
    },
    {
        question: "चोल साम्राज्य के अंतर्गत 'नागरम' क्या था?",
        answers: shuffle([
            { text: "किसानों की बस्ती", correct: false },
            { text: "व्यापारियों की बस्ती", correct: true },
            { text: "सैनिकों की बस्ती", correct: false },
            { text: "कारीगरों की बस्ती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नागरम' चोल काल में शहरों और व्यापारिक केंद्रों में रहने वाले व्यापारियों की बस्ती थी।"
    },
    {
        question: "किस चोल शासक ने 'गंगैकोंडचोलपुरम' नामक एक कृत्रिम झील का निर्माण करवाया था?",
        answers: shuffle([
            { text: "राजराजा प्रथम", correct: false },
            { text: "राजेंद्र प्रथम", correct: true },
            { text: "राजेंद्र द्वितीय", correct: false },
            { text: "कुलोत्तुंग प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजेंद्र प्रथम ने गंगा घाटी पर विजय के बाद 'गंगैकोंडचोलपुरम' में एक भव्य कृत्रिम झील का निर्माण करवाया था, जो चोलों की इंजीनियरिंग कौशल को दर्शाता है।"
    },
    {
        question: "चोलों के शासनकाल में 'कुदुवोलाई' प्रणाली का संबंध किससे था?",
        answers: shuffle([
            { text: "भूमि माप", correct: false },
            { text: "चुनाव प्रक्रिया", correct: true },
            { text: "न्याय वितरण", correct: false },
            { text: "सैन्य भर्ती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुदुवोलाई' एक विशेष प्रणाली थी, जिसके माध्यम से गाँव की सभाओं (उर और सभा) के सदस्यों का चुनाव किया जाता था।"
    },
    {
        question: "चोल काल में 'पेरुंजि' क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का कर", correct: false },
            { text: "एक उच्च पदस्थ अधिकारी", correct: false },
            { text: "ग्राम सभा का सदस्य", correct: false },
            { text: "राजस्व विभाग का अधिकारी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पेरुंजि' चोल काल में राजस्व विभाग का एक महत्वपूर्ण अधिकारी होता था।"
    },
    {
        question: "चोलों का अंतिम शासक कौन था?",
        answers: shuffle([
            { text: "राजेंद्र प्रथम", correct: false },
            { text: "राजेंद्र तृतीय", correct: true },
            { text: "राजराजा प्रथम", correct: false },
            { text: "राजेंद्र द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजेंद्र तृतीय चोल वंश का अंतिम शासक था, जिसने लगभग 1279 ईस्वी तक शासन किया।"
    },
    {
        question: "चोल कला में मूर्तियों को बनाने के लिए किस तकनीक का प्रयोग किया जाता था?",
        answers: shuffle([
            { text: "टेराकोटा", correct: false },
            { text: "लॉस्ट-वैक्स (मोम)", correct: true },
            { text: "पत्थर की नक्काशी", correct: false },
            { text: "प्लास्टर ऑफ पेरिस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोल काल में कांस्य मूर्तियों, विशेषकर नटराज की मूर्तियों, को 'लॉस्ट-वैक्स' या 'मोम' तकनीक से बनाया जाता था।"
    },
    {
        question: "चोल काल में 'मन्नल' शब्द का क्या अर्थ था?",
        answers: shuffle([
            { text: "अनाज", correct: true },
            { text: "भूमि", correct: false },
            { text: "धातु", correct: false },
            { text: "हथियार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मन्नल' चोल काल में अनाज के लिए प्रयुक्त एक शब्द था, जिसे भू-राजस्व के रूप में भी इकट्ठा किया जाता था।"
    },
    {
        question: "किस चोल शासक ने 'श्रीलंका' के राजा महेंद्र पंचम को हराया था और उसके उत्तरी हिस्से पर कब्जा किया था?",
        answers: shuffle([
            { text: "विजयालय", correct: false },
            { text: "राजराजा प्रथम", correct: true },
            { text: "राजेंद्र प्रथम", correct: false },
            { text: "राजेंद्र द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजराजा प्रथम ने 992 ईस्वी में श्रीलंका पर आक्रमण किया और उसके उत्तरी भाग पर अधिकार कर लिया था।"
    },
    {
        question: "चोल प्रशासन में 'वेलनडु' क्या था?",
        answers: shuffle([
            { text: "सैन्य छावनी", correct: false },
            { text: "जिला", correct: true },
            { text: "ग्राम सभा", correct: false },
            { text: "बंदरगाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोल प्रशासन में 'वलनडु' जिले के लिए प्रयुक्त शब्द था।"
    },
    {
        question: "चोल काल में भू-राजस्व विभाग को क्या कहा जाता था?",
        answers: shuffle([
            { text: "पेरुंजय", correct: false },
            { text: "पुदुमइला", correct: false },
            { text: "पुरवरितिनैक्कलम", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पुरवरितिनैक्कलम' चोल प्रशासन में भू-राजस्व विभाग को कहा जाता था, जो भूमि माप और कर संग्रह का काम करता था।"
    },
    {
        question: "चोल काल में 'एरि-पटट' का संबंध किससे था?",
        answers: shuffle([
            { text: "सिंचाई", correct: true },
            { text: "व्यापार", correct: false },
            { text: "न्याय", correct: false },
            { text: "सेना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'एरि-पटट' वह भूमि थी, जिसका उपयोग तालाबों और सिंचाई परियोजनाओं के रखरखाव के लिए किया जाता था।"
    },
    {
        question: "चोल शासक राजेंद्र प्रथम की उपाधियाँ क्या थीं?",
        answers: shuffle([
            { text: "गंगैकोंडचोल", correct: false },
            { text: "मुम्मदि चोल", correct: false },
            { text: "कडारमकोंडान", correct: false },
            { text: "A और C दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजेंद्र प्रथम ने गंगा घाटी पर विजय के बाद 'गंगैकोंडचोल' की उपाधि और शैलेंद्र साम्राज्य पर विजय के बाद 'कडारमकोंडान' की उपाधि धारण की थी।"
    },
    {
        question: "किस चोल शासक ने 'तंजावुर' में प्रसिद्ध 'बृहदेश्वर मंदिर' का निर्माण करवाया था?",
        answers: shuffle([
            { text: "विजयालय", correct: false },
            { text: "राजराजा प्रथम", correct: true },
            { text: "राजेंद्र प्रथम", correct: false },
            { text: "राजधिराज प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहदेश्वर मंदिर, जिसे राजराजेश्वर मंदिर भी कहते हैं, का निर्माण राजराजा प्रथम द्वारा 1010 ईस्वी में करवाया गया था।"
    },
    {
        question: "चोल काल में 'नाट्टार' कौन थे?",
        answers: shuffle([
            { text: "ग्राम सभा के सदस्य", correct: false },
            { text: "नाडु के प्रमुख अधिकारी", correct: true },
            { text: "राजा के मंत्री", correct: false },
            { text: "सेना के अधिकारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नाट्टार' नाडु (गाँवों के समूह) के प्रमुख सदस्य थे, जो स्थानीय प्रशासन और राजस्व संग्रह में महत्वपूर्ण भूमिका निभाते थे।"
    },
    {
        question: "चोल काल की सबसे प्रसिद्ध मूर्ति 'नटराज' किस देवता का प्रतीक है?",
        answers: shuffle([
            { text: "विष्णु", correct: false },
            { text: "शिव", correct: true },
            { text: "ब्रह्मा", correct: false },
            { text: "बुद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नटराज की मूर्ति शिव के ब्रह्मांडीय नृत्य का प्रतीक है, जो चोल काल की कला का शिखर मानी जाती है।"
    },
    {
        question: "चोलों की प्रशासनिक इकाई 'ग्राम' को क्या कहा जाता था?",
        answers: shuffle([
            { text: "नाडु", correct: false },
            { text: "मंडलम", correct: false },
            { text: "कुर्रम", correct: false },
            { text: "उर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उर' चोल साम्राज्य में गाँव की सबसे छोटी प्रशासनिक इकाई थी, जो अपनी सभा के माध्यम से स्वशासन करती थी।"
    },
    {
        question: "किस चोल शासक ने कुलोत्तुंग प्रथम के रूप में चोल सिंहासन पर अधिकार किया?",
        answers: shuffle([
            { text: "राजेंद्र प्रथम", correct: false },
            { text: "राजधिराज प्रथम", correct: false },
            { text: "राजेंद्र चालुक्य", correct: true },
            { text: "वीरराजेंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजेंद्र चालुक्य, जो पूर्वी चालुक्य वंश से था, ने चोल सिंहासन पर अधिकार कर चोल-चालुक्य वंश की स्थापना की।"
    },
    {
        question: "चोल काल में भू-राजस्व को किस रूप में इकट्ठा किया जाता था?",
        answers: shuffle([
            { text: "केवल नकद", correct: false },
            { text: "केवल अनाज", correct: false },
            { text: "नकद और अनाज दोनों", correct: true },
            { text: "सोने के सिक्के", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोल प्रशासन में भू-राजस्व को या तो नकद (कदमै) या अनाज (मन्नल) के रूप में इकट्ठा किया जाता था।"
    },
    {
        question: "चोलों की नौसेना ने किस साम्राज्य पर विजय प्राप्त करने में महत्वपूर्ण भूमिका निभाई?",
        answers: shuffle([
            { text: "शैलेंद्र साम्राज्य", correct: true },
            { text: "पल्लव साम्राज्य", correct: false },
            { text: "राष्ट्रकूट साम्राज्य", correct: false },
            { text: "पांड्य साम्राज्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोलों की शक्तिशाली नौसेना ने राजेंद्र प्रथम के नेतृत्व में दक्षिण-पूर्व एशिया में शैलेंद्र साम्राज्य पर विजय प्राप्त की थी।"
    },
    {
        question: "चोल काल में 'सभा' की समितियों के सदस्यों का चुनाव कैसे होता था?",
        answers: shuffle([
            { text: "सीधे मतदान से", correct: false },
            { text: "लॉटरी प्रणाली से (कुदुवोलाई)", correct: true },
            { text: "राजा द्वारा मनोनयन से", correct: false },
            { text: "वंशानुगत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सभा' की विभिन्न समितियों के सदस्यों का चुनाव एक लॉटरी प्रणाली (कुदुवोलाई) से होता था, जो चोलों के लोकतांत्रिक सिद्धांतों का प्रमाण है।"
    },
    {
        question: "चोल काल में 'एरि-पट्टी' क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का कर", correct: false },
            { text: "ब्राह्मणों को दी गई भूमि", correct: false },
            { text: "तालाबों के रखरखाव के लिए आरक्षित भूमि", correct: true },
            { text: "सैन्य छावनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'एरि-पट्टी' वह भूमि थी, जिसका राजस्व गाँव के तालाबों और अन्य सिंचाई स्रोतों के रखरखाव के लिए उपयोग किया जाता था।"
    },
    {
        question: "चोल शासकों द्वारा निर्मित प्रसिद्ध शिव मंदिर 'गंगैकोंडचोलपुरम' किस शैली में बना है?",
        answers: shuffle([
            { text: "नागर शैली", correct: false },
            { text: "द्रविड़ शैली", correct: true },
            { text: "वेसर शैली", correct: false },
            { text: "इंडो-इस्लामिक शैली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजेंद्र प्रथम द्वारा निर्मित 'गंगैकोंडचोलपुरम' का शिव मंदिर, बृहदेश्वर मंदिर की तरह, द्रविड़ वास्तुकला का एक उत्कृष्ट उदाहरण है।"
    },
    {
        question: "चोल काल में 'सभै' का सदस्य बनने के लिए न्यूनतम आयु क्या थी?",
        answers: shuffle([
            { text: "25 वर्ष", correct: false },
            { text: "30 वर्ष", correct: false },
            { text: "35 वर्ष", correct: true },
            { text: "40 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तरमेरुर अभिलेख के अनुसार, 'सभा' का सदस्य बनने के लिए न्यूनतम आयु 35 वर्ष थी और वह एक वेद ज्ञाता होना चाहिए।"
    },
    {
        question: "चोल प्रशासन में 'वेलन' कौन होता था?",
        answers: shuffle([
            { text: "एक उच्च पदस्थ अधिकारी", correct: false },
            { text: "एक व्यापारी", correct: false },
            { text: "एक किसान", correct: true },
            { text: "एक सैनिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोल समाज में 'वेलन' या 'वेल्लालर' एक साधारण किसान को कहा जाता था।"
    },
    {
        question: "चोलों की सबसे महत्वपूर्ण उपलब्धि क्या मानी जाती है?",
        answers: shuffle([
            { text: "शक्तिशाली नौसेना", correct: false },
            { text: "द्रविड़ वास्तुकला", correct: false },
            { text: "स्थानीय स्वशासन", correct: true },
            { text: "व्यापारिक संबंध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोल प्रशासन की सबसे अनूठी विशेषता गाँवों में स्थानीय स्वशासन की व्यवस्था थी, जो 'उर' और 'सभा' जैसी संस्थाओं के माध्यम से संचालित होती थी।"
    },
    {
        question: "किस चोल शासक ने मलेशिया और सुमात्रा के शैलेंद्र साम्राज्य पर विजय प्राप्त की थी?",
        answers: shuffle([
            { text: "राजराजा प्रथम", correct: false },
            { text: "राजेंद्र प्रथम", correct: true },
            { text: "राजेंद्र द्वितीय", correct: false },
            { text: "विजयालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजेंद्र प्रथम ने अपनी नौसेना के बल पर शैलेंद्र साम्राज्य को पराजित किया और समुद्री व्यापार पर चोलों का नियंत्रण स्थापित किया।"
    },
    {
        question: "चोल काल में सोने के सिक्कों को क्या कहा जाता था?",
        answers: shuffle([
            { text: "कासु", correct: false },
            { text: "कलंजु", correct: true },
            { text: "वेली", correct: false },
            { text: "नाडु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कलंजु' चोल साम्राज्य में प्रचलित सोने के सिक्के थे, जिनका प्रयोग व्यापार और लेनदेन के लिए किया जाता था।"
    },
    {
        question: "चोल काल में 'पेरुंजि' कौन था?",
        answers: shuffle([
            { text: "गाँव का मुखिया", correct: false },
            { text: "राजस्व विभाग का अधिकारी", correct: true },
            { text: "सेना का प्रमुख", correct: false },
            { text: "राजा का मंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पेरुंजि' चोल प्रशासन में राजस्व विभाग का एक महत्वपूर्ण अधिकारी होता था।"
    },
    {
        question: "तंजावुर के बृहदेश्वर मंदिर का निर्माण किस वर्ष पूरा हुआ था?",
        answers: shuffle([
            { text: "1010 ईस्वी", correct: true },
            { text: "1020 ईस्वी", correct: false },
            { text: "1030 ईस्वी", correct: false },
            { text: "1040 ईस्वी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजराजा प्रथम द्वारा निर्मित बृहदेश्वर मंदिर का निर्माण 1010 ईस्वी में पूरा हुआ था, और यह द्रविड़ वास्तुकला का एक उत्कृष्ट नमूना है।"
    },
    {
        question: "चोल काल में 'नागरम' क्या था?",
        answers: shuffle([
            { text: "एक गाँव", correct: false },
            { text: "एक प्रकार का कर", correct: false },
            { text: "व्यापारियों की बस्ती", correct: true },
            { text: "एक प्रशासनिक इकाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नागरम' चोल काल में शहरों में स्थित व्यापारियों और कारीगरों की बस्ती थी।"
    },
    {
        question: "चोल साम्राज्य के पतन का मुख्य कारण क्या था?",
        answers: shuffle([
            { text: "पांड्यों और होयसलों के आक्रमण", correct: true },
            { text: "मुस्लिम आक्रमण", correct: false },
            { text: "आंतरिक कलह", correct: false },
            { text: "विदेशी व्यापार में गिरावट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तेरहवीं शताब्दी में पांड्य और होयसल जैसे पड़ोसी राजवंशों के लगातार आक्रमणों ने चोल साम्राज्य को कमजोर कर दिया, जिससे उसका पतन हुआ।"
    },
    {
        question: "चोल काल में 'उरैयुर' किसलिए प्रसिद्ध था?",
        answers: shuffle([
            { text: "मसालों के व्यापार के लिए", correct: false },
            { text: "कपास के व्यापार के लिए", correct: true },
            { text: "बंदरगाह के लिए", correct: false },
            { text: "लोहे के उद्योग के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्राचीन चोलों की राजधानी उरैयुर, कावेरी नदी के तट पर स्थित होने के कारण, कपास के व्यापार का एक प्रमुख केंद्र था।"
    },
    {
        question: "किस चोल शासक ने श्रीलंका के उत्तरी भाग पर अधिकार कर लिया था?",
        answers: shuffle([
            { text: "विजयालय", correct: false },
            { text: "राजराजा प्रथम", correct: true },
            { text: "राजेंद्र प्रथम", correct: false },
            { text: "राजेंद्र द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजराजा प्रथम ने श्रीलंका पर आक्रमण कर उसके उत्तरी भाग को चोल साम्राज्य में मिला लिया था।"
    },
    {
        question: "चोल प्रशासन में 'कुर्रम' क्या था?",
        answers: shuffle([
            { text: "गाँवों का समूह", correct: true },
            { text: "एक प्रकार का कर", correct: false },
            { text: "जिला", correct: false },
            { text: "प्रांत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुर्रम' गाँवों के एक समूह को कहा जाता था, जो 'नाडु' के समान एक प्रशासनिक इकाई थी।"
    },
    {
        question: "चोल काल में 'कुदुवोलाई' प्रणाली का संबंध किससे था?",
        answers: shuffle([
            { text: "कर संग्रह", correct: false },
            { text: "न्यायपालिका", correct: false },
            { text: "चुनाव प्रक्रिया", correct: true },
            { text: "सैन्य भर्ती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुदुवोलाई' एक विशेष लॉटरी प्रणाली थी, जिसके माध्यम से गाँव की सभाओं (उर और सभा) के सदस्यों का चुनाव किया जाता था।"
    },
    {
        question: "किस चोल शासक ने चीन में अपना दूत भेजा था?",
        answers: shuffle([
            { text: "राजराजा प्रथम", correct: false },
            { text: "राजेंद्र प्रथम", correct: false },
            { text: "कुलोत्तुंग प्रथम", correct: false },
            { text: "उपर्युक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोल शासकों ने व्यापारिक संबंध स्थापित करने के लिए चीन में दूत भेजे थे।<br><br><i class='fa-solid fa-angles-right icon'></i> इनमें राजराजा प्रथम, राजेंद्र प्रथम और कुलोत्तुंग प्रथम प्रमुख थे।"
    },
    {
        question: "चोल काल में भू-राजस्व विभाग को क्या कहा जाता था?",
        answers: shuffle([
            { text: "नाडु", correct: false },
            { text: "पुरवरितिनैक्कलम", correct: true },
            { text: "इराई", correct: false },
            { text: "वलनडु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोल प्रशासन में 'पुरवरितिनैक्कलम' भू-राजस्व विभाग था, जो भूमि माप और कर संग्रह का काम करता था।"
    },
    {
        question: "किस चोल शासक ने कलिंग (ओडिशा) पर विजय प्राप्त की थी?",
        answers: shuffle([
            { text: "राजेंद्र प्रथम", correct: false },
            { text: "राजराजा प्रथम", correct: false },
            { text: "कुलोत्तुंग प्रथम", correct: true },
            { text: "राजधिराज प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुलोत्तुंग प्रथम ने कलिंग पर विजय प्राप्त की थी, जिसका वर्णन 'कलिंगत्तुपरानी' नामक ग्रंथ में मिलता है।"
    },
    {
        question: "चोल काल में 'अग्रहार' क्या था?",
        answers: shuffle([
            { text: "ब्राह्मणों को दी गई कर-मुक्त भूमि", correct: true },
            { text: "एक प्रकार का कर", correct: false },
            { text: "सैन्य भूमि", correct: false },
            { text: "व्यापारिक भूमि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अग्रहार' वह भूमि थी, जो ब्राह्मणों को उनकी धार्मिक और शैक्षिक सेवाओं के लिए कर-मुक्त दान में दी जाती थी।"
    },
    {
        question: "चोल कला का सबसे उत्कृष्ट उदाहरण क्या है?",
        answers: shuffle([
            { text: "तंजावुर का बृहदेश्वर मंदिर", correct: true },
            { text: "महाबलीपुरम के रथ", correct: false },
            { text: "एलोरा का कैलाश मंदिर", correct: false },
            { text: "कोणार्क का सूर्य मंदिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहदेश्वर मंदिर चोलों की स्थापत्य कला का शिखर माना जाता है।"
    },
    {
        question: "चोल साम्राज्य के अंतर्गत 'नागरम' का संबंध किससे था?",
        answers: shuffle([
            { text: "गाँव", correct: false },
            { text: "व्यापारी", correct: true },
            { text: "किसान", correct: false },
            { text: "सैनिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नागरम' व्यापारियों और कारीगरों की बस्ती थी, जो व्यापारिक गतिविधियों का केंद्र थी।"
    },
    {
        question: "चोल काल में 'सभा' की समितियों के सदस्यों का चुनाव किस प्रणाली से होता था?",
        answers: shuffle([
            { text: "वंशानुगत", correct: false },
            { text: "लॉटरी प्रणाली (कुदुवोलाई)", correct: true },
            { text: "राजा द्वारा मनोनयन", correct: false },
            { text: "प्रत्यक्ष चुनाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तरमेरुर अभिलेख के अनुसार, 'सभा' के सदस्यों का चुनाव एक लॉटरी प्रणाली के माध्यम से होता था, जिसे 'कुदुवोलाई' कहा जाता था।"
    },
    {
        question: "किस चोल शासक ने 'सुंगमतविर्त' (करों को हटाने वाला) की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "राजराजा प्रथम", correct: false },
            { text: "राजेंद्र प्रथम", correct: false },
            { text: "कुलोत्तुंग प्रथम", correct: true },
            { text: "राजेंद्र द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुलोत्तुंग प्रथम ने व्यापार को बढ़ावा देने के लिए कई करों को समाप्त कर दिया था, जिसके कारण उसे यह उपाधि मिली थी।"
    },
    {
        question: "चोलों की नौसेना ने किस साम्राज्य पर विजय प्राप्त करने में महत्वपूर्ण भूमिका निभाई?",
        answers: shuffle([
            { text: "पल्लव", correct: false },
            { text: "राष्ट्रकूट", correct: false },
            { text: "शैलेंद्र", correct: true },
            { text: "चेर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोलों की शक्तिशाली नौसेना ने राजेंद्र प्रथम के नेतृत्व में दक्षिण-पूर्व एशिया में शैलेंद्र साम्राज्य को पराजित किया था।"
    },
    {
        question: "चोल वंश का अंतिम शासक कौन था?",
        answers: shuffle([
            { text: "राजेंद्र प्रथम", correct: false },
            { text: "राजेंद्र तृतीय", correct: true },
            { text: "राजधिराज प्रथम", correct: false },
            { text: "राजेंद्र द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजेंद्र तृतीय को पांड्य शासक जटावर्मन सुंदर पांड्य ने पराजित कर चोल साम्राज्य का अंत किया था।"
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