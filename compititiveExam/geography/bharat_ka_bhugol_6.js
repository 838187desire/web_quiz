const questions = [
  {
      topHeading: "भारत के भूगोल पर आधारित 50 बहुविकल्पीय प्रश्न (MCQs) part 6  (quiz_no. 6)"
  },
    {
      question: "भारत का 'सबसे पुराना तेल क्षेत्र' कौन-सा है?",
      answers: shuffle([
        { text: "अंकलेश्वर", correct: false },
        { text: "नहरकटिया", correct: false },
        { text: "डिगबोई", correct: true },
        { text: "बॉम्बे हाई", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> डिगबोई (Digboi) भारत का सबसे पुराना तेल क्षेत्र है, जो असम राज्य में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 1889 में कच्चे तेल की खोज की गई थी और 1901 में एशिया की पहली तेल रिफाइनरी भी यहीं स्थापित की गई थी।<br><br><i class='fa-solid fa-angles-right icon'></i> डिगबोई ने भारत में पेट्रोलियम उद्योग के विकास में महत्वपूर्ण भूमिका निभाई।"
    },
    {
      question: "भारत में 'मॉनसून के पीछे हटने' (Retreating Monsoon) से सबसे अधिक वर्षा किस राज्य में होती है?",
      answers: shuffle([
        { text: "केरल", correct: false },
        { text: "महाराष्ट्र", correct: false },
        { text: "तमिलनाडु", correct: true },
        { text: "आंध्र प्रदेश", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में 'मॉनसून के पीछे हटने' या 'उत्तर-पूर्वी मॉनसून' (North-East Monsoon) से सबसे अधिक वर्षा तमिलनाडु राज्य में होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> अक्टूबर से दिसंबर के महीनों के दौरान, मॉनसून पवनें उत्तर-पूर्व से दक्षिण-पश्चिम की ओर बहती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जब ये पवनें बंगाल की खाड़ी के ऊपर से गुजरती हैं, तो वे नमी उठा लेती हैं और तमिलनाडु के कोरोमंडल तट पर भारी वर्षा करती हैं।"
    },
    {
      question: "'नर्मदा बचाओ आंदोलन' का संबंध किस नदी घाटी परियोजना से है?",
      answers: shuffle([
        { text: "भाखड़ा नांगल परियोजना", correct: false },
        { text: "टिहरी बांध परियोजना", correct: false },
        { text: "सरदार सरोवर परियोजना", correct: true },
        { text: "हीराकुंड परियोजना", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> नर्मदा बचाओ आंदोलन (Narmada Bachao Andolan - NBA) एक सामाजिक आंदोलन है जो सरदार सरोवर बांध परियोजना के निर्माण के विरोध में शुरू हुआ था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह आंदोलन मेधा पाटेकर और बाबा आमटे जैसे कार्यकर्ताओं के नेतृत्व में चला, जिसका मुख्य उद्देश्य बांध निर्माण के कारण विस्थापित होने वाले लोगों के पुनर्वास और पर्यावरण पर पड़ने वाले नकारात्मक प्रभावों को उजागर करना था।"
    },
    {
      question: "भारत में 'लाल मिट्टी' का रंग लाल क्यों होता है?",
      answers: shuffle([
        { text: "उच्च कार्बन सामग्री के कारण", correct: false },
        { text: "लोहे के ऑक्साइड की उपस्थिति के कारण", correct: true },
        { text: "एल्यूमीनियम के उच्च स्तर के कारण", correct: false },
        { text: "जैविक पदार्थ की अधिकता के कारण", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टी (Red Soil) का रंग लाल या लालिमायुक्त लोहे के ऑक्साइड (जैसे फेरिक ऑक्साइड) की उपस्थिति के कारण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मिट्टी मुख्यतः प्रायद्वीपीय भारत के पूर्वी और दक्षिणी भागों में पाई जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह आमतौर पर अम्लीय होती है और इसमें नाइट्रोजन, फास्फोरस और ह्यूमस की कमी होती है।"
    },
    {
      question: "भारत का 'सबसे लंबा राष्ट्रीय राजमार्ग' कौन-सा है?",
      answers: shuffle([
        { text: "NH 27", correct: false },
        { text: "NH 44", correct: true },
        { text: "NH 48", correct: false },
        { text: "NH 52", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रीय राजमार्ग 44 (NH 44) भारत का सबसे लंबा राष्ट्रीय राजमार्ग है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उत्तर में श्रीनगर (जम्मू-कश्मीर) से शुरू होकर दक्षिण में कन्याकुमारी (तमिलनाडु) तक जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी कुल लंबाई लगभग 3,745 किलोमीटर है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह राजमार्ग 11 राज्यों और 1 केंद्र शासित प्रदेश से होकर गुजरता है।"
    },
    {
      question: "'कच्छ का रण' भारत के किस राज्य में स्थित है?",
      answers: shuffle([
        { text: "राजस्थान", correct: false },
        { text: "गुजरात", correct: true },
        { text: "महाराष्ट्र", correct: false },
        { text: "मध्य प्रदेश", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> कच्छ का रण (Rann of Kutch) गुजरात राज्य में स्थित एक विशाल मौसमी खारा दलदल (Salt Marsh) है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह विश्व के सबसे बड़े नमक के रेगिस्तानों में से एक है।<br><br><i class='fa-solid fa-angles-right icon'></i> मॉनसून के दौरान यह क्षेत्र पानी से भर जाता है, और शुष्क मौसम में पानी सूख जाता है, जिससे नमक की एक मोटी परत बन जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह जंगली गधों (Indian Wild Ass) के लिए एक अद्वितीय आवास है।"
    },
    {
      question: "भारत में 'ज्वारीय वन' (Tidal Forests) को अन्य किस नाम से जाना जाता है?",
      answers: shuffle([
        { text: "सदाबहार वन", correct: false },
        { text: "मानसूनी वन", correct: false },
        { text: "मैंग्रोव वन", correct: true },
        { text: "अल्पाइन वन", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> ज्वारीय वन (Tidal Forests) को मैंग्रोव वन (Mangrove Forests) भी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये वन ज्वारीय मुहानों (Estuaries), नदी डेल्टाओं और तटीय क्षेत्रों में उगते हैं जहाँ खारा पानी और दलदली मिट्टी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> मैंग्रोव पेड़ों में खारे पानी और ऑक्सीजन की कमी वाली मिट्टी में जीवित रहने के लिए विशेष अनुकूलन होते हैं (जैसे श्वसन जड़ें)।<br><br><i class='fa-solid fa-angles-right icon'></i> सुंदरबन और भितरकनिका भारत के प्रमुख मैंग्रोव वन क्षेत्र हैं।"
    },
    {
      question: "भारत में 'कोयले' के भंडार मुख्य रूप से किस भूवैज्ञानिक संरचना में पाए जाते हैं?",
      answers: shuffle([
        { text: "धारवाड़ क्रम की चट्टानें", correct: false },
        { text: "कुडप्पा क्रम की चट्टानें", correct: false },
        { text: "गोंडवाना क्रम की चट्टानें", correct: true },
        { text: "विंध्य क्रम की चट्टानें", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत के अधिकांश कोयले के भंडार गोंडवाना क्रम की चट्टानों (Gondwana System of Rocks) में पाए जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये चट्टानें भारत के मुख्य कोयला क्षेत्रों जैसे दामोदर घाटी (झारखंड, पश्चिम बंगाल), महानदी घाटी (ओडिशा), गोदावरी घाटी (तेलंगाना, आंध्र प्रदेश) और सोन घाटी (मध्य प्रदेश) में फैली हुई हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> गोंडवाना कोयला बिटुमिनस प्रकार का होता है।"
    },
    {
      question: "भारत की 'पूर्वी घाट' की सबसे ऊँची चोटी कौन-सी है?",
      answers: shuffle([
        { text: "अनाईमुडी", correct: false },
        { text: "डोडाबेटा", correct: false },
        { text: "महेंद्रगिरि", correct: false },
        { text: "जिंदगाडा चोटी", correct: true }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> पूर्वी घाट की सबसे ऊँची चोटी जिंदगाडा चोटी (Jindhagada Peak) है, जो आंध्र प्रदेश के अराकू घाटी के पास स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी ऊँचाई लगभग 1,690 मीटर है।<br><br><i class='fa-solid fa-angles-right icon'></i> पहले महेंद्रगिरि को पूर्वी घाट की सबसे ऊँची चोटी माना जाता था, लेकिन नए सर्वेक्षणों ने जिंदगाडा की अधिक ऊँचाई की पुष्टि की है।<br><br><i class='fa-solid fa-angles-right icon'></i> अनाईमुडी पश्चिमी घाट और दक्षिण भारत की सबसे ऊँची चोटी है, और डोडाबेटा नीलगिरि की सबसे ऊँची चोटी है।"
    },
    {
      question: "भारत में 'श्वेत क्रांति' (White Revolution) के जनक के रूप में किसे जाना जाता है?",
      answers: shuffle([
        { text: "डॉ. एम.एस. स्वामीनाथन", correct: false },
        { text: "डॉ. वर्गीज कुरियन", correct: true },
        { text: "डॉ. सैम पित्रोदा", correct: false },
        { text: "डॉ. होमी भाभा", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> डॉ. वर्गीज कुरियन को भारत में 'श्वेत क्रांति' (White Revolution) या 'ऑपरेशन फ्लड' का जनक माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने डेयरी सहकारी आंदोलन (जैसे अमूल) के माध्यम से भारत को दूध उत्पादन में आत्मनिर्भर बनाने में महत्वपूर्ण भूमिका निभाई।<br><br><i class='fa-solid fa-angles-right icon'></i> उनके प्रयासों से भारत विश्व का सबसे बड़ा दूध उत्पादक देश बन गया।<br><br><i class='fa-solid fa-angles-right icon'></i> डॉ. एम.एस. स्वामीनाथन हरित क्रांति के जनक हैं।"
    },
    {
      question: "भारत का 'सबसे अधिक जनसंख्या घनत्व' (Population Density) वाला राज्य कौन-सा है (2011 जनगणना के अनुसार)?",
      answers: shuffle([
        { text: "उत्तर प्रदेश", correct: false },
        { text: "पश्चिम बंगाल", correct: false },
        { text: "बिहार", correct: true },
        { text: "केरल", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> जनगणना 2011 के अनुसार, बिहार भारत का सबसे अधिक जनसंख्या घनत्व वाला राज्य है, जहाँ प्रति वर्ग किलोमीटर में 1,106 व्यक्ति निवास करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> बिहार का उच्च जनसंख्या घनत्व इसकी उपजाऊ कृषि भूमि, ऐतिहासिक महत्व और कृषि पर निर्भरता के कारण है, जिसने बड़े पैमाने पर जनसंख्या को आकर्षित किया है।"
    },
    {
      question: "'मानस राष्ट्रीय उद्यान' किस जानवर के लिए प्रसिद्ध है और किस राज्य में स्थित है?",
      answers: shuffle([
        { text: "एक सींग वाला गैंडा, असम", correct: true },
        { text: "बंगाल टाइगर, पश्चिम बंगाल", correct: false },
        { text: "एशियाई शेर, गुजरात", correct: false },
        { text: "हाथी, केरल", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> मानस राष्ट्रीय उद्यान (Manas National Park) असम राज्य में स्थित एक यूनेस्को विश्व धरोहर स्थल और बायोस्फीयर रिजर्व है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अपने एक सींग वाले गैंडों (One-horned Rhinoceros) के साथ-साथ रॉयल बंगाल टाइगर, एशियाई हाथी और कई अन्य लुप्तप्राय प्रजातियों के लिए जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत और भूटान की सीमा पर स्थित है।"
    },
    {
      question: "भारत में 'लेटराइट मिट्टी' मुख्य रूप से किन क्षेत्रों में पाई जाती है?",
      answers: shuffle([
        { text: "राजस्थान और गुजरात के शुष्क क्षेत्र", correct: false },
        { text: "गंगा के मैदान और ब्रह्मपुत्र घाटी", correct: false },
        { text: "पश्चिमी घाट, पूर्वी घाट और पूर्वोत्तर भारत के उच्च वर्षा वाले क्षेत्र", correct: true },
        { text: "दक्कन के पठार का केंद्रीय भाग", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> लेटेराइट मिट्टी (Laterite Soil) उन क्षेत्रों में पाई जाती है जहाँ उच्च तापमान और भारी वर्षा (200 सेमी से अधिक) होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत में यह मुख्य रूप से पश्चिमी घाट के उच्च पठारी क्षेत्रों, पूर्वी घाट, पूर्वोत्तर भारत (मेघालय, असम के पहाड़ी क्षेत्र) और तमिलनाडु व केरल के कुछ हिस्सों में पाई जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मिट्टी निक्षालन (leaching) की प्रक्रिया से बनती है और इसमें लोहे और एल्यूमीनियम के ऑक्साइड की प्रचुरता होती है।"
    },
    {
      question: "भारत का 'सबसे बड़ा कोयला क्षेत्र' कौन-सा है?",
      answers: shuffle([
        { text: "रानीगंज", correct: false },
        { text: "झरिया", correct: true },
        { text: "बोकारो", correct: false },
        { text: "नेवेली", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> झरिया कोयला क्षेत्र (Jharia Coalfield) झारखंड राज्य में स्थित भारत का सबसे बड़ा कोयला क्षेत्र है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अपने कोकिंग कोयले (जो इस्पात उद्योग के लिए आवश्यक है) के विशाल भंडार के लिए प्रसिद्ध है।<br><br><i class='fa-solid fa-angles-right icon'></i> झरिया भारत के कुल कोयला उत्पादन में महत्वपूर्ण योगदान देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> रानीगंज भी एक बड़ा और पुराना कोयला क्षेत्र है, लेकिन झरिया सबसे बड़ा है।"
    },
    {
      question: "भारत में 'असम' राज्य किस फसल का सबसे बड़ा उत्पादक है?",
      answers: shuffle([
        { text: "चावल", correct: false },
        { text: "गेहूं", correct: false },
        { text: "चाय", correct: true },
        { text: "कॉफी", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> असम भारत में चाय का सबसे बड़ा उत्पादक राज्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> ब्रह्मपुत्र घाटी और बराक घाटी के उपजाऊ मैदान, साथ ही अनुकूल जलवायु परिस्थितियाँ, चाय की खेती के लिए आदर्श हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> असम चाय अपनी उच्च गुणवत्ता और विशिष्ट स्वाद के लिए विश्व प्रसिद्ध है।"
    },
    {
      question: "'सलाल परियोजना' किस नदी पर स्थित है?",
      answers: shuffle([
        { text: "झेलम", correct: false },
        { text: "चिनाब", correct: true },
        { text: "रावी", correct: false },
        { text: "सतलज", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> सलाल परियोजना (Salal Project) जम्मू और कश्मीर में चिनाब नदी पर स्थित एक जलविद्युत परियोजना है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह परियोजना चिनाब नदी के पानी का उपयोग बिजली उत्पादन के लिए करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत की महत्वपूर्ण जलविद्युत परियोजनाओं में से एक है।"
    },
    {
      question: "भारत का 'सबसे लंबा बांध' कौन-सा है?",
      answers: shuffle([
        { text: "भाखड़ा बांध", correct: false },
        { text: "हीराकुंड बांध", correct: true },
        { text: "टिहरी बांध", correct: false },
        { text: "सरदार सरोवर बांध", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीराकुंड बांध भारत का सबसे लंबा बांध है, जो ओडिशा में महानदी पर बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी मुख्य मिट्टी के बांध की लंबाई लगभग 4.8 किलोमीटर है, और पूरी बांध संरचना (मिट्टी, कंक्रीट और चिनाई सहित) की कुल लंबाई लगभग 25.79 किलोमीटर है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बांध सिंचाई, बाढ़ नियंत्रण और जलविद्युत उत्पादन के लिए महत्वपूर्ण है।"
    },
    {
      question: "भारत में 'कृषि के लिए मिट्टी का सबसे बड़ा दुश्मन' किसे माना जाता है?",
      answers: shuffle([
        { text: "बाढ़", correct: false },
        { text: "सूखा", correct: false },
        { text: "मिट्टी का कटाव", correct: true },
        { text: "रासायनिक प्रदूषण", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिट्टी का कटाव (Soil Erosion) भारत में कृषि के लिए सबसे बड़ा दुश्मन माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मिट्टी की ऊपरी उपजाऊ परत को हटा देता है, जिससे मिट्टी की उत्पादकता कम हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> वनों की कटाई, अत्यधिक चराई, दोषपूर्ण कृषि पद्धतियाँ और तेज हवाएँ व जल प्रवाह मिट्टी के कटाव के प्रमुख कारण हैं।"
    },
    {
      question: "भारत का 'सबसे दक्षिणी बिंदु' (भारतीय मुख्य भूमि को छोड़कर) कौन-सा है?",
      answers: shuffle([
        { text: "कन्याकुमारी", correct: false },
        { text: "इंदिरा पॉइंट", correct: true },
        { text: "इंदिरा कॉल", correct: false },
        { text: "पॉइंट कैलिमेरे", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंदिरा पॉइंट (Indira Point) भारत का सबसे दक्षिणी बिंदु है, जो अंडमान और निकोबार द्वीप समूह के ग्रेट निकोबार द्वीप पर स्थित है (6°45′ N अक्षांश पर)।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बिंदु 2004 की सुनामी में आंशिक रूप से जलमग्न हो गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> 'कन्याकुमारी' भारतीय मुख्य भूमि का सबसे दक्षिणी बिंदु है।"
    },
    {
      question: "'पालघाट दर्रा' किन दो भारतीय राज्यों को जोड़ता है?",
      answers: shuffle([
        { text: "केरल और कर्नाटक", correct: false },
        { text: "केरल और तमिलनाडु", correct: true },
        { text: "कर्नाटक और तमिलनाडु", correct: false },
        { text: "आंध्र प्रदेश और तमिलनाडु", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> पालघाट दर्रा (Palghat Gap) केरल और तमिलनाडु राज्यों को जोड़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पश्चिमी घाट में स्थित एक महत्वपूर्ण गैप है, जो नीलगिरि पहाड़ियों को अन्नामलाई पहाड़ियों से अलग करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह दर्रा पश्चिमी तट से पूर्वी तट तक एक महत्वपूर्ण मार्ग प्रदान करता है, जिससे व्यापार और परिवहन में सुविधा होती है।"
    },
    {
        question: "भारत में 'सर्वाधिक तटीय कटाव' (Coastal Erosion) किस राज्य में होता है?",
        answers: shuffle([
          { text: "गुजरात", correct: false },
          { text: "महाराष्ट्र", correct: false },
          { text: "पश्चिम बंगाल", correct: true },
          { text: "केरल", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> भारतीय अंतरिक्ष अनुसंधान संगठन (ISRO) और अन्य अध्ययनों के अनुसार, पश्चिम बंगाल में तटीय कटाव की दर भारत में सबसे अधिक है।<br><br><i class='fa-solid fa-angles-right icon'></i> सुंदरबन डेल्टा क्षेत्र, समुद्र स्तर में वृद्धि, चक्रवात और हुगली नदी के पानी के बहाव में बदलाव के कारण यहाँ का तट गंभीर कटाव का सामना कर रहा है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके बाद केरल, गुजरात और ओडिशा जैसे राज्य आते हैं।",
      },
      {
        question: "'डोडाबेटा' चोटी किस पहाड़ी श्रृंखला में स्थित है?",
        answers: shuffle([
          { text: "अन्नामलाई पहाड़ियाँ", correct: false },
          { text: "नीलगिरि पहाड़ियाँ", correct: true },
          { text: "इलायची पहाड़ियाँ", correct: false },
          { text: "पालनी पहाड़ियाँ", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> डोडाबेटा (Doddabetta) चोटी नीलगिरि पहाड़ियों की सबसे ऊँची चोटी है, जिसकी ऊँचाई 2,637 मीटर है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह तमिलनाडु के कोयंबटूर जिले में स्थित है और एक लोकप्रिय पर्यटन स्थल है।<br><br><i class='fa-solid fa-angles-right icon'></i> नीलगिरि पहाड़ियाँ पश्चिमी घाट का एक हिस्सा हैं, जो तमिलनाडु, केरल और कर्नाटक के त्रि-जंक्शन पर स्थित हैं।",
      },
      {
        question:
          "भारत में 'सर्वाधिक ज्वार-भाटा' (Tidal Range) किस तट पर अनुभव किया जाता है?",
        answers: shuffle([
          { text: "कोरोमंडल तट", correct: false },
          { text: "कोंकण तट", correct: false },
          { text: "सौराष्ट्र तट (कच्छ की खाड़ी)", correct: true },
          { text: "मालाबार तट", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> भारत में सर्वाधिक ज्वार-भाटा (Tidal Range) गुजरात के सौराष्ट्र तट पर, विशेषकर कच्छ की खाड़ी और खंभात की खाड़ी में अनुभव किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> कच्छ की खाड़ी में कांडला बंदरगाह (अब दीनदयाल बंदरगाह) एक ज्वारीय बंदरगाह है।<br><br><i class='fa-solid fa-angles-right icon'></i> इन खाड़ियों की फ़नल जैसी आकृति और छिछलापन ज्वारीय लहरों की ऊँचाई को बढ़ा देते हैं।",
      },
      {
        question: "भारत की 'सबसे लंबी अंतर्राज्यीय सीमा' वाला राज्य कौन-सा है?",
        answers: shuffle([
          { text: "मध्य प्रदेश", correct: true },
          { text: "उत्तर प्रदेश", correct: false },
          { text: "राजस्थान", correct: false },
          { text: "महाराष्ट्र", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> मध्य प्रदेश भारत का वह राज्य है जिसकी सबसे लंबी अंतर्राज्यीय सीमा है, जो पाँच राज्यों (उत्तर प्रदेश, छत्तीसगढ़, महाराष्ट्र, गुजरात और राजस्थान) के साथ लगती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके विपरीत, उत्तर प्रदेश की सीमा सबसे अधिक राज्यों (8 राज्यों और 1 केंद्र शासित प्रदेश) से लगती है, लेकिन लंबाई के हिसाब से मध्य प्रदेश की सीमा सबसे लंबी है।",
      },
      {
        question:
          "भारत में 'चंदन के वन' (Sandalwood Forests) मुख्यतः किस राज्य में पाए जाते हैं?",
        answers: shuffle([
          { text: "केरल", correct: false },
          { text: "तमिलनाडु", correct: false },
          { text: "कर्नाटक", correct: true },
          { text: "आंध्र प्रदेश", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> कर्नाटक भारत में चंदन के वनों का सबसे बड़ा उत्पादक राज्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> चंदन (Santalum album) एक मूल्यवान लकड़ी है जिसका उपयोग नक्काशी, धूप और सुगंधित तेल के लिए किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> कर्नाटक के मैसूर क्षेत्र में चंदन के पेड़ों की खेती और संरक्षण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> हालाँकि, अवैध कटाई के कारण इसकी संख्या में कमी आई है।",
      },
      {
        question: "भारत में 'सर्वाधिक अभ्रक' (Mica) का उत्पादन किस राज्य में होता है?",
        answers: shuffle([
          { text: "आंध्र प्रदेश", correct: true },
          { text: "राजस्थान", correct: false },
          { text: "झारखंड", correct: false },
          { text: "बिहार", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> आंध्र प्रदेश भारत में अभ्रक (Mica) का सबसे बड़ा उत्पादक राज्य है, खासकर नेल्लोर बेल्ट।<br><br><i class='fa-solid fa-angles-right icon'></i> अभ्रक एक महत्त्वपूर्ण खनिज है जिसका उपयोग विद्युत और इलेक्ट्रॉनिक्स उद्योगों में किया जाता है क्योंकि यह ताप और विद्युत का कुचालक है।<br><br><i class='fa-solid fa-angles-right icon'></i> झारखंड और बिहार के कोडरमा-हज़ारीबाग क्षेत्र भी अभ्रक उत्पादन के लिए प्रसिद्ध हैं, लेकिन आंध्र प्रदेश अब अग्रणी है।",
      },
      {
        question: "भारत का 'डेट्रॉइट' (Detroit of India) किस शहर को कहा जाता है?",
        answers: shuffle([
          { text: "मुंबई", correct: false },
          { text: "चेन्नई", correct: true },
          { text: "पुणे", correct: false },
          { text: "गुरुग्राम", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> चेन्नई को 'भारत का डेट्रॉइट' कहा जाता है क्योंकि यह भारत के ऑटोमोबाइल उद्योग का एक प्रमुख केंद्र है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ कई प्रमुख भारतीय और अंतर्राष्ट्रीय ऑटोमोबाइल कंपनियों के विनिर्माण संयंत्र स्थित हैं, जैसे फोर्ड, हुंडई, बीएमडब्ल्यू, निसान, रेनॉल्ट, अशोक लेलैंड, आदि।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शहर ऑटोमोबाइल घटकों के उत्पादन में भी महत्वपूर्ण भूमिका निभाता है।",
      },
      {
        question: "भारत में 'मिट्टी के कटाव' का मुख्य कारण क्या है?",
        answers: shuffle([
          { text: "वनों की कटाई और अत्यधिक चराई", correct: true },
          { text: "अत्यधिक सिंचाई", correct: false },
          { text: "रासायनिक उर्वरकों का अत्यधिक उपयोग", correct: false },
          { text: "औद्योगिक प्रदूषण", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> भारत में मिट्टी के कटाव (Soil Erosion) का मुख्य कारण वनों की कटाई (Deforestation), अत्यधिक चराई (Overgrazing), और दोषपूर्ण कृषि पद्धतियाँ हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> पेड़ और घास की जड़ें मिट्टी को बांधे रखती हैं, और उनकी अनुपस्थिति में मिट्टी हवा और पानी के कटाव के प्रति अधिक संवेदनशील हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> अत्यधिक सिंचाई से लवणीकरण होता है, न कि सीधे कटाव।",
      },
      {
        question:
          "भारत में 'पश्चिमी घाट' को स्थानीय रूप से किन अलग-अलग नामों से जाना जाता है?",
        answers: shuffle([
          { text: "सह्याद्रि, नीलगिरि, अन्नामलाई, इलायची पहाड़ियाँ", correct: true },
          { text: "अरावली, विंध्य, सतपुड़ा, मैकल", correct: false },
          { text: "पटकाई बूम, नागा पहाड़ियाँ, गारो, खासी", correct: false },
          { text: "कैमूर, महादेव, मैकल, राजमहल पहाड़ियाँ", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> पश्चिमी घाट को विभिन्न क्षेत्रों में अलग-अलग स्थानीय नामों से जाना जाता है:<br>• महाराष्ट्र और कर्नाटक में 'सह्याद्रि'<br>• तमिलनाडु में 'नीलगिरि पहाड़ियाँ'<br>• केरल और तमिलनाडु में 'अन्नामलाई पहाड़ियाँ'<br>• केरल में 'इलायची पहाड़ियाँ' (कार्डामम हिल्स)<br><br><i class='fa-solid fa-angles-right icon'></i> ये सभी मिलकर पश्चिमी घाट के वृहद पारिस्थितिकी तंत्र का निर्माण करते हैं।",
      },
      {
        question:
          "भारत का 'सबसे बड़ा अपतटीय तेल क्षेत्र' (Largest Offshore Oilfield) कौन-सा है?",
        answers: shuffle([
          { text: "अंकलेश्वर", correct: false },
          { text: "नहरकटिया", correct: false },
          { text: "डिगबोई", correct: false },
          { text: "बॉम्बे हाई", correct: true },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> बॉम्बे हाई (Bombay High), जिसे अब मुंबई हाई के नाम से भी जाना जाता है, भारत का सबसे बड़ा अपतटीय (offshore) तेल क्षेत्र है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह महाराष्ट्र के तट से लगभग 176 किलोमीटर दूर अरब सागर में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी खोज 1974 में हुई थी और यह भारत के कुल कच्चे तेल उत्पादन में महत्वपूर्ण योगदान देता है।",
      },
      {
        question: "भारत में 'सर्वाधिक जूट' का उत्पादन किस राज्य में होता है?",
        answers: shuffle([
          { text: "बिहार", correct: false },
          { text: "ओडिशा", correct: false },
          { text: "पश्चिम बंगाल", correct: true },
          { text: "असम", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> पश्चिम बंगाल भारत में जूट का सबसे बड़ा उत्पादक राज्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> गंगा-ब्रह्मपुत्र डेल्टा क्षेत्र की उपजाऊ जलोढ़ मिट्टी, उच्च तापमान और पर्याप्त वर्षा जूट की खेती के लिए आदर्श परिस्थितियाँ प्रदान करती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> हुगली नदी के किनारे जूट मिलों की उच्च सांद्रता भी इस क्षेत्र की विशेषता है।",
      },
      {
        question: "'मानस राष्ट्रीय उद्यान' किस जानवर के लिए प्रसिद्ध है?",
        answers: shuffle([
          { text: "एक सींग वाला गैंडा", correct: true },
          { text: "बंगाल टाइगर", correct: false },
          { text: "एशियाई शेर", correct: false },
          { text: "हाथी", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> मानस राष्ट्रीय उद्यान (Manas National Park) असम राज्य में स्थित एक यूनेस्को विश्व धरोहर स्थल है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह विशेष रूप से अपने एक सींग वाले गैंडों (One-horned Rhinoceros) के लिए प्रसिद्ध है, हालाँकि यहाँ बंगाल टाइगर और एशियाई हाथी सहित कई अन्य लुप्तप्राय प्रजातियाँ भी पाई जाती हैं।",
      },
      {
        question:
          "भारत में 'सर्वाधिक वर्षा' किस मॉनसूनी शाखा से होती है?",
        answers: shuffle([
          { text: "अरब सागर शाखा", correct: true },
          { text: "बंगाल की खाड़ी शाखा", correct: false },
          { text: "पश्चिमी विक्षोभ", correct: false },
          { text: "उत्तर-पूर्वी मॉनसून", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> दक्षिण-पश्चिमी मॉनसून की अरब सागर शाखा भारत में अधिकांश वर्षा के लिए जिम्मेदार है, विशेषकर पश्चिमी घाट के पश्चिमी ढलानों पर और मध्य भारत में।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शाखा जून के पहले सप्ताह में केरल तट पर पहुँचती है और तेजी से आगे बढ़ती है, जिससे भारत के बड़े हिस्से में व्यापक और भारी वर्षा होती है।",
      },
      {
        question: "'अष्टमुडी झील' किस भारतीय राज्य में स्थित है?",
        answers: shuffle([
          { text: "कर्नाटक", correct: false },
          { text: "केरल", correct: true },
          { text: "तमिलनाडु", correct: false },
          { text: "आंध्र प्रदेश", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> अष्टमुडी झील (Ashtamudi Lake) केरल राज्य में स्थित एक विशाल लैगून और रामसर साइट है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह केरल की दूसरी सबसे बड़ी वेटलैंड है और 'कयाल' (backwaters) प्रणाली का हिस्सा है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका नाम इसकी आठ भुजाओं या चैनलों के कारण पड़ा है ('अष्ट' का अर्थ आठ, 'मुडी' का अर्थ भुजा)।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक महत्वपूर्ण पर्यटन और पारिस्थितिक स्थल है।",
      },
      {
        question: "भारत की 'सबसे बड़ी जनजातीय समूह' कौन-सा है?",
        answers: shuffle([
          { text: "भील", correct: true },
          { text: "गोंड", correct: false },
          { text: "संथाल", correct: false },
          { text: "मुंडा", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> जनगणना 2011 के आंकड़ों के अनुसार, भील (Bhil) भारत का सबसे बड़ा जनजातीय समूह है।<br><br><i class='fa-solid fa-angles-right icon'></i> भील जनजाति मुख्य रूप से मध्य प्रदेश, गुजरात, राजस्थान और महाराष्ट्र जैसे राज्यों में पाई जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके बाद गोंड जनजाति आती है।",
      },
      {
        question: "भारत में 'पेंच राष्ट्रीय उद्यान' किस राज्य में स्थित है?",
        answers: shuffle([
          { text: "राजस्थान", correct: false },
          { text: "गुजरात", correct: false },
          { text: "मध्य प्रदेश", correct: true },
          { text: "उत्तराखंड", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> पेंच राष्ट्रीय उद्यान मध्य प्रदेश राज्य में स्थित है और इसका नाम पेंच नदी के नाम पर पड़ा है जो इसके बीच से होकर बहती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उद्यान बाघों, तेंदुओं और विभिन्न अन्य वन्यजीवों की आबादी के लिए जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह रूडयार्ड किपलिंग की प्रसिद्ध पुस्तक 'द जंगल बुक' के लिए भी प्रेरणा का स्रोत माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका कुछ हिस्सा महाराष्ट्र में भी फैला हुआ है।",
      },
      {
        question:
          "भारत की 'किस नदी को 'वृद्ध गंगा' या 'दक्षिण गंगा' के नाम से जाना जाता है?",
        answers: shuffle([
          { text: "कृष्णा", correct: false },
          { text: "गोदावरी", correct: true },
          { text: "कावेरी", correct: false },
          { text: "महानदी", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> गोदावरी नदी को 'वृद्ध गंगा' या 'दक्षिण गंगा' के नाम से जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रायद्वीपीय भारत की सबसे लंबी नदी है और भारत के भीतर बहने वाली सबसे लंबी नदी भी है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह महाराष्ट्र के त्र्यंबकेश्वर से निकलती है और बंगाल की खाड़ी में गिरती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका बेसिन व्यापक है और यह दक्षिण भारत के लिए एक महत्वपूर्ण जल स्रोत है।",
      },
      {
        question: "भारत में 'रबी फसलों' की बुवाई किस महीने में होती है?",
        answers: shuffle([
          { text: "अप्रैल-मई", correct: false },
          { text: "जून-जुलाई", correct: false },
          { text: "अक्टूबर-नवंबर", correct: true },
          { text: "फरवरी-मार्च", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> रबी फसलें शीत ऋतु की फसलें होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इनकी बुवाई अक्टूबर-नवंबर के महीनों में की जाती है और कटाई मार्च-अप्रैल में की जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> गेहूं, जौ, चना, मटर, सरसों और अलसी प्रमुख रबी फसलें हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इन फसलों को सर्दियों में ठंडे मौसम और कम वर्षा की आवश्यकता होती है।",
      },
      {
        question: "भारत का 'सबसे पुराना राष्ट्रीय उद्यान' कौन-सा है?",
        answers: shuffle([
          { text: "काजीरंगा राष्ट्रीय उद्यान", correct: false },
          { text: "रणथंभौर राष्ट्रीय उद्यान", correct: false },
          { text: "जिम कॉर्बेट राष्ट्रीय उद्यान", correct: true },
          { text: "बांधवगढ़ राष्ट्रीय उद्यान", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> जिम कॉर्बेट राष्ट्रीय उद्यान (Jim Corbett National Park) भारत का सबसे पुराना राष्ट्रीय उद्यान है, जिसे 1936 में हेली नेशनल पार्क के रूप में स्थापित किया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उत्तराखंड के नैनीताल जिले में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पार्क बंगाल टाइगर के संरक्षण के लिए जाना जाता है और प्रोजेक्ट टाइगर के तहत आने वाले पहले पार्कों में से एक था।",
      },
      {
        question:
          "भारत में 'पश्चिमी घाट' किस प्रकार की पर्वत श्रृंखला का उदाहरण है?",
        answers: shuffle([
          { text: "वलित पर्वत", correct: false },
          { text: "ब्लॉक पर्वत", correct: true },
          { text: "अवशिष्ट पर्वत", correct: false },
          { text: "ज्वालामुखी पर्वत", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> पश्चिमी घाट (Western Ghats) ब्लॉक पर्वत (Block Mountains) का एक उत्कृष्ट उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये भ्रंशोत्थ पर्वत (Fault-block mountains) हैं, जो भारतीय प्रायद्वीप के एक भाग के नीचे धंसने (सबसिडेंस) से निर्मित हुए हैं, जिससे पश्चिमी किनारा ऊपर उठ गया और एक खड़ी ढलान (एस्केर्पमेंट) बन गई, जबकि पूर्वी ढलान धीरे-धीरे ढलानदार है।",
      },
      {
        question: "भारत में 'सर्वाधिक मैंगनीज' का उत्पादन किस राज्य में होता है?",
        answers: shuffle([
          { text: "ओडिशा", correct: false },
          { text: "मध्यप्रदेश", correct: true },
          { text: "कर्नाटक", correct: false },
          { text: "महाराष्ट्र", correct: false },
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्यप्रदेश भारत में मैंगनीज अयस्क का सबसे बड़ा उत्पादक राज्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> राज्य में बालाघाट जिले का मलांजखंड क्षेत्र महत्वपूर्ण मैंगनीज भंडार के लिए जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> मैंगनीज का उपयोग मुख्य रूप से लौह-इस्पात उद्योग में फेरो-मैंगनीज मिश्र धातु बनाने में किया जाता है।",
      },
      {
        question: "'बराक घाटी' भारत के किस राज्य में स्थित है, जो चाय उत्पादन के लिए भी जानी जाती है?",
        answers: shuffle([
          { text: "त्रिपुरा", correct: false },
          { text: "मिजोरम", correct: false },
          { text: "असम", correct: true },
          { text: "मेघालय", correct: false },
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बराक घाटी (Barak Valley) असम राज्य के दक्षिणी भाग में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बराक नदी के नाम पर है जो इस घाटी से होकर बहती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह क्षेत्र असम चाय उत्पादन के लिए भी महत्वपूर्ण है और अपनी समृद्ध जैव विविधता के लिए जाना जाता है।",
      },
      {
        question: "भारत का 'कर्करेखा' के सबसे निकटतम राजधानी शहर कौन-सा है?",
        answers: shuffle([
          { text: "भोपाल", correct: false },
          { text: "गांधीनगर", correct: false },
          { text: "रांची", correct: true },
          { text: "आइजोल", correct: false },
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रांची, जो झारखंड राज्य की राजधानी है, कर्क रेखा (Tropic of Cancer) के सबसे निकटतम प्रमुख शहर और राजधानी है।<br><br><i class='fa-solid fa-angles-right icon'></i> कर्क रेखा झारखंड के मध्य से होकर गुजरती है, और रांची इस रेखा के बहुत करीब स्थित है।",
      },
      {
        question: "भारत में 'नीली क्रांति' (Blue Revolution) किससे संबंधित है?",
        answers: shuffle([
          { text: "तिलहन उत्पादन में वृद्धि", correct: false },
          { text: "दूध उत्पादन में वृद्धि", correct: false },
          { text: "मछली उत्पादन में वृद्धि", correct: true },
          { text: "उर्वरक उत्पादन में वृद्धि", correct: false },
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नीली क्रांति' (Blue Revolution) भारत में मछली उत्पादन और जलीय कृषि (aquaculture) को बढ़ावा देने से संबंधित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका उद्देश्य मत्स्य पालन क्षेत्र में आत्मनिर्भरता प्राप्त करना और समुद्री तथा अंतर्देशीय मत्स्य संसाधनों का प्रभावी ढंग से उपयोग करना है ताकि खाद्य सुरक्षा और किसानों की आय में वृद्धि हो सके।",
      },
      {
        question: "भारत में 'सर्वाधिक लिंगानुपात' (Sex Ratio) वाला राज्य कौन-सा है (2011 जनगणना के अनुसार)?",
        answers: shuffle([
          { text: "केरल", correct: true },
          { text: "तमिलनाडु", correct: false },
          { text: "आंध्र प्रदेश", correct: false },
          { text: "छत्तीसगढ़", correct: false },
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जनगणना 2011 के अनुसार, केरल भारत का सबसे अधिक लिंगानुपात वाला राज्य है, जहाँ प्रति 1000 पुरुषों पर 1084 महिलाएँ हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> केरल में उच्च साक्षरता दर, महिला सशक्तिकरण और बेहतर स्वास्थ्य सेवाओं को इसके उच्च लिंगानुपात का प्रमुख कारण माना जाता है।",
      },
      {
        question: "भारत का 'सबसे ऊँचा झरना' (Waterfall) कौन-सा है?",
        answers: shuffle([
          { text: "जोग फॉल्स", correct: false },
          { text: "कुंचिकल फॉल्स", correct: true },
          { text: "शिवसमुद्रम फॉल्स", correct: false },
          { text: "दूधसागर फॉल्स", correct: false },
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुंचिकल फॉल्स भारत का सबसे ऊँचा झरना है, जो कर्नाटक के शिमोगा जिले में वराही नदी पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी कुल ऊँचाई लगभग 455 मीटर (1,493 फीट) है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक बहु-स्तरीय (multi-tiered) झरना है।<br><br><i class='fa-solid fa-angles-right icon'></i> जोग फॉल्स, जो शरावती नदी पर स्थित है, कर्नाटक में एक अन्य प्रसिद्ध झरना है, लेकिन कुंचिकल से छोटा है।",
      },
      {
        question: "भारत की 'इंदिरा गांधी नहर' मुख्य रूप से किस राज्य में सिंचाई प्रदान करती है?",
        answers: shuffle([
          { text: "पंजाब", correct: false },
          { text: "हरियाणा", correct: false },
          { text: "राजस्थान", correct: true },
          { text: "उत्तर प्रदेश", correct: false },
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंदिरा गांधी नहर भारत की सबसे लंबी नहर है, जो मुख्य रूप से राजस्थान के थार मरुस्थल के शुष्क और अर्ध-शुष्क क्षेत्रों में सिंचाई प्रदान करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह नहर सतलज और ब्यास नदियों के संगम पर बने हरिके बैराज से निकलती है और राजस्थान के पश्चिमी जिलों में कृषि को संभव बनाती है, जिससे इस क्षेत्र में हरियाली आई है।",
      },
      {
        question: "भारत में 'खारी मिट्टी' (Saline Soil) को कृषि के लिए बेहतर बनाने हेतु किसका उपयोग किया जाता है?",
        answers: shuffle([
          { text: "यूरिया", correct: false },
          { text: "जिप्सम", correct: true },
          { text: "चूना", correct: false },
          { text: "पोटाश", correct: false },
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खारी मिट्टी (Saline Soil) में घुलनशील लवणों की अधिकता होती है, जिससे यह कृषि के लिए अनुपयुक्त हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> ऐसी मिट्टियों को बेहतर बनाने के लिए जिप्सम (Gypsum) का उपयोग किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिप्सम मिट्टी से सोडियम को हटाने में मदद करता है और मिट्टी की संरचना में सुधार करता है, जिससे फसलें उगाने योग्य हो जाती हैं।",
      },
      {
        question: "भारत का कौन-सा पड़ोसी देश 'पाक जलडमरूमध्य' द्वारा भारत से अलग होता है?",
        answers: shuffle([
          { text: "बांग्लादेश", correct: false },
          { text: "म्यांमार", correct: false },
          { text: "श्रीलंका", correct: true },
          { text: "मालदीव", correct: false },
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पाक जलडमरूमध्य (Palk Strait) भारत (तमिलनाडु) और श्रीलंका के बीच स्थित एक जलडमरूमध्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बंगाल की खाड़ी को पाक खाड़ी से जोड़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एडम के पुल (रामसेतु) के पास स्थित है और भारत व श्रीलंका के बीच के जलमार्ग और संबंधों को परिभाषित करता है।",
      },
      {
        question: "भारत में 'सर्वाधिक बॉक्साइट' का उत्पादन किस राज्य में होता है?",
        answers: shuffle([
          { text: "गुजरात", correct: false },
          { text: "ओडिशा", correct: true },
          { text: "झारखंड", correct: false },
          { text: "छत्तीसगढ़", correct: false },
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओडिशा भारत में बॉक्साइट का सबसे बड़ा उत्पादक राज्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> बॉक्साइट एल्यूमीनियम का मुख्य अयस्क है।<br><br><i class='fa-solid fa-angles-right icon'></i> ओडिशा के कोरापुट, कालाहांडी, सुंदरगढ़ और संबलपुर जैसे जिलों में बॉक्साइट के विशाल भंडार पाए जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत एल्यूमीनियम और उसके उत्पादों के उत्पादन में वैश्विक स्तर पर एक महत्वपूर्ण स्थान रखता है, जिसमें ओडिशा का योगदान महत्वपूर्ण है।",
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