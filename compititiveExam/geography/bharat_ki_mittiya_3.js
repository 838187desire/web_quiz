const questions = [ 
  {
      topHeading: "भारत की मिट्टियाँ पर आधारित 50 बहुविकल्पीय प्रश्न part 3  (quiz_no. 51)."
  },
    {
      question: "भारत में काली मिट्टी की जल धारण क्षमता अन्य मिट्टियों की तुलना में क्यों अधिक होती है?",
      answers: shuffle([
        { text: "इसमें अधिक रेत होता है", correct: false },
        { text: "इसमें क्ले (मिट्टी की चिकनी कण) की मात्रा अधिक होती है", correct: true },
        { text: "इसमें कार्बनिक पदार्थ कम होते हैं", correct: false },
        { text: "यह बहुत पतली होती है", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी में क्ले की अधिक मात्रा होती है, जो जल को अच्छी तरह से अवशोषित और संचित कर सकती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह गुण इसे सूखे के समय भी पौधों को जल उपलब्ध कराने में मदद करता है, जिससे यह खेती के लिए उपयुक्त बनती है।"
    },
    {
      question: "भारत की लाल मिट्टी में मुख्यतः किस तत्व की कमी पाई जाती है?",
      answers: shuffle([
        { text: "फास्फोरस और नाइट्रोजन", correct: true },
        { text: "पोटैशियम", correct: false },
        { text: "कैल्शियम", correct: false },
        { text: "लवण", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टी अम्लीय होती है और इसमें नाइट्रोजन तथा फास्फोरस की कमी होती है, जो पौधों के विकास के लिए आवश्यक पोषक तत्व हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इस मिट्टी की उर्वरता बढ़ाने के लिए इन तत्वो वाले उर्वरकों का प्रयोग आवश्यक होता है।"
    },
    {
      question: "भुरभुरी मिट्टी का निर्माण मुख्यतः किस प्रक्रिया से होता है?",
      answers: shuffle([
        { text: "ज्वालामुखीय क्रिया", correct: false },
        { text: "नदी के कटाव और तलछट के जमाव से", correct: true },
        { text: "पवन द्वारा तलछट का संचयन", correct: false },
        { text: "पर्वतीय अपक्षय से", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> भुरभुरी मिट्टी नदी के प्रवाह से लाई गई तलछट से बनती है, जिसमें रेत, सिल्ट और दोमट मिट्टी का संतुलित मिश्रण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रक्रिया गंगा-यमुना मैदान जैसे नदियों के मैदानों में प्रमुख है, जहां मिट्टी अत्यंत उपजाऊ होती है।"
    },
    {
      question: "लैटराइट मिट्टी में पौधों के लिए हानिकारक कौन सा तत्व अधिक मात्रा में हो सकता है?",
      answers: shuffle([
        { text: "सोडियम", correct: false },
        { text: "एल्युमिनियम", correct: true },
        { text: "कैल्शियम", correct: false },
        { text: "मैग्नीशियम", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैटराइट मिट्टी में एल्युमिनियम की उच्च मात्रा होती है, जो पौधों की जड़ों के लिए विषाक्त हो सकती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मिट्टी अधिक अम्लीय होती है, जिससे पौधों की वृद्धि प्रभावित होती है और कृषि के लिए इसे सुधारना आवश्यक होता है।"
    },
    {
      question: "पीट मिट्टी का कृषि में क्या महत्व है?",
      answers: shuffle([
        { text: "जल अवशोषण कम करती है", correct: false },
        { text: "जैविक पदार्थों की समृद्धता के कारण मिट्टी की उर्वरता बढ़ाती है", correct: true },
        { text: "पौधों के लिए विषाक्त होती है", correct: false },
        { text: "नमी को पूरी तरह से रोकती है", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीट मिट्टी जैविक अवशेषों से भरपूर होती है, जो मिट्टी की उर्वरता और जलधारण क्षमता को बढ़ाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मिट्टी खेतों में कार्बनिक खाद के रूप में उपयोग की जाती है और पौधों की वृद्धि के लिए लाभकारी होती है।"
    },
    {
      question: "भारत में लाल मिट्टी के किन क्षेत्र में यह मिट्टी विशेष रूप से पाई जाती है?",
      answers: shuffle([
        { text: "राजस्थान का मरुस्थल", correct: false },
        { text: "पूर्वी और दक्षिणी भारत के पठारी क्षेत्र", correct: true },
        { text: "हिमालय की पर्वतीय क्षेत्र", correct: false },
        { text: "पश्चिमी तट", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टी मुख्य रूप से आंध्र प्रदेश, तमिलनाडु, छत्तीसगढ़, ओडिशा जैसे पूर्वी और दक्षिणी पठारी क्षेत्रों में पाई जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहां की जलवायु और चट्टानों के अपक्षय के कारण लाल मिट्टी का विकास होता है।"
    },
    {
      question: "काली मिट्टी में खेती के लिए किस प्रकार की सिंचाई उपयुक्त होती है?",
      answers: shuffle([
        { text: "बाढ़ सिंचाई", correct: false },
        { text: "बूंद-बूंद सिंचाई", correct: false },
        { text: "ड्रिप सिंचाई", correct: true },
        { text: "स्प्रिंकलर सिंचाई", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी भारी और चिपचिपी होती है, जिससे जल निकासी धीमी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए ड्रिप सिंचाई तकनीक उपयुक्त रहती है क्योंकि यह सीधे पौधे की जड़ों को जल प्रदान करती है और जल की बर्बादी कम होती है।"
    },
    {
      question: "भुरभुरी मिट्टी में जल निकासी की स्थिति कैसी होती है?",
      answers: shuffle([
        { text: "इसमें रेत की मात्रा अधिक होती है, जो जल को तेजी से निकाल देती है", correct: true },
        { text: "इसमें मिट्टी के कण घने होते हैं", correct: false },
        { text: "इसमें ज्यादा जैविक पदार्थ होते हैं", correct: false },
        { text: "यह जल अवशोषण नहीं करती", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> भुरभुरी मिट्टी में रेत के कण अधिक होते हैं, जिससे जल तेजी से बह जाता है और जल धारण क्षमता कम होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मिट्टी तेजी से सूख जाती है, इसलिए सिंचाई का सही प्रबंधन जरूरी होता है।"
    },
    {
      question: "लाल मिट्टी में सुधार के लिए कौन सा रासायनिक उपचार सबसे प्रभावी माना जाता है?",
      answers: shuffle([
        { text: "गंधक (सल्फर) का उपयोग", correct: false },
        { text: "चूना (कैल्शियम कार्बोनेट) डालना", correct: true },
        { text: "अमोनियम सल्फेट का छिड़काव", correct: false },
        { text: "फास्फोरस उर्वरक का प्रयोग", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टी अम्लीय प्रकृति की होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके अम्लीयपन को कम करने के लिए चूना डालना सबसे प्रभावी उपाय है। इससे मिट्टी का पीएच स्तर संतुलित होता है और पोषक तत्व पौधों के लिए उपलब्ध हो जाते हैं।"
    },
    {
      question: "पीट मिट्टी का प्रमुख निर्माण तत्व क्या है?",
      answers: shuffle([
        { text: "अपघटित वनस्पति अवशेष", correct: true },
        { text: "ज्वालामुखीय चट्टान", correct: false },
        { text: "समुद्री तलछट", correct: false },
        { text: "बालू", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीट मिट्टी दलदली क्षेत्रों में अपघटित वनस्पति अवशेषों से बनती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कार्बनिक पदार्थों से समृद्ध होती है, जो भूमि की उर्वरता बढ़ाती है और जल धारण क्षमता में भी सुधार करती है।"
    },
    {
      question: "भारत में काली मिट्टी (कृष्णभूमि) की उत्पत्ति किस प्रकार हुई है?",
      answers: shuffle([
        { text: "ज्वालामुखीय बेसाल्ट चट्टानों के अपक्षय से", correct: true },
        { text: "समुद्री तलछट से", correct: false },
        { text: "रेतीली मिट्टी के संचार से", correct: false },
        { text: "पवन द्वारा लाई गई", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी की उत्पत्ति मुख्यतः डेक्कन के बेसाल्ट चट्टानों के अपक्षय से हुई है।<br><br><i class='fa-solid fa-angles-right icon'></i> बेसाल्ट चट्टानों के धीमे अपक्षय से यह मिट्टी बनी, जो धातुओं जैसे कैल्शियम, मैग्नीशियम, और लोहा युक्त होती है। इसकी जल धारण क्षमता उच्च होती है, जिससे यह कपास की खेती के लिए उपयुक्त है।"
    },
    {
      question: "लाल मिट्टी में प्राकृतिक रूप से किन तत्वों की कमी होती है?",
      answers: shuffle([
        { text: "नाइट्रोजन और फास्फोरस", correct: true },
        { text: "लोहा और मैग्नीशियम", correct: false },
        { text: "कैल्शियम और पोटैशियम", correct: false },
        { text: "कार्बन और हाइड्रोजन", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टी अम्लीय होती है और नाइट्रोजन व फास्फोरस जैसे आवश्यक पोषक तत्वों की कमी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये तत्व पौधों की वृद्धि के लिए अनिवार्य होते हैं। इसलिए इस मिट्टी में उर्वरकों और खादों का प्रयोग आवश्यक होता है ताकि उपज बढ़ाई जा सके।"
    },
    {
      question: "भुरभुरी मिट्टी का वैज्ञानिक नाम क्या है?",
      answers: shuffle([
        { text: "रेतीली दोमट मिट्टी (Sandy Loam)", correct: true },
        { text: "चिकनी मिट्टी (Clay)", correct: false },
        { text: "लाल मिट्टी (Laterite)", correct: false },
        { text: "काली मिट्टी (Black Soil)", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> भुरभुरी मिट्टी में रेत और दोमट मिट्टी का संतुलित मिश्रण होता है, जिसे वैज्ञानिक भाषा में रेतीली दोमट मिट्टी (Sandy Loam) कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी बनावट हल्की होती है और जल निकासी अच्छी होती है, जो कई फसलों के लिए उपयुक्त है।"
    },
    {
      question: "लैटराइट मिट्टी का नाम किस भाषा से आया है और इसका अर्थ क्या है?",
      answers: shuffle([
        { text: "लैटिन भाषा से, जिसका अर्थ है \"भूमि\"", correct: false },
        { text: "ग्रीक भाषा से, जिसका अर्थ है \"लाल मिट्टी\"", correct: false },
        { text: "फ्रेंच भाषा से, जिसका अर्थ है \"पत्थर\"", correct: false },
        { text: "लैटिन भाषा से, जिसका अर्थ है \"अपक्षय\"", correct: true }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैटराइट मिट्टी का नाम लैटिन भाषा के शब्द 'later' से आया है, जिसका अर्थ है 'ईंट' या 'अपक्षय'।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मिट्टी मुख्यतः अपक्षय की प्रक्रिया से बनती है, जिसमें चट्टानों से पोषक तत्व बह जाते हैं और लोहे की मात्रा अधिक रह जाती है।"
    },
    {
      question: "पीट मिट्टी का भंडार भारत में कहाँ सबसे अधिक पाया जाता है?",
      answers: shuffle([
        { text: "पश्चिमी घाट", correct: false },
        { text: "उत्तर पूर्वी क्षेत्र (असम, मेघालय)", correct: true },
        { text: "राजस्थान", correct: false },
        { text: "पश्चिमी रेगिस्तान", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में पीट मिट्टी अधिकतर दलदली और जल जमाव वाले क्षेत्रों में पाई जाती है, खासकर उत्तर पूर्वी राज्यों जैसे असम और मेघालय में।<br><br><i class='fa-solid fa-angles-right icon'></i> यहां की नमी और जैविक पदार्थों के कारण पीट मिट्टी का भंडार समृद्ध होता है, जो जैविक उर्वरक के रूप में उपयोगी है।"
    },
    {
      question: "भारत में लाल मिट्टी का प्रचलित रंग क्या कारण है?",
      answers: shuffle([
        { text: "कैल्शियम की अधिकता", correct: false },
        { text: "सिलिका की उपस्थिति", correct: false },
        { text: "लोहे के ऑक्साइड की उपस्थिति", correct: true },
        { text: "कार्बनिक पदार्थों की कमी", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टी का रंग मुख्य रूप से लोहे के ऑक्साइड (फेरिक ऑक्साइड) के कारण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये ऑक्साइड मिट्टी को विशिष्ट लाल रंग देते हैं। अधिक वर्षा वाले क्षेत्रों में यह रंग गहरा और अधिक गाढ़ा होता है।"
    },
    {
      question: "काली मिट्टी में कौन सा पोषक तत्व प्रचुर मात्रा में होता है?",
      answers: shuffle([
        { text: "नाइट्रोजन", correct: false },
        { text: "फास्फोरस", correct: false },
        { text: "कैल्शियम", correct: false },
        { text: "लोहा", correct: true }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी में लोहा (Fe) प्रचुर मात्रा में पाया जाता है, जो मिट्टी के रंग और पोषण के लिए महत्वपूर्ण है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके अलावा, यह मिट्टी मैग्नीशियम, कैल्शियम और एल्यूमीनियम जैसे तत्वों से भी समृद्ध होती है, जो फसल उत्पादन को बढ़ावा देते हैं।"
    },
    {
      question: "भुरभुरी मिट्टी की जल धारण क्षमता किस प्रकार होती है?",
      answers: shuffle([
        { text: "बहुत कम", correct: false },
        { text: "मध्यम", correct: true },
        { text: "अधिक", correct: false },
        { text: "बिल्कुल नहीं", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> भुरभुरी मिट्टी में रेत और दोमट मिट्टी के कणों का संतुलन होने के कारण इसकी जल धारण क्षमता मध्यम होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह जल को आवश्यकतानुसार रखती है और अधिक जल निकासी भी करती है, जिससे यह कई फसलों के लिए उपयुक्त है।"
    },
    {
      question: "लाल मिट्टी में मुख्य रूप से कौन सी फसल उगाई जाती है?",
      answers: shuffle([
        { text: "चावल", correct: false },
        { text: "बाजरा", correct: true },
        { text: "कपास", correct: false },
        { text: "आलू", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टी की अम्लीय प्रकृति और कम उर्वरता के कारण यह बाजरे जैसी फसल के लिए उपयुक्त होती है, जो कम पोषक तत्वों में भी उग सकती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मिट्टी विशेष रूप से उष्णकटिबंधीय क्षेत्रों में बाजरा उत्पादन के लिए अनुकूल है।"
    },
    {
      question: "काली मिट्टी के लिए किस प्रकार की जलवायु अनुकूल होती है?",
      answers: shuffle([
        { text: "शुष्क और ठंडी", correct: false },
        { text: "उष्णकटिबंधीय और आधा-शुष्क", correct: true },
        { text: "ठंडी और आर्द्र", correct: false },
        { text: "रेगिस्तानी", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी मुख्यतः उष्णकटिबंधीय और आधा-शुष्क जलवायु में पाई जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह जलवायु कपास, गन्ना और दलहन जैसी फसलों के विकास के लिए अनुकूल होती है। इस मिट्टी की जल धारण क्षमता इसे सूखे के मौसम में भी उपयोगी बनाती है।"
    },
    {
        question: "भारत में काली मिट्टी की उर्वरता बढ़ाने के लिए कौन-कौन से उर्वरक प्रमुखता से उपयोग किए जाते हैं?",
        answers: shuffle([
          { text: "नाइट्रोजन औरफास्फोरस", correct: true },
          { text: "पोटैशियम औरनाइट्रोजन", correct: false },
          { text: "कार्बनऔरकैल्शियम", correct: false },
          { text: "सल्फरऔरमैग्नीशियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टीमेंकार्बनिक पदार्थतोप्रचुरमात्रामेंहोतेहैं,लेकिननाइट्रोजन औरफास्फोरस कीकमीहोतीहै।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिएइनपोषकतत्वोंकोउर्वरकों केरूपमेंदेनाआवश्यकहोताहैताकिफसलकीगुणवत्ता औरउपजबेहतरहो।"
      },
      {
        question: "लाल मिट्टी के बनने की प्रक्रिया में किस प्रकार का अपक्षय मुख्य भूमिका निभाता है?",
        answers: shuffle([
          { text: "रासायनिक अपक्षय", correct: true },
          { text: "भौतिकअपक्षय", correct: false },
          { text: "जैविकअपक्षय", correct: false },
          { text: "ज्वालामुखीय अपक्षय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टीकानिर्माण मुख्यरूपसेरासायनिक अपक्षयकेकारणहोताहै,जिसमेंचट्टानों केखनिजतत्वपानीऔरवायुकेसंपर्कमेंआकरटूटतेहैं।<br><br><i class='fa-solid fa-angles-right icon'></i> लोहेकेऑक्साइड्स कीउपस्थिति सेमिट्टीलालरंगकीहोजातीहै।"
      },
      {
        question: "भारत में भुरभुरी मिट्टी मुख्यतः किन प्रकार की चट्टानों के अपक्षय से बनती है?",
        answers: shuffle([
          { text: "आर्कोज़", correct: false },
          { text: "ग्रेनाइट औरग्रेनोडियोराइट", correct: true },
          { text: "बेसाल्ट", correct: false },
          { text: "चूनापत्थर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भुरभुरी मिट्टीमुख्यरूपसेग्रेनाइट औरग्रेनोडियोराइट जैसीमूलचट्टानों केअपक्षयसेबनतीहै।<br><br><i class='fa-solid fa-angles-right icon'></i> इनचट्टानों काटूटनाऔरविघटनमिट्टीकेविभिन्न कणोंकासंतुलित मिश्रणबनाताहै,जोखेतीकेलिएउपयुक्त होतीहै।"
      },
      {
        question: "लैटराइट मिट्टी में अम्लीयता क्यों अधिक होती है?",
        answers: shuffle([
          { text: "ज्वालामुखीय क्रियाओं केकारण", correct: false },
          { text: "अधिकवर्षाऔरअपक्षयकेकारणपोषकतत्वोंकाप्रवाह", correct: true },
          { text: "जलजमावकीवजहसे", correct: false },
          { text: "कार्बनिक पदार्थों कीअधिकता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैटराइट मिट्टीवालेक्षेत्रों मेंअधिकवर्षाहोतीहै,जिससेमिट्टीकेपौष्टिक तत्वजैसेकैल्शियम, मैग्नीशियम आदिबहजातेहैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकेकारणमिट्टीअम्लीयहोजातीहैऔरइसमेंपोषकतत्वोंकीकमीहोजातीहै।"
      },
      {
        question: "पीट मिट्टी को कृषि में किस रूप में उपयोग किया जाता है?",
        answers: shuffle([
          { text: "उर्वरक केरूपमें", correct: true },
          { text: "जलधारणकेलिए", correct: false },
          { text: "कीटनाशक केरूपमें", correct: false },
          { text: "मिट्टीसुधारककेरूपमें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीट मिट्टीजैविकअवशेषों सेसमृद्धहोतीहैऔरइसेकार्बनिक खादकेरूपमेंउपयोगकियाजाताहै।<br><br><i class='fa-solid fa-angles-right icon'></i> यहमिट्टीपौधोंकेलिएआवश्यकपोषकतत्वप्रदानकरतीहैऔरभूमिकीजलधारणक्षमताकोभीबेहतरबनातीहै।"
      },
      {
        question: "काली मिट्टी की भौगोलिक वितरण सीमा किस क्षेत्र तक है?",
        answers: shuffle([
          { text: "केवल दक्षिणभारत", correct: false },
          { text: "डेक्कनपठार,महाराष्ट्र, मध्यप्रदेशऔरगुजरात", correct: true },
          { text: "केवलउत्तरीभारत", correct: false },
          { text: "पश्चिमी रेगिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टीमुख्यरूपसेडेक्कनपठारऔरआसपासकेराज्यों जैसेमहाराष्ट्र, मध्यप्रदेश,गुजरात,तथाआंध्रप्रदेशमेंपाईजातीहै।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकीउपस्थिति ज्वालामुखीय बेसाल्ट चट्टानों केअपक्षयसेहोतीहै।"
      },
      {
        question: "लाल मिट्टी में जल धारण क्षमता कम क्यों होती है?",
        answers: shuffle([
          { text: "इसमें रेतकीमात्राअधिकहोतीहै", correct: true },
          { text: "इसमेंक्लेकीमात्राअधिकहोतीहै", correct: false },
          { text: "इसमेंकार्बनिक पदार्थों कीअधिकताहोतीहै", correct: false },
          { text: "इसमेंजलनिकासीबाधितहोतीहै", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टीमेंरेतकीमात्राअधिकहोतीहै,जिससेयहजलकोजल्दीबहादेतीहै।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकेकारणजलधारणक्षमताकमहोतीहै,जोसूखेक्षेत्रों मेंखेतीकेलिएचुनौतीपूर्ण होसकतीहै।"
      },
      {
        question: "लैटराइट मिट्टी की विशेषता क्या है जो इसे उष्णकटिबंधीय क्षेत्रों में प्रचलित बनाती है?",
        answers: shuffle([
          { text: "इसमें जलधारणक्षमताबहुतअधिकहै", correct: false },
          { text: "यहगर्मऔरआर्द्रजलवायुमेंअच्छाविकासकरतीहै", correct: true },
          { text: "यहसूखीजलवायुमेंअच्छीहोतीहै", correct: false },
          { text: "यहभारीऔरचिपचिपी होतीहै", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैटराइट मिट्टीविशेषकर उष्णकटिबंधीय औरआर्द्रजलवायुमेंपाईजातीहै,जहांअधिकवर्षाऔरतापमानकेकारणमिट्टीकेअपक्षयसेइसकानिर्माण होताहै।<br><br><i class='fa-solid fa-angles-right icon'></i> यहमिट्टीखेतीकेलिएसीमितरूपसेउपयुक्त होतीहैऔरअक्सरपथरीलीहोतीहै।"
      },
      {
        question: "पीट मिट्टी के निर्माण में किस प्रकार का पर्यावरणीय वातावरण महत्वपूर्ण होता है?",
        answers: shuffle([
          { text: "शुष्क रेगिस्तानी क्षेत्र", correct: false },
          { text: "दलदलीऔरजलजमाववालेक्षेत्र", correct: true },
          { text: "पर्वतीय क्षेत्र", correct: false },
          { text: "समुद्री तटीयक्षेत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीट मिट्टीमुख्यतः दलदलीऔरजलजमाववालेक्षेत्रों मेंबनतीहै,जहांजलकाठहरावहोताहैऔरवनस्पति अवशेषधीरे-धीरे अपघटित होतेहैं।<br><br><i class='fa-solid fa-angles-right icon'></i> येक्षेत्र उच्चनमीऔरकमऑक्सीजन वालेहोतेहैं,जोपीटमिट्टीकेनिर्माण केलिएअनुकूलहैं।"
      },
      {
        question: "भारतमें काली मिट्टी को सामान्यतः किस अन्य नाम से जाना जाता है?",
        answers: shuffle([
          { text: "रेगुर मिट्टी", correct: true },
          { text: "बांगरमिट्टी", correct: false },
          { text: "खादर मिट्टी", correct: false },
          { text: "लेटेराइट मिट्टी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी को रेगुर मिट्टी के नाम सेभी जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मुख्यतः डेक्कनपठार में पाई जाती है और कपासकी खेती के लिए अत्यंतउपयुक्त है क्योंकि इसमेंजल धारण क्षमता अधिक होती है।"
      },
      {
        question: "भारत में काली मिट्टी की जल धारण क्षमता अन्य मिट्टियों की तुलना में कैसी होती है?",
        answers: shuffle([
          { text: "बहुत कम", correct: false },
          { text: "मध्यम", correct: false },
          { text: "अधिक", correct: true },
          { text: "बिल्कुल नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टीमेंमिट्टीकेकणोंकेबीचछोटेछिद्रहोतेहैं,जोजलकोलंबेसमयतकरोककररखतेहैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकीजलधारणक्षमताअन्यमिट्टियों जैसेलालयारेतीलीमिट्टीकीतुलनामेंबहुतअधिकहोतीहै,जिससेयहसूखेक्षेत्रों मेंभीफसलोंकेलिएउपयुक्त रहतीहै।"
      },
      {
        question: "लैटराइट मिट्टी में मुख्यतः कौन-कौन से खनिज पाए जाते हैं?",
        answers: shuffle([
          { text: "कैल्शियम औरसोडियम", correct: false },
          { text: "लौहऑक्साइड औरएल्यूमिनियम ऑक्साइड", correct: true },
          { text: "पोटैशियम औरमैग्नीशियम", correct: false },
          { text: "सिलिकाऔरकार्बोनेट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैटराइट मिट्टीमेंलौहऑक्साइड (Fe2O3) और एल्यूमिनियम ऑक्साइड (Al2O3) की अधिकताहोतीहै,जोमिट्टीकोलालयाजंगलीरंगदेतीहै।<br><br><i class='fa-solid fa-angles-right icon'></i> येखनिजमिट्टीकेकठोरपनऔरअम्लीयप्रकृति केलिएजिम्मेदार हैं।"
      },
      {
        question: "लाल मिट्टी का उत्पादन किस प्रकार के क्षेत्र में अधिक होता है?",
        answers: shuffle([
          { text: "रेगिस्तानी क्षेत्र", correct: false },
          { text: "पर्वतीय क्षेत्र", correct: false },
          { text: "मध्यभारतकेपठारीक्षेत्र", correct: true },
          { text: "तटीयक्षेत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टीमुख्यतः मध्यभारतकेपठारीक्षेत्रों, जैसेछत्तीसगढ़, झारखंड,ओडिशाऔरमहाराष्ट्र केकुछभागोंमेंपाईजातीहै।<br><br><i class='fa-solid fa-angles-right icon'></i> इनक्षेत्रों मेंगर्मऔरआर्द्रजलवायुकेकारणचट्टानों काअपक्षयहोताहैजिससेलालमिट्टीबनतीहै।"
      },
      {
        question: "भुरभुरी मिट्टी में पोषक तत्वों का संतुलन किस कारण होता है?",
        answers: shuffle([
          { text: "उच्च कार्बनिक पदार्थ", correct: false },
          { text: "संतुलित रेत,दोमटऔरमिट्टीकेकण", correct: true },
          { text: "अधिकजलधारणक्षमता", correct: false },
          { text: "अधिकलोहेकीमात्रा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भुरभुरी मिट्टीमेंरेत,दोमटऔरचिकनीमिट्टीकासंतुलित मिश्रणहोताहै,जिससेइसमेंपोषकतत्वोंकासंतुलनबनारहताहै।<br><br><i class='fa-solid fa-angles-right icon'></i> यहमिश्रणफसलोंकेलिएउपयुक्त होताहैक्योंकि यहजलनिकासीऔरजलधारणदोनोंमेंसंतुलनबनाएरखताहै।"
      },
      {
        question: "पीट मिट्टी का भंडार किस प्रकार की पारिस्थितिक तंत्र में अधिक पाया जाता है?",
        answers: shuffle([
          { text: "रेगिस्तानी पारिस्थितिकी तंत्र", correct: false },
          { text: "दलदलीऔरदलदलीवनक्षेत्र", correct: true },
          { text: "शुष्कघासकेमैदान", correct: false },
          { text: "पर्वतीय क्षेत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीट मिट्टीमुख्यरूपसेदलदली,जलजमाववालेक्षेत्रों औरदलदलीवनक्षेत्रों मेंपाईजातीहै।<br><br><i class='fa-solid fa-angles-right icon'></i> यहांपरजैविकअवशेष,जैसेपेड़-पौधों के अवशेषअपघटितहोकरपीटमिट्टीबनातेहैं,जोकार्बनिक पदार्थों सेसमृद्धहोतीहै।"
      },
      {
        question: "काली मिट्टी की विशेषता कौन-सी फसल के लिए इसे उपयुक्त बनाती है?",
        answers: shuffle([
          { text: "गेहूं", correct: false },
          { text: "चावल", correct: false },
          { text: "कपास", correct: true },
          { text: "ज्वार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टीकीजलधारणक्षमताऔरपोषकतत्वोंकीउपलब्धता इसेकपासकेलिएविशेषरूपसेउपयुक्त बनातीहै।<br><br><i class='fa-solid fa-angles-right icon'></i> यहमिट्टीकपासकीजड़ोंकोआवश्यकनमीऔरपोषणप्रदानकरतीहै,जिससेकपासकीपैदावार अधिकहोतीहै।"
      },
      {
        question: "लाल मिट्टी की उर्वरता बढ़ाने के लिए क्या उपाय किए जा सकते हैं?",
        answers: shuffle([
          { text: "केवल सिंचाई", correct: false },
          { text: "जैविकखादऔरनाइट्रोजन उर्वरकों काप्रयोग", correct: true },
          { text: "अधिकपानीदेना", correct: false },
          { text: "मिट्टीकोसुखाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टीमेंनाइट्रोजन औरकार्बनिक पदार्थों कीकमीहोतीहै,इसलिएजैविकखादऔरनाइट्रोजन युक्तउर्वरकों काप्रयोगकरइसकीउर्वरता बढ़ाईजासकतीहै।<br><br><i class='fa-solid fa-angles-right icon'></i> इससेमिट्टीकीसंरचनासुधरतीहैऔरफसलउत्पादन बेहतरहोताहै।"
      },
      {
        question: "लैटराइट मिट्टी की संरचना में कौन-सी प्रक्रिया महत्वपूर्ण भूमिका निभाती है?",
        answers: shuffle([
          { text: "अवक्षय औरघुलनशीलता", correct: true },
          { text: "जलनिकासी", correct: false },
          { text: "कार्बनसंधारण", correct: false },
          { text: "ह्यूमसनिर्माण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैटराइट मिट्टीमुख्यतः अवक्षय (अपक्षय)कीप्रक्रिया सेबनतीहै,जिसमेंखनिजपदार्थघुलकरबहजातेहैंऔरलोहेवएल्यूमिनियम ऑक्साइड शेषरहजातेहैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यहप्रक्रिया मिट्टीकोकठोर,अम्लीयऔरपोषकतत्वोंमेंकमीवालाबनातीहै।"
      },
      {
        question: "भारत में भुरभुरी मिट्टी की खेती के लिए कौन से क्षेत्र अधिक उपयुक्त माने जाते हैं?",
        answers: shuffle([
          { text: "हिमालय कीतलहटी", correct: false },
          { text: "गंगाऔरब्रह्मपुत्र घाटीकेमैदान", correct: true },
          { text: "डेक्कनपठार", correct: false },
          { text: "रेगिस्तानी क्षेत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भुरभुरी मिट्टीगंगा-यमुना घाटी, ब्रह्मपुत्र घाटीऔरउत्तरपूर्वीभारतकेमैदानों मेंअधिकपाईजातीहै।<br><br><i class='fa-solid fa-angles-right icon'></i> येक्षेत्र सिंचाईकेलिएअनुकूलहैंऔरयहांकीमिट्टीकृषिकेलिएउपयुक्त बनतीहै।"
      },
      {
        question: "पीट मिट्टी की जल धारण क्षमता और उर्वरता के बारे में क्या कहा जा सकता है?",
        answers: shuffle([
          { text: "कम जलधारणऔरकमउर्वरक", correct: false },
          { text: "उच्चजलधारणऔरउच्चउर्वरक", correct: true },
          { text: "उच्चजलधारणलेकिनकमउर्वरक", correct: false },
          { text: "कमजलधारणलेकिनउच्चउर्वरक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीट मिट्टीकार्बनिक पदार्थों सेभरपूरहोतीहै,इसलिएइसकीजलधारणक्षमताऔरउर्वरता दोनोंउच्चहोतीहैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यहमिट्टीपौधोंकोआवश्यकपोषणप्रदानकरतीहैऔरजलकोलंबेसमयतकरखतीहै,जिससेकृषिकेलिएलाभकारी होतीहै।"
      },
      {
        question: "भारत में काली मिट्टी की रंगत किस कारण से काली होती है?",
        answers: shuffle([
            { text: "जलीय अवशेषों केकारण", correct: false },
            { text: "लौहऔरमैग्नीशियम केऑक्साइड केकारण", correct: true },
            { text: "कार्बनिक पदार्थों केकारण", correct: false },
            { text: "सिलिकाकीउपस्थिति केकारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टीकारंगमुख्यरूपसेलौहऔरमैग्नीशियम केऑक्साइड केकारणहोताहै।<br><br><i class='fa-solid fa-angles-right icon'></i> येऑक्साइड्स बेसाल्ट चट्टानों केअपक्षयसेउत्पन्न होतेहैंऔरमिट्टीकोकालारंगदेतेहैं।<br><br><i class='fa-solid fa-angles-right icon'></i> साथही,कालीमिट्टीमेंकार्बनिक पदार्थभीहोतेहैंजोमिट्टीकीउर्वरता कोबढ़ातेहैं।"
    },
    {
        question: "लाल मिट्टी में पोषक तत्वों की कमी का मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "जल कीकमी", correct: false },
            { text: "अधिकवर्षाऔरधूप", correct: false },
            { text: "अपक्षयऔरपोषकतत्वोंकाबहाव", correct: true },
            { text: "अधिककार्बनिक पदार्थ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टीमेंवर्षाकेकारणपोषकतत्वजैसेकैल्शियम, नाइट्रोजन, फॉस्फोरस आदिबहजातेहैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकेअलावा,अपक्षयकीप्रक्रिया केचलतेमिट्टीमेंपोषकतत्वोंकीकमीहोजातीहै,जिससेइसकीउर्वरता कमहोजातीहै।"
    },
    {
        question: "भुरभुरीमिट्टी का निर्माण मुख्यतः किस प्रक्रिया द्वारा होता है?",
        answers: shuffle([
            { text: "ज्वालामुखीय गतिविधियों द्वारा", correct: false },
            { text: "हिमनदोंके कटाव द्वारा", correct: false },
            { text: "नदियोंद्वारा लाई गई तलछट के जमाव से", correct: true },
            { text: "रेगिस्तानी हवाओं द्वारा बालू के संचयन से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भुरभुरी मिट्टी (जलोढ़ मिट्टी) का निर्माण मुख्यरूप से नदियों केबहाव द्वारा लाई गई बारीक तलछट (रेत, गाद और चिकनी मिट्टी) के जमाव सेहोता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह तलछट नदियोंके मैदानों और डेल्टा क्षेत्रोंमें जमा होती है, जिससे यह मिट्टी अत्यधिकउपजाऊ बनती है।"
    },
    {
        question: "लैटराइट मिट्टी की कठोरता का कारण क्या है?",
        answers: shuffle([
            { text: "उच्च कार्बनिक पदार्थ", correct: false },
            { text: "हाइड्रॉक्साइड औरऑक्साइड केजमाव", correct: true },
            { text: "अधिकरेतकाहोना", correct: false },
            { text: "मिट्टीकीअसंतुलित संरचना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैटराइट मिट्टीमेंलौहऔरएल्यूमिनियम केहाइड्रॉक्साइड वऑक्साइड जमावकेकारणकठोरऔरसख्तहोजातीहै।<br><br><i class='fa-solid fa-angles-right icon'></i> यहविशेषता इसेखेतीकेलिएसीमितरूपसेउपयुक्त बनातीहैऔरअक्सरइसेपत्थरजैसामानाजाताहै।"
    },
    {
        question: "भारतमें काली मिट्टी की सामान्य गहराई कितनी होती है?",
        answers: shuffle([
            { text: "कुछइंच से 1-2 फीट तक", correct: false },
            { text: "कुछफीट से लेकर कई मीटर तक", correct: true },
            { text: "100 फीट से अधिक", correct: false },
            { text: "केवलकुछ सेंटीमीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी की गहराई परिवर्तनशीलहोती है, लेकिन यह आमतौर परगहरी मानी जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कुछ फीटसे लेकर कई मीटर तकगहरी हो सकती है,जो इसे पानी को लंबे समयतक धारण करने में सक्षम बनाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> दक्कन पठार के कुछ क्षेत्रोंमें इसकी गहराई 20 फीट या उससे भीअधिक पाई जा सकती है।"
    },
    {
        question: "पीट मिट्टी किस प्रकार के कार्बनिक पदार्थों से समृद्ध होती है?",
        answers: shuffle([
            { text: "हरे पत्तेऔरपौधोंकेअवशेष", correct: true },
            { text: "जानवरों केअवशेष", correct: false },
            { text: "कोयलाऔरखनिजतेल", correct: false },
            { text: "ज्वालामुखीय चट्टानों केअवशेष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीट मिट्टीमुख्यतः दलदलीइलाकोंमेंहरेपत्तों,पौधोंऔरअन्यजैविकअवशेषों केअपघटनसेबनतीहै।<br><br><i class='fa-solid fa-angles-right icon'></i> यहकार्बनिक पदार्थमिट्टीकोसमृद्धबनातेहैंऔरइसमेंपोषकतत्वोंकीमात्राअधिकहोतीहै।"
    },
    {
        question: "लाल मिट्टी में फसल उत्पादन के लिए उपयुक्तता किस कारण सीमित होती है?",
        answers: shuffle([
            { text: "जल धारणक्षमताअधिकहोना", correct: false },
            { text: "पोषकतत्वोंकीकमीऔरअम्लीयता", correct: true },
            { text: "जलनिकासीकीकमी", correct: false },
            { text: "मिट्टीकाभारीहोना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टीमेंपोषकतत्वोंकीकमीऔरअधिकअम्लीयता केकारणफसलउत्पादन सीमितहोताहै।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकेसुधारकेलिएजैविकखादऔरउर्वरकों काउपयोगआवश्यकहैताकिमिट्टीकीउर्वरता बढ़ाईजासके।"
    },
    {
        question: "भारत में लैटराइट मिट्टी के प्रमुख क्षेत्र कौन से हैं?",
        answers: shuffle([
            { text: "पश्चिमी रेगिस्तान", correct: false },
            { text: "उष्णकटिबंधीय क्षेत्र जैसेकर्नाटक, तमिलनाडु औरओडिशा", correct: true },
            { text: "गंगामैदान", correct: false },
            { text: "हिमालयी क्षेत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैटराइट मिट्टीउष्णकटिबंधीय औरआर्द्रक्षेत्रों मेंअधिकपाईजातीहै,जैसेकर्नाटक, तमिलनाडु, ओडिशा,तथाकेरलकेभाग।<br><br><i class='fa-solid fa-angles-right icon'></i> यहांकीउच्चवर्षाऔरतापमानसेचट्टानों काअपक्षयहोताहै,जिससेलैटराइट मिट्टीबनतीहै।"
    },
    {
        question: "भुरभुरीमिट्टी की जल निकासी क्षमता अच्छी क्यों होती है?",
        answers: shuffle([
            { text: "इसमेंकेवल रेत की मात्रा अधिकहोती है", correct: false },
            { text: "इसमेंमिट्टी के कण घनेहोते हैं", correct: false },
            { text: "इसमें जल का जमावहोता है", correct: false },
            { text: "इसमेंरेत, गाद और चिकनी मिट्टी का संतुलित मिश्रण होता है", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भुरभुरी मिट्टी (जलोढ़ मिट्टी) में रेत, गाद और चिकनी मिट्टी का संतुलित मिश्रण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> रेत के कण जलनिकासी को बेहतर बनातेहैं, जबकि गाद और चिकनी मिट्टीजल धारण क्षमता में मदद करती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह संतुलन हीमिट्टी को अच्छी जलनिकासी और पर्याप्त नमीधारण करने में सक्षम बनाता है, जिससे यह कृषि केलिए आदर्श बनती है।"
    },
    {
        question: "पीट मिट्टी का कृषि उपयोग किस रूप में होता है?",
        answers: shuffle([
            { text: "केवल जलसंरक्षण केलिए", correct: false },
            { text: "जैविकखादकेरूपमेंऔरजलधारणक्षमताबढ़ानेकेलिए", correct: true },
            { text: "भूमिकेकटावकोरोकनेकेलिए", correct: false },
            { text: "मिट्टीकेसुधारककेरूपमेंनहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीट मिट्टीजैविकपदार्थों सेसमृद्धहोतीहैऔरइसेकार्बनिक खादकेरूपमेंप्रयोगकियाजाताहै।<br><br><i class='fa-solid fa-angles-right icon'></i> यहमिट्टीकीजलधारणक्षमताबढ़ातीहैऔरपौधोंकोआवश्यकपोषकतत्वप्रदानकरतीहै,जिससेकृषिउत्पादन मेंसुधारहोताहै।"
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