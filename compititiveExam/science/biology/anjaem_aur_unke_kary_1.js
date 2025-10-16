const questions = [
    {
        topHeading: "एंजाइम और उनके कार्यों पर आधारित 35 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. एंजाइम मूल रूप से क्या होते हैं?",
        answers: shuffle([
            { text: "कार्बोहाइड्रेट", correct: false },
            { text: "लिपिड", correct: false },
            { text: "प्रोटीन", correct: true },
            { text: "विटामिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिकांश एंजाइम गोलाकार प्रोटीन (globular proteins) होते हैं जो जैविक उत्प्रेरक के रूप में कार्य करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  हालांकि, कुछ RNA अणु भी एंजाइम (राइबोजाइम) के रूप में कार्य कर सकते हैं।"
    },
    {
        question: "प्रश्न 2. जैविक प्रणाली में, एंजाइम का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "ऊर्जा प्रदान करना", correct: false },
            { text: "शरीर का तापमान नियंत्रित करना", correct: false },
            { text: "जैव रासायनिक अभिक्रियाओं की दर को उत्प्रेरित करना", correct: true },
            { text: "शरीर को संरचनात्मक सहायता प्रदान करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंजाइम जैविक उत्प्रेरक (biocatalysts) होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो अभिक्रिया की सक्रियण ऊर्जा (activation energy) को कम करके शरीर में होने वाली रासायनिक अभिक्रियाओं को लाखों गुना तेज कर देते हैं।"
    },
    {
        question: "प्रश्न 3. लार में पाया जाने वाला एंजाइम 'टायलिन' (Ptyalin) किसका पाचन करता है?",
        answers: shuffle([
            { text: "प्रोटीन", correct: false },
            { text: "वसा", correct: false },
            { text: "स्टार्च (मंड)", correct: true },
            { text: "विटामिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लार में मौजूद टायलिन, जिसे लार एमाइलेज (Salivary Amylase) भी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  भोजन में उपस्थित स्टार्च को माल्टोज जैसी सरल शर्करा में तोड़ना शुरू कर देता है।"
    },
    {
        question: "प्रश्न 4. पेट (आमाशय) में प्रोटीन के पाचन की शुरुआत कौन-सा एंजाइम करता है?",
        answers: shuffle([
            { text: "ट्रिप्सिन", correct: false },
            { text: "पेप्सिन", correct: true },
            { text: "एमाइलेज", correct: false },
            { text: "लाइपेज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेप्सिन आमाशय के अम्लीय माध्यम (pH 1.5-3.5) में सक्रिय होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और भोजन में मौजूद प्रोटीन को छोटे पॉलीपेप्टाइड (पेप्टोन्स) में तोड़ता है।"
    },
    {
        question: "प्रश्न 5. दूध में पाई जाने वाली 'केसीन' (Casein) नामक प्रोटीन को पचाने वाला एंजाइम कौन-सा है?",
        answers: shuffle([
            { text: "रेनिन", correct: true },
            { text: "पेप्सिन", correct: false },
            { text: "ट्रिप्सिन", correct: false },
            { text: "माल्टेज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेनिन, विशेष रूप से शिशुओं के जठर रस में पाया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो दूध की केसीन प्रोटीन को कैल्शियम की उपस्थिति में दही जैसे ठोस पैरा-केसिनेट में बदल देता है, जिससे उसका पाचन आसान हो जाता है।"
    },
    {
        question: "प्रश्न 6. एंजाइम की क्रियाशीलता के लिए 'ताला-चाबी मॉडल' (Lock and Key Model) किसने प्रस्तावित किया था?",
        answers: shuffle([
            { text: "लुई पाश्चर", correct: false },
            { text: "एमिल फिशर", correct: true },
            { text: "वाटसन और क्रिक", correct: false },
            { text: "कोशलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1894 में एमिल फिशर ने यह मॉडल प्रस्तावित किया।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसके अनुसार एंजाइम का सक्रिय स्थल (active site) एक ताले की तरह होता है और सब्सट्रेट एक विशिष्ट चाबी की तरह होता है जो उसमें बिल्कुल फिट बैठता है।"
    },
    {
        question: "प्रश्न 7. अग्नाशयी रस (Pancreatic juice) में पाया जाने वाला कौन-सा एंजाइम वसा (fats) का पाचन करता है?",
        answers: shuffle([
            { text: "एमाइलेज", correct: false },
            { text: "ट्रिप्सिन", correct: false },
            { text: "लाइपेज", correct: true },
            { text: "न्यूक्लियेज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अग्नाशयी लाइपेज छोटी आंत में वसा को वसीय अम्ल (fatty acids) और ग्लिसरॉल में तोड़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे उनका अवशोषण हो सके।"
    },
    {
        question: "प्रश्न 8. माल्टोज को ग्लूकोज में कौन-सा एंजाइम परिवर्तित करता है?",
        answers: shuffle([
            { text: "सुक्रेज", correct: false },
            { text: "लैक्टेज", correct: false },
            { text: "माल्टेज", correct: true },
            { text: "इनवर्टेज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माल्टेज एंजाइम आंतों में पाया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और यह डाइसैकेराइड शर्करा माल्टोज को उसके मोनोमर, यानी ग्लूकोज के दो अणुओं में तोड़ देता है।"
    },
    {
        question: "प्रश्न 9. एंजाइम की गतिविधि किससे अत्यधिक प्रभावित होती है?",
        answers: shuffle([
            { text: "तापमान", correct: false },
            { text: "pH", correct: false },
            { text: "सब्सट्रेट की सांद्रता", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंजाइम की क्रियाशीलता एक इष्टतम तापमान और pH पर अधिकतम होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  तापमान या pH में अत्यधिक परिवर्तन से एंजाइम विकृत (denature) हो सकता है। सब्सट्रेट की सांद्रता भी अभिक्रिया की दर को प्रभावित करती है।"
    },
    {
        question: "प्रश्न 10. वह अप्रोटीनी भाग जो एंजाइम से जुड़कर उसे सक्रिय बनाता है, क्या कहलाता है?",
        answers: shuffle([
            { text: "सब्सट्रेट", correct: false },
            { text: "उत्पाद", correct: false },
            { text: "सहकारक (Cofactor)", correct: true },
            { text: "संदमक (Inhibitor)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कई एंजाइमों को अपनी उत्प्रेरक गतिविधि के लिए एक गैर-प्रोटीन रासायनिक सहायक की आवश्यकता होती है, जिसे सहकारक कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह धातु आयन, को-एंजाइम या प्रोस्थेटिक समूह हो सकता है।"
    },
    {
        question: "प्रश्न 11. छोटी आंत में प्रोटीन को अमीनो अम्ल में तोड़ने के लिए कौन-सा एंजाइम उत्तरदायी है?",
        answers: shuffle([
            { text: "पेप्सिन", correct: false },
            { text: "ट्रिप्सिन", correct: false },
            { text: "इरेप्सिन", correct: true },
            { text: "लाइपेज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इरेप्सिन (जिसे डाईपेप्टाइडेज और अमीनोपेप्टाइडेज का मिश्रण माना जाता है) आंत्रीय रस में मौजूद होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और यह पेप्टाइड्स को उनके अंतिम उत्पाद, अमीनो अम्ल, में तोड़ता है।"
    },
    {
        question: "प्रश्न 12. 'राइबोजाइम' (Ribozymes) क्या हैं?",
        answers: shuffle([
            { text: "प्रोटीन आधारित एंजाइम", correct: false },
            { text: "RNA अणु जो एंजाइम की तरह कार्य करते हैं", correct: true },
            { text: "लिपिड आधारित एंजाइम", correct: false },
            { text: "डीएनए अणु जो एंजाइम की तरह कार्य करते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राइबोजाइम आरएनए के अणु होते हैं जिनमें उत्प्रेरक गुण होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो यह साबित करते हैं कि सभी एंजाइम प्रोटीन नहीं होते हैं।"
    },
    {
        question: "प्रश्न 13. सुक्रोज (गन्ने की शर्करा) को ग्लूकोज और फ्रुक्टोज में तोड़ने वाले एंजाइम का क्या नाम है?",
        answers: shuffle([
            { text: "माल्टेज", correct: false },
            { text: "लैक्टेज", correct: false },
            { text: "सुक्रेज (या इनवर्टेज)", correct: true },
            { text: "जाइमेज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुक्रेज एंजाइम डाइसैकेराइड सुक्रोज पर क्रिया करके उसे मोनोसैकेराइड ग्लूकोज और फ्रुक्टोज में तोड़ देता है।"
    },
    {
        question: "प्रश्न 14. कौन-सा एंजाइम रक्त के थक्के जमने (Blood Clotting) की प्रक्रिया में मदद करता है?",
        answers: shuffle([
            { text: "एमाइलेज", correct: false },
            { text: "थ्रोम्बिन", correct: true },
            { text: "पेप्सिन", correct: false },
            { text: "कैटालेज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थ्रोम्बिन एक एंजाइम है जो रक्त में घुलनशील फाइब्रिनोजेन को अघुलनशील फाइब्रिन धागों में परिवर्तित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो रक्त का थक्का बनाने के लिए जाल का निर्माण करते हैं।"
    },
    {
        question: "प्रश्न 15. अत्यधिक उच्च तापमान पर एंजाइम की क्रिया पर क्या प्रभाव पड़ता है?",
        answers: shuffle([
            { text: "क्रिया तेज हो जाती है", correct: false },
            { text: "एंजाइम निष्क्रिय या विकृत (denatured) हो जाता है", correct: true },
            { text: "कोई प्रभाव नहीं पड़ता", correct: false },
            { text: "क्रिया धीमी हो जाती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उच्च तापमान एंजाइम की त्रि-आयामी संरचना को नष्ट कर देता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे उसका सक्रिय स्थल बदल जाता है और वह अपनी उत्प्रेरक क्षमता खो देता है। इस प्रक्रिया को विकृतीकरण कहते हैं।"
    },
    {
        question: "प्रश्न 16. डीएनए प्रतिकृति (DNA Replication) के दौरान डीएनए हेलिक्स को खोलने वाला एंजाइम कौन-सा है?",
        answers: shuffle([
            { text: "डीएनए पॉलिमरेज", correct: false },
            { text: "डीएनए लाइगेज", correct: false },
            { text: "हेलिकेज", correct: true },
            { text: "आरएनए पॉलिमरेज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेलिकेज एंजाइम डीएनए की दोहरी कुंडली के बीच हाइड्रोजन बंधों को तोड़कर उसे खोलता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  ताकि प्रतिकृति के लिए दोनों स्ट्रैंड अलग हो सकें।"
    },
    {
        question: "प्रश्न 17. एंजाइम के उस स्थान को क्या कहते हैं जहाँ सब्सट्रेट जुड़ता है?",
        answers: shuffle([
            { text: "एलोस्टेरिक स्थल", correct: false },
            { text: "सक्रिय स्थल (Active site)", correct: true },
            { text: "सहकारक स्थल", correct: false },
            { text: "नियामक स्थल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सक्रिय स्थल एंजाइम पर एक विशिष्ट त्रि-आयामी खांच या पॉकेट है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जहाँ सब्सट्रेट अणु जुड़ता है और रासायनिक अभिक्रिया होती है।"
    },
    {
        question: "प्रश्न 18. पेप्सिन एंजाइम कार्य करने के लिए किस माध्यम की आवश्यकता होती है?",
        answers: shuffle([
            { text: "क्षारीय माध्यम", correct: false },
            { text: "अम्लीय माध्यम", correct: true },
            { text: "उदासीन माध्यम", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेप्सिन आमाशय में मौजूद हाइड्रोक्लोरिक अम्ल (HCl) द्वारा बनाए गए अत्यधिक अम्लीय वातावरण (pH 1.5-3.5) में ही सर्वोत्तम रूप से कार्य करता है।"
    },
    {
        question: "प्रश्न 19. कौन-सा विटामिन कई महत्वपूर्ण को-एंजाइम (Coenzymes) का एक प्रमुख घटक है?",
        answers: shuffle([
            { text: "विटामिन C", correct: false },
            { text: "विटामिन D", correct: false },
            { text: "विटामिन B कॉम्प्लेक्स", correct: true },
            { text: "विटामिन K", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विटामिन B समूह के कई सदस्य (जैसे नियासिन, राइबोफ्लेविन, पैंटोथेनिक एसिड) NAD, FAD, और को-एंजाइम A जैसे महत्वपूर्ण को-एंजाइमों के निर्माण के लिए आवश्यक हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो चयापचय में महत्वपूर्ण भूमिका निभाते हैं।"
    },
    {
        question: "प्रश्न 20. 'प्रतिस्पर्धी संदमक' (Competitive Inhibitor) एंजाइम की क्रिया को कैसे रोकता है?",
        answers: shuffle([
            { text: "एंजाइम की संरचना को स्थायी रूप से बदलकर", correct: false },
            { text: "सक्रिय स्थल के लिए सब्सट्रेट के साथ प्रतिस्पर्धा करके", correct: true },
            { text: "तापमान को बढ़ाकर", correct: false },
            { text: "pH को बदलकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिस्पर्धी संदमक की संरचना सब्सट्रेट के समान होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसलिए यह एंजाइम के सक्रिय स्थल पर जुड़ने के लिए सब्सट्रेट के साथ प्रतिस्पर्धा करता है, जिससे अभिक्रिया की दर कम हो जाती है।"
    },
    {
        question: "प्रश्न 21. कार्बनिक एनहाइड्रेज (Carbonic Anhydrase) एंजाइम का क्या कार्य है?",
        answers: shuffle([
            { text: "प्रोटीन का पाचन", correct: false },
            { text: "रक्त में कार्बन डाइऑक्साइड के परिवहन में तेजी लाना", correct: true },
            { text: "वसा का संश्लेषण", correct: false },
            { text: "ग्लूकोज का विखंडन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह मानव शरीर में सबसे तेज एंजाइमों में से एक है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह रक्त में कार्बन डाइऑक्साइड और पानी के बीच की अभिक्रिया को उत्प्रेरित करके कार्बोनिक एसिड बनाता है, जो CO2 परिवहन के लिए महत्वपूर्ण है।"
    },
    {
        question: "प्रश्न 22. वह एंजाइम जो हाइड्रोजन परॉक्साइ  को पानी और ऑक्सीजन में तोड़ता है, क्या कहलाता है?",
        answers: shuffle([
            { text: "परऑक्सिडेज", correct: false },
            { text: "कैटालेज", correct: true },
            { text: "लाइपेज", correct: false },
            { text: "हाइड्रोलेज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैटालेज एक बहुत ही सामान्य एंजाइम है जो लगभग सभी वायवीय जीवों में पाया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह हानिकारक मेटाबोलिक उप-उत्पाद, हाइड्रोजन परॉक्साइड, को हानिरहित पानी और ऑक्सीजन में विघटित करता है।"
    },
    {
        question: "प्रश्न 23. डीएनए के खंडों को जोड़ने के लिए किस एंजाइम का उपयोग किया जाता है, जिसे 'आणविक गोंद' (Molecular glue) भी कहते हैं?",
        answers: shuffle([
            { text: "हेलिकेज", correct: false },
            { text: "पॉलिमरेज", correct: false },
            { text: "न्यूक्लियेज", correct: false },
            { text: "लाइगेज", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डीएनए लाइगेज डीएनए के खंडों के बीच फॉस्फोडाइस्टर बंध बनाकर उन्हें जोड़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह डीएनए प्रतिकृति, मरम्मत और जेनेटिक इंजीनियरिंग में महत्वपूर्ण है।"
    },
    {
        question: "प्रश्न 24. अग्नाशय से स्रावित ट्रिप्सिन एंजाइम कहाँ कार्य करता है?",
        answers: shuffle([
            { text: "आमाशय में", correct: false },
            { text: "यकृत में", correct: false },
            { text: "छोटी आंत में", correct: true },
            { text: "बड़ी आंत में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ट्रिप्सिन अग्न्याशय द्वारा एक निष्क्रिय रूप (ट्रिप्सिनोजेन) में स्रावित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और छोटी आंत के क्षारीय माध्यम में सक्रिय होकर प्रोटीन को पेप्टाइड्स में तोड़ता है।"
    },
    {
        question: "प्रश्न 25. एंजाइम के नाम के अंत में सामान्यतः कौन-सा प्रत्यय (suffix) जोड़ा जाता है?",
        answers: shuffle([
            { text: "-ओज (-ose)", correct: false },
            { text: "-इन (-in)", correct: false },
            { text: "-एज (-ase)", correct: true },
            { text: "-इक (-ic)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंतर्राष्ट्रीय नामकरण प्रणाली के अनुसार, अधिकांश एंजाइमों का नाम उनके सब्सट्रेट या उनके द्वारा उत्प्रेरित की जाने वाली अभिक्रिया के नाम पर रखा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और अंत में '-एज' (-ase) प्रत्यय जोड़ा जाता है (जैसे, लैक्टेज, लाइपेज, पॉलिमरेज)।"
    },
    {
        question: "प्रश्न 26. लैक्टोज (दूध की शर्करा) को ग्लूकोज और गैलेक्टोज में विघटित करने वाला एंजाइम कौन-सा है?",
        answers: shuffle([
            { text: "माल्टेज", correct: false },
            { text: "सुक्रेज", correct: false },
            { text: "लैक्टेज", correct: true },
            { text: "पेप्सिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैक्टेज एंजाइम छोटी आंत में पाया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और यह दूध में मौजूद डाइसैकेराइड लैक्टोज का पाचन करता है। इसकी कमी से लैक्टोज असहिष्णुता (lactose intolerance) होती है।"
    },
    {
        question: "प्रश्न 27. एंजाइम की क्रिया को धीमा या बंद करने वाले पदार्थ क्या कहलाते हैं?",
        answers: shuffle([
            { text: "उत्प्रेरक (Catalyst)", correct: false },
            { text: "सब्सट्रेट (Substrate)", correct: false },
            { text: "संदमक (Inhibitor)", correct: true },
            { text: "सहकारक (Cofactor)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संदमक ऐसे अणु होते हैं जो एंजाइम से जुड़कर उसकी गतिविधि को कम कर देते हैं या पूरी तरह से रोक देते हैं।"
    },
    {
        question: "प्रश्न 28. कौन-सा एंजाइम न्यूक्लिक अम्ल (DNA, RNA) को न्यूक्लियोटाइड में तोड़ता है?",
        answers: shuffle([
            { text: "प्रोटीएज", correct: false },
            { text: "लाइपेज", correct: false },
            { text: "न्यूक्लियेज", correct: true },
            { text: "एमाइलेज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूक्लियेज एंजाइमों का एक समूह है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो न्यूक्लिक एसिड के फॉस्फोडाइस्टर बंधों को तोड़कर उन्हें छोटे न्यूक्लियोटाइड इकाइयों में विघटित करता है।"
    },
    {
        question: "प्रश्न 29. शराब उद्योग में, खमीर (Yeast) द्वारा शर्करा के किण्वन से इथेनॉल बनाने के लिए किस एंजाइम कॉम्प्लेक्स का उपयोग होता है?",
        answers: shuffle([
            { text: "इनवर्टेज", correct: false },
            { text: "जाइमेज", correct: true },
            { text: "डायस्टेज", correct: false },
            { text: "यूरिएज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जाइमेज खमीर में पाया जाने वाला एक एंजाइम कॉम्प्लेक्स है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो ग्लूकोज और फ्रुक्टोज जैसी सरल शर्करा को इथेनॉल और कार्बन डाइऑक्साइड में परिवर्तित करता है, जो किण्वन की प्रक्रिया है।"
    },
    {
        question: "प्रश्न 30. किसी एंजाइम का 'इष्टतम pH' (Optimum pH) क्या है?",
        answers: shuffle([
            { text: "वह pH जिस पर वह निष्क्रिय हो जाता है", correct: false },
            { text: "वह pH जिस पर उसकी गतिविधि अधिकतम होती है", correct: true },
            { text: "वह pH जिस पर वह बनना शुरू होता है", correct: false },
            { text: "वह pH जो हमेशा 7.0 होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्येक एंजाइम एक विशिष्ट pH रेंज में सबसे अच्छा काम करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और जिस pH पर उसकी उत्प्रेरक गतिविधि उच्चतम होती है, उसे उसका इष्टतम pH कहा जाता है।"
    },
    {
        question: "प्रश्न 31. एलोस्टेरिक संदमन (Allosteric Inhibition) में, संदमक कहाँ जुड़ता है?",
        answers: shuffle([
            { text: "सक्रिय स्थल पर", correct: false },
            { text: "सक्रिय स्थल के अलावा किसी अन्य स्थल पर", correct: true },
            { text: "सब्सट्रेट से", correct: false },
            { text: "उत्पाद से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एलोस्टेरिक संदमन में, संदमक अणु एंजाइम के सक्रिय स्थल के बजाय एक अलग नियामक स्थल (एलोस्टेरिक स्थल) पर जुड़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे एंजाइम की आकृति में परिवर्तन होता है और उसकी क्रियाशीलता कम हो जाती है।"
    },
    {
        question: "प्रश्न 32. वह एंजाइम जो यूरिया को अमोनिया और कार्बन डाइऑक्साइड में विघटित करता है, क्या कहलाता है?",
        answers: shuffle([
            { text: "आर्जिनेज", correct: false },
            { text: "यूरिकेज", correct: false },
            { text: "यूरिएज", correct: true },
            { text: "नाइट्रोजिनेज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूरिएज एंजाइम यूरिया के जल-अपघटन (hydrolysis) को उत्प्रेरित करके अमोनिया और कार्बन डाइऑक्साइड का निर्माण करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह सोयाबीन और कई जीवाणुओं में पाया जाता है।"
    },
    {
        question: "प्रश्न 33. पूर्ण क्रियात्मक एंजाइम, जिसमें उसका प्रोटीनी भाग और सहकारक दोनों शामिल हों, क्या कहलाता है?",
        answers: shuffle([
            { text: "एपोएंजाइम (Apoenzyme)", correct: false },
            { text: "होलोएंजाइम (Holoenzyme)", correct: true },
            { text: "को-एंजाइम (Coenzyme)", correct: false },
            { text: "आइसोएंजाइम (Isoenzyme)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> होलोएंजाइम एक पूर्ण और उत्प्रेरक रूप से सक्रिय एंजाइम है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह एपोएंजाइम (प्रोटीन भाग) और उसके सहकारक (गैर-प्रोटीन भाग) से मिलकर बना होता है।"
    },
    {
        question: "प्रश्न 34. एंजाइम की क्रिया के संबंध में 'सब्सट्रेट सांद्रता' का क्या प्रभाव होता है?",
        answers: shuffle([
            { text: "सांद्रता बढ़ने से क्रिया हमेशा बढ़ती है", correct: false },
            { text: "एक सीमा तक सांद्रता बढ़ने से क्रिया की दर बढ़ती है, फिर स्थिर हो जाती है", correct: true },
            { text: "सांद्रता का कोई प्रभाव नहीं पड़ता", correct: false },
            { text: "सांद्रता बढ़ने से क्रिया हमेशा घटती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब सब्सट्रेट की सांद्रता बढ़ाई जाती है, तो अभिक्रिया की दर तब तक बढ़ती है जब तक कि एंजाइम के सभी सक्रिय स्थल सब्सट्रेट से संतृप्त न हो जाएं।<br><br><i class='fa-solid fa-angles-right icon'></i>  उसके बाद, दर स्थिर हो जाती है।"
    },
    {
        question: "प्रश्न 35. जेनेटिक इंजीनियरिंग में, डीएनए को विशिष्ट स्थलों पर काटने के लिए किस एंजाइम का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "डीएनए लाइगेज", correct: false },
            { text: "रेस्ट्रिक्शन एंडोन्यूक्लियेज", correct: true },
            { text: "डीएनए पॉलिमरेज", correct: false },
            { text: "रिवर्स ट्रांसक्रिप्टेज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेस्ट्रिक्शन एंजाइम, जिन्हें 'आणविक कैंची' (molecular scissors) भी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  डीएनए को विशिष्ट पहचान अनुक्रमों (recognition sequences) पर काटते हैं, जो जीन क्लोनिंग और डीएनए फिंगरप्रिंटिंग के लिए आवश्यक है।"
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