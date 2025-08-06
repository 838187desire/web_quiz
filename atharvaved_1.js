const questions = [
    {
        question: "अथर्ववेद में कुल कितने काण्ड (Books) हैं?",
        answers: shuffle([
            { text: "15", correct: false },
            { text: "18", correct: false },
            { text: "20", correct: true },
            { text: "25", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अथर्ववेद 20 काण्डों में विभाजित है, जिनमें लगभग 731 सूक्त और लगभग 5,977 मन्त्र शामिल हैं।"
    },
    {
        question: "अथर्ववेद में कुल लगभग कितने मन्त्र हैं?",
        answers: shuffle([
            { text: "5,000", correct: false },
            { text: "लगभग 5,987", correct: true },
            { text: "6,500", correct: false },
            { text: "7,000", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह ग्रंथ लगभग 5,987 मन्त्रों का समष्टिगत संग्रह है, जिसमें अनेक मन्त्र ऋग्वेद से भी लिए गए हैं।"
    },
    {
        question: "अथर्ववेद की वर्तमान में उपलब्ध कितनी शाखाएँ हैं?",
        answers: shuffle([
            { text: "दो", correct: true },
            { text: "तीन", correct: false },
            { text: "चार", correct: false },
            { text: "पाँच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरातन नौ शाखाओं में से केवल Shaunakiya और Paippalada शाखा आज उपलब्ध हैं।"
    },
    {
        question: "अथर्ववेद को किस अन्य नाम से जाना जाता है?",
        answers: shuffle([
            { text: "Rigvaveda", correct: false },
            { text: "Brahmaveda", correct: true },
            { text: "Samaveda", correct: false },
            { text: "Yajurveda", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसे ब्राह्मण-ज्ञान और औषधि-शक्ति के कारण Brahmaveda के नाम से भी जाना जाता है।"
    },
    {
        question: "“Atharvaveda” शब्द Atharvan + Veda से बना है—यहाँ Atharvan का क्या अर्थ है?",
        answers: shuffle([
            { text: "आर्य पुरोहित", correct: false },
            { text: "चिकित्सा-ऋषि", correct: false },
            { text: "जादू-ऋषि", correct: true },
            { text: "कवि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> Atharvan का अर्थ तंत्र एवं औषध संबंधी ज्ञान वाले ऋषि से है, जो मंत्र औषधियों में निपुण थे।"
    },
    {
        question: "अथर्ववेद के कितने मन्त्र लगभग ऋग्वेद से लिए गए हैं?",
        answers: shuffle([
            { text: "लगभग 800", correct: false },
            { text: "लगभग 1,200", correct: true },
            { text: "लगभग 1,500", correct: false },
            { text: "लगभग 2,000", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुल मन्त्रों में से लगभग एक-छठाई (≈1200) ऋग्वेद से लिए गए हैं।"
    },
    {
        question: "अथर्ववेद की मुख्य प्रमुख विशेषता क्या है?",
        answers: shuffle([
            { text: "ऋग्वेदीय यज्ञ विधि विधान", correct: false },
            { text: "संगीतमंत्र", correct: false },
            { text: "जादू-टोना एवं औषधि ज्ञान", correct: true },
            { text: "समवेद की प्रणाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह वैदिक ग्रंथ तांत्रिक मंत्रों, औषधि प्रणाली व लोकोपयोगी उपायों का आद्य स्रोत माना जाता है।"
    },
    {
        question: "अथर्ववेद में 'भूमि सूक्त' किस काण्ड में आता है?",
        answers: shuffle([
            { text: "तृतीय", correct: false },
            { text: "बारहवाँ", correct: true },
            { text: "चौदहवाँ", correct: false },
            { text: "सत्रहवाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 12वें काण्ड में 'भूमिसूक्त' है जो देशभक्ति और पृथ्वी-आदर की महिमा करता है।"
    },
    {
        question: "अथर्ववेद में कौन-सा उपनिषद शामिल है?",
        answers: shuffle([
            { text: "ईशावास्य उपनिषद", correct: false },
            { text: "केन उपनिषद", correct: false },
            { text: "मुण्डक उपनिषद", correct: true },
            { text: "छान्दोग्य उपनिषद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुण्डक उपनिषद, प्रश्न उपनिषद और माण्डूक्य उपनिषद Atharvaveda से संबंधित हैं; मुण्डक विशेष रूप से प्रसिद्ध है।"
    },
    {
        question: "अथर्ववेद में किस काण्ड में विवाह संबंधी सूक्त शामिल हैं?",
        answers: shuffle([
            { text: "12वाँ", correct: false },
            { text: "13वाँ", correct: false },
            { text: "14वाँ", correct: true },
            { text: "15वाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 14वें काण्ड में विवाह संस्कार, पति-पत्नी संबंध एवं गृहस्थ जीवन के मंत्र सम्मिलित हैं।"
    },
    {
        question: "अथर्ववेद में ‘गोपथ ब्राह्मण’ किस विषय पर केंद्रित है?",
        answers: shuffle([
            { text: "यज्ञ विधि", correct: false },
            { text: "चिकित्सकीय मंत्र", correct: false },
            { text: "ब्राह्मण ग्रंथ", correct: true },
            { text: "राजनैतिक शासन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ‘गोपथ ब्राह्मण’ अथर्ववेद का एकमात्र ब्राह्मण ग्रंथ है, जिसमें वेद की शिक्षाओं और मंत्रों की विस्तृत व्याख्या है।"
    },
    {
        question: "अथर्ववेद में ‘सभा’ और ‘समिति’ का क्या महत्व है?",
        answers: shuffle([
            { text: "धार्मिक सभा", correct: false },
            { text: "राजनीतिक संस्थाएँ", correct: true },
            { text: "यज्ञ स्थल", correct: false },
            { text: "औषधि मंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ‘सभा’ और ‘समिति’ प्राचीन भारतीय समाज की राजनीतिक संस्थाएँ थीं, जो राजा की शक्ति पर नियंत्रण रखती थीं।"
    },
    {
        question: "अथर्ववेद को किस वेद का ‘भैषज्य वेद’ कहा जाता है क्योंकि इसमें क्या प्रमुख है?",
        answers: shuffle([
            { text: "औषधि और उपचार", correct: true },
            { text: "युद्ध मंत्र", correct: false },
            { text: "धार्मिक अनुष्ठान", correct: false },
            { text: "संगीत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अथर्ववेद में रोगों के उपचार और औषधियों का वर्णन है, इसलिए इसे ‘भैषज्य वेद’ भी कहा जाता है।"
    },
    {
        question: "अथर्ववेद में ‘अभिचार’ मंत्रों का उद्देश्य क्या था?",
        answers: shuffle([
            { text: "अच्छी फसल", correct: false },
            { text: "रोग निवारण", correct: false },
            { text: "शत्रु नाश", correct: true },
            { text: "विवाह मंगल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अभिचार मंत्र जादुई शक्तियों से शत्रुओं को नुकसान पहुंचाने के लिए प्रयोग किए जाते थे।"
    },
    {
        question: "‘माण्डूक्य उपनिषद’ अथर्ववेद से संबंधित है, इसमें क्या वर्णित है?",
        answers: shuffle([
            { text: "ऋषियों के जीवन", correct: false },
            { text: "मंत्रों की शक्ति", correct: false },
            { text: "ॐ और चेतना के चार स्तर", correct: true },
            { text: "राजनैतिक दर्शन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माण्डूक्य उपनिषद में ॐ के स्वरूप और चेतना के जाग्रत, स्वप्न, सुषुप्ति और तुरीय स्तरों का वर्णन है।"
    },
    {
        question: "अथर्ववेद में ‘श्याम अयस’ किस धातु का उल्लेख है?",
        answers: shuffle([
            { text: "सोना", correct: false },
            { text: "तांबा", correct: false },
            { text: "लोहा", correct: true },
            { text: "चाँदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ‘श्याम अयस’ अर्थात काला धातु, लोहे का ही उल्लेख है जो प्राचीन युग की तकनीकी उन्नति को दर्शाता है।"
    },
    {
        question: "अथर्ववेद में ‘पुरोहित’ को किस प्रकार की शक्ति का ज्ञाता माना गया है?",
        answers: shuffle([
            { text: "केवल धार्मिक", correct: false },
            { text: "केवल राजनीतिक", correct: false },
            { text: "धार्मिक और जादुई दोनों", correct: true },
            { text: "आर्थिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरोहित धार्मिक अनुष्ठानों के साथ-साथ जादुई मंत्रों का भी उपयोग करता था।"
    },
    {
        question: "अथर्ववेद की कौन-सी शाखा उत्तर भारत में अधिक प्रचलित थी?",
        answers: shuffle([
            { text: "पैप्पलाद", correct: false },
            { text: "शौनक", correct: true },
            { text: "दोनों", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शौनक शाखा की व्यवस्था बेहतर थी, इसलिए यह उत्तर भारत में अधिक प्रचलित थी।"
    },
    {
        question: "अथर्ववेद में ‘रोग’ को किस रूप में माना गया है?",
        answers: shuffle([
            { text: "केवल प्राकृतिक", correct: false },
            { text: "केवल दैवीय", correct: false },
            { text: "प्राकृतिक और जादुई दोनों", correct: true },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रोग को प्राकृतिक कारणों और जादू-टोना दोनों से माना गया, और उपचार दोनों तरह से किया जाता था।"
    },
    {
        question: "अथर्ववेद में ‘काल’ की महिमा किस काण्ड में वर्णित है?",
        answers: shuffle([
            { text: "11वाँ", correct: false },
            { text: "14वाँ", correct: false },
            { text: "19वाँ", correct: true },
            { text: "20वाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 19वें काण्ड में काल को सर्वोच्च और सर्वशक्तिमान शक्ति के रूप में दर्शाया गया है।"
    },
    {
        question: "अथर्ववेद में ‘विवाह’ से संबंधित मंत्र किस काण्ड में मिलते हैं?",
        answers: shuffle([
            { text: "11वाँ", correct: false },
            { text: "12वाँ", correct: false },
            { text: "13वाँ", correct: false },
            { text: "14वाँ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 14वें काण्ड को विवाह काण्ड कहा जाता है, जिसमें विवाह संस्कार और पति-पत्नी के कर्तव्य विस्तार से हैं।"
    },
    {
        question: "अथर्ववेद में ‘गृहस्थ जीवन’ को किस प्रकार माना गया है?",
        answers: shuffle([
            { text: "सर्वश्रेष्ठ जीवन", correct: false },
            { text: "आध्यात्मिक जीवन", correct: false },
            { text: "अधिक महत्वपूर्ण जीवन", correct: true },
            { text: "त्यागी जीवन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अथर्ववेद में गृहस्थ जीवन की समस्याओं, इच्छाओं और कल्याण पर विशेष ध्यान दिया गया है।"
    },
    {
        question: "अथर्ववेद में ‘मन्त्रों’ का मुख्य उद्देश्य क्या था?",
        answers: shuffle([
            { text: "केवल यज्ञ", correct: false },
            { text: "रोगों का उपचार", correct: false },
            { text: "जादू-टोना और सुरक्षा", correct: true },
            { text: "संगीत सृजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंत्रों का प्रयोग रोग निवारण, शत्रु नियंत्रण और जीवन में सुरक्षा के लिए किया जाता था।"
    },
    {
        question: "अथर्ववेद की भाषा और शैली किस प्रकार की है?",
        answers: shuffle([
            { text: "सरल और सुसंगत", correct: false },
            { text: "कठिन और रहस्यमय", correct: true },
            { text: "कविता आधारित", correct: false },
            { text: "प्राचीन प्रार्थनाएँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अथर्ववेद की भाषा में कई मंत्र तांत्रिक और रहस्यमय स्वरूप के हैं, जो उसके जादुई ज्ञान को दर्शाते हैं।"
    },
    {
        question: "अथर्ववेद में किस विषय को ‘अपरा विद्या’ कहा गया है?",
        answers: shuffle([
            { text: "आध्यात्मिक ज्ञान", correct: false },
            { text: "लौकिक ज्ञान", correct: true },
            { text: "औषधि विज्ञान", correct: false },
            { text: "मंत्र विज्ञान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ‘अपरा विद्या’ वह लौकिक, सांसारिक और व्यावहारिक ज्ञान है जो ‘परा विद्या’ (आध्यात्मिक ज्ञान) से अलग माना गया है।"
    },
    {
        question: "अथर्ववेद में ‘प्रश्न उपनिषद’ में कुल कितने शिष्य थे जिन्होंने पिप्पलाद से प्रश्न पूछे?",
        answers: shuffle([
            { text: "7", correct: false },
            { text: "6", correct: true },
            { text: "5", correct: false },
            { text: "4", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रश्न उपनिषद में छह शिष्यों ने गुरु पिप्पलाद से ब्रह्म और जीवन के रहस्यों पर प्रश्न पूछे हैं।"
    },
    {
        question: "अथर्ववेद में ‘पृथ्वी सूक्त’ किस काण्ड में है?",
        answers: shuffle([
            { text: "13वाँ", correct: false },
            { text: "12वाँ", correct: true },
            { text: "11वाँ", correct: false },
            { text: "10वाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी सूक्त अथर्ववेद के 12वें काण्ड में है, जो मातृभूमि के प्रति सम्मान दर्शाता है।"
    },
    {
        question: "अथर्ववेद में वर्णित ‘सभाएँ’ और ‘समितियाँ’ किस प्रकार की संस्थाएँ थीं?",
        answers: shuffle([
            { text: "आर्थिक", correct: false },
            { text: "राजनीतिक", correct: true },
            { text: "सामाजिक", correct: false },
            { text: "धार्मिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये संस्थाएँ राजा की शक्तियों को नियंत्रित करती थीं और शासन में महत्वपूर्ण भूमिका निभाती थीं।"
    },
    {
        question: "अथर्ववेद के अनुसार ‘अभिचार’ मंत्रों का उपयोग किस उद्देश्य से होता था?",
        answers: shuffle([
            { text: "कृषि वृद्धि", correct: false },
            { text: "शत्रु नाश", correct: true },
            { text: "रोग चिकित्सा", correct: false },
            { text: "युद्ध विजय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अभिचार मंत्रों का प्रयोग शत्रुओं को नुकसान पहुँचाने या वश में करने के लिए किया जाता था।"
    },
    {
        question: "अथर्ववेद की कौन-सी शाखा को पैप्पलाद शाखा कहा जाता है?",
        answers: shuffle([
            { text: "पश्चिम भारत शाखा", correct: false },
            { text: "पूर्व भारत शाखा", correct: false },
            { text: "दक्षिण भारत शाखा", correct: true },
            { text: "उत्तर भारत शाखा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पैप्पलाद शाखा दक्षिण भारत में अधिक प्रचलित थी।"
    },
    {
        question: "अथर्ववेद में ‘मन्त्र’ शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "ज्ञान", correct: false },
            { text: "कर्म", correct: false },
            { text: "जादूई वाक्य", correct: true },
            { text: "यज्ञ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मन्त्र को शक्तिशाली जादुई और आध्यात्मिक वाक्य माना जाता है।"
    },
    {
        question: "अथर्ववेद में ‘विवाह संस्कार’ का महत्व क्या बताया गया है?",
        answers: shuffle([
            { text: "राजनीतिक गठबंधन", correct: false },
            { text: "आर्थिक समझौता", correct: false },
            { text: "आध्यात्मिक मुक्ति", correct: false },
            { text: "सामाजिक बंधन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विवाह को समाज में स्थिरता और परिवार के निर्माण का आधार माना गया है।"
    },
    {
        question: "अथर्ववेद में ‘शौनक’ शाखा का प्रमुख स्थान किस क्षेत्र में था?",
        answers: shuffle([
            { text: "पश्चिम भारत", correct: false },
            { text: "पूर्व भारत", correct: false },
            { text: "उत्तर भारत", correct: true },
            { text: "दक्षिण भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शौनक शाखा उत्तर भारत में अधिक प्रचलित और प्रभावशाली थी।"
    },
    {
        question: "अथर्ववेद में ‘मुण्डक उपनिषद’ किस विषय पर आधारित है?",
        answers: shuffle([
            { text: "राजनीतिक दर्शन", correct: false },
            { text: "कृषि विज्ञान", correct: false },
            { text: "युद्ध नीति", correct: false },
            { text: "आध्यात्मिक ज्ञान", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुण्डक उपनिषद में परम ब्रह्म और आध्यात्मिक ज्ञान का वर्णन है।"
    },
    {
        question: "अथर्ववेद में ‘वायु’ का क्या महत्व है?",
        answers: shuffle([
            { text: "मृत्यु का देवता", correct: false },
            { text: "जल का प्रतीक", correct: false },
            { text: "जीवन की ऊर्जा", correct: true },
            { text: "यज्ञ का देवता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वायु अथर्ववेद में प्राण और जीवन शक्ति का प्रतीक माना गया है।"
    },
    {
        question: "अथर्ववेद में ‘जादू-टोना’ का क्या वर्णन है?",
        answers: shuffle([
            { text: "संगीत समारोह", correct: false },
            { text: "रोग निवारण और सुरक्षा", correct: true },
            { text: "सामाजिक आयोजन", correct: false },
            { text: "केवल धार्मिक कार्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जादू-टोना के माध्यम से बुरी शक्तियों से बचाव और रोगों का उपचार किया जाता था।"
    },
    {
        question: "अथर्ववेद के मंत्रों का मुख्य स्रोत क्या था?",
        answers: shuffle([
            { text: "योद्धा", correct: false },
            { text: "पुरोहित", correct: false },
            { text: "राजा", correct: false },
            { text: "ऋषि-मुनि", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋषि-मुनि वेदों के ज्ञान के स्रोत थे जिन्होंने मंत्रों का सृजन किया।"
    },
    {
        question: "अथर्ववेद में ‘उषा’ का क्या अर्थ है?",
        answers: shuffle([
            { text: "अंधकार", correct: false },
            { text: "चंद्रमा", correct: false },
            { text: "सुबह की किरण", correct: true },
            { text: "सूरज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उषा को सुबह की पहली किरण माना गया है जो नयी शुरुआत का प्रतीक है।"
    },
    {
        question: "अथर्ववेद में ‘धनुर्वेद’ का क्या संबंध है?",
        answers: shuffle([
            { text: "संगीत कला", correct: false },
            { text: "मंत्र विज्ञान", correct: false },
            { text: "चिकित्सा विज्ञान", correct: false },
            { text: "शस्त्र विद्या", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धनुर्वेद युद्ध और शस्त्रों का विज्ञान है, जिसका कुछ उल्लेख अथर्ववेद में मिलता है।"
    },
    {
        question: "अथर्ववेद में ‘अग्नि’ का क्या स्थान है?",
        answers: shuffle([
            { text: "केवल प्रतीक", correct: false },
            { text: "परिवार संरक्षक", correct: false },
            { text: "यज्ञ का केंद्र", correct: true },
            { text: "देवता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अग्नि वेदों में यज्ञ के प्रमुख देवता और अग्नि केंद्र के रूप में महत्वपूर्ण है।"
    },
    {
        question: "अथर्ववेद में ‘ऋषि अंगिरस’ का क्या महत्व है?",
        answers: shuffle([
            { text: "राजनैतिक नेता", correct: false },
            { text: "जादू मंत्रों के प्रणेता", correct: true },
            { text: "शून्यता के ज्ञाता", correct: false },
            { text: "वेद के लेखक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंगिरस ऋषि को जादू और औषधि मंत्रों का स्रोत माना गया है।"
    },
    {
        question: "अथर्ववेद में ‘शांति पाठ’ का क्या उद्देश्य है?",
        answers: shuffle([
            { text: "व्यापार वृद्धि", correct: false },
            { text: "समाज में शांति और समृद्धि", correct: true },
            { text: "परिवार के लिए आशीर्वाद", correct: false },
            { text: "युद्ध की तैयारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शांति पाठ से समाज में शांति, स्वास्थ्य और समृद्धि की कामना की जाती है।"
    },
    {
        question: "अथर्ववेद में ‘ब्रह्म’ शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "उपरोक्त सभी", correct: true },
            { text: "पुरोहित", correct: false },
            { text: "मंत्र की शक्ति", correct: false },
            { text: "परम सत्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्रह्म शब्द का प्रयोग परम सत्य, मंत्र की शक्ति और पुरोहित के लिए होता है।"
    },
    {
        question: "अथर्ववेद का क्या महत्व है?",
        answers: shuffle([
            { text: "केवल यज्ञ ग्रंथ", correct: false },
            { text: "केवल चिकित्सा ग्रंथ", correct: false },
            { text: "सामाजिक, राजनीतिक और औषधीय ज्ञान", correct: true },
            { text: "केवल धार्मिक ग्रंथ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अथर्ववेद में सामाजिक, राजनीतिक, औषधीय और जादू टोना सभी का वर्णन है।"
    },
    {
        question: "अथर्ववेद में ‘ऋग्वेद’ से क्या भिन्नता है?",
        answers: shuffle([
            { text: "कोई भिन्नता नहीं", correct: false },
            { text: "भाषा", correct: false },
            { text: "विषय वस्तु और उपयोग", correct: true },
            { text: "केवल मंत्रों की संख्या", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद मुख्यतः स्तुतियां हैं, जबकि अथर्ववेद में औषधि, जादू-टोना और सामाजिक विषय अधिक हैं।"
    },
    {
        question: "अथर्ववेद में ‘विज्ञान’ शब्द का अर्थ क्या है?",
        answers: shuffle([
            { text: "अंधविश्वास", correct: false },
            { text: "विशिष्ट ज्ञान या कौशल", correct: true },
            { text: "आध्यात्मिक ज्ञान", correct: false },
            { text: "कल्पना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विज्ञान का अर्थ विशेष ज्ञान या कौशल होता है, जो अथर्ववेद में जादू और औषधि विज्ञान के लिए उपयोग हुआ।"
    },
    {
        question: "अथर्ववेद में ‘मन्त्र’ कैसे प्राप्त होते थे?",
        answers: shuffle([
            { text: "प्रयोग से", correct: false },
            { text: "परंपरा से", correct: false },
            { text: "दिव्य अनुभव से", correct: true },
            { text: "अध्ययन से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋषि मंत्रों को ध्यान और तपस्या से प्राप्त करते थे, जो दिव्य प्रेरणा मानी जाती थी।"
    },
    {
        question: "अथर्ववेद का प्रमुख उद्देश्य क्या है?",
        answers: shuffle([
            { text: "केवल साहित्य रचना", correct: false },
            { text: "केवल युद्ध की तैयारी", correct: false },
            { text: "जीवन की समस्याओं का समाधान", correct: true },
            { text: "केवल पूजा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अथर्ववेद का उद्देश्य रोग, शत्रु, सामाजिक और प्राकृतिक समस्याओं का समाधान देना है।"
    },
    {
        question: "अथर्ववेद के कितने काण्ड हैं?",
        answers: shuffle([
            { text: "25", correct: false },
            { text: "20", correct: true },
            { text: "18", correct: false },
            { text: "15", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अथर्ववेद संहिता 20 काण्डों में विभाजित है।"
    },
    {
        question: "अथर्ववेद में ‘गृहस्थ जीवन’ को किस प्रकार दर्शाया गया है?",
        answers: shuffle([
            { text: "त्याग का जीवन", correct: false },
            { text: "समस्याओं और कल्याण का केंद्र", correct: true },
            { text: "आध्यात्मिक श्रेष्ठता", correct: false },
            { text: "अनावश्यक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गृहस्थ जीवन को अथर्ववेद में स्वास्थ्य, धन, संतान और सुरक्षा से जुड़ा जीवन माना गया है।"
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