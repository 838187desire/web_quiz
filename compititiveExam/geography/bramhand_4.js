const questions = [ 
  {
      topHeading: " ब्रह्मांड पर आधारित 50 बहुविकल्पीय प्रश्न (MCQs) part 4  (quiz_no. 44)."
  },
    {
      question: "‘डार्क मैटर’ क्या है और इसका ब्रह्मांडमें क्या महत्व है?",
      answers: shuffle([
        { text: "प्रकाशउत्सर्जित करनेवालीवस्तु", correct: false },
        { text: "एकप्रकारकीऐसीअदृश्यपदार्थजोगुरुत्वाकर्षण प्रभावपैदाकरतीहैलेकिनप्रकाशकोअवशोषित याप्रतिबिंबित नहींकरती", correct: true },
        { text: "सूर्यकाएकहिस्सा", correct: false },
        { text: "गैसोंकासमूह", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> डार्कमैटरब्रह्मांड काएकरहस्यमय घटकहैजोनतोप्रकाशउत्सर्जित करताहैऔरनहीउसेअवशोषित याप्रतिबिंबित करताहै,इसलिएसीधेदेखानहींजासकता।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकाअस्तित्व केवलगुरुत्वाकर्षण प्रभावों सेपताचलताहै,जैसेकिगैलेक्सियों कीगतिऔरब्रह्मांड कीसंरचनामें।<br><br><i class='fa-solid fa-angles-right icon'></i> डार्कमैटरब्रह्मांड कीकुलऊर्जासामग्री कालगभग 27% हिस्साहैऔरयहब्रह्मांड केगठनऔरविकासमेंमहत्वपूर्ण भूमिकानिभाताहै।"
    },
    {
      question: "‘डार्क एनर्जी’क्या है और ब्रह्मांड के विस्तार में इसका क्या प्रभाव है?",
      answers: shuffle([
        { text: "प्रकाशकीऊर्जा", correct: false },
        { text: "ब्रह्मांड केविस्तार कोतेजकरनेवालीरहस्यमय ऊर्जा", correct: true },
        { text: "सूर्यकीऊर्जा", correct: false },
        { text: "ग्रहोंकेबीचऊर्जा", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> डार्कएनर्जीब्रह्मांड कीएकऐसीअज्ञातऊर्जाहैजोब्रह्मांड केविस्तार कोगतिदेतीहै।<br><br><i class='fa-solid fa-angles-right icon'></i> यहब्रह्मांड केलगभग 68% ऊर्जासामग्री बनातीहै।<br><br><i class='fa-solid fa-angles-right icon'></i> वैज्ञानिकों केअनुसार,डार्कएनर्जीकेकारणब्रह्मांड काविस्तार स्थिरनहींबल्कितेजीसेबढ़रहाहै,जिसकाप्रमाणसुपरनोवा केअध्ययनसेमिलताहै।"
    },
    {
      question: "‘बिग बैंग’ सिद्धांतके अनुसार ब्रह्मांड की शुरुआत कब और कैसे हुई?",
      answers: shuffle([
        { text: "अनंतकालसेब्रह्मांड स्थिरहै", correct: false },
        { text: "लगभग 13.8 अरबवर्षपहलेएकअत्यंतघनेऔरगर्मअवस्थासेहुआअत्यधिक विस्फोट", correct: true },
        { text: "सूर्यकेनिर्माण केसाथ", correct: false },
        { text: "पृथ्वीकेबननेकेसमय", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिगबैंगसिद्धांत कहताहैकिब्रह्मांड कीशुरुआतएकअत्यंतसघन,गर्मऔरछोटेबिंदु (सिंगुलैरिटी) सेहुई।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकेबादब्रह्मांड नेतीव्रता सेविस्तार कियाऔरठंडाहोकरतारों,ग्रहोंऔरअन्यखगोलीयपिंडोंकानिर्माण हुआ।"
    },
    {
      question: "‘गैलेक्सी’क्या होती है?",
      answers: shuffle([
        { text: "छोटेग्रहोंकासमूह", correct: false },
        { text: "तारों,गैसों,धूलऔरडार्कमैटरकाविशालसमूहजोब्रह्मांड कीएकइकाईहोतीहै", correct: true },
        { text: "एकप्रकारकातारा", correct: false },
        { text: "उपग्रह", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> गैलेक्सियाँ ब्रह्मांड कीमुख्यइकाइयां हैं,जिनमेंअरबोंतारे,गैसकेबादल,धूलकेकणऔरडार्कमैटरमौजूदहोतेहैं।<br><br><i class='fa-solid fa-angles-right icon'></i> येविभिन्न आकारऔरआकारकेहोतेहैंजैसेकिअंडाकार, स्पाइरल औरअनियमित।"
    },
    {
      question: "‘हबल का नियम’ क्या बताता है?",
      answers: shuffle([
        { text: "ब्रह्मांड स्थिरहै", correct: false },
        { text: "गैलेक्सियाँ एक-दूसरे से दूरजारहीहैंऔरजितनीदूरहोतीहैंउनकीगतिउतनीअधिकहोतीहै", correct: true },
        { text: "ग्रहसूर्यकेचारोंओरघूमतेहैं", correct: false },
        { text: "प्रकाशकीगतिबढ़रहीहै", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> हबलकानियमबताताहैकिब्रह्मांड मेंगैलेक्सियाँ आपससेदूरजारहीहैं।<br><br><i class='fa-solid fa-angles-right icon'></i> उनकेरेडशिफ्ट मापनसेपताचलताहैकिवहगैलेक्सियाँ जितनीदूरहोतीहैं,उनकीदूरीबढ़नेकीगतिभीउतनीहीअधिकहोतीहै,जिससेब्रह्मांड केविस्तार काप्रमाणमिलताहै।"
    },
    {
      question: "‘ब्लैक होल’ के इवेंट होराइजनका क्या महत्व है?",
      answers: shuffle([
        { text: "यहब्लैकहोलकीसतहहैजहाँसेप्रकाशभीबाहरनहींनिकलपाता", correct: true },
        { text: "ब्लैकहोलकाकेंद्र", correct: false },
        { text: "एकतारा", correct: false },
        { text: "प्रकाशकास्रोत", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> इवेंटहोराइजन वहसीमाहैजोब्लैकहोलकोघेरतीहै।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकेभीतरगिरनेवालीकोईभीवस्तुयाप्रकाशब्लैकहोलसेबाहरनहींनिकलपाती,इसलिएइसेब्लैकहोलकी ‘अदृश्यसीमा’कहाजाताहै।"
    },
    {
      question: "‘सुपरनोवाटाइप Ia’ का महत्व ब्रह्मांड के अध्ययन में क्या है?",
      answers: shuffle([
        { text: "यहतारेकाजन्महै", correct: false },
        { text: "यहएकमानकमोमबत्ती कीतरहकामकरताहैजिससेब्रह्मांड कीदूरीमापीजातीहै", correct: true },
        { text: "ग्रहोंकीखोजकरताहै", correct: false },
        { text: "सूर्यकाप्रकारहै", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुपरनोवा टाइप Ia काविस्फोट लगभगसमानचमककाहोताहै,जिससेइन्हें ‘मानकमोमबत्ती’ कहाजाताहै।<br><br><i class='fa-solid fa-angles-right icon'></i> इनविस्फोटों कीचमकमापकरवैज्ञानिक ब्रह्मांड मेंदूर-दराज की वस्तुओं कीदूरीऔरब्रह्मांड केविस्तार कीदरकाअध्ययनकरपातेहैं।"
    },
    {
      question: "‘ग्रैविटेशनलवेव्स’ क्या हैं?",
      answers: shuffle([
        { text: "प्रकाशकीतरंगें", correct: false },
        { text: "ब्रह्मांडीय क्षेत्र मेंगुरुत्वाकर्षण केकारणउत्पन्न तरंगेंजोस्थान-काल में विकृतिउत्पन्न करतीहैं", correct: true },
        { text: "सूरजसेनिकलीऊर्जा", correct: false },
        { text: "रेडियोतरंगें", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रैविटेशनल वेव्ससमयऔरस्थानकेढांचेमेंउत्पन्न तरंगेंहोतीहैं,जोदोबड़ेपिंडोंकेगतिशीलप्रभावसेपैदाहोतीहैं,जैसेदोब्लैकहोलकाटकराव।<br><br><i class='fa-solid fa-angles-right icon'></i> इन्हेंपहलीबार 2015 मेंडिटेक्ट कियागयाथा,जिसनेसामान्य सापेक्षता केसिद्धांत कोपुष्टकिया।"
    },
    {
      question: "‘कॉस्मिकमाइक्रोवेव बैकग्राउंड रेडिएशन’ (CMB) क्या है?",
      answers: shuffle([
        { text: "ब्रह्मांडीय सूक्ष्मतरंग पृष्ठभूमि विकिरण,जोबिगबैंगकेबादबचाहुआगर्मविकिरणहै", correct: true },
        { text: "सूर्यकाविकिरण", correct: false },
        { text: "ग्रहोंकातापमान", correct: false },
        { text: "चंद्रमा सेनिकलाविकिरण", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> CMB वहअवशिष्ट विकिरणहैजोब्रह्मांड केप्रारंभिक गर्मऔरघनेअवस्थाकेबादबचाहै।<br><br><i class='fa-solid fa-angles-right icon'></i> इसेपूरेब्रह्मांड मेंसमानरूपसेपायाजाताहैऔरयहबिगबैंगसिद्धांत काएकमजबूतप्रमाणहै।"
    },
    {
      question: "‘अल्बर्टआइंस्टीन का कॉस्मोलॉजिकल कांस्टेंट’ क्या है?",
      answers: shuffle([
        { text: "ब्रह्मांड केविस्तार कोरोकनेकेलिएएककाल्पनिक बल", correct: true },
        { text: "सूरजकीऊर्जाकास्रोत", correct: false },
        { text: "ग्रहोंकेबीचदूरी", correct: false },
        { text: "एकप्रकारकातारा", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> आइंस्टीन नेअपनेसामान्य सापेक्षता सिद्धांत मेंब्रह्मांड कोस्थिरबनाएरखनेकेलिएकॉस्मोलॉजिकल कांस्टेंट जोड़ीथी,जोएकप्रकारकीविकर्षण शक्तिथी।<br><br><i class='fa-solid fa-angles-right icon'></i> बादमेंब्रह्मांड केविस्तार कापताचलनेपरइसेउनकेसबसेबड़े \"गलतअनुमान\"केरूपमेंजानागया।"
    },
    {
      question: "‘ग्रहीयनेबुला’ (Planetary Nebula) क्या होता है?",
      answers: shuffle([
        { text: "नवजाततारेकासमूह", correct: false },
        { text: "एकप्रकारकागैसकाबादलजोएकमध्यमआकारकेतारेकीमृतअवस्थामेंबनताहै", correct: true },
        { text: "ब्लैकहोलकाकेंद्र", correct: false },
        { text: "ग्रहोंकासमूह", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> जबमध्यमआकारकेतारेजैसेसूर्यअपनेजीवनकेअंतमेंहोतेहैं,तोवेअपनीबाहरीपरतोंकोछोड़देतेहैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यहछोड़गईगैसेंएकचमकीलेबादलकारूपलेतीहैं,जिसेग्रहीयनेबुलाकहतेहैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यहतारेकेकोरकेसिकुड़ने केकारणचमकतीहैऔरअंततःन्यूट्रॉन स्टारयाव्हाइटड्वार्फ बनताहै।"
    },
    {
      question: "‘वायुमंडलीयविकृति’ ब्रह्मांड के अवलोकन में कैसे बाधा डालती है?",
      answers: shuffle([
        { text: "प्रकाशकीगतिबढ़ाकर", correct: false },
        { text: "वायुमंडल मेंगैसऔरकणप्रकाशकोमोड़करऔरफैलाकरखगोलीयवस्तुओं कीछविधुंधलीकरदेताहै", correct: true },
        { text: "ग्रहोंकोहिलाकर", correct: false },
        { text: "कोईप्रभावनहींडालती", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वीकावायुमंडल विभिन्न गैसोंऔरकणोंसेबनाहोताहैजोखगोलीयप्रकाशकेमार्गमेंआनेपरउसेविकृतकरदेतेहैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इससेदूरकेतारेयागैलेक्सियाँ अस्पष्ट याकमस्पष्टदिखाईदेतीहैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिएस्पेसटेलीस्कोप काविकासहुआजोवायुमंडल सेऊपरहोताहै।"
    },
    {
      question: "‘क्वांटमफ्लक्टुएशंस’ का ब्रह्मांड की उत्पत्ति में क्या महत्व है?",
      answers: shuffle([
        { text: "यहसूर्यकीऊर्जाहै", correct: false },
        { text: "प्रारंभिक ब्रह्मांड मेंसूक्ष्म स्तरपरऊर्जाकाअस्थिरवितरणजोब्रह्मांड केविस्तार औरसंरचनाकीनींवरखताहै", correct: true },
        { text: "ग्रहोंकानिर्माण", correct: false },
        { text: "कोईमहत्वनहीं", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिगबैंगकेतुरंतबाद,ब्रह्मांड मेंक्वांटम स्तरपरऊर्जामेंअस्थिरता हुई।<br><br><i class='fa-solid fa-angles-right icon'></i> येअस्थिरताएँ बादमेंपदार्थकेघनेक्षेत्रों काविकासकरनेमेंसहायकबनीं,जिससेतारे,गैलेक्सियाँ औरअन्यसंरचनाएं बनीं।"
    },
    {
      question: "‘रेडशिफ्ट’का अर्थ क्या है?",
      answers: shuffle([
        { text: "प्रकाशकानीलाहोना", correct: false },
        { text: "प्रकाशकीतरंगदैर्घ्य मेंवृद्धि,जिससेवस्तुदूरजारहीहोतीहैयहपताचलताहै", correct: true },
        { text: "ग्रहोंकीचमकबढ़ना", correct: false },
        { text: "कोईसंबंधनहीं", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेडशिफ्ट तबहोताहैजबकिसीआकाशीयवस्तुसेनिकलनेवालाप्रकाशलंबीतरंगदैर्घ्य कीओरखिसकजाताहै।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकामतलबहैकिवहवस्तुहमसेदूरजारहीहै।<br><br><i class='fa-solid fa-angles-right icon'></i> यहब्रह्मांड केविस्तार काप्रमाणहै।"
    },
    {
      question: "‘ग्रेविटेशनललेंसिंग’ क्या है?",
      answers: shuffle([
        { text: "एकप्रकारकादूरबीन", correct: false },
        { text: "जबगुरुत्वाकर्षण किसीदूरकीवस्तुकेप्रकाशकोमोड़देताहै,जिससेवस्तुबड़ीयाविकृतदिखाईदेतीहै", correct: true },
        { text: "ग्रहोंकीगति", correct: false },
        { text: "कोईसंबंधनहीं", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुत्वाकर्षण किसीविशालपिंड (जैसेगैलेक्सी क्लस्टर) केआस-पास से गुजररहेप्रकाशकोमोड़देताहै।<br><br><i class='fa-solid fa-angles-right icon'></i> इससेदूरकीवस्तुओं कीछविबड़ी,विकृतयाकईगुनादिखाईदेसकतीहै।<br><br><i class='fa-solid fa-angles-right icon'></i> यहब्रह्मांड कीसंरचनाअध्ययनमेंउपयोगीतकनीकहै।"
    },
    {
      question: "‘क्रोमोस्फियर’क्या है?",
      answers: shuffle([
        { text: "सूर्यकीसतह", correct: false },
        { text: "सूर्यकावहहिस्साजोफोटोस्फियर केऊपरऔरकोरोनाकेनीचेहोताहै,औरलालरंगकाहोताहै", correct: true },
        { text: "एकतारा", correct: false },
        { text: "ग्रहोंकासमूह", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रोमोस्फियर सूर्यकाएकऊपरीस्तरहै,जोसूरजकेफोटोस्फियर (सूरजकीसतह)केऊपरहोताहै।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकारंगलालिमालिएहोताहैऔरसूर्यकेविस्फोट यासौरधब्बेइससेसंबंधित होतेहैं।"
    },
    {
      question: "‘पल्सर’ क्या है?",
      answers: shuffle([
        { text: "एकताराजोनियमितअंतरालपररेडियोतरंगेंऔरअन्यविकिरणउत्सर्जित करताहै", correct: true },
        { text: "एकग्रह", correct: false },
        { text: "ब्लैकहोल", correct: false },
        { text: "उपग्रह", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> पल्सरन्यूट्रॉन स्टारहोतेहैंजोतीव्रगतिसेघूमतेहैंऔरउनकेचुंबकीय ध्रुवों सेरेडियोविकिरणनियमितअंतरालपरउत्सर्जित होताहै।<br><br><i class='fa-solid fa-angles-right icon'></i> इन्हेंब्रह्मांड केप्राकृतिक घड़ीकेरूपमेंभीदेखाजाताहै।"
    },
    {
      question: "‘क्वासर’के बारे में सही कथन चुनिए।",
      answers: shuffle([
        { text: "क्वांसर ग्रहहैं", correct: false },
        { text: "क्वासर अत्यंतचमकीलेऔरदूरस्थआकाशीयस्रोतहैंजोसक्रियगैलेक्सियों केकेंद्रमेंहोतेहैं", correct: true },
        { text: "क्वांसर चंद्रमा केउपग्रहहैं", correct: false },
        { text: "कोईसहीनहीं", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्वासर बहुतदूरस्थितसक्रियगैलेक्सियों केकेंद्रहोतेहैं,जोअसाधारण ऊर्जाउत्सर्जित करतेहैं।<br><br><i class='fa-solid fa-angles-right icon'></i> येब्रह्मांड केशुरुआती इतिहासकाअध्ययनकरनेमेंमददगारहैं।"
    },
    {
      question: "‘रेड शिफ्ट’ और ‘ब्लू शिफ्ट’ में क्या अंतर है?",
      answers: shuffle([
        { text: "रेडशिफ्टवस्तुकेदूरजानेऔरब्लूशिफ्टउसकेपासआनेकासंकेतदेताहै", correct: true },
        { text: "दोनोंएकजैसेहैं", correct: false },
        { text: "रेडशिफ्टग्रहोंकीगतिहै", correct: false },
        { text: "ब्लूशिफ्टप्रकाशकीकमीहै", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेडशिफ्टतबहोताहैजबकोईवस्तुहमसेदूरजारहीहोतीहैऔरउसकीतरंगदैर्घ्य लंबीहोतीहै।<br><br><i class='fa-solid fa-angles-right icon'></i> ब्लूशिफ्टतबहोताहैजबकोईवस्तुहमसेकरीबआरहीहोतीहैऔरउसकीतरंगदैर्घ्य छोटीहोतीहै।"
    },
    {
      question: "‘सौर प्रणाली’में सूर्य के बाद सबसे बड़ा ग्रह कौन सा है?",
      answers: shuffle([
        { text: "पृथ्वी", correct: false },
        { text: "वृहस्पति (जुपिटर)", correct: true },
        { text: "मंगल", correct: false },
        { text: "शनि", correct: false }
      ]),
      Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौरप्रणाली कासबसेबड़ाग्रहवृहस्पति है,जोगैसदानवकेरूपमेंजानाजाताहै।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकाव्यासलगभग 11 गुनापृथ्वीकेबराबरहैऔरयहसौरप्रणाली मेंसबसेअधिकद्रव्यमान वालाग्रहहै।"
    },
    {
        question: "‘सुपरमैसिव ब्लैक होल’ क्या होता है?",
        answers: shuffle([
          { text: "सामान्य ब्लैकहोल", correct: false },
          {
            text: "एक अत्यंत विशाल ब्लैक होल जो गैलेक्सियों के केंद्र में पाया जाता है और अरबों सूर्य के द्रव्यमान के बराबर होता है",
            correct: true,
          },
          { text: "एक तारा", correct: false },
          { text: "गैस का बादल", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> सुपरमैसिव ब्लैक होल गैलेक्सियों के केंद्र में स्थित होते हैं और इनके द्रव्यमान अरबों सूर्यों के बराबर हो सकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये गैलेक्सियों के विकास और उनकी आंतरिक गतिशीलता में महत्वपूर्ण भूमिका निभाते हैं।",
      },
      {
        question: "‘इन्फ्लेशन थ्योरी’ ब्रह्मांड के विकास में किस घटना का वर्णन करती है?",
        answers: shuffle([
          { text: "ब्रह्मांड का ठहराव", correct: false },
          {
            text: "बिग बैंग के तुरंत बाद ब्रह्मांड का एक अत्यंत त्वरित और तीव्र विस्तार",
            correct: true,
          },
          { text: "तारों का जन्म", correct: false },
          { text: "ब्लैक होल का निर्माण", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> इन्फ्लेशन थ्योरी के अनुसार, बिग बैंग के कुछ सेकंड बाद ब्रह्मांड ने असाधारण तेजी से विस्तार किया, जिससे इसके आयाम एकदम से बहुत बड़े हो गए।<br><br><i class='fa-solid fa-angles-right icon'></i> इस विस्तार ने ब्रह्मांड को समान और समतल बनाते हुए आज के स्वरूप में विकसित होने की नींव रखी।",
      },
      {
        question: "‘सौर वायु’ (Solar Wind) क्या है?",
        answers: shuffle([
          { text: "पृथ्वी पर चलने वाली हवा", correct: false },
          {
            text: "सूर्य से निकलने वाली आवेशित कणों की धारा जो पूरे सौरमंडल में फैलती है",
            correct: true,
          },
          { text: "ग्रहों के बीच की गैस", correct: false },
          { text: "सूर्य की आंतरिक गति", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> सौर वायु मुख्य रूप से इलेक्ट्रॉन और प्रोटॉन के रूप में आवेशित कणों की एक तेज गति वाली धारा है, जो सूर्य की बाहरी सतह से निकलकर पूरे सौरमंडल में फैलती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पृथ्वी के चुंबकीय क्षेत्र के साथ इंटरैक्ट करके ऑरोरा जैसी घटनाएं उत्पन्न करती है।",
      },
      {
        question: "‘गैलेक्सी क्लस्टर’ क्या होता है?",
        answers: shuffle([
          { text: "एक ग्रहों का समूह", correct: false },
          {
            text: "गैलेक्सियों का विशाल समूह जो गुरुत्वाकर्षण से जुड़ा होता है",
            correct: true,
          },
          { text: "तारों का समूह", correct: false },
          { text: "ब्लैक होल का समूह", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> गैलेक्सी क्लस्टर में हजारों से लेकर लाखों तक गैलेक्सियाँ होती हैं जो एक दूसरे के गुरुत्वाकर्षण बल से बंधी होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये ब्रह्मांड की संरचना का एक बड़ा पैमाना हैं और ब्रह्मांड के विकास का अध्ययन करने में सहायक होते हैं।",
      },
      {
        question: "‘लाइट ईयर’ क्या मापता है?",
        answers: shuffle([
          { text: "समय", correct: false },
          { text: "प्रकाश की गति", correct: false },
          { text: "प्रकाश द्वारा एक वर्ष में तय की गई दूरी", correct: true },
          { text: "ग्रहों की दूरी", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> लाइट ईयर दूरी की इकाई है जो उस दूरी को मापती है जिसे प्रकाश एक वर्ष में तय करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह लगभग 9.46 ट्रिलियन किलोमीटर के बराबर होती है और खगोलीय दूरी मापन के लिए उपयोगी है।",
      },
      {
        question: "‘स्पेस टेलीस्कोप’ की आवश्यकता क्यों होती है?",
        answers: shuffle([
          { text: "ग्रहों की खोज के लिए", correct: false },
          {
            text: "पृथ्वी के वायुमंडल की विकृतियों से बचने के लिए, जिससे खगोलीय वस्तुओं की स्पष्ट तस्वीर मिलती है",
            correct: true,
          },
          { text: "सूर्य का अध्ययन करने के लिए", correct: false },
          { text: "पृथ्वी की हवा मापने के लिए", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी का वायुमंडल प्रकाश की किरणों को विकृत करता है, जिससे दूर की वस्तुओं की छवि धुंधली हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> स्पेस टेलीस्कोप वायुमंडल के ऊपर होता है, इसलिए यह बिना विकृति के साफ और स्पष्ट छवियाँ प्राप्त कर सकता है।",
      },
      {
        question: "‘रेड जाइंट’ तारा क्या होता है?",
        answers: shuffle([
          { text: "नवजात तारा", correct: false },
          {
            text: "जीवन के अंतिम चरण में पहुंचा हुआ विशाल और लाल रंग का तारा",
            correct: true,
          },
          { text: "ब्लैक होल", correct: false },
          { text: "तारा नहीं", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> जब तारे के अंदर हाइड्रोजन ईंधन समाप्त होने लगता है, तो वह अपने आकार में बढ़ जाता है और लाल रंग का हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे रेड जाइंट कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये तारे अंततः सुपरनोवा या व्हाइट ड्वार्फ बन सकते हैं।",
      },
      {
        question: "‘हीलियम संलयन’ (Helium Fusion) ब्रह्मांड में कहाँ होता है?",
        answers: shuffle([
          { text: "ग्रहों में", correct: false },
          {
            text: "तारों के केंद्र में जब हाइड्रोजन का संलयन खत्म हो जाता है",
            correct: true,
          },
          { text: "ब्लैक होल में", correct: false },
          { text: "पृथ्वी पर", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> जब तारे के केंद्र में हाइड्रोजन खत्म हो जाता है, तो तापमान इतना बढ़ जाता है कि हीलियम परमाणु संलयन प्रक्रिया शुरू हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रक्रिया ऊर्जा उत्पन्न करती है और तारे को स्थिर बनाए रखती है।",
      },
      {
        question: "‘न्यूट्रॉन स्टार’ क्या है?",
        answers: shuffle([
          { text: "एक तारा जो लगातार चमकता रहता है", correct: false },
          {
            text: "एक अत्यंत संकुचित तारा जिसमें न्यूट्रॉन भारी मात्रा में होते हैं, और जिसका घनत्व बहुत अधिक होता है",
            correct: true,
          },
          { text: "ब्लैक होल का दूसरा नाम", correct: false },
          { text: "ग्रह", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> न्यूट्रॉन स्टार तब बनता है जब सुपरनोवा विस्फोट के बाद तारा सिकुड़कर न्यूट्रॉनों से भरा अत्यंत घना पिंड बन जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका व्यास केवल कुछ किलोमीटर होता है, पर इसका द्रव्यमान सूर्य के बराबर या उससे अधिक होता है।",
      },
      {
        question: "‘कौन से तत्व सबसे पहले ब्रह्मांड में बने थे?’",
        answers: shuffle([
          { text: "भारी तत्व जैसे लोहा और सोना", correct: false },
          { text: "प्राथमिक तत्व जैसे हाइड्रोजन और हीलियम", correct: true },
          { text: "कार्बन और ऑक्सीजन", correct: false },
          { text: "कोई तत्व नहीं", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> बिग बैंग के तुरंत बाद ब्रह्मांड में मुख्य रूप से हाइड्रोजन (लगभग 75%) और हीलियम (लगभग 25%) तत्व बने।<br><br><i class='fa-solid fa-angles-right icon'></i> ये सबसे सरल और हल्के तत्व हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> भारी तत्व तारों के अंदर न्यूक्लियर फ्यूजन की प्रक्रिया से बाद में बने।",
      },
      {
        question: "ब्रह्मांड में ‘डार्क मैटर’ क्या है?",
        answers: shuffle([
          { text: "वह पदार्थ जो प्रकाश को अवशोषित करता है", correct: false },
          {
            text: "वह अदृश्य पदार्थ जो ब्रह्मांड के कुल द्रव्यमान का लगभग 27% हिस्सा है और गुरुत्वाकर्षणीय प्रभाव दिखाता है, लेकिन सीधे देखा नहीं जा सकता",
            correct: true,
          },
          { text: "गैस का बादल", correct: false },
          { text: "सूर्य का बाहरी भाग", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> डार्क मैटर वह रहस्यमय पदार्थ है जो प्रकाश नहीं छोड़ता या अवशोषित नहीं करता, इसलिए इसे सीधे देखा नहीं जा सकता।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका अस्तित्व गुरुत्वाकर्षणीय प्रभावों से पता चलता है, जैसे कि गैलेक्सियों के गति और संरचना में।",
      },
      {
        question: "‘बिग बैंग’ सिद्धांत का मुख्य आधार क्या है?",
        answers: shuffle([
          { text: "ब्रह्मांड हमेशा से स्थिर था", correct: false },
          {
            text: "ब्रह्मांड एक अत्यंत घने और गर्म बिंदु से लगभग 13.8 अरब वर्ष पहले फैला और विकसित हुआ",
            correct: true,
          },
          { text: "ब्रह्मांड सदा छोटा रहेगा", correct: false },
          { text: "ब्रह्मांड किसी ग्रह से बना है", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> बिग बैंग सिद्धांत कहता है कि ब्रह्मांड की शुरुआत एक बेहद घने और गर्म अवस्था से हुई, जिसे ‘सिंगुलैरिटी’ कहा जाता है, और इसके बाद यह फैलने लगा।<br><br><i class='fa-solid fa-angles-right icon'></i> इस सिद्धांत का समर्थन रेडशिफ्ट, कॉस्मिक माइक्रोवेव बैकग्राउंड विकिरण और ब्रह्मांड में प्राथमिक तत्वों के अनुपात से होता है।",
      },
      {
        question: "‘कास्मिक माइक्रोवेव बैकग्राउंड रेडिएशन’ (CMBR) क्या है?",
        answers: shuffle([
          { text: "सूर्य से आने वाली ऊर्जा", correct: false },
          {
            text: "ब्रह्मांड की प्रारंभिक अवस्था से बची हुई मृदु, समान तापीय विकिरण जो हर दिशा में समान रूप से फैली हुई है",
            correct: true,
          },
          { text: "ग्रहों से निकली ऊर्जा", correct: false },
          { text: "ब्लैक होल की ऊर्जा", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> CMBR को ब्रह्मांड की ‘प्रारंभिक गर्म अवस्था’ से बचा हुआ अवशेष माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह लगभग 2.7 केल्विन तापमान का विकिरण है जो पूरी ब्रह्मांड में लगभग समान रूप से पाया जाता है, और बिग बैंग के सिद्धांत का सबसे महत्वपूर्ण प्रमाण है।",
      },
      {
        question: "‘ब्लैक होल’ का घटना क्षितिज (Event Horizon) क्या होता है?",
        answers: shuffle([
          {
            text: "ब्लैक होल का बाहरी भाग जिसे पार करने पर प्रकाश भी वापस नहीं आ सकता",
            correct: true,
          },
          { text: "ब्लैक होल के अंदर का कोर", correct: false },
          { text: "ब्लैक होल के चारों ओर गैस का बादल", correct: false },
          { text: "कोई सतह नहीं होती", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> घटना क्षितिज वह सीमा है जिसके अंदर से कोई भी वस्तु, यहाँ तक कि प्रकाश भी, ब्लैक होल से बाहर नहीं आ सकता।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे ब्लैक होल की ‘पहुंच’ माना जाता है, इसके भीतर गुरुत्वाकर्षण इतना प्रबल होता है कि कोई भी चीज़ बच नहीं सकती।",
      },
      {
        question: "‘स्पेस टाइम’ (Space-Time) का क्या अर्थ है?",
        answers: shuffle([
          { text: "केवल ब्रह्मांड की जगह", correct: false },
          {
            text: "स्थान और समय का एक साथ संयुक्त आयाम, जिसे आइंस्टीन की सापेक्षता के सिद्धांत ने प्रतिपादित किया",
            correct: true,
          },
          { text: "समय का प्रवाह", correct: false },
          { text: "कोई वस्तु नहीं", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> स्पेसटाइम का अर्थ है कि ब्रह्मांड में स्थान और समय अलग-अलग नहीं हैं, बल्कि एक संयुक्त 4-आयामी संरचना है।<br><br><i class='fa-solid fa-angles-right icon'></i> गुरुत्वाकर्षण इस स्पेसटाइम के वक्रण से उत्पन्न होता है, जैसा आइंस्टीन ने सामान्य सापेक्षता सिद्धांत में बताया।",
      },
      {
        question: "‘किसी तारे का जीवनकाल क्या निर्धारित करता है?’",
        answers: shuffle([
          { text: "तारे की दूरी", correct: false },
          {
            text: "तारे के द्रव्यमान द्वारा, अधिक द्रव्यमान वाले तारे कम समय में जल जाते हैं जबकि कम द्रव्यमान वाले अधिक समय तक टिकते हैं",
            correct: true,
          },
          { text: "तारे का रंग", correct: false },
          { text: "सूर्य की रोशनी", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> तारे के जीवनकाल को उसके द्रव्यमान द्वारा नियंत्रित किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> भारी तारे अत्यंत ऊर्जा खर्च करते हैं और जल्दी खत्म हो जाते हैं, जबकि हल्के तारे जैसे हमारा सूर्य अपेक्षाकृत लंबा जीवनकाल रखते हैं।",
      },
      {
        question: "‘रेड जाइंट’ के बाद तारे का अगला चरण क्या हो सकता है?",
        answers: shuffle([
          {
            text: "न्यूट्रॉन स्टार, व्हाइट ड्वार्फ या सुपरनोवा के रूप में फटना (यदि पर्याप्त द्रव्यमान हो)",
            correct: true,
          },
          { text: "ग्रह", correct: false },
          { text: "ब्लैक होल सीधे बनना", correct: false },
          { text: "कोई परिवर्तन नहीं", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> रेड जाइंट तारे के जीवन के अंतिम चरण में होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उसके बाद यदि तारा कम द्रव्यमान वाला है तो वह व्हाइट ड्वार्फ बन सकता है; अगर द्रव्यमान ज्यादा है तो सुपरनोवा विस्फोट होगा और न्यूट्रॉन स्टार या ब्लैक होल बन सकता है।",
      },
      {
        question: "‘किसी तारे की चमक (Luminosity)’ क्या होती है?",
        answers: shuffle([
          { text: "तारे का रंग", correct: false },
          { text: "तारे द्वारा प्रति सेकंड उत्सर्जित कुल ऊर्जा", correct: true },
          { text: "तारे की दूरी", correct: false },
          { text: "कोई संबंधित नहीं", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> चमक (ल्यूमिनोसिटी) किसी तारे द्वारा प्रति सेकंड उत्सर्जित की गई ऊर्जा की कुल मात्रा है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह तारे की आंतरिक ऊर्जा उत्पादन दर का माप है और इससे तारे का द्रव्यमान और अवस्था ज्ञात होती है।",
      },
      {
        question: "‘गामा रे विस्फोट’ (Gamma Ray Burst) क्या होता है?",
        answers: shuffle([
          { text: "सूर्य की ऊर्जा", correct: false },
          {
            text: "ब्रह्मांड में होने वाला अत्यंत तीव्र और शक्तिशाली उच्च ऊर्जा विकिरण का विस्फोट, जो सुपरनोवा या दो न्यूट्रॉन सितारों के टकराव से होता है",
            correct: true,
          },
          { text: "ब्लैक होल का विस्फोट", correct: false },
          { text: "कोई विकिरण नहीं", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> गामा रे विस्फोट ब्रह्मांड में होने वाले सबसे ऊर्जायुक्त विस्फोटों में से एक है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये त्वरित, परंतु बेहद शक्तिशाली प्रकाशीय घटनाएं होती हैं, जिनसे ब्रह्मांड के दूरस्थ भागों की ऊर्जा गतिविधि की जानकारी मिलती है।",
      },
      {
        question: "‘ग्रहों की कक्षा (Orbit) किस बल द्वारा निर्धारित होती है?’",
        answers: shuffle([
          { text: "विद्युत बल", correct: false },
          { text: "गुरुत्वाकर्षण बल", correct: true },
          { text: "चुंबकीय बल", correct: false },
          { text: "कोई नहीं", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> ग्रह सूर्य के चारों ओर गुरुत्वाकर्षण बल के कारण घुमते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बल ग्रहों को सूर्य के निकट बनाए रखता है और उनकी गति को नियंत्रित करता है।",
      },
      {
        question: "‘क्वासर’ (Quasar) क्या होता है?",
        answers: shuffle([
          { text: "एक प्रकार का ग्रह", correct: false },
          { text: "अत्यंत दूरस्थित, बहुत ऊर्जावान और प्रकाशमान सक्रिय गैलेक्सी का केंद्र, जिसमें सुपरमैसिव ब्लैक होल होता है", correct: true },
          { text: "एक तारा", correct: false },
          { text: "ब्लैक होल का एक भाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्वासर ब्रह्मांड के सबसे चमकीले और ऊर्जा से भरपूर स्रोत होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये सुपरमैसिव ब्लैक होल के आसपास के पदार्थों के तेज़ गति से गिरने के कारण उत्पन्न होते हैं, जिससे अत्यधिक विकिरण उत्सर्जित होता है।"
      },
      {
        question: "‘हबल का नियम’ (Hubble’s Law) क्या बताता है?",
        answers: shuffle([
          { text: "सभी ग्रह एक समान गति से घूमते हैं", correct: false },
          { text: "ब्रह्मांड के दूरस्थ आकाशीय पिंड हमसे दूर जा रहे हैं और उनकी गति उनके पृथक्करण की दूरी के समानुपाती है", correct: true },
          { text: "ग्रहों का जन्म प्रक्रिया", correct: false },
          { text: "किसी भी तारे की चमक मापना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हबल के नियम के अनुसार, जितना अधिक कोई गैलेक्सी हमसे दूर होगी, उसकी गति भी उतनी ही अधिक होगी।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ब्रह्मांड के विस्तार का सटीक प्रमाण है और बिग बैंग सिद्धांत का आधार है।"
      },
      {
        question: "‘सौर मंडल’ (Solar System) में कितने ग्रह हैं?",
        answers: shuffle([
          { text: "7", correct: false },
          { text: "8", correct: true },
          { text: "9", correct: false },
          { text: "10", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौरमंडल में आठ ग्रह होते हैं — बुध, शुक्र, पृथ्वी, मंगल, बृहस्पति, शनि, अरुण, और वरुण।<br><br><i class='fa-solid fa-angles-right icon'></i> पहले प्लूटो को नौवां ग्रह माना जाता था, लेकिन अब इसे बौना ग्रह घोषित किया गया है।"
      },
      {
        question: "‘रेडशिफ्ट’ (Redshift) का क्या अर्थ है?",
        answers: shuffle([
          { text: "किसी तारे का रंग बदलना", correct: false },
          { text: "किसी वस्तु से आने वाली प्रकाश तरंगों की तरंगदैर्ध्य में वृद्धि, जो यह दर्शाती है कि वह वस्तु हमसे दूर जा रही है", correct: true },
          { text: "ग्रहों की गति", correct: false },
          { text: "सूर्य का रंग बदलना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेडशिफ्ट उस घटना को कहते हैं जब किसी आकाशीय पिंड से निकलने वाली प्रकाश किरणों का तरंगदैर्ध्य लंबा हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ब्रह्मांड के विस्तार का संकेत है क्योंकि दूरस्थ वस्तुएं हमसे दूर जा रही होती हैं।"
      },
      {
        question: "‘सुपरनोवा’ क्या है?",
        answers: shuffle([
          { text: "एक ग्रह का विस्फोट", correct: false },
          { text: "एक विशाल तारे का अत्यंत शक्तिशाली विस्फोट जो उसकी मृत्यु का संकेत होता है", correct: true },
          { text: "एक ब्लैक होल का विस्फोट", correct: false },
          { text: "सूरज की चमक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुपरनोवा एक ऐसा विस्फोट है जो किसी भारी तारे के जीवन के अंत में होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह विस्फोट इतनी ऊर्जा उत्पन्न करता है कि कुछ हफ्तों तक वह तारा पूरी गैलेक्सी में चमक सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके बाद तारा न्यूट्रॉन स्टार या ब्लैक होल बन सकता है।"
      },
      {
        question: "\"कारमन लाइन\" (Kármán line) क्या है?",
        answers: shuffle([
          { text: "पृथ्वी की सतह", correct: false },
          { text: "वह काल्पनिक सीमा जो पृथ्वी के वायुमंडल और अंतरिक्ष के बीच स्थित होती है, लगभग 100 किलोमीटर ऊपर", correct: true },
          { text: "सूरज की सतह", correct: false },
          { text: "चंद्रमा की सतह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> \"कारमन लाइन\" (Kármán line) को अंतरिक्ष की शुरुआत माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह वह ऊंचाई है जहां पृथ्वी का वायुमंडल इतना पतला हो जाता है कि उड़ानयान या विमान को उड़ान के लिए उठान प्राप्त करने में मुश्किल होती है।"
      },
      {
        question: "‘ग्रहों के बीच गुरुत्वाकर्षण बल क्यों महत्वपूर्ण है?’",
        answers: shuffle([
          { text: "ग्रहों की चमक बढ़ाने के लिए", correct: false },
          { text: "ग्रहों को अपनी कक्षा में बनाए रखने के लिए और ब्रह्मांडीय गतिशीलता को नियंत्रित करने के लिए", correct: true },
          { text: "हवा पैदा करने के लिए", correct: false },
          { text: "कोई कारण नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुत्वाकर्षण बल ग्रहों को सूर्य के चारों ओर निश्चित पथ पर घूमने के लिए मजबूर करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बल ही ब्रह्मांड में वस्तुओं के बीच गतिशीलता और संरचना का मुख्य आधार है।"
      },
      {
        question: "‘डार्क एनर्जी’ (Dark Energy) क्या है?",
        answers: shuffle([
          { text: "ब्रह्मांड को संकुचित करने वाली ऊर्जा", correct: false },
          { text: "वह रहस्यमय ऊर्जा जो ब्रह्मांड के विस्तार की गति को तेज करती है और ब्रह्मांड के लगभग 68% हिस्से को बनाती है", correct: true },
          { text: "सूर्य से आने वाली ऊर्जा", correct: false },
          { text: "कोई ज्ञात ऊर्जा नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डार्क एनर्जी ब्रह्मांड में फैलाव को बढ़ावा देने वाली ऊर्जा है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका पता सूपरनोवा और गैलेक्सी क्लस्टरों के अध्ययन से चला है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ब्रह्मांड के विकास को समझने में एक बड़ी पहेली बनी हुई है।"
      },
      {
        question: "‘हीलियम फ्यूजन’ प्रक्रिया में क्या होता है?",
        answers: shuffle([
          { text: "दो या अधिक हाइड्रोजन परमाणु आपस में जुड़ते हैं", correct: false },
          { text: "हीलियम परमाणु आपस में जुड़कर भारी तत्वों का निर्माण करते हैं, यह प्रक्रिया तारे के अधिक विकसित चरण में होती है", correct: true },
          { text: "हाइड्रोजन की विघटन", correct: false },
          { text: "ऊर्जा का क्षय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब तारे के केंद्र में हाइड्रोजन खत्म हो जाता है, तो तापमान और दबाव इतना बढ़ जाता है कि हीलियम संलयन शुरू हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ऊर्जा उत्पन्न करता है और भारी तत्वों का निर्माण करता है, जो तारे के जीवन का अगला चरण है।"
      },
      {
        question: "‘गैलेक्सी’ क्या होती है?",
        answers: shuffle([
          { text: "ग्रहों का समूह", correct: false },
          { text: "तारों, गैस, धूल और डार्क मैटर का विशाल समूह जो गुरुत्वाकर्षण से बंधा होता है", correct: true },
          { text: "एक तारा", correct: false },
          { text: "कोई वस्तु नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गैलेक्सी ब्रह्मांड की सबसे बड़ी संरचनात्मक इकाई होती है, जिसमें अरबों तारे, गैस के बादल, धूल और डार्क मैटर शामिल होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> हमारी आकाशगंगा भी एक गैलेक्सी है, जिसे मिल्की वे कहा जाता है।"
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