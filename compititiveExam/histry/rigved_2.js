const questions = [
    {
        topHeading: "ऋग्वेद पर आधारित बहुविकल्पी प्रश्न part 2 (quiz_no.50)"
    },
    {
        question: "ऋग्वेद में 'विश' (Vish) शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "परिवार", correct: false },
            { text: "गांव", correct: false },
            { text: "कबीले का उप-समूह", correct: true },
            { text: "एक धार्मिक संस्था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक समाज में 'जन' (कबीला) कई 'विशों' (उप-समूहों) में विभाजित था, और 'विश' कई 'ग्रामों' (गांवों) में विभाजित था।"
    },
    {
        question: "ऋग्वेद में किस देवता को 'असुर' भी कहा गया है?",
        answers: shuffle([
            { text: "इंद्र", correct: false },
            { text: "अग्नि", correct: false },
            { text: "वरुण", correct: true },
            { text: "सोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में 'असुर' शब्द का प्रयोग शक्तिशाली देवता के लिए किया जाता था, और वरुण को भी एक शक्तिशाली देवता के रूप में 'असुर' कहा गया है।"
    },
    {
        question: "ऋग्वैदिक काल में 'रथ' का उपयोग किसलिए किया जाता था?",
        answers: shuffle([
            { text: "कृषि", correct: false },
            { text: "परिवहन", correct: false },
            { text: "युद्ध", correct: true },
            { text: "व्यापार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक आर्यों के लिए रथ युद्ध का एक महत्वपूर्ण साधन था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह घोड़ागाड़ी थी और इसका उपयोग युद्ध में किया जाता था।"
    },
    {
        question: "ऋग्वेद में 'अर्यमा' (Aryama) किस देवता से संबंधित है?",
        answers: shuffle([
            { text: "विवाह", correct: true },
            { text: "युद्ध", correct: false },
            { text: "वर्षा", correct: false },
            { text: "अग्नि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अर्यमा को विवाह और परिवार के देवता के रूप में जाना जाता है।"
    },
    {
        question: "'दशराज्ञ युद्ध' का उल्लेख ऋग्वेद के किस मंडल में है?",
        answers: shuffle([
            { text: "तीसरे", correct: false },
            { text: "पांचवें", correct: false },
            { text: "सातवें", correct: true },
            { text: "दसवें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दशराज्ञ युद्ध' (दस राजाओं का युद्ध) का वर्णन ऋग्वेद के सातवें मंडल में मिलता है, जिसकी रचना ऋषि वशिष्ठ ने की थी।"
    },
    {
        question: "ऋग्वेद में किस देवता को 'पुरंदर' (पुरंदर) कहा गया है?",
        answers: shuffle([
            { text: "अग्नि", correct: false },
            { text: "इंद्र", correct: true },
            { text: "वरुण", correct: false },
            { text: "सोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पुरंदर' का अर्थ है 'किला तोड़ने वाला', जो ऋग्वेद में इंद्र के लिए प्रयुक्त हुआ है।"
    },
    {
        question: "ऋग्वेद के तीसरे मंडल की रचना किसने की थी?",
        answers: shuffle([
            { text: "ऋषि वशिष्ठ", correct: false },
            { text: "ऋषि विश्वामित्र", correct: true },
            { text: "ऋषि गृत्समद", correct: false },
            { text: "ऋषि अत्रि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद के तीसरे मंडल, जिसमें गायत्री मंत्र भी शामिल है, की रचना ऋषि विश्वामित्र ने की थी।"
    },
    {
        question: "ऋग्वेद में 'दस्यु' शब्द का प्रयोग किसके लिए किया गया है?",
        answers: shuffle([
            { text: "पुरोहित", correct: false },
            { text: "गैर-आर्य लोग", correct: true },
            { text: "राजा", correct: false },
            { text: "सैनिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में 'दस्यु' शब्द का प्रयोग उन लोगों के लिए किया गया है जो आर्यों की भाषा नहीं बोलते थे और उनकी संस्कृति से भिन्न थे।"
    },
    {
        question: "ऋग्वैदिक काल में 'निष्क' (Nishka) क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का बर्तन", correct: false },
            { text: "एक प्रकार का कर", correct: false },
            { text: "गले का हार", correct: true },
            { text: "एक प्रकार का हथियार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक काल में 'निष्क' गले का एक सोने का हार था, जिसका उपयोग विनिमय के माध्यम के रूप में भी होता था।"
    },
    {
        question: "ऋग्वेद में सबसे अधिक सूक्त किस देवता को समर्पित हैं?",
        answers: shuffle([
            { text: "वरुण", correct: false },
            { text: "अग्नि", correct: false },
            { text: "इंद्र", correct: true },
            { text: "सोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में इंद्र को 250 सूक्त और अग्नि को 200 सूक्त समर्पित हैं, जो उन्हें सबसे महत्वपूर्ण देवता बनाते हैं।"
    },
    {
        question: "ऋग्वैदिक काल में 'पशुओं की खोज' के लिए किस शब्द का प्रयोग किया जाता था?",
        answers: shuffle([
            { text: "गवेषणा", correct: true },
            { text: "गोधन", correct: false },
            { text: "गोचर", correct: false },
            { text: "गाय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गवेषणा' शब्द का प्रयोग गायों की खोज या युद्ध के लिए किया जाता था, जो दर्शाता है कि गायें उस समय की सबसे मूल्यवान संपत्ति थीं।"
    },
    {
        question: "ऋग्वेद में 'अदिति' (Aditi) किसे समर्पित है?",
        answers: shuffle([
            { text: "मृत्यु की देवी", correct: false },
            { text: "प्रभात की देवी", correct: false },
            { text: "वनस्पति की देवी", correct: false },
            { text: "अनंत की देवी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अदिति को देवताओं की माता और अनंत, स्वतंत्रता और सृजनात्मकता की देवी के रूप में जाना जाता है।"
    },
    {
        question: "ऋग्वेद में 'मृग' शब्द का प्रयोग किसके लिए किया गया है?",
        answers: shuffle([
            { text: "हिरण", correct: true },
            { text: "जानवर", correct: false },
            { text: "शिकारी", correct: false },
            { text: "वन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मृग' शब्द का प्रयोग हिरण के लिए किया गया है, और 'मृगया' शब्द शिकार के लिए।"
    },
    {
        question: "ऋग्वेद में 'सोमरस' क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का फल", correct: false },
            { text: "एक प्रकार का पेय", correct: true },
            { text: "एक प्रकार का जानवर", correct: false },
            { text: "एक प्रकार का फूल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सोमरस' एक पवित्र पेय था जो सोम नामक पौधे से बनाया जाता था और यज्ञों में देवताओं को अर्पित किया जाता था।"
    },
    {
        question: "ऋग्वैदिक काल में 'ग्रामणी' (Gramani) कौन था?",
        answers: shuffle([
            { text: "गांव का सबसे बुजुर्ग व्यक्ति", correct: false },
            { text: "गांव का मुखिया", correct: true },
            { text: "गांव का पुरोहित", correct: false },
            { text: "गांव का सैनिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ग्रामणी' गांव का मुखिया होता था और वह 'विश' (कबीले के उप-समूह) के प्रमुख 'विशपति' को जवाबदेह था।"
    },
    {
        question: "'दशराज्ञ युद्ध' का उल्लेख ऋग्वेद के किस मंडल में है?",
        answers: shuffle([
            { text: "तीसरा", correct: false },
            { text: "पांचवां", correct: false },
            { text: "सातवां", correct: true },
            { text: "दसवां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दशराज्ञ युद्ध' (दस राजाओं का युद्ध) का वर्णन ऋग्वेद के सातवें मंडल में मिलता है, जिसकी रचना ऋषि वशिष्ठ ने की थी।"
    },
    {
        question: "ऋग्वेद के दसवें मंडल में किस नदी का उल्लेख मिलता है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: false },
            { text: "सिंधु", correct: false },
            { text: "इन सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद के दसवें मंडल के 'नदी सूक्त' में गंगा, यमुना और सिंधु सहित कई नदियों का उल्लेख है।"
    },
    {
        question: "ऋग्वैदिक काल में 'निष्क' (Nishka) क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का कर", correct: false },
            { text: "एक प्रकार का आभूषण", correct: true },
            { text: "एक प्रकार का हथियार", correct: false },
            { text: "एक प्रकार का बर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में 'निष्क' शब्द का प्रयोग गले में पहनने वाले सोने के आभूषण के लिए किया गया है, जो बाद में विनिमय के माध्यम के रूप में भी प्रयोग होने लगा।"
    },
    {
        question: "ऋग्वेद में 'उषा' (Usha) किसे समर्पित है?",
        answers: shuffle([
            { text: "वर्षा", correct: false },
            { text: "प्रभात", correct: true },
            { text: "रात्रि", correct: false },
            { text: "मृत्यु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उषा को ऋग्वेद में प्रभात की देवी के रूप में वर्णित किया गया है, जो अँधेरे से प्रकाश लाती है।"
    },
    {
        question: "'ऋग्वेद' के किस मंडल को 'परिवार मंडल' कहा जाता है?",
        answers: shuffle([
            { text: "पहला", correct: false },
            { text: "तीसरा", correct: false },
            { text: "दूसरा से सातवां", correct: true },
            { text: "दसवां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद के दूसरे से सातवें मंडल को 'वंश मंडल' या 'परिवार मंडल' कहा जाता है क्योंकि इनकी रचना विभिन्न ऋषि-परिवारों ने की थी।"
    },
    {
        question: "ऋग्वैदिक काल में 'वैश्य' शब्द का क्या अर्थ था?",
        answers: shuffle([
            { text: "पुरोहित", correct: false },
            { text: "शासक", correct: false },
            { text: "व्यापारी और किसान", correct: true },
            { text: "सेवक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक काल में 'वैश्य' शब्द का प्रयोग व्यापारियों, किसानों और आम नागरिकों के लिए किया जाता था, जो समाज के आर्थिक कार्यों का संचालन करते थे।"
    },
    {
        question: "ऋग्वेद में 'अरण्यनी' (Aranyani) किसे कहा गया है?",
        answers: shuffle([
            { text: "पृथ्वी की देवी", correct: false },
            { text: "वन की देवी", correct: true },
            { text: "नदी की देवी", correct: false },
            { text: "हवा की देवी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में अरण्यनी को वन की देवी के रूप में वर्णित किया गया है, जो वन में रहने वाले प्राणियों की संरक्षक थीं।"
    },
    {
        question: "ऋग्वेद में 'पुर' (Pur) शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "नगर या किला", correct: true },
            { text: "गांव", correct: false },
            { text: "घर", correct: false },
            { text: "सेना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में 'पुर' शब्द का प्रयोग किलेबंद नगर या किले के लिए किया जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> इंद्र को 'पुरंदर' (किले को तोड़ने वाला) कहा गया है।"
    },
    {
        question: "ऋग्वेद का संकलन किसने किया था?",
        answers: shuffle([
            { text: "विश्वामित्र", correct: false },
            { text: "वेद व्यास", correct: true },
            { text: "वाल्मीकि", correct: false },
            { text: "वशिष्ठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेदों को 'अपौरुषेय' (मानव द्वारा रचित नहीं) माना जाता है, लेकिन उनके संकलन का श्रेय महर्षि वेद व्यास को दिया जाता है।"
    },
    {
        question: "ऋग्वेद में 'जन' (Jana) शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "परिवार", correct: false },
            { text: "ग्राम", correct: false },
            { text: "कबीला या जनजाति", correct: true },
            { text: "राज्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में 'जन' शब्द का प्रयोग कबीले या जनजाति के लिए किया गया है, जो उस समय की सबसे बड़ी राजनीतिक इकाई थी।"
    },
    {
        question: "ऋग्वेद में 'मरुत' (Marut) कौन थे?",
        answers: shuffle([
            { text: "वर्षा के देवता", correct: false },
            { text: "तूफान और आंधी के देवता", correct: true },
            { text: "अग्नि के देवता", correct: false },
            { text: "युद्ध के देवता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में मरुत को इंद्र का मित्र और तूफान तथा आंधी का देवता माना गया है।"
    },
    {
        question: "ऋग्वैदिक काल में 'पशुओं की खोज' के लिए किस शब्द का प्रयोग किया जाता था?",
        answers: shuffle([
            { text: "गवेषणा", correct: true },
            { text: "गोधन", correct: false },
            { text: "गोचर", correct: false },
            { text: "गाय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गवेषणा' शब्द का प्रयोग गायों की खोज या युद्ध के लिए किया जाता था, जो दर्शाता है कि गायें उस समय की सबसे मूल्यवान संपत्ति थीं।"
    },
    {
        question: "ऋग्वेद में 'अदिति' (Aditi) किसे समर्पित है?",
        answers: shuffle([
            { text: "मृत्यु की देवी", correct: false },
            { text: "प्रभात की देवी", correct: false },
            { text: "वनस्पति की देवी", correct: false },
            { text: "अनंत की देवी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अदिति को देवताओं की माता और अनंत, स्वतंत्रता और सृजनात्मकता की देवी के रूप में जाना जाता है।"
    },
    {
        question: "ऋग्वेद में 'मृग' शब्द का प्रयोग किसके लिए किया गया है?",
        answers: shuffle([
            { text: "हिरण", correct: true },
            { text: "जानवर", correct: false },
            { text: "शिकारी", correct: false },
            { text: "वन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मृग' शब्द का प्रयोग हिरण के लिए किया गया है, और 'मृगया' शब्द शिकार के लिए।"
    },
    {
        question: "ऋग्वेद में 'सोमरस' क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का फल", correct: false },
            { text: "एक प्रकार का पेय", correct: true },
            { text: "एक प्रकार का जानवर", correct: false },
            { text: "एक प्रकार का फूल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सोमरस' एक पवित्र पेय था जो सोम नामक पौधे से बनाया जाता था और यज्ञों में देवताओं को अर्पित किया जाता था।"
    },
    {
        question: "ऋग्वैदिक काल में 'ग्रामणी' (Gramani) कौन था?",
        answers: shuffle([
            { text: "गांव का सबसे बुजुर्ग व्यक्ति", correct: false },
            { text: "गांव का मुखिया", correct: true },
            { text: "गांव का पुरोहित", correct: false },
            { text: "गांव का सैनिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ग्रामणी' गांव का मुखिया होता था और वह 'विश' (कबीले के उप-समूह) के प्रमुख 'विशपति' को जवाबदेह था।"
    },
    {
        question: "'दशराज्ञ युद्ध' का उल्लेख ऋग्वेद के किस मंडल में है?",
        answers: shuffle([
            { text: "तीसरा", correct: false },
            { text: "पांचवां", correct: false },
            { text: "सातवां", correct: true },
            { text: "दसवां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दशराज्ञ युद्ध' (दस राजाओं का युद्ध) का वर्णन ऋग्वेद के सातवें मंडल में मिलता है, जिसकी रचना ऋषि वशिष्ठ ने की थी।"
    },
    {
        question: "ऋग्वेद के दसवें मंडल में किस नदी का उल्लेख मिलता है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: false },
            { text: "सिंधु", correct: false },
            { text: "इन सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद के दसवें मंडल के 'नदी सूक्त' में गंगा, यमुना और सिंधु सहित कई नदियों का उल्लेख है।"
    },
    {
        question: "ऋग्वैदिक काल में 'निष्क' (Nishka) क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का कर", correct: false },
            { text: "एक प्रकार का आभूषण", correct: true },
            { text: "एक प्रकार का हथियार", correct: false },
            { text: "एक प्रकार का बर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में 'निष्क' शब्द का प्रयोग गले में पहनने वाले सोने के आभूषण के लिए किया गया है, जो बाद में विनिमय के माध्यम के रूप में भी प्रयोग होने लगा।"
    },
    {
        question: "ऋग्वेद में 'उषा' (Usha) किसे समर्पित है?",
        answers: shuffle([
            { text: "वर्षा", correct: false },
            { text: "प्रभात", correct: true },
            { text: "रात्रि", correct: false },
            { text: "मृत्यु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उषा को ऋग्वेद में प्रभात की देवी के रूप में वर्णित किया गया है, जो अँधेरे से प्रकाश लाती है।"
    },
    {
        question: "'ऋग्वेद' के किस मंडल को 'परिवार मंडल' कहा जाता है?",
        answers: shuffle([
            { text: "पहला", correct: false },
            { text: "तीसरा", correct: false },
            { text: "दूसरा से सातवां", correct: true },
            { text: "दसवां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद के दूसरे से सातवें मंडल को 'वंश मंडल' या 'परिवार मंडल' कहा जाता है क्योंकि इनकी रचना विभिन्न ऋषि-परिवारों ने की थी।"
    },
    {
        question: "ऋग्वैदिक काल में 'वैश्य' शब्द का क्या अर्थ था?",
        answers: shuffle([
            { text: "पुरोहित", correct: false },
            { text: "शासक", correct: false },
            { text: "व्यापारी और किसान", correct: true },
            { text: "सेवक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक काल में 'वैश्य' शब्द का प्रयोग व्यापारियों, किसानों और आम नागरिकों के लिए किया जाता था, जो समाज के आर्थिक कार्यों का संचालन करते थे।"
    },
    {
        question: "ऋग्वेद में 'अरण्यनी' (Aranyani) किसे कहा गया है?",
        answers: shuffle([
            { text: "पृथ्वी की देवी", correct: false },
            { text: "वन की देवी", correct: true },
            { text: "नदी की देवी", correct: false },
            { text: "हवा की देवी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में अरण्यनी को वन की देवी के रूप में वर्णित किया गया है, जो वन में रहने वाले प्राणियों की संरक्षक थीं।"
    },
    {
        question: "ऋग्वेद में 'पुर' (Pur) शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "नगर या किला", correct: true },
            { text: "गांव", correct: false },
            { text: "घर", correct: false },
            { text: "सेना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में 'पुर' शब्द का प्रयोग किलेबंद नगर या किले के लिए किया जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> इंद्र को 'पुरंदर' (किले को तोड़ने वाला) कहा गया है।"
    },
    {
        question: "ऋग्वेद का संकलन किसने किया था?",
        answers: shuffle([
            { text: "विश्वामित्र", correct: false },
            { text: "वेद व्यास", correct: true },
            { text: "वाल्मीकि", correct: false },
            { text: "वशिष्ठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वेदों को 'अपौरुषेय' (मानव द्वारा रचित नहीं) माना जाता है, लेकिन उनके संकलन का श्रेय महर्षि वेद व्यास को दिया जाता है।"
    },
    {
        question: "ऋग्वेद में 'जन' (Jana) शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "परिवार", correct: false },
            { text: "ग्राम", correct: false },
            { text: "कबीला या जनजाति", correct: true },
            { text: "राज्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में 'जन' शब्द का प्रयोग कबीले या जनजाति के लिए किया गया है, जो उस समय की सबसे बड़ी राजनीतिक इकाई थी।"
    },
    {
        question: "ऋग्वेद में 'पितृ' (Pitri) का क्या अर्थ है?",
        answers: shuffle([
            { text: "पिता", correct: false },
            { text: "देवता", correct: false },
            { text: "पुरोहित", correct: false },
            { text: "पूर्वज", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में 'पितृ' शब्द का प्रयोग पूर्वजों के लिए किया जाता था, जिनकी पूजा भी की जाती थी।"
    },
    {
        question: "ऋग्वेद में 'विदुषी' (विदुषी) स्त्रियों के बारे में क्या कहा गया है?",
        answers: shuffle([
            { text: "उनका उल्लेख नहीं है।", correct: false },
            { text: "उनका उल्लेख केवल यज्ञों में होता है।", correct: false },
            { text: "कुछ विदुषी स्त्रियों का उल्लेख मिलता है, जैसे घोषा और अपाला।", correct: true },
            { text: "वे केवल शिक्षा के क्षेत्र में कार्य करती थीं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में घोषा, अपाला, लोपामुद्रा और विश्ववरा जैसी विदुषी स्त्रियों का उल्लेख मिलता है, जिन्होंने कुछ सूक्तों की रचना भी की थी।"
    },
    {
        question: "ऋग्वैदिक काल में 'अमाजू' (Amaju) किसे कहा जाता था?",
        answers: shuffle([
            { text: "अविवाहित स्त्रियां", correct: true },
            { text: "विवाहित स्त्रियां", correct: false },
            { text: "विधवाएं", correct: false },
            { text: "संतानहीन स्त्रियां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक काल में जीवन भर अविवाहित रहने वाली स्त्रियों को 'अमाजू' कहा जाता था।"
    },
    {
        question: "ऋग्वेद में 'ऋत' (Rta) शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "युद्ध का नियम", correct: false },
            { text: "प्राकृतिक और नैतिक व्यवस्था", correct: true },
            { text: "सामाजिक कानून", correct: false },
            { text: "धार्मिक अनुष्ठान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ऋत' ऋग्वैदिक सभ्यता का एक महत्वपूर्ण दार्शनिक सिद्धांत है, जो ब्रह्मांड और समाज को नियंत्रित करने वाली प्राकृतिक और नैतिक व्यवस्था को दर्शाता है।"
    },
    {
        question: "ऋग्वेद में 'अदिति' और 'उषा' किसे समर्पित हैं?",
        answers: shuffle([
            { text: "रात्रि की देवी", correct: false },
            { text: "युद्ध की देवी", correct: false },
            { text: "प्रभात की देवी", correct: true },
            { text: "मातृ देवी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अदिति और उषा दोनों को ऋग्वेद में प्रभात की देवी के रूप में वर्णित किया गया है।"
    },
    {
        question: "ऋग्वैदिक समाज में 'सभा' और 'समिति' क्या थीं?",
        answers: shuffle([
            { text: "राजा के दो अंगरक्षक", correct: false },
            { text: "राजा को सलाह देने वाली दो लोकप्रिय संस्थाएं", correct: true },
            { text: "दो प्रकार के धार्मिक अनुष्ठान", correct: false },
            { text: "दो अलग-अलग प्रकार के गांव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सभा और समिति राजा की शक्ति पर नियंत्रण रखने वाली दो लोकप्रिय सभाएं थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> सभा बुजुर्गों की संस्था थी, जबकि समिति सामान्य जनता की।"
    },
    {
        question: "ऋग्वेद में 'वरुण' देवता का मुख्य कार्य क्या था?",
        answers: shuffle([
            { text: "वर्षा लाना", correct: false },
            { text: "ब्रह्मांड की नैतिक व्यवस्था (ऋत) का संरक्षक", correct: true },
            { text: "वनस्पति का देवता", correct: false },
            { text: "युद्ध का देवता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वरुण को ऋग्वैदिक काल में ब्रह्मांड की नैतिक व्यवस्था (ऋत) का संरक्षक और जल का देवता माना गया है।"
    },
    {
        question: "ऋग्वेद में 'जन' (Jana) शब्द का कितनी बार उल्लेख हुआ है?",
        answers: shuffle([
            { text: "176", correct: false },
            { text: "275", correct: true },
            { text: "300", correct: false },
            { text: "400", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में 'जन' शब्द का उल्लेख लगभग 275 बार हुआ है, जबकि 'जनपद' शब्द का एक बार भी नहीं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उस समय की कबीलाई संरचना को दर्शाता है।"
    },
    {
        question: "'नासदीय सूक्त' (Nasadiya Sukta) किस मंडल में है और किससे संबंधित है?",
        answers: shuffle([
            { text: "नौवें मंडल - सृष्टि की उत्पत्ति", correct: false },
            { text: "दसवें मंडल - सृष्टि की उत्पत्ति", correct: true },
            { text: "दसवें मंडल - युद्ध", correct: false },
            { text: "तीसरे मंडल - कृषि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दसवें मंडल का 'नासदीय सूक्त' सृष्टि की उत्पत्ति और ब्रह्मांड के रहस्य से संबंधित एक दार्शनिक भजन है।"
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