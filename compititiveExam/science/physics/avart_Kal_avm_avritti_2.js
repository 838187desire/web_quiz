const questions = [
    {
        topHeading: "आवर्त काल और आवृत्ति पर आधारित 50 MCQs,part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. यदि किसी लोलक का आयाम बहुत बढ़ा दिया जाए, तो उसका आवर्त काल...",
        answers: shuffle([
            { text: "थोड़ा बढ़ जाएगा।", correct: true },
            { text: "थोड़ा घट जाएगा।", correct: false },
            { text: "अपरिवर्तित रहेगा।", correct: false },
            { text: "बहुत अधिक घट जाएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सरल लोलक का आवर्त काल केवल छोटे आयामों के लिए आयाम से स्वतंत्र होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> बड़े आयामों के लिए, आवर्त काल थोड़ा बढ़ जाता है।"
    },
    {
        question: "प्रश्न 2. तरंग की कला (Phase) क्या दर्शाती है?",
        answers: shuffle([
            { text: "तरंग की ऊर्जा", correct: false },
            { text: "तरंग की चाल", correct: false },
            { text: "किसी क्षण पर कण की दोलन की स्थिति", correct: true },
            { text: "तरंग की आवृत्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कला यह बताती है कि एक आवर्ती चक्र में कोई बिंदु कहाँ पर स्थित है।"
    },
    {
        question: "प्रश्न 3. कोणीय आवृत्ति का मात्रक क्या है?",
        answers: shuffle([
            { text: "हर्ट्ज", correct: false },
            { text: "सेकंड", correct: false },
            { text: "रेडियन प्रति सेकंड", correct: true },
            { text: "मीटर प्रति सेकंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोणीय आवृत्ति (ω) को रेडियन प्रति सेकंड में मापा जाता है।"
    },
    {
        question: "प्रश्न 4. 'कालदिश' (Isochronous) दोलन का क्या अर्थ है?",
        answers: shuffle([
            { text: "वह दोलन जिसका आवर्त काल आयाम पर निर्भर करता है।", correct: false },
            { text: "वह दोलन जिसका आवर्त काल आयाम पर निर्भर नहीं करता है।", correct: true },
            { text: "वह दोलन जिसका आयाम स्थिर रहता है।", correct: false },
            { text: "वह दोलन जिसकी आवृत्ति बदलती रहती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सरल आवर्त गति एक कालदिश दोलन है (छोटे आयामों के लिए), क्योंकि इसका आवर्त काल स्थिर रहता है चाहे आयाम कुछ भी हो।"
    },
    {
        question: "प्रश्न 5. यदि एक सरल लोलक एक ऐसी लिफ्ट में है जो नीचे की ओर त्वरित हो रही है, तो उसका आवर्त काल...",
        answers: shuffle([
            { text: "बढ़ जाएगा।", correct: true },
            { text: "घट जाएगा।", correct: false },
            { text: "अपरिवर्तित रहेगा।", correct: false },
            { text: "शून्य हो जाएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नीचे की ओर त्वरित होने पर, प्रभावी गुरुत्वीय त्वरण (geff​=g−a) घट जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रभावी 'g' घटने से आवर्त काल बढ़ जाएगा।"
    },
    {
        question: "प्रश्न 6. विद्युतचुंबकीय तरंगों (जैसे प्रकाश) का वेग...",
        answers: shuffle([
            { text: "आवृत्ति पर निर्भर करता है।", correct: false },
            { text: "तरंगदैर्घ्य पर निर्भर करता है।", correct: false },
            { text: "माध्यम पर निर्भर करता है।", correct: true },
            { text: "हमेशा स्थिर रहता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निर्वात में सभी विद्युतचुंबकीय तरंगों का वेग स्थिर होता है, लेकिन किसी भौतिक माध्यम (जैसे कांच या पानी) में प्रवेश करने पर उनका वेग बदल जाता है।"
    },
    {
        question: "प्रश्न 7. कौन सा कथन आवृत्ति के लिए सही है?",
        answers: shuffle([
            { text: "यह समय का माप है।", correct: false },
            { text: "यह दूरी का माप है।", correct: false },
            { text: "यह प्रति इकाई समय में होने वाली घटनाओं की संख्या है।", correct: true },
            { text: "यह एक सदिश राशि है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह आवृत्ति की सबसे सामान्य और सटीक परिभाषा है।"
    },
    {
        question: "प्रश्न 8. दोलनी गति का अध्ययन क्या कहलाता है?",
        answers: shuffle([
            { text: "प्रकाशिकी", correct: false },
            { text: "ध्वनिकी", correct: false },
            { text: "कंपिकी (Vibrations/Oscillations)", correct: true },
            { text: "ऊष्मागतिकी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भौतिकी की वह शाखा जो कंपन और दोलनों का अध्ययन करती है, कंपिकी कहलाती है।"
    },
    {
        question: "प्रश्न 9. एक चलती हुई कार के पिस्टन की गति होती है:",
        answers: shuffle([
            { text: "सरल आवर्त गति", correct: false },
            { text: "वृत्तीय गति", correct: false },
            { text: "आवर्ती लेकिन सरल आवर्त गति नहीं", correct: true },
            { text: "अनावर्ती गति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पिस्टन की गति ऊपर-नीचे होती है और खुद को दोहराती है, इसलिए यह आवर्ती है।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन इस पर लगने वाला बल विस्थापन के सीधे समानुपाती नहीं होता, इसलिए यह सरल आवर्त गति नहीं है।"
    },
    {
        question: "प्रश्न 10. एक खोखले गोलक से बने लोलक को पारे से भर दिया जाता है। इसका आवर्त काल...",
        answers: shuffle([
            { text: "बढ़ जाएगा।", correct: false },
            { text: "घट जाएगा।", correct: false },
            { text: "अपरिवर्तित रहेगा।", correct: true },
            { text: "पहले घटेगा फिर बढ़ेगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि खोखला गोलक और पारा दोनों सममित हैं, निकाय का गुरुत्व केंद्र अभी भी गोले के केंद्र में ही रहेगा।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए प्रभावी लंबाई और आवर्त काल अपरिवर्तित रहेंगे।"
    },
    {
        question: "प्रश्न 11. किसी तरंग की आवृत्ति बढ़ने पर उसकी ऊर्जा...",
        answers: shuffle([
            { text: "बढ़ती है।", correct: true },
            { text: "घटती है।", correct: false },
            { text: "अपरिवर्तित रहती है।", correct: false },
            { text: "शून्य हो जाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्वांटम भौतिकी के अनुसार, एक तरंग की ऊर्जा (जैसे एक फोटॉन की ऊर्जा) उसकी आवृत्ति के सीधे समानुपाती होती है (E=hf)।"
    },
    {
        question: "प्रश्न 12. \"अवधि\" शब्द का निकटतम पर्याय है:",
        answers: shuffle([
            { text: "आवृत्ति", correct: false },
            { text: "आयाम", correct: false },
            { text: "आवर्त काल", correct: true },
            { text: "वेग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवधि और आवर्त काल दोनों ही एक चक्र को पूरा करने में लगने वाले समय को संदर्भित करते हैं।"
    },
    {
        question: "प्रश्न 13. यदि किसी कण की गति का समीकरण x=Acos(ωt) है, तो t=0 पर कण कहाँ है?",
        answers: shuffle([
            { text: "माध्य स्थिति पर", correct: false },
            { text: "धनात्मक चरम स्थिति पर", correct: true },
            { text: "ऋणात्मक चरम स्थिति पर", correct: false },
            { text: "माध्य और चरम स्थिति के बीच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> t=0 रखने पर, cos(0)=1, इसलिए x=A, जो कि धनात्मक चरम स्थिति है।"
    },
    {
        question: "प्रश्न 14. एक लिफ्ट जो एकसमान वेग से नीचे जा रही है, उसमें लोलक का आवर्त काल...",
        answers: shuffle([
            { text: "बढ़ जाएगा।", correct: false },
            { text: "घट जाएगा।", correct: false },
            { text: "अपरिवर्तित रहेगा।", correct: true },
            { text: "अनंत हो जाएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एकसमान वेग का अर्थ है शून्य त्वरण।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए प्रभावी 'g' नहीं बदलता है और आवर्त काल अपरिवर्तित रहता है।"
    },
    {
        question: "प्रश्न 15. एक चक्र प्रति सेकंड किसके बराबर है?",
        answers: shuffle([
            { text: "1 मीटर", correct: false },
            { text: "1 न्यूटन", correct: false },
            { text: "1 जूल", correct: false },
            { text: "1 हर्ट्ज", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह हर्ट्ज की परिभाषा है।"
    },
    {
        question: "प्रश्न 16. मुक्त दोलन (Free Oscillation) क्या है?",
        answers: shuffle([
            { text: "जब कोई वस्तु बाहरी बल के प्रभाव में दोलन करती है।", correct: false },
            { text: "जब कोई वस्तु अपनी स्वाभाविक आवृत्ति पर बिना किसी बाहरी बल के दोलन करती है।", correct: true },
            { text: "जब दोलन का आयाम अनंत हो जाता है।", correct: false },
            { text: "जब दोलन रुक जाता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसमें वस्तु को एक बार विस्थापित करके छोड़ दिया जाता है और वह अपनी प्राकृतिक आवृत्ति से कंपन करती है।"
    },
    {
        question: "प्रश्न 17. किसी लोलक की लंबाई आधी कर देने पर उसकी आवृत्ति पर क्या प्रभाव पड़ेगा?",
        answers: shuffle([
            { text: "आधी हो जाएगी।", correct: false },
            { text: "दोगुनी हो जाएगी।", correct: false },
            { text: "√2 गुनी हो जाएगी।", correct: true },
            { text: "1/√2 गुनी हो जाएगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि f∝1/T और T∝√L, इसलिए f∝1/√L।<br><br><i class='fa-solid fa-angles-right icon'></i> लंबाई आधी (L/2) करने पर आवृत्ति 1/√1/2 = √2 गुनी हो जाएगी।"
    },
    {
        question: "प्रश्न 18. किसी रेडियो स्टेशन की आवृत्ति 'मेगाहर्ट्ज' में व्यक्त की जाती है। 'मेगा' का क्या अर्थ है?",
        answers: shuffle([
            { text: "दस लाख (10⁶)", correct: true },
            { text: "एक हजार (10³)", correct: false },
            { text: "एक अरब (10⁹)", correct: false },
            { text: "सौ (10²)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मेगा' एक उपसर्ग है जिसका अर्थ है दस लाख।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः 1 मेगाहर्ट्ज = 10,00,000 हर्ट्ज।"
    },
    {
        question: "प्रश्न 19. यदि एक दोलक का आवर्त काल 0.1 सेकंड है, तो उसकी आवृत्ति क्या होगी?",
        answers: shuffle([
            { text: "1 हर्ट्ज", correct: false },
            { text: "10 हर्ट्ज", correct: true },
            { text: "0.1 हर्ट्ज", correct: false },
            { text: "100 हर्ट्ज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> f=1/T=1/0.1=10 हर्ट्ज।"
    },
    {
        question: "प्रश्न 20. लाल रंग के प्रकाश की आवृत्ति नीले रंग के प्रकाश की आवृत्ति से...",
        answers: shuffle([
            { text: "अधिक होती है।", correct: false },
            { text: "कम होती है।", correct: true },
            { text: "बराबर होती है।", correct: false },
            { text: "दोगुनी होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दृश्यमान स्पेक्ट्रम में, बैंगनी/नीले प्रकाश की आवृत्ति उच्चतम और लाल प्रकाश की आवृत्ति निम्नतम होती है।"
    },
    {
        question: "प्रश्न 21. किसी दोलन करते निकाय की स्थितिज ऊर्जा न्यूनतम कहाँ होती है?",
        answers: shuffle([
            { text: "a) चरम स्थिति पर", correct: false },
            { text: "b) माध्य स्थिति पर", correct: true },
            { text: "c) दोनों के बीच में", correct: false },
            { text: "d) हर जगह बराबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माध्य स्थिति (साम्यावस्था) को शून्य विस्थापन का बिंदु माना जाता है, जहाँ स्थितिज ऊर्जा न्यूनतम (आमतौर पर शून्य) होती है।"
    },
    {
        question: "प्रश्न 22. एक भौतिक लोलक (Physical Pendulum) का आवर्त काल किस पर निर्भर करता है?",
        answers: shuffle([
            { text: "केवल लंबाई पर", correct: false },
            { text: "केवल द्रव्यमान पर", correct: false },
            { text: "जड़त्व आघूर्ण और द्रव्यमान पर", correct: true },
            { text: "केवल आयाम पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सरल लोलक के विपरीत, एक भौतिक लोलक (जो कोई भी दृढ़ पिंड हो सकता है) का आवर्त काल उसके जड़त्व आघूर्ण, कुल द्रव्यमान और गुरुत्व केंद्र की स्थिति पर निर्भर करता है।"
    },
    {
        question: "प्रश्न 23. किसी सरल लोलक की आवृत्ति किस पर निर्भर नहीं करती है?",
        answers: shuffle([
            { text: "लंबाई पर", correct: false },
            { text: "गुरुत्वीय त्वरण पर", correct: false },
            { text: "आयाम पर (छोटे दोलनों के लिए)", correct: true },
            { text: "स्थान पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> छोटे कोणों के लिए, एक सरल लोलक की आवृत्ति या आवर्त काल उसके दोलन के आयाम से लगभग स्वतंत्र होता है।"
    },
    {
        question: "प्रश्न 24. एक सेकंड में 1000 कंपन करने वाली वस्तु की आवृत्ति क्या है?",
        answers: shuffle([
            { text: "1 हर्ट्ज", correct: false },
            { text: "100 हर्ट्ज", correct: false },
            { text: "1 किलोहर्ट्ज", correct: true },
            { text: "1 मेगाहर्ट्ज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1000 कंपन प्रति सेकंड का मतलब 1000 हर्ट्ज है, जो 1 किलोहर्ट्ज के बराबर है।"
    },
    {
        question: "प्रश्न 25. किसी सरल आवर्त गति में, गतिज ऊर्जा के आवर्ती परिवर्तन की आवृत्ति, विस्थापन की आवृत्ति से...",
        answers: shuffle([
            { text: "आधी होती है।", correct: false },
            { text: "बराबर होती है।", correct: false },
            { text: "दोगुनी होती है।", correct: true },
            { text: "स्वतंत्र होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक पूर्ण विस्थापन चक्र में, वस्तु दो बार अपनी अधिकतम गति तक पहुँचती है, इसलिए गतिज ऊर्जा का चक्र विस्थापन चक्र से दोगुनी आवृत्ति पर होता है।"
    },
    {
        question: "प्रश्न 26. एक आवर्ती घटना जो बहुत कम समय में होती है, उसकी...",
        answers: shuffle([
            { text: "आवृत्ति कम और आवर्त काल अधिक होता है।", correct: false },
            { text: "आवृत्ति अधिक और आवर्त काल कम होता है।", correct: true },
            { text: "आवृत्ति और आवर्त काल दोनों कम होते हैं।", correct: false },
            { text: "आवृत्ति और आवर्त काल दोनों अधिक होते हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कम समय में होने का मतलब है छोटा आवर्त काल, और चूँकि आवृत्ति आवर्त काल का व्युत्क्रम है, इसलिए आवृत्ति अधिक होगी।"
    },
    {
        question: "प्रश्न 27. क्या घूर्णन गति हमेशा आवर्ती होती है?",
        answers: shuffle([
            { text: "हाँ, यदि कोणीय वेग स्थिर हो।", correct: true },
            { text: "नहीं, कभी नहीं।", correct: false },
            { text: "केवल यदि त्रिज्या बड़ी हो।", correct: false },
            { text: "केवल यदि द्रव्यमान कम हो।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि कोई वस्तु स्थिर कोणीय वेग से घूम रही है, तो वह एक निश्चित समय (आवर्त काल) में एक चक्कर पूरा करती है, जो एक आवर्ती गति है।"
    },
    {
        question: "प्रश्न 28. एक कम्पास की सुई, जब विस्थापित होती है, तो वह दोलन करती है। इसका आवर्त काल किस पर निर्भर करता है?",
        answers: shuffle([
            { text: "सुई के द्रव्यमान पर", correct: false },
            { text: "पृथ्वी के चुंबकीय क्षेत्र की प्रबलता पर", correct: true },
            { text: "सुई के रंग पर", correct: false },
            { text: "आसपास के तापमान पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कम्पास की सुई एक चुंबकीय द्विध्रुव है।<br><br><i class='fa-solid fa-angles-right icon'></i> उसका आवर्त काल उसके चुंबकीय आघूर्ण, जड़त्व आघूर्ण और बाहरी चुंबकीय क्षेत्र (पृथ्वी का) की प्रबलता पर निर्भर करता है।"
    },
    {
        question: "प्रश्न 29. यदि एक स्प्रिंग से लटका द्रव्यमान m है और उसका आवर्त काल T है। यदि 3m द्रव्यमान और जोड़ दिया जाए, तो नया आवर्त काल क्या होगा?",
        answers: shuffle([
            { text: "T", correct: false },
            { text: "2T", correct: true },
            { text: "3T", correct: false },
            { text: "4T", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुल द्रव्यमान m+3m=4m हो जाएगा।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि T∝√m, नया आवर्त काल √4=2 गुना, यानी 2T हो जाएगा।"
    },
    {
        question: "प्रश्न 30. अवमंदित दोलनों में, आवृत्ति मुक्त दोलनों की तुलना में...",
        answers: shuffle([
            { text: "थोड़ी कम हो जाती है।", correct: true },
            { text: "थोड़ी बढ़ जाती है।", correct: false },
            { text: "अपरिवर्तित रहती है।", correct: false },
            { text: "बहुत अधिक बढ़ जाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवमंदन का मुख्य प्रभाव आयाम पर होता है, लेकिन यह दोलन की आवृत्ति को भी थोड़ा कम कर देता है।"
    },
    {
        question: "प्रश्न 31. ध्वनि का तारत्व उसकी आवृत्ति से कैसे संबंधित है?",
        answers: shuffle([
            { text: "तारत्व आवृत्ति के व्युत्क्रमानुपाती है।", correct: false },
            { text: "तारत्व आवृत्ति के समानुपाती है।", correct: true },
            { text: "तारत्व आवृत्ति पर निर्भर नहीं करता है।", correct: false },
            { text: "तारत्व आवृत्ति के वर्ग के समानुपाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उच्च आवृत्ति का अर्थ है उच्च तारत्व (तीखी आवाज) और कम आवृत्ति का अर्थ है कम तारत्व (भारी आवाज)।"
    },
    {
        question: "प्रश्न 32. किसी दोलन के लिए, 'स्वाभाविक आवृत्ति' शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "वह आवृत्ति जिस पर उसे कृत्रिम रूप से चलाया जाता है।", correct: false },
            { text: "वह आवृत्ति जिस पर वह बिना किसी बाहरी प्रभाव के कंपन करता है।", correct: true },
            { text: "ध्वनि की आवृत्ति।", correct: false },
            { text: "प्रकाश की आवृत्ति।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह किसी भी प्रणाली का एक अंतर्निहित गुण है, जो उसके भौतिक मापदंडों (जैसे लंबाई, द्रव्यमान, कठोरता) पर निर्भर करता है।"
    },
    {
        question: "प्रश्न 33. एक आवर्ती गति जो बहुत कम समय में होती है, उसकी...",
        answers: shuffle([
            { text: "आवृत्ति कम और आवर्त काल अधिक होता है।", correct: false },
            { text: "आवृत्ति अधिक और आवर्त काल कम होता है।", correct: true },
            { text: "आवृत्ति और आवर्त काल दोनों कम होते हैं।", correct: false },
            { text: "आवृत्ति और आवर्त काल दोनों अधिक होते हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कम समय में होने का मतलब है छोटा आवर्त काल, और चूँकि आवृत्ति आवर्त काल का व्युत्क्रम है, इसलिए आवृत्ति अधिक होगी।"
    },
    {
        question: "प्रश्न 34. कौन सी घटना आवृत्ति की अवधारणा का उपयोग नहीं करती है?",
        answers: shuffle([
            { text: "ध्वनि", correct: false },
            { text: "प्रकाश", correct: false },
            { text: "एकसमान वेग से सीधी रेखा में चलती कार", correct: true },
            { text: "एक लोलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एकसमान रैखिक गति में कोई दोहराव या चक्र नहीं होता है, इसलिए इसमें आवृत्ति या आवर्त काल की अवधारणा लागू नहीं होती है।"
    },
    {
        question: "प्रश्न 35. एक रेडियो रिसीवर को किसी विशेष स्टेशन पर 'ट्यून' करने में, हम वास्तव में क्या बदलते हैं?",
        answers: shuffle([
            { text: "रेडियो का आयतन", correct: false },
            { text: "रेडियो के स्पीकर का आकार", correct: false },
            { text: "रिसीवर सर्किट की स्वाभाविक आवृत्ति", correct: true },
            { text: "रेडियो स्टेशन की आवृत्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हम सर्किट के संधारित्र या प्रेरक को समायोजित करके उसकी स्वाभाविक आवृत्ति को वांछित रेडियो स्टेशन की आवृत्ति के बराबर करते हैं, ताकि अनुनाद हो सके।"
    },
    {
        question: "प्रश्न 36. एक दोलन करते हुए निकाय का आवर्त काल 0.05 सेकंड है। इसकी कोणीय आवृत्ति क्या होगी?",
        answers: shuffle([
            { text: "20π रेडियन/सेकंड", correct: false },
            { text: "40π रेडियन/सेकंड", correct: true },
            { text: "10π रेडियन/सेकंड", correct: false },
            { text: "0.05π रेडियन/सेकंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पहले आवृत्ति ज्ञात करें: f=1/T=1/0.05=20 हर्ट्ज।<br><br><i class='fa-solid fa-angles-right icon'></i> फिर कोणीय आवृत्ति: ω=2πf=2π(20)=40π रेडियन/सेकंड।"
    },
    {
        question: "प्रश्न 37. किसी सरल लोलक की आवृत्ति किस पर निर्भर करती है?",
        answers: shuffle([
            { text: "केवल गोलक के द्रव्यमान पर", correct: false },
            { text: "केवल लोलक की लंबाई पर", correct: false },
            { text: "लोलक की लंबाई और गुरुत्वीय त्वरण पर", correct: true },
            { text: "केवल दोलन के आयाम पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि आवृत्ति आवर्त काल का व्युत्क्रम है, और आवर्त काल लंबाई और 'g' पर निर्भर करता है, इसलिए आवृत्ति भी इन्हीं दो कारकों पर निर्भर करती है।"
    },
    {
        question: "प्रश्न 38. भूकंप के दौरान उत्पन्न होने वाली प्राथमिक तरंगें (P-waves) किस प्रकार की होती हैं?",
        answers: shuffle([
            { text: "अनुप्रस्थ", correct: false },
            { text: "अनुदैर्ध्य", correct: true },
            { text: "विद्युतचुंबकीय", correct: false },
            { text: "स्थिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> P-तरंगें ध्वनि तरंगों की तरह अनुदैर्ध्य होती हैं, जिनमें कणों का कंपन तरंग की दिशा में होता है।"
    },
    {
        question: "प्रश्न 39. एक आवर्ती गति का आयाम क्या दर्शाता है?",
        answers: shuffle([
            { text: "गति की दर", correct: false },
            { text: "एक चक्र का समय", correct: false },
            { text: "माध्य स्थिति से अधिकतम विस्थापन", correct: true },
            { text: "गति की दिशा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आयाम दोलन के आकार या विस्तार का माप है।"
    },
    {
        question: "प्रश्न 40. क्या आवर्त काल ऋणात्मक हो सकता है?",
        answers: shuffle([
            { text: "हाँ", correct: false },
            { text: "नहीं", correct: true },
            { text: "केवल उच्च तापमान पर", correct: false },
            { text: "केवल निर्वात में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवर्त काल समय का एक माप है, और समय हमेशा एक धनात्मक राशि होती है।"
    },
    {
        question: "प्रश्न 41. आवर्त काल की अवधारणा किस प्रकार की गति के लिए प्रासंगिक है?",
        answers: shuffle([
            { text: "केवल रैखिक गति", correct: false },
            { text: "केवल घूर्णी गति", correct: false },
            { text: "आवर्ती गति", correct: true },
            { text: "किसी भी प्रकार की गति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवर्त काल और आवृत्ति केवल उन गतियों के लिए परिभाषित हैं जो स्वयं को दोहराती हैं।"
    },
    {
        question: "प्रश्न 42. एक स्प्रिंग से दो द्रव्यमान m₁ और m₂ लटकाए जाते हैं और उनके आवर्त काल क्रमशः T₁ और T₂ हैं। क्या सही है?",
        answers: shuffle([
            { text: "यदि m₁>m₂, तो T₁>T₂", correct: true },
            { text: "यदि m₁>m₂, तो T₁<T₂", correct: false },
            { text: "T₁ हमेशा T₂ के बराबर होता है।", correct: false },
            { text: "यह स्प्रिंग पर निर्भर करता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि T∝√m, अधिक द्रव्यमान वाले निकाय का आवर्त काल भी अधिक होगा।"
    },
    {
        question: "प्रश्न 43. किसी कण की सरल आवर्त गति में, जब वह अपनी माध्य स्थिति पर होता है, तो उसकी आवृत्ति...",
        answers: shuffle([
            { text: "अधिकतम होती है।", correct: false },
            { text: "न्यूनतम होती है।", correct: false },
            { text: "शून्य होती है।", correct: false },
            { text: "स्थिर रहती है।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक सरल आवर्त गति की आवृत्ति एक स्थिर मान है जो गति के दौरान नहीं बदलता है।"
    },
    {
        question: "प्रश्न 44. एक कंपमान गिटार का तार ध्वनि उत्पन्न करता है। तार की आवृत्ति कम करने के लिए क्या किया जा सकता है?",
        answers: shuffle([
            { text: "तार को और कसना।", correct: false },
            { text: "तार की लंबाई कम करना।", correct: false },
            { text: "तार का तनाव कम करना।", correct: true },
            { text: "हल्के तार का उपयोग करना।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवृत्ति तनाव के वर्गमूल के समानुपाती होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> तनाव कम करने से आवृत्ति कम हो जाएगी (आवाज भारी हो जाएगी)।"
    },
    {
        question: "प्रश्न 45. एक पूर्णतः अप्रत्यास्थ टक्कर के बाद, वस्तुओं की गति...",
        answers: shuffle([
            { text: "आवर्ती होती है।", correct: false },
            { text: "दोलनी होती है।", correct: false },
            { text: "आवर्ती नहीं होती है।", correct: true },
            { text: "सरल आवर्त गति होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वस्तुएं एक साथ चिपक जाती हैं और एक सामान्य वेग से चलती रहती हैं;<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें कोई दोहराव नहीं होता है।"
    },
    {
        question: "प्रश्न 46. एक तरंग स्पंद (Wave Pulse) की...",
        answers: shuffle([
            { text: "एक निश्चित आवृत्ति होती है।", correct: false },
            { text: "एक निश्चित आवर्त काल होता है।", correct: false },
            { text: "कोई निश्चित आवृत्ति या आवर्त काल नहीं होता है।", correct: true },
            { text: "आवृत्ति अनंत होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक स्पंद एक अल्पकालिक विक्षोभ है, यह एक सतत, आवर्ती तरंग नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, इसकी कोई एक परिभाषित आवृत्ति नहीं होती है।"
    },
    {
        question: "प्रश्न 47. हृदय की धड़कन किस प्रकार की गति है?",
        answers: shuffle([
            { text: "सरल आवर्त गति", correct: false },
            { text: "आवर्ती लेकिन सरल आवर्त गति नहीं", correct: true },
            { text: "अनावर्ती", correct: false },
            { text: "एकसमान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हृदय की धड़कन एक नियमित अंतराल पर दोहराई जाती है, इसलिए यह आवर्ती है।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन यह सरल आवर्त गति के समीकरण का पालन नहीं करती है।"
    },
    {
        question: "प्रश्न 48. एक आवर्ती गति को \"दोलन\" कब कहा जाता है?",
        answers: shuffle([
            { text: "जब यह एक वृत्त में हो।", correct: false },
            { text: "जब यह एक निश्चित बिंदु के आगे-पीछे हो।", correct: true },
            { text: "जब इसका आयाम बड़ा हो।", correct: false },
            { text: "जब इसकी आवृत्ति अधिक हो।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दोलन गति आवर्ती गति का एक विशेष प्रकार है जिसमें गति एक माध्य या साम्यावस्था बिंदु के इर्द-गिर्द होती है।"
    },
    {
        question: "प्रश्न 49. आवृत्ति की विमा क्या है?",
        answers: shuffle([
            { text: "[T]", correct: false },
            { text: "[T⁻¹]", correct: true },
            { text: "[L]", correct: false },
            { text: "[M]", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि आवृत्ति = 1 / आवर्त काल, इसकी विमा समय की विमा का व्युत्क्रम, अर्थात [T⁻¹] है।"
    },
    {
        question: "प्रश्न 50. दो समान स्प्रिंगों को श्रेणीक्रम में जोड़ने पर, संयोजन का आवर्त काल एक स्प्रिंग की तुलना में...",
        answers: shuffle([
            { text: "घट जाएगा।", correct: false },
            { text: "बढ़ जाएगा।", correct: true },
            { text: "समान रहेगा।", correct: false },
            { text: "आधा हो जाएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्रेणीक्रम में, प्रभावी स्प्रिंग नियतांक (k) कम हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि T∝1/√k, आवर्त काल बढ़ जाएगा।"
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