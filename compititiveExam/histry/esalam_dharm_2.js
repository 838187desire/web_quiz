const questions = [
    {
        topHeading: "इस्लाम धर्म पर आधारित बहुविकल्पी प्रश्न part 2 (quiz_no.34)"
    },
    {
        question: "'सुन्नाह' का क्या अर्थ है?",
        answers: [
            { text: "कुरान का एक भाग", correct: false },
            { text: "पैगंबर मुहम्मद की परंपरा और अभ्यास", correct: true },
            { text: "इस्लामी कानून का एक रूप", correct: false },
            { text: "नमाज का एक प्रकार", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुन्नाह, पैगंबर मुहम्मद के जीवन, उनके कथनों, कार्यों और प्रथाओं को संदर्भित करती है, जो मुसलमानों के लिए जीवन का एक महत्वपूर्ण आदर्श है।"
    },
    {
        question: "इस्लाम में 'अदन' शब्द का क्या अर्थ है?",
        answers: [
            { text: "सुबह की प्रार्थना", correct: false },
            { text: "प्रार्थना के लिए आह्वान", correct: true },
            { text: "उपवास का अंत", correct: false },
            { text: "दान देना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अदन' वह आह्वान है जो एक मुअज्जिन (अजान देने वाला) द्वारा मस्जिद से दिन में पाँच बार नमाज के लिए पुकारा जाता है।"
    },
    {
        question: "'खुतबा' क्या है?",
        answers: [
            { text: "उपवास की घोषणा", correct: false },
            { text: "जुमे की नमाज का उपदेश", correct: true },
            { text: "युद्ध की घोषणा", correct: false },
            { text: "हज का एक अनुष्ठान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खुतबा' जुमे (शुक्रवार) की नमाज के दौरान इमाम द्वारा दिया गया उपदेश है, जिसमें धार्मिक और सामाजिक मुद्दों पर बात की जाती है।"
    },
    {
        question: "'शिया' संप्रदाय के अनुसार, इमामों का वंश किनसे शुरू हुआ?",
        answers: [
            { text: "अबू बक्र से", correct: false },
            { text: "अली और फातिमा से", correct: true },
            { text: "उस्मान से", correct: false },
            { text: "उमर से", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शिया इस्लाम में, इमामों (आध्यात्मिक और राजनीतिक नेता) का वंश पैगंबर मुहम्मद के दामाद अली और उनकी बेटी फातिमा से शुरू हुआ।"
    },
    {
        question: "उमय्यद खिलाफत के बाद कौन-सी खिलाफत आई?",
        answers: [
            { text: "उस्मानी खिलाफत", correct: false },
            { text: "अब्बासी खिलाफत", correct: true },
            { text: "फातिमी खिलाफत", correct: false },
            { text: "राशिदून खिलाफत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 750 ईस्वी में उमय्यद खिलाफत के पतन के बाद अब्बासी खिलाफत की स्थापना हुई, जिसकी राजधानी बगदाद थी।"
    },
    {
        question: "'अब्बासी खिलाफत' की राजधानी क्या थी?",
        answers: [
            { text: "दमिश्क", correct: false },
            { text: "काहिरा", correct: false },
            { text: "बगदाद", correct: true },
            { text: "कॉर्डोबा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अब्बासी खिलाफत के दौरान, बगदाद कला, विज्ञान और संस्कृति का एक महत्वपूर्ण केंद्र बन गया था, जिसे 'ज्ञान का घर' भी कहा जाता था।"
    },
    {
        question: "'अल्लाह' शब्द का क्या अर्थ है?",
        answers: [
            { text: "ईश्वर का संदेशवाहक", correct: false },
            { text: "सर्वशक्तिमान ईश्वर", correct: true },
            { text: "पैगंबर", correct: false },
            { text: "शासक", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अल्लाह' अरबी भाषा में सर्वशक्तिमान ईश्वर के लिए प्रयोग किया जाने वाला नाम है।"
    },
    {
        question: "इस्लाम में 'शरीयत' का क्या महत्व है?",
        answers: [
            { text: "यह केवल पूजा-पाठ का तरीका बताती है।", correct: false },
            { text: "यह मुसलमानों के लिए जीवन जीने का एक पूर्ण कानूनी और नैतिक ढांचा प्रदान करती है।", correct: true },
            { text: "यह केवल शासन चलाने का नियम है।", correct: false },
            { text: "यह केवल कुरान में निहित है।", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शरीयत इस्लामी कानून है जो कुरान और हदीस पर आधारित है और मुसलमानों के जीवन के सभी पहलुओं को नियंत्रित करती है।"
    },
    {
        question: "'पैगंबर मुहम्मद' को पहली बार अल्लाह का संदेश किस उम्र में मिला था?",
        answers: [
            { text: "25 साल", correct: false },
            { text: "30 साल", correct: false },
            { text: "40 साल", correct: true },
            { text: "50 साल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पैगंबर मुहम्मद को 40 साल की उम्र में मक्का के पास हीरा की गुफा में अल्लाह का पहला संदेश मिला था।"
    },
    {
        question: "'मस्जिद-ए-नबवी' (Prophet's Mosque) कहाँ स्थित है?",
        answers: [
            { text: "मक्का", correct: false },
            { text: "मदीना", correct: true },
            { text: "यरूशलम", correct: false },
            { text: "इस्तांबुल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मस्जिद-ए-नबवी मदीना में स्थित है और यह पैगंबर मुहम्मद द्वारा बनाई गई थी।<br><br><i class='fa-solid fa-angles-right icon'></i> यह इस्लाम का दूसरा सबसे पवित्र स्थल है।"
    },
    {
        question: "'हज' के दौरान तीर्थयात्री किस रंग के कपड़े पहनते हैं?",
        answers: [
            { text: "काला", correct: false },
            { text: "सफेद", correct: true },
            { text: "हरा", correct: false },
            { text: "लाल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हज के दौरान, पुरुष तीर्थयात्री 'इहराम' नामक सफेद और बिना सिला हुआ कपड़ा पहनते हैं, जो सभी को एक समान दर्जा देता है।"
    },
    {
        question: "'ईदुल अज़हा' का दूसरा नाम क्या है?",
        answers: [
            { text: "मीठी ईद", correct: false },
            { text: "बकरीद", correct: true },
            { text: "ईद-ए-मिलाद", correct: false },
            { text: "शबे बारात", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ईदुल अज़हा को 'बकरीद' या 'कुर्बानी की ईद' भी कहते हैं, क्योंकि इस दिन पैगंबर इब्राहीम की कुर्बानी की याद में जानवर की कुर्बानी दी जाती है।"
    },
    {
        question: "इस्लाम के पाँच स्तंभों में से 'सौम' (Sawm) का क्या अर्थ है?",
        answers: [
            { text: "हज", correct: false },
            { text: "नमाज", correct: false },
            { text: "ज़कात", correct: false },
            { text: "उपवास", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सौम' रमज़ान के महीने में उपवास रखने की प्रथा है।"
    },
    {
        question: "'शहीद' शब्द का क्या अर्थ है?",
        answers: [
            { text: "धार्मिक नेता", correct: false },
            { text: "विद्वान", correct: false },
            { text: "अल्लाह के लिए अपना जीवन बलिदान करने वाला व्यक्ति", correct: true },
            { text: "राजा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शहीद' उस व्यक्ति को कहा जाता है जो अल्लाह के रास्ते में या धार्मिक उद्देश्य के लिए लड़ते हुए अपना जीवन बलिदान करता है।"
    },
    {
        question: "'सुन्नी' इस्लाम के अनुयायी इस्लाम के सिद्धांतों को कहाँ से प्राप्त करते हैं?",
        answers: [
            { text: "केवल कुरान से", correct: false },
            { text: "केवल हदीस से", correct: false },
            { text: "कुरान, हदीस और इज्मा से", correct: true },
            { text: "केवल इज्मा से", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुन्नी इस्लाम में, शरीयत के स्रोत कुरान, हदीस, इज्मा (सामुदायिक सहमति) और क़ियास (तुलनात्मक तर्क) हैं।"
    },
    {
        question: "'इस्लाम' शब्द का शाब्दिक अर्थ क्या है?",
        answers: [
            { text: "ज्ञान", correct: false },
            { text: "शांति के लिए समर्पण", correct: true },
            { text: "प्रेम", correct: false },
            { text: "मुक्ति", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'इस्लाम' का मूल शब्द 'सलाम' है, जिसका अर्थ है 'शांति', और 'इस्लाम' का अर्थ है 'अल्लाह की इच्छा के प्रति समर्पण', जिससे शांति प्राप्त होती है।"
    },
    {
        question: "'अली इब्न अबी तालिब' कौन थे?",
        answers: [
            { text: "पहले खलीफा", correct: false },
            { text: "दूसरे खलीफा", correct: false },
            { text: "चौथे खलीफा", correct: true },
            { text: "पैगंबर मुहम्मद के भाई", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अली इब्न अबी तालिब पैगंबर मुहम्मद के चचेरे भाई और दामाद थे और राशिदून खिलाफत के चौथे और अंतिम खलीफा थे।"
    },
    {
        question: "'फातिमी खिलाफत' कहाँ स्थापित हुई थी?",
        answers: [
            { text: "बगदाद", correct: false },
            { text: "काहिरा", correct: true },
            { text: "दमिश्क", correct: false },
            { text: "कॉर्डोबा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फातिमी खिलाफत 10वीं से 12वीं सदी तक उत्तरी अफ्रीका में एक शिया खिलाफत थी, जिसकी राजधानी काहिरा (मिस्र) थी।"
    },
    {
        question: "'अरब प्रायद्वीप' में इस्लाम से पहले के काल को किस नाम से जाना जाता है?",
        answers: [
            { text: "सोने का युग", correct: false },
            { text: "अज्ञानता का युग (जाहिलिया)", correct: true },
            { text: "सभ्यताओं का युग", correct: false },
            { text: "युद्ध का युग", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस्लाम के उदय से पहले अरब में मूर्ति पूजा, कबीलाई झगड़े और अन्य सामाजिक बुराइयाँ व्याप्त थीं, इसलिए उस काल को 'जाहिलिया' या अज्ञानता का युग कहा जाता है।"
    },
    {
        question: "'ईदुल फितर' को किस नाम से भी जाना जाता है?",
        answers: [
            { text: "कुर्बानी की ईद", correct: false },
            { text: "मीठी ईद", correct: true },
            { text: "बड़ी ईद", correct: false },
            { text: "छोटी ईद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ईदुल फितर को 'मीठी ईद' भी कहते हैं, क्योंकि इस दिन सेवइयां जैसे मीठे व्यंजन बनाए जाते हैं।"
    },
    {
        question: "पैगंबर मुहम्मद ने मदीना में कौन-सी संधि की थी?",
        answers: [
            { text: "हिजरा संधि", correct: false },
            { text: "हुदैबिया संधि", correct: false },
            { text: "मदीना का संविधान", correct: true },
            { text: "बद्र का युद्ध", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पैगंबर मुहम्मद ने मदीना में एक दस्तावेज तैयार किया, जिसे 'मदीना का संविधान' कहते हैं, जिसने शहर के विभिन्न समुदायों (मुसलमान, यहूदी, ईसाई) के बीच शांति और सह-अस्तित्व के नियम स्थापित किए।"
    },
    {
        question: "'शिया' और 'सुन्नी' के अलावा इस्लाम का एक तीसरा प्रमुख संप्रदाय कौन-सा है?",
        answers: [
            { text: "खारिजी", correct: true },
            { text: "वहाबी", correct: false },
            { text: "सूफी", correct: false },
            { text: "अहमदिया", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शिया और सुन्नी के अलावा 'खारिजी' इस्लाम का एक ऐतिहासिक संप्रदाय था जो अली के खिलाफ विद्रोह से उत्पन्न हुआ था।"
    },
    {
        question: "'खदीजा' के साथ विवाह के समय पैगंबर मुहम्मद की उम्र क्या थी?",
        answers: [
            { text: "25 साल", correct: true },
            { text: "30 साल", correct: false },
            { text: "40 साल", correct: false },
            { text: "50 साल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पैगंबर मुहम्मद ने 25 साल की उम्र में 40 साल की खदीजा से विवाह किया था।"
    },
    {
        question: "'अबू बक्र' का शासनकाल कितने वर्ष का था?",
        answers: [
            { text: "10 वर्ष", correct: false },
            { text: "2 वर्ष", correct: true },
            { text: "5 वर्ष", correct: false },
            { text: "12 वर्ष", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पहले खलीफा अबू बक्र ने 632 से 634 ईस्वी तक शासन किया, यानी उनका शासनकाल लगभग 2 वर्ष का था।"
    },
    {
        question: "'अब्बासी खिलाफत' के तहत बगदाद में स्थापित 'ज्ञान का घर' (House of Wisdom) को क्या कहा जाता था?",
        answers: [
            { text: "अल-जामिया", correct: false },
            { text: "बैत-उल-हिकमा", correct: true },
            { text: "दार-उल-इल्म", correct: false },
            { text: "मदरसा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बैत-उल-हिकमा' अब्बासी खिलाफत के दौरान बगदाद में स्थापित एक प्रमुख शैक्षणिक और अनुवाद केंद्र था, जहाँ यूनानी, फारसी और भारतीय ग्रंथों का अरबी में अनुवाद किया जाता था।"
    },
    {
        question: "इस्लाम में 'तौहीद' (Tawhid) का क्या अर्थ है?",
        answers: [
            { text: "पैगंबरों में विश्वास", correct: false },
            { text: "ईश्वर की एकता", correct: true },
            { text: "परलोक में विश्वास", correct: false },
            { text: "स्वर्ग और नरक का सिद्धांत", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तौहीद' इस्लाम का सबसे मूल सिद्धांत है, जिसका अर्थ है कि अल्लाह एकमात्र, अविभाज्य, और अद्वितीय ईश्वर है।"
    },
    {
        question: "'सफवी साम्राज्य' की स्थापना किस सदी में हुई थी?",
        answers: [
            { text: "13वीं सदी", correct: false },
            { text: "15वीं सदी", correct: false },
            { text: "16वीं सदी", correct: true },
            { text: "18वीं सदी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सफवी साम्राज्य की स्थापना 16वीं सदी की शुरुआत में शाह इस्माइल प्रथम ने की थी, जिसने ईरान में शिया इस्लाम को राष्ट्र धर्म बनाया।"
    },
    {
        question: "'हज' यात्रा के दौरान किस स्थान पर शैतान को पत्थर मारने का अनुष्ठान किया जाता है?",
        answers: [
            { text: "काबा", correct: false },
            { text: "माउंट अराफात", correct: false },
            { text: "मिना", correct: true },
            { text: "मुज़दलिफा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हज के दौरान, तीर्थयात्री मिना में तीन स्तंभों पर पत्थर फेंकते हैं, जो शैतान को पत्थर मारने का प्रतीक है।"
    },
    {
        question: "'अब्बासी खिलाफत' की स्थापना किसने की थी?",
        answers: [
            { text: "अबू बक्र", correct: false },
            { text: "अली", correct: false },
            { text: "अब्बास इब्न अब्द-अल-मुत्तलिब", correct: false },
            { text: "अबू अल-अब्बास अल-सफ्फाह", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अबू अल-अब्बास अल-सफ्फाह ने 750 ईस्वी में उमय्यद खिलाफत को उखाड़ फेंकने के बाद अब्बासी खिलाफत की स्थापना की थी।"
    },
    {
        question: "'इब्न सिना' (Avicenna) किस क्षेत्र से संबंधित एक प्रसिद्ध इस्लामी विद्वान थे?",
        answers: [
            { text: "खगोल विज्ञान", correct: false },
            { text: "गणित", correct: false },
            { text: "दर्शन और चिकित्सा", correct: true },
            { text: "भूगोल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इब्न सिना एक प्रसिद्ध फारसी बहुज्ञ (polymath) थे जिन्हें 'आधुनिक चिकित्सा का जनक' माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उनकी पुस्तक 'द कैनन ऑफ मेडिसिन' सदियों तक यूरोप और इस्लामी दुनिया में एक मानक पाठ्यपुस्तक रही।"
    },
    {
        question: "'उम्माह' शब्द का क्या अर्थ है?",
        answers: [
            { text: "पैगंबर मुहम्मद का परिवार", correct: false },
            { text: "एक इस्लामी स्कूल", correct: false },
            { text: "मुस्लिम समुदाय", correct: true },
            { text: "इस्लाम में कानून", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उम्माह' का अर्थ है विश्व भर में सभी मुसलमानों का वैश्विक समुदाय।"
    },
    {
        question: "पैगंबर मुहम्मद की मृत्यु कब हुई थी?",
        answers: [
            { text: "610 ईस्वी", correct: false },
            { text: "622 ईस्वी", correct: false },
            { text: "632 ईस्वी", correct: true },
            { text: "656 ईस्वी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पैगंबर मुहम्मद का निधन 632 ईस्वी में मदीना में हुआ था।"
    },
    {
        question: "'सूफीवाद' का केंद्रबिंदु क्या है?",
        answers: [
            { text: "कुरान का अध्ययन", correct: false },
            { text: "इस्लामी कानून का कठोर पालन", correct: false },
            { text: "ईश्वर के साथ व्यक्तिगत और आध्यात्मिक संबंध", correct: true },
            { text: "राजनीतिक सत्ता की स्थापना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूफीवाद इस्लाम का एक रहस्यवादी पहलू है जो औपचारिक धार्मिक अनुष्ठानों के बजाय ईश्वर के साथ सीधे, प्रेमपूर्ण और आध्यात्मिक संबंध पर जोर देता है।"
    },
    {
        question: "'अल-ग़ज़ाली' (Al-Ghazali) किस क्षेत्र से संबंधित एक प्रसिद्ध इस्लामी विद्वान थे?",
        answers: [
            { text: "गणित", correct: false },
            { text: "खगोल विज्ञान", correct: false },
            { text: "दर्शन और धर्मशास्त्र", correct: true },
            { text: "भूगोल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अल-ग़ज़ाली 11वीं सदी के एक प्रभावशाली मुस्लिम धर्मशास्त्री, न्यायविद्, दार्शनिक और रहस्यवादी थे, जिन्हें इस्लामी विचारों के पुनरुद्धार के लिए जाना जाता है।"
    },
    {
        question: "'मस्जिद-ए-नबवी' (पैगंबर की मस्जिद) में क्या दफनाया गया है?",
        answers: [
            { text: "पैगंबर मुहम्मद और उनके पहले दो खलीफा", correct: true },
            { text: "केवल पैगंबर मुहम्मद", correct: false },
            { text: "केवल अली", correct: false },
            { text: "केवल अबू बक्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मस्जिद-ए-नबवी में पैगंबर मुहम्मद, अबू बक्र और उमर इब्न अल-खत्ताब की कब्रें स्थित हैं।"
    },
    {
        question: "'सुन्नी' मुसलमानों के चार प्रमुख न्यायशास्त्र (Fiqh) के विद्यालय कौन-से हैं?",
        answers: [
            { text: "शिया, इबादी, अहमदिया, सूफी", correct: false },
            { text: "हनफी, मालिकी, शाफई, हंबली", correct: true },
            { text: "जाफरी, जैदी, इस्माइली, अलेवी", correct: false },
            { text: "कादरी, चिश्ती, नक्शबंदी, सुहरावर्दी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये चार विद्यालय सुन्नी इस्लाम में शरीयत (इस्लामी कानून) की व्याख्या के लिए सबसे अधिक प्रचलित हैं।"
    },
    {
        question: "'ईदुल फितर' किस इस्लामी महीने के अंत में मनाया जाता है?",
        answers: [
            { text: "मुहर्रम", correct: false },
            { text: "सफर", correct: false },
            { text: "रमज़ान", correct: true },
            { text: "शाबान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ईदुल फितर रमज़ान के पवित्र महीने के उपवास की समाप्ति का प्रतीक है।"
    },
    {
        question: "'अजमेर' में स्थित 'सूफी' संत की दरगाह का क्या नाम है?",
        answers: [
            { text: "निजामुद्दीन औलिया", correct: false },
            { text: "ख्वाजा मुईनुद्दीन चिश्ती", correct: true },
            { text: "सलीम चिश्ती", correct: false },
            { text: "बख्तियार काकी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजमेर शरीफ दरगाह, ख्वाजा मुईनुद्दीन चिश्ती की मजार है, जो चिश्ती संप्रदाय के एक महान सूफी संत थे।"
    },
    {
        question: "'अल-अक्सा मस्जिद' किस शहर में है?",
        answers: [
            { text: "मक्का", correct: false },
            { text: "मदीना", correct: false },
            { text: "बगदाद", correct: false },
            { text: "यरूशलम", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अल-अक्सा मस्जिद यरूशलम में स्थित है और इस्लाम का तीसरा सबसे पवित्र स्थल है।"
    },
    {
        question: "'शिया' और 'सुन्नी' संप्रदायों के बीच मतभेद का मुख्य कारण क्या था?",
        answers: [
            { text: "कुरान की व्याख्या", correct: false },
            { text: "नमाज की विधि", correct: false },
            { text: "पैगंबर के बाद उत्तराधिकार", correct: true },
            { text: "हज का तरीका", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह मतभेद पैगंबर मुहम्मद के बाद समुदाय का नेतृत्व कौन करेगा, इस पर शुरू हुआ था।"
    },
    {
        question: "'अबू बक्र' का मुख्य योगदान क्या था?",
        answers: [
            { text: "कुरान का संकलन", correct: false },
            { text: "इस्लामी साम्राज्य का विस्तार", correct: false },
            { text: "उमय्यद खिलाफत की स्थापना", correct: false },
            { text: "रिद्दा युद्धों (Apostasy Wars) में विजय", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पहले खलीफा के रूप में, अबू बक्र ने 'रिद्दा युद्धों' में विजय प्राप्त करके उन अरब जनजातियों को वापस इस्लाम में लाया जिन्होंने पैगंबर मुहम्मद की मृत्यु के बाद विद्रोह कर दिया था।"
    },
    {
        question: "'सुन्नाह' को किस स्रोत से संकलित किया गया है?",
        answers: [
            { text: "केवल कुरान से", correct: false },
            { text: "हदीस से", correct: true },
            { text: "इज्मा से", correct: false },
            { text: "क़ियास से", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुन्नाह' पैगंबर मुहम्मद की परंपरा है, और यह 'हदीस' नामक संग्रहों के माध्यम से संकलित और प्रेषित की गई है।"
    },
    {
        question: "इस्लामी कला में किस चीज को चित्रित करना निषिद्ध माना जाता है?",
        answers: [
            { text: "फूल और पौधे", correct: false },
            { text: "ज्यामितीय पैटर्न", correct: false },
            { text: "मानव और पशु", correct: true },
            { text: "ज्यामितीय पैटर्न और सुलेख", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मूर्ति पूजा से बचने के लिए, इस्लामी कला में जीवित प्राणियों (मानव और पशु) को चित्रित करना निषिद्ध माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इस्लामी कला में ज्यामितीय पैटर्न और सुलेख का अधिक प्रयोग होता है।"
    },
    {
        question: "'मदीना' शहर का नाम किसके नाम पर रखा गया है?",
        answers: [
            { text: "पैगंबर मुहम्मद", correct: false },
            { text: "मक्का", correct: false },
            { text: "अल-मदीना-अल-मुनव्वरा", correct: true },
            { text: "अली", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मदीना' का पूरा नाम 'अल-मदीना-अल-मुनव्वरा' है, जिसका अर्थ है 'प्रकाशित शहर', जो पैगंबर मुहम्मद के आगमन के बाद इसका नामकरण हुआ।"
    },
    {
        question: "'कुरान' को किस रात में पहली बार पैगंबर मुहम्मद पर अवतरित किया गया था?",
        answers: [
            { text: "शब-ए-बारात", correct: false },
            { text: "शब-ए-मिराज", correct: false },
            { text: "लैलातुल कद्र", correct: true },
            { text: "शब-ए-हिजरा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लैलातुल कद्र' (Night of Power) वह रात है, जिसे रमज़ान के महीने में माना जाता है, जब कुरान को पहली बार पैगंबर मुहम्मद पर अवतरित किया गया था।"
    },
    {
        question: "'हज' किस इस्लामी महीने में किया जाता है?",
        answers: [
            { text: "रमज़ान", correct: false },
            { text: "मुहर्रम", correct: false },
            { text: "शाबान", correct: false },
            { text: "जिल-हिज्ज", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हज इस्लामी कैलेंडर के आखिरी महीने 'जिल-हिज्ज' में किया जाता है।"
    },
    {
        question: "इस्लाम में 'नर्क' को क्या कहते हैं?",
        answers: [
            { text: "जन्नत", correct: false },
            { text: "जहन्नुम", correct: true },
            { text: "मिराज", correct: false },
            { text: "फितना", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जहन्नुम' इस्लाम में नर्क का नाम है, जबकि 'जन्नत' स्वर्ग को कहते हैं।"
    },
    {
        question: "'सफीना' (Sufina) क्या है?",
        answers: [
            { text: "एक प्रकार की प्रार्थना", correct: false },
            { text: "एक धार्मिक पुस्तक", correct: false },
            { text: "एक सूफी संगीत शैली", correct: true },
            { text: "पैगंबर मुहम्मद की एक नाव का नाम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सफीना' सूफीवाद में प्रयोग की जाने वाली एक धार्मिक संगीत शैली है, जो भक्ति और आध्यात्मिकता से जुड़ी है।"
    },
    {
        question: "'सुन्नी' इस्लाम के अनुसार, 'खलीफा' को कैसे चुना जाना चाहिए?",
        answers: [
            { text: "पैतृक उत्तराधिकार द्वारा", correct: false },
            { text: "कुरान में दिए गए निर्देश द्वारा", correct: false },
            { text: "समुदाय की सहमति (शूरा) द्वारा", correct: true },
            { text: "दिव्य हस्तक्षेप द्वारा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुन्नी इस्लाम का मानना है कि खलीफा को समुदाय के सदस्यों की सहमति (शूरा) से चुना जाना चाहिए, न कि पैतृक उत्तराधिकार के आधार पर।"
    },
    {
        question: "किस खलीफा के शासनकाल में इस्लाम का पहला नौसैनिक बेड़ा (naval fleet) स्थापित किया गया था?",
        answers: [
            { text: "अबू बक्र", correct: false },
            { text: "उमर", correct: false },
            { text: "उस्मान", correct: true },
            { text: "अली", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तीसरे खलीफा उस्मान के शासनकाल के दौरान, बीजान्टिन साम्राज्य का मुकाबला करने के लिए इस्लाम का पहला संगठित नौसैनिक बेड़ा स्थापित किया गया था।"
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