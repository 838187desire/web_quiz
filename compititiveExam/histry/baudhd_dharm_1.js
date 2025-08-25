const questions = [
    {
        topHeading: "बौद्ध धर्म पर आधारित बहुविकल्पी प्रश्न part 1 (quiz_no.25)"
    },
    {
        question: "बौद्ध धर्म के संस्थापक कौन थे?",
        answers: [
            { text: "महावीर", correct: false },
            { text: "गौतम बुद्ध", correct: true },
            { text: "ऋषभदेव", correct: false },
            { text: "शंकराचार्य", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतम बुद्ध (सिद्धार्थ) ने बौद्ध धर्म की स्थापना की थी।"
    },
    {
        question: "गौतम बुद्ध का जन्म कब और कहाँ हुआ था?",
        answers: [
            { text: "563 ईसा पूर्व, लुम्बिनी", correct: true },
            { text: "540 ईसा पूर्व, कुंडग्राम", correct: false },
            { text: "483 ईसा पूर्व, कुशीनगर", correct: false },
            { text: "468 ईसा पूर्व, पावापुरी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतम बुद्ध का जन्म 563 ईसा पूर्व में नेपाल के लुम्बिनी नामक स्थान पर हुआ था।"
    },
    {
        question: "बुद्ध के बचपन का नाम क्या था?",
        answers: [
            { text: "वर्धमान", correct: false },
            { text: "सिद्धार्थ", correct: true },
            { text: "राहुल", correct: false },
            { text: "गौतम", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतम बुद्ध के बचपन का नाम सिद्धार्थ था।"
    },
    {
        question: "गौतम बुद्ध किस कुल से संबंधित थे?",
        answers: [
            { text: "ज्ञात्रिक", correct: false },
            { text: "शाक्य", correct: true },
            { text: "लिच्छवि", correct: false },
            { text: "कुरु", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतम बुद्ध शाक्य कुल से संबंधित थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उनके पिता शुद्धोदन शाक्य गणराज्य के मुखिया थे।"
    },
    {
        question: "बुद्ध के पिता का नाम क्या था?",
        answers: [
            { text: "राहुल", correct: false },
            { text: "सिद्धार्थ", correct: false },
            { text: "शुद्धोदन", correct: true },
            { text: "देवदत्त", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतम बुद्ध के पिता का नाम शुद्धोदन था, जो कपिलवस्तु के शाक्य गणराज्य के शासक थे।"
    },
    {
        question: "बुद्ध की माता का नाम क्या था?",
        answers: [
            { text: "यशोधरा", correct: false },
            { text: "महामाया", correct: true },
            { text: "त्रिशला", correct: false },
            { text: "प्रजापति गौतमी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतम बुद्ध की माता का नाम महामाया था।<br><br><i class='fa-solid fa-angles-right icon'></i> उनके जन्म के सात दिन बाद ही उनका निधन हो गया था।"
    },
    {
        question: "बुद्ध का पालन-पोषण किसने किया था?",
        answers: [
            { text: "महामाया", correct: false },
            { text: "यशोधरा", correct: false },
            { text: "प्रजापति गौतमी", correct: true },
            { text: "देवदत्त", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुद्ध की माता महामाया की मृत्यु के बाद उनका पालन-पोषण उनकी मौसी और सौतेली माँ प्रजापति गौतमी ने किया था।"
    },
    {
        question: "बुद्ध की पत्नी और पुत्र का नाम क्या था?",
        answers: [
            { text: "यशोधरा, राहुल", correct: true },
            { text: "यशोदा, राहुल", correct: false },
            { text: "महामाया, राहुल", correct: false },
            { text: "प्रजापति गौतमी, राहुल", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुद्ध की पत्नी का नाम यशोधरा और उनके पुत्र का नाम राहुल था।"
    },
    {
        question: "गौतम बुद्ध ने किस आयु में गृह त्याग किया था, जिसे 'महाभिनिष्क्रमण' कहा जाता है?",
        answers: [
            { text: "25 वर्ष", correct: false },
            { text: "29 वर्ष", correct: true },
            { text: "35 वर्ष", correct: false },
            { text: "42 वर्ष", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 29 वर्ष की आयु में गौतम बुद्ध ने सांसारिक दुखों से मुक्ति पाने के लिए गृह त्याग दिया था, जिसे बौद्ध धर्म में 'महाभिनिष्क्रमण' कहा जाता है।"
    },
    {
        question: "बुद्ध को ज्ञान की प्राप्ति कहाँ हुई थी?",
        answers: [
            { text: "सारनाथ", correct: false },
            { text: "लुम्बिनी", correct: false },
            { text: "बोधगया", correct: true },
            { text: "कुशीनगर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 35 वर्ष की आयु में, गौतम बुद्ध को निरंजना नदी के तट पर एक पीपल वृक्ष के नीचे ज्ञान की प्राप्ति हुई थी।<br><br><i class='fa-solid fa-angles-right icon'></i> यह स्थान बोधगया कहलाता है।"
    },
    {
        question: "ज्ञान प्राप्ति के बाद सिद्धार्थ किस नाम से जाने गए?",
        answers: [
            { text: "वर्धमान", correct: false },
            { text: "बुद्ध", correct: true },
            { text: "जिन", correct: false },
            { text: "तीर्थंकर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ज्ञान प्राप्ति के बाद सिद्धार्थ 'बुद्ध' (अर्थात 'जागृत व्यक्ति' या 'ज्ञानी') के नाम से जाने गए।"
    },
    {
        question: "बुद्ध ने अपना पहला उपदेश कहाँ दिया था, जिसे 'धर्मचक्र प्रवर्तन' कहा जाता है?",
        answers: [
            { text: "बोधगया", correct: false },
            { text: "लुम्बिनी", correct: false },
            { text: "सारनाथ", correct: true },
            { text: "श्रावस्ती", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ज्ञान प्राप्ति के बाद, बुद्ध ने अपना पहला उपदेश सारनाथ में दिया था।<br><br><i class='fa-solid fa-angles-right icon'></i> बौद्ध धर्म में इस घटना को 'धर्मचक्र प्रवर्तन' (धर्म के पहिये को गति देना) कहा जाता है।"
    },
    {
        question: "बुद्ध ने अपने उपदेश किस भाषा में दिए थे?",
        answers: [
            { text: "संस्कृत", correct: false },
            { text: "प्राकृत", correct: false },
            { text: "पाली", correct: true },
            { text: "मगधी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुद्ध ने अपने उपदेश जनसाधारण की भाषा पाली में दिए, ताकि वे उनके विचारों को आसानी से समझ सकें।"
    },
    {
        question: "बौद्ध धर्म के तीन रत्न (त्रिरत्न) क्या हैं?",
        answers: [
            { text: "बुद्ध, धम्म, संघ", correct: true },
            { text: "सम्यक दर्शन, सम्यक ज्ञान, सम्यक आचरण", correct: false },
            { text: "अहिंसा, सत्य, अस्तेय", correct: false },
            { text: "विनय, सूत्र, अभिधम्म", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध धर्म के तीन रत्न हैं: बुद्ध (बुद्ध के प्रति आस्था), धम्म (बुद्ध के उपदेश), और संघ (बौद्ध भिक्षुओं का समुदाय)।"
    },
    {
        question: "बौद्ध धर्म में 'अष्टांगिक मार्ग' किससे संबंधित है?",
        answers: [
            { text: "मोक्ष की प्राप्ति", correct: false },
            { text: "दुखों का निवारण", correct: true },
            { text: "ईश्वर का ज्ञान", correct: false },
            { text: "धन की प्राप्ति", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अष्टांगिक मार्ग' वह मार्ग है जो बुद्ध ने दुखों के निवारण के लिए सुझाया था।"
    },
    {
        question: "गौतम बुद्ध ने अपने जीवनकाल में सर्वाधिक उपदेश कहाँ दिए थे?",
        answers: [
            { text: "श्रावस्ती", correct: true },
            { text: "कपिलवस्तु", correct: false },
            { text: "वैशाली", correct: false },
            { text: "राजगृह", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुद्ध ने कोशल महाजनपद की राजधानी श्रावस्ती में अपने जीवनकाल में सर्वाधिक उपदेश दिए थे।"
    },
    {
        question: "बुद्ध की मृत्यु कहाँ हुई थी, जिसे 'महापरिनिर्वाण' कहा जाता है?",
        answers: [
            { text: "बोधगया", correct: false },
            { text: "कुशीनगर", correct: true },
            { text: "सारनाथ", correct: false },
            { text: "लुम्बिनी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 80 वर्ष की आयु में 483 ईसा पूर्व में बुद्ध की मृत्यु कुशीनगर में हुई थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इस घटना को बौद्ध धर्म में 'महापरिनिर्वाण' कहा जाता है।"
    },
    {
        question: "'त्रिपिटक' किस धर्म का एक प्रमुख ग्रंथ है?",
        answers: [
            { text: "जैन धर्म", correct: false },
            { text: "बौद्ध धर्म", correct: true },
            { text: "वैदिक धर्म", correct: false },
            { text: "शैव धर्म", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'त्रिपिटक' बौद्ध धर्म का सबसे महत्वपूर्ण ग्रंथ है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें बुद्ध के उपदेशों और नियमों का संकलन है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके तीन भाग हैं: विनय पिटक, सुत्त पिटक और अभिधम्म पिटक।"
    },
    {
        question: "'सुत्त पिटक' किससे संबंधित है?",
        answers: [
            { text: "बौद्ध संघ के नियम", correct: false },
            { text: "बुद्ध के उपदेशों का संग्रह", correct: true },
            { text: "बौद्ध दर्शन", correct: false },
            { text: "बुद्ध की जीवनी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुत्त पिटक में महात्मा बुद्ध के उपदेशों और संवादों का संग्रह है।"
    },
    {
        question: "'विनय पिटक' किससे संबंधित है?",
        answers: [
            { text: "बौद्ध संघ के नियम", correct: true },
            { text: "बुद्ध के उपदेशों का संग्रह", correct: false },
            { text: "बौद्ध दर्शन", correct: false },
            { text: "बुद्ध की जीवनी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विनय पिटक में बौद्ध संघ के लिए बनाए गए नियमों और आचार-संहिता का वर्णन है।"
    },
    {
        question: "'अभिधम्म पिटक' किससे संबंधित है?",
        answers: [
            { text: "बौद्ध संघ के नियम", correct: false },
            { text: "बुद्ध के उपदेशों का संग्रह", correct: false },
            { text: "बौद्ध दर्शन और आध्यात्मिक चिंतन", correct: true },
            { text: "बुद्ध की जीवनी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अभिधम्म पिटक में बौद्ध धर्म के दार्शनिक और आध्यात्मिक सिद्धांतों का संग्रह है।"
    },
    {
        question: "'बौद्ध धर्म' और 'जैन धर्म' में क्या समानता है?",
        answers: [
            { text: "दोनों ने वैदिक कर्मकांडों का विरोध किया।", correct: true },
            { text: "दोनों ने ईश्वर के अस्तित्व को स्वीकार किया।", correct: false },
            { text: "दोनों ने आत्मा की अमरता को स्वीकार किया।", correct: false },
            { text: "दोनों ने यज्ञों का समर्थन किया।", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध और जैन दोनों धर्मों ने वैदिक कर्मकांडों, बलि प्रथा और जातिवाद का विरोध किया।"
    },
    {
        question: "'हीनयान' और 'महायान' किस धर्म के दो प्रमुख संप्रदाय हैं?",
        answers: [
            { text: "जैन धर्म", correct: false },
            { text: "बौद्ध धर्म", correct: true },
            { text: "शैव धर्म", correct: false },
            { text: "वैष्णव धर्म", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध धर्म दो प्रमुख संप्रदायों में विभाजित है: हीनयान (जो बुद्ध को एक महापुरुष मानते हैं) और महायान (जो बुद्ध को ईश्वर के रूप में पूजते हैं)।"
    },
    {
        question: "प्रथम बौद्ध संगीति का आयोजन कहाँ हुआ था?",
        answers: [
            { text: "वैशाली", correct: false },
            { text: "पाटलिपुत्र", correct: false },
            { text: "राजगृह", correct: true },
            { text: "कुंडलवन", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रथम बौद्ध संगीति का आयोजन 483 ईसा पूर्व में बुद्ध की मृत्यु के तुरंत बाद राजगृह में हुआ था।"
    },
    {
        question: "'नालंदा विश्वविद्यालय' किस धर्म की शिक्षा का प्रमुख केंद्र था?",
        answers: [
            { text: "जैन धर्म", correct: false },
            { text: "बौद्ध धर्म", correct: true },
            { text: "हिंदू धर्म", correct: false },
            { text: "ईसाई धर्म", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नालंदा विश्वविद्यालय प्राचीन भारत में बौद्ध धर्म की शिक्षा का एक प्रमुख केंद्र था, जहाँ दुनिया भर से छात्र अध्ययन करने आते थे।"
    },
    {
        question: "द्वितीय बौद्ध संगीति का आयोजन कहाँ हुआ था?",
        answers: [
            { text: "राजगृह", correct: false },
            { text: "वैशाली", correct: true },
            { text: "पाटलिपुत्र", correct: false },
            { text: "कुंडलवन", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्वितीय बौद्ध संगीति का आयोजन 383 ईसा पूर्व में वैशाली में हुआ था।"
    },
    {
        question: "तृतीय बौद्ध संगीति का आयोजन कहाँ हुआ था?",
        answers: [
            { text: "राजगृह", correct: false },
            { text: "वैशाली", correct: false },
            { text: "पाटलिपुत्र", correct: true },
            { text: "कुंडलवन", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तृतीय बौद्ध संगीति का आयोजन सम्राट अशोक के शासनकाल में 250 ईसा पूर्व में पाटलिपुत्र में हुआ था।"
    },
    {
        question: "चतुर्थ बौद्ध संगीति का आयोजन कहाँ हुआ था?",
        answers: [
            { text: "राजगृह", correct: false },
            { text: "वैशाली", correct: false },
            { text: "पाटलिपुत्र", correct: false },
            { text: "कुंडलवन", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चतुर्थ बौद्ध संगीति का आयोजन कुषाण शासक कनिष्क के शासनकाल में पहली शताब्दी ईस्वी में कुंडलवन (कश्मीर) में हुआ था।"
    },
    {
        question: "'हीनयान' संप्रदाय के अनुयायी बुद्ध को क्या मानते हैं?",
        answers: [
            { text: "ईश्वर", correct: false },
            { text: "महामानव", correct: true },
            { text: "देवता", correct: false },
            { text: "अवतार", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीनयान संप्रदाय के अनुयायी बुद्ध को एक महान मानव या महामानव मानते हैं और उनकी प्रतीकात्मक पूजा करते हैं।"
    },
    {
        question: "'महायान' संप्रदाय के अनुयायी बुद्ध को क्या मानते हैं?",
        answers: [
            { text: "महामानव", correct: false },
            { text: "ईश्वर", correct: true },
            { text: "ऋषि", correct: false },
            { text: "राजा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महायान संप्रदाय के अनुयायी बुद्ध को एक ईश्वर के रूप में पूजते हैं और उनकी मूर्ति पूजा करते हैं।"
    },
    {
        question: "'बोधिसत्व' किस धर्म से संबंधित हैं?",
        answers: [
            { text: "जैन धर्म", correct: false },
            { text: "बौद्ध धर्म", correct: true },
            { text: "शैव धर्म", correct: false },
            { text: "वैष्णव धर्म", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बोधिसत्व महायान बौद्ध धर्म की एक महत्वपूर्ण अवधारणा है।<br><br><i class='fa-solid fa-angles-right icon'></i> बोधिसत्व वह व्यक्ति होता है जो ज्ञान (बोधि) प्राप्त कर चुका हो, लेकिन दूसरों को मुक्ति दिलाने के लिए स्वयं निर्वाण को विलंबित करता है।"
    },
    {
        question: "'जातक कथाएँ' किस धर्म से संबंधित हैं?",
        answers: [
            { text: "जैन धर्म", correct: false },
            { text: "बौद्ध धर्म", correct: true },
            { text: "हिंदू धर्म", correct: false },
            { text: "ईसाई धर्म", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जातक कथाएँ महात्मा बुद्ध के पूर्व जन्मों की कहानियाँ हैं, जो बौद्ध धर्म से संबंधित हैं।"
    },
    {
        question: "किस शासक ने बौद्ध धर्म को संरक्षण प्रदान किया था?",
        answers: [
            { text: "चंद्रगुप्त मौर्य", correct: false },
            { text: "अशोक", correct: false },
            { text: "बिम्बिसार", correct: false },
            { text: "उपर्युक्त सभी", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौर्य शासक अशोक, हर्यंक वंश के शासक बिम्बिसार और कुषाण शासक कनिष्क जैसे कई शासकों ने बौद्ध धर्म को संरक्षण दिया था।"
    },
    {
        question: "'मिलिंदपन्हो' नामक ग्रंथ किस भाषा में लिखा गया है?",
        answers: [
            { text: "संस्कृत", correct: false },
            { text: "प्राकृत", correct: false },
            { text: "पाली", correct: true },
            { text: "मगधी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिलिंदपन्हो एक पाली भाषा का ग्रंथ है, जिसमें यूनानी राजा मिनेंडर (मिलिंद) और बौद्ध भिक्षु नागसेन के बीच हुए दार्शनिक संवादों का वर्णन है।"
    },
    {
        question: "'बुद्धचरित' नामक ग्रंथ की रचना किसने की थी?",
        answers: [
            { text: "अश्वघोष", correct: true },
            { text: "नागसेन", correct: false },
            { text: "नागार्जुन", correct: false },
            { text: "वसुमित्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बुद्धचरित' एक महाकाव्य है, जिसकी रचना अश्वघोष ने संस्कृत भाषा में की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें बुद्ध के जीवन का विस्तृत वर्णन है।"
    },
    {
        question: "'शून्यवाद' का सिद्धांत किस बौद्ध दार्शनिक ने दिया था?",
        answers: [
            { text: "अश्वघोष", correct: false },
            { text: "नागसेन", correct: false },
            { text: "नागार्जुन", correct: true },
            { text: "वसुमित्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नागार्जुन एक महान बौद्ध दार्शनिक थे, जिन्होंने शून्यवाद (माध्यमिक दर्शन) का सिद्धांत दिया था।"
    },
    {
        question: "बौद्ध धर्म के अनुसार, 'अष्टांगिक मार्ग' में कौन-सा अंग नहीं है?",
        answers: [
            { text: "सम्यक दृष्टि", correct: false },
            { text: "सम्यक संकल्प", correct: false },
            { text: "सम्यक वाणी", correct: false },
            { text: "सम्यक धन", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अष्टांगिक मार्ग में सम्यक धन नामक कोई अंग नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके आठ अंग हैं: सम्यक दृष्टि, सम्यक संकल्प, सम्यक वाणी, सम्यक कर्म, सम्यक आजीव, सम्यक व्यायाम, सम्यक स्मृति और सम्यक समाधि।"
    },
    {
        question: "किस बौद्ध संगीति में बौद्ध धर्म 'हीनयान' और 'महायान' में विभाजित हो गया था?",
        answers: [
            { text: "प्रथम", correct: false },
            { text: "द्वितीय", correct: false },
            { text: "तृतीय", correct: false },
            { text: "चतुर्थ", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाण शासक कनिष्क के शासनकाल में हुई चतुर्थ बौद्ध संगीति में बौद्ध धर्म दो प्रमुख संप्रदायों - हीनयान और महायान में विभाजित हो गया था।"
    },
    {
        question: "किस शासक के शासनकाल में तृतीय बौद्ध संगीति हुई थी?",
        answers: [
            { text: "अशोक", correct: true },
            { text: "अजातशत्रु", correct: false },
            { text: "कालाD)क", correct: false },
            { text: "कनिष्क", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौर्य सम्राट अशोक के शासनकाल में 250 ईसा पूर्व में पाटलिपुत्र में तृतीय बौद्ध संगीति का आयोजन हुआ था।"
    },
    {
        question: "बौद्ध धर्म के अनुसार, 'निर्वाण' का क्या अर्थ है?",
        answers: [
            { text: "ज्ञान की प्राप्ति", correct: false },
            { text: "जीवन-मरण के चक्र से मुक्ति", correct: true },
            { text: "मृत्यु", correct: false },
            { text: "तपस्या", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध धर्म में निर्वाण का अर्थ है इच्छाओं की ज्वाला का बुझ जाना, जिससे जीवन-मरण के चक्र से मुक्ति मिल जाती है।"
    },
    {
        question: "'अजंता' की गुफाएँ किस धर्म से संबंधित हैं?",
        answers: [
            { text: "जैन धर्म", correct: false },
            { text: "बौद्ध धर्म", correct: true },
            { text: "शैव धर्म", correct: false },
            { text: "वैष्णव धर्म", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजंता की गुफाओं में बौद्ध धर्म से संबंधित चित्रकारी और मूर्तिकलाएँ हैं, जो जातक कथाओं को दर्शाती हैं।"
    },
    {
        question: "बुद्ध ने अपना अंतिम उपदेश किसे दिया था?",
        answers: [
            { text: "आनंद", correct: false },
            { text: "सुभद्द", correct: true },
            { text: "उपालि", correct: false },
            { text: "सारिपुत्त", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुशीनगर में अपनी मृत्यु से पहले, बुद्ध ने अपना अंतिम उपदेश सुभद्द नामक एक भिक्षु को दिया था।"
    },
    {
        question: "'तथागत' किसे कहा जाता है?",
        answers: [
            { text: "महावीर", correct: false },
            { text: "गौतम बुद्ध", correct: true },
            { text: "ऋषभदेव", correct: false },
            { text: "शंकराचार्य", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तथागत बुद्ध का एक अन्य नाम है, जिसका अर्थ है 'वह जो सत्य को पा चुका हो' या 'वह जो जैसा आया था, वैसा ही गया'।"
    },
    {
        question: "'बौद्ध संघ' में प्रवेश पाने वाली प्रथम महिला कौन थीं?",
        answers: [
            { text: "यशोधरा", correct: false },
            { text: "महामाया", correct: false },
            { text: "प्रजापति गौतमी", correct: true },
            { text: "आम्रपाली", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुद्ध की मौसी और सौतेली माँ प्रजापति गौतमी बौद्ध संघ में प्रवेश पाने वाली पहली महिला थीं।"
    },
    {
        question: "'अनात्मवाद' का सिद्धांत किस धर्म से संबंधित है?",
        answers: [
            { text: "जैन धर्म", correct: false },
            { text: "बौद्ध धर्म", correct: true },
            { text: "हिंदू धर्म", correct: false },
            { text: "ईसाई धर्म", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनात्मवाद बौद्ध धर्म का एक प्रमुख सिद्धांत है, जिसके अनुसार आत्मा जैसी कोई स्थायी या शाश्वत सत्ता नहीं होती।"
    },
    {
        question: "'सर्वास्तिवाद' और 'सौत्रांतिक' किस धर्म के संप्रदाय हैं?",
        answers: [
            { text: "हीनयान", correct: true },
            { text: "महायान", correct: false },
            { text: "वज्रयान", correct: false },
            { text: "जैन", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सर्वास्तिवाद और सौत्रांतिक हीनयान बौद्ध धर्म के प्रमुख उप-संप्रदाय थे।"
    },
    {
        question: "'वसुबंधु' किस बौद्ध दार्शनिक से संबंधित हैं?",
        answers: [
            { text: "हीनयान", correct: false },
            { text: "महायान", correct: true },
            { text: "वज्रयान", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वसुबंधु एक महान महायान बौद्ध दार्शनिक थे, जिन्होंने योगाचार दर्शन को विकसित किया था।"
    },
    {
        question: "'सारनाथ' क्यों प्रसिद्ध है?",
        answers: [
            { text: "बुद्ध का जन्मस्थान", correct: false },
            { text: "बुद्ध को ज्ञान की प्राप्ति हुई थी", correct: false },
            { text: "बुद्ध ने पहला उपदेश दिया था", correct: true },
            { text: "बुद्ध की मृत्यु हुई थी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सारनाथ वह स्थान है जहाँ बुद्ध ने ज्ञान प्राप्ति के बाद अपना पहला उपदेश दिया था।"
    },
    {
        question: "'बौद्ध धर्म' की कौन-सी विशेषता उसे जैन धर्म से अलग करती है?",
        answers: [
            { text: "अहिंसा पर जोर", correct: false },
            { text: "पुनर्जन्म में विश्वास", correct: false },
            { text: "आत्मा के अस्तित्व को अस्वीकार करना", correct: true },
            { text: "कर्म के सिद्धांत में विश्वास", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैन धर्म आत्मा के अस्तित्व को स्वीकार करता है, जबकि बौद्ध धर्म (विशेष रूप से अनात्मवाद) आत्मा के स्थायी अस्तित्व को अस्वीकार करता है।"
    },
    {
        question: "किस भारतीय कला में 'जातक' कहानियों का चित्रण है?",
        answers: [
            { text: "अजंता और एलोरा", correct: false },
            { text: "खजुराहो", correct: false },
            { text: "सांची और भरहुत", correct: false },
            { text: "उपर्युक्त सभी", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजंता, एलोरा, सांची और भरहुत की कलाओं में जातक कथाओं के विभिन्न दृश्यों को दर्शाया गया है।"
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