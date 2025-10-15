const questions = [
    {
        topHeading: "वायुमंडल पर आधारित 50 MCQs part_1 (quiz_no.)"
    },
    {
        question: "वायुमंडल में सबसे अधिक मात्रा में कौन सी गैस पाई जाती है?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: false },
            { text: "आर्गन", correct: false },
            { text: "नाइट्रोजन", correct: true },
            { text: "कार्बन डाइऑक्साइड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वायुमंडल में नाइट्रोजन की मात्रा लगभग 78% है, जो इसे सबसे प्रचुर गैस बनाती है।"
    },
    {
        question: "पृथ्वी के वायुमंडल की किस परत में मौसम संबंधी सभी घटनाएँ होती हैं?",
        answers: shuffle([
            { text: "समतापमंडल", correct: false },
            { text: "क्षोभमंडल", correct: true },
            { text: "मध्यमंडल", correct: false },
            { text: "आयनमंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्षोभमंडल वायुमंडल की सबसे निचली परत है, जहाँ बादल बनना, बारिश, तूफान जैसी सभी मौसमी घटनाएँ घटित होती हैं।"
    },
    {
        question: "ओजोन परत वायुमंडल की किस परत में स्थित है?",
        answers: shuffle([
            { text: "क्षोभमंडल", correct: false },
            { text: "समतापमंडल", correct: true },
            { text: "मध्यमंडल", correct: false },
            { text: "बहिर्मंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओजोन परत समतापमंडल में पाई जाती है, जो सूर्य से आने वाली हानिकारक पराबैंगनी किरणों से पृथ्वी की रक्षा करती है।"
    },
    {
        question: "वायुमंडल में ऑक्सीजन की अनुमानित मात्रा कितनी है?",
        answers: shuffle([
            { text: "78%", correct: false },
            { text: "21%", correct: true },
            { text: "1%", correct: false },
            { text: "0.03%", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वायुमंडल में लगभग 21% ऑक्सीजन गैस है, जो जीवन के लिए अत्यंत आवश्यक है।"
    },
    {
        question: "वायुमंडल की कौन सी परत रेडियो तरंगों को परावर्तित करती है?",
        answers: shuffle([
            { text: "क्षोभमंडल", correct: false },
            { text: "समतापमंडल", correct: false },
            { text: "मध्यमंडल", correct: false },
            { text: "आयनमंडल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आयनमंडल (थर्मोस्फीयर का हिस्सा) में आवेशित कण होते हैं जो पृथ्वी से प्रेषित रेडियो तरंगों को वापस पृथ्वी की ओर परावर्तित कर देते हैं, जिससे रेडियो संचार संभव होता है।"
    },
    {
        question: "वायुदाब मापने के लिए किस यंत्र का प्रयोग किया जाता है?",
        answers: shuffle([
            { text: "थर्मामीटर", correct: false },
            { text: "बैरोमीटर", correct: true },
            { text: "हाइग्रोमीटर", correct: false },
            { text: "एनीमोमीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैरोमीटर एक वैज्ञानिक उपकरण है जिसका उपयोग वायुमंडलीय दाब को मापने के लिए किया जाता है।"
    },
    {
        question: "ऊंचाई पर जाने पर वायुदाब पर क्या प्रभाव पड़ता है?",
        answers: shuffle([
            { text: "बढ़ता है", correct: false },
            { text: "घटता है", correct: true },
            { text: "समान रहता है", correct: false },
            { text: "पहले बढ़ता है फिर घटता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैसे-जैसे हम पृथ्वी की सतह से ऊपर की ओर जाते हैं, हवा का घनत्व कम होता जाता है, जिसके कारण वायुदाब घटता है।"
    },
    {
        question: "वायुमंडल की सबसे ठंडी परत कौन सी है?",
        answers: shuffle([
            { text: "क्षोभमंडल", correct: false },
            { text: "समतापमंडल", correct: false },
            { text: "मध्यमंडल", correct: true },
            { text: "तापमंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्यमंडल में ऊंचाई के साथ तापमान गिरता है और इसके ऊपरी हिस्से में तापमान -100 डिग्री सेल्सियस तक पहुँच सकता है, जो इसे सबसे ठंडी परत बनाता है।"
    },
    {
        question: "निम्नलिखित में से कौन सी एक ग्रीनहाउस गैस नहीं है?",
        answers: shuffle([
            { text: "मीथेन", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: false },
            { text: "नाइट्रोजन", correct: true },
            { text: "जल वाष्प", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नाइट्रोजन एक ग्रीनहाउस गैस नहीं है क्योंकि यह पृथ्वी से निकलने वाली अवरक्त विकिरण को अवशोषित नहीं करती है।"
    },
    {
        question: "क्षोभमंडल और समतापमंडल के बीच की सीमा को क्या कहा जाता है?",
        answers: shuffle([
            { text: "मेसोपॉज़", correct: false },
            { text: "स्ट्रेटोपॉज़", correct: false },
            { text: "ट्रॉपोपॉज़", correct: true },
            { text: "थर्मोपॉज़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ट्रॉपोपॉज़ वह संक्रमणकालीन परत है जो क्षोभमंडल को समतापमंडल से अलग करती है।"
    },
    {
        question: "हवाई जहाज उड़ाने के लिए वायुमंडल की कौन सी परत सबसे आदर्श मानी जाती है?",
        answers: shuffle([
            { text: "क्षोभमंडल", correct: false },
            { text: "समतापमंडल", correct: true },
            { text: "मध्यमंडल", correct: false },
            { text: "आयनमंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समतापमंडल में मौसम संबंधी घटनाएँ नहीं होती हैं और हवा का घनत्व भी कम होता है, जिससे यह हवाई जहाज उड़ाने के लिए आदर्श परत है।"
    },
    {
        question: "\"गरजता चालीसा\" (Roaring Forties) क्या है?",
        answers: shuffle([
            { text: "उत्तरी गोलार्ध में 40° अक्षांश पर चलने वाली पवनें", correct: false },
            { text: "दक्षिणी गोलार्ध में 40° अक्षांश पर चलने वाली तेज पछुआ पवनें", correct: true },
            { text: "एक प्रकार का चक्रवात", correct: false },
            { text: "एक समुद्री धारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्षिणी गोलार्ध में 40° से 50° अक्षांश के बीच चलने वाली बहुत तेज और शक्तिशाली पछुआ पवनों को 'गरजता चालीसा' कहा जाता है।"
    },
    {
        question: "वायुमंडल की सबसे बाहरी परत कौन सी है?",
        answers: shuffle([
            { text: "आयनमंडल", correct: false },
            { text: "ओजोनमंडल", correct: false },
            { text: "बहिर्मंडल", correct: true },
            { text: "मध्यमंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बहिर्मंडल वायुमंडल की सबसे ऊपरी परत है, जो अंततः अंतरिक्ष में विलीन हो जाती है।"
    },
    {
        question: "वायु की गति को मापने वाले यंत्र को क्या कहते हैं?",
        answers: shuffle([
            { text: "बैरोमीटर", correct: false },
            { text: "हाइग्रोमीटर", correct: false },
            { text: "लैक्टोमीटर", correct: false },
            { text: "एनीमोमीटर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एनीमोमीटर का उपयोग पवन के वेग या गति को मापने के लिए किया जाता है।"
    },
    {
        question: "किस गैस की उपस्थिति के कारण वरुण (Neptune) ग्रह हरे रंग का दिखाई देता है?",
        answers: shuffle([
            { text: "नाइट्रोजन", correct: false },
            { text: "मीथेन", correct: true },
            { text: "अमोनिया", correct: false },
            { text: "हाइड्रोजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वरुण ग्रह के वायुमंडल में मीथेन गैस की अधिकता है, जो लाल प्रकाश को अवशोषित कर लेती है और हरे-नीले प्रकाश को परावर्तित करती है, जिससे ग्रह हरा दिखाई देता है।"
    },
    {
        question: "वायुमंडल में जलवाष्प की मात्रा का औसत कितना होता है?",
        answers: shuffle([
            { text: "8 से 10 प्रतिशत", correct: false },
            { text: "10 से 12 प्रतिशत", correct: false },
            { text: "0 से 4 प्रतिशत", correct: true },
            { text: "लगभग 15 प्रतिशत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वायुमंडल में जलवाष्प की मात्रा स्थान और समय के अनुसार बदलती रहती है, लेकिन सामान्यतः यह 0 से 4 प्रतिशत के बीच होती है।"
    },
    {
        question: "कोरिऑलिस बल किसके कारण उत्पन्न होता है?",
        answers: shuffle([
            { text: "पृथ्वी के गुरुत्वाकर्षण के कारण", correct: false },
            { text: "पृथ्वी के परिक्रमण के कारण", correct: false },
            { text: "पृथ्वी के घूर्णन के कारण", correct: true },
            { text: "वायुदाब में अंतर के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी के अपनी धुरी पर घूमने (घूर्णन) के कारण एक आभासी बल उत्पन्न होता है, जिसे कोरिऑलिस बल कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पवनों की दिशा को मोड़ देता है।"
    },
    {
        question: "उत्तरी गोलार्ध में पवनें कोरिऑलिस बल के कारण किस दिशा में विक्षेपित होती हैं?",
        answers: shuffle([
            { text: "अपनी बाईं ओर", correct: false },
            { text: "अपनी दाहिनी ओर", correct: true },
            { text: "ऊपर की ओर", correct: false },
            { text: "नीचे की ओर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फेरेल के नियम के अनुसार, कोरिऑलिस बल के प्रभाव से उत्तरी गोलार्ध में पवनें अपनी गति की दिशा से दाहिनी ओर मुड़ जाती हैं।"
    },
    {
        question: "व्यापारिक पवनें (Trade Winds) किन अक्षांशों के बीच चलती हैं?",
        answers: shuffle([
            { text: "30° उत्तर से 60° उत्तर", correct: false },
            { text: "30° दक्षिण से 60° दक्षिण", correct: false },
            { text: "5° उत्तर-दक्षिण से 30° उत्तर-दक्षिण", correct: true },
            { text: "60° उत्तर-दक्षिण से ध्रुवों तक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यापारिक पवनें उपोष्ण उच्च दाब कटिबंधों (लगभग 30° अक्षांश) से भूमध्यरेखीय निम्न दाब कटिबंध (डोलड्रम) की ओर चलती हैं।"
    },
    {
        question: "\"डोलड्रम\" (Doldrums) क्या है?",
        answers: shuffle([
            { text: "ध्रुवीय क्षेत्र", correct: false },
            { text: "उपोष्ण उच्च दाब कटिबंध", correct: false },
            { text: "भूमध्यरेखीय निम्न दाब का शांत क्षेत्र", correct: true },
            { text: "उपध्रुवीय निम्न दाब कटिबंध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भूमध्य रेखा के पास स्थित शांत और निम्न दाब वाले क्षेत्र को डोलड्रम कहा जाता है, जहाँ पवनें बहुत हल्की होती हैं।"
    },
    {
        question: "ओजोन परत के क्षरण के लिए मुख्य रूप से कौन सी गैस जिम्मेदार है?",
        answers: shuffle([
            { text: "कार्बन डाइऑक्साइड", correct: false },
            { text: "सल्फर डाइऑक्साइड", correct: false },
            { text: "क्लोरोफ्लोरोकार्बन (CFC)", correct: true },
            { text: "मीथेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्लोरोफ्लोरोकार्बन (CFC) से निकलने वाला क्लोरीन ओजोन (O₃) के अणुओं को तोड़कर उसे नष्ट कर देता है, जिससे ओजोन परत में छेद हो जाता है।"
    },
    {
        question: "वायुमंडल की कौन सी परत में उल्कापिंड जलकर नष्ट हो जाते हैं?",
        answers: shuffle([
            { text: "क्षोभमंडल", correct: false },
            { text: "समतापमंडल", correct: false },
            { text: "मध्यमंडल", correct: true },
            { text: "तापमंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब उल्कापिंड पृथ्वी के वायुमंडल में प्रवेश करते हैं, तो मध्यमंडल में हवा के घर्षण के कारण जलकर राख हो जाते हैं।"
    },
    {
        question: "वायुमंडल में आर्द्रता को मापने के लिए किस यंत्र का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "बैरोमीटर", correct: false },
            { text: "एनीमोमीटर", correct: false },
            { text: "हाइग्रोमीटर", correct: true },
            { text: "थर्मामीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाइग्रोमीटर का उपयोग वायु में उपस्थित जलवाष्प की मात्रा अर्थात् आर्द्रता को मापने के लिए किया जाता है।"
    },
    {
        question: "पर्वतीय वर्षा (Orographic Rainfall) का क्या कारण है?",
        answers: shuffle([
            { text: "गर्म हवा का ऊपर उठना", correct: false },
            { text: "दो विपरीत स्वभाव वाली हवाओं का मिलना", correct: false },
            { text: "आर्द्र हवा का पर्वत से टकराकर ऊपर उठना", correct: true },
            { text: "समुद्री सतह का गर्म होना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब जलवाष्प से लदी हवा किसी पर्वत या पठार से टकराती है, तो वह ऊपर उठने के लिए मजबूर हो जाती है, जिससे ठंडी होकर वर्षा करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे पर्वतीय वर्षा कहते हैं।"
    },
    {
        question: "लू (Loo) किस प्रकार की पवन का उदाहरण है?",
        answers: shuffle([
            { text: "स्थायी पवन", correct: false },
            { text: "मौसमी पवन", correct: false },
            { text: "स्थानीय पवन", correct: true },
            { text: "ध्रुवीय पवन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लू एक गर्म और शुष्क स्थानीय पवन है जो गर्मियों के मौसम में भारत और पाकिस्तान के मैदानी इलाकों में चलती है।"
    },
    {
        question: "जेट स्ट्रीम (Jet Stream) कहाँ पाई जाती हैं?",
        answers: shuffle([
            { text: "क्षोभमंडल की ऊपरी सीमा में", correct: true },
            { text: "मध्यमंडल में", correct: false },
            { text: "समतापमंडल के निचले भाग में", correct: false },
            { text: "आयनमंडल में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जेट स्ट्रीम बहुत तेज गति से चलने वाली हवाएं हैं जो क्षोभमंडल की ऊपरी सीमा (ट्रॉपोपॉज़ के निकट) पर एक संकीर्ण पट्टी में पश्चिम से पूर्व की ओर बहती हैं।"
    },
    {
        question: "चक्रवात (Cyclone) के केंद्र में वायुदाब कैसा होता है?",
        answers: shuffle([
            { text: "उच्च", correct: false },
            { text: "निम्न", correct: true },
            { text: "सामान्य", correct: false },
            { text: "अस्थिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चक्रवात एक निम्न दाब का केंद्र होता है जिसके चारों ओर हवाएं तेजी से घूमती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> हवाएं बाहर के उच्च दाब से केंद्र के निम्न दाब की ओर चलती हैं।"
    },
    {
        question: "\"अश्व अक्षांश\" (Horse Latitudes) किसे कहा जाता है?",
        answers: shuffle([
            { text: "भूमध्यरेखीय निम्न दाब कटिबंध", correct: false },
            { text: "उपोष्ण उच्च दाब कटिबंध", correct: true },
            { text: "उपध्रुवीय निम्न दाब कटिबंध", correct: false },
            { text: "ध्रुवीय उच्च दाब कटिबंध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लगभग 30°-35° उत्तरी और दक्षिणी अक्षांशों के पास स्थित उपोष्ण उच्च दाब कटिबंध को 'अश्व अक्षांश' कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ हवा शांत रहती है।"
    },
    {
        question: "वायुमंडल के अध्ययन को क्या कहा जाता है?",
        answers: shuffle([
            { text: "जियोलॉजी", correct: false },
            { text: "मीटियोरोलॉजी", correct: true },
            { text: "एस्ट्रोलॉजी", correct: false },
            { text: "सिस्मोलॉजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौसम विज्ञान (मीटियोरोलॉजी) वह विज्ञान है जिसमें वायुमंडल और उसमें होने वाली मौसम संबंधी घटनाओं का अध्ययन किया जाता है।"
    },
    {
        question: "पृथ्वी का ऊष्मा बजट (Heat Budget) क्या है?",
        answers: shuffle([
            { text: "पृथ्वी द्वारा केवल ऊष्मा का अवशोषण", correct: false },
            { text: "पृथ्वी द्वारा प्राप्त और विकीर्ण ऊष्मा के बीच संतुलन", correct: true },
            { text: "पृथ्वी द्वारा केवल ऊष्मा का विकिरण", correct: false },
            { text: "वायुमंडल द्वारा ऊष्मा का भंडारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी सूर्य से जितनी ऊर्जा (सौर विकिरण) प्राप्त करती है, उतनी ही ऊर्जा वापस अंतरिक्ष में विकीर्ण कर देती है, जिससे तापमान का संतुलन बना रहता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी को ऊष्मा बजट कहते हैं।"
    },
    {
        question: "फॉन (Foehn) नामक स्थानीय पवन कहाँ चलती है?",
        answers: shuffle([
            { text: "रॉकी पर्वत", correct: false },
            { text: "सहारा मरुस्थल", correct: false },
            { text: "आल्प्स पर्वत", correct: true },
            { text: "थार मरुस्थल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फॉन एक गर्म और शुष्क स्थानीय पवन है जो आल्प्स पर्वत के उत्तरी ढलानों पर चलती है, विशेषकर स्विट्जरलैंड में।"
    },
    {
        question: "संघनन (Condensation) की प्रक्रिया के लिए क्या आवश्यक है?",
        answers: shuffle([
            { text: "तापमान में वृद्धि", correct: false },
            { text: "वायुदाब में वृद्धि", correct: false },
            { text: "सापेक्ष आर्द्रता का 100% होना", correct: true },
            { text: "हवा की तेज गति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब हवा में जलवाष्प की मात्रा इतनी हो जाती है कि वह संतृप्त हो जाए (सापेक्ष आर्द्रता 100%), तो जलवाष्प पानी की बूंदों या बर्फ के क्रिस्टल में बदलने लगती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रक्रिया को संघनन कहते हैं।"
    },
    {
        question: "निम्नलिखित में से कौन सा बादल सबसे अधिक ऊंचाई पर बनता है?",
        answers: shuffle([
            { text: "कपासी मेघ (Cumulus)", correct: false },
            { text: "स्तरी मेघ (Stratus)", correct: false },
            { text: "पक्षाभ मेघ (Cirrus)", correct: true },
            { text: "वर्षा स्तरी मेघ (Nimbostratus)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पक्षाभ मेघ सबसे अधिक ऊंचाई पर (8,000 से 12,000 मीटर) बनते हैं और ये बर्फ के छोटे-छोटे कणों से बने होते हैं।"
    },
    {
        question: "अम्ल वर्षा (Acid Rain) के लिए कौन सी गैसें मुख्य रूप से उत्तरदायी हैं?",
        answers: shuffle([
            { text: "नाइट्रोजन और ऑक्सीजन", correct: false },
            { text: "मीथेन और कार्बन डाइऑक्साइड", correct: false },
            { text: "सल्फर डाइऑक्साइड और नाइट्रोजन ऑक्साइड", correct: true },
            { text: "ओजोन और CFC", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब सल्फर डाइऑक्साइड (SO₂) और नाइट्रोजन ऑक्साइड (NOₓ) वायुमंडल में जलवाष्प से क्रिया करते हैं, तो वे सल्फ्यूरिक अम्ल और नाइट्रिक अम्ल बनाते हैं, जो वर्षा के साथ पृथ्वी पर गिरते हैं।"
    },
    {
        question: "\"चिनूक\" (Chinook) पवन को और किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "हिम-भक्षी (Snow Eater)", correct: true },
            { text: "डॉक्टर पवन (Doctor Wind)", correct: false },
            { text: "व्यापारिक पवन", correct: false },
            { text: "गरजता चालीसा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चिनूक एक गर्म और शुष्क पवन है जो उत्तरी अमेरिका में रॉकी पर्वत के पूर्वी ढलानों पर चलती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह सर्दियों में बर्फ को तेजी से पिघला देती है, इसलिए इसे 'हिम-भक्षी' कहते हैं।"
    },
    {
        question: "प्रतिचक्रवात (Anticyclone) में हवा की दिशा उत्तरी गोलार्ध में कैसी होती है?",
        answers: shuffle([
            { text: "घड़ी की सुइयों के अनुकूल (दक्षिणावर्त)", correct: true },
            { text: "घड़ी की सुइयों के प्रतिकूल (वामावर्त)", correct: false },
            { text: "सीधी रेखा में", correct: false },
            { text: "अस्थिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिचक्रवात एक उच्च दाब का केंद्र होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उत्तरी गोलार्ध में हवाएं केंद्र से बाहर की ओर घड़ी की सुइयों की दिशा में (दक्षिणावर्त) चलती हैं।"
    },
    {
        question: "संवहनीय वर्षा (Convectional Rainfall) सामान्यतः कहाँ होती है?",
        answers: shuffle([
            { text: "ध्रुवीय क्षेत्रों में", correct: false },
            { text: "शीतोष्ण क्षेत्रों में", correct: false },
            { text: "भूमध्यरेखीय क्षेत्रों में", correct: true },
            { text: "मरुस्थलीय क्षेत्रों में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भूमध्यरेखीय क्षेत्रों में अधिक गर्मी के कारण हवा गर्म होकर ऊपर उठती है, ठंडी होती है और संघनित होकर वर्षा करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रकार की वर्षा को संवहनीय वर्षा कहते हैं।"
    },
    {
        question: "सामान्य ताप पतन दर (Normal Lapse Rate) क्या है?",
        answers: shuffle([
            { text: "प्रति 165 मीटर की ऊंचाई पर 1°C तापमान का बढ़ना", correct: false },
            { text: "प्रति 165 मीटर की ऊंचाई पर 1°C तापमान का घटना", correct: true },
            { text: "प्रति 1000 मीटर पर 10°C तापमान का घटना", correct: false },
            { text: "प्रति 100 मीटर पर 1°C तापमान का घटना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्षोभमंडल में औसतन प्रत्येक 165 मीटर की ऊंचाई पर जाने पर तापमान में 1°C की कमी आती है, जिसे सामान्य ताप पतन दर कहते हैं।"
    },
    {
        question: "पृथ्वी की सतह पर वायु का घनत्व सबसे अधिक कहाँ होता है?",
        answers: shuffle([
            { text: "पहाड़ों पर", correct: false },
            { text: "समुद्र तल पर", correct: true },
            { text: "समतापमंडल में", correct: false },
            { text: "मध्यमंडल में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुत्वाकर्षण के कारण, वायुमंडल की अधिकांश गैसें पृथ्वी की सतह के करीब होती हैं, इसलिए समुद्र तल पर वायु का घनत्व अधिकतम होता है।"
    },
    {
        question: "अरोरा बोरियालिस (Aurora Borealis) की घटना किस वायुमंडलीय परत में होती है?",
        answers: shuffle([
            { text: "क्षोभमंडल", correct: false },
            { text: "समतापमंडल", correct: false },
            { text: "आयनमंडल", correct: true },
            { text: "बहिर्मंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरोरा (ध्रुवीय ज्योति) का निर्माण तब होता है जब सूर्य से आने वाले आवेशित कण पृथ्वी के चुंबकीय क्षेत्र से टकराकर आयनमंडल में मौजूद गैसों से क्रिया करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> उत्तरी गोलार्ध में इसे अरोरा बोरियालिस कहते हैं।"
    },
    {
        question: "कोहरा (Fog) किसका उदाहरण है?",
        answers: shuffle([
            { text: "बादल का", correct: false },
            { text: "वर्षा का", correct: false },
            { text: "संघनन का", correct: true },
            { text: "वाष्पीकरण का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोहरा वास्तव में पृथ्वी की सतह के बहुत निकट स्थित बादल है, जो हवा में मौजूद जलवाष्प के संघनित होकर छोटी-छोटी पानी की बूंदों में बदलने से बनता है।"
    },
    {
        question: "पछुआ पवनें (Westerlies) किस प्रकार की पवनें हैं?",
        answers: shuffle([
            { text: "स्थायी पवनें", correct: true },
            { text: "स्थानीय पवनें", correct: false },
            { text: "मौसमी पवनें", correct: false },
            { text: "दैनिक पवनें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पछुआ पवनें, व्यापारिक पवनों की तरह, वर्ष भर एक निश्चित दिशा में चलने वाली स्थायी या ग्रहीय पवनें हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये उपोष्ण उच्च दाब कटिबंध से उपध्रुवीय निम्न दाब कटिबंध की ओर चलती हैं।"
    },
    {
        question: "भूमंडलीय तापन (Global Warming) का मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "ओजोन परत का क्षरण", correct: false },
            { text: "वायुमंडल में धूलकणों की वृद्धि", correct: false },
            { text: "ग्रीनहाउस गैसों की मात्रा में वृद्धि", correct: true },
            { text: "वनों का बढ़ना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्बन डाइऑक्साइड, मीथेन जैसी ग्रीनहाउस गैसों की मात्रा बढ़ने से ये पृथ्वी द्वारा विकीर्ण ऊष्मा को अधिक मात्रा में रोकती हैं, जिससे पृथ्वी का औसत तापमान बढ़ रहा है।"
    },
    {
        question: "वाताग्र (Front) का निर्माण कब होता है?",
        answers: shuffle([
            { text: "जब हवा बहुत तेज चलती है", correct: false },
            { text: "जब दो विभिन्न तापमान और आर्द्रता वाली वायुराशियाँ मिलती हैं", correct: true },
            { text: "जब हवा किसी पर्वत से टकराती है", correct: false },
            { text: "जब चक्रवात उत्पन्न होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वाताग्र वह सीमा क्षेत्र होता है जहाँ गर्म और ठंडी या शुष्क और आर्द्र जैसी दो अलग-अलग गुणों वाली वायुराशियाँ आपस में मिलती हैं।"
    },
    {
        question: "ताप व्युत्क्रमण (Temperature Inversion) क्या है?",
        answers: shuffle([
            { text: "ऊंचाई के साथ तापमान का बढ़ना", correct: true },
            { text: "ऊंचाई के साथ तापमान का घटना", correct: false },
            { text: "तापमान का स्थिर रहना", correct: false },
            { text: "तापमान का तेजी से गिरना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामान्यतः ऊंचाई के साथ तापमान घटता है, लेकिन जब विशेष परिस्थितियों में ऊंचाई के साथ तापमान घटने के बजाय बढ़ने लगता है, तो इसे ताप व्युत्क्रमण कहते हैं।"
    },
    {
        question: "\"डॉक्टर विंड\" (Doctor Wind) किस स्थानीय पवन को कहा जाता है?",
        answers: shuffle([
            { text: "लू", correct: false },
            { text: "चिनूक", correct: false },
            { text: "हरमट्टन", correct: true },
            { text: "सिरोको", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हरमट्टन सहारा मरुस्थल से गिनी तट की ओर चलने वाली एक गर्म और शुष्क पवन है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह तट के आर्द्र और चिपचिपे मौसम से राहत दिलाती है, इसलिए इसे 'डॉक्टर विंड' कहते हैं।"
    },
    {
        question: "वायुमंडल में किस गैस का प्रतिशत आयतन के हिसाब से तीसरे स्थान पर है?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: false },
            { text: "आर्गन", correct: true },
            { text: "नियॉन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वायुमंडल में आयतन के अनुसार, नाइट्रोजन (78%) पहले, ऑक्सीजन (21%) दूसरे और आर्गन (0.93%) तीसरे स्थान पर है।"
    },
    {
        question: "दक्षिणी गोलार्ध में पछुआ पवनें उत्तरी गोलार्ध की तुलना में अधिक शक्तिशाली क्यों होती हैं?",
        answers: shuffle([
            { text: "कोरिऑलिस बल अधिक होने के कारण", correct: false },
            { text: "दक्षिणी गोलार्ध में विशाल महासागरीय विस्तार और भू-भाग की कमी के कारण", correct: true },
            { text: "सूर्य की स्थिति के कारण", correct: false },
            { text: "दक्षिणी ध्रुव पर बर्फ अधिक होने के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्षिणी गोलार्ध में स्थल भाग कम और जल भाग अधिक है, जिससे पवनों के मार्ग में कोई बड़ी बाधा नहीं आती और वे बहुत तेज गति से चलती हैं।"
    },
    {
        question: "सिरोको (Sirocco) पवन कहाँ बहती है?",
        answers: shuffle([
            { text: "उत्तरी अमेरिका", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "सहारा मरुस्थल से भूमध्य सागर की ओर", correct: true },
            { text: "साइबेरिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिरोको एक गर्म, शुष्क और धूल भरी पवन है जो सहारा मरुस्थल से उत्पन्न होकर भूमध्य सागर पार करके दक्षिणी यूरोप तक पहुँचती है।"
    },
    {
        question: "सापेक्ष आर्द्रता (Relative Humidity) को किसमें व्यक्त किया जाता है?",
        answers: shuffle([
            { text: "ग्राम में", correct: false },
            { text: "प्रतिशत में", correct: true },
            { text: "डिग्री सेल्सियस में", correct: false },
            { text: "पास्कल में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सापेक्ष आर्द्रता किसी निश्चित तापमान पर हवा में मौजूद जलवाष्प की मात्रा और उसी तापमान पर हवा की जलवाष्प धारण करने की अधिकतम क्षमता का अनुपात है, जिसे प्रतिशत में व्यक्त किया जाता है।"
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