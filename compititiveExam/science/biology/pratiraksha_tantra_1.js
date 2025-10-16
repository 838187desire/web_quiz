const questions = [
    {
        topHeading: "प्रतिरक्षा तंत्र पर आधारित 50 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. प्रतिरक्षा प्रणाली का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "भोजन का पाचन", correct: false },
            { text: "ऑक्सीजन का परिवहन", correct: false },
            { text: "शरीर को रोगजनकों (Pathogens) से बचाना", correct: true },
            { text: "हार्मोन का उत्पादन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिरक्षा प्रणाली कोशिकाओं, ऊतकों और अणुओं का एक जटिल नेटवर्क है जो शरीर को बैक्टीरिया, वायरस और अन्य हानिकारक सूक्ष्मजीवों से बचाता है।"
    },
    {
        question: "प्रश्न 2. जन्म से ही मौजूद प्रतिरक्षा को क्या कहते हैं?",
        answers: shuffle([
            { text: "उपार्जित प्रतिरक्षा", correct: false },
            { text: "सहज प्रतिरक्षा", correct: true },
            { text: "निष्क्रिय प्रतिरक्षा", correct: false },
            { text: "सक्रिय प्रतिरक्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सहज प्रतिरक्षा एक सामान्य, गैर-विशिष्ट प्रकार की रक्षा है जो किसी व्यक्ति में जन्म से ही मौजूद होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> त्वचा, श्लेष्मा झिल्ली और कुछ श्वेत रक्त कोशिकाएं इसके उदाहरण हैं।"
    },
    {
        question: "प्रश्न 3. एंटीबॉडी (Antibody) का उत्पादन कौन सी कोशिकाएं करती हैं?",
        answers: shuffle([
            { text: "टी-कोशिकाएं", correct: false },
            { text: "बी-कोशिकाएं / प्लाज्मा कोशिकाएं", correct: true },
            { text: "प्राकृतिक मारक कोशिकाएं (NK cells)", correct: false },
            { text: "मैक्रोफेज (Macrophages)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब बी-लिम्फोसाइट्स किसी विशिष्ट एंटीजन के संपर्क में आती हैं, तो वे सक्रिय होकर प्लाज्मा कोशिकाओं में बदल जाती हैं, जो बड़ी मात्रा में एंटीबॉडी का उत्पादन और स्राव करती हैं।"
    },
    {
        question: "प्रश्न 4. टीकाकरण (Vaccination) किस प्रकार की प्रतिरक्षा का उदाहरण है?",
        answers: shuffle([
            { text: "प्राकृतिक सक्रिय प्रतिरक्षा", correct: false },
            { text: "कृत्रिम सक्रिय प्रतिरक्षा", correct: true },
            { text: "प्राकृतिक निष्क्रिय प्रतिरक्षा", correct: false },
            { text: "कृत्रिम निष्क्रिय प्रतिरक्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टीकाकरण में, कमजोर या निष्क्रिय रोगाणुओं को शरीर में प्रवेश कराया जाता है ताकि प्रतिरक्षा प्रणाली एंटीबॉडी और मेमोरी कोशिकाएं बना सके, जो भविष्य में वास्तविक संक्रमण से सुरक्षा प्रदान करती हैं।"
    },
    {
        question: "प्रश्न 5. AIDS (एक्वायर्ड इम्यूनो डिफिशिएंसी सिंड्रोम) किस वायरस के कारण होता है?",
        answers: shuffle([
            { text: "इन्फ्लूएंजा वायरस", correct: false },
            { text: "हेपेटाइटिस वायरस", correct: false },
            { text: "HIV (ह्यूमन इम्यूनोडिफिशिएंसी वायरस)", correct: true },
            { text: "पोलियो वायरस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> HIV एक रेट्रोवायरस है जो मुख्य रूप से प्रतिरक्षा प्रणाली की सहायक टी-कोशिकाओं (Helper T-cells) पर हमला करता है, जिससे शरीर की संक्रमण से लड़ने की क्षमता गंभीर रूप से कमजोर हो जाती है।"
    },
    {
        question: "प्रश्न 6. टी-लिम्फोसाइट्स (T-lymphocytes) कहाँ परिपक्व (mature) होती हैं?",
        answers: shuffle([
            { text: "अस्थि मज्जा (Bone Marrow)", correct: false },
            { text: "प्लीहा (Spleen)", correct: false },
            { text: "थाइमस ग्रंथि (Thymus Gland)", correct: true },
            { text: "लसीका पर्व (Lymph Nodes)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टी-लिम्फोसाइट्स बनती तो अस्थि मज्जा में हैं, लेकिन वे परिपक्व होने और कार्य करने के लिए थाइमस ग्रंथि में जाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> 'T' का अर्थ थाइमस ही है।"
    },
    {
        question: "प्रश्न 7. एंटीबॉडी रासायनिक रूप से क्या होते हैं?",
        answers: shuffle([
            { text: "कार्बोहाइड्रेट", correct: false },
            { text: "लिपिड", correct: false },
            { text: "प्रोटीन", correct: true },
            { text: "न्यूक्लिक एसिड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंटीबॉडी, जिन्हें इम्युनोग्लोबुलिन (Immunoglobulins) भी कहा जाता है, 'Y' आकार के ग्लाइकोप्रोटीन अणु होते हैं जो विशिष्ट एंटीजन को पहचानकर उनसे बंध जाते हैं।"
    },
    {
        question: "प्रश्न 8. कौन सी श्वेत रक्त कोशिकाएं भक्षण (Phagocytosis) की प्रक्रिया में शामिल होती हैं?",
        answers: shuffle([
            { text: "लिम्फोसाइट्स", correct: false },
            { text: "इओसिनोफिल्स", correct: false },
            { text: "न्यूट्रोफिल्स और मैक्रोफेज", correct: true },
            { text: "बेसोफिल्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूट्रोफिल्स और मैक्रोफेज फैगोसाइटिक कोशिकाएं हैं जो बैक्टीरिया और सेलुलर मलबे जैसे बाहरी कणों को निगलकर और पचाकर नष्ट कर देती हैं।"
    },
    {
        question: "प्रश्न 9. एलर्जी (Allergy) की प्रतिक्रिया में कौन सा एंटीबॉडी शामिल होता है?",
        answers: shuffle([
            { text: "IgG", correct: false },
            { text: "IgM", correct: false },
            { text: "IgA", correct: false },
            { text: "IgE", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> IgE एंटीबॉडी मास्ट कोशिकाओं और बेसोफिल्स से जुड़ जाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जब कोई एलर्जन (जैसे परागकण) इनसे बंधता है, तो ये कोशिकाएं हिस्टामाइन जैसे रसायन छोड़ती हैं, जिससे एलर्जी के लक्षण उत्पन्न होते हैं।"
    },
    {
        question: "प्रश्न 10. प्राथमिक लसीकाभ अंग (Primary Lymphoid Organs) कौन से हैं?",
        answers: shuffle([
            { text: "प्लीहा और लसीका पर्व", correct: false },
            { text: "अस्थि मज्जा और थाइमस", correct: true },
            { text: "टॉन्सिल और प्लीहा", correct: false },
            { text: "यकृत और वृक्क", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्राथमिक लसीकाभ अंग वे होते हैं जहाँ लिम्फोसाइट्स का निर्माण और परिपक्वता होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें अस्थि मज्जा (जहाँ सभी रक्त कोशिकाएं बनती हैं) और थाइमस (जहाँ टी-कोशिकाएं परिपक्व होती हैं) शामिल हैं।"
    },
    {
        question: "प्रश्न 11. वह पदार्थ जो शरीर में एंटीबॉडी उत्पादन को प्रेरित करता है, क्या कहलाता है?",
        answers: shuffle([
            { text: "एंजाइम", correct: false },
            { text: "हार्मोन", correct: false },
            { text: "एंटीजन (Antigen)", correct: true },
            { text: "लिपिड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंटीजन (प्रतिजन) कोई भी बाहरी पदार्थ (आमतौर पर प्रोटीन) होता है जिसे प्रतिरक्षा प्रणाली \"विदेशी\" के रूप में पहचानती है और उसके खिलाफ एक प्रतिरक्षा प्रतिक्रिया (जैसे एंटीबॉडी का निर्माण) शुरू करती है।"
    },
    {
        question: "प्रश्न 12. मां के दूध (कोलोस्ट्रम) में पाया जाने वाला प्रमुख एंटीबॉडी कौन सा है?",
        answers: shuffle([
            { text: "IgG", correct: false },
            { text: "IgM", correct: false },
            { text: "IgA", correct: true },
            { text: "IgE", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोलोस्ट्रम (प्रसव के बाद का पहला दूध) IgA एंटीबॉडी से भरपूर होता है, जो नवजात शिशु को पाचन और श्वसन पथ के संक्रमणों से निष्क्रिय प्रतिरक्षा प्रदान करता है।"
    },
    {
        question: "प्रश्न 13. कौन सी कोशिकाएं वायरस से संक्रमित कोशिकाओं और ट्यूमर कोशिकाओं को सीधे मार सकती हैं?",
        answers: shuffle([
            { text: "बी-कोशिकाएं", correct: false },
            { text: "प्लाज्मा कोशिकाएं", correct: false },
            { text: "साइटोटॉक्सिक टी-कोशिकाएं (Killer T-cells)", correct: true },
            { text: "सहायक टी-कोशिकाएं (Helper T-cells)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> साइटोटॉक्सिक टी-लिम्फोसाइट्स (CD8+ कोशिकाएं) संक्रमित या कैंसरग्रस्त कोशिकाओं की सतह पर मौजूद विशिष्ट एंटीजन को पहचानती हैं और उन्हें नष्ट कर देती हैं।"
    },
    {
        question: "प्रश्न 14. ऑटोइम्यून बीमारी (Autoimmune disease) क्या है?",
        answers: shuffle([
            { text: "जब प्रतिरक्षा प्रणाली बहुत कमजोर हो जाती है", correct: false },
            { text: "जब प्रतिरक्षा प्रणाली शरीर की अपनी कोशिकाओं पर हमला करने लगती है", correct: true },
            { text: "जब कोई व्यक्ति किसी चीज से एलर्जिक होता है", correct: false },
            { text: "एक संक्रामक रोग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑटोइम्यूनिटी में, प्रतिरक्षा प्रणाली 'स्व' और 'गैर-स्व' के बीच अंतर करने में विफल हो जाती है और शरीर के अपने स्वस्थ ऊतकों और अंगों को नष्ट करना शुरू कर देती है।<br><br><i class='fa-solid fa-angles-right icon'></i> उदाहरण: रूमेटाइड आर्थराइटिस।"
    },
    {
        question: "प्रश्न 15. इंटरफेरॉन (Interferons) क्या हैं?",
        answers: shuffle([
            { text: "एंटी-बैक्टीरियल प्रोटीन", correct: false },
            { text: "एंटी-वायरल प्रोटीन", correct: true },
            { text: "एंटी-फंगल प्रोटीन", correct: false },
            { text: "एंटी-एलर्जिक रसायन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंटरफेरॉन सिग्नलिंग प्रोटीन का एक समूह है जो वायरस से संक्रमित कोशिकाओं द्वारा स्रावित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये पड़ोसी कोशिकाओं को वायरल संक्रमण के प्रति प्रतिरोधी बनाकर वायरस के प्रसार को रोकते हैं।"
    },
    {
        question: "प्रश्न 16. \"मेमोरी कोशिकाएं\" (Memory Cells) का क्या महत्व है?",
        answers: shuffle([
            { text: "वे एंटीजन को याद रखती हैं ताकि भविष्य में तेजी से प्रतिक्रिया हो सके", correct: true },
            { text: "वे मस्तिष्क में यादें संग्रहीत करती हैं", correct: false },
            { text: "वे एंटीबॉडी का उत्पादन करती हैं", correct: false },
            { text: "वे रोगाणुओं का भक्षण करती हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्राथमिक प्रतिरक्षा प्रतिक्रिया के बाद, कुछ बी और टी-कोशिकाएं मेमोरी कोशिकाओं के रूप में जीवित रहती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि वही रोगाणु दोबारा हमला करता है, तो ये कोशिकाएं बहुत तेजी से और शक्तिशाली द्वितीयक प्रतिक्रिया उत्पन्न करती हैं।"
    },
    {
        question: "प्रश्न 17. कौन सा एंटीबॉडी प्लेसेंटा (अपरा) को पार कर सकता है?",
        answers: shuffle([
            { text: "IgA", correct: false },
            { text: "IgM", correct: false },
            { text: "IgG", correct: true },
            { text: "IgD", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> IgG एकमात्र एंटीबॉडी है जो प्लेसेंटा को पार करके माँ से विकासशील भ्रूण तक पहुँच सकता है, जिससे भ्रूण को जन्म से पहले निष्क्रिय प्रतिरक्षा मिलती है।"
    },
    {
        question: "प्रश्न 18. हिस्टामाइन (Histamine) का स्राव कौन सी कोशिकाएं करती हैं?",
        answers: shuffle([
            { text: "न्यूट्रोफिल्स", correct: false },
            { text: "लिम्फोसाइट्स", correct: false },
            { text: "मास्ट कोशिकाएं और बेसोफिल्स", correct: true },
            { text: "मोनोसाइट्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एलर्जी और सूजन की प्रतिक्रिया के दौरान, मास्ट कोशिकाएं और बेसोफिल्स हिस्टामाइन छोड़ती हैं, जो रक्त वाहिकाओं के फैलाव और खुजली जैसे लक्षण पैदा करता है।"
    },
    {
        question: "प्रश्न 19. ह्यूमरल (तरल) प्रतिरक्षा (Humoral Immunity) का संबंध किससे है?",
        answers: shuffle([
            { text: "टी-कोशिकाओं से", correct: false },
            { text: "एंटीबॉडी से", correct: true },
            { text: "मैक्रोफेज से", correct: false },
            { text: "प्राकृतिक मारक कोशिकाओं से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्यूमरल प्रतिरक्षा, जिसे एंटीबॉडी-मध्यस्थ प्रतिरक्षा भी कहा जाता है, मुख्य रूप से शरीर के तरल पदार्थों (ह्यूमर) में मौजूद एंटीबॉडी द्वारा प्रदान की जाती है, जो रक्त प्रवाह में रोगाणुओं को लक्षित करती है।"
    },
    {
        question: "प्रश्न 20. सेल-मध्यस्थ प्रतिरक्षा (Cell-mediated Immunity) का संबंध किससे है?",
        answers: shuffle([
            { text: "बी-कोशिकाओं से", correct: false },
            { text: "टी-कोशिकाओं से", correct: true },
            { text: "एंटीबॉडी से", correct: false },
            { text: "पूरक प्रणाली से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेल-मध्यस्थ प्रतिरक्षा में, टी-लिम्फोसाइट्स (जैसे साइटोटॉक्सिक टी-कोशिकाएं) सीधे रोगजनकों पर हमला करती हैं या संक्रमित कोशिकाओं को नष्ट करती हैं, इसमें एंटीबॉडी शामिल नहीं होतीं।"
    },
    {
        question: "प्रश्न 21. BCG का टीका किस बीमारी से बचाव के लिए लगाया जाता है?",
        answers: shuffle([
            { text: "पोलियो", correct: false },
            { text: "खसरा", correct: false },
            { text: "तपेदिक (Tuberculosis)", correct: true },
            { text: "टेटनस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैसिलस कैलमेट-गुएरिन (BCG) का टीका तपेदिक (टीबी) रोग से सुरक्षा प्रदान करने के लिए, विशेष रूप से बच्चों में, उपयोग किया जाता है।"
    },
    {
        question: "प्रश्न 22. कौन सी कोशिकाएं प्रतिरक्षा प्रणाली की \"कमांडर-इन-चीफ\" कहलाती हैं?",
        answers: shuffle([
            { text: "साइटोटॉक्सिक टी-कोशिकाएं", correct: false },
            { text: "सहायक टी-कोशिकाएं (Helper T-cells)", correct: true },
            { text: "बी-कोशिकाएं", correct: false },
            { text: "मैक्रोफेज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सहायक टी-कोशिकाएं (CD4+ कोशिकाएं) साइटोकिन्स नामक रसायन स्रावित करके प्रतिरक्षा प्रतिक्रिया के अन्य घटकों, जैसे बी-कोशिकाओं और साइटोटॉक्सिक टी-कोशिकाओं, को सक्रिय और समन्वित करती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> HIV इन्हीं कोशिकाओं को लक्षित करता है।"
    },
    {
        question: "प्रश्न 23. प्लीहा (Spleen) का प्रतिरक्षा में क्या कार्य है?",
        answers: shuffle([
            { text: "टी-कोशिकाओं को परिपक्व करना", correct: false },
            { text: "रक्त को फ़िल्टर करना और पुराने RBC को हटाना", correct: true },
            { text: "सभी एंटीबॉडी का उत्पादन करना", correct: false },
            { text: "हार्मोन स्रावित करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्लीहा एक बड़ा लसीकाभ अंग है जो रक्त में मौजूद रोगाणुओं को फंसाता है और नष्ट करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह रक्त के लिए एक फिल्टर के रूप में कार्य करता है और पुरानी लाल रक्त कोशिकाओं का कब्रिस्तान भी है।"
    },
    {
        question: "प्रश्न 24. सीरम (Serum) में सबसे प्रचुर मात्रा में पाया जाने वाला एंटीबॉडी कौन सा है?",
        answers: shuffle([
            { text: "IgA", correct: false },
            { text: "IgE", correct: false },
            { text: "IgM", correct: false },
            { text: "IgG", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> IgG रक्त और ऊतक तरल पदार्थ में पाया जाने वाला मुख्य एंटीबॉडी है, जो कुल सीरम इम्युनोग्लोबुलिन का लगभग 75-80% हिस्सा बनाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह द्वितीयक प्रतिरक्षा प्रतिक्रिया में प्रमुख है।"
    },
    {
        question: "प्रश्न 25. निष्क्रिय प्रतिरक्षा (Passive Immunity) का क्या अर्थ है?",
        answers: shuffle([
            { text: "शरीर खुद एंटीबॉडी बनाता है", correct: false },
            { text: "शरीर को बाहर से बनी-बनाई एंटीबॉडी प्राप्त होती हैं", correct: true },
            { text: "टीकाकरण द्वारा प्राप्त प्रतिरक्षा", correct: false },
            { text: "जन्म से मौजूद प्रतिरक्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निष्क्रिय प्रतिरक्षा में, व्यक्ति को सीधे तौर पर किसी अन्य स्रोत से एंटीबॉडी प्राप्त होती हैं, जैसे माँ से भ्रूण को या टिटनेस एंटी-टॉक्सिन इंजेक्शन के माध्यम से।<br><br><i class='fa-solid fa-angles-right icon'></i> यह तत्काल लेकिन अस्थायी सुरक्षा प्रदान करती है।"
    },
    {
        question: "प्रश्न 26. MHC (मेजर हिस्टोकम्पैटिबिलिटी कॉम्प्लेक्स) का क्या कार्य है?",
        answers: shuffle([
            { text: "एंटीबॉडी का उत्पादन करना", correct: false },
            { text: "टी-कोशिकाओं को एंटीजन प्रस्तुत करना", correct: true },
            { text: "रोगाणुओं को सीधे मारना", correct: false },
            { text: "एलर्जी प्रतिक्रिया उत्पन्न करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> MHC अणु कोशिका की सतह पर प्रोटीन होते हैं जो संसाधित एंटीजन के टुकड़ों को टी-कोशिकाओं के सामने प्रस्तुत करते हैं, जिससे टी-कोशिकाएं उन्हें पहचान कर प्रतिक्रिया शुरू कर सकती हैं।"
    },
    {
        question: "प्रश्न 27. किसी संक्रमण के प्रति पहली बार होने वाली प्रतिरक्षा प्रतिक्रिया में कौन सा एंटीबॉडी सबसे पहले बनता है?",
        answers: shuffle([
            { text: "IgG", correct: false },
            { text: "IgA", correct: false },
            { text: "IgM", correct: true },
            { text: "IgE", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> IgM प्राथमिक प्रतिरक्षा प्रतिक्रिया के दौरान उत्पन्न होने वाला पहला एंटीबॉडी है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक बड़ा अणु (पेंटामर) है जो रक्त प्रवाह में रोगाणुओं को बेअसर करने में बहुत प्रभावी है।"
    },
    {
        question: "प्रश्न 28. टॉन्सिल (Tonsils) क्या हैं?",
        answers: shuffle([
            { text: "हार्मोन स्रावित करने वाली ग्रंथियां", correct: false },
            { text: "पाचन एंजाइम बनाने वाले अंग", correct: false },
            { text: "लसीकाभ ऊतक जो गले में संक्रमण से लड़ते हैं", correct: true },
            { text: "श्वसन में सहायक मांसपेशियां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टॉन्सिल लसीकाभ ऊतक के समूह हैं जो गले के प्रवेश द्वार पर स्थित होते हैं और श्वास या भोजन के साथ शरीर में प्रवेश करने वाले रोगजनकों के खिलाफ रक्षा की पहली पंक्ति के रूप में कार्य करते हैं।"
    },
    {
        question: "प्रश्न 29. साइटोकिन्स (Cytokines) क्या हैं?",
        answers: shuffle([
            { text: "कोशिका को नष्ट करने वाले विष", correct: false },
            { text: "प्रतिरक्षा कोशिकाओं के बीच संचार के लिए रासायनिक संदेशवाहक", correct: true },
            { text: "एक प्रकार का एंटीबॉडी", correct: false },
            { text: "ऊर्जा प्रदान करने वाले अणु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> साइटोकिन्स छोटे प्रोटीन होते हैं जो प्रतिरक्षा कोशिकाओं द्वारा स्रावित होते हैं और वे अन्य कोशिकाओं के व्यवहार को प्रभावित करते हैं, जिससे प्रतिरक्षा प्रतिक्रिया को समन्वित करने में मदद मिलती है।"
    },
    {
        question: "प्रश्न 30. जब कोई ग्राफ्ट (जैसे किडनी) किसी अन्य व्यक्ति में प्रत्यारोपित किया जाता है, तो अस्वीकृति (rejection) के लिए मुख्य रूप से कौन सी कोशिकाएं जिम्मेदार होती हैं?",
        answers: shuffle([
            { text: "बी-कोशिकाएं", correct: false },
            { text: "प्राकृतिक मारक कोशिकाएं", correct: false },
            { text: "साइटोटॉक्सिक टी-कोशिकाएं", correct: true },
            { text: "न्यूट्रोफिल्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्राफ्ट अस्वीकृति एक सेल-मध्यस्थ प्रतिक्रिया है जिसमें प्राप्तकर्ता की साइटोटॉक्सिक टी-कोशिकाएं प्रत्यारोपित अंग की कोशिकाओं पर मौजूद विदेशी MHC अणुओं को पहचानती हैं और उन पर हमला करती हैं।"
    },
    {
        question: "प्रश्न 31. पूरक प्रणाली (Complement System) क्या है?",
        answers: shuffle([
            { text: "रक्त प्लाज्मा में प्रोटीन का एक समूह जो प्रतिरक्षा प्रतिक्रिया में मदद करता है", correct: true },
            { text: "हार्मोन का एक समूह", correct: false },
            { text: "विटामिन का एक समूह", correct: false },
            { text: "तंत्रिका तंत्र का एक हिस्सा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पूरक प्रणाली में लगभग 30 रक्त प्रोटीन होते हैं जो एंटीबॉडी की क्रिया को \"पूरक\" या सहायता करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> वे रोगाणुओं को नष्ट कर सकते हैं, सूजन को बढ़ावा दे सकते हैं और भक्षण के लिए रोगाणुओं को चिह्नित कर सकते हैं।"
    },
    {
        question: "प्रश्न 32. लाइसोजाइम (Lysozyme) नामक एंजाइम कहाँ पाया जाता है?",
        answers: shuffle([
            { text: "रक्त में", correct: false },
            { text: "मांसपेशियों में", correct: false },
            { text: "आंसुओं, लार और पसीने में", correct: true },
            { text: "मस्तिष्क में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाइसोजाइम एक एंजाइम है जो कई जीवाणुओं की कोशिका भित्ति को नष्ट कर सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह आंसू, लार और अन्य शारीरिक स्रावों में पाया जाता है और सहज प्रतिरक्षा का एक हिस्सा है।"
    },
    {
        question: "प्रश्न 33. मानव शरीर में सबसे बड़ा लसीकाभ अंग कौन सा है?",
        answers: shuffle([
            { text: "थाइमस", correct: false },
            { text: "टॉन्सिल", correct: false },
            { text: "प्लीहा (Spleen)", correct: true },
            { text: "अस्थि मज्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्लीहा, जो पेट के ऊपरी बाएं हिस्से में स्थित है, शरीर का सबसे बड़ा लसीकाभ अंग है।"
    },
    {
        question: "प्रश्न 34. लिम्फोसाइट्स का उत्पादन कहाँ होता है?",
        answers: shuffle([
            { text: "केवल थाइमस में", correct: false },
            { text: "केवल प्लीहा में", correct: false },
            { text: "अस्थि मज्जा (Bone Marrow) में", correct: true },
            { text: "केवल लसीका पर्व में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सभी रक्त कोशिकाओं की तरह, बी और टी दोनों प्रकार के लिम्फोसाइट्स का उत्पादन अस्थि मज्जा में हेमेटोपोएटिक स्टेम कोशिकाओं से होता है।"
    },
    {
        question: "प्रश्न 35. प्रतिरक्षादमनकारी (Immunosuppressants) दवाओं का उपयोग क्यों किया जाता है?",
        answers: shuffle([
            { text: "संक्रमण का इलाज करने के लिए", correct: false },
            { text: "अंग प्रत्यारोपण के बाद अस्वीकृति को रोकने के लिए", correct: true },
            { text: "टीकाकरण के प्रभाव को बढ़ाने के लिए", correct: false },
            { text: "एलर्जी का इलाज करने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिरक्षादमनकारी दवाएं प्रतिरक्षा प्रणाली की गतिविधि को कम कर देती हैं ताकि वह प्रत्यारोपित अंग पर हमला न करे।<br><br><i class='fa-solid fa-angles-right icon'></i> इनका उपयोग ऑटोइम्यून बीमारियों के इलाज के लिए भी किया जाता है।"
    },
    {
        question: "प्रश्न 36. त्वचा प्रतिरक्षा प्रणाली का हिस्सा कैसे है?",
        answers: shuffle([
            { text: "यह एंटीबॉडी का उत्पादन करती है", correct: false },
            { text: "यह एक भौतिक अवरोधक के रूप में कार्य करती है", correct: true },
            { text: "यह टी-कोशिकाओं को परिपक्व करती है", correct: false },
            { text: "यह रक्त को फ़िल्टर करती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> त्वचा सहज प्रतिरक्षा की पहली पंक्ति का एक महत्वपूर्ण हिस्सा है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक अभेद्य भौतिक अवरोधक बनाती है जो अधिकांश रोगाणुओं को शरीर में प्रवेश करने से रोकता है।"
    },
    {
        question: "प्रश्न 37. सूजन (Inflammation) की प्रतिक्रिया के मुख्य लक्षण क्या हैं?",
        answers: shuffle([
            { text: "केवल दर्द और खुजली", correct: false },
            { text: "लाली, गर्मी, सूजन और दर्द", correct: true },
            { text: "ठंड लगना और कंपकंपी", correct: false },
            { text: "केवल थकान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये सूजन के चार क्लासिक संकेत हैं, जो चोट या संक्रमण के स्थल पर रक्त के प्रवाह में वृद्धि और प्रतिरक्षा कोशिकाओं के जमा होने के कारण होते हैं।"
    },
    {
        question: "प्रश्न 38. एंटी-टॉक्सिन (Anti-toxin) इंजेक्शन किस प्रकार की प्रतिरक्षा प्रदान करता है?",
        answers: shuffle([
            { text: "कृत्रिम सक्रिय प्रतिरक्षा", correct: false },
            { text: "कृत्रिम निष्क्रिय प्रतिरक्षा", correct: true },
            { text: "प्राकृतिक सक्रिय प्रतिरक्षा", correct: false },
            { text: "प्राकृतिक निष्क्रिय प्रतिरक्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंटी-टॉक्सिन में किसी विशेष विष (जैसे टेटनस टॉक्सिन) के खिलाफ बनी-बनाई एंटीबॉडी होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह तत्काल लेकिन अस्थायी सुरक्षा प्रदान करता है।"
    },
    {
        question: "प्रश्न 39. प्राकृतिक मारक कोशिकाएं (NK cells) किसका हिस्सा हैं?",
        answers: shuffle([
            { text: "उपार्जित प्रतिरक्षा", correct: false },
            { text: "सहज प्रतिरक्षा", correct: true },
            { text: "ह्यूमरल प्रतिरक्षा", correct: false },
            { text: "केवल द्वितीयक प्रतिरक्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्राकृतिक मारक (Natural Killer) कोशिकाएं लिम्फोसाइट्स का एक प्रकार हैं जो सहज प्रतिरक्षा प्रणाली का हिस्सा हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> वे पहले से संपर्क में आए बिना ही संक्रमित या कैंसरग्रस्त कोशिकाओं को पहचानकर मार सकती हैं।"
    },
    {
        question: "प्रश्न 40. मोनोक्लोनल एंटीबॉडी (Monoclonal antibodies) क्या हैं?",
        answers: shuffle([
            { text: "विभिन्न स्रोतों से प्राप्त एंटीबॉडी का मिश्रण", correct: false },
            { text: "प्रयोगशाला में एक ही प्रकार की प्रतिरक्षा कोशिका से उत्पादित समान एंटीबॉडी", correct: true },
            { text: "पौधों से प्राप्त एंटीबॉडी", correct: false },
            { text: "रासायनिक रूप से संश्लेषित प्रोटीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोनोक्लोनल एंटीबॉडी प्रयोगशाला में बनाई जाती हैं और वे सभी एक समान होती हैं क्योंकि वे एक ही पैरेंट बी-सेल क्लोन से उत्पन्न होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> वे एक ही विशिष्ट एपिटोप को लक्षित करती हैं और इनका उपयोग निदान और उपचार में किया जाता है।"
    },
    {
        question: "प्रश्न 41. स्व-प्रतिरक्षा रोग का एक उदाहरण कौन सा है?",
        answers: shuffle([
            { text: "एड्स", correct: false },
            { text: "खसरा", correct: false },
            { text: "रूमेटाइड आर्थराइटिस", correct: true },
            { text: "तपेदिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रूमेटाइड आर्थराइटिस एक ऑटोइम्यून बीमारी है जिसमें प्रतिरक्षा प्रणाली जोड़ों की परत (साइनोवियल झिल्ली) पर हमला करती है, जिससे जोड़ों में सूजन और दर्द होता है।"
    },
    {
        question: "प्रश्न 42. उस प्रक्रिया को क्या कहते हैं जिसमें एंटीबॉडी रोगाणुओं को लेप कर देती हैं ताकि भक्षक कोशिकाएं उन्हें आसानी से पहचान सकें?",
        answers: shuffle([
            { text: "न्यूट्रलाइजेशन", correct: false },
            { text: "ऑप्सोनाइजेशन", correct: true },
            { text: "एग्लूटिनेशन", correct: false },
            { text: "प्रेसिपिटेशन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑप्सोनाइजेशन की प्रक्रिया में, एंटीबॉडी या पूरक प्रोटीन रोगाणु की सतह से जुड़ जाते हैं, जिससे वे मैक्रोफेज जैसी भक्षक कोशिकाओं के लिए अधिक \"स्वादिष्ट\" या पहचानने योग्य बन जाते हैं।"
    },
    {
        question: "प्रश्न 43. मानव में बी-लिम्फोसाइट्स का निर्माण और परिपक्वता कहाँ होती है?",
        answers: shuffle([
            { text: "थाइमस", correct: false },
            { text: "प्लीहा", correct: false },
            { text: "अस्थि मज्जा (Bone Marrow)", correct: true },
            { text: "लसीका पर्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टी-कोशिकाओं के विपरीत, बी-लिम्फोसाइट्स का निर्माण और परिपक्वता दोनों ही अस्थि मज्जा में होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'B' का अर्थ बोन मैरो है।"
    },
    {
        question: "प्रश्न 44. 'एनफिलेक्सिस' (Anaphylaxis) क्या है?",
        answers: shuffle([
            { text: "एक हल्की एलर्जी प्रतिक्रिया", correct: false },
            { text: "एक गंभीर, जानलेवा एलर्जी प्रतिक्रिया", correct: true },
            { text: "एक ऑटोइम्यून बीमारी", correct: false },
            { text: "एक प्रतिरक्षा की कमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एनफिलेक्सिस एक तीव्र और गंभीर प्रणालीगत एलर्जी प्रतिक्रिया है जो कुछ ही मिनटों में हो सकती है और यदि तत्काल इलाज न किया जाए तो यह घातक हो सकती है।"
    },
    {
        question: "प्रश्न 45. कौन सा इम्युनोग्लोबुलिन एक पेंटामर (पांच इकाइयों से बना) के रूप में मौजूद होता है?",
        answers: shuffle([
            { text: "IgG", correct: false },
            { text: "IgA", correct: false },
            { text: "IgM", correct: true },
            { text: "IgE", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> IgM पांच 'Y' आकार की इकाइयों से बना एक बड़ा अणु है, जो इसे रक्त में रोगजनकों को एकसाथ बांधने (एग्लूटिनेशन) में बहुत प्रभावी बनाता है।"
    },
    {
        question: "प्रश्न 46. लसीका पर्व (Lymph nodes) का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "हार्मोन का उत्पादन", correct: false },
            { text: "लसीका (Lymph) को फ़िल्टर करना", correct: true },
            { text: "रक्त का निर्माण", correct: false },
            { text: "एंजाइम का स्राव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लसीका पर्व छोटे, बीन के आकार के अंग होते हैं जो लसीका वाहिकाओं के साथ स्थित होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> वे लसीका द्रव को फ़िल्टर करते हैं और उसमें मौजूद रोगाणुओं और कैंसर कोशिकाओं को फंसाकर नष्ट कर देते हैं।"
    },
    {
        question: "प्रश्न 47. उस प्रतिरक्षा को क्या कहते हैं जो एक प्रजाति को उन बीमारियों से बचाती है जो आमतौर पर दूसरी प्रजातियों को प्रभावित करती हैं?",
        answers: shuffle([
            { text: "उपार्जित प्रतिरक्षा", correct: false },
            { text: "प्रजाति प्रतिरक्षा (सहज प्रतिरक्षा का एक रूप)", correct: true },
            { text: "निष्क्रिय प्रतिरक्षा", correct: false },
            { text: "सेल-मध्यस्थ प्रतिरक्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रजाति प्रतिरक्षा आनुवंशिक कारकों पर आधारित होती है जो एक प्रजाति को कुछ रोगजनकों के प्रति स्वाभाविक रूप से प्रतिरोधी बनाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> उदाहरण के लिए, मनुष्य कुत्तों को होने वाले डिस्टेंपर से प्रतिरक्षित हैं।"
    },
    {
        question: "प्रश्न 48. एंटीजन-प्रेजेंटिंग कोशिका (Antigen-Presenting Cell - APC) का एक उदाहरण है:",
        answers: shuffle([
            { text: "लाल रक्त कोशिका", correct: false },
            { text: "प्लेटलेट", correct: false },
            { text: "मैक्रोफेज", correct: true },
            { text: "प्लाज्मा कोशिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मैक्रोफेज, डेंड्राइटिक कोशिकाएं और बी-कोशिकाएं पेशेवर APC हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> वे रोगाणुओं का भक्षण करती हैं, उन्हें टुकड़ों में तोड़ती हैं, और फिर उन टुकड़ों (एंटीजन) को अपनी सतह पर सहायक टी-कोशिकाओं को प्रस्तुत करती हैं।"
    },
    {
        question: "प्रश्न 49. शरीर का कौन सा अंग \"RBC का कब्रिस्तान\" कहलाता है?",
        answers: shuffle([
            { text: "यकृत", correct: false },
            { text: "अस्थि मज्जा", correct: false },
            { text: "प्लीहा", correct: true },
            { text: "थाइमस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्लीहा न केवल रक्त में रोगाणुओं को फ़िल्टर करता है, बल्कि यह पुरानी और क्षतिग्रस्त लाल रक्त कोशिकाओं (RBC) को भी रक्त प्रवाह से हटाता और नष्ट करता है।"
    },
    {
        question: "प्रश्न 50. पहली बार चेचक के टीके का आविष्कार किसने किया था?",
        answers: shuffle([
            { text: "लुई पाश्चर", correct: false },
            { text: "रॉबर्ट कोच", correct: false },
            { text: "अलेक्जेंडर फ्लेमिंग", correct: false },
            { text: "एडवर्ड जेनर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एडवर्ड जेनर को \"इम्यूनोलॉजी का जनक\" माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने 1796 में चेचक के टीके का विकास किया, जो टीकाकरण के सिद्धांत की नींव बना।"
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