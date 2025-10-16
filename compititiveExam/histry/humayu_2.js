const questions = [
    {
        topHeading: "हुमायूँ पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. निर्वासन के दौरान हुमायूँ किस चित्रकार को अपने साथ ईरान से भारत लाया था?",
        answers: shuffle([
            { text: "मंसूर और बिहजाद", correct: false },
            { text: "मीर सैय्यद अली और अब्दुस्समद", correct: true },
            { text: "दशवंत और बसावन", correct: false },
            { text: "अबुल हसन और बिशनदास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुमायूँ जब ईरान में था, तब उसकी मुलाकात इन दो महान <b>फारसी चित्रकारों</b> से हुई।<br><br><i class='fa-solid fa-angles-right icon'></i> ये दोनों उसके साथ भारत आए और भारत में <b>मुगल चित्रकला</b> की नींव रखी।"
    },
    {
        question: "प्रश्न 2. भारत में मुगल चित्रकला की शुरुआत किसके शासनकाल में हुई?",
        answers: shuffle([
            { text: "बाबर", correct: false },
            { text: "हुमायूँ", correct: true },
            { text: "अकबर", correct: false },
            { text: "जहाँगीर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि मुगल चित्रकला का चरमोत्कर्ष अकबर और जहाँगीर के काल में हुआ, लेकिन इसकी नींव <b>हुमायूँ</b> ने ही <b>मीर सैय्यद अली और अब्दुस्समद</b> को संरक्षण देकर रखी थी।"
    },
    {
        question: "प्रश्न 3. हुमायूँ के भाइयों में से किसने उसके विरुद्ध सबसे अधिक षड्यंत्र किए?",
        answers: shuffle([
            { text: "अस्करी मिर्ज़ा", correct: false },
            { text: "हिंदाल मिर्ज़ा", correct: false },
            { text: "कामरान मिर्ज़ा", correct: true },
            { text: "सुलेमान मिर्ज़ा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>कामरान मिर्ज़ा</b> सबसे महत्वाकांक्षी था और उसने कई मौकों पर हुमायूँ का साथ देने के बजाय उसके खिलाफ विद्रोह किया, जिससे हुमायूँ की स्थिति कमजोर हुई।"
    },
    {
        question: "प्रश्न 4. हुमायूँ ने अपने किस विद्रोही भाई की आँखें निकलवा दी थीं?",
        answers: shuffle([
            { text: "अस्करी", correct: false },
            { text: "हिंदाल", correct: false },
            { text: "कामरान", correct: true },
            { text: "सुलेमान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लगातार विद्रोह और विश्वासघात से तंग आकर अंततः हुमायूँ ने <b>कामरान मिर्ज़ा</b> को पकड़कर <b>अंधा</b> करवा दिया और उसे मक्का भेज दिया।"
    },
    {
        question: "प्रश्न 5. हुमायूँ का कौन सा भाई एक युद्ध में मारा गया था?",
        answers: shuffle([
            { text: "कामरान", correct: false },
            { text: "अस्करी", correct: false },
            { text: "हिंदाल", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>हिंदाल मिर्ज़ा</b> <b>1551</b> में कामरान के सैनिकों के साथ लड़ते हुए हुमायूँ की तरफ से <b>मारा गया</b> था।"
    },
    {
        question: "प्रश्न 6. हुमायूँ को \"इंसान-ए-कामिल\" (सिद्ध पुरुष) किसने कहा था?",
        answers: shuffle([
            { text: "गुलबदन बेगम", correct: false },
            { text: "अबुल फजल", correct: true },
            { text: "बदायूँनी", correct: false },
            { text: "बैरम खाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकबर के दरबारी इतिहासकार <b>अबुल फजल</b> ने हुमायूँ को उसकी उदारता, ज्ञान और ज्योतिष में रुचि के कारण <b>\"इंसान-ए-कामिल\"</b> कहा।"
    },
    {
        question: "प्रश्न 7. हुमायूँ का मकबरा किस शैली की वास्तुकला का उदाहरण है?",
        answers: shuffle([
            { text: "तुर्की शैली", correct: false },
            { text: "अफगान शैली", correct: false },
            { text: "चारबाग शैली (फारसी शैली)", correct: true },
            { text: "राजपूत शैली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह मकबरा बगीचों के बीच में स्थित है, जिसे <b>चारबाग शैली</b> कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शैली भारत में पहली बार इतने बड़े पैमाने पर इस्तेमाल की गई थी।"
    },
    {
        question: "प्रश्न 8. हुमायूँ के मकबरे में किस रंग के पत्थर का प्रमुखता से उपयोग किया गया है?",
        answers: shuffle([
            { text: "केवल सफेद संगमरमर", correct: false },
            { text: "केवल पीला बलुआ पत्थर", correct: false },
            { text: "लाल बलुआ पत्थर और सफेद संगमरमर", correct: true },
            { text: "काला ग्रेनाइट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मकबरे की मुख्य संरचना <b>लाल बलुआ पत्थर</b> से बनी है, जबकि इसके गुंबद और सजावट के लिए <b>सफेद संगमरमर</b> का खूबसूरती से इस्तेमाल किया गया है।"
    },
    {
        question: "प्रश्न 9. किस मुगल शासक के मकबरे में केंद्रीय कक्ष के अलावा सबसे अधिक मुगल परिवार के सदस्यों को दफनाया गया है?",
        answers: shuffle([
            { text: "बाबर", correct: false },
            { text: "हुमायूँ", correct: true },
            { text: "अकबर", correct: false },
            { text: "औरंगज़ेब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुमायूँ के मकबरे परिसर में <b>100 से अधिक</b> मुगल शहजादों और परिवार के अन्य सदस्यों की कब्रें हैं, इसलिए इसे <b>'मुगलों का शयनागार'</b> भी कहा जाता है।"
    },
    {
        question: "प्रश्न 10. अंतिम मुगल बादशाह बहादुर शाह जफर को अंग्रेजों ने 1857 में कहाँ से गिरफ्तार किया था?",
        answers: shuffle([
            { text: "लाल किला", correct: false },
            { text: "जामा मस्जिद", correct: false },
            { text: "हुमायूँ का मकबरा", correct: true },
            { text: "कुतुब मीनार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1857 के विद्रोह</b> के दमन के बाद, बहादुर शाह जफर ने अपने बेटों के साथ <b>हुमायूँ के मकबरे</b> में शरण ली थी, जहाँ से कैप्टन हडसन ने उन्हें गिरफ्तार किया।"
    },
    {
        question: "प्रश्न 11. हुमायूँ का शाब्दिक अर्थ क्या है?",
        answers: shuffle([
            { text: "विजेता", correct: false },
            { text: "महान", correct: false },
            { text: "भाग्यशाली", correct: true },
            { text: "बुद्धिमान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>'हुमायूँ'</b> नाम का अर्थ <b>'भाग्यशाली'</b> होता है, लेकिन विडंबना यह है कि उसका जीवन अत्यंत संघर्षों और दुर्भाग्य से भरा रहा।"
    },
    {
        question: "प्रश्न 12. हुमायूँ ने चुनार दुर्ग पर दूसरी बार कब आक्रमण किया?",
        answers: shuffle([
            { text: "1532", correct: false },
            { text: "1535", correct: false },
            { text: "1537-38", correct: true },
            { text: "1539", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बंगाल अभियान पर जाने से पहले, हुमायूँ ने शेर खाँ की बढ़ती शक्ति को रोकने के लिए <b>1537-38</b> में दूसरी बार <b>चुनार के किले</b> पर घेरा डाला और उसे जीत लिया।"
    },
    {
        question: "प्रश्न 13. जब हुमायूँ बंगाल अभियान में व्यस्त था, तब आगरा में किसने स्वयं को बादशाह घोषित कर दिया था?",
        answers: shuffle([
            { text: "कामरान मिर्ज़ा", correct: false },
            { text: "अस्करी मिर्ज़ा", correct: false },
            { text: "हिंदाल मिर्ज़ा", correct: true },
            { text: "सुलेमान मिर्ज़ा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुमायूँ की लंबी अनुपस्थिति का फायदा उठाकर उसके भाई <b>हिंदाल</b> ने आगरा में विद्रोह कर दिया और अपने नाम का खुतबा पढ़वाया।"
    },
    {
        question: "प्रश्न 14. हुमायूँ ने बंगाल के गौड़ क्षेत्र का नाम बदलकर क्या रखा था?",
        answers: shuffle([
            { text: "फिरोजाबाद", correct: false },
            { text: "अकबराबाद", correct: false },
            { text: "जन्नताबाद (स्वर्ग का नगर)", correct: true },
            { text: "शाहजहानाबाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बंगाल के गौड़ की सुंदरता और हरियाली से प्रभावित होकर हुमायूँ ने उसका नाम <b>'जन्नताबाद'</b> रख दिया और वहाँ भोग-विलास में डूब गया।"
    },
    {
        question: "प्रश्न 15. हुमायूँ का विश्वसनीय सेनापति कौन था, जो बाद में अकबर का संरक्षक बना?",
        answers: shuffle([
            { text: "मुनीम खाँ", correct: false },
            { text: "तातार खाँ", correct: false },
            { text: "बैरम खाँ", correct: true },
            { text: "मीर बख्शी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बैरम खाँ</b> एक योग्य और वफादार सेनापति था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने हुमायूँ के निर्वासन काल में उसका साथ दिया और भारत पर पुनः विजय में महत्वपूर्ण भूमिका निभाई।"
    },
    {
        question: "प्रश्न 16. किस विजय के उपलक्ष्य में हुमायूँ ने निजाम भिश्ती को एक दिन का बादशाह बनाया था?",
        answers: shuffle([
            { text: "चौसा के युद्ध में जान बचने के बाद", correct: true },
            { text: "गुजरात विजय के बाद", correct: false },
            { text: "सरहिंद विजय के बाद", correct: false },
            { text: "काबुल विजय के बाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपनी जान बचाने वाले <b>निजाम भिश्ती</b> के प्रति कृतज्ञता व्यक्त करने के लिए हुमायूँ ने उसे एक दिन (कुछ स्रोतों के अनुसार, ढाई घड़ी) के लिए दिल्ली का बादशाह बनाया।"
    },
    {
        question: "प्रश्न 17. हुमायूँ के शासनकाल की जानकारी का प्रमुख स्रोत 'तारीख-ए-रशीदी' किसने लिखा?",
        answers: shuffle([
            { text: "मिर्ज़ा हैदर दोगलत", correct: true },
            { text: "अब्बास खाँ सरवानी", correct: false },
            { text: "जौहर आफताबची", correct: false },
            { text: "बदायूँनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मिर्ज़ा हैदर दोगलत</b> हुमायूँ का चचेरा भाई था और उसने <b>'तारीख-ए-रशीदी'</b> नामक ग्रंथ में मध्य एशिया और हुमायूँ के शासनकाल की घटनाओं का वर्णन किया है।"
    },
    {
        question: "प्रश्न 18. 'तजकिरात-उल-वाकियात' नामक ग्रंथ, जो हुमायूँ की जीवनी है, किसने लिखा?",
        answers: shuffle([
            { text: "गुलबदन बेगम", correct: false },
            { text: "मिर्ज़ा हैदर", correct: false },
            { text: "जौहर आफताबची", correct: true },
            { text: "बायजीद बयात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>जौहर आफताबची</b> हुमायूँ का निजी सेवक (ईवर-वाहक) था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने हुमायूँ के जीवन की घटनाओं का संस्मरण <b>'तजकिरात-उल-वाकियात'</b> नाम से लिखा।"
    },
    {
        question: "प्रश्न 19. हुमायूँ की असफलता में उसके भाइयों की भूमिका कैसी थी?",
        answers: shuffle([
            { text: "उन्होंने पूरा सहयोग दिया", correct: false },
            { text: "वे तटस्थ रहे", correct: false },
            { text: "उन्होंने लगातार उसके लिए समस्याएँ खड़ी कीं", correct: true },
            { text: "उन्होंने शेरशाह का साथ दिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुमायूँ के भाइयों, विशेषकर <b>कामरान</b> ने, संकट के समय उसका साथ देने के बजाय <b>विद्रोह</b> किया, जिससे हुमायूँ की शक्ति बिखर गई और वह शेरशाह का सामना ठीक से नहीं कर पाया।"
    },
    {
        question: "प्रश्न 20. हुमायूँ के चरित्र का सबसे प्रबल गुण क्या था?",
        answers: shuffle([
            { text: "सैन्य कुशलता", correct: false },
            { text: "कूटनीतिक चातुर्य", correct: false },
            { text: "धैर्य और आशावादिता", correct: true },
            { text: "कठोर प्रशासक होना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनेक पराजयों और 15 साल के निर्वासन के बावजूद हुमायूँ ने कभी उम्मीद नहीं छोड़ी और अंततः अपना खोया हुआ साम्राज्य पुनः प्राप्त कर लिया।"
    },
    {
        question: "प्रश्न 21. हुमायूँ ने शेरशाह से निपटने के बजाय गुजरात के बहादुर शाह से पहले उलझकर क्या गलती की?",
        answers: shuffle([
            { text: "उसने अपने सबसे बड़े दुश्मन को मजबूत होने का समय दे दिया", correct: false },
            { text: "उसने अपनी सेना को थका दिया", correct: false },
            { text: "उसने अपना खजाना खाली कर दिया", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इतिहासकारों का मानना है कि हुमायूँ की यह एक बड़ी <b>रणनीतिक भूल</b> थी।<br><br><i class='fa-solid fa-angles-right icon'></i> उसे पहले अपने सबसे निकट और शक्तिशाली शत्रु शेरशाह को कुचलना चाहिए था, लेकिन उसने गुजरात अभियान में अपना समय, सेना और संसाधन बर्बाद कर दिए।"
    },
    {
        question: "प्रश्न 22. हुमायूँ ने किस सूफी संत के मकबरे पर सिर झुकाया था?",
        answers: shuffle([
            { text: "ख्वाजा मुईनुद्दीन चिश्ती", correct: false },
            { text: "निजामुद्दीन औलिया", correct: true },
            { text: "शेख सलीम चिश्ती", correct: false },
            { text: "बाबा फरीद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुमायूँ सूफी संतों का आदर करता था और उसने दिल्ली में स्थित ख्वाजा <b>निजामुद्दीन औलिया</b> की दरगाह पर जियारत की थी।"
    },
    {
        question: "प्रश्न 23. हुमायूँ ने अपने निर्वासन का अधिकांश समय कहाँ बिताया?",
        answers: shuffle([
            { text: "फारस (ईरान) और अफगानिस्तान", correct: true },
            { text: "तुर्की", correct: false },
            { text: "बलूचिस्तान", correct: false },
            { text: "मध्य एशिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वह पहले सिंध और राजस्थान में भटका, फिर <b>ईरान के शाह</b> की शरण में गया और फिर <b>काबुल और कंधार</b> में रहकर भारत वापसी की तैयारी करता रहा।"
    },
    {
        question: "प्रश्न 24. कौन सा मुगल बादशाह पुस्तकालयों का बहुत शौकीन था और युद्धों में भी अपने साथ चुनिंदा पुस्तकें ले जाता था?",
        answers: shuffle([
            { text: "बाबर", correct: false },
            { text: "हुमायूँ", correct: true },
            { text: "अकबर", correct: false },
            { text: "औरंगज़ेब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>हुमायूँ</b> एक विद्वान शासक था और उसे पढ़ने का बहुत शौक था।<br><br><i class='fa-solid fa-angles-right icon'></i> वह जहाँ भी जाता था, एक छोटा पुस्तकालय उसके साथ चलता था।"
    },
    {
        question: "प्रश्न 25. 'कानून-ए-हुमायूँनी' की रचना किसने की, जिसमें हुमायूँ के शासन के नियमों और उसके आविष्कारों का वर्णन है?",
        answers: shuffle([
            { text: "अबुल फजल", correct: false },
            { text: "ख्वान्दामीर", correct: true },
            { text: "गुलबदन बेगम", correct: false },
            { text: "जौहर आफताबची", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इतिहासकार <b>ख्वान्दामीर</b> ने <b>'कानून-ए-हुमायूँनी'</b> नामक ग्रंथ लिखा, जिसमें हुमायूँ के प्रशासन और उसके द्वारा किए गए कुछ अनोखे आविष्कारों का उल्लेख है, जैसे <b>'तब्ल-ए-अद्ल'</b> (न्याय का ढोल)।"
    },
    {
        question: "प्रश्न 26. हुमायूँ ने 'तब्ल-ए-अद्ल' (न्याय का ढोल) की शुरुआत क्यों की?",
        answers: shuffle([
            { text: "युद्ध की घोषणा के लिए", correct: false },
            { text: "लोगों को नमाज के लिए बुलाने हेतु", correct: false },
            { text: "फरियादियों की शिकायतें सुनने के लिए", correct: true },
            { text: "उत्सवों की सूचना देने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक प्रकार की <b>न्याय की व्यवस्था</b> थी, जिसके तहत कोई भी फरियादी इस ढोल को बजाकर सीधे बादशाह तक अपनी शिकायत पहुँचा सकता था।"
    },
    {
        question: "प्रश्न 27. हुमायूँ ने दरबार को कितने भागों में विभाजित किया था जो सितारों पर आधारित थे?",
        answers: shuffle([
            { text: "तीन", correct: false },
            { text: "चार", correct: false },
            { text: "सात", correct: false },
            { text: "बारह", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ख्वान्दामीर के अनुसार, हुमायूँ ने अपने दरबार को <b>12 वर्गों</b> में बाँटा था, जिन्हें वह <b>'तीर'</b> (बाण) कहता था, और प्रत्येक का संबंध एक राशि चक्र से था।"
    },
    {
        question: "प्रश्न 28. हुमायूँ द्वारा चलाई गई 'नाविकीय महल' (चलती-फिरती नावों पर बने बाजार और महल) की व्यवस्था का उद्देश्य क्या था?",
        answers: shuffle([
            { text: "व्यापार को बढ़ावा देना", correct: false },
            { text: "मनोरंजन और विलासिता", correct: true },
            { text: "सैन्य परिवहन", correct: false },
            { text: "बाढ़ से बचाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुमायूँ ने यमुना नदी में कई नावें जुड़वाकर उन पर तैरते हुए बाजार, बाग और महल बनवाए थे, जो एक स्थान से दूसरे स्थान पर जा सकते थे।"
    },
    {
        question: "प्रश्न 29. हुमायूँ के किस भाई ने अकबर को काबुल में बंदी बना लिया था?",
        answers: shuffle([
            { text: "हिंदाल", correct: false },
            { text: "अस्करी", correct: false },
            { text: "कामरान", correct: true },
            { text: "सुलेमान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब हुमायूँ काबुल पर आक्रमण कर रहा था, तो <b>कामरान</b> ने बालक <b>अकबर</b> को किले की दीवारों पर लटकाने की धमकी दी थी ताकि हुमायूँ तोपें चलाना बंद कर दे।"
    },
    {
        question: "प्रश्न 30. हुमायूँ की मृत्यु के समय अकबर कहाँ था?",
        answers: shuffle([
            { text: "दिल्ली", correct: false },
            { text: "आगरा", correct: false },
            { text: "कलानौर (पंजाब)", correct: true },
            { text: "काबुल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुमायूँ की मृत्यु के समय, 13 वर्षीय अकबर अपने संरक्षक <b>बैरम खाँ</b> के साथ पंजाब के <b>कलानौर</b> में अफगान विद्रोहियों को दबाने के अभियान पर था।"
    },
    {
        question: "प्रश्न 31. अकबर का राज्याभिषेक कहाँ किया गया था?",
        answers: shuffle([
            { text: "दिल्ली के लाल किले में", correct: false },
            { text: "आगरा के किले में", correct: false },
            { text: "फतेहपुर सीकरी में", correct: false },
            { text: "कलानौर में एक ईंटों के सिंहासन पर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुमायूँ की मृत्यु की खबर मिलने पर बैरम खाँ ने तुरंत <b>कलानौर</b> में ही ईंटों का एक चबूतरा बनवाकर <b>14 फरवरी 1556</b> को अकबर का राज्याभिषेक कर दिया।"
    },
    {
        question: "प्रश्न 32. हुमायूँ के मकबरे को यूनेस्को (UNESCO) द्वारा विश्व धरोहर स्थल कब घोषित किया गया?",
        answers: shuffle([
            { text: "1983", correct: false },
            { text: "1993", correct: true },
            { text: "2003", correct: false },
            { text: "2013", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसकी अनूठी वास्तुकला और ऐतिहासिक महत्व के कारण यूनेस्को ने <b>1993</b> में हुमायूँ के मकबरे को <b>विश्व धरोहर स्थल</b> की सूची में शामिल किया।"
    },
    {
        question: "प्रश्न 33. हुमायूँ का अपने पिता बाबर से संबंध कैसा था?",
        answers: shuffle([
            { text: "तनावपूर्ण", correct: false },
            { text: "उदासीन", correct: false },
            { text: "अत्यंत प्रेमपूर्ण और सम्मानजनक", correct: true },
            { text: "प्रतिद्वंद्वितापूर्ण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाबर हुमायूँ को बहुत प्यार करता था।<br><br><i class='fa-solid fa-angles-right icon'></i> एक प्रसिद्ध कहानी के अनुसार, जब हुमायूँ बीमार पड़ा तो बाबर ने उसकी बीमारी खुद पर ले लेने की प्रार्थना की थी।"
    },
    {
        question: "प्रश्न 34. 'दास्तान-ए-अमीर हमजा' का चित्रांकन किस मुगल शासक के काल में शुरू हुआ?",
        answers: shuffle([
            { text: "बाबर", correct: false },
            { text: "हुमायूँ", correct: true },
            { text: "अकबर", correct: false },
            { text: "जहाँगीर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>'हमजानामा'</b> के नाम से प्रसिद्ध इस महाग्रंथ का चित्रांकन <b>हुमायूँ</b> के संरक्षण में शुरू हुआ और इसे अकबर के शासनकाल में पूरा किया गया।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मुगल चित्रकला की एक महत्वपूर्ण कृति है।"
    },
    {
        question: "प्रश्न 35. हुमायूँ के जीवन में उसकी सबसे बड़ी कमजोरी क्या मानी जाती है?",
        answers: shuffle([
            { text: "सैन्य रणनीति का अभाव", correct: false },
            { text: "अत्यधिक उदारता और अपने दुश्मनों को क्षमा कर देना", correct: true },
            { text: "धन का कुप्रबंधन", correct: false },
            { text: "प्रशासनिक अनुभव की कमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुमायूँ अक्सर युद्ध जीतने के बाद अपने विरोधियों, यहाँ तक कि अपने विद्रोही भाइयों के साथ भी <b>नरमी</b> बरतता था, जो बाद में उसके लिए ही खतरा बन जाते थे।"
    },
    {
        question: "प्रश्न 36. शेरशाह से अंतिम रूप से हारने के बाद हुमायूँ सबसे पहले कहाँ गया?",
        answers: shuffle([
            { text: "काबुल", correct: false },
            { text: "ईरान", correct: false },
            { text: "सिंध", correct: true },
            { text: "मारवाड़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कन्नौज की हार के बाद हुमायूँ आगरा और दिल्ली होते हुए लाहौर पहुँचा और अंततः <b>सिंध के रेगिस्तानों</b> में भटकता रहा।"
    },
    {
        question: "प्रश्न 37. मारवाड़ के किस शासक ने हुमायूँ को सहायता का वचन दिया लेकिन बाद में मुकर गया?",
        answers: shuffle([
            { text: "राणा सांगा", correct: false },
            { text: "राजा भारमल", correct: false },
            { text: "राव मालदेव", correct: true },
            { text: "जयसिंह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मारवाड़ के शक्तिशाली शासक <b>राव मालदेव</b> ने पहले तो हुमायूँ को मदद का आश्वासन दिया, लेकिन शेरशाह के दबाव और अपनी राजनीतिक गणनाओं के कारण उसने हुमायूँ को पकड़ने का प्रयास किया, जिससे हुमायूँ को वहाँ से भागना पड़ा।"
    },
    {
        question: "प्रश्न 38. हुमायूँ ने अपनी खोई हुई प्रतिष्ठा को पुनः प्राप्त करने में लगभग कितने वर्ष बिताए?",
        answers: shuffle([
            { text: "5 वर्ष", correct: false },
            { text: "10 वर्ष", correct: false },
            { text: "15 वर्ष", correct: true },
            { text: "20 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1540 में कन्नौज की हार</b> से लेकर <b>1555 में सरहिंद की जीत</b> तक, हुमायूँ ने लगभग <b>15 वर्ष</b> निर्वासन और संघर्ष में बिताए।"
    },
    {
        question: "प्रश्न 39. हुमायूँ के समय में 'बख्शी' का पद किससे संबंधित था?",
        answers: shuffle([
            { text: "वित्त मंत्री", correct: false },
            { text: "सेना का वेतन अधिकारी", correct: true },
            { text: "मुख्य न्यायाधीश", correct: false },
            { text: "विदेश मंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मीर बख्शी' का पद सैन्य विभाग के प्रमुख के रूप में विकसित हुआ, लेकिन हुमायूँ के समय में यह मुख्य रूप से <b>सेना के वेतन और संगठन</b> से जुड़ा था।"
    },
    {
        question: "प्रश्न 40. हुमायूँ की धार्मिक नीति कैसी थी?",
        answers: shuffle([
            { text: "वह कट्टर सुन्नी था", correct: false },
            { text: "वह शिया धर्म का अनुयायी था", correct: false },
            { text: "वह सहिष्णु और उदार था", correct: true },
            { text: "वह धर्म के प्रति उदासीन था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुमायूँ स्वभाव से <b>उदार</b> था और उसमें धार्मिक कट्टरता नहीं थी।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने ईरान के शाह की मदद के लिए अस्थायी रूप से शिया धर्म के प्रति झुकाव दिखाया, लेकिन वह मूल रूप से सुन्नी ही रहा।"
    },
    {
        question: "प्रश्न 41. 'मुबय्यन' नामक पद्य शैली का जनक किसे माना जाता है?",
        answers: shuffle([
            { text: "बाबर", correct: true },
            { text: "हुमायूँ", correct: false },
            { text: "कामरान", correct: false },
            { text: "अबुल फजल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह <b>तुर्की पद्य</b> में एक लेखन शैली थी जिसे <b>बाबर</b> ने विकसित किया था और हुमायूँ भी इस शैली में कविता लिखता था।"
    },
    {
        question: "प्रश्न 42. हुमायूँ के अभियानों में कौन सी भौगोलिक बाधा एक बड़ी चुनौती थी?",
        answers: shuffle([
            { text: "थार का रेगिस्तान", correct: false },
            { text: "हिमालय पर्वत", correct: false },
            { text: "पूर्वी भारत की नदियाँ और वर्षा", correct: true },
            { text: "दक्कन का पठार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बंगाल और बिहार के अभियानों के दौरान, विशेषकर <b>चौसा के युद्ध</b> में, <b>मानसून की बारिश और नदियों में बाढ़</b> हुमायूँ की सेना के लिए एक बड़ी आपदा साबित हुई।"
    },
    {
        question: "प्रश्न 43. हुमायूँ की सेना का मुख्य कमजोर पक्ष क्या था?",
        answers: shuffle([
            { text: "तोपखाने की कमी", correct: false },
            { text: "घुड़सवार सेना का अभाव", correct: false },
            { text: "विभिन्न नस्लों (मुगल, अफगान, भारतीय) के सैनिकों में एकता की कमी", correct: true },
            { text: "नौसेना का न होना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुमायूँ की सेना में सामंजस्य का अभाव था और उसके अमीर तथा सेनापति अक्सर व्यक्तिगत स्वार्थों के लिए लड़ते थे, जबकि शेरशाह की सेना में अफगान एकता अधिक थी।"
    },
    {
        question: "प्रश्न 44. किस स्थान पर हुमायूँ का अपने भाइयों (कामरान और अस्करी) से मिलन हुआ था, जब वह निर्वासन में था?",
        answers: shuffle([
            { text: "अमरकोट", correct: false },
            { text: "जूण (सिंध)", correct: true },
            { text: "कंधार", correct: false },
            { text: "काबुल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंध में भटकते हुए हुमायूँ कुछ समय के लिए <b>जूण</b> नामक स्थान पर रुका, जहाँ उसके भाई उससे मिले लेकिन कोई ठोस सहायता नहीं की।"
    },
    {
        question: "प्रश्न 45. हुमायूँ की मृत्यु पर किसने कहा था, \"उसे सच्ची शांति मिली\"?",
        answers: shuffle([
            { text: "लेनपूल", correct: false },
            { text: "बदायूँनी", correct: true },
            { text: "अबुल फजल", correct: false },
            { text: "निजामुद्दीन अहमद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इतिहासकार <b>अब्दुल कादिर बदायूँनी</b> ने हुमायूँ के संघर्षपूर्ण जीवन को देखते हुए उसकी मृत्यु पर यह टिप्पणी की थी।"
    },
    {
        question: "प्रश्न 46. भारत लौटने पर हुमायूँ का मुख्य सलाहकार कौन था?",
        answers: shuffle([
            { text: "मीर सैय्यद अली", correct: false },
            { text: "अस्करी मिर्ज़ा", correct: false },
            { text: "बैरम खाँ", correct: true },
            { text: "मुनीम खाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बैरम खाँ</b> ने न केवल सैन्य अभियानों (मच्छीवाड़ा और सरहिंद) का नेतृत्व किया, बल्कि हुमायूँ को राजनीतिक और रणनीतिक सलाह देने में भी महत्वपूर्ण भूमिका निभाई।"
    },
    {
        question: "प्रश्न 47. हुमायूँ ने दिल्ली के निकट किस मदरसे की स्थापना की थी?",
        answers: shuffle([
            { text: "मदरसा-ए-हुमायूँ", correct: false },
            { text: "मदरसा-ए-बेगम", correct: true },
            { text: "दारुल उलूम", correct: false },
            { text: "मदरसा-ए-शेरशाही", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुमायूँ की धाय माँ <b>माहम अनगा</b> ने दिल्ली में <b>'खैर-उल-मनाज़िल'</b> नामक मस्जिद और मदरसे का निर्माण करवाया था, जिसे <b>'मदरसा-ए-बेगम'</b> भी कहा जाता है।"
    },
    {
        question: "प्रश्न 48. हुमायूँ के समय मीर-ए-समां का क्या कार्य था?",
        answers: shuffle([
            { text: "शाही घराने का प्रबंधन करना", correct: true },
            { text: "न्याय विभाग का प्रमुख", correct: false },
            { text: "पत्र-व्यवहार का प्रभारी", correct: false },
            { text: "दान विभाग का प्रमुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>'मीर-ए-समां'</b> या <b>'खान-ए-समां'</b> शाही परिवार, महल और कारखानों की जरूरतों की देखरेख करने वाला एक महत्वपूर्ण अधिकारी होता था।"
    },
    {
        question: "प्रश्न 49. किस राजपूत राज्य के साथ हुमायूँ के संबंध अपेक्षाकृत बेहतर थे?",
        answers: shuffle([
            { text: "मारवाड़", correct: false },
            { text: "मेवाड़", correct: false },
            { text: "अम्बर (आमेर)", correct: true },
            { text: "कालिंजर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हालांकि हुमायूँ के राजपूतों से संबंध बहुत घनिष्ठ नहीं रहे, लेकिन <b>आमेर</b> के शासकों ने मुगलों का बहुत विरोध नहीं किया और बाद में अकबर के समय में यह संबंध बहुत मजबूत हुए।"
    },
    {
        question: "प्रश्न 50. हुमायूँ ने अपनी राजधानी कहाँ से कहाँ स्थानांतरित करने का प्रयास किया था?",
        answers: shuffle([
            { text: "आगरा से दिल्ली", correct: true },
            { text: "दिल्ली से लाहौर", correct: false },
            { text: "आगरा से गौड़ (बंगाल)", correct: false },
            { text: "दिल्ली से काबुल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुमायूँ ने दिल्ली में <b>'दीनपनाह'</b> नगर की स्थापना करके उसे अपनी राजधानी बनाने का इरादा जाहिर किया, यद्यपि आगरा भी एक महत्वपूर्ण केंद्र बना रहा।"
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