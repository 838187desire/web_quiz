const questions = [
    {
        topHeading: "सौरमंडल पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "'ट्राइटन' किस ग्रह का सबसे बड़ा उपग्रह है?",
        answers: shuffle([
            { text: "शनि", correct: false },
            { text: "बृहस्पति", correct: false },
            { text: "अरुण", correct: false },
            { text: "वरुण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ट्राइटन की एक खास बात यह है कि यह अपने ग्रह की परिक्रमा उसकी घूर्णन दिशा के विपरीत करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य के प्रकाशमंडल में दिखाई देने वाले काले धब्बों को क्या कहते हैं?",
        answers: shuffle([
            { text: "सौर ज्वाला", correct: false },
            { text: "सौर कलंक (Sunspot)", correct: true },
            { text: "कोरोना छिद्र", correct: false },
            { text: "प्रमुखता (Prominence)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये धब्बे आसपास के क्षेत्र से ठंडे होते हैं और मजबूत चुंबकीय गतिविधि के क्षेत्र होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'और्ट क्लाउड' (Oort Cloud) क्या है?",
        answers: shuffle([
            { text: "शनि के चारों ओर एक वलय", correct: false },
            { text: "सौर मंडल के बाहरी किनारे पर बर्फीले पिंडों का एक विशाल गोलाकार बादल", correct: true },
            { text: "एक सर्पिल आकाशगंगा", correct: false },
            { text: "क्षुद्रग्रह पट्टी का एक हिस्सा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माना जाता है कि लंबी अवधि वाले धूमकेतु इसी क्षेत्र से आते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ग्रह का कोई भी प्राकृतिक उपग्रह नहीं है?",
        answers: shuffle([
            { text: "मंगल और शुक्र", correct: false },
            { text: "बुध और शुक्र", correct: true },
            { text: "पृथ्वी और मंगल", correct: false },
            { text: "बुध और मंगल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौरमंडल के पहले दो ग्रहों, बुध और शुक्र, का कोई ज्ञात चंद्रमा नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "एक खगोलीय इकाई (Astronomical Unit - AU) किनके बीच की औसत दूरी है?",
        answers: shuffle([
            { text: "पृथ्वी और चंद्रमा", correct: false },
            { text: "पृथ्वी और सूर्य", correct: true },
            { text: "सूर्य और मंगल", correct: false },
            { text: "सूर्य और बृहस्पति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस इकाई का उपयोग सौरमंडल के भीतर दूरियों को मापने के लिए किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी पर ऋतुओं में परिवर्तन का मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "पृथ्वी का अपनी धुरी पर घूमना", correct: false },
            { text: "सूर्य से पृथ्वी की दूरी में परिवर्तन", correct: false },
            { text: "पृथ्वी का अपने अक्ष पर 23.5 डिग्री का झुकाव", correct: true },
            { text: "चंद्रमा का गुरुत्वाकर्षण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस झुकाव के कारण वर्ष के अलग-अलग समय में पृथ्वी के गोलार्धों पर सूर्य की किरणें सीधी या तिरछी पड़ती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य के बाद पृथ्वी का सबसे निकटतम तारा कौन सा है?",
        answers: shuffle([
            { text: "सीरियस", correct: false },
            { text: "वेगा", correct: false },
            { text: "प्रॉक्सिमा सेंटॉरी", correct: true },
            { text: "अल्फा सेंटॉरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अल्फा सेंटॉरी तारा प्रणाली का हिस्सा है और हमसे लगभग 4.24 प्रकाश वर्ष दूर है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "चंद्रमा की सतह पर उतरने वाला पहला मानव कौन था?",
        answers: shuffle([
            { text: "यूरी गागरिन", correct: false },
            { text: "राकेश शर्मा", correct: false },
            { text: "नील आर्मस्ट्रांग", correct: true },
            { text: "बज़ एल्ड्रिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नील आर्मस्ट्रांग ने 1969 में नासा के अपोलो 11 मिशन के तहत चंद्रमा पर पहला कदम रखा था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'वोयेजर 1' अंतरिक्ष यान का मुख्य उद्देश्य क्या था?",
        answers: shuffle([
            { text: "मंगल का अध्ययन", correct: false },
            { text: "बाहरी सौर मंडल (बृहस्पति और शनि) का अध्ययन", correct: true },
            { text: "सूर्य का अध्ययन", correct: false },
            { text: "चंद्रमा पर उतरना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह यान अब सौरमंडल से बाहर अंतरतारकीय अंतरिक्ष में प्रवेश करने वाली पहली मानव निर्मित वस्तु है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "उल्कापिंड (Meteorite) क्या है?",
        answers: shuffle([
            { text: "अंतरिक्ष में तैरता एक चट्टानी टुकड़ा", correct: false },
            { text: "पृथ्वी के वायुमंडल में जलने वाला पिंड", correct: false },
            { text: "धूमकेतु की पूंछ का हिस्सा", correct: false },
            { text: "उल्का का वह अवशेष जो जलने से बचकर पृथ्वी की सतह तक पहुँचता है", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वायुमंडल में जलने वाले पिंड को उल्का (Meteor) कहते हैं, और जो बचकर जमीन पर गिरता है उसे उल्कापिंड कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ग्रह को 'नीला ग्रह' भी कहा जाता है?",
        answers: shuffle([
            { text: "अरुण", correct: false },
            { text: "वरुण", correct: false },
            { text: "पृथ्वी", correct: true },
            { text: "शनि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी की सतह का लगभग 71% हिस्सा पानी से ढका है, जिस कारण यह अंतरिक्ष से नीली दिखाई देती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौर मंडल के किस ग्रह का दिन सबसे लंबा होता है?",
        answers: shuffle([
            { text: "बृहस्पति", correct: false },
            { text: "शनि", correct: false },
            { text: "शुक्र", correct: true },
            { text: "बुध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र का घूर्णन काल (एक दिन) 243 पृथ्वी दिवस के बराबर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'गोल्डीलॉक्स ज़ोन' (Goldilocks Zone) किसे कहते हैं?",
        answers: shuffle([
            { text: "किसी तारे के सबसे गर्म क्षेत्र को", correct: false },
            { text: "किसी तारे के सबसे ठंडे क्षेत्र को", correct: false },
            { text: "किसी तारे के चारों ओर वह क्षेत्र जहाँ किसी ग्रह की सतह पर तरल पानी मौजूद हो सकता है", correct: true },
            { text: "क्षुद्रग्रह पट्टी का दूसरा नाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी हमारे सूर्य के गोल्डीलॉक्स ज़ोन में स्थित है, जिसे 'रहने योग्य क्षेत्र' भी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "यूरोपा, किस ग्रह का एक दिलचस्प उपग्रह है जिस पर बर्फीली सतह के नीचे महासागर होने की संभावना है?",
        answers: shuffle([
            { text: "शनि", correct: false },
            { text: "अरुण", correct: false },
            { text: "वरुण", correct: false },
            { text: "बृहस्पति", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैज्ञानिक मानते हैं कि यूरोपा पर मौजूद महासागर में सूक्ष्म जीवन के लिए अनुकूल परिस्थितियाँ हो सकती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "चंद्रमा पर किसी वस्तु का भार, पृथ्वी पर उसके भार का कितना होता है?",
        answers: shuffle([
            { text: "बराबर", correct: false },
            { text: "आधा", correct: false },
            { text: "एक-चौथाई", correct: false },
            { text: "एक-छठा (1/6)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रमा का गुरुत्वाकर्षण बल पृथ्वी की तुलना में बहुत कम है, इसलिए वहां भार कम हो जाता है जबकि द्रव्यमान वही रहता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'सौर ज्वाला' (Solar Flare) का पृथ्वी पर क्या प्रभाव पड़ सकता है?",
        answers: shuffle([
            { text: "मौसम में परिवर्तन", correct: false },
            { text: "संचार प्रणालियों और उपग्रहों में बाधा", correct: true },
            { text: "भूकंप की संभावना", correct: false },
            { text: "सुनामी का खतरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौर ज्वाला से निकले आवेशित कण पृथ्वी के चुंबकीय क्षेत्र से टकराकर रेडियो संचार, जीपीएस और पावर ग्रिड को बाधित कर सकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौर मंडल के निर्माण से संबंधित सर्वमान्य परिकल्पना कौन सी है?",
        answers: shuffle([
            { text: "बिग बैंग परिकल्पना", correct: false },
            { text: "स्थिर अवस्था परिकल्पना", correct: false },
            { text: "नेबुलर परिकल्पना", correct: true },
            { text: "ज्वारीय परिकल्पना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस परिकल्पना के अनुसार, सौरमंडल का निर्माण लगभग 4.6 अरब साल पहले गैस और धूल के एक विशाल घूमते हुए बादल (नेबुला) से हुआ था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'सुपरमून' क्या है?",
        answers: shuffle([
            { text: "चंद्र ग्रहण का दूसरा नाम", correct: false },
            { text: "जब चंद्रमा पृथ्वी से सबसे दूर होता है", correct: false },
            { text: "जब पूर्णिमा के दिन चंद्रमा पृथ्वी के सबसे निकट होता है", correct: true },
            { text: "जब एक महीने में दो पूर्णिमा होती हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस स्थिति में चंद्रमा सामान्य से थोड़ा बड़ा और अधिक चमकीला दिखाई देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य के बाद आकाश में सबसे चमकीला तारा कौन सा है?",
        answers: shuffle([
            { text: "ध्रुव तारा", correct: false },
            { text: "वेगा", correct: false },
            { text: "सीरियस (व्याध तारा)", correct: true },
            { text: "केनोपस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सीरियस, जिसे 'डॉग स्टार' भी कहते हैं, रात के आकाश में दिखाई देने वाला सबसे चमकीला तारा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वह काल्पनिक रेखा जो ग्रहों की कक्षाओं के तल को दर्शाती है, क्या कहलाती है?",
        answers: shuffle([
            { text: "भूमध्य रेखा", correct: false },
            { text: "क्रांतिवृत्त (Ecliptic)", correct: true },
            { text: "खगोलीय भूमध्य रेखा", correct: false },
            { text: "गैलेक्टिक प्लेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौरमंडल के लगभग सभी ग्रह इसी एक तल के आसपास सूर्य की परिक्रमा करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ग्रह का चुंबकीय क्षेत्र सबसे शक्तिशाली है?",
        answers: shuffle([
            { text: "शनि", correct: false },
            { text: "पृथ्वी", correct: false },
            { text: "बृहस्पति", correct: true },
            { text: "वरुण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति का विशाल और शक्तिशाली चुंबकीय क्षेत्र सौरमंडल में सबसे बड़ा है, जो सूर्य के आकार से भी बड़ा क्षेत्र घेरता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'ध्रुवीय ज्योति' (Aurora) की घटना का क्या कारण है?",
        answers: shuffle([
            { text: "चंद्रमा का प्रकाश", correct: false },
            { text: "सौर पवन के आवेशित कणों का पृथ्वी के ध्रुवीय वायुमंडल से टकराना", correct: true },
            { text: "उल्काओं का जलना", correct: false },
            { text: "मौसम में बदलाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह टक्कर वायुमंडल की गैसों को आयनित कर देती है, जिससे रंगीन प्रकाश उत्पन्न होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "धूमकेतु की पूंछ हमेशा किस दिशा में होती है?",
        answers: shuffle([
            { text: "सूर्य की ओर", correct: false },
            { text: "सूर्य से विपरीत दिशा में", correct: true },
            { text: "अपनी गति की दिशा में", correct: false },
            { text: "अपनी गति के विपरीत दिशा में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौर पवन और विकिरण का दबाव धूमकेतु से निकलने वाली गैस और धूल को हमेशा सूर्य से दूर धकेलता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "हमारे सौर मंडल का सबसे निकटतम तारा मंडल कौन सा है?",
        answers: shuffle([
            { text: "ओरियन", correct: false },
            { text: "एंड्रोमेडा", correct: false },
            { text: "प्लीएडीज़", correct: false },
            { text: "अल्फा सेंटॉरी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह तीन तारों का एक समूह है, जिसमें प्रॉक्सिमा सेंटॉरी भी शामिल है, जो हमारे सूर्य का सबसे निकटतम तारा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'पार्थिव ग्रह' और 'गैसीय ग्रहों' को कौन सी संरचना अलग करती है?",
        answers: shuffle([
            { text: "कुइपर बेल्ट", correct: false },
            { text: "और्ट क्लाउड", correct: false },
            { text: "क्षुद्रग्रह पट्टी", correct: true },
            { text: "कुछ नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्षुद्रग्रह पट्टी चार आंतरिक चट्टानी ग्रहों और चार बाहरी गैसीय ग्रहों के बीच एक विभाजन रेखा की तरह काम करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी से चंद्रमा का कितना प्रतिशत भाग दिखाई देता है?",
        answers: shuffle([
            { text: "50%", correct: false },
            { text: "59%", correct: true },
            { text: "75%", correct: false },
            { text: "100%", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रमा के घूर्णन और परिक्रमण की अवधि लगभग समान होने और उसकी कक्षा के झुकाव के कारण हम पृथ्वी से उसका थोड़ा आधे से ज्यादा हिस्सा देख पाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ग्रह के दिन की लंबाई पृथ्वी के दिन की लंबाई के लगभग बराबर है?",
        answers: shuffle([
            { text: "शुक्र", correct: false },
            { text: "मंगल", correct: true },
            { text: "बुध", correct: false },
            { text: "बृहस्पति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगल का एक दिन (जिसे 'सोल' कहते हैं) लगभग 24.6 घंटे का होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'अंतर्राष्ट्रीय अंतरिक्ष स्टेशन' (ISS) किस कक्षा में पृथ्वी की परिक्रमा करता है?",
        answers: shuffle([
            { text: "भू-स्थिर कक्षा (Geostationary Orbit)", correct: false },
            { text: "निम्न पृथ्वी कक्षा (Low Earth Orbit)", correct: true },
            { text: "ध्रुवीय कक्षा (Polar Orbit)", correct: false },
            { text: "चंद्रमा की कक्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह पृथ्वी की सतह से लगभग 400 किलोमीटर की ऊंचाई पर स्थित है और लगभग 90 मिनट में एक चक्कर पूरा करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस भारतीय खगोलशास्त्री ने सबसे पहले यह अनुमान लगाया था कि पृथ्वी सूर्य की परिक्रमा करती है?",
        answers: shuffle([
            { text: "भास्कर द्वितीय", correct: false },
            { text: "वराहमिहिर", correct: false },
            { text: "ब्रह्मगुप्त", correct: false },
            { text: "आर्यभट्ट", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आर्यभट्ट ने अपने ग्रंथ 'आर्यभटीय' में सूर्यकेंद्रित मॉडल का विचार प्रस्तुत किया था, जो कॉपरनिकस से बहुत पहले था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'वैन एलन बेल्ट' (Van Allen Belt) क्या है?",
        answers: shuffle([
            { text: "शनि के वलयों का एक हिस्सा", correct: false },
            { text: "पृथ्वी के चारों ओर आवेशित कणों की एक पट्टी", correct: true },
            { text: "क्षुद्रग्रहों का एक समूह", correct: false },
            { text: "एक प्रकार का नेबुला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह पृथ्वी के चुंबकीय क्षेत्र द्वारा फंसे हुए ऊर्जावान कणों का एक क्षेत्र है, जो पृथ्वी को हानिकारक विकिरण से बचाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल ग्रह पर भेजा गया नासा का 'पर्सिवियरेंस' रोवर मुख्य रूप से किसकी खोज कर रहा है?",
        answers: shuffle([
            { text: "पानी", correct: false },
            { text: "प्राचीन जीवन के संकेतों की", correct: true },
            { text: "खनिजों की", correct: false },
            { text: "ज्वालामुखी गतिविधि की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह रोवर मंगल की चट्टानों के नमूने एकत्र कर रहा है ताकि यह पता लगाया जा सके कि क्या वहां कभी सूक्ष्म जीवन मौजूद था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "यदि सूर्य अचानक गायब हो जाए, तो पृथ्वी पर उसका प्रभाव महसूस होने में कितना समय लगेगा?",
        answers: shuffle([
            { text: "तुरंत", correct: false },
            { text: "4 मिनट 10 सेकंड", correct: false },
            { text: "8 मिनट 20 सेकंड", correct: true },
            { text: "1 घंटा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी को गुरुत्वाकर्षण और प्रकाश दोनों के गायब होने का पता लगभग 8.3 मिनट बाद चलेगा, क्योंकि गुरुत्वाकर्षण भी प्रकाश की गति से यात्रा करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'मिरांडा' किस ग्रह का एक अजीब और विविध भू-भाग वाला उपग्रह है?",
        answers: shuffle([
            { text: "बृहस्पति", correct: false },
            { text: "शनि", correct: false },
            { text: "अरुण (यूरेनस)", correct: true },
            { text: "वरुण (नेप्च्यून)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिरांडा की सतह पर विशाल घाटियां, चट्टानें और विचित्र भू-आकृतियां हैं, जो इसके उथल-पुथल भरे अतीत का संकेत देती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'न्यू होराइजन्स' अंतरिक्ष यान किस बौने ग्रह का अध्ययन करने वाला पहला मिशन था?",
        answers: shuffle([
            { text: "सेरेस", correct: false },
            { text: "एरीज", correct: false },
            { text: "माकेमाके", correct: false },
            { text: "प्लूटो", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 2015 में इस मिशन ने प्लूटो और उसके चंद्रमाओं की पहली विस्तृत तस्वीरें और डेटा भेजा था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'लाग्रेंज बिंदु' (Lagrange Points) क्या हैं?",
        answers: shuffle([
            { text: "ब्लैक होल के केंद्र", correct: false },
            { text: "दो बड़े पिंडों के बीच गुरुत्वाकर्षण संतुलन के बिंदु", correct: true },
            { text: "आकाशगंगा के केंद्र", correct: false },
            { text: "सौर मंडल के किनारे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन बिंदुओं पर कोई छोटी वस्तु अपनी स्थिति बनाए रख सकती है।<br><br><i class='fa-solid fa-angles-right icon'></i> जेम्स वेब टेलीस्कोप L2 बिंदु पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौरमंडल में ग्रहों के आकार के अनुसार सही अवरोही क्रम (बड़े से छोटा) क्या है?",
        answers: shuffle([
            { text: "बृहस्पति, शनि, अरुण, वरुण, पृथ्वी, शुक्र, मंगल, बुध", correct: true },
            { text: "बृहस्पति, शनि, वरुण, अरुण, पृथ्वी, शुक्र, मंगल, बुध", correct: false },
            { text: "शनि, बृहस्पति, अरुण, वरुण, पृथ्वी, मंगल, शुक्र, बुध", correct: false },
            { text: "बृहस्पति, शनि, अरुण, वरुण, शुक्र, पृथ्वी, मंगल, बुध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह ग्रहों के व्यास के आधार पर सबसे बड़े से सबसे छोटे का सही क्रम है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बुध ग्रह का एक वर्ष पृथ्वी के कितने दिनों के बराबर होता है?",
        answers: shuffle([
            { text: "58 दिन", correct: false },
            { text: "88 दिन", correct: true },
            { text: "112 दिन", correct: false },
            { text: "225 दिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य के सबसे निकट होने के कारण बुध की कक्षीय अवधि सभी ग्रहों में सबसे छोटी है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौरमंडल में ग्रहों की संख्या कितनी है?",
        answers: shuffle([
            { text: "7", correct: false },
            { text: "8", correct: true },
            { text: "9", correct: false },
            { text: "10", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 2006 में प्लूटो को ग्रह की श्रेणी से हटाने के बाद, हमारे सौरमंडल में आठ ग्रह हैं: बुध, शुक्र, पृथ्वी, मंगल, बृहस्पति, शनि, अरुण और वरुण ।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'डॉन' (Dawn) अंतरिक्ष यान किन दो खगोलीय पिंडों का अध्ययन करने के लिए भेजा गया था?",
        answers: shuffle([
            { text: "प्लूटो और चेरॉन", correct: false },
            { text: "फोबोस और डीमोस", correct: false },
            { text: "वेस्टा और सेरेस", correct: true },
            { text: "टाइटन और यूरोपा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह पहला अंतरिक्ष यान था जिसने क्षुद्रग्रह पट्टी में दो अलग-अलग पिंडों की परिक्रमा की।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वह कौन सा ग्रह है जिसके दिन और रात के तापमान में सबसे अधिक अंतर होता है?",
        answers: shuffle([
            { text: "मंगल", correct: false },
            { text: "शुक्र", correct: false },
            { text: "बुध", correct: true },
            { text: "पृथ्वी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वायुमंडल न होने के कारण, बुध का जो हिस्सा सूर्य के सामने होता है वह अत्यधिक गर्म हो जाता है और विपरीत हिस्सा अत्यधिक ठंडा हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य की कौन सी परत नग्न आंखों से दिखाई देती है?",
        answers: shuffle([
            { text: "क्रोड (कोर)", correct: false },
            { text: "वर्णमंडल (क्रोमोस्फीयर)", correct: false },
            { text: "कोरोना", correct: false },
            { text: "प्रकाशमंडल (फोटोस्फीयर)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाशमंडल ही सूर्य की वह सतह है जिससे उसका अधिकांश प्रकाश उत्सर्जित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'उपग्रह' (Satellite) की परिभाषा क्या है?",
        answers: shuffle([
            { text: "किसी तारे की परिक्रमा करने वाला पिंड", correct: false },
            { text: "किसी ग्रह की परिक्रमा करने वाला पिंड", correct: true },
            { text: "गैस और धूल का बादल", correct: false },
            { text: "एक छोटा तारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उपग्रह प्राकृतिक (जैसे चंद्रमा) या कृत्रिम (जैसे संचार उपग्रह) हो सकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ग्रह को 'योद्धाओं का रोमन देवता' नाम दिया गया है?",
        answers: shuffle([
            { text: "बृहस्पति (जुपिटर)", correct: false },
            { text: "शनि (सैटर्न)", correct: false },
            { text: "मंगल (मार्स)", correct: true },
            { text: "बुध (मरकरी)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसके लाल रंग के कारण, प्राचीन रोमनों ने इसका नाम अपने युद्ध के देवता 'मार्स' के नाम पर रखा।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'आयो' (Io), बृहस्पति का एक उपग्रह, किसके लिए जाना जाता है?",
        answers: shuffle([
            { text: "अपनी बर्फीली सतह के लिए", correct: false },
            { text: "अपने घने वायुमंडल के लिए", correct: false },
            { text: "अपनी अत्यधिक ज्वालामुखी गतिविधि के लिए", correct: true },
            { text: "अपने विशाल महासागर के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आयो सौरमंडल में सबसे अधिक ज्वालामुखीय रूप से सक्रिय पिंड है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौर मंडल से बाहर किसी अन्य तारे की परिक्रमा करने वाले ग्रह को क्या कहते हैं?",
        answers: shuffle([
            { text: "बौना ग्रह", correct: false },
            { text: "एक्सोप्लैनेट", correct: true },
            { text: "सुपर-अर्थ", correct: false },
            { text: "हॉट जुपिटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खगोलविदों ने अब तक हजारों एक्सोप्लैनेट खोजे हैं, जो विभिन्न प्रकार और आकार के हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी का औसत घनत्व कितना है?",
        answers: shuffle([
            { text: "3.5 ग्राम/सेमी³", correct: false },
            { text: "5.5 ग्राम/सेमी³", correct: true },
            { text: "8.0 ग्राम/सेमी³", correct: false },
            { text: "10.2 ग्राम/सेमी³", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी सौरमंडल का सबसे सघन (सबसे अधिक घनत्व वाला) ग्रह है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'तुषार रेखा' (Frost Line) सौरमंडल में क्या है?",
        answers: shuffle([
            { text: "वह सीमा जहाँ ग्रह समाप्त हो जाते हैं", correct: false },
            { text: "सूर्य से वह दूरी जहाँ पानी जैसे वाष्पशील यौगिक बर्फ के रूप में संघनित हो सकते हैं", correct: true },
            { text: "क्षुद्रग्रह पट्टी की बाहरी सीमा", correct: false },
            { text: "वरुण की कक्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसी रेखा के कारण आंतरिक ग्रह चट्टानी और बाहरी ग्रह गैसीय और बर्फीले हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "हमारे सौर मंडल में सबसे बड़ी घाटी प्रणाली 'वैलस मैरिनेरिस' कहाँ स्थित है?",
        answers: shuffle([
            { text: "पृथ्वी पर", correct: false },
            { text: "चंद्रमा पर", correct: false },
            { text: "मंगल पर", correct: true },
            { text: "टाइटन पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह घाटी प्रणाली पृथ्वी की ग्रैंड कैन्यन से बहुत बड़ी और गहरी है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'ओसिरिस-रेक्स' (OSIRIS-REx) मिशन किस क्षुद्रग्रह से नमूने लेकर पृथ्वी पर वापस लौटा है?",
        answers: shuffle([
            { text: "वेस्टा", correct: false },
            { text: "सेरेस", correct: false },
            { text: "इरोस", correct: false },
            { text: "बेन्नू", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस मिशन का उद्देश्य सौरमंडल के शुरुआती गठन के बारे में जानकारी प्राप्त करना है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौरमंडल का कौन सा ग्रह सबसे कम सघन है?",
        answers: shuffle([
            { text: "बृहस्पति", correct: false },
            { text: "शनि", correct: true },
            { text: "अरुण", correct: false },
            { text: "वरुण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शनि का घनत्व पानी से भी कम है, जो इसे सौरमंडल का सबसे हल्का (घनत्व के मामले में) ग्रह बनाता है ।<br><br><i class='fa-solid fa-angles-right icon'></i> "
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