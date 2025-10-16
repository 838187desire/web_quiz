const questions = [
    {
        topHeading: "बहमनी राज्य पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'अष्टकोणीय मकबरे' किस सल्तनत की वास्तुकला में लोकप्रिय थे?",
        answers: shuffle([
            { text: "दिल्ली सल्तनत", correct: false },
            { text: "बंगाल सल्तनत", correct: false },
            { text: "दक्कन सल्तनत", correct: true },
            { text: "गुजरात सल्तनत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बहमनी</b> और उसकी उत्तराधिकारी सल्तनतों ने, विशेषकर <b>बीदर और गोलकुंडा</b> में, <b>अष्टकोणीय (आठ कोनों वाले) मकबरों</b> का निर्माण करवाया।"
    },
    {
        question: "प्रश्न 2. बहमनी सल्तनत का संस्थापक कौन था?",
        answers: shuffle([
            { text: "मुहम्मद शाह प्रथम", correct: false },
            { text: "फिरोज शाह बहमनी", correct: false },
            { text: "अलाउद्दीन हसन बहमन शाह", correct: true },
            { text: "महमूद गवाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका संस्थापक <b>जफर खान</b> था, जो <b>1347 ई.</b> में '<b>अलाउद्दीन हसन बहमन शाह</b>' की उपाधि के साथ सिंहासन पर बैठा।"
    },
    {
        question: "प्रश्न 3. बहमनी सल्तनत की स्थापना के समय दिल्ली सल्तनत का सुल्तान कौन था?",
        answers: shuffle([
            { text: "फिरोज शाह तुगलक", correct: false },
            { text: "ग्यासुद्दीन तुगलक", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: true },
            { text: "अलाउद्दीन खिलजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बहमनी राज्य का उदय <b>मुहम्मद बिन तुगलक</b> की कमजोर नीतियों और <b>दक्कन</b> में उसके खिलाफ हुए सफल विद्रोह के परिणामस्वरूप हुआ।"
    },
    {
        question: "प्रश्न 4. अलाउद्दीन हसन बहमन शाह ने स्वयं को किस पौराणिक फारसी नायक का वंशज घोषित किया?",
        answers: shuffle([
            { text: "अफरासियाब", correct: false },
            { text: "रुस्तम", correct: false },
            { text: "बहमन", correct: true },
            { text: "जमशेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उसने अपनी legitimization के लिए स्वयं को फारस के प्रसिद्ध नायक इस्फ़न्दियार के पुत्र '<b>बहमन</b>' का <b>वंशज</b> बताया और इसी कारण वंश का नाम '<b>बहमनी</b>' पड़ा।"
    },
    {
        question: "प्रश्न 5. बहमनी सल्तनत की पहली राजधानी क्या थी?",
        answers: shuffle([
            { text: "बीदर", correct: false },
            { text: "दौलताबाद", correct: false },
            { text: "गुलबर्गा (अहसानाबाद)", correct: true },
            { text: "गोलकुंडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अलाउद्दीन हसन बहमन शाह</b> ने <b>गुलबर्गा</b> को अपनी राजधानी बनाया और उसका नाम '<b>अहसानाबाद</b>' रखा।"
    },
    {
        question: "प्रश्न 6. किस बहमनी सुल्तान ने पहली बार अपने साम्राज्य को चार प्रांतों या 'तरफों' में विभाजित किया?",
        answers: shuffle([
            { text: "मुहम्मद शाह प्रथम", correct: true },
            { text: "अलाउद्दीन हसन बहमन शाह", correct: false },
            { text: "ताजुद्दीन फिरोज शाह", correct: false },
            { text: "अहमद शाह प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रशासनिक सुविधा के लिए, <b>मुहम्मद शाह प्रथम</b> ने अपने साम्राज्य को <b>गुलबर्गा, दौलताबाद, बीदर और बरार</b> नामक चार प्रांतों में बाँटा, जिनके प्रमुख को '<b>तरफदार</b>' कहा जाता था।"
    },
    {
        question: "प्रश्न 7. बहमनी सल्तनत में पहली बार बारूद का प्रयोग किस शासक के विरुद्ध किया गया था?",
        answers: shuffle([
            { text: "वारंगल के शासक", correct: false },
            { text: "विजयनगर के शासक बुक्का प्रथम", correct: true },
            { text: "खानदेश के शासक", correct: false },
            { text: "मालवा के सुल्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मुहम्मद शाह प्रथम</b> ने <b>1367 ई.</b> में <b>विजयनगर के शासक बुक्का प्रथम</b> के खिलाफ युद्ध में <b>पहली बार तोपखाने और बारूद</b> का प्रयोग किया।"
    },
    {
        question: "प्रश्न 8. 'अमीर-ए-सदगान' (सौ गाँवों का प्रमुख) नामक व्यवस्था किस शासक ने शुरू की थी?",
        answers: shuffle([
            { text: "अलाउद्दीन बहमन शाह", correct: false },
            { text: "मुहम्मद शाह प्रथम", correct: true },
            { text: "मुहम्मद शाह द्वितीय", correct: false },
            { text: "फिरोज शाह बहमनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक <b>प्रशासनिक और सैन्य व्यवस्था</b> थी जिसका उद्देश्य <b>स्थानीय स्तर पर नियंत्रण</b> बनाए रखना था।"
    },
    {
        question: "प्रश्न 9. किस बहमनी सुल्तान को उसकी शांतिप्रिय नीतियों और विद्या को संरक्षण देने के कारण 'दूसरा अरस्तू' भी कहा जाता था?",
        answers: shuffle([
            { text: "मुहम्मद शाह प्रथम", correct: false },
            { text: "ताजुद्दीन फिरोज शाह", correct: false },
            { text: "मुहम्मद शाह द्वितीय", correct: true },
            { text: "हुमायूँ शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मुहम्मद शाह द्वितीय</b> का शासनकाल <b>शांतिपूर्ण</b> रहा और उसने विद्वानों, कवियों को <b>संरक्षण</b> दिया तथा साम्राज्य में कई <b>मदरसे और अस्पताल</b> बनवाए।"
    },
    {
        question: "प्रश्न 10. प्रसिद्ध ईरानी कवि 'हाफिज' को किस बहमनी सुल्तान ने अपने दरबार में आमंत्रित किया था, लेकिन वह नहीं आ सका?",
        answers: shuffle([
            { text: "अलाउद्दीन बहमन शाह", correct: false },
            { text: "मुहम्मद शाह प्रथम", correct: false },
            { text: "मुहम्मद शाह द्वितीय", correct: true },
            { text: "दाऊद शाह प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मुहम्मद शाह द्वितीय</b> ने <b>शिराज के महान कवि हाफिज</b> को आमंत्रित किया था, लेकिन समुद्री यात्रा के डर से हाफिज ने अपनी यात्रा रद्द कर दी।"
    },
    {
        question: "प्रश्न 11. बहमनी सल्तनत का सबसे विद्वान सुल्तान कौन था, जो खगोल विज्ञान का ज्ञाता था और कई भाषाएँ जानता था?",
        answers: shuffle([
            { text: "अहमद शाह प्रथम", correct: false },
            { text: "ताजुद्दीन फिरोज शाह", correct: true },
            { text: "मुहम्मद शाह तृतीय", correct: false },
            { text: "महमूद शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>फिरोज शाह</b> एक <b>बहुमुखी प्रतिभा</b> का धनी शासक था।<br><br><i class='fa-solid fa-angles-right icon'></i> वह <b>कुरान का ज्ञाता, तर्कशास्त्र, दर्शन</b> और कई भाषाओं का जानकार था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने <b>दौलताबाद</b> में एक <b>वेधशाला</b> भी बनवाई थी।"
    },
    {
        question: "प्रश्न 12. किस बहमनी सुल्तान ने विजयनगर के शासक देवराय प्रथम को 'सोनार की बेटी' का विवाह उससे करने के लिए विवश किया था?",
        answers: shuffle([
            { text: "मुहम्मद शाह प्रथम", correct: false },
            { text: "ताजुद्दीन फिरोज शाह", correct: true },
            { text: "अहमद शाह प्रथम", correct: false },
            { text: "अलाउद्दीन अहमद द्वितीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>फिरोज शाह</b> ने <b>देवराय प्रथम</b> को एक युद्ध में हराया और संधि की शर्तों के तहत देवराय प्रथम को अपनी पुत्री का विवाह सुल्तान से करना पड़ा तथा <b>बांकापुर</b> का क्षेत्र दहेज में देना पड़ा।"
    },
    {
        question: "प्रश्न 13. किस बहमनी शासक ने अपनी राजधानी गुलबर्गा से बीदर स्थानांतरित की?",
        answers: shuffle([
            { text: "ताजुद्दीन फिरोज शाह", correct: false },
            { text: "अहमद शाह प्रथम", correct: true },
            { text: "अलाउद्दीन अहमद द्वितीय", correct: false },
            { text: "हुमायूँ शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अहमद शाह प्रथम</b> ने <b>1425 ई.</b> के आसपास राजधानी को <b>गुलबर्गा से बीदर</b> स्थानांतरित किया, जो <b>रणनीतिक रूप से अधिक सुरक्षित</b> और बेहतर जलवायु वाला स्थान था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने बीदर का नाम '<b>मुहम्मदाबाद</b>' रखा।"
    },
    {
        question: "प्रश्न 14. किस बहमनी शासक को 'वली' (संत) के रूप में भी जाना जाता है?",
        answers: shuffle([
            { text: "फिरोज शाह बहमनी", correct: false },
            { text: "अहमद शाह प्रथम", correct: true },
            { text: "महमूद गवाँ", correct: false },
            { text: "अलाउद्दीन बहमन शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अहमद शाह</b> सूफी संत <b>गेसूदराज</b> के प्रति अपनी गहरी श्रद्धा और अपनी धार्मिकता के कारण '<b>अहमद शाह वली</b>' के नाम से प्रसिद्ध हुआ।"
    },
    {
        question: "प्रश्न 15. बहमनी सल्तनत में 'अफाकी' और 'दक्कनी' गुटों के बीच संघर्ष किसके शासनकाल में शुरू हुआ?",
        answers: shuffle([
            { text: "मुहम्मद शाह प्रथम", correct: false },
            { text: "फिरोज शाह बहमनी", correct: false },
            { text: "अहमद शाह प्रथम", correct: true },
            { text: "हुमायूँ शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अहमद शाह</b> के समय में बड़ी संख्या में <b>विदेशी (ईरानी, तुर्की, अरबी) अमीर</b> आकर बसे, जिन्हें '<b>अफाकी</b>' या '<b>परदेसी</b>' कहा गया।<br><br><i class='fa-solid fa-angles-right icon'></i> इससे पुराने स्थानीय अमीरों ('<b>दक्कनी</b>') और अफाकियों के बीच <b>सत्ता के लिए संघर्ष</b> शुरू हो गया।"
    },
    {
        question: "प्रश्न 16. किस बहमनी सुल्तान को उसकी क्रूरता के कारण 'जालिम' कहा जाता था?",
        answers: shuffle([
            { text: "अलाउद्दीन अहमद द्वितीय", correct: false },
            { text: "हुमायूँ शाह बहमनी", correct: true },
            { text: "निजाम शाह", correct: false },
            { text: "मुहम्मद शाह तृतीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>हुमायूँ शाह</b> एक <b>अत्यंत क्रूर और निर्दयी शासक</b> था, जो छोटी-छोटी गलतियों के लिए भी <b>भयानक दंड</b> देता था।<br><br><i class='fa-solid fa-angles-right icon'></i> इतिहासकार उसे '<b>दक्कन का नीरो</b>' भी कहते हैं।"
    },
    {
        question: "प्रश्न 17. बहमनी सल्तनत का प्रधानमंत्री 'महमूद गवाँ' मूल रूप से कहाँ का निवासी था?",
        answers: shuffle([
            { text: "तुर्की", correct: false },
            { text: "अरब", correct: false },
            { text: "फारस (ईरान)", correct: true },
            { text: "मिस्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>महमूद गवाँ फारस</b> के 'गावान' गाँव का एक व्यापारी था, जो <b>हुमायूँ शाह</b> के समय बहमनी सल्तनत आया और अपनी योग्यता के बल पर <b>प्रधानमंत्री (वकील-उस-सल्तनत)</b> के पद तक पहुँचा।"
    },
    {
        question: "प्रश्न 18. महमूद गवाँ ने किस बहमनी सुल्तान के शासनकाल में प्रधानमंत्री के रूप में सेवा की?",
        answers: shuffle([
            { text: "हुमायूँ शाह", correct: false },
            { text: "निजाम शाह", correct: false },
            { text: "मुहम्मद शाह तृतीय", correct: true },
            { text: "महमूद शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>महमूद गवाँ</b> ने मुख्य रूप से <b>मुहम्मद शाह तृतीय</b> के शासनकाल के दौरान लगभग <b>25 वर्षों</b> तक अपनी सेवाएँ दीं और बहमनी सल्तनत को उसकी <b>शक्ति के चरम</b> पर पहुँचाया।"
    },
    {
        question: "प्रश्न 19. बीदर में एक भव्य मदरसे (महाविद्यालय) का निर्माण किसने करवाया था?",
        answers: shuffle([
            { text: "अहमद शाह प्रथम", correct: false },
            { text: "अलाउद्दीन अहमद द्वितीय", correct: false },
            { text: "मुहम्मद शाह तृतीय", correct: false },
            { text: "महमूद गवाँ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>महमूद गवाँ</b> ने <b>बीदर</b> में एक शानदार <b>मदरसे</b> की स्थापना की, जिसमें एक <b>विशाल पुस्तकालय</b> था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह इमारत <b>फारसी वास्तुकला</b> का एक उत्कृष्ट उदाहरण है।"
    },
    {
        question: "प्रश्न 20. महमूद गवाँ ने प्रांतों (तरफों) की संख्या चार से बढ़ाकर कितनी कर दी थी?",
        answers: shuffle([
            { text: "छः", correct: false },
            { text: "आठ", correct: true },
            { text: "दस", correct: false },
            { text: "बारह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>तरफदारों</b> की शक्ति को कम करने और <b>प्रशासन को सुचारु</b> बनाने के लिए, <b>महमूद गवाँ</b> ने प्रत्येक चार पुराने प्रांतों को दो-दो भागों में बाँटकर कुल <b>आठ प्रांत</b> बना दिए।"
    },
    {
        question: "प्रश्न 21. महमूद गवाँ द्वारा किए गए सैन्य सुधारों में क्या शामिल था?",
        answers: shuffle([
            { text: "स्थायी सेना का गठन", correct: false },
            { text: "केवल तरफदारों को सेना रखने का अधिकार देना", correct: false },
            { text: "मनसबदारी प्रथा की शुरुआत", correct: false },
            { text: "प्रत्येक अमीर के लिए निश्चित संख्या में सैनिक रखना अनिवार्य करना", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उसने यह नियम बनाया कि प्रत्येक <b>अमीर</b> को उसकी जागीर के अनुसार एक <b>निश्चित संख्या में सैनिक</b> रखने होंगे, जिनका निरीक्षण <b>केंद्र</b> द्वारा किया जाएगा।"
    },
    {
        question: "प्रश्न 22. बहमनी सल्तनत का पश्चिमी तट पर सबसे महत्वपूर्ण बंदरगाह कौन सा था, जिस पर महमूद गवाँ ने अधिकार किया था?",
        answers: shuffle([
            { text: "कालीकट", correct: false },
            { text: "सूरत", correct: false },
            { text: "गोवा", correct: true },
            { text: "दाभोल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1472 ई.</b> में, <b>महमूद गवाँ</b> ने <b>विजयनगर साम्राज्य</b> से <b>गोवा</b> का महत्वपूर्ण <b>बंदरगाह</b> छीन लिया, जिससे बहमनी सल्तनत का <b>समुद्री व्यापार</b> बढ़ा।"
    },
    {
        question: "प्रश्न 23. महमूद गवाँ की मृत्यु का क्या कारण था?",
        answers: shuffle([
            { text: "युद्ध में मृत्यु", correct: false },
            { text: "प्राकृतिक मृत्यु", correct: false },
            { text: "दक्कनी सरदारों के षड्यंत्र के कारण सुल्तान द्वारा मृत्युदंड", correct: true },
            { text: "विजयनगर के एजेंटों द्वारा हत्या", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>दक्कनी अमीरों</b> ने <b>महमूद गवाँ (जो एक अफाकी था)</b> के खिलाफ एक <b>जाली पत्र</b> तैयार कर सुल्तान <b>मुहम्मद शाह तृतीय</b> को भड़काया।<br><br><i class='fa-solid fa-angles-right icon'></i> सुल्तान ने बिना जांच किए <b>1481 ई.</b> में उसे <b>मृत्युदंड</b> दे दिया।"
    },
    {
        question: "प्रश्न 24. \"एक निर्दोष वृद्ध की हत्या\" से बहमनी सल्तनत का पतन शुरू हुआ। यह किस घटना को संदर्भित करता है?",
        answers: shuffle([
            { text: "हुमायूँ शाह की मृत्यु", correct: false },
            { text: "अहमद शाह की मृत्यु", correct: false },
            { text: "महमूद गवाँ का वध", correct: true },
            { text: "अलाउद्दीन बहमन शाह की मृत्यु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>महमूद गवाँ की मृत्यु</b> बहमनी सल्तनत के लिए एक <b>घातक आघात</b> थी।<br><br><i class='fa-solid fa-angles-right icon'></i> उसकी मृत्यु के बाद <b>अफाकी-दक्कनी संघर्ष</b> चरम पर पहुँच गया और सल्तनत का <b>विघटन</b> शुरू हो गया।"
    },
    {
        question: "प्रश्न 25. बहमनी सल्तनत का अंतिम शासक कौन था?",
        answers: shuffle([
            { text: "मुहम्मद शाह तृतीय", correct: false },
            { text: "महमूद शाह", correct: false },
            { text: "अहमद शाह द्वितीय", correct: false },
            { text: "कलीमुल्लाह शाह", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कलीमुल्लाह शाह</b> बहमनी वंश का <b>अंतिम सुल्तान</b> था, जो केवल <b>नाममात्र</b> का शासक था और उसकी मृत्यु के साथ ही <b>1527 ई.</b> में बहमनी सल्तनत का <b>औपचारिक अंत</b> हो गया।"
    },
    {
        question: "प्रश्न 26. बहमनी सल्तनत के विघटन के परिणामस्वरूप कुल कितने स्वतंत्र राज्यों का उदय हुआ?",
        answers: shuffle([
            { text: "तीन", correct: false },
            { text: "चार", correct: false },
            { text: "पाँच", correct: true },
            { text: "छः", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बहमनी साम्राज्य के खंडहरों पर <b>पाँच स्वतंत्र सल्तनतों</b> का उदय हुआ: <b>बीजापुर, अहमदनगर, गोलकुंडा, बीदर और बरार</b>।"
    },
    {
        question: "प्रश्न 27. बहमनी साम्राज्य से स्वतंत्र होने वाला पहला राज्य कौन सा था?",
        answers: shuffle([
            { text: "बीजापुर", correct: false },
            { text: "बरार", correct: true },
            { text: "अहमदनगर", correct: false },
            { text: "गोलकुंडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1490 ई.</b> में, <b>फतह उल्लाह इमाद शाह</b> ने <b>बरार</b> में <b>इमादशाही वंश</b> की स्थापना कर स्वयं को <b>स्वतंत्र</b> घोषित कर दिया।"
    },
    {
        question: "प्रश्न 28. बीजापुर में किस राजवंश ने शासन किया?",
        answers: shuffle([
            { text: "आदिलशाही वंश", correct: true },
            { text: "निजामशाही वंश", correct: false },
            { text: "कुतुबशाही वंश", correct: false },
            { text: "बरीदशाही वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>यूसुफ आदिल खान</b> ने <b>1489-90 ई.</b> में <b>बीजापुर</b> में <b>आदिलशाही वंश</b> की स्थापना की।"
    },
    {
        question: "प्रश्न 29. प्रसिद्ध 'गोल गुम्बज' कहाँ स्थित है?",
        answers: shuffle([
            { text: "अहमदनगर", correct: false },
            { text: "गोलकुंडा", correct: false },
            { text: "बीदर", correct: false },
            { text: "बीजापुर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>गोल गुम्बज बीजापुर</b> के सुल्तान <b>मुहम्मद आदिल शाह</b> का <b>मकबरा</b> है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अपने <b>विशाल गुंबद</b> के लिए प्रसिद्ध है, जो दुनिया के सबसे बड़े गुंबदों में से एक है।"
    },
    {
        question: "प्रश्न 30. अहमदनगर की स्थापना किसने की थी?",
        answers: shuffle([
            { text: "यूसुफ आदिल खान", correct: false },
            { text: "मलिक अहमद बहलोल", correct: true },
            { text: "कुली कुतुब शाह", correct: false },
            { text: "अमीर अली बरीद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मलिक अहमद</b> ने <b>1490 ई.</b> में <b>निजामशाही वंश</b> की स्थापना की और <b>अहमदनगर</b> शहर बसाया।"
    },
    {
        question: "प्रश्न 31. प्रसिद्ध 'चाँद बीबी' कहाँ की शासिका थीं, जिन्होंने मुगलों का सामना किया?",
        answers: shuffle([
            { text: "बीजापुर", correct: false },
            { text: "गोलकुंडा", correct: false },
            { text: "अहमदनगर", correct: true },
            { text: "बीदर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>चाँद बीबी</b>, <b>अहमदनगर के सुल्तान</b> की पुत्री और <b>बीजापुर की रानी</b> थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने अपने भतीजे <b>बहादुर निजाम शाह</b> की संरक्षिका के रूप में <b>अकबर की मुगल सेना</b> का <b>वीरतापूर्वक सामना</b> किया।"
    },
    {
        question: "प्रश्न 32. गोलकुंडा में किस राजवंश की स्थापना हुई?",
        answers: shuffle([
            { text: "आदिलशाही", correct: false },
            { text: "निजामशाही", correct: false },
            { text: "कुतुबशाही", correct: true },
            { text: "इमादशाही", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>सुल्तान कुली कुतुब शाह</b> ने <b>1512 ई. (या 1518 ई.)</b> में <b>गोलकुंडा</b> में <b>कुतुबशाही वंश</b> की स्थापना की।"
    },
    {
        question: "प्रश्न 33. प्रसिद्ध 'चारमीनार' का निर्माण किसने करवाया था?",
        answers: shuffle([
            { text: "इब्राहिम कुतुब शाह", correct: false },
            { text: "मुहम्मद कुली कुतुब शाह", correct: true },
            { text: "अब्दुल्ला कुतुब शाह", correct: false },
            { text: "अबुल हसन तानशाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मुहम्मद कुली कुतुब शाह</b> ने अपनी नई राजधानी <b>हैदराबाद</b> में <b>1591 ई.</b> में <b>प्लेग की समाप्ति</b> के उपलक्ष्य में <b>चारमीनार</b> का निर्माण करवाया।"
    },
    {
        question: "प्रश्न 34. बीदर में बरीदशाही वंश की स्थापना किसने की?",
        answers: shuffle([
            { text: "कासिम बरीद", correct: false },
            { text: "अमीर अली बरीद", correct: true },
            { text: "इब्राहिम बरीद", correct: false },
            { text: "अली बरीद शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि शक्ति <b>कासिम बरीद</b> के समय से ही <b>बरीद परिवार</b> के पास थी, लेकिन उसके पुत्र <b>अमीर अली बरीद</b> ने <b>1528 ई.</b> में <b>औपचारिक रूप</b> से <b>बरीदशाही वंश</b> की स्थापना की।"
    },
    {
        question: "प्रश्न 35. 'दक्कन की लोमड़ी' (Deccan Fox) किसे कहा जाता था?",
        answers: shuffle([
            { text: "महमूद गवाँ", correct: false },
            { text: "यूसुफ आदिल खान", correct: false },
            { text: "अमीर अली बरीद", correct: true },
            { text: "मलिक अम्बर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अमीर अली बरीद</b> अपनी <b>चालाक और षड्यंत्रकारी कूटनीति</b> के लिए जाना जाता था, इसलिए उसे '<b>दक्कन की लोमड़ी</b>' कहा जाता था।"
    },
    {
        question: "प्रश्न 36. बरार में इमादशाही वंश की स्थापना किसने की थी?",
        answers: shuffle([
            { text: "फतह उल्लाह इमाद शाह", correct: true },
            { text: "अलाउद्दीन इमाद शाह", correct: false },
            { text: "दरिया इमाद शाह", correct: false },
            { text: "बुरहान इमाद शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>फतह उल्लाह इमाद शाह</b>, जो मूल रूप से एक <b>कन्नड़ हिंदू</b> था, ने <b>1490 ई.</b> में <b>बरार</b> को <b>स्वतंत्र</b> घोषित किया।"
    },
    {
        question: "प्रश्न 37. किस दक्कन सल्तनत को अहमदनगर ने अपने राज्य में मिला लिया था?",
        answers: shuffle([
            { text: "बीदर", correct: false },
            { text: "गोलकुंडा", correct: false },
            { text: "बरार", correct: true },
            { text: "बीजापुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1574 ई.</b> में, <b>अहमदनगर के सुल्तान मुर्तजा निजाम शाह</b> ने <b>बरार</b> पर आक्रमण कर उसे अपने राज्य में <b>विलीन</b> कर लिया।"
    },
    {
        question: "प्रश्न 38. किस दक्कन सल्तनत को बीजापुर ने अपने राज्य में मिला लिया था?",
        answers: shuffle([
            { text: "बरार", correct: false },
            { text: "बीदर", correct: true },
            { text: "गोलकुंडा", correct: false },
            { text: "अहमदनगर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1619 ई.</b> में, <b>बीजापुर के सुल्तान इब्राहिम आदिल शाह द्वितीय</b> ने <b>बीदर</b> पर कब्जा कर <b>बरीदशाही वंश</b> का अंत कर दिया।"
    },
    {
        question: "प्रश्न 39. कौन सी दो दक्कन सल्तनतों को अंततः मुगल बादशाह औरंगजेब ने जीता?",
        answers: shuffle([
            { text: "बरार और बीदर", correct: false },
            { text: "अहमदनगर और गोलकुंडा", correct: false },
            { text: "बीजापुर और गोलकुंडा", correct: true },
            { text: "बीजापुर और अहमदनगर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>औरंगजेब</b> ने एक लंबे अभियान के बाद <b>1686 ई. में बीजापुर</b> और <b>1687 ई. में गोलकुंडा</b> पर विजय प्राप्त कर इन दोनों सल्तनतों को <b>मुगल साम्राज्य</b> में मिला लिया।"
    },
    {
        question: "प्रश्न 40. विजयनगर साम्राज्य के विरुद्ध बने 'महासंघ' में कौन सी सल्तनत शामिल नहीं हुई थी?",
        answers: shuffle([
            { text: "बीजापुर", correct: false },
            { text: "अहमदनगर", correct: false },
            { text: "गोलकुंडा", correct: false },
            { text: "बरार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अहमदनगर और बरार</b> के बीच <b>आपसी शत्रुता</b> के कारण, <b>बरार</b> ने <b>1565 ई.</b> में <b>तालिकोटा के युद्ध</b> के लिए बने दक्कनी सल्तनतों के संघ में भाग नहीं लिया।"
    },
    {
        question: "प्रश्न 41. बहमनी सल्तनत में 'वकील-उस-सल्तनत' का पद किसके समकक्ष था?",
        answers: shuffle([
            { text: "सेनापति", correct: false },
            { text: "प्रधानमंत्री", correct: true },
            { text: "मुख्य न्यायाधीश", correct: false },
            { text: "विदेश मंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>वकील-उस-सल्तनत</b>' सुल्तान के बाद <b>सबसे शक्तिशाली अधिकारी</b> होता था, जो दिल्ली सल्तनत के '<b>वजीर</b>' या आधुनिक <b>प्रधानमंत्री</b> के समान था।"
    },
    {
        question: "प्रश्न 42. बहमनी प्रशासन में 'अमीर-ए-जुमला' किस विभाग का प्रमुख होता था?",
        answers: shuffle([
            { text: "सैन्य विभाग", correct: false },
            { text: "वित्त विभाग", correct: true },
            { text: "न्याय विभाग", correct: false },
            { text: "पत्राचार विभाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>अमीर-ए-जुमला</b>' राज्य के <b>वित्त मंत्री</b> का पद था, जो <b>आय-व्यय</b> का हिसाब रखता था।"
    },
    {
        question: "प्रश्न 43. बहमनी राज्य में 'सद्रे-जहाँ' का क्या कार्य था?",
        answers: shuffle([
            { text: "सेना का नेतृत्व करना", correct: false },
            { text: "राजस्व वसूलना", correct: false },
            { text: "न्याय और धार्मिक मामलों का प्रमुख होना", correct: true },
            { text: "विदेशी राजदूतों से संपर्क करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>सद्रे-जहाँ</b>' <b>मुख्य न्यायाधीश (काजी-उल-कुजात)</b> के रूप में कार्य करता था और साथ ही <b>धार्मिक दान (वक्फ)</b> की भी देखरेख करता था।"
    },
    {
        question: "प्रश्न 44. बहमनी सल्तनत की आधिकारिक भाषा क्या थी?",
        answers: shuffle([
            { text: "तेलुगु", correct: false },
            { text: "मराठी", correct: false },
            { text: "फारसी", correct: true },
            { text: "दक्कनी उर्दू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बहमनी दरबार और प्रशासन की मुख्य भाषा <b>फारसी</b> थी।"
    },
    {
        question: "प्रश्न 45. दक्कनी उर्दू या 'दक्खिनी' भाषा का विकास किस सल्तनत के संरक्षण में हुआ?",
        answers: shuffle([
            { text: "दिल्ली सल्तनत", correct: false },
            { text: "बहमनी और उसकी उत्तराधिकारी सल्तनतें", correct: true },
            { text: "बंगाल सल्तनत", correct: false },
            { text: "गुजरात सल्तनत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बहमनी</b> और विशेषकर <b>बीजापुर तथा गोलकुंडा</b> के सुल्तानों ने एक नई भाषा '<b>दक्खिनी</b>' को संरक्षण दिया, जो <b>फारसी, अरबी, मराठी, कन्नड़ और तेलुगु</b> का मिश्रण थी।"
    },
    {
        question: "प्रश्न 46. 'किताब-ए-नौरस' नामक पुस्तक की रचना किस बीजापुर सुल्तान ने की थी?",
        answers: shuffle([
            { text: "यूसुफ आदिल शाह", correct: false },
            { text: "अली आदिल शाह प्रथम", correct: false },
            { text: "इब्राहिम आदिल शाह द्वितीय", correct: true },
            { text: "मुहम्मद आदिल शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इब्राहिम आदिल शाह द्वितीय</b> एक महान <b>कला और संगीत प्रेमी</b> था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने <b>दक्खिनी भाषा</b> में <b>भारतीय संगीत</b> पर '<b>किताब-ए-नौरस</b>' की रचना की।"
    },
    {
        question: "प्रश्न 47. बहमनी सल्तनत की पहली राजधानी क्या थी?",
        answers: shuffle([
            { text: "बीदर", correct: false },
            { text: "दौलताबाद", correct: false },
            { text: "गुलबर्गा (अहसानाबाद)", correct: true },
            { text: "गोलकुंडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अलाउद्दीन हसन बहमन शाह</b> ने <b>गुलबर्गा</b> को अपनी राजधानी बनाया और उसका नाम '<b>अहसानाबाद</b>' रखा।"
    },
    {
        question: "प्रश्न 48. रूसी यात्री 'अफनासी निकितिन' ने किस बहमनी शहर का दौरा किया था?",
        answers: shuffle([
            { text: "गुलबर्गा", correct: false },
            { text: "दौलताबाद", correct: false },
            { text: "बीदर", correct: true },
            { text: "गोलकुंडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>रूसी घोड़ा व्यापारी निकितिन</b> ने <b>1470-74 ई.</b> के दौरान बहमनी सल्तनत की यात्रा की और राजधानी <b>बीदर</b> में रहा।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने यहाँ की <b>सामाजिक और आर्थिक स्थिति</b> का वर्णन किया है।"
    },
    {
        question: "प्रश्न 49. बहमनी वास्तुकला पर किस शैली का गहरा प्रभाव है?",
        answers: shuffle([
            { text: "भारतीय (द्रविड़) शैली", correct: false },
            { text: "फारसी (ईरानी) शैली", correct: true },
            { text: "तुर्की शैली", correct: false },
            { text: "यूरोपीय (गोथिक) शैली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बहमनी शासकों और अमीरों</b>, विशेषकर अफाकियों, के कारण उनकी वास्तुकला पर <b>फारसी शैली</b> का <b>गहरा प्रभाव</b> दिखाई देता है, जैसे <b>रंगीन टाइलों का प्रयोग, ऊँचे गुंबद और मेहराब</b>।"
    },
    {
        question: "प्रश्न 50. बहमनी सल्तनत में 'अफाकी' किन्हें कहा जाता था?",
        answers: shuffle([
            { text: "स्थानीय मुस्लिम", correct: false },
            { text: "धर्मांतरित हिंदू", correct: false },
            { text: "विदेशी (ईरानी, तुर्की, अरब) शिया मुसलमान", correct: true },
            { text: "हब्शी (अबीसीनियाई) गुलाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये वे <b>विदेशी अमीर</b> थे जो सल्तनत में आकर बस गए थे।<br><br><i class='fa-solid fa-angles-right icon'></i> वे ज्यादातर <b>शिया</b> थे और बहुत प्रतिभाशाली थे, जिसके कारण उन्हें <b>उच्च पद</b> मिले।"
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