const questions = [
    {
        topHeading: "गुलामवंश पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. इल्तुतमिश की न्यायप्रियता का प्रतीक क्या था?",
        answers: shuffle([
            { text: "सोने की जंजीर", correct: false },
            { text: "लाल वस्त्र", correct: false },
            { text: "महल के बाहर दो शेरों की मूर्तियाँ", correct: true },
            { text: "एक बड़ा घंटा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इब्न बतूता के अनुसार, <b>इल्तुतमिश</b> ने अपने महल के बाहर संगमरमर के दो शेरों की मूर्तियाँ स्थापित करवाई थीं, जिनके गले में घंटियाँ लटकी थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> कोई भी पीड़ित व्यक्ति इन घंटियों को बजाकर न्याय की मांग कर सकता था।"
    },
    {
        question: "प्रश्न 2. गुलाम वंश को और किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "खिलजी वंश", correct: false },
            { text: "तुगलक वंश", correct: false },
            { text: "मामलुक वंश", correct: true },
            { text: "लोदी वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>'मामलुक'</b> एक अरबी शब्द है जिसका अर्थ है <b>'स्वामित्व वाला'</b>।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि इस वंश के अधिकांश शासक या तो गुलाम थे या गुलामों के वंशज थे, इसलिए इसे <b>मामलुक वंश</b> भी कहा जाता है।"
    },
    {
        question: "प्रश्न 3. 'गुलाम वंश' शब्द का प्रयोग सबसे पहले किस इतिहासकार ने किया?",
        answers: shuffle([
            { text: "हबीबुल्लाह", correct: true },
            { text: "लेनपूल", correct: false },
            { text: "विन्सेंट स्मिथ", correct: false },
            { text: "फरिश्ता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इतिहासकार <b>ए.बी.एम. हबीबुल्लाह</b> ने इस काल के शासकों के लिए 'गुलाम वंश' शब्द का प्रयोग किया।<br><br><i class='fa-solid fa-angles-right icon'></i> हालाँकि आधुनिक इतिहासकार 'मामलुक वंश' या 'प्रारंभिक तुर्क सुल्तान' कहना अधिक उपयुक्त मानते हैं।"
    },
    {
        question: "प्रश्न 4. 'लाखबख्श' (लाखों का दान देने वाला) की उपाधि किसे दी गई थी?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "बलबन", correct: false },
            { text: "कुतुबुद्दीन ऐबक", correct: true },
            { text: "नासिरुद्दीन महमूद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कुतुबुद्दीन ऐबक</b> अपनी उदारता और दानशीलता के कारण <b>'लाखबख्श'</b> के नाम से प्रसिद्ध था।"
    },
    {
        question: "प्रश्न 5. दिल्ली में 'कुव्वत-उल-इस्लाम' मस्जिद का निर्माण किसने करवाया था?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "इल्तुतमिश", correct: false },
            { text: "कुतुबुद्दीन ऐबक", correct: true },
            { text: "बलबन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कुतुबुद्दीन ऐबक</b> ने दिल्ली विजय के उपलक्ष्य में <b>'कुव्वत-उल-इस्लाम'</b> मस्जिद का निर्माण शुरू करवाया।<br><br><i class='fa-solid fa-angles-right icon'></i> जो भारत में निर्मित पहली तुर्की मस्जिद मानी जाती है।"
    },
    {
        question: "प्रश्न 6. अजमेर में 'अढाई दिन का झोपड़ा' किसने बनवाया था?",
        answers: shuffle([
            { text: "मुहम्मद गोरी", correct: false },
            { text: "कुतुबुद्दीन ऐबक", correct: true },
            { text: "इल्तुतमिश", correct: false },
            { text: "बलबन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>ऐबक</b> ने अजमेर में एक संस्कृत विद्यालय को तोड़कर उसकी जगह <b>'अढाई दिन का झोपड़ा'</b> नामक मस्जिद का निर्माण करवाया।"
    },
    {
        question: "प्रश्न 7. प्रसिद्ध सूफी संत ख्वाजा कुतुबुद्दीन बख्तियार काकी के नाम पर किस मीनार का निर्माण शुरू हुआ था?",
        answers: shuffle([
            { text: "चार मीनार", correct: false },
            { text: "कुतुब मीनार", correct: true },
            { text: "अलाई मीनार", correct: false },
            { text: "शहीद मीनार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कुतुबुद्दीन ऐबक</b> ने अपने गुरु सूफी संत <b>ख्वाजा कुतुबुद्दीन बख्तियार काकी</b> की स्मृति में दिल्ली में <b>कुतुब मीनार</b> का निर्माण कार्य प्रारंभ करवाया था।"
    },
    {
        question: "प्रश्न 8. कुतुबुद्दीन ऐबक की मृत्यु कैसे हुई थी?",
        answers: shuffle([
            { text: "युद्ध में", correct: false },
            { text: "बीमारी से", correct: false },
            { text: "चौगान (पोलो) खेलते समय घोड़े से गिरकर", correct: true },
            { text: "एक षड्यंत्र में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1210 ई.</b> में लाहौर में <b>चौगान (आधुनिक पोलो)</b> का खेल खेलते समय घोड़े से गिरने के कारण <b>कुतुबुद्दीन ऐबक</b> की मृत्यु हो गई।"
    },
    {
        question: "प्रश्न 9. कुतुबुद्दीन ऐबक का उत्तराधिकारी कौन बना?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "आराम शाह", correct: true },
            { text: "रजिया सुल्तान", correct: false },
            { text: "बलबन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऐबक की अचानक मृत्यु के बाद, तुर्क अमीरों ने उसके अनुभवहीन पुत्र (या कुछ स्रोतों के अनुसार भाई) <b>आराम शाह</b> को गद्दी पर बैठाया।"
    },
    {
        question: "प्रश्न 10. बलबन ने किस पद को समाप्त कर दिया था?",
        answers: shuffle([
            { text: "वजीर", correct: false },
            { text: "काजी", correct: false },
            { text: "नायब-ए-मुमालिकत", correct: true },
            { text: "अमीर-ए-आखुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बलबन</b> स्वयं नायब के पद पर रहकर सुल्तान बना था और वह इस पद की शक्तियों से परिचित था।<br><br><i class='fa-solid fa-angles-right icon'></i> सुल्तान बनने के बाद उसने सुल्तान की शक्ति को सर्वोच्च बनाने के लिए इस <b>पद को ही समाप्त</b> कर दिया।"
    },
    {
        question: "प्रश्न 11. इल्तुतमिश दिल्ली का सुल्तान बनने से पहले कहाँ का सूबेदार था?",
        answers: shuffle([
            { text: "लाहौर", correct: false },
            { text: "मुल्तान", correct: false },
            { text: "बदायूँ", correct: true },
            { text: "अवध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुल्तान बनने से पूर्व <b>इल्तुतमिश</b>, जो ऐबक का दामाद और एक योग्य गुलाम था, <b>बदायूँ</b> का इक्तादार (सूबेदार) था।"
    },
    {
        question: "प्रश्न 12. 'तुर्कान-ए-चिहालगानी' (चालीस तुर्क सरदारों का दल) का गठन किसने किया था?",
        answers: shuffle([
            { text: "ऐबक", correct: false },
            { text: "बलबन", correct: false },
            { text: "रजिया", correct: false },
            { text: "इल्तुतमिश", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इल्तुतमिश</b> ने अपनी सत्ता को मजबूत करने और प्रशासन में सहायता के लिए अपने <b>40 वफादार तुर्क गुलामों</b> का एक दल बनाया।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसे <b>'तुर्कान-ए-चिहालगानी'</b> या <b>'चालीसा'</b> कहा गया।"
    },
    {
        question: "प्रश्न 13. दिल्ली को सल्तनत की राजधानी के रूप में किसने स्थापित किया?",
        answers: shuffle([
            { text: "कुतुबुद्दीन ऐबक", correct: false },
            { text: "इल्तुतमिश", correct: true },
            { text: "बलबन", correct: false },
            { text: "आराम शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इल्तुतमिश</b> ने लाहौर के स्थान पर <b>दिल्ली</b> को अपनी राजधानी बनाया।<br><br><i class='fa-solid fa-angles-right icon'></i> जो सल्तनत के अंत तक राजधानी बनी रही।"
    },
    {
        question: "प्रश्न 14. सल्तनत काल के दो महत्वपूर्ण सिक्के - चांदी का 'टका' और तांबे का 'जीतल' किसने प्रचलित किए?",
        answers: shuffle([
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "शेरशाह सूरी", correct: false },
            { text: "इल्तुतमिश", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इल्तुतमिश</b> पहला तुर्क शासक था जिसने <b>शुद्ध अरबी सिक्के</b> जारी किए।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने मुद्रा प्रणाली में सुधार करते हुए चांदी का <b>'टका'</b> और तांबे का <b>'जीतल'</b> चलाया।"
    },
    {
        question: "प्रश्न 15. किस मंगोल नेता ने इल्तुतमिश के शासनकाल में भारत पर आक्रमण का खतरा उत्पन्न किया था?",
        answers: shuffle([
            { text: "तैमूर", correct: false },
            { text: "हलाकू खान", correct: false },
            { text: "चंगेज खान", correct: true },
            { text: "कुबलई खान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ख्वारिज्म के शाह के पुत्र <b>जलालुद्दीन मंगबरनी</b> का पीछा करते हुए <b>चंगेज खान</b> सिंधु नदी तक आ पहुँचा था।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन <b>इल्तुतमिश</b> ने मंगबरनी को शरण न देकर अपनी कूटनीतिक सूझबूझ से सल्तनत को बचा लिया।"
    },
    {
        question: "प्रश्न 16. 'इक्ता प्रणाली' को एक संस्थागत रूप किसने प्रदान किया?",
        answers: shuffle([
            { text: "मुहम्मद गोरी", correct: false },
            { text: "कुतुबुद्दीन ऐबक", correct: false },
            { text: "इल्तुतमिश", correct: true },
            { text: "बलबन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि <b>इक्ता प्रणाली</b> की शुरुआत गोरी ने की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन <b>इल्तुतमिश</b> ने इसे एक व्यवस्थित प्रशासनिक और राजस्व प्रणाली के रूप में स्थापित किया।"
    },
    {
        question: "प्रश्न 17. कुतुब मीनार का निर्माण कार्य किसने पूरा करवाया था?",
        answers: shuffle([
            { text: "कुतुबुद्दीन ऐबक", correct: false },
            { text: "रजिया सुल्तान", correct: false },
            { text: "फिरोजशाह तुगलक", correct: false },
            { text: "इल्तुतमिश", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऐबक द्वारा शुरू किए गए <b>कुतुब मीनार</b> के निर्माण को <b>इल्तुतमिश</b> ने पूरा करवाया।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने इसमें तीन और मंजिलें जोड़ीं।"
    },
    {
        question: "प्रश्न 18. दिल्ली सल्तनत की पहली और एकमात्र महिला शासिका कौन थी?",
        answers: shuffle([
            { text: "चाँद बीबी", correct: false },
            { text: "नूरजहाँ", correct: false },
            { text: "रजिया सुल्तान", correct: true },
            { text: "मुमताज महल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इल्तुतमिश</b> की पुत्री <b>रजिया सुल्तान</b> 1236 से 1240 ई. तक दिल्ली की सुल्तान रही।<br><br><i class='fa-solid fa-angles-right icon'></i> जो मध्यकालीन भारत के इतिहास की एक अनूठी घटना थी।"
    },
    {
        question: "प्रश्न 19. इल्तुतमिश ने अपना उत्तराधिकारी किसे नियुक्त किया था?",
        answers: shuffle([
            { text: "अपने सबसे बड़े पुत्र को", correct: false },
            { text: "अपने सबसे छोटे पुत्र को", correct: false },
            { text: "अपनी पुत्री रजिया को", correct: true },
            { text: "बलबन को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपने पुत्रों को अयोग्य पाकर, <b>इल्तुतमिश</b> ने अपनी योग्य पुत्री <b>रजिया</b> को अपना उत्तराधिकारी नामित किया था।"
    },
    {
        question: "प्रश्न 20. रजिया सुल्तान के पतन का मुख्य कारण क्या था?",
        answers: shuffle([
            { text: "उसका महिला होना", correct: false },
            { text: "तुर्क अमीरों का षड्यंत्र और महत्वाकांक्षा", correct: true },
            { text: "मंगोलों का आक्रमण", correct: false },
            { text: "उसका अयोग्य प्रशासन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>तुर्क अमीर</b> (विशेषकर चालीसा दल) एक महिला के अधीन काम करने को तैयार नहीं थे।<br><br><i class='fa-solid fa-angles-right icon'></i> और उसकी बढ़ती शक्ति को अपनी महत्वाकांक्षाओं में बाधा मानते थे, इसलिए उन्होंने उसके खिलाफ <b>षड्यंत्र</b> किया।"
    },
    {
        question: "प्रश्न 21. रजिया ने किस अबीसीनियाई अमीर को 'अमीर-ए-आखुर' (अश्वशाला का प्रधान) नियुक्त किया था?",
        answers: shuffle([
            { text: "अल्तूनिया", correct: false },
            { text: "ऐतिगिन", correct: false },
            { text: "जमालुद्दीन याकूत", correct: true },
            { text: "कबीर खान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>रजिया</b> ने गैर-तुर्क अमीर <b>जमालुद्दीन याकूत</b> को एक उच्च पद पर नियुक्त किया।<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे तुर्क सरदार उससे और भी नाराज हो गए।"
    },
    {
        question: "प्रश्न 22. रजिया सुल्तान की हत्या कहाँ हुई थी?",
        answers: shuffle([
            { text: "दिल्ली में", correct: false },
            { text: "लाहौर में", correct: false },
            { text: "भटिंडा में", correct: false },
            { text: "कैथल (हरियाणा) के पास", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अल्तूनिया से विवाह के बाद जब रजिया दिल्ली पर पुनः अधिकार करने की कोशिश कर रही थी।<br><br><i class='fa-solid fa-angles-right icon'></i> तो <b>1240 ई. में कैथल</b> के पास डाकुओं द्वारा उसकी हत्या कर दी गई।"
    },
    {
        question: "प्रश्न 23. 'तुर्कान-ए-चिहालगानी' की शक्ति को किसने नष्ट किया?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "रजिया सुल्तान", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "गयासुद्दीन बलबन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बलबन</b> स्वयं चालीसा का सदस्य था और उसकी शक्ति और षड्यंत्रों से परिचित था।<br><br><i class='fa-solid fa-angles-right icon'></i> सुल्तान बनने के बाद, उसने सुल्तान की सत्ता को सर्वोच्च बनाने के लिए <b>चालीसा दल को पूरी तरह से नष्ट</b> कर दिया।"
    },
    {
        question: "प्रश्न 24. 'रक्त और लौह' (Blood and Iron) की नीति किस सुल्तान ने अपनाई थी?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "बलबन", correct: true },
            { text: "मुहम्मद बिन तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बलबन</b> ने विद्रोहियों, मंगोलों और आंतरिक शत्रुओं का दमन करने के लिए कठोर और निर्मम नीति अपनाई।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसे <b>'रक्त और लौह'</b> की नीति कहा जाता है।"
    },
    {
        question: "प्रश्न 25. सुल्तान की प्रतिष्ठा को बढ़ाने के लिए 'सिजदा' (घुटने टेककर सुल्तान को नमस्कार) और 'पाबोस' (सुल्तान के कदम चूमना) की प्रथा किसने शुरू की?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "बलबन", correct: true },
            { text: "फिरोजशाह तुगलक", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बलबन</b> ने दरबार में कठोर अनुशासन लागू किया और सुल्तान की गरिमा बढ़ाने के लिए इन <b>ईरानी दरबारी प्रथाओं</b> को अनिवार्य कर दिया।"
    },
    {
        question: "प्रश्न 26. बलबन ने किस ईरानी त्यौहार को अपने दरबार में मनाना प्रारंभ किया?",
        answers: shuffle([
            { text: "ईद", correct: false },
            { text: "मुहर्रम", correct: false },
            { text: "नौरोज", correct: true },
            { text: "शब-ए-बारात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपनी सत्ता को ईरानी राजत्व से जोड़ने और दरबार की शानो-शौकत बढ़ाने के लिए <b>बलबन</b> ने पारसी नववर्ष त्यौहार <b>'नौरोज'</b> को बड़ी धूमधाम से मनाना शुरू किया।"
    },
    {
        question: "प्रश्न 27. बलबन ने स्वयं को किस प्रसिद्ध ईरानी योद्धा का वंशज बताया?",
        answers: shuffle([
            { text: "रुस्तम", correct: false },
            { text: "सोहराब", correct: false },
            { text: "अफरासियाब", correct: true },
            { text: "जमशेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बलबन</b> ने अपने कुल को महान दिखाने के लिए स्वयं को फिरदौसी के <b>'शाहनामा'</b> में वर्णित प्रसिद्ध पौराणिक तुर्की योद्धा <b>अफरासियाब</b> का वंशज घोषित किया।"
    },
    {
        question: "प्रश्न 28. मंगोलों के आक्रमणों से निपटने के लिए बलबन ने किस विभाग की स्थापना की थी?",
        answers: shuffle([
            { text: "दीवान-ए-इंशा (पत्राचार विभाग)", correct: false },
            { text: "दीवान-ए-रिसालत (विदेश विभाग)", correct: false },
            { text: "दीवान-ए-अर्ज (सैन्य विभाग)", correct: true },
            { text: "दीवान-ए-वजारत (वित्त विभाग)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगोल खतरे का सामना करने के लिए <b>बलबन</b> ने सेना पर विशेष ध्यान दिया।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने <b>सैन्य विभाग 'दीवान-ए-अर्ज'</b> को पुनर्गठित किया और उसे वजीर के नियंत्रण से मुक्त कर दिया।"
    },
    {
        question: "प्रश्न 29. बलबन का वास्तविक नाम क्या था?",
        answers: shuffle([
            { text: "उलुग खान", correct: false },
            { text: "बहाउद्दीन", correct: true },
            { text: "किशलू खान", correct: false },
            { text: "शेर खान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गयासुद्दीन बलबन का मूल नाम <b>बहाउद्दीन</b> था।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>'उलुग खान'</b> की उपाधि उसे नासिरुद्दीन महमूद ने दी थी।"
    },
    {
        question: "प्रश्न 30. किस सुल्तान ने राजत्व के सिद्धांत (Theory of Kingship) का प्रतिपादन किया और स्वयं को 'नियाबत-ए-खुदाई' (ईश्वर का प्रतिनिधि) कहा?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "रजिया", correct: false },
            { text: "बलबन", correct: true },
            { text: "अलाउद्दीन खिलजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बलबन</b> ने सुल्तान के पद को दैवीय बताया और कहा कि सुल्तान पृथ्वी पर <b>ईश्वर का प्रतिनिधि ('नियाबत-ए-खुदाई')</b> और उसकी छाया ('जिल्ल-ए-इलाही') है।"
    },
    {
        question: "प्रश्न 31. बलबन का कौन सा पुत्र मंगोलों से लड़ते हुए मारा गया था?",
        answers: shuffle([
            { text: "बुगरा खान", correct: false },
            { text: "मुहम्मद खान", correct: true },
            { text: "कैकुबाद", correct: false },
            { text: "कयुमर्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बलबन का सबसे योग्य और प्रिय पुत्र, <b>शहजादा मुहम्मद</b>, 1286 ई. में उत्तर-पश्चिमी सीमा पर <b>मंगोलों से युद्ध करते हुए मारा गया</b>।<br><br><i class='fa-solid fa-angles-right icon'></i> इस सदमे से बलबन कभी उबर नहीं पाया।"
    },
    {
        question: "प्रश्न 32. गुलाम वंश का अंतिम शासक कौन था?",
        answers: shuffle([
            { text: "कैकुबाद", correct: false },
            { text: "बलबन", correct: false },
            { text: "नासिरुद्दीन महमूद", correct: false },
            { text: "शम्सुद्दीन कयुमर्स", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैकुबाद के बाद उसके अल्पायु पुत्र <b>शम्सुद्दीन कयुमर्स</b> को गद्दी पर बैठाया गया।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसकी हत्या करके <b>जलालुद्दीन खिलजी</b> ने खिलजी वंश की स्थापना की।"
    },
    {
        question: "प्रश्न 33. किस सुल्तान के बारे में कहा जाता है कि वह टोपी सिलकर और कुरान की नकल करके अपना जीवन यापन करता था?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "बलबन", correct: false },
            { text: "नासिरुद्दीन महमूद", correct: true },
            { text: "कुतुबुद्दीन ऐबक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>नासिरुद्दीन महमूद</b> एक बहुत ही सादा और धार्मिक प्रवृत्ति का शासक था।<br><br><i class='fa-solid fa-angles-right icon'></i> मिनहाज-उस-सिराज के अनुसार, वह कुरान की आयतें लिखकर और <b>टोपी सिलकर</b> अपनी आजीविका चलाता था।"
    },
    {
        question: "प्रश्न 34. 'तबकात-ए-नासिरी' का लेखक मिनहाज-उस-सिराज किस सुल्तान का समकालीन था?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "इल्तुतमिश और नासिरुद्दीन महमूद", correct: true },
            { text: "मुहम्मद बिन तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मिनहाज-उस-सिराज</b> ने इल्तुतमिश के समय से लिखना शुरू किया।<br><br><i class='fa-solid fa-angles-right icon'></i> और अपना प्रसिद्ध ग्रंथ <b>'तबकात-ए-नासिरी'</b> सुल्तान <b>नासिरुद्दीन महमूद</b> को समर्पित किया।"
    },
    {
        question: "प्रश्न 35. बलबन ने अपनी गुप्तचर प्रणाली को मजबूत करने के लिए जासूसों को क्या कहा?",
        answers: shuffle([
            { text: "मुंशी", correct: false },
            { text: "काजी", correct: false },
            { text: "बरीद", correct: true },
            { text: "अमीर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बलबन</b> ने एक कुशल गुप्तचर विभाग की स्थापना की।<br><br><i class='fa-solid fa-angles-right icon'></i> गुप्तचर अधिकारियों को <b>'बरीद'</b> और विभाग के प्रमुख को <b>'बरीद-ए-मुमालिक'</b> कहा जाता था।"
    },
    {
        question: "प्रश्न 36. इल्तुतमिश ने बिहार में अपना पहला सूबेदार किसे नियुक्त किया था?",
        answers: shuffle([
            { text: "ऐबक", correct: false },
            { text: "नासिरुद्दीन महमूद", correct: false },
            { text: "मलिक जानी", correct: true },
            { text: "तुगान खान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बंगाल के शासक गयासुद्दीन को हराने के बाद, <b>इल्तुतमिश</b> ने बिहार शरीफ और बाढ़ पर अधिकार कर <b>मलिक अलाउद्दीन जानी</b> को वहाँ का सूबेदार नियुक्त किया।"
    },
    {
        question: "प्रश्न 37. इल्तुतमिश का मकबरा कहाँ स्थित है?",
        answers: shuffle([
            { text: "लाहौर में", correct: false },
            { text: "दिल्ली में कुतुब मीनार परिसर में", correct: true },
            { text: "अजमेर में", correct: false },
            { text: "आगरा में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इल्तुतमिश</b> का सुंदर मकबरा <b>दिल्ली के महरौली में कुतुब मीनार परिसर</b> के भीतर <b>'कुव्वत-उल-इस्लाम'</b> मस्जिद के पास स्थित है।"
    },
    {
        question: "प्रश्न 38. रजिया के विरुद्ध विद्रोह करने वाले भटिंडा (तबरहिन्द) के इक्तादार का क्या नाम था?",
        answers: shuffle([
            { text: "कबीर खान", correct: false },
            { text: "अल्तूनिया", correct: true },
            { text: "याकूत", correct: false },
            { text: "ऐतिगिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मलिक इख्तियारुद्दीन <b>अल्तूनिया</b>, जो <b>भटिंडा</b> का गवर्नर था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने तुर्क सरदारों के साथ मिलकर <b>रजिया के खिलाफ</b> पहला बड़ा विद्रोह किया था।"
    },
    {
        question: "प्रश्न 39. बलबन के राजत्व सिद्धांत का आधार क्या था?",
        answers: shuffle([
            { text: "शक्ति, प्रतिष्ठा और न्याय", correct: true },
            { text: "उदारता और क्षमा", correct: false },
            { text: "समानता और भाईचारा", correct: false },
            { text: "धर्मनिरपेक्षता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बलबन</b> का मानना था कि सुल्तान का पद सर्वोच्च है।<br><br><i class='fa-solid fa-angles-right icon'></i> और उसकी प्रतिष्ठा बनाए रखने के लिए <b>शक्ति का प्रदर्शन, दरबार में कठोर अनुशासन और निष्पक्ष (लेकिन कठोर) न्याय</b> आवश्यक है।"
    },
    {
        question: "प्रश्न 40. गुलाम वंश के शासकों की उत्पत्ति कहाँ से हुई थी?",
        answers: shuffle([
            { text: "अरब", correct: false },
            { text: "फारस (ईरान)", correct: false },
            { text: "तुर्किस्तान (मध्य एशिया)", correct: true },
            { text: "अफगानिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुलाम वंश के सभी प्रमुख शासक जैसे ऐबक, इल्तुतमिश और बलबन <b>मध्य एशिया के तुर्क कबीलों</b> (इल्बारी, शम्सी) से संबंधित थे।"
    },
    {
        question: "प्रश्न 41. इल्तुतमिश ने किसे हराकर बंगाल और बिहार पर पुनः अधिकार किया था?",
        answers: shuffle([
            { text: "आराम शाह", correct: false },
            { text: "गयासुद्दीन इवाज खिलजी", correct: true },
            { text: "अली मर्दान खिलजी", correct: false },
            { text: "कुबाचा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बख्तियार खिलजी की मृत्यु के बाद बंगाल स्वतंत्र हो गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>इल्तुतमिश</b> ने 1225 ई. में वहाँ के शासक <b>गयासुद्दीन इवाज खिलजी</b> को पराजित कर बंगाल को फिर से दिल्ली के अधीन किया।"
    },
    {
        question: "प्रश्न 42. बलबन ने मेवाती डाकुओं का दमन करने के लिए क्या कदम उठाए?",
        answers: shuffle([
            { text: "उसने उनसे संधि कर ली", correct: false },
            { text: "उसने दिल्ली के आसपास के जंगलों को कटवा दिया और वहाँ सैन्य चौकियाँ स्थापित कीं", correct: true },
            { text: "उसने उन्हें सेना में भर्ती कर लिया", correct: false },
            { text: "उसने उन पर भारी कर लगा दिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बलबन</b> ने दिल्ली और दोआब क्षेत्र में कानून-व्यवस्था स्थापित करने के लिए मेवाती डाकुओं का क्रूरतापूर्वक दमन किया।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने <b>जंगलों को साफ करवाया</b> और महत्वपूर्ण मार्गों पर <b>किलों का निर्माण</b> किया।"
    },
    {
        question: "प्रश्न 43. 'सुल्तान गढ़ी' का मकबरा किसने बनवाया था?",
        answers: shuffle([
            { text: "रजिया सुल्तान", correct: false },
            { text: "बलबन", correct: false },
            { text: "कुतुबुद्दीन ऐबक", correct: false },
            { text: "इल्तुतमिश", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इल्तुतमिश</b> ने अपने सबसे बड़े पुत्र <b>नासिरुद्दीन महमूद</b> (जो बंगाल का गवर्नर था और वहीं उसकी मृत्यु हो गई थी) की याद में दिल्ली में <b>'सुल्तान गढ़ी'</b> का मकबरा बनवाया।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत का <b>पहला इस्लामी मकबरा</b> माना जाता है।"
    },
    {
        question: "प्रश्न 44. किस सुल्तान के शासनकाल में अमीर खुसरो और अमीर हसन देहलवी ने अपना साहित्यिक जीवन प्रारंभ किया?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "रजिया", correct: false },
            { text: "बलबन", correct: true },
            { text: "अलाउद्दीन खिलजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महान कवि और संगीतकार <b>अमीर खुसरो</b> ने अपना साहित्यिक जीवन <b>बलबन के पुत्र शहजादा मुहम्मद</b> के संरक्षण में शुरू किया था।"
    },
    {
        question: "प्रश्न 45. आराम शाह ने कितने महीने शासन किया?",
        answers: shuffle([
            { text: "दो वर्ष", correct: false },
            { text: "एक वर्ष", correct: false },
            { text: "लगभग आठ महीने", correct: true },
            { text: "चार वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>आराम शाह</b> एक अयोग्य शासक था, जिसे दिल्ली के तुर्क सरदारों ने स्वीकार नहीं किया।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने केवल <b>आठ महीने</b> तक शासन किया, जिसके बाद <b>इल्तुतमिश</b> ने उसे पराजित कर दिया।"
    },
    {
        question: "प्रश्न 46. रजिया ने पुरुषों की तरह कौन से वस्त्र पहनकर दरबार में आना शुरू किया?",
        answers: shuffle([
            { text: "बुर्का और हिजाब", correct: false },
            { text: "साड़ी", correct: false },
            { text: "काबा (कुर्ता) और कुलाह (टोपी)", correct: true },
            { text: "सलवार कमीज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>रजिया</b> ने पर्दा प्रथा त्याग दी और पुरुषों की तरह <b>कुर्ता (काबा) और टोपी (कुलाह)</b> पहनकर खुले मुँह दरबार में बैठने और सेना का नेतृत्व करने लगी।<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे रूढ़िवादी अमीर नाराज हो गए।"
    },
    {
        question: "प्रश्न 47. बलबन ने अपने किस प्रतिद्वंद्वी तुर्क सरदार को जहर देकर मरवा दिया था?",
        answers: shuffle([
            { text: "इमादुद्दीन रैहान", correct: false },
            { text: "शेर खान सुन्कर", correct: true },
            { text: "किशलू खान", correct: false },
            { text: "तुगरिल बेग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बलबन</b> ने अपनी सत्ता को चुनौती देने वाले शक्तिशाली सरदारों को एक-एक करके खत्म कर दिया।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने अपने चचेरे भाई <b>शेर खान सुन्कर</b> को, जो एक योग्य सेनापति था, <b>जहर देकर मरवा</b> दिया।"
    },
    {
        question: "प्रश्न 48. बलबन के काल में बंगाल में किसने विद्रोह किया था, जिसे उसने क्रूरतापूर्वक दबा दिया?",
        answers: shuffle([
            { text: "अली मर्दान", correct: false },
            { text: "ताजुद्दीन यिल्दिज", correct: false },
            { text: "तुगरिल बेग", correct: true },
            { text: "कबीर खान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बंगाल के सूबेदार <b>तुगरिल बेग</b> ने बलबन की वृद्धावस्था का लाभ उठाकर विद्रोह कर दिया।<br><br><i class='fa-solid fa-angles-right icon'></i> बलबन ने स्वयं जाकर इस विद्रोह का दमन किया और तुगरिल बेग तथा उसके समर्थकों को <b>सार्वजनिक रूप से मृत्युदंड</b> दिया।"
    },
    {
        question: "प्रश्न 49. कुतुबुद्दीन ऐबक किसका गुलाम था?",
        answers: shuffle([
            { text: "महमूद गजनवी", correct: false },
            { text: "चंगेज खान", correct: false },
            { text: "मुहम्मद गोरी", correct: true },
            { text: "तैमूर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कुतुबुद्दीन ऐबक</b> मूल रूप से <b>मुहम्मद गोरी</b> का एक तुर्क गुलाम था।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसने अपनी योग्यता से सेनापति और फिर सुल्तान का पद प्राप्त किया।"
    },
    {
        question: "प्रश्न 50. इल्तुतमिश किस तुर्क कबीले से संबंधित था?",
        answers: shuffle([
            { text: "अफरासियाब", correct: false },
            { text: "खिलजी", correct: false },
            { text: "इल्बारी", correct: true },
            { text: "करलुग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इल्तुतमिश</b> मध्य एशिया के <b>इल्बारी तुर्क कबीले</b> का था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसीलिए उसके वंश को कभी-कभी 'इल्बारी वंश' भी कहा जाता है।"
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