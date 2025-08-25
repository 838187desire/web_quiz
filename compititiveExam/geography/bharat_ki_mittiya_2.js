const questions = [
  {
    topHeading: "भारत की मिट्टियाँ पर आधारित 50 बहुविकल्पीय प्रश्न part 2  (quiz_no. 50)."
  },
  {
    question: "काली मिट्टी का निर्माण किस प्रकार के भूवैज्ञानिक कारणों से हुआ है?",
    answers: shuffle([
      { text: "तलछटी प्रक्रिया से", correct: false },
      { text: "ज्वालामुखीय गतिविधि से निकली लावा के पिघलने से", correct: true },
      { text: "रेतीली मिट्टी के जमा होने से", correct: false },
      { text: "नदियों द्वारा ले जाई गई मिट्टी के जमाव से", correct: false },
    ]),
    Explanation:
      "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी का निर्माण मुख्यतः ज्वालामुखीय बेसाल्ट चट्टानों के अपक्षय से होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह लावा के पिघलने और ठंडे होने पर बनी चट्टानों के टूटने से बनती है, जो सूखे क्षेत्र में धीमी गति से अपक्षय होकर गाढ़ी और काली मिट्टी बनती है।",
  },
  {
    question: "भारत में लाल मिट्टी की उपस्थिति किस प्रकार की जलवायु के साथ जुड़ी है?",
    answers: shuffle([
      { text: "ठंडी और सूखी जलवायु", correct: false },
      { text: "गर्म और आर्द्र जलवायु", correct: true },
      { text: "शुष्क रेगिस्तानी जलवायु", correct: false },
      { text: "हिमालयी पर्वतीय जलवायु", correct: false },
    ]),
    Explanation:
      "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टी मुख्यतः उन क्षेत्रों में पाई जाती है जहाँ गर्म और आर्द्र जलवायु होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रकार की जलवायु में भारी वर्षा के कारण चट्टानों का अपक्षय होता है और लोहे के ऑक्साइड के कारण मिट्टी लाल रंग की हो जाती है।",
  },
  {
    question: "भारत में भुरभुरी मिट्टी का सबसे बड़ा स्रोत कौन सी नदियाँ हैं?",
    answers: shuffle([
      { text: "गोदावरी और कृष्णा", correct: false },
      { text: "गंगा और यमुना", correct: true },
      { text: "नर्मदा और ताप्ती", correct: false },
      { text: "ब्रह्मपुत्र और सतलज", correct: false },
    ]),
    Explanation:
      "<i class='fa-solid fa-angles-right icon'></i> गंगा और यमुना नदियों के माध्यम से बहने वाली जलधारा अपने साथ भारी मात्रा में रेत, सिल्ट और दोमट मिट्टी का तलछट लेकर मैदानों में जमा करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इससे भुरभुरी मिट्टी का निर्माण होता है जो अत्यंत उपजाऊ होती है।",
  },
  {
    question: "लैटराइट मिट्टी की कम उर्वरता का प्रमुख कारण क्या है?",
    answers: shuffle([
      { text: "अत्यधिक रेत की उपस्थिति", correct: false },
      { text: "पोषक तत्वों का भारी वर्षा के कारण बह जाना", correct: true },
      { text: "जलभराव", correct: false },
      { text: "मिट्टी में कार्बनिक पदार्थों की अधिकता", correct: false },
    ]),
    Explanation:
      "<i class='fa-solid fa-angles-right icon'></i> लैटराइट मिट्टी भारी वर्षा वाले क्षेत्रों में बनती है, जहाँ वर्षा के कारण मिट्टी से सिलिका और अन्य पोषक तत्व बह जाते हैं, जिससे मिट्टी में पोषक तत्वों की कमी हो जाती है और उसकी उर्वरता कम हो जाती है।",
  },
  {
    question: "पीट मिट्टी किस प्रकार की मिट्टी है और इसका महत्व क्या है?",
    answers: shuffle([
      { text: "रेत वाली, जलधारण क्षमता कम", correct: false },
      {
        text: "कार्बनिक पदार्थों से समृद्ध दलदली मिट्टी, जैव ईंधन और उर्वरक के रूप में उपयोगी",
        correct: true,
      },
      { text: "बेसाल्ट से बनी, भारी और कठोर", correct: false },
      { text: "सिल्ट युक्त, नदी के किनारे पाई जाने वाली", correct: false },
    ]),
    Explanation:
      "<i class='fa-solid fa-angles-right icon'></i> पीट मिट्टी दलदली क्षेत्रों में कार्बनिक अवशेषों के अपघटन से बनती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह जैव ईंधन के रूप में उपयोग होती है और कृषि में उर्वरक के तौर पर भी इसे महत्व दिया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी नमी और कार्बनिक सामग्री इसे विशेष बनाती है।",
  },
  {
    question: "लाल मिट्टी के क्षेत्र में कृषि के लिए मुख्य चुनौतियाँ क्या हैं?",
    answers: shuffle([
      { text: "जल की कमी और कठोर बनावट", correct: false },
      { text: "पोषक तत्वों की कमी और जलनिकासी की समस्या", correct: true },
      { text: "अत्यधिक जलभराव", correct: false },
      { text: "रेत का अधिक होना", correct: false },
    ]),
    Explanation:
      "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टी में नाइट्रोजन और कार्बनिक पदार्थों की कमी होती है, जिससे पोषक तत्व कम हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> साथ ही जलनिकासी ठीक से न होने से पौधों की जड़ों को नुकसान पहुँचता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इन कारणों से इस मिट्टी की कृषि उत्पादन क्षमता सीमित होती है।",
  },
  {
    question: "काली मिट्टी के किस क्षेत्र में सबसे अधिक विस्तार पाया जाता है?",
    answers: shuffle([
      { text: "राजस्थान के रेगिस्तानी क्षेत्र", correct: false },
      {
        text: "महाराष्ट्र के देवगिरी पठार, गुजरात और मध्य प्रदेश",
        correct: true,
      },
      { text: "हिमालयी क्षेत्र", correct: false },
      { text: "तटीय इलाकों", correct: false },
    ]),
    Explanation:
      "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी भारत के मध्य भागों में अधिक पाई जाती है, खासकर महाराष्ट्र के देवगिरी पठार, गुजरात, मध्य प्रदेश और आंध्र प्रदेश के कुछ हिस्सों में।<br><br><i class='fa-solid fa-angles-right icon'></i> यह क्षेत्र कपास की खेती के लिए उपयुक्त माना जाता है।",
  },
  {
    question: "भुरभुरी मिट्टी किस प्रकार की मिट्टी का मिश्रण होती है और इसकी कृषि में क्या भूमिका है?",
    answers: shuffle([
      {
        text: "रेतीली और दोमट मिट्टी का मिश्रण, उपजाऊ और जलधारण क्षमता अच्छी",
        correct: true,
      },
      { text: "केवल दोमट मिट्टी, जलधारण क्षमता कम", correct: false },
      { text: "केवल रेतीली मिट्टी, जल की कमी वाली", correct: false },
      { text: "कठोर और पथरीली मिट्टी, खेती के लिए अनुपयुक्त", correct: false },
    ]),
    Explanation:
      "<i class='fa-solid fa-angles-right icon'></i> भुरभुरी मिट्टी में रेत, दोमट और सिल्ट का मिश्रण होता है, जो इसे हल्की, उपजाऊ और जल धारण करने वाली बनाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत के गंगा-यमुना के मैदानों में पाई जाती है और मुख्यतः धान, गेहूं और गन्ने की खेती के लिए उपयुक्त है।",
  },
  {
    question:
      "लाल मिट्टी में पौधों के विकास के लिए कौन-कौन से पोषक तत्व कम होते हैं?",
    answers: shuffle([
      { text: "नाइट्रोजन, फॉस्फोरस और पोटैशियम", correct: true },
      { text: "कार्बन और हाइड्रोजन", correct: false },
      { text: "लोहा और मैग्नीशियम", correct: false },
      { text: "कैल्शियम और सल्फर", correct: false },
    ]),
    Explanation:
      "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टी में नाइट्रोजन, फॉस्फोरस और पोटैशियम जैसे आवश्यक पोषक तत्वों की कमी होती है, जिससे इसकी उर्वरता कम हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इन तत्वों की कमी के कारण फसल उत्पादन कम होता है, इसलिए खाद और उर्वरकों का उपयोग आवश्यक होता है।",
  },
  {
    question: "भारत में लैटराइट मिट्टी की उपस्थिति किन प्रमुख राज्यों में है?",
    answers: shuffle([
      { text: "महाराष्ट्र, राजस्थान, पंजाब", correct: false },
      { text: "केरल, कर्नाटक, ओडिशा, झारखंड", correct: true },
      { text: "हिमाचल प्रदेश, उत्तराखंड", correct: false },
      { text: "पश्चिम बंगाल, बिहार", correct: false },
    ]),
    Explanation:
      "<i class='fa-solid fa-angles-right icon'></i> लैटराइट मिट्टी मुख्य रूप से भारत के दक्षिणी और पूर्वी हिस्सों में केरल, कर्नाटक, ओडिशा और झारखंड जैसे राज्यों में पाई जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये क्षेत्र गर्म और आर्द्र जलवायु वाले हैं जहाँ भारी वर्षा होती है, जिससे लैटराइट मिट्टी बनती है।",
  },
  {
    question:
      "काली मिट्टी की जल धारण क्षमता अन्य मिट्टियों की तुलना में क्यों अधिक होती है?",
    answers: shuffle([
      { text: "इसमें रेत की मात्रा अधिक होती है", correct: false },
      {
        text: "इसमें महीन मिट्टी कण (क्लेय) अधिक होते हैं जो जल को अवशोषित करते हैं",
        correct: true,
      },
      { text: "यह हमेशा गीली रहती है", correct: false },
      { text: "इसमें कार्बनिक पदार्थ अधिक होते हैं", correct: false },
    ]),
    Explanation:
      "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी में क्ले कणों की अधिकता होती है, जो जल को अपने अंदर अवशोषित कर लेते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए यह मिट्टी सूखे मौसम में भी पौधों को जल प्रदान कर पाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी जल धारण क्षमता कृषि के लिए बेहद लाभकारी होती है, खासकर कपास की खेती में।",
  },
  {
    question: "लाल मिट्टी का रंग लाल क्यों होता है?",
    answers: shuffle([
      { text: "कार्बनिक पदार्थों की अधिकता के कारण", correct: false },
      {
        text: "लोहे के ऑक्साइड के कारण जो इस मिट्टी में प्रचुर मात्रा में होते हैं",
        correct: true,
      },
      { text: "सिलिका के कारण", correct: false },
      { text: "पानी की अधिकता के कारण", correct: false },
    ]),
    Explanation:
      "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टी का रंग मुख्यतः उसके अंदर पाए जाने वाले लोहे के ऑक्साइड (Fe2O3) के कारण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये ऑक्साइड मिट्टी को लाल या पीला रंग देते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> भारी वर्षा के कारण चट्टानों के अपक्षय से यह लोहे के ऑक्साइड निकलकर मिट्टी में जमा हो जाते हैं।",
  },
  {
    question: "भारत में भुरभुरी मिट्टी की उपजाऊता का प्रमुख कारण क्या है?",
    answers: shuffle([
      { text: "इसकी रेत की मात्रा अधिक होने के कारण", correct: false },
      {
        text: "नदी द्वारा लाई गई पोषक तत्वों से भरपूर तलछट के कारण",
        correct: true,
      },
      { text: "इसमें जलभराव की समस्या न होने के कारण", correct: false },
      { text: "भारी मिट्टी होने के कारण", correct: false },
    ]),
    Explanation:
      "<i class='fa-solid fa-angles-right icon'></i> भुरभुरी मिट्टी नदियों द्वारा लाई गई उपजाऊ तलछट से बनती है, जो पोषक तत्वों से भरपूर होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह नदियों के मैदानों में जमा होती है, जिससे यह खेती के लिए अत्यंत उपजाऊ होती है और प्रमुख फसलें जैसे गेहूं, चावल, दलहन अच्छी तरह उगती हैं।",
  },
  {
    question: "लैटराइट मिट्टी की जल धारण क्षमता कम क्यों होती है?",
    answers: shuffle([
      { text: "इसमें सिलिका की अधिकता के कारण", correct: false },
      { text: "यह बहुत घनी होती है", correct: false },
      {
        text: "भारी वर्षा के कारण इसमें से पोषक तत्व और जल बह जाते हैं",
        correct: true,
      },
      { text: "यह बहुत ज्यादा रेतिलीय होती है", correct: false },
    ]),
    Explanation:
      "<i class='fa-solid fa-angles-right icon'></i> लैटराइट मिट्टी मुख्य रूप से भारी वर्षा वाले क्षेत्रों में बनती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इन क्षेत्रों में बारिश की तीव्रता के कारण मिट्टी के पोषक तत्व और जल बह जाते हैं, जिससे इसकी जल धारण क्षमता कम हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मिट्टी गर्म, आर्द्र जलवायु में पाई जाती है।",
  },
  {
    question: "भारत में पीट मिट्टी के मुख्य स्रोत कौन से हैं?",
    answers: shuffle([
      { text: "रेगिस्तानी क्षेत्र", correct: false },
      { text: "दलदली और जल जमाव वाले क्षेत्र", correct: true },
      { text: "पर्वतीय क्षेत्र", correct: false },
      { text: "पठारी क्षेत्र", correct: false },
    ]),
    Explanation:
      "<i class='fa-solid fa-angles-right icon'></i> पीट मिट्टी उन क्षेत्रों में बनती है जहाँ जल जमाव होता है और जैविक पदार्थ अपघटित होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये मुख्यतः दलदली क्षेत्र और झीलों के आस-पास मिलती है, जहाँ कार्बनिक अवशेष अधिक होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मिट्टी उर्वरक और जैव ईंधन के रूप में भी उपयोगी होती है।",
  },
  {
    question: "लाल मिट्टी में फसलों की पैदावार कम होने का कारण क्या है?",
    answers: shuffle([
      { text: "जल की कमी", correct: false },
      { text: "नाइट्रोजन और कार्बनिक पदार्थों की कमी", correct: true },
      { text: "मिट्टी का कठोर होना", correct: false },
      { text: "अधिक रेत होना", correct: false },
    ]),
    Explanation:
      "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टी में मुख्यतः नाइट्रोजन और कार्बनिक पदार्थों की कमी होती है, जो पौधों के विकास के लिए आवश्यक होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके कारण फसलों की पैदावार कम होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इस मिट्टी की उर्वरता बढ़ाने के लिए खाद और उर्वरकों का प्रयोग आवश्यक होता है।",
  },
  {
    question: "भारत में काली मिट्टी के प्रमुख क्षेत्र कौन से हैं?",
    answers: shuffle([
      { text: "राजस्थान और पंजाब", correct: false },
      { text: "महाराष्ट्र, मध्य प्रदेश, गुजरात और तेलंगाना", correct: true },
      { text: "हिमाचल प्रदेश और उत्तराखंड", correct: false },
      { text: "पश्चिम बंगाल और बिहार", correct: false },
    ]),
    Explanation:
      "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी भारत के मुख्यतः मध्य क्षेत्र में फैली हुई है, खासकर महाराष्ट्र के देवगिरी पठार, मध्य प्रदेश, गुजरात और तेलंगाना में।<br><br><i class='fa-solid fa-angles-right icon'></i> यह क्षेत्र कपास की खेती के लिए उपयुक्त माने जाते हैं।",
  },
  {
    question:
      "भुरभुरी मिट्टी की बनावट कैसी होती है और यह किस कारण कृषि के लिए उपयुक्त है?",
    answers: shuffle([
      { text: "सख्त और कठोर, सिंचाई के लिए उपयुक्त", correct: false },
      {
        text: "रेत, सिल्ट और दोमट मिट्टी का संतुलित मिश्रण, जिससे जलधारण और पोषक तत्वों की उपलब्धता अच्छी होती है",
        correct: true,
      },
      { text: "केवल दोमट मिट्टी, पोषक तत्वों में कमी", correct: false },
      { text: "रेतीली मिट्टी, जलधारण क्षमता कम", correct: false },
    ]),
    Explanation:
      "<i class='fa-solid fa-angles-right icon'></i> भुरभुरी मिट्टी में रेत, सिल्ट और दोमट मिट्टी की मिश्रित बनावट होती है, जो इसे हल्का, जल धारण क्षमता वाला और पोषक तत्वों से भरपूर बनाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस कारण यह विभिन्न प्रकार की फसलों के लिए उपयुक्त होती है।",
  },
  {
    question: "लैटराइट मिट्टी की खेती में क्या प्रमुख कठिनाइयाँ होती हैं?",
    answers: shuffle([
      { text: "जलभराव और जलनिकासी की समस्या", correct: false },
      {
        text: "पोषक तत्वों की कमी और जल धारण क्षमता कम होना",
        correct: true,
      },
      { text: "भारी रेत के कारण बीज अंकुरित नहीं होते", correct: false },
      { text: "अत्यधिक ठंडा होना", correct: false },
    ]),
    Explanation:
      "<i class='fa-solid fa-angles-right icon'></i> लैटराइट मिट्टी में भारी वर्षा के कारण पोषक तत्व बह जाते हैं और इसकी जल धारण क्षमता भी कम होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इससे फसल की पैदावार प्रभावित होती है और फसलों की अच्छी सिंचाई करना चुनौतीपूर्ण हो जाता है।",
  },
  {
    question: "पीट मिट्टी को कृषि में क्यों महत्वपूर्ण माना जाता है?",
    answers: shuffle([
      { text: "इसमें जल की अधिकता होती है", correct: false },
      { text: "यह सूखी मिट्टी होती है", correct: false },
      {
        text: "यह जैविक पदार्थों से भरपूर होती है, जिससे मिट्टी की उर्वरता बढ़ती है",
        correct: true,
      },
      { text: "यह रेतीली मिट्टी के साथ मिलती है", correct: false },
    ]),
    Explanation:
      "<i class='fa-solid fa-angles-right icon'></i> पीट मिट्टी कार्बनिक अवशेषों से भरपूर होती है, जो इसे जैविक खाद के रूप में अत्यंत उपयोगी बनाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मिट्टी मिट्टी की उर्वरता बढ़ाती है और फसल उत्पादन में सहायता करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इसे कृषि में महत्व दिया जाता है।",
  },
  {
    question: "काली मिट्टी की विशेषता क्या है जो इसे कपास की खेती के लिए उपयुक्त बनाती है?",
    answers: shuffle([
      { text: "इसमें जल धारण क्षमता कम होती है", correct: false },
      { text: "यह पोषक तत्वों से समृद्ध होती है और जल को लंबे समय तक रोकती है", correct: true },
      { text: "इसमें अधिक रेत होती है", correct: false },
      { text: "यह सूखी होती है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी की जल धारण क्षमता बहुत अच्छी होती है, जिससे यह सूखे मौसम में भी पौधों को जल प्रदान करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें कैल्शियम, मैग्नीशियम और कार्बनिक पदार्थ भी अच्छी मात्रा में होते हैं, जो कपास जैसी फसल के लिए उपयुक्त होते हैं।"
  },
  {
    question: "लाल मिट्टी की बनावट और संरचना कैसी होती है?",
    answers: shuffle([
      { text: "भारी और चिकनी", correct: false },
      { text: "ढीली, रेतीली और कमजोर", correct: true },
      { text: "बहुत सघन और जल प्रतिरोधी", correct: false },
      { text: "पत्थरीली और कठोर", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टी आमतौर पर ढीली और रेतीली होती है, जिसमें जल धारण क्षमता कम होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी कमजोर बनावट के कारण यह आसानी से हवा और पानी के प्रभाव से कट जाती है, इसलिए इसकी उर्वरता बढ़ाने के लिए खाद की आवश्यकता होती है।"
  },
  {
    question: "भुरभुरी मिट्टी किस प्रकार की नदी द्वारा लाई गई तलछट से बनती है?",
    answers: shuffle([
      { text: "ज्वालामुखीय लावा के अपक्षय से", correct: false },
      { text: "हिमनदों के टुटे हुए चट्टानों से", correct: false },
      { text: "जलधारा द्वारा लाई गई रेत, सिल्ट और दोमट का मिश्रण", correct: true },
      { text: "रेगिस्तानी हवाओं द्वारा उठाई गई धूल से", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> भुरभुरी मिट्टी मुख्यतः नदियों के बहाव द्वारा लाई गई रेत, सिल्ट और दोमट मिट्टी के मिश्रण से बनती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह तलछट नदियों के मैदानों में जमा हो जाती है, जो कृषि के लिए अत्यंत उपजाऊ होती है।"
  },
  {
    question: "लैटराइट मिट्टी में भारी वर्षा किस प्रकार मिट्टी की उर्वरता को प्रभावित करती है?",
    answers: shuffle([
      { text: "पोषक तत्वों को मिट्टी में जोड़ती है", correct: false },
      { text: "पोषक तत्वों को बहा कर मिट्टी की उर्वरता घटा देती है", correct: true },
      { text: "मिट्टी को अधिक सघन बनाती है", correct: false },
      { text: "जलधारण क्षमता बढ़ाती है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैटराइट मिट्टी वाले क्षेत्रों में भारी वर्षा के कारण मिट्टी के पोषक तत्व बह जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इससे मिट्टी की उर्वरता कम हो जाती है और फसलों के विकास में बाधा आती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए खेती में उर्वरकों का उपयोग आवश्यक हो जाता है।"
  },
  {
    question: "पीट मिट्टी के निर्माण में मुख्य रूप से कौन सा कारक जिम्मेदार होता है?",
    answers: shuffle([
      { text: "शुष्क जलवायु", correct: false },
      { text: "कार्बनिक पदार्थों का अपघटन और जलजमाव", correct: true },
      { text: "रेतीली मिट्टी का जमाव", correct: false },
      { text: "बेसाल्ट चट्टानों का टूटना", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीट मिट्टी दलदली क्षेत्रों में जैविक पदार्थों के अपघटन से बनती है, जहाँ जलभराव रहता है।<br><br><i class='fa-solid fa-angles-right icon'></i> कार्बनिक अवशेषों का अधूरा अपघटन इसे उच्च जैविक सामग्री से समृद्ध करता है, जो कृषि और ऊर्जा स्रोत के रूप में उपयोगी होती है।"
  },
  {
    question: "लाल मिट्टी की कृषि के लिए सबसे बड़ी समस्या क्या है?",
    answers: shuffle([
      { text: "अत्यधिक जलभराव", correct: false },
      { text: "नाइट्रोजन और कार्बनिक पदार्थों की कमी के कारण उर्वरता की कमी", correct: true },
      { text: "जल धारण क्षमता अधिक होना", correct: false },
      { text: "कठोर सतह होना", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टी में नाइट्रोजन, फास्फोरस और कार्बनिक पदार्थों की कमी होती है, जो पौधों के विकास को प्रभावित करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इस मिट्टी में अच्छी पैदावार के लिए खाद और उर्वरकों का उपयोग अनिवार्य होता है।"
  },
  {
    question: "भारत में काली मिट्टी किन प्रमुख नदियों की घाटी में पाई जाती है?",
    answers: shuffle([
      { text: "गोदावरी और कृष्णा", correct: false },
      { text: "गंगा और यमुना", correct: false },
      { text: "नर्मदा और ताप्ती", correct: true },
      { text: "ब्रह्मपुत्र और सतलज", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी मुख्य रूप से नर्मदा और ताप्ती नदियों की घाटी में फैली हुई है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह क्षेत्र मध्य भारत के पठारी इलाकों में आता है, जहां ज्वालामुखीय बेसाल्ट चट्टानों के अपक्षय से यह मिट्टी बनी है।"
  },
  {
    question: "भुरभुरी मिट्टी के क्षेत्र में किस प्रकार की फसलें प्रमुखता से उगाई जाती हैं?",
    answers: shuffle([
      { text: "कपास और मूंगफली", correct: false },
      { text: "गेहूं, धान, मक्का और गन्ना", correct: true },
      { text: "बाजरा और ज्वार", correct: false },
      { text: "चाय और कॉफी", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> भुरभुरी मिट्टी मुख्य रूप से गंगा और यमुना के मैदानों में पाई जाती है, जहां गेहूं, धान, मक्का और गन्ने जैसी फसलें प्रमुखता से उगाई जाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मिट्टी उपजाऊ और जल धारण करने वाली होती है।"
  },
  {
    question: "लैटराइट मिट्टी की उपस्थिति मुख्यतः किस प्रकार की जलवायु क्षेत्र में होती है?",
    answers: shuffle([
      { text: "शुष्क और ठंडी जलवायु", correct: false },
      { text: "गर्म और आर्द्र जलवायु", correct: true },
      { text: "शीतोष्ण जलवायु", correct: false },
      { text: "रेगिस्तानी जलवायु", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैटराइट मिट्टी मुख्य रूप से भारत के उन भागों में पाई जाती है जहां गर्म और आर्द्र जलवायु होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> भारी वर्षा के कारण चट्टानों का अपक्षय होता है और सिलिका बह जाती है, जिससे मिट्टी में लौह ऑक्साइड अधिक रह जाता है।"
  },
  {
    question: "पीट मिट्टी को कृषि में उपयोगी बनाने के लिए किस प्रकार का उपचार किया जाता है?",
    answers: shuffle([
      { text: "इसे सुखाना और जल निकासी बढ़ाना", correct: true },
      { text: "इसमें रेत मिलाना", correct: false },
      { text: "भारी खाद डालना", correct: false },
      { text: "इसे जलभराव की स्थिति में रखना", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीट मिट्टी में अत्यधिक जलभराव होता है, इसलिए इसे कृषि में उपयोगी बनाने के लिए इसे सुखाना और जल निकासी सुधारना आवश्यक होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इससे मिट्टी की बनावट बेहतर होती है और फसलों की जड़ों को ऑक्सीजन मिलती है।"
  },
  {
    question: "काली मिट्टी का निर्माण किस प्रकार की चट्टानों के अपक्षय से होता है?",
    answers: shuffle([
      { text: "ग्रेनाइट", correct: false },
      { text: "बेसाल्ट (ज्वालामुखीय चट्टान)", correct: true },
      { text: "मार्बल", correct: false },
      { text: "स्लेट", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी का निर्माण मुख्यतः ज्वालामुखीय बेसाल्ट चट्टानों के अपक्षय से होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये चट्टानें मध्य भारत के पठार क्षेत्रों में पाई जाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> बेसाल्ट की उच्च लौह और मैग्नीशियम सामग्री के कारण मिट्टी काली और उपजाऊ होती है।"
  },
  {
    question: "लाल मिट्टी में पोषक तत्वों की कमी को पूरा करने के लिए सबसे उपयुक्त उपाय क्या है?",
    answers: shuffle([
      { text: "सिंचाई बढ़ाना", correct: false },
      { text: "रासायनिक उर्वरकों का उपयोग", correct: false },
      { text: "जैविक खाद और नाइट्रोजन युक्त उर्वरकों का प्रयोग", correct: true },
      { text: "मिट्टी को अधिक गाढ़ा करना", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टी में नाइट्रोजन और कार्बनिक पदार्थों की कमी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इसे उपजाऊ बनाने के लिए जैविक खाद और नाइट्रोजन युक्त रासायनिक उर्वरकों का मिश्रित उपयोग आवश्यक होता है, जो मिट्टी की उर्वरता बढ़ाते हैं और पौधों के विकास को प्रोत्साहित करते हैं।"
  },
  {
    question: "भुरभुरी मिट्टी का प्रमुख क्षेत्र कौन-सा है?",
    answers: shuffle([
      { text: "राजस्थान का थार रेगिस्तान", correct: false },
      { text: "गंगा-यमुना मैदान", correct: true },
      { text: "अरावली पर्वतमाला", correct: false },
      { text: "दक्कन पठार", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> भुरभुरी मिट्टी मुख्यतः गंगा-यमुना के मैदानों में पाई जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह नदियों द्वारा लाई गई उपजाऊ तलछट से बनी है, जो इसे खेती के लिए अत्यंत उपयुक्त बनाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहां की जलवायु और मिट्टी दोनों कृषि के लिए अनुकूल हैं।"
  },
  {
    question: "लैटराइट मिट्टी की उपजाऊता कम होने का मुख्य कारण क्या है?",
    answers: shuffle([
      { text: "जल की अधिकता", correct: false },
      { text: "भारी वर्षा के कारण पोषक तत्वों का बह जाना", correct: true },
      { text: "अत्यधिक रेत होना", correct: false },
      { text: "ठंडे मौसम की उपस्थिति", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैटराइट मिट्टी वाले क्षेत्रों में भारी वर्षा के कारण मिट्टी से पोषक तत्व बह जाते हैं, जिससे इसकी उर्वरता कम हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके परिणामस्वरूप यह कृषि के लिए कम उपयुक्त होती है, खासकर जब तक कि उपयुक्त उर्वरकों का उपयोग न किया जाए।"
  },
  {
    question: "पीट मिट्टी में मुख्य रूप से कौन से तत्व पाए जाते हैं जो इसे कृषि के लिए उपयुक्त बनाते हैं?",
    answers: shuffle([
      { text: "कार्बनिक पदार्थ और नाइट्रोजन", correct: true },
      { text: "अधिक मात्रा में रेत और सिल्ट", correct: false },
      { text: "बेसाल्ट के कण", correct: false },
      { text: "घुलनशील लवण", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीट मिट्टी जैविक अवशेषों से समृद्ध होती है जिसमें नाइट्रोजन और कार्बनिक पदार्थ प्रचुर मात्रा में होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये तत्व मिट्टी की उर्वरता बढ़ाते हैं और पौधों के विकास के लिए आवश्यक पोषक तत्व प्रदान करते हैं।"
  },
  {
    question: "भारत में काली मिट्टी की खेती के लिए उपयुक्त फसल कौन-सी है?",
    answers: shuffle([
      { text: "बाजरा", correct: false },
      { text: "कपास", correct: true },
      { text: "ज्वार", correct: false },
      { text: "गेहूं", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी की जल धारण क्षमता और पोषक तत्वों की उपस्थिति इसे कपास की खेती के लिए सबसे उपयुक्त बनाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> कपास को ‘मधुमक्खी की मिट्टी’ भी कहा जाता है क्योंकि यह मिट्टी कपास को बढ़ने के लिए आवश्यक सभी पोषक तत्व प्रदान करती है।"
  },
  {
    question: "लाल मिट्टी किस प्रकार के जलवायु में सबसे अधिक पाई जाती है?",
    answers: shuffle([
      { text: "शुष्क और शीतोष्ण जलवायु", correct: false },
      { text: "आर्द्र और उपोष्णकटिबंधीय जलवायु", correct: true },
      { text: "अत्यधिक ठंडी जलवायु", correct: false },
      { text: "रेगिस्तानी जलवायु", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टी मुख्य रूप से आर्द्र और उपोष्णकटिबंधीय जलवायु वाले क्षेत्रों में पाई जाती है जहाँ मध्यम वर्षा होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह जलवायु चट्टानों के अपक्षय को बढ़ावा देती है और लाल मिट्टी के निर्माण में मदद करती है।"
  },
  {
    question: "भुरभुरी मिट्टी की जल धारण क्षमता क्यों मध्यम होती है?",
    answers: shuffle([
      { text: "इसमें रेत की अधिकता के कारण जल जल्दी निकल जाता है", correct: false },
      { text: "इसमें सिल्ट और दोमट मिट्टी का संतुलित मिश्रण होता है, जो जल धारण में सहायक है", correct: true },
      { text: "यह बहुत घनी होती है", correct: false },
      { text: "यह जल अवशोषित नहीं करती", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> भुरभुरी मिट्टी में रेत, सिल्ट और दोमट मिट्टी का संतुलित मिश्रण होता है, जिससे यह जल को उचित मात्रा में अवशोषित और संचित कर पाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इसकी जल धारण क्षमता न तो बहुत अधिक होती है और न ही बहुत कम।"
  },
  {
    question: "लैटराइट मिट्टी में किस तत्व की मात्रा अधिक होती है जो इसे विशेष बनाता है?",
    answers: shuffle([
      { text: "कैल्शियम", correct: false },
      { text: "लौह (Iron)", correct: true },
      { text: "नाइट्रोजन", correct: false },
      { text: "मैग्नीशियम", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैटराइट मिट्टी में लौह ऑक्साइड की मात्रा अधिक होती है, जो इसे लाल या भूरा रंग देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस उच्च लौह सामग्री के कारण लैटराइट मिट्टी लौह की खान के रूप में भी महत्वपूर्ण होती है।"
  },
  {
    question: "पीट मिट्टी में उच्च जलभराव क्यों होता है?",
    answers: shuffle([
      { text: "इसमें रेत की अधिकता के कारण", correct: false },
      { text: "यह जलधारण क्षमता वाली मिट्टी है जिसमें पानी निकलने के लिए मार्ग कम होते हैं", correct: true },
      { text: "इसमें रासायनिक लवण अधिक होते हैं", correct: false },
      { text: "यह पर्वतीय क्षेत्र की मिट्टी होती है", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीट मिट्टी दलदली और जलजमाव वाले क्षेत्रों में बनती है, जहां पानी का निकास धीमा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मिट्टी जलधारण क्षमता वाली होती है, जिससे जलजमाव रहता है और सूखे की स्थिति में भी जैविक पदार्थों का संरक्षण होता है।"
  },
  {
    question: "भारत में काली मिट्टी की प्रमुख विशेषता क्या है?",
    answers: shuffle([
      { text: "यह अम्लीयप्रकृति कीहोतीहै", correct: false },
      { text: "इसमेंजलधारणक्षमताऔरसूखेमेंजलउपलब्धता अधिकहोतीहै", correct: true },
      { text: "यहबहुतअधिकरेतमिलाकरबनतीहै", correct: false },
      { text: "यहकेवलरेगिस्तानी क्षेत्रों मेंपाईजातीहै", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टीकीप्रमुखविशेषता इसकीउत्कृष्ट जलधारणक्षमताहै,जिससेयहसूखेकीअवधिमेंभीफसलोंकोजलप्रदानकरतीहै।<br><br><i class='fa-solid fa-angles-right icon'></i> यहमिट्टीमुख्यतः बेसाल्ट चट्टानों केअपक्षयसेबनीहोतीहैऔरइसमेंकैल्शियम, मैग्नीशियम जैसेपोषकतत्वप्रचुरमात्रामेंहोतेहैं।"
  },
  {
    question: "लाल मिट्टी की बनावट कृषि के लिए किस प्रकार चुनौतीपूर्ण होती है?",
    answers: shuffle([
      { text: "अत्यधिक घनीऔरजलरोधीहोतीहै", correct: false },
      { text: "जलधारणक्षमताकमहोनेकेकारणफसलेंजल्दीसूखजातीहैं", correct: true },
      { text: "अधिककार्बनिक पदार्थहोनेसेफसलोंकोनुकसानपहुंचाती है", correct: false },
      { text: "यहअधिकनमीयुक्त होतीहै", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टीकीजलधारणक्षमताकमहोतीहै,जिससेसूखेकेसमयफसलोंकोजलकीकमीहोजातीहै।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकेअलावा,इसमेंनाइट्रोजन औरकार्बनिक पदार्थों कीकमीभीहोतीहै,जिससेइसकीउर्वरता सीमितहोजातीहै।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिएइसेसुधारने केलिएउर्वरकों औरखादकाउपयोगआवश्यकहोताहै।"
  },
  {
    question: "भुरभुरी मिट्टी को उपजाऊ बनाने के लिए कौन सा मुख्य प्रबंधन आवश्यक है?",
    answers: shuffle([
      { text: "भारी सिंचाई", correct: false },
      { text: "संतुलित उर्वरकउपयोगऔरजलप्रबंधन", correct: true },
      { text: "रेतमिलाना", correct: false },
      { text: "खेतोंकीपूरीतरहजुताईनकरना", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> भुरभुरी मिट्टीमेंजलऔरपोषकतत्वोंकासंतुलनबनाएरखनाआवश्यकहै।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकेलिएसिंचाईकीउचितव्यवस्था औरउर्वरकों कासंतुलित प्रयोगखेतीकोसफलबनाताहै।<br><br><i class='fa-solid fa-angles-right icon'></i> इससेमिट्टीकीउर्वरता बनीरहतीहैऔरउत्पादन मेंवृद्धिहोतीहै।"
  },
  {
    question: "लैटराइट मिट्टी में फास्फोरस की कमी क्यों होती है?",
    answers: shuffle([
      { text: "यह जलमेंघुलकरबहजाताहै", correct: false },
      { text: "भारीवर्षाकेकारणपोषकतत्वबहजातेहैं", correct: true },
      { text: "फास्फोरस कभीभीप्राकृतिक रूपमेंमौजूदनहींहोता", correct: false },
      { text: "फास्फोरस कठोरचट्टानों मेंफंसारहताहै", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैटराइट मिट्टीवालेक्षेत्रों मेंअधिकवर्षाहोतीहै,जिससेपोषकतत्वबहजातेहैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसप्रक्रिया मेंफास्फोरस भीबहकरमिट्टीसेबाहरनिकलजाताहै,जिसकेकारणइसमिट्टीकीउर्वरता कमहोतीहैऔरइसेफसलोंकेलिएउपयुक्त बनानेहेतुउर्वरकों कीआवश्यकता होतीहै।"
  },
  {
    question: "पीट मिट्टी किस प्रकार के जलवायु और भू-भाग में बनती है?",
    answers: shuffle([
      { text: "सूखे औररेगिस्तानी क्षेत्र", correct: false },
      { text: "दलदली,जलजमाववालेक्षेत्र", correct: true },
      { text: "पहाड़ीऔरठंडेक्षेत्र", correct: false },
      { text: "पर्वतीय पठार", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीट मिट्टीमुख्यरूपसेजलजमावऔरदलदलीक्षेत्र मेंबनतीहै,जहाँजैविकपदार्थअपघटितहोकरजमाहोतेहैं।<br><br><i class='fa-solid fa-angles-right icon'></i> येमिट्टीकार्बनिक पदार्थों सेसमृद्धहोतीहैऔरजलकीअधिकताकेकारणउसमेंसूक्ष्मजीव सक्रियरहतेहैं,जोजैविकचक्रकोनियंत्रित करतेहैं।"
  },
  {
    question: "भारत में लाल मिट्टी मुख्यतः किन राज्यों में पाई जाती है?",
    answers: shuffle([
      { text: "पंजाब, हरियाणा", correct: false },
      { text: "तमिलनाडु, आंध्रप्रदेश,ओडिशा,छत्तीसगढ़", correct: true },
      { text: "राजस्थान, गुजरात", correct: false },
      { text: "उत्तराखंड, हिमाचलप्रदेश", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टीभारतकेपूर्वीऔरदक्षिणी हिस्सों मेंअधिकपाईजातीहै,विशेषकर तमिलनाडु, आंध्रप्रदेश,ओडिशा,छत्तीसगढ़ जैसेराज्यों में।<br><br><i class='fa-solid fa-angles-right icon'></i> यहक्षेत्र आर्द्रऔरउपोष्णकटिबंधीय जलवायुवालाहोताहै,जोलालमिट्टीकेनिर्माण केलिएअनुकूलहै।"
  },
  {
    question: "भुरभुरी मिट्टी के क्षेत्र में जल संरक्षण के लिए कौन सा तरीका उपयुक्त है?",
    answers: shuffle([
      { text: "सिंचाई बंदकरदेना", correct: false },
      { text: "वर्षाजलसंचयनऔरबहावनियंत्रण", correct: true },
      { text: "मिट्टीकोपूरीतरहजुताईकरना", correct: false },
      { text: "केवलरासायनिक उर्वरकदेना", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> भुरभुरी मिट्टीवालीभूमिमेंजलसंरक्षण केलिएवर्षाजलसंचयनऔरबहावनियंत्रण महत्वपूर्ण होताहै।<br><br><i class='fa-solid fa-angles-right icon'></i> इससेजलकीकमीकोपूराकियाजासकताहैऔरमिट्टीकीनमीबनीरहतीहै,जोखेतीकोलाभदायक बनातीहै।"
  },
  {
    question: "लैटराइट मिट्टी में लाल रंग किस कारण से आता है?",
    answers: shuffle([
      { text: "लौह ऑक्साइड कीअधिकता", correct: true },
      { text: "उच्चकैल्शियम सामग्री", correct: false },
      { text: "अधिककार्बनिक पदार्थ", correct: false },
      { text: "सिलिकाकीउपस्थिति", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैटराइट मिट्टीकालालरंगमुख्यतः इसमेंपाएजानेवालेलौहऑक्साइड केकारणहोताहै।<br><br><i class='fa-solid fa-angles-right icon'></i> यहऑक्साइड भारीवर्षाऔरअपक्षयकेकारणमिट्टीमेंजमाहोताहै,जोइसेविशिष्ट लालरंगप्रदानकरताहै।"
  },
  {
    question: "पीट मिट्टी के प्रमुख उपयोग क्या हैं?",
    answers: shuffle([
      { text: "जल निकासीबढ़ाना", correct: false },
      { text: "ईंधनऔरउर्वरककेरूपमेंउपयोग", correct: true },
      { text: "भवननिर्माण मेंउपयोग", correct: false },
      { text: "रेतीलेक्षेत्रों कीमरम्मत", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीट मिट्टीमेंजैविकपदार्थप्रचुरमात्रामेंहोतेहैं,इसलिएइसेसूखाकरईंधनकेरूपमेंप्रयोगकियाजाताहै।<br><br><i class='fa-solid fa-angles-right icon'></i> साथही,यहकृषिकेलिएउर्वरककेरूपमेंभीमहत्वपूर्ण हैक्योंकि यहमिट्टीकीउर्वरता बढ़ाताहै।"
  },
  {
    question: "भारत में किस प्रकार की मिट्टी कपास की खेती के लिए सबसे उपयुक्त मानी जाती है?",
    answers: shuffle([
      { text: "लाल मिट्टी", correct: false },
      { text: "कालीमिट्टी", correct: true },
      { text: "लैटराइट मिट्टी", correct: false },
      { text: "भुरभुरी मिट्टी", correct: false }
    ]),
    Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टीकोकपासकीमिट्टीकहाजाताहैक्योंकि इसकीजलधारणक्षमता,पोषकतत्वोंकीउपलब्धता, औरस्थिरता कपासकीखेतीकेलिएआदर्शहोतीहै।<br><br><i class='fa-solid fa-angles-right icon'></i> यहमध्यभारतकेपठारक्षेत्रों मेंव्यापकरूपसेपाईजातीहैऔरकपासउत्पादन मेंइसकाविशेषयोगदानहै।"
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