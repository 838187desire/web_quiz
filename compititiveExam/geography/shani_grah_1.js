const questions = [
    {
        topHeading: "शनि ग्रह पर आधारित 50 MCQs, (quiz_no.)"
    },
    {
        question: "सौरमंडल में दूसरा सबसे बड़ा ग्रह कौन सा है?",
        answers: shuffle([
            { text: "बृहस्पति", correct: false },
            { text: "अरुण", correct: false },
            { text: "वरुण", correct: false },
            { text: "शनि", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति के बाद, शनि सौरमंडल का दूसरा सबसे बड़ा ग्रह है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ग्रह को उसके सुंदर वलयों (rings) के लिए जाना जाता है?",
        answers: shuffle([
            { text: "मंगल", correct: false },
            { text: "शुक्र", correct: false },
            { text: "शनि", correct: true },
            { text: "बुध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शनि ग्रह अपनी विशाल और स्पष्ट वलय प्रणाली के लिए सबसे प्रसिद्ध है, जो दूरबीन से भी दिखाई देती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि के वलय मुख्य रूप से किससे बने हैं?",
        answers: shuffle([
            { text: "गैस और धूल से", correct: false },
            { text: "चट्टानी टुकड़ों से", correct: false },
            { text: "बर्फ के कणों और चट्टानी मलबे से", correct: true },
            { text: "तरल धातु से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शनि के वलय लाखों छोटे-छोटे बर्फ के कणों, धूल और चट्टानी टुकड़ों से मिलकर बने हैं, जिनका आकार धूल के कण से लेकर एक घर जितना बड़ा हो सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि ग्रह का घनत्व पानी के घनत्व की तुलना में कैसा है?",
        answers: shuffle([
            { text: "अधिक है", correct: false },
            { text: "बराबर है", correct: false },
            { text: "कम है", correct: true },
            { text: "बहुत अधिक है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शनि सौरमंडल का सबसे कम घनत्व वाला ग्रह है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका औसत घनत्व पानी से भी कम है, जिसका अर्थ है कि यदि इसे एक विशाल महासागर में रखा जाए तो यह तैरने लगेगा।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि को सूर्य की एक परिक्रमा पूरी करने में लगभग कितना समय लगता है?",
        answers: shuffle([
            { text: "12 वर्ष", correct: false },
            { text: "29.5 वर्ष", correct: true },
            { text: "84 वर्ष", correct: false },
            { text: "165 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शनि का एक वर्ष पृथ्वी के लगभग 29.5 वर्षों के बराबर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे सूर्य का एक चक्कर लगाने में इतना समय लगता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि का सबसे बड़ा चंद्रमा कौन सा है?",
        answers: shuffle([
            { text: "यूरोपा", correct: false },
            { text: "गैनीमेड", correct: false },
            { text: "टाइटन", correct: true },
            { text: "ट्राइटन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टाइटन, शनि का सबसे बड़ा और सौरमंडल का दूसरा सबसे बड़ा चंद्रमा है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बुध ग्रह से भी बड़ा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौरमंडल का एकमात्र चंद्रमा कौन सा है जिसके पास सघन वायुमंडल है?",
        answers: shuffle([
            { text: "चंद्रमा (पृथ्वी)", correct: false },
            { text: "फोबोस (मंगल)", correct: false },
            { text: "आयो (बृहस्पति)", correct: false },
            { text: "टाइटन (शनि)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टाइटन का वायुमंडल पृथ्वी से भी अधिक सघन है और यह मुख्य रूप से नाइट्रोजन से बना है, जिसमें मीथेन भी मौजूद है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि ग्रह मुख्य रूप से किन गैसों से बना है?",
        answers: shuffle([
            { text: "ऑक्सीजन और कार्बन डाइऑक्साइड", correct: false },
            { text: "हाइड्रोजन और हीलियम", correct: true },
            { text: "नाइट्रोजन और मीथेन", correct: false },
            { text: "अमोनिया और सल्फर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति की तरह, शनि भी एक गैस दानव है जिसका अधिकांश भाग हाइड्रोजन और हीलियम से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि ग्रह का एक दिन (घूर्णन काल) लगभग कितनी अवधि का होता है?",
        answers: shuffle([
            { text: "9 घंटे 30 मिनट", correct: false },
            { text: "10 घंटे 39 मिनट", correct: true },
            { text: "16 घंटे 10 मिनट", correct: false },
            { text: "24 घंटे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शनि बहुत तेजी से घूमता है, और अपनी धुरी पर एक चक्कर लगभग साढ़े दस घंटे में पूरा कर लेता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि ग्रह के अध्ययन के लिए भेजे गए प्रसिद्ध 'कैसिनी-हाइगेंस' मिशन में 'हाइगेंस' क्या था?",
        answers: shuffle([
            { text: "एक ऑर्बिटर", correct: false },
            { text: "एक रोवर", correct: false },
            { text: "एक प्रोब (जांच यान) जो टाइटन पर उतरा", correct: true },
            { text: "एक दूरबीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाइगेंस एक प्रोब था जो कैसिनी अंतरिक्ष यान से अलग होकर 2005 में शनि के चंद्रमा टाइटन की सतह पर सफलतापूर्वक उतरा था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि ग्रह का रंग पीलापन लिए हुए क्यों दिखाई देता है?",
        answers: shuffle([
            { text: "धूल के तूफानों के कारण", correct: false },
            { text: "इसके वायुमंडल में अमोनिया क्रिस्टल की उपस्थिति के कारण", correct: true },
            { text: "सल्फर की उपस्थिति के कारण", correct: false },
            { text: "मीथेन गैस के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शनि के ऊपरी वायुमंडल में मौजूद अमोनिया के जमे हुए क्रिस्टल सूर्य के प्रकाश को परावर्तित करते हैं, जिससे ग्रह को हल्का पीला रंग मिलता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि के किस चंद्रमा को उसकी दोहरी रंगत (एक गोलार्ध उज्ज्वल, दूसरा अंधकारमय) के लिए जाना जाता है?",
        answers: shuffle([
            { text: "रिया", correct: false },
            { text: "एन्सेलेडस", correct: false },
            { text: "टेथिस", correct: false },
            { text: "आयापेटस", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आयापेटस की एक सतह कोयले की तरह काली और दूसरी बर्फ की तरह चमकीली है, जो इसे सौरमंडल के सबसे विचित्र पिंडों में से एक बनाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि के किस चंद्रमा पर बर्फीले गीजर (बर्फ के फव्वारे) पाए गए हैं?",
        answers: shuffle([
            { text: "टाइटन", correct: false },
            { text: "मीमास", correct: false },
            { text: "एन्सेलेडस", correct: true },
            { text: "डायोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैसिनी मिशन ने एन्सेलेडस के दक्षिणी ध्रुव से निकलने वाले जल वाष्प और बर्फ के कणों के विशाल फव्वारे देखे, जो इसकी सतह के नीचे एक तरल महासागर की ओर इशारा करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि ग्रह का नाम किस रोमन देवता के नाम पर रखा गया है?",
        answers: shuffle([
            { text: "युद्ध के देवता", correct: false },
            { text: "समुद्र के देवता", correct: false },
            { text: "कृषि और धन के देवता", correct: true },
            { text: "देवताओं के राजा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शनि का नाम रोमन पौराणिक कथाओं में कृषि के देवता 'सैटर्न' (Saturn) के नाम पर रखा गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि ग्रह के ध्रुवों पर देखे गए षट्कोणीय (hexagonal) आकार के बादल पैटर्न का क्या कारण है?",
        answers: shuffle([
            { text: "एक विशाल तूफान", correct: false },
            { text: "वायुमंडल में एक जेट स्ट्रीम", correct: true },
            { text: "छह अलग-अलग तूफानों का समूह", correct: false },
            { text: "इसका सटीक कारण अभी भी अध्ययन का विषय है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अद्वितीय षट्कोणीय आकृति शनि के उत्तरी ध्रुव पर स्थित एक स्थायी तरंग पैटर्न है जो एक शक्तिशाली जेट स्ट्रीम से जुड़ी है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि का कौन सा वलय (Ring) सबसे चमकीला और सबसे चौड़ा है?",
        answers: shuffle([
            { text: "A वलय", correct: false },
            { text: "B वलय", correct: true },
            { text: "C वलय", correct: false },
            { text: "F वलय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शनि के वलयों में B वलय सबसे बड़ा, सबसे चमकीला और सबसे घना है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि के A और B वलयों के बीच के खाली स्थान को क्या कहते हैं?",
        answers: shuffle([
            { text: "मैक्सवेल गैप", correct: false },
            { text: "केपलर डिवीजन", correct: false },
            { text: "कैसिनी डिवीजन", correct: true },
            { text: "हाइगेंस गैप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैसिनी डिवीजन शनि के दो सबसे प्रमुख वलयों, A और B के बीच का सबसे बड़ा अंतराल है, जिसे 1675 में गियोवन्नी कैसिनी ने खोजा था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि ग्रह पर हवा की गति कितनी तेज हो सकती है?",
        answers: shuffle([
            { text: "500 किलोमीटर प्रति घंटा", correct: false },
            { text: "1,000 किलोमीटर प्रति घंटा", correct: false },
            { text: "1,800 किलोमीटर प्रति घंटा", correct: true },
            { text: "2,500 किलोमीटर प्रति घंटा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शनि पर सौरमंडल की कुछ सबसे तेज हवाएं चलती हैं, जिनकी गति 1,800 किलोमीटर प्रति घंटे तक पहुँच सकती है, खासकर भूमध्य रेखा के पास।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि के चंद्रमा मीमास पर कौन सी एक विशाल और प्रमुख विशेषता है?",
        answers: shuffle([
            { text: "एक विशाल ज्वालामुखी", correct: false },
            { text: "एक बहुत बड़ा गड्ढा (क्रेटर)", correct: true },
            { text: "एक लंबा बर्फीला पहाड़", correct: false },
            { text: "एक मीथेन की झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मीमास पर 'हर्शेल' नामक एक विशाल प्रभाव गड्ढा है, जिसका व्यास चंद्रमा के व्यास का लगभग एक-तिहाई है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि को 'गैस दानव' क्यों कहा जाता है?",
        answers: shuffle([
            { text: "क्योंकि यह बहुत गर्म है", correct: false },
            { text: "क्योंकि इसकी कोई ठोस सतह नहीं है और यह मुख्य रूप से गैसों से बना है", correct: true },
            { text: "क्योंकि इससे लगातार गैसें निकलती रहती हैं", correct: false },
            { text: "क्योंकि इसका आकार विशाल है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शनि का अधिकांश भाग हाइड्रोजन और हीलियम जैसी गैसों से बना है और इसकी कोई निश्चित ठोस सतह नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि के कितने चंद्रमाओं की पुष्टि हो चुकी है? (यह संख्या नई खोजों के साथ बदल सकती है)",
        answers: shuffle([
            { text: "53", correct: false },
            { text: "83", correct: false },
            { text: "117", correct: false },
            { text: "146", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाल की खोजों के अनुसार, शनि के 146 ज्ञात चंद्रमा हैं, जिससे यह सौरमंडल में सबसे अधिक चंद्रमाओं वाला ग्रह बन गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि के वलयों की मोटाई कितनी है?",
        answers: shuffle([
            { text: "वे बहुत मोटे हैं, हजारों किलोमीटर", correct: false },
            { text: "वे बहुत पतले हैं, औसतन केवल 10 मीटर से 1 किलोमीटर", correct: true },
            { text: "लगभग 100 किलोमीटर मोटे हैं", correct: false },
            { text: "उनकी मोटाई हर जगह एक समान है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपने विशाल व्यास (लगभग 2,82,000 किलोमीटर) के बावजूद, शनि के वलय असाधारण रूप से पतले हैं, जिनकी मोटाई आमतौर पर कुछ दसियों मीटर ही होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि का चुंबकीय क्षेत्र पृथ्वी की तुलना में कैसा है?",
        answers: shuffle([
            { text: "कमजोर है", correct: false },
            { text: "लगभग बराबर है", correct: false },
            { text: "थोड़ा शक्तिशाली है", correct: false },
            { text: "बहुत अधिक शक्तिशाली है (लगभग 578 गुना)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शनि का चुंबकीय क्षेत्र पृथ्वी से बहुत अधिक शक्तिशाली है, हालांकि यह बृहस्पति के चुंबकीय क्षेत्र जितना मजबूत नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'ड्रैगन स्टॉर्म' नामक विशाल तूफान किस ग्रह पर देखा गया था?",
        answers: shuffle([
            { text: "बृहस्पति", correct: false },
            { text: "शनि", correct: true },
            { text: "अरुण", correct: false },
            { text: "वरुण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ड्रैगन स्टॉर्म शनि के दक्षिणी गोलार्ध में एक बहुत बड़ा, शक्तिशाली और लंबे समय तक चलने वाला तूफान था, जो तीव्र रेडियो उत्सर्जन का स्रोत था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि की धुरी का झुकाव कितना है, जो पृथ्वी के समान मौसमों का कारण बनता है?",
        answers: shuffle([
            { text: "3 डिग्री", correct: false },
            { text: "15 डिग्री", correct: false },
            { text: "27 डिग्री", correct: true },
            { text: "45 डिग्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शनि अपनी कक्षा के तल पर लगभग 27 डिग्री झुका हुआ है, जो पृथ्वी के 23.5 डिग्री के झुकाव के समान है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस झुकाव के कारण शनि पर भी मौसम बदलते हैं, यद्यपि वे बहुत लंबे होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि के वलयों के भीतर परिक्रमा करने वाले छोटे चंद्रमाओं को क्या कहा जाता है?",
        answers: shuffle([
            { text: "चरवाहे चंद्रमा (शेफर्ड मून्स)", correct: true },
            { text: "ट्रोजन चंद्रमा", correct: false },
            { text: "गैलीलियन चंद्रमा", correct: false },
            { text: "बर्फीले चंद्रमा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चरवाहे चंद्रमा छोटे उपग्रह होते हैं जो वलयों के किनारों पर या उनके भीतर के अंतराल में परिक्रमा करते हैं और अपने गुरुत्वाकर्षण से वलय के कणों को एक संकीर्ण सीमा में बनाए रखते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि के चंद्रमा टाइटन की सतह पर तरल पदार्थ किस रूप में मौजूद है?",
        answers: shuffle([
            { text: "पानी की नदियाँ और झीलें", correct: false },
            { text: "तरल नाइट्रोजन के महासागर", correct: false },
            { text: "तरल मीथेन और ईथेन की नदियाँ और झीलें", correct: true },
            { text: "पिघला हुआ लावा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टाइटन पर अत्यधिक ठंड के कारण, पानी चट्टान की तरह ठोस है, जबकि मीथेन और ईथेन जैसी गैसें तरल अवस्था में मौजूद हैं, जो नदियों, झीलों और समुद्रों का निर्माण करती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी से देखने पर शनि के वलय गायब क्यों प्रतीत होते हैं?",
        answers: shuffle([
            { text: "क्योंकि वे पारदर्शी हैं", correct: false },
            { text: "क्योंकि वे हमेशा के लिए गायब हो जाते हैं", correct: false },
            { text: "क्योंकि शनि की परिक्रमा के दौरान वे कभी-कभी किनारे से दिखाई देते हैं", correct: true },
            { text: "क्योंकि पृथ्वी का वायुमंडल उन्हें छिपा देता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शनि के 29.5 वर्षीय परिक्रमा पथ में, दो बार ऐसी स्थिति आती है जब हम पृथ्वी से उसके वलयों को ठीक किनारे से देखते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि वलय बहुत पतले हैं, वे इन अवधियों के दौरान लगभग अदृश्य हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि का गुरुत्वाकर्षण उसकी सतह (बादलों के शीर्ष) पर पृथ्वी की तुलना में कैसा है?",
        answers: shuffle([
            { text: "बहुत कम", correct: false },
            { text: "पृथ्वी के लगभग बराबर", correct: true },
            { text: "दोगुना", correct: false },
            { text: "दस गुना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि शनि बहुत अधिक विशाल है, इसका घनत्व बहुत कम है और इसका आकार बहुत बड़ा है।<br><br><i class='fa-solid fa-angles-right icon'></i> इन कारकों के कारण, इसके बादलों के शीर्ष पर गुरुत्वाकर्षण बल पृथ्वी की सतह के गुरुत्वाकर्षण से थोड़ा ही अधिक है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'वॉयेजर 1' और 'वॉयेजर 2' अंतरिक्ष यानों ने शनि के बारे में क्या महत्वपूर्ण जानकारी प्रदान की?",
        answers: shuffle([
            { text: "वे शनि पर उतरे थे", correct: false },
            { text: "उन्होंने शनि के वलयों और चंद्रमाओं की विस्तृत तस्वीरें भेजीं", correct: true },
            { text: "उन्होंने शनि के वायुमंडल से नमूने एकत्र किए", correct: false },
            { text: "उन्होंने शनि की कक्षा में प्रवेश किया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1980 और 1981 में वॉयेजर यानों ने शनि के पास से गुजरते हुए उसके वलयों की जटिल संरचना, नए चंद्रमाओं और वायुमंडल के बारे में अभूतपूर्व डेटा और छवियां प्रदान कीं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि के किस चंद्रमा का आकार और रूप 'स्टार वार्स' के 'डेथ स्टार' जैसा है?",
        answers: shuffle([
            { text: "एन्सेलेडस", correct: false },
            { text: "टेथिस", correct: false },
            { text: "मीमास", correct: true },
            { text: "डायोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मीमास पर मौजूद विशाल 'हर्शेल क्रेटर' इसे काल्पनिक अंतरिक्ष स्टेशन 'डेथ स्टार' जैसा एक विशिष्ट रूप देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि ग्रह सूर्य से प्राप्त ऊर्जा की तुलना में ऊर्जा का उत्सर्जन कैसा करता है?",
        answers: shuffle([
            { text: "कम ऊर्जा उत्सर्जित करता है", correct: false },
            { text: "बराबर ऊर्जा उत्सर्जित करता है", correct: false },
            { text: "लगभग ढाई गुना अधिक ऊर्जा उत्सर्जित करता है", correct: true },
            { text: "कोई ऊर्जा उत्सर्जित नहीं करता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति की तरह, शनि भी अपनी आंतरिक गर्मी के कारण सूर्य से प्राप्त होने वाली ऊर्जा से कहीं अधिक ऊर्जा अंतरिक्ष में विकीर्ण करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि का आंतरिक भाग कैसा माना जाता है?",
        answers: shuffle([
            { text: "पूरी तरह से ठोस", correct: false },
            { text: "एक विशाल तरल महासागर", correct: false },
            { text: "एक छोटा चट्टानी कोर, जिसके चारों ओर धात्विक हाइड्रोजन और तरल हाइड्रोजन है", correct: true },
            { text: "पूरी तरह से गैसीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माना जाता है कि शनि के केंद्र में एक सघन, चट्टानी कोर है, जो धात्विक हाइड्रोजन की एक परत से घिरा है, और उसके ऊपर तरल हाइड्रोजन की एक और परत है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस खगोलशास्त्री ने सबसे पहले यह समझा कि शनि के चारों ओर की संरचना एक वलय है?",
        answers: shuffle([
            { text: "गैलीलियो गैलिली", correct: false },
            { text: "टाइको ब्राहे", correct: false },
            { text: "जोहान्स केपलर", correct: false },
            { text: "क्रिश्चियन हाइगेंस", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1655 में, एक बेहतर दूरबीन का उपयोग करते हुए, क्रिश्चियन हाइगेंस ने सही ढंग से यह पता लगाया कि गैलीलियो द्वारा देखे गए \"कान\" वास्तव में शनि को घेरे हुए एक वलय थे।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "टाइटन पर 'क्रायोवोल्केनिज्म' (बर्फीला ज्वालामुखी) का क्या अर्थ है?",
        answers: shuffle([
            { text: "गर्म लावा उगलने वाले ज्वालामुखी", correct: false },
            { text: "पानी, अमोनिया या मीथेन जैसे बर्फीले पदार्थ उगलने वाले ज्वालामुखी", correct: true },
            { text: "गैस के फव्वारे", correct: false },
            { text: "धूल के बवंडर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रायोवोल्केनिज्म एक ऐसी प्रक्रिया है जिसमें चट्टान के बजाय वाष्पशील पदार्थ जैसे पानी, अमोनिया या मीथेन का विस्फोट होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि के वलयों का नामकरण किस आधार पर किया गया है?",
        answers: shuffle([
            { text: "उनकी खोज के क्रम के आधार पर", correct: true },
            { text: "रोमन देवताओं के नाम पर", correct: false },
            { text: "उनके आकार के आधार पर", correct: false },
            { text: "उनकी चमक के आधार पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शनि के मुख्य वलयों का नामकरण वर्णानुक्रम में (A, B, C, D, E, F, G) उनकी खोज के क्रम के अनुसार किया गया है, न कि ग्रह से उनकी दूरी के क्रम में।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि के वायुमंडल में सबसे ऊपरी बादल की परत किससे बनी है?",
        answers: shuffle([
            { text: "पानी की बर्फ", correct: false },
            { text: "मीथेन की बर्फ", correct: false },
            { text: "अमोनिया की बर्फ", correct: true },
            { text: "सल्फर यौगिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शनि के वायुमंडल में दिखाई देने वाली सबसे ऊपरी परत अमोनिया के जमे हुए क्रिस्टलों से बने बादलों की है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि का कौन सा चंद्रमा एक 'ट्रोजन चंद्रमा' का उदाहरण है, जो दूसरे चंद्रमा (टेथिस) के साथ कक्षा साझा करता है?",
        answers: shuffle([
            { text: "एन्सेलेडस", correct: false },
            { text: "डायोन", correct: false },
            { text: "टेलेस्टो", correct: true },
            { text: "रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टेलेस्टो और कैलिप्सो, टेथिस के ट्रोजन चंद्रमा हैं, जो टेथिस की कक्षा में उससे 60 डिग्री आगे और पीछे स्थिर बिंदुओं पर परिक्रमा करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि के वलयों की आयु कितनी अनुमानित है?",
        answers: shuffle([
            { text: "सौरमंडल जितनी ही पुरानी", correct: false },
            { text: "अपेक्षाकृत बहुत युवा, शायद 1 से 10 करोड़ वर्ष", correct: true },
            { text: "लगभग 1 अरब वर्ष", correct: false },
            { text: "अज्ञात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैसिनी मिशन के आंकड़ों से पता चलता है कि शनि के वलय भूवैज्ञानिक दृष्टि से काफी युवा हैं और संभवतः किसी टूटे हुए चंद्रमा या धूमकेतु के अवशेषों से बने हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि ग्रह पर 'ग्रेट व्हाइट स्पॉट' क्या है?",
        answers: shuffle([
            { text: "एक स्थायी तूफान", correct: false },
            { text: "एक विशाल सफेद बादल", correct: false },
            { text: "एक आवधिक विशाल तूफान जो लगभग हर 30 साल में प्रकट होता है", correct: true },
            { text: "एक बर्फीला पठार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेट व्हाइट स्पॉट शनि के उत्तरी गोलार्ध में उत्पन्न होने वाले विशाल तूफानों की एक श्रृंखला है जो लगभग हर शनि वर्ष (लगभग 29.5 पृथ्वी वर्ष) में एक बार होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि पर एक 'शनि वर्ष' में कितनी बार विषुव (equinox) होता है?",
        answers: shuffle([
            { text: "एक बार", correct: false },
            { text: "दो बार", correct: true },
            { text: "चार बार", correct: false },
            { text: "हर साल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शनि की लगभग 29.5 पृथ्वी-वर्ष की कक्षा के दौरान, दो विषुव होते हैं - एक लगभग हर 15 पृथ्वी-वर्ष में।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि के F वलय की जटिल और लटदार संरचना को बनाए रखने के लिए कौन से चंद्रमा जिम्मेदार हैं?",
        answers: shuffle([
            { text: "मीमास और टेथिस", correct: false },
            { text: "प्रोमेथियस और पेंडोरा", correct: true },
            { text: "पैन और एटलस", correct: false },
            { text: "रिया और डायोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोमेथियस और पेंडोरा, F वलय के चरवाहे चंद्रमा के रूप में कार्य करते हैं, जिनके गुरुत्वाकर्षण प्रभाव से वलय की अनूठी गांठदार और लटदार आकृति बनती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "टाइटन पर तरल मीथेन चक्र किस तरह से पृथ्वी के जल चक्र जैसा है?",
        answers: shuffle([
            { text: "यह समान तापमान पर होता है", correct: false },
            { text: "इसमें वाष्पीकरण, संघनन और वर्षा की प्रक्रियाएं शामिल हैं", correct: true },
            { text: "यह जीवन का समर्थन करता है", correct: false },
            { text: "यह समान रासायनिक यौगिकों से बना है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टाइटन पर, तरल मीथेन झीलों से वाष्पित होता है, बादल बनाता है, और फिर मीथेन की बारिश के रूप में सतह पर वापस आ जाता है, ठीक वैसे ही जैसे पृथ्वी पर पानी का चक्र काम करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि के चुंबकीय क्षेत्र की सबसे असामान्य विशेषता क्या है?",
        answers: shuffle([
            { text: "यह बहुत कमजोर है", correct: false },
            { text: "यह इसकी घूर्णन धुरी के साथ लगभग पूरी तरह से संरेखित है", correct: true },
            { text: "यह बार-बार दिशा बदलता है", correct: false },
            { text: "इसका कोई चुंबकीय क्षेत्र नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अन्य ग्रहों के विपरीत, शनि का चुंबकीय क्षेत्र इसकी घूर्णन धुरी के साथ आश्चर्यजनक रूप से संरेखित है, जिसमें कोई पता लगाने योग्य झुकाव नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'सैटर्न इक्विनॉक्स' (शनि विषुव) के दौरान क्या होता है?",
        answers: shuffle([
            { text: "शनि सूर्य के सबसे निकट होता है", correct: false },
            { text: "सूर्य का प्रकाश सीधे शनि के वलयों के किनारे पर पड़ता है", correct: true },
            { text: "शनि पर सबसे लंबा दिन होता है", correct: false },
            { text: "शनि पर ग्रहण लगता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शनि विषुव के दौरान, जो लगभग हर 15 पृथ्वी वर्षों में होता है, सूर्य शनि की भूमध्य रेखा के ठीक ऊपर होता है, जिससे वलय किनारे से प्रकाशित होते हैं और विशाल छाया डालते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि ग्रह के कितने मुख्य वलय समूह हैं?",
        answers: shuffle([
            { text: "तीन (A, B, C)", correct: false },
            { text: "पांच (A, B, C, D, E)", correct: false },
            { text: "सात (A, B, C, D, E, F, G)", correct: true },
            { text: "दस से अधिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शनि के सात मुख्य वलय हैं, जिन्हें ग्रह से बाहर की ओर D, C, B, A, F, G और E नाम दिया गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि के चंद्रमा हाइपेरियन की क्या विशेषता है?",
        answers: shuffle([
            { text: "यह पूरी तरह से गोलाकार है", correct: false },
            { text: "इसका घूर्णन अव्यवस्थित और अप्रत्याशित है", correct: true },
            { text: "यह वलयों के भीतर परिक्रमा करता है", correct: false },
            { text: "इसकी सतह पर कोई गड्ढा नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाइपेरियन एक स्थिर धुरी पर नहीं घूमता है; यह अंतरिक्ष में अव्यवस्थित रूप से लुढ़कता है, संभवतः इसके अनियमित आकार और टाइटन के गुरुत्वाकर्षण प्रभाव के कारण।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी से शनि को देखने के लिए सबसे अच्छा समय कब होता है?",
        answers: shuffle([
            { text: "जब यह सूर्य के पीछे होता है", correct: false },
            { text: "'अपोजिशन' (विपक्ष) के समय, जब यह आकाश में सूर्य के विपरीत होता है", correct: true },
            { text: "सूर्योदय के ठीक बाद", correct: false },
            { text: "अमावस्या की रात को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब शनि 'अपोजिशन' में होता है, तो पृथ्वी सीधे शनि और सूर्य के बीच होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस समय, शनि पृथ्वी के सबसे करीब, सबसे बड़ा और सबसे चमकीला दिखाई देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि का सबसे भीतरी प्रमुख वलय कौन सा है?",
        answers: shuffle([
            { text: "A वलय", correct: false },
            { text: "C वलय", correct:false },
            { text: "D वलय", correct: true },
            { text: "G वलय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> D वलय शनि के सबसे निकट स्थित अत्यंत धुंधला और विसरित वलय है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "कैसिनी मिशन का अंत कैसे हुआ?",
        answers: shuffle([
            { text: "यह अंतरिक्ष में खो गया", correct: false },
            { text: "इसे जानबूझकर शनि के वायुमंडल में प्रवेश कराकर नष्ट कर दिया गया", correct: true },
            { text: "यह टाइटन से टकरा गया", correct: false },
            { text: "इसका ईंधन खत्म हो गया और यह निष्क्रिय हो गया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपने मिशन के अंत में, 2017 में, कैसिनी को जानबूझकर शनि के वायुमंडल में भेजा गया ताकि एन्सेलेडस या टाइटन जैसे चंद्रमाओं को पृथ्वी के रोगाणुओं से दूषित होने से बचाया जा सके।<br><br><i class='fa-solid fa-angles-right icon'></i> "
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