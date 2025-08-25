const questions = [
    {
        topHeading: "ब्राह्मण साम्राज्य पर आधारित बहुविकल्पी प्रश्न part 3 (quiz_no.71)"
    },
    {
        question: "शुंग काल में निर्मित भरहुत स्तूप की मूर्तिकला में कौन से विषयों का चित्रण है?",
        answers: shuffle([
            { text: "केवल यक्ष और यक्षिणी", correct: false },
            { text: "जातक कथाएँ और बुद्ध के जीवन की घटनाएँ", correct: true },
            { text: "केवल राजा और रानियों का जीवन", correct: false },
            { text: "ग्रीक और रोमन देवी-देवता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भरहुत स्तूप की वेदिकाओं और तोरणद्वारों पर जातक कथाओं और बुद्ध के जीवन से संबंधित महत्वपूर्ण घटनाओं का चित्रण मिलता है।"
    },
    {
        question: "सातवाहन काल में 'कटका' और 'स्कंधावर' क्या थे?",
        answers: shuffle([
            { text: "प्रशासनिक इकाइयाँ", correct: false },
            { text: "सैन्य शिविर", correct: true },
            { text: "व्यापारिक केंद्र", correct: false },
            { text: "धार्मिक स्थल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कटका' (छावनी) और 'स्कंधावर' (सैन्य शिविर) सातवाहन साम्राज्य के सैन्य संगठन का हिस्सा थे, जो युद्ध या अभियानों के दौरान स्थापित किए जाते थे।"
    },
    {
        question: "किस सातवाहन शासक ने शक राजा नहपान को हराया और 'वेनकतक स्वामी' की उपाधि धारण की?",
        answers: shuffle([
            { text: "सातकर्णी प्रथम", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: true },
            { text: "वशिष्ठीपुत्र पुलुमावी", correct: false },
            { text: "यज्ञश्री सातकर्णी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतमीपुत्र सातकर्णी ने शक शासक नहपान को हराकर 'वेनकतक स्वामी' की उपाधि धारण की, जिसका अर्थ है वेनकतक शहर का स्वामी।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने नासिक के पास एक नए शहर की स्थापना की थी।"
    },
    {
        question: "शुंग वंश का अंतिम शासक देवभूति की हत्या किसने की?",
        answers: shuffle([
            { text: "सिमुक", correct: false },
            { text: "वासुदेव", correct: true },
            { text: "पुष्यमित्र शुंग", correct: false },
            { text: "अग्निमित्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> देवभूति, जो शुंग वंश का अंतिम शासक था, को उसके मंत्री वासुदेव ने मारकर कण्व वंश की नींव रखी।"
    },
    {
        question: "'गाथासप्तशती' नामक ग्रंथ की रचना किस सातवाहन शासक ने की थी?",
        answers: shuffle([
            { text: "गौतमीपुत्र सातकर्णी", correct: false },
            { text: "सातकर्णी प्रथम", correct: false },
            { text: "हाल", correct: true },
            { text: "वशिष्ठीपुत्र पुलुमावी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सातवाहन वंश के 17वें शासक हाल ने प्राकृत भाषा में 'गाथासप्तशती' नामक एक महत्वपूर्ण काव्य ग्रंथ की रचना की थी।"
    },
    {
        question: "सातवाहन काल में किस बंदरगाह का उल्लेख 'पेरिप्लस ऑफ द एरिथ्रियन सी' में मिलता है?",
        answers: shuffle([
            { text: "मुजिरिस", correct: false },
            { text: "अरिकामेडु", correct: false },
            { text: "भरुच", correct: false },
            { text: "सोपारा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पेरिप्लस ऑफ द एरिथ्रियन सी' नामक प्राचीन यूनानी ग्रंथ में सातवाहन साम्राज्य के पश्चिमी तट पर स्थित सोपारा बंदरगाह का उल्लेख मिलता है, जो रोमन व्यापार का केंद्र था।"
    },
    {
        question: "शुंग काल में निर्मित किस स्तंभ पर वैष्णव धर्म के प्रमाण मिलते हैं?",
        answers: shuffle([
            { text: "सारनाथ स्तंभ", correct: false },
            { text: "गरुड़ स्तंभ", correct: true },
            { text: "अशोक स्तंभ", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेलियोडोरस, एक यूनानी राजदूत, ने विदिशा में शुंग शासक भागभद्र के दरबार में वैष्णव धर्म के सम्मान में गरुड़ स्तंभ की स्थापना की थी।"
    },
    {
        question: "सातवाहन शासकों ने किस भाषा के साहित्य को संरक्षण दिया?",
        answers: shuffle([
            { text: "संस्कृत", correct: false },
            { text: "प्राकृत", correct: true },
            { text: "तमिल", correct: false },
            { text: "तेलुगु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सातवाहन शासकों ने प्राकृत भाषा को संरक्षण दिया।<br><br><i class='fa-solid fa-angles-right icon'></i> उनके अधिकांश अभिलेख और साहित्यिक रचनाएँ प्राकृत भाषा में हैं।"
    },
    {
        question: "सातवाहन काल में 'श्रामणिक' नामक अधिकारी का क्या कार्य था?",
        answers: shuffle([
            { text: "श्रम कानूनों का पालन कराना", correct: false },
            { text: "बौद्ध भिक्षुओं की देखरेख करना", correct: true },
            { text: "राजस्व संग्रह करना", correct: false },
            { text: "सैन्य भर्ती करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सातवाहन प्रशासन में, 'श्रामणिक' नामक अधिकारी बौद्ध भिक्षुओं और भिक्षुणियों से संबंधित मामलों की देखरेख करता था।"
    },
    {
        question: "कण्व वंश का अंतिम शासक सुशर्मन की हत्या किसने की थी?",
        answers: shuffle([
            { text: "वासुदेव", correct: false },
            { text: "सिमुक", correct: true },
            { text: "सातकर्णी प्रथम", correct: false },
            { text: "हाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिमुक, जो सातवाहन वंश का संस्थापक था, ने कण्व वंश के अंतिम शासक सुशर्मन को मारकर सत्ता हासिल की।"
    },
    {
        question: "शुंग काल में वैदिक धर्म के पुनरुत्थान के प्रतीक के रूप में कौन सा यज्ञ महत्वपूर्ण था?",
        answers: shuffle([
            { text: "वाजपेयी यज्ञ", correct: false },
            { text: "राजसूय यज्ञ", correct: false },
            { text: "अश्वमेध यज्ञ", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुष्यमित्र शुंग द्वारा करवाए गए दो अश्वमेध यज्ञों को वैदिक धर्म के पुनरुत्थान का एक प्रमुख प्रतीक माना जाता है।"
    },
    {
        question: "सातवाहन साम्राज्य में 'निगम' नामक संस्था का क्या महत्व था?",
        answers: shuffle([
            { text: "यह एक प्रशासनिक परिषद थी।", correct: false },
            { text: "यह सैन्य कमांडर का पद था।", correct: false },
            { text: "यह व्यापारियों का संघ (गिल्ड) था।", correct: true },
            { text: "यह एक धार्मिक सभा थी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निगम' सातवाहन काल में व्यापारियों का एक शक्तिशाली संगठन था, जो व्यापारिक नियमों और मूल्यों को निर्धारित करता था।"
    },
    {
        question: "किस सातवाहन शासक ने अपनी माँ के नाम पर 'गौतमीपुत्र' की उपाधि धारण की?",
        answers: shuffle([
            { text: "सिमुक", correct: false },
            { text: "सातकर्णी प्रथम", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: true },
            { text: "वशिष्ठीपुत्र पुलुमावी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतमीपुत्र सातकर्णी ने अपनी माँ गौतमी बलश्री के नाम पर अपनी पहचान स्थापित की, जो उस समाज में महिलाओं के महत्वपूर्ण स्थान को दर्शाता है।"
    },
    {
        question: "'मालविकाग्निमित्रम्' में वर्णित शुंग राजकुमार अग्निमित्र की राजधानी क्या थी?",
        answers: shuffle([
            { text: "पाटलिपुत्र", correct: false },
            { text: "विदिशा", correct: true },
            { text: "अयोध्या", correct: false },
            { text: "प्रतिष्ठान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालिदास के नाटक 'मालविकाग्निमित्रम्' के अनुसार, अग्निमित्र पुष्यमित्र शुंग का पुत्र था और विदिशा का शासक था।"
    },
    {
        question: "सातवाहन काल में 'श्रेणी' किसे कहते थे?",
        answers: shuffle([
            { text: "एक प्रकार का कर", correct: false },
            { text: "कारीगरों और शिल्पकारों का गिल्ड", correct: true },
            { text: "भूमि का एक प्रकार", correct: false },
            { text: "सैन्य इकाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'श्रेणी' सातवाहन काल में विभिन्न कारीगरों और शिल्पकारों के व्यावसायिक संघ थे, जो अपने सदस्यों के हितों की रक्षा करते थे।"
    },
    {
        question: "किस शासक को 'दक्षिणपथ स्वामी' कहा गया है?",
        answers: shuffle([
            { text: "पुष्यमित्र शुंग", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: true },
            { text: "वासुदेव", correct: false },
            { text: "हाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतमीपुत्र सातकर्णी ने दक्कन (दक्षिणापथ) में एक विशाल साम्राज्य स्थापित किया, इसलिए उसे 'दक्षिणपथ स्वामी' की उपाधि दी गई थी।"
    },
    {
        question: "शुंग काल में बौद्ध स्तूपों के निर्माण में किस सामग्री का उपयोग किया गया था?",
        answers: shuffle([
            { text: "केवल लकड़ी", correct: false },
            { text: "केवल ईंट", correct: false },
            { text: "लकड़ी और पत्थर", correct: true },
            { text: "केवल पत्थर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुंग काल में बौद्ध स्तूपों का नवीनीकरण हुआ, जिसमें लकड़ी के बाड़ों की जगह पत्थर की वेदिकाएँ और तोरण द्वार बनाए गए।<br><br><i class='fa-solid fa-angles-right icon'></i> सांची और भरहुत इसके प्रमुख उदाहरण हैं।"
    },
    {
        question: "'गाथासप्तशती' नामक ग्रंथ का संबंध किस विषय से है?",
        answers: shuffle([
            { text: "राजनीति", correct: false },
            { text: "प्रेम और श्रृंगार", correct: true },
            { text: "धर्म", correct: false },
            { text: "विज्ञान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह ग्रंथ प्राकृत भाषा में लिखा गया 700 कविताओं का संग्रह है, जिसमें ग्रामीण जीवन के प्रेम और श्रृंगार का सुंदर वर्णन है।"
    },
    {
        question: "किस सातवाहन शासक के शासनकाल में पश्चिमी क्षत्रपों (शकों) के साथ संघर्ष हुआ?",
        answers: shuffle([
            { text: "सिमुक", correct: false },
            { text: "सातकर्णी प्रथम", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: true },
            { text: "हाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतमीपुत्र सातकर्णी ने शक शासक नहपान को हराकर पश्चिमी क्षत्रपों के प्रभाव को समाप्त किया।"
    },
    {
        question: "कण्व वंश की स्थापना किस शासक ने की थी?",
        answers: shuffle([
            { text: "सिमुक", correct: false },
            { text: "वासुदेव", correct: true },
            { text: "सुशर्मन", correct: false },
            { text: "पुष्यमित्र शुंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वासुदेव ने शुंग वंश के अंतिम शासक देवभूति की हत्या करके कण्व वंश की नींव रखी।"
    },
    {
        question: "शुंग काल की किस साहित्यिक रचना में पुष्यमित्र शुंग के अश्वमेध यज्ञ का उल्लेख मिलता है?",
        answers: shuffle([
            { text: "मनुस्मृति", correct: false },
            { text: "महाभाष्य", correct: true },
            { text: "मालविकाग्निमित्रम्", correct: false },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पतंजलि के 'महाभाष्य' में पुष्यमित्र शुंग के अश्वमेध यज्ञों का उल्लेख है।"
    },
    {
        question: "सातवाहन साम्राज्य में 'गुलिका' नामक अधिकारी का क्या कार्य था?",
        answers: shuffle([
            { text: "गाँव का प्रशासक", correct: true },
            { text: "न्याय अधिकारी", correct: false },
            { text: "सैन्य अधिकारी", correct: false },
            { text: "राजस्व संग्रहकर्ता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गुलिका' या 'गुलमिका' गाँव का एक प्रमुख अधिकारी था जो प्रशासन और कानून-व्यवस्था का प्रभारी था।"
    },
    {
        question: "सातवाहन शासक गौतमीपुत्र सातकर्णी के बारे में जानकारी का मुख्य स्रोत क्या है?",
        answers: shuffle([
            { text: "मथुरा अभिलेख", correct: false },
            { text: "नासिक प्रशस्ति", correct: true },
            { text: "प्रयाग प्रशस्ति", correct: false },
            { text: "जूनागढ़ अभिलेख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नासिक प्रशस्ति, जो गौतमी बलश्री द्वारा लिखवाई गई थी, गौतमीपुत्र सातकर्णी की विजयों और उपलब्धियों का विस्तृत वर्णन करती है।"
    },
    {
        question: "शुंग वंश का अंतिम शासक देवभूति किसके द्वारा मारा गया था?",
        answers: shuffle([
            { text: "पुष्यमित्र शुंग", correct: false },
            { text: "अग्निमित्र", correct: false },
            { text: "वासुदेव", correct: true },
            { text: "सुशर्मन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वासुदेव, जो देवभूति का मंत्री था, ने उसकी हत्या कर कण्व वंश की स्थापना की।"
    },
    {
        question: "किस राजवंश को 'आंध्र' के नाम से भी जाना जाता है?",
        answers: shuffle([
            { text: "शुंग वंश", correct: false },
            { text: "कण्व वंश", correct: false },
            { text: "सातवाहन वंश", correct: true },
            { text: "वाकाटक वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुराणों में सातवाहन शासकों को 'आंध्र' के नाम से भी जाना जाता है क्योंकि उनका साम्राज्य मुख्य रूप से आंध्र क्षेत्र में फैला हुआ था।"
    },
    {
        question: "शुंग काल में निर्मित भरहुत स्तूप का स्थान कहाँ है?",
        answers: shuffle([
            { text: "बिहार", correct: false },
            { text: "मध्यप्रदेश", correct: true },
            { text: "उत्त्तर प्रदेश", correct: false },
            { text: "महाराष्ट्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भरहुत स्तूप, जो अपनी शुंगकालीन मूर्तिकला के लिए प्रसिद्ध है, मध्य प्रदेश के सतना जिले में स्थित है।"
    },
    {
        question: "किस सातवाहन शासक ने शक राजा नहपान को हराया और 'नहपान का अंत करने वाला' की उपाधि धारण की?",
        answers: shuffle([
            { text: "सिमुक", correct: false },
            { text: "सातकर्णी प्रथम", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: true },
            { text: "वशिष्ठीपुत्र पुलुमावी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतमीपुत्र सातकर्णी ने पश्चिमी क्षत्रप शासक नहपान को युद्ध में पराजित किया और उसके सिक्कों को फिर से जारी करवाया, जिससे उसकी इस उपाधि का प्रमाण मिलता है।"
    },
    {
        question: "सातवाहन काल में 'श्रेणी' नामक संस्था का क्या कार्य था?",
        answers: shuffle([
            { text: "व्यापारिक और औद्योगिक संघ", correct: true },
            { text: "सैन्य भर्ती केंद्र", correct: false },
            { text: "धार्मिक परिषद", correct: false },
            { text: "न्यायिक निकाय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'श्रेणी' कारीगरों, शिल्पकारों और व्यापारियों के संघ थे, जो अपने सदस्यों के हितों की रक्षा करते थे और व्यापार को बढ़ावा देते थे।"
    },
    {
        question: "शुंग वंश के किस शासक के शासनकाल में हेलियोडोरस नामक यूनानी राजदूत आया था?",
        answers: shuffle([
            { text: "पुष्यमित्र शुंग", correct: false },
            { text: "अग्निमित्र", correct: false },
            { text: "भागभद्र", correct: true },
            { text: "देवभूति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेलियोडोरस शुंग शासक भागभद्र के दरबार में आया था और उसने विदिशा में प्रसिद्ध गरुड़ स्तंभ की स्थापना की थी।"
    },
    {
        question: "'गाथासप्तशती' नामक प्राकृत काव्य संग्रह के लेखक कौन थे?",
        answers: shuffle([
            { text: "गौतमीपुत्र सातकर्णी", correct: false },
            { text: "सातकर्णी प्रथम", correct: false },
            { text: "हाल", correct: true },
            { text: "वशिष्ठीपुत्र पुलुमावी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सातवाहन शासक हाल ने प्राकृत भाषा में 'गाथासप्तशती' की रचना की थी, जिसमें प्रेम और श्रृंगार की कविताएं शामिल हैं।"
    },
    {
        question: "किस सातवाहन शासक को 'दक्षिणापथ स्वामी' कहा जाता था?",
        answers: shuffle([
            { text: "सिमुक", correct: false },
            { text: "सातकर्णी प्रथम", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: true },
            { text: "हाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतमीपुत्र सातकर्णी ने दक्कन (दक्षिणापथ) में एक विशाल साम्राज्य की स्थापना की, जिससे उसे 'दक्षिणापथ स्वामी' की उपाधि मिली।"
    },
    {
        question: "कण्व वंश के संस्थापक वासुदेव ने किस वर्ष शुंग वंश के अंतिम शासक की हत्या की?",
        answers: shuffle([
            { text: "185 ईसा पूर्व", correct: false },
            { text: "73 ईसा पूर्व", correct: true },
            { text: "60 ईसा पूर्व", correct: false },
            { text: "28 ईसा पूर्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वासुदेव ने 73 ईसा पूर्व में शुंग शासक देवभूति की हत्या करके कण्व वंश की नींव रखी।"
    },
    {
        question: "सातवाहन साम्राज्य में किस प्रकार के सिक्कों का प्रचलन अधिक था?",
        answers: shuffle([
            { text: "सोने के सिक्के", correct: false },
            { text: "चांदी के सिक्के", correct: false },
            { text: "सीसे और पोटीन के सिक्के", correct: true },
            { text: "तांबे के सिक्के", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सातवाहन शासकों ने मुख्य रूप से सीसे और पोटीन के सिक्के जारी किए, जो उनके काल की एक विशिष्ट आर्थिक विशेषता थी।"
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
            { text: "गाँव का एक समूह", correct: false },
            { text: "एक प्रकार का कर", correct: false },
            { text: "एक जिला", correct: true },
            { text: "एक व्यापारिक मार्ग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अहार' सातवाहन प्रशासन की एक महत्वपूर्ण इकाई थी, जो आधुनिक जिले के समान थी।"
    },
    {
        question: "किस सातवाहन शासक के शासनकाल में पश्चिमी तट पर रोमन व्यापार फला-फूला?",
        answers: shuffle([
            { text: "सातकर्णी प्रथम", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: false },
            { text: "यज्ञश्री सातकर्णी", correct: true },
            { text: "वशिष्ठीपुत्र पुलुमावी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यज्ञश्री सातकर्णी के शासनकाल में सातवाहनों और रोमन साम्राज्य के बीच समुद्री व्यापार अपने चरम पर था, जिसका प्रमाण उसके सिक्कों पर जहाज के चित्र से मिलता है।"
    },
    {
        question: "शुंग काल के किस प्रसिद्ध नाटक में पुष्यमित्र शुंग के पुत्र अग्निमित्र का उल्लेख है?",
        answers: shuffle([
            { text: "मुद्राराक्षस", correct: false },
            { text: "अभिज्ञान शाकुंतलम्", correct: false },
            { text: "मालविकाग्निमित्रम्", correct: true },
            { text: "स्वप्नवासवदत्तम्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालिदास द्वारा रचित 'मालविकाग्निमित्रम्' में शुंग राजकुमार अग्निमित्र और मालविका की प्रेमकहानी का वर्णन है।"
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
        question: "कण्व वंश का अंतिम शासक कौन था, जिसकी हत्या सातवाहनों ने की थी?",
        answers: shuffle([
            { text: "वासुदेव", correct: false },
            { text: "भूमिमित्र", correct: false },
            { text: "नारायण", correct: false },
            { text: "सुशर्मन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कण्व वंश का अंतिम शासक सुशर्मन था, जिसकी हत्या सातवाहन वंश के संस्थापक सिमुक ने की थी।"
    },
    {
        question: "सातवाहन काल में कौन सा बंदरगाह पश्चिमी तट पर सबसे महत्वपूर्ण व्यापारिक केंद्र था?",
        answers: shuffle([
            { text: "सोपारा", correct: true },
            { text: "अरिकामेडु", correct: false },
            { text: "मुजिरिस", correct: false },
            { text: "ताम्रलिप्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोपारा (आधुनिक मुंबई के पास) सातवाहन काल का एक महत्वपूर्ण बंदरगाह था, जहां से रोमन साम्राज्य के साथ व्यापार होता था।"
    },
    {
        question: "शुंग काल में निर्मित सांची स्तूप के तोरण द्वारों पर किस धर्म से संबंधित मूर्तियां हैं?",
        answers: shuffle([
            { text: "हिंदू धर्म", correct: false },
            { text: "जैन धर्म", correct: false },
            { text: "बौद्ध धर्म", correct: true },
            { text: "वैष्णव धर्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सांची स्तूप के तोरण द्वारों पर बुद्ध के जीवन की घटनाओं और जातक कथाओं को दर्शाया गया है, जो बौद्ध धर्म से संबंधित हैं।"
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
        question: "किस सातवाहन शासक ने शक राजा नहपान को हराया और 'शक-यवन-पहलव' विनाशक की उपाधि धारण की?",
        answers: shuffle([
            { text: "सिमुक", correct: false },
            { text: "सातकर्णी प्रथम", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: true },
            { text: "हाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतमीपुत्र सातकर्णी ने अपने साम्राज्य को पश्चिमी क्षत्रपों (शक), यूनानियों (यवन) और पल्लवों (पहलव) के प्रभाव से मुक्त कराया, जिसके कारण उसे यह उपाधि मिली।"
    },
    {
        question: "शुंग वंश की स्थापना किस नदी के तट पर हुई थी?",
        answers: shuffle([
            { text: "गंगा", correct: true },
            { text: "नर्मदा", correct: false },
            { text: "गोदावरी", correct: false },
            { text: "कावेरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुंग वंश की स्थापना मगध में हुई थी, जिसकी प्रारंभिक राजधानी पाटलिपुत्र गंगा नदी के तट पर स्थित थी।"
    },
    {
        question: "सातवाहन समाज में मातृसत्तात्मकता का संकेत किस बात से मिलता है?",
        answers: shuffle([
            { text: "रानियों को प्रशासन में उच्च पद", correct: false },
            { text: "शासकों के नाम के आगे माता का नाम", correct: true },
            { text: "महिलाओं के नाम पर भूमि दान", correct: false },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतमीपुत्र सातकर्णी और वशिष्ठीपुत्र पुलुमावी जैसे शासकों के नाम से यह स्पष्ट है कि सातवाहन समाज में माताओं का सम्मान था।"
    },
    {
        question: "'महाभाष्य' नामक ग्रंथ किसने लिखा था, जो शुंग काल की जानकारी का एक महत्वपूर्ण स्रोत है?",
        answers: shuffle([
            { text: "कालिदास", correct: false },
            { text: "पतंजलि", correct: true },
            { text: "बाणभट्ट", correct: false },
            { text: "अश्वघोष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पतंजलि ने 'महाभाष्य' नामक व्याकरण ग्रंथ की रचना की थी, जो पुष्यमित्र शुंग के शासनकाल के दौरान रचित था।"
    },
    {
        question: "किस सातवाहन शासक ने पश्चिमी क्षत्रप शासकों को हराकर 'अंधकारक' की उपाधि धारण की?",
        answers: shuffle([
            { text: "सातकर्णी प्रथम", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: true },
            { text: "यज्ञश्री सातकर्णी", correct: false },
            { text: "हाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतमीपुत्र सातकर्णी ने शक शासक नहपान को हराकर उसके साम्राज्य से अंधकार को दूर करने का दावा किया था, इसलिए उसे 'अंधकारक' भी कहा गया।"
    },
    {
        question: "कण्व वंश के शासकों का शासनकाल कितने वर्षों तक चला?",
        answers: shuffle([
            { text: "लगभग 45 वर्ष", correct: true },
            { text: "लगभग 75 वर्ष", correct: false },
            { text: "लगभग 100 वर्ष", correct: false },
            { text: "लगभग 150 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कण्व वंश ने 73 ईसा पूर्व से 28 ईसा पूर्व तक, यानी लगभग 45 वर्षों तक शासन किया।"
    },
    {
        question: "सातवाहन काल में 'सुपिरंटेंडेंट' (Superintendent) नामक अधिकारी का क्या कार्य था?",
        answers: shuffle([
            { text: "केवल कृषि", correct: false },
            { text: "केवल खान", correct: false },
            { text: "केवल वाणिज्य", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सातवाहन काल में विभिन्न विभागों के प्रमुखों को 'अध्यक्ष' या 'सुपिरंटेंडेंट' कहा जाता था, जैसे 'लोहाध्यक्ष' (धातु), 'लक्षणाध्यक्ष' (टकसाल) और 'सूत्राध्यक्ष' (वस्त्र)।"
    },
    {
        question: "शुंग शासकों के शासनकाल के दौरान किस धर्म का पुनरुत्थान हुआ?",
        answers: shuffle([
            { text: "जैन धर्म", correct: false },
            { text: "बौद्ध धर्म", correct: false },
            { text: "वैदिक धर्म", correct: true },
            { text: "उपरोक्त में से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुष्यमित्र शुंग द्वारा करवाए गए अश्वमेध यज्ञ और पतंजलि के लेखन से यह स्पष्ट है कि शुंग काल में वैदिक धर्म का पुनरुत्थान हुआ।"
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