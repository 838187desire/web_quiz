const questions = [
    {
        topHeading: "कुषाण साम्राज्य पर आधारित बहुविकल्पी प्रश्न part 1 (quiz_no.79)"
    },
    {
        question: "भारत में कुषाण साम्राज्य की स्थापना किसने की थी?",
        answers: shuffle([
            { text: "कनिष्क", correct: false },
            { text: "विम कडफिसेस", correct: false },
            { text: "कुजुल कडफिसेस", correct: true },
            { text: "वासुदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुजुल कडफिसेस को भारत में कुषाण साम्राज्य का संस्थापक माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने पार्थियन और शक शासकों को हराकर भारत के उत्तर-पश्चिमी हिस्सों पर अपना नियंत्रण स्थापित किया।"
    },
    {
        question: "किस कुषाण शासक को 'देवपुत्र' की उपाधि से जाना जाता था, जो चीनियों से प्रभावित थी?",
        answers: shuffle([
            { text: "कुजुल कडफिसेस", correct: false },
            { text: "विम कडफिसेस", correct: true },
            { text: "कनिष्क", correct: false },
            { text: "वासुदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विम कडफिसेस ने 'देवपुत्र' की उपाधि धारण की थी, जिसका अर्थ 'ईश्वर का पुत्र' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उपाधि संभवतः चीनी शासकों से प्रभावित थी, जो खुद को 'स्वर्ग का पुत्र' कहते थे।"
    },
    {
        question: "किस कुषाण शासक के शासनकाल में 'शक संवत' की शुरुआत हुई थी?",
        answers: shuffle([
            { text: "कुजुल कडफिसेस", correct: false },
            { text: "विम कडफिसेस", correct: false },
            { text: "कनिष्क", correct: true },
            { text: "वासुदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कनिष्क ने 78 ईस्वी में अपने राज्यारोहण के उपलक्ष्य में 'शक संवत' की शुरुआत की, जिसे बाद में भारत सरकार द्वारा राष्ट्रीय पंचांग के रूप में अपनाया गया।"
    },
    {
        question: "कुषाणों की पहली राजधानी क्या थी?",
        answers: shuffle([
            { text: "मथुरा", correct: false },
            { text: "पुरुषपुर (पेशावर)", correct: true },
            { text: "पाटलिपुत्र", correct: false },
            { text: "तक्षशिला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाण शासकों, विशेष रूप से कनिष्क, की पहली राजधानी पुरुषपुर (आधुनिक पेशावर) थी।"
    },
    {
        question: "कनिष्क की दूसरी राजधानी क्या थी?",
        answers: shuffle([
            { text: "तक्षशिला", correct: false },
            { text: "मथुरा", correct: true },
            { text: "पाटलिपुत्र", correct: false },
            { text: "उज्जैन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरुषपुर (पेशावर) के बाद, कनिष्क ने मथुरा को अपनी दूसरी राजधानी बनाया।"
    },
    {
        question: "किस कुषाण शासक के सिक्कों पर शिव, नंदी और त्रिशूल का चित्रण मिलता है?",
        answers: shuffle([
            { text: "कुजुल कडफिसेस", correct: false },
            { text: "विम कडफिसेस", correct: true },
            { text: "कनिष्क", correct: false },
            { text: "वासुदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विम कडफिसेस पहला कुषाण शासक था, जिसने अपने सिक्कों पर शिव के प्रतीकों (नंदी और त्रिशूल) को दर्शाया, जिससे उसके शैव धर्म के प्रति लगाव का पता चलता है।"
    },
    {
        question: "चतुर्थ बौद्ध संगीति किसके शासनकाल में हुई थी?",
        answers: shuffle([
            { text: "अशोक", correct: false },
            { text: "हर्ष", correct: false },
            { text: "कनिष्क", correct: true },
            { text: "अजातशत्रु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चतुर्थ बौद्ध संगीति का आयोजन कनिष्क के शासनकाल में कुंडलवन (कश्मीर) में हुआ था, जिसकी अध्यक्षता वसुमित्र ने की थी।"
    },
    {
        question: "कुषाण साम्राज्य के किस शासक ने सबसे पहले सोने के सिक्के जारी किए?",
        answers: shuffle([
            { text: "कुजुल कडफिसेस", correct: false },
            { text: "विम कडफिसेस", correct: true },
            { text: "कनिष्क", correct: false },
            { text: "वासुदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विम कडफिसेस को भारत में सबसे पहले बड़े पैमाने पर सोने के सिक्के जारी करने का श्रेय दिया जाता है।"
    },
    {
        question: "'महाविभाषा सूत्र' नामक बौद्ध ग्रंथ की रचना किसने की थी?",
        answers: shuffle([
            { text: "अश्वघोष", correct: false },
            { text: "वसुमित्र", correct: true },
            { text: "नागार्जुन", correct: false },
            { text: "चरक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चतुर्थ बौद्ध संगीति की अध्यक्षता करने वाले वसुमित्र ने इस संगीति के दौरान 'महाविभाषा सूत्र' नामक बौद्ध ग्रंथ की रचना की थी, जिसे बौद्ध धर्म का विश्वकोश माना जाता है।"
    },
    {
        question: "कुषाण काल में भारत में किस कला शैली का विकास हुआ?",
        answers: shuffle([
            { text: "मथुरा कला और गांधार कला", correct: true },
            { text: "गुप्त कला", correct: false },
            { text: "पाल कला", correct: false },
            { text: "मौर्य कला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाण काल में कला की दो प्रमुख शैलियाँ विकसित हुईं: मथुरा कला (भारतीय शैली) और गांधार कला (ग्रीक-रोमन और भारतीय शैली का मिश्रण)।"
    },
    {
        question: "प्रसिद्ध चिकित्सक चरक किसके दरबार में थे?",
        answers: shuffle([
            { text: "चंद्रगुप्त मौर्य", correct: false },
            { text: "अशोक", correct: false },
            { text: "कनिष्क", correct: true },
            { text: "समुद्रगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चरक, जिन्होंने 'चरक संहिता' की रचना की थी, कनिष्क के दरबार के एक प्रसिद्ध चिकित्सक थे।"
    },
    {
        question: "कुषाणों का संबंध किस जनजाति से था?",
        answers: shuffle([
            { text: "हूण", correct: false },
            { text: "यू-ची (Yue-chi)", correct: true },
            { text: "पार्थियन", correct: false },
            { text: "शक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाण लोग मध्य एशिया की यू-ची नामक खानाबदोश जनजाति की पाँच शाखाओं में से एक थे।"
    },
    {
        question: "कुषाण साम्राज्य का अंतिम महान शासक कौन था?",
        answers: shuffle([
            { text: "कनिष्क", correct: false },
            { text: "हुविष्क", correct: false },
            { text: "वासुदेव", correct: true },
            { text: "विम कडफिसेस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वासुदेव को कुषाण साम्राज्य का अंतिम महान शासक माना जाता है, जिसके बाद साम्राज्य का पतन शुरू हो गया।"
    },
    {
        question: "कनिष्क के दरबार में कौन सा दार्शनिक और लेखक था, जिसने बुद्ध की जीवनी लिखी थी?",
        answers: shuffle([
            { text: "वसुमित्र", correct: false },
            { text: "अश्वघोष", correct: true },
            { text: "नागार्जुन", correct: false },
            { text: "चरक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अश्वघोष एक महान बौद्ध दार्शनिक और कवि थे, जिन्होंने 'बुद्धचरित' (बुद्ध की जीवनी) की रचना की थी।"
    },
    {
        question: "'शून्य' के सिद्धांत का प्रतिपादन करने वाले बौद्ध दार्शनिक नागार्जुन किसके समकालीन थे?",
        answers: shuffle([
            { text: "कनिष्क", correct: true },
            { text: "अशोक", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "हर्षवर्धन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नागार्जुन, जो 'शून्य' के सिद्धांत के लिए जाने जाते हैं, कनिष्क के दरबार के एक प्रमुख दार्शनिक थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्हें 'भारत का आइंस्टीन' भी कहा जाता है।"
    },
    {
        question: "किस कुषाण शासक ने 'महाराजाधिराज' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "कुजुल कडफिसेस", correct: false },
            { text: "विम कडफिसेस", correct: true },
            { text: "कनिष्क", correct: false },
            { text: "वासुदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विम कडफिसेस ने 'महाराजाधिराज' (राजाओं का राजा) की उपाधि धारण की थी, जो उसकी बढ़ती हुई शक्ति का प्रतीक थी।"
    },
    {
        question: "कनिष्क बौद्ध धर्म के किस संप्रदाय का अनुयायी था?",
        answers: shuffle([
            { text: "हीनयान", correct: false },
            { text: "महायान", correct: true },
            { text: "वज्रयान", correct: false },
            { text: "थेरवाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कनिष्क ने महायान बौद्ध धर्म को संरक्षण दिया था, जिसका प्रसार उसके शासनकाल में मध्य एशिया और चीन तक हुआ।"
    },
    {
        question: "गांधार कला किन दो शैलियों का मिश्रण थी?",
        answers: shuffle([
            { text: "भारतीय और चीनी", correct: false },
            { text: "भारतीय और फारसी", correct: false },
            { text: "भारतीय और यूनानी", correct: true },
            { text: "भारतीय और रोमन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गांधार कला को भारतीय और यूनानी (हेलेनिस्टिक) कला का मिश्रण माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें बुद्ध की मूर्तियों में यूनानी देवताओं जैसी शारीरिक बनावट दिखाई देती है।"
    },
    {
        question: "कुषाण काल में किस वस्तु का व्यापार सबसे अधिक होता था?",
        answers: shuffle([
            { text: "सूती वस्त्र", correct: false },
            { text: "रेशम", correct: true },
            { text: "मसाले", correct: false },
            { text: "सोना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाण शासकों ने रेशम मार्ग (Silk Route) पर नियंत्रण स्थापित किया था, जिससे रेशम का व्यापार बड़े पैमाने पर होता था।"
    },
    {
        question: "किस कुषाण शासक के सिक्कों पर बुद्ध का चित्र अंकित था?",
        answers: shuffle([
            { text: "कुजुल कडफिसेस", correct: false },
            { text: "विम कडफिसेस", correct: false },
            { text: "कनिष्क", correct: true },
            { text: "वासुदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कनिष्क के शासनकाल में ही बुद्ध की मूर्तियाँ और सिक्के बनाए गए थे, जिन पर बुद्ध की प्रतिमा अंकित थी।"
    },
    {
        question: "कुषाणों के शासनकाल में कौन सी नई कृषि तकनीक का प्रचलन हुआ?",
        answers: shuffle([
            { text: "हल", correct: false },
            { text: "सिंचाई नहरें", correct: false },
            { text: "जलकुप्पी (Persian Wheel)", correct: true },
            { text: "उपरोक्त में से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाणों के शासनकाल में जलकुप्पी (रहट या Persian Wheel) का व्यापक रूप से उपयोग होने लगा, जिससे सिंचाई में सुधार हुआ।"
    },
    {
        question: "कनिष्क के समय पुरुषपुर (पेशावर) में निर्मित विशाल स्तूप किसने बनवाया था?",
        answers: shuffle([
            { text: "अश्वघोष", correct: false },
            { text: "नागार्जुन", correct: false },
            { text: "चरक", correct: false },
            { text: "कनिष्क", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कनिष्क ने पुरुषपुर (पेशावर) में एक विशाल स्तूप और एक मठ का निर्माण करवाया था, जिसे चीनी यात्री ह्वेन त्सांग ने भी देखा था।"
    },
    {
        question: "कुषाण साम्राज्य का पतन किस शताब्दी में हुआ?",
        answers: shuffle([
            { text: "पहली शताब्दी ईस्वी", correct: false },
            { text: "दूसरी शताब्दी ईस्वी", correct: false },
            { text: "तीसरी शताब्दी ईस्वी", correct: true },
            { text: "चौथी शताब्दी ईस्वी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वासुदेव के बाद, कुषाण साम्राज्य धीरे-धीरे कमजोर होता गया और तीसरी शताब्दी ईस्वी के मध्य तक इसका पतन हो गया।"
    },
    {
        question: "कनिष्क के दरबार का प्रसिद्ध विद्वान अश्वघोष कहाँ से लाया गया था?",
        answers: shuffle([
            { text: "मथुरा", correct: false },
            { text: "पाटलिपुत्र", correct: true },
            { text: "तक्षशिला", correct: false },
            { text: "पुरुषपुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कनिष्क ने पाटलिपुत्र पर आक्रमण किया और वहाँ से अश्वघोष को अपने दरबार में लेकर आया था।"
    },
    {
        question: "किस चीनी स्रोत में कुषाणों को यू-ची जनजाति की एक शाखा बताया गया है?",
        answers: shuffle([
            { text: "फाह्यान का वृत्तांत", correct: false },
            { text: "ह्वेन त्सांग का वृत्तांत", correct: false },
            { text: "हान राजवंश के इतिहास", correct: true },
            { text: "उपरोक्त में से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीनी स्रोतों, विशेष रूप से हान राजवंश के इतिहास, में कुषाणों को यू-ची जनजाति की पाँच शाखाओं में से एक के रूप में वर्णित किया गया है।"
    },
    {
        question: "कुषाण शासक कनिष्क किस धर्म का अनुयायी था?",
        answers: shuffle([
            { text: "बौद्ध धर्म", correct: true },
            { text: "जैन धर्म", correct: false },
            { text: "शैव धर्म", correct: false },
            { text: "वैष्णव धर्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कनिष्क को बौद्ध धर्म का एक महान संरक्षक माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उसके शासनकाल में महायान बौद्ध धर्म का व्यापक प्रसार हुआ।"
    },
    {
        question: "कुषाणों द्वारा जारी किए गए सिक्कों पर किस भाषा और लिपि का प्रयोग होता था?",
        answers: shuffle([
            { text: "प्राकृत और ब्राह्मी", correct: false },
            { text: "यूनानी और खरोष्ठी", correct: true },
            { text: "संस्कृत और देवनागरी", correct: false },
            { text: "चीनी और मंदारिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाणों के शुरुआती सिक्कों पर यूनानी भाषा और खरोष्ठी लिपि का प्रयोग मिलता है।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में, सिक्कों पर केवल खरोष्ठी लिपि का भी प्रयोग हुआ।"
    },
    {
        question: "कुषाण काल में किस धातु का प्रयोग सिक्कों के लिए सबसे अधिक होता था?",
        answers: shuffle([
            { text: "सोना", correct: false },
            { text: "चांदी", correct: false },
            { text: "तांबा और मिश्र धातु", correct: true },
            { text: "शीशा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाणों ने सोने के सिक्के भी जारी किए थे, लेकिन तांबे और मिश्र धातु के सिक्के बड़ी संख्या में और व्यापक रूप से प्रचलन में थे।"
    },
    {
        question: "मथुरा कला का विकास कुषाण काल में किस क्षेत्र में हुआ?",
        answers: shuffle([
            { text: "पंजाब", correct: false },
            { text: "बंगाल", correct: false },
            { text: "उत्तर प्रदेश", correct: true },
            { text: "बिहार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मथुरा कला का विकास उत्तर प्रदेश के मथुरा क्षेत्र में हुआ, जहाँ लाल बलुआ पत्थर का उपयोग करके मूर्तियाँ बनाई जाती थीं।"
    },
    {
        question: "कुषाण शासकों ने किस देश के साथ व्यापारिक संबंध स्थापित किए थे, जिससे रेशम मार्ग का विकास हुआ?",
        answers: shuffle([
            { text: "रोमन साम्राज्य", correct: false },
            { text: "चीन", correct: false },
            { text: "फारस", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाण शासकों ने चीन से रेशम प्राप्त करके उसे मध्य एशिया और रोमन साम्राज्य तक पहुँचाया, जिससे रेशम मार्ग का महत्व बढ़ा।"
    },
    {
        question: "किस कुषाण शासक के सिक्कों पर पहली बार शिव और बुद्ध दोनों की प्रतिमाएं अंकित मिली हैं?",
        answers: shuffle([
            { text: "कुजुल कडफिसेस", correct: false },
            { text: "विम कडफिसेस", correct: false },
            { text: "कनिष्क", correct: true },
            { text: "वासुदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कनिष्क एक धार्मिक रूप से सहिष्णु शासक था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसके सिक्कों पर न केवल बुद्ध की, बल्कि शिव, सूर्य और अन्य ईरानी देवताओं की भी प्रतिमाएं मिलती हैं।"
    },
    {
        question: "कुषाण काल में, बुद्ध की पहली खड़ी मूर्ति किस कला शैली में बनाई गई थी?",
        answers: shuffle([
            { text: "अमरावती कला", correct: false },
            { text: "गुप्त कला", correct: false },
            { text: "मथुरा कला", correct: false },
            { text: "गांधार कला", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गांधार कला शैली में ही बुद्ध की पहली खड़ी हुई मूर्तियाँ बनाई गई थीं, जिनमें यूनानी प्रभाव स्पष्ट दिखाई देता है।"
    },
    {
        question: "किस चीनी जनरल ने कुषाणों को हराया था?",
        answers: shuffle([
            { text: "पेन चाओ", correct: true },
            { text: "फुयान", correct: false },
            { text: "शिह हुआंग टी", correct: false },
            { text: "हान वू टी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीनी जनरल पेन चाओ ने कनिष्क को हराया था, जिससे कनिष्क को चीन के साथ संबंधों में हार का सामना करना पड़ा।"
    },
    {
        question: "कनिष्क के शासनकाल में कौनसा महान गणितज्ञ और खगोलशास्त्री था?",
        answers: shuffle([
            { text: "आर्यभट्ट", correct: false },
            { text: "चरक", correct: false },
            { text: "अश्वघोष", correct: false },
            { text: "कोई नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कनिष्क के दरबार में चरक (चिकित्सक), अश्वघोष (दार्शनिक) और नागार्जुन (दार्शनिक) जैसे विद्वान थे, लेकिन आर्यभट्ट (गुप्त काल के) जैसे कोई महान गणितज्ञ या खगोलशास्त्री नहीं थे।"
    },
    {
        question: "कुषाणों द्वारा जारी किए गए सोने के सिक्के किसके सिक्कों से प्रेरित थे?",
        answers: shuffle([
            { text: "रोमन सिक्के", correct: true },
            { text: "यूनानी सिक्के", correct: false },
            { text: "चीनी सिक्के", correct: false },
            { text: "फारसी सिक्के", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाणों ने रोमन सोने के सिक्कों की नकल करके अपने सोने के सिक्के जारी किए थे, जिन्हें 'डिनारियस' कहा जाता था।"
    },
    {
        question: "किस कुषाण शासक ने 'महाराजाधिराज' और 'देवपुत्र' दोनों उपाधियाँ धारण की थीं?",
        answers: shuffle([
            { text: "कुजुल कडफिसेस", correct: false },
            { text: "विम कडफिसेस", correct: false },
            { text: "कनिष्क", correct: true },
            { text: "वासुदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कनिष्क ने इन दोनों उपाधियों को धारण किया था, जो उसकी शक्ति और साम्राज्य की विशालता को दर्शाती थीं।"
    },
    {
        question: "कुषाणों ने किस मध्य एशियाई लिपि को अपनाया था?",
        answers: shuffle([
            { text: "खरोष्ठी", correct: true },
            { text: "ब्राह्मी", correct: false },
            { text: "ग्रीक", correct: false },
            { text: "यूनानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाणों ने खरोष्ठी लिपि का व्यापक रूप से उपयोग किया था, जो कि गांधारी प्राकृत लिखने के लिए प्रयुक्त होती थी।"
    },
    {
        question: "'बुद्धचरित' नामक ग्रंथ की रचना किसने की थी?",
        answers: shuffle([
            { text: "नागार्जुन", correct: false },
            { text: "अश्वघोष", correct: true },
            { text: "वसुमित्र", correct: false },
            { text: "चरक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अश्वघोष, जो कनिष्क के दरबार में था, उसने 'बुद्धचरित' नामक महाकाव्य की रचना की थी, जिसमें बुद्ध के जीवन का वर्णन है।"
    },
    {
        question: "कुषाण काल में भारत में सबसे अधिक विकसित उद्योग कौनसा था?",
        answers: shuffle([
            { text: "कपड़ा उद्योग", correct: true },
            { text: "धातु उद्योग", correct: false },
            { text: "आभूषण उद्योग", correct: false },
            { text: "रेशम उद्योग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाण काल में कपड़ा उद्योग बहुत विकसित था, जिसमें सूती, रेशमी और ऊनी कपड़ों का उत्पादन होता था।"
    },
    {
        question: "कनिष्क के शासनकाल में आयोजित बौद्ध संगीति का उद्देश्य क्या था?",
        answers: shuffle([
            { text: "बौद्ध धर्म के सिद्धांतों को विभाजित करना", correct: false },
            { text: "बौद्ध ग्रंथों को संकलित करना", correct: true },
            { text: "बौद्ध धर्म को महायान और हीनयान में विभाजित करना", correct: false },
            { text: "बौद्ध भिक्षुओं को एकजुट करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चतुर्थ बौद्ध संगीति का मुख्य उद्देश्य बौद्ध ग्रंथों को संकलित करना और उन पर टीकाएँ लिखना था, जिसके परिणामस्वरूप 'महाविभाषा सूत्र' की रचना हुई।"
    },
    {
        question: "'भारत का आइंस्टीन' किसे कहा जाता है?",
        answers: shuffle([
            { text: "अश्वघोष", correct: false },
            { text: "चरक", correct: false },
            { text: "नागार्जुन", correct: true },
            { text: "वसुमित्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नागार्जुन को उनके 'शून्यवाद' के सिद्धांत के कारण 'भारत का आइंस्टीन' कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> वह कनिष्क के समकालीन थे।"
    },
    {
        question: "किस कुषाण शासक ने भारत में सबसे शुद्ध सोने के सिक्के जारी किए थे?",
        answers: shuffle([
            { text: "कुजुल कडफिसेस", correct: false },
            { text: "विम कडफिसेस", correct: true },
            { text: "कनिष्क", correct: false },
            { text: "वासुदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाणों में विम कडफिसेस ने सबसे शुद्ध सोने के सिक्के जारी किए थे।"
    },
    {
        question: "कुषाणों के शासनकाल में भारतीय और रोमन कला का मिश्रण किस कला शैली में देखा जाता है?",
        answers: shuffle([
            { text: "मथुरा कला", correct: false },
            { text: "गांधार कला", correct: true },
            { text: "अमरावती कला", correct: false },
            { text: "गुप्त कला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गांधार कला में यूनानी-रोमन प्रभाव स्पष्ट है, जिसमें बुद्ध की मूर्तियाँ यूनानी देवताओं की तरह दिखती हैं।"
    },
    {
        question: "कुषाणों के शासनकाल में किस बंदरगाह से रोमन साम्राज्य के साथ व्यापार होता था?",
        answers: shuffle([
            { text: "भड़ोच", correct: true },
            { text: "ताम्रलिप्ति", correct: false },
            { text: "मुज़िरिस", correct: false },
            { text: "कल्याण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पश्चिमी तट पर स्थित भड़ोच (ब्यारीगाजा) कुषाण काल का एक प्रमुख बंदरगाह था, जहाँ से रोमन साम्राज्य के साथ व्यापार होता था।"
    },
    {
        question: "कनिष्क के दरबार में कौनसा विद्वान था जिसने 'सूत्रालंकार' की रचना की?",
        answers: shuffle([
            { text: "चरक", correct: false },
            { text: "नागार्जुन", correct: false },
            { text: "अश्वघोष", correct: true },
            { text: "वसुमित्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अश्वघोष ने 'बुद्धचरित' के अलावा 'सूत्रालंकार' नामक ग्रंथ की भी रचना की थी।"
    },
    {
        question: "किस कुषाण शासक ने अपने सिक्कों पर 'ओशो' (Oesho) नामक देवता की प्रतिमा अंकित करवाई थी?",
        answers: shuffle([
            { text: "कुजुल कडफिसेस", correct: false },
            { text: "विम कडफिसेस", correct: false },
            { text: "कनिष्क", correct: true },
            { text: "वासुदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कनिष्क के सिक्कों पर 'ओशो' नामक एक देवता की प्रतिमा मिलती है, जिसकी पहचान शिव से की जाती है।"
    },
    {
        question: "कुषाण साम्राज्य की राजधानी पुरुषपुर (पेशावर) किस आधुनिक देश में स्थित है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "पाकिस्तान", correct: true },
            { text: "अफगानिस्तान", correct: false },
            { text: "ईरान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरुषपुर, जिसे वर्तमान में पेशावर कहा जाता है, पाकिस्तान के खैबर पख्तूनख्वा प्रांत में स्थित है।"
    },
    {
        question: "कनिष्क ने किस क्षेत्र पर विजय प्राप्त करके 'देवपुत्र' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "मध्य एशिया", correct: true },
            { text: "रोमन साम्राज्य", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कनिष्क ने मध्य एशिया के बड़े हिस्से पर विजय प्राप्त की थी और अपनी शक्ति का प्रदर्शन करने के लिए 'देवपुत्र' की उपाधि धारण की।"
    },
    {
        question: "कुषाण काल में किस धातु का प्रयोग सिक्कों के लिए सबसे अधिक होता था?",
        answers: shuffle([
            { text: "सोना", correct: false },
            { text: "चांदी", correct: false },
            { text: "तांबा और मिश्र धातु", correct: true },
            { text: "शीशा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाणों ने सोने के सिक्के भी जारी किए थे, लेकिन तांबे और मिश्र धातु के सिक्के बड़ी संख्या में और व्यापक रूप से प्रचलन में थे।"
    },
    {
        question: "किस चीनी यात्री ने कनिष्क के विशाल स्तूप और मठ का वर्णन किया था?",
        answers: shuffle([
            { text: "फाह्यान", correct: false },
            { text: "ह्वेन त्सांग", correct: true },
            { text: "इत्सिंग", correct: false },
            { text: "सुंग युन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीनी यात्री ह्वेन त्सांग ने सातवीं शताब्दी में भारत की यात्रा के दौरान पुरुषपुर में कनिष्क के विशाल स्तूप और मठ को देखा था और उसका वर्णन अपने यात्रा वृत्तांत में किया था।"
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