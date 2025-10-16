const questions = [
    {
        topHeading: "बहमनी राज्य पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. बहमनी सल्तनत में 'दक्कनी' कौन थे?",
        answers: shuffle([
            { text: "विदेशी सुन्नी मुसलमान", correct: false },
            { text: "स्थानीय सुन्नी मुसलमान और धर्मांतरित हिंदू", correct: true },
            { text: "केवल हिंदू", correct: false },
            { text: "केवल शिया मुसलमान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्कनी गुट में वे अमीर शामिल थे जो लंबे समय से दक्कन में रह रहे थे या जिनके पूर्वज यहीं बस गए थे।<br><br><i class='fa-solid fa-angles-right icon'></i> वे ज्यादातर सुन्नी थे और अफाकियों से ईर्ष्या करते थे।"
    },
    {
        question: "प्रश्न 2. बहमनी सल्तनत के पतन का मुख्य सामाजिक-राजनीतिक कारण क्या था?",
        answers: shuffle([
            { text: "विजयनगर से लगातार युद्ध", correct: false },
            { text: "अफाकी और दक्कनी गुटों के बीच संघर्ष", correct: true },
            { text: "कमजोर शासक", correct: false },
            { text: "मुगल आक्रमण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन दो शक्तिशाली गुटों के बीच निरंतर चलने वाले षड्यंत्रों और संघर्ष ने सल्तनत की नींव को खोखला कर दिया और अंततः इसके विघटन का कारण बना।"
    },
    {
        question: "प्रश्न 3. गोलकुंडा का किला किसलिए प्रसिद्ध था?",
        answers: shuffle([
            { text: "सोने के उत्पादन", correct: false },
            { text: "वस्त्र उद्योग", correct: false },
            { text: "हीरा व्यापार", correct: true },
            { text: "मसालों के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोलकुंडा की सल्तनत अपनी हीरे की खानों के लिए विश्व प्रसिद्ध थी।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रसिद्ध कोहिनूर हीरा भी यहीं की खान से निकला माना जाता है।"
    },
    {
        question: "प्रश्न 4. अहमदनगर के किस प्रधानमंत्री ने गुरिल्ला युद्ध (छापामार युद्ध) पद्धति को अपनाया और मुगलों का सफलतापूर्वक प्रतिरोध किया?",
        answers: shuffle([
            { text: "चंगेज खान", correct: false },
            { text: "महमूद गवाँ", correct: false },
            { text: "मलिक अम्बर", correct: true },
            { text: "मीर जुमला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मलिक अम्बर, जो मूल रूप से एक हब्शी (इथियोपियाई) गुलाम था, एक महान प्रशासक और सेनापति बना।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने मराठों को अपनी सेना में भर्ती किया और छापामार युद्ध के माध्यम से जहाँगीर की मुगल सेना को लंबे समय तक रोके रखा।"
    },
    {
        question: "प्रश्न 5. मलिक अम्बर ने कौन सी प्रसिद्ध भू-राजस्व प्रणाली शुरू की?",
        answers: shuffle([
            { text: "मनसबदारी", correct: false },
            { text: "इक्तादारी", correct: false },
            { text: "जब्ती प्रणाली (भूमि की माप पर आधारित)", correct: true },
            { text: "बटाई प्रणाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मलिक अम्बर ने टोडरमल की जब्ती प्रणाली के आधार पर दक्कन में एक व्यवस्थित भू-राजस्व प्रणाली लागू की, जो भूमि की पैमाइश और उपज के आकलन पर आधारित थी।"
    },
    {
        question: "प्रश्न 6. चारमीनार किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "कृष्णा", correct: false },
            { text: "गोदावरी", correct: false },
            { text: "मूसी", correct: true },
            { text: "तुंगभद्रा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुहम्मद कुली कुतुब शाह द्वारा स्थापित हैदराबाद शहर मूसी नदी के तट पर स्थित है, और चारमीनार इसी शहर के केंद्र में है।"
    },
    {
        question: "प्रश्न 7. 'इब्राहिम रोजा' किसका मकबरा है?",
        answers: shuffle([
            { text: "इब्राहिम आदिल शाह प्रथम", correct: false },
            { text: "इब्राहिम आदिल शाह द्वितीय", correct: true },
            { text: "इब्राहिम कुतुब शाह", correct: false },
            { text: "इब्राहिम बरीद शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'इब्राहिम रोजा' बीजापुर में स्थित इब्राहिम आदिल शाह द्वितीय और उसकी रानी ताज सुल्ताना का एक भव्य मकबरा है, जो अपनी उत्कृष्ट नक्काशी और वास्तुकला के लिए जाना जाता है।"
    },
    {
        question: "प्रश्न 8. बहमनी काल में 'पेशवा' का पद किससे संबंधित था?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "प्रधानमंत्री के सहायक", correct: true },
            { text: "सेनापति", correct: false },
            { text: "वित्त मंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बहमनी प्रशासन में, 'पेशवा' 'वकील-उस-सल्तनत' (प्रधानमंत्री) के साथ मिलकर काम करता था और उसका एक प्रमुख सहायक होता था।"
    },
    {
        question: "प्रश्न 9. बहमनी राज्य में 'तरफदार' का मुख्य कार्य क्या था?",
        answers: shuffle([
            { text: "केवल राजस्व वसूलना", correct: false },
            { text: "केवल न्याय करना", correct: false },
            { text: "प्रांत में सेना रखना, प्रशासन चलाना और राजस्व वसूलना", correct: true },
            { text: "केवल सुल्तान को सलाह देना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तरफदार (प्रांतीय गवर्नर) अपने प्रांत में सुल्तान का प्रतिनिधि होता था और उसके पास व्यापक प्रशासनिक और सैन्य अधिकार होते थे।"
    },
    {
        question: "प्रश्न 10. 'गुलशन-ए-इब्राहिमी' जिसे 'तारीख-ए-फरिश्ता' भी कहा जाता है, किसने लिखी?",
        answers: shuffle([
            { text: "अब्दुर रज्जाक", correct: false },
            { text: "निकोलो कोंटी", correct: false },
            { text: "मुहम्मद कासिम फरिश्ता", correct: true },
            { text: "जियाउद्दीन बरनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फरिश्ता ने बीजापुर के सुल्तान इब्राहिम आदिल शाह द्वितीय के संरक्षण में दक्कन के इतिहास पर यह महत्वपूर्ण ग्रंथ लिखा, जो बहमनी और दक्कन सल्तनतों के बारे में जानकारी का एक प्रमुख स्रोत है।"
    },
    {
        question: "प्रश्न 11. बहमनी राज्य का विजयनगर से संघर्ष किस नदी घाटी के लिए था?",
        answers: shuffle([
            { text: "नर्मदा-ताप्ती", correct: false },
            { text: "गंगा-यमुना", correct: false },
            { text: "कृष्णा-गोदावरी", correct: false },
            { text: "कृष्णा-तुंगभद्रा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृष्णा और तुंगभद्रा नदियों के बीच का उपजाऊ रायचूर दोआब दोनों साम्राज्यों के बीच सदियों तक चले संघर्ष का मुख्य केंद्र था।"
    },
    {
        question: "प्रश्न 12. 'हसन गंगू' किसका मूल नाम था?",
        answers: shuffle([
            { text: "महमूद गवाँ", correct: false },
            { text: "अलाउद्दीन हसन बहमन शाह", correct: true },
            { text: "मुहम्मद शाह प्रथम", correct: false },
            { text: "फिरोज शाह बहमनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुछ वृत्तांतों के अनुसार, जफर खान (बहमन शाह) दिल्ली में गंगू नामक एक ब्राह्मण की सेवा में था, इसीलिए उसे हसन गंगू भी कहा जाता है।"
    },
    {
        question: "प्रश्न 13. बहमनी राज्य में 'हब्शी' कौन थे?",
        answers: shuffle([
            { text: "ईरानी अमीर", correct: false },
            { text: "तुर्की अमीर", correct: false },
            { text: "अबीसीनिया (इथियोपिया) के गुलाम सैनिक और अमीर", correct: true },
            { text: "भारतीय मुसलमान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्कन में बड़ी संख्या में अफ्रीका के अबीसीनिया क्षेत्र से लाए गए गुलाम थे, जिन्हें 'हब्शी' कहा जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> मलिक अम्बर इसका सबसे प्रसिद्ध उदाहरण है।"
    },
    {
        question: "प्रश्न 14. बहमनी सुल्तानों द्वारा बनवाए गए किले कहाँ स्थित हैं?",
        answers: shuffle([
            { text: "केवल गुलबर्गा और बीदर", correct: false },
            { text: "दौलताबाद, गुलबर्गा, बीदर और पन्हाला", correct: true },
            { text: "केवल गोलकुंडा", correct: false },
            { text: "केवल बीजापुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बहमनी सुल्तानों ने अपने साम्राज्य की रक्षा के लिए कई मजबूत किलों का निर्माण या पुनर्निर्माण करवाया, जिनमें दौलताबाद, गुलबर्गा और बीदर प्रमुख हैं।"
    },
    {
        question: "प्रश्न 15. महमूद गवाँ की जागीर कहाँ स्थित थी?",
        answers: shuffle([
            { text: "गुलबर्गा", correct: false },
            { text: "बीजापुर", correct: true },
            { text: "बरार", correct: false },
            { text: "बीदर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महमूद गवाँ की व्यक्तिगत जागीर बीजापुर प्रांत में थी।"
    },
    {
        question: "प्रश्न 16. किस बहमनी सुल्तान के काल में निकितिन ने लिखा कि \"अमीर बहुत धनी और विलासी हैं जबकि आम लोग बहुत गरीब हैं\"?",
        answers: shuffle([
            { text: "अहमद शाह प्रथम", correct: false },
            { text: "अलाउद्दीन अहमद द्वितीय", correct: false },
            { text: "हुमायूँ शाह", correct: false },
            { text: "मुहम्मद शाह तृतीय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निकितिन ने मुहम्मद शाह तृतीय के शासनकाल के दौरान बहमनी सल्तनत का दौरा किया और समाज में व्याप्त भारी आर्थिक असमानता का वर्णन किया।"
    },
    {
        question: "प्रश्न 17. बीदर की प्रसिद्ध 'रंगीन महल' वास्तुकला की कौन सी विशेषता दर्शाती है?",
        answers: shuffle([
            { text: "सादगी", correct: false },
            { text: "केवल पत्थर का उपयोग", correct: false },
            { text: "दीवारों पर रंगीन टाइलों और लकड़ी पर नक्काशी का काम", correct: true },
            { text: "विशाल गुंबद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बीदर के किले के भीतर स्थित रंगीन महल अपनी दीवारों पर लगी चमकदार रंगीन टाइलों (Glazed Tiles) और मदर-ऑफ-पर्ल से जड़ी लकड़ी की छतों के लिए प्रसिद्ध है।"
    },
    {
        question: "प्रश्न 18. 'रियाज-उल-इंशा' क्या है?",
        answers: shuffle([
            { text: "एक ऐतिहासिक ग्रंथ", correct: false },
            { text: "एक कविता संग्रह", correct: false },
            { text: "महमूद गवाँ द्वारा लिखे गए पत्रों का संग्रह", correct: true },
            { text: "एक प्रशासनिक नियमावली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रियाज-उल-इंशा' (पत्रों का बगीचा) में महमूद गवाँ द्वारा विभिन्न शासकों, विद्वानों और अधिकारियों को लिखे गए पत्र संकलित हैं, जो उसकी साहित्यिक शैली और कूटनीतिक कौशल को दर्शाते हैं।"
    },
    {
        question: "प्रश्न 19. बहमनी सल्तनत में 'कोतवाल' का क्या कार्य था?",
        answers: shuffle([
            { text: "प्रांत का गवर्नर", correct: false },
            { text: "सेना का सिपाही", correct: false },
            { text: "शहर का पुलिस प्रमुख", correct: true },
            { text: "गाँव का मुखिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोतवाल शहर में कानून-व्यवस्था बनाए रखने, अपराधों को रोकने और बाजारों की निगरानी के लिए जिम्मेदार होता था।"
    },
    {
        question: "प्रश्न 20. कौन सा दक्कनी सुल्तान शिया धर्म का अनुयायी था और उसने अपने राज्य में इसे बढ़ावा दिया?",
        answers: shuffle([
            { text: "महमूद गवाँ", correct: false },
            { text: "यूसुफ आदिल शाह (बीजापुर)", correct: true },
            { text: "मलिक अहमद (अहमदनगर)", correct: false },
            { text: "फतहउल्लाह इमाद शाह (बरार)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूसुफ आदिल शाह शिया इस्लाम को मानता था और उसने बीजापुर में इसे राजधर्म बनाने का प्रयास किया, हालांकि सुन्नी अमीरों के विरोध के कारण उसे अपनी नीति बदलनी पड़ी।"
    },
    {
        question: "प्रश्न 21. अलाउद्दीन हसन बहमन शाह ने अपने राज्य में कौन सा कर समाप्त कर दिया था?",
        answers: shuffle([
            { text: "खराज (भू-राजस्व)", correct: false },
            { text: "जजिया", correct: true },
            { text: "जकात", correct: false },
            { text: "खुम्स (लूट का हिस्सा)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बहमन शाह ने अपनी हिंदू प्रजा का समर्थन हासिल करने के लिए गैर-मुसलमानों पर लगने वाला जजिया कर माफ कर दिया था।"
    },
    {
        question: "प्रश्न 22. बहमनी राज्य के किस शासक का विजयनगर की राजकुमारी से विवाह हुआ था?",
        answers: shuffle([
            { text: "अहमद शाह प्रथम", correct: false },
            { text: "अलाउद्दीन बहमन शाह", correct: false },
            { text: "ताजुद्दीन फिरोज शाह", correct: true },
            { text: "हुमायूँ शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विजयनगर के शासक देवराय प्रथम को हराने के बाद, संधि के तहत फिरोज शाह ने उसकी पुत्री से विवाह किया था।"
    },
    {
        question: "प्रश्न 23. 'चौमुखा मस्जिद' (चार मेहराबों वाली मस्जिद) कहाँ स्थित है?",
        answers: shuffle([
            { text: "गुलबर्गा", correct: false },
            { text: "बीदर", correct: true },
            { text: "दौलताबाद", correct: false },
            { text: "अहमदनगर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह बीदर के केंद्र में स्थित एक महत्वपूर्ण स्मारक है, जिसे शहर के चार प्रमुख मार्गों के मिलन बिंदु पर बनाया गया था।"
    },
    {
        question: "प्रश्न 24. महमूद गवाँ ने तरफदारों के अधिकारों में कटौती क्यों की?",
        answers: shuffle([
            { text: "क्योंकि वे अयोग्य थे", correct: false },
            { text: "क्योंकि वे सुल्तान के खिलाफ विद्रोह कर रहे थे", correct: false },
            { text: "केंद्रीय सत्ता को मजबूत करने और उनकी शक्ति को नियंत्रित करने के लिए", correct: true },
            { text: "क्योंकि वे अफाकी थे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महमूद गवाँ का मानना था कि शक्तिशाली तरफदार सुल्तान के लिए एक खतरा हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए उसने प्रांतों को छोटा कर और उनकी जागीरों में कटौती कर उनकी शक्ति को कम किया।"
    },
    {
        question: "प्रश्न 25. किस बहमनी शासक की मृत्यु अधिक मदिरापान के कारण हुई?",
        answers: shuffle([
            { text: "दाऊद शाह प्रथम", correct: true },
            { text: "शम्सुद्दीन दाऊद शाह द्वितीय", correct: false },
            { text: "अलाउद्दीन अहमद द्वितीय", correct: false },
            { text: "मुहम्मद शाह प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुहम्मद शाह प्रथम के पुत्र दाऊद शाह का शासनकाल बहुत छोटा था और उसकी मृत्यु अत्यधिक शराब पीने के कारण हुई बताई जाती है।"
    },
    {
        question: "प्रश्न 26. बहमनी सल्तनत की वास्तुकला का सबसे पहला महत्वपूर्ण उदाहरण कौन सा है?",
        answers: shuffle([
            { text: "बीदर का किला", correct: false },
            { text: "गोल गुम्बज", correct: false },
            { text: "चारमीनार", correct: false },
            { text: "गुलबर्गा की जामा मस्जिद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुलबर्गा किले के भीतर स्थित यह मस्जिद बहमनी वास्तुकला की शुरुआती और अनूठी मिसाल है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी छत पूरी तरह से छोटे-छोटे गुंबदों और मेहराबों से ढकी हुई है और इसमें कोई आंगन नहीं है।"
    },
    {
        question: "प्रश्न 27. बहमनी राज्य में 'हब्शी' गुट का नेता कौन था?",
        answers: shuffle([
            { text: "महमूद गवाँ", correct: false },
            { text: "मलिक अम्बर", correct: true },
            { text: "कासिम बरीद", correct: false },
            { text: "मलिक हसन बहलोल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मलिक अम्बर, जो अहमदनगर का प्रधानमंत्री बना, दक्कन की राजनीति में हब्शी (अबीसीनियाई) गुट का सबसे शक्तिशाली प्रतिनिधि था।"
    },
    {
        question: "प्रश्न 28. महमूद गवाँ ने किस राज्य के खिलाफ सफल अभियान का नेतृत्व किया था?",
        answers: shuffle([
            { text: "मालवा", correct: false },
            { text: "गुजरात", correct: false },
            { text: "खानदेश", correct: false },
            { text: "कोंकण और उड़ीसा (गजपति)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उसने कोंकण तट को जीता, गोवा पर अधिकार किया और उड़ीसा के गजपति शासकों को भी पराजित कर राजमुंदरी और कोंडाविडु के क्षेत्रों पर कब्जा किया।"
    },
    {
        question: "प्रश्न 29. 'सल्तनत-ए-दक्कन' किसे कहा जाता है?",
        answers: shuffle([
            { text: "विजयनगर साम्राज्य को", correct: false },
            { text: "बहमनी सल्तनत और उसकी उत्तराधिकारी सल्तनतों को", correct: true },
            { text: "मराठा साम्राज्य को", correct: false },
            { text: "मैसूर राज्य को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामूहिक रूप से बहमनी और उसके बाद की पाँच दक्कन सल्तनतों को 'दक्कन की सल्तनतें' या 'सल्तनत-ए-दक्कन' कहा जाता है।"
    },
    {
        question: "प्रश्न 30. बीजापुर की गोलकुंडा से शत्रुता का मुख्य कारण क्या था?",
        answers: shuffle([
            { text: "धार्मिक मतभेद (शिया-सुन्नी)", correct: false },
            { text: "शोलापुर और कल्याणी क्षेत्रों पर नियंत्रण", correct: true },
            { text: "हीरा व्यापार पर एकाधिकार", correct: false },
            { text: "विजयनगर से मित्रता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बीजापुर और गोलकुंडा के बीच शोलापुर और नल्दुर्ग जैसे रणनीतिक और उपजाऊ क्षेत्रों पर अधिकार को लेकर लगातार संघर्ष होता रहता था।"
    },
    {
        question: "प्रश्न 31. \"मेरे एक हाथ में कुरान, दूसरे में तलवार है।\" यह किस शासक का आदर्श वाक्य माना जाता है?",
        answers: shuffle([
            { text: "अलाउद्दीन बहमन शाह", correct: false },
            { text: "मुहम्मद शाह प्रथम", correct: true },
            { text: "फिरोज शाह बहमनी", correct: false },
            { text: "अहमद शाह वली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह कथन उसकी आक्रामक नीति और इस्लाम के प्रसार के प्रति उसकी प्रतिबद्धता को दर्शाता है।"
    },
    {
        question: "प्रश्न 32. 'चौदह सौ बहमनी' किस घटना को संदर्भित करता है?",
        answers: shuffle([
            { text: "1400 अमीरों का विद्रोह", correct: false },
            { text: "1400 गाँवों का दान", correct: false },
            { text: "बुरहान-ए-मासिर ग्रंथ में वर्णित एक किस्सा", correct: false },
            { text: "दक्कनी और अफाकी अमीरों के बीच एक नरसंहार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अलाउद्दीन अहमद द्वितीय के काल में, दक्कनी अमीरों ने सुल्तान को भड़काकर लगभग 1400 अफाकी (परदेसी) अमीरों और सैनिकों की हत्या करवा दी थी।<br><br><i class='fa-solid fa-angles-right icon'></i> यह दोनों गुटों के बीच की कड़वाहट को दर्शाता है।"
    },
    {
        question: "प्रश्न 33. 'गोगी' नामक स्थान किस बहमनी शासक के प्रारंभिक जीवन से जुड़ा है?",
        answers: shuffle([
            { text: "अलाउद्दीन बहमन शाह", correct: true },
            { text: "मुहम्मद शाह प्रथम", correct: false },
            { text: "फिरोज शाह बहमनी", correct: false },
            { text: "अहमद शाह प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुल्तान बनने से पहले, जफर खान को गोगी का इक्तादार बनाया गया था, जो उसके उदय में एक महत्वपूर्ण कदम था।"
    },
    {
        question: "प्रश्न 34. बहमनी राज्य का विस्तार सबसे अधिक किसके शासनकाल में हुआ?",
        answers: shuffle([
            { text: "मुहम्मद शाह प्रथम", correct: false },
            { text: "फिरोज शाह बहमनी", correct: false },
            { text: "अहमद शाह प्रथम", correct: false },
            { text: "महमूद गवाँ के प्रधानमंत्रित्व में (मुहम्मद शाह तृतीय के काल में)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महमूद गवाँ की विजयों के परिणामस्वरूप, बहमनी साम्राज्य अपने सबसे बड़े भौगोलिक विस्तार पर पहुँच गया, जो पूर्व में उड़ीसा से लेकर पश्चिम में गोवा तक फैला था।"
    },
    {
        question: "प्रश्न 35. 'आइना-खाना' (शीश महल) का निर्माण कहाँ करवाया गया था?",
        answers: shuffle([
            { text: "गुलबर्गा", correct: false },
            { text: "दौलताबाद", correct: false },
            { text: "गोलकुंडा", correct: false },
            { text: "बीदर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बीदर के किले में कई भव्य महल हैं, जिनमें से एक 'आइना-खाना' या शीश महल है, जो अपनी सुंदर सजावट के लिए प्रसिद्ध है।"
    },
    {
        question: "प्रश्न 36. बहमनी काल में 'जागीर' प्रणाली का क्या उद्देश्य था?",
        answers: shuffle([
            { text: "किसानों को भूमि का मालिक बनाना", correct: false },
            { text: "अमीरों और अधिकारियों को वेतन के बदले भूमि का राजस्व अधिकार देना", correct: true },
            { text: "मंदिरों को भूमि दान करना", correct: false },
            { text: "भूमि को सीधे राज्य के नियंत्रण में लाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह दिल्ली सल्तनत की इक्ता प्रणाली के समान थी, जिसमें सैन्य और नागरिक अधिकारियों को उनकी सेवाओं के बदले में जागीरें दी जाती थीं।"
    },
    {
        question: "प्रश्न 37. 'इब्राहिम कुतुब शाह' को गोलकुंडा में क्या कहा जाता था?",
        answers: shuffle([
            { text: "वली", correct: false },
            { text: "जगत गुरु", correct: false },
            { text: "मलक इभा राम", correct: true },
            { text: "सुल्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इब्राहिम कुतुब शाह ने अपने शासनकाल में तेलुगु भाषा और स्थानीय संस्कृति को बहुत संरक्षण दिया, जिसके कारण उसकी हिंदू प्रजा उसे प्रेम से 'मलक इभा राम' कहकर पुकारती थी।"
    },
    {
        question: "प्रश्न 38. बहमनी सुल्तानों ने किस सूफी सिलसिले को सबसे अधिक संरक्षण दिया?",
        answers: shuffle([
            { text: "नक्शबंदी", correct: false },
            { text: "कादिरी", correct: false },
            { text: "सुहरावर्दी", correct: false },
            { text: "चिश्ती", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बहमनी सुल्तान चिश्ती सूफियों के प्रति गहरी आस्था रखते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> संत गेसूदराज को गुलबर्गा में बसाने वाले फिरोज शाह और अहमद शाह वली इसके प्रमुख उदाहरण हैं।"
    },
    {
        question: "प्रश्न 39. बहमनी राज्य के विघटन के बाद, दक्कन की राजनीति में कौन सी तीसरी शक्ति एक महत्वपूर्ण कारक बनी?",
        answers: shuffle([
            { text: "पुर्तगाली", correct: false },
            { text: "मुगल", correct: false },
            { text: "विजयनगर", correct: false },
            { text: "मराठा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्कनी सल्तनतों, विशेषकर अहमदनगर और बीजापुर, की सेनाओं में मराठा सैनिक और सरदार (शिलेदार और बारगीर) बड़ी संख्या में भर्ती हुए और धीरे-धीरे एक महत्वपूर्ण राजनीतिक शक्ति बन गए।"
    },
    {
        question: "प्रश्न 40. बहमनी सल्तनत में 'मजलिस-ए-इलवत' क्या थी?",
        answers: shuffle([
            { text: "एक सैन्य परिषद", correct: false },
            { text: "एक न्याय सभा", correct: false },
            { text: "सुल्तान की निजी सलाहकार परिषद या गुप्त परिषद", correct: true },
            { text: "एक धार्मिक सभा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक छोटी और गोपनीय परिषद थी जिसमें सुल्तान अपने सबसे भरोसेमंद अमीरों और मंत्रियों के साथ महत्वपूर्ण मामलों पर चर्चा करता था।"
    },
    {
        question: "प्रश्न 41. 'तारान' का युद्ध किन दो शक्तियों के बीच हुआ था?",
        answers: shuffle([
            { text: "बहमनी और विजयनगर", correct: false },
            { text: "बहमनी और मालवा", correct: true },
            { text: "बहमनी और गुजरात", correct: false },
            { text: "बहमनी और खानदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अहमद शाह प्रथम के शासनकाल में, मालवा के सुल्तान होशंग शाह के साथ बहमनी सल्तनत का संघर्ष हुआ, जिसमें यह युद्ध लड़ा गया।"
    },
    {
        question: "प्रश्न 42. 'नौरसपुर' नामक उपनगर की स्थापना किस सुल्तान ने की थी?",
        answers: shuffle([
            { text: "मुहम्मद कुली कुतुब शाह", correct: false },
            { text: "अली आदिल शाह प्रथम", correct: false },
            { text: "इब्राहिम आदिल शाह द्वितीय", correct: true },
            { text: "मुहम्मद आदिल शाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संगीत और कला के केंद्र के रूप में, इब्राहिम आदिल शाह द्वितीय ने बीजापुर के पास 'नौरसपुर' नामक एक नया शहर बसाया था।"
    },
    {
        question: "प्रश्न 43. महमूद गवाँ ने भूमि की माप किस इकाई में करवाई?",
        answers: shuffle([
            { text: "बीघा", correct: false },
            { text: "गज़", correct: false },
            { text: "जरीब (मापक श्रृंखला)", correct: true },
            { text: "बिस्वा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उसने राज्य में भूमि का व्यवस्थित सर्वेक्षण करवाया, जिसमें माप के लिए एक मानक जरीब का प्रयोग किया गया।"
    },
    {
        question: "प्रश्न 44. 'चोर मीनार' जो बीदर में है, का निर्माण किसलिए किया गया था?",
        answers: shuffle([
            { text: "शहर की सुंदरता बढ़ाने", correct: false },
            { text: "विद्रोहियों और अपराधियों को दंडित कर उनके सिर लटकाने", correct: true },
            { text: "एक वेधशाला के रूप में", correct: false },
            { text: "एक प्रकाश स्तंभ के रूप में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुल्तान हुमायूँ शाह 'जालिम' ने विद्रोहियों में भय पैदा करने के लिए इस मीनार का निर्माण करवाया था, जहाँ अपराधियों के कटे हुए सिर रखे जाते थे।"
    },
    {
        question: "प्रश्न 45. 'गुलबर्गा का किला' किस शासक की एक प्रमुख सैन्य उपलब्धि थी?",
        answers: shuffle([
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "अलाउद्दीन हसन बहमन शाह", correct: true },
            { text: "मुहम्मद शाह प्रथम", correct: false },
            { text: "फिरोज शाह बहमनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बहमन शाह ने अपनी राजधानी गुलबर्गा में एक विशाल और मजबूत किले का निर्माण करवाया, जो बहमनी शक्ति का केंद्र बना।"
    },
    {
        question: "प्रश्न 46. बहमनी राज्य में 'साहिब-ए-बार' कौन होता था?",
        answers: shuffle([
            { text: "दरबारी कवि", correct: false },
            { text: "समारोहों का प्रबंधक", correct: true },
            { text: "गुप्तचर", correct: false },
            { text: "तोपखाने का प्रमुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अधिकारी शाही दरबार के शिष्टाचार और विभिन्न समारोहों के आयोजन के लिए जिम्मेदार होता था।"
    },
    {
        question: "प्रश्न 47. किस दक्कनी सल्तनत ने अपनी सेना में मराठा 'बारगीरों' को बड़ी संख्या में शामिल किया?",
        answers: shuffle([
            { text: "बीदर", correct: false },
            { text: "बरार", correct: false },
            { text: "गोलकुंडा", correct: false },
            { text: "अहमदनगर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मलिक अम्बर ने अहमदनगर की सेना को मजबूत करने के लिए बड़ी संख्या में मराठा घुड़सवारों, विशेषकर बारगीरों (जिन्हें राज्य की ओर से घोड़े और हथियार मिलते थे), को भर्ती किया।"
    },
    {
        question: "प्रश्न 48. 'सोला खम्बा मस्जिद' कहाँ स्थित है?",
        answers: shuffle([
            { text: "गुलबर्गा", correct: false },
            { text: "अहमदनगर", correct: false },
            { text: "बीदर", correct: true },
            { text: "गोलकुंडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह बीदर के किले में स्थित एक बड़ी मस्जिद है, जिसका नाम इसके 16 स्तंभों पर पड़ा है।"
    },
    {
        question: "प्रश्न 49. 'गवान' शब्द का फारसी में क्या अर्थ है?",
        answers: shuffle([
            { text: "विद्वान", correct: false },
            { text: "व्यापारी", correct: false },
            { text: "गाय", correct: true },
            { text: "मंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महमूद गवाँ के नाम में 'गवाँ' शब्द का अर्थ गाय है, जो उसके जन्म स्थान (गावान) को संदर्भित करता है।"
    },
    {
        question: "प्रश्न 50. बहमनी सल्तनत का अपने पड़ोसी हिंदू राज्यों के प्रति रवैया कैसा था?",
        answers: shuffle([
            { text: "हमेशा मैत्रीपूर्ण", correct: false },
            { text: "हमेशा शत्रुतापूर्ण और आक्रामक", correct: false },
            { text: "राजनीतिक आवश्यकता के अनुसार परिवर्तनशील", correct: true },
            { text: "पूरी तरह से उदासीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि विजयनगर के साथ उनका मुख्य संघर्ष था, लेकिन उन्होंने वारंगल और खेड़ला जैसे अन्य हिंदू राज्यों के साथ अपनी राजनीतिक जरूरतों के हिसाब से कभी युद्ध तो कभी गठबंधन की नीति अपनाई।"
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