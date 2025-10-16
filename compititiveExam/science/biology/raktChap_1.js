const questions = [
    {
        topHeading: "रक्तचाप पर आधारित 34 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. एक स्वस्थ वयस्क व्यक्ति का सामान्य रक्तचाप (Blood Pressure) कितना होता है?",
        answers: shuffle([
            { text: "140/90 mm Hg", correct: false },
            { text: "120/80 mm Hg", correct: true },
            { text: "80/120 mm Hg", correct: false },
            { text: "100/60 mm Hg", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक सामान्य वयस्क का औसत रक्तचाप 120/80 mm Hg माना जाता है, जहाँ 120 सिस्टोलिक दाब और 80 डायस्टोलिक दाब है।"
    },
    {
        question: "प्रश्न 2. रक्तचाप मापने वाले यंत्र को क्या कहते हैं?",
        answers: shuffle([
            { text: "बैरोमीटर", correct: false },
            { text: "लैक्टोमीटर", correct: false },
            { text: "थर्मामीटर", correct: false },
            { text: "स्फिग्मोमैनोमीटर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्फिग्मोमैनोमीटर (Sphygmomanometer), जिसे सामान्यतः बीपी मशीन भी कहा जाता है, का उपयोग धमनियों में रक्त के दबाव को मापने के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 3. रक्तचाप की रीडिंग में '120/80 mm Hg' में '120' क्या दर्शाता है?",
        answers: shuffle([
            { text: "डायस्टोलिक दाब (Diastolic Pressure)", correct: false },
            { text: "सिस्टोलिक दाब (Systolic Pressure)", correct: true },
            { text: "पल्स दाब (Pulse Pressure)", correct: false },
            { text: "औसत दाब (Mean Pressure)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिस्टोलिक दाब (या प्रकुंचन दाब) वह अधिकतम दाब है जो हृदय के संकुचन (Systole) के समय धमनियों पर पड़ता है जब हृदय रक्त को बाहर पंप करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ऊपरी संख्या होती है।"
    },
    {
        question: "प्रश्न 4. रक्तचाप की रीडिंग में '120/80 mm Hg' में '80' क्या दर्शाता है?",
        answers: shuffle([
            { text: "सिस्टोलिक दाब", correct: false },
            { text: "डायस्टोलिक दाब", correct: true },
            { text: "हृदय गति", correct: false },
            { text: "रक्त का आयतन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डायस्टोलिक दाब (या अनुशिथिलन दाब) वह न्यूनतम दाब है जो हृदय की धड़कनों के बीच हृदय के शिथिल (Diastole) होने पर धमनियों में बना रहता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह निचली संख्या होती है।"
    },
    {
        question: "प्रश्न 5. उच्च रक्तचाप (Hypertension) की स्थिति क्या है?",
        answers: shuffle([
            { text: "जब रक्तचाप 120/80 mm Hg से कम हो", correct: false },
            { text: "जब रक्तचाप लगातार 140/90 mm Hg या उससे अधिक हो", correct: true },
            { text: "जब केवल सिस्टोलिक दाब बढ़ता है", correct: false },
            { text: "जब हृदय गति 100 से अधिक हो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब किसी व्यक्ति का रक्तचाप स्थायी रूप से 140/90 mm Hg या इससे ऊपर बना रहता है, तो इस स्थिति को उच्च रक्तचाप या हाइपरटेंशन कहा जाता है।"
    },
    {
        question: "प्रश्न 6. 'साइलेंट किलर' (Silent Killer) किस बीमारी को कहा जाता है?",
        answers: shuffle([
            { text: "मधुमेह (Diabetes)", correct: false },
            { text: "कैंसर (Cancer)", correct: false },
            { text: "उच्च रक्तचाप (Hypertension)", correct: true },
            { text: "एड्स (AIDS)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उच्च रक्तचाप को 'साइलेंट किलर' कहा जाता है क्योंकि इसके अक्सर कोई स्पष्ट प्रारंभिक लक्षण नहीं होते हैं, लेकिन यह धीरे-धीरे हृदय, मस्तिष्क, गुर्दे और आंखों जैसे महत्वपूर्ण अंगों को नुकसान पहुंचा सकता है।"
    },
    {
        question: "प्रश्न 7. रक्तचाप को मापने की इकाई क्या है?",
        answers: shuffle([
            { text: "न्यूटन प्रति वर्ग मीटर", correct: false },
            { text: "जूल", correct: false },
            { text: "पारा का मिलीमीटर (mm Hg)", correct: true },
            { text: "पास्कल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रक्तचाप को पारे के मिलीमीटर (millimeters of mercury) में मापा जाता है, जिसे mm Hg के रूप में दर्शाया जाता है।"
    },
    {
        question: "प्रश्न 8. निम्न रक्तचाप (Hypotension) की स्थिति क्या है?",
        answers: shuffle([
            { text: "जब रक्तचाप 120/80 mm Hg हो", correct: false },
            { text: "जब रक्तचाप 140/90 mm Hg हो", correct: false },
            { text: "जब रक्तचाप 90/60 mm Hg से कम हो", correct: true },
            { text: "जब पल्स रेट कम हो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब रक्तचाप का स्तर सामान्य से काफी नीचे गिर जाता है (आमतौर पर 90/60 mm Hg से कम), तो इस स्थिति को निम्न रक्तचाप या हाइपोटेंशन कहते हैं।"
    },
    {
        question: "प्रश्न 9. दौड़ते या व्यायाम करते समय व्यक्ति का रक्तचाप पर क्या प्रभाव पड़ता है?",
        answers: shuffle([
            { text: "कम हो जाता है", correct: false },
            { text: "बढ़ जाता है", correct: true },
            { text: "कोई परिवर्तन नहीं होता", correct: false },
            { text: "पहले घटता है फिर बढ़ता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शारीरिक गतिविधि के दौरान, मांसपेशियों को अधिक ऑक्सीजन और रक्त की आवश्यकता होती है, जिसे पूरा करने के लिए हृदय तेजी से और अधिक बल से रक्त पंप करता है, जिससे रक्तचाप अस्थायी रूप से बढ़ जाता है।"
    },
    {
        question: "प्रश्न 10. रक्तचाप के नियंत्रण में कौन सा हार्मोन महत्वपूर्ण भूमिका निभाता है?",
        answers: shuffle([
            { text: "इंसुलिन", correct: false },
            { text: "थायरोक्सिन", correct: false },
            { text: "एड्रेनालाईन (एपिनेफ्रीन)", correct: true },
            { text: "एस्ट्रोजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एड्रेनालाईन, जिसे 'लड़ो या भागो' (Fight or Flight) हार्मोन भी कहा जाता है, तनाव या उत्तेजना की स्थिति में हृदय गति और रक्त वाहिकाओं को सिकोड़कर रक्तचाप को तेजी से बढ़ाता है।"
    },
    {
        question: "प्रश्न 11. भोजन में किस तत्व की अधिकता से उच्च रक्तचाप हो सकता है?",
        answers: shuffle([
            { text: "पोटेशियम", correct: false },
            { text: "कैल्शियम", correct: false },
            { text: "सोडियम (नमक)", correct: true },
            { text: "आयरन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोडियम शरीर में तरल पदार्थ को बनाए रखता है, जिससे रक्त का आयतन बढ़ जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> बढ़ा हुआ आयतन धमनियों पर अतिरिक्त दबाव डालता है, जिससे रक्तचाप बढ़ सकता है।"
    },
    {
        question: "प्रश्न 12. सिस्टोलिक और डायस्टोलिक दाब के बीच के अंतर को क्या कहा जाता है?",
        answers: shuffle([
            { text: "औसत रक्तचाप", correct: false },
            { text: "हृदय दाब", correct: false },
            { text: "पल्स दाब (Pulse Pressure)", correct: true },
            { text: "रक्त प्रवाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पल्स दाब की गणना सिस्टोलिक दाब से डायस्टोलिक दाब को घटाकर की जाती है (उदाहरण: 120 - 80 = 40 mm Hg)।<br><br><i class='fa-solid fa-angles-right icon'></i> यह हृदय स्वास्थ्य का एक महत्वपूर्ण संकेतक है।"
    },
    {
        question: "प्रश्न 13. रक्तचाप को नियंत्रित करने वाला मुख्य अंग कौन सा है?",
        answers: shuffle([
            { text: "यकृत (Liver)", correct: false },
            { text: "फेफड़े (Lungs)", correct: false },
            { text: "वृक्क (Kidney)", correct: true },
            { text: "अग्न्याशय (Pancreas)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुर्दे शरीर में तरल पदार्थ और नमक की मात्रा को नियंत्रित करके रक्तचाप के दीर्घकालिक नियमन में एक केंद्रीय भूमिका निभाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> रेनिन-एंजियोटेंसिन-एल्डोस्टेरोन प्रणाली (RAAS) के माध्यम से वे रक्तचाप को नियंत्रित करते हैं।"
    },
    {
        question: "प्रश्न 14. रक्तचाप आमतौर पर किस धमनी (Artery) से मापा जाता है?",
        answers: shuffle([
            { text: "कैरोटिड धमनी (गर्दन में)", correct: false },
            { text: "फेमोरल धमनी (जांघ में)", correct: false },
            { text: "रेडियल धमनी (कलाई में)", correct: false },
            { text: "ब्रेकियल धमनी (बांह में)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मानक रक्तचाप माप के लिए, स्फिग्मोमैनोमीटर का कफ ऊपरी बांह पर लपेटा जाता है और ब्रेकियल धमनी (Brachial Artery) में रक्त प्रवाह को सुना जाता है।"
    },
    {
        question: "प्रश्न 15. उम्र बढ़ने के साथ सामान्यतः रक्तचाप पर क्या प्रभाव पड़ता है?",
        answers: shuffle([
            { text: "यह कम हो जाता है", correct: false },
            { text: "यह बढ़ता जाता है", correct: true },
            { text: "यह स्थिर रहता है", correct: false },
            { text: "यह बहुत अस्थिर हो जाता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उम्र के साथ, धमनियां अपनी लोच खो देती हैं और कठोर हो जाती हैं, जिससे रक्त प्रवाह के प्रति प्रतिरोध बढ़ जाता है और परिणामस्वरूप रक्तचाप में वृद्धि होती है।"
    },
    {
        question: "प्रश्न 16. रक्तचाप के नियमन में मस्तिष्क का कौन सा भाग शामिल होता है?",
        answers: shuffle([
            { text: "सेरिब्रम", correct: false },
            { text: "सेरिबैलम", correct: false },
            { text: "मेडुला ऑब्लांगेटा", correct: true },
            { text: "हाइपोथैलेमस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेडुला ऑब्लांगेटा में कार्डियोवैस्कुलर केंद्र होता है जो स्वायत्त तंत्रिका तंत्र के माध्यम से हृदय गति, हृदय के संकुचन बल और रक्त वाहिकाओं के व्यास को नियंत्रित करके रक्तचाप को नियंत्रित करता है।"
    },
    {
        question: "प्रश्न 17. 'व्हाइट कोट हाइपरटेंशन' (White Coat Hypertension) क्या है?",
        answers: shuffle([
            { text: "केवल रात में रक्तचाप का बढ़ना", correct: false },
            { text: "केवल सफेद कोट पहनने से रक्तचाप का बढ़ना", correct: false },
            { text: "डॉक्टर के क्लिनिक या अस्पताल में रक्तचाप का बढ़ना", correct: true },
            { text: "सर्दियों में रक्तचाप का बढ़ना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक ऐसी स्थिति है जिसमें व्यक्ति का रक्तचाप केवल चिकित्सा सेटिंग (जैसे डॉक्टर के कार्यालय में) में चिंता या तनाव के कारण बढ़ जाता है, जबकि घर पर सामान्य रहता है।"
    },
    {
        question: "प्रश्न 18. लंबे समय तक अनियंत्रित उच्च रक्तचाप से कौन सा अंग खराब हो सकता है?",
        answers: shuffle([
            { text: "हृदय", correct: false },
            { text: "मस्तिष्क", correct: false },
            { text: "गुर्दे", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लगातार उच्च रक्तचाप धमनियों की दीवारों को नुकसान पहुंचाता है, जिससे हृदयघात (Heart Attack), स्ट्रोक (Brain Stroke), गुर्दे की विफलता (Kidney Failure) और दृष्टि हानि जैसी गंभीर स्वास्थ्य समस्याएं हो सकती हैं।"
    },
    {
        question: "प्रश्न 19. रक्त वाहिकाओं के संकुचन (Vasoconstriction) से रक्तचाप पर क्या प्रभाव पड़ता है?",
        answers: shuffle([
            { text: "यह बढ़ता है", correct: true },
            { text: "यह घटता है", correct: false },
            { text: "कोई प्रभाव नहीं पड़ता", correct: false },
            { text: "यह पहले बढ़ता है, फिर घटता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब रक्त वाहिकाएं सिकुड़ती हैं, तो रक्त के प्रवाह के लिए मार्ग संकीर्ण हो जाता है, जिससे रक्त प्रवाह का प्रतिरोध बढ़ता है और परिणामस्वरूप रक्तचाप बढ़ जाता है।"
    },
    {
        question: "प्रश्न 20. रक्तचाप को कम करने के लिए दी जाने वाली दवाओं को सामान्यतः क्या कहते हैं?",
        answers: shuffle([
            { text: "एंटीबायोटिक्स", correct: false },
            { text: "एंटीहाइपरटेन्सिव्स", correct: true },
            { text: "एनाल्जेसिक", correct: false },
            { text: "एंटीपायरेटिक्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंटीहाइपरटेन्सिव्स दवाओं का वह वर्ग है जिनका उपयोग उच्च रक्तचाप के इलाज के लिए किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इनमें बीटा-ब्लॉकर्स, मूत्रवर्धक (Diuretics) और ACE इन्हिबिटर्स जैसी कई प्रकार की दवाएं शामिल हैं।"
    },
    {
        question: "प्रश्न 21. रक्तचाप के मान को कौन से दो मुख्य कारक निर्धारित करते हैं?",
        answers: shuffle([
            { text: "ऊंचाई और वजन", correct: false },
            { text: "हृदय गति और सांस की दर", correct: false },
            { text: "कार्डियक आउटपुट और पेरिफेरल रेजिस्टेंस", correct: true },
            { text: "रक्त शर्करा और कोलेस्ट्रॉल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रक्तचाप = कार्डियक आउटपुट (हृदय द्वारा प्रति मिनट पंप किए गए रक्त की मात्रा) × पेरिफेरल रेजिस्टेंस (रक्त वाहिकाओं द्वारा रक्त प्रवाह में उत्पन्न प्रतिरोध)।"
    },
    {
        question: "प्रश्न 22. कौन सा जीवनशैली कारक उच्च रक्तचाप के जोखिम को कम करने में मदद करता है?",
        answers: shuffle([
            { text: "धूम्रपान करना", correct: false },
            { text: "नियमित व्यायाम", correct: true },
            { text: "उच्च नमक वाला आहार", correct: false },
            { text: "तनावपूर्ण जीवन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नियमित शारीरिक गतिविधि हृदय को मजबूत बनाती है, जिससे वह कम प्रयास में अधिक रक्त पंप कर पाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इससे धमनियों पर दबाव कम होता है और रक्तचाप घटता है।"
    },
    {
        question: "प्रश्न 23. सोते समय व्यक्ति का रक्तचाप सामान्यतः कैसा होता है?",
        answers: shuffle([
            { text: "बढ़ जाता है", correct: false },
            { text: "काफी कम हो जाता है", correct: true },
            { text: "दिन के बराबर रहता है", correct: false },
            { text: "बहुत अधिक उतार-चढ़ाव होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नींद के दौरान, शरीर आराम की स्थिति में होता है और चयापचय दर धीमी हो जाती है, जिससे हृदय गति और रक्तचाप में स्वाभाविक रूप से गिरावट आती है (लगभग 10-20%)।"
    },
    {
        question: "प्रश्न 24. रक्तचाप मापने के दौरान सुनाई देने वाली ध्वनियों को क्या कहते हैं?",
        answers: shuffle([
            { text: "हृदय की ध्वनि (लब-डब)", correct: false },
            { text: "मरमर ध्वनि", correct: false },
            { text: "कोरोटकॉफ ध्वनियाँ", correct: true },
            { text: "श्वसन ध्वनियाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब स्फिग्मोमैनोमीटर के कफ का दबाव धीरे-धीरे कम किया जाता है, तो धमनी में रक्त के turbulent प्रवाह के कारण जो टैपिंग ध्वनियाँ सुनाई देती हैं, उन्हें कोरोटकॉफ ध्वनियाँ (Korotkoff sounds) कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इन्हीं से सिस्टोलिक और डायस्टोलिक दाब का पता लगाया जाता है।"
    },
    {
        question: "प्रश्न 25. रक्त का आयतन (Blood Volume) बढ़ने से रक्तचाप पर क्या प्रभाव पड़ता है?",
        answers: shuffle([
            { text: "रक्तचाप घटता है", correct: false },
            { text: "रक्तचाप बढ़ता है", correct: true },
            { text: "कोई प्रभाव नहीं पड़ता", correct: false },
            { text: "रक्तचाप अस्थिर हो जाता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब रक्त का कुल आयतन बढ़ता है (जैसे कि शरीर में अधिक तरल पदार्थ होने से), तो रक्त वाहिकाओं में अधिक तरल पदार्थ होता है, जो उनकी दीवारों पर अधिक दबाव डालता है, जिससे रक्तचाप बढ़ जाता है।"
    },
    {
        question: "प्रश्न 26. बैरोरिसेप्टर्स (Baroreceptors) क्या हैं और वे कहाँ पाए जाते हैं?",
        answers: shuffle([
            { text: "स्वाद कलिकाएँ; जीभ में", correct: false },
            { text: "दबाव संवेदक; प्रमुख धमनियों की दीवारों में", correct: true },
            { text: "प्रकाश संवेदक; आँखों में", correct: false },
            { text: "तापमान संवेदक; त्वचा में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैरोरिसेप्टर्स विशेष तंत्रिका अंत होते हैं जो कैरोटिड धमनी और महाधमनी चाप (Aortic Arch) में स्थित होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> वे रक्तचाप में होने वाले परिवर्तनों का पता लगाते हैं और मस्तिष्क को संकेत भेजकर इसके त्वरित नियमन में मदद करते हैं।"
    },
    {
        question: "प्रश्न 27. उच्च रक्तचाप के प्रबंधन के लिए अनुशंसित आहार को क्या कहा जाता है?",
        answers: shuffle([
            { text: "कीटो डाइट", correct: false },
            { text: "पैलियो डाइट", correct: false },
            { text: "डैश डाइट (DASH Diet)", correct: true },
            { text: "एटकिंस डाइट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> DASH (Dietary Approaches to Stop Hypertension) आहार में फलों, सब्जियों, साबुत अनाज और कम वसा वाले डेयरी उत्पादों पर जोर दिया जाता है तथा सोडियम, संतृप्त वसा और कोलेस्ट्रॉल को सीमित किया जाता है।"
    },
    {
        question: "प्रश्न 28. किस स्थिति में सिस्टोलिक रक्तचाप सामान्य रहता है लेकिन डायस्टोलिक रक्तचाप बढ़ जाता है?",
        answers: shuffle([
            { text: "आइसोलेटेड सिस्टोलिक हाइपरटेंशन", correct: false },
            { text: "आइसोलेटेड डायस्टोलिक हाइपरटेंशन", correct: true },
            { text: "व्हाइट कोट हाइपरटेंशन", correct: false },
            { text: "हाइपोटेंशन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस स्थिति में, ऊपरी संख्या (सिस्टोलिक) 120-129 mm Hg की सामान्य सीमा में रहती है, लेकिन निचली संख्या (डायस्टोलिक) 80 mm Hg से ऊपर बढ़ जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अक्सर युवा वयस्कों में देखा जाता है।"
    },
    {
        question: "प्रश्न 29. रक्त की श्यानता (Viscosity) या गाढ़ापन बढ़ने से रक्तचाप पर क्या प्रभाव पड़ेगा?",
        answers: shuffle([
            { text: "रक्तचाप कम होगा", correct: false },
            { text: "रक्तचाप बढ़ेगा", correct: true },
            { text: "कोई प्रभाव नहीं पड़ेगा", correct: false },
            { text: "रक्त का प्रवाह रुक जाएगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि रक्त अधिक गाढ़ा है, तो हृदय को उसे रक्त वाहिकाओं के माध्यम से पंप करने के लिए अधिक मेहनत करनी पड़ेगी, जिससे धमनियों पर दबाव बढ़ जाएगा।"
    },
    {
        question: "प्रश्न 30. गर्भावस्था के दौरान होने वाले उच्च रक्तचाप को क्या कहते हैं?",
        answers: shuffle([
            { text: "जेस्टेशनल डायबिटीज", correct: false },
            { text: "प्री-एक्लेमप्सिया", correct: true },
            { text: "मॉर्निंग सिकनेस", correct: false },
            { text: "एनीमिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्री-एक्लेमप्सिया गर्भावस्था की एक गंभीर स्थिति है जिसमें उच्च रक्तचाप के साथ-साथ मूत्र में प्रोटीन जैसे अन्य लक्षण भी दिखाई देते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह आमतौर पर गर्भावस्था के 20वें सप्ताह के बाद विकसित होता है।"
    },
    {
        question: "प्रश्न 31. रेनिन (Renin) नामक एंजाइम कहाँ से स्रावित होता है?",
        answers: shuffle([
            { text: "यकृत से", correct: false },
            { text: "हृदय से", correct: false },
            { text: "मस्तिष्क से", correct: false },
            { text: "गुर्दे (वृक्क) से", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब रक्तचाप कम होता है, तो गुर्दे रेनिन नामक एंजाइम स्रावित करते हैं, जो रेनिन-एंजियोटेंसिन-एल्डोस्टेरोन प्रणाली (RAAS) को सक्रिय करता है, जिसका अंतिम परिणाम रक्तचाप में वृद्धि होता है।"
    },
    {
        question: "प्रश्न 32. वाहिकाविस्फारक (Vasodilators) का रक्तचाप पर क्या प्रभाव होता है?",
        answers: shuffle([
            { text: "वे रक्तचाप बढ़ाते हैं", correct: false },
            { text: "वे रक्तचाप कम करते हैं", correct: true },
            { text: "वे रक्तचाप को स्थिर करते हैं", correct: false },
            { text: "उनका रक्तचाप पर कोई प्रभाव नहीं होता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वाहिकाविस्फारक वे पदार्थ या दवाएं हैं जो रक्त वाहिकाओं को चौड़ा (dilate) या शिथिल करती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इससे रक्त प्रवाह का प्रतिरोध कम हो जाता है और रक्तचाप घट जाता है।"
    },
    {
        question: "प्रश्न 33. पल्स दाब (Pulse Pressure) का बहुत अधिक या बहुत कम होना किसका सूचक हो सकता है?",
        answers: shuffle([
            { text: "अच्छा स्वास्थ्य", correct: false },
            { text: "हृदय रोग का जोखिम", correct: true },
            { text: "फेफड़ों की बीमारी", correct: false },
            { text: "पाचन संबंधी समस्या", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लगातार उच्च पल्स दाब (60 mm Hg से अधिक) अक्सर धमनियों की कठोरता का संकेत होता है और हृदय रोगों के बढ़ते जोखिम से जुड़ा होता है।"
    },
    {
        question: "प्रश्न 34. रक्तचाप दिन के किस समय स्वाभाविक रूप से सबसे कम होता है?",
        answers: shuffle([
            { text: "दोपहर में", correct: false },
            { text: "शाम में", correct: false },
            { text: "देर रात और सुबह के शुरुआती घंटों में", correct: true },
            { text: "सुबह जागने के ठीक बाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सर्कैडियन लय के अनुसार, रक्तचाप आमतौर पर गहरी नींद के दौरान अपने सबसे निचले स्तर पर पहुंचता है और जागने से ठीक पहले बढ़ना शुरू हो जाता है।"
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