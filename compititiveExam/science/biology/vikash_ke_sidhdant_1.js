const questions = [
    {
        topHeading: "विकास के सिद्धांतों पर आधारित 30 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'उपार्जित लक्षणों की वंशागति' का सिद्धांत (Theory of Inheritance of Acquired Characters) किसने प्रतिपादित किया?",
        answers: shuffle([
            { text: "चार्ल्स डार्विन", correct: false },
            { text: "ग्रेगर मेंडल", correct: false },
            { text: "जीन-बैप्टिस्ट लैमार्क", correct: true },
            { text: "अल्फ्रेड रसेल वॉलेस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैमार्क ने यह सिद्धांत दिया था कि जीव अपने जीवनकाल में जो भी लक्षण अर्जित करते हैं (जैसे मांसपेशियों का विकास)।<br><br><i class='fa-solid fa-angles-right icon'></i>  वे उन्हें अपनी संतानों में हस्तांतरित कर सकते हैं।"
    },
    {
        question: "प्रश्न 2. चार्ल्स डार्विन द्वारा प्रतिपादित विकास के सिद्धांत को किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "उत्परिवर्तन का सिद्धांत", correct: false },
            { text: "प्राकृतिक चयन का सिद्धांत (Theory of Natural Selection)", correct: true },
            { text: "अंगों का उपयोग और अनुपयोग", correct: false },
            { text: "जननद्रव्य का सिद्धांत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डार्विन का सिद्धांत इस विचार पर आधारित है कि प्रकृति उन जीवों का चयन करती है जो अपने पर्यावरण के लिए सबसे उपयुक्त होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और वे ही जीवित रहकर प्रजनन करते हैं।"
    },
    {
        question: "प्रश्न 3. लैमार्क ने अपने सिद्धांत को समझाने के लिए किस जानवर की लंबी गर्दन का उदाहरण दिया?",
        answers: shuffle([
            { text: "हाथी", correct: false },
            { text: "जिराफ", correct: true },
            { text: "ऊँट", correct: false },
            { text: "जेब्रा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैमार्क के अनुसार, जिराफों ने ऊँची पत्तियों तक पहुँचने के लिए अपनी गर्दन को लगातार खींचा।<br><br><i class='fa-solid fa-angles-right icon'></i>  और यह अर्जित लक्षण पीढ़ी-दर-पीढ़ी हस्तांतरित होता गया, जिससे उनकी गर्दन लंबी हो गई।"
    },
    {
        question: "प्रश्न 4. डार्विन की प्रसिद्ध पुस्तक का क्या नाम है जिसमें उन्होंने अपने विकास के सिद्धांत को प्रस्तुत किया?",
        answers: shuffle([
            { text: "फिलोसोफी जूलॉजिक (Philosophie Zoologique)", correct: false },
            { text: "ऑन द ओरिजिन ऑफ स्पीशीज (On the Origin of Species)", correct: true },
            { text: "सिस्टेमा नेचुरी (Systema Naturae)", correct: false },
            { text: "जेनेटिक्स एंड द ओरिजिन ऑफ स्पीशीज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> \"ऑन द ओरिजिन ऑफ स्पीशीज बाय मीन्स ऑफ नेचुरल सिलेक्शन\" 1859 में प्रकाशित हुई।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह डार्विन की सबसे महत्वपूर्ण कृति है जिसमें उन्होंने विकास के अपने सिद्धांत को विस्तार से समझाया।"
    },
    {
        question: "प्रश्न 5. 'योग्यतम की उत्तरजीविता' (Survival of the Fittest) वाक्यांश का सबसे पहले प्रयोग किसने किया था?",
        answers: shuffle([
            { text: "चार्ल्स डार्विन", correct: false },
            { text: "हर्बर्ट स्पेंसर", correct: true },
            { text: "लैमार्क", correct: false },
            { text: "थॉमस माल्थस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि यह वाक्यांश डार्विनवाद से निकटता से जुड़ा हुआ है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसे वास्तव में समाजशास्त्री और दार्शनिक हर्बर्ट स्पेंसर ने डार्विन के काम को पढ़ने के बाद गढ़ा था। डार्विन ने बाद में इसे अपनी पुस्तक के बाद के संस्करणों में अपनाया।"
    },
    {
        question: "प्रश्न 6. डार्विन के सिद्धांत के अनुसार, जीवों में अत्यधिक संतानोत्पत्ति का परिणाम क्या होता है?",
        answers: shuffle([
            { text: "सभी संतानें जीवित रहती हैं", correct: false },
            { text: "जीवन के लिए संघर्ष (Struggle for Existence)", correct: true },
            { text: "कोई भिन्नता नहीं होती", correct: false },
            { text: "प्रजातियाँ तेजी से विलुप्त होती हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डार्विन ने देखा कि जीव अपनी क्षमता से अधिक संतानें पैदा करते हैं, लेकिन संसाधन सीमित होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  इससे भोजन, स्थान और साथी के लिए एक भयंकर प्रतिस्पर्धा या 'जीवन के लिए संघर्ष' होता है।"
    },
    {
        question: "प्रश्न 7. लैमार्क के 'अंगों का उपयोग और अनुपयोग' के सिद्धांत का क्या अर्थ है?",
        answers: shuffle([
            { text: "सभी अंगों का समान रूप से उपयोग किया जाता है", correct: false },
            { text: "जिन अंगों का अधिक उपयोग होता है वे विकसित हो जाते हैं और जिनका उपयोग नहीं होता वे अविकसित या लुप्त हो जाते हैं", correct: true },
            { text: "अंग केवल पर्यावरण द्वारा निर्धारित होते हैं", correct: false },
            { text: "अंग कभी नहीं बदलते", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैमार्क का मानना था कि किसी अंग का निरंतर उपयोग उसे मजबूत और अधिक विकसित बनाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जबकि अनुपयोग उसे कमजोर और अंततः लुप्त कर देता है (जैसे साँपों में पैरों का अभाव)।"
    },
    {
        question: "प्रश्न 8. डार्विन ने किस द्वीप समूह पर अपने महत्वपूर्ण अवलोकन किए, विशेषकर फिंच पक्षियों पर?",
        answers: shuffle([
            { text: "अंडमान और निकोबार द्वीप समूह", correct: false },
            { text: "हवाई द्वीप समूह", correct: false },
            { text: "गैलापागोस द्वीप समूह", correct: true },
            { text: "मेडागास्कर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गैलापागोस द्वीप समूह पर, डार्विन ने विभिन्न द्वीपों पर फिंच पक्षियों की चोंच में भिन्नताएं देखीं, जो उनके भोजन की आदतों के अनुकूल थीं।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह अवलोकन प्राकृतिक चयन के उनके सिद्धांत के लिए एक प्रमुख प्रेरणा बना।"
    },
    {
        question: "प्रश्न 9. किस वैज्ञानिक के जनसंख्या पर लिखे निबंध ने डार्विन को 'जीवन के लिए संघर्ष' का विचार दिया?",
        answers: shuffle([
            { text: "ग्रेगर मेंडल", correct: false },
            { text: "थॉमस माल्थस", correct: true },
            { text: "अल्फ्रेड रसेल वॉलेस", correct: false },
            { text: "अरस्तू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थॉमस माल्थस ने लिखा था कि मानव जनसंख्या ज्यामितीय रूप से बढ़ती है, जबकि खाद्य संसाधन अंकगणितीय रूप से बढ़ते हैं, जिससे अकाल और संघर्ष होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  डार्विन ने इस विचार को सभी जीवित प्राणियों पर लागू किया।"
    },
    {
        question: "प्रश्न 10. लैमार्कवाद और डार्विनवाद में मुख्य अंतर क्या है?",
        answers: shuffle([
            { text: "डार्विन ने विकास को स्वीकार किया, लैमार्क ने नहीं", correct: false },
            { text: "लैमार्क ने उपार्जित लक्षणों की वंशागति पर जोर दिया, जबकि डार्विन ने प्राकृतिक चयन पर", correct: true },
            { text: "लैमार्क जानवरों पर केंद्रित थे, डार्विन पौधों पर", correct: false },
            { text: "डार्विन ने जीवाश्मों का उपयोग किया, लैमार्क ने नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह दोनों सिद्धांतों के बीच सबसे मौलिक अंतर है।<br><br><i class='fa-solid fa-angles-right icon'></i>  लैमार्क का मानना था कि जीव प्रयास के माध्यम से लक्षण प्राप्त करते हैं और उन्हें आगे बढ़ाते हैं, जबकि डार्विन का मानना था कि प्रकृति पहले से मौजूद भिन्नताओं में से सर्वश्रेष्ठ का चयन करती है।"
    },
    {
        question: "प्रश्न 11. ऑगस्ट वीज़मैन ने चूहों की पूंछ काटकर किस सिद्धांत को गलत साबित करने का प्रयास किया?",
        answers: shuffle([
            { text: "डार्विन का प्राकृतिक चयन", correct: false },
            { text: "लैमार्क का उपार्जित लक्षणों की वंशागति", correct: true },
            { text: "मेंडल का आनुवंशिकता का नियम", correct: false },
            { text: "उत्परिवर्तन का सिद्धांत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वीज़मैन ने कई पीढ़ियों तक चूहों की पूंछ काटी, लेकिन पाया कि हर पीढ़ी में चूहे पूंछ के साथ ही पैदा होते थे।<br><br><i class='fa-solid fa-angles-right icon'></i>  इससे यह प्रदर्शित हुआ कि जीवनकाल में अर्जित किया गया शारीरिक परिवर्तन (पूंछ का कटना) अगली पीढ़ी में स्थानांतरित नहीं होता है।"
    },
    {
        question: "प्रश्न 12. डार्विन के अनुसार, विकास के लिए कच्चा माल (raw material) क्या है?",
        answers: shuffle([
            { text: "पर्यावरण का दबाव", correct: false },
            { text: "अंगों का उपयोग", correct: false },
            { text: "विभिन्नताएँ (Variations)", correct: true },
            { text: "भोजन की कमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डार्विन का मानना था कि किसी भी आबादी में जीवों के बीच स्वाभाविक रूप से छोटी-छोटी विभिन्नताएँ मौजूद होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  प्राकृतिक चयन इन्हीं विभिन्नताओं पर कार्य करता है।"
    },
    {
        question: "प्रश्न 13. औद्योगिक अतिकृष्णता (Industrial Melanism) किस सिद्धांत का एक उत्कृष्ट उदाहरण है?",
        answers: shuffle([
            { text: "लैमार्कवाद", correct: false },
            { text: "डार्विनवाद (प्राकृतिक चयन)", correct: true },
            { text: "उत्परिवर्तनवाद", correct: false },
            { text: "हार्डी-वेनबर्ग सिद्धांत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंग्लैंड में औद्योगिक क्रांति के दौरान, पेड़ों के तने काले हो गए, जिससे गहरे रंग के पतंगे (peppered moths) शिकारियों से बच गए और उनकी आबादी बढ़ गई, जबकि हल्के रंग के पतंगे आसानी से शिकार हो गए।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह प्राकृतिक चयन का एक प्रत्यक्ष प्रमाण है।"
    },
    {
        question: "प्रश्न 14. लैमार्क की पुस्तक 'फिलोसोफी जूलॉजिक' किस वर्ष प्रकाशित हुई थी?",
        answers: shuffle([
            { text: "1859", correct: false },
            { text: "1759", correct: false },
            { text: "1809", correct: true },
            { text: "1900", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैमार्क ने अपने विकास संबंधी विचार अपनी पुस्तक \"फिलोसोफी जूलॉजिक\" में प्रकाशित किए।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो 1809 में छपी थी।"
    },
    {
        question: "प्रश्न 15. डार्विन जिस जहाज पर अपनी विश्व यात्रा पर गए थे, उसका नाम क्या था?",
        answers: shuffle([
            { text: "एच.एम.एस. विक्ट्री", correct: false },
            { text: "एच.एम.एस. टाइटैनिक", correct: false },
            { text: "एच.एम.एस. एंडेवर", correct: false },
            { text: "एच.एम.एस. बीगल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डार्विन ने 1831 से 1836 तक एच.एम.एस. बीगल पर एक प्रकृतिवादी के रूप में यात्रा की।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसने उनके विचारों को आकार देने में महत्वपूर्ण भूमिका निभाई।"
    },
    {
        question: "प्रश्न 16. 'नव-डार्विनवाद' (Neo-Darwinism) डार्विन के मूल सिद्धांत में किसे शामिल करता है?",
        answers: shuffle([
            { text: "लैमार्क के विचारों को", correct: false },
            { text: "आनुवंशिकी और उत्परिवर्तन के ज्ञान को", correct: true },
            { text: "दैवीय हस्तक्षेप को", correct: false },
            { text: "सामाजिक विकास को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डार्विन विभिन्नताओं के स्रोत की व्याख्या नहीं कर सके थे।<br><br><i class='fa-solid fa-angles-right icon'></i>  नव-डार्विनवाद, जिसे विकास का आधुनिक संश्लेषण भी कहा जाता है, आनुवंशिक उत्परिवर्तन और पुनर्संयोजन को विभिन्नताओं के मुख्य स्रोत के रूप में शामिल करता है।"
    },
    {
        question: "प्रश्न 17. कौन सा वैज्ञानिक डार्विन के लगभग समान समय में प्राकृतिक चयन के सिद्धांत पर स्वतंत्र रूप से पहुंचा था?",
        answers: shuffle([
            { text: "ग्रेगर मेंडल", correct: false },
            { text: "लुई पाश्चर", correct: false },
            { text: "अल्फ्रेड रसेल वॉलेस", correct: true },
            { text: "रॉबर्ट हुक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वॉलेस ने भी, डार्विन से स्वतंत्र रूप से, प्राकृतिक चयन द्वारा विकास का एक सिद्धांत विकसित किया था।<br><br><i class='fa-solid fa-angles-right icon'></i>  उनके लेख ने डार्विन को अपनी पुस्तक प्रकाशित करने के लिए प्रेरित किया।"
    },
    {
        question: "प्रश्न 18. डार्विन के अनुसार, जीवन संघर्ष कितने प्रकार का होता है?",
        answers: shuffle([
            { text: "केवल एक", correct: false },
            { text: "दो (अंतर्जातीय और पर्यावरणीय)", correct: false },
            { text: "तीन (अंतर्जातीय, अंतराजातीय और पर्यावरणीय)", correct: true },
            { text: "चार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डार्विन ने तीन प्रकार के संघर्ष का वर्णन किया:<br><br><i class='fa-solid fa-angles-right icon'></i>  अंतराजातीय (एक ही प्रजाति के सदस्यों के बीच), अंतर्जातीय (विभिन्न प्रजातियों के बीच), और पर्यावरणीय (प्राकृतिक परिस्थितियों जैसे बाढ़, सूखा के खिलाफ)।"
    },
    {
        question: "प्रश्न 19. लैमार्क के अनुसार, साँपों ने अपने पैर क्यों खो दिए?",
        answers: shuffle([
            { text: "प्राकृतिक चयन के कारण", correct: false },
            { text: "एक उत्परिवर्तन के कारण", correct: false },
            { text: "बिलों में रेंगने के लिए पैरों का उपयोग न करने के कारण", correct: true },
            { text: "एक बीमारी के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैमार्क के 'अंगों का अनुपयोग' सिद्धांत के अनुसार, साँपों के पूर्वजों ने अपने पैरों का उपयोग करना बंद कर दिया क्योंकि वे बिल में घुसने में बाधा डालते थे।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसके कारण वे धीरे-धीरे लुप्त हो गए।"
    },
    {
        question: "प्रश्न 20. अवशेषी अंग (Vestigial organs) जैसे कि मानव में अपेंडिक्स, किस सिद्धांत के प्रमाण के रूप में काम करते हैं?",
        answers: shuffle([
            { text: "केवल लैमार्कवाद", correct: false },
            { text: "केवल डार्विनवाद", correct: false },
            { text: "जैविक विकास (लैमार्कवाद और डार्विनवाद दोनों)", correct: true },
            { text: "किसी के नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवशेषी अंग उन संरचनाओं को संदर्भित करते हैं जो पूर्वजों में कार्यात्मक थीं लेकिन अब नहीं हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह इस बात का प्रमाण है कि प्रजातियाँ समय के साथ बदलती हैं, जो विकास के दोनों सिद्धांतों का एक केंद्रीय विचार है।"
    },
    {
        question: "प्रश्न 21. डार्विनवाद की सबसे बड़ी कमजोरी क्या थी?",
        answers: shuffle([
            { text: "वह जीवाश्म रिकॉर्ड की व्याख्या नहीं कर सका", correct: false },
            { text: "वह अत्यधिक संतानोत्पत्ति की व्याख्या नहीं कर सका", correct: false },
            { text: "वह विभिन्नताओं की उत्पत्ति और वंशागति के तंत्र की व्याख्या नहीं कर सका", correct: true },
            { text: "उसने मनुष्य के विकास को नजरअंदाज कर दिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डार्विन जानते थे कि विभिन्नताएँ विकास के लिए महत्वपूर्ण हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  लेकिन उस समय आनुवंशिकी का ज्ञान न होने के कारण, वह यह नहीं बता सके कि ये विभिन्नताएँ कैसे उत्पन्न होती हैं और कैसे एक पीढ़ी से दूसरी पीढ़ी में जाती हैं।"
    },
    {
        question: "प्रश्न 22. 'अनुकूली विकिरण' (Adaptive Radiation) की अवधारणा किससे सबसे निकटता से संबंधित है?",
        answers: shuffle([
            { text: "लैमार्क से", correct: false },
            { text: "डार्विन से", correct: true },
            { text: "वीज़मैन से", correct: false },
            { text: "मेंडल से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डार्विन ने गैलापागोस फिंच में अनुकूली विकिरण का अवलोकन किया।<br><br><i class='fa-solid fa-angles-right icon'></i>  जहाँ एक सामान्य पूर्वज प्रजाति से कई नई प्रजातियाँ विकसित हुईं, जो विभिन्न पर्यावरणीय niches के लिए अनुकूलित हो गईं।"
    },
    {
        question: "प्रश्न 23. कीटनाशकों के प्रति कीड़ों में प्रतिरोध का विकास किस प्रक्रिया का एक उदाहरण है?",
        answers: shuffle([
            { text: "उपार्जित लक्षणों की वंशागति", correct: false },
            { text: "प्राकृतिक चयन", correct: true },
            { text: "कृत्रिम चयन", correct: false },
            { text: "जेनेटिक ड्रिफ्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कीटनाशकों का छिड़काव किया जाता है, तो कुछ कीड़े अपनी आनुवंशिक विभिन्नता के कारण स्वाभाविक रूप से प्रतिरोधी होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  वे जीवित रहते हैं और प्रजनन करते हैं, जिससे समय के साथ प्रतिरोधी कीड़ों की आबादी बढ़ जाती है, जो प्राकृतिक चयन है।"
    },
    {
        question: "प्रश्न 24. लैमार्कवाद के अनुसार विकास की प्रक्रिया कैसी है?",
        answers: shuffle([
            { text: "धीमी और सतत", correct: false },
            { text: "अचानक और असतत", correct: false },
            { text: "जीव के सचेत प्रयासों का परिणाम", correct: true },
            { text: "पूरी तरह से यादृच्छिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैमार्क का मानना था कि जीवों में एक 'आंतरिक शक्ति' होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और वे पर्यावरण के अनुकूल होने के लिए सचेत प्रयास करते हैं, जिससे विकास होता है। डार्विनवाद में, यह प्रक्रिया यादृच्छिक विभिन्नताओं पर प्रकृति के चयन के कारण होती है।"
    },
    {
        question: "प्रश्न 25. डार्विन के अनुसार, एक ही प्रजाति के सदस्यों के बीच संघर्ष सबसे तीव्र क्यों होता है?",
        answers: shuffle([
            { text: "क्योंकि वे एक दूसरे को पसंद नहीं करते", correct: false },
            { text: "क्योंकि उनकी आवश्यकताएं (भोजन, स्थान, साथी) लगभग समान होती हैं", correct: true },
            { text: "क्योंकि वे विभिन्न प्रजातियों से लड़ने में असमर्थ होते हैं", correct: false },
            { text: "क्योंकि यह एक यादृच्छिक घटना है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि एक ही प्रजाति के जीवों को समान संसाधनों की आवश्यकता होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  उनके बीच प्रतिस्पर्धा सबसे तीव्र होती है, जिसे अंतराजातीय संघर्ष (intraspecific struggle) कहते हैं।"
    },
    {
        question: "प्रश्न 26. 'फिलोसोफी जूलॉजिक' किसकी रचना है?",
        answers: shuffle([
            { text: "चार्ल्स डार्विन", correct: false },
            { text: "ए.आर. वॉलेस", correct: false },
            { text: "जीन-बैप्टिस्ट लैमार्क", correct: true },
            { text: "कार्ल लिनिअस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह लैमार्क की 1809 में प्रकाशित पुस्तक है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें उन्होंने अपने विकासवादी विचारों को प्रस्तुत किया, जो डार्विन के काम से 50 साल पहले आया था।"
    },
    {
        question: "प्रश्न 27. कृत्रिम चयन (Artificial Selection) क्या है?",
        answers: shuffle([
            { text: "प्रकृति द्वारा किया गया चयन", correct: false },
            { text: "मनुष्यों द्वारा अपनी इच्छानुसार लक्षणों का चयन करके जानवरों या पौधों का प्रजनन कराना", correct: true },
            { text: "प्रयोगशाला में जीनों को बदलना", correct: false },
            { text: "जीवों का क्लोनिंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कृत्रिम चयन (जैसे कुत्तों की विभिन्न नस्लों का विकास) में मनुष्यों द्वारा अपनी इच्छानुसार लक्षणों का चयन करके जानवरों या पौधों का प्रजनन कराया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  डार्विन ने इसका उपयोग अपने प्राकृतिक चयन के सिद्धांत को समझाने के लिए किया।"
    },
    {
        question: "प्रश्न 28. कौन सा विचार लैमार्कवाद का हिस्सा नहीं है?",
        answers: shuffle([
            { text: "आंतरिक जैविक शक्ति", correct: false },
            { text: "अंगों का उपयोग और अनुपयोग", correct: false },
            { text: "योग्यतम की उत्तरजीविता", correct: true },
            { text: "उपार्जित लक्षणों की वंशागति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'योग्यतम की उत्तरजीविता' डार्विन के प्राकृतिक चयन के सिद्धांत का एक केंद्रीय विचार है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह लैमार्कवाद का हिस्सा नहीं है।"
    },
    {
        question: "प्रश्न 29. डार्विन के फिंच पक्षियों की चोंच में भिन्नता का मुख्य कारण क्या था?",
        answers: shuffle([
            { text: "यौन चयन", correct: false },
            { text: "अलग-अलग द्वीपों पर भोजन की उपलब्धता में भिन्नता", correct: true },
            { text: "जलवायु में अंतर", correct: false },
            { text: "शिकारियों का दबाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फिंच की चोंच का आकार और आकृति उनके भोजन के स्रोत (जैसे कीड़े, बीज, कैक्टस) के अनुकूल हो गई थी।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो प्राकृतिक चयन का एक स्पष्ट उदाहरण है।"
    },
    {
        question: "प्रश्न 30. डार्विन के सिद्धांत में 'प्राकृतिक चयन' की भूमिका क्या है?",
        answers: shuffle([
            { text: "यह विभिन्नताएँ उत्पन्न करता है", correct: false },
            { text: "यह एक चयनात्मक शक्ति के रूप में कार्य करता है जो अनुकूल विभिन्नताओं को चुनता है", correct: true },
            { text: "यह जीवों को पर्यावरण के अनुकूल होने के लिए मजबूर करता है", correct: false },
            { text: "यह विकास की दिशा निर्धारित नहीं करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्राकृतिक चयन स्वयं विभिन्नताएँ पैदा नहीं करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह केवल पहले से मौजूद विभिन्नताओं में से उनका चयन करता है जो किसी दिए गए वातावरण में जीवित रहने और प्रजनन के लिए सबसे अधिक फायदेमंद होती हैं।"
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