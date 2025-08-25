const questions = [
    {
        topHeading: "ब्राह्मण साम्राज्य पर आधारित बहुविकल्पी प्रश्न part 2 (quiz_no.70)"
    },
    {
        question: "किस सातवाहन शासक ने शक राजा नहपान को हराकर उसके सिक्कों को फिर से जारी किया था?",
        answers: shuffle([
            { text: "सिमुक", correct: false },
            { text: "सातकर्णी प्रथम", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: true },
            { text: "वशिष्ठीपुत्र पुलुमावी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतमीपुत्र सातकर्णी ने पश्चिमी क्षत्रपों (शकों) के शासक नहपान को हराया और उसके सिक्कों पर अपना नाम उत्कीर्ण करके उन्हें फिर से जारी करवाया।"
    },
    {
        question: "सातवाहन काल में 'गुलमिका' नामक अधिकारी का क्या कार्य था?",
        answers: shuffle([
            { text: "गाँव के प्रशासन का प्रमुख", correct: false },
            { text: "सेना के एक छोटे दल का प्रमुख", correct: true },
            { text: "राजस्व संग्रह का प्रमुख", correct: false },
            { text: "व्यापारिक गतिविधियों का पर्यवेक्षक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गुलमिका' सातवाहन प्रशासन में एक अधिकारी था, जो एक गाँव या एक छोटे सैनिक दल (लगभग 9 रथ, 9 हाथी, 25 घोड़े और 45 पैदल सैनिक) का प्रमुख होता था।"
    },
    {
        question: "किस शुंग शासक के शासनकाल में यवनों (यूनानियों) ने पाटलिपुत्र तक आक्रमण किया था?",
        answers: shuffle([
            { text: "पुष्यमित्र शुंग", correct: true },
            { text: "अग्निमित्र", correct: false },
            { text: "वासुमित्र", correct: false },
            { text: "देवभूति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पतंजलि के 'महाभाष्य' और गार्गी संहिता में इस बात का उल्लेख है कि पुष्यमित्र शुंग के शासनकाल में यवनों (मिनांडर के नेतृत्व में) ने पाटलिपुत्र तक आक्रमण किया था, जिसे पुष्यमित्र ने सफलतापूर्वक विफल किया।"
    },
    {
        question: "शुंग काल में मूर्तिकला का सबसे प्रसिद्ध उदाहरण कौन सा है?",
        answers: shuffle([
            { text: "मथुरा की मूर्तियाँ", correct: false },
            { text: "गांधार की मूर्तियाँ", correct: false },
            { text: "भरहुत की मूर्तियाँ", correct: true },
            { text: "एलोरा की मूर्तियाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भरहुत स्तूप की वेदिकाओं पर उत्कीर्ण मूर्तियाँ शुंग काल की मूर्तिकला का एक उत्कृष्ट उदाहरण हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इनमें जातक कथाओं और यक्ष-यक्षिणियों का चित्रण है।"
    },
    {
        question: "सातवाहन वंश का वह कौन सा शासक था जिसने 'एक ब्राह्मण' (एका ब्राह्मण) की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "सिमुक", correct: false },
            { text: "सातकर्णी प्रथम", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: true },
            { text: "हाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नासिक प्रशस्ति में गौतमीपुत्र सातकर्णी को 'एक ब्राह्मण' कहा गया है, जिसका अर्थ है अद्वितीय ब्राह्मण या ब्राह्मणों का एकमात्र रक्षक।"
    },
    {
        question: "किस सातवाहन शासक ने 'महाराज' की उपाधि धारण की और दो अश्वमेध यज्ञ करवाए थे?",
        answers: shuffle([
            { text: "सिमुक", correct: false },
            { text: "सातकर्णी प्रथम", correct: true },
            { text: "गौतमीपुत्र सातकर्णी", correct: false },
            { text: "यज्ञश्री सातकर्णी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सातवाहन वंश के तीसरे शासक सातकर्णी प्रथम ने अपने साम्राज्य का विस्तार किया और दो अश्वमेध यज्ञ और एक राजसूय यज्ञ करवाया था।"
    },
    {
        question: "सातवाहन साम्राज्य का पतन किसके बाद हुआ?",
        answers: shuffle([
            { text: "गौतमीपुत्र सातकर्णी", correct: false },
            { text: "वशिष्ठीपुत्र पुलुमावी", correct: false },
            { text: "यज्ञश्री सातकर्णी", correct: false },
            { text: "पुलुमावी चतुर्थ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुलुमावी चतुर्थ को सातवाहन वंश का अंतिम शासक माना जाता है, जिसके बाद यह साम्राज्य छोटे-छोटे राज्यों में विभाजित हो गया।"
    },
    {
        question: "सातवाहन काल में 'बलि' और 'भाग' नामक कर किस पर लगाए जाते थे?",
        answers: shuffle([
            { text: "व्यापार पर", correct: false },
            { text: "भूमि पर", correct: true },
            { text: "धार्मिक गतिविधियों पर", correct: false },
            { text: "आयात पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बलि' और 'भाग' सातवाहन प्रशासन में भूमि पर लगाए जाने वाले प्रमुख कर थे।"
    },
    {
        question: "शुंग शासकों ने किस धर्म को पुनर्जीवित किया?",
        answers: shuffle([
            { text: "बौद्ध धर्म", correct: false },
            { text: "जैन धर्म", correct: false },
            { text: "वैदिक धर्म", correct: true },
            { text: "शैव धर्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुंग शासक ब्राह्मण थे, और उनके शासनकाल में वैदिक अनुष्ठानों और परंपराओं को पुनर्जीवित किया गया, जैसे अश्वमेध यज्ञ।"
    },
    {
        question: "सातवाहन काल में कौन सा बंदरगाह पूर्वी तट पर प्रमुख व्यापारिक केंद्र था?",
        answers: shuffle([
            { text: "भरुच", correct: false },
            { text: "मुजिरिस", correct: false },
            { text: "अरिकामेडु", correct: true },
            { text: "कल्याण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरिकामेडु (आधुनिक पुडुचेरी में) पूर्वी तट पर सातवाहन साम्राज्य का एक महत्वपूर्ण व्यापारिक केंद्र था, जहाँ रोमन साम्राज्य के साथ व्यापार होता था।"
    },
    {
        question: "शुंग वंश का अंतिम शासक कौन था, जिसकी हत्या उसके अमात्य वासुदेव ने की थी?",
        answers: shuffle([
            { text: "पुष्यमित्र शुंग", correct: false },
            { text: "अग्निमित्र", correct: false },
            { text: "वासुमित्र", correct: false },
            { text: "देवभूति", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> देवभूति शुंग वंश का अंतिम शासक था, जिसे उसके अमात्य वासुदेव ने मारकर कण्व वंश की स्थापना की थी।"
    },
    {
        question: "किस शासक ने अपनी माँ गौतमी बलश्री के नाम पर अपनी पहचान बनाई?",
        answers: shuffle([
            { text: "सातकर्णी प्रथम", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: true },
            { text: "वशिष्ठीपुत्र पुलुमावी", correct: false },
            { text: "हाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सातवाहन शासक गौतमीपुत्र सातकर्णी के नाम के साथ उनकी माता गौतमी बलश्री का नाम जुड़ा हुआ है, जो समाज में महिलाओं के सम्मान को दर्शाता है।"
    },
    {
        question: "सातवाहन वंश के किस शासक ने रुद्रदामन की पुत्री से विवाह किया था?",
        answers: shuffle([
            { text: "गौतमीपुत्र सातकर्णी", correct: false },
            { text: "वशिष्ठीपुत्र पुलुमावी", correct: true },
            { text: "यज्ञश्री सातकर्णी", correct: false },
            { text: "हाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वशिष्ठीपुत्र पुलुमावी ने शक शासक रुद्रदामन की पुत्री से विवाह करके वैवाहिक संबंध स्थापित किए, हालांकि रुद्रदामन ने उसे युद्ध में पराजित किया था।"
    },
    {
        question: "'अष्टाध्यायी' पर पतंजलि द्वारा रचित 'महाभाष्य' का संबंध किस काल से है?",
        answers: shuffle([
            { text: "मौर्य काल", correct: false },
            { text: "शुंग काल", correct: true },
            { text: "कण्व काल", correct: false },
            { text: "सातवाहन काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पतंजलि ने 'महाभाष्य' की रचना शुंग शासक पुष्यमित्र शुंग के शासनकाल के दौरान की थी।"
    },
    {
        question: "किस सातवाहन शासक ने 'दक्षिणपथ स्वामी' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "सिमुक", correct: false },
            { text: "सातकर्णी प्रथम", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: true },
            { text: "हाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतमीपुत्र सातकर्णी को 'दक्षिणपथ स्वामी' (दक्षिण के स्वामी) की उपाधि से विभूषित किया गया था क्योंकि उसने दक्कन में एक विशाल साम्राज्य की स्थापना की थी।"
    },
    {
        question: "शुंग काल में भरहुत स्तूप की वेदिकाओं पर उत्कीर्ण लेख किस लिपि में हैं?",
        answers: shuffle([
            { text: "देवनागरी", correct: false },
            { text: "खरोष्ठी", correct: false },
            { text: "ब्राह्मी", correct: true },
            { text: "पाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भरहुत स्तूप की वेदिकाओं पर उत्कीर्ण अभिलेख ब्राह्मी लिपि में हैं, जो शुंग काल की भाषा और लिपि की जानकारी देते हैं।"
    },
    {
        question: "सातवाहन शासकों ने अपने अधिकांश अभिलेखों में किस भाषा का प्रयोग किया?",
        answers: shuffle([
            { text: "संस्कृत", correct: false },
            { text: "प्राकृत", correct: true },
            { text: "तमिल", correct: false },
            { text: "तेलुगु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सातवाहन शासकों ने अपने अभिलेखों और सिक्कों पर प्राकृत भाषा का उपयोग किया, जो उस समय की आम बोलचाल की भाषा थी।"
    },
    {
        question: "कण्व वंश की स्थापना किस वर्ष हुई थी?",
        answers: shuffle([
            { text: "185 ईसा पूर्व", correct: false },
            { text: "73 ईसा पूर्व", correct: true },
            { text: "60 ईसा पूर्व", correct: false },
            { text: "28 ईसा पूर्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कण्व वंश की स्थापना 73 ईसा पूर्व में हुई थी, जब वासुदेव ने शुंग वंश के अंतिम शासक देवभूति की हत्या की थी।"
    },
    {
        question: "सातवाहन शासकों ने किस प्रकार के भूमि अनुदान दिए थे?",
        answers: shuffle([
            { text: "सैन्य अधिकारियों को", correct: false },
            { text: "ब्राह्मणों और बौद्ध भिक्षुओं को", correct: true },
            { text: "व्यापारियों को", correct: false },
            { text: "किसानों को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सातवाहन शासकों ने ब्राह्मणों और बौद्ध भिक्षुओं को कर-मुक्त भूमि अनुदान दिए, जिससे सामंती व्यवस्था की शुरुआत हुई।"
    },
    {
        question: "किस पुराण में शुंग वंश के शासकों का उल्लेख मिलता है?",
        answers: shuffle([
            { text: "विष्णु पुराण", correct: false },
            { text: "मत्स्य पुराण", correct: false },
            { text: "वायु पुराण", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुंग वंश के बारे में जानकारी विभिन्न पुराणों, जैसे मत्स्य, वायु और ब्रह्माण्ड पुराणों में मिलती है।"
    },
    {
        question: "सातवाहन काल में 'निगम सभा' क्या थी?",
        answers: shuffle([
            { text: "एक राजनीतिक संस्था", correct: false },
            { text: "एक सैन्य इकाई", correct: false },
            { text: "एक व्यापारिक गिल्ड", correct: true },
            { text: "एक धार्मिक सभा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निगम सभा' सातवाहन काल में व्यापारियों और कारीगरों की एक सभा या गिल्ड थी, जो व्यापारिक गतिविधियों को नियंत्रित करती थी।"
    },
    {
        question: "सातवाहन शासक गौतमीपुत्र सातकर्णी ने किस क्षेत्र के राजाओं को हराया था?",
        answers: shuffle([
            { text: "मालवा और सौराष्ट्र", correct: true },
            { text: "मगध और कलिंग", correct: false },
            { text: "पंजाब और सिंध", correct: false },
            { text: "उपरोक्त में से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतमीपुत्र सातकर्णी ने शक शासक नहपान को हराकर मालवा, सौराष्ट्र और उत्तरी महाराष्ट्र पर नियंत्रण स्थापित किया था।"
    },
    {
        question: "शुंग काल में विदिशा का शासक कौन था?",
        answers: shuffle([
            { text: "पुष्यमित्र शुंग", correct: false },
            { text: "अग्निमित्र", correct: true },
            { text: "देवभूति", correct: false },
            { text: "वासुदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मालविकाग्निमित्रम्' के अनुसार, पुष्यमित्र शुंग ने अपने पुत्र अग्निमित्र को विदिशा का राज्यपाल नियुक्त किया था।"
    },
    {
        question: "सातवाहन काल के दौरान किस विदेशी शक्ति ने भारतीय उपमहाद्वीप के पश्चिमी और दक्षिणी हिस्सों में व्यापार किया?",
        answers: shuffle([
            { text: "यूनानी", correct: false },
            { text: "रोमन", correct: true },
            { text: "चीनी", correct: false },
            { text: "फारसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सातवाहन काल में रोमन साम्राज्य के साथ बड़े पैमाने पर व्यापार होता था, जिसका प्रमाण रोमन सिक्कों की बड़ी संख्या में खोजों से मिलता है।"
    },
    {
        question: "'गाथासप्तशती' नामक ग्रंथ का संबंध किससे है?",
        answers: shuffle([
            { text: "राजनीति और प्रशासन", correct: false },
            { text: "प्रेम और श्रृंगार", correct: true },
            { text: "धर्म और दर्शन", correct: false },
            { text: "खगोल विज्ञान", correct: false }
        ]),
        Explanation:"<i class='fa-solid fa-angles-right icon'></i> 'गाथासप्तशती' प्राकृत भाषा में लिखी गई 700 कविताओं का एक संग्रह है, जो प्रेम और श्रृंगार पर आधारित है।"
    },
    {
        question: "किस शुंग शासक के शासनकाल में सांची स्तूप के चारों ओर तोरण द्वार और वेदिका (रेलिंग) का निर्माण हुआ?",
        answers: shuffle([
            { text: "पुष्यमित्र शुंग", correct: true },
            { text: "अग्निमित्र", correct: false },
            { text: "वासुमित्र", correct: false },
            { text: "देवभूति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सांची के महान स्तूप के चारों ओर तोरण द्वारों और पत्थर की वेदिका का निर्माण शुंग काल में हुआ था।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि कुछ विद्वान पुष्यमित्र को बौद्ध विरोधी मानते हैं, लेकिन इन निर्माणों से पता चलता है कि बौद्ध धर्म को संरक्षण दिया गया था।"
    },
    {
        question: "सातवाहन काल में 'अहार' क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का कर", correct: false },
            { text: "एक प्रकार की भूमि", correct: false },
            { text: "एक प्रशासनिक इकाई", correct: true },
            { text: "एक धार्मिक अनुष्ठान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अहार' सातवाहन प्रशासन में एक जिले के बराबर एक प्रशासनिक इकाई थी, जो साम्राज्य को सुचारू रूप से चलाने के लिए बनाई गई थी।"
    },
    {
        question: "किस सातवाहन शासक ने शक राजाओं को हराया और 'त्रि-समुद्र-तोय-पीत-वाहन' की उपाधि धारण की?",
        answers: shuffle([
            { text: "सातकर्णी प्रथम", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: true },
            { text: "वशिष्ठीपुत्र पुलुमावी", correct: false },
            { text: "यज्ञश्री सातकर्णी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतमीपुत्र सातकर्णी ने अपने साम्राज्य को तीनों समुद्रों (बंगाल की खाड़ी, अरब सागर और हिंद महासागर) तक फैलाया।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए उसे 'त्रि-समुद्र-तोय-पीत-वाहन' (जिसके घोड़े ने तीनों समुद्रों का पानी पिया हो) कहा गया।"
    },
    {
        question: "कण्व वंश के किस शासक ने वासुदेव के बाद शासन किया?",
        answers: shuffle([
            { text: "देवभूति", correct: false },
            { text: "भूमिमित्र", correct: true },
            { text: "नारायण", correct: false },
            { text: "सुशर्मन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वासुदेव के बाद, उसका पुत्र भूमिमित्र कण्व वंश का दूसरा शासक बना।"
    },
    {
        question: "'इंडो-ग्रीक' कला और वास्तुकला की विशेषता किस काल में प्रमुख थी?",
        answers: shuffle([
            { text: "शुंग काल", correct: false },
            { text: "सातवाहन काल", correct: false },
            { text: "मौर्य काल", correct: false },
            { text: "यह कला शैली शुंग और सातवाहन काल के बाद विकसित हुई।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंडो-ग्रीक कला, जिसे गांधार कला भी कहा जाता है, कुषाण काल में विकसित हुई थी, जो शुंग और सातवाहन काल के बाद आता है।"
    },
    {
        question: "किस शुंग शासक ने दो अश्वमेध यज्ञ करवाए थे, जिसकी जानकारी अयोध्या शिलालेख से मिलती है?",
        answers: shuffle([
            { text: "पुष्यमित्र शुंग", correct: true },
            { text: "अग्निमित्र", correct: false },
            { text: "वासुदेव", correct: false },
            { text: "वासुमित्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुष्यमित्र शुंग ने अपनी सफलताओं के उपलक्ष्य में दो अश्वमेध यज्ञ करवाए थे।<br><br><i class='fa-solid fa-angles-right icon'></i> इस बात का प्रमाण अयोध्या के धनदेव के शिलालेख से मिलता है।"
    },
    {
        question: "सातवाहन साम्राज्य की स्थापना का श्रेय किसे दिया जाता है?",
        answers: shuffle([
            { text: "सिमुक", correct: true },
            { text: "सातकर्णी प्रथम", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: false },
            { text: "हाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिमुक ने कण्व वंश के अंतिम शासक सुशर्मन की हत्या करके सातवाहन वंश की स्थापना की।"
    },
    {
        question: "सातवाहन काल में 'गलमिक' नामक अधिकारी का मुख्य कार्य क्या था?",
        answers: shuffle([
            { text: "राजस्व संग्रह", correct: false },
            { text: "गाँव का प्रशासन", correct: false },
            { text: "सैन्य टुकड़ी का नेतृत्व", correct: true },
            { text: "न्याय करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गलमिक' एक अधिकारी था जो सेना के एक छोटे दल (लगभग 9 रथ, 9 हाथी, 25 घोड़े और 45 पैदल सैनिक) का नेतृत्व करता था।"
    },
    {
        question: "शुंग काल में वैदिक धर्म के पुनरुत्थान के प्रतीक के रूप में कौन सा यज्ञ महत्वपूर्ण था?",
        answers: shuffle([
            { text: "राजसूय यज्ञ", correct: false },
            { text: "वाजपेयी यज्ञ", correct: false },
            { text: "अश्वमेध यज्ञ", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुष्यमित्र शुंग द्वारा करवाए गए दो अश्वमेध यज्ञों को शुंग काल में वैदिक धर्म के पुनरुत्थान का एक प्रमुख प्रतीक माना जाता है।"
    },
    {
        question: "किस सातवाहन शासक के सिक्कों पर जहाज के चित्र उत्कीर्ण हैं?",
        answers: shuffle([
            { text: "सातकर्णी प्रथम", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: false },
            { text: "यज्ञश्री सातकर्णी", correct: true },
            { text: "वशिष्ठीपुत्र पुलुमावी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यज्ञश्री सातकर्णी के शासनकाल में समुद्री व्यापार अपने चरम पर था, जिसके प्रमाण उसके सिक्कों पर बने जहाज के चित्रों से मिलते हैं।"
    },
    {
        question: "कण्व वंश के कितने शासकों ने शासन किया?",
        answers: shuffle([
            { text: "दो", correct: false },
            { text: "तीन", correct: false },
            { text: "चार", correct: true },
            { text: "पांच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कण्व वंश के चार शासकों ने कुल 45 वर्षों तक शासन किया: वासुदेव, भूमिमित्र, नारायण और सुशर्मन।"
    },
    {
        question: "शुंग काल की वास्तुकला का उदाहरण कौन सा है?",
        answers: shuffle([
            { text: "अमरावती स्तूप", correct: false },
            { text: "सांची स्तूप", correct: true },
            { text: "एलीफेंटा की गुफाएं", correct: false },
            { text: "अजंता की गुफाएं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सांची के स्तूपों के चारों ओर की वेदिका और तोरण द्वार शुंग काल की वास्तुकला के उत्कृष्ट उदाहरण हैं।"
    },
    {
        question: "'गाथासप्तशती' नामक ग्रंथ की रचना किस भाषा में हुई थी?",
        answers: shuffle([
            { text: "संस्कृत", correct: false },
            { text: "प्राकृत", correct: true },
            { text: "पाली", correct: false },
            { text: "तमिल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सातवाहन शासक हाल ने प्राकृत भाषा में 'गाथासप्तशती' नामक ग्रंथ की रचना की थी।"
    },
    {
        question: "शुंग वंश का अंतिम शासक देवभूति की हत्या किस वर्ष हुई थी?",
        answers: shuffle([
            { text: "185 ईसा पूर्व", correct: false },
            { text: "73 ईसा पूर्व", correct: true },
            { text: "60 ईसा पूर्व", correct: false },
            { text: "28 ईसा पूर्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> देवभूति की हत्या 73 ईसा पूर्व में हुई थी, जिसके बाद कण्व वंश की स्थापना हुई।"
    },
    {
        question: "सातवाहन काल में 'कटक' और 'स्कंधावर' क्या थे?",
        answers: shuffle([
            { text: "कर के प्रकार", correct: false },
            { text: "सैन्य शिविर", correct: true },
            { text: "प्रशासनिक इकाइयां", correct: false },
            { text: "धार्मिक स्थल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सातवाहन काल में 'कटक' (Cantonment) और 'स्कंधावर' (military camp) सैन्य शिविर थे, जिनका उपयोग सेना के लिए किया जाता था।"
    },
    {
        question: "शुंग काल में कौन सा विदेशी राजदूत आया था जिसने वैष्णव धर्म अपनाया?",
        answers: shuffle([
            { text: "मेगस्थनीज", correct: false },
            { text: "हेलियोडोरस", correct: true },
            { text: "डायोनिसियस", correct: false },
            { text: "टॉलेमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेलियोडोरस, एक ग्रीक राजदूत, शुंग शासक भागभद्र के दरबार में आया था और उसने वैष्णव धर्म अपनाकर गरुड़ स्तंभ की स्थापना की।"
    },
    {
        question: "किस सातवाहन शासक ने पश्चिमी क्षत्रप शासकों को हराकर 'अंधकारक' (अंधकार को दूर करने वाला) की उपाधि धारण की?",
        answers: shuffle([
            { text: "गौतमीपुत्र सातकर्णी", correct: true },
            { text: "वशिष्ठीपुत्र पुलुमावी", correct: false },
            { text: "सातकर्णी प्रथम", correct: false },
            { text: "हाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतमीपुत्र सातकर्णी ने शक शासक नहपान को हराकर उसके साम्राज्य से अंधकार को दूर करने का दावा किया था, इसलिए उसे 'अंधकारक' भी कहा गया।"
    },
    {
        question: "'पुष्यमित्र की राजधानी' शीर्षक से लिखे गए एक नाटक का पात्र कौन है?",
        answers: shuffle([
            { text: "अग्निमित्र", correct: true },
            { text: "वासुमित्र", correct: false },
            { text: "पुष्यमित्र", correct: false },
            { text: "देवभूति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मालविकाग्निमित्रम्' में अग्निमित्र को विदिशा का शासक दिखाया गया है, जो उसके पिता पुष्यमित्र की राजधानी के रूप में कार्य करता था।"
    },
    {
        question: "सातवाहन काल में 'कोली-निगम' क्या था?",
        answers: shuffle([
            { text: "बुनकरों का संघ", correct: true },
            { text: "किसानों का संघ", correct: false },
            { text: "मछुआरों का संघ", correct: false },
            { text: "व्यापारियों का संघ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कोली-निगम' सातवाहन काल में बुनकरों का एक शक्तिशाली संघ या गिल्ड था।"
    },
    {
        question: "शुंग वंश की स्थापना किस नदी के तट पर हुई थी?",
        answers: shuffle([
            { text: "गंगा", correct: true },
            { text: "यमुना", correct: false },
            { text: "सोन", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुंग वंश की स्थापना मगध क्षेत्र में हुई थी, जिसकी राजधानी पाटलिपुत्र गंगा नदी के किनारे थी, हालांकि बाद में राजधानी विदिशा स्थानांतरित कर दी गई।"
    },
    {
        question: "सातवाहन साम्राज्य में 'राजकीय भू-अनुदान' का उल्लेख सबसे पहले किस शासक के अभिलेखों में मिलता है?",
        answers: shuffle([
            { text: "सिमुक", correct: false },
            { text: "सातकर्णी प्रथम", correct: true },
            { text: "गौतमीपुत्र सातकर्णी", correct: false },
            { text: "हाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सातकर्णी प्रथम के नानाघाट अभिलेखों में सबसे पहले भूमि अनुदान का उल्लेख मिलता है, जो ब्राह्मणों और बौद्धों को दिया गया था।"
    },
    {
        question: "शुंग काल में निर्मित भरहुत स्तूप का स्थान कहाँ है?",
        answers: shuffle([
            { text: "बिहार", correct: false },
            { text: "उत्तर प्रदेश", correct: false },
            { text: "मध्य प्रदेश", correct: true },
            { text: "महाराष्ट्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भरहुत स्तूप आधुनिक मध्य प्रदेश के सतना जिले में स्थित है।"
    },
    {
        question: "कण्व वंश का शासनकाल किस शासक की हत्या के साथ समाप्त हुआ?",
        answers: shuffle([
            { text: "वासुदेव", correct: false },
            { text: "भूमिमित्र", correct: false },
            { text: "नारायण", correct: false },
            { text: "सुशर्मन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कण्व वंश का अंतिम शासक सुशर्मन था, जिसकी हत्या सातवाहन शासक सिमुक ने की थी।"
    },
    {
        question: "सातवाहन काल में किस प्रकार के सिक्कों का उपयोग अधिक होता था?",
        answers: shuffle([
            { text: "सोने के सिक्के", correct: false },
            { text: "चांदी के सिक्के", correct: false },
            { text: "तांबे और कांसे के सिक्के", correct: false },
            { text: "सीसे और पोटीन के सिक्के", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सातवाहन शासकों ने मुख्य रूप से सीसे और पोटीन (तांबे और टिन का मिश्रण) के सिक्के जारी किए थे।"
    },
    {
        question: "किस प्राचीन भारतीय शासक को 'द्वि-वंशज' कहा जाता है?",
        answers: shuffle([
            { text: "पुष्यमित्र शुंग", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: true },
            { text: "वासुदेव", correct: false },
            { text: "हाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतमीपुत्र सातकर्णी को 'द्वि-वंशज' कहा जाता था क्योंकि उसने अपनी माता गौतमी बलश्री के नाम के साथ-साथ अपने पिता का भी नाम धारण किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह सामाजिक व्यवस्था में उनके विशेष स्थान को दर्शाता है।"
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