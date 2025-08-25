const questions = [
  {
      topHeading: "भारत के भूगोल पर आधारित 50 बहुविकल्पीय प्रश्न (MCQs) part 7  (quiz_no. 7)"
  },
    {
      question: "भारत में 'सर्वाधिक वनआच्छादन' (Forest Cover) वाला राज्य कौन-सा है?",
      answers: shuffle([
        { text: "अरुणाचल प्रदेश", correct: false },
        { text: "छत्तीसगढ़", correct: false },
        { text: "मध्यप्रदेश", correct: true },
        { text: "ओडिशा", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय वन सर्वेक्षण रिपोर्ट (India State of Forest Report) के अनुसार, मध्यप्रदेश में भारत का सर्वाधिक वनआच्छादन (क्षेत्रफल के अनुसार) है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह राज्य अपनी समृद्ध जैव विविधता और विभिन्न प्रकार के वनों के लिए जाना जाता है, जिनमें उष्णकटिबंधीय शुष्क पर्णपाती और नम पर्णपाती वन शामिल हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> हालाँकि, प्रतिशत के अनुसार मिजोरम में सर्वाधिक वनआच्छादन है।"
    },
    {
      question: "'दामोदर घाटी परियोजना' भारत की पहली बहुउद्देशीय नदी घाटी परियोजना है, यह किस नदी पर आधारित है?",
      answers: shuffle([
        { text: "महानदी", correct: false },
        { text: "गोदावरी", correct: false },
        { text: "दामोदर", correct: true },
        { text: "कृष्णा", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> दामोदर घाटी परियोजना (Damodar Valley Project - DVC) स्वतंत्र भारत की पहली बहुउद्देशीय नदी घाटी परियोजना है, जिसे 1948 में शुरू किया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह संयुक्त राज्य अमेरिका की टेनेसी घाटी प्राधिकरण (Tennessee Valley Authority - TVA) के मॉडल पर आधारित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह परियोजना दामोदर नदी और उसकी सहायक नदियों पर बांधों, बैराजों और नहरों का एक नेटवर्क है, जिसका उद्देश्य बाढ़ नियंत्रण, सिंचाई, विद्युत उत्पादन और नेविगेशन है।"
    },
    {
      question: "भारत के 'किस राज्य को 'स्पाइस गार्डन ऑफ इंडिया' (Spice Garden of India) कहा जाता है?",
      answers: shuffle([
        { text: "कर्नाटक", correct: false },
        { text: "केरल", correct: true },
        { text: "आंध्र प्रदेश", correct: false },
        { text: "तमिलनाडु", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> केरल को 'स्पाइस गार्डन ऑफ इंडिया' (भारत का मसालों का बगीचा) कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह राज्य काली मिर्च, इलायची, लौंग, दालचीनी, अदरक और हल्दी जैसे विभिन्न मसालों के उत्पादन के लिए विश्व प्रसिद्ध है।<br><br><i class='fa-solid fa-angles-right icon'></i> केरल का गर्म और आर्द्र जलवायु मसालों की खेती के लिए आदर्श है, और ऐतिहासिक रूप से यह मसालों के व्यापार का एक महत्वपूर्ण केंद्र रहा है।"
    },
    {
      question: "'कयाल' (Kayals) नाम के लैगून भारत के किस तट पर पाए जाते हैं?",
      answers: shuffle([
        { text: "कोंकण तट", correct: false },
        { text: "मालाबार तट", correct: true },
        { text: "कोरोमंडल तट", correct: false },
        { text: "उत्तरी सरकार तट", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> कयाल (Kayals) केरल के मालाबार तट पर पाए जाने वाले लैगून और बैकवाटर को संदर्भित करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये समुद्र से रेत की पट्टी द्वारा आंशिक रूप से अलग हुए खारे पानी के छिछले निकाय हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> वेम्बनाड कयाल और अष्टमुडी कयाल केरल के कुछ प्रसिद्ध कयाल हैं, जो परिवहन, मछली पकड़ने और पर्यटन (जैसे हाउसबोट) के लिए महत्वपूर्ण हैं।"
    },
    {
      question: "भारत में 'सर्वाधिक ग्रेफाइट' का भंडार किस राज्य में पाया जाता है?",
      answers: shuffle([
        { text: "ओडिशा", correct: false },
        { text: "झारखंड", correct: false },
        { text: "अरुणाचल प्रदेश", correct: true },
        { text: "केरल", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय भूवैज्ञानिक सर्वेक्षण (GSI) के अनुसार, अरुणाचल प्रदेश में भारत के ग्रेफाइट (Graphite) के सबसे बड़े भंडार हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ग्रेफाइट एक कार्बन खनिज है जिसका उपयोग पेंसिल, स्नेहक, बैटरी और परमाणु रिएक्टरों में मॉडरेटर के रूप में किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> हालाँकि, ओडिशा और झारखंड में भी कुछ मात्रा में ग्रेफाइट पाया जाता है।"
    },
    {
      question: "भारत की 'सबसे पुरानी पर्वत श्रृंखला' कौन-सी है?",
      answers: shuffle([
        { text: "हिमालय", correct: false },
        { text: "विंध्य", correct: false },
        { text: "सतपुड़ा", correct: false },
        { text: "अरावली", correct: true }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरावली पर्वतमाला भारत की सबसे पुरानी पर्वत श्रृंखला है, जो लगभग 670 मिलियन वर्ष पुरानी मानी जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक अवशिष्ट पर्वतमाला है, जिसका अर्थ है कि यह लाखों वर्षों के कटाव के कारण अपने मूल वलित रूप का बहुत कम हिस्सा बची है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह गुजरात से दिल्ली तक फैली हुई है।"
    },
    {
      question: "जनगणना 2011 के अनुसार, भारत का 'सबसे कम जनसंख्या घनत्व' वाला राज्य कौन-सा है?",
      answers: shuffle([
        { text: "सिक्किम", correct: false },
        { text: "मिजोरम", correct: false },
        { text: "अरुणाचल प्रदेश", correct: true },
        { text: "नागालैंड", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> जनगणना 2011 के अनुसार, अरुणाचल प्रदेश भारत का सबसे कम जनसंख्या घनत्व वाला राज्य है, जहाँ प्रति वर्ग किलोमीटर में केवल 17 व्यक्ति निवास करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका मुख्य कारण इसकी पहाड़ी और दुर्गम स्थलाकृति, घने जंगल और कठोर जलवायु परिस्थितियाँ हैं, जो मानव बस्तियों के लिए चुनौतीपूर्ण हैं।"
    },
    {
      question: "'काली क्रांति' (Black Revolution) किससे संबंधित है?",
      answers: shuffle([
        { text: "तिलहन उत्पादन", correct: false },
        { text: "पेट्रोलियम उत्पादन", correct: true },
        { text: "कोयला उत्पादन", correct: false },
        { text: "मत्स्य उत्पादन", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'काली क्रांति' (Black Revolution) भारत में पेट्रोलियम उत्पादन को बढ़ावा देने से संबंधित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका उद्देश्य इथेनॉल उत्पादन को बढ़ावा देना और इसे पेट्रोल में मिलाकर जैव ईंधन के उपयोग को बढ़ाना है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ऊर्जा सुरक्षा सुनिश्चित करने और जीवाश्म ईंधन पर निर्भरता कम करने की दिशा में एक कदम है।"
    },
    {
      question: "भारत में 'सर्वाधिक सिंचाई' किस विधि से होती है?",
      answers: shuffle([
        { text: "नहरें", correct: false },
        { text: "कुएँ और नलकूप", correct: true },
        { text: "तालाब", correct: false },
        { text: "ड्रिप सिंचाई", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में सिंचाई का सबसे प्रमुख स्रोत कुएँ और नलकूप (Wells and Tube Wells) हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> उत्तर प्रदेश, पंजाब, हरियाणा, राजस्थान और गुजरात जैसे राज्यों में भूजल का उपयोग करके बड़े पैमाने पर सिंचाई की जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> नहरें सिंचाई का दूसरा सबसे महत्वपूर्ण स्रोत हैं, विशेषकर उत्तर भारत के विशाल मैदानों में।"
    },
    {
      question: "भारत का कौन-सा राज्य 'ज्वार' (Jowar) का सबसे बड़ा उत्पादक है?",
      answers: shuffle([
        { text: "उत्तर प्रदेश", correct: false },
        { text: "मध्य प्रदेश", correct: false },
        { text: "महाराष्ट्र", correct: true },
        { text: "राजस्थान", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाराष्ट्र भारत में ज्वार (Sorghum/Jowar) का सबसे बड़ा उत्पादक राज्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> ज्वार एक प्रमुख खरीफ फसल है और यह मुख्य रूप से अर्ध-शुष्क क्षेत्रों में उगाई जाती है जहाँ कम वर्षा होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पशुधन चारे के रूप में और मानव उपभोग के लिए भी महत्वपूर्ण है।"
    },
    {
      question: "'गिर राष्ट्रीय उद्यान' किस जानवर के संरक्षण के लिए प्रसिद्ध है?",
      answers: shuffle([
        { text: "एक सींग वाला गैंडा", correct: false },
        { text: "बंगाल टाइगर", correct: false },
        { text: "एशियाई शेर", correct: true },
        { text: "हाथी", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> गिर राष्ट्रीय उद्यान और वन्यजीव अभयारण्य गुजरात राज्य में स्थित है और यह एशियाई शेर (Asiatic Lion) का दुनिया में एकमात्र प्राकृतिक आवास है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पार्क अपनी अनूठी पारिस्थितिकी और शुष्क पर्णपाती वनस्पति के लिए जाना जाता है।"
    },
    {
      question: "भारत में 'सर्वाधिक तांबा' का उत्पादन किस राज्य में होता है?",
      answers: shuffle([
        { text: "झारखंड", correct: false },
        { text: "राजस्थान", correct: false },
        { text: "मध्य प्रदेश", correct: true },
        { text: "छत्तीसगढ़", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य प्रदेश भारत में तांबे का सबसे बड़ा उत्पादक राज्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> राज्य में बालाघाट जिले का मलांजखंड (Malanjkhand) क्षेत्र भारत का सबसे बड़ा तांबा अयस्क भंडार है।<br><br><i class='fa-solid fa-angles-right icon'></i> राजस्थान में खेतड़ी बेल्ट और झारखंड में सिंहभूम भी महत्वपूर्ण तांबा उत्पादक क्षेत्र हैं, लेकिन उत्पादन के मामले में मध्य प्रदेश अग्रणी है।"
    },
    {
      question: "भारत की 'नर्मदा नदी' का उद्गम स्थल कौन-सा है?",
      answers: shuffle([
        { text: "महाबलेश्वर", correct: false },
        { text: "त्र्यंबकेश्वर", correct: false },
        { text: "अमरकंटक पठार", correct: true },
        { text: "ब्रह्मगिरी पहाड़ियाँ", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> नर्मदा नदी मध्य प्रदेश में अमरकंटक पठार (Maikal Range) से निकलती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उन कुछ प्रमुख प्रायद्वीपीय नदियों में से एक है जो पूर्व से पश्चिम की ओर बहती है और गुजरात में भरूच के पास अरब सागर में खंभात की खाड़ी में गिरती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक भ्रंश घाटी (Rift Valley) से होकर बहती है।"
    },
    {
      question: "भारत का 'सबसे ऊँचा झरना' (Waterfall) 'कुंचिकल फॉल्स' किस राज्य में स्थित है?",
      answers: shuffle([
        { text: "केरल", correct: false },
        { text: "तमिलनाडु", correct: false },
        { text: "कर्नाटक", correct: true },
        { text: "आंध्र प्रदेश", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुंचिकल फॉल्स भारत का सबसे ऊँचा झरना है, जो कर्नाटक के शिमोगा जिले में वराही नदी पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी कुल ऊँचाई लगभग 455 मीटर है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक बहु-स्तरीय झरना है।"
    },
    {
      question: "भारत में 'लेटेराइट मिट्टी' का मुख्य उपयोग क्या है?",
      answers: shuffle([
        { text: "चावल और गेहूं की खेती", correct: false },
        { text: "कपास की खेती", correct: false },
        { text: "ईंटों का निर्माण और बागान फसलें", correct: true },
        { text: "दालों की खेती", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> लेटेराइट मिट्टी का उपयोग मुख्य रूप से ईंटों के निर्माण के लिए किया जाता है क्योंकि सूखने पर यह बहुत कठोर हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके अलावा, यह चाय, कॉफी, काजू और टैपिओका जैसी बागान फसलों के लिए भी उपयुक्त होती है, खासकर उन क्षेत्रों में जहाँ भारी वर्षा और उच्च तापमान होता है।"
    },
    {
      question: "'सिमलीपाल बायोस्फीयर रिजर्व' किस राज्य में स्थित है?",
      answers: shuffle([
        { text: "ओडिशा", correct: true },
        { text: "पश्चिम बंगाल", correct: false },
        { text: "झारखंड", correct: false },
        { text: "छत्तीसगढ़", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिमलीपाल बायोस्फीयर रिजर्व (Similipal Biosphere Reserve) ओडिशा राज्य के मयूरभंज जिले में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक राष्ट्रीय उद्यान, टाइगर रिजर्व और एक प्रमुख बायोस्फीयर रिजर्व है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अपनी समृद्ध जैव विविधता, बाघों, हाथियों और पौधों की विविध प्रजातियों के लिए जाना जाता है।"
    },
    {
      question: "भारत में 'सर्वाधिक चावल' का उत्पादन किस राज्य में होता है?",
      answers: shuffle([
        { text: "पंजाब", correct: false },
        { text: "उत्तर प्रदेश", correct: false },
        { text: "पश्चिम बंगाल", correct: true },
        { text: "आंध्र प्रदेश", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> पश्चिम बंगाल भारत का सबसे बड़ा चावल उत्पादक राज्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> गंगा-ब्रह्मपुत्र डेल्टा क्षेत्र की उपजाऊ जलोढ़ मिट्टी, पर्याप्त वर्षा और सिंचाई की सुविधाएँ चावल की खेती के लिए आदर्श परिस्थितियाँ प्रदान करती हैं।"
    },
    {
      question: "'जवाहर सुरंग' किस दर्रे में स्थित है?",
      answers: shuffle([
        { text: "बनिहाल दर्रा", correct: true },
        { text: "जोजिला दर्रा", correct: false },
        { text: "पीरपंजाल दर्रा", correct: false },
        { text: "बुर्जिल दर्रा", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> जवाहर सुरंग (Jawahar Tunnel) जम्मू और कश्मीर में बनिहाल दर्रे (Banihal Pass) में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह श्रीनगर और जम्मू को जोड़ने वाले राष्ट्रीय राजमार्ग 44 (NH 44) पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह सुरंग पीरपंजाल पर्वत श्रृंखला से होकर गुजरती है और पूरे साल कनेक्टिविटी बनाए रखने में मदद करती है, खासकर सर्दियों में जब भारी बर्फबारी के कारण दर्रा बंद हो जाता है।"
    },
    {
      question: "भारत में 'सर्वाधिक शहरी जनसंख्या' (Urban Population) वाला राज्य कौन-सा है?",
      answers: shuffle([
        { text: "उत्तर प्रदेश", correct: false },
        { text: "महाराष्ट्र", correct: true },
        { text: "तमिलनाडु", correct: false },
        { text: "पश्चिम बंगाल", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> जनगणना 2011 के अनुसार, महाराष्ट्र में भारत की सर्वाधिक शहरी जनसंख्या है (संख्यात्मक रूप से)।<br><br><i class='fa-solid fa-angles-right icon'></i> मुंबई, पुणे, नागपुर जैसे बड़े महानगरों के कारण महाराष्ट्र में शहरीकरण का स्तर उच्च है।<br><br><i class='fa-solid fa-angles-right icon'></i> हालाँकि, प्रतिशत के हिसाब से गोवा सबसे अधिक शहरीकृत राज्य है।"
    },
    {
      question: "भारत का 'सबसे बड़ा नदी द्वीप' कौन-सा है?",
      answers: shuffle([
        { text: "सागर द्वीप", correct: false },
        { text: "श्रीरंगम द्वीप", correct: false },
        { text: "माजुली द्वीप", correct: true },
        { text: "दीव द्वीप", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> माजुली द्वीप (Majuli Island) भारत का सबसे बड़ा नदी द्वीप है, जो असम में ब्रह्मपुत्र नदी पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह विश्व के सबसे बड़े नदी द्वीपों में से एक है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अपनी अनूठी संस्कृति और वैष्णव मठों (सत्रों) के लिए प्रसिद्ध है।"
    },
    {
        question: "भारत में 'चाय बागान' के लिए कौन-सी मिट्टी सबसे उपयुक्त है?",
        answers: shuffle([
          { text: "काली मिट्टी", correct: false },
          { text: "जलोढ़ मिट्टी", correct: false },
          { text: "लेटेराइट मिट्टी", correct: true },
          { text: "पर्वतीय मिट्टी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चाय बागान के लिए लेटेराइट मिट्टी सबसे उपयुक्त मानी जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मिट्टी अम्लीय प्रकृति की होती है और इसमें ह्यूमस तथा नाइट्रोजन की कमी होती है, लेकिन लोहे और एल्यूमीनियम ऑक्साइड की प्रचुरता होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पश्चिमी घाट, पूर्वी घाट, उत्तर-पूर्वी भारत और तमिलनाडु के पहाड़ी क्षेत्रों में पाई जाती है, जहाँ भारी वर्षा और उच्च तापमान होता है।"
      },
      {
        question: "भारत के किस राज्य में 'मुदुमलाई राष्ट्रीय उद्यान' स्थित है?",
        answers: shuffle([
          { text: "कर्नाटक", correct: false },
          { text: "केरल", correct: false },
          { text: "तमिलनाडु", correct: true },
          { text: "आंध्र प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुदुमलाई राष्ट्रीय उद्यान (Mudumalai National Park) तमिलनाडु राज्य में नीलगिरि पहाड़ियों के उत्तर-पश्चिमी किनारे पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक महत्वपूर्ण वन्यजीव अभयारण्य और टाइगर रिजर्व है, जो बाघों, हाथियों, तेंदुओं और विभिन्न पक्षी प्रजातियों के लिए जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह नीलगिरि बायोस्फीयर रिजर्व का हिस्सा है।"
      },
      {
        question: "भारत में 'मानसून के पीछे हटने' (Retreating Monsoon) का समय क्या होता है?",
        answers: shuffle([
          { text: "अप्रैल-मई", correct: false },
          { text: "जून-सितंबर", correct: false },
          { text: "अक्टूबर-दिसंबर", correct: true },
          { text: "जनवरी-फरवरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में 'मॉनसून के पीछे हटने' या 'उत्तर-पूर्वी मॉनसून' (North-East Monsoon) का समय अक्टूबर से दिसंबर के महीनों के बीच होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस दौरान, दक्षिण-पश्चिमी मॉनसून पवनें कमजोर होकर पीछे हटती हैं और बंगाल की खाड़ी से नमी लेकर तमिलनाडु के कोरोमंडल तट पर वर्षा करती हैं।"
      },
      {
        question: "भारत की 'इंदिरा गांधी नहर' किन नदियों के संगम से जल प्राप्त करती है?",
        answers: shuffle([
          { text: "गंगा और यमुना", correct: false },
          { text: "सतलज और ब्यास", correct: true },
          { text: "सिंधु और झेलम", correct: false },
          { text: "रावी और चिनाब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंदिरा गांधी नहर सतलज और ब्यास नदियों के संगम पर बने हरिके बैराज (Harike Barrage) से जल प्राप्त करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह नहर मुख्य रूप से राजस्थान के पश्चिमी जिलों में सिंचाई प्रदान करती है, जिससे थार मरुस्थल के कुछ हिस्सों में कृषि संभव हुई है।"
      },
      {
        question: "भारत में 'भूतापीय ऊर्जा' (Geothermal Energy) के लिए 'मणिकरण' नामक प्रसिद्ध स्थल किस राज्य में स्थित है?",
        answers: shuffle([
          { text: "जम्मू और कश्मीर", correct: false },
          { text: "उत्तराखंड", correct: false },
          { text: "हिमाचल प्रदेश", correct: true },
          { text: "अरुणाचल प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मणिकरण (Manikaran) हिमाचल प्रदेश के कुल्लू जिले में स्थित एक प्रसिद्ध स्थल है, जो अपने गर्म पानी के झरनों और भूतापीय ऊर्जा क्षमता के लिए जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ गुरुद्वारा और मंदिर भी हैं जो इसे एक तीर्थ स्थल बनाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह स्थल ऊर्जा उत्पादन और चिकित्सीय उद्देश्यों के लिए भूतापीय ऊर्जा के उपयोग की संभावना रखता है।"
      },
      {
        question: "भारत में 'सर्वाधिक यूरेनियम' का उत्पादन किस राज्य में होता है?",
        answers: shuffle([
          { text: "झारखंड", correct: true },
          { text: "आंध्र प्रदेश", correct: false },
          { text: "मेघालय", correct: false },
          { text: "तेलंगाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> झारखंड भारत में यूरेनियम का सबसे बड़ा उत्पादक राज्य है, और जादूगोड़ा (Jadugora) यहाँ की सबसे प्रसिद्ध यूरेनियम खदान है।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत के पास यूरेनियम के सीमित भंडार हैं, जो परमाणु ऊर्जा कार्यक्रमों के लिए महत्वपूर्ण हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> आंध्र प्रदेश और मेघालय में भी यूरेनियम के भंडार पाए गए हैं, लेकिन उत्पादन में झारखंड अग्रणी है।"
      },
      {
        question: "भारत का 'सबसे लंबा समुद्री तट' (Beach) कौन-सा है?",
        answers: shuffle([
          { text: "जुहू बीच (मुंबई)", correct: false },
          { text: "कोवलम बीच (केरल)", correct: false },
          { text: "मरीना बीच (चेन्नई)", correct: true },
          { text: "राधानगर बीच (अंडमान)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मरीना बीच (Marina Beach) चेन्नई, तमिलनाडु में स्थित है और यह भारत का सबसे लंबा प्राकृतिक शहरी समुद्र तट है, जिसकी लंबाई लगभग 13 किलोमीटर है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बंगाल की खाड़ी के किनारे फैला हुआ है और चेन्नई शहर के लिए एक महत्वपूर्ण मनोरंजक स्थल है।"
      },
      {
        question: "'लोह अयस्क बेल्ट' 'दुर्ग-बस्तर-चंद्रपुर' किस राज्य में स्थित है?",
        answers: shuffle([
          { text: "ओडिशा", correct: false },
          { text: "झारखंड", correct: false },
          { text: "छत्तीसगढ़", correct: true },
          { text: "कर्नाटक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दुर्ग-बस्तर-चंद्रपुर लौह अयस्क बेल्ट मुख्य रूप से छत्तीसगढ़ राज्य में स्थित है, और इसका विस्तार कुछ हद तक महाराष्ट्र तक भी है।<br><br><i class='fa-solid fa-angles-right icon'></i> छत्तीसगढ़ में बैलाडीला और दल्ली-राजहरा जैसे महत्वपूर्ण लौह अयस्क खनन क्षेत्र इसी बेल्ट का हिस्सा हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ हेमेटाइट किस्म का उच्च श्रेणी का लौह अयस्क पाया जाता है।"
      },
      {
        question: "भारत की 'पूर्वी तटीय मैदान' को किस नाम से नहीं जाना जाता है?",
        answers: shuffle([
          { text: "उत्कल तट", correct: false },
          { text: "कोरोमंडल तट", correct: false },
          { text: "उत्तरी सरकार तट", correct: false },
          { text: "कोंकण तट", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोंकण तट भारत के पश्चिमी तटीय मैदान का हिस्सा है, जो महाराष्ट्र और गोवा राज्यों में फैला हुआ है।<br><br><i class='fa-solid fa-angles-right icon'></i> उत्कल तट (ओडिशा), कोरोमंडल तट (तमिलनाडु और आंध्र प्रदेश का दक्षिणी भाग), और उत्तरी सरकार तट (आंध्र प्रदेश और ओडिशा का उत्तरी भाग) सभी भारत के पूर्वी तटीय मैदान के हिस्से हैं।"
      },
      {
        question: "भारत में 'सर्वाधिक जनसंख्या वृद्धि दर' (Population Growth Rate) किस दशक में दर्ज की गई थी?",
        answers: shuffle([
          { text: "1951-1961", correct: false },
          { text: "1961-1971", correct: true },
          { text: "1971-1981", correct: false },
          { text: "1981-1991", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में सर्वाधिक जनसंख्या वृद्धि दर 1961-1971 के दशक में (24.8%) दर्ज की गई थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इस अवधि को 'जनसंख्या विस्फोट' का दशक भी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> मृत्यु दर में तेजी से गिरावट (बेहतर स्वास्थ्य सेवाओं के कारण) और जन्म दर का उच्च बने रहना इस उच्च वृद्धि दर के प्रमुख कारण थे।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके बाद, जनसंख्या वृद्धि दर में धीरे-धीरे कमी आनी शुरू हुई है।"
      },
      {
        question: "भारत के किस राज्य में 'पुष्कर झील' स्थित है?",
        answers: shuffle([
          { text: "मध्य प्रदेश", correct: false },
          { text: "उत्तर प्रदेश", correct: false },
          { text: "राजस्थान", correct: true },
          { text: "गुजरात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुष्कर झील (Pushkar Lake) राजस्थान राज्य के अजमेर जिले में स्थित एक पवित्र झील है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक प्राकृतिक झील है जिसे हिंदुओं द्वारा एक पवित्र तीर्थ स्थल माना जाता है, और यहीं पर प्रसिद्ध पुष्कर मेला आयोजित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह झील अरावली पहाड़ियों से घिरी हुई है।"
      },
      {
        question: "'भारत का मैनचेस्टर' किस शहर को कहा जाता है?",
        answers: shuffle([
          { text: "मुंबई", correct: false },
          { text: "अहमदाबाद", correct: true },
          { text: "कोयंबटूर", correct: false },
          { text: "कानपुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अहमदाबाद को 'भारत का मैनचेस्टर' कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> मैनचेस्टर यूनाइटेड किंगडम का एक प्रसिद्ध शहर है जो अपने कपास वस्त्र उद्योग के लिए जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अहमदाबाद भी भारत में कपास वस्त्र उद्योग का एक प्रमुख केंद्र है, जहाँ बड़ी संख्या में कपड़ा मिलें स्थित हैं, जिससे इसे यह उपाधि मिली है।<br><br><i class='fa-solid fa-angles-right icon'></i> कोयंबटूर को 'दक्षिण भारत का मैनचेस्टर' कहा जाता है।"
      },
      {
        question: "भारत में 'सर्वाधिक काली मिर्च' का उत्पादन किस राज्य में होता है?",
        answers: shuffle([
          { text: "कर्नाटक", correct: false },
          { text: "केरल", correct: true },
          { text: "तमिलनाडु", correct: false },
          { text: "आंध्र प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केरल भारत में काली मिर्च (Black Pepper) का सबसे बड़ा उत्पादक राज्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> केरल की गर्म और आर्द्र जलवायु, विशेष रूप से पश्चिमी घाट की ढलानों पर, काली मिर्च की खेती के लिए बहुत अनुकूल है।<br><br><i class='fa-solid fa-angles-right icon'></i> काली मिर्च केरल की अर्थव्यवस्था में एक महत्वपूर्ण भूमिका निभाती है और 'मसालों के बगीचे' के रूप में इसकी पहचान में योगदान करती है।"
      },
      {
        question: "भारत की 'सतलज नदी' भारत में किस दर्रे से प्रवेश करती है?",
        answers: shuffle([
          { text: "शिपकीला दर्रा", correct: true },
          { text: "जोजिला दर्रा", correct: false },
          { text: "नाथुला दर्रा", correct: false },
          { text: "लिपुलेख दर्रा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सतलज नदी भारत में हिमाचल प्रदेश के किन्नौर जिले में शिपकीला दर्रे (Shipki La Pass) से प्रवेश करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह नदी तिब्बत में राक्षसताल झील से निकलती है और सिंधु नदी प्रणाली का एक महत्वपूर्ण हिस्सा है।<br><br><i class='fa-solid fa-angles-right icon'></i> शिपकीला दर्रा भारत और तिब्बत के बीच एक महत्वपूर्ण सीमा व्यापार बिंदु भी है।"
      },
      {
        question: "भारत में 'सर्वाधिक बॉक्साइट' का उत्पादन किस राज्य में होता है?",
        answers: shuffle([
          { text: "गुजरात", correct: false },
          { text: "ओडिशा", correct: true },
          { text: "झारखंड", correct: false },
          { text: "छत्तीसगढ़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओडिशा भारत में बॉक्साइट का सबसे बड़ा उत्पादक राज्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> बॉक्साइट एल्यूमीनियम का मुख्य अयस्क है।<br><br><i class='fa-solid fa-angles-right icon'></i> ओडिशा के कोरापुट, कालाहांडी, सुंदरगढ़ और संबलपुर जैसे जिलों में बॉक्साइट के विशाल भंडार पाए जाते हैं, जो भारत के एल्यूमीनियम उद्योग को बढ़ावा देते हैं।"
      },
      {
        question: "'अंडमान और निकोबार द्वीप समूह' की सबसे ऊँची चोटी कौन-सी है?",
        answers: shuffle([
          { text: "माउंट डियावोलो", correct: false },
          { text: "माउंट कोयोब", correct: false },
          { text: "सैडल पीक", correct: true },
          { text: "माउंट थुइलर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सैडल पीक (Saddle Peak) अंडमान और निकोबार द्वीप समूह की सबसे ऊँची चोटी है, जो उत्तरी अंडमान द्वीप पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी ऊँचाई लगभग 732 मीटर है।<br><br><i class='fa-solid fa-angles-right icon'></i> सैडल पीक राष्ट्रीय उद्यान भी इसी क्षेत्र में स्थित है, जो इस द्वीप समूह की अद्वितीय जैव विविधता का संरक्षण करता है।"
      },
      {
        question: "भारत में 'रबर' का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
        answers: shuffle([
          { text: "कर्नाटक", correct: false },
          { text: "केरल", correct: true },
          { text: "तमिलनाडु", correct: false },
          { text: "असम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केरल भारत में प्राकृतिक रबर का सबसे बड़ा उत्पादक राज्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> राज्य की उष्णकटिबंधीय आर्द्र जलवायु और लेटेराइट मिट्टी रबर के पेड़ों की खेती के लिए आदर्श परिस्थितियाँ प्रदान करती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> केरल का रबर उद्योग भारत की अर्थव्यवस्था में महत्वपूर्ण भूमिका निभाता है।"
      },
      {
        question: "भारत के किस राज्य को 'धान का कटोरा' (Rice Bowl of India) कहा जाता है?",
        answers: shuffle([
          { text: "पश्चिम बंगाल", correct: false },
          { text: "उत्तर प्रदेश", correct: false },
          { text: "आंध्र प्रदेश", correct: false },
          { text: "छत्तीसगढ़", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> छत्तीसगढ़ को 'धान का कटोरा' कहा जाता है, विशेष रूप से छत्तीसगढ़ बेसिन क्षेत्र को।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ चावल की खेती बड़े पैमाने पर की जाती है और यह राज्य के प्रमुख कृषि उत्पादों में से एक है।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, पश्चिम बंगाल चावल का सबसे बड़ा उत्पादक राज्य है, जबकि आंध्र प्रदेश को गोदावरी-कृष्णा डेल्टा क्षेत्र के कारण 'दक्षिण भारत का धान का कटोरा' कहा जाता है।"
      },
      {
        question: "भारत में 'जलोढ़ मिट्टी' का निर्माण मुख्य रूप से किस प्रक्रिया से होता है?",
        answers: shuffle([
          { text: "ज्वालामुखी गतिविधि", correct: false },
          { text: "नदियों द्वारा निक्षेपण", correct: true },
          { text: "अपक्षय और निक्षालन", correct: false },
          { text: "हिमनदीय क्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जलोढ़ मिट्टी (Alluvial Soil) का निर्माण मुख्य रूप से नदियों द्वारा लाए गए अवसादों (गाद, रेत, बजरी) के निक्षेपण (Deposition) से होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये मिट्टी सिंधु, गंगा और ब्रह्मपुत्र जैसी बड़ी नदियों और उनकी सहायक नदियों के मैदानों में पाई जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत में सबसे व्यापक और उपजाऊ मिट्टी है, जो देश की अधिकांश कृषि गतिविधियों का आधार है।"
      },
      {
        question: "'माउसिंराम' और 'चेरापूंजी' में अत्यधिक वर्षा का कारण क्या है?",
        answers: shuffle([
          { text: "चक्रवातीय वर्षा", correct: false },
          { text: "संवहनीय वर्षा", correct: false },
          { text: "पर्वतीय वर्षा", correct: true },
          { text: "सामने की वर्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउसिंराम (Mawsynram) और चेरापूंजी (Cherrapunji) में अत्यधिक वर्षा का मुख्य कारण पर्वतीय वर्षा (Orographic Rainfall) है।<br><br><i class='fa-solid fa-angles-right icon'></i> बंगाल की खाड़ी से आने वाली दक्षिण-पश्चिमी मॉनसूनी पवनें नमी से लदी हुई होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जब ये पवनें खासी पहाड़ियों (जिसकी कीप जैसी आकृति है) से टकराती हैं, तो उन्हें ऊपर उठना पड़ता है, जिससे हवा ठंडी होती है, संघनित होती है और भारी वर्षा होती है।"
      },
      {
        question: "भारत में 'कालाहारी मरुस्थल' जैसा वातावरण किस क्षेत्र में पाया जाता है?",
        answers: shuffle([
            { text: "पश्चिमी घाट", correct: false },
            { text: "थार मरुस्थल", correct: false },
            { text: "लद्दाख का शीत मरुस्थल", correct: true },
            { text: "छोटानागपुर पठार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लद्दाख का पठार एक शीत मरुस्थल (Cold Desert) है। यह उच्च ऊंचाई पर स्थित है और हिमालय के वृष्टि-छाया क्षेत्र में होने के कारण बहुत कम वर्षा प्राप्त करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी जलवायु ध्रुवीय मरुस्थल के समान है, जिसमें अत्यधिक ठंडी और शुष्क परिस्थितियाँ होती हैं, जो अफ्रीका के उष्णकटिबंधीय कालाहारी मरुस्थल से भिन्न होते हुए भी एक मरुस्थलीय वातावरण का उदाहरण है।"
    },
    {
        question: "'दामोदर नदी' को 'बंगाल का शोक' क्यों कहा जाता था?",
        answers: shuffle([
            { text: "इसके प्रदूषित जल के कारण", correct: false },
            { text: "इसकी सहायक नदियों की कमी के कारण", correct: false },
            { text: "इसमें आने वाली विनाशकारी बाढ़ों के कारण", correct: true },
            { text: "इसके मार्ग बदलने के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दामोदर नदी को पहले 'बंगाल का शोक' (Sorrow of Bengal) कहा जाता था, क्योंकि इसमें मॉनसून के दौरान अक्सर विनाशकारी बाढ़ें आती थीं, जिससे जान-माल का भारी नुकसान होता था।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, दामोदर घाटी परियोजना (DVC) के निर्माण के बाद इन बाढ़ों को काफी हद तक नियंत्रित किया गया है।"
    },
    {
        question: "भारत में 'सर्वाधिक जनसंख्या' वाला राज्य कौन-सा है?",
        answers: shuffle([
            { text: "महाराष्ट्र", correct: false },
            { text: "बिहार", correct: false },
            { text: "पश्चिम बंगाल", correct: false },
            { text: "उत्तर प्रदेश", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जनगणना 2011 के अनुसार, उत्तर प्रदेश भारत का सबसे अधिक जनसंख्या वाला राज्य है, जिसकी जनसंख्या लगभग 19.98 करोड़ थी।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत की कुल जनसंख्या का लगभग 16.5% है। उत्तर प्रदेश की विशाल जनसंख्या इसे देश का सबसे बड़ा उपभोक्ता बाजार और एक महत्वपूर्ण श्रमबल का स्रोत बनाती है।"
    },
    {
        question: "'सरदार सरोवर बांध' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "तापी", correct: false },
            { text: "महानदी", correct: false },
            { text: "कृष्णा", correct: false },
            { text: "नर्मदा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सरदार सरोवर बांध (Sardar Sarovar Dam) गुजरात में नर्मदा नदी पर स्थित एक विशाल गुरुत्वाकर्षण बांध है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह नर्मदा घाटी परियोजना का एक महत्वपूर्ण हिस्सा है और गुजरात, मध्य प्रदेश, महाराष्ट्र और राजस्थान को सिंचाई और जलविद्युत के लाभ प्रदान करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बांध 'नर्मदा बचाओ आंदोलन' का भी केंद्र रहा है।"
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
        question: "'पीरपंजाल' पर्वत श्रृंखला किस हिमालय का हिस्सा है?",
        answers: shuffle([
            { text: "ट्रांस हिमालय", correct: false },
            { text: "महान हिमालय", correct: false },
            { text: "लघु हिमालय", correct: true },
            { text: "शिवालिक हिमालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीरपंजाल पर्वत श्रृंखला (Pir Panjal Range) लघु हिमालय (Lesser Himalayas) का सबसे बड़ा और सबसे महत्वपूर्ण पर्वत श्रृंखला है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह जम्मू और कश्मीर तथा हिमाचल प्रदेश में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> पीरपंजाल रेलवे सुरंग भारत की सबसे लंबी रेलवे सुरंगों में से एक है, जो इसी श्रेणी में स्थित है।"
    },
    {
        question: "भारत में 'सर्वाधिक पवन ऊर्जा' का उत्पादन किस राज्य में होता है?",
        answers: shuffle([
            { text: "गुजरात", correct: false },
            { text: "महाराष्ट्र", correct: false },
            { text: "तमिलनाडु", correct: true },
            { text: "कर्नाटक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तमिलनाडु भारत में पवन ऊर्जा का सबसे बड़ा उत्पादक राज्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> राज्य की लंबी तटरेखा, लगातार और तेज हवाएँ, और अनुकूल भौगोलिक परिस्थितियाँ पवन ऊर्जा उत्पादन के लिए आदर्श हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> मुप्पंडल पवन ऊर्जा परियोजना तमिलनाडु में स्थित सबसे बड़ी पवन ऊर्जा परियोजनाओं में से एक है।"
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
        question: "भारत में 'जनसंख्या लाभांश' (Demographic Dividend) की स्थिति को कौन-सा आयु वर्ग दर्शाता है?",
        answers: shuffle([
            { text: "0-14 वर्ष", correct: false },
            { text: "15-59 वर्ष", correct: true },
            { text: "60 वर्ष और उससे अधिक", correct: false },
            { text: "0-5 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जनसंख्या लाभांश (Demographic Dividend) तब होता है जब कार्यशील आयु वर्ग (Working Age Population) की जनसंख्या (आमतौर पर 15-59 वर्ष) का अनुपात कुल जनसंख्या में गैर-कार्यशील आयु वर्ग (बच्चों और वृद्धों) की तुलना में अधिक होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह स्थिति आर्थिक विकास के लिए एक अवसर प्रस्तुत करती है यदि इस बड़ी कार्यशील जनसंख्या को उत्पादक रूप से नियोजित किया जा सके।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत वर्तमान में इस जनसांख्यिकीय लाभांश के चरण में है।"
    },
    {
        question: "'झूम कृषि' (Shifting Cultivation) भारत के किस क्षेत्र में प्रमुख रूप से प्रचलित है?",
        answers: shuffle([
            { text: "गंगा के मैदान", correct: false },
            { text: "दक्कन का पठार", correct: false },
            { text: "पूर्वोत्तर भारत", correct: true },
            { text: "थार मरुस्थल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> झूम कृषि (Shifting Cultivation) या स्थानांतरित कृषि, भारत के पूर्वोत्तर राज्यों (जैसे असम, मेघालय, मिजोरम, नागालैंड) और कुछ आदिवासी क्षेत्रों में प्रमुख रूप से प्रचलित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें वनों के एक छोटे से हिस्से को काटकर जलाया जाता है और कुछ वर्षों तक खेती की जाती है, फिर मिट्टी की उर्वरता कम होने पर दूसरे स्थान पर चले जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे 'काटो और जलाओ' (slash and burn) कृषि भी कहा जाता है।"
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