const questions = [
    {
        topHeading: "शाहजहाँ पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. शाहजहाँ की मृत्यु कब हुई?",
        answers: shuffle([
            { text: "1658", correct: false },
            { text: "1662", correct: false },
            { text: "1666", correct: true },
            { text: "1670", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आठ वर्षों की कैद के बाद, जनवरी 1666 में शाहजहाँ की मृत्यु आगरा के किले में हो गई।"
    },
    {
        question: "प्रश्न 2. शाहजहाँ को कहाँ दफनाया गया?",
        answers: shuffle([
            { text: "हुमायूँ के मकबरे में", correct: false },
            { text: "दिल्ली की जामा मस्जिद में", correct: false },
            { text: "ताजमहल में, मुमताज महल की कब्र के पास", correct: true },
            { text: "सिकंदरा में, अकबर के मकबरे में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उसकी मृत्यु के बाद, उसे उसकी प्रिय पत्नी मुमताज महल की कब्र के बगल में ताजमहल में ही दफना दिया गया।"
    },
    {
        question: "प्रश्न 3. शाहजहाँ के शासनकाल का राजकवि कौन था?",
        answers: shuffle([
            { text: "फैजी", correct: false },
            { text: "अबुल फजल", correct: false },
            { text: "अब्दुल हमीद लाहौरी", correct: false },
            { text: "कलीम", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अबू जफर, जिन्हें 'कलीम' के नाम से जाना जाता था, शाहजहाँ के दरबारी कवि थे।"
    },
    {
        question: "प्रश्न 4. 'पादशाहनामा', जो शाहजहाँ के शासनकाल का आधिकारिक इतिहास है, का लेखक कौन था?",
        answers: shuffle([
            { text: "इनायत खान", correct: false },
            { text: "मुहम्मद वारिस", correct: false },
            { text: "अब्दुल हमीद लाहौरी", correct: true },
            { text: "मुहम्मद सादिक खान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अब्दुल हमीद लाहौरी ने शाहजहाँ के शासन के पहले 20 वर्षों का इतिहास 'पादशाहनामा' में लिखा है।"
    },
    {
        question: "प्रश्न 5. शाहजहाँ के दरबार के प्रमुख संगीतकार कौन थे?",
        answers: shuffle([
            { text: "तानसेन और हरिदास", correct: false },
            { text: "बाज बहादुर", correct: false },
            { text: "लाल खान और सुखसेन", correct: true },
            { text: "बैजू बावरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शाहजहाँ भी संगीत का प्रेमी था।<br><br><i class='fa-solid fa-angles-right icon'></i> लाल खान गुणसमन्दर (तानसेन के दामाद) और सुखसेन उसके दरबार के प्रमुख संगीतज्ञ थे।"
    },
    {
        question: "प्रश्न 6. शाहजहाँ के काल में चित्रकला की क्या विशेषता थी?",
        answers: shuffle([
            { text: "प्राकृतिक दृश्यों का चित्रण", correct: false },
            { text: "शिकार के दृश्यों की प्रमुखता", correct: false },
            { text: "दरबारी शान-शौकत और व्यक्ति चित्रों में चमक-दमक", correct: true },
            { text: "यूरोपीय प्रभाव की शुरुआत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शाहजहाँ के काल की चित्रकला में जहाँगीर के काल की स्वाभाविकता के स्थान पर रूप-सज्जा, वैभव और सूक्ष्म अलंकरण पर अधिक जोर दिया गया।"
    },
    {
        question: "प्रश्न 7. शाहजहाँ ने 'महाकविराय' की उपाधि किसे दी थी?",
        answers: shuffle([
            { text: "कलीम", correct: false },
            { text: "कुदसी", correct: false },
            { text: "जगन्नाथ पंडित", correct: true },
            { text: "चिंतामणि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संस्कृत के महान विद्वान और कवि, पंडितराज जगन्नाथ शाहजहाँ के दरबारी कवि थे और उन्हें 'महाकविराय' की उपाधि से सम्मानित किया गया था।"
    },
    {
        question: "प्रश्न 8. 'रसगंगाधर' और 'गंगालहरी' नामक संस्कृत ग्रंथों की रचना किसने की?",
        answers: shuffle([
            { text: "विश्वनाथ", correct: false },
            { text: "अप्पय दीक्षित", correct: false },
            { text: "पंडितराज जगन्नाथ", correct: true },
            { text: "नारायण भट्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये दोनों संस्कृत साहित्य की प्रसिद्ध कृतियाँ हैं, जिनकी रचना शाहजहाँ के दरबारी कवि पंडितराज जगन्नाथ ने की थी।"
    },
    {
        question: "प्रश्न 9. शाहजहाँ ने किस सिख शहर को नष्ट करने का आदेश दिया था?",
        answers: shuffle([
            { text: "अमृतसर", correct: false },
            { text: "करतारपुर", correct: false },
            { text: "कीरतपुर साहिब", correct: true },
            { text: "आनंदपुर साहिब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरु हरगोबिंद जी के साथ संघर्ष के दौरान, शाहजहाँ ने सिखों के बढ़ते प्रभाव को रोकने के लिए कीरतपुर साहिब को नष्ट करने का असफल प्रयास किया।"
    },
    {
        question: "प्रश्न 10. शाहजहाँ ने 'आना' सिक्के का प्रचलन शुरू किया। यह किस मूल्य की इकाई थी?",
        answers: shuffle([
            { text: "सोने का सिक्का", correct: false },
            { text: "चांदी का सिक्का", correct: false },
            { text: "रुपये का 1/16 वां हिस्सा", correct: true },
            { text: "तांबे का सिक्का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शाहजहाँ ने आम लेन-देन की सुविधा के लिए 'आना' नामक एक नए सिक्के की शुरुआत की, जो एक रुपये के सोलहवें भाग के बराबर होता था।"
    },
    {
        question: "प्रश्न 11. शाहजहाँ के काल में दक्कन में भू-राजस्व निर्धारण की कौन सी प्रणाली प्रचलित थी?",
        answers: shuffle([
            { text: "दहसाला", correct: false },
            { text: "बटाई", correct: false },
            { text: "नस्क (समूह मूल्यांकन)", correct: true },
            { text: "ठेकेदारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्कन में, पूरे गाँव की उपज का एक मोटा अनुमान लगाकर राजस्व निर्धारित किया जाता था, जिसे नस्क प्रणाली कहते हैं।"
    },
    {
        question: "प्रश्न 12. शाहजहाँ ने सिजदा और पैबोस की प्रथा को समाप्त कर उसके स्थान पर क्या शुरू किया?",
        answers: shuffle([
            { text: "कोर्निश", correct: false },
            { text: "तस्लीम", correct: false },
            { text: "चार तस्लीम", correct: true },
            { text: "सजदा-ए-शुक्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिजदा (दंडवत प्रणाम) को गैर-इस्लामी मानते हुए, शाहजहाँ ने इसके स्थान पर 'चार तस्लीम' की प्रथा शुरू की, जिसमें चार बार झुककर सलाम किया जाता था।"
    },
    {
        question: "प्रश्न 13. शाहजहाँ ने किस कैलेंडर के स्थान पर 'हिजरी संवत्' को पुनः लागू किया?",
        answers: shuffle([
            { text: "विक्रम संवत्", correct: false },
            { text: "शक संवत्", correct: false },
            { text: "इलाही संवत्", correct: true },
            { text: "ग्रेगोरियन कैलेंडर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकबर द्वारा शुरू किए गए सौर कैलेंडर 'इलाही संवत्' को समाप्त कर शाहजहाँ ने पुनः इस्लामी चंद्र कैलेंडर 'हिजरी संवत्' को लागू कर दिया।"
    },
    {
        question: "प्रश्न 14. शाहजहाँ के काल में कंधार के पतन का मुगल साम्राज्य पर क्या दीर्घकालिक प्रभाव पड़ा?",
        answers: shuffle([
            { text: "साम्राज्य समृद्ध हो गया", correct: false },
            { text: "उत्तर-पश्चिम सीमा असुरक्षित हो गई", correct: true },
            { text: "फारस से संबंध सुधर गए", correct: false },
            { text: "कोई प्रभाव नहीं पड़ा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कंधार एक अत्यंत महत्वपूर्ण रणनीतिक किला था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके हाथ से निकल जाने से भारत पर उत्तर-पश्चिम से होने वाले आक्रमणों का खतरा बढ़ गया।"
    },
    {
        question: "प्रश्न 15. शाहजहाँ ने अपने शासन के सातवें वर्ष में कौन सा विवादास्पद आदेश जारी किया था?",
        answers: shuffle([
            { text: "जजिया कर पुनः लगाना", correct: false },
            { text: "नए हिंदू मंदिरों के निर्माण पर रोक", correct: true },
            { text: "सती प्रथा पर प्रतिबंध", correct: false },
            { text: "बाल विवाह पर रोक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपने शासन के शुरुआती दौर में, शाहजहाँ ने एक आदेश जारी किया जिसमें नए हिंदू मंदिरों के निर्माण को प्रतिबंधित कर दिया गया था, हालाँकि पुराने मंदिरों की मरम्मत की अनुमति थी।"
    },
    {
        question: "प्रश्न 16. शाहजहाँ की सबसे बड़ी पुत्री का क्या नाम था, जो एक विदुषी और सूफी विचारों वाली महिला थी?",
        answers: shuffle([
            { text: "रोशनआरा", correct: false },
            { text: "गौहरआरा", correct: false },
            { text: "जहाँआरा", correct: true },
            { text: "मेहरुन्निसा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जहाँआरा बेगम शाहजहाँ की सबसे बड़ी संतान थी।<br><br><i class='fa-solid fa-angles-right icon'></i> वह बहुत प्रभावशाली थी और दारा शिकोह की समर्थक थी।"
    },
    {
        question: "प्रश्न 17. शाहजहाँ की किस पुत्री ने उत्तराधिकार के युद्ध में औरंगजेब का समर्थन किया था?",
        answers: shuffle([
            { text: "जहाँआरा", correct: false },
            { text: "रोशनआरा", correct: true },
            { text: "गौहरआरा", correct: false },
            { text: "किसी ने नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रोशनआरा बेगम ने अपने भाई औरंगजेब का साथ दिया और उसे दारा के खिलाफ महत्वपूर्ण सूचनाएँ प्रदान कीं।"
    },
    {
        question: "प्रश्न 18. शाहजहाँ द्वारा निर्मित 'नहर-ए-बिहिश्त' (स्वर्ग की नहर) कहाँ स्थित है?",
        answers: shuffle([
            { text: "आगरा के किले में", correct: false },
            { text: "लाहौर के शालीमार बाग में", correct: false },
            { text: "दिल्ली के लाल किले में", correct: true },
            { text: "श्रीनगर के निशात बाग में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह नहर यमुना नदी से पानी लेकर लाल किले के महलों, जैसे रंग महल और दीवान-ए-खास, से होकर गुजरती थी और उन्हें ठंडा रखती थी।"
    },
    {
        question: "प्रश्न 19. 'संगीतज्ञों का द्वीप' किसे कहा जाता है?",
        answers: shuffle([
            { text: "आगरा", correct: false },
            { text: "दिल्ली", correct: false },
            { text: "लाहौर", correct: false },
            { text: "ग्वालियर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह प्रश्न तुलनात्मक है।<br><br><i class='fa-solid fa-angles-right icon'></i> ग्वालियर तानसेन जैसे महान संगीतकारों की भूमि रही है, और इसे संगीत के एक प्रमुख केंद्र के रूप में जाना जाता है, यद्यपि इसका सीधा संबंध शाहजहाँ से नहीं है।"
    },
    {
        question: "प्रश्न 20. शाहजहाँ की शाही मुहर पर क्या अंकित होता था?",
        answers: shuffle([
            { text: "केवल उसका नाम", correct: false },
            { text: "कलमा", correct: false },
            { text: "तैमूर से लेकर शाहजहाँ तक के पूर्वजों के नाम", correct: true },
            { text: "कुरान की आयतें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुगल बादशाह अपनी वंशावली पर बहुत गर्व करते थे और उनकी शाही मुहरों पर संस्थापक तैमूर से लेकर वर्तमान शासक तक के नाम अंकित होते थे।"
    },
    {
        question: "प्रश्न 21. फ्रांसीसी यात्री बर्नियर ने शाहजहाँ के किस पुत्र को 'अज्ञानी और घमंडी' बताया है?",
        answers: shuffle([
            { text: "दारा शिकोह", correct: false },
            { text: "शाह शुजा", correct: false },
            { text: "औरंगजेब", correct: false },
            { text: "मुराद बख्श", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बर्नियर ने मुराद को एक बहादुर लेकिन मूर्ख और घमंडी शहजादा बताया, जिसे औरंगजेब ने आसानी से अपने जाल में फँसा लिया।"
    },
    {
        question: "प्रश्न 22. 'समरकंद' और 'बुखारा' पर अधिकार करना किस मुगल बादशाह का एक अधूरा सपना रहा?",
        answers: shuffle([
            { text: "बाबर", correct: false },
            { text: "अकबर", correct: false },
            { text: "जहाँगीर", correct: false },
            { text: "शाहजहाँ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शाहजहाँ अपने पूर्वज तैमूर की राजधानी समरकंद पर अधिकार करना चाहता था, और इसी उद्देश्य से उसने बल्ख और बदख्शां का असफल अभियान चलाया था।"
    },
    {
        question: "प्रश्न 23. शाहजहाँ के काल में अकाल के बारे में किस यूरोपीय यात्री ने विस्तार से लिखा है?",
        answers: shuffle([
            { text: "बर्नियर", correct: false },
            { text: "टैवर्नियर", correct: false },
            { text: "पीटर मुंडी", correct: true },
            { text: "मनुची", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंग्रेज यात्री पीटर मुंडी ने 1630-32 में दक्कन और गुजरात में पड़े भयानक अकाल और उसके कारण हुई तबाही का आँखों देखा वर्णन किया है।"
    },
    {
        question: "प्रश्न 24. 'लाहौर का शालीमार बाग' किसने बनवाया था?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "जहाँगीर", correct: false },
            { text: "शाहजहाँ", correct: true },
            { text: "औरंगजेब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि कश्मीर का शालीमार बाग जहाँगीर ने बनवाया था, लेकिन लाहौर के प्रसिद्ध शालीमार बाग का निर्माण 1642 में शाहजहाँ ने करवाया था।"
    },
    {
        question: "प्रश्न 25. शाहजहाँ के शासनकाल में मुगल साम्राज्य की आर्थिक स्थिति कैसी थी?",
        answers: shuffle([
            { text: "दिवालियापन के कगार पर", correct: false },
            { text: "बहुत कमजोर", correct: false },
            { text: "अत्यंत समृद्ध, लेकिन असमानता के साथ", correct: true },
            { text: "कृषि संकट से ग्रस्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शाहजहाँ का काल मुगल समृद्धि का शिखर था, जिसका प्रमाण उसकी भव्य इमारतें हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन यह समृद्धि आम जनता तक नहीं पहुँचती थी और किसानों तथा कारीगरों की स्थिति बहुत अच्छी नहीं थी।"
    },
    {
        question: "प्रश्न 26. शाहजहाँ के काल के किस चित्रकार को 'पूर्व का राफेल' कहा जाता था?",
        answers: shuffle([
            { text: "बिहजाद", correct: true },
            { text: "मीर सैयद अली", correct: false },
            { text: "दसवंत", correct: false },
            { text: "बिचित्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक तुलनात्मक प्रश्न है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'पूर्व का राफेल' फारस के प्रसिद्ध चित्रकार बिहजाद को कहा जाता है, जिसका प्रभाव मुगल चित्रकला पर भी था।<br><br><i class='fa-solid fa-angles-right icon'></i> शाहजहाँ के काल के प्रमुख चित्रकार बिचित्र, फकीर उल्लाह आदि थे।"
    },
    {
        question: "प्रश्न 27. शाहजहाँ के किस पुत्र ने उपनिषदों के साथ-साथ भगवद्गीता और योगवशिष्ठ का भी फारसी में अनुवाद करवाया?",
        answers: shuffle([
            { text: "औरंगजेब", correct: false },
            { text: "शाह शुजा", correct: false },
            { text: "मुराद बख्श", correct: false },
            { text: "दारा शिकोह", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दारा शिकोह हिंदू धर्मग्रंथों का बहुत सम्मान करता था और उसने इन प्रमुख ग्रंथों का अनुवाद करवाकर हिंदू-मुस्लिम समन्वय को बढ़ावा देने का प्रयास किया।"
    },
    {
        question: "प्रश्न 28. शाहजहाँ के काल में सबसे महत्वपूर्ण उद्योग कौन सा था?",
        answers: shuffle([
            { text: "लोहा उद्योग", correct: false },
            { text: "चीनी उद्योग", correct: false },
            { text: "सूती वस्त्र उद्योग", correct: true },
            { text: "जहाज़ निर्माण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुगल काल में, विशेषकर शाहजहाँ के समय, भारत का सूती और रेशमी वस्त्र उद्योग विश्व प्रसिद्ध था और यह निर्यात का एक प्रमुख स्रोत था।"
    },
    {
        question: "प्रश्न 29. शाहजहाँ के उत्तराधिकार युद्ध में किसने औरंगजेब और मुराद की संयुक्त सेना को तोपखाने से बहुत मदद की?",
        answers: shuffle([
            { text: "शाइस्ता खान", correct: false },
            { text: "जय सिंह", correct: false },
            { text: "मीर जुमला", correct: true },
            { text: "जसवंत सिंह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मीर जुमला, जो गोलकुंडा का पूर्व वजीर था, एक कुशल तोपची और रणनीतिकार था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने औरंगजेब का पक्ष लिया और उसकी तोपखाने की व्यवस्था ने सामूगढ़ के युद्ध में महत्वपूर्ण भूमिका निभाई।"
    },
    {
        question: "प्रश्न 30. 'तारीख-ए-शाहजहाँनी' के लेखक कौन हैं?",
        answers: shuffle([
            { text: "इनायत खान", correct: false },
            { text: "अब्दुल हमीद लाहौरी", correct: false },
            { text: "मुहम्मद सादिक खान", correct: true },
            { text: "मुहम्मद वारिस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुहम्मद सादिक खान द्वारा रचित यह ग्रंथ भी शाहजहाँ के शासनकाल का एक महत्वपूर्ण स्रोत है।"
    },
    {
        question: "प्रश्न 31. शाहजहाँ ने 'झरोखा दर्शन' और 'तुलादान' की प्रथाओं के साथ क्या किया?",
        answers: shuffle([
            { text: "उन्हें बंद कर दिया", correct: false },
            { text: "उन्हें जारी रखा", correct: true },
            { text: "उन्हें और भव्य बना दिया", correct: false },
            { text: "केवल तुलादान को बंद किया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकबर द्वारा शुरू की गई इन प्रथाओं को शाहजहाँ ने भी जारी रखा।<br><br><i class='fa-solid fa-angles-right icon'></i> इन्हें बाद में औरंगजेब ने बंद करवाया था।"
    },
    {
        question: "प्रश्न 32. 'चहल सुतून' (चालीस स्तंभों वाला हॉल) दिल्ली और आगरा के किलों में किस उद्देश्य से बनाया गया था?",
        answers: shuffle([
            { text: "दीवान-ए-खास", correct: false },
            { text: "दीवान-ए-आम", correct: true },
            { text: "रंग महल", correct: false },
            { text: "आरामगाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीवान-ए-आम के हॉल अक्सर कई स्तंभों पर टिके होते थे, इसलिए उन्हें 'चहल सुतून' भी कहा जाता था।"
    },
    {
        question: "प्रश्न 33. शाहजहाँ के काल में किस यूरोपीय शक्ति का प्रभाव भारत में बढ़ रहा था?",
        answers: shuffle([
            { text: "पुर्तगाली", correct: false },
            { text: "डच", correct: false },
            { text: "फ्रांसीसी", correct: false },
            { text: "अंग्रेज", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि डच और फ्रांसीसी भी सक्रिय थे, लेकिन अंग्रेजों ने सूरत और अन्य स्थानों पर अपनी फैक्टरियाँ स्थापित कर ली थीं और वे धीरे-धीरे अपना व्यापारिक प्रभाव बढ़ा रहे थे।"
    },
    {
        question: "प्रश्न 34. शाहजहाँ ने 'मीर जुमला' को किस प्रांत का सूबेदार नियुक्त किया था?",
        answers: shuffle([
            { text: "दक्कन", correct: false },
            { text: "गुजरात", correct: false },
            { text: "मालवा", correct: false },
            { text: "बंगाल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> औरंगजेब के पक्ष में आने के बाद, शाहजहाँ ने मीर जुमला को बंगाल का गवर्नर नियुक्त किया था।"
    },
    {
        question: "प्रश्न 35. 'अनास सागर' झील के किनारे संगमरमर के 'बारहदरी' का निर्माण किसने करवाया था?",
        answers: shuffle([
            { text: "अकबर", correct: false },
            { text: "जहाँगीर", correct: false },
            { text: "शाहजहाँ", correct: true },
            { text: "औरंगजेब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अजमेर में स्थित अनास सागर झील के तट पर शाहजहाँ ने सुंदर सफेद संगमरमर की बारहदरियों (मंडपों) का निर्माण करवाया था।"
    },
    {
        question: "प्रश्न 36. शाहजहाँ की धार्मिक नीति को कैसा माना जाता है?",
        answers: shuffle([
            { text: "अकबर की तरह पूर्ण सहिष्णु", correct: false },
            { text: "औरंगजेब की तरह पूर्ण असहिष्णु", correct: false },
            { text: "अकबर और औरंगजेब के बीच की, जिसमें विरोधाभास था", correct: true },
            { text: "जहाँगीर की तरह पूरी तरह से उदार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शाहजहाँ का शासनकाल अकबर की उदारता और औरंगजेब की कट्टरता के बीच एक संक्रमण काल था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने नए मंदिर बनाने पर रोक लगाई लेकिन संगीत और कला को संरक्षण भी दिया।"
    },
    {
        question: "प्रश्न 37. किस इतिहासकार ने शाहजहाँ के काल को 'मुगल साम्राज्य का मध्याह्न' कहा है, जिसके बाद पतन शुरू हो गया?",
        answers: shuffle([
            { text: "वी. ए. स्मिथ", correct: false },
            { text: "जदुनाथ सरकार", correct: true },
            { text: "सतीश चंद्र", correct: false },
            { text: "लेन-पूल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रसिद्ध इतिहासकार जदुनाथ सरकार का मानना था कि शाहजहाँ का काल बाहरी रूप से स्वर्ण युग दिखता है, लेकिन आंतरिक रूप से इसी समय वे कमजोरियाँ पैदा होने लगी थीं जो बाद में साम्राज्य के पतन का कारण बनीं।"
    },
    {
        question: "प्रश्न 38. 'नाहर-ए-फैज', जो दिल्ली को पानी की आपूर्ति करती थी, की मरम्मत किसने करवाई?",
        answers: shuffle([
            { text: "फिरोज शाह तुगलक", correct: false },
            { text: "अकबर", correct: false },
            { text: "शाहजहाँ", correct: true },
            { text: "औरंगजेब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस पुरानी नहर की मरम्मत करवाकर शाहजहाँ इसे अपनी नई राजधानी शाहजहाँनाबाद तक लाया, जहाँ यह 'नहर-ए-बिहिश्त' कहलाई।"
    },
    {
        question: "प्रश्न 39. शाहजहाँ के दरबार में एक फ्रांसीसी चिकित्सक कौन था?",
        answers: shuffle([
            { text: "टैवर्नियर", correct: false },
            { text: "पीटर मुंडी", correct: false },
            { text: "मनुची", correct: false },
            { text: "फ्रांस्वा बर्नियर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बर्नियर एक चिकित्सक था और उसने दारा शिकोह तथा बाद में मुगल दरबार के कई अमीरों के लिए काम किया।"
    },
    {
        question: "प्रश्न 40. शाहजहाँ के काल में 'मुल्ला सईद' किस क्षेत्र में प्रसिद्ध थे?",
        answers: shuffle([
            { text: "संगीत", correct: false },
            { text: "चित्रकला", correct: false },
            { text: "वास्तुकला", correct: false },
            { text: "खगोल विज्ञान और गणित", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुल्ला सईद शाहजहाँ के दरबार के एक प्रसिद्ध खगोलशास्त्री और गणितज्ञ थे।"
    },
    {
        question: "प्रश्न 41. शाहजहाँ ने ताजमहल की रूपरेखा (नक्शा) को अंतिम रूप देने से पहले किन मकबरों का अध्ययन किया होगा?",
        answers: shuffle([
            { text: "a) शेरशाह का मकबरा", correct: false },
            { text: "b) हुमायूँ का मकबरा", correct: false },
            { text: "c) एत्मादुद्दौला का मकबरा", correct: false },
            { text: "b) और c) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माना जाता है कि ताजमहल की वास्तुकला हुमायूँ के मकबरे के चारबाग पैटर्न और एत्मादुद्दौला के मकबरे के पिएत्रा ड्यूरा और संगमरमर के काम से प्रेरित थी।"
    },
    {
        question: "प्रश्न 42. शाहजहाँ के काल में 'चहार तस्लीम' की प्रथा किसने शुरू की थी?",
        answers: shuffle([
            { text: "जहाँगीर", correct: false },
            { text: "शाहजहाँ", correct: true },
            { text: "औरंगजेब", correct: false },
            { text: "अकबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अभिवादन की एक नई विधि थी जिसे शाहजहाँ ने सिजदा की जगह लागू किया था।"
    },
    {
        question: "प्रश्न 43. शाहजहाँ के किस पुत्र को 'खुशनसीब और बदकिस्मत शहजादा' कहा जाता है?",
        answers: shuffle([
            { text: "औरंगजेब", correct: false },
            { text: "शाह शुजा", correct: false },
            { text: "मुराद बख्श", correct: false },
            { text: "दारा शिकोह", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वह सबसे पसंदीदा, विद्वान और बादशाह का उत्तराधिकारी था (खुशनसीब), लेकिन उत्तराधिकार के युद्ध में हारकर मारा गया (बदकिस्मत)।"
    },
    {
        question: "प्रश्न 44. 'वजीर खान मस्जिद' जो अपनी सुंदर टाइलों के काम के लिए प्रसिद्ध है, कहाँ स्थित है?",
        answers: shuffle([
            { text: "दिल्ली", correct: false },
            { text: "आगरा", correct: false },
            { text: "लाहौर", correct: true },
            { text: "अजमेर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस खूबसूरत मस्जिद का निर्माण शाहजहाँ के शासनकाल के दौरान उसके एक गवर्नर वजीर खान ने करवाया था।"
    },
    {
        question: "प्रश्न 45. शाहजहाँ के काल में अकाल राहत के लिए क्या कदम उठाए गए?",
        answers: shuffle([
            { text: "मुफ्त रसोई (लंगर) की स्थापना", correct: false },
            { text: "किसानों के लगान को माफ़ करना", correct: false },
            { text: "सस्ते दामों पर अनाज बेचना", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1630-32 के भयानक अकाल के दौरान, शाहजहाँ ने पीड़ितों को राहत देने के लिए लंगर खुलवाए, कर माफ़ किए और सरकारी अन्न भंडारों से अनाज वितरित करवाया।"
    },
    {
        question: "प्रश्न 46. 'निशात बाग', जो कश्मीर में है, किसने बनवाया था?",
        answers: shuffle([
            { text: "जहाँगीर", correct: false },
            { text: "शाहजहाँ", correct: false },
            { text: "नूरजहाँ", correct: false },
            { text: "आसफ खान", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डल झील के किनारे स्थित इस खूबसूरत मुगल गार्डन का निर्माण नूरजहाँ के भाई और शाहजहाँ के ससुर आसफ खान ने करवाया था।"
    },
    {
        question: "प्रश्न 47. शाहजहाँ ने 'संगीत' पर प्रतिबंध क्यों नहीं लगाया?",
        answers: shuffle([
            { text: "क्योंकि वह स्वयं एक महान संगीतकार था", correct: false },
            { text: "क्योंकि उसकी पत्नियाँ संगीत पसंद करती थीं", correct: false },
            { text: "क्योंकि उसे संगीत से गहरा लगाव था और वह इसे दरबारी शान का हिस्सा मानता था", correct: true },
            { text: "क्योंकि उलेमाओं ने उसे अनुमति दी थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> औरंगजेब के विपरीत, शाहजहाँ संगीत का बहुत शौकीन था और उसने अपने दरबार में कई प्रसिद्ध संगीतकारों को संरक्षण दिया।"
    },
    {
        question: "प्रश्न 48. 'शाहजहाँनाबाद' की योजना किस वास्तुकार ने बनाई थी?",
        answers: shuffle([
            { text: "उस्ताद अहमद लाहौरी", correct: false },
            { text: "हमीद", correct: false },
            { text: "उस्ताद अहमद और हमीद", correct: true },
            { text: "मीर जुमला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माना जाता है कि शाहजहाँ की नई राजधानी की योजना बनाने में इन दो वास्तुकारों ने मुख्य भूमिका निभाई थी।"
    },
    {
        question: "प्रश्न 49. शाहजहाँ के शासनकाल में मुगल चित्रकला पर किसका प्रभाव बढ़ा?",
        answers: shuffle([
            { text: "फारसी प्रभाव", correct: false },
            { text: "तुर्की प्रभाव", correct: false },
            { text: "यूरोपीय प्रभाव", correct: true },
            { text: "भारतीय (राजपूत) प्रभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शाहजहाँ के काल के चित्रों में यूरोपीय कला की विशेषताओं, जैसे प्रकाश और छाया का प्रयोग (chiaroscuro) और यथार्थवाद, का प्रभाव दिखाई देने लगता है।"
    },
    {
        question: "प्रश्न 50. शाहजहाँ के पुत्रों में से कौन एक कुशल कवि और सुलेखक था?",
        answers: shuffle([
            { text: "औरंगजेब", correct: false },
            { text: "शाह शुजा", correct: false },
            { text: "मुराद बख्श", correct: false },
            { text: "दारा शिकोह", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दारा शिकोह न केवल एक विद्वान और विचारक था, बल्कि वह एक कुशल कवि और नस्तलीक लिपि का एक उत्कृष्ट सुलेखक भी था।"
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