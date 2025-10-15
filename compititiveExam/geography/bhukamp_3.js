const questions = [
    {
        topHeading: "भूकंप पर आधारित 50 MCQs part_3  (quiz_no.)"
    },
    {
        question: "भूकंप के उद्गम केंद्र की गहराई के आधार पर, उथले फोकस वाले भूकंप की गहराई कितनी होती है?",
        answers: shuffle([
            { text: "70 किमी से कम", correct: true },
            { text: "70-300 किमी", correct: false },
            { text: "300-700 किमी", correct: false },
            { text: "700 किमी से अधिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिकांश भूकंप उथले फोकस वाले होते हैं और सतह के करीब होने के कारण अधिक विनाशकारी हो सकते हैं।"
    },
    {
        question: "मध्यवर्ती फोकस वाले भूकंपों की गहराई कितनी होती है?",
        answers: shuffle([
            { text: "70 किमी से कम", correct: false },
            { text: "70 से 300 किमी के बीच", correct: true },
            { text: "300 से 700 किमी के बीच", correct: false },
            { text: "700 किमी से अधिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये भूकंप आमतौर पर क्षेपण क्षेत्रों में पाए जाते हैं जहाँ एक प्लेट दूसरी के नीचे जा रही होती है।"
    },
    {
        question: "भारत में भूकंपीय गतिविधि की निगरानी के लिए नोडल एजेंसी कौन सी है?",
        answers: shuffle([
            { text: "भारतीय भूवैज्ञानिक सर्वेक्षण (GSI)", correct: false },
            { text: "राष्ट्रीय भूकंप विज्ञान केंद्र (NCS)", correct: true },
            { text: "भारत मौसम विज्ञान विभाग (IMD)", correct: false },
            { text: "राष्ट्रीय आपदा प्रबंधन प्राधिकरण (NDMA)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> NCS, पृथ्वी विज्ञान मंत्रालय के तहत, देश में भूकंपीय गतिविधि की निगरानी और संबंधित जानकारी प्रदान करने वाली मुख्य संस्था है।"
    },
    {
        question: "क्या चंद्रमा पर भी भूकंप आते हैं?",
        answers: shuffle([
            { text: "नहीं, चंद्रमा भूवैज्ञानिक रूप से मृत है", correct: false },
            { text: "हाँ, उन्हें \"मूनक्वेक\" (चंद्रकंप) कहा जाता है", correct: true },
            { text: "केवल उल्कापिंडों के टकराने से आते हैं", correct: false },
            { text: "हाँ, लेकिन वे पृथ्वी से भी शक्तिशाली होते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपोलो मिशनों द्वारा स्थापित सिस्मोमीटरों ने चंद्रमा पर भूकंपीय गतिविधि दर्ज की है, जो पृथ्वी के ज्वारीय खिंचाव और चंद्रमा के आंतरिक भाग के ठंडा होने के कारण होती है।"
    },
    {
        question: "'बेस आइसोलेशन' (Base Isolation) तकनीक का उपयोग किस लिए किया जाता है?",
        answers: shuffle([
            { text: "भूकंप का पता लगाने के लिए", correct: false },
            { text: "इमारतों को भूकंपीय कंपन से अलग करने के लिए", correct: true },
            { text: "जमीन की ताकत बढ़ाने के लिए", correct: false },
            { text: "सुनामी को रोकने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस तकनीक में इमारत की नींव और मुख्य संरचना के बीच लचीले पैड लगाए जाते हैं, जो भूकंप के दौरान जमीन को हिलने देते हैं जबकि इमारत काफी हद तक स्थिर रहती है।"
    },
    {
        question: "दुनिया का सबसे लंबा नतिलंब सर्पी भ्रंश कौन सा है?",
        answers: shuffle([
            { text: "सैन एंड्रियास भ्रंश", correct: true },
            { text: "अल्पाइन भ्रंश", correct: false },
            { text: "उत्तरी अनातोलियन भ्रंश", correct: false },
            { text: "डेड सी ट्रांसफॉर्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह कैलिफोर्निया में लगभग 1200 किलोमीटर तक फैला है और दुनिया के सबसे प्रसिद्ध और अध्ययन किए गए भ्रंशों में से एक है।"
    },
    {
        question: "P और S तरंगों की गति के बीच का अनुपात लगभग कितना होता है?",
        answers: shuffle([
            { text: "1:1", correct: false },
            { text: "1.7 : 1", correct: true },
            { text: "1 : 1.7", correct: false },
            { text: "2 : 1", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> P-तरंगें S-तरंगों की तुलना में लगभग 1.7 गुना (या √3 गुना) तेज चलती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इस अंतर का उपयोग अधिकेंद्र की दूरी की गणना के लिए किया जाता है।"
    },
    {
        question: "2015 में नेपाल में आया विनाशकारी भूकंप किस भूवैज्ञानिक प्रक्रिया का परिणाम था?",
        answers: shuffle([
            { text: "भारतीय प्लेट का यूरेशियन प्लेट के नीचे क्षेपण", correct: true },
            { text: "एक ज्वालामुखी का विस्फोट", correct: false },
            { text: "एक रूपांतर भ्रंश की गति", correct: false },
            { text: "जलाशय-प्रेरित भूकंपीयता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह भूकंप हिमालयी क्षेत्र में इन दो महाद्वीपीय प्लेटों के बीच चल रहे टकराव के कारण उत्पन्न तनाव का परिणाम था।"
    },
    {
        question: "भूकंपीय तरंगें किस प्रकार की ऊर्जा का वहन करती हैं?",
        answers: shuffle([
            { text: "स्थितिज ऊर्जा", correct: false },
            { text: "गतिज ऊर्जा", correct: false },
            { text: "प्रत्यास्थ ऊर्जा", correct: true },
            { text: "ऊष्मीय ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये तरंगें चट्टानों में संग्रहीत प्रत्यास्थ विरूपण ऊर्जा को एक स्थान से दूसरे स्थान पर स्थानांतरित करती हैं।"
    },
    {
        question: "'टेक्टोनिक' शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "ज्वालामुखी से संबंधित", correct: false },
            { text: "पृथ्वी की भूपर्पटी की संरचना और गति से संबंधित", correct: true },
            { text: "समुद्र से संबंधित", correct: false },
            { text: "वायुमंडल से संबंधित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह शब्द ग्रीक शब्द \"टेक्टोन\" से आया है, जिसका अर्थ है \"निर्माता\" या \"बिल्डर\", जो भूपर्पटी की बड़ी संरचनाओं के निर्माण को संदर्भित करता है।"
    },
    {
        question: "\"द्रवचालित अस्थिरता\" (Hydraulic Fracturing) या \"फ्रैकिंग\" से भूकंप कैसे उत्पन्न हो सकते हैं?",
        answers: shuffle([
            { text: "यह पृथ्वी का वजन बढ़ाता है", correct: false },
            { text: "यह भूमिगत जल को गर्म करता है", correct: false },
            { text: "उच्च दबाव वाले तरल पदार्थ को चट्टानों में डालने से मौजूदा भ्रंश सक्रिय हो सकते हैं", correct: true },
            { text: "यह एक रासायनिक प्रतिक्रिया का कारण बनता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तेल और गैस निकालने के लिए इस्तेमाल की जाने वाली यह प्रक्रिया छोटे से मध्यम आकार के प्रेरित भूकंपों को जन्म दे सकती है।"
    },
    {
        question: "भूकंप के जोखिम का आकलन करते समय, 'खतरा' (Hazard) और 'जोखिम' (Risk) में क्या अंतर है?",
        answers: shuffle([
            { text: "दोनों का एक ही अर्थ है", correct: false },
            { text: "खतरा प्राकृतिक घटना है, जबकि जोखिम उस घटना से होने वाला संभावित नुकसान है", correct: true },
            { text: "जोखिम प्राकृतिक घटना है, जबकि खतरा संभावित नुकसान है", correct: false },
            { text: "खतरा मानव निर्मित है, जोखिम प्राकृतिक है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भूकंपीय खतरा (Hazard) जमीन के हिलने की संभावना है।<br><br><i class='fa-solid fa-angles-right icon'></i> भूकंपीय जोखिम (Risk) उस कंपन से लोगों, संपत्तियों और अर्थव्यवस्था को होने वाले नुकसान की संभावना है।"
    },
    {
        question: "1897 का असम का महान भूकंप भारत के इतिहास में क्यों महत्वपूर्ण है?",
        answers: shuffle([
            { text: "यह भारत का पहला रिकॉर्ड किया गया भूकंप था", correct: false },
            { text: "यह अब तक का सबसे शक्तिशाली (~8.0+ परिमाण) अंतरा-प्लेट भूकंपों में से एक था", correct: true },
            { text: "इसके कारण ब्रह्मपुत्र नदी का मार्ग बदल गया", correct: false },
            { text: "इसने सुनामी को जन्म दिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस भूकंप ने ओल्डम को पृथ्वी की विभिन्न परतों के बारे में महत्वपूर्ण खोज करने के लिए प्रेरित किया और भारतीय भूविज्ञान में एक मील का पत्थर है।"
    },
    {
        question: "\"ट्यून्ड मास डैम्पर\" (Tuned Mass Damper) क्या है?",
        answers: shuffle([
            { text: "भूकंप का पता लगाने वाला उपकरण", correct: false },
            { text: "गगनचुंबी इमारतों को भूकंप और हवा के कंपन से बचाने के लिए इस्तेमाल किया जाने वाला एक उपकरण", correct: true },
            { text: "एक प्रकार का भूकंपरोधी सीमेंट", correct: false },
            { text: "जमीन के कंपन को बढ़ाने वाला उपकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक बहुत भारी पेंडुलम या ब्लॉक होता है जो इमारत के कंपन की विपरीत दिशा में झूलता है, जिससे कंपन की ऊर्जा कम हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> ताइपे 101 में एक प्रसिद्ध उदाहरण है।"
    },
    {
        question: "भूकंप के दौरान जानवरों के असामान्य व्यवहार का वैज्ञानिक आधार क्या है?",
        answers: shuffle([
            { text: "वे भविष्य देख सकते हैं", correct: false },
            { text: "वे P-तरंगों को मनुष्यों से पहले महसूस कर सकते हैं या जमीन में होने वाले सूक्ष्म परिवर्तनों को भांप सकते हैं", correct: true },
            { text: "यह केवल एक अंधविश्वास है", correct: false },
            { text: "वे भू-चुंबकीय क्षेत्रों में परिवर्तन महसूस करते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुछ जानवर मनुष्यों की तुलना में अधिक संवेदनशील होते हैं और भूकंप के शुरुआती, कमजोर झटकों (P-तरंगों) या अन्य पूर्व संकेतों को महसूस कर सकते हैं, हालांकि यह भविष्यवाणी का एक विश्वसनीय तरीका नहीं है।"
    },
    {
        question: "\"लिथोस्फीयर\" (स्थलमंडल) क्या है?",
        answers: shuffle([
            { text: "केवल पृथ्वी की भूपर्पटी", correct: false },
            { text: "पृथ्वी की भूपर्पटी और मैंटल का ऊपरी कठोर भाग", correct: true },
            { text: "केवल मैंटल", correct: false },
            { text: "केवल क्रोड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टेक्टोनिक प्लेटें इसी स्थलमंडल से बनी होती हैं, जो नीचे स्थित दुर्बलतामंडल (एस्थेनोस्फीयर) पर तैरती हैं।"
    },
    {
        question: "'हॉटस्पॉट' ज्वालामुखी भूकंपों का कारण कैसे बनते हैं?",
        answers: shuffle([
            { text: "वे प्लेटों को धकेलते हैं", correct: false },
            { text: "वे प्लेटों को पिघलाते हैं", correct: false },
            { text: "मैग्मा के ऊपर उठने और भूपर्पटी में गति करने से चट्टानों में तनाव उत्पन्न होता है", correct: true },
            { text: "वे पानी को गर्म करते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हवाई जैसे हॉटस्पॉट स्थानों पर, मैग्मा की गति के कारण लगातार छोटे से मध्यम आकार के भूकंप आते रहते हैं।"
    },
    {
        question: "भूकंपीय तरंगों का आयाम (Amplitude) क्या दर्शाता है?",
        answers: shuffle([
            { text: "तरंगों की गति", correct: false },
            { text: "जमीन के कंपन की मात्रा या तीव्रता", correct: true },
            { text: "तरंगों की आवृत्ति", correct: false },
            { text: "भूकंप की गहराई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिस्मोग्राम पर तरंग की ऊँचाई (आयाम) जितनी अधिक होगी, जमीन का कंपन उतना ही mạnh होगा।<br><br><i class='fa-solid fa-angles-right icon'></i> रिक्टर पैमाना इसी आयाम पर आधारित है।"
    },
    {
        question: "पृथ्वी पर सबसे लंबा पर्वतीय और भूकंपीय तंत्र कौन सा है?",
        answers: shuffle([
            { text: "हिमालय", correct: false },
            { text: "एंडीज", correct: false },
            { text: "मध्य-महासागरीय कटक प्रणाली", correct: true },
            { text: "रॉकी पर्वत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह दुनिया भर के महासागरों में लगभग 65,000 किलोमीटर तक फैली एक विशाल पर्वत श्रृंखला है, जहाँ लगातार भूकंप और ज्वालामुखी गतिविधियाँ होती रहती हैं।"
    },
    {
        question: "यदि आप एक भूकंप के अधिकेंद्र पर खड़े हैं, तो आपको सबसे पहले किस प्रकार का कंपन महसूस होगा?",
        answers: shuffle([
            { text: "एक क्षैतिज झटका", correct: false },
            { text: "एक ऊर्ध्वाधर (ऊपर-नीचे) धक्का", correct: true },
            { text: "एक ঘূর্ণन गति", correct: false },
            { text: "कोई कंपन नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिकेंद्र पर, P-तरंगें लगभग सीधे नीचे से ऊपर की ओर आती हैं, जिससे एक ऊर्ध्वाधर झटका महसूस होता है।"
    },
    {
        question: "भूकंप से संबंधित जोखिमों को कम करने के उपायों को क्या कहा जाता है?",
        answers: shuffle([
            { text: "भविष्यवाणी (Prediction)", correct: false },
            { text: "शमन (Mitigation)", correct: true },
            { text: "पुनर्प्राप्ति (Recovery)", correct: false },
            { text: "प्रतिक्रिया (Response)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शमन में वे सभी कार्य शामिल हैं जो आपदा के प्रभाव को कम करने के लिए पहले किए जाते हैं, जैसे भूकंपरोधी निर्माण और जन जागरूकता।"
    },
    {
        question: "भूकंप के बाद जमीन में दिखाई देने वाली दरार को क्या कहते हैं?",
        answers: shuffle([
            { text: "अधिकेंद्र", correct: false },
            { text: "भ्रंश प्रवणिका (Fault Scarp) या सतही विदर (Surface Rupture)", correct: true },
            { text: "सिस्मोलाइन", correct: false },
            { text: "भूकंपीय अंतराल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब भ्रंश पृथ्वी की सतह तक टूट जाता है, तो यह जमीन में एक स्पष्ट दरार या एक तरफ की जमीन का दूसरी तरफ से ऊँचा उठना (प्रवणिका) दिखा सकता है।"
    },
    {
        question: "'पैन्जिया' के टूटने की शुरुआत किस भूवैज्ञानिक प्रक्रिया से जुड़ी है?",
        answers: shuffle([
            { text: "बड़े पैमाने पर भूकंप और ज्वालामुखी गतिविधि", correct: true },
            { text: "एक बड़े हिमयुग", correct: false },
            { text: "एक विशाल उल्कापिंड का प्रभाव", correct: false },
            { text: "समुद्र के स्तर में वृद्धि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाद्वीपों का अलग होना (दरार पड़ना) एक अत्यंत ऊर्जावान प्रक्रिया है जिसमें बड़े पैमाने पर भ्रंशन और ज्वालामुखी विस्फोट शामिल होते हैं, जो मैंटल प्लूम द्वारा संचालित होते हैं।"
    },
    {
        question: "किस ग्रह पर सौरमंडल का सबसे बड़ा ज्ञात ज्वालामुखी और संभावित रूप से भूकंपीय गतिविधि होती है?",
        answers: shuffle([
            { text: "शुक्र", correct: false },
            { text: "पृथ्वी", correct: false },
            { text: "मंगल", correct: true },
            { text: "बृहस्पति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगल पर ओलंपस मॉन्स नामक विशाल ज्वालामुखी है।<br><br><i class='fa-solid fa-angles-right icon'></i> नासा के इनसाइट लैंडर ने मंगल पर \"मार्सक्वेक\" (मंगलकंप) का भी पता लगाया है, जो ग्रह के ठंडा होने और सिकुड़ने के कारण हो सकते हैं।"
    },
    {
        question: "\"भूकंपीय पूर्व चेतावनी\" (Earthquake Early Warning) प्रणाली कैसे काम करती है?",
        answers: shuffle([
            { text: "यह भूकंप की भविष्यवाणी करती है", correct: false },
            { text: "यह तेज P-तरंगों का पता लगाकर धीमी, विनाशकारी S-तरंगों के आने से कुछ सेकंड पहले चेतावनी देती है", correct: true },
            { text: "यह जानवरों के व्यवहार पर नज़र रखती है", correct: false },
            { text: "यह रेडॉन गैस के स्तर को मापती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह प्रणाली अधिकेंद्र के पास भूकंप का पता लगाती है और संचार प्रणालियों के माध्यम से दूर के शहरों तक चेतावनी भेजती है, जो भूकंपीय तरंगों से तेज यात्रा करती हैं।"
    },
    {
        question: "भूकंपीय तरंगों का कौन सा गुण उन्हें तेल और गैस की खोज में उपयोगी बनाता है?",
        answers: shuffle([
            { text: "उनका विनाशकारी स्वभाव", correct: false },
            { text: "उनकी गति का विभिन्न चट्टानी परतों में बदलना", correct: true },
            { text: "उनका चुंबकीय गुण", correct: false },
            { text: "उनकी ऊष्मीय ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भूविज्ञानी कृत्रिम रूप से कंपन उत्पन्न करते हैं और विभिन्न चट्टानी परतों से परावर्तित होकर लौटने वाली तरंगों का विश्लेषण करते हैं, जिससे भूमिगत संरचनाओं (जैसे तेल भंडार) का नक्शा तैयार किया जा सकता है।"
    },
    {
        question: "\"एस्थेनोस्फीयर\" (दुर्बलतामंडल) भूकंप की उत्पत्ति में क्या भूमिका निभाता है?",
        answers: shuffle([
            { text: "यह भूकंपों का स्रोत है", correct: false },
            { text: "यह कठोर स्थलमंडलीय प्लेटों को गति करने के लिए एक नरम, प्लास्टिक जैसी परत प्रदान करता है", correct: true },
            { text: "यह भूकंपीय तरंगों को रोकता है", correct: false },
            { text: "इसकी कोई भूमिका नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्लेटों की गति इसी परत पर होती है, और इसी गति से प्लेटों के किनारों पर तनाव जमा होता है जो भूकंपों को जन्म देता है।"
    },
    {
        question: "यदि कोई भूकंप रिक्टर पैमाने पर 0 या ऋणात्मक मान का हो, तो इसका क्या अर्थ है?",
        answers: shuffle([
            { text: "ऐसा संभव नहीं है", correct: false },
            { text: "यह एक बहुत ही छोटा भूकंप है जिसे केवल संवेदनशील उपकरणों द्वारा ही पता लगाया जा सकता है", correct: true },
            { text: "यह एक त्रुटिपूर्ण माप है", correct: false },
            { text: "यह एक गहरा भूकंप है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्योंकि रिक्टर पैमाना लघुगणकीय है, यह शून्य और ऋणात्मक मानों की अनुमति देता है, जो अत्यंत छोटे, अगोचर भूकंपों (माइक्रोक्वेक) का प्रतिनिधित्व करते हैं।"
    },
    {
        question: "भूकंप की आवृत्ति (Frequency) क्या है?",
        answers: shuffle([
            { text: "एक सेकंड में गुजरने वाली तरंगों की संख्या", correct: true },
            { text: "भूकंप आने की दर", correct: false },
            { text: "भूकंप की कुल ऊर्जा", correct: false },
            { text: "दो तरंग शिखरों के बीच की दूरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उच्च-आवृत्ति (तेज कंपन) वाली तरंगें छोटी, कठोर इमारतों को अधिक नुकसान पहुँचाती हैं, जबकि कम-आवृत्ति (धीमा कंपन) वाली तरंगें लंबी, लचीली इमारतों को अधिक प्रभावित करती हैं।"
    },
    {
        question: "\"सिस्मिक मोमेंट\" (Seismic Moment) क्या मापता है?",
        answers: shuffle([
            { text: "भूकंप की तीव्रता", correct: false },
            { text: "भूकंप के दौरान भ्रंश पर होने वाले कुल विरूपण या खिसकाव को", correct: true },
            { text: "भूकंप की अवधि", correct: false },
            { text: "आफ्टरशॉक्स की संख्या", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक भूकंप के आकार का सबसे मौलिक माप है, जो भ्रंश क्षेत्र, औसत खिसकाव और चट्टानों की कठोरता को ध्यान में रखता है।<br><br><i class='fa-solid fa-angles-right icon'></i> आघूर्ण परिमाण पैमाना इसी पर आधारित है।"
    },
    {
        question: "पृथ्वी पर सबसे गहरा मानव निर्मित बोरहोल (कोला सुपरडीप बोरहोल) लगभग 12 किमी गहरा है। क्या वहां भूकंप महसूस किए गए?",
        answers: shuffle([
            { text: "नहीं, उतनी गहराई पर चट्टानें प्लास्टिक जैसी होती हैं", correct: false },
            { text: "हाँ, तनाव के कारण सूक्ष्म भूकंप दर्ज किए गए", correct: true },
            { text: "केवल ड्रिलिंग के कारण कंपन महसूस हुआ", correct: false },
            { text: "जानकारी उपलब्ध नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अत्यधिक दबाव और तापमान के बावजूद, उतनी गहराई पर भी चट्टानें भंगुर हो सकती हैं और तनाव मुक्त होने पर छोटे भूकंप उत्पन्न कर सकती हैं।"
    },
    {
        question: "वह कौन सा बल है जो टेक्टोनिक प्लेटों को गतिमान करता है?",
        answers: shuffle([
            { text: "पृथ्वी के घूर्णन से उत्पन्न बल", correct: false },
            { text: "चंद्रमा का गुरुत्वाकर्षण", correct: false },
            { text: "मैंटल में संवहन धाराएं", correct: true },
            { text: "सौर पवन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी के आंतरिक भाग से निकलने वाली गर्मी मैंटल में संवहन धाराएं बनाती है, जो अपने ऊपर स्थित प्लेटों को खींचती और धकेलती हैं, जिससे भूकंप और अन्य विवर्तनिक गतिविधियां होती हैं।"
    },
    {
        question: "एक निष्क्रिय भ्रंश (Inactive Fault) क्या है?",
        answers: shuffle([
            { text: "एक भ्रंश जिस पर कभी भूकंप नहीं आया", correct: false },
            { text: "एक भ्रंश जिस पर हाल के भूवैज्ञानिक अतीत में कोई गतिविधि नहीं हुई है", correct: true },
            { text: "एक छोटा भ्रंश", correct: false },
            { text: "एक भूमिगत भ्रंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भूवैज्ञानिक मानते हैं कि यदि किसी भ्रंश पर पिछले 10,000 वर्षों में कोई हलचल नहीं हुई है, तो उसे निष्क्रिय माना जा सकता है, हालांकि इसके पुनः सक्रिय होने की संभावना बनी रहती है।"
    },
    {
        question: "\"ग्राउंड एम्प्लीफिकेशन\" (Ground Amplification) की घटना क्या है?",
        answers: shuffle([
            { text: "जमीन का ऊपर उठना", correct: false },
            { text: "नरम, असंपीडित मिट्टी या तलछट पर भूकंपीय तरंगों के आयाम का बढ़ना", correct: true },
            { text: "भूकंप की आवाज का बढ़ना", correct: false },
            { text: "आफ्टरशॉक्स का बढ़ना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब भूकंपीय तरंगें कठोर चट्टान से नरम मिट्टी (जैसे नदी के बेसिन में) में प्रवेश करती हैं, तो वे धीमी हो जाती हैं और उनका आयाम बढ़ जाता है, जिससे उस स्थान पर कंपन और विनाश अधिक होता है।"
    },
    {
        question: "भूकंपीय तरंगों के अलावा, एक शक्तिशाली भूकंप और क्या उत्पन्न कर सकता है?",
        answers: shuffle([
            { text: "पृथ्वी के गुरुत्वाकर्षण क्षेत्र में सूक्ष्म परिवर्तन", correct: false },
            { text: "पृथ्वी के घूर्णन की गति में एक छोटा सा परिवर्तन", correct: false },
            { text: "दिन की लंबाई में एक अति सूक्ष्म परिवर्तन", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 2004 के सुमात्रा भूकंप जैसे विशाल भूकंप पृथ्वी के द्रव्यमान के पुनर्वितरण का कारण बन सकते हैं, जिससे ये सभी सूक्ष्म प्रभाव पड़ते हैं।"
    },
    {
        question: "'पैलियोसिस्मोलॉजी' (Paleoseismology) किसका अध्ययन है?",
        answers: shuffle([
            { text: "प्राचीन ग्रंथों में भूकंप के रिकॉर्ड का", correct: false },
            { text: "प्रागैतिहासिक भूकंपों का भूवैज्ञानिक साक्ष्यों (जैसे तलछट और भ्रंशों) के माध्यम से अध्ययन", correct: true },
            { text: "जानवरों पर भूकंप के प्रभाव का", correct: false },
            { text: "चंद्रमा पर भूकंपों का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह विज्ञान खाइयों को खोदकर और चट्टानी परतों का विश्लेषण करके किसी भ्रंश पर अतीत में आए भूकंपों के समय और आकार का पता लगाता है, जो भविष्य के खतरों का आकलन करने में मदद करता है।"
    },
    {
        question: "भूकंप के दौरान एक सामान्य गलती क्या है जिसे करने से बचना चाहिए?",
        answers: shuffle([
            { text: "शांत रहना", correct: false },
            { text: "मदद के लिए पुकारना", correct: false },
            { text: "दरवाजे की चौखट में खड़े होना", correct: true },
            { text: "सिर को ढकना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरानी इमारतों में दरवाजे की चौखट मजबूत हो सकती थी, लेकिन आधुनिक घरों में यह सबसे कमजोर हिस्सों में से एक हो सकती है और सुरक्षित नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> किसी मजबूत मेज के नीचे छिपना बेहतर है।"
    },
    {
        question: "\"फोकस\" और \"अधिकेंद्र\" के बीच की दूरी क्या दर्शाती है?",
        answers: shuffle([
            { text: "भूकंप का परिमाण", correct: false },
            { text: "भूकंप की अवधि", correct: false },
            { text: "भूकंप के उद्गम केंद्र की गहराई", correct: true },
            { text: "भूकंप की तीव्रता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह दूरी उद्गम केंद्र (फोकस) की गहराई के बराबर होती है।"
    },
    {
        question: "2023 में तुर्की-सीरिया में आया विनाशकारी भूकंप किस प्लेट सीमा पर स्थित था?",
        answers: shuffle([
            { text: "अभिसारी सीमा", correct: false },
            { text: "अपसारी सीमा", correct: false },
            { text: "रूपांतर सीमा (स्ट्राइक-स्लिप फॉल्ट)", correct: true },
            { text: "कोई प्लेट सीमा नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह भूकंप पूर्वी अनातोलियन भ्रंश पर आया, जहाँ अनातोलियन प्लेट, अरेबियन प्लेट के सापेक्ष पश्चिम की ओर खिसक रही है, जो एक प्रकार की रूपांतर या स्ट्राइक-स्लिप सीमा है।"
    },
    {
        question: "पृथ्वी पर आने वाले सभी भूकंपों में से लगभग 81% किस क्षेत्र में आते हैं?",
        answers: shuffle([
            { text: "मध्य-अटलांटिक कटक", correct: false },
            { text: "अल्पाइन-हिमालयन बेल्ट", correct: false },
            { text: "परि-प्रशांत बेल्ट (रिंग ऑफ फायर)", correct: true },
            { text: "पूर्वी अफ्रीकी दरार घाटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह दुनिया का सबसे सक्रिय भूकंपीय और ज्वालामुखी क्षेत्र है, जो दुनिया के अधिकांश बड़े भूकंपों के लिए जिम्मेदार है।"
    },
    {
        question: "\"सेइश\" (Seiche) क्या है?",
        answers: shuffle([
            { text: "एक प्रकार की भूकंपीय तरंग", correct: false },
            { text: "भूकंप के कारण एक संलग्न या आंशिक रूप से संलग्न जल निकाय (जैसे झील या स्विमिंग पूल) में उत्पन्न होने वाली स्थायी तरंग", correct: true },
            { text: "एक ज्वालामुखी विस्फोट", correct: false },
            { text: "एक छोटा आफ्टरशॉक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भूकंपीय कंपन के कारण झील या पूल का पानी एक छोर से दूसरे छोर तक छलकने लगता है, जो कंपन रुकने के बाद भी कुछ समय तक जारी रह सकता है।"
    },
    {
        question: "भूकंपीय तरंगों के व्यवहार के आधार पर पृथ्वी की परतों की खोज का श्रेय किसे दिया जाता है?",
        answers: shuffle([
            { text: "एंड्रिया मोहोरोविसिक", correct: false },
            { text: "बेनो गुटेनबर्ग", correct: false },
            { text: "इंग लेहमन", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहोरोविसिक ने क्रस्ट-मैंटल सीमा (मोहो), गुटेनबर्ग ने मैंटल-कोर सीमा और लेहमन ने आंतरिक और बाहरी कोर के बीच की सीमा की खोज की।"
    },
    {
        question: "क्या गहरे भूकंप सुनामी उत्पन्न कर सकते हैं?",
        answers: shuffle([
            { text: "हाँ, हमेशा", correct: false },
            { text: "नहीं, क्योंकि वे समुद्र तल को महत्वपूर्ण रूप से विस्थापित नहीं करते हैं", correct: true },
            { text: "केवल अगर वे बहुत शक्तिशाली हों", correct: false },
            { text: "केवल ज्वालामुखी के पास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुनामी उत्पन्न करने के लिए, भूकंप का उथला होना और समुद्र तल में पर्याप्त ऊर्ध्वाधर विस्थापन करना आवश्यक है।<br><br><i class='fa-solid fa-angles-right icon'></i> गहरे भूकंपों की ऊर्जा सतह तक पहुँचने से पहले ही क्षीण हो जाती है।"
    },
    {
        question: "कौन सा पैमाना भूकंप के भौतिक आकार (भौतिकी) पर आधारित है?",
        answers: shuffle([
            { text: "मरकेली पैमाना", correct: false },
            { text: "रिक्टर पैमाना", correct: false },
            { text: "आघूर्ण परिमाण पैमाना", correct: true },
            { text: "रॉसी-फोरेल पैमाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सीधे भ्रंश के क्षेत्र, विस्थापन और चट्टानों की कठोरता जैसे भौतिक मापदंडों से संबंधित है, जो इसे सबसे वैज्ञानिक पैमाना बनाता है।"
    },
    {
        question: "भूकंप के दौरान P-तरंगों के आने और S-तरंगों के आने के बीच के समय को क्या कहते हैं?",
        answers: shuffle([
            { text: "S-P समय अंतराल", correct: true },
            { text: "P-S अवधि", correct: false },
            { text: "भूकंपीय अंतराल", correct: false },
            { text: "अग्रगामी समय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस समय अंतराल का सीधा संबंध भूकंप के अधिकेंद्र से स्टेशन की दूरी से होता है।"
    },
    {
        question: "भूकंपीय तरंगें जब कठोर ग्रेनाइट से नरम तलछट में जाती हैं तो उनकी गति...",
        answers: shuffle([
            { text: "बढ़ जाती है", correct: false },
            { text: "कम हो जाती है", correct: true },
            { text: "अपरिवर्तित रहती है", correct: false },
            { text: "शून्य हो जाती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नरम और कम सघन सामग्री में तरंगों की गति धीमी हो जाती है, लेकिन उनका आयाम (कंपन की तीव्रता) बढ़ सकता है।"
    },
    {
        question: "1960 का वाल्डिविया (चिली) भूकंप इतिहास में क्यों दर्ज है?",
        answers: shuffle([
            { text: "यह सबसे गहरा भूकंप था", correct: false },
            { text: "यह रिकॉर्ड किया गया अब तक का सबसे शक्तिशाली भूकंप (परिमाण 9.5) था", correct: true },
            { text: "इसने सबसे बड़ी सुनामी उत्पन्न की", correct: false },
            { text: "यह पहला भूकंप था जिसकी भविष्यवाणी की गई थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह नाज्का प्लेट के दक्षिण अमेरिकी प्लेट के नीचे क्षेपित होने के कारण हुआ एक मेगाथ्रस्ट भूकंप था, जिसने पूरे प्रशांत महासागर में सुनामी भेजी।"
    },
    {
        question: "कौन सा कारक किसी स्थान पर भूकंप से होने वाले नुकसान को प्रभावित नहीं करता है?",
        answers: shuffle([
            { text: "भूकंप का परिमाण", correct: false },
            { text: "अधिकेंद्र से दूरी", correct: false },
            { text: "स्थानीय भूविज्ञान (मिट्टी का प्रकार)", correct: false },
            { text: "चंद्रमा की कला (Phase of the Moon)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जबकि परिमाण, दूरी, गहराई और स्थानीय मिट्टी की स्थिति नुकसान को बहुत प्रभावित करती है, चंद्रमा की कला का कोई सिद्ध और महत्वपूर्ण प्रभाव नहीं है।"
    },
    {
        question: "\"भूकंपीय पूर्व चेतावनी\" प्रणाली का सबसे बड़ा लाभ क्या है?",
        answers: shuffle([
            { text: "यह लोगों को सुरक्षित स्थानों पर जाने के लिए कई घंटे देती है", correct: false },
            { text: "यह कुछ सेकंड का समय प्रदान करती है ताकि स्वचालित प्रणालियाँ गैस लाइनों को बंद कर सकें, ट्रेनों को धीमा कर सकें और लिफ्टों को रोक सकें", correct: true },
            { text: "यह भूकंप को होने से रोकती है", correct: false },
            { text: "यह आफ्टरशॉक्स को रोकती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये कुछ सेकंड महत्वपूर्ण सेवाओं को सुरक्षित करने और लोगों को तत्काल सुरक्षात्मक उपाय (जैसे छिपना) करने की अनुमति देने के लिए पर्याप्त हो सकते हैं।"
    },
    {
        question: "भूकंप के संदर्भ में \"एसेस्मिक क्रीप\" (Aseismic Creep) क्या है?",
        answers: shuffle([
            { text: "एक बहुत छोटा भूकंप", correct: false },
            { text: "भूकंप के बिना एक भ्रंश के साथ धीमी, निरंतर गति", correct: true },
            { text: "भूकंप के बाद जमीन का धंसना", correct: false },
            { text: "एक भूकंप झुंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुछ भ्रंशों पर, तनाव धीरे-धीरे और लगातार मुक्त होता है, जिससे कोई पता लगाने योग्य भूकंप उत्पन्न नहीं होता।<br><br><i class='fa-solid fa-angles-right icon'></i> यह \"स्टिक-स्लिप\" व्यवहार के विपरीत है जो भूकंप का कारण बनता है।"
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