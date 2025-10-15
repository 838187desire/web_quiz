const questions = [
    {
        topHeading: "महाद्वीप पर आधारित 50 MCQs part_1 (quiz_no.)"
    },
    {
        question: "क्षेत्रफल की दृष्टि से विश्व का सबसे बड़ा महाद्वीप कौन सा है?",
        answers: shuffle([
            { text: "अफ़्रीका", correct: false },
            { text: "एशिया", correct: true },
            { text: "उत्तरी अमेरिका", correct: false },
            { text: "यूरोप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एशिया महाद्वीप क्षेत्रफल और जनसंख्या दोनों ही दृष्टि से विश्व का सबसे बड़ा महाद्वीप है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका क्षेत्रफल लगभग 44.6 मिलियन वर्ग किलोमीटर है।"
    },
    {
        question: "किस महाद्वीप को 'अंध महाद्वीप' के नाम से जाना जाता है?",
        answers: shuffle([
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "दक्षिण अमेरिका", correct: false },
            { text: "अफ़्रीका", correct: true },
            { text: "अंटार्कटिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 20वीं शताब्दी के आरम्भ तक इसके आंतरिक भागों के बारे में जानकारी के अभाव के कारण इसे 'अंध महाद्वीप' कहा जाता था।"
    },
    {
        question: "विश्व का सबसे छोटा महाद्वीप कौन सा है?",
        answers: shuffle([
            { text: "अंटार्कटिका", correct: false },
            { text: "यूरोप", correct: false },
            { text: "ऑस्ट्रेलिया", correct: true },
            { text: "दक्षिण अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑस्ट्रेलिया क्षेत्रफल की दृष्टि से विश्व का सबसे छोटा महाद्वीप है, जिसका क्षेत्रफल लगभग 8.5 मिलियन वर्ग किलोमीटर है।"
    },
    {
        question: "किस महाद्वीप से होकर कर्क, मकर और भूमध्य रेखा, तीनों गुजरती हैं?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "अफ़्रीका", correct: true },
            { text: "दक्षिण अमेरिका", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अफ़्रीका एकमात्र ऐसा महाद्वीप है जिससे होकर ये तीनों प्रमुख अक्षांश रेखाएँ गुजरती हैं।"
    },
    {
        question: "किस महाद्वीप को 'श्वेत महाद्वीप' कहा जाता है?",
        answers: shuffle([
            { text: "यूरोप", correct: false },
            { text: "उत्तरी अमेरिका", correct: false },
            { text: "अंटार्कटिका", correct: true },
            { text: "एशिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंटार्कटिका का लगभग 98% हिस्सा स्थायी रूप से बर्फ की मोटी चादर से ढका रहता है, जिस कारण इसे 'श्वेत महाद्वीप' कहते हैं।"
    },
    {
        question: "जनसंख्या की दृष्टि से विश्व का दूसरा सबसे बड़ा महाद्वीप कौन सा है?",
        answers: shuffle([
            { text: "यूरोप", correct: false },
            { text: "उत्तरी अमेरिका", correct: false },
            { text: "अफ़्रीका", correct: true },
            { text: "दक्षिण अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एशिया के बाद अफ़्रीका जनसंख्या की दृष्टि से विश्व का दूसरा सबसे बड़ा महाद्वीप है।"
    },
    {
        question: "किस महाद्वीप को 'प्रायद्वीपों का प्रायद्वीप' कहा जाता है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "यूरोप", correct: true },
            { text: "उत्तरी अमेरिका", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूरोप महाद्वीप स्वयं एक बड़ा प्रायद्वीप है और इसके भीतर भी कई छोटे-छोटे प्रायद्वीप (जैसे- इबेरियन, बाल्कन, स्कैंडिनेवियन) हैं, इसलिए इसे 'प्रायद्वीपों का प्रायद्वीप' कहते हैं।"
    },
    {
        question: "'नई दुनिया' (New World) के नाम से किस महाद्वीप को जाना जाता है?",
        answers: shuffle([
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "दक्षिण अमेरिका", correct: false },
            { text: "एशिया", correct: false },
            { text: "उत्तरी अमेरिका", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूरोपीय खोजकर्ताओं द्वारा 15वीं शताब्दी के बाद खोजे जाने के कारण उत्तरी और दक्षिण अमेरिका को सामूहिक रूप से 'नई दुनिया' कहा जाता है।"
    },
    {
        question: "'मेसेटा का पठार' किस यूरोपीय देश में स्थित है?",
        answers: shuffle([
            { text: "फ्रांस", correct: false },
            { text: "स्पेन", correct: true },
            { text: "इटली", correct: false },
            { text: "जर्मनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेसेटा सेंट्रल या इबेरियन मेसेटा स्पेन के आंतरिक भाग में स्थित एक विशाल पठार है।"
    },
    {
        question: "कौन सा महाद्वीप भूमध्य रेखा के दोनों ओर फैला हुआ है?",
        answers: shuffle([
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "यूरोप", correct: false },
            { text: "दक्षिण अमेरिका", correct: true },
            { text: "अंटार्कटिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्षिण अमेरिका और अफ़्रीका दोनों महाद्वीप भूमध्य रेखा के दोनों ओर (उत्तरी और दक्षिणी गोलार्ध) में फैले हुए हैं।"
    },
    {
        question: "विश्व की सबसे खारी झील 'अससाल झील' किस महाद्वीप में है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "अफ़्रीका", correct: true },
            { text: "उत्तरी अमेरिका", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अससाल झील जिबूती (अफ़्रीका) में स्थित एक क्रेटर झील है और यह मृत सागर से भी अधिक खारी है, जो इसे पृथ्वी पर सबसे खारे जल निकायों में से एक बनाती है।"
    },
    {
        question: "विश्व की सबसे लम्बी पर्वत श्रृंखला 'एंडीज' किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "उत्तरी अमेरिका", correct: false },
            { text: "दक्षिण अमेरिका", correct: true },
            { text: "अफ़्रीका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंडीज पर्वत श्रृंखला दक्षिण अमेरिका के पश्चिमी तट पर फैली हुई है और यह विश्व की सबसे लम्बी महाद्वीपीय पर्वत श्रृंखला है।"
    },
    {
        question: "'पक्षियों का महाद्वीप' किसे कहा जाता है?",
        answers: shuffle([
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "एशिया", correct: false },
            { text: "अफ़्रीका", correct: false },
            { text: "दक्षिण अमेरिका", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विभिन्न प्रकार की पक्षी प्रजातियों की विशाल संख्या और विविधता के कारण दक्षिण अमेरिका को 'पक्षियों का महाद्वीप' कहा जाता है।"
    },
    {
        question: "कौन से दो महाद्वीप एक-दूसरे का दर्पण प्रतिबिम्ब प्रतीत होते हैं?",
        answers: shuffle([
            { text: "उत्तरी अमेरिका और दक्षिण अमेरिका", correct: false },
            { text: "अफ़्रीका और दक्षिण अमेरिका", correct: true },
            { text: "यूरोप और एशिया", correct: false },
            { text: "ऑस्ट्रेलिया और अंटार्कटिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अटलांटिक महासागर के दोनों ओर स्थित अफ़्रीका और दक्षिण अमेरिका के तटों की बनावट ऐसी है कि वे एक-दूसरे में फिट हो सकते हैं, जो महाद्वीपीय विस्थापन सिद्धांत का एक प्रमुख प्रमाण है।"
    },
    {
        question: "किस महाद्वीप का अधिकांश भाग मरुस्थल है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "ऑस्ट्रेलिया", correct: true },
            { text: "अफ़्रीका", correct: false },
            { text: "उत्तरी अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑस्ट्रेलिया महाद्वीप का एक बड़ा हिस्सा, जिसे 'आउटबैक' कहा जाता है, शुष्क और मरुस्थलीय है।"
    },
    {
        question: "विश्व की छत' के नाम से प्रसिद्ध 'पामीर का पठार' किस महाद्वीप में है?",
        answers: shuffle([
            { text: "यूरोप", correct: false },
            { text: "अफ़्रीका", correct: false },
            { text: "एशिया", correct: true },
            { text: "उत्तरी अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पामीर का पठार मध्य एशिया में स्थित एक प्रमुख पठार और पर्वत गाँठ है, जिसे इसकी ऊँचाई के कारण 'विश्व की छत' कहा जाता है।"
    },
    {
        question: "विश्व की सबसे गहरी झील 'बैकाल झील' कहाँ स्थित है?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "भारत", correct: false },
            { text: "रूस (साइबेरिया)", correct: true },
            { text: "मंगोलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैकाल झील रूस के साइबेरिया क्षेत्र में स्थित है और यह आयतन के हिसाब से दुनिया की सबसे बड़ी और सबसे गहरी मीठे पानी की झील है।"
    },
    {
        question: "विश्व का सबसे ऊँचा पठार कौन सा है?",
        answers: shuffle([
            { text: "दक्कन का पठार", correct: false },
            { text: "तिब्बत का पठार", correct: true },
            { text: "अरब का पठार", correct: false },
            { text: "अनातोलिया का पठार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तिब्बत का पठार मध्य एशिया में स्थित है और यह विश्व का सबसे ऊँचा और सबसे बड़ा पठार है।"
    },
    {
        question: "एशिया महाद्वीप की सबसे लम्बी नदी कौन सी है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "यांग्त्ज़ी", correct: true },
            { text: "ह्वांग हो", correct: false },
            { text: "मेकांग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यांग्त्ज़ी नदी चीन में बहती है और यह एशिया की सबसे लम्बी तथा दुनिया की तीसरी सबसे लम्बी नदी है।"
    },
    {
        question: "स्वेज नहर किन दो सागरों को जोड़ती है?",
        answers: shuffle([
            { text: "भूमध्य सागर और काला सागर", correct: false },
            { text: "लाल सागर और अरब सागर", correct: false },
            { text: "भूमध्य सागर और लाल सागर", correct: true },
            { text: "फारस की खाड़ी और ओमान की खाड़ी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्वेज नहर एशिया और अफ़्रीका को विभाजित करती है तथा यह भूमध्य सागर को लाल सागर से जोड़ती है, जिससे समुद्री व्यापार का मार्ग छोटा हो जाता है।"
    },
    {
        question: "विश्व का सबसे बड़ा प्रायद्वीप कौन सा है?",
        answers: shuffle([
            { text: "भारतीय प्रायद्वीप", correct: false },
            { text: "इंडोचीन प्रायद्वीप", correct: false },
            { text: "अरब प्रायद्वीप", correct: true },
            { text: "कोरियाई प्रायद्वीप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरब प्रायद्वीप दक्षिण-पश्चिम एशिया में स्थित है और यह क्षेत्रफल की दृष्टि से विश्व का सबसे बड़ा प्रायद्वीप है।"
    },
    {
        question: "एशिया और यूरोप को अलग करने वाली पर्वत श्रृंखला का क्या नाम है?",
        answers: shuffle([
            { text: "हिमालय", correct: false },
            { text: "आल्प्स", correct: false },
            { text: "यूराल", correct: true },
            { text: "कॉकेशस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूराल पर्वत श्रृंखला, यूराल नदी और कैस्पियन सागर मिलकर पारंपरिक रूप से एशिया और यूरोप के बीच की सीमा बनाते हैं।"
    },
    {
        question: "'मृत सागर' (Dead Sea) किन देशों के बीच स्थित है?",
        answers: shuffle([
            { text: "जॉर्डन और इज़राइल", correct: true },
            { text: "तुर्की और सीरिया", correct: false },
            { text: "ईरान और इराक", correct: false },
            { text: "मिस्र और सूडान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मृत सागर जॉर्डन और इज़राइल की सीमा पर स्थित एक खारे पानी की झील है, जिसकी लवणता बहुत अधिक है।"
    },
    {
        question: "विश्व में सर्वाधिक वर्षा वाला स्थान 'मासिनराम' किस देश में है?",
        answers: shuffle([
            { text: "बांग्लादेश", correct: false },
            { text: "भारत", correct: true },
            { text: "थाईलैंड", correct: false },
            { text: "नेपाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मासिनराम भारत के मेघालय राज्य में स्थित है और इसे गिनीज बुक ऑफ वर्ल्ड रिकॉर्ड्स द्वारा पृथ्वी पर सबसे नम स्थान के रूप में दर्ज किया गया है।"
    },
    {
        question: "'गोबी मरुस्थल' का विस्तार किन दो देशों में है?",
        answers: shuffle([
            { text: "चीन और भारत", correct: false },
            { text: "मंगोलिया और चीन", correct: true },
            { text: "रूस और मंगोलिया", correct: false },
            { text: "कजाकिस्तान और चीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गोबी मरुस्थल एक ठंडा मरुस्थल है जो उत्तरी चीन और दक्षिणी मंगोलिया के विशाल भूभाग पर फैला हुआ है।"
    },
    {
        question: "फिलीपींस द्वीप समूह किस महासागर में स्थित है?",
        answers: shuffle([
            { text: "हिंद महासागर", correct: false },
            { text: "अटलांटिक महासागर", correct: false },
            { text: "आर्कटिक महासागर", correct: false },
            { text: "प्रशांत महासागर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फिलीपींस दक्षिण-पूर्व एशिया में स्थित एक द्वीपसमूह है जो पश्चिमी प्रशांत महासागर में स्थित है।"
    },
    {
        question: "विश्व की सबसे बड़ी झील (क्षेत्रफल में) 'कैस्पियन सागर' किन महाद्वीपों को स्पर्श करती है?",
        answers: shuffle([
            { text: "एशिया और अफ़्रीका", correct: false },
            { text: "यूरोप और अफ़्रीका", correct: false },
            { text: "एशिया और यूरोप", correct: true },
            { text: "उत्तरी अमेरिका और एशिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैस्पियन सागर अपने विशाल आकार के कारण एक सागर कहलाता है, लेकिन यह एक झील है जो एशिया और यूरोप दोनों महाद्वीपों की सीमा पर स्थित है।"
    },
    {
        question: "मेकांग नदी निम्नलिखित में से किस देश से होकर नहीं बहती है?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "म्यांमार", correct: false },
            { text: "मलेशिया", correct: true },
            { text: "वियतनाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेकांग नदी चीन, म्यांमार, लाओस, थाईलैंड, कंबोडिया और वियतनाम से होकर बहती है, लेकिन मलेशिया से नहीं।"
    },
    {
        question: "'टकलामाकन मरुस्थल' किस देश में स्थित है?",
        answers: shuffle([
            { text: "मंगोलिया", correct: false },
            { text: "पाकिस्तान", correct: false },
            { text: "उज़्बेकिस्तान", correct: false },
            { text: "चीन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टकलामाकन मरुस्थल चीन के शिनजियांग उइगुर स्वायत्त क्षेत्र में स्थित है।"
    },
    {
        question: "'होर्मुज जलसंधि' किन दो जल निकायों को जोड़ती है?",
        answers: shuffle([
            { text: "फारस की खाड़ी और ओमान की खाड़ी", correct: true },
            { text: "लाल सागर और अदन की खाड़ी", correct: false },
            { text: "अंडमान सागर और दक्षिण चीन सागर", correct: false },
            { text: "जावा सागर और हिंद महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> होर्मुज जलसंधि ईरान और ओमान के बीच स्थित एक महत्वपूर्ण जलमार्ग है जो फारस की खाड़ी को ओमान की खाड़ी और अरब सागर से जोड़ता है।"
    },
    {
        question: "'बाल्कन प्रायद्वीप' किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "यूरोप", correct: true },
            { text: "अफ़्रीका", correct: false },
            { text: "उत्तरी अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाल्कन प्रायद्वीप दक्षिण-पूर्वी यूरोप में स्थित है और इसमें अल्बानिया, बोस्निया, बुल्गारिया, ग्रीस जैसे कई देश शामिल हैं।"
    },
    {
        question: "'अनातोलिया का पठार' किस देश में स्थित है?",
        answers: shuffle([
            { text: "ईरान", correct: false },
            { text: "तुर्की", correct: true },
            { text: "सऊदी अरब", correct: false },
            { text: "सीरिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनातोलिया का पठार, जिसे एशियाई तुर्की भी कहा जाता है, तुर्की के अधिकांश भूभाग का निर्माण करता है।"
    },
    {
        question: "'स्वर्णिम त्रिभुज' (Golden Triangle) दक्षिण-पूर्व एशिया में किन देशों की सीमाओं का मिलन स्थल है, जो अफीम उत्पादन के लिए जाना जाता है?",
        answers: shuffle([
            { text: "थाईलैंड, लाओस, म्यांमार", correct: true },
            { text: "वियतनाम, कंबोडिया, थाईलैंड", correct: false },
            { text: "चीन, भारत, म्यांमार", correct: false },
            { text: "लाओस, चीन, वियतनाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह क्षेत्र इन तीन देशों की सीमाओं पर स्थित है और दुनिया के सबसे बड़े अफीम उत्पादक क्षेत्रों में से एक रहा है।"
    },
    {
        question: "विश्व का सबसे बड़ा द्वीपसमूह (archipelago) कौन सा देश है?",
        answers: shuffle([
            { text: "जापान", correct: false },
            { text: "फिलीपींस", correct: false },
            { text: "इंडोनेशिया", correct: true },
            { text: "मालदीव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंडोनेशिया 17,000 से अधिक द्वीपों से मिलकर बना है, जो इसे दुनिया का सबसे बड़ा द्वीपसमूह बनाता है।"
    },
    {
        question: "'पर्वतों का सागर' किस देश को कहा जाता है?",
        answers: shuffle([
            { text: "जापान", correct: true },
            { text: "नेपाल", correct: false },
            { text: "स्विट्जरलैंड", correct: false },
            { text: "नॉर्वे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जापान का लगभग 80% भूभाग पहाड़ी है, जिसके कारण इसे यह उपनाम दिया गया है।"
    },
    {
        question: "बेरिंग जलसंधि किन दो महाद्वीपों को अलग करती है?",
        answers: shuffle([
            { text: "एशिया और अफ़्रीका", correct: false },
            { text: "एशिया और उत्तरी अमेरिका", correct: true },
            { text: "यूरोप और अफ़्रीका", correct: false },
            { text: "एशिया और ऑस्ट्रेलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बेरिंग जलसंधि एशिया के पूर्वी छोर (रूस) को उत्तरी अमेरिका के पश्चिमी छोर (अलास्का) से अलग करती है।"
    },
    {
        question: "किस नदी को 'चीन का शोक' कहा जाता है?",
        answers: shuffle([
            { text: "यांग्त्ज़ी नदी", correct: false },
            { text: "मेकांग नदी", correct: false },
            { text: "ह्वांग हो नदी", correct: true },
            { text: "पर्ल नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस नदी में आने वाली विनाशकारी बाढ़ों के कारण इसे 'चीन का शोक' या 'पीली नदी' कहा जाता है।"
    },
    {
        question: "'हिंद महासागर का मोती' किस देश को कहा जाता है?",
        answers: shuffle([
            { text: "मालदीव", correct: false },
            { text: "मॉरीशस", correct: false },
            { text: "श्रीलंका", correct: true },
            { text: "इंडोनेशिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद महासागर में इसकी विशिष्ट आकृति और स्थिति के कारण श्रीलंका को 'हिंद महासागर का मोती' कहा जाता है।"
    },
    {
        question: "विश्व का सबसे बड़ा भू-आबद्ध (landlocked) देश कौन सा है?",
        answers: shuffle([
            { text: "मंगोलिया", correct: false },
            { text: "नेपाल", correct: false },
            { text: "कजाकिस्तान", correct: true },
            { text: "अफगानिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्षेत्रफल की दृष्टि से कजाकिस्तान विश्व का सबसे बड़ा भू-आबद्ध देश है, अर्थात इसकी कोई सीमा सीधे समुद्र से नहीं मिलती है।"
    },
    {
        question: "'सुंडा जलसंधि' किन दो द्वीपों के बीच स्थित है?",
        answers: shuffle([
            { text: "जावा और सुमात्रा", correct: true },
            { text: "बोर्नियो और सुलावेसी", correct: false },
            { text: "बाली और लोम्बोक", correct: false },
            { text: "सुमात्रा और मलेशिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुंडा जलसंधि इंडोनेशिया के जावा और सुमात्रा द्वीपों को अलग करती है तथा जावा सागर को हिंद महासागर से जोड़ती है।"
    },
    {
        question: "विश्व का सबसे बड़ा गर्म मरुस्थल 'सहारा' किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "अफ़्रीका", correct: true },
            { text: "दक्षिण अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सहारा मरुस्थल उत्तरी अफ़्रीका के एक विशाल क्षेत्र में फैला हुआ है और यह विश्व का सबसे बड़ा गर्म मरुस्थल है।"
    },
    {
        question: "विश्व की सबसे लम्बी नदी 'नील' का उद्गम स्थल क्या है?",
        answers: shuffle([
            { text: "टांगानिका झील", correct: false },
            { text: "विक्टोरिया झील", correct: true },
            { text: "चाड झील", correct: false },
            { text: "मलावी झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नील नदी का मुख्य स्रोत श्वेत नील है, जो विक्टोरिया झील से निकलती है।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में इसमें इथियोपिया से आने वाली नीली नील मिलती है।"
    },
    {
        question: "'हॉर्न ऑफ अफ़्रीका' (अफ्रीका का सींग) में कौन सा देश शामिल नहीं है?",
        answers: shuffle([
            { text: "इथियोपिया", correct: false },
            { text: "सोमालिया", correct: false },
            { text: "जिबूती", correct: false },
            { text: "सूडान", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हॉर्न ऑफ अफ़्रीका में मुख्य रूप से सोमालिया, इथियोपिया, जिबूती और इरिट्रिया देश शामिल हैं।"
    },
    {
        question: "प्रसिद्ध 'विक्टोरिया जलप्रपात' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "नील नदी", correct: false },
            { text: "कांगो नदी", correct: false },
            { text: "ज़म्बेजी नदी", correct: true },
            { text: "नाइजर नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्टोरिया जलप्रपात ज़ाम्बिया और जिम्बाब्वे की सीमा पर ज़म्बेजी नदी पर स्थित है और यह दुनिया के सबसे बड़े जलप्रपातों में से एक है।"
    },
    {
        question: "'एटलस पर्वत' किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "यूरोप", correct: false },
            { text: "एशिया", correct: false },
            { text: "अफ़्रीका", correct: true },
            { text: "दक्षिण अमेरिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एटलस पर्वत श्रृंखला उत्तर-पश्चिमी अफ़्रीका के मोरक्को, अल्जीरिया और ट्यूनीशिया देशों में फैली हुई है।"
    },
    {
        question: "किस नदी को 'तेल नदी' (Oil River) के नाम से भी जाना जाता है?",
        answers: shuffle([
            { text: "नाइजर नदी", correct: true },
            { text: "कांगो नदी", correct: false },
            { text: "नील नदी", correct: false },
            { text: "वोल्टा नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसके डेल्टा क्षेत्र में पाम तेल के प्रचुर उत्पादन और व्यापार के कारण इसे ऐतिहासिक रूप से 'तेल नदी' कहा जाता था।"
    },
    {
        question: "'कालाहारी मरुस्थल' का विस्तार मुख्यतः किस देश में है?",
        answers: shuffle([
            { text: "नामीबिया", correct: false },
            { text: "दक्षिण अफ़्रीका", correct: false },
            { text: "बोत्सवाना", correct: true },
            { text: "अंगोला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालाहारी मरुस्थल का लगभग 70% हिस्सा बोत्सवाना में है, हालांकि यह नामीबिया और दक्षिण अफ़्रीका में भी फैला हुआ है।"
    },
    {
        question: "भूमध्य रेखा को दो बार काटने वाली नदी कौन सी है?",
        answers: shuffle([
            { text: "नील", correct: false },
            { text: "नाइजर", correct: false },
            { text: "कांगो (जायरे)", correct: true },
            { text: "ज़म्बेजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कांगो नदी, जिसे जायरे नदी भी कहा जाता है, अपने बहाव के दौरान भूमध्य रेखा को दो बार पार करती है।"
    },
    {
        question: "अफ़्रीका की सबसे ऊँची पर्वत चोटी 'माउंट किलिमंजारो' किस देश में स्थित है?",
        answers: shuffle([
            { text: "केन्या", correct: false },
            { text: "तंजानिया", correct: true },
            { text: "युगांडा", correct: false },
            { text: "इथियोपिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट किलिमंजारो एक निष्क्रिय ज्वालामुखी है और यह तंजानिया में स्थित अफ़्रीका का सबसे ऊँचा पर्वत है।"
    },
    {
        question: "'पिग्मी' जनजाति का निवास क्षेत्र मुख्यतः कहाँ है?",
        answers: shuffle([
            { text: "सहारा मरुस्थल", correct: false },
            { text: "कांगो बेसिन के वर्षावन", correct: true },
            { text: "कालाहारी मरुस्थल", correct: false },
            { text: "पूर्वी अफ़्रीकी सवाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पिग्मी जनजाति के लोग मध्य अफ़्रीका के कांगो बेसिन के घने वर्षावनों में निवास करते हैं और वे अपनी कम औसत ऊंचाई के लिए जाने जाते हैं।"
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