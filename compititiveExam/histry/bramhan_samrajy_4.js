const questions = [
    {
        topHeading: "ब्राह्मण साम्राज्य पर आधारित बहुविकल्पी प्रश्न part 4 (quiz_no.72)"
    },
    {
        question: "शुंग काल में निर्मित सांची स्तूप का विस्तार और नवीनीकरण किसके द्वारा करवाया गया था?",
        answers: shuffle([
            { text: "पुष्यमित्र शुंग", correct: true },
            { text: "अग्निमित्र", correct: false },
            { text: "सातवाहन शासक", correct: false },
            { text: "मौर्य शासक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुंग काल के दौरान, सांची के स्तूप का विस्तार किया गया था और इसके चारों ओर पत्थर की वेदिका (रेलिंग) और तोरण द्वार बनवाए गए थे।<br><br><i class='fa-solid fa-angles-right icon'></i> इन निर्माणों का श्रेय पुष्यमित्र शुंग को दिया जाता है।"
    },
    {
        question: "किस सातवाहन शासक को 'वेदों का एकमात्र ब्राह्मण' (एका ब्राह्मण) कहा गया है?",
        answers: shuffle([
            { text: "सिमुक", correct: false },
            { text: "सातकर्णी प्रथम", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: true },
            { text: "वशिष्ठीपुत्र पुलुमावी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नासिक प्रशस्ति में गौतमीपुत्र सातकर्णी को 'एका ब्राह्मण' कहा गया है, जिसका अर्थ है अद्वितीय ब्राह्मण या ब्राह्मणों का एकमात्र रक्षक, जो उसकी धार्मिक और सामाजिक स्थिति को दर्शाता है।"
    },
    {
        question: "सातवाहन काल में 'पण्याध्यक्ष' नामक अधिकारी का क्या कार्य था?",
        answers: shuffle([
            { text: "कृषि विभाग का प्रमुख", correct: false },
            { text: "व्यापार और वाणिज्य विभाग का प्रमुख", correct: true },
            { text: "सैन्य विभाग का प्रमुख", correct: false },
            { text: "न्याय विभाग का प्रमुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पण्याध्यक्ष' सातवाहन प्रशासन में व्यापार और वाणिज्य का प्रमुख अधिकारी होता था, जो व्यापारिक गतिविधियों की देखरेख करता था।"
    },
    {
        question: "शुंग वंश का अंतिम शासक देवभूति की हत्या किस वर्ष हुई थी?",
        answers: shuffle([
            { text: "185 ईसा पूर्व", correct: false },
            { text: "73 ईसा पूर्व", correct: true },
            { text: "60 ईसा पूर्व", correct: false },
            { text: "28 ईसा पूर्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुंग वंश का अंतिम शासक देवभूति 73 ईसा पूर्व में मारा गया था, जिसके बाद उसके मंत्री वासुदेव ने कण्व वंश की स्थापना की।"
    },
    {
        question: "सातवाहन काल में 'अग्रहार' किसे कहते थे?",
        answers: shuffle([
            { text: "राजा को दिए जाने वाले उपहार", correct: false },
            { text: "ब्राह्मणों को दिया गया कर-मुक्त भूमि अनुदान", correct: true },
            { text: "सैन्य छावनियाँ", correct: false },
            { text: "व्यापारिक केंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अग्रहार' सातवाहन शासकों द्वारा ब्राह्मणों को दिया गया भूमि का एक टुकड़ा था, जो कर-मुक्त होता था।"
    },
    {
        question: "किस यूनानी राजदूत ने शुंग काल में भागवत धर्म को अपनाकर गरुड़ स्तंभ का निर्माण करवाया?",
        answers: shuffle([
            { text: "मेगस्थनीज", correct: false },
            { text: "डायोनिसियस", correct: false },
            { text: "हेलियोडोरस", correct: true },
            { text: "टॉलेमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेलियोडोरस शुंग शासक भागभद्र के दरबार में आया और वैष्णव धर्म (भागवत धर्म) अपनाकर विदिशा में गरुड़ स्तंभ की स्थापना की।"
    },
    {
        question: "'गाथासप्तशती' नामक प्राकृत काव्य संग्रह के लेखक कौन थे?",
        answers: shuffle([
            { text: "गौतमीपुत्र सातकर्णी", correct: false },
            { text: "सातकर्णी प्रथम", correct: false },
            { text: "हाल", correct: true },
            { text: "वशिष्ठीपुत्र पुलुमावी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सातवाहन शासक हाल ने प्राकृत भाषा में 'गाथासप्तशती' की रचना की, जो श्रृंगार रस पर आधारित एक महत्वपूर्ण काव्य संग्रह है।"
    },
    {
        question: "सातवाहन काल में कौन सा बंदरगाह पश्चिमी तट पर रोमन व्यापार का प्रमुख केंद्र था?",
        answers: shuffle([
            { text: "सोपारा", correct: true },
            { text: "मुजिरिस", correct: false },
            { text: "अरिकामेडु", correct: false },
            { text: "कल्याण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोपारा (आधुनिक मुंबई के पास) सातवाहन साम्राज्य का एक महत्वपूर्ण बंदरगाह था, जहां से रोमन साम्राज्य के साथ व्यापार होता था।"
    },
    {
        question: "कण्व वंश के किस शासक ने वासुदेव के बाद शासन किया?",
        answers: shuffle([
            { text: "देवभूति", correct: false },
            { text: "भूमिमित्र", correct: true },
            { text: "नारायण", correct: false },
            { text: "सुशर्मन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कण्व वंश के संस्थापक वासुदेव के बाद उसका पुत्र भूमिमित्र शासक बना।"
    },
    {
        question: "शुंग काल में निर्मित भरहुत स्तूप का स्थान किस राज्य में है?",
        answers: shuffle([
            { text: "महाराष्ट्र", correct: false },
            { text: "कर्नाटक", correct: false },
            { text: "मध्य प्रदेश", correct: true },
            { text: "बिहार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भरहुत स्तूप, जो शुंग काल की वास्तुकला और मूर्तिकला का एक उत्कृष्ट उदाहरण है, मध्य प्रदेश के सतना जिले में स्थित है।"
    },
    {
        question: "'महाभाष्य' नामक ग्रंथ की रचना किस शासक के शासनकाल में हुई थी?",
        answers: shuffle([
            { text: "चंद्रगुप्त मौर्य", correct: false },
            { text: "अशोक", correct: false },
            { text: "पुष्यमित्र शुंग", correct: true },
            { text: "समुद्रगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पतंजलि ने पुष्यमित्र शुंग के शासनकाल के दौरान पाणिनि की 'अष्टाध्यायी' पर अपना भाष्य, 'महाभाष्य' लिखा था।"
    },
    {
        question: "सातवाहन शासकों को पुराणों में किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "यवन", correct: false },
            { text: "पह्लव", correct: false },
            { text: "आंध्र", correct: true },
            { text: "शक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुराणों में सातवाहन शासकों को 'आंध्र' या 'आंध्र-भृत्य' कहा गया है।"
    },
    {
        question: "सातवाहन काल में 'गलिका' या 'गुलिका' नामक अधिकारी का क्या कार्य था?",
        answers: shuffle([
            { text: "गाँवों के प्रशासन का प्रमुख", correct: true },
            { text: "सेना के एक छोटे दल का प्रमुख", correct: false },
            { text: "राजस्व संग्रह का प्रमुख", correct: false },
            { text: "व्यापारिक गतिविधियों का पर्यवेक्षक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गलिका' या 'गुलिका' सातवाहन प्रशासन में गाँव का प्रमुख अधिकारी होता था, जो गाँव की कानून-व्यवस्था और राजस्व संग्रह की देखरेख करता था।"
    },
    {
        question: "किस सातवाहन शासक ने शक राजाओं को हराया और 'त्रि-समुद्र-तोय-पीत-वाहन' की उपाधि धारण की?",
        answers: shuffle([
            { text: "सातकर्णी प्रथम", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: true },
            { text: "यज्ञश्री सातकर्णी", correct: false },
            { text: "वशिष्ठीपुत्र पुलुमावी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतमीपुत्र सातकर्णी ने अपने साम्राज्य को तीनों समुद्रों (बंगाल की खाड़ी, अरब सागर और हिंद महासागर) तक फैलाया।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए उसे 'त्रि-समुद्र-तोय-पीत-वाहन' की उपाधि दी गई।"
    },
    {
        question: "शुंग काल में निर्मित सांची स्तूप के तोरण द्वारों पर किस लिपि में अभिलेख पाए गए हैं?",
        answers: shuffle([
            { text: "खरोष्ठी", correct: false },
            { text: "ग्रीक", correct: false },
            { text: "ब्राह्मी", correct: true },
            { text: "देवनागरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सांची स्तूप के तोरण द्वारों पर ब्राह्मी लिपि में कई अभिलेख उत्कीर्ण हैं।"
    },
    {
        question: "सातवाहन काल में 'कटक' और 'स्कंधावर' क्या थे?",
        answers: shuffle([
            { text: "प्रशासनिक इकाइयाँ", correct: false },
            { text: "सैन्य शिविर", correct: true },
            { text: "व्यापारिक केंद्र", correct: false },
            { text: "धार्मिक स्थल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कटक' (छावनी) और 'स्कंधावर' (सैन्य शिविर) सातवाहन साम्राज्य के सैन्य संगठन के हिस्से थे।"
    },
    {
        question: "किस सातवाहन शासक के सिक्कों पर जहाज का चित्र उत्कीर्ण है?",
        answers: shuffle([
            { text: "सातकर्णी प्रथम", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: false },
            { text: "यज्ञश्री सातकर्णी", correct: true },
            { text: "वशिष्ठीपुत्र पुलुमावी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यज्ञश्री सातकर्णी के सिक्कों पर जहाज का चित्र मिलता है, जो समुद्री व्यापार में उसकी रुचि और सातवाहन नौसेना के महत्व को दर्शाता है।"
    },
    {
        question: "शुंग वंश का अंतिम शासक कौन था?",
        answers: shuffle([
            { text: "पुष्यमित्र शुंग", correct: false },
            { text: "अग्निमित्र", correct: false },
            { text: "देवभूति", correct: true },
            { text: "वासुमित्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> देवभूति शुंग वंश का अंतिम शासक था, जिसे उसके मंत्री वासुदेव ने मारकर कण्व वंश की स्थापना की।"
    },
    {
        question: "'मालविकाग्निमित्रम्' में वर्णित शुंग राजकुमार अग्निमित्र की प्रेम कहानी किस पात्र के साथ है?",
        answers: shuffle([
            { text: "हेलेना", correct: false },
            { text: "मालविका", correct: true },
            { text: "शकुंतला", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालिदास द्वारा रचित 'मालविकाग्निमित्रम्' में शुंग राजकुमार अग्निमित्र और मालविका की प्रेम कहानी का वर्णन है।"
    },
    {
        question: "सातवाहन शासकों ने किस धर्म को संरक्षण दिया?",
        answers: shuffle([
            { text: "केवल हिंदू धर्म", correct: false },
            { text: "केवल बौद्ध धर्म", correct: false },
            { text: "केवल जैन धर्म", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि सातवाहन शासक स्वयं ब्राह्मण थे और हिंदू धर्म का पालन करते थे, लेकिन उन्होंने बौद्ध और जैन धर्मों को भी उदारतापूर्वक संरक्षण दिया।"
    },
    {
        question: "कण्व वंश के बाद किस वंश ने दक्कन में सत्ता संभाली?",
        answers: shuffle([
            { text: "शुंग वंश", correct: false },
            { text: "सातवाहन वंश", correct: true },
            { text: "गुप्त वंश", correct: false },
            { text: "कुषाण वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कण्व वंश के अंतिम शासक सुशर्मन को हराकर सातवाहन वंश के संस्थापक सिमुक ने सत्ता हासिल की।"
    },
    {
        question: "किस शुंग शासक ने अपनी राजधानी विदिशा को बनाया था?",
        answers: shuffle([
            { text: "पुष्यमित्र शुंग", correct: true },
            { text: "अग्निमित्र", correct: false },
            { text: "वासुदेव", correct: false },
            { text: "देवभूति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुष्यमित्र शुंग ने अपनी राजधानी पाटलिपुत्र से विदिशा स्थानांतरित की, जो शुंग काल का एक महत्वपूर्ण केंद्र बन गया।"
    },
    {
        question: "सातवाहन काल में 'गाथासप्तशती' नामक ग्रंथ की भाषा क्या थी?",
        answers: shuffle([
            { text: "संस्कृत", correct: false },
            { text: "प्राकृत", correct: true },
            { text: "पाली", correct: false },
            { text: "तमिल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गाथासप्तशती' सातवाहन शासक हाल द्वारा प्राकृत भाषा में लिखा गया था।"
    },
    {
        question: "'अर्थशास्त्र' के लेखक कौटिल्य ने किस शासक के बारे में लिखा था?",
        answers: shuffle([
            { text: "पुष्यमित्र शुंग", correct: false },
            { text: "चंद्रगुप्त मौर्य", correct: true },
            { text: "गौतमीपुत्र सातकर्णी", correct: false },
            { text: "वासुदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कौटिल्य (चाणक्य) ने 'अर्थशास्त्र' की रचना चंद्रगुप्त मौर्य के शासनकाल के दौरान की थी, जो मौर्य वंश से संबंधित है, न कि ब्राह्मण साम्राज्य से।"
    },
    {
        question: "शुंग वंश की स्थापना का वर्ष क्या था?",
        answers: shuffle([
            { text: "232 ईसा पूर्व", correct: false },
            { text: "185 ईसा पूर्व", correct: true },
            { text: "73 ईसा पूर्व", correct: false },
            { text: "60 ईसा पूर्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुष्यमित्र शुंग ने 185 ईसा पूर्व में मौर्य वंश के अंतिम शासक बृहद्रथ की हत्या करके शुंग वंश की स्थापना की।"
    },
    {
        question: "शुंग वंश के शासनकाल में किस धार्मिक ग्रंथ को उसके अंतिम स्वरूप में संकलित किया गया?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "भगवदगीता", correct: false },
            { text: "मनुस्मृति", correct: true },
            { text: "रामायण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मनुस्मृति, जो हिंदू कानून का एक महत्वपूर्ण ग्रंथ है, को शुंग काल के दौरान अंतिम रूप दिया गया था।"
    },
    {
        question: "सातवाहन साम्राज्य के किस शासक ने रुद्रदामन के साथ संघर्ष किया?",
        answers: shuffle([
            { text: "सिमुक", correct: false },
            { text: "सातकर्णी प्रथम", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: false },
            { text: "वशिष्ठीपुत्र पुलुमावी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वशिष्ठीपुत्र पुलुमावी का शक शासक रुद्रदामन से संघर्ष हुआ, जिसमें पुलुमावी को हार का सामना करना पड़ा।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, बाद में रुद्रदामन ने अपनी पुत्री का विवाह उससे कर दिया।"
    },
    {
        question: "कण्व वंश के किस शासक ने शुंग वंश के अंतिम शासक देवभूति की हत्या की थी?",
        answers: shuffle([
            { text: "सुशर्मन", correct: false },
            { text: "वासुदेव", correct: true },
            { text: "भूमिमित्र", correct: false },
            { text: "नारायण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वासुदेव ने 73 ईसा पूर्व में शुंग वंश के अंतिम शासक देवभूति को मारकर कण्व वंश की स्थापना की।"
    },
    {
        question: "सातवाहन काल में कौन सा बंदरगाह पश्चिमी तट पर सबसे महत्वपूर्ण व्यापारिक केंद्र था?",
        answers: shuffle([
            { text: "मुजिरिस", correct: false },
            { text: "अरिकामेडु", correct: false },
            { text: "सोपारा", correct: true },
            { text: "ताम्रलिप्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोपारा (आधुनिक मुंबई के पास) सातवाहन काल का एक महत्वपूर्ण बंदरगाह था, जो रोमन साम्राज्य के साथ व्यापार के लिए प्रसिद्ध था।"
    },
    {
        question: "'मालविकाग्निमित्रम्' नामक नाटक में वर्णित शुंग राजकुमार कौन था?",
        answers: shuffle([
            { text: "पुष्यमित्र", correct: false },
            { text: "अग्निमित्र", correct: true },
            { text: "वासुमित्र", correct: false },
            { text: "देवभूति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालिदास द्वारा रचित 'मालविकाग्निमित्रम्' में शुंग शासक पुष्यमित्र के पुत्र अग्निमित्र और मालविका की प्रेमकहानी का वर्णन है।"
    },
    {
        question: "सातवाहन काल में 'गाथासप्तशती' नामक प्राकृत काव्य संग्रह के लेखक कौन थे?",
        answers: shuffle([
            { text: "गौतमीपुत्र सातकर्णी", correct: false },
            { text: "सातकर्णी प्रथम", correct: false },
            { text: "हाल", correct: true },
            { text: "वशिष्ठीपुत्र पुलुमावी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सातवाहन वंश के 17वें शासक हाल ने प्राकृत भाषा में 'गाथासप्तशती' की रचना की थी।"
    },
    {
        question: "किस सातवाहन शासक को 'दक्षिणापथ स्वामी' कहा जाता था?",
        answers: shuffle([
            { text: "सिमुक", correct: false },
            { text: "सातकर्णी प्रथम", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: true },
            { text: "हाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतमीपुत्र सातकर्णी ने दक्कन (दक्षिणापथ) में एक विशाल साम्राज्य की स्थापना की, इसलिए उसे 'दक्षिणापथ स्वामी' की उपाधि दी गई थी।"
    },
    {
        question: "शुंग काल के दौरान निर्मित भरहुत स्तूप का संबंध किस धर्म से है?",
        answers: shuffle([
            { text: "जैन धर्म", correct: false },
            { text: "बौद्ध धर्म", correct: true },
            { text: "शैव धर्म", correct: false },
            { text: "वैष्णव धर्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भरहुत स्तूप, जिसे शुंग काल में पुनर्निर्मित किया गया था, बौद्ध धर्म से संबंधित है और इसकी मूर्तियों में जातक कथाओं का चित्रण है।"
    },
    {
        question: "कण्व वंश के कितने शासकों ने शासन किया?",
        answers: shuffle([
            { text: "दो", correct: false },
            { text: "तीन", correct: false },
            { text: "चार", correct: true },
            { text: "पांच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कण्व वंश में कुल चार शासक थे: वासुदेव, भूमिमित्र, नारायण और सुशर्मन।"
    },
    {
        question: "सातवाहन काल में 'श्रेणी' नामक संस्था का क्या कार्य था?",
        answers: shuffle([
            { text: "सैन्य संगठन", correct: false },
            { text: "धार्मिक परिषद", correct: false },
            { text: "व्यापारिक और औद्योगिक संघ", correct: true },
            { text: "न्यायिक निकाय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'श्रेणी' कारीगरों, शिल्पकारों और व्यापारियों के संघ थे, जो अपने सदस्यों के हितों की रक्षा करते थे।"
    },
    {
        question: "शुंग वंश की राजधानी क्या थी?",
        answers: shuffle([
            { text: "पाटलिपुत्र", correct: false },
            { text: "विदिशा", correct: true },
            { text: "कन्नौज", correct: false },
            { text: "प्रतिष्ठान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुष्यमित्र शुंग ने अपनी राजधानी पाटलिपुत्र से विदिशा स्थानांतरित की।"
    },
    {
        question: "किस सातवाहन शासक ने शक राजा नहपान को हराया और 'नहपान का अंत करने वाला' की उपाधि धारण की?",
        answers: shuffle([
            { text: "सिमुक", correct: false },
            { text: "सातकर्णी प्रथम", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: true },
            { text: "वशिष्ठीपुत्र पुलुमावी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतमीपुत्र सातकर्णी ने शक शासक नहपान को युद्ध में पराजित किया और उसके सिक्कों को फिर से जारी करवाया, जिससे उसकी इस उपाधि का प्रमाण मिलता है।"
    },
    {
        question: "सातवाहन साम्राज्य में किस प्रकार के सिक्कों का प्रचलन अधिक था?",
        answers: shuffle([
            { text: "सोने के सिक्के", correct: false },
            { text: "चांदी के सिक्के", correct: false },
            { text: "सीसे और पोटीन के सिक्के", correct: true },
            { text: "तांबे के सिक्के", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सातवाहन शासकों ने मुख्य रूप से सीसे और पोटीन के सिक्के जारी किए, जो उनकी आर्थिक व्यवस्था की एक विशिष्ट विशेषता थी।"
    },
    {
        question: "शुंग काल में वैदिक धर्म के पुनरुत्थान का प्रमाण किस यज्ञ से मिलता है?",
        answers: shuffle([
            { text: "राजसूय यज्ञ", correct: false },
            { text: "अश्वमेध यज्ञ", correct: true },
            { text: "वाजपेयी यज्ञ", correct: false },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुष्यमित्र शुंग द्वारा करवाए गए दो अश्वमेध यज्ञों को वैदिक धर्म की वापसी का प्रतीक माना जाता है।"
    },
    {
        question: "सातवाहन काल में 'अहार' क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का कर", correct: false },
            { text: "एक प्रकार की भूमि", correct: false },
            { text: "एक जिला", correct: true },
            { text: "एक व्यापारिक मार्ग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अहार' सातवाहन प्रशासन की एक महत्वपूर्ण इकाई थी, जो आधुनिक जिले के समान थी।"
    },
    {
        question: "किस शुंग शासक के शासनकाल में हेलियोडोरस नामक यूनानी राजदूत आया था?",
        answers: shuffle([
            { text: "पुष्यमित्र शुंग", correct: false },
            { text: "अग्निमित्र", correct: false },
            { text: "भागभद्र", correct: true },
            { text: "देवभूति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेलियोडोरस शुंग शासक भागभद्र के दरबार में आया था और उसने विदिशा में प्रसिद्ध गरुड़ स्तंभ की स्थापना की थी।"
    },
    {
        question: "सातवाहन शासकों की राजभाषा क्या थी?",
        answers: shuffle([
            { text: "संस्कृत", correct: false },
            { text: "पाली", correct: false },
            { text: "प्राकृत", correct: true },
            { text: "तमिल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सातवाहन शासकों ने प्राकृत भाषा को अपनी राजभाषा बनाया।<br><br><i class='fa-solid fa-angles-right icon'></i> उनके सभी अभिलेख और साहित्यिक रचनाएं प्राकृत में हैं।"
    },
    {
        question: "कण्व वंश का अंतिम शासक सुशर्मन की हत्या किसने की थी?",
        answers: shuffle([
            { text: "वासुदेव", correct: false },
            { text: "सिमुक", correct: true },
            { text: "सातकर्णी प्रथम", correct: false },
            { text: "हाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सातवाहन वंश के संस्थापक सिमुक ने कण्व वंश के अंतिम शासक सुशर्मन को मारकर सत्ता हासिल की।"
    },
    {
        question: "सातवाहन शासकों को 'आंध्र' के नाम से भी जाना जाता है, इसका उल्लेख किस स्रोत में मिलता है?",
        answers: shuffle([
            { text: "जैन ग्रंथ", correct: false },
            { text: "बौद्ध ग्रंथ", correct: false },
            { text: "पुराण", correct: true },
            { text: "यूनानी लेख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुराणों में सातवाहन शासकों को 'आंध्र' या 'आंध्र-भृत्य' कहा गया है।"
    },
    {
        question: "'महाभाष्य' नामक ग्रंथ किसने लिखा था?",
        answers: shuffle([
            { text: "कालिदास", correct: false },
            { text: "पतंजलि", correct: true },
            { text: "बाणभट्ट", correct: false },
            { text: "अश्वघोष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पतंजलि ने 'महाभाष्य' नामक व्याकरण ग्रंथ की रचना की थी, जो पुष्यमित्र शुंग के शासनकाल के दौरान रचित था।"
    },
    {
        question: "किस शासक को 'त्रि-समुद्र-तोय-पीत-वाहन' की उपाधि मिली थी?",
        answers: shuffle([
            { text: "सातकर्णी प्रथम", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: true },
            { text: "यज्ञश्री सातकर्णी", correct: false },
            { text: "वशिष्ठीपुत्र पुलुमावी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतमीपुत्र सातकर्णी ने अपने साम्राज्य को तीनों समुद्रों (बंगाल की खाड़ी, अरब सागर और हिंद महासागर) तक फैलाया था, इसलिए उसे यह उपाधि दी गई थी।"
    },
    {
        question: "शुंग काल में निर्मित सांची स्तूप के तोरण द्वारों पर किस लिपि में अभिलेख पाए गए हैं?",
        answers: shuffle([
            { text: "खरोष्ठी", correct: false },
            { text: "ग्रीक", correct: false },
            { text: "ब्राह्मी", correct: true },
            { text: "देवनागरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सांची स्तूप के तोरण द्वारों पर ब्राह्मी लिपि में कई अभिलेख उत्कीर्ण हैं।"
    },
    {
        question: "सातवाहन काल में 'ग्रामिक' नामक अधिकारी का क्या कार्य था?",
        answers: shuffle([
            { text: "गाँव के प्रशासन का प्रमुख", correct: true },
            { text: "सेना का कमांडर", correct: false },
            { text: "न्याय अधिकारी", correct: false },
            { text: "राजस्व संग्राहक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ग्रामिक' सातवाहन प्रशासन में गाँव का प्रमुख होता था, जो गाँव की कानून-व्यवस्था और राजस्व संग्रह की देखरेख करता था।"
    },
    {
        question: "शुंग वंश का अंतिम शासक कौन था?",
        answers: shuffle([
            { text: "पुष्यमित्र शुंग", correct: false },
            { text: "अग्निमित्र", correct: false },
            { text: "देवभूति", correct: true },
            { text: "वासुदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> देवभूति शुंग वंश का अंतिम शासक था, जिसकी हत्या उसके मंत्री वासुदेव ने की थी।"
    },
    {
        question: "किस सातवाहन शासक ने अपनी माता के नाम पर 'गौतमीपुत्र' की उपाधि धारण की?",
        answers: shuffle([
            { text: "सिमुक", correct: false },
            { text: "सातकर्णी प्रथम", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: true },
            { text: "वशिष्ठीपुत्र पुलुमावी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतमीपुत्र सातकर्णी ने अपनी माँ गौतमी बलश्री के नाम पर अपनी पहचान स्थापित की, जो उस समाज में महिलाओं के महत्वपूर्ण स्थान को दर्शाता है।"
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