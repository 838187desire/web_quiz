const questions = [
    {
        topHeading: "केंद्र की शक्तियों पर आधारित 50 बहुविकल्पीय प्रश्न (quiz_no.)"
    },
    {
        question: "प्रश्न 1: भारतीय संविधान के किस अनुच्छेद के तहत संसद को अवशिष्ट विधायी शक्तियाँ प्राप्त हैं?",
        answers: shuffle([
            { text: "अनुच्छेद 246", correct: false },
            { text: "अनुच्छेद 248", correct: true },
            { text: "अनुच्छेद 250", correct: false },
            { text: "अनुच्छेद 256", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 248 संसद को उन सभी विषयों पर कानून बनाने की अनन्य शक्ति प्रदान करता है जो राज्य सूची या समवर्ती सूची में शामिल नहीं हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह केंद्र को एक मजबूत विधायी अधिकार देता है।"
    },
    {
        question: "प्रश्न 2: संघ सूची (Union List) में वर्णित विषयों पर कानून बनाने का अधिकार किसे है?",
        answers: shuffle([
            { text: "केवल संसद को", correct: true },
            { text: "केवल राज्य विधानमंडलों को", correct: false },
            { text: "संसद और राज्य विधानमंडल दोनों को", correct: false },
            { text: "राष्ट्रपति को अध्यादेश द्वारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान की सातवीं अनुसूची में संघ सूची दी गई है, जिसमें राष्ट्रीय महत्व के विषय (जैसे रक्षा, विदेशी मामले, मुद्रा) शामिल हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इन पर कानून बनाने का एकमात्र अधिकार भारतीय संसद को है।"
    },
    {
        question: "प्रश्न 3: किस अनुच्छेद के अनुसार, राज्यसभा राष्ट्रीय हित में राज्य सूची के विषय पर कानून बनाने के लिए संसद को अधिकृत कर सकती है?",
        answers: shuffle([
            { text: "अनुच्छेद 247", correct: false },
            { text: "अनुच्छेद 249", correct: true },
            { text: "अनुच्छेद 251", correct: false },
            { text: "अनुच्छेद 254", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अनुच्छेद केंद्र की शक्ति का एक महत्वपूर्ण उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि राज्यसभा अपने उपस्थित और मतदान करने वाले सदस्यों के दो-तिहाई बहुमत से एक प्रस्ताव पारित करती है, तो संसद राष्ट्रीय हित में राज्य सूची के किसी भी विषय पर कानून बना सकती है।"
    },
    {
        question: "प्रश्न 4: राष्ट्रीय आपातकाल (अनुच्छेद 352) के दौरान, राज्य सूची के विषयों पर कानून बनाने की शक्ति किसे प्राप्त हो जाती है?",
        answers: shuffle([
            { text: "राष्ट्रपति को", correct: false },
            { text: "संबंधित राज्य के राज्यपाल को", correct: false },
            { text: "संसद को", correct: true },
            { text: "राज्य विधानमंडल निलंबित हो जाता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रीय आपातकाल लागू होने पर, भारतीय संघीय ढाँचा एकात्मक हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> संसद को राज्य सूची में वर्णित किसी भी विषय पर कानून बनाने का अधिकार मिल जाता है।"
    },
    {
        question: "प्रश्न 5: राज्यपाल की नियुक्ति किसके द्वारा की जाती है, जो केंद्र के नियंत्रण को दर्शाता है?",
        answers: shuffle([
            { text: "भारत के मुख्य न्यायाधीश", correct: false },
            { text: "प्रधानमंत्री", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "संबंधित राज्य के मुख्यमंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राज्यपाल की नियुक्ति राष्ट्रपति द्वारा की जाती है और वह राष्ट्रपति के प्रसादपर्यंत अपने पद पर बना रहता है।<br><br><i class='fa-solid fa-angles-right icon'></i> राज्यपाल राज्य में केंद्र के एजेंट के रूप में कार्य करता है।"
    },
    {
        question: "प्रश्न 6: अखिल भारतीय सेवाओं (All India Services) का सृजन करने की पहल कौन कर सकता है?",
        answers: shuffle([
            { text: "लोकसभा", correct: false },
            { text: "राज्यसभा", correct: true },
            { text: "राष्ट्रपति", correct: false },
            { text: "प्रधानमंत्री कार्यालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 312 के अनुसार, केवल राज्यसभा ही अपने विशेष बहुमत से प्रस्ताव पारित करके संसद को नई अखिल भारतीय सेवाओं के सृजन के लिए अधिकृत कर सकती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इन सेवाओं पर केंद्र का अंतिम नियंत्रण होता है।"
    },
    {
        question: "प्रश्न 7: किसी राज्य में संवैधानिक तंत्र की विफलता पर राष्ट्रपति शासन किस अनुच्छेद के तहत लगाया जाता है?",
        answers: shuffle([
            { text: "अनुच्छेद 352", correct: false },
            { text: "अनुच्छेद 355", correct: false },
            { text: "अनुच्छेद 356", correct: true },
            { text: "अनुच्छेद 360", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अनुच्छेद केंद्र को किसी भी राज्य सरकार को बर्खास्त करने और राज्य का प्रशासन सीधे अपने हाथ में लेने की व्यापक शक्ति प्रदान करता है, यदि राज्यपाल की रिपोर्ट या अन्यथा राष्ट्रपति को यह समाधान हो जाए कि राज्य का शासन संविधान के अनुसार नहीं चल सकता।"
    },
    {
        question: "प्रश्न 8: केंद्र सरकार राज्यों को निर्देश किस अनुच्छेद के तहत दे सकती है?",
        answers: shuffle([
            { text: "अनुच्छेद 256 और 257", correct: true },
            { text: "अनुच्छेद 352 और 356", correct: false },
            { text: "अनुच्छेद 248 और 249", correct: false },
            { text: "अनुच्छेद 370 और 371", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 256 राज्यों पर संघ के कानूनों का अनुपालन सुनिश्चित करने का दायित्व डालता है, और अनुच्छेद 257 के तहत केंद्र सरकार राज्यों को अपनी कार्यकारी शक्ति का प्रयोग कैसे करें, इस पर निर्देश दे सकती है।"
    },
    {
        question: "प्रश्न 9: यदि कोई राज्य केंद्र द्वारा दिए गए निर्देशों का पालन करने में विफल रहता है, तो क्या परिणाम हो सकता है?",
        answers: shuffle([
            { text: "A) राज्य के मुख्यमंत्री को हटाया जा सकता है।", correct: false },
            { text: "B) अनुच्छेद 365 के तहत राष्ट्रपति शासन लगाया जा सकता है।", correct: true },
            { text: "C) राज्य को वित्तीय अनुदान रोका जा सकता है।", correct: false },
            { text: "B) और C) दोनों।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 365 यह प्रावधान करता है कि यदि कोई राज्य केंद्र द्वारा दिए गए किसी भी निर्देश का पालन करने में विफल रहता है, तो राष्ट्रपति के लिए यह मानना ​​विधिपूर्ण होगा कि उस राज्य में संवैधानिक तंत्र विफल हो गया है और वह अनुच्छेद 356 के तहत कार्रवाई कर सकते हैं।"
    },
    {
        question: "प्रश्न 10: अंतर्राष्ट्रीय संधियों को लागू करने के लिए संसद किस अनुच्छेद के तहत राज्य सूची के विषय पर भी कानून बना सकती है?",
        answers: shuffle([
            { text: "अनुच्छेद 250", correct: false },
            { text: "अनुच्छेद 252", correct: false },
            { text: "अनुच्छेद 253", correct: true },
            { text: "अनुच्छेद 255", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अनुच्छेद संसद को किसी भी अंतरराष्ट्रीय संधि, समझौते या सम्मेलन को लागू करने के लिए भारत के पूरे क्षेत्र या उसके किसी भी हिस्से के लिए कोई भी कानून बनाने की शक्ति देता है, भले ही वह मामला राज्य सूची में क्यों न हो।"
    },
    {
        question: "प्रश्न 11: \"रक्षा\", \"विदेशी मामले\" और \"संचार\" जैसे विषय किस सूची में हैं?",
        answers: shuffle([
            { text: "संघ सूची", correct: true },
            { text: "राज्य सूची", correct: false },
            { text: "समवर्ती सूची", correct: false },
            { text: "अवशिष्ट सूची", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये सभी विषय राष्ट्रीय महत्व के हैं और देश की एकता और सुरक्षा के लिए महत्वपूर्ण हैं, इसलिए इन्हें विशेष रूप से संघ सूची में रखा गया है ताकि इन पर केवल केंद्र सरकार का नियंत्रण हो।"
    },
    {
        question: "प्रश्न 12: राज्य विधानमंडल द्वारा पारित किसी विधेयक को राज्यपाल किसके विचार के लिए आरक्षित रख सकता है?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "भारत के मुख्य न्यायाधीश", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "विधानसभा अध्यक्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 200 के अनुसार, राज्यपाल को यह शक्ति है कि वह राज्य विधानमंडल द्वारा पारित विधेयक को राष्ट्रपति के विचार के लिए आरक्षित रख सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह केंद्र को राज्य के विधान पर एक प्रकार का वीटो प्रदान करता है।"
    },
    {
        question: "प्रश्न 13: भारत में कौन सी नागरिकता का प्रावधान है, जो केंद्र की शक्ति को दर्शाता है?",
        answers: shuffle([
            { text: "दोहरी नागरिकता", correct: false },
            { text: "एकल नागरिकता", correct: true },
            { text: "राज्य-विशिष्ट नागरिकता", correct: false },
            { text: "क्षेत्रीय नागरिकता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में अमेरिका या स्विट्जरलैंड की तरह दोहरी नागरिकता (केंद्र और राज्य की अलग-अलग) नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> कोई भी व्यक्ति केवल भारत का नागरिक होता है, किसी राज्य का नहीं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह राष्ट्रीय एकता और एक मजबूत केंद्र का प्रतीक है।"
    },
    {
        question: "प्रश्न 14: नए राज्यों का निर्माण और मौजूदा राज्यों की सीमाओं या नामों में परिवर्तन करने की अंतिम शक्ति किसके पास है?",
        answers: shuffle([
            { text: "संबंधित राज्य विधानमंडल", correct: false },
            { text: "क्षेत्रीय परिषद", correct: false },
            { text: "राष्ट्रपति", correct: false },
            { text: "संसद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 3 के तहत, संसद को यह शक्ति प्राप्त है कि वह साधारण बहुमत से किसी भी राज्य का क्षेत्र, सीमाएं या नाम बदल सकती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके लिए राज्यों की सहमति बाध्यकारी नहीं है, जो केंद्र की सर्वोच्चता को दर्शाता है।"
    },
    {
        question: "प्रश्न 15: वित्तीय आपातकाल की घोषणा किस अनुच्छेद के तहत की जाती है?",
        answers: shuffle([
            { text: "अनुच्छेद 352", correct: false },
            { text: "अनुच्छेद 356", correct: false },
            { text: "अनुच्छेद 358", correct: false },
            { text: "अनुच्छेद 360", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब भारत या उसके किसी हिस्से की वित्तीय स्थिरता को खतरा हो, तो राष्ट्रपति अनुच्छेद 360 के तहत वित्तीय आपातकाल की घोषणा कर सकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इस दौरान, केंद्र राज्यों के वित्तीय मामलों पर पूर्ण नियंत्रण कर लेता है।"
    },
    {
        question: "प्रश्न 16: समवर्ती सूची के किसी विषय पर केंद्र और राज्य के कानून के बीच टकराव की स्थिति में किसका कानून मान्य होता है?",
        answers: shuffle([
            { text: "राज्य का कानून", correct: false },
            { text: "केंद्र का कानून", correct: true },
            { text: "दोनों कानून अमान्य हो जाते हैं", correct: false },
            { text: "सर्वोच्च न्यायालय निर्णय लेता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 254 के अनुसार, यदि समवर्ती सूची के किसी विषय पर संसद और राज्य विधानमंडल के कानूनों में कोई विरोध होता है, तो संसद द्वारा बनाया गया कानून मान्य होगा।"
    },
    {
        question: "प्रश्न 17: भारत की संचित निधि से राज्यों को सहायता अनुदान (Grants-in-aid) देने का प्रावधान कौन करता है?",
        answers: shuffle([
            { text: "वित्त आयोग की सिफारिश पर संसद", correct: true },
            { text: "केवल राष्ट्रपति", correct: false },
            { text: "केवल प्रधानमंत्री", correct: false },
            { text: "नियंत्रक एवं महालेखा परीक्षक (CAG)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 275 के तहत, संसद विधि द्वारा उन राज्यों को सहायता अनुदान प्रदान कर सकती है जिन्हें सहायता की आवश्यकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह केंद्र को राज्यों पर वित्तीय प्रभाव डालने की शक्ति देता है।"
    },
    {
        question: "प्रश्न 18: एकीकृत न्यायपालिका की व्यवस्था में सर्वोच्च कौन है?",
        answers: shuffle([
            { text: "उच्च न्यायालय", correct: false },
            { text: "जिला न्यायालय", correct: false },
            { text: "सर्वोच्च न्यायालय", correct: true },
            { text: "न्यायाधिकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में एक एकीकृत न्यायपालिका है, जिसमें सर्वोच्च न्यायालय शीर्ष पर है।<br><br><i class='fa-solid fa-angles-right icon'></i> उच्च न्यायालय और अन्य अधीनस्थ न्यायालय उसके अधीन काम करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> सर्वोच्च न्यायालय के निर्णय सभी न्यायालयों पर बाध्यकारी होते हैं, जो न्यायिक क्षेत्र में केंद्र की प्रमुखता को स्थापित करता है।"
    },
    {
        question: "प्रश्न 19: \"निगम कर\" (Corporation Tax) और \"सीमा शुल्क\" (Customs Duty) जैसे प्रमुख कर कौन लगाता और वसूलता है?",
        answers: shuffle([
            { text: "राज्य सरकारें", correct: false },
            { text: "केंद्र सरकार", correct: true },
            { text: "नगर निगम", correct: false },
            { text: "पंचायतें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजस्व के अधिकांश बड़े और लचीले स्रोत केंद्र सरकार को सौंपे गए हैं, जिससे राज्य वित्तीय रूप से केंद्र पर निर्भर रहते हैं।"
    },
    {
        question: "प्रश्न 20: नियंत्रक एवं महालेखा परीक्षक (CAG) की नियुक्ति कौन करता है?",
        answers: shuffle([
            { text: "संसद की लोक लेखा समिति", correct: false },
            { text: "प्रधानमंत्री", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "वित्त मंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> CAG की नियुक्ति राष्ट्रपति द्वारा की जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यद्यपि CAG केंद्र और राज्य दोनों के खातों का ऑडिट करता है, उसकी नियुक्ति और पदच्युति पर केंद्र का नियंत्रण होता है, जो केंद्र की एक और शक्ति को दर्शाता है।"
    },
    {
        question: "प्रश्न 21: किस स्थिति में राज्य विधानसभा द्वारा पारित धन विधेयक को भी राष्ट्रपति के विचार के लिए आरक्षित किया जा सकता है?",
        answers: shuffle([
            { text: "राष्ट्रीय आपातकाल के दौरान", correct: false },
            { text: "राष्ट्रपति शासन के दौरान", correct: false },
            { text: "वित्तीय आपातकाल के दौरान", correct: true },
            { text: "कभी नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 360 के तहत वित्तीय आपातकाल की स्थिति में, राष्ट्रपति राज्यों को यह निर्देश दे सकते हैं कि राज्य विधानमंडल द्वारा पारित सभी धन विधेयकों या अन्य वित्तीय विधेयकों को उनकी स्वीकृति के लिए आरक्षित रखा जाए।"
    },
    {
        question: "प्रश्न 22: अंतर-राज्यीय परिषद का अध्यक्ष कौन होता है?",
        answers: shuffle([
            { text: "गृह मंत्री", correct: false },
            { text: "प्रधानमंत्री", correct: true },
            { text: "राष्ट्रपति", correct: false },
            { text: "कैबिनेट सचिव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंतर-राज्यीय परिषद की अध्यक्षता प्रधानमंत्री द्वारा की जाती है, जो केंद्र और राज्यों के बीच समन्वय में केंद्र की प्रमुख भूमिका को रेखांकित करता है।"
    },
    {
        question: "प्रश्न 23: चुनाव आयुक्तों की नियुक्ति कौन करता है?",
        answers: shuffle([
            { text: "संसद", correct: false },
            { text: "प्रधानमंत्री", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "भारत के मुख्य न्यायाधीश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुख्य चुनाव आयुक्त और अन्य चुनाव आयुक्तों की नियुक्ति राष्ट्रपति द्वारा की जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक स्वतंत्र निकाय है, लेकिन नियुक्ति प्रक्रिया पर केंद्र का प्रभाव रहता है।"
    },
    {
        question: "प्रश्न 24: यदि दो या दो से अधिक राज्य संसद से राज्य सूची के विषय पर कानून बनाने का अनुरोध करते हैं, तो क्या संसद ऐसा कर सकती है?",
        answers: shuffle([
            { text: "नहीं, यह असंवैधानिक है।", correct: false },
            { text: "हाँ, अनुच्छेद 252 के तहत।", correct: true },
            { text: "केवल राष्ट्रपति की अनुमति से।", correct: false },
            { text: "केवल आपातकाल में।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 252 संसद को यह शक्ति देता है कि वह दो या दो से अधिक राज्यों के लिए उनकी सहमति से राज्य सूची के किसी भी मामले पर कानून बना सकती है।"
    },
    {
        question: "प्रश्न 25: संघ लोक सेवा आयोग (UPSC) के अध्यक्ष और सदस्यों की नियुक्ति कौन करता है?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "गृह मंत्री", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "संसद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> UPSC के अध्यक्ष और सदस्यों की नियुक्ति राष्ट्रपति द्वारा की जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> UPSC केंद्र के साथ-साथ राज्यों को भी (राज्यपाल के अनुरोध पर) अपनी सेवाएं प्रदान करता है।"
    },
    {
        question: "प्रश्न 26. राज्यों के राज्यपालों के विवेकाधीन शक्तियों का स्रोत क्या है, जो केंद्र को अप्रत्यक्ष नियंत्रण देता है?",
        answers: shuffle([
            { text: "राज्य का विधानमंडल", correct: false },
            { text: "मुख्यमंत्री की सलाह", correct: false },
            { text: "भारत का संविधान", correct: true },
            { text: "राष्ट्रपति का आदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान राज्यपाल को कुछ विवेकाधीन शक्तियाँ देता है (जैसे, राष्ट्रपति के विचार के लिए विधेयक आरक्षित करना, राष्ट्रपति शासन की सिफारिश करना) जहाँ वह राज्य मंत्रिपरिषद की सलाह के बिना कार्य कर सकता है।"
    },
    {
        question: "प्रश्न 27. भारत के किसी भी हिस्से में सशस्त्र बलों को तैनात करने का अधिकार किसके पास है?",
        answers: shuffle([
            { text: "केवल संबंधित राज्य सरकार", correct: false },
            { text: "केंद्र सरकार", correct: true },
            { text: "राज्यपाल", correct: false },
            { text: "राष्ट्रपति, केवल मंत्रिमंडल की लिखित सलाह पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> \"सशस्त्र बल (विशेष शक्तियाँ) अधिनियम\" (AFSPA) जैसे कानून केंद्र को \"अशांत क्षेत्रों\" में कानून और व्यवस्था बनाए रखने के लिए सशस्त्र बलों को तैनात करने की व्यापक शक्तियाँ देते हैं।"
    },
    {
        question: "प्रश्न 28. \"जनगणना\" किस सूची का विषय है?",
        answers: shuffle([
            { text: "संघ सूची", correct: true },
            { text: "राज्य सूची", correct: false },
            { text: "समवर्ती सूची", correct: false },
            { text: "अवशिष्ट सूची", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जनगणना एक राष्ट्रीय महत्व का कार्य है जो पूरे देश में एक समान तरीके से किया जाता है, इसलिए इसे संघ सूची में रखा गया है।"
    },
    {
        question: "प्रश्न 29. केंद्र-राज्य संबंधों की समीक्षा के लिए गठित 'सरकारिया आयोग' ने किसकी मजबूती का समर्थन किया?",
        answers: shuffle([
            { text: "राज्यों की स्वायत्तता का", correct: false },
            { text: "एक मजबूत केंद्र का", correct: true },
            { text: "न्यायपालिका की स्वतंत्रता का", correct: false },
            { text: "क्षेत्रीय परिषदों का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि सरकारिया आयोग का गठन राज्यों की शिकायतों पर किया गया था, उसने देश की एकता और अखंडता के लिए एक मजबूत केंद्र के महत्व को स्वीकार किया और उसी के अनुरूप अपनी सिफारिशें दीं।"
    },
    {
        question: "प्रश्न 30. यदि राष्ट्रपति को लगता है कि कोई राज्य सरकार संविधान के अनुसार काम नहीं कर रही है, तो वह किसकी रिपोर्ट के बिना भी राष्ट्रपति शासन लगा सकते हैं?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "राज्यपाल", correct: true },
            { text: "गृह मंत्री", correct: false },
            { text: "सर्वोच्च न्यायालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 356 में \"राज्यपाल की रिपोर्ट पर या अन्यथा\" वाक्यांश का उपयोग किया गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका अर्थ है कि यदि राष्ट्रपति को किसी अन्य स्रोत से भी यह समाधान हो जाता है कि राज्य में संवैधानिक तंत्र विफल हो गया है, तो वह राज्यपाल की औपचारिक रिपोर्ट के बिना भी कार्रवाई कर सकते हैं।"
    },
    {
        question: "प्रश्न 31. \"रेलवे\" किस सूची के अंतर्गत आता है?",
        answers: shuffle([
            { text: "संघ सूची", correct: true },
            { text: "राज्य सूची", correct: false },
            { text: "समवर्ती सूची", correct: false },
            { text: "अवशिष्ट सूची", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेलवे पूरे देश में फैला एक एकीकृत नेटवर्क है, जिसके प्रबंधन और विकास के लिए एक केंद्रीय प्राधिकरण की आवश्यकता होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, यह संघ सूची का एक प्रमुख विषय है।"
    },
    {
        question: "प्रश्न 32. राष्ट्रपति शासन के दौरान राज्य का बजट कौन पारित करता है?",
        answers: shuffle([
            { text: "राज्यपाल", correct: false },
            { text: "राष्ट्रपति", correct: false },
            { text: "संसद", correct: true },
            { text: "राज्य का मुख्य सचिव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब किसी राज्य में राष्ट्रपति शासन लागू होता है, तो राज्य की विधायी शक्तियां संसद को हस्तांतरित हो जाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, उस राज्य का बजट संसद द्वारा पारित किया जाता है।"
    },
    {
        question: "प्रश्न 33. \"परमाणु ऊर्जा\" और \"खनिज संसाधन\" से संबंधित कानून बनाने की शक्ति किसके पास है?",
        answers: shuffle([
            { text: "A) राज्य सरकार", correct: false },
            { text: "B) केंद्र सरकार", correct: true },
            { text: "A), B) दोनों", correct: false },
            { text: "संबंधित निगम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परमाणु ऊर्जा और देश के विकास के लिए आवश्यक खनिज संसाधनों से संबंधित मामले राष्ट्रीय महत्व के हैं और संघ सूची के अंतर्गत आते हैं।"
    },
    {
        question: "प्रश्न 34. राज्यों के उच्च न्यायालयों के न्यायाधीशों की नियुक्ति कौन करता है?",
        answers: shuffle([
            { text: "राज्यपाल", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "संबंधित राज्य का मुख्यमंत्री", correct: false },
            { text: "भारत के मुख्य न्यायाधीश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि वे राज्यों में सेवा करते हैं, उच्च न्यायालयों के न्यायाधीशों की नियुक्ति भारत के मुख्य न्यायाधीश और संबंधित राज्य के राज्यपाल के परामर्श से राष्ट्रपति द्वारा की जाती है, जो न्यायिक नियुक्तियों में केंद्र की महत्वपूर्ण भूमिका को दर्शाता है।"
    },
    {
        question: "प्रश्न 35. संविधान का कौन सा अनुच्छेद यह सुनिश्चित करता है कि प्रत्येक राज्य की कार्यकारी शक्ति संसद द्वारा बनाए गए कानूनों का अनुपालन सुनिश्चित करे?",
        answers: shuffle([
            { text: "अनुच्छेद 245", correct: false },
            { text: "अनुच्छेद 256", correct: true },
            { text: "अनुच्छेद 355", correct: false },
            { text: "अनुच्छेद 368", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अनुच्छेद राज्यों पर एक दायित्व डालता है कि वे अपनी कार्यकारी शक्ति का प्रयोग इस तरह से करें कि संसद द्वारा बनाए गए कानूनों का अनुपालन सुनिश्चित हो।<br><br><i class='fa-solid fa-angles-right icon'></i> यह केंद्र के प्रशासनिक प्रभुत्व को स्थापित करता है।"
    },
    {
        question: "प्रश्न 36. संविधान के किस भाग में आपातकालीन प्रावधानों का उल्लेख है जो केंद्र को शक्तिशाली बनाते हैं?",
        answers: shuffle([
            { text: "भाग XV", correct: false },
            { text: "भाग XVIII", correct: true },
            { text: "भाग XX", correct: false },
            { text: "भाग XVII", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के भाग XVIII (अनुच्छेद 352-360) में आपातकालीन प्रावधानों का वर्णन है, जो लागू होने पर संघीय ढांचे को एकात्मक ढांचे में बदल देते हैं और केंद्र को सर्वशक्तिमान बना देते हैं।"
    },
    {
        question: "प्रश्न 37. \"नागरिकता\" से संबंधित कानून बनाने की शक्ति किसके पास है?",
        answers: shuffle([
            { text: "राज्य विधानमंडल", correct: false },
            { text: "संसद", correct: true },
            { text: "गृह मंत्रालय", correct: false },
            { text: "राष्ट्रपति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नागरिकता एक राष्ट्रीय मुद्दा है और इस पर कानून बनाने की विशेष शक्ति अनुच्छेद 11 के तहत संसद को दी गई है।"
    },
    {
        question: "प्रश्न 38. राज्य के महालेखाकार (Accountant General) पर किसका नियंत्रण होता है?",
        answers: shuffle([
            { text: "राज्य के वित्त मंत्री", correct: false },
            { text: "मुख्यमंत्री", correct: false },
            { text: "भारत के नियंत्रक एवं महालेखा परीक्षक (CAG)", correct: true },
            { text: "राज्यपाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राज्य का महालेखाकार भारत के CAG के अधीन काम करता है, जो केंद्र के माध्यम से राज्यों के वित्त पर ऑडिट नियंत्रण का एक और उदाहरण है।"
    },
    {
        question: "प्रश्न 39. \"विदेशी ऋण\" प्राप्त करने के संबंध में कानून कौन बना सकता है?",
        answers: shuffle([
            { text: "राज्य सरकारें अपनी आवश्यकतानुसार", correct: false },
            { text: "केवल केंद्र सरकार", correct: true },
            { text: "केंद्र और राज्य दोनों", correct: false },
            { text: "भारतीय रिजर्व बैंक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विदेशी ऋण प्राप्त करना संघ सूची का विषय है।<br><br><i class='fa-solid fa-angles-right icon'></i> राज्यों को विदेशी ऋण लेने का अधिकार नहीं है, वे केवल भारत सरकार की सहमति से देश के भीतर से उधार ले सकते हैं।"
    },
    {
        question: "प्रश्न 40. \"टेलीफोन, वायरलेस, प्रसारण\" और अन्य संचार साधन किस सूची में आते हैं?",
        answers: shuffle([
            { text: "संघ सूची", correct: true },
            { text: "राज्य सूची", correct: false },
            { text: "समवर्ती सूची", correct: false },
            { text: "अवशिष्ट सूची", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये सभी राष्ट्रीय महत्व के संचार साधन हैं और देश की एकता और सुरक्षा के लिए आवश्यक हैं, इसलिए इन पर कानून बनाने का अधिकार केवल संसद को है।"
    },
    {
        question: "प्रश्न 41. राष्ट्रीय महत्व के स्मारकों और स्थलों की सुरक्षा का जिम्मा किसका है?",
        answers: shuffle([
            { text: "राज्य सरकार", correct: false },
            { text: "स्थानीय निकाय", correct: false },
            { text: "संसद (केंद्र सरकार)", correct: true },
            { text: "भारतीय पुरातत्व सर्वेक्षण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रीय महत्व के घोषित किए गए ऐतिहासिक स्मारकों, स्थानों और वस्तुओं की सुरक्षा संघ सूची का विषय है।"
    },
    {
        question: "प्रश्न 42. समवर्ती सूची की अवधारणा किस देश के संविधान से ली गई है?",
        answers: shuffle([
            { text: "कनाडा", correct: false },
            { text: "ऑस्ट्रेलिया", correct: true },
            { text: "आयरलैंड", correct: false },
            { text: "जर्मनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समवर्ती सूची का विचार ऑस्ट्रेलिया के संविधान से प्रेरित है, लेकिन भारतीय संविधान में केंद्र को राज्य पर वरीयता देकर इसे और अधिक केंद्रीकृत बना दिया गया है।"
    },
    {
        question: "प्रश्न 43. किस अनुच्छेद में यह कहा गया है कि संघ का यह कर्तव्य है कि वह बाहरी आक्रमण और आंतरिक अशांति से प्रत्येक राज्य की रक्षा करे?",
        answers: shuffle([
            { text: "अनुच्छेद 352", correct: false },
            { text: "अनुच्छेद 355", correct: true },
            { text: "अनुच्छेद 356", correct: false },
            { text: "अनुच्छेद 359", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अनुच्छेद केंद्र को राज्यों के मामलों में हस्तक्षेप करने का एक व्यापक आधार प्रदान करता है, क्योंकि \"आंतरिक अशांति\" की व्याख्या व्यापक रूप से की जा सकती है।"
    },
    {
        question: "प्रश्न 44. \"बैंकिंग\" और \"बीमा\" किस सूची के विषय हैं?",
        answers: shuffle([
            { text: "संघ सूची", correct: true },
            { text: "राज्य सूची", correct: false },
            { text: "समवर्ती सूची", correct: false },
            { text: "अवशिष्ट सूची", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैंकिंग और बीमा देश की अर्थव्यवस्था के महत्वपूर्ण स्तंभ हैं और इनमें एकरूपता आवश्यक है, इसलिए इन्हें केंद्र के अनन्य अधिकार क्षेत्र में रखा गया है।"
    },
    {
        question: "प्रश्न 45. यदि राज्यसभा अनुच्छेद 249 के तहत कोई प्रस्ताव पारित करती है, तो वह अधिकतम कितनी अवधि के लिए लागू रहता है?",
        answers: shuffle([
            { text: "छह महीने", correct: false },
            { text: "एक वर्ष", correct: true },
            { text: "दो वर्ष", correct: false },
            { text: "अनिश्चित काल तक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राज्यसभा द्वारा पारित ऐसा प्रस्ताव शुरू में एक वर्ष के लिए लागू होता है, हालांकि इसे हर बार एक वर्ष के लिए आगे बढ़ाया जा सकता है।"
    },
    {
        question: "प्रश्न 46. \"लॉटरी\" का संचालन किस सूची के अंतर्गत आता है?",
        answers: shuffle([
            { text: "संघ सूची", correct: true },
            { text: "राज्य सूची", correct: false },
            { text: "समवर्ती सूची", correct: false },
            { text: "यह अवैध है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत सरकार द्वारा या किसी राज्य की सरकार द्वारा आयोजित लॉटरी संघ सूची के अंतर्गत आती है, जो केंद्र को इस पर नियंत्रण रखने की शक्ति देती है।"
    },
    {
        question: "प्रश्न 47. राज्य लोक सेवा आयोग (SPSC) के अध्यक्ष और सदस्यों को कौन हटा सकता है?",
        answers: shuffle([
            { text: "राज्यपाल", correct: false },
            { text: "मुख्यमंत्री", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "राज्य विधानमंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि SPSC के सदस्यों की नियुक्ति राज्यपाल द्वारा की जाती है, उन्हें हटाने की शक्ति केवल राष्ट्रपति के पास है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह राज्य की मशीनरी पर केंद्र के नियंत्रण का एक और उदाहरण है।"
    },
    {
        question: "प्रश्न 48. \"अंतर-राज्यीय व्यापार और वाणिज्य\" के संबंध में कानून बनाने की शक्ति किसके पास है?",
        answers: shuffle([
            { text: "A) संसद", correct: true },
            { text: "B) राज्य विधानमंडल", correct: false },
            { text: "A), B) दोनों", correct: false },
            { text: "संबंधित राज्यों की सहमति से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पूरे देश में व्यापार और वाणिज्य की स्वतंत्रता और सुगमता सुनिश्चित करने के लिए, इस विषय को संघ सूची में रखा गया है, जिस पर कानून बनाने की शक्ति संसद के पास है।"
    },
    {
        question: "प्रश्न 49. संविधान में संशोधन करने की शक्ति का उल्लेख किस अनुच्छेद में है, जो मुख्यतः केंद्र के पास है?",
        answers: shuffle([
            { text: "अनुच्छेद 352", correct: false },
            { text: "अनुच्छेद 360", correct: false },
            { text: "अनुच्छेद 368", correct: true },
            { text: "अनुच्छेद 370", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान में संशोधन करने की शक्ति संसद में निहित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यद्यपि कुछ मामलों में राज्यों के अनुसमर्थन की आवश्यकता होती है, लेकिन संशोधन की प्रक्रिया शुरू करने की शक्ति केवल केंद्र के पास है।"
    },
    {
        question: "प्रश्न 50. केंद्र शासित प्रदेशों का प्रशासन किसके द्वारा किया जाता है?",
        answers: shuffle([
            { text: "मुख्यमंत्री", correct: false },
            { text: "निर्वाचित विधानसभा", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "गृह मंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केंद्र शासित प्रदेश सीधे केंद्र सरकार के नियंत्रण में होते हैं और उनका प्रशासन राष्ट्रपति द्वारा उनके द्वारा नियुक्त प्रशासक (जैसे उपराज्यपाल) के माध्यम से किया जाता है।"
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