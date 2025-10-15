const questions = [
    {
        topHeading: "भूकंप पर आधारित 50 MCQs part_2  (quiz_no.)"
    },
    {
        question: "'ब्लैक स्मोकर्स' (Black Smokers) नामक जलतापीय वेंट कहाँ पाए जाते हैं?",
        answers: shuffle([
            { text: "गर्म झरनों के पास भूमि पर", correct: false },
            { text: "रेगिस्तानों में", correct: false },
            { text: "गहरे समुद्र में मध्य-महासागरीय कटकों पर", correct: true },
            { text: "ग्लेशियरों के नीचे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये पानी के नीचे के झरने हैं जो अत्यधिक गर्म, खनिज युक्त पानी छोड़ते हैं जो ठंडे समुद्री जल से मिलते ही काले धुएं जैसा दिखता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'ज्वालामुखी गर्दन' या 'प्लग' का एक प्रसिद्ध उदाहरण डेविल्स टॉवर किस देश में स्थित है?",
        answers: shuffle([
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "कनाडा", correct: false },
            { text: "संयुक्त राज्य अमेरिका (व्योमिंग)", correct: true },
            { text: "दक्षिण अफ्रीका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डेविल्स टॉवर एक प्राचीन ज्वालामुखी का अपरदित अवशेष है, जहाँ केवल कठोर मैग्मा प्लग ही बचा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'सबडक्शन' की प्रक्रिया में क्या होता है जो ज्वालामुखी का कारण बनता है?",
        answers: shuffle([
            { text: "दो प्लेटें अलग हो जाती हैं", correct: false },
            { text: "एक टेक्टोनिक प्लेट दूसरी के नीचे खिसक जाती है और मेंटल में पिघल जाती है", correct: true },
            { text: "दो प्लेटें एक-दूसरे के समानांतर खिसकती हैं", correct: false },
            { text: "महाद्वीपों का निर्माण होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नीचे जाने वाली प्लेट का पानी मेंटल की चट्टानों के गलनांक को कम कर देता है, जिससे मैग्मा बनता है जो सतह पर ज्वालामुखी के रूप में प्रकट होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "हवाई द्वीप एक श्रृंखला में क्यों व्यवस्थित हैं?",
        answers: shuffle([
            { text: "वे एक लंबी दरार पर बने हैं", correct: false },
            { text: "प्रशांत प्लेट एक स्थिर हॉटस्पॉट के ऊपर खिसक रही है", correct: true },
            { text: "यह एक प्राचीन पर्वत श्रृंखला का हिस्सा है", correct: false },
            { text: "समुद्र की धाराओं ने उन्हें इस तरह आकार दिया है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैसे-जैसे प्लेट चलती है, हॉटस्पॉट नए ज्वालामुखियों का निर्माण करता है, जिससे द्वीपों की एक श्रृंखला बन जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> सबसे पुराना द्वीप हॉटस्पॉट से सबसे दूर है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "यदि लावा का प्रवाह बहुत तरल और व्यापक हो, तो किस प्रकार की स्थलाकृति बनने की संभावना है?",
        answers: shuffle([
            { text: "एक तीव्र ढाल वाला स्ट्रैटो ज्वालामुखी", correct: false },
            { text: "एक लावा डोम", correct: false },
            { text: "एक लावा पठार या बाढ़ बेसाल्ट", correct: true },
            { text: "एक सिंडर शंकु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कम चिपचिपा (बेसाल्टिक) लावा दूर तक फैल सकता है, जिससे विशाल, सपाट पठार बनते हैं जैसे कि भारत का दक्कन पठार।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'लैपिली' (Lapilli) शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "ज्वालामुखी राख के कण", correct: false },
            { text: "मटर से लेकर अखरोट के आकार के पाइरोक्लास्टिक टुकड़े", correct: true },
            { text: "बड़े ज्वालामुखी बम", correct: false },
            { text: "पिघला हुआ लावा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैपिली इतालवी शब्द 'छोटे पत्थर' से आया है और यह ज्वालामुखी विस्फोट से निकले 2 से 64 मिमी आकार के टुकड़ों को संदर्भित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'माउंट वेसुवियस' किस प्रकार का ज्वालामुखी है?",
        answers: shuffle([
            { text: "शील्ड ज्वालामुखी", correct: false },
            { text: "सिंडर शंकु", correct: false },
            { text: "स्ट्रैटो ज्वालामुखी (सममिश्र ज्वालामुखी)", correct: true },
            { text: "हॉटस्पॉट ज्वालामुखी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह लावा प्रवाह और पाइरोक्लास्टिक सामग्री की परतों से बना है, जो विस्फोटक विस्फोटों के लिए जाना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "ज्वालामुखी विस्फोट का पूर्वानुमान लगाने के लिए वैज्ञानिक किसका उपयोग करते हैं?",
        answers: shuffle([
            { text: "भूकंपीय गतिविधि की निगरानी", correct: false },
            { text: "जमीनी विरूपण का मापन", correct: false },
            { text: "गैस उत्सर्जन का विश्लेषण", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैज्ञानिक इन सभी संकेतों (छोटे भूकंप, जमीन का फूलना, और गैसों की संरचना में परिवर्तन) का उपयोग करके विस्फोट की संभावना का आकलन करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'टुफ़' (Tuff) किस प्रकार की चट्टान है?",
        answers: shuffle([
            { text: "एक अंतर्वेधी आग्नेय चट्टान", correct: false },
            { text: "ज्वालामुखी राख के जमने और संघनित होने से बनी चट्टान", correct: true },
            { text: "एक कायांतरित चट्टान", correct: false },
            { text: "एक रासायनिक अवसादी चट्टान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब ज्वालामुखी से निकली राख जमा होकर कठोर हो जाती है, तो यह टफ़ नामक चट्टान बनाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ज्वालामुखी विस्फोट को 'प्लिनियन उद्गार' के रूप में वर्गीकृत किया गया है, जो बहुत शक्तिशाली और निरंतर होता है?",
        answers: shuffle([
            { text: "माउंट वेसुवियस का 79 ईस्वी का विस्फोट", correct: true },
            { text: "किलाऊआ का निरंतर प्रवाह", correct: false },
            { text: "स्ट्राम्बोली के छोटे विस्फोट", correct: false },
            { text: "आइसलैंड के दरारी उद्भेदन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्लिनियन उद्गारों का नाम प्लिनी द यंगर के नाम पर रखा गया है, जिन्होंने इस विस्फोट का वर्णन किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इनमें राख और गैस के विशाल स्तंभ बनते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'एंडिसाइट' (Andesite) नामक आग्नेय चट्टान का नाम किस पर्वत श्रृंखला के नाम पर रखा गया है?",
        answers: shuffle([
            { text: "आल्प्स", correct: false },
            { text: "हिमालय", correct: false },
            { text: "रॉकीज", correct: false },
            { text: "एंडीज", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंडिसाइट एक सामान्य ज्वालामुखीय चट्टान है जो एंडीज पर्वत श्रृंखला के ज्वालामुखियों में बहुतायत से पाई जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'डायट्रेम' (Diatreme) क्या है?",
        answers: shuffle([
            { text: "एक प्रकार का क्रेटर", correct: false },
            { text: "एक गैसयुक्त विस्फोट से बना ज्वालामुखीय पाइप या नली", correct: true },
            { text: "एक क्षैतिज लावा जमाव", correct: false },
            { text: "एक गर्म पानी का झरना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये गहरी उत्पत्ति वाले गैस विस्फोटों से बनते हैं और अक्सर सतह पर एक उथले क्रेटर के साथ समाप्त होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> किम्बरलाइट पाइप डायट्रेम का एक प्रकार है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'रिंग ऑफ फायर' पर स्थित देश कौन सा नहीं है?",
        answers: shuffle([
            { text: "जापान", correct: false },
            { text: "चिली", correct: false },
            { text: "इंडोनेशिया", correct: false },
            { text: "ब्राजील", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्राजील दक्षिण अमेरिकी प्लेट के मध्य में स्थित है, जो रिंग ऑफ फायर से बहुत दूर है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस प्रकार के ज्वालामुखी को 'परजीवी शंकु' (Parasitic Cone) कहा जाता है?",
        answers: shuffle([
            { text: "एक स्वतंत्र, छोटा ज्वालामुखी", correct: false },
            { text: "एक बड़े ज्वालामुखी के ढलान पर बना एक छोटा शंकु", correct: true },
            { text: "पानी के नीचे का ज्वालामुखी", correct: false },
            { text: "एक मृत ज्वालामुखी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह तब बनता है जब मैग्मा मुख्य वेंट के बजाय ज्वालामुखी के किनारे से बाहर निकलता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'कोल्लम हिल्स' जो कि एक विलुप्त ज्वालामुखी क्षेत्र माना जाता है, भारत के किस राज्य में है?",
        answers: shuffle([
            { text: "महाराष्ट्र", correct: false },
            { text: "केरल", correct: false },
            { text: "तमिलनाडु", correct: true },
            { text: "कर्नाटक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोल्लम हिल्स (कोल्ली मलाई) को एक प्राचीन विलुप्त ज्वालामुखी का अवशेष माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'बेसाल्टिक' लावा की विशेषता क्या है?",
        answers: shuffle([
            { text: "उच्च सिलिका, उच्च चिपचिपापन", correct: false },
            { text: "निम्न सिलिका, निम्न चिपचिपापन", correct: true },
            { text: "केवल महाद्वीपों पर पाया जाता है", correct: false },
            { text: "बहुत विस्फोटक होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह लावा पतला होता है और आसानी से बहता है, जिससे शील्ड ज्वालामुखी और लावा पठार बनते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह समुद्री तल पर आम है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'रायोलाइट' (Rhyolite) लावा की विशेषता क्या है?",
        answers: shuffle([
            { text: "निम्न सिलिका, तरल प्रवाह", correct: false },
            { text: "उच्च सिलिका, उच्च चिपचिपापन", correct: true },
            { text: "केवल समुद्र में पाया जाता है", correct: false },
            { text: "इसका रंग काला होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह लावा बहुत गाढ़ा होता है, जिससे विस्फोटक उद्गार होते हैं और लावा डोम बनते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ग्रेनाइट के समान संरचना वाला होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'ज्वालामुखी शीत' (Volcanic Winter) की घटना का क्या कारण है?",
        answers: shuffle([
            { text: "ज्वालामुखी से निकली बर्फ", correct: false },
            { text: "ज्वालामुखी विस्फोट से निकली राख और सल्फेट एरोसोल का वायुमंडल में फैलना, जो सूर्य के प्रकाश को रोकता है", correct: true },
            { text: "ज्वालामुखी के कारण वर्षा का होना", correct: false },
            { text: "ज्वालामुखी के कारण समुद्र की धाराओं में परिवर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह वैश्विक तापमान में एक अस्थायी गिरावट का कारण बनता है, जैसा कि 1815 में टैंबोरा के विस्फोट के बाद हुआ था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'मैग्मा चैंबर' (Magma Chamber) क्या है?",
        answers: shuffle([
            { text: "ज्वालामुखी का मुख", correct: false },
            { text: "पृथ्वी की पपड़ी के नीचे पिघली हुई चट्टान का एक बड़ा भंडार", correct: true },
            { text: "लावा प्रवाह द्वारा बनाई गई एक गुफा", correct: false },
            { text: "ज्वालामुखी से निकलने वाली गैस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह मैग्मा का स्रोत है जो ज्वालामुखी विस्फोट के दौरान सतह पर आता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'धोसी पहाड़ी' (Dhosi Hill), एक विलुप्त ज्वालामुखी, भारत के किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "राजस्थान", correct: false },
            { text: "गुजरात", correct: false },
            { text: "हरियाणा", correct: true },
            { text: "पंजाब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हरियाणा-राजस्थान सीमा पर स्थित धोसी पहाड़ी को एक प्राचीन ज्वालामुखी का क्रेटर माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "जब पानी गर्म मैग्मा के संपर्क में आता है, तो किस प्रकार का अत्यधिक विस्फोटक उद्गार होता है?",
        answers: shuffle([
            { text: "हवाईयन उद्गार", correct: false },
            { text: "स्ट्राम्बोलियन उद्गार", correct: false },
            { text: "फ्रेटिक या हाइड्रोवॉल्केनिक उद्गार (Phreatic eruption)", correct: true },
            { text: "शांत दरारी उद्भेदन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पानी तुरंत भाप में बदल जाता है और तेजी से फैलता है, जिससे भाप-चालित विस्फोट होता है जो चट्टान और राख को बाहर फेंकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'एलेयूटियन द्वीप' (Aleutian Islands) ज्वालामुखी श्रृंखला कहाँ स्थित है?",
        answers: shuffle([
            { text: "अटलांटिक महासागर में", correct: false },
            { text: "हिंद महासागर में", correct: false },
            { text: "प्रशांत महासागर में, अलास्का के पास", correct: true },
            { text: "आर्कटिक महासागर में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह ज्वालामुखी चाप प्रशांत प्लेट के उत्तरी अमेरिकी प्लेट के नीचे सबडक्शन के कारण बना है और रिंग ऑफ फायर का हिस्सा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'गाइयोट' (Guyot) क्या है?",
        answers: shuffle([
            { text: "एक सक्रिय ज्वालामुखी", correct: false },
            { text: "एक सपाट-शीर्ष वाला पनडुब्बी पर्वत (एक अपरदित ज्वालामुखी)", correct: true },
            { text: "एक ज्वालामुखी झील", correct: false },
            { text: "एक लावा ट्यूब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये मूल रूप से ज्वालामुखी द्वीप थे जिनका शीर्ष लहरों द्वारा अपरदित होकर सपाट हो गया और फिर वे समुद्र तल से नीचे धंस गए।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'माउंट सिनाबंग' और 'माउंट केलुट' नामक हाल ही में सक्रिय हुए ज्वालामुखी किस देश में हैं?",
        answers: shuffle([
            { text: "जापान", correct: false },
            { text: "फिलीपींस", correct: false },
            { text: "इंडोनेशिया", correct: true },
            { text: "पापुआ न्यू गिनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये दोनों ज्वालामुखी इंडोनेशिया के सबसे सक्रिय और खतरनाक ज्वालामुखियों में गिने जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "ज्वालामुखी का कौन सा उत्पाद विमानन के लिए सबसे बड़ा खतरा पैदा करता है?",
        answers: shuffle([
            { text: "लावा प्रवाह", correct: false },
            { text: "ज्वालामुखी बम", correct: false },
            { text: "ज्वालामुखीय राख", correct: true },
            { text: "अम्लीय वर्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राख के महीन कण जेट इंजनों में पिघलकर जम सकते हैं, जिससे इंजन फेल हो सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह दृश्यता को भी कम करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'टेक्टाइट्स' (Tektites) क्या हैं, जिनका संबंध कभी-कभी ज्वालामुखी या उल्कापिंड प्रभावों से जोड़ा जाता है?",
        answers: shuffle([
            { text: "ज्वालामुखीय चट्टान के टुकड़े", correct: false },
            { text: "पृथ्वी की चट्टानों के पिघलने और फिर से जमने से बने कांच के छोटे पिंड", correct: true },
            { text: "एक प्रकार के जीवाश्म", correct: false },
            { text: "गहरी समुद्री तलछट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये अक्सर उल्कापिंड के प्रभाव से बनते हैं, लेकिन कुछ वैज्ञानिक इन्हें अत्यधिक विस्फोटक ज्वालामुखी उद्गारों से भी जोड़ते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'कोस्टारिका' और 'निकारागुआ' जैसे मध्य अमेरिकी देशों में ज्वालामुखी की उपस्थिति का क्या कारण है?",
        answers: shuffle([
            { text: "एक हॉटस्पॉट", correct: false },
            { text: "मध्य-अटलांटिक कटक", correct: false },
            { text: "कोकोस प्लेट का कैरिबियन प्लेट के नीचे सबडक्शन", correct: true },
            { text: "अफ्रीकी भ्रंश घाटी का विस्तार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सबडक्शन मध्य अमेरिकी ज्वालामुखी चाप का निर्माण करता है, जो रिंग ऑफ फायर का हिस्सा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'इग्नइम्ब्राइट' (Ignimbrite) क्या है?",
        answers: shuffle([
            { text: "एक प्रकार का लावा प्रवाह", correct: false },
            { text: "पाइरोक्लास्टिक प्रवाह के जमाव से बनी चट्टान", correct: true },
            { text: "एक अंतर्वेधी आग्नेय चट्टान", correct: false },
            { text: "ज्वालामुखी के मुख पर जमा सल्फर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह गर्म राख, प्यूमिस और चट्टान के टुकड़ों का एक ठोस जमाव होता है जो एक साथ वेल्ड हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी के इतिहास में सबसे बड़ा ज्ञात बाढ़ बेसाल्ट प्रांत कौन सा है?",
        answers: shuffle([
            { text: "दक्कन ट्रैप", correct: false },
            { text: "साइबेरियन ट्रैप", correct: true },
            { text: "कोलंबिया रिवर बेसाल्ट ग्रुप", correct: false },
            { text: "पाराना-एटेन्डेका ट्रैप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लगभग 250 मिलियन वर्ष पहले बने साइबेरियन ट्रैप का संबंध पर्मियन-ट्राइसिक विलुप्ति की घटना से जोड़ा जाता है, जो पृथ्वी पर सबसे बड़ी सामूहिक विलुप्ति थी।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'क्रेटर्स ऑफ द मून' राष्ट्रीय स्मारक, जो अपने ज्वालामुखीय विशेषताओं के लिए प्रसिद्ध है, कहाँ स्थित है?",
        answers: shuffle([
            { text: "एरिज़ोना, यूएसए", correct: false },
            { text: "हवाई, यूएसए", correct: false },
            { text: "इडाहो, यूएसए", correct: true },
            { text: "कैलिफोर्निया, यूएसए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह क्षेत्र बेसाल्टिक लावा प्रवाह, सिंडर शंकु और लावा ट्यूबों का एक विशाल महासागर जैसा दिखता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस प्राचीन रोमन देवता के नाम पर 'Volcano' (ज्वालामुखी) शब्द की उत्पत्ति हुई है?",
        answers: shuffle([
            { text: "जुपिटर", correct: false },
            { text: "मार्स", correct: false },
            { text: "वल्कन (Vulcan)", correct: true },
            { text: "नेपच्यून", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वल्कन आग और धातु के रोमन देवता थे, जिनका फोर्ज (भट्ठी) एक ज्वालामुखी के नीचे माना जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'मार' (Maar) क्या है?",
        answers: shuffle([
            { text: "एक प्रकार का लावा डोम", correct: false },
            { text: "एक विस्तृत, उथला ज्वालामुखीय क्रेटर जो एक फ्रेटिक विस्फोट से बनता है", correct: true },
            { text: "एक परजीवी शंकु", correct: false },
            { text: "एक प्रकार की ज्वालामुखी गैस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह तब बनता है जब ऊपर उठता हुआ मैग्मा भूजल के संपर्क में आता है, जिससे एक हिंसक भाप विस्फोट होता है जो एक गड्ढा बना देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'एओलियन द्वीप समूह' (Aeolian Islands), जिसमें स्ट्राम्बोली और वल्कानो शामिल हैं, किस देश का हिस्सा हैं?",
        answers: shuffle([
            { text: "ग्रीस", correct: false },
            { text: "तुर्की", correct: false },
            { text: "इटली", correct: true },
            { text: "क्रोएशिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये भूमध्य सागर में सिसिली के उत्तर में स्थित एक ज्वालामुखीय द्वीपसमूह हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'लावा ट्यूब' (Lava Tube) कैसे बनती है?",
        answers: shuffle([
            { text: "जमीन में एक दरार से", correct: false },
            { text: "बहते लावा प्रवाह की ऊपरी सतह के ठंडा और ठोस हो जाने से, जबकि नीचे लावा बहता रहता है", correct: true },
            { text: "गैसों के विस्फोट से", correct: false },
            { text: "पानी के कटाव से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब अंदर का लावा बह जाता है, तो एक खोखली सुरंग या ट्यूब बच जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'उत्तरी द्वीप', न्यूजीलैंड में अधिकांश ज्वालामुखी गतिविधि का क्या कारण है?",
        answers: shuffle([
            { text: "एक हॉटस्पॉट", correct: false },
            { text: "ऑस्ट्रेलियाई प्लेट के नीचे प्रशांत प्लेट का सबडक्शन", correct: true },
            { text: "एक अपसारी सीमा", correct: false },
            { text: "एक महाद्वीपीय भ्रंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सबडक्शन जोन ताउपो ज्वालामुखी क्षेत्र जैसी विशेषताओं के लिए जिम्मेदार है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'येलोस्टोन काल्डेरा' (Yellowstone Caldera) को कभी-कभी क्या कहा जाता है?",
        answers: shuffle([
            { text: "एक शील्ड ज्वालामुखी", correct: false },
            { text: "एक स्ट्रैटो ज्वालामुखी", correct: false },
            { text: "एक सुपरवॉल्केनो", correct: true },
            { text: "एक सिंडर शंकु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक विशाल हॉटस्पॉट के ऊपर स्थित है और इसके अतीत में हुए विनाशकारी विस्फोटों के कारण इसे एक सुपरवॉल्केनो माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'माउंट फूजी' वर्तमान में किस अवस्था में वर्गीकृत है?",
        answers: shuffle([
            { text: "सक्रिय", correct: false },
            { text: "प्रसुप्त (कम जोखिम के साथ सक्रिय)", correct: true },
            { text: "मृत", correct: false },
            { text: "निर्माणाधीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका अंतिम विस्फोट 1707 में हुआ था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे अभी भी एक सक्रिय ज्वालामुखी माना जाता है जिसमें भविष्य में विस्फोट की क्षमता है, हालांकि यह वर्तमान में शांत है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "ज्वालामुखी के मलबे के हिमस्खलन (debris avalanche) का क्या अर्थ है?",
        answers: shuffle([
            { text: "कीचड़ का प्रवाह", correct: false },
            { text: "एक ज्वालामुखी के ढलान का तेजी से ढहना और भूस्खलन", correct: true },
            { text: "लावा का प्रवाह", correct: false },
            { text: "बर्फ का पिघलना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक अत्यंत विनाशकारी घटना है, जैसा कि 1980 में माउंट सेंट हेलेंस के विस्फोट के दौरान हुआ था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'टेफ्रा' (Tephra) शब्द का प्रयोग किसके लिए किया जाता है?",
        answers: shuffle([
            { text: "केवल लावा", correct: false },
            { text: "केवल गैस", correct: false },
            { text: "ज्वालामुखी विस्फोट द्वारा हवा में फेंके गए सभी आकार के चट्टानी टुकड़े", correct: true },
            { text: "तरल कीचड़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसमें राख, लैपिली, और ज्वालामुखी बम सभी शामिल हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'गैलापागोस द्वीप समूह' (Galapagos Islands) का निर्माण मुख्य रूप से किस प्रकार की ज्वालामुखी गतिविधि से हुआ है?",
        answers: shuffle([
            { text: "सबडक्शन जोन", correct: false },
            { text: "अपसारी सीमा", correct: false },
            { text: "हॉटस्पॉट", correct: true },
            { text: "रूपांतरित भ्रंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये द्वीप एक हॉटस्पॉट के ऊपर नाज़का प्लेट के गतिमान होने से बने हैं, जो हवाई के निर्माण के समान है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "ज्वालामुखी से संबंधित स्वास्थ्य खतरों में 'सिलिकोसिस' (Silicosis) नामक बीमारी का क्या कारण है?",
        answers: shuffle([
            { text: "सल्फर गैस में सांस लेना", correct: false },
            { text: "अम्लीय वर्षा के संपर्क में आना", correct: false },
            { text: "ज्वालामुखीय राख के महीन सिलिका कणों में सांस लेना", correct: true },
            { text: "कार्बन डाइऑक्साइड के संपर्क में आना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये छोटे, कांच जैसे कण फेफड़ों को स्थायी नुकसान पहुंचा सकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'कैनरी द्वीप समूह' (Canary Islands) का निर्माण किस ज्वालामुखी प्रक्रिया के लिए जिम्मेदार ठहराया जाता है?",
        answers: shuffle([
            { text: "प्लेट सीमा गतिविधि", correct: false },
            { text: "एक मेंटल प्लम या हॉटस्पॉट", correct: true },
            { text: "एक समुद्री कटक", correct: false },
            { text: "महाद्वीपीय भ्रंशन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्पेन के ये द्वीप, अफ्रीका के तट पर, एक हॉटस्पॉट के ऊपर बने माने जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'सर्टसी' (Surtsey) द्वीप, जो 1963 में एक ज्वालामुखी विस्फोट से बना, किस देश के तट पर स्थित है?",
        answers: shuffle([
            { text: "इटली", correct: false },
            { text: "जापान", correct: false },
            { text: "ग्रीनलैंड", correct: false },
            { text: "आइसलैंड", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सर्टसी का निर्माण वैज्ञानिकों के लिए एक नए भूभाग पर जीवन के उपनिवेशण का अध्ययन करने का एक अनूठा अवसर था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'स्कॉरिया' (Scoria) क्या है?",
        answers: shuffle([
            { text: "एक चिकनी ज्वालामुखीय चट्टान", correct: false },
            { text: "गैस के बुलबुलों से भरी एक बहुत ही छिद्रपूर्ण ज्वालामुखीय चट्टान (आमतौर पर बेसाल्टिक)", correct: true },
            { text: "एक प्रकार का ज्वालामुखीय कांच", correct: false },
            { text: "लावा प्रवाह की सतह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह प्यूमिस के समान है, लेकिन आमतौर पर सघन होता है और पानी में डूब जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> सिंडर शंकु अक्सर स्कॉरिया से बने होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'एल मिस्टी' (El Misti) ज्वालामुखी किस शहर के पास स्थित एक प्रसिद्ध मील का पत्थर है?",
        answers: shuffle([
            { text: "लीमा, पेरू", correct: false },
            { text: "सेंटियागो, चिली", correct: false },
            { text: "क्विटो, इक्वाडोर", correct: false },
            { text: "अरेक्विपा, पेरू", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एल मिस्टी का सममित शंकु अरेक्विपा शहर के ऊपर स्थित है, जो एक सक्रिय स्ट्रैटो ज्वालामुखी है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "ज्वालामुखी विस्फोटों द्वारा वायुमंडल में छोड़ी गई कौन सी गैस ओजोन परत को नष्ट कर सकती है?",
        answers: shuffle([
            { text: "जलवाष्प", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: false },
            { text: "क्लोरीन और ब्रोमीन युक्त हैलोजन गैसें", correct: true },
            { text: "मीथेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बड़े विस्फोटों से निकले हैलोजन समताप मंडल में ओजोन के विनाश में योगदान कर सकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'माउंट दमावंद', जो एक प्रसुप्त ज्वालामुखी है, किस देश का सबसे ऊँचा शिखर है?",
        answers: shuffle([
            { text: "तुर्की", correct: false },
            { text: "ईरान", correct: true },
            { text: "आर्मेनिया", correct: false },
            { text: "अजरबैजान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट दमावंद अल्बोर्ज़ पर्वत श्रृंखला में स्थित है और मध्य पूर्व का सबसे ऊंचा ज्वालामुखी है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'ला पाल्मा' द्वीप, जहाँ 2021 में एक बड़ा विस्फोट हुआ था, किस द्वीपसमूह का हिस्सा है?",
        answers: shuffle([
            { text: "अज़ोरेस", correct: false },
            { text: "हवाई द्वीप", correct: false },
            { text: "कैनरी द्वीप", correct: true },
            { text: "गैलापागोस द्वीप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 2021 के विस्फोट ने कई महीनों तक लावा उत्सर्जित किया, जिससे महत्वपूर्ण संपत्ति का नुकसान हुआ और एक नया भूभाग बना।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'हॉर्निटो' (Hornito) क्या है?",
        answers: shuffle([
            { text: "एक बड़ा ज्वालामुखी शंकु", correct: false },
            { text: "लावा प्रवाह की सतह पर बना एक छोटा, टपकने वाला शंकु", correct: true },
            { text: "एक प्रकार का ज्वालामुखी बम", correct: false },
            { text: "एक जलतापीय वेंट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह तब बनता है जब लावा ट्यूब की छत में दरार से गैस और लावा बाहर निकलते हैं और वेंट के चारों ओर जमा हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'ठंडे' लावा प्रवाह का तापमान लगभग कितना हो सकता है?",
        answers: shuffle([
            { text: "100°C", correct: false },
            { text: "300°C", correct: false },
            { text: "700°C", correct: true },
            { text: "1200°C", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जबकि 'ठंडा' एक सापेक्ष शब्द है, सबसे धीमी गति से बहने वाला, गाढ़ा लावा भी लगभग 700°C (1,300°F) जितना गर्म होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> सबसे गर्म लावा 1200°C से अधिक हो सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
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