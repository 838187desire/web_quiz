const questions = [
    {
        topHeading: "संविधान में विधायिका के महत्व पर आधारित 50 बहुविकल्पीय प्रश्न (quiz_no.)"
    },
    {
        question: "प्रश्न 1: भारतीय संविधान के अनुसार, संघ की विधायिका को क्या कहा जाता है?",
        answers: shuffle([
            { text: "लोकसभा", correct: false },
            { text: "राज्यसभा", correct: false },
            { text: "संसद", correct: true },
            { text: "विधानमंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान के अनुच्छेद 79 के अनुसार, संघ के लिए एक संसद होगी, जिसमें राष्ट्रपति और दो सदन होंगे, जिन्हें क्रमशः राज्यों की परिषद (राज्यसभा) और लोगों का सदन (लोकसभा) के रूप में जाना जाएगा।"
    },
    {
        question: "प्रश्न 2: संसद का प्रमुख कार्य क्या है?",
        answers: shuffle([
            { text: "कानूनों को लागू करना", correct: false },
            { text: "कानूनों का निर्माण करना", correct: true },
            { text: "न्याय प्रदान करना", correct: false },
            { text: "देश का प्रशासन चलाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विधायिका का सबसे महत्वपूर्ण कार्य देश के लिए कानूनों का निर्माण करना है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे विधायी कार्य कहा जाता है।"
    },
    {
        question: "प्रश्न 3: भारत में कौन सी शासन प्रणाली अपनाई गई है?",
        answers: shuffle([
            { text: "अध्यक्षीय प्रणाली", correct: false },
            { text: "संसदीय प्रणाली", correct: true },
            { text: "राजतंत्रीय प्रणाली", correct: false },
            { text: "तानाशाही प्रणाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत ने ब्रिटिश मॉडल पर आधारित संसदीय शासन प्रणाली को अपनाया है, जिसमें कार्यपालिका अपनी नीतियों और कार्यों के लिए विधायिका के प्रति उत्तरदायी होती है।"
    },
    {
        question: "प्रश्न 4: लोकसभा के सदस्यों का चुनाव किस पद्धति से होता है?",
        answers: shuffle([
            { text: "आनुपातिक प्रतिनिधित्व", correct: false },
            { text: "एकल संक्रमणीय मत", correct: false },
            { text: "प्रत्यक्ष मतदान (फर्स्ट-पास्ट-द-पोस्ट)", correct: true },
            { text: "मनोनयन द्वारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोकसभा के सदस्यों का चुनाव प्रादेशिक निर्वाचन क्षेत्रों से प्रत्यक्ष मतदान के आधार पर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रणाली में, जिस उम्मीदवार को सबसे अधिक वोट मिलते हैं, उसे विजेता घोषित किया जाता है।"
    },
    {
        question: "प्रश्न 5: राज्यसभा के सदस्यों का कार्यकाल कितना होता है?",
        answers: shuffle([
            { text: "5 वर्ष", correct: false },
            { text: "6 वर्ष", correct: true },
            { text: "4 वर्ष", correct: false },
            { text: "यह एक स्थायी सदन है, सदस्यों का कार्यकाल नहीं होता।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राज्यसभा एक स्थायी सदन है जो कभी भंग नहीं होता, लेकिन इसके एक-तिहाई सदस्य हर दो साल में सेवानिवृत्त हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रत्येक सदस्य का कार्यकाल 6 वर्ष का होता है।"
    },
    {
        question: "प्रश्न 6: \"धन विधेयक\" को परिभाषित करने वाला भारतीय संविधान का कौन सा अनुच्छेद है?",
        answers: shuffle([
            { text: "अनुच्छेद 110", correct: true },
            { text: "अनुच्छेद 112", correct: false },
            { text: "अनुच्छेद 108", correct: false },
            { text: "अनुच्छेद 117", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 110 में धन विधेयक की परिभाषा दी गई है।<br><br><i class='fa-solid fa-angles-right icon'></i> कोई विधेयक धन विधेयक है या नहीं, इसका निर्णय लोकसभा अध्यक्ष करता है।"
    },
    {
        question: "प्रश्न 7: लोकसभा में अनुसूचित जातियों और अनुसूचित जनजातियों के लिए सीटों का आरक्षण किस अनुच्छेद के तहत प्रदान किया गया है?",
        answers: shuffle([
            { text: "अनुच्छेद 330", correct: true },
            { text: "अनुच्छेद 332", correct: false },
            { text: "अनुच्छेद 335", correct: false },
            { text: "अनुच्छेद 338", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान का अनुच्छेद 330 लोकसभा में अनुसूचित जातियों और अनुसूचित जनजातियों के लिए सीटों के आरक्षण का प्रावधान करता है।"
    },
    {
        question: "प्रश्न 8: अविश्वास प्रस्ताव किस सदन में पेश किया जाता है?",
        answers: shuffle([
            { text: "केवल लोकसभा में", correct: true },
            { text: "केवल राज्यसभा में", correct: false },
            { text: "किसी भी सदन में", correct: false },
            { text: "दोनों सदनों की संयुक्त बैठक में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंत्रिपरिषद सामूहिक रूप से केवल लोकसभा के प्रति उत्तरदायी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, सरकार के खिलाफ अविश्वास प्रस्ताव केवल लोकसभा में ही लाया जा सकता है।"
    },
    {
        question: "प्रश्न 9: संसद की \"लोक लेखा समिति\" (Public Accounts Committee) में कितने सदस्य होते हैं?",
        answers: shuffle([
            { text: "15 सदस्य (सभी लोकसभा से)", correct: false },
            { text: "22 सदस्य (15 लोकसभा से, 7 राज्यसभा से)", correct: true },
            { text: "30 सदस्य (सभी लोकसभा से)", correct: false },
            { text: "22 सदस्य (15 राज्यसभा से, 7 लोकसभा से)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोक लेखा समिति भारत सरकार के खर्चों की लेखा परीक्षा करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें 22 सदस्य होते हैं, जिनमें 15 लोकसभा और 7 राज्यसभा से चुने जाते हैं।"
    },
    {
        question: "प्रश्न 10: भारतीय संसद की संप्रभुता किस पर प्रतिबंधित है?",
        answers: shuffle([
            { text: "राष्ट्रपति की शक्तियों पर", correct: false },
            { text: "न्यायिक समीक्षा पर", correct: true },
            { text: "विपक्षी दल के नेता पर", correct: false },
            { text: "प्रधानमंत्री की शक्तियों पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में संसद सर्वोच्च है, लेकिन उसकी संप्रभुता पूर्ण नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> सर्वोच्च न्यायालय संसद द्वारा बनाए गए किसी भी कानून को \"न्यायिक समीक्षा\" के तहत असंवैधानिक घोषित कर सकता है यदि वह संविधान के मूल ढांचे का उल्लंघन करता है।"
    },
    {
        question: "प्रश्न 11: शून्य काल (Zero Hour) संसदीय प्रक्रिया में किस देश की देन है?",
        answers: shuffle([
            { text: "ब्रिटेन", correct: false },
            { text: "अमेरिका", correct: false },
            { text: "भारत", correct: true },
            { text: "फ्रांस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शून्य काल संसदीय प्रक्रिया में भारत का एक नवाचार है जो 1962 में शुरू हुआ।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रश्नकाल के तुरंत बाद शुरू होता है और सदस्य बिना किसी पूर्व सूचना के महत्वपूर्ण मामले उठा सकते हैं।"
    },
    {
        question: "प्रश्न 12: राज्य विधान सभा (Vidhan Sabha) के सदस्यों की अधिकतम संख्या कितनी हो सकती है?",
        answers: shuffle([
            { text: "400", correct: false },
            { text: "450", correct: false },
            { text: "500", correct: true },
            { text: "550", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के अनुच्छेद 170 के अनुसार, किसी भी राज्य की विधान सभा में 500 से अधिक और 60 से कम सदस्य नहीं हो सकते।"
    },
    {
        question: "प्रश्न 13: राज्य विधान परिषद (Vidhan Parishad) को कौन समाप्त या बना सकता है?",
        answers: shuffle([
            { text: "राज्यपाल", correct: false },
            { text: "राष्ट्रपति", correct: false },
            { text: "संबंधित राज्य की विधान सभा की सिफारिश पर संसद", correct: true },
            { text: "मुख्यमंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 169 के अनुसार, यदि किसी राज्य की विधान सभा कुल बहुमत और उपस्थित तथा मतदान करने वाले सदस्यों के दो-तिहाई बहुमत से प्रस्ताव पारित करती है, तो संसद उस राज्य में विधान परिषद का गठन या विघटन कर सकती है।"
    },
    {
        question: "प्रश्न 14: कोई विधेयक कानून कब बनता है?",
        answers: shuffle([
            { text: "जब वह लोकसभा में पारित हो जाता है", correct: false },
            { text: "जब वह दोनों सदनों में पारित हो जाता है", correct: false },
            { text: "जब प्रधानमंत्री उस पर हस्ताक्षर कर देते हैं", correct: false },
            { text: "जब राष्ट्रपति अपनी सहमति दे देते हैं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोई भी विधेयक संसद के दोनों सदनों द्वारा पारित होने के बाद कानून का रूप तभी लेता है जब भारत के राष्ट्रपति अनुच्छेद 111 के तहत उस पर अपनी सहमति प्रदान करते हैं।"
    },
    {
        question: "प्रश्न 15: संसद के दो सत्रों के बीच अधिकतम कितना अंतराल हो सकता है?",
        answers: shuffle([
            { text: "3 महीने", correct: false },
            { text: "6 महीने", correct: true },
            { text: "9 महीने", correct: false },
            { text: "1 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के अनुसार, संसद के एक सत्र की अंतिम बैठक और अगले सत्र की पहली बैठक के बीच छह महीने से अधिक का अंतर नहीं होना चाहिए।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका मतलब है कि संसद को वर्ष में कम से कम दो बार मिलना चाहिए।"
    },
    {
        question: "प्रश्न 16: विधायिका का एक महत्वपूर्ण कार्य \"कार्यपालिका पर नियंत्रण\" है। यह नियंत्रण किस माध्यम से नहीं किया जाता है?",
        answers: shuffle([
            { text: "प्रश्नकाल और शून्यकाल", correct: false },
            { text: "विभिन्न प्रस्ताव (अविश्वास, निंदा आदि)", correct: false },
            { text: "न्यायाधीशों की नियुक्ति", correct: true },
            { text: "वित्तीय नियंत्रण (बजट और संसदीय समितियाँ)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यायाधीशों की नियुक्ति कार्यपालिका (राष्ट्रपति) द्वारा की जाती है, हालांकि इसमें न्यायपालिका की भी महत्वपूर्ण भूमिका होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह विधायिका का नियंत्रण कार्य नहीं है, बल्कि शक्तियों के पृथक्करण का एक उदाहरण है।"
    },
    {
        question: "प्रश्न 17: भारत की संचित निधि से धन निकालने के लिए किसकी मंजूरी आवश्यक है?",
        answers: shuffle([
            { text: "भारत के राष्ट्रपति", correct: false },
            { text: "वित्त मंत्री", correct: false },
            { text: "प्रधानमंत्री", correct: false },
            { text: "संसद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत की संचित निधि पर संसद का नियंत्रण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> विनियोग विधेयक (Appropriation Bill) पारित किए बिना इस निधि से कोई भी धन नहीं निकाला जा सकता है।"
    },
    {
        question: "प्रश्न 18: निम्नलिखित में से कौन संसद का हिस्सा नहीं है?",
        answers: shuffle([
            { text: "राष्ट्रपति", correct: false },
            { text: "लोकसभा", correct: false },
            { text: "राज्यसभा", correct: false },
            { text: "भारत का महान्यायवादी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संसद राष्ट्रपति, लोकसभा और राज्यसभा से मिलकर बनती है।<br><br><i class='fa-solid fa-angles-right icon'></i> महान्यायवादी संसद का सदस्य नहीं होता, लेकिन उसे किसी भी सदन की कार्यवाही में बोलने और भाग लेने का अधिकार है, पर वह मतदान नहीं कर सकता।"
    },
    {
        question: "प्रश्न 19: दल-बदल विरोधी कानून (Anti-defection law) किस अनुसूची के तहत आता है?",
        answers: shuffle([
            { text: "आठवीं अनुसूची", correct: false },
            { text: "नौवीं अनुसूची", correct: false },
            { text: "दसवीं अनुसूची", correct: true },
            { text: "ग्यारहवीं अनुसूची", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1985 में 52वें संविधान संशोधन के माध्यम से संविधान में दसवीं अनुसूची जोड़ी गई, जिसमें दल-बदल के आधार पर सांसदों और विधायकों की अयोग्यता के प्रावधान हैं।"
    },
    {
        question: "प्रश्न 20: प्रोटेम स्पीकर (Pro-tem Speaker) का क्या कर्तव्य है?",
        answers: shuffle([
            { text: "A). अध्यक्ष की अनुपस्थिति में सदन की अध्यक्षता करना", correct: false },
            { text: "B). नवनिर्वाचित सदस्यों को शपथ दिलाना", correct: false },
            { text: "C). नियमित अध्यक्ष के चुनाव तक कार्य करना", correct: false },
            { text: "B) और C) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आम चुनाव के बाद, राष्ट्रपति द्वारा लोकसभा के सबसे वरिष्ठ सदस्यों में से एक को प्रोटेम स्पीकर नियुक्त किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उनका मुख्य कर्तव्य नवनिर्वाचित सदस्यों को शपथ दिलाना और नए अध्यक्ष के चुनाव तक सदन का संचालन करना है।"
    },
    {
        question: "प्रश्न 21: कटौती प्रस्ताव (Cut Motion) का उद्देश्य क्या है?",
        answers: shuffle([
            { text: "सरकार की प्रशंसा करना", correct: false },
            { text: "बजट की मांगों में कटौती का प्रस्ताव रखना", correct: true },
            { text: "नए करों का प्रस्ताव करना", correct: false },
            { text: "विधेयक को वापस लेना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कटौती प्रस्ताव लोकसभा के सदस्यों द्वारा बजट पर चर्चा के दौरान सरकार द्वारा प्रस्तुत अनुदान की मांगों में कटौती करने के लिए पेश किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह सरकार की नीति के प्रति असहमति व्यक्त करने का एक साधन है।"
    },
    {
        question: "प्रश्न 22: राज्यसभा धन विधेयक को अधिकतम कितने दिनों तक रोक सकती है?",
        answers: shuffle([
            { text: "14 दिन", correct: true },
            { text: "30 दिन", correct: false },
            { text: "6 महीने", correct: false },
            { text: "अनिश्चित काल तक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धन विधेयक के मामले में राज्यसभा की शक्तियाँ सीमित हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> वह इसे केवल 14 दिनों तक रोक सकती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि 14 दिनों के भीतर विधेयक वापस नहीं किया जाता है, तो उसे दोनों सदनों द्वारा पारित मान लिया जाता है।"
    },
    {
        question: "प्रश्न 23: \"कानून का शासन\" (Rule of Law) के सिद्धांत में विधायिका की क्या भूमिका है?",
        answers: shuffle([
            { text: "यह सुनिश्चित करना कि सभी कानून के अधीन हैं।", correct: false },
            { text: "स्पष्ट और सार्वजनिक रूप से सुलभ कानूनों का निर्माण करना।", correct: false },
            { text: "कानूनों को मनमाने ढंग से लागू होने से रोकना।", correct: false },
            { text: "ये सभी।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विधायिका स्पष्ट कानून बनाकर कानून के शासन को बनाए रखती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह सुनिश्चित करती है कि कार्यपालिका की शक्तियाँ कानून द्वारा सीमित हों और कोई भी कानून से ऊपर न हो, जिससे मनमानी पर रोक लगती है।"
    },
    {
        question: "प्रश्न 24: \"प्रश्नकाल\" (Question Hour) के दौरान पूछे जाने वाले 'तारांकित प्रश्न' का क्या अर्थ है?",
        answers: shuffle([
            { text: "इसका उत्तर लिखित में दिया जाता है।", correct: false },
            { text: "इसका उत्तर मौखिक रूप से दिया जाता है और पूरक प्रश्न पूछे जा सकते हैं।", correct: true },
            { text: "यह एक निजी सदस्य द्वारा पूछा जाता है।", correct: false },
            { text: "इसका उत्तर 10 दिन के नोटिस पर दिया जाता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तारांकित प्रश्नों पर एक तारा (*) लगा होता है और इनका उत्तर मंत्री द्वारा सदन में मौखिक रूप से दिया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उत्तर के बाद सदस्य पूरक प्रश्न भी पूछ सकते हैं।"
    },
    {
        question: "प्रश्न 25: कौन सा अनुच्छेद सांसदों के विशेषाधिकारों से संबंधित है?",
        answers: shuffle([
            { text: "अनुच्छेद 105", correct: true },
            { text: "अनुच्छेद 79", correct: false },
            { text: "अनुच्छेद 123", correct: false },
            { text: "अनुच्छेद 368", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान का अनुच्छेद 105 संसद के सदनों और उनके सदस्यों और समितियों की शक्तियों, विशेषाधिकारों आदि से संबंधित है।"
    },
    {
        question: "प्रश्न 26. अध्यादेश जारी करने की राष्ट्रपति की शक्ति, विधायिका की किस शक्ति के समानांतर है?",
        answers: shuffle([
            { text: "संविधान संशोधन की शक्ति", correct: false },
            { text: "कानून बनाने की शक्ति", correct: true },
            { text: "बजट पारित करने की शक्ति", correct: false },
            { text: "अविश्वास प्रस्ताव की शक्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब संसद सत्र में न हो, तो अनुच्छेद 123 के तहत राष्ट्रपति अध्यादेश जारी कर सकते हैं, जिसका प्रभाव और बल संसद द्वारा बनाए गए कानून के समान ही होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक अस्थायी विधायी शक्ति है।"
    },
    {
        question: "प्रश्न 27. लोकसभा में विपक्ष के नेता का दर्जा प्राप्त करने के लिए किसी दल के पास कम से कम कितने प्रतिशत सीटें होनी चाहिए?",
        answers: shuffle([
            { text: "5%", correct: false },
            { text: "10%", correct: true },
            { text: "15%", correct: false },
            { text: "20%", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विपक्ष के नेता के रूप में मान्यता प्राप्त करने के लिए, किसी भी विपक्षी दल के पास सदन की कुल सदस्य संख्या का कम से कम 10% होना चाहिए।"
    },
    {
        question: "प्रश्न 28. किस राज्य में द्विसदनीय विधायिका (Bicameral Legislature) नहीं है?",
        answers: shuffle([
            { text: "उत्तर प्रदेश", correct: false },
            { text: "महाराष्ट्र", correct: false },
            { text: "पश्चिम बंगाल", correct: true },
            { text: "बिहार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वर्तमान में, भारत के 6 राज्यों (उत्तर प्रदेश, महाराष्ट्र, बिहार, कर्नाटक, आंध्र प्रदेश और तेलंगाना) में द्विसदनीय विधायिका है।<br><br><i class='fa-solid fa-angles-right icon'></i> पश्चिम बंगाल में केवल एक सदन (विधानसभा) है।"
    },
    {
        question: "प्रश्न 29. संसद की \"स्थायी समिति\" (Standing Committee) का क्या कार्य है?",
        answers: shuffle([
            { text: "किसी विशेष विधेयक की जांच करना", correct: false },
            { text: "मंत्रालयों के अनुदान मांगों की जांच करना और उन पर रिपोर्ट देना", correct: true },
            { text: "चुनाव सुधारों पर सुझाव देना", correct: false },
            { text: "केवल वित्तीय मामलों की जांच करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विभागीय स्थायी समितियाँ संबंधित मंत्रालयों के अनुदान मांगों की जांच करती हैं, विधेयकों की पड़ताल करती हैं और मंत्रालयों के वार्षिक कार्यों पर विचार करती हैं।"
    },
    {
        question: "प्रश्न 30. \"संसदीय संप्रभुता\" का सिद्धांत किस देश से लिया गया है?",
        answers: shuffle([
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "यूनाइटेड किंगडम (ब्रिटेन)", correct: true },
            { text: "कनाडा", correct: false },
            { text: "आयरलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संसदीय संप्रभुता का सिद्धांत, जिसका अर्थ है कि संसद सर्वोच्च है और किसी भी कानून को बना या निरस्त कर सकती है, ब्रिटिश संविधान की एक प्रमुख विशेषता है।"
    },
    {
        question: "प्रश्न 31. लोकसभा का विघटन कौन कर सकता है?",
        answers: shuffle([
            { text: "लोकसभा अध्यक्ष", correct: false },
            { text: "प्रधानमंत्री की सलाह पर राष्ट्रपति", correct: true },
            { text: "मुख्य चुनाव आयुक्त", correct: false },
            { text: "राज्यसभा का सभापति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रपति प्रधानमंत्री या मंत्रिपरिषद, जिसका मुखिया प्रधानमंत्री हो, की सलाह पर लोकसभा को उसके 5 साल के कार्यकाल की समाप्ति से पहले भी भंग कर सकते हैं।"
    },
    {
        question: "प्रश्न 32. एक वर्ष में लोकसभा के सामान्यतः कितने सत्र होते हैं?",
        answers: shuffle([
            { text: "एक", correct: false },
            { text: "दो", correct: false },
            { text: "तीन", correct: true },
            { text: "चार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामान्यतः एक वर्ष में संसद के तीन सत्र होते हैं: बजट सत्र (फरवरी-मई), मानसून सत्र (जुलाई-सितंबर), और शीतकालीन सत्र (नवंबर-दिसंबर)।"
    },
    {
        question: "प्रश्न 33. \"कोरम\" या \"गणपूर्ति\" के अभाव में लोकसभा की बैठक को कौन स्थगित कर सकता है?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "संसदीय कार्य मंत्री", correct: false },
            { text: "लोकसभा अध्यक्ष", correct: true },
            { text: "राष्ट्रपति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सदन की किसी भी बैठक के लिए गणपूर्ति (कोरम) सदन के कुल सदस्यों का दसवां हिस्सा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि कोरम पूरा नहीं होता है, तो अध्यक्ष का यह कर्तव्य है कि वह या तो सदन को स्थगित कर दे या बैठक को तब तक के लिए निलंबित कर दे जब तक कि कोरम पूरा न हो जाए।"
    },
    {
        question: "प्रश्न 34. भारत में विधायिका के महत्व का मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "यह कार्यपालिका पर नियंत्रण रखती है।", correct: false },
            { text: "यह जवाबदेही सुनिश्चित करती है।", correct: false },
            { text: "यह जनता का प्रतिनिधित्व करती है।", correct: false },
            { text: "ये सभी।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विधायिका न केवल कानून बनाती है, बल्कि संसदीय प्रणाली में कार्यपालिका (सरकार) पर वित्तीय और प्रशासनिक नियंत्रण रखकर उसकी जवाबदेही भी सुनिश्चित करती है और प्रत्यक्ष रूप से जनता का प्रतिनिधित्व करती है।"
    },
    {
        question: "प्रश्न 35. संविधान संशोधन विधेयक के संबंध में क्या सत्य है?",
        answers: shuffle([
            { text: "A) इसे केवल लोकसभा में पेश किया जा सकता है।", correct: false },
            { text: "B) इस पर संयुक्त बैठक का कोई प्रावधान नहीं है।", correct: false },
            { text: "C) राष्ट्रपति इसे पुनर्विचार के लिए नहीं लौटा सकते।", correct: false },
            { text: "B) और C) दोनों।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान संशोधन विधेयक को संसद के किसी भी सदन में पेश किया जा सकता है और इसे दोनों सदनों द्वारा अलग-अलग विशेष बहुमत से पारित किया जाना चाहिए।<br><br><i class='fa-solid fa-angles-right icon'></i> इस पर संयुक्त बैठक का कोई प्रावधान नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> 24वें संशोधन अधिनियम, 1971 के बाद राष्ट्रपति के लिए इस पर सहमति देना अनिवार्य है।"
    },
    {
        question: "प्रश्न 36. राज्यसभा के सभापति कौन होते हैं?",
        answers: shuffle([
            { text: "राज्यसभा के सदस्यों द्वारा निर्वाचित", correct: false },
            { text: "भारत के उपराष्ट्रपति", correct: true },
            { text: "राष्ट्रपति द्वारा मनोनीत", correct: false },
            { text: "लोकसभा अध्यक्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत का उपराष्ट्रपति राज्यसभा का पदेन सभापति होता है।"
    },
    {
        question: "प्रश्न 37. किस सदन को \"वरिष्ठों का सदन\" (House of Elders) भी कहा जाता है?",
        answers: shuffle([
            { text: "लोकसभा", correct: false },
            { text: "राज्यसभा", correct: true },
            { text: "विधानसभा", correct: false },
            { text: "विधान परिषद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राज्यसभा को राज्यों की परिषद, उच्च सदन और वरिष्ठों का सदन भी कहा जाता है क्योंकि यह एक स्थायी निकाय है और इसके सदस्य आमतौर पर अधिक अनुभवी होते हैं।"
    },
    {
        question: "प्रश्न 38. राज्य विधानमंडल में धन विधेयक किसकी पूर्व अनुमति से पेश किया जाता है?",
        answers: shuffle([
            { text: "मुख्यमंत्री", correct: false },
            { text: "वित्त मंत्री", correct: false },
            { text: "अध्यक्ष", correct: false },
            { text: "राज्यपाल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जिस प्रकार संसद में धन विधेयक राष्ट्रपति की सिफारिश से पेश किया जाता है, उसी प्रकार राज्य विधानमंडल में यह राज्यपाल की पूर्व अनुमति से ही पेश किया जा सकता है।"
    },
    {
        question: "प्रश्न 39. \"विधायिका का महत्व\" किस तथ्य में निहित है कि वह...",
        answers: shuffle([
            { text: "सरकार के वित्तीय संसाधनों को नियंत्रित करती है।", correct: false },
            { text: "बहस और चर्चा का एक मंच है।", correct: false },
            { text: "संवैधानिक पदों के लिए चुनाव में भाग लेती है।", correct: false },
            { text: "ये सभी।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विधायिका बजट पारित करके सरकार के वित्त पर नियंत्रण रखती है, राष्ट्रीय महत्व के मुद्दों पर चर्चा के लिए एक मंच प्रदान करती है, और राष्ट्रपति तथा उपराष्ट्रपति जैसे पदों के चुनाव में भाग लेती है।"
    },
    {
        question: "प्रश्न 40. लोकसभा और राज्यसभा की शक्तियों में असमानता का क्षेत्र कौन सा है?",
        answers: shuffle([
            { text: "साधारण विधेयक पारित करना", correct: false },
            { text: "संविधान में संशोधन", correct: false },
            { text: "वित्तीय मामलों", correct: true },
            { text: "राष्ट्रपति पर महाभियोग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वित्तीय मामलों में लोकसभा राज्यसभा से कहीं अधिक शक्तिशाली है।<br><br><i class='fa-solid fa-angles-right icon'></i> धन विधेयक केवल लोकसभा में पेश किए जा सकते हैं और राज्यसभा उन्हें केवल 14 दिनों के लिए विलंबित कर सकती है।"
    },
    {
        question: "प्रश्न 41. एक सांसद के रूप में चुने जाने के लिए न्यूनतम आयु क्या है?",
        answers: shuffle([
            { text: "लोकसभा के लिए 25 वर्ष और राज्यसभा के लिए 30 वर्ष", correct: true },
            { text: "लोकसभा के लिए 30 वर्ष और राज्यसभा के लिए 25 वर्ष", correct: false },
            { text: "दोनों के लिए 25 वर्ष", correct: false },
            { text: "दोनों के लिए 30 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के अनुसार, लोकसभा का सदस्य बनने के लिए न्यूनतम आयु 25 वर्ष और राज्यसभा का सदस्य बनने के लिए न्यूनतम आयु 30 वर्ष होनी चाहिए।"
    },
    {
        question: "प्रश्न 42. \"लेम-डक सत्र\" (Lame-duck session) किसे कहते हैं?",
        answers: shuffle([
            { text: "नई लोकसभा के गठन से पहले मौजूदा लोकसभा का अंतिम सत्र", correct: true },
            { text: "मानसून सत्र", correct: false },
            { text: "जब सदन में गणपूर्ति न हो", correct: false },
            { text: "बजट सत्र का पहला दिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह मौजूदा लोकसभा का अंतिम सत्र होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस सत्र में वे सदस्य भाग लेते हैं जो नई लोकसभा के लिए फिर से नहीं चुने गए हैं।"
    },
    {
        question: "प्रश्न 43. राष्ट्रपति द्वारा राज्यसभा में कितने सदस्य मनोनीत किए जाते हैं?",
        answers: shuffle([
            { text: "2", correct: false },
            { text: "10", correct: false },
            { text: "12", correct: true },
            { text: "15", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रपति साहित्य, विज्ञान, कला और समाज सेवा के क्षेत्र में विशेष ज्ञान या व्यावहारिक अनुभव रखने वाले 12 व्यक्तियों को राज्यसभा के लिए मनोनीत करते हैं।"
    },
    {
        question: "प्रश्न 44. विधायी प्रक्रिया का पहला चरण क्या है?",
        answers: shuffle([
            { text: "विधेयक पर बहस", correct: false },
            { text: "विधेयक का प्रस्तुतीकरण (पहला वाचन)", correct: true },
            { text: "समिति स्तर पर जांच", correct: false },
            { text: "विधेयक पर मतदान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी भी विधेयक को कानून बनाने की प्रक्रिया उसके सदन में प्रस्तुतीकरण के साथ शुरू होती है, जिसे विधेयक का पहला वाचन कहा जाता है।"
    },
    {
        question: "प्रश्न 45. यदि सरकार राज्यसभा में किसी विधेयक पर हार जाती है, तो क्या होता है?",
        answers: shuffle([
            { text: "सरकार को इस्तीफा देना पड़ता है।", correct: false },
            { text: "प्रधानमंत्री को राष्ट्रपति हटा देते हैं।", correct: false },
            { text: "सरकार पर कोई प्रभाव नहीं पड़ता।", correct: true },
            { text: "विधेयक संयुक्त बैठक के लिए भेजा जाता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सरकार केवल लोकसभा के प्रति उत्तरदायी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, राज्यसभा में किसी विधेयक (जो धन विधेयक न हो) पर हार से सरकार के अस्तित्व पर कोई फर्क नहीं पड़ता।"
    },
    {
        question: "प्रश्न 46. संसदीय शब्दावली में \"गिलोटिन\" (Guillotine) का क्या अर्थ है?",
        answers: shuffle([
            { text: "विधेयक को अस्वीकार करना", correct: false },
            { text: "सदन को स्थगित करना", correct: false },
            { text: "बिना चर्चा के अनुदान की मांगों पर मतदान करना", correct: true },
            { text: "सदस्य को सदन से बाहर निकालना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब बजट पर चर्चा के लिए आवंटित समय समाप्त हो जाता है, तो सभी शेष अनुदान मांगों पर बिना किसी और चर्चा के एक साथ मतदान के लिए रख दिया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रक्रिया को गिलोटिन कहते हैं।"
    },
    {
        question: "प्रश्न 47. विधानसभा अध्यक्ष (Speaker) का चुनाव कौन करता है?",
        answers: shuffle([
            { text: "राज्यपाल", correct: false },
            { text: "मुख्यमंत्री", correct: false },
            { text: "विधानसभा के सदस्य", correct: true },
            { text: "भारत के राष्ट्रपति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राज्य विधानसभा के सदस्य अपने में से ही किसी एक सदस्य को अध्यक्ष के रूप में चुनते हैं।"
    },
    {
        question: "प्रश्न 48. यदि कोई व्यक्ति संसद के दोनों सदनों के लिए चुन लिया जाता है, तो उसे कितने दिनों के भीतर यह बताना होता है कि वह किस सदन में रहना चाहता है?",
        answers: shuffle([
            { text: "10 दिन", correct: true },
            { text: "14 दिन", correct: false },
            { text: "30 दिन", correct: false },
            { text: "6 महीने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोक प्रतिनिधित्व अधिनियम, 1951 के अनुसार, यदि कोई व्यक्ति संसद के दोनों सदनों के लिए चुना जाता है, तो उसे 10 दिनों के भीतर यह सूचित करना होगा कि वह किस सदन की सेवा करना चाहता है, अन्यथा उसकी राज्यसभा की सीट खाली हो जाएगी।"
    },
    {
        question: "प्रश्न 49. संसद में स्थगन प्रस्ताव (Adjournment Motion) लाने का क्या उद्देश्य है?",
        answers: shuffle([
            { text: "सदन की कार्यवाही को स्थगित करना", correct: false },
            { text: "अत्यावश्यक सार्वजनिक महत्व के निश्चित मामले पर चर्चा करना", correct: true },
            { text: "मंत्री के वेतन में कटौती करना", correct: false },
            { text: "सरकार की निंदा करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह प्रस्ताव सदन की सामान्य कार्यवाही को रोककर तत्काल सार्वजनिक महत्व के किसी मुद्दे पर चर्चा करने के लिए लाया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे स्वीकार करने के लिए 50 सदस्यों के समर्थन की आवश्यकता होती है।"
    },
    {
        question: "प्रश्न 50. राज्यसभा को कौन सी अनन्य शक्ति प्राप्त है जो लोकसभा को नहीं है?",
        answers: shuffle([
            { text: "धन विधेयक में संशोधन करना", correct: false },
            { text: "अखिल भारतीय सेवाओं का सृजन करने की सिफारिश करना", correct: true },
            { text: "मंत्रिपरिषद के खिलाफ अविश्वास प्रस्ताव पारित करना", correct: false },
            { text: "वार्षिक वित्तीय विवरण पर मतदान करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 312 के अनुसार, राज्यसभा यदि उपस्थित और मतदान करने वाले सदस्यों के कम से कम दो-तिहाई बहुमत से एक प्रस्ताव पारित करती है, तो संसद राष्ट्रीय हित में एक या एक से अधिक अखिल भारतीय सेवाओं का सृजन कर सकती है।"
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