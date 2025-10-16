const questions = [
    {
        topHeading: "केन्द्रक पर आधारित 30 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. कोशिका का 'नियंत्रण केंद्र' या 'मस्तिष्क' (Control Center or Brain of the Cell) किसे कहा जाता है?",
        answers: shuffle([
            { text: "माइटोकॉन्ड्रिया", correct: false },
            { text: "राइबोसोम", correct: false },
            { text: "केन्द्रक (Nucleus)", correct: true },
            { text: "गॉल्जी उपकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केन्द्रक कोशिका की अधिकांश आनुवंशिक सामग्री (DNA) को संग्रहीत करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और जीन अभिव्यक्ति को नियंत्रित करके कोशिका की सभी गतिविधियों, वृद्धि और प्रजनन को निर्देशित करता है।"
    },
    {
        question: "प्रश्न 2. केन्द्रक की खोज किस वैज्ञानिक ने की थी?",
        answers: shuffle([
            { text: "रॉबर्ट हुक", correct: false },
            { text: "रॉबर्ट ब्राउन", correct: true },
            { text: "एंटोनी वॉन ल्यूवेनहॉक", correct: false },
            { text: "श्लीडन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्कॉटिश वनस्पतिशास्त्री रॉबर्ट ब्राउन ने 1831 में ऑर्किड कोशिकाओं का अध्ययन करते समय कोशिका के भीतर एक सघन, गोलाकार संरचना की खोज की।<br><br><i class='fa-solid fa-angles-right icon'></i>  और उसे 'न्यूक्लियस' (केन्द्रक) नाम दिया।"
    },
    {
        question: "प्रश्न 3. केन्द्रक में धागे जैसी संरचनाओं का जाल होता है, जिसे क्या कहते हैं?",
        answers: shuffle([
            { text: "गुणसूत्र (Chromosome)", correct: false },
            { text: "क्रोमैटिन (Chromatin)", correct: true },
            { text: "केन्द्रिका (Nucleolus)", correct: false },
            { text: "केन्द्रक द्रव्य (Nucleoplasm)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रोमैटिन DNA और हिस्टोन नामक प्रोटीन से बना एक जटिल जाल है।<br><br><i class='fa-solid fa-angles-right icon'></i>  कोशिका विभाजन के समय यह संघनित होकर मोटे और छोटे धागों जैसी संरचना, गुणसूत्र, का निर्माण करता है।"
    },
    {
        question: "प्रश्न 4. किस प्रकार की कोशिकाओं में सुसंगठित केन्द्रक का अभाव होता है?",
        answers: shuffle([
            { text: "यूकैरियोटिक कोशिका", correct: false },
            { text: "प्रोकैरियोटिक कोशिका", correct: true },
            { text: "पादप कोशिका", correct: false },
            { text: "जंतु कोशिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोकैरियोटिक कोशिकाओं (जैसे जीवाणु) में एक वास्तविक, झिल्ली-बद्ध केन्द्रक नहीं होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  उनका आनुवंशिक पदार्थ कोशिका द्रव्य में 'न्यूक्लियॉइड' नामक क्षेत्र में बिखरा रहता है।"
    },
    {
        question: "प्रश्न 5. केन्द्रक झिल्ली (Nuclear Envelope) की प्रकृति कैसी होती है?",
        answers: shuffle([
            { text: "एकल परत वाली", correct: false },
            { text: "दोहरी परत वाली", correct: true },
            { text: "परत रहित", correct: false },
            { text: "तीन परतों वाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केन्द्रक एक दोहरी झिल्ली से घिरा होता है, जिसे केन्द्रक आवरण या झिल्ली कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसमें एक बाहरी और एक आंतरिक झिल्ली होती है, जिनके बीच पेरी-न्यूक्लियर स्पेस होता है।"
    },
    {
        question: "प्रश्न 6. केन्द्रक झिल्ली में मौजूद छोटे छिद्रों को क्या कहते हैं, जो पदार्थों के आवागमन को नियंत्रित करते हैं?",
        answers: shuffle([
            { text: "प्लाज्मोडेस्मेटा", correct: false },
            { text: "केन्द्रक छिद्र (Nuclear Pores)", correct: true },
            { text: "रंध्र (Stomata)", correct: false },
            { text: "लेंटिसेल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केन्द्रक छिद्र जटिल प्रोटीन संरचनाएं हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो केन्द्रक और कोशिका द्रव्य के बीच RNA और प्रोटीन जैसे अणुओं के चयनात्मक परिवहन को नियंत्रित करती हैं।"
    },
    {
        question: "प्रश्न 7. राइबोसोम के संश्लेषण का मुख्य स्थल कौन-सा है?",
        answers: shuffle([
            { text: "केन्द्रक द्रव्य", correct: false },
            { text: "केन्द्रिका (Nucleolus)", correct: true },
            { text: "क्रोमैटिन", correct: false },
            { text: "गॉल्जी उपकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केन्द्रिका, जो केन्द्रक के भीतर एक सघन संरचना है, राइबोसोमल RNA (rRNA) के संश्लेषण और राइबोसोम की उप-इकाइयों को बनाने का कार्य करती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसीलिए इसे 'राइबोसोम फैक्ट्री' भी कहा जाता है।"
    },
    {
        question: "प्रश्न 8. गुणसूत्र (Chromosomes) मुख्य रूप से किससे बने होते हैं?",
        answers: shuffle([
            { text: "केवल DNA", correct: false },
            { text: "DNA और प्रोटीन", correct: true },
            { text: "केवल RNA", correct: false },
            { text: "RNA और लिपिड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुणसूत्र DNA अणुओं और हिस्टोन नामक प्रोटीन से बनी अत्यधिक संघनित संरचनाएं हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  DNA आनुवंशिक जानकारी संग्रहीत करता है और हिस्टोन प्रोटीन DNA की पैकेजिंग में मदद करते हैं।"
    },
    {
        question: "प्रश्न 9. निम्नलिखित में से किस मानव कोशिका में परिपक्व होने पर केन्द्रक नहीं होता है?",
        answers: shuffle([
            { text: "तंत्रिका कोशिका", correct: false },
            { text: "पेशी कोशिका", correct: false },
            { text: "लाल रक्त कोशिका (RBC)", correct: true },
            { text: "श्वेत रक्त कोशिका (WBC)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्तनधारियों की परिपक्व लाल रक्त कोशिकाओं में केन्द्रक नहीं होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह हीमोग्लोबिन के लिए अधिक स्थान प्रदान करने और संकरी रक्त वाहिकाओं से आसानी से गुजरने में मदद करने के लिए एक अनुकूलन है।"
    },
    {
        question: "प्रश्न 10. DNA से mRNA बनने की प्रक्रिया (अनुलेखन या Transcription) कहाँ होती है?",
        answers: shuffle([
            { text: "कोशिका द्रव्य में", correct: false },
            { text: "राइबोसोम पर", correct: false },
            { text: "केन्द्रक में", correct: true },
            { text: "माइटोकॉन्ड्रिया में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुलेखन वह प्रक्रिया है जिसमें DNA के एक खंड से मैसेंजर RNA (mRNA) की एक प्रतिलिपि बनाई जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह प्रक्रिया यूकैरियोटिक कोशिकाओं के केन्द्रक के भीतर होती है।"
    },
    {
        question: "प्रश्न 11. केन्द्रक के अंदर मौजूद तरल, जेली जैसे पदार्थ को क्या कहते हैं?",
        answers: shuffle([
            { text: "कोशिका द्रव्य (Cytoplasm)", correct: false },
            { text: "प्रोटोप्लाज्म (Protoplasm)", correct: false },
            { text: "केन्द्रक द्रव्य (Nucleoplasm)", correct: true },
            { text: "मैट्रिक्स (Matrix)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केन्द्रक द्रव्य, जिसे केरियोप्लाज्म भी कहा जाता है, वह अर्ध-तरल पदार्थ है जो केन्द्रक झिल्ली के भीतर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और जिसमें क्रोमैटिन और केन्द्रिका निलंबित रहते हैं।"
    },
    {
        question: "प्रश्न 12. कोशिका विभाजन के दौरान क्रोमैटिन किसमें संघनित हो जाता है?",
        answers: shuffle([
            { text: "केन्द्रिका में", correct: false },
            { text: "गुणसूत्रों में", correct: true },
            { text: "राइबोसोम में", correct: false },
            { text: "DNA में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशिका विभाजन की तैयारी में, लंबे और पतले क्रोमैटिन धागे कसकर कुंडलित और संघनित होकर स्पष्ट, छड़ जैसी संरचनाएं बनाते हैं जिन्हें गुणसूत्र कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  ताकि आनुवंशिक सामग्री को समान रूप से विभाजित किया जा सके।"
    },
    {
        question: "प्रश्न 13. कौन-सा प्रोटीन क्रोमैटिन में DNA की पैकेजिंग में मदद करता है?",
        answers: shuffle([
            { text: "एक्टिन", correct: false },
            { text: "मायोसिन", correct: false },
            { text: "हिस्टोन", correct: true },
            { text: "ट्यूबुलिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिस्टोन क्षारीय प्रोटीन का एक समूह है जो DNA को संघनित करके न्यूक्लियोसोम नामक संरचनात्मक इकाइयों में व्यवस्थित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे क्रोमैटिन बनता है।"
    },
    {
        question: "प्रश्न 14. केन्द्रक का प्राथमिक कार्य क्या है?",
        answers: shuffle([
            { text: "ऊर्जा उत्पादन", correct: false },
            { text: "प्रोटीन संश्लेषण", correct: false },
            { text: "आनुवंशिक सामग्री का भंडारण और कोशिका की गतिविधियों का नियंत्रण", correct: true },
            { text: "अपशिष्ट पदार्थों का निपटान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केन्द्रक का मुख्य कार्य कोशिका की आनुवंशिक जानकारी (DNA) को सुरक्षित रखना।<br><br><i class='fa-solid fa-angles-right icon'></i>  और कोशिका की सभी चयापचय गतिविधियों को नियंत्रित करना है।"
    },
    {
        question: "प्रश्न 15. क्रोमैटिन का वह भाग जो हल्का रंगा होता है और आनुवंशिक रूप से सक्रिय होता है, क्या कहलाता है?",
        answers: shuffle([
            { text: "हेटरोक्रोमैटिन", correct: false },
            { text: "यूक्रोमैटिन", correct: true },
            { text: "सेंट्रोमियर", correct: false },
            { text: "टेलोमियर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूक्रोमैटिन क्रोमैटिन का शिथिल रूप से पैक किया गया रूप है जो अनुलेखन (transcription) के लिए सक्रिय होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह माइक्रोस्कोप के नीचे हल्का दिखाई देता है।"
    },
    {
        question: "प्रश्न 16. क्रोमैटिन का वह भाग जो गहरा रंगा, संघनित और आनुवंशिक रूप से निष्क्रिय होता है, क्या कहलाता है?",
        answers: shuffle([
            { text: "हेटरोक्रोमैटिन", correct: true },
            { text: "यूक्रोमैटिन", correct: false },
            { text: "न्यूक्लियोसोम", correct: false },
            { text: "जीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेटरोक्रोमैटिन क्रोमैटिन का अत्यधिक संघनित रूप है जो आनुवंशिक रूप से निष्क्रिय होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह माइक्रोस्कोप के नीचे गहरे धब्बे के रूप में दिखाई देता है।"
    },
    {
        question: "प्रश्न 17. DNA की प्रतिकृति (Replication) की प्रक्रिया कोशिका चक्र की किस अवस्था में केन्द्रक में होती है?",
        answers: shuffle([
            { text: "G1 अवस्था", correct: false },
            { text: "S अवस्था", correct: true },
            { text: "G2 अवस्था", correct: false },
            { text: "M अवस्था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशिका चक्र की S (संश्लेषण) अवस्था के दौरान, केन्द्रक में मौजूद DNA अपनी एक सटीक प्रतिलिपि बनाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  ताकि कोशिका विभाजन के बाद दोनों नई कोशिकाओं को DNA का पूरा सेट मिल सके।"
    },
    {
        question: "प्रश्न 18. एक ही कोशिका में एक से अधिक केन्द्रक होने की स्थिति को क्या कहते हैं?",
        answers: shuffle([
            { text: "एककेन्द्रीय (Uninucleate)", correct: false },
            { text: "अकेन्द्रीय (Anucleate)", correct: false },
            { text: "बहुकेन्द्रीय (Multinucleate)", correct: true },
            { text: "द्विकेन्द्रीय (Binucleate)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब एक कोशिका में कई केन्द्रक होते हैं, तो उसे बहुकेन्द्रीय कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  उदाहरण के लिए, मानव की कंकालीय पेशी कोशिकाएं।"
    },
    {
        question: "प्रश्न 19. केन्द्रक के अध्ययन को क्या कहा जाता है?",
        answers: shuffle([
            { text: "कोशिका विज्ञान (Cytology)", correct: false },
            { text: "ऊतक विज्ञान (Histology)", correct: false },
            { text: "केरियोलॉजी (Karyology)", correct: true },
            { text: "आनुवंशिकी (Genetics)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कैरियोन' (Karyon) केन्द्रक के लिए एक ग्रीक शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसलिए, केन्द्रक और उसके घटकों, विशेषकर गुणसूत्रों, के अध्ययन को केरियोलॉजी कहा जाता है।"
    },
    {
        question: "प्रश्न 20. केन्द्रक झिल्ली किस कोशिकांग के साथ निरंतरता में रहती है?",
        answers: shuffle([
            { text: "माइटोकॉन्ड्रिया", correct: false },
            { text: "गॉल्जी उपकरण", correct: false },
            { text: "एंडोप्लाज्मिक रेटिकुलम", correct: true },
            { text: "लाइसोसोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केन्द्रक की बाहरी झिल्ली सीधे खुरदरी एंडोप्लाज्मिक रेटिकुलम (RER) की झिल्ली से जुड़ी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो एक अंतःझिल्लिका तंत्र का निर्माण करती है।"
    },
    {
        question: "प्रश्न 21. केन्द्रिका (Nucleolus) में क्या नहीं होता है?",
        answers: shuffle([
            { text: "rRNA", correct: false },
            { text: "प्रोटीन", correct: false },
            { text: "झिल्ली (Membrane)", correct: true },
            { text: "DNA के कुछ अंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केन्द्रिका केन्द्रक के भीतर एक झिल्ली-रहित संरचना है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह rRNA और प्रोटीन का एक सघन जमाव है।"
    },
    {
        question: "प्रश्न 22. मानव में गुणसूत्रों की संख्या कितनी होती है?",
        answers: shuffle([
            { text: "23", correct: false },
            { text: "46", correct: true },
            { text: "44", correct: false },
            { text: "22", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मानव की अधिकांश कायिक कोशिकाओं के केन्द्रक में 46 गुणसूत्र होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो 23 जोड़ों में व्यवस्थित होते हैं।"
    },
    {
        question: "प्रश्न 23. आनुवंशिकता की मूल इकाई 'जीन' (Gene) कहाँ स्थित होते हैं?",
        answers: shuffle([
            { text: "गुणसूत्रों पर", correct: true },
            { text: "कोशिका द्रव्य में", correct: false },
            { text: "केन्द्रिका में", correct: false },
            { text: "राइबोसोम पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीन DNA के खंड होते हैं जो एक विशिष्ट प्रोटीन या कार्यात्मक RNA अणु के लिए कोड करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  वे गुणसूत्रों पर एक रैखिक क्रम में स्थित होते हैं।"
    },
    {
        question: "प्रश्न 24. कौन-सा अणु केन्द्रक से कोशिका द्रव्य में आनुवंशिक संदेश ले जाता है?",
        answers: shuffle([
            { text: "DNA", correct: false },
            { text: "tRNA", correct: false },
            { text: "mRNA", correct: true },
            { text: "rRNA", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मैसेंजर RNA (mRNA) केन्द्रक में DNA से आनुवंशिक कोड की प्रतिलिपि बनाता है (अनुलेखन)।<br><br><i class='fa-solid fa-angles-right icon'></i>  और फिर इस संदेश को प्रोटीन संश्लेषण के लिए कोशिका द्रव्य में राइबोसोम तक ले जाता है।"
    },
    {
        question: "प्रश्न 25. केन्द्रक छिद्रों के माध्यम से परिवहन को कौन नियंत्रित करता है?",
        answers: shuffle([
            { text: "हिस्टोन प्रोटीन", correct: false },
            { text: "केन्द्रक छिद्र कॉम्प्लेक्स (Nuclear Pore Complex)", correct: true },
            { text: "लाइपोप्रोटीन", correct: false },
            { text: "सेंट्रोमियर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्येक केन्द्रक छिद्र एक बड़ी, जटिल प्रोटीन संरचना से भरा होता है जिसे न्यूक्लियर पोर कॉम्प्लेक्स (NPC) कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह एक गेटकीपर के रूप में कार्य करता है, जो नियंत्रित करता है कि कौन से अणु अंदर और बाहर जा सकते हैं।"
    },
    {
        question: "प्रश्न 26. केन्द्रक का आकार सामान्यतः कैसा होता है?",
        answers: shuffle([
            { text: "चपटा", correct: false },
            { text: "अनियमित", correct: false },
            { text: "गोलाकार या अंडाकार", correct: true },
            { text: "घनाकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि आकार भिन्न हो सकता है, अधिकांश जंतु कोशिकाओं में केन्द्रक आमतौर पर कोशिका के केंद्र में स्थित एक गोलाकार या अंडाकार संरचना होती है।"
    },
    {
        question: "प्रश्न 27. केन्द्रक के संबंध में कौन-सा कथन असत्य है?",
        answers: shuffle([
            { text: "यह यूकैरियोटिक कोशिकाओं में पाया जाता है।", correct: false },
            { text: "यह दोहरी झिल्ली से घिरा होता है।", correct: false },
            { text: "यह प्रोटीन संश्लेषण का मुख्य स्थल है।", correct: true },
            { text: "इसमें कोशिका का आनुवंशिक पदार्थ होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह कथन असत्य है।<br><br><i class='fa-solid fa-angles-right icon'></i>  प्रोटीन संश्लेषण का मुख्य स्थल राइबोसोम है, जो कोशिका द्रव्य में स्थित होते हैं। केन्द्रक केवल प्रोटीन बनाने के लिए निर्देश (mRNA) प्रदान करता है।"
    },
    {
        question: "प्रश्न 28. कोशिका विभाजन के बाद नए केन्द्रक का निर्माण कहाँ से होता है?",
        answers: shuffle([
            { text: "माइटोकॉन्ड्रिया से", correct: false },
            { text: "एंडोप्लाज्मिक रेटिकुलम से", correct: true },
            { text: "गॉल्जी उपकरण से", correct: false },
            { text: "पूर्व-मौजूदा केन्द्रक के विभाजन से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशिका विभाजन के अंत में (टीलोफेज), एंडोप्लाज्मिक रेटिकुलम की झिल्लियां गुणसूत्रों के चारों ओर इकट्ठा होकर नई केन्द्रक झिल्ली का निर्माण करती हैं।"
    },
    {
        question: "प्रश्न 29. लिंग गुणसूत्र (Sex Chromosomes) कहाँ पाए जाते हैं?",
        answers: shuffle([
            { text: "माइटोकॉन्ड्रिया में", correct: false },
            { text: "केन्द्रक में", correct: true },
            { text: "कोशिका द्रव्य में", correct: false },
            { text: "केन्द्रिका में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लिंग गुणसूत्र (मनुष्यों में X और Y) भी अन्य सभी गुणसूत्रों (ऑटोसोम) की तरह कोशिका के केन्द्रक में ही स्थित होते हैं।"
    },
    {
        question: "प्रश्न 30. न्यूक्लियोसोम (Nucleosome) क्या है?",
        answers: shuffle([
            { text: "केन्द्रक का एक भाग", correct: false },
            { text: "DNA और हिस्टोन प्रोटीन की एक बुनियादी इकाई", correct: true },
            { text: "एक प्रकार का RNA", correct: false },
            { text: "राइबोसोम का एक घटक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूक्लियोसोम क्रोमैटिन की मूल संरचनात्मक इकाई है, जिसमें DNA का एक खंड हिस्टोन प्रोटीन के एक कोर (ऑक्टामर) के चारों ओर लिपटा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह \"एक धागे पर मोतियों\" जैसा दिखता है।"
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