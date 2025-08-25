const questions = [
    {
        topHeading: "विश्व के प्रमुख पठारो पर आधारित बहुविकल्पीय प्रश्न (MCQs) part 1  (quiz_no. 74)."
    },
    {
        question: "विश्व का सबसे बड़ा और सबसे ऊँचा पठार कौन सा है?",
        answers: shuffle([
            { text: "तिब्बत का पठार", correct: true },
            { text: "दक्कन का पठार", correct: false },
            { text: "कोलोराडो का पठार", correct: false },
            { text: "पामीर का पठार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तिब्बत का पठार, जिसे \"विश्व की छत\" भी कहा जाता है, क्षेत्रफल और ऊँचाई दोनों में विश्व का सबसे बड़ा पठार है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह हिमालय, काराकोरम और कुनलुन पर्वतमालाओं के बीच स्थित है।"
    },
    {
        question: "पामीर का पठार किन दो पर्वत श्रृंखलाओं के बीच स्थित है?",
        answers: shuffle([
            { text: "हिमालय और आल्प्स", correct: false },
            { text: "कराकोरम और हिंदू कुश", correct: true },
            { text: "एंडीज़ और रॉकीज़", correct: false },
            { text: "यूराल और आल्प्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पामीर का पठार, जिसे \"विश्व की छत\" भी कहते हैं, कराकोरम, हिंदू कुश, कुनलुन और तियान शान जैसी कई पर्वत श्रृंखलाओं के मिलन बिंदु पर स्थित है।"
    },
    {
        question: "दक्कन का पठार किस देश में स्थित है?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "भारत", correct: true },
            { text: "पाकिस्तान", correct: false },
            { text: "बांग्लादेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्कन का पठार प्रायद्वीपीय भारत का एक बड़ा पठार है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत के आठ राज्यों में फैला हुआ है।"
    },
    {
        question: "अनाटोलिया का पठार किस देश में स्थित है?",
        answers: shuffle([
            { text: "ग्रीस", correct: false },
            { text: "इटली", correct: false },
            { text: "तुर्की", correct: true },
            { text: "ईरान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनाटोलिया का पठार तुर्की में स्थित है और यह देश के अधिकांश हिस्से को कवर करता है।"
    },
    {
        question: "कोलोराडो का पठार किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "दक्षिण अमेरिका", correct: false },
            { text: "उत्तरी अमेरिका", correct: true },
            { text: "अफ्रीका", correct: false },
            { text: "यूरोप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोलोराडो का पठार संयुक्त राज्य अमेरिका में स्थित है, जिसमें एरिजोना, यूटा, कोलोराडो और न्यू मैक्सिको जैसे राज्यों के कुछ हिस्से शामिल हैं।"
    },
    {
        question: "बोलीविया का पठार किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "उत्तरी अमेरिका", correct: false },
            { text: "दक्षिण अमेरिका", correct: true },
            { text: "अफ्रीका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बोलीविया का पठार एंडीज़ पर्वतमाला में स्थित है और यह बोलीविया और पेरू के कुछ हिस्सों में फैला हुआ है।"
    },
    {
        question: "ब्राजील का पठार किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "अफ्रीका", correct: false },
            { text: "यूरोप", correct: false },
            { text: "दक्षिण अमेरिका", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्राजील का पठार दक्षिण अमेरिका में स्थित है और यह ब्राजील के अधिकांश पूर्वी, दक्षिणी और मध्य भागों को कवर करता है।"
    },
    {
        question: "मेसेटा का पठार किस देश में स्थित है?",
        answers: shuffle([
            { text: "फ्रांस", correct: false },
            { text: "स्पेन", correct: true },
            { text: "इटली", correct: false },
            { text: "पुर्तगाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेसेटा का पठार इबेरियन प्रायद्वीप में स्थित है और यह स्पेन के केंद्रीय क्षेत्र में फैला हुआ है।"
    },
    {
        question: "शान का पठार किस देश में स्थित है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "चीन", correct: false },
            { text: "म्यांमार", correct: true },
            { text: "थाईलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शान का पठार म्यांमार के पूर्वी भाग में स्थित है और यह देश का सबसे बड़ा पठार है।"
    },
    {
        question: "कोलंबिया का पठार किस देश में स्थित है?",
        answers: shuffle([
            { text: "कनाडा", correct: false },
            { text: "अमेरिका", correct: true },
            { text: "मेक्सिको", correct: false },
            { text: "ब्राजील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोलंबिया का पठार संयुक्त राज्य अमेरिका के वाशिंगटन, ओरेगन और इडाहो राज्यों में स्थित है।"
    },
    {
        question: "ग्रेट बेसिन पठार किस देश में स्थित है?",
        answers: shuffle([
            { text: "कनाडा", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "अमेरिका", correct: true },
            { text: "मेक्सिको", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेट बेसिन पठार संयुक्त राज्य अमेरिका के पश्चिमी हिस्से में स्थित है और यह कई बेसिनों और पर्वत श्रृंखलाओं का एक संग्रह है।"
    },
    {
        question: "चियापास का पठार किस देश में स्थित है?",
        answers: shuffle([
            { text: "मेक्सिको", correct: true },
            { text: "पेरू", correct: false },
            { text: "अर्जेंटीना", correct: false },
            { text: "चिली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चियापास का पठार मेक्सिको के दक्षिणी राज्य चियापास में स्थित है।"
    },
    {
        question: "अबीसीनिया का पठार (इथियोपियाई हाइलैंड्स) किस देश में स्थित है?",
        answers: shuffle([
            { text: "मिस्र", correct: false },
            { text: "सूडान", correct: false },
            { text: "इथियोपिया", correct: true },
            { text: "केन्या", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अबीसीनिया का पठार इथियोपिया में स्थित है और यह देश का एक बड़ा हिस्सा है।"
    },
    {
        question: "पोटवार का पठार किस देश में स्थित है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "पाकिस्तान", correct: true },
            { text: "अफगानिस्तान", correct: false },
            { text: "बांग्लादेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पोटवार का पठार पाकिस्तान के पंजाब प्रांत में स्थित है।"
    },
    {
        question: "किंघाई-तिब्बत पठार को और किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "विश्व की छत", correct: true },
            { text: "विश्व का अन्न भंडार", correct: false },
            { text: "विश्व का रेगिस्तान", correct: false },
            { text: "विश्व का सबसे बड़ा मरुस्थल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किंघाई-तिब्बत पठार अपनी अत्यधिक ऊँचाई और क्षेत्रफल के कारण \"विश्व की छत\" (Roof of the World) के रूप में जाना जाता है।"
    },
    {
        question: "ऑस्ट्रेलिया में स्थित किम्बरले पठार किसलिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "सोने के भंडार", correct: false },
            { text: "हीरे के भंडार", correct: true },
            { text: "कोयले के भंडार", correct: false },
            { text: "लौह अयस्क के भंडार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किम्बरले पठार ऑस्ट्रेलिया के पश्चिमी भाग में स्थित है और यह अपने हीरे के भंडारों के लिए प्रसिद्ध है।"
    },
    {
        question: "पेंटागोनिया का पठार किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "उत्तरी अमेरिका", correct: false },
            { text: "दक्षिण अमेरिका", correct: true },
            { text: "यूरोप", correct: false },
            { text: "अफ्रीका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेंटागोनिया का पठार अर्जेंटीना के दक्षिणी भाग में स्थित है और यह दक्षिण अमेरिका का एक महत्वपूर्ण भौगोलिक क्षेत्र है।"
    },
    {
        question: "मेक्सिको का पठार किस प्रकार का पठार है?",
        answers: shuffle([
            { text: "ज्वालामुखी पठार", correct: true },
            { text: "पर्वत-पठार", correct: false },
            { text: "पर्वतान्तरित पठार", correct: false },
            { text: "तटीय पठार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेक्सिको का पठार एक ज्वालामुखी पठार है जो ज्वालामुखी गतिविधि से बना है और इसे सिएरा माद्रे ओरिएंटल और सिएरा माद्रे ऑक्सीडेंटल पर्वतमालाओं से घिरा हुआ है।"
    },
    {
        question: "मेक्सिको का पठार किसलिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "सोने का उत्पादन", correct: false },
            { text: "चांदी का उत्पादन", correct: true },
            { text: "लौह अयस्क का उत्पादन", correct: false },
            { text: "तांबे का उत्पादन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेक्सिको का पठार चांदी के उत्पादन के लिए विश्व में सबसे महत्वपूर्ण क्षेत्रों में से एक है।"
    },
    {
        question: "ओज़ार्क पठार किस देश में स्थित है?",
        answers: shuffle([
            { text: "फ्रांस", correct: false },
            { text: "अमेरिका", correct: true },
            { text: "जर्मनी", correct: false },
            { text: "कनाडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओज़ार्क पठार संयुक्त राज्य अमेरिका के मिसौरी, अरकंसास और ओक्लाहोमा राज्यों में स्थित है।"
    },
    {
        question: "मेसेटा का पठार किस प्रकार का पठार है?",
        answers: shuffle([
            { text: "ज्वालामुखी पठार", correct: false },
            { text: "महाद्वीपीय पठार", correct: true },
            { text: "पर्वतान्तरित पठार", correct: false },
            { text: "तटीय पठार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेसेटा का पठार इबेरियन प्रायद्वीप के केंद्रीय भाग में स्थित एक महाद्वीपीय पठार है।"
    },
    {
        question: "तिब्बत का पठार किन दो पर्वतमालाओं के बीच स्थित है?",
        answers: shuffle([
            { text: "हिमालय और काराकोरम", correct: false },
            { text: "हिमालय और कुनलुन", correct: true },
            { text: "एंडीज़ और रॉकीज़", correct: false },
            { text: "आल्प्स और यूराल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तिब्बत का पठार हिमालय पर्वतमाला के दक्षिण में और कुनलुन पर्वतमाला के उत्तर में स्थित है।"
    },
    {
        question: "कोलोराडो पठार किस नदी द्वारा कटा हुआ है, जिससे ग्रैंड कैनियन बना है?",
        answers: shuffle([
            { text: "मिसिसिपी नदी", correct: false },
            { text: "कोलोराडो नदी", correct: true },
            { text: "रियो ग्रांडे नदी", correct: false },
            { text: "हडसन नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोलोराडो नदी ने अपनी शक्ति से कोलोराडो पठार को काटा है, जिससे विश्व प्रसिद्ध ग्रैंड कैनियन का निर्माण हुआ है।"
    },
    {
        question: "मेक्सिको का पठार किस प्रकार का पठार है?",
        answers: shuffle([
            { text: "ज्वालामुखी पठार", correct: true },
            { text: "पर्वत-पठार", correct: false },
            { text: "पर्वतान्तरित पठार", correct: false },
            { text: "तटीय पठार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेक्सिको का पठार एक ज्वालामुखी पठार है जो ज्वालामुखी गतिविधि से बना है और इसे सिएरा माद्रे ओरिएंटल और सिएरा माद्रे ऑक्सीडेंटल पर्वतमालाओं से घिरा हुआ है।"
    },
    {
        question: "विश्व का सबसे बड़ा पर्वतान्तरित पठार (Intermontane Plateau) कौन सा है?",
        answers: shuffle([
            { text: "दक्कन का पठार", correct: false },
            { text: "तिब्बत का पठार", correct: true },
            { text: "कोलोराडो का पठार", correct: false },
            { text: "पामीर का पठार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पर्वतान्तरित पठार वे होते हैं जो पूरी तरह या आंशिक रूप से पर्वत श्रृंखलाओं से घिरे होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> तिब्बत का पठार हिमालय और कुनलुन पर्वतमालाओं के बीच स्थित होने के कारण विश्व का सबसे बड़ा पर्वतान्तरित पठार है।"
    },
    {
        question: "लॉरेंटियन पठार (कनाडियन शील्ड) किस देश में स्थित है?",
        answers: shuffle([
            { text: "कनाडा", correct: true },
            { text: "अमेरिका", correct: false },
            { text: "मेक्सिको", correct: false },
            { text: "ब्राजील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लॉरेंटियन पठार, जिसे कनाडियन शील्ड भी कहा जाता है, कनाडा के अधिकांश हिस्से और संयुक्त राज्य अमेरिका के कुछ हिस्सों में फैला हुआ है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक प्राचीन भूवैज्ञानिक संरचना है।"
    },
    {
        question: "ईरान का पठार किस पर्वतमाला से घिरा है?",
        answers: shuffle([
            { text: "हिंदु कुश और सुलेमान", correct: false },
            { text: "एलबुर्ज और जैग्रोस", correct: true },
            { text: "यूराल और आल्प्स", correct: false },
            { text: "हिमालय और कराकोरम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ईरान का पठार एलबुर्ज पर्वतमाला और जैग्रोस पर्वतमाला के बीच स्थित है।"
    },
    {
        question: "मंगोलिया का पठार किन देशों में फैला हुआ है?",
        answers: shuffle([
            { text: "मंगोलिया और रूस", correct: false },
            { text: "मंगोलिया और चीन", correct: true },
            { text: "चीन और रूस", correct: false },
            { text: "मंगोलिया और कजाकिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगोलिया का पठार मंगोलिया और चीन के भीतरी भागों में फैला हुआ है।"
    },
    {
        question: "मासी पठार किस देश में स्थित है?",
        answers: shuffle([
            { text: "केन्या", correct: true },
            { text: "इथियोपिया", correct: false },
            { text: "तंजानिया", correct: false },
            { text: "नाइजीरिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मासी पठार केन्या में स्थित है, और यह मासाई जनजाति का घर है।"
    },
    {
        question: "यूकोन का पठार किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "उत्तरी अमेरिका", correct: true },
            { text: "दक्षिण अमेरिका", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूकोन का पठार अलास्का (अमेरिका) और कनाडा के यूकोन क्षेत्र में स्थित है।"
    },
    {
        question: "तिब्बत का पठार किन दो पर्वतमालाओं के बीच स्थित है?",
        answers: shuffle([
            { text: "हिमालय और काराकोरम", correct: false },
            { text: "हिमालय और कुनलुन", correct: true },
            { text: "एंडीज़ और रॉकीज़", correct: false },
            { text: "आल्प्स और यूराल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तिब्बत का पठार हिमालय पर्वतमाला के दक्षिण में और कुनलुन पर्वतमाला के उत्तर में स्थित है।"
    },
    {
        question: "ओकावांगो बेसिन किस पठार का हिस्सा है?",
        answers: shuffle([
            { text: "किम्बरले पठार", correct: false },
            { text: "ब्राजील का पठार", correct: false },
            { text: "कालाहारी पठार", correct: true },
            { text: "अबीसीनिया का पठार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओकावांगो बेसिन कालाहारी पठार का हिस्सा है, जो बोत्सवाना में स्थित है।"
    },
    {
        question: "विश्व का सबसे बड़ा पठार कौन सा है जो एक ही देश में स्थित है?",
        answers: shuffle([
            { text: "तिब्बत का पठार", correct: false },
            { text: "दक्कन का पठार", correct: false },
            { text: "कोलोराडो का पठार", correct: false },
            { text: "ब्राजील का पठार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हालांकि तिब्बत का पठार सबसे बड़ा है, यह कई देशों में फैला है।<br><br><i class='fa-solid fa-angles-right icon'></i> ब्राजील का पठार सबसे बड़ा पठार है जो पूरी तरह से एक ही देश (ब्राजील) में स्थित है।"
    },
    {
        question: "ऑस्ट्रेलिया में स्थित पठारों में से कौन सा पठार पश्चिमी ऑस्ट्रेलिया में है?",
        answers: shuffle([
            { text: "किम्बरले पठार", correct: true },
            { text: "एथर्टन पठार", correct: false },
            { text: "न्यू इंग्लैंड पठार", correct: false },
            { text: "दक्कन पठार (ऑस्ट्रेलिया में नहीं)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किम्बरले पठार ऑस्ट्रेलिया के पश्चिमी भाग में स्थित है।"
    },
    {
        question: "पोटवार का पठार किस नदी के उत्तर में स्थित है?",
        answers: shuffle([
            { text: "सिंधु नदी", correct: true },
            { text: "झेलम नदी", correct: false },
            { text: "रावी नदी", correct: false },
            { text: "चिनाब नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पोटवार का पठार पाकिस्तान में सिंधु और झेलम नदियों के बीच स्थित है, लेकिन मुख्य रूप से सिंधु के उत्तर में है।"
    },
    {
        question: "पामीर के पठार को \"विश्व की छत\" क्यों कहा जाता है?",
        answers: shuffle([
            { text: "यह विश्व का सबसे ऊँचा पठार है", correct: false },
            { text: "यह विश्व का सबसे बड़ा पठार है", correct: false },
            { text: "यहाँ से कई पर्वत श्रृंखलाएं निकलती हैं", correct: true },
            { text: "यह एक बहुत ही समतल क्षेत्र है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पामीर के पठार को \"विश्व की छत\" इसलिए कहा जाता है क्योंकि यह कई प्रमुख पर्वत श्रृंखलाओं (जैसे हिमालय, हिंदू कुश, कुनलुन, आदि) का मिलन बिंदु है।"
    },
    {
        question: "स्पेन में मेसेटा पठार के उत्तरी किनारे पर कौन सी पर्वतमाला स्थित है?",
        answers: shuffle([
            { text: "पिरेनीज़", correct: false },
            { text: "कैंटेब्रियन पर्वत", correct: true },
            { text: "सिएरा मोरेना", correct: false },
            { text: "सिएरा नेवादा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेसेटा पठार के उत्तरी किनारे पर कैंटेब्रियन पर्वतमाला स्थित है।"
    },
    {
        question: "तिब्बत के पठार की औसत ऊँचाई कितनी है?",
        answers: shuffle([
            { text: "2,000 मीटर", correct: false },
            { text: "3,500 मीटर", correct: false },
            { text: "4,500 मीटर से अधिक", correct: true },
            { text: "1,500 मीटर से कम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तिब्बत के पठार की औसत ऊँचाई 4,500 मीटर से अधिक है, जो इसे विश्व का सबसे ऊँचा पठार बनाता है।"
    },
    {
        question: "कैस्केड पर्वत के पूर्व में कौन सा पठार स्थित है?",
        answers: shuffle([
            { text: "कोलंबिया पठार", correct: true },
            { text: "कोलोराडो पठार", correct: false },
            { text: "ओज़ार्क पठार", correct: false },
            { text: "ग्रेट बेसिन पठार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोलंबिया पठार, संयुक्त राज्य अमेरिका के प्रशांत उत्तर-पश्चिम क्षेत्र में स्थित है और यह कैस्केड पर्वतमाला के पूर्व में है।"
    },
    {
        question: "दक्कन पठार का निर्माण किस भूवैज्ञानिक युग में हुआ था?",
        answers: shuffle([
            { text: "प्लेस्टोसीन", correct: false },
            { text: "मेसोजोइक", correct: false },
            { text: "क्रेटेशियस", correct: true },
            { text: "सेनोजोइक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्कन पठार का निर्माण क्रेटेशियस युग के अंत में बड़े पैमाने पर ज्वालामुखी विस्फोटों से हुआ था।"
    },
    {
        question: "ऑस्ट्रेलिया में स्थित कौन सा पठार क्वींसलैंड में है?",
        answers: shuffle([
            { text: "किम्बरले पठार", correct: false },
            { text: "एथर्टन पठार", correct: true },
            { text: "न्यू इंग्लैंड पठार", correct: false },
            { text: "दक्कन पठार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एथर्टन पठार ऑस्ट्रेलिया के क्वींसलैंड राज्य में स्थित है।"
    },
    {
        question: "मेसेटा का पठार किस प्रकार के जलवायु क्षेत्र में स्थित है?",
        answers: shuffle([
            { text: "उष्णकटिबंधीय", correct: false },
            { text: "भूमध्यसागरीय", correct: true },
            { text: "शीतोष्ण", correct: false },
            { text: "आर्कटिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेसेटा का पठार इबेरियन प्रायद्वीप के भूमध्यसागरीय जलवायु क्षेत्र में स्थित है।"
    },
    {
        question: "तुर्कान पठार किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "एशिया", correct: true },
            { text: "अफ्रीका", correct: false },
            { text: "यूरोप", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तुर्कान पठार अफगानिस्तान, जो कि एशिया का एक देश है, में स्थित है।"
    },
    {
        question: "विश्व का सबसे पुराना और विशालतम पठार कौन सा है?",
        answers: shuffle([
            { text: "तिब्बत का पठार", correct: false },
            { text: "पामीर का पठार", correct: false },
            { text: "दक्कन का पठार", correct: false },
            { text: "प्रायद्वीपीय पठार (भारत)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रायद्वीपीय पठार (जिसमें दक्कन का पठार भी शामिल है) भारत का सबसे पुराना और सबसे बड़ा भूवैज्ञानिक क्षेत्र है।"
    },
    {
        question: "तिब्बत के पठार पर कौन सी नदी बहती है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "ब्रह्मपुत्र", correct: true },
            { text: "नील", correct: false },
            { text: "अमेज़न", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्रह्मपुत्र नदी तिब्बत के पठार से निकलती है, जहाँ इसे यारलुंग त्संगपो के नाम से जाना जाता है।"
    },
    {
        question: "बोलीविया का पठार किस प्रकार का पठार है?",
        answers: shuffle([
            { text: "पर्वतान्तरित पठार", correct: true },
            { text: "लावा पठार", correct: false },
            { text: "महाद्वीपीय पठार", correct: false },
            { text: "तटीय पठार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बोलीविया का पठार एंडीज पर्वतमाला के बीच स्थित होने के कारण एक पर्वतान्तरित पठार है।"
    },
    {
        question: "मेक्सिको के पठार को कौन सी पर्वतमालाएँ घेरती हैं?",
        answers: shuffle([
            { text: "रॉकीज और एंडीज", correct: false },
            { text: "सिएरा माद्रे ओरिएंटल और सिएरा माद्रे ऑक्सीडेंटल", correct: true },
            { text: "हिमालय और कुनलुन", correct: false },
            { text: "एलबुर्ज और जैग्रोस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेक्सिको का पठार पूर्वी सिएरा माद्रे ओरिएंटल और पश्चिमी सिएरा माद्रे ऑक्सीडेंटल पर्वतमालाओं से घिरा हुआ है।"
    },
    {
        question: "कोलोराडो पठार को किस पठार से अलग किया गया है?",
        answers: shuffle([
            { text: "ग्रेट बेसिन पठार", correct: true },
            { text: "कोलंबिया पठार", correct: false },
            { text: "मेक्सिको का पठार", correct: false },
            { text: "दक्कन का पठार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोलोराडो पठार और ग्रेट बेसिन पठार एक दूसरे के पड़ोसी हैं और रॉकी पर्वतमाला द्वारा अलग होते हैं।"
    },
    {
        question: "अनाटोलिया के पठार को और किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "एशिया माइनर", correct: true },
            { text: "मध्य पूर्व का दिल", correct: false },
            { text: "तुर्की की छत", correct: false },
            { text: "यूरोप का प्रवेश द्वार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनाटोलिया के पठार को अक्सर एशिया माइनर के नाम से जाना जाता है।"
    },
    {
        question: "पोटवार का पठार किस नदी के उत्तर में स्थित है?",
        answers: shuffle([
            { text: "सिंधु नदी", correct: true },
            { text: "झेलम नदी", correct: false },
            { text: "रावी नदी", correct: false },
            { text: "चिनाब नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पोटवार का पठार पाकिस्तान में सिंधु और झेलम नदियों के बीच स्थित है, लेकिन मुख्य रूप से सिंधु के उत्तर में है।"
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