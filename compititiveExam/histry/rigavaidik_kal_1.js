const questions = [
    {
        topHeading: "ऋग्वैदिक काल पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. ऋग्वेद में कुल कितने मंडल हैं?",
        answers: shuffle([
            { text: "8", correct: false },
            { text: "10", correct: true },
            { text: "12", correct: false },
            { text: "15", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में कुल <b>10 मंडल</b> हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इनमें से मंडल 2 से 7 तक को सबसे प्राचीन माना जाता है, जिन्हें '<b>गोत्र मंडल</b>' या '<b>वंश मंडल</b>' भी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> मंडल 1 और 10 को सबसे बाद में जोड़ा गया माना जाता है।"
    },
    {
        question: "प्रश्न 2. ऋग्वैदिक काल में '<b>पुरंदर</b>' शब्द का प्रयोग किस देवता के लिए किया गया है?",
        answers: shuffle([
            { text: "अग्नि", correct: false },
            { text: "वरुण", correct: false },
            { text: "इंद्र", correct: true },
            { text: "सोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में <b>इंद्र</b> को '<b>पुरंदर</b>' कहा गया है, जिसका अर्थ है '<b>किलों को तोड़ने वाला</b>'।<br><br><i class='fa-solid fa-angles-right icon'></i> इंद्र ऋग्वैदिक आर्यों के सबसे महत्वपूर्ण और पूज्य देवता थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उन पर लगभग 250 सूक्त हैं।"
    },
    {
        question: "प्रश्न 3. ऋग्वैदिक धर्म की मुख्य विशेषता क्या थी?",
        answers: shuffle([
            { text: "एकेश्वरवादी", correct: false },
            { text: "बहुदेववादी", correct: true },
            { text: "अद्वैतवादी", correct: false },
            { text: "नास्तिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक आर्य अनेक देवताओं की पूजा करते थे, जिनमें इंद्र, अग्नि, वरुण, सूर्य आदि प्रमुख थे, इसलिए उनका धर्म <b>बहुदेववादी</b> था।"
    },
    {
        question: "प्रश्न 4. ऋग्वैदिक आर्यों की मुख्य भाषा क्या थी?",
        answers: shuffle([
            { text: "पालि", correct: false },
            { text: "प्राकृत", correct: false },
            { text: "संस्कृत", correct: true },
            { text: "द्रविड़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक आर्यों की मुख्य भाषा <b>संस्कृत</b> थी।<br><br><i class='fa-solid fa-angles-right icon'></i> ऋग्वेद, जो उनका सबसे प्राचीन ग्रंथ है, <b>वैदिक संस्कृत</b> में लिखा गया है।"
    },
    {
        question: "प्रश्न 5. ऋग्वेद में सबसे पवित्र नदी किसे माना गया है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: false },
            { text: "सरस्वती", correct: true },
            { text: "सिंधु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में <b>सरस्वती</b> नदी को सबसे पवित्र माना गया है और इसे '<b>नदीतमा</b>' (नदियों में श्रेष्ठ) कहा गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> गंगा और यमुना का उल्लेख ऋग्वेद में केवल एक बार हुआ है।"
    },
    {
        question: "प्रश्न 6. <b>दशराज्ञ युद्ध</b> (दस राजाओं का युद्ध) किस नदी के तट पर हुआ था?",
        answers: shuffle([
            { text: "सिंधु", correct: false },
            { text: "सरस्वती", correct: false },
            { text: "परुष्णी", correct: true },
            { text: "वितस्ता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दशराज्ञ युद्ध <b>परुष्णी</b> नदी के तट पर हुआ था, जिसे आधुनिक काल में <b>रावी</b> नदी के नाम से जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह युद्ध भरत वंश के राजा <b>सुदास</b> और दस अन्य राजाओं के संघ के बीच हुआ था, जिसमें सुदास की विजय हुई थी।"
    },
    {
        question: "प्रश्न 7. ऋग्वैदिक काल में समाज का स्वरूप कैसा था?",
        answers: shuffle([
            { text: "मातृसत्तात्मक", correct: false },
            { text: "पितृसत्तात्मक", correct: true },
            { text: "दोनों का मिश्रण", correct: false },
            { text: "कबीलाई प्रमुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक समाज <b>पितृसत्तात्मक</b> था, जहाँ परिवार का मुखिया पिता होता था, जिसे '<b>कुलप</b>' कहा जाता था।"
    },
    {
        question: "प्रश्न 8. ऋग्वेद का कौन सा मंडल पूर्णतः '<b>सोम</b>' देवता को समर्पित है?",
        answers: shuffle([
            { text: "सातवाँ मंडल", correct: false },
            { text: "आठवाँ मंडल", correct: false },
            { text: "नौवाँ मंडल", correct: true },
            { text: "दसवाँ मंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद का <b>नौवाँ मंडल</b> पूरी तरह से <b>सोम देवता</b> को समर्पित है।<br><br><i class='fa-solid fa-angles-right icon'></i> सोम एक पौधे का रस था जिसे देवता पीते थे और यह एक महत्वपूर्ण पेय माना जाता था।"
    },
    {
        question: "प्रश्न 9. ऋग्वैदिक काल में '<b>अघन्य</b>' (न मारने योग्य) शब्द का प्रयोग किसके लिए किया गया है?",
        answers: shuffle([
            { text: "ब्राह्मण", correct: false },
            { text: "स्त्री", correct: false },
            { text: "गाय", correct: true },
            { text: "राजा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक काल में <b>गाय</b> को '<b>अघन्य</b>' कहा गया है, जिसका अर्थ है '<b>न मारने योग्य</b>'।<br><br><i class='fa-solid fa-angles-right icon'></i> गाय संपत्ति का मुख्य स्रोत और विनिमय का माध्यम थी।"
    },
    {
        question: "प्रश्न 10. प्रसिद्ध '<b>गायत्री मंत्र</b>' किस वेद में है?",
        answers: shuffle([
            { text: "यजुर्वेद", correct: false },
            { text: "अथर्ववेद", correct: false },
            { text: "सामवेद", correct: false },
            { text: "ऋग्वेद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रसिद्ध <b>गायत्री मंत्र</b> ऋग्वेद के <b>तीसरे मंडल</b> में है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके रचयिता <b>विश्वामित्र</b> हैं और यह सूर्य देवता (<b>सवितृ</b>) को समर्पित है।"
    },
    {
        question: "प्रश्न 11. ऋग्वैदिक काल में राजा की सहायता के लिए सबसे महत्वपूर्ण अधिकारी कौन होता था?",
        answers: shuffle([
            { text: "सेनानी", correct: false },
            { text: "पुरोहित", correct: true },
            { text: "ग्रामणी", correct: false },
            { text: "सूत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक काल में <b>पुरोहित</b> राजा का प्रमुख सलाहकार और सहयोगी होता था।<br><br><i class='fa-solid fa-angles-right icon'></i> वह धार्मिक अनुष्ठान करने के साथ-साथ राजा को युद्ध में भी सलाह देता था।"
    },
    {
        question: "प्रश्न 12. '<b>वर्ण</b>' शब्द का सर्वप्रथम उल्लेख कहाँ मिलता है?",
        answers: shuffle([
            { text: "उपनिषद", correct: false },
            { text: "यजुर्वेद", correct: false },
            { text: "ऋग्वेद", correct: true },
            { text: "सामवेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>वर्ण</b>' शब्द का सबसे पहला उल्लेख <b>ऋग्वेद के दसवें मंडल के 'पुरुषसूक्त'</b> में मिलता है, जहाँ चार वर्णों (ब्राह्मण, क्षत्रिय, वैश्य, शूद्र) की उत्पत्ति एक विराट पुरुष के विभिन्न अंगों से बताई गई है।"
    },
    {
        question: "प्रश्न 13. ऋग्वैदिक काल में '<b>निष्क</b>' किस अंग का आभूषण था?",
        answers: shuffle([
            { text: "कान", correct: false },
            { text: "गला", correct: true },
            { text: "बाहु", correct: false },
            { text: "कलाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>निष्क</b>' प्रारंभ में <b>गले में पहना जाने वाला एक हार</b> था, लेकिन बाद में यह <b>विनिमय के माध्यम</b> के रूप में भी प्रयोग होने लगा और सिक्के का रूप ले लिया।"
    },
    {
        question: "प्रश्न 14. ऋग्वैदिक काल की सबसे छोटी प्रशासनिक इकाई क्या थी?",
        answers: shuffle([
            { text: "ग्राम", correct: false },
            { text: "विश", correct: false },
            { text: "जन", correct: false },
            { text: "कुल या परिवार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक काल में प्रशासन की सबसे छोटी इकाई '<b>कुल</b>' या '<b>परिवार</b>' थी, जिसका मुखिया '<b>कुलप</b>' कहलाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> कई कुल मिलकर 'ग्राम' बनाते थे।"
    },
    {
        question: "प्रश्न 15. ऋग्वैदिक काल के लोगों का मुख्य व्यवसाय क्या था?",
        answers: shuffle([
            { text: "कृषि", correct: false },
            { text: "पशुपालन", correct: true },
            { text: "शिकार", correct: false },
            { text: "व्यापार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक आर्यों का प्रारंभिक जीवन अस्थायी और कबीलाई था, इसलिए उनका मुख्य व्यवसाय <b>पशुपालन</b> था।<br><br><i class='fa-solid fa-angles-right icon'></i> कृषि का महत्व गौण था।"
    },
    {
        question: "प्रश्न 16. '<b>सभा</b>' और '<b>समिति</b>' प्रजापति की दो पुत्रियाँ हैं, इसका उल्लेख किस वेद में है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "यजुर्वेद", correct: false },
            { text: "सामवेद", correct: false },
            { text: "अथर्ववेद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अथर्ववेद</b> में सभा और समिति को प्रजापति की दो पुत्रियों के रूप में वर्णित किया गया है, जो राजा की शक्तियों पर नियंत्रण रखती थीं।"
    },
    {
        question: "प्रश्न 17. ऋग्वेद में '<b>जन</b>' शब्द का उल्लेख कितनी बार हुआ है?",
        answers: shuffle([
            { text: "175 बार", correct: false },
            { text: "275 बार", correct: true },
            { text: "375 बार", correct: false },
            { text: "100 बार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में '<b>जन</b>' शब्द का उल्लेख लगभग <b>275 बार</b> हुआ है, जो कबीलाई संगठन को दर्शाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि 'जनपद' शब्द का एक बार भी उल्लेख नहीं है।"
    },
    {
        question: "प्रश्न 18. ऋग्वेद में किस देवता के लिए '<b>ऋतस्य गोपा</b>' शब्द का प्रयोग हुआ है?",
        answers: shuffle([
            { text: "इंद्र", correct: false },
            { text: "अग्नि", correct: false },
            { text: "वरुण", correct: true },
            { text: "सोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>वरुण</b> को '<b>ऋतस्य गोपा</b>' अर्थात् '<b>प्राकृतिक संतुलन का रक्षक</b>' कहा गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> वे जल या समुद्र के देवता माने जाते थे और नैतिक व्यवस्था के संरक्षक थे।"
    },
    {
        question: "प्रश्न 19. ऋग्वैदिक काल में '<b>बलि</b>' क्या था?",
        answers: shuffle([
            { text: "एक देवता", correct: false },
            { text: "एक अनुष्ठान", correct: false },
            { text: "प्रजा द्वारा राजा को स्वेच्छा से दिया गया कर", correct: true },
            { text: "युद्ध में जीता गया धन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रारंभ में '<b>बलि</b>' एक <b>स्वैच्छिक कर</b> था जो प्रजा अपने राजा को देती थी।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में यह एक नियमित कर बन गया।"
    },
    {
        question: "प्रश्न 20. ऋग्वैदिक आर्यों का समाज किन चार वर्णों में विभाजित था, इसका स्पष्ट उल्लेख कहाँ है?",
        answers: shuffle([
            { text: "ऋग्वेद के पुरुषसूक्त में", correct: true },
            { text: "शतपथ ब्राह्मण में", correct: false },
            { text: "छंदोग्य उपनिषद में", correct: false },
            { text: "यजुर्वेद में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चार वर्णों की उत्पत्ति का सिद्धांत स्पष्ट रूप से <b>ऋग्वेद के दसवें मंडल</b> में स्थित <b>पुरुषसूक्त</b> में वर्णित है।"
    },
    {
        question: "प्रश्न 21. ऋग्वेद में उल्लिखित '<b>यव</b>' शब्द किस अनाज के लिए प्रयुक्त हुआ है?",
        answers: shuffle([
            { text: "चावल", correct: false },
            { text: "गेहूँ", correct: false },
            { text: "जौ", correct: true },
            { text: "मक्का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में '<b>यव</b>' शब्द का प्रयोग '<b>जौ</b>' के लिए किया गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह आर्यों द्वारा उपयोग किए जाने वाले मुख्य अनाजों में से एक था।"
    },
    {
        question: "प्रश्न 22. '<b>गोत्र</b>' व्यवस्था कब प्रचलन में आई?",
        answers: shuffle([
            { text: "ऋग्वैदिक काल में", correct: false },
            { text: "उत्तर वैदिक काल में", correct: true },
            { text: "महाजनपद काल में", correct: false },
            { text: "मौर्य काल में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>गोत्र</b>' शब्द का मूल अर्थ 'गोशाला' या वह स्थान है जहाँ पूरे कुल के मवेशी रखे जाते थे, लेकिन एक ही मूल पुरुष से उत्पन्न लोगों के समुदाय के रूप में '<b>गोत्र</b>' व्यवस्था <b>उत्तर वैदिक काल</b> में स्थापित हुई।"
    },
    {
        question: "प्रश्न 23. ऋग्वैदिक काल में '<b>पणि</b>' किन्हें कहा जाता था?",
        answers: shuffle([
            { text: "पुरोहितों को", correct: false },
            { text: "योद्धाओं को", correct: false },
            { text: "व्यापार करने वाले लोगों को", correct: true },
            { text: "कृषकों को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>पणि</b>' उन लोगों को कहा जाता था जो <b>व्यापार</b> करते थे और कभी-कभी आर्यों के पशुओं को चुरा लेते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> वे धनी थे और ऋण भी देते थे।"
    },
    {
        question: "प्रश्न 24. ऋग्वेद के किस मंडल में पहली बार '<b>शूद्र</b>' का उल्लेख मिलता है?",
        answers: shuffle([
            { text: "पहले", correct: false },
            { text: "सातवें", correct: false },
            { text: "नौवें", correct: false },
            { text: "दसवें", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>शूद्र</b>' शब्द का उल्लेख पहली बार <b>ऋग्वेद के दसवें मंडल के पुरुषसूक्त</b> में हुआ है।"
    },
    {
        question: "प्रश्न 25. आर्यों की <b>आर्कटिक होम सिद्धांत</b> का पक्ष किसने लिया था?",
        answers: shuffle([
            { text: "मैक्स मूलर", correct: false },
            { text: "एडवर्ड मेयर", correct: false },
            { text: "बाल गंगाधर तिलक", correct: true },
            { text: "दयानंद सरस्वती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बाल गंगाधर तिलक</b> ने अपनी पुस्तक '<b>द आर्कटिक होम इन द वेदाज</b>' में यह सिद्धांत दिया कि आर्यों का मूल निवास स्थान <b>आर्कटिक</b> (उत्तरी ध्रुव) क्षेत्र था।"
    },
    {
        question: "प्रश्न 26. ऋग्वेद में कुल कितनी <b>ऋचाएँ</b> (मंत्र) हैं?",
        answers: shuffle([
            { text: "1028", correct: false },
            { text: "10462", correct: true },
            { text: "1549", correct: false },
            { text: "5839", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में कुल 10 मंडल, 1028 सूक्त और लगभग <b>10,462 ऋचाएँ</b> (मंत्र) हैं।"
    },
    {
        question: "प्रश्न 27. ऋग्वैदिक कालीन नदी '<b>वितस्ता</b>' का आधुनिक नाम क्या है?",
        answers: shuffle([
            { text: "झेलम", correct: true },
            { text: "चिनाब", correct: false },
            { text: "रावी", correct: false },
            { text: "व्यास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक नदी <b>वितस्ता</b> को आज <b>झेलम</b> नदी के नाम से जाना जाता है।"
    },
    {
        question: "प्रश्न 28. ऋग्वेद में '<b>ग्राम</b>' के मुखिया को क्या कहा जाता था?",
        answers: shuffle([
            { text: "कुलप", correct: false },
            { text: "ग्रामणी", correct: true },
            { text: "विशपति", correct: false },
            { text: "राजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कई परिवारों के समूह को '<b>ग्राम</b>' कहा जाता था और इसके मुखिया को '<b>ग्रामणी</b>' कहा जाता था।"
    },
    {
        question: "प्रश्न 29. ऋग्वेद में उल्लिखित देवताओं में से कौन <b>आकाश के देवता नहीं</b> थे?",
        answers: shuffle([
            { text: "सूर्य", correct: false },
            { text: "द्यौस", correct: false },
            { text: "वरुण", correct: false },
            { text: "अग्नि", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अग्नि</b> को <b>पृथ्वी का देवता</b> माना जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> वे मनुष्य और देवताओं के बीच मध्यस्थ की भूमिका निभाते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> सूर्य, द्यौस और वरुण आकाश के देवता थे।"
    },
    {
        question: "प्रश्न 30. '<b>तमसो मा ज्योतिर्गमय</b>' यह कथन मूलतः कहाँ से लिया गया है?",
        answers: shuffle([
            { text: "पुराणों से", correct: false },
            { text: "महाकाव्यों से", correct: false },
            { text: "उपनिषदों से", correct: true },
            { text: "षड्दर्शन से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>तमसो मा ज्योतिर्गमय</b>' (अंधकार से प्रकाश की ओर ले चलो) <b>बृहदारण्यक उपनिषद्</b> से लिया गया है, जो वैदिक साहित्य का ही एक हिस्सा है।"
    },
    {
        question: "प्रश्न 31. ऋग्वैदिक काल में '<b>अयस्</b>' शब्द का प्रयोग किसके लिए होता था?",
        answers: shuffle([
            { text: "सोना", correct: false },
            { text: "चाँदी", correct: false },
            { text: "तांबा या कांसा", correct: true },
            { text: "लोहा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में '<b>अयस्</b>' शब्द का प्रयोग <b>तांबे या कांसे</b> के लिए किया गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> लोहे का ज्ञान उत्तर वैदिक काल में हुआ, जिसे '<b>श्याम अयस्</b>' कहा गया।"
    },
    {
        question: "प्रश्न 32. ऋग्वेद के प्राचीनतम <b>भाष्यकार</b> कौन थे?",
        answers: shuffle([
            { text: "सायणाचार्य", correct: true },
            { text: "माधवाचार्य", correct: false },
            { text: "पाणिनि", correct: false },
            { text: "पतंजलि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चौदहवीं शताब्दी के विजयनगर साम्राज्य के <b>सायणाचार्य</b> को ऋग्वेद का सबसे प्रसिद्ध और प्राचीन भाष्यकार माना जाता है।"
    },
    {
        question: "प्रश्न 33. ऋग्वैदिक काल में '<b>विदथ</b>' क्या थी?",
        answers: shuffle([
            { text: "एक प्रकार की सेना", correct: false },
            { text: "एक यज्ञ", correct: false },
            { text: "आर्यों की सबसे प्राचीन संस्था", correct: true },
            { text: "एक कर प्रणाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>विदथ</b>' आर्यों की <b>सबसे प्राचीन जनसभा</b> थी, जिसमें पुरुष और महिलाएँ दोनों भाग लेते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> यह धार्मिक और सैनिक महत्व के कार्य करती थी।"
    },
    {
        question: "प्रश्न 34. ऋग्वैदिक काल में '<b>क्षेत्र</b>' शब्द का क्या अर्थ था?",
        answers: shuffle([
            { text: "जोता हुआ खेत", correct: true },
            { text: "राज्य", correct: false },
            { text: "चारागाह", correct: false },
            { text: "निवास स्थान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में जुताई की हुई कृषि योग्य भूमि को '<b>क्षेत्र</b>' और उपजाऊ भूमि को '<b>उर्वरा</b>' कहा गया है।"
    },
    {
        question: "प्रश्न 35. '<b>सत्यमेव जयते</b>' शब्द कहाँ से लिया गया है?",
        answers: shuffle([
            { text: "ऋग्वेद", correct: false },
            { text: "मनुस्मृति", correct: false },
            { text: "भगवद्गीता", correct: false },
            { text: "मुण्डक उपनिषद्", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत का राष्ट्रीय आदर्श वाक्य '<b>सत्यमेव जयते</b>' <b>मुण्डक उपनिषद्</b> से लिया गया है, जो अथर्ववेद से संबंधित है।"
    },
    {
        question: "प्रश्न 36. ऋग्वेद की अनेक बातें किस प्राचीन ईरानी ग्रंथ से मिलती हैं?",
        answers: shuffle([
            { text: "जिंद अवेस्ता", correct: true },
            { text: "शाहनामा", correct: false },
            { text: "बुंदाहिश्न", correct: false },
            { text: "दिनकर्द", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारसियों के पवित्र ग्रंथ '<b>जिंद अवेस्ता</b>' और ऋग्वेद में कई देवताओं, शब्दों और अवधारणाओं में आश्चर्यजनक समानता है, जो आर्यों के साझा मूल का संकेत देती है।"
    },
    {
        question: "प्रश्न 37. ऋग्वैदिक देवता वरुण के बारे में कौन सा कथन सत्य है?",
        answers: shuffle([
            { text: "वे झंझावात के देवता थे।", correct: false },
            { text: "उन्हें 'पुरंदर' कहा जाता था।", correct: false },
            { text: "वे नैतिक व्यवस्था के संरक्षक थे।", correct: true },
            { text: "वे पशुओं के देवता थे।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>वरुण</b> को '<b>ऋत</b>' अर्थात् प्राकृतिक और <b>नैतिक व्यवस्था का संरक्षक</b> माना जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्हें '<b>ऋतस्य गोपा</b>' भी कहा गया है।"
    },
    {
        question: "प्रश्न 38. ऋग्वैदिक कालीन नदी '<b>अस्किनी</b>' की पहचान किस आधुनिक नदी से की जाती है?",
        answers: shuffle([
            { text: "व्यास", correct: false },
            { text: "रावी", correct: false },
            { text: "चिनाब", correct: true },
            { text: "सतलुज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक नदी <b>अस्किनी</b> की पहचान आधुनिक <b>चिनाब</b> नदी से की जाती है।"
    },
    {
        question: "प्रश्न 39. ऋग्वैदिक काल में विवाह संस्था के संदर्भ में '<b>अमाजू</b>' किसे कहते थे?",
        answers: shuffle([
            { text: "विधवा स्त्री को", correct: false },
            { text: "जीवन भर अविवाहित रहने वाली महिला को", correct: true },
            { text: "पुनर्विवाह करने वाली महिला को", correct: false },
            { text: "बाल विवाह की शिकार लड़की को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक काल में जो महिलाएँ <b>जीवन भर विवाह नहीं करती थीं</b>, उन्हें '<b>अमाजू</b>' कहा जाता था।"
    },
    {
        question: "प्रश्न 40. ऋग्वेद में '<b>दस्यु</b>' शब्द किसके लिए प्रयुक्त हुआ है?",
        answers: shuffle([
            { text: "आर्यों के शत्रु के लिए", correct: true },
            { text: "एक देवता के लिए", correct: false },
            { text: "एक पुरोहित के लिए", correct: false },
            { text: "एक राजा के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '<b>दस्यु</b>' शब्द का प्रयोग ऋग्वेद में आर्यों के <b>स्थानीय शत्रुओं</b> के लिए किया गया है, जो भिन्न रीति-रिवाजों और संस्कृति के थे।"
    },
    {
        question: "प्रश्न 41. ऋग्वेद का पाठ करने वाले पुरोहित को क्या कहा जाता था?",
        answers: shuffle([
            { text: "उद्गाता", correct: false },
            { text: "अध्वर्यु", correct: false },
            { text: "होतृ", correct: true },
            { text: "ब्रह्मा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद के मंत्रों का पाठ करने वाले पुरोहित को '<b>होतृ</b>' या '<b>होता</b>' कहा जाता था।"
    },
    {
        question: "प्रश्न 42. ऋग्वैदिक काल में '<b>तक्षन्</b>' किसे कहा जाता था?",
        answers: shuffle([
            { text: "बढ़ई को", correct: true },
            { text: "कुम्हार को", correct: false },
            { text: "बुनकर को", correct: false },
            { text: "लोहार को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक साहित्य में लकड़ी का काम करने वाले व्यक्ति, यानी <b>बढ़ई</b> को '<b>तक्षन्</b>' कहा गया है।"
    },
    {
        question: "प्रश्न 43. पूर्व-वैदिक आर्यों का धर्म प्रमुखतः क्या था?",
        answers: shuffle([
            { text: "भक्ति", correct: false },
            { text: "मूर्ति पूजा और यज्ञ", correct: false },
            { text: "प्रकृति पूजा और यज्ञ", correct: true },
            { text: "प्रकृति पूजा और भक्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक आर्य मुख्यतः <b>प्रकृति की शक्तियों</b> जैसे सूर्य, अग्नि, वायु, वरुण आदि की पूजा करते थे और उन्हें प्रसन्न करने के लिए <b>यज्ञ</b> करते थे।"
    },
    {
        question: "प्रश्न 44. निम्नलिखित में से कौन सी एक ऋग्वैदिक आर्यों की लाक्षणिक विशेषता नहीं है?",
        answers: shuffle([
            { text: "वे अश्व, रथ और कांस्य के उपयोग से परिचित थे।", correct: false },
            { text: "वे लोहे के उपयोग से परिचित थे।", correct: true },
            { text: "वे गो-संपत्ति से परिचित थे।", correct: false },
            { text: "वे ताम्र और आधुनिक हल-फाल से परिचित थे।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक आर्य <b>लोहे के उपयोग से परिचित नहीं थे</b>।<br><br><i class='fa-solid fa-angles-right icon'></i> लोहे का ज्ञान <b>उत्तर वैदिक काल</b> (लगभग 1000 ईसा पूर्व) में हुआ।"
    },
    {
        question: "प्रश्न 45. ऋग्वैदिक काल में '<b>विश</b>' का प्रमुख कौन कहलाता था?",
        answers: shuffle([
            { text: "ग्रामणी", correct: false },
            { text: "विशपति", correct: true },
            { text: "राजन", correct: false },
            { text: "कुलप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कई ग्रामों को मिलाकर '<b>विश</b>' बनता था और इसके प्रमुख को '<b>विशपति</b>' कहा जाता था।"
    },
    {
        question: "प्रश्न 46. ऋग्वेद के किन मंडलों को '<b>वंश मंडल</b>' या '<b>गोत्र मंडल</b>' के नाम से जाना जाता है?",
        answers: shuffle([
            { text: "1 से 6 तक", correct: false },
            { text: "2 से 7 तक", correct: true },
            { text: "3 से 8 तक", correct: false },
            { text: "4 से 9 तक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद के <b>दूसरे से सातवें मंडल</b> को सबसे प्राचीन माना जाता है और इन्हें '<b>वंश मंडल</b>' या '<b>गोत्र मंडल</b>' कहते हैं क्योंकि इनकी रचना किसी विशेष ऋषि के परिवार ने की है।"
    },
    {
        question: "प्रश्न 47. ऋग्वेद में '<b>पूषन्</b>' देवता किससे संबंधित थे?",
        answers: shuffle([
            { text: "वनस्पतियों और औषधियों से", correct: false },
            { text: "पशुओं और मार्गों से", correct: true },
            { text: "युद्ध और विजय से", correct: false },
            { text: "ज्ञान और विद्या से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>पूषन्</b> ऋग्वैदिक काल में <b>पशुओं के देवता</b> थे जो भटके हुए पशुओं को वापस लाते थे और यात्रियों की रक्षा करते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उत्तर वैदिक काल में ये शूद्रों के देवता बन गए।"
    },
    {
        question: "प्रश्न 48. ऋग्वेद में उल्लिखित '<b>शतम्</b>' का क्या अर्थ है?",
        answers: shuffle([
            { text: "सौ", correct: true },
            { text: "एक हजार", correct: false },
            { text: "दस हजार", correct: false },
            { text: "एक लाख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में '<b>शतम्</b>' संख्या का प्रयोग '<b>सौ</b>' के लिए किया गया है, जैसे 'शतपथ' का अर्थ सौ मार्ग होता है।"
    },
    {
        question: "प्रश्न 49. ऋग्वैदिक समाज में किसे संपत्ति का मुख्य रूप माना जाता था?",
        answers: shuffle([
            { text: "भूमि", correct: false },
            { text: "सोना", correct: false },
            { text: "मवेशी (गाय)", correct: true },
            { text: "अनाज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक काल में <b>गाय</b> को संपत्ति का सबसे महत्वपूर्ण रूप माना जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> युद्ध भी मुख्यतः गायों के लिए ही लड़े जाते थे, जिन्हें '<b>गविष्टि</b>' कहा जाता था।"
    },
    {
        question: "प्रश्न 50. ऋग्वेद के अनुसार, जीवन का अंतिम लक्ष्य क्या था?",
        answers: shuffle([
            { text: "मोक्ष", correct: false },
            { text: "स्वर्ग", correct: false },
            { text: "धन-संपत्ति", correct: false },
            { text: "एक लंबा और सुखी जीवन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक आर्यों का दृष्टिकोण <b>भौतिकवादी</b> और आशावादी था।<br><br><i class='fa-solid fa-angles-right icon'></i> वे मोक्ष या पुनर्जन्म के चक्र से मुक्ति के बजाय देवताओं से एक <b>लंबा, स्वस्थ और समृद्ध जीवन</b> मांगते थे।"
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