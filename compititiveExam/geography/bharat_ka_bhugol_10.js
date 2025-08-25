const questions = [
  {
      topHeading: "भारत के भूगोल पर आधारित 50 बहुविकल्पीय प्रश्न (MCQs) part 10  (quiz_no. 10)"
  },
    {
      question: "भारत में 'सर्वाधिक वर्षा' किस मॉनसूनी शाखा से होती है?",
      answers: shuffle([
        { text: "अरब सागर शाखा", correct: true },
        { text: "बंगाल की खाड़ी शाखा", correct: false },
        { text: "पश्चिमी विक्षोभ", correct: false },
        { text: "उत्तर-पूर्वी मॉनसून", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्षिण-पश्चिमी मॉनसून की अरब सागर शाखा भारत में अधिकांश वर्षा के लिए जिम्मेदार है, विशेषकर पश्चिमी घाट के पश्चिमी ढलानों पर और मध्य भारत में।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शाखा जून के पहले सप्ताह में केरल तट पर पहुँचती है और तेजी से आगे बढ़ती है, जिससे भारत के बड़े हिस्से में व्यापक और भारी वर्षा होती।<br><br><i class='fa-solid fa-angles-right icon'></i> बंगाल की खाड़ी शाखा भी महत्वपूर्ण है, खासकर उत्तर-पूर्वी भारत और गंगा के मैदानों के लिए।"
    },
    {
      question: "भारत का 'सबसे ऊँचा झरना' (Waterfall) 'कुंचिकल फॉल्स' किस राज्य में स्थित है?",
      answers: shuffle([
        { text: "केरल", correct: false },
        { text: "तमिलनाडु", correct: false },
        { text: "कर्नाटक", correct: true },
        { text: "आंध्र प्रदेश", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुंचिकल फॉल्स भारत का सबसे ऊँचा झरना है, जो कर्नाटक के शिमोगा जिले में वराही नदी पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी कुल ऊँचाई लगभग 455 मीटर है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक बहु-स्तरीय झरना है और यह जोग फॉल्स (शरावती नदी पर) से ऊँचा है, जिसे पहले भारत का सबसे ऊँचा माना जाता था।"
    },
    {
      question: "'छोटा नागपुर पठार' किस प्रकार के खनिजों के लिए प्रसिद्ध है?",
      answers: shuffle([
        { text: "पेट्रोलियम और प्राकृतिक गैस", correct: false },
        { text: "कोयला, लौह अयस्क और अभ्रक", correct: true },
        { text: "सोना और हीरा", correct: false },
        { text: "बॉक्साइट और चूना पत्थर", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> छोटा नागपुर पठार को 'भारत का रुहर' कहा जाता है क्योंकि यह कोयला, लौह अयस्क और अभ्रक जैसे खनिजों से अत्यंत समृद्ध है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत के खनिज भंडार का एक बड़ा हिस्सा रखता है और देश के औद्योगिक विकास में महत्वपूर्ण भूमिका निभाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ गोंडवाना क्रम के कोयले के विशाल भंडार हैं।"
    },
    {
      question: "भारत के 'किस राज्य को 'पर्वतों का घर' (Home of Mountains) के रूप में जाना जाता है?",
      answers: shuffle([
        { text: "हिमाचल प्रदेश", correct: false },
        { text: "उत्तराखंड", correct: true },
        { text: "जम्मू और कश्मीर (अब केंद्र शासित प्रदेशों में विभाजित)", correct: false },
        { text: "सिक्किम", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तराखंड को अक्सर 'पर्वतों का घर' या 'देवभूमि' के रूप में जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह राज्य पूरी तरह से हिमालय की पर्वत श्रृंखलाओं में स्थित है, जिसमें महान हिमालय, लघु हिमालय और शिवालिक जैसी महत्वपूर्ण पर्वतमालाएँ शामिल हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ कई ऊँची चोटियाँ, हिमनदियाँ और पवित्र नदियाँ स्थित हैं।"
    },
    {
      question: "भारत की 'सबसे बड़ी जनजातीय समूह' कौन-सा है?",
      answers: shuffle([
        { text: "भील", correct: true },
        { text: "गोंड", correct: false },
        { text: "संथाल", correct: false },
        { text: "मुंडा", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> जनगणना 2011 के आंकड़ों के अनुसार, भील (Bhil) भारत का सबसे बड़ा जनजातीय समूह है।<br><br><i class='fa-solid fa-angles-right icon'></i> भील जनजाति मुख्य रूप से मध्य प्रदेश, गुजरात, राजस्थान और महाराष्ट्र जैसे राज्यों में पाई जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके बाद गोंड जनजाति आती है।"
    },
    {
      question: "'मुगा रेशम' (Muga Silk) मुख्य रूप से भारत के किस राज्य में उत्पादित होता है?",
      answers: shuffle([
        { text: "कर्नाटक", correct: false },
        { text: "जम्मू और कश्मीर", correct: false },
        { text: "असम", correct: true },
        { text: "पश्चिम बंगाल", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुगा रेशम (Muga Silk) असम का एक अनूठा और विशिष्ट रेशम है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक जंगली रेशम है जो एंथेरिया असमेन्सिस (Antheraea assamensis) नामक रेशम के कीड़ों द्वारा उत्पादित होता है, जो विशेष रूप से असम में पाए जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अपने सुनहरे-पीले रंग और स्थायित्व के लिए जाना जाता है, और इसे अक्सर 'असम का सुनहरा रेशम' कहा जाता है।"
    },
    {
      question: "भारत का 'सबसे बड़ा कंटेनर बंदरगाह' (Largest Container Port) कौन-सा है?",
      answers: shuffle([
        { text: "मुंबई पोर्ट", correct: false },
        { text: "जवाहरलाल नेहरू पोर्ट (JNPT)", correct: true },
        { text: "चेन्नई पोर्ट", correct: false },
        { text: "कांडला पोर्ट", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> जवाहरलाल नेहरू पोर्ट (Jawaharlal Nehru Port Trust - JNPT), जिसे नावा शेवा पोर्ट भी कहा जाता है, महाराष्ट्र के रायगढ़ जिले में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत का सबसे बड़ा कंटेनर हैंडलिंग बंदरगाह है और देश के कुल कंटेनर यातायात का लगभग आधा हिस्सा संभालता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मुंबई के पास स्थित है।"
    },
    {
      question: "भारत में 'सर्वाधिक वर्षा' किस मॉनसूनी शाखा से होती है?",
      answers: shuffle([
        { text: "अरब सागर शाखा", correct: true },
        { text: "बंगाल की खाड़ी शाखा", correct: false },
        { text: "पश्चिमी विक्षोभ", correct: false },
        { text: "उत्तर-पूर्वी मॉनसून", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्षिण-पश्चिमी मॉनसून की अरब सागर शाखा भारत में अधिकांश वर्षा के लिए जिम्मेदार है, विशेषकर पश्चिमी घाट के पश्चिमी ढलानों पर और मध्य भारत में।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शाखा जून के पहले सप्ताह में केरल तट पर पहुँचती है और तेजी से आगे बढ़ती है, जिससे भारत के बड़े हिस्से में व्यापक और भारी वर्षा होती है।"
    },
    {
      question: "'माउंटेन पास' 'जोजी ला' भारत के किस राज्य/केंद्र शासित प्रदेश में स्थित है?",
      answers: shuffle([
        { text: "हिमाचल प्रदेश", correct: false },
        { text: "उत्तराखंड", correct: false },
        { text: "जम्मू और कश्मीर", correct: false },
        { text: "लद्दाख", correct: true }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> जोजी ला दर्रा (Zoji La Pass) लद्दाख केंद्र शासित प्रदेश में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह श्रीनगर और लेह को जोड़ने वाले राष्ट्रीय राजमार्ग 1 (NH 1) पर स्थित एक महत्वपूर्ण दर्रा है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कश्मीर घाटी और लद्दाख के बीच एक महत्वपूर्ण लिंक प्रदान करता है, लेकिन भारी बर्फबारी के कारण सर्दियों में अक्सर बंद रहता है।"
    },
    {
      question: "भारत में 'श्वेत क्रांति' (White Revolution) के जनक के रूप में किसे जाना जाता है?",
      answers: shuffle([
        { text: "डॉ. एम.एस. स्वामीनाथन", correct: false },
        { text: "डॉ. वर्गीज कुरियन", correct: true },
        { text: "डॉ. सैम पित्रोदा", correct: false },
        { text: "डॉ. होमी भाभा", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> डॉ. वर्गीज कुरियन को भारत में 'श्वेत क्रांति' (White Revolution) या 'ऑपरेशन फ्लड' का जनक माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने डेयरी सहकारी आंदोलन (जैसे अमूल) के माध्यम से भारत को दूध उत्पादन में आत्मनिर्भर बनाने में महत्वपूर्ण भूमिका निभाई।"
    },
    {
      question: "भारत के 'किस राज्य में 'मुदुमलाई राष्ट्रीय उद्यान' स्थित है?",
      answers: shuffle([
        { text: "कर्नाटक", correct: false },
        { text: "केरल", correct: false },
        { text: "तमिलनाडु", correct: true },
        { text: "आंध्र प्रदेश", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुदुमलाई राष्ट्रीय उद्यान (Mudumalai National Park) तमिलनाडु राज्य में नीलगिरि पहाड़ियों के उत्तर-पश्चिमी किनारे पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक महत्वपूर्ण वन्यजीव अभयारण्य और टाइगर रिजर्व है, जो बाघों, हाथियों, तेंदुओं और विभिन्न पक्षी प्रजातियों के लिए जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह नीलगिरि बायोस्फीयर रिजर्व का हिस्सा है।"
    },
    {
      question: "'ब्रह्मपुत्र नदी' तिब्बत में किस नाम से जानी जाती है?",
      answers: shuffle([
        { text: "दिहांग", correct: false },
        { text: "जमुना", correct: false },
        { text: "सांगपो (त्सांगपो)", correct: true },
        { text: "मेघना", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्रह्मपुत्र नदी तिब्बत में 'यारलुंग त्सांगपो' (Yarlung Tsangpo) के नाम से जानी जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह तिब्बत के चेमायुंग-डुंग ग्लेशियर से निकलती है और भारत में अरुणाचल प्रदेश में दिहांग के रूप में प्रवेश करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक महत्वपूर्ण ट्रांस-बाउंड्री नदी है जो चीन, भारत और बांग्लादेश से होकर बहती है।"
    },
    {
      question: "भारत का 'सबसे पुराना बंदरगाह' कौन-सा है?",
      answers: shuffle([
        { text: "मुंबई", correct: false },
        { text: "चेन्नई", correct: false },
        { text: "कोलकाता (हल्दिया सहित)", correct: true },
        { text: "कोचीन", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोलकाता बंदरगाह (Kolkata Port), जिसे अब श्यामा प्रसाद मुखर्जी बंदरगाह के नाम से जाना जाता है, भारत का सबसे पुराना प्रमुख बंदरगाह है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह हुगली नदी पर स्थित एक नदी बंदरगाह है और 1870 में इसकी स्थापना की गई थी।<br><br><i class='fa-solid fa-angles-right icon'></i> ब्रिटिश शासन के दौरान यह भारत का सबसे महत्वपूर्ण बंदरगाह था।"
    },
    {
      question: "'केसर' (Saffron) का उत्पादन भारत के किस राज्य/केंद्र शासित प्रदेश में मुख्य रूप से होता है?",
      answers: shuffle([
        { text: "हिमाचल प्रदेश", correct: false },
        { text: "उत्तराखंड", correct: false },
        { text: "जम्मू और कश्मीर", correct: true },
        { text: "सिक्किम", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> केसर (Saffron) का उत्पादन भारत में मुख्य रूप से जम्मू और कश्मीर केंद्र शासित प्रदेश में होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> कश्मीर घाटी, विशेषकर पंपोर क्षेत्र, अपनी उच्च गुणवत्ता वाली केसर की खेती के लिए विश्व प्रसिद्ध है।<br><br><i class='fa-solid fa-angles-right icon'></i> केसर को 'लाल सोना' भी कहा जाता है और यह एक अत्यंत मूल्यवान मसाला है।"
    },
    {
      question: "भारत में 'सर्वाधिक तंबाकू' का उत्पादन किस राज्य में होता है?",
      answers: shuffle([
        { text: "कर्नाटक", correct: false },
        { text: "गुजरात", correct: false },
        { text: "आंध्र प्रदेश", correct: true },
        { text: "उत्तर प्रदेश", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> आंध्र प्रदेश भारत में तंबाकू (Tobacco) का सबसे बड़ा उत्पादक राज्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> राज्य के गुंटूर जिले में तंबाकू की खेती बड़े पैमाने पर की जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत विश्व में तंबाकू के प्रमुख उत्पादकों में से एक है।"
    },
    {
      question: "भारत की 'सबसे लंबी नहर' कौन-सी है?",
      answers: shuffle([
        { text: "ऊपरी गंगा नहर", correct: false },
        { text: "शारदा नहर", correct: false },
        { text: "इंदिरा गांधी नहर", correct: true },
        { text: "भाखड़ा नहर", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंदिरा गांधी नहर (Indira Gandhi Canal) भारत की सबसे लंबी नहर है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह राजस्थान में सतलज और ब्यास नदियों के संगम पर बने हरिके बैराज से निकलती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी कुल लंबाई लगभग 650 किलोमीटर है और यह मुख्य रूप से राजस्थान के थार मरुस्थल के शुष्क और अर्ध-शुष्क क्षेत्रों में सिंचाई प्रदान करती है।"
    },
    {
      question: "'भारत का रुहर' (Ruhr of India) किस पठार को कहा जाता है?",
      answers: shuffle([
        { text: "दक्कन का पठार", correct: false },
        { text: "छोटा नागपुर का पठार", correct: true },
        { text: "मालवा का पठार", correct: false },
        { text: "बघेलखंड का पठार", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> छोटा नागपुर पठार को 'भारत का रुहर' कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> रुहर जर्मनी का एक औद्योगिक क्षेत्र है जो अपने कोयला और खनिज संसाधनों के लिए प्रसिद्ध है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी तरह, छोटा नागपुर पठार भारत का सबसे खनिज-समृद्ध क्षेत्र है, जहाँ कोयला, लौह अयस्क, अभ्रक और बॉक्साइट जैसे खनिजों के विशाल भंडार हैं, जिसने इसे भारत के भारी उद्योगों का केंद्र बनाया है।"
    },
    {
      question: "भारत में 'सबसे अधिक मैंग्रोव वन' किस राज्य में पाए जाते हैं?",
      answers: shuffle([
        { text: "गुजरात", correct: false },
        { text: "ओडिशा", correct: false },
        { text: "पश्चिम बंगाल", correct: true },
        { text: "आंध्र प्रदेश", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> पश्चिम बंगाल में भारत के सबसे अधिक मैंग्रोव वन (Mangrove Forests) पाए जाते हैं, विशेषकर सुंदरबन क्षेत्र में।<br><br><i class='fa-solid fa-angles-right icon'></i> सुंदरबन दुनिया का सबसे बड़ा मैंग्रोव वन क्षेत्र है और यह अपनी अद्वितीय जैव विविधता, विशेष रूप से रॉयल बंगाल टाइगर के लिए जाना जाता है।"
    },
    {
      question: "'अंडमान और निकोबार द्वीप समूह' की राजधानी पोर्ट ब्लेयर किस द्वीप पर स्थित है?",
      answers: shuffle([
        { text: "उत्तरी अंडमान", correct: false },
        { text: "मध्य अंडमान", correct: false },
        { text: "दक्षिण अंडमान", correct: true },
        { text: "छोटा अंडमान", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंडमान और निकोबार द्वीप समूह की राजधानी पोर्ट ब्लेयर (Port Blair) दक्षिण अंडमान द्वीप पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह द्वीप समूह का सबसे बड़ा शहर और मुख्य प्रवेश द्वार है, और यहाँ वीर सावरकर अंतर्राष्ट्रीय हवाई अड्डा भी स्थित है।"
    },
    {
      question: "भारत में 'काली मिट्टी' का निर्माण मुख्य रूप से किस प्रकार की चट्टानों से होता है?",
      answers: shuffle([
        { text: "ग्रेनाइट", correct: false },
        { text: "चूना पत्थर", correct: false },
        { text: "बेसाल्ट", correct: true },
        { text: "बलुआ पत्थर", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी (Black Soil) का निर्माण मुख्य रूप से बेसाल्ट (Basalt) नामक आग्नेय चट्टानों के अपक्षय (weathering) से होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये चट्टानें दक्कन ट्रैप क्षेत्र में ज्वालामुखी विस्फोटों से निकली थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> बेसाल्टिक चट्टानों में लोहे और मैग्नीशियम की प्रचुरता होती है, जो काली मिट्टी के गुणों में योगदान करती है।"
    },
    {
        question: "भारत में 'सर्वाधिक पवन ऊर्जा' का उत्पादन किस राज्य में होता है?",
        answers: shuffle([
          { text: "गुजरात", correct: false },
          { text: "महाराष्ट्र", correct: false },
          { text: "तमिलनाडु", correct: true },
          { text: "कर्नाटक", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> तमिलनाडु भारत में पवन ऊर्जा का सबसे बड़ा उत्पादक राज्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> राज्य की लंबी तटरेखा, लगातार और तेज हवाएँ, और अनुकूल भौगोलिक परिस्थितियाँ पवन ऊर्जा उत्पादन के लिए आदर्श हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> मुप्पंडल पवन ऊर्जा परियोजना तमिलनाडु में स्थित सबसे बड़ी पवन ऊर्जा परियोजनाओं में से एक है।",
      },
      {
        question: "'भारत का लौह इस्पात शहर' (Steel City of India) किसे कहा जाता है?",
        answers: shuffle([
          { text: "भिलाई", correct: false },
          { text: "राउरकेला", correct: false },
          { text: "जमशेदपुर", correct: true },
          { text: "दुर्गापुर", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> जमशेदपुर को 'भारत का लौह इस्पात शहर' या 'स्टील सिटी ऑफ इंडिया' कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह झारखंड राज्य में स्थित है और यहाँ टाटा स्टील (पूर्व में TISCO) का मुख्यालय है, जो भारत का पहला और सबसे बड़ा एकीकृत लौह इस्पात संयंत्र है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी स्थापना जमशेदजी टाटा ने 1907 में की थी।",
      },
      {
        question: "'चिल्का झील' किस प्रकार की झील का उदाहरण है?",
        answers: shuffle([
          { text: "क्रेटर झील", correct: false },
          { text: "विवर्तनिक झील", correct: false },
          { text: "लैगून झील", correct: true },
          { text: "मीठे पानी की झील", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> चिल्का झील भारत की सबसे बड़ी खारे पानी की लैगून (Lagoon) झील है, जो ओडिशा राज्य में बंगाल की खाड़ी के तट पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> लैगून समुद्र से आंशिक रूप से अलग हुए खारे पानी के छिछले निकाय होते हैं, जो अक्सर रेत की पट्टियों या प्रवाल भित्तियों द्वारा निर्मित होते हैं।",
      },
      {
        question:
          "भारत में 'जनसंख्या लाभांश' (Demographic Dividend) की स्थिति को कौन-सा आयु वर्ग दर्शाता है?",
        answers: shuffle([
          { text: "0-14 वर्ष", correct: false },
          { text: "15-59 वर्ष", correct: true },
          { text: "60 वर्ष और उससे अधिक", correct: false },
          { text: "0-5 वर्ष", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> जनसंख्या लाभांश (Demographic Dividend) तब होता है जब कार्यशील आयु वर्ग (Working Age Population) की जनसंख्या (आमतौर पर 15-59 वर्ष) का अनुपात कुल जनसंख्या में गैर-कार्यशील आयु वर्ग (बच्चों और वृद्धों) की तुलना में अधिक होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह स्थिति आर्थिक विकास के लिए एक अवसर प्रस्तुत करती है यदि इस बड़ी कार्यशील जनसंख्या को उत्पादक रूप से नियोजित किया जा सके।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत वर्तमान में इस जनसांख्यिकीय लाभांश के चरण में है।",
      },
      {
        question: "भारत की 'सबसे लंबी नदी' जो पूरी तरह से भारतीय क्षेत्र में बहती है?",
        answers: shuffle([
          { text: "ब्रह्मपुत्र", correct: false },
          { text: "सिंधु", correct: false },
          { text: "गंगा", correct: false },
          { text: "गोदावरी", correct: true },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> गोदावरी नदी प्रायद्वीपीय भारत की सबसे लंबी नदी है और भारत के भीतर बहने वाली सबसे लंबी नदी भी है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह महाराष्ट्र के त्र्यंबकेश्वर से निकलती है और बंगाल की खाड़ी में गिरती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी कुल लंबाई लगभग 1465 किलोमीटर है।<br><br><i class='fa-solid fa-angles-right icon'></i> गंगा नदी सबसे लंबी नदी है लेकिन यह केवल भारत में नहीं बहती (बांग्लादेश में भी बहती है)।<br><br><i class='fa-solid fa-angles-right icon'></i> ब्रह्मपुत्र और सिंधु भी भारत से बाहर से आती हैं।",
      },
      {
        question: "भारत में 'सर्वाधिक जूट' का उत्पादन किस राज्य में होता है?",
        answers: shuffle([
          { text: "बिहार", correct: false },
          { text: "असम", correct: false },
          { text: "ओडिशा", correct: false },
          { text: "पश्चिम बंगाल", correct: true },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> पश्चिम बंगाल भारत में जूट (Jute) का सबसे बड़ा उत्पादक राज्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> गंगा-ब्रह्मपुत्र डेल्टा क्षेत्र की जलोढ़ मिट्टी और आर्द्र जलवायु जूट की खेती के लिए अत्यंत अनुकूल है।<br><br><i class='fa-solid fa-angles-right icon'></i> जूट एक महत्वपूर्ण नकदी फसल है जिसे 'गोल्डन फाइबर' भी कहा जाता है और इसका उपयोग बोरे, चटाई और वस्त्र बनाने में होता है।",
      },
      {
        question:
          "'गारो, खासी और जयंतिया पहाड़ियाँ' भारत के किस राज्य में स्थित हैं?",
        answers: shuffle([
          { text: "नागालैंड", correct: false },
          { text: "मणिपुर", correct: false },
          { text: "मेघालय", correct: true },
          { text: "मिजोरम", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> गारो, खासी और जयंतिया पहाड़ियाँ मेघालय राज्य में स्थित हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये पहाड़ियाँ अपनी जनजातियों के नामों पर आधारित हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> खासी पहाड़ियाँ विशेष रूप से प्रसिद्ध हैं क्योंकि विश्व के सबसे अधिक वर्षा वाले स्थान - मासिनराम और चेरापूंजी - इन्हीं पहाड़ियों में स्थित हैं, जो इनकी कीप जैसी आकृति के कारण मॉनसूनी हवाओं को ऊपर उठने के लिए मजबूर करती हैं।",
      },
      {
        question: "भारत में 'सर्वाधिक वन क्षेत्र' किस राज्य में है?",
        answers: shuffle([
          { text: "अरुणाचल प्रदेश", correct: false },
          { text: "छत्तीसगढ़", correct: false },
          { text: "मध्यप्रदेश", correct: true },
          { text: "ओडिशा", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> क्षेत्रफल के अनुसार, मध्य प्रदेश में भारत का सर्वाधिक वन क्षेत्र है।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत वन स्थिति रिपोर्ट (India State of Forest Report) के अनुसार, मध्य प्रदेश में सबसे बड़ा वन आवरण है, जबकि प्रतिशत के हिसाब से मिजोरम (84.53%) में सर्वाधिक वन आवरण है।",
      },
      {
        question:
          "'कोंकण रेलवे' (Konkan Railway) किन दो प्रमुख शहरों को जोड़ती है?",
        answers: shuffle([
          { text: "मुंबई और गोवा", correct: false },
          { text: "रोहा (महाराष्ट्र) और मैंगलोर (कर्नाटक)", correct: true },
          { text: "मुंबई और चेन्नई", correct: false },
          { text: "पुणे और बेंगलुरु", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> कोंकण रेलवे (Konkan Railway) भारत के पश्चिमी तट के समानांतर चलने वाली एक महत्वपूर्ण रेलवे लाइन है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह महाराष्ट्र के रोहा से शुरू होकर कर्नाटक के मैंगलोर तक जाती है, और गोवा तथा केरल के कुछ हिस्सों से भी होकर गुजरती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह दुर्गम कोंकण क्षेत्र को पार करती है और इसमें कई सुरंगें और पुल शामिल हैं, जो इसे एक इंजीनियरिंग चमत्कार बनाते हैं।",
      },
      {
        question:
          "भारत में 'भूरी क्रांति' (Brown Revolution) किससे संबंधित है?",
        answers: shuffle([
          { text: "उर्वरक उत्पादन", correct: false },
          { text: "गैर-पारंपरिक ऊर्जा उत्पादन", correct: false },
          { text: "चमड़ा उत्पादन", correct: true },
          { text: "दूध उत्पादन", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> भूरी क्रांति (Brown Revolution) भारत में चमड़ा (Leather) उत्पादन और संबंधित उद्योगों के विकास से संबंधित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका उद्देश्य चमड़ा उत्पादों के उत्पादन में वृद्धि और निर्यात को बढ़ावा देना है।",
      },
      {
        question:
          "भारत की 'सबसे बड़ी बहुउद्देशीय नदी घाटी परियोजना' कौन-सी है?",
        answers: shuffle([
          { text: "दामोदर घाटी परियोजना", correct: false },
          { text: "भाखड़ा नांगल परियोजना", correct: true },
          { text: "हीराकुंड परियोजना", correct: false },
          { text: "चंबल घाटी परियोजना", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> भाखड़ा नांगल परियोजना (Bhakra Nangal Project) भारत की सबसे बड़ी बहुउद्देशीय नदी घाटी परियोजना है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह सतलज नदी पर स्थित है और इसमें भाखड़ा बांध (भारत का सबसे ऊँचा गुरुत्वाकर्षण बांध) और नांगल बांध शामिल हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह परियोजना पंजाब, हरियाणा और राजस्थान राज्यों को सिंचाई, जलविद्युत और पेयजल के लाभ प्रदान करती है।",
      },
      {
        question: "'डोडाबेटा' चोटी किस पहाड़ी श्रृंखला में स्थित है?",
        answers: shuffle([
          { text: "अन्नामलाई पहाड़ियाँ", correct: false },
          { text: "कार्डामम पहाड़ियाँ", correct: false },
          { text: "नीलगिरि पहाड़ियाँ", correct: true },
          { text: "पालनी पहाड़ियाँ", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> डोडाबेटा (Doddabetta) नीलगिरि पहाड़ियों की सबसे ऊँची चोटी है, जो तमिलनाडु में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी ऊँचाई लगभग 2,637 मीटर है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह दक्षिण भारत की सबसे ऊँची चोटियों में से एक है और ऊटी के पास एक प्रसिद्ध पर्यटन स्थल है।",
      },
      {
        question: "भारत में 'सर्वाधिक यूरेनियम' का उत्पादन किस राज्य में होता है?",
        answers: shuffle([
          { text: "मेघालय", correct: false },
          { text: "आंध्र प्रदेश", correct: false },
          { text: "झारखंड", correct: true },
          { text: "छत्तीसगढ़", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> झारखंड भारत में यूरेनियम का सबसे बड़ा उत्पादक राज्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> झारखंड के पूर्वी सिंहभूम जिले में जादूगुड़ा की खान भारत की सबसे महत्वपूर्ण यूरेनियम खान है।<br><br><i class='fa-solid fa-angles-right icon'></i> यूरेनियम परमाणु ऊर्जा के लिए एक महत्वपूर्ण ईंधन है।",
      },
      {
        question: "भारत की 'सबसे पुरानी वलित पर्वत श्रृंखला' कौन-सी है?",
        answers: shuffle([
          { text: "हिमालय", correct: false },
          { text: "विंध्य", correct: false },
          { text: "सतपुड़ा", correct: false },
          { text: "अरावली", correct: true },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> अरावली पर्वतमाला भारत की सबसे पुरानी वलित पर्वत श्रृंखला है, जो लगभग 670 मिलियन वर्ष पुरानी मानी जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अब एक अवशिष्ट पर्वतमाला के रूप में मौजूद है, जिसका अर्थ है कि यह लाखों वर्षों के कटाव के कारण अपने मूल वलित रूप का बहुत कम हिस्सा बची है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह गुजरात से दिल्ली तक फैली हुई है।",
      },
      {
        question: "'पुलीकट झील' किस राज्य की सीमा पर स्थित है?",
        answers: shuffle([
          { text: "ओडिशा और आंध्र प्रदेश", correct: false },
          { text: "केरल और तमिलनाडु", correct: false },
          { text: "आंध्र प्रदेश और तमिलनाडु", correct: true },
          { text: "कर्नाटक और केरल", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> पुलीकट झील (Pulicat Lake) भारत की दूसरी सबसे बड़ी खारे पानी की लैगून है, जो आंध्र प्रदेश और तमिलनाडु राज्यों की सीमा पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस झील के अंदर श्रीहरिकोटा द्वीप है, जिस पर सतीश धवन अंतरिक्ष केंद्र स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रवासी पक्षियों के लिए एक महत्वपूर्ण निवास स्थान भी है।",
      },
      {
        question:
          "भारत में 'सर्वाधिक ग्रामीण जनसंख्या' (Rural Population) वाला राज्य कौन-सा है (2011 जनगणना के अनुसार)?",
        answers: shuffle([
          { text: "बिहार", correct: false },
          { text: "महाराष्ट्र", correct: false },
          { text: "उत्तर प्रदेश", correct: true },
          { text: "पश्चिम बंगाल", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> जनगणना 2011 के अनुसार, उत्तर प्रदेश में भारत की सर्वाधिक ग्रामीण जनसंख्या है (संख्यात्मक रूप से)।<br><br><i class='fa-solid fa-angles-right icon'></i> उत्तर प्रदेश एक कृषि प्रधान राज्य है जहाँ ग्रामीण क्षेत्रों में बड़ी संख्या में लोग निवास करते हैं।",
      },
      {
        question:
          "'लोकतक झील' (Loktak Lake) किस राज्य में स्थित है, और यह अपनी तैरती हुई द्वीपों (फुमडी) के लिए प्रसिद्ध है?",
        answers: shuffle([
          { text: "असम", correct: false },
          { text: "मेघालय", correct: false },
          { text: "मणिपुर", correct: true },
          { text: "मिजोरम", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> लोकतक झील (Loktak Lake) मणिपुर राज्य में स्थित पूर्वोत्तर भारत की सबसे बड़ी मीठे पानी की झील है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अपने तैरते हुए द्वीपों (स्थानीय रूप से 'फुमडी' के नाम से जाने जाते हैं) के लिए प्रसिद्ध है।<br><br><i class='fa-solid fa-angles-right icon'></i> दुनिया का एकमात्र तैरता हुआ राष्ट्रीय उद्यान, 'केइबुल लामजाओ नेशनल पार्क', इसी झील में स्थित है, जो संगाई हिरण (Manipuri Brow-antlered deer) का अंतिम प्राकृतिक आवास है।",
      },
      {
        question:
          "भारत में 'मैंग्रोव वन' (Mangrove Forests) मुख्य रूप से किन क्षेत्रों में पाए जाते हैं?",
        answers: shuffle([
          { text: "हिमालयी क्षेत्र", correct: false },
          { text: "शुष्क और अर्ध-शुष्क क्षेत्र", correct: false },
          { text: "ज्वारीय तट और डेल्टा क्षेत्र", correct: true },
          { text: "पठारी क्षेत्र", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> मैंग्रोव वन (Mangrove Forests) मुख्य रूप से ज्वारीय तटों, डेल्टा क्षेत्रों और ज्वारनदमुख (estuaries) में पाए जाते हैं, जहाँ खारे और मीठे पानी का मिश्रण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये वन तटीय कटाव को रोकने, तूफानों से बचाव करने और कई समुद्री प्रजातियों के लिए नर्सरी के रूप में कार्य करने में महत्वपूर्ण भूमिका निभाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत में सुंदरबन, महानदी डेल्टा, गोदावरी-कृष्णा डेल्टा और गुजरात के तट पर मैंग्रोव पाए जाते हैं।",
      },
      {
        question:
          "'लक्षद्वीप' द्वीपसमूह किस प्रकार के द्वीपों का उदाहरण है?",
        answers: shuffle([
          { text: "ज्वालामुखी द्वीप", correct: false },
          { text: "विवर्तनिक द्वीप", correct: false },
          { text: "प्रवाल द्वीप (Coral Islands)", correct: true },
          { text: "अवशिष्ट द्वीप", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> लक्षद्वीप द्वीपसमूह अरब सागर में स्थित प्रवाल द्वीप (Coral Islands) का उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये द्वीप मुख्य रूप से प्रवाल भित्तियों और उनके अवशेषों से बने हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये अपनी सफेद रेत, नीले पानी और समृद्ध समुद्री जीवन के लिए प्रसिद्ध हैं।",
      },
      {
        question: "भारत का 'सबसे ऊँचा पठार' कौन-सा है?",
        answers: shuffle([
          { text: "दक्कन का पठार", correct: false },
          { text: "छोटा नागपुर का पठार", correct: false },
          { text: "लद्दाख का पठार", correct: true },
          { text: "मालवा का पठार", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> लद्दाख का पठार भारत का सबसे ऊँचा पठार है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे 'शीत मरुस्थल' भी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह महान हिमालय और काराकोरम पर्वतमाला के बीच स्थित है और इसकी औसत ऊँचाई 3,000 मीटर से 6,000 मीटर के बीच है, जो इसे अत्यंत ठंडा और शुष्क वातावरण प्रदान करती है।",
      },
      {
        question: "दक्कन ट्रैप (Deccan Trap) का निर्माण किस भूवैज्ञानिक काल में हुआ था?",
        answers: shuffle([
          { text: "प्रीकैम्ब्रियन", correct: false },
          { text: "पेलियोजोइक", correct: false },
          { text: "मेसोजोइक (क्रीटेशियस काल के अंत में)", correct: true },
          { text: "सेनोजोइक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्कन ट्रैप (Deccan Trap) का निर्माण मेसोजोइक युग के क्रीटेशियस काल (Cretaceous Period) के अंत में और पेलियोसीन काल की शुरुआत में बड़े पैमाने पर ज्वालामुखी विस्फोटों (बेसाल्टिक लावा के प्रवाह) के कारण हुआ था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत के पश्चिमी और मध्य भागों में फैला हुआ है और इसमें काली मिट्टी पाई जाती है।"
      },
      {
        question: "भारत में 'सर्वाधिक तांबा' (Copper) का उत्पादन किस राज्य में होता है?",
        answers: shuffle([
          { text: "झारखंड", correct: false },
          { text: "राजस्थान", correct: false },
          { text: "मध्यप्रदेश", correct: true },
          { text: "छत्तीसगढ़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्यप्रदेश भारत में तांबा (Copper) का सबसे बड़ा उत्पादक राज्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> राज्य के बालाघाट जिले में मलांजखंड खदान (Malanjkhand Mine) भारत की सबसे बड़ी तांबे की खुली खदानों में से एक है।<br><br><i class='fa-solid fa-angles-right icon'></i> राजस्थान में खेतड़ी भी एक महत्वपूर्ण तांबा उत्पादक क्षेत्र है।"
      },
      {
        question: "भारत में 'सदाबहार वन' (Evergreen Forests) मुख्य रूप से किन क्षेत्रों में पाए जाते हैं?",
        answers: shuffle([
          { text: "थार मरुस्थल", correct: false },
          { text: "पश्चिमी घाट और उत्तर-पूर्वी भारत", correct: true },
          { text: "गंगा के मैदान", correct: false },
          { text: "दक्कन का पठार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सदाबहार वन (Evergreen Forests) उन क्षेत्रों में पाए जाते हैं जहाँ 200 सेमी से अधिक वर्षा और 22°C से अधिक तापमान होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत में ये मुख्य रूप से पश्चिमी घाट (केरल, कर्नाटक, महाराष्ट्र), उत्तर-पूर्वी भारत (असम, मेघालय, अरुणाचल प्रदेश) और अंडमान और निकोबार द्वीप समूह में पाए जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इन वनों में पेड़ अपनी पत्तियाँ एक साथ नहीं गिराते, इसलिए वे वर्ष भर हरे-भरे रहते हैं।"
      },
      {
        question: "भारत का 'सबसे ऊँचा बांध' (Highest Dam) कौन-सा है?",
        answers: shuffle([
          { text: "भाखड़ा नांगल बांध", correct: false },
          { text: "हीराकुंड बांध", correct: false },
          { text: "टिहरी बांध", correct: true },
          { text: "सरदार सरोवर बांध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टिहरी बांध भारत का सबसे ऊँचा बांध है, जिसकी ऊँचाई 260.5 मीटर है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उत्तराखंड में भागीरथी नदी पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक बहुउद्देशीय रॉक-फिल और अर्थ-फिल तटबंध बांध है जो जलविद्युत, सिंचाई और पेयजल की आवश्यकताओं को पूरा करता है।"
      },
      {
        question: "'मानस राष्ट्रीय उद्यान' भारत के किस राज्य में स्थित है?",
        answers: shuffle([
          { text: "सिक्किम", correct: false },
          { text: "अरुणाचल प्रदेश", correct: false },
          { text: "असम", correct: true },
          { text: "पश्चिम बंगाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मानस राष्ट्रीय उद्यान (Manas National Park) असम राज्य में स्थित एक यूनेस्को विश्व धरोहर स्थल, टाइगर रिजर्व, एलिफेंट रिजर्व और बायोस्फीयर रिजर्व है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह रॉयल बंगाल टाइगर, एशियाई हाथी और कई दुर्लभ प्रजातियों का घर है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत और भूटान की सीमा पर स्थित है।"
      },
      {
        question: "'कोयले' के भंडार मुख्य रूप से किस भूवैज्ञानिक संरचना में पाए जाते हैं?",
        answers: shuffle([
          { text: "धारवाड़ क्रम की चट्टानें", correct: false },
          { text: "कुडप्पा क्रम की चट्टानें", correct: false },
          { text: "गोंडवाना क्रम की चट्टानें", correct: true },
          { text: "विंध्य क्रम की चट्टानें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत के अधिकांश कोयले के भंडार गोंडवाना क्रम की चट्टानों (Gondwana System of Rocks) में पाए जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये चट्टानें भारत के मुख्य कोयला क्षेत्रों जैसे दामोदर घाटी (झारखंड, पश्चिम बंगाल), महानदी घाटी (ओडिशा), गोदावरी घाटी (तेलंगाना, आंध्र प्रदेश) और सोन घाटी (मध्य प्रदेश) में फैली हुई हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> गोंडवाना कोयला बिटुमिनस प्रकार का होता है।"
      },
      {
        question: "भारत का 'सबसे छोटा राज्य' क्षेत्रफल के अनुसार कौन-सा है?",
        answers: shuffle([
          { text: "सिक्किम", correct: false },
          { text: "गोवा", correct: true },
          { text: "त्रिपुरा", correct: false },
          { text: "नागालैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्षेत्रफल के अनुसार, गोवा भारत का सबसे छोटा राज्य है, जिसका क्षेत्रफल मात्र 3,702 वर्ग किलोमीटर है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत के पश्चिमी तट पर स्थित है और अपने सुंदर समुद्र तटों और पुर्तगाली विरासत के लिए प्रसिद्ध है।"
      },
      {
        question: "भारत में 'सर्वाधिक सड़क घनत्व' (Road Density) किस राज्य में है?",
        answers: shuffle([
          { text: "उत्तर प्रदेश", correct: false },
          { text: "महाराष्ट्र", correct: false },
          { text: "केरल", correct: true },
          { text: "पश्चिम बंगाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केरल में भारत का सर्वाधिक सड़क घनत्व है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका अर्थ है कि प्रति वर्ग किलोमीटर भौगोलिक क्षेत्र में सड़कों की लंबाई सबसे अधिक है।<br><br><i class='fa-solid fa-angles-right icon'></i> केरल की सघन आबादी और उच्च जनसंख्या घनत्व के कारण यहाँ बेहतर कनेक्टिविटी के लिए सड़कों का व्यापक नेटवर्क विकसित किया गया है।"
      },
      {
        question: "'भारत का लौह इस्पात शहर' (Steel City of India) किसे कहा जाता है?",
        answers: shuffle([
          { text: "भिलाई", correct: false },
          { text: "राउरकेला", correct: false },
          { text: "जमशेदपुर", correct: true },
          { text: "दुर्गापुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जमशेदपुर को 'भारत का लौह इस्पात शहर' या 'स्टील सिटी ऑफ इंडिया' कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह झारखंड राज्य में स्थित है और यहाँ टाटा स्टील (पूर्व में TISCO) का मुख्यालय है, जो भारत का पहला और सबसे बड़ा एकीकृत लौह इस्पात संयंत्र है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी स्थापना जमशेदजी टाटा ने 1907 में की थी।"
      },
      {
        question: "'नाथुला दर्रा' किस भारतीय राज्य/केंद्र शासित प्रदेश में स्थित है?",
        answers: shuffle([
          { text: "उत्तराखंड", correct: false },
          { text: "हिमाचल प्रदेश", correct: false },
          { text: "सिक्किम", correct: true },
          { text: "अरुणाचल प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नाथुला दर्रा (Nathu La Pass) सिक्किम राज्य में स्थित है, जो भारत और तिब्बत (चीन नियंत्रित) के बीच एक महत्वपूर्ण सीमा व्यापार मार्ग है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्राचीन रेशम मार्ग का हिस्सा रहा है और इसकी सामरिक महत्ता बहुत अधिक है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह दर्रा भारत-चीन युद्ध (1962) के बाद बंद कर दिया गया था और 2006 में फिर से व्यापार के लिए खोला गया।"
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