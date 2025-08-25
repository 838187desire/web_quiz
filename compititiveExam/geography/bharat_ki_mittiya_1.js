const questions = [ 
  {
      topHeading: "भारत की मिट्टियाँ  पर आधारित 50 बहुविकल्पीय प्रश्न part 1  (quiz_no. 49)"
  },
    {
      question: "भारत में मिट्टी के कितने मुख्य प्रकार पाए जाते हैं?",
      answers: shuffle([
        { text: "4", correct: false },
        { text: "6", correct: false },
        { text: "8", correct: true },
        { text: "10", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में मुख्य रूप से आठ प्रकार की मिट्टियाँ पाई जाती हैं: alluvial (भुरभुरी), red (लाल), black (काली), laterite (लैटराइट), desert (रेतीली), mountain (पर्वतीय), peat (पीट), और marshy (दलदली) मिट्टियाँ।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रत्येक प्रकार की मिट्टी की अपनी विशेषताएँ, उपयोगिता और वितरण क्षेत्र होते हैं।"
    },
    {
      question: "भारत में सबसे अधिक उर्वर कौन सी मिट्टी पाई जाती है?",
      answers: shuffle([
        { text: "लाल मिट्टी", correct: false },
        { text: "काली मिट्टी", correct: false },
        { text: "भुरभुरी (Alluvial) मिट्टी", correct: true },
        { text: "लैटराइट मिट्टी", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> भुरभुरी मिट्टी भारत की सबसे प्रमुख और उर्वर मिट्टी है, जो मुख्य रूप से गंगा-यमुना घाटी और अन्य नदियों के मैदानों में पाई जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मिट्टी नदियों द्वारा लाए गए भू-तत्त्वों से बनी होती है, जो इसे पोषक तत्वों से भरपूर बनाती है, इसलिए यह खेती के लिए अत्यंत उपयुक्त होती है।"
    },
    {
      question: "लाल मिट्टी की उत्पत्ति किस प्रकार होती है?",
      answers: shuffle([
        { text: "अपक्षय और धूप से", correct: true },
        { text: "ज्वालामुखी क्रिया से", correct: false },
        { text: "नदी के किनारों पर जमाव से", correct: false },
        { text: "जलभराव क्षेत्र में", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टी मुख्यतः आग्नेय और अवगर्भीय चट्टानों के अपक्षय से बनती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें लोह तत्व अधिक मात्रा में होते हैं, जो मिट्टी को लाल रंग प्रदान करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मिट्टी गर्म और आर्द्र जलवायु वाले क्षेत्रों में पाई जाती है।"
    },
    {
      question: "काली मिट्टी का दूसरा नाम क्या है?",
      answers: shuffle([
        { text: "रेतीली मिट्टी", correct: false },
        { text: "रेगुर मिट्टी", correct: true },
        { text: "वेरमिसोल मिट्टी", correct: false },
        { text: "मरुस्थलीय मिट्टी", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी को 'रेगुर मिट्टी' के नाम से भी जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह नाम दक्कन के पठार में इसके स्थानीय उपयोग से आया है।<br><br><i class='fa-solid fa-angles-right icon'></i> काली मिट्टी अपने गहरे काले रंग और कपास की खेती के लिए अपनी अनुकूलता के लिए प्रसिद्ध है, इसलिए इसे 'काली कपास मिट्टी' भी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मुख्य रूप से महाराष्ट्र, मध्य प्रदेश, गुजरात और तेलंगाना के मैदानों में पाई जाती है और इसकी जल धारण क्षमता बहुत अधिक होती है।"
    },
    {
      question: "भारत में लैटराइट मिट्टी अधिकतर कहाँ पाई जाती है?",
      answers: shuffle([
        { text: "गंगा मैदान", correct: false },
        { text: "पश्चिमी घाट और पूर्वी घाट", correct: true },
        { text: "राजस्थान", correct: false },
        { text: "थार रेगिस्तान", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैटराइट मिट्टी मुख्यतः उच्च तापमान और भारी वर्षा वाले क्षेत्रों में बनती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मिट्टी पश्चिमी घाट और पूर्वी घाट के पहाड़ी क्षेत्रों में अधिक पाई जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें लोहे और एलुमिनियम के ऑक्साइड होते हैं, जो इसे कठोर और लाल रंग की बनाते हैं।"
    },
    {
      question: "काली मिट्टी की सबसे बड़ी विशेषता क्या है?",
      answers: shuffle([
        { text: "जल धारण करने की क्षमता", correct: true },
        { text: "नाइट्रोजन की कमी", correct: false },
        { text: "कठोरता", correct: false },
        { text: "जल निकासी", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी अपनी उत्कृष्ट जल धारण क्षमता के लिए जानी जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह जल को लंबे समय तक संचित रखती है जिससे सूखे के दौरान भी फसलों को जल मिलता रहता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यही कारण है कि इसे 'कृषि की रानी मिट्टी' कहा जाता है।"
    },
    {
      question: "रेतीली मिट्टी मुख्यतः किस क्षेत्र में पाई जाती है?",
      answers: shuffle([
        { text: "हिमालय क्षेत्र", correct: false },
        { text: "थार रेगिस्तान", correct: true },
        { text: "गंगा मैदान", correct: false },
        { text: "पूर्वी घाट", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेतीली मिट्टी मुख्य रूप से सूखे और रेगिस्तानी क्षेत्रों में पाई जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत में थार रेगिस्तान इस मिट्टी का सबसे बड़ा क्षेत्र है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस मिट्टी में जल धारण क्षमता बहुत कम होती है, इसलिए यह कम उपजाऊ होती है।"
    },
    {
      question: "पीट मिट्टी क्या है?",
      answers: shuffle([
        { text: "जल जमाव वाली मिट्टी", correct: false },
        { text: "पत्तियों से बनी जैविक मिट्टी", correct: true },
        { text: "रेतीली मिट्टी", correct: false },
        { text: "शुष्क मिट्टी", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीट मिट्टी जैविक अवशेषों से बनी होती है, जो दलदली या जल जमाव वाले क्षेत्रों में पाई जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें कार्बन की मात्रा अधिक होती है, और यह उर्वरता में बहुत समृद्ध होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे ईंधन के रूप में भी प्रयोग किया जाता है।"
    },
    {
      question: "भारत में कौन सी मिट्टी जल निकासी के लिए उपयुक्त नहीं होती?",
      answers: shuffle([
        { text: "काली मिट्टी", correct: false },
        { text: "रेतीली मिट्टी", correct: false },
        { text: "लैटराइट मिट्टी", correct: false },
        { text: "पीट मिट्टी", correct: true }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीट मिट्टी में जल निकासी बहुत कम होती है क्योंकि यह जल जमाव वाली क्षेत्र में बनती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका जल सोखने और रोके रखने का गुण अधिक होता है, जिससे जल निकासी में बाधा आती है।"
    },
    {
      question: "निम्नलिखित में से कौन सी मिट्टी घनी, भारी और जल धारण करने वाली होती है?",
      answers: shuffle([
        { text: "लाल मिट्टी", correct: false },
        { text: "काली मिट्टी", correct: true },
        { text: "रेतीली मिट्टी", correct: false },
        { text: "लैटराइट मिट्टी", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी अपने सूक्ष्म कणों के कारण घनी और भारी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह जल को अच्छी तरह रोककर रखती है, जिससे सूखे के समय भी पौधों को जल मिल पाता है।"
    },
    {
      question: "भारत में लाल मिट्टी की उर्वरता कैसे बढ़ाई जाती है?",
      answers: shuffle([
        { text: "रासायनिक उर्वरकों के प्रयोग से", correct: true },
        { text: "जल निकासी से", correct: false },
        { text: "जल भराव करके", correct: false },
        { text: "बालू मिलाने से", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टी में पोषक तत्वों की कमी होती है, इसलिए उर्वरता बढ़ाने के लिए रासायनिक उर्वरकों का प्रयोग आवश्यक होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> साथ ही, ह्यूमस (सड़ा हुआ कार्बनिक पदार्थ) मिलाने से भी यह मिट्टी अधिक उपजाऊ बनती है।"
    },
    {
      question: "भारत की भुरभुरी मिट्टी का मुख्य स्रोत क्या है?",
      answers: shuffle([
        { text: "पहाड़ी क्षेत्रों का अपक्षय", correct: false },
        { text: "नदियों द्वारा लाए गए तलछट", correct: true },
        { text: "ज्वालामुखीय क्रिया", correct: false },
        { text: "रेगिस्तानी क्षेत्र", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> भुरभुरी मिट्टी मुख्यतः नदियों के प्रवाह से आती है जो पहाड़ों से मिट्टी और चट्टानों के छोटे-छोटे कण लाकर मैदानों में जमा करती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यही कारण है कि यह मिट्टी अत्यंत उपजाऊ होती है।"
    },
    {
      question: "काली मिट्टी की बनावट कैसी होती है?",
      answers: shuffle([
        { text: "रेतिला और हल्का", correct: false },
        { text: "भारी और चिकनी", correct: true },
        { text: "दलदली और नरम", correct: false },
        { text: "पत्थरीली", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी की बनावट भारी और चिकनी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका दानेदार आकार नहीं होता और यह जल को लंबे समय तक रखती है।"
    },
    {
      question: "भारत में पहाड़ी मिट्टी मुख्यतः कहाँ पाई जाती है?",
      answers: shuffle([
        { text: "हिमालय क्षेत्र", correct: true },
        { text: "थार रेगिस्तान", correct: false },
        { text: "गंगा मैदान", correct: false },
        { text: "कच्छ क्षेत्र", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> पहाड़ी मिट्टी मुख्यतः हिमालय और अन्य पर्वतीय क्षेत्रों में पाई जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मिट्टी पत्थरों और चट्टानों के टूटने और अपक्षय से बनती है।"
    },
    {
      question: "लाल मिट्टी में कौन सा तत्त्व अधिक मात्रा में पाया जाता है?",
      answers: shuffle([
        { text: "कैल्शियम", correct: false },
        { text: "लोहा", correct: true },
        { text: "पोटैशियम", correct: false },
        { text: "नाइट्रोजन", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टी में लोहे की ऑक्साइड की अधिकता होती है, जो मिट्टी को लाल रंग प्रदान करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह तत्त्व मिट्टी की उर्वरता और संरचना को प्रभावित करता है।"
    },
    {
      question: "भारत में भुरभुरी मिट्टी की प्रमुख विशेषताएँ क्या हैं?",
      answers: shuffle([
        { text: "कम उर्वरक तत्व और जल धारण क्षमता", correct: false },
        { text: "उच्च उर्वरता और जल धारण क्षमता", correct: true },
        { text: "भारी बनावट और कठोरता", correct: false },
        { text: "लाल रंग और लोहे की अधिकता", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> भुरभुरी मिट्टी (Alluvial soil) भारत की सबसे उपजाऊ मिट्टी मानी जाती है, जो मुख्य रूप से गंगा-यमुना मैदानों, ब्रह्मपुत्र घाटी और अन्य नदियों के तटवर्ती क्षेत्रों में पाई जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मिट्टी नदी की तलछट से बनी होती है, जिसमें सिल्ट, रेतीला और दोमट मिट्टी के मिश्रण होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी जल धारण क्षमता अच्छी होती है, जिससे फसलें अच्छी तरह बढ़ती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> भुरभुरी मिट्टी में नाइट्रोजन, फॉस्फोरस, पोटैशियम जैसे पोषक तत्व प्रचुर मात्रा में पाए जाते हैं, जो इसे खेती के लिए सबसे उपयुक्त बनाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मिट्टी गेहूं, चावल, गन्ना, दलहन और सब्ज़ियों की खेती के लिए बहुत उपयोगी होती है।"
    },
    {
      question: "लाल मिट्टी की उर्वरता क्यों कम होती है?",
      answers: shuffle([
        { text: "जल धारण क्षमता की कमी के कारण", correct: false },
        { text: "कार्बनिक पदार्थों की कमी के कारण", correct: true },
        { text: "भारी जल भराव के कारण", correct: false },
        { text: "नमक की अधिकता के कारण", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टी में लोहे के ऑक्साइड की प्रचुरता होती है, जिससे इसका रंग लाल होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, इसमें कार्बनिक पदार्थ और नाइट्रोजन की कमी होती है, जो इसे कम उर्वरक बनाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> लाल मिट्टी अक्सर गर्म और आर्द्र क्षेत्रों में पाई जाती है, जहाँ भारी वर्षा होती है, जिससे पोषक तत्व जैसे कैल्शियम, मैग्नीशियम और पोटैशियम भी बहकर निकल जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जल धारण क्षमता भी मध्यम होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, इस मिट्टी की उर्वरता बढ़ाने के लिए रासायनिक उर्वरकों और ह्यूमस की आवश्यकता होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस मिट्टी पर मुख्यत: कपास, दलहन, आलू और गन्ना की खेती होती है।"
    },
    {
      question: "काली मिट्टी की जल धारण क्षमता क्यों अधिक होती है?",
      answers: shuffle([
        { text: "मिट्टी के सूक्ष्म कणों के कारण", correct: true },
        { text: "मिट्टी में रेत की अधिकता के कारण", correct: false },
        { text: "मिट्टी की पतली परत के कारण", correct: false },
        { text: "मिट्टी में कार्बनिक पदार्थों के कारण", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी (Black soil) जिसे 'कृषि की रानी मिट्टी' भी कहा जाता है, इसमें मिट्टी के बहुत छोटे, महीन कण होते हैं जो पानी को अच्छी तरह रोक लेते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी बनावट चिकनी और भारी होती है, जिससे जल धारण क्षमता अधिक हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मिट्टी सूखे और बारिश दोनों मौसमों में पौधों के लिए जल उपलब्ध कराती है, जिससे सूखे के समय भी फसलें जीवित रह पाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> काली मिट्टी मुख्य रूप से महाराष्ट्र, मध्य प्रदेश, गुजरात, तेलंगाना और आंध्र प्रदेश के मैदानों में पाई जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कपास, गेहूं, ज्वार, बाजरा आदि की खेती के लिए उपयुक्त है।"
    },
    {
      question: "लैटराइट मिट्टी किस प्रकार की जलवायु में बनती है?",
      answers: shuffle([
        { text: "शुष्क और ठंडी", correct: false },
        { text: "आर्द्र और गर्म", correct: true },
        { text: "समशीतोष्ण और ठंडी", correct: false },
        { text: "रेगिस्तानी और गर्म", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैटराइट मिट्टी (Laterite soil) मुख्य रूप से उन क्षेत्रों में बनती है जहाँ तापमान अधिक होता है और वर्षा भी अच्छी मात्रा में होती है, अर्थात् आर्द्र और गर्म जलवायु वाले क्षेत्र।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मिट्टी भारी वर्षा के कारण चट्टानों के अपक्षय से बनती है, जिसमें सिलिका बहकर निकल जाता है और लोहे और एल्यूमीनियम ऑक्साइड अधिक रह जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका रंग लाल से भूरा होता है और यह बहुत कठोर होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> लैटराइट मिट्टी मुख्य रूप से पश्चिमी घाट, पूर्वी घाट, ओडिशा, तमिलनाडु के कुछ हिस्सों और केरल में पाई जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मिट्टी उर्वरक नहीं होती लेकिन कुछ विशेष फसलों जैसे कॉफी, चाय और नारियल की खेती के लिए उपयुक्त है।"
    },
    {
      question: "भारत में रेतीली मिट्टी की सबसे बड़ी समस्या क्या है?",
      answers: shuffle([
        { text: "पोषक तत्वों की अधिकता", correct: false },
        { text: "जल धारण क्षमता की कमी", correct: true },
        { text: "अत्यधिक नमी", correct: false },
        { text: "जल निकासी की समस्या", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेतीली मिट्टी (Sandy soil) मुख्य रूप से थार रेगिस्तान और अन्य शुष्क क्षेत्रों में पाई जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस मिट्टी में रेत के कण बड़े और मोटे होते हैं, जिससे जल जल्दी निकल जाता है और मिट्टी में जल धारण क्षमता बहुत कम होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> जल की कमी के कारण यह मिट्टी कम उर्वरक होती है और फसलें ठीक से विकसित नहीं हो पातीं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके अतिरिक्त, रेतीली मिट्टी हवा के प्रभाव से भी जल्दी क्षरण की शिकार हो जाती है, जिससे मृदा अपरदन की समस्या उत्पन्न होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इस मिट्टी पर खेती करना चुनौतीपूर्ण होता है और विशेष जल प्रबंधन की आवश्यकता होती है।"
    },
    {
        question: "भारत की कौन सी मिट्टी 'कृषि की रानी' कहलाती है?",
        answers: shuffle([
          { text: "लाल मिट्टी", correct: false },
          { text: "काली मिट्टी", correct: true },
          { text: "भुरभुरी मिट्टी", correct: false },
          { text: "लैटराइट मिट्टी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी की जल धारण क्षमता अधिक होती है, जो सूखे मौसम में भी फसलों को जल उपलब्ध कराती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मुख्यतः कपास की खेती के लिए उपयुक्त होती है, इसलिए इसे 'कृषि की रानी' कहा जाता है।"
      },
      {
        question: "भुरभुरी मिट्टी की मुख्य विशेषता क्या है?",
        answers: shuffle([
          { text: "कम उर्वरता", correct: false },
          { text: "पोषक तत्वों से भरपूर होना", correct: true },
          { text: "जल धारण क्षमता की कमी", correct: false },
          { text: "कठोरता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भुरभुरी मिट्टी नदियों द्वारा लाई गई तलछट से बनती है और इसमें नाइट्रोजन, फॉस्फोरस, और पोटैशियम जैसे पोषक तत्व प्रचुर मात्रा में पाए जाते हैं, जिससे यह अत्यंत उर्वर होती है।"
      },
      {
        question: "लाल मिट्टी का मुख्य रंग क्यों लाल होता है?",
        answers: shuffle([
          { text: "जल की अधिकता के कारण", correct: false },
          { text: "लोहे के ऑक्साइड के कारण", correct: true },
          { text: "कार्बनिक पदार्थों के कारण", correct: false },
          { text: "रेत की अधिकता के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टी में लोहे के ऑक्साइड (Fe2O3) की अधिकता होती है, जो मिट्टी को उसका विशिष्ट लाल रंग प्रदान करता है।"
      },
      {
        question: "लैटराइट मिट्टी मुख्य रूप से किस क्षेत्र में पाई जाती है?",
        answers: shuffle([
          { text: "पश्चिमी और पूर्वी घाट", correct: true },
          { text: "गंगा मैदान", correct: false },
          { text: "थार रेगिस्तान", correct: false },
          { text: "हिमालय क्षेत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैटराइट मिट्टी भारी वर्षा वाले पर्वतीय क्षेत्रों जैसे पश्चिमी घाट और पूर्वी घाट में पाई जाती है, जहां चट्टानों के अपक्षय से यह मिट्टी बनती है।"
      },
      {
        question: "काली मिट्टी में जल धारण क्षमता क्यों अधिक होती है?",
        answers: shuffle([
          { text: "इसमें रेत अधिक होती है", correct: false },
          { text: "मिट्टी के सूक्ष्म कण इसे जल को रोकने में सक्षम बनाते हैं", correct: true },
          { text: "इसमें अधिक कार्बनिक पदार्थ होते हैं", correct: false },
          { text: "इसमें जल निकासी अधिक होती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी के सूक्ष्म कण जल को अच्छी तरह संचित करते हैं, जिससे यह सूखे मौसम में भी पौधों को जल उपलब्ध कराती है।"
      },
      {
        question: "रेतीली मिट्टी की प्रमुख समस्या क्या है?",
        answers: shuffle([
          { text: "जल धारण की क्षमता का कम होना", correct: true },
          { text: "अत्यधिक जल धारण करना", correct: false },
          { text: "उर्वरता अधिक होना", correct: false },
          { text: "कठोर और भारी बनावट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेतीली मिट्टी में जल जल्दी निकल जाता है क्योंकि इसमें रेत के बड़े कण होते हैं, जिससे इसकी जल धारण क्षमता कम होती है और यह कम उपजाऊ होती है।"
      },
      {
        question: "पीट मिट्टी किस प्रकार की मिट्टी है?",
        answers: shuffle([
          { text: "जलजमाव वाली और कार्बनिक पदार्थों से समृद्ध", correct: true },
          { text: "रेतीली और सूखी", correct: false },
          { text: "भारी और चिकनी", correct: false },
          { text: "कठोर और पत्थरीली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीट मिट्टी दलदली क्षेत्रों में कार्बनिक अवशेषों से बनती है, जिसमें नमी और कार्बनिक पदार्थों की मात्रा अधिक होती है।"
      },
      {
        question: "लाल मिट्टी में उर्वरता बढ़ाने के लिए क्या किया जाता है?",
        answers: shuffle([
          { text: "जल निकासी बढ़ाई जाती है", correct: false },
          { text: "रासायनिक उर्वरक और ह्यूमस मिलाया जाता है", correct: true },
          { text: "पानी को कम किया जाता है", correct: false },
          { text: "रेत मिलाई जाती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टी में पोषक तत्वों की कमी होती है, इसलिए उसकी उर्वरता बढ़ाने के लिए रासायनिक उर्वरक और कार्बनिक पदार्थ जैसे ह्यूमस मिलाना आवश्यक होता है।"
      },
      {
        question: "भारत में कौन सी मिट्टी अधिकांशतः गंगा-यमुना मैदानों में पाई जाती है?",
        answers: shuffle([
          { text: "काली मिट्टी", correct: false },
          { text: "भुरभुरी मिट्टी", correct: true },
          { text: "लैटराइट मिट्टी", correct: false },
          { text: "लाल मिट्टी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गंगा-यमुना के मैदानों में नदियों द्वारा लाई गई तलछट से भुरभुरी मिट्टी बनती है, जो उपजाऊ और कृषि के लिए अत्यंत उपयुक्त है।"
      },
      {
        question: "भारत की कौन सी मिट्टी मुख्यतः सूखे और रेगिस्तानी क्षेत्रों में पाई जाती है?",
        answers: shuffle([
          { text: "लैटराइट मिट्टी", correct: false },
          { text: "भुरभुरी मिट्टी", correct: false },
          { text: "रेतीली मिट्टी", correct: true },
          { text: "काली मिट्टी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेतीली मिट्टी मुख्यतः थार रेगिस्तान और सूखे क्षेत्रों में पाई जाती है, जो जल धारण क्षमता में कमजोर और कम उपजाऊ होती है।"
      },
      {
        question: "भारत में किस मिट्टी की जल धारण क्षमता सबसे कम होती है?",
        answers: shuffle([
          { text: "काली मिट्टी", correct: false },
          { text: "लाल मिट्टी", correct: false },
          { text: "भुरभुरी मिट्टी", correct: false },
          { text: "रेतीली मिट्टी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेतीली मिट्टी के कण बड़े और मोटे होते हैं, जिससे जल जल्दी निकल जाता है और इसकी जल धारण क्षमता बहुत कम होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए यह मिट्टी सूखे इलाकों में अधिक पाई जाती है और कृषि के लिए कम उपयुक्त होती है।"
      },
      {
        question: "लाल मिट्टी में उर्वरता कम होने का मुख्य कारण क्या है?",
        answers: shuffle([
          { text: "जलभराव और भारी नमी", correct: false },
          { text: "कार्बनिक पदार्थों और नाइट्रोजन की कमी", correct: true },
          { text: "अधिक रेत की उपस्थिति", correct: false },
          { text: "उच्च जल निकासी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टी में पोषक तत्वों की कमी खासकर नाइट्रोजन और कार्बनिक पदार्थों की कमी होती है, जिससे इसकी उर्वरता कम होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे सुधारने के लिए उर्वरकों का उपयोग आवश्यक होता है।"
      },
      {
        question: "भुरभुरी मिट्टी की बनावट कैसी होती है?",
        answers: shuffle([
          { text: "भारी और चिकनी", correct: false },
          { text: "हल्की और रेतीली", correct: false },
          { text: "मिश्रित (रेतीली, दोमट और सिल्टयुक्त)", correct: true },
          { text: "कठोर और पत्थरीली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भुरभुरी मिट्टी में रेत, दोमट और सिल्ट सभी का मिश्रण होता है, जिससे यह हल्की, उपजाऊ और जल धारण में सक्षम होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह नदियों के मैदानों में मिलती है।"
      },
      {
        question: "काली मिट्टी में जल धारण क्षमता अधिक होने के पीछे कौन सा कारण है?",
        answers: shuffle([
          { text: "इसमें भारी मात्रा में कार्बनिक पदार्थ होते हैं", correct: false },
          { text: "इसके कण छोटे और महीन होते हैं जो जल को संचित करते हैं", correct: true },
          { text: "इसमें अधिक मात्रा में रेत होती है", correct: false },
          { text: "इसकी सतह पत्थरीली होती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी के सूक्ष्म कण जल को अवशोषित कर रखते हैं और इसे लंबे समय तक संचित करते हैं, जिससे सूखे के समय भी फसलों को जल मिलता रहता है।"
      },
      {
        question: "लैटराइट मिट्टी की खासियत क्या है?",
        answers: shuffle([
          { text: "यह सूखी और रेतीली होती है", correct: false },
          { text: "इसमें लोहे और एल्यूमीनियम की अधिकता होती है", correct: true },
          { text: "यह हिमालयी क्षेत्र की मिट्टी है", correct: false },
          { text: "इसमें जल निकासी की कमी होती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैटराइट मिट्टी में लोहे और एल्यूमीनियम ऑक्साइड प्रचुर मात्रा में होते हैं, जो इसे कठोर, लाल रंग की मिट्टी बनाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अधिक वर्षा वाले क्षेत्रों में पाई जाती है।"
      },
      {
        question: "पीट मिट्टी का उपयोग मुख्यतः किस लिए किया जाता है?",
        answers: shuffle([
          { text: "जल धारण क्षमता बढ़ाने के लिए", correct: false },
          { text: "जैव ईंधन और उर्वरक के रूप में", correct: true },
          { text: "रेगिस्तानी क्षेत्र की खेती में", correct: false },
          { text: "पत्थर निर्माण में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीट मिट्टी जैविक अवशेषों से बनी होती है और जलजमाव वाले इलाकों में मिलती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे सूखा कर जैव ईंधन के रूप में उपयोग किया जाता है और कृषि में उर्वरक के रूप में भी प्रयोग किया जाता है।"
      },
      {
        question: "भारत में काली मिट्टी की अधिकता किस क्षेत्र में है?",
        answers: shuffle([
          { text: "राजस्थान और पंजाब", correct: false },
          { text: "महाराष्ट्र, गुजरात, मध्य प्रदेश और तेलंगाना", correct: true },
          { text: "हिमालयी क्षेत्र", correct: false },
          { text: "पश्चिम बंगाल और ओडिशा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी मुख्य रूप से महाराष्ट्र, गुजरात, मध्य प्रदेश, तेलंगाना और आंध्र प्रदेश के मैदानों में पाई जाती है, जहाँ कपास की खेती होती है।"
      },
      {
        question: "भारत में लाल मिट्टी कहाँ अधिक पाई जाती है?",
        answers: shuffle([
          { text: "गंगा मैदान", correct: false },
          { text: "पूर्वी और पश्चिमी घाट, छत्तीसगढ़ और कर्नाटक के पठारों में", correct: true },
          { text: "थार रेगिस्तान", correct: false },
          { text: "राजस्थान के मैदानी क्षेत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टी मुख्यतः भारत के पश्चिमी और पूर्वी घाट, छत्तीसगढ़, ओडिशा, आंध्र प्रदेश और कर्नाटक के पठारों में पाई जाती है, जहाँ गर्म और आर्द्र जलवायु होती है।"
      },
      {
        question: "भुरभुरी मिट्टी के लिए सही कथन कौन सा है?",
        answers: shuffle([
          { text: "यह रेतीली होती है और जल धारण क्षमता कम होती है", correct: false },
          { text: "यह नदियों के द्वारा लाई गई तलछट से बनी है और अत्यंत उपजाऊ होती है", correct: true },
          { text: "यह पर्वतीय क्षेत्रों में पाई जाती है", correct: false },
          { text: "यह लाल रंग की होती है और लोहे से भरपूर होती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भुरभुरी मिट्टी नदियों द्वारा लाई गई तलछट से बनती है, जो उपजाऊ, नरम और खेती के लिए उपयुक्त होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत की सबसे अधिक उत्पादक मिट्टी है।"
      },
      {
        question: "लैटराइट मिट्टी में उर्वरता कम होने का कारण क्या है?",
        answers: shuffle([
          { text: "कार्बनिक पदार्थों की अधिकता", correct: false },
          { text: "सिलिका का बह जाना", correct: true },
          { text: "जल भराव", correct: false },
          { text: "नाइट्रोजन की अधिकता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैटराइट मिट्टी बनने के दौरान भारी वर्षा से सिलिका बह जाती है, जिससे मिट्टी में पोषक तत्व कम हो जाते हैं और इसकी उर्वरता कम हो जाती है।"
      },
      {
        question: "भारत में काली मिट्टी की उपस्थिति किन कारणों से महत्वपूर्ण है?",
        answers: shuffle([
          { text: "जल धारणक्षमता और सूखे प्रतिरोधी क्षमता के कारण", correct: true },
          { text: "भारी रेत की मौजूदगी के कारण", correct: false },
          { text: "अधिक कार्बनिक पदार्थ के कारण", correct: false },
          { text: "केवल नदियों के किनारे होने के कारण", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी सूखे क्षेत्रों में भी फसलों को जल प्रदान कर सकती है क्योंकि इसमें महीन कण होते हैं जो जल को लंबे समय तक संचित रखते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मिट्टी कपास और अन्य फसलों के लिए उपयुक्त होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी जलधारण क्षमता इसे सूखे और गर्म क्षेत्रों के लिए आदर्श बनाती है, जिससे यह भारत की कृषि में महत्वपूर्ण भूमिका निभाती है।",
      },
      {
        question: "लाल मिट्टी में पोषक तत्वों की कमी क्यों होती है और इसे कैसे सुधारा जा सकता है?",
        answers: shuffle([
          { text: "रेत अधिक होने से और सिंचाई बढ़ाकर", correct: false },
          { text: "कार्बनिक पदार्थों की कमी और रासायनिक उर्वरकों के उपयोग से", correct: true },
          { text: "जलभराव के कारण और जल निकासी से", correct: false },
          { text: "भारी मिट्टी होने से और मिट्टी की कटाई से", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टी में नाइट्रोजन और कार्बनिक पदार्थों की कमी होती है, जो इसकी उर्वरता कम करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस मिट्टी की उर्वरता बढ़ाने के लिए ह्यूमस, गोबर की खाद और रासायनिक उर्वरकों का इस्तेमाल आवश्यक है।<br><br><i class='fa-solid fa-angles-right icon'></i> जल निकासी का भी सही प्रबंध करना जरूरी है ताकि मिट्टी में पोषक तत्व स्थिर रहें।",
      },
      {
        question: "भुरभुरी मिट्टी की विशेषताएँ क्या हैं और यह किस प्रकार के कृषि कार्यों के लिए उपयुक्त है?",
        answers: shuffle([
          { text: "रेतीली और कम उपजाऊ, चाय खेती के लिए उपयुक्त", correct: false },
          { text: "मिश्रित बनावट वाली, अत्यधिक उपजाऊ और फसल उत्पादन के लिए आदर्श", correct: true },
          { text: "जल निकासी कम, केवल जड़ी-बूटी के लिए उपयुक्त", correct: false },
          { text: "कठोर और पथरीली, केवल लकड़ी उगाने के लिए", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> भुरभुरी मिट्टी में रेत, सिल्ट और दोमट मिट्टी का मिश्रण होता है, जिससे इसकी जलधारण क्षमता और पोषण तत्वों की उपलब्धता अच्छी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह गेहूं, चावल, दलहन और गन्ने जैसी कई फसलों की खेती के लिए उपयुक्त है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी बनावट हल्की होने के कारण यह जड़ विकास को प्रोत्साहित करती है।",
      },
      {
        question: "लैटराइट मिट्टी का निर्माण कैसे होता है और इसकी किस विशेष जलवायु में उपस्थिति अधिक होती है?",
        answers: shuffle([
          { text: "हिमालयी पथरीली चट्टानों के अपक्षय से, ठंडी जलवायु में", correct: false },
          { text: "भारी वर्षा वाले क्षेत्रों में चट्टानों के अपक्षय से, गर्म और आर्द्र जलवायु में", correct: true },
          { text: "रेगिस्तानी इलाकों में बालू जमाव से, शुष्क जलवायु में", correct: false },
          { text: "नदी तलछट से, समशीतोष्ण जलवायु में", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> लैटराइट मिट्टी गर्म और आर्द्र क्षेत्रों में भारी वर्षा के कारण चट्टानों के अपक्षय से बनती है।<br><br><i class='fa-solid fa-angles-right icon'></i> वर्षा के कारण मिट्टी से सिलिका बह जाती है और लोहे एवं एल्यूमीनियम के ऑक्साइड जमा हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए यह मिट्टी लाल या पीली रंग की होती है और इसमें उर्वरता कम होती है।",
      },
      {
        question: "भारत में पीट मिट्टी कहाँ पाई जाती है और इसकी कृषि में क्या भूमिका है?",
        answers: shuffle([
          { text: "रेगिस्तानी क्षेत्रों में, सूखे प्रतिरोधी फसलों के लिए", correct: false },
          { text: "दलदली और जल जमाव वाले क्षेत्रों में, जैव ईंधन और उर्वरक के रूप में", correct: true },
          { text: "पर्वतीय क्षेत्रों में, बागवानी के लिए", correct: false },
          { text: "मैदानों में, धान की खेती के लिए", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> पीट मिट्टी जल जमाव वाले दलदली इलाकों में बनती है, जिसमें अपघटित कार्बनिक पदार्थ प्रचुर मात्रा में होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे सूखाकर जैव ईंधन के रूप में प्रयोग किया जाता है और कृषि में मिट्टी सुधारने के लिए उर्वरक की तरह इस्तेमाल किया जाता है।",
      },
      {
        question: "काली मिट्टी की खेती में सबसे उपयुक्त फसल कौन सी है और क्यों?",
        answers: shuffle([
          { text: "चावल, क्योंकि यह जल में अच्छी तरह बढ़ती है", correct: false },
          { text: "कपास, क्योंकि काली मिट्टी की जलधारण क्षमता सूखे में भी फसल बचाती है", correct: true },
          { text: "आलू, क्योंकि यह ठंडी मिट्टी पसंद करता है", correct: false },
          { text: "गन्ना, क्योंकि इसमें नाइट्रोजन अधिक होता है", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी की जलधारण क्षमता उच्च होने के कारण सूखे के समय भी पौधों को जल उपलब्ध रहता है, जो कपास की खेती के लिए अनुकूल होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> कपास को भारी मिट्टी और पोषक तत्वों की आवश्यकता होती है, जो काली मिट्टी प्रदान करती है।",
      },
      {
        question: "भुरभुरी मिट्टी की खेती में प्रमुख फसलों के उदाहरण दें और इसका कारण बताएं।",
        answers: shuffle([
          { text: "कपास और ज्वार, क्योंकि यह भारी मिट्टी है", correct: false },
          { text: "गेहूं, चावल और गन्ना, क्योंकि इसमें पोषक तत्व और जलधारण क्षमता अच्छी होती है", correct: true },
          { text: "आलू और चाय, क्योंकि यह पर्वतीय मिट्टी है", correct: false },
          { text: "तिलहन और मसाले, क्योंकि इसमें जल की कमी होती है", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> भुरभुरी मिट्टी नदियों के तटवर्ती इलाकों में पाई जाती है, जिसमें नाइट्रोजन, फॉस्फोरस जैसे पोषक तत्व प्रचुर मात्रा में होते हैं और जलधारण क्षमता भी अच्छी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए गेहूं, चावल, गन्ना जैसी फसलें यहाँ अच्छी तरह उगती हैं।",
      },
      {
        question: "लाल मिट्टी की उपजाऊता बढ़ाने के लिए किस प्रकार की कृषि तकनीकें अपनाई जाती हैं?",
        answers: shuffle([
          { text: "केवल सिंचाई बढ़ाना", correct: false },
          { text: "जैविक खाद और ह्यूमस का प्रयोग, रासायनिक उर्वरकों का संतुलित उपयोग", correct: true },
          { text: "भारी मशीनरी का उपयोग", correct: false },
          { text: "मिट्टी को धोना", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टी में पोषक तत्वों की कमी होती है, इसलिए उसकी उर्वरता बढ़ाने के लिए जैविक खाद, ह्यूमस और संतुलित मात्रा में रासायनिक उर्वरकों का प्रयोग किया जाता है ताकि मिट्टी की संरचना सुधरे और फसल उत्पादन बढ़े।",
      },
      {
        question: "भारत में किस मिट्टी को ‘झीलों और नदियों की उपजाऊ देन’ कहा जाता है?",
        answers: shuffle([
          { text: "लाल मिट्टी", correct: false },
          { text: "लैटराइट मिट्टी", correct: false },
          { text: "भुरभुरी मिट्टी", correct: true },
          { text: "रेतीली मिट्टी", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> भुरभुरी मिट्टी नदियों के प्रवाह के दौरान तलछट के रूप में जमा होती है, जो अत्यंत उपजाऊ होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे ‘झीलों और नदियों की उपजाऊ देन’ कहा जाता है क्योंकि यह नदियों से आई मिट्टी है।",
      },
      {
        question: "काली मिट्टी की विस्तार में कमी के कारण क्या हैं?",
        answers: shuffle([
          { text: "केवल सूखे क्षेत्र में पाई जाती है", correct: false },
          { text: "भारी वर्षा और अपर्याप्त पोषक तत्वों के कारण सीमित क्षेत्र", correct: true },
          { text: "केवल पर्वतीय क्षेत्रों में होती है", correct: false },
          { text: "रेतीली क्षेत्र में अधिक होती है", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी मुख्यतः भारत के कुछ सूखे और अर्ध-सूखे क्षेत्रों में पाई जाती है, जहाँ वर्षा सीमित होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> भारी वर्षा वाले इलाकों में यह बह जाती है और पोषक तत्वों की कमी के कारण इसका विस्तार सीमित रहता है।",
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