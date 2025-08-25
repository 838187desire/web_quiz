const questions = [
  {
      topHeading: "भारत के भूगोल पर आधारित 50 बहुविकल्पीय प्रश्न (MCQs) part 2  (quiz_no. 2)"
  },
    {
      question: "भारत का कौन-सा राज्य 'कॉफी' का सबसे बड़ा उत्पादक है?",
      answers: shuffle([
        { text: "तमिलनाडु", correct: false },
        { text: "केरल", correct: false },
        { text: "कर्नाटक", correct: true },
        { text: "आंध्र प्रदेश", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> कर्नाटक भारत में कॉफी का सबसे बड़ा उत्पादक राज्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत में उगाई जाने वाली अधिकांश कॉफी अरेबिका और रोबस्टा किस्मों की होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> कर्नाटक के कूर्ग (कोडागु), चिकमंगलूर और बाबा बुदनगिरि की पहाड़ियाँ कॉफी की खेती के लिए प्रसिद्ध हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अनुकूल जलवायु, उच्च वर्षा और पहाड़ी ढलानें कॉफी के उत्पादन के लिए आदर्श परिस्थितियाँ प्रदान करती हैं।",
    },
    {
      question: "भारत के किस द्वीप समूह को 'प्रवाल द्वीप' (Coral Islands) के रूप में जाना जाता है?",
      answers: shuffle([
        { text: "अंडमान और निकोबार द्वीप समूह", correct: false },
        { text: "लक्षद्वीप", correct: true },
        { text: "गंगासागर द्वीप", correct: false },
        { text: "माजुली द्वीप", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> लक्षद्वीप भारत के अरब सागर में स्थित एक द्वीप समूह है, जो पूरी तरह से प्रवाल द्वीपों से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रवाल द्वीप प्रवाल नामक छोटे समुद्री जीवों द्वारा निर्मित होते हैं, जो कैल्शियम कार्बोनेट से अपने कंकाल बनाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये द्वीप अपनी सफेद रेतीले समुद्र तटों, साफ नीले पानी और समृद्ध समुद्री जीवन के लिए जाने जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अंडमान और निकोबार द्वीप समूह ज्वालामुखी मूल के हैं।",
    },
    {
      question: "भारत में 'हरित क्रांति' का मुख्य उद्देश्य क्या था?",
      answers: shuffle([
        { text: "दुग्ध उत्पादन बढ़ाना", correct: false },
        { text: "खाद्य अनाज उत्पादन बढ़ाना", correct: true },
        { text: "मत्स्य उत्पादन बढ़ाना", correct: false },
        { text: "तिलहन उत्पादन बढ़ाना", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> भारत में 'हरित क्रांति' (Green Revolution) का मुख्य उद्देश्य 1960 के दशक के मध्य में उच्च उपज वाली किस्मों (HYVs) के बीज, बेहतर सिंचाई सुविधाओं, उर्वरकों और कीटनाशकों के उपयोग के माध्यम से खाद्य अनाज, विशेष रूप से गेहूं और चावल के उत्पादन में भारी वृद्धि करना था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका नेतृत्व डॉ. एम.एस. स्वामीनाथन ने किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इस क्रांति ने भारत को खाद्य पदार्थों में आत्मनिर्भर बनाने में मदद की और अकाल के खतरों को कम किया।",
    },
    {
      question: "'गिरनार पहाड़ियाँ' किस भारतीय राज्य में स्थित हैं?",
      answers: shuffle([
        { text: "राजस्थान", correct: false },
        { text: "गुजरात", correct: true },
        { text: "महाराष्ट्र", correct: false },
        { text: "मध्य प्रदेश", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> गिरनार पहाड़ियाँ गुजरात राज्य के जूनागढ़ जिले में स्थित हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये पहाड़ियाँ अपने ऐतिहासिक, धार्मिक और प्राकृतिक महत्व के लिए प्रसिद्ध हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ कई जैन मंदिर और हिंदू मंदिर स्थित हैं, जिनमें नेमिनाथ मंदिर और अंबा माता मंदिर शामिल हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> गिरनार पहाड़ियाँ गिर राष्ट्रीय उद्यान के करीब हैं, जो एशियाई शेरों का एकमात्र प्राकृतिक आवास है।",
    },
    {
      question:
        "भारत में किस प्रकार की वनस्पति उन क्षेत्रों में पाई जाती है जहाँ वार्षिक वर्षा 200 सेमी से अधिक होती है?",
      answers: shuffle([
        { text: "उष्णकटिबंधीय शुष्क पर्णपाती वन", correct: false },
        { text: "उष्णकटिबंधीय कांटेदार वन", correct: false },
        { text: "उष्णकटिबंधीय सदाबहार वन", correct: true },
        { text: "मैंग्रोव वन", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> उष्णकटिबंधीय सदाबहार वन (Tropical Evergreen Forests) उन क्षेत्रों में पाए जाते हैं जहाँ वार्षिक वर्षा 200 सेमी से अधिक होती है और तापमान 22°C से अधिक रहता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये वन वर्षभर हरे-भरे रहते हैं क्योंकि यहाँ पेड़ों की पत्तियां गिरने का कोई निश्चित समय नहीं होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये वन अत्यधिक जैव विविधता वाले होते हैं और इनमें महोगनी, आबनूस, रोजवुड, रबर, बांस जैसे वृक्ष पाए जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत में ये वन पश्चिमी घाट, उत्तर-पूर्वी भारत और अंडमान और निकोबार द्वीप समूह में पाए जाते हैं।",
    },
    {
      question: "भारत की जनगणना 2011 के अनुसार, किस राज्य में साक्षरता दर सबसे अधिक है?",
      answers: shuffle([
        { text: "मिजोरम", correct: false },
        { text: "केरल", correct: true },
        { text: "गोवा", correct: false },
        { text: "त्रिपुरा", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> जनगणना 2011 के अनुसार, केरल भारत में सबसे अधिक साक्षरता दर वाला राज्य है, जिसकी साक्षरता दर 94% है।<br><br><i class='fa-solid fa-angles-right icon'></i> केरल ने शिक्षा, स्वास्थ्य और मानव विकास संकेतकों में लगातार उत्कृष्ट प्रदर्शन किया है।<br><br><i class='fa-solid fa-angles-right icon'></i> उच्च साक्षरता दर राज्य के सामाजिक-आर्थिक विकास और लैंगिक समानता में महत्वपूर्ण योगदान देती है।",
    },
    {
      question: "'पाक जलडमरूमध्य' (Palk Strait) किन दो देशों को अलग करता है?",
      answers: shuffle([
        { text: "भारत और बांग्लादेश", correct: false },
        { text: "भारत और श्रीलंका", correct: true },
        { text: " भारत और मालदीव", correct: false },
        { text: "भारत और पाकिस्तान", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> पाक जलडमरूमध्य भारत के तमिलनाडु राज्य और श्रीलंका के जाफना जिले के बीच स्थित एक जलडमरूमध्य (Strait) है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बंगाल की खाड़ी को दक्षिण-पश्चिम में पाक खाड़ी से जोड़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एडम के पुल (रामसेतु) के पास स्थित है, जो चूना पत्थर की एक श्रृंखला है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह रणनीतिक रूप से महत्वपूर्ण है और दोनों देशों के बीच नौवहन को प्रभावित करता है।",
    },
    {
      question: "भारत में किस फसल को 'स्वर्ण फाइबर' (Golden Fibre) के रूप में जाना जाता है?",
      answers: shuffle([
        { text: "कपास", correct: false },
        { text: "जूट", correct: true },
        { text: "सिल्क", correct: false },
        { text: "ऊन", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> जूट को 'स्वर्ण फाइबर' (Golden Fibre) के रूप में जाना जाता है क्योंकि इसके रेशे का सुनहरा और रेशमी रंग होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जूट एक प्राकृतिक वनस्पति फाइबर है जिसका उपयोग बोरी, कालीन, रस्सी, कपड़े और अन्य पैकेजिंग सामग्री बनाने के लिए किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत जूट का सबसे बड़ा उत्पादक देश है, और इसका उत्पादन मुख्य रूप से गंगा-ब्रह्मपुत्र डेल्टा क्षेत्र में होता है, विशेषकर पश्चिम बंगाल, बिहार और असम में।",
    },
    {
      question: "'बनिहाल दर्रा' किस राज्य/केंद्र शासित प्रदेश में स्थित है?",
      answers: shuffle([
        { text: "उत्तराखंड", correct: false },
        { text: "हिमाचल प्रदेश", correct: false },
        { text: "जम्मू और कश्मीर", correct: true },
        { text: "लद्दाख", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> बनिहाल दर्रा जम्मू और कश्मीर में पीरपंजाल पर्वतमाला में स्थित एक महत्वपूर्ण पर्वतीय दर्रा है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कश्मीर घाटी को जम्मू क्षेत्र से जोड़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जवाहर सुरंग, जो श्रीनगर और जम्मू के बीच सड़क संपर्क का एक महत्वपूर्ण हिस्सा है, बनिहाल दर्रे के नीचे स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह दर्रा राष्ट्रीय राजमार्ग 44 (NH44) पर स्थित है और वर्षभर यातायात के लिए खुला रहता है, हालाँकि सर्दियों में भारी बर्फबारी के कारण यह प्रभावित हो सकता है।",
    },
    {
      question:
        "भारत में 'सर्वाधिक जैव विविधता' वाले क्षेत्रों में से एक 'शांत घाटी' (Silent Valley) किस राज्य में स्थित है?",
      answers: shuffle([
        { text: "कर्नाटक", correct: false },
        { text: "केरल", correct: true },
        { text: "तमिलनाडु", correct: false },
        { text: "आंध्र प्रदेश", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> शांत घाटी राष्ट्रीय उद्यान (Silent Valley National Park) केरल राज्य के पलक्कड़ जिले में पश्चिमी घाट में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत के सबसे समृद्ध जैव विविधता वाले क्षेत्रों में से एक है और उष्णकटिबंधीय सदाबहार वनों का एक महत्वपूर्ण क्षेत्र है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अपने अद्वितीय पारिस्थितिक संतुलन और लुप्तप्राय प्रजातियों, विशेष रूप से शेर-पूंछ वाले मकाक (Lion-tailed Macaque) के लिए जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस क्षेत्र को एक महत्वपूर्ण जैव विविधता हॉटस्पॉट के रूप में संरक्षित किया गया है।",
    },
    {
      question: "भारत की सबसे बड़ी मानव निर्मित झील कौन-सी है?",
      answers: shuffle([
        { text: "गोविंद सागर", correct: true },
        { text: "वुलर झील", correct: false },
        { text: "चिल्का झील", correct: false },
        { text: "कोलेरू झील", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> गोविंद सागर झील भारत की सबसे बड़ी मानव निर्मित झील (मानव निर्मित जलाशय) है, जो पंजाब और हिमाचल प्रदेश की सीमा पर सतलुज नदी पर बने भाखड़ा बांध के पीछे स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका नाम दसवें सिख गुरु, गुरु गोविंद सिंह के नाम पर रखा गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह झील भाखड़ा बांध परियोजना के लिए पानी का मुख्य स्रोत है, जो सिंचाई और जलविद्युत उत्पादन के लिए महत्वपूर्ण है।<br><br><i class='fa-solid fa-angles-right icon'></i> वुलर झील (जम्मू-कश्मीर) भारत की सबसे बड़ी प्राकृतिक मीठे पानी की झील है, और चिल्का झील (ओडिशा) भारत की सबसे बड़ी खारे पानी की लैगून है।",
    },
    {
      question:
        "भारत में किस मिट्टी को 'खुदाई मिट्टी' (Self-ploughing soil) के रूप में भी जाना जाता है क्योंकि यह सूखने पर गहरी दरारें विकसित करती है?",
      answers: shuffle([
        { text: "जलोढ़ मिट्टी", correct: false },
        { text: "काली मिट्टी", correct: true },
        { text: "लाल मिट्टी", correct: false },
        { text: "लेटेराइट मिट्टी", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी को 'खुदाई मिट्टी' या 'स्व-जुताई मिट्टी' (Self-ploughing soil) भी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ऐसा इसलिए है क्योंकि यह मिट्टी सूखने पर सिकुड़ती है और इसमें चौड़ी व गहरी दरारें पड़ जाती हैं, जिससे ऐसा प्रतीत होता है मानो इसकी जुताई की गई हो।<br><br><i class='fa-solid fa-angles-right icon'></i> वहीं, गीला होने पर यह मिट्टी चिपचिपी हो जाती है और इसमें काम करना मुश्किल होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह गुण इसकी उच्च क्ले सामग्री और नमी धारण करने की क्षमता के कारण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मुख्य रूप से दक्कन ट्रैप क्षेत्र में पाई जाती है और कपास की खेती के लिए प्रसिद्ध है।",
    },
    {
      question: "भारत का 'लक्षद्वीप' द्वीपसमूह किस प्रकार के द्वीपों का उदाहरण है?",
      answers: shuffle([
        { text: "ज्वालामुखी द्वीप", correct: false },
        { text: "विवर्तनिक द्वीप", correct: false },
        { text: "प्रवाल द्वीप (एटोल)", correct: true },
        { text: "नदीय द्वीप", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> लक्षद्वीप द्वीपसमूह अरब सागर में स्थित प्रवाल द्वीपों (Coral Islands) का एक उत्कृष्ट उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये द्वीप मुख्य रूप से प्रवाल भित्तियों (coral reefs) के ऊपर निर्मित एटोल (Atolls) हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> एटोल एक वलयाकार प्रवाल भित्ति होती है जो एक लैगून को घेरे रहती है।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रवाल छोटे समुद्री जीव होते हैं जो कैल्शियम कार्बोनेट से अपने कंकाल बनाते हैं, और समय के साथ इनके जमाव से ये द्वीप बनते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अपनी अद्वितीय समुद्री जैव विविधता और पारिस्थितिकी के लिए लक्षद्वीप महत्वपूर्ण है।",
    },
    {
      question: "भारत में 'रबी फसलों' की बुवाई आमतौर पर किस महीने में की जाती है?",
      answers: shuffle([
        { text: "जून-जुलाई", correct: false },
        { text: "अगस्त-सितंबर", correct: false },
        { text: "अक्टूबर-नवंबर", correct: true },
        { text: "मार्च-अप्रैल", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> रबी फसलों की बुवाई आमतौर पर अक्टूबर-नवंबर के महीनों में शीत ऋतु की शुरुआत के साथ की जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इन फसलों को बुवाई के समय ठंडे और पकने के समय गर्म व शुष्क मौसम की आवश्यकता होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इनकी कटाई मार्च-अप्रैल में वसंत ऋतु के दौरान की जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> गेहूं, जौ, मटर, चना और सरसों रबी की प्रमुख फसलें हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके विपरीत, खरीफ फसलों (जैसे चावल, मक्का) की बुवाई जून-जुलाई में मॉनसून की शुरुआत में की जाती है।",
    },
    {
      question: "भारत में कौन-सा राज्य बॉक्साइट का सबसे बड़ा उत्पादक है?",
      answers: shuffle([
        { text: "गुजरात", correct: false },
        { text: "ओडिशा", correct: true },
        { text: "झारखंड", correct: false },
        { text: "छत्तीसगढ़", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> ओडिशा भारत में बॉक्साइट का सबसे बड़ा उत्पादक राज्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> बॉक्साइट एल्यूमीनियम का मुख्य अयस्क है।<br><br><i class='fa-solid fa-angles-right icon'></i> ओडिशा के कोरापुट, कालाहांडी, सुंदरगढ़ और संबलपुर जैसे जिलों में बॉक्साइट के विशाल भंडार पाए जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत एल्यूमीनियम और उसके उत्पादों के उत्पादन में वैश्विक स्तर पर एक महत्वपूर्ण स्थान रखता है, जिसमें ओडिशा का योगदान महत्वपूर्ण है।",
    },
    {
      question: "'पीरपंजाल' पर्वत श्रृंखला किस हिमालयी क्षेत्र में स्थित है?",
      answers: shuffle([
        { text: "शिवालिक हिमालय", correct: false },
        { text: "लघु हिमालय (मध्य हिमालय)", correct: true },
        { text: "महान हिमालय (हिमाद्रि)", correct: false },
        { text: "ट्रांस हिमालय", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> पीरपंजाल पर्वत श्रृंखला लघु हिमालय (Lesser Himalayas) या मध्य हिमालय (Middle Himalayas) का सबसे बड़ा और सबसे महत्वपूर्ण पर्वत श्रृंखला है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह जम्मू और कश्मीर तथा हिमाचल प्रदेश में फैली हुई है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस श्रृंखला में कई महत्वपूर्ण दर्रे हैं जैसे पीरपंजाल दर्रा और बनिहाल दर्रा।<br><br><i class='fa-solid fa-angles-right icon'></i> लघु हिमालय में कई प्रसिद्ध हिल स्टेशन भी स्थित हैं जैसे शिमला, मनाली, कुल्लू, मसूरी, नैनीताल, दार्जिलिंग आदि।",
    },
    {
      question: "भारत का 'अहमदाबाद' शहर किस नदी के किनारे स्थित है?",
      answers: shuffle([
        { text: "नर्मदा", correct: false },
        { text: "तापी", correct: false },
        { text: "साबरमती", correct: true },
        { text: "माही", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> अहमदाबाद शहर, जो गुजरात का सबसे बड़ा शहर है, साबरमती नदी के पूर्वी तट पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह नदी अरावली रेंज से निकलती है और खंभात की खाड़ी (अरब सागर) में गिरती है।<br><br><i class='fa-solid fa-angles-right icon'></i> साबरमती आश्रम, जो महात्मा गांधी के जीवन से जुड़ा एक महत्वपूर्ण स्थल है, भी इसी नदी के किनारे स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह नदी शहर के लिए पेयजल और अन्य आवश्यकताओं का एक महत्वपूर्ण स्रोत है।",
    },
    {
      question:
        "भारत में 'राष्ट्रीय राजमार्गों' (National Highways) के रखरखाव और विकास की प्राथमिक जिम्मेदारी किसकी है?",
      answers: shuffle([
        { text: "राज्य सरकारें", correct: false },
        { text: "स्थानीय प्राधिकरण", correct: false },
        { text: "केंद्र सरकार (NHAI के माध्यम से)", correct: true },
        { text: "निजी कंपनियाँ", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> भारत में राष्ट्रीय राजमार्गों के रखरखाव और विकास की प्राथमिक जिम्मेदारी केंद्र सरकार की है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कार्य मुख्य रूप से भारतीय राष्ट्रीय राजमार्ग प्राधिकरण (National Highways Authority of India - NHAI) और सड़क परिवहन और राजमार्ग मंत्रालय (Ministry of Road Transport and Highways) द्वारा किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> NHAI एक स्वायत्त एजेंसी है जिसे 1988 में राष्ट्रीय राजमार्गों के विकास, रखरखाव और प्रबंधन के लिए स्थापित किया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> राज्य राजमार्गों का रखरखाव राज्य सरकारें करती हैं।",
    },
    {
      question: "निम्नलिखित में से कौन-सा दर्रा 'जम्मू' को 'श्रीनगर' से जोड़ता है?",
      answers: shuffle([
        { text: "जोजिला दर्रा", correct: false },
        { text: "पीरपंजाल दर्रा", correct: false },
        { text: "बनिहाल दर्रा", correct: true },
        { text: "बुर्जिल दर्रा", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> बनिहाल दर्रा जम्मू को श्रीनगर से जोड़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पीरपंजाल रेंज में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> जवाहर सुरंग (Jawahar Tunnel) इसी दर्रे के नीचे स्थित है, जिससे जम्मू और कश्मीर के बीच वर्षभर सड़क संपर्क बना रहता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जोजिला दर्रा श्रीनगर को लेह से जोड़ता है, और पीरपंजाल दर्रा पीरपंजाल रेंज में ही एक और महत्वपूर्ण दर्रा है, जबकि बुर्जिल दर्रा श्रीनगर को गिलगित से जोड़ता है।",
    },
    {
      question: "भारत में कौन-सा राज्य 'सोयाबीन' का सबसे बड़ा उत्पादक है?",
      answers: shuffle([
        { text: "उत्तर प्रदेश", correct: false },
        { text: "मध्य प्रदेश", correct: true },
        { text: "महाराष्ट्र", correct: false },
        { text: "राजस्थान", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> मध्य प्रदेश भारत का सबसे बड़ा सोयाबीन उत्पादक राज्य है, जिसके कारण इसे अक्सर 'सोया प्रदेश' के नाम से भी जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> सोयाबीन एक महत्वपूर्ण दलहन और तिलहन फसल है, जो प्रोटीन और तेल का एक समृद्ध स्रोत है।<br><br><i class='fa-solid fa-angles-right icon'></i> मालवा पठार क्षेत्र, जहाँ काली मिट्टी पाई जाती है, सोयाबीन की खेती के लिए बहुत उपयुक्त है।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत में सोयाबीन उत्पादन में मध्य प्रदेश के बाद महाराष्ट्र और राजस्थान का स्थान आता है।",
    },
    {
        question: "भारत में 'महानदी डेल्टा' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "पश्चिम बंगाल", correct: false },
            { text: "ओडिशा", correct: true },
            { text: "आंध्र प्रदेश", correct: false },
            { text: "तमिलनाडु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महानदी डेल्टा ओडिशा राज्य में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> महानदी पूर्वी भारत की एक प्रमुख नदी है जो छत्तीसगढ़ के सिहावा पर्वत से निकलकर ओडिशा से होते हुए बंगाल की खाड़ी में गिरती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह नदी अपना डेल्टा मुहाने पर बनाती है जो कृषि के लिए बहुत उपजाऊ है।<br><br><i class='fa-solid fa-angles-right icon'></i> हीराकुंड बांध, जो विश्व के सबसे लंबे बांधों में से एक है, इसी नदी पर स्थित है।"
    },
    {
        question: "जनगणना 2011 के अनुसार, भारत का सबसे अधिक लिंगानुपात (Sex Ratio) वाला राज्य कौन-सा है?",
        answers: shuffle([
            { text: "आंध्र प्रदेश", correct: false },
            { text: "तमिलनाडु", correct: false },
            { text: "केरल", correct: true },
            { text: "कर्नाटक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जनगणना 2011 के अनुसार, केरल भारत का सबसे अधिक लिंगानुपात वाला राज्य है, जहाँ प्रति 1000 पुरुषों पर 1084 महिलाएँ हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> उच्च लिंगानुपात एक संतुलित सामाजिक संरचना और महिला सशक्तिकरण को दर्शाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> केरल शिक्षा, स्वास्थ्य सेवा और महिला साक्षरता में भी अग्रणी राज्य है, जो इसके उच्च लिंगानुपात में योगदान करता है।"
    },
    {
        question: "भारत में 'झूम खेती' (Shifting Cultivation) मुख्य रूप से किन क्षेत्रों में प्रचलित है?",
        answers: shuffle([
            { text: "उत्तरी मैदान", correct: false },
            { text: "प्रायद्वीपीय पठार के आंतरिक भाग", correct: false },
            { text: "पूर्वोत्तर भारत की पहाड़ी क्षेत्र", correct: true },
            { text: "पश्चिमी तटीय मैदान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'झूम खेती' या स्थानांतरण कृषि (Shifting Cultivation) भारत के पूर्वोत्तर भारत के पहाड़ी क्षेत्रों, जैसे असम, मेघालय, मिजोरम, नागालैंड और त्रिपुरा में मुख्य रूप से प्रचलित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस विधि में, वन भूमि के एक छोटे से टुकड़े को साफ करके जलाया जाता है, और फिर उस पर कुछ वर्षों तक खेती की जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब मिट्टी की उर्वरता कम हो जाती है, तो किसान दूसरे क्षेत्र में चले जाते हैं और प्रक्रिया दोहराते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक पारंपरिक कृषि पद्धति है, लेकिन इससे वनों की कटाई और मिट्टी का कटाव होता है।"
    },
    {
        question: "भारत का 'कर्करेखा' (Tropic of Cancer) कितने राज्यों से होकर गुजरती है?",
        answers: shuffle([
            { text: "6", correct: false },
            { text: "7", correct: false },
            { text: "8", correct: true },
            { text: "9", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कर्क रेखा (23.5° उत्तरी अक्षांश) भारत के आठ राज्यों से होकर गुजरती है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये राज्य पश्चिम से पूर्व की ओर हैं: गुजरात, राजस्थान, मध्य प्रदेश, छत्तीसगढ़, झारखंड, पश्चिम बंगाल, त्रिपुरा और मिजोरम।<br><br><i class='fa-solid fa-angles-right icon'></i> यह रेखा भारत के मध्य भाग से होकर गुजरती है और जलवायु को प्रभावित करती है, जिसके कारण इन क्षेत्रों में उष्णकटिबंधीय जलवायु का अनुभव होता है।"
    },
    {
        question: "भारत में 'सर्वाधिक वर्षा' प्राप्त करने वाला स्थान 'मासिनराम' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "असम", correct: false },
            { text: "मेघालय", correct: true },
            { text: "त्रिपुरा", correct: false },
            { text: "सिक्किम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मासिनराम (Mawsynram) विश्व में सर्वाधिक वर्षा प्राप्त करने वाला स्थान है, जो भारत के मेघालय राज्य में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह स्थान खासी पहाड़ियों में स्थित है और यहाँ औसतन 11,872 मिलीमीटर (लगभग 467 इंच) से अधिक वार्षिक वर्षा होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> भारी वर्षा का कारण यहाँ की पहाड़ियों की कीप (फनेल) जैसी आकृति है, जो बंगाल की खाड़ी से आने वाली मानसूनी पवनों को ऊपर उठने और संघनित होने पर मजबूर करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> चेरापूंजी, जो पहले इस रिकॉर्ड को रखता था, भी इसी क्षेत्र में स्थित है।"
    },
    {
        question: "भारत का कौन-सा राज्य 'ज्वार-भाटा ऊर्जा' (Tidal Energy) उत्पादन की अधिकतम क्षमता रखता है?",
        answers: shuffle([
            { text: "केरल", correct: false },
            { text: "गुजरात", correct: true },
            { text: "तमिलनाडु", correct: false },
            { text: "ओडिशा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुजरात राज्य भारत में ज्वार-भाटा ऊर्जा उत्पादन की अधिकतम क्षमता रखता है।<br><br><i class='fa-solid fa-angles-right icon'></i> कच्छ की खाड़ी और खंभात की खाड़ी (गुजरात तट पर) में उच्च ज्वार की रेंज और अनुकूल तटीय भू-आकृतियाँ ज्वार-भाटा ऊर्जा संयंत्रों की स्थापना के लिए आदर्श परिस्थितियाँ प्रदान करती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इन खाड़ियों में बड़े ज्वारीय आयाम (tidal amplitudes) देखे जाते हैं, जो बिजली उत्पादन के लिए आवश्यक हैं।"
    },
    {
        question: "भारत में 'झारखंड' राज्य किस खनिज के उत्पादन में अग्रणी है?",
        answers: shuffle([
            { text: "तांबा", correct: false },
            { text: "बॉक्साइट", correct: false },
            { text: "कोयला", correct: true },
            { text: "अभ्रक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> झारखंड राज्य भारत में कोयला उत्पादन में अग्रणी है।<br><br><i class='fa-solid fa-angles-right icon'></i> राज्य में झरिया, बोकारो, गिरिडीह, करगली जैसे प्रमुख कोयला क्षेत्र स्थित हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> झरिया कोयला क्षेत्र विशेष रूप से कोकिंग कोयले के लिए प्रसिद्ध है, जो इस्पात उद्योग के लिए आवश्यक है।<br><br><i class='fa-solid fa-angles-right icon'></i> झारखंड की कोयला संपदा ने इसे भारत के औद्योगिक मानचित्र पर एक महत्वपूर्ण स्थान दिया है।"
    },
    {
        question: "भारत के किस पठार को 'दक्कन ट्रैप' के नाम से भी जाना जाता है?",
        answers: shuffle([
            { text: "मालवा का पठार", correct: false },
            { text: "छोटा नागपुर का पठार", correct: false },
            { text: "दक्कन का पठार", correct: true },
            { text: "मेघालय का पठार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्कन का पठार (Deccan Plateau) भारत का एक विशाल पठार है, जिसे मुख्यतः 'दक्कन ट्रैप' के नाम से भी जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'ट्रैप' शब्द एक जर्मन शब्द है जिसका अर्थ 'सीढ़ी' होता है, जो पठार की विशिष्ट सीढ़ी जैसी भू-आकृतियों को दर्शाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये संरचनाएँ लाखों साल पहले ज्वालामुखी विस्फोटों से निकले बेसाल्टिक लावा के प्रवाह के क्रमिक जमाव से बनी हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पठार महाराष्ट्र, मध्य प्रदेश, गुजरात, कर्नाटक और आंध्र प्रदेश के बड़े हिस्से को कवर करता है।"
    },
    {
        question: "भारत में 'असम घाटी' किस नदी द्वारा बनाई गई है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "ब्रह्मपुत्र", correct: true },
            { text: "बराक", correct: false },
            { text: "तीस्ता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> असम घाटी (Assam Valley) भारत के पूर्वोत्तर भाग में ब्रह्मपुत्र नदी द्वारा बनाई गई एक विशाल जलोढ़ घाटी है।<br><br><i class='fa-solid fa-angles-right icon'></i> ब्रह्मपुत्र नदी तिब्बत से निकलकर अरुणाचल प्रदेश में भारत में प्रवेश करती है और असम से होकर बहती हुई बांग्लादेश में प्रवेश करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह घाटी अपनी उपजाऊ जलोढ़ मिट्टी के लिए जानी जाती है, जो चावल और चाय की खेती के लिए उपयुक्त है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह घाटी अपनी समृद्ध जैव विविधता और वन्यजीवों के लिए भी महत्वपूर्ण है, जिसमें काजीरंगा और मानस जैसे राष्ट्रीय उद्यान शामिल हैं।"
    },
    {
        question: "भारत में 'सर्वाधिक वर्षा' किस मानसूनी शाखा से होती है?",
        answers: shuffle([
            { text: "अरब सागर शाखा", correct: true },
            { text: "बंगाल की खाड़ी शाखा", correct: false },
            { text: "पश्चिमी विक्षोभ", correct: false },
            { text: "उत्तर-पूर्वी मानसून", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्षिण-पश्चिमी मानसून की अरब सागर शाखा भारत में अधिकांश वर्षा के लिए जिम्मेदार है, खासकर पश्चिमी घाट के पश्चिमी ढलानों पर।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शाखा जून के पहले सप्ताह में केरल तट पर पहुँचती है और तेजी से आगे बढ़ती है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि बंगाल की खाड़ी शाखा भी महत्वपूर्ण है, जो पूर्वोत्तर भारत और गंगा के मैदानों में वर्षा करती है, अरब सागर शाखा की व्यापकता और तीव्रता अधिक होती है, जिससे भारत के बड़े हिस्से में अधिकांश वर्षा होती है।"
    },
    {
        question: "भारत में 'मिट्टी के कटाव' (Soil Erosion) का एक प्रमुख कारण क्या है?",
        answers: shuffle([
            { text: "गहन कृषि", correct: false },
            { text: "वनों की कटाई", correct: true },
            { text: "रासायनिक उर्वरकों का अत्यधिक उपयोग", correct: false },
            { text: "सिंचाई का अत्यधिक उपयोग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में मिट्टी के कटाव (Soil Erosion) का एक प्रमुख कारण वनों की कटाई (Deforestation) है।<br><br><i class='fa-solid fa-angles-right icon'></i> पेड़ और उनकी जड़ें मिट्टी को बांधे रखती हैं और बारिश तथा हवा के कटाव से बचाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जब वन काटे जाते हैं, तो मिट्टी की ऊपरी परत उजागर हो जाती है और वर्षा जल या तेज हवाओं द्वारा आसानी से बह जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रक्रिया विशेषकर पहाड़ी क्षेत्रों और ढलानों पर अधिक गंभीर होती है, जिससे भूमि का क्षरण होता है और कृषि उत्पादकता प्रभावित होती है।"
    },
    {
        question: "भारत में 'नीली क्रांति' (Blue Revolution) किससे संबंधित है?",
        answers: shuffle([
            { text: "दूध उत्पादन", correct: false },
            { text: "मत्स्य उत्पादन", correct: true },
            { text: "पेट्रोलियम उत्पादन", correct: false },
            { text: "दलहन उत्पादन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नीली क्रांति' (Blue Revolution) भारत में मत्स्यपालन (मछली उत्पादन) में तेजी से वृद्धि से संबंधित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह 1980 के दशक में शुरू हुई थी और इसका उद्देश्य मछली उत्पादन को बढ़ावा देकर मछुआरों की आय बढ़ाना और देश की खाद्य सुरक्षा में योगदान करना था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें एक्वाकल्चर (जलीय कृषि) और आधुनिक मछली पकड़ने की तकनीकों को बढ़ावा देना शामिल था।"
    },
    {
        question: "भारत का 'प्रवाल भित्ति' (Coral Reef) वाला क्षेत्र कौन-सा है?",
        answers: shuffle([
            { text: "सुंदरबन", correct: false },
            { text: "चिल्का झील", correct: false },
            { text: "लक्षद्वीप", correct: true },
            { text: "गंगा डेल्टा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में प्रवाल भित्तियाँ मुख्य रूप से लक्षद्वीप, अंडमान और निकोबार द्वीप समूह, कच्छ की खाड़ी और मन्नार की खाड़ी में पाई जाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> लक्षद्वीप विशेष रूप से प्रवाल द्वीपों से बना है और यहाँ विश्व की कुछ सबसे समृद्ध और विविध प्रवाल भित्तियाँ हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये भित्तियाँ समुद्री पारिस्थितिकी तंत्र के लिए महत्वपूर्ण हैं, क्योंकि वे समुद्री जीवों के लिए आवास और भोजन प्रदान करती हैं, और तटीय क्षेत्रों को कटाव से बचाती हैं।"
    },
    {
        question: "भारत में 'शीत मरुस्थल' (Cold Desert) किस क्षेत्र में स्थित है?",
        answers: shuffle([
            { text: "राजस्थान का थार मरुस्थल", correct: false },
            { text: "कच्छ का रण", correct: false },
            { text: "लद्दाख", correct: true },
            { text: "सिक्किम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लद्दाख भारत में एक 'शीत मरुस्थल' (Cold Desert) है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह हिमालय के वर्षा छाया क्षेत्र (Rain Shadow Area) में स्थित है, जहाँ बहुत कम वर्षा होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ की जलवायु अत्यधिक ठंडी और शुष्क होती है, जिसमें दिन-रात और गर्मियों-सर्दियों के तापमान में बड़ा अंतर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस क्षेत्र में कम वनस्पति होती है, और यह अपनी अनूठी भू-आकृति, उच्च ऊंचाई वाले दर्रों और बौद्ध संस्कृति के लिए जाना जाता है।"
    },
    {
        question: "भारत में 'अंडाकार आकृति' की अंतर्देशीय मीठे पानी की झील कौन-सी है जो गोदावरी और कृष्णा डेल्टा के बीच स्थित है?",
        answers: shuffle([
            { text: "वुलर झील", correct: false },
            { text: "कोलेरू झील", correct: true },
            { text: "लोकतक झील", correct: false },
            { text: "सांभर झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोलेरू झील (Kolleru Lake) आंध्र प्रदेश में स्थित एक अंडाकार आकृति की मीठे पानी की झील है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह गोदावरी और कृष्णा नदियों के डेल्टा के बीच स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक रामसर साइट और एक महत्वपूर्ण वेटलैंड है, जो प्रवासी पक्षियों के लिए एक महत्वपूर्ण निवास स्थान प्रदान करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह झील मीठे पानी की मछली पालन के लिए भी महत्वपूर्ण है।"
    },
    {
        question: "भारत में 'पेट्रोलियम' का सबसे पुराना उत्पादक राज्य कौन-सा है?",
        answers: shuffle([
            { text: "गुजरात", correct: false },
            { text: "महाराष्ट्र", correct: false },
            { text: "असम", correct: true },
            { text: "आंध्र प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> असम भारत का सबसे पुराना पेट्रोलियम उत्पादक राज्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> डिगबोई (Digboi), जो असम में स्थित है, एशिया का सबसे पुराना तेल क्षेत्र है और यहाँ 19वीं सदी के अंत से पेट्रोलियम का उत्पादन हो रहा है।<br><br><i class='fa-solid fa-angles-right icon'></i> असम में अन्य महत्वपूर्ण तेल क्षेत्र नहरकटिया और मोरन-हुगरीजन हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत में पेट्रोलियम उत्पादन की शुरुआत यहीं से हुई थी।"
    },
    {
        question: "भारत का 'छोटा नागपुर पठार' किस प्रकार के खनिजों के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "पेट्रोलियम और प्राकृतिक गैस", correct: false },
            { text: "कोयला, लौह अयस्क और अभ्रक", correct: true },
            { text: "यूरेनियम और थोरियम", correct: false },
            { text: "सोना और चांदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> छोटा नागपुर पठार भारत का सबसे खनिज-समृद्ध क्षेत्र है, जिसे 'भारत का रूर' भी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मुख्य रूप से कोयला, लौह अयस्क, अभ्रक, बॉक्साइट और चूना पत्थर जैसे खनिजों के विशाल भंडार के लिए प्रसिद्ध है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह क्षेत्र भारत के अधिकांश लौह और इस्पात उद्योगों, भारी इंजीनियरिंग उद्योगों और सीमेंट उद्योगों का आधार है।"
    },
    {
        question: "'लोकतक झील' भारत के किस राज्य में स्थित है, जो अपनी तैरती हुई फुमदीज़ के लिए जानी जाती है?",
        answers: shuffle([
            { text: "असम", correct: false },
            { text: "मेघालय", correct: false },
            { text: "मणिपुर", correct: true },
            { text: "मिजोरम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोकतक झील मणिपुर राज्य में स्थित पूर्वोत्तर भारत की सबसे बड़ी मीठे पानी की झील है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह झील अपनी तैरती हुई फुमदीज़ (phumdis) के लिए प्रसिद्ध है, जो वनस्पतियों, मिट्टी और कार्बनिक पदार्थों के विषम द्रव्यमान हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इन फुमदीज़ पर दुनिया का एकमात्र तैरता हुआ राष्ट्रीय उद्यान, 'केइबुल लामजाओ राष्ट्रीय उद्यान' (Keibul Lamjao National Park) स्थित है, जो लुप्तप्राय संगाई हिरण (Manipur Brow-antlered Deer) का प्राकृतिक आवास है।"
    },
    {
        question: "भारत की जनगणना 2011 के अनुसार, किस केंद्र शासित प्रदेश का लिंगानुपात सबसे कम है?",
        answers: shuffle([
            { text: "चंडीगढ़", correct: false },
            { text: "दिल्ली", correct: false },
            { text: "दमन और दीव", correct: true },
            { text: "पुडुचेरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जनगणना 2011 के अनुसार, दमन और दीव (जो अब दादरा और नगर हवेली तथा दमन और दीव में विलय हो गया है) भारत का सबसे कम लिंगानुपात वाला केंद्र शासित प्रदेश था, जहाँ प्रति 1000 पुरुषों पर केवल 618 महिलाएँ थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत के औसत लिंगानुपात से काफी कम था और लिंग असंतुलन की गंभीर स्थिति को दर्शाता था।"
    },
    {
        question: "भारत में 'अंडमान और निकोबार द्वीप समूह' का सर्वोच्च शिखर कौन-सा है?",
        answers: shuffle([
            { text: "माउंट डियावोलो", correct: false },
            { text: "माउंट कोयोब", correct: false },
            { text: "सैडल पीक", correct: true },
            { text: "माउंट थुइलियर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सैडल पीक (Saddle Peak) अंडमान और निकोबार द्वीप समूह का सर्वोच्च शिखर है, जो उत्तरी अंडमान द्वीप पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी ऊंचाई लगभग 732 मीटर (2,402 फीट) है।<br><br><i class='fa-solid fa-angles-right icon'></i> सैडल पीक राष्ट्रीय उद्यान भी इसी क्षेत्र में स्थित है, जो अपनी समृद्ध जैव विविधता के लिए जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह द्वीप समूह की एकमात्र नदी (कलपोंग) का उद्गम स्थल भी है।"
    },
    {
        question: "भारत में 'सर्वाधिक चावल' का उत्पादन किस राज्य में होता है?",
        answers: shuffle([
          { text: "पंजाब", correct: false },
          { text: "उत्तर प्रदेश", correct: false },
          { text: "पश्चिम बंगाल", correct: true },
          { text: "आंध्र प्रदेश", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> पश्चिम बंगाल भारत का सबसे बड़ा चावल उत्पादक राज्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> गंगा-ब्रह्मपुत्र डेल्टा क्षेत्र की उपजाऊ जलोढ़ मिट्टी, पर्याप्त वर्षा और सिंचाई की सुविधाएँ चावल की खेती के लिए आदर्श परिस्थितियाँ प्रदान करती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> पश्चिम बंगाल में चावल की तीन फसलें, अर्थात् ऑस (शरद), अमन (शीतकालीन) और बोरो (ग्रीष्मकालीन) उगाई जाती हैं, जिनमें अमन मुख्य फसल है।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत विश्व में चावल का दूसरा सबसे बड़ा उत्पादक देश है, और इसका एक बड़ा हिस्सा पश्चिम बंगाल से आता है।",
      },
      {
        question:
          "'भारत का मानक मेरिडियन' (Standard Meridian of India) कितने डिग्री देशांतर पर स्थित है?",
        answers: shuffle([
          { text: "82° 30′ पूर्वी देशांतर", correct: true },
          { text: "80° 00′ पूर्वी देशांतर", correct: false },
          { text: "85° 30′ पूर्वी देशांतर", correct: false },
          { text: "78° 30′ पूर्वी देशांतर", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> भारत का मानक मेरिडियन (Standard Meridian) 82° 30′ पूर्वी देशांतर पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह रेखा उत्तर प्रदेश के मिर्जापुर (नैनी के पास) से होकर गुजरती है।<br><br><i class='fa-solid fa-angles-right icon'></i> भारतीय मानक समय (IST) ग्रीनविच माध्य समय (GMT) से 5 घंटे 30 मिनट आगे है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह देशांतर रेखा भारत के लगभग मध्य से होकर गुजरती है ताकि देश के पूर्वी और पश्चिमी छोर के बीच समय के अंतर को कम किया जा सके और पूरे देश के लिए एक समान समय बनाए रखा जा सके।",
      },
      {
        question: "भारत में 'सर्वाधिक यूरेनियम' का उत्पादन किस राज्य में होता है?",
        answers: shuffle([
          { text: "झारखंड", correct: true },
          { text: "आंध्र प्रदेश", correct: false },
          { text: "तेलंगाना", correct: false },
          { text: "मेघालय", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> झारखंड भारत में यूरेनियम का सबसे बड़ा उत्पादक राज्य है, विशेष रूप से जादूगुडा (Jaduguda) की खदानें यूरेनियम खनन के लिए प्रसिद्ध हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यूरेनियम एक परमाणु ऊर्जा खनिज है जिसका उपयोग परमाणु ऊर्जा संयंत्रों में ईंधन के रूप में किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यूरेनियम कॉर्पोरेशन ऑफ इंडिया लिमिटेड (UCIL) यहाँ खनन और प्रसंस्करण का कार्य करती है।",
      },
      {
        question: "'सरदार सरोवर बांध' किस नदी पर बनाया गया है?",
        answers: shuffle([
          { text: "गोदावरी", correct: false },
          { text: "तापी", correct: false },
          { text: "नर्मदा", correct: true },
          { text: "कृष्णा", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> सरदार सरोवर बांध भारत में नर्मदा नदी पर बना एक विशाल गुरुत्वाकर्षण बांध है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह गुजरात के नवगाम के पास स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह नर्मदा घाटी परियोजना का एक महत्वपूर्ण हिस्सा है और सिंचाई, जलविद्युत उत्पादन और पेयजल आपूर्ति के लिए एक प्रमुख स्रोत है, जिससे गुजरात, मध्य प्रदेश, महाराष्ट्र और राजस्थान जैसे राज्यों को लाभ मिलता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत की सबसे बड़ी जल संसाधन परियोजनाओं में से एक है।",
      },
      {
        question:
          "भारत में 'दक्कन ट्रैप' का अधिकांश भाग किस प्रकार की मिट्टी से ढका हुआ है?",
        answers: shuffle([
          { text: "जलोढ़ मिट्टी", correct: false },
          { text: "लाल मिट्टी", correct: false },
          { text: "काली मिट्टी", correct: true },
          { text: "लेटेराइट मिट्टी", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> दक्कन ट्रैप का अधिकांश भाग काली मिट्टी (Black Soil) से ढका हुआ है, जिसे 'रेगुर' मिट्टी भी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस मिट्टी का निर्माण ज्वालामुखी बेसाल्ट चट्टानों के अपक्षय से हुआ है, जो दक्कन ट्रैप की प्राथमिक भूवैज्ञानिक विशेषता है।<br><br><i class='fa-solid fa-angles-right icon'></i> काली मिट्टी अपनी उच्च नमी धारण करने की क्षमता और कपास की खेती के लिए उपयुक्तता के लिए जानी जाती है, जिसके कारण दक्कन के पठार में कपास की खेती बड़े पैमाने पर की जाती है।",
      },
      {
        question:
          "भारत में 'उष्णकटिबंधीय कांटेदार वन' (Tropical Thorn Forests) मुख्यतः किन क्षेत्रों में पाए जाते हैं?",
        answers: shuffle([
          { text: "उत्तर-पूर्वी भारत", correct: false },
          { text: "पश्चिमी घाट के पश्चिमी ढलान", correct: false },
          {
            text: "राजस्थान, गुजरात और पंजाब के अर्ध-शुष्क क्षेत्र",
            correct: true,
          },
          { text: "अंडमान और निकोबार द्वीप समूह", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> उष्णकटिबंधीय कांटेदार वन उन क्षेत्रों में पाए जाते हैं जहाँ वार्षिक वर्षा 50 सेमी से कम होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत में ये वन मुख्य रूप से राजस्थान, गुजरात, पंजाब, हरियाणा और मध्य प्रदेश के कुछ अर्ध-शुष्क क्षेत्रों में पाए जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इन वनों में बबूल, खजूर, यूफोरबिया और कैक्टस जैसी कांटेदार झाड़ियाँ और छोटे पेड़ होते हैं, जो शुष्क परिस्थितियों में जीवित रहने के लिए अनुकूलित होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> पेड़ों की जड़ें लंबी और मोटी होती हैं, और पत्ते छोटे या कांटेदार होते हैं ताकि वाष्पीकरण को कम किया जा सके।",
      },
      {
        question: "भारत में 'खेतड़ी बेल्ट' किस खनिज के लिए प्रसिद्ध है?",
        answers: shuffle([
          { text: "लौह अयस्क", correct: false },
          { text: "कोयला", correct: false },
          { text: "तांबा", correct: true },
          { text: "मैंगनीज", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> खेतड़ी बेल्ट (Khetri Belt) राजस्थान के झुंझुनू जिले में स्थित है और यह भारत के सबसे महत्वपूर्ण तांबा उत्पादक क्षेत्रों में से एक है।<br><br><i class='fa-solid fa-angles-right icon'></i> खेतड़ी कॉपर कॉम्प्लेक्स (KCC) यहाँ प्रमुख खनन और प्रसंस्करण इकाई है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह क्षेत्र प्राचीन काल से ही तांबे के खनन के लिए जाना जाता रहा है, और यह भारत में तांबे के उत्पादन में महत्वपूर्ण योगदान देता है।",
      },
      {
        question:
          "जनगणना 2011 के अनुसार, भारत का सबसे अधिक शहरीकृत राज्य कौन-सा है?",
        answers: shuffle([
          { text: "महाराष्ट्र", correct: false },
          { text: "तमिलनाडु", correct: false },
          { text: "गोवा", correct: true },
          { text: "केरल", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> जनगणना 2011 के अनुसार, गोवा भारत का सबसे अधिक शहरीकृत राज्य है, जहाँ लगभग 62.17% जनसंख्या शहरी क्षेत्रों में निवास करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी तुलना में, भारत की कुल शहरी जनसंख्या लगभग 31.16% थी।<br><br><i class='fa-solid fa-angles-right icon'></i> गोवा के छोटे आकार, पर्यटन उद्योग और शहरी विकास ने इसे उच्च शहरीकरण दर वाला राज्य बनाया है।",
      },
      {
        question: "भारत में 'उत्तर प्रदेश' किस फसल का सबसे बड़ा उत्पादक है?",
        answers: shuffle([
          { text: "चावल", correct: false },
          { text: "गेहूं", correct: true },
          { text: "मक्का", correct: false },
          { text: "कपास", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> उत्तर प्रदेश भारत का सबसे बड़ा गेहूं उत्पादक राज्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> गंगा-यमुना दोआब की उपजाऊ जलोढ़ मिट्टी, पर्याप्त सिंचाई सुविधाएं और अनुकूल जलवायु परिस्थितियाँ गेहूं की खेती के लिए आदर्श हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> उत्तर प्रदेश के अलावा, पंजाब और हरियाणा भी भारत में गेहूं के महत्वपूर्ण उत्पादक हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> गेहूं भारत की एक प्रमुख रबी फसल है।",
      },
      {
        question:
          "भारत में 'सर्वाधिक लौह अयस्क' किस प्रकार की चट्टानों में पाया जाता है?",
        answers: shuffle([
          { text: "धारवाड़ क्रम की चट्टानें", correct: true },
          { text: "कुडप्पा क्रम की चट्टानें", correct: false },
          { text: "गोंडवाना क्रम की चट्टानें", correct: false },
          { text: "विंध्य क्रम की चट्टानें", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> भारत में सर्वाधिक लौह अयस्क धारवाड़ क्रम (Dharwar System) की चट्टानों में पाया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> धारवाड़ क्रम की चट्टानें भारत की सबसे पुरानी और सबसे आर्थिक रूप से महत्वपूर्ण चट्टान प्रणालियों में से एक हैं, जो प्रायद्वीपीय भारत में पाई जाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये अत्यधिक मेटामॉर्फिक तलछटी चट्टानें हैं जिनमें लौह अयस्क, मैंगनीज, तांबा, सोना, अभ्रक और अन्य खनिजों के समृद्ध भंडार होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> कर्नाटक, ओडिशा, झारखंड और छत्तीसगढ़ में लौह अयस्क की प्रमुख खदानें इन्हीं चट्टानों में स्थित हैं।",
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