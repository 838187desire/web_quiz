const questions = [
  {
      topHeading: "भारत के भूगोल पर आधारित 50 बहुविकल्पीय प्रश्न (MCQs) part 9  (quiz_no. 9)"
  },
    {
      question: "भारत के किस राज्य में 'नंदा देवी बायोस्फीयर रिजर्व' स्थित है?",
      answers: shuffle([
        { text: "हिमाचल प्रदेश", correct: false },
        { text: "उत्तराखंड", correct: true },
        { text: "सिक्किम", correct: false },
        { text: "अरुणाचल प्रदेश", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> नंदा देवी बायोस्फीयर रिजर्व (Nanda Devi Biosphere Reserve) उत्तराखंड राज्य में स्थित एक यूनेस्को विश्व धरोहर स्थल और बायोस्फीयर रिजर्व है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें नंदा देवी राष्ट्रीय उद्यान और फूलों की घाटी राष्ट्रीय उद्यान शामिल है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अपनी उच्च पर्वतीय पारिस्थितिकी और दुर्लभ प्रजातियों के लिए जाना जाता है।",
    },
    {
      question: "'हीराकुंड बांध' किस नदी पर स्थित है?",
      answers: shuffle([
        { text: "महानदी", correct: true },
        { text: "गोदावरी", correct: false },
        { text: "कृष्णा", correct: false },
        { text: "तापी", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> हीराकुंड बांध भारत का सबसे लंबा बांध है, जो ओडिशा में महानदी पर बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बांध सिंचाई, बाढ़ नियंत्रण और जलविद्युत उत्पादन के लिए महत्वपूर्ण है और इसे स्वतंत्रता के बाद भारत की पहली बड़ी नदी घाटी परियोजनाओं में से एक माना जाता है।",
    },
    {
      question: "भारत का 'सबसे पुराना तेल क्षेत्र' कौन-सा है?",
      answers: shuffle([
        { text: "अंकलेश्वर", correct: false },
        { text: "नहरकटिया", correct: false },
        { text: "डिगबोई", correct: true },
        { text: "बॉम्बे हाई", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> डिगबोई (Digboi) भारत का सबसे पुराना तेल क्षेत्र है, जो असम राज्य में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 1889 में कच्चे तेल की खोज की गई थी और 1901 में एशिया की पहली तेल रिफाइनरी भी यहीं स्थापित की गई थी।",
    },
    {
      question:
        "भारत में 'सर्वाधिक साक्षरता दर' (Literacy Rate) वाला राज्य कौन-सा है (2011 जनगणना के अनुसार)?",
      answers: shuffle([
        { text: "मिजोरम", correct: false },
        { text: "केरल", correct: true },
        { text: "गोवा", correct: false },
        { text: "त्रिपुरा", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> जनगणना 2011 के अनुसार, केरल भारत का सर्वाधिक साक्षरता दर वाला राज्य है, जहाँ साक्षरता दर 94% है।<br><br><i class='fa-solid fa-angles-right icon'></i> केरल में शिक्षा और सामाजिक विकास पर ऐतिहासिक जोर रहा है, जिसके कारण यह उच्च साक्षरता दर हासिल कर पाया है।",
    },
    {
      question: "भारत की 'कोरोमंडल तट' पर शीत ऋतु में वर्षा का मुख्य कारण क्या है?",
      answers: shuffle([
        { text: "पश्चिमी विक्षोभ", correct: false },
        { text: "दक्षिण-पश्चिमी मॉनसून", correct: false },
        { text: "उत्तर-पूर्वी मॉनसून", correct: true },
        { text: "चक्रवात", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> भारत के कोरोमंडल तट (तमिलनाडु और आंध्र प्रदेश के कुछ हिस्से) पर शीत ऋतु में (अक्टूबर से दिसंबर) वर्षा का मुख्य कारण उत्तर-पूर्वी मॉनसून (Retreating Monsoon) है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये मॉनसूनी पवनें बंगाल की खाड़ी के ऊपर से गुजरते समय नमी उठा लेती हैं और तट से टकराकर वर्षा करती हैं।",
    },
    {
      question: "'जवाहर सुरंग' किस दर्रे में स्थित है?",
      answers: shuffle([
        { text: "बनिहाल दर्रा", correct: true },
        { text: "जोजिला दर्रा", correct: false },
        { text: "पीरपंजाल दर्रा", correct: false },
        { text: "बुर्जिल दर्रा", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> जवाहर सुरंग (Jawahar Tunnel) जम्मू और कश्मीर में बनिहाल दर्रे (Banihal Pass) में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह श्रीनगर और जम्मू को जोड़ने वाले राष्ट्रीय राजमार्ग 44 (NH 44) पर स्थित है और सर्दियों में भी कनेक्टिविटी बनाए रखने में मदद करती है।",
    },
    {
      question: "भारत में 'सर्वाधिक काली मिट्टी' किस राज्य में पाई जाती है?",
      answers: shuffle([
        { text: "महाराष्ट्र", correct: true },
        { text: "गुजरात", correct: false },
        { text: "मध्य प्रदेश", correct: false },
        { text: "आंध्र प्रदेश", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी (Black Soil) भारत में मुख्य रूप से दक्कन के पठार में पाई जाती है, जिसका एक बड़ा हिस्सा महाराष्ट्र में है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मिट्टी कपास की खेती के लिए बहुत उपयुक्त है और इसमें नमी धारण करने की उच्च क्षमता होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> गुजरात, मध्य प्रदेश और आंध्र प्रदेश के कुछ हिस्सों में भी यह मिट्टी पाई जाती है।",
    },
    {
      question: "'काली नदी' (महाकाली नदी) भारत और किस देश के बीच सीमा बनाती है?",
      answers: shuffle([
        { text: "चीन", correct: false },
        { text: "नेपाल", correct: true },
        { text: "बांग्लादेश", correct: false },
        { text: "भूटान", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> काली नदी (जिसे महाकाली नदी, शारदा नदी या काली गंगा भी कहा जाता है) भारत और नेपाल के बीच एक प्राकृतिक सीमा बनाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उत्तराखंड में कालापानी क्षेत्र से निकलती है और उत्तर प्रदेश में गंगा नदी से मिलती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह नदी दोनों देशों के बीच क्षेत्रीय विवाद का विषय भी रही है।",
    },
    {
      question:
        "भारत की 'खारे पानी की सबसे बड़ी अंतर्देशीय झील' (Largest Inland Saltwater Lake) कौन-सी है?",
      answers: shuffle([
        { text: "चिल्का झील", correct: false },
        { text: "पुलीकट झील", correct: false },
        { text: "सांभर झील", correct: true },
        { text: "वेम्बनाड झील", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> सांभर झील राजस्थान में स्थित भारत की सबसे बड़ी अंतर्देशीय (inland) खारे पानी की झील है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक रामसर साइट है और नमक उत्पादन का एक महत्वपूर्ण स्रोत है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह झील अरावली पहाड़ियों से घिरी हुई है।",
    },
    {
      question: "'प्रोजेक्ट टाइगर' (Project Tiger) भारत में किस वर्ष शुरू किया गया था?",
      answers: shuffle([
        { text: "1970", correct: false },
        { text: "1972", correct: false },
        { text: "1973", correct: true },
        { text: "1975", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> प्रोजेक्ट टाइगर भारत सरकार द्वारा 1973 में शुरू किया गया एक वन्यजीव संरक्षण कार्यक्रम है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका मुख्य उद्देश्य भारत में बाघों (Bengal Tiger) की घटती आबादी को बचाना और उनके प्राकृतिक आवासों का संरक्षण करना है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस परियोजना के तहत कई टाइगर रिजर्व स्थापित किए गए हैं।",
    },
    {
      question: "भारत का 'सबसे लंबा बांध' कौन-सा है?",
      answers: shuffle([
        { text: "भाखड़ा बांध", correct: false },
        { text: "हीराकुंड बांध", correct: true },
        { text: "टिहरी बांध", correct: false },
        { text: "सरदार सरोवर बांध", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> हीराकुंड बांध भारत का सबसे लंबा बांध है, जो ओडिशा में महानदी पर बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी मुख्य मिट्टी के बांध की लंबाई लगभग 4.8 किलोमीटर है, और पूरी बांध संरचना (मिट्टी, कंक्रीट और चिनाई सहित) की कुल लंबाई लगभग 25.79 किलोमीटर है।",
    },
    {
      question:
        "'कोडईकनाल' नामक प्रसिद्ध हिल स्टेशन किस पहाड़ी श्रृंखला में स्थित है?",
      answers: shuffle([
        { text: "नीलगिरि पहाड़ियाँ", correct: false },
        { text: "पालनी पहाड़ियाँ", correct: true },
        { text: "अन्नामलाई पहाड़ियाँ", correct: false },
        { text: "इलायची पहाड़ियाँ", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> कोडईकनाल (Kodaikanal) तमिलनाडु के डिंडीगुल जिले में पालनी पहाड़ियों (Palani Hills) में स्थित एक प्रसिद्ध हिल स्टेशन है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अपनी प्राकृतिक सुंदरता, शांत झीलों और हरे-भरे परिदृश्यों के लिए जाना जाता है, जिसे 'पहाड़ियों की राजकुमारी' भी कहा जाता है।",
    },
    {
      question: "भारत में 'भूस्खलन' (Landslides) का प्रमुख कारण क्या है?",
      answers: shuffle([
        { text: "अधिक वर्षा और ढलानों की अस्थिरता", correct: false },
        { text: "वनों की कटाई और सड़क निर्माण", correct: false },
        { text: "भूकंप और खनन गतिविधियाँ", correct: false },
        { text: "उपरोक्त सभी", correct: true },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> भारत में भूस्खलन (Landslides) एक गंभीर प्राकृतिक आपदा है, खासकर हिमालयी क्षेत्रों और पश्चिमी घाट में।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके कई कारण होते हैं, जिनमें अधिक वर्षा (जो मिट्टी को संतृप्त करती है), खड़ी ढलानों की प्राकृतिक अस्थिरता, वनों की कटाई (जो मिट्टी को बांधने वाली जड़ों को हटा देती है), सड़क और अन्य निर्माण गतिविधियाँ (जो ढलानों को कमजोर करती हैं), भूकंप (जो भूमि को हिलाते हैं), और खनन गतिविधियाँ (जो भूभाग को अस्थिर करती हैं) शामिल हैं।",
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
        "<i class='fa-solid fa-angles-right icon'></i> पश्चिम बंगाल भारत का सबसे बड़ा चावल उत्पादक राज्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> गंगा-ब्रह्मपुत्र डेल्टा क्षेत्र की उपजाऊ जलोढ़ मिट्टी, पर्याप्त वर्षा और सिंचाई की सुविधाएँ चावल की खेती के लिए आदर्श परिस्थितियाँ प्रदान करती हैं।",
    },
    {
      question:
        "'कुडनकुलम परमाणु ऊर्जा संयंत्र' भारत के किस राज्य में स्थित है?",
      answers: shuffle([
        { text: "महाराष्ट्र", correct: false },
        { text: "कर्नाटक", correct: false },
        { text: "तमिलनाडु", correct: true },
        { text: "आंध्र प्रदेश", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> कुडनकुलम परमाणु ऊर्जा संयंत्र (Kudankulam Nuclear Power Plant) तमिलनाडु राज्य के तिरुनेलवेली जिले में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत का सबसे बड़ा परमाणु ऊर्जा संयंत्र है जिसे रूस के सहयोग से विकसित किया गया है।",
    },
    {
      question:
        "भारत में 'अल्पाइन वन' (Alpine Forests) मुख्य रूप से किस ऊंचाई पर पाए जाते हैं?",
      answers: shuffle([
        { text: "1000-2000 मीटर", correct: false },
        { text: "2000-3000 मीटर", correct: false },
        { text: "3000-4000 मीटर से ऊपर", correct: true },
        { text: "4000 मीटर से ऊपर", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> अल्पाइन वन (Alpine Forests) भारत के हिमालयी क्षेत्रों में 3000 मीटर से 4000 मीटर से अधिक की ऊँचाई पर पाए जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इन वनों में शंकुधारी पेड़ जैसे देवदार, सिल्वर फर, जूनिपर और बर्च शामिल होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अत्यधिक ऊँचाई और कम तापमान के कारण यहाँ वनस्पति विरल होती जाती है, और वृक्ष रेखा के ऊपर अल्पाइन घास के मैदान पाए जाते हैं।",
    },
    {
      question: "भारत की 'कौन-सी नदी एक भ्रंश घाटी' (Rift Valley) से होकर बहती है?",
      answers: shuffle([
        { text: "गंगा", correct: false },
        { text: "यमुना", correct: false },
        { text: "नर्मदा", correct: true },
        { text: "गोदावरी", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> नर्मदा नदी भारत की उन कुछ प्रमुख नदियों में से एक है जो एक भ्रंश घाटी (Rift Valley) से होकर बहती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह विंध्य और सतपुड़ा पर्वतमाला के बीच एक पश्चिम-बहने वाली नदी है, जो मध्य प्रदेश से निकलकर गुजरात में अरब सागर में गिरती है।<br><br><i class='fa-solid fa-angles-right icon'></i> तापी नदी भी एक भ्रंश घाटी से होकर बहती है।",
    },
    {
      question: "भारत में 'कोयला' का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
      answers: shuffle([
        { text: "ओडिशा", correct: false },
        { text: "छत्तीसगढ़", correct: false },
        { text: "झारखंड", correct: true },
        { text: "पश्चिम बंगाल", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> झारखंड भारत में कोयले का सबसे बड़ा उत्पादक राज्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> राज्य में झरिया, बोकारो, गिरिडीह, कर्णपुरा जैसे प्रमुख कोयला क्षेत्र स्थित हैं, जो देश के कुल कोयला उत्पादन में महत्वपूर्ण योगदान देते हैं।",
    },
    {
      question: "भारत का 'सबसे उत्तरी बिंदु' कौन-सा है?",
      answers: shuffle([
        { text: "इंदिरा पॉइंट", correct: false },
        { text: "इंदिरा कॉल", correct: true },
        { text: "किबिथु", correct: false },
        { text: "गुहार मोती", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> इंदिरा कॉल (Indira Col) भारत का सबसे उत्तरी बिंदु है, जो सियाचिन ग्लेशियर के पास काराकोरम पर्वतमाला में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह 37°06′ उत्तरी अक्षांश पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'इंदिरा पॉइंट' सबसे दक्षिणी बिंदु है, 'किबिथु' सबसे पूर्वी और 'गुहार मोती' सबसे पश्चिमी बिंदु है।",
    },
    {
      question: "'अंकलेश्वर' तेल क्षेत्र भारत के किस राज्य में स्थित है?",
      answers: shuffle([
        { text: "असम", correct: false },
        { text: "गुजरात", correct: true },
        { text: "महाराष्ट्र", correct: false },
        { text: "राजस्थान", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> अंकलेश्वर (Ankleshwar) गुजरात राज्य में स्थित एक प्रमुख ऑन-शोर (भूमि पर स्थित) तेल क्षेत्र है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी खोज 1950 के दशक के अंत में हुई थी और यह गुजरात के आर्थिक विकास में महत्वपूर्ण भूमिका निभाता है, जिससे पेट्रोलियम और प्राकृतिक गैस का उत्पादन होता है।",
    },
    {
        "question": "भारत की 'सबसे बड़ी ताजे पानी की झील' कौन-सी है?",
        "answers": shuffle([
          { "text": "डल झील", "correct": false },
          { "text": "वुलर झील", "correct": true },
          { "text": "लोकतक झील", "correct": false },
          { "text": "कोलेरू झील", "correct": false }
        ]),
        "Explanation": "<i class='fa-solid fa-angles-right icon'></i> वुलर झील (Wular Lake) जम्मू और कश्मीर केंद्र शासित प्रदेश में स्थित भारत की सबसे बड़ी ताजे पानी की झील है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक विवर्तनिक (tectonic) झील है, जो टेक्टोनिक प्लेटों की गति से बने अवसाद के कारण निर्मित हुई है।<br><br><i class='fa-solid fa-angles-right icon'></i> झेलम नदी इसके माध्यम से बहती है, जिससे इसे जल प्राप्त होता है।"
      },
      {
        "question": "'मानसून' शब्द किस भाषा से लिया गया है?",
        "answers": shuffle([
          { "text": "लैटिन", "correct": false },
          { "text": "ग्रीक", "correct": false },
          { "text": "अरबी", "correct": true },
          { "text": "स्पेनिश", "correct": false }
        ]),
        "Explanation": "<i class='fa-solid fa-angles-right icon'></i> 'मानसून' (Monsoon) शब्द अरबी भाषा के शब्द 'मौसम' से लिया गया है, जिसका अर्थ 'मौसम' या 'ऋतु' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शब्द हवाओं की मौसमी दिशा में बदलाव को संदर्भित करता है जो भारत और दक्षिण एशिया में भारी वर्षा लाती हैं।"
      },
      {
        "question": "'भारत के किस राज्य को 'आर्किड राज्य' (Orchid State of India) के रूप में जाना जाता है?",
        "answers": shuffle([
          { "text": "सिक्किम", "correct": false },
          { "text": "उत्तराखंड", "correct": false },
          { "text": "अरुणाचल प्रदेश", "correct": true },
          { "text": "हिमाचल प्रदेश", "correct": false }
        ]),
        "Explanation": "<i class='fa-solid fa-angles-right icon'></i> अरुणाचल प्रदेश को 'आर्किड राज्य' (Orchid State of India) के रूप में जाना जाता है क्योंकि यह भारत में ऑर्किड की सबसे बड़ी विविधता का घर है, जिसमें ऑर्किड की 600 से अधिक प्रजातियाँ पाई जाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> राज्य की विविध जलवायु परिस्थितियाँ और घने जंगल इन फूलों की प्रजातियों के लिए आदर्श आवास प्रदान करते हैं।"
      },
      {
        "question": "भारत में 'सर्वाधिक नमक' (Salt) का उत्पादन किस राज्य में होता है?",
        "answers": shuffle([
          { "text": "राजस्थान", "correct": false },
          { "text": "गुजरात", "correct": true },
          { "text": "महाराष्ट्र", "correct": false },
          { "text": "तमिलनाडु", "correct": false }
        ]),
        "Explanation": "<i class='fa-solid fa-angles-right icon'></i> गुजरात भारत में नमक का सबसे बड़ा उत्पादक राज्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> राज्य की लंबी तटरेखा, खारी मिट्टी और शुष्क जलवायु समुद्री नमक के उत्पादन के लिए आदर्श हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> कच्छ की खाड़ी और खंभात की खाड़ी के तटीय क्षेत्र नमक उत्पादन के प्रमुख केंद्र हैं।"
      },
      {
        "question": "भारत की 'सबसे ऊँची चोटी' 'कंचनजंगा' किस राज्य/केंद्र शासित प्रदेश में स्थित है?",
        "answers": shuffle([
          { "text": "उत्तराखंड", "correct": false },
          { "text": "हिमाचल प्रदेश", "correct": false },
          { "text": "सिक्किम", "correct": true },
          { "text": "जम्मू और कश्मीर", "correct": false }
        ]),
        "Explanation": "<i class='fa-solid fa-angles-right icon'></i> कंचनजंगा (Kangchenjunga) भारत की सबसे ऊँची चोटी है (भारत में पूर्णतः स्थित) और दुनिया की तीसरी सबसे ऊँची चोटी है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह सिक्किम और नेपाल की सीमा पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे एक पवित्र पर्वत माना जाता है और यह कंचनजंगा राष्ट्रीय उद्यान का हिस्सा है, जो एक यूनेस्को विश्व धरोहर स्थल भी है।"
      },
      {
        "question": "'लेटराइट मिट्टी' मुख्य रूप से भारत के किन क्षेत्रों में पाई जाती है?",
        "answers": shuffle([
          { "text": "गंगा के मैदान", "correct": false },
          { "text": "दक्कन के पठार का पश्चिमी भाग और उत्तर-पूर्वी राज्य", "correct": true },
          { "text": "राजस्थान का मरुस्थलीय क्षेत्र", "correct": false },
          { "text": "हिमालयी क्षेत्र", "correct": false }
        ]),
        "Explanation": "<i class='fa-solid fa-angles-right icon'></i> लेटराइट मिट्टी (Laterite Soil) उच्च तापमान और भारी वर्षा वाले क्षेत्रों में तीव्र निक्षालन (leaching) के परिणामस्वरूप बनती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मुख्य रूप से पश्चिमी घाट, पूर्वी घाट, उत्तर-पूर्वी राज्यों (जैसे मेघालय, असम) और ओडिशा के कुछ हिस्सों में पाई जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह चाय, कॉफी, रबर और काजू जैसी बागान फसलों के लिए उपयुक्त है।"
      },
      {
        "question": "भारत की 'सर्वाधिक लंबी तटरेखा' वाला प्रायद्वीपीय राज्य कौन-सा है?",
        "answers": shuffle([
          { "text": "महाराष्ट्र", "correct": false },
          { "text": "तमिलनाडु", "correct": false },
          { "text": "आंध्र प्रदेश", "correct": false },
          { "text": "गुजरात", "correct": true }
        ]),
        "Explanation": "<i class='fa-solid fa-angles-right icon'></i> गुजरात भारत की सर्वाधिक लंबी तटरेखा वाला प्रायद्वीपीय राज्य है, जिसकी तटरेखा की लंबाई लगभग 1,214.7 किलोमीटर है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी जटिल और कटी-फटी तटरेखा, जिसमें खंभात की खाड़ी और कच्छ की खाड़ी शामिल है, इसकी लंबाई में योगदान करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> कुल मिलाकर (राज्यों और केंद्र शासित प्रदेशों को मिलाकर), अंडमान और निकोबार द्वीप समूह की तटरेखा सबसे लंबी है।"
      },
      {
        "question": "'काजीरंगा राष्ट्रीय उद्यान' किस जानवर के लिए प्रसिद्ध है?",
        "answers": shuffle([
          { "text": "बंगाल टाइगर", "correct": false },
          { "text": "एशियाई शेर", "correct": false },
          { "text": "एक सींग वाला गैंडा", "correct": true },
          { "text": "दलदली हिरण", "correct": false }
        ]),
        "Explanation": "<i class='fa-solid fa-angles-right icon'></i> काजीरंगा राष्ट्रीय उद्यान (Kaziranga National Park) असम में स्थित एक यूनेस्को विश्व धरोहर स्थल है, जो अपने एक सींग वाले गैंडों (One-horned Rhinoceros) की दुनिया की सबसे बड़ी आबादी के लिए प्रसिद्ध है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ब्रह्मपुत्र नदी के बाढ़ के मैदानों में स्थित है और विविध वन्यजीवों का समर्थन करता है।"
      },
      {
        "question": "भारत की 'सबसे पुरानी नदी घाटी परियोजना' कौन-सी है?",
        "answers": shuffle([
          { "text": "भाखड़ा नांगल परियोजना", "correct": false },
          { "text": "दामोदर घाटी परियोजना", "correct": true },
          { "text": "हीराकुंड परियोजना", "correct": false },
          { "text": "चंबल घाटी परियोजना", "correct": false }
        ]),
        "Explanation": "<i class='fa-solid fa-angles-right icon'></i> दामोदर घाटी परियोजना (Damodar Valley Project - DVC) स्वतंत्र भारत की पहली बहुउद्देशीय नदी घाटी परियोजना है, जिसे 1948 में शुरू किया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह संयुक्त राज्य अमेरिका की टेनेसी घाटी प्राधिकरण (Tennessee Valley Authority - TVA) के मॉडल पर आधारित है, जिसका उद्देश्य बाढ़ नियंत्रण, सिंचाई और विद्युत उत्पादन है।"
      },
      {
        "question": "भारत में 'सर्वाधिक चावल' का उत्पादन किस राज्य में होता है?",
        "answers": shuffle([
          { "text": "पंजाब", "correct": false },
          { "text": "उत्तर प्रदेश", "correct": false },
          { "text": "पश्चिम बंगाल", "correct": true },
          { "text": "आंध्र प्रदेश", "correct": false }
        ]),
        "Explanation": "<i class='fa-solid fa-angles-right icon'></i> पश्चिम बंगाल भारत का सबसे बड़ा चावल उत्पादक राज्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> गंगा-ब्रह्मपुत्र डेल्टा क्षेत्र की उपजाऊ जलोढ़ मिट्टी, पर्याप्त वर्षा और सिंचाई की सुविधाएँ चावल की खेती के लिए आदर्श परिस्थितियाँ प्रदान करती हैं।"
      },
      {
        "question": "'केसर' (Saffron) का उत्पादन भारत के किस राज्य/केंद्र शासित प्रदेश में मुख्य रूप से होता है?",
        "answers": shuffle([
          { "text": "हिमाचल प्रदेश", "correct": false },
          { "text": "उत्तराखंड", "correct": false },
          { "text": "जम्मू और कश्मीर", "correct": true },
          { "text": "सिक्किम", "correct": false }
        ]),
        "Explanation": "<i class='fa-solid fa-angles-right icon'></i> केसर (Saffron) का उत्पादन भारत में मुख्य रूप से जम्मू और कश्मीर केंद्र शासित प्रदेश में होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> कश्मीर घाटी, विशेषकर पंपोर क्षेत्र, अपनी उच्च गुणवत्ता वाली केसर की खेती के लिए विश्व प्रसिद्ध है।<br><br><i class='fa-solid fa-angles-right icon'></i> केसर को 'लाल सोना' भी कहा जाता है और यह एक अत्यंत मूल्यवान मसाला है।"
      },
      {
        "question": "'थार मरुस्थल' का मुख्य विस्तार भारत के किस राज्य में है?",
        "answers": shuffle([
          { "text": "पंजाब", "correct": false },
          { "text": "हरियाणा", "correct": false },
          { "text": "राजस्थान", "correct": true },
          { "text": "गुजरात", "correct": false }
        ]),
        "Explanation": "<i class='fa-solid fa-angles-right icon'></i> थार मरुस्थल (Thar Desert), जिसे महान भारतीय मरुस्थल भी कहा जाता है, का मुख्य विस्तार भारत के राजस्थान राज्य में है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका कुछ हिस्सा गुजरात, पंजाब और हरियाणा में भी फैला हुआ है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह दुनिया के सबसे घनी आबादी वाले मरुस्थलों में से एक है।"
      },
      {
        "question": "भारत में 'सर्वाधिक जनसंख्या वृद्धि दर' (Population Growth Rate) किस दशक में दर्ज की गई थी?",
        "answers": shuffle([
          { "text": "1951-1961", "correct": false },
          { "text": "1961-1971", "correct": true },
          { "text": "1971-1981", "correct": false },
          { "text": "1981-1991", "correct": false }
        ]),
        "Explanation": "<i class='fa-solid fa-angles-right icon'></i> भारत में सर्वाधिक जनसंख्या वृद्धि दर 1961-1971 के दशक में (24.8%) दर्ज की गई थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इस अवधि को 'जनसंख्या विस्फोट' का दशक भी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> मृत्यु दर में तेजी से गिरावट (बेहतर स्वास्थ्य सेवाओं के कारण) और जन्म दर का उच्च बने रहना इस उच्च वृद्धि दर के प्रमुख कारण थे।"
      },
      {
        "question": "'सरदार सरोवर बांध' किस नदी पर स्थित है?",
        "answers": shuffle([
          { "text": "तापी", "correct": false },
          { "text": "महानदी", "correct": false },
          { "text": "कृष्णा", "correct": false },
          { "text": "नर्मदा", "correct": true }
        ]),
        "Explanation": "<i class='fa-solid fa-angles-right icon'></i> सरदार सरोवर बांध (Sardar Sarovar Dam) गुजरात में नर्मदा नदी पर स्थित एक विशाल गुरुत्वाकर्षण बांध है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह नर्मदा घाटी परियोजना का एक महत्वपूर्ण हिस्सा है और गुजरात, मध्य प्रदेश, महाराष्ट्र और राजस्थान को सिंचाई और जलविद्युत के लाभ प्रदान करता है।"
      },
      {
        "question": "भारत में 'रबी फसलों' की कटाई किस महीने में होती है?",
        "answers": shuffle([
          { "text": "अप्रैल-मई", "correct": true },
          { "text": "जून-जुलाई", "correct": false },
          { "text": "अक्टूबर-नवंबर", "correct": false },
          { "text": "फरवरी-मार्च", "correct": false }
        ]),
        "Explanation": "<i class='fa-solid fa-angles-right icon'></i> रबी फसलें शीत ऋतु की फसलें होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इनकी बुवाई अक्टूबर-नवंबर के महीनों में की जाती है और कटाई मार्च-अप्रैल (और कुछ क्षेत्रों में मई तक) में की जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> गेहूं, जौ, चना, मटर, सरसों और अलसी प्रमुख रबी फसलें हैं।"
      },
      {
        "question": "'कोयना बांध परियोजना' भारत के किस राज्य में स्थित है?",
        "answers": shuffle([
          { "text": "कर्नाटक", "correct": false },
          { "text": "महाराष्ट्र", "correct": true },
          { "text": "गुजरात", "correct": false },
          { "text": "आंध्र प्रदेश", "correct": false }
        ]),
        "Explanation": "<i class='fa-solid fa-angles-right icon'></i> कोयना बांध परियोजना महाराष्ट्र राज्य में कोयना नदी पर स्थित एक प्रमुख जलविद्युत परियोजना है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह परियोजना महाराष्ट्र की सबसे बड़ी पनबिजली परियोजनाओं में से एक है और राज्य की ऊर्जा आवश्यकताओं को पूरा करने में महत्वपूर्ण भूमिका निभाती है।"
      },
      {
        "question": "भारत की 'सबसे लंबी तटरेखा' वाला केंद्र शासित प्रदेश कौन-सा है?",
        "answers": shuffle([
          { "text": "पुडुचेरी", "correct": false },
          { "text": "लक्षद्वीप", "correct": false },
          { "text": "अंडमान और निकोबार द्वीप समूह", "correct": true },
          { "text": "दमन और दीव", "correct": false }
        ]),
        "Explanation": "<i class='fa-solid fa-angles-right icon'></i> अंडमान और निकोबार द्वीप समूह की तटरेखा भारत के सभी राज्यों और केंद्र शासित प्रदेशों में सबसे लंबी है, जिसकी लंबाई लगभग 1,962 किलोमीटर है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह द्वीप समूह बंगाल की खाड़ी में स्थित है और इसमें कई छोटे-बड़े द्वीप शामिल हैं, जो इसकी लंबी और जटिल तटरेखा बनाते हैं।"
      },
      {
        "question": "'डेल्टा' का निर्माण किस नदी के मुहाने पर होता है?",
        "answers": shuffle([
          { "text": "नर्मदा", "correct": false },
          { "text": "तापी", "correct": false },
          { "text": "गंगा", "correct": true },
          { "text": "सिंधु", "correct": false }
        ]),
        "Explanation": "<i class='fa-solid fa-angles-right icon'></i> डेल्टा का निर्माण उन नदियों के मुहाने पर होता है जो अपने साथ बड़ी मात्रा में अवसाद लाती हैं और उन्हें समुद्र में विसर्जित करने से पहले जमा करती हैं, जहाँ ज्वार की लहरें कमजोर होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> गंगा-ब्रह्मपुत्र डेल्टा दुनिया का सबसे बड़ा डेल्टा है।<br><br><i class='fa-solid fa-angles-right icon'></i> नर्मदा और तापी नदियाँ ज्वारनदमुख (estuaries) बनाती हैं क्योंकि वे भ्रंश घाटियों से बहती हैं और तेज ज्वार के कारण मुहाने पर अवसाद जमा नहीं कर पातीं।"
      },
      {
        "question": "भारत में 'सर्वाधिक क्रोमाइट' (Chromite) का उत्पादन किस राज्य में होता है?",
        "answers": shuffle([
          { "text": "झारखंड", "correct": false },
          { "text": "ओडिशा", "correct": true },
          { "text": "कर्नाटक", "correct": false },
          { "text": "महाराष्ट्र", "correct": false }
        ]),
        "Explanation": "<i class='fa-solid fa-angles-right icon'></i> ओडिशा भारत में क्रोमाइट (Chromite) का सबसे बड़ा उत्पादक राज्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> क्रोमाइट क्रोमियम का मुख्य अयस्क है, जिसका उपयोग धातुकर्म, रसायन और आगरोक उद्योगों में किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ओडिशा के जाजपुर जिले का सुकिंदा घाटी क्षेत्र क्रोमाइट के विशाल भंडार के लिए प्रसिद्ध है।"
      },
      {
        "question": "भारत का 'सबसे बड़ा टाइगर रिजर्व' (क्षेत्रफल के अनुसार) कौन-सा है?",
        "answers": shuffle([
          { "text": "नागार्जुनसागर-श्रीशैलम टाइगर रिजर्व", "correct": true },
          { "text": "पेरियार टाइगर रिजर्व", "correct": false },
          { "text": "सुंदरबन टाइगर रिजर्व", "correct": false },
          { "text": "जिम कॉर्बेट टाइगर रिजर्व", "correct": false }
        ]),
        "Explanation": "<i class='fa-solid fa-angles-right icon'></i> नागार्जुनसागर-श्रीशैलम टाइगर रिजर्व भारत का सबसे बड़ा टाइगर रिजर्व है, जो आंध्र प्रदेश और तेलंगाना राज्यों में फैला हुआ है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कृष्णा नदी के बेसिन में स्थित है और बाघों के साथ-साथ अन्य वन्यजीवों की प्रजातियों का भी घर है।"
      },
      {
        question: "भारत की 'सबसे लंबी नदी' जो पूरी तरह से भारतीय क्षेत्र में बहती है?",
        answers: shuffle([
            { text: "ब्रह्मपुत्र", correct: false },
            { text: "सिंधु", correct: false },
            { text: "गंगा", correct: false },
            { text: "गोदावरी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोदावरी नदी प्रायद्वीपीय भारत की सबसे लंबी नदी है और भारत के भीतर बहने वाली सबसे लंबी नदी भी है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह महाराष्ट्र के त्र्यंबकेश्वर से निकलती है और बंगाल की खाड़ी में गिरती है।<br><br><i class='fa-solid fa-angles-right icon'></i> गंगा नदी सबसे लंबी नदी है लेकिन यह केवल भारत में नहीं बहती (बांग्लादेश में भी बहती है)।<br><br><i class='fa-solid fa-angles-right icon'></i> ब्रह्मपुत्र और सिंधु भी भारत से बाहर से आती हैं।"
    },
    {
        question: "'अंकलेश्वर' तेलक्षेत्र भारत के किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "असम", correct: false },
            { text: "गुजरात", correct: true },
            { text: "महाराष्ट्र", correct: false },
            { text: "राजस्थान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंकलेश्वर (Ankleshwar) गुजरात राज्य में स्थित एक प्रमुख ऑन-शोर (भूमि पर स्थित) तेलक्षेत्र है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी खोज 1950 के दशक के अंत में हुई थी और यह गुजरात के आर्थिक विकास में महत्वपूर्ण भूमिका निभाता है, जिससे पेट्रोलियम और प्राकृतिक गैस का उत्पादन होता है।"
    },
    {
        question: "भारत में 'सर्वाधिक जनसंख्या घनत्व' (Population Density) वाला राज्य कौन-सा है (2011 जनगणना के अनुसार)?",
        answers: shuffle([
            { text: "उत्तर प्रदेश", correct: false },
            { text: "बिहार", correct: true },
            { text: "पश्चिम बंगाल", correct: false },
            { text: "केरल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जनगणना 2011 के अनुसार, बिहार भारत का सर्वाधिक जनसंख्या घनत्व वाला राज्य है, जहाँ प्रति वर्ग किलोमीटर में 1,106 व्यक्ति निवास करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह राज्य गंगा के मैदान में स्थित है, जो कृषि और मानव बस्तियों के लिए अनुकूल परिस्थितियाँ प्रदान करता है।"
    },
    {
        question: "'सिंधु जल संधि' (Indus Waters Treaty) किन दो देशों के बीच हुई थी?",
        answers: shuffle([
            { text: "भारत और चीन", correct: false },
            { text: "भारत और नेपाल", correct: false },
            { text: "भारत और पाकिस्तान", correct: true },
            { text: "भारत और बांग्लादेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिंधु जल संधि (Indus Waters Treaty) भारत और पाकिस्तान के बीच 1960 में हुई एक जल-साझाकरण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह विश्व बैंक की मध्यस्थता से हुई थी और सिंधु नदी प्रणाली की छह नदियों के जल के उपयोग को नियंत्रित करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> संधि के तहत, सिंधु, झेलम और चिनाब का जल पाकिस्तान को आवंटित किया गया, जबकि रावी, ब्यास और सतलज का जल भारत को आवंटित किया गया।"
    },
    {
        question: "भारत में 'नीली क्रांति' (Blue Revolution) किससे संबंधित है?",
        answers: shuffle([
            { text: "तिलहन उत्पादन में वृद्धि", correct: false },
            { text: "दूध उत्पादन में वृद्धि", correct: false },
            { text: "मछली उत्पादन में वृद्धि", correct: true },
            { text: "उर्वरक उत्पादन में वृद्धि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नीली क्रांति' (Blue Revolution) भारत में मछली उत्पादन और जलीय कृषि (aquaculture) को बढ़ावा देने से संबंधित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका उद्देश्य मत्स्य पालन क्षेत्र में आत्मनिर्भरता प्राप्त करना और समुद्री तथा अंतर्देशीय मत्स्य संसाधनों का प्रभावी ढंग से उपयोग करना है ताकि खाद्य सुरक्षा और किसानों की आय में वृद्धि हो सके।"
    },
    {
        question: "'कोरोमंडल तट' पर शीत ऋतु में वर्षा का मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "पश्चिमी विक्षोभ", correct: false },
            { text: "दक्षिण-पश्चिमी मॉनसून", correct: false },
            { text: "उत्तर-पूर्वी मॉनसून", correct: true },
            { text: "चक्रवात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत के कोरोमंडल तट (तमिलनाडु और आंध्र प्रदेश के कुछ हिस्से) पर शीत ऋतु में (अक्टूबर से दिसंबर) वर्षा का मुख्य कारण उत्तर-पूर्वी मॉनसून (Retreating Monsoon) है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये मॉनसूनी पवनें बंगाल की खाड़ी के ऊपर से गुजरते समय नमी उठा लेती हैं और तट से टकराकर वर्षा करती हैं।"
    },
    {
        question: "भारत का 'मानक मध्याह्न रेखा' (Standard Meridian) कौन-सा है?",
        answers: shuffle([
            { text: "82° 30′ पूर्वी देशांतर", correct: true },
            { text: "84° 30′ पूर्वी देशांतर", correct: false },
            { text: "75° 30′ पूर्वी देशांतर", correct: false },
            { text: "90° 30′ पूर्वी देशांतर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत का मानक मध्याह्न रेखा (Standard Meridian of India) 82° 30′ पूर्वी देशांतर है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उत्तर प्रदेश के मिर्जापुर से होकर गुजरती है और पूरे भारत के लिए मानक समय (IST - Indian Standard Time) निर्धारित करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ग्रीनविच मीन टाइम (GMT) से 5 घंटे 30 मिनट आगे है।"
    },
    {
        question: "'जायद फसलें' (Zaid Crops) किस ऋतु में उगाई जाती हैं?",
        answers: shuffle([
            { text: "खरीफ और रबी के बीच", correct: true },
            { text: "केवल खरीफ के साथ", correct: false },
            { text: "केवल रबी के साथ", correct: false },
            { text: "पूरे वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जायद फसलें (Zaid Crops) खरीफ और रबी फसलों के बीच एक छोटे, ग्रीष्मकालीन मौसम में उगाई जाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अवधि आमतौर पर मार्च से जून तक होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस मौसम में पानी की पर्याप्त उपलब्धता वाले क्षेत्रों में तरबूज, खरबूजा, खीरा, ककड़ी और कुछ चारा फसलें उगाई जाती हैं।"
    },
    {
        question: "भारत में 'लाल मिट्टी' का रंग 'लाल' किस खनिज की उपस्थिति के कारण होता है?",
        answers: shuffle([
            { text: "चूना", correct: false },
            { text: "फॉस्फोरस", correct: false },
            { text: "लौह ऑक्साइड", correct: true },
            { text: "नाइट्रोजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टी (Red Soil) का रंग 'लाल' उसमें लौह ऑक्साइड (Iron Oxides) की उपस्थिति के कारण होता है, विशेषकर क्रिस्टलीय और कायांतरित चट्टानों पर।<br><br><i class='fa-solid fa-angles-right icon'></i> जब यह मिट्टी जलयोजित (hydrated) अवस्था में होती है तो यह पीली दिखाई देती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मिट्टी आमतौर पर अम्लीय होती है और इसमें नाइट्रोजन, फॉस्फोरस और ह्यूमस की कमी होती है।"
    },
    {
        question: "'शिवसमुद्रम जलप्रपात' (Shivanasamudra Falls) किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "गोदावरी", correct: false },
            { text: "कृष्णा", correct: false },
            { text: "कावेरी", correct: true },
            { text: "पेरियार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शिवसमुद्रम जलप्रपात (Shivanasamudra Falls) कर्नाटक में कावेरी नदी पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक महत्वपूर्ण जलप्रपात है और भारत में सबसे पुराने जलविद्युत स्टेशनों में से एक (1902 में स्थापित) यहीं पर है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पर्यटन और विद्युत उत्पादन दोनों के लिए महत्वपूर्ण है।"
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