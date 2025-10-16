const questions = [
    {
        topHeading: "संविधान सभा और उसके गठन पर आधारित 50 बहुविकल्पीय प्रश्न (quiz_no.)"
    },
    {
        question: "प्रश्न 1. भारत का संविधान किसके द्वारा हस्तलिखित है?",
        answers: shuffle([
            { text: "नंदलाल बोस", correct: false },
            { text: "व्यवहार राममनोहर सिन्हा", correct: false },
            { text: "प्रेम बिहारी नारायण रायजादा", correct: true },
            { text: "बी. आर. अम्बेडकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत के मूल संविधान को इटैलिक शैली में सुंदर लिखावट के साथ प्रेम बिहारी नारायण रायजादा द्वारा हस्तलिखित किया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने इस कार्य के लिए कोई पारिश्रमिक नहीं लिया, बस हर पृष्ठ पर अपना नाम और अंतिम पृष्ठ पर अपने दादा का नाम लिखने की अनुमति मांगी थी।"
    },
    {
        question: "प्रश्न 2. कैबिनेट मिशन योजना के अंतर्गत संविधान निर्मात्री परिषद् में प्रत्येक प्रांत को आवंटित सदस्य संख्या निर्धारित करने के लिए एक प्रतिनिधि कितनी जनसंख्या के अनुपात में था?",
        answers: shuffle([
            { text: "8 लाख व्यक्ति", correct: false },
            { text: "10 लाख व्यक्ति", correct: true },
            { text: "12 लाख व्यक्ति", correct: false },
            { text: "15 लाख व्यक्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैबिनेट मिशन योजना 1946 के अनुसार, यह निर्धारित किया गया था कि संविधान सभा की सीटों का आवंटन प्रत्येक प्रांत को उनकी जनसंख्या के अनुपात में किया जाएगा।<br><br><i class='fa-solid fa-angles-right icon'></i> मोटे तौर पर, प्रति दस लाख लोगों पर एक सीट आवंटित की गई थी।"
    },
    {
        question: "प्रश्न 3. संविधान सभा के सदस्यों को निम्न में से किसने प्रत्यक्ष रूप से निर्वाचित किया?",
        answers: shuffle([
            { text: "a) प्रांतों की विधानसभा", correct: true },
            { text: "b) संघीय व्यवस्थापिका", correct: false },
            { text: "a), b) दोनों", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान सभा के सदस्य वयस्क मताधिकार के आधार पर प्रत्यक्ष रूप से निर्वाचित नहीं हुए थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्हें 1946 में हुए प्रांतीय चुनावों के आधार पर प्रांतों की विधानसभाओं के सदस्यों द्वारा अप्रत्यक्ष रूप से चुना गया था।"
    },
    {
        question: "प्रश्न 4. संविधान सभा में किस प्रांत का प्रतिनिधित्व सबसे अधिक था?",
        answers: shuffle([
            { text: "बंगाल", correct: false },
            { text: "चेन्नई", correct: false },
            { text: "बम्बई", correct: false },
            { text: "संयुक्त प्रांत", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जनसंख्या के आधार पर सीटों का आवंटन होने के कारण, सबसे अधिक जनसंख्या वाले प्रांत, यानी संयुक्त प्रांत (वर्तमान उत्तर प्रदेश), को संविधान सभा में सबसे अधिक 55 सीटें मिली थीं।"
    },
    {
        question: "प्रश्न 5. संविधान सभा में किस देशी रियासत के प्रतिनिधि ने भाग नहीं लिया था?",
        answers: shuffle([
            { text: "जूनागढ़", correct: false },
            { text: "कश्मीर", correct: false },
            { text: "हैदराबाद", correct: true },
            { text: "मैसूर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हैदराबाद एक ऐसी देशी रियासत थी जिसके प्रतिनिधियों ने संविधान सभा में भाग नहीं लिया था।<br><br><i class='fa-solid fa-angles-right icon'></i> हैदराबाद के निजाम ने अपनी रियासत को एक स्वतंत्र राज्य के रूप में रखने का निर्णय लिया था, हालांकि बाद में इसे भारत में मिला लिया गया।"
    },
    {
        question: "प्रश्न 6. किसने सुझाव दिया था कि भारत की स्वतंत्रता के बाद भारतीय राष्ट्रीय कांग्रेस को एक राजनीतिक दल के रूप में भंग कर दिया जाना चाहिए?",
        answers: shuffle([
            { text: "सी. राजगोपालाचारी", correct: false },
            { text: "जयप्रकाश नारायण", correct: false },
            { text: "महात्मा गांधी", correct: true },
            { text: "आचार्य कृपलानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महात्मा गांधी का मानना था कि कांग्रेस का मुख्य उद्देश्य भारत को स्वतंत्रता दिलाना था, और यह उद्देश्य पूरा हो जाने के बाद इसे एक राजनीतिक दल के रूप में समाप्त करके एक 'लोक सेवक संघ' में बदल देना चाहिए।"
    },
    {
        question: "प्रश्न 7. संविधान सभा के उद्घाटन अधिवेशन की अध्यक्षता किसने की थी?",
        answers: shuffle([
            { text: "जवाहरलाल नेहरू", correct: false },
            { text: "सच्चिदानंद सिन्हा", correct: true },
            { text: "बी. आर. अम्बेडकर", correct: false },
            { text: "सी. राजगोपालाचारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 9 दिसंबर 1946 को हुई संविधान सभा की पहली बैठक में, सबसे वरिष्ठ सदस्य डॉ. सच्चिदानंद सिन्हा को सभा का अस्थायी अध्यक्ष चुना गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह फ्रांसीसी प्रथा का अनुसरण करते हुए किया गया था।"
    },
    {
        question: "प्रश्न 8. संविधान सभा का स्थायी अध्यक्ष किसे चुना गया था?",
        answers: shuffle([
            { text: "बी. एन. राव", correct: false },
            { text: "बी. आर. अम्बेडकर", correct: false },
            { text: "डॉ. राजेंद्र प्रसाद", correct: true },
            { text: "सच्चिदानंद सिन्हा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 11 दिसंबर 1946 को, डॉ. राजेंद्र प्रसाद को सर्वसम्मति से संविधान सभा का स्थायी अध्यक्ष चुना गया।<br><br><i class='fa-solid fa-angles-right icon'></i> वे संविधान निर्माण की प्रक्रिया पूरी होने तक इस पद पर बने रहे।"
    },
    {
        question: "प्रश्न 9. संविधान सभा द्वारा 'उद्देश्य प्रस्ताव' (Objective Resolution) कब प्रस्तुत और स्वीकृत किया गया?",
        answers: shuffle([
            { text: "13 दिसंबर 1946 को प्रस्तुत, 22 जनवरी 1947 को स्वीकृत", correct: true },
            { text: "9 दिसंबर 1946 को प्रस्तुत, 26 जनवरी 1947 को स्वीकृत", correct: false },
            { text: "26 नवंबर 1949 को प्रस्तुत, 26 जनवरी 1950 को स्वीकृत", correct: false },
            { text: "15 अगस्त 1947 को प्रस्तुत, 26 नवंबर 1949 को स्वीकृत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पंडित जवाहरलाल नेहरू ने 13 दिसंबर 1946 को संविधान सभा के समक्ष ऐतिहासिक 'उद्देश्य प्रस्ताव' प्रस्तुत किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रस्ताव में संविधान के मूल आदर्शों और दर्शन की रूपरेखा प्रस्तुत की गई थी, जिसे 22 जनवरी 1947 को सभा ने सर्वसम्मति से स्वीकार कर लिया।<br><br><i class='fa-solid fa-angles-right icon'></i> यही प्रस्ताव बाद में संविधान की प्रस्तावना का आधार बना।"
    },
    {
        question: "प्रश्न 10. भारतीय संविधान को बनाने हेतु भारतीय संविधान सभा के कुल कितने अधिवेशन हुए थे?",
        answers: shuffle([
            { text: "7", correct: false },
            { text: "9", correct: false },
            { text: "11", correct: true },
            { text: "15", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के निर्माण में 2 वर्ष, 11 महीने और 18 दिन का समय लगा।<br><br><i class='fa-solid fa-angles-right icon'></i> इस पूरी अवधि के दौरान, संविधान सभा के कुल 11 अधिवेशन हुए थे।<br><br><i class='fa-solid fa-angles-right icon'></i> 11वें अधिवेशन के अंतिम दिन 26 नवंबर 1949 को संविधान को अंगीकृत किया गया।"
    },
    {
        question: "प्रश्न 11. संविधान सभा की प्रारूप (मसौदा) समिति के अध्यक्ष कौन थे?",
        answers: shuffle([
            { text: "डॉ. राजेंद्र प्रसाद", correct: false },
            { text: "जवाहरलाल नेहरू", correct: false },
            { text: "डॉ. बी. आर. अम्बेडकर", correct: true },
            { text: "सरदार वल्लभभाई पटेल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के निर्माण में सबसे महत्वपूर्ण समितियों में से एक, प्रारूप समिति का गठन 29 अगस्त 1947 को किया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> डॉ. बी. आर. अम्बेडकर को इस 7 सदस्यीय समिति का अध्यक्ष नियुक्त किया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी कारण उन्हें 'भारतीय संविधान का जनक' भी कहा जाता है।"
    },
    {
        question: "प्रश्न 12. संविधान की प्रारूप समिति के समक्ष प्रस्तावना का प्रस्ताव किसने रखा?",
        answers: shuffle([
            { text: "डॉ. बी. आर. अम्बेडकर", correct: false },
            { text: "बी. एन. राव", correct: false },
            { text: "महात्मा गांधी", correct: false },
            { text: "जवाहरलाल नेहरू", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान की प्रस्तावना का आधार पंडित जवाहरलाल नेहरू द्वारा प्रस्तुत 'उद्देश्य प्रस्ताव' ही था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी प्रस्ताव के आदर्शों को संविधान की प्रस्तावना में समाहित किया गया।"
    },
    {
        question: "प्रश्न 13. भारत की संविधान सभा ने राष्ट्रीय ध्वज को सर्वप्रथम कब स्वीकार किया?",
        answers: shuffle([
            { text: "22 जुलाई 1947", correct: true },
            { text: "23 जुलाई 1947", correct: false },
            { text: "25 जुलाई 1947", correct: false },
            { text: "15 अगस्त 1947", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान सभा ने अपनी चौथी बैठक में 22 जुलाई 1947 को तिरंगे को भारत के राष्ट्रीय ध्वज के रूप में अंगीकार किया।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे पिंगली वेंकैया द्वारा डिजाइन किया गया था।"
    },
    {
        question: "प्रश्न 14. संविधान सभा के संवैधानिक सलाहकार (Constitutional Adviser) कौन थे?",
        answers: shuffle([
            { text: "शरत चंद्र बोस", correct: false },
            { text: "के. एम. मुंशी", correct: false },
            { text: "रफी अहमद किदवई", correct: false },
            { text: "बेनेगल नरसिंह राव (बी. एन. राव)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सर बेनेगल नरसिंह राव, एक प्रसिद्ध न्यायविद और सिविल सेवक, को संविधान सभा का संवैधानिक सलाहकार नियुक्त किया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने संविधान का प्रारंभिक मसौदा तैयार किया जिस पर प्रारूप समिति ने विचार-विमर्श किया।"
    },
    {
        question: "प्रश्न 15. भारतीय संविधान सभा में महिला सदस्यों की कुल संख्या कितनी थी?",
        answers: shuffle([
            { text: "10", correct: false },
            { text: "12", correct: false },
            { text: "13", correct: false },
            { text: "15", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान सभा में कुल 15 महिला सदस्य थीं, जिनमें सरोजिनी नायडू, हंसा मेहता, दुर्गाबाई देशमुख और विजयलक्ष्मी पंडित जैसी प्रमुख हस्तियां शामिल थीं।"
    },
    {
        question: "प्रश्न 16. संविधान सभा के कितने उपस्थित सदस्यों ने संविधान पर हस्ताक्षर किए?",
        answers: shuffle([
            { text: "262", correct: false },
            { text: "284", correct: true },
            { text: "287", correct: false },
            { text: "289", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 26 नवंबर 1949 को जब संविधान को अंतिम रूप से पारित किया गया, तो सभा में उपस्थित 299 सदस्यों में से 284 सदस्यों ने इस पर अपने हस्ताक्षर किए।"
    },
    {
        question: "प्रश्न 17. भारत का संविधान पूर्ण रूप से कब तैयार हुआ?",
        answers: shuffle([
            { text: "26 जनवरी, 1950", correct: false },
            { text: "26 नवम्बर, 1949", correct: true },
            { text: "11 फरवरी, 1948", correct: false },
            { text: "15 अगस्त, 1947", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान सभा द्वारा संविधान का निर्माण कार्य 26 नवंबर 1949 को पूरा कर लिया गया था और इसी दिन इसे अंगीकृत, अधिनियमित और आत्मार्पित किया गया।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी दिन को 'संविधान दिवस' के रूप में मनाया जाता है।"
    },
    {
        question: "प्रश्न 18. भारतीय संविधान कब लागू हुआ था?",
        answers: shuffle([
            { text: "26 जनवरी, 1950", correct: true },
            { text: "26 जनवरी, 1952", correct: false },
            { text: "15 अगस्त, 1948", correct: false },
            { text: "26 नवम्बर, 1949", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि संविधान 26 नवंबर 1949 को बनकर तैयार हो गया था, लेकिन इसे पूर्ण रूप से 26 जनवरी 1950 को लागू किया गया।<br><br><i class='fa-solid fa-angles-right icon'></i> इस तिथि को इसलिए चुना गया क्योंकि 1930 में इसी दिन भारतीय राष्ट्रीय कांग्रेस ने 'पूर्ण स्वराज' दिवस मनाया था।"
    },
    {
        question: "प्रश्न 19. निम्नलिखित में से कौन प्रारूप समिति का सदस्य नहीं था?",
        answers: shuffle([
            { text: "जवाहरलाल नेहरू", correct: true },
            { text: "मोहम्मद सादुल्लाह", correct: false },
            { text: "के. एम. मुंशी", correct: false },
            { text: "गोपालस्वामी आयंगर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रारूप समिति के 7 सदस्य थे: डॉ. बी. आर. अम्बेडकर (अध्यक्ष), एन. गोपालस्वामी आयंगर, अल्लादी कृष्णास्वामी अय्यर, डॉ. के. एम. मुंशी, सैयद मोहम्मद सादुल्लाह, एन. माधव राव (बी. एल. मित्तर के स्थान पर) और टी. टी. कृष्णामाचारी (डी. पी. खेतान के स्थान पर)।<br><br><i class='fa-solid fa-angles-right icon'></i> जवाहरलाल नेहरू संघ संविधान समिति के अध्यक्ष थे, प्रारूप समिति के नहीं।"
    },
    {
        question: "प्रश्न 20. संविधान सभा ने भारत के संविधान को कब स्वीकृत किया था?",
        answers: shuffle([
            { text: "12 दिसम्बर 1946", correct: false },
            { text: "15 अगस्त 1947", correct: false },
            { text: "26 नवम्बर 1949", correct: true },
            { text: "26 जनवरी 1950", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 26 नवंबर 1949 को संविधान सभा ने भारत के संविधान को अपनाया या स्वीकृत किया।<br><br><i class='fa-solid fa-angles-right icon'></i> इस दिन नागरिकता, चुनाव, अंतरिम संसद से संबंधित कुछ प्रावधान तत्काल प्रभाव से लागू हो गए।"
    },
    {
        question: "प्रश्न 21. भारत एक 'गणराज्य' है, इसका अर्थ है:",
        answers: shuffle([
            { text: "सभी मामलों में अंतिम अधिकार जनता के पास है।", correct: false },
            { text: "भारत में संसदीय शासन व्यवस्था है।", correct: false },
            { text: "भारत में वंशानुगत शासक नहीं है।", correct: true },
            { text: "भारत राज्यों का एक संघ है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गणराज्य' या 'गणतंत्र' का अर्थ है कि राष्ट्र का प्रमुख (राष्ट्रपति) वंशानुगत न होकर जनता द्वारा प्रत्यक्ष या अप्रत्यक्ष रूप से एक निश्चित अवधि के लिए चुना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत का राष्ट्रपति अप्रत्यक्ष रूप से चुना जाता है।"
    },
    {
        question: "प्रश्न 22. संविधान सभा के विचार का औपचारिक रूप से प्रतिपादन किसके द्वारा किया गया?",
        answers: shuffle([
            { text: "मोतीलाल नेहरू", correct: false },
            { text: "जवाहरलाल नेहरू", correct: false },
            { text: "एम. एन. रॉय", correct: true },
            { text: "महात्मा गांधी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि स्वराज पार्टी ने सबसे पहले यह विचार रखा था, लेकिन एक संविधान सभा के विचार को औपचारिक रूप से प्रतिपादित करने का श्रेय वामपंथी नेता एम. एन. रॉय को दिया जाता है, जिन्होंने 1934 में यह विचार प्रस्तुत किया।"
    },
    {
        question: "प्रश्न 23. संविधान सभा को किसने 'मूर्त रूप' प्रदान किया?",
        answers: shuffle([
            { text: "महात्मा गांधी", correct: false },
            { text: "मोतीलाल नेहरू", correct: false },
            { text: "एम. एन. रॉय", correct: false },
            { text: "जवाहरलाल नेहरू", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एम. एन. रॉय के विचार को लोकप्रिय बनाने और कांग्रेस के मंच से इसे एक ठोस और मूर्त रूप प्रदान करने का कार्य पंडित जवाहरलाल नेहरू ने किया।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने ही इसे भारतीय राष्ट्रीय कांग्रेस की आधिकारिक मांग बनाया।"
    },
    {
        question: "प्रश्न 24. 1938 में किस व्यक्ति ने वयस्क मताधिकार के आधार पर संविधान सभा के गठन की मांग की?",
        answers: shuffle([
            { text: "महात्मा गांधी", correct: false },
            { text: "जवाहरलाल नेहरू", correct: true },
            { text: "सुभाष चंद्र बोस", correct: false },
            { text: "वल्लभभाई पटेल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1938 में, भारतीय राष्ट्रीय कांग्रेस की ओर से पंडित जवाहरलाल नेहरू ने घोषणा की कि स्वतंत्र भारत के संविधान का निर्माण वयस्क मताधिकार के आधार पर चुनी गई संविधान सभा द्वारा किया जाएगा और इसमें कोई बाहरी हस्तक्षेप नहीं होगा।"
    },
    {
        question: "प्रश्न 25. संविधान सभा ने डॉ. बी. आर. अम्बेडकर की अध्यक्षता में प्रारूप समिति का गठन कब किया?",
        answers: shuffle([
            { text: "13 दिसंबर, 1946", correct: false },
            { text: "22 जनवरी, 1947", correct: false },
            { text: "3 जून, 1947", correct: false },
            { text: "29 अगस्त, 1947", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान का मसौदा तैयार करने के लिए सबसे महत्वपूर्ण समिति, प्रारूप समिति, का गठन 29 अगस्त 1947 को किया गया था, जिसके अध्यक्ष के रूप में डॉ. अम्बेडकर को चुना गया।"
    },
     {
        question: "प्रश्न 26. मुस्लिम लीग ने किस कारण संविधान सभा का बहिष्कार किया?",
        answers: shuffle([
            { text: "मुस्लिम लीग संविधान सभा का अध्यक्ष किसी मुस्लिम को बनाना चाहता था।", correct: false },
            { text: "मुस्लिम लीग को संविधान सभा में उचित प्रतिनिधित्व नहीं मिला था।", correct: false },
            { text: "मुस्लिम लीग मुस्लिमों के लिए एक अलग संविधान सभा चाहता था।", correct: true },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुस्लिम लीग ने संविधान सभा का बहिष्कार किया क्योंकि वह भारत के विभाजन और मुस्लिमों के लिए एक अलग राष्ट्र, पाकिस्तान, की मांग कर रही थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, वह पाकिस्तान के लिए एक अलग संविधान सभा चाहती थी।"
    },
    {
        question: "प्रश्न 27. संविधान सभा का चुनाव निम्न में से किस आधार पर हुआ?",
        answers: shuffle([
            { text: "समान मताधिकार", correct: false },
            { text: "सर्व मताधिकार", correct: false },
            { text: "सीमित मताधिकार", correct: false },
            { text: "वर्गीय मताधिकार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान सभा के सदस्यों का चुनाव प्रांतीय विधानसभाओं के सदस्यों द्वारा आनुपातिक प्रतिनिधित्व प्रणाली और एकल संक्रमणीय मत के माध्यम से किया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> सीटों को तीन प्रमुख समुदायों - मुस्लिम, सिख और सामान्य (मुस्लिम और सिख को छोड़कर) - में उनकी जनसंख्या के अनुपात में विभाजित किया गया था, जिसे वर्गीय मताधिकार कहा जा सकता है।"
    },
    {
        question: "प्रश्न 28. संविधान सभा के सदस्य प्रतिनिधि थे:",
        answers: shuffle([
            { text: "जनता द्वारा प्रत्यक्ष निर्वाचित", correct: false },
            { text: "जनता द्वारा अप्रत्यक्ष निर्वाचित", correct: true },
            { text: "गवर्नर जनरल द्वारा मनोनीत", correct: false },
            { text: "कांग्रेस और मुस्लिम लीग द्वारा नामांकित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान सभा के सदस्य सीधे जनता द्वारा नहीं चुने गए थे।<br><br><i class='fa-solid fa-angles-right icon'></i> वे प्रांतीय विधानसभाओं के सदस्यों द्वारा चुने गए थे, जिन्हें स्वयं 1946 में एक सीमित मताधिकार के आधार पर चुना गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, यह एक अप्रत्यक्ष निर्वाचन था।"
    },
    {
        question: "प्रश्न 29. भारतीय संविधान निर्मात्री सभा:",
        answers: shuffle([
            { text: "प्रान्तीय विधानसभाओं द्वारा परोक्ष रूप से आनुपातिक प्रतिनिधित्व प्रणाली द्वारा चुनी गई थी।", correct: true },
            { text: "गवर्नर जनरल द्वारा इसका गठन किया गया था।", correct: false },
            { text: "वयस्क मताधिकार के आधार पर भारतीय नागरिकों द्वारा चुनी गई थी।", correct: false },
            { text: "ब्रिटिश संसद द्वारा गठित की गई थी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह कथन संविधान सभा के गठन की प्रक्रिया का सबसे सटीक वर्णन करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> सदस्यों का चुनाव अप्रत्यक्ष रूप से प्रांतीय विधानसभाओं द्वारा आनुपातिक प्रतिनिधित्व के आधार पर किया गया था।"
    },
    {
        question: "प्रश्न 30. भारतीय संविधान को किसने बनाया?",
        answers: shuffle([
            { text: "संविधान सभा ने", correct: true },
            { text: "ब्रिटिश संसद ने", correct: false },
            { text: "भारतीय संसद ने", correct: false },
            { text: "गवर्नर जनरल ने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान का निर्माण एक संप्रभु निकाय, 'संविधान सभा' द्वारा किया गया था, जिसे विशेष रूप से इसी उद्देश्य के लिए गठित किया गया था।"
    },
    {
        question: "प्रश्न 31. संविधान सभा के लिए चुनाव कब संपन्न हुए?",
        answers: shuffle([
            { text: "1945 में", correct: false },
            { text: "1946 में", correct: true },
            { text: "1947 में", correct: false },
            { text: "1948 में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैबिनेट मिशन योजना के तहत संविधान सभा के लिए चुनाव जुलाई-अगस्त 1946 में संपन्न हुए।<br><br><i class='fa-solid fa-angles-right icon'></i> इन चुनावों में भारतीय राष्ट्रीय कांग्रेस ने 208 सीटें जीतकर भारी बहुमत प्राप्त किया।"
    },
    {
        question: "प्रश्न 32. भारतीय संविधान सभा की स्थापना कब हुई?",
        answers: shuffle([
            { text: "10 जून, 1946", correct: false },
            { text: "9 दिसम्बर, 1946", correct: true },
            { text: "26 नवम्बर, 1949", correct: false },
            { text: "26 दिसम्बर, 1949", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान सभा की स्थापना उसकी पहली बैठक के साथ 9 दिसंबर 1946 को हुई।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी दिन से संविधान निर्माण की प्रक्रिया औपचारिक रूप से प्रारंभ हुई।"
    },
    {
        question: "प्रश्न 33. संविधान सभा का प्रथम अधिवेशन कहाँ हुआ था?",
        answers: shuffle([
            { text: "मुम्बई में", correct: false },
            { text: "कोलकाता में", correct: false },
            { text: "लाहौर में", correct: false },
            { text: "दिल्ली में", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान सभा का प्रथम अधिवेशन 9 दिसंबर 1946 को दिल्ली स्थित काउंसिल चैंबर के पुस्तकालय भवन में हुआ, जिसे अब संसद भवन का 'सेंट्रल हॉल' कहा जाता है।"
    },
    {
        question: "प्रश्न 34. संविधान सभा के प्रांतीय संविधान समिति के अध्यक्ष कौन थे?",
        answers: shuffle([
            { text: "डॉ. बी.आर. अम्बेडकर", correct: false },
            { text: "पंडित जवाहरलाल नेहरू", correct: false },
            { text: "डॉ. राजेंद्र प्रसाद", correct: false },
            { text: "सरदार वल्लभभाई पटेल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान सभा ने संविधान निर्माण के विभिन्न कार्यों के लिए कई समितियों का गठन किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> सरदार वल्लभभाई पटेल को प्रांतीय संविधान समिति और मौलिक अधिकारों एवं अल्पसंख्यकों संबंधी सलाहकार समिति का अध्यक्ष बनाया गया था।"
    },
    {
        question: "प्रश्न 35. संविधान सभा की संघ शक्ति समिति (Union Powers Committee) के अध्यक्ष कौन थे?",
        answers: shuffle([
            { text: "सरदार पटेल", correct: false },
            { text: "डॉ. बी.आर. अम्बेडकर", correct: false },
            { text: "अल्लादी कृष्णास्वामी अय्यर", correct: false },
            { text: "पंडित जवाहरलाल नेहरू", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पंडित जवाहरलाल नेहरू तीन प्रमुख समितियों के अध्यक्ष थे: संघ शक्ति समिति, संघीय संविधान समिति और राज्यों के लिए समिति (राज्यों से बातचीत करने वाली समिति)।"
    },
    {
        question: "प्रश्न 36. पुनर्गठन के फलस्वरूप वर्ष 1947 में संविधान सभा के सदस्यों की संख्या कितनी रह गयी?",
        answers: shuffle([
            { text: "289", correct: false },
            { text: "299", correct: true },
            { text: "324", correct: false },
            { text: "333", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> देश के विभाजन के बाद, मुस्लिम लीग के सदस्य (जो पाकिस्तान के क्षेत्रों से थे) संविधान सभा से अलग हो गए।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके परिणामस्वरूप, मूल 389 सदस्यों की संख्या घटकर 299 रह गई।"
    },
    {
        question: "प्रश्न 37. संविधान सभा में सभी निर्णय किस आधार पर लिए गए?",
        answers: shuffle([
            { text: "एकता और अखंडता", correct: false },
            { text: "बहुमत", correct: false },
            { text: "सर्वसम्मति", correct: false },
            { text: "सहमति और समायोजन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान सभा की एक अनूठी विशेषता यह थी कि इसमें अधिकांश निर्णय आम सहमति और समायोजन की भावना से लिए गए थे, न कि केवल बहुमत के आधार पर।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रयास यह था कि विभिन्न विचारों को समायोजित किया जाए और सर्वमान्य प्रावधान बनाए जाएं।"
    },
    {
        question: "प्रश्न 38. भारतीय संविधान के किस भाग को उसकी 'आत्मा' की आख्या प्रदान की गई है?",
        answers: shuffle([
            { text: "प्रस्तावना", correct: true },
            { text: "मौलिक अधिकार", correct: false },
            { text: "राज्य के नीति-निदेशक तत्व", correct: false },
            { text: "संविधान के सभी अनुच्छेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रस्तावना को संविधान की 'आत्मा' कहा जाता है क्योंकि यह संविधान के आदर्शों, उद्देश्यों और दर्शन को समाहित करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह संविधान निर्माताओं के विचारों को जानने की कुंजी है।"
    },
    {
        question: "प्रश्न 39. विभाजन के बाद भारतीय संविधान सभा में प्रांतों के लिए कितने सदस्य थे?",
        answers: shuffle([
            { text: "208", correct: false },
            { text: "229", correct: true },
            { text: "270", correct: false },
            { text: "296", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विभाजन के बाद संविधान सभा की कुल सदस्य संख्या 389 से घटकर 299 रह गई।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें भारतीय प्रांतों के प्रतिनिधियों की संख्या 296 से घटकर 229 हो गई और देसी रियासतों की संख्या 93 से घटकर 70 हो गई।"
    },
    {
        question: "प्रश्न 40. संविधान सभा द्वारा राष्ट्रगान 'जन-गण-मन' को कब अपनाया गया?",
        answers: shuffle([
            { text: "24 जनवरी 1950", correct: true },
            { text: "26 जनवरी 1950", correct: false },
            { text: "15 अगस्त 1947", correct: false },
            { text: "26 नवम्बर 1949", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान सभा की अंतिम बैठक 24 जनवरी 1950 को हुई।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी दिन रवींद्रनाथ टैगोर द्वारा रचित 'जन-गण-मन' को भारत के राष्ट्रगान के रूप में और बंकिम चंद्र चटर्जी द्वारा रचित 'वंदे मातरम' को राष्ट्रगीत के रूप में अपनाया गया।"
    },
    {
        question: "प्रश्न 41. स्वतंत्र भारत के पहले गवर्नर-जनरल कौन थे?",
        answers: shuffle([
            { text: "सी. राजगोपालाचारी", correct: false },
            { text: "लॉर्ड माउंटबेटन", correct: true },
            { text: "डॉ. राजेंद्र प्रसाद", correct: false },
            { text: "जवाहरलाल नेहरू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत की स्वतंत्रता के बाद, लॉर्ड माउंटबेटन को स्वतंत्र भारत के पहले गवर्नर-जनरल के रूप में बने रहने के लिए कहा गया।<br><br><i class='fa-solid fa-angles-right icon'></i> वह इस पद पर जून 1948 तक रहे।"
    },
    {
        question: "प्रश्न 42. स्वतंत्र भारत के प्रथम और अंतिम भारतीय गवर्नर-जनरल कौन थे?",
        answers: shuffle([
            { text: "सी. राजगोपालाचारी", correct: true },
            { text: "लॉर्ड माउंटबेटन", correct: false },
            { text: "डॉ. राजेंद्र प्रसाद", correct: false },
            { text: "डॉ. एस. राधाकृष्णन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लॉर्ड माउंटबेटन के बाद, चक्रवर्ती राजगोपालाचारी ने गवर्नर-जनरल का पद संभाला।<br><br><i class='fa-solid fa-angles-right icon'></i> वह स्वतंत्र भारत के दूसरे और एकमात्र भारतीय गवर्नर-जनरल थे।<br><br><i class='fa-solid fa-angles-right icon'></i> 1950 में संविधान लागू होने पर यह पद समाप्त कर दिया गया।"
    },
    {
        question: "प्रश्न 43. संविधान सभा के संचालन समिति (Steering Committee) के अध्यक्ष कौन थे?",
        answers: shuffle([
            { text: "बी. आर. अम्बेडकर", correct: false },
            { text: "जे.बी. कृपलानी", correct: false },
            { text: "डॉ. राजेंद्र प्रसाद", correct: true },
            { text: "के.एम. मुंशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डॉ. राजेंद्र प्रसाद संविधान सभा के अध्यक्ष होने के नाते, प्रक्रिया विषयक नियमों संबंधी समिति, संचालन समिति और वित्त एवं स्टाफ समिति के भी अध्यक्ष थे।"
    },
    {
        question: "प्रश्न 44. निम्नलिखित में से कौन, संविधान सभा का सदस्य नहीं था?",
        answers: shuffle([
            { text: "के. एम. मुंशी", correct: false },
            { text: "एन. गोपालस्वामी आयंगर", correct: false },
            { text: "एच. एच. बेग", correct: true },
            { text: "टी. टी. कृष्णामाचारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> के. एम. मुंशी, एन. गोपालस्वामी आयंगर और टी. टी. कृष्णामाचारी, ये सभी संविधान सभा के सदस्य थे और प्रारूप समिति में भी शामिल थे।<br><br><i class='fa-solid fa-angles-right icon'></i> एच. एच. बेग संविधान सभा के सदस्य नहीं थे।"
    },
    {
        question: "प्रश्न 45. दुनिया के सबसे लंबे लिखित संविधान का गौरव किस देश के संविधान को प्राप्त है?",
        answers: shuffle([
            { text: "अमेरिका", correct: false },
            { text: "ब्रिटेन", correct: false },
            { text: "भारत", correct: true },
            { text: "कनाडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत का संविधान दुनिया का सबसे लंबा लिखित संविधान है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें देश की विशालता, विविधता और केंद्र तथा राज्यों के लिए एकल संविधान होने जैसे कई कारणों से विस्तृत प्रावधान किए गए हैं।"
    },
    {
        question: "प्रश्न 46. भारतीय संविधान की संरचना किस प्रकार की है?",
        answers: shuffle([
            { text: "संघीय", correct: false },
            { text: "एकात्मक", correct: false },
            { text: "कठोर", correct: false },
            { text: "कुछ एकात्मक, कुछ कठोर (संरचना में संघीय, भावना में एकात्मक)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान को अक्सर 'अर्ध-संघीय' (quasi-federal) कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी संरचना संघीय है, जिसमें केंद्र और राज्यों के बीच शक्तियों का विभाजन है, लेकिन इसमें कई एकात्मक विशेषताएं भी हैं, जैसे एकल नागरिकता, एक शक्तिशाली केंद्र और आपातकालीन प्रावधान, जो इसे भावना में एकात्मक बनाते हैं।"
    },
    {
        question: "प्रश्न 47. संविधान सभा में प्रस्तुत उद्देश्य प्रस्ताव में अभिव्यक्त विचार को भारतीय संविधान के किस भाग में पूर्णतः शामिल किया गया है?",
        answers: shuffle([
            { text: "प्रस्तावना", correct: true },
            { text: "मौलिक अधिकार", correct: false },
            { text: "राज्य के नीति निदेशक तत्व", correct: false },
            { text: "मूल कर्तव्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उद्देश्य प्रस्ताव में जो आदर्श और लक्ष्य निर्धारित किए गए थे, जैसे न्याय, स्वतंत्रता, समानता और बंधुत्व, उन्हें भारतीय संविधान की प्रस्तावना में पूरी तरह से शामिल किया गया है।"
    },
    {
        question: "प्रश्न 48. \"संविधान सभा कांग्रेस थी और कांग्रेस भारत था\" - यह किसने कहा था?",
        answers: shuffle([
            { text: "चर्चिल", correct: false },
            { text: "सी.आर. एटली", correct: false },
            { text: "लॉर्ड माउंटबेटन", correct: false },
            { text: "ग्रैनविले ऑस्टिन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रसिद्ध संविधान विशेषज्ञ ग्रैनविले ऑस्टिन ने अपनी पुस्तक 'द इंडियन कॉन्स्टिट्यूशन' में यह टिप्पणी की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका कारण यह था कि 1946 के चुनावों में कांग्रेस ने भारी जीत हासिल की थी और संविधान सभा में उसका पूर्ण प्रभुत्व था।"
    },
    {
        question: "प्रश्न 49. किस दिन से संविधान सभा का अंतरिम संसद के रूप में आविर्भाव हुआ?",
        answers: shuffle([
            { text: "24 जनवरी, 1950", correct: false },
            { text: "25 जनवरी, 1950", correct: false },
            { text: "26 जनवरी, 1950", correct: true },
            { text: "27 जनवरी, 1950", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब 26 जनवरी 1950 को संविधान पूरी तरह से लागू हुआ, तो संविधान सभा भंग हो गई और 1951-52 में पहले आम चुनाव होने तक इसने भारत की अंतरिम संसद के रूप में कार्य किया।"
    },
    {
        question: "प्रश्न 50. भारत के संविधान का निर्माता किसे माना जाता है?",
        answers: shuffle([
            { text: "महात्मा गांधी", correct: false },
            { text: "बी.आर. अम्बेडकर", correct: true },
            { text: "जवाहरलाल नेहरू", correct: false },
            { text: "बी.एन. राव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डॉ. बी.आर. अम्बेडकर प्रारूप समिति के अध्यक्ष थे और उन्होंने संविधान के मसौदे को अंतिम रूप देने में केंद्रीय भूमिका निभाई।<br><br><i class='fa-solid fa-angles-right icon'></i> उनके गहन ज्ञान, तर्क और प्रयासों के कारण उन्हें 'भारतीय संविधान का जनक' या 'निर्माता' माना जाता है।"
    },
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