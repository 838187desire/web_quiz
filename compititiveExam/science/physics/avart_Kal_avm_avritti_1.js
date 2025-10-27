const questions = [
    {
        topHeading: "आवर्त काल और आवृत्ति पर आधारित 50 MCQs,part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. किसी कण द्वारा एक दोलन पूरा करने में लगे समय को क्या कहते हैं?",
        answers: shuffle([
            { text: "आवृत्ति", correct: false },
            { text: "आयाम", correct: false },
            { text: "आवर्त काल", correct: true },
            { text: "कला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवर्त काल (Time Period) वह समय है जो कोई वस्तु एक पूर्ण चक्र या दोलन को पूरा करने में लेती है।"
    },
    {
        question: "प्रश्न 2. प्रति सेकंड होने वाले दोलनों की संख्या क्या कहलाती है?",
        answers: shuffle([
            { text: "आवर्त काल", correct: false },
            { text: "आवृत्ति", correct: true },
            { text: "तरंगदैर्घ्य", correct: false },
            { text: "वेग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवृत्ति (Frequency) एकांक समय (आमतौर पर एक सेकंड) में होने वाले पूर्ण चक्रों या दोलनों की संख्या को मापती है।"
    },
    {
        question: "प्रश्न 3. आवृत्ति का S.I. मात्रक क्या है?",
        answers: shuffle([
            { text: "सेकंड", correct: false },
            { text: "मीटर", correct: false },
            { text: "हर्ट्ज", correct: true },
            { text: "रेडियन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवृत्ति का अंतर्राष्ट्रीय मात्रक (SI Unit) हर्ट्ज (Hz) है, जो एक चक्र प्रति सेकंड के बराबर होता है।"
    },
    {
        question: "प्रश्न 4. आवर्त काल का S.I. मात्रक क्या है?",
        answers: shuffle([
            { text: "हर्ट्ज", correct: false },
            { text: "मीटर/सेकंड", correct: false },
            { text: "सेकंड", correct: true },
            { text: "मीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवर्त काल समय का एक माप है, इसलिए इसका SI मात्रक सेकंड है।"
    },
    {
        question: "प्रश्न 5. आवर्त काल (T) और आवृत्ति (f) के बीच सही संबंध क्या है?",
        answers: shuffle([
            { text: "T=f", correct: false },
            { text: "T×f=1", correct: true },
            { text: "T=f+1", correct: false },
            { text: "T=f−1", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवर्त काल और आवृत्ति एक दूसरे के व्युत्क्रम होते हैं, अर्थात T=1/f या f=1/T।"
    },
    {
        question: "प्रश्न 6. यदि किसी तरंग की आवृत्ति बढ़ती है, तो उसका आवर्त काल...",
        answers: shuffle([
            { text: "बढ़ जाएगा।", correct: false },
            { text: "घट जाएगा।", correct: true },
            { text: "अपरिवर्तित रहेगा।", correct: false },
            { text: "शून्य हो जाएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि आवृत्ति और आवर्त काल व्युत्क्रमानुपाती होते हैं, एक के बढ़ने पर दूसरा घट जाता है।"
    },
    {
        question: "प्रश्न 7. एक सरल लोलक का आवर्त काल किस पर निर्भर करता है?",
        answers: shuffle([
            { text: "गोलक के द्रव्यमान पर", correct: false },
            { text: "लोलक की लंबाई पर", correct: true },
            { text: "दोलन के आयाम पर", correct: false },
            { text: "गोलक के पदार्थ पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक सरल लोलक का आवर्त काल मुख्य रूप से उसकी प्रभावी लंबाई और उस स्थान पर गुरुत्वीय त्वरण पर निर्भर करता है।"
    },
    {
        question: "प्रश्न 8. यदि एक सरल लोलक की लंबाई चार गुनी कर दी जाए, तो उसका आवर्त काल कितना हो जाएगा?",
        answers: shuffle([
            { text: "आधा", correct: false },
            { text: "दोगुना", correct: true },
            { text: "चार गुना", correct: false },
            { text: "अपरिवर्तित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवर्त काल लंबाई के वर्गमूल के समानुपाती होता है (T∝√L)।<br><br><i class='fa-solid fa-angles-right icon'></i> लंबाई 4 गुनी करने पर आवर्त काल √4=2 गुना हो जाएगा।"
    },
    {
        question: "प्रश्न 9. एक सरल लोलक का आवर्त काल गोलक के द्रव्यमान पर कैसे निर्भर करता है?",
        answers: shuffle([
            { text: "द्रव्यमान के समानुपाती होता है।", correct: false },
            { text: "द्रव्यमान के व्युत्क्रमानुपाती होता है।", correct: false },
            { text: "द्रव्यमान पर निर्भर नहीं करता है।", correct: true },
            { text: "द्रव्यमान के वर्ग के समानुपाती होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक आदर्श सरल लोलक का आवर्त काल उसके गोलक के द्रव्यमान से स्वतंत्र होता है।"
    },
    {
        question: "प्रश्न 10. यदि एक लोलक घड़ी को पृथ्वी से चंद्रमा पर ले जाया जाए, तो वह...",
        answers: shuffle([
            { text: "तेज हो जाएगी।", correct: false },
            { text: "सुस्त हो जाएगी।", correct: true },
            { text: "सही समय देगी।", correct: false },
            { text: "काम करना बंद कर देगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रमा पर गुरुत्वीय त्वरण (g) कम होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि आवर्त काल g के वर्गमूल के व्युत्क्रमानुपाती होता है (T∝1/√g), आवर्त काल बढ़ जाएगा, जिससे घड़ी सुस्त हो जाएगी।"
    },
    {
        question: "प्रश्न 11. सेकंड लोलक (Seconds Pendulum) का आवर्त काल कितना होता है?",
        answers: shuffle([
            { text: "1 सेकंड", correct: false },
            { text: "2 सेकंड", correct: true },
            { text: "0.5 सेकंड", correct: false },
            { text: "अनंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेकंड लोलक वह लोलक है जिसका आवर्त काल ठीक 2 सेकंड होता है।"
    },
    {
        question: "प्रश्न 12. गर्मियों में, लोलक वाली घड़ियाँ सुस्त क्यों हो जाती हैं?",
        answers: shuffle([
            { text: "गुरुत्वाकर्षण कम होने के कारण।", correct: false },
            { text: "ऊष्मीय प्रसार के कारण लोलक की लंबाई बढ़ जाती है।", correct: true },
            { text: "हवा का घनत्व कम होने के कारण।", correct: false },
            { text: "ऊष्मीय प्रसार के कारण लोलक की लंबाई घट जाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गर्मी से लोलक की धात्विक छड़ की लंबाई बढ़ जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> लंबाई बढ़ने से आवर्त काल भी बढ़ जाता है, जिससे घड़ी धीमी या सुस्त हो जाती है।"
    },
    {
        question: "प्रश्न 13. सर्दियों में, लोलक वाली घड़ियाँ तेज क्यों हो जाती हैं?",
        answers: shuffle([
            { text: "गुरुत्वाकर्षण बढ़ने के कारण।", correct: false },
            { text: "ठंड के कारण लोलक की लंबाई घट जाती है।", correct: true },
            { text: "हवा का घनत्व बढ़ने के कारण।", correct: false },
            { text: "ठंड के कारण लोलक की लंबाई बढ़ जाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ठंड से लोलक की लंबाई सिकुड़ कर कम हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> लंबाई कम होने से आवर्त काल भी कम हो जाता है, जिससे घड़ी तेज चलने लगती है।"
    },
    {
        question: "प्रश्न 14. एक लड़की झूले पर झूल रही है। यदि वह झूले पर खड़ी हो जाए, तो झूले का आवर्त काल...",
        answers: shuffle([
            { text: "बढ़ जाएगा।", correct: false },
            { text: "घट जाएगा।", correct: true },
            { text: "अपरिवर्तित रहेगा।", correct: false },
            { text: "अनंत हो जाएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खड़े होने पर, लड़की का गुरुत्व केंद्र ऊपर उठ जाता है, जिससे झूले की प्रभावी लंबाई कम हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> लंबाई कम होने से आवर्त काल भी घट जाता है।"
    },
    {
        question: "प्रश्न 15. किसी तरंग की आवृत्ति (f), तरंगदैर्घ्य (λ) और वेग (v) में क्या संबंध है?",
        answers: shuffle([
            { text: "v=f/λ", correct: false },
            { text: "v=λ/f", correct: false },
            { text: "v=f×λ", correct: true },
            { text: "f=v×λ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी भी तरंग का वेग उसकी आवृत्ति और तरंगदैर्घ्य के गुणनफल के बराबर होता है।"
    },
    {
        question: "प्रश्न 16. जब कोई तरंग एक माध्यम से दूसरे माध्यम में जाती है, तो कौन सी राशि अपरिवर्तित रहती है?",
        answers: shuffle([
            { text: "वेग", correct: false },
            { text: "तरंगदैर्घ्य", correct: false },
            { text: "आयाम", correct: false },
            { text: "आवृत्ति", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तरंग की आवृत्ति उसके स्रोत का गुण है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब तक स्रोत नहीं बदलता, माध्यम बदलने पर भी आवृत्ति स्थिर रहती है।"
    },
    {
        question: "प्रश्न 17. ध्वनि तरंगों की आवृत्ति किस भौतिक गुण को निर्धारित करती है?",
        answers: shuffle([
            { text: "प्रबलता (Loudness)", correct: false },
            { text: "तारत्व (Pitch)", correct: true },
            { text: "गुणता (Quality)", correct: false },
            { text: "वेग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्वनि का तारत्व (आवाज का मोटा या पतला होना) उसकी आवृत्ति पर निर्भर करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उच्च आवृत्ति का अर्थ है उच्च तारत्व (पतली आवाज)।"
    },
    {
        question: "प्रश्न 18. प्रकाश तरंगों की आवृत्ति किस भौतिक गुण को निर्धारित करती है?",
        answers: shuffle([
            { text: "चमक (Brightness)", correct: false },
            { text: "रंग (Colour)", correct: true },
            { text: "वेग", correct: false },
            { text: "ध्रुवीकरण (Polarization)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश का रंग उसकी आवृत्ति (या तरंगदैर्घ्य) द्वारा निर्धारित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उदाहरण के लिए, लाल प्रकाश की आवृत्ति बैंगनी प्रकाश से कम होती है।"
    },
    {
        question: "प्रश्न 19. मनुष्य के कान के लिए श्रव्य आवृत्ति परास (Audible frequency range) क्या है?",
        answers: shuffle([
            { text: "20 हर्ट्ज से कम", correct: false },
            { text: "20,000 हर्ट्ज से अधिक", correct: false },
            { text: "20 हर्ट्ज से 20,000 हर्ट्ज", correct: true },
            { text: "0 हर्ट्ज से 20 हर्ट्ज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक स्वस्थ युवा मनुष्य लगभग 20 हर्ट्ज से 20 किलोहर्ट्ज (20,000 हर्ट्ज) तक की आवृत्ति वाली ध्वनि सुन सकता है।"
    },
    {
        question: "प्रश्न 20. 20,000 हर्ट्ज से अधिक आवृत्ति वाली ध्वनि तरंगों को क्या कहते हैं?",
        answers: shuffle([
            { text: "अवश्रव्य (Infrasonic)", correct: false },
            { text: "श्रव्य (Audible)", correct: false },
            { text: "पराश्रव्य (Ultrasonic)", correct: true },
            { text: "अपश्रव्य (Subsonic)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वे ध्वनि तरंगें जिनकी आवृत्ति मानव श्रवण की ऊपरी सीमा से अधिक होती है, पराश्रव्य कहलाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> चमगादड़ और डॉल्फ़िन इनका उपयोग करते हैं।"
    },
    {
        question: "प्रश्न 21. 20 हर्ट्ज से कम आवृत्ति वाली ध्वनि तरंगों को क्या कहते हैं?",
        answers: shuffle([
            { text: "पराश्रव्य (Ultrasonic)", correct: false },
            { text: "अवश्रव्य (Infrasonic)", correct: true },
            { text: "अध्वनिक (Supersonic)", correct: false },
            { text: "श्रव्य (Audible)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वे ध्वनि तरंगें जिनकी आवृत्ति मानव श्रवण की निचली सीमा से कम होती है, अवश्रव्य कहलाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> हाथी और व्हेल जैसी प्रजातियाँ इनका उपयोग करती हैं।"
    },
    {
        question: "प्रश्न 22. एक स्प्रिंग से लटके द्रव्यमान का आवर्त काल किस पर निर्भर करता है?",
        answers: shuffle([
            { text: "गुरुत्वीय त्वरण पर", correct: false },
            { text: "द्रव्यमान और स्प्रिंग नियतांक पर", correct: true },
            { text: "दोलन के आयाम पर", correct: false },
            { text: "केवल स्प्रिंग की लंबाई पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक स्प्रिंग-द्रव्यमान निकाय का आवर्त काल सीधे द्रव्यमान के वर्गमूल के और स्प्रिंग नियतांक (कठोरता) के वर्गमूल के व्युत्क्रमानुपाती होता है।"
    },
    {
        question: "प्रश्न 23. यदि किसी स्प्रिंग से लटके द्रव्यमान को चार गुना कर दिया जाए, तो उसका आवर्त काल...",
        answers: shuffle([
            { text: "आधा हो जाएगा।", correct: false },
            { text: "दोगुना हो जाएगा।", correct: true },
            { text: "चार गुना हो जाएगा।", correct: false },
            { text: "अपरिवर्तित रहेगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवर्त काल द्रव्यमान के वर्गमूल के समानुपाती होता है (T∝√m)।<br><br><i class='fa-solid fa-angles-right icon'></i> द्रव्यमान 4 गुना करने पर आवर्त काल √4=2 गुना हो जाएगा।"
    },
    {
        question: "प्रश्न 24. यदि एक स्प्रिंग को काटकर आधा कर दिया जाए और उससे वही द्रव्यमान लटकाया जाए, तो नया आवर्त काल...",
        answers: shuffle([
            { text: "बढ़ जाएगा।", correct: false },
            { text: "घट जाएगा।", correct: true },
            { text: "वही रहेगा।", correct: false },
            { text: "अनंत हो जाएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्प्रिंग को आधा करने पर उसकी कठोरता (स्प्रिंग नियतांक, k) दोगुनी हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि आवर्त काल 'k' के वर्गमूल के व्युत्क्रमानुपाती होता है (T∝1/√k), आवर्त काल घट जाएगा।"
    },
    {
        question: "प्रश्न 25. डॉप्लर प्रभाव के कारण, जब कोई ध्वनि स्रोत श्रोता की ओर आता है, तो ध्वनि की आभासी आवृत्ति...",
        answers: shuffle([
            { text: "घट जाती है।", correct: false },
            { text: "बढ़ जाती है।", correct: true },
            { text: "अपरिवर्तित रहती है।", correct: false },
            { text: "शून्य हो जाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्रोत के पास आने से ध्वनि तरंगें संपीड़ित हो जाती हैं, जिससे प्रति सेकंड अधिक तरंगें श्रोता तक पहुँचती हैं और आवृत्ति बढ़ी हुई प्रतीत होती है।"
    },
    {
        question: "प्रश्न 26. डॉप्लर प्रभाव के कारण, जब कोई ध्वनि स्रोत श्रोता से दूर जाता है, तो ध्वनि का आभासी तारत्व...",
        answers: shuffle([
            { text: "बढ़ जाता है।", correct: false },
            { text: "घट जाता है।", correct: true },
            { text: "अपरिवर्तित रहता है।", correct: false },
            { text: "अनंत हो जाता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्रोत के दूर जाने से ध्वनि तरंगें फैल जाती हैं, जिससे प्रति सेकंड कम तरंगें श्रोता तक पहुँचती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इससे आवृत्ति और तारत्व घटा हुआ प्रतीत होता है।"
    },
    {
        question: "प्रश्न 27. भारत में घरेलू उपयोग के लिए प्रत्यावर्ती धारा (AC) की मानक आवृत्ति क्या है?",
        answers: shuffle([
            { text: "60 हर्ट्ज", correct: false },
            { text: "50 हर्ट्ज", correct: true },
            { text: "100 हर्ट्ज", correct: false },
            { text: "220 हर्ट्ज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत और अधिकांश दुनिया में, घरेलू बिजली की आपूर्ति 50 हर्ट्ज की आवृत्ति पर की जाती है, जिसका अर्थ है कि धारा प्रति सेकंड 50 बार अपनी दिशा बदलती है।"
    },
    {
        question: "प्रश्न 28. यदि AC की आवृत्ति 50 हर्ट्ज है, तो इसका आवर्त काल कितना होगा?",
        answers: shuffle([
            { text: "50 सेकंड", correct: false },
            { text: "0.5 सेकंड", correct: false },
            { text: "0.02 सेकंड", correct: true },
            { text: "2 सेकंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवर्त काल, आवृत्ति का व्युत्क्रम होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> T=1/f=1/50=0.02 सेकंड।"
    },
    {
        question: "प्रश्न 29. किसी कण की कोणीय आवृत्ति (ω) और सामान्य आवृत्ति (f) में क्या संबंध है?",
        answers: shuffle([
            { text: "ω=f", correct: false },
            { text: "ω=2πf", correct: true },
            { text: "ω=f/2π", correct: false },
            { text: "ω=f²", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोणीय आवृत्ति को रेडियन प्रति सेकंड में मापा जाता है और यह सामान्य आवृत्ति (चक्र प्रति सेकंड) का 2π गुना होती है।"
    },
    {
        question: "प्रश्न 30. अनुनाद (Resonance) की स्थिति में, दोलन का कौन सा गुण बहुत अधिक बढ़ जाता है?",
        answers: shuffle([
            { text: "आवर्त काल", correct: false },
            { text: "आवृत्ति", correct: false },
            { text: "आयाम", correct: true },
            { text: "वेग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुनाद तब होता है जब चालक बल की आवृत्ति वस्तु की स्वाभाविक आवृत्ति के बराबर हो जाती है, जिससे दोलन का आयाम अधिकतम हो जाता है।"
    },
    {
        question: "प्रश्न 31. यदि किसी दोलक की आवृत्ति कम है, तो इसका अर्थ है कि वह...",
        answers: shuffle([
            { text: "तेजी से दोलन कर रहा है।", correct: false },
            { text: "धीरे-धीरे दोलन कर रहा है।", correct: true },
            { text: "बड़े आयाम से दोलन कर रहा है।", correct: false },
            { text: "छोटे आयाम से दोलन कर रहा है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कम आवृत्ति का मतलब है प्रति सेकंड कम दोलन, जो धीमी गति को इंगित करता है।"
    },
    {
        question: "प्रश्न 32. यदि किसी लोलक का आवर्त काल अधिक है, तो इसका अर्थ है कि वह...",
        answers: shuffle([
            { text: "तेजी से झूल रहा है।", correct: false },
            { text: "धीरे-धीरे झूल रहा है।", correct: true },
            { text: "अधिक दूरी तय कर रहा है।", correct: false },
            { text: "कम दूरी तय कर रहा है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिक आवर्त काल का मतलब है कि एक चक्कर पूरा करने में अधिक समय लगता है, जो धीमी गति को दर्शाता है।"
    },
    {
        question: "प्रश्न 33. पृथ्वी का अपनी धुरी पर घूर्णन किस प्रकार की गति है?",
        answers: shuffle([
            { text: "सरल आवर्त गति", correct: false },
            { text: "दोलनी गति", correct: false },
            { text: "आवर्ती गति", correct: true },
            { text: "अनावर्ती गति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी का घूर्णन एक निश्चित समय (लगभग 24 घंटे) के बाद खुद को दोहराता है, इसलिए यह आवर्ती है, लेकिन यह दोलनी नहीं है।"
    },
    {
        question: "प्रश्न 34. पृथ्वी का अपनी धुरी के परितः घूर्णन का आवर्त काल कितना है?",
        answers: shuffle([
            { text: "365 दिन", correct: false },
            { text: "24 घंटे", correct: true },
            { text: "12 घंटे", correct: false },
            { text: "1 घंटा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी को अपनी धुरी पर एक पूरा चक्कर लगाने में लगभग 24 घंटे लगते हैं।"
    },
    {
        question: "प्रश्न 35. पृथ्वी का सूर्य के चारों ओर परिक्रमण का आवर्त काल कितना है?",
        answers: shuffle([
            { text: "1 दिन", correct: false },
            { text: "1 महीना", correct: false },
            { text: "1 वर्ष", correct: true },
            { text: "12 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी को सूर्य की एक पूरी परिक्रमा करने में लगभग 365.25 दिन यानी 1 वर्ष लगता है।"
    },
    {
        question: "प्रश्न 36. किसी सरल लोलक को एक गहरी खान के अंदर ले जाने पर उसका आवर्त काल...",
        answers: shuffle([
            { text: "बढ़ जाएगा।", correct: true },
            { text: "घट जाएगा।", correct: false },
            { text: "अपरिवर्तित रहेगा।", correct: false },
            { text: "शून्य हो जाएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी की सतह से नीचे जाने पर गुरुत्वीय त्वरण (g) का मान कम हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'g' कम होने से आवर्त काल बढ़ जाएगा।"
    },
    {
        question: "प्रश्न 37. किसी सरल लोलक को ऊँचे पहाड़ पर ले जाने पर उसका आवर्त काल...",
        answers: shuffle([
            { text: "बढ़ जाएगा।", correct: true },
            { text: "घट जाएगा।", correct: false },
            { text: "अपरिवर्तित रहेगा।", correct: false },
            { text: "अनंत हो जाएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी की सतह से ऊपर जाने पर भी गुरुत्वीय त्वरण (g) का मान कम हो जाता है, जिससे आवर्त काल बढ़ जाएगा।"
    },
    {
        question: "प्रश्न 38. एक कृत्रिम उपग्रह के अंदर लोलक का आवर्त काल कितना होता है?",
        answers: shuffle([
            { text: "शून्य", correct: false },
            { text: "पृथ्वी के बराबर", correct: false },
            { text: "अनंत", correct: true },
            { text: "24 घंटे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उपग्रह भारहीनता की स्थिति में होता है, जहाँ प्रभावी 'g' शून्य होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए आवर्त काल अनंत हो जाता है, अर्थात लोलक दोलन नहीं करेगा।"
    },
    {
        question: "प्रश्न 39. SONAR प्रणाली में किन तरंगों का उपयोग होता है?",
        answers: shuffle([
            { text: "अवश्रव्य", correct: false },
            { text: "श्रव्य", correct: false },
            { text: "पराश्रव्य", correct: true },
            { text: "रेडियो तरंगें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोनार (साउंड नेविगेशन एंड रेंजिंग) में वस्तुओं का पता लगाने के लिए उच्च-आवृत्ति वाली पराश्रव्य तरंगों का उपयोग किया जाता है।"
    },
    {
        question: "प्रश्न 40. हर्ट्ज किसका मात्रक है?",
        answers: shuffle([
            { text: "बल", correct: false },
            { text: "ऊर्जा", correct: false },
            { text: "शक्ति", correct: false },
            { text: "आवृत्ति", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेनरिक हर्ट्ज के सम्मान में आवृत्ति की इकाई का नाम हर्ट्ज रखा गया।"
    },
    {
        question: "प्रश्न 41. एक लड़की झूले पर झूल रही है। यदि कोई दूसरी लड़की आकर उसके पास बैठ जाए, तो झूले की आवृत्ति पर क्या प्रभाव पड़ेगा?",
        answers: shuffle([
            { text: "बढ़ जाएगी।", correct: false },
            { text: "घट जाएगी।", correct: false },
            { text: "लगभग अपरिवर्तित रहेगी।", correct: true },
            { text: "शून्य हो जाएगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि आवर्त काल द्रव्यमान पर निर्भर नहीं करता, इसलिए आवृत्ति भी द्रव्यमान पर निर्भर नहीं करेगी और अपरिवर्तित रहेगी।"
    },
    {
        question: "प्रश्न 42. आवर्त काल और आवृत्ति दोनों किस प्रकार की राशियाँ हैं?",
        answers: shuffle([
            { text: "सदिश", correct: false },
            { text: "अदिश", correct: true },
            { text: "प्रदेश", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन दोनों राशियों में केवल परिमाण होता है, कोई दिशा नहीं होती, इसलिए ये अदिश हैं।"
    },
    {
        question: "प्रश्न 43. एक आवर्ती गति आवश्यक रूप से...",
        answers: shuffle([
            { text: "दोलनी होती है।", correct: false },
            { text: "सरल आवर्त गति होती है।", correct: false },
            { text: "एक निश्चित समय अंतराल के बाद खुद को दोहराती है।", correct: true },
            { text: "एक सीधी रेखा में होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह आवर्ती गति की मूल परिभाषा है।"
    },
    {
        question: "प्रश्न 44. यदि कोई लोलक तेजी से दोलन कर रहा है, तो उसकी आवृत्ति...",
        answers: shuffle([
            { text: "कम है।", correct: false },
            { text: "अधिक है।", correct: true },
            { text: "शून्य है।", correct: false },
            { text: "आवृत्ति पर कोई प्रभाव नहीं पड़ता।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तेजी से दोलन का मतलब है प्रति सेकंड अधिक चक्कर, जो उच्च आवृत्ति को इंगित करता है।"
    },
    {
        question: "प्रश्न 45. यदि कोई दोलक धीरे-धीरे दोलन कर रहा है, तो उसका आवर्त काल...",
        answers: shuffle([
            { text: "कम है।", correct: false },
            { text: "अधिक है।", correct: true },
            { text: "शून्य है।", correct: false },
            { text: "आवर्त काल पर कोई प्रभाव नहीं पड़ता।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धीरे-धीरे दोलन का मतलब है एक चक्कर पूरा करने में अधिक समय लगना, जो अधिक आवर्त काल को इंगित करता है।"
    },
    {
        question: "प्रश्न 46. क्या एक समान वृत्तीय गति एक आवर्ती गति है?",
        answers: shuffle([
            { text: "हाँ", correct: true },
            { text: "नहीं", correct: false },
            { text: "केवल यदि त्रिज्या छोटी हो", correct: false },
            { text: "केवल यदि चाल अधिक हो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वस्तु एक निश्चित समय में अपने पथ को दोहराती है, इसलिए यह आवर्ती गति है।"
    },
    {
        question: "प्रश्न 47. एक स्प्रिंग-द्रव्यमान निकाय को चंद्रमा पर ले जाने पर, उसके दोलन की आवृत्ति...",
        answers: shuffle([
            { text: "बढ़ जाएगी।", correct: false },
            { text: "घट जाएगी।", correct: false },
            { text: "अपरिवर्तित रहेगी।", correct: true },
            { text: "शून्य हो जाएगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्प्रिंग-द्रव्यमान निकाय का आवर्त काल (T=2π√m/k) गुरुत्वाकर्षण 'g' पर निर्भर नहीं करता है, इसलिए उसका आवर्त काल और आवृत्ति अपरिवर्तित रहेंगे।"
    },
    {
        question: "प्रश्न 48. किसी घड़ी की मिनट वाली सुई का आवर्त काल कितना होता है?",
        answers: shuffle([
            { text: "60 सेकंड", correct: false },
            { text: "12 घंटे", correct: false },
            { text: "60 मिनट", correct: true },
            { text: "24 घंटे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिनट वाली सुई को एक पूरा चक्कर लगाने में 60 मिनट या 1 घंटा लगता है।"
    },
    {
        question: "प्रश्न 49. किसी घड़ी की सेकंड वाली सुई का आवर्त काल कितना होता है?",
        answers: shuffle([
            { text: "1 सेकंड", correct: false },
            { text: "60 सेकंड", correct: true },
            { text: "60 मिनट", correct: false },
            { text: "12 घंटे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेकंड वाली सुई को एक पूरा चक्कर लगाने में 60 सेकंड या 1 मिनट लगता है।"
    },
    {
        question: "प्रश्न 50. किसी वाद्ययंत्र से निकलने वाली ध्वनि की आवृत्ति किस पर निर्भर करती है?",
        answers: shuffle([
            { text: "वादक द्वारा लगाए गए बल पर", correct: false },
            { text: "तार की लंबाई, तनाव और घनत्व पर", correct: true },
            { text: "कमरे के तापमान पर", correct: false },
            { text: "श्रोता की दूरी पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सितार या गिटार जैसे तंतु वाद्यों में, ध्वनि की आवृत्ति इन भौतिक गुणों द्वारा निर्धारित होती है।"
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