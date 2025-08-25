const questions = [
    {
        topHeading: "ब्राह्मण साम्राज्य पर आधारित बहुविकल्पी प्रश्न part 1 (quiz_no.69)"
    },
    {
        question: "मौर्य वंश के अंतिम शासक बृहद्रथ की हत्या किसने की थी?",
        answers: shuffle([
            { text: "अग्निमित्र", correct: false },
            { text: "वासुदेव", correct: false },
            { text: "सिमुक", correct: false },
            { text: "पुष्यमित्र शुंग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुष्यमित्र शुंग ने 185 ईसा पूर्व में मौर्य वंश के अंतिम शासक बृहद्रथ की हत्या करके शुंग वंश की स्थापना की।<br><br><i class='fa-solid fa-angles-right icon'></i> पुष्यमित्र बृहद्रथ का सेनापति था।"
    },
    {
        question: "शुंग वंश की स्थापना किसने की थी?",
        answers: shuffle([
            { text: "अग्निमित्र", correct: false },
            { text: "वासुदेव", correct: false },
            { text: "पुष्यमित्र शुंग", correct: true },
            { text: "देवभूति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुष्यमित्र शुंग, जो मौर्य सेना का सेनापति था, ने 185 ईसा पूर्व में मौर्य साम्राज्य को समाप्त कर शुंग वंश की स्थापना की।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक ब्राह्मण वंश था।"
    },
    {
        question: "शुंग काल के दौरान, कौन सा धार्मिक ग्रंथ अपने वर्तमान स्वरूप में संकलित किया गया था?",
        answers: shuffle([
            { text: "भगवद गीता", correct: false },
            { text: "मनुस्मृति", correct: true },
            { text: "ऋग्वेद", correct: false },
            { text: "रामायण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मनुस्मृति, जो भारतीय समाज के कानूनी और सामाजिक नियमों का एक महत्वपूर्ण ग्रंथ है, को शुंग काल के दौरान अंतिम रूप दिया गया था।"
    },
    {
        question: "किस शुंग शासक ने दो अश्वमेध यज्ञ करवाए थे?",
        answers: shuffle([
            { text: "पुष्यमित्र शुंग", correct: true },
            { text: "अग्निमित्र", correct: false },
            { text: "देवभूति", correct: false },
            { text: "वासुमित्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुष्यमित्र शुंग ने अपनी सफलताओं, विशेषकर यवनों (यूनानियों) को हराने के बाद, दो अश्वमेध यज्ञ करवाए थे।<br><br><i class='fa-solid fa-angles-right icon'></i> इन यज्ञों का उल्लेख अयोध्या शिलालेख में भी मिलता है।"
    },
    {
        question: "पुष्यमित्र शुंग के दरबार में कौन से प्रसिद्ध संस्कृत व्याकरणविद और भाष्यकार थे?",
        answers: shuffle([
            { text: "पतंजलि", correct: true },
            { text: "कालिदास", correct: false },
            { text: "अश्वघोष", correct: false },
            { text: "बाणभट्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पतंजलि, जिन्होंने 'महाभाष्य' की रचना की, पुष्यमित्र शुंग के समकालीन थे और उनके दरबार से जुड़े थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने पुष्यमित्र के अश्वमेध यज्ञों में भी पुरोहित की भूमिका निभाई थी।"
    },
    {
        question: "'मालविकाग्निमित्रम्' नामक नाटक, जिसमें शुंग राजकुमार अग्निमित्र की प्रेम कहानी का वर्णन है, किसने लिखा था?",
        answers: shuffle([
            { text: "बाणभट्ट", correct: false },
            { text: "विशाखदत्त", correct: false },
            { text: "कालिदास", correct: true },
            { text: "पतंजलि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महान कवि और नाटककार कालिदास ने 'मालविकाग्निमित्रम्' की रचना की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शुंग शासक अग्निमित्र और मालविका की प्रेम कहानी पर आधारित है।"
    },
    {
        question: "शुंग वंश का अंतिम शासक कौन था?",
        answers: shuffle([
            { text: "अग्निमित्र", correct: false },
            { text: "पुष्यमित्र", correct: false },
            { text: "वासुमित्र", correct: false },
            { text: "देवभूति", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> देवभूति शुंग वंश का अंतिम शासक था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसकी हत्या उसके अमात्य वासुदेव ने की थी, जिसने कण्व वंश की स्थापना की।"
    },
    {
        question: "कण्व वंश की स्थापना किसने की थी?",
        answers: shuffle([
            { text: "देवभूति", correct: false },
            { text: "वासुदेव", correct: true },
            { text: "सिमुक", correct: false },
            { text: "सुशर्मन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 73 ईसा पूर्व में, शुंग वंश के अंतिम शासक देवभूति की हत्या करके उसके अमात्य वासुदेव ने कण्व वंश की स्थापना की।"
    },
    {
        question: "कण्व वंश का अंतिम शासक कौन था?",
        answers: shuffle([
            { text: "वासुदेव", correct: false },
            { text: "भूमिमित्र", correct: false },
            { text: "नारायण", correct: false },
            { text: "सुशर्मन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुशर्मन कण्व वंश का अंतिम शासक था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसकी हत्या सातवाहन वंश के संस्थापक सिमुक ने की थी।"
    },
    {
        question: "सातवाहन वंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "सिमुक", correct: true },
            { text: "सातकर्णी", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: false },
            { text: "वशिष्ठीपुत्र पुलुमावी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिमुक ने कण्व वंश के अंतिम शासक सुशर्मन की हत्या करके लगभग 60 ईसा पूर्व में सातवाहन वंश की स्थापना की थी।"
    },
    {
        question: "सातवाहन वंश के शासकों की आधिकारिक भाषा क्या थी?",
        answers: shuffle([
            { text: "संस्कृत", correct: false },
            { text: "प्राकृत", correct: true },
            { text: "पाली", correct: false },
            { text: "तेलुगु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सातवाहन शासकों ने अपनी आधिकारिक भाषा के रूप में प्राकृत का उपयोग किया, जिसे ब्राह्मी लिपि में लिखा जाता था।"
    },
    {
        question: "सातवाहन शासकों की राजधानी क्या थी?",
        answers: shuffle([
            { text: "पाटलिपुत्र", correct: false },
            { text: "प्रतिष्ठान (पैठण)", correct: true },
            { text: "वैशाली", correct: false },
            { text: "तक्षशिला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सातवाहनों की राजधानी प्रतिष्ठान थी, जो गोदावरी नदी के तट पर स्थित थी (आधुनिक महाराष्ट्र में पैठण)।"
    },
    {
        question: "सातवाहन शासकों ने किस धातु के सिक्के जारी किए थे?",
        answers: shuffle([
            { text: "चांदी और सोना", correct: false },
            { text: "तांबा और चांदी", correct: false },
            { text: "सीसा और पोटीन", correct: true },
            { text: "सोना और सीसा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सातवाहन शासकों ने मुख्य रूप से सीसे (लेड) और पोटीन के सिक्के जारी किए, जो भारतीय इतिहास में एक दुर्लभ विशेषता है।"
    },
    {
        question: "किस सातवाहन शासक को 'वेदों का एकमात्र संरक्षक' कहा गया है?",
        answers: shuffle([
            { text: "सिमुक", correct: false },
            { text: "सातकर्णी", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: true },
            { text: "वशिष्ठीपुत्र पुलुमावी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतमीपुत्र सातकर्णी को नासिक अभिलेख में 'वेदों का एकमात्र ब्राह्मण' (एका ब्राह्मण) और 'अद्वितीय ब्राह्मण' कहा गया है।"
    },
    {
        question: "सातवाहन वंश के किस शासक ने शकों को हराया और 'शक-यवन-पहलव' विनाशक की उपाधि धारण की?",
        answers: shuffle([
            { text: "सातकर्णी", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: true },
            { text: "वशिष्ठीपुत्र पुलुमावी", correct: false },
            { text: "यज्ञश्री सातकर्णी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतमीपुत्र सातकर्णी ने शकों के शासक नहपान को हराया और अपने साम्राज्य का विस्तार किया।<br><br><i class='fa-solid fa-angles-right icon'></i> इस विजय के बाद उसने 'शक-यवन-पहलव' विनाशक की उपाधि धारण की।"
    },
    {
        question: "'गाथासप्तशती' नामक प्राकृत भाषा के काव्य संग्रह के लेखक कौन थे?",
        answers: shuffle([
            { text: "सातकर्णी", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: false },
            { text: "हाल", correct: true },
            { text: "यज्ञश्री सातकर्णी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सातवाहन शासक हाल ने प्राकृत भाषा में 'गाथासप्तशती' की रचना की, जो श्रृंगार रस पर आधारित एक महत्वपूर्ण काव्य संग्रह है।"
    },
    {
        question: "शुंग काल में कौन सा स्तूप पुनर्निर्मित किया गया था, जिसमें लकड़ी की जगह पत्थर का प्रयोग हुआ था?",
        answers: shuffle([
            { text: "सारनाथ स्तूप", correct: false },
            { text: "सांची स्तूप", correct: false },
            { text: "अमरावती स्तूप", correct: false },
            { text: "भरहुत स्तूप", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुंग काल के दौरान, भरहुत स्तूप का विस्तार और नवीनीकरण किया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इस दौरान लकड़ी के बाड़ों की जगह पत्थर की रेलिंग (वेदिका) और तोरण द्वार बनाए गए थे।"
    },
    {
        question: "कण्व वंश के शासनकाल की अवधि क्या थी?",
        answers: shuffle([
            { text: "185 ईसा पूर्व - 73 ईसा पूर्व", correct: false },
            { text: "73 ईसा पूर्व - 28 ईसा पूर्व", correct: true },
            { text: "60 ईसा पूर्व - 225 ईस्वी", correct: false },
            { text: "232 ईसा पूर्व - 185 ईसा पूर्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कण्व वंश ने शुंग वंश के बाद, 73 ईसा पूर्व से 28 ईसा पूर्व तक शासन किया, जो एक अल्पकालिक शासन था।"
    },
    {
        question: "किस सातवाहन शासक को 'दक्षिणापथ का स्वामी' कहा जाता था?",
        answers: shuffle([
            { text: "सिमुक", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: true },
            { text: "सातकर्णी प्रथम", correct: false },
            { text: "यज्ञश्री सातकर्णी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतमीपुत्र सातकर्णी ने दक्कन (दक्षिणापथ) में एक विशाल साम्राज्य की स्थापना की थी, इसीलिए उसे 'दक्षिणापथ का स्वामी' कहा जाता था।"
    },
    {
        question: "शुंग काल में वैदिक धर्म के पुनरुत्थान को किस रूप में देखा जाता है?",
        answers: shuffle([
            { text: "बौद्ध धर्म का दमन", correct: false },
            { text: "हिंदू धर्म का पुनर्जागरण", correct: true },
            { text: "जैन धर्म का संरक्षण", correct: false },
            { text: "उपरोक्त में से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुंग शासक ब्राह्मण थे, और उनके शासनकाल में वैदिक अनुष्ठानों और परंपराओं को पुनर्जीवित किया गया, जिसे हिंदू धर्म के पुनर्जागरण के रूप में देखा जाता है।"
    },
    {
        question: "किस शासक ने शुंग वंश के अंतिम शासक देवभूति की हत्या करके कण्व वंश की स्थापना की?",
        answers: shuffle([
            { text: "सिमुक", correct: false },
            { text: "वासुदेव", correct: true },
            { text: "सुशर्मन", correct: false },
            { text: "शातकर्णी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> देवभूति, शुंग वंश का अंतिम शासक, अपने अमात्य वासुदेव द्वारा मारा गया था, जिसने बाद में कण्व वंश की नींव रखी।"
    },
    {
        question: "सातवाहन साम्राज्य का सबसे बड़ा और सबसे महत्वपूर्ण सांस्कृतिक केंद्र कौन सा था?",
        answers: shuffle([
            { text: "प्रतिष्ठान", correct: false },
            { text: "अमरावती", correct: true },
            { text: "नागार्जुनकोंडा", correct: false },
            { text: "एलोरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमरावती सातवाहन काल में बौद्ध धर्म और कला का एक प्रमुख केंद्र था, जो अपने प्रसिद्ध स्तूपों और मूर्तियों के लिए जाना जाता है।"
    },
    {
        question: "किस शासक को 'दक्षिण का भगवान' कहा गया है?",
        answers: shuffle([
            { text: "पुष्यमित्र शुंग", correct: false },
            { text: "वासुदेव", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: true },
            { text: "हाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतमीपुत्र सातकर्णी की उपाधियों में से एक 'दक्षिण का भगवान' थी, जो उसकी व्यापक विजयों और दक्कन पर नियंत्रण को दर्शाती है।"
    },
    {
        question: "शुंग वंश का शासनकाल किस काल के बाद शुरू हुआ?",
        answers: shuffle([
            { text: "नंद वंश", correct: false },
            { text: "गुप्त वंश", correct: false },
            { text: "मौर्य वंश", correct: true },
            { text: "कण्व वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुष्यमित्र शुंग ने मौर्य वंश के अंतिम शासक बृहद्रथ की हत्या करके शुंग वंश की स्थापना की।"
    },
    {
        question: "सातवाहन शासकों ने किस भाषा के साहित्य को संरक्षण दिया?",
        answers: shuffle([
            { text: "संस्कृत", correct: false },
            { text: "प्राकृत", correct: true },
            { text: "पाली", correct: false },
            { text: "तमिल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सातवाहन शासकों ने प्राकृत भाषा को संरक्षण दिया।<br><br><i class='fa-solid fa-angles-right icon'></i> उनके शासक हाल ने स्वयं प्राकृत भाषा में 'गाथासप्तशती' नामक ग्रंथ की रचना की थी।"
    },
    {
        question: "शुंग वंश की राजधानी क्या थी?",
        answers: shuffle([
            { text: "पाटलिपुत्र", correct: false },
            { text: "विदिशा", correct: true },
            { text: "कन्नौज", correct: false },
            { text: "प्रतिष्ठान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुंग वंश के संस्थापक पुष्यमित्र शुंग ने अपनी राजधानी पाटलिपुत्र से हटाकर विदिशा (आधुनिक मध्य प्रदेश) में स्थापित की।"
    },
    {
        question: "किस ग्रीक राजदूत ने शुंग शासक भागभद्र के दरबार में हेलियोडोरस स्तंभ की स्थापना की थी?",
        answers: shuffle([
            { text: "मेगस्थनीज", correct: false },
            { text: "हेलियोडोरस", correct: true },
            { text: "डायोनिसियस", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेलियोडोरस, जो ग्रीक शासक एंटियालकिडास का राजदूत था, शुंग शासक भागभद्र के दरबार में आया था और उसने विदिशा में भागवत धर्म को समर्पित 'गरुड़ स्तंभ' या हेलियोडोरस स्तंभ की स्थापना की।"
    },
    {
        question: "शुंग काल में निर्मित भरहुत स्तूप का संबंध किस धर्म से है?",
        answers: shuffle([
            { text: "जैन धर्म", correct: false },
            { text: "बौद्ध धर्म", correct: true },
            { text: "शैव धर्म", correct: false },
            { text: "वैष्णव धर्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भरहुत स्तूप, जिसे शुंग काल में पुनर्निर्मित किया गया था, बौद्ध धर्म से संबंधित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी वेदिकाओं और तोरणद्वारों पर जातक कथाओं का चित्रण मिलता है।"
    },
    {
        question: "कण्व वंश के किस शासक ने शुंग वंश के अंतिम शासक देवभूति की हत्या की थी?",
        answers: shuffle([
            { text: "सुशर्मन", correct: false },
            { text: "भूमिमित्र", correct: false },
            { text: "नारायण", correct: false },
            { text: "वासुदेव", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वासुदेव ने 73 ईसा पूर्व में शुंग वंश के अंतिम शासक देवभूति को मारकर कण्व वंश की स्थापना की थी।"
    },
    {
        question: "किस सातवाहन शासक के शासनकाल में 'गाथासप्तशती' की रचना हुई?",
        answers: shuffle([
            { text: "गौतमीपुत्र सातकर्णी", correct: false },
            { text: "सातकर्णी प्रथम", correct: false },
            { text: "हाल", correct: true },
            { text: "वशिष्ठीपुत्र पुलुमावी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गाथासप्तशती', जो प्राकृत भाषा का एक महत्वपूर्ण काव्य ग्रंथ है, सातवाहन शासक हाल द्वारा लिखी गई थी।"
    },
    {
        question: "सातवाहन साम्राज्य में 'ग्रामिक' नामक अधिकारी का क्या कार्य था?",
        answers: shuffle([
            { text: "सैनिक कमांडर", correct: false },
            { text: "राजस्व संग्राहक", correct: false },
            { text: "गाँव का प्रमुख", correct: true },
            { text: "न्यायाधीश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सातवाहन प्रशासन में, 'ग्रामिक' गाँव का प्रमुख अधिकारी होता था, जो गाँव के प्रशासन और कानून-व्यवस्था की देखरेख करता था।"
    },
    {
        question: "सातवाहनों को किस अन्य नाम से भी जाना जाता है?",
        answers: shuffle([
            { text: "आंध्र", correct: true },
            { text: "कलिंग", correct: false },
            { text: "चेर", correct: false },
            { text: "पांड्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरातात्विक साक्ष्य और पुराणों के अनुसार, सातवाहन वंश को 'आंध्र' या 'आंध्र-सातवाहन' के नाम से भी जाना जाता है।"
    },
    {
        question: "किस सातवाहन शासक के सिक्कों पर जहाज का चित्र उत्कीर्ण है, जो समुद्री व्यापार में उनकी रुचि को दर्शाता है?",
        answers: shuffle([
            { text: "सातकर्णी प्रथम", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: false },
            { text: "यज्ञश्री सातकर्णी", correct: true },
            { text: "वशिष्ठीपुत्र पुलुमावी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यज्ञश्री सातकर्णी के सिक्कों पर जहाज के चित्र मिलते हैं, जो इस बात का प्रमाण है कि सातवाहन काल में समुद्री व्यापार और नौसेना का महत्व था।"
    },
    {
        question: "सातवाहन काल में 'अमरावती स्तूप' किस कला शैली का उत्कृष्ट उदाहरण है?",
        answers: shuffle([
            { text: "गांधार शैली", correct: false },
            { text: "मथुरा शैली", correct: false },
            { text: "अमरावती शैली", correct: true },
            { text: "ग्रीक-रोमन शैली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमरावती स्तूप, जो आंध्र प्रदेश में स्थित है, अपनी विशिष्ट 'अमरावती शैली' के लिए जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस शैली में गतिशील और भावनात्मक मूर्तियां बनाई गई हैं।"
    },
    {
        question: "किस शुंग शासक ने यवनों (यूनानियों) के आक्रमण को विफल किया था?",
        answers: shuffle([
            { text: "अग्निमित्र", correct: false },
            { text: "देवभूति", correct: false },
            { text: "पुष्यमित्र शुंग", correct: true },
            { text: "वासुदेव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुष्यमित्र शुंग ने यवनों के आक्रमण को सफलतापूर्वक विफल किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इस घटना का उल्लेख पतंजलि के महाभाष्य में भी है।"
    },
    {
        question: "सातवाहन शासकों ने किन दो नदियों के बीच के क्षेत्र पर शासन किया?",
        answers: shuffle([
            { text: "गंगा और यमुना", correct: false },
            { text: "कृष्णा और गोदावरी", correct: true },
            { text: "नर्मदा और ताप्ती", correct: false },
            { text: "कावेरी और महानदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सातवाहन साम्राज्य मुख्य रूप से दक्कन क्षेत्र में कृष्णा और गोदावरी नदियों के बीच फैला हुआ था।"
    },
    {
        question: "शुंग काल में किस प्रकार की वास्तुकला का विकास हुआ?",
        answers: shuffle([
            { text: "इंडो-ग्रीक वास्तुकला", correct: false },
            { text: "बौद्ध स्तूप और चैत्य", correct: true },
            { text: "गुप्तकालीन मंदिर", correct: false },
            { text: "नागर शैली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुंग काल में बौद्ध स्तूपों और चैत्यों का निर्माण और नवीनीकरण हुआ, जैसे भरहुत और सांची के स्तूप।"
    },
    {
        question: "सातवाहन समाज में मातृसत्तात्मकता के संकेत क्यों मिलते हैं?",
        answers: shuffle([
            { text: "महिलाओं के नाम पर भूमि दान", correct: false },
            { text: "शासकों के नाम के आगे माता का नाम", correct: true },
            { text: "महिलाओं को प्रशासन में उच्च पद", correct: false },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सातवाहन शासकों के नाम के आगे उनकी माताओं के नाम जुड़े होते थे, जैसे गौतमीपुत्र सातकर्णी और वशिष्ठीपुत्र पुलुमावी।<br><br><i class='fa-solid fa-angles-right icon'></i> यह समाज में मातृसत्तात्मकता के प्रभाव को दर्शाता है।"
    },
    {
        question: "सातवाहन काल में किस बंदरगाह का उल्लेख 'पेरिप्लस ऑफ द एरिथ्रियन सी' में मिलता है?",
        answers: shuffle([
            { text: "मुजिरिस", correct: false },
            { text: "अरिकामेडु", correct: false },
            { text: "कल्याण", correct: true },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पेरिप्लस ऑफ द एरिथ्रियन सी' नामक प्राचीन ग्रीक ग्रंथ में सातवाहन साम्राज्य के पश्चिमी तट पर स्थित प्रमुख बंदरगाह कल्याण का उल्लेख है।"
    },
    {
        question: "शुंग काल में निर्मित हेलियोडोरस स्तंभ किस देवता को समर्पित है?",
        answers: shuffle([
            { text: "शिव", correct: false },
            { text: "विष्णु", correct: true },
            { text: "बुद्ध", correct: false },
            { text: "सूर्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेलियोडोरस, जो एक ग्रीक राजदूत था, ने भागवत धर्म (वैष्णव संप्रदाय) को अपनाकर विष्णु को समर्पित यह स्तंभ स्थापित किया था।"
    },
    {
        question: "सातवाहन वंश का वह कौन सा शासक था जिसने 'दोषों के मिश्रण' को समाप्त करने का दावा किया था?",
        answers: shuffle([
            { text: "सिमुक", correct: false },
            { text: "सातकर्णी प्रथम", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: true },
            { text: "हाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतमीपुत्र सातकर्णी ने नासिक अभिलेख में दावा किया था कि उसने चार वर्णों के बीच 'दोषों के मिश्रण' (वर्णसंकर) को समाप्त किया था, जिसका अर्थ है सामाजिक व्यवस्था को बनाए रखना।"
    },
    {
        question: "कण्व वंश के बाद किस वंश ने सत्ता संभाली?",
        answers: shuffle([
            { text: "शुंग वंश", correct: false },
            { text: "सातवाहन वंश", correct: true },
            { text: "गुप्त वंश", correct: false },
            { text: "कुषाण वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कण्व वंश के अंतिम शासक सुशर्मन को हराकर सातवाहन वंश के संस्थापक सिमुक ने सत्ता पर कब्जा कर लिया था।"
    },
    {
        question: "शुंग काल की प्रमुख साहित्यिक कृतियों में से एक 'महाभाष्य' किसके द्वारा लिखी गई थी?",
        answers: shuffle([
            { text: "कालिदास", correct: false },
            { text: "पतंजलि", correct: true },
            { text: "अश्वघोष", correct: false },
            { text: "बाणभट्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पतंजलि ने पाणिनि की 'अष्टाध्यायी' पर एक भाष्य के रूप में 'महाभाष्य' नामक ग्रंथ लिखा था, जो शुंग काल की एक महत्वपूर्ण साहित्यिक रचना है।"
    },
    {
        question: "सातवाहन शासकों ने किस धर्म को संरक्षण दिया?",
        answers: shuffle([
            { text: "जैन धर्म", correct: false },
            { text: "बौद्ध धर्म", correct: false },
            { text: "हिंदू धर्म", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हालांकि सातवाहन शासक स्वयं ब्राह्मण थे और हिंदू धर्म का पालन करते थे, लेकिन उन्होंने बौद्ध और जैन धर्मों को भी उदारतापूर्वक संरक्षण दिया।"
    },
    {
        question: "शुंग वंश के किस शासक ने अपनी राजधानी विदिशा को बनाया था?",
        answers: shuffle([
            { text: "पुष्यमित्र शुंग", correct: true },
            { text: "अग्निमित्र", correct: false },
            { text: "वासुदेव", correct: false },
            { text: "देवभूति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुष्यमित्र शुंग ने अपनी राजधानी पाटलिपुत्र से विदिशा स्थानांतरित की।"
    },
    {
        question: "सातवाहन काल में कौन सा बंदरगाह पश्चिमी तट पर सबसे महत्वपूर्ण व्यापारिक केंद्र था?",
        answers: shuffle([
            { text: "सोपारा", correct: true },
            { text: "भरुच", correct: false },
            { text: "मुजिरिस", correct: false },
            { text: "अरिकामेडु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोपारा (आधुनिक मुंबई के पास) सातवाहन काल का एक महत्वपूर्ण बंदरगाह और व्यापारिक केंद्र था, जो रोमन साम्राज्य के साथ व्यापार के लिए प्रसिद्ध था।"
    },
    {
        question: "सातवाहन शासकों को 'दक्षिणापथपति' क्यों कहा जाता था?",
        answers: shuffle([
            { text: "क्योंकि उन्होंने दक्षिण में मंदिरों का निर्माण किया", correct: false },
            { text: "क्योंकि उन्होंने दक्षिण भारत पर विजय प्राप्त की", correct: false },
            { text: "क्योंकि उनका साम्राज्य दक्कन क्षेत्र में फैला हुआ था", correct: true },
            { text: "क्योंकि वे दक्षिण भारत के मूल निवासी थे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दक्षिणापथपति' का अर्थ है 'दक्षिणापथ का स्वामी'।<br><br><i class='fa-solid fa-angles-right icon'></i> सातवाहनों का साम्राज्य दक्कन (दक्षिणापथ) में केंद्रित था, इसलिए उन्हें यह उपाधि दी गई थी।"
    },
    {
        question: "पुष्यमित्र शुंग ने किस मौर्य शासक की हत्या की?",
        answers: shuffle([
            { text: "चंद्रगुप्त मौर्य", correct: false },
            { text: "अशोक", correct: false },
            { text: "बृहद्रथ", correct: true },
            { text: "बिन्दुसार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुष्यमित्र शुंग ने 185 ईसा पूर्व में मौर्य वंश के अंतिम शासक बृहद्रथ की हत्या की।"
    },
    {
        question: "सातवाहन काल में 'कार्ला चैत्य' किस धर्म से संबंधित था?",
        answers: shuffle([
            { text: "जैन धर्म", correct: false },
            { text: "बौद्ध धर्म", correct: true },
            { text: "हिंदू धर्म", correct: false },
            { text: "शैव धर्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्ला चैत्य (आधुनिक महाराष्ट्र में) बौद्ध धर्म का एक महत्वपूर्ण पूजा स्थल था, जो सातवाहन काल के दौरान चट्टानों को काटकर बनाया गया था।"
    },
    {
        question: "किस शासक ने बौद्ध धर्म के प्रति सहिष्णुता दिखाई और स्तूपों का पुनर्निर्माण करवाया?",
        answers: shuffle([
            { text: "पुष्यमित्र शुंग", correct: true },
            { text: "अग्निमित्र", correct: false },
            { text: "वासुदेव", correct: false },
            { text: "गौतमीपुत्र सातकर्णी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हालांकि पुष्यमित्र शुंग को कुछ ग्रंथों में बौद्ध विरोधी बताया गया है, लेकिन सांची और भरहुत जैसे कई स्तूपों का जीर्णोद्धार और विस्तार शुंग काल में हुआ था, जो उसकी सहिष्णुता को दर्शाता है।"
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