const questions = [
    {
        topHeading: "मगध राज्य के उत्कर्ष पर आधारित बहुविकल्पी प्रश्न part 3 (quiz_no.59)"
    },
    {
        question: "मगध की पहली राजधानी 'गिरिव्रज' किस नाम से जानी जाती थी?",
        answers: shuffle([
            { text: "पाटलिपुत्र", correct: false },
            { text: "वैशाली", correct: false },
            { text: "राजगृह", correct: true },
            { text: "चम्पा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गिरिव्रज पाँच पहाड़ियों से घिरा हुआ था और इसलिए इसे राजगृह (अर्थात राजा का घर) भी कहा जाता था।"
    },
    {
        question: "बिम्बिसार ने अपने साम्राज्य का विस्तार किन नीतियों के माध्यम से किया?",
        answers: shuffle([
            { text: "सैन्य विजय", correct: false },
            { text: "वैवाहिक संबंध", correct: false },
            { text: "दोनों (A और B)", correct: true },
            { text: "केवल धार्मिक सुधार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिम्बिसार ने अंग को जीतकर सैन्य विस्तार किया और कौशल व लिच्छवी जैसे राज्यों से वैवाहिक संबंध स्थापित किए।"
    },
    {
        question: "हर्यंक वंश के किस शासक ने वैशाली को जीतकर मगध में मिलाया?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: true },
            { text: "उदयीन", correct: false },
            { text: "नागदशक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजातशत्रु ने वज्जि संघ (जिसमें वैशाली भी शामिल था) को एक लंबे युद्ध के बाद जीत लिया।"
    },
    {
        question: "नंद वंश का वह शासक कौन था जिसने जैन धर्म का संरक्षण किया और जैन प्रतिमा को मगध में लाया?",
        answers: shuffle([
            { text: "महापद्मनंद", correct: true },
            { text: "घनानंद", correct: false },
            { text: "शिशुनाग", correct: false },
            { text: "कालासोक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्मनंद ने कलिंग पर विजय प्राप्त करने के बाद वहाँ से एक जैन प्रतिमा को मगध में लाया, जिससे जैन धर्म के प्रति उसका रुझान स्पष्ट होता है।"
    },
    {
        question: "किस यूनानी इतिहासकार ने उल्लेख किया कि नंदों की सेना में 2 लाख पैदल सैनिक, 20,000 घुड़सवार, 2,000 रथ और 3,000 हाथी थे?",
        answers: shuffle([
            { text: "मेगास्थनीज", correct: false },
            { text: "हेरोडोटस", correct: false },
            { text: "कर्टियस", correct: false },
            { text: "प्लूटार्क", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्लूटार्क ने अपनी रचनाओं में नंदों की विशाल सेना का उल्लेख किया है, जिससे उनकी सैन्य शक्ति का पता चलता है।"
    },
    {
        question: "मगध साम्राज्य में हाथियों का उपयोग सर्वप्रथम किस शासक ने किया था?",
        answers: shuffle([
            { text: "हर्यंक वंश", correct: false },
            { text: "शिशुनाग वंश", correct: false },
            { text: "नंद वंश", correct: true },
            { text: "मौर्य वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नंद शासकों ने अपनी सेना में हाथियों को शामिल करके अपनी सैन्य शक्ति को बहुत बढ़ाया था।"
    },
    {
        question: "मगध के किस शासक को 'सर्वक्षत्रान्तक' कहा गया है?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "महापद्मनंद", correct: true },
            { text: "धनानंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्मनंद ने कई क्षत्रिय राज्यों का अंत किया, इसलिए उसे 'सर्वक्षत्रान्तक' की उपाधि मिली।"
    },
    {
        question: "किस शासक ने पाटलिपुत्र को अपनी राजधानी बनाया?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "उदयीन", correct: true },
            { text: "शिशुनाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उदयीन ने गंगा और सोन नदी के संगम पर पाटलिपुत्र की स्थापना की और उसे राजधानी बनाया।"
    },
    {
        question: "शिशुनाग वंश का अंतिम शासक कौन था?",
        answers: shuffle([
            { text: "शिशुनाग", correct: false },
            { text: "कालासोक", correct: false },
            { text: "नंदीवर्धन", correct: true },
            { text: "महापद्मनंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नंदीवर्धन शिशुनाग वंश का अंतिम शासक था, जिसे महापद्मनंद ने मारकर नंद वंश की स्थापना की।"
    },
    {
        question: "अजातशत्रु के शासनकाल में कौन सी बौद्ध संगीति हुई थी?",
        answers: shuffle([
            { text: "प्रथम", correct: true },
            { text: "द्वितीय", correct: false },
            { text: "तृतीय", correct: false },
            { text: "चतुर्थ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रथम बौद्ध संगीति 483 ईसा पूर्व में राजगृह में अजातशत्रु के संरक्षण में आयोजित हुई थी।"
    },
    {
        question: "किस मगध शासक को बौद्ध धर्म का अनुयायी माना जाता है?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "उदयीन", correct: false },
            { text: "A और B दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिम्बिसार और अजातशत्रु दोनों बौद्ध धर्म के अनुयायी थे और उन्होंने बुद्ध को संरक्षण भी दिया था।"
    },
    {
        question: "सिकंदर के भारत पर आक्रमण के समय मगध का शासक कौन था?",
        answers: shuffle([
            { text: "महापद्मनंद", correct: false },
            { text: "घनानंद", correct: true },
            { text: "शिशुनाग", correct: false },
            { text: "कालासोक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिकंदर ने जब 326 ईसा पूर्व में भारत पर आक्रमण किया, तब मगध का शासक धनानंद था।"
    },
    {
        question: "मगध साम्राज्य के उत्थान का एक प्रमुख कारण था, उसका ___?",
        answers: shuffle([
            { text: "भौगोलिक स्थान", correct: true },
            { text: "राजनीतिक अस्थिरता", correct: false },
            { text: "सांस्कृतिक एकता", correct: false },
            { text: "विदेशी आक्रमण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मगध का भौगोलिक स्थान, जिसमें उपजाऊ भूमि, नदी मार्ग और लोहे की खदानें शामिल थीं, उसके उत्थान का एक प्रमुख कारण था।"
    },
    {
        question: "किस शासक ने अवन्ति को जीतकर मगध में मिलाया?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "शिशुनाग", correct: true },
            { text: "महापद्मनंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शिशुनाग ने अवन्ति के शासक प्रद्योत को हराकर अवन्ति को मगध में मिलाया।"
    },
    {
        question: "'पित्रहंता वंश' के रूप में किसे जाना जाता है?",
        answers: shuffle([
            { text: "नंद वंश", correct: false },
            { text: "शिशुनाग वंश", correct: false },
            { text: "हर्यंक वंश", correct: true },
            { text: "मौर्य वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्यंक वंश के शासकों ने अपने पिता की हत्या करके सिंहासन प्राप्त किया, इसलिए इसे 'पितृहन्ता वंश' कहा जाता है।"
    },
    {
        question: "किस मगध शासक ने 'रथ-मुसल' और 'महाशिलाकंटक' जैसे नए हथियारों का प्रयोग किया?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: true },
            { text: "उदयीन", correct: false },
            { text: "शिशुनाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजातशत्रु ने वैशाली के वज्जि संघ के विरुद्ध युद्ध में इन हथियारों का इस्तेमाल किया था।"
    },
    {
        question: "नंद वंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "शिशुनाग", correct: false },
            { text: "महापद्मनंद", correct: true },
            { text: "घनानंद", correct: false },
            { text: "चंद्रगुप्त मौर्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्मनंद ने शिशुनाग वंश का अंत करके नंद वंश की स्थापना की।"
    },
    {
        question: "किस शासक के शासनकाल में गौतम बुद्ध की मृत्यु हुई थी?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: true },
            { text: "उदयीन", correct: false },
            { text: "कालासोक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महात्मा बुद्ध का महापरिनिर्वाण 483 ईसा पूर्व में अजातशत्रु के शासनकाल में हुआ था।"
    },
    {
        question: "मगध साम्राज्य में लोहे की उपलब्धता से क्या लाभ हुआ?",
        answers: shuffle([
            { text: "कृषि में वृद्धि", correct: false },
            { text: "बेहतर हथियार", correct: false },
            { text: "सैन्य शक्ति में वृद्धि", correct: false },
            { text: "उपर्युक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोहे की उपलब्धता से बेहतर कृषि उपकरण बने, जिससे कृषि उत्पादन बढ़ा और बेहतर हथियार बने, जिससे सैन्य शक्ति में वृद्धि हुई।"
    },
    {
        question: "किस वंश के शासकों को पुराणों में 'शुद्र' कहा गया है?",
        answers: shuffle([
            { text: "हर्यंक वंश", correct: false },
            { text: "शिशुनाग वंश", correct: false },
            { text: "नंद वंश", correct: true },
            { text: "मौर्य वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुराणों में नंद वंश के शासकों को शूद्र बताया गया है, जो उनके निम्न सामाजिक मूल का संकेत देता है।"
    },
    {
        question: "नंद वंश का वह शासक कौन था जिसने 'कलिंग' को जीतकर मगध में मिलाया?",
        answers: shuffle([
            { text: "महापद्मनंद", correct: true },
            { text: "धनानंद", correct: false },
            { text: "कालासोक", correct: false },
            { text: "शिशुनाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्मनंद ने कलिंग पर विजय प्राप्त की और वहाँ से एक जैन प्रतिमा मगध ले आया था।"
    },
    {
        question: "शिशुनाग वंश का वह शासक कौन था जिसके शासनकाल में द्वितीय बौद्ध संगीति आयोजित की गई थी?",
        answers: shuffle([
            { text: "शिशुनाग", correct: false },
            { text: "कालासोक", correct: true },
            { text: "नंदीवर्धन", correct: false },
            { text: "महाबोधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालाशोक के शासनकाल में 383 ईसा पूर्व में वैशाली में द्वितीय बौद्ध संगीति का आयोजन हुआ था।"
    },
    {
        question: "हर्यंक वंश का अंतिम शासक कौन था?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "उदयीन", correct: false },
            { text: "नागदशक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नागदशक हर्यंक वंश का अंतिम शासक था, जिसे उसके अमात्य शिशुनाग ने अपदस्थ करके शिशुनाग वंश की स्थापना की।"
    },
    {
        question: "नंद वंश के किस शासक के समय में जैन धर्म का व्यापक प्रचार-प्रसार हुआ?",
        answers: shuffle([
            { text: "महापद्मनंद", correct: true },
            { text: "घनानंद", correct: false },
            { text: "शिशुनाग", correct: false },
            { text: "उदयीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्मनंद के शासनकाल के दौरान जैन धर्म को काफी संरक्षण मिला, जिसके कारण यह मगध में काफी लोकप्रिय हुआ।"
    },
    {
        question: "मगध के किस शासक ने 'एकराट' और 'एकछत्र' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "महापद्मनंद", correct: true },
            { text: "धनानंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्मनंद ने भारत के कई हिस्सों पर विजय प्राप्त की और एक विशाल साम्राज्य की स्थापना की।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी कारण उसे 'एकराट' और 'एकछत्र' जैसी उपाधियाँ दी गईं।"
    },
    {
        question: "मगध के किस शासक ने अवन्ति के शक्तिशाली राज्य को जीतकर मगध में मिलाया?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "उदयीन", correct: false },
            { text: "शिशुनाग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शिशुनाग ने अवन्ति को हराकर मगध साम्राज्य का विस्तार किया।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक बड़ी सैन्य सफलता थी जिसने मगध को और अधिक शक्तिशाली बना दिया।"
    },
    {
        question: "मगध साम्राज्य के उत्थान में किस कारण का योगदान था?",
        answers: shuffle([
            { text: "उपजाऊ भूमि", correct: false },
            { text: "लोहे की उपलब्धता", correct: false },
            { text: "रणनीतिक स्थान", correct: false },
            { text: "उपर्युक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मगध का उत्थान कई कारकों पर निर्भर था, जैसे गंगा के मैदानी इलाकों की उपजाऊ भूमि, लोहे की खदानों की उपलब्धता और इसकी राजधानी का रणनीतिक स्थान।"
    },
    {
        question: "बिम्बिसार ने किस वैवाहिक संबंध के माध्यम से मगध की स्थिति को मजबूत किया?",
        answers: shuffle([
            { text: "लिच्छवी राजकुमारी चेलना के साथ", correct: false },
            { text: "कौशल राजकुमारी महाकोशला के साथ", correct: false },
            { text: "पंजाब की मद्र राजकुमारी खेमा के साथ", correct: false },
            { text: "उपर्युक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिम्बिसार ने अपनी शक्ति को बढ़ाने और अपने पड़ोसी राज्यों के साथ शांतिपूर्ण संबंध स्थापित करने के लिए कई वैवाहिक गठबंधन किए।"
    },
    {
        question: "मगध के किस शासक ने वज्जि संघ को जीतने के लिए अपने मंत्री वस्सकार को बुद्ध के पास भेजा था?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: true },
            { text: "उदयीन", correct: false },
            { text: "शिशुनाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजातशत्रु ने वज्जि संघ के बीच फूट डालने के लिए अपने मंत्री वस्सकार को बुद्ध के पास भेजा था, ताकि वह उनकी आंतरिक कमजोरी का पता लगा सके।"
    },
    {
        question: "हर्यंक वंश के किस शासक को 'पितृहन्ता' कहा जाता है?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "उदयीन", correct: false },
            { text: "A और B दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजातशत्रु ने अपने पिता बिम्बिसार की हत्या की थी, और उदयीन ने अपने पिता अजातशत्रु की हत्या की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इन दोनों को 'पितृहन्ता' कहा जाता है।"
    },
    {
        question: "किस नदी के तट पर पाटलिपुत्र शहर बसाया गया था?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "सोन", correct: false },
            { text: "दोनों नदियों के संगम पर", correct: true },
            { text: "गंडक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पाटलिपुत्र शहर की स्थापना गंगा और सोन नदी के संगम पर की गई थी, जो इसे एक महत्वपूर्ण जलमार्ग और रणनीतिक केंद्र बनाता था।"
    },
    {
        question: "नंद वंश के किस शासक के समय में जैन धर्म का व्यापक प्रचार-प्रसार हुआ?",
        answers: shuffle([
            { text: "महापद्मनंद", correct: true },
            { text: "घनानंद", correct: false },
            { text: "शिशुनाग", correct: false },
            { text: "उदयीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्मनंद के शासनकाल के दौरान जैन धर्म को काफी संरक्षण मिला, जिसके कारण यह मगध में काफी लोकप्रिय हुआ।"
    },
    {
        question: "किस मगध शासक ने 'एकराट' और 'एकछत्र' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "महापद्मनंद", correct: true },
            { text: "धनानंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्मनंद ने भारत के कई हिस्सों पर विजय प्राप्त की और एक विशाल साम्राज्य की स्थापना की।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी कारण उसे 'एकराट' और 'एकछत्र' जैसी उपाधियाँ दी गईं।"
    },
    {
        question: "मगध साम्राज्य में किस खनिज की उपलब्धता ने सैन्य शक्ति को बढ़ाने में मदद की?",
        answers: shuffle([
            { text: "तांबा", correct: false },
            { text: "लोहा", correct: true },
            { text: "सोना", correct: false },
            { text: "चांदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मगध क्षेत्र में लोहे की खदानें प्रचुर मात्रा में उपलब्ध थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> इस लोहे का उपयोग बेहतर हथियार और कृषि उपकरण बनाने के लिए किया गया, जिससे सैन्य और आर्थिक दोनों क्षेत्रों में मगध को बढ़त मिली।"
    },
    {
        question: "कौन सा महाजनपद मगध के उत्थान से पहले सबसे शक्तिशाली था?",
        answers: shuffle([
            { text: "अवन्ति", correct: true },
            { text: "वत्स", correct: false },
            { text: "कौशल", correct: false },
            { text: "अंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवन्ति मगध के उत्थान से पहले एक शक्तिशाली महाजनपद था।<br><br><i class='fa-solid fa-angles-right icon'></i> मगध ने इसे शिशुनाग के शासनकाल में जीतकर अपने साम्राज्य में मिला लिया।"
    },
    {
        question: "अजातशत्रु ने अपने पिता बिम्बिसार की हत्या क्यों की थी?",
        answers: shuffle([
            { text: "साम्राज्य के विस्तार के लिए", correct: false },
            { text: "जैन धर्म के प्रभाव के कारण", correct: false },
            { text: "सिंहासन प्राप्त करने के लिए", correct: true },
            { text: "बौद्ध धर्म के प्रभाव के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजातशत्रु ने अपने पिता बिम्बिसार को मारकर सिंहासन प्राप्त किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी कारण उसे 'पितृहन्ता' कहा जाता है।"
    },
    {
        question: "बिम्बिसार ने किस चिकित्सक को महात्मा बुद्ध की सेवा में भेजा था?",
        answers: shuffle([
            { text: "जीवक", correct: true },
            { text: "चरक", correct: false },
            { text: "सुश्रुत", correct: false },
            { text: "धनवंतरि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिम्बिसार का राजवैद्य जीवक था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने महात्मा बुद्ध के बीमार होने पर उनकी सेवा के लिए जीवक को भेजा था।"
    },
    {
        question: "अजातशत्रु के बाद हर्यंक वंश का शासक कौन बना?",
        answers: shuffle([
            { text: "उदयीन", correct: true },
            { text: "अनिरुद्ध", correct: false },
            { text: "मुंडक", correct: false },
            { text: "नागदशक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजातशत्रु की मृत्यु के बाद उसका पुत्र उदयीन सिंहासन पर बैठा।"
    },
    {
        question: "शिशुनाग वंश का वह शासक कौन था जिसके शासनकाल में द्वितीय बौद्ध संगीति आयोजित की गई थी?",
        answers: shuffle([
            { text: "शिशुनाग", correct: false },
            { text: "कालासोक", correct: true },
            { text: "नंदीवर्धन", correct: false },
            { text: "महाबोधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालाशोक के शासनकाल में 383 ईसा पूर्व में वैशाली में द्वितीय बौद्ध संगीति का आयोजन हुआ था।"
    },
    {
        question: "किस मगध शासक को बौद्ध ग्रंथों में 'पित्रहंता' के रूप में चित्रित किया गया है?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: true },
            { text: "उदयीन", correct: false },
            { text: "A और B दोनों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध ग्रंथों के अनुसार, अजातशत्रु ने अपने पिता बिम्बिसार की हत्या की थी, इसलिए उसे 'पितृहन्ता' कहा जाता है।"
    },
    {
        question: "नंद वंश का वह कौन सा शासक था जिसने 'कलिंग' को जीतकर मगध में मिलाया?",
        answers: shuffle([
            { text: "महापद्मनंद", correct: true },
            { text: "धनानंद", correct: false },
            { text: "कालासोक", correct: false },
            { text: "शिशुनाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्मनंद ने कलिंग पर विजय प्राप्त की और वहाँ से एक जैन प्रतिमा को मगध ले आया था।"
    },
    {
        question: "नंद वंश के शासकों को जैन ग्रंथों में किस रूप में चित्रित किया गया है?",
        answers: shuffle([
            { text: "उदार और धार्मिक", correct: false },
            { text: "क्रूर और लोभी", correct: true },
            { text: "शक्तिशाली और विजेता", correct: false },
            { text: "धर्म के संरक्षक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन ग्रंथों के अनुसार, नंद शासक, विशेषकर धनानंद, को अपनी जनता पर अत्याचार करने वाला और अत्याधिक धन इकट्ठा करने वाला शासक बताया गया है।"
    },
    {
        question: "मगध की राजधानी राजगृह का निर्माण किस शासक ने करवाया था?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: true },
            { text: "अजातशत्रु", correct: false },
            { text: "उदयीन", correct: false },
            { text: "शिशुनाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजगृह (गिरिव्रज) को बिम्बिसार ने एक विस्तृत और भव्य राजधानी के रूप में विकसित किया था।"
    },
    {
        question: "किस शासक ने वज्जि संघ को जीतकर मगध साम्राज्य का विस्तार किया?",
        answers: shuffle([
            { text: "बिम्बिसार", correct: false },
            { text: "अजातशत्रु", correct: true },
            { text: "उदयीन", correct: false },
            { text: "शिशुनाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजातशत्रु ने लंबे संघर्ष के बाद वज्जि संघ (जिसमें वैशाली भी शामिल था) को हराकर मगध में मिला लिया था।"
    },
    {
        question: "महापद्मनंद ने कौन सी उपाधि धारण नहीं की थी?",
        answers: shuffle([
            { text: "एकराट", correct: false },
            { text: "एकछत्र", correct: false },
            { text: "सर्वक्षत्रान्तक", correct: false },
            { text: "पितृहन्ता", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्मनंद को 'एकराट', 'एकछत्र' और 'सर्वक्षत्रान्तक' जैसी उपाधियाँ दी गई थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> 'पितृहन्ता' की उपाधि हर्यंक वंश के शासकों को दी गई थी।"
    },
    {
        question: "नंद शासकों को बौद्ध ग्रंथों में किस रूप में जाना जाता है?",
        answers: shuffle([
            { text: "क्षत्रिय", correct: false },
            { text: "शूद्र", correct: true },
            { text: "वैश्य", correct: false },
            { text: "ब्राह्मण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध और जैन ग्रंथों में नंद शासकों को शूद्र वंश का बताया गया है।"
    },
    {
        question: "अजातशत्रु के शासनकाल में कौन से प्रमुख शहर स्थापित हुए थे?",
        answers: shuffle([
            { text: "राजगृह और वैशाली", correct: false },
            { text: "पाटलिपुत्र और वैशाली", correct: false },
            { text: "राजगृह और पाटलिपुत्र", correct: false },
            { text: "पाटलिग्राम (जो बाद में पाटलिपुत्र बना) और दुर्ग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजातशत्रु ने वज्जि संघ के आक्रमणों से अपनी राजधानी की रक्षा के लिए गंगा के किनारे 'पाटलिग्राम' नामक एक दुर्ग का निर्माण करवाया था, जो बाद में पाटलिपुत्र के रूप में विकसित हुआ।"
    },
    {
        question: "नंद वंश का संस्थापक महापद्मनंद किस कारण से प्रसिद्ध है?",
        answers: shuffle([
            { text: "जैन धर्म के संरक्षण के लिए", correct: false },
            { text: "विशाल सैन्य शक्ति के लिए", correct: false },
            { text: "साम्राज्य विस्तार के लिए", correct: false },
            { text: "उपर्युक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महापद्मनंद एक शक्तिशाली और महत्वाकांक्षी शासक था, जिसने कई राज्यों को जीतकर एक विशाल साम्राज्य का निर्माण किया।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने जैन धर्म को भी संरक्षण दिया और अपनी सैन्य शक्ति के लिए भी जाना जाता था।"
    },
    {
        question: "किस वंश के शासकों को पुराणों में 'शुद्र' कहा गया है?",
        answers: shuffle([
            { text: "हर्यंक वंश", correct: false },
            { text: "शिशुनाग वंश", correct: false },
            { text: "नंद वंश", correct: true },
            { text: "मौर्य वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुराणों में नंद वंश के शासकों को शूद्र बताया गया है, जो उनके निम्न सामाजिक मूल का संकेत देता है।"
    },
    {
        question: "शिशुनाग वंश का अंतिम शासक कौन था?",
        answers: shuffle([
            { text: "कालासोक", correct: false },
            { text: "नंदीवर्धन", correct: true },
            { text: "शिशुनाग", correct: false },
            { text: "महापद्मनंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नंदीवर्धन, जिसे महानंदीन भी कहा जाता है, शिशुनाग वंश का अंतिम शासक था।"
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