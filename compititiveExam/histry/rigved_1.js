const questions = [
    {
        topHeading: "ऋग्वेद पर आधारित बहुविकल्पी प्रश्न part 1 (quiz_no.49)"
    },
    {
        question: "ऋग्वेद में कुल कितने मंडल हैं?",
        answers: shuffle([
            { text: "8", correct: false },
            { text: "9", correct: false },
            { text: "10", correct: true },
            { text: "12", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में कुल 10 मंडल हैं, जिनमें से 2 से 7 तक के मंडल सबसे प्राचीन माने जाते हैं।"
    },
    {
        question: "ऋग्वेद के किस मंडल में 'गायत्री मंत्र' का उल्लेख है?",
        answers: shuffle([
            { text: "तीसरे मंडल", correct: true },
            { text: "सातवें मंडल", correct: false },
            { text: "नौवें मंडल", correct: false },
            { text: "दसवें मंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गायत्री मंत्र का उल्लेख ऋग्वेद के तीसरे मंडल में है, जिसकी रचना ऋषि विश्वामित्र ने की थी और यह सूर्य देवता को समर्पित है।"
    },
    {
        question: "ऋग्वेद के सबसे महत्वपूर्ण देवता कौन हैं, जिनका सर्वाधिक बार उल्लेख हुआ है?",
        answers: shuffle([
            { text: "अग्नि", correct: false },
            { text: "वरुण", correct: false },
            { text: "इंद्र", correct: true },
            { text: "सोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में इंद्र का सर्वाधिक बार (लगभग 250 बार) उल्लेख किया गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्हें 'पुरंदर' (किला तोड़ने वाला) के नाम से भी जाना जाता है।"
    },
    {
        question: "ऋग्वेद के किस मंडल में 'पुरुष सूक्त' का उल्लेख है, जो चार वर्णों की उत्पत्ति का वर्णन करता है?",
        answers: shuffle([
            { text: "सातवें मंडल", correct: false },
            { text: "नौवें मंडल", correct: false },
            { text: "दसवें मंडल", correct: true },
            { text: "दूसरे मंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दसवें मंडल के 'पुरुष सूक्त' में चारों वर्णों (ब्राह्मण, क्षत्रिय, वैश्य, शूद्र) की उत्पत्ति का सर्वप्रथम उल्लेख मिलता है।"
    },
    {
        question: "ऋग्वेद में 'अग्नि' देवता का कितनी बार उल्लेख किया गया है?",
        answers: shuffle([
            { text: "250", correct: false },
            { text: "200", correct: true },
            { text: "150", correct: false },
            { text: "100", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंद्र के बाद, ऋग्वेद में अग्नि का दूसरा सबसे महत्वपूर्ण स्थान है और उनका उल्लेख लगभग 200 बार किया गया है।"
    },
    {
        question: "ऋग्वेद के नौवें मंडल में किस देवता को समर्पित सूक्त हैं?",
        answers: shuffle([
            { text: "वरुण", correct: false },
            { text: "सोम", correct: true },
            { text: "उषा", correct: false },
            { text: "मरुत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद का नौवाँ मंडल पूरी तरह से सोम देवता को समर्पित है, जो एक वनस्पति देवता हैं और जिनका उल्लेख सोमरस से संबंधित है।"
    },
    {
        question: "ऋग्वेद में उल्लिखित 'सप्तसैंधव' क्षेत्र का क्या अर्थ है?",
        answers: shuffle([
            { text: "सात पहाड़", correct: false },
            { text: "सात नदियां", correct: true },
            { text: "सात जंगल", correct: false },
            { text: "सात द्वीप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सप्त सैंधव क्षेत्र का अर्थ है 'सात नदियों का क्षेत्र', जिसमें सिंधु और उसकी सहायक नदियाँ शामिल थीं।"
    },
    {
        question: "ऋग्वेद के किस मंडल को 'वंश मंडल' या 'गोत्र मंडल' कहा जाता है?",
        answers: shuffle([
            { text: "पहला मंडल", correct: false },
            { text: "दूसरा से सातवां मंडल", correct: true },
            { text: "आठवां मंडल", correct: false },
            { text: "दसवां मंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद के दूसरे से सातवें मंडल को सबसे प्राचीन माना जाता है और ये विशिष्ट ऋषियों (गृत्समद, विश्वामित्र, वामदेव, अत्रि, भारद्वाज, वशिष्ठ) के वंशों से संबंधित हैं, इसलिए इन्हें वंश मंडल कहते हैं।"
    },
    {
        question: "ऋग्वेद में 'पुरंदर' शब्द का प्रयोग किसके लिए किया गया है?",
        answers: shuffle([
            { text: "वरुण", correct: false },
            { text: "इंद्र", correct: true },
            { text: "अग्नि", correct: false },
            { text: "रुद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पुरंदर' का अर्थ है 'किला तोड़ने वाला', जो ऋग्वेद में इंद्र के लिए प्रयोग किया गया है।"
    },
    {
        question: "ऋग्वेद में 'सरस्वती' को किस रूप में वर्णित किया गया है?",
        answers: shuffle([
            { text: "युद्ध की देवी", correct: false },
            { text: "धन की देवी", correct: false },
            { text: "नदी की देवी और वाक्देवी", correct: true },
            { text: "उषा की देवी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में सरस्वती को एक महत्वपूर्ण नदी की देवी और ज्ञान, वाणी तथा कला की देवी के रूप में वर्णित किया गया है।"
    },
    {
        question: "ऋग्वेद का सबसे नया और सबसे प्राचीन मंडल कौन सा है?",
        answers: shuffle([
            { text: "पहला और दूसरा", correct: false },
            { text: "दसवां और दूसरा", correct: false },
            { text: "पहला और दसवां", correct: true },
            { text: "दसवां और सातवां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद के दस मंडल में से पहला और दसवां मंडल सबसे नए हैं, जबकि दूसरा से सातवां मंडल सबसे प्राचीन माने जाते हैं।"
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
        question: "ऋग्वेद में 'दशराज्ञ युद्ध' (Battle of Ten Kings) का उल्लेख किस नदी के किनारे हुआ था?",
        answers: shuffle([
            { text: "यमुना", correct: false },
            { text: "सरस्वती", correct: false },
            { text: "परुषणी (रावी)", correct: true },
            { text: "सिंधु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दशराज्ञ युद्ध का वर्णन ऋग्वेद के सातवें मंडल में है, जो भरत जन के राजा सुदास और दस राजाओं के संघ के बीच परुषणी (आधुनिक रावी) नदी के किनारे लड़ा गया था।"
    },
    {
        question: "ऋग्वेद के अनुसार, 'मरुत' कौन थे?",
        answers: shuffle([
            { text: "वर्षा के देवता", correct: false },
            { text: "तूफान और आंधी के देवता", correct: true },
            { text: "अग्नि के देवता", correct: false },
            { text: "युद्ध के देवता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में मरुत को इंद्र का मित्र और तूफान तथा आंधी का देवता माना गया है।"
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
        question: "ऋग्वेद में सबसे अधिक बार किस नदी का उल्लेख हुआ है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "सरस्वती", correct: false },
            { text: "सिंधु", correct: true },
            { text: "यमुना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में सिंधु नदी का सबसे अधिक बार उल्लेख हुआ है, जिसे उसकी आर्थिक उपयोगिता के कारण 'हिरण्ययनी' (सोना धारण करने वाली) कहा गया है।"
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
        question: "ऋग्वेद में 'गविष्टि' शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "यज्ञ के लिए गाय", correct: false },
            { text: "गायों की खोज के लिए युद्ध", correct: true },
            { text: "गायों का दान", correct: false },
            { text: "गायों को पालना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में गायों को बहुत महत्व दिया गया था और 'गविष्टि' का अर्थ 'गायों की खोज' से था, जो अक्सर युद्ध का कारण बन जाता था।"
    },
    {
        question: "ऋग्वैदिक काल में 'पुरोहित' का क्या कार्य था?",
        answers: shuffle([
            { text: "युद्ध में सेना का नेतृत्व करना", correct: false },
            { text: "धार्मिक अनुष्ठान और यज्ञ कराना", correct: true },
            { text: "राज्य का प्रशासन चलाना", correct: false },
            { text: "व्यापार करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरोहित राजा के सलाहकार होते थे और धार्मिक अनुष्ठान, यज्ञ आदि का संचालन करते थे।"
    },
    {
        question: "ऋग्वेद के किस मंडल में 'सोम' का उल्लेख है?",
        answers: shuffle([
            { text: "तीसरा", correct: false },
            { text: "आठवां", correct: false },
            { text: "नौवां", correct: true },
            { text: "दसवां", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद का नौवां मंडल पूरी तरह से सोम देवता को समर्पित है।"
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
        question: "ऋग्वेद में किस देवता को 'बृहस्पति' के रूप में जाना जाता है?",
        answers: shuffle([
            { text: "अग्नि", correct: false },
            { text: "सोम", correct: false },
            { text: "इंद्र", correct: false },
            { text: "पुरोहितों के देवता", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति को देवताओं का पुरोहित और बुद्धि तथा ज्ञान का देवता माना गया है।"
    },
    {
        question: "ऋग्वेद में 'जन' शब्द का कितनी बार उल्लेख हुआ है?",
        answers: shuffle([
            { text: "176", correct: false },
            { text: "275", correct: true },
            { text: "300", correct: false },
            { text: "400", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में 'जन' शब्द का उल्लेख लगभग 275 बार किया गया है, जो उस समय की कबीलाई संरचना (जन-जाति) को दर्शाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके विपरीत, 'जनपद' (राज्य) शब्द का उल्लेख ऋग्वेद में नहीं है, जो यह बताता है कि उस समय तक बड़े राज्यों का उदय नहीं हुआ था।"
    },
    {
        question: "ऋग्वेद में 'अतिथि' (अतिथि) को किस रूप में माना जाता था?",
        answers: shuffle([
            { text: "एक विदेशी", correct: false },
            { text: "एक दुश्मन", correct: false },
            { text: "एक सम्मानित व्यक्ति", correct: true },
            { text: "एक दास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में अतिथि को अत्यधिक सम्मान दिया जाता था और उसे 'गोपा' (गायों का संरक्षक) और 'अग्नि' का प्रतीक माना जाता था।"
    },
    {
        question: "ऋग्वेद में 'नदीसूक्त' (Nadi Sukta) किस मंडल में है?",
        answers: shuffle([
            { text: "चौथा", correct: false },
            { text: "छठा", correct: false },
            { text: "दसवां", correct: true },
            { text: "पहला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद के दसवें मंडल में 'नदी सूक्त' है, जिसमें सिंधु और उसकी सहायक नदियों के साथ-साथ गंगा और यमुना जैसी नदियों का उल्लेख मिलता है।"
    },
    {
        question: "ऋग्वेद में 'निशा' शब्द का प्रयोग किसके लिए किया गया है?",
        answers: shuffle([
            { text: "रात्रि", correct: false },
            { text: "सुबह", correct: false },
            { text: "सोने का आभूषण", correct: true },
            { text: "एक प्रकार का जानवर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में 'निशा' शब्द का प्रयोग सोने के आभूषण या मुद्रा के रूप में किया गया है।"
    },
    {
        question: "ऋग्वैदिक काल में सबसे महत्वपूर्ण संपत्ति क्या थी?",
        answers: shuffle([
            { text: "भूमि", correct: false },
            { text: "गाय", correct: true },
            { text: "घर", correct: false },
            { text: "सोना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वैदिक काल में गायों को सबसे महत्वपूर्ण संपत्ति माना जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> 'गविष्टि' (गायों की खोज) शब्द का प्रयोग युद्ध के लिए किया जाता था।"
    },
    {
        question: "ऋग्वेद के किस मंडल में 'विवाह सूक्त' (Vivaha Sukta) का उल्लेख है?",
        answers: shuffle([
            { text: "आठवें", correct: false },
            { text: "नौवें", correct: false },
            { text: "दसवें", correct: true },
            { text: "तीसरे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दसवें मंडल के 85वें सूक्त में विवाह सूक्त का उल्लेख है, जिसमें विवाह संबंधी अनुष्ठानों और परंपराओं का वर्णन है।"
    },
    {
        question: "ऋग्वेद में 'यव' शब्द का प्रयोग किसके लिए किया गया है?",
        answers: shuffle([
            { text: "गेहूं", correct: false },
            { text: "चावल", correct: false },
            { text: "जौ", correct: true },
            { text: "बाजरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में 'यव' शब्द का प्रयोग जौ के लिए किया गया है, जो ऋग्वैदिक आर्यों की मुख्य फसल थी।"
    },
    {
        question: "'विश्व के सबसे प्राचीन ग्रंथ' के रूप में किसे जाना जाता है?",
        answers: shuffle([
            { text: "यजुर्वेद", correct: false },
            { text: "सामवेद", correct: false },
            { text: "ऋग्वेद", correct: true },
            { text: "अथर्ववेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद को भारतीय और विश्व साहित्य का सबसे प्राचीन ग्रंथ माना जाता है, जिसे लगभग 1500-1000 ई.पू. के बीच रचा गया था।"
    },
    {
        question: "ऋग्वेद में 'पणि' (Pani) कौन थे?",
        answers: shuffle([
            { text: "पुरोहित", correct: false },
            { text: "व्यापारी", correct: true },
            { text: "योद्धा", correct: false },
            { text: "चरवाहे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में 'पणि' उन लोगों को कहा जाता था जो व्यापार करते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्हें अक्सर आर्यों के दुश्मन के रूप में भी चित्रित किया गया है क्योंकि वे गायों को चुरा लेते थे।"
    },
    {
        question: "ऋग्वेद के अनुसार, 'वरुण' का संबंध किस देवता से है?",
        answers: shuffle([
            { text: "समुद्र", correct: false },
            { text: "आकाश", correct: true },
            { text: "पृथ्वी", correct: false },
            { text: "अग्नि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वरुण को आकाश के देवता और 'ऋत' (नैतिक व्यवस्था) का संरक्षक माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> वह रात के आकाश पर शासन करते थे।"
    },
    {
        question: "ऋग्वैदिक काल में 'विदथ' (Vidatha) क्या था?",
        answers: shuffle([
            { text: "एक धार्मिक अनुष्ठान", correct: false },
            { text: "एक राजनीतिक सभा", correct: true },
            { text: "एक युद्ध का मैदान", correct: false },
            { text: "एक ज्ञान केंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विदथ एक प्राचीनतम राजनीतिक और धार्मिक सभा थी, जिसमें स्त्री और पुरुष दोनों भाग लेते थे।"
    },
    {
        question: "ऋग्वेद में 'दस्यु' शब्द का प्रयोग किसके लिए किया गया है?",
        answers: shuffle([
            { text: "आर्यों के मित्र", correct: false },
            { text: "आर्यों के दुश्मन", correct: true },
            { text: "देवताओं", correct: false },
            { text: "चरवाहे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में 'दस्यु' शब्द का प्रयोग उन लोगों के लिए किया गया है जो आर्यों के दुश्मन थे और आर्यों की भाषा और संस्कृति से भिन्न थे।"
    },
    {
        question: "ऋग्वैदिक काल में समाज किस आधार पर विभाजित था?",
        answers: shuffle([
            { text: "जन्म", correct: false },
            { text: "कर्म", correct: true },
            { text: "धन", correct: false },
            { text: "वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद के दसवें मंडल में वर्ण व्यवस्था का उल्लेख है, लेकिन यह जन्म पर आधारित नहीं थी।<br><br><i class='fa-solid fa-angles-right icon'></i> समाज का विभाजन मुख्य रूप से कर्म के आधार पर होता था।"
    },
    {
        question: "ऋग्वेद में 'उपनिषदों' का उल्लेख है या नहीं?",
        answers: shuffle([
            { text: "हां", correct: false },
            { text: "नहीं", correct: true },
            { text: "केवल कुछ अंशों में", correct: false },
            { text: "स्पष्ट नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उपनिषद उत्तर वैदिक काल के दार्शनिक ग्रंथ हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में उपनिषदों का कोई उल्लेख नहीं है।"
    },
    {
        question: "ऋग्वेद के किस मंडल में 'सोम' का उल्लेख है?",
        answers: shuffle([
            { text: "तीसरे", correct: false },
            { text: "आठवें", correct: false },
            { text: "नौवें", correct: true },
            { text: "दसवें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद का नौवां मंडल पूरी तरह से सोम देवता को समर्पित है।"
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
        question: "ऋग्वेद में 'मातृदेवी' की पूजा का उल्लेख है या नहीं?",
        answers: shuffle([
            { text: "हाँ, प्रमुखता से", correct: false },
            { text: "हाँ, लेकिन गौण रूप से", correct: false },
            { text: "नहीं, इसका कोई उल्लेख नहीं है", correct: true },
            { text: "अस्पष्ट है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में मातृदेवी की पूजा का कोई स्पष्ट उल्लेख नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पूजा हड़प्पा सभ्यता से जुड़ी हुई है, जबकि ऋग्वैदिक आर्यों के देवता मुख्य रूप से पुरुष थे।"
    },
    {
        question: "'दशराज्ञ युद्ध' में विजयी होने वाला राजा कौन था?",
        answers: shuffle([
            { text: "भरत", correct: false },
            { text: "सुदास", correct: true },
            { text: "पुरु", correct: false },
            { text: "यदु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दशराज्ञ युद्ध में भरत जन के राजा सुदास ने दस राजाओं के संघ को पराजित किया था।"
    },
    {
        question: "ऋग्वैदिक काल में 'बलि' (Bali) क्या था?",
        answers: shuffle([
            { text: "एक प्रकार का धार्मिक अनुष्ठान", correct: false },
            { text: "राजा को दिया जाने वाला कर या उपहार", correct: true },
            { text: "युद्ध में दी गई भेंट", correct: false },
            { text: "देवताओं को दी गई भेंट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बलि' वह स्वेच्छा से दिया जाने वाला कर या उपहार था जो ऋग्वैदिक काल में लोग राजा को देते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अनिवार्य नहीं था।"
    },
    {
        question: "ऋग्वेद में किस देवता को 'वृष' (Vrish) कहा गया है?",
        answers: shuffle([
            { text: "इंद्र", correct: true },
            { text: "वरुण", correct: false },
            { text: "अग्नि", correct: false },
            { text: "सोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वृष' का अर्थ है 'शक्तिशाली' या 'वर्षा करने वाला', जो ऋग्वेद में इंद्र के लिए एक विशेषण के रूप में प्रयुक्त हुआ है।"
    },
    {
        question: "ऋग्वेद की सबसे पवित्र नदी कौनसी थी?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "सिंधु", correct: false },
            { text: "सरस्वती", correct: true },
            { text: "यमुना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में सरस्वती नदी को 'नदीतमा' (नदियों में श्रेष्ठ), 'मातृतमा' (माताओं में श्रेष्ठ) और 'देवीतमा' (देवियों में श्रेष्ठ) कहा गया है।"
    },
    {
        question: "ऋग्वेद के दसवें मंडल में 'विदुषी' (विदुषी) स्त्रियों के बारे में क्या कहा गया है?",
        answers: shuffle([
            { text: "उनका उल्लेख नहीं है।", correct: false },
            { text: "उनका उल्लेख केवल यज्ञों में होता है।", correct: false },
            { text: "कुछ विदुषी स्त्रियों का उल्लेख मिलता है, जैसे घोषा और अपाला।", correct: true },
            { text: "वे केवल शिक्षा के क्षेत्र में कार्य करती थीं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में घोषा, अपाला, लोपामुद्रा और विश्ववरा जैसी विदुषी स्त्रियों का उल्लेख मिलता है, जिन्होंने कुछ सूक्तों की रचना भी की थी।"
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
        question: "ऋग्वेद में किस नदी को 'वितस्ता' के रूप में जाना जाता है?",
        answers: shuffle([
            { text: "झेलम", correct: true },
            { text: "चिनाब", correct: false },
            { text: "रावी", correct: false },
            { text: "सतलुज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में झेलम नदी को 'वितस्ता' कहा गया है।"
    },
    {
        question: "'ऋग्वेद' शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "ज्ञान का संग्रह", correct: false },
            { text: "श्लोकों का संग्रह", correct: true },
            { text: "अनुष्ठानों का संग्रह", correct: false },
            { text: "मंत्रों का संग्रह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ऋग्वेद' दो शब्दों से मिलकर बना है - 'ऋक्' (श्लोक) और 'वेद' (ज्ञान)।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, इसका अर्थ 'श्लोकों का संग्रह' है।"
    },
    {
        question: "ऋग्वेद में 'निशाका' (Nishka) का प्रयोग किसके लिए किया गया है?",
        answers: shuffle([
            { text: "एक प्रकार का कर", correct: false },
            { text: "एक प्रकार का आभूषण", correct: true },
            { text: "एक प्रकार का हथियार", correct: false },
            { text: "एक प्रकार का बर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋग्वेद में 'निशाका' शब्द का प्रयोग गले में पहनने वाले सोने के आभूषण के लिए किया गया है, जो बाद में विनिमय के माध्यम के रूप में भी प्रयोग होने लगा।"
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