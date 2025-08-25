const questions = [
    {
        topHeading : "चोल वंश पर आधारित बहुविकल्पी प्रश्न part 1 (quiz_no.99)"
    },
    {
        question: "चोल साम्राज्य की स्थापना किसने की थी?",
        answers: shuffle([
            { text: "करिकाल", correct: false },
            { text: "राजराजा प्रथम", correct: false },
            { text: "राजेंद्र प्रथम", correct: false },
            { text: "विजयालय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नौवीं शताब्दी में विजयालय ने पल्लवों को हराकर तंजावुर (तंजावूर) पर कब्जा कर आधुनिक चोल साम्राज्य की स्थापना की थी।"
    },
    {
        question: "चोलों की प्रारंभिक राजधानी क्या थी?",
        answers: shuffle([
            { text: "मदुरै", correct: false },
            { text: "तंजावुर", correct: false },
            { text: "उरैयुर", correct: true },
            { text: "कांचीपुरम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्राचीन चोलों की राजधानी उरैयुर थी, जो बाद में विजयालय द्वारा तंजावुर में स्थानांतरित कर दी गई।"
    },
    {
        question: "चोल वंश का सबसे महान शासक किसे माना जाता है?",
        answers: shuffle([
            { text: "करिकाल", correct: false },
            { text: "विजयालय", correct: false },
            { text: "राजराजा प्रथम", correct: false },
            { text: "राजेंद्र प्रथम", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजेंद्र प्रथम ने चोल साम्राज्य को उसकी चरम सीमा तक पहुँचाया।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने न केवल दक्षिण भारत पर विजय प्राप्त की, बल्कि गंगा घाटी और दक्षिण-पूर्व एशिया तक भी अपने अभियान चलाए।"
    },
    {
        question: "किस चोल शासक ने श्रीलंका पर आक्रमण कर उसके उत्तरी भाग पर कब्जा कर लिया था?",
        answers: shuffle([
            { text: "विजयालय", correct: false },
            { text: "राजेंद्र प्रथम", correct: false },
            { text: "राजराजा प्रथम", correct: true },
            { text: "राजराजा द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजराजा प्रथम ने 992 ईस्वी में श्रीलंका पर आक्रमण किया और उसके उत्तरी भाग पर कब्जा कर लिया।"
    },
    {
        question: "चोल काल का सबसे महत्वपूर्ण बंदरगाह कौन-सा था?",
        answers: shuffle([
            { text: "कावेरीपट्टनम", correct: true },
            { text: "महाबलीपुरम", correct: false },
            { text: "कोच्चि", correct: false },
            { text: "मदुरै", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कावेरीपट्टनम (पुहार) चोल साम्राज्य का एक प्रमुख बंदरगाह था, जो विदेशी व्यापार का केंद्र था।"
    },
    {
        question: "किस चोल शासक ने 'गंगैकोंडचोलपुरम' नामक नई राजधानी की स्थापना की थी?",
        answers: shuffle([
            { text: "विजयालय", correct: false },
            { text: "राजेंद्र प्रथम", correct: true },
            { text: "राजराजा प्रथम", correct: false },
            { text: "राजधिराज प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजेंद्र प्रथम ने अपनी उत्तरी विजयों की स्मृति में गंगैकोंडचोलपुरम नामक नई राजधानी की स्थापना की और वहाँ एक भव्य मंदिर का निर्माण करवाया।"
    },
    {
        question: "चोल प्रशासन में 'वेलन' कौन होता था?",
        answers: shuffle([
            { text: "सैनिक", correct: false },
            { text: "एक प्रकार का कर", correct: false },
            { text: "कृषि श्रमिक", correct: true },
            { text: "व्यापारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोल समाज में 'वेलन' कृषि श्रमिकों को कहा जाता था, जो भूमि के मालिक नहीं होते थे।"
    },
    {
        question: "किस चोल शासक ने समुद्र पार कर दक्षिण-पूर्व एशिया (श्रीलंका, मलाया, सुमात्रा, जावा) पर सैन्य अभियान चलाया था?",
        answers: shuffle([
            { text: "राजराजा प्रथम", correct: false },
            { text: "राजेंद्र प्रथम", correct: true },
            { text: "राजेंद्र द्वितीय", correct: false },
            { text: "राजधिराज प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजेंद्र प्रथम का सबसे प्रसिद्ध अभियान दक्षिण-पूर्व एशिया के शैलेंद्र साम्राज्य के खिलाफ था, जिससे चोलों की नौसैनिक शक्ति का पता चलता है।"
    },
    {
        question: "तंजावुर में स्थित बृहदेश्वर मंदिर का निर्माण किसने करवाया था?",
        answers: shuffle([
            { text: "राजेंद्र प्रथम", correct: false },
            { text: "राजराजा प्रथम", correct: true },
            { text: "करिकाल", correct: false },
            { text: "विजयालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजराजा प्रथम ने तंजावुर में भव्य बृहदेश्वर मंदिर का निर्माण करवाया था, जिसे राजराजेश्वर मंदिर भी कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह द्रविड़ वास्तुकला का एक उत्कृष्ट उदाहरण है।"
    },
    {
        question: "चोल प्रशासन में गाँव के प्रशासन के लिए कौन-सी सभाएँ जिम्मेदार थीं?",
        answers: shuffle([
            { text: "उर और सभा", correct: true },
            { text: "नाडु और कुर्रम", correct: false },
            { text: "मंडलगण और वलनडु", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोल प्रशासन में 'उर' साधारण गाँवों की सभा थी, जबकि 'सभा' या 'महासभा' ब्राह्मणों के गाँवों की सभा थी।"
    },
    {
        question: "चोलों की सबसे महत्वपूर्ण विशेषता क्या थी?",
        answers: shuffle([
            { text: "मजबूत सैन्य शक्ति", correct: false },
            { text: "शानदार कला और स्थापत्य", correct: false },
            { text: "स्थानीय स्वशासन", correct: false },
            { text: "शक्तिशाली नौसेना", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोलों के पास एक अत्यंत शक्तिशाली नौसेना थी, जिसने उन्हें समुद्री व्यापार और दक्षिण-पूर्व एशिया तक अपने प्रभाव का विस्तार करने में मदद की।"
    },
    {
        question: "किस चोल शासक ने गंगों को पराजित कर 'गंगैकोंड' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "राजेंद्र प्रथम", correct: true },
            { text: "राजराजा प्रथम", correct: false },
            { text: "विजयालय", correct: false },
            { text: "राजधिराज प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजेंद्र प्रथम ने गंगा नदी के तट तक सैन्य अभियान चलाकर पाल शासक महीपाल को पराजित किया था, जिसके बाद उसने 'गंगैकोंड' की उपाधि धारण की थी।"
    },
    {
        question: "चोल काल में 'वलनडु' क्या था?",
        answers: shuffle([
            { text: "प्रांत", correct: false },
            { text: "जिला", correct: true },
            { text: "गाँव", correct: false },
            { text: "मंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोल प्रशासन में 'वलनडु' जिले के लिए प्रयुक्त शब्द था, जो 'नाडु' के उप-विभाजन थे।"
    },
    {
        question: "'कुलोत्तुंग चोल प्रथम' किस राजवंश से संबंधित था?",
        answers: shuffle([
            { text: "चोल", correct: false },
            { text: "चालुक्य", correct: false },
            { text: "चोल-चालुक्य", correct: true },
            { text: "पल्लव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुलोत्तुंग प्रथम एक चालुक्य राजकुमार था, जो चोल राजकुमारी से विवाहित था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने चोल सिंहासन पर अधिकार कर 'चोल-चालुक्य' वंश की शुरुआत की।"
    },
    {
        question: "चोल काल की सबसे प्रसिद्ध मूर्ति कौन-सी है?",
        answers: shuffle([
            { text: "नटराज", correct: true },
            { text: "विष्णु", correct: false },
            { text: "बुद्ध", correct: false },
            { text: "महिषासुरमर्दिनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोल काल की कांस्य मूर्तियों में नटराज (शिव का नृत्य करते हुए रूप) की मूर्ति सबसे प्रसिद्ध है, जो कला की दृष्टि से उत्कृष्ट मानी जाती है।"
    },
    {
        question: "'महाबलीपुरम के रथ मंदिर' किस राजवंश के शासनकाल में निर्मित हुए थे?",
        answers: shuffle([
            { text: "चोल", correct: false },
            { text: "पल्लव", correct: true },
            { text: "चालुक्य", correct: false },
            { text: "चेर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाबलीपुरम के रथ मंदिर चोलों से पहले के शासक पल्लवों द्वारा निर्मित किए गए थे, न कि चोलों द्वारा।"
    },
    {
        question: "किस चोल शासक ने श्रीलंका के राजा महेंद्र पंचम को हराया था?",
        answers: shuffle([
            { text: "राजेंद्र प्रथम", correct: false },
            { text: "राजराजा प्रथम", correct: true },
            { text: "राजेंद्र द्वितीय", correct: false },
            { text: "राजधिराज प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजराजा प्रथम ने श्रीलंका के राजा महेंद्र पंचम को हराकर उसके उत्तरी भाग पर कब्जा कर लिया था।"
    },
    {
        question: "चोल काल में 'मंडलम' क्या था?",
        answers: shuffle([
            { text: "साम्राज्य की राजधानी", correct: false },
            { text: "प्रांत", correct: true },
            { text: "गाँव", correct: false },
            { text: "जिला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोल साम्राज्य कई 'मंडलम' (प्रांतों) में विभाजित था, जो सबसे बड़ी प्रशासनिक इकाई थी।"
    },
    {
        question: "चोल साम्राज्य का अंतिम शासक कौन था?",
        answers: shuffle([
            { text: "राजेंद्र तृतीय", correct: true },
            { text: "राजेंद्र प्रथम", correct: false },
            { text: "कुलोत्तुंग तृतीय", correct: false },
            { text: "राजधिराज द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजेंद्र तृतीय चोल वंश का अंतिम शासक था, जिसे पांड्य शासकों ने पराजित कर चोल साम्राज्य का अंत किया।"
    },
    {
        question: "किस चोल शासक ने 'सुंगम तविर्त' (करों को हटाने वाला) की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "राजराजा प्रथम", correct: false },
            { text: "राजेंद्र प्रथम", correct: false },
            { text: "कुलोत्तुंग प्रथम", correct: true },
            { text: "राजेंद्र द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुलोत्तुंग प्रथम ने व्यापार को बढ़ावा देने के लिए कई करों को समाप्त कर दिया था, जिसके कारण उसे 'सुंगम तविर्त' की उपाधि मिली थी।"
    },
    {
        question: "चोलों की भूमि माप इकाई को क्या कहा जाता था?",
        answers: shuffle([
            { text: "वली", correct: false },
            { text: "वेली", correct: true },
            { text: "कुड़ी", correct: false },
            { text: "नाडु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोल काल में भूमि की माप के लिए 'वेली' नामक इकाई का प्रयोग किया जाता था।"
    },
    {
        question: "चोल काल में 'एरि-पट्टी' क्या था?",
        answers: shuffle([
            { text: "सिंचाई कर", correct: false },
            { text: "दान में दी गई भूमि", correct: false },
            { text: "तालाबों के लिए आरक्षित भूमि", correct: true },
            { text: "सैन्य शिविर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'एरि-पट्टी' वह भूमि थी, जिसका राजस्व गाँव के तालाबों के रखरखाव के लिए उपयोग किया जाता था।"
    },
    {
        question: "चोल शासकों में से किसने चीन में अपना दूत भेजा था?",
        answers: shuffle([
            { text: "राजराजा प्रथम", correct: false },
            { text: "राजेंद्र प्रथम", correct: false },
            { text: "कुलोत्तुंग प्रथम", correct: false },
            { text: "उपर्युक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजराजा प्रथम, राजेंद्र प्रथम और कुलोत्तुंग प्रथम तीनों ने व्यापार को बढ़ावा देने के लिए चीन में दूत भेजे थे।"
    },
    {
        question: "चोलों के शासनकाल में 'उर' और 'सभा' का मुख्य कार्य क्या था?",
        answers: shuffle([
            { text: "राजस्व संग्रह", correct: false },
            { text: "न्यायपालिका का प्रबंधन", correct: false },
            { text: "स्थानीय स्वशासन", correct: true },
            { text: "सैन्य प्रशासन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उर' और 'सभा' गाँवों के स्थानीय स्वशासन को सुनिश्चित करती थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> वे गाँव के मामलों, जैसे- सिंचाई, मंदिर और कानून-व्यवस्था का प्रबंधन करती थीं।"
    },
    {
        question: "किस चोल शासक ने कलिंग (ओडिशा) पर विजय प्राप्त की थी?",
        answers: shuffle([
            { text: "राजेंद्र प्रथम", correct: false },
            { text: "राजराजा प्रथम", correct: false },
            { text: "कुलोत्तुंग प्रथम", correct: true },
            { text: "राजेंद्र द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुलोत्तुंग प्रथम ने कलिंग (ओडिशा) के गंगा शासकों को पराजित कर उस पर विजय प्राप्त की थी।"
    },
    {
        question: "चोल काल में 'नाडू' क्या था?",
        answers: shuffle([
            { text: "प्रांत", correct: false },
            { text: "जिला", correct: false },
            { text: "गाँवों का समूह", correct: true },
            { text: "राजधानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नाडु' गाँवों का एक समूह था, जो 'वलनडु' (जिला) के अंतर्गत आता था।"
    },
    {
        question: "चोल वंश के किस शासक ने 'मुम्मदि चोल' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "विजयालय", correct: false },
            { text: "राजराजा प्रथम", correct: true },
            { text: "राजेंद्र प्रथम", correct: false },
            { text: "राजेंद्र तृतीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजराजा प्रथम ने चेर, पांड्य और श्रीलंका को पराजित कर 'मुम्मदि चोल' (तीन मुकुटों वाला चोल) की उपाधि धारण की थी।"
    },
    {
        question: "चोल काल में 'पेट्टाई' शब्द का प्रयोग किसके लिए किया जाता था?",
        answers: shuffle([
            { text: "गाँव", correct: false },
            { text: "बाजार या व्यापारिक केंद्र", correct: true },
            { text: "बंदरगाह", correct: false },
            { text: "मंदिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पेट्टाई' चोल काल में बाजारों या व्यापारिक केंद्रों को कहा जाता था।"
    },
    {
        question: "चोल शासकों में से किसने गंगा घाटी पर विजय प्राप्त की और 'गंगैकोंडचोल' की उपाधि धारण की?",
        answers: shuffle([
            { text: "राजराजा प्रथम", correct: false },
            { text: "राजेंद्र प्रथम", correct: true },
            { text: "राजधिराज प्रथम", correct: false },
            { text: "कुलोत्तुंग प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजेंद्र प्रथम ने उत्तरी भारत में अपनी सैन्य सफलताओं के बाद, जिसमें उसने पाल शासक महीपाल को हराया था, 'गंगैकोंडचोल' की उपाधि धारण की थी।"
    },
    {
        question: "चोल काल में 'भूमि अनुदान' को किस नाम से जाना जाता था?",
        answers: shuffle([
            { text: "नाडु", correct: false },
            { text: "वेली", correct: false },
            { text: "इराई", correct: false },
            { text: "ब्रह्मदेय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ब्रह्मदेय' ब्राह्मणों को दान में दी गई भूमि को कहा जाता था।"
    },
    {
        question: "चोलों की सबसे बड़ी उपलब्धि क्या थी?",
        answers: shuffle([
            { text: "द्रविड़ मंदिर", correct: false },
            { text: "स्थानीय स्वशासन", correct: true },
            { text: "विदेशी व्यापार", correct: false },
            { text: "शक्तिशाली सेना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोल प्रशासन की सबसे अनूठी और महत्वपूर्ण विशेषता गाँवों में स्थानीय स्वशासन की प्रणाली थी, जिसमें 'उर' और 'सभा' जैसी संस्थाएँ शामिल थीं।"
    },
    {
        question: "चोल काल में 'पडिकवल' शब्द का क्या अर्थ था?",
        answers: shuffle([
            { text: "भूमि माप", correct: false },
            { text: "एक प्रकार का कर", correct: false },
            { text: "ग्राम प्रहरी या चौकीदार", correct: true },
            { text: "मंदिर अधिकारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पडिकवल' गाँव की सुरक्षा के लिए जिम्मेदार एक अधिकारी या प्रहरी था।"
    },
    {
        question: "चोल कला का सबसे उत्कृष्ट उदाहरण कौन-सा है?",
        answers: shuffle([
            { text: "एलोरा का कैलाश मंदिर", correct: false },
            { text: "तंजावुर का बृहदेश्वर मंदिर", correct: true },
            { text: "महाबलीपुरम के रथ", correct: false },
            { text: "कोणार्क का सूर्य मंदिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजराजा प्रथम द्वारा निर्मित बृहदेश्वर मंदिर द्रविड़ वास्तुकला की सर्वोच्च उपलब्धि मानी जाती है।"
    },
    {
        question: "किस चोल शासक के शासनकाल में शैव संत नंबियांडर नंबि ने शैव धर्म के गीतों को 'तिरुमुराई' के रूप में संकलित किया था?",
        answers: shuffle([
            { text: "विजयालय", correct: false },
            { text: "राजराजा प्रथम", correct: true },
            { text: "राजेंद्र प्रथम", correct: false },
            { text: "राजेंद्र द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजराजा प्रथम के शासनकाल में शैव संत नंबियांडर नंबि ने शैव धर्म के स्तोत्रों को 'तिरुमुराई' नामक 11 खंडों में संकलित किया था।"
    },
    {
        question: "चोल काल में सोने के सिक्कों को क्या कहा जाता था?",
        answers: shuffle([
            { text: "कासु", correct: false },
            { text: "वेली", correct: false },
            { text: "कनम", correct: false },
            { text: "कलंजु", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कलंजु' चोल साम्राज्य में सोने के सिक्कों के लिए प्रयुक्त शब्द था।"
    },
    {
        question: "किस चोल शासक ने मलेशिया और इंडोनेशिया के शैलेंद्र साम्राज्य पर नौसैनिक अभियान चलाया था?",
        answers: shuffle([
            { text: "राजराजा प्रथम", correct: false },
            { text: "राजेंद्र प्रथम", correct: true },
            { text: "राजेंद्र द्वितीय", correct: false },
            { text: "कुलोत्तुंग प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजेंद्र प्रथम ने अपनी शक्तिशाली नौसेना का उपयोग करके शैलेंद्र साम्राज्य को हराया और व्यापारिक मार्गों पर चोलों का नियंत्रण स्थापित किया।"
    },
    {
        question: "चोल काल में 'विद्यम' क्या था?",
        answers: shuffle([
            { text: "भूमि का प्रकार", correct: false },
            { text: "भूमि माप", correct: true },
            { text: "एक प्रकार का कर", correct: false },
            { text: "विद्वानों को दी गई भूमि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विद्यम' चोल काल में भूमि माप की एक इकाई थी।"
    },
    {
        question: "चोलों के शासनकाल में 'उर' सभा का मुख्य कार्य क्या था?",
        answers: shuffle([
            { text: "मंदिरों का प्रबंधन", correct: false },
            { text: "भू-राजस्व का संग्रह", correct: false },
            { text: "कृषि भूमि का बँटवारा", correct: false },
            { text: "साधारण गाँवों का प्रशासन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उर' उन गाँवों की सभा थी, जहाँ सभी जाति के लोग रहते थे, और यह गाँव के सामान्य मामलों का प्रबंधन करती थी।"
    },
    {
        question: "किस चोल शासक ने कुलोत्तुंग चोल प्रथम के रूप में चोल सिंहासन पर अधिकार किया?",
        answers: shuffle([
            { text: "राजेंद्र प्रथम", correct: false },
            { text: "राजधिराज प्रथम", correct: false },
            { text: "राजेंद्र चालुक्य", correct: true },
            { text: "राजेंद्र द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजेंद्र चालुक्य, जो पूर्वी चालुक्य राजकुमार था, ने चोल सिंहासन पर अधिकार कर 'कुलोत्तुंग प्रथम' की उपाधि धारण की।"
    },
    {
        question: "चोलों की राजधानी तंजावुर किस नदी के तट पर स्थित थी?",
        answers: shuffle([
            { text: "कृष्णा", correct: false },
            { text: "कावेरी", correct: true },
            { text: "गोदावरी", correct: false },
            { text: "तुंगभद्रा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तंजावुर, जो चोलों की राजधानी थी, कावेरी नदी के तट पर स्थित थी।"
    },
    {
        question: "चोल काल में 'पेरुंद्रनम्' कौन होता था?",
        answers: shuffle([
            { text: "गाँव का मुखिया", correct: false },
            { text: "एक उच्च पदस्थ अधिकारी", correct: true },
            { text: "एक प्रकार का कर", correct: false },
            { text: "मंदिर का पुजारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पेरुंद्रनम्' चोल प्रशासन में एक उच्च पदस्थ अधिकारी होता था, जिसे राजा द्वारा नियुक्त किया जाता था।"
    },
    {
        question: "चोल साम्राज्य के पतन का मुख्य कारण क्या था?",
        answers: shuffle([
            { text: "आंतरिक कलह", correct: false },
            { text: "पंड्यों और होयसलों का उदय", correct: true },
            { text: "मुस्लिम आक्रमण", correct: false },
            { text: "विदेशी व्यापार में गिरावट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पांड्य और होयसल जैसे पड़ोसी राजवंशों के उदय और उनके लगातार आक्रमणों ने चोल साम्राज्य को कमजोर कर दिया, जिससे उसका पतन हुआ।"
    },
    {
        question: "चोल काल में 'तिरुमुराई' क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का कर", correct: false },
            { text: "शैव धर्म के गीतों का संग्रह", correct: true },
            { text: "भूमि माप की इकाई", correct: false },
            { text: "मंदिर वास्तुकला की शैली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तिरुमुराई' शैव संत नंबियांडर नंबि द्वारा संकलित शैव धर्म के 11 खंडों का संग्रह है।"
    },
    {
        question: "चोलों के शासनकाल में 'एरिवीर-पटट' का क्या अर्थ था?",
        answers: shuffle([
            { text: "सिंचाई समिति", correct: true },
            { text: "सैन्य अधिकारियों का समूह", correct: false },
            { text: "गाँव की सभा", correct: false },
            { text: "मंदिर के पुजारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'एरिवीर-पटट' चोल काल में गाँव की सिंचाई व्यवस्था और तालाबों के रखरखाव की जिम्मेदारी वाली समिति थी।"
    },
    {
        question: "किस चोल शासक ने कलिंग पर विजय प्राप्त की थी?",
        answers: shuffle([
            { text: "राजराजा प्रथम", correct: false },
            { text: "राजेंद्र प्रथम", correct: false },
            { text: "कुलोत्तुंग प्रथम", correct: true },
            { text: "राजेंद्र द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुलोत्तुंग प्रथम ने 1110 ईस्वी में कलिंग के गंगा शासकों को हराया था।"
    },
    {
        question: "चोल काल में 'सभा' का मुख्य कार्य क्या था?",
        answers: shuffle([
            { text: "गाँवों की जनगणना", correct: false },
            { text: "भू-राजस्व का संग्रह", correct: false },
            { text: "ब्राह्मणों के गाँवों का प्रशासन", correct: true },
            { text: "सैन्य प्रशासन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सभा' या 'महासभा' विशेष रूप से उन गाँवों का प्रबंधन करती थी, जहाँ ब्राह्मण रहते थे।"
    },
    {
        question: "किस चोल शासक ने अपने पिता के समय की सभी विजयों को दोहराया और साम्राज्य का विस्तार किया?",
        answers: shuffle([
            { text: "राजराजा प्रथम", correct: false },
            { text: "राजेंद्र प्रथम", correct: true },
            { text: "राजेंद्र द्वितीय", correct: false },
            { text: "राजधिराज प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजेंद्र प्रथम ने अपने पिता राजराजा प्रथम की विजयों को जारी रखा और गंगा नदी घाटी तक अभियान चलाकर चोल साम्राज्य को उसकी चरम सीमा तक पहुँचाया।"
    },
    {
        question: "चोल काल में निर्मित 'नटराज' की मूर्ति किस धातु की बनी होती थी?",
        answers: shuffle([
            { text: "पत्थर", correct: false },
            { text: "कांसा", correct: true },
            { text: "लोहा", correct: false },
            { text: "सोना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चोल काल की नटराज की मूर्तियाँ कांस्य धातु से बनी होती थीं और ये 'लॉस्ट-वैक्स' विधि से बनाई जाती थीं।"
    },
    {
        question: "चोल साम्राज्य का अंतिम शासक कौन था?",
        answers: shuffle([
            { text: "राजेंद्र प्रथम", correct: false },
            { text: "राजेंद्र तृतीय", correct: true },
            { text: "राजराजा द्वितीय", correct: false },
            { text: "कुलोत्तुंग द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजेंद्र तृतीय को पांड्य शासक जटावर्मन सुंदर पांड्य ने पराजित कर चोल साम्राज्य का अंत किया।"
    },
    {
        question: "किस चोल शासक ने श्रीलंका के राजा महेंद्र पंचम को हराया था?",
        answers: shuffle([
            { text: "विजयालय", correct: false },
            { text: "राजराजा प्रथम", correct: true },
            { text: "राजेंद्र प्रथम", correct: false },
            { text: "करिकाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजराजा प्रथम ने 992 ईस्वी में श्रीलंका पर आक्रमण कर उसके राजा महेंद्र पंचम को हराया था और उसके उत्तरी हिस्से पर कब्जा कर लिया था।"
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