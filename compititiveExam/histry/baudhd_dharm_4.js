const questions = [
    {
        topHeading: "बौद्ध धर्म पर आधारित बहुविकल्पी प्रश्न part 4 (quiz_no.28)"
    },
    {
        question: "बौद्ध धर्म में 'शील' का क्या अर्थ है?",
        answers: [
            { text: "ज्ञान", correct: false },
            { text: "आचरण", correct: true },
            { text: "ध्यान", correct: false },
            { text: "समाधि", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शील' बौद्ध धर्म के त्रिशिक्षा (शील, समाधि, प्रज्ञा) का एक महत्वपूर्ण हिस्सा है, जिसका अर्थ है नैतिक आचरण या सदाचार।"
    },
    {
        question: "बौद्ध धर्म की किस संगीति में अभिधम्म पिटक को जोड़ा गया था?",
        answers: [
            { text: "प्रथम", correct: false },
            { text: "द्वितीय", correct: false },
            { text: "तृतीय", correct: true },
            { text: "चतुर्थ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सम्राट अशोक के शासनकाल में हुई तृतीय बौद्ध संगीति में 'अभिधम्म पिटक' को जोड़ा गया था, जिसमें बौद्ध धर्म के दार्शनिक सिद्धांतों का वर्णन है।"
    },
    {
        question: "किस राजा ने सारनाथ में 'धमेख स्तूप' का निर्माण करवाया था?",
        answers: [
            { text: "अशोक", correct: true },
            { text: "कनिष्क", correct: false },
            { text: "हर्षवर्धन", correct: false },
            { text: "बिम्बिसार", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सारनाथ में स्थित धमेख स्तूप का निर्माण मौर्य सम्राट अशोक ने करवाया था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उस स्थान को चिन्हित करता है जहाँ बुद्ध ने अपना पहला उपदेश दिया था।"
    },
    {
        question: "बुद्ध को किस स्थान पर 'संबोधि' (ज्ञान) प्राप्त हुआ था?",
        answers: [
            { text: "सारनाथ", correct: false },
            { text: "लुम्बिनी", correct: false },
            { text: "बोधगया", correct: true },
            { text: "कुशीनगर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतम बुद्ध को बिहार के बोधगया में पीपल वृक्ष के नीचे 'संबोधि' या परम ज्ञान की प्राप्ति हुई थी।"
    },
    {
        question: "'जातक' कथाओं का संबंध बुद्ध के किस जीवनकाल से है?",
        answers: [
            { text: "वर्तमान जीवन", correct: false },
            { text: "पूर्व जन्म", correct: true },
            { text: "भविष्य", correct: false },
            { text: "निर्वाण", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जातक कथाएँ महात्मा बुद्ध के पूर्व जन्मों की कहानियों का संग्रह हैं।"
    },
    {
        question: "बौद्ध धर्म में 'अनात्मवाद' का सिद्धांत किससे संबंधित है?",
        answers: [
            { text: "आत्मा का अस्तित्व", correct: false },
            { text: "आत्मा की अमरता", correct: false },
            { text: "आत्मा के अस्तित्व का खंडन", correct: true },
            { text: "ईश्वर की अवधारणा", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनात्मवाद' बौद्ध धर्म का एक प्रमुख सिद्धांत है, जो स्थायी या शाश्वत आत्मा के अस्तित्व को खंडित करता है।"
    },
    {
        question: "'अंगुत्तर निकाय' किस पिटक का हिस्सा है?",
        answers: [
            { text: "विनय पिटक", correct: false },
            { text: "सुत्त पिटक", correct: true },
            { text: "अभिधम्म पिटक", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंगुत्तर निकाय बौद्ध धर्म के 'सुत्त पिटक' का एक भाग है, जिसमें बुद्ध के उपदेशों का संग्रह है और इसी में 16 महाजनपदों का उल्लेख मिलता है।"
    },
    {
        question: "'महायान' संप्रदाय की शिक्षाओं का केंद्र कहाँ था?",
        answers: [
            { text: "दक्षिण एशिया", correct: false },
            { text: "दक्षिण-पूर्व एशिया", correct: false },
            { text: "पूर्वी और मध्य एशिया", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महायान बौद्ध धर्म मुख्य रूप से चीन, जापान, कोरिया, तिब्बत और मध्य एशिया में फैला, जबकि हीनयान दक्षिण एशिया में फैला।"
    },
    {
        question: "बौद्ध संघ में प्रवेश करने के लिए क्या आवश्यक था?",
        answers: [
            { text: "केवल पुरुष होना", correct: false },
            { text: "20 वर्ष से अधिक आयु", correct: false },
            { text: "माता-पिता की अनुमति", correct: true },
            { text: "उपर्युक्त सभी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध संघ में प्रवेश पाने के लिए माता-पिता की अनुमति अनिवार्य थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके अतिरिक्त, व्यक्ति की आयु 15 वर्ष से अधिक होनी चाहिए थी।"
    },
    {
        question: "'नागार्जुन' किस शासक के समकालीन थे?",
        answers: [
            { text: "अशोक", correct: false },
            { text: "कनिष्क", correct: true },
            { text: "हर्षवर्धन", correct: false },
            { text: "समुद्रगुप्त", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महान बौद्ध दार्शनिक नागार्जुन कुषाण शासक कनिष्क के समकालीन थे।"
    },
    {
        question: "बुद्ध की मृत्यु के बाद कौन-सा भिक्षु संघ का प्रमुख बना?",
        answers: [
            { text: "आनंद", correct: false },
            { text: "उपालि", correct: false },
            { text: "महाकश्यप", correct: false },
            { text: "किसी ने नहीं", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुद्ध ने अपनी मृत्यु से पहले यह स्पष्ट कर दिया था कि उनके बाद कोई भी उनका उत्तराधिकारी नहीं होगा।"
    },
    {
        question: "'बुद्धचरित' नामक ग्रंथ में बुद्ध के जीवन का वर्णन किस भाषा में है?",
        answers: [
            { text: "पाली", correct: false },
            { text: "प्राकृत", correct: false },
            { text: "संस्कृत", correct: true },
            { text: "मगधी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अश्वघोष द्वारा रचित 'बुद्धचरित' संस्कृत भाषा में लिखा गया था।"
    },
    {
        question: "'हीनयान' और 'महायान' में विभाजन का प्रमुख कारण क्या था?",
        answers: [
            { text: "भाषा का अंतर", correct: false },
            { text: "भौगोलिक दूरी", correct: false },
            { text: "ईश्वर की अवधारणा में मतभेद", correct: false },
            { text: "सिद्धांतों और नियमों में लचीलापन", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीनयान संप्रदाय बुद्ध के मूल और कठोर नियमों का पालन करता था, जबकि महायान संप्रदाय ने नियमों में लचीलापन लाया और मूर्ति पूजा को अपनाया।<br><br><i class='fa-solid fa-angles-right icon'></i> यही मुख्य विभाजन का कारण था।"
    },
    {
        question: "'द्वितीय बौद्ध संगीति' का आयोजन किस राजा के शासनकाल में हुआ था?",
        answers: [
            { text: "अजातशत्रु", correct: false },
            { text: "कालासोक", correct: true },
            { text: "अशोक", correct: false },
            { text: "कनिष्क", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्वितीय बौद्ध संगीति का आयोजन शिशुनाग वंश के शासक कालाशोक के शासनकाल में वैशाली में हुआ था।"
    },
    {
        question: "'बौद्ध धर्म' में 'अष्टांगिक मार्ग' को क्या कहा गया है?",
        answers: [
            { text: "मध्यम मार्ग", correct: true },
            { text: "निर्वाण मार्ग", correct: false },
            { text: "मोक्ष मार्ग", correct: false },
            { text: "ज्ञान मार्ग", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अष्टांगिक मार्ग' को मध्यम मार्ग भी कहा जाता है, क्योंकि यह अत्यधिक भोग और कठोर तपस्या के बीच का रास्ता है।"
    },
    {
        question: "'बुद्ध' ने अपने उपदेशों में किस पर सर्वाधिक बल दिया?",
        answers: [
            { text: "ईश्वर की भक्ति", correct: false },
            { text: "कर्मों पर", correct: true },
            { text: "पुनर्जन्म पर", correct: false },
            { text: "तपस्या पर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुद्ध ने अपने उपदेशों में कर्मों की शुद्धता पर सर्वाधिक बल दिया, क्योंकि उनका मानना था कि व्यक्ति के कर्म ही उसके भविष्य का निर्धारण करते हैं।"
    },
    {
        question: "'हीनयान' संप्रदाय किस भाषा को प्राथमिकता देता था?",
        answers: [
            { text: "संस्कृत", correct: false },
            { text: "पाली", correct: true },
            { text: "प्राकृत", correct: false },
            { text: "अपभ्रंश", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीनयान संप्रदाय बुद्ध के मूल उपदेशों का पालन करता था, जो पाली भाषा में दिए गए थे।"
    },
    {
        question: "'महायान' संप्रदाय किस भाषा को प्राथमिकता देता था?",
        answers: [
            { text: "पाली", correct: false },
            { text: "संस्कृत", correct: true },
            { text: "प्राकृत", correct: false },
            { text: "मगधी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महायान संप्रदाय ने अपनी शिक्षाओं और ग्रंथों के लिए संस्कृत भाषा का प्रयोग किया।"
    },
    {
        question: "'सुत्त पिटक' का संकलन किसने किया था?",
        answers: [
            { text: "उपालि", correct: false },
            { text: "महाकश्यप", correct: false },
            { text: "आनंद", correct: true },
            { text: "अश्वघोष", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रथम बौद्ध संगीति में बुद्ध के प्रिय शिष्य आनंद ने 'सुत्त पिटक' का संकलन किया था।"
    },
    {
        question: "'विनय पिटक' का संकलन किसने किया था?",
        answers: [
            { text: "आनंद", correct: false },
            { text: "उपालि", correct: true },
            { text: "महाकश्यप", correct: false },
            { text: "अश्वघोष", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रथम बौद्ध संगीति में उपालि ने 'विनय पिटक' का संकलन किया था।"
    },
    {
        question: "'बुद्ध' का जन्म कहाँ हुआ था?",
        answers: [
            { text: "कपिलवस्तु", correct: false },
            { text: "लुम्बिनी", correct: true },
            { text: "वैशाली", correct: false },
            { text: "बोधगया", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतम बुद्ध का जन्म 563 ईसा पूर्व में नेपाल के लुम्बिनी में हुआ था।"
    },
    {
        question: "बौद्ध धर्म के अनुसार, 'संसार दुःखों से भरा है' यह सिद्धांत किस आर्य सत्य में है?",
        answers: [
            { text: "प्रथम आर्य सत्य", correct: true },
            { text: "द्वितीय आर्य सत्य", correct: false },
            { text: "तृतीय आर्य सत्य", correct: false },
            { text: "चतुर्थ आर्य सत्य", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुद्ध के प्रथम आर्य सत्य के अनुसार, संसार दुःखमय है।"
    },
    {
        question: "'जातक' कथाओं का संबंध किस पिटक से है?",
        answers: [
            { text: "विनय पिटक", correct: false },
            { text: "सुत्त पिटक", correct: true },
            { text: "अभिधम्म पिटक", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जातक कथाएँ सुत्त पिटक के 'खुद्दक निकाय' का हिस्सा हैं।"
    },
    {
        question: "'बौद्ध धर्म' के किस संप्रदाय में 'मूर्ति पूजा' नहीं होती है?",
        answers: [
            { text: "महायान", correct: false },
            { text: "वज्रयान", correct: false },
            { text: "हीनयान", correct: true },
            { text: "सहजयान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीनयान संप्रदाय बुद्ध को एक महापुरुष मानकर उनकी प्रतीकात्मक पूजा करता है, न कि मूर्ति पूजा।"
    },
    {
        question: "'विक्रमशिला विश्वविद्यालय' को किसने नष्ट किया था?",
        answers: [
            { text: "बख्तियार खिलजी", correct: true },
            { text: "मोहम्मद गोरी", correct: false },
            { text: "महमूद गजनवी", correct: false },
            { text: "कुतुबुद्दीन ऐबक", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बख्तियार खिलजी ने नालंदा के साथ-साथ विक्रमशिला विश्वविद्यालय को भी नष्ट कर दिया था।"
    },
    {
        question: "'बौद्ध' धर्म के अनुसार, 'संसार दुःखों का कारण है' यह सिद्धांत किस आर्य सत्य में है?",
        answers: [
            { text: "प्रथम आर्य सत्य", correct: false },
            { text: "द्वितीय आर्य सत्य", correct: true },
            { text: "तृतीय आर्य सत्य", correct: false },
            { text: "चतुर्थ आर्य सत्य", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुद्ध के द्वितीय आर्य सत्य के अनुसार, दुःखों का कारण तृष्णा (इच्छा) है।"
    },
    {
        question: "'बौद्ध धर्म' के किस सिद्धांत को 'क्षणभंगवाद' भी कहते हैं?",
        answers: [
            { text: "अनात्मवाद", correct: false },
            { text: "प्रतित्यसमुत्पाद", correct: true },
            { text: "मध्यम मार्ग", correct: false },
            { text: "शून्यवाद", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतित्यसमुत्पाद का सिद्धांत बताता है कि हर वस्तु किसी न किसी कारण से उत्पन्न होती है और लगातार बदलती रहती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस परिवर्तनशीलता के कारण इसे 'क्षणभंगवाद' भी कहा जाता है।"
    },
    {
        question: "'बुद्ध' ने किस स्थान पर ज्ञान प्राप्त करने के बाद अपना पहला उपदेश दिया था?",
        answers: [
            { text: "लुम्बिनी", correct: false },
            { text: "बोधगया", correct: false },
            { text: "सारनाथ", correct: true },
            { text: "कुशीनगर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ज्ञान प्राप्ति के बाद, बुद्ध ने अपना पहला उपदेश सारनाथ में दिया था, जिसे धर्मचक्र प्रवर्तन कहा जाता है।"
    },
    {
        question: "'नालंदा विश्वविद्यालय' की स्थापना किस वंश के शासकों ने की थी?",
        answers: [
            { text: "मौर्य वंश", correct: false },
            { text: "गुप्त वंश", correct: true },
            { text: "पाल वंश", correct: false },
            { text: "वर्धन वंश", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नालंदा विश्वविद्यालय की स्थापना गुप्त शासक कुमारगुप्त प्रथम ने की थी।"
    },
    {
        question: "'अभिधम्म पिटक' में किसका संकलन है?",
        answers: [
            { text: "बुद्ध के उपदेश", correct: false },
            { text: "बौद्ध संघ के नियम", correct: false },
            { text: "बौद्ध दर्शन", correct: true },
            { text: "जातक कथाएँ", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अभिधम्म पिटक में बौद्ध धर्म के दार्शनिक और मनोवैज्ञानिक सिद्धांतों का संग्रह है।"
    },
    {
        question: "'मिलिंदपन्हो' किस भाषा में लिखा गया है?",
        answers: [
            { text: "संस्कृत", correct: false },
            { text: "प्राकृत", correct: false },
            { text: "पाली", correct: true },
            { text: "मगधी", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मिलिंदपन्हो' नामक ग्रंथ पाली भाषा में लिखा गया है।"
    },
    {
        question: "'बुद्ध' के गृह त्याग को किस नाम से जाना जाता है?",
        answers: [
            { text: "महापरिनिर्वाण", correct: false },
            { text: "महाभिनिष्क्रमण", correct: true },
            { text: "धर्मचक्र प्रवर्तन", correct: false },
            { text: "संबोधि", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 29 वर्ष की आयु में बुद्ध के गृह त्याग की घटना को महाभिनिष्क्रमण कहा जाता है।"
    },
    {
        question: "'अजातशत्रु' किस वंश का शासक था, जिसके समय में प्रथम बौद्ध संगीति हुई थी?",
        answers: [
            { text: "मौर्य वंश", correct: false },
            { text: "हर्यक वंश", correct: true },
            { text: "शिशुनाग वंश", correct: false },
            { text: "नंद वंश", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रथम बौद्ध संगीति का आयोजन हर्यक वंश के शासक अजातशत्रु के शासनकाल में हुआ था।"
    },
    {
        question: "'द्वितीय बौद्ध संगीति' का आयोजन किस राजा के समय में हुआ था?",
        answers: [
            { text: "अशोक", correct: false },
            { text: "अजातशत्रु", correct: false },
            { text: "कालाशोक", correct: true },
            { text: "कनिष्क", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्वितीय बौद्ध संगीति का आयोजन शिशुनाग वंश के शासक कालाशोक के शासनकाल में हुआ था।"
    },
    {
        question: "'बौद्ध' धर्म के अनुसार, 'मोक्ष' को क्या कहते हैं?",
        answers: [
            { text: "निर्वाण", correct: true },
            { text: "संबोधि", correct: false },
            { text: "महाभिनिष्क्रमण", correct: false },
            { text: "धम्म", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध धर्म में जीवन-मरण के चक्र से मुक्ति को निर्वाण कहा जाता है।"
    },
    {
        question: "'चौथी बौद्ध संगीति' का आयोजन कहाँ हुआ था?",
        answers: [
            { text: "राजगृह", correct: false },
            { text: "वैशाली", correct: false },
            { text: "पाटलिपुत्र", correct: false },
            { text: "कुंडलवन", correct: true }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चौथी बौद्ध संगीति का आयोजन कुषाण शासक कनिष्क के शासनकाल में कुंडलवन (कश्मीर) में हुआ था।"
    },
    {
        question: "'बुद्ध' का जन्म कहाँ हुआ था?",
        answers: [
            { text: "कपिलवस्तु के पास लुम्बिनी", correct: true },
            { text: "बोधगया", correct: false },
            { text: "सारनाथ", correct: false },
            { text: "कुशीनगर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतम बुद्ध का जन्म कपिलवस्तु के पास स्थित लुम्बिनी नामक स्थान पर हुआ था।"
    },
    {
        question: "'बौद्ध' धर्म में 'अष्टांगिक मार्ग' को किस नाम से जाना जाता है?",
        answers: [
            { text: "मध्यम मार्ग", correct: true },
            { text: "ज्ञान मार्ग", correct: false },
            { text: "मोक्ष मार्ग", correct: false },
            { text: "तपस्या मार्ग", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अष्टांगिक मार्ग को मध्यम मार्ग भी कहते हैं, क्योंकि यह कठोर तपस्या और भोग-विलास दोनों के बीच का रास्ता है।"
    },
    {
        question: "'महायान' संप्रदाय की विशेषता क्या है?",
        answers: [
            { text: "प्रतीकात्मक पूजा", correct: false },
            { text: "बुद्ध को महामानव मानना", correct: false },
            { text: "बुद्ध को ईश्वर मानकर मूर्ति पूजा करना", correct: true },
            { text: "पाली भाषा का प्रयोग", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महायान संप्रदाय ने बुद्ध को ईश्वर का दर्जा दिया और उनकी मूर्ति पूजा शुरू की।"
    },
    {
        question: "'त्रिपिटक' में कौन-सा भाग बौद्ध संघ के नियमों से संबंधित है?",
        answers: [
            { text: "विनय पिटक", correct: true },
            { text: "सुत्त पिटक", correct: false },
            { text: "अभिधम्म पिटक", correct: false },
            { text: "जातक", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विनय पिटक में बौद्ध संघ के भिक्षुओं और भिक्षुणियों के लिए बनाए गए नियमों का संकलन है।"
    },
    {
        question: "'जातक' कथाओं का संबंध किस धर्म से है?",
        answers: [
            { text: "जैन धर्म", correct: false },
            { text: "बौद्ध धर्म", correct: true },
            { text: "हिंदू धर्म", correct: false },
            { text: "सिख धर्म", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जातक कथाएँ बौद्ध धर्म से संबंधित हैं और इनमें बुद्ध के पूर्व जन्मों की कहानियाँ हैं।"
    },
    {
        question: "'शून्यवाद' का सिद्धांत किस बौद्ध दार्शनिक ने दिया था?",
        answers: [
            { text: "अश्वघोष", correct: false },
            { text: "नागार्जुन", correct: true },
            { text: "वसुमित्र", correct: false },
            { text: "नागसेन", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नागार्जुन ने शून्यवाद (माध्यमिक दर्शन) का सिद्धांत दिया था, जो महायान बौद्ध धर्म का एक प्रमुख दार्शनिक विचार है।"
    },
    {
        question: "'द्वितीय बौद्ध संगीति' का अध्यक्ष कौन था?",
        answers: [
            { text: "महाकश्यप", correct: false },
            { text: "सबाकामी", correct: true },
            { text: "मोग्गलिपुत्त तिस्स", correct: false },
            { text: "वसुमित्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्वितीय बौद्ध संगीति के अध्यक्ष सबाकामी थे।"
    },
    {
        question: "'तृतीय बौद्ध संगीति' का आयोजन किस शासक के समय में हुआ था?",
        answers: [
            { text: "अजातशत्रु", correct: false },
            { text: "कालाशोक", correct: false },
            { text: "अशोक", correct: true },
            { text: "कनिष्क", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तृतीय बौद्ध संगीति का आयोजन मौर्य शासक अशोक के शासनकाल में हुआ था।"
    },
    {
        question: "'बौद्ध धर्म' और 'जैन धर्म' में क्या समानता है?",
        answers: [
            { text: "दोनों ने ईश्वर को स्वीकार किया।", correct: false },
            { text: "दोनों ने वैदिक कर्मकांडों का विरोध किया।", correct: true },
            { text: "दोनों ने जाति व्यवस्था का समर्थन किया।", correct: false },
            { text: "दोनों ने तपस्या को मोक्ष का एकमात्र मार्ग माना।", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध और जैन दोनों धर्मों ने वैदिक कर्मकांडों और बलि प्रथा का विरोध किया और एक सरल जीवन शैली पर जोर दिया।"
    },
    {
        question: "'नालंदा विश्वविद्यालय' को किसने नष्ट किया था?",
        answers: [
            { text: "महमूद गजनवी", correct: false },
            { text: "मोहम्मद गोरी", correct: false },
            { text: "बख्तियार खिलजी", correct: true },
            { text: "तैमूर", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 12वीं शताब्दी में, तुर्क सेनापति बख्तियार खिलजी ने नालंदा विश्वविद्यालय को नष्ट कर दिया था।"
    },
    {
        question: "'बौद्ध' धर्म का कौन-सा संप्रदाय बुद्ध को एक महापुरुष मानता है?",
        answers: [
            { text: "हीनयान", correct: true },
            { text: "महायान", correct: false },
            { text: "वज्रयान", correct: false },
            { text: "सहजयान", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीनयान संप्रदाय बुद्ध को एक महामानव या महापुरुष मानता है, जबकि महायान संप्रदाय उन्हें ईश्वर मानता है।"
    },
    {
        question: "'बुद्ध' के उपदेशों का संकलन किस पिटक में है?",
        answers: [
            { text: "विनय पिटक", correct: false },
            { text: "सुत्त पिटक", correct: true },
            { text: "अभिधम्म पिटक", correct: false },
            { text: "जातक", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुत्त पिटक में बुद्ध के उपदेशों और संवादों का संग्रह है।"
    },
    {
        question: "'बौद्ध धर्म' में 'निर्वाण' शब्द का क्या अर्थ है?",
        answers: [
            { text: "इच्छाओं का बुझ जाना", correct: true },
            { text: "ज्ञान की प्राप्ति", correct: false },
            { text: "जन्म-मरण का चक्र", correct: false },
            { text: "मृत्यु", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निर्वाण का अर्थ है सभी इच्छाओं और लालसाओं का अंत, जिससे दुखों से मुक्ति मिलती है।"
    },
    {
        question: "'सांची' का स्तूप किस राज्य में है?",
        answers: [
            { text: "उत्तर प्रदेश", correct: false },
            { text: "बिहार", correct: false },
            { text: "मध्य प्रदेश", correct: true },
            { text: "महाराष्ट्र", correct: false }
        ],
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सम्राट अशोक द्वारा बनवाया गया सांची का स्तूप भारत के मध्य प्रदेश राज्य में स्थित है।"
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