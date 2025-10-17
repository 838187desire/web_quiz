const questions = [
    {
        topHeading: "प्रतिरोध पर आधारित 50 MCQs,part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. यदि किसी ओमीय प्रतिरोधक के सिरों पर विभवांतर को आधा कर दिया जाए, तो उसमें क्षयित शक्ति कितनी हो जाएगी?",
        answers: shuffle([
            { text: "आधी", correct: false },
            { text: "दोगुनी", correct: false },
            { text: "एक-चौथाई", correct: true },
            { text: "चार गुनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक्ति P = V²/R होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि R स्थिर है, तो शक्ति विभवांतर के वर्ग के अनुक्रमानुपाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> विभवांतर को आधा करने पर शक्ति (1/2)² = 1/4 गुनी हो जाएगी।"
    },
    {
        question: "प्रश्न 2. किसी तार का प्रतिरोध R है। यदि इसे n बराबर भागों में काटकर फिर उन भागों को समांतर क्रम में जोड़ दिया जाए, तो तुल्य प्रतिरोध कितना होगा?",
        answers: shuffle([
            { text: "nR", correct: false },
            { text: "R/n", correct: false },
            { text: "n²R", correct: false },
            { text: "R/n²", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्येक भाग का प्रतिरोध R/n होगा।<br><br><i class='fa-solid fa-angles-right icon'></i> ऐसे n प्रतिरोधों को समांतर में जोड़ने पर तुल्य प्रतिरोध (R/n)/n = R/n² होगा।"
    },
    {
        question: "प्रश्न 3. 'ओम' किस भौतिक राशि का मात्रक नहीं है?",
        answers: shuffle([
            { text: "प्रतिरोध", correct: false },
            { text: "प्रतिघात (Reactance)", correct: false },
            { text: "प्रतिबाधा (Impedance)", correct: false },
            { text: "प्रतिरोधकता (Resistivity)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिरोध, प्रतिघात और प्रतिबाधा, तीनों का मात्रक ओम होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रतिरोधकता का मात्रक ओम-मीटर है।"
    },
    {
        question: "प्रश्न 4. किसी कुचालक पदार्थ का प्रतिरोध होता है?",
        answers: shuffle([
            { text: "नगण्य", correct: false },
            { text: "बहुत कम", correct: false },
            { text: "बहुत अधिक", correct: true },
            { text: "शून्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुचालक या विद्युतरोधी वे पदार्थ होते हैं जो विद्युत धारा के प्रवाह का अत्यधिक विरोध करते हैं, अतः उनका प्रतिरोध बहुत अधिक होता है।"
    },
    {
        question: "प्रश्न 5. केल्विन ब्रिज (Kelvin Bridge) का उपयोग क्या मापने के लिए किया जाता है?",
        answers: shuffle([
            { text: "उच्च मान के प्रतिरोध", correct: false },
            { text: "निम्न मान के प्रतिरोध", correct: true },
            { text: "धारिता", correct: false },
            { text: "प्रेरकत्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केल्विन ब्रिज व्हीटस्टोन ब्रिज का एक संशोधन है, जिसे विशेष रूप से बहुत कम मान वाले प्रतिरोधों (जैसे शंट या भारी तांबे की छड़ों का प्रतिरोध) को सटीकता से मापने के लिए डिज़ाइन किया गया है।"
    },
    {
        question: "प्रश्न 6. किसी सेल का टर्मिनल विभवांतर उसके आंतरिक प्रतिरोध के कारण EMF से कम होता है। यह कमी किसके अनुक्रमानुपाती होती है?",
        answers: shuffle([
            { text: "परिपथ के कुल प्रतिरोध के", correct: false },
            { text: "सेल से ली गई धारा के", correct: true },
            { text: "बाहरी प्रतिरोध के", correct: false },
            { text: "सेल के आकार के", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आंतरिक प्रतिरोध (r) के कारण विभव पतन Ir के बराबर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः यह कमी सेल से बहने वाली धारा (I) के अनुक्रमानुपाती है।"
    },
    {
        question: "प्रश्न 7. चार समान प्रतिरोधकों को कितने विभिन्न तरीकों से संयोजित किया जा सकता है?",
        answers: shuffle([
            { text: "4", correct: false },
            { text: "6", correct: false },
            { text: "8", correct: false },
            { text: "10", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चार प्रतिरोधकों को सभी श्रेणी, सभी समांतर, और विभिन्न श्रेणी-समांतर संयोजनों में कुल 10 विभिन्न तरीकों से व्यवस्थित किया जा सकता है।"
    },
    {
        question: "प्रश्न 8. एक चालक का प्रतिरोध दूसरे चालक से दोगुना है। यदि दोनों पर समान विभवांतर लगाया जाए, तो दूसरे चालक में धारा पहले की तुलना में होगी?",
        answers: shuffle([
            { text: "आधी", correct: false },
            { text: "दोगुनी", correct: true },
            { text: "बराबर", correct: false },
            { text: "चार गुनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओम के नियम (I=V/R) के अनुसार, धारा प्रतिरोध के व्युत्क्रमानुपाती होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि पहले का प्रतिरोध (R₁) दूसरे (R₂) का दोगुना है (R₁=2R₂), तो दूसरे में धारा (I₂=V/R₂) पहले की धारा (I₁=V/2R₂) से दोगुनी होगी।"
    },
    {
        question: "प्रश्न 9. एक तार को मोड़कर एक बंद वृत्त बनाया गया है। परिधि पर स्थित किन्हीं दो बिंदुओं के बीच प्रतिरोध अधिकतम कब होगा?",
        answers: shuffle([
            { text: "जब वे बिंदु एक दूसरे के निकटतम हों", correct: false },
            { text: "जब वे बिंदु एक व्यास के सिरे हों", correct: true },
            { text: "जब वे एक चौथाई परिधि पर हों", correct: false },
            { text: "यह हमेशा समान रहता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब बिंदु व्यास के सिरों पर होते हैं, तो वृत्त दो बराबर अर्धवृत्तों में बँट जाता है, और दो समान प्रतिरोधों को समांतर में जोड़ने पर तुल्य प्रतिरोध अधिकतम होता है।"
    },
    {
        question: "प्रश्न 10. प्रतिरोधकता का तापमान के साथ परिवर्तन का संबंध किस समीकरण द्वारा दिया जाता है?",
        answers: shuffle([
            { text: "ओम का नियम", correct: false },
            { text: "किरचॉफ का नियम", correct: false },
            { text: "ρ_T = ρ₀(1 + αΔT)", correct: true },
            { text: "E = mc²", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह समीकरण बताता है कि तापमान में ΔT परिवर्तन होने पर नई प्रतिरोधकता (ρ_T) कैसे बदलती है, जहाँ α प्रतिरोध ताप गुणांक है।"
    },
    {
        question: "प्रश्न 11. विद्युत अपघट्यों का प्रतिरोध तापमान बढ़ाने पर...?",
        answers: shuffle([
            { text: "बढ़ता है", correct: false },
            { text: "घटता है", correct: true },
            { text: "अपरिवर्तित रहता है", correct: false },
            { text: "पहले बढ़ता है फिर घटता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तापमान बढ़ाने पर विद्युत अपघट्य की श्यानता घट जाती है और आयनों की गतिशीलता बढ़ जाती है, जिससे विलयन का प्रतिरोध कम हो जाता है।"
    },
    {
        question: "प्रश्न 12. प्रतिरोध पर आर्द्रता का क्या प्रभाव पड़ता है?",
        answers: shuffle([
            { text: "कोई प्रभाव नहीं पड़ता", correct: false },
            { text: "प्रतिरोध बढ़ता है", correct: false },
            { text: "प्रतिरोध घटता है", correct: true },
            { text: "यह पदार्थ पर निर्भर करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विशेष रूप से कुचालक पदार्थों की सतह पर, नमी की एक पतली परत बन जाती है जो आयनिक चालन के लिए एक मार्ग प्रदान करती है, जिससे सतह का प्रतिरोध घट जाता है।"
    },
    {
        question: "प्रश्न 13. एक मेगा-ओम कितने ओम के बराबर होता है?",
        answers: shuffle([
            { text: "दस की घात तीन", correct: false },
            { text: "दस की घात छह", correct: true },
            { text: "दस की घात नौ", correct: false },
            { text: "दस की घात माइनस छह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेगा एक उपसर्ग है जिसका अर्थ है दस लाख, या 10⁶।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः 1 MΩ = 10⁶ Ω।"
    },
    {
        question: "प्रश्न 14. एक माइक्रो-ओम कितने ओम के बराबर होता है?",
        answers: shuffle([
            { text: "दस की घात तीन", correct: false },
            { text: "दस की घात छह", correct: false },
            { text: "दस की घात माइनस तीन", correct: false },
            { text: "दस की घात माइनस छह", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माइक्रो एक उपसर्ग है जिसका अर्थ है दस लाखवाँ हिस्सा, या 10⁻⁶।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः 1 μΩ = 10⁻⁶ Ω।"
    },
    {
        question: "प्रश्न 15. दिए गए पदार्थों में से, किसका प्रतिरोध ताप गुणांक धनात्मक होता है?",
        answers: shuffle([
            { text: "जर्मेनियम", correct: false },
            { text: "सिलिकॉन", correct: false },
            { text: "टंगस्टन", correct: true },
            { text: "कार्बन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टंगस्टन एक धातु है, और सभी धातुओं का प्रतिरोध ताप गुणांक धनात्मक होता है, अर्थात गर्म करने पर उनका प्रतिरोध बढ़ता है।"
    },
    {
        question: "प्रश्न 16. प्रतिरोधों के संयोजन का उपयोग क्यों किया जाता है?",
        answers: shuffle([
            { text: "परिपथ को सुंदर बनाने के लिए", correct: false },
            { text: "परिपथ में वांछित प्रतिरोध मान प्राप्त करने के लिए", correct: true },
            { text: "विभवांतर बढ़ाने के लिए", correct: false },
            { text: "धारा उत्पन्न करने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अक्सर परिपथ में ऐसे प्रतिरोध मान की आवश्यकता होती है जो मानक रूप से उपलब्ध नहीं होता।<br><br><i class='fa-solid fa-angles-right icon'></i> तब उपलब्ध प्रतिरोधों को श्रेणी या समांतर क्रम में जोड़कर वांछित मान प्राप्त किया जाता है।"
    },
    {
        question: "प्रश्न 17. यदि किसी प्रतिरोधक से प्रवाहित धारा को दोगुना कर दिया जाए, तो उसमें उत्पन्न ऊष्मा की दर कितनी हो जाएगी?",
        answers: shuffle([
            { text: "आधी", correct: false },
            { text: "दोगुनी", correct: false },
            { text: "चार गुनी", correct: true },
            { text: "अपरिवर्तित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्पन्न ऊष्मा की दर (शक्ति) P = I²R होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह धारा के वर्ग के अनुक्रमानुपाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> धारा को दोगुना करने पर शक्ति 2² = 4 गुनी हो जाएगी।"
    },
    {
        question: "प्रश्न 18. एक स्थिर विभवांतर पर, किसी चालक का प्रतिरोध आधा करने पर, उसमें से प्रवाहित धारा...?",
        answers: shuffle([
            { text: "आधी हो जाएगी", correct: false },
            { text: "दोगुनी हो जाएगी", correct: true },
            { text: "अपरिवर्तित रहेगी", correct: false },
            { text: "एक-चौथाई हो जाएगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओम के नियम (I=V/R) के अनुसार, स्थिर विभवांतर पर धारा प्रतिरोध के व्युत्क्रमानुपाती होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रतिरोध आधा करने पर धारा दोगुनी हो जाएगी।"
    },
    {
        question: "प्रश्न 19. किसी प्रतिरोधक का 'शक्ति मूल्यांकन' (Power Rating) क्या दर्शाता है?",
        answers: shuffle([
            { text: "वह कितनी शक्ति उत्पन्न करता है", correct: false },
            { text: "वह अधिकतम शक्ति जिसे वह बिना खराब हुए क्षय कर सकता है", correct: true },
            { text: "उसका प्रतिरोध मान", correct: false },
            { text: "उसकी सहनशीलता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक्ति मूल्यांकन (वाट में) यह इंगित करता है कि प्रतिरोधक कितनी ऊष्मा को सुरक्षित रूप से नष्ट कर सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इससे अधिक शक्ति पर वह जल सकता है।"
    },
    {
        question: "प्रश्न 20. क्या प्रतिरोध एक सदिश राशि है?",
        answers: shuffle([
            { text: "हाँ", correct: false },
            { text: "नहीं", correct: true },
            { text: "कभी-कभी", correct: false },
            { text: "यह धारा की दिशा पर निर्भर करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिरोध एक अदिश राशि है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका केवल परिमाण होता है, कोई दिशा नहीं होती।"
    },
    {
        question: "प्रश्न 21. दो तारों A और B के पदार्थ समान हैं, लंबाई समान है, लेकिन A का व्यास B से दोगुना है। A का प्रतिरोध B के प्रतिरोध का कितना होगा?",
        answers: shuffle([
            { text: "दोगुना", correct: false },
            { text: "आधा", correct: false },
            { text: "चार गुना", correct: false },
            { text: "एक-चौथाई", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यास दोगुना होने पर क्षेत्रफल चार गुना हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि प्रतिरोध क्षेत्रफल के व्युत्क्रमानुपाती है, A का प्रतिरोध B का एक-चौथाई होगा।"
    },
    {
        question: "प्रश्न 22. किसी चालक की प्रतिरोधकता किस पर निर्भर करती है?",
        answers: shuffle([
            { text: "चालक की लंबाई", correct: false },
            { text: "चालक का क्षेत्रफल", correct: false },
            { text: "चालक में मुक्त इलेक्ट्रॉनों की संख्या घनत्व", correct: true },
            { text: "चालक पर आरोपित विभवांतर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिरोधकता का सूक्ष्म सूत्र ρ = m/(ne²τ) है, जहाँ n मुक्त इलेक्ट्रॉनों का संख्या घनत्व है।<br><br><i class='fa-solid fa-angles-right icon'></i> अधिक n का अर्थ है कम प्रतिरोधकता।"
    },
    {
        question: "प्रश्न 23. जब एक एमीटर को परिपथ में जोड़ा जाता है, तो परिपथ की कुल धारा पर क्या प्रभाव पड़ता है?",
        answers: shuffle([
            { text: "थोड़ी बढ़ जाती है", correct: false },
            { text: "थोड़ी घट जाती है", correct: true },
            { text: "अपरिवर्तित रहती है", correct: false },
            { text: "शून्य हो जाती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक वास्तविक एमीटर का कुछ न कुछ प्रतिरोध होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे श्रेणीक्रम में जोड़ने पर परिपथ का कुल प्रतिरोध थोड़ा बढ़ जाता है, जिससे ओम के नियम के अनुसार कुल धारा थोड़ी घट जाती है।"
    },
    {
        question: "प्रश्न 24. किस प्रकार के संयोजन में तुल्य प्रतिरोध, संयोजन में शामिल सबसे छोटे प्रतिरोध से भी कम होता है?",
        answers: shuffle([
            { text: "श्रेणीक्रम संयोजन", correct: false },
            { text: "समांतर क्रम संयोजन", correct: true },
            { text: "मिश्रित संयोजन", correct: false },
            { text: "ऐसा कोई संयोजन नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समांतर क्रम में, धारा के लिए अतिरिक्त पथ उपलब्ध होने के कारण कुल प्रतिरोध हमेशा उस संयोजन में लगे सबसे कम मान वाले प्रतिरोधक से भी कम होता है।"
    },
    {
        question: "प्रश्न 25. किस प्रकार के संयोजन में तुल्य प्रतिरोध, संयोजन में शामिल सबसे बड़े प्रतिरोध से भी अधिक होता है?",
        answers: shuffle([
            { text: "a) श्रेणीक्रम संयोजन", correct: true },
            { text: "b) समांतर क्रम संयोजन", correct: false },
            { text: "a), b) दोनों में", correct: false },
            { text: "किसी में नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्रेणीक्रम में सभी प्रतिरोध जुड़ जाते हैं, इसलिए तुल्य प्रतिरोध हमेशा उस संयोजन में लगे सबसे बड़े मान वाले प्रतिरोधक से भी अधिक होता है।"
    },
    {
        question: "प्रश्न 26. एक प्रतिरोधक के रंग कोड में, सुनहरा बैंड क्या दर्शाता है?",
        answers: shuffle([
            { text: "5% की सहनशीलता", correct: true },
            { text: "10% की सहनशीलता", correct: false },
            { text: "20% की सहनशीलता", correct: false },
            { text: "1% की सहनशीलता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिरोधक के रंग कोड में चौथा बैंड सहनशीलता को दर्शाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> सुनहरा रंग ±5% की सहनशीलता का प्रतीक है।"
    },
    {
        question: "प्रश्न 27. एक प्रतिरोधक के रंग कोड में, चांदी का बैंड क्या दर्शाता है?",
        answers: shuffle([
            { text: "5% की सहनशीलता", correct: false },
            { text: "10% की सहनशीलता", correct: true },
            { text: "20% की सहनशीलता", correct: false },
            { text: "2% की सहनशीलता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चौथा बैंड यदि चांदी का हो, तो यह ±10% की सहनशीलता को इंगित करता है।"
    },
    {
        question: "प्रश्न 28. यदि किसी चालक का प्रतिरोध R है और उससे प्रवाहित धारा I है, तो उसमें प्रति सेकंड उत्पन्न ऊष्मा कितनी होगी?",
        answers: shuffle([
            { text: "IR", correct: false },
            { text: "I²R", correct: true },
            { text: "IR²", correct: false },
            { text: "I/R", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह जूल के तापन नियम का सूत्र है, जो प्रति सेकंड उत्पन्न ऊष्मा (अर्थात शक्ति) को दर्शाता है।"
    },
    {
        question: "प्रश्न 29. एक अच्छे चालक की प्रतिरोधकता और चालकता कैसी होनी चाहिए?",
        answers: shuffle([
            { text: "निम्न प्रतिरोधकता, उच्च चालकता", correct: true },
            { text: "उच्च प्रतिरोधकता, निम्न चालकता", correct: false },
            { text: "उच्च प्रतिरोधकता, उच्च चालकता", correct: false },
            { text: "निम्न प्रतिरोधकता, निम्न चालकता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अच्छा चालक वह है जो धारा का कम से कम विरोध करे।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका अर्थ है कि उसकी प्रतिरोधकता निम्न और चालकता (जो प्रतिरोधकता का व्युत्क्रम है) उच्च होनी चाहिए।"
    },
    {
        question: "प्रश्न 30. एक अच्छे कुचालक की प्रतिरोधकता और चालकता कैसी होनी चाहिए?",
        answers: shuffle([
            { text: "निम्न प्रतिरोधकता, उच्च चालकता", correct: false },
            { text: "उच्च प्रतिरोधकता, निम्न चालकता", correct: true },
            { text: "उच्च प्रतिरोधकता, उच्च चालकता", correct: false },
            { text: "निम्न प्रतिरोधकता, निम्न चालकता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अच्छा कुचालक वह है जो धारा का अधिकतम विरोध करे।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका अर्थ है कि उसकी प्रतिरोधकता बहुत उच्च और चालकता बहुत निम्न होनी चाहिए।"
    },
    {
        question: "प्रश्न 31. किसी परिपथ में प्रतिरोधक लगाने का मुख्य उद्देश्य क्या होता है?",
        answers: shuffle([
            { text: "वोल्टेज को विभाजित करना", correct: false },
            { text: "धारा को सीमित करना", correct: false },
            { text: "ऊष्मा उत्पन्न करना", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिरोधकों का उपयोग वोल्टेज डिवाइडर बनाने, संवेदनशील घटकों के लिए धारा को सीमित करने और हीटर जैसे उपकरणों में जानबूझकर ऊष्मा उत्पन्न करने के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 32. 'गत्यात्मक प्रतिरोध' (Dynamic Resistance) किस प्रकार के घटकों से संबंधित है?",
        answers: shuffle([
            { text: "ओमीय घटक", correct: false },
            { text: "अन-ओमीय घटक", correct: true },
            { text: "सभी घटक", correct: false },
            { text: "कुचालक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डायोड जैसे अन-ओमीय घटकों के लिए, V-I ग्राफ वक्र होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> किसी विशेष प्रचालन बिंदु पर विभव में सूक्ष्म परिवर्तन और धारा में सूक्ष्म परिवर्तन का अनुपात (ΔV/ΔI) गत्यात्मक प्रतिरोध कहलाता है।"
    },
    {
        question: "प्रश्न 33. यदि दो प्रतिरोधक समांतर क्रम में जुड़े हैं और उनमें से एक को हटा दिया जाए, तो परिपथ का कुल प्रतिरोध...?",
        answers: shuffle([
            { text: "बढ़ेगा", correct: true },
            { text: "घटेगा", correct: false },
            { text: "अपरिवर्तित रहेगा", correct: false },
            { text: "शून्य हो जाएगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समांतर क्रम में एक प्रतिरोधक को हटाने से धारा के लिए एक रास्ता कम हो जाता है, जिससे कुल विरोध या तुल्य प्रतिरोध बढ़ जाता है।"
    },
    {
        question: "प्रश्न 34. यदि दो प्रतिरोधक श्रेणीक्रम में जुड़े हैं और उनमें से एक को हटाकर सीधा तार लगा दिया जाए, तो परिपथ का कुल प्रतिरोध...?",
        answers: shuffle([
            { text: "बढ़ेगा", correct: false },
            { text: "घटेगा", correct: true },
            { text: "अपरिवर्तित रहेगा", correct: false },
            { text: "अनंत हो जाएगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्रेणीक्रम में एक प्रतिरोधक को हटाने (उसे शून्य प्रतिरोध के तार से बदलने) से कुल प्रतिरोध (जो R₁+R₂ था) कम हो जाएगा।"
    },
    {
        question: "प्रश्न 35. किसी तार को समान आयतन पर इस प्रकार खींचा जाता है कि उसका व्यास आधा हो जाता है। उसका नया प्रतिरोध कितना होगा?",
        answers: shuffle([
            { text: "4 गुना", correct: false },
            { text: "8 गुना", correct: false },
            { text: "16 गुना", correct: true },
            { text: "2 गुना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यास आधा होने पर क्षेत्रफल 1/4 हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> स्थिर आयतन के लिए, लंबाई 4 गुनी हो जाएगी।<br><br><i class='fa-solid fa-angles-right icon'></i> नया प्रतिरोध R' ∝ l'/A' = 4 / (1/4) = 16 गुना हो जाएगा।"
    },
    {
        question: "प्रश्न 36. प्रतिरोधकता की विमाएं क्या हैं?",
        answers: shuffle([
            { text: "[ML³T⁻³A⁻²]", correct: true },
            { text: "[ML²T⁻³A⁻²]", correct: false },
            { text: "[ML³T⁻³A⁻¹]", correct: false },
            { text: "[MLT⁻³A⁻²]", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिरोधकता ρ = RA/l।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रतिरोध की विमा [ML²T⁻³A⁻²] को (L²/L) से गुणा करने पर [ML³T⁻³A⁻²] प्राप्त होता है।"
    },
    {
        question: "प्रश्न 37. एक तार का प्रतिरोध R है। यदि उसी पदार्थ और लंबाई के, लेकिन दोगुने व्यास के तार का उपयोग किया जाए, तो प्रतिरोध कितना होगा?",
        answers: shuffle([
            { text: "2R", correct: false },
            { text: "4R", correct: false },
            { text: "R/2", correct: false },
            { text: "R/4", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यास दोगुना होने पर क्षेत्रफल चार गुना हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रतिरोध क्षेत्रफल के व्युत्क्रमानुपाती है, इसलिए यह R/4 हो जाएगा।"
    },
    {
        question: "प्रश्न 38. निम्नलिखित में से कौन सी युक्ति प्रतिरोध के ऋणात्मक ताप गुणांक के गुण का उपयोग करती है?",
        answers: shuffle([
            { text: "फ्यूज", correct: false },
            { text: "हीटर", correct: false },
            { text: "थर्मिस्टर", correct: true },
            { text: "विद्युत बल्ब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थर्मिस्टर का उपयोग तापमान संवेदन के लिए किया जाता है क्योंकि इसका प्रतिरोध (जो आमतौर पर ऋणात्मक ताप गुणांक वाला होता है) तापमान के साथ तेजी से बदलता है।"
    },
    {
        question: "प्रश्न 39. ओम के नियम में, प्रतिरोध को एक ________ माना जाता है।",
        answers: shuffle([
            { text: "चर", correct: false },
            { text: "स्थिरांक", correct: true },
            { text: "सदिश", correct: false },
            { text: "ऋणात्मक मान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओम के नियम की वैधता के लिए यह आवश्यक है कि दी गई भौतिक परिस्थितियों में चालक का प्रतिरोध एक स्थिरांक हो।"
    },
    {
        question: "प्रश्न 40. किसी चालक के प्रतिरोध का कारण क्या है?",
        answers: shuffle([
            { text: "मुक्त इलेक्ट्रॉनों की कमी", correct: false },
            { text: "चालक के परमाणुओं का आकार", correct: false },
            { text: "प्रवाहित इलेक्ट्रॉनों का चालक के आयनों और परमाणुओं से टकराना", correct: true },
            { text: "चालक पर बाहरी चुंबकीय क्षेत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब इलेक्ट्रॉन चालक से गुजरते हैं, तो वे स्थिर आयनों और परमाणुओं से टकराते हैं, जिससे उनकी गति में बाधा उत्पन्न होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यही बाधा विद्युत प्रतिरोध का मूल कारण है।"
    },
    {
        question: "प्रश्न 41. n समान प्रतिरोधकों को पहले श्रेणीक्रम में और फिर समांतर क्रम में जोड़ा जाता है। श्रेणी और समांतर संयोजन के तुल्य प्रतिरोधों का अनुपात क्या है?",
        answers: shuffle([
            { text: "n", correct: false },
            { text: "1/n", correct: false },
            { text: "n²", correct: true },
            { text: "1/n²", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्रेणी में तुल्य प्रतिरोध R_s = nR।<br><br><i class='fa-solid fa-angles-right icon'></i> समांतर में तुल्य प्रतिरोध R_p = R/n।<br><br><i class='fa-solid fa-angles-right icon'></i> अनुपात R_s / R_p = (nR) / (R/n) = n²।"
    },
    {
        question: "प्रश्न 42. मेगर (Megger) नामक उपकरण का उपयोग क्या मापने के लिए किया जाता है?",
        answers: shuffle([
            { text: "बहुत निम्न प्रतिरोध", correct: false },
            { text: "बहुत उच्च प्रतिरोध (विद्युतरोधन प्रतिरोध)", correct: true },
            { text: "धारा", correct: false },
            { text: "विभवांतर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेगर का उपयोग केबलों और मोटरों के विद्युतरोधन (इन्सुलेशन) के प्रतिरोध को मापने के लिए किया जाता है, जो सामान्यतः मेगा-ओम की कोटि का होता है।"
    },
    {
        question: "प्रश्न 43. 'विशिष्ट प्रतिरोध' नाम किस भौतिक राशि के लिए प्रयोग किया जाता है?",
        answers: shuffle([
            { text: "प्रतिरोध", correct: false },
            { text: "प्रतिरोधकता", correct: true },
            { text: "चालकता", correct: false },
            { text: "चालकत्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिरोधकता (Resistivity) को अक्सर विशिष्ट प्रतिरोध (Specific Resistance) भी कहा जाता है।"
    },
    {
        question: "प्रश्न 44. एक प्रतिरोधक पर लगने वाला विभवांतर और उससे प्रवाहित होने वाली धारा दोनों को दोगुना कर दिया जाए, तो प्रतिरोध का मान...?",
        answers: shuffle([
            { text: "दोगुना हो जाएगा", correct: false },
            { text: "आधा हो जाएगा", correct: false },
            { text: "चार गुना हो जाएगा", correct: false },
            { text: "अपरिवर्तित रहेगा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओमीय प्रतिरोधक के लिए, प्रतिरोध R=V/I एक स्थिरांक है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि V और I दोनों दोगुने हो जाएं, तो नया प्रतिरोध R' = (2V)/(2I) = V/I = R, अर्थात अपरिवर्तित रहेगा।"
    },
    {
        question: "प्रश्न 45. कौन सा कारक प्रतिरोध को प्रभावित नहीं करता है?",
        answers: shuffle([
            { text: "तापमान", correct: false },
            { text: "लंबाई", correct: false },
            { text: "पदार्थ", correct: false },
            { text: "रंग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी चालक का प्रतिरोध उसके भौतिक गुणों जैसे विमाओं, पदार्थ और तापमान पर निर्भर करता है, उसके रंग पर नहीं।"
    },
    {
        question: "प्रश्न 46. एक सेल का आंतरिक प्रतिरोध किस पर निर्भर नहीं करता है?",
        answers: shuffle([
            { text: "इलेक्ट्रोडों के बीच की दूरी", correct: false },
            { text: "इलेक्ट्रोडों का क्षेत्रफल", correct: false },
            { text: "विद्युत अपघट्य की सांद्रता", correct: false },
            { text: "बाहरी परिपथ के प्रतिरोध", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आंतरिक प्रतिरोध सेल का एक आंतरिक गुण है, जो उसकी संरचना पर निर्भर करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बाहरी परिपथ में क्या जोड़ा गया है, इस पर निर्भर नहीं करता।"
    },
    {
        question: "प्रश्न 47. किसी परिपथ का 'भार' (Load) क्या संदर्भित करता है?",
        answers: shuffle([
            { text: "स्रोत का आंतरिक प्रतिरोध", correct: false },
            { text: "स्रोत से जुड़ा बाहरी प्रतिरोध या उपकरण", correct: true },
            { text: "परिपथ का कुल वजन", correct: false },
            { text: "परिपथ में कुल धारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परिपथ में भार वह घटक होता है जो ऊर्जा स्रोत से शक्ति लेता है, और इसका अपना कुछ प्रतिरोध होता है।"
    },
    {
        question: "प्रश्न 48. यदि दो प्रतिरोधों R₁ और R₂ को समांतर क्रम में जोड़ा गया है और R₁ > R₂, तो तुल्य प्रतिरोध R_p होगा?",
        answers: shuffle([
            { text: "R_p > R₁", correct: false },
            { text: "R_p < R₂", correct: true },
            { text: "R₂ < R_p < R₁", correct: false },
            { text: "R_p = R₁ + R₂", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समांतर क्रम में तुल्य प्रतिरोध हमेशा सबसे छोटे प्रतिरोध से भी कम होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि R₂ छोटा है, इसलिए R_p < R₂ होगा।"
    },
    {
        question: "प्रश्न 49. किसी चालक का अनुप्रस्थ काट क्षेत्रफल आधा करने पर उसकी प्रतिरोधकता...?",
        answers: shuffle([
            { text: "आधी हो जाएगी", correct: false },
            { text: "दोगुनी हो जाएगी", correct: false },
            { text: "चार गुनी हो जाएगी", correct: false },
            { text: "अपरिवर्तित रहेगी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिरोधकता पदार्थ का आंतरिक गुण है; यह चालक की विमाओं (जैसे क्षेत्रफल) को बदलने से नहीं बदलती है।<br><br><i class='fa-solid fa-angles-right icon'></i> केवल प्रतिरोध बदलता है।"
    },
    {
        question: "प्रश्न 50. प्रतिरोधकता का विमीय सूत्र किस अन्य भौतिक राशि के समान है?",
        answers: shuffle([
            { text: "विद्युत क्षेत्र", correct: false },
            { text: "चुंबकीय क्षेत्र", correct: false },
            { text: "विभव", correct: false },
            { text: "किसी के समान नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिरोधकता की विमाएं [ML³T⁻³A⁻²] हैं, जो अन्य सामान्य भौतिक राशियों की विमाओं से भिन्न हैं।"
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