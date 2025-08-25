const questions = [
  {
      topHeading: "भारत के भूगोल पर आधारित 50 बहुविकल्पीय प्रश्न (MCQs) part 8  (quiz_no. 8)"
  },
    {
      question: "भारत में 'पेट्रोलियम' के लिए 'अंकलेश्वर' क्षेत्र किस राज्य में स्थित है?",
      answers: shuffle([
        { text: "असम", correct: false },
        { text: "गुजरात", correct: true },
        { text: "महाराष्ट्र", correct: false },
        { text: "राजस्थान", correct: false },
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंकलेश्वर (Ankleshwar) गुजरात राज्य में स्थित एक प्रमुख ऑन-शोर (भूमि पर स्थित) तेल क्षेत्र है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी खोज 1950 के दशक के अंत में हुई थी और यह गुजरात के आर्थिक विकास में महत्वपूर्ण भूमिका निभाता है, जिससे पेट्रोलियम और प्राकृतिक गैस का उत्पादन होता है।",
    },
    {
      question: "भारत का 'सबसे ऊँचा बहुउद्देशीय नदी घाटी परियोजना' कौन-सा है?",
      answers: shuffle([
        { text: "भाखड़ा नांगल परियोजना", correct: false },
        { text: "दामोदर घाटी परियोजना", correct: false },
        { text: "टिहरी बांध परियोजना", correct: true },
        { text: "हीराकुंड परियोजना", correct: false },
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> टिहरी बांध परियोजना भारत की सबसे ऊँची बहुउद्देशीय नदी घाटी परियोजना है।<br><br><i class='fa-solid fa-angles-right icon'></i> टिहरी बांध उत्तराखंड में भागीरथी नदी पर स्थित है और यह भारत का सबसे ऊँचा बांध है (लगभग 260.5 मीटर)।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक रॉक-फिल और अर्थ-फिल तटबंध बांध है और जलविद्युत उत्पादन, सिंचाई और पेयजल आपूर्ति के लिए महत्वपूर्ण है।",
    },
    {
      question: "'चिल्का झील' किस राज्य में स्थित है?",
      answers: shuffle([
        { text: "आंध्र प्रदेश", correct: false },
        { text: "ओडिशा", correct: true },
        { text: "पश्चिम बंगाल", correct: false },
        { text: "तमिलनाडु", correct: false },
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> चिल्का झील भारत की सबसे बड़ी खारे पानी की लैगून है, जो ओडिशा राज्य में बंगाल की खाड़ी के तट पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक महत्वपूर्ण रामसर साइट है और प्रवासी पक्षियों के लिए एक प्रमुख शीतकालीन मैदान है।",
    },
    {
      question: "भारत में 'सर्वाधिक वर्षा' किस मॉनसूनी शाखा से होती है?",
      answers: shuffle([
        { text: "अरब सागर शाखा", correct: true },
        { text: "बंगाल की खाड़ी शाखा", correct: false },
        { text: "पश्चिमी विक्षोभ", correct: false },
        { text: "उत्तर-पूर्वी मॉनसून", correct: false },
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्षिण-पश्चिमी मॉनसून की अरब सागर शाखा भारत में अधिकांश वर्षा के लिए जिम्मेदार है, विशेषकर पश्चिमी घाट के पश्चिमी ढलानों पर और मध्य भारत में।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शाखा जून के पहले सप्ताह में केरल तट पर पहुँचती है और तेजी से आगे बढ़ती है, जिससे भारत के बड़े हिस्से में व्यापक और भारी वर्षा होती है।",
    },
    {
      question: "भारत की 'सबसे बड़ी जनजातीय समूह' कौन-सा है?",
      answers: shuffle([
        { text: "भील", correct: true },
        { text: "गोंड", correct: false },
        { text: "संथाल", correct: false },
        { text: "मुंडा", correct: false },
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> जनगणना 2011 के आंकड़ों के अनुसार, भील (Bhil) भारत का सबसे बड़ा जनजातीय समूह है।<br><br><i class='fa-solid fa-angles-right icon'></i> भील जनजाति मुख्य रूप से मध्य प्रदेश, गुजरात, राजस्थान और महाराष्ट्र जैसे राज्यों में पाई जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके बाद गोंड जनजाति आती है।",
    },
    {
      question: "'मुगा रेशम' (Muga Silk) मुख्य रूप से भारत के किस राज्य में उत्पादित होता है?",
      answers: shuffle([
        { text: "कर्नाटक", correct: false },
        { text: "जम्मू और कश्मीर", correct: false },
        { text: "असम", correct: true },
        { text: "पश्चिम बंगाल", correct: false },
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुगा रेशम (Muga Silk) असम का एक अनूठा और विशिष्ट रेशम है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक जंगली रेशम है जो एंथेरिया असमेन्सिस (Antheraea assamensis) नामक रेशम के कीड़ों द्वारा उत्पादित होता है, जो विशेष रूप से असम में पाए जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अपने सुनहरे-पीले रंग और स्थायित्व के लिए जाना जाता है, और इसे अक्सर 'असम का सुनहरा रेशम' कहा जाता है।",
    },
    {
      question: "भारत का 'सबसे पूर्वी देशांतर' कौन-सा है?",
      answers: shuffle([
        { text: "68° 7′ पूर्वी देशांतर", correct: false },
        { text: "97° 25′ पूर्वी देशांतर", correct: true },
        { text: "82° 30′ पूर्वी देशांतर", correct: false },
        { text: "90° 00′ पूर्वी देशांतर", correct: false },
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत का सबसे पूर्वी देशांतर 97° 25′ पूर्वी देशांतर है, जो अरुणाचल प्रदेश के किबिथु (Kibithu) में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत के पूर्वी छोर को दर्शाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत का सबसे पश्चिमी देशांतर 68° 7′ पूर्वी देशांतर है, जो गुजरात के कच्छ में गौर मोटा (Guhar Moti) में स्थित है।",
    },
    {
      question: "'जायद फसलें' (Zaid Crops) किस ऋतु में उगाई जाती हैं?",
      answers: shuffle([
        { text: "खरीफ और रबी के बीच", correct: true },
        { text: "केवल खरीफ के साथ", correct: false },
        { text: "केवल रबी के साथ", correct: false },
        { text: "पूरे वर्ष", correct: false },
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> जायद फसलें (Zaid Crops) खरीफ और रबी फसलों के बीच एक छोटे, ग्रीष्मकालीन मौसम में उगाई जाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अवधि आमतौर पर मार्च से जून तक होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस मौसम में पानी की पर्याप्त उपलब्धता वाले क्षेत्रों में तरबूज, खरबूजा, खीरा, ककड़ी और कुछ चारा फसलें उगाई जाती हैं।",
    },
    {
      question: "भारत में 'सर्वाधिक तंबाकू' का उत्पादन किस राज्य में होता है?",
      answers: shuffle([
        { text: "कर्नाटक", correct: false },
        { text: "गुजरात", correct: false },
        { text: "आंध्र प्रदेश", correct: true },
        { text: "उत्तर प्रदेश", correct: false },
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> आंध्र प्रदेश भारत में तंबाकू (Tobacco) का सबसे बड़ा उत्पादक राज्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> राज्य के गुंटूर जिले में तंबाकू की खेती बड़े पैमाने पर की जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत विश्व में तंबाकू के प्रमुख उत्पादकों में से एक है।",
    },
    {
      question: "'अमरकंटक पठार' किस पर्वत श्रृंखला का हिस्सा है?",
      answers: shuffle([
        { text: "विंध्य पर्वतमाला", correct: false },
        { text: "सतपुड़ा पर्वतमाला", correct: false },
        { text: "मैकल रेंज", correct: true },
        { text: "अरावली पर्वतमाला", correct: false },
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमरकंटक पठार मैकल रेंज (Maikal Range) का हिस्सा है, जो सतपुड़ा पर्वतमाला की पूर्वी शाखा है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पठार मध्य प्रदेश और छत्तीसगढ़ की सीमा पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अपने अद्वितीय भौगोलिक महत्व के लिए जाना जाता है क्योंकि यहाँ से नर्मदा नदी (पश्चिम की ओर), सोन नदी (उत्तर की ओर) और महानदी (पूर्व की ओर) जैसी कई प्रमुख नदियों का उद्गम होता है।",
    },
    {
      question: "भारत में 'सर्वाधिक वर्षा' प्राप्त करने वाला स्थान 'मासिनराम' किस राज्य में स्थित है?",
      answers: shuffle([
        { text: "असम", correct: false },
        { text: "मेघालय", correct: true },
        { text: "मिजोरम", correct: false },
        { text: "त्रिपुरा", correct: false },
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> मासिनराम (Mawsynram) विश्व में सर्वाधिक वर्षा प्राप्त करने वाला स्थान है, जो भारत के मेघालय राज्य में खासी पहाड़ियों में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अपने अद्वितीय भौगोलिक विन्यास के कारण अत्यधिक वर्षा प्राप्त करता है, जहाँ बंगाल की खाड़ी से आने वाली मॉनसूनी हवाएँ पर्वतों से टकराकर ऊपर उठती हैं और सघन रूप से वर्षा करती हैं।",
    },
    {
      question: "'भागीरथी' और 'अलकनंदा' नदियों के संगम पर कौन-सा शहर स्थित है?",
      answers: shuffle([
        { text: "हरिद्वार", correct: false },
        { text: "ऋषिकेश", correct: false },
        { text: "देवप्रयाग", correct: true },
        { text: "रुद्रप्रयाग", correct: false },
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> भागीरथी और अलकनंदा नदियाँ देवप्रयाग (Devprayag), उत्तराखंड में मिलती हैं, और इस संगम के बाद ही यह नदी 'गंगा' के नाम से जानी जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> देवप्रयाग उत्तराखंड के पंच प्रयागों (विष्णुप्रयाग, नंदप्रयाग, कर्णप्रयाग, रुद्रप्रयाग, देवप्रयाग) में से एक है, जो हिंदू धर्म में पवित्र माने जाते हैं।",
    },
    {
      question: "भारत का 'सबसे पुराना राष्ट्रीय उद्यान' कौन-सा है?",
      answers: shuffle([
        { text: "काजीरंगा राष्ट्रीय उद्यान", correct: false },
        { text: "रणथंभौर राष्ट्रीय उद्यान", correct: false },
        { text: "जिम कॉर्बेट राष्ट्रीय उद्यान", correct: true },
        { text: "बांधवगढ़ राष्ट्रीय उद्यान", correct: false },
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> जिम कॉर्बेट राष्ट्रीय उद्यान (Jim Corbett National Park) भारत का सबसे पुराना राष्ट्रीय उद्यान है, जिसे 1936 में हेली नेशनल पार्क के रूप में स्थापित किया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उत्तराखंड के नैनीताल जिले में स्थित है और बंगाल टाइगर के संरक्षण के लिए जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह 'प्रोजेक्ट टाइगर' के तहत आने वाले पहले पार्कों में से एक था।",
    },
    {
      question: "भारत के 'किस राज्य को 'दक्षिण भारत का धान का कटोरा' कहा जाता है?",
      answers: shuffle([
        { text: "कर्नाटक", correct: false },
        { text: "केरल", correct: false },
        { text: "आंध्र प्रदेश", correct: true },
        { text: "तमिलनाडु", correct: false },
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> आंध्र प्रदेश को 'दक्षिण भारत का धान का कटोरा' कहा जाता है, विशेष रूप से कृष्णा-गोदावरी डेल्टा क्षेत्र को।<br><br><i class='fa-solid fa-angles-right icon'></i> यह क्षेत्र चावल की खेती के लिए अत्यंत उपजाऊ है और दक्षिण भारत में चावल उत्पादन में महत्वपूर्ण योगदान देता है।",
    },
    {
      question: "भारत में 'जलोढ़ मिट्टी' में किन पोषक तत्वों की कमी पाई जाती है?",
      answers: shuffle([
        { text: "पोटाश और चूना", correct: false },
        { text: "फॉस्फोरस और नाइट्रोजन", correct: true },
        { text: "लोहा और मैग्नीशियम", correct: false },
        { text: "कैल्शियम और सल्फर", correct: false },
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> जलोढ़ मिट्टी (Alluvial Soil) आमतौर पर पोटाश और चूने से भरपूर होती है, जिससे यह बहुत उपजाऊ होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, इसमें अक्सर फॉस्फोरस, नाइट्रोजन और जैविक पदार्थ (ह्यूमस) की कमी पाई जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यही कारण है कि इन मिट्टियों में खेती के दौरान नाइट्रोजन और फॉस्फोरस युक्त उर्वरकों का उपयोग किया जाता है।",
    },
    {
      question: "'कर्क रेखा' भारत के कुल कितने राज्यों से होकर गुजरती है?",
      answers: shuffle([
        { text: "6", correct: false },
        { text: "7", correct: false },
        { text: "8", correct: true },
        { text: "9", correct: false },
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> कर्क रेखा (Tropic of Cancer - 23.5° N अक्षांश) भारत के आठ राज्यों से होकर गुजरती है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये राज्य हैं: गुजरात, राजस्थान, मध्य प्रदेश, छत्तीसगढ़, झारखंड, पश्चिम बंगाल, त्रिपुरा और मिजोरम।<br><br><i class='fa-solid fa-angles-right icon'></i> यह रेखा भारत को लगभग दो बराबर भागों में विभाजित करती है और देश की जलवायु पर महत्वपूर्ण प्रभाव डालती है।",
    },
    {
      question: "भारत का 'सबसे लंबा राष्ट्रीय राजमार्ग' कौन-सा है?",
      answers: shuffle([
        { text: "NH 27", correct: false },
        { text: "NH 44", correct: true },
        { text: "NH 48", correct: false },
        { text: "NH 52", correct: false },
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रीय राजमार्ग 44 (NH 44) भारत का सबसे लंबा राष्ट्रीय राजमार्ग है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उत्तर में श्रीनगर (जम्मू-कश्मीर) से शुरू होकर दक्षिण में कन्याकुमारी (तमिलनाडु) तक जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी कुल लंबाई लगभग 3,745 किलोमीटर है और यह 11 राज्यों और 1 केंद्र शासित प्रदेश से होकर गुजरता है।",
    },
    {
      question: "भारत में 'सर्वाधिक क्रोमाइट' (Chromite) का उत्पादन किस राज्य में होता है?",
      answers: shuffle([
        { text: "झारखंड", correct: false },
        { text: "ओडिशा", correct: true },
        { text: "कर्नाटक", correct: false },
        { text: "महाराष्ट्र", correct: false },
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओडिशा भारत में क्रोमाइट (Chromite) का सबसे बड़ा उत्पादक राज्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> क्रोमाइट क्रोमियम का मुख्य अयस्क है, जिसका उपयोग धातुकर्म, रसायन और आग रोक उद्योगों में किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ओडिशा के जाजपुर जिले का सुकिंदा घाटी क्षेत्र क्रोमाइट के विशाल भंडार के लिए प्रसिद्ध है।",
    },
    {
      question: "'माउंटेन पास' 'जोजी ला' भारत के किस राज्य/केंद्र शासित प्रदेश में स्थित है?",
      answers: shuffle([
        { text: "हिमाचल प्रदेश", correct: false },
        { text: "उत्तराखंड", correct: false },
        { text: "जम्मू और कश्मीर", correct: false },
        { text: "लद्दाख", correct: true },
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> जोजी ला दर्रा (Zoji La Pass) लद्दाख केंद्र शासित प्रदेश में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह श्रीनगर और लेह को जोड़ने वाले राष्ट्रीय राजमार्ग 1 (NH 1) पर स्थित एक महत्वपूर्ण दर्रा है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कश्मीर घाटी और लद्दाख के बीच एक महत्वपूर्ण लिंक प्रदान करता है, लेकिन भारी बर्फबारी के कारण सर्दियों में अक्सर बंद रहता है।",
    },
    {
      question: "भारत में 'श्वेत क्रांति' (White Revolution) के जनक के रूप में किसे जाना जाता है?",
      answers: shuffle([
        { text: "डॉ. एम.एस. स्वामीनाथन", correct: false },
        { text: "डॉ. वर्गीज कुरियन", correct: true },
        { text: "डॉ. सैम पित्रोदा", correct: false },
        { text: "डॉ. होमी भाभा", correct: false },
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> डॉ. वर्गीज कुरियन को भारत में 'श्वेत क्रांति' (White Revolution) या 'ऑपरेशन फ्लड' का जनक माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने डेयरी सहकारी आंदोलन (जैसे अमूल) के माध्यम से भारत को दूध उत्पादन में आत्मनिर्भर बनाने में महत्वपूर्ण भूमिका निभाई।",
    },
    {
        question: "भारत के 'किस राज्य में 'मुदुमलाई राष्ट्रीय उद्यान' स्थित है?",
        answers: shuffle([
          { text: "कर्नाटक", correct: false },
          { text: "केरल", correct: false },
          { text: "तमिलनाडु", correct: true },
          { text: "आंध्रप्रदेश", correct: false }
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
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोलकाता बंदरगाह (Kolkata Port), जिसे अब श्यामाप्रसाद मुखर्जी बंदरगाह के नाम से जाना जाता है, भारत का सबसे पुराना प्रमुख बंदरगाह है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह हुगली नदी पर स्थित एक नदी बंदरगाह है और 1870 में इसकी स्थापना की गई थी।<br><br><i class='fa-solid fa-angles-right icon'></i> ब्रिटिश शासन के दौरान यह भारत का सबसे महत्वपूर्ण बंदरगाह था।"
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
        question: "भारत में 'पूर्वी घाट' की सबसे ऊँची चोटी कौन-सी है?",
        answers: shuffle([
          { text: "अनाईमुडी", correct: false },
          { text: "डोडाबेटा", correct: false },
          { text: "महेंद्रगिरि", correct: false },
          { text: "जिंदगाडा चोटी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पूर्वी घाट की सबसे ऊँची चोटी जिंदगाडा चोटी (Jindhagada Peak) है, जो आंध्र प्रदेश के अराकू घाटी के पास स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी ऊँचाई लगभग 1,690 मीटर है।<br><br><i class='fa-solid fa-angles-right icon'></i> पहले महेंद्रगिरि को पूर्वी घाट की सबसे ऊँची चोटी माना जाता था, लेकिन नए सर्वेक्षणों ने जिंदगाडा की अधिक ऊँचाई की पुष्टि की है।"
      },
      {
        question: "'अलकनंदा नदी' का उद्गम स्थल कहाँ है?",
        answers: shuffle([
          { text: "गंगोत्री ग्लेशियर", correct: false },
          { text: "सतोपंथ ग्लेशियर", correct: true },
          { text: "यमुनोत्री ग्लेशियर", correct: false },
          { text: "पिंडारी ग्लेशियर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अलकनंदा नदी उत्तराखंड में सतोपंथ ग्लेशियर और भागीरथ खड़क ग्लेशियर के संगम से निकलती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उत्तराखंड के पंच प्रयागों का एक महत्वपूर्ण हिस्सा है और अंततः देवप्रयाग में भागीरथी नदी से मिलकर गंगा का निर्माण करती है।"
      },
      {
        question: "भारत में 'सर्वाधिक शहरी जनसंख्या' (Urban Population) वाला राज्य कौन-सा है (2011 जनगणना के अनुसार)?",
        answers: shuffle([
          { text: "उत्तर प्रदेश", correct: false },
          { text: "महाराष्ट्र", correct: true },
          { text: "तमिलनाडु", correct: false },
          { text: "पश्चिम बंगाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जनगणना 2011 के अनुसार, महाराष्ट्र में भारत की सर्वाधिक शहरी जनसंख्या है (संख्यात्मक रूप से)।<br><br><i class='fa-solid fa-angles-right icon'></i> मुंबई, पुणे, नागपुर जैसे बड़े महानगरों के कारण महाराष्ट्र में शहरीकरण का स्तर उच्च है।<br><br><i class='fa-solid fa-angles-right icon'></i> हालाँकि, प्रतिशत के हिसाब से गोवा सबसे अधिक शहरीकृत राज्य है।"
      },
      {
        question: "भारत में 'बंजर भूमि' (Barren Land) का सबसे बड़ा हिस्सा किस राज्य/केंद्र शासित प्रदेश में पाया जाता है?",
        answers: shuffle([
          { text: "राजस्थान", correct: false },
          { text: "गुजरात", correct: false },
          { text: "जम्मू और कश्मीर (अब लद्दाख और J&K UTs में)", correct: false },
          { text: "लद्दाख (UT)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में बंजर भूमि (Barren and Unculturable Waste Land) का सबसे बड़ा हिस्सा लद्दाख केंद्र शासित प्रदेश में पाया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> लद्दाख एक शीत मरुस्थल है जहाँ की कठोर जलवायु, उच्च ऊँचाई और विरल वनस्पति के कारण भूमि कृषि या अन्य उत्पादक गतिविधियों के लिए अनुपयुक्त है।"
      },
      {
        question: "'कोरोमंडल तट' भारत के किन राज्यों के तटों को कवर करता है?",
        answers: shuffle([
          { text: "केरल और कर्नाटक", correct: false },
          { text: "महाराष्ट्र और गोवा", correct: false },
          { text: "आंध्र प्रदेश और तमिलनाडु", correct: true },
          { text: "ओडिशा और पश्चिम बंगाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोरोमंडल तट (Coromandel Coast) भारत के पूर्वी तटीय मैदान का हिस्सा है, जो आंध्र प्रदेश के कृष्णा नदी डेल्टा से लेकर तमिलनाडु के कन्याकुमारी तक फैला हुआ है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह तट उत्तर-पूर्वी मॉनसून से शीत ऋतु में वर्षा प्राप्त करने के लिए जाना जाता है।"
      },
      {
        question: "भारत का 'सबसे गहरा भूमि से घिरा बंदरगाह' (Deepest Landlocked Port) कौन-सा है?",
        answers: shuffle([
          { text: "कोलकाता", correct: false },
          { text: "विशाखापत्तनम", correct: true },
          { text: "चेन्नई", correct: false },
          { text: "पारादीप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विशाखापत्तनम बंदरगाह आंध्र प्रदेश में स्थित है और इसे भारत का सबसे गहरा भूमि से घिरा बंदरगाह माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक प्राकृतिक बंदरगाह है जो पहाड़ी और चट्टानी तटरेखा से घिरा होने के कारण समुद्री तूफानों से सुरक्षित रहता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह लौह अयस्क के निर्यात के लिए भी एक प्रमुख बंदरगाह है।"
      },
      {
        question: "भारत में 'ग्रीष्मकालीन मॉनसून' (Summer Monsoon) की दिशा क्या होती है?",
        answers: shuffle([
          { text: "उत्तर-पूर्व से दक्षिण-पश्चिम", correct: false },
          { text: "दक्षिण-पश्चिम से उत्तर-पूर्व", correct: true },
          { text: "दक्षिण-पूर्व से उत्तर-पश्चिम", correct: false },
          { text: "उत्तर-पश्चिम से दक्षिण-पूर्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में ग्रीष्मकालीन मॉनसून (Summer Monsoon), जिसे दक्षिण-पश्चिमी मॉनसून भी कहा जाता है, की दिशा दक्षिण-पश्चिम से उत्तर-पूर्व की ओर होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये हवाएँ हिंद महासागर से नमी लेकर भारत में प्रवेश करती हैं और जून से सितंबर के दौरान अधिकांश वर्षा करती हैं।"
      },
      {
        question: "'पुष्कर झील' किस प्रकार की झील का उदाहरण है?",
        answers: shuffle([
          { text: "लैगून", correct: false },
          { text: "क्रेटर झील", correct: false },
          { text: "विवर्तनिक झील", correct: false },
          { text: "प्राकृतिक मीठे पानी की झील", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुष्कर झील (Pushkar Lake) राजस्थान में स्थित एक प्राकृतिक मीठे पानी की झील है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक पवित्र तीर्थ स्थल है और इसका निर्माण भूगर्भीय गतिविधियों या अवसादों के जमाव से हुआ है, न कि ज्वालामुखी क्रेटर या विवर्तनिक प्लेटों के खिसकने से।"
      },
      {
        question: "भारत में 'गोल्डन फाइबर क्रांति' (Golden Fibre Revolution) किससे संबंधित है?",
        answers: shuffle([
          { text: "कपास उत्पादन", correct: false },
          { text: "जूट उत्पादन", correct: true },
          { text: "ऊन उत्पादन", correct: false },
          { text: "रेशम उत्पादन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गोल्डन फाइबर क्रांति' (Golden Fibre Revolution) भारत में जूट उत्पादन को बढ़ावा देने से संबंधित है।<br><br><i class='fa-solid fa-angles-right icon'></i> जूट को उसके सुनहरे रंग और रेशों के कारण 'गोल्डन फाइबर' कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह क्रांति जूट किसानों की आय बढ़ाने और जूट उद्योग को पुनर्जीवित करने पर केंद्रित है।"
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
        question: "'काली मिट्टी' का निर्माण मुख्य रूप से किस प्रकार की चट्टानों से होता है?",
        answers: shuffle([
          { text: "ग्रेनाइट", correct: false },
          { text: "चूना पत्थर", correct: false },
          { text: "बेसाल्ट", correct: true },
          { text: "बलुआ पत्थर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली मिट्टी (Black Soil) का निर्माण मुख्य रूप से बेसाल्ट (Basalt) नामक आग्नेय चट्टानों के अपक्षय (weathering) से होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये चट्टानें दक्कन ट्रैप क्षेत्र में ज्वालामुखी विस्फोटों से निकली थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> बेसाल्टिक चट्टानों में लोहे और मैग्नीशियम की प्रचुरता होती है, जो काली मिट्टी के गुणों में योगदान करती है।"
      },
      {
        question: "'कुडनकुलम परमाणु ऊर्जा संयंत्र' भारत के किस राज्य में स्थित है?",
        answers: shuffle([
          { text: "महाराष्ट्र", correct: false },
          { text: "कर्नाटक", correct: false },
          { text: "तमिलनाडु", correct: true },
          { text: "आंध्र प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुडनकुलम परमाणु ऊर्जा संयंत्र (Kudankulam Nuclear Power Plant) तमिलनाडु राज्य के तिरुनेलवेली जिले में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत का सबसे बड़ा परमाणु ऊर्जा संयंत्र है जिसे रूस के सहयोग से विकसित किया गया है और यह देश की ऊर्जा आवश्यकताओं को पूरा करने में महत्वपूर्ण भूमिका निभाता है।"
      },
      {
        question: "भारत का 'सबसे ऊँचा पठार' कौन-सा है?",
        answers: shuffle([
          { text: "दक्कन का पठार", correct: false },
          { text: "छोटा नागपुर का पठार", correct: false },
          { text: "लद्दाख का पठार", correct: true },
          { text: "मालवा का पठार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लद्दाख का पठार भारत का सबसे ऊँचा पठार है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे 'शीत मरुस्थल' भी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह महान हिमालय और काराकोरम पर्वतमाला के बीच स्थित है और इसकी औसत ऊँचाई 3,000 मीटर से 6,000 मीटर के बीच है, जो इसे अत्यंत ठंडा और शुष्क वातावरण प्रदान करती है।"
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
      },
      {
        question: "भारत में 'एशियाई शेर' (Asiatic Lion) का एकमात्र प्राकृतिक आवास कौन-सा है?",
        answers: shuffle([
          { text: "रणथंभौर राष्ट्रीय उद्यान", correct: false },
          { text: "कान्हा राष्ट्रीय उद्यान", correct: false },
          { text: "गिर राष्ट्रीय उद्यान", correct: true },
          { text: "बांधवगढ़ राष्ट्रीय उद्यान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गिर राष्ट्रीय उद्यान और वन्यजीव अभयारण्य गुजरात राज्य में स्थित है और यह एशियाई शेर (Asiatic Lion) का दुनिया में एकमात्र प्राकृतिक आवास है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पार्क अपनी अनूठी पारिस्थितिकी और शुष्क पर्णपाती वनस्पति के लिए जाना जाता है।"
      },
      {
        question: "'सतलज नदी' पर स्थित 'भाखड़ा नांगल परियोजना' किन राज्यों का संयुक्त उद्यम है?",
        answers: shuffle([
          { text: "पंजाब, हरियाणा और राजस्थान", correct: true },
          { text: "हिमाचल प्रदेश, पंजाब और उत्तराखंड", correct: false },
          { text: "राजस्थान, मध्य प्रदेश और गुजरात", correct: false },
          { text: "पंजाब, हरियाणा और उत्तर प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भाखड़ा नांगल परियोजना (Bhakra Nangal Project) सतलज नदी पर स्थित एक विशाल बहुउद्देशीय परियोजना है, जो मुख्य रूप से पंजाब, हरियाणा और राजस्थान राज्यों का संयुक्त उद्यम है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह परियोजना सिंचाई, जलविद्युत उत्पादन और बाढ़ नियंत्रण के लाभ प्रदान करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> भाखड़ा बांध भारत का सबसे ऊँचा गुरुत्वाकर्षण बांध है।"
      },
      {
        question: "भारत में 'सर्वाधिक गेहूं' का उत्पादन किस राज्य में होता है?",
        answers: shuffle([
          { text: "पंजाब", correct: false },
          { text: "हरियाणा", correct: false },
          { text: "उत्तर प्रदेश", correct: true },
          { text: "मध्य प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर प्रदेश भारत में गेहूं का सबसे बड़ा उत्पादक राज्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> राज्य के उपजाऊ गंगा के मैदान, पर्याप्त सिंचाई सुविधाएँ और अनुकूल जलवायु परिस्थितियाँ गेहूं की खेती के लिए आदर्श हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, प्रति हेक्टेयर उपज के मामले में पंजाब और हरियाणा आगे हैं।"
      },
      {
        question: "भारत की 'सबसे बड़ी खारे पानी की लैगून' कौन-सी है?",
        answers: shuffle([
          { text: "पुलीकट झील", correct: false },
          { text: "चिल्का झील", correct: true },
          { text: "सांभर झील", correct: false },
          { text: "कोलेरू झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चिल्का झील (Chilika Lake) भारत की सबसे बड़ी खारे पानी की लैगून है, जो ओडिशा राज्य में बंगाल की खाड़ी के तट पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक महत्वपूर्ण रामसर साइट है और प्रवासी पक्षियों के लिए एक प्रमुख शीतकालीन मैदान है, जो इसे जैव विविधता के लिए महत्वपूर्ण बनाता है।"
      },
      {
        question: "'पीली क्रांति' (Yellow Revolution) किससे संबंधित है?",
        answers: shuffle([
          { text: "दालों का उत्पादन", correct: false },
          { text: "तिलहन उत्पादन", correct: true },
          { text: "फल उत्पादन", correct: false },
          { text: "अंडे का उत्पादन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पीली क्रांति' (Yellow Revolution) भारत में तिलहन (oilseeds) उत्पादन को बढ़ावा देने से संबंधित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका उद्देश्य खाद्य तेलों में आत्मनिर्भरता प्राप्त करना है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें सरसों, सूरजमुखी, सोयाबीन, मूंगफली आदि तिलहन फसलों के उत्पादन में वृद्धि पर जोर दिया गया था।"
      },
      {
        question: "भारत की 'सबसे पुरानी वलित पर्वत श्रृंखला' कौन-सी है?",
        answers: shuffle([
          { text: "हिमालय", correct: false },
          { text: "विंध्य", correct: false },
          { text: "सतपुड़ा", correct: false },
          { text: "अरावली", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरावली पर्वतमाला भारत की सबसे पुरानी वलित पर्वत श्रृंखला है, जो लगभग 670 मिलियन वर्ष पुरानी मानी जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अब एक अवशिष्ट पर्वतमाला के रूप में मौजूद है, जिसका अर्थ है कि यह लाखों वर्षों के कटाव के कारण अपने मूल वलित रूप का बहुत कम हिस्सा बची है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह गुजरात से दिल्ली तक फैली हुई है।"
      },
      {
        question: "भारत में 'कॉफी' का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
        answers: shuffle([
          { text: "केरल", correct: false },
          { text: "कर्नाटक", correct: true },
          { text: "तमिलनाडु", correct: false },
          { text: "आंध्र प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कर्नाटक भारत में कॉफी का सबसे बड़ा उत्पादक राज्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> राज्य के चिकमंगलूर, कुर्ग और हसन जैसे जिले अपनी कॉफी बागानों के लिए प्रसिद्ध हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत में मुख्य रूप से अरेबिका और रोबस्टा किस्म की कॉफी का उत्पादन होता है।"
      },
      {
        question: "'पूर्वी घाट' और 'पश्चिमी घाट' कहाँ मिलते हैं?",
        answers: shuffle([
          { text: "पालघाट दर्रा", correct: false },
          { text: "नीलगिरि पहाड़ियाँ", correct: true },
          { text: "अन्नामलाई पहाड़ियाँ", correct: false },
          { text: "महेंद्रगिरि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पूर्वी घाट और पश्चिमी घाट नीलगिरि पहाड़ियों (Nilgiri Hills) पर मिलते हैं, जो तमिलनाडु, केरल और कर्नाटक के त्रि-जंक्शन पर स्थित हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> नीलगिरि पहाड़ियाँ एक महत्वपूर्ण जैव विविधता हॉटस्पॉट हैं और दक्षिण भारत के कुछ प्रसिद्ध हिल स्टेशन (जैसे ऊटी) यहीं स्थित हैं।"
      },
      {
        question: "भारत में 'सर्वाधिक लौह अयस्क' किस राज्य में उत्पादित होता है?",
        answers: shuffle([
          { text: "झारखंड", correct: false },
          { text: "ओडिशा", correct: true },
          { text: "छत्तीसगढ़", correct: false },
          { text: "कर्नाटक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओडिशा भारत में लौह अयस्क का सबसे बड़ा उत्पादक राज्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> राज्य में सुंदरगढ़, मयूरभंज, क्योंझर जैसे प्रमुख लौह अयस्क बेल्ट स्थित हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत का लगभग आधा लौह अयस्क उत्पादन ओडिशा से होता है, जो देश के इस्पात उद्योग के लिए महत्वपूर्ण है।"
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