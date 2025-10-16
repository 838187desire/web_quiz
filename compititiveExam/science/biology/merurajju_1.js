const questions = [
    {
        topHeading: "मेरुरज्जु पर आधारित 50 MCQs (quiz_no. 55)"
    },
    {
        question: "प्रश्न 1. मेरुरज्जु (Spinal Cord) केंद्रीय तंत्रिका तंत्र का एक हिस्सा है, दूसरा हिस्सा कौन सा है?",
        answers: shuffle([
            { text: "कपाल तंत्रिकाएं", correct: false },
            { text: "मेरु तंत्रिकाएं", correct: false },
            { text: "मस्तिष्क (Brain)", correct: true },
            { text: "परिधीय तंत्रिका तंत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केंद्रीय तंत्रिका तंत्र (CNS) के दो मुख्य भाग होते हैं: मस्तिष्क और मेरुरज्जु।"
    },
    {
        question: "प्रश्न 2. प्रतिवर्ती क्रियाओं (Reflex actions) का मुख्य नियंत्रण केंद्र कौन सा है?",
        answers: shuffle([
            { text: "मस्तिष्क", correct: false },
            { text: "मेरुरज्जु", correct: true },
            { text: "अनुमस्तिष्क", correct: false },
            { text: "हाइपोथैलेमस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेरुरज्जु अधिकांश तत्काल और अनैच्छिक प्रतिवर्ती क्रियाओं के लिए केंद्र के रूप में कार्य करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इससे मस्तिष्क पर बोझ कम होता है और प्रतिक्रिया तेज होती है।"
    },
    {
        question: "प्रश्न 3. मनुष्य में कितनी जोड़ी मेरु तंत्रिकाएं (Spinal nerves) होती हैं?",
        answers: shuffle([
            { text: "12 जोड़ी", correct: false },
            { text: "21 जोड़ी", correct: false },
            { text: "31 जोड़ी", correct: true },
            { text: "41 जोड़ी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मनुष्य के मेरुरज्जु से 31 जोड़ी मेरु तंत्रिकाएं निकलती हैं, जो शरीर के विभिन्न भागों में फैली होती हैं।"
    },
    {
        question: "प्रश्न 4. मेरुरज्जु कहाँ संरक्षित रहता है?",
        answers: shuffle([
            { text: "खोपड़ी (Skull) में", correct: false },
            { text: "कशेरुक दंड (Vertebral column) में", correct: true },
            { text: "पसलियों के पिंजरे (Rib cage) में", correct: false },
            { text: "उरोस्थि (Sternum) में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेरुरज्जु, रीढ़ की हड्डी के भीतर स्थित कशेरुकाओं द्वारा निर्मित एक नहर के भीतर सुरक्षित रहता है, जिसे कशेरुक दंड कहते हैं।"
    },
    {
        question: "प्रश्न 5. मेरुरज्जु की अनुप्रस्थ काट में 'तितली' या 'H' के आकार की संरचना को क्या कहते हैं?",
        answers: shuffle([
            { text: "श्वेत द्रव्य (White matter)", correct: false },
            { text: "धूसर द्रव्य (Grey matter)", correct: true },
            { text: "केंद्रीय नाल (Central canal)", correct: false },
            { text: "मेनिनजेस (Meninges)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेरुरज्जु के केंद्र में स्थित धूसर द्रव्य, जिसमें न्यूरॉन के कोशिका काय (Cell bodies) होते हैं, एक तितली या H जैसी आकृति बनाता है।"
    },
    {
        question: "प्रश्न 6. मेरुरज्जु की पृष्ठीय (Dorsal) जड़ का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "मोटर संकेतों को प्रसारित करना", correct: false },
            { text: "संवेदी संकेतों को प्रसारित करना", correct: true },
            { text: "प्रतिवर्ती क्रियाओं को उत्पन्न करना", correct: false },
            { text: "मस्तिष्क को पोषण देना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृष्ठीय या पीछे की जड़ (Dorsal root) में संवेदी न्यूरॉन्स होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये शरीर के अंगों से संवेदी जानकारी (जैसे दर्द, स्पर्श) को मेरुरज्जु तक पहुँचाते हैं।"
    },
    {
        question: "प्रश्न 7. मेरुरज्जु की अधर (Ventral) जड़ का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "संवेदी संकेतों को प्राप्त करना", correct: false },
            { text: "मोटर संकेतों को मांसपेशियों तक भेजना", correct: true },
            { text: "संतुलन बनाए रखना", correct: false },
            { text: "सूचनाओं का भंडारण करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधर या आगे की जड़ (Ventral root) में मोटर न्यूरॉन्स के एक्सॉन होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये मेरुरज्जु से मांसपेशियों और ग्रंथियों तक क्रिया के लिए आदेश ले जाते हैं।"
    },
    {
        question: "प्रश्न 8. मेरुरज्जु और मस्तिष्क को घेरने वाली सुरक्षात्मक झिल्लियों को क्या कहते हैं?",
        answers: shuffle([
            { text: "पेरिकार्डियम", correct: false },
            { text: "प्लूरा", correct: false },
            { text: "मेनिनजेस (Meninges)", correct: true },
            { text: "पेरिटोनियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेनिनजेस तीन परतों (ड्यूरा मेटर, एरेक्नॉइड मेटर, और पिया मेटर) का एक समूह है जो केंद्रीय तंत्रिका तंत्र को सुरक्षा प्रदान करता है।"
    },
    {
        question: "प्रश्न 9. एक प्रतिवर्ती चाप (Reflex arc) का सही क्रम क्या है?",
        answers: shuffle([
            { text: "ग्राही → मोटर न्यूरॉन → संवेदी न्यूरॉन → प्रभावक", correct: false },
            { text: "ग्राही → संवेदी न्यूरॉन → मेरुरज्जु → मोटर न्यूरॉन → प्रभावक", correct: true },
            { text: "प्रभावक → मोटर न्यूरॉन → मेरुरज्जु → संवेदी न्यूरॉन → ग्राही", correct: false },
            { text: "मेरुरज्जु → संवेदी न्यूरॉन → मोटर न्यूरॉन → ग्राही → प्रभावक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिवर्ती चाप की शुरुआत एक ग्राही (receptor) से होती है, जो संवेदी न्यूरॉन के माध्यम से मेरुरज्जु तक संकेत भेजता है।<br><br><i class='fa-solid fa-angles-right icon'></i> फिर मोटर न्यूरॉन के माध्यम से एक प्रभावक (effector) अंग (जैसे मांसपेशी) को प्रतिक्रिया का आदेश मिलता है।"
    },
    {
        question: "प्रश्न 10. मेरुरज्जु का श्वेत द्रव्य (White matter) किससे बना होता है?",
        answers: shuffle([
            { text: "न्यूरॉन के कोशिका काय से", correct: false },
            { text: "डेंड्राइट से", correct: false },
            { text: "मायेलिनेटेड एक्सॉन से", correct: true },
            { text: "सिनेप्स से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्वेत द्रव्य का सफेद रंग एक्सॉन पर चढ़ी मायेलिन शीथ (वसायुक्त परत) के कारण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मस्तिष्क और मेरुरज्जु के विभिन्न हिस्सों के बीच संकेतों का तेजी से संचरण करता है।"
    },
    {
        question: "प्रश्न 11. सेरिब्रोस्पाइनल द्रव (CSF) मेरुरज्जु में कहाँ पाया जाता है?",
        answers: shuffle([
            { text: "केवल श्वेत द्रव्य में", correct: false },
            { text: "केवल धूसर द्रव्य में", correct: false },
            { text: "सबएरेक्नॉइड स्पेस और केंद्रीय नाल में", correct: true },
            { text: "ड्यूरा मेटर के बाहर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> CSF मेनिनजेस की मध्य परत (एरेक्नॉइड) और आंतरिक परत (पिया मेटर) के बीच के स्थान (सबएरेक्नॉइड स्पेस) और मेरुरज्जु की केंद्रीय नाल में बहता है, जो इसे पोषण और सुरक्षा प्रदान करता है।"
    },
    {
        question: "प्रश्न 12. मेरुरज्जु का निचला सिरा, जो घोड़े की पूंछ जैसा दिखता है, क्या कहलाता है?",
        answers: shuffle([
            { text: "फिल्लम टर्मिनल", correct: false },
            { text: "कॉडा इक्विना (Cauda equina)", correct: true },
            { text: "कोनस मेड्युलैरिस", correct: false },
            { text: "पृष्ठीय जड़ गैन्ग्लिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वयस्कों में, मेरुरज्जु कशेरुक दंड के अंत तक नहीं जाता।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका निचला सिरा नुकीला हो जाता है और वहाँ से निकलने वाली मेरु तंत्रिकाएं एक साथ मिलकर घोड़े की पूंछ जैसी संरचना बनाती हैं जिसे कॉडा इक्विना कहते हैं।"
    },
    {
        question: "प्रश्न 13. संवेदी न्यूरॉन्स के कोशिका काय (Cell bodies) कहाँ स्थित होते हैं?",
        answers: shuffle([
            { text: "धूसर द्रव्य के अधर सींग में", correct: false },
            { text: "पृष्ठीय जड़ गैन्ग्लिया (Dorsal root ganglion) में", correct: true },
            { text: "श्वेत द्रव्य में", correct: false },
            { text: "केंद्रीय नाल में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृष्ठीय जड़ गैन्ग्लिया, पृष्ठीय जड़ पर एक उभार होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ शरीर से आने वाले संवेदी न्यूरॉन्स के कोशिका काय एकत्रित होते हैं।"
    },
    {
        question: "प्रश्न 14. लंबर पंक्चर (स्पाइनल टैप) के दौरान सुई कहाँ डाली जाती है?",
        answers: shuffle([
            { text: "मस्तिष्क में", correct: false },
            { text: "कशेरुका की हड्डी में", correct: false },
            { text: "सबएरेक्नॉइड स्पेस में", correct: true },
            { text: "मेरुरज्जु के धूसर द्रव्य में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लंबर पंक्चर में, आमतौर पर निचली पीठ (L3-L4 या L4-L5) में कशेरुकाओं के बीच सुई डालकर सबएरेक्नॉइड स्पेस से सेरिब्रोस्पाइनल द्रव (CSF) का नमूना लिया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस जगह मेरुरज्जु को चोट लगने का खतरा कम होता है।"
    },
    {
        question: "प्रश्न 15. मेरुरज्जु का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "सोचना और निर्णय लेना", correct: false },
            { text: "शरीर का तापमान नियंत्रित करना", correct: false },
            { text: "मस्तिष्क और शरीर के बीच संकेतों का संवहन और प्रतिवर्ती क्रियाएं", correct: true },
            { text: "हार्मोन का उत्पादन करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेरुरज्जु के दो प्राथमिक कार्य हैं: मस्तिष्क और परिधीय तंत्रिका तंत्र के बीच एक संचार राजमार्ग के रूप में कार्य करना।<br><br><i class='fa-solid fa-angles-right icon'></i> और सरल प्रतिवर्ती क्रियाओं को नियंत्रित करना।"
    },
    {
        question: "प्रश्न 16. किस विषाणु के संक्रमण से मेरुरज्जु के मोटर न्यूरॉन्स नष्ट हो सकते हैं, जिससे लकवा हो जाता है?",
        answers: shuffle([
            { text: "इन्फ्लूएंजा वायरस", correct: false },
            { text: "पोलियोवायरस", correct: true },
            { text: "एचआईवी", correct: false },
            { text: "हेपेटाइटिस वायरस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पोलियोमाइलाइटिस एक वायरल बीमारी है जो मेरुरज्जु के धूसर द्रव्य में स्थित मोटर न्यूरॉन्स को संक्रमित और नष्ट कर सकती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इससे मांसपेशियों में कमजोरी और लकवा हो सकता है।"
    },
    {
        question: "प्रश्न 17. आरोही पथ (Ascending tracts) का क्या कार्य है?",
        answers: shuffle([
            { text: "मोटर आदेशों को मस्तिष्क से नीचे लाना", correct: false },
            { text: "संवेदी सूचना को मस्तिष्क तक ऊपर ले जाना", correct: true },
            { text: "मेरुरज्जु के भीतर संकेतों को संसाधित करना", correct: false },
            { text: "रक्त की आपूर्ति करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेरुरज्जु के श्वेत द्रव्य में स्थित आरोही पथ तंत्रिका तंतुओं के बंडल होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये शरीर से प्राप्त संवेदी जानकारी (जैसे दर्द, स्पर्श, तापमान) को मस्तिष्क के उच्च केंद्रों तक पहुँचाते हैं।"
    },
    {
        question: "प्रश्न 18. अवरोही पथ (Descending tracts) का क्या कार्य है?",
        answers: shuffle([
            { text: "संवेदी सूचना को मस्तिष्क तक ले जाना", correct: false },
            { text: "मोटर आदेशों को मस्तिष्क से मांसपेशियों तक लाना", correct: true },
            { text: "हार्मोन का परिवहन करना", correct: false },
            { text: "प्रतिवर्ती क्रियाओं को शुरू करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवरोही पथ मस्तिष्क से उत्पन्न होने वाले मोटर आदेशों को मेरुरज्जु के माध्यम से नीचे ले जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये कंकाल की मांसपेशियों की गति को नियंत्रित करते हैं।"
    },
    {
        question: "प्रश्न 19. मेरुरज्जु का कौन सा भाग मोटर न्यूरॉन्स के कोशिका काय का घर है?",
        answers: shuffle([
            { text: "पृष्ठीय सींग (Dorsal horn)", correct: false },
            { text: "अधर सींग (Ventral horn)", correct: true },
            { text: "पार्श्व सींग (Lateral horn)", correct: false },
            { text: "पृष्ठीय जड़ गैन्ग्लिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धूसर द्रव्य के अधर (आगे के) सींग में सोमैटिक मोटर न्यूरॉन्स के कोशिका काय होते हैं, जो कंकाल की मांसपेशियों को नियंत्रित करते हैं।"
    },
    {
        question: "प्रश्न 20. एक मेरु तंत्रिका (Spinal nerve) किससे बनती है?",
        answers: shuffle([
            { text: "केवल संवेदी तंतुओं से", correct: false },
            { text: "केवल मोटर तंतुओं से", correct: false },
            { text: "पृष्ठीय और अधर जड़ों के मिलन से", correct: true },
            { text: "केवल कपाल तंत्रिकाओं से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्येक मेरु तंत्रिका एक 'मिश्रित तंत्रिका' होती है क्योंकि यह मेरुरज्जु से निकलने वाली संवेदी (पृष्ठीय) और मोटर (अधर) जड़ों के संयोजन से बनती है।"
    },
    {
        question: "प्रश्न 21. मेरुरज्जु किससे जुड़ा होता है?",
        answers: shuffle([
            { text: "प्रमस्तिष्क से", correct: false },
            { text: "अनुमस्तिष्क से", correct: false },
            { text: "मेडुला ऑब्लांगेटा से", correct: true },
            { text: "पोंस से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेरुरज्जु मस्तिष्क के सबसे निचले हिस्से, मेडुला ऑब्लांगेटा, का विस्तार है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह फोरामेन मैग्नम नामक खोपड़ी के एक बड़े छिद्र से शुरू होता है।"
    },
    {
        question: "प्रश्न 22. 'मेनिनजाइटिस' क्या है?",
        answers: shuffle([
            { text: "मेरुरज्जु में चोट", correct: false },
            { text: "मस्तिष्क का ट्यूमर", correct: false },
            { text: "मेनिनजेस (मस्तिष्क और मेरुरज्जु की झिल्लियां) की सूजन", correct: true },
            { text: "तंत्रिका का टूटना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेनिनजाइटिस एक गंभीर संक्रमण है जिसके कारण मस्तिष्क और मेरुरज्जु को ढकने वाली सुरक्षात्मक झिल्लियों (मेनिनजेस) में सूजन आ जाती है।"
    },
    {
        question: "प्रश्न 23. गर्दन के क्षेत्र से निकलने वाली मेरु तंत्रिकाओं को क्या कहते हैं?",
        answers: shuffle([
            { text: "वक्षीय (Thoracic) तंत्रिकाएं", correct: false },
            { text: "ग्रीवा (Cervical) तंत्रिकाएं", correct: true },
            { text: "कटि (Lumbar) तंत्रिकाएं", correct: false },
            { text: "त्रिक (Sacral) तंत्रिकाएं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गर्दन क्षेत्र में C1 से C8 तक 8 जोड़ी ग्रीवा (सर्वाइकल) मेरु तंत्रिकाएं होती हैं।"
    },
    {
        question: "प्रश्न 24. मेरुरज्जु की चोट के कारण शरीर के निचले आधे हिस्से का पक्षाघात (paralysis) क्या कहलाता है?",
        answers: shuffle([
            { text: "क्वाड्रीप्लेजिया (Quadriplegia)", correct: false },
            { text: "पैराप्लेजिया (Paraplegia)", correct: true },
            { text: "हेमिप्लेजिया (Hemiplegia)", correct: false },
            { text: "मोनोप्लेजिया (Monoplegia)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पैराप्लेजिया में आमतौर पर वक्षीय (thoracic) या कटि (lumbar) क्षेत्र में मेरुरज्जु की चोट के कारण दोनों पैरों और धड़ के निचले हिस्से की गति और संवेदना समाप्त हो जाती है।"
    },
    {
        question: "प्रश्न 25. इंटरन्यूरॉन (Interneurons) कहाँ पाए जाते हैं?",
        answers: shuffle([
            { text: "मांसपेशियों में", correct: false },
            { text: "त्वचा में", correct: false },
            { text: "केंद्रीय तंत्रिका तंत्र (मस्तिष्क और मेरुरज्जु) के भीतर", correct: true },
            { text: "पृष्ठीय जड़ गैन्ग्लिया में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंटरन्यूरॉन या साहचर्य न्यूरॉन, संवेदी और मोटर न्यूरॉन्स के बीच संबंध बनाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये पूरी तरह से CNS (मस्तिष्क और मेरुरज्जु) के भीतर स्थित होते हैं और प्रतिवर्ती चाप में एक महत्वपूर्ण भूमिका निभाते हैं।"
    },
    {
        question: "प्रश्न 26. धूसर द्रव्य का रंग 'धूसर' (grey) क्यों होता है?",
        answers: shuffle([
            { text: "मायेलिन शीथ की उपस्थिति के कारण", correct: false },
            { text: "मायेलिन शीथ की अनुपस्थिति के कारण", correct: true },
            { text: "रक्त वाहिकाओं की अधिकता के कारण", correct: false },
            { text: "वसा की कमी के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धूसर द्रव्य मुख्य रूप से न्यूरॉन कोशिका काय, डेंड्राइट और अनमायेलिनेटेड एक्सॉन से बना होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> मायेलिन (जो सफेद रंग की होती है) की कमी के कारण इसका रंग धूसर दिखाई देता है।"
    },
    {
        question: "प्रश्न 27. डायाफ्राम (सांस लेने वाली मुख्य मांसपेशी) को कौन सी मेरु तंत्रिका नियंत्रित करती है?",
        answers: shuffle([
            { text: "फ्रेनिक तंत्रिका (Phrenic nerve)", correct: true },
            { text: "साइटिक तंत्रिका (Sciatic nerve)", correct: false },
            { text: "रेडियल तंत्रिका (Radial nerve)", correct: false },
            { text: "फेशियल तंत्रिका (Facial nerve)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फ्रेनिक तंत्रिका मुख्य रूप से ग्रीवा मेरु तंत्रिकाओं (C3, C4, C5) से निकलती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह डायाफ्राम के संकुचन को नियंत्रित करती है, जो सांस लेने के लिए आवश्यक है।"
    },
    {
        question: "प्रश्न 28. मेरुरज्जु के अंत में पतले, धागे जैसी संरचना जो इसे कॉक्सिक्स से जोड़ती है, क्या कहलाती है?",
        answers: shuffle([
            { text: "कॉडा इक्विना", correct: false },
            { text: "कोनस मेड्युलैरिस", correct: false },
            { text: "फिल्लम टर्मिनल (Filum terminale)", correct: true },
            { text: "अधर जड़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फिल्लम टर्मिनल पिया मेटर का एक नाजुक रेशा है जो मेरुरज्जु के शंक्वाकार सिरे (कोनस मेड्युलैरिस) से नीचे की ओर कॉक्सिक्स (पूंछ की हड्डी) तक जाता है और इसे स्थिर करने में मदद करता है।"
    },
    {
        question: "प्रश्न 29. शरीर का कौन सा तंत्रिका तंत्र मेरुरज्जु के पार्श्व सींग (Lateral horns) से उत्पन्न होता है?",
        answers: shuffle([
            { text: "कायिक तंत्रिका तंत्र", correct: false },
            { text: "अनुकंपी तंत्रिका तंत्र (Sympathetic division)", correct: true },
            { text: "परानुकंपी तंत्रिका तंत्र (Parasympathetic division)", correct: false },
            { text: "संवेदी तंत्रिका तंत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्वायत्त तंत्रिका तंत्र के अनुकंपी प्रभाग के प्रीगैंग्लिओनिक न्यूरॉन्स के कोशिका काय मेरुरज्जु के वक्षीय और ऊपरी कटि खंडों के पार्श्व सींगों में स्थित होते हैं।"
    },
    {
        question: "प्रश्न 30. मेरुरज्जु की चोट के कारण चारों अंगों का पक्षाघात क्या कहलाता है?",
        answers: shuffle([
            { text: "पैराप्लेजिया", correct: false },
            { text: "क्वाड्रीप्लेजिया (टेट्राप्लेजिया)", correct: true },
            { text: "हेमिप्लेजिया", correct: false },
            { text: "डिप्लेजिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्वाड्रीप्लेजिया गर्दन (ग्रीवा) क्षेत्र में मेरुरज्जु की चोट के कारण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इससे दोनों हाथों और दोनों पैरों में गति और संवेदना का नुकसान होता है।"
    },
    {
        question: "प्रश्न 31. प्रतिवर्ती चाप में, प्रभावक (Effector) क्या होता है?",
        answers: shuffle([
            { text: "वह अंग जो उत्तेजना का पता लगाता है", correct: false },
            { text: "वह न्यूरॉन जो संकेत को CNS तक ले जाता है", correct: false },
            { text: "वह अंग जो प्रतिक्रिया करता है (जैसे मांसपेशी या ग्रंथि)", correct: true },
            { text: "वह न्यूरॉन जो CNS से संकेत लाता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रभावक शरीर का वह हिस्सा होता है जो मोटर न्यूरॉन से आदेश प्राप्त करने के बाद वास्तविक प्रतिक्रिया उत्पन्न करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जैसे किसी मांसपेशी का सिकुड़ना या किसी ग्रंथि का स्राव करना।"
    },
    {
        question: "प्रश्न 32. वयस्क मनुष्य में मेरुरज्जु की औसत लंबाई कितनी होती है?",
        answers: shuffle([
            { text: "लगभग 25 सेमी", correct: false },
            { text: "लगभग 45 सेमी", correct: true },
            { text: "लगभग 65 सेमी", correct: false },
            { text: "लगभग 100 सेमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक औसत वयस्क में, मेरुरज्जु की लंबाई लगभग 45 सेमी (18 इंच) होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मेडुला ऑब्लांगेटा से पहली या दूसरी कटि कशेरुका (L1/L2) तक फैली होती है।"
    },
    {
        question: "प्रश्न 33. मेरुरज्जु का शंक्वाकार (cone-shaped) निचला सिरा क्या कहलाता है?",
        answers: shuffle([
            { text: "कॉडा इक्विना", correct: false },
            { text: "कोनस मेड्युलैरिस (Conus medullaris)", correct: true },
            { text: "फिल्लम टर्मिनल", correct: false },
            { text: "स्पाइनल गैन्ग्लिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोनस मेड्युलैरिस मेरुरज्जु का टेपर्ड, निचला सिरा है, जो आमतौर पर L1 और L2 कशेरुकाओं के स्तर पर समाप्त होता है।"
    },
    {
        question: "प्रश्न 34. कौन सी संरचना केवल संवेदी न्यूरॉन्स से बनी होती है?",
        answers: shuffle([
            { text: "अधर जड़ (Ventral root)", correct: false },
            { text: "पृष्ठीय जड़ (Dorsal root)", correct: true },
            { text: "मेरु तंत्रिका (Spinal nerve)", correct: false },
            { text: "अधर सींग (Ventral horn)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृष्ठीय जड़ पूरी तरह से संवेदी न्यूरॉन्स के एक्सॉन से बनी होती है जो शरीर से जानकारी मेरुरज्जु में लाते हैं।"
    },
    {
        question: "प्रश्न 35. त्वचा के उस क्षेत्र को क्या कहते हैं जिसे एक ही मेरु तंत्रिका द्वारा आपूर्ति की जाती है?",
        answers: shuffle([
            { text: "मायोटोम (Myotome)", correct: false },
            { text: "डर्माटोम (Dermatome)", correct: true },
            { text: "न्यूरोटोम (Neurotome)", correct: false },
            { text: "स्केलेरोटोम (Sclerotome)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डर्माटोम त्वचा का एक क्षेत्र है जिसकी संवेदी आपूर्ति मुख्य रूप से एक ही पृष्ठीय जड़ से निकलने वाले तंतुओं द्वारा होती है।"
    },
    {
        question: "प्रश्न 36. मेरुरज्जु की सबसे बाहरी और सबसे मजबूत मेनिन्क्स (झिल्ली) कौन सी है?",
        answers: shuffle([
            { text: "पिया मेटर", correct: false },
            { text: "एरेक्नॉइड मेटर", correct: false },
            { text: "ड्यूरा मेटर", correct: true },
            { text: "कोरोइड प्लेक्सस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ड्यूरा मेटर, जिसका अर्थ 'कठोर माँ' है, मेनिनजेस की सबसे बाहरी, मोटी और सबसे टिकाऊ परत है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मेरुरज्जु और मस्तिष्क को एक मजबूत सुरक्षात्मक आवरण प्रदान करती है।"
    },
    {
        question: "प्रश्न 37. एक मोनोसिनेप्टिक रिफ्लेक्स में कितने सिनेप्स शामिल होते हैं?",
        answers: shuffle([
            { text: "शून्य", correct: false },
            { text: "एक", correct: true },
            { text: "दो", correct: false },
            { text: "अनेक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोनोसिनेप्टिक रिफ्लेक्स सबसे सरल प्रतिवर्ती चाप है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें संवेदी न्यूरॉन और मोटर न्यूरॉन के बीच केवल एक सिनेप्स होता है (कोई इंटरन्यूरॉन नहीं होता)। उदाहरण: नी-जर्क रिफ्लेक्स।"
    },
    {
        question: "प्रश्न 38. स्पाइना बिफिडा (Spina Bifida) क्या है?",
        answers: shuffle([
            { text: "मेरुरज्जु का संक्रमण", correct: false },
            { text: "एक जन्मजात दोष जिसमें कशेरुक दंड ठीक से बंद नहीं होता", correct: true },
            { text: "मेरुरज्जु में ट्यूमर", correct: false },
            { text: "एक आनुवंशिक मांसपेशी रोग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्पाइना बिफिडा एक न्यूरल ट्यूब दोष है जो भ्रूण के विकास के दौरान होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें मेरुरज्जु और मेनिनजेस को घेरने वाली हड्डियां पूरी तरह से नहीं बनती हैं, जिससे मेरुरज्जु बाहर निकल सकती है।"
    },
    {
        question: "प्रश्न 39. साइटिक तंत्रिका (Sciatic nerve), शरीर की सबसे लंबी तंत्रिका, मेरुरज्जु के किस क्षेत्र से निकलती है?",
        answers: shuffle([
            { text: "ग्रीवा (Cervical)", correct: false },
            { text: "वक्षीय (Thoracic)", correct: false },
            { text: "कटि और त्रिक (Lumbar and Sacral)", correct: true },
            { text: "अनुत्रिक (Coccygeal)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> साइटिक तंत्रिका L4 से S3 तक की मेरु तंत्रिकाओं की जड़ों के संयोजन से बनती है और पैर के पिछले हिस्से तक जाती है।"
    },
    {
        question: "प्रश्न 40. मेरुरज्जु के ग्रे मैटर में सिनैप्स का क्या कार्य है?",
        answers: shuffle([
            { text: "सूचना का तेजी से संचरण", correct: false },
            { text: "सूचना का एकीकरण और प्रसंस्करण", correct: true },
            { text: "केवल मोटर संकेतों को उत्पन्न करना", correct: false },
            { text: "मेरुरज्जु को पोषण देना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रे मैटर में स्थित सिनेप्स वह स्थान है जहाँ संवेदी सूचना को संसाधित किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे इंटरन्यूरॉन्स द्वारा एकीकृत किया जाता है और मोटर प्रतिक्रियाएं उत्पन्न की जाती हैं।"
    },
    {
        question: "प्रश्न 41. एनेस्थीसिया (संवेदनाहारी) के लिए एपिड्यूरल इंजेक्शन कहाँ दिया जाता है?",
        answers: shuffle([
            { text: "सबएरेक्नॉइड स्पेस में", correct: false },
            { text: "ड्यूरा मेटर और कशेरुका के बीच के एपिड्यूरल स्पेस में", correct: true },
            { text: "सीधे मेरुरज्जु में", correct: false },
            { text: "पिया मेटर के नीचे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एपिड्यूरल एनेस्थीसिया में, दवा को एपिड्यूरल स्पेस में इंजेक्ट किया जाता है, जो ड्यूरा मेटर के बाहर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह दवा मेरु तंत्रिका की जड़ों को सुन्न कर देती है।"
    },
    {
        question: "प्रश्न 42. मेरुरज्जु की केंद्रीय नाल (Central canal) किससे भरी होती है?",
        answers: shuffle([
            { text: "रक्त से", correct: false },
            { text: "लसीका से", correct: false },
            { text: "वसा ऊतक से", correct: false },
            { text: "सेरिब्रोस्पाइनल द्रव (CSF) से", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केंद्रीय नाल एक संकीर्ण ट्यूब है जो मेरुरज्जु की पूरी लंबाई में धूसर द्रव्य के केंद्र से होकर गुजरती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें CSF भरा होता है।"
    },
    {
        question: "प्रश्न 43. यदि मेरुरज्जु की अधर जड़ (Ventral root) कट जाए, तो क्या परिणाम होगा?",
        answers: shuffle([
            { text: "संवेदना का नुकसान (Loss of sensation)", correct: false },
            { text: "मोटर क्रिया का नुकसान (Loss of motor function)", correct: true },
            { text: "प्रतिवर्ती क्रियाओं का तेज होना", correct: false },
            { text: "दर्द का बढ़ना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूंकि अधर जड़ मोटर आदेशों को मांसपेशियों तक ले जाती है, इसके कटने से उस तंत्रिका द्वारा नियंत्रित मांसपेशियों में लकवा (flaccid paralysis) हो जाएगा।<br><br><i class='fa-solid fa-angles-right icon'></i> संवेदना बरकरार रहेगी।"
    },
    {
        question: "प्रश्न 44. मल्टीपल स्केलेरोसिस (Multiple Sclerosis) में शरीर की प्रतिरक्षा प्रणाली किसे नष्ट करती है?",
        answers: shuffle([
            { text: "न्यूरॉन के कोशिका काय को", correct: false },
            { text: "मायेलिन शीथ को", correct: true },
            { text: "सिनेप्स को", correct: false },
            { text: "रक्त वाहिकाओं को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मल्टीपल स्केलेरोसिस एक ऑटोइम्यून बीमारी है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें प्रतिरक्षा प्रणाली केंद्रीय तंत्रिका तंत्र (मस्तिष्क और मेरुरज्जु) में एक्सॉन के सुरक्षात्मक आवरण (मायेलिन शीथ) पर हमला करती है, जिससे तंत्रिका संचार बाधित होता है।"
    },
    {
        question: "प्रश्न 45. कौन सी संरचना केवल मोटर न्यूरॉन्स से बनी होती है?",
        answers: shuffle([
            { text: "पृष्ठीय जड़ (Dorsal root)", correct: false },
            { text: "अधर जड़ (Ventral root)", correct: true },
            { text: "मेरु तंत्रिका (Spinal nerve)", correct: false },
            { text: "पृष्ठीय जड़ गैन्ग्लिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधर जड़ पूरी तरह से मोटर न्यूरॉन्स के एक्सॉन से बनी होती है जो मेरुरज्जु से बाहर मांसपेशियों और ग्रंथियों तक जाते हैं।"
    },
    {
        question: "प्रश्न 46. गर्म वस्तु को छूने पर हाथ का तुरंत हटना किस प्रकार की क्रिया का उदाहरण है?",
        answers: shuffle([
            { text: "ऐच्छिक क्रिया", correct: false },
            { text: "सीखी हुई प्रतिक्रिया", correct: false },
            { text: "मेरुरज्जु प्रतिवर्ती क्रिया (Spinal reflex)", correct: true },
            { text: "हार्मोनल प्रतिक्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक सुरक्षात्मक प्रतिवर्ती क्रिया है जो बहुत तेज होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका कारण यह है कि संकेत केवल मेरुरज्जु तक जाता है और वहीं से प्रतिक्रिया का आदेश मिल जाता है, इसमें सोचने की प्रक्रिया (मस्तिष्क) शामिल नहीं होती।"
    },
    {
        question: "प्रश्न 47. उस मांसपेशी समूह को क्या कहते हैं जिसे एक ही मेरु तंत्रिका द्वारा आपूर्ति की जाती है?",
        answers: shuffle([
            { text: "डर्माटोम", correct: false },
            { text: "मायोटोम", correct: true },
            { text: "न्यूरोटोम", correct: false },
            { text: "ओस्टियोटोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मायोटोम मांसपेशियों का एक समूह है जिसकी मोटर आपूर्ति मुख्य रूप से एक ही मेरु तंत्रिका की अधर जड़ से निकलने वाले तंतुओं द्वारा होती है।"
    },
    {
        question: "प्रश्न 48. मेरुरज्जु की सबसे भीतरी और नाजुक मेनिन्क्स (झिल्ली) कौन सी है?",
        answers: shuffle([
            { text: "ड्यूरा मेटर", correct: false },
            { text: "एरेक्नॉइड मेटर", correct: false },
            { text: "पिया मेटर", correct: true },
            { text: "एपेंडाइमा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पिया मेटर, जिसका अर्थ 'कोमल माँ' है, सबसे भीतरी और नाजुक परत है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह सीधे मेरुरज्जु और मस्तिष्क की सतह से चिपकी रहती है और रक्त वाहिकाओं को ले जाती है।"
    },
    {
        question: "प्रश्न 49. नी-जर्क (घुटने का झटका) रिफ्लेक्स को जांचने से डॉक्टर किसका आकलन करते हैं?",
        answers: shuffle([
            { text: "मस्तिष्क के कार्य का", correct: false },
            { text: "मेरुरज्जु के L2-L4 स्तर के कार्य का", correct: true },
            { text: "हृदय की स्थिति का", correct: false },
            { text: "पाचन तंत्र का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नी-जर्क रिफ्लेक्स एक मोनोसिनेप्टिक स्ट्रेच रिफ्लेक्स है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मुख्य रूप से कटि (lumbar) क्षेत्र में L2, L3, और L4 मेरु खंडों की अखंडता का परीक्षण करता है।"
    },
    {
        question: "प्रश्न 50. मेरुरज्जु का कौन सा भाग स्वायत्त (autonomic) क्रियाओं से संबंधित है?",
        answers: shuffle([
            { text: "पृष्ठीय सींग", correct: false },
            { text: "अधर सींग", correct: false },
            { text: "पार्श्व सींग (Lateral horn)", correct: true },
            { text: "केंद्रीय नाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पार्श्व सींग, जो केवल वक्षीय और ऊपरी कटि क्षेत्रों में मौजूद होता है, में स्वायत्त तंत्रिका तंत्र (विशेष रूप से अनुकंपी प्रभाग) के न्यूरॉन्स होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये अनैच्छिक कार्यों को नियंत्रित करते हैं।"
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