const questions = [
  {
      topHeading: "भारत के भूगोल पर आधारित 50 बहुविकल्पीय प्रश्न (MCQs) part 1  (quiz_no. 1)"
  },
    {
      question: "भारत का सबसे बड़ा राज्य (क्षेत्रफल के आधार पर) कौन-सा है?",
      answers: shuffle([
        { text: "महाराष्ट्र", correct: false },
        { text: "उत्तरप्रदेश", correct: false },
        { text: "राजस्थान", correct: true },
        { text: "मध्यप्रदेश", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> राजस्थान भारत का सबसे बड़ा राज्य है जो लगभग 3,42,239 वर्ग किलोमीटर क्षेत्र में फैला हुआ है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह राज्य भारत के उत्तर-पश्चिम में स्थित है और इसकी सीमाएं पाकिस्तान से भी लगती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ थार का मरुस्थल प्रमुख भौगोलिक विशेषता है, जो भारत का सबसे बड़ा मरुस्थल है।<br><br><i class='fa-solid fa-angles-right icon'></i> राजस्थान की सीमाएँ 5 राज्यों से लगती हैं – पंजाब (उत्तर), हरियाणा (उत्तर-पूर्व), उत्तर प्रदेश (पूर्व), मध्य प्रदेश (दक्षिण-पूर्व) और गुजरात (दक्षिण-पश्चिम)।<br><br><i class='fa-solid fa-angles-right icon'></i> अपनी विशालता के कारण यहाँ विभिन्न प्रकार की भू-आकृतियाँ और जलवायु देखने को मिलती हैं।",
    },
    {
      question: "भारत की सबसे लंबी नदी कौन-सी है जो पूरी तरह भारत में ही बहती है?",
      answers: shuffle([
        { text: "गंगा", correct: false },
        { text: "गोदावरी", correct: true },
        { text: "कृष्णा", correct: false },
        { text: "यमुना", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> गोदावरी नदी को 'दक्षिण गंगा' या 'वृद्ध गंगा' भी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी कुल लंबाई लगभग 1465 किलोमीटर है और यह भारत की सबसे लंबी नदी है जो पूरी तरह भारत में ही बहती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका उद्गम महाराष्ट्र के नासिक जिले में त्र्यंबकेश्वर के पास से होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह नदी महाराष्ट्र, तेलंगाना, आंध्र प्रदेश, छत्तीसगढ़, ओडिशा और कर्नाटक राज्यों से होकर बहती है और अंततः बंगाल की खाड़ी में जाकर गिरती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रायद्वीपीय भारत की सबसे बड़ी नदी प्रणाली है और अपने विशाल बेसिन क्षेत्र के कारण कृषि और जलविद्युत उत्पादन के लिए अत्यंत महत्वपूर्ण है।",
    },
    {
      question: "भारत का कौन-सा पर्वत 'सह्याद्रि' के नाम से भी जाना जाता है?",
      answers: shuffle([
        { text: "अरावली पर्वतमाला", correct: false },
        { text: "पूर्वी घाट", correct: false },
        { text: "पश्चिमी घाट", correct: true },
        { text: "सतपुड़ा पर्वतमाला", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> पश्चिमी घाट को 'सह्याद्रि' के नाम से भी जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक पर्वत श्रृंखला है जो भारतीय प्रायद्वीप के पश्चिमी तट के समानांतर चलती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह लगभग 1600 किलोमीटर लंबी है और गुजरात से शुरू होकर महाराष्ट्र, गोवा, कर्नाटक, केरल और तमिलनाडु तक फैली हुई है।<br><br><i class='fa-solid fa-angles-right icon'></i> पश्चिमी घाट यूनेस्को की विश्व धरोहर स्थल है और जैव विविधता के 'हॉटस्पॉट' में से एक है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कई नदियों (जैसे गोदावरी, कृष्णा, कावेरी) का उद्गम स्थल है और मॉनसून की वर्षा को आकर्षित करने में महत्वपूर्ण भूमिका निभाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ कई राष्ट्रीय उद्यान और वन्यजीव अभयारण्य भी स्थित हैं।",
    },
    {
      question: "भारत में शीतकालीन वर्षा मुख्यतः किस कारण से होती है?",
      answers: shuffle([
        { text: "दक्षिण-पश्चिमी मॉनसून", correct: false },
        { text: "उत्तर-पूर्वी मॉनसून", correct: false },
        { text: "पश्चिमी विक्षोभ", correct: true },
        { text: "चक्रवात", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> भारत में शीतकालीन वर्षा (दिसंबर से फरवरी के बीच) मुख्यतः पश्चिमी विक्षोभ (Western Disturbances) के कारण होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये भूमध्य सागर से उत्पन्न होने वाले अतिरिक्त-उष्णकटिबंधीय तूफान हैं जो ईरान, अफगानिस्तान और पाकिस्तान को पार करते हुए भारतीय उपमहाद्वीप में प्रवेश करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये विक्षोभ विशेष रूप से उत्तर भारत, विशेषकर पंजाब, हरियाणा, उत्तर प्रदेश, उत्तराखंड और हिमाचल प्रदेश में वर्षा और हिमपात लाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये वर्षा रबी की फसलों, जैसे गेहूं, के लिए अत्यंत महत्वपूर्ण मानी जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> दक्षिण भारत के कुछ हिस्सों में उत्तर-पूर्वी मॉनसून से भी शीतकालीन वर्षा होती है, लेकिन उत्तर भारत में पश्चिमी विक्षोभ प्रमुख हैं।",
    },
    {
      question: "निम्नलिखित में से कौन-सा दर्रा सिक्किम राज्य में स्थित है?",
      answers: shuffle([
        { text: "नाथू ला", correct: true },
        { text: "शिपकी ला", correct: false },
        { text: "रोहतांग दर्रा", correct: false },
        { text: "जोजिला दर्रा", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> नाथू ला दर्रा सिक्किम राज्य में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक महत्वपूर्ण पर्वतीय दर्रा है जो भारतीय राज्य सिक्किम को चीन के तिब्बत स्वायत्त क्षेत्र से जोड़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्राचीन रेशम मार्ग (Silk Route) का एक हिस्सा था और भारत-चीन व्यापार के लिए एक महत्वपूर्ण बिंदु है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह लगभग 4,310 मीटर (14,140 फीट) की ऊंचाई पर स्थित है और रणनीतिक रूप से अत्यंत महत्वपूर्ण है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य दर्रे: शिपकी ला (हिमाचल प्रदेश और तिब्बत को जोड़ता है), रोहतांग दर्रा (हिमाचल प्रदेश में कुल्लू घाटी को लाहौल और स्पीति घाटियों से जोड़ता है), और जोजिला दर्रा (जम्मू और कश्मीर/लद्दाख में श्रीनगर और लेह को जोड़ता है)।",
    },
    {
      question: "भारत की सबसे बड़ी खारे पानी की झील कौन-सी है?",
      answers: shuffle([
        { text: "वुलर झील", correct: false },
        { text: "चिल्का झील", correct: true },
        { text: "सांभर झील", correct: false },
        { text: "कोलेरू झील", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> चिल्का झील भारत की सबसे बड़ी खारे पानी की झील (लैगून) है, जो ओडिशा राज्य में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह लगभग 1,100 वर्ग किलोमीटर क्षेत्र में फैली हुई है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक महत्वपूर्ण वेटलैंड है और प्रवासी पक्षियों के लिए एक प्रमुख शीतकालीन निवास स्थान है।<br><br><i class='fa-solid fa-angles-right icon'></i> चिल्का झील यूनेस्को की अस्थायी विश्व धरोहर स्थलों की सूची में शामिल है और रामसर साइट के रूप में भी नामित है, जो इसके पारिस्थितिक महत्व को दर्शाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मछली पकड़ने और पर्यटन के लिए भी एक महत्वपूर्ण क्षेत्र है।<br><br><i class='fa-solid fa-angles-right icon'></i> वुलर झील (जम्मू और कश्मीर) भारत की सबसे बड़ी मीठे पानी की झील है, जबकि सांभर झील (राजस्थान) भारत की सबसे बड़ी अंतर्देशीय खारे पानी की झील है।",
    },
    {
      question: "भारत का एकमात्र सक्रिय ज्वालामुखी कहाँ स्थित है?",
      answers: shuffle([
        { text: "अंडमान और निकोबार द्वीप समूह", correct: true },
        { text: "लक्षद्वीप", correct: false },
        { text: "दमन और दीव", correct: false },
        { text: "पुडुचेरी", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> भारत का एकमात्र सक्रिय ज्वालामुखी 'बैरन द्वीप' पर स्थित है, जो अंडमान और निकोबार द्वीप समूह में आता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अंडमान सागर में स्थित एक छोटा द्वीप है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ज्वालामुखी समय-समय पर सक्रिय होता रहता है, जिसकी हाल की गतिविधियाँ 2017 में देखी गई थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारतीय प्लेट और बर्मा माइक्रोप्लेट के मिलन बिंदु पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत में नारकोंडम द्वीप पर एक प्रसुप्त ज्वालामुखी भी है, जो अंडमान सागर में ही स्थित है।",
    },
    {
      question:
        "निम्नलिखित में से कौन-सा राज्य 'सेवन सिस्टर्स' (पूर्वोत्तर भारत के सात राज्य) का हिस्सा नहीं है?",
      answers: shuffle([
        { text: "अरुणाचल प्रदेश", correct: false },
        { text: "त्रिपुरा", correct: false },
        { text: "सिक्किम", correct: true },
        { text: "मिजोरम", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> 'सेवन सिस्टर्स' पूर्वोत्तर भारत के सात राज्यों के समूह को संदर्भित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इनमें अरुणाचल प्रदेश, असम, मणिपुर, मेघालय, मिजोरम, नागालैंड और त्रिपुरा शामिल हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये राज्य अपनी अनूठी संस्कृति, भूगोल और जैव विविधता के लिए जाने जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> सिक्किम भौगोलिक रूप से पूर्वोत्तर भारत में स्थित है, लेकिन इसे 'सेवन सिस्टर्स' का हिस्सा नहीं माना जाता है, बल्कि इसे अक्सर 'सेवन सिस्टर्स का भाई' कहा जाता है, क्योंकि यह उनसे बाद में भारतीय संघ में शामिल हुआ और भौगोलिक रूप से उनसे थोड़ा अलग है।",
    },
    {
      question:
        "भारत में 'दक्कन ट्रैप' का निर्माण किस प्रकार की चट्टानों से हुआ है?",
      answers: shuffle([
        { text: "रूपांतरित चट्टानें", correct: false },
        { text: "आग्नेय चट्टानें (बेसाल्ट)", correct: true },
        { text: "अवसादी चट्टानें", correct: false },
        { text: "ग्रेनाइट चट्टानें", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> दक्कन ट्रैप भारत के दक्कन पठार के बड़े हिस्से को कवर करने वाली एक विशाल आग्नेय प्रांत है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका निर्माण मुख्य रूप से क्रेटेशियस काल के अंत और पेलियोसीन युग की शुरुआत में बड़े पैमाने पर ज्वालामुखी विस्फोटों से निकलने वाले बेसाल्टिक लावा के प्रवाह से हुआ है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये लावा प्रवाह लाखों वर्षों तक जमा होते रहे, जिससे सीढ़ीदार या 'ट्रैप' जैसी संरचनाएँ बनीं (मराठी शब्द 'ट्रैप' का अर्थ 'सीढ़ी' होता है)।<br><br><i class='fa-solid fa-angles-right icon'></i> ये चट्टानें काली कपास मिट्टी (रेगुर मिट्टी) के निर्माण के लिए जिम्मेदार हैं, जो कपास की खेती के लिए बहुत उपजाऊ होती है।",
    },
    {
      question:
        "भारत का सबसे ऊँचा पर्वत शिखर कौन-सा है जो पूरी तरह भारत में स्थित है?",
      answers: shuffle([
        { text: "माउंट एवरेस्ट", correct: false },
        { text: "कंचनजंगा", correct: false },
        { text: "नंदा देवी", correct: true },
        { text: "के2 (गॉडविन ऑस्टिन)", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> नंदा देवी भारत का सबसे ऊँचा पर्वत शिखर है जो पूरी तरह भारत के उत्तराखंड राज्य में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी ऊंचाई 7,816 मीटर (25,643 फीट) है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह नंदा देवी राष्ट्रीय उद्यान और बायोस्फीयर रिजर्व का हिस्सा है, जो यूनेस्को की विश्व धरोहर स्थल है।<br><br><i class='fa-solid fa-angles-right icon'></i> माउंट एवरेस्ट (नेपाल और चीन में) और के2 (गॉडविन ऑस्टिन, पाकिस्तान अधिकृत कश्मीर/चीन सीमा पर) विश्व के सबसे ऊँचे शिखर हैं, लेकिन वे पूरी तरह से भारत में स्थित नहीं हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> कंचनजंगा (8,586 मीटर) भारत और नेपाल की सीमा पर स्थित है।",
    },
    {
      question:
        "भारत में 'करेवा' भू-आकृतियाँ किस राज्य/केंद्र शासित प्रदेश में पाई जाती हैं?",
      answers: shuffle([
        { text: "उत्तराखंड", correct: false },
        { text: "हिमाचल प्रदेश", correct: false },
        { text: "जम्मू और कश्मीर", correct: true },
        { text: "सिक्किम", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> 'करेवा' कश्मीर घाटी में पाई जाने वाली एक विशेष प्रकार की हिमानी निक्षेप (glacial deposits) वाली भू-आकृतियाँ हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये मिट्टी, रेत, मिट्टी और बोल्डर के जमाव से बनी जलोढ़ और हिमनदीय मृदा की परतें हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये केसर, बादाम, अखरोट और सेब की खेती के लिए बहुत उपजाऊ मानी जाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> करेवा अपनी भूगर्भीय महत्वता और आर्थिक उपयोगिता के लिए प्रसिद्ध हैं, क्योंकि वे कश्मीर घाटी की अनूठी कृषि प्रणाली का आधार हैं।",
    },
    {
      question: "भारत में किस प्रकार की जलवायु पाई जाती है?",
      answers: shuffle([
        { text: "भूमध्यसागरीय जलवायु", correct: false },
        { text: "उष्णकटिबंधीय सवाना जलवायु", correct: false },
        { text: "उष्णकटिबंधीय मॉनसून जलवायु", correct: true },
        { text: "शुष्क रेगिस्तानी जलवायु", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> भारत में मुख्य रूप से उष्णकटिबंधीय मॉनसून जलवायु पाई जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह जलवायु ग्रीष्मकालीन मॉनसून (दक्षिण-पश्चिमी मॉनसून) और शीतकालीन मॉनसून (उत्तर-पूर्वी मॉनसून) के मौसमी उत्क्रमण की विशेषता है।<br><br><i class='fa-solid fa-angles-right icon'></i> दक्षिण-पश्चिमी मॉनसून देश के अधिकांश हिस्सों में भारी वर्षा लाता है, जबकि उत्तर-पूर्वी मॉनसून मुख्य रूप से तमिलनाडु और आंध्र प्रदेश के कुछ हिस्सों में वर्षा करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह जलवायु कृषि पर बहुत अधिक निर्भर करती है और भारतीय अर्थव्यवस्था की रीढ़ है।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत की विशाल भौगोलिक विविधता के कारण, यहाँ कुछ क्षेत्रों में उष्णकटिबंधीय आर्द्र, अर्ध-शुष्क और अल्पाइन जलवायु भी पाई जाती है, लेकिन मॉनसून समग्र रूप से हावी है।",
    },
    {
      question: "भारत का सबसे दक्षिणी बिंदु 'इंदिरा पॉइंट' कहाँ स्थित है?",
      answers: shuffle([
        { text: "तमिलनाडु", correct: false },
        { text: "केरल", correct: false },
        { text: "अंडमान और निकोबार द्वीप समूह", correct: true },
        { text: "लक्षद्वीप", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> भारत का सबसे दक्षिणी बिंदु 'इंदिरा पॉइंट' है, जो निकोबार द्वीप समूह के ग्रेट निकोबार द्वीप पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह 6°45′ उत्तरी अक्षांश पर भूमध्य रेखा के काफी करीब है।<br><br><i class='fa-solid fa-angles-right icon'></i> 2004 की सुनामी में यह काफी हद तक जलमग्न हो गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत के कुल भौगोलिक क्षेत्र का सबसे दक्षिणी छोर है।<br><br><i class='fa-solid fa-angles-right icon'></i> मुख्य भूमि का सबसे दक्षिणी बिंदु कन्याकुमारी है, जो तमिलनाडु में स्थित है।",
    },
    {
      question: "भारत के किस राज्य की तटरेखा सबसे लंबी है?",
      answers: shuffle([
        { text: "आंध्र प्रदेश", correct: false },
        { text: "महाराष्ट्र", correct: false },
        { text: "गुजरात", correct: true },
        { text: "तमिलनाडु", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> गुजरात राज्य की तटरेखा भारत के सभी राज्यों में सबसे लंबी है, जिसकी लंबाई लगभग 1,600 किलोमीटर है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह राज्य अरब सागर के किनारे स्थित है और इसमें कई खाड़ियाँ और प्रायद्वीप शामिल हैं, जैसे कच्छ की खाड़ी, खंभात की खाड़ी और काठियावाड़ प्रायद्वीप।<br><br><i class='fa-solid fa-angles-right icon'></i> लंबी तटरेखा गुजरात को समुद्री व्यापार, मत्स्य पालन और बंदरगाह विकास के लिए एक महत्वपूर्ण राज्य बनाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके बाद आंध्र प्रदेश (लगभग 974 किमी) और तमिलनाडु (लगभग 906 किमी) का स्थान आता है।",
    },
    {
      question: "भारत में 'लाल मिट्टी' का रंग लाल क्यों होता है?",
      answers: shuffle([
        { text: "उच्च कार्बन सामग्री के कारण", correct: false },
        { text: "लोहे के ऑक्साइड की उपस्थिति के कारण", correct: true },
        { text: "एल्यूमीनियम के उच्च स्तर के कारण", correct: false },
        { text: "जैविक पदार्थ की अधिकता के कारण", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> लाल मिट्टी (Red Soil) का रंग लाल या लालिमा युक्त लोहे के ऑक्साइड (जैसे फेरिक ऑक्साइड) की उपस्थिति के कारण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मिट्टी मुख्यतः प्रायद्वीपीय भारत के पूर्वी और दक्षिणी भागों में, जैसे ओडिशा, छत्तीसगढ़, मध्य गंगा के मैदान के दक्षिणी भाग और पश्चिमी घाट के पिडमोंट क्षेत्र में पाई जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मिट्टी ग्रेनाइट और नीस जैसी क्रिस्टलीय आग्नेय और मेटामॉर्फिक चट्टानों के अपक्षय से बनती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह आमतौर पर रेतीली और अम्लीय होती है और इसमें नाइट्रोजन, फास्फोरस और ह्यूमस की कमी होती है, लेकिन उचित उर्वरक और सिंचाई के साथ बाजरा, मूंगफली, आलू और दालें उगाई जा सकती हैं।",
    },
    {
      question:
        "भारत में किस प्रकार की मिट्टी सबसे बड़े क्षेत्र को कवर करती है और कृषि के लिए सबसे महत्वपूर्ण है?",
      answers: shuffle([
        { text: "लाल मिट्टी", correct: false },
        { text: "काली मिट्टी", correct: false },
        { text: "जलोढ़ मिट्टी", correct: true },
        { text: "लेटेराइट मिट्टी", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> जलोढ़ मिट्टी (Alluvial Soil) भारत में लगभग 40-45% भूमि पर पाई जाती है, जिससे यह देश के सबसे बड़े क्षेत्र को कवर करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मिट्टी मुख्यतः उत्तरी मैदानों (सिंधु, गंगा और ब्रह्मपुत्र नदियों द्वारा निर्मित) और तटीय मैदानों में पाई जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> नदियों द्वारा लाए गए अवसादों के जमाव से बनने के कारण यह अत्यंत उपजाऊ होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें पोटाश, फास्फोरस और चूने की पर्याप्त मात्रा होती है, जो चावल, गेहूं, गन्ना और दलहन जैसी विभिन्न फसलों की खेती के लिए आदर्श होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी उच्च उर्वरता के कारण यह भारत में कृषि उत्पादन और जनसंख्या घनत्व के लिए सबसे महत्वपूर्ण मिट्टी है।",
    },
    {
      question: "निम्नलिखित में से कौन-सी नदी अरब सागर में गिरती है?",
      answers: shuffle([
        { text: "महानदी", correct: false },
        { text: "गोदावरी", correct: false },
        { text: "कृष्णा", correct: false },
        { text: "तापी", correct: true },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> तापी (या ताप्ती) नदी उन कुछ प्रमुख प्रायद्वीपीय नदियों में से एक है जो पूर्व से पश्चिम की ओर बहती है और अरब सागर में गिरती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मध्य प्रदेश में सतपुड़ा रेंज से निकलती है और महाराष्ट्र और गुजरात से होकर बहती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह नर्मदा नदी के समानांतर एक भ्रंश घाटी से होकर बहती है।<br><br><i class='fa-solid fa-angles-right icon'></i> महानदी, गोदावरी और कृष्णा नदियाँ बंगाल की खाड़ी में गिरती हैं, जबकि तापी और नर्मदा जैसी नदियाँ अरब सागर में गिरने वाली प्रमुख नदियाँ हैं, जो पश्चिम की ओर बहती हैं।",
    },
    {
      question:
        "'केवलादेव घना राष्ट्रीय उद्यान' किस राज्य में स्थित है, जो पक्षियों के लिए प्रसिद्ध है?",
      answers: shuffle([
        { text: "उत्तर प्रदेश", correct: false },
        { text: "मध्य प्रदेश", correct: false },
        { text: "राजस्थान", correct: true },
        { text: "गुजरात", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> केवलादेव घना राष्ट्रीय उद्यान (Keoladeo Ghana National Park), जिसे पहले भरतपुर पक्षी अभयारण्य के नाम से जाना जाता था, राजस्थान के भरतपुर जिले में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक विश्व धरोहर स्थल है और विशेष रूप से सर्दियों के मौसम में हज़ारों प्रवासी पक्षियों, जिनमें साइबेरियन क्रेन जैसे दुर्लभ पक्षी भी शामिल हैं, का निवास स्थान है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पार्क एक महत्वपूर्ण वेटलैंड है और पक्षी प्रेमियों तथा प्रकृति शोधकर्ताओं के लिए एक प्रमुख गंतव्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका प्रबंधन जल स्तर को बनाए रखकर किया जाता है, जो इसकी पारिस्थितिकी के लिए महत्वपूर्ण है।",
    },
    {
      question:
        "भारत में सबसे पुरानी और सबसे स्थिर भूगर्भीय संरचना कौन-सी है?",
      answers: shuffle([
        { text: "हिमालय पर्वत श्रृंखला", correct: false },
        { text: "उत्तरी मैदान", correct: false },
        { text: "प्रायद्वीपीय पठार", correct: true },
        { text: "तटीय मैदान", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> प्रायद्वीपीय पठार (Peninsular Plateau) भारत की सबसे पुरानी और सबसे स्थिर भूगर्भीय संरचना है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह गोंडवानालैंड के सबसे पुराने भूभाग का एक हिस्सा है, जो लाखों साल पहले टूटकर अलग हो गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कठोर आग्नेय और कायांतरित चट्टानों से बना है और समय के साथ बहुत कम भूगर्भीय गतिविधि का अनुभव किया है, जिससे यह भूकंपों और ज्वालामुखी गतिविधियों के प्रति अपेक्षाकृत स्थिर है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके विपरीत, हिमालय नवीन वलित पर्वत श्रृंखलाएँ हैं जो अभी भी भूगर्भीय रूप से सक्रिय हैं।",
    },
    {
      question:
        "भारत में सर्वाधिक वर्षा मुख्यतः किस मॉनसूनी पवन के कारण होती है?",
      answers: shuffle([
        { text: "उत्तर-पूर्वी मॉनसून", correct: false },
        { text: "दक्षिण-पश्चिमी मॉनसून", correct: true },
        { text: "पश्चिमी विक्षोभ", correct: false },
        { text: "चक्रवात", correct: false },
      ]),
      Explanation:
        "<i class='fa-solid fa-angles-right icon'></i> भारत में होने वाली अधिकांश वर्षा (लगभग 75-80%) दक्षिण-पश्चिमी मॉनसून (South-West Monsoon) के कारण होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मॉनसून जून से सितंबर के महीनों के दौरान सक्रिय रहता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये पवनें भारतीय उपमहाद्वीप की ओर अरब सागर और बंगाल की खाड़ी से आर्द्रता लेकर आती हैं, जिससे देश के अधिकांश हिस्सों में भारी वर्षा होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मॉनसून भारत की कृषि आधारित अर्थव्यवस्था के लिए जीवन रेखा है, क्योंकि यह खरीफ फसलों की बुवाई के लिए आवश्यक जल प्रदान करता है।",
    },
    {
        question: "भारत का सबसे ऊँचा गुरुत्वाकर्षण बांध (Gravity Dam) कौन-सा है?",
        answers: shuffle([
          { text: "हीराकुंड बांध", correct: false },
          { text: "सरदार सरोवर बांध", correct: false },
          { text: "टिहरी बांध", correct: false },
          { text: "भाखड़ा बांध", correct: true },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> भाखड़ा बांध भारत का सबसे ऊँचा गुरुत्वाकर्षण बांध है, जो पंजाब और हिमाचल प्रदेश की सीमा पर सतलज नदी पर बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी ऊँचाई लगभग 226 मीटर है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक ठोस गुरुत्वाकर्षण बांध है जिसका निर्माण कंक्रीट और पत्थर के उपयोग से किया गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बांध विद्युत उत्पादन, सिंचाई और बाढ़ नियंत्रण के लिए महत्वपूर्ण है, जिससे पंजाब, हरियाणा और राजस्थान जैसे राज्यों को लाभ मिलता है।<br><br><i class='fa-solid fa-angles-right icon'></i> टिहरी बांध भारत का सबसे ऊँचा बांध है, लेकिन यह एक बहुउद्देशीय रॉक एंड अर्थ-फिल बांध है, न कि गुरुत्वाकर्षण बांध।",
      },
      {
        question: "निम्नलिखित में से कौन-सा कोयला क्षेत्र झारखंड राज्य में स्थित नहीं है?",
        answers: shuffle([
          { text: "झरिया", correct: false },
          { text: "बोकारो", correct: false },
          { text: "गिरिडीह", correct: false },
          { text: "रानीगंज", correct: true },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> रानीगंज कोयला क्षेत्र पश्चिम बंगाल राज्य में स्थित है, और यह भारत का सबसे पुराना कोयला क्षेत्र है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह दामोदर घाटी कोयला क्षेत्र का हिस्सा है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि झरिया, बोकारो और गिरिडीह सभी झारखंड राज्य में स्थित प्रमुख कोयला क्षेत्र हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> झरिया भारत का सबसे बड़ा और सबसे महत्वपूर्ण कोयला क्षेत्र है जो कोकिंग कोयले के लिए जाना जाता है।",
      },
      {
        question: "भारत का सबसे छोटा केंद्र शासित प्रदेश कौन-सा है (क्षेत्रफल के आधार पर)?",
        answers: shuffle([
          { text: "दिल्ली", correct: false },
          { text: "चंडीगढ़", correct: false },
          { text: "पुडुचेरी", correct: false },
          { text: "लक्षद्वीप", correct: true },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> लक्षद्वीप भारत का सबसे छोटा केंद्र शासित प्रदेश है, जिसका कुल क्षेत्रफल मात्र 32 वर्ग किलोमीटर है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अरब सागर में स्थित प्रवाल द्वीपों का एक समूह है।<br><br><i class='fa-solid fa-angles-right icon'></i> अपनी प्राकृतिक सुंदरता, शांत समुद्र तटों और समृद्ध समुद्री जीवन के लिए यह एक लोकप्रिय पर्यटन स्थल है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी राजधानी कवरत्ती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अपनी अनूठी पारिस्थितिकी और संवेदनशील प्रवाल भित्ति प्रणालियों के लिए जाना जाता है।",
      },
      {
        question:
          "भारत की किस पर्वत श्रृंखला को 'पंचमढ़ी' पहाड़ी स्टेशन के लिए जाना जाता है?",
        answers: shuffle([
          { text: "विंध्य पर्वतमाला", correct: false },
          { text: "अरावली पर्वतमाला", correct: false },
          { text: "पश्चिमी घाट", correct: false },
          { text: "सतपुड़ा पर्वतमाला", correct: true },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> पंचमढ़ी एक प्रसिद्ध पहाड़ी स्टेशन है जो मध्य प्रदेश में सतपुड़ा पर्वतमाला में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे 'सतपुड़ा की रानी' के नाम से भी जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अपने हरे-भरे जंगलों, झरनों, गुफाओं और प्राकृतिक सौंदर्य के लिए प्रसिद्ध है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह सतपुड़ा राष्ट्रीय उद्यान और बायोस्फीयर रिजर्व का हिस्सा है, जो जैव विविधता में समृद्ध है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मध्य भारत में पर्यटकों के लिए एक लोकप्रिय ग्रीष्मकालीन अवकाश स्थल है।",
      },
      {
        question:
          "निम्नलिखित में से कौन-सा बंदरगाह 'ज्वारीय बंदरगाह' (Tidal Port) का उदाहरण है?",
        answers: shuffle([
          { text: "मुंबई", correct: false },
          { text: "चेन्नई", correct: false },
          { text: "विशाखापत्तनम", correct: false },
          { text: "कांडला", correct: true },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> कांडला बंदरगाह (जिसे अब दीनदयाल बंदरगाह के नाम से जाना जाता है) गुजरात में कच्छ की खाड़ी में स्थित एक ज्वारीय बंदरगाह है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका अर्थ है कि इस बंदरगाह पर जहाजों की आवाजाही ज्वार-भाटा के स्तर से प्रभावित होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत के पश्चिमी तट पर एक प्रमुख बंदरगाह है और उत्तर-पश्चिमी भारत की विशाल भीतरी भूमि की सेवा करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक प्रमुख शुष्क कार्गो और तरल कार्गो हैंडलिंग बंदरगाह है।",
      },
      {
        question:
          "भारत में 'मरुस्थलीय मिट्टी' मुख्यतः किन राज्यों में पाई जाती है?",
        answers: shuffle([
          { text: "पश्चिम बंगाल और ओडिशा", correct: false },
          { text: "कर्नाटक और केरल", correct: false },
          { text: "बिहार और उत्तर प्रदेश", correct: false },
          { text: "राजस्थान और गुजरात (पश्चिमी भाग)", correct: true },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> मरुस्थलीय मिट्टी (Arid/Desert Soil) मुख्यतः शुष्क जलवायु वाले क्षेत्रों में पाई जाती है, जिसमें उच्च तापमान और कम वर्षा होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत में यह मिट्टी मुख्य रूप से राजस्थान के पश्चिमी भागों, उत्तरी गुजरात और दक्षिणी पंजाब और हरियाणा के कुछ हिस्सों में पाई जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें नमक की मात्रा अधिक होती है, नमी और ह्यूमस की कमी होती है, और यह रेतीली प्रकृति की होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> उचित सिंचाई और कृषि तकनीकों के उपयोग से इन मिट्टियों में बाजरा, ज्वार, और दालें उगाई जा सकती हैं।",
      },
      {
        question:
          "भारत का 'रुहर' किस क्षेत्र को कहा जाता है, जो अपने खनिज संसाधनों के लिए प्रसिद्ध है?",
        answers: shuffle([
          { text: "दक्कन का पठार", correct: false },
          { text: "मालवा का पठार", correct: false },
          { text: "मेघालय का पठार", correct: false },
          { text: "छोटानागपुर पठार", correct: true },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> छोटानागपुर पठार को 'भारत का रुहर' (Ruhr of India) कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'रुहर' जर्मनी का एक क्षेत्र है जो अपने समृद्ध कोयला और औद्योगिक केंद्रों के लिए जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी तरह, छोटानागपुर पठार झारखंड, ओडिशा, पश्चिम बंगाल और छत्तीसगढ़ के कुछ हिस्सों में फैला हुआ है और कोयला, लौह अयस्क, बॉक्साइट, अभ्रक जैसे खनिजों से समृद्ध है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह क्षेत्र भारत के खनिज-आधारित उद्योगों का केंद्र है और यहाँ बड़ी संख्या में लौह और इस्पात उद्योग स्थापित हैं।",
      },
      {
        question:
          "निम्नलिखित में से कौन-सी नदी 'ब्रह्मगिरी पहाड़ियों' से निकलती है?",
        answers: shuffle([
          { text: "कृष्णा", correct: false },
          { text: "तुंगभद्रा", correct: false },
          { text: "गोदावरी", correct: false },
          { text: "कावेरी", correct: true },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> कावेरी नदी कर्नाटक के कोडागु जिले में पश्चिमी घाट की ब्रह्मगिरी पहाड़ियों से निकलती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह दक्षिण भारत की एक प्रमुख नदी है, जिसे 'दक्षिण भारत की गंगा' भी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कर्नाटक और तमिलनाडु से होकर बहती है और अंततः बंगाल की खाड़ी में गिरती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह नदी अपने डेल्टा क्षेत्र में चावल की खेती के लिए अत्यंत महत्वपूर्ण है और सिंचाई तथा जल विद्युत उत्पादन के लिए कई बांधों का निर्माण किया गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> कावेरी जल विवाद कर्नाटक, तमिलनाडु, केरल और पुडुचेरी के बीच एक प्रमुख मुद्दा रहा है।",
      },
      {
        question:
          "भारत में किस प्रकार के वनों को 'मॉनसून वन' या 'पर्णपाती वन' भी कहा जाता है?",
        answers: shuffle([
          { text: "उष्णकटिबंधीय सदाबहार वन", correct: false },
          { text: "शुष्क पर्णपाती वन", correct: false },
          { text: "पर्वतीय वन", correct: false },
          { text: "उष्णकटिबंधीय पर्णपाती वन", correct: true },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> भारत में उष्णकटिबंधीय पर्णपाती वन (Tropical Deciduous Forests) सबसे व्यापक रूप से पाए जाने वाले वन हैं, और इन्हें 'मॉनसून वन' भी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये वन उन क्षेत्रों में पाए जाते हैं जहाँ 70 से 200 सेंटीमीटर वार्षिक वर्षा होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> गर्मी के मौसम में नमी की कमी होने पर ये पेड़ अपने पत्ते गिरा देते हैं, ताकि वाष्पीकरण को कम किया जा सके (इसीलिए इन्हें पर्णपाती कहा जाता है)।<br><br><i class='fa-solid fa-angles-right icon'></i> इन वनों में सागौन (Teak), साल (Sal), चंदन (Sandalwood), शीशम (Rosewood) जैसे मूल्यवान वृक्ष पाए जाते हैं, जो इमारती लकड़ी के लिए महत्वपूर्ण हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये वन भारतीय वन्यजीवों की एक विस्तृत श्रृंखला के लिए भी निवास स्थान प्रदान करते हैं।",
      },
      {
        question:
          "जनगणना 2011 के अनुसार, भारत का सबसे अधिक जनसंख्या घनत्व वाला राज्य कौन-सा है?",
        answers: shuffle([
          { text: "उत्तर प्रदेश", correct: false },
          { text: "पश्चिम बंगाल", correct: false },
          { text: "केरल", correct: false },
          { text: "बिहार", correct: true },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> जनगणना 2011 के अनुसार, बिहार भारत का सबसे अधिक जनसंख्या घनत्व वाला राज्य है, जिसका जनसंख्या घनत्व 1,106 व्यक्ति प्रति वर्ग किलोमीटर है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह दर्शाता है कि बिहार में प्रति वर्ग किलोमीटर क्षेत्र में सर्वाधिक लोग निवास करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उच्च जनसंख्या घनत्व राज्य की सीमित भूमि संसाधनों पर भारी दबाव डालता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके बाद पश्चिम बंगाल (1,028 व्यक्ति प्रति वर्ग किलोमीटर) का स्थान आता है।<br><br><i class='fa-solid fa-angles-right icon'></i> दिल्ली (11,320 व्यक्ति प्रति वर्ग किलोमीटर) एक केंद्र शासित प्रदेश है, जिसका घनत्व राज्यों से कहीं अधिक है।",
      },
      {
        question: "भारत की किस नदी को 'वृद्ध गंगा' के नाम से भी जाना जाता है?",
        answers: shuffle([
          { text: "महानदी", correct: false },
          { text: "कृष्णा", correct: false },
          { text: "कावेरी", correct: false },
          { text: "गोदावरी", correct: true },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> गोदावरी नदी को 'वृद्ध गंगा' या 'दक्षिण गंगा' के नाम से जाना जाता है क्योंकि यह प्रायद्वीपीय भारत की सबसे लंबी नदी है और इसका बेसिन क्षेत्र भी बहुत विशाल है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह गंगा नदी के बाद भारत की दूसरी सबसे लंबी नदी है (जो पूरी तरह भारत में बहती है) और दक्षिण भारत में इसका सांस्कृतिक और धार्मिक महत्व गंगा के समान ही है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह महाराष्ट्र के नासिक जिले के त्र्यंबकेश्वर से निकलकर बंगाल की खाड़ी में गिरती है।",
      },
      {
        question:
          "भारत में किस राज्य को 'अंडा कटोरा' (Egg Bowl) के नाम से जाना जाता है क्योंकि यह अंडे का सबसे बड़ा उत्पादक है?",
        answers: shuffle([
          { text: "तमिलनाडु", correct: false },
          { text: "तेलंगाना", correct: false },
          { text: "केरल", correct: false },
          { text: "आंध्र प्रदेश", correct: true },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> आंध्र प्रदेश को भारत का 'अंडा कटोरा' कहा जाता है क्योंकि यह देश में अंडे के सबसे बड़े उत्पादक राज्यों में से एक है।<br><br><i class='fa-solid fa-angles-right icon'></i> नेल्लोर जिले को अक्सर 'भारत की पोल्ट्री राजधानी' के रूप में जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> राज्य में अनुकूल जलवायु, बड़े पैमाने पर मुर्गीपालन और अंडे के उत्पादन में किसानों की विशेषज्ञता के कारण यह उपाधि मिली है।",
      },
      {
        question:
          "निम्नलिखित में से कौन-सा राष्ट्रीय उद्यान असम में स्थित है और एक सींग वाले गैंडे (One-horned Rhinoceros) के लिए प्रसिद्ध है?",
        answers: shuffle([
          { text: "कान्हा राष्ट्रीय उद्यान", correct: false },
          { text: "रणथंभौर राष्ट्रीय उद्यान", correct: false },
          { text: "गिर राष्ट्रीय उद्यान", correct: false },
          { text: "काजीरंगा राष्ट्रीय उद्यान", correct: true },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> काजीरंगा राष्ट्रीय उद्यान (Kaziranga National Park) असम में स्थित एक यूनेस्को विश्व धरोहर स्थल है, जो विश्व के एक सींग वाले गैंडों की सबसे बड़ी आबादी का घर है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ब्रह्मपुत्र नदी के बाढ़ के मैदानों में फैला हुआ है और इसमें घास के मैदान, दलदल और घने उष्णकटिबंधीय नम पर्णपाती वन शामिल हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> गैंडों के अलावा, यह बाघ, एशियाई हाथी, जंगली भैंसों और विभिन्न पक्षी प्रजातियों का भी घर है।",
      },
      {
        question: "भारत में किस मिट्टी को 'रेगुर' मिट्टी के नाम से भी जाना जाता है?",
        answers: shuffle([
          { text: "लाल मिट्टी", correct: false },
          { text: "लेटेराइट मिट्टी", correct: false },
          { text: "पर्वतीय मिट्टी", correct: false },
          { text: "काली मिट्टी", correct: true },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी (Black Soil) को 'रेगुर' मिट्टी के नाम से भी जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मिट्टी मुख्य रूप से दक्कन पठार के बड़े हिस्से, जैसे महाराष्ट्र, मध्य प्रदेश, गुजरात, आंध्र प्रदेश और तमिलनाडु के कुछ हिस्सों में पाई जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका निर्माण ज्वालामुखी बेसाल्ट चट्टानों के अपक्षय से होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> काली मिट्टी कपास की खेती के लिए बहुत उपयुक्त होती है, क्योंकि इसमें नमी धारण करने की क्षमता अत्यधिक होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मिट्टी चूना, लौह, मैग्नीशियम और एल्यूमिना से भरपूर होती है, लेकिन इसमें नाइट्रोजन, फास्फोरस और जैविक पदार्थ की कमी होती है।",
      },
      {
        question: "भारत में सबसे बड़ा 'मैंग्रोव वन' क्षेत्र कहाँ स्थित है?",
        answers: shuffle([
          { text: "केरल का तट", correct: false },
          { text: "गोवा का तट", correct: false },
          { text: "कच्छ का रण", correct: false },
          { text: "सुंदरबन (पश्चिम बंगाल)", correct: true },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> सुंदरबन (Sundarbans) भारत और बांग्लादेश के बीच स्थित विश्व का सबसे बड़ा मैंग्रोव वन क्षेत्र है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका एक महत्वपूर्ण हिस्सा पश्चिम बंगाल में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह गंगा, ब्रह्मपुत्र और मेघना नदियों के डेल्टा पर बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> सुंदरबन अपनी अनूठी पारिस्थितिकी, जैव विविधता और विशेष रूप से रॉयल बंगाल टाइगर के लिए जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह यूनेस्को की विश्व धरोहर स्थल भी है और तटीय क्षेत्रों को तूफानों और सुनामी से बचाने में महत्वपूर्ण भूमिका निभाता है।",
      },
      {
        question:
          "भारत की किस नदी को 'बंगाल का शोक' कहा जाता था, जिसे अब बहुउद्देशीय परियोजना से नियंत्रित किया गया है?",
        answers: shuffle([
          { text: "कोसी", correct: false },
          { text: "गंडक", correct: false },
          { text: "सोन", correct: false },
          { text: "दामोदर", correct: true },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> दामोदर नदी को पहले 'बंगाल का शोक' (Sorrow of Bengal) कहा जाता था, क्योंकि इसमें अक्सर विनाशकारी बाढ़ आती थी, जिससे पश्चिम बंगाल के मैदानों में भारी क्षति होती थी।<br><br><i class='fa-solid fa-angles-right icon'></i> हालाँकि, दामोदर घाटी निगम (DVC) परियोजना के निर्माण के बाद, जिसमें कई बांध और बैराज शामिल हैं, इस नदी को काफी हद तक नियंत्रित किया गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> DVC भारत की पहली बहुउद्देशीय नदी घाटी परियोजना है, जिसे संयुक्त राज्य अमेरिका की टेनेसी वैली अथॉरिटी (TVA) की तर्ज पर बनाया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> कोसी नदी को 'बिहार का शोक' कहा जाता है।",
      },
      {
        question:
          "जनगणना 2011 के अनुसार, भारत का सबसे कम जनसंख्या घनत्व वाला राज्य कौन-सा है?",
        answers: shuffle([
          { text: "मिजोरम", correct: false },
          { text: "सिक्किम", correct: false },
          { text: "नागालैंड", correct: false },
          { text: "अरुणाचल प्रदेश", correct: true },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> जनगणना 2011 के अनुसार, अरुणाचल प्रदेश भारत का सबसे कम जनसंख्या घनत्व वाला राज्य है, जिसका जनसंख्या घनत्व केवल 17 व्यक्ति प्रति वर्ग किलोमीटर है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह राज्य भारत के पूर्वोत्तर भाग में स्थित है, और इसका पहाड़ी इलाका, घने जंगल और दुर्गम भूभाग कम जनसंख्या घनत्व का मुख्य कारण है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह राज्य अपनी समृद्ध जैव विविधता और जनजातीय संस्कृति के लिए जाना जाता है।",
      },
      {
        question: "भारत में लौह अयस्क का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
        answers: shuffle([
          { text: "कर्नाटक", correct: false },
          { text: "झारखंड", correct: false },
          { text: "छत्तीसगढ़", correct: false },
          { text: "ओडिशा", correct: true },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> ओडिशा भारत में लौह अयस्क का सबसे बड़ा उत्पादक राज्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> राज्य में सुंदरगढ़, मयूरभंज, क्योंझर और जाजपुर जैसे जिलों में समृद्ध लौह अयस्क भंडार हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यहां के लौह अयस्क की गुणवत्ता भी अच्छी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत के कुल लौह अयस्क उत्पादन में ओडिशा का महत्वपूर्ण योगदान है, जिससे देश के इस्पात उद्योग को बढ़ावा मिलता है।",
      },
      {
        question:
          "भारत में किस प्रकार की मिट्टी में लौह और एल्यूमीनियम ऑक्साइड प्रचुर मात्रा में पाए जाते हैं और यह ईंटों के लिए अच्छी होती है?",
        answers: shuffle([
          { text: "काली मिट्टी", correct: false },
          { text: "जलोढ़ मिट्टी", correct: false },
          { text: "लाल मिट्टी", correct: false },
          { text: "लेटेराइट मिट्टी", correct: true },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> लेटेराइट मिट्टी (Laterite Soil) में लौह और एल्यूमीनियम ऑक्साइड प्रचुर मात्रा में पाए जाते हैं, जिसके कारण इसका रंग लाल होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मिट्टी उन क्षेत्रों में बनती है जहाँ उच्च तापमान और भारी वर्षा होती है, जिससे निक्षालन (leaching) की प्रक्रिया होती है, और सिलिका जैसे घुलनशील पदार्थ नीचे चले जाते हैं, जबकि लौह और एल्यूमीनियम के ऑक्साइड ऊपरी परत में रह जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मिट्टी आमतौर पर कम उपजाऊ होती है, लेकिन इसमें काजू, चाय, कॉफी और टैपिओका जैसी फसलें उगाई जाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ईंटों के निर्माण के लिए भी उपयुक्त होती है, क्योंकि सूखने पर यह बहुत कठोर हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मुख्य रूप से पश्चिमी घाट, पूर्वी घाट, मेघालय पठार और राजमहल पहाड़ियों के कुछ हिस्सों में पाई जाती है।",
      },
      {
        question: "भारत का सबसे उत्तरी बिंदु कौन-सा है?",
        answers: shuffle([
          { text: "कन्याकुमारी", correct: false },
          { text: "इंदिरा पॉइंट", correct: false },
          { text: "सर क्रीक", correct: false },
          { text: "इंदिरा कॉल", correct: true },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> भारत का सबसे उत्तरी बिंदु 'इंदिरा कॉल' है, जो सियाचिन ग्लेशियर के पास काराकोरम पर्वतमाला में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह लद्दाख केंद्र शासित प्रदेश में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका नामकरण 1912 में बुल्गारियाई पर्वतारोही के नाम पर किया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह रणनीतिक रूप से अत्यंत महत्वपूर्ण क्षेत्र है, और यहाँ भारतीय सेना की उपस्थिति है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'इंदिरा पॉइंट' भारत का सबसे दक्षिणी बिंदु है (अंडमान और निकोबार द्वीप समूह में), और 'कन्याकुमारी' भारतीय मुख्य भूमि का सबसे दक्षिणी बिंदु है।",
      },
      {
        question: "भारत में 'श्वेत क्रांति' (White Revolution) के जनक के रूप में किसे जाना जाता है?",
        answers: shuffle([
          { text: "एम.एस.स्वामीनाथन", correct: false },
          { text: "वर्गीज कुरियन", correct: true },
          { text: "होमी जे. भाभा", correct: false },
          { text: "सैम पित्रोदा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डॉ. वर्गीज कुरियन को भारत में 'श्वेत क्रांति' या 'ऑपरेशन फ्लड' (Operation Flood) का जनक माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने भारत को दूध उत्पादन में आत्मनिर्भर बनाने में महत्वपूर्ण भूमिका निभाई और अमूल (Amul) को एक सफल सहकारी आंदोलन के रूप में विकसित किया।<br><br><i class='fa-solid fa-angles-right icon'></i> उनके प्रयासों के कारण भारत विश्व का सबसे बड़ा दूध उत्पादक देश बन गया।<br><br><i class='fa-solid fa-angles-right icon'></i> एम.एस. स्वामीनाथन को भारत में 'हरित क्रांति' का जनक माना जाता है।"
      },
      {
        question: "भारत में 'पूर्वी घाट' की सबसे ऊँची चोटी कौन-सी है?",
        answers: shuffle([
          { text: "अनाईमुडी", correct: false },
          { text: "डोडाबेटा", correct: false },
          { text: "जिंदगडा पीक", correct: true },
          { text: "महेंद्रगिरि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पूर्वी घाट की सबसे ऊँची चोटी जिंदगडा पीक (जिंदगडा शिखर) है, जो आंध्र प्रदेश में अराकु घाटी के पास स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी ऊँचाई लगभग 1,690 मीटर (5,540 फीट) है।<br><br><i class='fa-solid fa-angles-right icon'></i> पहले महेंद्रगिरि (ओडिशा) को पूर्वी घाट की सबसे ऊँची चोटी माना जाता था, लेकिन आधुनिक सर्वेक्षणों ने जिंदगडा पीक को सबसे ऊँचा स्थान दिया है।<br><br><i class='fa-solid fa-angles-right icon'></i> अनाईमुडी (केरल, 2,695 मीटर) पश्चिमी घाट और दक्षिण भारत की सबसे ऊँची चोटी है, जबकि डोडाबेटा (तमिलनाडु, 2,637 मीटर) नीलगिरि पहाड़ियों की सबसे ऊँची चोटी है।"
      },
      {
        question: "'चिल्का झील' किस प्रकार का जल निकाय है?",
        answers: shuffle([
          { text: "मीठे पानी की झील", correct: false },
          { text: "खारे पानी की लैगून", correct: true },
          { text: "कृत्रिम झील", correct: false },
          { text: "ग्लेशियर झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चिल्का झील (Chilika Lake) ओडिशा तट पर स्थित एक विशाल खारे पानी की लैगून (Lagoon) है।<br><br><i class='fa-solid fa-angles-right icon'></i> लैगून समुद्र से आंशिक रूप से अलग किया गया एक उथला पानी का निकाय होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> चिल्का एशिया की सबसे बड़ी खारे पानी की लैगून और विश्व की दूसरी सबसे बड़ी खारे पानी की लैगून है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रवासी पक्षियों के लिए एक महत्वपूर्ण निवास स्थान है और एक रामसर साइट तथा यूनेस्को की अस्थायी विश्व धरोहर स्थल भी है।"
      },
      {
        question: "भारत के किस राज्य को 'स्पाइस गार्डन ऑफ इंडिया' (भारत का मसालों का बगीचा) कहा जाता है?",
        answers: shuffle([
          { text: "कर्नाटक", correct: false },
          { text: "केरल", correct: true },
          { text: "आंध्र प्रदेश", correct: false },
          { text: "तमिलनाडु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केरल को 'स्पाइस गार्डन ऑफ इंडिया' या 'भारत का मसालों का बगीचा' कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अपने समृद्ध और विविध मसालों के उत्पादन के लिए प्रसिद्ध है, जिनमें काली मिर्च, इलायची, लौंग, दालचीनी, अदरक और हल्दी शामिल हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> मसालों ने ऐतिहासिक रूप से केरल को व्यापारिक मार्गों पर एक महत्वपूर्ण स्थान दिया है, जिसने सदियों से यूरोपीय व्यापारियों को आकर्षित किया है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ की अनुकूल जलवायु और मिट्टी मसालों की खेती के लिए आदर्श हैं।"
      },
      {
        question: "निम्नलिखित में से कौन-सा एक 'रबी' फसल का उदाहरण है?",
        answers: shuffle([
          { text: "चावल", correct: false },
          { text: "मक्का", correct: false },
          { text: "गेहूं", correct: true },
          { text: "बाजरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गेहूं एक रबी फसल है, जिसकी बुवाई अक्टूबर-नवंबर में शीत ऋतु की शुरुआत में की जाती है और कटाई मार्च-अप्रैल में वसंत ऋतु में की जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> रबी की फसलों को बुवाई के समय ठंडे मौसम और पकने के समय गर्म मौसम की आवश्यकता होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य प्रमुख रबी फसलों में जौ, मटर, चना और सरसों शामिल हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> चावल, मक्का और बाजरा खरीफ फसलें हैं, जिनकी बुवाई मॉनसून की शुरुआत में की जाती है और कटाई मॉनसून के अंत में की जाती है।"
      },
      {
        question: "भारत में सर्वाधिक अभ्रक (Mica) का उत्पादन किस राज्य में होता है?",
        answers: shuffle([
          { text: "राजस्थान", correct: false },
          { text: "आंध्र प्रदेश", correct: true },
          { text: "झारखंड", correct: false },
          { text: "बिहार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में अभ्रक का सबसे बड़ा उत्पादक राज्य आंध्र प्रदेश है, विशेषकर नेल्लोर जिला।<br><br><i class='fa-solid fa-angles-right icon'></i> अभ्रक एक महत्वपूर्ण गैर-धातु खनिज है जिसका उपयोग विद्युत और इलेक्ट्रॉनिक उद्योगों में किया जाता है क्योंकि यह ताप और बिजली का कुचालक होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> आंध्र प्रदेश के अलावा, राजस्थान, बिहार और झारखंड में भी अभ्रक के महत्वपूर्ण भंडार पाए जाते हैं।"
      },
      {
        question: "भारत का 'मालवा पठार' मुख्यतः किस प्रकार की चट्टानों से बना है?",
        answers: shuffle([
          { text: "ग्रेनाइट और नीस", correct: false },
          { text: "बेसाल्ट", correct: true },
          { text: "बलुआ पत्थर और चूना पत्थर", correct: false },
          { text: "शिस्ट और संगमरमर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मालवा पठार, जो मध्य प्रदेश और राजस्थान के कुछ हिस्सों में फैला हुआ है, मुख्यतः दक्कन ट्रैप के बेसाल्ट चट्टानों से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह क्षेत्र ज्वालामुखीय विस्फोटों से निकले लावा प्रवाह से निर्मित हुआ है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस पठार पर काली मिट्टी पाई जाती है, जो कपास और तिलहन की खेती के लिए उपयुक्त है।<br><br><i class='fa-solid fa-angles-right icon'></i> पठार का पश्चिमी भाग अरावली पहाड़ियों से घिरा है, जबकि पूर्वी भाग विंध्य रेंज से घिरा है।"
      },
      {
        question: "भारत में 'शिवालिक' पहाड़ियाँ किस पर्वत श्रृंखला का हिस्सा हैं?",
        answers: shuffle([
          { text: "अरावली", correct: false },
          { text: "हिमालय", correct: true },
          { text: "सतपुड़ा", correct: false },
          { text: "पश्चिमी घाट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शिवालिक पहाड़ियाँ हिमालय पर्वत श्रृंखला का सबसे बाहरी और सबसे दक्षिणी भाग हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इन्हें 'बाह्य हिमालय' भी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये पहाड़ियाँ अपेक्षाकृत कम ऊँचाई वाली हैं, जिनकी औसत ऊँचाई 900 से 1100 मीटर के बीच है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये सिंधु नदी से ब्रह्मपुत्र नदी तक फैली हुई हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> शिवालिक क्षेत्र में कई अनुदैर्ध्य घाटियाँ पाई जाती हैं जिन्हें 'दून' (जैसे देहरादून) कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये पहाड़ियाँ रेत, बजरी और गाद के असमेकित तलछट से बनी हैं जो नदियों द्वारा लाई गई हैं।"
      },
      {
        question: "भारत में 'ग्रीष्मकालीन मॉनसून' के दौरान अधिकांश वर्षा किस शाखा से होती है?",
        answers: shuffle([
          { text: "बंगाल की खाड़ी शाखा", correct: false },
          { text: "अरब सागर शाखा", correct: true },
          { text: "पश्चिमी विक्षोभ", correct: false },
          { text: "उत्तर-पूर्वी मॉनसून", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में ग्रीष्मकालीन मॉनसून (दक्षिण-पश्चिमी मॉनसून) की दो मुख्य शाखाएँ होती हैं: अरब सागर शाखा और बंगाल की खाड़ी शाखा।<br><br><i class='fa-solid fa-angles-right icon'></i> इनमें से अरब सागर शाखा मॉनसून की सबसे शक्तिशाली और व्यापक शाखा है, जो भारत के पश्चिमी तट (पश्चिमी घाट), प्रायद्वीपीय भारत और मध्य भारत के अधिकांश हिस्सों में भारी वर्षा लाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> बंगाल की खाड़ी शाखा पूर्वोत्तर भारत और गंगा के मैदानों में वर्षा करती है।"
      },
      {
        question: "भारत में 'नागार्जुन सागर बांध' किस नदी पर स्थित है?",
        answers: shuffle([
          { text: "गोदावरी", correct: false },
          { text: "कृष्णा", correct: true },
          { text: "कावेरी", correct: false },
          { text: "महानदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नागार्जुन सागर बांध कृष्णा नदी पर स्थित है, जो तेलंगाना और आंध्र प्रदेश की सीमा पर है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह विश्व के सबसे बड़े चिनाई वाले बांधों में से एक है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बांध सिंचाई और जलविद्युत उत्पादन के लिए एक महत्वपूर्ण स्रोत है, जिससे दोनों राज्यों को लाभ मिलता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस बांध के पीछे बना जलाशय नागार्जुन सागर जलाशय कहलाता है, जो भारत के सबसे बड़े मानवनिर्मित जलाशयों में से एक है।"
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