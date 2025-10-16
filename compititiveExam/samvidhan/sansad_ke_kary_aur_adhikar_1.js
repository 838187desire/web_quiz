const questions = [
    {
        topHeading: "संसद के कार्य और अधिकार पर आधारित 50 बहुविकल्पीय प्रश्न (quiz_no.)"
    },
    {
        question: "प्रश्न 1. भारतीय संसद में कौन-कौन शामिल हैं?",
        answers: shuffle([
            { text: "केवल लोकसभा", correct: false },
            { text: "लोकसभा और राज्यसभा", correct: false },
            { text: "राष्ट्रपति, लोकसभा और राज्यसभा", correct: true },
            { text: "राष्ट्रपति और लोकसभा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान के अनुच्छेद 79 के अनुसार, संघ के लिए एक संसद होगी, जो राष्ट्रपति और दो सदनों - राज्यसभा (राज्यों की परिषद) और लोकसभा (लोगों का सदन) से मिलकर बनेगी।"
    },
    {
        question: "प्रश्न 2. संसद का प्राथमिक कार्य क्या है?",
        answers: shuffle([
            { text: "कानून बनाना", correct: true },
            { text: "बजट पारित करना", correct: false },
            { text: "कार्यपालिका पर नियंत्रण", correct: false },
            { text: "संविधान में संशोधन करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संसद का सबसे महत्वपूर्ण कार्य देश के लिए कानूनों का निर्माण करना है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह संघ सूची और समवर्ती सूची में वर्णित विषयों पर कानून बना सकती है।"
    },
    {
        question: "प्रश्न 3. कोई विधेयक धन विधेयक है या नहीं, इसका अंतिम निर्णय कौन करता है?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "राष्ट्रपति", correct: false },
            { text: "लोकसभा अध्यक्ष", correct: true },
            { text: "वित्त मंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के अनुच्छेद 110(3) के अनुसार, यदि यह प्रश्न उठता है कि कोई विधेयक धन विधेयक है या नहीं, तो उस पर लोकसभा अध्यक्ष का निर्णय अंतिम होता है।"
    },
    {
        question: "प्रश्न 4. संसद के दो सत्रों के बीच अधिकतम कितना अंतराल हो सकता है?",
        answers: shuffle([
            { text: "तीन महीने", correct: false },
            { text: "छह महीने", correct: true },
            { text: "नौ महीने", correct: false },
            { text: "एक वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के अनुसार, संसद के एक सत्र की अंतिम बैठक और अगले सत्र की पहली बैठक के बीच छह महीने से अधिक का अंतर नहीं होना चाहिए।"
    },
    {
        question: "प्रश्न 5. 'अविश्वास प्रस्ताव' (No-Confidence Motion) किस सदन में प्रस्तुत किया जाता है?",
        answers: shuffle([
            { text: "केवल लोकसभा में", correct: true },
            { text: "केवल राज्यसभा में", correct: false },
            { text: "लोकसभा या राज्यसभा किसी में भी", correct: false },
            { text: "दोनों सदनों की संयुक्त बैठक में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंत्रिपरिषद सामूहिक रूप से केवल लोकसभा के प्रति उत्तरदायी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, अविश्वास प्रस्ताव केवल लोकसभा में ही लाया जा सकता है।"
    },
    {
        question: "प्रश्न 6. संसद की 'लोक लेखा समिति' (Public Accounts Committee) में कितने सदस्य होते हैं?",
        answers: shuffle([
            { text: "15 सदस्य (10 लोकसभा से, 5 राज्यसभा से)", correct: false },
            { text: "22 सदस्य (15 लोकसभा से, 7 राज्यसभा से)", correct: true },
            { text: "30 सदस्य (सभी लोकसभा से)", correct: false },
            { text: "25 सदस्य (15 लोकसभा से, 10 राज्यसभा से)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोक लेखा समिति में कुल 22 सदस्य होते हैं, जिनमें से 15 सदस्य लोकसभा से और 7 सदस्य राज्यसभा से चुने जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका मुख्य कार्य भारत सरकार के खर्चों की लेखा परीक्षा करना है।"
    },
    {
        question: "प्रश्न 7. भारतीय संसद किस माध्यम से प्रशासन पर नियंत्रण रखती है?",
        answers: shuffle([
            { text: "संसदीय समितियों के माध्यम से", correct: false },
            { text: "विभिन्न प्रस्तावों के माध्यम से", correct: false },
            { text: "प्रश्नकाल और शून्यकाल के माध्यम से", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संसद विभिन्न संसदीय समितियों, अविश्वास प्रस्ताव, निंदा प्रस्ताव जैसे प्रस्तावों और प्रश्नकाल तथा शून्यकाल के दौरान प्रश्न पूछकर कार्यपालिका (प्रशासन) पर नियंत्रण रखती है।"
    },
    {
        question: "प्रश्न 8. संविधान संशोधन विधेयक के संबंध में क्या सत्य है?",
        answers: shuffle([
            { text: "इसे केवल लोकसभा में प्रस्तुत किया जा सकता है।", correct: false },
            { text: "इस पर राष्ट्रपति वीटो का प्रयोग नहीं कर सकते।", correct: true },
            { text: "इस पर संयुक्त बैठक का प्रावधान है।", correct: false },
            { text: "इसे पारित करने के लिए साधारण बहुमत की आवश्यकता होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 24वें संविधान संशोधन अधिनियम, 1971 के बाद, राष्ट्रपति के लिए संविधान संशोधन विधेयक पर अपनी सहमति देना अनिवार्य कर दिया गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> वह इसे न तो रोक सकते हैं और न ही पुनर्विचार के लिए लौटा सकते हैं।"
    },
    {
        question: "प्रश्न 9. संसद के किसी सदस्य की अयोग्यता के संबंध में विवाद का निर्णय कौन करता है?",
        answers: shuffle([
            { text: "संबंधित सदन का अध्यक्ष", correct: false },
            { text: "प्रधानमंत्री", correct: false },
            { text: "उच्चतम न्यायालय", correct: false },
            { text: "राष्ट्रपति (चुनाव आयोग की सलाह पर)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के अनुच्छेद 103 के अनुसार, यदि कोई सदस्य अयोग्यता से ग्रस्त हो जाता है, तो इस मामले को राष्ट्रपति के पास भेजा जाता है, जो चुनाव आयोग की राय के अनुसार निर्णय लेते हैं।"
    },
    {
        question: "प्रश्न 10. 'शून्यकाल' (Zero Hour) संसदीय व्यवस्था में किस देश की देन है?",
        answers: shuffle([
            { text: "अमेरिका", correct: false },
            { text: "ब्रिटेन", correct: false },
            { text: "भारत", correct: true },
            { text: "स्विट्जरलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शून्यकाल भारतीय संसदीय प्रक्रिया का एक अनौपचारिक नवाचार है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रश्नकाल के तुरंत बाद शुरू होता है और इसमें सदस्य बिना किसी पूर्व सूचना के महत्वपूर्ण मामले उठा सकते हैं।"
    },
    {
        question: "प्रश्न 11. साधारण विधेयक पर दोनों सदनों में गतिरोध होने पर क्या होता है?",
        answers: shuffle([
            { text: "विधेयक रद्द हो जाता है।", correct: false },
            { text: "राष्ट्रपति संयुक्त बैठक बुलाते हैं।", correct: true },
            { text: "लोकसभा का निर्णय अंतिम माना जाता है।", correct: false },
            { text: "राज्यसभा का निर्णय अंतिम माना जाता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 108 के तहत, यदि किसी साधारण विधेयक पर दोनों सदनों के बीच असहमति होती है, तो राष्ट्रपति गतिरोध को हल करने के लिए दोनों सदनों की संयुक्त बैठक बुला सकते हैं।"
    },
    {
        question: "प्रश्न 12. भारत की संचित निधि से धन निकालने के लिए संसद से किसकी स्वीकृति अनिवार्य है?",
        answers: shuffle([
            { text: "वित्त विधेयक (Finance Bill)", correct: false },
            { text: "विनियोग विधेयक (Appropriation Bill)", correct: true },
            { text: "धन विधेयक (Money Bill)", correct: false },
            { text: "बजट प्रस्ताव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के अनुच्छेद 114 के अनुसार, सरकार संसद द्वारा विनियोग विधेयक पारित किए जाने के बाद ही भारत की संचित निधि से कोई धन निकाल सकती है।"
    },
    {
        question: "प्रश्न 13. संसद सदस्य न होते हुए भी कौन संसद की कार्यवाही में भाग ले सकता है, लेकिन मतदान नहीं कर सकता?",
        answers: shuffle([
            { text: "भारत का मुख्य न्यायाधीश", correct: false },
            { text: "भारत का महान्यायवादी (Attorney General)", correct: true },
            { text: "मुख्य चुनाव आयुक्त", correct: false },
            { text: "नियंत्रक एवं महालेखा परीक्षक (CAG)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 88 के अनुसार, भारत का महान्यायवादी संसद के किसी भी सदन में, दोनों सदनों की संयुक्त बैठक में और संसद की किसी भी समिति में बोल सकता है और भाग ले सकता है, लेकिन उसे मत देने का अधिकार नहीं होता।"
    },
    {
        question: "प्रश्न 14. राज्यसभा धन विधेयक को अधिकतम कितने दिनों तक रोक सकती है?",
        answers: shuffle([
            { text: "14 दिन", correct: true },
            { text: "1 महीना", correct: false },
            { text: "6 महीने", correct: false },
            { text: "अनिश्चित काल तक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धन विधेयक के मामले में राज्यसभा की शक्तियां सीमित हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> वह इसे केवल 14 दिनों तक रोक सकती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि 14 दिनों के भीतर विधेयक वापस नहीं किया जाता है, तो उसे दोनों सदनों द्वारा पारित मान लिया जाता है।"
    },
    {
        question: "प्रश्न 15. राष्ट्रपति पर महाभियोग (Impeachment) का प्रस्ताव संसद के किस सदन में लाया जा सकता है?",
        answers: shuffle([
            { text: "केवल लोकसभा में", correct: false },
            { text: "केवल राज्यसभा में", correct: false },
            { text: "संसद के किसी भी सदन में", correct: true },
            { text: "उच्चतम न्यायालय में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के अनुच्छेद 61 के अनुसार, राष्ट्रपति पर महाभियोग की प्रक्रिया संसद के किसी भी सदन द्वारा शुरू की जा सकती है।"
    },
    {
        question: "प्रश्न 16. संसद की 'प्राक्कलन समिति' (Estimates Committee) के बारे में क्या सत्य है?",
        answers: shuffle([
            { text: "इसमें 22 सदस्य होते हैं।", correct: false },
            { text: "इसके सभी 30 सदस्य लोकसभा से होते हैं।", correct: true },
            { text: "इसमें राज्यसभा के सदस्य भी शामिल होते हैं।", correct: false },
            { text: "इसका अध्यक्ष विपक्ष का नेता होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्राक्कलन समिति को 'स्थायी मितव्ययिता समिति' भी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें 30 सदस्य होते हैं और सभी सदस्य केवल लोकसभा से चुने जाते हैं।"
    },
    {
        question: "प्रश्न 17. 'कटौती प्रस्ताव' (Cut Motion) का उद्देश्य क्या होता है?",
        answers: shuffle([
            { text: "सरकार के किसी प्रस्ताव को खारिज करना।", correct: false },
            { text: "बजट प्रस्तावों में खर्च की राशि में कमी करना।", correct: true },
            { text: "किसी मंत्री के वेतन में कटौती करना।", correct: false },
            { text: "विधेयक पर चर्चा को रोकना।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कटौती प्रस्ताव केवल लोकसभा में बजट की मांगों पर चर्चा के दौरान लाया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका उद्देश्य अनुदान की मांग में कमी करके सरकार की नीतियों के प्रति असहमति व्यक्त करना होता है।"
    },
    {
        question: "प्रश्न 18. संसद के स्थगन (Adjournment) और सत्रावसान (Prorogation) में क्या अंतर है?",
        answers: shuffle([
            { text: "स्थगन सदन का अध्यक्ष करता है, जबकि सत्रावसान राष्ट्रपति करते हैं।", correct: true },
            { text: "स्थगन अनिश्चित काल के लिए होता है, सत्रावसान निश्चित काल के लिए।", correct: false },
            { text: "स्थगन से विधेयक समाप्त हो जाते हैं, सत्रावसान से नहीं।", correct: false },
            { text: "दोनों में कोई अंतर नहीं है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्थगन एक बैठक के काम को निलंबित करता है, जो सदन के पीठासीन अधिकारी (अध्यक्ष/सभापति) द्वारा किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> सत्रावसान राष्ट्रपति द्वारा किया जाता है और यह संसद के एक सत्र को समाप्त करता है।"
    },
    {
        question: "प्रश्न 19. अखिल भारतीय सेवाओं (All India Services) का सृजन करने की शक्ति किसे प्राप्त है?",
        answers: shuffle([
            { text: "लोकसभा को", correct: false },
            { text: "राज्यसभा को", correct: true },
            { text: "प्रधानमंत्री कार्यालय को", correct: false },
            { text: "संघ लोक सेवा आयोग को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान का अनुच्छेद 312 राज्यसभा को यह विशेष शक्ति देता है कि यदि वह उपस्थित और मतदान करने वाले सदस्यों के दो-तिहाई बहुमत से प्रस्ताव पारित कर दे कि राष्ट्रीय हित में ऐसा करना आवश्यक है, तो संसद कानून द्वारा नई अखिल भारतीय सेवाओं का सृजन कर सकती है।"
    },
    {
        question: "प्रश्न 20. संसद में 'कोरम' या 'गणपूर्ति' के लिए कितने सदस्यों की उपस्थिति आवश्यक है?",
        answers: shuffle([
            { text: "सदन की कुल सदस्य संख्या का 1/10", correct: true },
            { text: "सदन की कुल सदस्य संख्या का 1/4", correct: false },
            { text: "सदन की कुल सदस्य संख्या का 1/3", correct: false },
            { text: "50 सदस्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 100(3) के अनुसार, संसद के किसी भी सदन की बैठक के लिए गणपूर्ति उस सदन की कुल सदस्य संख्या का दसवां हिस्सा (1/10) होती है।"
    },
    {
        question: "प्रश्न 21. भारत के राष्ट्रपति और उपराष्ट्रपति के चुनाव से संबंधित विवादों का निर्णय कौन करता है?",
        answers: shuffle([
            { text: "संसद", correct: false },
            { text: "लोकसभा अध्यक्ष", correct: false },
            { text: "उच्चतम न्यायालय", correct: true },
            { text: "चुनाव आयोग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के अनुच्छेद 71 के अनुसार, राष्ट्रपति या उपराष्ट्रपति के चुनाव से संबंधित सभी संदेहों और विवादों की जांच और निर्णय उच्चतम न्यायालय द्वारा किया जाएगा और उसका निर्णय अंतिम होगा।"
    },
    {
        question: "प्रश्न 22. लोकसभा के विघटन (Dissolution) का क्या प्रभाव पड़ता है?",
        answers: shuffle([
            { text: "a) राज्यसभा में लंबित सभी विधेयक समाप्त हो जाते हैं।", correct: false },
            { text: "b) लोकसभा में लंबित सभी विधेयक और प्रस्ताव समाप्त हो जाते हैं।", correct: false },
            { text: "c) दोनों सदनों द्वारा पारित विधेयक पर कोई प्रभाव नहीं पड़ता।", correct: false },
            { text: "b) और c) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोकसभा के विघटन से लोकसभा में लंबित सभी विधेयक, प्रस्ताव, संकल्प आदि समाप्त हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, जो विधेयक दोनों सदनों द्वारा पारित कर दिए गए हैं और राष्ट्रपति की सहमति के लिए लंबित हैं, वे समाप्त नहीं होते।"
    },
    {
        question: "प्रश्न 23. संसद के विशेषाधिकार (Parliamentary Privileges) का मुख्य उद्देश्य क्या है?",
        answers: shuffle([
            { text: "सांसदों को कानूनी कार्यवाही से बचाना।", correct: false },
            { text: "संसद की स्वतंत्रता और गरिमा सुनिश्चित करना।", correct: true },
            { text: "सांसदों को विशेष भत्ते प्रदान करना।", correct: false },
            { text: "सरकार को अतिरिक्त शक्तियां देना।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संसदीय विशेषाधिकारों का उद्देश्य यह सुनिश्चित करना है कि संसद और उसके सदस्य बिना किसी भय या हस्तक्षेप के अपने कर्तव्यों का प्रभावी ढंग से निर्वहन कर सकें।"
    },
    {
        question: "प्रश्न 24. 'ध्यानाकर्षण प्रस्ताव' (Calling Attention Motion) का क्या उद्देश्य है?",
        answers: shuffle([
            { text: "सरकार की आलोचना करना।", correct: false },
            { text: "किसी अविलंबनीय लोक महत्व के मामले पर मंत्री का ध्यान आकर्षित करना।", correct: true },
            { text: "सदन की कार्यवाही को स्थगित करना।", correct: false },
            { text: "बजट में कटौती करना।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह भी भारतीय संसदीय प्रक्रिया का एक नवाचार है, जिसके माध्यम से कोई सदस्य अध्यक्ष की अनुमति से किसी अत्यावश्यक सार्वजनिक महत्व के विषय पर संबंधित मंत्री का ध्यान आकर्षित करता है।"
    },
    {
        question: "प्रश्न 25. उच्चतम न्यायालय और उच्च न्यायालयों के न्यायाधीशों को पद से हटाने की प्रक्रिया कौन शुरू कर सकता है?",
        answers: shuffle([
            { text: "केवल राष्ट्रपति", correct: false },
            { text: "संसद", correct: true },
            { text: "प्रधानमंत्री", correct: false },
            { text: "विधि मंत्रालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यायाधीशों को हटाने की प्रक्रिया संसद के किसी भी सदन में शुरू की जा सकती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके लिए एक प्रस्ताव को विशेष बहुमत से पारित करना होता है, जिसके बाद राष्ट्रपति हटाने का आदेश जारी करते हैं।"
    },
     {
        question: "प्रश्न 26. लोकसभा अध्यक्ष अपने 'निर्णायक मत' (Casting Vote) का प्रयोग कब करता है?",
        answers: shuffle([
            { text: "जब वह चाहे", correct: false },
            { text: "अविश्वास प्रस्ताव पर", correct: false },
            { text: "जब मत बराबर (टाई) हों", correct: true },
            { text: "संविधान संशोधन पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोकसभा अध्यक्ष पहली बार में मतदान नहीं करता है, लेकिन किसी विषय पर पक्ष और विपक्ष में बराबर मत पड़ने की स्थिति में गतिरोध को समाप्त करने के लिए वह अपने निर्णायक मत का प्रयोग कर सकता है।"
    },
    {
        question: "प्रश्न 27. कौन सी समिति यह सुनिश्चित करती है कि सरकार द्वारा दिया गया आश्वासन पूरा किया गया है या नहीं?",
        answers: shuffle([
            { text: "याचिका समिति", correct: false },
            { text: "सरकारी आश्वासनों संबंधी समिति", correct: true },
            { text: "अधीनस्थ विधान संबंधी समिति", correct: false },
            { text: "नियम समिति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस समिति का कार्य मंत्रियों द्वारा समय-समय पर सदन में दिए गए आश्वासनों, वचनों और प्रतिज्ञाओं की जांच करना और यह देखना है कि उन्हें किस सीमा तक पूरा किया गया है।"
    },
    {
        question: "प्रश्न 28. यदि कोई सांसद बिना अनुमति के सदन की बैठकों से कितने दिनों तक अनुपस्थित रहता है, तो उसका स्थान रिक्त घोषित किया जा सकता है?",
        answers: shuffle([
            { text: "30 दिन", correct: false },
            { text: "60 दिन", correct: true },
            { text: "90 दिन", correct: false },
            { text: "6 महीने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 101(4) के अनुसार, यदि कोई सदस्य सदन की अनुमति के बिना 60 दिनों की अवधि तक उसकी सभी बैठकों से अनुपस्थित रहता है, तो सदन उसके स्थान को रिक्त घोषित कर सकता है।"
    },
    {
        question: "प्रश्न 29. कौन सा विधेयक बिना राष्ट्रपति की पूर्व सिफारिश के संसद में पेश नहीं किया जा सकता है?",
        answers: shuffle([
            { text: "साधारण विधेयक", correct: false },
            { text: "संविधान संशोधन विधेयक", correct: false },
            { text: "धन विधेयक", correct: true },
            { text: " कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 117(1) के अनुसार, धन विधेयक (अनुच्छेद 110) और वित्त विधेयक (श्रेणी-I) को राष्ट्रपति की सिफारिश के बिना संसद में पेश नहीं किया जा सकता।"
    },
    {
        question: "प्रश्न 30. 'लेखानुदान' (Vote on Account) संसद द्वारा क्यों पारित किया जाता है?",
        answers: shuffle([
            { text: "अप्रत्याशित खर्चों को पूरा करने के लिए।", correct: false },
            { text: "बजट पारित होने तक सरकारी खर्चों को पूरा करने के लिए।", correct: true },
            { text: "राज्यों को वित्तीय सहायता देने के लिए।", correct: false },
            { text: "रक्षा बजट को मंजूरी देने के लिए।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बजट प्रक्रिया पूरी होने में समय लगता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, नए वित्तीय वर्ष की शुरुआत में जब तक बजट पारित नहीं हो जाता, तब तक सरकार के सामान्य कामकाज के लिए आवश्यक खर्चों को पूरा करने हेतु संसद 'लेखानुदान' के माध्यम से अग्रिम राशि स्वीकृत करती है।"
    },
    {
        question: "प्रश्न 31. राज्यसभा का सभापति कौन होता है?",
        answers: shuffle([
            { text: "राज्यसभा के सदस्यों द्वारा निर्वाचित", correct: false },
            { text: "भारत का उपराष्ट्रपति", correct: true },
            { text: "राष्ट्रपति द्वारा नियुक्त", correct: false },
            { text: "प्रधानमंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत का उपराष्ट्रपति राज्यसभा का पदेन सभापति होता है।"
    },
    {
        question: "प्रश्न 32. संसद में 'प्रश्नकाल' (Question Hour) के संदर्भ में 'तारांकित प्रश्न' (Starred Question) क्या होता है?",
        answers: shuffle([
            { text: "जिसका उत्तर लिखित रूप में दिया जाता है।", correct: false },
            { text: "जिसका उत्तर मौखिक रूप से दिया जाता है और पूरक प्रश्न पूछे जा सकते हैं।", correct: true },
            { text: "जो किसी निजी सदस्य से पूछा जाता है।", correct: false },
            { text: "जिसे बिना किसी पूर्व सूचना के पूछा जाता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तारांकित प्रश्नों पर एक तारा (*) लगा होता है और इनका उत्तर मंत्री द्वारा सदन में मौखिक रूप से दिया जाता है, जिसके बाद सदस्य पूरक प्रश्न भी पूछ सकते हैं।"
    },
    {
        question: "प्रश्न 33. यदि सरकार राज्यसभा में किसी विधेयक पर हार जाती है, तो क्या होता है?",
        answers: shuffle([
            { text: "सरकार को त्यागपत्र देना पड़ता है।", correct: false },
            { text: "प्रधानमंत्री को राष्ट्रपति हटा देते हैं।", correct: false },
            { text: "सरकार पर कोई प्रभाव नहीं पड़ता।", correct: true },
            { text: "विधेयक संयुक्त बैठक के लिए भेजा जाता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सरकार केवल लोकसभा के प्रति उत्तरदायी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, राज्यसभा में किसी विधेयक के पारित न होने से सरकार के अस्तित्व पर कोई सीधा प्रभाव नहीं पड़ता, हालांकि यह सरकार के लिए एक नैतिक हार हो सकती है।"
    },
    {
        question: "प्रश्न 34. संसद के संयुक्त अधिवेशन की अध्यक्षता कौन करता है?",
        answers: shuffle([
            { text: "भारत के राष्ट्रपति", correct: false },
            { text: "भारत के उपराष्ट्रपति", correct: false },
            { text: "लोकसभा अध्यक्ष", correct: true },
            { text: "प्रधानमंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के अनुच्छेद 118(4) के अनुसार, दोनों सदनों की संयुक्त बैठक की अध्यक्षता लोकसभा का अध्यक्ष करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उसकी अनुपस्थिति में, लोकसभा का उपाध्यक्ष अध्यक्षता करता है।"
    },
    {
        question: "प्रश्न 35. 'गठबंधन सरकार' (Coalition Government) की स्थिति में संसद की भूमिका पर क्या प्रभाव पड़ता है?",
        answers: shuffle([
            { text: "संसद कमजोर हो जाती है।", correct: false },
            { text: "कार्यपालिका पर संसद का नियंत्रण बढ़ जाता है।", correct: true },
            { text: "राष्ट्रपति की भूमिका कम हो जाती है।", correct: false },
            { text: "कोई प्रभाव नहीं पड़ता।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गठबंधन सरकार में, कार्यपालिका विभिन्न दलों के समर्थन पर निर्भर होती है, जिससे संसद, विशेषकर लोकसभा, अधिक मुखर हो जाती है और कार्यपालिका पर उसका नियंत्रण अपेक्षाकृत मजबूत होता है।"
    },
    {
        question: "प्रश्न 36. 'दलबदल' (Defection) के आधार पर किसी सदस्य की अयोग्यता का निर्णय कौन करता है?",
        answers: shuffle([
            { text: "राष्ट्रपति", correct: false },
            { text: "चुनाव आयोग", correct: false },
            { text: "संबंधित सदन का अध्यक्ष/सभापति", correct: true },
            { text: "उच्चतम न्यायालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दसवीं अनुसूची (दलबदल विरोधी कानून) के तहत, किसी सदस्य की अयोग्यता के प्रश्न पर निर्णय संबंधित सदन के पीठासीन अधिकारी (लोकसभा अध्यक्ष या राज्यसभा के सभापति) द्वारा किया जाता है।"
    },
    {
        question: "प्रश्न 37. संसद द्वारा पारित कौन सा प्रस्ताव सरकार के लिए बाध्यकारी होता है?",
        answers: shuffle([
            { text: "ध्यानाकर्षण प्रस्ताव", correct: false },
            { text: "स्थगन प्रस्ताव", correct: false },
            { text: "निंदा प्रस्ताव", correct: false },
            { text: "अविश्वास प्रस्ताव", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि लोकसभा में अविश्वास प्रस्ताव पारित हो जाता है, तो मंत्रिपरिषद को अनिवार्य रूप से त्यागपत्र देना पड़ता है।"
    },
    {
        question: "प्रश्न 38. राज्य सूची के किसी विषय पर संसद कानून कब बना सकती है?",
        answers: shuffle([
            { text: "जब राष्ट्रपति ऐसा करने का आदेश दें।", correct: false },
            { text: "जब दो या दो से अधिक राज्य ऐसा करने का अनुरोध करें।", correct: true },
            { text: "जब लोकसभा विशेष बहुमत से प्रस्ताव पारित करे।", correct: false },
            { text: "प्रधानमंत्री की सलाह पर।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 252 के अनुसार, यदि दो या दो से अधिक राज्यों के विधानमंडल प्रस्ताव पारित कर संसद से अनुरोध करते हैं कि राज्य सूची के किसी विषय पर कानून बनाया जाए, तो संसद उस विषय पर कानून बना सकती है।"
    },
    {
        question: "प्रश्न 39. संसद का 'सत्रावसान' (Prorogation) कौन करता है?",
        answers: shuffle([
            { text: "लोकसभा अध्यक्ष", correct: false },
            { text: "राज्यसभा का सभापति", correct: false },
            { text: "प्रधानमंत्री", correct: false },
            { text: "राष्ट्रपति", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रपति समय-समय पर संसद के सत्र को समाप्त करने की घोषणा करते हैं, जिसे सत्रावसान कहा जाता है।"
    },
    {
        question: "प्रश्न 40. एक वर्ष में संसद के सामान्यतः कितने सत्र होते हैं?",
        answers: shuffle([
            { text: "एक (बजट सत्र)", correct: false },
            { text: "दो (बजट और शीतकालीन सत्र)", correct: false },
            { text: "तीन (बजट, मानसून और शीतकालीन सत्र)", correct: true },
            { text: "चार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परंपरा के अनुसार, भारत में संसद के एक वर्ष में तीन सत्र होते हैं: बजट सत्र (फरवरी-मई), मानसून सत्र (जुलाई-सितंबर), और शीतकालीन सत्र (नवंबर-दिसंबर)।"
    },
    {
        question: "प्रश्न 41. 'गिलोटिन' (Guillotine) शब्द का प्रयोग संसदीय प्रक्रिया में किसके लिए किया जाता है?",
        answers: shuffle([
            { text: "विधेयक पर चर्चा को रोकने के लिए।", correct: false },
            { text: "अनुदान की मांगों पर बिना चर्चा के मतदान के लिए।", correct: true },
            { text: "सदन को स्थगित करने के लिए।", correct: false },
            { text: "सदस्य को निलंबित करने के लिए।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब बजट पर चर्चा के लिए आवंटित समय समाप्त हो जाता है, तो शेष सभी अनुदान की मांगों को बिना चर्चा के एक साथ मतदान के लिए रखा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रक्रिया को 'गिलोटिन' कहते हैं।"
    },
    {
        question: "प्रश्न 42. संसद की 'सरकारी उपक्रमों संबंधी समिति' (Committee on Public Undertakings) का क्या कार्य है?",
        answers: shuffle([
            { text: "सरकारी नीतियों की समीक्षा करना।", correct: false },
            { text: "सरकारी कंपनियों (PSUs) के खातों और कामकाज की जांच करना।", correct: true },
            { text: "निजी क्षेत्र के उपक्रमों को विनियमित करना।", correct: false },
            { text: "नए सरकारी उपक्रमों की स्थापना की सिफारिश करना।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह समिति नियंत्रक एवं महालेखा परीक्षक (CAG) की रिपोर्टों के आधार पर सार्वजनिक क्षेत्र के उपक्रमों (PSUs) के कामकाज और वित्तीय स्वायत्तता की जांच करती है।"
    },
    {
        question: "प्रश्न 43. किसी नए राज्य के निर्माण या वर्तमान राज्यों की सीमाओं में परिवर्तन करने का अधिकार किसे है?",
        answers: shuffle([
            { text: "संबंधित राज्य विधानमंडल को", correct: false },
            { text: "राष्ट्रपति को", correct: false },
            { text: "संसद को", correct: true },
            { text: "क्षेत्रीय परिषद को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान का अनुच्छेद 3 संसद को यह शक्ति देता है कि वह कानून द्वारा किसी नए राज्य का निर्माण कर सकती है, किसी राज्य का क्षेत्र बढ़ा या घटा सकती है, और राज्यों की सीमाओं या नामों में परिवर्तन कर सकती है।"
    },
    {
        question: "प्रश्न 44. संसदीय समितियों के अध्यक्ष की नियुक्ति कौन करता है?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "राष्ट्रपति", correct: false },
            { text: "संबंधित सदन का अध्यक्ष/सभापति", correct: true },
            { text: "समिति के सदस्य स्वयं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिकांश संसदीय समितियों के अध्यक्षों की नियुक्ति लोकसभा अध्यक्ष (लोकसभा की समितियों के मामले में) या राज्यसभा के सभापति (राज्यसभा की समितियों के मामले में) द्वारा की जाती है।"
    },
    {
        question: "प्रश्न 45. संसद में 'लैम्डक सत्र' (Lame-duck session) किसे कहते हैं?",
        answers: shuffle([
            { text: "मानसून सत्र को", correct: false },
            { text: "नई लोकसभा के चुनाव के बाद, पुरानी लोकसभा का अंतिम सत्र।", correct: true },
            { text: "जब सदन में गणपूर्ति न हो।", correct: false },
            { text: "विशेष रूप से बुलाया गया सत्र।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह उस मौजूदा लोकसभा का अंतिम सत्र होता है, जिसके सदस्य नई लोकसभा के लिए नहीं चुने जा सके हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ऐसे सदस्यों को 'लैम्डक' (पंगु) कहा जाता है।"
    },
    {
        question: "प्रश्न 46. उपराष्ट्रपति को पद से हटाने का प्रस्ताव कहाँ प्रस्तुत किया जा सकता है?",
        answers: shuffle([
            { text: "केवल लोकसभा में", correct: false },
            { text: "केवल राज्यसभा में", correct: true },
            { text: "संसद के किसी भी सदन में", correct: false },
            { text: "लोकसभा और राज्यसभा दोनों में एक साथ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उपराष्ट्रपति राज्यसभा का पदेन सभापति होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, उसे हटाने का प्रस्ताव केवल राज्यसभा में ही प्रभावी बहुमत से पेश किया जा सकता है, जिस पर लोकसभा की साधारण सहमति आवश्यक होती है।"
    },
    {
        question: "प्रश्न 47. संसद की कार्यवाही में प्रयोग की जाने वाली भाषा कौन सी है?",
        answers: shuffle([
            { text: "केवल हिंदी", correct: false },
            { text: "केवल अंग्रेजी", correct: false },
            { text: "हिंदी और अंग्रेजी", correct: true },
            { text: "संविधान की आठवीं अनुसूची में वर्णित कोई भी भाषा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के अनुसार, संसद में कार्य हिंदी या अंग्रेजी में किया जाएगा।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, पीठासीन अधिकारी किसी सदस्य को उसकी मातृभाषा में बोलने की अनुमति दे सकता है।"
    },
    {
        question: "प्रश्न 48. संसद अंतरराष्ट्रीय संधियों और समझौतों को लागू करने के लिए किस सूची के विषय पर कानून बना सकती है?",
        answers: shuffle([
            { text: "केवल संघ सूची", correct: false },
            { text: "केवल समवर्ती सूची", correct: false },
            { text: "राज्य सूची", correct: false },
            { text: "किसी भी सूची पर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 253 के तहत, संसद को किसी भी अंतरराष्ट्रीय संधि, करार या समझौते को लागू करने के लिए भारत के संपूर्ण राज्यक्षेत्र या उसके किसी भाग के लिए कानून बनाने की शक्ति है, भले ही वह विषय राज्य सूची में क्यों न हो।"
    },
    {
        question: "प्रश्न 49. 'अविश्वास प्रस्ताव' प्रस्तुत करने के लिए लोकसभा के कितने सदस्यों के समर्थन की आवश्यकता होती है?",
        answers: shuffle([
            { text: "25 सदस्य", correct: false },
            { text: "50 सदस्य", correct: true },
            { text: "100 सदस्य", correct: false },
            { text: "कुल सदस्यों का 1/4", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोकसभा में मंत्रिपरिषद के विरुद्ध अविश्वास प्रस्ताव लाने के लिए कम से कम 50 सदस्यों के हस्ताक्षर या समर्थन की आवश्यकता होती है।"
    },
    {
        question: "प्रश्न 50. भारत में कानून बनाने की प्रक्रिया में अंतिम चरण क्या है?",
        answers: shuffle([
            { text: "लोकसभा द्वारा विधेयक का पारित होना।", correct: false },
            { text: "राज्यसभा द्वारा विधेयक का पारित होना।", correct: false },
            { text: "राष्ट्रपति की सहमति।", correct: true },
            { text: "उच्चतम न्यायालय द्वारा समीक्षा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोई भी विधेयक संसद के दोनों सदनों द्वारा पारित होने के बाद तब तक कानून नहीं बनता जब तक कि उसे भारत के राष्ट्रपति की सहमति प्राप्त न हो जाए।"
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